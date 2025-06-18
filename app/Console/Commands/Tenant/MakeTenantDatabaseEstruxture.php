<?php

namespace App\Console\Commands\Tenant;

use App\Models\Manager\TenantModel;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class MakeTenantDatabaseEstruxture extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:tenantDb {tenantId? : The tenant id (optional)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a Database Exstructure for Tenant';

    /**
     * Execute the console command.
     *
     * @return bool|null
     */
    public function handle()
    {
        try {
            $tenantId = $this->argument('tenantId');

            if(empty($tenantId)) {
                $tenantId = $this->ask('Please provide the tenant ID');
            }

            if(!is_numeric($tenantId) || $tenantId <= 0) {
                $this->error('The tenant ID must be a positive integer.');
                return 1;
            }

            // Verify if tenant exists
            if(!TenantModel::where('id', $tenantId)->exists()) {
                $this->error('Tenant not found.');
                return 1;
            }

            // Get all migration files
            $migrations = $this->getMigrationFiles();

            // Create database if not exists
            $this->createDatabase($tenantId);

            // Run migrations
            foreach($migrations as $migration) {
                $this->info("Running migration: {$migration['name']}");
                new $migration['class']($tenantId)->up();
            }

            $this->info('Tenant database structure created successfully.');
            return 0;

        } catch (\Exception $e) {
            $this->error('Error creating tenant database structure: ' . $e->getMessage());
            return 1;
        }
    }

    private function getMigrationFiles()
    {
        $migrations = [];
        $path = database_path('migrations/tenant');

        if (!File::exists($path)) {
            throw new \Exception("Migrations directory not found: {$path}");
        }

        $files = File::files($path);

        foreach($files as $file) {
            if($file->getExtension() === 'php' && $file->getFilename() !== '_TenantHelperMigration.php') {
                $className = 'Database\\Migrations\\Tenant\\' . pathinfo($file->getFilename(), PATHINFO_FILENAME);
                $migrations[] = [
                    'name' => $file->getFilename(),
                    'class' => $className
                ];
            }
        }

        return $migrations;
    }

    private function createDatabase($tenantId)
    {
        $databaseName = 'tenant_' . $tenantId;

        // Create database if not exists
        DB::statement("CREATE DATABASE IF NOT EXISTS {$databaseName}");

        // Configure connection
        config([
            'database.connections.tenant_' . $tenantId => [
                'driver' => 'mysql',
                'host' => config('database.connections.mysql.host'),
                'port' => config('database.connections.mysql.port'),
                'database' => $databaseName,
                'username' => config('database.connections.mysql.username'),
                'password' => config('database.connections.mysql.password'),
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_unicode_ci',
                'prefix' => '',
                'strict' => true,
                'engine' => null,
            ]
        ]);
    }
}

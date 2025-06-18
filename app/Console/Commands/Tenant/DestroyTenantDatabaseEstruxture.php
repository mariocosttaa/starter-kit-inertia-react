<?php

namespace App\Console\Commands\Tenant;

use App\Models\Manager\TenantModel;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DestroyTenantDatabaseEstruxture extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'destroy:tenantDb {tenantId? : The tenant id (optional)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Destroy a Database Exstructure for Tenant';

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

            // Run migrations in reverse order
            foreach(array_reverse($migrations) as $migration) {
                $this->info("Rolling back migration: {$migration['name']}");
                new $migration['class']($tenantId)->down();
            }

            // Drop database
            $databaseName = 'tenant_' . $tenantId;
            DB::statement("DROP DATABASE IF EXISTS {$databaseName}");

            $this->info('Tenant database structure destroyed successfully.');
            return 0;

        } catch (\Exception $e) {
            $this->error('Error Destroying Tenant database structure: ' . $e->getMessage());
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
}

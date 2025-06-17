<?php

namespace App\Console\Commands\Tenancy;

use App\Models\Manager\TenancyModel;

use Database\Migrations\Tenancy\CreateIconsTable;
use Database\Migrations\Tenancy\CreateNetworksTable;
use Database\Migrations\Tenancy\CreateAircraftsTable;
use Database\Migrations\Tenancy\CreateAirlineTable;
use Database\Migrations\Tenancy\CreateRanksTable;
use Database\Migrations\Tenancy\CreateRolesTable;
use Database\Migrations\Tenancy\CreateReservedFlightsTable;
use Database\Migrations\Tenancy\CreateCharterFlightTable;
use Database\Migrations\Tenancy\CreateDownloadsTable;
use Database\Migrations\Tenancy\CreateFlightsTable;
use Database\Migrations\Tenancy\CreateEventsTable;
use Database\Migrations\Tenancy\CreateIntraEmailTable;
use Database\Migrations\Tenancy\CreateNotificationTable;
use Database\Migrations\Tenancy\CreatePermissionsTable;
use Database\Migrations\Tenancy\CreateScheduleFlightTable;
use Database\Migrations\Tenancy\CreateToursTable;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class DestroyTenancyDatabaseEstruxture extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'destroy:tenancyDb {tenancyId? : The tenancy id (optional)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Destroy a Database Exstructure for Tenancy';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Action';

    /**
     * Execute the console command.
     *
     * @return bool|null
     */
    public function handle()
    {
        $tenancyId = $this->argument('tenancyId');

        if(empty($tenancyId)) {
            $tenancyId = $this->ask('Please provide the tenancy ID');
        }

        if(!is_numeric($tenancyId) || $tenancyId <= 0) {
            $this->error('The tenancy ID must be a positive integer.');
            return false;
        }

        // Exibe o cabeçalho
        $this->info('Rolling back migrations.');

        // Array de migrações em ordem reversa para rollback
        $migrations = [
            ['class' => CreateFlightsTable::class, 'name' => 'flights_table'],
            ['class' => CreateEventsTable::class, 'name' => 'events_table'],
            ['class' => CreateToursTable::class, 'name' => 'tours_table'],
            ['class' => CreateNetworksTable::class, 'name' => 'networks_table'],
            ['class' => CreateIconsTable::class, 'name' => 'icons_table'],
            ['class' => CreateReservedFlightsTable::class, 'name' => 'reserved_flights_table'],
            ['class' => CreateScheduleFlightTable::class, 'name' => 'schedule_flight_table'],
            ['class' => CreateCharterFlightTable::class, 'name' => 'charter_flight_table'],
            ['class' => CreateAircraftsTable::class, 'name' => 'aircrafts_table'],
            ['class' => CreatePermissionsTable::class, 'name' => 'permissions_table'],
            ['class' => CreateAirlineTable::class, 'name' => 'airline_table'],
            ['class' => CreateRanksTable::class, 'name' => 'ranks_table'],
            ['class' => CreateRolesTable::class, 'name' => 'roles_table'],
            ['class' => CreateNotificationTable::class, 'name' => 'notification_table'],
            ['class' => CreateIntraEmailTable::class, 'name' => 'intra_email_table'],
            ['class' => CreateDownloadsTable::class, 'name' => 'downloads_table'],
        ];

        try {
            $counter = 1;

            foreach ($migrations as $migration) {
                $startTime = microtime(true);

                // Executa o rollback da migração
                new $migration['class']($tenancyId)->down();

                $endTime = microtime(true);
                $executionTime = ($endTime - $startTime) * 1000; // Converte para milissegundos

                // Formata o nome da migração com padding
                $migrationName = sprintf(
                    '0001_01_00_%06d_%s',
                    $counter,
                    $migration['name']
                );

                // Cria os pontos para alinhamento
                $dots = str_repeat('.', max(1, 120 - strlen($migrationName)));

                // Formata o tempo de execução
                if ($executionTime < 1000) {
                    $timeFormatted = sprintf('%.2fms', $executionTime);
                } else {
                    $timeFormatted = sprintf('%.2fs', $executionTime / 1000);
                }

                // Exibe a linha formatada
                $this->line(sprintf(
                    '%s %s %s <info>DONE</info>',
                    $migrationName,
                    $dots,
                    $timeFormatted
                ));

                $counter++;
            }

            $this->info('Tenancy database structure destroyed successfully.');

        } catch (\Exception $e) {
            $this->error('Error Destroying Tenancy database structure: ' . $e->getMessage());
            return false;
        }

        return true;
    }
}

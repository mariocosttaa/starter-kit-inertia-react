<?php

namespace App\Console\Commands\Tenancy;

use App\Models\Manager\TenancyModel;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class MakeTenancyDatabaseEstruxture extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:tenancyDb {tenancyId? : The tenancy id (optional)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a Database Exstructure for Tenancy';

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
        $this->info('Running migrations.');

        // Array de migrações com seus nomes formatados
        $migrations = [
            //['class' => CreateNetworksTable::class, 'name' => 'create_networks_table'],
            //['class' => CreateIconsTable::class, 'name' => 'create_icons_table'],
            //['class' => CreateAirlineTable::class, 'name' => 'create_airline_table'],
            //['class' => CreateRanksTable::class, 'name' => 'create_ranks_table'],
            //['class' => CreateRolesTable::class, 'name' => 'create_roles_table'],
            //['class' => CreateAircraftsTable::class, 'name' => 'create_aircrafts_table'],
            //['class' => CreateScheduleFlightTable::class, 'name' => 'create_schedule_flight_table'],
            //['class' => CreateCharterFlightTable::class, 'name' => 'create_charter_flight_table'],
            //['class' => CreateReservedFlightsTable::class, 'name' => 'create_reserved_flights_table'],
            //['class' => CreateFlightsTable::class, 'name' => 'create_flights_table'],
            //['class' => CreateNotificationTable::class, 'name' => 'create_notification_table'],
            //['class' => CreateEventsTable::class, 'name' => 'create_events_table'],
            //['class' => CreateToursTable::class, 'name' => 'create_tours_table'],
            //['class' => CreateIntraEmailTable::class, 'name' => 'create_intra_email_table'],
            //['class' => CreateDownloadsTable::class, 'name' => 'create_downloads_table'],
            //['class' => CreatePermissionsTable::class, 'name' => 'create_permissions_table'],
        ];

        try {
            $counter = 1;

            foreach ($migrations as $migration) {
                $startTime = microtime(true);

                // Executa a migração
                new $migration['class']($tenancyId)->up();

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

            $this->info('All migrations completed successfully.');

        } catch (\Exception $e) {
            $this->error('Error creating tenancy database structure: ' . $e->getMessage());
            return false;
        }

        return true;
    }
}

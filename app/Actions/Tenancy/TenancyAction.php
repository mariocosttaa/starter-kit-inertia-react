<?php

namespace App\Actions\Tenancy;

use App\Models\Manager\TenancyModel;
use App\Models\Manager\UserTenancyModel;
use Illuminate\Support\Facades\Log;

class TenancyAction
{

    public static function set(int $userId, array $tenancyModelData): TenancyModel|false {

        try {

            //create tenancy model data
            $tenancyModel = self::createInTenacyModel(arguments: $tenancyModelData);

            //seting user tenancy
            UserTenancyModel::create([
                'user_id' => $userId,
                'tenancy_id' => $tenancyModel->id,
                'status' => true,
            ]);

            //seting TenancyDatabases
            $tenancyId = $tenancyModel->id;

            //creating tenancy structure example
            // new CreateNetworksTable($tenancyId)->up();
            // new CreateIconsTable($tenancyId)->up();
            // new CreateAirlineTable($tenancyId)->up();
            // new CreateRanksTable($tenancyId)->up();
            // new CreateRolesTable($tenancyId)->up();
            // new CreateAircraftsTable($tenancyId)->up();
            // new CreateScheduleFlightTable($tenancyId)->up();
            // new CreateCharterFlightTable($tenancyId)->up();
            // new CreateReservedFlightsTable($tenancyId)->up();
            // new CreateFlightsTable($tenancyId)->up();
            // new CreateNotificationTable($tenancyId)->up();
            // new CreateEventsTable($tenancyId)->up();
            // new CreateToursTable($tenancyId)->up();
            // new CreateIntraEmailTable($tenancyId)->up();
            // new CreateDownloadsTable($tenancyId)->up();
            // new CreatePermissionsTable($tenancyId)->up();

            Log::info('TenancyAction - New Tenancy Created with ID: ' . $tenancyModel->id);
            return $tenancyModel;

        } catch (\Exception $e) {
            throw new \Exception('TenancyAction - Error creating tenancy: ' . $e->getMessage());
        }

    }

    /**
     * Create a new tenancy model with a unique name and slug.
     *
     * @param bool $generateUniqName Whether to generate a unique name and slug.
     * @param array $arguments The arguments for creating the tenancy model.
     * @return TenancyModel The created tenancy model.
     */


    private static function createInTenacyModel(array $arguments): TenancyModel {

        // Check if tenancy is already created
        do {
            if(empty($arguments['slug']) || empty($arguments['name'])) {
                $arguments['name'] = 'tenant-' . uniqid();
                $arguments['slug'] = 'tenant-' . uniqid();
            }
        } while (TenancyModel::where('slug', $arguments['slug'])->exists());

        // Create invoice in Subscription Invoices
       return TenancyModel::create($arguments);

    }

}

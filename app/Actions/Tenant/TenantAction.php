<?php

namespace App\Actions\Tenant;

use App\Models\Manager\TenantModel;
use App\Models\Manager\UserTenantModel;
use Illuminate\Support\Facades\Log;

class TenantAction
{

    public static function set(int $userId, array $tenantModelData): TenantModel|false {

        try {

            //create tenant model data
            $tenantModel = self::createInTenantModel(arguments: $tenantModelData);

            //seting user tenant
            UserTenantModel::create([
                'user_id' => $userId,
                'tenant_id' => $tenantModel->id,
            ]);

            //seting TenantDatabases
            $tenantId = $tenantModel->id;

            //creating tenant structure example
            // new CreateNetworksTable($tenantId)->up();
            // new CreateIconsTable($tenantId)->up();
            // new CreateAirlineTable($tenantId)->up();
            // new CreateRanksTable($tenantId)->up();
            // new CreateRolesTable($tenantId)->up();
            // new CreateAircraftsTable($tenantId)->up();
            // new CreateScheduleFlightTable($tenantId)->up();
            // new CreateCharterFlightTable($tenantId)->up();
            // new CreateReservedFlightsTable($tenantId)->up();
            // new CreateFlightsTable($tenantId)->up();
            // new CreateNotificationTable($tenantId)->up();
            // new CreateEventsTable($tenantId)->up();
            // new CreateToursTable($tenantId)->up();
            // new CreateIntraEmailTable($tenantId)->up();
            // new CreateDownloadsTable($tenantId)->up();
            // new CreatePermissionsTable($tenantId)->up();

            Log::info('TenantAction - New Tenant Created with ID: ' . $tenantModel->id);
            return $tenantModel;

        } catch (\Exception $e) {
            throw new \Exception('TenantAction - Error creating tenant: ' . $e->getMessage());
        }

    }

    /**
     * Create a new tenant model with a unique name and slug.
     *
     * @param array $arguments The arguments for creating the tenant model.
     * @return TenantModel The created tenant model.
     */


    private static function createInTenantModel(array $arguments): TenantModel {

        // Check if tenant is already created
        do {
            if (TenantModel::where('name', $arguments['name'])->exists()) {
                $arguments['name'] = $arguments['name'] . '_' . rand(1000, 9999);
            }
        } while (TenantModel::where('slug', $arguments['slug'])->exists());

        // Create invoice in Subscription Invoices
       return TenantModel::create($arguments);

    }

}

<?php

namespace Database\Migrations\Tenant;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

abstract class _TenantHelperMigration extends Migration
{
    /**
     * The database connection that should be used by the migration.
     *
     * @var string
     */
    protected $connection = 'tenant';

    protected int $tenantId;

    public function __construct(int $tenantId)
    {
        $this->tenantId = $tenantId;
    }

    public function getConnection()
    {
        return 'tenant_' . $this->tenantId;
    }

    abstract public function up();

    abstract public function down();
}

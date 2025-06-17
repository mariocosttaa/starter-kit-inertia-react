<?php

namespace Database\Migrations\Tenancy;

use Illuminate\Database\Migrations\Migration;

abstract class _TenancyHelperMigration extends Migration
{
    /**
     * The database connection that should be used by the migration.
     *
     * @var string
     */
    protected $connection = 'tenant';

    protected int $prefix;

    public function __construct(int $prefix = 100001)
    {
        $this->prefix = $prefix;

        if(!$this->prefix) {
           throw new \InvalidArgumentException('Prefix of Tenancy ID must be a positive integer.');
        }
    }

    abstract public function up();

    abstract public function down();
}

<?php

namespace App\Console\Commands\General\PaymentGateway;

use App\Models\Manager\PaymentGatewayLogModel;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class SetWebhook extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature =  'gateway:setWebhook {key? : The key for the webhook}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set a webhook for the payment gateway';

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

        $webhookKey = $this->argument('key');
        if (empty($webhookKey)) {
            $webhookKey = $this->ask('Please provide the webhook key');
        }

        $options = [
            '1' => 'stripe',
            '2' => 'paypal',
        ];

        $choice = $this->choice('Please select the payment gateway', $options, '1');

        PaymentGatewayLogModel::create([
            'gateway_slug' => $choice,
            'type' => 'webhook-created',
            'webhook_secret_key' => $webhookKey,
            'status' => true
        ]);

        $this->info("Webhook for $choice has been set with key: {$webhookKey}");

    }
}


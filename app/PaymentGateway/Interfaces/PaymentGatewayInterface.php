<?php

namespace App\PaymentGateway\Interfaces;

interface PaymentGatewayInterface
{
    /**
     * Recupera as chaves de API do gateway.
     *
     * @return object|null Objeto contendo as chaves pública e secreta, ou null se não disponíveis.
     */
    public function getKeys(): ?object;

    /**
     * Testa a conexão com o gateway de pagamento.
     *
     * @return bool True se a conexão for bem-sucedida, false caso contrário.
     */
    public function tryConnect(): bool;

    /**
     * Cria um endpoint de webhook para receber eventos do gateway.
     *
     * @param array|string|null $events Eventos a serem registrados no webhook.
     * @param string|null $url URL do endpoint do webhook.
     * @param array|null $metadata Metadados adicionais para o webhook (opcional).
     * @return string ID do webhook criado.
     */
    public function createWebHooks(array|string|null $events = null, ?string $url = null, ?array $metadata = null): string;

    /**
     * Cria um pagamento único no gateway.
     *
     * @param int $amount Valor do pagamento em centavos.
     * @param string $currency Moeda do pagamento (ex.: 'usd').
     * @param array|null $paymentMethod Informações do método de pagamento (opcional).
     * @param array|null $metadata Metadados adicionais para o pagamento (opcional).
     * @return array Dados do pagamento criado, incluindo client_secret e status.
     */
    public function createPayment(int $amount, string $currency, ?array $paymentMethod = null, ?array $metadata = null): array;

    /**
     * Inicia uma subscrição para um cliente no gateway.
     *
     * @param int $localProductId ID do produto local.
     * @param int $localPriceId ID do preço local.
     * @param string $customerEmail Email do cliente.
     * @param string $routeSuccess Rota de sucesso para redirecionamento após a subscrição.
     * @param string $routeCancel Rota de cancelamento para redirecionamento se a subscrição for cancelada.
     * @param int|null $userId ID do usuário no sistema (opcional).
     * @param array|null $metadata Metadados adicionais para a subscrição (opcional).
     * @return string Dados da subscrição iniciada, incluindo subscription_id e client_secret.
     */
    public function startCustomerSubscriptionSession(
        int $localProductId,
        int $localPriceId,
        string $customerEmail,
        string $routeSuccess,
        string $routeCancel,
        ?int $userId = null,
        ?array $metadata = null
    ): string;

    /**
     * Cancela uma subscrição imediatamente.
     *
     * @param string $subscriptionId ID da subscrição no gateway.
     * @return bool True se o cancelamento for bem-sucedido.
     */
    public function deleteSubscription(string $subscriptionId): bool;

    /**
     * Cancela uma subscrição ao final do período atual.
     *
     * @param string $subscriptionId ID da subscrição no gateway.
     * @return bool True se o cancelamento for bem-sucedido.
     */
    public function cancelCustomerSubscription(string $subscriptionId): bool;

    /**
     * Atualiza a data do próximo pagamento de uma subscrição.
     *
     * @param string $subscriptionId ID da subscrição no gateway.
     * @param int $newTimestamp Timestamp da nova data de pagamento.
     * @return bool True se a atualização for bem-sucedida.
     */
    public function updateSubscriptionNextPaymentDate(string $subscriptionId, int $newTimestamp): bool;

    /**
     * Cria um produto no gateway.
     *
     * @param string $name Nome do produto.
     * @param array|null $images URLs de imagens do produto (opcional).
     * @param array|null $metadata Metadados adicionais para o produto (opcional).
     * @return string ID do produto criado.
     */
    public function createProduct(int $localProductId, string $name, ?array $images = null, ?array $metadata = null): string;

    /**
     * Cria um preço associado a um produto no gateway.
     *
     * @param int $amount Valor do preço em centavos.
     * @param string $productId ID do produto associado.
     * @param string $currency Moeda do preço (ex.: 'usd').
     * @param string $interval Intervalo de recorrência (ex.: 'month').
     * @param int $intervalCount Contagem do intervalo (ex.: 1 para mensal).
     * @param array|null $metadata Metadados adicionais para o preço (opcional).
     * @return string ID do preço criado.
     */
    public function createPrice(
        int $localProductId,
        int $localPriceId,
        int $amount,
        string $currency = 'eur',
        string $interval = 'month',
        int $intervalCount = 1,
        ?array $metadata = null
    ): string;
}

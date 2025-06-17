<?php
namespace Database\Seeders\Manager;

use App\Models\Manager\SubscriptionFeatureModel;
use App\Models\Manager\SubscriptionModel;
use Illuminate\Database\Seeder;

class SubscriptionFeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Valida e recupera IDs das assinaturas
        $basicSubscription = SubscriptionModel::where('slug', 'basic')->first() ?? throw new \Exception('Basic subscription not found');
        $mediumSubscription = SubscriptionModel::where('slug', 'medium')->first() ?? throw new \Exception('Medium subscription not found');
        $premiumSubscription = SubscriptionModel::where('slug', 'premium')->first() ?? throw new \Exception('Premium subscription not found');

        $basicId = $basicSubscription->id;
        $mediumId = $mediumSubscription->id;
        $premiumId = $premiumSubscription->id;

        // Features comuns a todos os planos
        $commonFeatures = [
            ['have', 'Flight Reservation', 'Reserva de Vuelos', 'Réservation de Vols', 'Reserva de Voos'],
            ['have', 'Latest Aircraft Position', 'Última Posición del Avión', 'Dernière Position de l’Avion', 'Última Posição do Avião'],
            ['have', 'Fuel Consumption', 'Consumo de Combustible', 'Consommation de Carburant', 'Consumo de Combustível'],
            ['have', 'Location Change', 'Cambio de Ubicación', 'Changement de Localisation', 'Alteração de Localização'],
            ['have', 'Position and Rankings System', 'Sistema de Cargos y Rankings', 'Système de Postes et Classements', 'Sistema de Cargos e Rankings'],
            ['have', 'Manage Pilot/Staff Permissions', 'Gestionar Permisos de Pilotos/Staff', 'Gérer les Permissions des Pilotes/Staff', 'Gerenciar Permissões de Pilotos/Staff'],
            ['have', 'NOTAM System', 'Sistema de NOTAM', 'Système de NOTAM', 'Sistema de NOTAM'],
            ['have', 'News System', 'Sistema de Noticias', 'Système de Nouvelles', 'Sistema de Notícias'],
        ];

        // Features específicas do plano Basic
        $featuresBasic = array_merge($commonFeatures, [
            ['have', 'Up to 1 Internal VA', 'Hasta 1 VA Interna', 'Jusqu’à 1 VA Interne', 'Até 1 VA Interna'],
            ['have', 'Downloads up to 1GB Storage', 'Descargas hasta 1GB de Almacenamiento', 'Téléchargements jusqu’à 1 Go de Stockage', 'Downloads até 1GB de Armazenamento'],
        ]);

        // Features "not_have" do plano Basic
        $featuresBasicNotHave = [
            ['not_have', 'Charter Flights', 'Vuelos Chárter', 'Vols Charter', 'Voos Charter'],
            ['not_have', 'Up to 5 Internal VAs', 'Hasta 5 VAs Internas', 'Jusqu’à 5 VAs Internes', 'Até 5 VAs Internas'],
            ['not_have', 'Events', 'Eventos', 'Événements', 'Eventos'],
            ['not_have', 'Internal Email', 'Correo Interno', 'Courriel Interne', 'Email Interno'],
            ['not_have', 'Occasional Flights', 'Vuelos Ocasionales', 'Vols Occasionnels', 'Voos Ocasionais'],
            ['not_have', 'Points System', 'Sistema de Puntos', 'Système de Points', 'Sistema de Pontos'],
            ['not_have', 'Pilot/Staff Icons System', 'Sistema de Íconos para Pilotos/Staff', 'Système d’Icônes pour Pilotes/Staff', 'Sistema de Ícones para Pilotos/Staff'],
            ['not_have', 'Tours System', 'Sistema de Tours', 'Système de Tours', 'Sistema de Tours'],
            ['not_have', 'Supporters/Sponsors Option', 'Posibilidad de Patrocinadores', 'Option de Sponsors', 'Possibilidade de Patrocinadores'],
            ['not_have', 'Downloads up to 15GB Storage', 'Descargas hasta 15GB de Almacenamiento', 'Téléchargements jusqu’à 15 Go de Stockage', 'Downloads até 15GB de Armazenamento'],
        ];

        // Features específicas do plano Medium
        $featuresMedium = array_merge($commonFeatures, [
            ['have', 'Charter Flights', 'Vuelos Chárter', 'Vols Charter', 'Voos Charter'],
            ['have', 'Up to 3 Internal VAs', 'Hasta 3 VAs Internas', 'Jusqu’à 3 VAs Internes', 'Até 3 VAs Internas'],
            ['have', 'Events', 'Eventos', 'Événements', 'Eventos'],
            ['have', 'Internal Email', 'Correo Interno', 'Courriel Interne', 'Email Interno'],
            ['have', 'Downloads up to 5GB Storage', 'Descargas hasta 5GB de Almacenamiento', 'Téléchargements jusqu’à 5 Go de Stockage', 'Downloads até 5GB de Armazenamento'],
        ]);

        // Features "not_have" do plano Medium
        $featuresMediumNotHave = [
            ['not_have', 'Up to 5 Internal VAs', 'Hasta 5 VAs Internas', 'Jusqu’à 5 VAs Internes', 'Até 5 VAs Internas'],
            ['not_have', 'Occasional Flights', 'Vuelos Ocasionales', 'Vols Occasionnels', 'Voos Ocasionais'],
            ['not_have', 'Points System', 'Sistema de Puntos', 'Système de Points', 'Sistema de Pontos'],
            ['not_have', 'Pilot/Staff Icons System', 'Sistema de Íconos para Pilotos/Staff', 'Système d’Icônes pour Pilotes/Staff', 'Sistema de Ícones para Pilotos/Staff'],
            ['not_have', 'Tours System', 'Sistema de Tours', 'Système de Tours', 'Sistema de Tours'],
            ['not_have', 'Supporters/Sponsors Option', 'Posibilidad de Patrocinadores', 'Option de Sponsors', 'Possibilidade de Patrocinadores'],
            ['not_have', 'Downloads up to 15GB Storage', 'Descargas hasta 15GB de Almacenamiento', 'Téléchargements jusqu’à 15 Go de Stockage', 'Downloads até 15GB de Armazenamento'],
        ];

        // Features específicas do plano Premium
        $featuresPremium = array_merge($commonFeatures, [
            ['have', 'Charter Flights', 'Vuelos Chárter', 'Vols Charter', 'Voos Charter'],
            ['have', 'Up to 5 Internal VAs', 'Hasta 5 VAs Internas', 'Jusqu’à 5 VAs Internes', 'Até 5 VAs Internas'],
            ['have', 'Events', 'Eventos', 'Événements', 'Eventos'],
            ['have', 'Internal Email', 'Correo Interno', 'Courriel Interne', 'Email Interno'],
            ['have', 'Occasional Flights', 'Vuelos Ocasionales', 'Vols Occasionnels', 'Voos Ocasionais'],
            ['have', 'Points System', 'Sistema de Puntos', 'Système de Points', 'Sistema de Pontos'],
            ['have', 'Pilot/Staff Icons System', 'Sistema de Íconos para Pilotos/Staff', 'Système d’Icônes pour Pilotes/Staff', 'Sistema de Ícones para Pilotos/Staff'],
            ['have', 'Tours System', 'Sistema de Tours', 'Système de Tours', 'Sistema de Tours'],
            ['have', 'Supporters/Sponsors Option', 'Posibilidad de Patrocinadores', 'Option de Sponsors', 'Possibilidade de Patrocinadores'],
            ['have', 'Downloads up to 15GB Storage', 'Descargas hasta 15GB de Almacenamiento', 'Téléchargements jusqu’à 15 Go de Stockage', 'Downloads até 15GB de Armazenamento'],
        ]);

        // Função para criar features com ordem específica para cada subscription
        $createFeatures = function ($features, $subscriptionId) {
            foreach ($features as $index => $feature) {
                SubscriptionFeatureModel::create([
                    'type' => $feature[0],
                    'subscription_id' => $subscriptionId,
                    'order' => $index + 1, // Ordem começa em 1 para cada assinatura
                    'name_en' => $feature[1],
                    'name_es' => $feature[2],
                    'name_fr' => $feature[3],
                    'name_pt' => $feature[4],
                    'status' => true,
                ]);
            }
        };

        // Cria as features para cada tipo de assinatura
        $createFeatures($featuresBasic, $basicId);
        $createFeatures($featuresBasicNotHave, $basicId);
        $createFeatures($featuresMedium, $mediumId);
        $createFeatures($featuresMediumNotHave, $mediumId);
        $createFeatures($featuresPremium, $premiumId);
    }
}
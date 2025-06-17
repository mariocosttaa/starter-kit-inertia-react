<?php

namespace Database\Seeders\Manager;

use App\Models\Manager\SubscriptionModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

            // Basic
        SubscriptionModel::create([
            'name' => 'Basic',
            'slug' => Str::slug('Basic'),
            'description_en' => 'Kickstart your virtual airline with essential tools and reliable support.',
            'description_es' => 'Inicia tu aerolínea virtual con herramientas esenciales y soporte confiable.',
            'description_fr' => 'Lancez votre compagnie virtuelle avec des outils essentiels et un support fiable.',
            'description_pt' => 'Comece sua companhia virtual com ferramentas essenciais e suporte confiável.',
            'level' => '2',
            'is_free' => false,
            'status' => true,
        ]);

        // Medium
        SubscriptionModel::create([
            'name' => 'Medium',
            'slug' => Str::slug('Medium'),
            'description_en' => 'Scale your operations with advanced features and enhanced flexibility.',
            'description_es' => 'Escala tus operaciones con funciones avanzadas y mayor flexibilidad.',
            'description_fr' => 'Développez vos opérations avec des fonctionnalités avancées et une flexibilité accrue.',
            'description_pt' => 'Aumente suas operações com recursos avançados e flexibilidade melhorada.',
            'level' => '3',
            'is_free' => false,
            'status' => true,
        ]);

        // Premium
        SubscriptionModel::create([
            'name' => 'Premium',
            'slug' => Str::slug('Premium'),
            'description_en' => 'Unlock premium tools and priority support for a top-tier VA experience.',
            'description_es' => 'Desbloquea herramientas premium y soporte prioritario para una experiencia VA de élite.',
            'description_fr' => 'Accédez à des outils premium et un support prioritaire pour une expérience VA d’élite.',
            'description_pt' => 'Desbloqueie ferramentas premium e suporte prioridade para uma experiência de VA de primeira classe.',
            'level' => '4',
            'is_free' => false,
            'status' => true,
        ]);

        // Enterprise
        SubscriptionModel::create([
            'name' => 'Enterprise',
            'slug' => Str::slug('Enterprise'),
            'description_en' => 'Tailored solutions and dedicated support for large-scale virtual airlines, with advanced flight tracking, detailed data analytics, real-time NOTAM updates, and enhanced staff management tools. Scalable storage and priority access to new features included.',
            'description_es' => 'Soluciones personalizadas y soporte dedicado para aerolíneas virtuales grandes, con seguimiento avanzado de vuelos, análisis detallado de datos, NOTAM en tiempo real y herramientas avanzadas de gestión. Almacenamiento escalable y acceso prioritario a nuevas funciones.',
            'description_fr' => 'Solutions sur mesure et support dédié pour grandes compagnies virtuelles, avec suivi avancé des vols, analyses de données détaillées, NOTAM en temps réel et outils de gestion avancés. Stockage évolutif et accès prioritaire aux nouvelles fonctionnalités inclus.',
            'description_pt' => 'Soluções personalizadas e suporte dedicado para grandes companhias virtuais, com rastreamento avançado de voos, análises detalhadas de dados, NOTAM em tempo real e ferramentas de gestão avançadas. Armazenamento escalável e acesso prioritário a novidades incluso.',
            'level' => '5',
            'is_free' => false,
            'status' => true,
        ]);

    }
}

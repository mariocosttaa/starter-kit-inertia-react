# Guia de Instalação

## Pré-requisitos

- Docker e Docker Compose
- Node.js (v18 ou superior)
- Composer
- Git

## Passos da Instalação

1. Clone o repositório
```bash
git clone https://github.com/mariocosttaa/starter-kit-inertia-react
cd starter-kit-inertia-react
```

2. Construa e inicie os containers Docker
```bash
# Construa os containers
docker-compose build

# Inicie os containers
./vendor/bin/sail up -d
```

3. Instale as dependências
```bash
# Instale as dependências PHP
composer install

# Instale as dependências Node.js
npm install
```

4. Configure o ambiente
```bash
# Copie o arquivo de ambiente
cp .env.example .env

# Gere a chave da aplicação
./vendor/bin/sail artisan key:generate
```

5. Execute as migrações
```bash
# Primeiro, execute as migrações do banco de dados manager
./vendor/bin/sail artisan migrate --path=database/migrations/manager

# Em seguida, execute as migrações restantes
./vendor/bin/sail artisan migrate
```

6. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

7. Construa os assets SSR
```bash
npm run build:ssr
```

8. Inicie o servidor SSR
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

## Configuração do Ambiente

### Variáveis de Ambiente Necessárias

```env
APP_NAME=SeuAppNome
APP_ENV=local
APP_KEY=base64:sua-chave
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=seu_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=hello@example.com
MAIL_FROM_NAME="${APP_NAME}"
```

## Ferramentas de Desenvolvimento

### Laravel Sail
Laravel Sail é uma interface de linha de comando leve para interagir com o ambiente de desenvolvimento Docker do Laravel. Todos os comandos devem ser prefixados com `./vendor/bin/sail`:

```bash
# Execute comandos artisan
./vendor/bin/sail artisan list

# Execute testes
./vendor/bin/sail test

# Execute comandos composer
./vendor/bin/sail composer install
```

### Servidor de Desenvolvimento Vite
O servidor de desenvolvimento Vite fornece uma experiência de desenvolvimento rápida com substituição de módulos em tempo real:

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Construa para produção
npm run build
```

## Solução de Problemas

### Problemas Comuns

1. **Conflitos de Porta**
   - A aplicação usa as portas 80, 3306, 1025 e 13714
   - Certifique-se de que estas portas estão disponíveis ou modifique o arquivo docker-compose.yml

2. **Problemas de Permissão**
   - Se encontrar problemas de permissão, execute:
   ```bash
   chmod -R 777 storage bootstrap/cache
   ```

3. **Problemas com Docker**
   - Se os containers falharem ao iniciar, tente:
   ```bash
   docker-compose down -v
   docker-compose build --no-cache
   ./vendor/bin/sail up -d
   ```

4. **Problemas com Servidor SSR**
   - Se o servidor SSR falhar ao iniciar, certifique-se de que a porta 13714 está disponível
   - Verifique se a construção SSR foi bem-sucedida com `npm run build:ssr`

## Próximos Passos

Após a instalação, você pode:
1. Criar seu primeiro tenant
2. Configurar autenticação
3. Configurar seu ambiente de desenvolvimento
4. Começar a construir sua aplicação

Para informações mais detalhadas, consulte as outras seções da documentação. 

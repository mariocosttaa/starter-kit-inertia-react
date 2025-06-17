# Installation Guide

## Prerequisites

- Docker and Docker Compose
- Node.js (v18 or higher)
- Composer
- Git

## Installation Steps

1. Clone the repository
```bash
git clone https://github.com/mariocosttaa/starter-kit-inertia-react
cd starter-kit-inertia-react
```

2. Build and start Docker containers
```bash
# Build the containers
docker-compose build

# Start the containers
./vendor/bin/sail up -d
```

3. Install dependencies
```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

4. Set up environment
```bash
# Copy environment file
cp .env.example .env

# Generate application key
./vendor/bin/sail artisan key:generate
```

5. Run migrations
```bash
# First, run the manager database migrations
./vendor/bin/sail artisan migrate --path=database/migrations/manager

# Then run the remaining migrations
./vendor/bin/sail artisan migrate
```

6. Start development server
```bash
npm run dev
```

7. Build SSR assets
```bash
npm run build:ssr
```

8. Start SSR server
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

## Environment Configuration

### Required Environment Variables

```env
APP_NAME=YourAppName
APP_ENV=local
APP_KEY=base64:your-key
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=hello@example.com
MAIL_FROM_NAME="${APP_NAME}"
```

## Development Tools

### Laravel Sail
Laravel Sail is a light-weight command-line interface for interacting with Laravel's Docker development environment. All commands should be prefixed with `./vendor/bin/sail`:

```bash
# Run artisan commands
./vendor/bin/sail artisan list

# Run tests
./vendor/bin/sail test

# Run composer commands
./vendor/bin/sail composer install
```

### Vite Development Server
The Vite development server provides a fast development experience with hot module replacement:

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## Troubleshooting

### Common Issues

1. **Port Conflicts**
   - The application uses ports 80, 3306, 1025, and 13714
   - Ensure these ports are available or modify the docker-compose.yml file

2. **Permission Issues**
   - If you encounter permission issues, run:
   ```bash
   chmod -R 777 storage bootstrap/cache
   ```

3. **Docker Issues**
   - If containers fail to start, try:
   ```bash
   docker-compose down -v
   docker-compose build --no-cache
   ./vendor/bin/sail up -d
   ```

4. **SSR Server Issues**
   - If the SSR server fails to start, ensure port 13714 is available
   - Check the SSR build was successful with `npm run build:ssr`

## Next Steps

After installation, you can:
1. Create your first tenant
2. Set up authentication
3. Configure your development environment
4. Start building your application

For more detailed information, refer to the other documentation sections. 

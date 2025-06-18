-- Create manager database
CREATE DATABASE IF NOT EXISTS manager;

-- Create tenants database
CREATE DATABASE IF NOT EXISTS tenants;

-- Grant privileges to sail user for both databases
GRANT ALL PRIVILEGES ON manager.* TO 'sail'@'%';
GRANT ALL PRIVILEGES ON tenants.* TO 'sail'@'%';

-- Flush privileges
FLUSH PRIVILEGES;

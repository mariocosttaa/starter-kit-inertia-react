# 📊 Database Structure

## 📋 Table of Contents
- [Overview](#overview)
- [Manager Database](#manager-database)
- [Tenancy Database](#tenancy-database)
- [Relationships](#relationships)
- [Indexes and Constraints](#indexes-and-constraints)

## Overview
The system uses a multi-database architecture with two main databases:
1. Manager Database: Handles system-wide operations
2. Tenancy Database: Handles tenant-specific data

## Manager Database

### Users Table
- Primary table for user management
- Stores user authentication and profile information
- Includes fields for email, password, name, and role

### Subscriptions Table
- Manages subscription plans and user subscriptions
- Tracks subscription status, periods, and billing information
- Includes fields for plan details, pricing, and features

### Payment Gateway Table
- Stores payment gateway configurations
- Manages payment methods and transactions
- Includes fields for gateway settings and credentials

### PDFs Table
- Manages generated PDF documents
- Stores document metadata and file information
- Includes fields for document type and storage location

### Settings Table
- Stores system-wide configuration settings
- Manages application preferences
- Includes fields for setting keys and values

### Cache Table
- Manages system cache
- Stores cached data and expiration times
- Includes fields for cache keys and values

### Jobs Table
- Manages background jobs and queues
- Tracks job status and execution
- Includes fields for job type and payload

### Countries Table
- Stores country information
- Manages country codes and names
- Includes fields for country details

### Currencies Table
- Manages currency information
- Stores currency codes and exchange rates
- Includes fields for currency details

### Tenancies Table
- Manages tenant information
- Tracks tenant status and configuration
- Includes fields for tenant details and settings

### Sended Emails History Table
- Tracks email communications
- Stores email metadata and status
- Includes fields for recipient and content information

## Tenancy Database

### Notifications Table
- Manages tenant-specific notifications
- Stores notification content and status
- Includes fields for notification type and recipient

## Relationships

### User Relationships
- Users -> Subscriptions (One-to-Many)
- Users -> Tenancies (Many-to-Many)
- Users -> Settings (One-to-Many)

### Subscription Relationships
- Subscriptions -> Payment Gateway (Many-to-One)
- Subscriptions -> Users (Many-to-One)

### Tenancy Relationships
- Tenancies -> Users (Many-to-Many)
- Tenancies -> Settings (One-to-Many)

## Indexes and Constraints

### Primary Keys
- All tables use auto-incrementing IDs
- UUIDs for sensitive data tables

### Foreign Keys
- Proper foreign key constraints for relationships
- Cascade delete where appropriate

### Unique Constraints
- Email addresses in users table
- Subscription plan names
- Currency codes
- Country codes

### Indexes
- Email fields for quick lookups
- Status fields for filtering
- Created/Updated timestamps for sorting
- Foreign key fields for joins
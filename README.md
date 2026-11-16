# Watchland

### A Modern Full-Stack E-Commerce Platform for Watches

Watchland is a full-stack e-commerce application designed to provide a modern shopping experience for watch enthusiasts.

Built with **Next.js, TypeScript, and PostgreSQL**, the project focuses on clean architecture, maintainable code, and modern full-stack development practices.

The application includes essential e-commerce functionality, from product discovery and shopping cart management to checkout and order creation.

<p align="center">
  <a href="https://nextjs-watch-store-brown.vercel.app">
    <img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

## About

Watchland is a practical project built to explore and apply modern full-stack development concepts.

It focuses on the complete application workflow, including retrieving product data, managing shopping carts, validating checkout information, and creating orders.

The application uses **Next.js App Router**, taking advantage of Server Components, server-side data fetching, and server-side operations.

Its codebase follows a **feature-based architecture**, keeping business logic organized and responsibilities separated to improve maintainability and scalability.

## Features

### Product Catalog

- Browse watches and explore products by category and brand.
- View detailed product information.
- Product image gallery.
- Product filtering and pagination.

### Search & Discovery

- Search for products.
- Explore the catalog using category and brand information.

### Shopping Cart

- Add and remove products.
- Manage cart items and quantities.
- Calculate cart totals.
- Server-side cart persistence for authenticated users.

### Checkout & Orders

- Checkout form with validation.
- Server-side order creation.
- Order and product data management.
- Shipping cost calculation.

### Authentication

- User authentication and session management.
- Server-side session verification.
- Protected application operations.

### Articles & User Interface

- Article-related content management.
- Responsive layouts for different screen sizes.
- Reusable UI components.
- Accessible interactive components.

## Tech Stack

| Category         | Technology              |
| ---------------- | ----------------------- |
| Framework        | Next.js 16 (App Router) |
| UI Library       | React 19                |
| Language         | TypeScript              |
| Styling          | Tailwind CSS 4          |
| Database         | PostgreSQL              |
| Database Hosting | Neon                    |
| ORM              | Prisma 7                |
| Authentication   | Better Auth             |
| UI Components    | Base UI                 |
| Form Handling    | React Hook Form         |
| Validation       | Valibot                 |
| Package Manager  | pnpm                    |
| Deployment       | Vercel                  |

## Architecture

Watchland follows a **feature-based architecture**, organizing code around business domains rather than technical file types.

The project emphasizes the following principles:

- **Separation of Concerns:** Separating UI, business logic, and data-access responsibilities.
- **Server-First Approach:** Using Server Components and server-side operations where appropriate.
- **Type Safety:** Using TypeScript and schema validation to reduce runtime errors.
- **Reusable Components:** Building shared components and avoiding unnecessary duplication.
- **Data Validation:** Validating user input before sensitive server-side operations.
- **Clean Code:** Prioritizing readability, consistency, and maintainability.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/installation)
- A PostgreSQL database ([Neon](https://neon.com/) recommended)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/eliyafazeli110/nextjs-watchland-ecommerce.git

cd nextjs-watchland-ecommerce
```

**2. Install dependencies**

```bash
pnpm install
```

**3. Configure environment variables**

Create a `.env` file in the project root using the `.env.example` file as a reference.

See [Environment Variables](#environment-variables) for details.

**4. Generate Prisma Client**

```bash
pnpm prisma generate
```

**5. Set up the database**

```bash
pnpm prisma db push
```

**6. Seed the database**

```bash
pnpm prisma db seed
```

**7. Start the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to access the application.

## Environment Variables

The application requires the following environment variables:

| Variable             | Description                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`       | Neon pooled PostgreSQL connection string used for application database queries.                                              |
| `DIRECT_URL`         | Direct PostgreSQL connection string for operations requiring a non-pooled connection, depending on the Prisma configuration. |
| `BETTER_AUTH_SECRET` | Secure random secret used by Better Auth for authentication-related cryptographic operations.                                |
| `BETTER_AUTH_URL`    | Base URL of the application used by Better Auth.                                                                             |

### Example Configuration

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@YOUR-POOLER-HOST/DB_NAME?sslmode=require"
DIRECT_URL="postgresql://USER:PASSWORD@YOUR-DIRECT-HOST/DB_NAME?sslmode=require"

# Better Auth
BETTER_AUTH_SECRET="your-secure-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
```

Generate a secure authentication secret with:

```bash
openssl rand -base64 32
```

**Important:**

- Never commit your actual `.env` file or expose its secrets.
- Keep `.env.example` in the repository with placeholder values.
- Configure the required environment variables in your deployment platform.
- Use your production application URL for `BETTER_AUTH_URL` in production.

## Database

Watchland uses **PostgreSQL**, hosted on Neon, with **Prisma ORM** for database access, schema management, and type-safe queries.

The database is designed around the application's core entities:

- Products
- Brands
- Categories
- Users
- Shopping carts
- Orders

Prisma Client is generated during the production build process to support clean deployment environments.

## Project Structure

The project uses a feature-based structure to separate application routes, business logic, shared components, and infrastructure.

```text
watchland/
├── app/                    # Next.js App Router
├── components/             # Shared UI components
│   └── ui/                 # Reusable interface components
├── features/               # Feature-based modules
│   ├── auth/
│   ├── cart/
│   ├── order/
│   └── product/
├── lib/                    # Shared utilities and infrastructure
│   └── prisma.ts
├── prisma/                 # Prisma schema
├── data/                   # Seed data
├── public/                 # Static assets
├── types/                  # Shared TypeScript types
├── prisma7.config.ts       # Prisma configuration
├── package.json
└── README.md
```

## Future Improvements

- Online payment gateway integration.
- Advanced product filtering and sorting.
- Product reviews and ratings.
- Wishlist functionality.
- Enhanced user account management.
- Admin dashboard and product management.
- Automated testing.

## Contact

**Eliya Fazeli**

- GitHub: [@eliyafazeli110](https://github.com/eliyafazeli110)

---

<p align="center">
  <sub>Built with care and TypeScript.</sub>
</p>

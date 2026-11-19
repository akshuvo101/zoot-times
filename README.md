# Zoot Times — E-commerce Starter

A Next.js App Router starter for the Zoot Times lifestyle store (watches, perfumes and modern jewelry).

## Current implementation

- Premium dark / champagne-gold responsive storefront
- Homepage, category pages, shop page, product detail pages
- Demo product catalogue
- Client-side demo cart using browser localStorage
- Contact and About pages
- SEO metadata, robots.txt and sitemap
- Standalone Next.js output and Dockerfile for self-hosted Node.js deployment

## Important: not yet production commerce

This is the first implementation milestone, not a complete live store. The following are intentionally not enabled yet:

- Supabase database and authentication
- Secure customer accounts and admin login
- Real product CRUD and inventory
- Server-side cart and order creation
- COD order workflow
- SSLCommerz / aamarPay payment integration and server-side verification
- Courier API integrations and delivery management
- Email / SMS notifications
- Legal policies, returns and refunds

Sample product names, images, prices and stock are placeholders. Confirm all product information with Zoot Times before launch. Never accept real payments or customer orders using this demo cart.

## Requirements

- Node.js 22 LTS recommended
- npm 10+
- Windows, macOS or Linux

## Run locally (Windows PowerShell)

```powershell
# Extract the ZIP, then enter the project folder
cd zoot-times

# Install dependencies
npm install

# Create local environment file
Copy-Item .env.example .env.local

# Start development server
npm run dev
```

Open http://localhost:3000

## Validation

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

## Production build for a self-hosted Node.js server

The project uses `output: "standalone"` in `next.config.ts`.

```bash
npm ci
npm run build
```

The generated `.next/standalone` directory contains the minimal Node.js server output. The Dockerfile copies standalone output, static assets and public files into a Node 22 Alpine image.

Example Docker workflow:

```bash
docker build -t zoot-times .
docker run --rm -p 3000:3000 --env-file .env.production zoot-times
```

A VPS can also run the standalone server directly with Node.js and a reverse proxy such as Nginx. Configure HTTPS, firewall, backups, process restart and environment variables on the server. Shared hosting must explicitly support the required Node.js version and long-running Next.js server processes; ordinary PHP-only cPanel hosting is not sufficient.

## Environment variables

See `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to the final custom domain in production. Supabase and payment variables are placeholders until those integrations are implemented. Never commit `.env.local` or production secrets.

## Suggested next implementation milestones

1. Confirm design and replace placeholder catalogue with real business inventory.
2. Create Supabase project, schema, RLS policies, storage buckets and seed data.
3. Implement admin authentication and product/category/inventory CRUD.
4. Implement secure checkout, order snapshots and COD.
5. Integrate an approved payment gateway with server-side transaction validation.
6. Integrate selected courier API or own-delivery workflow.
7. Add order tracking, notifications, policy pages, security tests and production monitoring.

## Project structure

```text
zoot-times/
├── public/
├── src/
│   ├── app/
│   │   ├── (store)/
│   │   │   ├── about/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── contact/
│   │   │   ├── product/[slug]/
│   │   │   ├── shop/
│   │   │   │   └── [category]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── admin/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   └── products/
│   └── lib/
├── .env.example
├── Dockerfile
├── next.config.ts
├── package.json
└── README.md
```

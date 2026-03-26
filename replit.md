# Tola to Grams Converter

## Overview
A Next.js 15 SEO-focused web app for converting tola to grams, targeting gold weight measurements across South Asian and Middle Eastern markets.

## Architecture
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Language**: TypeScript

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `components/` — Shared React components (Converter, FAQ, Header, Footer, etc.)
- `lib/` — Utility functions (conversions.ts)
- `public/` — Static assets

## Running the App
The dev server runs on port 5000 bound to 0.0.0.0 for Replit compatibility:
```
npm run dev   # starts on port 5000
npm run build # production build
npm start     # production server on port 5000
```

## Replit Configuration
- Workflow: "Start application" → `npm run dev`
- Port: 5000 (webview)
- No environment variables required

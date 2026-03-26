# Tola to Grams Converter - Next.js Website

A production-ready SEO-optimized Next.js website for converting tola to grams and other precious metal weight measurements. Perfect for jewelry traders, gold markets, and international commerce across South Asia.

## 🚀 Features

- **Real-time Converter** - Instant tola to grams conversion with precise conversion factors
- **Multiple Conversion Tools** - Grams to tola, tola to masha, and comprehensive gold weight converter
- **Country-Specific Pages** - Dedicated pages for Pakistan, India, Nepal, UAE, Dubai, and UK
- **Educational Content** - Comprehensive guides on tola, gold weights, and measurement systems
- **SEO Optimized** - Full metadata, schema markup, sitemap generation, and structured data
- **Responsive Design** - Beautiful, modern UI that works on all devices
- **Fast Performance** - Optimized for Core Web Vitals with Next.js App Router
- **Production Ready** - Fully deployable to Vercel with no additional configuration

## 📋 Project Structure

```
app/
├── page.tsx                    # Homepage with main converter
├── layout.tsx                  # Root layout with Header/Footer
├── globals.css                 # Global styles
├── robots.ts                   # SEO robots configuration
├── not-found.tsx              # 404 page
│
├── grams-to-tola/
│   └── page.tsx               # Reverse converter
├── tola-to-masha/
│   └── page.tsx               # Tola to masha converter
├── gold-weight-converter/
│   └── page.tsx               # Comprehensive gold weight tool
│
├── pakistan/page.tsx          # Pakistan-specific page
├── india/page.tsx             # India-specific page
├── nepal/page.tsx             # Nepal-specific page
├── uae/page.tsx               # UAE-specific page
├── dubai/page.tsx             # Dubai-specific page
├── uk/page.tsx                # UK-specific page
│
├── what-is-tola/page.tsx      # Educational content
├── tola-vs-grams/page.tsx     # Comparison guide
├── gold-weight-guide/page.tsx # Complete reference
│
├── about/page.tsx             # About page
├── contact/page.tsx           # Contact form
├── privacy-policy/page.tsx    # Privacy policy
├── terms/page.tsx             # Terms of service
└── sitemap.xml/route.ts       # Dynamic sitemap

components/
├── Header.tsx                 # Navigation header
├── Footer.tsx                 # Footer with links
├── Converter.tsx              # Reusable converter component
└── FAQ.tsx                    # FAQ accordion component

lib/
└── conversions.ts             # Conversion utilities and formulas

public/
└── robots.txt                 # Robots configuration

tailwind.config.ts             # Tailwind configuration
next.config.ts                 # Next.js configuration
tsconfig.json                  # TypeScript configuration
postcss.config.js              # PostCSS configuration
```

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel (compatible)

## 📦 Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Run development server**
   ```bash
   pnpm dev
   ```

3. **Build for production**
   ```bash
   pnpm build
   ```

4. **Start production server**
   ```bash
   pnpm start
   ```

## 🌐 Deployment to Vercel

This project is fully configured for Vercel deployment:

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import this project from GitHub
   - Click "Deploy"

2. **No Additional Configuration Needed**
   - All settings are pre-configured in `next.config.ts`
   - Environment variables are handled automatically
   - Static generation is optimized by default

## 🔍 SEO Features

- **Dynamic Metadata** - Page-specific titles and descriptions using `generateMetadata`
- **Schema Markup** - Structured data for FAQ, WebApplication, and more
- **Sitemap Generation** - Dynamic sitemap.xml at `/sitemap.xml`
- **Robots.txt** - Proper indexing configuration
- **Canonical Tags** - Prevent duplicate content issues
- **Open Graph** - Social media sharing optimization
- **Structured Headings** - Proper H1-H3 hierarchy
- **Fast Loading** - Optimized for Core Web Vitals

## 🧮 Conversion Formulas

The converter uses precise, internationally-recognized conversion factors:

```typescript
// Tola to Grams
1 Tola = 11.6638038 Grams

// Tola to Masha
1 Tola = 12 Masha

// Masha to Grams
1 Masha = 0.9720 Grams
```

## 📱 Pages & Routes

### Converters
- `/` - Main tola to grams converter
- `/grams-to-tola` - Reverse converter
- `/tola-to-masha` - Tola to masha converter
- `/gold-weight-converter` - Comprehensive tool

### Country-Specific
- `/pakistan` - Pakistan market converter
- `/india` - India market converter
- `/nepal` - Nepal market converter
- `/uae` - UAE market converter
- `/dubai` - Dubai market converter
- `/uk` - UK market converter

### Education
- `/what-is-tola` - What is tola?
- `/tola-vs-grams` - Tola vs grams comparison
- `/gold-weight-guide` - Complete gold weight guide

### Legal & Info
- `/about` - About page
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy
- `/terms` - Terms of service
- `/sitemap.xml` - XML sitemap

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { ... },    // Main color (currently Sky Blue)
  accent: { ... },     // Accent color (currently Orange)
}
```

### Conversion Factors
Modify `lib/conversions.ts` to update conversion formulas:
```typescript
export const TOLA_TO_GRAMS = 11.6638038;
export const TOLA_TO_MASHA = 12;
```

### Metadata
Update `app/layout.tsx` for global SEO settings.

## 📊 Performance

- **Static Generation (SSG)** - All pages pre-rendered at build time
- **Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic bundle optimization
- **Caching** - Optimal caching headers for Vercel

## 🚀 Production Checklist

- [x] SEO metadata on all pages
- [x] Mobile responsive design
- [x] Fast loading (optimized for Lighthouse)
- [x] Sitemap.xml generated
- [x] robots.txt configured
- [x] 404 page implemented
- [x] Schema markup added
- [x] Social sharing metadata
- [x] Contact form (ready for integration)
- [x] All internal links working
- [x] No broken links

## 🔗 Internal Linking Strategy

The site is fully cross-linked with:
- Navigation header on all pages
- Footer with comprehensive links
- Related content suggestions
- CTA buttons throughout

## 📈 SEO Keywords Targeted

Primary:
- tola to grams
- 1 tola to grams
- gold tola to grams
- tola to grams converter

Secondary:
- tola to grams Pakistan
- tola to grams India
- gold weight converter
- grams to tola
- tola vs grams

Regional:
- tola converter Pakistan
- tola converter India
- Dubai gold converter
- UK gold weight

## 🔐 Privacy & Security

- No personal data collection
- No cookies (except necessary)
- No tracking pixels
- Privacy policy included
- Terms of service included

## 📝 License

This project is ready for commercial use.

## 🤝 Support

For any questions or issues, use the contact form on `/contact`.

---

**Ready to deploy?** Connect to Vercel and this site will be live in minutes!

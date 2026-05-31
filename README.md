# Ruilong International Website

Phase 1 launchable bilingual B2B textile foreign trade website for **Ruilong International**.

Ruilong International is positioned as a practical B2B sourcing and supply chain coordination partner connecting global buyers with textile resources in Xiqiao, Foshan, Guangdong, China.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Local bilingual content file
- Client-side forms, product filters and product detail modal
- No backend, database, admin dashboard or complex CMS in Phase 1

## Main Features

- Responsive layout for desktop, tablet and mobile
- English / Chinese language switch
- Pages:
  - Home
  - About Us
  - Full Supply Chain
  - Products
  - R&D and Technology
  - Cases
  - News
  - Contact / Inquiry
  - Privacy Policy placeholder
- Header navigation with quote CTA
- Product filters by category, function and application
- Product detail modal
- Inquiry, sample request and quote forms with success message
- Floating contact buttons
- Basic SEO metadata and Open Graph placeholder metadata
- Editable placeholder contact information

## Run Locally

Install Node.js first. Use Node.js 20.9 or newer for modern Next.js projects.

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the website:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

## Push to GitHub

Create a new GitHub repository, then run these commands inside the project folder:

```bash
git init
git add .
git commit -m "Initial launchable Phase 1 website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ruilong-international-website.git
git push -u origin main
```

Suggested repository name: `ruilong-international-website`.

Replace `YOUR_USERNAME` with your real GitHub username. If you choose a different repository name, replace `ruilong-international-website` as well.

## Deploy on Vercel

1. Log in to Vercel.
2. Click **Add New Project**.
3. Import the GitHub repository.
4. Keep the default framework preset as **Next.js**.
5. Use the default build command: `npm run build`.
6. Click **Deploy**.
7. Add a custom domain later in **Project Settings > Domains**.

## Deploy on Netlify

1. Log in to Netlify.
2. Click **Add new site > Import an existing project**.
3. Connect the GitHub repository.
4. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy the site.

If Netlify asks for Next.js support, enable the official Netlify Next.js runtime/plugin.

## Change Contact Information

Before public launch, replace all placeholder contact information:

- `sales@example.com`
- `+86-000-0000-0000`
- `WhatsApp / WeChat: editable`
- `ICP filing placeholder`
- Contact page map placeholder

Important files:

- `components/Footer.tsx`
- `components/FloatingContact.tsx`
- `app/contact/page.tsx`
- `data/content.ts`

## Replace Placeholder Images and Content

Most website text and sample product data are stored in:

```text
data/content.ts
```

Edit this file to update:

- English and Chinese website text
- Navigation labels
- Product names
- Product categories
- Product specifications
- Product tags
- Supply chain steps
- Case cards
- News placeholders

The current images use Unsplash URLs. To replace them:

1. Add real images to a `public/images` folder.
2. Change image paths in `data/content.ts` and `app/page.tsx`.
3. Use paths like `/images/denim-fabric.jpg`.
4. Keep descriptive `alt` text for SEO and accessibility.

## Important Files to Check Before Uploading

- `package.json` - scripts and dependency versions
- `next.config.js` - image domain configuration
- `tailwind.config.ts` - Tailwind content paths and theme colors
- `app/layout.tsx` - global metadata and site shell
- `app/page.tsx` - homepage
- `app/contact/page.tsx` - contact details and forms
- `app/products/page.tsx` - product filters and listing
- `data/content.ts` - bilingual content and product data
- `components/Header.tsx` - navigation and language switch
- `components/Footer.tsx` - footer contact info
- `components/FloatingContact.tsx` - floating contact buttons
- `.gitignore` - excludes `node_modules` and build output

## Phase 1 Form Behavior

Forms currently show a success message and reset the fields. They do not send email and do not store data.

Future Phase 2 options:

- Email delivery through Resend, SendGrid or SMTP
- CRM integration
- Database storage
- Spam protection
- Admin notifications

## Phase 2 Upgrade Ideas

- Real product photos and PDF catalog download
- SEO-friendly product detail pages
- Blog or news CMS
- Real map embed
- WhatsApp and WeChat QR code assets
- Analytics
- Multi-language URL structure such as `/en` and `/zh`
- Backend inquiry handling

## Final Launch Checklist

- Run `npm install`
- Run `npm run build`
- Run `npm run dev`
- Test all navigation links
- Test English / Chinese language switch
- Test product filters
- Test product detail modal
- Test inquiry form success messages
- Replace contact placeholders
- Replace placeholder images if needed
- Confirm ICP filing text
- Push to GitHub
- Deploy on Vercel or Netlify

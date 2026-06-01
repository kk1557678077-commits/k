# Ruilong International Website

Phase 1 launchable bilingual B2B textile foreign trade website for **Ruilong International**.

Ruilong International is positioned as a practical B2B sourcing and supply chain coordination partner connecting global buyers with textile resources in Xiqiao, Foshan, Guangdong, China.

Official website:

```text
https://www.ruilong.icu
```

The non-www domain `https://ruilong.icu` can be configured in Vercel to redirect to `https://www.ruilong.icu`.

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
- Inquiry, sample request, quote and custom fabric forms connected to Formspree when configured
- Floating contact buttons
- Basic SEO metadata and Open Graph placeholder metadata
- Sitemap and robots configuration for the official domain
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

## How to Connect Formspree

The inquiry forms are ready to send messages through Formspree. No private token is stored in the codebase.

1. Create a Formspree account at `https://formspree.io`.
2. Create a new form in Formspree.
3. Copy the form endpoint. It should look like:

```text
https://formspree.io/f/YOUR_FORM_ID
```

4. Create a local `.env.local` file in the project root:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

5. In Vercel, open the project dashboard and go to **Settings > Environment Variables**.
6. Add the same variable:

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

Value:

```text
https://formspree.io/f/YOUR_FORM_ID
```

7. Save the variable for Production, Preview and Development if you want all deployments to use the same form.
8. Redeploy the project from Vercel or push a new commit to GitHub.

The example file is:

```text
.env.example
```

Do not commit `.env.local`.

## Phase 3A Sanity CMS Setup

Phase 3A adds an optional Sanity CMS backend for:

- Products
- News
- Cases

Homepage, About, Contact and Footer content still use local files for stability. If Sanity is not configured or returns no content, the website falls back to local content from:

```text
data/content.ts
```

### Install CMS Dependencies

Run:

```bash
npm install
```

The required CMS packages are:

- `sanity`
- `next-sanity`
- `@sanity/image-url`

### Create a Sanity Account and Project

1. Go to `https://www.sanity.io`.
2. Create a Sanity account.
3. Create a new project.
4. Choose the free plan if available.
5. Use dataset name:

```text
production
```

6. Copy the Sanity project ID.

### Add Local Environment Variables

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
NEXT_PUBLIC_SANITY_PROJECT_ID=drqtm4iz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
NEXT_PUBLIC_MAP_EMBED_URL=https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE
```

The current Sanity project ID is `drqtm4iz`.

Do not commit `.env.local`.

### Add Vercel Environment Variables

In Vercel:

1. Open the project dashboard.
2. Go to **Settings > Environment Variables**.
3. Add:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION
NEXT_PUBLIC_MAP_EMBED_URL
```

4. Keep the existing Formspree variable:

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

5. Redeploy the project after saving variables.

### Open Sanity Studio

After environment variables are configured and the site is running:

```text
http://localhost:3000/admin
```

On Vercel:

```text
https://YOUR_DOMAIN/admin
```

The Studio lets you add and edit Products, News and Case Studies.

### Sanity CORS for the Official Domain

After connecting the custom domain, open the Sanity project settings and add these CORS origins:

```text
https://www.ruilong.icu
https://ruilong.icu
```

Keep the local development origin if you still edit and test locally:

```text
http://localhost:3000
```

### Add CMS Content

In Sanity Studio, create entries for:

- Product
- News
- Case Study

For bilingual content, create separate entries and set the `language` field to either:

```text
en
zh
```

### CMS Fallback Behavior

If Sanity is not configured, unavailable, or empty:

- Products page uses local product data
- News page uses local news data
- Cases page uses local case data

This protects the public website while CMS setup is still in progress.

### Important CMS Files

```text
sanity.config.ts
sanity.cli.ts
sanity/schemaTypes/index.ts
sanity/schemaTypes/product.ts
sanity/schemaTypes/news.ts
sanity/schemaTypes/caseStudy.ts
sanity/lib/client.ts
sanity/lib/queries.ts
sanity/lib/content.ts
app/admin/[[...tool]]/page.tsx
```

### How to Add Product in `/admin`

1. Open `/admin`.
2. Choose **Product**.
3. Add title, category, composition, width, weight, application, MOQ and lead time.
4. Add features and tags as short buyer-friendly points.
5. Set `language` to `en` or `zh`.
6. Use `sortOrder` to control display order.
7. Turn on `isFeatured` if the product should be treated as featured content.
8. Publish.

### How to Add News in `/admin`

1. Open `/admin`.
2. Choose **News**.
3. Add title, excerpt, category and publish date.
4. Add body content if needed.
5. Set `language` to `en` or `zh`.
6. Publish.

### How to Add Case Study in `/admin`

1. Open `/admin`.
2. Choose **Case Study**.
3. Add title, challenge, solution and result.
4. Use neutral wording. Do not add fake client names or fake numbers.
5. Set `language` to `en` or `zh`.
6. Publish.

### How to Check Frontend CMS Sync

After publishing in Sanity:

1. Open `/products`, `/news` or `/cases`.
2. Refresh the page.
3. Confirm the new CMS content appears.
4. If no Sanity content appears, confirm Vercel has the correct Sanity environment variables.

If Sanity has no content or the request fails, the frontend continues using local fallback content from `data/content.ts`.

## How to Add Google Maps or OpenStreetMap

The Contact page supports a responsive embedded map through:

```text
NEXT_PUBLIC_MAP_EMBED_URL
```

Google Maps option:

1. Search the company address in Google Maps.
2. Click **Share**.
3. Click **Embed a map**.
4. Copy only the `src` URL from the iframe code.
5. Add the URL to Vercel Environment Variables as:

```text
NEXT_PUBLIC_MAP_EMBED_URL
```

6. Redeploy the project.

OpenStreetMap option:

1. Open OpenStreetMap.
2. Search the business address.
3. Use the share/embed option.
4. Copy the iframe `src` URL.
5. Add it as `NEXT_PUBLIC_MAP_EMBED_URL`.

Do not add private API keys to the frontend. The current map setup only needs a public iframe URL.

## Phase 3C CMS Editing Guide

Sanity CMS can now manage:

- Products
- News
- Case Studies
- Downloads
- FAQ
- Contact Info
- Homepage Content

### Edit Downloads

Open `/admin`, choose **Download Item**, then add:

- Title
- Description
- Category
- File type
- File URL if an official file is ready
- Language
- Sort order
- Active status

Do not upload fake certificates, fake reports or unconfirmed documents. If `fileUrl` is empty, the frontend shows a coming soon placeholder.

### Edit FAQ

Open `/admin`, choose **FAQ Item**, then add:

- Question
- Answer
- Category
- Language
- Sort order
- Active status

FAQ appears on the Contact page. If Sanity has no active FAQ items, local fallback FAQ is shown.

### Edit Contact Info

Open `/admin`, choose **Contact Info**, then add:

- Company name
- Email
- Phone
- WhatsApp
- WeChat
- Address
- Map embed URL
- Business hours
- Language
- Active status

Only one active contact info document is used on the frontend. If Sanity contact info is empty, local fallback contact details from `data/content.ts` are used.

If both `mapEmbedUrl` in Sanity and `NEXT_PUBLIC_MAP_EMBED_URL` in Vercel exist, the Sanity `mapEmbedUrl` takes priority.

### Edit Homepage Content

Open `/admin`, choose **Homepage Content**, then add:

- Hero title
- Hero subtitle
- Primary button text
- Secondary button text
- Final CTA title
- Final CTA subtitle
- Language
- Active status

If Sanity homepage content is empty, the homepage uses local fallback content from `data/content.ts`.

### Edit Products, News and Case Studies

Use `/admin` to manage:

- **Product** for product listing and modal content
- **News** for news listing
- **Case Study** for case cards

For bilingual content, create separate documents and set `language` to `en` or `zh`.

### Fallback Content

Fallback content means the public site remains usable when:

- Sanity is empty
- Sanity is not configured
- A Sanity request fails
- A specific language has no CMS entry yet

Fallback content lives in:

```text
data/content.ts
```

### Publishing and Frontend Sync

After editing in Sanity:

1. Click **Publish**.
2. Refresh the frontend page.
3. If content does not update immediately, wait around one minute and refresh again.

Most CMS content uses a short revalidation window, so a full Vercel redeploy is usually not required after normal Sanity content edits.

Redeploy is needed when:

- Code changes are pushed
- Environment variables are changed in Vercel
- New schemas or frontend fields are added

## Bilingual CMS Editing Guide

The website language switch uses two language values:

```text
en = English
zh = Chinese
```

For CMS-managed content, create separate Sanity documents for English and Chinese. Do not put both languages into one field unless the field is only an internal note.

CMS content types using this bilingual workflow:

- Products
- News
- Case Studies
- Downloads
- FAQ
- Contact Info
- Homepage Content

### Recommended Workflow

1. Create the English document first.
2. Set `language` to `en`.
3. Add a simple `translationKey`, such as `mid-weight-denim-fabric`.
4. Publish.
5. Duplicate or create the Chinese version.
6. Set `language` to `zh`.
7. Use the same `translationKey`.
8. Translate only the buyer-facing text.
9. Publish.

Example English Product:

```text
Title: Mid-weight Denim Fabric
Language: en
translationKey: mid-weight-denim-fabric
```

Example Chinese Product:

```text
Title: 中厚牛仔面料
Language: zh
translationKey: mid-weight-denim-fabric
```

The `translationKey` field is optional. It helps group matching English and Chinese versions in Sanity, but the website will still work if it is empty.

### Fallback Logic

The frontend uses this safe order:

1. Show Sanity content matching the selected language.
2. If that language is missing, show English Sanity content when available.
3. If Sanity has no usable content, show local fallback content from `data/content.ts`.

This means the public website should not become blank if Chinese CMS content has not been entered yet.

### Practical Notes

- Keep `language` values exactly as `en` or `zh`.
- Use realistic wording and avoid unverified claims.
- For product pairs, keep similar categories, specifications and `translationKey` values.
- For Contact Info and Homepage Content, publish one English document and one Chinese document when possible.
- After publishing in Sanity, refresh the frontend page. Most content should update after the short revalidation window without a full Vercel redeploy.

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

Official domain:

```text
https://www.ruilong.icu
```

Recommended Vercel domain setup:

1. Add `www.ruilong.icu` as the main production domain.
2. Add `ruilong.icu` and configure it to redirect to `www.ruilong.icu`.
3. Keep DNS records managed at the domain registrar.
4. Follow the DNS values shown by Vercel.
5. Vercel will issue and renew HTTPS automatically after DNS is verified.

After the domain is active, check:

```text
https://www.ruilong.icu
https://www.ruilong.icu/sitemap.xml
https://www.ruilong.icu/robots.txt
```

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

The site currently uses clean textile-style placeholder blocks instead of broken or external images. Replace them with real company and product images when ready.

Recommended folders:

- `public/images/hero` - homepage hero, textile sourcing, warehouse or buyer cooperation image
- `public/images/products` - denim, casual, functional, workwear and custom fabric photos
- `public/images/supply-chain` - yarn, warping, weaving, finishing, inspection, packaging and warehouse photos
- `public/images/cases` - neutral fabric/project reference images without fake client branding
- `public/images/about` - Xiqiao/Foshan location, office, team or textile market references

Recommended image size and format:

- Hero: 1600 x 1200 px or larger, JPG/WebP
- Product cards: 1200 x 900 px, JPG/WebP
- Supply chain/process: 1200 x 800 px, JPG/WebP
- Case/about images: 1200 x 800 px, JPG/WebP
- Keep file names lowercase and descriptive, for example `mid-weight-denim-fabric.jpg`

To replace product images:

1. Add the real image to `public/images/products`.
2. Open `data/content.ts`.
3. Update the product `imagePath`, for example:

```text
imagePath: "/images/products/mid-weight-denim-fabric.jpg"
```

4. Update `imageLabel` text if the image subject changes.

To replace hero, about, cases or supply chain placeholders, update the related page component:

- `app/page.tsx`
- `app/about/page.tsx`
- `app/cases/page.tsx`
- `app/supply-chain/page.tsx`
- `app/contact/page.tsx`

The reusable placeholder component is:

```text
components/VisualPlaceholder.tsx
```

After image changes, run:

```bash
npm run build
git add .
git commit -m "Update website images"
git push
```

Vercel will redeploy automatically after GitHub receives the push.

## Next Editing Guide

### Edit Company Text

Main bilingual company copy is in:

```text
data/content.ts
```

Update the `pages`, `rdContent`, `cases`, `news` and `supplySteps` sections. Keep claims realistic and avoid adding unverified certificates, client names, export countries, factory size or annual production data.

### Edit Product Data

Product cards and product modal details are controlled by the `products` array in:

```text
data/content.ts
```

Edit product name, category, description, composition, width, weight, application, MOQ, lead time and tags there.

### Replace Images

Use the prepared folder structure under:

```text
public/images
```

Recommended mapping:

- Hero images: `public/images/hero`
- Product images: `public/images/products`
- Supply chain process images: `public/images/supply-chain`
- Case images: `public/images/cases`
- About/location images: `public/images/about`

After adding files, replace placeholder image paths in `data/content.ts` with local paths such as:

```text
/images/products/denim-fabric.jpg
```

Recommended image sizes:

- Hero: 1600 x 1200 px or larger
- Product: 1200 x 900 px
- Supply chain: 1200 x 800 px
- Cases/about: 1200 x 800 px

Recommended formats: JPG or WebP for photos, PNG only when transparency is needed.

### Change Contact Information

Editable contact details are centralized in:

```text
data/content.ts
```

Update the `contactInfo` object:

- Email: `info@ruilonginternational.com`
- Phone: `+86 XXX XXXX XXXX`
- WhatsApp: `+86 XXX XXXX XXXX`
- WeChat: `RuilongInternational`
- Address: `Xiqiao, Foshan, Guangdong, China`

These values are used by the Contact page, Footer and Floating Contact buttons.

### Connect Real Inquiry Receiving Later

Forms submit to Formspree when `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is configured. The form logic is in:

```text
components/InquiryForm.tsx
```

The current payload includes:

- `formType`
- `name`
- `company`
- `country`
- `email`
- `contact`
- `productType`
- `quantity`
- `message`

Alternative future integration options:

- Formspree
- EmailJS
- Resend
- Supabase
- Vercel API route

Do not add a database or admin dashboard unless Phase 2 requires it.

### Redeploy After GitHub Push

After editing locally:

```bash
npm run build
git add .
git commit -m "Update website content"
git push
```

Vercel will automatically redeploy the latest `main` branch commit.

### Connect a Custom Domain Later

In Vercel:

1. Open the project dashboard.
2. Go to **Settings > Domains**.
3. Add your domain.
4. Follow Vercel's DNS instructions.
5. Wait for DNS verification and SSL certificate activation.

## Important Files to Check Before Uploading

- `package.json` - scripts and dependency versions
- `next.config.js` - Next.js project configuration
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

## Phase 2B Editing Notes

### Update Products

Product cards, product filters and product modal details are controlled by:

```text
data/content.ts
```

Edit the `products` array to update:

- Product name
- Category
- Description
- Composition
- Width
- Weight
- Application
- MOQ placeholder
- Lead time placeholder
- Key features
- Tags and filter values

Keep product claims realistic. Do not add unverified certifications, production capacity, client names or export market claims.

### Replace Images

Prepared image folders are:

```text
public/images/hero
public/images/products
public/images/supply-chain
public/images/cases
public/images/about
```

Add real images to these folders, then update the related placeholder paths or page components:

```text
data/content.ts
app/page.tsx
app/about/page.tsx
app/cases/page.tsx
app/supply-chain/page.tsx
app/contact/page.tsx
```

Example local path:

```text
/images/products/denim-fabric.jpg
```

Recommended image use:

- `hero` - business cooperation, textile sourcing or fabric warehouse visuals
- `products` - denim, casual, functional and custom fabric photos
- `supply-chain` - yarn, warping, weaving, finishing, inspection, packaging and warehouse photos
- `cases` - neutral fabric/project reference images without fake client branding
- `about` - Xiqiao/Foshan location, office, team or textile market references

Recommended image size and format:

- Hero: 1600 x 1200 px or larger, JPG/WebP
- Product: 1200 x 900 px, JPG/WebP
- Supply chain: 1200 x 800 px, JPG/WebP
- Cases/about: 1200 x 800 px, JPG/WebP

The product data includes `imagePath` for each sample product. Add the real file to `public/images/products`, then update the matching `imagePath` in `data/content.ts`.

### Change Contact Details

Contact details are centralized in:

```text
data/content.ts
```

Update the `contactInfo` object:

- Email
- Phone
- WhatsApp
- WeChat
- Address
- ICP filing placeholder

These values appear in the Contact page, Footer and Floating Contact buttons.

### Test Formspree

Before testing live forms, confirm this environment variable exists locally and in Vercel:

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Then:

1. Run `npm run dev`.
2. Open `/contact`.
3. Submit a test inquiry.
4. Confirm the page shows a success message.
5. Check Formspree submissions and the receiving email inbox.
6. If emails go to spam, mark them as not spam and consider using a verified business email/domain later.

The form logic is in:

```text
components/InquiryForm.tsx
```

Current forms send a structured JSON payload to Formspree. They do not store data in a database.

### Redeploy

After editing:

```bash
npm run build
git add .
git commit -m "Update website content"
git push
```

Vercel will automatically redeploy the latest GitHub commit.

## Real Launch Checklist

Before using the website for real public business promotion, check:

- Replace placeholder contact details in `data/content.ts`
- Replace product images in `public/images/products`
- Replace sample product data with real product directions
- Add a real company email address
- Add real WhatsApp and WeChat information
- Confirm `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set in Vercel
- Test all inquiry forms:
  - Quick Inquiry
  - Request Samples
  - Get a Quote
  - Custom Fabric
- Confirm Formspree receives test submissions
- Connect a custom domain
- Check mobile layout on a real phone
- Check SEO title and description in `app/layout.tsx`
- Review Privacy Policy and Terms / Disclaimer pages
- Confirm ICP filing text before using mainland China hosting

## Domain Preparation Notes

Official domain:

```text
https://www.ruilong.icu
```

To connect a custom domain in Vercel:

1. Buy the domain from a domain registrar.
2. Open the Vercel project dashboard.
3. Go to **Settings > Domains**.
4. Add the domain.
5. Follow Vercel's DNS instructions.
6. Update DNS records at the domain registrar.
7. Wait for Vercel to verify DNS and issue SSL.
8. Redirect `ruilong.icu` to `www.ruilong.icu` if both domains are connected.

Keep contact email, WhatsApp and WeChat updated before promoting the custom domain.

SEO files for the official domain:

```text
app/layout.tsx
app/sitemap.ts
app/robots.ts
```

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

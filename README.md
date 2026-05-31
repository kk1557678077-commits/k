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
- Inquiry, sample request, quote and custom fabric forms connected to Formspree when configured
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

The current images use Unsplash URLs. To replace them with real company or product images:

1. Add real images to the prepared folders:
   - `public/images/hero` - homepage hero and business cooperation visuals
   - `public/images/products` - denim, casual, functional and custom fabric product photos
   - `public/images/supply-chain` - yarn, weaving, finishing, inspection and warehouse photos
   - `public/images/cases` - project or material reference images
   - `public/images/about` - company, location or team-related images
2. Change image paths in `data/content.ts` and `app/page.tsx`.
3. Use paths like `/images/denim-fabric.jpg`.
4. Keep descriptive `alt` text for SEO and accessibility.

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

After adding files, replace Unsplash URLs with local paths such as:

```text
/images/products/denim-fabric.jpg
```

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

Add real images to these folders, then replace the current Unsplash URLs in:

```text
data/content.ts
app/page.tsx
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

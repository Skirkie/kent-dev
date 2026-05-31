# Deployment Guide - KentDev Portfolio

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications. It's created by the same team that built Next.js.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your site will be live in minutes
   - You'll get a free `.vercel.app` domain
   - Automatic deployments on every push

#### Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

### Option 2: Netlify

Netlify is another excellent option with a generous free tier.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Next.js**
   - Install Netlify plugin for Next.js:
     ```bash
     npm install -D @netlify/plugin-nextjs
     ```
   - Create `netlify.toml`:
     ```toml
     [[plugins]]
       package = "@netlify/plugin-nextjs"
     ```

---

### Option 3: GitHub Pages (Static Export)

For a completely static version (no server-side features).

#### Steps:

1. **Update next.config.ts**
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select `main` and `/out` folder
   - Save

---

### Option 4: Self-Hosted (VPS/Cloud)

For full control, deploy to your own server.

#### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager

#### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Transfer files to server**
   ```bash
   scp -r .next package.json package-lock.json user@server:/path/to/app
   ```

3. **Install dependencies on server**
   ```bash
   npm install --production
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "kentdev-portfolio" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx (Optional)**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

---

## 🔧 Pre-Deployment Checklist

### Content
- [ ] Updated all personal information
- [ ] Added real projects with working links
- [ ] Updated skills section
- [ ] Added resume PDF to `/public` folder
- [ ] Updated social media links
- [ ] Removed placeholder content

### Technical
- [ ] Tested build locally: `npm run build`
- [ ] Verified all links work
- [ ] Tested responsive design
- [ ] Checked dark mode
- [ ] Optimized images (if added)
- [ ] Updated metadata in `app/layout.tsx`

### SEO
- [ ] Updated page title
- [ ] Updated meta description
- [ ] Added favicon
- [ ] Verified Open Graph tags (optional)

---

## 🌐 Environment Variables

If you add backend features later, create `.env.local`:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=your.email@example.com
```

**Important:** Never commit `.env.local` to Git!

---

## 📊 Post-Deployment

### Analytics (Optional)

#### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:
   ```typescript
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
     strategy="afterInteractive"
   />
   ```

#### Vercel Analytics
- Enable in Vercel dashboard
- Automatic integration

### Performance Monitoring

#### Vercel Speed Insights
```bash
npm install @vercel/speed-insights
```

Add to `app/layout.tsx`:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

---

## 🔄 Continuous Deployment

### Automatic Deployments

Both Vercel and Netlify support automatic deployments:

1. **Main Branch** → Production
2. **Other Branches** → Preview deployments
3. **Pull Requests** → Preview deployments

### Manual Deployments

#### Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 🐛 Troubleshooting

### Build Fails

**Check Node version:**
```bash
node --version  # Should be 18+
```

**Clear cache:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `/public` folder
- Use correct paths: `/image.png` not `./image.png`
- For external images, configure `next.config.ts`

### Styles Not Applied

- Check Tailwind CSS configuration
- Verify `globals.css` is imported
- Clear browser cache

### 404 Errors

- Ensure all routes are properly configured
- Check `app/` directory structure
- Verify build output

---

## 📈 Performance Optimization

### Image Optimization

Use Next.js Image component:
```typescript
import Image from 'next/image';

<Image
  src="/project.png"
  alt="Project"
  width={600}
  height={400}
/>
```

### Font Optimization

Already configured with `next/font/google`

### Code Splitting

Automatic with Next.js App Router

---

## 🔒 Security

### Headers (Optional)

Add to `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

---

## 📞 Support

### Deployment Issues

- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Netlify:** [netlify.com/support](https://netlify.com/support)
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)

### Community

- Next.js Discord
- Stack Overflow
- GitHub Discussions

---

## ✅ Success!

Once deployed, your portfolio will be:
- ✅ Live and accessible worldwide
- ✅ Fast and performant
- ✅ Automatically updated on push
- ✅ Secure with HTTPS
- ✅ Professional and impressive

Share your portfolio link and start applying for opportunities! 🎉

---

**Recommended:** Start with Vercel for the easiest deployment experience.

# Quick Start Guide - KentDev Portfolio

## 🚀 Getting Started

### 1. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

### 2. Build for Production

```bash
npm run build
```

### 3. Start Production Server

```bash
npm start
```

## 📝 Essential Customizations

### Update Your Information

1. **Personal Details** - Edit `config/site.ts`:
   ```typescript
   name: "Your Name"
   email: "your.email@example.com"
   phone: "+63 XXX XXX XXXX"
   ```

2. **Social Links** - Update in `config/site.ts`:
   ```typescript
   social: {
     github: "https://github.com/yourusername",
     linkedin: "https://linkedin.com/in/yourusername",
     facebook: "https://facebook.com/yourusername",
   }
   ```

3. **Projects** - Edit `components/Projects.tsx` (lines 11-68)
   - Replace placeholder projects with your actual work
   - Update titles, descriptions, tech stacks, and links

4. **Skills** - Edit `components/Skills.tsx` (lines 8-38)
   - Add or remove skills based on your expertise

5. **About Section** - Edit `components/About.tsx` (lines 56-72)
   - Write your personal bio and story

6. **Education** - Edit `components/Education.tsx` (lines 9-24)
   - Update with your university name and details

7. **Certificates** - Edit `components/Certificates.tsx` (lines 11-50)
   - Add your actual certifications

8. **Contact Info** - Edit `components/Contact.tsx` (lines 10-46)
   - Update email, phone, and social links

## 🎨 Customization Tips

### Change Colors
Edit `app/globals.css` to modify the color scheme.

### Add Your Resume
1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf`
3. The download button will automatically work

### Add Project Images
1. Create a `public/projects` folder
2. Add your project screenshots
3. Update image paths in `components/Projects.tsx`

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React Icons

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill the process on port 3000
npx kill-port 3000
# Then run dev server again
npm run dev
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added real projects with working links
- [ ] Updated skills to match your expertise
- [ ] Added your resume PDF
- [ ] Tested all navigation links
- [ ] Checked responsive design on mobile
- [ ] Tested contact form UI
- [ ] Verified dark mode appearance
- [ ] Removed all placeholder content
- [ ] Tested build command successfully

## 🎯 Next Steps

1. Customize the content with your information
2. Add your actual projects and achievements
3. Test thoroughly on different devices
4. Deploy to Vercel or Netlify
5. Share your portfolio link!

---

Need more help? Check `CUSTOMIZATION.md` for detailed instructions.

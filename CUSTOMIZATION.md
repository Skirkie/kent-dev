# Customization Guide

This guide will help you personalize the KentDev portfolio with your own information.

## Quick Start Checklist

### 1. Update Site Configuration

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "YourName",
  author: {
    name: "Your Full Name",
    title: "Your Title/Role",
    email: "your.email@example.com",
    phone: "+63 XXX XXX XXXX",
  },
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername",
  },
};
```

### 2. Update Hero Section

Edit `components/Hero.tsx`:

- Line 30-32: Update your name and greeting
- Line 40-42: Update your title/role
- Line 48-52: Update your tagline/description
- Update button links if needed

### 3. Update About Section

Edit `components/About.tsx`:

- Lines 11-30: Update the highlights (location, education, focus, status)
- Lines 56-72: Replace with your personal bio
- Make it authentic and reflect your personality

### 4. Update Skills

Edit `components/Skills.tsx`:

- Lines 8-38: Add/remove skills based on your expertise
- Organize by categories that make sense for you
- Only include skills you're comfortable with

### 5. Update Projects

Edit `components/Projects.tsx`:

- Lines 11-68: Replace with your actual projects
- For each project, update:
  - `title`: Project name
  - `description`: Brief description
  - `tags`: Technologies used
  - `liveUrl`: Live demo link
  - `githubUrl`: GitHub repository link
- Add project images to the `public` folder and update image paths

### 6. Update Education

Edit `components/Education.tsx`:

- Lines 9-24: Update with your actual educational background
- Replace "University Name" with your institution
- Update period, location, and description
- Modify highlights to reflect your experience

### 7. Update Certificates

Edit `components/Certificates.tsx`:

- Lines 11-50: Add your actual certificates and achievements
- Include:
  - Certificate/course name
  - Issuing organization
  - Date received
  - Skills learned
  - Credential URL (if available)

### 8. Update Contact Information

Edit `components/Contact.tsx`:

- Lines 10-26: Update contact information
- Lines 28-46: Update social media links and usernames
- Ensure all links are working

### 9. Update Footer

Edit `components/Footer.tsx`:

- Lines 8-15: Verify navigation links
- Lines 17-22: Update social media links
- Line 30: Update brand description if needed

### 10. Update Metadata

Edit `app/layout.tsx`:

- Lines 8-11: Update page title and description for SEO

## Adding Your Resume

1. Add your resume PDF to the `public` folder
2. Name it `resume.pdf` or update the link in `config/site.ts`
3. The download button in the Hero section will use this file

## Adding Project Images

1. Add project screenshots to `public/projects/` folder
2. Update image paths in `components/Projects.tsx`:
   ```typescript
   image: "/projects/your-project-image.png"
   ```

## Customizing Colors

The portfolio uses a neutral color scheme. To customize:

### Option 1: Using Tailwind Classes

Replace color classes in components:
- `bg-neutral-50` → `bg-blue-50`
- `text-neutral-600` → `text-blue-600`
- etc.

### Option 2: Using CSS Variables

Edit `app/globals.css` to change theme colors:

```css
:root {
  --primary: 220 90% 56%; /* Your primary color */
  --accent: 220 90% 56%;  /* Your accent color */
}
```

## Customizing Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

Popular choices:
- Inter (current)
- Poppins
- Roboto
- Open Sans
- Montserrat

## Adding Dark Mode Toggle

The portfolio respects system preferences by default. To add a manual toggle:

1. Install next-themes: `npm install next-themes`
2. Create a theme provider component
3. Add a toggle button in the Navbar

## Testing Your Changes

1. Run the development server: `npm run dev`
2. Check all sections on desktop and mobile
3. Test all links and buttons
4. Verify smooth scrolling works
5. Check dark mode appearance

## Common Issues

### Links not working
- Ensure all `href` attributes are updated
- Check for typos in section IDs

### Images not showing
- Verify images are in the `public` folder
- Check file paths are correct
- Use forward slashes in paths

### Styling looks off
- Clear browser cache
- Restart development server
- Check for missing Tailwind classes

## Need Help?

- Check the main README.md for setup instructions
- Review Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS documentation: https://tailwindcss.com/docs
- Review shadcn/ui documentation: https://ui.shadcn.com

## Final Steps

Before deploying:

1. ✅ All personal information updated
2. ✅ All links tested and working
3. ✅ Projects showcase your best work
4. ✅ Contact form tested
5. ✅ Resume file added
6. ✅ Responsive design checked
7. ✅ Dark mode tested
8. ✅ No placeholder content remaining

---

Good luck with your portfolio! 🚀

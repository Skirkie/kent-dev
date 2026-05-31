# KentDev Portfolio

A modern, minimalist portfolio website for Kent, a 4th Year BSIT Student and Aspiring Full-Stack Developer.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Features

- ✨ Modern and minimalist design
- 🎨 Clean, professional aesthetic
- 📱 Fully responsive on all devices
- 🌙 Dark mode support (system preference)
- ⚡ Smooth animations and transitions
- 🎯 Single-page layout with smooth scrolling
- 🧩 Modular component architecture
- ♿ Accessible UI components

## Sections

1. **Hero** - Strong introduction with CTAs
2. **About** - Personal introduction and highlights
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio showcase with project cards
5. **Education** - Academic background and journey
6. **Certificates** - Achievements and certifications
7. **Contact** - Contact form and social links
8. **Footer** - Branding and quick navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd kentdev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update the following files with your actual information:

1. **components/Hero.tsx** - Name, title, and tagline
2. **components/About.tsx** - Personal bio and highlights
3. **components/Skills.tsx** - Your technical skills
4. **components/Projects.tsx** - Your actual projects
5. **components/Education.tsx** - Your educational background
6. **components/Certificates.tsx** - Your certifications
7. **components/Contact.tsx** - Your contact information and social links

### Colors and Styling

The portfolio uses a neutral color scheme. To customize:

- Edit `app/globals.css` for theme colors
- Modify Tailwind classes in components for styling adjustments

### Adding New Sections

1. Create a new component in the `components` folder
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

## Project Structure

```
kentdev-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and theme
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Education.tsx       # Education section
│   ├── Certificates.tsx    # Certificates section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
└── lib/
    └── utils.ts            # Utility functions
```

## Building for Production

```bash
npm run build
```

## Deployment

This portfolio can be deployed to:

- **Vercel** (Recommended) - Zero configuration
- **Netlify** - Easy deployment
- **GitHub Pages** - Free hosting
- Any static hosting service

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

## Performance

- Optimized images and assets
- Minimal JavaScript bundle
- Fast page loads
- Smooth animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, reach out via the contact form on the website.

---

Built with ❤️ by Kent using Next.js and Tailwind CSS

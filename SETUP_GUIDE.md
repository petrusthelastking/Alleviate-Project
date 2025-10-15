# Portfolio Setup Guide

## 🎉 Congratulations!

Your modern portfolio website is now fully set up with:

✅ **Next.js 14** with App Router  
✅ **TypeScript** for type safety  
✅ **Tailwind CSS** with custom theme (#18479e primary color)  
✅ **Framer Motion** for smooth animations  
✅ **Decap CMS** for no-code content management  
✅ **MDX support** for rich project content  
✅ **5 Complete Pages**: Home, Work, About, Resume, Contact  
✅ **Dynamic project detail pages**  
✅ **3 Sample projects** with full case studies  

---

## 🚀 Getting Started

### Local Development

The dev server is already running at:
- **Local**: http://localhost:3000
- **Network**: http://172.16.177.156:3000

### Pages Available

1. **Home** (`/`) - Hero section with animated particles, featured carousel, capabilities, metrics
2. **Work** (`/work`) - Filterable project grid
3. **Project Details** (`/work/[slug]`) - Full case studies with MDX
4. **About** (`/about`) - Bio, timeline, values
5. **Resume** (`/resume`) - Skills, experience, education
6. **Contact** (`/contact`) - Contact form with validation
7. **Admin** (`/admin`) - CMS interface (needs GitHub OAuth)

---

## 📝 Adding New Projects

### Option 1: Using the CMS (After Deployment)

1. Deploy to Vercel/Netlify
2. Set up GitHub OAuth (see below)
3. Go to `/admin`
4. Click "New Project"
5. Fill form and publish

### Option 2: Manually (Works Now)

Create a new file in `content/projects/your-project.mdx`:

```mdx
---
title: "Your Project Title"
slug: your-project-slug
date: 2025-10-15
thumbnail: /images/uploads/cover.jpg
category: AI/ML
stack: ["Next.js", "Python", "TensorFlow"]
role: "Lead Developer"
summary: "Brief description"
featured: true
metrics:
  - { label: "Metric 1", value: "99%" }
links:
  live: "https://example.com"
  repo: "https://github.com/..."
---

## Problem
...

## Solution
...

## Results
...
```

---

## 🎨 Customization Guide

### 1. Update Personal Info

**Navigation & Footer** (`components/Navbar.tsx`, `components/Footer.tsx`):
- Change "GB" initials to yours
- Update social media links
- Modify navigation items

**Hero Section** (`app/page.tsx` lines 55-75):
```tsx
<h1>
  Your Name
  <br />
  <span className="text-gradient">Your Title</span>
</h1>
```

**About Page** (`app/about/page.tsx`):
- Update bio text
- Modify timeline entries
- Change values

### 2. Change Colors

Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#YOUR_COLOR', // Change from #18479e
}
```

### 3. Add Your Avatar/Logo

Replace placeholder emojis:
- Home hero: Add image component
- About page: Upload actual photo
- Navbar: Add logo image

### 4. Modify Capabilities

Edit `app/page.tsx` (bottom of file):
```ts
const capabilities = [
  {
    icon: '🤖',
    title: 'Your Skill',
    skills: ['Tech 1', 'Tech 2'],
  },
  // ...
];
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings
5. Get your live URL!

### Deploy to Netlify

1. Push code to GitHub
2. Connect to [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## 🔐 GitHub OAuth Setup (for CMS)

### Step 1: Create OAuth App

1. Go to GitHub → Settings → Developer Settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Portfolio CMS
   - **Homepage URL**: `https://yourdomain.com`
   - **Authorization callback**: `https://api.netlify.com/auth/done` (for Netlify) or your auth endpoint
4. Copy **Client ID** and **Client Secret**

### Step 2: Configure CMS

Update `public/admin/config.yml`:
```yml
backend:
  name: github
  repo: YOUR_USERNAME/YOUR_REPO
  branch: main
```

### Step 3: Add OAuth to Netlify

1. Netlify dashboard → Site settings → Access control → OAuth
2. Install GitHub provider
3. Add Client ID and Secret

Now `/admin` will work with GitHub authentication!

---

## 🎯 Key Files Reference

```
portfolio-petrus/
├── app/
│   ├── page.tsx              # Home page (EDIT: hero text, capabilities)
│   ├── about/page.tsx        # About (EDIT: bio, timeline, values)
│   ├── work/page.tsx         # All projects
│   ├── work/[slug]/page.tsx  # Project detail template
│   ├── resume/page.tsx       # Resume (EDIT: skills, experience)
│   ├── contact/page.tsx      # Contact (EDIT: email, socials)
│   └── layout.tsx            # Global layout (EDIT: metadata)
├── components/
│   ├── Navbar.tsx            # Navigation (EDIT: links, logo)
│   ├── Footer.tsx            # Footer (EDIT: socials)
│   ├── ProjectCard.tsx       # Project cards
│   ├── ProjectCarousel.tsx   # Featured carousel
│   ├── SectionHeader.tsx     # Section headers
│   └── MetricStat.tsx        # Animated stats
├── content/projects/         # Add new .mdx files here
├── public/admin/             # CMS configuration
│   ├── index.html
│   └── config.yml            # UPDATE: repo name
├── tailwind.config.ts        # UPDATE: colors, fonts
└── lib/projects.ts           # Project utilities
```

---

## 🐛 Common Issues

### Projects Not Showing

**Problem**: Projects don't appear on Work page

**Solution**:
- Check `content/projects/` has `.mdx` files
- Verify frontmatter format is correct
- Restart dev server: `Ctrl+C` then `npm run dev`

### Images Not Loading

**Problem**: Thumbnail/gallery images show placeholders

**Solution**:
- Add actual images to `public/images/uploads/`
- Update thumbnail paths in frontmatter
- Use absolute paths: `/images/uploads/image.jpg`

### CMS Not Working Locally

**Problem**: `/admin` doesn't work on localhost

**Solution**:
- CMS requires deployed site with OAuth
- Use manual MDX files for local development
- Deploy to Vercel/Netlify to use CMS

### Build Errors

**Problem**: `npm run build` fails

**Solution**:
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Next Steps

### 1. Content
- [ ] Write your actual bio
- [ ] Add real project case studies
- [ ] Upload your resume PDF
- [ ] Add professional photos

### 2. Branding
- [ ] Design/upload logo
- [ ] Choose final color scheme
- [ ] Add favicon
- [ ] Create Open Graph images

### 3. SEO
- [ ] Update metadata in `layout.tsx`
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console

### 4. Analytics
- [ ] Add Google Analytics
- [ ] Set up Vercel Analytics
- [ ] Track button clicks
- [ ] Monitor performance

### 5. Polish
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add 404 page
- [ ] Optimize images

---

## 💡 Pro Tips

1. **Use Vercel**: Best Next.js hosting with automatic deployments
2. **Lighthouse**: Run audits to optimize performance
3. **Accessibility**: Test with screen readers and keyboard navigation
4. **Mobile-first**: Always test on actual devices
5. **Version control**: Commit frequently with clear messages
6. **Backup**: Keep projects in Git; CMS commits automatically

---

## 📞 Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Decap CMS**: https://decapcms.org/docs

---

## 🎉 You're Ready!

Your portfolio is **production-ready**. Just customize the content, add your projects, and deploy!

**Good luck with your portfolio! 🚀**

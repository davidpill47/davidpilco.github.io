# 🌻 Bloomfolio

<div align="center">

A modern, customizable portfolio template built with **Astro 5** and **DaisyUI 5**. A beautiful, fast, and highly customizable portfolio template for developers, designers, and creatives.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.x-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</br>

<img width="1920" height="1080" alt="img1" src="https://github.com/user-attachments/assets/b882118c-2070-4b12-85f4-8491ea9517ee" />

</div>

## ✨ Features

- 🎨 **6 Built-in Themes** - Light, Dark, Synthwave, Retro, Valentine, and Dim
- 📝 **6 Content Collections** - Blog, Projects, Work, Education, Hackathons, and About
- 🔒 **Type-Safe Content** - Full TypeScript support with validated schemas
- 📱 **Fully Responsive** - Mobile-first design with DaisyUI components
- ⚡ **Fast & Optimized** - Static site generation with automatic image optimization
- 🎭 **Smooth Transitions** - Page transitions using Astro's View Transitions API
- 📦 **MDX Support** - Enhanced markdown with component imports (Spotify, YouTube, Twitter)
- 🎯 **Configuration-Driven** - Customize everything through a central config file
- 🌸 **FAB Flower Menu** - Expandable floating action button for extra links
- 🎨 **Modern Stack** - Astro 5 + Tailwind CSS 4 + DaisyUI 5 + TypeScript
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- ♿ **Accessible** - Built with accessibility in mind

## 🚀 Quick Start


## 📂 Project Structure

```
bloomfolio/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/         # Images and media
│   │   └── bloomfolio.png
│   ├── components/     # Reusable components
│   │   ├── About.astro
│   │   ├── Blog.astro
│   │   ├── BlogCard.astro
│   │   ├── Contact.astro
│   │   ├── FabFlower.astro
│   │   ├── Hackathons.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   ├── SkillBadge.astro
│   │   ├── Spotify.astro
│   │   ├── ThemeSelector.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Timeline.astro
│   │   ├── Twitter.astro
│   │   └── YouTube.astro
│   ├── content/        # Content collections
│   │   ├── about/     # About section (1 file)
│   │   ├── blog/      # Blog posts (.md or .mdx)
│   │   ├── education/ # Education history
│   │   ├── hackathons/# Hackathon entries
│   │   ├── projects/  # Portfolio projects
│   │   └── work/      # Work experience
│   ├── layouts/       # Page layouts
│   │   ├── Layout.astro
│   │   ├── BlogLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/         # File-based routing
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── projects/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── styles/
│   │   └── global.css # Tailwind + DaisyUI
│   ├── config.ts      # Site configuration
│   └── content.config.ts # Content schemas
├── astro.config.mjs   # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 📝 Content Management

### Creating Content

All content is stored in `src/content/` organized by type. Each content type has a specific schema.

#### Blog Posts

Create a new file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
image: "./featured-image.png"
publishDate: "2024-01-25"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

Supports both `.md` and `.mdx` files. Use `.mdx` for rich media embeds (Spotify, YouTube, Twitter).

#### Projects

Create a new file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description"
image: "./screenshot.png"
startDate: "2023-01-15"
endDate: "2023-06-30"  # Optional (omit for ongoing)
skills: ["React", "Node.js", "MongoDB"]
demoLink: "https://demo.example.com"  # Optional
sourceLink: "https://github.com/..."  # Optional
---

Detailed project description...
```

#### Work Experience

Create a new file in `src/content/work/`:

```markdown
---
title: "Company Name"
subtitle: "Job Title"
startDate: "2020-01-15"
endDate: "2023-06-30"  # Optional (omit for current position)
logo: "https://company-logo-url.com"  # Optional
link: "https://company-website.com"   # Optional
---

Job description and achievements...
```

For complete documentation on content creation, see the [Content Collections Guide](/blog/guides/content-collections-guide) and [Markdown Guide](/blog/guides/markdown-guide).

## 🎨 Customization

### Changing Themes

Edit `src/config.ts`:

```typescript
enableThemeSelector: true  // Dropdown with 6 themes
// OR
enableThemeSelector: false  // Simple light/dark toggle
```

### Adding Custom Styles

Add custom CSS in component `<style>` tags or extend `src/styles/global.css`:

```css
@import "tailwindcss";
@plugin "daisyui";

/* Your custom styles here */
```

### Creating New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/pages/index.astro`
3. Optionally add a toggle in `src/config.ts`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output is generated in `dist/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lauroguedes/bloomfolio)

1. Connect your GitHub repository
2. Vercel auto-detects Astro
3. Deploy!

### Deploy to Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Cloudflare Pages

1. Connect your repository
2. Build command: `npm run build`
3. Build output directory: `dist`

### Other Platforms

Bloomfolio works with any static hosting platform that supports Node.js builds:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Render
- Railway

## 🛠️ Tech Stack

- **[Astro 5](https://astro.build)** - Static site generator
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[DaisyUI 5](https://daisyui.com)** - Component library for Tailwind
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[MDX](https://mdxjs.com/)** - Enhanced Markdown
- **[Lucide Icons](https://lucide.dev/)** - Icon library



## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com)
- Icons from [Lucide](https://lucide.dev)
- Inspired by modern portfolio designs and the developer community



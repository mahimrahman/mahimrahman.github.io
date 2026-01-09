# Modern Portfolio Website

A stunning, modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ **Blazing Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Beautiful UI with Tailwind CSS and custom animations
- 🌊 **Smooth Animations** - Interactive animations powered by Framer Motion
- 📱 **Fully Responsive** - Looks great on all devices
- 🎯 **Type Safe** - Written in TypeScript for better developer experience
- 🎭 **Custom Cursor** - Unique interactive cursor effect
- 🌈 **Gradient Effects** - Eye-catching gradient backgrounds and text
- 📊 **Animated Skills** - Interactive skill bars and project cards
- 📬 **Contact Form** - Functional contact form with validation
- 🚢 **Easy Deployment** - Configured for Vercel deployment

## 🛠️ Tech Stack


## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```
## Run locally (Vite)

This project is a Vite + React + TypeScript app. Do **not** open `index.html` directly in the browser or via VS Code “Live Server” — the browser will try to load `/src/main.tsx` as a module and you can get errors like:

`Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"`

Instead, run the Vite dev server:

```bash
npm install
npm run dev
```

Then open the printed URL (default: `http://localhost:3000`).


3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

To create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## 📝 Customization Guide

### Update Your Information

Replace placeholder content in these files:
- `src/components/Hero.tsx` - Name, roles, social links
- `src/components/About.tsx` - Description, stats, image
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Portfolio.tsx` - Projects and work
- `src/components/Contact.tsx` - Contact information

### Customize Colors

Edit `tailwind.config.js` to change colors.
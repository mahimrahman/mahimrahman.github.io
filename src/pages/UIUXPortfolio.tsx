import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Layers, Smartphone, Monitor } from 'lucide-react'

const CLOUDINARY_CLOUD_NAME = 'dacbxyltq'

interface ScreenshotGroup {
  label: string
  images: string[]
}

interface Project {
  id: string
  title: string
  tagline: string
  shortDescription: string
  fullDescription: string
  thumbnail: string
  category: string
  tools: string[]
  role: string[]
  process: {
    step: string
    description: string
  }[]
  screenshots: string[]
  screenshotGroups?: ScreenshotGroup[]
}

// Helper to check if a project is a mobile app
const isMobileApp = (category: string): boolean => {
  return category === 'Mobile App'
}

const cloudinaryImageUrl = (publicPath: string) => {
  const encoded = publicPath
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${encoded}`
}

const uiuxScreens = (folderPath: string, start: number, end: number, extension: string = 'png') =>
  Array.from({ length: end - start + 1 }, (_, index) =>
    cloudinaryImageUrl(`${folderPath}/${start + index}.${extension}`)
  )

const projects: Project[] = [
  {
    id: 'apptracka',
    title: 'Apptracka - Application Tracking UI',
    tagline: 'Clean, task-focused tracking experience',
    shortDescription: 'UI screens for an application tracking product, designed for clarity and quick scanning.',
    fullDescription: 'A UI/UX design exploration for an application tracking workflow. The screens prioritize clear information hierarchy, fast navigation, and a minimal visual system to keep focus on the user\'s progress and tasks.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/Apptracka Application Tracking App/1.png'),
    category: 'Product UI',
    tools: ['Figma', 'UI Design', 'UX Flow'],
    role: ['UI Design', 'UX Design', 'Prototyping'],
    process: [
      { step: 'Research', description: 'Review common tracking flows and user needs' },
      { step: 'Wireframe', description: 'Define layout, hierarchy, and key components' },
      { step: 'Design', description: 'Apply a consistent visual system and spacing rules' },
      { step: 'Refine', description: 'Iterate based on readability and interaction clarity' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/Apptracka Application Tracking App', 1, 9)
  },
  {
    id: 'bangla-editor-panel',
    title: 'BANGLA Editor Panel - Dashboard UI',
    tagline: 'Efficient editorial workflow dashboard',
    shortDescription: 'Admin/editor panel UI screens designed for content operations and management.',
    fullDescription: 'A dashboard UI concept for an editor/admin panel. The design emphasizes fast navigation, clear status visibility, and scalable components for managing content and editorial tasks.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BANGLA Editor Panel/1.png'),
    category: 'Dashboard',
    tools: ['Figma', 'Design System', 'UX'],
    role: ['UI Design', 'Information Architecture', 'Component Design'],
    process: [
      { step: 'Structure', description: 'Define sidebar navigation and primary sections' },
      { step: 'Components', description: 'Design tables, forms, and status indicators' },
      { step: 'Visual', description: 'Apply spacing, typography, and color tokens' },
      { step: 'Polish', description: 'Refine states, empty screens, and micro-details' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BANGLA Editor Panel', 1, 6)
  },
  {
    id: 'bassilichat-ai',
    title: 'BassiliChat AI - UI Redesign',
    tagline: 'Before/after redesign with improved hierarchy',
    shortDescription: 'A UI redesign comparing the original interface with an updated, cleaner design.',
    fullDescription: 'This project documents a UI redesign: improving layout structure, readability, and visual hierarchy while keeping the product intent intact. The gallery includes both the redesigned UI and the original UI for comparison.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliChat AI/The UI I redesigned/1.png'),
    category: 'Web App',
    tools: ['Figma', 'UI Redesign', 'UX Audit'],
    role: ['UI Design', 'UX Improvement', 'Visual Refinement'],
    process: [
      { step: 'Audit', description: 'Identify friction points and visual inconsistencies' },
      { step: 'Redesign', description: 'Rebuild layout and typography for clarity' },
      { step: 'Consistency', description: 'Standardize spacing and component patterns' },
      { step: 'Compare', description: 'Present redesigned screens alongside original UI' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BassiliChat AI/The UI I redesigned', 1, 6),
    screenshotGroups: [
      {
        label: 'New Redesigned UI',
        images: uiuxScreens('Portfolio/UI UX/BassiliChat AI/The UI I redesigned', 1, 6)
      },
      {
        label: 'Old UI',
        images: uiuxScreens('Portfolio/UI UX/BassiliChat AI/Old UI', 1, 4)
      }
    ]
  },
  {
    id: 'bassilichat-inc-website',
    title: 'BassiliChat Inc - Website UI',
    tagline: 'Marketing site layout and visual direction',
    shortDescription: 'Website UI screens focusing on messaging, layout, and clean presentation.',
    fullDescription: 'A website UI concept for BassiliChat Inc. The layout focuses on strong messaging blocks, a clear content hierarchy, and a modern visual tone suitable for a product/company landing experience.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliChat Inc Website/1.png'),
    category: 'Website',
    tools: ['Figma', 'Web UI', 'Visual Design'],
    role: ['UI Design', 'Visual Design', 'Layout Design'],
    process: [
      { step: 'Content', description: 'Define sections and message hierarchy' },
      { step: 'Layout', description: 'Design responsive-friendly page structure' },
      { step: 'Style', description: 'Apply typography and color direction' },
      { step: 'Refine', description: 'Polish spacing, alignment, and component rhythm' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BassiliChat Inc Website', 1, 6)
  },
  {
    id: 'bassilitrade',
    title: 'BassiliTrade - Trading Platform UI',
    tagline: 'Data-dense UI with readable structure',
    shortDescription: 'Trading/product UI screens designed to present data clearly and reduce cognitive load.',
    fullDescription: 'A UI design set for a trading platform interface. The focus is on readable data presentation, consistent component patterns, and visual grouping to help users scan and act quickly.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliTrade/1.png'),
    category: 'Web Platform',
    tools: ['Figma', 'UI Design', 'Data UI'],
    role: ['UI Design', 'UX Structure', 'Component Design'],
    process: [
      { step: 'Structure', description: 'Define data groupings and navigation model' },
      { step: 'Components', description: 'Design cards, tables, and key widgets' },
      { step: 'Hierarchy', description: 'Tune typography and contrast for scanning' },
      { step: 'Iteration', description: 'Refine based on density and readability checks' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BassiliTrade', 1, 7)
  },
  {
    id: 'monheure',
    title: 'MonHeure - Mobile App UI',
    tagline: 'Mobile flow with consistent UI patterns',
    shortDescription: 'A mobile UI design set demonstrating key screens and user flow continuity.',
    fullDescription: 'A mobile UI/UX design set for MonHeure. The screens focus on consistent interaction patterns, clean layouts, and flow continuity across core tasks within the app.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/MonHeure Mobile App/1.jpg'),
    category: 'Mobile App',
    tools: ['Figma', 'Mobile UI', 'UX Flow'],
    role: ['UI Design', 'UX Design', 'Prototype Flow'],
    process: [
      { step: 'Flow', description: 'Map key tasks and navigation structure' },
      { step: 'Screens', description: 'Design reusable patterns and components' },
      { step: 'Visual', description: 'Apply consistent spacing and typography' },
      { step: 'Review', description: 'Check accessibility and interaction consistency' }
    ],
    screenshots: [
      cloudinaryImageUrl('Portfolio/UI UX/MonHeure Mobile App/1.jpg'),
      ...uiuxScreens('Portfolio/UI UX/MonHeure Mobile App', 2, 13, 'png')
    ]
  },
  {
    id: 'legym',
    title: 'LeGym Concordia Mobile Application UI',
    tagline: 'Modern Fitness Management System',
    shortDescription: 'Comprehensive gym management mobile app for Concordia University',
    fullDescription: 'A sophisticated mobile application designed for gym management at Concordia University. The app provides seamless user experience for gym members to book equipment, track workouts, manage memberships, and access fitness resources.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773616/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_1.png',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping', 'User Testing'],
    process: [
      { step: 'Research', description: 'University gym user interviews and behavioral analysis' },
      { step: 'Wireframe', description: 'App architecture and user flow mapping' },
      { step: 'Prototype', description: 'Interactive prototypes with micro-interactions' },
      { step: 'Test', description: 'Usability testing with student focus groups' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773616/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773634/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773636/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773637/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773638/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773639/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773641/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773642/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773644/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_9.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773617/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_10.png'
    ]
  },
  {
    id: 'artemis',
    title: 'Artemis Arthouse UI',
    tagline: 'Elegant Art Gallery Experience',
    shortDescription: 'Sophisticated web interface for contemporary art gallery',
    fullDescription: 'An elegant and immersive web interface designed for Artemis Arthouse, showcasing contemporary art collections with a focus on visual storytelling. The design emphasizes clean aesthetics, intuitive navigation, and seamless artwork browsing experience.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773561/Portfolio/UI%20UX/Artemis%20Arthouse/artemis1.png',
    category: 'Web App',
    tools: ['Figma', 'Adobe Creative Suite', 'Webflow'],
    role: ['UI Design', 'Visual Design', 'Art Direction'],
    process: [
      { step: 'Research', description: 'Art gallery user behavior and aesthetic preferences study' },
      { step: 'Wireframe', description: 'Gallery navigation and artwork presentation flows' },
      { step: 'Prototype', description: 'High-fidelity visual designs and interactions' },
      { step: 'Test', description: 'A/B testing for optimal artwork display layouts' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773561/Portfolio/UI%20UX/Artemis%20Arthouse/artemis1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773562/Portfolio/UI%20UX/Artemis%20Arthouse/artemis2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773564/Portfolio/UI%20UX/Artemis%20Arthouse/artemis3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773565/Portfolio/UI%20UX/Artemis%20Arthouse/artemis4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773566/Portfolio/UI%20UX/Artemis%20Arthouse/artemis5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773567/Portfolio/UI%20UX/Artemis%20Arthouse/artemis6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773574/Portfolio/UI%20UX/Artemis%20Arthouse/artemis7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773575/Portfolio/UI%20UX/Artemis%20Arthouse/artemis8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773577/Portfolio/UI%20UX/Artemis%20Arthouse/artemis9.png'
    ]
  },
  {
    id: 'bdgsa',
    title: 'BDGSA - Community Platform UI',
    tagline: 'Community-Centered Digital Platform',
    shortDescription: 'Comprehensive platform for graduate student community engagement',
    fullDescription: 'A community-focused digital platform designed for the Bangladeshi Graduate Students\' Association, facilitating member connections, event management, and cultural activities. The interface prioritizes accessibility and cultural relevance.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773578/Portfolio/UI%20UX/BDGSA/bdgsa1.png',
    category: 'Web Platform',
    tools: ['Figma', 'Sketch', 'InVision', 'Adobe XD'],
    role: ['UX Research', 'UI Design', 'Community Analysis'],
    process: [
      { step: 'Research', description: 'Graduate student community needs assessment' },
      { step: 'Wireframe', description: 'Community platform architecture and member flows' },
      { step: 'Prototype', description: 'Cultural-sensitive design prototypes' },
      { step: 'Test', description: 'Community feedback integration and accessibility testing' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773578/Portfolio/UI%20UX/BDGSA/bdgsa1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773580/Portfolio/UI%20UX/BDGSA/bdgsa2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773581/Portfolio/UI%20UX/BDGSA/bdgsa3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773582/Portfolio/UI%20UX/BDGSA/bdgsa4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773583/Portfolio/UI%20UX/BDGSA/bdgsa5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773584/Portfolio/UI%20UX/BDGSA/bdgsa6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773586/Portfolio/UI%20UX/BDGSA/bdgsa7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773587/Portfolio/UI%20UX/BDGSA/bdgsa8.png'
    ]
  },
  {
    id: 'cafe',
    title: 'Simple Cafe Menu Design',
    tagline: 'Clean & Appetizing Menu Interface',
    shortDescription: 'Responsive cafe menu design focusing on user-friendly food ordering',
    fullDescription: 'A clean and appetizing cafe menu interface developed as part of FreeCodeCamp curriculum. The design emphasizes readability, visual hierarchy, and mobile-first responsive design.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773588/Portfolio/UI%20UX/Codecamp%20Cafe/cafe1.png',
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'Figma', 'Responsive Design'],
    role: ['Frontend Development', 'UI Design', 'Responsive Design'],
    process: [
      { step: 'Research', description: 'Cafe menu design patterns and user preferences' },
      { step: 'Wireframe', description: 'Menu layout and information hierarchy' },
      { step: 'Prototype', description: 'Responsive design implementation' },
      { step: 'Test', description: 'Cross-device compatibility and usability testing' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773588/Portfolio/UI%20UX/Codecamp%20Cafe/cafe1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773589/Portfolio/UI%20UX/Codecamp%20Cafe/cafe2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773590/Portfolio/UI%20UX/Codecamp%20Cafe/cafe3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773591/Portfolio/UI%20UX/Codecamp%20Cafe/cafe4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773593/Portfolio/UI%20UX/Codecamp%20Cafe/cafe5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773594/Portfolio/UI%20UX/Codecamp%20Cafe/cafe6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773595/Portfolio/UI%20UX/Codecamp%20Cafe/cafe7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773596/Portfolio/UI%20UX/Codecamp%20Cafe/cafe8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773597/Portfolio/UI%20UX/Codecamp%20Cafe/cafe9.png'
    ]
  },
  {
    id: 'fashionista',
    title: 'Fashionista Mobile App UI',
    tagline: 'Trendy Fashion Discovery Platform',
    shortDescription: 'Modern fashion app for style discovery and shopping',
    fullDescription: 'A contemporary mobile application designed for fashion enthusiasts to discover trends, create style profiles, and shop curated collections. The interface combines visual appeal with functional design.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773603/Portfolio/UI%20UX/fashionista/fashionista_1.png',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Principle', 'Sketch'],
    role: ['UI Design', 'UX Research', 'Fashion Analysis'],
    process: [
      { step: 'Research', description: 'Fashion app user behavior and trend analysis' },
      { step: 'Wireframe', description: 'Style discovery and shopping user flows' },
      { step: 'Prototype', description: 'Interactive fashion browsing prototypes' },
      { step: 'Test', description: 'Style preference testing and user feedback' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773603/Portfolio/UI%20UX/fashionista/fashionista_1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773607/Portfolio/UI%20UX/fashionista/fashionista_3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773609/Portfolio/UI%20UX/fashionista/fashionista_4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773610/Portfolio/UI%20UX/fashionista/fashionista_5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773611/Portfolio/UI%20UX/fashionista/fashionista_6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773613/Portfolio/UI%20UX/fashionista/fashionista_7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773614/Portfolio/UI%20UX/fashionista/fashionista_8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773615/Portfolio/UI%20UX/fashionista/fashionista_9.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773604/Portfolio/UI%20UX/fashionista/fashionista_10.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773606/Portfolio/UI%20UX/fashionista/fashionista_11.png'
    ]
  },
  {
    id: 'friendship',
    title: 'Simple Friendship Tribute Site',
    tagline: 'Heartfelt Digital Memorial',
    shortDescription: 'Emotional tribute website celebrating friendship bonds',
    fullDescription: 'A heartfelt digital tribute website designed to celebrate and commemorate meaningful friendships. The design focuses on emotional storytelling through visual elements.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773645/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute1.png',
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    role: ['Web Development', 'UI Design', 'Content Strategy'],
    process: [
      { step: 'Research', description: 'Emotional design principles and memorial site analysis' },
      { step: 'Wireframe', description: 'Story flow and content presentation structure' },
      { step: 'Prototype', description: 'Interactive memory sharing features' },
      { step: 'Test', description: 'Emotional impact assessment and user feedback' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773645/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773647/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773648/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773650/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773651/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute5.png'
    ]
  },
  {
    id: 'soulcouture',
    title: 'Soul Couture Online Shopping UI',
    tagline: 'Luxury E-commerce Experience',
    shortDescription: 'Premium online shopping platform for luxury fashion',
    fullDescription: 'An elegant e-commerce platform designed for Soul Couture, focusing on luxury fashion retail. The interface combines sophisticated aesthetics with intuitive shopping functionality.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773652/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_1.png',
    category: 'E-commerce',
    tools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision'],
    role: ['UI Design', 'E-commerce UX', 'Luxury Brand Strategy'],
    process: [
      { step: 'Research', description: 'Luxury shopping behavior and premium brand analysis' },
      { step: 'Wireframe', description: 'Premium shopping journey and product discovery flows' },
      { step: 'Prototype', description: 'High-end visual design and luxury interactions' },
      { step: 'Test', description: 'Luxury market user testing and conversion optimization' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773652/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773653/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773654/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773655/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773656/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773663/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773665/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_7.png'
    ]
  }
]

// Get unique categories
const categories = Array.from(new Set(projects.map(p => p.category)))

// Helper to get URL-friendly project name
const getProjectUrl = (title: string): string => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') + '.com'
}

// Phone Mockup Component
const PhoneMockup: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <div className={`relative bg-neutral-800 rounded-[2.5rem] p-2 shadow-2xl border-4 border-neutral-700 ${className}`}>
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10"></div>
    <div className="w-full bg-black rounded-[2rem] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
  </div>
)

// Browser Mockup Component
const BrowserMockup: React.FC<{ src: string; alt: string; url: string; className?: string }> = ({ src, alt, url, className = '' }) => (
  <div className={`relative bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-800/50 ${className}`}>
    <div className="bg-neutral-800 px-4 py-3 flex items-center gap-3">
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 bg-neutral-900 rounded-md px-3 py-1.5">
        <span className="text-xs text-neutral-500 font-mono">{url}</span>
      </div>
    </div>
    <div className="relative">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  </div>
)

const UIUXPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Filter projects based on category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  // Get current images for selected project
  const getCurrentImages = useCallback(() => {
    if (!selectedProject) return []
    if (selectedProject.screenshotGroups && selectedProject.screenshotGroups.length > 0) {
      return selectedProject.screenshotGroups[activeGroupIndex].images
    }
    return selectedProject.screenshots
  }, [selectedProject, activeGroupIndex])

  const currentImages = getCurrentImages()

  // Navigation
  const nextImage = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 1) % currentImages.length)
  }, [currentImages.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex(prev => (prev - 1 + currentImages.length) % currentImages.length)
  }, [currentImages.length])

  // Auto-play
  useEffect(() => {
    if (!selectedProject || !isAutoPlaying) return
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [selectedProject, isAutoPlaying, nextImage])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedProject) return
      if (e.key === 'Escape') setSelectedProject(null)
      if (e.key === 'ArrowRight') { nextImage(); setIsAutoPlaying(false) }
      if (e.key === 'ArrowLeft') { prevImage(); setIsAutoPlaying(false) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedProject, nextImage, prevImage])

  // Reset states when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
    setActiveGroupIndex(0)
    setIsAutoPlaying(true)
  }, [selectedProject])

  // Reset image index when group changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeGroupIndex])

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,116,139,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(148,163,184,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-slate-300 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-slate-500/10 border border-slate-500/20 rounded-full text-slate-400 text-sm font-medium mb-3 font-mono">
                UI/UX DESIGN
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100">
                User{' '}
                <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Crafting intuitive interfaces and delightful user experiences through research-driven design.
              Explore {projects.length} UI/UX projects across mobile apps, web platforms, and dashboards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Layers size={20} className="text-slate-400" />
            <span className="text-neutral-400 font-medium">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-slate-500 to-slate-600 text-white shadow-lg shadow-slate-500/20'
                  : 'bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700/50'
              }`}
            >
              All ({projects.length})
            </button>
            {categories.map((category) => {
              const count = projects.filter(p => p.category === category).length
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-slate-500 to-slate-600 text-white shadow-lg shadow-slate-500/20'
                      : 'bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700/50'
                  }`}
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const isMobile = isMobileApp(project.category)
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-full p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-slate-500/30 transition-all duration-300">
                    {/* Thumbnail with Mockup */}
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-neutral-800/30 flex items-center justify-center p-3">
                      {isMobile ? (
                        <div className="relative bg-neutral-800 rounded-[1.5rem] p-1 shadow-xl border-2 border-neutral-700 h-full aspect-[9/19]">
                          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full z-10"></div>
                          <div className="w-full h-full bg-black rounded-[1.2rem] overflow-hidden">
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative bg-neutral-900 rounded-lg overflow-hidden shadow-xl w-full h-full border border-neutral-800/50">
                          <div className="bg-neutral-800 px-2 py-1.5 flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 bg-neutral-900 rounded px-2 py-0.5">
                              <span className="text-[8px] text-neutral-500 font-mono truncate">{getProjectUrl(project.title)}</span>
                            </div>
                          </div>
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-[calc(100%-24px)] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent pointer-events-none"></div>

                      {/* Category Badge */}
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-slate-600/90 text-white text-[10px] font-medium rounded-full">
                        {isMobile ? <Smartphone size={10} /> : <Monitor size={10} />}
                        {project.category}
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-display font-bold text-neutral-100 mb-1 group-hover:text-slate-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mb-3">{project.tagline}</p>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded text-xs text-neutral-400">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-1 bg-neutral-800/50 text-neutral-500 rounded text-xs">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-neutral-100 mb-8 text-center">Design Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Research', desc: 'User interviews, competitive analysis, personas' },
              { step: '02', title: 'Ideation', desc: 'Wireframes, user flows, information architecture' },
              { step: '03', title: 'Design', desc: 'Visual design, prototyping, design systems' },
              { step: '04', title: 'Test', desc: 'Usability testing, iteration, validation' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-xl hover:border-slate-500/30 transition-all"
              >
                <div className="text-4xl font-display font-bold text-slate-500/20 mb-2">{phase.step}</div>
                <h3 className="text-xl font-bold text-neutral-100 mb-2">{phase.title}</h3>
                <p className="text-sm text-neutral-400">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-neutral-100 mb-6">
              Need a designer for your project?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's create user experiences that your customers will love.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-500 to-slate-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-300 hover:scale-105"
            >
              Start a Project
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto px-4 py-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-6 right-6 p-3 bg-neutral-800/80 backdrop-blur-sm rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700/80 transition-all z-50"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-slate-300 transition-colors mb-6"
                >
                  <ArrowLeft size={18} />
                  Back to Projects
                </button>

                <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-xl text-slate-400 mb-4">{selectedProject.tagline}</p>
                <p className="text-neutral-400 max-w-3xl">{selectedProject.fullDescription}</p>
              </motion.div>

              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-xl">
                  <h4 className="text-sm text-neutral-500 mb-2">Category</h4>
                  <p className="text-neutral-200 font-medium">{selectedProject.category}</p>
                </div>
                <div className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-xl">
                  <h4 className="text-sm text-neutral-500 mb-2">Role</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.role.map((role, i) => (
                      <span key={i} className="text-neutral-200 text-sm">{role}{i < selectedProject.role.length - 1 ? ',' : ''}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-xl">
                  <h4 className="text-sm text-neutral-500 mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-500/10 text-slate-400 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Screenshot Groups Tabs */}
              {selectedProject.screenshotGroups && selectedProject.screenshotGroups.length > 0 && (
                <div className="flex justify-center gap-3 mb-6">
                  {selectedProject.screenshotGroups.map((group, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setActiveGroupIndex(idx); setIsAutoPlaying(false) }}
                      className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                        activeGroupIndex === idx
                          ? 'bg-slate-500 text-white'
                          : 'bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-700/50'
                      }`}
                    >
                      {group.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Mockup Gallery */}
              <div className="mb-8">
                <div className="relative flex items-center justify-center">
                  {/* Navigation */}
                  <button
                    onClick={() => { prevImage(); setIsAutoPlaying(false) }}
                    className="absolute left-0 md:left-4 z-10 p-3 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white hover:bg-neutral-700 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Mockup Display */}
                  <div className="max-w-4xl w-full mx-12">
                    {isMobileApp(selectedProject.category) ? (
                      <PhoneMockup
                        src={currentImages[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        className="max-w-[280px] mx-auto"
                      />
                    ) : (
                      <BrowserMockup
                        src={currentImages[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        url={getProjectUrl(selectedProject.title)}
                      />
                    )}
                  </div>

                  <button
                    onClick={() => { nextImage(); setIsAutoPlaying(false) }}
                    className="absolute right-0 md:right-4 z-10 p-3 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white hover:bg-neutral-700 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isAutoPlaying
                        ? 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                        : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50'
                    }`}
                  >
                    {isAutoPlaying ? 'Pause' : 'Auto-play'}
                  </button>
                  <span className="text-neutral-500 text-sm">
                    {currentImageIndex + 1} / {currentImages.length}
                  </span>
                </div>

                {/* Thumbnails */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {currentImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setCurrentImageIndex(idx); setIsAutoPlaying(false) }}
                      className={`relative overflow-hidden rounded-lg transition-all ${
                        currentImageIndex === idx
                          ? 'ring-2 ring-slate-400 ring-offset-2 ring-offset-neutral-950'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      {isMobileApp(selectedProject.category) ? (
                        <div className="w-10 h-20 bg-neutral-800 rounded p-0.5">
                          <img src={img} alt="" className="w-full h-full object-cover object-top rounded" />
                        </div>
                      ) : (
                        <div className="w-20 h-14 bg-neutral-800 rounded overflow-hidden">
                          <div className="bg-neutral-700 h-2 flex items-center px-1 gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-red-500"></div>
                            <div className="w-1 h-1 rounded-full bg-yellow-500"></div>
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                          </div>
                          <img src={img} alt="" className="w-full h-[calc(100%-8px)] object-cover object-top" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Design Process</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {selectedProject.process.map((step, index) => (
                    <div key={index} className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center font-bold text-sm mb-3">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-white mb-1">{step.step}</h4>
                      <p className="text-sm text-neutral-400">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UIUXPortfolio

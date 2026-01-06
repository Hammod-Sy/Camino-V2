# Camino - Slow Travel Platform

A React frontend application for planning and booking sustainable train travel across Europe.

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **React Router** for navigation
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **TanStack Query** for data fetching
- **Zod** + **React Hook Form** for form validation
- **Leaflet** + **OpenStreetMap** for maps
- **MSW** (Mock Service Worker) for API mocking
- **ESLint** + **Prettier** for code quality

## Project Structure

```
Camino/
├── frontend/          # React application
│   ├── src/
│   │   ├── api/      # API client and HTTP utilities
│   │   ├── components/  # React components
│   │   │   ├── home/    # Home page sections
│   │   │   └── trip/    # Trip detail components
│   │   ├── hooks/    # Custom React hooks
│   │   ├── lib/      # Utility functions
│   │   ├── mocks/    # MSW handlers and mock data
│   │   ├── pages/    # Page components
│   │   └── types/    # TypeScript type definitions
│   └── public/       # Static assets
└── backend/          # API documentation (no server code)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with MSW
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

### Pages & Routes

- **Home** (`/`) - Hero, collections, trips, reviews, FAQs
- **Collections** (`/collections`, `/collections/:slug`) - Browse trip collections
- **Destinations** (`/destinations`, `/destinations/:slug`) - Explore destinations with mega menu
- **Trip Detail** (`/trip/:slug`) - Full trip page with filters, map, timeline, itinerary
- **Create Trip** (`/create`) - Multi-step wizard for custom trips
- **Journal** (`/journal`, `/journal/:slug`) - Travel articles and stories
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form
- **FAQs** (`/faqs`) - Frequently asked questions
- **Account** (`/account`, `/account/login`, `/account/signup`) - User account pages
- **Legal** (`/privacy`, `/terms`, `/cookies`, `/accessibility`) - Legal pages

### Key Components

- **Header** - Sticky navigation with destinations mega menu
- **Hero Section** - Large hero with "Create a trip" CTA
- **Collections Grid** - Featured collections with gradient overlays
- **Trip Cards** - Reusable trip cards with orange CTA buttons
- **Photo Mosaic** - Trip gallery with modal view
- **Route Map** - Leaflet map with markers and route polyline
- **Timeline Sidebar** - Trip overview with stop details
- **FAQ Accordions** - Expandable FAQ sections

## Design System

### Colors
- **Camino Orange**: `#FF6B35` - Primary CTA color
- **Background**: `#FAF7F0` - Warm off-white
- **Charcoal**: `#2C2C2C` - Text color

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- **Cards**: 24-28px border radius, soft shadows, hover lift
- **Buttons**: Rounded, orange primary, outline secondary
- **Spacing**: Generous whitespace, 4-8px grid system

## API Mocking

The app uses MSW (Mock Service Worker) to mock all API calls in development. Mock data includes:

- 12 collections
- 30 trips
- 25 destinations
- 20 journal articles
- 40 FAQs
- 25 reviews

All endpoints are defined in `/frontend/src/mocks/handlers.ts` and follow the same contract as the future backend API.

## Connecting to Real Backend

When ready to connect to a real Node.js backend:

1. Update `VITE_API_BASE_URL` in `.env` to your backend URL
2. Ensure backend endpoints match the contract in `/backend/README.md`
3. MSW is automatically disabled in production builds
4. The frontend API client will use the real backend URL

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

## License

Private project - All rights reserved


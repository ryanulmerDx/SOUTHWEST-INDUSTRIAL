# Southwest Industrial - React Website

A modern, professional React website for Southwest Industrial, featuring multiple pages and full navigation.

## Features

- **Home** - Hero section, product overview, about snippet, and contact
- **Products** - Detailed product catalog with categories and sourcing info
- **Services** - Service offerings, process flow, and industries served
- **About** - Company history, mission, values, team, and timeline
- **Contact** - Contact information, interactive form, map, and location details

## Tech Stack

- React 18
- React Router 6
- CSS Variables for theming
- Responsive design (mobile-first)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd southwest-industrial
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

```
southwest-industrial/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Colors

Edit CSS variables in `App.css`:

```css
:root {
  --brand: #8b2f2a;        /* Primary brand color */
  --brandSoft: rgba(139,47,42,.10);
  --brandLine: rgba(139,47,42,.20);
  /* ... other colors */
}
```

### Content

Each page is a separate component in `src/pages/`. Edit these files to update content.

### Contact Form

The contact form in `Contact.js` currently logs to console. To make it functional:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function to POST to your endpoint
3. Or integrate with services like Formspree, EmailJS, or Netlify Forms

## Navigation

The site uses React Router for client-side routing. All navigation links automatically update to show the active page.

## Mobile Responsive

The site is fully responsive with breakpoints at:
- 980px (tablets)
- 560px (mobile)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Southwest Industrial. All rights reserved.
# SOUTHWEST-INDUSTRIAL

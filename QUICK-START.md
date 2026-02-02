# 🚀 Quick Start Guide - Southwest Industrial Website

## What You Got

A complete, modern React website with 5 pages:
- **Home** - Your original design, converted to React
- **Products** - Full product catalog with categories
- **Services** - Service offerings and process
- **About** - Company story, team, timeline
- **Contact** - Contact form, map, and info

## How to Run It

### Option 1: If you have Node.js installed

1. **Open Terminal/Command Prompt** in the project folder
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the dev server:**
   ```bash
   npm start
   ```
4. **Open browser** to http://localhost:3000

### Option 2: If you DON'T have Node.js

1. **Download Node.js** from https://nodejs.org
2. **Install it** (choose the LTS version)
3. **Then follow Option 1 above**

## File Structure

```
southwest-industrial/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.js       # Navigation header
│   │   └── Footer.js       # Site footer
│   ├── pages/              # Page components
│   │   ├── Home.js         # Homepage
│   │   ├── Products.js     # Products page
│   │   ├── Services.js     # Services page
│   │   ├── About.js        # About page
│   │   └── Contact.js      # Contact page
│   ├── App.js              # Main app & routing
│   ├── App.css             # All styles
│   └── index.js            # Entry point
├── public/
│   └── index.html          # HTML template
└── package.json            # Dependencies
```

## Making Changes

### Edit Content
- Each page is in `src/pages/`
- Just open the file and edit the text/content
- Save and the page auto-refreshes!

### Change Colors
Open `src/App.css` and edit these at the top:
```css
:root {
  --brand: #8b2f2a;  /* Your brand color */
  /* Change other colors here */
}
```

### Add/Remove Pages
1. Create a new page in `src/pages/`
2. Add the route in `src/App.js`
3. Add navigation link in `src/components/Header.js`

## Contact Form Setup

The form currently just shows a success message. To make it actually work:

**Option A - Use Formspree (easiest):**
1. Go to https://formspree.io
2. Create a free account
3. Get your form endpoint
4. Update the form in `Contact.js`

**Option B - Use your own backend:**
- Update `handleSubmit` in `Contact.js` to POST to your API

## Deploy It Live

### Netlify (Recommended - FREE)
1. Go to https://netlify.com
2. Drag the `build/` folder (after running `npm run build`)
3. Done! Your site is live

### Vercel
1. Go to https://vercel.com
2. Import the project from GitHub
3. Auto-deploys on every push

## Need Help?

- **React Docs:** https://react.dev
- **React Router:** https://reactrouter.com
- **Stack Overflow** for specific questions

## Pro Tips

✅ Run `npm run build` to create production files
✅ All images are currently from imgur - replace with your own
✅ The contact form needs a backend to actually send emails
✅ Site is fully mobile responsive
✅ Works in all modern browsers

---

**Ready to launch?** Just run `npm install` then `npm start` and you're good to go! 🎉

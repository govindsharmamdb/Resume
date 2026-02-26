# Front-End Engineer Portfolio (2026 Style)

A responsive, modern portfolio website built with **HTML, CSS, and JavaScript**.

## Folder Structure

```text
Resume/
├── index.html      # SEO-friendly structure and all content sections
├── style.css       # Theme system, layout, animations, responsive styles
├── script.js       # Theme toggle, filters, reveal animations, form validation
└── README.md       # Project documentation and deployment instructions
```

## External Libraries Used (CDN)

- **Google Fonts**: Outfit + Space Grotesk  
  https://fonts.google.com/
- **Font Awesome 6.5.2** (icons for social and tech stack)  
  https://cdnjs.com/libraries/font-awesome

## Features Implemented

- Dark/Light mode toggle with localStorage persistence
- Sticky navigation + smooth scrolling
- Animated hero introduction and micro-interactions
- Glassmorphism cards and gradient accents
- About section with skill badges + animated progress bars
- Filterable project cards by tags
- Tech Stack section with icons
- Blog/Thoughts preview section
- Contact form with client-side validation
- Mobile-first responsive behavior

## Accessibility Best Practices Included

- Semantic HTML sections (`header`, `nav`, `main`, `section`, `footer`)
- Skip link for keyboard users
- `aria-label` and `aria-live` usage where relevant
- Focus-visible styles for keyboard navigation
- Reduced motion support via `prefers-reduced-motion`
- Sufficient text contrast and readable typography scale

## Deployment Instructions

### Option 1: Netlify (Drag-and-Drop)
1. Zip the project folder contents (`index.html`, `style.css`, `script.js`, `README.md`).
2. Open Netlify dashboard.
3. Use **Add new site → Deploy manually**.
4. Drag and drop the zip/folder.

### Option 2: GitHub Pages
1. Push files to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to branch (`main`) and root (`/`).
4. Save and wait for deployment URL.

### Option 3: Vercel
1. Import GitHub repository in Vercel.
2. Keep default settings for static site.
3. Deploy.

## Local Development

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

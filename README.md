# ☕ Brewed Awakening Café — Landing Page

A modern, fully responsive café landing page built with pure HTML, CSS, and vanilla JavaScript. This is a portfolio project demonstrating real-world frontend development skills — no frameworks, no libraries, just clean code.

**🔗 Live Demo:** [https://brewed-awakening-01.vercel.app/]

---

## 📸 Preview

![Brewed Awakening Café Landing Page](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80)

---

## 🚀 Features

- **Fully Responsive** — Mobile-first design, works on all screen sizes
- **Mobile Navigation** — Animated hamburger menu with smooth open/close
- **Sticky Header** — Navbar with scroll-triggered shadow effect
- **Menu Filter** — Filter café items by category (Indian, International, Drinks, Food)
- **Scroll Reveal Animations** — Elements animate in as you scroll using IntersectionObserver
- **Form Validation** — Reservation form with real-time client-side validation
- **WhatsApp Integration** — Direct WhatsApp CTA button for mobile users
- **Google Maps Embed** — Live location map in the Find Us section
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigable, screen reader friendly
- **Performance Optimised** — Lazy-loaded images, passive scroll listeners, minimal JS

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and markup |
| CSS3 | Styling, layout, animations, responsive design |
| Vanilla JavaScript | Interactivity — no frameworks |
| Google Fonts | Playfair Display + Inter typography |
| Unsplash | High-quality free images |
| CSS Custom Properties | Design token system (colors, spacing, typography) |
| IntersectionObserver API | Scroll-reveal animations |
| CSS Grid & Flexbox | Layout system |

---

## 📁 Project Structure

```
brewed-awakening/
│
├── index.html          ← Full page markup (semantic HTML5)
│
├── css/
│   └── style.css       ← All styles (variables, layout, components, responsive)
│
├── js/
│   └── script.js       ← All interactivity (nav, filter, animations, form)
│
├── README.md           ← You are here
├── robots.txt          ← Search engine crawl rules
└── sitemap.xml         ← SEO sitemap
```

---

## 📄 Page Sections

1. **Navigation** — Sticky header with desktop nav and mobile hamburger menu
2. **Hero** — Full-viewport background image with CTA buttons and trust badges
3. **About** — Brand story with stats (5+ years, 40K+ customers, 100% local beans)
4. **Menu** — 10 items with category filter tabs (Indian Classics + International)
5. **Why Choose Us** — 6 benefit cards with hover effects
6. **Gallery** — CSS Grid masonry-style photo gallery
7. **Testimonials** — 4 customer reviews with avatar photos
8. **Location & Hours** — Address, hours, Google Maps embed, WhatsApp CTA
9. **Reservation Form** — Validated booking form with success state
10. **Footer** — Links, contact info, social media

---

## 🍽️ Menu Highlights

### Indian Classics
- Filter Kaapi — ₹80
- Masala Chai — ₹70
- Bun Maska — ₹90
- Rava Idli — ₹110
- Kari Puff — ₹95

### International
- Cappuccino — ₹180
- Cold Brew — ₹200
- Butter Croissant — ₹150
- Avocado Toast — ₹260
- Blueberry Cheesecake — ₹220

---

## 🧠 JavaScript Features Explained

```javascript
// 1. Mobile navigation toggle
// Toggles aria-expanded and .is-open class on the mobile menu

// 2. Sticky header shadow
// Adds .scrolled class to header when window.scrollY > 20px

// 3. Menu filter tabs
// Reads data-category attribute on each card, toggles .hidden class

// 4. Scroll reveal (IntersectionObserver)
// Observes elements with [data-animate], adds .is-visible on viewport entry

// 5. Form validation
// Validates name, phone, date (not past), time, guests before submit
// Shows inline errors, scrolls to first error, shows success on valid submit
```

---

## 🎨 Design System

### Color Palette
```css
--color-primary:     #6F4E37   /* Rich coffee brown */
--color-secondary:   #C8956C   /* Warm caramel */
--color-accent:      #E8C49A   /* Soft latte cream */
--color-bg:          #FAF6F1   /* Warm off-white */
--color-text:        #2C1A0E   /* Deep espresso */
```

### Typography
```css
--font-heading: 'Playfair Display', serif;   /* Elegant, artisan feel */
--font-body:    'Inter', sans-serif;          /* Clean, highly readable */
```

---

## ⚡ Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/brewed-awakening.git

# Navigate into the folder
cd brewed-awakening

# Open in browser (no build step needed)
open index.html
```

Or simply download the files and double-click `index.html`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| Default | Mobile (< 480px) |
| 480px+ | Large phones |
| 640px+ | Small tablets — mobile CTA bar appears |
| 768px+ | Tablets — desktop nav, 2-column layouts |
| 1024px+ | Desktops — full layout, larger spacing |

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on all interactive elements
- `aria-expanded` and `aria-hidden` on mobile menu
- `role="list"` on all `<ul>` elements (Safari fix)
- `role="alert"` and `aria-live="polite"` on form error messages
- `:focus-visible` styles for keyboard navigation
- `@media (prefers-reduced-motion: reduce)` — all animations respect user preference
- `loading="lazy"` on all below-fold images
- Alt text on every image

---

## 🌐 Deployment

This site is deployed on **Vercel** with automatic deployments on every push to `main`.

Also available on **GitHub Pages** at:
`https://YOUR-USERNAME.github.io/brewed-awakening`

---

## 📚 What I Learned Building This

- CSS Custom Properties (design tokens) for consistent theming
- CSS Grid for complex gallery layouts
- IntersectionObserver API for performant scroll animations
- Accessible ARIA attributes for navigation components
- Mobile-first responsive design workflow
- Client-side form validation without libraries
- Semantic HTML for SEO and accessibility
- Git workflow for version control and deployment

---

## 📝 License

This is a portfolio/demo project. The business "Brewed Awakening Café" is fictional. Images are from [Unsplash](https://unsplash.com) (free for commercial use).

---

## 👤 Author

 SAINATH S
- GitHub: [https://github.com/SAINATH-18](https://github.com/your-username)
- LinkedIn: [https://www.linkedin.com/in/sainath-s-04b0ab384?utm_source=share_via&utm_content=profile&utm_medium=member_android](https://linkedin.com/in/your-profile)

---

*Built as Project #1 in my frontend development portfolio journey* ☕

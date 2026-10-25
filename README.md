# PulseX – Responsive Product Landing Page

Week 02 Minor Project (Web Development): a fully responsive landing page for **PulseX**, a fictional smartwatch, built with **Tailwind CSS**, **CSS3**, **Flexbox** and **CSS Grid**.


## Sections
1. **Navigation bar** – logo, links, "Buy Now" button, hamburger menu on mobile
2. **Hero** – title, description, product illustration (inline SVG), CTA buttons
3. **Features** – 6 feature cards in a responsive CSS Grid
4. **Benefits** – Flexbox two-column layout with selling points and key specs
5. **Testimonials** – 3 customer reviews (sample content)
6. **Pricing / CTA** – 3 pricing tiers plus a final call-to-action banner
7. **Footer** – contact details, quick links, social links, copyright

## Concepts Used
| Concept | Where |
|---|---|
| Tailwind CSS (CDN) | Utility classes throughout `index.html`, custom brand colours via `tailwind.config` |
| CSS3 | Gradients, `backdrop-filter`, transitions, keyframe animation, pseudo-elements (`style.css`) |
| Flexbox | Navbar, benefits section, list items, footer icons |
| CSS Grid | Features, testimonials, pricing, footer columns |
| Responsive design | Mobile-first breakpoints (`sm`, `md`, `lg`), tested on mobile, tablet and desktop |
| Accessibility | Semantic HTML, `aria-label`s, reduced-motion support |

## Project Structure
```
├── index.html   # Page markup + Tailwind classes
├── style.css    # Custom CSS3 (gradients, animations, components)
├── script.js    # Mobile menu toggle + dynamic year
└── README.md
```

## Notes
- PulseX is a fictional product; the testimonials, prices and contact details are placeholders.
- Tailwind is loaded through the CDN to keep the project simple. For production, use the Tailwind CLI.

## Author
Arundhati Mukhopadhyay

# Mine Sense - IoT Smart Safety Helmet

A professional React website for **MineSense** - Industrial IoT Smart Helmet for Real-Time Miner Safety & Monitoring.

🔗 **GitHub Repository:** https://github.com/Kiruthikak-01/MineSense---Smart-Helmet-for-Miners-

## Overview

MineSense is an advanced IoT-based smart safety helmet that monitors environmental conditions and miner health in real-time, providing instant alerts to prevent accidents before they become tragedies. This repository contains the professional portfolio website and project showcase.

## Features

✨ **Animated Components** using Framer Motion

- Smooth page transitions and scroll animations
- Interactive text animations
- Hover effects and micro-interactions
- Staggered animations for grid items

🎨 **Beautiful UI**

- Dark theme with cyan/purple gradients
- Glassmorphism effects
- Responsive design with Tailwind CSS
- Custom animated text effects

📷 **Gallery Component**

- Ready for 3 photos + 1 video
- Lightbox preview with animations
- Placeholder support for adding media later
- Smooth hover effects and transitions

## Installation

1. Install Node.js from https://nodejs.org/

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm build
   ```

## Adding Your Photos & Video

### Option 1: Update Gallery Component

Edit `src/components/Gallery.jsx` and modify the gallery items:

```jsx
const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "path/to/your/photo1.jpg", // Add your image URL
    alt: "Your Title",
    title: "Your Description",
  },
  {
    id: 2,
    type: "image",
    src: "path/to/your/photo2.jpg",
    alt: "Your Title",
    title: "Your Description",
  },
  {
    id: 3,
    type: "image",
    src: "path/to/your/photo3.jpg",
    alt: "Your Title",
    title: "Your Description",
  },
  {
    id: 4,
    type: "video",
    src: "path/to/your/video.mp4", // Add your video URL
    alt: "Your Video Title",
    title: "Your Video Description",
    thumbnail: "path/to/video/thumbnail.jpg", // Optional thumbnail
  },
];
```

### Option 2: Add Images to Public Folder

1. Create `public/images/` folder
2. Place your photos in `public/images/photo1.jpg`, etc.
3. Reference them as:
   ```
   src="/images/photo1.jpg"
   ```

## Project Structure

```
src/
├── components/
│   ├── AnimatedText.jsx        # Word-by-word text animation
│   ├── AnimatedSection.jsx     # Scroll-triggered animations
│   ├── Hero.jsx                # Hero section with animations
│   └── Gallery.jsx             # Gallery with lightbox
├── App.jsx                     # Main application
├── App.css                     # Global styles
├── index.jsx                   # React entry
└── index.css                   # Tailwind CSS
```

## 7 Modules Structure

1. **Challenge** - Mining industry problems
2. **Innovation** - Mine Sense features (8 sensors)
3. **Architecture** - System technical design
4. **How It Works** - IoT pipeline (5 layers)
5. **Results** - Achievements & metrics
6. **Gallery** - Project photos & video (YOUR MEDIA HERE)
7. **Connect** - Contact form & information

## Customization

### Animation Speed

Edit Framer Motion `transition` values in components:

```jsx
transition={{ duration: 0.5 }}  // Adjust duration
```

### Colors

Modify Tailwind classes:

- Cyan: `from-cyan-500`, `text-cyan-400`
- Purple: `to-purple-600`, `text-purple-500`

### Text Content

Update text directly in `App.jsx` component sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using Framer Motion
- Lazy loading with Intersection Observer
- CSS Grid for responsive layouts
- Tailwind CSS for minimal bundle size

## Future Enhancements

- Cloud dashboard integration
- AI-based prediction
- Helmet-to-helmet mesh networking
- Advanced analytics
- Battery optimization features

---

**Questions?** Send your 3 photos and video when ready, and update the gallery configuration!

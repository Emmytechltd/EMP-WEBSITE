# EMP 2015 Set Alumni Website

A modern, elegant, and fully responsive alumni website for the 2015 Set of the Educational Management and Policy (EMP) Department, Umunze Branch, Nnamdi Azikiwe University Awka.

## Overview

This website is designed to connect alumni members, celebrate achievements, and foster lifelong bonds within the EMP 2015 set community. It features a clean, professional interface with smooth animations, a modern color palette, and comprehensive functionality.

## Features

### ✨ Core Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI**: Academic-themed color palette (Navy Blue, Gold, White)
- **Smooth Animations**: Subtle transitions and effects throughout
- **Fast Loading**: Optimized performance for quick page loads
- **SEO Friendly**: Proper semantic HTML and meta tags
- **Accessible**: WCAG compliant with proper contrast ratios

### 📄 Pages Included

1. **Home Page** (`index.html`)
   - Hero banner with set name and mission statement
   - Call-to-action buttons
   - Quick statistics section
   - Social media links
   - About preview section

2. **About Us Page** (`about.html`)
   - History of the 2015 EMP Set
   - Vision, mission, and objectives
   - Core values section
   - Department information
   - Group photos placeholder

3. **Gallery Page** (`gallery.html`)
   - Dynamic, responsive photo gallery
   - Lightbox image viewer with navigation
   - Filterable albums:
     - Matriculation
     - Lectures & Class Activities
     - Final Year Moments
     - Graduation Day
     - Reunion Photos
   - Smooth animations on gallery items

4. **Members Page** (`members.html`)
   - Profile cards for class members
   - Member names and current roles
   - Social media links (LinkedIn, WhatsApp)
   - Member testimonials
   - Optional contact information

5. **Contact Page** (`contact.html`)
   - Contact form with validation
   - Executive member contact information
   - WhatsApp and email links
   - FAQ section
   - Social media icons
   - Multiple contact methods

6. **Footer** (All pages)
   - Alumni association details
   - Social media icons
   - Copyright information
   - Quick links

## Project Structure

```
EMP/
├── index.html              # Home page
├── about.html              # About Us page
├── gallery.html            # Photo Gallery
├── members.html            # Alumni Members
├── contact.html            # Contact & Contact Form
├── css/
│   └── styles.css          # Main stylesheet (2000+ lines)
├── js/
│   └── script.js           # JavaScript functionality
└── assets/
    └── images/
        └── gallery/        # Placeholder for gallery images
```

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and Grid/Flexbox
- **Vanilla JavaScript**: No dependencies required
- **Responsive Design**: Mobile-first approach

## Color Palette

```
Primary Blue:     #1a3d5c (Navy Blue)
Secondary Blue:   #2c5aa0 (Lighter Blue)
Accent Gold:      #d4af37 (Gold)
Light Gold:       #f4e4c1 (Cream)
Text Dark:        #2c3e50 (Dark Gray)
Text Light:       #ecf0f1 (Light Gray)
White:            #ffffff
Gray Light:       #f8f9fa (Background)
```

## Getting Started

### 1. Installation
Simply extract the files to a folder and open `index.html` in your web browser. No installation or build process required!

### 2. Local Testing
For best results, serve the files using a local web server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Customization Guide

### Update Contact Information
Edit `contact.html` and replace:
- Email addresses
- Phone numbers
- WhatsApp links
- Physical address
- Social media links

### Update Social Media Links
Replace social media URLs in all pages:
- Facebook: `https://facebook.com/yourpage`
- Instagram: `https://instagram.com/yourprofile`
- WhatsApp: `https://wa.me/2348000000000`
- TikTok: `https://tiktok.com/@yourprofile`
- Twitter/X: `https://twitter.com/yourhandle`

### Add Gallery Images
1. Place your images in `assets/images/gallery/`
2. Open `js/script.js`
3. Update the `galleryData` array with your images:

```javascript
const galleryData = [
  { 
    id: 1, 
    title: 'Image Title',
    category: 'matriculation', // or 'classes', 'finalyear', 'graduation'
    image: 'path/to/your/image.jpg'
  },
  // Add more images...
];
```

### Update Member Information
1. Open `members.html`
2. Modify member cards:
   - Replace names
   - Update current roles and positions
   - Change locations
   - Update social media links

### Customize Colors
Edit CSS variables in `css/styles.css` (lines 6-17):

```css
:root {
  --primary-blue: #1a3d5c;
  --secondary-blue: #2c5aa0;
  --accent-gold: #d4af37;
  /* ... other colors ... */
}
```

### Update Department/University Info
Search for "EMP 2015 Set" or "Nnamdi Azikiwe University" in all HTML files and replace with your specific details.

### Add Real Images
Replace placeholder emoji images:
1. Update `about.html` - about section image
2. Update gallery items with real photos
3. Update member profile pictures

## Features Breakdown

### Gallery Lightbox
- Click any gallery image to open the lightbox
- Navigate with Previous/Next buttons
- Use arrow keys (← →) for navigation
- Press Escape to close
- Click background to close

### Responsive Breakpoints
- **Desktop**: 1200px and above (full layout)
- **Tablet**: 768px - 1199px (two-column layouts)
- **Mobile**: Below 768px (single column, optimized touch targets)

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Real-time feedback
- Success/error messages

### Mobile Menu
- Hamburger menu for screens below 768px
- Smooth toggle animation
- Auto-closes when a link is clicked

### Scroll Animations
- Fade-in effects for cards
- Smooth scrolling navigation
- Scroll-to-top button appears after 300px

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress gallery images before uploading
   - Use WebP format where possible
   - Keep image sizes under 500KB each
   - Use tools like TinyPNG or ImageOptim

2. **Lazy Loading**: Consider adding lazy loading for gallery images
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

3. **Caching**: Use browser caching headers on your server

## SEO Optimization

- ✅ Meta descriptions on all pages
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Mobile-responsive design
- ✅ Fast page load times
- ✅ Social media sharing metadata (can be added)

## Accessibility Features

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Proper color contrast (WCAG AA)
- ✅ Keyboard navigation support
- ✅ Focus indicators on interactive elements
- ✅ Screen reader friendly

## Adding More Features

### Blog Section
1. Create `blog.html`
2. Add blog post structure with date, author, content
3. Add link in navigation

### Events Calendar
1. Create `events.html`
2. Display upcoming reunions and events
3. Add event registration links

### Alumni Directory PDF
1. Create PDF with alumni contact information
2. Add download link on members page
3. Link in navigation menu

### Email Newsletter
1. Integrate with email service (Mailchimp, etc.)
2. Add signup form
3. Add link in footer

## Troubleshooting

### Gallery not showing images
- Check file paths in `js/script.js`
- Ensure images are in correct folder
- Check browser console for errors

### Form not working
- Ensure JavaScript is enabled
- Check console for errors
- Verify input IDs match in HTML

### Styles not loading
- Verify `css/styles.css` path is correct
- Check file permissions
- Clear browser cache

### Mobile menu not working
- Enable JavaScript
- Check viewport meta tag is present
- Test on actual mobile device

## Future Enhancement Ideas

- [ ] Add image upload functionality
- [ ] Integrate with Google Calendar for events
- [ ] Add alumni job board
- [ ] Newsletter subscription system
- [ ] Alumni profile edit feature
- [ ] Online reunion video streaming
- [ ] Alumni achievements showcase
- [ ] Donation/contribution system
- [ ] Dark mode theme
- [ ] Multi-language support

## Credits

Designed and developed for the EMP 2015 Set Alumni Association
Nnamdi Azikiwe University, Awka - Umunze Branch

## License

This website template is provided for use by the EMP 2015 Set Alumni Association. Please maintain proper attribution and credits.

## Support & Maintenance

For website updates, bug fixes, or feature requests:
1. Contact the webmaster
2. Submit issues via email
3. Request features through the contact form

---

**Last Updated**: December 2024
**Version**: 1.0
**Status**: Production Ready

# EMP 2015 Alumni Website - Customization Guide

This guide will help you customize the website with your specific information, images, and branding.

## Quick Start Checklist

- [ ] Update all contact information
- [ ] Replace social media links
- [ ] Add gallery images
- [ ] Update member profiles
- [ ] Customize colors (optional)
- [ ] Update text content
- [ ] Add WhatsApp group link
- [ ] Test on mobile devices

---

## 1. Contact Information Update

### Email & Phone Numbers

**File**: `contact.html`

Find and replace:
- `emp2015set@email.com` → Your association email
- `chisom.okafor@email.com` → President's email
- `2348012345678` → Your WhatsApp number
- `2348012345679` → Alternative WhatsApp number

Also update in:
- Footer section (all pages)
- Contact info section on home page

### WhatsApp Links

Replace `https://wa.me/234XXXXXXXXXX` with your actual WhatsApp number:
```html
<!-- Format: +country_code + number without +-->
<a href="https://wa.me/2348012345678">Chat on WhatsApp</a>
```

### Physical Address

Update in `contact.html`:
```html
<p>
  Educational Management and Policy Department<br>
  Umunze Branch<br>
  Nnamdi Azikiwe University<br>
  Awka, Anambra State<br>
  Nigeria
</p>
```

---

## 2. Social Media Links

Update these across all pages:

### Facebook
```html
<a href="https://facebook.com/your-page-name">
```

### Instagram
```html
<a href="https://instagram.com/your-username">
```

### TikTok
```html
<a href="https://tiktok.com/@your-username">
```

### Twitter/X
```html
<a href="https://twitter.com/your-handle">
```

**Where to update**:
- Header navigation (all pages)
- Hero section (index.html)
- Footer (all pages)
- Contact section (contact.html)

---

## 3. Gallery Images Setup

### Step 1: Prepare Your Images
1. Create album folders: `matriculation/`, `classes/`, `finalyear/`, `graduation/`
2. Optimize images (recommended 500KB max per image)
3. Name them descriptively (e.g., `matriculation-01.jpg`)

### Step 2: Update Gallery Data

**File**: `js/script.js` (lines 205-228)

Replace the `galleryData` array:

```javascript
const galleryData = [
  { 
    id: 1, 
    title: 'Matriculation Photo 1',
    category: 'matriculation',
    image: 'assets/images/gallery/matriculation/photo-01.jpg'
  },
  { 
    id: 2, 
    title: 'Class Activity 1',
    category: 'classes',
    image: 'assets/images/gallery/classes/class-01.jpg'
  },
  { 
    id: 3, 
    title: 'Final Year Project',
    category: 'finalyear',
    image: 'assets/images/gallery/finalyear/project-01.jpg'
  },
  { 
    id: 4, 
    title: 'Graduation Ceremony',
    category: 'graduation',
    image: 'assets/images/gallery/graduation/ceremony-01.jpg'
  },
  // Add more images following this pattern
];
```

### Step 3: Image Categories

Valid categories:
- `matriculation` - Matriculation photos
- `classes` - Lectures and classroom activities
- `finalyear` - Final year projects and seminars
- `graduation` - Graduation ceremony photos
- `reunion` - Reunion and alumni events

---

## 4. Member Profiles Update

**File**: `members.html`

### Update Executive Members

Find each member card and update:

```html
<h3>Member Name</h3>
<p><strong>Position:</strong> Position Title</p>
<p><strong>Current Role:</strong> Job Title</p>
<p style="font-size: 0.85rem; color: #666;">Location</p>

<div class="member-socials">
  <a href="https://linkedin.com/in/profile" class="social-link">in</a>
  <a href="https://wa.me/2348012345678" class="social-link">📱</a>
</div>
```

### Add New Members

Copy a member card and paste before the closing `</div>` of `members-grid`:

```html
<div class="member-card" style="animation: fadeInUp 0.6s ease-out; animation-delay: 0.8s;">
  <div class="member-image">
    <div style="font-size: 4rem;">👨‍💼</div>
  </div>
  <div class="member-info">
    <h3>New Member Name</h3>
    <p><strong>Position:</strong> Role</p>
    <p><strong>Current Role:</strong> Job Title</p>
    <p style="font-size: 0.85rem; color: #666;">Location</p>
    <div class="member-socials">
      <a href="https://linkedin.com/in/profile" class="social-link" title="LinkedIn">in</a>
      <a href="https://wa.me/2348012345678" class="social-link" title="WhatsApp">📱</a>
    </div>
  </div>
</div>
```

---

## 5. Text Content Updates

### Home Page Content
**File**: `index.html`

Update:
- Hero subtitle
- Mission statement
- Stats numbers (currently 150+, 2015, 9+, 5+)
- About section text

### About Page Content
**File**: `about.html`

Update:
- History section
- Vision statement
- Mission statement
- Objectives list
- Core values descriptions

### General Text

Find and replace throughout all files:
- "EMP 2015 Set" → Your cohort name
- "Umunze Branch" → Your campus location
- "Nnamdi Azikiwe University" → Your university name
- "2015" → Your graduation year

---

## 6. Color Customization

**File**: `css/styles.css` (lines 6-17)

Change the CSS variables:

```css
:root {
  --primary-blue: #1a3d5c;      /* Main dark blue */
  --secondary-blue: #2c5aa0;    /* Lighter blue */
  --accent-gold: #d4af37;       /* Gold accent */
  --accent-light-gold: #f4e4c1; /* Light gold */
  --text-dark: #2c3e50;         /* Dark text */
  --text-light: #ecf0f1;        /* Light text */
  --white: #ffffff;             /* White */
  --gray-light: #f8f9fa;        /* Light gray bg */
  --gray-medium: #e0e0e0;       /* Medium gray */
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
  --transition: all 0.3s ease;
}
```

### Alternative Color Schemes

**Modern Green & Gold:**
```css
--primary-blue: #0d5c3a;     /* Dark Green */
--secondary-blue: #157b5a;   /* Medium Green */
--accent-gold: #ffa500;      /* Orange */
```

**Corporate Blue & Silver:**
```css
--primary-blue: #003d82;     /* Corporate Blue */
--secondary-blue: #0052b3;   /* Bright Blue */
--accent-gold: #c0c0c0;      /* Silver */
```

---

## 7. Add Real Images

### About Page Image
**File**: `about.html` (around line 180)

Replace placeholder:
```html
<div class="about-image">
  <div style="text-align: center;">
    <div style="font-size: 4rem; margin-bottom: 1rem;">🏫</div>
    <div style="font-size: 1.2rem;">Your Photo Here</div>
  </div>
</div>
```

With actual image:
```html
<div class="about-image">
  <img src="assets/images/department-building.jpg" alt="EMP Department Building">
</div>
```

### Member Profile Pictures
**File**: `members.html`

Replace emoji placeholders:
```html
<div class="member-image">
  <div style="font-size: 4rem;">👨‍💼</div>
</div>
```

With:
```html
<div class="member-image">
  <img src="assets/images/members/member-name.jpg" alt="Member Name">
</div>
```

---

## 8. Statistics Update

**File**: `index.html` (around line 85)

Update the Quick Stats section:

```html
<div class="stat-card">
  <div class="stat-number">150+</div>    <!-- Update this -->
  <div class="stat-label">Alumni Members</div>
</div>
```

Current defaults:
- 150+ = Alumni Members
- 2015 = Year of Graduation
- 9+ = Years Together
- 5+ = Reunion Events

---

## 9. Form Setup

### Email Notification

Currently, the contact form shows a confirmation message. To receive actual emails:

**Option 1: Use a Form Service (Recommended)**

1. Sign up at Formspree.io or EmailJS
2. Follow their integration guide
3. Update the form action/submission code

**Option 2: Use PHP (If hosting supports it)**

Create `send-email.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "emp2015set@email.com";
    $subject = "New Contact Form Submission from " . $name;
    
    mail($to, $subject, $message);
    echo json_encode(['success' => true]);
}
?>
```

---

## 10. Domain & Hosting Setup

### Upload to Web Server

1. Use FTP client (FileZilla, WinSCP) or your host's file manager
2. Upload all files maintaining folder structure
3. Ensure `index.html` is in the root directory

### Domain Setup

1. Point domain to your hosting provider
2. Add SSL certificate (HTTPS)
3. Set up redirects if needed

### Performance Tips

- Enable GZIP compression
- Set up caching headers
- Use a CDN for images
- Minify CSS/JS (optional for this simple site)

---

## 11. SEO Optimization

### Update Meta Tags

**File**: Each HTML file `<head>` section

```html
<meta name="description" content="Your unique description here (160 chars)">
<meta name="keywords" content="EMP, alumni, 2015, Awka, NAU">
<meta name="author" content="EMP 2015 Alumni Association">
```

### Add Social Share Meta Tags

```html
<meta property="og:title" content="EMP 2015 Set Alumni">
<meta property="og:description" content="Alumni website for EMP 2015 Set">
<meta property="og:image" content="URL-to-your-image">
<meta property="og:type" content="website">
```

---

## 12. Newsletter Integration

### Add Mailchimp Form

**File**: Any page where you want the form

```html
<!-- Mailchimp Integration -->
<div id="mc_embed_shell">
  <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
    #mc_embed_signup{background:#fff; false;clear:left; font:14px; }
  </style>
  <div id="mc_embed_signup">
    <form action="YOUR_MAILCHIMP_ACTION_URL" method="post" id="mc-embedded-subscribe-form">
      <!-- Mailchimp form code here -->
    </form>
  </div>
</div>
```

---

## 13. Backup & Version Control

### Backup Steps

1. Create a backup folder before making changes
2. Keep original CSS and JS files
3. Document all changes made

### Git Setup (Optional)

```bash
git init
git add .
git commit -m "Initial alumni website setup"
```

---

## 14. Testing Checklist

- [ ] All links working (internal and external)
- [ ] Mobile responsive on phones (320px+)
- [ ] Tablet layout correct (768px+)
- [ ] Desktop layout correct (1200px+)
- [ ] Gallery images loading
- [ ] Lightbox working
- [ ] Contact form validation working
- [ ] Mobile menu toggle working
- [ ] All animations smooth
- [ ] No console errors
- [ ] Social media links accessible
- [ ] Fast page load times

---

## 15. Common Issues & Solutions

### Images not showing
- Verify file paths are correct
- Check file permissions
- Ensure images are in correct folder
- Use relative paths: `assets/images/...`

### Styles look wrong
- Clear browser cache (Ctrl+F5)
- Check CSS file path
- Verify CSS file is not corrupted
- Check for conflicting styles

### Form not working
- Check form IDs match JavaScript code
- Enable JavaScript
- Check console for errors
- Verify email service is configured

### Mobile menu not opening
- Check hamburger span elements exist
- Verify JavaScript is loaded
- Test on actual mobile device
- Check viewport meta tag

---

## Support Resources

- W3C HTML Validator: https://validator.w3.org
- CSS Validator: https://jigsaw.w3.org/css-validator
- Google PageSpeed: https://pagespeed.web.dev
- Responsiveness Tester: https://responsively.app

---

**Last Updated**: December 2024
**Version**: 1.0

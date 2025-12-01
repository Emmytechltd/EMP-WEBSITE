# Quick Reference Guide - EMP 2015 Alumni Website

## File Locations & What to Edit

### Contact Information
| Item | File | Where to Change |
|------|------|-----------------|
| General Email | `contact.html` | Line ~155 |
| President Email | `contact.html` | Line ~165 |
| WhatsApp Numbers | All pages | Search for `wa.me` |
| Address | `contact.html` | Line ~180 |
| Social Media Links | All pages | Header, Footer, sections |

### Content Updates
| Section | File | Lines |
|---------|------|-------|
| Home Page Text | `index.html` | 40-70 |
| About History | `about.html` | 45-70 |
| Vision/Mission | `about.html` | 80-140 |
| Core Values | `about.html` | 160-220 |
| Members | `members.html` | 35-200 |
| FAQs | `contact.html` | 250-320 |

### Styling
| Element | File | Variable |
|---------|------|----------|
| Primary Color | `css/styles.css` | `--primary-blue` |
| Secondary Color | `css/styles.css` | `--secondary-blue` |
| Accent Color | `css/styles.css` | `--accent-gold` |
| Font | `css/styles.css` | `font-family` (line 28) |

### JavaScript
| Feature | File | Lines |
|---------|------|-------|
| Gallery Data | `js/script.js` | 205-228 |
| Form Validation | `js/script.js` | 238-270 |
| Mobile Menu | `js/script.js` | 6-30 |

---

## Quick Edits

### 1. Update Email Address (5 minutes)
```
Find & Replace: emp2015set@email.com
Replace with: your-email@domain.com
In files: All .html files
```

### 2. Update WhatsApp Link (3 minutes)
```
Find & Replace: https://wa.me/2348012345678
Replace with: https://wa.me/YOUR_WHATSAPP_NUMBER
In files: All .html files
```

### 3. Change Primary Color (2 minutes)
```
File: css/styles.css
Line: 13
Change: --primary-blue: #1a3d5c;
To: --primary-blue: YOUR_COLOR_CODE;
```

### 4. Add Gallery Images (15 minutes)
```
1. Add images to: assets/images/gallery/
2. Edit: js/script.js lines 205-228
3. Follow the galleryData format
```

### 5. Update Member Names (10 minutes)
```
File: members.html
Find each member card (look for class="member-card")
Update: Name, Position, Role, Location
```

---

## Keyboard Shortcuts for Editing

### In Browser DevTools
- `F12` - Open DevTools
- `Ctrl+Shift+I` - Inspect Element
- `Ctrl+K` - Search Console

### In Text Editor
- `Ctrl+H` - Find & Replace
- `Ctrl+F` - Find
- `Ctrl+S` - Save
- `Ctrl+/` - Comment

---

## Email Content Updates

### All Mentions to Update
- "EMP 2015 Set" → Your cohort name
- "Umunze Branch" → Your campus
- "Nnamdi Azikiwe University" → Your university
- "2015" → Your graduation year
- "Awka, Anambra State" → Your location

**Find in**: All HTML files

---

## Social Media Accounts to Update

```
Facebook:  https://facebook.com/yourpage
Instagram: https://instagram.com/yourusername
WhatsApp:  https://wa.me/country_codenumber
TikTok:    https://tiktok.com/@yourusername
Twitter/X: https://twitter.com/yourhandle
LinkedIn:  https://linkedin.com/in/yourprofile
```

---

## Image Optimization

### Recommended Sizes
| Type | Dimensions | Size |
|------|-----------|------|
| Gallery | 800x600px | < 300KB |
| Member Photo | 300x300px | < 100KB |
| About Section | 600x400px | < 200KB |
| Hero Background | 1200x600px | < 400KB |

### Tools
- **Compression**: TinyPNG, ImageOptim, Squoosh
- **Resizing**: Canva, Photoshop, GIMP
- **Format**: Use JPG for photos, PNG for graphics

---

## Browser Testing URLs

After uploading to your server:
- Desktop: `https://yoursite.com`
- Mobile: Test on actual phone or use DevTools (F12)
- Tablet: Resize browser window to 768px

---

## Performance Checklist

- [ ] Images optimized (< 500KB total per image)
- [ ] CSS minified (optional)
- [ ] JavaScript working without errors
- [ ] Page loads in < 3 seconds
- [ ] Mobile menu responsive
- [ ] Gallery lightbox smooth
- [ ] Forms validating correctly
- [ ] All links working
- [ ] No console errors (F12)

---

## Directory Structure Reference

```
EMP/
├── index.html ............................ Home
├── about.html ............................ About Us
├── gallery.html .......................... Gallery
├── members.html .......................... Members
├── contact.html .......................... Contact
├── README.md ............................. Documentation
├── CUSTOMIZATION_GUIDE.md ................ Customization
├── QUICK_REFERENCE.md ................... This file
├── css/
│   └── styles.css ....................... All styling
├── js/
│   └── script.js ........................ All functionality
└── assets/
    └── images/
        └── gallery/
            ├── matriculation/ ........... Matriculation photos
            ├── classes/ ................. Class activity photos
            ├── finalyear/ ............... Final year photos
            ├── graduation/ .............. Graduation photos
            └── reunion/ ................. Reunion photos
```

---

## Common Regex Find & Replace Patterns

| Pattern | Use | Example |
|---------|-----|---------|
| `2015` | Year replacement | `2016` |
| `Umunze` | Location | `Your Campus` |
| `emp2015` | Email prefix | `youralumni` |
| `#d4af37` | Gold color | `#ffa500` |

---

## Testing Credentials (for forms)

Test contact form with:
- **Name**: Test User
- **Email**: test@example.com
- **Message**: Test message

Expected: Success alert appears

---

## Deployment Steps

1. **Prepare Files**
   - [ ] Update all content
   - [ ] Add images to assets/
   - [ ] Test locally
   - [ ] Create backup

2. **Upload Files**
   - [ ] FTP upload or use File Manager
   - [ ] Maintain folder structure
   - [ ] Set proper permissions (644 files, 755 folders)

3. **Configure Domain**
   - [ ] Point domain to hosting
   - [ ] Enable SSL/HTTPS
   - [ ] Test all pages

4. **Final Testing**
   - [ ] Check all pages load
   - [ ] Test on mobile
   - [ ] Verify forms work
   - [ ] Check links (internal/external)

---

## Troubleshooting Commands

### Check if file exists
```bash
test -f css/styles.css && echo "File exists" || echo "File missing"
```

### Check file permissions
```bash
ls -la index.html
```

### View file size
```bash
du -h assets/images/gallery/*
```

---

## Critical File Sizes

| File | Expected Size | Max Size |
|------|---------------|----------|
| styles.css | ~80KB | 100KB |
| script.js | ~30KB | 50KB |
| index.html | ~10KB | 20KB |
| All pages total | ~60KB | 100KB |
| Gallery (10 images) | ~3MB | 5MB |

---

## Security Tips

1. **Keep Backups**: Daily backups of important files
2. **Use HTTPS**: Secure your site with SSL certificate
3. **Update Content**: Regularly update member info
4. **Validate Forms**: Prevent malicious submissions
5. **Monitor Traffic**: Use Google Analytics

---

## Analytics Setup

### Google Analytics
Add to `<head>` of each page:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

---

## Emergency Contacts

Who to contact if something breaks:
- **For coding issues**: Check console (F12) for errors
- **For hosting issues**: Contact your web host support
- **For design issues**: Review CSS in `styles.css`
- **For functionality**: Check `script.js` and HTML

---

## Useful Links

- **HTML Reference**: https://mdn.io/html
- **CSS Reference**: https://mdn.io/css
- **JavaScript Reference**: https://mdn.io/js
- **Color Picker**: https://htmlcolorcodes.com
- **Icon Library**: https://icons8.com
- **Font Library**: https://fonts.google.com

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2024 | Initial release |

---

## Support

For questions or issues:
1. Check README.md for details
2. Review CUSTOMIZATION_GUIDE.md for how-tos
3. Examine similar sections in code for patterns
4. Contact web developer for assistance

---

**Happy customizing! 🎓**

*Last Updated: December 2024*

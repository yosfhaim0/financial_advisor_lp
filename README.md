# Financial Advisor Landing Page Template

A professional, responsive landing page template built with React, TailwindCSS, and shadcn/ui components. This template is specifically designed for financial advisors and supports RTL (Right-to-Left) layout for Hebrew content.

## Features

- ✅ **RTL Support**: Full right-to-left layout support for Hebrew
- ✅ **Configurable Content**: All text and images configurable via JSON
- ✅ **Responsive Design**: Mobile-first responsive design
- ✅ **Modern UI**: Built with TailwindCSS and shadcn/ui components
- ✅ **Lead Capture Form**: Contact form with validation and local storage
- ✅ **Modular Components**: Reusable components for different layouts
- ✅ **Professional Design**: Blue & Gold color scheme for trust and elegance

## Tech Stack

- **React 18** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **Local Storage** - Form data persistence

## Project Structure

```
financial-advisor-lp/
├── public/
│   ├── images/           # Customer images folder
│   └── index.html        # Main HTML file
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── LandingPage.jsx
│   ├── config/
│   │   └── landingPageConfig.js  # Main configuration file
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

## Configuration

All content is configurable through the `src/config/landingPageConfig.js` file. The configuration includes:

### Page Metadata
```javascript
meta: {
  title: "Page Title",
  description: "Page Description",
  language: "he",
  direction: "rtl"
}
```

### Hero Section
```javascript
hero: {
  title: "Main Headline",
  subtitle: "Subtitle",
  description: "Description text",
  image: "/images/hero-image.jpg",
  ctaText: "Call to Action Text",
  ctaLink: "#contact-form"
}
```

### Features/Selling Points
```javascript
features: [
  {
    id: 1,
    title: "Feature Title",
    description: "Feature description",
    icon: "PiggyBank", // Lucide icon name
    color: "financial-gold" // Color theme
  }
]
```

### Contact Form
```javascript
contactForm: {
  title: "Form Title",
  subtitle: "Form subtitle",
  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter your full name"
    }
  ],
  submitText: "Submit",
  successMessage: "Success message",
  errorMessage: "Error message"
}
```

## Customization

### Adding New Features

1. **Add new feature icons**: Import from `lucide-react` and add to the icon map in `FeaturesSection.jsx`
2. **Add new sections**: Create new components and add them to `LandingPage.jsx`
3. **Change colors**: Modify the color scheme in `tailwind.config.js` and `index.css`

### Creating New Landing Page Instances

1. Create a new configuration file (e.g., `realEstateConfig.js`)
2. Import and use the new config in `App.js`
3. Customize content, colors, and images as needed

### Form Data Storage

Form submissions are stored in the browser's local storage. To implement server-side storage:

1. Replace the `saveFormData` function in `utils.js`
2. Add API endpoints for form submission
3. Implement proper error handling

## RTL Support

The template includes comprehensive RTL support:

- HTML `dir="rtl"` attribute
- CSS direction properties
- Text alignment classes
- Icon positioning for RTL layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with fallback placeholders
- Lazy loading for better performance
- Compressed CSS and JavaScript
- Responsive images

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

---

**Note**: This template is designed for financial advisors but can be easily adapted for other industries by modifying the configuration and content.

# Setup Instructions

## Prerequisites

Before running this project, you need to install Node.js and npm.

### Installing Node.js and npm

1. **Download Node.js**: Visit [https://nodejs.org/](https://nodejs.org/) and download the LTS version
2. **Install Node.js**: Run the installer and follow the installation wizard
3. **Verify Installation**: Open a new terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```

## Project Setup

Once Node.js and npm are installed:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Open Browser**: Navigate to `http://localhost:3000`

## Alternative Setup (if npm is not working)

If you're having issues with npm, try:

1. **Restart your terminal/command prompt**
2. **Check PATH environment variable**
3. **Reinstall Node.js**
4. **Use Node.js installer that includes npm**

## Project Features

✅ **RTL Support**: Full Hebrew right-to-left layout
✅ **Configurable Content**: All text and images via JSON
✅ **Responsive Design**: Mobile-first approach
✅ **Modern UI**: TailwindCSS + shadcn/ui components
✅ **Lead Capture Form**: With validation and local storage
✅ **Professional Design**: Blue & Gold theme for financial advisors

## Configuration

Edit `src/config/landingPageConfig.js` to customize:
- Page title and description
- Hero section content
- Features/selling points
- Testimonials
- Contact form fields
- Footer information
- Color scheme

## Adding Images

Place your images in the `public/images/` folder and update the configuration file to reference them.

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

# Light Theme Modern Design Plan for Portfolio Website

## Identified Issues
1. Tailwind configuration has two separate configurations which may cause conflicts
2. Next.js configuration format issue (should be .js or .mjs, not .ts)
3. Current dark theme doesn't match user's request for light colors
4. CSS styling not applying correctly in the browser

## Design Direction
Create a modern, clean portfolio website with a light color scheme that maintains professionalism while showcasing the user's skills as a QA Engineer.

## Color Palette
- **Primary Background**: #f8fafc (Light blue-gray 50)
- **Secondary Background**: #ffffff (White)
- **Primary Accent**: #0ea5e9 (Sky blue 500)
- **Secondary Accent**: #8b5cf6 (Violet 500)
- **Text Primary**: #1e293b (Slate 800)
- **Text Secondary**: #64748b (Slate 500)
- **Borders**: #e2e8f0 (Slate 200)
- **Success**: #10b981 (Emerald 500)
- **Warning**: #f59e0b (Amber 500)
- **Error**: #ef4444 (Red 500)

## Typography
- **Primary Font**: 'Inter', sans-serif
- **Heading Font**: 'Poppins', sans-serif (for more modern feel)
- **Code Font**: 'Fira Code', monospace (for technical sections)
- **Base Size**: 16px
- **Scale**: 1.25 (major third)

## Component Styling

### Navbar
- Light background with subtle shadow
- Clean, minimal design with hover effects
- Mobile-friendly hamburger menu
- Scroll progress indicator
- Sticky positioning

### Hero Section
- Clean, light background
- Professional profile image
- Brief, impactful introduction
- Social media links with modern icons
- Call-to-action buttons with subtle hover effects

### Skills Section
- Card-based layout with professional SVG icons
- Skill level indicators with clean progress bars
- Organized by category (Testing, Development, Tools)
- Subtle hover animations

### Experience Section
- Timeline-based layout
- Clean cards with company logos
- Clear date indicators
- Concise descriptions
- Subtle hover effects

### Projects Section
- Grid layout for projects
- Clean cards with thumbnails
- Filter options by technology
- Overlay with project details on hover
- Links to live demos and repositories

### Contact Section
- Simple, clean form design
- Social media links
- Professional contact information
- Map integration (optional)

## Animations & Interactions
- Subtle entrance animations (fade-in, slide-up)
- Micro-interactions on hover
- Smooth scrolling
- Reduced motion option for accessibility

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: 0-640px
  - Tablet: 641-1024px
  - Desktop: 1025px+
- Flexible grid system
- Optimized images for different screen sizes

## Accessibility Improvements
- High contrast between text and background
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for interactive elements

## Performance Optimizations
- Optimize image loading with next/image
- Lazy loading for off-screen content
- Code splitting for faster initial load
- Font optimization

## Technical Fixes
1. Correct the Tailwind configuration to use a single configuration
2. Convert Next.js configuration to proper format
3. Fix CSS loading issues
4. Implement proper CSS variable structure for theming
5. Ensure responsive design works across all devices

## Implementation Priority
1. Fix configuration issues to ensure proper CSS loading
2. Implement new color scheme and typography
3. Update layout components (Navbar, Footer)
4. Redesign main page sections
5. Add animations and interactions
6. Optimize for performance and accessibility
7. Test across devices and browsers

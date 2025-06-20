# IflaqTheDev - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support (default is dark mode)
- Interactive UI with animations
- Sections for projects, skills, experience, education, certifications, and contact
- Resume download functionality
- Contact form
- **PostgreSQL**: For relational database management (added as a skill and sample project)
- **Next.js**: For server-side rendering and static site generation (added as a skill and sample project)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iflaq-the-dev.git
cd iflaq-the-dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Required Dependencies

The project uses the following main dependencies:

- **React**: UI library
- **React Router DOM**: For routing
- **React Scroll**: For smooth scrolling to sections
- **Tailwind CSS**: For styling
- **Lucide React**: For icons
- **TypeScript**: For type safety

## Customization

### Resume Download

To set up the resume download functionality:
1. Upload your resume to Google Drive
2. Get the file ID from the sharing link
3. Replace `YOUR_FILE_ID` in the Header and Hero components with your actual file ID

### Contact Information

Update your contact information in `src/services/api.ts`:
- Email
- GitHub profile
- LinkedIn profile
- Twitter profile
- Instagram profile

### Projects

Add or modify your projects in the `projects` array in `src/services/api.ts`.

**Sample projects for PostgreSQL and Next.js have been added. Update their links and details as you build them!**

### Dark Mode

The website defaults to dark mode. Users can toggle between light and dark mode using the button in the header.

## Building for Production

To build the project for production:

```bash
npm run build
```

The build files will be in the `dist` directory.

## License

MIT# Portfolio

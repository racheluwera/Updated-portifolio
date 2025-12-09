# Professional Portfolio

A modern, professional portfolio built with Next.js 15, TypeScript, and Tailwind CSS featuring a clean black and white design.

## Features

- ✅ Component-based architecture
- ✅ React Hooks (useState, useEffect, custom hooks)
- ✅ Protected admin route with authentication
- ✅ Responsive design
- ✅ Profile and project photo support
- ✅ Contact form with state management
- ✅ Frontend-focused skills showcase

## Project Structure

```
portifolio/
├── app/
│   ├── admin/          # Protected admin dashboard
│   ├── login/          # Login page
│   ├── layout.tsx
│   ├── page.tsx        # Main portfolio page
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx        # Profile photo section
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx    # Project images
│   ├── Contact.tsx     # Form with hooks
│   ├── Footer.tsx
│   └── ProtectedRoute.tsx
├── hooks/
│   └── useAuth.ts      # Custom authentication hook
└── public/
    ├── profile.jpg     # Your profile photo
    ├── project1.jpg    # Project screenshots
    ├── project2.jpg
    └── project3.jpg
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add your photos to the `public/` folder:
   - `profile.jpg` - Your profile photo (recommended: 512x512px)
   - `project1.jpg`, `project2.jpg`, `project3.jpg` - Project screenshots

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Routes

- `/` - Main portfolio (public)
- `/login` - Admin login page (password: admin123)
- `/admin` - Protected admin dashboard

## Customization

### Update Personal Information
Edit the following files:
- `components/Hero.tsx` - Name and title
- `components/About.tsx` - About section
- `components/Contact.tsx` - Contact information
- `components/Skills.tsx` - Skills list
- `components/Projects.tsx` - Project details

### Change Admin Password
Edit `hooks/useAuth.ts` and change the password in the login function.

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- React Hooks (useState, useEffect, custom hooks)
- Client-side routing and protection

## License

MIT

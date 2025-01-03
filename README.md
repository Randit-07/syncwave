# CertGram - Concert Social Matching Platform

CertGram is a modern web application that helps users find concert buddies and match with people who share similar music interests. The platform allows users to discover upcoming concerts, match with potential concert companions, and chat with their matches.

## 🚀 Features

- **User Authentication**: Secure signup and login system
- **Profile Management**: Customizable user profiles with profile picture upload
- **Concert Discovery**: Browse and search for upcoming concerts
- **Match Making**: Swipe and match with potential concert buddies
- **Real-time Chat**: Communication system between matched users
- **Location-based Events**: Find concerts and users near you
- **Responsive Design**: Fully responsive UI that works on all devices

## 🛠️ Tech Stack

### Frontend
- **React 18**: Main frontend framework
- **Vite**: Build tool and development server
- **Material-UI (MUI)**: UI component library
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **React Hook Form**: Form handling with Yup validation
- **React Spring**: Advanced animations
- **Three.js**: 3D graphics (used for background effects)

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Supabase**: Database and authentication
- **JWT**: Token-based authentication
- **Multer**: File upload handling
- **CORS**: Cross-origin resource sharing

### Storage
- **Supabase Storage**: Profile picture and media storage

## 📁 Project Structure

- **src**: Source code
  - **frontend**: React application
  - **backend**: Node.js backend
  - **utils**: Utility functions and constants

## ⚙️ Configuration Files

### ESLint Configuration
- Configured for browser and Node.js environments
- Uses recommended ESLint rules
- Enforces:
  - Unix line endings
  - Single quotes
  - Tab indentation
  - Semicolons

### Vite Configuration
- Uses React plugin
- Default configuration for development server

## 🔒 Environment Variables Required

Create a `.env` file  in backend root with variables:
- `SUPABASE_URL` : SUPABASE DATABASE URL
- `SUPABASE_ANON_KEY` : SUPABASE DATABASE KEY
- `JWT_SECRET` : JSON Web Token Secret For Handshake Upon Authentication

## 📝 Features

- User authentication
- Profile management with picture upload
- Real-time chat functionality
- Event discovery
- User matching system
- Interactive UI with animations

## 🚀 Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 📄 License

ISC License


# Deployment Guide

## Prerequisites
1. **Install Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Mode**
   ```bash
   npm run dev
   ```
   - Opens at http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## Deployment Platforms

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Traditional Hosting
1. Run `npm run build`
2. Upload `.next` folder and `package.json`
3. Run `npm start` on server

## Environment Variables
No environment variables required for basic deployment.

## Features Included
- ✅ Student Management System
- ✅ Teacher Dashboard
- ✅ Parent Portal
- ✅ Admin Panel
- ✅ Authentication System
- ✅ Payment Integration (Demo)
- ✅ Responsive Design
- ✅ Modern UI with Animations

## Notes
- All data is currently mock/demo data
- Payment system is in demo mode
- Ready for production deployment

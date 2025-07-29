# Sky Track - Real-time Flight Tracking

## 🛫 About
Real-time flight tracking application with interactive maps, live updates, and curved flight paths. Monitor flights worldwide with precision and style.

## ✨ Features
- **Real-time Tracking**: Live flight positions with curved flight paths
- **Interactive Maps**: Leaflet-based maps with zoom and pan capabilities  
- **Smart Caching**: Tanstack Query with 5-minute auto-refresh
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Theme**: Automatic theme switching support
- **Favorites System**: Save and track preferred flights
- **Authentication**: Login/Signup pages ready
- **Performance Optimized**: Bundle splitting, optimized images

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Aviation Stack API key (free at [aviationstack.com](https://aviationstack.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ninjaadel/Sky-Track.git
   cd Sky-Track
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Aviation Stack API key:
   ```env
   VITE_AVIATION_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack
- **Frontend**: React 18 + Vite
- **Maps**: Leaflet + React Leaflet  
- **State Management**: Redux Toolkit
- **Data Fetching**: Tanstack Query
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Build Tool**: Vite

## 📱 Responsive Breakpoints
- **xs**: 500px+ (Mobile)
- **sm**: 768px+ (Tablet)  
- **md**: 992px+ (Desktop)
- **lg**: 1200px+ (Large Desktop)

## 🎨 Design System
- **Font**: JetBrains Mono (monospace)
- **Colors**: CSS Custom Properties (Dark/Light)
- **Icons**: Lucide React (consistent sizing)
- **Spacing**: Tailwind spacing scale

## 🔐 Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_AVIATION_API_KEY` | Aviation Stack API key | Yes |

## 📈 Performance Metrics
- **Bundle Size**: ~278KB (main chunk)
- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO)

## 🤝 Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License
MIT License

## 🙏 Credits
- **Aviation Data**: [Aviation Stack API](https://aviationstack.com/)
- **Maps**: [Leaflet](https://leafletjs.com/)
- **Icons**: [Lucide](https://lucide.dev/)

---

**Sky Track** - Built with ❤️ for aviation enthusiasts 🛫
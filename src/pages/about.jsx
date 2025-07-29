import { Plane, MapPin, Clock, Users, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <div className="relative bg-[var(--muted)] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Plane className="w-12 h-12 text-blue-500" />
            <h1 className="text-4xl xs:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sky Track
            </h1>
          </div>
          <p className="text-lg xs:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Real-time flight tracking application with interactive maps and live updates. 
            Monitor flights worldwide with precision and style.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Real-time Tracking</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Track flights in real-time with live position updates and curved flight paths on interactive maps.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-semibold">Live Updates</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Get instant updates on flight status, delays, and estimated arrival times with auto-refresh every 5 minutes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-semibold">Favorites</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Save your favorite flights and access them quickly. Perfect for tracking specific routes or airlines.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-purple-500" />
                <h3 className="text-xl font-semibold">Global Coverage</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Monitor flights worldwide with comprehensive airport and airline data from reliable aviation APIs.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-semibold">User Friendly</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Clean, responsive design that works perfectly on all devices with dark/light theme support.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Flight Details</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Detailed flight information including aircraft type, route, progress, and estimated times.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-[var(--muted)] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Built With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[var(--card)] p-4 rounded-lg">
              <h3 className="font-semibold text-blue-500">React 18</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Modern UI</p>
            </div>
            <div className="bg-[var(--card)] p-4 rounded-lg">
              <h3 className="font-semibold text-green-500">Leaflet Maps</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Interactive Maps</p>
            </div>
            <div className="bg-[var(--card)] p-4 rounded-lg">
              <h3 className="font-semibold text-purple-500">Tanstack Query</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Data Caching</p>
            </div>
            <div className="bg-[var(--card)] p-4 rounded-lg">
              <h3 className="font-semibold text-orange-500">Tailwind CSS</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Responsive Design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--muted-foreground)]">
            &copy; 2025 Sky Track. Built with ❤️ for aviation enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

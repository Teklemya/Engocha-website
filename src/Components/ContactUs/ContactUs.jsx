import { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BorderBeam } from "../ui/border-beam";
import Footer from '../Footer/Footer';

const LeafletMap = () => {
  useEffect(() => {
    // Check if the Leaflet CSS is already loaded
    if (!document.querySelector('#leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
    script.onload = () => {
      // Initialize map after script is loaded
      // Replace these coordinates with your actual business location
      const location = [9.0300, 38.7400];
      
      const map = L.map('map').setView(location, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add marker for business location
      L.marker(location)
        .addTo(map)
        .bindPopup('Engocha Catering<br>Saris, Addis Ababa, Ethiopia')
        .openPopup();

      // Trigger a resize event after map initialization
      setTimeout(() => {
        map.invalidateSize();
      }, 100);

      // Cleanup function
      return () => {
        map.remove();
      };
    };
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const leafletScript = document.querySelector('script[src*="leaflet.js"]');
      const leafletCss = document.querySelector('#leaflet-css');
      if (leafletScript) document.head.removeChild(leafletScript);
      if (leafletCss) document.head.removeChild(leafletCss);
    };
  }, []);

  return (
    <div 
      id="map" 
      className="w-full h-72 rounded-lg overflow-hidden z-0"
    />
  );
};

const ContactPage = () => {

  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mt-8 font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-6">Let us help make your event special</p>
         
            <Link 
            to="/order"
            className="inline-block bg-primary-600 px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
             <div className="relative flex h-[50px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 p-4">
                Get an Instant Quote
                </span>
                <BorderBeam size={250} duration={12} delay={9} />
             </div>
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>+251911224860</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>Seble@engocha.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Saris, Addis Ababa, Ethiopia</span>
                </div>
                
                {/* Leaflet Map */}
                <LeafletMap />
              </div>
            </CardContent>
          </Card>

          {/* Simple Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    
        <Footer />
    </div>
  );
};

export default ContactPage;
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { Icon: FaFacebook, url: '#', color: 'text-blue-600' },
    { Icon: FaTwitter, url: '#', color: 'text-blue-400' },
    { Icon: FaInstagram, url: '#', color: 'text-pink-600' },
    { Icon: FaLinkedin, url: '#', color: 'text-blue-700' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Engocha</h3>
            <p className="text-gray-400">
              Bringing authentic Ethiopian catering to your special moments. 
              Celebrate with traditional flavors and warm hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="text-gray-400 space-y-2 mb-4">
              <p>Email: info@engocha.com</p>
              <p>Phone: (+251) 911224860</p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, url, color }, index) => (
                <a 
                  key={index} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${color} hover:opacity-75 transition-opacity`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Engocha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
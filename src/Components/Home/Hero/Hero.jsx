import { useEffect, useRef, useState } from 'react';
import './Hero.css';
import Injera from '../../../assets/injera.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect the observer after the section becomes visible
          observer.unobserve(entry.target);
        }
      },
      {
        // Trigger when at least 10% of the section is visible
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full h-[90vh] overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${Injera})`,
          filter: 'brightness(0.6)', // Slightly darken image for text readability
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Engocha
            <span
              className={`block text-xl md:text-2xl mt-2 font-light opacity-80 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Authentic Ethiopian Catering Experience
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Bringing the rich flavors of Ethiopia to your special occasions.
            Traditional injera, vibrant wot, and exceptional catering services.
          </p>

          {/* Call to Action Buttons */}
          <div
            className={`flex justify-center space-x-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              to="/menu"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg text-white font-semibold"
            >
              View Menu
            </Link>
            <Link
              to="/order"
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg text-white"
            >
              Book Catering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

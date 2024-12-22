import { useEffect, useRef, useState } from 'react';
import Teff from "../../../assets/Teff.jpg";

const AboutUs = () => {
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
      className={`container mx-auto px-4 py-12 transition-all duration-1000 ease-out 
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
        }`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className={`text-3xl font-bold mb-4 text-primary transition-all duration-1000 
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }`}
          >
            Our Culinary Journey
          </h2>
          <p className={`text-lg leading-relaxed mb-6 space-y-4 transition-all duration-1000 delay-200
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }`}
          >
            Engocha was born from a passion to share the rich, vibrant flavors of Ethiopian cuisine. 
            Our culinary journey began with a simple idea: to bring the warmth and hospitality of 
            Ethiopia to your table.
          </p>
          {/* <p className={`text-lg leading-relaxed mt-4 transition-all duration-1000 delay-300
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }`}
          >
            We pride ourselves on using the finest teff, sourced directly from Ethiopian farmers, 
            to create the most authentic injera and dishes that tell a story of tradition, 
            culture, and culinary excellence.
          </p> */}
          <h2 className={`text-3xl font-bold mb-4 text-primary transition-all duration-1000 
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }`}
          >
            Our Mission
          </h2>
          <p className={`text-lg leading-relaxed space-y-4 transition-all duration-1000 delay-200
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }`}
          >
           Our mission is to bring authentic, traditional Ethiopian catering 
           to communities, celebrating the art of injera and the warmth of communal dining.
          </p>
        </div>

        {/* Image Section */}
        <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-500
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }`}
        >
          <img 
            src={Teff} 
            alt="Teff Grain" 
            className="max-w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
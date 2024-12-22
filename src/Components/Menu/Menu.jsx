// import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BuffetMenu from './BuffetMenu';
import CocktailMenu from './CocktailMenu';
import RefreshmentsMenu from './RefreshmentsMenu';
import ToGoPackages from './ToGoPackages';
import { BorderBeam } from "@/components/ui/border-beam";
// import FadeInSection from '../FadeInSection/FadeInSection';

import Footer from '../Footer/Footer'
function Menu() {
  // const [isVisible, setIsVisible] = useState(false);
  //   const sectionRef = useRef(null);
  
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           setIsVisible(true);
  //           // Disconnect the observer after the section becomes visible
  //           observer.unobserve(entry.target);
  //         }
  //       },
  //       {
  //         // Trigger when at least 10% of the section is visible
  //         threshold: 0.1,
  //       }
  //     );
  
  //     if (sectionRef.current) {
  //       observer.observe(sectionRef.current);
  //     }
  
  //     // Cleanup the observer on component unmount
  //     return () => {
  //       if (sectionRef.current) {
  //         observer.unobserve(sectionRef.current);
  //       }
  //     };
  //   }, []);
  
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mt-12 mb-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Culinary Offerings
          </h1>
          <Link 
            to="/order"
            className="inline-block bg-primary-600 px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
             <div className="relative flex h-[50px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 p-4">
                    Order Now
                </span>
                <BorderBeam size={250} duration={12} delay={9} />
             </div>
          </Link>
        </div>
        {/* <div ref={sectionRef} className={`container mx-auto px-4 py-12 transition-all duration-1000 ease-out 
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }`}> */}
        <BuffetMenu />
         
        <CocktailMenu />
        <RefreshmentsMenu />
        <ToGoPackages />
        
      </div><Footer />
    </div>

  );
}

export default Menu;



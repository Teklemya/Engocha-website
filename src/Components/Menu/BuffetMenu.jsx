import { useState, useRef, useEffect } from 'react';
import DoroWot from "../../assets/doro.jpeg"
import Misir from "../../assets/misir.jpg"
import Kitfo from "../../assets/kifo.jpeg"
import Tibs from "../../assets/awaze.jpg"
import Lasagna from "../../assets/Lasagna.jpg"
import RoastedChicken from "../../assets/roasted_chicken.jpg"
import BeefStraganoff from "../../assets/beef_straganoff.jpg"
import Steak from "../../assets/Steak.jpeg"
import SigaWot from "../../assets/siga_wot.avif"
import Salad from "../../assets/salad.jpg"

const BuffetMenu = () => {
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
    
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  const cuisineMenus = {
    Ethiopian: [
      {
        name: 'Doro Wot',
        description: 'Spicy chicken stew with berbere sauce',
        image: DoroWot
      },
      {
        name: 'Misir Wat', 
        description: 'Red lentil stew with aromatic spices',
        image: Misir
      },
      {
        name: 'Kitfo',
        description: 'Minced beef tartare with herbed butter',
        image: Kitfo
      },
      {
        name: 'Tibs',
        description: 'Sautéed meat with vegetables and spices',
        image: Tibs
      },
      {
        name: 'siga Wot',
        description: 'Spicy beef stew with berbere sauce',
        image: SigaWot
      },
      {
        name: 'Doro Wot',
        description: 'Spicy chicken stew with berbere sauce',
        image: DoroWot
      },
      {
        name: 'Misir Wat', 
        description: 'Red lentil stew with aromatic spices',
        image: Misir
      },
      {
        name: 'Kitfo',
        description: 'Minced beef tartare with herbed butter',
        image: Kitfo
      },
      {
        name: 'Tibs',
        description: 'Sautéed meat with vegetables and spices',
        image: Tibs
      },
      {
        name: 'siga Wot',
        description: 'Spicy beef stew with berbere sauce',
        image: SigaWot
      },
    ],
    European: [
      {
        name: 'Lasagna',
        description: 'Classic Italian pasta dish',
        image: Lasagna
      },
      {
        name: 'Rosted Chicken', 
        description: 'Herb-roasted chicken with seasonal vegetables',
        image: RoastedChicken
      },
      {
        name: 'Beef Stroganoff',    
        description: 'Tender beef in a creamy mushroom sauce',
        image: BeefStraganoff
      },
      {
        name: 'Steak',
        description: 'Grilled steak with garlic butter',
        image: Steak
      },
      {
        name: 'salad',
        description: 'Healthy and refreshing salad',
        image: Salad
      },
      {
        name: 'Lasagna',
        description: 'Classic Italian pasta dish',
        image: Lasagna
      },
      {
        name: 'Rosted Chicken', 
        description: 'Herb-roasted chicken with seasonal vegetables',
        image: RoastedChicken
      },
      {
        name: 'Beef Stroganoff',    
        description: 'Tender beef in a creamy mushroom sauce',
        image: BeefStraganoff
      },
      {
        name: 'Steak',
        description: 'Grilled steak with garlic butter',
        image: Steak
      },
      {
        name: 'salad',
        description: 'Healthy and refreshing salad',
        image: Salad
      }
      
    ]
  };

  const handleSeeMore = (cuisine) => {
    setSelectedCuisine(selectedCuisine === cuisine ? null : cuisine);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          
          <h2 className="text-3xl font-bold text-gray-800">
            Buffet Menu Selections
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Explore our curated selection of Ethiopian and European delicacies
          </p>
        </div>

        <div ref={sectionRef} className={`container mx-auto px-4 py-12 transition-all duration-1000 ease-out 
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }`}> 

        {Object.keys(cuisineMenus).map((cuisine) => (
          <div key={cuisine} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {cuisine} Cuisine
              </h3>
              <button 
                onClick={() => handleSeeMore(cuisine)}
                className="flex items-center text-primary-600 hover:text-primary-700 transition"
              >
                {selectedCuisine === cuisine ? 'Hide Details' : 'See More'}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 w-5 h-5"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {cuisineMenus[cuisine].slice(0, 4).map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {selectedCuisine === cuisine && (
              <div className="mt-6 grid md:grid-cols-4 gap-6 animate-fade-in">
                {cuisineMenus[cuisine].slice(4).map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BuffetMenu;
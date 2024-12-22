import { useState, useEffect, useRef } from 'react';

const RefreshmentsMenu = () => {
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuCategories = {
    'Beverages': [
      {
        name: 'Ethiopian Coffee',
        description: 'Traditional pour-over ceremony coffee',
        image: '/api/placeholder/300/200?text=Ethiopian+Coffee'
      },
      {
        name: 'Herbal Tea Selection',
        description: 'Organic locally sourced herbal blends',
        image: '/api/placeholder/300/200?text=Herbal+Tea'
      },
      {
        name: 'Fresh Juice Medley',
        description: 'Seasonal fruit juices',
        image: '/api/placeholder/300/200?text=Fresh+Juice'
      },
      {
        name: 'Artisan Espresso',
        description: 'Locally roasted espresso drinks',
        image: '/api/placeholder/300/200?text=Artisan+Espresso'
      }
    ],
    'Light Snacks': [
      {
        name: 'Mini Pastry Assortment',
        description: 'Sweet and savory bite-sized treats',
        image: '/api/placeholder/300/200?text=Mini+Pastries'
      },
      {
        name: 'Fruit & Cheese Plate',
        description: 'Seasonal fruits with artisan cheeses',
        image: '/api/placeholder/300/200?text=Fruit+Cheese+Plate'
      },
      {
        name: 'Energy Bites',
        description: 'Healthy protein-packed snacks',
        image: '/api/placeholder/300/200?text=Energy+Bites'
      },
      {
        name: 'Vegetable Crudités',
        description: 'Fresh seasonal vegetables with dips',
        image: '/api/placeholder/300/200?text=Vegetable+Crudites'
      }
    ]
  };

  const handleSeeMore = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
         
          <h2 className="text-3xl font-bold text-gray-800">
            Refreshments & Light Bites
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Delicious beverages and snacks to keep you refreshed
          </p>
        </div>

        <div ref={sectionRef} className={`container mx-auto px-4 py-12 transition-all duration-1000 ease-out 
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }`}> 

        {Object.keys(menuCategories).map((category) => (
          <div key={category} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {category}
              </h3>
              <button 
                onClick={() => handleSeeMore(category)}
                className="flex items-center text-primary-600 hover:text-primary-700 transition"
              >
                {selectedCategory === category ? 'Hide Details' : 'See More'}
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
              {menuCategories[category].slice(0, 4).map((item, index) => (
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

            {selectedCategory === category && (
              <div className="mt-6 grid md:grid-cols-4 gap-6 animate-fade-in">
                {menuCategories[category].slice(4).map((item, index) => (
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

export default RefreshmentsMenu;
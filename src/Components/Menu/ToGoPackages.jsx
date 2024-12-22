import { useState, useRef, useEffect } from 'react';

function ToGoPackages() {
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
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: 'Classic Ethiopian Feast',
      description: 'Traditional favorites for group dining',
      details: [
        'Doro Wat (Spicy Chicken Stew)',
        'Misir Wat (Lentil Stew)',
        'Gomen (Collard Greens)',
        'Atakilt Wat (Cabbage & Carrot)',
        'Injera Bread',
        'Bottled Water'
      ],
      image: '/api/placeholder/300/200?text=Ethiopian+Feast',
      serves: '10-12 People',
    //   price: '$225'
    },
    {
      name: 'Mediterranean Fusion Package',
      description: 'A blend of international flavors',
      details: [
        'Tibs (Sautéed Meat)',
        'Vegetable Lasagna',
        'Mixed Green Salad',
        'Roasted Potatoes',
        'Focaccia Bread',
        'Bottled Water'
      ],
      image: '/api/placeholder/300/200?text=Mediterranean+Package',
      serves: '10-12 People',
    //   price: '$245'
    },
    {
      name: 'Vegetarian Delight',
      description: 'Plant-based options for every palate',
      details: [
        'Misir Wat (Lentil Stew)',
        'Vegetable Lasagna',
        'Gomen (Collard Greens)',
        'Atakilt Wat (Cabbage & Carrot)',
        'Injera Bread',
        'Bottled Water'
      ],
      image: '/api/placeholder/300/200?text=Vegetarian+Package',
      serves: '10-12 People',
    //   price: '$205'
    }
  ];

  const handleSeeMore = (packageName) => {
    setSelectedPackage(selectedPackage === packageName ? null : packageName);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mt-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
          አገልግል
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Perfect for groups of 10 or more. Delicious group dining solutions.
          </p>
        </div>
        <div ref={sectionRef} className={`container mx-auto px-4 py-12 transition-all duration-1000 ease-out 
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }`}>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {pkg.name}
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  {pkg.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-medium">
                    {pkg.serves}
                  </span>
                  <span className="text-gray-800 font-bold">
                    {pkg.price}
                  </span>
                </div>
                <button 
                  onClick={() => handleSeeMore(pkg.name)}
                  className="mt-4 w-full text-primary-600 hover:text-primary-700 transition"
                >
                  {selectedPackage === pkg.name ? 'Hide Details' : 'See Package Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPackage && (
          <div className="mt-6 bg-amber-100 p-6 rounded-lg animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedPackage} - Detailed Contents
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {packages
                .find(pkg => pkg.name === selectedPackage)
                .details.map((detail, index) => (
                  <li key={index} className="text-gray-700">
                    {detail}
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default ToGoPackages;
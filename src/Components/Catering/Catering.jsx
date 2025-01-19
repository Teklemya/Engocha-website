import { useState, useEffect, useRef } from 'react';
import { ChefHat } from 'lucide-react';
import simple from "../../assets/wedding.jpg"
import corporate from "../../assets/corprate.jpg"
import funeral from "../../assets/funeral.jpg"
import grad from "../../assets/grad.jpg"
import portfolio from "../../assets/portfolio.jpg"
import Footer from "../Footer/Footer";

const CateringPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'corporate', name: 'Corporate Meetings' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'graduation', name: 'Graduations'  },
    {id: 'funeral', name: 'Funerals' }
  ];

  // Sample portfolio items (replace with your actual data)
  const portfolioItems = [
    {
      id: 1,
      category: 'corporate',
      title: 'Annual Sales Conference',
      description: 'Professional lunch and coffee service for 300 attendees',
      image: corporate,
      guests: 300,
      location: 'Grand Hotel Ballroom',
    },
    {
      id: 2,
      category: 'wedding',
      title: 'Rustic Barn Wedding',
      description: 'Outdoor reception with a BBQ-style menu for 120 guests',
      image: simple,
      guests: 120,
      location: 'Willow Creek Ranch',
    },
    {
      id: 3,
      category: 'funeral',
      title: 'Celebration of Life Service',
      description: 'Coffee and tea service with light snacks for guests',
      image: funeral,
      guests: 60,
      location: 'Grace Memorial Chapel',
      
    },
    {
      id: 4,
      category: 'wedding',
      title: 'Luxury Beachside Wedding',
      description: 'Five-course dinner with signature cocktails',
      image: simple,
      guests: 200,
      location: 'Ocean View Resort',
      
    },
    {
      id: 5,
      category: 'graduation',
      title: 'Medical School Graduation Banquet',
      description: 'Elegant dinner buffet with speeches and awards ceremony',
      image: grad,
      guests: 200,
      location: 'Health Sciences Conference Center',
     
    },
    {
      id: 6,
      category: 'corporate',
      title: 'Team Building Workshop',
      description: 'Casual lunch buffet with snacks and beverages for breaks',
      image: corporate,
      guests: 80,
      location: 'Outdoor Adventure Park',
    },
    {
      id: 7,
      category: 'funeral',
      title: 'Graveside Memorial Service',
      description: 'Simple catering with light snacks and beverages for guests',
      image: funeral,
      guests: 30,
      location: 'Sunset Memorial Park',
     
    },
    {
      id: 8,
      category: 'corporate',
      title: 'Product Launch Party',
      description: 'Upscale hors d\'oeuvres and champagne for an exclusive event',
      image: corporate,
      guests: 150,
      location: 'Downtown Skyline Lounge',
    },
    {
      id: 9,
      category: 'graduation',
      title: 'High School Graduation Party',
      description: 'Buffet with desserts and refreshments for a lively celebration',
      image: grad,
      guests: 80,
      location: 'Community Recreation Center',
    },
    {
      id: 10,
      category: 'graduation',
      title: 'College Commencement Dinner',
      description: 'Formal sit-down dinner for graduating class and their families',
      image: grad,
      guests: 250,
      location: 'University Banquet Hall',
    },
    {
      id: 11,
      category: 'corporate',
      title: 'Holiday Gala',
      description: 'Seasonal menu with live cooking stations and festive decor',
      image: corporate,
      guests: 400,
      location: 'City Convention Center',
    },
    {
      id: 12,
      category: 'corporate',
      title: 'Executive Retreat',
      description: 'Luxury catering with a five-star dining experience',
      image: corporate,
      guests: 50,
      location: 'Lakeside Resort',
    },
    {
      id: 13,
      category: 'funeral',
      title: 'Memorial Luncheon',
      description: 'Catering with comforting dishes for family and friends',
      image: funeral,
      guests: 80,
      location: 'Harmony Hall',
    },
    {
      id: 14,
      category: 'corporate',
      title: 'Board of Directors Luncheon',
      description: 'Exclusive menu for a small gathering of key stakeholders',
      image: corporate,
      guests: 20,
      location: 'Executive Boardroom',
    },
    {
      id: 15,
      category: 'corporate',
      title: 'Industry Networking Event',
      description: 'Light refreshments and finger foods for professionals to mingle',
      image: corporate,
      guests: 200,
      location: 'City Networking Hub',
    },
    {
    id: 16,
    category: 'wedding',
    title: 'Classic Church Wedding',
    description: 'Traditional catering with a seated dinner service',
    image: simple,
    guests: 100,
    location: 'St. Mary’s Cathedral',
  },
  {
    id: 17,
    category: 'wedding',
    title: 'Destination Wedding in the Hills',
    description: 'Catering for a serene outdoor wedding with customized menus',
    image: simple,
    guests: 75,
    location: 'Sunrise Hilltop Retreat',
  },
  {
    id: 18,
    category: 'wedding',
    title: 'Vintage-Themed Wedding',
    description: 'Elegant finger foods and drinks for a chic celebration',
    image: simple,
    guests: 150,
    location: 'Victorian Estate',
  },
  {
    id: 19,
    category: 'wedding',
    title: 'Romantic Candlelit Wedding',
    description: 'An intimate dinner with wine pairings and romantic decor',
    image: simple,
    guests: 50,
    location: 'Elysian Garden Pavilion',
  },
  {
    id: 20,
    category: 'corporate',
    title: 'Startup Pitch Night',
    description: 'Cocktail-style catering with appetizers and drinks',
    image: corporate,
    guests: 100,
    location: 'Tech Innovation Hub',
  }
  ];
  

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 lg:h-[24rem] mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <img 
          src= {portfolio} 
          alt="Catering hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wider">
            Our Portfolio
          </h1>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
  <div className="flex flex-wrap justify-center gap-3">
    <button
      onClick={() => setActiveCategory('all')}
      className={`
        relative px-5 py-2.5
        rounded-lg
        font-medium
        overflow-hidden
        transform hover:scale-102
        transition-all duration-300
        ${activeCategory === 'all'
          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
          : 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 hover:text-amber-800'
        }
        focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        All Events
      </span>
      <div className="absolute inset-0 flex">
        <div className="w-1/3 h-full bg-white/10 -skew-x-12 group-hover:-translate-x-full transition-transform duration-1000" />
        <div className="w-1/3 h-full bg-white/10 -skew-x-12 group-hover:-translate-x-full transition-transform duration-1000 delay-100" />
        <div className="w-1/3 h-full bg-white/10 -skew-x-12 group-hover:-translate-x-full transition-transform duration-1000 delay-200" />
      </div>
    </button>
    
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => setActiveCategory(category.id)}
        className={`
          relative px-5 py-2.5
          rounded-lg
          font-medium
          overflow-hidden
          transform hover:scale-102
          transition-all duration-300
          ${activeCategory === category.id
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
            : 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 hover:text-amber-800'
          }
          focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          {category.name}
        </span>
        <div className="absolute inset-0 flex">
          <div className="w-1/3 h-full bg-white/10 -skew-x-12 group-hover:-translate-x-full transition-transform duration-1000" />
          <div className="w-1/3 h-full bg-white/10 -skew-x-12 group-hover:-translate-x-full transition-transform duration-1000 delay-100" />
          <div className="w-1/3 h-full bg-white/10 -skew-x-12 group-hover:-translate-x-full transition-transform duration-1000 delay-200" />
        </div>
      </button>
    ))}
  </div>
</div>
<div ref={sectionRef} className={`container mx-auto px-4 py-12 transition-all duration-1000 ease-out 
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-5'
          }`}> 
      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ChefHat className="text-white w-12 h-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.guests} Guests</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div> <Footer />
    </div>
  );
};

export default CateringPortfolio;
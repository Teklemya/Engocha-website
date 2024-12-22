import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import Selam from '../../../assets/Selam.jpg';
import Tesfaye from '../../../assets/tesfaye.jpeg';
import Dawit from '../../../assets/Thomas.jpeg';
const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: 'Selam Kebede',
      role: 'Head Chef',
      image: Selam,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Dawit Alemayehu',
      role: 'Executive Chef',
      image: Dawit,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Tesfaye Tadesse',
      role: 'Catering Manager',
      image: Tesfaye,
      linkedin: '#',
      instagram: '#'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
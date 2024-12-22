import Hero from './Hero/Hero';
import AboutUs from './AboutUs/AboutUs';
import Clients from './Clients/Clients';
import MeetTheTeam from './MeetTheTeam/MeetTheTeam';
import Footer from '../Footer/Footer';
import { MarqueeDemo } from './Testimonials/Testimonials';
// import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
       <AboutUs />
      <Clients />
      <MeetTheTeam />
      <MarqueeDemo />
      {/* <Testimonials /> */}
      <Footer /> 
    </div>
  );
};

export default Home;
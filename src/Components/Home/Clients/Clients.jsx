import "./Clients.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import UNICEFLogo from "../../../assets/UNICEF.png";
import UNLogo from "../../../assets/UN.png";
import WVLogo from "../../../assets/WorldVision.png";
import JVMLogo from "../../../assets/JVM.jpg";
import AU from "../../../assets/AU.jpeg";
import EU from "../../../assets/EU.jpeg";
import Companssion from "../../../assets/Companssion.png";
import giz from "../../../assets/Giz.jpeg";
import iom from "../../../assets/IOM.jpeg";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos shown at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div 
      className="container mx-auto px-4 py-12" // Add padding and center alignment
    >
      <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2>
      <Slider {...settings} className="max-w-7xl mx-auto">
        {/* <div>
          <img src={UNICEFLogo} alt="UNICEF" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div> */}
        <div>
          <img src={UNLogo} alt="United Nations" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={WVLogo} alt="World Vision" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={JVMLogo} alt="Jewish Voice Ministries" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={Companssion} alt="Companssion International" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={giz} alt="GIZ" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={AU} alt="African Union" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={EU} alt="European Union" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={iom} alt="IOM" className="w-40 h-40 object-contain mx-auto rounded-lg shadow-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default Clients;

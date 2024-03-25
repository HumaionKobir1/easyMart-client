import Aos from "aos";
import "./Curved.css";
import {
  SiJet,
  SiEmirates,
  SiBritishairways,
  SiUnitedairlines,
  SiAircanada,
} from "react-icons/si";
import { useEffect } from "react";

const Curved = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <>
      <div className="top-curved">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
          <path
            fill="#e2e8f0"
            fill-opacity="1"
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,160C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="curved-div lg:px-12 md:px-6 px-4">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1>Best Sale World Regions</h1>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <button>Africa</button>
          <button>Asia</button>
          <button>Australia</button>
          <button>Canada</button>
          <button>Europe</button>
          <button>Mexico</button>
          <button>Middle East</button>
          <button> South Africa</button>
          <button>United Kingdom</button>
          <button>United States</button>
          <button>Brazil</button>
          <button>Russia</button>
        </div>
        <div className="">
          <div
            className=""
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h1>Most Popular Customers Counties</h1>
          </div>
          <div
            className="AirLines md:flex  justify-center"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <button>
              <SiJet className="text-blue-700 mx-1" size={24} />{" "}
              <span>Africa</span>
            </button>
            <button>
              <SiEmirates className="text-red-700 mx-1" size={20} />{" "}
              <span>Emirates</span>
            </button>
            <button>
              <SiBritishairways className="text-red-700 mx-1" size={20} />{" "}
              <span>British Airways </span>
            </button>
            <button>
              <SiUnitedairlines className="text-blue-500 mx-1" size={20} />{" "}
              <span>United Airways </span>
            </button>
            <button>
              <SiAircanada className="text-red-600 mx-1" size={20} />{" "}
              <span>Canada </span>
            </button>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
          <path
            fill="#e2e8f0"
            fill-opacity="1"
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,160C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Curved;
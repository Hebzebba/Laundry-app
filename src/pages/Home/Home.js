import "./Home.css";
import HeroComponent from "../../components/heroComponent/HeroComponent";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({
      delay: 500,
    });
  });
  return (
    <div className="home-container">
      <section>
        <HeroComponent />
      </section>
      <section>
        <center>
          <p>Our Services</p>
        </center>
        <div className="our-service">
          <div
            className="service"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h3>Washing</h3>
            <img src="img/services_img/washing.jpg" alt="" />
          </div>
          <div
            className="service"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h3>Dry cleaning</h3>
            <img src="img/services_img/dry_cleaning.jpg" alt="" />
          </div>
          <div
            className="service"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h3>Leather cleaning</h3>
            <img src="img/services_img/leather.jpg" alt="" />
          </div>
          <div
            className="service pick_up"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h3>Pickup & delivery</h3>
            <img src="img/services_img/pick_up.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import "./HeroComponent.css";
const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h5 className="hero-header">LABMAS</h5>
        <p>
          This system is really useful for the company which wants the online
          booking laundry system.
        </p>
        <Link to="/about" className="hero-btn" style={{ color: "white" }}>
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default HeroComponent;

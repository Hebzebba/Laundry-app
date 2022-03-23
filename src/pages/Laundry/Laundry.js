import "./Laundry.css";
import MapBox from "../../components/map/Map";

const Laundry = () => {
  return (
    <div className="laundry-container">
      <span>Find near by location and click on marker for more details</span>
      <MapBox />
    </div>
  );
};

export default Laundry;

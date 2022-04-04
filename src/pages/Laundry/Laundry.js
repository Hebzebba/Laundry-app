import "./Laundry.css";
import MapBox from "../../components/map/Map";

const Laundry = () => {
  return (
    <div className="laundry-container">
      <small style={{ fontWeight: "bold" }}>
        Find near by location and click on marker for more details and booking
      </small>
      <MapBox />
    </div>
  );
};

export default Laundry;

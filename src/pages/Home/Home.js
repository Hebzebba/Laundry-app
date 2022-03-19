import Header from "../../components/header/Header";
import ItemsCard from "../../components/items/ItemsCard";
import MapBox from "../../components/map/Map";
import Type from "../../components/Type/Type";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-center-container">
        <div className="typical">
          <Type />
        </div>
      </div>

      <div className="items-container">
        <ItemsCard image={"img/iron.jpg"} title={"IRONING"} />
        <ItemsCard
          image={"img/washing_machine.png"}
          title={"WASHING"}
          width="50%"
        />
        <ItemsCard image={"img/wash_ironing.jpg"} title={"WASH & IRON"} />
        <ItemsCard image={"img/Dry clean.jpg"} title={"DRY CLEANING"} />
      </div>
      <div className="home-map-container">
        <div className="map-title">
          <h3>Available Locations</h3>
        </div>
        <div className="home-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
};

export default Home;

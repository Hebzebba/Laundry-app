import "./Map.css";
import { AddLocation, LocalAirport } from "@material-ui/icons";
import Map, { Marker } from "react-map-gl";

import "./Map.css";
import { map_cordinate } from "./map_data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const MapBox = () => {
  const authStatus = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const viewAndMakeOrder = () => {
    if (authStatus) {
      navigate("/details");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -0.25,
          latitude: 6.083333,
          zoom: 9,
        }}
        style={{
          width: "100vw",
          height: "80vh",
          color: "red",
          cursor: "pointer",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2wweHZ0d29uMGp0ZzNtc2R5bGFidHVoeCJ9.YT86gZa8hPmJ_XaC44qpNQ"
      >
        {map_cordinate.features.map((data, key) => (
          <Marker
            key={key}
            longitude={data.longitude}
            latitude={data.latitude}
            anchor="bottom"
            onClick={viewAndMakeOrder}
          >
            <AddLocation />
          </Marker>
        ))}
      </Map>
    </div>
  );
};
export default MapBox;

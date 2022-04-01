import { AddLocation, LocalAirport } from "@material-ui/icons";
import Map, { Marker } from "react-map-gl";

import "./Map.css";
import { map_cordinate } from "./map_data";
const MapBox = () => {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -0.25,
          latitude: 6.083333,
          zoom: 9,
        }}
        style={{ width: "100vw", height: "100vh", color: "red" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2wweHZ0d29uMGp0ZzNtc2R5bGFidHVoeCJ9.YT86gZa8hPmJ_XaC44qpNQ"
      >
        {map_cordinate.features.map((data, key) => (
          <Marker
            key={key}
            longitude={data.longitude}
            latitude={data.latitude}
            anchor="bottom"
            onClick={() => console.log(`Hello there ${data.longitude}`)}
          >
            <AddLocation />
          </Marker>
        ))}
      </Map>
    </div>
  );
};
export default MapBox;

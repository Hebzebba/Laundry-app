import { useState } from "react";
import Map from "react-map-gl";

const MapBox = () => {
  const [viewset, setVeiwSet] = useState({
    latitude: 6.083333,
    longitude: -0.25,
    zoom: 9,
  });

  return (
    <>
      <Map
        initialViewState={{ ...viewset }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2wweHZ0d29uMGp0ZzNtc2R5bGFidHVoeCJ9.YT86gZa8hPmJ_XaC44qpNQ"
      />
    </>
  );
};

export default MapBox;

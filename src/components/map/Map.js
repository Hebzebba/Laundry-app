import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
const MapBox = () => {
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2V0aGdyZWdvcnkiLCJhIjoiY2wweHZ0d29uMGp0ZzNtc2R5bGFidHVoeCJ9.YT86gZa8hPmJ_XaC44qpNQ";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
export default MapBox;

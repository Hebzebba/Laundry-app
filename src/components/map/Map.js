import "./Map.css";
import { IoLocationSharp } from "react-icons/io5";
import Map, { Marker } from "react-map-gl";

import "./Map.css";
import { map_cordinate } from "./map_data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCordinate } from "../../actions/Action";
const MapBox = () => {
  const authStatus = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewAndMakeOrder = (longitude, latitude) => {
    if (
      authStatus ||
      (localStorage.getItem("loginStat") && localStorage.getItem("email"))
    ) {
      localStorage.setItem("long", longitude);
      localStorage.setItem("lat", latitude);
      dispatch(getCordinate({ longitude, latitude }));
      navigate("/details", { replace: true });
    } else {
      navigate("/login", { replace: true });
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
            onClick={() => viewAndMakeOrder(data.longitude, data.latitude)}
          >
            <IoLocationSharp style={{ cursor: "pointer" }} size={25} />
          </Marker>
        ))}
      </Map>
    </div>
  );
};
export default MapBox;

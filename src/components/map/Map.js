import "./Map.css";
import { IoLocationSharp } from "react-icons/io5";
import Map, { Marker, Popup } from "react-map-gl";

import "./Map.css";
import { map_cordinate } from "./map_data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCordinate } from "../../actions/Action";
import { useEffect, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import axios from "axios";

const MapBox = () => {
  const [popUpData, setPopUpData] = useState();
  const [laundry_info, setLaundryInfo] = useState();
  const BASE_URL = "http://localhost:8080/api";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem(
          "user_pos_x",
          position.coords.longitude !== NaN ? position.coords.longitude : 0
        );
        localStorage.setItem(
          "user_pos_y",
          position.coords.latitude !== NaN ? position.coords.latitude : 0
        );
      });
    }

    axios
      .get(`${BASE_URL}/laundry-info`)
      .then((res) => {
        setLaundryInfo(res.data);
      })
      .catch((error) => error);
  }, []);
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
  const onHoverMarker = (event, id) => {
    if (event.type === "mouseenter") {
      let result = laundry_info.filter((item) => item.longitude === id);
      setPopUpData(result);
    }
  };

  const onMouseLeave = () => {
    setPopUpData(null);
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
        mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {laundry_info &&
          laundry_info.map((data, key) => (
            <div
              key={key}
              className="marker-container"
              onMouseEnter={(e) => onHoverMarker(e, data.longitude)}
              onMouseLeave={onMouseLeave}
            >
              <Marker
                longitude={data.longitude}
                latitude={data.latitude}
                anchor="bottom"
                onClick={() => viewAndMakeOrder(data.longitude, data.latitude)}
              >
                <IoLocationSharp style={{ cursor: "pointer" }} size={25} />
              </Marker>
            </div>
          ))}
        {popUpData && (
          <Popup
            longitude={popUpData[0].longitude}
            latitude={popUpData[0].latitude}
            anchor="top"
            className="popup"
            closeButton={false}
          >
            <center>
              <p>{popUpData[0].laundryName}</p>
              <small>{popUpData[0].info}</small>
            </center>
          </Popup>
        )}

        <Marker
          longitude={localStorage.getItem("user_pos_x")}
          latitude={localStorage.getItem("user_pos_y")}
          anchor="bottom"
        >
          <FcBusinessman style={{ cursor: "pointer" }} size={25} />
        </Marker>
      </Map>
    </div>
  );
};
export default MapBox;

import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import Map, { Marker } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";
import { IoBookSharp } from "react-icons/io5";
import { css } from "@emotion/react";
import { useAlert } from "react-alert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./Details.css";
import { createOrder, loading, end_loading } from "../../actions/Action";
import { sendEmail } from "../../components/emailjs/Notification";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const DetailsPage = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const load = useSelector((state) => state.loadingReducer);
  const cordinate = useSelector((state) => state.cordinateReducer);

  const [fName, setFname] = useState(localStorage.getItem("user_name"));
  const [phone, setPhone] = useState(localStorage.getItem("contact"));
  const [laundry, setLaundry] = useState("Washing");

  const date = new Date();
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const today = yyyy + "-" + mm + "-" + dd;
  const [startDate, setStartDate] = useState(today);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading());
    const response = await createOrder(
      localStorage.getItem("email"),
      fName,
      laundry,
      phone,
      startDate
    );
    if (response[0] === "Order booked") {
      dispatch(end_loading());
      alert.success("Booking successful");
      let message = `This the details of your order
      ====
      type || ${laundry}
      ====
      `;
      sendEmail(fName, localStorage.getItem("email"), message);
    }
  };

  return (
    <div className="details-container">
      <div className="details-banner"></div>
      <div className="details-content">
        <div className="details-map">
          <Map
            initialViewState={{
              longitude: cordinate.longitude || localStorage.getItem("long"),
              latitude: cordinate.latitude || localStorage.getItem("lat"),
              zoom: 9,
            }}
            style={{
              width: "100%",
              height: "100%",
              color: "red",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
          >
            <Marker
              longitude={cordinate.longitude || localStorage.getItem("long")}
              latitude={cordinate.latitude || localStorage.getItem("lat")}
              anchor="bottom"
            >
              <IoLocationSharp size={25} />
            </Marker>
          </Map>
        </div>

        <div className="booking-form">
          <form onSubmit={handleSubmit}>
            <h2>Make a Booking</h2>
            <div className="form-group">
              <label htmlFor="username">Full name</label>
              <div className="input-form">
                <input
                  type="text"
                  id="username"
                  required={true}
                  value={fName}
                  disabled
                  className="disable-hover-effect"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <div className="input-form">
                <PhoneInput
                  id="contact"
                  country={"gh"}
                  value={phone}
                  inputStyle={{ width: "100%" }}
                  containerStyle={{ width: "100%" }}
                  countryCodeEditable={false}
                  disabled={true}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="laundry_type">Laundry type</label>
              <div className="input-form">
                <select
                  name="laundry_type"
                  id="laundry_type"
                  className="select"
                  value={laundry}
                  onChange={(event) => setLaundry(event.target.value)}
                >
                  <option value="washing">Washing</option>
                  <option value="ironing">Ironing</option>
                  <option value="drycleainig">Dry-Cleaning</option>
                  <option value="wash_and_iron">Wash And Iron</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="pickUpDate">Pick up date</label>
              <div className="input-form">
                <input
                  id="pickUpDate"
                  type="date"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <button type="submit">
                <span style={{ padding: "20px" }}> Make a booking</span>
                <IoBookSharp size={24} />
              </button>
              <small>#Note: Pay on delivery</small>
              <div className="loader">
                <ScaleLoader
                  color={"#03e3fc"}
                  loading={load}
                  css={override}
                  size={50}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

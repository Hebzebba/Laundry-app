import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-img">
          <img src="img/contact-bg.jpg" alt="" width="100%" />
        </div>
        <div className="contact-text">
          <h1>Cleaning Experts Services</h1>
          <p>
            Cloth Wash | Dry Cleaning | Hotel Cleaning services | Ironing &
            Folding Bulk Cleaning
          </p>
          <span>
            <IoCallSharp />
            <small>0555214049</small> || <small>0543726905</small> ||{" "}
            <small>0556131652</small>
          </span>
          <p>
            {" "}
            <IoLocationSharp />
            Koforidua Technical University
          </p>

          <p>
            {" "}
            <IoLocationSharp />
            Koforidua All Nations University
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

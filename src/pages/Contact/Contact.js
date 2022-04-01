import { AddLocation, Phone } from "@material-ui/icons";
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
            <Phone />
            <small>0555214049</small> || <small>0543726905</small> ||{" "}
            <small>0556131652</small>
          </span>
          <p>
            {" "}
            <AddLocation />
            Koforidua Technical University
          </p>

          <p>
            {" "}
            <AddLocation />
            Koforidua All Nations University
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import "./About.css";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <div className="about-img">
            <img src="img/about-bg.jpg" alt="..." width="100%" />
          </div>
          <div className="about-text">
            <h1>LABMAS</h1>
            <p>
              The project is a web-based application that provides an online
              platform for laundry business to record their day-to-day
              transaction. In this project, the system user can dynamically
              create the list of services of their business provides such as
              washing clothes, ironing, and etc. The project stores all the list
              of pending and completed services. This project requires a user
              credential as the security feature of the system. The admin user
              can dynamically create a user group with some permission of
              his/her choice of which part can only be accessed by the created
              group. The system has a pleasant user interface and user-friendly
              functionalities.
            </p>
          </div>
        </div>

        <div className="managers">
          <div className="manager">
            <div className="manager-img">
              <img src="img/emma.png" alt="..." width="100%" />
            </div>
            <h3>ADDOTEY EMMANUEL</h3>
            <p>Vice President</p>
          </div>
          <div className="manager">
            <div className="manager-img">
              <img src="img/mili.png" alt="..." width="100%" />
            </div>
            <h3>AKOTO BLESS MILLICENT</h3>
            <p>Scretary</p>
          </div>

          <div className="manager">
            <div className="manager-img">
              <img src="img/defia.png" alt="..." width="100%" />
            </div>
            <h3>NYEMAKUO DEFIA</h3>
            <p>HR Manager</p>
          </div>
          <div className="manager">
            <div className="manager-img">
              <img src="img/inno.png" alt="..." width="100%" />
            </div>
            <h3>KAIZAH SAR INNOCENT</h3>
            <p>Chief Accountant</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

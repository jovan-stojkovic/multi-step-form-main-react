import { Link } from "react-router-dom";

const First = () => {
  return (
    <>
      <div className="page-container first-page-container">
        <div className="headline">
          <h1>Personal info</h1>
          <p className="desc">
            Please provide your name, email address, and phone number.
          </p>
        </div>

        <div className="form">
          <div className="form-text">
            <h5>Name</h5>
            <h6>This field is required</h6>
          </div>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>

        <div className="form">
          <div className="form-text">
            <h5>Email Address</h5>
            <h6>This field is required</h6>
          </div>
          <input type="text" placeholder="e.g. stephenking@lorem.com" />
        </div>

        <div className="form">
          <div className="form-text">
            <h5>Phone Number</h5>
            <h6>This field is required</h6>
          </div>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
        <div className="buttons first-page-buttons">
          <Link className="next-button" to="/second">
            Next Step
          </Link>
        </div>
      </div>
    </>
  );
};

export default First;

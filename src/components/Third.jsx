import { Link } from "react-router-dom";

const Third = () => {
  return (
    <>
      <div className="page-container third-page-container">
        <div className="headline">
          <h1>Pick add-ons</h1>
          <p className="desc">Add-ons help enhance your gaming experience.</p>
        </div>

        <div className="checkboxes">

          <div className="first-checkbox-container">
            <input type="checkbox" id="first-checkbox" />
            <label htmlFor="first-checkbox">
              <div className="text-info-checkbox">
                <h5>Online Service</h5>
                <p className="checkbox-desc">Access to multiplayer games</p>
              </div>
              <p className="checkbox-price">+$1/mo</p>
            </label>
          </div>

          <div className="second-checkbox-container">
            <input type="checkbox" id="second-checkbox" />
            <label htmlFor="second-checkbox">
              <div className="text-info-checkbox">
                <h5>Larger storage</h5>
                <p className="checkbox-desc">Extra 1TB of cloud save</p>
              </div>
              <p className="checkbox-price">+$2/mo</p>
            </label>
          </div>

          <div className="third-checkbox-container">
            <input type="checkbox" id="third-checkbox" />
            <label htmlFor="third-checkbox">
              <div className="text-info-checkbox">
                <h5>Customizable profile</h5>
                <p className="checkbox-desc">Custom theme on your profile</p>
              </div>
              <p className="checkbox-price">+$2/mo</p>
            </label>
          </div>
        </div>

        <div className="buttons third-page-buttons">
          <Link className="back-button" to="/second">
            Go Back
          </Link>
          <Link className="next-button" to="/fourth">
            Next Step
          </Link>
        </div>
      </div>
    </>
  );
};

export default Third;

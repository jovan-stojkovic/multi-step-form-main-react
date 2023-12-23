import { Link, NavLink } from "react-router-dom";

const Second = () => {
  return (
    <>
      <div className="page-container second-page-container">
        <div className="headline">
          <h1>Select your plan</h1>
          <p className="desc">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="options">
          <NavLink>
            <div className="option-container">
                <div className="img-container">
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/arcade.svg"
                alt="arcade"
              />
              </div>
              <p className="option-headline">Arcade</p>
              <p className="option-price">$9/mo</p>
            </div>
          </NavLink>

          <NavLink>
            <div className="option-container">
                <div className="img-container">
              <img
                src="https://www.iconbolt.com/iconsets/teenyicons-outline/game-controller-retro.svg"
                alt="advanced"
              />
              </div>
              <p className="option-headline">Advanced</p>
              <p className="option-price">$12/mo</p>
            </div>
          </NavLink>

          <NavLink>
            <div className="option-container">
                <div className="img-container">
              <img
                src="https://www.iconbolt.com/iconsets/bootstrap-icons/controller.svg"
                alt="pro"
              />
              </div>
              <p className="option-headline">Arcade</p>
              <p className="option-price">$15/mo</p>
            </div>
          </NavLink>
        </div>

        <div className="selector">
          <p className="left-choice">Monthly</p>
          <div className="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </div>
          <p className="right-choice">Yearly</p>
        </div>

        <div className="buttons second-page-buttons">
            <Link className="back-button" to="/">
            Go Back
            </Link>
          <Link className="next-button" to="/third">
            Next Step
          </Link>
        </div>

      </div>
    </>
  );
};

export default Second;

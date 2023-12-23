import { NavLink } from "react-router-dom";

const Side = () => {
  return (
    <div className="side-container">
      <div className="step-container">
        <NavLink to={"/"}>
          <div className="step-number">1</div>
        </NavLink>
        <div className="txt">
          <p className="step">STEP 1</p>
          <p className="head">YOUR INFO</p>
        </div>
      </div>

      <div className="step-container">
        <NavLink to={"/second"}>
          <div className="step-number">2</div>
        </NavLink>
        <div className="txt">
          <p className="step">STEP 2</p>
          <p className="head">SELECT PLAN</p>
        </div>
      </div>

      <div className="step-container">
        <NavLink to={"/third"}>
          <div className="step-number">3</div>
        </NavLink>
        <div className="txt">
          <p className="step">STEP 3</p>
          <p className="head">ADD-ONS</p>
        </div>
      </div>

      <div className="step-container">
        <NavLink to={"/fourth"}>
          <div className="step-number">4</div>
        </NavLink>
        <div className="txt">
          <p className="step">STEP 4</p>
          <p className="head">SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default Side;

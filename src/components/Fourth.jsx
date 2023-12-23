import { Link } from "react-router-dom";

const Fourth = () => {
  return (
    <>
      <div className="page-container fourth-page-container">
        <div className="headline">
          <h1>Finishing up</h1>
          <p className="desc">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="summary-container">
          <div className="main-summary">
            <div className="left-summary">
              <h4>Arcade (Yearly)</h4>
              <Link to="/second">Change</Link>
            </div>
          </div>
          <div className="rest-summary">
            <div className="rest">
              <p>Online service</p>
              <p className="price">+$1/mo</p>
            </div>
            <div className="rest">
              <p>Larger storage</p>
              <p className="price">+$2/mo</p>
            </div>
          </div>
        </div>
        <div className="total">
            <p className="total-p">
                Total (per month)
            </p>
            <p className="total-price">
                $12/mo
            </p>
        </div>

        <div className="buttons second-page-buttons">
            <Link className="back-button" to="/third">
            Go Back
            </Link>
          <Link className="next-button" to="/summary">
            Confirm
          </Link>
        </div>

      </div>
    </>
  );
};

export default Fourth;

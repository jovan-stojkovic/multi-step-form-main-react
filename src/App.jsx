import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.scss";
import Side from "./components/Side";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <Side />
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/fourth" element={<Fourth />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

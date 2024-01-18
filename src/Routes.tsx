import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";

const Routes: React.FC = () => {
  return (
    <>
      <div className="">
        <Router>
          <ReactRoutes>
            <Route path="/" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </ReactRoutes>
        </Router>
      </div>
    </>
  );
};
export default Routes;

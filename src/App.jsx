import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.scss';
import HomePage from "./HomePage"
import Impressum from "./Impressum"
import Datenschutz from "./Datenschutz"
import Mixer from "./Mixer"
import Layout from "./Layout";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/mixer" element={<Mixer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

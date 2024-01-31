import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Formulari from './containers/Form';
import Component from './containers/Button';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/formulari" exact element={<Formulari />} />
        <Route path="/component" exact element={<Component />} />
      </Routes>
    </Router>
  );
};

export default App;

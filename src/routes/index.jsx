import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Private from "../pages/Private";

const AplicationRoutes = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact index element={<Private />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default AplicationRoutes;

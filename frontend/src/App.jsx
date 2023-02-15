//React Libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//css files
import "./assets/css/bootstrap.min.scss";
import "./assets/css/style.scss";
//Pages
import Mainpage from "./pages/Mainpage";
//Community
import Africa from "./pages/Community/Africa";
import Asia from "./pages/Community/Asia";
import Europe from "./pages/Community/Europe";
import NorthAmerica from "./pages/Community/NorthAmerica";
import SouthAmerica from "./pages/Community/SouthAmerica";
import Oceania from "./pages/Community/Oceania";
import Antarctica from "./pages/Community/Antarctica";
//Reservations
import Activities from "./pages/Reservations/Activities";
import CarRental from "./pages/Reservations/CarRental";
import Flight from "./pages/Reservations/Flight";
import Hotel from "./pages/Reservations/Hotel";
import VacationPackages from "./pages/Reservations/VacationPackages";
//Map
import Map from "./pages/RoutingMap/Map";
//Components
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import ForgotPw from './component/forgotPw';
import Write from "./component/bulletinBoard/write.jsx";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Mainpage />} />
            <Route exact path="/Community/Africa" element={<Africa />} />
            <Route exact path="/Community/Asia" element={<Asia />} />
            <Route exact path="/Community/Europe" element={<Europe />} />
            <Route exact path="/Community/NorthAmerica" element={<NorthAmerica />} />
            <Route exact path="/Community/SouthAmerica" element={<SouthAmerica />} />
            <Route exact path="/Community/Oceania" element={<Oceania />} />
            <Route exact path="/Community/Antarctica" element={<Antarctica />} />
            <Route exact path="/Reservations/Activities" element={<Activities />} />
            <Route exact path="/Reservations/CarRental" element={<CarRental />} />
            <Route exact path="/Reservations/Flight" element={<Flight />} />
            <Route exact path="/Reservations/Hotel" element={<Hotel />} />
            <Route exact path="/Reservations/VacationPackages" element={<VacationPackages />} />
            <Route exact path="/RoutingMap/Map" element={<Map />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route exact path="/SignIn" element={<SignIn />} />
            <Route exact path="/ForgotPw" element={<ForgotPw />} />
            <Route exact path="/Write" element={<Write />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
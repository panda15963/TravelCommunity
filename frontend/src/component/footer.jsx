//React Libraries
import { React, Component } from "react";
import { Link } from "react-router-dom";
//css files
import "../assets/css/font-awesome.min.scss";
import "../assets/css/bootstrap.min.scss";
import "../assets/css/style.scss";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="navbar navbar-default">
          <section id="footer_page_2">
            <div className="container">
              <div className="row">
                <div className="footer_page_2 clearfix">
                  <div className="col-sm-3">
                    <div className="footer_page_2_inner">
                      <h4>Social Network</h4>
                      <ul className="social-network social-circle">
                        <li>
                          <Link className="icoFacebook" onClick={() => window.open('http://www.templateonweb.com', '_blank')} title="Facebook">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => window.open('https://twitter.com/', '_blank')} className="icoTwitter" title="Twitter">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => window.open('https://www.google.com/', '_blank')} className="icoGoogle" title="Google +">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={() => window.open('https://linkedin.com/', '_blank')} className="icoLinkedin" title="Linkedin">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                      <h5>
                        <Link to="/">
                          <i className="fa fa-tree"></i>TRAVEL COMMUNITY{" "}
                        </Link>
                      </h5>
                      <p>
                        © 2013 Your Website Name. All Rights Reserved | Design by &nbsp;
                        <button className="footerButton" onClick={() => window.open('https://www.templateonweb.com/', '_blank')}>Template On Web</button>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="footer_page_2_inner_1">
                      <h4>Community</h4>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Community/Africa">Africa</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Community/Antarctica">Antarctica</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Community/Asia">Asia</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Community/Oceania">Oceania</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Community/Europe">Europe</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Community/NorthAmerica">North America</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Community/SouthAmerica">South America</Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="footer_page_2_inner_1">
                      <h4>Reservation</h4>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Reservations/Hotel">Hotel</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Reservations/Flight">Flight</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Reservations/CarRental">Car Rental</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Reservations/Ridesharing">Ridesharing</Link>
                      </p>
                      <p>
                        <i className="fa fa-chevron-circle-right"></i>
                        <Link to="/Reservations/Activities">Activities & Tour</Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="footer_page_2_inner_2 clearfix">
                      <h4>Contact</h4>
                      <h1>1-234-567-8900</h1>
                      <p>info@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </>
    );
  }
};

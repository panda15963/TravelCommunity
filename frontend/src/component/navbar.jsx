//React Libraries
import { React, Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//css files
import "../assets/css/bootstrap.min.scss";
import "../assets/css/style.scss";
export default class Menubar extends Component {
  render() {
    return (
      <>
        <section id="header">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <Dropdown className="navbar-brand heading_tag">
                <Link to="/">
                  <i className="fa fa-tree"></i> TRAVEL COMMUNITY
                </Link>
              </Dropdown>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown dropdown-large">
                    <Dropdown>
                      <Dropdown.Toggle variant="prime" className="tag_menu" href='/'>
                        Home
                      </Dropdown.Toggle>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="prime" className="tag_menu">
                        Community &nbsp;
                        <b className="caret"></b>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="tag_menu">
                        <Dropdown.Item className="tag_menu" href="/Community/Africa">Africa<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Community/Antarctica">Antarctica<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Community/Asia">Asia<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Community/Europe">Europe<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Community/NorthAmerica">North America<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Community/Oceania">Oceania<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Community/SouthAmerica">South America<br /></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="prime" className="tag_menu">
                        Reservation &nbsp;
                        <b className="caret"></b>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="tag_menu">
                        <Dropdown.Item className="tag_menu" href="/Reservations/Activities">Activities & Tour<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Reservations/CarRental">Car Rental<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Reservations/Flight">Flight<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Reservations/Hotel">Hotel<br /></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="tag_menu" href="/Reservations/VacationPackages">VacationPackages<br /></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="prime" className="tag_menu" href="/RoutingMap/Map">
                        Map
                      </Dropdown.Toggle>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="prime" className="dropdown-toggle tag_menu" href="/SignIn">
                        Sign In
                      </Dropdown.Toggle>
                    </Dropdown>
                  </li>  
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="prime" className="dropdown-toggle tag_menu" href="/SignUp">
                        Sign Up
                      </Dropdown.Toggle>
                    </Dropdown>
                  </li>                  
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </>
    );
  }
};
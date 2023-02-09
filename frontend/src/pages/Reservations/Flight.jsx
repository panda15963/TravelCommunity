//React Libraries
import { React, Component } from "react";
import { Link } from "react-router-dom";
//css files
import "../../assets/css/bootstrap.min.scss";
import "../../assets/css/style.scss";
//component files
import Menubar from "../../component/navbar";
import Footer from "../../component/footer";
export default class Flight extends Component {
    render() {
        return (
            <div>
                <Menubar />
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/reservation/reservation_flight.jpg`} alt="" className="img-responsive" />
                    <h1 className="main-text">
                        Flight Pages<br />
                        This is the Flight Page where you find all the Flight.
                    </h1>
                </div>
                <section id="list">
                    <div className="container">
                        <div className="row">
                            <div className="list_1 clearfix">
                                <div className="list_1_right clearfix">
                                    <div className="list_1_right_2 clearfix">
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.skyscanner.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/skyscanner.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.skyscanner.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.kiwi.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/kiwi.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.kiwi.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.hophs.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/hophs.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.hophs.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list_1_right_2 clearfix">
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.cheapoair.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/cheapoair.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.cheapoair.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.expedia.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/expedia.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.expedia.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.priceline.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/priceline.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.priceline.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list_1_right_2 clearfix">
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.bookingbuddy.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/bookingbuddy.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.bookingbuddy.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.edreams.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/edreams.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.edreams.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.momondo.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/momondo.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.momondo.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list_1_right_2 clearfix">
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.flighthub.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/flighthub.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.flighthub.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.airfarewatchdog.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/airfarewatchdog.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.airfarewatchdog.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.condor.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/flight/condor.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.condor.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
};
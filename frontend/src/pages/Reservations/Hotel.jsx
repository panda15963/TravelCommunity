//React Libraries
import { React, Component } from "react";
import { Link } from "react-router-dom";
//css files
import "../../assets/css/bootstrap.min.scss";
import "../../assets/css/style.scss";
//component files
import Menubar from "../../component/navbar";
import Footer from "../../component/footer";
export default class Hotel extends Component {
    render() {
        return (
            <div>
                <Menubar />
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/reservation/reservation_hotel.jpg`} alt="" className="img-responsive" />
                    <h1 className="main-text">
                        Hotel Pages<br />
                        This is the Hotel Page where you find all the Hotel.
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
                                                        <Link onClick={() => window.open('https://www.booking.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/booking.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Booking</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.booking.com', '_blank')}>Book</Link>
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
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/expedia.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Expedia</h6>
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
                                                        <Link onClick={() => window.open('https://www.hotels.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/hotels.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Hotels</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.hotels.com', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.hophs.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/hophs.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Hophs</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.hophs.com', '_blank')}>Book</Link>
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
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/priceline.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Priceline</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.priceline.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.kayak.co.kr', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/kayak.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Kayak</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.kayak.co.kr', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.airbnb.co.kr', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/airbnb.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Airbnb</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.airbnb.co.kr', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.tripAdvisor.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/tripAdvisor.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Trip Advisor</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.tripAdvisor.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.agoda.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/agoda.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Agoda</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.agoda.com', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.trip.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/trip.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Trip</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.trip.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.bookingbuddy.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/bookingbuddy.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Booking Buddy</h6>
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
                                                        <Link onClick={() => window.open('https://www.orbitz.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/hotel/orbitz.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Orbitz</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.orbitz.com', '_blank')}>Book</Link>
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
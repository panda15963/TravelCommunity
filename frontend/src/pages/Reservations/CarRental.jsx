//React Libraries
import { React, Component } from "react";
import { Link } from "react-router-dom";
//css files
import "../../assets/css/bootstrap.min.scss";
import "../../assets/css/style.scss";
//component files
import Menubar from "../../component/navbar";
import Footer from "../../component/footer";
export default class CarRental extends Component {
    render() {
        return (
            <div>
                <Menubar />
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/reservation/reservation_carrental.jpg`} alt="" className="img-responsive" />
                    <h1 className="main-text">
                        Car Rental Pages<br />
                        This is the Car Rental Page where you find all the Car Rental.
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
                                                        <Link onClick={() => window.open('https://www.europcar.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/europcar.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.europcar.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.rentalcars.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/rentalCars.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.rentalcars.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://hophs.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/hophs.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://hophs.com/', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.skyscanner.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/skyscanner.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.skyscanner.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.priceline.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/priceline.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.priceline.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.enterprise.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/enterprise.jpg`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.enterprise.com/', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.budget.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/budget.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.budget.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.avis.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/avis.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.avis.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.hertz.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/hertz.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.hertz.com', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.nationalcar.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/national.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.nationalcar.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.sixt.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/sixt.jpg`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.sixt.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.alamo.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/carrentals/alamo.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Lacinia Arcu Resort</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.alamo.com', '_blank')}>Book</Link>
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
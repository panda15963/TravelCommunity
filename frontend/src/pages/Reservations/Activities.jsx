//React Libraries
import { React, Component } from "react";
import { Link } from "react-router-dom";
//css files
import "../../assets/css/bootstrap.min.scss";
import "../../assets/css/style.scss";
//component files
import Menubar from "../../component/navbar";
import Footer from "../../component/footer";
export default class Activities extends Component {
    render() {
        return (
            <div>
                <Menubar />
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/reservation/reservation_activities.jpg`} alt="" className="img-responsive" />
                    <h1 className="main-text">
                        Activities Pages<br />
                        This is the Activities Page where you find all the Activities.
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
                                                        <Link onClick={() => window.open('https://www.tripspoint.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/tripspoint.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Tripspoint</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.tripspoint.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.viator.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/viator.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Viator</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.viator.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('http://www.compassholidays.net/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/compassHolidays.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Compass Holidays</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('http://www.compassholidays.net/', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.contiki.com/en-sg', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/contiki.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Contiki</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.contiki.com/en-sg', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.explore.co.uk/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/explore.jpg`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Explore</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.explore.co.uk/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.citypass.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/cityPass.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>City Pass</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.citypass.com/', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.isango.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/isango.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Isango</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.isango.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://evanevanstours.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/evanEvansTours.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Evan Evans Tours</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://evanevanstours.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.peek.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/peek.jpg`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Peek</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.peek.com/', '_blank')}>Book</Link>
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
                                                        <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/headout.png`} alt="" />
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <Link onClick={() => window.open('https://www.headout.com/', '_blank')}>
                                                            <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Headout</h6>
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.headout.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.contexttravel.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/context.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Context</h6>
                                                    </div>airb
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.contexttravel.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.ticketcity.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/activities/ticketcity.jpg`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Ticket City</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.ticketcity.com/', '_blank')}>Book</Link>
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
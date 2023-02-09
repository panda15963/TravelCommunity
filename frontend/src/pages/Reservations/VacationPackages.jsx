//React Libraries
import { React, Component } from "react";
import { Link } from "react-router-dom";
//css files
import "../../assets/css/bootstrap.min.scss";
import "../../assets/css/style.scss";
//component files
import Menubar from "../../component/navbar";
import Footer from "../../component/footer";
export default class VacationPackages extends Component {
    render() {
        return (
            <div>
                <Menubar />
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/reservation/reservation_vacationpackages.jpg`} alt="" className="img-responsive" />
                    <h1 className="main-text">
                        Vacation Packages Pages<br />
                        This is the Vacation Packages Page where you find all the Vacation Packages.
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
                                                        <Link onClick={() => window.open('https://vacations.united.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/unitedVacations.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>UnitedVacations</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://vacations.united.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://intrepidtravel.com/', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/intrepid.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Intrepid</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://intrepidtravel.com/', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.southwestvacations.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/southwestVacations.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Southwest Vacations</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.southwestvacations.com', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.applevacations.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/applevacations.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Apple Vacations</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.applevacations.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.icelolly.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/icelolly.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Icelolly</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.icelolly.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.disneyholidays.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/disneyholidays.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Disney Holidays</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.disneyholidays.com', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.greatvaluevacations.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/greatvaluevacations.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Great Value Vacations</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.greatvaluevacations.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.funjet.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/funjetVacations.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Funjet Vacations</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.funjet.com', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.insightvacations.com', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/insightVacation.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Insight Vacation</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.insightvacations.com', '_blank')}>Book</Link>
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
                                                        <Link onClick={() => window.open('https://www.compassholidays.net', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/compassHolidays.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Compass Holidays</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.compassholidays.net', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.virginholidays.co.uk', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/virginHolidays.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Virgin Holidays</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.virginholidays.co.uk', '_blank')}>Book</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 space_left">
                                            <div className="list_1_right_2_inner clearfix">
                                                <div className="grid clearfix">
                                                    <figure className="effect-ming">
                                                        <Link onClick={() => window.open('https://www.cosmos.co.uk', '_blank')}>
                                                            <img src={`${process.env.PUBLIC_URL}/img/reservation/vacationpackages/cosmos.png`} alt="" />
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="list_1_right_2_inner_1 clearfix">
                                                    <div className="col-sm-8">
                                                        <h6 style={{ textAlign: 'center', fontSize: "18px", fontFamily: "sans-serif" }}>Cosmos</h6>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>
                                                            <Link onClick={() => window.open('https://www.cosmos.co.uk', '_blank')}>Book</Link>
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
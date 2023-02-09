//React Libraries
import { React, Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Link } from "react-router-dom";
//css files
import 'pure-react-carousel/dist/react-carousel.es.css';
import "../assets/css/bootstrap.min.scss";
import "../assets/css/style.scss";
//Features for Main Pages
import Menubar from "../component/navbar";
import Footer from "../component/footer";
export default class Mainpage extends Component {
	render() {
		return (
			<div>
				<Menubar />
				<div>
					<img src={`${process.env.PUBLIC_URL}/img/main/travel.jpg`} alt="" className="img-responsive" />
					<h1 className="main-text">
						Welcome to Travel Community!<br />
						Let's share travel experiences.
					</h1>
				</div>
				<section id="offers">
					<div className="container">
						<div className="row">
							<div className="offers clearfix">
								<div className="col-sm-3">
									<div className="offers_left">
										<h2>Continents<br /> Stories</h2>
										<p>Read various stories from users' experiences stories! Also, learn and get tips from it!</p>
									</div>
								</div>
								<div className="col-sm-9">
									<div className="offers_right">
										<div id="Carousel" className="carousel slide">
											<CarouselProvider naturalSlideWidth={1200} naturalSlideHeight={500} totalSlides={7}>
												<Slider>
													<Slide className="col-sm-4">
														<Link to="/Community/Africa">
															<img src={`${process.env.PUBLIC_URL}/img/main/continents/africa.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Africa</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Community/Antarctica">
															<img src={`${process.env.PUBLIC_URL}/img/main/continents/antarctica.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Antarctica</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Community/Asia">
															<img src={`${process.env.PUBLIC_URL}/img/main/continents/asia.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Asia</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Community/Europe">
															<img src={`${process.env.PUBLIC_URL}/img/main/continents/europe.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Europe</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Community/NorthAmerica">
															<img src={`${process.env.PUBLIC_URL}/img/main/continents/na.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>North America</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Community/Oceania">
															<img src={`${process.env.PUBLIC_URL}/img/main/continents/oceania.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Oceania</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Community/SouthAmerica">
															<img src={`${process.env.PUBLIC_URL}/img/main/continents/sa.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>South America</h6>
															</div>
														</Link>
													</Slide>
												</Slider>
												<ButtonBack className="left carousel-control control_1">{'<'}</ButtonBack>
												<ButtonNext className="right carousel-control control_1">{'>'}</ButtonNext>
											</CarouselProvider>
										</div>
									</div>
								</div>
							</div>
							<div className="offers clearfix border_none_1">
								<div className="col-sm-3">
									<div className="offers_left">
										<h2>Visit <br />Reservation Sites</h2>
										<p>Visit those sites which reserve for flights, hotels, cars and more!</p>
									</div>
								</div>
								<div className="col-sm-9">
									<div className="offers_right">
										<div id="Carousel" className="carousel slide">
											<CarouselProvider naturalSlideWidth={1200} naturalSlideHeight={500} totalSlides={5}>
												<Slider>
													<Slide className="col-sm-4">
														<Link to="/Reservations/Activities">
															<img src={`${process.env.PUBLIC_URL}/img/main/reservations/activity.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Activities and Tour</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Reservations/CarRental">
															<img src={`${process.env.PUBLIC_URL}/img/main/reservations/car_rental.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Car Rental Sites</h6>
															</div>
														</Link>

													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Reservations/Flight">
															<img src={`${process.env.PUBLIC_URL}/img/main/reservations/flight.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Cheap Flight Sites</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Reservations/Hotel">
															<img src={`${process.env.PUBLIC_URL}/img/main/reservations/hotel.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Hotel Booking Sites</h6>
															</div>
														</Link>
													</Slide>
													<Slide className="col-sm-4">
														<Link to="/Reservations/VacationPackages">
															<img src={`${process.env.PUBLIC_URL}/img/main/reservations/route.jpg`} alt="" style={{ maxWidth: '100%' }} />
															<div className="item_inner clearfix">
																<h6 style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif' }}>Ridesharing</h6>
															</div>
														</Link>
													</Slide>
												</Slider>
												<ButtonBack className="left carousel-control control_1">{'<'}</ButtonBack>
												<ButtonNext className="right carousel-control control_1">{'>'}</ButtonNext>
											</CarouselProvider>
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
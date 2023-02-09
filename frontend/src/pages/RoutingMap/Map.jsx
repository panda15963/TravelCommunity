//React Libraries
import { React, Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet'
//css files
import "../../assets/css/bootstrap.min.scss";
import "../../assets/css/style.scss";
import "leaflet/dist/leaflet.css";
//component files
import Menubar from "../../component/navbar";
import Footer from "../../component/footer";
import Routing from "./RoutingMachine";
const mapStyle = {
    width: "80%",
    height: "100vh",
    marginLeft: "10%",
    marginBotton: "10%"
}
const Markers = new Icon({
    iconUrl: require("../../assets/img/map/marker.png"),
    iconSize: [20, 20],
    shadowSize: [41, 41]
})
export default class ReactMap extends Component {
    state = {
        lat: 37.4885,
        lng: 127.1153,
        zoom: 13,
        isMapInit: false
    };
    saveMap = map => {
        this.map = map;
        this.setState({
            isMapInit: true
        });
    };
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <Menubar />
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/pages/map.jpg`} alt="" className="img-responsive" />
                    <h1 className="main-text">
                        World Map Pages<br />
                        This is the World Map Page where you want to travel.
                    </h1>
                </div><br />
                <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={true} style={mapStyle} ref={this.saveMap}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={Markers}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Routing />
                </MapContainer>
                <Footer />
            </div>
        );
    }
};
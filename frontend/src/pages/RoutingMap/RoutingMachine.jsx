import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import R from "leaflet-control-geocoder";
const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      // L.latLng(37.4885, 127.1153),
      // L.latLng(37.44920691954807, 126.45351596386773)
    ],
    lineOptions: {
      styles: [{ color: "blue", weight: 4 }]
    },
    show: false,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    geocoder: R.nominatim(),
    showAlternatives: false,
    altLineOptions: {
      styles: [{ color: "black", opacity: 0.15, weight: 9 }]
    },
    
    createMarker: function () {
      return null;
    }
  });
  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);
export default RoutingMachine;
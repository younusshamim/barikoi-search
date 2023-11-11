import black from "../assets/blackLocation.svg";
import red from "../assets/redLocation.svg";
import green from "../assets/greenLocation.svg";
import blue from "../assets/blueLocation.svg";
import { Icon } from "leaflet";

const blackLocation = new Icon({
  iconUrl: black,
  iconSize: [35, 35], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
const redLocation = new Icon({
  iconUrl: red,
  iconSize: [35, 35], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
const greenLocation = new Icon({
  iconUrl: green,
  iconSize: [35, 35], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
const blueLocation = new Icon({
  iconUrl: blue,
  iconSize: [35, 35], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export { blackLocation, redLocation, greenLocation, blueLocation };

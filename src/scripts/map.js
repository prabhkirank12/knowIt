import dojo from "dojo";
const Map = require("esri/Map");
const MapView = require("esri/views/MapView");
 
export default function(){
    var map = new Map({
            basemap: "topo-vector"
    });

    var view = new MapView({
            container: "viewDiv",
        map: map,
        center: [-118.71511,34.09042],
        zoom: 11
    });
};

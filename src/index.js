import "./styles/index.scss";
import dropdown from "./scripts/dropdown";
import placeImage from "./scripts/image";
import modal from "./scripts/modal";
import globe from "./scripts/map";
import home from "./scripts/title";


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dropdown-btn").addEventListener('click', dropdown);
    document.getElementById("dropdown").addEventListener('click', e => e.stopPropagation());
    document.getElementById("play-bttn").addEventListener('click', globe);
    document.getElementById("play-bttn").addEventListener('click', e => e.stopPropagation());
    document.getElementById("title").addEventListener('click', home);
    document.getElementById("title").addEventListener('click', e => e.stopPropagation());
    document.getElementById
    document.getElementById(body);
    placeImage();
    modal();

})
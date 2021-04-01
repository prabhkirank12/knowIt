import "./styles/index.scss";
import "./styles/modalData.scss";
import placeImage from "./scripts/image";
import modal from "./scripts/modal";
import globe from "./scripts/map";
import home from "./scripts/title";
import modeChange from "./scripts/modeChange";
import modalData from "./scripts/modalData";


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("play-bttn").addEventListener('click', globe);
    document.getElementById("play-bttn").addEventListener('click', e => e.stopPropagation());
    document.getElementById("title").addEventListener('click', home);
    document.getElementById("title").addEventListener('click', e => e.stopPropagation());
    document.getElementById(body);
    placeImage();
    modal();
    modeChange();
    modalData;
})
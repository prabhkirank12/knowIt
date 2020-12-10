import "./styles/index.scss";
import dropdown from "./scripts/dropdown";
import placeImage from "./scripts/image";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dropdown-btn").addEventListener('click', dropdown);
    document.getElementById("dropdown").addEventListener('click', e => e.stopPropagation());
    document.getElementById(body);
    placeImage();
})
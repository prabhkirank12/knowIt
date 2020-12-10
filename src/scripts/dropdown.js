function dropdown(e){
    document.getElementById("dropdown").classList.toggle("show");
    document.addEventListener('click', clickOff)
    e.stopPropagation();
}
            
const clickOff = (e) => {
    document.getElementById("dropdown").classList.remove("show");
    document.removeEventListener('click', clickOff)
}

export default dropdown;
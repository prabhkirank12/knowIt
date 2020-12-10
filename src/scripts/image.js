import landmark from "../images/landmarks.png";

function buildAssetPath(imgSrc) {
    return `./dist/${imgSrc}`;
}

function placeImage() {

    //the text on top of the image
    const p = document.createElement("p");
    p.classList.add('text');
    const newContent = document.createTextNode("Do you know your landmarks?");
    const currntDiv = document.getElementById("content");
    p.appendChild(newContent)
    currntDiv.appendChild(p);

    //to add the image
    const img = document.createElement("img");
    img.src = buildAssetPath(landmark);
    document.getElementById("content").appendChild(img);


    //Movement animation
    const card = document.querySelector("#content");
    const container = document.querySelector("#container");
    //Items
    const image = document.querySelector('img');
    const ptag = document.querySelector('.text');

    //Moving Animation Event
    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })

    //Animate In
    container.addEventListener('mouseenter', e => {
        card.style.transition = 'none';
        //Popout
        image.style.transform = "translateZ(150px)";
        ptag.style.transform = "translateZ(150px)";
    })
    
    //Animate Out
    container.addEventListener('mouseleave', e => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        image.style.transform = "translateZ(0px) ";
        ptag.style.transform = "translateZ(0px) ";
    })
}

export default placeImage;
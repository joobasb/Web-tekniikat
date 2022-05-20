//Adding style to some bootstrap columns
let aboutStyle = document.querySelector(".aboutme");

//about me styling
function addAboutStyle () {
    aboutStyle.classList.add("aboutmestyle")
}

function removeAboutStyle () {
    aboutStyle.classList.remove("aboutmestyle");;
}

aboutStyle.addEventListener("mouseover", addAboutStyle);
aboutStyle.addEventListener("mouseleave", removeAboutStyle);


//Link page events


let divs = document.querySelector(".rym");

divs.addEventListener("mouseover", highLight);

function highLight () {
    divs.classList.toggle("aboutmestyle");
}


//random testing

let pic = document.getElementById("omakuva");

function flipOver () {
    pic.classList.add("flipped")
}

pic.addEventListener("mouseover", flipOver);
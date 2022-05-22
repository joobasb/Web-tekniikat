//bodytheme changer

function changeBody () {
    document.body.classList.toggle("bodytheme2");
}

//about me styling
let aboutStyle = document.querySelector(".aboutme");


function addAboutStyle () {
    if (document.body.classList == "bodytheme2") {
        aboutStyle.classList.add("aboutmestyle2")
    } else {
    aboutStyle.classList.add("aboutmestyle")
}
}

function removeAboutStyle () {
    aboutStyle.classList.remove("aboutmestyle");
    aboutStyle.classList.remove("aboutmestyle2");
}

aboutStyle.addEventListener("mouseover", addAboutStyle);
aboutStyle.addEventListener("mouseleave", removeAboutStyle);


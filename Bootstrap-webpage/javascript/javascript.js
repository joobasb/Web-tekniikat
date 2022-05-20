//Adding style to some bootstrap columns
let aboutStyle = document.querySelector(".aboutme");
let linkStyles = document.querySelector(".linkpage");

//about me styling
function addAboutStyle () {
    aboutStyle.classList.add("aboutmestyle")
    linkStyles.classList.add("aboutmestyle")
}

function removeAboutStyle () {
    aboutStyle.classList.remove("aboutmestyle");
    linkStyles.classList.remove("aboutmestyle");
}

aboutStyle.addEventListener("mouseover", addAboutStyle);
aboutStyle.addEventListener("mouseleave", removeAboutStyle);


linkStyles.addEventListener("mouseover", addAboutStyle);
linkStyles.addEventListener("mouseleave", removeAboutStyle);


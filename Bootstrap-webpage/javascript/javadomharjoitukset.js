// //let firstLi = document.querySelector("li");
// //let allLi = document.querySelectorAll("li");

// /*let i = 0;
// let elem;
// for (elem of allLi) {
//     elem.textContent = i++;
// }
// */

// //a
// let elem = document.getElementById("content");
// elem = document.querySelector("#content");
// console.log(elem.tagName);

// //b
// elem = document.querySelector(".basic");
// console.log(elem.tagName);

// //c
// let liElems = document.querySelectorAll("li");
// //liElems = document.getElementsByTagName("li");

// for (elem of liElems) {
//     console.log(elem.textContent);
// }

// //d
// let bodyDesc = document.querySelectorAll("body *");
// for (elem of bodyDesc) {
//     console.log(elem.nodeName);
// }

// //e
// let articleDesc = document.querySelectorAll("article p");
// for (elem of articleDesc) {
//     console.log(elem.textContent);
// }

// //f
// let liElems = document.querySelectorAll("li");
// for (elem of liElems){
//     elem.textContent = "John Doe"
// }

//Toinen
// let ul = document.querySelector("#days");
// let spessu = ul.querySelector(".special");
// let n = document.createElement("li");
// n.textContent = "lisäys";

//poista
//spessu.remove();

//lisää ehdoin
// if(spessu.nextElementSibling){
//     ul.insertBefore(n, spessu.nextElementSibling);
// } else {
//     ul.appendChild(n);
// }

//lisää tekstisisältö(node)
//let li = document.createTextNode("Tekstiä");

// //lisää listaan
// let li = document.createElement("li");
// li.textContent="la";
// ul.appendChild(li);

// //A
// document.querySelector("h2").textContent="let's manipulate some dom again";

// //B
// let content = document.getElementById("content");
// content.lastElementChild.remove();

// //C
// let article = document.querySelector("article");

// let fChild = article.firstElementChild;
// let lChild = article.lastElementChild;

// let temp = fChild.textContent;
// fChild.textContent = lChild.textContent;

// lChild.textContent = temp;

// //D¨
// let ul = document.createElement("ul");
// for (let i = 1; i < 6; i++) {
//     let li = document.createElement("li");    
//     li.textContent = "Number " + i;
//     ul.appendChild(li);
// }

// content.appendChild(ul);

// //E
// function createRow(colType, col1, col2){
//     let tr = document.createElement("tr");
//     //let cols = [document.createElement(colType),document.createElement(colType)]
//     let c1 = document.createElement(colType);
//     let c2 = document.createElement(colType);
//     c1.textContent = col1;
//     c2.textContent = col2;
//     tr.append(c1,c2);
//     return tr;

// }

// let table = document.createElement("table");
// table.appendChild(createRow("th", "last name", "first name"));
// table.appendChild(createRow("td", "john", "doe"));
// content.appendChild(table);


// //F
// let contentChildren = document.querySelectorAll("#content>*");
// /**@type{Element} */
// let elem;
// for(elem of contentChildren){
//     let hr = document.createElement("hr");
    
//     elem.parentElement.insertBefore(hr, elem);

// }




///EVENTHARJOITUKSET



// let h = document.getElementById("header");

//lisää tai poistaa tilanteesta riippuen (joko remove tai add, "togglataan tilojen välillä")
//h.classList.toggle("important");
// h.classList.add("important");
// h.classList.add("strong");

// h.classList.remove("important");

// let button = document.getElementById("header");



//div.addEventListener("click", doSome);
//  button.addEventListener("mouseover", doSome);
//  button.addEventListener("mouseout", doSome);

// function doSome(){
//     ("strong");
// }


// //harjoitus 1
// let h1 = document.querySelector("h1");
// h1.classList.add("special");

// h1.style.width = "400px";


// //harjoitus 2 a b
// let p = document.querySelector("p");
// //p.addEventListener("mouseenter", function(){p.classList.toggle("textcolor")} )
// p.addEventListener("mouseenter", changeColor )
// p.addEventListener("mouseleave", changeColor )
// p.addEventListener("click", changeBg)


// function changeColor (){
//     p.classList.toggle("textcolor");
// }

// function changeBg (){
//     p.classList.toggle("textback");
// }

// //harjoitus 3
// let sotu = document.getElementById("sotu");
// let inputx = document.getElementById("xname");
// sotu.addEventListener("input", checkValidity);
// //inputx.addEventListener("input", checkValidity);
// /**
//  * 
//  * @param {Event} event 
//  */
// function checkValidity(event) {
//     let elem = event.currentTarget;
//     let text = elem.value;
//     if (text.length == 11){
//         elem.classList.remove("invalid");
//     } else {
//         elem.classList.add("invalid");

//     }
// }


/**
 * 
 * @param {Event} event 
 *

/function doSome(event) {
    button.classList("strong");
} */



//FORMEJA 

// let form = document.querySelector("form");

// form.addEventListener("submit", sendData);

// /**
//  * 
//  * @param {Event} event 
//  */
// function sendData(event) {
//     //estää sivun päivittämisen
//     event.preventDefault();

//     let formData = new FormData(form);

//     console.log(formData.get("fname"));
//     console.log(formData.get("lname"));
//     console.log(formData.get("age"));

// }



// document.querySelector("form").addEventListener("submit", calc);


// /**
//  * 
//  * @param {Event} event 
//  */
// function calc(event){
//     event.preventDefault();

//     let formData = new FormData(event.currentTarget);

//     let num1 = formData.get("num1");
//     let num2 = formData.get("num2");

//     let sum = Number(num1) + Number(num2);
//     let sub = Number(num1) - Number(num2);

//     let res = document.getElementById("result");

//     let arit = formData.get("arit");

//     if(arit == "sum"){
//         res.textContent = "Lukujen summa on " + sum;
//     } else {
//         res.textContent = "Lukujen erotus on " + sub;
//     }
    
// }
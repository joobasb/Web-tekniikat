/*let h1 = document.querySelector("h1");


h1.classList.add("special");

h1.style.width = "400"; */



/*JAVASCRIPT OBJECT LITERALS */

/* object with two properties
let car = {platenumber: "OOP-001", currentSpeed: 120}

let car2 = {platenumber: "ABC-123", currentSpeed: 90}

car2.currentSpeed = 40;

document.getElementById("printhere").innerHTML = "car with platenumber: " + car.platenumber + " current speed: " + car.currentSpeed + "<br>" + "car with platenumber: " + car2.platenumber + " current speed: " + car2.currentSpeed;
*/

/*RECIPE

let recipes = [
{name: "kinkkukiusaus", cookingtime: 60, ingredients: ["kinkku", "kiusaus"]},
{name: "nakkikeitto", cookingtime: 40, ingredients: ["nakki", "keitto"]},
{name: "kalapuikot ja ranskalaiset", cookingtime: 15, ingredients: ["kalapuikot", "ranskalaiset", "ketsuppi"]}
];

let element = document.getElementById("printRecipe");

let html = "<table><tr><th>name</th><th>cookingtime</th><th>ingredients</th></tr>";
recipes.forEach(recipe => {
    html += "<tr>";
    html += "<td>" + recipe.name + "</td>"
    html += "<td>" + recipe.cookingtime + "</td>"
    html += "<td>" + recipe.ingredients + "</td>"
    element.innerHTML += "</tr>";
});

html += "</table>";
element.innerHTML = html;
*/

//REST API
/*
fetch('https://yesno.wtf/api')

  .then(response => response.json())

  .then(data => { 
      document.getElementById('print-here').innerHTML = "<h2>" + data.answer + "</h2>";
      document.getElementById('print-here').innerHTML += '<img src="' + data.image + ' "/>'
  }
      
      )
*/

fetch('http://futuramaapi.herokuapp.com/api/quotes')

.then(response => response.json())
.then(data => {
    let ul = document.createElement('ul');
    data.forEach(quote => {
        let li = document.createElement('li');
        li.innerHTML = quote.quote;
        ul.appendChild(li);
    });
    document.getElementById("print-here").appendChild(ul);
}
);
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => document.getElementById('restapiviewer').innerHTML =
    `<img src= ${data.message}>`
    );
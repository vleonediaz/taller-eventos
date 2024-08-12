document.addEventListener('DOMContentLoaded', () => {

const miDiv = document.getElementById("miDiv");
const miBoton = document.querySelector("button");

miDiv.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

miBoton.addEventListener('click', function(event) {
    event.stopPropagation();
});

});
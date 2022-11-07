const button = document.querySelector("#btn");

button.addEventListener("click", ()=> {
    alert("click en el boton")
})

// JQuery 

$(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})
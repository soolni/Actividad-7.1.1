const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function () {
    alert("Hola!");
    event.stopPropagation();
});

const myDiv = document.getElementById("myDiv");
myDiv.addEventListener("click", function () {
    alert('Hola! Soy el DIV');
});
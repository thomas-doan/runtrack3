document.addEventListener("DOMContentLoaded", (e) => {
    let value = document.getElementById("compteur");

    let button = document.getElementById("button");

    function addone() {
        value.textContent++;
    }

    button.addEventListener("click", (e) => {
        addone();
    });
});
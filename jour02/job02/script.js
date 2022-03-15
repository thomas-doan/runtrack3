document.addEventListener("DOMContentLoaded", (e) => {
    let value = document.querySelector("article");
    value.style.display = "none";

    function showhide() {
        if (value.style.display == "none") {
            value.style.display = "block";
        } else {
            value.style.display = "none";
        }
    }

    let button = document.getElementById("button");

    button.addEventListener("click", (e) => {
        showhide();
    });
});
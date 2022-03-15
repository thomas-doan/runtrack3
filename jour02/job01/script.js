document.addEventListener("DOMContentLoaded", (e) => {
    function citation() {
        const value = document.getElementById("citation").textContent;
        const button = document.getElementById("button");

        button.addEventListener("click", (e) => {
            console.log(value);
        });
    }

    citation();
});
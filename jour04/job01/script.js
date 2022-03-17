document.addEventListener("DOMContentLoaded", (event) => {
    const url = "expression.txt";
    let button = document.getElementById("button");
    let para = document.createElement("p");
    let main = document.querySelector("body");

    button.addEventListener("click", function() {
        fetch(url)
            .then((response) => response.text())
            .then((textString) => {
                main.append(para);
                para.append(textString);
                console.log(textString);
            });
    });
});
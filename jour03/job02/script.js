$(document).ready(function() {
    let btn = $("#button");
    let img1 = $("#img1");
    let img2 = $("#img2");
    let img3 = $("#img3");
    let img4 = $("#img4");
    let img5 = $("#img5");
    let img6 = $("#img6");

    let resultatvalide = ["1", "2", "3", "4", "5", "6"];
    let result = [];

    btn.click(function() {
        $(function() {
            var parent = $("#melangees");
            var divs = parent.children();
            while (divs.length) {
                parent.append(
                    divs.splice(Math.floor(Math.random() * divs.length), 1)[0]
                );
            }
        });
    });

    $("img").on("click", function() {
        let valeur = $(this).attr("id");

        result.push($(this).attr("id"));

        let range = $("#rangees");
        $("#rangees").append($("#" + valeur));
        console.log(result);

        if (result.length == 6) {
            if (JSON.stringify(result) == JSON.stringify(resultatvalide)) {
                let div = document.querySelector(".container");
                let p = document.createElement("p");
                p.textContent = "vous avez gagné";
                div.appendChild(p);
            } else {
                let div = document.querySelector(".container");
                let p = document.createElement("p");
                p.textContent = "vous avez perdu";
                div.appendChild(p);
            }
        }
    });
});
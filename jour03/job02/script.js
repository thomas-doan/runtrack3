$(document).ready(function() {
    let btn = $("#button");
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
                let pc = document.createElement("p");
                pc.textContent = "vous avez gagné";
                div.appendChild(pc);
                $("p").css("color", "blue");
            } else {
                let div = document.querySelector(".container");
                let pc = document.createElement("p");
                pc.textContent = "vous avez perdu";
                div.appendChild(pc);
                $("p").css("color", "red");
            }

            $(this).removeClass("clic");
        }
    });
});
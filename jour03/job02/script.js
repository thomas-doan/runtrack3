$(document).ready(function() {
    let btn = $("#button");
    let img1 = $("#img1");
    let img2 = $("#img2");
    let img3 = $("#img3");
    let img4 = $("#img4");
    let img5 = $("#img5");
    let img6 = $("#img6");

    let resultatvalide = [1, 2, 3, 4, 5];
    let result = [];

    console.log($("#rangees")[0]);
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
        let range = $("#rangees");
        $("#rangees").append($("#" + valeur));
    });
});
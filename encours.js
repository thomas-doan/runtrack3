$(document).ready(function() {
    let btn = $("#button");
    let resultat = $("#rangees");

    let test = $("melangees");

    console.table(test);

    $("test img").each(function(index, value) {
        console.log(index + ": " + $(this).text(value));
    });

    /*  for (let index = 0; index < 5; index++) {
     console.log($("#melangees img:req(" + index + ")"));
 } */

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

    $("img").click(function() {
        let value = $(this).attr("src");
        console.table(value);
    });
});
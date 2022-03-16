$(document).ready(function() {
    let btn = $("#button");
    let img1 = $("#img1");
    let img2 = $("#img2");
    let img3 = $("#img3");
    let img4 = $("#img4");
    let img5 = $("#img5");
    let img6 = $("#img6");

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
    img1.click(function() {
        jQuery("#img1").detach().appendTo("#rangees");
    });
    img2.click(function() {
        jQuery("#img2").detach().appendTo("#rangees");
    });
    img3.click(function() {
        jQuery("#img3").detach().appendTo("#rangees");
    });
    img4.click(function() {
        jQuery("#img4").detach().appendTo("#rangees");
    });
    img5.click(function() {
        jQuery("#img5").detach().appendTo("#rangees");
    });
    img6.click(function() {
        jQuery("#img6").detach().appendTo("#rangees");
    });
});
$(document).ready(function() {
    let btn = $("#button");
    let btn2 = $("#button2");
    let p = $("p");
    let html = $("html");
    p.hide();

    btn.eq(0).click(function() {
        p.show("slow");
    });
    btn2.eq(0).click(function() {
        p.hide("fast");
    });
});
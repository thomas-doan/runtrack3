document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", (e) => {
        var footer = document.querySelector("footer");
        let pourcent = Math.round((100 * window.scrollY) / 4096);

        footer.setAttribute("style", "--couleur:#FF" + pourcent + pourcent);
    });
});
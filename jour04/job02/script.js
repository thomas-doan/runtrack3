document.addEventListener("DOMContentLoaded", (event) => {
    const url = "text.json";

    function jsonValueKey(test) {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                return console.log(response[test]);
            });
    }

    jsonValueKey("name");
});
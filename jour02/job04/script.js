document.addEventListener("DOMContentLoaded", (e) => {
    const textarea = document.getElementById("keylogger");

    document.addEventListener("keydown", (event) => {
        if (textarea.focus) {
            var letter2 = event.key;
            textarea.value = textarea.value + letter2;
        } else {
            var letter = event.key;
            textarea.value = textarea.value + letter;
        }
    });
});
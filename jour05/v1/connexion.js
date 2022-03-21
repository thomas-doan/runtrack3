document.addEventListener("DOMContentLoaded", (event) => {
    let p = document.querySelectorAll("p");
    let email = document.getElementById("email");
    var password = document.getElementById("password");
    var connexion = document.getElementById("connexion");

    let regexLowerCase = /[a-z]{1,}/;
    let regexUpperCase = /[A-Z]{1,}/;
    let regexNumber = /[0-9]{1,}/;
    let check_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    password.addEventListener("keyup", function() {
        if (this.value.length < 8) {
            p[1].style.color = "red";
        } else {
            p[1].style.color = "green";
        }

        if (regexUpperCase.test(this.value) == false) {
            p[1].style.color = "red";
        } else {
            p[1].style.color = "green";
        }

        if (regexLowerCase.test(this.value) == false) {
            p[1].style.color = "red";
        } else {
            p[1].style.color = "green";
        }
    });

    email.addEventListener("focusout", function() {
        if (check_email.test(this.value) == true) {
            p[0].textContent = "";
        }
    });

    email.addEventListener("keyup", function() {
        if (check_email.test(this.value) == false) {
            p[0].textContent = "Votre email est incorrect";
            p[0].style.color = "red";
        } else {
            p[0].textContent = "Format valide";
            p[0].style.color = "blue";
        }
    });

    email.addEventListener("focusout", function() {
        if (check_email.test(this.value) == true) {
            p[0].textContent = "";
        }
    });

    connexion.addEventListener("click", function() {
        let check_time = new FormData();

        fd.append("email", email.value);
        fd.append("password", password.value);
        fetch("traitement_connexion.php", { method: "POST", body: check_time })
            .then((response) => response.text())
            .then((data) => console.log(data));
    });
});
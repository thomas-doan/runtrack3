document.addEventListener("DOMContentLoaded", (event) => {
    // controle regex
    let regexLowerCase = /[a-z]+/;
    let regexChiffre = /[0-9]+/;
    let regexUpperCase = /[A-Z]+/;
    let regexMail = /.+\@.+\..+/;
    // variable initialisé
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let balise_p = document.querySelector("#erreur");

    nom.addEventListener("keyup", function() {
        if (
            regexLowerCase.check(this.value) == false ||
            regexUpperCase.check(this.value) == false
        ) {
            if (balise_p.innerHTML.length == 0) {
                balise_p.innerHTML =
                    "Votre nom doit contenir une minuscule et une majuscule";
            }
        } else {
            balise_p.innerHTML = "";
        }
    });

    // controle prenom
    prenom.addEventListener("keyup", function() {
        if (
            regexLowerCase.check(this.value) == false ||
            regexUpperCase.check(this.value) == false
        ) {
            if (balise_p.innerHTML.length == 0) {
                balise_p.innerHTML =
                    "Votre prenom doit contenir  minuscule et  majuscule !";
            }
        } else {
            balise_p.innerHTML = "";
        }
    });

    email.addEventListener("keyup", function() {
        if (regexMail.check(this.value) == false) {
            if (balise_p.innerHTML.length == 0) {
                balise_p.innerHTML = "Votre adresse mail est incorect";
            }
        } else {
            balise_p.innerHTML = "";
        }
    });

    password.addEventListener("keyup", function() {
        if (
            regexUpperCase.check(this.value) == false ||
            regexLowerCase.check(this.value) == false ||
            regexChiffre.check(this.value) == false
        ) {
            if (balise_p.innerHTML.length == 0) {
                balise_p.innerHTML =
                    "Votre mot de passe doit contenir au moins Une majuscule, une minuscule et un chiffre";
            }
        } else {
            balise_p.innerHTML = "";
        }
    });
});
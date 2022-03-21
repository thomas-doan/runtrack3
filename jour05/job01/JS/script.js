document.addEventListener("DOMContentLoaded", (event) => {
    // INSCRIPTION////////////////////////////////
    let p_erreur = document.getElementById("erreur");
    let formInscription = document.forms["inscription"];
    let validation = document.getElementById("validation");

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

    console.log(validation);

    nom.addEventListener("keyup", function() {
        if (
            regexLowerCase.test(this.value) == false ||
            regexUpperCase.test(this.value) == false
        ) {
            if (p_erreur.innerHTML.length === 0) {
                p_erreur.innerHTML =
                    "Votre nom doit contenir une minuscule et une majuscule";
            }
        } else {
            p_erreur.innerHTML = "";
        }
    });

    // controle prenom
    prenom.addEventListener("keyup", function() {
        if (
            regexLowerCase.test(this.value) == false ||
            regexUpperCase.test(this.value) == false
        ) {
            if (p_erreur.innerHTML.length === 0) {
                p_erreur.innerHTML =
                    "Votre prenom doit contenir  minuscule et  majuscule !";
            }
        } else {
            p_erreur.innerHTML = "";
        }
    });

    email.addEventListener("keyup", function() {
        if (regexMail.test(this.value) === false) {
            if (p_erreur.innerHTML.length === 0) {
                p_erreur.innerHTML = "Votre adresse mail est incorect";
            }
        } else {
            p_erreur.innerHTML = "";
        }
    });

    password.addEventListener("keyup", function() {
        if (
            regexUpperCase.test(this.value) == false ||
            regexLowerCase.test(this.value) == false ||
            regexChiffre.test(this.value) == false
        ) {
            if (p_erreur.innerHTML.length === 0) {
                p_erreur.innerHTML =
                    "Votre mot de passe doit contenir au moins Une majuscule, une minuscule et un chiffre";
            }
        } else {
            p_erreur.innerHTML = "";
        }
    });

    validation.addEventListener("click", function() {
        let formData = new FormData(formInscription);

        fetch("../Controllers/InscriptionController.php", {
                method: "POST",
                /*                 headers: {
                                                                                "Content-type": "application/json",
                                                                            }, */
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    });
});
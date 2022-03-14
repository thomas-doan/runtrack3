function afficherjourssemaines() {
    let jourssemaines = [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche",
    ];

    let nbr = jourssemaines.length;

    for (let i = 0; i < nbr; i++) {
        console.log(jourssemaines[i]);
    }
}

afficherjourssemaines();
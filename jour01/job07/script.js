function jourtravail(param) {
    let date1 = new Date(param);
    let holiday = [
        "1/1/2020",
        "13/4/2020",
        "1/5/2020",
        "8/5/2020",
        "21/5/2020",
        "1/6/2020",
        "14/7/2020",
        "15/8/2020",
        "1/11/2020",
        "11/11/2020",
        "25/12/2020",
    ];

    let holiday2 = [
        "1 janvier 2020",
        "13 avril 2020",
        "1 mai 2020",
        "8 mai 2020",
        "21 mai 2020",
        "1 juin 2020",
        "14 juillet 2020",
        "15 aout 2020",
        "1 novembre 2020",
        "11 novembre 2020",
        "25 decembre 2020",
    ];

    let year = date1.getFullYear();
    year = (year - 0).toString();

    let day = date1.getDate().toString();
    let month = date1.getMonth().toString();

    let formatDate = day + "/" + month + "/" + year;

    let nbr = holiday.length;

    for (let i = 0; i < nbr; i++) {
        if (holiday[i] == formatDate) {
            if ("15/8/2020" == formatDate || "1/11/2020" == formatDate)
                console.log("Non, " + holiday2[i] + " est un week-end");
            else console.log("Le " + holiday2[i] + " est un jour férié");
        }
    }
}

let date = new Date(2020, 11, 11);
jourtravail(date);
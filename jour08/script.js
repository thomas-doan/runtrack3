function sommenombrespremiers(param1, param2) {
    let checkNbPremiers = [param1, param2];
    let nbr = checkNbPremiers.length;

    for (let i = 0; i < nbr; i++) {
        if (checkNbPremiers[i] < 2) return false;
        for (var j = 2; j < nbr; j++)
            if (nbr % i === 0) return false;
    }

    console.log(param1 + param2);
}

sommenombrespremiers(34, 36);
function tri() {
    let tab = [5, 3, 9, 8, 12, 2, 16, 6, 14, 15];

    {
        for (var i = 0; i < tab.length; i++) {
            var min = i;
            for (var j = i + 1; j < tab.length; j++) {
                if (tab[j] < tab[min]) {
                    min = j;
                }
            }
            var tmp = tab[i];
            tab[i] = tab[min];
            tab[min] = tmp;
        }
    }
    console.log(tab);
}

tri();
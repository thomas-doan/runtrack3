window.addEventListener("DOMContentLoaded", (event) => {
    datalist = document.querySelector("datalist");
    if (window.fetch) {
        let table = [];
        let table_list = [];
        let liste = fetch("pokemon.json")
            .then((response) => response.json())
            .then((response) => {
                Object.keys(response).forEach(function(key) {
                        let type = response[key].type;
                        table.push(type);

                        for (let index = 0; index < table[key].length; index++) {
                            let result = table[key][index];
                            table_list.push(result);
                        }
                    }),
                    (final_list = [...new Set(table_list)]);
                for (let i = 0; i < final_list.length; i++) {
                    let final_value_list = final_list[i];
                    let newOption = document.createElement("option");
                    newOption.innerHTML = final_value_list;
                    datalist.appendChild(newOption);
                }
            })
            .catch((error) => alert("Erreur : " + error));
    } else {}
});
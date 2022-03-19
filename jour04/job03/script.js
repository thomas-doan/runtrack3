window.addEventListener("DOMContentLoaded", (event) => {
    datalist = document.querySelector("datalist");
    let typess = document.querySelector("#type");
    let btn = document.querySelector("#trier");
    let table = [];
    let table_list = [];

    function create_pokemon(obj) {
        let tbl = document.querySelector("table");
        let tr = document.createElement("tr");

        tr.id = obj.name["french"];
        tbl.append(tr);
        let tdName = document.createElement("td");
        tdName.innerHTML = obj.name["french"];
        let tdId = document.createElement("td");
        tdId.innerHTML = obj.id;
        let tdType = document.createElement("td");

        if (obj.type[1] == undefined) {
            tdType.innerHTML = obj.type[0];
        } else {
            tdType.innerHTML = obj.type[0] + " " + " " + obj.type[1];
        }

        tr.append(tdName);
        tr.append(tdId);
        tr.append(tdType);
    }

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
            btn.addEventListener("click", function() {
                var type_select = type.value;
                var id_pokemon = id.value;

                response.forEach((pokemon) => {
                    if (pokemon.type.includes(type_select)) {
                        create_pokemon(pokemon);
                    } else if (pokemon.id == id_pokemon) {
                        create_pokemon(pokemon);
                    } else {
                        let error = document.querySelector("#error");
                        error.innerHTML = "le pokemon n'existe pas !";
                    }
                });
            });
        })
        .catch((error) => alert("Erreur : " + error));
});
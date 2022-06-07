export default function crearTabla(vec) {
    const table = document.createElement("table");
    table.appendChild(crearCabecera(vec[0]));
    table.appendChild(crearCuerpo(vec));

    return table;
}

function crearCabecera(elemento){
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    $thead.appendChild($tr);

    Object.keys(elemento).forEach(key => {
        if(key !== "id") {
            const $th = document.createElement("th");
            //$th.appendChild(document.createTextNode(key));
            $th.textContent = key;
            $tr.appendChild($th);
        }
    })

    return $thead;
}

function crearCuerpo(vec){
    const $tbody = document.createElement("tbody");
    vec.forEach((element, index) => {
        const $tr = document.createElement("tr");
        $tbody.appendChild($tr);
        Object.keys(element).forEach(key => {
            const $td = document.createElement("td");
            if(key === "id"){
                $tr.dataset.id = index;
            } else {
                $td.textContent = element[key];
                $tr.appendChild($td);
            }
        })
    });
    return $tbody;
}
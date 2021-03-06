export default function crearTabla(vec) {
    const table = document.createElement("table");
    table.classList.add("table", "table-hover");
    table.appendChild(crearCabecera(vec[0]));
    table.appendChild(crearCuerpo(vec));
    return table;
}

function crearCabecera(elemento){
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    $thead.appendChild($tr);
    $thead.classList.add("thead-dark")
    //$tr.setAttribute("class", "cabecera");

    Object.keys(elemento).forEach(key => {
        if(key !== "id") {
            const $th = document.createElement("th");
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
                $tr.dataset.id = element[key];
            } else {
                $td.textContent = element[key];
                $tr.appendChild($td);
            }
        })
    });
    return $tbody;
}
export default function crearTabla(vec){
    //Buscar la key de cada elemento, colocarlas en el thead en una th y despues cada dato ponerlo en la tbody con td's.
    
    const $table = document.createElement("table")
    $table.appendChild(crearCabecera(vec[0]));
    $table.appendChild(crearCuerpo(vec));

    return $table;
}

function crearCabecera(elemento){
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    $tr.setAttribute("class", "cabecera");
    $thead.appendChild($tr);
    // Object.keys(elemento).forEach(key => {
    //     console.log(key);
    // });

    for (const key in elemento) {
        if(key !== 'id' ){
            const $th = document.createElement("th");
            $th.appendChild(document.createTextNode(key));
            //$th.textContent = key;
            $tr.appendChild($th);
        }
    }

    //$thead.appendChild($tr);
    return $thead;
}

function crearCuerpo(vec){
    const $tbody = document.createElement("tbody");

    vec.forEach((e, index) => {
        const $tr = document.createElement("tr");

        $tr.classList.add(index % 2 ? "colorPar" : "colorImpar", "pointer");

        // $tr.addEventListener("click", (e) => {
        //     console.log(e.target.parentElement.dataset.id);
        // })
        
        Object.keys(e).forEach(key => {
            if(key === 'id'){
                //$tr.setAttribute("data-id", e[key])
                $tr.dataset.id=e[key];
            } else {
                const $td = document.createElement("td");
                $td.textContent = e[key];
                $tr.appendChild($td);
            }
        })
        $tbody.appendChild($tr);
    });

    return $tbody;
}


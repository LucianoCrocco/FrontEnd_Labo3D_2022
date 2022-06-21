export default function crearCarta(elemento){
    const article = document.createElement("article");
    const titulo = document.createElement("h3");
    const transaccion = document.createElement("h3");
    const descripcion = document.createElement("h3");
    const precio = document.createElement("h3");
    const puertas = document.createElement("h3");
    const kilometros = document.createElement("h3");
    const potencia = document.createElement("h3");
    const button = document.createElement("Button");

    article.appendChild(titulo);
    article.appendChild(document.createElement("p"));
    article.appendChild(transaccion);
    article.appendChild(document.createElement("p"));
    article.appendChild(descripcion);
    article.appendChild(document.createElement("p"));
    article.appendChild(precio);
    article.appendChild(document.createElement("p"));
    article.appendChild(puertas);
    article.appendChild(document.createElement("p"));
    article.appendChild(kilometros);
    article.appendChild(document.createElement("p"));
    article.appendChild(potencia);
    article.appendChild(document.createElement("p"));
    article.appendChild(button);

    let i = 1;
    Object.keys(elemento).forEach(key => {
        if(key !== "id"){
            console.log(key)
            article.children[i].textContent = elemento[key];
            i += 2;
        }
    })

    article.classList.add("card")


    titulo.textContent = "Titulo";
    transaccion.textContent = "Transaccion";
    descripcion.textContent =  "Descripcion";
    precio.textContent = "Precio";
    puertas.textContent = "Puertas";
    kilometros.textContent = "Kilometros";
    potencia.textContent = "Potencia";
    button.textContent = "Mirar Articulo"

    
    return article;
}
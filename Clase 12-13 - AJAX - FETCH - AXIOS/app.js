const URL = "http://localhost:3001/personas";

/* GET */
const cargarSpinner = () => {
    const divSpinner = document.querySelector(".spinner");
    if(!divSpinner.hasChildNodes()){
        const spinner = document.createElement("img");
        spinner.setAttribute("src", "./Rocket.gif");
        spinner.setAttribute("alt", "Icono spinner");
        divSpinner.appendChild(spinner);
    }
}

const eliminarSpinner = () => {
    const divSpinner = document.querySelector(".spinner");
    while(divSpinner.hasChildNodes()){
        divSpinner.removeChild(divSpinner.firstChild);
    }   
}

const getPersonasAjax = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            } else {
                console.error(xhr.status, xhr.statusText);
            }
            eliminarSpinner();
        } else {
            cargarSpinner();
        }
    });
    xhr.open("GET", url);
    xhr.send();
}

const getPersonasFetch = (url) => {
    cargarSpinner();
    fetch(url)
    .then((res) => {
        //console.log(res)
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(data => console.log(data))
    .catch(err => {console.error(err.status, err.statusText)})
    .finally(() => eliminarSpinner())
}

const getPersonasAxios = (url) => {
    cargarSpinner();

    axios.get(url)
    .then((res) => console.log(res.data))
    .catch((err) => {console.error(err.message)})
    .finally(() => eliminarSpinner())
}

const getPersonaAjax = (url, id) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () =>{
        //console.log("Hola");
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);

                console.log(data);
            } else {
                console.error(xhr.status, xhr.statusText);
            }
            eliminarSpinner();
        } else {
            cargarSpinner();
        }
    });
    //La configuracion del servidor.
    //xhr.open("GET", `${url}/${id}`);
    xhr.open("GET", `${url}?id=${id}`);
    xhr.send();
}

const getPersonaFetch = (url, id) => {
    cargarSpinner();
    fetch(`${url}/${id}`)
    .then((res) => {
        //console.log(res)
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(data => console.log(data))
    .catch(err => {console.error(err.status, err.statusText)})
    .finally(() => eliminarSpinner())
}

const getPersonaAxios = (url,id) => {
    cargarSpinner();

    axios.get(`${url}/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => {console.error(err.message)})
    .finally(() => eliminarSpinner())
}

const getPersonasFetchAsync = async (url) => {
    try {
        cargarSpinner();
        const res = await fetch(url);
        if(!res.ok){
            throw Promise.reject(res);
        }
        const data = await res.json();
        console.log(data);
    } catch(err){
        err.catch(() => console.log(err))
        console.error(err.status, err.statusText);
    } finally {
        eliminarSpinner();
    }
}

const getPersonasAxiosAsync = async (url) => {

    try {
        cargarSpinner();
        const res = await axios.get(url);
        console.log(res);
    }catch(err){
        console.error(err.message)
    }
    finally{
        eliminarSpinner()
    }
}

const getPersonasAjaxPromise = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () =>{
            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    const data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    reject({status:xhr.status, statusText : xhr.statusText});
                }
            }
        });
        xhr.open("GET", url);
        xhr.send();
    })
}

const ajaxAsync = async (url) => {
    try {
        cargarSpinner();
        const data = await getPersonasAjaxPromise(url);
        console.log(data);
    }catch(err) {
        console.log(err);
    }finally {
        eliminarSpinner();
    }
}

/* POST */
const newPersona = {
    nombre: "Michael",
    edad: 54,
    genero: "M"
}
const postPersonaAjax = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                alert(`${data.id} ${data.nombre} ${data.edad} ${data.genero}`);
            } else {
                console.error(xhr.status, xhr.statusText);
            }
            eliminarSpinner();
        } else {
            cargarSpinner();
        }
    });
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf8")
    xhr.send(JSON.stringify(newPersona)); // Se lo mando como texto
}

const postPersonaFetch = (url) => {
    cargarSpinner();
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newPersona)
    }
    fetch(url, options)
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(data => console.log(data))
    .catch(err => {console.error(err.status, err.statusText)})
    .finally(() => eliminarSpinner())
}

const postPersonaAxios = (url) => {
    cargarSpinner();
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        data : JSON.stringify(newPersona)
    }
    axios.post(url, options)
    .then((res) => console.log(res.data))
    .catch((err) => {console.error(err.message)})
    .finally(() => eliminarSpinner())
}

/* DELETE */
const deletePersonaAjax = (url, id) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            } else {
                console.error(xhr.status, xhr.statusText);
            }
            eliminarSpinner();
        } else {
            cargarSpinner();
        }
    });
    xhr.open("DELETE", `${url}/${id}`);
    xhr.send();
}

/* PUT */
const putPersonaAjax = (url) => {
    const updatedPersona = {
        id : 2,
        nombre: "Sergio",
        edad: 22,
        genero: "M"
    }
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () =>{
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            } else {
                console.error(xhr.status, xhr.statusText);
            }
            eliminarSpinner();
        } else {
            cargarSpinner();
        }
    });
    xhr.open("PUT", `${url}/${updatedPersona.id}`);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(updatedPersona));
}
/* GET - EVENTOS */
document.getElementById("btn1").addEventListener("click", () => {
    getPersonasAjax(URL);
})

document.getElementById("btn2").addEventListener("click", () => {
    getPersonasFetch(URL);
})

document.getElementById("btn3").addEventListener("click", () => {
    getPersonasAxios(URL);
})

document.getElementById("btn4").addEventListener("click", () => {
    getPersonaAjax(URL, 5);
})

document.getElementById("btn5").addEventListener("click", () => {
    getPersonaFetch(URL, 4);
})

document.getElementById("btn6").addEventListener("click", () => {
    getPersonaAxios(URL,3);
})

document.getElementById("btn7").addEventListener("click", () => {
    getPersonasFetchAsync(URL);
})

document.getElementById("btn8").addEventListener("click", () => {
    getPersonasAxiosAsync(URL);
})

document.getElementById("btn9").addEventListener("click", () => {
    cargarSpinner();
    getPersonasAjaxPromise(URL)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => eliminarSpinner());
})

document.getElementById("btn10").addEventListener("click", () => {
    ajaxAsync(URL);
})

/* POST - EVENTOS */
document.getElementById("btn11").addEventListener("click", () => {
    postPersonaAjax(URL);
})
document.getElementById("btn12").addEventListener("click", () => {
    postPersonaFetch(URL);
})
document.getElementById("btn13").addEventListener("click", () => {
    postPersonaAxios(URL);
})

/* DELETE - EVENTOS */
document.getElementById("btn14").addEventListener("click", () => {
    deletePersonaAjax(URL, 1);
})

/* PUT -EVENTOS */
document.getElementById("btn15").addEventListener("click", () => {
    putPersonaAjax(URL);
})
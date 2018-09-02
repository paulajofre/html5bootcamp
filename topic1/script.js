function showDiv() {
    let vis = document.getElementById("esc");
    vis.classList += ' visible';
}
function request(configObj){
    let promesa = new Promise(function (resolve, reject){
        var http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                if(http.status == 200) {
                    resolve(JSON.parse(http.response));
                } 
                else {
                    reject(http.status); 
                }
            }
        }
        http.open(configObj.method, configObj.url, true);
        http.send();
    });
    return promesa;
}
function getJoke(){
    request({url: "http://api.icndb.com/jokes/random", method: "GET"})
        .then(respuesta => {
            let resp = document.getElementById("esc");
            resp.innerText = respuesta.value.joke;
        })
        .catch(err => {
            let red = document.getElementById("esc");
            red.classList += ' rojo';
        })
}
function nine() {
    request({url:"https://api.github.com/search/repositories?q='JavaScript", method:"GET"})
    .then(respuesta => {
        respuesta.items.forEach(function (element) {
            let resp = document.getElementById("nueve");
            let listItem = document.createElement("li");
            let texto = document.createTextNode(element.full_name);
            listItem.appendChild(texto);
            resp.appendChild(listItem);
        });
    });
}
function ten() {
    let busqueda = document.getElementById("areaTexto").value; 
    request({url:"https://api.github.com/search/repositories?q=" + busqueda, method:"GET"})
    .then(respuesta => {
        let resp = document.getElementById("nueve");
        respuesta.items.forEach(function (element) {
            let listItem = document.createElement("li");
            let texto = document.createTextNode(element.full_name);
            listItem.appendChild(texto);
            resp.appendChild(listItem);
        });
    });
}
function twelve(matrix) {
    let table = document.getElementById("twelve");
    matrix.forEach(row => {
        let tableRow = document.createElement("tr");
        row.forEach(col => {
            let rowCol = document.createElement("td");
            let content = document.createTextNode(col);
            rowCol.appendChild(content);
            tableRow.appendChild(rowCol);
        });
        table.appendChild(tableRow);
    });
}
let pag_actual = 1;
let datos = [["Columbiformes","Paloma","Metropolitana","Santiago","06-09-2026","12","paloma.png"],
["Columbiformes","Tortola","Metropolitana","Buin","02-09-2026","16","tortola.png"],
["Strigiformes","Chuncho","Magallanes y de la Antártica Chilena","Punta Arenas","01-09-2026","10","chuncho.png"],
["Sphenisciformes","Pinguino de Humboldt","Valparaíso","Algarrobo","01-09-2026","16","pinguino.png"],
["Passeriformes","Gorrión","Metropolitana","Paine","03-09-2026","09","gorrion.png"],
["Passeriformes","Zorzal","Valparaíso","Viña del Mar","05-09-2026","13","zorzal.png"]];
let datos_actuales = [...datos];

const filtrar = () => {
    let filtro = document.getElementById("tipo").value;
    let cuerpo = document.getElementById("cuerpo");
    datos_actuales = [];

    for (let dato of datos){
        if(dato[0] == filtro || filtro == ''){
            datos_actuales.push(dato);
        }
    }
    mostrar(datos_actuales)
}

const mostrar = (info) => {
    let body = document.getElementById("cuerpo");
    body.innerHTML = '';
    for(let i = (pag_actual-1)*5 ; i<pag_actual*5 ; i++){
        body.innerHTML += '<tr><th>'+info[i][0]+'</th><th>'+info[i][1]+'</th><th>'+info[i][2]+', '+info[i][3]+'</th><th>'+info[i][4]+', '+info[i][5]+'hrs</th><th><img src="../img/'+info[i][6]+'" class="img-lista"></th></tr>';
    }
    let pagina = document.getElementById("pagina");
    pagina.innerText = pag_actual;
}

const anterior = () => {
    if (pag_actual>1){
        pag_actual -= 1;
        mostrar(datos_actuales);
    }
}

const siguiente = () => {
    if (pag_actual<datos_actuales.length/5){
        pag_actual += 1;
        mostrar(datos_actuales);
    }
}

const ordenar_fecha = (booleano) => {
    let datos_temporales = [];
    let datos_copia = [...datos_actuales];

    while (datos_copia.length > 0) {
        let posicion = 0;
        for (let i = 1; i < datos_copia.length; i++) {
            let fechaActual = new Date(
                datos_copia[i][4].split("-").reverse().join("-") +"T" + datos_copia[i][5] + ":00");
            let fechaMenor = new Date(
                datos_copia[posicion][4].split("-").reverse().join("-") +"T" + datos_copia[posicion][5] + ":00");
            if (booleano) {
                if (fechaActual > fechaMenor) {
                    posicion = i;
                }
            } 
            else {
                if (fechaActual < fechaMenor) {
                    posicion = i;
                }
            }
        }
        datos_temporales.push(datos_copia[posicion]);
        datos_copia.splice(posicion, 1);
    }
    datos_actuales = datos_temporales;
    pag_actual = 1;
    mostrar(datos_actuales);
}

const ordenar_lugar = (booleano) => {
    let datos_temporales = [];
    let datos_copia = [...datos_actuales];
    while(datos_copia.length>0){
        let posicion = 0;
        for (let i = 1; i<datos_copia.length; i++){
            let lugarActual = datos_copia[i][2].toLowerCase()+' '+datos_copia[i][3];
            let lugarElegido = datos_copia[posicion][2].toLowerCase()+' '+datos_copia[posicion][3];
            if (booleano){
                if(lugarActual<lugarElegido){
                    posicion = i;
                }
            }
            else {
                if(lugarActual>lugarElegido){
                    posicion = i;
                }
            }
        }
        datos_temporales.push(datos_copia[posicion]);
        datos_copia.splice(posicion,1);
    }
    datos_actuales = datos_temporales;
    pag_actual = 1;
    mostrar(datos_actuales);
}

mostrar(datos)
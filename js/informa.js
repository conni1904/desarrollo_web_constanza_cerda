const existeValidacion = (cosa) => {
    if(!cosa) return false;
    return true;
}
const fechaValidacion = (fecha) => {
    if (!fecha) return false;
    const fechaAValidar = new Date(fecha);
    return fechaAValidar < new Date();
}
const archivosValidacion = (archivo) => {
    if (!archivo) return false;
    let typeValid = true;

  for (const file of archivo) {
    let fileFamily = file.type.split("/")[1];
    typeValid &&= fileFamily == "png" || fileFamily == "jpg" || fileFamily == "jpeg" || fileFamily == "mp4";
  }

  return typeValid;
}
const validacion = () => {
    let myForm = document.forms["myForm"];
    let tipo = myForm["tipo"].value;
    let nombre = myForm["nombre-ave"].value;
    let region = myForm["region"].value;
    let comuna = myForm["comuna"].value;
    let fecha = myForm["fecha"].value;
    let hora = myForm["hora"].value;
    let archivos = myForm["archivo"].files;


    var esValido = true;

    let errores = document.getElementById("errores");
    errores.innerHTML = '';

    if(!existeValidacion(tipo)){
        errores.innerHTML += '<p>Error en el tipo</p>';
        esValido = false;
    }
    if (!existeValidacion(nombre)){
        errores.innerHTML += '<p>Error en el Nombre</p>';
        esValido = false;
    }
    if (!existeValidacion(region)){
        errores.innerHTML += '<p>Error en la región</p>';
        esValido = false;
    }
    if (!existeValidacion(comuna)){
        errores.innerHTML += '<p>Error en la comuna</p>';
        esValido = false;
    }
    if (!fechaValidacion(fecha)){
        errores.innerHTML += '<p>Error en la fecha</p>';
        esValido = false;
    }
    if (!existeValidacion(hora)){
        errores.innerHTML += '<p>Error en la hora</p>';
        esValido = false;
    }
    if (!archivosValidacion(archivos)){
        errores.innerHTML += '<p>Error en el archivo</p>';
        esValido = false;
    }
    
    return esValido;
}

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validacion();
    if(validacion()){
        let ventana = document.getElementById("ventana");
        ventana.showModal();
    }
});
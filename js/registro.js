const existeValidacion = (cosa) => {
    if(!cosa) return false;
    return true;
}
const rutValidacion = (rut) => {
    if(!rut) return false;

    let re = /^\d{7,8}-[\dkK]$/;
    let formatoValido = re.test(rut);

    return formatoValido;

}
const telefonoValidacion = (telefono) => {
    if(!telefono) return false;

    let largoValido = telefono.length == 9;

    return largoValido;
}
const emailValidacion = (email) => {
    if(!nombre) return false;

    let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let formatoValido = re.test(email);

    return formatoValido;
}
const validacion = () => {
    let myForm = document.forms["myForm"];
    let nombre = myForm["nombre"].value;
    let rut = myForm["rut"].value;
    let telefono = myForm["telefono"].value;
    let email = myForm["email"].value;
    let region = myForm["region"].value;
    let comuna = myForm["comuna"].value;
    let calle = myForm["calle"].value;
    let numero = myForm["numero"].value;

    var esValido = true;

    let errores = document.getElementById("errores");
    errores.innerHTML = '';

    if (!existeValidacion(nombre)){
        errores.innerHTML += '<p>Error en el Nombre</p>';
        esValido = false;
    }
    if (!rutValidacion(rut)){
        errores.innerHTML += '<p>Error en el rut</p>';
        esValido = false;
    }
    if (!telefonoValidacion(telefono)){
        errores.innerHTML += '<p>Error en el telefono</p>';
        esValido = false;
    }
    if (!emailValidacion(email)){
        errores.innerHTML += '<p>Error en el email</p>';
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
    if (!existeValidacion(calle)){
        errores.innerHTML += '<p>Error en la calle</p>';
        esValido = false;
    }
    if (!existeValidacion(numero)){
        errores.innerHTML += '<p>Error en el número de vivienda</p>';
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
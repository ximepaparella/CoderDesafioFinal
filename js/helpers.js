//////////////////// HELPERS ////////////////////

//Funcion para cerrar modales
function cerrarModal(){
    var modal = document.getElementById("mod-modal");
    modal.classList.add("--hidden")
};

//Funcion para mostrar modal.
function mostrarModal(){
    var modal = document.getElementById("mod-modal");
    modal.classList.remove("--hidden")
};

// Funcion para guardar Datos en Local Storage
function guardarLocalStorage(clave, valor) {
    localStorage.setItem(clave, valor);
}

// Funcion para guardar Datos en Sesion Storage
function guardarSessionStorage(clave, valor) {
    sessionStorage.setItem(clave, valor);
}

// Funcion para obtener Datos en Local Storage
function obtenerLocalStorage(clave) {
    return localStorage.getItem(clave);
}

// Funcion para obtener Datos en Sesion Storage
function obtenerSesionStorage(clave) {
    return sessionStorage.getItem(clave);
}
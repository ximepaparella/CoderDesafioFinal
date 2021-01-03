//Defino Objeto Tratamiento
class Tratamiento{
    constructor(tratamientos){
        this.id     = parseInt(tratamientos.id);
        this.nombre = tratamientos.nombre;
        this.descripcion = tratamientos.descripcion;
        this.valor = parseFloat(tratamientos.valor);
        this.valorOferta = parseFloat(tratamientos.valorOferta)
    }
    
}
//  OBTENER EL CONTENEDOR DONDE VAMOS A AGREGAR LOS NUEVOS ELEMENTOS 
let contenedorTratamientos = document.getElementById("mod-card-list");

//Recorro los tratamientos para dibujarlos
for(let item of TRATAMIENTOS){
    crearElemento(item);
}

function crearElemento(item) {
    let nuevoItem = document.createElement("div");
    nuevoItem.innerHTML  = `
    <div class='mod-card'>
        <header>
        <h2 class='com-title --xs'>${item.nombre}</h2> 
        </header>
        <main>
            <h4 class='com-title --twoxs'>Precio ${item.valor}</h4>
            <p class='com-description --fourxs'> ${item.descripcion}</p>
        </main>
        <footer>
            <button class='com-button solicitar' id='solicitar'>Solicitar Turno</button>
        </footer>
    </div>`;
    contenedorTratamientos.appendChild(nuevoItem);
} 

//Creo función para llamar a abrir modal cuando hagan click en el botón.
document.getElementById("solicitar").addEventListener("click", mostrarModal);

// Declaro el Objeto Cliente
class Cliente {
    constructor(cliente){
        this.id     = parseInt(cliente.id);
        this.nombre = cliente.nombre;
        this.apellido = cliente.apellido;
        this.dni = cliente.dni;
        this.celular = cliente.celular;
        this.email = cliente.email;
    }
}

// Declaro el Objeto Profesional
class Profesional{
    constructor(profesional){
        this.id     = parseInt(profesional.id);
        this.nombre = profesional.nombre;
        this.apellido = profesional.apellido;
        this.dni = profesional.dni;
        this.celular = profesional.celular;
        this.email = profesional.email;
    }
}

// Declaro el Objeto Reserva
class Reserva{
    constructor(nombreCliente, apellidoCliente, dniCliente, celularCliente, emailCliente, profesionalSeleccionado, horarioSeleccionado, fechaSeleccionada){
        this.id = RESERVAS.length;
        this.nombre = nombreCliente;
        this.apellido = apellidoCliente;
        this.dni = dniCliente;
        this.celular = celularCliente;
        this.email = emailCliente;
        this.profesional = profesionalSeleccionado;
        this.horario = horarioSeleccionado;
        this.fecha = fechaSeleccionada;
    }
}

// Obtengo el Select que quiero rellenar
let selectProfesional = document.getElementById("profesional");

//Recorro los profesionales para mostrarlos en el select
for(let profesional of PROFESIONALES){
    crearOptionValue(profesional);
}
// Inserto cada registro como Option.
function crearOptionValue(profesional) {
    let nuevoItem = document.createElement("option");
    nuevoItem.innerHTML  = profesional.nombre + " " + profesional.apellido;
    selectProfesional.appendChild(nuevoItem);
}

// Escucho el evento del botón Submit Solicitar turno para guardar los datos de la reserva.
var subButton = document.getElementById('solicitar-turno');
subButton.addEventListener('click', guardarDatosReserva, false); 

//Obtengo todos los datos de los inputs y los guardo para guardar la reserva en local storage.
function guardarDatosReserva() {
    let profesional = document.getElementById("profesional").value;
    let fecha = document.getElementById("fecha").value;
    let horario = document.getElementById("hora").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let celular = document.getElementById("celular").value;
    let email = document.getElementById("email").value;
    
    var reserva = new Reserva (nombre, apellido, dni, celular, email, profesional, horario, fecha);
    
    var localStorageReserva = JSON.stringify(reserva);
    guardarLocalStorage("Reserva de Turno", localStorageReserva);

    return reserva;
}

function guardarReserva() {
    let nuevoRegistro = {
        nombre : document.getElementById("nombre").value,
        apellido : document.getElementById("apellido").value,
        dni : document.getElementById("dni").value,
        celular : document.getElementById("celular").value,
        email : document.getElementById("email").value,
        profesional : document.getElementById("profesional").value,
        horario : document.getElementById("hora").value,
        fecha : document.getElementById("fecha").value,
      }

      RESERVAS.push(new Reserva(nuevoRegistro));
      console.log(RESERVAS);
}

// Muestro las reservas desde local storage
function mostrarReserva(reserva) {
    //pendiente
}

//Cambiar texto de la pagina principal

// mostrar y ocultar contenedor con listado de reservas
$("#mostrar-reservas").click(function(){
    let listaTratamientos = $(".mod-card-list");
    let mostrarReservas = $(".mod-reservations");
    let buttonMostrar = $("#mostrar-reservas");

    if(mostrarReservas.hasClass("--hidden")){
        mostrarReservas.removeClass("--hidden")
        listaTratamientos.addClass("--hidden");
        
        //Cambio el texto del botón.
        buttonMostrar.text("Volver")
    }else {
        mostrarReservas.addClass("--hidden")
        listaTratamientos.removeClass("--hidden");

        //Regreso el texto a su estado inicial
        buttonMostrar.text("Ver mis Reservas")
    } 
});

//Modificar borde de inputs on focus
let inputs = $(input);
$("input")
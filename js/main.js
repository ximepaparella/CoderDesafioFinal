//Doy la bienvenida
alert("Bienvenido a Zendenta, a continuación le solicitaremos algunos datos para su reserva. Recuerde siempre ingresar el NUMERO de la opción deseada. Recuerde que los valores se facturarán + IVA");

//Solicito los datos y genero las variables generales
var nombreCliente = prompt("Indiquenos su nombre completo");
var dniCliente = prompt("Indiquenos su DNI");
var whatsappCliente = prompt("Indiquenos su número de celular");
var emailCliente = prompt("Indiquenos su número e-mail");
var tratamiento = prompt("¿Que tratamiento le gustaría reservar? 1- ODONTOLOGÍA GENERAL || 2- LIMPIEZA DENTAL || 3- TRATAMIENTO DE CONDUCTO" );
var horarioTratamiento = prompt("Seleccione un horario: 1- POR LA MAÑANA || 2- POR LA TARDE");
var iva = 0.21;

var nuevoProfesional = prompt("Si lo desea, puede ingresar un nuevo Profesional que lo atienda");

//Defino el array de profesionales
var listaProfesionales = ["Juana Pereyra", "Federico Paez", "Marcelo Gotta", "Ileana Ortenci"];

//Defino el objeto Cliente
class Cliente{
    constructor(nombreCliente, whatsappCliente, dniCliente, emailCliente){
        this.nombre = nombreCliente.toLowerCase();
        this.celular = parseInt(whatsappCliente);
        this.dni = parseInt(dniCliente);
        this.email = emailCliente.toLowerCase();
    }
}
// Instancio el Cliente a través de los datos ingresados y genero 2 dummys adicionales.
let cliente = new Cliente (nombreCliente, whatsappCliente, dniCliente, emailCliente);

//Genero una Lista de clientes y hago un push del cliente con los datos obtenidos por los prompt.
let listaClientes = [];
listaClientes.push(cliente);
listaClientes.push(new Cliente ("Juana Verón", "11555432", "334432423", "juana@veron.com"));
listaClientes.push(new Cliente ("Pedro Gomez", "11555432", "334432423", "pgomez@gmail.com"));

//Muestro la lista de clientes.
console.log("Lista de Clientes Actuales");
for (let cliente of listaClientes) {
    console.log(cliente);
}

//Defino el objeto Tratamiento y sus atributos (paso el array de profesionales)
function Tratamiento (nombre, descripcion, precio, listaProfesionales) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = parseInt(precio);
    this.profesionales = listaProfesionales;
};

//Obtengo el horario de la reserva según el tratamiento elegido
function horarioReserva(horarioTratamiento) {
    if (horarioTratamiento === "1"){
        horario = "Por La Mañana";
    } else if (horarioTratamiento === "2"){
        horario = "Por Tarde";
    } else {
        horario = "No Seleccionado";
    }

    return horario;
}

//Obtengo el nombre y el precio del tratamiento seleccionado
function obtenerTratamiento(tratamiento) {
    if (tratamiento === "1") {
        var tratamiento = new Tratamiento ("Odontología General", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamUna limpieza es", 1000, listaProfesionales);
    } else if (tratamiento === "2") {
        var tratamiento = new Tratamiento ("Limpieza Dental", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 8000, listaProfesionales);
    } else {
        var tratamiento = new Tratamiento ("Tratamiento de Conducto", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 3000, listaProfesionales);
    };

    objTratamiento = tratamiento;
    return objTratamiento;
}

//Calculo el valor a pagar + IVA
function calcularTotal (objTratamiento, iva) {
    ivaTotal = objTratamiento.precio * iva;
    precioTotal = objTratamiento.precio + ivaTotal;

    return precioTotal;
}

function agregarProfesional(nuevoProfesional, listaProfesionales) {
    if (nuevoProfesional != "") {
        listaProfesionales = listaProfesionales.push(nuevoProfesional);
    }
    return listaProfesionales;
}

horarioReserva(horarioTratamiento);
obtenerTratamiento(tratamiento);
calcularTotal(objTratamiento, iva);
agregarProfesional(nuevoProfesional, listaProfesionales);

// Muestro la reserva al cliente.
console.log("LOS DATOS DE SU RESERVA:")
console.log("Nombre: " + cliente.nombre);
console.log("Celular: " + cliente.celular);
console.log("Dni: " + cliente.dni);
console.log("Email: " + cliente.email);
console.log("Horario: " + horario);
console.log("Tratamiento Seleccionado: " + objTratamiento.nombre);
console.log("Profesionales Disponibles: " + objTratamiento.profesionales);
console.log("Valor: " + precioTotal);



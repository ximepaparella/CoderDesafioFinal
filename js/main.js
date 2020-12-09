//Doy la bienvenida
alert("Bienvenido a Zendenta, a continuación le solicitaremos algunos datos para su reserva. Recuerde siempre ingresar el NUMERO de la opción deseada. Recuerde que los valores se facturarán + IVA");

//Solicito los datos y genero las variables generales
var nombreCliente = prompt("Indiquenos su nombre completo");
var whatsappCliente = prompt("Indiquenos su número de celular");
var tratamiento = prompt("¿Que tratamiento le gustaría reservar? 1- ODONTOLOGÍA GENERAL || 2- LIMPIEZA DENTAL || 3- TRATAMIENTO DE CONDUCTO" );
var horarioTratamiento = prompt("Seleccione un horario: 1- POR LA MAÑANA || 2- POR LA TARDE");
var iva = 0.21;

//Defino el objeto Tratamiento y sus atributos
function Tratamiento (nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = parseInt(precio);
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
        var tratamiento = new Tratamiento ("Odontología General", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamUna limpieza es", 1000);
    } else if (tratamiento === "2") {
        var tratamiento = new Tratamiento ("Limpieza Dental", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 8000);
    } else {
        var tratamiento = new Tratamiento ("Tratamiento de Conducto", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 3000);
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

horarioReserva(horarioTratamiento);
obtenerTratamiento(tratamiento);
calcularTotal(objTratamiento, iva);

// Muestro la reserva al cliente.
console.log("LOS DATOS DE SU RESERVA:")
console.log("Nombre: " + nombreCliente);
console.log("Celular: " + whatsappCliente);
console.log("Horario: " + horario);
console.log("Tratamiento Seleccionado: " + objTratamiento.nombre)
console.log("Valor: " + precioTotal);



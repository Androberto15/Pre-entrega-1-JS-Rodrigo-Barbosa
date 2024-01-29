//saludo inicial

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let nombreCompleto = nombre + " " + apellido
let saludar = prompt ("Hola " + nombreCompleto + "  te gustaria comprar algo hoy? Escriba si o no" )

//if de eleccion saludo y eleccion de opciones
if (saludar === "si"){
    let producto = prompt ("Tenemos pantalones ($20.000), remeras ($15.000) y zapatillas ($120.000). Escribí 'pantalon', 'remera' o 'zapatilla' según tu elección").toLocaleLowerCase();
    let precio;  //switch para precio del producto
    switch (producto) {
        case "pantalon":
            precio = 20000;
            break;
        case "remera":
            precio = 15000;
            break;
        case "zapatilla":
            precio = 120000;
            break;
        default:
            alert("Producto no válido.");
            break;
    }   //eleccion de la cantidad de unidades
    if (precio) {
        let cantidad = parseInt(prompt("¿Cuántas unidades desea comprar?"));
        if (!isNaN(cantidad) && cantidad > 0) {
            let total = precio * cantidad;
            alert("El total de su compra es: $" + total + ". Gracias por su compra.");
        } else {
            alert("Ingrese una cantidad válida.");
        }
    }
}else if (saludar === "no"){
    alert ("Hasta la proxima " + nombreCompleto)
} else {
    while (saludar !== "si" && saludar !== "no") {
        saludar = prompt("Ingrese una opción válida ('si' o 'no').");
    }
    if (saludar === "si") {
        let eleccion = prompt("Tenemos pantalones ($20.000), remeras ($15.000) y zapatillas ($120.000). Escribí 'pantalon', 'remera' o 'zapatilla' según tu elección.");
        alert("Usted ha elegido " + eleccion + ". Gracias por su elección.");
    } else {
        alert("Hasta la próxima, " + nombreCompleto);
    }
}





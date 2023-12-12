import { Vehiculo } from "./vehiculo.js";
import { Furgoneta } from "./furgoneta.js";
import { Todoterreno } from "./todoterreno.js";

// Crear un contenedor para mostrar los resultados

const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

// Función para mostrar los datos en el template

export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

// Muestra de un objeto vehiculo

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'Rojo', 1992, '2400');
mostrarResultado('--Vehiculo 1--');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

// Variable de tipo Object de un objeto vehículo. (No es lo mismo un objeto que una variable de tipo Object)

const vehiculoObject = {
    marca: 'BMW',
    modelo: 'CLK',
    color: 'Rojo',
    fabricacion: 1992,
    cilindrada: '2400'
}

// Almacenar datos - Guardar el JSON en el LocalStorage

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject)); // Pasamos una variable de tipo objeto a un JSON (stringify)

// Recuperar datos - Mostrar el Object en consola del JSON que hemos guardado en el Local Storage

console.log(JSON.parse(localStorage.getItem("vehiculo"))); // Convierte un JSON a un objeto (parse)

// Imprimimos por consola en JSON

console.log(localStorage.getItem("vehiculo"));

// Muestra de un objeto furgoneta

const furgoneta = new Furgoneta('Renault', 'Kangoo', 'Blanco', 1995, '1800', 8);
mostrarResultado('<br /><br />--Furgoneta--');
furgoneta.arrancar();
furgoneta.acelerar(90);
furgoneta.frenar();

// Guardar en el LocalStorage la marca de una furgoneta

localStorage.setItem("marca furgoneta", furgoneta.marca);

// Muestra de un objeto todoterreno

const todoterreno = new Todoterreno('Land Rover', 'Range Rover', 'Amarillo', 2012, '2800', 'Si');
mostrarResultado('<br /><br />--Todoterreno--');
todoterreno.mostrarDatos();
mostrarResultado('<br />Tracción: ' + todoterreno.traccion)
todoterreno.arrancar();
todoterreno.acelerar(120);
todoterreno.frenar();

// Generar variable de tipo Object con POO

const todoterrenoObject = {
    marca: todoterreno.marca,
    modelo: todoterreno.modelo,
    color: todoterreno.color,
    fabricacion: todoterreno.fabricacion,
    cilindrada: todoterreno.cilindrada,
    traccion: todoterreno.traccion
}

// Almacenar los datos en el LocalStorage medinte un bucle iterativo

for(let key in todoterrenoObject){
    // hasOwnProperty lo utilizamos para almacenar el nombre de la propiedad de cada objeto
    if(todoterrenoObject.hasOwnProperty(key)){
        localStorage.setItem(key, todoterrenoObject[key])
    }
}

// Eliminar un elemento del LocalStorage

localStorage.removeItem('color');

// Eliminar todos los elementos de un LocalStorage

localStorage.clear();

// En el examen se pedirá para el LocalStorage: Introducir datos, obtener datos, eliminar datos y eliminar todos los datos

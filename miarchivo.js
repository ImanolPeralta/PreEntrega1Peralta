//Simulador interactivo versión 1 Steel Block 🚀
//¿De qué trata el simulador?:
/* El objetivo del proyecto es desarrollar un simulador interactivo para Steel Block, una empresa constructora de viviendas y edificios con amplia trayectoria en el mercado. Este simulador será una herramienta accesible desde una aplicación web que permitirá a los usuarios personalizar las características de su futuro hogar o empresa según sus preferencias e intereses.
Los usuarios podrán seleccionar y detallar parámetros clave, como el tamaño, diseño y materiales deseados, entre otros. Con esta información, la aplicación generará un presupuesto estimativo que les será presentado de manera clara y profesional. Este simulador busca optimizar el proceso de cotización, ofreciendo una experiencia interactiva y adaptada a las necesidades de cada cliente.
*/

alert('¡Bienvenido a la primera versión del simulador interactivo de Steel Block!');

function calcularPrecio(metrosCuadrados, precioBase, incluyePiscina, plantas) {
    const precioPiscina = 5000;
    let total = metrosCuadrados * precioBase;
    if (incluyePiscina) {
        total += precioPiscina;
    }
    if (plantas === 2) {
        total = total * 2 - precioPiscina; // Descuento por planta adicional ➖
    }
    return total;
}
// Materiales a incluir: (Ladrillo común 🧱 , ladrillo bloque 🧱 y hormigón armado 🪨)
function seleccionarMaterial() {
    const materiales = {
        "ladrillo común": 950,
        "ladrillo bloque": 810,
        "hormigón armado": 1020
    };

    let material;
    while (!material || !materiales[material]) {
        material = prompt("Selecciona el material de la estructura (ladrillo común, ladrillo bloque, hormigón armado):").toLowerCase();
        if (!materiales[material]) {
            alert("Material no válido. Intenta de nuevo.");
        }
    }
    return materiales[material];
}

function construirCasa(tipo) {
    const metrosCuadrados = parseInt(prompt("¿Cuántos metros cuadrados quiere que ocupe su casa?: "));
    if (isNaN(metrosCuadrados) || metrosCuadrados <= 0) {
        alert("Por favor, ingresa un número válido para los metros cuadrados.");
        return construirCasa(tipo); // Reintentar si el input es inválido 🔄️
    }

    const incluyePiscina = prompt("¿Quiere incluir piscina? (Si, No):").toLowerCase() === "si";
    const plantas = parseInt(prompt("¿Quiere que la casa sea de una sola planta o de dos plantas? (1, 2):"));
    if (isNaN(plantas) || (plantas !== 1 && plantas !== 2)) {
        alert("Opción de plantas no válida. Por defecto se construirá de una planta.");
    }

    const precioBase = tipo === "tradicional" ? seleccionarMaterial() : 750; // Precio Steel Frame fijo 🩶
    const total = calcularPrecio(metrosCuadrados, precioBase, incluyePiscina, plantas);
    alert(`El precio total para la casa con tecnología ${tipo} es: ${total} USD`);
}

// Inicio del programa 🟢
function iniciarSimulador() {
    let tipoTecnologia;
    do {
        tipoTecnologia = prompt("Selecciona el tipo de tecnología a utilizar: (Tradicional, Steel Frame)").toLowerCase();
        if (tipoTecnologia !== "tradicional" && tipoTecnologia !== "steel frame") {
            alert("Tipo de tecnología no válido. Intenta de nuevo.");
        }
    } while (tipoTecnologia !== "tradicional" && tipoTecnologia !== "steel frame");

    construirCasa(tipoTecnologia);
}

iniciarSimulador();




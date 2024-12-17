//Simulador interactivo versión 2 Steel Block 🚀
//¿De qué trata el simulador?:
/* El objetivo del proyecto es desarrollar un simulador interactivo para Steel Block, una empresa constructora de viviendas y edificios con amplia trayectoria en el mercado. Este simulador será una herramienta accesible desde una aplicación web que permitirá a los usuarios personalizar las características de su futuro hogar o empresa según sus preferencias e intereses.
Los usuarios podrán seleccionar y detallar parámetros clave, como el tamaño, diseño y materiales deseados, entre otros. Con esta información, la aplicación generará un presupuesto estimativo que les será presentado de manera clara y profesional. Este simulador busca optimizar el proceso de cotización, ofreciendo una experiencia interactiva y adaptada a las necesidades de cada cliente.
*/

// Creación de la clase constructura Casa 🏠 para organizar los distintos objetos del código.
class Casa {
    constructor(metrosCuadrados, precioBase, incluyePiscina, incluyeQuincho, plantas, material) {
        this.metrosCuadrados = metrosCuadrados;
        this.precioBase = precioBase;
        this.incluyePiscina = incluyePiscina;
        this.incluyeQuincho = incluyeQuincho;
        this.plantas = plantas;
        this.material = material;
        this.precioPiscina = 5000;
        this.precioQuincho = 1020;
    }

    calcularPrecio() {
        let total = this.metrosCuadrados * this.precioBase;
        if (this.plantas === 2) {
            total = total * 2; // Descuento por planta adicional ➖
        }
        if (this.incluyePiscina) {
            total += this.precioPiscina;
        }
        if (this.incluyeQuincho) {
            total += this.precioQuincho;
        }
        return total;
    }
}

// Empleando Arrays con algunas funciones de orden superior
const seleccionarMaterial = () => {
    const materiales = [
        { nombre: "ladrillo común",precio: 950 },
        { nombre: "ladrillo bloque", precio: 810 },
        { nombre: "hormigón armado", precio: 1020 }
    ];

    let materialSeleccionado;
    while (!materialSeleccionado) {
        const material = prompt("Selecciona el material de la estructura (ladrillo común, ladrillo bloque, hormigón armado):").toLowerCase();
        materialSeleccionado = materiales.find(m => m.nombre === material);
        if (!materialSeleccionado) {
            alert("Material no válido. Intenta de nuevo.");
        }
    }

    return materialSeleccionado.precio;
}

// Entradas para el usuario
const construirCasa = (tipo) => {
    const metrosCuadrados = parseInt(prompt("¿Cuántos metros cuadrados quiere que ocupe su casa?"));
    if (isNaN(metrosCuadrados) || metrosCuadrados <= 0) {
        alert("Por favor, ingresa un número válido para los metros cuadrados.");
        return;
    }

    const incluyePiscina = prompt("¿Quiere incluir piscina? (Si, No):").toLowerCase() === "si";
    const incluyeQuincho = prompt("¿Quiere incluir un quincho con parrilla? - Médida Estándar : 4 x 6 m (Si, No):").toLowerCase() === "si";
    const plantas = parseInt(prompt("¿Quiere que la casa sea de una sola planta o de dos plantas? (1, 2):")) || 1;

    const precioBase = tipo === "tradicional" ? seleccionarMaterial() : 750; // Precio fijo para Steel Frame 🩶
    const nuevaCasa = new Casa(metrosCuadrados, precioBase, incluyePiscina, incluyeQuincho, plantas);

    const total = nuevaCasa.calcularPrecio();
    alert(`El precio total para la casa con tecnología ${tipo} es: ${total} USD`);
}

// Inicio del simulador 🚀
const iniciarSimulador = () => {
    const tecnologias = ["tradicional", "steel frame"];
    let tipoTecnologia;

    while (!tipoTecnologia) {
        const seleccion = prompt("Selecciona el tipo de tecnología a utilizar: (Tradicional, Steel Frame)").toLowerCase();
        if (tecnologias.includes(seleccion)) {
            tipoTecnologia = seleccion;
        } else {
            alert("Tipo de tecnología no válido. Intenta de nuevo.");
        }
    }

    construirCasa(tipoTecnologia);
}

// Ejecutar el simulador 🟢
alert('¡Bienvenido a la segunda versión del simulador interactivo de Steel Block! 🚀');
iniciarSimulador();
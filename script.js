// Selecciona los elementos del DOM
const inputTexto = document.querySelector('.contenido__ingreso');
const outputTexto = document.querySelector('.contenido__salida');
const botonEncriptar = document.querySelector('.boton__encriptar');
const botonDesencriptar = document.querySelector('.boton__desencriptar');
const botonCopiar = document.querySelector('.boton__copiar');

function encriptar() {
    const input = document.querySelector('.contenido__ingreso').value;
    let output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('contenidoSalida').value = output;
    mostrarResultado();
}

function desencriptar() {
    const input = document.querySelector('.contenido__ingreso').value;
    let output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('contenidoSalida').value = output;
    mostrarResultado();
}

function copiarTexto() {
    const contenido = document.querySelector('.contenido__salida');
    contenido.select();
    document.execCommand('copy');
}

function mostrarResultado() {
    // Mostrar el botón de copiar
    const botonCopiar = document.getElementById('botonCopiar');
    botonCopiar.style.display = 'block';

    // Ocultar imagen, título y subtítulo
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';

    // Asegurar que el textarea de salida esté visible
    document.getElementById('contenidoSalida').style.display = 'block';
}
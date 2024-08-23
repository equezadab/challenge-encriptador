// Selecciona los elementos del DOM
const inputTexto = document.querySelector('.contenido__ingreso');
const outputTexto = document.querySelector('.contenido__salida');
const botonEncriptar = document.querySelector('.boton__encriptar');
const botonDesencriptar = document.querySelector('.boton__desencriptar');
const botonCopiar = document.querySelector('.boton__copiar');

function contieneMayusculasOAcentos(texto) {
    return /[A-ZÁÉÍÓÚáéíóú]/.test(texto);
}

function encriptar() {
    const input = inputTexto.value;

    if (contieneMayusculasOAcentos(input)) {
        mostrarModal(); 
        return; 
    }

    let output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    outputTexto.value = output;
    mostrarResultado();
}

function desencriptar() {
    const input = inputTexto.value;

    if (contieneMayusculasOAcentos(input)) {
        mostrarModal(); 
        return; 
    }

    let output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    outputTexto.value = output;
    mostrarResultado();
}

function copiarTexto() {
    outputTexto.select();
    document.execCommand('copy');
}

function mostrarResultado() {
    botonCopiar.style.display = 'block';
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';
    outputTexto.style.display = 'block';
}

function mostrarModal() {
    const modal = document.getElementById('modalAlerta');
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modalAlerta');
    modal.style.display = 'none';
}
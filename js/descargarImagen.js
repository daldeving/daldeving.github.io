function descargarImagen(boton) {
    const contenedor = boton.closest('div'); 
    const imagen = contenedor.querySelector('img');

    if (imagen) {
        const enlace = document.createElement('a');
        enlace.href = imagen.src; 
        enlace.download = imagen.alt || 'imagen.jpg';
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    } else {
        alert('No se encontró la imagen.');
    }
}

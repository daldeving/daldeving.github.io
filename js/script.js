const cards = document.querySelectorAll(".card");
const viewImg = document.getElementById("view-img");

let imagenes = [];     
let indexActual = 0;   

cards.forEach(card => {
    const img = card.querySelector("img");
    imagenes.push(img.src);
});

cards.forEach((card, i) => {
    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("seleccionado"));
        card.classList.add("seleccionado");

        viewImg.src = imagenes[i];
        indexActual = i;   
    });
});

document.getElementById("right").addEventListener("click", () => {
    indexActual++;

    if (indexActual >= imagenes.length) {
        indexActual = 0; 
    }

    viewImg.src = imagenes[indexActual];
    actualizarBorde();
});

document.getElementById("left").addEventListener("click", () => {
    indexActual--;

    if (indexActual < 0) {
        indexActual = imagenes.length - 1; 
    }

    viewImg.src = imagenes[indexActual];
    actualizarBorde();
});

function actualizarBorde() {
    cards.forEach(c => c.classList.remove("seleccionado"));
    cards[indexActual].classList.add("seleccionado");
}


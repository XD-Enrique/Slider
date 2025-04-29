const fotosContainer = document.getElementById("fotos");
const imagens = fotosContainer.querySelectorAll("img");
const btnProximo = document.getElementById("btn-proximo");
const btnAnterior = document.getElementById("btn-anterior");

let indiceAtual = 0;

function atualizarSlide() {
    const larguraImagem = imagens[0].clientWidth + 30;
    fotosContainer.scrollTo({
        left: larguraImagem * indiceAtual,
        behavior: "smooth"
    });
}

btnProximo.addEventListener("click", () => {
    indiceAtual++;
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    atualizarSlide();
});

btnAnterior.addEventListener("click", () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }
    atualizarSlide();
});

setInterval(() => {
    indiceAtual++;
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    atualizarSlide();
}, 3000);

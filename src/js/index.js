const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartas = document.querySelectorAll(".carta");
let cartaAtual = 0;

btnAvancar.addEventListener("click", function () {
    if (cartaAtual === cartas.length -1) return;

    esconderCartaSelecionada();

    cartaAtual++;
    mostarCarta(cartaAtual);
});

btnVoltar.addEventListener("click", function() {
    if (cartaAtual === 0) return;

    esconderCartaSelecionada();

    cartaAtual--;
    mostarCarta(cartaAtual);
});

function mostarCarta(cartaAtual) {
    cartas[cartaAtual].classList.add("selecionado");
}

function esconderCartaSelecionada() {
    const cartaSelecionada = document.querySelector(".selecionado");
    cartaSelecionada.classList.remove("selecionado");
}
function alterarStatus(Id) {
    let gameClicado = document.getElementById("game-"+Id);
    let imgaem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if (imgaem.classList.contains("dashboard__item__img--rented")){
            imgaem.classList.remove("dashboard__item__img--rented")
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";

    } else {
            imgaem.classList.add("dashboard__item__img--rented");
            botao.classList.add("dashboard__item__button--return");
            botao.textContent = "Devolver";
    }


}
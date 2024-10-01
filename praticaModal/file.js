document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("meuModal");
    let botao = document.getElementById("botaoModal");
    let span = document.getElementsByClassName("fechar")[0];

    function botaozar() {
        modal.style.display = "block";
    }

    function fechando() {
        modal.style.display = "none";
    }

    botao.onclick = botaozar;

    span.onclick = fechando;

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

// garante que o código dentro da função só seja executado depois que todo o conteúdo HTML foi carregado. 
//Isso evita que o JavaScript tente acessar elementos que ainda não estão disponíveis.S
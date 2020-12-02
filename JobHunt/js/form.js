document.addEventListener('DOMContentLoaded', function() {

    caso1 = [
        'Não tive',
        'Não tive',
        'Mercado financeiro',
        'Não tenho'
    ]

    caso2 = [
        'Mercado finaceiro',
        'Indefinido',
        'Não sei',
        'Pesca'
    ]

    next1 = "opcoes.html"
    next2 = "form_familia.html"

    respostas = document.querySelectorAll('.resposta')
    proximo = document.querySelector('.next')
    caso = String(localStorage.getItem('caso'))
    
    if (caso == 'Estágio') {

        for (i=0; i<respostas.length; i++) {
            respostas[i].innerHTML = caso1[i]
        }
        proximo.href = next1

    } else {

        for (i=0; i<respostas.length; i++) {
            respostas[i].innerHTML = caso2[i]
        }
        proximo.href = next2

    }

})
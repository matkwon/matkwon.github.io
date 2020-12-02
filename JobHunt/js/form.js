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
    next2 = "form2.html"

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

    let idade = document.querySelector('input')
    let area = document.querySelector('.area')
    let job = document.querySelector('.job')
    let interest = document.querySelector('.interest')
    let hobby = document.querySelector('.hobby')

    function update() {

        submit = document.querySelector('.next')
        submit.href = ''
        submit.style.backgroundColor = 'gray'
        if (parseFloat(idade.value)>=18 && area.value!='Área' && job.value!='Emprego específico' &&
            interest.value!='Áreas de interesse' && hobby.value!='Hobby') {

            if (caso == 'Estágio') {submit.href = 'opcoes.html'}
            else {submit.href = 'form2.html'}
            
            submit.style.backgroundColor = '#52BFB5'

        }

    }

    idade.addEventListener('input', function() {update()})
    area.addEventListener('input', function() {update()})
    job.addEventListener('input', function() {update()})
    interest.addEventListener('input', function() {update()})
    hobby.addEventListener('input', function() {update()})

    update()

})
document.addEventListener('DOMContentLoaded', function() {

    empresas1 = ['XP Inc.', 'MF S.A.', 'Trade & Co.']
    cargos1 = ['Estágio em finanças', 'Consultor jr.', 'Trainee']
    salarios1 = ['2500,00', '4100,00', '2070,00']

    empresas2 = ['Advogados S.A.', 'Law & Co.', 'Justiça Ltda.']
    cargos2 = ['Supervisor', 'Consultor jr.', 'Trainee']
    salarios2 = ['5000,00', '3700,00', '1980,00']

    prev1 = "form.html"
    prev2 = "form_familia.html"

    empresas = document.querySelectorAll('.empresa')
    cargos = document.querySelectorAll('.cargo')
    salarios = document.querySelectorAll('.salario')
    voltar = document.querySelector('.top_icon')
    caso = String(localStorage.getItem('caso'))
    
    if (caso == 'Estágio') {

        for (i=0; i<empresas.length; i++) {
            empresas[i].innerHTML = (empresas[i].innerHTML).replace('#', empresas1[i])
            cargos[i].innerHTML = (cargos[i].innerHTML).replace('#', cargos1[i])
            salarios[i].innerHTML = (salarios[i].innerHTML).replace('#', salarios1[i])
        }
        voltar.href = prev1

    } else {

        for (i=0; i<empresas.length; i++) {
            empresas[i].innerHTML = (empresas[i].innerHTML).replace('#', empresas2[i])
            cargos[i].innerHTML = (cargos[i].innerHTML).replace('#', cargos2[i])
            salarios[i].innerHTML = (salarios[i].innerHTML).replace('#', salarios2[i])
        }
        voltar.href = prev2

    }

})
document.addEventListener('DOMContentLoaded', function() {

    empresas1 = ['XP Inc.', 'MF S.A.', 'Trade & Co.']
    cargos1 = ['Estágio em finanças', 'Consultor jr.', 'Trainee']
    salarios1 = ['2500', '4100', '2070']

    empresas2 = ['Advogados S.A.', 'Law & Co.', 'Justiça Ltda.']
    cargos2 = ['Supervisor', 'Consultor jr.', 'Trainee']
    salarios2 = ['5000', '3700', '1980']

    prev1 = "form.html"
    prev2 = "form_familia.html"

    empresas = document.querySelectorAll('.empresa')
    cargos = document.querySelectorAll('.cargo')
    salarios = document.querySelectorAll('.salario')
    voltar = document.querySelector('.top_icon')
    caso = String(localStorage.getItem('caso'))
    
    if (caso == 'Estágio') {

        for (i=0; i<empresas.length; i++) {
            empresas[i].innerHTML = empresas1[i]
            cargos[i].innerHTML += cargos1[i]
            salarios[i].innerHTML += salarios1[i]
        }
        voltar.href = prev1

    } else {

        for (i=0; i<empresas.length; i++) {
            empresas[i].innerHTML = empresas2[i]
            cargos[i].innerHTML += cargos2[i]
            salarios[i].innerHTML += salarios2[i]
        }
        voltar.href = prev2

    }

})
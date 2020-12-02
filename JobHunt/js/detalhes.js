document.addEventListener('DOMContentLoaded', function() {

    caso1 = ['XP Inc.', 'Estágio em finanças', '2500,00']

    caso2 = ['Advogados S.A.', 'Supervisor', '5000,00']

    info = document.querySelectorAll('.topic')
    caso = String(localStorage.getItem('caso'))
    
    if (caso == 'Estágio') {

        for (i=0; i<info.length; i++) {
            info[i].innerHTML = (info[i].innerHTML).replace('#', caso1[i])
        }

    } else {

        for (i=0; i<info.length; i++) {
            info[i].innerHTML = (info[i].innerHTML).replace('#', caso2[i])
        }

    }

})
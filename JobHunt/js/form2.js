document.addEventListener('DOMContentLoaded', function() {

    let job1 = document.querySelector('.job1')
    let job2 = document.querySelector('.job2')
    let curso = document.querySelector('.curso')
    let empresa = document.querySelector('.empresa')

    function update() {

        submit = document.querySelector('.next')
        submit.href = ''
        submit.style.backgroundColor = 'gray'
        if (job1.value!='Emprego' && job2.value!='Emprego' && curso.value!='Curso' &&
            empresa.value!='Empresa') {

            submit.href = 'opcoes.html'
            submit.style.backgroundColor = '#52BFB5'

        }

    }

    job1.addEventListener('input', function() {update()})
    job2.addEventListener('input', function() {update()})
    curso.addEventListener('input', function() {update()})
    empresa.addEventListener('input', function() {update()})

    update()

})
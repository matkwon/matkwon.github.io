document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelectorAll('a')

    for (a of as) {

        a.addEventListener('click', function(event) {

            t = event.currentTarget

            caso = t.querySelector('h2').innerHTML
            alt = t.querySelector('h2').alt
            
            localStorage.setItem('caso', caso)
            localStorage.setItem('alt', alt)

        })
    }
})
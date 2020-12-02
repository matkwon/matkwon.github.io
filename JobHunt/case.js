document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelectorAll('a')

    for (a of as) {

        a.addEventListener('click', function(event) {

            t = event.currentTarget

            name = t.querySelector('h2').innerHTML
            imgsrc = t.querySelector('img').src
            imgalt = t.querySelector('img').alt
            localStorage.setItem('name', name)
            localStorage.setItem('imgsrc', imgsrc)
            localStorage.setItem('imgalt', imgalt)

        })

    }

})
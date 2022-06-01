
/* Handle open/close navbar on mobile */
const barsElment = document.getElementById('header-bars');

const openHeaderMenu = (e) => {
    const navbar = e.target.nextElementSibling;
    navbar.classList.toggle('is-open')
}

barsElment.addEventListener('click',openHeaderMenu)


/*
    Toogle is-active class when links on header is clicked
*/

const headerLinks = document.querySelectorAll('.header .header-navbar ul li a')

for(const i of headerLinks){
    i.addEventListener('click',(e) => {
        if(e.currentTarget.classList.contains('is-active')){
            e.preventDefault()
        } else{
            document.querySelector('.header .header-navbar ul li a.is-active').classList.remove('is-active')
            e.currentTarget.classList.add('is-active')
        }
    })
}

/*
    Automatiquement activer le lien de l'ancre
*/
const {hash} = window.location;

if(hash){
    const linkElement = document.querySelector('.header .header-navbar ul li a'+hash)
    if(linkElement){
        document.querySelector('.header .header-navbar ul li a.is-active').classList.remove('is-active')
        linkElement.classList.add('is-active')
    }
}
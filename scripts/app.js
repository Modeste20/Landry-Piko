


const barsElment = document.getElementById('header-bars');

const openHeaderMenu = (e) => {
    const navbar = e.target.nextElementSibling;
    navbar.classList.toggle('is-open')
}

barsElment.addEventListener('click',openHeaderMenu)
/**---- MOSTRAR MENU ----**/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav ){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/** ACTIVAR Y DESACTIVAR EL MENU  **/
const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
    // ACTIVAR LINK
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // QUITAR LA NAV BAR
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/**  SCROLL A HOME PAGE  **/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay:200});
sr.reveal('.home__img',{delay:400});
sr.reveal('.home__social-icon',{interval:500});

/** SCROLL ABOUT  **/
sr.reveal('.about__img',{delay:100});
sr.reveal('.about__subtitle',{delay:200});
sr.reveal('.about__text',{delay: 400})

/** SCROLL SKILLS **/ 
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:400})
sr.reveal('.skills__img',{delay:400})

/** SCROLL WORK */
sr.reveal('.first__work',{interval:250})
sr.reveal('.work__img',{interval:250})

/** SCROLL CONTACT */
sr.reveal('.contact__input',{interval:250})

/** VENTANAS EMERGENTES **/ 

const modal = document.querySelector('.ventana__emergente');
const accionador = document.querySelector('.first__work');
const span = document.querySelector('.close');
const contenido = document.querySelector('.ventana__contenido');

/** ABRE LA EMERGENTE **/
accionador.onclick = function() {
    modal.style.display = "block";
}

/** CIERRA LA EMERGENTE**/
span.onclick = function() {
    modal.style.display = "none";
}



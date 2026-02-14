/*=============== FIX RELOAD ISSUE ===============*/
// Remove any hash from URL and scroll to top on page load
window.addEventListener('load', function() {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
    window.scrollTo(0, 0);
});

/*=============== SHOW MENU (MOBILE) ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CLOSE MENU WHEN CLICKING OUTSIDE (optional) ===============*/
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu')
    }
})

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(sectionsClass){
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUpBtn = document.getElementById('scroll-up')
  if(window.scrollY >= 350) {
      scrollUpBtn.classList.add('show-scroll')
  } else {
      scrollUpBtn.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

sr.reveal('.home__content, .section__title')
sr.reveal('.home__image-wrapper', {origin: 'bottom', delay: 500})
sr.reveal('.skill-card', {interval: 100})
sr.reveal('.project-card', {interval: 150})
sr.reveal('.timeline-item', {interval: 200, origin: 'bottom'})
sr.reveal('.contact-snake-box', {interval: 100, origin: 'bottom'})
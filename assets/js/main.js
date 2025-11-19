/*=============== HOME SPLIT TEXT ===============*/
const {animate ,text ,stagger } = anime
const { chars: chars1 } = text.split('.home__profession-1', { chars: true })
const { chars: chars2 } = text.split('.home__profession-2', { chars: true })

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})
animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

/*=============== SWIPER PROJECTS ===============*/


/*=============== WORK TABS ===============*/


/*=============== SERVICES ACCORDION ===============*/


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/


/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
function runFadeOverlay() {
  const overlay = document.querySelector('.page-fade-overlay');
  overlay.classList.remove('hide');
  setTimeout(() => overlay.classList.add('hide'), 1000); // ১ সেকেন্ড ফেইড-আউট
}

window.addEventListener('DOMContentLoaded', () => {
  runFadeOverlay();
  setInterval(runFadeOverlay, 5000); // প্রতি ১০ সেকেন্ডে আবার চালাও
});

const navHome = document.querySelectorAll('.nav-option[data-name="home"]');
const navAboutus = document.querySelectorAll('.nav-option[data-name="about-us"]');
const navOffer = document.querySelectorAll('.nav-option[data-name="offer"]');

const btnBurger = document.querySelector('.burger-icon');
const btnClose = document.querySelector('.btn-mobile-close');
const navMobile = document.querySelector('.nav-mobile');

const offerSection = document.querySelector('#offer');
const aboutus = document.querySelector('#about-us');

const moreOffersBtn = document.querySelector('.more-offers-btn');

const checkPathName = (section) => {
    if(location.pathname == '/offers.html' || location.pathname == '/contact.html'){
        if(section == aboutus){
            location.href="index.html#about-us";
        }else{
            location.href="index.html#offer";
        }
    } else{
        test(section);
    }
}

const testClick = (e) => {
    if(!e.target.classList.contains('burger-icon')){
        if(navMobile.classList.contains('nav-mobile-active')){
            if(!e.target.parentNode.classList.contains('nav-mobile') && !e.target.classList.contains('nav-mobile')){
                checkNavMobile();
                document.removeEventListener('click', testClick);
            }
            
        }
    }
}

const test = (section) => {
    checkNavMobile();
    scrollTo(0, (window.pageYOffset + section.getBoundingClientRect().top - 45));
}

const checkNavMobile = () => {
    if(navMobile.classList.contains('nav-mobile-active')) navMobile.classList.remove('nav-mobile-active');
}

const navMobileToggle = () => {
    navMobile.classList.toggle('nav-mobile-active');
}


navAboutus.forEach(el => el.addEventListener('click', () => {
    checkPathName(aboutus);
}));

navOffer.forEach(el => el.addEventListener('click', () => {
    checkPathName(offerSection);
}));

navHome.forEach(el => el.addEventListener('click', () => {
    if(location.pathname == '/offers.html' || location.pathname == '/contact.html'){
        location.href = "index.html";
    } else{
        scrollTo(0, 0);
        checkNavMobile();
    }
}));


btnBurger.addEventListener('click', (e) => {
    navMobileToggle(e);
    document.addEventListener('click', testClick);
});
btnClose.addEventListener('click', (e) => {
    navMobileToggle(e);
});

moreOffersBtn.addEventListener('click', () => {location.href="offers.html"});




const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');


// DataTransfer.js servises data

const getServices = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "<p>" + paragraph + "</p>")}
    `
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    })
}




servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        const serviceClass = item.classList[1];
        getServices(serviceClass)
        item.classList.add('active')
    });
});

getServices('frontend')


// mix up

//github.com/patrickkunka/mixitup/     to see features
const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
    animation:{
        enable: false
    }
});
mixer.filter('*'); 








// swiper(testimonials section)

const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    spaceBetween:30,
    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    breakpoints:{
        600:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3
        }
    }
     
  });



  //  ->nav toggle
  const navMenu = document.querySelector('.nav__menu')
  const navOpenBtn = document.querySelector('.nav__toggle-open')
  const navCloseBtn = document.querySelector('.nav__toggle-close')

  const openNavHandler = () =>{
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
  }

  const closeNavHandler = () =>{
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
  }

  navOpenBtn.addEventListener('click', openNavHandler)
  navCloseBtn.addEventListener('click', closeNavHandler)

  //close the nav menu

  const navItems = navMenu.querySelectorAll('a');
  if(window.innerWidth<768){

    navItems.forEach(item => {
        item.addEventListener('click',closeNavHandler)
    })
  }


  const themeBtn = document.querySelector('.nav__theme-btn');
  themeBtn.addEventListener('click',() => {
    let bodyClass = document.body.className;
    if(!bodyClass){
        bodyClass = 'dark';
        document.body.className = bodyClass;
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
        //save theme in the local storage
        window.localStorage.setItem('theme', bodyClass);

    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        //save theme in the local storage
        window.localStorage.setItem('theme', bodyClass);
    }
  })

  //load theme on load

  window.addEventListener('load',() =>{
    document.body.className=window.localStorage.getItem('theme');
  })

 const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.side-header')
    const navLinks = document.querySelectorAll('.side-header li')
    //toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                console.log(index);
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle')

    })


}

navSlide();
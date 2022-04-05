
const btnBurgerChecked = () => {
    const btnBurger = document.querySelector('.js--btn-burger');
    const navMenu = document.querySelector('.js--header__nav');
    btnBurger.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
    })
}

export default btnBurgerChecked;
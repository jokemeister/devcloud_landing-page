const popUp = () => {
    const navServiceOpen = document.querySelector('.js--header_service')
    const navServicePopUp = document.querySelector('.js--service_pop-up')
    navServiceOpen.addEventListener('click', () => {
        navServiceOpen.classList.toggle('is-active');
        navServicePopUp.classList.toggle('is-active');
    })
}

export default popUp;
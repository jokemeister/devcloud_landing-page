const guarantees = () => {
    const guaranteesBlock = document.querySelector('.guarantees__block ');
    if (window.innerWidth <= 375) {
        guaranteesBlock.classList.remove('container')
    } else {
        if (guaranteesBlock.classList.contains('container')) return
        else guaranteesBlock.classList.add('container')
    }
}

export default guarantees;
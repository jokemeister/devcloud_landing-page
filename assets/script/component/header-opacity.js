const headerOpacity = () => {
    let header = document.querySelector('.js--header');
    let options = {
        threshold: [1]
    }
    let callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) header.classList.toggle('is-active');
            // else header.classList.add('is-active');
        })
    };
    let observer = new IntersectionObserver(callback, options);
    
    let target = document.querySelector('.js--swiper-stats');
    observer.observe(target);
}



export default headerOpacity;
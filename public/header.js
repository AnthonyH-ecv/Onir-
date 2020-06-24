window.onscroll = () => {
    const header = document.querySelector('.header');
    if(this.scrollY > 5){
        header.classList.add('scroll');
    }else {
        header.classList.remove('scroll');
    }
};
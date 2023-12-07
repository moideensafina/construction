
function toggleMenu(){
    const navbar =document.querySelector(".navbar");
    navbar.classList.toggle("active-navbar")
}
const scrollup=document.querySelector(".scrollup");

window.addEventListener("scroll",()=>{
    const scrollup=document.querySelector('.scrollup');
    if (this.scrollY>=560) {
        scrollup.classList.add('show-scroll');
    }
    else scrollup.classList.remove('show-scroll')
})
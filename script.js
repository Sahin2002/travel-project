let nav=document.querySelector('nav')
let play=document.querySelector('.videos-player')
AOS.init();
function opens(){
    console.log(nav)
    nav.classList.toggle('nav')
}
function players() {
    play.style='display:flex;'
}
function closes() {
    play.style='display:none;'
}
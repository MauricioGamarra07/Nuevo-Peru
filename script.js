function llamar(){
    let botonera=document.getElementById("botonera");
    botonera.classList.toggle("botonera-open");

    let menu=document.getElementById("menu");
    menu.querySelector('.menu .cerrar').classList.toggle("fa-times");
}
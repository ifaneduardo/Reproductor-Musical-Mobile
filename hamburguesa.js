const nav = document.querySelector("#Hamburguesa button");
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const menu = document.querySelector(".navbar");

nav.addEventListener("click", e=>{
    nav.classList.toggle("open");

    if(menu.classList.contains("abrirMenu")){
        cerrarMenu();
    }else{
        abrirMenu()
    }
})


const abrirMenu=()=>{
    menu.classList.toggle("abrirMenu");
    span1.classList.toggle("color");
    span2.classList.toggle("color");

}
const cerrarMenu=()=>{
    menu.classList.toggle("cerrarMenu");
    span1.classList.toggle("color");
    span2.classList.toggle("color");

}

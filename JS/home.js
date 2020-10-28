var imagen1 = document.querySelector(".cajaRow");
imagen1.addEventListener("click", ((e)=>{
    let informacion = e.target.alt;
    if(informacion == "img1"){
        posicion = document.querySelector(".posicion").style.display = "inline-flex";

    }
}));
var cerar = document.querySelector(".cerrar");
cerar.addEventListener("click", (()=>{
    posicion = document.querySelector(".posicion").style.display = "none";

}));


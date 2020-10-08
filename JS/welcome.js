/*const hola = document.getElementById ("mundo").innerHTML;
document.getElementById("hola").innerHTML = "<p>bien</p>"*/

function evaluarTrueFalse(){
  let trueFalse = true
  localStorage.setItem("guardarTrueFalse", trueFalse);
  }
  
  $respuestaTrueFalse=localStorage.getItem("guardarTrueFalse");
 
  if($respuestaTrueFalse) {
    const $vairable= document.querySelector("#contenedorTabla")
    $vairable.setAttribute("style", "display: block;")
  }
 
 


/* RESTAR O SUMAR DEPENDE LA RUTA */
 function sumaRestaGuayaquil(){
   sumaRuta = sessionStorage.getItem("porPagar");
   totalSuma = sumaRuta / 2;
   sessionStorage.setItem("porPagar", totalSuma);
  }

  function sumaRestaCuenca(){
    sumaRuta = sessionStorage.getItem("porPagar");
    totalSuma = sumaRuta * 2;
    sessionStorage.setItem("porPagar", totalSuma);
   }
/* RESTAR O SUMAR DEPENDE LA RUTA */


/* GUADAR ACMBIOS */




/* GUADAR ACMBIOS */


function ocultarNoTienesReservas(){
    let $ocultarTrueFalse = true
    localStorage.setItem("guardarOcultarTrueFalse", $ocultarTrueFalse);
}

RutaG = false;
RutaC = false;
NumeroAsiento = false;
Fecha = false;
Hora = false;

function mostrarDate(){
  alert("bien")
}
function mostrarBus (){
  guardarCambiosEditar = document.querySelector("#guardarCambios");
  guardarCambiosEditar.setAttribute("style", "display: inline-block");
}

const botonesEditar = document.querySelector("#botonesEditar");
botonesEditar.addEventListener("click", selectBoton);
function selectBoton(e){
  botones = e.target.value;
  switch(botones){
    case "ruta":{
      
      quitoCuenca = document.querySelector("#quitoCuenca")
      quitoGuayaquil = document.querySelector("#quitoGuayaquil");
      ruta = document.querySelector(".editarRutas");
      ruta.setAttribute("style", "display:block;");
      editarPago = localStorage.getItem("totalPagar");
      editarPago = parseInt(editarPago);
      /* console.log("pagar "  + editarPagar) */
      

      quitoGuayaquil.addEventListener("click", ((e)=>{
        sumaRestaGuayaquil();
        mostrarBus();
        precioPorAsiento = 10;
        sessionStorage.setItem("precioTablaS", precioPorAsiento);
        quitoGuayaquil.setAttribute("style", "background:  #9faaaf9c;");
        quitoCuenca.removeAttribute("style");
        nombreRutaEditada = e.srcElement.innerHTML  //primero solo pones la "e"  y buscas en el navegador su ubicacion.
        /* localStorage.setItem("rutaEditada",nombreRutaGuayaquil) */ //EJEMPLO DE COMO LO PUEDE HACER PARA GUARDAR LO EDITADO
        console.log(nombreRutaEditada);
        
      }));
      quitoCuenca.addEventListener("click", ((e)=> {
          sumaRestaCuenca()
          mostrarBus();
          precioPorAsiento = 20;
         sessionStorage.setItem("precioTablaS", precioPorAsiento);
          quitoCuenca.setAttribute("style", "background:  #9faaaf9c;");
          quitoGuayaquil.removeAttribute("style");
          nombreRutaEditada = e.srcElement.innerHTML;
          /* localStorage.setItem("rutaEditada",nombreRutaCuenca) */  //EJEMPLO DE COMO LO PUEDES HACER PARA GUARDAR LO EDITADO
          console.log(nombreRutaEditada);
        
      }))

    }
    break;
    case "numeroAsiento":{
      let bus = document.querySelector(".ocultarBus1");
      bus.setAttribute("style", "display:block;");
      mostrarBus();
      
    }
    break;
    case "fecha":{
      fecha = document.querySelector(".ocultarFecha");
      fecha.setAttribute("style", "display:block;")
      date = document.querySelector (".selected-date");
      date.addEventListener("click",((e)=>{
        mostrarBus();
        
        fechaExample = e.path[0].innerHTML;
        console.log("fecha: " + fechaExample);
      }));
      
    }
    break;
    case "hora":{

      horaEditar = localStorage.getItem("asientosReservadosGuardar");
      hora = document.querySelector(".editarHora");
      hora.setAttribute("style", "display:block;");
      SeisAM = document.querySelector("#seisAm");
      NueveAm = document.querySelector("#nueveAm");
      DiezAm = document.querySelector("#diezAm");
      CincoPm = document.querySelector("#cincoPm");
      OchoPm = document.querySelector("#ochoPm");

      SeisAM.addEventListener("click", (()=>{
      mostrarBus();
      SeisAM.setAttribute("style", "background:  #9faaaf9c;");
      NueveAm.removeAttribute("style");
      CincoPm.removeAttribute("style");
      DiezAm.removeAttribute("style");
      OchoPm.removeAttribute("style");
      horaEditar = "06:30 AM";
      console.log("hora: " + horaEditar)

        /* alert("6 am") */
      }));
      NueveAm.addEventListener("click", (()=>{
      mostrarBus();
      NueveAm.setAttribute("style", "background:  #9faaaf9c;");
      SeisAM.removeAttribute("style");
      CincoPm.removeAttribute("style");
      DiezAm.removeAttribute("style");
      OchoPm.removeAttribute("style");
      horaEditar = "09:30 AM";
      console.log("hora: " + horaEditar)

        /* alert("9 am") */
      }));
      DiezAm.addEventListener("click", (()=>{
      mostrarBus();
      DiezAm.setAttribute("style", "background:  #9faaaf9c;");
      NueveAm.removeAttribute("style");
      SeisAM.removeAttribute("style");
      CincoPm.removeAttribute("style");
      OchoPm.removeAttribute("style");
      horaEditar = "10:30 AM";
      console.log( horaEditar);
      /* alert("10 pm") */
      }));
      CincoPm.addEventListener("click", (()=>{
      mostrarBus();
      CincoPm.setAttribute("style", "background:  #9faaaf9c;");
      NueveAm.removeAttribute("style");
      DiezAm.removeAttribute("style");
      SeisAM.removeAttribute("style");
      OchoPm.removeAttribute("style");
      horaEditar = "05:00 PM";
      console.log( horaEditar);
      /* alert("5 pm") */
      }));
      OchoPm.addEventListener("click", (()=>{
      mostrarBus();
      OchoPm.setAttribute("style", "background:  #9faaaf9c;");
      NueveAm.removeAttribute("style");
      DiezAm.removeAttribute("style");
      SeisAM.removeAttribute("style");
      CincoPm.removeAttribute("style");
      horaEditar = "08:00 PM";
      console.log( horaEditar);
      /* alert("8 pm") */
      }));
    }
  }

}
var nombreRutaEditada = localStorage.getItem("datosDeRuta");
var fechaExample = localStorage.getItem("guardarFecha") ;
var horaEditar = localStorage.getItem("asientosReservadosGuardar");



  

/* function guardarCambios(){
  localStorage.setItem("guardarFecha", fechaExample);
  editarPago = sessionStorage.getItem("porPagar");
  localStorage.setItem("asientosReservadosGuardar", horaEditar);  
  localStorage.setItem("totalPagar", editarPago + "$"); 
  localStorage.setItem("precioTabla", precioPorAsiento);
  localStorage.setItem("datosDeRuta", nombreRutaEditada)
}
  */



  
//document.getElementById("aunNoTienesReservas").style.display="block"

/* 
var usuario []:
var apellidosNombres[];
var claves [];

funcion login 

]

*/



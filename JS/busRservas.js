const reservasAsientos = [];

bv1 = false; bv3 = false; bv5 = false; bv7 = false; bv9 = false; bv11 = false; bv13 = false; bv15 = false;
bv18 = false; bv20 = false; bv22 = false; bv24 = false; bv26 = false; bv28 = false; bv30 = false; bv32 = false;
bp2 = false; bp4 = false; bp6 = false; bp8 = false; bp10 = false; bp12 = false; bp14 = false; bp16 = false;
bp17 = false; bp19 = false; bp21 = false; bp23 = false; bp25 = false; bp27 = false; bp29 = false; bp31 = false;

bv33 = false; bp34 = false; bp35 = false; bp36 = false; bv37 = false; //ASIENTOS FINALES
dinero = false;
//CONSTRUCTOR DE OBJETO
/* var basePagar =  []; */
dineroEfectivo.onclick = function (){
    saltoDos = document.querySelector("#salto");
    dineroEfectivoDos = document.querySelector("#dineroEfectivo");
    dinero = !dinero;
    if(dinero){
        dineroEfectivoDos.setAttribute("style", "border-left: 7px solid #242323;");

    }
    saltoDos.setAttribute("style", "display: inline-block");
}


function guardarCambios(){
    solucion = sessionStorage.getItem("asientosReservados");
    localStorage.setItem("asientosReservados", solucion);
    localStorage.setItem("guardarFecha", fechaExample);
    editarPago = sessionStorage.getItem("porPagar");
    localStorage.setItem("asientosReservadosGuardar", horaEditar);  
    localStorage.setItem("totalPagar", editarPago);    // ANTES  TRAIA DE SESION editarPAgo que es donde guardaba la informacio de los asientos 
    localStorage.setItem("precioTabla", precioPorAsiento);
    localStorage.setItem("datosDeRuta", nombreRutaEditada);
    /* (nombreRutaEditada === "Quito-Guayaquil") */
    
  }
   


 //Guardar Datos Inicio
 horaViajar = document.querySelector("#selectHora");
 (() => {
   horaViajar.addEventListener("click", bien);
 })();
   function bien(e){
     horaGuardar = e.target.value;
     console.log(horaGuardar);
   }
   
   
   function guardarFecha(){
       fechaParaViajar = document.getElementById("fechaDeViaje").value;
   }


   
 
 //Guardar Datos Fin
 function evaluarDatos(){  //CUANDO LE DAS AL BOTON DE RESEVA EN EL ARCHIVO WELCOME
  guardarFecha();
  datosIncorrectos();
  localStorage.setItem("asientosReservadosGuardar", horaGuardar);
  /* let inctorducirDatos = document.getElementById("probandoStorage") */;
/*   let numeroAsientosReservados = document.getElementById("numeroAsientos").value; */
   /* console.log("Bien " + fechaParaViajar); */
   localStorage.setItem("asientosReservados", reservasAsientos);
  porPagar = sessionStorage.getItem("porPagar");
  localStorage.setItem("totalPagar" , porPagar);
  /* localStorage.setItem("guardarAsientos",numeroAsientosReservados);  */
  localStorage.setItem("guardarFecha",fechaParaViajar);
  
 }


function restar (){
    solucionBus = sessionStorage.setItem("asientosReservados", reservasAsientos);
  let valorSumar = sessionStorage.getItem("precioTablaS");
 let traerPrecio = document.getElementById("ocultarPrecio"); 
  mostrarTotal = document.getElementById("tablaAsientos");
 console.log("totalPagar: " + totalPagar)
 totalResta = parseInt(totalPagar-=parseInt(valorSumar));
 console.log("utlimo numero " + totalResta);
mostrarTotal.innerHTML = totalResta + " $"
sessionStorage.setItem("porPagar", totalResta );

 if(totalPagar <= 0){
    traerPrecio.style = "display: none;"
    
} 

}

function porPagar(){
    solucionBus = sessionStorage.setItem("asientosReservados", reservasAsientos);
    let valorSumar = sessionStorage.getItem("precioTablaS");
    let traerPrecio = document.getElementById("ocultarPrecio") 
    mostrarTotal = document.getElementById("tablaAsientos");
    totalPagar = reservasAsientos.length * parseInt(valorSumar);
    console.log("este es el numero total al que deberia restarle despues:" + totalPagar)
   /*  basePagar.push(totalPagar); */
   /* console.log ("en array " + basePagar );  */
     mostrarTotal.innerHTML = totalPagar + " $"
    if(totalPagar > 0){
        traerPrecio.style = "display: block;"
        sessionStorage.setItem("porPagar", totalPagar )
    } 
   /* localStorage.setItem("guardarPrecioTotal", totalPagar) */

   
   }


function v1(V1) {
    bv1 = !bv1
    if (bv1) {
        V1.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V1")
        console.log("Agregado " + reservasAsientos);
        indice = reservasAsientos.indexOf("V1")
        porPagar()
        
        
    } else {
        V1.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V1")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)
        
        restar();
        
    }
}

function p2(P2) {
    bp2 = !bp2
    if (bp2) {
        P2.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P2")
        console.log("Agregado " + reservasAsientos);
        porPagar()
        
        
        

    } else {
        P2.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P2")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)
        
        restar();
       

    }
}

function v3(V3) {
    bv3 = !bv3
    if (bv3) {
        V3.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V3")
        console.log("Agregado " + reservasAsientos);
        porPagar();

    } else {
        V3.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V3")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)
        
        restar();
        

    }
}

function p4(P4) {
    bp4 = !bp4
    if (bp4) {
        P4.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P4")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P4.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P4")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)

        restar();


    }
}

function p4(P4) {
    bp4 = !bp4
    if (bp4) {
        P4.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P4")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P4.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P4")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)

        restar();


    }
}


function v5(V5) {
    bv5 = !bv5
    if (bv5) {
        V5.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V5")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V5.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V5")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)

        restar();


    }
}

function p6(P6) {
    bp6 = !bp6
    if (bp6) {
        P6.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P6")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P6.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P6")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)

        restar();


    }
}


function v7(V7) {
    bv7 = !bv7
    if (bv7) {
        V7.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V7")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V7.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V7")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)
        restar();

    }
}

function p8(P8) {
    bp8 = !bp8
    if (bp8) {
        P8.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P8")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P8.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P8")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos)
        restar();

    }
}

function v9(V9) {
    bv9 = !bv9
    if (bv9) {
        V9.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V9")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V9.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V9")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function p10(P10) {
    bp10 = !bp10
    if (bp10) {
        P10.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P10")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P10.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P10")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function v11(V11) {
    bv11 = !bv11
    if (bv11) {
        V11.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V11")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V11.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V11")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}

function p12(P12) {
    bp12 = !bp12
    if (bp12) {
        P12.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P12")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P12.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P12")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function v13(V13) {
    bv13 = !bv13
    if (bv13) {
        V13.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V13")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V13.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V13")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}

function p14(P14) {
    bp14 = !bp14
    if (bp14) {
        P14.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P14")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P14.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P14")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}

function v15(V15) {
    bv15 = !bv15
    if (bv15) {
        V15.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V15")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V15.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V15")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}

function p16(P16) {
    bp16 = !bp16
    if (bp16) {
        P16.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P16")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P16.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P16")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function p17(P17) {
    bp17 = !bp17
    if (bp17) {
        P17.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P17")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P17.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P17")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function v18(V18) {
    bv18 = !bv18
    if (bv18) {
        V18.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V18")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V18.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V18")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function v18(V18) {
    bv18 = !bv18
    if (bv18) {
        V18.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V18")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V18.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V18")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function p19(P19) {
    bp19 = !bp19
    if (bp19) {
        P19.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P19")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P19.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P19")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function v20(V20) {
    bv20 = !bv20
    if (bv20) {
        V20.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V20")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V20.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V20")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function p21(P21) {
    bp21 = !bp21
    if (bp21) {
        P21.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P21")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P21.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P21")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function v22(V22) {
    bv22 = !bv22;
    if (bv22) {
        V22.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("V22")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V22.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V22")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}


function p23(P23) {
    bp23 = !bp23;
    if (bp23) {
        P23.setAttribute("style", "background:  #56b4f3;")
        reservasAsientos.push("P23")
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P23.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P23")
        console.log("indice: " + indice)
        reservasAsientos.splice(indice, 1)
        console.log("eliminar: " + reservasAsientos);
        restar();

    }
}
function v24(V24) {
    bv24 = !bv24
    if (bv24) {
        V24.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("V24");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V24.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V24");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function p25(P25) {
    bp25 = !bp25
    if (bp25) {
        P25.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("P25");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P25.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P25");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function v26(V26) {
    bv26 = !bv26
    if (bv26) {
        V26.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("V26");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V26.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V26");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function p27(P27) {
    bp27 = !bp27
    if (bp27) {
        P27.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("P27");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P27.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P27");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function v28(V28) {
    bv28 = !bv28
    if (bv28) {
        V28.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("V28");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V28.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V28");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function p29(P29) {
    bp29 = !bp29
    if (bp29) {
        P29.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("P29");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P29.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P29");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}

function v30(V30) {
    bv30 = !bv30
    if (bv30) {
        V30.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("V30");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V30.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V30");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function p31(P31) {
    bp31 = !bp31
    if (bp31) {
        P31.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("P31");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P31.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P31");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function v32(V32) {
    bv32 = !bv32;
    if (bv32) {
        V32.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("V32");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V32.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V32");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function v33(V33) {
    bv33 = !bv33;
    if (bv33) {
        V33.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("V33");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V33.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V33");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function p34(P34) {
    bp34 = !bp34;
    if (bp34) {
        P34.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("P34");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P34.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P34");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}



function p35(P35) {
    bp35 = !bp35;
    if (bp35) {
        P35.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("P35");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P35.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P35");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}



function p36(P36) {
    bp36 = !bp36;
    if (bp36) {
        P36.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("P36");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        P36.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("P36");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}


function v37(V37) {
    bv37 = !bv37;
    if (bv37) {
        V37.setAttribute("style", "background:#56b4f3;")
        reservasAsientos.push("V37");
        console.log("Agregado " + reservasAsientos);
        porPagar()

    } else {
        V37.setAttribute("style", "background:")
        indice = reservasAsientos.indexOf("V37");
        console.log("indice " + indice);
        reservasAsientos.splice(indice, 1);
        console.log("eliminar: " + reservasAsientos);
        restar();
    }
}









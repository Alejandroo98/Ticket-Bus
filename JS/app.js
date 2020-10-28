const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const NombreUsuario = document.getElementById("nombreUsuario")
const usuariosActivos = ["Alejo" , "Mateo" , "Jeff" , "Javier" , "Jona"]  // Desactivar




/* form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
    
    if(email.value!=usuariosActivos[1]){
        
        warnings += `Usuario incorrecto. <br>`
        entrar = true
    }
    if(pass.value!="1"){
        warnings += `Contraseña incorrecta. <br>`;

        entrar = true
    } 

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        //localStorage.setItem("usuario",email.value);
        localStorage.setItem("usuario",email.value);
        parrafo.innerHTML = "Redirigiendo"
        window.location.assign("http://127.0.0.1:5500/html/welcome.html?#cajaDeReservas");  
        
    } 
})
 */





function datosIncorrectos(){     
    let incorrecto=document.getElementById("numeroAsientos");
    let numeroCero = document.getElementById("numeroIncorrecto2");  
    incorrecto = 3;
    console.log(incorrecto);
    if(incorrecto>=1 && incorrecto<6){
    popup()
    evaluarTrueFalse();
    ocultarNoTienesReservas();

     
    }else if(incorrecto==0){
     numeroCero.innerHTML="Escribe un numero"
      
    }else{
        document.getElementById("numeroIncorrecto").style.display="block";  
    }
    }  
    
 
 
     function mostrarMetodo(){
         document.querySelector(".mostrarMetodoPago").style.display = "block";
         
     }
 
     function popup(){
      document.getElementById("ventanaFlotante").style.display="block";  
      
     }
     
  
     function rutaDos() {
         let documento = document.getElementById("destinos");
         let mensaje = "Quito-Cuenca"
         localStorage.setItem("datosDeRuta", mensaje);
         documento.innerHTML = mensaje
         mostrarMetodo();
         cajaDeDatos();
         destinosTiempoQuitoCuenca();
         
      }

     
     
      function rutaUno() {
          let documento = document.getElementById("destinos");
          let mensaje = "Quito- Guayaquil";
          localStorage.setItem("datosDeRuta", mensaje);
          documento.innerHTML = mensaje;
          mostrarMetodo();
          cajaDeDatos();
          destinosTiempoQuitoGuayaquil();
       }


      function destinosTiempoQuitoGuayaquil() {
        let documento = document.getElementById("destinosTiempo");
       
        let mensaje = "(Tiempo: 8 horas - Precio: 10$)"
        let precioFinal = 10;
        localStorage.setItem("precioTabla", precioFinal)
        sessionStorage.setItem("precioTablaS", precioFinal);
        documento.innerHTML = mensaje
      }
      function destinosTiempoQuitoCuenca() {
        let documento = document.getElementById("destinosTiempo");
         
        let mensaje = "(Tiempo: 15 horas - Precio: 20$)"
        let precioFinal = 20;
        sessionStorage.setItem("precioTablaS", precioFinal);
        localStorage.setItem("precioTabla", precioFinal)
        documento.innerHTML = mensaje

      }
     
      function cajaDeDatos(){
        let  mostrarBus = document.querySelector(".ocultarBus");
        let mostarReservar = document.querySelector("#botonReservar");
          document.getElementById("cajaDeReservas").style.display="block"
          mostrarBus.setAttribute("style", "display:block"); 
          mostarReservar.setAttribute("style", "display:block"); 
        }  


        function cerrarPopup(){
            document.getElementById("ventanaFlotante").style.display="none"
           }

            


         //ESTO ES PARA OCULTAR EL "AUN NO TIENES RESERLVAS" una vez reservado  
          
       
        


          
           
       

        //PROBANDO
       function viewsArrayInput (){
            var arrayInput = new  Array();
            var inputsValues =  document.getElementsByClassName('datoInput'),
            namesValues = [].map.call(inputsValues, function (dataInput){
           arrayInput.push(dataInput.value);
            })
       arrayInput.forEach(function(inputsValuesData){
            console.log("El valor es "+ inputsValuesData);
       })
        }
        

         /*salto.onclick = function (){
            $traerTrabla = document.querySelector("#contenedorTabla")
       $traerTrabla.setAttribute("clase" , "d-none")
       } */
        



       /* var Usuarios = [];
       var Claves = [];
       
       function entrarLogin(usuarioRegister, claveRegister){
           let indice = -1;
           let i = -1;
           let validacionUsuario = false;  
           Usuarios.forEach(usuarioNuevo => {
               i++;
               if (usuarioRegister == usuarioNuevo && claveRegister == Claves[i]){
                   validacionUsuario = true;
                   indice = i;
               }
           })
           if (validacionUsuario == true){
               localStorage.setItem("usuario", usuarioRegister)
               alert("Bienvenido")
               window.open("https://www.google.com")
           }else{
               alert("Incorrecto")
           }
       }
       
       function registroDeDatos (usuarioRegistrado, claveRegistrado){
           Usuarios.push(usuarioRegistrado);
           Claves.push(claveRegistrado);
           alert("Bien Alejo")
       }
       
       
       
       
       function ocultarLogin(){
           document.getElementById("formLogin").style.display="none"; 
           document.getElementById("formRegister").style.display="block"; 
       }
       
       
       function ocultarRegister(){
           document.getElementById("formLogin").style.display="block"; 
           document.getElementById("formRegister").style.display="none"; 
       }
 */



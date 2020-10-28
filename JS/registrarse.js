 var Usuarios = [];
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
        alert("Sesion iniciada correctamente");
  
        window.open("..//TICKET-BUS-SALAZAR/html/Home.html" , '_self')
        
    }else{
        alert("Usuario o contraseña incorrecto");
      
       

    }
}

function registroDeDatos (usuarioRegistrado, claveRegistrado, emailRegister ,cedulaRegister){
    localStorage.setItem("emailGuardado", emailRegister);
    localStorage.setItem("cedulaGuardada", cedulaRegister);
    Usuarios.push(usuarioRegistrado);
    Claves.push(claveRegistrado);
    ocultarRegister();
    let bienvenido = document.querySelector(".ocultarBienvenido ").style.display = "block";


    
  //alert("Bien Alejo")

}

var sesion = document.querySelector ("#bienvenidoSesion");
sesion.addEventListener("click",(()=>{
    document.querySelector (".ocultarBienvenido").style.display = "none";
    document.getElementById("formLogin").style.display="block"; 


}));

var olvide = document.querySelector("#Olvide");
 olvide.addEventListener("click",(()=>{
    document.getElementById("formLogin").style.display="none"; 
    document.querySelector(".ocultarOlvide").style.display = "block";

}));


(()=>{
    let cambiarDatoEmail = document.getElementById("correoElectronico");
    let cambiarDatoCedula = document.getElementById("numeroDeCedula");
    traerEmail = localStorage.getItem("emailGuardado");
    traerCedula = localStorage.getItem("cedulaGuardada");
    cambiarDatoEmail.innerHTML = traerEmail;
    cambiarDatoCedula.innerHTML = traerCedula;
    
})();
    



function ocultarLogin(){
    document.getElementById("formLogin").style.display="none"; 
    document.getElementById("formRegister").style.display="block"; 
}


function ocultarRegister(){
    document.getElementById("formRegister").style.display="none"; 
} 

function ocultarRegister2(){
    document.getElementById("formRegister").style.display="none"; 
    document.getElementById("formLogin").style.display="block"; 

} 

function crearCuenta2(){
    document.querySelector(".ocultarOlvide").style.display = "none";
    document.getElementById("formRegister").style.display = "block"; 
}




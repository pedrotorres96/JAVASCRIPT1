

let boton=document.getElementById("boton");
let respuesta=document.getElementById("respuesta");
let input=document.getElementById("input");

boton.addEventListener('click', (event) => {
   
    
    if(input.value<0){
        respuesta.innerText="La raíz cuadra no admite números negativos"
    }
    else{
        if(isNaN(Math.sqrt(input.value))){
            respuesta.innerHTML="Ingrese solamente números positivos";
        }
        else{
           respuesta.innerText=Math.sqrt(input.value);
        }
    }
})
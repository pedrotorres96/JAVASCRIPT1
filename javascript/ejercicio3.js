   
let boton=document.getElementById("boton");
let respuesta=document.getElementById("respuesta");
let input=document.getElementById("input");
boton.addEventListener('click', (event) => {
        
    if(5000>input.value<7000){
        respuesta.innerText="Es una temperatura de color Neutro"
    }
    if(input.value>=7000){
        respuesta.innerText="Es una temperatura de color Luz fria"

    }
    if(input.value<=5000){
        respuesta.innerText="Es una temperatura de color calido"

    }

})

let boton1=document.getElementById("boton1");
let respuesta1=document.getElementById("respuesta1");
let input1=document.getElementById("input1");

boton1.addEventListener('click', (event) => {
   
        if (input1.value<37,5){

            respuesta1.innerText="ESTADO DE SALUD= ESTABLE"
        }
        if(input1.value>=37.5){
        respuesta1.innerText="ESTADO DE SALUD= FEBRICULA"
        }
        if (input1.value>=38.1){
            respuesta1.innerText="ESTADO DE SALUD= FIEBRE LEVE"
        }
        if(input1.value>=38.5){
        respuesta1.innerText="ESTADO DE SALUD= FIEBRE MODERADA"
        }
        if( input1.value>39){
            respuesta1.innerText="ESTADO DE SALUD= FIEBRE ALTA"
        }
      
    
        
})
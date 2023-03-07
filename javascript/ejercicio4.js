

let boton=document.getElementById("boton");
let respuesta=document.getElementById("respuesta");
let input=document.getElementById("input");

boton.addEventListener('click', (event) => {
   
    let vector2=input.value.replace("[","");
    vector2=vector2.replace("]","");
    vector2=vector2.trim();
    let array=[];
    let acum="";
    for(let i=0;i<vector2.length;i++){
        console.log(vector2[i]);

        if(vector2[i]==" "){
            array.push(acum);
            acum="";
        }else{
             
            acum=acum+vector2[i];
        }
    }
    array.push(acum);
    
        let x1= -array[1] + Math.sqrt((array[1]*array[1])-4*array[0]*array[2]);
        x1= x1/(2*array[0]);

        let x2= -array[1] - Math.sqrt((array[1]*array[1])-4*array[0]*array[2]);
        x2=x2/(2*array[0]);

        respuesta.innerText=`la primera raíz es x(1) = ${x1} y la segunda raíz es x(2) = ${x2}`;

    
  
    
})

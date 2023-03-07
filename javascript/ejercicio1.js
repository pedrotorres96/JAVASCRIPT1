//Aquí haces tu código normal
let a=[1 , 2 , 3 , 4];
let b=[1,  1,  1,  0];
let suma=[];
for (let i=0; i<a.length;i++){
    suma.push(a[i]+b[i]);
    console.log(a[i]+b[i]);
}


let boton=document.getElementById("boton");
let respuesta=document.getElementById("respuesta");

boton.addEventListener('click', (event) => {
    respuesta.innerText=suma;
})

let c=[4 , 2 , 8 , 10];
let d=[14 , 11 , 8 , 7];
let resta=[];
for (let i=0; i<c.length;i++){
    resta.push(c[i]-d[i]);
    console.log(c[i]-d[i]);
}


let boton2=document.getElementById("boton2");
let respuesta2=document.getElementById("respuesta2");

boton2.addEventListener('click', (event) => {
    respuesta2.innerText=resta;
})

let e=[4 , 2 , 8 , 10];
let f=[14 , 11 , 8 , 7];
let g=[1 ,0 ,6, 9];
let sumavec=[];
for (let i=0; i<e.length;i++){
    sumavec.push(e[i]+f[i]+g[i]);
    console.log(e[i]+f[i]+g[i]);
}

let boton3=document.getElementById("boton3");
let respuesta3=document.getElementById("respuesta3");

boton3.addEventListener('click', (event) => {
    respuesta3.innerText=sumavec;
})


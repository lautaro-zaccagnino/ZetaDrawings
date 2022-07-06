let totalCarrito=0;
let guardadoCarrito=0;
let precio=0;
let guardadoPrecio=0;

/* let clasificador=[0,0,0,0,0,0]
let guardadoClasificador=[0,0,0,0,0,0] */

if(localStorage.getItem("guardadoCarrito") > 0){
    totalCarrito=localStorage.getItem("guardadoCarrito");
    precio=localStorage.getItem("guardadoPrecio");
    
}

/* function clasificadoDeDibujos(number){  POSPUESTO PARA ARRAYS
} */


function agregarAlCarrito(stock){

    if(totalCarrito < 10){
        console.log("Agregaste el producto al carrito");
        totalCarrito++;
        precio = multiplicar(totalCarrito);
        localStorage.setItem('guardadoCarrito', totalCarrito);
        localStorage.setItem('guardadoPrecio', precio);
        console.log(precio);
    }else{
        console.log("No hay más stock");
    }

}

function multiplicar(cantidad){  //Esta función no tiene sentido, bien se podría multiplicar la variable precio en la función agregarAlCarrito, pero lo hice así para justificar un ciclo for que pide el desafio
    let precio=0;
    
    for(let i=0; i<cantidad;i++){
        precio += 2500;
    }

    return precio;
}

console.log(totalCarrito);
console.log(precio);

function limpiarCarrito(){
    alert("Se reinició el carrito");
    totalCarrito=0;
    localStorage.setItem('guardadoCarrito', totalCarrito);
}

function compraste(){
    alert("¡¡Felicidades!! Se realizó tu compra :) \n (Se reinicia el carrito)");
    totalCarrito=0;
    localStorage.setItem('guardadoCarrito', totalCarrito);
}

let totalCarrito=0;
let guardadoCarrito=0;
let precio=0;
let guardadoPrecio=0;
let idCarrito;

const clasificador=[0,0,0,0,0,0] //Arrays "originales"
const stockDibujos=[3,4,2,1,5,6]

const guardadoClasificador=[0,0,0,0,0,0] //Arrays "de guardado"
const guardadoStockDibujos=[...stockDibujos]


if(localStorage.getItem("guardadoCarrito") > 0){
    totalCarrito=localStorage.getItem("guardadoCarrito");
    precio=localStorage.getItem("guardadoPrecio");
    let auxClasificador = JSON.parse(localStorage.getItem("guardadoClasificador")); //Auxiliar para poder devolver valores a los arrays "originales"
    let auxStockDibujos = JSON.parse(localStorage.getItem("guardadoStockDibujos"));
    console.log(guardadoStockDibujos);
    for(let i=0; i < auxClasificador.length; i++) { //Asigna los valores de los aux a los arrays "originales"
        clasificador[i] = auxClasificador[i];
        stockDibujos[i] = auxStockDibujos[i];
    }
}

function cantidadAlCarrito(idCarrito) {
    let cantidad;
    do{
        cantidad = prompt("¿Qué cantidad quiere agregar al carrito?\n(Solo números mayores que cero)");
    }while(isNaN(cantidad) || cantidad < 1);

    if(cantidad > stockDibujos[idCarrito]){
        alert("¡Lo lamentamos! No tenemos suficiente stock para completar la compra.")
    }else{
        for(let i=0; i < cantidad; i++){
            agregarAlCarrito(idCarrito);
        }
    }
}

function agregarAlCarrito(idCarrito){
    if(stockDibujos[idCarrito] > 0){
        console.log(stockDibujos[idCarrito])
        stockDibujos[idCarrito] -= 1;           //Operaciones básicas para el stock
        clasificador[idCarrito] += 1;
        console.log(stockDibujos[idCarrito])
        totalCarrito++;
        precio = multiplicar(totalCarrito);
        localStorage.setItem('guardadoCarrito', totalCarrito);
        localStorage.setItem('guardadoPrecio', precio);
        localStorage.setItem("guardadoClasificador", JSON.stringify(clasificador)); //Guarda los valores de los arrays "originales" a los "de guardado"
        localStorage.setItem("guardadoStockDibujos", JSON.stringify(stockDibujos));
    }else{
        alert("¡Lo lamentamos! No nos queda más stock del dibujo solicitado.");
    }

}

function restarAlCarrito(idCarrito){
    if(clasificador[idCarrito] > 0){
        console.log(stockDibujos[idCarrito])
        stockDibujos[idCarrito] += 1;           //Operaciones básicas para el stock
        clasificador[idCarrito] -= 1;
        console.log(stockDibujos[idCarrito])
        totalCarrito--;
        precio -= 2500;
        localStorage.setItem('guardadoCarrito', totalCarrito);
        localStorage.setItem('guardadoPrecio', precio);
        localStorage.setItem("guardadoClasificador", JSON.stringify(clasificador)); //Guarda los valores de los arrays "originales" a los "de guardado"
        localStorage.setItem("guardadoStockDibujos", JSON.stringify(stockDibujos));
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
    for(let i=0; i < clasificador.length; i++){
        clasificador[i] = 0;
    }
    localStorage.setItem('guardadoCarrito', totalCarrito);
    localStorage.setItem('guardadoClasificador', clasificador[idCarrito]);
}

function compraste(){
    alert("¡¡Felicidades!! Se realizó tu compra :) \n (Se reinicia el carrito)");
    totalCarrito=0;
    for(let i=0; i < clasificador.length; i++){
        clasificador[i] = 0;
    }
    localStorage.setItem('guardadoCarrito', totalCarrito);
    localStorage.setItem('guardadoClasificador', clasificador[idCarrito]);
}



/////////////////////////////////// Clase 4

/* function Producto(titulo, stock, precio){   ///Func constructora
    this.titulo = titulo;
    this.stock = stock;
    this.precio = precio;
}

const producto1 = new Producto("Remera", 10, 100);
const producto2 = new Producto("Zapatillas", 20, 200);


 */

////////////////////////////////////////////////////////////////

/* function Auto(marcaParametro, modeloParametro){
    this.marca = marcaParametro;
    this.modelo = modeloParametro;
}


const miPrimerAuto = new Auto("Ferrari", 1947); /// Objeto literal

const producto = {marca: 10, modelo: 900}

 */

/////////////////////////////////////////////////////////////

/* function Auto(objetoDelAuto){
    this.marca = objetoDelAuto.marca;
    this.modelo = objetoDelAuto.modelo;
}

const auto = {
    marca: "ferrari",
    modelo: 1947
}

const miPrimerAuto = new Auto(auto); */


///////////// Clase 5? Agrega objetos al carrito

/* const carrito = [];

function agregarAlCarrito(producto){
    carrito.push(producto);
}

agregarAlCarrito({id: 1, name: "Gorra", price: 900})
agregarAlCarrito({id: 2, name: "Zapatillas", price: 900})
agregarAlCarrito({id: 3, name: "Remera", price: 900})

function borarrProductoDelCarrito(producto){
    const index = carrito.findIndex(producto => producto.id === idDelProducto); //IndexOf === findIndex, la diferencia está en que el ultimo es para objetos
    if(index !== -1){ carrito.splice(index, 1);}
    console.log(index);
}

borarrProductoDelCarrito(1); */

/* const productos = ["Zapas", "Remeras", "Ojotas"];

let cards="";

productos.forEach( (producto)=>{   // Muestra cada producto del array
    console.log(producto);
    cards += producto;  // Genera una card por cada PRODUCTO
})

document.write(cards); */ //CLASE 6
let totalCarrito=0;
let guardadoCarrito=0;
let precio=0;
let guardadoPrecio=0;
let idCarrito;
let precioDeVenta;

const clasificador=[0,0,0,0,0,0] //Arrays "originales"
const stockDibujos=[3,4,2,1,5,6]

const identificadores = ["livTaylorS","charlyS","konanS","daenerysS","caballoS","yunoS"]; // ID's
const guardadoClasificador=[0,0,0,0,0,0] //Arrays "de guardado"
const guardadoStockDibujos=[...stockDibujos]                        //SPREAD ARRAY

const tiendaDibujos=[                                            /// ELEMENTOS DE LA TIENDA
    {
        id: 0, img: "../imagenes/Liv Taylor.jpg"
    },
    {
        id: 1, img: "../imagenes/Charly.jpg"
    },
    {
        id: 2, img: "../imagenes/Konan.jpg"
    },
    {
        id: 3, img: "../imagenes/emiliadraw.jpg"
    },
    {
        id: 4, img: "../imagenes/caballo.jpg"
    },
    {
        id: 5, img: "../imagenes/yuno.jpg"
    }
]


//////////////////////////////////////////////////////////
function cargado(){
    if(localStorage.getItem("guardadoCarrito") > 0){
        const [a,b,c,d,e,f] = guardadoStockDibujos; //Prueba de DESESTRUCTURACION EN ARRAYS 
        totalCarrito=localStorage.getItem("guardadoCarrito");
        precio=localStorage.getItem("guardadoPrecio");
        let auxClasificador = JSON.parse(localStorage.getItem("guardadoClasificador")); //Auxiliar para poder devolver valores a los arrays "originales"
        let auxStockDibujos = JSON.parse(localStorage.getItem("guardadoStockDibujos"));
        console.log(a,b,c);                                                          //Prueba de DESESTRUCTURACION EN ARRAYS 
        console.log(d,e,f);                                                          //Prueba de DESESTRUCTURACION EN ARRAYS             
        for(let i=0; i < auxClasificador.length; i++) { //Asigna los valores de los aux a los arrays "originales"
            clasificador[i] = auxClasificador[i];
            stockDibujos[i] = auxStockDibujos[i];
        }
    }
}

cargado ();

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
        
        Toastify({
            text: "Se agregó al carrito",
            duration: 750,
            offset: {
                x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
            
              
            }).showToast();

        updateCounters();
            
    }else swal("Error","No tenemos más stock", "error");

}

function restarAlCarrito(idCarrito){
    if(clasificador[idCarrito] > 0){
        console.log(stockDibujos[idCarrito])
        stockDibujos[idCarrito] += 1;           //Operaciones básicas para el stock
        clasificador[idCarrito] -= 1;
        console.log(stockDibujos[idCarrito])
        totalCarrito--;
        precio -= precioDeVenta;
        localStorage.setItem('guardadoCarrito', totalCarrito);
        localStorage.setItem('guardadoPrecio', precio);
        localStorage.setItem("guardadoClasificador", JSON.stringify(clasificador)); //Guarda los valores de los arrays "originales" a los "de guardado"
        localStorage.setItem("guardadoStockDibujos", JSON.stringify(stockDibujos));

        Toastify({
            text: "Se eliminó del carrito",
            duration: 750,
            offset: {
                x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
              style: {
                background: "linear-gradient(to right, #eb4937, #e06742)",
              },
              
            }).showToast();

        updateCounters();
    }
}


function multiplicar(cantidad){  //Esta función no tiene sentido, bien se podría multiplicar la variable precio en la función agregarAlCarrito, pero lo hice así para justificar un ciclo for que pide el desafio
    let precio=0;
    
    for(let i=0; i<cantidad;i++){
        precio += precioDeVenta;
    }

    return precio;
}

console.log(totalCarrito);
console.log(precio);

function limpiarCarrito(){
    if(totalCarrito > 0){
        precio -= 2500*totalCarrito;
        totalCarrito=0;
        for(let i=0; i < clasificador.length; i++){
            clasificador[i] = 0;
        }
        stockDibujos[0] = 3;
        stockDibujos[1] = 4;
        stockDibujos[2] = 2;
        stockDibujos[3] = 1;
        stockDibujos[4] = 5;
        stockDibujos[5] = 6;
        localStorage.setItem('guardadoCarrito', totalCarrito);
        localStorage.setItem('guardadoClasificador', clasificador[idCarrito]);
        swal("Éxito","Se reinició el carrito", "success")
        .then(() => {
            updateData();
        });
    } else swal("Error","No hay elementos en el carrito", "error");
}





function compraste(){
    if(totalCarrito > 0){
        totalCarrito=0;
        for(let i=0; i < clasificador.length; i++){
            clasificador[i] = 0;
        }
        localStorage.setItem('guardadoCarrito', totalCarrito);
        localStorage.setItem('guardadoClasificador', clasificador[idCarrito]);
        
        swal("¡Gracias por tu compra!","¿Deseas volver a la tienda?", "success",{
            buttons: {
                cancel: "No",
                confirm: {
                    text: "Sí",
                    value: "confirm",
                },
                },
          })
        .then((value) =>{
            switch (value) {
 
                case "confirm":
                  window.open("./tienda.html", "_self");
                  break;
             
                default:
                  window.open("./gracias.html", "_self");
              }
        });

    } else swal("Error","No hay elementos en el carrito", "error");

}

////////////////////////////// FETCH   a   JSON local

const precioDibujos = () => {
    fetch("../precios.json")
    .then((response) => response.json())
    .then(informacion => {
        let sumador = ``;
        informacion.forEach((precios) => {
            sumador += `${precios.precio}
            `
        })
        precioDeVenta = parseInt(sumador);
        if(document.getElementById("dolarPrecio") !=null)  document.getElementById("dolarPrecio").innerHTML = precioDeVenta;

        if(document.getElementById("precioTotal") !=null) document.getElementById("precioTotal").innerHTML = precioDeVenta;
        
    })
}

precioDibujos();

/////////////// ELEMENTOS TIENDA

let tiendaLink = document.querySelector("#divDibujos");

if (tiendaLink != null) {
    
    for (const dibujos of tiendaDibujos){                           ///Crear elementos de la tienda
        let contenedorDibujos = document.createElement("div");
        contenedorDibujos.innerHTML = `
            <img src="${dibujos.img}">
            <a onclick="agregarAlCarrito(${dibujos.id})"> (<span id="${identificadores[dibujos.id]}"></span> en stock) Sumar al carrito </a>
            `
        tiendaLink.appendChild(contenedorDibujos);
    }
    
    
    /* ${stockDibujos[dibujos.id]} */
    document.getElementById('cantidadCarrito').innerHTML = totalCarrito; ////// Tienda contador
    
    
    document.getElementById('livTaylorS').innerHTML = stockDibujos[0]; ////// Contadores de stock TIenda
    document.getElementById('charlyS').innerHTML = stockDibujos[1];
    document.getElementById('konanS').innerHTML = stockDibujos[2];
    document.getElementById('daenerysS').innerHTML = stockDibujos[3];
    document.getElementById('caballoS').innerHTML = stockDibujos[4];
    document.getElementById('yunoS').innerHTML = stockDibujos[5];

}



//////////Actualización de datos

function updateData(){                                                      //Actualizar datos (Limpiar el Carrito)
    document.getElementById('livTaylor').innerHTML = clasificador[0];
    document.getElementById('charly').innerHTML = clasificador[1];
    document.getElementById('konan').innerHTML = clasificador[2];
    document.getElementById('daenerys').innerHTML = clasificador[3];
    document.getElementById('caballo').innerHTML = clasificador[4];
    document.getElementById('yuno').innerHTML = clasificador[5]; 
    document.getElementById('cantidadCarrito').innerHTML = totalCarrito;
    document.getElementById('precioTotal').innerHTML = precio;
}



async function updateCounters(){                                            //Actualizar datos Stock, Clasificador, precio y carrito
    return new Promise( () =>{
        document.getElementById('cantidadCarrito').innerHTML = totalCarrito;

        if(tiendaLink != null){
            document.getElementById('livTaylorS').innerHTML = stockDibujos[0];
            document.getElementById('charlyS').innerHTML = stockDibujos[1];
            document.getElementById('konanS').innerHTML = stockDibujos[2];
            document.getElementById('daenerysS').innerHTML = stockDibujos[3];
            document.getElementById('caballoS').innerHTML = stockDibujos[4];
            document.getElementById('yunoS').innerHTML = stockDibujos[5];
        }
        
        if(document.getElementById("precioTotal") !=null){

            document.getElementById('precioTotal').innerHTML = precio;
    
            document.getElementById('livTaylor').innerHTML = clasificador[0];
            document.getElementById('charly').innerHTML = clasificador[1];
            document.getElementById('konan').innerHTML = clasificador[2];
            document.getElementById('daenerys').innerHTML = clasificador[3];
            document.getElementById('caballo').innerHTML = clasificador[4];
            document.getElementById('yuno').innerHTML = clasificador[5];
        }

    })
}
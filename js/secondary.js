
/* CLASE 2
const edadPersona=18;
const dineroEnElBolsillo = 1000;
const dineroDeLaEntrada = 1000;

if(edadPersona >= 18 || dineroEnElBolsillo >= dineroDeLaEntrada){
    console.log("Bienvenido a nuestro bar");
    if(edadPersona != 18){
        console.log("Felicitaciones, sos mayor de 18");
    }

} else {
    console.log("No podés entrar, pibe");
}*/


let num = prompt("Ingrese un número \n(Los resultados serán arrojados a la consola)");

for(let i=0; i<10;i++){
    num++;
    if(i<9){
        console.log("Número parcial: " + num);
    }else{
        console.log("Número final: " + num);
    }

}

console.log("Se agradece su colaboración en esta demostración de un ciclo for");
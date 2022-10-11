/*
//CLASE 1
//ES5
var nombre="Juan";

//ES6
//declaracion de variables
let nomb;
let apellido;
let anio;
let nombreCompletoDelUsuario;

//Asignacion
nomb="Jose";//no ponerle espacio al nombre porque no es bueno
apellido="Perez";
anio=2022;
nombreCompletoDelUsuario="Jose Perez";

//Inicializar
let user="Juan";
const DNI="40304731";

//Reasignacion
user="Martin";
//cuando es de tipo let se puede reasignar un valor
//cuando es una constante, no se puede reasignar un valor, ejemplo DNI="20206773"

let numero1=23;
let numero2=20;
const IVA=21;
const NUMERO=60.50;

let resultadoSuma=numero1+numero2;
let resultadoSuma2=IVA+34;//operacion matematica

//concatenacion de variables
nombreCompletoDelUsuario=nomb+" "+apellido;//genera el espacio en el nombre que se busca

//metodo de entrada prompt
//let nombreUser=prompt("Nombre","Nombre de usuario");

//metodos de salida
//arma secreta se utiliza siempre
console.log("Hola Soy un mensaje");//puede recibir un strim, una variable, etc.
//console.log(nombreUser);//se visualiza lo que el usuario ingresa en nuestra consola
console.log(resultadoSuma);//las variables van sin comillas porque sino es un strim
console.log(resultadoSuma2);
console.log(nombreCompletoDelUsuario);

//otro metodo aparte del console log que no se usa mucho
//alert
//alert("Cuidado!!");//el alert se puede ejecutar solo, no depende de una variable.

let usuario=prompt("Ingresa tu usuario");
let password=prompt("Password");

alert("Bienvenido/a "  + usuario);*/

//CLASE 2


/*
let ingreso1= prompt("Ingresa un numero");
let ingreso2= parseFloat(prompt("Ingresa un numero"));
ingreso1=parseFloat(ingreso1);
//parseInt()
//parseFloat()
//Nos permite convertir un valor de tipo strim a un numero
//ademas de llamar al let podemos agregar el parseint dentro del prompt, todas las cajas de texto del prompt siempre devuelven strim, tengo que convertirlas con parseint, o parsefloat el cual el parsefloat toma con decimales, el parseint no toma con decimales.

let resultado= ingreso1+ingreso2;//se suman las dos variables

console.log(resultado);

//let usuario=prompt("Ingresa tu usuario");
//let password=prompt("Password");

//alert("Bienvenido/a "  + usuario);
*/

//condicionales true=verdadero false=falso VALORES BOOLEANOS
//Siempre se ejecuta cuando la condicion sea verdadera
//operador de comparacion, se define por numero
/*let numero=10;//un = es asignacion
//== comparacion
if(numero==10){
console.log("El numero es 10"); 
}else{
    console.log("El numero es distinto de 10");
}
//la condicion else, significa "sino" porque hablamos de que si no es verdadero va esa otra condicion para que considere eso en caso de que no sea verdad
*/

/*let leftOrRight="Izquierda"

if(leftOrRight=="izquierda"){
    console.log("Homero por cerveza pierde la cabeza");
}else{
    console.log("Homero no pierde la cabeza por cerveza");
} */

//let usuario=prompt("Ingresa tu usuario");
//let password=prompt("Password");

/*if(usuario==""){
    console.log("El campo que ingreso no tiene que estar vacio");
}else{
    console.log("Bienvenido/a " + usuario);
}*/

//let usuarioGuardado="Juan";
/*if(usuario==usuarioGuardado){
    console.log("Bienvenido/a Juan como te ha ido hoy");
}else{
    console.log("Bienvenido/a usario " + usuario);
} */

//if()else if() else
//operador de comparacion menor que, el menor que es muy parecido a las etiquetas de apertura de html,
//let valor="100";

/*if (valor < 20) {
    console.log("El valor es menor a 20");
}else if(valor < 80){
    console.log("El valor es menor a 80");
}else if(valor < 120){
    console.log("El valor es menor a 120");
}else{
    console.log("El valor es "+valor);
}
*/

//variable booleana, porque tiene un boolean dentro, es un tipo de dato, puede tener dos estados, verdadero o falso
//let verdadero=true

/* let esMayor=valor === 100; //el doble igual no distingue el tipo de dato, el triple igual nos dice si es estrictamente igual, eso quiere decir que al ser un strim el valor no es igual a la formula === 100

console.log(esMayor);

if(esMayor){
    console.log("El numero es igual");
}else{
    console.log("El numero es menor o igual");
} */

/*let usuario=prompt("Ingresa tu usuario");
let password=prompt("Password");
let user= "Juan";
let pass="1234"; */
//operador &&(AND) hace que las comparaciones sean verdaderas para que se ejecuten como corresponde

/*if((usuario != "") && (password != "")){
    console.log("Usuario o contraseña incorrectos");    
}else{
    console.log("Bienvenido/a visitante: " + usuario);    
} */

//validacion de datos de login de una manera correcta
/*if(usuario == user && password == pass){
    console.log("Bienvenido/a: " + usuario);        
}else{
    console.log("Usuario o contraseña incorrectos");   
} */


//operador OR || cualquiera de las dos variables sea valida, se ejecuta el codigo, tienen que ser las dos falsas para que no se ejecute el codigo, no sirve para una validacion de usuarios

/*if(usuario == user || password == pass){
    console.log("Bienvenido/a: " + usuario);        
}else{
    console.log("Usuario o contraseña incorrectos");   
} */

/*if(usuario == "Juan" || usuario == "JUAN" || usuario == "JuAn"){
    console.log("Hola juan como estas");
}else{
    console.log("Hola " + usuario);
} */

//Clase 3

//FOR(para) es una palabra reservada, dentro del parentesis es desde, hasta o actualizacion, depende todo de una misma variable, lo que se escriba se ejecuta mientras dure el ciclo

//for(desde; hasta; actualizacion)el i++ es equivalente a "i = i + 1" , cuando el hasta devuelve false, el bucle termina

/*for (let i = -20; i <= 10; i++){
    console.log("Conteo: " + i);
} */

/*for(let i = 1; i <=4; i++){
    alert("Ya llegamos");
    alert("No");
}
alert("Burro!!! Podrias dejar de preguntar si ya llegamos!!"); */

/*for(let i = 1; i <=3; i++){
    let pregunta= prompt("");    
    if(pregunta!="Como estas?"){
        respuesta="Bien";
        alert(respuesta);

    }else{
        let respuesta="Si";
        alert(respuesta);
    }  
} */

/*let limite= parseInt(prompt("Ingresa un numero de limite"));
let ingreso= parseInt(prompt("Ingresa un numero"));

for(let i = 0; i <= limite; i++){
    let resultado= ingreso*i;
    console.log(ingreso + " * " + i + " = " + resultado);
} */

/* let numero= parseInt(prompt("Ingresa un numero para saber si es primo"));
//%(modulo)
let esPrimo= true;

for(let i = 2; i <= numero - 1; i++){
    if(numero % i === 0){
        console.log("Ademas de dividir por 1 y por si mismo, divide por ", i);
        esPrimo=false;
    }
}
if(esPrimo){
    alert("Ese numero es primo");
}else{
    alert("El numero no es primo");
} */

/*let palabraClave="Elkun";

for (let i = 1; i <=3; i++) {
    let ingreso=prompt("Ingresa la palabra clave");
    if(ingreso === palabraClave){
        console.log("Adivinaste");
        break;
    }
    
    
} */

//break interrumpe el ciclo, lo que hace es que si la palabra es correcta se corta, sino se sigue intentando

//continue sentencia, lo que hace en este caso es que saltea los numeros que son pares, porque puse el numero dos le obliga la sentencia que le puse el continue
/*for (let i = 0; i <= 10; i++){
    if(i % 3 == 0){
        continue;
    }
    console.log(i);
}*/

//while ciclo por conteo, (mientras se llama el ciclo), parecido al for pero para hacer otro tipo de validacion, el while necesitamos darle una condicion de salida, en este caso le decimos a contador que aumente, con el ++, esto se ejecuta mientras la condicion sea verdadera

/*let contador=0
while(contador <=10){
    console.log(contador);
    contador++
} */

/*let ingreso= prompt("Ingresa un producto . Para salir ingresa 0")

while(ingreso != "0"){
    console.log("Ingresaste el producto "+ingreso);//siempre poner la condicion de salida
    ingreso= prompt("Ingresa un producto . Para salir ingresa 0")
}*/

// do while permite ejecutar el codigo al menos una vez, lo que hace es ejecutar el codigo, y luego lo evalua
/*let ingreso="";
do{
    ingreso= prompt("Ingresa un producto . Para salir ingresa 0")
    console.log("Ingresaste el producto "+ingreso);//siempre poner la condicion de salida
}while(ingreso != "0");*/


//CLASE 4


//switch nos facilita los if y los else
//para hacer barra invertida alt+92, realiza un salto de linea
//la sentencia break lo que hace es que corte donde se lo pida, el break es muy importante en switch, el default tambien necesita un break el mensaje seria el error que cometio el usuario

/*let ingreso = prompt("Ingresa una opcion \n 1-Cafe solo \n 2-Cafe con leche \n 3-Te \n 4-Te con leche \n 5-Agua caliente");

switch(ingreso){
    case "1":
        console.log("Seleccionaste Cafe solo");

        break;

    case "2":
        console.log("Seleccionaste Cafe con leche");
    
        break;
    case "3":
        console.log("Seleccionaste Te");

        break;
    case "4":
        console.log("Seleccionaste Te con leche");

        break;
    case "5":
        console.log("Seleccionaste Agua caliente");

        break;    
    default:
        console.log("Opcion incorrecta");
        break;
}
*/

//Funciones, tenemos que llamar a la funcion para poder ejecutar el codigo que tenemos adentro, la llamamos por su nombre, lo ideal es primero definir y luego llamar la funcion
/*function saludar () {
    console.log("Hola alumnos y profesores!!");
}
/*saludar();
saludar();*/


/*function ingresoNombre(){
    let ingresoNombre= prompt("ingresa tu nombre")
    console.log(ingresoNombre);
    
}*/

//ingresoNombre();
/*let ingresoNombre= prompt("ingresa tu nombre")
let ingresoApellido= prompt("ingresa tu apellido");
function saludoPersonal(nombre, apellido){
    console.log("Hola " + nombre 
    + " " + apellido);
}
saludoPersonal(ingresoNombre, ingresoApellido);
saludoPersonal("Juan", "Mendoza");
*/
/*let resultado= 0;


function sumar(num1, num2){
    resultado = num1 + num2;
}

function mostrar(mensaje){
    console.log(mensaje);
}

sumar(5, 10);
mostrar("El resultado de la operacion es el siguiente ");
mostrar(resultado);
*/
/*function calcular(num1, num2, operador){
    switch (operador) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
    
        default:
            return 0;
            break;
    }
}*/

/*let resultadoSuma= calcular(30, 52, "/")
console.log(resultadoSuma);
//otra manera de llamar la function
console.log(calcular(30,80, "*"));
//return todo lo que escribamos debajo no se va a realizar, porque funciona como un break, si declaramos 1 return en el switch no hace falta poner break
*/

/*let resultado=0;

function sumar(num1, num2){
    let resultado=0;
    return(resultado= num1+num2);
    
}
function restar(num1, num2){
    let resultado = 0;
    return(resultado = num1 - num2);
}
resultado = sumar(3, 5);
console.log(resultado);
resultado = restar(15, 30);
console.log(resultado);

//otra forma de poder declarar funciones, las cuales son y hacen basicamente lo mismo, la manera de declararla es lo distinto, existen funciones anonimas, utilizan function tambien
const nombreCompleto = function(nombre, apellido){
    console.log(nombre + " " + apellido);
}

//las funciones anonimas las guardamos en una constante, como se llama esta funcion, es por su nombre, puede ser tambien un ingreso por prompt, la constante en este caso se usa para nombrar una funcion anonima, solamente anonima, con let reasigno un valor, con una constante no se puede
nombreCompleto("Sebastian", "Centurion");*/

//CLASE 5 Objetos
//function tradicional
/*function saludo(param){
    //codigo a ejecutar
}
//function anonima
const saludo1 = function(param){
    //codigo a ejecutar
};
//funcion flecha, es una funcion anonima porque no tiene un valor asignado, => hace que se convierta en una funcion flecha, el parametro se puede pasar sin el parentesis, si es un solo parametro, caso contrario tiene que llevar los parentesis, reemplaza la palabra function, es la diferencia con la anonima
const saludo2 = (param)=>{
    //codigo a ejecutar
    return "hola " + param;
};
console.log(saludo2("Sebastian"));
//objetos para declarar objetos se utilizan constantes, la sintaxis de los objetos son llaves, si se imprime es un objeto vacio, dentro del mismo tenemos que declarar los objetos, se separa por clave y un valor, la clave es el nombre de la variable, puede recibir un valor numerico. dentro del objeto va coma siempre para separar

//objeto literal puede tener un booleano
const persona={
    nombre:"Sebastian", 
    apellido:"Centurion",
    edad:25,
};
const persona1={
    nombre:"Juan", 
    apellido:"Ramirez",
    edad:23,
    direccion:"Avenida siempre viva",
    trabajo:"Administrativo",
};
console.log("Nombre: " + persona.nombre);
console.log("Apellido: " + persona.apellido);
console.log("Edad: " + persona.edad);
console.log(persona1);
//la anotacion de puntos es la que mas se utiliza (ejemplo de arriba)

//anotacion de corchetes es otra manera de acceder a los atributos del array, podemos ver los valores de las propiedades que tienen los objetos
console.log(persona1["nombre"]);
console.log(persona1["apellido"]);
//se pueden reasignar los valores, de esta manera, modifica el nombre en este caso de la persona que estaba arriba
persona.nombre="Chicho";
console.log(persona.nombre);
//en caso de que no tenga un atributo en particular, como en el caso de persona, que no cuenta con una direccion, se la ingresamos debajo y vemos como se modifica y logra agregarse la direccion de esta persona en este caso
persona.direccion="Cochabamba";
console.log(persona.direccion);
persona1["casado"]= false;
console.log(persona1.casado);*/

//funcion constructora la primera letra se declara con mayusculas, recibe parametros
//this, hace referencia al propio objeto, a la misma propiedad o atributo
/*function Auto(modelo, marca, anio, color){
    this.modelo = modelo;
    this.marca = marca;
    this.anio = anio;
    this.color = color;    
    this.arrancar = function(){
        return "Estoy en marcha";
    }
    this.frenar = ()=>{
        return "Freno de mano puesto"
    }
}
//new se utiliza para la funcion constructora
//let marca=prompt("Ingresa la marca")
const auto1= new Auto("Onix", "Chevrolet", "2018", "Gris plata")
const auto2= new Auto("Suzuki", "Fun", "2010", "Negro")
//console.log(auto1);
//console.log(auto1.marca);

//metodos, los strims javascript los determina como un objeto, y los objetos tienen propiedadas, una propiedad de los strims se llama length, nos da en este caso la longitud de caracteres que tiene nuestro mensaje

/*let mensaje= "Hola como estas?";
console.log(mensaje);
console.log(mensaje.length);
//los strims tienen metodos, los cuales son funciones
console.log(mensaje.toLowerCase());//sirve para guardar un ingreso de datos
console.log(mensaje.toUpperCase()); */
//mayuscula todas las letras
//el console.log es un objeto y el punto log, es una funcion del objeto console, lo mismo con el alert y el prompt, son metodos de objetos que son nativos de javascript
//funciones personalizadas
//los metodos solamente son accesibles cuando el objeto esta creado
/*console.log(auto1.arrancar());
auto2.arrancar()
console.log(auto1.frenar());

console.log("marca" in auto1 );//lo que nos hace ver la palabra "in" quiere decir que si existe dentro de la funcion que llamamos esa palabra, en este caso comentamos la palabra marca seguido del in preguntando si existe en auto1 esa palabra, nos devuelve un true porque la palabra esta en auto1
//forin, una constante que tiene un nombre que se llama key, que puede ser cualquier cosa, object va a ser el objeto, lista todos los objetos que tiene el atributo, en este caso el auto1
for (const key in auto1) {
   console.log(key + ": " + auto1[key]);  
}
for (const key in auto2) {
    console.log(key + ": " + auto2[key]);
    
}
console.log("marca" in auto1);
console.log(auto1.marca); */


//CLASE 6 ARRAYS los arrays son objetos, sirve para almacenarlos en forma de lista

//cualquiera de la function o class se puede usar, preferiblemente la clase

/*function Producto(nombre, precio, stock){
    this.nombre=nombre;
    this.precio=parseFloat(precio);
    this.stock=stock;

    this.sumarIva=()=>{
        this.precio= this.precio*1.21;
    }
}*/

/*class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;

        this.sumarIva = () => {
            this.precio= this.precio*1.21;
        }
    }    
}

const producto1=new Producto("Arroz", 123, 12);
//declaramos con constantes porque sino no es un array, los objetos tambien se declaran con constantes
const numeros=[1,2,3,4,5,6,7,8,9,0,15,16,17,18,19,20,21,22,23,24];
console.log(numeros);
const nombres=["Sebastian", "Pedro", "Ramon"]
console.log(nombres);
const booleanos=[true, false, false, true, false, true];
console.log(booleanos);
const mixtos=[1, "Juan", true, 3];
console.log(mixtos);


//con los arrays podemos acceder a cualquiera de las posiciones
//console.log(numeros[3]);
//si el valor que pasamos supera la posicion la cual se encuentra el array nos arroja "undefined"

/*for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}*/

//metodos del array, no pueden ser llamados si el objeto no esta constituido con el const, son metodos basicos

//push cuando lo hacemos en un array, le agregamos elementos a ese array
/*nombres.push("Bastian", "Santiago", "Juan");
console.log(nombres);

//otro metodo que nos permite quitar elementos del array, el metodo es el metodo pop(), el cual elimina el ultimo elemento del array
nombres.pop();
//console.log(nombres);

//otro metodo es el unshift, el cual agrega elementos al principio del array
nombres.unshift("Pepe");
//console.log(nombres);

//metodo que elimina desde el principio, es shift
//nombres.shift();
//console.log(nombres);

//el otro metodo es el metodo splice, elimina el elemento del array en cualquier ubicacion del array

//nombres.splice(1,1);
//console.log(nombres);

//metodo join, nos permite generar un strim del array, podemos aplicar un separador al momento de escribir

console.log(nombres.join("\n"));

//los datos tienen que ser en forma de matriz
//slice, recibe dos parametros
const nuevoArray=nombres.slice(0, 2);
console.log(nuevoArray);

//indexOf() devuelve la posicion en la cual se encuentra el elemento, si arroja -1 quiere decir que no figura en el carrito
/*console.log(nombres.indexOf("Sebastian"));
console.log(nombres.indexOf("Bastian"));

//este metodo se utiliza mucho, que es el elemento includes, pregunta si esta el elemento en el array, si no esta me devuelve un false
console.log(nombres.includes("Sebastian"));*/

/*const carrito=[];

console.log(carrito);

carrito.push(producto1);
carrito.push({nombre:"Tomate", precio:500, stock:150})


const producto2=new Producto("Cebolla", 150, 2000)
carrito.push(producto2)
console.log(carrito);

/*for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    
}*/

//forof nos permite recorrer el array por cada elemento que tengamos, en este caso los elementos van a ser los objetos, es mas practico que hacerlo con un for tradicional
/*for (const producto of carrito) {
    console.log(producto.nombre);
}*/
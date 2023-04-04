//Ejemplo 1 de suma 
/*const suma =(num1, num2) =>{
    if(!num1||!num2) return 0;
    if ( typeof num1!=="number" ||typeof num2!=="number") return null
    if(num1>0  && num2 >0){
    let sum ;
    sum =num1 +num2;
    return sum;
}
}*/

const suma =(...nums) =>{
 if (nums.length===0) return 0
 if(!nums.every(nums=>typeof nums ==="number"))return null
 return nums.reduce((prev,current)=>prev+current)
}


const login=(usr,pwd) =>{
    if (usr.length===0) return 0

}
//a=hi
//variables no definidas 
let test=0;

// escenario 1

console.log("<--------- Test Login -------->")
console.log("<--------- Test 1-------->")
let resultadoLogin =login("","");
if(resultadoLogin===" "){
    console.log("Test Aprobado")
    test++;
}else console.log("el test no ha pasado porque se esperaba un null")


console.log("<--------- Test iniciales-------->")
console.log("<--------- Test 1-------->")
let resultado =suma("2",2);
if(resultado===null){
    console.log("Test Aprobado")
    test++;
}else console.log("el test no ha pasado porque se esperaba un null")


let resultadoPrueba =suma();
if(resultadoPrueba==="hi"){
    console.log("Test Aprobado")
    test++;
}else console.log("el test no ha pasado a=hi")

//
console.log("<--------- Test 2-------->")
let resultadoTest2 =suma();
if(resultadoTest2===0){
    console.log("Test 2 Aprobado")
    test++;
}else console.log("el test no ha pasado porque se esperaba un 0")


console.log("<--------- Test 3-------->")
let resultadoTest3 =suma(3,3);
if(resultadoTest3===6){
    console.log("Test 3 Aprobado")
    test++;
}else console.log("el test no ha pasado porque l a suma no da el valor 6 ")

console.log("<--------- Test 4-------->")
let resultadoTest4 =suma(1,2,3,4,5);
if(resultadoTest4===15){
    console.log("Test 4 Aprobado")
    test++;
}else console.log("el test no ha pasado porque l a suma no da el valor 15 ")

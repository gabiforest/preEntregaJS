console.log("Calculadora simple para realizar operaciones ingresando 2 o 3 números para operar.")
console.log("Elija la opción deseada: ")
console.log("1 - Suma")
console.log("2 - Resta")
console.log("3 - Multiplicación")
console.log("4 - División")
console.log("0 - Salir")

//variables
let number1
let number2
let number3
let resultado
let cant
let i = 0
let opcion

//funciones
function sumar(number1, number2, number3) {
    cant = Number(prompt("Desea sumar 2 o 3 números?"))
    if (cant === 2) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2= Number(prompt("Ingrese el segundo numero:"))            
        resultado = number1 + number2
        console.log("Resultado: ", resultado)
    } else if (cant === 3) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2= Number(prompt("Ingrese el segundo numero:"))
        number3 = Number(prompt("Ingrese el tercer numero:"))
        resultado = number1 + number2 + number3
        console.log("Resultado: ", resultado)    
    }
}
function restar(number1, number2, number3) {
    cant = Number(prompt("Desea restar 2 o 3 números?"))
    if (cant === 2) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2= Number(prompt("Ingrese el segundo numero:"))            
        resultado = number1 - number2
        console.log("Resultado: ", resultado)
    } else if (cant === 3) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2= Number(prompt("Ingrese el segundo numero:"))
        number3 = Number(prompt("Ingrese el tercer numero:"))
        resultado = number1 - number2 - number3
        console.log("Resultado: ", resultado)    
    }
}
function multiplicar(number1, number2, number3) {
    cant = Number(prompt("Desea multiplicar 2 o 3 números?"))
    if (cant === 2) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2= Number(prompt("Ingrese el segundo numero:"))            
        resultado = number1 * number2
        console.log("Resultado: ", resultado)
    } else if (cant === 3) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2= Number(prompt("Ingrese el segundo numero:"))
        number3 = Number(prompt("Ingrese el tercer numero:"))
        resultado = number1 * number2 * number3
        console.log("Resultado: ", resultado)    
    }
}
function dividir(number1, number2) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2= Number(prompt("Ingrese el segundo numero:"))            
        resultado = number1 / number2
        console.log("Resultado: ", resultado)
}

//app
do{
    opcion = Number(prompt("Ingrese la opción: "))
    switch (opcion) {
        case 1:
            sumar()
            i++
            break;
        case 2:
            restar()
            i++
            break;
        case 3:
            multiplicar()
            i++
            break;
        case 4:
            dividir()
            i++
            break;
        default:
            break;
        }
    if (!parseInt(opcion) || opcion > 4 || opcion < 0) {
        break
    }
    } while (opcion !== 0) ;
console.log("La cantidad de operaciones realizadas fueron: ", i)
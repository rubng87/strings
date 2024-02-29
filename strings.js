//Métodos de Strings

let text_1 = "Hoy es viernes"

//Maneras de definir un String
let manera_1 = "Hola" // con dobe comillas
let manera_2 = 'Hola' // con comilla simple
let manera_3 = `Hola` // con acento grave


// lenght --> longitud de la cadena
console.log(`La variable tiene ${text_1.length} caracteres`) 

// charAt() --> obtnemos el caracter por la posición
console.log(text_1.charAt(0))
console.log(text_1.at(0))
console.log(text_1.at(-1))

console.log(text_1[1])

//silice 
let text_2 = text_1.slice(0, 4)
let text_3 = text_1.slice(4, 13)
let text_4 = text_1.slice(4)
console.log(text_2)
console.log(text_3)
console.log(text_4)

//substr --> extrae desde una posición inicial el número de caracteres que le indiquemos
let text_5 = text_1.substr(7)
console.log(text_5)

// toUpperCase() pone todo el texto en MAYUSCULAS
let text_6 = text_1.toUpperCase()
console.log(text_6)

// toLowerCase() pone todo el texto en minusculas
let text_7 = text_1.toLowerCase()
console.log(text_7)

let nombre = "fERRan"
let registro = "ferran"

if (nombre.toLowerCase()  == registro) {
    console.log("Es el mismo usuario")
} else {
    console.log("No sé quien es")
}

// toLocalUpperCase() pone todo el texto en MAYUSCULAS
let text_8 = text_1.toLocaleUpperCase()
console.log(text_8)

// toLocaleLowerCase() pone todo el texto en minusculas
let text_9 = text_1.toLocaleLowerCase()
console.log(text_9)

// concat --> unir strings
let buenos = "Buenos"
let dias = "días"
let saludo_completo_1 = buenos + " " + dias // "Buenos días"
let saludo_completo_2 = buenos.concat(" ", dias)
console.log(saludo_completo_2)

//trim --> elimina os espacios al principio y al final de la cadena
let usuario = "      Maria del Mar"
console.log(usuario.length)
let usuario_corregido = usuario.trim()
console.log(usuario_corregido.length)


//trimStart --> quita los espacios solo al principio
//trimEnd --> quita los espacios solo al final

//repeat --> repite una cadena
console.log("Hola ".repeat(3))

// replace --> reemplaza la primera aparición de un texto por otro
console.log(text_1)
console.log(text_1.replace("viernes", "jueves"))

let text_10 = "Me gusta mucho mucho mucho Javascript"
console.log(text_10.replace("mucho", "poco"))

// replaceAll
console.log(text_10.replaceAll("mucho", "poco"))

// split --> convierte un string en array
let nombre_completo = "Peter Pan" // "Pan, Peter"
let nombre_array = nombre_completo.split(" ")
console.log(nombre_array)
let nombre_final = nombre_array[1] + ", " + nombre_array[0]
console.log(nombre_final)

 

// Tenemos este nombre
let cliente1 = "    poppins, mary    "  // "Mary Poppins"
let cliente2 = "    mouse, mickey    "   // "Mickey Mouse"
// Mejora del código anterior
let cliente3 = "    de los anillos, el señor    " // "El señor De Los Anillos"


console.log(cliente1.length)
let cliente1_corregido = cliente1.trim()  //Quitamos los espacios del principio y del final
console.log(cliente1_corregido.length)
let cliente1_completo = "poppins, mary"
let cliente1_array = cliente1_completo.split(" ") //Convertimos de string a arrays
console.log(cliente1_array)
let cliente1_final = cliente1_array[1] + " " + cliente1_array[0]
console.log(cliente1_final)
console.log(cliente1_final.charAt(0))


console.log(cliente2.length)
let cliente2_corregido = cliente2.trim() //Quitamos los espacios del principio y del final
console.log(cliente2_corregido.length)
let cliente2_completo = "mouse, mickey"
let cliente2_array = cliente2_completo.split(" ") //Convertimos de string a arrays
console.log(cliente2_array)
let cliente2_final = cliente2_array[1] + " " + cliente2_array[0]
console.log(cliente2_final)
console.log(cliente2_final.charAt(0))

console.log(cliente3.length)
let cliente3_corregido = cliente3.trim()  //Quitamos los espacios del principio y del final
console.log(cliente3_corregido.length)
let cliente3_completo = "poppins, mary"
let cliente3_array = cliente3_completo.split(" ") //Convertimos de string a arrays
console.log(cliente3_array)
let cliente3_final = cliente3_array[1] + " " + cliente3_array[0]
console.log(cliente3_final)
console.log(cliente3_final.charAt(0))




// Nos han dado esta fecha:
let fecha = "29-02-2024" // Hay que obtener : "2024-02-29"
let fecha_array = fecha.split("-")
console.log(fecha_array)
let fecha_final = fecha_array[2] + "-" + fecha_array[1] + "-" + fecha_array[0]
console.log(fecha_final)

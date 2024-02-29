
// Tenemos este nombre
let cliente1 = "    poppins, mary    "  // "Mary Poppins"
let cliente2 = "    mouse, mickey    "   // "Mickey Mouse"

// Mejora del código anterior
let cliente3 = "    de los anillos, el señor    " // "El señor De Los Anillos"
let cliente4 = "     Spiderman        "


function arreglarNombres(cliente) {
    
    //quitar espacios
    let clienteSinEscpacios = cliente.trim()
    // separar apellido y nombre
    let separado = clienteSinEscpacios.split(", ")
    console.log(separado)

    let inicialApellido = separado[0].at(0).toUpperCase()
    let restoApellido = separado[0].slice(1)
    let appelido_completo = inicialApellido+restoApellido
    console.log(appelido_completo)

    let apellidoForma2 = separado[0].at(0).toUpperCase()+separado[0].slice(1)
    console.log(apellidoForma2)

    let nombrePila = separado[1].at(0).toUpperCase()+separado[0].slice(1)
    console.log(nombrePila)

    let nombre_final = nombrePila.concat(" ", appelido_completo)
    console.log(nombre_final)



    // let final = clienteSinEscpacios
    return nombrePila.concat(" ", appelido_completo)
}

console.log(arreglarNombres(cliente1))

function ponerInicialEnMayusculas (palabra) {
    return palabra.at(0).toUpperCase() + palabra.slice(1)
}

//console.log(ponerInicialEnMayusculas("de"));

function arreglarNombres_v2(cliente) {
    let nombreSinEspacios = cliente.trim().split(", ")
    console.log(nombreSinEspacios);
}









// Nos han dado esta fecha:
let fecha = "29-02-2024" // Hay que obtener : "2024-02-29"


// array para dividir en partes el string inicial
let arrayFecha = fecha.split("-")
console.log(arrayFecha) 
let fechaInvertida = arrayFecha[2] + "-"
console.log(fechaInvertida)
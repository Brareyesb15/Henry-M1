// pa quicksort: toma uno al azar. como? tomas array.length y lo divides entre dos, luego le metes redondeo. ese numero es la posicion del al azar.





function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  
    //okey probemos ahora [5, 1, 4, 2, 8,10,6,7]

    let divide = function(array) { 
        let arrayIzq = []
        var n = 0 
        while (array[n] !== array[Math.floor(array.length / 2)]) {
    arrayIzq.push(array.shift())
    n = n + 1
    console.log(arrayIzq)
    }
    return arrayIzq
    } // AQUI TERMINA LA FUNCION PARA DIVIDIR EN SÍ MISMA.
    console.log(divide(array))
    // AQUI COMIENZA LA RECURSIVIDAD. Crea la variable resDiv con la primera división
    let resDiv = divide(array) 
    while (resDiv.length !== 1) {
       resDiv = divide(resDiv)
    }
    console.log (resDiv)

    
    }





  


  let array = [5, 1, 4, 2, 8,10,6,7]
  console.log (mergeSort(array))
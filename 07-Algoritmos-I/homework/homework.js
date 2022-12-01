'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
 
    var n = 2
    var array = [1]
    while (num !== 1) {
        if (num % n === 0) {
            array.push(n);
            num = num / n; 
        }
        else {
            n++
        }
            
        }
        console.log(array)
    return array;
         
    
    }


    function bubbleSort(array) {
      // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
      // el array recibido como parámetro
      // Devolver el array ordenado resultante
      // Tu código:
    /* bubble sort toma un elemento en array y lo compara con el siguiente, si es mayor, toma la posición del anterior, si es menor
    se queda ahí y toma el elemento siguiente ej: [5,6,4,1,7,3] */
  
  
    for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < array.length-i; j++) {
      if (array[j]>array[j+1]) {
          let aux = array[j]
          array[j] = array [j+1]
          array[j+1] = aux;}
      
  }
      
    }
    return array
  
  }


  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante [6,5,4,3,7,1]
    // Tu código:

for (let j = 1; j < array.length; j++){
 for (let i = 0; i < array.length-j; i++) {
    if (array[i+1] < array [i]) {
         let aux = array[i]
          array[i] = array [i+1]
          array[i+1] = aux;}
     }
    }
  return array
  }

  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante.     [6,5,4,3,7,1]
    // Tu código:
    
    for (let j = 0; j < array.length-1; j++){
        let busc = j
        for (let i = j+1; i < array.length; i++) {
            
        if (array[busc] > array[i]) {
            busc = i
        }
    }
    if (array[busc] !== array[j])
    { let aux = array[j]
    array[j] = array[busc]
    array[busc] = aux}
      }
    return array
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

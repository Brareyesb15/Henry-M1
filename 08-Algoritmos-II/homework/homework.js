'use strict'
// No cambies los nombres de las funciones.


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivote = array[array.length-1]
  let izq = []
  let der = []
  for (let i = 0; i < array.length-1; i++) {
    if (pivote > array[i]) { izq.push(array[i]) }
    else {der.push(array[i])}
    console.log (der)
    console.log (izq)
      
  }
  return quickSort(izq).concat(pivote).concat(quickSort(der))
}
  

function mergeSort(array) {
 
if (array.length === 1) return array;

let separar = Math.floor(array.length / 2);
let izq = array.slice(0,separar);
let der = array.slice(separar);

return merge(mergeSort(izq), mergeSort(der))
}

function merge (izq, der) {
    
    let i = 0
    let j = 0
    let newArr = [] 

    while (i < izq.length && j < der.length) {
        if (izq[i] < der[j]) 
        { newArr.push(izq[i]); 
            i = i + 1}
            else 
            {newArr.push(der[j]);
                j= j + 1} 
    }
        return newArr.concat(izq.slice(i)).concat(der.slice(j)) }

  
  
  


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

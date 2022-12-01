'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una 
    lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, 
   al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() { {
  this.head = null
}
 
LinkedList.prototype.add = function (value) {
  let nodito = new Node(value);
  let current = this.head;

  if (!current) {
    this.head = nodito; // IMPORTANTE, CURRENT PASA A APUNTAR AL NODO.
  return "primer nodo"
  }
  while (current.next) {
    current = current.next; // CURRENT PASA A APUNTAR AL NODO SIGUIENTE. 
  }
  current.next = nodito;
  
  return current;
}

LinkedList.prototype.remove = function () {
  let current = this.head;
  if (!current) {
    return this.head; // IMPORTANTE, CURRENT PASA A APUNTAR AL NODO.
  }
  else if (!current.next) {
      
  this.head = null;
   return current.value ;
  }

  else
  while (current.next.next !== null) {
    current = current.next; // CURRENT PASA A APUNTAR AL NODO SIGUIENTE. 
  }
  let retorn= current.next
  current.next = null 
  return retorn.value
  
 }
 LinkedList.prototype.search = function(find) {
  let current = this.head;
  if (!current) return null; 
  while (current) {
  if (current.value === find)  return current.value;
  else if (typeof find === 'function') { 
  if(find(current.value) === true) {return current.value}
       }
       current = current.next
  }
  return null
 }

 }



function Node(value) {
       
        this.value = value;
        this.next = null;
      
   }

  

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones 
  posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio
   adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de 
  ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena 
  todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la
 tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket 
 específico (determinado al hashear la clave)
*/
function HashTable() {
  { 
  this.numBuckets = 35
  this.buckets = []
  }

    HashTable.prototype.hash = function(string) {
    let sumi = 0
    for (let i = 0; i < string.length; i++) {
      if (string.length[i] !== " ") {
      sumi = sumi + string.charCodeAt(i) }
    }
    return Math.floor(sumi % 35) 
    }
    HashTable.prototype.set = function (string1,string2) {
      if (typeof string1 !==  "string") {
      throw new TypeError ( "Keys must be strings") }
      let position = this.hash(string1)
      if (this.hasKey(string1) === true) {
        this.buckets[position][string1] = string2
        return }

      while (typeof this.buckets[position]=== "object") {  
        position = position +1 } 

    this.buckets[position] = {};
    this.buckets[position][string1] = string2} }
    

    /* importante aquí que aprendiste: Crear un objeto dentro de la función a través de corchetes, el dot notation es literal
    asi que te tomaba el string1 directamente como "string1" y no como lo que representaba, entonces lo creaste de esta forma, 
    entre corchetes ubicando cada cosa, position en lugar en el array bucket donde esta, el string1 para buscar el key, y agregaste
    el value. También aprendiste el concepto de THROW, lanza un error o una función u otra cosa. */

      /* vas  bien hasta aquí, mañana buscas como carajos ingresas esto a un bucket especifico. es decir, ya sabes
      que la posicion de "foo" y "amigo" es 24, como lo metes en el bucket 24 si no sabes qué es un bucket? 
      SPOILER ALERT: A través del constructor this.buckets = [] (minuto 1:14 Scomazzola 20a) Buenas noches. */


      //te falta arreglar esta funcion para que encuentre//

  HashTable.prototype.get = function(string1) {
    for (let i = 0; i < this.buckets.length; i++) {
    for (let key in this.buckets[i]) {
        if (key === string1) {
         return this.buckets[i][string1]; 
        }
       }
      }
      return false
    }
      HashTable.prototype.hasKey= function(string1) {
        if (this.get(string1) !== false)
        return true;
        else return false;  
          
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};

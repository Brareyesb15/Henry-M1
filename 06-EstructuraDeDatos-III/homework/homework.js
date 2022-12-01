'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) { {
   this.value = value
   this.left = null
   this.right= null
   }
BinarySearchTree.prototype.insert = function (value) {
if (this.value > value) {
   if (this.left === null) {
      this.left = new BinarySearchTree(value)
   } 
   else if (this.left) {
     this.left.insert(value)
   }
}
if (this.value < value){
   if (this.right === null) {
          this.right = new BinarySearchTree(value)
   } 
   else if (this.right) {
       this.right.insert(value)
   }
 }
} 

BinarySearchTree.prototype.size = function () {
   let size = 1
  if (this.left === null && this.right === null) {
      return 1;}
   
  
  let cont = function (binary) { 
      if (binary.left !== null && binary.right !== null) {
          size = size + 2;
          cont (binary.left) 
          cont (binary.right)
      }
      if (binary.left !== null && binary.right ===null) {
          size = size + 1;
          cont (binary.left)
      }
      if (binary.left === null && binary.right !== null) {
         size = size + 1;
         cont (binary.right) }
      else return size } 
  
  return cont(this) } 

BinarySearchTree.prototype.contains = function (value) { 
    
   if (this.value === value) {
       return true
   }
   if (value < this.value) {
       if (!this.left) 
      return false 
      else return this.left.contains(value);} 

   if (value > this.value)
   if (!this.right) {
       return false}
       else return this.right.contains(value)
   } 


BinarySearchTree.prototype.depthFirstForEach = function (cb,parametro){
   if (parametro === "post-order") {
       if (this.left) {this.left.depthFirstForEach(cb,parametro)}
       if (this.right) {this.right.depthFirstForEach(cb,parametro)}
       cb(this.value) 
   }
   else if (parametro === "pre-order") {
       cb (this.value)
       if (this.left) {this.left.depthFirstForEach(cb,parametro)}
       if (this.right) {this.right.depthFirstForEach(cb,parametro)}
   }
   else {
       if (this.left) {this.left.depthFirstForEach(cb,parametro)}
       cb (this.value);
       if (this.right) {this.right.depthFirstForEach(cb,parametro)}
   }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
  cb(this.value)
if (this.left) {
    cb(this.left.value)
    }
if (this.right) {    
    cb(this.right.value)
    }
    if (this.left) {this.left.breadthFirstForEach(cb)}
    if (this.right) {this.right.breadthFirstForEach(cb)}
}}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

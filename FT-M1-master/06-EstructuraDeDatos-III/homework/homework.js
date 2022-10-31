"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if (value>this.value) {
    if(this.right ===null)  this.right= new BinarySearchTree(value);
    else this.right.insert(value);
  }
  else if (value<this.value){
    if( this.left ===null) this.left= new BinarySearchTree(value);
    else this.left.insert(value);
  }
}
BinarySearchTree.prototype.size= function(){
if (this.left===null && this.right===null) return 1;
if (this.left===null && this.right !== null) return 1 + this.right.size();
if (this.left!==null && this.right === null) return 1 + this.left.size();
if (this.left!==null && this.right !== null) return 1 + this.left.size() + this.right.size(); 

}
BinarySearchTree.prototype.contains= function(value){
  if (value===this.value) return true;
  if (value>this.value) {
    if (this.right===null) return false
    else return this.right.contains(value);
  }
  if (value<this.value) {
    if (this.left===null) return false
    else return this.left.contains(value);
  }
}
BinarySearchTree.prototype.depthFirstForEach= function(cb, order){
// cb es una funcion que hace lo que quiera para cada uno de mis nodos
  if ( order=== "pre-order") {
// root - left - right
  cb(this.value)
  if (this.left!==null) this.left.depthFirstForEach(cb,order);
  if (this.right!==null) this.right.depthFirstForEach(cb,order);
  }
 else  if (order==="post-order") {
  //left - right - root
  if (this.left!==null) this.left.depthFirstForEach(cb,order);
  if (this.right!==null) this.right.depthFirstForEach(cb,order);
  cb(this.value);
  }
  else { 
      // left - root - right
    if (this.left!==null) this.left.depthFirstForEach(cb,order);
    cb(this.value);
    if (this.right!==null) this.right.depthFirstForEach(cb,order);
  }
}
BinarySearchTree.prototype.breadthFirstForEach=function(cb, array=[]) {
// cuando no me den un argumento, lo que podemos hacer es fijar uno por default;
// en este caso, si a mi me invocan la función de la forma function (cb), lo que va 
// a suceder es lo siguiente
// let array =[]
// se va a crear por defecto el valor que yo le fije con anterioridad, que en este caso, es un array vacío

if (this.left !== null) array.push(this.left)
if (this.right!==null) array.push (this.right)
cb (this.value); 
if (array.length>0) array.shift().breadthFirstForEach(cb, array)
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

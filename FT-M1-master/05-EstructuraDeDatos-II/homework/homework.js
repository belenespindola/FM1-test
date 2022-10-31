"use strict";

/*
Implementar la clase LinkedList(LISTAENLAZADA), definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head=null;
  this._length=0;
}

LinkedList.prototype.add= function (value) {
  if (this.head===null) {
    this.head=new Node(value)
    this._length++
  }
  else { 
    let current=this.head
    while (current.next!==null){
      current=current.next
    }
    current.next=new Node(value)
    this._length++
  }  
}



LinkedList.prototype.remove= function (value) {
  let current=this.head;
  if (this.head===null) { return null} //caso lista vacía
else {
if (current && !current.next) { //caso de lista con un solo nodo, aca preguntamos, si hay un solo nodo y si su next tiene valor null, entonces hacemos lo que sigue
  let aux=this.head.value;
  this.head=null;
  this._length--;
return aux; 

}
}

// caso para n cantidad de notos; debemos buscar el anteúltimo nodo 
// head - 1 - 2 -4- 6 - null, para borrar el nodo 6, debo posicionarme en el nodo 4
while (current.next.next !==null) { 
  //mientras current.next.next sea distinto de null, avanza un casillero al siguiente nodo,
  current=current.next;
}
 // cuando es null current.next.next, debo guardarme el valor de ese nodo
 let aux1=current.next.value;
 current.next=null;
 this._length--;
  return aux1;
}


LinkedList.prototype.search= function(value) {
  if (this.head===null) { return null} //caso lista vacia
  let current=this.head 
  while (current) {// mientras exista un current
    if (current.value===value) { return current.value}
    else if (typeof value === 'function') { //si el value que me pasan es una función, tengo que evaluar si el valor del nodo (osea current.value) para esa función se cumple TRUE; si es así, devuelvo el current.value, osea el valor del nodo
        if (value(current.value)) { 
          return current.value;
        }
    }
    current=current.next //si no se cumplen ninguna de las dos condiciones anteriores, paso al siguiente nodo para seguir buscando el valor
  }
// si no encuentra el valor, se corta la ejecución del while y retorna null
return null; 

};



function Node(value) {
  this.value=value
  this.next=null
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
this.numBuckets=35
this.buckets = []
}

HashTable.prototype.hash = function (key) {
  let sum=0
  for (let i=0; i<key.length; i++) {
    sum+=key.charCodeAt(i)
  }
 return sum%this.numBuckets;

};

HashTable.prototype.set = function(key, value)
{if (typeof (key) !== 'string') throw new TypeError ('Keys must be strings'); 
// en este paso, lo que hago es verificar que key si o si sea una string, y si no arroja error//
// lo que tengo que hacer ahora es hashear a key y que me devuelva la posicion dónde está//
let i= this.hash(key)
if (this.buckets[i]===undefined) { 
  this.buckets[i]={}
}
this.buckets[i][key]=value;
}
HashTable.prototype.get= function(key) {
  let i= this.hash(key)
if (this.buckets[i]===undefined) { 
  return undefined; }
  else return this.buckets[i][key];
}
HashTable.prototype.hasKey=function(key) {
  let i= this.hash(key)
  return this.buckets[i].hasOwnProperty(key);
}



// No modifiquen nada debajo de esta linea
// --------------------------------


module.exports = {
  Node,
  LinkedList,
  HashTable,
};

'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length<=1) return array; 
let pivot= array[0]
let derecha= []
let izquierda= []
for (let i=1; i<array.length;i++) {
  if (array[i]>pivot) {
    derecha.push(array[i])
}
else{
 izquierda.push(array[i])
}
}
return quickSort(izquierda).concat(pivot).concat(quickSort(derecha))
}

function merge (left,right) {
let leftIndex=0
let rightIndex=0
let arrOrdered=[]
while (leftIndex<left.length && rightIndex<right.length) {
  if (left[leftIndex]<right[rightIndex]) {
    arrOrdered.push(left[leftIndex]);
    leftIndex++;
  }
  else {
     arrOrdered.push(right[rightIndex]) 
    rightIndex++; 
    }
}
return arrOrdered.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length===1) return array;
let mid= Math.floor(array.length/2)
let left= array.slice(0,mid)
let right=array.slice(mid)

return merge(mergeSort(left),mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};


# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);


ESTO IMPRIMIRÁ: 10 8 8 9 10 1
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

ESTO IMPRIMIRÁ: UNDEFINED / LUEGO SE ROMPE PORQUE BAZ NO EXISTE, NO SE LLEGA A EJECUTAR FOO()
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

ESTO IMPRIMIRÁ: FRANCO
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

ESTO IMPRIMIRA: TONY FRANCO TONY


```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

ESTO IMPRIMIRÁ: The Flash- Reverse Flash -The Flash- Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinito 
{}[0] = [0]
parseInt("09")= 9
5 && 2 = 2
2 && 5 = 5
5 || 0 = 5
0 || 5 = 5
[3]+[3]-[10]
3>2>1 = false
[] == ![] = true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

Esto devolverá:
 undefined
2

Ya que al momento del console.log(a), a no está definida, solamente se ha guardado un espacio de memoria para dicha variable,
pero aún no se le ha asignado un valor. Y la función se va a ejecutar correctamente. 
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

ESTO RETORNA: UNDEF // como se le pasa FALSE, la condición if no se cumple nunca, entonces en el return SNACK, busca snack, y encuentra que está undef //
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
//
ESTO ME DEVUELVE:
AURELIO DE ROSA
UNDEF

El undef se da porque test se ejecuta en el contexto global; en este contexto, this es un objeto vacío que no posee
fullname, por lo tanto no lo encuentra y da undef.
//
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

Esto imprime:
1
4
3
2

El primer console log se ejecuta sin problemas. Cuando llega el primer setTimeout, lo deriva a la webApis para que lo trabaje.
Lo mismo hace con el segundo setTimeout; sigue la ejecución hasta el último console log y se imprime el 4. Luego, al no haber
otra cosa más por ejecutar, se imprime el 3 que tenía menos tiempo de "trabajo", y luego se imprime el 2 que tenía un poco más de tiempo para que el webApis trabaje.
```

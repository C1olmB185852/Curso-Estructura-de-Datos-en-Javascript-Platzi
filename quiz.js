/* En este desafío tendrás que crear tu propia implementación del método unshift.

La implementación del método unshift nos debe permitir agregar un elemento al 
inicio de un array y retornar la nueva longitud del array. En caso de no enviar ningún elemento 
este de igual forma nos retornará la longitud actual.

La solución debería tener un input y output como los siguientes:

Input

const myArray = new MyArray()

myArray.unshift("!!!")
myArray.unshift("Platzinauta")
myArray.unshift("lograste")
myArray.unshift("lo")

myArray.data

myArray.data retorna todos los elementos de nuestro array, no te debes preocupar por esta parte, ya está implementado en el código.

Output

1
2
3
4

{ 0: "lo", 1: "Lograste", 2: "Platzinauta", 3: "!!!" }

*/

export class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    
    unshift(item){
      // Tu código aquí 👈  
      if (!item) {
        return this.length
      }
      if (this.length !== 0) {
        for (let i = this.length - 1; i >= 0; i--) {
          this.data[i + 1] =
            this.data[i];
        }
      }
      this.data[0] = item;
      this.length++;
      return this.length
    }
  }
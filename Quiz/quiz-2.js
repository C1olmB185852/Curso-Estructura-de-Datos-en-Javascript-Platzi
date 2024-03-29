/*

En este desafío tendrás que crear tu propia implementación del método shift.

Contrario al reto anterior, aquí tendrás que hacer tu propio método shift para borrar el primer elemento que exista en tu array y retornar el elemento eliminado (no olvides modificar la longitud).

En caso de ser un array vacío, este método deberá devolver undefined.

Tu implementación debería tener un input y output como los siguientes:

Input

const myArray = new BetterArray()
myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

myArray.shift()

Output

"Un 🐱 random en el desafío"

*/

import { MyArray } from "./MyArray";

export class BetterArray extends MyArray {
  constructor(){
    super()
    this.length = 0
    this.data = {}
  }

  shift() {
        // Tu código aquí 👈
    const firstItem = this.data[0];

    if (firstItem) { 
      for (let i = 1; i < this.length; i++) {
        this.data[i - 1] = this.data[i];
      }
      delete this.data[this.length - 1];
      this.length--;
    }

    return firstItem;
  }
}
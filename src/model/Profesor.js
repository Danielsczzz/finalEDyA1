import { ordenamientoRapido } from '../util.js'

export class Profesor {
  constructor (nombre, asignaciones) {
    this.nombre = nombre
    this.asignaciones = asignaciones
    this.mejorSiesta = 0
  }

  obtenerMejorSiesta () {
    const siestas = this.#obtenerSiestas()
    ordenamientoRapido(siestas, 0, siestas.length)
    siestas.shift()
    this.mejorSiesta = siestas[0]
  }

  #obtenerSiestas () {
    const siestas = []
    for (let i = 0; i < this.asignaciones.length - 1; i++) {
      const siesta = this.asignaciones[i + 1].tiempoInicial - this.asignaciones[i].tiempoFinal
      siestas.push(siesta)
    }
    return siestas
  }
}

import { ordenamientoRapido } from '../util.js'

export class Profesor {
  constructor (nombre, asignaciones) {
    this.nombre = nombre
    this.asignaciones = asignaciones
    this.mejorSiesta = 0
  }

  obtenerMejorSiesta () {
    const siestas = this.#obtenerSiestas()
    ordenamientoRapido(siestas, 0, siestas.length - 1)
    this.mejorSiesta = siestas[0]
  }

  #obtenerSiestas () {
    const siestas = []
    const siestaInicial = parseInt(this.asignaciones[0].tiempoInicial)
    const siestaFinal = parseInt(1140 - this.asignaciones[this.asignaciones.length - 1].tiempoFinal)
    siestas.push({ siesta: siestaInicial, tiempoInicial: 0 })
    siestas.push({ siesta: siestaFinal, tiempoInicial: this.asignaciones[this.asignaciones.length - 1].tiempoFinal })
    for (let i = 0; i < this.asignaciones.length - 1; i++) {
      const siesta = this.asignaciones[i + 1].tiempoInicial - this.asignaciones[i].tiempoFinal
      siestas.push({ siesta, tiempoInicial: this.asignaciones[i].tiempoFinal })
    }

    console.log(siestas)
    return siestas
  }
}

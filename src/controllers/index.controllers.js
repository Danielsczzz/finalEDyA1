import { Asignacion } from '../model/Asignacion.js'
import { Profesor } from '../model/Profesor.js'
import { ordenamientoPorNombre } from '../util.js'

export function postCalcular (req, res) {
  const body = req.body
  const listaEntrada = body.entrada.split('--')
  const profesores = asignarProfesores(listaEntrada)
  profesores.forEach(item => {
    item.obtenerMejorSiesta()
  })
  res.send(profesores)
}

export function postOrdenar (req, res) {
  const body = req.body
  const listaEntrada = body.entrada.split('--')
  const nombresProfesores = listaEntrada[0].split(' ')
  const result = ordenamientoPorNombre(nombresProfesores)
  res.send(result)
}

function asignarProfesores (horarioConProfes) {
  const profesores = crearProfesores(horarioConProfes[0])
  const listaAsignaciones = crearAsignaciones(horarioConProfes[1])
  listaAsignaciones.forEach(item => {
    const profesor = profesores.find((profesor) => profesor.nombre === item[0])
    profesor.asignaciones.unshift(new Asignacion(item[1], item[2], item[3]))
  })
  return profesores
}

function crearProfesores (stringProfesores) {
  const profesores = stringProfesores.split(' ')
  const profesoresObjetos = []
  profesores.forEach(item => profesoresObjetos.unshift(new Profesor(item, [])))
  return profesoresObjetos
}

function crearAsignaciones (stringAsignaciones) {
  const asignaciones = []
  const asignacionesData = stringAsignaciones.split(';')
  asignacionesData.forEach(item => {
    const asignacionData = item.split(' ')
    asignaciones.unshift(asignacionData)
  })
  return asignaciones
}

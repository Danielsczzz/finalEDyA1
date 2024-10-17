import { Asignacion } from '../model/Asignacion.js'
import { Profesor } from '../model/Profesor.js'

export function postAgenda (req, res) {
  const body = req.body
  const dataProfesores = asignarProfesores(body.agenda)
  res.send(dataProfesores)
}

function asignarProfesores (horarioConProfes) {
  const allData = horarioConProfes.split('--')
  const profesores = crearProfesores(allData[0])
  const listaAsignaciones = crearAsignaciones(allData[1])
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

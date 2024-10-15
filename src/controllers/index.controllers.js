import { Asignacion } from '../model/Asignacion.js'
import { Profesor } from '../model/Profesor.js'

export function postAgenda (req, res) {
  const body = req.body
  const horario = body.agenda.split(';')
  const dataProfesores = separarDataPorProfesor(horario)
  const agendas = crearAgendaPorProfesor(dataProfesores)
  res.send(agendas)
}

function separarDataPorProfesor (horario) {
  const profesores = []
  horario.forEach(item => {
    const profesorData = item.split(' ')
    profesores.unshift(profesorData)
  })
  return profesores
}

function crearAgendaPorProfesor (profesores) {
  const agendas = []
  profesores.forEach(item => {
    const profeYaGuardado = agendas.find((profesor) => profesor.nombre === item[0])
    if (!profeYaGuardado) {
      agendas.push(new Profesor(item[0], [new Asignacion(item[1], item[2], item[3])]))
    } else {
      profeYaGuardado.asignaciones.push(new Asignacion(item[1], item[2], item[3]))
    }
  })
  return agendas
}

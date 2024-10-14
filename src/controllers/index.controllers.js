import { Asignacion } from '../model/Asignacion.js'
import { Profesor } from '../model/Profesor.js'

export function postAgenda (req, res) {
  const body = req.body
  const horarios = body.agenda.split(';')
  const agendas = crearAgendaProfesores(horarios)
  console.log(agendas)
  res.send({ data: agendas })
}

function crearAgendaProfesores (horarios) {
  const asignaciones = []
  let result
  horarios.forEach(item => {
    const profesorData = item.split(' ')
    const asignacion = new Asignacion(profesorData[1], profesorData[2], profesorData[3])
    asignaciones.unshift(new Profesor(profesorData[0], asignacion))
    result = Object.groupBy(asignaciones, ({ nombre }) => nombre)
  })
  return result
}

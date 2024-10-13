export const postAgenda = (req, res) => {
  const body = req.body
  const horarios = body.agenda.split(';')

  res.send({ data: horarios })
}

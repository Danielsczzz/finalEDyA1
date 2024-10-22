export function ordenamientoRapido (listaSiestas, inicio, fin) {
  if (inicio < fin) {
    const q = particion(listaSiestas, inicio, fin)
    ordenamientoRapido(listaSiestas, inicio, q - 1)
    ordenamientoRapido(listaSiestas, q + 1, fin)
  }
}

function particion (lista, inicio, fin) {
  const x = lista[fin]
  let i = inicio - 1
  for (let j = inicio; j <= fin - 1; j++) {
    // console.log(lista[j])
    // console.log(typeof lista[j])

    if (lista[j].siesta >= x.siesta) {
      i += 1
      const aux = lista[i]
      lista[i] = lista[j]
      lista[j] = aux
    }
  }
  const aux = lista[i + 1]
  lista[i + 1] = lista[fin]
  lista[fin] = aux
  return i + 1
}

export function ordenamientoPorNombre (listaProfesores) {
  return listaProfesores.sort()
}

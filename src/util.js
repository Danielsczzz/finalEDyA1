export function ordenamientoRapido (lista, inicio, fin) {
  if (inicio < fin) {
    const q = particion(lista, inicio, fin)
    ordenamientoRapido(lista, inicio, q - 1)
    ordenamientoRapido(lista, q + 1, fin)
  }
}

function particion (lista, inicio, fin) {
  const x = lista[fin]
  let i = inicio - 1
  for (let j = inicio; j <= fin - 1; j++) {
    if (lista[j] >= x) {
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

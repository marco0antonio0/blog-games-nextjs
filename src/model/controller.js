export function buscaLinear(lista, palavraChave) {
  const resultados = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].title.toLowerCase().includes(palavraChave.toLowerCase())) {
      resultados.push(lista[i]);
    }
  }

  return resultados;
}

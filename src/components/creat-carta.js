

export function crearCarta( carta) {

  if(!carta) throw new Error('Carta es obligatoria');

  const imgCarta = document.createElement('img');
        imgCarta.src = `/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');

  return imgCarta
}
import { crearCarta, pedirCarta, valorCarta } from './'


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

  if ( !puntosMinimos || !puntosHTML ) throw new Error('Es obligatorio puntosMinimos y puntosHTHML');

  let puntosComputadora = 0;

  do {
      const carta = pedirCarta(deck);

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML.innerText = puntosComputadora;

      divCartasComputadora.append( crearCarta(carta) );

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 300 );
}
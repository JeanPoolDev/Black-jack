import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposNormales Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposRaros Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>}
 */


export const crearDeck = (tiposNormales, tiposRaros) => {

  if( !tiposNormales || tiposNormales.length === 0 ) throw new Error('Valores normales encontrados 0')

  if( !tiposRaros || tiposRaros.length  === 0 ) throw new Error('Valores raros encontrados 0')


  let deck = [];

  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposNormales ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposNormales ) {
      for( let esp of tiposRaros ) {
          deck.push( esp + tipo);
      }
  }
  // console.log( deck );
  deck = _.shuffle( deck );
  console.log( deck );
  return deck;
}
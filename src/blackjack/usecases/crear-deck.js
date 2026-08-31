import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas - Ejemplo ['C','D','H','S']
 * @param {Array<string>} TipoEspeciales - Ejemplo ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, TipoEspeciales) => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of TipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
};

// export default crearDeck;
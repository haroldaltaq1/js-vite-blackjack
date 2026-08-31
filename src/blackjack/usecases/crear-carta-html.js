
/**
 * Crear elemento HTML Image
 * @param {String} carta 
 * @returns {HTMLImageElement} Elemento html image de retorno
 */
export const crearCartaHtml = ( carta ) => {
    const imgCarta = document.createElement('img');

    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    // divCartasComputadora.append( imgCarta );
    return imgCarta;
}
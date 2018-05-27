import leboncoin from 'leboncoin-api'

/* API leboncoin */

export const READ_ALL_PRODUCTS = 'READ_ALL_PRODUCTS'
export const ERROR_READ_ALL_PRODUCTS = 'ERROR_READ_ALL_PRODUCTS'
let search = new leboncoin.Search()
    .setPage(1)
    .setQuery("gibson")
    .setFilter(leboncoin.FILTERS.PARTICULIER)
    .setCategory("instruments_de_musique")
    .setRegion("ile_de_france")

export const readAllProducts = () => {

    return (dispatch) => {
        search.run().then((data) => {
            dispatch({ type: READ_ALL_PRODUCTS, payload: data.results })
        }).catch((error) => {
            dispatch({ type: ERROR_READ_ALL_PRODUCTS, errors:'error' })
        })
    }
}




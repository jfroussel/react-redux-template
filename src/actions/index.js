import axios from 'axios'
import leboncoin from 'leboncoin-api'

/* API leboncoin */

export const GET_LBC = 'GET_LBC'
export const ERROR_GET_LBC = 'ERROR_GET_LBC'
let search = new leboncoin.Search()
    .setPage(1)
    .setQuery("gibson")
    .setFilter(leboncoin.FILTERS.PARTICULIER)
    .setCategory("instruments_de_musique")
    .setRegion("ile_de_france")

export const getLBC = () => {

    return (dispatch) => {
        search.run().then((data) => {
            dispatch({ type: GET_LBC, payload: data.results })
        }).catch((error) => {
            dispatch({ type: ERROR_GET_LBC, errors:'error' })
        })
    }
}



/* countries actions */
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ERROR_GET_COUNTRIES = 'ERROR_GET_COUNTRIES'

export const getCountries = () => {
    const url = 'http://api.population.io:80/1.0/countries'
    return (dispatch) => {
        axios(url).then((response) => {
            console.log(response.data.countries)
            dispatch({ type: GET_COUNTRIES, payload: response.data.countries })
        }).catch((error) => {
            dispatch({ type: ERROR_GET_COUNTRIES, errors: error.response.data.detail })
        })
    }
}

/* API rest countries */
export const REST_COUNTRIES_ALL = 'REST_COUNTRIES_ALL'
export const REST_COUNTRIES_ALL_ERRORS = 'REST_COUNTRIES_ALL_ERRORS'

export const restCountries = () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    return (dispatch) => {
        axios(url).then((response) => {
            console.log(response.data)
            dispatch({ type: REST_COUNTRIES_ALL, payload: response.data })
        }).catch((errors) => {
            dispatch({ type: REST_COUNTRIES_ALL_ERRORS, errors: 'errors' })
        })
    }
}
import axios from 'axios'

/* countries actions */
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ERROR_GET_COUNTRIES = 'ERROR_GET_COUNTRIES'

export const getCountries = () => {
    const url = 'http://api.population.io:80/1.0/countries'
    return (dispatch) => {
        axios(url).then((response) => {
            console.log(response.data.countries)
            dispatch({ type: GET_COUNTRIES, payload: response.data.countries})
        }).catch((error) => {
            dispatch({ type: ERROR_GET_COUNTRIES, errors: error.response.data.detail})
        })
    }     
}
import leboncoin from 'leboncoin-api'



export const READ_ALL_PRODUCTS = 'READ_ALL_PRODUCTS'
export const ERROR_READ_ALL_PRODUCTS = 'ERROR_READ_ALL_PRODUCTS'
let search = new leboncoin.Search()
    .setPage(1)
    .setQuery("gibson")
    .setFilter(leboncoin.FILTERS.PARTICULIER)
    .setCategory("")
    .setRegion("ile_de_france")

export const readAllProducts = () => {
    return (dispatch) => {
        search.run().then((data) => {
            console.log('read all : ', data)
            dispatch({ type: READ_ALL_PRODUCTS, payload: data.results })
        }).catch((error) => {
            dispatch({ type: ERROR_READ_ALL_PRODUCTS, errors:'error' })
        })
    }
}

export const READ_PRODUCT = 'READ_PRODUCT'
export const ERROR_READ_PRODUCT = 'ERROR_READ_PRODUCT'

export const readProduct = (id) => {
    return (dispatch) => {
        search.run().then((data) => {
            data.results[id].getDetails().then((detail) => {
                dispatch({ type: READ_PRODUCT, payload: detail })
            })
        }).catch((error) => {
            dispatch({ type: ERROR_READ_PRODUCT, errors:'error' })
        })
    }
}

export const READ_PHONE_NUMBER = 'READ_PHONE_NUMBER'
export const ERROR_READ_PHONE_NUMBER = 'ERROR_READ_PHONE_NUMBER'

export const readPhoneNumber = (id) => {
    return (dispatch) => {
        search.run().then((data) => {
            data.results[id].getPhoneNumber().then((detail) => {
                console.log('detail : ',detail)
                dispatch({ type: READ_PHONE_NUMBER, payload: detail })
            })
        }).catch((error) => {
            dispatch({ type: ERROR_READ_PHONE_NUMBER, errors:console.log('phone number is undefined') })
        })
    }
}

export const CATEGORY_SELECTED = 'CATEGORY_SELECTED'

export const categorySelected = (category = null) => {
    return (dispatch) => {
        dispatch({ type: CATEGORY_SELECTED, payload: category })
    }
}







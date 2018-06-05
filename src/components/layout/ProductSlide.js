import React from 'react'
import ImageGallery from 'react-image-gallery'
import utf8 from 'utf8'

const style = {
    container: {
        border: 'solid 1px #f2f0ef',
        paddingTop: '25px',
        boxShadow: '0 2px 4px #f2f0ef',
        borderRadius: '2px',
    },
    title: {
        fontSize: '20px',
        paddingTop: '15px'
    },
    price: {
        fontSize: '20px',
        color: '#f56b2a',
        fontWeight: 'bold'
    },
    date: {
        fontSize: '14px',
    },

}

const renderDate = (date) => {
    return (
        date.toLocaleDateString('fr-FR', options)
    )
}
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" }

const renderImages = (images) => {
    //console.log('images list',images.length)
    let img = []
    images.map((image) => {
        return (
            img.push({ original: image, thumbnail: image })
        )
    })
    return img
}

const ProductSlide = ({ product }) => {
    if (!product) {
        return <div>Pas de produit trouvé</div>
    }
    return (
        <div className="container pt-3" style={style.container}>
            <ImageGallery items={renderImages(product.details.images.urls)} />
            <span style={style.title}>{utf8.decode(product.title)}</span><br />
            <span style={style.price}>{isNaN(product.price) ? '' : product.price + ' €'}</span>
            <p style={style.date}>{renderDate(product.date)}</p>
        </div>
    )
}

export default ProductSlide
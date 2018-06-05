import React  from 'react';
import utf8 from 'utf8'

const style = {
    description: {
        fontSize: '13px',
        color: 'c7c7c7',
        fontFamily: 'OpenSans,sans-serif'
    }
}

const carriage2br = (description) => {
    console.log('description : ',description)
    return (
        description.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>
        })
    )
}

const  ProductDescription = ({product}) => {
    if(!product) {
        return 'no description'
    }
    return (
        <div className="container pt-3">
            <hr />
            <p><b>Description</b></p>
            <p style={style.description}>{carriage2br(utf8.decode(product.description))}</p>
            <hr />
        </div>
    );
} 

export default ProductDescription;

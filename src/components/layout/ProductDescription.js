import React  from 'react';
import utf8 from 'utf8'

const style = {
    description: {
        fontSize: '14px',
        color: 'c7c7c7'
    }
}
const  ProductDescription = ({product}) => {
  
    if(!product) {
        return 'no description'
    }
    return (
        <div className="container pt-3">
            <hr />
            <p>Description</p>
            <p style={style.description}>{utf8.decode(product.description)}</p>
            <hr />
        </div>
    );
} 
   
       
    


export default ProductDescription;

import React from 'react';
import Navbar from '../components/layout/Navbar'
import Search from '../containers/Search'
import Content from '../components/layout/Content'

const ProductPage = () => {
    return (
        <div className="grid"> 
            <Navbar />
            <Search />
            <Content />
        </div>
    )
}
        
export default ProductPage;

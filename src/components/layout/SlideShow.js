import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'

const style = {
    container: {
        border: 'solid 1px #f2f0ef',
        paddingTop: '25px',
        boxShadow: '0 2px 4px #f2f0ef',
        borderRadius: '2px'
    },
    title: {
        fontSize: '20px',
        paddingTop: '15px'
    },
    price: {
        fontSize: '20px',
        color:'#f56b2a',
        fontWeight: 'bold'
    },
    date: {
        fontSize: '14px',
    }
}

class SlideShow extends Component {
    render() {
        const images = [
            {
                original: 'https://picsum.photos/1000/600?image=0',
                thumbnail: 'https://picsum.photos/250/150?image=0',
            },
            {
                original: 'https://picsum.photos/1000/600?image=1',
                thumbnail: 'https://picsum.photos/250/150?image=1',
            },
            {
                original: 'https://picsum.photos/1000/600?image=2',
                thumbnail: 'https://picsum.photos/250/150?image=2',
            },
            {
                original: 'https://picsum.photos/1000/600?image=3',
                thumbnail: 'https://picsum.photos/250/150?image=3',
            },
            {
                original: 'https://picsum.photos/1000/600?image=4',
                thumbnail: 'https://picsum.photos/250/150?image=4',
            },
            {
                original: 'https://picsum.photos/1000/600?image=5',
                thumbnail: 'https://picsum.photos/250/150?image=5',
            },
            {
                original: 'https://picsum.photos/1000/600?image=6',
                thumbnail: 'https://picsum.photos/250/150?image=6',
            },
        ]
        return (
            <div className="container pt-3" style={style.container}>
                <ImageGallery items={images} />
                <span style={style.title}>Epiphone Korina Flying V</span><br />
                <span style={style.price}>350 €</span>
                <p style={style.date}>26/05/2018 à 02h21</p>
            </div>

        );
    }
}

export default SlideShow;

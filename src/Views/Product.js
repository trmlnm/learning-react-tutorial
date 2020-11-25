import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams()
    const url = 'https://5fbe2ffa5923c90016e6aab7.mockapi.io/products/' + id
    const [product, setProduct] = useState(null)

    let content = null

    useEffect (() => {
        axios.get(url).then( response => {
            setProduct(response.data)
        })
    }, [url])
    

    if(product) {
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.name}
            </h1>
            <div>
                <img src={product.images} alt={product.name}/>
            </div>
    <div className="font-bold text-xl mb-3">$ {product.price}</div>
    <div className="mb-3">{product.description}</div>
        </div>
    }
    
    
    return (
        <div>
            {content}
        </div>
    )
}

export default Product
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequest';

function Product() {
    const { id } = useParams()
    const url = 'https://5fbe2ffa5923c90016e6aab7.mockapi.io/products/' + id
    
    let product = useAxiosGet(url)

    let content = null
    
    if(product.loading) {
        content = <Loader />
    }

    if(product.error) {
        content =  <p> Error, refresh or try again later.</p>
    }

    if(product.data) {
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img src={product.data.images} alt={product.name}/>
            </div>
    <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
    <div className="mb-3">{product.data.description}</div>
        </div>
    }
    
    
    return (
        <div>
            {content}
        </div>
    )
}

export default Product
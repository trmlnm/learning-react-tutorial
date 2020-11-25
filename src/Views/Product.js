import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader'

function Product() {
    const { id } = useParams()
    const url = 'https://5fbe2ffa5923c90016e6aab7.mockapi.io/products/' + id
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    let content = null

    useEffect (() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then( response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
                
            })
            .catch(error => {
                setProduct({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])
    
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
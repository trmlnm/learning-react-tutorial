import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return(
        <div className="border m-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div
                    style={{
                        'backgroundImage': `url(${props.product.images})`
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >

                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl m-3">
                    <Link to={`/products/${props.product.id}`}>
                        {props.product.name}
                    </Link>
                </h3>
                <div className="mb-3">$ {props.product.price}</div>
                <div className="mb-3">{props.product.description}</div>
                <Link 
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center"
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
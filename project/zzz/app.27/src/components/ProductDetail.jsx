import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import logic from '../logic'

export default function ProductDetail() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        logic.retrieveProductsById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => alert(error.message))
    }, [productId])

    return (
        <div>
            {product && (
                <div className="product-details">
                    <h2 className="product-h2-details">{product.name}</h2>
                    <img className="product-image-details" src={product.image} alt={product.name} />
                    <p className="product-price-details">Precio: {product.price}</p>
                    <p className="product-description-details">{product.description}</p>
                    <button className="button-back-details" onClick={() => window.history.back()}>Regresar</button>
                </div>
            )}
        </div>
    )
}
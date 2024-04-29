import React, { useState, useEffect } from 'react'
import { useUser } from "../hooks/UserContext"
import { Link } from 'react-router-dom'
import logic from '../logic'


export default function Product({ id, name, image, price, onSuccess, favProducts, isCartView }) {

    const [isProductFav, setIsProductFav] = useState(false)

    const { isLoggedIn } = useUser()

    useEffect(() => {
        if (favProducts) {
            const isFav = favProducts.some(product => product.id === id && product.fav === true)
            setIsProductFav(isFav)
        }
    }, [favProducts])

    const handleAddToCart = () => {
        try {
            logic.addToCart(id)
                .then(() => {
                    onSuccess()
                    alert("Producto agregado al carrito correctamente")
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleToggleFavClick = () => {
        try {
            logic.toggleFavProduct(id)
                .then(() => onSuccess())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <div className="product">
            <h2>{name}</h2>
            <img className='product-image' src={image} alt={name} />
            <p>Precio: {price}</p>
            {!isCartView && <>
                {isLoggedIn && <button className="cart-button" onClick={handleAddToCart}>🛍️</button>}
                <Link to={`/products/${id}`} className="details-button">Ver detalles</Link>
                {isLoggedIn && <button className="favs-button" onClick={handleToggleFavClick}>{isProductFav ? "🩷" : "💟"}</button>}
            </>}
        </div>
    )
}
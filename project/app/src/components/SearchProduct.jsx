// import React, { useState, useEffect } from 'react'
// import logic from '../logic'

// function SearchProduct() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const timerId = setTimeout(() => {
//             if (searchTerm) {
//                 setLoading(true)
//                 logic.retrieveProducts({ search: searchTerm })
//                     .then(products => {
//                         setProducts(products);
//                         setLoading(false);
//                     })
//                     .catch(error => {
//                         console.error('Error al buscar productos:', error)
//                         setLoading(false)
//                     })
//             }
//         }, 500)

//         return () => clearTimeout(timerId)
//     }, [searchTerm])

//     return (
//         <div className="search-container">
//             <input
//                 className="search-input"
//                 type="text"
//                 placeholder="Buscar productos..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="search-button" disabled={loading} type="button">
//                 {loading ? 'Buscando...' : 'Buscar'}
//             </button>
//             {products.map(product => (
//                 <div key={product.id}>{product.name}</div>
//             ))}
//         </div>
//     )
// }

// export default SearchProduct
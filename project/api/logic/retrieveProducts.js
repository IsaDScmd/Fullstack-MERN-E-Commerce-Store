// import { Product } from '../data/models.js'

// import { validate, errors } from 'com'
// const { NotFoundError, SystemError } = errors

// function retrieveProducts(params) {

//     Object.keys(params).forEach(key => {
//         validate.text(params[key], key)
//     })

//     // Crear la consulta basada en los parámetros proporcionados.
//     const query = {}
//     Object.keys(params).forEach(key => {
//         if (params[key]) {
//             query[key] = params[key]
//         }
//     })

//     return Product.find(query).lean()
//         .catch(error => { throw new SystemError(error.message) })
//         .then(products => {
//             if (!products || products.length === 0) {
//                 throw new NotFoundError('Products not found')
//             }
//             // Convertir MongoDB _id a id antes de devolver los productos.
//             products.forEach(product => {
//                 product.id = product._id.toString()
//             })

//             return products
//         })
// }

// export default retrieveProducts
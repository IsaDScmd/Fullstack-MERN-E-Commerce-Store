import { Product } from '../data/models.js'

import { validate, errors } from 'com'
const { SystemError } = errors

function findProductsByName(query) {
    validate.text(query, 'search query')

    return Product.find({ name: new RegExp(query, 'i') })
        .select('-__v')
        .lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(products => {
            return products.map(product => ({
                id: product._id.toString(),
                name: product.name,
                description: product.description,
                price: product.price,
                type: product.type,
                image: product.image
            }))
        })
}

export default findProductsByName
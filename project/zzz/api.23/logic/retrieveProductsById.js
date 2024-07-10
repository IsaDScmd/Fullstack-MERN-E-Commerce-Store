import { Product } from '../data/models.js'
import { validate, errors } from 'com'
const { NotFoundError, SystemError } = errors

function retrieveProductsById(productId) {
    validate.id(productId, 'product id')

    return Product.findById(productId).select('-__v').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(product => {
            if (!product)
                throw new NotFoundError('Product not found')

            product.id = product._id.toString()

            return product
        })
}

export default retrieveProductsById
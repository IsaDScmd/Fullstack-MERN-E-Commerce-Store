import { errors, validate } from 'com'
const { SystemError } = errors

export default function retrieveProductsById(productId) {
    validate.id(productId)

    return fetch(`${import.meta.env.VITE_API_URL}/product/${productId}`)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
        })
}
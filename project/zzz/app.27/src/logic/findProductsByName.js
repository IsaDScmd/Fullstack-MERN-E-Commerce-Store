import { errors, validate } from 'com'
const { SystemError } = errors

export default function findProductsByName(query) {
    validate.text(query, 'search query')

    return fetch(`${import.meta.env.VITE_API_URL}/products/search/by-name?query=${query}`)
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
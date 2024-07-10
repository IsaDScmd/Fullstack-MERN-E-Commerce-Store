import logic from '../logic/index.js'
import { errors } from 'com'

const { ContentError } = errors

export default (req, res) => {
    const { query } = req.query

    if (!query) {
        return res.status(400).json({ error: 'BadRequest', message: 'Query parameter is required' })
    }

    try {
        logic.findProductsByName(query)
            .then(products => res.status(200).json(products))
            .catch(error => {
                let status = 500

                if (error instanceof SystemError) {
                    status = 500
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof ContentError || error instanceof TypeError) {
            status = 406
        }

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
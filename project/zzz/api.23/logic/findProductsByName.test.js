import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import findProductsByName from './findProductsByName.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        try {
            findProductsByName('mosqueta')
                .then(product => console.log('retrieved', product))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
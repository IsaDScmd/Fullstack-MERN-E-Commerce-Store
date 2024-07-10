import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

import retrieveProductsById from './retrieveProductsById.js'

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        try {
            retrieveProductsById('65e8683deadcfb1397d77890')
                .then(product => console.log('retrieved', product))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
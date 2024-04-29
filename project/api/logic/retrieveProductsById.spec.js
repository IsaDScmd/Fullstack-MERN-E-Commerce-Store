import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'

import retrieveProductsById from './retrieveProductsById.js'
import { Product } from '../data/models.js'
import { errors } from 'com'

const { ObjectId } = mongoose.Types

const { NotFoundError } = errors

describe('retrieveProductsById', () => {
    before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Product.deleteMany())

    it('succeeds on existing product', () => {
        const image = random.image()
        const productName = random.productName()
        const productDescription = random.description()
        const productType = random.productType()
        const price = random.price(1, 20)

        const newProduct = new Product({
            name: productName,
            description: productDescription,
            image: image,
            price: price,
            type: productType
        })

        return newProduct.save()
            .then(savedProduct => {
                return retrieveProductsById(savedProduct._id.toString())
                    .then(retrievedProduct => {
                        expect(retrievedProduct).to.exist
                        expect(retrievedProduct.name).to.equal(productName)
                        expect(retrievedProduct.description).to.equal(productDescription)
                        expect(retrievedProduct.image).to.equal(image)
                        expect(retrievedProduct.type).to.equal(productType)
                        expect(retrievedProduct.price).to.equal(price)
                    })
            })
    })


    it('fails on non-existing product', () => {
        const nonExistingProductId = new ObjectId().toString()

        return retrieveProductsById(nonExistingProductId)
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('Product not found')
            })
    })

    after(() => mongoose.disconnect())
})
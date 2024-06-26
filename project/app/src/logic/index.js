import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import isUserLoggedIn from './isUserLoggedIn'
import createProduct from './createProduct'
import retrieveProductsByType from './retrieveProductsByType'
import createRecipe from './createRecipe'
import retrieveRecipesByType from './retrieveRecipesByType'
import toggleFavProduct from './toggleFavProduct'
import retrieveFavs from './retrieveFavs'
import addToCart from './addToCart'
import retrieveUserOrder from './retrieveUserOrder'
import updateCartItemQuantity from './updateCartItemQuantity'
import deleteOrder from './deleteOrder'
import retrieveRecipeById from './retrieveRecipeById'
import retrieveProductsById from './retrieveProductsById'
import findProductsByName from './findProductsByName'

const logic = {
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserLoggedIn,
    createProduct,
    retrieveProductsByType,
    createRecipe,
    retrieveRecipesByType,
    toggleFavProduct,
    retrieveFavs,
    addToCart,
    retrieveUserOrder,
    updateCartItemQuantity,
    deleteOrder,
    retrieveRecipeById,
    retrieveProductsById,
    findProductsByName
}

export default logic
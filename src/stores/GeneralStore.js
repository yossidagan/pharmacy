import {
    observable,
    action,
    computed
} from 'mobx'
import axios from '../../node_modules/axios/dist/axios'
import { throwStatement } from '@babel/types';

const API_URL = 'http://localhost:8000'

export class GeneralStore {


    @observable products = []
    @observable cartItems = []
    @observable cartTotal = 0
    @observable shippingCost = 6
    @observable includeShipping = false

    
    @computed get calcCartTotal() {

        let cartTotal = 0

        if (this.includeShipping)
            cartTotal = this.cartTotal + this.shippingCost
        else {
            cartTotal = this.cartTotal
        }
        return cartTotal
    }


    @action getProductsFromDB = async () => {

        let productsFromDB = await axios.get(`${API_URL}/products`)
        this.products = productsFromDB.data
    }


    @action addToCart = id => {

        let productsArray = this.products
        let chosenProduct = productsArray.find(p => p._id == id)
        let shoppingCart = this.cartItems

        shoppingCart.push(chosenProduct)
        this.cartTotal += chosenProduct.price
    }

    @action handleProductQuantity = (id, action) => {

        let cartItems = this.cartItems
        let cartTotal = this.cartTotal
        let chosenProduct = cartItems.find(ci => ci._id == id)
        let chosenProductIndex = cartItems.findIndex(ci => ci._id == id)

        if (action == "add") {
            chosenProduct.quantity++
            this.cartTotal += chosenProduct.price
        }
        if (action == "subtract") {
            chosenProduct.quantity--
            cartTotal -= chosenProduct.price
        }
        if (action == "remove") {
            cartItems.splice(chosenProductIndex, 1)
        }
    }
}


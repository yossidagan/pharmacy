import {
    observable,
    action,
    computed
} from 'mobx'
import axios from '../../node_modules/axios/dist/axios'
import { throwStatement, awaitExpression } from '@babel/types';

const API_URL = 'http://localhost:8000'

export class GeneralStore {


    @observable products = []
    @observable users = []
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

    @action getUsersFromDB = async () => {
        let users = await axios.get(`${API_URL}/users`)
        this.users = users.data
        console.log(this.users)
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
            console.log(chosenProduct.quantity)
            this.cartTotal = chosenProduct.quantity * chosenProduct.price
        }
        if (action == "subtract") {
            chosenProduct.quantity--
            this.cartTotal = chosenProduct.quantity * chosenProduct.price
        }
        if (action == "remove") {
            chosenProduct.quantity = 1
            cartItems.splice(chosenProductIndex, 1)
            if (!this.cartItems.length) {
                this.cartTotal = 0
            }
        }
    }

    @action sendMail = async (message) => {
        console.log(message)
        await axios.post(`${API_URL}/sendMail`, message)

    }

    @action checkLogin = (email, password) => {
        let user = this.users.find(u => (u.email === email) && (u.password === password))
        return user ? user : null
    }

    @action changeCurrentUser = user => {
        console.log(user)
        this.currentUser = user
        sessionStorage.setItem('login', JSON.stringify(user));
    }
    
}


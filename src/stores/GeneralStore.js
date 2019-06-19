import {
    observable,
    action,
} from 'mobx'
import axios from '../../node_modules/axios/dist/axios'

const API_URL = 'http://localhost:8000'

export class GeneralStore {


    @observable products = []
    @observable cartItems = []


    @action getProductsFromDB = async () => {
        let productsFromDB = await axios.get(`${API_URL}/products`)
        this.products = productsFromDB.data
    }

    @action addToCart = id => {
        console.log(this.products)
        console.log(id)

        let productsArray = this.products

        let chosenProduct = productsArray.find(p => p._id == id)
        console.log(chosenProduct)
        let shoppingCart = this.cartItems
        shoppingCart.push(chosenProduct)
        console.log(shoppingCart)

    }
}


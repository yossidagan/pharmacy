import {
    observable,
    action,} from 'mobx'
import axios from '../../node_modules/axios/dist/axios'

const API_URL = 'http://localhost:8000'

export class GeneralStore {


    @observable products = []


    @action getproductsFromDB = async () => {
        let products = await axios.get(`${API_URL}/products`)
        this.products = products.data
    }
    
}


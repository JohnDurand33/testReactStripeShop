import { useState, useEffect} from 'react'
import Product from './Product'
import {ProductType} from './types'
import './App.css'

const STRIPE_API_KEY = 'sk_test_51OteCK09eliXoygCOkplvCVTiUz4paIxgEb9NaeT5iPhX2moTrat6712oBwwxerXGHB558e7uWVt5nOrLfKSkhqV00HUBCm4WF'

function App() {
    const [products, setProducts] = useState([])
    
    const getProducts = async () => {
        const url = `https://api.stripe.com/v1/products`;
        const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${STRIPE_API_KEY}`
        }};
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        console.log(res.status)
        if (res.status === 200) {
            setProducts(data.data)
        }
    };
    
    useEffect(() => {
        getProducts()
    },[])

    const showProducts = () => {
        return products.map((p:ProductType) => <Product key={p.id} product={p} />)

    }

    return (
        <div>
            <h1>My Shop</h1>
            {showProducts()}
        </div>
    )
}

export default App

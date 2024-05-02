import React, { useState, useEffect } from 'react'
import { ProductType } from './types'

const STRIPE_API_KEY = 'sk_test_51OteCK09eliXoygCOkplvCVTiUz4paIxgEb9NaeT5iPhX2moTrat6712oBwwxerXGHB558e7uWVt5nOrLfKSkhqV00HUBCm4WF'

interface ProductProps {
    product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {

    const [price, setPrice] = useState(0.00)

    const getPrice = async () => {
        const url = `https://api.stripe.com/v1/prices/${product.default_price}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${STRIPE_API_KEY}`
            }
        }
        const res = await fetch(url, options)
        const data = await res.json()
        if (res.status === 200) {
            setPrice(data.unit_amount / 100)
        }
    };

        useEffect(() => { getPrice() },[])

        return (
            <div>
                {product.name} - ${price.toFixed(2)}
            </div>
        )
    }

export default Product
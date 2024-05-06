import React, { useState, useEffect } from 'react';
import { ProductType } from './types';
import './index.css'

const STRIPE_API_KEY = import.meta.env.VITE_STRIPE_API_KEY;

const Product: React.FC<{ product: ProductType; addToCart: (item: ProductType) => void }> = ({ product, addToCart }) => {

    const [price, setPrice] = useState(0.00);

    useEffect(() => {
        const getPrice = async () => {
            const url = `https://api.stripe.com/v1/prices/${product.default_price}`;
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${STRIPE_API_KEY}`
                }
            };

            const res = await fetch(url, options);
            const data = await res.json();

            if (res.status === 200) {
                setPrice(data.unit_amount / 100);
            }
        };

        getPrice();
    }, [product.default_price]);

    return (
        <div>
            {product.name} - ${price.toFixed(2)} <button onClick={() => addToCart(product)}>+</button>
        </div>
    );
};

export default Product;
import React from 'react';

import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Emergency = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/92332688-3071-4fc4-a8b2-f862e08a2e5a')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="grid lg:grid-cols-3">

            {
                products.map(product => <Product
                    key={product.price}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Emergency;
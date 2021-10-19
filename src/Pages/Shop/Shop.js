import React from 'react';

import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Emergency = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/724b9fa0-f4f2-4feb-b27b-57bd9ad175ab')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="grid lg:grid-cols-3">

            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Emergency;
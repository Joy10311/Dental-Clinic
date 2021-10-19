import React from 'react';

const Product = ({ product }) => {
    const { title, contact, image, price } = product;
    return (
        <div>
            <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 ">
                <div >
                    <img src={image} alt="" />
                    <h2 className="font-bold text-3xl text-center text-blue-600  my-2">{title}</h2>
                    <h5 className="font-bold text-red-700 text-center text-2xl ">Seller Contact:{contact} </h5>
                    <h5 className="font-semibold text-center text-xl">Price:{price} $</h5>
                    <button className="bg-blue-700 text-white rounded-lg mt-3 ml-20 lg:ml-44   p-3 mb-3">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
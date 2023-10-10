import React from 'react';
import ProductCard from "./ProductCard";

function ListProducts({products}) {
    //console.log(products);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ListProducts;
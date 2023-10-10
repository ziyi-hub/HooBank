import React, {useContext, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import ListProducts from "../components/dashboard/ListProducts";
import { SearchContext } from "../context/SearchContext";
import { SpinnerDefault } from "../components/layout/Spinner";

function Products() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [products] = useState([]);

    const productsToSearch = useContext(SearchContext);
    console.log();

    if(searchParams.get('keywords') !== null) {
        let keywords = searchParams.get('keywords');
        products = productsToSearch.searchProducts(keywords);
    }else{
        products = productsToSearch.ListFiltered;
    }

    return productsToSearch.loading ? (<SpinnerDefault />) : (
        <div>
            <ListProducts products={products}/>
        </div>
    );
}

export default Products;
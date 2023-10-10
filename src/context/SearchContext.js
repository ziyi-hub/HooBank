import React, {createContext, useEffect, useState} from 'react';
//import FetchProducts from "../services/FetchProducts";
import { FetchProducts } from "../services/FetchProducts";

export const SearchContext = createContext({
    ListFiltered: [],
    loading: true,
    searchProducts: () => {},
})

export function SearchProvider({children}) {
    const [ listProducts, setListProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const products = new FetchProducts();
        products.getProducts()
            .then((res) => {
                setListProducts(res);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    function searchProducts(keywords){
        return listProducts.filter(product => {
            return (product.title.indexOf(keywords) !== -1) || (product.category.indexOf(keywords) !== -1)
        })
    }

    const contextValue = {
        ListFiltered: listProducts,
        loading: loading,
        searchProducts: searchProducts,
    }

    return(
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
//Context (ListFiltered, getListProducts)
//Provider => gives your app access to all the things
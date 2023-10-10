import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login, Products, DetailProduct } from "../pages";
import { Layout } from "../components";
import AuthGuard from "../middlewares/AuthGuard";
import SearchProvider from "../context/SearchContext";

function Routers() {


    /* Nested routes */
    return (
        <SearchProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />

                    <Route element={<AuthGuard />}>
                        <Route path="home" element={<Home />} />

                        <Route path="/" element={<Layout />} >
                            <Route index path="dashboard" element={<Dashboard />}/>
                            <Route path="products" element={<Products />} />
                            <Route path="products/:id" element={<DetailProduct/>} />
                        </Route>
                    </Route>

                    {/*<Route path="*" element={<NoMatch />} />*/}
                </Routes>
            </BrowserRouter>
        </SearchProvider>
    );
}

export default Routers;
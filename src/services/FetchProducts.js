import React, { Component } from 'react';

export class FetchProducts extends Component {
    constructor() {
        super();
    }

    async getProducts(){
        const url = "https://fakestoreapiserver.reactbd.com/products";
        const products = await fetch(url)
        return await products.json();
    }

}

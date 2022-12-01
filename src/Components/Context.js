import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { cartReducer } from '../Reducer/Reducer'

const Cart = createContext();

const Context = ({ children }) => {


    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: [],
        singleProduct: {}
    })
    // console.log("DATA:", state);

    const fetchProducts = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data
        })
    }

    const getSingleProduct = async (url) => {
        const { data } = await axios.get(url)
        dispatch({
            type: "GET_SINGLE_PRODUCT",
            payload: data
        })
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <Cart.Provider value={{ state, dispatch, getSingleProduct }}>{children}</Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
};

export default Context
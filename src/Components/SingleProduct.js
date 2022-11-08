import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CartState } from './Context';

const SingleProduct = () => {
    const { state, getSingleProduct, dispatch } = CartState();
    const { singleProduct } = state;
    const { category, description, image, price, id: _id, title } = singleProduct;
    const { id } = useParams();
    useEffect(() => {
        getSingleProduct(`https://fakestoreapi.com/products/${id}`);
    }, [])

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div style={{ display: 'flex', marginTop: '30px' }}>
                <div style={{ width: '60%', height: '80vh', boxShadow: '0px 2px 5px grey', marginLeft: '20px' }}>
                    <img src={image} style={{ width: '90%', height: '80vh', marginLeft: '30px' }} alt="Product" />
                </div>
                <div style={{ width: '70%', height: '80vh' }}>
                    <p style={{ fontSize: '30px', marginLeft: '15px', marginBottom: '40px' }}>{title}</p>
                    <p style={{ fontSize: '25px', marginLeft: '15px', marginBottom: '40px' }}>{category}</p>
                    <p style={{ fontSize: '30px', marginLeft: '15px', marginBottom: '40px' }}>124 reviews</p>
                    <p style={{ fontSize: '30px', marginLeft: '15px', marginBottom: '40px' }}>Deal of the Day: ₹{Math.round(price)}/-</p>
                    <p style={{ fontSize: '30px', marginLeft: '15px', marginBottom: '40px' }}>{description && description.slice(0, 150)}...</p>
                    <hr />
                    <button style={{ backgroundColor: "purple", padding: '10px', fontSize: '20px', borderRadius: '10px', textAlign: 'center', marginLeft: '20px', marginTop: '20px', color: 'whitesmoke' }} onClick={() => dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                            id: id,
                            title: title,
                            image: image,
                            price: price,
                            qty: 1
                        }
                    })}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
import React, { useState } from 'react';
import './Course.css';
import fakeData from '../../fakeData/data';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
    const firstFifteen=fakeData.slice(0,15);
    const [products, setProduct] =useState(firstFifteen);
    
    const [cart, setCart]= useState([]);

    const handleEnrollCourse =(product)=>{
        const newCart=[...cart, product];
       
        setCart(newCart);
    
    }

    return (
        <div className="catagories-container">
            <div className="course-container">
                {
                     products.map(pd => <Product
                        handleEnrollCourse={handleEnrollCourse}
                         product={pd}
                         key={pd.key}
                         ></Product>)
                }
               
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Course;
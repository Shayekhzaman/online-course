import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // const product=props.product;
    // console.log(product);
    const {name, price, image}=props.product;
    

    return (
        <div className='product'>
            <div className='image-area'>
                <img src={image} alt=""/>
            </div>
            <div>
                <h3 className='course-name'>{name}</h3>
                <br/>
                <p>${price}</p>
                <button className='enroll-button'
                onClick={() => props.handleEnrollCourse(props.product)}
                >
                   <FontAwesomeIcon icon={ faShoppingCart} /> <span className='enroll'>Enroll Now</span></button>
                
            </div>
            
        </div>
    );
};

export default Product;
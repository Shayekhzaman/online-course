import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    let price=0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        price=course.price;
        total=total + course.price;     
    }
    const totalPrice =total.toFixed(2);
    return (
        <div className="course-summary">
            <h2 >Course order Summary:</h2>
           <p>Course Placed:{cart.length}</p>
           <p><small>Course price:${price}</small></p>
          <p>Total Price:${totalPrice}</p>
          <button>Review your order</button>
        </div>
    );
};

export default Cart;
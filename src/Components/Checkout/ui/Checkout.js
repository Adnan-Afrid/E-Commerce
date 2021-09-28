import React from 'react';
import '../assets/Checkout.css';

const Checkout = () => {
    return ( 
        <div  className="head_wrap">
            <div className="checkout_wrap">
            <label className="email_label">Username:</label>
                   <input type="email" placeholder="abc@email.com" className="email"/><br/>
                   <label className="password_label">Password:</label>
                   <input type="password" className="password"/>
                   <label>Card no:</label>
                   <input type="number" placeholder="4323-7323-45654" className="cardno"/>
                   <p>Your total amount is $ 790</p>
                   <div>
                   <button type="submit" className="confirmbtn">Confirm</button>
                   </div>

            </div>
        </div>
     );
}
 
export default Checkout;
import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { Store } from '../../store'
import firebase from 'firebase/app'
import { getFirestore } from '../../db'

const Checkout = () => {
    const db = getFirestore();
    const data = useContext(Store);
    const [orderId, setOrderId] = useState('');
    const [successfulSale, setSuccessfulSale] = useState(false);
    const [formOrder, setFormOrder] = useState({
        email: '',
        phone: '',
        fullname: '',
        company: '',
        address: '',
        city: '',
        state: '',
        postcode: '',
    })

    const handleChange = (e) => {
        setFormOrder({...formOrder, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('sales').add(purchase)
        .then(({id}) => {
            setSuccessfulSale(true);
            setOrderId(id);
        })
        .catch(e => console.log(e));
    }

    const purchase = {
        buyer: formOrder,
        items: data.itemsCart.items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: data.itemsCart.totalCart,
    }

    return (
        <section className="section is-medium">
            <div className="container">
                
                { !successfulSale ? 
                <>
                <h3 className="title is-uppercase mb-6">Checkout</h3>
                <div className="columns">
                    
                    <div className="column is-two-thirds">
                        <form onSubmit={ handleSubmit }>
                            <div className="mb-4">
                                <h5 className="title is-5 is-uppercase">1. Contact information</h5>
                                <div className="field is-grouped">
                                    <div className="control is-expanded">
                                        <label className="label">Email*</label>
                                        <input 
                                            className="input"
                                            name="email"
                                            value={formOrder.email} 
                                            onChange={handleChange} 
                                            type="email"
                                            placeholder="Your email"
                                        />
                                    </div>
                                    
                                    <div className="control is-expanded">
                                        <label className="label">Phone</label>
                                        <input 
                                            className="input" 
                                            name="phone"
                                            value={formOrder.phone} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your phone"
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr />
                            
                            <div className="mb-4">
                                <h5 className="title is-5 is-uppercase">2. Delivery Address</h5>

                                <div className="field is-grouped">
                                    <div className="control is-expanded">
                                        <label className="label">Full Name*</label>
                                        <input 
                                            className="input" 
                                            name="fullname"
                                            value={formOrder.fullname} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="control is-expanded">
                                    <label className="label">Company</label>
                                        <input 
                                            className="input" 
                                            name="company"
                                            value={formOrder.company} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your company"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                    <label className="label">Address*</label>
                                        <input 
                                            className="input" 
                                            name="address"
                                            value={formOrder.address} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your address"
                                        />
                                    </div>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control is-expanded">
                                        <label className="label">City</label>
                                        <input 
                                            className="input" 
                                            name="city"
                                            value={formOrder.city} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your city"
                                        />
                                    </div>
                                    <div className="control is-expanded">
                                        <label className="label">State</label>
                                        <input 
                                            className="input" 
                                            name="state"
                                            value={formOrder.state} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your state"
                                        />
                                    </div>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control is-expanded">
                                        <label className="label">Country*</label>
                                        <input 
                                            className="input" 
                                            name="country"
                                            value={formOrder.country} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your country"
                                        />
                                    </div>
                                    <div className="control is-expanded">
                                        <label className="label">Postcode*</label>
                                        <input 
                                            className="input" 
                                            name="postcode"
                                            value={formOrder.postcode} 
                                            onChange={handleChange} 
                                            type="text" 
                                            placeholder="Your postcode"
                                        />
                                    </div>
                                </div>
                                
                            </div>

                            <hr />

                            <div className="is-flex is-align-items-center is-justify-content-space-between">
                            <small>* Required fields</small>
                            <button type="submit" className="button is-primary is-rounded">Place order</button>
                        </div>
                        </form>
                    </div>

                </div>
                </>
                    :
                    <p>¡Successful purchase! your order number is: {orderId}</p>
                }
            </div>
        </section>
    )
}

export default Checkout
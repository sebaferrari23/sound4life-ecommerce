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
            data.setItemsCart({
                items:[],
                count: 1,
                totalCart: 0,
                totalPrice: 0,
            })
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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
                                                required
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

                        <div className="column">
                            <div className="box is-sticky">
                                <div className="is-flex is-align-items-center is-justify-content-space-between">
                                    <h4 className="title is-6 is-uppercase m-0">Your cart</h4>
                                    <Link to="/cart" className="button is-rounded is-primary is-outlined is-small">Edit</Link>
                                </div>
                                <hr/>
                                        
                                { data.itemsCart.items && data.itemsCart.items.map((item) => {
                                    return (
                                        <div key={item.product.id}>
                                            <div className="media is-align-items-center">
                                                <img className="image is-64x64" src={`/products/${item.product.image}`} alt={item.product.title} />
                                                <div className="media-content">
                                                    <p><strong>{item.product.title}</strong> x {item.quantity}</p>
                                                    <p>${item.product.price * item.quantity}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    );
                                })}
                                <p className="has-text-right"><strong>Total: </strong> ${data.itemsCart.totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </>
                    :
                <>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <div className="has-text-centered">
                                <span className="icon icon-circle has-text-white has-background-primary is-large mb-3"><i className="fas fa-check"></i></span>
                                <h3 className="title mb-2">¡Successful purchase!</h3>
                                <p className="mb-6">Your order number is: <strong>{orderId}</strong></p>
                            </div>
                            <table className="table is-fullwidth">
                                <tbody>
                                { formOrder.email && (
                                    <tr>
                                        <th><strong>Email: </strong></th>
                                        <td>{formOrder.email}</td>
                                    </tr>
                                )}
                                { formOrder.phone && (
                                    <tr>
                                        <th><strong>Phone: </strong></th>
                                        <td>{formOrder.phone}</td>
                                    </tr>
                                )}
                                { formOrder.fullname && (
                                    <tr>
                                        <th><strong>Fullname: </strong></th>
                                        <td>{formOrder.fullname}</td>
                                    </tr>
                                )}
                                { formOrder.company && (
                                    <tr>
                                        <th><strong>Company: </strong></th>
                                        <td>{formOrder.company}</td>
                                    </tr>
                                )}
                                { formOrder.city && (
                                    <tr>
                                        <th><strong>City: </strong></th>
                                        <td>{formOrder.city}</td>
                                    </tr>
                                )}
                                { formOrder.state && (
                                    <tr>
                                        <th><strong>State: </strong></th>
                                        <td>{formOrder.state}</td>
                                    </tr>
                                )}
                                { formOrder.postcode && (
                                    <tr>
                                        <th><strong>Postcode: </strong></th>
                                        <td>{formOrder.postcode}</td>
                                    </tr>
                                )} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
                }
            </div>
        </section>
    )
}

export default Checkout
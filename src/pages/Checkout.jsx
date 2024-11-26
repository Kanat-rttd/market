import React, { useContext, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(true);
    const [paymentToggle, setPaymentToggle] = useState(true);


    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        zip: "",
    });

    const navigate = useNavigate();
    const {cart, totalPrice} = useContext(CartContext);

    const handleOrder = () => {
        const newOrder = {
            products: cart,
            orderNumber: "1234",
            shippingInformation: shippingInfo,
            totalPrice: totalPrice,
        }

        console.log(newOrder)

        setOrder(newOrder);

        navigate('/order-confirmation')
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>Check Out</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 my-8'>
                <div className='md:w-2/3'>
                    {/* billing */}
                    <div className='border p-2 mb-6'>

                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg  font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ?
                                <FaAngleDown className='cursor-pointer' onClick={() => setBillingToggle(!billingToggle)} />
                                : <FaAngleUp className='cursor-pointer' onClick={() => setBillingToggle(!billingToggle)} />
                            }
                        </div>

                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Name</label>
                                <input className='w-full px-3 py-2 border' type="text" placeholder='Enter Name' name='name' />
                            </div>

                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input className='w-full px-3 py-2 border' type="email" placeholder='Enter Email' name='email' />
                            </div>

                            <div>
                                <label className='block text-gray-700'>Phone</label>
                                <input className='w-full px-3 py-2 border' type="number" placeholder='Enter Phone' name='phone' />
                            </div>
                        </div>

                    </div>

                    {/* shipping */}
                    <div className='border p-2 mb-6'>

                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg  font-semibold mb-2'>Shipping Information</h3>
                            {billingToggle ?
                                <FaAngleDown className='cursor-pointer' onClick={() => setShippingToggle(!shippingToggle)} />
                                : <FaAngleUp className='cursor-pointer' onClick={() => setShippingToggle(!shippingToggle)} />
                            }
                        </div>

                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input 
                                    className='w-full px-3 py-2 border' 
                                    type="text" 
                                    placeholder='Enter City' 
                                    name='city' 
                                    onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})} 
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input 
                                    className='w-full px-3 py-2 border' 
                                    type="text" 
                                    placeholder='Enter Address' 
                                    name='address' 
                                    onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})}    
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700'>Zip Code</label>
                                <input 
                                    className='w-full px-3 py-2 border' 
                                    type="text" 
                                    placeholder='Enter Zip Code' 
                                    name='zip'
                                    onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})} 
                                />
                            </div>
                        </div>

                    </div>

                    {/* payment method */}
                    <div className='border p-2 mb-6'>

                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg  font-semibold mb-2'>Payment Method</h3>
                            {billingToggle ?
                                <FaAngleDown className='cursor-pointer' onClick={() => setPaymentToggle(!paymentToggle)} />
                                : <FaAngleUp className='cursor-pointer' onClick={() => setPaymentToggle(!paymentToggle)} />
                            }
                        </div>

                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input
                                    type="radio"
                                    name='payment'
                                    checked={paymentMethod === "cod"}
                                    onChange={() => setPaymentMethod("cod")}
                                />
                                <label className='ml-2 block text-gray-700'>Cash on Delivery</label>
                            </div>

                            <div className='flex items-center mb-2'>
                                <input
                                    type="radio"
                                    name='payment'
                                    checked={paymentMethod === "dc"}
                                    onChange={() => setPaymentMethod("dc")}
                                />
                                <label className='ml-2 block text-gray-700'>Debit Card</label>
                            </div>
                            {paymentMethod === "dc" && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                        <input required type="text" placeholder='Enter Card Number' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                        <input required type="text" placeholder='Enter Card Holder Name' className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='flex'>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>Expiry Date</label>
                                            <input required type="text" placeholder='MM/YY' className='border p-2 w-full rounded' />
                                        </div>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                            <input required type="text" placeholder='CVV' className='border p-2 w-full rounded' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='md: w-1/3 bg-white p-6 mb-8 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.map((product) => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt={product.name} className='w-28 h-28 object-contain rounded' />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>${product.price} x {product.quantity}</p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ${product.price} * {product.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price: </span>
                            <span className='font-semibold'>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <div>
                        <button 
                            className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                            onClick={handleOrder}
                            >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
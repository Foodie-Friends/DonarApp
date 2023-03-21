import React, { useState } from 'react';
import io from "socket.io-client";
import "./Donor.css"
import Dish from "./dish1.png"
import Logo from './logo.png'
import { useNavigate } from 'react-router-dom'
const newSocket = io.connect('https://foodiefriends.azurewebsites.net:443', {
    pingInterval: 10000,  // send a ping message every 10 seconds
    pingTimeout: 5000,    // wait for a pong message for up to 5 seconds
});

function Donor() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [servings, setServings] = useState(0);
    const [location, setLocation] = useState();
    const [Phone, setPhone] = useState('');
    const [Category1, setCategory1] = useState('');
    const [Category2, setCategory2] = useState('');
    const contact = () => {
        alert("Reach us at Chandigarh University Technical Team Lead: Tushar S Verma 123456789, Manpreet Kaur,Sonali Dubey,Rishav Kumar Saw")
    }


    const handleDonate = (e) => {
        e.preventDefault()
        newSocket.emit("donate", { Name: name, servings: servings, Location: location, Phone: Phone, Category1: Category1, Category2: Category2 });
        alert("Thankyou")
        navigate("/Donar")
    };

    return (
        <div className='body-donar'>
            <header >
                <nav className='navbar'>
                    <img src={Logo} alt="" className="brand" />
                    <li className='zoom'>Home</li>
                    <li className='zoom'> Login</li>
                    <li className='zoom'> SignUp </li>
                    <li className='zoom' ><div nClick={() => contact()}>Customer Service</div></li>
                </nav>
                <div className="main-container">
                    <div className="context-bx">
                        <h3>High on food today?</h3>
                        <h1>Allow us to cater to it!</h1>
                        <form action="">
                            <input type="text" name="User" id="" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
                            <input type="text" name="Phone" id="" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} required />
                            <input type="number" name="Quantity" id="" placeholder="Number of servings" onChange={(e) => setServings(e.target.value)} required />
                            <input type="text" name="Address" id="" placeholder="Pickup location" onChange={(e) => setLocation(e.target.value)} required /><br />
                            <div onChange={(e) => setCategory1(e.target.value)}>
                                {/* <input type="radio" id="Veg" name="Category" value="VEG" />
                            <label for="Veg">Veg</label>
                            <input type="radio" id="NonVeg" name="Category" value="NONVEG" />
                            <label for="NonVeg">Non Veg</label><br /> */}
                                <fieldset>

                                    <div className="radio-btn">
                                        <input type="radio" className="radio" name="Category" value="Veg" id="Veg" />
                                        <label htmlFor="y">Veg</label>
                                        <input type="radio" className="radio" name="Category" value="Non-Veg" id="Non-Veg" />
                                        <label htmlFor="z">Non-Veg</label>
                                    </div>
                                </fieldset>
                            </div>

                            <div onChange={(e) => setCategory2(e.target.value)}>
                                {/* <input type="radio" id="Fresh" name="Category2" value="Fresh" />
                            <label for="Fresh">Fresh</label>
                            <input type="radio" id="Unfresh" name="Category2" value="Unfresh" />
                            <label for="Unfresh">Unfresh</label><br /> */}
                                <fieldset>
                                    <div className="radio-btn">
                                        <input type="radio" className="radio" name="Category2" value="Fresh" id="Fresh" />
                                        <label htmlFor="y">Fresh</label>
                                        <input type="radio" className="radio" name="Category2" value="Unfresh" id="Unfresh" />
                                        <label htmlFor="z">Unfresh</label>
                                    </div>
                                </fieldset>
                            </div>
                            <button className="Donate-btn" onClick={(e) => handleDonate(e)}>Donate now</button>

                        </form>


                    </div>
                    <div className="dish-bx">
                        <img src={Dish} alt="" className="dish1" />
                    </div>

                </div>
            </header>
        </div>
    );

}

export default Donor;

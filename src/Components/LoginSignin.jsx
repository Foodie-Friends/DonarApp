import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
export default function
    () {
    const navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false);
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")
    const [cpass, setCpass] = useState("")
    const [logemail, setLogEmail] = useState("")
    const [logpass, setLogPass] = useState("")
    const handleSignup = async () => {


        var dict = { fname: fname, email: email, phone: phone, pass: pass, cpass: cpass }
        const temp = await fetch(`https://foodiefriends.azurewebsites.net/signup`, {
            method: 'POST',
            body: JSON.stringify(dict),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json())
        console.log(temp)
        if (temp.id == null) {
            alert(temp.message)
        }
        else {
            setIsSignUp(false)
            alert(temp.message)
        }

    }
    const handleLogin = async () => {


        var dict = { email: logemail, pass: logpass, }
        const temp = await fetch(`https://foodiefriends.azurewebsites.net/login`, {
            method: 'POST',
            body: JSON.stringify(dict),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json())
        console.log(temp)
        if (temp.id == null) {
            alert(temp.message)
        }
        else {
            navigate("/Donar", { state: { id: temp.id } })

        }

    }
    const signUpButton = () => {
        setIsSignUp(true);
    };
    const signInButton = () => {
        setIsSignUp(false);
    };
    return (
        <div>
            <div className={isSignUp ? "container sign-up-mode" : "container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <div method="post" className="form sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Email Address" name="email" onChange={(e) => setLogEmail(e.target.value)} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" name="password" onChange={(e) => setLogPass(e.target.value)} required />
                            </div>
                            <button className="btn solid" onClick={() => handleLogin()} >Sign in</button>

                        </div>
                        <div className="form sign-up-form" >
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Full Name" name="signup_full_name" onChange={(e) => setFname(e.target.value)} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email Address" name="signup_email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Phone number" name="phone" onChange={(e) => setPhone(e.target.value)} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" name="signup_password" onChange={(e) => setPass(e.target.value)} required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Confirm Password" name="signup_cpassword" onChange={(e) => setCpass(e.target.value)} required />
                            </div>
                            <button className="btn" onClick={() => handleSignup()} >Sign up</button>
                        </div>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Hello and welcome  to our  family , please sign up first
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={() => signUpButton()}>
                                Sign up
                            </button>
                        </div>

                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Let's Change Life Together
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={() => signInButton()}>
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
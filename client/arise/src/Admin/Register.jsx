import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const addstudent = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/signup`, { name, email, password, phone, address })
            .then((res) => {
                alert("user Added Succ...😍")
                navigate("/")
            })
            .catch((err) => {
                alert("Unable to Add User")
            });
    };
    return (
        <main>
            <section>
                <div className="container text-center pt-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Register</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="bx-shadow">
                                <form onSubmit={addstudent}>
                                    <div className="mb-4">
                                        <input type="text" name='username' placeholder='username' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" name='email' placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="mb-4">
                                        <input type="Password" name='password' placeholder='Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" name='phone' placeholder='Phone' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" name='address' placeholder='Address' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="Submit" className='btn btn-primary' value="Signup" />

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register
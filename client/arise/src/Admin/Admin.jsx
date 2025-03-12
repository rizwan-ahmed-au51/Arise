import { Button, Checkbox, Flex, Form } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const addstudent = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:4000/login`, { email, password })
            .then((res) => {
                if (res.data == "Valid") {
                    navigate("/admindashboard");
                } else {
                    alert("Invalid Username & Password");
                }
            })
            .catch((err) => {

                alert("unable to login");
            });
    };


    return (
        <main>
            <section>
                <div className="container text-center pt-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Admin Login</h1>
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
                                        <input type="text" name='email' placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="mb-4">
                                        <input type="Password" name='password' placeholder='Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <Form.Item>
                                            <Flex justify="space-between" align="center">
                                                <Form.Item name="remember" valuePropName="checked"   noStyle>
                                                    <Checkbox>Remember me</Checkbox>
                                                </Form.Item>
                                                <NavLink style={{textDecoration:"none"}} to="">Forgot password</NavLink>
                                            </Flex>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button block type="primary" htmlType="submit">
                                                Log in
                                            </Button>
                                            <NavLink to="/register" className="float-end" style={{ textDecoration: "none" }}>
                                                Or Register now!
                                            </NavLink>
                                        </Form.Item>
                                        {/* <input type="Submit" className='btn btn-primary' value="Login" /> */}

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Admin

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {auth, signInWithEmailAndPassword} from 'firebase/auth'
import './LogIn.css'
const SignUp = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const handleSignup = () => {
        const auth = auth();
        signInWithEmailAndPassword(auth, email,password)

    }
    


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className = "form">
        <h1>Sign Up</h1>

        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
        <div className = "input-form">
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                 ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(e)=> setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </Form.Item>
            </div>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign Up
                </Button>
                Or <Link to='/'>SignIn</Link>
            </Form.Item>
        </Form>
        </div>
    );
};

export default SignUp; 
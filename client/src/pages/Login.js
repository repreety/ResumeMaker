
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import '../resources/authentication.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post('api/user/login', values);

      await axios.post('api/user/login', values);
      message.success('Login successfull');
      localStorage.setItem('Resume-users', JSON.stringify(user.data))
      setLoading(false);
      navigate('/home')
    } catch (error) {
      setLoading(false);
      message.error('Login failed');
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('Resume-users'))
    {
      navigate('/home');
    }
  })

  return (
    <div className='auth-parent'>
      {loading && (<Spin size="large"/>)}
      <h1 className='brand'>Resume</h1>
      <Form layout='vertical' onFinish={onFinish}>
        <h1>Login</h1>
        <hr></hr>
        <Form.Item name='username' label='Username'>
          <Input placeholder='' />
        </Form.Item>

        <Form.Item name='password' label='Password'>
          <Input type='password' />
        </Form.Item>

        <div className='d-flex align-items-center justify-content-between'>
          <Link to='/register'> Click here to Register</Link>
          <Button type='primary' htmlType='submit' >
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Register
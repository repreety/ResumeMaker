import React from 'react'
import './../resources/defaultlayout.css'
import { Button, Dropdown, Menu, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';



function DefaultLayout(props) {
  const users = JSON.parse(localStorage.getItem('Resume-users'))
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home"> Home </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile"> Profile </Link>
      </Menu.Item>
      <Menu.Item onClick={() => {
        localStorage.removeItem('Resume-users');
        navigate('/login');
      }}>
        <span>Logout</span>
      </Menu.Item>
    </Menu>

  );
  return (
    <div className='layout'>
      <div className='header'>
        <h1 onClick={()=>navigate('/home')} style = {{cursor:'pointer'}}>CV</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button icon={<UserOutlined />}>{users.username}</Button>
        </Dropdown>
      </div>
      <div className='content' style = {{overflow : 'scroll'}}>
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout
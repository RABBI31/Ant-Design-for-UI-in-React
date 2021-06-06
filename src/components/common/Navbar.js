import React from 'react'
import { Layout, Menu } from 'antd';

const { Header } = Layout;
function Navbar() {
    return (
        <div className='container-fluid'>
            <div className='header'>
            <div className='logo'>
                <i className ="fas fa-bolt"></i>
                <a href='http://www.google.com' target='blank'>Tech Station</a>
            </div>

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="features">Features</Menu.Item>
                    <Menu.Item key="howitwork">How It Work</Menu.Item>
                    <Menu.Item key="faq">FAQ</Menu.Item>
                    <Menu.Item key="pricing">Pricing</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>

            </div>
        </div>
    )
}

export default Navbar

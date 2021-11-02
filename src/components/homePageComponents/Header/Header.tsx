import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Button, Nav} from 'react-bootstrap'
import './Header.scss'
import Logo from '../Logo/Logo'
const OceanBarHeader = () => {
    return (
        <div style={{
            background:  "linear-gradient(to top, transparent, #252525), " + "url(/header.png)",
            backgroundPosition:'left',
            padding: '100px',
            color: '#252525'
        }}
         className='OceanBarHeader'>
            <Logo />
            <h5 className={'tasty-quick-quality'}>Вкусно. Быстро. Качественно</h5>
            <Nav className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link  as={Link} to={'/menu'}>
                        <button className={'menu-btn'} >
                            <span className='menu-text-main-page'>Меню</span>
                        </button>
                    </Nav.Link>
                </Nav.Item>

            </Nav>

        </div>
    )
}

export default OceanBarHeader

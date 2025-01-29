import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: '#dbeafe', // Light blue background
                padding: '10px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                The Humming Bird's Consulting
            </h1>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', justifyContent: 'center' }}>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/about" style={{ color: '#1d4ed8', textDecoration: 'none' }}>About</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/services" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Services</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/blog" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Blog</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/contact" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;


import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header"> 
                    <h1> K-Store </h1> 
                    <div className="header-search">
                        <input type="text" name="search" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Header;
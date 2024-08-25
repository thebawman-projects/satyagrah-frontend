import React, { Component } from 'react';
import "./Navbar.css"
import sankalplogo from '../../images/sankalp.png'

class Navbar extends Component {
    state = {clicked:false}
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
return (
<nav>
    <a href='/'>
        <img className='object-cover h-16' src={sankalplogo} alt='LOGO' />
    </a>
    <div>
        <ul id='navbar' className={this.state.clicked ? "#navbar active":"#navbar"}>
            <li><a href='/'>Home</a></li>
            <li><a href='/courses'>Courses</a></li>
            <li><a href='/university'>University</a></li>
            {/* <li><a href='/chairman'>Chairman</a></li> */}
            <li><a href='/about'>AboutUs</a></li>
            <a href='/registration'><button className='px-4 rounded ml-2 bg-blue-300 py-2'>Registration</button></a>
        </ul>
    </div>
    <div id='mobile' onClick={this.handleClick}>
        <i id='bar' className={this.state.clicked? "fas fa-times" : "fas fa-bars"}></i>
    </div>
</nav>

);
    }
};

export default Navbar;

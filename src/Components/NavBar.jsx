import React from 'react';
import '../Styles/NavBar.css'
// import SearchBar from './SearchBar';

export default function NavBar () {
    
    return (
        <nav className="navbar">
            <img src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png" alt="pinterest-logo"/>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Top</button>
        </nav>
    )

}
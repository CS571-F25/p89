import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate();

    function handleClick(link) {
        navigate(`/${link}`);
    }

    return (
        <div className="NavBar">
            <div style={{ cursor: "pointer"}} onClick={() => handleClick("folders")}> 
                <p>Folders</p>
            </div>
            <div style={{ cursor: "pointer"}} onClick={() => handleClick("")}>
                <p>Home</p>
            </div>
            <div style={{ cursor: "pointer"}} onClick={() => handleClick("practice")}>
                <p>Practice</p>
            </div>
        </div>
    )
}

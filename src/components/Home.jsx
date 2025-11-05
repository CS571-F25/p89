import React from 'react'
import '../index.css';
import './Navbar.jsx';
import Navbar from './Navbar.jsx';

function Home(props) {
  return (
    <>
        <div class="container">
            <h1 style={{ fontSize: "60px"}}>Welcome to the flashcard website</h1>
            <p style={{ fontSize: "25px"}}>This website allows you to create and practice flashcards! (not yet (soon(ish)))</p>
        </div>
        <Navbar />
    </>
  )
}

export default Home
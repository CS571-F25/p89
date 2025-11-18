import React, { useEffect, useRef, useState } from 'react'
import '../../index.css';
import BottomNavBar from '../Navbar.jsx';
import { Button, Form } from 'react-bootstrap';
import SetsList from '../SetsList.jsx';

function HomePage(props) {

    const [sets, setSets] = useState([]);
    const nameRef = useRef("");


    useEffect(() => {
        const storedSets = JSON.parse(localStorage.getItem("sets"));
        if (storedSets) {
            setSets(storedSets);
        }
    }, []);

    function createSet(e) {
        e.preventDefault();

        const name = nameRef.current.value
        const newSet = { id: Date.now(), name, flashcards: [] };
        const updatedSets = [...sets, newSet];
        setSets([...sets, newSet]);
        localStorage.setItem("sets", JSON.stringify(updatedSets));
        e.target.reset();
    }

    function clearSets() {
        localStorage.removeItem("sets");
        setSets([]);
    }

  return (
    <>
        <div className="container">
            <h1 style={{ fontSize: "60px"}}>Flashcard App</h1>
            {sets.length === 0 && <p style={{ fontSize: "25px"}}>Get started by creating a flashcard set!</p>}
            
            <Form onSubmit={createSet}>
                <Form.Group className="mb-3" controlId="SetName">
                    <Form.Label>Set Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter set name" ref={nameRef}/>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={createSet} style={{ marginBottom: "20px" }}>
                Create Set
            </Button>
            
            <Button variant="primary" type="submit" onClick={clearSets}>
                Clear Sets
            </Button>
        </div>
        <h2>Click on a set to add to it!</h2>
        <SetsList sets={sets} />
    </>
  )
}

export default HomePage;
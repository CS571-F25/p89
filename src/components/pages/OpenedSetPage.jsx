import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, } from 'react-bootstrap';
import { useParams, Link } from 'react-router';
import FlashcardList from '../FlashcardList';

function OpenedSetPage(props) {
    const { id } = useParams();
    const frontRef = useRef("");
    const backRef = useRef("");

    const [flashcards, setFlashcards] = useState([]);
    const [setList, setSetList] = useState([]);
    const [curSet, setCurSet] = useState({});

    useEffect(() => {
        const storedSets = JSON.parse(localStorage.getItem("sets") || "[]");
        setSetList(storedSets);

        const currentSet = storedSets.find(set => set.id === Number(id));
        if (currentSet) {
            setCurSet(currentSet);
            setFlashcards(currentSet.flashcards);
        }
    }, [id]);

    useEffect(() => {
        console.log("Flashcards updated:", flashcards);
        console.log("Current Set:", curSet);
        const updatedSet = { ...curSet, flashcards: flashcards };
        const updatedSets = setList.map(set => set.id === Number(id) ? updatedSet : set);
        localStorage.setItem("sets", JSON.stringify(updatedSets));
    }, [flashcards, curSet, setList, id]);

    function createFlashcard(e) {
        e.preventDefault();
        const front = frontRef.current.value
        const back = backRef.current.value
        const newFlashcard = { front, back, flipped: false };

        const updatedFlashcards = [...flashcards, newFlashcard];
        setFlashcards(updatedFlashcards);
        
        const updatedSet = { ...curSet, flashcards: updatedFlashcards };
        const updatedSets = setList.map(set => set.id === Number(id) ? updatedSet : set);
        localStorage.setItem("sets", JSON.stringify(updatedSets));

        frontRef.current.value = "";
        backRef.current.value = "";
    }

    return (
        <div>
            <div className="container">
                <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>Set: {curSet.name}</h1>

            <Form onSubmit={createFlashcard}>
                <Form.Group className="mb-3" controlId="SetName">
                    <Form.Label>Front of Flashcard</Form.Label>
                    <Form.Control type="text" placeholder="Enter front of flashcard" ref={frontRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="SetName">
                    <Form.Label>Back of Flashcard</Form.Label>
                    <Form.Control type="text" placeholder="Enter back of flashcard" ref={backRef}/>
                </Form.Group>
            </Form>
            <Button variant='dark' onClick={createFlashcard}>Add Flashcard</Button>
            <h3 style={{ marginTop: "30px" }}>Done Adding Flashcards? Go practice here!</h3>
            <Button variant='dark' as={Link} to={`../practice/${id}`} style={{ marginBottom: "15px" }}>Practice Set</Button>
            </div>
            <h2>Click on a flashcard to flip it!</h2>
            <FlashcardList flashcards={flashcards} setFlashcards={setFlashcards} />
        </div>
    )
}

export default OpenedSetPage;
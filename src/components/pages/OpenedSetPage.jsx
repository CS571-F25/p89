import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, } from 'react-bootstrap';
import { useParams } from 'react-router';
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
                <h1>Set: {curSet.name}</h1>
            <h2>Flashcards:</h2>

            <Form onSubmit={createFlashcard}>
                <Form.Group className="mb-3" controlId="SetName">
                    <Form.Label>Set Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter set name" ref={frontRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="SetName">
                    <Form.Label>Set Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter set name" ref={backRef}/>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={createFlashcard} styles={{marginBottom: "20px"}}>Add Flashcard</Button>
            </div>
            <h2>Click on a flashcard to flip it!</h2>
            <FlashcardList flashcards={flashcards} setFlashcards={setFlashcards} />
        </div>
    )
}

export default OpenedSetPage;
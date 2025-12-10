import { Card, Col, Row } from 'react-bootstrap';
import Flashcard from './Flashcard';

function FlashcardList(props) {
    const flashcards = props.flashcards;

    function flipCard(flashcard) {
        const updatedFlashcards = flashcards.map(fc => {
            return fc === flashcard ? { ...fc, flipped: !fc.flipped } : fc;
        })
        props.setFlashcards(updatedFlashcards);
    }

    function deleteFlashcard(flashcard) {
        const updatedFlashcards = flashcards.filter(fc => fc !== flashcard);
        props.setFlashcards(updatedFlashcards);
        alert("Flashcard deleted!");
    }

    return (
        <div className="justify-content-center"> 
        <Row className="g-3">
            {flashcards && flashcards.length > 0 && flashcards.map(flashcard => {
            return (<Col key={flashcard.front} xs={12} sm={7} md={5} xl={3}>
                    <Flashcard flashcard={flashcard} flipCard={flipCard} deleteFlashcard={deleteFlashcard}/>
                </Col>)
            })}
        </Row>
        </div>
    )
}

export default FlashcardList;
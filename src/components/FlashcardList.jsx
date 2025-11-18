import { Card, Col, Row } from 'react-bootstrap';

function FlashcardList(props) {
    const flashcards = props.flashcards;

    function flipCard(flashcard) {
        const updatedFlashcards = flashcards.map(fc => {
            return fc === flashcard ? { ...fc, flipped: !fc.flipped } : fc;
        })
        props.setFlashcards(updatedFlashcards);
    }

    return (
        <div className="justify-content-center"> 
        <Row className="g-3">
            {flashcards && flashcards.length > 0 && flashcards.map(flashcard => {
            return (<Col key={flashcard.front} xs={12} sm={6} md={4} xl={3}>
                    <Card className={`set-card border-dark flashcard ${flashcard.flipped ? 'flipped' : ''}`} onClick={() => flipCard(flashcard)}>
                        {!flashcard.flipped ? (
                            <div className="front">
                                <h2 className="set-title">{flashcard.front}</h2>
                            </div>
                        ) : (
                            <div className="back">
                                <h2 className="set-title">{flashcard.back}</h2>
                            </div>
                        )}
                    </Card>
                </Col>)
            })}
        </Row>
        </div>
    )
}

export default FlashcardList;
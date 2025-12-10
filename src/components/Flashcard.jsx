import React from 'react'
import { Card } from 'react-bootstrap';
import deleteIcon from '../assets/x.png';

function Flashcard(props) {
    const flashcard = props.flashcard;
    const flipCard = props.flipCard;
    const deleteFlashcard = props.deleteFlashcard;

    return (
        <Card className={`border-dark flashcard ${flashcard.flipped ? 'flipped' : ''}`} onClick={() => flipCard(flashcard)}>
            {/* {!flashcard.flipped ? (
                <div className="front">
                    <h2 className="set-title">{flashcard.front}</h2>
                    <button className="delete-button" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deleteFlashcard(flashcard);
                        }}>
                        <img src={deleteIcon} alt="Delete set"></img>
                    </button>
                </div>
            ) : (
                <div className="back">
                    <h2 className="set-title">{flashcard.back}</h2>
                    <button className="delete-button" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deleteFlashcard(flashcard);
                        }}>
                        <img src={deleteIcon} alt="Delete set"></img>
                    </button>
                </div>
            )} */}
            
            <div className="front">
                <h2 className="set-title">{flashcard.front}</h2>
                <button className="delete-button" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteFlashcard(flashcard);
                    }}>
                    <img src={deleteIcon} alt="Delete set"></img>
                </button>
            </div>

            <div className="back">
                <h2 className="set-title">{flashcard.back}</h2>
                <button className="delete-button" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteFlashcard(flashcard);
                    }}>
                    <img src={deleteIcon} alt="Delete set"></img>
                </button>
            </div>
        </Card>
    )
}

export default Flashcard;
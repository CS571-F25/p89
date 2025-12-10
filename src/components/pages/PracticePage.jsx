import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import FlashcardList from '../FlashcardList';
import SetsList from '../SetsList';
import Button from 'react-bootstrap/Button';
import Flashcard from '../Flashcard';

function PracticePage(props) {

  const { id } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [sets, setSets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const hasShuffled = useRef(false);

  useEffect(() => {
    const storedSets = JSON.parse(localStorage.getItem("sets") || "[]");
    setSets(storedSets);
  }, []);

  useEffect(() => {
    if (id && !hasShuffled.current) {
      const storedSets = JSON.parse(localStorage.getItem("sets") || "[]");
      const currentSet = storedSets.find(set => set.id === Number(id));
      if (currentSet) {
        const shuffled = [...currentSet.flashcards].map(card => ({ ...card, flipped: false })).sort(() => Math.random() - 0.5);
        setFlashcards(shuffled);
        hasShuffled.current = true;
      }
      console.log(id);
    }}, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (!flashcards.length) return;

      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === ' ') {
        e.preventDefault();
        flipCard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flashcards, currentIndex]);

  const flipCard = () => {
    setFlashcards(prevFlashcards => {
      const newFlashcards = [...prevFlashcards];
      newFlashcards[currentIndex].flipped = !newFlashcards[currentIndex].flipped;
      return newFlashcards;
    });
  };
  
  const nextCard = () => {
    handleTransition((currentIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    handleTransition(
      (currentIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  const handleTransition = (newIndex) => {
    if (flashcards[newIndex]?.flipped !== flashcards[currentIndex]?.flipped) {
      setDisableAnimation(true);
      setTimeout(() => setDisableAnimation(false), 200);
    }
    setFlashcards(prev =>
      prev.map((c, i) =>
        i === currentIndex ? { ...c, flipped: false } : c
      )
    );
    setCurrentIndex(newIndex);
  };

  if(id === undefined) {
    return <div>
      <h1>Practice your flashcards!</h1>
      <h2>Please select a set to start practicing</h2>
      <SetsList sets={sets} route={"practice"}/>
    </div>
  }

  if (!flashcards.length) {
    return <h1>No flashcards in this set. Please go add some!</h1>;
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div>
       <h1>Practice your flashcards!</h1>
       <div className='practice-container'>
          <div className={`flashcard-container ${disableAnimation ? 'disable-animation' : ''}`}>
            <Flashcard flashcard={currentCard} flipCard={flipCard} />
          </div>
       </div>
        <div className="button-container">
          <Button variant='dark' onClick={prevCard}>Previous</Button>
          <Button variant='dark' onClick={nextCard}>Next</Button>
      </div>
    </div>
  )
}

export default PracticePage
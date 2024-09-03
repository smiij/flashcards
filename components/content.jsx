import { useState } from "react";
import React from "react";
import Language from "./language";

const Content = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { language: 'あ', meaning: 'a' },
        { language: 'い', meaning: 'i' },
        { language: 'う', meaning: 'u' },
        { language: 'え', meaning: 'e' },
        {  language: 'お', meaning: 'o' },
    ];

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    const nextCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }

    const prevCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex - 1);
    }
  return (
    <>
      <div className="content">
        <div className={`card ${isFlipped ? "flipped" : ""}`} id="medium" onClick={flipCard} >
            <div class="front" >
                <h2> What does this mean? {cards[currentIndex].language}</h2>
            </div>

            <div class='back'>
             <h2>Meaning - {cards[currentIndex].meaning}</h2>
            </div>
        </div>

        <button type='previous' class='prevCard' onClick={prevCard}>
            Previous Card
        </button>
        <button type='next' class='nextCard' onClick={nextCard}>
            Next Card
        </button>
      </div>
    </>
  );
}

export default Content;
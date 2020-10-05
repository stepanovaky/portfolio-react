import React from 'react';
import QuizApp from '../Images/QuizApp.gif';

function KingQuizApp() {
    return (
        <div className="king-henry-quiz" >
            <h2>King Henry VIII Quiz App</h2>
            <img src={QuizApp} alt="gif of quiz app"/>
            <p>How well do you know King Henry VIII? Answer a few questions about him (and his many, many wives) to find out!</p>
            <p>This app was created to test the user's knowledge of interesting facts about King Henry VIII. It is aimed at any user interested in historical data and/or wishes to challenge themselves.</p>
            <p>I was inspired to create this quiz app from my own personal interest in Henry VIII. I loved reading about Queen Elizabeth I as a child, and writing this app was a way for me to see how much I remembered.</p>
            <p>I used HTML, CSS, JavaScript and jQuery to create this quiz.</p>
            <p><a href="https://stepanovaky.github.io/quizapp2/">Live Link</a></p>
            <p><a href="https://github.com/stepanovaky/quizapp2">Link to Github Repository</a></p>



        </div>
    )
}

export default KingQuizApp;
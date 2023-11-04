import React from 'react';
import "../style/Review.css";

function Review({ currentQuestion, score, questions, wrongans, closeReview, option, showReview }) {
    return (
        <>
        <div className={`main ${showReview ? 'show' : ''}`}>
        <i className="fa-solid fa-xmark" onClick={closeReview}></i>
            <div className="page">
                <h1 className='Heading'>Review Page</h1>
                <br />
                <div>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.text}</p>
                        <ul>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}
                                style={{
                                    color: option.isCorrect ? 'green' : 'black',
                                  }}
                                >
                                    {option.text}
                                    {option.isCorrect && <span> (Correct)</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <div className="btnBoxR">
                <button onClick={closeReview} className='btnR'>Exit</button>
            </div>

            </div>

            </div>

        </>
    )
}

export default Review
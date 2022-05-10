import React , {createRef, useState, useEffect} from 'react';
import './recipetest.css';
import { Link } from 'react-router-dom';
import Questions from '../api/testApi.json';
import { useNavigate } from 'react-router-dom';

function Test(){
    const [num, setNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const TOTAL_SLIDES = 12;
    const [score, setScore] = useState([]);
    const slideRef = createRef(null);

    const navigate = useNavigate();

    const nextSlideFir = () => {
        setScore(score + Questions[num].answers[0].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            navigate("/result");
        }
        
    };
    const nextSlideSec = () => {
        setScore(score + Questions[num].answers[1].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            navigate("/result");
        }
    };

    const nextSlideThi = () => {
        setScore(score + Questions[num].answers[2].type);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            navigate("/result");
        }
    };

    const mbtiChecker = () => {
        let map = {};
        let result = [];
        for (let i = 0; i < score.length; i++) {
            if (score[i] in map) {
                map[score[i]] += 1;
            } else {
                map[score[i]] = 1;
            }
        }
        for (let count in map) {
            if (map[count] >= 2) {
                result.push(count);
            }
        }

    };

    return (
        <>
            <section >
                {
                    <>
                        <div className="slider" ref={slideRef}>
                            {Questions.map((item) => {
                                return (
                                    <div
                                        className="content"
                                        key={item.id}
                                    >
                                        <div >
                                            <div
                                                
                                            >
                                                
                                            </div>
                                            <h1
                                                className='test_question'
                                            >
                                                {item.question}
                                            </h1>
                                        </div>
                                        <article
                                             className='test__btn__box'
                                        >
                                            <button
                                                className='test__btn'
                                                onClick={nextSlideFir}
                                            >
                                                {item.answers[0].content}
                                            </button>
                                            <button
                                                className='test__btn'
                                                onClick={nextSlideSec}
                                            >
                                                {item.answers[1].content}
                                            </button>
                                            <button
                                                className='test__btn'
                                                onClick={nextSlideThi}
                                            >
                                                {item.answers[1].content}
                                            </button>
                                        </article>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                }
                
            </section>
        </>
    );
};

export default Test;
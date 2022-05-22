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
        setScore(score + Questions[num].answers[0].score);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            navigate(`/result/${score}`);
        }
        
    };
    const nextSlideSec = () => {
        setScore(score + Questions[num].answers[1].score);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            navigate(`/result/${score}`);
        }
    };
    
    const nextSlideThi = () => {
        setScore(score + Questions[num].answers[2].score);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            navigate(`/result/${score}`);
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
    
    }
    const imgChecker=(a1,a2)=>{
        if (a1==="none"){
            return false
        }
        else{
            return true
        }
    }
    

    return (
        <>
            <section >
                {
                    <>
                        <div className="slider" ref={slideRef}>
                            {Questions.map((item) => {
                                const imgCheck=imgChecker(item.answers[0].content1,item.answers[0].content2)
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
                                                <div>
                                                    {imgCheck? <img src={item.answers[0].content1} alt="profile"/> :<span>{item.answers[0].content2}</span>}
                                                </div>
                                                
                                            </button>
                                            <button
                                                className='test__btn'
                                                onClick={nextSlideSec}
                                            >
                                                <div>
                                                    {imgCheck? <img src={item.answers[1].content1} alt="profile"/> :<span>{item.answers[1].content2}</span>}
                                                </div>
                                            </button>
                                            <button
                                                className='test__btn'
                                                onClick={nextSlideThi}
                                            >
                                                <div>
                                                    {imgCheck? <img src={item.answers[2].content1} alt="profile"/> :<span>{item.answers[2].content2}</span>}
                                                </div>
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
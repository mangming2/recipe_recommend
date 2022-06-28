import React , {createRef, useState, useEffect} from 'react';
import './recipetest.css';
import { Link } from 'react-router-dom';
import Questions from '../api/testApi.json';
import { useNavigate } from 'react-router-dom';



function Test(){
    const [num, setNum] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const TOTAL_SLIDES = 12;
    const [score, setScore] = useState(0);
    const slideRef = createRef(null);
    const [score_result,setScore_result]=useState(0);
    const navigate = useNavigate();

    const scoreChecker=(score)=>{
        if(score<=10){
            return -100
        }
        else if((score>10.1)&&score<=35){
           return 50
        }
        else if((score>35.1)&&score<=60){
           return 100
        }
        else if((score>60.1)&&score<=85){
           return 150
        }
        else if((score>85.1)&&score<=110){
           return 200
        }
    }

    const nextSlideFir = () => {
        setScore(score + Questions[num].answers[0].score);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            console.log("hi");
            console.log(score);
            console.log(scoreChecker(score));
            navigate(`/result/${scoreChecker(score)}`);
        }
        
    };
    const nextSlideSec = () => {
        setScore(score + Questions[num].answers[1].score);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            console.log("hi");
            console.log(score);
            console.log(scoreChecker(score));
            navigate(`/result/${scoreChecker(score)}`);
        }
    };
    
    const nextSlideThi = () => {
        setScore(score + Questions[num].answers[2].score);
        setNum(num + 1);
        setCurrentSlide(currentSlide + 1);
        slideRef.current.style.transform += 'translateX(-100vw)';
        if(num===11){
            console.log("hi");
            console.log(score);
            
            console.log(scoreChecker(score));
            navigate(`/result/${scoreChecker(score)}`);
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
                                        <div  className='question_box' >
                                            <div
                                                
                                            >
                                                
                                            </div>
                                            <h1
                                                className='test_question'
                                            >
                                                {item.question}
                                            </h1>
                                            <img src={item.img} alt="profile"/>
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
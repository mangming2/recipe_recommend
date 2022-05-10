import React from 'react';

import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
         
            <div >
                <div >
                    <div>
                        <h2 >요리 상식 퀴즈</h2>
                        <p>당신의 요리 실력을 테스트 해보세요</p>
                        
                    </div>
                    <div >
                        <Link to="/recipetest" >
                            테스트 하기
                            
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
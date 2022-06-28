import React from 'react';
import ResultApi from '../api/resultApi.json';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Result = (props) => {
    
    const { score } = useParams();
    const resultJongone = ResultApi[score];

    if (!resultJongone) {
        return <div>존재하지 않는 결과입니다.</div>;
    }
    
    return (
        <>
         
            <div >
                <div >
                    <div>
                        <h2 >{resultJongone.id}</h2>
                        <img src={resultJongone.img} alt="profile"/>
                        <h2>{resultJongone.subject}</h2>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Result;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/components/home';
import Test from '../src/components/recipetest';
import Result from '../src/components/result';

function App (){
  return (
     <>
          
          <Router>
            <div>
            <Routes>
                <Route path="/" element={<Home/>}>
                    
                </Route>

                <Route path="/recipetest" element={<Test/>}>
                    
                </Route>

                <Route path="/result" element={<Result/>}>
                    
                    </Route>

            </Routes>
            </div>   
          </Router>
         
          </>
  );
};


export default App;

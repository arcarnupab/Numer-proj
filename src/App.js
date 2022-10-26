import './App.css';

//pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import RootOfEquations from './pages/RootOfEquations/RootOfEquations';
import Bisection from './pages/RootOfEquations/Bisection';
import FalsePosition from './pages/RootOfEquations/FalsePosition';
import OnePointIteration from './pages/RootOfEquations/OnePointIteration';
import NewtonRaphson from './pages/RootOfEquations/NewtonRaphson';
import Secant from './pages/RootOfEquations/Secant';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/RootOfEquations" element={<RootOfEquations/>}/>
      <Route path="/RootOfEquations/Bisection" element={<Bisection/>}/>
      <Route path="/RootOfEquations/FalsePosition" element={<FalsePosition/>}/>
      <Route path="/RootOfEquations/OnePointIteration" element={<OnePointIteration/>}/>
      <Route path="/RootOfEquations/NewtonRaphson"  element={<NewtonRaphson/>}/>
      <Route path="/RootOfEquations/Secant" element={<Secant/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

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

import LinearAlgebras from './pages/LinearAlgebra/LinearAlgebras';
import CramerRule from './pages/LinearAlgebra/CramerRule';
import GaussElimination from './pages/LinearAlgebra/GaussElimination';
import GaussJordan from './pages/LinearAlgebra/GaussJordan';
import MatrixInvertion from './pages/LinearAlgebra/MatrixInvertion';
import LuDecomposition from './pages/LinearAlgebra/LuDecomposition';
import Cholesky from './pages/LinearAlgebra/CholeskyDecomposition';
import Jacobi from './pages/LinearAlgebra/JacobiIteration';
import GaussSeidel from './pages/LinearAlgebra/GaussSeidel';
import ConjugateGradient from './pages/LinearAlgebra/ConjugateGradient';
import Anuphab from './pages/LinearAlgebra/anuphab'



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
      <Route path="/Anuphab" element={<Anuphab/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/RootOfEquations" element={<RootOfEquations/>}/>
      <Route path="/RootOfEquations/Bisection" element={<Bisection/>}/>
      <Route path="/RootOfEquations/FalsePosition" element={<FalsePosition/>}/>
      <Route path="/RootOfEquations/OnePointIteration" element={<OnePointIteration/>}/>
      <Route path="/RootOfEquations/NewtonRaphson"  element={<NewtonRaphson/>}/>
      <Route path="/RootOfEquations/Secant" element={<Secant/>}/>
      <Route path='/LinearAlgebra' element={<LinearAlgebras/>}/>
      <Route path='/LinearAlgebra/CramerRule' element={<CramerRule/>}/>
      <Route path='/LinearAlgebra/GaussElimination' element={<GaussElimination/>}/>
      <Route path='/LinearAlgebra/GaussJordan' element={<GaussJordan/>}/>
      <Route path='/LinearAlgebra/MatrixInvertion' element={<MatrixInvertion/>}/>
      <Route path='/LinearAlgebra/LuDecomposition' element={<LuDecomposition/>}/>
      <Route path='/LinearAlgebra/Cholesky' element={<Cholesky/>}/>
      <Route path='/LinearAlgebra/Jacobi' element={<Jacobi/>}/>
      <Route path='/LinearAlgebra/GaussSeidel' element={<GaussSeidel/>}/>
      <Route path='/LinearAlgebra/ConjugateGradient' element={<ConjugateGradient/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

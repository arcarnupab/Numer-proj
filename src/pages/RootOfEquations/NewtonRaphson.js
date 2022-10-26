import React, {useState} from 'react'
import { create, all } from 'mathjs'

function NewtonRaphson() {
  var Parser = require('expr-eval').Parser;
  var fx = 'x';
  var er = 'e';
  var x = 'x';
  
  //input string function
  const [func, setfunc] = useState('')
  const [err, seterr] = useState('')
  const [x1, setx1] = useState('')
  const config = { }
  const math = create(all, config)
  const submit = e => {
    e.preventDefault()
    fx = func
    er = err
    x = x1

    let ER = parseFloat(er);
    let X = parseFloat(x);
    Newtonrap(fx,ER,X)  
  }

  function Newtonrap(Func,Err,X){
    var parser = new Parser();
    var expr = parser.parse(Func);
    let fxx =  expr.evaluate({ x: X })
    let Er = 100.0
    let dfx = math.derivative(Func,'x')
    let Dx = dfx.evaluate({x:X})
    let xnew = 0
    let i=0
    let t=""
    while(Er>Err){
      xnew = X-(fxx/Dx)
      Er = Math.abs((xnew-X)/xnew)*100.0
      X=xnew
      Dx = dfx.evaluate({x:X})
      fxx = expr.evaluate({x:X})
      i++
      t+=i
      /*console.log("Round:"+i)
      console.log("X="+X+" Fxx="+fxx)
      console.log("Error="+Er)
      console.log(dfx.evaluate({x:X}))*/
      document.getElementById("r").innerHTML = "Iteration:"+i;
      document.getElementById("x").innerHTML = "X="+X+", Fxx="+fxx+", Dfx="+Dx;
      document.getElementById("er").innerHTML = "Error="+Er+"%";
    }
  }
  return (
    <div className='newtonraphson'>
      <h1>Newton-Raphson Method</h1>
      <form onSubmit={submit}>
        <label for="function">Enter function is here {'->'}</label>
        <input 
        name="function" 
        type="function" 
        onChange={event => setfunc(event.target.value)} 
        value={func} /><br/><br/>

        <label for="error">Enter error is here {'->'}</label>
        <input 
        name="error" 
        type="error" 
        onChange={event => seterr(event.target.value)} 
        value={err} /><br/><br/>

        <label for="x1">Enter x is here {'->'}</label>
        <input 
        name="x1" 
        type="x1" 
        onChange={event => setx1(event.target.value)} 
        value={x1} /><br/><br/>

        <button>submit</button>
      </form><br/><br/>    
      <p id='r'></p>
      <p id='x'></p>
      <p id='er'></p>
    </div>
  )
}

export default NewtonRaphson
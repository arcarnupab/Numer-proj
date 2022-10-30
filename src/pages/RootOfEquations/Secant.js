import React,{ useState } from 'react'

function Secant() {
  var Parser = require('expr-eval').Parser;
  var fx = 'x';
  var er = 'e';
  var X0 = 'x0';
  var X1 = 'x1';
  
  //input string function
  const [func, setfunc] = useState('')
  const [err, seterr] = useState('')
  const [x0, setx0] = useState('')
  const [x1, setx1] = useState('')
  const ansround = []
  const ansx0 = []
  const ansx1 = []
  const ansfx0 = []
  const ansfx1 = []
  const ansxn = []
  const anser = [] 

  const submit = e => {
    e.preventDefault()
    fx = func
    er = err
    X0 = x0
    X1 = x1

    let ER = parseFloat(er);
    let xx0 = parseFloat(X0);
    let xx1 = parseFloat(X1);
    Seca(fx,ER,xx0,xx1)  
  }
  
  function Seca(Func,Err,X0,X1){
    var parser = new Parser();
    var expr = parser.parse(Func);
    /*let fxx0 =  expr.evaluate({ x: X0 })
    let fxx1 =  expr.evaluate({ x: X1 })*/
    let Er = 100.0
    let xnew = 0
    let i=0
    let t=""

    
    while(Er>Err){
      let fxx0 = expr.evaluate({x:X0})
      let fxx1 = expr.evaluate({x:X1})
      ansround.push(i)
      ansx0.push(X0.toFixed(6))
      ansx1.push(X1.toFixed(6))
      ansfx0.push(fxx0.toFixed(6))
      ansfx1.push(fxx1.toFixed(6))

      xnew = X0-((fxx0*(X0-X1))/(fxx0-fxx1))
      Er = Math.abs((xnew-X0)/xnew)*100.0
      X0=X1
      X1=xnew
      ansxn.push(xnew.toFixed(6))
      anser.push(Er.toFixed(6))
      t+="Iteration:"+i+" |X"+i+"= "+ansx0[i]+", X"+(i+1)+"= "+ansx1[i]+", Fx"+i+"= "+ansfx0[i]+", Fx"+(i+1)+"= "+ansfx1[i]+" Error="+anser[i]+"%"
      t+="<br/>"
      document.getElementById("ans").innerHTML = t
      i++
      /*console.log("Round:"+i)
      console.log("X="+X+" Fxx="+fxx)
      console.log("Error="+Er)
      console.log(dfx.evaluate({x:X}))*/
      /*document.getElementById("r").innerHTML = "Iteration:"+i;
      document.getElementById("x").innerHTML = "X"+(i-1)+"="+X0+", X"+i+"="+X1+", Fxx"+(i-1)+"="+fxx0+", Fxx"+i+"="+fxx1;
      document.getElementById("er").innerHTML = "Error="+Er+"%";*/
    }
  }
  
  return (
    <div className='secant'>
      <h1>Secant Method</h1>
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

        <label for="x0">Enter x0 is here {'->'}</label>
        <input 
        name="x0" 
        type="x0" 
        onChange={event => setx0(event.target.value)} 
        value={x0} /><br/><br/>
        
        <label for="x1">Enter x1 is here {'->'}</label>
        <input 
        name="x1" 
        type="x1" 
        onChange={event => setx1(event.target.value)} 
        value={x1} /><br/><br/>

        <button>submit</button>
      </form><br/><br/>    
      <p id='ans'></p>
    </div>
  )
}

export default Secant
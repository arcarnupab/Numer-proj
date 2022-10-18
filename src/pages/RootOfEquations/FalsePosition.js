import React, { useState } from 'react'

function FalsePosition() {
  var Parser = require('expr-eval').Parser;
  var fx = 'x';
  var er = 'e';
  var l = 'l';
  var r = 'r';
  
  //input string function
  const [func, setfunc] = useState('')
  const [err, seterr] = useState('')
  const [xl, setxl] = useState('')
  const [xr, setxr] = useState('')
  const submit = e => {
    e.preventDefault()
    fx = func
    er = err
    l = xl
    r = xr

    let ER = parseFloat(er);
    let L = parseFloat(l);
    let R = parseFloat(r);
    falsep(fx,ER,L,R)
  }

  function falsep(Func,Err,Xl,Xr){
    var parser = new Parser();
    var expr = parser.parse(Func);
    let fxl =  expr.evaluate({ x: Xl })
    let fxr =  expr.evaluate({ x: Xr })
    let x1 = ((Xl*fxr)-(Xr*fxl))/(fxr-fxl);
    let fx1 =  expr.evaluate({ x: x1 })
    //console.log(fxl,fxr,x1,fx1)
    let Er = 100.0
    if((fxr*fx1)<0){
      Xl=x1
    }
    else{ Xr=x1 }
    let xnew = 0
    let i=0
    let t=""
    while(Er>Err){
      x1 = ((Xl*fxr)-(Xr*fxl))/(fxr-fxl);
      fx1 =  expr.evaluate({ x: x1 })
      fxl =  expr.evaluate({ x: Xl })
      fxr =  expr.evaluate({ x: Xr })
      if((fxr*fx1)<=0){
        xnew=Xl
        Xl=x1
      }
      else{ 
        xnew=Xr
        Xr=x1 
      }
      Er = Math.abs((x1-xnew)/x1)*100.0
      i++
      t+=i
      /*console.log("Round:"+i)
      console.log("Xl="+Xl+" Fxl="+fxl)
      console.log("Xr="+Xr+" Fxr="+fxr)
      console.log("X1="+x1+" Fx1="+fx1)
      console.log("Error="+Er)*/
      //document.getElementById("Answer").innerText = "Iteration:"+i+", Xl="+Xl+", Fxl="+fxl+", Xr="+Xr+", Fxr="+fxr+", Xm="+xm+", Fxl="+fxm+", Error="+Er;;
      document.getElementById("r").innerHTML = "Iteration:"+i;
      document.getElementById("xl").innerHTML = "Xl="+Xl+", Fxl="+fxl;
      document.getElementById("xr").innerHTML = "Xr="+Xr+", Fxr="+fxr;
      document.getElementById("x1").innerHTML = "X1="+x1+", Fx1="+fx1;
      document.getElementById("er").innerHTML = "Error="+Er+"%";
    }
  }


  return (
    <div className='falseposition'>
      <h1>FalsePosition Method</h1>
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

        <label for="xl">Enter xl is here {'->'}</label>
        <input 
        name="xl" 
        type="xl" 
        onChange={event => setxl(event.target.value)} 
        value={xl} /><br/><br/>

        <label for="xr">Enter xr is here {'->'}</label>
        <input 
        name="xr" 
        type="xr" 
        onChange={event => setxr(event.target.value)} 
        value={xr} /><br/><br/>

        <button>submit</button>
      </form><br/><br/>
      <p id='r'></p>
      <p id='xl'></p>
      <p id='xr'></p>
      <p id='x1'></p>
      <p id='er'></p>
    </div>
  )
}

export default FalsePosition
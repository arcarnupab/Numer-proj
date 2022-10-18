import React, { useState } from 'react'


function Bisection() {
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
    Bisec(fx,ER,L,R)
  }

  function Bisec(Func,Err,Xl,Xr){
    var parser = new Parser();
    var expr = parser.parse(Func);
    let fxl =  expr.evaluate({ x: Xl })
    let fxr =  expr.evaluate({ x: Xr })
    let xm = (Xl+Xr)/2.0;
    let fxm =  expr.evaluate({ x: xm })
    //console.log(fxl,fxr,xm,fxm)
    let Er = 100.0
    if((fxr*fxm)<0){
      Xl=xm
    }
    else{ Xr=xm }
    let xnew = 0
    let i=0
    let t=""
    while(Er>Err){
      xm = (Xl+Xr)/2.0;
      fxm =  expr.evaluate({ x: xm })
      fxl =  expr.evaluate({ x: Xl })
      fxr =  expr.evaluate({ x: Xr })
      if((fxr*fxm)<=0){
        xnew=Xl
        Xl=xm
      }
      else{ 
        xnew=Xr
        Xr=xm 
      }
      Er = Math.abs((xm-xnew)/xm)*100.0
      i++
      t+=i
      /*console.log("Round:"+i)
      console.log("Xl="+Xl+" Fxl="+fxl)
      console.log("Xr="+Xr+" Fxr="+fxr)
      console.log("Xm="+xm+" Fxm="+fxm)
      console.log("Error="+Er)*/
      //document.getElementById("Answer").innerText = "Iteration:"+i+", Xl="+Xl+", Fxl="+fxl+", Xr="+Xr+", Fxr="+fxr+", Xm="+xm+", Fxl="+fxm+", Error="+Er;;
      document.getElementById("r").innerHTML = "Iteration:"+i;
      document.getElementById("xl").innerHTML = "Xl="+Xl+", Fxl="+fxl;
      document.getElementById("xr").innerHTML = "Xr="+Xr+", Fxr="+fxr;
      document.getElementById("xm").innerHTML = "Xm="+xm+", Fxl="+fxm;
      document.getElementById("er").innerHTML = "Error="+Er+"%";
    }
  }
    

  return (
    <div className='bisection'>
      <h1>Bisection Method</h1>
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
      <p id='xm'></p>
      <p id='er'></p>
    </div>
  )
}

export default Bisection
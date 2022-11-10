import React, { useState } from 'react'
import ApexCharts from 'apexcharts'

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
  const ansround = []
  const ansxl = []
  const ansfxl = []
  const ansxr = []
  const ansfxr = []
  const ansx1 = []
  const ansfx1 = []
  const anser = []

  const submit = e => {
    e.preventDefault()
    fx = func
    er = err
    l = xl
    r = xr
    ansround.splice(0)
    ansxl.splice(0)
    ansfxl.splice(0)
    ansxr.splice(0)
    ansfxr.splice(0)
    ansx1.splice(0)
    ansfx1.splice(0)
    anser.splice(0)

    let ER = parseFloat(er);
    let L = parseFloat(l);
    let R = parseFloat(r);
    falsep(fx,ER,L,R)

    //MATH Graph
    var options = {
      series: [{
        name: "Value",
        data: ansx1
    }],
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'X1 (Graph)',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ansround
    }
    };
  
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render()
  }

  function falsep(Func,Err,Xl,Xr){
    var parser = new Parser();
    var expr = parser.parse(Func);

    let Er = 100.0
    let xnew = 0
    let i=0
    let t=""

    while(Er>Err){
      let fxl =  expr.evaluate({ x: Xl })
      let fxr =  expr.evaluate({ x: Xr })
      let x1 = ((Xl*fxr)-(Xr*fxl))/(fxr-fxl);
      let fx1 =  expr.evaluate({ x: x1 })
      ansround.push(i)
      ansxl.push(Xl.toFixed(6))
      ansfxl.push(fxl.toFixed(6))
      ansxr.push(Xr.toFixed(6))
      ansfxr.push(fxr.toFixed(6))
      ansx1.push(x1.toFixed(6))
      ansfx1.push(fx1.toFixed(6))

      if((fxr*fx1)<0){
        xnew=Xl
        Xl=x1
      }
      else{ 
        xnew=Xr
        Xr=x1 
      }
      Er = Math.abs((x1-xnew)/x1)*100.0
      
      anser.push(Er.toFixed(6))
      t += "Iteration: "+ansround[i]+" |Xl= "+ansxl[i]+", Fxl= "+ansfxl[i]+", Xr="+ansxr[i]+", Fxr="+ansfxr[i]+", X1="+ansx1[i]+", Fx1="+ansfx1[i]+", Error="+anser[i]+"%";
      t += "<br>"
      document.getElementById("ans").innerHTML = t;
      i++
      /*console.log("Round:"+i)
      console.log("Xl="+Xl+" Fxl="+fxl)
      console.log("Xr="+Xr+" Fxr="+fxr)
      console.log("X1="+x1+" Fx1="+fx1)
      console.log("Error="+Er)*/
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
      <p id='ans'></p>
      <p id='chart'></p>
    </div>
  )
}

export default FalsePosition
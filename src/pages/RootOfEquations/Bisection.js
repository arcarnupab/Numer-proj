import React, { useState } from 'react'
import ApexCharts from 'apexcharts'
import './template.css'

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


  const ansround = []
  const ansxl = []
  const ansfxl = []
  const ansxr = []
  const ansfxr = []
  const ansxm = []
  const ansfxm = []
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
    ansxm.splice(0)
    ansfxm.splice(0)
    anser.splice(0)

    let ER = parseFloat(er);
    let L = parseFloat(l);
    let R = parseFloat(r);
    Bisec(fx,ER,L,R)

    //MATH Graph
    var options = {
      series: [{
        name: "Value",
        data: ansxm
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
      text: 'Xm (Graph)',
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

  function Bisec(Func,Err,Xl,Xr){
    var parser = new Parser();
    var expr = parser.parse(Func);
    let Er = 100.0
    let xnew = 0
    let i=0
    let t=""
    while(Er>Err){
      let xm = (Xl+Xr)/2.0;
      let fxm =  expr.evaluate({ x: xm })
      let fxl =  expr.evaluate({ x: Xl })
      let fxr =  expr.evaluate({ x: Xr })
      ansround.push(i)
      ansxl.push(Xl.toFixed(6))
      ansfxl.push(fxl.toFixed(6))
      ansxr.push(Xr.toFixed(6))
      ansfxr.push(fxr.toFixed(6))
      ansxm.push(xm.toFixed(6))
      ansfxm.push(fxm.toFixed(6))
      
      if((fxr*fxm)<0){
        xnew=Xl
        Xl=xm
      }
      else{ 
        xnew=Xr
        Xr=xm 
      }
      Er = Math.abs((xm-xnew)/xm)*100.0
      
      anser.push(Er.toFixed(6))
      /*console.log("Round:"+i)
      console.log("Xl="+Xl+" Fxl="+fxl)
      console.log("Xr="+Xr+" Fxr="+fxr)
      console.log("Xm="+xm+" Fxm="+fxm)
      console.log("Error="+Er)*/
      t += "Iteration: "+ansround[i]+" |Xl= "+ansxl[i]+", Fxl= "+ansfxl[i]+", Xr="+ansxr[i]+", Fxr="+ansfxr[i]+", Xm="+ansxm[i]+", Fxm="+ansfxm[i]+", Error="+anser[i]+"%";
      t += "<br>"
      document.getElementById("ans").innerHTML = t
      i++
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
      <p id='ans'></p>
      <p id='chart'></p>
    </div>
    
  )
}

export default Bisection
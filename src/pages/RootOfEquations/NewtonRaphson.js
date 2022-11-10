import React, {useState} from 'react'
import ApexCharts from 'apexcharts'
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
  const ansround = []
  const ansx = []
  const ansxn = []
  const ansfx = []
  const ansdfx = []
  const anser = []
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
    
    //MATH Graph
    var options = {
      series: [{
        name: "Value",
        data: ansx
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
      text: 'X (Graph)',
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

  function Newtonrap(Func,Err,X){
    var parser = new Parser();
    var expr = parser.parse(Func);
    let Er = 100.0
    let dfx = math.derivative(Func,'x')
    let xnew = 0
    let i=0
    let t=""
    while(Er>Err){
      ansround.push(i)
      ansx.push(X.toFixed(6))

      let fxx = expr.evaluate({x:X})
      let Dx = dfx.evaluate({x:X})
      xnew = X-(fxx/Dx)
      Er = Math.abs((xnew-X)/xnew)*100.0
      X=xnew
            
      ansfx.push(fxx.toFixed(6))
      ansdfx.push(Dx.toFixed(6))
      ansxn.push(xnew.toFixed(6))
      anser.push(Er.toFixed(6))

      t+="Iteration: "+ansround[i]+" |X= "+ansx[i]+", Fx= "+ansfx[i]+", Dfx= "+ansdfx[i]+", Xnew= "+ansxn[i]+", Error="+anser[i]+"%"
      t+="<br/>"
      document.getElementById("ans").innerHTML = t
      
      i++
      /*console.log("Round:"+i)
      console.log("X="+X+" Fxx="+fxx)
      console.log("Error="+Er)
      console.log(dfx.evaluate({x:X}))*/
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
      <p id='ans'></p>
      <p id='chart'></p>

    </div>
  )
}

export default NewtonRaphson
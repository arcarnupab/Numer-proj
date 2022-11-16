import React, { useState } from 'react'
import { create, all } from 'mathjs'

function ConjugateGradient() {

  const [size, setsize] = useState('')
  const [matrix, setmatrix] = useState('')
  const config = { }
  const math = create(all, config)

  const submit = e =>{
    e.preventDefault()
    genarate()
  }

  //create input value matrix
  function genarate(){
    let array = [] //array for create input feilds matrixa
    let arrayb = [] //array for create input feilds matrixb       
    let tempb = [] //template input feild for matrix b
    let tempx = []
    let arrayx = []
    let er = []

    er.push(
    <div>
    <label for="size">Enter Error is here {'->'}</label>
    <input id="ERROR"/>
    </div>)
    for(let i=0 ; i<size ; i++){
      array[i] = [] //render jsx arr
      tempx.push(
        <input
        id={"x"+i}
        />
      )
      tempb.push(
        <input
        id={"rowb"+i}
        />
      )
      let temp = [] //template input feild for matrix a
      for(let j=0 ; j<size ; j++){
        let id = "column"+i+"row"+j
        temp.push(
        <input
        id={id}
        />
        )  
      }
      array[i].push(<div class='matrix a'>{temp}</div>)
      
    }
    arrayx.push(<div class='matrix b'>{tempx}</div>)
    arrayb.push(<div class='matrix b'>{tempb}</div>)

    //setmatrix hook
    setmatrix({a:array,b:arrayb,c:arrayx,d:er})
  }

  const cal = e =>{
    e.preventDefault()
    let calmatrix = []
    let tempb = []
    let arrx = []
    let temper 

    //setmatrix a&b&x
    //seterror

    temper = Number(document.getElementById('ERROR').value)
    for(let i=0 ; i<size ; i++){
      calmatrix[i] = []
      tempb.push(Number(document.getElementById('rowb'+i).value))
      arrx.push(Number(document.getElementById('x'+i).value))
      //console.log(Number(document.getElementById('rowb'+i).value))
      for(let j=0 ; j<size ; j++){
        //console.log(Number(document.getElementById('column'+j+'row'+j).value))
        calmatrix[i].push(Number(document.getElementById('column'+i+'row'+j).value))
      }
    }
    //console.log(calmatrix)
    //console.log(tempb)
    //console.log(arrx)
    //console.log(temper)

    //calculator
    let ER = 100.0
    let i = 0
    let ansarr = []

    //iteration 0
    var matrixR = math.subtract(math.multiply(calmatrix, arrx), tempb)
    var matrixD = math.subtract(0, matrixR)
    ansarr.push(
      <div className='Iteration0'>
        <p className='head'>Iteration{i}</p>
        <div className='matrixR'>R{i} = {matrixR+""}</div>
        <div className='matrixD'>D{i} = {matrixD+""}</div>
      </div>
    )
    //console.log(matrixR)
    //console.log(matrixD)
    while(ER>temper){
      i++
      let ramda = math.multiply(math.subtract(0, math.transpose(matrixD)), matrixR)/math.multiply(math.transpose(matrixD), math.multiply(calmatrix, matrixD))
      arrx = math.add(arrx, math.multiply(ramda, matrixD))
      matrixR = math.subtract(math.multiply(calmatrix, arrx), tempb)
      ER = math.sqrt(math.multiply(math.transpose(matrixR), matrixR))
      let alpha = math.multiply(math.transpose(matrixR), math.multiply(calmatrix, matrixD))/math.multiply(math.transpose(matrixD), math.multiply(calmatrix, matrixD))
      matrixD = math.add(math.subtract(0, matrixR), math.multiply(alpha, matrixD))
      //console.log(matrixD)
      ansarr.push(
        <div className='Iterationi'>
          <p className='head'>Iteration{i}</p>
          <div className='Ramda'>Ramda={ramda.toFixed(6)}</div>
          <div className='matrixX'>X{i} = {arrx+""}</div>
          <div className='matrixR'>R{i} = {matrixR+""}</div>
          <div className='Error'>Error = {ER.toFixed(6)} %</div>
          <div className='alpha'>Alpha = {alpha.toFixed(6)}</div>
          <div className='matrixD'>D{i} = {matrixD+""}</div>
        </div>
      )
    }
    setmatrix({a:matrix.a,b:matrix.b,c:matrix.c,d:matrix.d,e:ansarr})
  }

  return (
    <div className='conjugategradient'>
      <form>
        <h1>Conjugate Gradient</h1>
        <label for="size">Enter size is here {'->'}</label>
        <input 
        name="size" 
        type="size" 
        onChange={event => setsize(event.target.value)} 
        value={size} /><br/><br/>
        <button onClick={submit}>create</button><br/><br/>
      </form><br/><br/>
      <div class='matrix f'>
        <div class='matrixw'>
        {
          matrix.a
        }
        </div>
        <div class='matrixw'>
        {
          matrix.c
        }
        </div>
        <div class='matrixw'>
        {
          matrix.b
        }
        </div>
      </div><br/>
      <div>
      {
        matrix.d
      }
      </div><br/>
      <button onClick={cal}>Cal</button><br/><br/>
      <div>
        {
          matrix.e
        }
      </div>
    </div>
  )
}

export default ConjugateGradient
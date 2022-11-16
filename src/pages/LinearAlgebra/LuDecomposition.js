import React, { useState } from 'react'
import { create, all } from 'mathjs'

function LuDecomposition() {

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
    for(let i=0 ; i<size ; i++){
      array[i] = [] //render jsx arr
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
    arrayb.push(<div class='matrix b'>{tempb}</div>)

    //setmatrix hook
    setmatrix({a:array,b:arrayb})
  }

  const cal = e =>{
    e.preventDefault()
    let calmatrix = []
    let tempb = []

    //setmatrix a&b
    for(let i=0 ; i<size ; i++){
      calmatrix[i] = []
      tempb.push(Number(document.getElementById('rowb'+i).value))
      //console.log(Number(document.getElementById('rowb'+i).value))
      for(let j=0 ; j<size ; j++){
        //console.log(Number(document.getElementById('column'+j+'row'+j).value))
        calmatrix[i].push(Number(document.getElementById('column'+i+'row'+j).value))
      }
    }
    //console.log(calmatrix)
    //console.log(tempb)

    //calculator

    //jsx arr
    let matrixL = []
    let matrixU = []
    for(let i=0 ; i<size ; i++){
      matrixL[i] = []
      matrixU[i] = []
      for(let j=0 ; j<size ; j++){
        matrixL[i][j]=0
        matrixU[i][j]=0
        if(i===j){matrixU[i][j]=1}
      }
    }
    


    console.log(matrixL)
    console.log(matrixU)
  }


  return (
    <div className='ludecomposition'>
      <form>
        <h1>Lu Decomposition</h1>
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
          matrix.b
        }
        </div>
      </div><br/>
      <button onClick={cal}>Cal</button><br/><br/>
    </div>
  )
}

export default LuDecomposition
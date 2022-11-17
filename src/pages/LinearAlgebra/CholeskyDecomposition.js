import React, { useState } from 'react'
import { create, all } from 'mathjs'

function CholeskyDecomposition() {

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

    //MatrixL Lt U jsx arr
    let matrixL = []
    let matrixLt = []
    for(let i=0 ; i<size ; i++){
      matrixL[i] = []
      matrixLt[i] = []
      for(let j=0 ; j<size ; j++){
        matrixL[i][j] = 0
        matrixLt[i][j] = 0
      }
    }

    //calculator
    
    // Decomposing a matrix into Lower Triangular
    for (let i = 0; i < size; i++) {
      for (let j = 0; j <= i; j++) {
          let sum = 0;

          // summation for diagonals
          if(j === i){
            for(let k = 0; k < j; k++)
              sum += Math.pow(matrixL[j][k], 2);
            matrixL[j][j] = Math.sqrt(calmatrix[j][j] - sum);
          }
          else {
              // Evaluating L(i, j)
              // using L(j, j)
              for(let k = 0; k < j; k++)
                sum += (matrixL[i][k] * matrixL[j][k]);
              matrixL[i][j] = (calmatrix[i][j] - sum)/ matrixL[j][j];
          }
      }
    }
    //console.log(matrixL)
    matrixLt = math.transpose(matrixL)
    //console.log(matrixLt)
    
    // Ly = B
    let y = [];
    for (let i = 0; i < size; i++) {
      let sum = 0;
      for (let j = 0; j < i; j++) {
        sum += matrixL[i][j] * y[j];
      }
      y[i] = (tempb[i] - sum) / matrixL[i][i];
    }
    // Ltx = y
    let x = [];
    for (let i = size - 1; 0 <= i; i--) {
      let sum = 0;
      if (matrixLt[i][i] === 0) {
        continue;
      }
      for (let j = size - 1; j > i; j--) {
        sum += matrixLt[i][j] * x[j];
      }
      x[i] = (y[i] - sum) / matrixLt[i][i];
    }
    //console.log(x)

    //output on page
    let ansarr = []
    for(let a=0 ; a<x.length ; a++){
      ansarr.push(
        <div>x{a+1}={x[a].toFixed(2)}</div>
      )
    }

    let arrL = []
    let arrLt = []
    for(let a=0 ; a<size ; a++){
      arrL[a]=[]
      arrLt[a]=[]
      let L = []
      let Lt = []
      for(let b=0 ; b<size ; b++){
        L.push(<div>{matrixL[a][b]}</div>)
        Lt.push(<div>{matrixLt[a][b]}</div>)
      }
      arrL[a].push(<div>{L}</div>)
      arrLt[a].push(<div>{Lt}</div>)
    }
    //console.log(matrixL)
    setmatrix({a:matrix.a,b:matrix.b,c:ansarr,l:arrL,lt:arrLt})
  }

  return (
    <div className='choleskydecomposition'>
      <form>
        <h1>Cholesky Decomposition</h1>
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
      <div className='matrix f'>
        MATRIX L -{">"}
        {
          matrix.l
        }
      </div><br/>
      <div className='matrix f'>
        MATRIX L{"("}TRANSPOSE{")"} -{">"}
        {
          matrix.lt
        }
      </div><br/>
      <div className='matrix f'>
        MATRIX X -{">"}
        {
          matrix.c
        }
      </div>
    </div>
  )
}

export default CholeskyDecomposition
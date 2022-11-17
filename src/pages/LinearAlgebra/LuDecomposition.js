import React, { useState } from 'react'

function LuDecomposition() {

  const [size, setsize] = useState('')
  const [matrix, setmatrix] = useState('')

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

    //MatrixLU jsx arr
    let matrixL = []
    let matrixU = []
    for(let i=0 ; i<size ; i++){
      matrixL[i] = []
      matrixU[i] = []
      for(let j=0 ; j<size ; j++){
        matrixL[i][j] = 0
        matrixU[i][j] = 0
      }
    }

    //calculator
    // Decomposing matrix into Upper and Lower triangular matrix
    for(let i = 0; i < size; i++)
    {
        // Upper Triangular
        for(let k = i; k < size; k++)
        {
             
            // Summation of L(i, j) * U(j, k)
            let sum = 0;
            for(let j = 0; j < i; j++)
                sum += (matrixL[i][j] * matrixU[j][k]);
 
            // Evaluating U(i, k)
            matrixU[i][k] = calmatrix[i][k] - sum;
        }
 
        // Lower Triangular
        for(let k = i; k < size; k++)
        {
            if (i === k)
                // Diagonal as 1
                matrixL[i][i] = 1;
            else
            {
                 
                // Summation of L(k, j) * U(j, i)
                let sum = 0;
                for(let j = 0; j < i; j++)
                    sum += (matrixL[k][j] * matrixU[j][i]);
 
                // Evaluating L(k, i)
                matrixL[k][i] = (calmatrix[k][i] - sum)/matrixU[i][i];
            }
        }
    }

    //console.log(matrixL)
    //console.log(matrixU)

    // Ly = B
    let y = [];
    for (let i = 0; i < size; i++) {
      let sum = 0;
      for (let j = 0; j < i; j++) {
        sum += matrixL[i][j] * y[j];
      }
      y[i] = (tempb[i] - sum) / matrixL[i][i];
    }
    // Ux = y
    let x = [];
    for (let i = size - 1; 0 <= i; i--) {
      let sum = 0;
      if (matrixU[i][i] === 0) {
        continue;
      }
      for (let j = size - 1; j > i; j--) {
        sum += matrixU[i][j] * x[j];
      }
      x[i] = (y[i] - sum) / matrixU[i][i];
    }

    //output on page
    let ansarr = []
    for(let a=0 ; a<x.length ; a++){
      ansarr.push(
        <div>x{a+1}={x[a].toFixed(2)}</div>
      )
    }

    let arrL = []
    let arrU = []
    for(let a=0 ; a<size ; a++){
      arrL[a]=[]
      arrU[a]=[]
      let L = []
      let U = []
      for(let b=0 ; b<size ; b++){
        L.push(<div>{matrixL[a][b]}</div>)
        U.push(<div>{matrixU[a][b]}</div>)
      }
      arrL[a].push(<div>{L}</div>)
      arrU[a].push(<div>{U}</div>)
    }
    //console.log(matrixL)
    setmatrix({a:matrix.a,b:matrix.b,c:ansarr,l:arrL,u:arrU})
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
      <div className='matrix f'>
        MATRIX L -{">"}
        {
          matrix.l
        }
      </div><br/>
      <div className='matrix f'>
        MATRIX U -{">"}
        {
          matrix.u
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

export default LuDecomposition
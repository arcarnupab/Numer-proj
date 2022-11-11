import React,{ useState } from 'react'
import { create, all } from 'mathjs'

function GaussElimination() {
  const [size, setsize] = useState('')
  const [matrix, setmatrix] = useState('')
  const config = { }
  const math = create(all, config)

  const submit = e =>{
    e.preventDefault()
    genarate()
  }

  function genarate(){
    let array = []
      let arrayb = []        
      let tempb = []
      for(let i=0 ; i<size ; i++){
        array[i] = [] //render jsx arr
        tempb.push(
          <input
          id={"rowb"+i}
          />
        )
        let temp = [] 
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

    //Forward Elimination
    for(let i=0 ; i<calmatrix.length ; i++){
      for(let j=i+1 ; j<calmatrix.length ; j++){
        let temp = calmatrix[j][i]/calmatrix[i][i]
        //console.log(temp)
        for(let k=0 ; k<calmatrix.length ; k++){
          let sol = temp*calmatrix[i][k]
          calmatrix[j][k] = calmatrix[j][k]-sol
        }
      }
    }
    console.log(calmatrix)

  }

  let arrans = []
    

  return (
    <div className='gausselimination'>
      <h1>GaussElimination</h1>
      <form>
        <label for="size">Enter size is here {'->'}</label>
        <input 
        name="size" 
        type="size" 
        onChange={event => setsize(event.target.value)} 
        value={size} /><br/><br/>
        <button onClick={submit}>create</button><br/><br/>
        
      </form><br/><br/>
      <div className='matrix f'>
        <div className='a'>      
        {
          matrix.a
        }
        </div>
        <div className='b'>
        {
          matrix.b
        }
        </div>
      </div><br/><br/>
      <button onClick={cal}>Cal</button><br/><br/>
    </div>
  )
}

export default GaussElimination
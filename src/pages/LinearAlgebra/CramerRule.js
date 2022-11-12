import { create, all } from 'mathjs'
import React, {useState} from 'react'


function CramerRule() {
  const [size, setsize] = useState('')
  const [matrix, setmatrix] = useState('')
  const config = { }
  const math = create(all, config)

  const submit = e =>{
    e.preventDefault()
    genarate()
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

    //calculator
    let detref = math.det(calmatrix)

    let det = []
    let temparr = calmatrix.map(a=>a.slice()) //line of deep clone array
    //.map like for loop 
    //slice delete value in array return array after delete 
    for(let i=0 ; i<size ; i++){
      calmatrix = temparr.map(a=>a.slice()) 
      for(let j=0 ; j<size ; j++){
        
        calmatrix[j][i] = tempb[j]
      }
      det[i] = math.det(calmatrix)/detref
      //console.log(calmatrix)
    }

    //output on page
    let tempans = []
    for(let i=0 ; i<det.length ; i++){
      tempans.push(<div>x{i+1}={det[i].toFixed(2)}</div>)
    }
    //console.log(math.det(calmatrix))
    //console.log(calmatrix)
    setmatrix({a:matrix.a,b:matrix.b,c:tempans})
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

  return (
    <div className='cramerrule'>
      <h1>CramerRule</h1>
      <form>
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
      <div>
        {
          matrix.c
        }
      </div>
    </div>
  )
}

export default CramerRule
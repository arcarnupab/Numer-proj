import React, { useState } from 'react'
import { create, all, matrix } from 'mathjs'

function Anuphab() {
    const [matrixs, setmatrixs] = useState({a:[],b:[],p:[],s:[],m:[]})
    const [show, setshow] = useState({p:false,s:false,m:false});
    const [S, setS] = useState('')
    const config = { }
    const math = create(all, config)

    let size = Number(S)
    const genarate = e =>{
        e.preventDefault()
        let matrixb = []
        let temp = []

        for(let i=0 ; i<size ; i++){
            temp[i] = []
            matrixb[i] = []
            let arrinput = []
            let arrinputb = []
            for(let j=0 ; j<size ; j++){
                arrinput.push(
                        <input
                        id={"rw"+i+"cl"+j}
                        />
                )
                arrinputb.push(
                    <input
                    id={"rwb"+i+"clb"+j}
                    />
                )
            }
            temp[i].push(<div className='matrix a'>
                {arrinput}
            </div>)
            matrixb[i].push(<div className='matrix B'>
                {arrinputb}
            </div>)
        }
        let arrx = []
        let arrb = []
        arrx.push(<div className='matrix b'>{temp}</div>)
        arrb.push(<div className='matrix b'>{matrixb}</div>)
        // setmatrixs({a:arrx,b:arrb})
        setmatrixs({...matrixs,a:arrx,b:arrb});

    }
    const cal = e =>{
        e.preventDefault()
        let MatA = []
        let MatB = []
        for(let a=0 ; a<size ; a++){
            MatA[a] = []
            MatB[a] = []
            for(let b=0 ; b<size ; b++){
                MatA[a].push(Number(document.getElementById("rw"+a+"cl"+b).value))
                MatB[a].push(Number(document.getElementById("rwb"+a+"clb"+b).value))
            }
        }

        console.log(MatA)
        console.log(MatB)

        let MatPlus = math.add(MatA, MatB)
        let MatMinus = math.subtract(MatA,MatB)
        let MathMul = math.multiply(MatA, MatB)
        

        setmatrixs({...matrixs,a:matrixs.a,b:matrixs.b,p:MatPlus,s:MatMinus,m:MathMul})
        //console.log(Mathdivi)



    }
    return(
    <div>
            <input
            onChange={event => setS(event.target.value)}
            value = {S}/>
        <button onClick={genarate}>click</button>
        <div className='matrix f'>
            <div className='matrix w'>
                {
                    matrixs.a
                }
                <br/>
            </div>
             <div className='matrix w'>
                {
                    matrixs.b
                }
            </div>
        </div>
        <button onClick={cal}>Calculator</button>
        <button onClick={(e)=>{setshow({...show,p:!show.p})}}>Plus</button>
        <button onClick={(e)=>{setshow({...show,s:!show.s})}}>Subtract</button>
        <button onClick={(e)=>{setshow({...show,m:!show.m})}}>Multiply</button>
        <br/>
        <div className='matrix f'>
            <div>
                <table className='m-c'>
                    {
                    matrixs.p.map((a,b)=>{
                        if(!show.p) return null;
                        return (<tr>
                            {
                                a.map((inner) =>{
                                    return <td  className='matrixrendered'>{inner}</td>
                                })
                            }
                        </tr>)
                    })}
                </table>
                <table className='m-c'>
                    {
                    matrixs.s.map((a,b)=>{
                        if(!show.s) return null;
                        return (<tr>
                            {
                                a.map((inner) =>{
                                    return <td  className='matrixrendered'>{inner}</td>
                                })
                            }
                        </tr>)
                    })}
                </table>
                <table className='m-c'>
                    {
                    matrixs.m.map((a,b)=>{
                        if(!show.m) return null;
                        return (<tr>
                            {
                                a.map((inner) =>{
                                    return <td  className='matrixrendered'>{inner}</td>
                                })
                            }
                        </tr>)
                    })}
                </table>

                </div>
        </div>
    </div>
    )
}
export default Anuphab
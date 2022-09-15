import { useState } from 'react'
import './App.css'
import logo from './logo.svg'
import Search from './Search';

const NumberExponentiation = (props)=>{
    const keyT = props.keyword;
    const nameT = props.nameK;
    const convertNumVal = props.convertNumVal;
    const convertRsVal = props.convertRsVal;
    const onNumberChange = (event)=>{
        props.onNumChange(event.target.value)
    }
    return (
        <div>
            <label className="lblNumber">{nameT} : </label>
            <input className={keyT} type="number" value={nameT === "Number" ? convertNumVal : convertRsVal} onChange={(event)=>onNumberChange(event)} name={keyT} />
        </div>
    )
}



const Button = (props)=>{
    const clearData =()=>{
        props.eventBtn(true);
    }
    return(
        <input type="button" className={'btn_' + props.btnClass} value="Clear" onClick={clearData}/>
    )
}

const ButtonClear = (props)=>{
    return (
        <div >
            <Button eventBtn={props.clearDataEvent} fontS = {18}  btnClass="clear" />
        </div>
    )
}


const Calculator = () =>
{
    const [numberStored,setNumberStored] = useState({
        numVal : 0,
        rsVal:0
    })
    const numberChange = (val)=>{
        setNumberStored(prevState=>({
            ...prevState,
            numVal:val,
            rsVal: convertToExp(val)
        }))
    }
    const resultChange = (val)=>{
        
        setNumberStored(prevState=>({
            ...prevState,
            rsVal:val,
            numVal: convertToNum(val)
        }))
    }

    const  convertToExp = (num) =>
    {
        return Math.pow(num,2);
    }

    const  convertToNum = (rs) =>
    {
        return Math.sqrt(rs);
    }
    const onClearData = (isClear)=>{
        if(isClear)
        {
            setNumberStored(prevState=>({
                ...prevState,
                rsVal:0,
                numVal: 0
            }))
        }
    }

    const rsVal = numberStored.rsVal ? numberStored.rsVal : 0;
    const numVal = numberStored.numVal ? numberStored.numVal : 0;

    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Exponentiation
            </p>
            <div>
            <NumberExponentiation keyword="txtNumber" nameK="Number" convertNumVal={numVal} convertRsVal={rsVal}  onNumChange={numberChange}/>
            <br></br>
            <NumberExponentiation keyword="txtResult" nameK="Result"  convertNumVal={numVal}  convertRsVal={rsVal} onNumChange={resultChange}/>
            <ButtonClear clearDataEvent={onClearData}/>
         </div>
         <Search/>
         </div>
         
        </div>
    )
}
export default Calculator;
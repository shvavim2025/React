import { useEffect, useState } from "react";
import useTypingEffect from "./useTypingEffect";

const TypingHeader = () => {
  const[textValue,setTextValue] = useState('');
  const[speedValue,setSpeedValue] = useState(100);
  const[delayValue,setDelayValue] = useState(1000);
  const[paramsValue,setParamsValue] = useState({text:"", speed:100, delay:1000})
  const [text, isFinished] = useTypingEffect(paramsValue);

  useEffect(()=>{
  setParamsValue({text:textValue, speed:speedValue, delay:delayValue});
},[textValue,speedValue,delayValue])


  return <>
  {isFinished&&<p style={{color:"gray"}}>Typing...</p>}
  <h1 style={{color:"white", backgroundColor:"blue", fontStyle:"italic"}}>{text}</h1>

  <form>
    text:
    <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)}    />
    speed:
    <input type="number" value={speedValue} onChange={(e)=>setSpeedValue(parseInt(e.target.value))}/>
    delay:
    <input type="number" value={delayValue} onChange={(e)=>setDelayValue(parseInt(e.target.value))}/>
  </form>
  </>;
};

export default TypingHeader;

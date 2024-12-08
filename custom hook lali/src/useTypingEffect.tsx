import { useEffect, useState } from "react";

function useTypingEffect( {text,speed,delay}: { text: string,speed: number, delay: number} ){
 const [textValue,setTextValue]=useState('');
 const [ finishedTextValue,setFinishedTextValue]=useState(false);
 useEffect(()=>{

    let index = 0;
    setTextValue(''); 
    setFinishedTextValue(true);
    const timeout = setTimeout(() => {
        const interval = setInterval(() => {
            if (index <= text.length) {                
                setTextValue(text.slice(0,index+1) );
                 index++;
            }
            else {
                clearInterval(interval);
                setFinishedTextValue(false)
            }
        }, speed)
    }, delay);
    return () =>{ clearTimeout(timeout);
        setTextValue("");
    }
    

 },[text,speed,delay])
  return [textValue, finishedTextValue]

}
export default useTypingEffect

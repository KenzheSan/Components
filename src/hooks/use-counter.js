import {useEffect , useState} from "react";

const useCounter =(forward = true)=> {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
          if(forward){
            setCounter((prevCounter) => prevCounter + 1);
          }else{
            setCounter((prevCounter) => prevCounter - 1);
          }
      }, 1000);
  
      return () => {
          console.log('hello');
          clearInterval(interval)
      }
    }, [forward])

    return counter
}
export default useCounter
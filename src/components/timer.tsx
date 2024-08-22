import { useEffect, useState } from "react"

const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState(30);
    useEffect(()=>{
        setTimeout(()=>{
            setTimeRemaining(time=>time-1)
        },1000);
    },[timeRemaining]);
    return (
        <div>{timeRemaining}</div>
    )
}
export default Timer;
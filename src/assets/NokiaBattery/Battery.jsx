import { useContext, useEffect, useState } from "react"
import "./Battery.css"
import { TimeContext } from "../Context/Context"

const Battery = () => {    

    const [charge, setCharge] = useState(0)

    const time = useContext(TimeContext)

    const charging = () => {
        setTimeout(() => {
            if (charge <= 3) {
                setCharge(charge + 1)
            }   
            if (charge === 4) {
                setCharge(1)
            }
        }, time*1000);
    }

    useEffect(() => {
        charging();

        console.log(time);
    
        return ()=>{clearTimeout(charging)}
    }, [charge])

    return (
        <div className="battery">
            {[1, 2, 3, 4].map((item, i) => {
                return (<div key={i} className={charge > i ? "charging cell" : "cell"}></div>
                )
            })}

            {/* <div className={charge > 0 ? "charging cell" : "cell"}></div>
            <div className={charge > 1 ? "charging cell" : "cell"}></div>
            <div className={charge > 2 ? "charging cell" : "cell"}></div>
            <div className={charge > 3 ? "charging cell" : "cell"}></div> */}
        </div>
    )
}

export default Battery
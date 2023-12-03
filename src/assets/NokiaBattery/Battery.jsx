import { useEffect, useState } from "react"
import "./Battery.css"

const Battery = () => {

    const [charge, setCharge] = useState(0)

    const charging = () => {
        setTimeout(() => {
            if (charge <= 3) {
                setCharge(charge + 1)
            }
            if (charge === 4) {
                setCharge(1)
            }
        }, 1000);
    }

    useEffect(() => {
        charging();
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
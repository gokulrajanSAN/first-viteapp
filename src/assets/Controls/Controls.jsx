import { useState } from "react"
import { TimeContext } from "../Context/Context"
import Battery from "../NokiaBattery/Battery"

const Controls = () => {

    const [time, setTime] = useState(400)

    return (
        <div>
            <label><h2>speed control: {time} sec</h2>
                <br />
                <input type="range" value={time}
                    onChange={(e) => setTime(+e.target.value)}
                    min={1000} max={4000} style={{ width: '40rem' }} />
            </label>

            <TimeContext.Provider value={time}>
                <Battery></Battery>
            </TimeContext.Provider>
        </div>
    )
}

export default Controls

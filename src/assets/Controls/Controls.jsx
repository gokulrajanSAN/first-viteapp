import { useState } from "react"
import { TimeContext } from "../Context/Context"

const Controls = () => {

    const [time, setTime] = useState(1000)

    return (
        <TimeContext.Provider value={time}>
            <div>
                <label><h2>speed control: {time} sec</h2>
                    <br />
                    <input type="range" value={time}
                        onChange={(e) => setTime(+e.target.value)}
                        min={1000} max={4000} style={{ width: '40rem' }} />
                </label>
            </div>
        </TimeContext.Provider>
    )
}

export default Controls

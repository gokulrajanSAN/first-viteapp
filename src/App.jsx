import './App.css'
import { useState } from 'react'
import Battery from './assets/NokiaBattery/Battery'

function App() {

  const [data, setData] = useState([])

  const [load, setLoad] = useState(false)

  const onClick = async () => {
    setLoad(true)
    const url1 = "https://us-central1-my-functions-bde01.cloudfunctions.net/app/livedata";

    // const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url1);
    setData(await response.json());
    setLoad(false)
  }

  return (
    <div>
      <button onClick={onClick} >get</button>
      {load ? <div className='loader'></div> : data.map((item, i) => {
        return (<p key={i}>{item.country}</p>)
      })}

      <Battery></Battery>
    </div>
  )
}

export default App

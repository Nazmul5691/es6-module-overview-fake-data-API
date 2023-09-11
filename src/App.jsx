
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  
  // const watches =[
  //   {is: 1, name: 'Apple Watch', price: 200},
  //   {is: 2, name: 'Samsung Watch', price: 100},
  //   {is: 3, name: 'MI Watch', price: 50}
  // ]

  const [watches, setWatches] = useState([])

  useEffect( () =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 7",
  //     "price": 399.99
  //   },
  //   {
  //     "id": 2,
  //     "name": "Galaxy Watch 4",
  //     "price": 299.99
  //   },
  //   {
  //     "id": 3,
  //     "name": "Fitbit Sense",
  //     "price": 299.95
  //   },
  //   {
  //     "id": 4,
  //     "name": "Garmin Fenix 6 Pro",
  //     "price": 599.99
  //   },
  //   {
  //     "id": 5,
  //     "name": "Huawei Watch GT 2 Pro",
  //     "price": 249.99
  //   }
  // ]
  
  

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App

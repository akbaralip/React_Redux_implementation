import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const value = useSelector(state => state.count)

  const dispatch = useDispatch()

  const increment = () =>{
    dispatch({
      type:'INCREMENT'
    })
  }

  const decrement = () =>{
    dispatch({
      type: 'DECREMENT'
    })
  }

  return (
    <>
      <h1>REDUX COUNTER</h1>
      <h3>{value}</h3>
      <button onClick={increment}>INCREMENT</button>
      <br />
      <br /> 
      <button onClick={decrement}>DECREMENT</button>

    </>
  )
}

export default App

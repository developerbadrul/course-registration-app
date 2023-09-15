
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
    const [cart, setCart] = useState([]);

    const handleSelectItem = (course)=>{
      // setCart([...cart], course)
      setCart([...cart], course)
      // console.log('working select item', course);
    }

  return (
    <>
      <h1 className='text-center font-bold text-3xl text-sky-400'>Course Registration</h1>

      <div className='w-11/12 mx-auto flex justify-between gap-8'>
          <Courses handleSelectItem={handleSelectItem}></Courses>
          <Cart key={cart.id} cart={cart}></Cart>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
  const [cart, setCart] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelectItem = (course) => {
    // setCart([...cart], course)
    const isExit = cart.find(x => x.id === course.id);
    if (isExit) {
      return alert("Already exit")
    } else {
      setCart([...cart, course])
    }
    // console.log('working select item', cart);
  }

  const handleCredit = newCredit => {
    setCredit(credit + newCredit);
  }

  const handlePrice = getPrice => {
    setPrice(price + getPrice)
  }

  return (
    <>
      <h1 className='text-center font-bold text-3xl text-sky-400'>Course Registration</h1>

      <div className='w-11/12 mx-auto flex flex-col-reverse lg:flex lg:flex-row justify-between gap-8'>
        <Courses handleSelectItem={handleSelectItem}
          handleCredit={handleCredit}
          handlePrice={handlePrice}>
        </Courses>
        <Cart key={cart.id} cart={cart} credit={credit} price={price}></Cart>
      </div>
    </>
  )
}

export default App

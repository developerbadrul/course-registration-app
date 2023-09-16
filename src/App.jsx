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
      document.getElementById('my_modal_5').showModal()
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

      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-600">Already Exists</h3>
            <img className='container w-1/2 mx-auto' src="../public/assets/duplicate.png" />
            <p className="py-4 text-sky-500 font-bold text-center text-2xl">Please Add Another Item</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default App

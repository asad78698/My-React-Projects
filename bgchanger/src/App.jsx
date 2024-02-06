import React, { useState } from 'react'
import '../src/Index.css'

const App = () => {

  const mystyle = {
    backgroundColor: 'black'

  };

  const [kolor, setKolor] = useState(mystyle)



  const chnageRed = () => {

    setKolor({
      backgroundColor: 'red',
    })
  }

  const chnagePink = () => {

    setKolor({
      backgroundColor: 'pink',
    })
  }

  const chnageBlue = () => {

    setKolor({
      backgroundColor: 'blue',
    })
  }

  const chnageGreen = () => {

    setKolor({
      backgroundColor: 'green',
    })
  }


  const chnageBlack = () => {

    setKolor({
      backgroundColor: 'black',
    })
  }

  return (
    <>
      <center className='flex min-h-screen justify-center, justify-evenly h-full rounded-xl  ' style={kolor}>
        <div className='bg-slate-100 h-8 my-5'>
        <button onClick={chnageBlack} className='bg-black text-white w-20 h-8 rounded-md  border-white border-2'>Black</button>
        <button onClick={chnageRed} className='bg-red-500 text-white w-20 h-8 rounded-md  border-white border-2'>Red</button>
        <button onClick={chnagePink} className='bg-pink-400 text-black w-20 h-8 rounded-md  border-white border-2'>Pink</button>
        <button onClick={chnageBlue} className='bg-blue-400 text-white w-20 h-8 rounded-md  border-white border-2' >Blue</button>
        <button onClick={chnageGreen} className='bg-green-500 text-white w-20 h-8 rounded-md  border-white border-2'>Green</button>
        </div>
      </center>
      <input type="text" />
    </>
  )
}

export default App
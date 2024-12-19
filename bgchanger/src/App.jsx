import React , { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')
  const bgColorChange = (bgColor)=>{
   return setColor(bgColor)
  }

  return (
    <>
      <div
        className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed bottom-12 h-14 bg-purple-600 w-full flex flex-wrap
          justify-center inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            <button className='bg-red-900 text-white' onClick={()=>bgColorChange('red')}>red</button>
            <button className='bg-green-900 text-white' onClick={()=>bgColorChange('green')}>green</button>
            <button className='bg-blue-900 text-white' onClick={()=>bgColorChange('blue')}>blue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App

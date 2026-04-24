import React from 'react'


const Main = () => {
  return (
    <div className='relative'>
      <img src="/pets.jpg" alt="pets" className='w-full' />
      <div className='absolute top-0'>
        <button className='font-quicksand'>Click and select your friend</button>
      </div>
    </div>
  )
}

export default Main
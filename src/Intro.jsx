import React from 'react'

const Intro = () => {
  return (
    <div className='relative h-screen w-full'>
      <img className='h-full absolute w-full  object-cover opacity-70' 
      src='./portfolio background img. .png' alt='Background_image'></img>
      {/* text section  */}
      <div className='flex justify-end pr-25 items-center h-full relative  text-white text-center '>
       <div>
        <h1 className='bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent text-6xl sm:font-serif animate-pulse
        hover:cursor-default'>Hi,I'm Ruhani</h1>
       <p className='text-2xl mt-1 hover:underline hover:cursor-default '>Full-Stack Developer </p>
       </div>
      </div>
    </div>
  )
}

export default Intro
import React from 'react'

const ProjectContainer = (props) => {
  return (
    <div className='hover:scale-103 '>
   
        <div className='relative text-black ml-16'>
        <img
        className='h-100 mt-6'
        src="./Purple All-in-One Computer Setup.png">
        </img>
       <div className='bg-white hover:animate-none animate-[pulse_4s_ease-in-out_infinite] absolute top-15 left-30 text-center'>
         <h2 className=' underline font-bold'>{props.heading}</h2>
        <p className='w-90 mt-2 text-center'>
        {props.discription}
        </p>
       </div>
      </div>
  
      

    </div>
  )
}

export default ProjectContainer
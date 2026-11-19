import React from 'react'
import Cloud from './Cloud'

const Skills = () => {
  
  const skills=['html','css','JavaScript','React.js','Tailwind CSS']
  const skills2=['JavaScript','Python']
 const skills3=['Git & GitHub','VS Code','Responsive Web Design','MERN Stack (Currently Learning)']
  const skills4=['Artificial Intelligence','Data Science','Full-Stack Development']

  return (
    <div  className='h-full items-center flex w-275 '>

      <div className='ml-50 mt-27 mb-9'>
         <h1 className='bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent text-6xl sm:font-serif animate-pulse
        hover:cursor-default mb-6'> My Skills</h1>

       <div className='bg-white/5 border border-purple-400/30
            rounded-2xl p-6 
            hover:border-purple-400 hover:shadow-xl
            hover:shadow-purple-500/10 transition duration-300'>
        <p >
I have a strong interest in web development and enjoy building modern, responsive, and user-friendly websites. I continuously work on improving my technical skills and exploring new technologies.
<br></br>


  <div className='flex justify-between flex-wrap hover:cursor-pointer'>
    <Cloud
  heading="Frontend Developer"
  photo='./Frontend Skills and Creative Interests-1.png'
  skills={skills}
  />
   <Cloud
  heading="Programming Languages"
  photo='./Frontend Skills and Creative Interests-2.png'
  skills={skills2}
  />
   <Cloud
  heading="Tools & Technologies"
  photo='Frontend Skills and Creative Interests-4.png'
  skills={skills3}
  />
  <Cloud
  heading="Other Interests"
  photo='./Frontend Skills and Creative Interests-3.png'
  skills={skills4}
  />
  </div>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
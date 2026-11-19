import React from 'react'

const Cloud = (props) => {
  return (
    <div>
      <h2 className='mt-6 flex font-bold hover:animate-pulse mb-2'>{props.heading}</h2>

         <img className='h-50 w-50 object-cover border  rounded-full ' 
          src={props.photo}
           alt='Background_image'>
       
     </img>
      
<ol className='list-disc mt-2 ml-10 list-inside'>
{props.skills.map((skill,index) => (
  <li key={index}>{skill}</li>
))}
</ol>


    </div>
  )
}

export default Cloud
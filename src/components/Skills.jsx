import React from 'react'
import { SkillsInfo } from '../../work/constant';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section
      id="skills"
      
      data-aos="fade-up"
      className=' pt-24 relative py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans '>
       

        {/* Section Title */}

        
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS </h2>
        <div className='w-24 h-1 bg-orange-400 mx-auto mt-2'>
        </div>




        <p className='text-gray-400 mt-4 text-lg font-semibold '>
          I am proficient in a variety of programming languages and
          frameworks, and I am always eager to learn new technologies
          and improve my skills.</p>
      
      </div>
      {/*skills categories*/} 

      <div 
      
      className=' flex flex-wrap gap-1 lg:gap-6 py-10 justify-between'>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900-blur-md px-4 sm:py-3 mb-8 w-full 
            sm:w-[48%] rounded-2xl border
            border-orange-400/10 hover:border-orange-500    
            transition-all duration-300
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]" >

            <h3 className='text-2xl sm:text-3xl font-semibold 
            text-gray-400 text-center  '>
              {category.title}
            </h3>

              <Tilt
          className="w-full border-none"

            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
           <div className='my-1 p-4  
           grid grid-cols-2 
           sm:grid-cols-3 
           gap-2 w-full'>
            
            {category.skills.map((skill) => (
              <div
              key={skill.name}
              className=' flex 
              items-center 
              justify-center 
              space-x-1 
              bg-transparent border-2 
              border-gray-700 rounded-3xl  '
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className=' w-5 h-4 sm:w-8 sm:h-8'
                ></img>
                <span className='p-1 mx-2 text-xs sm:text-sm text-gray-300'>
                  {skill.name}

                </span>
                </div>

          ))}
         
          </div>
          </Tilt>
          </div>
          



        ))}
      </div>





    
    </section >
  )
}

export default Skills


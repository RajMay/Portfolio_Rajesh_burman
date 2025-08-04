import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline';
import ChatBox from './ChatBox'
import { useState } from 'react';


const Hero = () => {
  const [showChat, setShowChat] = useState(false);

    return (
        <main id="about" className=" pt-24 flex lg:mt-20 flex-col lg:flex-row 
        items-center justify-between min-h-[calc(90vh-6rem)]">
            <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%]
    md:mt-[60%] lg:mt-0 ">
                {/*Tag box*/}
                <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r 
                from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)]
                rounded-full '>
                    <div className='absolute inset-[3px] bg-black rounded-full 
                     flex items-center justify-center gap-1'>

                       <i class="bx bx-diamond"></i> 
                        INTRODUCING
                    </div>
                </div>
               {/*  main Heading   */}  
               <h1 className='text-3xl sm-text-4xl md:text-5xl lg:text-6xl
               font-semibold tracking-wider my-8 text-orange-600'>
                AI
                <br />
                DEVELOPER
               
               </h1>
               <p className='text-base sm:text-lg tracking-wider 
               text-gray-400 max-w-[25rem] lg:max-w-[30rem] '>
                Whispering sweet nothings to neural nets since 202X
               </p>

               <div className='flex  gap-4 mt-8'>
  <a
   href="#projects"
    className=' border border-[#2a2a2a] py-2 px-4 
    rounded-full text-base 
    font-bold tracking-wide 
    transition-all duration-300 
    hover:bg-[#1a1a1a]
     hover:scale-105 '
  
  >
    Projects <i className='bx bx-link-external'></i>
  </a>

  {/*<a
    className='ml-3 bg-gradient-to-r from-orange-400 to-orange-600
        shadow-lg shadow-orange-500/30 
        hover:from-orange-500 hover:to-orange-700 
         py-2 px-5 
         rounded-full 
         text-base font-semibold 
         tracking-wide transition-all duration-300
         cursor-pointer
          hover:scale-105  '
   
  >
    ASK ME! <i className='bx bx-link-external'></i>
  </a> */ }

  <a
  onClick={() => setShowChat(true)}
  className='ml-3 bg-gradient-to-r from-orange-400 to-orange-600
    shadow-lg shadow-orange-500/30 
    hover:from-orange-500 hover:to-orange-700 
    py-2 px-5 
    rounded-full 
    text-base font-semibold 
    tracking-wide transition-all duration-300
    cursor-pointer
    hover:scale-105'
>
  ASK ME! <i className='bx bx-link-external'></i>
</a>
{showChat && <ChatBox onClose={() => setShowChat(false)} />}

</div> 

            </div>

            {/*   3D Robot           */}

              <Spline data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
     data-aos-duration="3000"
     
     className="absolute lg:top-0 top-[-20%]
              botttom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/7w7ePHKHO1Ics51b/scene.splinecode" />
  










        </main>
    )
}

export default Hero

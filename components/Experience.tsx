import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'


const Experience = () => {
  return (
    <div className='py-20' id="tarifs">
      <h2 className='heading'>
        Tarifs création de <br/>
        <span className='text-purple'> site internet professionnel </span>
      </h2>
      <div className='flex flex-col items-center lg:mt-2 mt-5'>
      <a href="mailto:ragaignef@gmail.com">
          <MagicButton
            title="Entrons en contact"
            icon={<FaLocationArrow />}
            position="right"
            
          />
        </a></div>
      <div className=' w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
            <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius='1.75rem'
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
                <div className='flex flex-col items-center lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <Image 
                  src={card.thumbnail} 
                  alt={card.thumbnail} 
                  width={128} // Par exemple 128px
                  height={128} // Par exemple 128px
                  className='lg:w-32 md:w-20 w-16' 
                />

                    <div className='lg:ms-5'>
                        <h3 className='text-center text-xl md:text-2xl font-bold'>
                            {card.title}
                        </h3>
                        <p className='text-center text-sm md:text-sm font-bold mt-10 text-purple'>
                            {card.subtitle}
                        </p>
                        <p className='text-center text-6xl md:text-6xl font-bold flex flex-row items-center justify-center p-3 gap-2 text-purple'>
                            {card.price} <span className='text-xs md:text-sm text-purple'>{card.subprice} <br/>  {card.subprice2} <br/> {card.subprice3}</span>
                        </p>

                        <p className=' text-white-100 mt-3 font-semibold text-center'>
                            {card.desc}
                        </p>
                    </div>
                </div>
            </Button>
            
        ))}
 
      </div>
    </div>
  )
}

export default Experience

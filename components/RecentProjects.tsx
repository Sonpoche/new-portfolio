import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'

const RecentProjects = () => {
  const filteredProjects = projects.filter(({ id }) => id <= 4)

  return (
    <div className='py-20' id="projets">
      <h2 className='heading'>
        Une petite sélection de {' '}
        <span className='text-purple'>projets récents</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {filteredProjects.map(({id, title, des, img, date, iconLists, link}) => (
            <div key={id} className=' sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                <PinContainer title={link} href={link}>
                    <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] lg:h-[35vh] sm:h-[30vh]  mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#00101A]'>
                            <Image src='/bg.png' alt="bg-img" 
                            width={128} // Par exemple 128px
                            height={128} // Par exemple 128px
                            />
                        </div>
                            <Image
                            width={128} // Par exemple 128px
                            height={128} // Par exemple 128px 
                            src={img}
                            alt={title}
                            className='z-10 absolute bottom-0 object-contain rotate-6 lg:rotate-0 lg:object-cover w-full h-full'
                            />
                    </div>
                    <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                        {title}
                    </h2>

                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                        {des}
                    </p>

                    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-400 opacity-70 mt-5">
                        {date}
                    </p>

                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                            {iconLists.map((icon, index) => (
                                <div key={icon} className='border border-[#00BC9B]/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center
                                ' style={{
                                    transform:`translateX(-${5 * index * 2}px)`
                                    }}>
                                    <Image src={icon} alt={icon}
                                    className='p-2' 
                                    width={128} // Par exemple 128px
                                    height={128} // Par exemple 128px
                                    />
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-center items-center'>
                            <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Voir le site</p>
                            <FaLocationArrow className='ms-3' color='#ffffff' />
                        </div>
                    </div>

                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects

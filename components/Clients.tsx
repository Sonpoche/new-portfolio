import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id="avis">
      <h2 className='heading'>
        Avis de {' '}
        <span className='text-purple'> clients satisfaits</span>
      </h2>
      <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
            />
      </div>
    </div>
  )
}

export default Clients

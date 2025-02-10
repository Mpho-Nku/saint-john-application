import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Author, Circuit } from '@/sanity.types'
export type CircuitCardType = Omit<Circuit,"author">&{author?:Author}
const CircuitCard = ({post}:{post:CircuitCardType}) => {
    const{_createdAt, views,bishop,description,title, location,_id, image} =post;
  return (
    <li className="startup-card group">
        <div className="flex-between">
            <div className='flex gap-1.5'>
               <EyeIcon className="size-6 text-primary"/>
               <span className='text-16-medium'>{views}</span>
            </div>
        </div> 

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
               <Link href={`/user/${location}`}/>
               <p className='text-16-medium line-clamp-1'><span className='pr-2'>Bishop</span>{bishop}</p>
             <Link href={`/circuit/${_id}`}>
                 <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
             </Link>
            </div>
        </div>  

        <Link href={`/circuit/${_id}`}>
           <p className='start-up-card_desc'>
             {description}
           </p>
           <img src={image} alt="placeholder" className='startup-card_img'/>
        </Link>
        <div className='flex-between gap-3 mt-5'>
          <Link href={`/?query=${location}`}>
           <p className='text-16-medium'>{location}</p>
          </Link>
                <Button className='startup-card_btn' asChild>
                    <Link href={`circuit/${_id}`}>
                      Details
                    </Link>
                </Button>
        </div>
    </li>
  
  )
}

export default CircuitCard
import React from 'react'
import { client } from "@/sanity/lib/client";
import { formatDate } from "@/lib/utils";
import { CIRCUIT_BY_ID_QUERY } from '@/sanity/lib/queries';
import Link from '@/node_modules/next/link';
import { MdLocationOn } from "react-icons/md";
const page = async ({params}:{params:Promise<{id: string}>}) => {
    const id= (await params ).id;
    const post = await client.fetch(CIRCUIT_BY_ID_QUERY,{id})

  return (
  <>
      <section className="pink_container !min-h-[230px]">   
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section  className="section_container ">
        <img
          src={post.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />


<div className="flex bg-white">
  <div className="flex-1 gap-0" > 
  <h1 className=' flex pt-2'>
  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
</svg>{post.location}
  </h1>

  <h1 className=' flex pt-2' >
  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
  {post.title}
  </h1 >
  <p className="sub-heading !max-w-5xl">{post.pitch}</p>
  </div>

  <div className="flex-1 gap-0" >
  <h1 className=' flex pt-2'>{post.pitch}</h1>  
  </div>

  <div className="w-64 flex-2">
    <h1 className=' flex pt-2' >
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M10.915 2.345a2 2 0 0 1 2.17 0l7 4.52A2 2 0 0 1 21 8.544V9.5a1.5 1.5 0 0 1-1.5 1.5H19v6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-6h-.5A1.5 1.5 0 0 1 3 9.5v-.955a2 2 0 0 1 .915-1.68l7-4.52ZM17 17v-6h-2v6h2Zm-6-6h2v6h-2v-6Zm-2 6v-6H7v6h2Z" clip-rule="evenodd"/>
    <path d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"/>
  </svg>
      {post.address}
  </h1>
  </div>
  
</div>
      </section>
  
  </>
  )
}

export default page
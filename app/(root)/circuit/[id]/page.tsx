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
  <h1 className=' flex pt-2'><MdLocationOn size={30}/>{post.location}</h1>  
  <p className="sub-heading !max-w-5xl">{post.pitch}</p>
  </div>

  <div className="flex-1 gap-0" >
  <h1 className=' flex pt-2'>{post.pitch}</h1>  
  </div>

  <div className="w-64 flex-2">
    <h1>{post.address}</h1>
  </div>
  
</div>
      </section>
  
  </>
  )
}

export default page
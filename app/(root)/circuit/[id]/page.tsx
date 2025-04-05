import React from 'react'
import { client } from "@/sanity/lib/client";
import { formatDate } from "@/lib/utils";
import { CIRCUIT_BY_ID_QUERY } from '@/sanity/lib/queries';
import Link from '@/node_modules/next/link';
import { MdLocationOn } from "react-icons/md";
import { auth, signOut, signIn } from "@/auth";
const page = async ({params}:{params:Promise<{id: string}>}) => {
  
  const session = await auth();
  const { id } = await params;
    const post = await client.fetch(CIRCUIT_BY_ID_QUERY,{id})

  return (
  <>
      <section className="pink_container !min-h-[230px]">  
      {session?.user?.id ? (
        <h1 className="heading">{id}</h1>
       ):(
        <p className="sub-heading !max-w-5xl">{post?.description}</p>
       )}
       

      </section>

      <section  className="section_container ">
        <img
          src={post?.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />



<section id="about" className=" pt-4 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Our Church</h2>
            <p className="text-lg text-gray-600 mb-8">{post?.description}</p>
            <div className="flex justify-center space-x-6">
                <div className="flex items-center space-x-2">
                    <i className="text-blue-800 w-6 h-6"> &#128113;</i>
                    <span className="font-semibold">
                    {post?.bishop}
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <i className="text-blue-800 w-6 h-6">&#128205;</i>
                    <span className="font-semibold">
                    {post?.location}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="text-blue-800 w-6 h-6 fas fa-home">&#127968;</i>
                    <span className="font-semibold">
                      {post?.address}
                    </span>
                    
                </div>
            </div>
        </div>
    </section>

    <section id="about" className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Who runs the church</h2>
            <p className="text-lg text-gray-600 mb-8 bold">    
         The church is led by  {post?.bishop} , a passionate and dedicated individual committed to nurturing faith, promoting outreach, and leading worship in the community. Under their guidance.
             
              
              </p>

        </div>
    </section>

 
  <section id="events" className="py-16 bg-blue-800 text-white">
    <h2 className="text-3xl font-semibold mb-8 text-center">Amalanga we Ntsebenzo/Matsatsi a Tshebetso</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <div className="p-6 bg-blue-700 rounded-lg shadow-md">
        <div className="text-5xl mb-4">
          <i className="fas fa-calendar-day"></i>
        </div>
        <h3 className="text-2xl font-semibold">Wednesday</h3>
        <div className="flex items-center space-x-2">
        <p>Intshebenzo/Tshebetso starts after 5:00 am church service until 09:30 am, and continues after the 10:00 am church ends. </p>

        </div>
   
      </div>
      <div className="p-6 bg-blue-700 rounded-lg shadow-md">
        <div className="text-5xl mb-4">
          <i className="fas fa-concierge-bell"></i>
        </div>
        <h3 className="text-2xl font-semibold">Saturday</h3>
        <div className="flex items-center space-x-2">
          <p>Intshebenzo/Tshebetso starts after 5:00 am church service until 09:30 am, and continues after the 10:00 am church ends. </p>

        </div>
      </div>
    
    </div>
  </section>

      </section>
  
  </>
  )
}

export default page
import React from 'react'
import CircuitForm from '@/components/CircuitForm'
import { auth } from '@/auth'
import { redirect } from '@/node_modules/next/navigation';

const Page  =  async () => {
    const session = await auth();
    if(!session) redirect("/");
  return (
    <>
       <section className='pink_container !min-h-[230px]'>
        <h1 className='heading'>
            Register Your Ciruit on Board!
        </h1>
        </section>
            <CircuitForm/>
        
    </>
  )
}

export default  Page 
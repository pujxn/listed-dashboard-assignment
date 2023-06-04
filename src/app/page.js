"use client";

import Image from 'next/image'
import { getProviders, signIn } from "next-auth/react"
import { useState, useEffect } from "react";
import { Lato, Montserrat } from 'next/font/google'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import Form from '@/components/landing/Form';

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] })


export default function Home() {


  const [isLoading, setIsLoading] = useState(true);
  const [providers, setProviders] = useState();

  console.log("LOADING", isLoading)

  const getProvidersFn = async () => {
    const fetchedProviders = await getProviders();
    setProviders(fetchedProviders);
    setIsLoading(false);
  }


  useEffect(() => {
    getProvidersFn();
  }, [])


  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (


    <div className='flex h-screen'>
      <div className=' bg-black min-w-[36.75rem] flex justify-center items-center'>
        <p className='text-white text-7xl font-bold'>Board.</p>
      </div>

      <div className='bg-whitesmoke flex justify-center grow items-center'>

        <div className='w-96'>

          <div className='mb-[1.625rem]'>
            <p className='text-4xl mb-[0.3125rem] font-bold'>Sign In</p>
            <p className={`text-base ${lato.className}`} >Sign in to your account</p>
          </div>

          <div className='flex justify-between text-xs mb-[1.5625rem]'>
            {Object.values(providers).map(provider => (
              <button className='bg-white rounded-[0.625rem] px-5 py-2' key={provider.id} onClick={() => signIn(provider.id)}>{provider.name == "Google" && <FcGoogle className='inline' />} Sign in with {provider.name}</button>
            ))}
            <button className='bg-white rounded-[0.625rem] px-5 py-2'><AiFillApple className='inline text-[#999999]' /> Sign in with Apple</button>
          </div>

          <div className='bg-white flex items-center rounded-[1.25rem]'>
            <Form />
          </div>

          <p className={`mt-5 text-center ${lato.className}`}>Dont have an account? <a href="#" className='text-[#346BD4]'>Register here</a></p>

        </div>

      </div >

    </div >

  )
}

import { Check, Search } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className="relative w-full flex items-center justify-center min-h-screen bg-[url('/assets/images/hero/hero.png')] bg-cover bg-center bg-no-repeat ">

            <div className="absolute inset-0 bg-black/30"></div>
            <div class="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#101922] z-10"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl text-center px-4">
                <h1 className="text-white text-4xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-xl">
                    Upgrade Your{' '}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                        Lifestyle
                    </span>
                </h1>
                <p className="mt-6 text-white/80 ext-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-md mb-5">
                    Premium electronics, fashion, and accessories curated for the modern minimalist.
                </p>
                <div className='w-full max-w-140 p-2 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl flex items-center gap-2'>
                    <div className='flex-1 flex items-center gap-3 px-3 h-10'>
                        <Search size={18} className='text-white'/>
                        <input type="text" placeholder='Search for products, brands...' className='outline-0 w-full bg-transparent border-none text-white placeholder-gray-300 focus:ring-0 text-base font-medium h-full p-0'/>
                    </div>
                    <Button className='h-full px-4 shadow-lg shadow-primary/30 cursor-pointer'>Explore</Button>
                </div>
                <div className='flex items-center gap-3 mt-7'>
                   <div className='flex items-center gap-2'> 
                    <span className='w-5 h-5 rounded-full bg-green-600 flex items-center justify-center'><Check size={14} /></span>
                    <span className='text-white'>Free Shipping</span>
                    </div>
                     <div className='flex items-center gap-2'> 
                    <span className='w-5 h-5 rounded-full bg-green-600 flex items-center justify-center'><Check size={14} /></span>
                    <span className='text-white'>30-Day Returns</span>
                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default Hero

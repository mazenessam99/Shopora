import React from 'react'
import { CONTACT } from '@/constants'
import { ArrowDown, Dock, Expand, ExpandIcon, File, Mail, MoveDown, SendHorizonal, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Contact = () => {
  return (
    <main className='container grow w-full flex flex-col py-8 lg:py-12 px-4 md:px-8 lg:px-40'>
      <div className='flex flex-col gap-4 text-center lg:text-left mb-4'>
        <h1 className='text-main text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight'>Get in Touch</h1>
        <p className="text-foreground/80 text-base lg:text-lg font-normal leading-relaxed max-w-2xl">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {CONTACT.map((item) => {
              const Icon = item.icon;
              return (
                <div className='flex gap-3 items-center rounded-2xl border border-border bg-surface-dark p-5 hover:border-primary/50 transition-colors group cursor-pointer' key={item.id}>
                  <div className="size-12 rounded-full flex items-center justify-center border border-border-dark text-primary bg-primary/10 text-xl">
                    <Icon />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h3>{item.title}</h3>
                    <a href={item.href} className='hover:text-primary/70'>{item.value}</a>
                  </div>

                </div>
              )
            })}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-border-dark relative group cursor-pointer">
              <img alt="Dark map showing location of headquarters in city center" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale invert" data-alt="Dark map showing location of headquarters in city center" data-location="Tech City, CA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAHV4ybm-IIGHAkqFkT5h56hk5JLatFFodaVViz17kq6wxsl04LiCVx-m9fMx8-MbxdfjQ-PpFk0wQ6Fgk-a6j0Blfw4Lf-9AyWtQdbweblzFTbB2ME_fMCKWcmMR7KZVgtcGxfDhd5imh1Bv9XlzV_YGLhlAFproVXIA26WRef1xtaYTqQHVyd-XUBhEYRtevK5Kh6uamY_rggctBjBdvaNuwNVVL5JYs2ggHwG7Y7Kei1C1fUpmOGr1y33JWnKFZCihahF0LoJA" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">near_me</span> View on Map
                </div>
              </div>
            </div>

          </div>


        </div>
        <div className='lg:col-span-7'>
          <div className='bg-surface-dark rounded-2xl border border-border-dark p-6 md:p-8 lg:p-10 shadow-xl shadow-black/20'>
            <h2 className='text-main font-bold text-2xl mb-6'>Send us a Message</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <label className='flex flex-col gap-2'>
                <span className='font-medium text-sm'>Full Name</span>
                <div className='relative'>
                  <input className='w-full bg-background-dark border border-border-dark rounded-xl h-12 px-4 pl-11 text-white placeholder-[#586472] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"' placeholder="John Doe" type="text" />
                  <User className='absolute left-3.5 top-1/2 -translate-y-1/2' size={20} />
                </div>
              </label>
              <label className='flex flex-col gap-2'>
                <span className='font-medium text-sm'>Email Address</span>
                <div className='relative'>
                  <input className='w-full bg-background-dark border border-border-dark rounded-xl h-12 px-4 pl-11 text-white placeholder-[#586472] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"' placeholder="john@example.com" type="email" />
                  <Mail className='absolute left-3.5 top-1/2 -translate-y-1/2' size={20} />
                </div>
              </label>
            </div>
            <label className='flex flex-col gap-2 mt-3'>
              <span className='font-medium text-sm'>Subject</span>
              <div className='relative'>
                <select name="" id="" className='w-full h-12 px-4 pl-11  text-main rounded-xl border border-border-dark outline-none appearance-none transition-all cursor-pointer '>
                  <option disabled="" selected="" value="">Select a topic</option>
                  <option value="order" className='bg-accent cursor-pointer'>Order Inquiry</option>
                  <option value="product" className='bg-accent cursor-pointer'>Product Information</option>
                  <option value="returns" className='bg-accent cursor-pointer'>Returns &amp; Refunds</option>
                  <option value="other" className='bg-accent cursor-pointer'>Other</option>
                </select>
                <Dock className='absolute left-3.5 top-1/2 -translate-y-1/2 text-[#586472]' size={20}/>
                <ArrowDown className='absolute right-3.5 top-1/2 -translate-y-1/2 text-[#586472] pointer-events-none' size={20}/>

              </div>

            </label>
            <label className='flex flex-col gap-2 mt-3'>
              <span className='font-meduim text-sm'>Message</span>
              <textarea className='w-full bg-background-dark border border-border-dark rounded-xl p-4 text-main placeholder-[#586472] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none min-h-40' placeholder="How can we help you?"/>
            </label>
            <Button className="w-full mt-3 py-5 flex items-center gap-2 rounded-full hover:bg-blue-600 transition-colors font-bold h-12 shadow-lg shadow-primary/20 cursor-pointer">Send Message <SendHorizonal className='group-hover:translate-x-1 transition-transform'/></Button>
          </div>



        </div>

      </div>
    </main>
  )
}

export default Contact
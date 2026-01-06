import React from 'react'
import { CONTACT } from '@/constants'
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

      </div>
    </main>
  )
}

export default Contact
import Hamburger from 'hamburger-react'
import { Button } from "@/components/ui/button"
import { Separator } from './ui/separator'
import { useState } from 'react'

export const Header = () => {
    // Estado del menu hamburguesa
    const [isOpen, setOpen] = useState(false)

  return (
    <div className="container px-4 mx-auto max-w-[1200px]">
        <header className='flex justify-between py-8'>    
            <div className='flex items-center gap-8'>
                <img src="/images/logo.svg" alt="Logo" />
                <a className='text-m-gray font-semibold hidden md:block' href="#">Features</a>
                <a className='text-m-gray font-semibold hidden md:block' href="#">Pricing</a>
                <a className='text-m-gray font-semibold hidden md:block' href="#">Resources</a>
            </div>
            <div className='hidden md:block'>
                <Button className='cursor-pointer' variant="ghost">Log In</Button>
                <Button className='cursor-pointer' variant="cyan">Sign Up</Button>
            </div>
            <div className='md:hidden'>
                <Hamburger toggle={setOpen} toggled={isOpen} color='hsl(0, 0%, 75%)'/>
            </div>
            <div className={`${isOpen? 'translate-0' : 'translate-x-[760px]'} absolute top-24 left-0 right-0 transition-all duration-200 md:hidden bg-m-dark-violet flex flex-col rounded-2xl mx-4 text-center px-4 py-6 gap-4 z-10`}>
                <a className='text-white font-semibold' href="#">Features</a>
                <a className='text-white font-semibold' href="#">Pricing</a>
                <a className='text-white font-semibold' href="#">Resources</a>
                <Separator className='bg-m-gray/25'/>
                <a className='text-white font-semibold' href="#">Login</a>
                <Button variant={'cyan'}>Sign Up</Button>
            </div>
        </header>
    </div>
  )
}

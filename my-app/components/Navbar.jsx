import Link from 'next/link'
import React from 'react'




const Navbar = () => {
    return (
        <nav className='bg-sky-300 h-20'>
            <div className='container mx-auto flex items-center justify-between h-full px-20'>
                <div>
                    <img src="/pawy.png" alt="pawy" className='h-15 w-15' />
                </div>
                <ul className='flex gap-10 font-medium text-gray-800'>
                    <li><Link href="/" className="hover:text-amber-200 transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-amber-200 transition">About us</Link></li>
                    <li><Link href="/services" className="hover:text-amber-200 transition">Services</Link></li>
                    <li><Link href="/pets" className="hover:text-amber-200 transition">Pets</Link></li>
                    <li><Link href="/volunteer" className="hover:text-amber-200 transition">Volunteer</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
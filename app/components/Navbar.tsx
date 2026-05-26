import React from 'react'
import Link from 'next/link'
import Logout from './Logout'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <Link href={"/"}>Homepage</Link>
      <Link href={"/Dashboard"}>Dashboard</Link>
      <Link href={"/SignUp"}>SignUp</Link>
      <Link href={"/SignIn"}>SignIn</Link>
      <Logout/>
    </div>
  )
}

export default Navbar

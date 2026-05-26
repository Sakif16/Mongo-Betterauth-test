
'use client'


import React from 'react'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

const Logout = () => {

    async function handleclick(){
        await authClient.signOut({
        fetchOptions: {
        onSuccess: () => {
        redirect('/SignIn') // redirect to login page
    },
  },
});
    }


  return (
    <div>
      <button onClick={handleclick} className='cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout

'use client'

import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
const SignUpPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e:any) {
        e.preventDefault()
        const { data, error } = await authClient.signUp.email({
        name: name, // required
        email:  email, 
        password: password, // required
        callbackURL: "/Dashboard",
        
        },{
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            redirect('/Dashboard')
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
        
    });
    console.log("data", data)
        
    }



  return (
    <main style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
      <form onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '360px',
        }}
        method='POST'
      >
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Create an account</h1>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{ padding: '0.75rem', fontSize: '1rem' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{ padding: '0.75rem', fontSize: '1rem' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Password
          <input
            type="password"
            name="password"
            required
            placeholder="Enter a password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{ padding: '0.75rem', fontSize: '1rem' }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Sign up
        </button>
      </form>
    </main>
  )
}

export default SignUpPage


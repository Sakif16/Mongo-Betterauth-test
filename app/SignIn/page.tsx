'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { authClient } from '@/lib/auth-client'

const SignInPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e:any) {
    e.preventDefault()
    const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/Dashboard",
        rememberMe: true
}, {
    //callbacks
})
  }

  return (
    <main style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '360px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Sign in to your account</h1>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.75rem', fontSize: '1rem' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Password
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          Sign in
        </button>

        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          Don't have an account?{' '}
          <Link href="/SignUp" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            Sign up
          </Link>
        </p>
      </form>
    </main>
  )
}

export default SignInPage

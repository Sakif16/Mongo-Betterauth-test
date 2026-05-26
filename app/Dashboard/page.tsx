import React from 'react'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const Dashboard = async () => {

  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })

  if (!session){
    return(

        redirect("/SignIn")

    )
  }

  return (
    <div>
      Dashboard Page
    </div>
  )
}

export default Dashboard

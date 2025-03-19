'use client'
import { useEffect } from 'react'
import { signOut } from '@/app/actions'
import { redirect } from "next/navigation";
 
export default function Page() {
  useEffect(() => {
    signOut()
  }, [])

  return redirect('/signin');
}
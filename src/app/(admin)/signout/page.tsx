'use client'
import { useEffect } from 'react'
import { signOut } from '@/app/actions'
 
export default function Page() {
  useEffect(() => {
    signOut()
  }, [])

  return null;
}
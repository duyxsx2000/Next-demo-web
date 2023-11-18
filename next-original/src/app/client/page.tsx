'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../component/UserCard'

export default function ClientPage() {
    
    const { data: session } = useSession(
        {
        required: true,
        onUnauthenticated() {
            redirect('/auth/signIn?callbackUrl=/jobss')
        }
    }
    )

    if (!session?.user) return

    return (
        <section className="flex flex-col gap-6 pt-40 bg-pink-200">
            <UserCard user={session?.user} pagetype={"Client"} />
        </section>
    )
}
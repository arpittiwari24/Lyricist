'use client'
import { useSession} from "next-auth/react"
import Hero from "./components/Hero"
import Features from "./components/Features"
import MusicGenerator from "./components/MusicGenerator"

export default function Home() {
  const { data : session} = useSession()

  if(session && session.user){
    return(
      <main className="text-gray-800">
        <MusicGenerator />
      </main>
    )
  }
  return (
   <main className="text-gray-800">
 <Hero />
<Features />
   </main>
  )
}

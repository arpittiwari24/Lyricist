'use client'

import Hero from "./components/Hero"
import Features from "./components/Features"
import MusicGenerator from "./components/MusicGenerator"

export default function Home() {
  
  return (
   <main className="text-gray-800">
 <Hero />
<Features />
<MusicGenerator />
   </main>
  )
}

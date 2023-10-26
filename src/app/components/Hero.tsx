
import {signIn } from "next-auth/react"


export default function Hero() {
    return(
        <section className=" text-white py-16">
        <div className="container mx-auto text-center">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap lg:px-40 text-4xl md:text-5xl font-bold mb-4">Unlock Your Creative Melody</h1>
            <p className="text-lg md:text-2xl opacity-80 mb-8 text-center px-32 pb-8 pt-5">Are you a musician, songwriter, or creative spirit looking to bring your musical visions to life? Say goodbye to writer's block and hello to inspiration like never before! Our AI Music Lyricist is here to revolutionize your songwriting journey.</p>
        </div>
    </section>
    )
}
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

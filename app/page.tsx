import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Programs from "@/components/programs"
import Motivation from "@/components/motivation"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SocialSidebar from "@/components/social-sidebar" // Import social sidebar component
import Services from "@/components/services"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <SocialSidebar /> {/* Add social sidebar */}
      <Hero />
      <About />
  <Services />
      <Programs />
      <Motivation />
      <Contact />
      <Footer />
    </main>
  )
}

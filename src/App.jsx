import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import portfolioData from './data/portfolio.json'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 grid-background pointer-events-none z-0" />

      <Navbar profile={portfolioData.profile} />

      <main className="relative z-10">
        <Hero profile={portfolioData.profile} />
        <ProjectGrid
          videos={portfolioData.videos}
          categories={portfolioData.categories}
        />
        <Services services={portfolioData.services} />
        <About profile={portfolioData.profile} tools={portfolioData.tools} />
        <Contact profile={portfolioData.profile} />
      </main>

      <Footer profile={portfolioData.profile} />
    </div>
  )
}

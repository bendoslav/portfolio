import Header from './components/Header/Header.tsx'
import Hero from './components/Hero/Hero.tsx'
import Introduction from './components/Introduction/Introduction.tsx'
import ThemeTransition from './components/effects/ThemeTransition'
import { useTheme } from './context/ThemeContext'
import Projects from './components/Projects/Projects.tsx'
import Contact from './components/Contact/Contact.tsx'
function App() {
  const { isTransitioning } = useTheme()

  return (
    <>
      <ThemeTransition />
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${
        isTransitioning ? 'theme-transitioning' : ''
      }`}>
        <Header />
        <main>
          <Hero />
          <Introduction />
          <Projects />
          <Contact />
        </main>
        
      </div>
    </>
  )
}

export default App

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
  isDarkMode: boolean
  isTransitioning: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return saved ? JSON.parse(saved) : prefersDark
    }
    return false
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleDarkMode = async () => {
    setIsTransitioning(true)
    
    // Přidání efektu třesení
    document.documentElement.style.animation = 'shake 0.5s ease-in-out'
    
    // Počkáme na dokončení animace
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsDarkMode(prev => !prev)
    
    // Počkáme na dokončení přechodu
    await new Promise(resolve => setTimeout(resolve, 200))
    
    setIsTransitioning(false)
    document.documentElement.style.animation = ''
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, isTransitioning, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 
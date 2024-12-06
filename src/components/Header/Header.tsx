import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { 
  RiRocketLine, 
  RiMailLine,
  RiGithubLine,
} from 'react-icons/ri'
import { 
  HiOutlineSparkles,
  HiOutlineLightningBolt
} from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [activeLink, setActiveLink] = useState('')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = ['skills', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#skills", label: "Skills", icon: HiOutlineLightningBolt },
    { href: "#projects", label: "Projects", icon: RiRocketLine },
    { href: "#contact", label: "Contact", icon: RiMailLine }
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId.slice(1))
    if (element) {
      const offset = 80 // offset pro header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between md:justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                className="relative group"
                onHoverStart={() => setHoveredLink(item.href)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <motion.a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-6 py-3 text-sm font-medium tracking-wider flex items-center gap-2
                    ${activeLink === item.href.slice(1)
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-white'
                    } transition-colors duration-300`}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </span>
                  
                  {/* Enhanced Hover Background */}
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: hoveredLink === item.href || activeLink === item.href.slice(1) ? 1 : 0,
                      scale: hoveredLink === item.href || activeLink === item.href.slice(1) ? 1 : 0.95
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Enhanced Glow Effect */}
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                      filter: 'blur(10px)'
                    }}
                  />
                  
                  {/* Sparkle Effect */}
                  {(hoveredLink === item.href || activeLink === item.href.slice(1)) && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -right-1 -top-1"
                    >
                      <HiOutlineSparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                    </motion.span>
                  )}
                </motion.a>
              </motion.div>
            ))}

            {/* GitHub Link */}
            <motion.a
              href="https://github.com/bendoslav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-3 rounded-xl group"
            >
              <span className="relative z-10">
                <RiGithubLine className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
              </span>
              
              {/* GitHub Button Hover Effect */}
              <motion.span
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* GitHub Button Glow */}
              <motion.span
                className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(75, 85, 99, 0.5) 0%, transparent 70%)',
                  filter: 'blur(8px)'
                }}
              />
            </motion.a>

            {/* Dark Mode Toggle with enhanced effects */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="relative w-12 h-12 rounded-xl group"
            >
              <motion.span
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 opacity-100 group-hover:opacity-90 transition-opacity duration-300"
              />
              
              <span className="absolute inset-[2px] rounded-[10px] bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDarkMode ? "dark" : "light"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    {isDarkMode ? (
                      <FiSun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <FiMoon className="w-5 h-5 text-blue-600" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </span>
              
              {/* Dark Mode Toggle Glow */}
              <motion.span
                className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                  filter: 'blur(8px)'
                }}
              />
            </motion.button>
          </div>

          {/* Vylepšená mobilní část */}
          <div className="md:hidden">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Dark Mode Toggle pro mobil */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="relative w-12 h-12 rounded-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-violet-600 to-purple-600"
                  style={{ opacity: 0.9 }}
                />
                <span className="absolute inset-[2px] rounded-xl bg-white/90 dark:bg-gray-900/90 flex items-center justify-center backdrop-blur-sm">
                  {isDarkMode ? (
                    <FiSun className="w-6 h-6 text-amber-400" />
                  ) : (
                    <FiMoon className="w-6 h-6 text-blue-600" />
                  )}
                </span>
              </motion.button>

              {/* GitHub Link pro mobil */}
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12 rounded-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900"
                  style={{ opacity: 0.9 }}
                />
                <span className="absolute inset-[2px] rounded-xl bg-white/90 dark:bg-gray-900/90 flex items-center justify-center backdrop-blur-sm">
                  <RiGithubLine className="w-6 h-6 text-gray-900 dark:text-white" />
                </span>
              </motion.a>

              {/* Menu Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-12 h-12 rounded-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-violet-600 to-purple-600"
                  style={{ opacity: 0.9 }}
                />
                <span className="absolute inset-[2px] rounded-xl bg-white/90 dark:bg-gray-900/90 flex items-center justify-center backdrop-blur-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMenuOpen ? "close" : "menu"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMenuOpen ? (
                        <FiX className="w-6 h-6 text-gray-900 dark:text-white" />
                      ) : (
                        <FiMenu className="w-6 h-6 text-gray-900 dark:text-white" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </span>
              </motion.button>
            </div>

            {/* Vylepšené mobilní menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-6"
                >
                  <motion.div
                    className="rounded-3xl bg-white dark:bg-gray-900 shadow-2xl 
                              border border-gray-200 dark:border-gray-800
                              overflow-hidden"
                  >
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          scrollToSection(e, item.href)
                          setIsMenuOpen(false)
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative group flex items-center gap-4 p-4 
                                  ${index !== navItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}
                                  ${activeLink === item.href.slice(1)
                                    ? 'bg-gradient-to-r from-blue-500/10 to-violet-500/10 dark:from-blue-500/20 dark:to-violet-500/20'
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                  } transition-all duration-300`}
                      >
                        <div className={`p-3 rounded-2xl 
                                    ${activeLink === item.href.slice(1)
                                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10'
                                      : 'bg-gray-100 dark:bg-gray-800'
                                    }`}>
                          <item.icon className={`w-6 h-6 ${
                            activeLink === item.href.slice(1)
                              ? 'text-white'
                              : 'text-gray-700 dark:text-gray-300'
                          }`} />
                        </div>
                        
                        <div className="flex flex-col">
                          <span className={`font-medium text-base ${
                            activeLink === item.href.slice(1)
                              ? 'text-gray-900 dark:text-white'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {item.label}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {/* Přidáme krátký popis pro každou sekci */}
                            {item.href === '#about' && 'Poznejte mě blíže'}
                            {item.href === '#skills' && 'Moje dovednosti'}
                            {item.href === '#projects' && 'Moje projekty'}
                            {item.href === '#contact' && 'Spojte se se mnou'}
                          </span>
                        </div>

                        {activeLink === item.href.slice(1) && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="absolute right-4 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"
                          />
                        )}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header 
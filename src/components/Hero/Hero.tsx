import { motion, useScroll, useTransform } from 'framer-motion'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { 
  RiGithubLine, 
  RiTerminalBoxLine,
  RiReactjsLine,
  RiNodejsLine,
} from 'react-icons/ri'
import { 
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiAdobexd
} from 'react-icons/si'
import { FaFigma } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const technologies = [
    { name: "React", icon: RiReactjsLine, color: "text-blue-500" },
    { name: "Node.js", icon: RiNodejsLine, color: "text-green-600" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
    { name: "Express", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "UI/UX", icon: FaFigma, color: "text-purple-500" },
    { name: "Figma", icon: FaFigma, color: "text-pink-600" },
    { name: "Adobe XD", icon: SiAdobexd, color: "text-fuchsia-600" }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.section 
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white 
                    dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 
                   rounded-full blur-3xl"
          style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-200/30 dark:bg-violet-500/10 
                   rounded-full blur-3xl"
          style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative container mx-auto px-6 z-10 pt-20"
        style={{ y }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2"
          >
            <span className="px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/50 
                         text-blue-800 dark:text-blue-300 text-sm font-medium
                         backdrop-blur-sm border border-blue-200 dark:border-blue-800">
              <span className="flex items-center gap-2">
                <RiTerminalBoxLine className="w-4 h-4" />
                Full-stack Developer
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm
            </h1>
            <div className="relative inline-block">
              <motion.span
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600
                       dark:from-blue-400 dark:via-violet-400 dark:to-purple-400
                       relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Bendoslav
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-4 bg-blue-200 dark:bg-blue-800/50 
                        -skew-x-12 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
              Building <span className="text-blue-600 dark:text-blue-400">comprehensive web solutions</span> 
              <br className="hidden md:inline" /> 
              from backend to <span className="text-violet-600 dark:text-violet-400">
              user interface</span>
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Specializing in modern application development with focus on
              <br className="hidden md:inline" /> 
              performance, scalability, and exceptional user experience
            </p>

            {/* Technologies with Icons */}
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800
                           text-gray-700 dark:text-gray-300 text-sm font-medium
                           border border-gray-200 dark:border-gray-700
                           hover:scale-105 transition-transform duration-200
                           flex items-center gap-2 shadow-sm"
                >
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-2xl bg-gray-900 dark:bg-white
                       text-white dark:text-gray-900 font-medium min-w-[200px]
                       overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600
                         translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.a>
            
            <motion.a
              href="https://github.com/bendoslav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-2xl text-gray-900 dark:text-white font-medium
                       border-2 border-gray-900 dark:border-white min-w-[200px]
                       hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900
                       transition-all duration-300 flex items-center justify-center gap-3"
            >
              <RiGithubLine className="w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                   transition-colors duration-300 z-20 hidden md:flex"
        >
          <span className="text-sm font-medium">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-white/50 dark:bg-gray-800/50 rounded-full p-2 backdrop-blur-sm"
          >
            <HiOutlineArrowNarrowDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default Hero 
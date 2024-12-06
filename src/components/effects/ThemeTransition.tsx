import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const ThemeTransition = () => {
  const { isTransitioning } = useTheme()

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
        >
          {/* Portálový efekt */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 2],
              opacity: [0, 1, 0],
              rotateZ: [0, 180, 360]
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-purple-500 animate-spin-slow opacity-50 blur-xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-reverse opacity-50 blur-xl" />
          </motion.div>

          {/* Dimenzionální vlny */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 2, 3],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.2,
                ease: "easeOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            >
              <div className="absolute inset-0 rounded-full border-4 border-white/20 blur-sm" />
            </motion.div>
          ))}

          {/* Světelné paprsky */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 2, 0],
                rotate: i * 30
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.05,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 w-2 h-[500px] origin-bottom -translate-x-1/2"
              style={{
                background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.5))',
              }}
            />
          ))}

          {/* Částice procházející dimenzí */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, Math.random() * 2, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: [0, 360],
              }}
              transition={{
                duration: 1.2,
                delay: Math.random() * 0.3,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white rounded-full blur-[2px]"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ThemeTransition 
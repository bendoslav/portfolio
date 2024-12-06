import { motion } from 'framer-motion';
import { RiReactjsLine, RiNodejsLine, RiTerminalBoxLine, RiDatabase2Line, RiLayoutLine, RiTestTubeLine, RiCodeLine, RiGlobalLine, RiShieldLine } from 'react-icons/ri';
import { SiTypescript, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Introduction = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const skills = [
    {
      name: 'Frontend Development',
      description: 'Specializing in creating responsive and interactive web applications',
      icon: <RiReactjsLine className="w-6 h-6 text-blue-500" />,
      technologies: ['React', 'TypeScript', 'Next.js'],
      level: 95
    },
    {
      name: 'Backend Development',
      description: 'Development of scalable APIs and server solutions',
      icon: <RiNodejsLine className="w-6 h-6 text-green-500" />,
      technologies: ['Node.js', 'Express', 'NestJS'],
      level: 90
    },
    {
      name: 'Database Design',
      description: 'Design and implementation of database structures and solutions',
      icon: <RiDatabase2Line className="w-6 h-6 text-orange-500" />,
      technologies: ['MongoDB', 'PostgreSQL', 'Redis'],
      level: 85
    },
    {
      name: 'UI/UX Design',
      description: 'Creating user-friendly and aesthetic interfaces',
      icon: <RiLayoutLine className="w-6 h-6 text-indigo-500" />,
      technologies: ['Tailwind CSS', 'Figma', 'Material-UI'],
      level: 88
    },
    {
      name: 'Testing & QA',
      description: 'Ensuring code quality and application reliability',
      icon: <RiTestTubeLine className="w-6 h-6 text-red-500" />,
      technologies: ['Jest', 'Cypress', 'React Testing Library'],
      level: 82
    },
    {
      name: 'DevOps & Deployment',
      description: 'Process automation and application deployment',
      icon: <RiTerminalBoxLine className="w-6 h-6 text-purple-500" />,
      technologies: ['Docker', 'CI/CD', 'AWS'],
      level: 80
    },
    {
      name: 'Performance Optimization',
      description: 'Optimizing application performance and speed',
      icon: <RiCodeLine className="w-6 h-6 text-yellow-500" />,
      technologies: ['Webpack', 'Lighthouse', 'Web Vitals'],
      level: 85
    },
    {
      name: 'SEO & Analytics',
      description: 'Search engine optimization and metrics tracking',
      icon: <RiGlobalLine className="w-6 h-6 text-blue-400" />,
      technologies: ['Google Analytics', 'SEO', 'Meta Tags'],
      level: 78
    },
    {
      name: 'Security & Authentication',
      description: 'Implementation of security features and authentication',
      icon: <RiShieldLine className="w-6 h-6 text-emerald-500" />,
      technologies: ['JWT', 'OAuth', 'Encryption'],
      level: 83
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" id='skills'>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
            My Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Creating modern web applications with focus on performance, scalability, and user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative z-10 h-full p-8 bg-white dark:bg-gray-800 rounded-2xl
                            border border-gray-200 dark:border-gray-700
                            transform transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gray-100 dark:bg-gray-700
                              transform transition-transform duration-300 group-hover:rotate-12">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {skill.description}
                </p>
                
                {/* Skill Level Indicator */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Experience</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-300 rounded-full
                               transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction; 
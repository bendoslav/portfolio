import { motion } from 'framer-motion';
import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';
import { SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import codemasterImage from '../../assets/codemaster.png';
import codeioImage from '../../assets/codeio.png';

interface Project {
  title: string;
  description: string;
  technologies: Array<{
    name: string;
    icon: React.ElementType;
    color: string;
  }>;
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects = () => {
  const commonTech = [
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
  ];

  const projects: Project[] = [
    {
      title: "CodeMaster",
      description: "An interactive platform for learning programming through hands-on exercises and real-time code execution. Features include live coding environments, progress tracking, and community discussions.",
      technologies: commonTech,
      image: codemasterImage,
      github: "https://github.com/bendoslav/codemaster",
      demo: "https://bendoslav.github.io/codemaster/",
      featured: true
    },
    {
      title: "CodeIO",
      description: "A revolutionary web development platform that allows users to create websites through a component-based drag-and-drop interface, similar to Botghost but focused on web development.",
      technologies: commonTech,
      image: codeioImage,
      github: "https://github.com/bendoslav/codeio",
      demo: "https://bendoslav.github.io/codeio/",
      featured: true
    }
  ];

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative py-20 overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest web development projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                {/* Project Image with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-[2px]">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/90 hover:bg-white transition-colors duration-300 hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <RiGithubLine className="w-6 h-6 text-gray-900" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/90 hover:bg-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <RiExternalLinkLine className="w-6 h-6 text-gray-900" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 
                                 text-gray-700 dark:text-gray-300 rounded-full group/tech
                                 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <tech.icon className={`w-4 h-4 ${tech.color}`} />
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
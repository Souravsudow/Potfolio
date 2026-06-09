import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import TicTacToeCard from './TicTacToeCard';

const FeaturedProjects = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.slice(0, 3).map((project, index) => (
          <motion.a
            key={project.slug}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-600 h-full">
              {/* Preview Image */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                  src={project.previewImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech.name}
                      className={`text-xs px-2 py-0.5 rounded-full bg-${tech.color}-500 text-white`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Tic-Tac-Toe Game Card - fills the empty grid slot */}
        <TicTacToeCard delay={0.3} />
      </div>
    </section>
  );
};

export default FeaturedProjects;

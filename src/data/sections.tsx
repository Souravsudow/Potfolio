import { motion } from 'framer-motion';
import { Project } from '../components/Project';
import { ClientCard } from '../components/ClientCard';
import { HobbiesSection } from '../components/HobbiesSection';
import { projects } from '../data/projects';
import { clients } from '../data/clients';

export const sections = [
  {
    title: "Timeline",
    content: (
      <div className="space-y-4 mb-8">
        {[
          {
            company: "Icpure",
            date: "Jan 2026 - June 2026",
            title: "Software Engineer Intern",
            description: ["working on building real world applications"],
            dotColor: "bg-blue-500"
          },
          {
            company: "TKV Solutions, Gurgaon",
            date: "May 2025 - Nov 2025",
            title: "Operations Intern – IT Services ",
            description: ["Optimized IT operations, projects, and team productivity."],
            dotColor: "bg-amber-300"
          },
          {
            company: "Placify",
            date: "Jun 2024 - Aug 2024",
            title: "Cybersecurity Intern",
            description: ["Mitigated 20+ vulnerabilities, enforced RBAC, enhanced security"],
            dotColor: "bg-green-500"
          },

        ].map((item) => (
          <div key={item.company + item.date} className="relative">
            <div
              className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
            />
            <motion.div
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <p className="font-medium">{item.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Projects",
    content: (
      <div className="space-y-4">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    )
  },
  {
    title: "Clients Projects",
    content: (
      <div className="space-y-4">
        {clients.map((client) => (
          <ClientCard key={client.name} client={client} />
        ))}
      </div>
    )
  },
  {
    title: "Hobbies",
    content: <HobbiesSection />
  }
]
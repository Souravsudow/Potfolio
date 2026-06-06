import { motion } from 'framer-motion';
import { useYouTubeVideoCount } from '../hooks/useYouTubeVideoCount';

const hobbies = [
  {
    title: "YouTube",
    description: "Documenting My Software Engineering Journey on YouTube",
    statsKey: "youtube" as const,
    color: "rose"
  },
  {
    title: "Building AI Projects",
    description: "Building AI-powered tools and applications with cutting-edge technology",
    stats: "10+ projects",
    color: "blue"
  },
  {
    title: "Learning Emerging Technologies",
    description: "Continuously exploring and mastering new technologies to stay ahead in the fast-evolving tech landscape",
    stats: "5+ technologies",
    color: "green"
  },
  {
    title: "Playing Esports Games",
    description: "Engaging in competitive gaming to sharpen strategic thinking and reflexes",
    stats: "Top 5% rank",
    color: "purple"
  },

];

export const HobbiesSection = () => {
  const { videoCountText, loading } = useYouTubeVideoCount();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
      {hobbies.map((hobby) => {
        const stats =
          hobby.statsKey === "youtube"
            ? loading
              ? "…"
              : (videoCountText ?? "—")
            : hobby.stats!;

        return (
          <motion.div
            key={hobby.title}
            className="group py-1 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className="font-medium">{hobby.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {hobby.description}
              </p>
              <p
                className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}
              >
                {stats}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

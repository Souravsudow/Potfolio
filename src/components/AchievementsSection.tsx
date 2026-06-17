import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';

export const AchievementsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          className="group rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Certificate Image Preview */}
          {achievement.certImageSrc && (
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 overflow-hidden p-3">
              <img
                src={achievement.certImageSrc}
                alt={`${achievement.title} certificate`}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 rounded-md"
                loading="lazy"
              />
            </div>
          )}

          {/* Icon area */}
          <div className="flex items-start gap-3 p-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {achievement.logoSrc ? (
                <img
                  src={achievement.logoSrc}
                  alt={`${achievement.issuer} logo`}
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-lg">{achievement.icon}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm sm:text-base group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 font-medium">
                  Certificate
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                {achievement.issuer}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="px-4 pb-4 space-y-2">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {achievement.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-500">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {achievement.date}
                {achievement.expiry && <span>· Expires {achievement.expiry}</span>}
              </span>
              {achievement.credentialId && (
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  ID: {achievement.credentialId}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

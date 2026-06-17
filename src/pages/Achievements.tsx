import { motion } from 'framer-motion';
import { AchievementsSection } from '../components/AchievementsSection';
import { SEO } from '../components/SEO';
import { FadeInSection } from '../utils/FadeInSection';

const ACHIEVEMENTS_DESCRIPTION = 'Certifications and achievements of Sourav Kumar — software engineer, AI developer, and full-stack developer with expertise in Google, IBM, and industry-recognized credentials.';

const Achievements = () => {
  return (
    <div>
      <SEO
        title="Achievements"
        description={ACHIEVEMENTS_DESCRIPTION}
        keywords="Sourav Kumar certifications, Google certification, IBM data engineer, OPSWAT infrastructure, UNESCO SEEK, Coding Ninjas, software engineer credentials"
        ogUrl="https://sourav.website/achievements"
        canonicalUrl="https://sourav.website/achievements"
      />

      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Achievements
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          Certifications & credentials.
        </motion.p>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <AchievementsSection />
      </FadeInSection>
    </div>
  );
};

export default Achievements;

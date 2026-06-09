import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SpotifyPlaying from '../components/SpotifyPlaying';
import YouTubeLatest from '../components/YouTubeLatest';
import FeaturedProjects from '../components/FeaturedProjects';
import { SEO } from '../components/SEO';
import { FadeInSection } from '../utils/FadeInSection';

const HOME_DESCRIPTION = 'Portfolio of Sourav Kumar — a software engineer, AI developer, and full-stack developer. Explore projects, YouTube content, and connect for collaboration.';

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description={HOME_DESCRIPTION}
        keywords="Sourav Kumar portfolio, software engineer portfolio, AI developer portfolio, full stack developer, React developer India"
        ogUrl="https://sourav.website/"
        canonicalUrl="https://sourav.website/"
      />

      <FadeInSection>
        <section className="space-y-4">
          <motion.div
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'hello, Sourav',
              ]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={50}
              style={{ display: 'inline-block' }}
            />
          </motion.div>
          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            just a curious builder documenting the journey to becoming a software engineer.
          </motion.p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <motion.section className="space-y-1">
          <div className="py-4">
            <YouTubeLatest />
          </div>
        </motion.section>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <motion.section className="mt-4">
          <FeaturedProjects />
        </motion.section>
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <motion.section className="mt-4">
          <div>
            <SpotifyPlaying showTabs={false} />
          </div>
        </motion.section>
      </FadeInSection>
    </div>
  );
};

export default Home; 
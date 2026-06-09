import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PhotoGallery } from '../components/PhotoGallery';
import { AboutSection } from '../components/AboutSection';
import { SEO } from '../components/SEO';
import { FadeInSection } from '../utils/FadeInSection';

const ABOUT_DESCRIPTION = 'Learn about Sourav Kumar — a software engineer, AI developer, and full-stack developer passionate about building innovative web applications with React, TypeScript, Node.js, and AI.';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      <SEO
        title="About"
        description={ABOUT_DESCRIPTION}
        keywords="Sourav Kumar about, software engineer India, AI developer portfolio, full stack developer skills, React developer experience"
        ogUrl="https://sourav.website/about"
        canonicalUrl="https://sourav.website/about"
      />

      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          About
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          Who I am.
        </motion.p>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <PhotoGallery isMobile={isMobile} />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <AboutSection />
      </FadeInSection>
    </div>
  );
};

export default About; 
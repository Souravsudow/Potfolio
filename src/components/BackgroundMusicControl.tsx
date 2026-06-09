import { useBackgroundMusic } from '../context/BackgroundMusicContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const BackgroundMusicControl = () => {
  const { isPlaying, toggle } = useBackgroundMusic();
  const { isDarkMode } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 2 }}
      onClick={toggle}
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 ${
        isDarkMode
          ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
          : 'bg-black/5 text-gray-900 hover:bg-black/10 border border-black/10'
      }`}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.79-.217-2.79-1.643V5.653z" clipRule="evenodd" />
        </svg>
      )}
    </motion.button>
  );
};

export default BackgroundMusicControl;

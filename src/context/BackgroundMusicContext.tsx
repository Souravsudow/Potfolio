import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface BackgroundMusicContextType {
  isPlaying: boolean;
  isBlocked: boolean;
  toggle: () => void;
}

const BackgroundMusicContext = createContext<BackgroundMusicContextType>({
  isPlaying: false,
  isBlocked: false,
  toggle: () => {},
});

export const BackgroundMusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  // Attempt autoplay on mount
  useEffect(() => {
    const audio = new Audio('/music/magnific-a-special-morning.mp3');
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    // Check localStorage for previous preference
    const stored = localStorage.getItem('portfolio_music_enabled');
    if (stored === 'false') {
      setIsPlaying(false);
      return;
    }

    // Try to autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser
          setIsBlocked(true);
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem('portfolio_music_enabled', 'false');
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsBlocked(false);
          localStorage.setItem('portfolio_music_enabled', 'true');
        })
        .catch(() => {
          setIsBlocked(true);
        });
    }
  }, [isPlaying]);

  return (
    <BackgroundMusicContext.Provider value={{ isPlaying, isBlocked, toggle }}>
      {children}
    </BackgroundMusicContext.Provider>
  );
};

export const useBackgroundMusic = () => useContext(BackgroundMusicContext);

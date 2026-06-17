import { useTheme } from '../context/ThemeContext';
import { PixelTrail } from './ui/pixel-trail';
import { GooeyFilter } from './ui/gooey-filter';
import { useScreenSize } from '../hooks/use-screen-size';
import BackgroundMusicControl from './BackgroundMusicControl';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { currentTheme, isDarkMode } = useTheme();
  const screenSize = useScreenSize();

  const pixelSize = screenSize.lessThan('md') ? 24 : 32;

  return (
    <div
      className="min-h-screen transition-colors duration-200 relative"
      style={{ backgroundColor: currentTheme.bg.primary }}
    >
      {/* Background effect */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <GooeyFilter id="gooey-filter-pixel-trail" strength={5} />
        <div
          className="absolute inset-0"
          style={{ filter: 'url(#gooey-filter-pixel-trail)' }}
        >
          <PixelTrail
            pixelSize={pixelSize}
            fadeDuration={800}
            delay={0}
            pixelClassName={isDarkMode ? 'bg-white/60' : 'bg-black/30'}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Background Music Control */}
      <BackgroundMusicControl />

    </div>
  );
};

import { useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import confettiData from '../assets/confetti.json';

interface ConfettiOverlayProps {
  show: boolean;
  onComplete?: () => void;
}

const ConfettiOverlay = ({ show, onComplete }: ConfettiOverlayProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (show && lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-xl">
      <Lottie
        lottieRef={lottieRef}
        animationData={confettiData}
        loop={false}
        autoplay={false}
        className="w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4"
        onComplete={() => {
          onComplete?.();
        }}
      />
    </div>
  );
};

export default ConfettiOverlay;

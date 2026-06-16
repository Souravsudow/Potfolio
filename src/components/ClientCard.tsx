import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Portal } from '../utils/Portal';

interface ClientCardProps {
  client: {
    name: string;
    description: string;
    websiteUrl: string;
    previewImage: string;
  };
}

export const ClientCard = ({ client }: ClientCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const showPreview = () => {
    setIsHovering(true);
    document.addEventListener('mousemove', handleMouseMove as any);
  };

  const hidePreview = () => {
    setIsHovering(false);
    document.removeEventListener('mousemove', handleMouseMove as any);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, []);

  return (
    <div className="relative overflow-visible">
      <motion.a
        href={client.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group py-2"
        whileHover={{ scale: 1.05 }}
        style={{ transformOrigin: 'left' }}
        onMouseEnter={showPreview}
        onMouseLeave={hidePreview}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {client.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {client.description}
            </p>
          </div>
          <span className="text-xs text-blue-500 dark:text-blue-400 font-medium mt-2 sm:mt-0 shrink-0">
            Visit site →
          </span>
        </div>
      </motion.a>

      {isHovering && (
        <Portal>
          <div
            className="fixed pointer-events-none"
            style={{
              position: 'fixed',
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -120%)',
              width: '200px',
              height: '120px',
              zIndex: 9999,
            }}
          >
            <img
              src={client.previewImage}
              alt={`Preview of ${client.name}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              draggable="false"
            />
          </div>
        </Portal>
      )}
    </div>
  );
};

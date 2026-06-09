import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Sourav AI | ${title}` : 'Sourav AI';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 
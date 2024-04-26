import { useState, useEffect } from 'react';

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const useScreenSize = (): ScreenSize => {
    const [screenSize, setScreenSize] = useState<ScreenSize>('xl');
  
    useEffect(() => {
      function getScreenSize(): ScreenSize {
        if (window.innerWidth < 480) return 'xs';
        if (window.innerWidth < 576) return 'sm';
        if (window.innerWidth < 768) return 'md';
        if (window.innerWidth < 992) return 'lg';
        if (window.innerWidth < 1200) return 'xl';
        return '2xl';
      }
  
      function handleResize() {
        setScreenSize(getScreenSize());
      }
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return screenSize;
  };
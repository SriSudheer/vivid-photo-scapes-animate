
import { useEffect } from 'react';

/**
 * Hook to prevent users from downloading or taking screenshots of images
 */
export const useImageProtection = () => {
  useEffect(() => {
    // Disable context menu (right-click)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('.protected-image')) {
        e.preventDefault();
        return false;
      }
    };

    // Disable keyboard shortcuts for saving and printing
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S, Ctrl+P, Command+S, Command+P, PrtScn
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'p')) ||
        (e.metaKey && (e.key === 's' || e.key === 'p')) ||
        e.key === 'PrintScreen'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable drag and drop for images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('.protected-image')) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Apply CSS to disable text selection on images
    const style = document.createElement('style');
    style.textContent = `
      img, .protected-image { 
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.head.removeChild(style);
    };
  }, []);
};

export default useImageProtection;

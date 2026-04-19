import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import clsx from 'clsx';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        'fixed bottom-8 right-8 z-50 p-3 rounded-full bg-emerald-500 text-slate-900 shadow-lg hover:bg-emerald-600 transition-all duration-300',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      )}
      aria-label="Go to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
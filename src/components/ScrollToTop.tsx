import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const history = useNavigate();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default ScrollToTop;

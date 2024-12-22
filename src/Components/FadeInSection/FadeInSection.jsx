import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver';
function FadeInSection({ children }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        hasAnimated ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FadeInSection;
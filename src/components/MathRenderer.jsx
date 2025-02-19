import 'katex/dist/katex.min.css';
import katex from 'katex';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const MathRenderer = ({ math, display = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(math, containerRef.current, {
        displayMode: display, // true for block math, false for inline
        throwOnError: false, // prevents KaTeX from throwing errors
        output: 'html'
      });
    }
  }, [math, display]);

  return <span ref={containerRef} />;
};

MathRenderer.propTypes = {
  math: PropTypes.string.isRequired,
  display: PropTypes.bool
};

export default MathRenderer; 
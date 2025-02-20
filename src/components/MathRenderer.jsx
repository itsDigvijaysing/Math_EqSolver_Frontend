import 'katex/dist/katex.min.css';
import katex from 'katex';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const MathRenderer = ({ math, display = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const isBlockMath = math.startsWith("$$") && math.endsWith("$$");

    containerRef.current.innerHTML = katex.renderToString(
      math.replace(/\$\$/g, ''), 
      {
        displayMode: isBlockMath,
        throwOnError: false
      }
    );
    }
  }, [math, display]);

  return <span ref={containerRef} />;
};

MathRenderer.propTypes = {
  math: PropTypes.string.isRequired,
  display: PropTypes.bool
};

export default MathRenderer; 
import React, { useState } from 'react';
import MathRenderer from './MathRenderer';
import 'katex/dist/katex.min.css';

const UploadImage = () => {
  const [data, setData] = useState({
    text: '',
    equation: ''
  });

  return (
    <div>
      {/* ... existing image upload UI ... */}
      
      {/* Add the math rendering section */}
      {data.text && (
        <div className="math-content">
          <p>
            {data.text}
            <MathRenderer math={data.equation} display={true} />
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
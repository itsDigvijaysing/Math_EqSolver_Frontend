import { useState, useRef } from 'react';
import axios from 'axios';
import './UploadImage.css';
import 'katex/dist/katex.min.css';
import MathRenderer from './MathRenderer';

const UploadImage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [extractedEquation, setExtractedEquation] = useState('');
  const [extractedEquation, setExtractedEquation] = useState("ax^2 + bx + c = 0");
  const [solution, setSolution] = useState([
    "\\text{Given quadratic equation: } ax^2 + bx + c = 0",
    "\\text{Using the quadratic formula: } x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    "\\text{Step 1: Compute the discriminant } D = b^2 - 4ac",
    "D = b^2 - 4ac",
    "\\text{Step 2: Compute the roots}",
    "\\text{If } D > 0, \\text{ the roots are real and distinct: }",
    "x_1 = \\frac{-b + \\sqrt{D}}{2a}, \\quad x_2 = \\frac{-b - \\sqrt{D}}{2a}",
    "\\text{If } D = 0, \\text{ the roots are real and equal: }",
    "x = \\frac{-b}{2a}",
    "\\text{If } D < 0, \\text{ the roots are complex: }",
    "x_1 = \\frac{-b + i\\sqrt{|D|}}{2a}, \\quad x_2 = \\frac{-b - i\\sqrt{|D|}}{2a}"
  ]);
  


  // const [solution, setSolution] = useState('');
  const fileInputRef = useRef(null);

  // ... existing drag and drop handlers remain the same ...
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFiles(files[0]);
    }
  };

  const handleFiles = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
      uploadImage(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });


      setExtractedEquation(response.data.equation);
      setSolution(
        Array.isArray(response.data.solution)
          ? response.data.solution.map(line => line.trim())
          : [response.data.solution.trim()]
      );
      

    } catch (error) {
      console.error('Error uploading image:', error);
      setSolution('Error processing image.');
    }
  };

  return (
    <div className="upload-section" id="imageupload">
      <div className="container">
        <div 
          className={`upload-box ${isDragging ? 'dragging' : ''}`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <h3>Drag & Drop Your Image</h3>
          <p className="upload-text">or click to browse files</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleFiles(e.target.files[0])}
            accept="image/*"
            className="file-input"
          />
          <button className="choose-file-btn" onClick={handleBrowseClick}>
            Choose File
          </button>
        </div>

        <div className="answer-box">
          <h3>Extracted Mathematical Equation</h3>
          {selectedImage && <img src={selectedImage} alt="Uploaded equation" className="preview-image" />}
          {extractedEquation && (
            <div className="equation-display" style={{ textAlign: "center" }}>
              <MathRenderer math={extractedEquation} display={true} />
            </div>
          )}

          <h3>Solution from Ollama</h3>
          {solution && (
            <div className="solution-display" style={{ textAlign: "center" }}>
              {Array.isArray(solution) ? (
                solution.map((line, index) => (
                  <div key={index} className="solution-line">
                    <MathRenderer math={line} display={true} />
                  </div>
                ))
              ) : (
                <MathRenderer math={solution} display={true} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
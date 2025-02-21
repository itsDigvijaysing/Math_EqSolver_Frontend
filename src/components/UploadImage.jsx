import { useState, useRef } from 'react';
import axios from 'axios';
import './UploadImage.css';
import 'katex/dist/katex.min.css';
import MathRenderer from './MathRenderer';

const UploadImage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedEquation, setExtractedEquation] = useState("");
  const [solution, setSolution] = useState([]);
  const [textInput, setTextInput] = useState("");
  const fileInputRef = useRef(null);

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
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const uploadImage = async () => {
    if (!selectedImage) return;
    
    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setExtractedEquation(response.data.equation);
      setSolution(response.data.solution || []);
    } catch (error) {
      console.error('Error uploading image:', error);
      setSolution(['Error processing image.']);
    }
  };

  const handleTextRequest = async () => {
    if (!textInput.trim()) return;

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/upload/', { text: textInput }, {
            headers: { 'Content-Type': 'application/json' },
        });

        setExtractedEquation(response.data.equation);
        setSolution(response.data.solution || []);
    } catch (error) {
        console.error('Error processing text:', error);
        setSolution(['Error processing input.']);
    }
  };


  return (
    <div className="upload-section" id="imageupload">
      <div className="container">
        <div className="input-container">
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
          <div className="or-container">OR</div>
          <textarea 
            placeholder="Enter mathematical expression or question" 
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)} 
            className="text-input-box"
          />
          <button className="submit-btn" onClick={handleTextRequest}>
            Submit Text
          </button>
        </div>

        <div className="answer-box">
          {selectedImage && (
            <>
              <h3>Uploaded Image</h3>
              <img src={selectedImage} alt="Uploaded equation" className="preview-image" />
              <button className="solve-btn" onClick={uploadImage}>Solve</button>
            </>
          )}
          
          {extractedEquation && (
            <>
              <h3>Extracted Equation</h3>
              <div className="equation-display" style={{ textAlign: "center" }}>
                <MathRenderer math={extractedEquation} display={true} />
              </div>
            </>
          )}
          
          {solution.length > 0 && (
            <>
              <h3>Solution</h3>
              <div className="solution-display" style={{ textAlign: "center" }}>
                {solution.map((line, index) => (
                  <div key={index} className="solution-line">
                    <MathRenderer math={line} display={true} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

import { useState, useRef } from 'react';
import axios from 'axios';
import './UploadImage.css';

const UploadImage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedEquation, setExtractedEquation] = useState('');
  const [solution, setSolution] = useState(''); // Store Ollama output
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
      setSolution(response.data.solution); // Set Ollama solution

    } catch (error) {
      console.error('Error uploading image:', error);
      setSolution('Error processing image.');
    }
  };

  return (
    <div className="upload-section">
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
          <p className="extracted-equation">{extractedEquation || 'Upload an image to see the equation'}</p>

          <h3>Solution from Ollama</h3>
          <p className="ollama-output">{solution || 'Waiting for solution...'}</p>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

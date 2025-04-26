"use client";

import { ChangeEvent } from "react";
import { Word } from "../types";
import { useState } from "react";

interface WordUploaderProps {
  onUpload: (words: Word[]) => void;
}


export default function WordUploader({ onUpload }: WordUploaderProps) {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(prev => !prev);
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: showImage ? '#dc3545' : '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease'
  };
  const imageStyle = {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };


  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    const lines = text.split("\n").filter(Boolean);

    const words: Word[] = lines.map((line, index) => {
      const [term, ...definitionParts] = line.trim().split(" ");
      const definition = definitionParts.join(" ");
      return {
        id: `${index}-${term}`,
        term,
        definition,
      };
    });

    onUpload(words);
  };

  return (
    <div className="mb-4">
      <h2>Upload a txt file with word separated by a space, and new word in the next line</h2>
      <button style={buttonStyle} onClick={handleClick}>
        {showImage ? 'Hide sample file' : 'Show sample file'}
      </button>
      {showImage && (
        <img src='../../assets/sample.png' alt="Sample" style={imageStyle}/>
      )}
      <label className="block mb-2 font-medium">Upload Word List (.txt):</label>
      <input
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        className="border border-gray-300 p-2 rounded w-full"
      />
    </div>
  );
}

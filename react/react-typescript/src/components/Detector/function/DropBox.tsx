import { DragEvent, useState, useRef } from "react";
import '../../style.css'

export function FileDrop() {
  const [isOver, setIsOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragIsOver, setDragIsOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Define the event handlers
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(true);
  };
 
  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
  };
 
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
    setIsLoading(true);
    
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    
    droppedFiles.forEach((file) => {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const src = reader.result;
        if (typeof src === "string") {
          setImageSrc(src);
          setIsLoading(false);
        }
      };
      
      reader.onerror = () => {
        console.error("There was an issue reading the file.");
        setIsLoading(false);
      };
      
      reader.readAsDataURL(file);
    });
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    console.log(selectedFiles);
  };
  
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleFileClick}
      className={`imageBox ${dragIsOver ? "drag-over" : ""}`}
    >
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : imageSrc ? (
        <img src={imageSrc} alt="Selected" style={{ maxWidth: "100%", maxHeight: "100%" }} />
      ) : (
        "Drag and drop an image here"
      )}

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
        multiple
        accept="image/*"
      />
    </div>
  );
}

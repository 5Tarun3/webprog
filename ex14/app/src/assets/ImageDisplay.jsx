import React from 'react';
import srcImage from '../Images/CSKLOGO.png';
function ImageDisplay() {
    return (
        <div>
            <h2>Image from public/Images folder</h2>
            <img src="/Images/MILOGO.png" alt="Public Folder" width="300" />
            <h2>Image from src/Images folder</h2>
            <img src={srcImage} alt="Src Folder" width="300" />
        </div>
    );
}
export default ImageDisplay;
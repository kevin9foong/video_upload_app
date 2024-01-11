"use client";

import React, { useState } from 'react'

export default function UploadBox({handleNext}: {handleNext: Function}) {
    // .name for file name, .size for file size, .type for file type, .data for file data
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        console.log(!file ? "No file selected" : file.name);
        setSelectedFile(file || null);
    }

    return (
        <>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <p>Selected file: {selectedFile?.name}</p>
            <button onClick={() => handleNext(selectedFile)} className="btn btn-primary">Next</button>
        </>
    )
}
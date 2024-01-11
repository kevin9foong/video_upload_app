"use client";

import React, { useState } from 'react'

export default function UploadBox({setStepNumber, onSubmit}: {setStepNumber: Function, onSubmit: Function}) {
    // .name for file name, .size for file size, .type for file type, .data for file data
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        setSelectedFile(file || null);
    }

    const handleNextButtonClick = () => {
        onSubmit(selectedFile);
        setStepNumber(1);
    }

    return (
        <>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <p>Selected file: {selectedFile?.name}</p>
            <button onClick={handleNextButtonClick} className="btn btn-primary">Next</button>
        </>
    )
}
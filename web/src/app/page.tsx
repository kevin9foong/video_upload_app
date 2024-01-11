"use client";

import React, { useState } from "react";
import axios from "axios";

import UploadBoxPage from "./components/upload-box-page";
import VideoMetadataFormPage from "./components/video-meta-page";
import TermsAndConditionsPage from "./components/tc-page";
import UploadProgressPage from "./components/upload-progress-page";

export default function Page() {
    const [stepNumber, setStepNumber] = useState<0|1|2|3>(0);

    const [fileData, setSelectedFileData] = useState<File | null>(null);
    const [videoTitle, setVideoTitle] = useState<string>("");
    const [startDateTime, setStartDateTime] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadStatus, setUploadStatus] = useState<string>("pending");

    const onVideoMetadataFormSubmit = () => {
        setStepNumber(2);
    }

    const handleUploadSubmit = () => {
        uploadFile();
        setStepNumber(3);
    }

    async function uploadFile() {
        if (fileData === null) {
            setUploadStatus("failure");
            return;
        }

        const config = {
            onUploadProgress: (progressEvent: any) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setUploadProgress(percentCompleted);
            },
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const formData = new FormData();

        formData.set("file", fileData);
        formData.set("title", videoTitle);
        formData.set("startDateTime", startDateTime);
        formData.set("location", location);

        axios.post("http://localhost:3001/upload", formData, config
        ).then((response) => {
            console.log(response);
            setUploadStatus("success");
        }).catch((error) => {
            console.log(error);
            setUploadStatus("failure");
        });
    }

    const resetState = () => {
        setSelectedFileData(null);
        setVideoTitle("");
        setStartDateTime("");
        setLocation("");
        setUploadProgress(0);
        setUploadStatus("pending");
        setStepNumber(0);
    }

    return (
        <>
            <p> Upload your video </p>
            {stepNumber === 0 && (<UploadBoxPage
                handleNext={(fileData: File) => {
                    setSelectedFileData(fileData);
                    setStepNumber(1);
                }}/>)}
            {stepNumber === 1 && (<VideoMetadataFormPage
                videoTitle={videoTitle}
                startDateTime={startDateTime}
                location={location}
                setVideoTitle={setVideoTitle}
                setStartDateTime={setStartDateTime}
                setLocation={setLocation}
                handleFormSubmit={onVideoMetadataFormSubmit}
                />)}
            {stepNumber === 2 && (<TermsAndConditionsPage
                handleFileUpload={handleUploadSubmit}
                handleBack={() => setStepNumber(1)}/>)}
            {stepNumber === 3 && (<UploadProgressPage
                uploadProgress={uploadProgress}
                uploadStatus={uploadStatus}
                handleDone={() => {
                    resetState();
                }}/>)}
        </>
    )
}
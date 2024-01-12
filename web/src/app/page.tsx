"use client";

import React, { useState } from "react";
import axios from "axios";

import UploadBoxPage from "./components/upload-box-page";
import VideoMetadataFormPage from "./components/video-meta-page";
import TermsAndConditionsPage from "./components/tc-page";
import UploadProgressPage from "./components/upload-progress-page";

export default function Page() {
    const [stepNumber, setStepNumber] = useState<0|1|2|3>(0);

    const [file, setFile] = useState<File | null>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [videoTitle, setVideoTitle] = useState<string>("");
    const [startDateTime, setStartDateTime] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadStatus, setUploadStatus] = useState<string>("pending");

    const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);

    const onVideoMetadataFormSubmit = () => {
        setStepNumber(2);
    }

    const handleUploadSubmit = () => {
        uploadFile();
        setStepNumber(3);
    }

    async function uploadFile() {
        if (file === null) {
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

        formData.set("file", file);
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
        setFile(null);
        setVideoTitle("");
        setStartDateTime("");
        setLocation("");
        setUploadProgress(0);
        setUploadStatus("pending");
        setStepNumber(0);
        setIsCheckboxChecked(false);
        setImgSrc(null);
    }

    return (
        <div className="d-flex justify-content-center align-">
            <div className=""
                style={{
                marginBottom: "10%",
                borderRadius: "20px",
                width: "50%",
                height: "50%",
                backgroundColor: "rgba(132, 163, 227, 0.5)",
                padding: "10%"}}>
                <p className="text-center"
                    style={{fontWeight: "bolder"}}> Upload your video </p>
                {stepNumber === 0 && (<UploadBoxPage
                    imgSrc={imgSrc}
                    setImgSrc={setImgSrc}
                    file={file}
                    setFile={setFile}
                    handleNext={() => {
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
                    handleBack={() => setStepNumber(0)}
                    />)}
                {stepNumber === 2 && (<TermsAndConditionsPage
                    isCheckboxChecked={isCheckboxChecked}
                    setIsCheckboxChecked={setIsCheckboxChecked}
                    handleFileUpload={handleUploadSubmit}
                    handleBack={() => setStepNumber(1)}/>)}
                {stepNumber === 3 && (<UploadProgressPage
                    uploadProgress={uploadProgress}
                    uploadStatus={uploadStatus}
                    handleDone={() => {
                        resetState();
                    }}/>)}
            </div>
        </div>
    )
}
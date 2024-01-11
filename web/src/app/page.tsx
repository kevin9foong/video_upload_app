"use client";

import React, { useState } from "react";

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

    const onVideoMetadataFormSubmit = (videoTitle:string, startDateTime:string, location:string) => {
        setVideoTitle(videoTitle);
        setStartDateTime(startDateTime);
        setLocation(location);

        uploadFile();
    }

    async function uploadFile() {
        const request = new XMLHttpRequest();
        request.open("POST", "http://localhost:5000/api/upload");
        request.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                setUploadProgress(Math.round(percentComplete * 100));
                console.log('upload progress: ', uploadProgress, '%');
            }
        });
        request.addEventListener("load", (event) => {
            console.log('upload complete');
            if (request.status === 200) {
                setUploadStatus("success");
            } else {
                setUploadStatus("failure");
            }
        });
        request.send(fileData)
    }


    return (
        <>
            <p> Upload your video </p>
            {stepNumber === 0 && (<UploadBoxPage
                onSubmit={(fileData: File) => setSelectedFileData(fileData)}
                setStepNumber={setStepNumber}/>)}
            {stepNumber === 1 && (<VideoMetadataFormPage
                videoTitleVal={videoTitle}
                startDateTimeVal={startDateTime}
                locationVal={location}
                onFormSubmit={onVideoMetadataFormSubmit} setStepNumber={setStepNumber}/>)}
            {stepNumber === 2 && (<TermsAndConditionsPage setStepNumber={setStepNumber}/>)}
            {stepNumber === 3 && (<UploadProgressPage
                uploadProgress={uploadProgress}
                uploadStatus={uploadStatus}
                setStepNumber={setStepNumber}/>)}
        </>
    )
}
"use client";
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from 'dayjs';
import React, { useState, useEffect } from "react";

export default function VideoMetadataForm({videoTitle, startDateTime, location,
    setVideoTitle, setStartDateTime, setLocation, handleFormSubmit, handleBack}: {
    videoTitle: string, startDateTime: Dayjs | null, location:string, handleFormSubmit: Function, handleBack: Function
    setVideoTitle: Function, setStartDateTime: Function, setLocation: Function
} ) {
    const [videoTitleValidationMessage, setVideoTitleValidationMessage] = useState<string | null>(null);
    const [startDateTimeValidationMessage, setStartDateTimeValidationMessage] = useState<string | null>(null);

    const validateVideoTitle = (videoTitle: string): string | null => {
        if (!videoTitle || videoTitle.length <= 0) {
            return "Video title cannot be empty"
        } else {
            return null;
        }
    }

    const validateStartDateTime = (startDateTime: Dayjs | null): string | null => {
        if (!startDateTime) {
            return "Start date time cannot be empty";
        } else if (!dayjs(startDateTime).isValid()) {
            return "Start date time must be a valid date time";
        } else {
            return null;
        }
    }

    useEffect(() => {
        setVideoTitleValidationMessage(validateVideoTitle(videoTitle));
        setStartDateTimeValidationMessage(validateStartDateTime(startDateTime));
    }, [videoTitle, startDateTime]);

    return (
        <form>
            <div className="form-group" style={{margin: 3}}>
                <label htmlFor="videoTitle" style={{fontWeight: 500}}>Video Title</label>
                <input id="videoTitle" type="text" className="form-control" value={videoTitle}
                placeholder="Video title" onChange={event => setVideoTitle(event.target.value)}/>
                <div className="text-danger">
                    {videoTitleValidationMessage ?? <small>{videoTitleValidationMessage}</small>}
                </div>
            </div>
            <div className="form-row">
                <div className="form-group" style={{margin: 3}}>
                    <label htmlFor="startDateTime" style={{fontWeight: 500}}>Video Start Date Time</label>
                    <div id="startDateTime" style={{backgroundColor: "white", borderRadius: 4}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                className='form-control'
                                value={startDateTime}
                                onChange={val => setStartDateTime(val)} />
                        </LocalizationProvider>
                    </div>
                    <div className="text-danger">
                        {startDateTimeValidationMessage ?? <small>{startDateTimeValidationMessage}</small>}
                    </div>
                </div>
                <div className="form-group" style={{margin: 3}}>
                    <label htmlFor="location" style={{fontWeight: 500}}>Captured Location</label>
                    <input id="location" type="text" className="form-control" value={location}
                    placeholder="Captured location" onChange={event => setLocation(event.target.value)}/>
                </div>
            </div>
            <div className="d-flex justify-content-between" style={{marginTop: 10}}>
                <button onClick={e => {e.preventDefault(); handleBack()}} className="btn btn-secondary">Back</button>
                <button onClick={e => {
                    e.preventDefault();

                    if (!videoTitleValidationMessage && !startDateTimeValidationMessage) {
                        handleFormSubmit();
                    }
                }} className="btn btn-primary"
                    disabled={!(!videoTitleValidationMessage && !startDateTimeValidationMessage)}>
                    Next
                </button>
            </div>
        </form>
    )
}
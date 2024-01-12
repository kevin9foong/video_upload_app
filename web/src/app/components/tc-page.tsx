"use client";
import React, { useState } from "react"

export default function TermsAndConditionsPage({isCheckboxChecked, setIsCheckboxChecked, handleBack, handleFileUpload}: {
    isCheckboxChecked: boolean, setIsCheckboxChecked: Function,
    handleBack: Function, handleFileUpload: Function}) {

    return <>
        <p style={{textDecoration: "underline"}}> Terms and Conditions </p>
        <p>
            The terms and conditions are that there are no terms and conditions. Please enjoy using the app.
        </p>
        <div className="form-check" style={{margin: 5}}>
            <input checked={isCheckboxChecked} onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                id="checkbox" className="form-check-input" type="checkbox" aria-label="Checkbox to agree to terms and conditions"/>
            <label className="form-check-label" htmlFor="checkbox">I agree to the terms and conditions</label>
        </div>
        <div className="d-flex justify-content-between" style={{margin: 5, marginTop: 10}}>
            <button onClick={() => handleBack()} className="btn btn-primary">Back</button>
            <button disabled={!isCheckboxChecked} onClick={() => {if (isCheckboxChecked) {handleFileUpload()}}} className="btn btn-primary">Upload</button>
        </div>
    </>
}
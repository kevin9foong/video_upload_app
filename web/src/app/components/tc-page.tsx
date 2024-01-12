export default function TermsAndConditionsPage({handleBack, handleFileUpload}: {handleBack: Function, handleFileUpload: Function}) {
    return <>
        <p> Terms and Conditions </p>
        <p>
            The terms and conditions are that there are no terms and conditions. Please enjoy using the app.
        </p>
        <button onClick={() => handleBack()} className="btn btn-primary">Back</button>
        <button onClick={() => handleFileUpload()} className="btn btn-primary">Upload</button>
    </>
}
export default function UploadProgress({setStepNumber, uploadProgress, uploadStatus}:
    {setStepNumber: (stepNumber: 0|1|2|3) => void, uploadProgress: number, uploadStatus: string}) {

    return (
        <>
            <p>Upload progress: {uploadProgress}</p>
            <p>Upload status: {uploadStatus}</p>
        </>
    )
}
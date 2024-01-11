export default function UploadProgress({handleDone, uploadProgress, uploadStatus}:
    {handleDone: Function, uploadProgress: number, uploadStatus: string}) {

    return (
        <>
            <p>Upload progress: {uploadProgress}</p>
            <p>Upload status: {uploadStatus}</p>
            {(uploadStatus === "failure" || uploadStatus === "success")
                && <button onClick={() => handleDone()} className="btn btn-primary">Done</button>}
        </>
    )
}
export default function UploadProgress({handleDone, uploadProgress, uploadStatus}:
    {handleDone: Function, uploadProgress: number, uploadStatus: string}) {

    return (
        <div className="d-flex flex-column">
            <div className="progress" style={{margin: 10}}>
                <div className="bg-success progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{"width": `${uploadProgress}%`}}
                    aria-valuenow={uploadProgress}
                    aria-valuemin={0} aria-valuemax={100}></div>
            </div>
            <div className="d-flex flex-column align-items-center" style={{marginBottom: 10}}>
                <div>
                    <span style={{fontWeight: 500}}>Upload progress:</span>
                    {uploadProgress}%
                </div>
                <div>
                    <span><span style={{fontWeight: 500}}>Upload status:</span>{uploadStatus}</span>
                </div>
            </div>
            <div className="d-flex flex-row-reverse">
                {(uploadStatus === "failure" || uploadStatus === "success")
                    && <button onClick={() => handleDone()} className="btn btn-primary">
                        Done</button>}
            </div>
        </div>
    )
}
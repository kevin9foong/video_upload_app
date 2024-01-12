/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function UploadBox({imgSrc, setImgSrc, file, setFile, handleNext}: {
    imgSrc: string | null,
    setImgSrc: Function,
    file: File | null,
    setFile: Function, handleNext: Function}) {
    // .name for file name, .size for file size, .type for file type, .data for file data

    const extractImageFromVideoFile = (file: File) => {
        const canvas = document.createElement("canvas");
        const videoElement = document.createElement("video");

        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.src = URL.createObjectURL(file);

        videoElement.onloadeddata = () => {
            let context = canvas.getContext("2d");

            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            videoElement.pause();

            const dataUrl = canvas.toDataURL("image/png");
            setImgSrc(dataUrl);
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        // console.log(!file ? "No file selected" : file.name);
        setFile(file || null);

        if (file) {
            extractImageFromVideoFile(file);
        }
    }

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-column align-items-center'>
                {imgSrc && <img className="img-thumbnail" style={{maxHeight: "50%", maxWidth: "50%", margin: 5}}
                    src={imgSrc} alt="video thumbnail" />}
                <div className="input-group" style={{margin: 5}}>
                    <input className="form-control"
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange} />
                </div>
                <p style={{margin: 5}}>
                    <span style={{fontWeight: "bold"}}>Selected file</span>: {file?.name}</p>
            </div>
            <div style={{width: "100%", margin: 5}} className="d-flex flex-row-reverse align-items-end">
                <div className='d-flex'>
                    <button disabled={!file} onClick={() => handleNext()} className="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
    )
}
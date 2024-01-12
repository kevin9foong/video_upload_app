export default function UploadBox({file, setFile, handleNext}: {file: File | null,
    setFile: Function, handleNext: Function}) {
    // .name for file name, .size for file size, .type for file type, .data for file data

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        // console.log(!file ? "No file selected" : file.name);
        setFile(file || null);
    }

    return (
        <>
            <input type="file" accept="video/*" onClick={() => console.log("clicked")} onChange={handleFileChange} />
            <p><text style={{fontWeight: "bold"}}>Selected file</text>: {file?.name}</p>
            <button disabled={!file} onClick={() => handleNext()} className="btn btn-primary">Next</button>
        </>
    )
}
"use client";

export default function VideoMetadataForm({videoTitle, startDateTime, location,
    setVideoTitle, setStartDateTime, setLocation, handleFormSubmit, handleBack}: {
    videoTitle: string, startDateTime: string, location:string, handleFormSubmit: Function, handleBack: Function
    setVideoTitle: Function, setStartDateTime: Function, setLocation: Function
} ) {
    return (
        <form>
                {/* <div className="form-row"> */}
                    <div className="form-group">
                        <label htmlFor="videoTitle">Video Title</label>
                        <input id="videoTitle" type="text" className="form-control" value={videoTitle}
                        placeholder="Video title" onChange={event => setVideoTitle(event.target.value)}/>
                    </div>
                {/* </div> */}
                <div className="form-row">
                    <div className="form-group col-6">
                        <label htmlFor="startDateTime">Video Start Date Time</label>
                        <input id="startDateTime" type="text" className="form-control" value={startDateTime}
                        placeholder="Video start date time" onChange={event => setStartDateTime(event.target.value)}/>
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="location">Captured Location</label>
                        <input id="location" type="text" className="form-control" value={location}
                        placeholder="Captured location" onChange={event => setLocation(event.target.value)}/>
                    </div>
                </div>
                <button onClick={e => {e.preventDefault(); handleBack()}} className="btn btn-secondary">Back</button>
                <button onClick={e => {e.preventDefault(); handleFormSubmit()}} className="btn btn-primary">Next</button>
        </form>
    )
}
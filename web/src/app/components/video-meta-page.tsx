"use client";

export default function VideoMetadataForm({videoTitle, startDateTime, location,
    setVideoTitle, setStartDateTime, setLocation, handleFormSubmit}: {
    videoTitle: string, startDateTime: string, location:string, handleFormSubmit: Function,
    setVideoTitle: Function, setStartDateTime: Function, setLocation: Function
} ) {
    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <label htmlFor="videoTitle">Video Title</label>
                    <input id="videoTitle" type="text" className="form-control" value={videoTitle}
                    placeholder="Video title" onChange={event => setVideoTitle(event.target.value)}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="startDateTime">Video Start Date Time</label>
                    <input id="startDateTime" type="text" className="form-control" value={startDateTime}
                    placeholder="Video start date time" onChange={event => setStartDateTime(event.target.value)}/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="location">Captured Location</label>
                    <input id="location" type="text" className="form-control" value={location}
                    placeholder="Captured location" onChange={event => setLocation(event.target.value)}/>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button onClick={e => {e.preventDefault(); handleFormSubmit()}} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
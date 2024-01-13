const dayjs = require('dayjs');
const Video = require('../models/Video');

exports.postAddVideo = (req, res, _next) => {
    const title = req.body.title;
    const startDateTime = req.body.startDateTime;
    const location = req.body.location;
    const destination = req.file.destination;
    const videoSize = req.file.size;
    const filename = req.file.filename;

    // validate the metadata fields
    // check if startDateTime is a valid date time
    if (!title) {
        return res.status(400).json({
            message: 'Invalid metadata: title is missing.'
        });
    } else if (!startDateTime || !dayjs(startDateTime).isValid()) {
        return res.status(400).json({
            message: 'Invalid metadata: startDateTime is missing or has incorrect format.'
        });
    }

    return Video.create({
        title: title,
        startDateTime: startDateTime,
        location: location,
        destination: destination,
        videoSize: videoSize,
        originalName: filename
    }).then(result => {
        res.status(201).json({
            message: 'Video uploaded successfully.',
            video: result
        });
    }).catch(err => {
        res.status(500).json({
            message: 'Failed to upload video.',
            error: err
        });
        console.log(err);
    });
};
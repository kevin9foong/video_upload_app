const Video = require('../models/Video');

exports.postAddVideo = (req, res, _next) => {
    console.log(req.body);

    const title = req.body.title;
    const startDateTime = req.body.startDateTime;
    const location = req.body.location;
    const destination = req.file.destination;
    const videoSize = req.file.size;
    const filename = req.file.originalname;

    // TODO: perform input validation and error handling
    return Video.create({
        title: title,
        startDateTime: startDateTime,
        location: location,
        destination: destination,
        videoSize: videoSize,
        originalName: filename
    }).then(result => {
        res.status(201).json({
            message: 'Video created successfully!',
            video: result
        });
    }).catch(err => {
        res.status(500).json({
            message: 'Failed to create video!',
            error: err
        });
        console.log(err);
    });
};
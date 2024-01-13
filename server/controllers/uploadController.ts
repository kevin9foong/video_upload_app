import { Request, Response, NextFunction } from 'express';
import { VideoAttributes } from '../models/video';
const dayjs = require('dayjs');
const Video = require('../models/video');

type MulterExpressRequest = Request & {
    file: Express.Multer.File
}

exports.postAddVideo = (req: MulterExpressRequest, res: Response, _next: NextFunction) => {

    const videoInstance: VideoAttributes = {
        title: req.body.title,
        startDateTime: req.body.startDateTime,
        location: req.body.location,
        destination: req.file.destination,
        videoSize: req.file.size,
        originalName: req.file.filename
    }

    // validate the metadata fields
    // check if startDateTime is a valid date time
    if (!videoInstance.title) {
        return res.status(400).json({
            message: 'Invalid metadata: title is missing.'
        });
    } else if (!videoInstance.startDateTime || !dayjs(videoInstance.startDateTime).isValid()) {
        return res.status(400).json({
            message: 'Invalid metadata: startDateTime is missing or has incorrect format.'
        });
    }

    return Video.create(videoInstance)
    .then((result: any) => {
        res.status(201).json({
            message: 'Video uploaded successfully.',
            video: result
        });
    }).catch((err: Error) => {
        res.status(500).json({
            message: 'Failed to upload video.',
            error: err
        });
        console.log(err);
    });
};
import { Request, Response, NextFunction } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (_req: Request, _file: Express.Multer.File, cb: DestinationCallback) {
        cb(null, 'videos');
    },
    filename: function (_req: Request, file: Express.Multer.File, cb: FilenameCallback) {
        // handles duplicates by appending a timestamp
        cb(null, file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage}).single('file');

const uploadController = require('../controllers/uploadController');

router.post('/upload', upload, uploadController.postAddVideo);

module.exports = router;
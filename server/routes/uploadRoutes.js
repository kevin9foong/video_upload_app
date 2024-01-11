const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'videos');
    },
    filename: function (req, file, cb) {
        // handles duplicates by appending a timestamp
        cb(null, file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage}).single('file');

const uploadController = require('../controllers/uploadController');

router.post('/upload', upload, uploadController.postAddVideo);

module.exports = router;
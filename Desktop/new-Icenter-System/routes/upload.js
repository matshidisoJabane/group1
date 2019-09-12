/*
var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({ storage: storage }).single('upload');


router.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            message: 'Image uploading failed!'
        }
        
        res.json({
    
            success: true,
            message: 'Image uploaded!'
            
        }
        );
    })
});


module.exports = router;*/
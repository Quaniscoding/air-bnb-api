const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd());
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + "_" + file.originalname;
        cb(null, fileName);
    }
})
const upload = multer({ storage });


module.exports = {
    upload
}
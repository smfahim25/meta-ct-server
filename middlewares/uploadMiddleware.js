const multer = require('multer');
const path = require('path');

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Export the single file upload middleware
module.exports = upload.single('documents');

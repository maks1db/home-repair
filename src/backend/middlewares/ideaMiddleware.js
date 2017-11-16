
module.exports = (req, res, next) => {
    
    if (req.file && req.file.path) {
        req.body.url = req.file.path.replace('public', '');
    }
    next();
};
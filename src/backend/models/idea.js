let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const path = require('path');

const idea = new Schema({
    name: String,
    room: String,
    url: String,
    comment: String,
    rating: Number
},{versionKey: false});

idea.pre('save', function(next) {
    
    const p = path.join(__dirname, '../../../', this.picture);
    next();
    // const dimension = sizeOf(p);
    // const newFile = `${this.picture.split('.')[0]}-small.${dimension.type}`;

    // let res = ~~(dimension.width/1024);
    // if (res < 1) res = 1;

    // res = Math.max(res, 3);

    // resizeImg(fs.readFileSync(p), 
    //     {
    //         width: ~~(dimension.width/res), 
    //         height: ~~(dimension.height/res)
    //     })
    //     .then(buf => {
    //         fs.writeFileSync(newFile, buf);
    //         this.smallPicture = newFile;
    //         next();
    //     });  
});

idea.pre('update', function(next) {
    
    const p = path.join(__dirname, '../../../', this.picture);
    next();
    // const dimension = sizeOf(p);
    // const newFile = `${this.picture.split('.')[0]}-small.${dimension.type}`;

    // let res = ~~(dimension.width/1024);
    // if (res < 1) res = 1;

    // res = Math.max(res, 3);

    // resizeImg(fs.readFileSync(p), 
    //     {
    //         width: ~~(dimension.width/res), 
    //         height: ~~(dimension.height/res)
    //     })
    //     .then(buf => {
    //         fs.writeFileSync(newFile, buf);
    //         this.smallPicture = newFile;
    //         next();
    //     });  
});

module.exports = mongoose.model('idea', idea);
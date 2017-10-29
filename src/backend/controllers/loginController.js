const tokenModel = require('../models/token');
const config = require('../config');
const ObjectID = require('mongodb').ObjectID;

module.exports.login = (req, res) => {
    const { login, password } = req.body;
    const { admin } = config.users;

    let role = '';
    //10 days
    const expired = new Date().valueOf() + 31 * 24 * 60 * 60 * 1000;

    if (admin.login === login && admin.password === password) {
        role = 'admin';
    }

    if (!role) {

        res.json({
            token: '',
            role: ''
        });     
   
    }
    else {

        new tokenModel({ role, expired })
            .save()
            .then(x => {
                res.json({
                    token: x.id,
                    role
                });
            });
    }
};

module.exports.logout = (req, res) => {
    const id = req.headers.authorization;   
    
    const result = () => res.json({result: 'ok'});
    tokenModel.remove({_id: ObjectID(id)}).then(result, result);       

};
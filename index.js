require("setimmediate");
var mkdirp = require('mkdirp'),
    Promise = require('es6-promise').Promise;

/*
git remote add origin https://github.com/hollowdoor/mkdirp_omen.git
git push -u origin master
npm publish
*/

module.exports = function(dir, options){
    return new Promise(function(resolve, reject){
        mkdirp(dir, options || {}, function(err){
            if(err)
                return reject(err);
            resolve(dir);
        });
    });
};

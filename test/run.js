var mkdirp = require('../index.js'),
    rimraf = require('rimraf'),
    dir = 'top/below';

rimraf(dir, function(e){
    console.log('tried to delete directories');
    if(e)
        console.log('error deleting '+e.message);
    mkdirp(dir).then(function(dir){
        console.log('made '+dir);
    }, function(err){
        console.log(err);
    });
});

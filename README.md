mkdirp-omen
===========

Install
-------

`npm install mkdirp-omen`

Usage
-----

```javascript
var mkdirp = require('mkdirp-omen');

mkdirp('top/bottom').then(function(dir){
    console.log('Directory ('+dir+') has been created.');
}, function(err){
    console.log(err);
});
```

About
-----

There is already a `mkdirp-then` module that returns a promise.

That module doesn't pass the value to the `then` success callback. This one does. :)

`mkdirp-omen` has the same options as the `mkdirp`module.

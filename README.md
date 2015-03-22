# browserify-inline
Call node.js (server-side) directly from browserify client-side callback at build time 


## Usage

`npm install browserify-inline --save-dev`

### gulpfile.js

```JavaScript
// ...
bundler.transform('browserify-inline');
// ...
```

### some-client-file.js

```JavaScript
var inline = require('inline');

var built = new Date(inline(function () {
  return Date.now();
}));
var author = inline(function (require) {
  var parts = process.env['USERPROFILE'].split(require('path').sep);
  return ('' + parts[parts.length - 1]).trim().toLowerCase();
});
```



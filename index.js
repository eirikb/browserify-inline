var staticModule = require('static-module');

module.exports = function () {
  return staticModule({
    inline: function (cb) {
      return "JSON.parse('" + JSON.stringify(cb(require)) + "')";
    }
  });
};
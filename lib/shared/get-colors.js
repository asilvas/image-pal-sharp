'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var sharp = require('sharp');

module.exports = function (imagePal, _ref, cb) {
  var srcPath = _ref.srcPath,
      srcBuffer = _ref.srcBuffer,
      width = _ref.width,
      height = _ref.height,
      onProcess = _ref.onProcess,
      options = _objectWithoutProperties(_ref, ['srcPath', 'srcBuffer', 'width', 'height', 'onProcess']);

  if (!height) width = width || 100; // default if height not specified

  var src = srcPath || srcBuffer;
  if (!src) throw new Error('options.srcPath or options.srcBuffer is required');

  sharp(src).resize(width, height).flatten(true).toFormat('raw').toBuffer(function (err, data, info) {
    if (err) return void cb(err);

    if (typeof onProcess === 'function') onProcess();
    var colors = imagePal(data, { hasAlpha: false, ...options });

    cb(null, colors);
  });
};
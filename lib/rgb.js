'use strict';

var imagePal = require('image-pal/lib/rgb');
var getColors = require('./shared/get-colors');

module.exports = function (options, cb) {
  getColors(imagePal, options, cb);
};
'use strict';

var imagePal = require('image-pal/lib/hsluv');
var getColors = require('./shared/get-colors');

module.exports = function (options, cb) {
  getColors(imagePal, options, cb);
};
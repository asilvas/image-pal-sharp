const sharp = require('sharp');

module.exports = (imagePal, { srcPath, srcBuffer, width, height, onProcess, ...options }, cb) => {
  if (!height) width = width || 100; // default if height not specified

  const src = srcPath || srcBuffer;
  if (!src) throw new Error('options.srcPath or options.srcBuffer is required');

  sharp(src)
    .resize(width, height)
    .flatten(true)
    .toFormat('raw')
    .toBuffer((err, data, info) => {
      if (err) return void cb(err);

      if (typeof onProcess === 'function') onProcess();
      const colors = imagePal(data, { hasAlpha: false, ...options });

      cb(null, colors);
    })
  ;
};

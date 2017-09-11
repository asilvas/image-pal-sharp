  const getColors = require('..');
  const path = require('path');
  
  let startTime;

  function onProcess() {
    startTime = Date.now();
  }

  getColors({ srcPath: path.resolve(__dirname, './steam-engine.jpg'), onProcess }, (err, colors) => {
    if (err) return void console.error('oops!', err.stack || err);

    const elapsed = Date.now() - startTime;

    console.log(`Took ${elapsed}ms to process image`);

    colors.forEach(color => {
      console.log(color.rgb, color.hex, color.hsluv); // [ 100, 100, 100 ]
    });
  });

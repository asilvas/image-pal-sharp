# Intro

A Node.js based [Image-Pal](https://github.com/asilvas/image-pal) implementation that leverages `Sharp` and `libvips` for fast palette generation.


## Usage

Very similar pattern to its parent [Image-Pal](https://github.com/asilvas/image-pal#usage), but asyncrhonous to accomodate events.

```
  const getColors = require('image-pal-sharp/lib/hsluv');
  // OR if you want the non-human-perceptual version based on pure RGB
  // const getColors = require('image-pal-sharp/lib/rgb');
  
  getColors(options, (err, colors) => {
    if (err) return void console.error('oops!', err.stack || err);

    colors.forEach(color => {
      console.log(color.rgb); // [ 100, 100, 100 ]
      console.log(color.alpha); // 255
      console.log(color.hex); // #abc123
      // below props only available if using `hsluv` version
      console.log(color.hsluv); // [ 1, 50, 100 ]
    });
  });
```


## Options

Large images are not necessary for computing accurate palettes. It's highly recommended to use default settings for high performance and quality results.

| Name | Type | Default | Desc |
| --- | --- | --- | --- |
| srcUrl | String | (optional) | If you're supplying your own image url. `srcUrl` OR `srcBuffer` are required |
| srcBuffer | Buffer | (optional) | Supply your own raw image bytes. `srcUrl` OR `srcBuffer` are required |
| width | Number | `100` | Maximum width of canvas in pixels. Only `width` OR `height` should be set, not both, to respect aspect ratio of source image |
| height | Number | `undefined` | Maximum height of canvas in pixels. Only `width` OR `height` should be set, not both, to respect aspect ratio of source image |

Additional tuning options can be found at [Image-Pal](https://github.com/asilvas/image-pal#options).

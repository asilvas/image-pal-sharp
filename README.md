# Intro

A Node.js based [Image-Pal](https://github.com/asilvas/image-pal) implementation that leverages `Sharp` and `libvips` for fast palette generation.


## Demo

To see demo clone this repo and run `node demo`.

```
> node demo
Took 42ms to process image
[ 196, 218, 241 ] '#c4daf1' [ 239.0773797548265, 62.00595427731245, 85.820928443915 ]
[ 213, 223, 235 ] '#d5dfeb' [ 240.3786110119509, 37.57598548714378, 88.10221093080527 ]
[ 229, 227, 224 ] '#e5e3e0' [ 63.04883262366258, 5.313207494811199, 89.99850012442303 ]
[ 216, 221, 225 ] '#d8dde1' [ 231.2926672560323, 12.781065308348486, 87.54190087601687 ]
[ 156, 148, 140 ] '#9c948c' [ 53.992079342662414, 11.337510179465953, 61.55373382613564 ]
[ 102, 86, 70 ] '#665646' [ 50.69806571890067, 34.70834973483793, 37.55833334012684 ]
[ 101, 92, 87 ] '#655c57' [ 41.07002012268189, 12.488530826550802, 39.612166767563785 ]
[ 79, 83, 91 ] '#4f535b' [ 249.31681257822805, 11.940884051110205, 35.07361000074769 ]
[ 41, 43, 49 ] '#292b31' [ 254.45198736942183, 11.939832748584408, 17.477938017731553 ]
[ 31, 28, 26 ] '#1f1c1a' [ 45.04678799216399, 11.963855652978301, 10.475202863803194 ]
```


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
| srcPath | String | (optional) | If you're supplying your own image path. `srcPath` OR `srcBuffer` are required |
| srcBuffer | Buffer | (optional) | Supply your own raw image bytes. `srcPath` OR `srcBuffer` are required |
| width | Number | `100` | Maximum width of canvas in pixels. Only `width` OR `height` should be set, not both, to respect aspect ratio of source image |
| height | Number | `undefined` | Maximum height of canvas in pixels. Only `width` OR `height` should be set, not both, to respect aspect ratio of source image |

Additional tuning options can be found at [Image-Pal](https://github.com/asilvas/image-pal#options).

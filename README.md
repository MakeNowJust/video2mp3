# video2mp3

Convert video to mp3 with using ffmpeg

[![npm](https://nodei.co/npm/video2mp3.png)](https://nodei.co/npm/video2mp3/)
[![Dependency Status](https://david-dm.org/MakeNowJust/video2mp3.svg)](https://david-dm.org/MakeNowJust/video2mp3)


## Prerequisite

It requires `ffmpeg` and `liblamemp3` codec.

In ubuntu, you can install these libraries:

```
$ sudo apt-get install ffmpeg libavcodec-extra
```


## Install

```
$ npm install video2mp3
```

 
## API

```js
var
video2mp3 = require('video2mp3');
```


### `video2mp3.convert(videoPath or videoStream, [options or mp3path], [callback])`

If passed no-object type value (i.e. string, number ...) as the second argument,
it equals `convert(video, {mp3path: options}, callback)`.

`options` follows such properties:

  - `options.mp3path` is the path of output mp3.
  - `options.sampleRate` is the sampling rate, default is 44.1kHz.

If passed no `options.mp3path`, it returns stream object to convert to mp3.

```js
video2mp3.convert('video.mp4').pipe(require('fs').createWriteStream('audio.mp3'));
```

Otherwise it converts video to mp3 and save to `options.mp3path`,
and callback call with null or error object when it succeeded or failured.

```js
video2mp3.convert('video.mp4', {mp3path: 'audio.mp3', sampleRate: 8000}, function (err) {
  if (err) throw err;
  console.log('convert successfully!');
});
```

## Author

TSUYUSATO Kitsune (MakeNowJust)

## License

Apache-2.0. Please read `LICENSE`.


## Contribute

  1. Fork this repository.
  2. Checkout your feature branch.
  3. Commit your change.
  4. Push and Pull request.

Welcome your pull request :smile:

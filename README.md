#video2mp3

Convert video to mp3 with using ffmpeg

[![NPM](https://nodei.co/npm/video2mp3.png)](https://nodei.co/npm/video2mp3/)


##Prerequisite

It requires `ffmpeg` and `liblamemp3` codec.

In ubuntu, you can install these libraries:

```
$ sudo apt-get install ffmpeg libavcodec-extra
```


##Install

```
$ npm install video2mp3
```

 
##API

```js
var
video2mp3 = require('video2mp3');
```


###`video2mp3.convert(videoPath or videoStream, [mp3Path], [callback])`

If passed video as only argument, it returns stream object.

```js
video2mp3.convert('video.mp4').pipe(require('fs').createWriteStream(audio.mp3'));
```

Otherwise it converts video to mp3 and save to mp3Path,
and callback call with null or error object when it succeeded or failured.

```js
video2mp3.convert('video.mp4', 'audio.mp3', function (err) {
  if (err) throw err;
  console.log('convert successfully!');
});
```

##Author

TSUYUSATO Kitsune (MakeNowJust)

##License

Apache-2.0. Please read `LICENSE`.


##Contribute

  1. Fork this repository.
  2. Checkout your feature branch.
  3. Commit your change.
  4. Push and Pull request.

Welcome your pull request :smile:

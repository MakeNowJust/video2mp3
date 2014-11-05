var
fs = require('fs'),
ffmpeg = require('fluent-ffmpeg');

// Internals

// video maybe accepted path of video file (like .flv, .mp4 and more?) or video stream.
// it returns ffmpeg object, which shouldn't export to other modules.
function convertInternal(video) {
  return ffmpeg(video, {
    nolog: true,
    timeout: 60,
  })
    // options to convert to mp3
    .withAudioCodec('libmp3lame')
    .toFormat('mp3');
}

// Exports

function convert(video, mp3path, callback) {
  // if passed video as only argument, it returns stream object.
  if (mp3path == null) {
    return convertInternal(video).pipe();

  // otherwise it converts video to mp3 and save to mp3Path,
  // and callback call with null or error object when it succeeded or failured.
  } else {
    callback = callback || function () { };
    return convertInternal(video)
      .on('error', function (error) {
        callback(error);
      })
      .on('end', function () {
        callback(null);
      })
      .save(mp3path);
  }
}

exports.convert = convert;

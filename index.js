var
fs = require('fs'),
ffmpeg = require('fluent-ffmpeg');

// Internals

// `video` maybe accepted path of video file (like .flv, .mp4 and more?) or video stream.
// `sampleRate` is sampling rate (frequency, like 44.1kHz, 8kHz).
// it returns ffmpeg object, which shouldn't export to other modules.
function convertInternal(video, sampleRate) {
  return ffmpeg(video, {
    nolog: true,
    timeout: 60,
  })
    // options to convert to mp3
    .withAudioCodec('libmp3lame')
    .audioFrequency(sampleRate)
    .toFormat('mp3');
}

// Exports

// it converts video to mp3.
function convert(video, options, callback) {
  // if passed no-object type value (i.e. string, number ...) as the second argument,
  // it equals `convert(video, {mp3path: options}, callback)`.
  if (typeof options !== 'object') {
    options = {
      mp3path: options,
    };
  }
  // default sampling rate is 44.1kHz.
  options.sampleRate = options.sampleRate == null ? 44100 : options.sampleRate;

  // if passed `video` as the only argument, it returns stream object to convert to mp3.
  if (options.mp3path == null) {
    return convertInternal(video, options.sampleRate).pipe();

  // otherwise it converts `video` to mp3 and save to `options.mp3Path`,
  // and callback call with null or error object when it succeeded or failured.
  } else {
    callback = callback || function () { };
    return convertInternal(video, options.sampleRate)
      .on('error', function (error) {
        callback(error);
      })
      .on('end', function () {
        callback(null);
      })
      .save(options.mp3path);
  }
}

exports.convert = convert;

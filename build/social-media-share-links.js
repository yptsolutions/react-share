'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.email = email;
exports.twitter = twitter;
exports.facebook = facebook;
exports.googlePlus = googlePlus;
exports.linkedin = linkedin;
exports.pinterest = pinterest;

var _utils = require('./utils');

function assertProvided(argument, caller) {
  if (!argument) {
    throw new Error('Argument not provided for ' + caller + '.');
  }
}

function assertIsArray(array, caller) {
  if (!!array && typeof array.contructor === Array) {
    throw new Error('Expected object to be an array in ' + caller + '.');
  }
}

function email(subject, body) {
  assertProvided(subject, 'email');
  assertProvided(body, 'email');

  return 'mailto:' + (0, _utils.objectToGetParams)({ subject: subject, body: body });
}

function twitter(url, text, via) {
  var hashtags = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  assertProvided(url, 'twitter');
  assertProvided(text, 'twitter');
  assertIsArray(hashtags, 'twitter');

  return 'https://twitter.com/share' + (0, _utils.objectToGetParams)({
    url: url,
    text: text,
    via: via,
    hashtags: hashtags.join(',')
  });
}

function facebook(url, message) {
  assertProvided(url, 'facebook');
  assertProvided(message, 'facebook');

  return "https://www.facebook.com/dialog/feed?"
        + "app_id=" + "233144983724240"
        + "&display=popup&caption=" + message
        + "&link=" + url
        + "&redirect_uri=https://witch-word.com/";
}

function googlePlus(url) {
  assertProvided(url, 'googlePlus');

  return 'https://plus.google.com/share' + (0, _utils.objectToGetParams)({ url: url });
}

function linkedin(url, title) {
  assertProvided(url, 'linkedin');
  assertProvided(title, 'linkedin');

  return 'https://linkedin.com/shareArticle' + (0, _utils.objectToGetParams)({ url: url, title: title });
}

function pinterest(url, media) {
  assertProvided(url, 'pinterest');
  assertProvided(media, 'pinterest');

  return 'https://pinterest.com/pin/create/button/' + (0, _utils.objectToGetParams)({
    url: url,
    media: media
  });
}

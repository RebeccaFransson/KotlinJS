if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJS'.");
}
var KotlinJS = function (_, Kotlin) {
  'use strict';
  function headerPagieHtml() {
    return '<h1>HEADER<\/h1>';
  }
  var package$pagies = _.pagies || (_.pagies = {});
  package$pagies.headerPagieHtml = headerPagieHtml;
  Kotlin.defineModule('KotlinJS', _);
  return _;
}(typeof KotlinJS === 'undefined' ? {} : KotlinJS, kotlin);

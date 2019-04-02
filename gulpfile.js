'use strict'

const { src, dest } = require('gulp');
var sass = require('gulp-sass');

exports.default = function () {
  return src('app/scss/*.scss')
    .pipe(sass()).pipe(dest("app/css"));
}

/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stream-to-it";
exports.ids = ["vendor-chunks/stream-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/stream-to-it/source.js":
/*!*********************************************!*\
  !*** ./node_modules/stream-to-it/source.js ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = readable => {\n  // Node.js stream\n  if (readable[Symbol.asyncIterator]) return readable\n\n  // Browser ReadableStream\n  if (readable.getReader) {\n    return (async function * () {\n      const reader = readable.getReader()\n\n      try {\n        while (true) {\n          const { done, value } = await reader.read()\n          if (done) return\n          yield value\n        }\n      } finally {\n        reader.releaseLock()\n      }\n    })()\n  }\n\n  throw new Error('unknown stream')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RyZWFtLXRvLWl0L3NvdXJjZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW5kZXIvLi9ub2RlX21vZHVsZXMvc3RyZWFtLXRvLWl0L3NvdXJjZS5qcz81MDRmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVhZGFibGUgPT4ge1xuICAvLyBOb2RlLmpzIHN0cmVhbVxuICBpZiAocmVhZGFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSByZXR1cm4gcmVhZGFibGVcblxuICAvLyBCcm93c2VyIFJlYWRhYmxlU3RyZWFtXG4gIGlmIChyZWFkYWJsZS5nZXRSZWFkZXIpIHtcbiAgICByZXR1cm4gKGFzeW5jIGZ1bmN0aW9uICogKCkge1xuICAgICAgY29uc3QgcmVhZGVyID0gcmVhZGFibGUuZ2V0UmVhZGVyKClcblxuICAgICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpXG4gICAgICAgICAgaWYgKGRvbmUpIHJldHVyblxuICAgICAgICAgIHlpZWxkIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHJlYWRlci5yZWxlYXNlTG9jaygpXG4gICAgICB9XG4gICAgfSkoKVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIHN0cmVhbScpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stream-to-it/source.js\n");

/***/ })

};
;
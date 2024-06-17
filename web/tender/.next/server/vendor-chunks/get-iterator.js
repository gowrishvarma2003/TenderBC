/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-iterator";
exports.ids = ["vendor-chunks/get-iterator"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-iterator/index.js":
/*!********************************************!*\
  !*** ./node_modules/get-iterator/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("// If the passed object is an (async) iterable, then get the iterator\n// If it's probably an iterator already (i.e. has next function) return it\n// else throw\nmodule.exports = function getIterator (obj) {\n  if (obj) {\n    if (typeof obj[Symbol.iterator] === 'function') {\n      return obj[Symbol.iterator]()\n    }\n    if (typeof obj[Symbol.asyncIterator] === 'function') {\n      return obj[Symbol.asyncIterator]()\n    }\n    if (typeof obj.next === 'function') {\n      return obj // probably an iterator\n    }\n  }\n  throw new Error('argument is not an iterator or iterable')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LWl0ZXJhdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW5kZXIvLi9ub2RlX21vZHVsZXMvZ2V0LWl0ZXJhdG9yL2luZGV4LmpzPzc4ODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSWYgdGhlIHBhc3NlZCBvYmplY3QgaXMgYW4gKGFzeW5jKSBpdGVyYWJsZSwgdGhlbiBnZXQgdGhlIGl0ZXJhdG9yXG4vLyBJZiBpdCdzIHByb2JhYmx5IGFuIGl0ZXJhdG9yIGFscmVhZHkgKGkuZS4gaGFzIG5leHQgZnVuY3Rpb24pIHJldHVybiBpdFxuLy8gZWxzZSB0aHJvd1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRJdGVyYXRvciAob2JqKSB7XG4gIGlmIChvYmopIHtcbiAgICBpZiAodHlwZW9mIG9ialtTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb2JqW1N5bWJvbC5pdGVyYXRvcl0oKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKClcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmoubmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9iaiAvLyBwcm9iYWJseSBhbiBpdGVyYXRvclxuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50IGlzIG5vdCBhbiBpdGVyYXRvciBvciBpdGVyYWJsZScpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-iterator/index.js\n");

/***/ })

};
;
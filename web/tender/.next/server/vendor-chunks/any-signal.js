/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/any-signal";
exports.ids = ["vendor-chunks/any-signal"];
exports.modules = {

/***/ "(ssr)/./node_modules/any-signal/index.js":
/*!******************************************!*\
  !*** ./node_modules/any-signal/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Takes an array of AbortSignals and returns a single signal.\n * If any signals are aborted, the returned signal will be aborted.\n * @param {Array<AbortSignal>} signals\n * @returns {AbortSignal}\n */\nfunction anySignal (signals) {\n  const controller = new globalThis.AbortController()\n\n  function onAbort () {\n    controller.abort()\n\n    for (const signal of signals) {\n      if (!signal || !signal.removeEventListener) continue\n      signal.removeEventListener('abort', onAbort)\n    }\n  }\n\n  for (const signal of signals) {\n    if (!signal || !signal.addEventListener) continue\n    if (signal.aborted) {\n      onAbort()\n      break\n    }\n    signal.addEventListener('abort', onAbort)\n  }\n\n  return controller.signal\n}\n\nmodule.exports = anySignal\nmodule.exports.anySignal = anySignal\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYW55LXNpZ25hbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW5kZXIvLi9ub2RlX21vZHVsZXMvYW55LXNpZ25hbC9pbmRleC5qcz85MmI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGFrZXMgYW4gYXJyYXkgb2YgQWJvcnRTaWduYWxzIGFuZCByZXR1cm5zIGEgc2luZ2xlIHNpZ25hbC5cbiAqIElmIGFueSBzaWduYWxzIGFyZSBhYm9ydGVkLCB0aGUgcmV0dXJuZWQgc2lnbmFsIHdpbGwgYmUgYWJvcnRlZC5cbiAqIEBwYXJhbSB7QXJyYXk8QWJvcnRTaWduYWw+fSBzaWduYWxzXG4gKiBAcmV0dXJucyB7QWJvcnRTaWduYWx9XG4gKi9cbmZ1bmN0aW9uIGFueVNpZ25hbCAoc2lnbmFscykge1xuICBjb25zdCBjb250cm9sbGVyID0gbmV3IGdsb2JhbFRoaXMuQWJvcnRDb250cm9sbGVyKClcblxuICBmdW5jdGlvbiBvbkFib3J0ICgpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KClcblxuICAgIGZvciAoY29uc3Qgc2lnbmFsIG9mIHNpZ25hbHMpIHtcbiAgICAgIGlmICghc2lnbmFsIHx8ICFzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikgY29udGludWVcbiAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQWJvcnQpXG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBzaWduYWwgb2Ygc2lnbmFscykge1xuICAgIGlmICghc2lnbmFsIHx8ICFzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcikgY29udGludWVcbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIG9uQWJvcnQoKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25BYm9ydClcbiAgfVxuXG4gIHJldHVybiBjb250cm9sbGVyLnNpZ25hbFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFueVNpZ25hbFxubW9kdWxlLmV4cG9ydHMuYW55U2lnbmFsID0gYW55U2lnbmFsXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/any-signal/index.js\n");

/***/ })

};
;
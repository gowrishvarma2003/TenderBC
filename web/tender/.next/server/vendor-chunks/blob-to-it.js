"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/blob-to-it";
exports.ids = ["vendor-chunks/blob-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/blob-to-it/dist/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/blob-to-it/dist/src/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ blobToIt)\n/* harmony export */ });\n/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-readablestream-to-it */ \"(ssr)/./node_modules/browser-readablestream-to-it/dist/src/index.js\");\n/**\n * @packageDocumentation\n *\n * Allows reading Blob contents as an async iterator.\n *\n * @example\n *\n * ```javascript\n * import toIt from 'blob-to-it'\n * import all from 'it-all'\n *\n * const content = [ Uint8Array.from([0, 1, 2, 3, 4]) ]\n * const blob = new Blob(content)\n * const arr = await all(toIt(blob))\n *\n * console.info(arr) // [ [ 0, 1, 2, 3, 4 ] ]\n * ```\n */\n\nfunction blobToIt(blob) {\n    if (typeof blob.stream === 'function') {\n        return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blob.stream());\n    }\n    // firefox < 69 does not support blob.stream()\n    // @ts-expect-error - response.body is optional, but in practice it's a stream.\n    return (0,browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Response(blob).body);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmxvYi10by1pdC9kaXN0L3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRTtBQUN0RDtBQUNmO0FBQ0EsZUFBZSx3RUFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3RUFBeUI7QUFDcEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbmRlci8uL25vZGVfbW9kdWxlcy9ibG9iLXRvLWl0L2Rpc3Qvc3JjL2luZGV4LmpzP2UyMTUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqXG4gKiBBbGxvd3MgcmVhZGluZyBCbG9iIGNvbnRlbnRzIGFzIGFuIGFzeW5jIGl0ZXJhdG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHRvSXQgZnJvbSAnYmxvYi10by1pdCdcbiAqIGltcG9ydCBhbGwgZnJvbSAnaXQtYWxsJ1xuICpcbiAqIGNvbnN0IGNvbnRlbnQgPSBbIFVpbnQ4QXJyYXkuZnJvbShbMCwgMSwgMiwgMywgNF0pIF1cbiAqIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihjb250ZW50KVxuICogY29uc3QgYXJyID0gYXdhaXQgYWxsKHRvSXQoYmxvYikpXG4gKlxuICogY29uc29sZS5pbmZvKGFycikgLy8gWyBbIDAsIDEsIDIsIDMsIDQgXSBdXG4gKiBgYGBcbiAqL1xuaW1wb3J0IGJyb3dzZXJSZWFkYWJsZVN0cmVhbVRvSXQgZnJvbSAnYnJvd3Nlci1yZWFkYWJsZXN0cmVhbS10by1pdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBibG9iVG9JdChibG9iKSB7XG4gICAgaWYgKHR5cGVvZiBibG9iLnN0cmVhbSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gYnJvd3NlclJlYWRhYmxlU3RyZWFtVG9JdChibG9iLnN0cmVhbSgpKTtcbiAgICB9XG4gICAgLy8gZmlyZWZveCA8IDY5IGRvZXMgbm90IHN1cHBvcnQgYmxvYi5zdHJlYW0oKVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXNwb25zZS5ib2R5IGlzIG9wdGlvbmFsLCBidXQgaW4gcHJhY3RpY2UgaXQncyBhIHN0cmVhbS5cbiAgICByZXR1cm4gYnJvd3NlclJlYWRhYmxlU3RyZWFtVG9JdChuZXcgUmVzcG9uc2UoYmxvYikuYm9keSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/blob-to-it/dist/src/index.js\n");

/***/ })

};
;
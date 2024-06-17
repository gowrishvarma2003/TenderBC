"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/iso-url";
exports.ids = ["vendor-chunks/iso-url"];
exports.modules = {

/***/ "(ssr)/./node_modules/iso-url/index.js":
/*!***************************************!*\
  !*** ./node_modules/iso-url/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst {\n  URLWithLegacySupport,\n  format,\n  URLSearchParams,\n  defaultBase\n} = __webpack_require__(/*! ./src/url */ \"(ssr)/./node_modules/iso-url/src/url.js\")\nconst relative = __webpack_require__(/*! ./src/relative */ \"(ssr)/./node_modules/iso-url/src/relative.js\")\n\nmodule.exports = {\n  URL: URLWithLegacySupport,\n  URLSearchParams,\n  format,\n  relative,\n  defaultBase\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxFQUFFLG1CQUFPLENBQUMsMERBQVc7QUFDdkIsaUJBQWlCLG1CQUFPLENBQUMsb0VBQWdCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbmRlci8uL25vZGVfbW9kdWxlcy9pc28tdXJsL2luZGV4LmpzPzMyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHtcbiAgVVJMV2l0aExlZ2FjeVN1cHBvcnQsXG4gIGZvcm1hdCxcbiAgVVJMU2VhcmNoUGFyYW1zLFxuICBkZWZhdWx0QmFzZVxufSA9IHJlcXVpcmUoJy4vc3JjL3VybCcpXG5jb25zdCByZWxhdGl2ZSA9IHJlcXVpcmUoJy4vc3JjL3JlbGF0aXZlJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFVSTDogVVJMV2l0aExlZ2FjeVN1cHBvcnQsXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgZm9ybWF0LFxuICByZWxhdGl2ZSxcbiAgZGVmYXVsdEJhc2Vcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/iso-url/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/iso-url/src/relative.js":
/*!**********************************************!*\
  !*** ./node_modules/iso-url/src/relative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URLWithLegacySupport, format } = __webpack_require__(/*! ./url */ \"(ssr)/./node_modules/iso-url/src/url.js\")\n\n/**\n * @param {string | undefined} url\n * @param {any} [location]\n * @param {any} [protocolMap]\n * @param {any} [defaultProtocol]\n */\nmodule.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {\n  let protocol = location.protocol\n    ? location.protocol.replace(':', '')\n    : 'http'\n\n  // Check protocol map\n  protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':'\n  let urlParsed\n\n  try {\n    urlParsed = new URLWithLegacySupport(url)\n  } catch (err) {\n    urlParsed = {}\n  }\n\n  const base = Object.assign({}, location, {\n    protocol: protocol || urlParsed.protocol,\n    host: location.host || urlParsed.host\n  })\n\n  return new URLWithLegacySupport(url, format(base)).toString()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9zcmMvcmVsYXRpdmUuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosUUFBUSwrQkFBK0IsRUFBRSxtQkFBTyxDQUFDLHNEQUFPOztBQUV4RDtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCO0FBQ0Esb0NBQW9DLGtCQUFrQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbmRlci8uL25vZGVfbW9kdWxlcy9pc28tdXJsL3NyYy9yZWxhdGl2ZS5qcz84MDExIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IFVSTFdpdGhMZWdhY3lTdXBwb3J0LCBmb3JtYXQgfSA9IHJlcXVpcmUoJy4vdXJsJylcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gdXJsXG4gKiBAcGFyYW0ge2FueX0gW2xvY2F0aW9uXVxuICogQHBhcmFtIHthbnl9IFtwcm90b2NvbE1hcF1cbiAqIEBwYXJhbSB7YW55fSBbZGVmYXVsdFByb3RvY29sXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9ICh1cmwsIGxvY2F0aW9uID0ge30sIHByb3RvY29sTWFwID0ge30sIGRlZmF1bHRQcm90b2NvbCkgPT4ge1xuICBsZXQgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbFxuICAgID8gbG9jYXRpb24ucHJvdG9jb2wucmVwbGFjZSgnOicsICcnKVxuICAgIDogJ2h0dHAnXG5cbiAgLy8gQ2hlY2sgcHJvdG9jb2wgbWFwXG4gIHByb3RvY29sID0gKHByb3RvY29sTWFwW3Byb3RvY29sXSB8fCBkZWZhdWx0UHJvdG9jb2wgfHwgcHJvdG9jb2wpICsgJzonXG4gIGxldCB1cmxQYXJzZWRcblxuICB0cnkge1xuICAgIHVybFBhcnNlZCA9IG5ldyBVUkxXaXRoTGVnYWN5U3VwcG9ydCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHVybFBhcnNlZCA9IHt9XG4gIH1cblxuICBjb25zdCBiYXNlID0gT2JqZWN0LmFzc2lnbih7fSwgbG9jYXRpb24sIHtcbiAgICBwcm90b2NvbDogcHJvdG9jb2wgfHwgdXJsUGFyc2VkLnByb3RvY29sLFxuICAgIGhvc3Q6IGxvY2F0aW9uLmhvc3QgfHwgdXJsUGFyc2VkLmhvc3RcbiAgfSlcblxuICByZXR1cm4gbmV3IFVSTFdpdGhMZWdhY3lTdXBwb3J0KHVybCwgZm9ybWF0KGJhc2UpKS50b1N0cmluZygpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/iso-url/src/relative.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/iso-url/src/url.js":
/*!*****************************************!*\
  !*** ./node_modules/iso-url/src/url.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst { URL, URLSearchParams, format } = __webpack_require__(/*! url */ \"url\")\n\n// https://github.com/nodejs/node/issues/12682\nconst defaultBase = 'http://localhost'\n\nclass URLWithLegacySupport extends URL {\n  constructor (url = '', base = defaultBase) {\n    super(url, base)\n    this.path = this.pathname + this.search\n    this.auth =\n            this.username && this.password\n              ? this.username + ':' + this.password\n              : null\n    this.query =\n            this.search && this.search.startsWith('?')\n              ? this.search.slice(1)\n              : null\n  }\n\n  format () {\n    return this.toString()\n  }\n}\n\nmodule.exports = {\n  URLWithLegacySupport,\n  URLSearchParams,\n  format,\n  defaultBase\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9zcmMvdXJsLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLFFBQVEsK0JBQStCLEVBQUUsbUJBQU8sQ0FBQyxnQkFBSzs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW5kZXIvLi9ub2RlX21vZHVsZXMvaXNvLXVybC9zcmMvdXJsLmpzP2Q4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgVVJMLCBVUkxTZWFyY2hQYXJhbXMsIGZvcm1hdCB9ID0gcmVxdWlyZSgndXJsJylcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy8xMjY4MlxuY29uc3QgZGVmYXVsdEJhc2UgPSAnaHR0cDovL2xvY2FsaG9zdCdcblxuY2xhc3MgVVJMV2l0aExlZ2FjeVN1cHBvcnQgZXh0ZW5kcyBVUkwge1xuICBjb25zdHJ1Y3RvciAodXJsID0gJycsIGJhc2UgPSBkZWZhdWx0QmFzZSkge1xuICAgIHN1cGVyKHVybCwgYmFzZSlcbiAgICB0aGlzLnBhdGggPSB0aGlzLnBhdGhuYW1lICsgdGhpcy5zZWFyY2hcbiAgICB0aGlzLmF1dGggPVxuICAgICAgICAgICAgdGhpcy51c2VybmFtZSAmJiB0aGlzLnBhc3N3b3JkXG4gICAgICAgICAgICAgID8gdGhpcy51c2VybmFtZSArICc6JyArIHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgdGhpcy5xdWVyeSA9XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCAmJiB0aGlzLnNlYXJjaC5zdGFydHNXaXRoKCc/JylcbiAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaC5zbGljZSgxKVxuICAgICAgICAgICAgICA6IG51bGxcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBVUkxXaXRoTGVnYWN5U3VwcG9ydCxcbiAgVVJMU2VhcmNoUGFyYW1zLFxuICBmb3JtYXQsXG4gIGRlZmF1bHRCYXNlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/iso-url/src/url.js\n");

/***/ })

};
;
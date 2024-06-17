/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-fifo";
exports.ids = ["vendor-chunks/p-fifo"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-fifo/index.js":
/*!**************************************!*\
  !*** ./node_modules/p-fifo/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Fifo = __webpack_require__(/*! fast-fifo */ \"(ssr)/./node_modules/fast-fifo/index.js\")\nconst defer = __webpack_require__(/*! p-defer */ \"(ssr)/./node_modules/p-fifo/node_modules/p-defer/index.js\")\n\nmodule.exports = class PFifo {\n  constructor () {\n    this._buffer = new Fifo()\n    this._waitingConsumers = new Fifo()\n  }\n\n  push (chunk) {\n    const { promise, resolve } = defer()\n    this._buffer.push({ chunk, resolve })\n    this._consume()\n    return promise\n  }\n\n  _consume () {\n    while (!this._waitingConsumers.isEmpty() && !this._buffer.isEmpty()) {\n      const nextConsumer = this._waitingConsumers.shift()\n      const nextChunk = this._buffer.shift()\n      nextConsumer.resolve(nextChunk.chunk)\n      nextChunk.resolve()\n    }\n  }\n\n  shift () {\n    const { promise, resolve } = defer()\n    this._waitingConsumers.push({ resolve })\n    this._consume()\n    return promise\n  }\n\n  isEmpty () {\n    return this._buffer.isEmpty()\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1maWZvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQywwREFBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsMEVBQVM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQix3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0Isa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVuZGVyLy4vbm9kZV9tb2R1bGVzL3AtZmlmby9pbmRleC5qcz84ZjMxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZpZm8gPSByZXF1aXJlKCdmYXN0LWZpZm8nKVxuY29uc3QgZGVmZXIgPSByZXF1aXJlKCdwLWRlZmVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQRmlmbyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9idWZmZXIgPSBuZXcgRmlmbygpXG4gICAgdGhpcy5fd2FpdGluZ0NvbnN1bWVycyA9IG5ldyBGaWZvKClcbiAgfVxuXG4gIHB1c2ggKGNodW5rKSB7XG4gICAgY29uc3QgeyBwcm9taXNlLCByZXNvbHZlIH0gPSBkZWZlcigpXG4gICAgdGhpcy5fYnVmZmVyLnB1c2goeyBjaHVuaywgcmVzb2x2ZSB9KVxuICAgIHRoaXMuX2NvbnN1bWUoKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBfY29uc3VtZSAoKSB7XG4gICAgd2hpbGUgKCF0aGlzLl93YWl0aW5nQ29uc3VtZXJzLmlzRW1wdHkoKSAmJiAhdGhpcy5fYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgY29uc3QgbmV4dENvbnN1bWVyID0gdGhpcy5fd2FpdGluZ0NvbnN1bWVycy5zaGlmdCgpXG4gICAgICBjb25zdCBuZXh0Q2h1bmsgPSB0aGlzLl9idWZmZXIuc2hpZnQoKVxuICAgICAgbmV4dENvbnN1bWVyLnJlc29sdmUobmV4dENodW5rLmNodW5rKVxuICAgICAgbmV4dENodW5rLnJlc29sdmUoKVxuICAgIH1cbiAgfVxuXG4gIHNoaWZ0ICgpIHtcbiAgICBjb25zdCB7IHByb21pc2UsIHJlc29sdmUgfSA9IGRlZmVyKClcbiAgICB0aGlzLl93YWl0aW5nQ29uc3VtZXJzLnB1c2goeyByZXNvbHZlIH0pXG4gICAgdGhpcy5fY29uc3VtZSgpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGlzRW1wdHkgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWZmZXIuaXNFbXB0eSgpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-fifo/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/p-fifo/node_modules/p-defer/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/p-fifo/node_modules/p-defer/index.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst pDefer = () => {\n\tconst deferred = {};\n\n\tdeferred.promise = new Promise((resolve, reject) => {\n\t\tdeferred.resolve = resolve;\n\t\tdeferred.reject = reject;\n\t});\n\n\treturn deferred;\n};\n\nmodule.exports = pDefer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1maWZvL25vZGVfbW9kdWxlcy9wLWRlZmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVuZGVyLy4vbm9kZV9tb2R1bGVzL3AtZmlmby9ub2RlX21vZHVsZXMvcC1kZWZlci9pbmRleC5qcz83NTdiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcERlZmVyID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IHt9O1xuXG5cdGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0ZGVmZXJyZWQucmVqZWN0ID0gcmVqZWN0O1xuXHR9KTtcblxuXHRyZXR1cm4gZGVmZXJyZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBEZWZlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-fifo/node_modules/p-defer/index.js\n");

/***/ })

};
;
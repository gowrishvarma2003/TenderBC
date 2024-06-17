"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/it-peekable";
exports.ids = ["vendor-chunks/it-peekable"];
exports.modules = {

/***/ "(ssr)/./node_modules/it-peekable/dist/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/it-peekable/dist/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ peekableIterator)\n/* harmony export */ });\nfunction peekableIterator(iterable) {\n    // @ts-expect-error\n    const [iterator, symbol] = iterable[Symbol.asyncIterator] != null\n        // @ts-expect-error\n        ? [iterable[Symbol.asyncIterator](), Symbol.asyncIterator]\n        // @ts-expect-error\n        : [iterable[Symbol.iterator](), Symbol.iterator];\n    const queue = [];\n    // @ts-expect-error\n    return {\n        peek: () => {\n            return iterator.next();\n        },\n        push: (value) => {\n            queue.push(value);\n        },\n        next: () => {\n            if (queue.length > 0) {\n                return {\n                    done: false,\n                    value: queue.shift()\n                };\n            }\n            return iterator.next();\n        },\n        [symbol]() {\n            return this;\n        }\n    };\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtcGVla2FibGUvZGlzdC9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVuZGVyLy4vbm9kZV9tb2R1bGVzL2l0LXBlZWthYmxlL2Rpc3Qvc3JjL2luZGV4LmpzP2NhYjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVla2FibGVJdGVyYXRvcihpdGVyYWJsZSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjb25zdCBbaXRlcmF0b3IsIHN5bWJvbF0gPSBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gIT0gbnVsbFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgID8gW2l0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpLCBTeW1ib2wuYXN5bmNJdGVyYXRvcl1cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICA6IFtpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCksIFN5bWJvbC5pdGVyYXRvcl07XG4gICAgY29uc3QgcXVldWUgPSBbXTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGVlazogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHVzaDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHF1ZXVlLnNoaWZ0KClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgW3N5bWJvbF0oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-peekable/dist/src/index.js\n");

/***/ })

};
;
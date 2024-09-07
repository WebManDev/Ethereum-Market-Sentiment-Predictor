"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Chart.js":
/*!*********************************!*\
  !*** ./src/components/Chart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Register the components you're using with Chart.js\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nconst Chart = ()=>{\n    const { 0: ethData , 1: setEthData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchEthData = async ()=>{\n            const res = await fetch(\"/api/fetchEthPrices\");\n            const data = await res.json();\n            setEthData(data);\n        };\n        fetchEthData();\n        const interval = setInterval(fetchEthData, 15 * 60 * 1000); // Fetch every 15 minutes\n        return ()=>clearInterval(interval)\n        ;\n    }, []);\n    const data1 = {\n        labels: ethData.map((item)=>item.timestamp\n        ),\n        datasets: [\n            {\n                label: \"Ethereum Price\",\n                data: ethData.map((item)=>item.close\n                ),\n                fill: false,\n                borderColor: \"#4caf50\"\n            }\n        ]\n    };\n    const options = {\n        scales: {\n            x: {\n                type: \"category\"\n            },\n            y: {\n                beginAtZero: false\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n        data: data1,\n        options: options\n    }, void 0, false, {\n        fileName: \"/Users/andyluu/Ethereum-Market-Sentiment-Predictor/eth-sentiment-app/src/components/Chart.js\",\n        lineNumber: 64,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNMO0FBVXJCO0FBRWxCLHFEQUFxRDtBQUNyREksb0RBQWdCLENBQ1pDLGlEQUFXLEVBQ1hDLG1EQUFhLEVBQ2JDLGlEQUFXLEVBQ1hDLGtEQUFZLEVBQ1pDLDJDQUFLLEVBQ0xDLDZDQUFPLEVBQ1BDLDRDQUFNLENBQ1QsQ0FBQztBQUVGLE1BQU1SLEtBQUssR0FBRyxJQUFNO0lBQ2hCLE1BQU0sRUF6QlYsR0F5QldVLE9BQU8sR0F6QmxCLEdBeUJvQkMsVUFBVSxNQUFJYiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUUxQ0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osTUFBTWUsWUFBWSxHQUFHLFVBQVk7WUFDN0IsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUM5QyxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7WUFDN0JMLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFFREgsWUFBWSxFQUFFLENBQUM7UUFDZixNQUFNSyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ04sWUFBWSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUseUJBQXlCO1FBRXJGLE9BQU8sSUFBTU8sYUFBYSxDQUFDRixRQUFRLENBQUM7UUFBQSxDQUFDO0tBQ3hDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNRixLQUFJLEdBQUc7UUFDVEssTUFBTSxFQUFFVixPQUFPLENBQUNXLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFJQSxJQUFJLENBQUNDLFNBQVM7UUFBQSxDQUFDO1FBQzNDQyxRQUFRLEVBQUU7WUFDTjtnQkFDSUMsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkJWLElBQUksRUFBRUwsT0FBTyxDQUFDVyxHQUFHLENBQUNDLENBQUFBLElBQUksR0FBSUEsSUFBSSxDQUFDSSxLQUFLO2dCQUFBLENBQUM7Z0JBQ3JDQyxJQUFJLEVBQUUsS0FBSztnQkFDWEMsV0FBVyxFQUFFLFNBQVM7YUFDekI7U0FDSjtLQUNKO0lBRUQsTUFBTUMsT0FBTyxHQUFHO1FBQ1pDLE1BQU0sRUFBRTtZQUNKQyxDQUFDLEVBQUU7Z0JBQ0NDLElBQUksRUFBRSxVQUFVO2FBQ25CO1lBQ0RDLENBQUMsRUFBRTtnQkFDQ0MsV0FBVyxFQUFFLEtBQUs7YUFDckI7U0FDSjtLQUNKO0lBRUQscUJBQU8sOERBQUNuQyxpREFBSTtRQUFDZ0IsSUFBSSxFQUFFQSxLQUFJO1FBQUVjLE9BQU8sRUFBRUEsT0FBTzs7Ozs7aUJBQUksQ0FBQztDQUNqRDtBQUVELGlFQUFlN0IsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXRoLXByZWRpY3Rvci1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0NoYXJ0LmpzP2U3YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7XG4gICAgQ2hhcnQgYXMgQ2hhcnRKUyxcbiAgICBMaW5lRWxlbWVudCxcbiAgICBDYXRlZ29yeVNjYWxlLFxuICAgIExpbmVhclNjYWxlLFxuICAgIFBvaW50RWxlbWVudCxcbiAgICBUaXRsZSxcbiAgICBUb29sdGlwLFxuICAgIExlZ2VuZFxufSBmcm9tIFwiY2hhcnQuanNcIjtcblxuLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudHMgeW91J3JlIHVzaW5nIHdpdGggQ2hhcnQuanNcbkNoYXJ0SlMucmVnaXN0ZXIoXG4gICAgTGluZUVsZW1lbnQsXG4gICAgQ2F0ZWdvcnlTY2FsZSxcbiAgICBMaW5lYXJTY2FsZSxcbiAgICBQb2ludEVsZW1lbnQsXG4gICAgVGl0bGUsXG4gICAgVG9vbHRpcCxcbiAgICBMZWdlbmRcbik7XG5cbmNvbnN0IENoYXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtldGhEYXRhLCBzZXRFdGhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRXRoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9mZXRjaEV0aFByaWNlc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgc2V0RXRoRGF0YShkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaEV0aERhdGEoKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmZXRjaEV0aERhdGEsIDE1ICogNjAgKiAxMDAwKTsgLy8gRmV0Y2ggZXZlcnkgMTUgbWludXRlc1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBsYWJlbHM6IGV0aERhdGEubWFwKGl0ZW0gPT4gaXRlbS50aW1lc3RhbXApLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkV0aGVyZXVtIFByaWNlXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZXRoRGF0YS5tYXAoaXRlbSA9PiBpdGVtLmNsb3NlKSxcbiAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjNGNhZjUwXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JywgLy8gUmVnaXN0ZXJpbmcgXCJjYXRlZ29yeVwiIGFzIHgtYXhpcyB0eXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gPExpbmUgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmUiLCJDaGFydCIsIkNoYXJ0SlMiLCJMaW5lRWxlbWVudCIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInJlZ2lzdGVyIiwiZXRoRGF0YSIsInNldEV0aERhdGEiLCJmZXRjaEV0aERhdGEiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsYWJlbHMiLCJtYXAiLCJpdGVtIiwidGltZXN0YW1wIiwiZGF0YXNldHMiLCJsYWJlbCIsImNsb3NlIiwiZmlsbCIsImJvcmRlckNvbG9yIiwib3B0aW9ucyIsInNjYWxlcyIsIngiLCJ0eXBlIiwieSIsImJlZ2luQXRaZXJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chart.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Chart */ \"./src/components/Chart.js\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Ethereum Price Prediction\"\n            }, void 0, false, {\n                fileName: \"/Users/andyluu/Ethereum-Market-Sentiment-Predictor/eth-sentiment-app/src/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andyluu/Ethereum-Market-Sentiment-Predictor/eth-sentiment-app/src/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andyluu/Ethereum-Market-Sentiment-Predictor/eth-sentiment-app/src/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXdDO0FBRXpCLFNBQVNDLElBQUksR0FBRztJQUMzQixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsMkJBQXlCOzs7OztvQkFBSzswQkFDbEMsOERBQUNILHlEQUFLOzs7O29CQUFHOzs7Ozs7WUFDUCxDQUNSO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGgtcHJlZGljdG9yLWZyb250ZW5kLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5FdGhlcmV1bSBQcmljZSBQcmVkaWN0aW9uPC9oMT5cbiAgICAgICAgICAgIDxDaGFydCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkNoYXJ0IiwiSG9tZSIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("chart.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
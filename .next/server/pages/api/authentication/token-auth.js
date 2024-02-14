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
exports.id = "pages/api/authentication/token-auth";
exports.ids = ["pages/api/authentication/token-auth"];
exports.modules = {

/***/ "ably/promises":
/*!********************************!*\
  !*** external "ably/promises" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("ably/promises");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "(api)/./pages/api/authentication/token-auth.ts":
/*!************************************************!*\
  !*** ./pages/api/authentication/token-auth.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ably/promises */ \"ably/promises\");\n/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ably_promises__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\nasync function handler(req, res) {\n    console.log(\"/api/authentication/token-auth called\");\n    if (!process.env.ABLY_API_KEY) {\n        return res.status(500).setHeader(\"content-type\", \"application/json\").json({\n            errorMessage: `Missing ABLY_API_KEY environment variable.\n                If you're running locally, please ensure you have a ./.env file with a value for ABLY_API_KEY=your-key.\n                If you're running in Netlify, make sure you've configured env variable ABLY_API_KEY. \n                Please see README.md for more details on configuring your Ably API Key.`\n        });\n    }\n    const clientId = req.body[\"clientId\"] || process.env.DEFAULT_CLIENT_ID || \"NO_CLIENT_ID\";\n    const client = new ably_promises__WEBPACK_IMPORTED_MODULE_1__.Rest(process.env.ABLY_API_KEY);\n    const tokenRequestData = await client.auth.createTokenRequest({\n        clientId: clientId\n    });\n    return res.status(200).json(tokenRequestData);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4tYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVpQztBQUNLO0FBRXRDQSwwQ0FBYTtBQUVFLGVBQWVHLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQUMsUUFBUUMsR0FBRyxDQUFDO0lBRVosSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksRUFBRTtRQUM3QixPQUFPTCxJQUNKTSxNQUFNLENBQUMsS0FDUEMsU0FBUyxDQUFDLGdCQUFnQixvQkFDMUJDLElBQUksQ0FBQztZQUNKQyxjQUFjLENBQUM7Ozt1RkFHZ0UsQ0FBQztRQUNsRjtJQUNKLENBQUM7SUFFRCxNQUFNQyxXQUNKWCxJQUFJWSxJQUFJLENBQUMsV0FBVyxJQUFJUixRQUFRQyxHQUFHLENBQUNRLGlCQUFpQixJQUFJO0lBQzNELE1BQU1DLFNBQVMsSUFBSWpCLCtDQUFTLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtJQUNyRCxNQUFNVSxtQkFBbUIsTUFBTUYsT0FBT0csSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQztRQUM1RFAsVUFBVUE7SUFDWjtJQUVBLE9BQU9WLElBQUlNLE1BQU0sQ0FBQyxLQUFLRSxJQUFJLENBQUNPO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtbWVtb3J5LWdhbWUvLi9wYWdlcy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4tYXV0aC50cz8zYmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5pbXBvcnQgKiBhcyBBYmx5IGZyb20gXCJhYmx5L3Byb21pc2VzXCI7XG5cbmRvdGVudi5jb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pIHtcbiAgY29uc29sZS5sb2coXCIvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLWF1dGggY2FsbGVkXCIpO1xuXG4gIGlmICghcHJvY2Vzcy5lbnYuQUJMWV9BUElfS0VZKSB7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAuc2V0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxuICAgICAgLmpzb24oe1xuICAgICAgICBlcnJvck1lc3NhZ2U6IGBNaXNzaW5nIEFCTFlfQVBJX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZS5cbiAgICAgICAgICAgICAgICBJZiB5b3UncmUgcnVubmluZyBsb2NhbGx5LCBwbGVhc2UgZW5zdXJlIHlvdSBoYXZlIGEgLi8uZW52IGZpbGUgd2l0aCBhIHZhbHVlIGZvciBBQkxZX0FQSV9LRVk9eW91ci1rZXkuXG4gICAgICAgICAgICAgICAgSWYgeW91J3JlIHJ1bm5pbmcgaW4gTmV0bGlmeSwgbWFrZSBzdXJlIHlvdSd2ZSBjb25maWd1cmVkIGVudiB2YXJpYWJsZSBBQkxZX0FQSV9LRVkuIFxuICAgICAgICAgICAgICAgIFBsZWFzZSBzZWUgUkVBRE1FLm1kIGZvciBtb3JlIGRldGFpbHMgb24gY29uZmlndXJpbmcgeW91ciBBYmx5IEFQSSBLZXkuYCxcbiAgICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2xpZW50SWQgPVxuICAgIHJlcS5ib2R5W1wiY2xpZW50SWRcIl0gfHwgcHJvY2Vzcy5lbnYuREVGQVVMVF9DTElFTlRfSUQgfHwgXCJOT19DTElFTlRfSURcIjtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFibHkuUmVzdChwcm9jZXNzLmVudi5BQkxZX0FQSV9LRVkpO1xuICBjb25zdCB0b2tlblJlcXVlc3REYXRhID0gYXdhaXQgY2xpZW50LmF1dGguY3JlYXRlVG9rZW5SZXF1ZXN0KHtcbiAgICBjbGllbnRJZDogY2xpZW50SWQsXG4gIH0pO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0b2tlblJlcXVlc3REYXRhKTtcbn0iXSwibmFtZXMiOlsiZG90ZW52IiwiQWJseSIsImNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIkFCTFlfQVBJX0tFWSIsInN0YXR1cyIsInNldEhlYWRlciIsImpzb24iLCJlcnJvck1lc3NhZ2UiLCJjbGllbnRJZCIsImJvZHkiLCJERUZBVUxUX0NMSUVOVF9JRCIsImNsaWVudCIsIlJlc3QiLCJ0b2tlblJlcXVlc3REYXRhIiwiYXV0aCIsImNyZWF0ZVRva2VuUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/authentication/token-auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/authentication/token-auth.ts"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authentication/page",{

/***/ "(app-client)/./app/authentication/page.tsx":
/*!*************************************!*\
  !*** ./app/authentication/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authentication; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Logger */ \"(app-client)/./components/Logger.tsx\");\n/* harmony import */ var _ably_labs_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ably-labs/react-hooks */ \"(app-client)/./node_modules/@ably-labs/react-hooks/dist/mjs/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authentication() {\n    _s();\n    const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [connectionState, setConnectionState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"unknown\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleConnectionStateChange = (stateChange)=>{\n            setLogs((prev)=>[\n                    ...prev,\n                    new _components_Logger__WEBPACK_IMPORTED_MODULE_2__.LogEntry(\"Connection state change: \".concat(stateChange.previous, \" -> \").concat(stateChange.current))\n                ]);\n            setConnectionState(stateChange.current);\n        };\n        const ably = (0,_ably_labs_react_hooks__WEBPACK_IMPORTED_MODULE_3__.configureAbly)({\n            authUrl: \"/api/authentication/token-auth\"\n        });\n        ably.connection.on(handleConnectionStateChange);\n        return ()=>{\n            ably.connection.off();\n        };\n    }, []); // Only run the client\n    const connectionToggle = (_event)=>{\n        const ably = (0,_ably_labs_react_hooks__WEBPACK_IMPORTED_MODULE_3__.assertConfiguration)();\n        if (connectionState === \"connected\") {\n            ably.connection.close();\n        } else if (connectionState === \"closed\") {\n            ably.connection.connect();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Authenticate and establish a persistent bi-direction connection to the Ably platform.\"\n            }, void 0, false, {\n                fileName: \"/Users/rdzcn/projects/pet/online-memory-game/app/authentication/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-3x mt-4 font-bold underline\",\n                        children: [\n                            \"Connection status: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: connectionState\n                            }, void 0, false, {\n                                fileName: \"/Users/rdzcn/projects/pet/online-memory-game/app/authentication/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 30\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rdzcn/projects/pet/online-memory-game/app/authentication/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: connectionToggle,\n                            className: \"mt-4 px-3 py-3 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200\",\n                            children: connectionState === \"connected\" ? \"Disconnect\" : \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rdzcn/projects/pet/online-memory-game/app/authentication/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rdzcn/projects/pet/online-memory-game/app/authentication/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        logEntries: logs\n                    }, void 0, false, {\n                        fileName: \"/Users/rdzcn/projects/pet/online-memory-game/app/authentication/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rdzcn/projects/pet/online-memory-game/app/authentication/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Authentication, \"FbdoHj5N+f4FGUMEH1B9vigIPuc=\");\n_c = Authentication;\nvar _c;\n$RefreshReg$(_c, \"Authentication\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2F1dGhlbnRpY2F0aW9uL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTJFO0FBRWhCO0FBR2lCO0FBRTdELFNBQVNNLGlCQUFpQjs7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFrQixFQUFFO0lBQ3BELE1BQU0sQ0FBQ1MsaUJBQWlCQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNVSw4QkFBOEIsQ0FDbENDLGNBQ0c7WUFDSEosUUFBUSxDQUFDSyxPQUFTO3VCQUNiQTtvQkFDSCxJQUFJVix3REFBUUEsQ0FDViw0QkFBdURTLE9BQTNCQSxZQUFZRSxRQUFRLEVBQUMsUUFBMEIsT0FBcEJGLFlBQVlHLE9BQU87aUJBRTdFO1lBRURMLG1CQUFtQkUsWUFBWUcsT0FBTztRQUN4QztRQUVBLE1BQU1DLE9BQW1DWCxxRUFBYUEsQ0FBQztZQUNyRFksU0FBUztRQUNYO1FBQ0FELEtBQUtFLFVBQVUsQ0FBQ0MsRUFBRSxDQUFDUjtRQUVuQixPQUFPLElBQU07WUFDWEssS0FBS0UsVUFBVSxDQUFDRSxHQUFHO1FBQ3JCO0lBQ0YsR0FBRyxFQUFFLEdBQUcsc0JBQXNCO0lBRTlCLE1BQU1DLG1CQUFzQyxDQUMxQ0MsU0FDRztRQUNILE1BQU1OLE9BQU9aLDJFQUFtQkE7UUFFaEMsSUFBSUssb0JBQW9CLGFBQWE7WUFDbkNPLEtBQUtFLFVBQVUsQ0FBQ0ssS0FBSztRQUN2QixPQUFPLElBQUlkLG9CQUFvQixVQUFVO1lBQ3ZDTyxLQUFLRSxVQUFVLENBQUNNLE9BQU87UUFDekIsQ0FBQztJQUNIO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUtILDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFHQyxXQUFVOzs0QkFBbUM7MENBQzVCLDhEQUFDQzswQ0FBTXBCOzs7Ozs7Ozs7Ozs7a0NBRzVCLDhEQUFDcUI7a0NBQ0MsNEVBQUNDOzRCQUNDQyxTQUFTWDs0QkFDVE8sV0FBVTtzQ0FFVG5CLG9CQUFvQixjQUFjLGVBQWUsU0FBUzs7Ozs7Ozs7Ozs7a0NBSS9ELDhEQUFDUCwwREFBTUE7d0JBQUMrQixZQUFZMUI7Ozs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7R0FqRXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXV0aGVudGljYXRpb24vcGFnZS50c3g/NDE5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIE1vdXNlRXZlbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExvZ2dlciwgeyBMb2dFbnRyeSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvZ2dlclwiO1xuXG5pbXBvcnQgKiBhcyBBYmx5IGZyb20gXCJhYmx5L3Byb21pc2VzXCI7XG5pbXBvcnQgeyBhc3NlcnRDb25maWd1cmF0aW9uLCBjb25maWd1cmVBYmx5IH0gZnJvbSBcIkBhYmx5LWxhYnMvcmVhY3QtaG9va3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aGVudGljYXRpb24oKSB7XG4gIGNvbnN0IFtsb2dzLCBzZXRMb2dzXSA9IHVzZVN0YXRlPEFycmF5PExvZ0VudHJ5Pj4oW10pO1xuICBjb25zdCBbY29ubmVjdGlvblN0YXRlLCBzZXRDb25uZWN0aW9uU3RhdGVdID0gdXNlU3RhdGUoXCJ1bmtub3duXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ29ubmVjdGlvblN0YXRlQ2hhbmdlID0gKFxuICAgICAgc3RhdGVDaGFuZ2U6IEFibHkuVHlwZXMuQ29ubmVjdGlvblN0YXRlQ2hhbmdlLFxuICAgICkgPT4ge1xuICAgICAgc2V0TG9ncygocHJldikgPT4gW1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBuZXcgTG9nRW50cnkoXG4gICAgICAgICAgYENvbm5lY3Rpb24gc3RhdGUgY2hhbmdlOiAke3N0YXRlQ2hhbmdlLnByZXZpb3VzfSAtPiAke3N0YXRlQ2hhbmdlLmN1cnJlbnR9YCxcbiAgICAgICAgKSxcbiAgICAgIF0pO1xuXG4gICAgICBzZXRDb25uZWN0aW9uU3RhdGUoc3RhdGVDaGFuZ2UuY3VycmVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFibHk6IEFibHkuVHlwZXMuUmVhbHRpbWVQcm9taXNlID0gY29uZmlndXJlQWJseSh7XG4gICAgICBhdXRoVXJsOiBcIi9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4tYXV0aFwiLFxuICAgIH0pO1xuICAgIGFibHkuY29ubmVjdGlvbi5vbihoYW5kbGVDb25uZWN0aW9uU3RhdGVDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFibHkuY29ubmVjdGlvbi5vZmYoKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIE9ubHkgcnVuIHRoZSBjbGllbnRcblxuICBjb25zdCBjb25uZWN0aW9uVG9nZ2xlOiBNb3VzZUV2ZW50SGFuZGxlciA9IChcbiAgICBfZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxuICApID0+IHtcbiAgICBjb25zdCBhYmx5ID0gYXNzZXJ0Q29uZmlndXJhdGlvbigpO1xuXG4gICAgaWYgKGNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJjb25uZWN0ZWRcIikge1xuICAgICAgYWJseS5jb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgfSBlbHNlIGlmIChjb25uZWN0aW9uU3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgIGFibHkuY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwPlxuICAgICAgICBBdXRoZW50aWNhdGUgYW5kIGVzdGFibGlzaCBhIHBlcnNpc3RlbnQgYmktZGlyZWN0aW9uIGNvbm5lY3Rpb24gdG8gdGhlXG4gICAgICAgIEFibHkgcGxhdGZvcm0uXG4gICAgICA8L3A+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeCBtdC00IGZvbnQtYm9sZCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBDb25uZWN0aW9uIHN0YXR1czogPHNwYW4+e2Nvbm5lY3Rpb25TdGF0ZX08L3NwYW4+XG4gICAgICAgIDwvaDM+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0aW9uVG9nZ2xlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBweC0zIHB5LTMgdGV4dC1pbmRpZ28tNjAwIGJnLWluZGlnby01MCByb3VuZGVkLWxnIGR1cmF0aW9uLTE1MCBob3ZlcjpiZy1pbmRpZ28tMTAwIGFjdGl2ZTpiZy1pbmRpZ28tMjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29ubmVjdGlvblN0YXRlID09PSBcImNvbm5lY3RlZFwiID8gXCJEaXNjb25uZWN0XCIgOiBcIkNvbm5lY3RcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPExvZ2dlciBsb2dFbnRyaWVzPXtsb2dzfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTG9nZ2VyIiwiTG9nRW50cnkiLCJhc3NlcnRDb25maWd1cmF0aW9uIiwiY29uZmlndXJlQWJseSIsIkF1dGhlbnRpY2F0aW9uIiwibG9ncyIsInNldExvZ3MiLCJjb25uZWN0aW9uU3RhdGUiLCJzZXRDb25uZWN0aW9uU3RhdGUiLCJoYW5kbGVDb25uZWN0aW9uU3RhdGVDaGFuZ2UiLCJzdGF0ZUNoYW5nZSIsInByZXYiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJhYmx5IiwiYXV0aFVybCIsImNvbm5lY3Rpb24iLCJvbiIsIm9mZiIsImNvbm5lY3Rpb25Ub2dnbGUiLCJfZXZlbnQiLCJjbG9zZSIsImNvbm5lY3QiLCJwIiwic2VjdGlvbiIsImgzIiwiY2xhc3NOYW1lIiwic3BhbiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsb2dFbnRyaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/authentication/page.tsx\n"));

/***/ })

});
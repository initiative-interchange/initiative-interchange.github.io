/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"contact_us": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./_js/contact_us.js","vendors~contact_us~info_page~landing_page~nav","vendors~contact_us~landing_page"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_js/contact_us.js":
/*!***************************!*\
  !*** ./_js/contact_us.js ***!
  \***************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_attractors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-attractors */ \"./node_modules/matter-attractors/build/matter-attractors.js\");\n/* harmony import */ var matter_attractors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_attractors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/physics */ \"./_js/lib/physics.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n // use matterjs plugin\n\nObject(matter_js__WEBPACK_IMPORTED_MODULE_1__[\"use\"])(matter_attractors__WEBPACK_IMPORTED_MODULE_2___default.a); // when the document is ready...\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  setup(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#interaction-circles'));\n  setup(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#administration-circles'));\n});\n\nfunction setup(wrapperElement) {\n  var engine = createEngine(wrapperElement); // create Circle instances from all '.circle' elements within the wrapper\n\n  var circles = wrapperElement.children('.circle').toArray().map(Circle.fromDOMNode); // setActive is emmitted when a circle or the space between circles is clicked\n\n  wrapperElement.on('setActive', function (e, id) {\n    console.log(e, id);\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = circles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var circle = _step.value;\n        // actives the circle with the matching id,\n        // collapses all other circles\n        circle.setActive(circle.id === id);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  }); // when the space between circles is clicked\n\n  wrapperElement.click(function (e) {\n    if (e.target === wrapperElement.get(0)) {\n      // no circle can have the id of -1 so all circle will be collapsed\n      wrapperElement.trigger('setActive', -1);\n    }\n  }); // up to this point the physics bodies only exist in the array, but not in the engine\n\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = circles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var circle = _step2.value;\n      matter_js__WEBPACK_IMPORTED_MODULE_1__[\"World\"].add(engine.world, circle.body);\n    } // wait 30 seconds for the circles to stabalize\n\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  Object(_lib_physics__WEBPACK_IMPORTED_MODULE_3__[/* jumpForwardInSimulation */ \"a\"])(engine, 30); // first render\n\n  requestAnimationFrame(function () {\n    render(); // make circles visible\n\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n      for (var _iterator3 = circles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var circle = _step3.value;\n        circle.element.removeClass('hidden');\n      }\n    } catch (err) {\n      _didIteratorError3 = true;\n      _iteratorError3 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n          _iterator3[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError3) {\n          throw _iteratorError3;\n        }\n      }\n    }\n\n    var oldTime;\n\n    function render(time) {\n      if (oldTime) {\n        // limit delta to a maximum of 100ms\n        // otherwise the circles go crazy after having the browser window inactive for too long\n        var delta = Math.min(time - oldTime, 100);\n        matter_js__WEBPACK_IMPORTED_MODULE_1__[\"Engine\"].update(engine, delta);\n      }\n\n      oldTime = time; // let the browser trigger the next frame\n\n      requestAnimationFrame(render);\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = circles[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var circle = _step4.value;\n          var position = circle.body.position;\n          var domElement = circle.element; // calculate the absolute offsets from (0|0)\n          // domElement is only used to correct the error from dom and matterjs using different anchor points\n\n          var yOffset = position.y - domElement.height() / 2;\n          var xOffset = position.x - domElement.width() / 2; // apply the absolute offset as a CSS property\n\n          domElement.css('transform', \"translate3d(\".concat(xOffset, \"px, \").concat(yOffset, \"px, 0)\"));\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n            _iterator4[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n    }\n  });\n} // creates empty engine without any bubbles\n\n\nfunction createEngine(wrapperElement) {\n  var engine = matter_js__WEBPACK_IMPORTED_MODULE_1__[\"Engine\"].create();\n  var world = engine.world; // disables gravity on all axes\n\n  world.gravity.scale = 0; // invisible body in the center of the wrapper that keeps all the bubbles together\n\n  var attractiveBody = matter_js__WEBPACK_IMPORTED_MODULE_1__[\"Bodies\"].circle(wrapperElement.width() / 2, wrapperElement.height() / 2, 0, {\n    isStatic: true,\n    plugin: {\n      attractors: [function (attractor, attractee) {\n        var factor = 1e-9 * attractee.area;\n        return {\n          x: (attractor.position.x - attractee.position.x) * factor,\n          y: (attractor.position.y - attractee.position.y) * factor\n        };\n      }]\n    }\n  });\n  matter_js__WEBPACK_IMPORTED_MODULE_1__[\"World\"].add(world, attractiveBody);\n  return engine;\n} // links physics body to dom element\n\n\nvar Circle =\n/*#__PURE__*/\nfunction () {\n  function Circle(id, element, body) {\n    _classCallCheck(this, Circle);\n\n    this.id = id;\n    this.element = element;\n    this.body = body;\n    this.element.click(function () {\n      return (// triggers 'setActive' on the wrapper element\n        // causes this circle to expand and all others to collapse\n        element.parent().trigger('setActive', id)\n      );\n    });\n  }\n\n  _createClass(Circle, [{\n    key: \"setActive\",\n    value: function setActive(active) {\n      if (this.active == active) {\n        return;\n      } // this.body inside of scaleBody doesn't work\n\n\n      var body = this.body; // scales the physics body\n\n      function scaleBody(factor) {\n        matter_js__WEBPACK_IMPORTED_MODULE_1__[\"Body\"].scale(body, factor, factor);\n      }\n\n      if (active) {\n        // changes to visual representation\n        this.element.addClass('active'); // changes to physics body\n\n        scaleBody(2.45);\n      } else {\n        this.element.removeClass('active');\n        scaleBody(1 / 2.45);\n      }\n    }\n  }, {\n    key: \"active\",\n    get: function get() {\n      return this.element.hasClass('active');\n    } // constructs Circle object from an existing dom node\n\n  }], [{\n    key: \"fromDOMNode\",\n    value: function fromDOMNode(domNode) {\n      var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(domNode);\n      var parent = element.parent();\n      var margin = parseFloat(element.css('margin')); // read id from dom property\n\n      var id = element.data('id'); // create physics body\n\n      var body = matter_js__WEBPACK_IMPORTED_MODULE_1__[\"Bodies\"].circle(Math.random() * parent.width(), Math.random() * parent.height(), element.width() / 2 + margin, {\n        plugin: {\n          attractors: [function (attractor, attractee) {\n            var factor = 1e-6;\n            return {\n              x: (attractor.position.x - attractee.position.x) * factor,\n              y: (attractor.position.y - attractee.position.y) * factor\n            };\n          }]\n        }\n      });\n      return new Circle(id, element, body);\n    }\n  }]);\n\n  return Circle;\n}();\n\n//# sourceURL=webpack:///./_js/contact_us.js?");

/***/ }),

/***/ "./_js/lib/physics.js":
/*!****************************!*\
  !*** ./_js/lib/physics.js ***!
  \****************************/
/*! exports provided: jumpForwardInSimulation */
/*! exports used: jumpForwardInSimulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return jumpForwardInSimulation; });\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var requestidlecallback_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! requestidlecallback-polyfill */ \"./node_modules/requestidlecallback-polyfill/index.js\");\n/* harmony import */ var requestidlecallback_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(requestidlecallback_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction jumpForwardInSimulation(_x, _x2) {\n  return _jumpForwardInSimulation.apply(this, arguments);\n}\n\nfunction _jumpForwardInSimulation() {\n  _jumpForwardInSimulation = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(engine, seconds) {\n    var times;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            times = seconds * 100;\n            _context.next = 3;\n            return internal(engine, times);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _jumpForwardInSimulation.apply(this, arguments);\n}\n\nfunction internal(_x3, _x4) {\n  return _internal.apply(this, arguments);\n}\n\nfunction _internal() {\n  _internal = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(engine, times) {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            if (!(times <= 0)) {\n              _context3.next = 2;\n              break;\n            }\n\n            return _context3.abrupt(\"return\");\n\n          case 2:\n            matter_js__WEBPACK_IMPORTED_MODULE_2__[\"Engine\"].update(engine, 10);\n            return _context3.abrupt(\"return\", new Promise(function (resolve) {\n              requestIdleCallback(\n              /*#__PURE__*/\n              _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee2() {\n                return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        _context2.next = 2;\n                        return internal(times - 1);\n\n                      case 2:\n                        resolve();\n\n                      case 3:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2);\n              })));\n            }));\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _internal.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./_js/lib/physics.js?");

/***/ })

/******/ });
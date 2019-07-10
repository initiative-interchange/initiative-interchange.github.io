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
/******/ 		"landing_page": 0
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
/******/ 	deferredModules.push(["./_js/landing_page.js","vendors~contact_us~info_page~landing_page~nav","vendors~info_page~landing_page~nav","vendors~contact_us~landing_page","vendors~landing_page"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_js/landing_page.js":
/*!*****************************!*\
  !*** ./_js/landing_page.js ***!
  \*****************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ \"./node_modules/animejs/lib/anime.es.js\");\n/* harmony import */ var poly_decomp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! poly-decomp */ \"./node_modules/poly-decomp/src/index.js\");\n/* harmony import */ var poly_decomp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(poly_decomp__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var matter_attractors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! matter-attractors */ \"./node_modules/matter-attractors/build/matter-attractors.js\");\n/* harmony import */ var matter_attractors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(matter_attractors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_physics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/physics */ \"./_js/lib/physics.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nwindow.decomp = poly_decomp__WEBPACK_IMPORTED_MODULE_2___default.a;\n\n\n //use(MatterAttractors)\n\nfunction setupScrollAnimation(outerElement) {\n  var cleanUpAnimation;\n\n  function createScrollAnimation() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page').removeClass('hidden');\n    var firstPage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page').first();\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.top-page-spacer').css('height', (outerElement.height() - firstPage.height()) / 2);\n    var halfPage = outerElement.height() / 2;\n    var timeline = animejs__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"].timeline({\n      duration: outerElement.height(),\n      autoplay: false\n    });\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fade-in')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var el = _step.value;\n        timeline.add({\n          targets: el,\n          opacity: [0, 1],\n          duration: el.clientHeight,\n          easing: 'easeInQuint'\n        }, el.offsetTop - el.clientHeight / 2);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fade-out')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var _el = _step2.value;\n        timeline.add({\n          targets: _el,\n          opacity: [1, 0],\n          duration: _el.clientHeight,\n          easing: 'easeOutQuad'\n        }, _el.offsetTop + _el.clientHeight / 2);\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n          _iterator2[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n\n    function updateAnimation() {\n      var progress = Math.max(0, outerElement.scrollTop()) + halfPage;\n      timeline.seek(progress);\n    }\n\n    if (typeof cleanUpAnimation === 'function') {\n      cleanUpAnimation();\n    }\n\n    outerElement.scroll(updateAnimation);\n\n    cleanUpAnimation = function cleanUpAnimation() {\n      return outerElement.off('scroll', updateAnimation);\n    };\n\n    updateAnimation();\n  }\n\n  document.body.onresize = createScrollAnimation;\n  createScrollAnimation();\n}\n\nfunction setupBubbles(_x, _x2) {\n  return _setupBubbles.apply(this, arguments);\n}\n\nfunction _setupBubbles() {\n  _setupBubbles = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(bubbleContainer, scrollContainer) {\n    var parallexFactor, fillHeight, engine, world, mainContainer, windowHeight, windowWidth, dummyInstance, bubbleWidth, bubbleMargin, circleRadius, upperBoundary, boundaryHeight, leftBoundary, rightBoundary, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, page, yOffset, element, areaToFill, fillableArea, bubbleArea, numberOfBubbles, bubbles, i, bubble, render, runner, oldTime, lastDelta;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            parallexFactor = 2;\n            fillHeight = 1000;\n            engine = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Engine\"].create();\n            world = engine.world;\n            world.gravity.x = 0;\n            world.gravity.y = -0.1;\n            mainContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('main');\n            windowHeight = mainContainer.height();\n            windowWidth = mainContainer.width();\n            dummyInstance = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img class=\"bubble\"></img>');\n            bubbleContainer.append(dummyInstance);\n            bubbleWidth = parseFloat(dummyInstance.css('width'));\n            bubbleMargin = parseFloat(dummyInstance.css('margin'));\n            bubbleContainer.remove(dummyInstance);\n            circleRadius = bubbleWidth / 2 + bubbleMargin; // creating boundaries\n\n            upperBoundary = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Bodies\"].rectangle(windowWidth / 2, -circleRadius, windowWidth + 2 * circleRadius, 10, {\n              isStatic: true\n            });\n            matter_js__WEBPACK_IMPORTED_MODULE_3__[\"World\"].add(world, upperBoundary);\n            boundaryHeight = fillHeight * 1.5;\n            leftBoundary = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Bodies\"].rectangle(-circleRadius, boundaryHeight / 2, 10, boundaryHeight, {\n              isStatic: true\n            });\n            matter_js__WEBPACK_IMPORTED_MODULE_3__[\"World\"].add(world, leftBoundary);\n            rightBoundary = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Bodies\"].rectangle(windowWidth + circleRadius, boundaryHeight / 2, 10, boundaryHeight, {\n              isStatic: true\n            });\n            matter_js__WEBPACK_IMPORTED_MODULE_3__[\"World\"].add(world, rightBoundary); // create content placeholders\n\n            _iteratorNormalCompletion3 = true;\n            _didIteratorError3 = false;\n            _iteratorError3 = undefined;\n            _context.prev = 25;\n\n            for (_iterator3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page')[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n              page = _step3.value;\n              yOffset = page.offsetTop + page.offsetHeight / 2;\n              console.log(yOffset);\n              element = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Bodies\"].rectangle(windowWidth / 2, yOffset, 100, 100, {\n                isStatic: true\n              });\n              matter_js__WEBPACK_IMPORTED_MODULE_3__[\"World\"].add(world, element);\n            } // calculate number of bubbles bubbles\n            // https://math.stackexchange.com/questions/2548513/maximum-number-of-circle-packing-into-a-rectangle\n\n\n            _context.next = 33;\n            break;\n\n          case 29:\n            _context.prev = 29;\n            _context.t0 = _context[\"catch\"](25);\n            _didIteratorError3 = true;\n            _iteratorError3 = _context.t0;\n\n          case 33:\n            _context.prev = 33;\n            _context.prev = 34;\n\n            if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n              _iterator3[\"return\"]();\n            }\n\n          case 36:\n            _context.prev = 36;\n\n            if (!_didIteratorError3) {\n              _context.next = 39;\n              break;\n            }\n\n            throw _iteratorError3;\n\n          case 39:\n            return _context.finish(36);\n\n          case 40:\n            return _context.finish(33);\n\n          case 41:\n            areaToFill = (windowWidth + 2 * circleRadius) * (fillHeight + circleRadius);\n            fillableArea = areaToFill * Math.PI / (2 * Math.sqrt(3));\n            bubbleArea = circleRadius * circleRadius * Math.PI;\n            numberOfBubbles = Math.floor(fillableArea / bubbleArea);\n            bubbles = [];\n\n            for (i = 0; i < numberOfBubbles; i++) {\n              bubble = new Circle(bubbleContainer, Math.random() * windowWidth, Math.random() * fillHeight);\n              bubbles.push(bubble);\n              matter_js__WEBPACK_IMPORTED_MODULE_3__[\"World\"].add(world, bubble.body);\n            } //await jumpForwardInSimulation(engine, 5)\n\n\n            render = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Render\"].create({\n              element: bubbleContainer.get(0),\n              engine: engine,\n              options: {\n                width: bubbleContainer.width(),\n                height: bubbleContainer.height(),\n                background: 'transparent',\n                wireframes: false\n              }\n            }); // create runner\n\n            runner = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Runner\"].create();\n            matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Runner\"].run(runner, engine);\n            matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Render\"].run(render); //scrollContainer.scroll(() => console.log(scrollContainer.scrollTop()))\n\n            requestAnimationFrame(function renderCb() {\n              var scrollOffset = scrollContainer[0].scrollTop * parallexFactor;\n              matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Render\"].lookAt(render, {\n                min: {\n                  x: 0,\n                  y: scrollOffset\n                },\n                max: {\n                  x: windowWidth,\n                  y: windowHeight + scrollOffset\n                }\n              });\n              requestAnimationFrame(renderCb);\n            });\n            return _context.abrupt(\"return\");\n\n          case 55:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[25, 29, 33, 41], [34,, 36, 40]]);\n  }));\n  return _setupBubbles.apply(this, arguments);\n}\n\nvar Circle = function Circle(parent, x, y) {\n  _classCallCheck(this, Circle);\n\n  var face = Math.floor(Math.random() * 10 + 1);\n  var facePath = \"/assets/images/landing_page/faces/\".concat(face, \".jpg\");\n  var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"<img class=\\\"bubble\\\" src=\\\"\".concat(facePath, \"\\\"></img>\"));\n  parent.append(element);\n  var elementWidth = parseFloat(element.css('width'));\n  var elementMargin = parseFloat(element.css('margin'));\n  var bodyRadius = elementWidth / 2 + elementMargin;\n  var body = matter_js__WEBPACK_IMPORTED_MODULE_3__[\"Bodies\"].circle(x, y, bodyRadius);\n  this.element = element;\n  this.body = body;\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  var mainContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('main');\n  setupScrollAnimation(mainContainer);\n  var bubbleContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bubble-container');\n  setupBubbles(bubbleContainer, mainContainer);\n});\n\n//# sourceURL=webpack:///./_js/landing_page.js?");

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
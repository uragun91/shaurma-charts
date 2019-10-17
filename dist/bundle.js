/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./src/index.ts");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/shaurma.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/shaurma.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* * { background-color: rgba(255,0,0,.2); }\n* * { background-color: rgba(0,255,0,.2); }\n* * * { background-color: rgba(0,0,255,.2); }\n* * * * { background-color: rgba(255,0,255,.2); }\n* * * * * { background-color: rgba(0,255,255,.2); }\n* * * * * * { background-color: rgba(255,255,0,.2); }\n* * * * * * * { background-color: rgba(255,0,0,.2); }\n* * * * * * * * { background-color: rgba(0,255,0,.2); }\n* * * * * * * * * { background-color: rgba(0,0,255,.2); } */\n\n.shaurma-charts-charts-wrapper, .shaurma-charts-frame-editor {\n  position: relative;\n}\n\n.shaurma-charts-frame-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\n\n.shaurma-charts-frame {\n  position: absolute;\n  top: 5px;\n  bottom: 5px;\n  box-shadow: 0 0 0 99999px rgba(0, 0, 0, .3);\n  cursor: move;\n}\n\n.shaurma-charts-frame-left-control, .shaurma-charts-frame-right-control {\n  position: absolute;\n  height: 100%;\n  width: 5px;\n  cursor: col-resize;\n  background: rgb(114, 140, 228);\n  border-radius: 3px;\n}\n\n.shaurma-charts-frame-left-control {\n  left: 0;\n  transform: translateX(-50%);\n}\n\n.shaurma-charts-frame-right-control {\n  right: 0;\n  transform: translateX(50%);\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/data1.json":
/*!************************!*\
  !*** ./src/data1.json ***!
  \************************/
/*! exports provided: points, xAxisLabel, yAxisLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"points\":[{\"x\":-50,\"y\":32},{\"x\":-49,\"y\":21},{\"x\":-48,\"y\":-18},{\"x\":-47,\"y\":-27},{\"x\":-46,\"y\":-34},{\"x\":-45,\"y\":45},{\"x\":-44,\"y\":48},{\"x\":-43,\"y\":25},{\"x\":-42,\"y\":5},{\"x\":-41,\"y\":38},{\"x\":-40,\"y\":-50},{\"x\":-39,\"y\":25},{\"x\":-38,\"y\":-2},{\"x\":-37,\"y\":-50},{\"x\":-36,\"y\":-45},{\"x\":-35,\"y\":28},{\"x\":-34,\"y\":11},{\"x\":-33,\"y\":35},{\"x\":-32,\"y\":35},{\"x\":-31,\"y\":-15},{\"x\":-30,\"y\":-20},{\"x\":-29,\"y\":-37},{\"x\":-28,\"y\":4},{\"x\":-27,\"y\":25},{\"x\":-26,\"y\":46},{\"x\":-25,\"y\":-31},{\"x\":-24,\"y\":9},{\"x\":-23,\"y\":-37},{\"x\":-22,\"y\":29},{\"x\":-21,\"y\":19},{\"x\":-20,\"y\":-8},{\"x\":-19,\"y\":17},{\"x\":-18,\"y\":-4},{\"x\":-17,\"y\":-48},{\"x\":-16,\"y\":-31},{\"x\":-15,\"y\":41},{\"x\":-14,\"y\":12},{\"x\":-13,\"y\":0},{\"x\":-12,\"y\":8},{\"x\":-11,\"y\":45},{\"x\":-10,\"y\":4},{\"x\":-9,\"y\":-49},{\"x\":-8,\"y\":15},{\"x\":-7,\"y\":-8},{\"x\":-6,\"y\":11},{\"x\":-5,\"y\":-42},{\"x\":-4,\"y\":10},{\"x\":-3,\"y\":-48},{\"x\":-2,\"y\":30},{\"x\":-1,\"y\":38},{\"x\":0,\"y\":7},{\"x\":1,\"y\":-30},{\"x\":2,\"y\":-38},{\"x\":3,\"y\":-20},{\"x\":4,\"y\":-16},{\"x\":5,\"y\":9},{\"x\":6,\"y\":-41},{\"x\":7,\"y\":27},{\"x\":8,\"y\":4},{\"x\":9,\"y\":16},{\"x\":10,\"y\":-34},{\"x\":11,\"y\":23},{\"x\":12,\"y\":-35},{\"x\":13,\"y\":-36},{\"x\":14,\"y\":1},{\"x\":15,\"y\":2},{\"x\":16,\"y\":14},{\"x\":17,\"y\":1},{\"x\":18,\"y\":27},{\"x\":19,\"y\":14},{\"x\":20,\"y\":-26},{\"x\":21,\"y\":-2},{\"x\":22,\"y\":14},{\"x\":23,\"y\":31},{\"x\":24,\"y\":-22},{\"x\":25,\"y\":0},{\"x\":26,\"y\":6},{\"x\":27,\"y\":50},{\"x\":28,\"y\":-43},{\"x\":29,\"y\":-38},{\"x\":30,\"y\":28},{\"x\":31,\"y\":-38},{\"x\":32,\"y\":4},{\"x\":33,\"y\":36},{\"x\":34,\"y\":42},{\"x\":35,\"y\":32},{\"x\":36,\"y\":4},{\"x\":37,\"y\":19},{\"x\":38,\"y\":30},{\"x\":39,\"y\":-27},{\"x\":40,\"y\":-32},{\"x\":41,\"y\":-43},{\"x\":42,\"y\":-15},{\"x\":43,\"y\":-37},{\"x\":44,\"y\":3},{\"x\":45,\"y\":44},{\"x\":46,\"y\":-30},{\"x\":47,\"y\":49},{\"x\":48,\"y\":-2},{\"x\":49,\"y\":-36}],\"xAxisLabel\":\"X Axis Label\",\"yAxisLabel\":\"Y Axis Label\"}");

/***/ }),

/***/ "./src/data2.json":
/*!************************!*\
  !*** ./src/data2.json ***!
  \************************/
/*! exports provided: points, xAxisLabel, yAxisLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"points\":[{\"x\":-50,\"y\":-38},{\"x\":-49,\"y\":21},{\"x\":-48,\"y\":8},{\"x\":-47,\"y\":-45},{\"x\":-46,\"y\":10},{\"x\":-45,\"y\":27},{\"x\":-44,\"y\":39},{\"x\":-43,\"y\":-9},{\"x\":-42,\"y\":-13},{\"x\":-41,\"y\":0},{\"x\":-40,\"y\":-14},{\"x\":-39,\"y\":-37},{\"x\":-38,\"y\":-47},{\"x\":-37,\"y\":1},{\"x\":-36,\"y\":25},{\"x\":-35,\"y\":43},{\"x\":-34,\"y\":26},{\"x\":-33,\"y\":38},{\"x\":-32,\"y\":40},{\"x\":-31,\"y\":37},{\"x\":-30,\"y\":-18},{\"x\":-29,\"y\":4},{\"x\":-28,\"y\":30},{\"x\":-27,\"y\":17},{\"x\":-26,\"y\":20},{\"x\":-25,\"y\":27},{\"x\":-24,\"y\":-38},{\"x\":-23,\"y\":15},{\"x\":-22,\"y\":-12},{\"x\":-21,\"y\":-29},{\"x\":-20,\"y\":-37},{\"x\":-19,\"y\":-33},{\"x\":-18,\"y\":32},{\"x\":-17,\"y\":-12},{\"x\":-16,\"y\":41},{\"x\":-15,\"y\":-47},{\"x\":-14,\"y\":34},{\"x\":-13,\"y\":14},{\"x\":-12,\"y\":-19},{\"x\":-11,\"y\":21},{\"x\":-10,\"y\":-37},{\"x\":-9,\"y\":43},{\"x\":-8,\"y\":47},{\"x\":-7,\"y\":-22},{\"x\":-6,\"y\":-27},{\"x\":-5,\"y\":46},{\"x\":-4,\"y\":-1},{\"x\":-3,\"y\":-29},{\"x\":-2,\"y\":41},{\"x\":-1,\"y\":-16},{\"x\":0,\"y\":43},{\"x\":1,\"y\":-21},{\"x\":2,\"y\":-14},{\"x\":3,\"y\":-34},{\"x\":4,\"y\":22},{\"x\":5,\"y\":-5},{\"x\":6,\"y\":-15},{\"x\":7,\"y\":1},{\"x\":8,\"y\":38},{\"x\":9,\"y\":27},{\"x\":10,\"y\":30},{\"x\":11,\"y\":-28},{\"x\":12,\"y\":-47},{\"x\":13,\"y\":-2},{\"x\":14,\"y\":14},{\"x\":15,\"y\":-20},{\"x\":16,\"y\":13},{\"x\":17,\"y\":-22},{\"x\":18,\"y\":-42},{\"x\":19,\"y\":20},{\"x\":20,\"y\":40},{\"x\":21,\"y\":16},{\"x\":22,\"y\":-2},{\"x\":23,\"y\":-7},{\"x\":24,\"y\":-15},{\"x\":25,\"y\":44},{\"x\":26,\"y\":16},{\"x\":27,\"y\":-6},{\"x\":28,\"y\":50},{\"x\":29,\"y\":-35},{\"x\":30,\"y\":-39},{\"x\":31,\"y\":-14},{\"x\":32,\"y\":27},{\"x\":33,\"y\":18},{\"x\":34,\"y\":11},{\"x\":35,\"y\":-45},{\"x\":36,\"y\":-12},{\"x\":37,\"y\":-34},{\"x\":38,\"y\":31},{\"x\":39,\"y\":34},{\"x\":40,\"y\":-34},{\"x\":41,\"y\":20},{\"x\":42,\"y\":-31},{\"x\":43,\"y\":26},{\"x\":44,\"y\":34},{\"x\":45,\"y\":-38},{\"x\":46,\"y\":-15},{\"x\":47,\"y\":-31},{\"x\":48,\"y\":31},{\"x\":49,\"y\":11}],\"xAxisLabel\":\"X Axis Label\",\"yAxisLabel\":\"Y Axis Label\"}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_shaurma_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/shaurma.css */ "./src/styles/shaurma.css");
/* harmony import */ var _styles_shaurma_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_shaurma_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_ShaurmaCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ShaurmaCharts */ "./src/models/ShaurmaCharts.ts");


var data1 = __webpack_require__(/*! ./data1.json */ "./src/data1.json");
var data2 = __webpack_require__(/*! ./data2.json */ "./src/data2.json");
var wrapper = document.getElementById('charts-wrapper');
var shaurma = new _models_ShaurmaCharts__WEBPACK_IMPORTED_MODULE_1__["ShaurmaCharts"](wrapper, { width: 700 });
shaurma.addChart(data1.points, 'blue');
shaurma.addChart(data2.points, 'red');


/***/ }),

/***/ "./src/models/Animation.ts":
/*!*********************************!*\
  !*** ./src/models/Animation.ts ***!
  \*********************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
var Animation = /** @class */ (function () {
    function Animation(startValue, endValue, duration, onStepCompleted) {
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.onStepCompleted = onStepCompleted;
    }
    Animation.prototype.tick = function () {
        var _this = this;
        if (!this.startTime) {
            this.startTime = new Date().getTime();
        }
        return new Promise(function (resolve) {
            var runAnimation = function () {
                var currentTimePhaze = Math.min(new Date().getTime() - _this.startTime, _this.duration);
                var timeFraction = currentTimePhaze / _this.duration;
                var progress = _this.getProgress(timeFraction); // modify timeFraction in the range [0, 1]
                var newValue = _this.startValue + (_this.endValue - _this.startValue) * progress;
                if (currentTimePhaze <= _this.duration && _this.lastValue !== _this.endValue) {
                    _this.lastValue = newValue;
                    _this.onStepCompleted(newValue);
                    requestAnimationFrame(function () { return runAnimation(); });
                }
                else {
                    resolve();
                }
            };
            requestAnimationFrame(function () { return runAnimation(); });
        });
    };
    Animation.prototype.getProgress = function (timeFraction) {
        return Math.sqrt(timeFraction);
    };
    return Animation;
}());



/***/ }),

/***/ "./src/models/LinearChart.ts":
/*!***********************************!*\
  !*** ./src/models/LinearChart.ts ***!
  \***********************************/
/*! exports provided: LinearChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearChart", function() { return LinearChart; });
var LinearChart = /** @class */ (function () {
    function LinearChart(points, color) {
        if (color === void 0) { color = 'green'; }
        this.points = points;
        this.color = color;
        this.opacity = 1;
    }
    LinearChart.prototype.draw = function (ctx) {
        var _this = this;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        this.points.forEach(function (point, index) {
            var x = (point.x - _this.xMin) * _this.coefX;
            var y = (point.y - _this.yMin) * _this.coefY;
            // draw
            index !== 0 ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        });
        ctx.stroke();
    };
    return LinearChart;
}());



/***/ }),

/***/ "./src/models/LinearDrawer.ts":
/*!************************************!*\
  !*** ./src/models/LinearDrawer.ts ***!
  \************************************/
/*! exports provided: LinearDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearDrawer", function() { return LinearDrawer; });
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ "./src/models/Animation.ts");

var LinearDrawer = /** @class */ (function () {
    function LinearDrawer(ctx, width, height, left, right) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.left = left;
        this.right = right;
        this.linearCharts = [];
        this.yMaxAnimation = null;
        this.yMinAnimation = null;
    }
    LinearDrawer.prototype.addChart = function (chart) {
        this.linearCharts.push(chart);
        this.drawAll();
    };
    LinearDrawer.prototype.updateBorders = function (left, right) {
        this.left = left;
        this.right = right;
        this.drawAll();
    };
    LinearDrawer.prototype.drawAll = function () {
        var _this = this;
        // x
        this.xMin = Math.min.apply(Math, this.linearCharts.map(function (chart) { return Math.min.apply(Math, chart.points.map(function (val) { return val.x; })); }));
        this.xMax = Math.max.apply(Math, this.linearCharts.map(function (chart) { return Math.max.apply(Math, chart.points.map(function (val) { return val.x; })); }));
        var pointsXAxisLength = Math.abs(this.xMax - this.xMin);
        this.frameXMin = this.xMin + this.left / this.width * pointsXAxisLength;
        this.frameXMax = this.xMin + this.right / this.width * pointsXAxisLength;
        this.coefX = this.width / Math.abs(this.frameXMax - this.frameXMin);
        // y
        var stripedChartsPoints = this.linearCharts.map(function (chart) {
            var filtered = [];
            chart.points.reduce(function (prevPoint, currPoint) {
                if (currPoint.x >= _this.frameXMin && currPoint.x <= _this.frameXMax) {
                    filtered.push(currPoint);
                }
                else if (prevPoint && currPoint.x - prevPoint.x >= _this.frameXMax - _this.frameXMin) {
                    // this is for the case when frame borders are between 2 points. We just push those points
                    filtered.push(prevPoint);
                    filtered.push(currPoint);
                }
                return currPoint;
            }, null);
            return filtered;
        });
        var yMin = Math.min.apply(Math, stripedChartsPoints.map(function (points) { return Math.min.apply(Math, points.map(function (val) { return val.y; })); }));
        var yMax = Math.max.apply(Math, stripedChartsPoints.map(function (points) { return Math.max.apply(Math, points.map(function (val) { return val.y; })); }));
        if (typeof this.yMin === 'undefined')
            this.yMin = yMin;
        if (typeof this.yMax === 'undefined')
            this.yMax = yMax;
        if (!this.yMinAnimation) {
            this.yMinAnimation = new _Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"](this.yMin, yMin, 150, function (currentYMin) {
                _this.yMin = currentYMin;
                _this.coefY = _this.height / Math.abs(_this.yMax - _this.yMin);
                drawCharts();
            });
            this.yMinAnimation.tick().then(function () {
                _this.yMinAnimation = null;
            });
        }
        if (!this.yMaxAnimation) {
            this.yMaxAnimation = new _Animation__WEBPACK_IMPORTED_MODULE_0__["Animation"](this.yMax, yMax, 150, function (currentYMax) {
                _this.yMax = currentYMax;
                _this.coefY = _this.height / Math.abs(_this.yMax - _this.yMin);
                drawCharts();
            });
            this.yMaxAnimation.tick().then(function () {
                _this.yMaxAnimation = null;
            });
        }
        var drawCharts = function () {
            _this.ctx.clearRect(0, 0, _this.width, _this.height);
            _this.linearCharts.forEach(function (ch) {
                ch.xMin = _this.frameXMin;
                ch.yMin = _this.yMin;
                ch.coefX = _this.coefX;
                ch.coefY = _this.coefY;
                ch.draw(_this.ctx);
            });
        };
    };
    return LinearDrawer;
}());



/***/ }),

/***/ "./src/models/ShaurmaCharts.ts":
/*!*************************************!*\
  !*** ./src/models/ShaurmaCharts.ts ***!
  \*************************************/
/*! exports provided: ShaurmaCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaurmaCharts", function() { return ShaurmaCharts; });
/* harmony import */ var _LinearChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearChart */ "./src/models/LinearChart.ts");
/* harmony import */ var _LinearDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearDrawer */ "./src/models/LinearDrawer.ts");


var ShaurmaCharts = /** @class */ (function () {
    function ShaurmaCharts(wrapperElement, options) {
        var _this = this;
        this.wrapperElement = wrapperElement;
        this.chartsCanvasId = 'shaurma-charts-charts-canvas';
        this.frameCanvasId = 'shaurma-charts-frame-canvas';
        this.mousedownEventTarget = null;
        this.defaults = {
            width: 500,
            height: 300
        };
        this.options = {};
        for (var _i = 0, _a = Object.keys(this.defaults); _i < _a.length; _i++) {
            var key = _a[_i];
            this.options[key] = options ? options[key] || this.defaults[key] : this.defaults[key];
        }
        wrapperElement.innerHTML = "\n      <div class=\"shaurma-charts-charts-wrapper\">\n        <canvas id=\"" + this.chartsCanvasId + "\" width=\"" + this.options.width + "\" height=\"" + this.options.height + "\"></canvas>\n      </div>\n      <div class=\"shaurma-charts-frame-editor\">\n        <div class=\"shaurma-charts-frame-wrapper\">\n          <div class=\"shaurma-charts-frame\">\n            <div class=\"shaurma-charts-frame-left-control\"></div>\n            <div class=\"shaurma-charts-frame-right-control\"></div>\n          </div>\n        </div>\n        <canvas id=\"" + this.frameCanvasId + "\" width=\"" + this.options.width + "\" height=\"100\"></canvas>\n      </div>\n    ";
        var chartsElement = document.getElementById(this.chartsCanvasId);
        this.chartsCtx = chartsElement.getContext('2d');
        document.querySelectorAll('.shaurma-charts-charts-wrapper, .shaurma-charts-frame-editor').forEach(function (el) {
            el.style.width = _this.options.width + "px";
        });
        var frameElement = document.getElementById(this.frameCanvasId);
        this.frameCtx = frameElement.getContext('2d');
        this.leftCurtain = document.querySelector('.shaurma-charts-frame-left-control');
        this.rightCurtain = document.querySelector('.shaurma-charts-frame-right-control');
        this.frame = document.querySelector('.shaurma-charts-frame');
        this.frameParent = document.querySelector('.shaurma-charts-frame-wrapper');
        this.frame.style.left = '50px';
        this.frame.style.width = '25%';
        this.calculateEdges();
        this.chartsCtx.translate(0, this.options.height);
        this.chartsCtx.scale(1, -1);
        this.frameCtx.translate(0, 100);
        this.frameCtx.scale(1, -1);
        this.initEventListeners();
        this.chartslinearDrawer = new _LinearDrawer__WEBPACK_IMPORTED_MODULE_1__["LinearDrawer"](this.chartsCtx, this.options.width, this.options.height, this.left, this.right);
        this.frameLinearDrawer = new _LinearDrawer__WEBPACK_IMPORTED_MODULE_1__["LinearDrawer"](this.frameCtx, this.options.width, 100, 0, this.options.width);
    }
    ShaurmaCharts.prototype.initEventListeners = function () {
        var _this = this;
        document.addEventListener('mousedown', function (event) {
            _this.mousedownEventTarget = event.target;
        });
        document.addEventListener('mouseup', function () {
            _this.mousedownEventTarget = null;
        });
        document.addEventListener('mousemove', function (event) {
            var button = event.buttons;
            if (typeof button !== 'undefined') {
                button = event.buttons;
            }
            else {
                button = 0;
            }
            var parentWidth = _this.frameParent.getBoundingClientRect().width;
            if (button === 1) { // lmb
                if (_this.mousedownEventTarget) {
                    var oldFrameLeftPosition = _this.frame.offsetLeft;
                    var oldFrameWidth = _this.frame.getBoundingClientRect().width;
                    var oldFrameRightPosition = oldFrameLeftPosition + oldFrameWidth;
                    var newFrameLeftPosition = void 0;
                    var newFrameWidth = void 0;
                    if (_this.mousedownEventTarget === _this.leftCurtain) {
                        newFrameLeftPosition = Math.min(Math.max(0, oldFrameLeftPosition + event.movementX), oldFrameRightPosition);
                        newFrameWidth = oldFrameWidth + (oldFrameLeftPosition - newFrameLeftPosition);
                    }
                    else if (_this.mousedownEventTarget === _this.rightCurtain) {
                        newFrameLeftPosition = oldFrameLeftPosition;
                        newFrameWidth = Math.max(0, oldFrameWidth + event.movementX);
                        newFrameWidth = Math.min(newFrameWidth, parentWidth - newFrameLeftPosition);
                    }
                    else if (_this.mousedownEventTarget === _this.frame) {
                        newFrameWidth = oldFrameWidth;
                        newFrameLeftPosition = Math.min(Math.max(0, oldFrameLeftPosition + event.movementX), parentWidth - newFrameWidth);
                    }
                    _this.frame.style.left = newFrameLeftPosition + "px";
                    _this.frame.style.width = newFrameWidth + "px";
                    _this.calculateEdges();
                    _this.chartslinearDrawer.updateBorders(_this.left, _this.right);
                }
            }
            else {
                _this.mousedownEventTarget = null; // detach the element. This is for the case when we made mouseup outside the document (e.g. browser window)
            }
        });
    };
    ShaurmaCharts.prototype.addChart = function (points, color) {
        var chart = new _LinearChart__WEBPACK_IMPORTED_MODULE_0__["LinearChart"](points, color);
        this.chartslinearDrawer.addChart(chart);
        this.frameLinearDrawer.addChart(chart);
    };
    ShaurmaCharts.prototype.calculateEdges = function () {
        this.left = this.frame.offsetLeft;
        this.right = this.frame.offsetLeft + this.frame.clientWidth;
    };
    return ShaurmaCharts;
}());



/***/ }),

/***/ "./src/styles/shaurma.css":
/*!********************************!*\
  !*** ./src/styles/shaurma.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./shaurma.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/shaurma.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3NoYXVybWEuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xpbmVhckNoYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTGluZWFyRHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvU2hhdXJtYUNoYXJ0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3NoYXVybWEuY3NzPzFiMTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIs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VSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztJQUM3RCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0lELGNBQWMsbUJBQU8sQ0FBQyxnSUFBMkQ7O0FBRWpGO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNKQUEyRTs7QUFFaEc7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFpbi50c1wiKTtcbiIsImltcG9ydCAnLi9zcmMvaW5kZXgnIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiAqIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLC4yKTsgfVxcbiogKiB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwuMik7IH1cXG4qICogKiB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDI1NSwuMik7IH1cXG4qICogKiAqIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwyNTUsLjIpOyB9XFxuKiAqICogKiAqIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDI1NSwyNTUsLjIpOyB9XFxuKiAqICogKiAqICogeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwuMik7IH1cXG4qICogKiAqICogKiAqIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMCwwLC4yKTsgfVxcbiogKiAqICogKiAqICogKiB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwyNTUsMCwuMik7IH1cXG4qICogKiAqICogKiAqICogKiB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDI1NSwuMik7IH0gKi9cXG5cXG4uc2hhdXJtYS1jaGFydHMtY2hhcnRzLXdyYXBwZXIsIC5zaGF1cm1hLWNoYXJ0cy1mcmFtZS1lZGl0b3Ige1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2hhdXJtYS1jaGFydHMtZnJhbWUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2hhdXJtYS1jaGFydHMtZnJhbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICBib3R0b206IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDk5OTk5cHggcmdiYSgwLCAwLCAwLCAuMyk7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5zaGF1cm1hLWNoYXJ0cy1mcmFtZS1sZWZ0LWNvbnRyb2wsIC5zaGF1cm1hLWNoYXJ0cy1mcmFtZS1yaWdodC1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1cHg7XFxuICBjdXJzb3I6IGNvbC1yZXNpemU7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTE0LCAxNDAsIDIyOCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5zaGF1cm1hLWNoYXJ0cy1mcmFtZS1sZWZ0LWNvbnRyb2wge1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuLnNoYXVybWEtY2hhcnRzLWZyYW1lLXJpZ2h0LWNvbnRyb2wge1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zaGF1cm1hLmNzcydcbmltcG9ydCB7IFNoYXVybWFDaGFydHMgfSBmcm9tICcuL21vZGVscy9TaGF1cm1hQ2hhcnRzJ1xuXG5jb25zdCBkYXRhMSA9IHJlcXVpcmUoJy4vZGF0YTEuanNvbicpXG5jb25zdCBkYXRhMiA9IHJlcXVpcmUoJy4vZGF0YTIuanNvbicpXG5cbmNvbnN0IHdyYXBwZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0cy13cmFwcGVyJylcbmNvbnN0IHNoYXVybWE6IFNoYXVybWFDaGFydHMgPSBuZXcgU2hhdXJtYUNoYXJ0cyh3cmFwcGVyLCB7IHdpZHRoOiA3MDAgfSlcblxuc2hhdXJtYS5hZGRDaGFydChkYXRhMS5wb2ludHMsICdibHVlJylcbnNoYXVybWEuYWRkQ2hhcnQoZGF0YTIucG9pbnRzLCAncmVkJylcbiIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyXG4gIHByaXZhdGUgbGFzdFZhbHVlOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBzdGFydFZhbHVlOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBlbmRWYWx1ZTogbnVtYmVyLFxuICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlcixcbiAgICBwcml2YXRlIG9uU3RlcENvbXBsZXRlZDogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRcbiAgKSB7fVxuXG4gIHB1YmxpYyB0aWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5zdGFydFRpbWUpIHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnkpID0+IHtcblxuICAgICAgY29uc3QgcnVuQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudFRpbWVQaGF6ZSA9IE1hdGgubWluKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUsIHRoaXMuZHVyYXRpb24pXG4gICAgICAgIGNvbnN0IHRpbWVGcmFjdGlvbiA9IGN1cnJlbnRUaW1lUGhhemUgLyB0aGlzLmR1cmF0aW9uXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRQcm9ncmVzcyh0aW1lRnJhY3Rpb24pIC8vIG1vZGlmeSB0aW1lRnJhY3Rpb24gaW4gdGhlIHJhbmdlIFswLCAxXVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuc3RhcnRWYWx1ZSArICh0aGlzLmVuZFZhbHVlIC0gdGhpcy5zdGFydFZhbHVlKSAqIHByb2dyZXNzXG4gICAgICAgIGlmIChjdXJyZW50VGltZVBoYXplIDw9IHRoaXMuZHVyYXRpb24gJiYgdGhpcy5sYXN0VmFsdWUgIT09IHRoaXMuZW5kVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmxhc3RWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgICAgICAgdGhpcy5vblN0ZXBDb21wbGV0ZWQobmV3VmFsdWUpXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJ1bkFuaW1hdGlvbigpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBydW5BbmltYXRpb24oKSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9ncmVzcyh0aW1lRnJhY3Rpb246IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGltZUZyYWN0aW9uKVxuICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgTGluZWFyQ2hhcnQgaW1wbGVtZW50cyBJRHJhd2FibGVPYmplY3Qge1xuXG4gIHByaXZhdGUgb3BhY2l0eTogbnVtYmVyID0gMVxuICBwdWJsaWMgY29lZlg6IG51bWJlclxuICBwdWJsaWMgY29lZlk6IG51bWJlclxuICBwdWJsaWMgeE1pbjogbnVtYmVyXG4gIHB1YmxpYyB5TWluOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcG9pbnRzOiBJUG9pbnRbXSxcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmcgPSAnZ3JlZW4nXG4gICkge31cblxuICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JcbiAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwb2ludDogSVBvaW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB4ID0gKHBvaW50LnggLSB0aGlzLnhNaW4pICogdGhpcy5jb2VmWFxuICAgICAgY29uc3QgeSA9IChwb2ludC55IC0gdGhpcy55TWluKSAqIHRoaXMuY29lZllcbiAgICAgIC8vIGRyYXdcbiAgICAgIGluZGV4ICE9PSAwID8gY3R4LmxpbmVUbyh4LCB5KSA6IGN0eC5tb3ZlVG8oeCwgeSlcbiAgICB9KVxuICAgIGN0eC5zdHJva2UoKVxuICB9XG59IiwiaW1wb3J0IHsgTGluZWFyQ2hhcnQgfSBmcm9tIFwiLi9MaW5lYXJDaGFydFwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBMaW5lYXJEcmF3ZXIge1xuICBwdWJsaWMgbGluZWFyQ2hhcnRzOiBMaW5lYXJDaGFydFtdID0gW11cblxuICBwdWJsaWMgeE1pbjogbnVtYmVyXG4gIHB1YmxpYyB5TWluOiBudW1iZXJcbiAgcHVibGljIHhNYXg6IG51bWJlclxuICBwdWJsaWMgeU1heDogbnVtYmVyXG5cbiAgcHJpdmF0ZSBjb2VmWDogbnVtYmVyXG4gIHByaXZhdGUgY29lZlk6IG51bWJlclxuXG4gIHByaXZhdGUgZnJhbWVYTWluOiBudW1iZXJcbiAgcHJpdmF0ZSBmcmFtZVhNYXg6IG51bWJlclxuXG4gIHByaXZhdGUgeU1heEFuaW1hdGlvbjogQW5pbWF0aW9uID0gbnVsbFxuICBwcml2YXRlIHlNaW5BbmltYXRpb246IEFuaW1hdGlvbiA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcixcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyLFxuICAgIHByaXZhdGUgbGVmdDogbnVtYmVyLFxuICAgIHByaXZhdGUgcmlnaHQ6IG51bWJlclxuICApIHsgfVxuXG4gIGFkZENoYXJ0KGNoYXJ0OiBMaW5lYXJDaGFydCkge1xuICAgIHRoaXMubGluZWFyQ2hhcnRzLnB1c2goY2hhcnQpXG4gICAgdGhpcy5kcmF3QWxsKClcbiAgfVxuXG4gIHVwZGF0ZUJvcmRlcnMobGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdFxuICAgIHRoaXMucmlnaHQgPSByaWdodFxuICAgIHRoaXMuZHJhd0FsbCgpXG4gIH1cblxuICBwcml2YXRlIGRyYXdBbGwoKSB7XG4gICAgLy8geFxuICAgIHRoaXMueE1pbiA9IE1hdGgubWluKC4uLnRoaXMubGluZWFyQ2hhcnRzLm1hcCgoY2hhcnQ6IExpbmVhckNoYXJ0KSA9PiBNYXRoLm1pbiguLi5jaGFydC5wb2ludHMubWFwKHZhbCA9PiB2YWwueCkpKSlcbiAgICB0aGlzLnhNYXggPSBNYXRoLm1heCguLi50aGlzLmxpbmVhckNoYXJ0cy5tYXAoKGNoYXJ0OiBMaW5lYXJDaGFydCkgPT4gTWF0aC5tYXgoLi4uY2hhcnQucG9pbnRzLm1hcCh2YWwgPT4gdmFsLngpKSkpXG4gICAgY29uc3QgcG9pbnRzWEF4aXNMZW5ndGggPSBNYXRoLmFicyh0aGlzLnhNYXggLSB0aGlzLnhNaW4pXG5cbiAgICB0aGlzLmZyYW1lWE1pbiA9IHRoaXMueE1pbiArIHRoaXMubGVmdCAvIHRoaXMud2lkdGggKiBwb2ludHNYQXhpc0xlbmd0aFxuICAgIHRoaXMuZnJhbWVYTWF4ID0gdGhpcy54TWluICsgdGhpcy5yaWdodCAvIHRoaXMud2lkdGggKiBwb2ludHNYQXhpc0xlbmd0aFxuXG4gICAgdGhpcy5jb2VmWCA9IHRoaXMud2lkdGggLyBNYXRoLmFicyh0aGlzLmZyYW1lWE1heCAtIHRoaXMuZnJhbWVYTWluKVxuXG4gICAgLy8geVxuICAgIGNvbnN0IHN0cmlwZWRDaGFydHNQb2ludHM6IElQb2ludFtdW10gPSB0aGlzLmxpbmVhckNoYXJ0cy5tYXAoKGNoYXJ0OiBMaW5lYXJDaGFydCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWQ6IElQb2ludFtdID0gW11cblxuICAgICAgY2hhcnQucG9pbnRzLnJlZHVjZShcbiAgICAgICAgKHByZXZQb2ludDogSVBvaW50LCBjdXJyUG9pbnQ6IElQb2ludCkgPT4ge1xuICAgICAgICAgIGlmIChjdXJyUG9pbnQueCA+PSB0aGlzLmZyYW1lWE1pbiAmJiBjdXJyUG9pbnQueCA8PSB0aGlzLmZyYW1lWE1heCkge1xuICAgICAgICAgICAgZmlsdGVyZWQucHVzaChjdXJyUG9pbnQpXG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2UG9pbnQgJiYgY3VyclBvaW50LnggLSBwcmV2UG9pbnQueCA+PSB0aGlzLmZyYW1lWE1heCAtIHRoaXMuZnJhbWVYTWluKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGZvciB0aGUgY2FzZSB3aGVuIGZyYW1lIGJvcmRlcnMgYXJlIGJldHdlZW4gMiBwb2ludHMuIFdlIGp1c3QgcHVzaCB0aG9zZSBwb2ludHNcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gocHJldlBvaW50KVxuICAgICAgICAgICAgZmlsdGVyZWQucHVzaChjdXJyUG9pbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXJyUG9pbnRcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZmlsdGVyZWRcbiAgICB9KVxuXG4gICAgY29uc3QgeU1pbiA9IE1hdGgubWluKC4uLnN0cmlwZWRDaGFydHNQb2ludHMubWFwKChwb2ludHM6IElQb2ludFtdKSA9PiBNYXRoLm1pbiguLi5wb2ludHMubWFwKHZhbCA9PiB2YWwueSkpKSlcbiAgICBjb25zdCB5TWF4ID0gTWF0aC5tYXgoLi4uc3RyaXBlZENoYXJ0c1BvaW50cy5tYXAoKHBvaW50czogSVBvaW50W10pID0+IE1hdGgubWF4KC4uLnBvaW50cy5tYXAodmFsID0+IHZhbC55KSkpKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnlNaW4gPT09ICd1bmRlZmluZWQnKSB0aGlzLnlNaW4gPSB5TWluXG4gICAgaWYgKHR5cGVvZiB0aGlzLnlNYXggPT09ICd1bmRlZmluZWQnKSB0aGlzLnlNYXggPSB5TWF4XG5cbiAgICBpZiAoIXRoaXMueU1pbkFuaW1hdGlvbikge1xuICAgICAgdGhpcy55TWluQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbih0aGlzLnlNaW4sIHlNaW4sIDE1MCwgKGN1cnJlbnRZTWluOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy55TWluID0gY3VycmVudFlNaW5cbiAgICAgICAgdGhpcy5jb2VmWSA9IHRoaXMuaGVpZ2h0IC8gTWF0aC5hYnModGhpcy55TWF4IC0gdGhpcy55TWluKVxuICAgICAgICBkcmF3Q2hhcnRzKClcbiAgICAgIH0pXG4gICAgICB0aGlzLnlNaW5BbmltYXRpb24udGljaygpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnlNaW5BbmltYXRpb24gPSBudWxsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghdGhpcy55TWF4QW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLnlNYXhBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKHRoaXMueU1heCwgeU1heCwgMTUwLCAoY3VycmVudFlNYXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLnlNYXggPSBjdXJyZW50WU1heFxuICAgICAgICB0aGlzLmNvZWZZID0gdGhpcy5oZWlnaHQgLyBNYXRoLmFicyh0aGlzLnlNYXggLSB0aGlzLnlNaW4pXG4gICAgICAgIGRyYXdDaGFydHMoKVxuICAgICAgfSlcbiAgICAgIHRoaXMueU1heEFuaW1hdGlvbi50aWNrKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMueU1heEFuaW1hdGlvbiA9IG51bGxcbiAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCBkcmF3Q2hhcnRzID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgdGhpcy5saW5lYXJDaGFydHMuZm9yRWFjaCgoY2g6IExpbmVhckNoYXJ0KSA9PiB7XG4gICAgICAgIGNoLnhNaW4gPSB0aGlzLmZyYW1lWE1pblxuICAgICAgICBjaC55TWluID0gdGhpcy55TWluXG4gICAgICAgIGNoLmNvZWZYID0gdGhpcy5jb2VmWFxuICAgICAgICBjaC5jb2VmWSA9IHRoaXMuY29lZllcblxuICAgICAgICBjaC5kcmF3KHRoaXMuY3R4KVxuICAgICAgfSlcbiAgICB9XG5cblxuICB9XG59IiwiaW1wb3J0IHsgTGluZWFyQ2hhcnQgfSBmcm9tIFwiLi9MaW5lYXJDaGFydFwiO1xuaW1wb3J0IHsgTGluZWFyRHJhd2VyIH0gZnJvbSBcIi4vTGluZWFyRHJhd2VyXCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFNoYXVybWFDaGFydHMge1xuICBwcml2YXRlIHJlYWRvbmx5IGNoYXJ0c0NhbnZhc0lkID0gJ3NoYXVybWEtY2hhcnRzLWNoYXJ0cy1jYW52YXMnXG4gIHByaXZhdGUgcmVhZG9ubHkgZnJhbWVDYW52YXNJZCA9ICdzaGF1cm1hLWNoYXJ0cy1mcmFtZS1jYW52YXMnXG4gIHByaXZhdGUgY2hhcnRzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgcHJpdmF0ZSBmcmFtZUN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG5cbiAgcHJpdmF0ZSBtb3VzZWRvd25FdmVudFRhcmdldDogSFRNTEVsZW1lbnQgPSBudWxsXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsZWZ0Q3VydGFpbjogSFRNTEVsZW1lbnRcbiAgcHJpdmF0ZSByZWFkb25seSByaWdodEN1cnRhaW46IEhUTUxFbGVtZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgZnJhbWU6IEhUTUxFbGVtZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgZnJhbWVQYXJlbnQ6IEhUTUxFbGVtZW50XG5cbiAgcHJpdmF0ZSBsZWZ0OiBudW1iZXJcbiAgcHJpdmF0ZSByaWdodDogbnVtYmVyXG5cbiAgcHJpdmF0ZSBjaGFydHNsaW5lYXJEcmF3ZXI6IExpbmVhckRyYXdlclxuICBwcml2YXRlIGZyYW1lTGluZWFyRHJhd2VyOiBMaW5lYXJEcmF3ZXJcblxuICBwcml2YXRlIGRlZmF1bHRzOiBJU2hhdXJtYU9wdGlvbnMgPSB7XG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDMwMFxuICB9XG4gIHByaXZhdGUgb3B0aW9uczogSVNoYXVybWFPcHRpb25zID0ge30gYXMgSVNoYXVybWFPcHRpb25zXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB3cmFwcGVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8SVNoYXVybWFPcHRpb25zPlxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRzKSkge1xuICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zID8gb3B0aW9uc1trZXldIHx8IHRoaXMuZGVmYXVsdHNba2V5XSA6IHRoaXMuZGVmYXVsdHNba2V5XVxuICAgIH1cblxuICAgIHdyYXBwZXJFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzaGF1cm1hLWNoYXJ0cy1jaGFydHMtd3JhcHBlclwiPlxuICAgICAgICA8Y2FudmFzIGlkPVwiJHt0aGlzLmNoYXJ0c0NhbnZhc0lkfVwiIHdpZHRoPVwiJHt0aGlzLm9wdGlvbnMud2lkdGh9XCIgaGVpZ2h0PVwiJHt0aGlzLm9wdGlvbnMuaGVpZ2h0fVwiPjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2hhdXJtYS1jaGFydHMtZnJhbWUtZWRpdG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGF1cm1hLWNoYXJ0cy1mcmFtZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNoYXVybWEtY2hhcnRzLWZyYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hhdXJtYS1jaGFydHMtZnJhbWUtbGVmdC1jb250cm9sXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hhdXJtYS1jaGFydHMtZnJhbWUtcmlnaHQtY29udHJvbFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNhbnZhcyBpZD1cIiR7dGhpcy5mcmFtZUNhbnZhc0lkfVwiIHdpZHRoPVwiJHt0aGlzLm9wdGlvbnMud2lkdGh9XCIgaGVpZ2h0PVwiMTAwXCI+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgY29uc3QgY2hhcnRzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNoYXJ0c0NhbnZhc0lkKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHRoaXMuY2hhcnRzQ3R4ID0gY2hhcnRzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGF1cm1hLWNoYXJ0cy1jaGFydHMtd3JhcHBlciwgLnNoYXVybWEtY2hhcnRzLWZyYW1lLWVkaXRvcicpLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgZWwuc3R5bGUud2lkdGggPSBgJHt0aGlzLm9wdGlvbnMud2lkdGh9cHhgXG4gICAgfSlcblxuICAgIGNvbnN0IGZyYW1lRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZyYW1lQ2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgdGhpcy5mcmFtZUN0eCA9IGZyYW1lRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5sZWZ0Q3VydGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGF1cm1hLWNoYXJ0cy1mcmFtZS1sZWZ0LWNvbnRyb2wnKVxuICAgIHRoaXMucmlnaHRDdXJ0YWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoYXVybWEtY2hhcnRzLWZyYW1lLXJpZ2h0LWNvbnRyb2wnKVxuICAgIHRoaXMuZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhdXJtYS1jaGFydHMtZnJhbWUnKVxuICAgIHRoaXMuZnJhbWVQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hhdXJtYS1jaGFydHMtZnJhbWUtd3JhcHBlcicpXG5cbiAgICB0aGlzLmZyYW1lLnN0eWxlLmxlZnQgPSAnNTBweCdcbiAgICB0aGlzLmZyYW1lLnN0eWxlLndpZHRoID0gJzI1JSdcbiAgICB0aGlzLmNhbGN1bGF0ZUVkZ2VzKClcblxuICAgIHRoaXMuY2hhcnRzQ3R4LnRyYW5zbGF0ZSgwLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KVxuICAgIHRoaXMuY2hhcnRzQ3R4LnNjYWxlKDEsIC0xKVxuXG4gICAgdGhpcy5mcmFtZUN0eC50cmFuc2xhdGUoMCwgMTAwKVxuICAgIHRoaXMuZnJhbWVDdHguc2NhbGUoMSwgLTEpXG5cbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpXG5cbiAgICB0aGlzLmNoYXJ0c2xpbmVhckRyYXdlciA9IG5ldyBMaW5lYXJEcmF3ZXIodGhpcy5jaGFydHNDdHgsIHRoaXMub3B0aW9ucy53aWR0aCwgdGhpcy5vcHRpb25zLmhlaWdodCwgdGhpcy5sZWZ0LCB0aGlzLnJpZ2h0KVxuXG4gICAgdGhpcy5mcmFtZUxpbmVhckRyYXdlciA9IG5ldyBMaW5lYXJEcmF3ZXIodGhpcy5mcmFtZUN0eCwgdGhpcy5vcHRpb25zLndpZHRoLCAxMDAsIDAsIHRoaXMub3B0aW9ucy53aWR0aClcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZWRvd25FdmVudFRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZWRvd25FdmVudFRhcmdldCA9IG51bGxcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgYnV0dG9uOiBudW1iZXIgPSBldmVudC5idXR0b25zXG4gICAgICBpZiAodHlwZW9mIGJ1dHRvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYnV0dG9uID0gZXZlbnQuYnV0dG9uc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uID0gMFxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHRoaXMuZnJhbWVQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcblxuICAgICAgaWYgKGJ1dHRvbiA9PT0gMSkgeyAvLyBsbWJcbiAgICAgICAgaWYgKHRoaXMubW91c2Vkb3duRXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBvbGRGcmFtZUxlZnRQb3NpdGlvbiA9IHRoaXMuZnJhbWUub2Zmc2V0TGVmdFxuICAgICAgICAgIGNvbnN0IG9sZEZyYW1lV2lkdGggPSB0aGlzLmZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgICAgICAgY29uc3Qgb2xkRnJhbWVSaWdodFBvc2l0aW9uID0gb2xkRnJhbWVMZWZ0UG9zaXRpb24gKyBvbGRGcmFtZVdpZHRoXG5cbiAgICAgICAgICBsZXQgbmV3RnJhbWVMZWZ0UG9zaXRpb25cbiAgICAgICAgICBsZXQgbmV3RnJhbWVXaWR0aFxuXG4gICAgICAgICAgaWYgKHRoaXMubW91c2Vkb3duRXZlbnRUYXJnZXQgPT09IHRoaXMubGVmdEN1cnRhaW4pIHtcbiAgICAgICAgICAgIG5ld0ZyYW1lTGVmdFBvc2l0aW9uID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgb2xkRnJhbWVMZWZ0UG9zaXRpb24gKyBldmVudC5tb3ZlbWVudFgpLCBvbGRGcmFtZVJpZ2h0UG9zaXRpb24pXG4gICAgICAgICAgICBuZXdGcmFtZVdpZHRoID0gb2xkRnJhbWVXaWR0aCArIChvbGRGcmFtZUxlZnRQb3NpdGlvbiAtIG5ld0ZyYW1lTGVmdFBvc2l0aW9uKVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3VzZWRvd25FdmVudFRhcmdldCA9PT0gdGhpcy5yaWdodEN1cnRhaW4pIHtcbiAgICAgICAgICAgIG5ld0ZyYW1lTGVmdFBvc2l0aW9uID0gb2xkRnJhbWVMZWZ0UG9zaXRpb25cbiAgICAgICAgICAgIG5ld0ZyYW1lV2lkdGggPSBNYXRoLm1heCgwLCBvbGRGcmFtZVdpZHRoICsgZXZlbnQubW92ZW1lbnRYKVxuICAgICAgICAgICAgbmV3RnJhbWVXaWR0aCA9IE1hdGgubWluKG5ld0ZyYW1lV2lkdGgsIHBhcmVudFdpZHRoIC0gbmV3RnJhbWVMZWZ0UG9zaXRpb24pXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdXNlZG93bkV2ZW50VGFyZ2V0ID09PSB0aGlzLmZyYW1lKSB7XG4gICAgICAgICAgICBuZXdGcmFtZVdpZHRoID0gb2xkRnJhbWVXaWR0aFxuICAgICAgICAgICAgbmV3RnJhbWVMZWZ0UG9zaXRpb24gPSBNYXRoLm1pbihNYXRoLm1heCgwLCBvbGRGcmFtZUxlZnRQb3NpdGlvbiArIGV2ZW50Lm1vdmVtZW50WCksIHBhcmVudFdpZHRoIC0gbmV3RnJhbWVXaWR0aClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmZyYW1lLnN0eWxlLmxlZnQgPSBgJHtuZXdGcmFtZUxlZnRQb3NpdGlvbn1weGBcbiAgICAgICAgICB0aGlzLmZyYW1lLnN0eWxlLndpZHRoID0gYCR7bmV3RnJhbWVXaWR0aH1weGBcblxuICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRWRnZXMoKVxuICAgICAgICAgIHRoaXMuY2hhcnRzbGluZWFyRHJhd2VyLnVwZGF0ZUJvcmRlcnModGhpcy5sZWZ0LCB0aGlzLnJpZ2h0KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdXNlZG93bkV2ZW50VGFyZ2V0ID0gbnVsbCAvLyBkZXRhY2ggdGhlIGVsZW1lbnQuIFRoaXMgaXMgZm9yIHRoZSBjYXNlIHdoZW4gd2UgbWFkZSBtb3VzZXVwIG91dHNpZGUgdGhlIGRvY3VtZW50IChlLmcuIGJyb3dzZXIgd2luZG93KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYWRkQ2hhcnQocG9pbnRzOiBJUG9pbnRbXSwgY29sb3I6IHN0cmluZykge1xuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IExpbmVhckNoYXJ0KHBvaW50cywgY29sb3IpXG4gICAgdGhpcy5jaGFydHNsaW5lYXJEcmF3ZXIuYWRkQ2hhcnQoY2hhcnQpXG4gICAgdGhpcy5mcmFtZUxpbmVhckRyYXdlci5hZGRDaGFydChjaGFydClcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlRWRnZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5mcmFtZS5vZmZzZXRMZWZ0XG4gICAgdGhpcy5yaWdodCA9IHRoaXMuZnJhbWUub2Zmc2V0TGVmdCArIHRoaXMuZnJhbWUuY2xpZW50V2lkdGhcbiAgfVxufSIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGF1cm1hLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
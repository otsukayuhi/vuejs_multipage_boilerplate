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
/******/ 		"sfc": 0
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
/******/ 	deferredModules.push(["./src/ts/entries/sfc.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/sfc/pages/sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--0-2!./node_modules/sass-loader/lib/loader.js??ref--0-3!./node_modules/vue-loader/lib??vue-loader-options!./src/sfc/pages/sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/sfc/pages/sfc.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/sfc/pages/sfc.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.common.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_class_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ts_modules_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ts/modules/log */ "./src/ts/modules/log.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var sfc = /** @class */ (function (_super) {
    __extends(sfc, _super);
    function sfc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = 'SFC';
        return _this;
    }
    sfc.prototype.created = function () {
        var LOG = new _ts_modules_log__WEBPACK_IMPORTED_MODULE_2__["default"]({
            message: this.message
        });
        LOG.init();
    };
    ;
    sfc = __decorate([
        vue_class_component__WEBPACK_IMPORTED_MODULE_1___default()({})
    ], sfc);
    return sfc;
}(vue__WEBPACK_IMPORTED_MODULE_0___default.a));
/* harmony default export */ __webpack_exports__["default"] = (sfc);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/sfc/pages/sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/sfc/pages/sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "l-main" }, [
    _vm._m(0),
    _c("div", { staticClass: "l-section" }, [
      _c("h2", { staticClass: "l-section-ttl" }, [
        _vm._v(_vm._s(_vm.message) + " Page")
      ]),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sfc-Mv" }, [
      _c("picture", [
        _c("source", {
          attrs: {
            media: "(min-width: 768px)",
            srcset: "/assets/img/sfc/_dummy_lg.jpg"
          }
        }),
        _c("img", { attrs: { src: "/assets/img/sfc/_dummy_sm.jpg" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "sfc-List" }, [
      _c("li", { staticClass: "sfc-Item" }, [
        _c("img", {
          staticClass: "lazyload",
          attrs: { "data-src": "/assets/img/sfc/lazy_001.png", alt: "邪気眼" }
        })
      ]),
      _c("li", { staticClass: "sfc-Item" }, [
        _c("img", {
          staticClass: "lazyload",
          attrs: { "data-src": "/assets/img/sfc/lazy_002.png", alt: "鳥" }
        })
      ]),
      _c("li", { staticClass: "sfc-Item" }, [
        _c("img", {
          staticClass: "lazyload",
          attrs: { "data-src": "/assets/img/sfc/lazy_003.png", alt: "二世" }
        })
      ]),
      _c("li", { staticClass: "sfc-Item" }, [
        _c("img", {
          staticClass: "lazyload",
          attrs: { "data-src": "/assets/img/sfc/lazy_004.png", alt: "相打ち" }
        })
      ]),
      _c("li", { staticClass: "sfc-Item" }, [
        _c("img", {
          staticClass: "lazyload",
          attrs: {
            "data-src": "/assets/img/sfc/lazy_005.png",
            alt: "マッド・サイエンティスト"
          }
        })
      ]),
      _c("li", { staticClass: "sfc-Item" }, [
        _c("img", {
          staticClass: "lazyload",
          attrs: { "data-src": "/assets/img/sfc/lazy_006.png", alt: "ガチャ" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/sfc/pages/sfc.vue":
/*!*******************************!*\
  !*** ./src/sfc/pages/sfc.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sfc_vue_vue_type_template_id_7c1cd6bd_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug& */ "./src/sfc/pages/sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug&");
/* harmony import */ var _sfc_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sfc.vue?vue&type=script&lang=ts& */ "./src/sfc/pages/sfc.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _sfc_vue_vue_type_style_index_0_id_7c1cd6bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true& */ "./src/sfc/pages/sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sfc_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sfc_vue_vue_type_template_id_7c1cd6bd_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sfc_vue_vue_type_template_id_7c1cd6bd_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c1cd6bd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/sfc/pages/sfc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/sfc/pages/sfc.vue?vue&type=script&lang=ts&":
/*!********************************************************!*\
  !*** ./src/sfc/pages/sfc.vue?vue&type=script&lang=ts& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--2!../../../node_modules/vue-loader/lib??vue-loader-options!./sfc.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/sfc/pages/sfc.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/sfc/pages/sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/sfc/pages/sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_0_2_node_modules_sass_loader_lib_loader_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_style_index_0_id_7c1cd6bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader??ref--0-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--0-2!../../../node_modules/sass-loader/lib/loader.js??ref--0-3!../../../node_modules/vue-loader/lib??vue-loader-options!./sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./src/sfc/pages/sfc.vue?vue&type=style&index=0&id=7c1cd6bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_0_2_node_modules_sass_loader_lib_loader_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_style_index_0_id_7c1cd6bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_0_2_node_modules_sass_loader_lib_loader_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_style_index_0_id_7c1cd6bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_0_2_node_modules_sass_loader_lib_loader_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_style_index_0_id_7c1cd6bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_0_2_node_modules_sass_loader_lib_loader_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_style_index_0_id_7c1cd6bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_0_2_node_modules_sass_loader_lib_loader_js_ref_0_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_style_index_0_id_7c1cd6bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/sfc/pages/sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug&":
/*!***********************************************************************************!*\
  !*** ./src/sfc/pages/sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_template_id_7c1cd6bd_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/pug-plain-loader!../../../node_modules/vue-loader/lib??vue-loader-options!./sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/sfc/pages/sfc.vue?vue&type=template&id=7c1cd6bd&scoped=true&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_template_id_7c1cd6bd_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sfc_vue_vue_type_template_id_7c1cd6bd_scoped_true_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ts/entries/sfc.ts":
/*!*******************************!*\
  !*** ./src/ts/entries/sfc.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ts_modules_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/ts/modules/base */ "./src/ts/modules/base.ts");
/* harmony import */ var _ts_modules_template_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ts/modules/template.conf */ "./src/ts/modules/template.conf.ts");
/* harmony import */ var _sfc_components_header_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/sfc/components/header.vue */ "./src/sfc/components/header.vue");
/* harmony import */ var _sfc_components_footer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/sfc/components/footer.vue */ "./src/sfc/components/footer.vue");
/* harmony import */ var _sfc_pages_sfc_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sfc/pages/sfc.vue */ "./src/sfc/pages/sfc.vue");
/*
* sfc.js
*
*/
// vender



// vue components



var BASE = new _ts_modules_base__WEBPACK_IMPORTED_MODULE_1__["default"]();
var VM = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
    el: '#l-container',
    template: _ts_modules_template_conf__WEBPACK_IMPORTED_MODULE_2__["template"],
    components: {
        cHeader: _sfc_components_header_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        cFooter: _sfc_components_footer_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        cPage: _sfc_pages_sfc_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    mounted: function () {
        var loading = document.getElementById('l-loading');
        loading.setAttribute('aria-hidden', 'true');
    }
});
BASE.init();


/***/ }),

/***/ "./src/ts/modules/template.conf.ts":
/*!*****************************************!*\
  !*** ./src/ts/modules/template.conf.ts ***!
  \*****************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
var template = "<div class=\"l-container\" id=\"l-container\">\n  <c-header></c-header>\n  <c-page></c-page>\n  <c-footer></c-footer>\n</div>";


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmYy9wYWdlcy9zZmMudnVlPzVmMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmYy9wYWdlcy9zZmMudnVlP2E1NTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmYy9wYWdlcy9zZmMudnVlP2M4ZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmYy9wYWdlcy9zZmMudnVlPzM4ZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmYy9wYWdlcy9zZmMudnVlPzRjMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmYy9wYWdlcy9zZmMudnVlPzA3OTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmYy9wYWdlcy9zZmMudnVlPzY2YWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VudHJpZXMvc2ZjLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9tb2R1bGVzL3RlbXBsYXRlLmNvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFD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QUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0VBR0U7QUFFRixTQUFTO0FBQ2E7QUFDZTtBQUNlO0FBRXBELGlCQUFpQjtBQUNpQztBQUNBO0FBQ1Y7QUFFeEMsSUFBTSxJQUFJLEdBQUcsSUFBSSx3REFBSSxFQUFFLENBQUM7QUFFeEIsSUFBTSxFQUFFLEdBQUcsSUFBSSwwQ0FBRyxDQUFDO0lBQ2pCLEVBQUUsRUFBRSxjQUFjO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUU7UUFDVixPQUFPO1FBQ1AsT0FBTztRQUNQLEtBQUs7S0FDTjtJQUNELE9BQU8sRUFBUDtRQUNFLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9CWjtBQUFBO0FBQU8sSUFBTSxRQUFRLEdBQ3JCLCtIQUlPLENBQUMiLCJmaWxlIjoianMvc2ZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzZmNcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy90cy9lbnRyaWVzL3NmYy50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ3Z1ZS1jbGFzcy1jb21wb25lbnQnO1xuaW1wb3J0IExvZyBmcm9tICdAL3RzL21vZHVsZXMvbG9nJztcblxuQENvbXBvbmVudCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNmYyBleHRlbmRzIFZ1ZSB7XG4gIG1lc3NhZ2U6IHN0cmluZyA9ICdTRkMnO1xuXG4gIGNyZWF0ZWQoKTogdm9pZCB7XG4gICAgY29uc3QgTE9HID0gbmV3IExvZyh7XG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcbiAgICB9KTtcbiAgICBMT0cuaW5pdCgpO1xuICB9O1xufVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm1haW5cIiwgeyBzdGF0aWNDbGFzczogXCJsLW1haW5cIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibC1zZWN0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImwtc2VjdGlvbi10dGxcIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCIgUGFnZVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX20oMSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZmMtTXZcIiB9LCBbXG4gICAgICBfYyhcInBpY3R1cmVcIiwgW1xuICAgICAgICBfYyhcInNvdXJjZVwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG1lZGlhOiBcIihtaW4td2lkdGg6IDc2OHB4KVwiLFxuICAgICAgICAgICAgc3Jjc2V0OiBcIi9hc3NldHMvaW1nL3NmYy9fZHVtbXlfbGcuanBnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvYXNzZXRzL2ltZy9zZmMvX2R1bW15X3NtLmpwZ1wiIH0gfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInNmYy1MaXN0XCIgfSwgW1xuICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInNmYy1JdGVtXCIgfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF6eWxvYWRcIixcbiAgICAgICAgICBhdHRyczogeyBcImRhdGEtc3JjXCI6IFwiL2Fzc2V0cy9pbWcvc2ZjL2xhenlfMDAxLnBuZ1wiLCBhbHQ6IFwi6YKq5rCX55y8XCIgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwic2ZjLUl0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXp5bG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1zcmNcIjogXCIvYXNzZXRzL2ltZy9zZmMvbGF6eV8wMDIucG5nXCIsIGFsdDogXCLps6VcIiB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJzZmMtSXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhenlsb2FkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXNyY1wiOiBcIi9hc3NldHMvaW1nL3NmYy9sYXp5XzAwMy5wbmdcIiwgYWx0OiBcIuS6jOS4llwiIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInNmYy1JdGVtXCIgfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF6eWxvYWRcIixcbiAgICAgICAgICBhdHRyczogeyBcImRhdGEtc3JjXCI6IFwiL2Fzc2V0cy9pbWcvc2ZjL2xhenlfMDA0LnBuZ1wiLCBhbHQ6IFwi55u45omT44GhXCIgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwic2ZjLUl0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXp5bG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBcImRhdGEtc3JjXCI6IFwiL2Fzc2V0cy9pbWcvc2ZjL2xhenlfMDA1LnBuZ1wiLFxuICAgICAgICAgICAgYWx0OiBcIuODnuODg+ODieODu+OCteOCpOOCqOODs+ODhuOCo+OCueODiFwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwic2ZjLUl0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXp5bG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1zcmNcIjogXCIvYXNzZXRzL2ltZy9zZmMvbGF6eV8wMDYucG5nXCIsIGFsdDogXCLjgqzjg4Hjg6NcIiB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZmMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjMWNkNmJkJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NmYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NmYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2ZjLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjMWNkNmJkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2MxY2Q2YmRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvb3RzdWthL0Rlc2t0b3AvX215ZGF0YS92dWVqc19tdWx0aXBhZ2VfYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdjMWNkNmJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdjMWNkNmJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zZmMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjMWNkNmJkJnNjb3BlZD10cnVlJmxhbmc9cHVnJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjMWNkNmJkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvc2ZjL3BhZ2VzL3NmYy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NmYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2ZjLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2ZjLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjMWNkNmJkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS0wLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZmMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MxY2Q2YmQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXBsYWluLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NmYy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2MxY2Q2YmQmc2NvcGVkPXRydWUmbGFuZz1wdWcmXCIiLCIvKlxuKiBzZmMuanNcbipcbiovXG5cbi8vIHZlbmRlclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IEJhc2UgZnJvbSAnQC90cy9tb2R1bGVzL2Jhc2UnO1xuaW1wb3J0IHt0ZW1wbGF0ZX0gZnJvbSAnQC90cy9tb2R1bGVzL3RlbXBsYXRlLmNvbmYnO1xuXG4vLyB2dWUgY29tcG9uZW50c1xuaW1wb3J0IGNIZWFkZXIgZnJvbSAnQC9zZmMvY29tcG9uZW50cy9oZWFkZXIudnVlJztcbmltcG9ydCBjRm9vdGVyIGZyb20gJ0Avc2ZjL2NvbXBvbmVudHMvZm9vdGVyLnZ1ZSc7XG5pbXBvcnQgY1BhZ2UgZnJvbSAnQC9zZmMvcGFnZXMvc2ZjLnZ1ZSc7XG5cbmNvbnN0IEJBU0UgPSBuZXcgQmFzZSgpO1xuXG5jb25zdCBWTSA9IG5ldyBWdWUoe1xuICBlbDogJyNsLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlLFxuICBjb21wb25lbnRzOiB7XG4gICAgY0hlYWRlcixcbiAgICBjRm9vdGVyLFxuICAgIGNQYWdlXG4gIH0sXG4gIG1vdW50ZWQoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsLWxvYWRpbmcnKTtcbiAgICBsb2FkaW5nLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9XG59KTtcblxuQkFTRS5pbml0KCk7IiwiZXhwb3J0IGNvbnN0IHRlbXBsYXRlOiBzdHJpbmcgPVxuYDxkaXYgY2xhc3M9XCJsLWNvbnRhaW5lclwiIGlkPVwibC1jb250YWluZXJcIj5cbiAgPGMtaGVhZGVyPjwvYy1oZWFkZXI+XG4gIDxjLXBhZ2U+PC9jLXBhZ2U+XG4gIDxjLWZvb3Rlcj48L2MtZm9vdGVyPlxuPC9kaXY+YDsiXSwic291cmNlUm9vdCI6IiJ9
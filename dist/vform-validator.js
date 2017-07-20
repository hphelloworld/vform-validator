(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vform-validator", [], factory);
	else if(typeof exports === 'object')
		exports["vform-validator"] = factory();
	else
		root["vform-validator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(6),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(5),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'vform',
  data: function data() {
    return {
      checkdata: {},
      checksuccess: false
    };
  },

  props: {
    action: String,
    method: {
      type: String,
      default: 'get'
    },
    submit: Function
  },
  methods: {
    submitForm: function submitForm(e) {
      this.checkdata = {};
      for (var i = 0, l = this.$children.length; i < l; i++) {
        var elv = this.$children[i];
        if (elv.name == 'vinput' && elv.type != 'submit') {
          elv.check(elv.$el);
          this.checkdata[elv.$el.name] = elv.val;
          if (elv.status !== 'success') {
            this.checksuccess = false;
            elv.tips();
            break;
          } else {
            this.checksuccess = true;
          }
        }
      }
      this.submit({
        status: this.checksuccess,
        data: this.checkdata
      });
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'vinput',
  data: function data() {
    return {
      name: 'vinput',

      checkreg: {
        "*": /[\w\W]+/,
        "*6-16": /^[\w\W]{6,16}$/,
        "n": /^\d+$/,
        "n6-16": /^\d{6,16}$/,
        "s": /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
        "s6-18": /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
        "p": /^[0-9]{6}$/,
        "m": /^1[3|4|5|7|8][0-9]{9}$/,
        "e": /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        "url": /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
        "money": /^-?[1-9]+(\.\d+)?$|^-?0(\.\d+)?$|^-?[1-9]+[0-9]*(\.\d+)?$/,
        "f": /^[0-9]+(.[0-9]{0,9})?$/
      },
      elment: '',
      status: '',
      tipmsg: '',
      val: []
    };
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number, Boolean, Array],
      default: ''
    },

    validate: [String, Function, RegExp],

    checkmethod: String,

    tipsFuc: Function,

    errormsg: {
      type: String,
      default: ''
    },

    nullmsg: {
      type: String,
      default: ''
    },

    successmsg: {
      type: String,
      default: ''
    }
  },
  methods: {
    tips: function tips() {
      if (Object.prototype.toString.call(this.tipsFuc) == '[object Function]') {
        this.tipsFuc({
          elment: this.elment,
          value: this.val,
          status: this.status,
          tipmsg: this.tipmsg
        });
      }
    },
    valchange: function valchange(e) {
      this.check(e.target);
      this.tips();
    },
    check: function check(el) {
      var _this = this;

      this.elment = el;
      var val = [];
      if (el.type == 'radio' || el.type == 'checkbox') {
        var input_name = el.name;
        var parent_form = void 0;
        var elm = el;
        do {
          elm = elm.parentNode;
          parent_form = elm;
        } while (parent_form.nodeName != 'FORM');
        var all_input = parent_form.querySelectorAll('input[name=' + input_name + ']');
        [].forEach.call(all_input, function (e) {
          if (e.checked) {
            if (e.type == 'radio') {
              _this.val = e.value;
            } else {
              _this.val.push(e.value);
            }
          }
        });
      } else {
        this.val = el.value;
        this.$emit('input', this.val);
      }
      if (this.validate == undefined) {
        this.status = 'success';
        this.tipmsg = this.successmsg;
        return;
      };
      if (this.val.toString().trim() == '') {
        this.status = 'empty';
        this.tipmsg = this.nullmsg;
        return;
      }
      var validate_type = Object.prototype.toString.call(this.validate);
      switch (validate_type) {
        case '[object String]':
          this.regcheck(this.checkreg[this.validate]);
          break;
        case '[object RegExp]':
          this.regcheck(this.validate);
          break;
        case '[object Function]':
          var check_bl = this.validate(this.val);
          if (!check_bl) {
            this.status = 'error';
            this.tipmsg = this.errormsg;
          } else {
            this.status = 'success';
            this.tipmsg = this.successmsg;
          }
          break;
      }
    },
    regcheck: function regcheck(reg) {
      if (!reg.test(this.val)) {
        this.status = 'error';
        this.tipmsg = this.errormsg;
      } else {
        this.status = 'success';
        this.tipmsg = this.successmsg;
      }
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _vm.type == 'select' ? _c('select', {
      domProps: {
        "value": _vm.value
      },
      on: {
        "change": function change($event) {
          _vm.valchange($event);
        }
      }
    }, [_vm._t("default")], 2) : _vm.type == 'textarea' ? _c('textarea', {
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.checkmethod == 'input' ? _vm.valchange($event) : '';
        },
        "change": function change($event) {
          _vm.checkmethod == 'change' ? _vm.valchange($event) : '';
        }
      }
    }) : _vm.type == 'radio' || _vm.type == 'checkbox' ? _c('input', {
      attrs: {
        "type": _vm.type
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "change": function change($event) {
          _vm.valchange($event);
        }
      }
    }) : _c('input', {
      attrs: {
        "type": _vm.type
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.checkmethod == 'input' ? _vm.valchange($event) : '';
        },
        "change": function change($event) {
          _vm.checkmethod == 'change' ? _vm.valchange($event) : '';
        }
      }
    });
  }, staticRenderFns: [] };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('form', {
      attrs: {
        "action": _vm.action,
        "method": _vm.method
      },
      on: {
        "submit": function submit($event) {
          $event.preventDefault();
          _vm.submitForm($event);
        }
      }
    }, [_vm._t("default")], 2);
  }, staticRenderFns: [] };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VInput = __webpack_require__(2);

var _VInput2 = _interopRequireDefault(_VInput);

var _VForm = __webpack_require__(1);

var _VForm2 = _interopRequireDefault(_VForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  install: function install(Vue) {
    Vue.mixin({
      components: {
        VInput: _VInput2.default,
        VForm: _VForm2.default
      }
    });
  }
};

/***/ })
/******/ ]);
});
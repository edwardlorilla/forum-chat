webpackJsonp([2],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(71)
/* template */
var __vue_template__ = __webpack_require__(74)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Thread/channel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e6f5a29", Component.options)
  } else {
    hotAPI.reload("data-v-1e6f5a29", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(51)
/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Thread/paginated.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43244f73", Component.options)
  } else {
    hotAPI.reload("data-v-43244f73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        nextPage: function nextPage() {
            if (!this.meta || this.meta.current_page === this.meta.last_page) {
                return;
            }
            return this.meta.current_page + 1;
        },
        prevPage: function prevPage() {
            if (!this.meta || this.meta.current_page === 1) {
                return;
            }
            return this.meta.current_page - 1;
        },
        paginatonCount: function paginatonCount() {
            if (!this.meta) {
                return;
            }
            var _meta = this.meta,
                current_page = _meta.current_page,
                last_page = _meta.last_page;

            return current_page + " of " + last_page;
        }
    }
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paginated_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paginated_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__paginated_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadChannel_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadChannel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loadChannel_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__paginated_vue___default.a, __WEBPACK_IMPORTED_MODULE_1__loadChannel_vue___default.a],
    data: function data() {
        return {
            data: [],
            links: {},
            meta: {}
        };
    },

    methods: {
        setData: function setData(response) {
            var vm = this;
            vm.data = response.data;
            vm.links = response.links;
            vm.meta = response.meta;
        },
        goToNext: function goToNext() {
            var vm = this;
            var option = _.clone(vm.$route.query);
            option.page = this.nextPage;
            this.$router.push({
                query: option
            });
        },
        goToPrev: function goToPrev() {
            var vm = this;
            var option = _.clone(vm.$route.query);
            option.page = this.prevPage;
            this.$router.push({
                name: vm.$route.meta.name,
                query: option
            });
        }
    }
});

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Thread/loadChannel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00119a63", Component.options)
  } else {
    hotAPI.reload("data-v-00119a63", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//

/* harmony default export */ __webpack_exports__["default"] = ({
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        console.log(to.params);
        axios.get(to.meta.url + ("/" + to.params.channel + "/"), { params: to.query }).then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        axios.get(to.meta.url + ("/" + to.params.channel + "/"), { params: to.query }).then(function (response) {
            vm.setData(response.data);
            next();
        });
    }
});

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card card-default" }, [
    _c("div", { staticClass: "card-header" }, [_vm._v("Threads")]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "div",
        { staticClass: "list-group" },
        _vm._l(_vm.data, function(item, index) {
          return _c(
            "router-link",
            {
              key: item.id,
              staticClass:
                "list-group-item list-group-item-action flex-column align-items-start",
              attrs: {
                to: {
                  name: "thread.show",
                  params: { channel: item.channel.slug, id: item.id }
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "d-flex w-100 justify-content-between" },
                [
                  _c("h5", { staticClass: "mb-1" }, [
                    _vm._v(_vm._s(item.title))
                  ]),
                  _vm._v(" "),
                  _c("small", [_vm._v(_vm._s(item.update))])
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mb-1" }, [_vm._v(_vm._s(item.body))]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-1" }, [
                _c("small", { staticClass: "text-muted" }, [_vm._v("Posted:")]),
                _vm._v(" "),
                _c("small", [
                  _c("a", { attrs: { href: "" } }, [
                    _vm._v(_vm._s(item.creator.name))
                  ])
                ])
              ])
            ]
          )
        })
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" }, [
      _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
        _c("ul", { staticClass: "pagination" }, [
          _c("li", { staticClass: "page-item" }, [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { disabled: !_vm.prevPage },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.goToPrev($event)
                  }
                }
              },
              [_vm._v("Previous")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.paginatonCount))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { disabled: !_vm.nextPage },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.goToNext($event)
                  }
                }
              },
              [_vm._v("Next")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e6f5a29", module.exports)
  }
}

/***/ })

});
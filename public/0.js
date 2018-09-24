webpackJsonp([0],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(61)
/* template */
var __vue_template__ = __webpack_require__(70)
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
Component.options.__file = "resources/js/components/Thread/show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c172e472", Component.options)
  } else {
    hotAPI.reload("data-v-c172e472", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replies_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replies_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__replies_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadReplies_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadReplies_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loadReplies_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replyForm_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replyForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__replyForm_vue__);
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
    mixins: [__WEBPACK_IMPORTED_MODULE_1__loadReplies_vue___default.a],
    components: {
        Replies: __WEBPACK_IMPORTED_MODULE_0__replies_vue___default.a,
        ReplyForm: __WEBPACK_IMPORTED_MODULE_2__replyForm_vue___default.a
    },
    data: function data() {
        return {
            data: {}

        };
    },

    computed: {
        commentLength: function commentLength() {
            var vm = this;
            return vm.data.replies.length;
        }
    },
    methods: {
        setData: function setData(response) {
            var vm = this;
            vm.data = response;
        },
        reply_m: function reply_m(event) {
            var vm = this;
            vm.data.replies.push(event);
        }
    }
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(63)
/* template */
var __vue_template__ = __webpack_require__(64)
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
Component.options.__file = "resources/js/components/Thread/replies.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59c5b8a4", Component.options)
  } else {
    hotAPI.reload("data-v-59c5b8a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    props: ['reply'],
    data: function data() {
        return {
            isFavorited: this.reply.isFavorited,
            favorited_count: this.reply.favorites_count ? this.reply.favorites_count : 0
        };
    },

    methods: {
        favorite_m: function favorite_m() {
            var vm = this;
            if (vm.isFavorited) {
                axios['delete']('/api/replies/' + vm.reply.id + '/favorites');
                vm.isFavorited = false;
                vm.favorited_count--;
            } else {
                axios['post']('/api/replies/' + vm.reply.id + '/favorites');
                vm.isFavorited = true;
                vm.favorited_count++;
            }
        }
    }
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card mb-3 card-default" }, [
    _c("div", { staticClass: "card-body" }, [
      _c("h5", { staticClass: "card-title" }, [
        _c("a", { attrs: { href: "" } }, [
          _vm._v(_vm._s(_vm.reply.owner.name))
        ]),
        _vm._v(" said...\n            "),
        _c("button", { staticClass: "btn btn-link float-md-right" }, [
          _c(
            "span",
            {
              staticClass: "fa",
              class: _vm.isFavorited ? "fa-heart" : "fa-heart-o",
              on: { click: _vm.favorite_m }
            },
            [_vm._v(" " + _vm._s(_vm.favorited_count))]
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "card-text" }, [_vm._v(_vm._s(_vm.reply.body))]),
      _vm._v(" "),
      _c("p", { staticClass: "card-text" }, [
        _c("small", { staticClass: "text-muted" }, [
          _vm._v("Last updated " + _vm._s(_vm.reply.updated_at))
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
    require("vue-hot-reload-api")      .rerender("data-v-59c5b8a4", module.exports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(66)
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
Component.options.__file = "resources/js/components/Thread/loadReplies.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96813830", Component.options)
  } else {
    hotAPI.reload("data-v-96813830", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//

/* harmony default export */ __webpack_exports__["default"] = ({
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        console.log(to.params);
        axios.get(to.meta.url + ("/" + to.params.channel + "/") + to.params.id, { params: to.query }).then(function (response) {
            next(function (vm) {
                return vm.setData(response.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var vm = this;
        axios.get(to.meta.url + ("/" + to.params.channel + "/") + to.params.id, { params: to.query }).then(function (response) {
            vm.setData(response.data);
            next();
        });
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
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
Component.options.__file = "resources/js/components/Thread/replyForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f917a18", Component.options)
  } else {
    hotAPI.reload("data-v-5f917a18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    data: function data() {
        return {
            reply: ''
        };
    },

    computed: {
        isAuth: function isAuth() {
            return this.$user && this.$user.statusText == 'OK';
        }
    },
    methods: {
        reply_m: function reply_m() {
            var vm = this;
            var formData = new FormData(vm.$refs.form);
            var jsonObject = {};

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var key = _ref2[0];
                    var value = _ref2[1];

                    jsonObject[key] = value;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            axios['post']('/api/threads/' + vm.$route.params.id + '/replies', jsonObject).then(function (response) {
                vm.$emit('reply', response.data);
            });
        }
    }
});

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card mb-3 card-default" }, [
    _c("div", { staticClass: "card-body" }, [
      _vm.isAuth
        ? _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.reply_m($event)
                }
              }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-default", attrs: { type: "submit" } },
                [_vm._v("Post")]
              )
            ]
          )
        : _c("div", [_vm._m(1)])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("textarea", {
        staticClass: "form-control",
        attrs: {
          placeholder: "Have something to say?",
          name: "body",
          id: "body",
          cols: "30",
          rows: "10"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center" }, [
      _vm._v("Please "),
      _c("a", { attrs: { href: "/login" } }, [_vm._v("sign in")]),
      _vm._v(" to participate in this discussion.")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f917a18", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "card mb-3 card-default" }, [
        _c(
          "div",
          { staticClass: "card-header" },
          [
            _c("router-link", { attrs: { to: { name: "thread.index" } } }, [
              _c("span", { staticStyle: { "font-size": "27px" } }, [
                _vm._v("‹ ")
              ])
            ]),
            _vm._v("\n            " + _vm._s(_vm.data.title) + "\n\n        ")
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm._v("\n            " + _vm._s(_vm.data.body) + "\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer" }, [
          _vm._v(
            "\n            This thread was published " +
              _vm._s(_vm.data.created_at) +
              " by "
          ),
          _c("a", { attrs: { href: "" } }, [
            _vm._v(_vm._s(_vm.data.creator.name))
          ]),
          _vm._v(
            ", and currently has\n            " +
              _vm._s(_vm.commentLength) +
              " " +
              _vm._s(_vm.commentLength === 1 ? " comment." : " comments.") +
              "\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.data.replies, function(reply) {
        return _c("replies", { key: reply.id, attrs: { reply: reply } })
      }),
      _vm._v(" "),
      _c("reply-form", {
        on: {
          reply: function($event) {
            _vm.reply_m($event)
          }
        }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c172e472", module.exports)
  }
}

/***/ })

});
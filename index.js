/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof e &&
          "#" === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      o(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(
        s,
        "unique",
        s.uniqueSort,
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      t(
        s.expr,
        "filters",
        s.expr.pseudos,
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      t(
        s.expr,
        ":",
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        o(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(m, "");
          },
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (o(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated"
        ),
        o(
          s,
          "isArray",
          Array.isArray,
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (o(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        o(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "jQuery.type is deprecated"
        ),
        o(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated"
        ),
        o(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                "success",
                e.done,
                "jQXHR.success is deprecated and removed"
              ),
              o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
              o(
                e,
                "complete",
                e.always,
                "jQXHR.complete is deprecated and removed"
              )),
            e
          );
        }),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  c.test(e.data))) &&
              u("JSON-to-JSONP auto-promotion is deprecated");
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? h.apply(this, arguments)
          : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || ""
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("JQMIGRATE: jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u("jQuery.data() always sets/gets camelCased names: " + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        "string" == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u("jQuery.data() always sets/gets camelCased names: " + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument"
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        "concat",
        s.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u("jQuery.event.fixHooks are deprecated and removed: " + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            "load" === t &&
            "complete" === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? R.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r)
          );
        },
        hover: function (e, t) {
          return (
            u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e &&
        T(e) !== T(t) &&
        u("HTML tags must be properly nested and closed: " + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u("jQuery.fn.offset() requires a valid DOM element"),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u("deferred.pipe() is deprecated"),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && "function" == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + "With"](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
var ms_grabbing_curosr =
    "https://demo.goodlayers.com/hotelmaster/hostel/wp-content/plugins/masterslider/public/assets/css/common/grabbing.cur",
  ms_grab_curosr =
    "https://demo.goodlayers.com/hotelmaster/hostel/wp-content/plugins/masterslider/public/assets/css/common/grab.cur";
(window.MSReady = window.MSReady || []).push(function ($) {
  "use strict";
  var masterslider_da71 = new MasterSlider();
  masterslider_da71.control("arrows", { autohide: !0, overVideo: !0 });
  masterslider_da71.control("bullets", {
    autohide: !1,
    overVideo: !0,
    dir: "h",
    align: "bottom",
    space: 8,
    margin: 25,
  });
  masterslider_da71.setup("MS63312d4dcda71", {
    width: 1140,
    height: 780,
    minHeight: 0,
    space: 0,
    start: 1,
    grabCursor: !0,
    swipe: !1,
    mouse: !0,
    keyboard: !1,
    layout: "fullwidth",
    wheel: !1,
    autoplay: !0,
    instantStartLayers: !1,
    mobileBGVideo: !1,
    loop: !0,
    shuffle: !1,
    preload: 0,
    heightLimit: !0,
    autoHeight: !1,
    smoothHeight: !0,
    endPause: !1,
    overPause: !0,
    fillMode: "fill",
    centerControls: !0,
    startOnAppear: !1,
    layersMode: "center",
    autofillTarget: "",
    hideLayers: !1,
    fullscreenMargin: 0,
    speed: 20,
    dir: "h",
    responsive: !0,
    tabletWidth: 768,
    tabletHeight: null,
    phoneWidth: 480,
    phoneHeight: null,
    sizingReference: window,
    parallaxMode: "swipe",
    view: "fadeFlow",
  });
  MSScrollParallax.setup(masterslider_da71, 30, 50, !0);
  window.masterslider_instances = window.masterslider_instances || [];
  window.masterslider_instances.push(masterslider_da71);
});
(() => {
  "use strict";
  var t = {
      d: (e, s) => {
        for (var i in s)
          t.o(s, i) &&
            !t.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: s[i] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  function s(t) {
    if (((this.formData = {}), (this.tree = {}), !(t instanceof FormData)))
      return this;
    this.formData = t;
    const e = () => {
      const t = new Map();
      return (
        (t.largestIndex = 0),
        (t.set = function (e, s) {
          "" === e
            ? (e = t.largestIndex++)
            : /^[0-9]+$/.test(e) &&
              ((e = parseInt(e)),
              t.largestIndex <= e && (t.largestIndex = e + 1)),
            Map.prototype.set.call(t, e, s);
        }),
        t
      );
    };
    this.tree = e();
    const s =
      /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
    for (const [t, i] of this.formData) {
      const o = t.match(s);
      if (o)
        if ("" === o.groups.array) this.tree.set(o.groups.name, i);
        else {
          const t = [
            ...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi),
          ].map(([t, e]) => e);
          t.unshift(o.groups.name);
          const s = t.pop();
          t.reduce((t, s) => {
            if (
              (/^[0-9]+$/.test(s) && (s = parseInt(s)), t.get(s) instanceof Map)
            )
              return t.get(s);
            const i = e();
            return t.set(s, i), i;
          }, this.tree).set(s, i);
        }
    }
  }
  t.r(e),
    t.d(e, {
      date: () => d,
      email: () => r,
      file: () => m,
      maxdate: () => x,
      maxfilesize: () => w,
      maxlength: () => h,
      maxnumber: () => v,
      mindate: () => g,
      minlength: () => f,
      minnumber: () => u,
      number: () => c,
      required: () => n,
      requiredfile: () => a,
      tel: () => l,
      url: () => p,
    }),
    (s.prototype.entries = function () {
      return this.tree.entries();
    }),
    (s.prototype.get = function (t) {
      return this.tree.get(t);
    }),
    (s.prototype.getAll = function (t) {
      if (!this.has(t)) return [];
      const e = (t) => {
        const s = [];
        if (t instanceof Map) for (const [i, o] of t) s.push(...e(o));
        else "" !== t && s.push(t);
        return s;
      };
      return e(this.get(t));
    }),
    (s.prototype.has = function (t) {
      return this.tree.has(t);
    }),
    (s.prototype.keys = function () {
      return this.tree.keys();
    }),
    (s.prototype.values = function () {
      return this.tree.values();
    });
  const i = s;
  function o({ rule: t, field: e, error: s, ...i }) {
    (this.rule = t), (this.field = e), (this.error = s), (this.properties = i);
  }
  const n = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    a = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    r = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if ((t = t.trim()).length < 6) return !1;
          if (-1 === t.indexOf("@", 1)) return !1;
          if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
          const [e, s] = t.split("@", 2);
          if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
          if (/\.{2,}/.test(s)) return !1;
          if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(s)) return !1;
          const i = s.split(".");
          if (i.length < 2) return !1;
          for (const t of i) {
            if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
            if (!/^[a-z0-9-]+$/i.test(t)) return !1;
          }
          return !0;
        })
      )
        throw new o(this);
    },
    p = function (t) {
      const e = t.getAll(this.field);
      if (
        !e.every((t) => {
          if ("" === (t = t.trim())) return !1;
          try {
            return ((t) =>
              -1 !==
              [
                "http",
                "https",
                "ftp",
                "ftps",
                "mailto",
                "news",
                "irc",
                "irc6",
                "ircs",
                "gopher",
                "nntp",
                "feed",
                "telnet",
                "mms",
                "rtsp",
                "sms",
                "svn",
                "tel",
                "fax",
                "xmpp",
                "webcal",
                "urn",
              ].indexOf(t))(new URL(t).protocol.replace(/:$/, ""));
          } catch {
            return !1;
          }
        })
      )
        throw new o(this);
    },
    l = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, "")),
              /^[+]?[0-9]+$/.test(t)
            )
          )
      )
        throw new o(this);
    },
    c = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) ||
                !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)
            )
          )
      )
        throw new o(this);
    },
    d = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim()))
      )
        throw new o(this);
    },
    m = function (t) {
      if (
        !t.getAll(this.field).every(
          (t) =>
            t instanceof File &&
            this.accept?.some((e) =>
              /^\.[a-z0-9]+$/i.test(e)
                ? t.name.toLowerCase().endsWith(e.toLowerCase())
                : ((t) => {
                    const e = [],
                      s = t.match(
                        /^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i
                      );
                    if (s) {
                      const t = s.groups.toplevel.toLowerCase(),
                        i = s.groups.sub.toLowerCase();
                      for (const [o, n] of (() => {
                        const t = new Map();
                        return (
                          t.set("jpg|jpeg|jpe", "image/jpeg"),
                          t.set("gif", "image/gif"),
                          t.set("png", "image/png"),
                          t.set("bmp", "image/bmp"),
                          t.set("tiff|tif", "image/tiff"),
                          t.set("webp", "image/webp"),
                          t.set("ico", "image/x-icon"),
                          t.set("heic", "image/heic"),
                          t.set("asf|asx", "video/x-ms-asf"),
                          t.set("wmv", "video/x-ms-wmv"),
                          t.set("wmx", "video/x-ms-wmx"),
                          t.set("wm", "video/x-ms-wm"),
                          t.set("avi", "video/avi"),
                          t.set("divx", "video/divx"),
                          t.set("flv", "video/x-flv"),
                          t.set("mov|qt", "video/quicktime"),
                          t.set("mpeg|mpg|mpe", "video/mpeg"),
                          t.set("mp4|m4v", "video/mp4"),
                          t.set("ogv", "video/ogg"),
                          t.set("webm", "video/webm"),
                          t.set("mkv", "video/x-matroska"),
                          t.set("3gp|3gpp", "video/3gpp"),
                          t.set("3g2|3gp2", "video/3gpp2"),
                          t.set("txt|asc|c|cc|h|srt", "text/plain"),
                          t.set("csv", "text/csv"),
                          t.set("tsv", "text/tab-separated-values"),
                          t.set("ics", "text/calendar"),
                          t.set("rtx", "text/richtext"),
                          t.set("css", "text/css"),
                          t.set("htm|html", "text/html"),
                          t.set("vtt", "text/vtt"),
                          t.set("dfxp", "application/ttaf+xml"),
                          t.set("mp3|m4a|m4b", "audio/mpeg"),
                          t.set("aac", "audio/aac"),
                          t.set("ra|ram", "audio/x-realaudio"),
                          t.set("wav", "audio/wav"),
                          t.set("ogg|oga", "audio/ogg"),
                          t.set("flac", "audio/flac"),
                          t.set("mid|midi", "audio/midi"),
                          t.set("wma", "audio/x-ms-wma"),
                          t.set("wax", "audio/x-ms-wax"),
                          t.set("mka", "audio/x-matroska"),
                          t.set("rtf", "application/rtf"),
                          t.set("js", "application/javascript"),
                          t.set("pdf", "application/pdf"),
                          t.set("swf", "application/x-shockwave-flash"),
                          t.set("class", "application/java"),
                          t.set("tar", "application/x-tar"),
                          t.set("zip", "application/zip"),
                          t.set("gz|gzip", "application/x-gzip"),
                          t.set("rar", "application/rar"),
                          t.set("7z", "application/x-7z-compressed"),
                          t.set("exe", "application/x-msdownload"),
                          t.set("psd", "application/octet-stream"),
                          t.set("xcf", "application/octet-stream"),
                          t.set("doc", "application/msword"),
                          t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                          t.set("wri", "application/vnd.ms-write"),
                          t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                          t.set("mdb", "application/vnd.ms-access"),
                          t.set("mpp", "application/vnd.ms-project"),
                          t.set(
                            "docx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ),
                          t.set(
                            "docm",
                            "application/vnd.ms-word.document.macroEnabled.12"
                          ),
                          t.set(
                            "dotx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
                          ),
                          t.set(
                            "dotm",
                            "application/vnd.ms-word.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlsx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          ),
                          t.set(
                            "xlsm",
                            "application/vnd.ms-excel.sheet.macroEnabled.12"
                          ),
                          t.set(
                            "xlsb",
                            "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
                          ),
                          t.set(
                            "xltx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
                          ),
                          t.set(
                            "xltm",
                            "application/vnd.ms-excel.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlam",
                            "application/vnd.ms-excel.addin.macroEnabled.12"
                          ),
                          t.set(
                            "pptx",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                          ),
                          t.set(
                            "pptm",
                            "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
                          ),
                          t.set(
                            "ppsx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
                          ),
                          t.set(
                            "ppsm",
                            "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
                          ),
                          t.set(
                            "potx",
                            "application/vnd.openxmlformats-officedocument.presentationml.template"
                          ),
                          t.set(
                            "potm",
                            "application/vnd.ms-powerpoint.template.macroEnabled.12"
                          ),
                          t.set(
                            "ppam",
                            "application/vnd.ms-powerpoint.addin.macroEnabled.12"
                          ),
                          t.set(
                            "sldx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slide"
                          ),
                          t.set(
                            "sldm",
                            "application/vnd.ms-powerpoint.slide.macroEnabled.12"
                          ),
                          t.set(
                            "onetoc|onetoc2|onetmp|onepkg",
                            "application/onenote"
                          ),
                          t.set("oxps", "application/oxps"),
                          t.set("xps", "application/vnd.ms-xpsdocument"),
                          t.set(
                            "odt",
                            "application/vnd.oasis.opendocument.text"
                          ),
                          t.set(
                            "odp",
                            "application/vnd.oasis.opendocument.presentation"
                          ),
                          t.set(
                            "ods",
                            "application/vnd.oasis.opendocument.spreadsheet"
                          ),
                          t.set(
                            "odg",
                            "application/vnd.oasis.opendocument.graphics"
                          ),
                          t.set(
                            "odc",
                            "application/vnd.oasis.opendocument.chart"
                          ),
                          t.set(
                            "odb",
                            "application/vnd.oasis.opendocument.database"
                          ),
                          t.set(
                            "odf",
                            "application/vnd.oasis.opendocument.formula"
                          ),
                          t.set("wp|wpd", "application/wordperfect"),
                          t.set("key", "application/vnd.apple.keynote"),
                          t.set("numbers", "application/vnd.apple.numbers"),
                          t.set("pages", "application/vnd.apple.pages"),
                          t
                        );
                      })())
                        (("*" === i && n.startsWith(t + "/")) || n === s[0]) &&
                          e.push(...o.split("|"));
                    }
                    return e;
                  })(e).some(
                    (e) => (
                      (e = "." + e.trim()),
                      t.name.toLowerCase().endsWith(e.toLowerCase())
                    )
                  )
            )
        )
      )
        throw new o(this);
    },
    f = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        0 !== s && s < parseInt(this.threshold))
      )
        throw new o(this);
    },
    h = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        parseInt(this.threshold) < s)
      )
        throw new o(this);
    },
    u = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(t) < parseFloat(this.threshold)))
      )
        throw new o(this);
    },
    v = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(this.threshold) < parseFloat(t)))
      )
        throw new o(this);
    },
    g = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                t < this.threshold
              )
            )
          )
      )
        throw new o(this);
    },
    x = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                this.threshold < t
              )
            )
          )
      )
        throw new o(this);
    },
    w = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (s += t.size);
        }),
        parseInt(this.threshold) < s)
      )
        throw new o(this);
    };
  var b;
  window.swv = {
    validators: e,
    validate: (t, s, n = {}) => {
      const a = (t.rules ?? []).filter(
        ({ rule: t, ...s }) =>
          "function" == typeof e[t] &&
          ("function" != typeof e[t].matches || e[t].matches(s, n))
      );
      if (!a.length) return new Map();
      const r = new i(s);
      return a.reduce((t, s) => {
        const { rule: i, ...n } = s;
        if (t.get(n.field)?.error) return t;
        try {
          e[i].call({ rule: i, ...n }, r);
        } catch (e) {
          if (e instanceof o) return t.set(n.field, e);
        }
        return t.set(n.field, {});
      }, new Map());
    },
    ...(null !== (b = window.swv) && void 0 !== b ? b : {}),
  };
})();
var wpcf7 = {
  api: {
    root: "https://demo.goodlayers.com/hotelmaster/hostel/wp-json/",
    namespace: "contact-form-7/v1",
  },
  cached: "1",
};
(() => {
  "use strict";
  const e = (e) => Math.abs(parseInt(e, 10)),
    t = (e, t) => {
      const a = new Map([
        ["init", "init"],
        ["validation_failed", "invalid"],
        ["acceptance_missing", "unaccepted"],
        ["spam", "spam"],
        ["aborted", "aborted"],
        ["mail_sent", "sent"],
        ["mail_failed", "failed"],
        ["submitting", "submitting"],
        ["resetting", "resetting"],
        ["validating", "validating"],
        ["payment_required", "payment-required"],
      ]);
      a.has(t) && (t = a.get(t)),
        Array.from(a.values()).includes(t) ||
          (t = `custom-${(t = (t = t
            .replace(/[^0-9a-z]+/i, " ")
            .trim()).replace(/\s+/, "-"))}`);
      const r = e.getAttribute("data-status");
      return (
        (e.wpcf7.status = t),
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t && e.classList.remove(r),
        t
      );
    },
    a = (e, t, a) => {
      const r = new CustomEvent(`wpcf7${t}`, { bubbles: !0, detail: a });
      "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(r);
    },
    r = (e) => {
      const { root: t, namespace: a = "contact-form-7/v1" } = wpcf7.api;
      return n.reduceRight(
        (e, t) => (a) => t(a, e),
        (e) => {
          let r,
            n,
            {
              url: o,
              path: c,
              endpoint: i,
              headers: s,
              body: l,
              data: d,
              ...u
            } = e;
          "string" == typeof i &&
            ((r = a.replace(/^\/|\/$/g, "")),
            (n = i.replace(/^\//, "")),
            (c = n ? r + "/" + n : r)),
            "string" == typeof c &&
              (-1 !== t.indexOf("?") && (c = c.replace("?", "&")),
              (c = c.replace(/^\//, "")),
              (o = t + c)),
            (s = { Accept: "application/json, */*;q=0.1", ...s }),
            delete s["X-WP-Nonce"],
            d &&
              ((l = JSON.stringify(d)),
              (s["Content-Type"] = "application/json"));
          const p = {
              code: "fetch_error",
              message: "You are probably offline.",
            },
            f = {
              code: "invalid_json",
              message: "The response is not a valid JSON response.",
            };
          return window
            .fetch(o || c || window.location.href, {
              ...u,
              headers: s,
              body: l,
            })
            .then(
              (e) =>
                Promise.resolve(e)
                  .then((e) => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e;
                  })
                  .then((e) => {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw f;
                      });
                    throw f;
                  }),
              () => {
                throw p;
              }
            );
        }
      )(e);
    },
    n = [];
  function o(e) {
    var a, r, n, o;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const l = e,
      d = null === (a = e.wpcf7) || void 0 === a ? void 0 : a.schema;
    if (void 0 === d) return;
    if (
      null === (r = s.target) ||
      void 0 === r ||
      !r.closest(".wpcf7-form-control-wrap[data-name]")
    )
      return;
    if (null !== (n = s.target) && void 0 !== n && n.closest(".novalidate"))
      return;
    const u = new FormData(),
      p = [];
    for (const e of l.querySelectorAll(".wpcf7-form-control-wrap"))
      if (
        !e.closest(".novalidate") &&
        (e
          .querySelectorAll(":where( input, textarea, select ):enabled")
          .forEach((e) => {
            if (e.name)
              switch (e.type) {
                case "button":
                case "image":
                case "reset":
                case "submit":
                  break;
                case "checkbox":
                case "radio":
                  e.checked && u.append(e.name, e.value);
                  break;
                case "select-multiple":
                  for (const t of e.selectedOptions) u.append(e.name, t.value);
                  break;
                case "file":
                  for (const t of e.files) u.append(e.name, t);
                  break;
                default:
                  u.append(e.name, e.value);
              }
          }),
        e.dataset.name &&
          (p.push(e.dataset.name),
          e.setAttribute("data-under-validation", "1"),
          e.dataset.name === s.target.name.replace(/\[.*\]$/, "")))
      )
        break;
    d.rules = (null !== (o = d.rules) && void 0 !== o ? o : []).filter((e) => {
      let { field: t } = e;
      return p.includes(t);
    });
    const f = e.getAttribute("data-status");
    Promise.resolve(t(e, "validating"))
      .then((t) => {
        if (void 0 !== swv) {
          const t = swv.validate(d, u, s);
          for (const [a, { error: r }] of t)
            i(e, a), void 0 !== r && c(e, a, r);
        }
      })
      .finally(() => {
        t(e, f),
          e
            .querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]")
            .forEach((e) => {
              e.removeAttribute("data-under-validation");
            });
      });
  }
  r.use = (e) => {
    n.unshift(e);
  };
  const c = (e, t, a) => {
      var r;
      const n = `${
          null === (r = e.wpcf7) || void 0 === r ? void 0 : r.unitTag
        }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
        o = e.querySelector(
          `.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`
        );
      (() => {
        const t = document.createElement("li");
        t.setAttribute("id", n),
          o && o.id
            ? t.insertAdjacentHTML("beforeend", `<a href="#${o.id}">${a}</a>`)
            : t.insertAdjacentText("beforeend", a),
          e.wpcf7.parent
            .querySelector(".screen-reader-response ul")
            .appendChild(t);
      })(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((t) => {
            if (
              "validating" === e.getAttribute("data-status") &&
              !t.dataset.underValidation
            )
              return;
            const r = document.createElement("span");
            r.classList.add("wpcf7-not-valid-tip"),
              r.setAttribute("aria-hidden", "true"),
              r.insertAdjacentText("beforeend", a),
              t.appendChild(r),
              t.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "true");
              }),
              t.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.classList.add("wpcf7-not-valid"),
                  e.setAttribute("aria-describedby", n),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity(a),
                  e.closest(".use-floating-validation-tip") &&
                    (e.addEventListener("focus", (e) => {
                      r.setAttribute("style", "display: none");
                    }),
                    r.addEventListener("click", (e) => {
                      r.setAttribute("style", "display: none");
                    }));
              });
          });
    },
    i = (e, t) => {
      var a, r;
      const n = `${
        null === (a = e.wpcf7) || void 0 === a ? void 0 : a.unitTag
      }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
      null ===
        (r = e.wpcf7.parent.querySelector(
          `.screen-reader-response ul li#${n}`
        )) ||
        void 0 === r ||
        r.remove(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((e) => {
            var t;
            null === (t = e.querySelector(".wpcf7-not-valid-tip")) ||
              void 0 === t ||
              t.remove(),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "false");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.removeAttribute("aria-describedby"),
                  e.classList.remove("wpcf7-not-valid"),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity("");
              });
          });
    };
  function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (wpcf7.blocked) return l(e), void t(e, "submitting");
    const o = new FormData(e);
    n.submitter &&
      n.submitter.name &&
      o.append(n.submitter.name, n.submitter.value);
    const i = {
      contactFormId: e.wpcf7.id,
      pluginVersion: e.wpcf7.pluginVersion,
      contactFormLocale: e.wpcf7.locale,
      unitTag: e.wpcf7.unitTag,
      containerPostId: e.wpcf7.containerPost,
      status: e.wpcf7.status,
      inputs: Array.from(o, (e) => {
        const t = e[0],
          a = e[1];
        return !t.match(/^_/) && { name: t, value: a };
      }).filter((e) => !1 !== e),
      formData: o,
    };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
      method: "POST",
      body: o,
      wpcf7: { endpoint: "feedback", form: e, detail: i },
    })
      .then((r) => {
        const n = t(e, r.status);
        return (
          (i.status = r.status),
          (i.apiResponse = r),
          ["invalid", "unaccepted", "spam", "aborted"].includes(n)
            ? a(e, n, i)
            : ["sent", "failed"].includes(n) && a(e, `mail${n}`, i),
          a(e, "submit", i),
          r
        );
      })
      .then((t) => {
        t.posted_data_hash &&
          (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
            t.posted_data_hash),
          "mail_sent" === t.status &&
            (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
          t.invalid_fields &&
            t.invalid_fields.forEach((t) => {
              c(e, t.field, t.message);
            }),
          e.wpcf7.parent
            .querySelector('.screen-reader-response [role="status"]')
            .insertAdjacentText("beforeend", t.message),
          e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
            e.innerText = t.message;
          });
      })
      .catch((e) => console.error(e));
  }
  r.use((e, r) => {
    if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
      const { form: r, detail: n } = e.wpcf7;
      l(r), a(r, "beforesubmit", n), t(r, "submitting");
    }
    return r(e);
  });
  const l = (e) => {
    e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t) => {
      t.dataset.name && i(e, t.dataset.name);
    }),
      (e.wpcf7.parent.querySelector(
        '.screen-reader-response [role="status"]'
      ).innerText = ""),
      e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
        e.innerText = "";
      });
  };
  function d(e) {
    const n = new FormData(e),
      o = {
        contactFormId: e.wpcf7.id,
        pluginVersion: e.wpcf7.pluginVersion,
        contactFormLocale: e.wpcf7.locale,
        unitTag: e.wpcf7.unitTag,
        containerPostId: e.wpcf7.containerPost,
        status: e.wpcf7.status,
        inputs: Array.from(n, (e) => {
          const t = e[0],
            a = e[1];
          return !t.match(/^_/) && { name: t, value: a };
        }).filter((e) => !1 !== e),
        formData: n,
      };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/refill`,
      method: "GET",
      wpcf7: { endpoint: "refill", form: e, detail: o },
    })
      .then((r) => {
        e.wpcf7.resetOnMailSent
          ? (delete e.wpcf7.resetOnMailSent, t(e, "mail_sent"))
          : t(e, "init"),
          (o.apiResponse = r),
          a(e, "reset", o);
      })
      .catch((e) => console.error(e));
  }
  r.use((e, a) => {
    if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
      const { form: a, detail: r } = e.wpcf7;
      l(a), t(a, "resetting");
    }
    return a(e);
  });
  const u = (e, t) => {
      for (const a in t) {
        const r = t[a];
        e.querySelectorAll(`input[name="${a}"]`).forEach((e) => {
          e.value = "";
        }),
          e
            .querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`)
            .forEach((e) => {
              e.setAttribute("src", r);
            });
        const n = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
        n &&
          e
            .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`)
            .forEach((e) => {
              e.value = n[1];
            });
      }
    },
    p = (e, t) => {
      for (const a in t) {
        const r = t[a][0],
          n = t[a][1];
        e.querySelectorAll(
          `.wpcf7-form-control-wrap[data-name="${a}"]`
        ).forEach((e) => {
          (e.querySelector(`input[name="${a}"]`).value = ""),
            (e.querySelector(".wpcf7-quiz-label").textContent = r),
            (e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value =
              n);
        });
      }
    };
  function f(t) {
    const a = new FormData(t);
    (t.wpcf7 = {
      id: e(a.get("_wpcf7")),
      status: t.getAttribute("data-status"),
      pluginVersion: a.get("_wpcf7_version"),
      locale: a.get("_wpcf7_locale"),
      unitTag: a.get("_wpcf7_unit_tag"),
      containerPost: e(a.get("_wpcf7_container_post")),
      parent: t.closest(".wpcf7"),
      schema: {},
    }),
      t.querySelectorAll(".has-spinner").forEach((e) => {
        e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
      }),
      ((e) => {
        e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t) => {
          t.addEventListener("change", (t) => {
            const a = t.target.getAttribute("name");
            e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach(
              (e) => {
                e !== t.target && (e.checked = !1);
              }
            );
          });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".has-free-text").forEach((t) => {
          const a = t.querySelector("input.wpcf7-free-text"),
            r = t.querySelector('input[type="checkbox"], input[type="radio"]');
          (a.disabled = !r.checked),
            e.addEventListener("change", (e) => {
              (a.disabled = !r.checked),
                e.target === r && r.checked && a.focus();
            });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".wpcf7-validates-as-url").forEach((e) => {
          e.addEventListener("change", (t) => {
            let a = e.value.trim();
            a &&
              !a.match(/^[a-z][a-z0-9.+-]*:/i) &&
              -1 !== a.indexOf(".") &&
              ((a = a.replace(/^\/+/, "")), (a = "http://" + a)),
              (e.value = a);
          });
        });
      })(t),
      ((e) => {
        if (
          !e.querySelector(".wpcf7-acceptance") ||
          e.classList.contains("wpcf7-acceptance-as-validation")
        )
          return;
        const t = () => {
          let t = !0;
          e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
            if (!t || e.classList.contains("optional")) return;
            const a = e.querySelector('input[type="checkbox"]');
            ((e.classList.contains("invert") && a.checked) ||
              (!e.classList.contains("invert") && !a.checked)) &&
              (t = !1);
          }),
            e.querySelectorAll(".wpcf7-submit").forEach((e) => {
              e.disabled = !t;
            });
        };
        t(),
          e.addEventListener("change", (e) => {
            t();
          }),
          e.addEventListener("wpcf7reset", (e) => {
            t();
          });
      })(t),
      ((t) => {
        const a = (t, a) => {
            const r = e(t.getAttribute("data-starting-value")),
              n = e(t.getAttribute("data-maximum-value")),
              o = e(t.getAttribute("data-minimum-value")),
              c = t.classList.contains("down")
                ? r - a.value.length
                : a.value.length;
            t.setAttribute("data-current-value", c),
              (t.innerText = c),
              n && n < a.value.length
                ? t.classList.add("too-long")
                : t.classList.remove("too-long"),
              o && a.value.length < o
                ? t.classList.add("too-short")
                : t.classList.remove("too-short");
          },
          r = (e) => {
            (e = { init: !1, ...e }),
              t.querySelectorAll(".wpcf7-character-count").forEach((r) => {
                const n = r.getAttribute("data-target-name"),
                  o = t.querySelector(`[name="${n}"]`);
                o &&
                  ((o.value = o.defaultValue),
                  a(r, o),
                  e.init &&
                    o.addEventListener("keyup", (e) => {
                      a(r, o);
                    }));
              });
          };
        r({ init: !0 }),
          t.addEventListener("wpcf7reset", (e) => {
            r();
          });
      })(t),
      window.addEventListener("load", (e) => {
        wpcf7.cached && t.reset();
      }),
      t.addEventListener("reset", (e) => {
        wpcf7.reset(t);
      }),
      t.addEventListener("submit", (e) => {
        wpcf7.submit(t, { submitter: e.submitter }), e.preventDefault();
      }),
      t.addEventListener("wpcf7submit", (e) => {
        e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && p(t, e.detail.apiResponse.quiz);
      }),
      t.addEventListener("wpcf7reset", (e) => {
        e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && p(t, e.detail.apiResponse.quiz);
      }),
      r({
        endpoint: `contact-forms/${t.wpcf7.id}/feedback/schema`,
        method: "GET",
      }).then((e) => {
        t.wpcf7.schema = e;
      }),
      t.addEventListener("change", (e) => {
        e.target.closest(".wpcf7-form-control") &&
          wpcf7.validate(t, { target: e.target });
      });
  }
  document.addEventListener("DOMContentLoaded", (e) => {
    var t;
    if ("undefined" == typeof wpcf7)
      return void console.error("wpcf7 is not defined.");
    if (void 0 === wpcf7.api)
      return void console.error("wpcf7.api is not defined.");
    if ("function" != typeof window.fetch)
      return void console.error(
        "Your browser does not support window.fetch()."
      );
    if ("function" != typeof window.FormData)
      return void console.error(
        "Your browser does not support window.FormData()."
      );
    const a = document.querySelectorAll(".wpcf7 > form");
    "function" == typeof a.forEach
      ? ((wpcf7 = {
          init: f,
          submit: s,
          reset: d,
          validate: o,
          ...(null !== (t = wpcf7) && void 0 !== t ? t : {}),
        }),
        a.forEach((e) => wpcf7.init(e)))
      : console.error("Your browser does not support NodeList.forEach().");
  });
})();
/*! jQuery UI - v1.13.1 - 2022-01-20
 * http://jqueryui.com
 * Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
 * Copyright jQuery Foundation and other contributors; Licensed  */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (x) {
  "use strict";
  var t, e, i, n, W, C, o, s, r, l, a, h, u;
  function E(t, e, i) {
    return [
      parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1),
    ];
  }
  function L(t, e) {
    return parseInt(x.css(t, e), 10) || 0;
  }
  function N(t) {
    return null != t && t === t.window;
  }
  (x.ui = x.ui || {}),
    (x.ui.version = "1.13.1"),
    /*!
     * jQuery UI :data 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      data: x.expr.createPseudo
        ? x.expr.createPseudo(function (e) {
            return function (t) {
              return !!x.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!x.data(t, i[3]);
          },
    }),
    /*!
     * jQuery UI Disable Selection 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    }),
    /*!
     * jQuery UI Focusable 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.focusable = function (t, e) {
      var i,
        n,
        o,
        s = t.nodeName.toLowerCase();
      return "area" === s
        ? ((o = (i = t.parentNode).name),
          !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) &&
            0 < (i = x("img[usemap='#" + o + "']")).length &&
            i.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(s)
            ? (n = !t.disabled) &&
              (o = x(t).closest("fieldset")[0]) &&
              (n = !o.disabled)
            : (n = ("a" === s && t.href) || e),
          n &&
            x(t).is(":visible") &&
            (function (t) {
              var e = t.css("visibility");
              for (; "inherit" === e; )
                (t = t.parent()), (e = t.css("visibility"));
              return "visible" === e;
            })(x(t)));
    }),
    x.extend(x.expr.pseudos, {
      focusable: function (t) {
        return x.ui.focusable(t, null != x.attr(t, "tabindex"));
      },
    }),
    (x.fn._form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : x(this[0].form);
    }),
    /*!
     * jQuery UI Form Reset Mixin 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = x(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          x.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(
            x.inArray(this, t),
            1
          ),
          t.length
            ? this.form.data("ui-form-reset-instances", t)
            : this.form
                .removeData("ui-form-reset-instances")
                .off("reset.ui-form-reset"));
      },
    }),
    (x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    /*!
     * jQuery UI Support for jQuery core 1.8.x and newer 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector ||
      ((e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (i = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }),
      (x.escapeSelector = function (t) {
        return (t + "").replace(e, i);
      })),
    (x.fn.even && x.fn.odd) ||
      x.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0;
          });
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1;
          });
        },
      }),
    /*!
     * jQuery UI Keycode 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    /*!
     * jQuery UI Labels 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.fn.labels = function () {
      var t, e, i;
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings()
              )),
              (t = "label[for='" + x.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([]);
    }),
    (x.ui.plugin = {
      add: function (t, e, i) {
        var n,
          o = x.ui[t].prototype;
        for (n in i)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([e, i[n]]);
      },
      call: function (t, e, i, n) {
        var o,
          s = t.plugins[e];
        if (
          s &&
          (n ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (o = 0; o < s.length; o++)
            t.options[s[o][0]] && s[o][1].apply(t.element, i);
      },
    }),
    /*!
     * jQuery UI Position 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */
    (W = Math.max),
    (C = Math.abs),
    (o = /left|center|right/),
    (s = /top|center|bottom/),
    (r = /[\+\-]\d+(\.[\d]+)?%?/),
    (l = /^\w+/),
    (a = /%$/),
    (h = x.fn.position),
    (x.position = {
      scrollbarWidth: function () {
        if (void 0 !== n) return n;
        var t,
          e = x(
            "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"
          ),
          i = e.children()[0];
        return (
          x("body").append(e),
          (t = i.offsetWidth),
          e.css("overflow", "scroll"),
          t === (i = i.offsetWidth) && (i = e[0].clientWidth),
          e.remove(),
          (n = t - i)
        );
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e =
            "scroll" === e ||
            ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && t.height < t.element[0].scrollHeight)
              ? x.position.scrollbarWidth()
              : 0,
          height: e ? x.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = x(t || window),
          i = N(e[0]),
          n = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: n,
          offset: !i && !n ? x(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (x.fn.position = function (f) {
      if (!f || !f.of) return h.apply(this, arguments);
      var c,
        d,
        p,
        g,
        m,
        t,
        v =
          "string" == typeof (f = x.extend({}, f)).of
            ? x(document).find(f.of)
            : x(f.of),
        y = x.position.getWithinInfo(f.within),
        w = x.position.getScrollInfo(y),
        b = (f.collision || "flip").split(" "),
        _ = {},
        e =
          9 === (e = (t = v)[0]).nodeType
            ? {
                width: t.width(),
                height: t.height(),
                offset: { top: 0, left: 0 },
              }
            : N(e)
            ? {
                width: t.width(),
                height: t.height(),
                offset: { top: t.scrollTop(), left: t.scrollLeft() },
              }
            : e.preventDefault
            ? { width: 0, height: 0, offset: { top: e.pageY, left: e.pageX } }
            : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset(),
              };
      return (
        v[0].preventDefault && (f.at = "left top"),
        (d = e.width),
        (p = e.height),
        (m = x.extend({}, (g = e.offset))),
        x.each(["my", "at"], function () {
          var t,
            e,
            i = (f[this] || "").split(" ");
          ((i =
            1 === i.length
              ? o.test(i[0])
                ? i.concat(["center"])
                : s.test(i[0])
                ? ["center"].concat(i)
                : ["center", "center"]
              : i)[0] = o.test(i[0]) ? i[0] : "center"),
            (i[1] = s.test(i[1]) ? i[1] : "center"),
            (t = r.exec(i[0])),
            (e = r.exec(i[1])),
            (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
            (f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]);
        }),
        1 === b.length && (b[1] = b[0]),
        "right" === f.at[0]
          ? (m.left += d)
          : "center" === f.at[0] && (m.left += d / 2),
        "bottom" === f.at[1]
          ? (m.top += p)
          : "center" === f.at[1] && (m.top += p / 2),
        (c = E(_.at, d, p)),
        (m.left += c[0]),
        (m.top += c[1]),
        this.each(function () {
          var i,
            t,
            r = x(this),
            l = r.outerWidth(),
            a = r.outerHeight(),
            e = L(this, "marginLeft"),
            n = L(this, "marginTop"),
            o = l + e + L(this, "marginRight") + w.width,
            s = a + n + L(this, "marginBottom") + w.height,
            h = x.extend({}, m),
            u = E(_.my, r.outerWidth(), r.outerHeight());
          "right" === f.my[0]
            ? (h.left -= l)
            : "center" === f.my[0] && (h.left -= l / 2),
            "bottom" === f.my[1]
              ? (h.top -= a)
              : "center" === f.my[1] && (h.top -= a / 2),
            (h.left += u[0]),
            (h.top += u[1]),
            (i = { marginLeft: e, marginTop: n }),
            x.each(["left", "top"], function (t, e) {
              x.ui.position[b[t]] &&
                x.ui.position[b[t]][e](h, {
                  targetWidth: d,
                  targetHeight: p,
                  elemWidth: l,
                  elemHeight: a,
                  collisionPosition: i,
                  collisionWidth: o,
                  collisionHeight: s,
                  offset: [c[0] + u[0], c[1] + u[1]],
                  my: f.my,
                  at: f.at,
                  within: y,
                  elem: r,
                });
            }),
            f.using &&
              (t = function (t) {
                var e = g.left - h.left,
                  i = e + d - l,
                  n = g.top - h.top,
                  o = n + p - a,
                  s = {
                    target: {
                      element: v,
                      left: g.left,
                      top: g.top,
                      width: d,
                      height: p,
                    },
                    element: {
                      element: r,
                      left: h.left,
                      top: h.top,
                      width: l,
                      height: a,
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle",
                  };
                d < l && C(e + i) < d && (s.horizontal = "center"),
                  p < a && C(n + o) < p && (s.vertical = "middle"),
                  W(C(e), C(i)) > W(C(n), C(o))
                    ? (s.important = "horizontal")
                    : (s.important = "vertical"),
                  f.using.call(this, t, s);
              }),
            r.offset(x.extend(h, { using: t }));
        })
      );
    }),
    (x.ui.position = {
      fit: {
        left: function (t, e) {
          var i,
            n = e.within,
            o = n.isWindow ? n.scrollLeft : n.offset.left,
            n = n.width,
            s = t.left - e.collisionPosition.marginLeft,
            r = o - s,
            l = s + e.collisionWidth - n - o;
          e.collisionWidth > n
            ? 0 < r && l <= 0
              ? ((i = t.left + r + e.collisionWidth - n - o), (t.left += r - i))
              : (t.left =
                  !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o)
            : 0 < r
            ? (t.left += r)
            : 0 < l
            ? (t.left -= l)
            : (t.left = W(t.left - s, t.left));
        },
        top: function (t, e) {
          var i,
            n = e.within,
            n = n.isWindow ? n.scrollTop : n.offset.top,
            o = e.within.height,
            s = t.top - e.collisionPosition.marginTop,
            r = n - s,
            l = s + e.collisionHeight - o - n;
          e.collisionHeight > o
            ? 0 < r && l <= 0
              ? ((i = t.top + r + e.collisionHeight - o - n), (t.top += r - i))
              : (t.top =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n)
            : 0 < r
            ? (t.top += r)
            : 0 < l
            ? (t.top -= l)
            : (t.top = W(t.top - s, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            n = i.offset.left + i.scrollLeft,
            o = i.width,
            i = i.isWindow ? i.scrollLeft : i.offset.left,
            s = t.left - e.collisionPosition.marginLeft,
            r = s - i,
            s = s + e.collisionWidth - o - i,
            l =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            a =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            h = -2 * e.offset[0];
          r < 0
            ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 ||
                o < C(r)) &&
              (t.left += l + a + h)
            : 0 < s &&
              (0 <
                (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) ||
                C(n) < s) &&
              (t.left += l + a + h);
        },
        top: function (t, e) {
          var i = e.within,
            n = i.offset.top + i.scrollTop,
            o = i.height,
            i = i.isWindow ? i.scrollTop : i.offset.top,
            s = t.top - e.collisionPosition.marginTop,
            r = s - i,
            s = s + e.collisionHeight - o - i,
            l =
              "top" === e.my[1]
                ? -e.elemHeight
                : "bottom" === e.my[1]
                ? e.elemHeight
                : 0,
            a =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            h = -2 * e.offset[1];
          r < 0
            ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 ||
                o < C(r)) &&
              (t.top += l + a + h)
            : 0 < s &&
              (0 <
                (n = t.top - e.collisionPosition.marginTop + l + a + h - i) ||
                C(n) < s) &&
              (t.top += l + a + h);
        },
      },
      flipfit: {
        left: function () {
          x.ui.position.flip.left.apply(this, arguments),
            x.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          x.ui.position.flip.top.apply(this, arguments),
            x.ui.position.fit.top.apply(this, arguments);
        },
      },
    }),
    (x.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = (i = i || e.body).nodeName ? i : e.body);
    }),
    (x.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur");
    }),
    /*!
     * jQuery UI Scroll Parent 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = x(this);
            return (
              (!i || "static" !== t.css("position")) &&
              n.test(
                t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== e && t.length
        ? t
        : x(this[0].ownerDocument || document);
    }),
    /*!
     * jQuery UI Tabbable 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      tabbable: function (t) {
        var e = x.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && x.ui.focusable(t, i);
      },
    }),
    /*!
     * jQuery UI Unique ID 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.fn.extend({
      uniqueId:
        ((u = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++u);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id");
        });
      },
    });
  /*!
   * jQuery UI Widget 1.13.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var f,
    c = 0,
    d = Array.prototype.hasOwnProperty,
    p = Array.prototype.slice;
  (x.cleanData =
    ((f = x.cleanData),
    function (t) {
      for (var e, i, n = 0; null != (i = t[n]); n++)
        (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
      f(t);
    })),
    (x.widget = function (t, i, e) {
      var n,
        o,
        s,
        r = {},
        l = t.split(".")[0],
        a = l + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = x.Widget)),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        (x.expr.pseudos[a.toLowerCase()] = function (t) {
          return !!x.data(t, a);
        }),
        (x[l] = x[l] || {}),
        (n = x[l][t]),
        (o = x[l][t] =
          function (t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        x.extend(o, n, {
          version: e.version,
          _proto: x.extend({}, e),
          _childConstructors: [],
        }),
        ((s = new i()).options = x.widget.extend({}, s.options)),
        x.each(e, function (e, n) {
          function o() {
            return i.prototype[e].apply(this, arguments);
          }
          function s(t) {
            return i.prototype[e].apply(this, t);
          }
          r[e] =
            "function" != typeof n
              ? n
              : function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (
                    (this._super = o),
                    (this._superApply = s),
                    (t = n.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  );
                };
        }),
        (o.prototype = x.widget.extend(
          s,
          { widgetEventPrefix: (n && s.widgetEventPrefix) || t },
          r,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: a }
        )),
        n
          ? (x.each(n._childConstructors, function (t, e) {
              var i = e.prototype;
              x.widget(i.namespace + "." + i.widgetName, o, e._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
      );
    }),
    (x.widget.extend = function (t) {
      for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
        for (e in n[o])
          (i = n[o][e]),
            d.call(n[o], e) &&
              void 0 !== i &&
              (x.isPlainObject(i)
                ? (t[e] = x.isPlainObject(t[e])
                    ? x.widget.extend({}, t[e], i)
                    : x.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (x.widget.bridge = function (s, e) {
      var r = e.prototype.widgetFullName || s;
      x.fn[s] = function (i) {
        var t = "string" == typeof i,
          n = p.call(arguments, 1),
          o = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = x.data(this, r);
                  return "instance" === i
                    ? ((o = e), !1)
                    : e
                    ? "function" != typeof e[i] || "_" === i.charAt(0)
                      ? x.error(
                          "no such method '" +
                            i +
                            "' for " +
                            s +
                            " widget instance"
                        )
                      : (t = e[i].apply(e, n)) !== e && void 0 !== t
                      ? ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1)
                      : void 0
                    : x.error(
                        "cannot call methods on " +
                          s +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (o = void 0)
            : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
              this.each(function () {
                var t = x.data(this, r);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : x.data(this, r, new e(i, this));
              })),
          o
        );
      };
    }),
    (x.Widget = function () {}),
    (x.Widget._childConstructors = []),
    (x.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = x(e || this.defaultElement || this)[0]),
          (this.element = x(e)),
          (this.uuid = c++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = x()),
          (this.hoverable = x()),
          (this.focusable = x()),
          (this.classesElementLookup = {}),
          e !== this &&
            (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = x(e.style ? e.ownerDocument : e.document || e)),
            (this.window = x(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = x.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: x.noop,
      _create: x.noop,
      _init: x.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          x.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: x.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          n,
          o,
          s = t;
        if (0 === arguments.length) return x.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((s = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              n = s[t] = x.widget.extend({}, this.options[t]), o = 0;
              o < i.length - 1;
              o++
            )
              (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            s[t] = e;
          }
        return this._setOptions(s), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (t) {
        var e, i, n;
        for (e in t)
          (n = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              n &&
              n.length &&
              ((i = x(n.get())),
              this._removeClass(n, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (o) {
        var s = [],
          r = this;
        function t(t, e) {
          for (var i, n = 0; n < t.length; n++)
            (i = r.classesElementLookup[t[n]] || x()),
              (i = o.add
                ? ((function () {
                    var i = [];
                    o.element.each(function (t, e) {
                      x
                        .map(r.classesElementLookup, function (t) {
                          return t;
                        })
                        .some(function (t) {
                          return t.is(e);
                        }) || i.push(e);
                    }),
                      r._on(x(i), { remove: "_untrackClassesElement" });
                  })(),
                  x(x.uniqueSort(i.get().concat(o.element.get()))))
                : x(i.not(o.element).get())),
              (r.classesElementLookup[t[n]] = i),
              s.push(t[n]),
              e && o.classes[t[n]] && s.push(o.classes[t[n]]);
        }
        return (
          (o = x.extend(
            { element: this.element, classes: this.options.classes || {} },
            o
          )).keys && t(o.keys.match(/\S+/g) || [], !0),
          o.extra && t(o.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var n = this;
        x.each(n.classesElementLookup, function (t, e) {
          -1 !== x.inArray(i.target, e) &&
            (n.classesElementLookup[t] = x(e.not(i.target).get()));
        }),
          this._off(x(i.target));
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, n) {
        var o = "string" == typeof t || null === t,
          e = {
            extra: o ? e : i,
            keys: o ? t : e,
            element: o ? this.element : t,
            add: (n = "boolean" == typeof n ? n : i),
          };
        return e.element.toggleClass(this._classes(e), n), this;
      },
      _on: function (o, s, t) {
        var r,
          l = this;
        "boolean" != typeof o && ((t = s), (s = o), (o = !1)),
          t
            ? ((s = r = x(s)), (this.bindings = this.bindings.add(s)))
            : ((t = s), (s = this.element), (r = this.widget())),
          x.each(t, function (t, e) {
            function i() {
              if (
                o ||
                (!0 !== l.options.disabled &&
                  !x(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? l[e] : e).apply(l, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || x.guid++);
            var t = t.match(/^([\w:-]*)\s*(.*)$/),
              n = t[1] + l.eventNamespace,
              t = t[2];
            t ? r.on(n, t, i) : s.on(n, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.off(e),
          (this.bindings = x(this.bindings.not(t).get())),
          (this.focusable = x(this.focusable.not(t).get())),
          (this.hoverable = x(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var n,
          o,
          s = this.options[t];
        if (
          ((i = i || {}),
          ((e = x.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (o = e.originalEvent))
        )
          for (n in o) n in e || (e[n] = o[n]);
        return (
          this.element.trigger(e, i),
          !(
            ("function" == typeof s &&
              !1 === s.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    x.each({ show: "fadeIn", hide: "fadeOut" }, function (s, r) {
      x.Widget.prototype["_" + s] = function (e, t, i) {
        var n,
          o = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || r
            : s;
        "number" == typeof (t = t || {})
          ? (t = { duration: t })
          : !0 === t && (t = {}),
          (n = !x.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          n && x.effects && x.effects.effect[o]
            ? e[s](t)
            : o !== s && e[o]
            ? e[o](t.duration, t.easing, i)
            : e.queue(function (t) {
                x(this)[s](), i && i.call(e[0]), t();
              });
      };
    });
});
/*!
 * jQuery UI Datepicker 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery", "./core"], e)
    : e(jQuery);
})(function (V) {
  "use strict";
  var n;
  function e() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
        selectMonthLabel: "Select month",
        selectYearLabel: "Select year",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        onUpdateDatepicker: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      V.extend(this._defaults, this.regional[""]),
      (this.regional.en = V.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = V.extend(!0, {}, this.regional.en)),
      (this.dpDiv = a(
        V(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function a(e) {
    var t =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e
      .on("mouseout", t, function () {
        V(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            V(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            V(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", t, d);
  }
  function d() {
    V.datepicker._isDisabledDatepicker(
      (n.inline ? n.dpDiv.parent() : n.input)[0]
    ) ||
      (V(this)
        .parents(".ui-datepicker-calendar")
        .find("a")
        .removeClass("ui-state-hover"),
      V(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") &&
        V(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") &&
        V(this).addClass("ui-datepicker-next-hover"));
  }
  function c(e, t) {
    for (var a in (V.extend(e, t), t)) null == t[a] && (e[a] = t[a]);
  }
  return (
    V.extend(V.ui, { datepicker: { version: "1.13.1" } }),
    V.extend(e.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (e) {
        return c(this._defaults, e || {}), this;
      },
      _attachDatepicker: function (e, t) {
        var a,
          i = e.nodeName.toLowerCase(),
          s = "div" === i || "span" === i;
        e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
          ((a = this._newInst(V(e), s)).settings = V.extend({}, t || {})),
          "input" === i
            ? this._connectDatepicker(e, a)
            : s && this._inlineDatepicker(e, a);
      },
      _newInst: function (e, t) {
        return {
          id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: t,
          dpDiv: t
            ? a(
                V(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, t) {
        var a = V(e);
        (t.append = V([])),
          (t.trigger = V([])),
          a.hasClass(this.markerClassName) ||
            (this._attachments(a, t),
            a
              .addClass(this.markerClassName)
              .on("keydown", this._doKeyDown)
              .on("keypress", this._doKeyPress)
              .on("keyup", this._doKeyUp),
            this._autoSize(t),
            V.data(e, "datepicker", t),
            t.settings.disabled && this._disableDatepicker(e));
      },
      _attachments: function (e, t) {
        var a,
          i = this._get(t, "appendText"),
          s = this._get(t, "isRTL");
        t.append && t.append.remove(),
          i &&
            ((t.append = V("<span>").addClass(this._appendClass).text(i)),
            e[s ? "before" : "after"](t.append)),
          e.off("focus", this._showDatepicker),
          t.trigger && t.trigger.remove(),
          ("focus" !== (i = this._get(t, "showOn")) && "both" !== i) ||
            e.on("focus", this._showDatepicker),
          ("button" !== i && "both" !== i) ||
            ((i = this._get(t, "buttonText")),
            (a = this._get(t, "buttonImage")),
            this._get(t, "buttonImageOnly")
              ? (t.trigger = V("<img>")
                  .addClass(this._triggerClass)
                  .attr({ src: a, alt: i, title: i }))
              : ((t.trigger = V("<button type='button'>").addClass(
                  this._triggerClass
                )),
                a
                  ? t.trigger.html(
                      V("<img>").attr({ src: a, alt: i, title: i })
                    )
                  : t.trigger.text(i)),
            e[s ? "before" : "after"](t.trigger),
            t.trigger.on("click", function () {
              return (
                V.datepicker._datepickerShowing &&
                V.datepicker._lastInput === e[0]
                  ? V.datepicker._hideDatepicker()
                  : (V.datepicker._datepickerShowing &&
                      V.datepicker._lastInput !== e[0] &&
                      V.datepicker._hideDatepicker(),
                    V.datepicker._showDatepicker(e[0])),
                !1
              );
            }));
      },
      _autoSize: function (e) {
        var t, a, i, s, r, n;
        this._get(e, "autoSize") &&
          !e.inline &&
          ((r = new Date(2009, 11, 20)),
          (n = this._get(e, "dateFormat")).match(/[DM]/) &&
            (r.setMonth(
              (t = function (e) {
                for (s = i = a = 0; s < e.length; s++)
                  e[s].length > a && ((a = e[s].length), (i = s));
                return i;
              })(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            r.setDate(
              t(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                r.getDay()
            )),
          e.input.attr("size", this._formatDate(e, r).length));
      },
      _inlineDatepicker: function (e, t) {
        var a = V(e);
        a.hasClass(this.markerClassName) ||
          (a.addClass(this.markerClassName).append(t.dpDiv),
          V.data(e, "datepicker", t),
          this._setDate(t, this._getDefaultDate(t), !0),
          this._updateDatepicker(t),
          this._updateAlternate(t),
          t.settings.disabled && this._disableDatepicker(e),
          t.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (e, t, a, i, s) {
        var r,
          n = this._dialogInst;
        return (
          n ||
            ((this.uuid += 1),
            (r = "dp" + this.uuid),
            (this._dialogInput = V(
              "<input type='text' id='" +
                r +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.on("keydown", this._doKeyDown),
            V("body").append(this._dialogInput),
            ((n = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            V.data(this._dialogInput[0], "datepicker", n)),
          c(n.settings, i || {}),
          (t = t && t.constructor === Date ? this._formatDate(n, t) : t),
          this._dialogInput.val(t),
          (this._pos = s ? (s.length ? s : [s.pageX, s.pageY]) : null),
          this._pos ||
            ((r = document.documentElement.clientWidth),
            (i = document.documentElement.clientHeight),
            (t =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (s = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [r / 2 - 100 + t, i / 2 - 150 + s])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (n.settings.onSelect = a),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          V.blockUI && V.blockUI(this.dpDiv),
          V.data(this._dialogInput[0], "datepicker", n),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var t,
          a = V(e),
          i = V.data(e, "datepicker");
        a.hasClass(this.markerClassName) &&
          ((t = e.nodeName.toLowerCase()),
          V.removeData(e, "datepicker"),
          "input" === t
            ? (i.append.remove(),
              i.trigger.remove(),
              a
                .removeClass(this.markerClassName)
                .off("focus", this._showDatepicker)
                .off("keydown", this._doKeyDown)
                .off("keypress", this._doKeyPress)
                .off("keyup", this._doKeyUp))
            : ("div" !== t && "span" !== t) ||
              a.removeClass(this.markerClassName).empty(),
          n === i && ((n = null), (this._curInst = null)));
      },
      _enableDatepicker: function (t) {
        var e,
          a = V(t),
          i = V.data(t, "datepicker");
        a.hasClass(this.markerClassName) &&
          ("input" === (e = t.nodeName.toLowerCase())
            ? ((t.disabled = !1),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== e && "span" !== e) ||
              ((i = a.children("." + this._inlineClass))
                .children()
                .removeClass("ui-state-disabled"),
              i
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = V.map(this._disabledInputs, function (e) {
            return e === t ? null : e;
          })));
      },
      _disableDatepicker: function (t) {
        var e,
          a = V(t),
          i = V.data(t, "datepicker");
        a.hasClass(this.markerClassName) &&
          ("input" === (e = t.nodeName.toLowerCase())
            ? ((t.disabled = !0),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== e && "span" !== e) ||
              ((i = a.children("." + this._inlineClass))
                .children()
                .addClass("ui-state-disabled"),
              i
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = V.map(this._disabledInputs, function (e) {
            return e === t ? null : e;
          })),
          (this._disabledInputs[this._disabledInputs.length] = t));
      },
      _isDisabledDatepicker: function (e) {
        if (!e) return !1;
        for (var t = 0; t < this._disabledInputs.length; t++)
          if (this._disabledInputs[t] === e) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return V.data(e, "datepicker");
        } catch (e) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (e, t, a) {
        var i,
          s,
          r = this._getInst(e);
        if (2 === arguments.length && "string" == typeof t)
          return "defaults" === t
            ? V.extend({}, V.datepicker._defaults)
            : r
            ? "all" === t
              ? V.extend({}, r.settings)
              : this._get(r, t)
            : null;
        (i = t || {}),
          "string" == typeof t && ((i = {})[t] = a),
          r &&
            (this._curInst === r && this._hideDatepicker(),
            (t = this._getDateDatepicker(e, !0)),
            (a = this._getMinMaxDate(r, "min")),
            (s = this._getMinMaxDate(r, "max")),
            c(r.settings, i),
            null !== a &&
              void 0 !== i.dateFormat &&
              void 0 === i.minDate &&
              (r.settings.minDate = this._formatDate(r, a)),
            null !== s &&
              void 0 !== i.dateFormat &&
              void 0 === i.maxDate &&
              (r.settings.maxDate = this._formatDate(r, s)),
            "disabled" in i &&
              (i.disabled
                ? this._disableDatepicker(e)
                : this._enableDatepicker(e)),
            this._attachments(V(e), r),
            this._autoSize(r),
            this._setDate(r, t),
            this._updateAlternate(r),
            this._updateDatepicker(r));
      },
      _changeDatepicker: function (e, t, a) {
        this._optionDatepicker(e, t, a);
      },
      _refreshDatepicker: function (e) {
        e = this._getInst(e);
        e && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (e, t) {
        e = this._getInst(e);
        e &&
          (this._setDate(e, t),
          this._updateDatepicker(e),
          this._updateAlternate(e));
      },
      _getDateDatepicker: function (e, t) {
        e = this._getInst(e);
        return (
          e && !e.inline && this._setDateFromField(e, t),
          e ? this._getDate(e) : null
        );
      },
      _doKeyDown: function (e) {
        var t,
          a,
          i = V.datepicker._getInst(e.target),
          s = !0,
          r = i.dpDiv.is(".ui-datepicker-rtl");
        if (((i._keyEvent = !0), V.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              V.datepicker._hideDatepicker(), (s = !1);
              break;
            case 13:
              return (
                (a = V(
                  "td." +
                    V.datepicker._dayOverClass +
                    ":not(." +
                    V.datepicker._currentClass +
                    ")",
                  i.dpDiv
                ))[0] &&
                  V.datepicker._selectDay(
                    e.target,
                    i.selectedMonth,
                    i.selectedYear,
                    a[0]
                  ),
                (a = V.datepicker._get(i, "onSelect"))
                  ? ((t = V.datepicker._formatDate(i)),
                    a.apply(i.input ? i.input[0] : null, [t, i]))
                  : V.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              V.datepicker._hideDatepicker();
              break;
            case 33:
              V.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? -V.datepicker._get(i, "stepBigMonths")
                  : -V.datepicker._get(i, "stepMonths"),
                "M"
              );
              break;
            case 34:
              V.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? +V.datepicker._get(i, "stepBigMonths")
                  : +V.datepicker._get(i, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (e.ctrlKey || e.metaKey) && V.datepicker._clearDate(e.target),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 36:
              (e.ctrlKey || e.metaKey) && V.datepicker._gotoToday(e.target),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 37:
              (e.ctrlKey || e.metaKey) &&
                V.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                (s = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  V.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? -V.datepicker._get(i, "stepBigMonths")
                      : -V.datepicker._get(i, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (e.ctrlKey || e.metaKey) &&
                V.datepicker._adjustDate(e.target, -7, "D"),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 39:
              (e.ctrlKey || e.metaKey) &&
                V.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                (s = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  V.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? +V.datepicker._get(i, "stepBigMonths")
                      : +V.datepicker._get(i, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (e.ctrlKey || e.metaKey) &&
                V.datepicker._adjustDate(e.target, 7, "D"),
                (s = e.ctrlKey || e.metaKey);
              break;
            default:
              s = !1;
          }
        else
          36 === e.keyCode && e.ctrlKey
            ? V.datepicker._showDatepicker(this)
            : (s = !1);
        s && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var t,
          a = V.datepicker._getInst(e.target);
        if (V.datepicker._get(a, "constrainInput"))
          return (
            (a = V.datepicker._possibleChars(
              V.datepicker._get(a, "dateFormat")
            )),
            (t = String.fromCharCode(
              null == e.charCode ? e.keyCode : e.charCode
            )),
            e.ctrlKey || e.metaKey || t < " " || !a || -1 < a.indexOf(t)
          );
      },
      _doKeyUp: function (e) {
        e = V.datepicker._getInst(e.target);
        if (e.input.val() !== e.lastVal)
          try {
            V.datepicker.parseDate(
              V.datepicker._get(e, "dateFormat"),
              e.input ? e.input.val() : null,
              V.datepicker._getFormatConfig(e)
            ) &&
              (V.datepicker._setDateFromField(e),
              V.datepicker._updateAlternate(e),
              V.datepicker._updateDatepicker(e));
          } catch (e) {}
        return !0;
      },
      _showDatepicker: function (e) {
        var t, a, i, s;
        "input" !== (e = e.target || e).nodeName.toLowerCase() &&
          (e = V("input", e.parentNode)[0]),
          V.datepicker._isDisabledDatepicker(e) ||
            V.datepicker._lastInput === e ||
            ((s = V.datepicker._getInst(e)),
            V.datepicker._curInst &&
              V.datepicker._curInst !== s &&
              (V.datepicker._curInst.dpDiv.stop(!0, !0),
              s &&
                V.datepicker._datepickerShowing &&
                V.datepicker._hideDatepicker(V.datepicker._curInst.input[0])),
            !1 !==
              (a = (a = V.datepicker._get(s, "beforeShow"))
                ? a.apply(e, [e, s])
                : {}) &&
              (c(s.settings, a),
              (s.lastVal = null),
              (V.datepicker._lastInput = e),
              V.datepicker._setDateFromField(s),
              V.datepicker._inDialog && (e.value = ""),
              V.datepicker._pos ||
                ((V.datepicker._pos = V.datepicker._findPos(e)),
                (V.datepicker._pos[1] += e.offsetHeight)),
              (t = !1),
              V(e)
                .parents()
                .each(function () {
                  return !(t |= "fixed" === V(this).css("position"));
                }),
              (a = { left: V.datepicker._pos[0], top: V.datepicker._pos[1] }),
              (V.datepicker._pos = null),
              s.dpDiv.empty(),
              s.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              V.datepicker._updateDatepicker(s),
              (a = V.datepicker._checkOffset(s, a, t)),
              s.dpDiv.css({
                position:
                  V.datepicker._inDialog && V.blockUI
                    ? "static"
                    : t
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: a.left + "px",
                top: a.top + "px",
              }),
              s.inline ||
                ((a = V.datepicker._get(s, "showAnim")),
                (i = V.datepicker._get(s, "duration")),
                s.dpDiv.css(
                  "z-index",
                  (function (e) {
                    for (var t; e.length && e[0] !== document; ) {
                      if (
                        ("absolute" === (t = e.css("position")) ||
                          "relative" === t ||
                          "fixed" === t) &&
                        ((t = parseInt(e.css("zIndex"), 10)),
                        !isNaN(t) && 0 !== t)
                      )
                        return t;
                      e = e.parent();
                    }
                    return 0;
                  })(V(e)) + 1
                ),
                (V.datepicker._datepickerShowing = !0),
                V.effects && V.effects.effect[a]
                  ? s.dpDiv.show(a, V.datepicker._get(s, "showOptions"), i)
                  : s.dpDiv[a || "show"](a ? i : null),
                V.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
                (V.datepicker._curInst = s))));
      },
      _updateDatepicker: function (e) {
        (this.maxRows = 4),
          (n = e).dpDiv.empty().append(this._generateHTML(e)),
          this._attachHandlers(e);
        var t,
          a = this._getNumberOfMonths(e),
          i = a[1],
          s = e.dpDiv.find("." + this._dayOverClass + " a"),
          r = V.datepicker._get(e, "onUpdateDatepicker");
        0 < s.length && d.apply(s.get(0)),
          e.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width(""),
          1 < i &&
            e.dpDiv
              .addClass("ui-datepicker-multi-" + i)
              .css("width", 17 * i + "em"),
          e.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          e === V.datepicker._curInst &&
            V.datepicker._datepickerShowing &&
            V.datepicker._shouldFocusInput(e) &&
            e.input.trigger("focus"),
          e.yearshtml &&
            ((t = e.yearshtml),
            setTimeout(function () {
              t === e.yearshtml &&
                e.yearshtml &&
                e.dpDiv
                  .find("select.ui-datepicker-year")
                  .first()
                  .replaceWith(e.yearshtml),
                (t = e.yearshtml = null);
            }, 0)),
          r && r.apply(e.input ? e.input[0] : null, [e]);
      },
      _shouldFocusInput: function (e) {
        return (
          e.input &&
          e.input.is(":visible") &&
          !e.input.is(":disabled") &&
          !e.input.is(":focus")
        );
      },
      _checkOffset: function (e, t, a) {
        var i = e.dpDiv.outerWidth(),
          s = e.dpDiv.outerHeight(),
          r = e.input ? e.input.outerWidth() : 0,
          n = e.input ? e.input.outerHeight() : 0,
          d =
            document.documentElement.clientWidth +
            (a ? 0 : V(document).scrollLeft()),
          c =
            document.documentElement.clientHeight +
            (a ? 0 : V(document).scrollTop());
        return (
          (t.left -= this._get(e, "isRTL") ? i - r : 0),
          (t.left -=
            a && t.left === e.input.offset().left
              ? V(document).scrollLeft()
              : 0),
          (t.top -=
            a && t.top === e.input.offset().top + n
              ? V(document).scrollTop()
              : 0),
          (t.left -= Math.min(
            t.left,
            t.left + i > d && i < d ? Math.abs(t.left + i - d) : 0
          )),
          (t.top -= Math.min(
            t.top,
            t.top + s > c && s < c ? Math.abs(s + n) : 0
          )),
          t
        );
      },
      _findPos: function (e) {
        for (
          var t = this._getInst(e), a = this._get(t, "isRTL");
          e &&
          ("hidden" === e.type || 1 !== e.nodeType || V.expr.pseudos.hidden(e));

        )
          e = e[a ? "previousSibling" : "nextSibling"];
        return [(t = V(e).offset()).left, t.top];
      },
      _hideDatepicker: function (e) {
        var t,
          a,
          i = this._curInst;
        !i ||
          (e && i !== V.data(e, "datepicker")) ||
          (this._datepickerShowing &&
            ((e = this._get(i, "showAnim")),
            (a = this._get(i, "duration")),
            (t = function () {
              V.datepicker._tidyDialog(i);
            }),
            V.effects && (V.effects.effect[e] || V.effects[e])
              ? i.dpDiv.hide(e, V.datepicker._get(i, "showOptions"), a, t)
              : i.dpDiv[
                  "slideDown" === e
                    ? "slideUp"
                    : "fadeIn" === e
                    ? "fadeOut"
                    : "hide"
                ](e ? a : null, t),
            e || t(),
            (this._datepickerShowing = !1),
            (a = this._get(i, "onClose")) &&
              a.apply(i.input ? i.input[0] : null, [
                i.input ? i.input.val() : "",
                i,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              V.blockUI && (V.unblockUI(), V("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (e) {
        var t;
        V.datepicker._curInst &&
          ((e = V(e.target)),
          (t = V.datepicker._getInst(e[0])),
          (!(
            e[0].id === V.datepicker._mainDivId ||
            0 !== e.parents("#" + V.datepicker._mainDivId).length ||
            e.hasClass(V.datepicker.markerClassName) ||
            e.closest("." + V.datepicker._triggerClass).length ||
            !V.datepicker._datepickerShowing ||
            (V.datepicker._inDialog && V.blockUI)
          ) ||
            (e.hasClass(V.datepicker.markerClassName) &&
              V.datepicker._curInst !== t)) &&
            V.datepicker._hideDatepicker());
      },
      _adjustDate: function (e, t, a) {
        var e = V(e),
          i = this._getInst(e[0]);
        this._isDisabledDatepicker(e[0]) ||
          (this._adjustInstDate(i, t, a), this._updateDatepicker(i));
      },
      _gotoToday: function (e) {
        var t,
          e = V(e),
          a = this._getInst(e[0]);
        this._get(a, "gotoCurrent") && a.currentDay
          ? ((a.selectedDay = a.currentDay),
            (a.drawMonth = a.selectedMonth = a.currentMonth),
            (a.drawYear = a.selectedYear = a.currentYear))
          : ((t = new Date()),
            (a.selectedDay = t.getDate()),
            (a.drawMonth = a.selectedMonth = t.getMonth()),
            (a.drawYear = a.selectedYear = t.getFullYear())),
          this._notifyChange(a),
          this._adjustDate(e);
      },
      _selectMonthYear: function (e, t, a) {
        var e = V(e),
          i = this._getInst(e[0]);
        (i["selected" + ("M" === a ? "Month" : "Year")] = i[
          "draw" + ("M" === a ? "Month" : "Year")
        ] =
          parseInt(t.options[t.selectedIndex].value, 10)),
          this._notifyChange(i),
          this._adjustDate(e);
      },
      _selectDay: function (e, t, a, i) {
        var s = V(e);
        V(i).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(s[0]) ||
          (((s = this._getInst(s[0])).selectedDay = s.currentDay =
            parseInt(V("a", i).attr("data-date"))),
          (s.selectedMonth = s.currentMonth = t),
          (s.selectedYear = s.currentYear = a),
          this._selectDate(
            e,
            this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)
          ));
      },
      _clearDate: function (e) {
        e = V(e);
        this._selectDate(e, "");
      },
      _selectDate: function (e, t) {
        var a,
          e = V(e),
          e = this._getInst(e[0]);
        (t = null != t ? t : this._formatDate(e)),
          e.input && e.input.val(t),
          this._updateAlternate(e),
          (a = this._get(e, "onSelect"))
            ? a.apply(e.input ? e.input[0] : null, [t, e])
            : e.input && e.input.trigger("change"),
          e.inline
            ? this._updateDatepicker(e)
            : (this._hideDatepicker(),
              (this._lastInput = e.input[0]),
              "object" != typeof e.input[0] && e.input.trigger("focus"),
              (this._lastInput = null));
      },
      _updateAlternate: function (e) {
        var t,
          a,
          i = this._get(e, "altField");
        i &&
          ((a = this._get(e, "altFormat") || this._get(e, "dateFormat")),
          (t = this._getDate(e)),
          (a = this.formatDate(a, t, this._getFormatConfig(e))),
          V(document).find(i).val(a));
      },
      noWeekends: function (e) {
        e = e.getDay();
        return [0 < e && e < 6, ""];
      },
      iso8601Week: function (e) {
        var t,
          e = new Date(e.getTime());
        return (
          e.setDate(e.getDate() + 4 - (e.getDay() || 7)),
          (t = e.getTime()),
          e.setMonth(0),
          e.setDate(1),
          Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        );
      },
      parseDate: function (t, s, e) {
        if (null == t || null == s) throw "Invalid arguments";
        if ("" === (s = "object" == typeof s ? s.toString() : s + ""))
          return null;
        for (
          var a,
            i,
            r = 0,
            n =
              (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            n =
              "string" != typeof n
                ? n
                : (new Date().getFullYear() % 100) + parseInt(n, 10),
            d = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
            c = (e ? e.dayNames : null) || this._defaults.dayNames,
            o =
              (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
            l = (e ? e.monthNames : null) || this._defaults.monthNames,
            h = -1,
            u = -1,
            p = -1,
            g = -1,
            _ = !1,
            f = function (e) {
              e = y + 1 < t.length && t.charAt(y + 1) === e;
              return e && y++, e;
            },
            k = function (e) {
              var t = f(e),
                t =
                  "@" === e
                    ? 14
                    : "!" === e
                    ? 20
                    : "y" === e && t
                    ? 4
                    : "o" === e
                    ? 3
                    : 2,
                e = new RegExp("^\\d{" + ("y" === e ? t : 1) + "," + t + "}"),
                t = s.substring(r).match(e);
              if (t) return (r += t[0].length), parseInt(t[0], 10);
              throw "Missing number at position " + r;
            },
            D = function (e, t, a) {
              var i = -1,
                e = V.map(f(e) ? a : t, function (e, t) {
                  return [[t, e]];
                }).sort(function (e, t) {
                  return -(e[1].length - t[1].length);
                });
              if (
                (V.each(e, function (e, t) {
                  var a = t[1];
                  if (s.substr(r, a.length).toLowerCase() === a.toLowerCase())
                    return (i = t[0]), (r += a.length), !1;
                }),
                -1 !== i)
              )
                return i + 1;
              throw "Unknown name at position " + r;
            },
            m = function () {
              if (s.charAt(r) !== t.charAt(y))
                throw "Unexpected literal at position " + r;
              r++;
            },
            y = 0;
          y < t.length;
          y++
        )
          if (_) "'" !== t.charAt(y) || f("'") ? m() : (_ = !1);
          else
            switch (t.charAt(y)) {
              case "d":
                p = k("d");
                break;
              case "D":
                D("D", d, c);
                break;
              case "o":
                g = k("o");
                break;
              case "m":
                u = k("m");
                break;
              case "M":
                u = D("M", o, l);
                break;
              case "y":
                h = k("y");
                break;
              case "@":
                (h = (i = new Date(k("@"))).getFullYear()),
                  (u = i.getMonth() + 1),
                  (p = i.getDate());
                break;
              case "!":
                (h = (i = new Date(
                  (k("!") - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (u = i.getMonth() + 1),
                  (p = i.getDate());
                break;
              case "'":
                f("'") ? m() : (_ = !0);
                break;
              default:
                m();
            }
        if (r < s.length && ((e = s.substr(r)), !/^\s+/.test(e)))
          throw "Extra/unparsed characters found in date: " + e;
        if (
          (-1 === h
            ? (h = new Date().getFullYear())
            : h < 100 &&
              (h +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (h <= n ? 0 : -100)),
          -1 < g)
        )
          for (u = 1, p = g; ; ) {
            if (p <= (a = this._getDaysInMonth(h, u - 1))) break;
            u++, (p -= a);
          }
        if (
          (i = this._daylightSavingAdjust(
            new Date(h, u - 1, p)
          )).getFullYear() !== h ||
          i.getMonth() + 1 !== u ||
          i.getDate() !== p
        )
          throw "Invalid date";
        return i;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (t, e, a) {
        if (!e) return "";
        function i(e, t, a) {
          var i = "" + t;
          if (l(e)) for (; i.length < a; ) i = "0" + i;
          return i;
        }
        function s(e, t, a, i) {
          return (l(e) ? i : a)[t];
        }
        var r,
          n = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (a ? a.dayNames : null) || this._defaults.dayNames,
          c = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
          o = (a ? a.monthNames : null) || this._defaults.monthNames,
          l = function (e) {
            e = r + 1 < t.length && t.charAt(r + 1) === e;
            return e && r++, e;
          },
          h = "",
          u = !1;
        if (e)
          for (r = 0; r < t.length; r++)
            if (u)
              "'" !== t.charAt(r) || l("'") ? (h += t.charAt(r)) : (u = !1);
            else
              switch (t.charAt(r)) {
                case "d":
                  h += i("d", e.getDate(), 2);
                  break;
                case "D":
                  h += s("D", e.getDay(), n, d);
                  break;
                case "o":
                  h += i(
                    "o",
                    Math.round(
                      (new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate()
                      ).getTime() -
                        new Date(e.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  h += i("m", e.getMonth() + 1, 2);
                  break;
                case "M":
                  h += s("M", e.getMonth(), c, o);
                  break;
                case "y":
                  h += l("y")
                    ? e.getFullYear()
                    : (e.getFullYear() % 100 < 10 ? "0" : "") +
                      (e.getFullYear() % 100);
                  break;
                case "@":
                  h += e.getTime();
                  break;
                case "!":
                  h += 1e4 * e.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  l("'") ? (h += "'") : (u = !0);
                  break;
                default:
                  h += t.charAt(r);
              }
        return h;
      },
      _possibleChars: function (t) {
        for (
          var e = "",
            a = !1,
            i = function (e) {
              e = s + 1 < t.length && t.charAt(s + 1) === e;
              return e && s++, e;
            },
            s = 0;
          s < t.length;
          s++
        )
          if (a) "'" !== t.charAt(s) || i("'") ? (e += t.charAt(s)) : (a = !1);
          else
            switch (t.charAt(s)) {
              case "d":
              case "m":
              case "y":
              case "@":
                e += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                i("'") ? (e += "'") : (a = !0);
                break;
              default:
                e += t.charAt(s);
            }
        return e;
      },
      _get: function (e, t) {
        return (void 0 !== e.settings[t] ? e.settings : this._defaults)[t];
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
          var a = this._get(e, "dateFormat"),
            i = (e.lastVal = e.input ? e.input.val() : null),
            s = this._getDefaultDate(e),
            r = s,
            n = this._getFormatConfig(e);
          try {
            r = this.parseDate(a, i, n) || s;
          } catch (e) {
            i = t ? "" : i;
          }
          (e.selectedDay = r.getDate()),
            (e.drawMonth = e.selectedMonth = r.getMonth()),
            (e.drawYear = e.selectedYear = r.getFullYear()),
            (e.currentDay = i ? r.getDate() : 0),
            (e.currentMonth = i ? r.getMonth() : 0),
            (e.currentYear = i ? r.getFullYear() : 0),
            this._adjustInstDate(e);
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(
          e,
          this._determineDate(e, this._get(e, "defaultDate"), new Date())
        );
      },
      _determineDate: function (d, e, t) {
        var a,
          i =
            null == e || "" === e
              ? t
              : "string" == typeof e
              ? (function (e) {
                  try {
                    return V.datepicker.parseDate(
                      V.datepicker._get(d, "dateFormat"),
                      e,
                      V.datepicker._getFormatConfig(d)
                    );
                  } catch (e) {}
                  for (
                    var t =
                        (e.toLowerCase().match(/^c/)
                          ? V.datepicker._getDate(d)
                          : null) || new Date(),
                      a = t.getFullYear(),
                      i = t.getMonth(),
                      s = t.getDate(),
                      r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      n = r.exec(e);
                    n;

                  ) {
                    switch (n[2] || "d") {
                      case "d":
                      case "D":
                        s += parseInt(n[1], 10);
                        break;
                      case "w":
                      case "W":
                        s += 7 * parseInt(n[1], 10);
                        break;
                      case "m":
                      case "M":
                        (i += parseInt(n[1], 10)),
                          (s = Math.min(s, V.datepicker._getDaysInMonth(a, i)));
                        break;
                      case "y":
                      case "Y":
                        (a += parseInt(n[1], 10)),
                          (s = Math.min(s, V.datepicker._getDaysInMonth(a, i)));
                    }
                    n = r.exec(e);
                  }
                  return new Date(a, i, s);
                })(e)
              : "number" == typeof e
              ? isNaN(e)
                ? t
                : ((i = e), (a = new Date()).setDate(a.getDate() + i), a)
              : new Date(e.getTime());
        return (
          (i = i && "Invalid Date" === i.toString() ? t : i) &&
            (i.setHours(0),
            i.setMinutes(0),
            i.setSeconds(0),
            i.setMilliseconds(0)),
          this._daylightSavingAdjust(i)
        );
      },
      _daylightSavingAdjust: function (e) {
        return e
          ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e)
          : null;
      },
      _setDate: function (e, t, a) {
        var i = !t,
          s = e.selectedMonth,
          r = e.selectedYear,
          t = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
        (e.selectedDay = e.currentDay = t.getDate()),
          (e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth()),
          (e.drawYear = e.selectedYear = e.currentYear = t.getFullYear()),
          (s === e.selectedMonth && r === e.selectedYear) ||
            a ||
            this._notifyChange(e),
          this._adjustInstDate(e),
          e.input && e.input.val(i ? "" : this._formatDate(e));
      },
      _getDate: function (e) {
        return !e.currentYear || (e.input && "" === e.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      },
      _attachHandlers: function (e) {
        var t = this._get(e, "stepMonths"),
          a = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
          var e = {
            prev: function () {
              V.datepicker._adjustDate(a, -t, "M");
            },
            next: function () {
              V.datepicker._adjustDate(a, +t, "M");
            },
            hide: function () {
              V.datepicker._hideDatepicker();
            },
            today: function () {
              V.datepicker._gotoToday(a);
            },
            selectDay: function () {
              return (
                V.datepicker._selectDay(
                  a,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return V.datepicker._selectMonthYear(a, this, "M"), !1;
            },
            selectYear: function () {
              return V.datepicker._selectMonthYear(a, this, "Y"), !1;
            },
          };
          V(this).on(
            this.getAttribute("data-event"),
            e[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (e) {
        var t,
          a,
          i,
          s,
          r,
          O,
          L,
          R,
          H,
          n,
          d,
          W,
          c,
          o,
          l,
          h,
          u,
          p,
          g,
          _,
          f,
          k,
          E,
          D,
          m,
          U,
          y,
          P,
          z,
          v,
          M,
          b,
          w = new Date(),
          B = this._daylightSavingAdjust(
            new Date(w.getFullYear(), w.getMonth(), w.getDate())
          ),
          C = this._get(e, "isRTL"),
          w = this._get(e, "showButtonPanel"),
          I = this._get(e, "hideIfNoPrevNext"),
          x = this._get(e, "navigationAsDateFormat"),
          Y = this._getNumberOfMonths(e),
          S = this._get(e, "showCurrentAtPos"),
          F = this._get(e, "stepMonths"),
          J = 1 !== Y[0] || 1 !== Y[1],
          N = this._daylightSavingAdjust(
            e.currentDay
              ? new Date(e.currentYear, e.currentMonth, e.currentDay)
              : new Date(9999, 9, 9)
          ),
          T = this._getMinMaxDate(e, "min"),
          A = this._getMinMaxDate(e, "max"),
          K = e.drawMonth - S,
          j = e.drawYear;
        if ((K < 0 && ((K += 12), j--), A))
          for (
            t = this._daylightSavingAdjust(
              new Date(
                A.getFullYear(),
                A.getMonth() - Y[0] * Y[1] + 1,
                A.getDate()
              )
            ),
              t = T && t < T ? T : t;
            this._daylightSavingAdjust(new Date(j, K, 1)) > t;

          )
            --K < 0 && ((K = 11), j--);
        for (
          e.drawMonth = K,
            e.drawYear = j,
            S = this._get(e, "prevText"),
            S = x
              ? this.formatDate(
                  S,
                  this._daylightSavingAdjust(new Date(j, K - F, 1)),
                  this._getFormatConfig(e)
                )
              : S,
            a = this._canAdjustMonth(e, -1, j, K)
              ? V("<a>")
                  .attr({
                    class: "ui-datepicker-prev ui-corner-all",
                    "data-handler": "prev",
                    "data-event": "click",
                    title: S,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (C ? "e" : "w")
                      )
                      .text(S)
                  )[0].outerHTML
              : I
              ? ""
              : V("<a>")
                  .attr({
                    class: "ui-datepicker-prev ui-corner-all ui-state-disabled",
                    title: S,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (C ? "e" : "w")
                      )
                      .text(S)
                  )[0].outerHTML,
            S = this._get(e, "nextText"),
            S = x
              ? this.formatDate(
                  S,
                  this._daylightSavingAdjust(new Date(j, K + F, 1)),
                  this._getFormatConfig(e)
                )
              : S,
            i = this._canAdjustMonth(e, 1, j, K)
              ? V("<a>")
                  .attr({
                    class: "ui-datepicker-next ui-corner-all",
                    "data-handler": "next",
                    "data-event": "click",
                    title: S,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (C ? "w" : "e")
                      )
                      .text(S)
                  )[0].outerHTML
              : I
              ? ""
              : V("<a>")
                  .attr({
                    class: "ui-datepicker-next ui-corner-all ui-state-disabled",
                    title: S,
                  })
                  .append(
                    V("<span>")
                      .attr(
                        "class",
                        "ui-icon ui-icon-circle-triangle-" + (C ? "w" : "e")
                      )
                      .text(S)
                  )[0].outerHTML,
            F = this._get(e, "currentText"),
            I = this._get(e, "gotoCurrent") && e.currentDay ? N : B,
            F = x ? this.formatDate(F, I, this._getFormatConfig(e)) : F,
            S = "",
            e.inline ||
              (S = V("<button>")
                .attr({
                  type: "button",
                  class:
                    "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
                  "data-handler": "hide",
                  "data-event": "click",
                })
                .text(this._get(e, "closeText"))[0].outerHTML),
            x = "",
            w &&
              (x = V("<div class='ui-datepicker-buttonpane ui-widget-content'>")
                .append(C ? S : "")
                .append(
                  this._isInRange(e, I)
                    ? V("<button>")
                        .attr({
                          type: "button",
                          class:
                            "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
                          "data-handler": "today",
                          "data-event": "click",
                        })
                        .text(F)
                    : ""
                )
                .append(C ? "" : S)[0].outerHTML),
            s = parseInt(this._get(e, "firstDay"), 10),
            s = isNaN(s) ? 0 : s,
            r = this._get(e, "showWeek"),
            O = this._get(e, "dayNames"),
            L = this._get(e, "dayNamesMin"),
            R = this._get(e, "monthNames"),
            H = this._get(e, "monthNamesShort"),
            n = this._get(e, "beforeShowDay"),
            d = this._get(e, "showOtherMonths"),
            W = this._get(e, "selectOtherMonths"),
            c = this._getDefaultDate(e),
            o = "",
            h = 0;
          h < Y[0];
          h++
        ) {
          for (u = "", this.maxRows = 4, p = 0; p < Y[1]; p++) {
            if (
              ((g = this._daylightSavingAdjust(new Date(j, K, e.selectedDay))),
              (_ = " ui-corner-all"),
              (f = ""),
              J)
            ) {
              if (((f += "<div class='ui-datepicker-group"), 1 < Y[1]))
                switch (p) {
                  case 0:
                    (f += " ui-datepicker-group-first"),
                      (_ = " ui-corner-" + (C ? "right" : "left"));
                    break;
                  case Y[1] - 1:
                    (f += " ui-datepicker-group-last"),
                      (_ = " ui-corner-" + (C ? "left" : "right"));
                    break;
                  default:
                    (f += " ui-datepicker-group-middle"), (_ = "");
                }
              f += "'>";
            }
            for (
              f +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                _ +
                "'>" +
                (/all|left/.test(_) && 0 === h ? (C ? i : a) : "") +
                (/all|right/.test(_) && 0 === h ? (C ? a : i) : "") +
                this._generateMonthYearHeader(
                  e,
                  K,
                  j,
                  T,
                  A,
                  0 < h || 0 < p,
                  R,
                  H
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                k = r
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(e, "weekHeader") +
                    "</th>"
                  : "",
                l = 0;
              l < 7;
              l++
            )
              k +=
                "<th scope='col'" +
                (5 <= (l + s + 6) % 7
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                "><span title='" +
                O[(E = (l + s) % 7)] +
                "'>" +
                L[E] +
                "</span></th>";
            for (
              f += k + "</tr></thead><tbody>",
                m = this._getDaysInMonth(j, K),
                j === e.selectedYear &&
                  K === e.selectedMonth &&
                  (e.selectedDay = Math.min(e.selectedDay, m)),
                D = (this._getFirstDayOfMonth(j, K) - s + 7) % 7,
                m = Math.ceil((D + m) / 7),
                U = J && this.maxRows > m ? this.maxRows : m,
                this.maxRows = U,
                y = this._daylightSavingAdjust(new Date(j, K, 1 - D)),
                P = 0;
              P < U;
              P++
            ) {
              for (
                f += "<tr>",
                  z = r
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(e, "calculateWeek")(y) +
                      "</td>"
                    : "",
                  l = 0;
                l < 7;
                l++
              )
                (v = n ? n.apply(e.input ? e.input[0] : null, [y]) : [!0, ""]),
                  (b =
                    ((M = y.getMonth() !== K) && !W) ||
                    !v[0] ||
                    (T && y < T) ||
                    (A && A < y)),
                  (z +=
                    "<td class='" +
                    (5 <= (l + s + 6) % 7 ? " ui-datepicker-week-end" : "") +
                    (M ? " ui-datepicker-other-month" : "") +
                    ((y.getTime() === g.getTime() &&
                      K === e.selectedMonth &&
                      e._keyEvent) ||
                    (c.getTime() === y.getTime() && c.getTime() === g.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (b
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (M && !d
                      ? ""
                      : " " +
                        v[1] +
                        (y.getTime() === N.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (y.getTime() === B.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((M && !d) || !v[2]
                      ? ""
                      : " title='" + v[2].replace(/'/g, "&#39;") + "'") +
                    (b
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        y.getMonth() +
                        "' data-year='" +
                        y.getFullYear() +
                        "'") +
                    ">" +
                    (M && !d
                      ? "&#xa0;"
                      : b
                      ? "<span class='ui-state-default'>" +
                        y.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (y.getTime() === B.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (y.getTime() === N.getTime()
                          ? " ui-state-active"
                          : "") +
                        (M ? " ui-priority-secondary" : "") +
                        "' href='#' aria-current='" +
                        (y.getTime() === N.getTime() ? "true" : "false") +
                        "' data-date='" +
                        y.getDate() +
                        "'>" +
                        y.getDate() +
                        "</a>") +
                    "</td>"),
                  y.setDate(y.getDate() + 1),
                  (y = this._daylightSavingAdjust(y));
              f += z + "</tr>";
            }
            11 < ++K && ((K = 0), j++),
              (u += f +=
                "</tbody></table>" +
                (J
                  ? "</div>" +
                    (0 < Y[0] && p === Y[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : ""));
          }
          o += u;
        }
        return (o += x), (e._keyEvent = !1), o;
      },
      _generateMonthYearHeader: function (e, t, a, i, s, r, n, d) {
        var c,
          o,
          l,
          h,
          u,
          p,
          g = this._get(e, "changeMonth"),
          _ = this._get(e, "changeYear"),
          f = this._get(e, "showMonthAfterYear"),
          k = this._get(e, "selectMonthLabel"),
          D = this._get(e, "selectYearLabel"),
          m = "<div class='ui-datepicker-title'>",
          y = "";
        if (r || !g)
          y += "<span class='ui-datepicker-month'>" + n[t] + "</span>";
        else {
          for (
            c = i && i.getFullYear() === a,
              o = s && s.getFullYear() === a,
              y +=
                "<select class='ui-datepicker-month' aria-label='" +
                k +
                "' data-handler='selectMonth' data-event='change'>",
              l = 0;
            l < 12;
            l++
          )
            (!c || l >= i.getMonth()) &&
              (!o || l <= s.getMonth()) &&
              (y +=
                "<option value='" +
                l +
                "'" +
                (l === t ? " selected='selected'" : "") +
                ">" +
                d[l] +
                "</option>");
          y += "</select>";
        }
        if ((f || (m += y + (!r && g && _ ? "" : "&#xa0;")), !e.yearshtml))
          if (((e.yearshtml = ""), r || !_))
            m += "<span class='ui-datepicker-year'>" + a + "</span>";
          else {
            for (
              n = this._get(e, "yearRange").split(":"),
                h = new Date().getFullYear(),
                u = (k = function (e) {
                  e = e.match(/c[+\-].*/)
                    ? a + parseInt(e.substring(1), 10)
                    : e.match(/[+\-].*/)
                    ? h + parseInt(e, 10)
                    : parseInt(e, 10);
                  return isNaN(e) ? h : e;
                })(n[0]),
                p = Math.max(u, k(n[1] || "")),
                u = i ? Math.max(u, i.getFullYear()) : u,
                p = s ? Math.min(p, s.getFullYear()) : p,
                e.yearshtml +=
                  "<select class='ui-datepicker-year' aria-label='" +
                  D +
                  "' data-handler='selectYear' data-event='change'>";
              u <= p;
              u++
            )
              e.yearshtml +=
                "<option value='" +
                u +
                "'" +
                (u === a ? " selected='selected'" : "") +
                ">" +
                u +
                "</option>";
            (e.yearshtml += "</select>"),
              (m += e.yearshtml),
              (e.yearshtml = null);
          }
        return (
          (m += this._get(e, "yearSuffix")),
          f && (m += (!r && g && _ ? "" : "&#xa0;") + y),
          (m += "</div>")
        );
      },
      _adjustInstDate: function (e, t, a) {
        var i = e.selectedYear + ("Y" === a ? t : 0),
          s = e.selectedMonth + ("M" === a ? t : 0),
          t =
            Math.min(e.selectedDay, this._getDaysInMonth(i, s)) +
            ("D" === a ? t : 0),
          i = this._restrictMinMax(
            e,
            this._daylightSavingAdjust(new Date(i, s, t))
          );
        (e.selectedDay = i.getDate()),
          (e.drawMonth = e.selectedMonth = i.getMonth()),
          (e.drawYear = e.selectedYear = i.getFullYear()),
          ("M" !== a && "Y" !== a) || this._notifyChange(e);
      },
      _restrictMinMax: function (e, t) {
        var a = this._getMinMaxDate(e, "min"),
          e = this._getMinMaxDate(e, "max"),
          a = a && t < a ? a : t;
        return e && e < a ? e : a;
      },
      _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t &&
          t.apply(e.input ? e.input[0] : null, [
            e.selectedYear,
            e.selectedMonth + 1,
            e,
          ]);
      },
      _getNumberOfMonths: function (e) {
        e = this._get(e, "numberOfMonths");
        return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null);
      },
      _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay();
      },
      _canAdjustMonth: function (e, t, a, i) {
        var s = this._getNumberOfMonths(e),
          a = this._daylightSavingAdjust(
            new Date(a, i + (t < 0 ? t : s[0] * s[1]), 1)
          );
        return (
          t < 0 &&
            a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())),
          this._isInRange(e, a)
        );
      },
      _isInRange: function (e, t) {
        var a,
          i = this._getMinMaxDate(e, "min"),
          s = this._getMinMaxDate(e, "max"),
          r = null,
          n = null,
          e = this._get(e, "yearRange");
        return (
          e &&
            ((e = e.split(":")),
            (a = new Date().getFullYear()),
            (r = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            e[0].match(/[+\-].*/) && (r += a),
            e[1].match(/[+\-].*/) && (n += a)),
          (!i || t.getTime() >= i.getTime()) &&
            (!s || t.getTime() <= s.getTime()) &&
            (!r || t.getFullYear() >= r) &&
            (!n || t.getFullYear() <= n)
        );
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return {
          shortYearCutoff: (t =
            "string" != typeof t
              ? t
              : (new Date().getFullYear() % 100) + parseInt(t, 10)),
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames"),
        };
      },
      _formatDate: function (e, t, a, i) {
        t ||
          ((e.currentDay = e.selectedDay),
          (e.currentMonth = e.selectedMonth),
          (e.currentYear = e.selectedYear));
        i = t
          ? "object" == typeof t
            ? t
            : this._daylightSavingAdjust(new Date(i, a, t))
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
        return this.formatDate(
          this._get(e, "dateFormat"),
          i,
          this._getFormatConfig(e)
        );
      },
    }),
    (V.fn.datepicker = function (e) {
      if (!this.length) return this;
      V.datepicker.initialized ||
        (V(document).on("mousedown", V.datepicker._checkExternalClick),
        (V.datepicker.initialized = !0)),
        0 === V("#" + V.datepicker._mainDivId).length &&
          V("body").append(V.datepicker.dpDiv);
      var t = Array.prototype.slice.call(arguments, 1);
      return ("string" == typeof e &&
        ("isDisabled" === e || "getDate" === e || "widget" === e)) ||
        ("option" === e &&
          2 === arguments.length &&
          "string" == typeof arguments[1])
        ? V.datepicker["_" + e + "Datepicker"].apply(
            V.datepicker,
            [this[0]].concat(t)
          )
        : this.each(function () {
            "string" == typeof e
              ? V.datepicker["_" + e + "Datepicker"].apply(
                  V.datepicker,
                  [this].concat(t)
                )
              : V.datepicker._attachDatepicker(this, e);
          });
    }),
    (V.datepicker = new e()),
    (V.datepicker.initialized = !1),
    (V.datepicker.uuid = new Date().getTime()),
    (V.datepicker.version = "1.13.1"),
    V.datepicker
  );
});
jQuery(function (jQuery) {
  jQuery.datepicker.setDefaults({
    closeText: "Close",
    currentText: "Today",
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    nextText: "Next",
    prevText: "Previous",
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
    dateFormat: "MM d, yy",
    firstDay: 1,
    isRTL: !1,
  });
});
var objectL10n = {
  closeText: "Done",
  currentText: "Today",
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  monthStatus: "Show a different month",
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
  firstDay: "1",
};
(function ($) {
  "use strict";
  window.gdlr_debounce_function = function (func, threshold, execAsap) {
    var timeout;
    return function debounced() {
      var obj = this,
        args = arguments;
      function delayed() {
        if (!execAsap) {
          func.apply(obj, args);
        }
        timeout = null;
      }
      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(obj, args);
      }
      timeout = setTimeout(delayed, threshold);
    };
  };
  window.gdlr_encode_utf8 = function (s) {
    return unescape(encodeURIComponent(s));
  };
  $.fn.gdlr_datepicker_range = function () {
    var block_date_val = $(this).attr("data-block");
    var gdlr_dfm = $(this).attr("data-dfm")
      ? $(this).attr("data-dfm")
      : "yy-mm-dd";
    var min_date = 0;
    if ($(this).attr("data-current-date")) {
      min_date = new Date(
        $(this).attr("data-current-date") + "T00:00:00+00:00"
      );
      min_date = new Date(
        min_date.getTime() + min_date.getTimezoneOffset() * 60000
      );
    }
    $(this).datepicker({
      minDate: min_date,
      dateFormat: gdlr_dfm,
      numberOfMonths: [1, 2],
      beforeShowDay: function (date) {
        if (block_date_val) {
          var block_date = JSON.parse(block_date_val);
          var current_date = $.datepicker.formatDate("yy-mm-dd", date);
          if (block_date.indexOf(current_date) > -1) {
            return [!1];
          }
        }
        var date1 = $.datepicker.parseDate(
          "yy-mm-dd",
          $("#gdlr-check-in").siblings(".gdlr-datepicker-alt").val()
        );
        var date2 = $.datepicker.parseDate(
          "yy-mm-dd",
          $("#gdlr-check-out").siblings(".gdlr-datepicker-alt").val()
        );
        return [
          !0,
          date1 &&
          (date.getTime() == date1.getTime() ||
            (date2 && date >= date1 && date <= date2))
            ? "dp-highlight"
            : "",
        ];
      },
      onSelect: function (dateText, inst) {
        var date1 = $.datepicker.parseDate(
          "yy-mm-dd",
          $("#gdlr-check-in").siblings(".gdlr-datepicker-alt").val()
        );
        var date2 = $.datepicker.parseDate(
          "yy-mm-dd",
          $("#gdlr-check-out").siblings(".gdlr-datepicker-alt").val()
        );
        if (!date1 || date2) {
          $("#gdlr-check-in").datepicker("setDate", dateText);
          $("#gdlr-check-out").val("");
          $("#gdlr-check-out").siblings(".gdlr-datepicker-alt").val("");
        } else {
          $("#gdlr-check-out")
            .datepicker("setDate", dateText)
            .trigger("change");
        }
      },
      closeText: objectL10n.closeText,
      currentText: objectL10n.currentText,
      monthNames: objectL10n.monthNames,
      monthNamesShort: objectL10n.monthNamesShort,
      dayNames: objectL10n.dayNames,
      dayNamesShort: objectL10n.dayNamesShort,
      dayNamesMin: objectL10n.dayNamesMin,
      firstDay: objectL10n.firstDay,
    });
  };
  $.fn.gdlr_datepicker = function () {
    $(this).each(function () {
      if ($(this).hasClass("hasDatepicker")) {
        return;
      }
      var t = $(this);
      var block_date_val = JSON.parse($(this).attr("data-block"));
      var min_date = 0;
      var prev_block = !1;
      if ($(this).attr("data-current-date")) {
        min_date = new Date(
          $(this).attr("data-current-date") + "T00:00:00+00:00"
        );
        min_date = new Date(
          min_date.getTime() + min_date.getTimezoneOffset() * 60000
        );
      }
      $(this).datepicker({
        dateFormat: $(this).attr("data-dfm")
          ? $(this).attr("data-dfm")
          : "yy-mm-dd",
        minDate: min_date,
        beforeShowDay: function (date) {
          if (block_date_val) {
            var current_date = $.datepicker.formatDate("yy-mm-dd", date);
            if (t.is("#gdlr-check-out")) {
              var tmp_date = new Date();
              tmp_date.setTime(date.getTime() - 86400000);
              var prev_date = $.datepicker.formatDate("yy-mm-dd", tmp_date);
              return [block_date_val.indexOf(prev_date) == -1];
            } else {
              return [block_date_val.indexOf(current_date) == -1];
            }
          }
          return [!0];
        },
        altField: $(this).siblings(".gdlr-datepicker-alt"),
        altFormat: "yy-mm-dd",
        changeMonth: !0,
        changeYear: !0,
        onSelect: function (dateText, inst) {
          $(this).trigger("change");
          $("#gdlr-datepicker-range").datepicker("refresh");
        },
        closeText: objectL10n.closeText,
        currentText: objectL10n.currentText,
        monthNames: objectL10n.monthNames,
        monthNamesShort: objectL10n.monthNamesShort,
        dayNames: objectL10n.dayNames,
        dayNamesShort: objectL10n.dayNamesShort,
        dayNamesMin: objectL10n.dayNamesMin,
        firstDay: objectL10n.firstDay,
      });
      var current_date = new Date($(this).val() + "T00:00:00+00:00");
      current_date = new Date(
        current_date.getTime() + current_date.getTimezoneOffset() * 60000
      );
      $(this).datepicker("setDate", current_date);
    });
    var tmp_chkin = $(this)
      .filter("#gdlr-check-in")
      .siblings(".gdlr-datepicker-alt")
      .val();
    var tmp_chkout = $(this)
      .filter("#gdlr-check-out")
      .siblings(".gdlr-datepicker-alt")
      .val();
    if (tmp_chkin == tmp_chkout) {
      var tmp_chkout_date = new Date(tmp_chkin + "T00:00:00Z");
      tmp_chkout_date.setDate(tmp_chkout_date.getDate() + 1);
      $(this).filter("#gdlr-check-out").datepicker("setDate", tmp_chkout_date);
    }
  };
  $.fn.gdlr_single_booking = function () {
    var resv_bar = $(this);
    $(this).find(".gdlr-datepicker").gdlr_datepicker();
    $(this).on("change", "#gdlr-night, #gdlr-check-in", function () {
      var check_in = resv_bar.find("#gdlr-check-in");
      var check_out = resv_bar.find("#gdlr-check-out");
      var min_night = check_out.attr("data-min-night");
      min_night = min_night ? parseInt(min_night) : 1;
      var night_num = resv_bar.find("#gdlr-night");
      if (check_in.val()) {
        var check_out_date = check_in.datepicker("getDate", "+1d");
        check_out_date.setDate(
          check_out_date.getDate() + parseInt(night_num.val())
        );
        var check_out_min = check_in.datepicker("getDate", "+1d");
        check_out_min.setDate(check_out_min.getDate() + min_night);
        check_out.datepicker("option", "minDate", check_out_min);
        check_out.datepicker("setDate", check_out_date);
      }
    });
    $(this).on("change", "#gdlr-check-out", function () {
      var check_in = resv_bar.find("#gdlr-check-in").datepicker("getDate");
      var check_out = $(this).datepicker("getDate");
      var date_diff = Math.round((check_out - check_in) / 86400000);
      if (check_in && date_diff > 0) {
        var night_num = resv_bar.find("#gdlr-night");
        if (
          night_num.children('option[value="' + date_diff + '"]').length == 0
        ) {
          night_num.append(
            '<option value="' + date_diff + '" >' + date_diff + "</option>"
          );
        }
        $("#gdlr-night").val(date_diff);
      }
    });
    $(this).on("change", "#gdlr-room-number", function () {
      var amount = parseInt($(this).val());
      var resv_room = resv_bar.find("#gdlr-reservation-people-amount-wrapper");
      var room_diff = amount - resv_room.children().length;
      if (room_diff > 0) {
        for (var i = 0; i < room_diff; i++) {
          var new_room = resv_room.children(":first-child").clone().hide();
          new_room
            .find(".gdlr-reservation-people-title span")
            .html(resv_room.children().length + 1);
          new_room.appendTo(resv_room).slideDown(200);
        }
      } else if (room_diff < 0) {
        resv_room
          .children()
          .slice(room_diff)
          .slideUp(200, function () {
            $(this).remove();
          });
      }
    });
    $(this).submit(function () {
      if ($(this).find("select[name=gdlr-hotel-branches]").val() == "") {
        $(this).find("#please-select-branches").slideDown();
        return !1;
      }
    });
  };
  $.fn.gdlr_hotel_booking = function () {
    var area = {
      wrapper: $(this),
      resv_bar: $(this).find("#gdlr-reservation-bar"),
      room_form: $(this).find("#gdlr-reservation-bar-room-form"),
      date_form: $(this).find("#gdlr-reservation-bar-date-form"),
      summary_form: $(this).find("#gdlr-reservation-bar-summary-form"),
      service_form: $(this).find("#gdlr-reservation-bar-service-form"),
      proc_bar: $(this).find("#gdlr-booking-process-bar"),
      content_area: $(this).find("#gdlr-booking-content-inner"),
    };
    var resv_bar = {
      init: function () {
        area.resv_bar.on("change", "#gdlr-night, #gdlr-check-in", function () {
          var check_in = area.resv_bar.find("#gdlr-check-in");
          var check_out = area.resv_bar.find("#gdlr-check-out");
          var min_night = check_out.attr("data-min-night");
          min_night = min_night ? parseInt(min_night) : 1;
          var night_num = area.resv_bar.find("#gdlr-night");
          if (check_in.val()) {
            var check_out_date = check_in.datepicker("getDate", "+1d");
            check_out_date.setDate(
              check_out_date.getDate() + parseInt(night_num.val())
            );
            var check_out_min = check_in.datepicker("getDate", "+1d");
            check_out_min.setDate(check_out_min.getDate() + min_night);
            check_out.datepicker("option", "minDate", check_out_min);
            check_out.datepicker("setDate", check_out_date);
            $("#gdlr-datepicker-range").datepicker("refresh");
          }
        });
        area.resv_bar.on("change", "#gdlr-check-out", function () {
          var check_in = area.resv_bar
            .find("#gdlr-check-in")
            .datepicker("getDate");
          var check_out = $(this).datepicker("getDate");
          var date_diff = Math.round((check_out - check_in) / 86400000);
          if (check_in && date_diff > 0) {
            var night_num = area.resv_bar.find("#gdlr-night");
            if (
              night_num.children('option[value="' + date_diff + '"]').length ==
              0
            ) {
              night_num.append(
                '<option value="' + date_diff + '" >' + date_diff + "</option>"
              );
            }
            $("#gdlr-night").val(date_diff);
          }
        });
        area.resv_bar.on("change", "#gdlr-room-number", function () {
          var amount = parseInt($(this).val());
          var resv_room = area.resv_bar.find(
            "#gdlr-reservation-people-amount-wrapper"
          );
          var room_diff = amount - resv_room.children().length;
          if (room_diff > 0) {
            for (var i = 0; i < room_diff; i++) {
              var new_room = resv_room.children(":first-child").clone().hide();
              new_room
                .find(".gdlr-reservation-people-title span")
                .html(resv_room.children().length + 1);
              new_room.appendTo(resv_room).slideDown(200);
            }
          } else if (room_diff < 0) {
            resv_room
              .children()
              .slice(room_diff)
              .slideUp(200, function () {
                $(this).remove();
              });
          }
        });
        area.resv_bar.on("click", "#gdlr-reservation-bar-button", function () {
          main.change_state({ state: 2 });
          return !1;
        });
        area.resv_bar.on(
          "change",
          "#gdlr-check-in, #gdlr-night, #gdlr-check-out, #gdlr-room-number, #gdlr-hotel-branches, " +
            'select[name="gdlr-adult-number[]"], select[name="gdlr-children-number[]"]',
          function () {
            if (parseInt(area.proc_bar.attr("data-state")) > 1) {
              area.room_form.slideUp(function () {
                $(this).html("").removeClass("gdlr-active");
                main.change_state({ state: 2 });
              });
            }
          }
        );
      },
    };
    var proc_bar = {
      get_state: function () {
        return area.proc_bar.attr("data-state");
      },
      set_state: function (state) {
        area.proc_bar.attr("data-state", state);
        area.proc_bar
          .children('[data-process="' + state + '"]')
          .addClass("gdlr-active")
          .siblings()
          .removeClass("gdlr-active");
      },
    };
    var main = {
      init: function () {
        area.wrapper.find("#gdlr-datepicker-range").gdlr_datepicker_range();
        resv_bar.init();
        this.room_select();
        this.contact_submit();
      },
      room_select: function () {
        area.content_area.on("click", ".price-breakdown-close", function () {
          $(this).closest(".price-breakdown-wrapper").fadeOut(200);
          return !1;
        });
        area.content_area.on("click", ".gdlr-price-break-down", function () {
          $(this).children(".price-breakdown-wrapper").fadeIn(200);
        });
        area.content_area.on("click", ".gdlr-room-selection", function () {
          $("body").animate({ scrollTop: area.proc_bar.offset().top }, 300);
          area.room_form
            .find(".gdlr-active input")
            .val($(this).attr("data-roomid"));
          main.change_state({ state: 2, room_id: $(this).attr("data-roomid") });
          return !1;
        });
        area.content_area.on("click", ".gdlr-pagination a", function () {
          main.change_state({ paged: $(this).attr("data-paged"), state: 2 });
          return !1;
        });
        area.room_form.on(
          "click",
          ".gdlr-reservation-change-room",
          function () {
            $(this).closest(".gdlr-reservation-room").find("input").val("");
            main.change_state({ state: 2 });
            return !1;
          }
        );
        area.summary_form.on("click", "#gdlr-edit-booking-button", function () {
          area.room_form
            .find(".gdlr-reservation-room:first-child input")
            .val("");
          main.change_state({ state: 2 });
          return !1;
        });
        area.summary_form.on(
          "change",
          'input[name="pay_deposit"]',
          function () {
            if ($(this).val() == "true") {
              area.summary_form
                .find(".gdlr-price-deposit-inner-wrapper")
                .slideDown();
              area.summary_form
                .find(".gdlr-price-summary-grand-total")
                .removeClass("gdlr-active");
              area.summary_form
                .find('input[name="pay_deposit"][value="true"]')
                .closest("span")
                .addClass("gdlr-active");
              area.summary_form
                .find('input[name="pay_deposit"][value="false"]')
                .closest("span")
                .removeClass("gdlr-active");
            } else {
              area.summary_form
                .find(".gdlr-price-deposit-inner-wrapper")
                .slideUp();
              area.summary_form
                .find(".gdlr-price-summary-grand-total")
                .addClass("gdlr-active");
              area.summary_form
                .find('input[name="pay_deposit"][value="true"]')
                .closest("span")
                .removeClass("gdlr-active");
              area.summary_form
                .find('input[name="pay_deposit"][value="false"]')
                .closest("span")
                .addClass("gdlr-active");
            }
            return !1;
          }
        );
      },
      contact_submit: function () {
        area.content_area.on(
          "change",
          ".gdlr-room-service-checkbox input",
          function () {
            if ($(this).is(":checked")) {
              $(this)
                .parent("label")
                .addClass("gdlr-active")
                .siblings("input")
                .prop("disabled", !1);
            } else {
              $(this)
                .parent("label")
                .removeClass("gdlr-active")
                .siblings("input")
                .prop("disabled", !0);
            }
          }
        );
        area.content_area.on("click", ".gdlr-room-selection-next", function () {
          main.change_state({
            state: 3,
            service: $(this)
              .siblings(".gdlr-booking-service-wrapper")
              .children("form"),
          });
          return !1;
        });
        area.content_area.on(
          "click",
          ".gdlr-booking-contact-submit",
          function () {
            var term_and_service = area.content_area.find(
              'input[name="term-and-agreement"]'
            );
            if (term_and_service.length && !term_and_service.is(":checked")) {
              area.content_area
                .find(".gdlr-error-message")
                .html(term_and_service.attr("data-error"))
                .slideDown();
              return !1;
            }
            if (!$(this).hasClass("gdlr-clicked")) {
              $(this).addClass("gdlr-clicked");
              area.content_area.find(".gdlr-error-message").slideUp();
              main.change_state({
                state: 3,
                contact: $(this).closest("form"),
                contact_type: "contact",
              });
            }
            return !1;
          }
        );
        area.content_area.on(
          "click",
          ".gdlr-booking-payment-submit",
          function () {
            var term_and_service = area.content_area.find(
              'input[name="term-and-agreement"]'
            );
            if (term_and_service.length && !term_and_service.is(":checked")) {
              area.content_area
                .find(".gdlr-error-message")
                .html(term_and_service.attr("data-error"))
                .slideDown();
              return !1;
            }
            if (!$(this).hasClass("gdlr-clicked")) {
              $(this).addClass("gdlr-clicked");
              area.content_area.find(".gdlr-error-message").slideUp();
              main.change_state({
                state: 3,
                contact: $(this).closest("form"),
                contact_type: "instant_payment",
              });
            }
            return !1;
          }
        );
        area.content_area.on(
          "click",
          '.gdlr-payment-method input[name="payment-method"]',
          function () {
            $(this)
              .parent("label")
              .addClass("gdlr-active")
              .siblings()
              .removeClass("gdlr-active");
          }
        );
        var coupon_loading = $('<span class="gdlr-coupon-loading" ></span>');
        var coupon_message = $('<span class="gdlr-coupon-message" ></span>');
        area.content_area.on(
          "change input",
          "#gdlr-coupon-id",
          gdlr_debounce_function(function () {
            if ($(this).val().length <= 0) {
              return;
            }
            var coupon_elem = $(this);
            coupon_elem.parent().prepend(coupon_loading);
            $.ajax({
              type: "POST",
              url: area.wrapper.attr("data-ajax"),
              data: {
                action: coupon_elem.attr("data-action"),
                data: area.resv_bar.serialize(),
                coupon_code: coupon_elem.val(),
              },
              dataType: "json",
              error: function (a, b, c) {
                console.log(a, b, c);
              },
              success: function (data) {
                coupon_loading.remove();
                if (typeof data.message != "undefined") {
                  coupon_message.hide();
                  coupon_message.html(data.message).insertAfter(coupon_elem);
                  coupon_message.fadeIn();
                } else {
                  coupon_message.fadeOut();
                }
              },
            });
          }, 400)
        );
      },
      change_state: function (options) {
        if (
          area.resv_bar.find("select[name=gdlr-hotel-branches]").val() == ""
        ) {
          area.resv_bar.find("#please-select-branches").slideDown();
          return !1;
        } else {
          area.resv_bar.find("#please-select-branches").slideUp();
        }
        area.resv_bar
          .find("#gdlr-reservation-bar-button")
          .slideUp(200, function () {
            $(this).remove();
          });
        area.content_area.animate({ opacity: 0.2 });
        area.content_area.parent().addClass("gdlr-loading");
        var data_submit = {
          action: area.resv_bar.attr("data-action"),
          data: area.resv_bar.serialize(),
          state: options.state,
        };
        if (options.room_id) data_submit.room_id = options.room_id;
        if (options.service) {
          data_submit.service = options.service.serialize();
          if (!data_submit.service) {
            data_submit.service = "service=none";
          }
        }
        if (options.contact) data_submit.contact = options.contact.serialize();
        if (options.contact_type)
          data_submit.contact_type = options.contact_type;
        if (options.paged) data_submit.paged = options.paged;
        $.ajax({
          type: "POST",
          url: area.wrapper.attr("data-ajax"),
          data: data_submit,
          dataType: "json",
          error: function (a, b, c) {
            console.log(a, b, c);
          },
          success: function (data) {
            if (data.state) {
              proc_bar.set_state(data.state);
              if (data.content) {
                var tmp_height = area.content_area.height();
                area.content_area.html(data.content);
                var new_height = area.content_area.height();
                area.content_area.parent().removeClass("gdlr-loading");
                area.content_area
                  .height(tmp_height)
                  .animate({ opacity: 1, height: new_height }, function () {
                    $(this).css("height", "auto");
                  });
              }
              if (data.summary_form) {
                if (!area.summary_form.hasClass("gdlr-active")) {
                  area.summary_form
                    .html(data.summary_form)
                    .slideDown()
                    .addClass("gdlr-active");
                } else {
                  var tmp_height = area.summary_form.height();
                  area.summary_form.html(data.summary_form);
                  var new_height = area.summary_form.height();
                  area.summary_form
                    .height(tmp_height)
                    .animate({ height: new_height }, function () {
                      $(this).css("height", "auto");
                    });
                  if (data.state == 4) {
                    $("body").animate(
                      {
                        scrollTop:
                          area.proc_bar.offset().top -
                          (tmp_height - new_height),
                      },
                      300
                    );
                  }
                }
              }
              if (data.service) {
                area.service_form.html(data.service);
              }
              if (data.state == 2) {
                area.summary_form.slideUp(function () {
                  $(this).removeClass("gdlr-active");
                });
                area.date_form.slideDown();
                if (data.room_form) {
                  if (!area.room_form.hasClass("gdlr-active")) {
                    area.room_form
                      .html(data.room_form)
                      .slideDown()
                      .addClass("gdlr-active");
                  } else {
                    var tmp_height = area.room_form.height();
                    area.room_form.html(data.room_form);
                    var new_height = area.room_form.height();
                    area.room_form
                      .height(tmp_height)
                      .animate({ height: new_height }, function () {
                        $(this).css("height", "auto");
                      });
                  }
                }
              } else if (data.state == 3) {
                area.room_form.slideUp(function () {
                  $(this).removeClass("gdlr-active");
                });
                area.date_form.slideUp();
                if (data.error_message) {
                  area.content_area
                    .find(".gdlr-button")
                    .removeClass("gdlr-clicked");
                  area.content_area
                    .find(".gdlr-error-message")
                    .html(data.error_message)
                    .slideDown();
                  area.content_area.parent().removeClass("gdlr-loading");
                  area.content_area.animate({ opacity: 1 });
                }
                if (data.payment && data.payment == "paypal") {
                  var form_submit = area.content_area.find(
                    "form.gdlr-booking-contact-form"
                  );
                  form_submit.attr("method", "post");
                  form_submit.attr("action", data.payment_url);
                  form_submit.append(data.addition_part);
                  form_submit.find("input, textarea").each(function () {
                    if (
                      $(this).is(
                        '[name="coupon"], [name="payment-method"], [name="term-and-agreement"]'
                      )
                    ) {
                      $(this).remove();
                    } else {
                    }
                  });
                  form_submit.submit();
                }
              }
            }
          },
        });
      },
    };
    main.init();
    return this;
  };
  $(document).ready(function () {
    $("#gdlr-single-booking-content").gdlr_hotel_booking();
    $(
      "form.gdlr-reservation-bar, #gdlr-hotel-availability"
    ).gdlr_single_booking();
    $(".gdlr-room-category-item").on(
      "mouseover",
      ".gdlr-room-category-thumbnail",
      function () {
        $(this)
          .children("img")
          .transition({ scale: 1.1, duration: 200, queue: !1 });
        $(this)
          .children(".gdlr-room-category-thumbnail-overlay")
          .animate({ opacity: 0.6 }, { duration: 150, queue: !1 });
        $(this)
          .children(".gdlr-room-category-thumbnail-overlay-icon")
          .animate({ opacity: 1 }, { duration: 150, queue: !1 });
      }
    );
    $(".gdlr-room-category-item").on(
      "mouseout",
      ".gdlr-room-category-thumbnail",
      function () {
        $(this)
          .children("img")
          .transition({ scale: 1, duration: 200, queue: !1 });
        $(this)
          .children(".gdlr-room-category-thumbnail-overlay")
          .animate({ opacity: 0 }, { duration: 150, queue: !1 });
        $(this)
          .children(".gdlr-room-category-thumbnail-overlay-icon")
          .animate({ opacity: 0 }, { duration: 150, queue: !1 });
      }
    );
  });
})(jQuery);
(function ($) {
  "use strict";
  var methods = (function () {
    var c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        menuArrowClass: "sf-arrows",
      },
      ios = (function () {
        var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (ios) {
          $(window).load(function () {
            $("body").children().on("click", $.noop);
          });
        }
        return ios;
      })(),
      wp7 = (function () {
        var style = document.documentElement.style;
        return (
          "behavior" in style &&
          "fill" in style &&
          /iemobile/i.test(navigator.userAgent)
        );
      })(),
      toggleMenuClasses = function ($menu, o) {
        var classes = c.menuClass;
        if (o.cssArrows) {
          classes += " " + c.menuArrowClass;
        }
        $menu.toggleClass(classes);
      },
      setPathToCurrent = function ($menu, o) {
        return $menu
          .find("li." + o.pathClass)
          .slice(0, o.pathLevels)
          .addClass(o.hoverClass + " " + c.bcClass)
          .filter(function () {
            return $(this).children(o.popUpSelector).hide().show().length;
          })
          .removeClass(o.pathClass);
      },
      toggleAnchorClass = function ($li) {
        $li.children("a").toggleClass(c.anchorClass);
      },
      toggleTouchAction = function ($menu) {
        var touchAction = $menu.css("ms-touch-action");
        touchAction = touchAction === "pan-y" ? "auto" : "pan-y";
        $menu.css("ms-touch-action", touchAction);
      },
      applyHandlers = function ($menu, o) {
        var targets = "li:has(" + o.popUpSelector + ")";
        if ($.fn.hoverIntent && !o.disableHI) {
          $menu.hoverIntent(over, out, targets);
        } else {
          $menu
            .on("mouseenter.superfish", targets, over)
            .on("mouseleave.superfish", targets, out);
        }
        var touchevent = "MSPointerDown.superfish";
        if (!ios) {
          touchevent += " touchend.superfish";
        }
        if (wp7) {
          touchevent += " mousedown.superfish";
        }
        $menu
          .on("focusin.superfish", "li", over)
          .on("focusout.superfish", "li", out)
          .on(touchevent, "a", o, touchHandler);
      },
      touchHandler = function (e) {
        var $this = $(this),
          $ul = $this.siblings(e.data.popUpSelector);
        if ($ul.length > 0 && $ul.is(":hidden")) {
          $this.one("click.superfish", !1);
          if (e.type === "MSPointerDown") {
            $this.trigger("focus");
          } else {
            $.proxy(over, $this.parent("li"))();
          }
        }
      },
      over = function () {
        var $this = $(this),
          o = getOptions($this);
        clearTimeout(o.sfTimer);
        $this.siblings().superfish("hide").end().superfish("show");
      },
      out = function () {
        var $this = $(this),
          o = getOptions($this);
        if (ios) {
          $.proxy(close, $this, o)();
        } else {
          clearTimeout(o.sfTimer);
          o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
        }
      },
      close = function (o) {
        o.retainPath = $.inArray(this[0], o.$path) > -1;
        this.superfish("hide");
        if (!this.parents("." + o.hoverClass).length) {
          o.onIdle.call(getMenu(this));
          if (o.$path.length) {
            $.proxy(over, o.$path)();
          }
        }
      },
      getMenu = function ($el) {
        return $el.closest("." + c.menuClass);
      },
      getOptions = function ($el) {
        return getMenu($el).data("sf-options");
      };
    return {
      hide: function (instant) {
        if (this.length) {
          var $this = this,
            o = getOptions($this);
          if (!o) {
            return this;
          }
          var not = o.retainPath === !0 ? o.$path : "",
            $ul = $this
              .find("li." + o.hoverClass)
              .add(this)
              .not(not)
              .removeClass(o.hoverClass)
              .children(o.popUpSelector),
            speed = o.speedOut;
          if (instant) {
            $ul.show();
            speed = 0;
          }
          o.retainPath = !1;
          o.onBeforeHide.call($ul);
          var gdlr_input = !1;
          $(this)
            .find("input:focus")
            .each(function () {
              gdlr_input = !0;
            });
          if (gdlr_input) return $(this);
          $ul.stop(!0, !0).animate(o.animationOut, speed, function () {
            var $this = $(this);
            o.onHide.call($this);
          });
        }
        return this;
      },
      show: function () {
        var o = getOptions(this);
        if (!o) {
          return this;
        }
        var $this = this.addClass(o.hoverClass),
          $ul = $this.children(o.popUpSelector);
        o.onBeforeShow.call($ul);
        $ul.stop(!0, !0).animate(o.animation, o.speed, function () {
          o.onShow.call($ul);
        });
        return this;
      },
      destroy: function () {
        return this.each(function () {
          var $this = $(this),
            o = $this.data("sf-options"),
            $hasPopUp;
          if (!o) {
            return !1;
          }
          $hasPopUp = $this.find(o.popUpSelector).parent("li");
          clearTimeout(o.sfTimer);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          $this.off(".superfish").off(".hoverIntent");
          $hasPopUp
            .children(o.popUpSelector)
            .attr("style", function (i, style) {
              return style.replace(/display[^;]+;?/g, "");
            });
          o.$path
            .removeClass(o.hoverClass + " " + c.bcClass)
            .addClass(o.pathClass);
          $this.find("." + o.hoverClass).removeClass(o.hoverClass);
          o.onDestroy.call($this);
          $this.removeData("sf-options");
        });
      },
      init: function (op) {
        return this.each(function () {
          var $this = $(this);
          if ($this.data("sf-options")) {
            return !1;
          }
          var o = $.extend({}, $.fn.superfish.defaults, op),
            $hasPopUp = $this.find(o.popUpSelector).parent("li");
          o.$path = setPathToCurrent($this, o);
          $this.data("sf-options", o);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          applyHandlers($this, o);
          $hasPopUp.not("." + c.bcClass).superfish("hide", !0);
          o.onInit.call(this);
        });
      },
    };
  })();
  $.fn.superfish = function (method, args) {
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error(
        "Method " + method + " does not exist on jQuery.fn.superfish"
      );
    }
  };
  $.fn.superfish.defaults = {
    popUpSelector: "ul,.sf-mega",
    hoverClass: "sfHover",
    pathClass: "overrideThisToUse",
    pathLevels: 1,
    delay: 800,
    animation: { opacity: "show" },
    animationOut: { opacity: "hide" },
    speed: "normal",
    speedOut: "fast",
    cssArrows: !0,
    disableHI: !1,
    onInit: $.noop,
    onBeforeShow: $.noop,
    onShow: $.noop,
    onBeforeHide: $.noop,
    onHide: $.noop,
    onIdle: $.noop,
    onDestroy: $.noop,
  };
  $.fn.extend({ hideSuperfishUl: methods.hide, showSuperfishUl: methods.show });
})(jQuery); /*! This file is auto-generated */
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof module && module.exports
    ? (module.exports = e(require("jquery")))
    : jQuery && !jQuery.fn.hoverIntent && e(jQuery);
})(function (f) {
  "use strict";
  function u(e) {
    return "function" == typeof e;
  }
  var i,
    r,
    v = { interval: 100, sensitivity: 6, timeout: 0 },
    s = 0,
    a = function (e) {
      (i = e.pageX), (r = e.pageY);
    },
    p = function (e, t, n, o) {
      if (
        Math.sqrt((n.pX - i) * (n.pX - i) + (n.pY - r) * (n.pY - r)) <
        o.sensitivity
      )
        return (
          t.off(n.event, a),
          delete n.timeoutId,
          (n.isActive = !0),
          (e.pageX = i),
          (e.pageY = r),
          delete n.pX,
          delete n.pY,
          o.over.apply(t[0], [e])
        );
      (n.pX = i),
        (n.pY = r),
        (n.timeoutId = setTimeout(function () {
          p(e, t, n, o);
        }, o.interval));
    };
  f.fn.hoverIntent = function (e, t, n) {
    function o(e) {
      var u = f.extend({}, e),
        r = f(this),
        v =
          ((t = r.data("hoverIntent")) || r.data("hoverIntent", (t = {})),
          t[i]),
        t =
          (v || (t[i] = v = { id: i }),
          v.timeoutId && (v.timeoutId = clearTimeout(v.timeoutId)),
          (v.event = "mousemove.hoverIntent.hoverIntent" + i));
      "mouseenter" === e.type
        ? v.isActive ||
          ((v.pX = u.pageX),
          (v.pY = u.pageY),
          r.off(t, a).on(t, a),
          (v.timeoutId = setTimeout(function () {
            p(u, r, v, d);
          }, d.interval)))
        : v.isActive &&
          (r.off(t, a),
          (v.timeoutId = setTimeout(function () {
            var e, t, n, o, i;
            (e = u),
              (t = r),
              (n = v),
              (o = d.out),
              (i = t.data("hoverIntent")) && delete i[n.id],
              o.apply(t[0], [e]);
          }, d.timeout)));
    }
    var i = s++,
      d = f.extend({}, v);
    f.isPlainObject(e)
      ? ((d = f.extend(d, e)), u(d.out) || (d.out = d.over))
      : (d = u(t)
          ? f.extend(d, { over: e, out: t, selector: n })
          : f.extend(d, { over: e, out: e, selector: t }));
    return this.on(
      { "mouseenter.hoverIntent": o, "mouseleave.hoverIntent": o },
      d.selector
    );
  };
});
(window.Modernizr = (function (a, b, c) {
  function z(a) {
    j.cssText = a;
  }
  function A(a, b) {
    return z(m.join(a + ";") + (b || ""));
  }
  function B(a, b) {
    return typeof a === b;
  }
  function C(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function D(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function E(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function F(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + o.join(d + " ") + d).split(" ");
    return B(b, "string") || B(b, "undefined")
      ? D(e, b)
      : ((e = (a + " " + p.join(d + " ") + d).split(" ")), E(e, b, c));
  }
  var d = "2.6.2",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = " -webkit- -moz- -o- -ms- ".split(" "),
    n = "Webkit Moz O ms",
    o = n.split(" "),
    p = n.toLowerCase().split(" "),
    q = {},
    r = {},
    s = {},
    t = [],
    u = t.slice,
    v,
    w = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ""),
          (n.style.overflow = "hidden"),
          (k = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      );
    },
    x = {}.hasOwnProperty,
    y;
  !B(x, "undefined") && !B(x.call, "undefined")
    ? (y = function (a, b) {
        return x.call(a, b);
      })
    : (y = function (a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = u.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(u.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(u.call(arguments)));
          };
        return e;
      }),
    (q.touch = function () {
      var c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : w(
              [
                "@media (",
                m.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    }),
    (q.cssanimations = function () {
      return F("animationName");
    }),
    (q.csstransitions = function () {
      return F("transition");
    });
  for (var G in q)
    y(q, G) &&
      ((v = G.toLowerCase()), (e[v] = q[G]()), t.push((e[v] ? "" : "no-") + v));
  return (
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) y(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    z(""),
    (i = k = null),
    (function (a, b) {
      function k(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function m(a) {
        var b = i[a[g]];
        return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
      }
      function n(a, c, f) {
        c || (c = b);
        if (j) return c.createElement(a);
        f || (f = m(c));
        var g;
        return (
          f.cache[a]
            ? (g = f.cache[a].cloneNode())
            : e.test(a)
            ? (g = (f.cache[a] = f.createElem(a)).cloneNode())
            : (g = f.createElem(a)),
          g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        );
      }
      function o(a, c) {
        a || (a = b);
        if (j) return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function p(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              l()
                .join()
                .replace(/\w+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(r, b.frag));
      }
      function q(a) {
        a || (a = b);
        var c = m(a);
        return (
          r.shivCSS &&
            !f &&
            !c.hasCSS &&
            (c.hasCSS = !!k(
              a,
              "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
            )),
          j || p(a, c),
          a
        );
      }
      var c = a.html5 || {},
        d =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = "_html5shiv",
        h = 0,
        i = {},
        j;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (f = "hidden" in a),
            (j =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (f = !0), (j = !0);
        }
      })();
      var r = {
        elements:
          c.elements ||
          "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o,
      };
      (a.html5 = r), q(b);
    })(this, b),
    (e._version = d),
    (e._prefixes = m),
    (e._domPrefixes = p),
    (e._cssomPrefixes = o),
    (e.testProp = function (a) {
      return D([a]);
    }),
    (e.testAllProps = F),
    (e.testStyles = w),
    (e.prefixed = function (a, b, c) {
      return b ? F(a, b, c) : F(a, "pfx");
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + t.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });
(function ($, window, undefined) {
  "use strict";
  var Modernizr = window.Modernizr,
    $body = $("body");
  $.DLMenu = function (options, element) {
    this.$el = $(element);
    this._init(options);
  };
  $.DLMenu.defaults = {
    animationClasses: {
      classin: "dl-animate-in-1",
      classout: "dl-animate-out-1",
    },
    onLevelClick: function (el, name) {
      return !1;
    },
    onLinkClick: function (el, ev) {
      return !1;
    },
  };
  $.DLMenu.prototype = {
    _init: function (options) {
      this.options = $.extend(!0, {}, $.DLMenu.defaults, options);
      this._config();
      var animEndEventNames = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd",
          msAnimation: "MSAnimationEnd",
          animation: "animationend",
        },
        transEndEventNames = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          msTransition: "MSTransitionEnd",
          transition: "transitionend",
        };
      this.animEndEventName =
        animEndEventNames[Modernizr.prefixed("animation")] + ".dlmenu";
      (this.transEndEventName =
        transEndEventNames[Modernizr.prefixed("transition")] + ".dlmenu"),
        (this.supportAnimations = Modernizr.cssanimations),
        (this.supportTransitions = Modernizr.csstransitions);
      this._initEvents();
    },
    _config: function () {
      this.open = !1;
      this.$trigger = this.$el.children(".dl-trigger");
      this.$menu = this.$el.children("ul.dl-menu");
      this.$menuitems = this.$menu.find("li:not(.dl-back)");
      this.$el
        .find("ul.dl-submenu")
        .prepend('<li class="dl-back"><a href="#">back</a></li>');
      this.$back = this.$menu.find("li.dl-back");
    },
    _initEvents: function () {
      var self = this;
      this.$trigger.on("click.dlmenu", function () {
        if (self.open) {
          self._closeMenu();
        } else {
          self._openMenu();
        }
        return !1;
      });
      this.$menuitems.on("click.dlmenu", function (event) {
        event.stopPropagation();
        var $item = $(this),
          $submenu = $item.children("ul.dl-submenu");
        if ($submenu.length > 0) {
          var $flyin = $submenu
              .clone()
              .css("opacity", 0)
              .insertAfter(self.$menu),
            onAnimationEndFn = function () {
              self.$menu
                .off(self.animEndEventName)
                .removeClass(self.options.animationClasses.classout)
                .addClass("dl-subview");
              $item
                .addClass("dl-subviewopen")
                .parents(".dl-subviewopen:first")
                .removeClass("dl-subviewopen")
                .addClass("dl-subview");
              $flyin.remove();
            };
          setTimeout(function () {
            $flyin.addClass(self.options.animationClasses.classin);
            self.$menu.addClass(self.options.animationClasses.classout);
            if (self.supportAnimations) {
              self.$menu.on(self.animEndEventName, onAnimationEndFn);
            } else {
              onAnimationEndFn.call();
            }
            self.options.onLevelClick($item, $item.children("a:first").text());
          });
          return !1;
        } else {
          self.options.onLinkClick($item, event);
        }
      });
      this.$back.on("click.dlmenu", function (event) {
        var $this = $(this),
          $submenu = $this.parents("ul.dl-submenu:first"),
          $item = $submenu.parent(),
          $flyin = $submenu.clone().insertAfter(self.$menu);
        var onAnimationEndFn = function () {
          self.$menu
            .off(self.animEndEventName)
            .removeClass(self.options.animationClasses.classin);
          $flyin.remove();
        };
        setTimeout(function () {
          $flyin.addClass(self.options.animationClasses.classout);
          self.$menu.addClass(self.options.animationClasses.classin);
          if (self.supportAnimations) {
            self.$menu.on(self.animEndEventName, onAnimationEndFn);
          } else {
            onAnimationEndFn.call();
          }
          $item.removeClass("dl-subviewopen");
          var $subview = $this.parents(".dl-subview:first");
          if ($subview.is("li")) {
            $subview.addClass("dl-subviewopen");
          }
          $subview.removeClass("dl-subview");
        });
        return !1;
      });
    },
    closeMenu: function () {
      if (this.open) {
        this._closeMenu();
      }
    },
    _closeMenu: function () {
      var self = this,
        onTransitionEndFn = function () {
          self.$menu.off(self.transEndEventName);
          self._resetMenu();
        };
      this.$menu.removeClass("dl-menuopen");
      this.$menu.addClass("dl-menu-toggle");
      this.$trigger.removeClass("dl-active");
      if (this.supportTransitions) {
        this.$menu.on(this.transEndEventName, onTransitionEndFn);
      } else {
        onTransitionEndFn.call();
      }
      this.open = !1;
    },
    openMenu: function () {
      if (!this.open) {
        this._openMenu();
      }
    },
    _openMenu: function () {
      var self = this;
      $body.off("click").on("click.dlmenu", function () {
        self._closeMenu();
      });
      this.$menu
        .addClass("dl-menuopen dl-menu-toggle")
        .on(this.transEndEventName, function () {
          $(this).removeClass("dl-menu-toggle");
        });
      this.$trigger.addClass("dl-active");
      this.open = !0;
    },
    _resetMenu: function () {
      this.$menu.removeClass("dl-subview");
      this.$menuitems.removeClass("dl-subview dl-subviewopen");
    },
  };
  var logError = function (message) {
    if (window.console) {
      window.console.error(message);
    }
  };
  $.fn.dlmenu = function (options) {
    if (typeof options === "string") {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var instance = $.data(this, "dlmenu");
        if (!instance) {
          logError(
            "cannot call methods on dlmenu prior to initialization; " +
              "attempted to call method '" +
              options +
              "'"
          );
          return;
        }
        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("no such method '" + options + "' for dlmenu instance");
          return;
        }
        instance[options].apply(instance, args);
      });
    } else {
      this.each(function () {
        var instance = $.data(this, "dlmenu");
        if (instance) {
          instance._init();
        } else {
          instance = $.data(this, "dlmenu", new $.DLMenu(options, this));
        }
      });
    }
    return this;
  };
})(jQuery, window);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      -(
        a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p)
      ) + b
    );
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return (
      a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
      c +
      b
    );
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (0.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
    if (t < 1)
      return (
        -0.5 *
          (a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
        b
      );
    return (
      a *
        Math.pow(2, -10 * (t -= 1)) *
        Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
        0.5 +
      c +
      b
    );
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1)
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2)
      return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
    return (
      jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    );
  },
});
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function (k) {
  k.transit = {
    version: "0.9.9",
    propertyMap: {
      marginLeft: "margin",
      marginRight: "margin",
      marginBottom: "margin",
      marginTop: "margin",
      paddingLeft: "padding",
      paddingRight: "padding",
      paddingBottom: "padding",
      paddingTop: "padding",
    },
    enabled: !0,
    useTransitionEnd: !1,
  };
  var d = document.createElement("div");
  var q = {};
  function b(v) {
    if (v in d.style) {
      return v;
    }
    var u = ["Moz", "Webkit", "O", "ms"];
    var r = v.charAt(0).toUpperCase() + v.substr(1);
    if (v in d.style) {
      return v;
    }
    for (var t = 0; t < u.length; ++t) {
      var s = u[t] + r;
      if (s in d.style) {
        return s;
      }
    }
  }
  function e() {
    d.style[q.transform] = "";
    d.style[q.transform] = "rotateY(90deg)";
    return d.style[q.transform] !== "";
  }
  var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  q.transition = b("transition");
  q.transitionDelay = b("transitionDelay");
  q.transform = b("transform");
  q.transformOrigin = b("transformOrigin");
  q.transform3d = e();
  var i = {
    transition: "transitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    WebkitTransition: "webkitTransitionEnd",
    msTransition: "MSTransitionEnd",
  };
  var f = (q.transitionEnd = i[q.transition] || null);
  for (var p in q) {
    if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") {
      k.support[p] = q[p];
    }
  }
  d = null;
  k.cssEase = {
    _default: "ease",
    in: "ease-in",
    out: "ease-out",
    "in-out": "ease-in-out",
    snap: "cubic-bezier(0,1,.5,1)",
    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
    easeInOutExpo: "cubic-bezier(1,0,0,1)",
    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
    easeInSine: "cubic-bezier(.47,0,.745,.715)",
    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
  };
  k.cssHooks["transit:transform"] = {
    get: function (r) {
      return k(r).data("transform") || new j();
    },
    set: function (s, r) {
      var t = r;
      if (!(t instanceof j)) {
        t = new j(t);
      }
      if (q.transform === "WebkitTransform" && !a) {
        s.style[q.transform] = t.toString(!0);
      } else {
        s.style[q.transform] = t.toString();
      }
      k(s).data("transform", t);
    },
  };
  k.cssHooks.transform = { set: k.cssHooks["transit:transform"].set };
  if (k.fn.jquery < "1.8") {
    k.cssHooks.transformOrigin = {
      get: function (r) {
        return r.style[q.transformOrigin];
      },
      set: function (r, s) {
        r.style[q.transformOrigin] = s;
      },
    };
    k.cssHooks.transition = {
      get: function (r) {
        return r.style[q.transition];
      },
      set: function (r, s) {
        r.style[q.transition] = s;
      },
    };
  }
  n("scale");
  n("translate");
  n("rotate");
  n("rotateX");
  n("rotateY");
  n("rotate3d");
  n("perspective");
  n("skewX");
  n("skewY");
  n("x", !0);
  n("y", !0);
  function j(r) {
    if (typeof r === "string") {
      this.parse(r);
    }
    return this;
  }
  j.prototype = {
    setFromString: function (t, s) {
      var r =
        typeof s === "string"
          ? s.split(",")
          : s.constructor === Array
          ? s
          : [s];
      r.unshift(t);
      j.prototype.set.apply(this, r);
    },
    set: function (s) {
      var r = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[s]) {
        this.setter[s].apply(this, r);
      } else {
        this[s] = r.join(",");
      }
    },
    get: function (r) {
      if (this.getter[r]) {
        return this.getter[r].apply(this);
      } else {
        return this[r] || 0;
      }
    },
    setter: {
      rotate: function (r) {
        this.rotate = o(r, "deg");
      },
      rotateX: function (r) {
        this.rotateX = o(r, "deg");
      },
      rotateY: function (r) {
        this.rotateY = o(r, "deg");
      },
      scale: function (r, s) {
        if (s === undefined) {
          s = r;
        }
        this.scale = r + "," + s;
      },
      skewX: function (r) {
        this.skewX = o(r, "deg");
      },
      skewY: function (r) {
        this.skewY = o(r, "deg");
      },
      perspective: function (r) {
        this.perspective = o(r, "px");
      },
      x: function (r) {
        this.set("translate", r, null);
      },
      y: function (r) {
        this.set("translate", null, r);
      },
      translate: function (r, s) {
        if (this._translateX === undefined) {
          this._translateX = 0;
        }
        if (this._translateY === undefined) {
          this._translateY = 0;
        }
        if (r !== null && r !== undefined) {
          this._translateX = o(r, "px");
        }
        if (s !== null && s !== undefined) {
          this._translateY = o(s, "px");
        }
        this.translate = this._translateX + "," + this._translateY;
      },
    },
    getter: {
      x: function () {
        return this._translateX || 0;
      },
      y: function () {
        return this._translateY || 0;
      },
      scale: function () {
        var r = (this.scale || "1,1").split(",");
        if (r[0]) {
          r[0] = parseFloat(r[0]);
        }
        if (r[1]) {
          r[1] = parseFloat(r[1]);
        }
        return r[0] === r[1] ? r[0] : r;
      },
      rotate3d: function () {
        var t = (this.rotate3d || "0,0,0,0deg").split(",");
        for (var r = 0; r <= 3; ++r) {
          if (t[r]) {
            t[r] = parseFloat(t[r]);
          }
        }
        if (t[3]) {
          t[3] = o(t[3], "deg");
        }
        return t;
      },
    },
    parse: function (s) {
      var r = this;
      s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, v, u) {
        r.setFromString(v, u);
      });
    },
    toString: function (t) {
      var s = [];
      for (var r in this) {
        if (this.hasOwnProperty(r)) {
          if (
            !q.transform3d &&
            (r === "rotateX" ||
              r === "rotateY" ||
              r === "perspective" ||
              r === "transformOrigin")
          ) {
            continue;
          }
          if (r[0] !== "_") {
            if (t && r === "scale") {
              s.push(r + "3d(" + this[r] + ",1)");
            } else {
              if (t && r === "translate") {
                s.push(r + "3d(" + this[r] + ",0)");
              } else {
                s.push(r + "(" + this[r] + ")");
              }
            }
          }
        }
      }
      return s.join(" ");
    },
  };
  function m(s, r, t) {
    if (r === !0) {
      s.queue(t);
    } else {
      if (r) {
        s.queue(r, t);
      } else {
        t();
      }
    }
  }
  function h(s) {
    var r = [];
    k.each(s, function (t) {
      t = k.camelCase(t);
      t = k.transit.propertyMap[t] || k.cssProps[t] || t;
      t = c(t);
      if (k.inArray(t, r) === -1) {
        r.push(t);
      }
    });
    return r;
  }
  function g(s, v, x, r) {
    var t = h(s);
    if (k.cssEase[x]) {
      x = k.cssEase[x];
    }
    var w = "" + l(v) + " " + x;
    if (parseInt(r, 10) > 0) {
      w += " " + l(r);
    }
    var u = [];
    k.each(t, function (z, y) {
      u.push(y + " " + w);
    });
    return u.join(", ");
  }
  k.fn.transition = k.fn.transit = function (z, s, y, C) {
    var D = this;
    var u = 0;
    var w = !0;
    if (typeof s === "function") {
      C = s;
      s = undefined;
    }
    if (typeof y === "function") {
      C = y;
      y = undefined;
    }
    if (typeof z.easing !== "undefined") {
      y = z.easing;
      delete z.easing;
    }
    if (typeof z.duration !== "undefined") {
      s = z.duration;
      delete z.duration;
    }
    if (typeof z.complete !== "undefined") {
      C = z.complete;
      delete z.complete;
    }
    if (typeof z.queue !== "undefined") {
      w = z.queue;
      delete z.queue;
    }
    if (typeof z.delay !== "undefined") {
      u = z.delay;
      delete z.delay;
    }
    if (typeof s === "undefined") {
      s = k.fx.speeds._default;
    }
    if (typeof y === "undefined") {
      y = k.cssEase._default;
    }
    s = l(s);
    var E = g(z, s, y, u);
    var B = k.transit.enabled && q.transition;
    var t = B ? parseInt(s, 10) + parseInt(u, 10) : 0;
    if (t === 0) {
      var A = function (F) {
        D.css(z);
        if (C) {
          C.apply(D);
        }
        if (F) {
          F();
        }
      };
      m(D, w, A);
      return D;
    }
    var x = {};
    var r = function (H) {
      var G = !1;
      var F = function () {
        if (G) {
          D.unbind(f, F);
        }
        if (t > 0) {
          D.each(function () {
            this.style[q.transition] = x[this] || null;
          });
        }
        if (typeof C === "function") {
          C.apply(D);
        }
        if (typeof H === "function") {
          H();
        }
      };
      if (t > 0 && f && k.transit.useTransitionEnd) {
        G = !0;
        D.bind(f, F);
      } else {
        window.setTimeout(F, t);
      }
      D.each(function () {
        if (t > 0) {
          this.style[q.transition] = E;
        }
        k(this).css(z);
      });
    };
    var v = function (F) {
      this.offsetWidth;
      r(F);
    };
    m(D, w, v);
    return this;
  };
  function n(s, r) {
    if (!r) {
      k.cssNumber[s] = !0;
    }
    k.transit.propertyMap[s] = q.transform;
    k.cssHooks[s] = {
      get: function (v) {
        var u = k(v).css("transit:transform");
        return u.get(s);
      },
      set: function (v, w) {
        var u = k(v).css("transit:transform");
        u.setFromString(s, w);
        k(v).css({ "transit:transform": u });
      },
    };
  }
  function c(r) {
    return r.replace(/([A-Z])/g, function (s) {
      return "-" + s.toLowerCase();
    });
  }
  function o(s, r) {
    if (typeof s === "string" && !s.match(/^[\-0-9\.]+$/)) {
      return s;
    } else {
      return "" + s + r;
    }
  }
  function l(s) {
    var r = s;
    if (k.fx.speeds[r]) {
      r = k.fx.speeds[r];
    }
    return o(r, "ms");
  }
  k.transit.getTransitionValue = g;
})(
  jQuery
); /*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
  var J = f("html"),
    n = f(r),
    p = f(G),
    b = (f.fancybox = function () {
      b.open.apply(this, arguments);
    }),
    I = navigator.userAgent.match(/msie/i),
    B = null,
    s = G.createTouch !== v,
    t = function (a) {
      return a && a.hasOwnProperty && a instanceof f;
    },
    q = function (a) {
      return a && "string" === f.type(a);
    },
    E = function (a) {
      return q(a) && 0 < a.indexOf("%");
    },
    l = function (a, d) {
      var e = parseInt(a, 10) || 0;
      d && E(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e);
    },
    w = function (a, b) {
      return l(a, b) + "px";
    };
  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3e3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
      iframe: { scrolling: "auto", preload: !0 },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always",
      },
      keys: {
        next: { 13: "left", 34: "up", 39: "left", 40: "up" },
        prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
        close: [27],
        play: [32],
        toggle: [70],
      },
      direction: { next: "left", prev: "right" },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe:
          '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
          (I ? ' allowtransparency="true"' : "") +
          "></iframe>",
        error:
          '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn:
          '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: { overlay: !0, title: !0 },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop,
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: { timer: null, isActive: !1 },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function (a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)))
        return (
          f.isArray(a) || (a = t(a) ? f(a).get() : [a]),
          f.each(a, function (e, c) {
            var k = {},
              g,
              h,
              j,
              m,
              l;
            "object" === f.type(c) &&
              (c.nodeType && (c = f(c)),
              t(c)
                ? ((k = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c,
                  }),
                  f.metadata && f.extend(!0, k, c.metadata()))
                : (k = c));
            g = d.href || k.href || (q(c) ? c : null);
            h = d.title !== v ? d.title : k.title || "";
            m = (j = d.content || k.content) ? "html" : d.type || k.type;
            !m &&
              k.isDom &&
              ((m = c.data("fancybox-type")),
              m ||
                (m = (m = c.prop("class").match(/fancybox\.(\w+)/))
                  ? m[1]
                  : null));
            q(g) &&
              (m ||
                (b.isImage(g)
                  ? (m = "image")
                  : b.isSWF(g)
                  ? (m = "swf")
                  : "#" === g.charAt(0)
                  ? (m = "inline")
                  : q(c) && ((m = "html"), (j = c))),
              "ajax" === m &&
                ((l = g.split(/\s+/, 2)), (g = l.shift()), (l = l.shift())));
            j ||
              ("inline" === m
                ? g
                  ? (j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g))
                  : k.isDom && (j = c)
                : "html" === m
                ? (j = g)
                : !m && !g && k.isDom && ((m = "inline"), (j = c)));
            f.extend(k, {
              href: g,
              type: m,
              content: j,
              title: h,
              selector: l,
            });
            a[e] = k;
          }),
          (b.opts = f.extend(!0, {}, b.defaults, d)),
          d.keys !== v &&
            (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1),
          (b.group = a),
          b._start(b.opts.index)
        );
    },
    cancel: function () {
      var a = b.coming;
      a &&
        !1 !== b.trigger("onCancel") &&
        (b.hideLoading(),
        b.ajaxLoad && b.ajaxLoad.abort(),
        (b.ajaxLoad = null),
        b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null),
        a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
        (b.coming = null),
        b.current || b._afterZoomOut(a));
    },
    close: function (a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") &&
        (b.unbindEvents(),
        b.isActive &&
          (!b.isOpen || !0 === a
            ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
              b._afterZoomOut())
            : ((b.isOpen = b.isOpened = !1),
              (b.isClosing = !0),
              f(".fancybox-item, .fancybox-nav").remove(),
              b.wrap.stop(!0, !0).removeClass("fancybox-opened"),
              b.transitions[b.current.closeMethod]())));
    },
    play: function (a) {
      var d = function () {
          clearTimeout(b.player.timer);
        },
        e = function () {
          d();
          b.current &&
            b.player.isActive &&
            (b.player.timer = setTimeout(b.next, b.current.playSpeed));
        },
        c = function () {
          d();
          p.unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd");
        };
      if (!0 === a || (!b.player.isActive && !1 !== a)) {
        if (
          b.current &&
          (b.current.loop || b.current.index < b.group.length - 1)
        )
          (b.player.isActive = !0),
            p.bind({
              "onCancel.player beforeClose.player": c,
              "onUpdate.player": e,
              "beforeLoad.player": d,
            }),
            e(),
            b.trigger("onPlayStart");
      } else c();
    },
    next: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
    },
    prev: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
    },
    jumpto: function (a, d, e) {
      var c = b.current;
      c &&
        ((a = l(a)),
        (b.direction = d || c.direction[a >= c.index ? "next" : "prev"]),
        (b.router = e || "jumpto"),
        c.loop &&
          (0 > a && (a = c.group.length + (a % c.group.length)),
          (a %= c.group.length)),
        c.group[a] !== v && (b.cancel(), b._start(a)));
    },
    reposition: function (a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        k;
      c &&
        ((k = b._getPosition(d)),
        a && "scroll" === a.type
          ? (delete k.position, c.stop(!0, !0).animate(k, 200))
          : (c.css(k), (e.pos = f.extend({}, e.dim, k))));
    },
    update: function (a) {
      var d = a && a.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(B), (B = null));
      b.isOpen &&
        !B &&
        (B = setTimeout(
          function () {
            var c = b.current;
            c &&
              !b.isClosing &&
              (b.wrap.removeClass("fancybox-tmp"),
              (e || "load" === d || ("resize" === d && c.autoResize)) &&
                b._setDimension(),
              ("scroll" === d && c.canShrink) || b.reposition(a),
              b.trigger("onUpdate"),
              (B = null));
          },
          e && !s ? 0 : 300
        ));
    },
    toggle: function (a) {
      b.isOpen &&
        ((b.current.fitToView =
          "boolean" === f.type(a) ? a : !b.current.fitToView),
        s &&
          (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
          b.trigger("onUpdate")),
        b.update());
    },
    hideLoading: function () {
      p.unbind(".loading");
      f("#fancybox-loading").remove();
    },
    showLoading: function () {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div></div></div>')
        .click(b.cancel)
        .appendTo("body");
      p.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel();
      });
      b.defaults.fixed ||
        ((d = b.getViewport()),
        a.css({
          position: "absolute",
          top: 0.5 * d.h + d.y,
          left: 0.5 * d.w + d.x,
        }));
    },
    getViewport: function () {
      var a = (b.current && b.current.locked) || !1,
        d = { x: n.scrollLeft(), y: n.scrollTop() };
      a
        ? ((d.w = a[0].clientWidth), (d.h = a[0].clientHeight))
        : ((d.w = s && r.innerWidth ? r.innerWidth : n.width()),
          (d.h = s && r.innerHeight ? r.innerHeight : n.height()));
      return d;
    },
    unbindEvents: function () {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb");
    },
    bindEvents: function () {
      var a = b.current,
        d;
      a &&
        (n.bind(
          "orientationchange.fb" +
            (s ? "" : " resize.fb") +
            (a.autoCenter && !a.locked ? " scroll.fb" : ""),
          b.update
        ),
        (d = a.keys) &&
          p.bind("keydown.fb", function (e) {
            var c = e.which || e.keyCode,
              k = e.target || e.srcElement;
            if (27 === c && b.coming) return !1;
            !e.ctrlKey &&
              !e.altKey &&
              !e.shiftKey &&
              !e.metaKey &&
              (!k || (!k.type && !f(k).is("[contenteditable]"))) &&
              f.each(d, function (d, k) {
                if (1 < a.group.length && k[c] !== v)
                  return b[d](k[c]), e.preventDefault(), !1;
                if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1;
              });
          }),
        f.fn.mousewheel &&
          a.mouseWheel &&
          b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
            for (
              var h = f(d.target || null), j = !1;
              h.length &&
              !j &&
              !h.is(".fancybox-skin") &&
              !h.is(".fancybox-wrap");

            )
              (j =
                h[0] &&
                !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                ((h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth) ||
                  (h[0].clientHeight &&
                    h[0].scrollHeight > h[0].clientHeight))),
                (h = f(h).parent());
            if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
              if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
              else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
              d.preventDefault();
            }
          }));
    },
    trigger: function (a, d) {
      var e,
        c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) &&
          (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers &&
          f.each(c.helpers, function (d, e) {
            if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))
              b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
          });
        p.trigger(a);
      }
    },
    isImage: function (a) {
      return (
        q(a) &&
        a.match(
          /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
        )
      );
    },
    isSWF: function (a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function (a) {
      var d = {},
        e,
        c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal &&
        f.extend(!0, d, {
          closeBtn: !1,
          closeClick: !1,
          nextClick: !1,
          arrows: !1,
          mouseWheel: !1,
          keys: null,
          helpers: { overlay: { closeClick: !1 } },
        });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;
      else {
        c = d.type;
        e = d.href;
        if (!c)
          return (
            (b.coming = null),
            b.current && b.router && "jumpto" !== b.router
              ? ((b.current.index = a), b[b.router](b.direction))
              : !1
          );
        b.isActive = !0;
        if ("image" === c || "swf" === c)
          (d.autoHeight = d.autoWidth = !1), (d.scrolling = "visible");
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap)
          .addClass(
            "fancybox-" +
              (s ? "mobile" : "desktop") +
              " fancybox-type-" +
              c +
              " fancybox-tmp " +
              d.wrapCSS
          )
          .appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap),
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, w(d.padding[a]));
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content");
        } else if (!e) return b._error("href");
        "image" === c
          ? b._loadImage()
          : "ajax" === c
          ? b._loadAjax()
          : "iframe" === c
          ? b._loadIframe()
          : b._afterLoad();
      }
    },
    _error: function (a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error,
      });
      b._afterLoad();
    },
    _loadImage: function () {
      var a = (b.imgPreload = new Image());
      a.onload = function () {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;
        b._afterLoad();
      };
      a.onerror = function () {
        this.onload = this.onerror = null;
        b._error("image");
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading();
    },
    _loadAjax: function () {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(
        f.extend({}, a.ajax, {
          url: a.href,
          error: function (a, e) {
            b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
          },
          success: function (d, e) {
            "success" === e && ((a.content = d), b._afterLoad());
          },
        })
      );
    },
    _loadIframe: function () {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
          .attr("scrolling", s ? "auto" : a.iframe.scrolling)
          .attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this)
            .find("iframe")
            .hide()
            .attr("src", "//about:blank")
            .end()
            .empty();
        } catch (a) {}
      });
      a.iframe.preload &&
        (b.showLoading(),
        d.one("load", function () {
          f(this).data("ready", 1);
          s || f(this).bind("load.fb", b.update);
          f(this)
            .parents(".fancybox-wrap")
            .width("100%")
            .removeClass("fancybox-tmp")
            .show();
          b._afterLoad();
        }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad();
    },
    _preloadImages: function () {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f,
        g;
      for (g = 1; g <= c; g += 1)
        (f = a[(d.index + g) % e]),
          "image" === f.type && f.href && (new Image().src = f.href);
    },
    _afterLoad: function () {
      var a = b.coming,
        d = b.current,
        e,
        c,
        k,
        g,
        h;
      b.hideLoading();
      if (a && !1 !== b.isActive)
        if (!1 === b.trigger("afterLoad", a, d))
          a.wrap.stop(!0).trigger("onReset").remove(), (b.coming = null);
        else {
          d &&
            (b.trigger("beforeChange", d),
            d.wrap
              .stop(!0)
              .removeClass("fancybox-opened")
              .find(".fancybox-item, .fancybox-nav")
              .remove());
          b.unbindEvents();
          e = a.content;
          c = a.type;
          k = a.scrolling;
          f.extend(b, {
            wrap: a.wrap,
            skin: a.skin,
            outer: a.outer,
            inner: a.inner,
            current: a,
            previous: d,
          });
          g = a.href;
          switch (c) {
            case "inline":
            case "ajax":
            case "html":
              a.selector
                ? (e = f("<div>").html(e).find(a.selector))
                : t(e) &&
                  (e.data("fancybox-placeholder") ||
                    e.data(
                      "fancybox-placeholder",
                      f('<div class="fancybox-placeholder"></div>')
                        .insertAfter(e)
                        .hide()
                    ),
                  (e = e.show().detach()),
                  a.wrap.bind("onReset", function () {
                    f(this).find(e).length &&
                      e
                        .hide()
                        .replaceAll(e.data("fancybox-placeholder"))
                        .data("fancybox-placeholder", !1);
                  }));
              break;
            case "image":
              e = a.tpl.image.replace("{href}", g);
              break;
            case "swf":
              (e =
                '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                g +
                '"></param>'),
                (h = ""),
                f.each(a.swf, function (a, b) {
                  e += '<param name="' + a + '" value="' + b + '"></param>';
                  h += " " + a + '="' + b + '"';
                }),
                (e +=
                  '<embed src="' +
                  g +
                  '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                  h +
                  "></embed></object>");
          }
          (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
          b.trigger("beforeShow");
          a.inner.css(
            "overflow",
            "yes" === k ? "scroll" : "no" === k ? "hidden" : k
          );
          b._setDimension();
          b.reposition();
          b.isOpen = !1;
          b.coming = null;
          b.bindEvents();
          if (b.isOpened) {
            if (d.prevMethod) b.transitions[d.prevMethod]();
          } else
            f(".fancybox-wrap")
              .not(a.wrap)
              .stop(!0)
              .trigger("onReset")
              .remove();
          b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
          b._preloadImages();
        }
    },
    _setDimension: function () {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        k = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        j = h.height,
        m = h.minWidth,
        u = h.minHeight,
        n = h.maxWidth,
        p = h.maxHeight,
        s = h.scrolling,
        q = h.scrollOutside ? h.scrollbarWidth : 0,
        x = h.margin,
        y = l(x[1] + x[3]),
        r = l(x[0] + x[2]),
        v,
        z,
        t,
        C,
        A,
        F,
        B,
        D,
        H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = l(k.outerWidth(!0) - k.width());
      v = l(k.outerHeight(!0) - k.height());
      z = y + x;
      t = r + v;
      C = E(c) ? ((a.w - z) * l(c)) / 100 : c;
      A = E(j) ? ((a.h - t) * l(j)) / 100 : j;
      if ("iframe" === h.type) {
        if (((H = h.content), h.autoHeight && 1 === H.data("ready")))
          try {
            H[0].contentWindow.document.location &&
              (g.width(C).height(9999),
              (F = H.contents().find("body")),
              q && F.css("overflow-x", "hidden"),
              (A = F.outerHeight(!0)));
          } catch (G) {}
      } else if (h.autoWidth || h.autoHeight)
        g.addClass("fancybox-tmp"),
          h.autoWidth || g.width(C),
          h.autoHeight || g.height(A),
          h.autoWidth && (C = g.width()),
          h.autoHeight && (A = g.height()),
          g.removeClass("fancybox-tmp");
      c = l(C);
      j = l(A);
      D = C / A;
      m = l(E(m) ? l(m, "w") - z : m);
      n = l(E(n) ? l(n, "w") - z : n);
      u = l(E(u) ? l(u, "h") - t : u);
      p = l(E(p) ? l(p, "h") - t : p);
      F = n;
      B = p;
      h.fitToView && ((n = Math.min(a.w - z, n)), (p = Math.min(a.h - t, p)));
      z = a.w - y;
      r = a.h - r;
      h.aspectRatio
        ? (c > n && ((c = n), (j = l(c / D))),
          j > p && ((j = p), (c = l(j * D))),
          c < m && ((c = m), (j = l(c / D))),
          j < u && ((j = u), (c = l(j * D))))
        : ((c = Math.max(m, Math.min(c, n))),
          h.autoHeight && "iframe" !== h.type && (g.width(c), (j = g.height())),
          (j = Math.max(u, Math.min(j, p))));
      if (h.fitToView)
        if (
          (g.width(c).height(j),
          e.width(c + x),
          (a = e.width()),
          (y = e.height()),
          h.aspectRatio)
        )
          for (; (a > z || y > r) && c > m && j > u && !(19 < d++); )
            (j = Math.max(u, Math.min(p, j - 10))),
              (c = l(j * D)),
              c < m && ((c = m), (j = l(c / D))),
              c > n && ((c = n), (j = l(c / D))),
              g.width(c).height(j),
              e.width(c + x),
              (a = e.width()),
              (y = e.height());
        else
          (c = Math.max(m, Math.min(c, c - (a - z)))),
            (j = Math.max(u, Math.min(j, j - (y - r))));
      q && "auto" === s && j < A && c + x + q < z && (c += q);
      g.width(c).height(j);
      e.width(c + x);
      a = e.width();
      y = e.height();
      e = (a > z || y > r) && c > m && j > u;
      c = h.aspectRatio
        ? c < F && j < B && c < C && j < A
        : (c < F || j < B) && (c < C || j < A);
      f.extend(h, {
        dim: { width: w(a), height: w(y) },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: x,
        hPadding: v,
        wrapSpace: y - k.outerHeight(!0),
        skinSpace: k.height() - j,
      });
      !H && h.autoHeight && j > u && j < p && !c && g.height("auto");
    },
    _getPosition: function (a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = { position: "absolute", top: c[0], left: c[3] };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w
        ? (c.position = "fixed")
        : d.locked || ((c.top += e.y), (c.left += e.x));
      c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c;
    },
    _afterZoomIn: function () {
      var a = b.current;
      a &&
        ((b.isOpen = b.isOpened = !0),
        b.wrap.css("overflow", "visible").addClass("fancybox-opened"),
        b.update(),
        (a.closeClick || (a.nextClick && 1 < b.group.length)) &&
          b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
            !f(d.target).is("a") &&
              !f(d.target).parent().is("a") &&
              (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
          }),
        a.closeBtn &&
          f(a.tpl.closeBtn)
            .appendTo(b.skin)
            .bind("click.fb", function (a) {
              a.preventDefault();
              b.close();
            }),
        a.arrows &&
          1 < b.group.length &&
          ((a.loop || 0 < a.index) &&
            f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev),
          (a.loop || a.index < b.group.length - 1) &&
            f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)),
        b.trigger("afterShow"),
        !a.loop && a.index === a.group.length - 1
          ? b.play(!1)
          : b.opts.autoPlay &&
            !b.player.isActive &&
            ((b.opts.autoPlay = !1), b.play()));
    },
    _afterZoomOut: function (a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
      });
      b.trigger("afterClose", a);
    },
  });
  b.transitions = {
    getOrigPosition: function () {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        j = a.wPadding,
        m = b.getViewport();
      !e &&
        a.isDom &&
        d.is(":visible") &&
        ((e = d.find("img:first")), e.length || (e = d));
      t(e)
        ? ((c = e.offset()),
          e.is("img") && ((f = e.outerWidth()), (g = e.outerHeight())))
        : ((c.top = m.y + (m.h - g) * a.topRatio),
          (c.left = m.x + (m.w - f) * a.leftRatio));
      if ("fixed" === b.wrap.css("position") || a.locked)
        (c.top -= m.y), (c.left -= m.x);
      return (c = {
        top: w(c.top - h * a.topRatio),
        left: w(c.left - j * a.leftRatio),
        width: w(f + j),
        height: w(g + h),
      });
    },
    step: function (a, d) {
      var e,
        c,
        f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f)
        (e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start)),
          b.isClosing && (e = 1 - e),
          (c = "width" === f ? c.wPadding : c.hPadding),
          (c = a - c),
          b.skin[f](l("width" === f ? c : c - g * e)),
          b.inner[f](l("width" === f ? c : c - g * e - h * e));
    },
    zoomIn: function () {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        k = f.extend({ opacity: 1 }, d);
      delete k.position;
      c
        ? ((d = this.getOrigPosition()), a.openOpacity && (d.opacity = 0.1))
        : "fade" === e && (d.opacity = 0.1);
      b.wrap
        .css(d)
        .animate(k, {
          duration: "none" === e ? 0 : a.openSpeed,
          easing: a.openEasing,
          step: c ? this.step : null,
          complete: b._afterZoomIn,
        });
    },
    zoomOut: function () {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = { opacity: 0.1 };
      e && ((c = this.getOrigPosition()), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut,
      });
    },
    changeIn: function () {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = { opacity: 1 },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d &&
        ((g = "down" === f || "up" === f ? "top" : "left"),
        "down" === f || "right" === f
          ? ((e[g] = w(l(e[g]) - 200)), (c[g] = "+=200px"))
          : ((e[g] = w(l(e[g]) + 200)), (c[g] = "-=200px")));
      "none" === d
        ? b._afterZoomIn()
        : b.wrap
            .css(e)
            .animate(c, {
              duration: a.nextSpeed,
              easing: a.nextEasing,
              complete: b._afterZoomIn,
            });
    },
    changeOut: function () {
      var a = b.previous,
        d = a.prevEffect,
        e = { opacity: 0.1 },
        c = b.direction;
      "elastic" === d &&
        (e["down" === c || "up" === c ? "top" : "left"] =
          ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function () {
          f(this).trigger("onReset").remove();
        },
      });
    },
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0,
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function (a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(
        b.coming ? b.coming.parent : a.parent
      );
      this.fixed = !1;
      a.fixed &&
        b.defaults.fixed &&
        (this.overlay.addClass("fancybox-overlay-fixed"), (this.fixed = !0));
    },
    open: function (a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay
        ? this.overlay.unbind(".overlay").width("auto").height("auto")
        : this.create(a);
      this.fixed ||
        (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick &&
        this.overlay.bind("click.overlay", function (a) {
          if (f(a.target).hasClass("fancybox-overlay"))
            return b.isActive ? b.close() : d.close(), !1;
        });
      this.overlay.css(a.css).show();
    },
    close: function () {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") &&
        (f(".fancybox-margin").removeClass("fancybox-margin"),
        (a = n.scrollTop()),
        (b = n.scrollLeft()),
        this.el.removeClass("fancybox-lock"),
        n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, { overlay: null, fixed: !1 });
    },
    update: function () {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      I
        ? ((b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth)),
          p.width() > b && (a = p.width()))
        : p.width() > n.width() && (a = p.width());
      this.overlay.width(a).height(p.height());
    },
    onReady: function (a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked &&
        this.fixed &&
        b.fixed &&
        (e ||
          (this.margin =
            p.height() > n.height()
              ? f("html").css("margin-right").replace("px", "")
              : !1),
        (b.locked = this.overlay.append(b.wrap)),
        (b.fixed = !1));
      !0 === a.showEarly && this.beforeShow.apply(this, arguments);
    },
    beforeShow: function (a, b) {
      var e, c;
      b.locked &&
        (!1 !== this.margin &&
          (f("*")
            .filter(function () {
              return (
                "fixed" === f(this).css("position") &&
                !f(this).hasClass("fancybox-overlay") &&
                !f(this).hasClass("fancybox-wrap")
              );
            })
            .addClass("fancybox-margin"),
          this.el.addClass("fancybox-margin")),
        (e = n.scrollTop()),
        (c = n.scrollLeft()),
        this.el.addClass("fancybox-lock"),
        n.scrollTop(e).scrollLeft(c));
      this.open(a);
    },
    onUpdate: function () {
      this.fixed || this.update();
    },
    afterClose: function (a) {
      this.overlay &&
        !b.coming &&
        this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
    },
  };
  b.helpers.title = {
    defaults: { type: "float", position: "bottom" },
    beforeShow: function (a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (q(e) && "" !== f.trim(e)) {
        d = f(
          '<div class="fancybox-title fancybox-title-' +
            c +
            '-wrap">' +
            e +
            "</div>"
        );
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            (c = b.skin),
              d.appendTo("body"),
              I && d.width(d.width()),
              d.wrapInner('<span class="child"></span>'),
              (b.current.margin[2] += Math.abs(l(d.css("margin-bottom"))));
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c);
      }
    },
  };
  f.fn.fancybox = function (a) {
    var d,
      e = f(this),
      c = this.selector || "",
      k = function (g) {
        var h = f(this).blur(),
          j = d,
          k,
          l;
        !g.ctrlKey &&
          !g.altKey &&
          !g.shiftKey &&
          !g.metaKey &&
          !h.is(".fancybox-wrap") &&
          ((k = a.groupAttr || "data-fancybox-group"),
          (l = h.attr(k)),
          l || ((k = "rel"), (l = h.get(0)[k])),
          l &&
            "" !== l &&
            "nofollow" !== l &&
            ((h = c.length ? f(c) : e),
            (h = h.filter("[" + k + '="' + l + '"]')),
            (j = h.index(this))),
          (a.index = j),
          !1 !== b.open(h, a) && g.preventDefault());
      };
    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live
      ? e.unbind("click.fb-start").bind("click.fb-start", k)
      : p
          .undelegate(c, "click.fb-start")
          .delegate(
            c + ":not('.fancybox-item, .fancybox-nav')",
            "click.fb-start",
            k
          );
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this;
  };
  p.ready(function () {
    var a, d;
    f.scrollbarWidth === v &&
      (f.scrollbarWidth = function () {
        var a = f(
            '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
          ).appendTo("body"),
          b = a.children(),
          b = b.innerWidth() - b.height(99).innerWidth();
        a.remove();
        return b;
      });
    if (f.support.fixedPosition === v) {
      a = f.support;
      d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e;
    }
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body"),
    });
    a = f(r).width();
    J.addClass("fancybox-lock-test");
    d = f(r).width();
    J.removeClass("fancybox-lock-test");
    f(
      "<style type='text/css'>.fancybox-margin{margin-right:" +
        (d - a) +
        "px;}</style>"
    ).appendTo("head");
  });
})(window, document, jQuery);
(function ($, F) {
  F.transitions.resizeIn = function () {
    var previous = F.previous,
      current = F.current,
      startPos = previous.wrap.stop(!0).position(),
      endPos = $.extend({ opacity: 1 }, current.pos);
    startPos.width = previous.wrap.width();
    startPos.height = previous.wrap.height();
    previous.wrap.stop(!0).trigger("onReset").remove();
    delete endPos.position;
    current.inner.hide();
    current.wrap.css(startPos).animate(endPos, {
      duration: current.nextSpeed,
      easing: current.nextEasing,
      step: F.transitions.step,
      complete: function () {
        F._afterZoomIn();
        current.inner.fadeIn("fast");
      },
    });
  };
})(jQuery, jQuery.fancybox);
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
  "use strict";
  var F = $.fancybox,
    format = function (url, rez, params) {
      params = params || "";
      if ($.type(params) === "object") {
        params = $.param(params, !0);
      }
      $.each(rez, function (key, value) {
        url = url.replace("$" + key, value || "");
      });
      if (params.length) {
        url += (url.indexOf("?") > 0 ? "&" : "?") + params;
      }
      return url;
    };
  F.helpers.media = {
    defaults: {
      youtube: {
        matcher:
          /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "opaque",
          enablejsapi: 1,
        },
        type: "iframe",
        url: "//www.youtube.com/embed/$3",
      },
      vimeo: {
        matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1,
        },
        type: "iframe",
        url: "//player.vimeo.com/video/$1",
      },
      metacafe: {
        matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
        params: { autoPlay: "yes" },
        type: "swf",
        url: function (rez, params, obj) {
          obj.swf.flashVars = "playerVars=" + $.param(params, !0);
          return "//www.metacafe.com/fplayer/" + rez[1] + "/.swf";
        },
      },
      dailymotion: {
        matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
        params: { additionalInfos: 0, autoStart: 1 },
        type: "swf",
        url: "//www.dailymotion.com/swf/video/$1",
      },
      twitvid: {
        matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
        params: { autoplay: 0 },
        type: "iframe",
        url: "//www.twitvid.com/embed.php?guid=$1",
      },
      twitpic: {
        matcher:
          /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
        type: "image",
        url: "//twitpic.com/show/full/$1/",
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l",
      },
      google_maps: {
        matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
        type: "iframe",
        url: function (rez) {
          return (
            "//maps.google." +
            rez[1] +
            "/" +
            rez[3] +
            "" +
            rez[4] +
            "&output=" +
            (rez[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
          );
        },
      },
    },
    beforeLoad: function (opts, obj) {
      var url = obj.href || "",
        type = !1,
        what,
        item,
        rez,
        params;
      for (what in opts) {
        if (opts.hasOwnProperty(what)) {
          item = opts[what];
          rez = url.match(item.matcher);
          if (rez) {
            type = item.type;
            params = $.extend(
              !0,
              {},
              item.params,
              obj[what] ||
                ($.isPlainObject(opts[what]) ? opts[what].params : null)
            );
            url =
              $.type(item.url) === "function"
                ? item.url.call(this, rez, params, obj)
                : format(item.url, rez, params);
            break;
          }
        }
      }
      if (type) {
        obj.href = url;
        obj.type = type;
        obj.autoHeight = !1;
      }
    },
  };
})(jQuery);
/*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function ($) {
  var F = $.fancybox;
  F.helpers.thumbs = {
    defaults: {
      width: 50,
      height: 50,
      position: "bottom",
      source: function (item) {
        var href;
        if (item.element) {
          href = $(item.element).find("img").attr("src");
        }
        if (!href && item.type === "image" && item.href) {
          href = item.href;
        }
        return href;
      },
    },
    wrap: null,
    list: null,
    width: 0,
    init: function (opts, obj) {
      var that = this,
        list,
        thumbWidth = opts.width,
        thumbHeight = opts.height,
        thumbSource = opts.source;
      list = "";
      for (var n = 0; n < obj.group.length; n++) {
        list +=
          '<li><a style="width:' +
          thumbWidth +
          "px;height:" +
          thumbHeight +
          'px;" href="javascript:jQuery.fancybox.jumpto(' +
          n +
          ');"></a></li>';
      }
      this.wrap = $('<div id="fancybox-thumbs"></div>')
        .addClass(opts.position)
        .appendTo("body");
      this.list = $("<ul>" + list + "</ul>").appendTo(this.wrap);
      $.each(obj.group, function (i) {
        var href = thumbSource(obj.group[i]);
        if (!href) {
          return;
        }
        $("<img />")
          .load(function () {
            var width = this.width,
              height = this.height,
              widthRatio,
              heightRatio,
              parent;
            if (!that.list || !width || !height) {
              return;
            }
            widthRatio = width / thumbWidth;
            heightRatio = height / thumbHeight;
            parent = that.list.children().eq(i).find("a");
            if (widthRatio >= 1 && heightRatio >= 1) {
              if (widthRatio > heightRatio) {
                width = Math.floor(width / heightRatio);
                height = thumbHeight;
              } else {
                width = thumbWidth;
                height = Math.floor(height / widthRatio);
              }
            }
            $(this).css({
              width: width,
              height: height,
              top: Math.floor(thumbHeight / 2 - height / 2),
              left: Math.floor(thumbWidth / 2 - width / 2),
            });
            parent.width(thumbWidth).height(thumbHeight);
            $(this).hide().appendTo(parent).fadeIn(300);
          })
          .attr("src", href);
      });
      this.width = this.list.children().eq(0).outerWidth(!0);
      this.list
        .width(this.width * (obj.group.length + 1))
        .css(
          "left",
          Math.floor(
            $(window).width() * 0.5 -
              (obj.index * this.width + this.width * 0.5)
          )
        );
    },
    beforeLoad: function (opts, obj) {
      if (obj.group.length < 2) {
        obj.helpers.thumbs = !1;
        return;
      }
      obj.margin[opts.position === "top" ? 0 : 2] += opts.height + 15;
    },
    afterShow: function (opts, obj) {
      if (this.list) {
        this.onUpdate(opts, obj);
      } else {
        this.init(opts, obj);
      }
      this.list
        .children()
        .removeClass("active")
        .eq(obj.index)
        .addClass("active");
    },
    onUpdate: function (opts, obj) {
      if (this.list) {
        this.list
          .stop(!0)
          .animate(
            {
              left: Math.floor(
                $(window).width() * 0.5 -
                  (obj.index * this.width + this.width * 0.5)
              ),
            },
            150
          );
      }
    },
    beforeClose: function () {
      if (this.wrap) {
        this.wrap.remove();
      }
      this.wrap = null;
      this.list = null;
      this.width = 0;
    },
  };
})(jQuery);
(function ($) {
  $.hotelmaster_flexslider = function (el, options) {
    var slider = $(el);
    slider.vars = $.extend({}, $.hotelmaster_flexslider.defaults, options);
    var namespace = slider.vars.namespace,
      msGesture =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      touch =
        ("ontouchstart" in window ||
          msGesture ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        slider.vars.touch,
      eventType = "click touchend MSPointerUp",
      watchedEvent = "",
      watchedEventClearTimer,
      vertical = slider.vars.direction === "vertical",
      reverse = slider.vars.reverse,
      carousel = slider.vars.itemWidth > 0,
      fade = slider.vars.animation === "fade",
      asNav = slider.vars.asNavFor !== "",
      methods = {},
      focused = !0;
    $.data(el, "hotelmaster_flexslider", slider);
    methods = {
      init: function () {
        slider.animating = !1;
        slider.currentSlide = parseInt(
          slider.vars.startAt ? slider.vars.startAt : 0
        );
        if (isNaN(slider.currentSlide)) slider.currentSlide = 0;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd =
          slider.currentSlide === 0 || slider.currentSlide === slider.last;
        slider.containerSelector = slider.vars.selector.substr(
          0,
          slider.vars.selector.search(" ")
        );
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        slider.syncExists = $(slider.vars.sync).length > 0;
        if (slider.vars.animation === "slide") slider.vars.animation = "swing";
        slider.prop = vertical ? "top" : "marginLeft";
        slider.args = {};
        slider.manualPause = !1;
        slider.stopped = !1;
        slider.started = !1;
        slider.startTimeout = null;
        slider.transitions =
          !slider.vars.video &&
          !fade &&
          slider.vars.useCSS &&
          (function () {
            var obj = document.createElement("div"),
              props = [
                "perspectiveProperty",
                "WebkitPerspective",
                "MozPerspective",
                "OPerspective",
                "msPerspective",
              ];
            for (var i in props) {
              if (obj.style[props[i]] !== undefined) {
                slider.pfx = props[i].replace("Perspective", "").toLowerCase();
                slider.prop = "-" + slider.pfx + "-transform";
                return !0;
              }
            }
            return !1;
          })();
        if (slider.vars.controlsContainer !== "")
          slider.controlsContainer =
            $(slider.vars.controlsContainer).length > 0 &&
            $(slider.vars.controlsContainer);
        if (slider.vars.manualControls !== "")
          slider.manualControls =
            $(slider.vars.manualControls).length > 0 &&
            $(slider.vars.manualControls);
        if (slider.vars.randomize) {
          slider.slides.sort(function () {
            return Math.round(Math.random()) - 0.5;
          });
          slider.container.empty().append(slider.slides);
        }
        slider.doMath();
        slider.setup("init");
        if (slider.vars.controlNav) methods.controlNav.setup();
        if (slider.vars.directionNav) methods.directionNav.setup();
        if (
          slider.vars.keyboard &&
          ($(slider.containerSelector).length === 1 ||
            slider.vars.multipleKeyboard)
        ) {
          $(document).bind("keyup", function (event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target =
                keycode === 39
                  ? slider.getTarget("next")
                  : keycode === 37
                  ? slider.getTarget("prev")
                  : !1;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        if (slider.vars.mousewheel) {
          slider.bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target =
              delta < 0 ? slider.getTarget("next") : slider.getTarget("prev");
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }
        if (slider.vars.pausePlay) methods.pausePlay.setup();
        if (slider.vars.slideshow && slider.vars.pauseInvisible)
          methods.pauseInvisible.init();
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(
              function () {
                if (!slider.manualPlay && !slider.manualPause) slider.pause();
              },
              function () {
                if (
                  !slider.manualPause &&
                  !slider.manualPlay &&
                  !slider.stopped
                )
                  slider.play();
              }
            );
          }
          if (
            !slider.vars.pauseInvisible ||
            !methods.pauseInvisible.isHidden()
          ) {
            slider.vars.initDelay > 0
              ? (slider.startTimeout = setTimeout(
                  slider.play,
                  slider.vars.initDelay
                ))
              : slider.play();
          }
        }
        if (asNav) methods.asNav.setup();
        if (touch && slider.vars.touch) methods.touch();
        if (!fade || (fade && slider.vars.smoothHeight))
          $(window).bind("resize orientationchange focus", methods.resize);
        slider.find("img").attr("draggable", "false");
        setTimeout(function () {
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function () {
          slider.asNav = !0;
          slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides
            .removeClass(namespace + "active-slide")
            .eq(slider.currentItem)
            .addClass(namespace + "active-slide");
          if (!msGesture) {
            slider.slides.click(function (e) {
              e.preventDefault();
              var $slide = $(this),
                target = $slide.index();
              var posFromLeft = $slide.offset().left - $(slider).scrollLeft();
              if (
                posFromLeft <= 0 &&
                $slide.hasClass(namespace + "active-slide")
              ) {
                slider.flexAnimate(slider.getTarget("prev"), !0);
              } else if (
                !$(slider.vars.asNavFor).data("hotelmaster_flexslider")
                  .animating &&
                !$slide.hasClass(namespace + "active-slide")
              ) {
                slider.direction =
                  slider.currentItem < target ? "next" : "prev";
                slider.flexAnimate(
                  target,
                  slider.vars.pauseOnAction,
                  !1,
                  !0,
                  !0
                );
              }
            });
          } else {
            el._slider = slider;
            slider.slides.each(function () {
              var that = this;
              that._gesture = new MSGesture();
              that._gesture.target = that;
              that.addEventListener(
                "MSPointerDown",
                function (e) {
                  e.preventDefault();
                  if (e.currentTarget._gesture)
                    e.currentTarget._gesture.addPointer(e.pointerId);
                },
                !1
              );
              that.addEventListener("MSGestureTap", function (e) {
                e.preventDefault();
                var $slide = $(this),
                  target = $slide.index();
                if (
                  !$(slider.vars.asNavFor).data("hotelmaster_flexslider")
                    .animating &&
                  !$slide.hasClass("active")
                ) {
                  slider.direction =
                    slider.currentItem < target ? "next" : "prev";
                  slider.flexAnimate(
                    target,
                    slider.vars.pauseOnAction,
                    !1,
                    !0,
                    !0
                  );
                }
              });
            });
          }
        },
      },
      controlNav: {
        setup: function () {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else {
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function () {
          var type =
              slider.vars.controlNav === "thumbnails"
                ? "control-thumbs"
                : "control-paging",
            j = 1,
            item,
            slide;
          slider.controlNavScaffold = $(
            '<ol class="' +
              namespace +
              "control-nav " +
              namespace +
              type +
              '"></ol>'
          );
          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item =
                slider.vars.controlNav === "thumbnails"
                  ? '<img src="' + slide.attr("data-thumb") + '"/>'
                  : "<a>" + j + "</a>";
              if (
                "thumbnails" === slider.vars.controlNav &&
                !0 === slider.vars.thumbCaptions
              ) {
                var captn = slide.attr("data-thumbcaption");
                if ("" != captn && undefined != captn)
                  item +=
                    '<span class="' +
                    namespace +
                    'caption">' +
                    captn +
                    "</span>";
              }
              slider.controlNavScaffold.append("<li>" + item + "</li>");
              j++;
            }
          }
          slider.controlsContainer
            ? $(slider.controlsContainer).append(slider.controlNavScaffold)
            : slider.append(
                $("<div />")
                  .addClass("flex-control-nav-wrapper")
                  .append(slider.controlNavScaffold)
              );
          methods.controlNav.set();
          methods.controlNav.active();
          slider.controlNavScaffold.delegate(
            "a, img",
            eventType,
            function (event) {
              event.preventDefault();
              if (watchedEvent === "" || watchedEvent === event.type) {
                var $this = $(this),
                  target = slider.controlNav.index($this);
                if (!$this.hasClass(namespace + "active")) {
                  slider.direction =
                    target > slider.currentSlide ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                }
              }
              if (watchedEvent === "") {
                watchedEvent = event.type;
              }
              methods.setToClearWatchedEvent();
            }
          );
        },
        setupManual: function () {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();
          slider.controlNav.bind(eventType, function (event) {
            event.preventDefault();
            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                target = slider.controlNav.index($this);
              if (!$this.hasClass(namespace + "active")) {
                target > slider.currentSlide
                  ? (slider.direction = "next")
                  : (slider.direction = "prev");
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function () {
          var selector = slider.vars.controlNav === "thumbnails" ? "img" : "a";
          slider.controlNav = $(
            "." + namespace + "control-nav li " + selector,
            slider.controlsContainer ? slider.controlsContainer : slider
          );
        },
        active: function () {
          slider.controlNav
            .removeClass(namespace + "active")
            .eq(slider.animatingTo)
            .addClass(namespace + "active");
        },
        update: function (action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append(
              $("<li><a>" + slider.count + "</a></li>")
            );
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find("li").remove();
          } else {
            slider.controlNav.eq(pos).closest("li").remove();
          }
          methods.controlNav.set();
          slider.pagingCount > 1 &&
          slider.pagingCount !== slider.controlNav.length
            ? slider.update(pos, action)
            : methods.controlNav.active();
        },
      },
      directionNav: {
        setup: function () {
          var directionNavScaffold = $(
            '<ul class="' +
              namespace +
              'direction-nav"><li><a class="' +
              namespace +
              'prev" href="#">' +
              slider.vars.prevText +
              '</a></li><li><a class="' +
              namespace +
              'next" href="#">' +
              slider.vars.nextText +
              "</a></li></ul>"
          );
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $(
              "." + namespace + "direction-nav li a",
              slider.controlsContainer
            );
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $(
              "." + namespace + "direction-nav li a",
              slider
            );
          }
          methods.directionNav.update();
          slider.directionNav.bind(eventType, function (event) {
            event.preventDefault();
            var target;
            if (watchedEvent === "" || watchedEvent === event.type) {
              target = $(this).hasClass(namespace + "next")
                ? slider.getTarget("next")
                : slider.getTarget("prev");
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function () {
          var disabledClass = namespace + "disabled";
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr("tabindex", "-1");
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav
                .removeClass(disabledClass)
                .filter("." + namespace + "prev")
                .addClass(disabledClass)
                .attr("tabindex", "-1");
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav
                .removeClass(disabledClass)
                .filter("." + namespace + "next")
                .addClass(disabledClass)
                .attr("tabindex", "-1");
            } else {
              slider.directionNav
                .removeClass(disabledClass)
                .removeAttr("tabindex");
            }
          } else {
            slider.directionNav
              .removeClass(disabledClass)
              .removeAttr("tabindex");
          }
        },
      },
      pausePlay: {
        setup: function () {
          var pausePlayScaffold = $(
            '<div class="' + namespace + 'pauseplay"><a></a></div>'
          );
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $(
              "." + namespace + "pauseplay a",
              slider.controlsContainer
            );
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $("." + namespace + "pauseplay a", slider);
          }
          methods.pausePlay.update(
            slider.vars.slideshow ? namespace + "pause" : namespace + "play"
          );
          slider.pausePlay.bind(eventType, function (event) {
            event.preventDefault();
            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + "pause")) {
                slider.manualPause = !0;
                slider.manualPlay = !1;
                slider.pause();
              } else {
                slider.manualPause = !1;
                slider.manualPlay = !0;
                slider.play();
              }
            }
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function (state) {
          state === "play"
            ? slider.pausePlay
                .removeClass(namespace + "pause")
                .addClass(namespace + "play")
                .html(slider.vars.playText)
            : slider.pausePlay
                .removeClass(namespace + "play")
                .addClass(namespace + "pause")
                .html(slider.vars.pauseText);
        },
      },
      touch: function () {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = !1,
          localX = 0,
          localY = 0,
          accDx = 0;
        if (!msGesture) {
          el.addEventListener("touchstart", onTouchStart, !1);
          function onTouchStart(e) {
            if (slider.animating) {
              e.preventDefault();
            } else if (
              window.navigator.msPointerEnabled ||
              e.touches.length === 1
            ) {
              slider.pause();
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;
              offset =
                carousel && reverse && slider.animatingTo === slider.last
                  ? 0
                  : carousel && reverse
                  ? slider.limit -
                    (slider.itemW + slider.vars.itemMargin) *
                      slider.move *
                      slider.animatingTo
                  : carousel && slider.currentSlide === slider.last
                  ? slider.limit
                  : carousel
                  ? (slider.itemW + slider.vars.itemMargin) *
                    slider.move *
                    slider.currentSlide
                  : reverse
                  ? (slider.last - slider.currentSlide + slider.cloneOffset) *
                    cwidth
                  : (slider.currentSlide + slider.cloneOffset) * cwidth;
              startX = vertical ? localY : localX;
              startY = vertical ? localX : localY;
              el.addEventListener("touchmove", onTouchMove, !1);
              el.addEventListener("touchend", onTouchEnd, !1);
            }
          }
          function onTouchMove(e) {
            localX = e.touches[0].pageX;
            localY = e.touches[0].pageY;
            dx = vertical ? startX - localY : startX - localX;
            scrolling = vertical
              ? Math.abs(dx) < Math.abs(localX - startY)
              : Math.abs(dx) < Math.abs(localY - startY);
            var fxms = 500;
            if (!scrolling || Number(new Date()) - startT > fxms) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx =
                    dx /
                    ((slider.currentSlide === 0 && dx < 0) ||
                    (slider.currentSlide === slider.last && dx > 0)
                      ? Math.abs(dx) / cwidth + 2
                      : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          }
          function onTouchEnd(e) {
            el.removeEventListener("touchmove", onTouchMove, !1);
            if (
              slider.animatingTo === slider.currentSlide &&
              !scrolling &&
              !(dx === null)
            ) {
              var updateDx = reverse ? -dx : dx,
                target =
                  updateDx > 0
                    ? slider.getTarget("next")
                    : slider.getTarget("prev");
              if (
                slider.canAdvance(target) &&
                ((Number(new Date()) - startT < 550 &&
                  Math.abs(updateDx) > 50) ||
                  Math.abs(updateDx) > cwidth / 2)
              ) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade)
                  slider.flexAnimate(
                    slider.currentSlide,
                    slider.vars.pauseOnAction,
                    !0
                  );
              }
            }
            el.removeEventListener("touchend", onTouchEnd, !1);
            startX = null;
            startY = null;
            dx = null;
            offset = null;
          }
        } else {
          el.style.msTouchAction = "none";
          el._gesture = new MSGesture();
          el._gesture.target = el;
          el.addEventListener("MSPointerDown", onMSPointerDown, !1);
          el._slider = slider;
          el.addEventListener("MSGestureChange", onMSGestureChange, !1);
          el.addEventListener("MSGestureEnd", onMSGestureEnd, !1);
          function onMSPointerDown(e) {
            e.stopPropagation();
            if (slider.animating) {
              e.preventDefault();
            } else {
              slider.pause();
              el._gesture.addPointer(e.pointerId);
              accDx = 0;
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              offset =
                carousel && reverse && slider.animatingTo === slider.last
                  ? 0
                  : carousel && reverse
                  ? slider.limit -
                    (slider.itemW + slider.vars.itemMargin) *
                      slider.move *
                      slider.animatingTo
                  : carousel && slider.currentSlide === slider.last
                  ? slider.limit
                  : carousel
                  ? (slider.itemW + slider.vars.itemMargin) *
                    slider.move *
                    slider.currentSlide
                  : reverse
                  ? (slider.last - slider.currentSlide + slider.cloneOffset) *
                    cwidth
                  : (slider.currentSlide + slider.cloneOffset) * cwidth;
            }
          }
          function onMSGestureChange(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            var transX = -e.translationX,
              transY = -e.translationY;
            accDx = accDx + (vertical ? transY : transX);
            dx = accDx;
            scrolling = vertical
              ? Math.abs(accDx) < Math.abs(-transX)
              : Math.abs(accDx) < Math.abs(-transY);
            if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
              setImmediate(function () {
                el._gesture.stop();
              });
              return;
            }
            if (!scrolling || Number(new Date()) - startT > 500) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx =
                    accDx /
                    ((slider.currentSlide === 0 && accDx < 0) ||
                    (slider.currentSlide === slider.last && accDx > 0)
                      ? Math.abs(accDx) / cwidth + 2
                      : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          }
          function onMSGestureEnd(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            if (
              slider.animatingTo === slider.currentSlide &&
              !scrolling &&
              !(dx === null)
            ) {
              var updateDx = reverse ? -dx : dx,
                target =
                  updateDx > 0
                    ? slider.getTarget("next")
                    : slider.getTarget("prev");
              if (
                slider.canAdvance(target) &&
                ((Number(new Date()) - startT < 550 &&
                  Math.abs(updateDx) > 50) ||
                  Math.abs(updateDx) > cwidth / 2)
              ) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade)
                  slider.flexAnimate(
                    slider.currentSlide,
                    slider.vars.pauseOnAction,
                    !0
                  );
              }
            }
            startX = null;
            startY = null;
            dx = null;
            offset = null;
            accDx = 0;
          }
        }
      },
      resize: function () {
        if (!slider.animating && slider.is(":visible")) {
          if (!carousel) slider.doMath();
          if (fade) {
            methods.smoothHeight();
          } else if (carousel) {
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          } else if (vertical) {
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            if (slider.vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function (dur) {
        if (!vertical || fade) {
          var $obj = fade ? slider : slider.viewport;
          dur
            ? $obj.animate(
                { height: slider.slides.eq(slider.animatingTo).outerHeight() },
                dur
              )
            : $obj.height(slider.slides.eq(slider.animatingTo).outerHeight());
        }
      },
      sync: function (action) {
        var $obj = $(slider.vars.sync).data("hotelmaster_flexslider"),
          target = slider.animatingTo;
        switch (action) {
          case "animate":
            $obj.flexAnimate(target, slider.vars.pauseOnAction, !1, !0);
            break;
          case "play":
            if (!$obj.playing && !$obj.asNav) {
              $obj.play();
            }
            break;
          case "pause":
            $obj.pause();
            break;
        }
      },
      pauseInvisible: {
        visProp: null,
        init: function () {
          var prefixes = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";
          for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i] + "Hidden" in document)
              methods.pauseInvisible.visProp = prefixes[i] + "Hidden";
          }
          if (methods.pauseInvisible.visProp) {
            var evtname =
              methods.pauseInvisible.visProp.replace(/[H|h]idden/, "") +
              "visibilitychange";
            document.addEventListener(evtname, function () {
              if (methods.pauseInvisible.isHidden()) {
                if (slider.startTimeout) clearTimeout(slider.startTimeout);
                else slider.pause();
              } else {
                if (slider.started) slider.play();
                else
                  slider.vars.initDelay > 0
                    ? setTimeout(slider.play, slider.vars.initDelay)
                    : slider.play();
              }
            });
          }
        },
        isHidden: function () {
          return document[methods.pauseInvisible.visProp] || !1;
        },
      },
      setToClearWatchedEvent: function () {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function () {
          watchedEvent = "";
        }, 3000);
      },
    };
    slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = target > slider.currentSlide ? "next" : "prev";
      }
      if (asNav && slider.pagingCount === 1)
        slider.direction = slider.currentItem < target ? "next" : "prev";
      if (
        !slider.animating &&
        (slider.canAdvance(target, fromNav) || override) &&
        slider.is(":visible")
      ) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data("hotelmaster_flexslider");
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, !0, !1, !0, fromNav);
          slider.direction = slider.currentItem < target ? "next" : "prev";
          master.direction = slider.direction;
          if (
            Math.ceil((target + 1) / slider.visible) - 1 !==
              slider.currentSlide &&
            target !== 0
          ) {
            slider.currentItem = target;
            slider.slides
              .removeClass(namespace + "active-slide")
              .eq(target)
              .addClass(namespace + "active-slide");
            target = Math.floor(target / slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides
              .removeClass(namespace + "active-slide")
              .eq(target)
              .addClass(namespace + "active-slide");
            return !1;
          }
        }
        slider.animating = !0;
        slider.animatingTo = target;
        if (pause) slider.pause();
        slider.vars.before(slider);
        if (slider.syncExists && !fromNav) methods.sync("animate");
        if (slider.vars.controlNav) methods.controlNav.active();
        if (!carousel)
          slider.slides
            .removeClass(namespace + "active-slide")
            .eq(target)
            .addClass(namespace + "active-slide");
        slider.atEnd = target === 0 || target === slider.last;
        if (slider.vars.directionNav) methods.directionNav.update();
        if (target === slider.last) {
          slider.vars.end(slider);
          if (!slider.vars.animationLoop) slider.pause();
        }
        if (!fade) {
          var dimension = vertical
              ? slider.slides.filter(":first").height()
              : slider.computedW,
            margin,
            slideString,
            calcNext;
          if (carousel) {
            margin = slider.vars.itemMargin;
            calcNext =
              (slider.itemW + margin) * slider.move * slider.animatingTo;
            slideString =
              calcNext > slider.limit && slider.visible !== 1
                ? slider.limit
                : calcNext;
          } else if (
            slider.currentSlide === 0 &&
            target === slider.count - 1 &&
            slider.vars.animationLoop &&
            slider.direction !== "next"
          ) {
            slideString = reverse
              ? (slider.count + slider.cloneOffset) * dimension
              : 0;
          } else if (
            slider.currentSlide === slider.last &&
            target === 0 &&
            slider.vars.animationLoop &&
            slider.direction !== "prev"
          ) {
            slideString = reverse ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = reverse
              ? (slider.count - 1 - target + slider.cloneOffset) * dimension
              : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = !1;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind(
              "webkitTransitionEnd transitionend",
              function () {
                slider.wrapup(dimension);
              }
            );
          } else {
            slider.container.animate(
              slider.args,
              slider.vars.animationSpeed,
              slider.vars.easing,
              function () {
                slider.wrapup(dimension);
              }
            );
          }
        } else {
          if (!touch) {
            slider.slides
              .eq(slider.currentSlide)
              .css({ zIndex: 1 })
              .animate(
                { opacity: 0 },
                slider.vars.animationSpeed,
                slider.vars.easing
              );
            slider.slides
              .eq(target)
              .css({ zIndex: 2 })
              .animate(
                { opacity: 1 },
                slider.vars.animationSpeed,
                slider.vars.easing,
                slider.wrapup
              );
          } else {
            slider.slides
              .eq(slider.currentSlide)
              .css({ opacity: 0, zIndex: 1 });
            slider.slides.eq(target).css({ opacity: 1, zIndex: 2 });
            slider.wrapup(dimension);
          }
        }
        if (slider.vars.smoothHeight)
          methods.smoothHeight(slider.vars.animationSpeed);
      }
    };
    slider.wrapup = function (dimension) {
      if (!fade && !carousel) {
        if (
          slider.currentSlide === 0 &&
          slider.animatingTo === slider.last &&
          slider.vars.animationLoop
        ) {
          slider.setProps(dimension, "jumpEnd");
        } else if (
          slider.currentSlide === slider.last &&
          slider.animatingTo === 0 &&
          slider.vars.animationLoop
        ) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = !1;
      slider.currentSlide = slider.animatingTo;
      slider.vars.after(slider);
    };
    slider.animateSlides = function () {
      if (!slider.animating && focused)
        slider.flexAnimate(slider.getTarget("next"));
    };
    slider.pause = function () {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = !1;
      if (slider.vars.pausePlay) methods.pausePlay.update("play");
      if (slider.syncExists) methods.sync("pause");
    };
    slider.play = function () {
      if (slider.playing) clearInterval(slider.animatedSlides);
      slider.animatedSlides =
        slider.animatedSlides ||
        setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = !0;
      if (slider.vars.pausePlay) methods.pausePlay.update("pause");
      if (slider.syncExists) methods.sync("play");
    };
    slider.stop = function () {
      slider.pause();
      slider.stopped = !0;
    };
    slider.canAdvance = function (target, fromNav) {
      var last = asNav ? slider.pagingCount - 1 : slider.last;
      return fromNav
        ? !0
        : asNav &&
          slider.currentItem === slider.count - 1 &&
          target === 0 &&
          slider.direction === "prev"
        ? !0
        : asNav &&
          slider.currentItem === 0 &&
          target === slider.pagingCount - 1 &&
          slider.direction !== "next"
        ? !1
        : target === slider.currentSlide && !asNav
        ? !1
        : slider.vars.animationLoop
        ? !0
        : slider.atEnd &&
          slider.currentSlide === 0 &&
          target === last &&
          slider.direction !== "next"
        ? !1
        : slider.atEnd &&
          slider.currentSlide === last &&
          target === 0 &&
          slider.direction === "next"
        ? !1
        : !0;
    };
    slider.getTarget = function (dir) {
      slider.direction = dir;
      if (dir === "next") {
        return slider.currentSlide === slider.last
          ? 0
          : slider.currentSlide + 1;
      } else {
        return slider.currentSlide === 0
          ? slider.last
          : slider.currentSlide - 1;
      }
    };
    slider.setProps = function (pos, special, dur) {
      var target = (function () {
        var posCheck = pos
            ? pos
            : (slider.itemW + slider.vars.itemMargin) *
              slider.move *
              slider.animatingTo,
          posCalc = (function () {
            if (carousel) {
              return special === "setTouch"
                ? pos
                : reverse && slider.animatingTo === slider.last
                ? 0
                : reverse
                ? slider.limit -
                  (slider.itemW + slider.vars.itemMargin) *
                    slider.move *
                    slider.animatingTo
                : slider.animatingTo === slider.last
                ? slider.limit
                : posCheck;
            } else {
              switch (special) {
                case "setTotal":
                  return reverse
                    ? (slider.count -
                        1 -
                        slider.currentSlide +
                        slider.cloneOffset) *
                        pos
                    : (slider.currentSlide + slider.cloneOffset) * pos;
                case "setTouch":
                  return reverse ? pos : pos;
                case "jumpEnd":
                  return reverse ? pos : slider.count * pos;
                case "jumpStart":
                  return reverse ? slider.count * pos : pos;
                default:
                  return pos;
              }
            }
          })();
        return posCalc * -1 + "px";
      })();
      if (slider.transitions) {
        target = vertical
          ? "translate3d(0," + target + ",0)"
          : "translate3d(" + target + ",0,0)";
        dur = dur !== undefined ? dur / 1000 + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }
      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined)
        slider.container.css(slider.args);
    };
    slider.setup = function (type) {
      if (!fade) {
        var sliderOffset, arr;
        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>')
            .css({ overflow: "hidden", position: "relative" })
            .appendTo(slider)
            .append(slider.container);
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          if (type !== "init") slider.container.find(".clone").remove();
          slider.container
            .append(
              slider.slides
                .first()
                .clone()
                .addClass("clone")
                .attr("aria-hidden", "true")
            )
            .prepend(
              slider.slides
                .last()
                .clone()
                .addClass("clone")
                .attr("aria-hidden", "true")
            );
        }
        slider.newSlides = $(slider.vars.selector, slider);
        sliderOffset = reverse
          ? slider.count - 1 - slider.currentSlide + slider.cloneOffset
          : slider.currentSlide + slider.cloneOffset;
        if (vertical && !carousel) {
          slider.container
            .height((slider.count + slider.cloneCount) * 200 + "%")
            .css("position", "absolute")
            .width("100%");
          setTimeout(
            function () {
              slider.newSlides.css({ display: "block" });
              slider.doMath();
              slider.viewport.height(slider.h);
              slider.setProps(sliderOffset * slider.h, "init");
            },
            type === "init" ? 100 : 0
          );
        } else {
          slider.container.width(
            (slider.count + slider.cloneCount) * 200 + "%"
          );
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(
            function () {
              slider.doMath();
              slider.newSlides.css({
                width: slider.computedW,
                float: "left",
                display: "block",
              });
              if (slider.vars.smoothHeight) methods.smoothHeight();
            },
            type === "init" ? 100 : 0
          );
        }
      } else {
        slider.slides.css({
          width: "100%",
          float: "left",
          marginRight: "-100%",
          position: "relative",
        });
        if (type === "init") {
          if (!touch) {
            slider.slides
              .css({ opacity: 0, display: "block", zIndex: 1 })
              .eq(slider.currentSlide)
              .css({ zIndex: 2 })
              .animate(
                { opacity: 1 },
                slider.vars.animationSpeed,
                slider.vars.easing
              );
          } else {
            slider.slides
              .css({
                opacity: 0,
                display: "block",
                webkitTransition:
                  "opacity " + slider.vars.animationSpeed / 1000 + "s ease",
                zIndex: 1,
              })
              .eq(slider.currentSlide)
              .css({ opacity: 1, zIndex: 2 });
          }
        }
        if (slider.vars.smoothHeight) methods.smoothHeight();
      }
      if (!carousel)
        slider.slides
          .removeClass(namespace + "active-slide")
          .eq(slider.currentSlide)
          .addClass(namespace + "active-slide");
    };
    slider.doMath = function () {
      var slide = slider.slides.first(),
        slideMargin = slider.vars.itemMargin,
        minItems = slider.vars.minItems,
        maxItems = slider.vars.maxItems;
      var is_responsive = !$("body").children().hasClass("gdlr-no-responsive");
      if ($(window).width() < 767 && is_responsive) {
        minItems = 1;
        maxItems = 1;
      }
      if ($(window).width() < 419 && is_responsive) {
        minItems = 1;
        maxItems = 1;
      }
      slider.w =
        slider.viewport === undefined
          ? slider.width()
          : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = minItems ? minItems * slider.itemT : slider.w;
        slider.maxW = maxItems
          ? maxItems * slider.itemT - slideMargin
          : slider.w;
        slider.itemW =
          slider.minW > slider.w
            ? (slider.w - slideMargin * (minItems - 1)) / minItems
            : slider.maxW < slider.w
            ? (slider.w - slideMargin * (maxItems - 1)) / maxItems
            : slider.vars.itemWidth > slider.w
            ? slider.w
            : slider.vars.itemWidth;
        slider.visible = Math.floor(
          (slider.w + slideMargin) / (slider.itemW + slideMargin - 1)
        );
        slider.move =
          slider.vars.move > 0 && slider.vars.move < slider.visible
            ? slider.vars.move
            : slider.visible;
        slider.pagingCount = Math.ceil(
          (slider.count - slider.visible) / slider.move + 1
        );
        slider.last = slider.pagingCount - 1;
        slider.limit =
          slider.pagingCount === 1
            ? 0
            : slider.vars.itemWidth > slider.w
            ? slider.itemW * (slider.count - 1) +
              slideMargin * (slider.count - 1)
            : (slider.itemW + slideMargin) * slider.count -
              slider.w -
              slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };
    slider.update = function (pos, action) {
      slider.doMath();
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }
      if (slider.vars.controlNav && !slider.manualControls) {
        if (
          (action === "add" && !carousel) ||
          slider.pagingCount > slider.controlNav.length
        ) {
          methods.controlNav.update("add");
        } else if (
          (action === "remove" && !carousel) ||
          slider.pagingCount < slider.controlNav.length
        ) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      if (slider.vars.directionNav) methods.directionNav.update();
    };
    slider.addSlide = function (obj, pos) {
      var $obj = $(obj);
      slider.count += 1;
      slider.last = slider.count - 1;
      if (vertical && reverse) {
        pos !== undefined
          ? slider.slides.eq(slider.count - pos).after($obj)
          : slider.container.prepend($obj);
      } else {
        pos !== undefined
          ? slider.slides.eq(pos).before($obj)
          : slider.container.append($obj);
      }
      slider.update(pos, "add");
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      slider.setup();
      slider.vars.added(slider);
    };
    slider.removeSlide = function (obj) {
      var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;
      slider.count -= 1;
      slider.last = slider.count - 1;
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        vertical && reverse
          ? slider.slides.eq(slider.last).remove()
          : slider.slides.eq(obj).remove();
      }
      slider.doMath();
      slider.update(pos, "remove");
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      slider.setup();
      slider.vars.removed(slider);
    };
    methods.init();
  };
  $(window)
    .blur(function (e) {
      focused = !1;
    })
    .focus(function (e) {
      focused = !0;
    });
  $.hotelmaster_flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides:first > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: !1,
    animationLoop: !0,
    smoothHeight: !1,
    startAt: 0,
    slideshow: !0,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    initDelay: 0,
    randomize: !1,
    thumbCaptions: !1,
    pauseOnAction: !0,
    pauseOnHover: !1,
    pauseInvisible: !0,
    useCSS: !0,
    touch: !0,
    video: !1,
    controlNav: !0,
    directionNav: !0,
    prevText: "Previous",
    nextText: "Next",
    keyboard: !0,
    multipleKeyboard: !1,
    mousewheel: !1,
    pausePlay: !1,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: !0,
    start: function () {},
    before: function () {},
    after: function () {},
    end: function () {},
    added: function () {},
    removed: function () {},
  };
  $.fn.hotelmaster_flexslider = function (options) {
    if (options === undefined) options = {};
    if (typeof options === "object") {
      return this.each(function () {
        var $this = $(this),
          selector = options.selector ? options.selector : ".slides > li",
          $slides = $this.find(selector);
        if (
          ($slides.length === 1 && options.allowOneSlide === !0) ||
          $slides.length === 0
        ) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data("hotelmaster_flexslider") === undefined) {
          new $.hotelmaster_flexslider(this, options);
        }
      });
    } else {
      var $slider = $(this).data("hotelmaster_flexslider");
      switch (options) {
        case "play":
          $slider.play();
          break;
        case "pause":
          $slider.pause();
          break;
        case "stop":
          $slider.stop();
          break;
        case "next":
          $slider.flexAnimate($slider.getTarget("next"), !0);
          break;
        case "prev":
        case "previous":
          $slider.flexAnimate($slider.getTarget("prev"), !0);
          break;
        default:
          if (typeof options === "number") $slider.flexAnimate(options, !0);
      }
    }
  };
})(jQuery);
/*!
 * Isotope PACKAGED v2.1.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function (t) {
  function e() {}
  function i(t) {
    function i(e) {
      e.prototype.option ||
        (e.prototype.option = function (e) {
          t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e));
        });
    }
    function n(e, i) {
      t.fn[e] = function (n) {
        if ("string" == typeof n) {
          for (
            var s = o.call(arguments, 1), a = 0, u = this.length;
            u > a;
            a++
          ) {
            var p = this[a],
              h = t.data(p, e);
            if (h)
              if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                var f = h[n].apply(h, s);
                if (void 0 !== f) return f;
              } else r("no such method '" + n + "' for " + e + " instance");
            else
              r(
                "cannot call methods on " +
                  e +
                  " prior to initialization; " +
                  "attempted to call '" +
                  n +
                  "'"
              );
          }
          return this;
        }
        return this.each(function () {
          var o = t.data(this, e);
          o
            ? (o.option(n), o._init())
            : ((o = new i(this, n)), t.data(this, e, o));
        });
      };
    }
    if (t) {
      var r =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            };
      return (
        (t.bridget = function (t, e) {
          i(e), n(t, e);
        }),
        t.bridget
      );
    }
  }
  var o = Array.prototype.slice;
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery.bridget", ["jquery"], i)
    : "object" == typeof exports
    ? i(require("jquery"))
    : i(t.jQuery);
})(window),
  (function (t) {
    function e(e) {
      var i = t.event;
      return (i.target = i.target || i.srcElement || e), i;
    }
    var i = document.documentElement,
      o = function () {};
    i.addEventListener
      ? (o = function (t, e, i) {
          t.addEventListener(e, i, !1);
        })
      : i.attachEvent &&
        (o = function (t, i, o) {
          (t[i + o] = o.handleEvent
            ? function () {
                var i = e(t);
                o.handleEvent.call(o, i);
              }
            : function () {
                var i = e(t);
                o.call(t, i);
              }),
            t.attachEvent("on" + i, t[i + o]);
        });
    var n = function () {};
    i.removeEventListener
      ? (n = function (t, e, i) {
          t.removeEventListener(e, i, !1);
        })
      : i.detachEvent &&
        (n = function (t, e, i) {
          t.detachEvent("on" + e, t[e + i]);
          try {
            delete t[e + i];
          } catch (o) {
            t[e + i] = void 0;
          }
        });
    var r = { bind: o, unbind: n };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", r)
      : "object" == typeof exports
      ? (module.exports = r)
      : (t.eventie = r);
  })(this),
  (function (t) {
    function e(t) {
      "function" == typeof t && (e.isReady ? t() : s.push(t));
    }
    function i(t) {
      var i = "readystatechange" === t.type && "complete" !== r.readyState;
      e.isReady || i || o();
    }
    function o() {
      e.isReady = !0;
      for (var t = 0, i = s.length; i > t; t++) {
        var o = s[t];
        o();
      }
    }
    function n(n) {
      return (
        "complete" === r.readyState
          ? o()
          : (n.bind(r, "DOMContentLoaded", i),
            n.bind(r, "readystatechange", i),
            n.bind(t, "load", i)),
        e
      );
    }
    var r = t.document,
      s = [];
    (e.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], n)
        : "object" == typeof exports
        ? (module.exports = n(require("eventie")))
        : (t.docReady = n(t.eventie));
  })(window),
  function () {
    function t() {}
    function e(t, e) {
      for (var i = t.length; i--; ) if (t[i].listener === e) return i;
      return -1;
    }
    function i(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var o = t.prototype,
      n = this,
      r = n.EventEmitter;
    (o.getListeners = function (t) {
      var e,
        i,
        o = this._getEvents();
      if (t instanceof RegExp) {
        e = {};
        for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]);
      } else e = o[t] || (o[t] = []);
      return e;
    }),
      (o.flattenListeners = function (t) {
        var e,
          i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i;
      }),
      (o.getListenersAsObject = function (t) {
        var e,
          i = this.getListeners(t);
        return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
      }),
      (o.addListener = function (t, i) {
        var o,
          n = this.getListenersAsObject(t),
          r = "object" == typeof i;
        for (o in n)
          n.hasOwnProperty(o) &&
            -1 === e(n[o], i) &&
            n[o].push(r ? i : { listener: i, once: !1 });
        return this;
      }),
      (o.on = i("addListener")),
      (o.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (o.once = i("addOnceListener")),
      (o.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (o.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (o.removeListener = function (t, i) {
        var o,
          n,
          r = this.getListenersAsObject(t);
        for (n in r)
          r.hasOwnProperty(n) &&
            ((o = e(r[n], i)), -1 !== o && r[n].splice(o, 1));
        return this;
      }),
      (o.off = i("removeListener")),
      (o.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (o.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (o.manipulateListeners = function (t, e, i) {
        var o,
          n,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (o = i.length; o--; ) r.call(this, e, i[o]);
        else
          for (o in e)
            e.hasOwnProperty(o) &&
              (n = e[o]) &&
              ("function" == typeof n
                ? r.call(this, o, n)
                : s.call(this, o, n));
        return this;
      }),
      (o.removeEvent = function (t) {
        var e,
          i = typeof t,
          o = this._getEvents();
        if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
          for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events;
        return this;
      }),
      (o.removeAllListeners = i("removeEvent")),
      (o.emitEvent = function (t, e) {
        var i,
          o,
          n,
          r,
          s = this.getListenersAsObject(t);
        for (n in s)
          if (s.hasOwnProperty(n))
            for (o = s[n].length; o--; )
              (i = s[n][o]),
                i.once === !0 && this.removeListener(t, i.listener),
                (r = i.listener.apply(this, e || [])),
                r === this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener);
        return this;
      }),
      (o.trigger = i("emitEvent")),
      (o.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (o.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (o._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (o._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (n.EventEmitter = r), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (n.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(t) {
      if (t) {
        if ("string" == typeof o[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, n = 0, r = i.length; r > n; n++)
          if (((e = i[n] + t), "string" == typeof o[e])) return e;
      }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
      o = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return e;
        })
      : "object" == typeof exports
      ? (module.exports = e)
      : (t.getStyleProperty = e);
  })(window),
  (function (t) {
    function e(t) {
      var e = parseFloat(t),
        i = -1 === t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function i() {}
    function o() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0,
          i = s.length;
        i > e;
        e++
      ) {
        var o = s[e];
        t[o] = 0;
      }
      return t;
    }
    function n(i) {
      function n() {
        if (!d) {
          d = !0;
          var o = t.getComputedStyle;
          if (
            ((p = (function () {
              var t = o
                ? function (t) {
                    return o(t, null);
                  }
                : function (t) {
                    return t.currentStyle;
                  };
              return function (e) {
                var i = t(e);
                return (
                  i ||
                    r(
                      "Style returned " +
                        i +
                        ". Are you running this code in a hidden iframe on Firefox? " +
                        "See http://bit.ly/getsizebug1"
                    ),
                  i
                );
              };
            })()),
            (h = i("boxSizing")))
          ) {
            var n = document.createElement("div");
            (n.style.width = "200px"),
              (n.style.padding = "1px 2px 3px 4px"),
              (n.style.borderStyle = "solid"),
              (n.style.borderWidth = "1px 2px 3px 4px"),
              (n.style[h] = "border-box");
            var s = document.body || document.documentElement;
            s.appendChild(n);
            var a = p(n);
            (f = 200 === e(a.width)), s.removeChild(n);
          }
        }
      }
      function a(t) {
        if (
          (n(),
          "string" == typeof t && (t = document.querySelector(t)),
          t && "object" == typeof t && t.nodeType)
        ) {
          var i = p(t);
          if ("none" === i.display) return o();
          var r = {};
          (r.width = t.offsetWidth), (r.height = t.offsetHeight);
          for (
            var a = (r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h])),
              d = 0,
              l = s.length;
            l > d;
            d++
          ) {
            var c = s[d],
              y = i[c];
            y = u(t, y);
            var m = parseFloat(y);
            r[c] = isNaN(m) ? 0 : m;
          }
          var g = r.paddingLeft + r.paddingRight,
            v = r.paddingTop + r.paddingBottom,
            _ = r.marginLeft + r.marginRight,
            I = r.marginTop + r.marginBottom,
            L = r.borderLeftWidth + r.borderRightWidth,
            z = r.borderTopWidth + r.borderBottomWidth,
            b = a && f,
            x = e(i.width);
          x !== !1 && (r.width = x + (b ? 0 : g + L));
          var S = e(i.height);
          return (
            S !== !1 && (r.height = S + (b ? 0 : v + z)),
            (r.innerWidth = r.width - (g + L)),
            (r.innerHeight = r.height - (v + z)),
            (r.outerWidth = r.width + _),
            (r.outerHeight = r.height + I),
            r
          );
        }
      }
      function u(e, i) {
        if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
        var o = e.style,
          n = o.left,
          r = e.runtimeStyle,
          s = r && r.left;
        return (
          s && (r.left = e.currentStyle.left),
          (o.left = i),
          (i = o.pixelLeft),
          (o.left = n),
          s && (r.left = s),
          i
        );
      }
      var p,
        h,
        f,
        d = !1;
      return a;
    }
    var r =
        "undefined" == typeof console
          ? i
          : function (t) {
              console.error(t);
            },
      s = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          n
        )
      : "object" == typeof exports
      ? (module.exports = n(require("desandro-get-style-property")))
      : (t.getSize = n(t.getStyleProperty));
  })(window),
  (function (t) {
    function e(t, e) {
      return t[s](e);
    }
    function i(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment();
        e.appendChild(t);
      }
    }
    function o(t, e) {
      i(t);
      for (
        var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length;
        r > n;
        n++
      )
        if (o[n] === t) return !0;
      return !1;
    }
    function n(t, o) {
      return i(t), e(t, o);
    }
    var r,
      s = (function () {
        if (t.matchesSelector) return "matchesSelector";
        for (
          var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length;
          o > i;
          i++
        ) {
          var n = e[i],
            r = n + "MatchesSelector";
          if (t[r]) return r;
        }
      })();
    if (s) {
      var a = document.createElement("div"),
        u = e(a, "div");
      r = u ? e : n;
    } else r = o;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return r;
        })
      : "object" == typeof exports
      ? (module.exports = r)
      : (window.matchesSelector = r);
  })(Element.prototype),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    function n(t, n, r) {
      function a(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = { x: 0, y: 0 }),
          this._create());
      }
      var u = r("transition"),
        p = r("transform"),
        h = u && p,
        f = !!r("perspective"),
        d = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend",
        }[u],
        l = [
          "transform",
          "transition",
          "transitionDuration",
          "transitionProperty",
        ],
        c = (function () {
          for (var t = {}, e = 0, i = l.length; i > e; e++) {
            var o = l[e],
              n = r(o);
            n && n !== o && (t[o] = n);
          }
          return t;
        })();
      e(a.prototype, t.prototype),
        (a.prototype._create = function () {
          (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: "absolute" });
        }),
        (a.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (a.prototype.getSize = function () {
          this.size = n(this.element);
        }),
        (a.prototype.css = function (t) {
          var e = this.element.style;
          for (var i in t) {
            var o = c[i] || i;
            e[o] = t[i];
          }
        }),
        (a.prototype.getPosition = function () {
          var t = s(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            o = e.isOriginTop,
            n = parseInt(t[i ? "left" : "right"], 10),
            r = parseInt(t[o ? "top" : "bottom"], 10);
          (n = isNaN(n) ? 0 : n), (r = isNaN(r) ? 0 : r);
          var a = this.layout.size;
          (n -= i ? a.paddingLeft : a.paddingRight),
            (r -= o ? a.paddingTop : a.paddingBottom),
            (this.position.x = n),
            (this.position.y = r);
        }),
        (a.prototype.layoutPosition = function () {
          var t = this.layout.size,
            e = this.layout.options,
            i = {};
          e.isOriginLeft
            ? ((i.left = this.position.x + t.paddingLeft + "px"),
              (i.right = ""))
            : ((i.right = this.position.x + t.paddingRight + "px"),
              (i.left = "")),
            e.isOriginTop
              ? ((i.top = this.position.y + t.paddingTop + "px"),
                (i.bottom = ""))
              : ((i.bottom = this.position.y + t.paddingBottom + "px"),
                (i.top = "")),
            this.css(i),
            this.emitEvent("layout", [this]);
        });
      var y = f
        ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)";
          }
        : function (t, e) {
            return "translate(" + t + "px, " + e + "px)";
          };
      (a.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = parseInt(t, 10),
          r = parseInt(e, 10),
          s = n === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return this.layoutPosition(), void 0;
        var a = t - i,
          u = e - o,
          p = {},
          h = this.layout.options;
        (a = h.isOriginLeft ? a : -a),
          (u = h.isOriginTop ? u : -u),
          (p.transform = y(a, u)),
          this.transition({
            to: p,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
        (a.prototype.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }),
        (a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo),
        (a.prototype.setPosition = function (t, e) {
          (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (a.prototype._nonTransition = function (t) {
          this.css(t.to), t.isCleaning && this._removeStyles(t.to);
          for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }),
        (a.prototype._transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return this._nonTransition(t), void 0;
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        });
      var m = p && o(p) + ",opacity";
      (a.prototype.enableTransition = function () {
        this.isTransitioning ||
          (this.css({
            transitionProperty: m,
            transitionDuration: this.layout.options.transitionDuration,
          }),
          this.element.addEventListener(d, this, !1));
      }),
        (a.prototype.transition =
          a.prototype[u ? "_transition" : "_nonTransition"]),
        (a.prototype.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t);
        }),
        (a.prototype.onotransitionend = function (t) {
          this.ontransitionend(t);
        });
      var g = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform",
      };
      (a.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            o = g[t.propertyName] || t.propertyName;
          if (
            (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean &&
              ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
            o in e.onEnd)
          ) {
            var n = e.onEnd[o];
            n.call(this), delete e.onEnd[o];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }),
        (a.prototype.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(d, this, !1),
            (this.isTransitioning = !1);
        }),
        (a.prototype._removeStyles = function (t) {
          var e = {};
          for (var i in t) e[i] = "";
          this.css(e);
        });
      var v = { transitionProperty: "", transitionDuration: "" };
      return (
        (a.prototype.removeTransitionStyles = function () {
          this.css(v);
        }),
        (a.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this]);
        }),
        (a.prototype.remove = function () {
          if (!u || !parseFloat(this.layout.options.transitionDuration))
            return this.removeElem(), void 0;
          var t = this;
          this.on("transitionEnd", function () {
            return t.removeElem(), !0;
          }),
            this.hide();
        }),
        (a.prototype.reveal = function () {
          delete this.isHidden, this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
          });
        }),
        (a.prototype.hide = function () {
          (this.isHidden = !0), this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: {
              opacity: function () {
                this.isHidden && this.css({ display: "none" });
              },
            },
          });
        }),
        (a.prototype.destroy = function () {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: "",
          });
        }),
        a
      );
    }
    var r = t.getComputedStyle,
      s = r
        ? function (t) {
            return r(t, null);
          }
        : function (t) {
            return t.currentStyle;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
          ],
          n
        )
      : "object" == typeof exports
      ? (module.exports = n(
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property")
        ))
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty)));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      return "[object Array]" === f.call(t);
    }
    function o(t) {
      var e = [];
      if (i(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
      else e.push(t);
      return e;
    }
    function n(t, e) {
      var i = l(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function r(t) {
      return t
        .replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + "-" + i;
        })
        .toLowerCase();
    }
    function s(i, s, f, l, c, y) {
      function m(t, i) {
        if (("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)))
          return (
            u &&
              u.error("Bad " + this.constructor.namespace + " element: " + t),
            void 0
          );
        (this.element = t),
          (this.options = e({}, this.constructor.defaults)),
          this.option(i);
        var o = ++g;
        (this.element.outlayerGUID = o),
          (v[o] = this),
          this._create(),
          this.options.isInitLayout && this.layout();
      }
      var g = 0,
        v = {};
      return (
        (m.namespace = "outlayer"),
        (m.Item = y),
        (m.defaults = {
          containerStyle: { position: "relative" },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          isResizingContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
          visibleStyle: { opacity: 1, transform: "scale(1)" },
        }),
        e(m.prototype, f.prototype),
        (m.prototype.option = function (t) {
          e(this.options, t);
        }),
        (m.prototype._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize();
        }),
        (m.prototype.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }),
        (m.prototype._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              i = this.constructor.Item,
              o = [],
              n = 0,
              r = e.length;
            r > n;
            n++
          ) {
            var s = e[n],
              a = new i(s, this);
            o.push(a);
          }
          return o;
        }),
        (m.prototype._filterFindItemElements = function (t) {
          t = o(t);
          for (
            var e = this.options.itemSelector, i = [], n = 0, r = t.length;
            r > n;
            n++
          ) {
            var s = t[n];
            if (d(s))
              if (e) {
                c(s, e) && i.push(s);
                for (
                  var a = s.querySelectorAll(e), u = 0, p = a.length;
                  p > u;
                  u++
                )
                  i.push(a[u]);
              } else i.push(s);
          }
          return i;
        }),
        (m.prototype.getItemElements = function () {
          for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
          return t;
        }),
        (m.prototype.layout = function () {
          this._resetLayout(), this._manageStamps();
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          this.layoutItems(this.items, t), (this._isLayoutInited = !0);
        }),
        (m.prototype._init = m.prototype.layout),
        (m.prototype._resetLayout = function () {
          this.getSize();
        }),
        (m.prototype.getSize = function () {
          this.size = l(this.element);
        }),
        (m.prototype._getMeasurement = function (t, e) {
          var i,
            o = this.options[t];
          o
            ? ("string" == typeof o
                ? (i = this.element.querySelector(o))
                : d(o) && (i = o),
              (this[t] = i ? l(i)[e] : o))
            : (this[t] = 0);
        }),
        (m.prototype.layoutItems = function (t, e) {
          (t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout();
        }),
        (m.prototype._getItemsForLayout = function (t) {
          for (var e = [], i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            n.isIgnored || e.push(n);
          }
          return e;
        }),
        (m.prototype._layoutItems = function (t, e) {
          function i() {
            o.emitEvent("layoutComplete", [o, t]);
          }
          var o = this;
          if (!t || !t.length) return i(), void 0;
          this._itemsOn(t, "layout", i);
          for (var n = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r],
              u = this._getItemLayoutPosition(a);
            (u.item = a), (u.isInstant = e || a.isLayoutInstant), n.push(u);
          }
          this._processLayoutQueue(n);
        }),
        (m.prototype._getItemLayoutPosition = function () {
          return { x: 0, y: 0 };
        }),
        (m.prototype._processLayoutQueue = function (t) {
          for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            this._positionItem(o.item, o.x, o.y, o.isInstant);
          }
        }),
        (m.prototype._positionItem = function (t, e, i, o) {
          o ? t.goTo(e, i) : t.moveTo(e, i);
        }),
        (m.prototype._postLayout = function () {
          this.resizeContainer();
        }),
        (m.prototype.resizeContainer = function () {
          if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t &&
              (this._setContainerMeasure(t.width, !0),
              this._setContainerMeasure(t.height, !1));
          }
        }),
        (m.prototype._getContainerSize = h),
        (m.prototype._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox &&
              (t += e
                ? i.paddingLeft +
                  i.paddingRight +
                  i.borderLeftWidth +
                  i.borderRightWidth
                : i.paddingBottom +
                  i.paddingTop +
                  i.borderTopWidth +
                  i.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? "width" : "height"] = t + "px");
          }
        }),
        (m.prototype._itemsOn = function (t, e, i) {
          function o() {
            return n++, n === r && i.call(s), !0;
          }
          for (
            var n = 0, r = t.length, s = this, a = 0, u = t.length;
            u > a;
            a++
          ) {
            var p = t[a];
            p.on(e, o);
          }
        }),
        (m.prototype.ignore = function (t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }),
        (m.prototype.unignore = function (t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }),
        (m.prototype.stamp = function (t) {
          if ((t = this._find(t))) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
              var o = t[e];
              this.ignore(o);
            }
          }
        }),
        (m.prototype.unstamp = function (t) {
          if ((t = this._find(t)))
            for (var e = 0, i = t.length; i > e; e++) {
              var o = t[e];
              n(o, this.stamps), this.unignore(o);
            }
        }),
        (m.prototype._find = function (t) {
          return t
            ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
              (t = o(t)))
            : void 0;
        }),
        (m.prototype._manageStamps = function () {
          if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
              var i = this.stamps[t];
              this._manageStamp(i);
            }
          }
        }),
        (m.prototype._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          };
        }),
        (m.prototype._manageStamp = h),
        (m.prototype._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = l(t),
            n = {
              left: e.left - i.left - o.marginLeft,
              top: e.top - i.top - o.marginTop,
              right: i.right - e.right - o.marginRight,
              bottom: i.bottom - e.bottom - o.marginBottom,
            };
          return n;
        }),
        (m.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (m.prototype.bindResize = function () {
          this.isResizeBound ||
            (i.bind(t, "resize", this), (this.isResizeBound = !0));
        }),
        (m.prototype.unbindResize = function () {
          this.isResizeBound && i.unbind(t, "resize", this),
            (this.isResizeBound = !1);
        }),
        (m.prototype.onresize = function () {
          function t() {
            e.resize(), delete e.resizeTimeout;
          }
          this.resizeTimeout && clearTimeout(this.resizeTimeout);
          var e = this;
          this.resizeTimeout = setTimeout(t, 100);
        }),
        (m.prototype.resize = function () {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }),
        (m.prototype.needsResizeLayout = function () {
          var t = l(this.element),
            e = this.size && t;
          return e && t.innerWidth !== this.size.innerWidth;
        }),
        (m.prototype.addItems = function (t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }),
        (m.prototype.appended = function (t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }),
        (m.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(i);
          }
        }),
        (m.prototype.reveal = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var o = t[i];
              o.reveal();
            }
        }),
        (m.prototype.hide = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var o = t[i];
              o.hide();
            }
        }),
        (m.prototype.getItem = function (t) {
          for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            if (o.element === t) return o;
          }
        }),
        (m.prototype.getItems = function (t) {
          if (t && t.length) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
              var n = t[i],
                r = this.getItem(n);
              r && e.push(r);
            }
            return e;
          }
        }),
        (m.prototype.remove = function (t) {
          t = o(t);
          var e = this.getItems(t);
          if (e && e.length) {
            this._itemsOn(e, "remove", function () {
              this.emitEvent("removeComplete", [this, e]);
            });
            for (var i = 0, r = e.length; r > i; i++) {
              var s = e[i];
              s.remove(), n(s, this.items);
            }
          }
        }),
        (m.prototype.destroy = function () {
          var t = this.element.style;
          (t.height = ""), (t.position = ""), (t.width = "");
          for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            o.destroy();
          }
          this.unbindResize();
          var n = this.element.outlayerGUID;
          delete v[n],
            delete this.element.outlayerGUID,
            p && p.removeData(this.element, this.constructor.namespace);
        }),
        (m.data = function (t) {
          var e = t && t.outlayerGUID;
          return e && v[e];
        }),
        (m.create = function (t, i) {
          function o() {
            m.apply(this, arguments);
          }
          return (
            Object.create
              ? (o.prototype = Object.create(m.prototype))
              : e(o.prototype, m.prototype),
            (o.prototype.constructor = o),
            (o.defaults = e({}, m.defaults)),
            e(o.defaults, i),
            (o.prototype.settings = {}),
            (o.namespace = t),
            (o.data = m.data),
            (o.Item = function () {
              y.apply(this, arguments);
            }),
            (o.Item.prototype = new y()),
            s(function () {
              for (
                var e = r(t),
                  i = a.querySelectorAll(".js-" + e),
                  n = "data-" + e + "-options",
                  s = 0,
                  h = i.length;
                h > s;
                s++
              ) {
                var f,
                  d = i[s],
                  l = d.getAttribute(n);
                try {
                  f = l && JSON.parse(l);
                } catch (c) {
                  u &&
                    u.error(
                      "Error parsing " +
                        n +
                        " on " +
                        d.nodeName.toLowerCase() +
                        (d.id ? "#" + d.id : "") +
                        ": " +
                        c
                    );
                  continue;
                }
                var y = new o(d, f);
                p && p.data(d, t, y);
              }
            }),
            p && p.bridget && p.bridget(t, o),
            o
          );
        }),
        (m.Item = y),
        m
      );
    }
    var a = t.document,
      u = t.console,
      p = t.jQuery,
      h = function () {},
      f = Object.prototype.toString,
      d =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                "object" == typeof t &&
                1 === t.nodeType &&
                "string" == typeof t.nodeName
              );
            },
      l = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "doc-ready/doc-ready",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "./item",
          ],
          s
        )
      : "object" == typeof exports
      ? (module.exports = s(
          require("eventie"),
          require("doc-ready"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("./item")
        ))
      : (t.Outlayer = s(
          t.eventie,
          t.docReady,
          t.EventEmitter,
          t.getSize,
          t.matchesSelector,
          t.Outlayer.Item
        ));
  })(window),
  (function (t) {
    function e(t) {
      function e() {
        t.Item.apply(this, arguments);
      }
      (e.prototype = new t.Item()),
        (e.prototype._create = function () {
          (this.id = this.layout.itemGUID++),
            t.Item.prototype._create.call(this),
            (this.sortData = {});
        }),
        (e.prototype.updateSortData = function () {
          if (!this.isIgnored) {
            (this.sortData.id = this.id),
              (this.sortData["original-order"] = this.id),
              (this.sortData.random = Math.random());
            var t = this.layout.options.getSortData,
              e = this.layout._sorters;
            for (var i in t) {
              var o = e[i];
              this.sortData[i] = o(this.element, this);
            }
          }
        });
      var i = e.prototype.destroy;
      return (
        (e.prototype.destroy = function () {
          i.apply(this, arguments), this.css({ display: "" });
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window),
  (function (t) {
    function e(t, e) {
      function i(t) {
        (this.isotope = t),
          t &&
            ((this.options = t.options[this.namespace]),
            (this.element = t.element),
            (this.items = t.filteredItems),
            (this.size = t.size));
      }
      return (
        (function () {
          function t(t) {
            return function () {
              return e.prototype[t].apply(this.isotope, arguments);
            };
          }
          for (
            var o = [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
              ],
              n = 0,
              r = o.length;
            r > n;
            n++
          ) {
            var s = o[n];
            i.prototype[s] = t(s);
          }
        })(),
        (i.prototype.needsVerticalResizeLayout = function () {
          var e = t(this.isotope.element),
            i = this.isotope.size && e;
          return i && e.innerHeight !== this.isotope.size.innerHeight;
        }),
        (i.prototype._getMeasurement = function () {
          this.isotope._getMeasurement.apply(this, arguments);
        }),
        (i.prototype.getColumnWidth = function () {
          this.getSegmentSize("column", "Width");
        }),
        (i.prototype.getRowHeight = function () {
          this.getSegmentSize("row", "Height");
        }),
        (i.prototype.getSegmentSize = function (t, e) {
          var i = t + e,
            o = "outer" + e;
          if ((this._getMeasurement(i, o), !this[i])) {
            var n = this.getFirstItemSize();
            this[i] = (n && n[o]) || this.isotope.size["inner" + e];
          }
        }),
        (i.prototype.getFirstItemSize = function () {
          var e = this.isotope.filteredItems[0];
          return e && e.element && t(e.element);
        }),
        (i.prototype.layout = function () {
          this.isotope.layout.apply(this.isotope, arguments);
        }),
        (i.prototype.getSize = function () {
          this.isotope.getSize(), (this.size = this.isotope.size);
        }),
        (i.modes = {}),
        (i.create = function (t, e) {
          function o() {
            i.apply(this, arguments);
          }
          return (
            (o.prototype = new i()),
            e && (o.options = e),
            (o.prototype.namespace = t),
            (i.modes[t] = o),
            o
          );
        }),
        i
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window),
  (function (t) {
    function e(t, e) {
      var o = t.create("masonry");
      return (
        (o.prototype._resetLayout = function () {
          this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
          var t = this.cols;
          for (this.colYs = []; t--; ) this.colYs.push(0);
          this.maxY = 0;
        }),
        (o.prototype.measureColumns = function () {
          if ((this.getContainerWidth(), !this.columnWidth)) {
            var t = this.items[0],
              i = t && t.element;
            this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
          }
          (this.columnWidth += this.gutter),
            (this.cols = Math.floor(
              (this.containerWidth + this.gutter) / this.columnWidth
            )),
            (this.cols = Math.max(this.cols, 1));
        }),
        (o.prototype.getContainerWidth = function () {
          var t = this.options.isFitWidth
              ? this.element.parentNode
              : this.element,
            i = e(t);
          this.containerWidth = i && i.innerWidth;
        }),
        (o.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth % this.columnWidth,
            o = e && 1 > e ? "round" : "ceil",
            n = Math[o](t.size.outerWidth / this.columnWidth);
          n = Math.min(n, this.cols);
          for (
            var r = this._getColGroup(n),
              s = Math.min.apply(Math, r),
              a = i(r, s),
              u = { x: this.columnWidth * a, y: s },
              p = s + t.size.outerHeight,
              h = this.cols + 1 - r.length,
              f = 0;
            h > f;
            f++
          )
            this.colYs[a + f] = p;
          return u;
        }),
        (o.prototype._getColGroup = function (t) {
          if (2 > t) return this.colYs;
          for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
            var n = this.colYs.slice(o, o + t);
            e[o] = Math.max.apply(Math, n);
          }
          return e;
        }),
        (o.prototype._manageStamp = function (t) {
          var i = e(t),
            o = this._getElementOffset(t),
            n = this.options.isOriginLeft ? o.left : o.right,
            r = n + i.outerWidth,
            s = Math.floor(n / this.columnWidth);
          s = Math.max(0, s);
          var a = Math.floor(r / this.columnWidth);
          (a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
          for (
            var u =
                (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight,
              p = s;
            a >= p;
            p++
          )
            this.colYs[p] = Math.max(u, this.colYs[p]);
        }),
        (o.prototype._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var t = { height: this.maxY };
          return (
            this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
          );
        }),
        (o.prototype._getContainerFitWidth = function () {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
          return (this.cols - t) * this.columnWidth - this.gutter;
        }),
        (o.prototype.needsResizeLayout = function () {
          var t = this.containerWidth;
          return this.getContainerWidth(), t !== this.containerWidth;
        }),
        o
      );
    }
    var i = Array.prototype.indexOf
      ? function (t, e) {
          return t.indexOf(e);
        }
      : function (t, e) {
          for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e) return i;
          }
          return -1;
        };
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t, i) {
      var o = t.create("masonry"),
        n = o.prototype._getElementOffset,
        r = o.prototype.layout,
        s = o.prototype._getMeasurement;
      e(o.prototype, i.prototype),
        (o.prototype._getElementOffset = n),
        (o.prototype.layout = r),
        (o.prototype._getMeasurement = s);
      var a = o.prototype.measureColumns;
      o.prototype.measureColumns = function () {
        (this.items = this.isotope.filteredItems), a.call(this);
      };
      var u = o.prototype._manageStamp;
      return (
        (o.prototype._manageStamp = function () {
          (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
            (this.options.isOriginTop = this.isotope.options.isOriginTop),
            u.apply(this, arguments);
        }),
        o
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          i
        )
      : "object" == typeof exports
      ? (module.exports = i(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : i(t.Isotope.LayoutMode, t.Masonry);
  })(window),
  (function (t) {
    function e(t) {
      var e = t.create("fitRows");
      return (
        (e.prototype._resetLayout = function () {
          (this.x = 0),
            (this.y = 0),
            (this.maxY = 0),
            this._getMeasurement("gutter", "outerWidth");
        }),
        (e.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
          0 !== this.x &&
            e + this.x > i &&
            ((this.x = 0), (this.y = this.maxY));
          var o = { x: this.x, y: this.y };
          return (
            (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
            (this.x += e),
            o
          );
        }),
        (e.prototype._getContainerSize = function () {
          return { height: this.maxY };
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window),
  (function (t) {
    function e(t) {
      var e = t.create("vertical", { horizontalAlignment: 0 });
      return (
        (e.prototype._resetLayout = function () {
          this.y = 0;
        }),
        (e.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e =
              (this.isotope.size.innerWidth - t.size.outerWidth) *
              this.options.horizontalAlignment,
            i = this.y;
          return (this.y += t.size.outerHeight), { x: e, y: i };
        }),
        (e.prototype._getContainerSize = function () {
          return { height: this.y };
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      return "[object Array]" === h.call(t);
    }
    function o(t) {
      var e = [];
      if (i(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
      else e.push(t);
      return e;
    }
    function n(t, e) {
      var i = f(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function r(t, i, r, u, h) {
      function f(t, e) {
        return function (i, o) {
          for (var n = 0, r = t.length; r > n; n++) {
            var s = t[n],
              a = i.sortData[s],
              u = o.sortData[s];
            if (a > u || u > a) {
              var p = void 0 !== e[s] ? e[s] : e,
                h = p ? 1 : -1;
              return (a > u ? 1 : -1) * h;
            }
          }
          return 0;
        };
      }
      var d = t.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
      (d.Item = u),
        (d.LayoutMode = h),
        (d.prototype._create = function () {
          (this.itemGUID = 0),
            (this._sorters = {}),
            this._getSorters(),
            t.prototype._create.call(this),
            (this.modes = {}),
            (this.filteredItems = this.items),
            (this.sortHistory = ["original-order"]);
          for (var e in h.modes) this._initLayoutMode(e);
        }),
        (d.prototype.reloadItems = function () {
          (this.itemGUID = 0), t.prototype.reloadItems.call(this);
        }),
        (d.prototype._itemize = function () {
          for (
            var e = t.prototype._itemize.apply(this, arguments),
              i = 0,
              o = e.length;
            o > i;
            i++
          ) {
            var n = e[i];
            n.id = this.itemGUID++;
          }
          return this._updateItemsSortData(e), e;
        }),
        (d.prototype._initLayoutMode = function (t) {
          var i = h.modes[t],
            o = this.options[t] || {};
          (this.options[t] = i.options ? e(i.options, o) : o),
            (this.modes[t] = new i(this));
        }),
        (d.prototype.layout = function () {
          return !this._isLayoutInited && this.options.isInitLayout
            ? (this.arrange(), void 0)
            : (this._layout(), void 0);
        }),
        (d.prototype._layout = function () {
          var t = this._getIsInstant();
          this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(this.filteredItems, t),
            (this._isLayoutInited = !0);
        }),
        (d.prototype.arrange = function (t) {
          this.option(t),
            this._getIsInstant(),
            (this.filteredItems = this._filter(this.items)),
            this._sort(),
            this._layout();
        }),
        (d.prototype._init = d.prototype.arrange),
        (d.prototype._getIsInstant = function () {
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          return (this._isInstant = t), t;
        }),
        (d.prototype._filter = function (t) {
          function e() {
            f.reveal(n), f.hide(r);
          }
          var i = this.options.filter;
          i = i || "*";
          for (
            var o = [],
              n = [],
              r = [],
              s = this._getFilterTest(i),
              a = 0,
              u = t.length;
            u > a;
            a++
          ) {
            var p = t[a];
            if (!p.isIgnored) {
              var h = s(p);
              h && o.push(p),
                h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p);
            }
          }
          var f = this;
          return this._isInstant ? this._noTransition(e) : e(), o;
        }),
        (d.prototype._getFilterTest = function (t) {
          return s && this.options.isJQueryFiltering
            ? function (e) {
                return s(e.element).is(t);
              }
            : "function" == typeof t
            ? function (e) {
                return t(e.element);
              }
            : function (e) {
                return r(e.element, t);
              };
        }),
        (d.prototype.updateSortData = function (t) {
          var e;
          t ? ((t = o(t)), (e = this.getItems(t))) : (e = this.items),
            this._getSorters(),
            this._updateItemsSortData(e);
        }),
        (d.prototype._getSorters = function () {
          var t = this.options.getSortData;
          for (var e in t) {
            var i = t[e];
            this._sorters[e] = l(i);
          }
        }),
        (d.prototype._updateItemsSortData = function (t) {
          for (var e = t && t.length, i = 0; e && e > i; i++) {
            var o = t[i];
            o.updateSortData();
          }
        });
      var l = (function () {
        function t(t) {
          if ("string" != typeof t) return t;
          var i = a(t).split(" "),
            o = i[0],
            n = o.match(/^\[(.+)\]$/),
            r = n && n[1],
            s = e(r, o),
            u = d.sortDataParsers[i[1]];
          return (t = u
            ? function (t) {
                return t && u(s(t));
              }
            : function (t) {
                return t && s(t);
              });
        }
        function e(t, e) {
          var i;
          return (i = t
            ? function (e) {
                return e.getAttribute(t);
              }
            : function (t) {
                var i = t.querySelector(e);
                return i && p(i);
              });
        }
        return t;
      })();
      (d.sortDataParsers = {
        parseInt: function (t) {
          return parseInt(t, 10);
        },
        parseFloat: function (t) {
          return parseFloat(t);
        },
      }),
        (d.prototype._sort = function () {
          var t = this.options.sortBy;
          if (t) {
            var e = [].concat.apply(t, this.sortHistory),
              i = f(e, this.options.sortAscending);
            this.filteredItems.sort(i),
              t !== this.sortHistory[0] && this.sortHistory.unshift(t);
          }
        }),
        (d.prototype._mode = function () {
          var t = this.options.layoutMode,
            e = this.modes[t];
          if (!e) throw Error("No layout mode: " + t);
          return (e.options = this.options[t]), e;
        }),
        (d.prototype._resetLayout = function () {
          t.prototype._resetLayout.call(this), this._mode()._resetLayout();
        }),
        (d.prototype._getItemLayoutPosition = function (t) {
          return this._mode()._getItemLayoutPosition(t);
        }),
        (d.prototype._manageStamp = function (t) {
          this._mode()._manageStamp(t);
        }),
        (d.prototype._getContainerSize = function () {
          return this._mode()._getContainerSize();
        }),
        (d.prototype.needsResizeLayout = function () {
          return this._mode().needsResizeLayout();
        }),
        (d.prototype.appended = function (t) {
          var e = this.addItems(t);
          if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i);
          }
        }),
        (d.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps();
            var o = this._filterRevealAdded(e);
            this.layoutItems(i),
              (this.filteredItems = o.concat(this.filteredItems));
          }
        }),
        (d.prototype._filterRevealAdded = function (t) {
          var e = this._noTransition(function () {
            return this._filter(t);
          });
          return this.layoutItems(e, !0), this.reveal(e), t;
        }),
        (d.prototype.insert = function (t) {
          var e = this.addItems(t);
          if (e.length) {
            var i,
              o,
              n = e.length;
            for (i = 0; n > i; i++)
              (o = e[i]), this.element.appendChild(o.element);
            var r = this._filter(e);
            for (
              this._noTransition(function () {
                this.hide(r);
              }),
                i = 0;
              n > i;
              i++
            )
              e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
            this.reveal(r);
          }
        });
      var c = d.prototype.remove;
      return (
        (d.prototype.remove = function (t) {
          t = o(t);
          var e = this.getItems(t);
          if ((c.call(this, t), e && e.length))
            for (var i = 0, r = e.length; r > i; i++) {
              var s = e[i];
              n(s, this.filteredItems);
            }
        }),
        (d.prototype.shuffle = function () {
          for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random();
          }
          (this.options.sortBy = "random"), this._sort(), this._layout();
        }),
        (d.prototype._noTransition = function (t) {
          var e = this.options.transitionDuration;
          this.options.transitionDuration = 0;
          var i = t.call(this);
          return (this.options.transitionDuration = e), i;
        }),
        (d.prototype.getFilteredItemElements = function () {
          for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
            t.push(this.filteredItems[e].element);
          return t;
        }),
        d
      );
    }
    var s = t.jQuery,
      a = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      u = document.documentElement,
      p = u.textContent
        ? function (t) {
            return t.textContent;
          }
        : function (t) {
            return t.innerText;
          },
      h = Object.prototype.toString,
      f = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          r
        )
      : "object" == typeof exports
      ? (module.exports = r(
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (t.Isotope = r(
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window);
(function ($) {
  "use strict";
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    var gdlr_touch_device = !0;
  } else {
    var gdlr_touch_device = !1;
  }
  $.extend({
    getUrlVars: function () {
      var vars = [],
        hash;
      var hashes = window.location.href
        .slice(window.location.href.indexOf("?") + 1)
        .split("&");
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split("=");
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function (name) {
      return $.getUrlVars()[name];
    },
  });
  function gdlr_set_item_outer_nav() {
    $(".blog-item-wrapper > .gdlr-nav-container").each(function () {
      var container = $(this).siblings(".blog-item-holder");
      var child = $(this).children();
      child.css({
        top: container.position().top,
        bottom: "auto",
        height: container.height() - 50,
      });
    });
    $(".portfolio-item-wrapper > .gdlr-nav-container").each(function () {
      var container = $(this).siblings(".portfolio-item-holder");
      var child = $(this).children();
      child.css({
        top: container.position().top,
        bottom: "auto",
        height: container.height() - 40,
      });
    });
  }
  $.fn.gdlr_flexslider = function () {
    if (typeof $.fn.hotelmaster_flexslider == "function") {
      $(this).each(function () {
        if ($(this).hasClass("htms-flexslider-on")) {
          return;
        }
        var flex_attr = {
          animation: "fade",
          animationLoop: !0,
          prevText: '<i class="icon-angle-left" ></i>',
          nextText: '<i class="icon-angle-right" ></i>',
          useCSS: !1,
        };
        if ($(this).attr("data-pausetime")) {
          flex_attr.slideshowSpeed = parseInt($(this).attr("data-pausetime"));
        }
        if ($(this).attr("data-slidespeed")) {
          flex_attr.animationSpeed = parseInt($(this).attr("data-slidespeed"));
        }
        if ($(this).attr("data-type") == "carousel") {
          flex_attr.move = 1;
          flex_attr.animation = "slide";
          if (
            $(this).closest(".gdlr-item-no-space, .gdlr-full-size-wrapper")
              .length > 0
          ) {
            flex_attr.itemWidth =
              $(this).width() / parseInt($(this).attr("data-columns"));
            flex_attr.itemMargin = 0;
          } else {
            flex_attr.itemWidth =
              ($(this).width() + 30) / parseInt($(this).attr("data-columns")) -
              30;
            flex_attr.itemMargin = 30;
          }
        } else {
          if ($(this).attr("data-effect")) {
            flex_attr.animation = $(this).attr("data-effect");
          }
        }
        if ($(this).attr("data-columns")) {
          flex_attr.minItems = parseInt($(this).attr("data-columns"));
          flex_attr.maxItems = parseInt($(this).attr("data-columns"));
        }
        if ($(this).attr("data-nav-container")) {
          var flex_parent = $(this)
            .parents("." + $(this).attr("data-nav-container"))
            .siblings(".gdlr-nav-container");
          if (
            flex_parent.find(".gdlr-flex-prev").length > 0 ||
            flex_parent.find(".gdlr-flex-next").length > 0
          ) {
            flex_attr.controlNav = !1;
            flex_attr.directionNav = !1;
            flex_attr.start = function (slider) {
              flex_parent.find(".gdlr-flex-next").click(function () {
                slider.flexAnimate(slider.getTarget("next"), !0);
              });
              flex_parent.find(".gdlr-flex-prev").click(function () {
                slider.flexAnimate(slider.getTarget("prev"), !0);
              });
              gdlr_set_item_outer_nav();
              $(window).resize(function () {
                gdlr_set_item_outer_nav();
              });
            };
          } else {
            flex_attr.controlNav = !1;
            flex_attr.controlsContainer = flex_parent.find(".nav-container");
          }
        }
        if ($(this).closest(".gdlr-single-room-thumbnail").length > 0) {
          flex_attr.manualControls = "#gdlr-flex-thumbnail-control li img";
        }
        $(this).hotelmaster_flexslider(flex_attr);
        $(this).addClass("htms-flexslider-on");
      });
    }
  };
  $.fn.gdlr_nivoslider = function () {
    if (typeof $.fn.nivoSlider == "function") {
      $(this).each(function () {
        var nivo_attr = {};
        if ($(this).attr("data-pausetime")) {
          nivo_attr.pauseTime = parseInt($(this).attr("data-pausetime"));
        }
        if ($(this).attr("data-slidespeed")) {
          nivo_attr.animSpeed = parseInt($(this).attr("data-slidespeed"));
        }
        if ($(this).attr("data-effect")) {
          nivo_attr.effect = $(this).attr("data-effect");
        }
        $(this).nivoSlider(nivo_attr);
      });
    }
  };
  $.fn.gdlr_isotope = function () {
    if (typeof $.fn.isotope == "function") {
      $(this).each(function () {
        var layout = $(this).attr("data-layout")
          ? $(this).attr("data-layout")
          : "fitRows";
        if (layout == "fitRows") return;
        var isotope_element = $(this);
        isotope_element.children(".clear").remove();
        isotope_element.isotope({ layoutMode: layout });
        $(window).resize(function () {
          isotope_element.isotope();
        });
      });
    }
  };
  $.fn.gdlr_fancybox = function () {
    if (typeof $.fn.fancybox == "function") {
      var fancybox_attr = {
        nextMethod: "resizeIn",
        nextSpeed: 250,
        prevMethod: !1,
        prevSpeed: 250,
        helpers: { media: {} },
      };
      if (typeof $.fancybox.helpers.thumbs == "object") {
        fancybox_attr.helpers.thumbs = { width: 50, height: 50 };
      }
      $(this).fancybox(fancybox_attr);
      $(this).on("click", function (e) {
        e.preventDefault();
      });
    }
  };
  $.fn.gdlr_fluid_video = function () {
    $(this)
      .find('iframe[src*="youtube"], iframe[src*="vimeo"]')
      .each(function () {
        if ($(this).closest(".ls-container, .master-slider").length <= 0) {
          if (
            ($(this).is("embed") && $(this).parent("object").length) ||
            $(this).parent(".fluid-width-video-wrapper").length
          ) {
            return;
          }
          if (!$(this).attr("id")) {
            $(this).attr(
              "id",
              "gdlr-video-" + Math.floor(Math.random() * 999999)
            );
          }
          var ratio = $(this).height() / $(this).width();
          $(this).removeAttr("height").removeAttr("width");
          try {
            $(this)
              .wrap('<div class="gdlr-fluid-video-wrapper"></div>')
              .parent()
              .css("padding-top", ratio * 100 + "%");
            $(this).attr("src", $(this).attr("src"));
          } catch (e) {}
        }
      });
  };
  $.fn.gdlr_pie_chart = function () {
    if (typeof $.fn.easyPieChart == "function") {
      $(this).each(function () {
        var gdlr_chart = $(this);
        $(this).easyPieChart({
          animate: 1200,
          lineWidth: gdlr_chart.attr("data-linewidth")
            ? parseInt(gdlr_chart.attr("data-linewidth"))
            : 8,
          size: gdlr_chart.attr("data-size")
            ? parseInt(gdlr_chart.attr("data-size"))
            : 155,
          barColor: gdlr_chart.attr("data-color")
            ? gdlr_chart.attr("data-color")
            : "#a9e16e",
          trackColor: gdlr_chart.attr("data-bg-color")
            ? gdlr_chart.attr("data-bg-color")
            : "#f2f2f2",
          backgroundColor: gdlr_chart.attr("data-background"),
          scaleColor: !1,
          lineCap: "square",
        });
        function limit_gdlr_chart_size() {
          if (
            gdlr_chart.parent().width() < parseInt(gdlr_chart.attr("data-size"))
          ) {
            var max_width = gdlr_chart.parent().width() + "px";
            gdlr_chart.css({ "max-width": max_width, "max-height": max_width });
          }
        }
        limit_gdlr_chart_size();
        $(window).resize(function () {
          limit_gdlr_chart_size();
        });
      });
    }
  };
  $(document).ready(function () {
    $(".gdlr-room-thumbnail > a, .gdlr-room-thumbnail-wrap").hover(
      function () {
        $(this).find("img").transition({ scale: 1.1, duration: 200 });
      },
      function () {
        $(this).find("img").transition({ scale: 1, duration: 200 });
      }
    );
    $(".gdlr-modern-room-new .gdlr-room-thumbnail-wrap").hover(
      function () {
        var overlay_item = $(this).children(".gdlr-room-thumbnail-overlay");
        var top_pos = overlay_item.outerHeight();
        overlay_item.css({ top: "auto" });
        top_pos -= overlay_item.outerHeight();
        overlay_item.css({ top: 0 });
        overlay_item.animate({ top: top_pos }, { duration: 200, queue: !1 });
      },
      function () {
        $(this)
          .children(".gdlr-room-thumbnail-overlay")
          .animate({ top: 0 }, { duration: 200, queue: !1 });
      }
    );
    $("body").gdlr_fluid_video();
    $(".gdlr-top-woocommerce-wrapper").hover(
      function () {
        $(this).children(".gdlr-top-woocommerce").fadeIn(200);
      },
      function () {
        $(this).children(".gdlr-top-woocommerce").fadeOut(200);
      }
    );
    $(".gdlr-accordion-item").each(function () {
      var multiple_tab = $(this).hasClass("gdlr-multiple-tab");
      $(this)
        .children(".accordion-tab")
        .children(".accordion-title")
        .click(function () {
          var current_tab = $(this).parent();
          if (current_tab.hasClass("active")) {
            current_tab.removeClass("pre-active");
            $(this)
              .children("i")
              .removeClass("icon-minus")
              .addClass("icon-plus");
            $(this)
              .siblings(".accordion-content")
              .slideUp(function () {
                current_tab.removeClass("active");
              });
          } else {
            current_tab.addClass("pre-active");
            $(this)
              .children("i")
              .removeClass("icon-plus")
              .addClass("icon-minus");
            $(this)
              .siblings(".accordion-content")
              .slideDown(function () {
                current_tab.addClass("active");
              });
          }
          if (!multiple_tab) {
            current_tab.siblings().removeClass("pre-active");
            current_tab
              .siblings()
              .children(".accordion-title")
              .children("i")
              .removeClass("icon-minus")
              .addClass("icon-plus");
            current_tab
              .siblings()
              .children(".accordion-content")
              .slideUp(function () {
                $(this).parent().removeClass("active");
              });
          }
        });
    });
    $(".tab-title-wrapper")
      .children()
      .click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var selected_index = $(this).index() + 1;
        $(this)
          .parent()
          .siblings(".tab-content-wrapper")
          .children(":nth-child(" + selected_index + ")")
          .each(function () {
            $(this).siblings().removeClass("active").hide();
            $(this).fadeIn(function () {
              $(this).addClass("active");
            });
          });
      });
    var inital_tab = $.getUrlVar("tab");
    if (inital_tab) {
      $("#" + inital_tab.replace(",", ", #")).each(function () {
        $(this).trigger("click");
      });
    }
    $(".gdlr-code-item .gdlr-code-title").click(function () {
      var parent = $(this).parent();
      if (parent.hasClass("active")) {
        $(this).children("i").removeClass("icon-minus").addClass("icon-plus");
        $(this)
          .siblings(".gdlr-code-content")
          .slideUp(function () {
            parent.removeClass("active");
          });
      } else {
        $(this).children("i").removeClass("icon-plus").addClass("icon-minus");
        $(this)
          .siblings(".gdlr-code-content")
          .slideDown(function () {
            parent.addClass("active");
          });
      }
    });
    $(".gdlr-parallax-wrapper").each(function () {
      if ($(this).hasClass("gdlr-background-image")) {
        var parallax_section = $(this);
        var parallax_speed = parseFloat(parallax_section.attr("data-bgspeed"));
        if (parallax_speed == 0 || gdlr_touch_device) return;
        if (parallax_speed == -1) {
          parallax_section.css("background-attachment", "fixed");
          parallax_section.css("background-position", "center center");
          return;
        }
        $(window).scroll(function () {
          if (
            $(window).scrollTop() + $(window).height() >
              parallax_section.offset().top &&
            $(window).scrollTop() <
              parallax_section.offset().top + parallax_section.outerHeight()
          ) {
            var scroll_pos = 0;
            if ($(window).height() > parallax_section.offset().top) {
              scroll_pos = $(window).scrollTop();
            } else {
              scroll_pos =
                $(window).scrollTop() +
                $(window).height() -
                parallax_section.offset().top;
            }
            parallax_section.css(
              "background-position",
              "center " + -scroll_pos * parallax_speed + "px"
            );
          }
        });
      } else if ($(this).hasClass("gdlr-background-video")) {
        if (typeof $.fn.mb_YTPlayer == "function") {
          $(this).children(".gdlr-bg-player").mb_YTPlayer();
        }
      } else {
        return;
      }
    });
    if (typeof $.fn.superfish == "function") {
      $("#gdlr-main-navigation .sf-mega > ul").each(function () {
        $(this)
          .children("li")
          .each(function () {
            var current_item = $(this);
            current_item.replaceWith(
              $("<div />")
                .addClass("sf-mega-section")
                .addClass(current_item.attr("data-column"))
                .attr("data-size", current_item.attr("data-size"))
                .html(
                  $("<div />")
                    .addClass("sf-mega-section-inner")
                    .addClass(current_item.attr("class"))
                    .attr("id", current_item.attr("id"))
                    .html(current_item.html())
                )
            );
          });
        $(this).replaceWith(this.innerHTML);
      });
      $("#gdlr-main-navigation .sf-mega").each(function () {
        var sf_mega = $(this);
        $(this).show();
        var row = 0;
        var column = 0;
        var max_height = 0;
        sf_mega.children(".sf-mega-section").each(function () {
          if (column % 60 == 0) {
            if (row != 0) {
              sf_mega
                .children('[data-row="' + row + '"]')
                .children(".sf-mega-section-inner")
                .height(max_height - 50);
              max_height = 0;
            }
            row++;
            $(this).addClass("first-column");
          }
          $(this).attr("data-row", row);
          column += eval("60*" + $(this).attr("data-size"));
          if ($(this).height() > max_height) {
            max_height = $(this).height();
          }
        });
        sf_mega
          .children('[data-row="' + row + '"]')
          .children(".sf-mega-section-inner")
          .height(max_height - 50);
      });
      $("#gdlr-main-navigation").superfish({ speed: "fast" });
    }
    if (typeof $.fn.dlmenu == "function") {
      $("#gdlr-responsive-navigation").each(function () {
        $(this)
          .find(".dl-submenu")
          .each(function () {
            if (
              $(this).siblings("a").attr("href") &&
              $(this).siblings("a").attr("href") != "#"
            ) {
              var parent_nav = $(
                '<li class="menu-item gdlr-parent-menu"></li>'
              );
              parent_nav.append($(this).siblings("a").clone());
              $(this).prepend(parent_nav);
            }
          });
        $(this).dlmenu();
      });
    }
    $(".gdlr-gallery-thumbnail").each(function () {
      var thumbnail_container = $(this).children(
        ".gdlr-gallery-thumbnail-container"
      );
      $(this)
        .find(".gallery-item")
        .click(function () {
          var selected_slide = thumbnail_container.children(
            '[data-id="' + $(this).attr("data-id") + '"]'
          );
          if (selected_slide.css("display") == "block") return !1;
          var image_width = selected_slide.children("img").attr("width");
          var image_ratio =
            selected_slide.children("img").attr("height") / image_width;
          var temp_height =
            image_ratio * Math.min(thumbnail_container.width(), image_width);
          thumbnail_container.animate({ height: temp_height });
          selected_slide.fadeIn().siblings().hide();
          return !1;
        });
      $(window).resize(function () {
        thumbnail_container.css("height", "auto");
      });
    });
    if (!$("body").is(".elementor-page") || $("body").is(".single-booking")) {
      $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]')
        .not('[data-rel="fancybox"], [href*="pinterest"]')
        .attr("data-rel", "fancybox");
      $('[data-rel="fancybox"]').gdlr_fancybox();
      if (typeof $.fn.fancybox == "function") {
        $(".content-wrapper").on("click", "[data-fc-gallery]", function () {
          $.fancybox.open($(this).data("fc-gallery"));
          return !1;
        });
      }
    }
    $(".gdlr-image-link-shortcode").hover(
      function () {
        $(this).find(".gdlr-image-link-overlay").animate({ opacity: 0.8 }, 150);
        $(this).find(".gdlr-image-link-icon").animate({ opacity: 1 }, 150);
      },
      function () {
        $(this).find(".gdlr-image-link-overlay").animate({ opacity: 0 }, 150);
        $(this).find(".gdlr-image-link-icon").animate({ opacity: 0 }, 150);
      }
    );
    $(".gdlr-personnel-item.round-style .personnel-item").each(function () {
      var current_item = $(this);
      function gdlr_set_round_personnel_height() {
        current_item.find(".personnel-item-inner").each(function () {
          $(this).css("margin-top", -($(this).height() / 2));
        });
      }
      gdlr_set_round_personnel_height();
      $(window).resize(function () {
        gdlr_set_round_personnel_height();
      });
    });
    $(".gdlr-personnel-item.round-style .personnel-item").hover(
      function () {
        $(this).find(".personnel-author-image").animate({ opacity: 0.05 }, 200);
        $(this).find(".personnel-item-inner").animate({ opacity: 1 }, 200);
      },
      function () {
        $(this).find(".personnel-author-image").animate({ opacity: 1 }, 200);
        $(this).find(".personnel-item-inner").animate({ opacity: 0 }, 200);
      }
    );
    $(".gdlr-price-table-item").each(function () {
      var price_table = $(this);
      function set_price_table_height() {
        var max_height = 0;
        var price_content = price_table.find(".price-content");
        price_content.css("height", "auto");
        price_content.each(function () {
          if (max_height < $(this).height()) {
            max_height = $(this).height();
          }
        });
        price_content.css("height", max_height);
      }
      set_price_table_height();
      $(window).resize(function () {
        set_price_table_height();
      });
    });
    $("form").submit(function () {
      var has_default = !1;
      $(this)
        .find("input[data-default]")
        .each(function () {
          if ($(this).attr("aria-required") != "true") {
            if ($(this).val() == $(this).attr("data-default")) $(this).val("");
          } else {
            if ($(this).val() == $(this).attr("data-default")) has_default = !0;
          }
        });
      if (has_default) return !1;
    });
    $("#gdlr-menu-search-button").click(function () {
      $(this)
        .siblings(".gdlr-menu-search-wrap")
        .children("#gdlr-menu-search")
        .slideToggle(200);
    });
    $(
      ".search-text input[data-default], .gdlr-comments-area input[data-default]"
    ).each(function () {
      var default_value = $(this).attr("data-default");
      $(this).val(default_value);
      $(this)
        .on("blur", function () {
          if ($(this).val() == "") {
            $(this).val(default_value);
          }
        })
        .on("focus", function () {
          if ($(this).val() == default_value) {
            $(this).val("");
          }
        });
    });
    if (window.location.hash) {
      $("html, body").animate(
        { scrollTop: $(window.location.hash).offset().top - 68 },
        500
      );
    }
    $(
      '.gdlr-navigation a[href*="#"], .gdlr-responsive-navigation a[href*="#"]'
    ).click(function () {
      if ($(this).attr("href").length > 1) {
        var item_id = $(this.hash);
        if ($("body").hasClass("home")) {
          if (item_id.length > 0) {
            $("html, body").animate(
              { scrollTop: item_id.offset().top - 68 },
              500
            );
            return !1;
          }
        } else {
          window.location.replace(
            $(".body-wrapper").attr("data-home") + "/" + this.hash
          );
        }
      }
    });
    if (!gdlr_touch_device) {
      $(".content-wrapper img").each(function () {
        if (
          $(this).closest(
            ".gdlr-ux, .ls-wp-container, .product, .flexslider, .nivoSlider"
          ).length
        )
          return;
        var ux_item = $(this);
        if (ux_item.offset().top > $(window).scrollTop() + $(window).height()) {
          ux_item.css({ opacity: 0 });
        } else {
          return;
        }
        $(window).scroll(function () {
          if (
            $(window).scrollTop() + $(window).height() >
            ux_item.offset().top + 100
          ) {
            ux_item.animate({ opacity: 1 }, 1200);
          }
        });
      });
      $(".gdlr-ux").each(function () {
        var ux_item = $(this);
        if (
          ux_item.hasClass("gdlr-chart") ||
          ux_item.hasClass("gdlr-skill-bar")
        ) {
          if (
            ux_item.offset().top <
            $(window).scrollTop() + $(window).height()
          ) {
            if (ux_item.hasClass("gdlr-chart")) {
              ux_item.gdlr_pie_chart();
            } else if (ux_item.hasClass("gdlr-skill-bar")) {
              ux_item.children(".gdlr-skill-bar-progress").each(function () {
                if ($(this).attr("data-percent")) {
                  $(this).animate(
                    { width: $(this).attr("data-percent") + "%" },
                    1200,
                    "easeOutQuart"
                  );
                }
              });
            }
            return;
          }
        } else if (
          ux_item.offset().top >
          $(window).scrollTop() + $(window).height()
        ) {
          ux_item.css({ opacity: 0, "padding-top": 20, "margin-bottom": -20 });
        } else {
          return;
        }
        $(window).scroll(function () {
          if (
            $(window).scrollTop() + $(window).height() >
            ux_item.offset().top + 100
          ) {
            if (ux_item.hasClass("gdlr-chart")) {
              ux_item.gdlr_pie_chart();
            } else if (ux_item.hasClass("gdlr-skill-bar")) {
              ux_item.children(".gdlr-skill-bar-progress").each(function () {
                if ($(this).attr("data-percent")) {
                  $(this).animate(
                    { width: $(this).attr("data-percent") + "%" },
                    1200,
                    "easeOutQuart"
                  );
                }
              });
            } else {
              ux_item.animate(
                { opacity: 1, "padding-top": 0, "margin-bottom": 0 },
                1200
              );
            }
          }
        });
      });
    } else {
      $(".gdlr-chart").gdlr_pie_chart();
      $(".gdlr-skill-bar-progress").each(function () {
        if ($(this).attr("data-percent")) {
          $(this).animate(
            { width: $(this).attr("data-percent") + "%" },
            1200,
            "easeOutQuart"
          );
        }
      });
    }
    $(".nivoSlider").gdlr_nivoslider();
    $(".flexslider").gdlr_flexslider();
  });
  $(window).load(function () {
    $(".gdlr-isotope").gdlr_isotope();
    if (!gdlr_touch_device) {
      var slide_nav = $("#gdlr-navigation-gimmick");
      var current_pos = 0;
      var current_menu_width = 0;
      var current_menu = $(
        "#gdlr-main-navigation > ul > li.current-menu-item, #gdlr-main-navigation > ul > li.current-menu-ancestor, #gdlr-main-navigation > ul > li.current_page_item, #gdlr-main-navigation > ul > li.current_page_ancestor"
      );
      if (!current_menu.length) {
        current_menu = $("#gdlr-main-navigation > ul > li:first-child");
      }
      slide_nav.on("gdlr-init-nav-gimmick", function () {
        current_menu.each(function () {
          var top_pos = $(this).position().top + 28;
          var padding = parseInt($(this).children("a").css("padding-left"));
          current_pos = $(this).position().left + padding;
          padding += parseInt($(this).children("a").css("padding-right"));
          current_menu_width = $(this).width() - padding;
          slide_nav.css({
            width: current_menu_width,
            left: current_pos,
            top: top_pos,
            display: "block",
          });
        });
      });
      slide_nav.trigger("gdlr-init-nav-gimmick");
      $(window).resize(function () {
        $(
          "#gdlr-main-navigation > ul > li.current-menu-item, #gdlr-main-navigation > ul > li.current-menu-ancestor, #gdlr-main-navigation > ul > li.current_page_item, #gdlr-main-navigation > ul > li.current_page_ancestor"
        ).each(function () {
          var top_pos = $(this).position().top + 28;
          var padding = parseInt($(this).children("a").css("padding-left"));
          current_pos = $(this).position().left + padding;
          padding += parseInt($(this).children("a").css("padding-right"));
          current_menu_width = $(this).width() - padding;
          slide_nav.css({
            width: current_menu_width,
            left: current_pos,
            top: top_pos,
          });
        });
      });
      $("#gdlr-main-navigation > ul > li").hover(
        function () {
          var padding_left = parseInt(
            $(this).children("a").css("padding-left")
          );
          var padding_right = parseInt(
            $(this).children("a").css("padding-right")
          );
          slide_nav.animate(
            {
              width: jQuery(this).width() - (padding_left + padding_right),
              left: jQuery(this).position().left + padding_left,
            },
            { queue: !1, easing: "easeOutQuad", duration: 250 }
          );
        },
        function () {
          slide_nav.animate(
            { width: current_menu_width, left: current_pos },
            { queue: !1, easing: "easeOutQuad", duration: 250 }
          );
        }
      );
    }
    $(".body-wrapper.float-menu").each(function () {
      var sub_area = $("#gdlr-header-substitute");
      var header_wrapper = sub_area.siblings(".gdlr-header-wrapper");
      var header_area = header_wrapper.children(".gdlr-header-inner");
      var header_style_1 = $("body").hasClass("header-style-1");
      var logo = header_area.find(".gdlr-logo");
      var logo_img = header_area.find(".gdlr-logo img");
      var navigation = header_area.find(".gdlr-navigation-wrapper");
      var navigation_gimmick = $("#gdlr-navigation-gimmick");
      var original = {
        logo_top: logo.css("margin-top"),
        logo_bottom: logo.css("margin-bottom"),
        nav_top: navigation.css("margin-top"),
      };
      $(window).scroll(function () {
        if (
          header_area.hasClass("gdlr-fixed-header") &&
          ($(this).width() < 959 ||
            $(this).scrollTop() <= header_wrapper.height())
        ) {
          if (logo_img.attr("data-trans")) {
            logo_img.attr("src", logo_img.attr("data-trans"));
          }
          var header_clone = header_area.clone(!0);
          header_clone.appendTo($("body")).animate(
            { opacity: 0 },
            {
              duration: 300,
              queue: !1,
              complete: function () {
                $(this).remove();
              },
            }
          );
          header_wrapper.height("auto");
          header_area
            .appendTo(header_wrapper)
            .removeClass("gdlr-fixed-header")
            .css({ opacity: 1 });
          if (header_style_1) {
            logo.css({
              "margin-top": original.logo_top,
              "margin-bottom": original.logo_bottom,
            });
            logo_img.css({ width: "100%" });
          } else {
            logo.css({ display: "block" });
          }
          navigation.css({ "margin-top": original.nav_top });
          navigation_gimmick.trigger("gdlr-init-nav-gimmick");
        } else if (
          !header_area.hasClass("gdlr-fixed-header") &&
          $(this).width() > 959 &&
          $(this).scrollTop() > header_wrapper.height()
        ) {
          if (logo_img.attr("data-normal")) {
            logo_img.attr("data-trans", logo_img.attr("src"));
            logo_img.attr("src", logo_img.attr("data-normal"));
          }
          header_wrapper.height(header_wrapper.height());
          header_area
            .appendTo($("body"))
            .addClass("gdlr-fixed-header")
            .css({ opacity: 0 })
            .animate({ opacity: 1 }, { duration: 300, queue: !1 });
          navigation.css({ "margin-top": "36px" });
          navigation_gimmick.trigger("gdlr-init-nav-gimmick");
          if (header_style_1) {
            logo.css({ "margin-top": "20px", "margin-bottom": "23px" });
            logo_img.css({ width: "80%" });
          } else {
            logo.css({ display: "none" });
          }
        }
      });
    });
    $(window).trigger("resize");
    $(window).trigger("scroll");
  });
})(jQuery);
var wpgmp_local = {
  all_location: "All",
  show_locations: "Show Locations",
  sort_by: "Sort by",
  wpgmp_not_working: "Not working...",
  select_category: "Select Category",
  place_icon_url:
    "https://demo.goodlayers.com/hotelmaster/hostel/wp-content/plugins/wp-google-map-plugin/assets/images/icons/",
};
(function ($, window, document, undefined) {
  "use strict";
  function GoogleMaps(element, map_data) {
    var options;
    this.element = element;
    this.map_data = $.extend({}, {}, map_data);
    options = this.map_data.map_options;
    this.settings = $.extend(
      {
        zoom: "5",
        map_type_id: "ROADMAP",
        scroll_wheel: !0,
        map_visual_refresh: !1,
        full_screen_control: !1,
        full_screen_control_position: "BOTTOM_RIGHT",
        zoom_control: !0,
        zoom_control_style: "SMALL",
        zoom_control_position: "TOP_LEFT",
        map_type_control: !0,
        map_type_control_style: "HORIZONTAL_BAR",
        map_type_control_position: "RIGHT_TOP",
        scale_control: !0,
        street_view_control: !0,
        street_view_control_position: "TOP_LEFT",
        overview_map_control: !0,
        center_lat: "40.6153983",
        center_lng: "-74.2535216",
        draggable: !0,
      },
      {},
      options
    );
    this.container = $("div[rel='" + $(this.element).attr("id") + "']");
    var suppress_markers = !1;
    if (this.map_data.map_tabs && this.map_data.map_tabs.direction_tab) {
      suppress_markers = this.map_data.map_tabs.direction_tab.suppress_markers;
    }
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: suppress_markers,
    });
    this.drawingmanager = {};
    this.geocoder = new google.maps.Geocoder();
    this.places = [];
    this.show_places = [];
    this.categories = {};
    this.tabs = [];
    this.all_shapes = [];
    this.wpgmp_polylines = [];
    this.wpgmp_polygons = [];
    this.wpgmp_circles = [];
    this.wpgmp_shape_events = [];
    this.wpgmp_rectangles = [];
    this.per_page_value = 0;
    this.current_amenities = [];
    this.route_directions = [];
    this.search_area = "";
    this.markerClusterer = null;
    this.infowindow_marker = new google.maps.InfoWindow();
    this.init();
  }
  GoogleMaps.prototype = {
    init: function () {
      var map_obj = this;
      var center = new google.maps.LatLng(
        map_obj.settings.center_lat,
        map_obj.settings.center_lng
      );
      map_obj.map = new google.maps.Map(map_obj.element, {
        zoom: parseInt(map_obj.settings.zoom),
        center: center,
        disableDoubleClickZoom: map_obj.settings.scroll_wheel != "false",
        scrollwheel: map_obj.settings.scroll_wheel,
        zoomControl: map_obj.settings.zoom_control === !0,
        fullscreenControl: map_obj.settings.full_screen_control === !0,
        fullscreenControlOptions: {
          position: eval(
            "google.maps.ControlPosition." +
              map_obj.settings.full_screen_control_position
          ),
        },
        zoomControlOptions: {
          style: eval(
            "google.maps.ZoomControlStyle." +
              map_obj.settings.zoom_control_style
          ),
          position: eval(
            "google.maps.ControlPosition." +
              map_obj.settings.zoom_control_position
          ),
        },
        mapTypeControl: map_obj.settings.map_type_control == !0,
        mapTypeControlOptions: {
          style: eval(
            "google.maps.MapTypeControlStyle." +
              map_obj.settings.map_type_control_style
          ),
          position: eval(
            "google.maps.ControlPosition." +
              map_obj.settings.map_type_control_position
          ),
        },
        scaleControl: map_obj.settings.scale_control == !0,
        streetViewControl: map_obj.settings.street_view_control == !0,
        streetViewControlOptions: {
          position: eval(
            "google.maps.ControlPosition." +
              map_obj.settings.street_view_control_position
          ),
        },
        overviewMapControl: map_obj.settings.overview_map_control == !0,
        overviewMapControlOptions: {
          opened: map_obj.settings.overview_map_control,
        },
        draggable: map_obj.settings.draggable,
        mapTypeId: eval(
          "google.maps.MapTypeId." + map_obj.settings.map_type_id
        ),
        styles: eval(map_obj.map_data.styles),
      });
      map_obj.map_loaded();
      map_obj.responsive_map();
      map_obj.create_markers();
      map_obj.display_markers();
      if (map_obj.map_data.street_view) {
        map_obj.set_streetview(center);
      }
      if (map_obj.map_data.bicyle_layer) {
        map_obj.set_bicyle_layer();
      }
      if (map_obj.map_data.traffic_layer) {
        map_obj.set_traffic_layer();
      }
      if (map_obj.map_data.transit_layer) {
        map_obj.set_transit_layer();
      }
      if (map_obj.map_data.panoramio_layer) {
        map_obj.set_panoramic_layer();
      }
      if (map_obj.settings.display_45_imagery == "45") {
        map_obj.set_45_imagery();
      }
      if (typeof map_obj.map_data.map_visual_refresh === !0) {
        map_obj.set_visual_refresh();
      }
      if (map_obj.settings.search_control == !0) {
        map_obj.show_search_control();
      }
      if (map_obj.map_data.listing) {
        $(map_obj.container).on(
          "click",
          ".categories_filter_reset_btn",
          function () {
            $(map_obj.container)
              .find(".wpgmp_filter_wrappers select")
              .each(function () {
                $(this).find("option:first").attr("selected", "selected");
              });
            $(".wpgmp_search_input").val("");
            map_obj.update_filters();
          }
        );
        $(map_obj.container).on(
          "change",
          '[data-filter="dropdown"]',
          function () {
            map_obj.update_filters();
          }
        );
        $(map_obj.container).on(
          "click",
          '[data-filter="checklist"]',
          function () {
            map_obj.update_filters();
          }
        );
        $(map_obj.container).on("click", '[data-filter="list"]', function () {
          if ($(this).hasClass("fc_selected")) {
            $(this).removeClass("fc_selected");
          } else {
            $(this).addClass("fc_selected");
          }
          map_obj.update_filters();
        });
        map_obj.display_filters_listing();
        $.each(map_obj.map_data.listing.filters, function (key, filter) {
          $(map_obj.container)
            .find('select[name="' + filter + '"]')
            .on("change", function () {
              map_obj.update_filters();
            });
        });
        $(map_obj.container)
          .find('[data-name="radius"]')
          .on("change", function () {
            var search_data = $(map_obj.container)
              .find('[data-input="wpgmp-search-text"]')
              .val();
            if (search_data.length >= 2 && $(this).val() != "") {
              map_obj.geocoder.geocode(
                { address: search_data },
                function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    map_obj.search_area = results[0].geometry.location;
                    map_obj.update_filters();
                  }
                }
              );
            } else {
              map_obj.search_area = "";
              map_obj.update_filters();
            }
          });
        $(map_obj.container)
          .find('[data-filter="map-perpage-location-sorting"]')
          .on("change", function () {
            map_obj.per_page_value = $(this).val();
            map_obj.update_filters();
          });
        $(map_obj.container)
          .find('[data-input="wpgmp-search-text"]')
          .on("keyup", function () {
            var search_data = $(this).val();
            $(map_obj.container).find('[data-filter="map-radius"]').val("");
            map_obj.search_area = "";
            if (
              search_data.length >= 2 &&
              map_obj.map_data.listing.apply_default_radius == !0
            ) {
              if (search_data.length >= 2) {
                map_obj.geocoder.geocode(
                  { address: search_data },
                  function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                      map_obj.search_area = results[0].geometry.location;
                      map_obj.update_filters();
                    }
                  }
                );
              }
            } else {
              map_obj.update_filters();
            }
          });
      }
      $("body").on("click", ".wpgmp_marker_link", function () {
        map_obj.open_infowindow($(this).data("marker"));
        $("html, body").animate(
          { scrollTop: $(map_obj.container).offset().top - 150 },
          500
        );
      });
      $(map_obj.container).on("click", "a[data-marker]", function () {
        map_obj.open_infowindow($(this).data("marker"));
        $("html, body").animate(
          { scrollTop: $(map_obj.container).offset().top - 150 },
          500
        );
      });
      $(map_obj.container).on("click", "a[data-marker]", function () {
        map_obj.open_infowindow($(this).data("marker"));
      });
      map_obj.google_auto_suggest($(".wpgmp_auto_suggest"));
    },
    createMarker: function (place) {
      var map_obj = this;
      var map = map_obj.map;
      var placeLoc = place.geometry.location;
      var image = {
        url: place.icon,
        size: new google.maps.Size(25, 25),
        scaledSize: new google.maps.Size(25, 25),
      };
      place.marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: image,
      });
      google.maps.event.addListener(place.marker, "click", function () {
        if (map_obj.settings.map_infowindow_customisations === !0)
          map_obj.amenity_infowindow.setContent(
            '<div class="wpgmp_infowindow"><div class="wpgmp_iw_content">' +
              place.name +
              "</div></div>"
          );
        else map_obj.amenity_infowindow.setContent(place.name);
        map_obj.amenity_infowindow.open(map, this);
      });
      map_obj.current_amenities.push(place);
    },
    marker_bind: function (marker) {
      var map_obj = this;
      google.maps.event.addListener(marker, "drag", function () {
        var position = marker.getPosition();
        map_obj.geocoder.geocode(
          { latLng: position },
          function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              $("#googlemap_address").val(results[0].formatted_address);
              $(".google_city").val(
                map_obj.wpgmp_finddata(
                  results[0],
                  "administrative_area_level_3"
                ) || map_obj.wpgmp_finddata(results[0], "locality")
              );
              $(".google_state").val(
                map_obj.wpgmp_finddata(
                  results[0],
                  "administrative_area_level_1"
                )
              );
              $(".google_country").val(
                map_obj.wpgmp_finddata(results[0], "country")
              );
              if (results[0].address_components) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                  for (
                    var j = 0;
                    j < results[0].address_components[i].types.length;
                    j++
                  ) {
                    if (
                      results[0].address_components[i].types[j] == "postal_code"
                    ) {
                      wpgmp_zip_code =
                        results[0].address_components[i].long_name;
                      $(".google_postal_code").val(wpgmp_zip_code);
                    }
                  }
                }
              }
            }
          }
        );
        $(".google_latitude").val(position.lat());
        $(".google_longitude").val(position.lng());
      });
    },
    google_auto_suggest: function (obj) {
      var map_obj = this;
      obj.each(function () {
        var current_input = this;
        var autocomplete = new google.maps.places.Autocomplete(this);
        autocomplete.bindTo("bounds", map_obj.map);
        if ($(this).attr("name") == "location_address") {
          var infowindow = map_obj.infowindow_marker;
          var marker = new google.maps.Marker({
            map: map_obj.map,
            draggable: !0,
            anchorPoint: new google.maps.Point(0, -29),
          });
          map_obj.marker_bind(marker);
          google.maps.event.addListener(
            autocomplete,
            "place_changed",
            function () {
              var place = autocomplete.getPlace();
              if (!place.geometry) {
                return;
              }
              if (place.geometry.viewport) {
                map_obj.map.fitBounds(place.geometry.viewport);
              } else {
                map_obj.map.setCenter(place.geometry.location);
                map_obj.map.setZoom(17);
              }
              $(".google_latitude").val(place.geometry.location.lat());
              $(".google_longitude").val(place.geometry.location.lng());
              $(".google_city").val(
                map_obj.wpgmp_finddata(place, "administrative_area_level_3") ||
                  map_obj.wpgmp_finddata(place, "locality")
              );
              $(".google_state").val(
                map_obj.wpgmp_finddata(place, "administrative_area_level_1")
              );
              $(".google_country").val(
                map_obj.wpgmp_finddata(place, "country")
              );
              if (place.address_components) {
                for (var i = 0; i < place.address_components.length; i++) {
                  for (
                    var j = 0;
                    j < place.address_components[i].types.length;
                    j++
                  ) {
                    if (place.address_components[i].types[j] == "postal_code") {
                      wpgmp_zip_code = place.address_components[i].long_name;
                      $(".google_postal_code").val(wpgmp_zip_code);
                    }
                  }
                }
              }
              marker.setPosition(place.geometry.location);
              marker.setVisible(!0);
            }
          );
        } else {
          google.maps.event.addListener(
            autocomplete,
            "place_changed",
            function () {
              var place = autocomplete.getPlace();
              if (!place.geometry) {
                return;
              }
              $().val(place.geometry.location.lat());
              $(current_input).data("longitude", place.geometry.location.lng());
              $(current_input).data("latitude", place.geometry.location.lat());
            }
          );
        }
      });
    },
    wpgmp_finddata: function (result, type) {
      var component_name = "";
      for (var i = 0; i < result.address_components.length; ++i) {
        var component = result.address_components[i];
        $.each(component.types, function (index, value) {
          if (value == type) {
            component_name = component.long_name;
          }
        });
      }
      return component_name;
    },
    open_infowindow: function (current_place) {
      var map_obj = this;
      $.each(this.map_data.places, function (key, place) {
        if (
          parseInt(place.id) == parseInt(current_place) &&
          place.marker.visible === !0
        ) {
          map_obj.openInfoWindow(place);
        }
      });
    },
    place_info: function (place_id) {
      var place_obj;
      $.each(this.places, function (index, place) {
        if (parseInt(place.id) == parseInt(place_id)) {
          place_obj = place;
        }
      });
      return place_obj;
    },
    event_listener: function (obj, type, func) {
      google.maps.event.addListener(obj, type, func);
    },
    set_visual_refresh: function () {
      google.maps.visualRefresh = !0;
    },
    set_45_imagery: function () {
      this.map.setTilt(45);
    },
    set_bicyle_layer: function () {
      var bikeLayer = new google.maps.BicyclingLayer();
      bikeLayer.setMap(this.map);
    },
    set_traffic_layer: function () {
      var traffic_layer = new google.maps.TrafficLayer();
      traffic_layer.setMap(this.map);
    },
    set_panoramic_layer: function () {
      var panoramic_layer = new google.maps.panoramio.PanoramioLayer();
      panoramic_layer.setMap(this.map);
    },
    set_transit_layer: function () {
      var transit_layer = new google.maps.TransitLayer();
      transit_layer.setMap(this.map);
    },
    set_streetview: function (latlng) {
      var panoOptions = {
        position: latlng,
        addressControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER,
        },
        linksControl: this.map_data.street_view.links_control,
        panControl: this.map_data.street_view.street_view_pan_control,
        zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL },
        enableCloseButton: this.map_data.street_view.street_view_close_button,
      };
      if (
        this.map_data.street_view.pov_heading &&
        this.map_data.street_view.pov_pitch
      ) {
        panoOptions.pov = {
          heading: parseInt(this.map_data.street_view.pov_heading),
          pitch: parseInt(this.map_data.street_view.pov_pitch),
        };
      }
      var panorama = new google.maps.StreetViewPanorama(
        this.element,
        panoOptions
      );
    },
    sortByPlace: function (order_by, data_type) {
      return function (a, b) {
        if (b[order_by] && a[order_by]) {
          if (a[order_by] && b[order_by]) {
            var a_val = a[order_by].toLowerCase();
            var b_val = b[order_by].toLowerCase();
            if (data_type == "num") {
              a_val = parseInt(a_val);
              b_val = parseInt(b_val);
            }
            return a_val < b_val ? -1 : a_val > b_val ? 1 : 0;
          }
        }
      };
    },
    sort_object_by_keyvalue: function (options, by, type, in_order) {
      var sortable = [];
      for (var key in options) {
        sortable.push(options[key]);
      }
      sortable.sort(this.sortByPlace(by, type));
      if (in_order == "desc") {
        sortable.reverse();
      }
      return sortable;
    },
    create_filters: function () {
      var map_obj = this;
      var options = "";
      var filters = {};
      var places = this.map_data.places;
      var wpgmp_listing_filter = this.map_data.listing;
      $.each(places, function (index, place) {
        if (typeof place.categories == "undefined") {
          place.categories = {};
        }
        $.each(place.categories, function (cat_index, category) {
          if (typeof filters[category.type] == "undefined") {
            filters[category.type] = {};
          }
          if (category.name) {
            if (
              category.extension_fields &&
              category.extension_fields.cat_order
            ) {
              filters[category.type][category.name] = {
                id: category.id,
                order: category.extension_fields.cat_order,
                name: category.name,
              };
            } else {
              filters[category.type][category.name] = {
                id: category.id,
                order: 0,
                name: category.name,
              };
            }
          }
        });
      });
      var content = "",
        by = "name",
        type = "",
        inorder = "asc";
      if (map_obj.map_data.listing) {
        if (map_obj.map_data.listing.default_sorting) {
          if (map_obj.map_data.listing.default_sorting.orderby == "listorder") {
            by = "order";
            type = "num";
            inorder = map_obj.map_data.listing.default_sorting.inorder;
          }
          inorder = map_obj.map_data.listing.default_sorting.inorder;
        }
      }
      $.each(filters, function (index, options) {
        if (
          wpgmp_listing_filter.display_category_filter === !0 &&
          index == "category"
        ) {
          content +=
            '<select data-filter="dropdown" data-name="category" name="place_' +
            index +
            '">';
          content +=
            '<option value="">' + wpgmp_local.select_category + "</option>";
          options = map_obj.sort_object_by_keyvalue(options, by, type, inorder);
          $.each(options, function (name, value) {
            content +=
              "<option value='" + value.id + "'>" + value.name + "</option>";
          });
          content += "</select>";
        }
      });
      return content;
    },
    update_filters: function () {
      var map_obj = this;
      var filters = {};
      var all_dropdowns = $(map_obj.container).find('[data-filter="dropdown"]');
      var all_checkboxes = $(map_obj.container).find(
        '[data-filter="checklist"]:checked'
      );
      var all_list = $(map_obj.container).find(
        '[data-filter="list"].fc_selected'
      );
      $.each(all_dropdowns, function (index, element) {
        if ($(this).val() != "") {
          if (typeof filters[$(this).data("name")] == "undefined") {
            filters[$(this).data("name")] = [];
          }
          filters[$(this).data("name")].push($(this).val());
        }
      });
      $.each(all_checkboxes, function (index, element) {
        if (typeof filters[$(this).data("name")] == "undefined") {
          filters[$(this).data("name")] = [];
        }
        filters[$(this).data("name")].push($(this).val());
      });
      $.each(all_list, function (index, element) {
        if (typeof filters[$(this).data("name")] == "undefined") {
          filters[$(this).data("name")] = [];
        }
        filters[$(this).data("name")].push($(this).data("value").toString());
      });
      this.apply_filters(filters);
    },
    apply_filters: function (filters) {
      var map_obj = this;
      var showAll = !0;
      var show = !0;
      map_obj.show_places = [];
      var enable_search_term = !1;
      if (
        $(map_obj.container).find('[data-input="wpgmp-search-text"]').length > 0
      ) {
        var search_term = $(map_obj.container)
          .find('[data-input="wpgmp-search-text"]')
          .val();
        search_term = search_term.toLowerCase();
        if (search_term.length > 0) {
          enable_search_term = !0;
        }
      }
      if (
        (map_obj.map_data.map_tabs &&
          map_obj.map_data.map_tabs.category_tab &&
          map_obj.map_data.map_tabs.category_tab.cat_tab === !0) ||
        $(map_obj.container).find("input[data-marker-category]").length > 0
      ) {
        var all_selected_category_sel = $(map_obj.container).find(
          "input[data-marker-category]:checked"
        );
        var all_selected_category = [];
        var all_not_selected_location = [];
        if (all_selected_category_sel.length > 0) {
          $.each(
            all_selected_category_sel,
            function (index, selected_category) {
              all_selected_category.push(
                $(selected_category).data("marker-category")
              );
              var all_not_selected_location_sel = $(selected_category)
                .closest('[data-container="wpgmp-category-tab-item"]')
                .find("input[data-marker-location]:not(:checked)");
              if (all_not_selected_location_sel.length > 0) {
                $.each(
                  all_not_selected_location_sel,
                  function (index, not_selected_location) {
                    all_not_selected_location.push(
                      $(not_selected_location).data("marker-location")
                    );
                  }
                );
              }
            }
          );
        }
        var all_selected_location_sel = $(map_obj.container)
          .find('[data-container="wpgmp-category-tab-item"]')
          .find("input[data-marker-location]:checked");
        var all_selected_location = [];
        if (all_selected_location_sel.length > 0) {
          $.each(
            all_selected_location_sel,
            function (index, selected_location) {
              all_selected_location.push(
                $(selected_location).data("marker-location")
              );
            }
          );
        }
      }
      if (typeof map_obj.map_data.places != "undefined") {
        $.each(map_obj.map_data.places, function (place_key, place) {
          show = !0;
          if (typeof filters != "undefined") {
            $.each(filters, function (filter_key, filter_values) {
              var in_fields = !1;
              if ($.isArray(filter_values)) {
                if (
                  typeof place.categories != "undefined" &&
                  filter_key == "category"
                ) {
                  $.each(place.categories, function (cat_index, category) {
                    if ($.inArray(category.id, filter_values) > -1) {
                      in_fields = !0;
                    }
                  });
                }
                if (typeof place[filter_key] != "undefined") {
                  if ($.inArray(place[filter_key], filter_values) > -1) {
                    in_fields = !0;
                  }
                } else if (typeof place.location[filter_key] != "undefined") {
                  if (
                    $.inArray(place.location[filter_key], filter_values) > -1
                  ) {
                    in_fields = !0;
                  }
                } else if (
                  place.location.extra_fields &&
                  typeof place.location.extra_fields[filter_key] != "undefined"
                ) {
                  var dropdown_value = filter_values[0];
                  if (
                    place.location.extra_fields[filter_key] &&
                    place.location.extra_fields[filter_key].indexOf(
                      dropdown_value
                    ) > -1
                  ) {
                    in_fields = !0;
                  } else if (
                    $.inArray(
                      place.location.extra_fields[filter_key],
                      filter_values
                    ) > -1
                  ) {
                    in_fields = !0;
                  }
                }
                if (in_fields == !1) show = !1;
              } else {
                filter_values.val = "";
              }
            });
          }
          if (enable_search_term === !0 && show === !0) {
            if (
              place.title != undefined &&
              place.title.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.content != undefined &&
              place.content.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.location.lat.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.location.lng.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.address &&
              place.address.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.location.state &&
              place.location.state.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.location.country &&
              place.location.country.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.location.postal_code &&
              place.location.postal_code.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              place.location.city &&
              place.location.city.toLowerCase().indexOf(search_term) >= 0
            ) {
              show = !0;
            } else if (
              typeof map_obj.search_area != "undefined" &&
              map_obj.search_area != "" &&
              map_obj.wpgmp_within_radius(place, map_obj.search_area) === !0
            ) {
              show = !0;
            } else {
              show = !1;
            }
            if (typeof place.location.extra_fields != "undefined") {
              $.each(place.location.extra_fields, function (field, value) {
                if (value) {
                  value = value.toString();
                  if (value && value.toLowerCase().indexOf(search_term) >= 0)
                    show = !0;
                }
              });
            }
          }
          if (
            (place.categories.length == undefined ||
              place.categories.length == "undefined") &&
            all_selected_category &&
            all_selected_category.length > 0 &&
            $(map_obj.container)
              .find('input[name="wpgmp_select_all"]')
              .is(":checked") == !1 &&
            show
          ) {
            show = !1;
          }
          if (
            all_selected_category &&
            show != !1 &&
            place.categories.length != undefined
          ) {
            var in_checked_category = !1;
            if (all_selected_category.length === 0) {
              if (typeof place.categories != "undefined") {
                $.each(place.categories, function (cat_index, category) {
                  if (category.id === "") in_checked_category = !0;
                });
              }
            } else {
              if (typeof place.categories != "undefined") {
                $.each(place.categories, function (cat_index, category) {
                  if (category.id === "") in_checked_category = !0;
                  else if (
                    $.inArray(parseInt(category.id), all_selected_category) > -1
                  ) {
                    in_checked_category = !0;
                    place.marker.setIcon(category.icon);
                  }
                });
              }
            }
            if (all_not_selected_location.length !== 0) {
              if (
                $.inArray(parseInt(place.id), all_not_selected_location) > -1
              ) {
                in_checked_category = !1;
              }
            }
            if (in_checked_category === !1) show = !1;
            else show = !0;
            if (all_selected_location.length !== 0) {
              if ($.inArray(parseInt(place.id), all_selected_location) > -1) {
                show = !0;
              }
            }
          }
          place.marker.visible = show;
          place.marker.setVisible(show);
          if (show == !1) {
            place.infowindow.close();
          }
          place.marker.setAnimation(null);
          if (show === !0) map_obj.show_places.push(place);
        });
      }
      if (
        typeof map_obj.map_data.map_options.bound_map_after_filter !==
          typeof undefined &&
        map_obj.map_data.map_options.bound_map_after_filter === !0
      ) {
        var after_filter_bounds = new google.maps.LatLngBounds();
        for (var j = 0; j < map_obj.show_places.length; j++) {
          var markerInResult = new google.maps.LatLng(
            map_obj.show_places[j].location.lat,
            map_obj.show_places[j].location.lng
          );
          after_filter_bounds.extend(markerInResult);
        }
        map_obj.map.fitBounds(after_filter_bounds);
      }
      if (map_obj.map_data.listing) {
        if ($(map_obj.container).find('[data-filter="map-sorting"]').val()) {
          var order_data = $(map_obj.container)
            .find('[data-filter="map-sorting"]')
            .val()
            .split("__");
          var data_type = "";
          if (order_data[0] !== "" && order_data[1] !== "") {
            if (typeof order_data[2] != "undefined") {
              data_type = order_data[2];
            }
            map_obj.sorting(order_data[0], order_data[1], data_type);
          }
        } else {
          if (map_obj.map_data.listing.default_sorting) {
            var data_type = "";
            if (
              map_obj.map_data.listing.default_sorting.orderby == "listorder"
            ) {
              data_type = "num";
            }
            map_obj.sorting(
              map_obj.map_data.listing.default_sorting.orderby,
              map_obj.map_data.listing.default_sorting.inorder,
              data_type
            );
          }
        }
      }
      if (map_obj.map_data.marker_cluster) {
        map_obj.set_marker_cluster();
      }
    },
    display_filters_listing: function () {
      if (this.map_data.listing) {
        var filter_content =
          '<div class="wpgmp_filter_wrappers">' +
          this.display_filters() +
          "</div>";
        $(this.container).find(".wpgmp_map_parent").after(filter_content);
      }
    },
    display_filters: function () {
      var hide_locations = this.map_data.listing.hide_locations;
      var content = "";
      content +=
        '<div class="wpgmp_before_listing">' +
        this.map_data.listing.listing_header +
        "</div>";
      content +=
        '<div class="categories_filter">' +
        this.create_filters() +
        '<div data-container="wpgmp-filters-container"></div>';
      content += "</div>";
      return content;
    },
    map_loaded: function () {
      var map_obj = this;
      var gmap = map_obj.map;
      google.maps.event.addListenerOnce(gmap, "idle", function () {
        var center = gmap.getCenter();
        google.maps.event.trigger(gmap, "resize");
        gmap.setCenter(center);
      });
      if (map_obj.settings.center_by_nearest === !0) {
        map_obj.center_by_nearest();
      }
      if (map_obj.settings.close_infowindow_on_map_click === !0) {
        google.maps.event.addListener(gmap, "click", function (event) {
          $.each(map_obj.places, function (key, place) {
            place.infowindow.close();
            place.marker.setAnimation(null);
          });
        });
      }
      if (map_obj.settings.map_infowindow_customisations === !0) {
        google.maps.event.addListener(
          map_obj.infowindow_marker,
          "domready",
          function () {
            var wpgmp_iwOuter = $(map_obj.container).find(".gm-style-iw");
            wpgmp_iwOuter.parent().css({ width: "0px", height: "0px" });
            var wpgmp_iwCloseBtn = wpgmp_iwOuter.next();
            wpgmp_iwCloseBtn.css("display", "none");
            var wpgmp_iwBackground = wpgmp_iwOuter.prev();
            wpgmp_iwBackground
              .children(":nth-child(2)")
              .css({ display: "none" });
            wpgmp_iwBackground
              .children(":nth-child(3)")
              .css({ "background-color": "#000;" });
            wpgmp_iwBackground
              .children(":nth-child(4)")
              .css({ display: "none" });
            var height = wpgmp_iwOuter.outerHeight();
            wpgmp_iwBackground
              .children(":nth-child(3)")
              .css({ top: height + 18 + "px" });
            wpgmp_iwBackground
              .children(":nth-child(1)")
              .css({ top: height + 10 + "px" });
            wpgmp_iwBackground
              .children(":nth-child(3)")
              .find("div")
              .children()
              .css({
                "box-shadow":
                  map_obj.settings.infowindow_border_color + " 0px 1px 6px",
                border: "1px solid " + map_obj.settings.infowindow_border_color,
                "border-top": "",
                "z-index": "1",
                "background-color": map_obj.settings.infowindow_bg_color,
              });
            wpgmp_iwOuter
              .find(".wpgmp_infowindow")
              .prepend('<div class="infowindow-close"></div>');
            wpgmp_iwOuter.on("click", ".infowindow-close", function (event) {
              $.each(map_obj.places, function (key, place) {
                place.infowindow.close();
                place.marker.setAnimation(null);
              });
            });
          }
        );
      }
    },
    resize_map: function () {
      var map_obj = this;
      var gmap = map_obj.map;
      var zoom = gmap.getZoom();
      var center = gmap.getCenter();
      google.maps.event.trigger(this.map, "resize");
      gmap.setZoom(zoom);
      gmap.setCenter(center);
    },
    responsive_map: function () {
      var map_obj = this;
      var gmap = map_obj.map;
      google.maps.event.addDomListener(window, "resize", function () {
        var zoom = gmap.getZoom();
        var center = gmap.getCenter();
        google.maps.event.trigger(gmap, "resize");
        gmap.setZoom(zoom);
        gmap.setCenter(center);
        gmap.getBounds();
      });
    },
    show_search_control: function () {
      var map_obj = this;
      var input = $(map_obj.container).find(
        '[data-input="map-search-control"]'
      )[0];
      if (input !== undefined) {
        var searchBox = new google.maps.places.Autocomplete(input);
        if (
          wpgmp_local.wpgmp_country_specific &&
          wpgmp_local.wpgmp_country_specific == !0
        ) {
          searchBox.setComponentRestrictions({
            country: wpgmp_local.wpgmp_countries,
          });
        }
        map_obj.map.controls[
          eval(
            "google.maps.ControlPosition." +
              map_obj.settings.search_control_position
          )
        ].push(input);
        searchBox.bindTo("bounds", map_obj.map);
        google.maps.event.addListener(searchBox, "place_changed", function () {
          var place = searchBox.getPlace();
          map_obj.map.setCenter(place.geometry.location);
          map_obj.map.setZoom(
            parseInt(map_obj.map_data.map_options.map_zoom_after_search)
          );
        });
      }
    },
    fit_bounds: function () {
      var map_obj = this;
      var places = map_obj.map_data.places;
      var bounds = new google.maps.LatLngBounds();
      if (places !== undefined) {
        places.forEach(function (place) {
          if (place.location.lat && place.location.lng) {
            bounds.extend(
              new google.maps.LatLng(
                parseFloat(place.location.lat),
                parseFloat(place.location.lng)
              )
            );
          }
        });
      }
      map_obj.map.fitBounds(bounds);
    },
    create_markers: function () {
      var map_obj = this;
      var places = map_obj.map_data.places;
      var temp_listing_placeholder;
      var replaceData;
      var remove_keys = [];
      $.each(places, function (key, place) {
        if (place.location.lat && place.location.lng) {
          if (typeof place.categories == "undefined") {
            place.categories = {};
          }
          place.marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              parseFloat(place.location.lat),
              parseFloat(place.location.lng)
            ),
            icon: place.location.icon,
            url: place.url,
            draggable: place.location.draggable,
            map: map_obj.map,
            clickable: place.location.infowindow_disable,
          });
          if (map_obj.settings.infowindow_drop_animation === !0) {
            place.marker.setAnimation(google.maps.Animation.DROP);
          }
          if (map_obj.settings.infowindow_filter_only === !0) {
            place.marker.visible = !1;
            place.marker.setVisible(!1);
          }
          if (map_obj.map_data.page == "edit_location")
            map_obj.marker_bind(place.marker);
          var location_categories = [];
          if (typeof place.categories != "undefined") {
            for (var cat in place.categories) {
              location_categories.push(place.categories[cat].name);
            }
          }
          var content = "";
          var marker_image = "";
          if (place.source == "post") {
            marker_image = place.location.extra_fields.post_featured_image;
          } else {
            marker_image = place.location.marker_image;
          }
          var temp_listing_placeholder = "";
          if (place.source == "post") {
            temp_listing_placeholder =
              map_obj.settings.infowindow_geotags_setting;
          } else {
            temp_listing_placeholder = map_obj.settings.infowindow_setting;
          }
          if (typeof temp_listing_placeholder == "undefined") {
            temp_listing_placeholder = place.content;
          }
          replaceData = {
            "{marker_id}": place.id,
            "{marker_title}": place.title,
            "{marker_address}": place.address,
            "{marker_latitude}": place.location.lat,
            "{marker_longitude}": place.location.lng,
            "{marker_city}": place.location.city,
            "{marker_state}": place.location.state,
            "{marker_country}": place.location.country,
            "{marker_postal_code}": place.location.postal_code,
            "{marker_zoom}": place.location.zoom,
            "{marker_icon}": place.location.icon,
            "{marker_category}": location_categories.join(","),
            "{marker_message}": place.content,
            "{marker_image}": marker_image,
          };
          if (typeof place.location.extra_fields != "undefined") {
            for (var extra in place.location.extra_fields) {
              if (!place.location.extra_fields[extra]) {
                replaceData["{" + extra + "}"] = "";
              } else {
                replaceData["{" + extra + "}"] =
                  place.location.extra_fields[extra];
              }
            }
          }
          temp_listing_placeholder = temp_listing_placeholder.replace(
            /{[^{}]+}/g,
            function (match) {
              if (match in replaceData) {
                return replaceData[match];
              } else {
                return "";
              }
            }
          );
          content = temp_listing_placeholder;
          if (content === "") {
            if (
              map_obj.settings.map_infowindow_customisations === !0 &&
              map_obj.settings.show_infowindow_header === !0
            )
              content =
                '<div class="wpgmp_infowindow"><div class="wpgmp_iw_head"><div class="wpgmp_iw_head_content">' +
                place.title +
                '</div></div><div class="wpgmp_iw_content">' +
                place.content +
                "</div></div>";
            else
              content =
                '<div class="wpgmp_infowindow"><div class="wpgmp_iw_content">' +
                place.content +
                "</div></div>";
          } else {
            if (
              map_obj.settings.map_infowindow_customisations === !0 &&
              map_obj.settings.show_infowindow_header === !0
            )
              content =
                '<div class="wpgmp_infowindow"><div class="wpgmp_iw_head"><div class="wpgmp_iw_head_content">' +
                place.title +
                '</div></div><div class="wpgmp_iw_content">' +
                content +
                "</div></div>";
            else
              content =
                '<div class="wpgmp_infowindow"><div class="wpgmp_iw_content">' +
                content +
                "</div></div>";
          }
          place.infowindow_data = content;
          place.infowindow = map_obj.infowindow_marker;
          if (place.location.infowindow_default_open === !0) {
            map_obj.openInfoWindow(place);
          } else if (map_obj.settings.default_infowindow_open === !0) {
            map_obj.openInfoWindow(place);
          }
          var on_event = map_obj.settings.infowindow_open_event;
          var bounce_on_event = map_obj.settings.infowindow_bounce_animation;
          map_obj.event_listener(place.marker, on_event, function () {
            $.each(map_obj.places, function (key, prev_place) {
              prev_place.infowindow.close();
              prev_place.marker.setAnimation(null);
            });
            map_obj.openInfoWindow(place);
            if (bounce_on_event == "click") {
              map_obj.toggle_bounce(place.marker);
            }
          });
          if (bounce_on_event == "mouseover" && on_event != "mouseover") {
            map_obj.event_listener(place.marker, "mouseover", function () {
              place.marker.setAnimation(google.maps.Animation.BOUNCE);
            });
            map_obj.event_listener(place.marker, "mouseout", function () {
              place.marker.setAnimation(null);
            });
          }
          if (bounce_on_event != "") {
            google.maps.event.addListener(
              place.infowindow,
              "closeclick",
              function () {
                place.marker.setAnimation(null);
              }
            );
          }
          map_obj.places.push(place);
        } else {
          remove_keys.push(key);
        }
      });
      $.each(remove_keys, function (index, value) {
        places.splice(value, 1);
      });
    },
    toggle_bounce: function (marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    },
    display_markers: function () {
      var map_obj = this;
      map_obj.show_places = [];
      map_obj.categories = [];
      var categories = {};
      for (var i = 0; i < map_obj.places.length; i++) {
        map_obj.places[i].marker.setMap(map_obj.map);
        if (map_obj.places[i].marker.visible === !0) {
          map_obj.show_places.push(this.places[i]);
        }
        if (typeof map_obj.places[i].categories != "undefined") {
          $.each(map_obj.places[i].categories, function (index, category) {
            if (typeof categories[category.name] == "undefined") {
              categories[category.name] = category;
            }
          });
        }
      }
      this.categories = categories;
    },
    get_current_location: function (success_func, error_func) {
      var map = this;
      if (typeof map.user_location == "undefined") {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            map.user_location = new google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );
            if (success_func) success_func(map.user_location);
          },
          function (ErrorPosition) {
            if (error_func) error_func(ErrorPosition);
          },
          { enableHighAccuracy: !0, timeout: 5000, maximumAge: 0 }
        );
      } else {
        if (success_func) success_func(map.user_location);
      }
    },
    openInfoWindow: function (place) {
      var map_obj = this;
      place.infowindow = map_obj.infowindow_marker;
      place.infowindow.setContent(place.infowindow_data);
      if (place.location.onclick_action == "custom_link") {
        if (place.location.open_new_tab == "yes")
          window.open(place.location.redirect_custom_link, "_blank");
        else window.open(place.location.redirect_custom_link, "_self");
      } else {
        place.infowindow.open(this.map, place.marker);
        if (
          typeof map_obj.settings.infowindow_click_change_center !=
            "undefined" &&
          map_obj.settings.infowindow_click_change_center == !0
        ) {
          map_obj.map.setCenter(place.marker.getPosition());
        }
        if (
          typeof map_obj.settings.infowindow_click_change_zoom != "undefined" &&
          map_obj.settings.infowindow_click_change_zoom > 0
        ) {
          map_obj.map.setZoom(map_obj.settings.infowindow_click_change_zoom);
        }
        if (
          this.map_data.map_tabs &&
          this.map_data.map_tabs.direction_tab &&
          this.map_data.map_tabs.direction_tab.dir_tab === !0
        ) {
          $(this.container).find(".start_point").val(place.address);
        }
      }
    },
  };
  $.fn.maps = function (options, places) {
    this.each(function () {
      if (!$.data(this, "wpgmp_maps")) {
        $.data(this, "wpgmp_maps", new GoogleMaps(this, options, places));
      }
    });
    return this;
  };
})(jQuery, window, document);
/*!
 * Master Slider – Responsive Touch Swipe Slider
 * Copyright © 2022 All Rights Reserved.
 *
 * @author Averta [www.averta.net]
 * @version 2.85.13
 * @date Feb 2022
 */
(window.averta = {}),
  (function ($) {
    function getVendorPrefix() {
      if ("result" in arguments.callee) return arguments.callee.result;
      var regex = /^(Moz|Khtml|O|ms|Icab)(?=[A-Z])/,
        webKitOnly = /^(Webkit|webkit)(?=[A-Z])/,
        someScript = document.getElementsByTagName("script")[0];
      for (var prop in someScript.style)
        if (webKitOnly.test(prop)) return (arguments.callee.result = "Webkit");
      for (var prop in someScript.style)
        if (regex.test(prop))
          return (arguments.callee.result = prop.match(regex)[0]);
      return (arguments.callee.result =
        "WebkitOpacity" in someScript.style
          ? "Webkit"
          : "KhtmlOpacity" in someScript.style
          ? "Khtml"
          : "");
    }
    function checkStyleValue(prop) {
      var b = document.body || document.documentElement,
        s = b.style,
        p = prop;
      if ("string" == typeof s[p]) return !0;
      (v = ["Moz", "Webkit", "Khtml", "O", "ms"]),
        (p = p.charAt(0).toUpperCase() + p.substr(1));
      for (var i = 0; i < v.length; i++)
        if ("string" == typeof s[v[i] + p]) return !0;
      return !1;
    }
    function supportsTransitions() {
      return checkStyleValue("transition");
    }
    function supportsTransforms() {
      return checkStyleValue("transform");
    }
    function supports3DTransforms() {
      if (!supportsTransforms()) return !1;
      var has3d,
        el = document.createElement("i"),
        transforms = {
          WebkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          MSTransform: "-ms-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          Transform: "transform",
          transform: "transform",
        };
      (el.style.display = "block"), document.body.insertBefore(el, null);
      for (var t in transforms)
        void 0 !== el.style[t] &&
          ((el.style[t] = "translate3d(1px,1px,1px)"),
          (has3d = window
            .getComputedStyle(el)
            .getPropertyValue(transforms[t])));
      return (
        document.body.removeChild(el),
        null != has3d && has3d.length > 0 && "none" !== has3d
      );
    }
    window["package"] = function (name) {
      window[name] || (window[name] = {});
    };
    var extend = function (target, object) {
      for (var key in object) target[key] = object[key];
    };
    Function.prototype.extend = function (superclass) {
      "function" == typeof superclass.prototype.constructor
        ? (extend(this.prototype, superclass.prototype),
          (this.prototype.constructor = this))
        : (this.prototype.extend(superclass),
          (this.prototype.constructor = this));
    };
    var trans = {
      Moz: "-moz-",
      Webkit: "-webkit-",
      Khtml: "-khtml-",
      O: "-o-",
      ms: "-ms-",
      Icab: "-icab-",
    };
    (window._mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )),
      (window._touch = "ontouchstart" in document),
      $(document).ready(function () {
        (window._jcsspfx = getVendorPrefix()),
          (window._csspfx = trans[window._jcsspfx]),
          (window._cssanim = supportsTransitions()),
          (window._css3d = supports3DTransforms()),
          (window._css2d = supportsTransforms());
      }),
      (window.parseQueryString = function (url) {
        var queryString = {};
        return (
          url.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function ($0, $1, $2, $3) {
              queryString[$1] = $3;
            }
          ),
          queryString
        );
      });
    var fps60 = 50 / 3;
    if (
      (window.requestAnimationFrame ||
        (window.requestAnimationFrame = (function () {
          return (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
              window.setTimeout(callback, fps60);
            }
          );
        })()),
      window.getComputedStyle ||
        (window.getComputedStyle = function (el) {
          return (
            (this.el = el),
            (this.getPropertyValue = function (prop) {
              var re = /(\-([a-z]){1})/g;
              return (
                "float" == prop && (prop = "styleFloat"),
                re.test(prop) &&
                  (prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                  })),
                el.currentStyle[prop] ? el.currentStyle[prop] : null
              );
            }),
            el.currentStyle
          );
        }),
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (elt) {
          var len = this.length >>> 0,
            from = Number(arguments[1]) || 0;
          for (
            from = 0 > from ? Math.ceil(from) : Math.floor(from),
              0 > from && (from += len);
            len > from;
            from++
          )
            if (from in this && this[from] === elt) return from;
          return -1;
        }),
      (window.isMSIE = function (version) {
        if (!window.MSBrowserInfo.msie) return !1;
        if (!version) return !0;
        var ieVer = window.MSBrowserInfo.version.slice(
          0,
          window.MSBrowserInfo.version.indexOf(".")
        );
        return "string" == typeof version
          ? eval(
              -1 !== version.indexOf("<") || -1 !== version.indexOf(">")
                ? ieVer + version
                : version + "==" + ieVer
            )
          : version == ieVer;
      }),
      ($.removeDataAttrs = function ($target, exclude) {
        var i,
          attrName,
          dataAttrsToDelete = [],
          dataAttrs = $target[0].attributes,
          dataAttrsLen = dataAttrs.length;
        for (exclude = exclude || [], i = 0; dataAttrsLen > i; i++)
          (attrName = dataAttrs[i].name),
            "data-" === attrName.substring(0, 5) &&
              -1 === exclude.indexOf(attrName) &&
              dataAttrsToDelete.push(dataAttrs[i].name);
        $.each(dataAttrsToDelete, function (index, attrName) {
          $target.removeAttr(attrName);
        });
      }),
      jQuery)
    ) {
      ($.jqLoadFix = function () {
        if (this.complete) {
          var that = this;
          setTimeout(function () {
            $(that).trigger("load");
          }, 1);
        }
      }),
        (jQuery.uaMatch =
          jQuery.uaMatch ||
          function (ua) {
            ua = ua.toLowerCase();
            var match =
              /(chrome)[ \/]([\w.]+)/.exec(ua) ||
              /(webkit)[ \/]([\w.]+)/.exec(ua) ||
              /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
              /(msie) ([\w.]+)/.exec(ua) ||
              (ua.indexOf("compatible") < 0 &&
                /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
              [];
            return { browser: match[1] || "", version: match[2] || "0" };
          }),
        (matched = jQuery.uaMatch(navigator.userAgent)),
        (browser = {}),
        matched.browser &&
          ((browser[matched.browser] = !0),
          (browser.version = matched.version)),
        browser.chrome
          ? (browser.webkit = !0)
          : browser.webkit && (browser.safari = !0);
      var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
      isIE11 && ((browser.msie = "true"), delete browser.mozilla),
        (window.MSBrowserInfo = browser),
        ($.fn.preloadImg = function (src, _event) {
          return (
            this.each(function () {
              var $this = $(this),
                self = this,
                img = new Image();
              (img.onload = function (event) {
                null == event && (event = {}),
                  $this.attr("src", src),
                  (event.width = img.width),
                  (event.height = img.height),
                  $this.data("width", img.width),
                  $this.data("height", img.height),
                  setTimeout(function () {
                    _event.call(self, event);
                  }, 50),
                  (img = null);
              }),
                (img.src = src);
            }),
            this
          );
        });
    }
  })(jQuery),
  (function () {
    "use strict";
    (averta.EventDispatcher = function () {
      this.listeners = {};
    }),
      (averta.EventDispatcher.extend = function (_proto) {
        var instance = new averta.EventDispatcher();
        for (var key in instance)
          "constructor" != key &&
            (_proto[key] = averta.EventDispatcher.prototype[key]);
      }),
      (averta.EventDispatcher.prototype = {
        constructor: averta.EventDispatcher,
        addEventListener: function (event, listener, ref) {
          this.listeners[event] || (this.listeners[event] = []),
            this.listeners[event].push({ listener: listener, ref: ref });
        },
        removeEventListener: function (event, listener, ref) {
          if (this.listeners[event]) {
            for (var i = 0; i < this.listeners[event].length; ++i)
              listener === this.listeners[event][i].listener &&
                ref === this.listeners[event][i].ref &&
                this.listeners[event].splice(i--, 1);
            0 === this.listeners[event].length &&
              (this.listeners[event] = null);
          }
        },
        dispatchEvent: function (event) {
          if (((event.target = this), this.listeners[event.type]))
            for (var i = 0, l = this.listeners[event.type].length; l > i; ++i)
              this.listeners[event.type][i].listener.call(
                this.listeners[event.type][i].ref,
                event
              );
        },
      });
  })(),
  (function ($) {
    "use strict";
    var isTouch = "ontouchstart" in document,
      isPointer = window.navigator.pointerEnabled,
      isMSPoiner = !isPointer && window.navigator.msPointerEnabled,
      usePointer = isPointer || isMSPoiner,
      ev_start =
        (isPointer ? "pointerdown " : "") +
        (isMSPoiner ? "MSPointerDown " : "") +
        (isTouch ? "touchstart " : "") +
        "mousedown",
      ev_move =
        (isPointer ? "pointermove " : "") +
        (isMSPoiner ? "MSPointerMove " : "") +
        (isTouch ? "touchmove " : "") +
        "mousemove",
      ev_end =
        (isPointer ? "pointerup " : "") +
        (isMSPoiner ? "MSPointerUp " : "") +
        (isTouch ? "touchend " : "") +
        "mouseup",
      ev_cancel =
        (isPointer ? "pointercancel " : "") +
        (isMSPoiner ? "MSPointerCancel " : "") +
        "touchcancel";
    averta.TouchSwipe = function ($element) {
      (this.$element = $element),
        (this.enabled = !0),
        $element.on(ev_start, { target: this }, this.__touchStart),
        ($element[0].swipe = this),
        (this.onSwipe = null),
        (this.swipeType = "horizontal"),
        (this.noSwipeSelector =
          "input, textarea, button, .no-swipe, .ms-no-swipe"),
        (this.lastStatus = {});
    };
    var p = averta.TouchSwipe.prototype;
    (p.getDirection = function (new_x, new_y) {
      switch (this.swipeType) {
        case "horizontal":
          return new_x <= this.start_x ? "left" : "right";
        case "vertical":
          return new_y <= this.start_y ? "up" : "down";
        case "all":
          return Math.abs(new_x - this.start_x) > Math.abs(new_y - this.start_y)
            ? new_x <= this.start_x
              ? "left"
              : "right"
            : new_y <= this.start_y
            ? "up"
            : "down";
      }
    }),
      (p.priventDefultEvent = function (new_x, new_y) {
        var dx = Math.abs(new_x - this.start_x),
          dy = Math.abs(new_y - this.start_y),
          horiz = dx > dy;
        return (
          ("horizontal" === this.swipeType && horiz) ||
          ("vertical" === this.swipeType && !horiz)
        );
      }),
      (p.createStatusObject = function (evt) {
        var temp_x,
          temp_y,
          status_data = {};
        return (
          (temp_x = this.lastStatus.distanceX || 0),
          (temp_y = this.lastStatus.distanceY || 0),
          (status_data.distanceX = evt.pageX - this.start_x),
          (status_data.distanceY = evt.pageY - this.start_y),
          (status_data.moveX = status_data.distanceX - temp_x),
          (status_data.moveY = status_data.distanceY - temp_y),
          (status_data.distance = parseInt(
            Math.sqrt(
              Math.pow(status_data.distanceX, 2) +
                Math.pow(status_data.distanceY, 2)
            )
          )),
          (status_data.duration = new Date().getTime() - this.start_time),
          (status_data.direction = this.getDirection(evt.pageX, evt.pageY)),
          status_data
        );
      }),
      (p.__reset = function (event, jqevt) {
        (this.reset = !1),
          (this.lastStatus = {}),
          (this.start_time = new Date().getTime());
        var point = this.__getPoint(event, jqevt);
        (this.start_x = point.pageX), (this.start_y = point.pageY);
      }),
      (p.__touchStart = function (event) {
        var swipe = event.data.target,
          jqevt = event;
        if (
          swipe.enabled &&
          !(
            $(event.target).closest(swipe.noSwipeSelector, swipe.$element)
              .length > 0
          )
        ) {
          if (
            ((event = event.originalEvent),
            usePointer &&
              $(this).css(
                "-ms-touch-action",
                "horizontal" === swipe.swipeType ? "pan-y" : "pan-x"
              ),
            !swipe.onSwipe)
          )
            return void $.error("Swipe listener is undefined");
          if (
            !(
              swipe.touchStarted ||
              (isTouch &&
                swipe.start_time &&
                "mousedown" === event.type &&
                new Date().getTime() - swipe.start_time < 600)
            )
          ) {
            var point = swipe.__getPoint(event, jqevt);
            (swipe.start_x = point.pageX),
              (swipe.start_y = point.pageY),
              (swipe.start_time = new Date().getTime()),
              $(document)
                .on(ev_end, { target: swipe }, swipe.__touchEnd)
                .on(ev_move, { target: swipe }, swipe.__touchMove)
                .on(ev_cancel, { target: swipe }, swipe.__touchCancel);
            var status = swipe.createStatusObject(point);
            (status.phase = "start"),
              swipe.onSwipe.call(null, status),
              isTouch || jqevt.preventDefault(),
              (swipe.lastStatus = status),
              (swipe.touchStarted = !0);
          }
        }
      }),
      (p.__touchMove = function (event) {
        var swipe = event.data.target,
          jqevt = event;
        if (((event = event.originalEvent), swipe.touchStarted)) {
          clearTimeout(swipe.timo),
            (swipe.timo = setTimeout(function () {
              swipe.__reset(event, jqevt);
            }, 60));
          var point = swipe.__getPoint(event, jqevt),
            status = swipe.createStatusObject(point);
          swipe.priventDefultEvent(point.pageX, point.pageY) &&
            jqevt.preventDefault(),
            (status.phase = "move"),
            (swipe.lastStatus = status),
            swipe.onSwipe.call(null, status);
        }
      }),
      (p.__touchEnd = function (event) {
        var swipe = event.data.target,
          jqevt = event;
        (event = event.originalEvent), clearTimeout(swipe.timo);
        var status = swipe.lastStatus;
        isTouch || jqevt.preventDefault(),
          (status.phase = "end"),
          (swipe.touchStarted = !1),
          (swipe.priventEvt = null),
          $(document)
            .off(ev_end, swipe.__touchEnd)
            .off(ev_move, swipe.__touchMove)
            .off(ev_cancel, swipe.__touchCancel),
          (status.speed = status.distance / status.duration),
          swipe.onSwipe.call(null, status);
      }),
      (p.__touchCancel = function (event) {
        var swipe = event.data.target;
        swipe.__touchEnd(event);
      }),
      (p.__getPoint = function (event, jqEvent) {
        return isTouch && -1 === event.type.indexOf("mouse")
          ? event.touches[0]
          : usePointer
          ? event
          : jqEvent;
      }),
      (p.enable = function () {
        this.enabled || (this.enabled = !0);
      }),
      (p.disable = function () {
        this.enabled && (this.enabled = !1);
      });
  })(jQuery),
  (function () {
    "use strict";
    averta.Ticker = function () {};
    var st = averta.Ticker,
      list = [],
      len = 0,
      __stopped = !0;
    (st.add = function (listener, ref) {
      return (
        list.push([listener, ref]),
        1 === list.length && st.start(),
        (len = list.length)
      );
    }),
      (st.remove = function (listener, ref) {
        for (var i = 0, l = list.length; l > i; ++i)
          list[i] &&
            list[i][0] === listener &&
            list[i][1] === ref &&
            list.splice(i, 1);
        (len = list.length), 0 === len && st.stop();
      }),
      (st.start = function () {
        __stopped && ((__stopped = !1), __tick());
      }),
      (st.stop = function () {
        __stopped = !0;
      });
    var __tick = function () {
      if (!st.__stopped) {
        for (var item, i = 0; i !== len; i++)
          (item = list[i]), item[0].call(item[1]);
        requestAnimationFrame(__tick);
      }
    };
  })(),
  (function () {
    "use strict";
    Date.now ||
      (Date.now = function () {
        return new Date().getTime();
      }),
      (averta.Timer = function (delay, autoStart) {
        (this.delay = delay),
          (this.currentCount = 0),
          (this.paused = !1),
          (this.onTimer = null),
          (this.refrence = null),
          autoStart && this.start();
      }),
      (averta.Timer.prototype = {
        constructor: averta.Timer,
        start: function () {
          (this.paused = !1),
            (this.lastTime = Date.now()),
            averta.Ticker.add(this.update, this);
        },
        stop: function () {
          (this.paused = !0), averta.Ticker.remove(this.update, this);
        },
        reset: function () {
          (this.currentCount = 0),
            (this.paused = !0),
            (this.lastTime = Date.now());
        },
        update: function () {
          this.paused ||
            Date.now() - this.lastTime < this.delay ||
            (this.currentCount++,
            (this.lastTime = Date.now()),
            this.onTimer && this.onTimer.call(this.refrence, this.getTime()));
        },
        getTime: function () {
          return this.delay * this.currentCount;
        },
      });
  })(),
  (function () {
    "use strict";
    window.CSSTween = function (element, duration, delay, ease) {
      (this.$element = element),
        (this.duration = duration || 1e3),
        (this.delay = delay || 0),
        (this.ease = ease || "linear");
    };
    var p = CSSTween.prototype;
    (p.to = function (callback, target) {
      return (this.to_cb = callback), (this.to_cb_target = target), this;
    }),
      (p.from = function (callback, target) {
        return (this.fr_cb = callback), (this.fr_cb_target = target), this;
      }),
      (p.onComplete = function (callback, target) {
        return (this.oc_fb = callback), (this.oc_fb_target = target), this;
      }),
      (p.chain = function (csstween) {
        return (this.chained_tween = csstween), this;
      }),
      (p.reset = function () {
        clearTimeout(this.start_to), clearTimeout(this.end_to);
      }),
      (p.start = function () {
        var element = this.$element[0];
        clearTimeout(this.start_to),
          clearTimeout(this.end_to),
          (this.fresh = !0),
          this.fr_cb &&
            ((element.style[window._jcsspfx + "TransitionDuration"] = "0ms"),
            this.fr_cb.call(this.fr_cb_target));
        var that = this;
        return (
          (this.onTransComplete = function () {
            that.fresh &&
              (that.reset(),
              (element.style[window._jcsspfx + "TransitionDuration"] = ""),
              (element.style[window._jcsspfx + "TransitionProperty"] = ""),
              (element.style[window._jcsspfx + "TransitionTimingFunction"] =
                ""),
              (element.style[window._jcsspfx + "TransitionDelay"] = ""),
              (that.fresh = !1),
              that.chained_tween && that.chained_tween.start(),
              that.oc_fb && that.oc_fb.call(that.oc_fb_target));
          }),
          (this.start_to = setTimeout(function () {
            that.$element &&
              ((element.style[window._jcsspfx + "TransitionDuration"] =
                that.duration + "ms"),
              (element.style[window._jcsspfx + "TransitionProperty"] =
                that.transProperty || "all"),
              (element.style[window._jcsspfx + "TransitionDelay"] =
                that.delay > 0 ? that.delay + "ms" : ""),
              (element.style[window._jcsspfx + "TransitionTimingFunction"] =
                that.ease),
              that.to_cb && that.to_cb.call(that.to_cb_target),
              (that.end_to = setTimeout(function () {
                that.onTransComplete();
              }, that.duration + (that.delay || 0))));
          }, 1)),
          this
        );
      });
  })(),
  (function () {
    "use strict";
    function transPos(element, properties) {
      if (void 0 !== properties.x || void 0 !== properties.y)
        if (_cssanim) {
          var trans = window._jcsspfx + "Transform";
          void 0 !== properties.x &&
            ((properties[trans] =
              (properties[trans] || "") +
              " translateX(" +
              properties.x +
              "px)"),
            delete properties.x),
            void 0 !== properties.y &&
              ((properties[trans] =
                (properties[trans] || "") +
                " translateY(" +
                properties.y +
                "px)"),
              delete properties.y);
        } else {
          if (void 0 !== properties.x) {
            var posx = "auto" !== element.css("right") ? "right" : "left";
            (properties[posx] = properties.x + "px"), delete properties.x;
          }
          if (void 0 !== properties.y) {
            var posy = "auto" !== element.css("bottom") ? "bottom" : "top";
            (properties[posy] = properties.y + "px"), delete properties.y;
          }
        }
      return properties;
    }
    var _cssanim = null;
    (window.CTween = {}),
      (CTween.setPos = function (element, pos) {
        element.css(transPos(element, pos));
      }),
      (CTween.animate = function (element, duration, properties, options) {
        if (
          (null == _cssanim && (_cssanim = window._cssanim),
          (options = options || {}),
          transPos(element, properties),
          _cssanim)
        ) {
          var tween = new CSSTween(
            element,
            duration,
            options.delay,
            EaseDic[options.ease]
          );
          return (
            options.transProperty &&
              (tween.transProperty = options.transProperty),
            tween.to(function () {
              element.css(properties);
            }),
            options.complete &&
              tween.onComplete(options.complete, options.target),
            tween.start(),
            (tween.stop = tween.reset),
            tween
          );
        }
        var onCl;
        return (
          options.delay && element.delay(options.delay),
          options.complete &&
            (onCl = function () {
              options.complete.call(options.target);
            }),
          element
            .stop(!0)
            .animate(properties, duration, options.ease || "linear", onCl),
          element
        );
      }),
      (CTween.fadeOut = function (target, duration, remove) {
        var options = {};
        remove === !0
          ? (options.complete = function () {
              target.remove();
            })
          : 2 === remove &&
            (options.complete = function () {
              target.css("display", "none");
            }),
          CTween.animate(target, duration || 1e3, { opacity: 0 }, options);
      }),
      (CTween.fadeIn = function (target, duration, reset) {
        reset !== !1 && target.css("opacity", 0).css("display", ""),
          CTween.animate(target, duration || 1e3, { opacity: 1 });
      });
  })(),
  (function () {
    window.EaseDic = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
      easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
      easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
      easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
      easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
      easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
      easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
      easeOutExpo: "cubic-bezier(.19,1,.22,1)",
      easeInOutExpo: "cubic-bezier(1,0,0,1)",
      easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
      easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
      easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
      easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
      easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
      easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
      easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
      easeOutQuint: "cubic-bezier(.23,1,.32,1)",
      easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
      easeInSine: "cubic-bezier(.47,0,.745,.715)",
      easeOutSine: "cubic-bezier(.39,.575,.565,1)",
      easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
      easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
      easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
      easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
    };
  })(),
  (function () {
    "use strict";
    window.MSAligner = function (type, $container, $img) {
      (this.$container = $container),
        (this.$img = $img),
        (this.type = type || "stretch"),
        (this.widthOnly = !1),
        (this.heightOnly = !1);
    };
    var p = MSAligner.prototype;
    (p.init = function (w, h) {
      switch (
        ((this.baseWidth = w),
        (this.baseHeight = h),
        (this.imgRatio = w / h),
        (this.imgRatio2 = h / w),
        this.type)
      ) {
        case "tile":
          this.$container.css(
            "background-image",
            "url(" + this.$img.attr("src") + ")"
          ),
            this.$img.remove();
          break;
        case "center":
          this.$container.css(
            "background-image",
            "url(" + this.$img.attr("src") + ")"
          ),
            this.$container.css({
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }),
            this.$img.remove();
          break;
        case "stretch":
          this.$img.css({ width: "100%", height: "100%" });
          break;
        case "fill":
        case "fit":
          (this.needAlign = !0), this.align();
      }
    }),
      (p.align = function () {
        if (this.needAlign) {
          var cont_w = this.$container[0].offsetWidth,
            cont_h = this.$container[0].offsetHeight,
            contRatio = cont_w / cont_h;
          "fill" == this.type
            ? this.imgRatio < contRatio
              ? (this.$img.width(cont_w),
                this.$img.height(cont_w * this.imgRatio2))
              : (this.$img.height(cont_h),
                this.$img.width(cont_h * this.imgRatio))
            : "fit" == this.type &&
              (this.imgRatio < contRatio
                ? (this.$img.height(cont_h),
                  this.$img.width(cont_h * this.imgRatio))
                : (this.$img.width(cont_w),
                  this.$img.height(cont_w * this.imgRatio2))),
            this.setMargin();
        }
      }),
      (p.setMargin = function () {
        var cont_w = this.$container[0].offsetWidth,
          cont_h = this.$container[0].offsetHeight;
        this.$img.css(
          "margin-top",
          (cont_h - this.$img[0].offsetHeight) / 2 + "px"
        ),
          this.$img.css(
            "margin-left",
            (cont_w - this.$img[0].offsetWidth) / 2 + "px"
          );
      });
  })()
  /**
   * CSS pointer-events polyfill
   * Adds support for `pointer-events: none;` for browsers not supporting this property
   * Requires jQuery@~1.9
   *
   * @copyright Sebastian Langer 2016
   * @license MIT
   * @author Sebastian Langer <sl@scn.cx>
   */,
  (function ($) {
    var Polyfill = function (userOptions) {
      (this.options = $.extend({}, Polyfill.defaultOptions, userOptions)),
        (this.isEnabled = !1),
        (this.options.forcePolyfill || !this.supportsPointerEvents()) &&
          (this.registerEvents(), (this.isEnabled = !0));
    };
    (Polyfill.defaultOptions = {
      forcePolyfill: !1,
      selector: "*",
      listenOn: ["click", "dblclick", "mousedown", "mouseup"],
      pointerEventsNoneClass: null,
      pointerEventsAllClass: null,
      eventNamespace: "pointer-events-polyfill",
    }),
      (Polyfill.prototype.registerEvents = function () {
        $(document).on(
          this.getEventNames(),
          this.options.selector,
          this.onElementClick.bind(this)
        );
      }),
      (Polyfill.prototype.getEventNames = function () {
        var eventNamespace = this.options.eventNamespace
          ? "." + this.options.eventNamespace
          : "";
        return (
          this.options.listenOn.join(eventNamespace + " ") + eventNamespace
        );
      }),
      (Polyfill.prototype.supportsPointerEvents = function () {
        var style = document.createElement("a").style;
        return (
          (style.cssText = "pointer-events:auto"),
          "auto" === style.pointerEvents
        );
      }),
      (Polyfill.prototype.isClickThrough = function ($el) {
        var elPointerEventsCss = $el.css("pointer-events");
        return 0 === $el.length ||
          "all" === elPointerEventsCss ||
          $el.is(":root") ||
          $el.hasClass(this.options.pointerEventsAllClass)
          ? !1
          : "none" === elPointerEventsCss ||
            $el.hasClass(this.options.pointerEventsNoneClass) ||
            this.isClickThrough($el.parent())
          ? !0
          : !1;
      }),
      (Polyfill.prototype.onElementClick = function (e) {
        var $elOrg = $(e.target);
        if (!this.isClickThrough($elOrg)) return !0;
        $elOrg.hide();
        var elBelow = document.elementFromPoint(e.clientX, e.clientY);
        return (
          (e.target = elBelow),
          $(elBelow).trigger(e),
          "A" === elBelow.tagName &&
            (2 === e.which
              ? window.open(elBelow.getAttribute("href"), "_blank")
              : elBelow.click()),
          $elOrg.show(),
          !1
        );
      }),
      (Polyfill.prototype.destroy = function () {
        $(document).off(this.getEventNames()), (this.isEnabled = !1);
      }),
      (window.pointerEventsPolyfill = function (userOptions) {
        return new Polyfill(userOptions);
      });
  })(jQuery),
  (function () {
    "use strict";
    var _options = {
        bouncing: !0,
        snapping: !1,
        snapsize: null,
        friction: 0.05,
        outFriction: 0.05,
        outAcceleration: 0.09,
        minValidDist: 0.3,
        snappingMinSpeed: 2,
        paging: !1,
        endless: !1,
        maxSpeed: 160,
      },
      Controller = function (min, max, options) {
        if (null === max || null === min)
          throw new Error("Max and Min values are required.");
        this.options = options || {};
        for (var key in _options)
          key in this.options || (this.options[key] = _options[key]);
        (this._max_value = max),
          (this._min_value = min),
          (this.value = min),
          (this.end_loc = min),
          (this.current_snap = this.getSnapNum(min)),
          (this.__extrStep = 0),
          (this.__extraMove = 0),
          (this.__animID = -1);
      },
      p = Controller.prototype;
    (p.changeTo = function (value, animate, speed, snap_num, dispatch) {
      if (
        ((this.stopped = !1),
        this._internalStop(),
        (value = this._checkLimits(value)),
        (speed = Math.abs(speed || 0)),
        this.options.snapping &&
          ((snap_num = snap_num || this.getSnapNum(value)),
          dispatch !== !1 && this._callsnapChange(snap_num),
          (this.current_snap = snap_num)),
        animate)
      ) {
        this.animating = !0;
        var self = this,
          active_id = ++self.__animID,
          amplitude = value - self.value,
          timeStep = 0,
          targetPosition = value,
          animFrict = 1 - self.options.friction,
          timeconst =
            animFrict +
            ((speed - 20) * animFrict * 1.3) / self.options.maxSpeed,
          tick = function () {
            if (active_id === self.__animID) {
              var dis = value - self.value;
              if (
                !(Math.abs(dis) > self.options.minValidDist && self.animating)
              )
                return (
                  self.animating &&
                    ((self.value = value), self._callrenderer()),
                  (self.animating = !1),
                  active_id !== self.__animID && (self.__animID = -1),
                  void self._callonComplete("anim")
                );
              window.requestAnimationFrame(tick),
                (self.value =
                  targetPosition -
                  amplitude * Math.exp(-++timeStep * timeconst)),
                self._callrenderer();
            }
          };
        return void tick();
      }
      (this.value = value), this._callrenderer();
    }),
      (p.drag = function (move) {
        this.start_drag &&
          ((this.drag_start_loc = this.value), (this.start_drag = !1)),
          (this.animating = !1),
          (this._deceleration = !1),
          (this.value -= move),
          !this.options.endless &&
          (this.value > this._max_value || this.value < 0)
            ? this.options.bouncing
              ? ((this.__isout = !0), (this.value += 0.6 * move))
              : (this.value =
                  this.value > this._max_value ? this._max_value : 0)
            : !this.options.endless &&
              this.options.bouncing &&
              (this.__isout = !1),
          this._callrenderer();
      }),
      (p.push = function (speed) {
        if (
          ((this.stopped = !1),
          this.options.snapping &&
            Math.abs(speed) <= this.options.snappingMinSpeed)
        )
          return void this.cancel();
        if (
          ((this.__speed = speed),
          (this.__startSpeed = speed),
          (this.end_loc = this._calculateEnd()),
          this.options.snapping)
        ) {
          var snap_loc = this.getSnapNum(this.value),
            end_snap = this.getSnapNum(this.end_loc);
          if (this.options.paging)
            return (
              (snap_loc = this.getSnapNum(this.drag_start_loc)),
              (this.__isout = !1),
              void (speed > 0
                ? this.gotoSnap(snap_loc + 1, !0, speed)
                : this.gotoSnap(snap_loc - 1, !0, speed))
            );
          if (snap_loc === end_snap) return void this.cancel();
          this._callsnapChange(end_snap), (this.current_snap = end_snap);
        }
        (this.animating = !1),
          (this.__needsSnap =
            this.options.endless ||
            (this.end_loc > this._min_value && this.end_loc < this._max_value)),
          this.options.snapping &&
            this.__needsSnap &&
            (this.__extraMove = this._calculateExtraMove(this.end_loc)),
          this._startDecelaration();
      }),
      (p.bounce = function (speed) {
        this.animating ||
          ((this.stopped = !1),
          (this.animating = !1),
          (this.__speed = speed),
          (this.__startSpeed = speed),
          (this.end_loc = this._calculateEnd()),
          this._startDecelaration());
      }),
      (p.stop = function () {
        (this.stopped = !0), this._internalStop();
      }),
      (p.cancel = function () {
        (this.start_drag = !0),
          this.__isout
            ? ((this.__speed = 4e-4), this._startDecelaration())
            : this.options.snapping &&
              this.gotoSnap(this.getSnapNum(this.value), !0);
      }),
      (p.renderCallback = function (listener, ref) {
        this.__renderHook = { fun: listener, ref: ref };
      }),
      (p.snappingCallback = function (listener, ref) {
        this.__snapHook = { fun: listener, ref: ref };
      }),
      (p.snapCompleteCallback = function (listener, ref) {
        this.__compHook = { fun: listener, ref: ref };
      }),
      (p.getSnapNum = function (value) {
        return Math.floor(
          (value + this.options.snapsize / 2) / this.options.snapsize
        );
      }),
      (p.nextSnap = function () {
        this._internalStop();
        var curr_snap = this.getSnapNum(this.value);
        !this.options.endless &&
        (curr_snap + 1) * this.options.snapsize > this._max_value
          ? ((this.__speed = 8),
            (this.__needsSnap = !1),
            this._startDecelaration())
          : this.gotoSnap(curr_snap + 1, !0);
      }),
      (p.prevSnap = function () {
        this._internalStop();
        var curr_snap = this.getSnapNum(this.value);
        !this.options.endless &&
        (curr_snap - 1) * this.options.snapsize < this._min_value
          ? ((this.__speed = -8),
            (this.__needsSnap = !1),
            this._startDecelaration())
          : this.gotoSnap(curr_snap - 1, !0);
      }),
      (p.gotoSnap = function (snap_num, animate, speed) {
        this.changeTo(
          snap_num * this.options.snapsize,
          animate,
          speed,
          snap_num
        );
      }),
      (p.destroy = function () {
        this._internalStop(),
          (this.__renderHook = null),
          (this.__snapHook = null),
          (this.__compHook = null);
      }),
      (p._internalStop = function () {
        (this.start_drag = !0),
          (this.animating = !1),
          (this._deceleration = !1),
          (this.__extrStep = 0);
      }),
      (p._calculateExtraMove = function (value) {
        var m = value % this.options.snapsize;
        return m < this.options.snapsize / 2 ? -m : this.options.snapsize - m;
      }),
      (p._calculateEnd = function (step) {
        for (
          var temp_speed = this.__speed, temp_value = this.value, i = 0;
          Math.abs(temp_speed) > this.options.minValidDist;

        )
          (temp_value += temp_speed),
            (temp_speed *= this.options.friction),
            i++;
        return step ? i : temp_value;
      }),
      (p._checkLimits = function (value) {
        return this.options.endless
          ? value
          : value < this._min_value
          ? this._min_value
          : value > this._max_value
          ? this._max_value
          : value;
      }),
      (p._callrenderer = function () {
        this.__renderHook &&
          this.__renderHook.fun.call(this.__renderHook.ref, this, this.value);
      }),
      (p._callsnapChange = function (targetSnap) {
        this.__snapHook &&
          targetSnap !== this.current_snap &&
          this.__snapHook.fun.call(
            this.__snapHook.ref,
            this,
            targetSnap,
            targetSnap - this.current_snap
          );
      }),
      (p._callonComplete = function (type) {
        this.__compHook &&
          !this.stopped &&
          this.__compHook.fun.call(
            this.__compHook.ref,
            this,
            this.current_snap,
            type
          );
      }),
      (p._computeDeceleration = function () {
        if (this.options.snapping && this.__needsSnap) {
          var xtr_move =
            ((this.__startSpeed - this.__speed) / this.__startSpeed) *
            this.__extraMove;
          (this.value += this.__speed + xtr_move - this.__extrStep),
            (this.__extrStep = xtr_move);
        } else this.value += this.__speed;
        if (
          ((this.__speed *= this.options.friction),
          this.options.endless ||
            this.options.bouncing ||
            (this.value <= this._min_value
              ? ((this.value = this._min_value), (this.__speed = 0))
              : this.value >= this._max_value &&
                ((this.value = this._max_value), (this.__speed = 0))),
          this._callrenderer(),
          !this.options.endless && this.options.bouncing)
        ) {
          var out_value = 0;
          this.value < this._min_value
            ? (out_value = this._min_value - this.value)
            : this.value > this._max_value &&
              (out_value = this._max_value - this.value),
            (this.__isout = Math.abs(out_value) >= this.options.minValidDist),
            this.__isout &&
              (this.__speed * out_value <= 0
                ? (this.__speed += out_value * this.options.outFriction)
                : (this.__speed = out_value * this.options.outAcceleration));
        }
      }),
      (p._startDecelaration = function () {
        if (!this._deceleration) {
          this._deceleration = !0;
          var self = this,
            tick = function () {
              self._deceleration &&
                (self._computeDeceleration(),
                Math.abs(self.__speed) > self.options.minValidDist ||
                self.__isout
                  ? window.requestAnimationFrame(tick)
                  : ((self._deceleration = !1),
                    (self.__isout = !1),
                    (self.value =
                      self.__needsSnap &&
                      self.options.snapping &&
                      !self.options.paging
                        ? self._checkLimits(self.end_loc + self.__extraMove)
                        : Math.round(self.value)),
                    self._callrenderer(),
                    self._callonComplete("decel")));
            };
          tick();
        }
      }),
      (window.Controller = Controller);
  })(),
  (function (window, document, $) {
    window.MSLayerController = function (slide) {
      (this.slide = slide),
        (this.slider = slide.slider),
        (this.layers = []),
        (this.layersCount = 0),
        (this.preloadCount = 0),
        (this.$layers = $("<div></div>").addClass("ms-slide-layers")),
        (this.$staticLayers = $("<div></div>").addClass("ms-static-layers")),
        (this.$fixedLayers = $("<div></div>").addClass("ms-fixed-layers")),
        (this.$animLayers = $("<div></div>").addClass("ms-anim-layers"));
    };
    var p = MSLayerController.prototype;
    (p.addLayer = function (layer) {
      switch (
        ((layer.slide = this.slide),
        (layer.controller = this),
        layer.$element.data("position"))
      ) {
        case "static":
          (this.hasStaticLayer = !0),
            layer.$element.appendTo(this.$staticLayers);
          break;
        case "fixed":
          (this.hasFixedLayer = !0), layer.$element.appendTo(this.$fixedLayers);
          break;
        default:
          layer.$element.appendTo(this.$animLayers);
      }
      layer.create(),
        this.layers.push(layer),
        this.layersCount++,
        layer.parallax && (this.hasParallaxLayer = !0),
        layer.needPreload && this.preloadCount++;
    }),
      (p.create = function () {
        this.slide.$element.append(this.$layers),
          this.$layers.append(this.$animLayers),
          this.hasStaticLayer && this.$layers.append(this.$staticLayers),
          "center" == this.slider.options.layersMode &&
            (this.$layers.css("max-width", this.slider.options.width + "px"),
            this.hasFixedLayer &&
              this.$fixedLayers.css(
                "max-width",
                this.slider.options.width + "px"
              ));
      }),
      (p.loadLayers = function (callback) {
        if (((this._onReadyCallback = callback), 0 === this.preloadCount))
          return void this._onlayersReady();
        for (var i = 0; i !== this.layersCount; ++i)
          this.layers[i].needPreload && this.layers[i].loadImage();
      }),
      (p.prepareToShow = function () {
        this.hasParallaxLayer && this._enableParallaxEffect(),
          this.hasFixedLayer &&
            this.$fixedLayers.prependTo(this.slide.view.$element);
      }),
      (p.showLayers = function () {
        this.layersHideTween && this.layersHideTween.stop(!0),
          this.fixedLayersHideTween && this.fixedLayersHideTween.stop(!0),
          this._resetLayers(),
          this.$animLayers.css("opacity", "").css("display", ""),
          this.hasFixedLayer &&
            this.$fixedLayers.css("opacity", "").css("display", ""),
          this.ready &&
            (this._initLayers(), this._locateLayers(), this._startLayers());
      }),
      (p.hideLayers = function () {
        if (this.slide.selected || this.slider.options.instantStartLayers) {
          var that = this;
          (that.layersHideTween = CTween.animate(
            this.$animLayers,
            500,
            { opacity: 0 },
            {
              complete: function () {
                that._resetLayers();
              },
            }
          )),
            this.hasFixedLayer &&
              (this.fixedLayersHideTween = CTween.animate(
                this.$fixedLayers,
                500,
                { opacity: 0 },
                {
                  complete: function () {
                    that.$fixedLayers.detach();
                  },
                }
              )),
            this.hasParallaxLayer && this._disableParallaxEffect();
        }
      }),
      (p.animHideLayers = function () {
        if (this.ready)
          for (var i = 0; i !== this.layersCount; ++i) this.layers[i].hide();
      }),
      (p.setSize = function (width, height, hard) {
        if (
          (this.ready &&
            (this.slide.selected || this.hasStaticLayer) &&
            (hard && this._initLayers(!0),
            this._locateLayers(!this.slide.selected)),
          this.slider.options.autoHeight && this.updateHeight(),
          "center" == this.slider.options.layersMode)
        ) {
          var left =
            Math.max(0, (width - this.slider.options.width) / 2) + "px";
          (this.$layers[0].style.left = left),
            (this.$fixedLayers[0].style.left = left);
        }
      }),
      (p.updateHeight = function () {}),
      (p._onlayersReady = function () {
        (this.ready = !0),
          this.hasStaticLayer &&
            !this.slide.isSleeping &&
            this._initLayers(!1, !0),
          this._onReadyCallback.call(this.slide);
      }),
      (p.onSlideSleep = function () {}),
      (p.onSlideWakeup = function () {
        this.hasStaticLayer && this.ready && this._initLayers(!1, !0);
      }),
      (p.getLayerById = function (layerId) {
        if (!layerId) return null;
        for (var i = 0; i < this.layersCount; ++i)
          if (this.layers[i].id === layerId) return this.layers[i];
        return null;
      }),
      (p.destroy = function () {
        this.slide.selected &&
          this.hasParallaxLayer &&
          this._disableParallaxEffect();
        for (var i = 0; i < this.layersCount; ++i)
          this.layers[i].$element.stop(!0).remove();
        this.$layers.remove(),
          this.$staticLayers.remove(),
          this.$fixedLayers.remove(),
          this.$animLayers.remove();
      }),
      (p._startLayers = function () {
        for (var i = 0; i !== this.layersCount; ++i) {
          var layer = this.layers[i];
          layer.waitForAction || layer.start();
        }
      }),
      (p._initLayers = function (force, onlyStatics) {
        if (!((this.init && !force) || this.slider.init_safemode)) {
          this.init = onlyStatics !== !0;
          var i = 0;
          if (onlyStatics && !this.staticsInit)
            for (this.staticsInit = !0; i !== this.layersCount; ++i)
              this.layers[i].staticLayer && this.layers[i].init();
          else if (this.staticsInit && !force)
            for (; i !== this.layersCount; ++i)
              this.layers[i].staticLayer || this.layers[i].init();
          else for (; i !== this.layersCount; ++i) this.layers[i].init();
        }
      }),
      (p._locateLayers = function (onlyStatics) {
        var i = 0;
        if (onlyStatics)
          for (; i !== this.layersCount; ++i)
            this.layers[i].staticLayer && this.layers[i].locate();
        else for (; i !== this.layersCount; ++i) this.layers[i].locate();
      }),
      (p._resetLayers = function () {
        this.$animLayers.css("display", "none").css("opacity", 1);
        for (var i = 0; i !== this.layersCount; ++i) this.layers[i].reset();
      }),
      (p._applyParallax = function (x, y, fast) {
        for (var i = 0; i !== this.layersCount; ++i)
          null != this.layers[i].parallax &&
            this.layers[i].moveParallax(x, y, fast);
      }),
      (p._enableParallaxEffect = function () {
        "swipe" === this.slider.options.parallaxMode
          ? this.slide.view.addEventListener(
              MSViewEvents.SCROLL,
              this._swipeParallaxMove,
              this
            )
          : this.slide.$element
              .on("mousemove", { that: this }, this._mouseParallaxMove)
              .on("mouseleave", { that: this }, this._resetParalax);
      }),
      (p._disableParallaxEffect = function () {
        "swipe" === this.slider.options.parallaxMode
          ? this.slide.view.removeEventListener(
              MSViewEvents.SCROLL,
              this._swipeParallaxMove,
              this
            )
          : this.slide.$element
              .off("mousemove", this._mouseParallaxMove)
              .off("mouseleave", this._resetParalax);
      }),
      (p._resetParalax = function (e) {
        var that = e.data.that;
        that._applyParallax(0, 0);
      }),
      (p._mouseParallaxMove = function (e) {
        var that = e.data.that,
          os = that.slide.$element.offset(),
          slider = that.slider;
        if ("mouse:y-only" !== slider.options.parallaxMode)
          var x = e.pageX - os.left - that.slide.__width / 2;
        else var x = 0;
        if ("mouse:x-only" !== slider.options.parallaxMode)
          var y = e.pageY - os.top - that.slide.__height / 2;
        else var y = 0;
        that._applyParallax(-x, -y);
      }),
      (p._swipeParallaxMove = function () {
        var value = this.slide.position - this.slide.view.__contPos;
        "v" === this.slider.options.dir
          ? this._applyParallax(0, value, !0)
          : this._applyParallax(value, 0, !0);
      });
  })(window, document, jQuery),
  (function ($, window) {
    "use strict";
    (window.MSOverlayLayerController = function () {
      MSLayerController.apply(this, arguments);
    }),
      MSOverlayLayerController.extend(MSLayerController);
    var p = MSOverlayLayerController.prototype,
      _super = MSLayerController.prototype;
    (p.addLayer = function (layer) {
      var showOnSlides = layer.$element.data("show-on"),
        hideOnSlides = layer.$element.data("hide-on");
      hideOnSlides &&
        (layer.hideOnSlides = hideOnSlides.replace(/\s+/g, "").split(",")),
        showOnSlides &&
          (layer.showOnSlides = showOnSlides.replace(/\s+/g, "").split(",")),
        _super.addLayer.apply(this, arguments);
    }),
      (p.create = function () {
        _super.create.apply(this, arguments),
          this.slider.api.addEventListener(
            MSSliderEvent.CHANGE_START,
            this.checkLayers.bind(this)
          );
      }),
      (p.checkLayers = function () {
        if (this.ready)
          for (var i = 0; i !== this.layersCount; ++i) {
            var layer = this.layers[i];
            layer.waitForAction ||
              (this._checkForShow(layer) ? layer.start() : layer.hide());
          }
      }),
      (p._enableParallaxEffect = function () {
        this.slider.view.$element
          .on("mousemove", { that: this }, this._mouseParallaxMove)
          .on("mouseleave", { that: this }, this._resetParalax);
      }),
      (p._disableParallaxEffect = function () {
        this.slider.view.$element
          .off("mousemove", this._mouseParallaxMove)
          .off("mouseleave", this._resetParalax);
      }),
      (p._startLayers = function () {
        for (var i = 0; i !== this.layersCount; ++i) {
          var layer = this.layers[i];
          this._checkForShow(layer) && !layer.waitForAction && layer.start();
        }
      }),
      (p._checkForShow = function (layer) {
        var slideId = this.slider.api.currentSlide.id,
          layerHideOn = layer.hideOnSlides,
          layerShowOn = layer.showOnSlides;
        return layerShowOn
          ? !!slideId && -1 !== layerShowOn.indexOf(slideId)
          : !slideId ||
              !layerHideOn ||
              (layerHideOn.length && -1 === layerHideOn.indexOf(slideId));
      });
  })(jQuery, window, document),
  (function ($, window) {
    "use strict";
    window.MSOverlayLayers = function (slider) {
      this.slider = slider;
    };
    var p = MSOverlayLayers.prototype;
    (p.setupLayerController = function () {
      (this.layerController = new MSOverlayLayerController(this)),
        this.slider.api.addEventListener(
          MSSliderEvent.RESIZE,
          this.setSize.bind(this)
        ),
        this.slider.api.addEventListener(
          MSSliderEvent.CHANGE_START,
          this.setSize.bind(this)
        ),
        this.setSize();
    }),
      (p.setSize = function () {
        (this.__width = this.$element.width()),
          (this.__height = this.$element.height()),
          this.layerController.setSize(this.__width, this.__height);
      }),
      (p.create = function () {
        this.layerController.create(),
          this.layerController.loadLayers(this._onLayersLoad),
          this.layerController.prepareToShow(),
          window.pointerEventsPolyfill &&
            window.pointerEventsPolyfill({
              selector:
                "#" + this.slider.$element.attr("id") + " .ms-overlay-layers",
              forcePolyfill: !1,
            });
      }),
      (p.getHeight = function () {
        return this.slider.api.currentSlide.getHeight();
      }),
      (p.destroy = function () {
        this.layerController.destroy();
      }),
      (p._onLayersLoad = function () {
        (this.ready = !0),
          (this.selected = !0),
          (this.layersLoaded = !0),
          this.setSize(),
          this.layerController.showLayers();
      });
  })(jQuery, window, document),
  (function () {
    window.MSLayerEffects = {};
    var installed,
      _fade = { opacity: 0 };
    MSLayerEffects.setup = function () {
      if (!installed) {
        installed = !0;
        var st = MSLayerEffects,
          transform_css = window._jcsspfx + "Transform",
          transform_orig_css = window._jcsspfx + "TransformOrigin",
          o = window.MSBrowserInfo.opera;
        (_2d = window._css2d && window._cssanim && !o),
          (st.defaultValues = {
            left: 0,
            top: 0,
            opacity: isMSIE("<=9") ? 1 : "",
            right: 0,
            bottom: 0,
          }),
          (st.defaultValues[transform_css] = ""),
          (st.rf = 1),
          (st.presetEffParams = {
            random: "30|300",
            long: 300,
            short: 30,
            false: !1,
            true: !0,
            tl: "top left",
            bl: "bottom left",
            tr: "top right",
            br: "bottom right",
            rt: "top right",
            lb: "bottom left",
            lt: "top left",
            rb: "bottom right",
            t: "top",
            b: "bottom",
            r: "right",
            l: "left",
            c: "center",
          }),
          (st.fade = function () {
            return _fade;
          }),
          (st.left = _2d
            ? function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] = "translateX(" + -dist * st.rf + "px)"), r
                );
              }
            : function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (r.left = -dist * st.rf + "px"), r;
              }),
          (st.right = _2d
            ? function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] = "translateX(" + dist * st.rf + "px)"), r
                );
              }
            : function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (r.left = dist * st.rf + "px"), r;
              }),
          (st.top = _2d
            ? function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] = "translateY(" + -dist * st.rf + "px)"), r
                );
              }
            : function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (r.top = -dist * st.rf + "px"), r;
              }),
          (st.bottom = _2d
            ? function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] = "translateY(" + dist * st.rf + "px)"), r
                );
              }
            : function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (r.top = dist * st.rf + "px"), r;
              }),
          (st.from = _2d
            ? function (leftdis, topdis, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] =
                    "translateX(" +
                    leftdis * st.rf +
                    "px) translateY(" +
                    topdis * st.rf +
                    "px)"),
                  r
                );
              }
            : function (leftdis, topdis, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r.top = topdis * st.rf + "px"),
                  (r.left = leftdis * st.rf + "px"),
                  r
                );
              }),
          (st.rotate = _2d
            ? function (deg, orig) {
                var r = { opacity: 0 };
                return (
                  (r[transform_css] = " rotate(" + deg + "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function () {
                return _fade;
              }),
          (st.rotateleft = _2d
            ? function (deg, dist, orig, fade) {
                var r = st.left(dist, fade);
                return (
                  (r[transform_css] += " rotate(" + deg + "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (deg, dist, orig, fade) {
                return st.left(dist, fade);
              }),
          (st.rotateright = _2d
            ? function (deg, dist, orig, fade) {
                var r = st.right(dist, fade);
                return (
                  (r[transform_css] += " rotate(" + deg + "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (deg, dist, orig, fade) {
                return st.right(dist, fade);
              }),
          (st.rotatetop = _2d
            ? function (deg, dist, orig, fade) {
                var r = st.top(dist, fade);
                return (
                  (r[transform_css] += " rotate(" + deg + "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (deg, dist, orig, fade) {
                return st.top(dist, fade);
              }),
          (st.rotatebottom = _2d
            ? function (deg, dist, orig, fade) {
                var r = st.bottom(dist, fade);
                return (
                  (r[transform_css] += " rotate(" + deg + "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (deg, dist, orig, fade) {
                return st.bottom(dist, fade);
              }),
          (st.rotatefrom = _2d
            ? function (deg, leftdis, topdis, orig, fade) {
                var r = st.from(leftdis, topdis, fade);
                return (
                  (r[transform_css] += " rotate(" + deg + "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (deg, leftdis, topdis, orig, fade) {
                return st.from(leftdis, topdis, fade);
              }),
          (st.skewleft = _2d
            ? function (deg, dist, fade) {
                var r = st.left(dist, fade);
                return (r[transform_css] += " skewX(" + deg + "deg)"), r;
              }
            : function (deg, dist, fade) {
                return st.left(dist, fade);
              }),
          (st.skewright = _2d
            ? function (deg, dist, fade) {
                var r = st.right(dist, fade);
                return (r[transform_css] += " skewX(" + -deg + "deg)"), r;
              }
            : function (deg, dist, fade) {
                return st.right(dist, fade);
              }),
          (st.skewtop = _2d
            ? function (deg, dist, fade) {
                var r = st.top(dist, fade);
                return (r[transform_css] += " skewY(" + deg + "deg)"), r;
              }
            : function (deg, dist, fade) {
                return st.top(dist, fade);
              }),
          (st.skewbottom = _2d
            ? function (deg, dist, fade) {
                var r = st.bottom(dist, fade);
                return (r[transform_css] += " skewY(" + -deg + "deg)"), r;
              }
            : function (deg, dist, fade) {
                return st.bottom(dist, fade);
              }),
          (st.scale = _2d
            ? function (x, y, orig, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, orig, fade) {
                return fade === !1 ? {} : { opacity: 0 };
              }),
          (st.scaleleft = _2d
            ? function (x, y, dist, orig, fade) {
                var r = st.left(dist, fade);
                return (
                  (r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, dist, orig, fade) {
                return st.left(dist, fade);
              }),
          (st.scaleright = _2d
            ? function (x, y, dist, orig, fade) {
                var r = st.right(dist, fade);
                return (
                  (r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, dist, orig, fade) {
                return st.right(dist, fade);
              }),
          (st.scaletop = _2d
            ? function (x, y, dist, orig, fade) {
                var r = st.top(dist, fade);
                return (
                  (r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, dist, orig, fade) {
                return st.top(dist, fade);
              }),
          (st.scalebottom = _2d
            ? function (x, y, dist, orig, fade) {
                var r = st.bottom(dist, fade);
                return (
                  (r[transform_css] = " scaleX(" + x + ") scaleY(" + y + ")"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, dist, orig, fade) {
                return st.bottom(dist, fade);
              }),
          (st.scalefrom = _2d
            ? function (x, y, leftdis, topdis, orig, fade) {
                var r = st.from(leftdis, topdis, fade);
                return (
                  (r[transform_css] += " scaleX(" + x + ") scaleY(" + y + ")"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, leftdis, topdis, orig, fade) {
                return st.from(leftdis, topdis, fade);
              }),
          (st.rotatescale = _2d
            ? function (deg, x, y, orig, fade) {
                var r = st.scale(x, y, orig, fade);
                return (
                  (r[transform_css] += " rotate(" + deg + "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (deg, x, y, orig, fade) {
                return st.scale(x, y, orig, fade);
              }),
          (st.front = window._css3d
            ? function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] =
                    "perspective(2000px) translate3d(0 , 0 ," +
                    dist +
                    "px ) rotate(0.001deg)"),
                  r
                );
              }
            : function () {
                return _fade;
              }),
          (st.back = window._css3d
            ? function (dist, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] =
                    "perspective(2000px) translate3d(0 , 0 ," +
                    -dist +
                    "px ) rotate(0.001deg)"),
                  r
                );
              }
            : function () {
                return _fade;
              }),
          (st.rotatefront = window._css3d
            ? function (deg, dist, orig, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] =
                    "perspective(2000px) translate3d(0 , 0 ," +
                    dist +
                    "px ) rotate(" +
                    (deg || 0.001) +
                    "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function () {
                return _fade;
              }),
          (st.rotateback = window._css3d
            ? function (deg, dist, orig, fade) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  (r[transform_css] =
                    "perspective(2000px) translate3d(0 , 0 ," +
                    -dist +
                    "px ) rotate(" +
                    (deg || 0.001) +
                    "deg)"),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function () {
                return _fade;
              }),
          (st.rotate3dleft = window._css3d
            ? function (x, y, z, dist, orig, fade) {
                var r = st.left(dist, fade);
                return (
                  (r[transform_css] +=
                    (x ? " rotateX(" + x + "deg)" : " ") +
                    (y ? " rotateY(" + y + "deg)" : "") +
                    (z ? " rotateZ(" + z + "deg)" : "")),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, z, dist, orig, fade) {
                return st.left(dist, fade);
              }),
          (st.rotate3dright = window._css3d
            ? function (x, y, z, dist, orig, fade) {
                var r = st.right(dist, fade);
                return (
                  (r[transform_css] +=
                    (x ? " rotateX(" + x + "deg)" : " ") +
                    (y ? " rotateY(" + y + "deg)" : "") +
                    (z ? " rotateZ(" + z + "deg)" : "")),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, z, dist, orig, fade) {
                return st.right(dist, fade);
              }),
          (st.rotate3dtop = window._css3d
            ? function (x, y, z, dist, orig, fade) {
                var r = st.top(dist, fade);
                return (
                  (r[transform_css] +=
                    (x ? " rotateX(" + x + "deg)" : " ") +
                    (y ? " rotateY(" + y + "deg)" : "") +
                    (z ? " rotateZ(" + z + "deg)" : "")),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, z, dist, orig, fade) {
                return st.top(dist, fade);
              }),
          (st.rotate3dbottom = window._css3d
            ? function (x, y, z, dist, orig, fade) {
                var r = st.bottom(dist, fade);
                return (
                  (r[transform_css] +=
                    (x ? " rotateX(" + x + "deg)" : " ") +
                    (y ? " rotateY(" + y + "deg)" : "") +
                    (z ? " rotateZ(" + z + "deg)" : "")),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, z, dist, orig, fade) {
                return st.bottom(dist, fade);
              }),
          (st.rotate3dfront = window._css3d
            ? function (x, y, z, dist, orig, fade) {
                var r = st.front(dist, fade);
                return (
                  (r[transform_css] +=
                    (x ? " rotateX(" + x + "deg)" : " ") +
                    (y ? " rotateY(" + y + "deg)" : "") +
                    (z ? " rotateZ(" + z + "deg)" : "")),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, z, dist, orig, fade) {
                return st.front(dist, fade);
              }),
          (st.rotate3dback = window._css3d
            ? function (x, y, z, dist, orig, fade) {
                var r = st.back(dist, fade);
                return (
                  (r[transform_css] +=
                    (x ? " rotateX(" + x + "deg)" : " ") +
                    (y ? " rotateY(" + y + "deg)" : "") +
                    (z ? " rotateZ(" + z + "deg)" : "")),
                  orig && (r[transform_orig_css] = orig),
                  r
                );
              }
            : function (x, y, z, dist, orig, fade) {
                return st.back(dist, fade);
              }),
          (st.t = window._css3d
            ? function (
                fade,
                tx,
                ty,
                tz,
                r,
                rx,
                ry,
                rz,
                scx,
                scy,
                skx,
                sky,
                ox,
                oy,
                oz
              ) {
                var _r = fade === !1 ? {} : { opacity: 0 },
                  transform = "perspective(2000px) ";
                "n" !== tx &&
                  (transform += "translateX(" + tx * st.rf + "px) "),
                  "n" !== ty &&
                    (transform += "translateY(" + ty * st.rf + "px) "),
                  "n" !== tz &&
                    (transform += "translateZ(" + tz * st.rf + "px) "),
                  "n" !== r && (transform += "rotate(" + r + "deg) "),
                  "n" !== rx && (transform += "rotateX(" + rx + "deg) "),
                  "n" !== ry && (transform += "rotateY(" + ry + "deg) "),
                  "n" !== rz && (transform += "rotateZ(" + rz + "deg) "),
                  "n" !== skx && (transform += "skewX(" + skx + "deg) "),
                  "n" !== sky && (transform += "skewY(" + sky + "deg) "),
                  "n" !== scx && (transform += "scaleX(" + scx + ") "),
                  "n" !== scy && (transform += "scaleY(" + scy + ")"),
                  (_r[transform_css] = transform);
                var trans_origin = "";
                return (
                  (trans_origin += "n" !== ox ? ox + "% " : "50% "),
                  (trans_origin += "n" !== oy ? oy + "% " : "50% "),
                  (trans_origin += "n" !== oz ? oz + "px" : ""),
                  (_r[transform_orig_css] = trans_origin),
                  _r
                );
              }
            : function (fade, tx, ty, tz, r) {
                var r = fade === !1 ? {} : { opacity: 0 };
                return (
                  "n" !== tx && (r.left = tx * st.rf + "px"),
                  "n" !== ty && (r.top = ty * st.rf + "px"),
                  r
                );
              });
      }
    };
  })(jQuery),
  (function ($) {
    window.MSLayerElement = function () {
      (this.start_anim = {
        name: "fade",
        duration: 1e3,
        ease: "linear",
        delay: 0,
      }),
        (this.end_anim = { duration: 1e3, ease: "linear" }),
        (this.type = "text"),
        (this.resizable = !0),
        (this.minWidth = -1),
        (this.isVisible = !0),
        (this.__cssConfig = [
          "margin-top",
          "padding-top",
          "margin-bottom",
          "padding-left",
          "margin-right",
          "padding-right",
          "margin-left",
          "padding-bottom",
          "font-size",
          "line-height",
          "width",
          "left",
          "right",
          "top",
          "bottom",
        ]),
        (this.baseStyle = {});
    };
    var p = MSLayerElement.prototype;
    (p.setStartAnim = function (anim) {
      $.extend(this.start_anim, anim),
        $.extend(this.start_anim, this._parseEff(this.start_anim.name)),
        this.$element.css("visibility", "hidden");
    }),
      (p.setEndAnim = function (anim) {
        $.extend(this.end_anim, anim);
      }),
      (p.create = function () {
        if (
          (this.$element.css("display", "none"),
          (this.resizable = this.$element.data("resize") !== !1),
          (this.fixed = this.$element.data("fixed") === !0),
          void 0 !== this.$element.data("widthlimit") &&
            (this.minWidth = this.$element.data("widthlimit")),
          this.end_anim.name || (this.end_anim.name = this.start_anim.name),
          this.end_anim.time && (this.autoHide = !0),
          (this.staticLayer = "static" === this.$element.data("position")),
          (this.fixedLayer = "fixed" === this.$element.data("position")),
          (this.layersCont = this.controller.$layers),
          this.staticLayer &&
            this.$element.css("display", "").css("visibility", ""),
          void 0 !== this.$element.data("action"))
        ) {
          var slideController = this.slide.slider.slideController;
          this.$element
            .on(
              this.$element.data("action-event") || "click",
              function (event) {
                slideController.runAction($(this).data("action")),
                  event.preventDefault();
              }
            )
            .addClass("ms-action-layer");
        }
        if (
          ($.extend(this.end_anim, this._parseEff(this.end_anim.name)),
          (this.slider = this.slide.slider),
          this.masked &&
            ((this.$mask = $("<div></div>").addClass("ms-layer-mask")),
            this.link
              ? (this.link.wrap(this.$mask), (this.$mask = this.link.parent()))
              : (this.$element.wrap(this.$mask),
                (this.$mask = this.$element.parent())),
            this.maskWidth && this.$mask.width(this.maskWidth),
            this.maskHeight &&
              (this.$mask.height(this.maskHeight),
              -1 === this.__cssConfig.indexOf("height") &&
                this.__cssConfig.push("height"))),
          (this.layerOrigin = this.$element.data("origin")),
          this.slide.slider.options.responsive)
        ) {
          var el = this.$element;
          (this.origin = [
            el.data("phone-origin"),
            el.data("tablet-origin"),
            el.data("origin"),
          ]),
            (this.offsetX = [
              el.data("phone-offset-x"),
              el.data("tablet-offset-x"),
              el.data("offset-x"),
            ]),
            (this.offsetY = [
              el.data("phone-offset-y"),
              el.data("tablet-offset-y"),
              el.data("offset-y"),
            ]),
            (this.relativeScale = el.data("relative-size")),
            (this.hideOn = (el.data("hide-on") || "").split(","));
        } else {
          var layerOrigin = this.layerOrigin;
          if (layerOrigin) {
            var vOrigin = layerOrigin.charAt(0),
              hOrigin = layerOrigin.charAt(1),
              offsetX = this.$element.data("offset-x"),
              offsetY = this.$element.data("offset-y"),
              layerEle = this.masked ? this.$mask[0] : this.$element[0];
            switch ((void 0 === offsetY && (offsetY = 0), vOrigin)) {
              case "t":
                layerEle.style.top = offsetY + "px";
                break;
              case "b":
                layerEle.style.bottom = offsetY + "px";
                break;
              case "m":
                (layerEle.style.top = offsetY + "px"), (this.middleAlign = !0);
            }
            switch ((void 0 === offsetX && (offsetX = 0), hOrigin)) {
              case "l":
                layerEle.style.left = offsetX + "px";
                break;
              case "r":
                layerEle.style.right = offsetX + "px";
                break;
              case "c":
                (layerEle.style.left = offsetX + "px"), (this.centerAlign = !0);
            }
          }
        }
        (this.parallax = this.$element.data("parallax")),
          null != this.parallax &&
            ((this.parallax /= 100),
            (this.$parallaxElement =
              $("<div></div>").addClass("ms-parallax-layer")),
            this.masked
              ? (this.$mask.wrap(this.$parallaxElement),
                (this.$parallaxElement = this.$mask.parent()))
              : this.link
              ? (this.link.wrap(this.$parallaxElement),
                (this.$parallaxElement = this.link.parent()))
              : (this.$element.wrap(this.$parallaxElement),
                (this.$parallaxElement = this.$element.parent())),
            (this._lastParaX = 0),
            (this._lastParaY = 0),
            (this._paraX = 0),
            (this._paraY = 0),
            (this.alignedToBot =
              this.layerOrigin && -1 !== this.layerOrigin.indexOf("b")),
            this.alignedToBot && this.$parallaxElement.css("bottom", 0),
            (this.parallaxRender = window._css3d
              ? this._parallaxCSS3DRenderer
              : window._css2d
              ? this._parallaxCSS2DRenderer
              : this._parallax2DRenderer),
            "swipe" !== this.slider.options.parallaxMode &&
              averta.Ticker.add(this.parallaxRender, this)),
          $.removeDataAttrs(this.$element, ["data-src"]);
      }),
      (p.init = function () {
        this.initialized = !0;
        var value;
        this.$element.css("visibility", "");
        for (var i = 0, l = this.__cssConfig.length; l > i; i++) {
          var key = this.__cssConfig[i];
          if (this._isPosition(key) && this.masked) value = this.$mask.css(key);
          else if (
            "text" !== this.type ||
            "width" !== key ||
            this.masked ||
            this.maskWidth
          ) {
            value = this.$element.css(key);
            var isSize = "width" === key || "height" === key;
            isSize &&
              this.masked &&
              (this.maskWidth && "width" === key
                ? (value = this.maskWidth + "px")
                : this.maskHeight &&
                  "height" === key &&
                  (value = this.maskHeight + "px")),
              isSize &&
                "0px" === value &&
                (value = this.$element.data(key) + "px");
          } else value = this.$element[0].style.width;
          (this.layerOrigin &&
            (("top" === key &&
              -1 === this.layerOrigin.indexOf("t") &&
              -1 === this.layerOrigin.indexOf("m")) ||
              ("bottom" === key && -1 === this.layerOrigin.indexOf("b")) ||
              ("left" === key &&
                -1 === this.layerOrigin.indexOf("l") &&
                -1 === this.layerOrigin.indexOf("c")) ||
              ("right" === key && -1 === this.layerOrigin.indexOf("r")))) ||
            ("auto" != value &&
              "" != value &&
              "normal" != value &&
              (this.baseStyle[key] = parseInt(value)));
        }
        this.middleAlign && (this.baseHeight = this.$element.outerHeight(!1)),
          this.centerAlign && (this.baseWidth = this.$element.outerWidth(!1));
      }),
      (p.updatePosition = function () {
        var bp = this.slide.slider.getActiveBreakpoint();
        if (
          this.lastBp !== bp &&
          ((this.lastBp = bp),
          (this.layerOrigin = this.slide.slider.getResponsiveValue(
            this.origin
          )),
          this.layerOrigin)
        ) {
          var vOrigin = this.layerOrigin.charAt(0),
            hOrigin = this.layerOrigin.charAt(1),
            offsetX = this.slide.slider.getResponsiveValue(this.offsetX),
            offsetY = this.slide.slider.getResponsiveValue(this.offsetY),
            layerEle = this.masked ? this.$mask[0] : this.$element[0];
          switch (
            ((this.middleAlign = !1),
            (this.centerAlign = !1),
            (this.baseStyle.top = void 0),
            (this.baseStyle.left = void 0),
            (this.baseStyle.right = void 0),
            (this.baseStyle.bottom = void 0),
            (layerEle.style.top = ""),
            (layerEle.style.left = ""),
            (layerEle.style.right = ""),
            (layerEle.style.bottom = ""),
            void 0 === offsetY && (offsetY = 0),
            vOrigin)
          ) {
            case "t":
              (layerEle.style.top = offsetY + "px"),
                (this.baseStyle.top = offsetY);
              break;
            case "b":
              (layerEle.style.bottom = offsetY + "px"),
                (this.baseStyle.bottom = offsetY);
              break;
            case "m":
              (layerEle.style.top = offsetY + "px"),
                (this.baseStyle.top = offsetY),
                (this.middleAlign = !0);
          }
          switch ((void 0 === offsetX && (offsetX = 0), hOrigin)) {
            case "l":
              (layerEle.style.left = offsetX + "px"),
                (this.baseStyle.left = offsetX);
              break;
            case "r":
              (layerEle.style.right = offsetX + "px"),
                (this.baseStyle.right = offsetX);
              break;
            case "c":
              (layerEle.style.left = offsetX + "px"),
                (this.baseStyle.left = offsetX),
                (this.centerAlign = !0);
          }
        }
      }),
      (p.locate = function () {
        if (this.slide.ready && this.initialized) {
          this.slide.slider.options.responsive && this.updatePosition();
          var factor,
            isPosition,
            isSize,
            width = parseFloat(this.layersCont.css("width")),
            height = parseFloat(this.layersCont.css("height"));
          !this.staticLayer &&
            "none" === this.$element.css("display") &&
            this.isVisible &&
            this.$element.css("display", "").css("visibility", "hidden"),
            this.staticLayer && this.$element.addClass("ms-hover-active"),
            (factor = this.resizeFactor =
              this.slide.slider.options.responsive && this.relativeScale
                ? width / this.slide.slider.getBreakpointReferenceSize()
                : width / this.slide.slider.options.width);
          var $layerEle = this.masked ? this.$mask : this.$element;
          for (var key in this.baseStyle)
            (isPosition = this._isPosition(key)),
              (isSize = "width" === key || "height" === key),
              (factor = this.fixed && isPosition ? 1 : this.resizeFactor),
              (this.resizable || isPosition) &&
                void 0 !== this.baseStyle[key] &&
                ("top" === key && this.middleAlign
                  ? (($layerEle[0].style.top = "0px"),
                    (this.baseHeight = $layerEle.outerHeight(!1)),
                    ($layerEle[0].style.top =
                      this.baseStyle.top * factor +
                      (height - this.baseHeight) / 2 +
                      "px"))
                  : "left" === key && this.centerAlign
                  ? (($layerEle[0].style.left = "0px"),
                    (this.baseWidth = $layerEle.outerWidth(!1)),
                    ($layerEle[0].style.left =
                      this.baseStyle.left * factor +
                      (width - this.baseWidth) / 2 +
                      "px"))
                  : isPosition && this.masked
                  ? ($layerEle[0].style[key] =
                      this.baseStyle[key] * factor + "px")
                  : isSize &&
                    (("width" === key && this.maskWidth) ||
                      ("height" === key && this.maskHeight))
                  ? ($layerEle[0].style[key] =
                      this.baseStyle[key] * factor + "px")
                  : this.$element.css(
                      key,
                      this.baseStyle[key] * factor + "px"
                    ));
          this.visible(this.minWidth < width),
            this.minWidth < width &&
              this.slide.slider.options.responsive &&
              this.visible(
                -1 ===
                  this.hideOn.indexOf(this.slide.slider.getActiveBreakpoint())
              );
        }
      }),
      (p.start = function () {
        if (!this.isShowing && !this.staticLayer) {
          (this.isShowing = !0), this.$element.removeClass("ms-hover-active");
          var key, base;
          MSLayerEffects.rf = this.resizeFactor;
          var effect_css = MSLayerEffects[this.start_anim.eff_name].apply(
              null,
              this._parseEffParams(this.start_anim.eff_params)
            ),
            start_css_eff = {};
          for (key in effect_css)
            this._checkPosKey(key, effect_css) ||
              (null != MSLayerEffects.defaultValues[key] &&
                (start_css_eff[key] = MSLayerEffects.defaultValues[key]),
              key in this.baseStyle &&
                ((base = this.baseStyle[key]),
                this.middleAlign &&
                  "top" === key &&
                  (base +=
                    (parseInt(this.layersCont.height()) -
                      this.$element.outerHeight(!1)) /
                    2),
                this.centerAlign &&
                  "left" === key &&
                  (base +=
                    (parseInt(this.layersCont.width()) -
                      this.$element.outerWidth(!1)) /
                    2),
                (effect_css[key] = base + parseFloat(effect_css[key]) + "px"),
                (start_css_eff[key] = base + "px")),
              this.$element.css(key, effect_css[key]));
          var that = this;
          clearTimeout(this.to),
            clearTimeout(this.clHide),
            (this.to = setTimeout(function () {
              that.$element.css("visibility", ""),
                that._playAnimation(that.start_anim, start_css_eff);
            }, that.start_anim.delay || 0.01)),
            (this.clTo = setTimeout(function () {
              (that.show_cl = !0), that.$element.addClass("ms-hover-active");
            }, (this.start_anim.delay || 0.01) + this.start_anim.duration + 1)),
            this.autoHide &&
              (clearTimeout(this.hto),
              (this.hto = setTimeout(function () {
                that.hide();
              }, that.end_anim.time)));
        }
      }),
      (p.hide = function () {
        if (!this.staticLayer) {
          this.$element.removeClass("ms-hover-active"), (this.isShowing = !1);
          var effect_css = MSLayerEffects[this.end_anim.eff_name].apply(
            null,
            this._parseEffParams(this.end_anim.eff_params)
          );
          for (key in effect_css)
            this._checkPosKey(key, effect_css) ||
              (key === window._jcsspfx + "TransformOrigin" &&
                this.$element.css(key, effect_css[key]),
              key in this.baseStyle &&
                (effect_css[key] =
                  this.baseStyle[key] + parseFloat(effect_css[key]) + "px"));
          this._playAnimation(this.end_anim, effect_css),
            clearTimeout(this.clHide),
            0 === effect_css.opacity &&
              (this.clHide = setTimeout(
                function () {
                  this.$element.css("visibility", "hidden");
                }.bind(this),
                this.end_anim.duration + 1
              )),
            clearTimeout(this.to),
            clearTimeout(this.hto),
            clearTimeout(this.clTo);
        }
      }),
      (p.reset = function () {
        this.staticLayer ||
          ((this.isShowing = !1),
          (this.$element[0].style.display = "none"),
          this.$element.css("opacity", ""),
          (this.$element[0].style.transitionDuration = ""),
          this.show_tween && this.show_tween.stop(!0),
          clearTimeout(this.to),
          clearTimeout(this.hto));
      }),
      (p.destroy = function () {
        this.reset(), this.$element.remove();
      }),
      (p.visible = function (value) {
        this.isVisible != value &&
          ((this.isVisible = value),
          this.$element.css("display", value ? "" : "none"));
      }),
      (p.moveParallax = function (x, y, fast) {
        (this._paraX = x),
          (this._paraY = y),
          fast &&
            ((this._lastParaX = x),
            (this._lastParaY = y),
            this.parallaxRender());
      }),
      (p._playAnimation = function (animation, css) {
        var options = {};
        animation.ease && (options.ease = animation.ease),
          (options.transProperty = window._csspfx + "transform,opacity"),
          this.show_tween && this.show_tween.stop(!0),
          (this.show_tween = CTween.animate(
            this.$element,
            animation.duration,
            css,
            options
          ));
      }),
      (p._randomParam = function (value) {
        var min = Number(value.slice(0, value.indexOf("|"))),
          max = Number(value.slice(value.indexOf("|") + 1));
        return min + Math.random() * (max - min);
      }),
      (p._parseEff = function (eff_name) {
        var eff_params = [];
        if (-1 !== eff_name.indexOf("(")) {
          var value,
            temp = eff_name.slice(0, eff_name.indexOf("(")).toLowerCase();
          (eff_params = eff_name
            .slice(eff_name.indexOf("(") + 1, -1)
            .replace(/\"|\'|\s/g, "")
            .split(",")),
            (eff_name = temp);
          for (var i = 0, l = eff_params.length; l > i; ++i)
            (value = eff_params[i]),
              value in MSLayerEffects.presetEffParams &&
                (value = MSLayerEffects.presetEffParams[value]),
              (eff_params[i] = value);
        }
        return { eff_name: eff_name, eff_params: eff_params };
      }),
      (p._parseEffParams = function (params) {
        for (var eff_params = [], i = 0, l = params.length; l > i; ++i) {
          var value = params[i];
          "string" == typeof value &&
            -1 !== value.indexOf("|") &&
            (value = this._randomParam(value)),
            (eff_params[i] = value);
        }
        return eff_params;
      }),
      (p._checkPosKey = function (key, style) {
        return "left" === key &&
          !(key in this.baseStyle) &&
          "right" in this.baseStyle
          ? ((style.right = -parseInt(style.left) + "px"),
            delete style.left,
            !0)
          : "top" === key &&
            !(key in this.baseStyle) &&
            "bottom" in this.baseStyle
          ? ((style.bottom = -parseInt(style.top) + "px"), delete style.top, !0)
          : !1;
      }),
      (p._isPosition = function (key) {
        return (
          "top" === key || "left" === key || "bottom" === key || "right" === key
        );
      }),
      (p._parallaxCalc = function () {
        var x_def = this._paraX - this._lastParaX,
          y_def = this._paraY - this._lastParaY;
        (this._lastParaX += x_def / 12),
          (this._lastParaY += y_def / 12),
          Math.abs(x_def) < 0.019 && (this._lastParaX = this._paraX),
          Math.abs(y_def) < 0.019 && (this._lastParaY = this._paraY);
      }),
      (p._parallaxCSS3DRenderer = function () {
        this._parallaxCalc(),
          (this.$parallaxElement[0].style[window._jcsspfx + "Transform"] =
            "translateX(" +
            this._lastParaX * this.parallax +
            "px) translateY(" +
            this._lastParaY * this.parallax +
            "px) translateZ(0)");
      }),
      (p._parallaxCSS2DRenderer = function () {
        this._parallaxCalc(),
          (this.$parallaxElement[0].style[window._jcsspfx + "Transform"] =
            "translateX(" +
            this._lastParaX * this.parallax +
            "px) translateY(" +
            this._lastParaY * this.parallax +
            "px)");
      }),
      (p._parallax2DRenderer = function () {
        this._parallaxCalc(),
          this.alignedToBot
            ? (this.$parallaxElement[0].style.bottom =
                this._lastParaY * this.parallax + "px")
            : (this.$parallaxElement[0].style.top =
                this._lastParaY * this.parallax + "px"),
          (this.$parallaxElement[0].style.left =
            this._lastParaX * this.parallax + "px");
      });
  })(jQuery),
  (function ($) {
    (window.MSImageLayerElement = function () {
      MSLayerElement.call(this),
        (this.needPreload = !0),
        (this.__cssConfig = [
          "width",
          "height",
          "margin-top",
          "padding-top",
          "margin-bottom",
          "padding-left",
          "margin-right",
          "padding-right",
          "margin-left",
          "padding-bottom",
          "left",
          "right",
          "top",
          "bottom",
        ]),
        (this.type = "image");
    }),
      MSImageLayerElement.extend(MSLayerElement);
    var p = MSImageLayerElement.prototype,
      _super = MSLayerElement.prototype;
    (p.create = function () {
      if (this.link) {
        var p = this.$element.parent();
        p.append(this.link),
          this.link.append(this.$element),
          this.link.removeClass("ms-layer"),
          this.$element.addClass("ms-layer"),
          (p = null);
      }
      if ((_super.create.call(this), void 0 != this.$element.data("src")))
        (this.img_src = this.$element.data("src")),
          this.$element.removeAttr("data-src");
      else {
        var that = this;
        this.$element
          .on("load", function () {
            that.controller.preloadCount--,
              0 === that.controller.preloadCount &&
                that.controller._onlayersReady();
          })
          .each($.jqLoadFix);
      }
      window.MSBrowserInfo.msie &&
        this.$element.on("dragstart", function (event) {
          event.preventDefault();
        });
    }),
      (p.loadImage = function () {
        var that = this;
        this.$element.preloadImg(this.img_src, function () {
          that.controller.preloadCount--,
            0 === that.controller.preloadCount &&
              that.controller._onlayersReady();
        });
      });
  })(jQuery),
  (function ($) {
    (window.MSVideoLayerElement = function () {
      MSLayerElement.call(this),
        this.__cssConfig.push("height"),
        (this.type = "video");
    }),
      MSVideoLayerElement.extend(MSLayerElement);
    var p = MSVideoLayerElement.prototype,
      _super = MSLayerElement.prototype;
    (p.__playVideo = function () {
      this.img && CTween.fadeOut(this.img, 500, 2),
        CTween.fadeOut(this.video_btn, 500, 2),
        this.video_frame.attr("src", "about:blank").css("display", "block"),
        -1 == this.video_url.indexOf("?") && (this.video_url += "?"),
        this.video_frame.attr("src", this.video_url + "&autoplay=1");
    }),
      (p.start = function () {
        _super.start.call(this),
          this.$element.data("autoplay") && this.__playVideo();
      }),
      (p.reset = function () {
        return (
          _super.reset.call(this),
          (this.needPreload || this.$element.data("btn")) &&
            (this.video_btn.css("opacity", 1).css("display", "block"),
            this.video_frame.attr("src", "about:blank").css("display", "none")),
          this.needPreload
            ? void this.img.css("opacity", 1).css("display", "block")
            : void this.video_frame.attr("src", this.video_url)
        );
      }),
      (p.create = function () {
        _super.create.call(this),
          (this.video_frame = this.$element
            .find("iframe")
            .css({ width: "100%", height: "100%" })),
          (this.video_url = this.video_frame.attr("src"));
        var has_img = 0 != this.$element.has("img").length;
        if (has_img || this.$element.data("btn")) {
          this.video_frame.attr("src", "about:blank").css("display", "none");
          var that = this;
          if (
            ((this.video_btn = $("<div></div>")
              .appendTo(this.$element)
              .addClass("ms-video-btn")
              .on("click", function () {
                that.__playVideo();
              })),
            has_img)
          ) {
            if (
              ((this.needPreload = !0),
              (this.img = this.$element
                .find("img:first")
                .addClass("ms-video-img")),
              void 0 !== this.img.data("src"))
            )
              (this.img_src = this.img.data("src")),
                this.img.removeAttr("data-src");
            else {
              var that = this;
              this.img
                .attr("src", this.img_src)
                .on("load", function () {
                  that.controller.preloadCount--,
                    0 === that.controller.preloadCount &&
                      that.controller._onlayersReady();
                })
                .each($.jqLoadFix);
            }
            window.MSBrowserInfo.msie &&
              this.img.on("dragstart", function (event) {
                event.preventDefault();
              });
          }
        }
      }),
      (p.loadImage = function () {
        var that = this;
        this.img.preloadImg(this.img_src, function () {
          that.controller.preloadCount--,
            0 === that.controller.preloadCount &&
              that.controller._onlayersReady();
        });
      });
  })(jQuery),
  (function ($) {
    "use strict";
    (window.MSHotspotLayer = function () {
      MSLayerElement.call(this),
        (this.__cssConfig = [
          "margin-top",
          "padding-top",
          "margin-bottom",
          "padding-left",
          "margin-right",
          "padding-right",
          "margin-left",
          "padding-bottom",
          "left",
          "right",
          "top",
          "bottom",
        ]),
        (this.ease = "Expo"),
        (this.hide_start = !0),
        (this.type = "hotspot");
    }),
      MSHotspotLayer.extend(MSLayerElement);
    var p = MSHotspotLayer.prototype,
      _super = MSLayerElement.prototype;
    (p._showTT = function () {
      this.show_cl &&
        (clearTimeout(this.hto),
        this._tween && this._tween.stop(!0),
        this.hide_start &&
          ((this.align = this._orgAlign),
          this._locateTT(),
          this.tt.css({ display: "block" }),
          (this._tween = CTween.animate(this.tt, 900, this.to, {
            ease: "easeOut" + this.ease,
          })),
          (this.hide_start = !1)));
    }),
      (p._hideTT = function () {
        if (this.show_cl) {
          this._tween && this._tween.stop(!0);
          var that = this;
          clearTimeout(this.hto),
            (this.hto = setTimeout(function () {
              (that.hide_start = !0),
                (that._tween = CTween.animate(that.tt, 900, that.from, {
                  ease: "easeOut" + that.ease,
                  complete: function () {
                    that.tt.css("display", "none");
                  },
                }));
            }, 200));
        }
      }),
      (p._updateClassName = function (name) {
        this._lastClass && this.tt.removeClass(this._lastClass),
          this.tt.addClass(name),
          (this._lastClass = name);
      }),
      (p._alignPolicy = function () {
        {
          var w =
              (this.tt.outerHeight(!1),
              Math.max(
                this.tt.outerWidth(!1),
                parseInt(this.tt.css("max-width"))
              )),
            ww = window.innerWidth;
          window.innerHeight;
        }
        switch (this.align) {
          case "top":
            if (this.base_t < 0) return "bottom";
            break;
          case "right":
            if (this.base_l + w > ww || this.base_t < 0) return "bottom";
            break;
          case "left":
            if (this.base_l < 0 || this.base_t < 0) return "bottom";
        }
        return null;
      }),
      (p._locateTT = function () {
        var os = this.$element.offset(),
          os2 = this.slide.slider.$element.offset(),
          dist = 50,
          space = 15;
        (this.pos_x =
          os.left - os2.left - this.slide.slider.$element.scrollLeft()),
          (this.pos_y =
            os.top - os2.top - this.slide.slider.$element.scrollTop()),
          (this.from = { opacity: 0 }),
          (this.to = { opacity: 1 }),
          this._updateClassName("ms-tooltip-" + this.align),
          this.tt_arrow.css("margin-left", "");
        var arrow_w = 15,
          arrow_h = 15;
        switch (this.align) {
          case "top":
            var w = Math.min(
              this.tt.outerWidth(!1),
              parseInt(this.tt.css("max-width"))
            );
            (this.base_t =
              this.pos_y - this.tt.outerHeight(!1) - arrow_h - space),
              (this.base_l = this.pos_x - w / 2),
              this.base_l + w > window.innerWidth &&
                (this.tt_arrow.css(
                  "margin-left",
                  -arrow_w / 2 + this.base_l + w - window.innerWidth + "px"
                ),
                (this.base_l = window.innerWidth - w)),
              this.base_l < 0 &&
                ((this.base_l = 0),
                this.tt_arrow.css(
                  "margin-left",
                  -arrow_w / 2 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px"
                )),
              window._css3d
                ? ((this.from[window._jcsspfx + "Transform"] =
                    "translateY(-" + dist + "px)"),
                  (this.to[window._jcsspfx + "Transform"] = ""))
                : ((this.from.top = this.base_t - dist + "px"),
                  (this.to.top = this.base_t + "px"));
            break;
          case "bottom":
            var w = Math.min(
              this.tt.outerWidth(!1),
              parseInt(this.tt.css("max-width"))
            );
            (this.base_t = this.pos_y + arrow_h + space),
              (this.base_l = this.pos_x - w / 2),
              this.base_l + w > window.innerWidth &&
                (this.tt_arrow.css(
                  "margin-left",
                  -arrow_w / 2 + this.base_l + w - window.innerWidth + "px"
                ),
                (this.base_l = window.innerWidth - w)),
              this.base_l < 0 &&
                ((this.base_l = 0),
                this.tt_arrow.css(
                  "margin-left",
                  -arrow_w / 2 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px"
                )),
              window._css3d
                ? ((this.from[window._jcsspfx + "Transform"] =
                    "translateY(" + dist + "px)"),
                  (this.to[window._jcsspfx + "Transform"] = ""))
                : ((this.from.top = this.base_t + dist + "px"),
                  (this.to.top = this.base_t + "px"));
            break;
          case "right":
            (this.base_l = this.pos_x + arrow_w + space),
              (this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2),
              window._css3d
                ? ((this.from[window._jcsspfx + "Transform"] =
                    "translateX(" + dist + "px)"),
                  (this.to[window._jcsspfx + "Transform"] = ""))
                : ((this.from.left = this.base_l + dist + "px"),
                  (this.to.left = this.base_l + "px"));
            break;
          case "left":
            (this.base_l =
              this.pos_x - arrow_w - this.tt.outerWidth(!1) - space),
              (this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2),
              window._css3d
                ? ((this.from[window._jcsspfx + "Transform"] =
                    "translateX(-" + dist + "px)"),
                  (this.to[window._jcsspfx + "Transform"] = ""))
                : ((this.from.left = this.base_l - dist + "px"),
                  (this.to.left = this.base_l + "px"));
        }
        var policyAlign = this._alignPolicy();
        return null !== policyAlign
          ? ((this.align = policyAlign), void this._locateTT())
          : (this.tt
              .css("top", parseInt(this.base_t) + "px")
              .css("left", parseInt(this.base_l) + "px"),
            void this.tt.css(this.from));
      }),
      (p.start = function () {
        _super.start.call(this),
          this.tt.appendTo(this.slide.slider.$element),
          this.tt.css("display", "none");
      }),
      (p.reset = function () {
        _super.reset.call(this), this.tt.detach();
      }),
      (p.create = function () {
        var that = this;
        (this._orgAlign = this.align =
          void 0 !== this.$element.data("align")
            ? this.$element.data("align")
            : "top"),
          (this.data = this.$element.html()),
          this.$element
            .html("")
            .on("mouseenter", function () {
              that._showTT();
            })
            .on("mouseleave", function () {
              that._hideTT();
            }),
          (this.point = $(
            '<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>'
          )
            .addClass("ms-tooltip-point")
            .appendTo(this.$element));
        var link = this.$element.data("link"),
          target = this.$element.data("target");
        link &&
          this.point.on("click", function () {
            window.open(link, target || "_self");
          }),
          (this.tt = $("<div></div>")
            .addClass("ms-tooltip")
            .css("display", "hidden")
            .css("opacity", 0)),
          void 0 !== this.$element.data("width") &&
            this.tt
              .css("width", this.$element.data("width"))
              .css("max-width", this.$element.data("width")),
          (this.tt_arrow = $("<div></div>")
            .addClass("ms-tooltip-arrow")
            .appendTo(this.tt)),
          this._updateClassName("ms-tooltip-" + this.align),
          (this.ttcont = $("<div></div>")
            .addClass("ms-tooltip-cont")
            .html(this.data)
            .appendTo(this.tt)),
          this.$element.data("stay-hover") === !0 &&
            this.tt
              .on("mouseenter", function () {
                that.hide_start ||
                  (clearTimeout(that.hto),
                  that._tween.stop(!0),
                  that._showTT());
              })
              .on("mouseleave", function () {
                that._hideTT();
              }),
          _super.create.call(this);
      });
  })(jQuery),
  (function () {
    (window.MSButtonLayer = function () {
      MSLayerElement.call(this), (this.type = "button");
    }),
      MSButtonLayer.extend(MSLayerElement);
    var p = MSButtonLayer.prototype,
      _super = MSLayerElement.prototype,
      positionKies = ["top", "left", "bottom", "right"];
    (p.create = function () {
      _super.create.call(this),
        this.$element
          .wrap('<div class="ms-btn-container"></div>')
          .css("position", "relative"),
        (this.$container = this.$element.parent());
    }),
      (p.locate = function () {
        _super.locate.call(this);
        for (var key, tempValue, i = 0; 4 > i; i++)
          (key = positionKies[i]),
            key in this.baseStyle &&
              void 0 !== this.baseStyle[key] &&
              ((tempValue = this.$element.css(key)),
              this.$element.css(key, ""),
              this.$container.css(key, tempValue));
        this.$container
          .width(this.$element.outerWidth(!0))
          .height(this.$element.outerHeight(!0));
      });
  })(jQuery),
  (window.MSSliderEvent = function (type) {
    this.type = type;
  }),
  (MSSliderEvent.CHANGE_START = "ms_changestart"),
  (MSSliderEvent.CHANGE_END = "ms_changeend"),
  (MSSliderEvent.WAITING = "ms_waiting"),
  (MSSliderEvent.AUTOPLAY_CHANGE = "ms_autoplaychange"),
  (MSSliderEvent.VIDEO_PLAY = "ms_videoPlay"),
  (MSSliderEvent.VIDEO_CLOSE = "ms_videoclose"),
  (MSSliderEvent.INIT = "ms_init"),
  (MSSliderEvent.HARD_UPDATE = "ms_hard_update"),
  (MSSliderEvent.RESIZE = "ms_resize"),
  (MSSliderEvent.RESERVED_SPACE_CHANGE = "ms_rsc"),
  (MSSliderEvent.DESTROY = "ms_destroy"),
  (function (window, document, $) {
    "use strict";
    window.MSSlide = function () {
      (this.$element = null),
        (this.$loading = $("<div></div>").addClass("ms-slide-loading")),
        (this.view = null),
        (this.index = -1),
        (this.__width = 0),
        (this.__height = 0),
        (this.fillMode = "fill"),
        (this.selected = !1),
        (this.pselected = !1),
        (this.autoAppend = !0),
        (this.isSleeping = !0),
        (this.moz = window.MSBrowserInfo.mozilla);
    };
    var p = MSSlide.prototype;
    (p.onSwipeStart = function () {
      this.link && (this.linkdis = !0), this.video && (this.videodis = !0);
    }),
      (p.onSwipeMove = function (e) {
        var move = Math.max(
          Math.abs(e.data.distanceX),
          Math.abs(e.data.distanceY)
        );
        this.swipeMoved = move > 4;
      }),
      (p.onSwipeCancel = function () {
        return this.swipeMoved
          ? void (this.swipeMoved = !1)
          : (this.link && (this.linkdis = !1),
            void (this.video && (this.videodis = !1)));
      }),
      (p.setupLayerController = function () {
        (this.hasLayers = !0),
          (this.layerController = new MSLayerController(this));
      }),
      (p.assetsLoaded = function () {
        (this.ready = !0),
          this.slider.api._startTimer(),
          (this.selected ||
            (this.pselected && this.slider.options.instantStartLayers)) &&
            (this.hasLayers && this.layerController.showLayers(),
            this.vinit &&
              (this.bgvideo.play(),
              this.autoPauseBgVid || (this.bgvideo.currentTime = 0))),
          this.isSleeping || this.setupBG(),
          CTween.fadeOut(this.$loading, 300, !0),
          (0 === this.slider.options.preload ||
            "all" === this.slider.options.preload) &&
          this.index < this.view.slideList.length - 1
            ? this.view.slideList[this.index + 1].loadImages()
            : "all" === this.slider.options.preload &&
              this.index === this.view.slideList.length - 1 &&
              this.slider._removeLoading();
      }),
      (p.setBG = function (img) {
        this.hasBG = !0;
        var that = this;
        (this.$imgcont = $("<div></div>").addClass("ms-slide-bgcont")),
          this.$element.append(this.$loading).append(this.$imgcont),
          (this.$bg_img = $(img).css("visibility", "hidden")),
          this.$imgcont.append(this.$bg_img),
          (this.bgAligner = new MSAligner(
            that.fillMode,
            that.$imgcont,
            that.$bg_img
          )),
          (this.bgAligner.widthOnly = this.slider.options.autoHeight),
          that.slider.options.autoHeight &&
            (that.pselected || that.selected) &&
            that.slider.setHeight(that.slider.options.height),
          void 0 !== this.$bg_img.data("src")
            ? ((this.bg_src = this.$bg_img.data("src")),
              this.$bg_img.removeAttr("data-src"))
            : this.$bg_img
                .one("load", function (event) {
                  that._onBGLoad(event);
                })
                .each($.jqLoadFix);
      }),
      (p.setupBG = function () {
        !this.initBG &&
          this.bgLoaded &&
          ((this.initBG = !0),
          this.$bg_img.css("visibility", ""),
          (this.bgWidth = this.bgNatrualWidth || this.$bg_img.width()),
          (this.bgHeight = this.bgNatrualHeight || this.$bg_img.height()),
          CTween.fadeIn(this.$imgcont, 300),
          this.slider.options.autoHeight &&
            this.$imgcont.height(this.bgHeight * this.ratio),
          this.bgAligner.init(this.bgWidth, this.bgHeight),
          this.setSize(this.__width, this.__height),
          this.slider.options.autoHeight &&
            (this.pselected || this.selected) &&
            this.slider.setHeight(this.getHeight()));
      }),
      (p.loadImages = function () {
        if (!this.ls) {
          if (
            ((this.ls = !0),
            this.bgvideo && this.bgvideo.load(),
            this.hasBG && this.bg_src)
          ) {
            var that = this;
            this.$bg_img.preloadImg(this.bg_src, function (event) {
              that._onBGLoad(event);
            });
          }
          this.hasLayers && this.layerController.loadLayers(this._onLayersLoad),
            this.hasBG || this.hasLayers || this.assetsLoaded();
        }
      }),
      (p._onLayersLoad = function () {
        (this.layersLoaded = !0),
          (!this.hasBG || this.bgLoaded) && this.assetsLoaded();
      }),
      (p._onBGLoad = function (event) {
        (this.bgNatrualWidth = event.width),
          (this.bgNatrualHeight = event.height),
          (this.bgLoaded = !0),
          window.MSBrowserInfo.msie &&
            this.$bg_img.on("dragstart", function (event) {
              event.preventDefault();
            }),
          (!this.hasLayers || this.layerController.ready) &&
            this.assetsLoaded();
      }),
      (p.setBGVideo = function ($video) {
        if ($video[0].play) {
          if (window._mobile && !this.slider.options.mobileBGVideo)
            return void $video.remove();
          this.bgvideo = $video[0];
          var that = this;
          $video.addClass("ms-slide-bgvideo"),
            $video.data("loop") !== !1 && (this.bgvideo.loop = !0),
            $video.data("mute") !== !1 && (this.bgvideo.muted = !0),
            $video.data("autopause") === !0 && (this.autoPauseBgVid = !0),
            this.bgvideo.setAttribute("playsinline", ""),
            (this.bgvideo_fillmode = $video.data("fill-mode") || "fill"),
            "none" !== this.bgvideo_fillmode &&
              ((this.bgVideoAligner = new MSAligner(
                this.bgvideo_fillmode,
                this.$element,
                $video
              )),
              this.bgvideo.addEventListener("loadedmetadata", function () {
                that.vinit ||
                  ((that.vinit = !0),
                  (that.video_aspect =
                    that.bgVideoAligner.baseHeight /
                    that.bgVideoAligner.baseWidth),
                  that.bgVideoAligner.init(
                    that.bgvideo.videoWidth,
                    that.bgvideo.videoHeight
                  ),
                  that._alignBGVideo(),
                  CTween.fadeIn($(that.bgvideo), 200),
                  that.selected && that.bgvideo.play());
              })),
            $video.css("opacity", 0),
            (this.$bgvideocont = $("<div></div>")
              .addClass("ms-slide-bgvideocont")
              .append($video)),
            this.hasBG
              ? this.$imgcont.before(this.$bgvideocont)
              : this.$bgvideocont.appendTo(this.$element);
        }
      }),
      (p._alignBGVideo = function () {
        this.bgvideo_fillmode &&
          "none" !== this.bgvideo_fillmode &&
          this.bgVideoAligner.align();
      }),
      (p.setSize = function (width, height, hard) {
        (this.__width = width),
          this.slider.options.autoHeight &&
            (this.bgLoaded
              ? ((this.ratio = this.__width / this.bgWidth),
                (height = Math.floor(this.ratio * this.bgHeight)),
                this.$imgcont.height(height))
              : ((this.ratio = width / this.slider.options.width),
                (height = this.slider.options.height * this.ratio))),
          (this.__height = height),
          this.$element.width(width).height(height),
          this.hasBG && this.bgLoaded && this.bgAligner.align(),
          this._alignBGVideo(),
          this.hasLayers && this.layerController.setSize(width, height, hard);
      }),
      (p.getHeight = function () {
        return this.hasBG && this.bgLoaded
          ? this.bgHeight * this.ratio
          : Math.max(
              this.$element[0].clientHeight,
              this.slider.options.height * this.ratio
            );
      }),
      (p.__playVideo = function () {
        this.vplayed ||
          this.videodis ||
          ((this.vplayed = !0),
          this.slider.api.paused || (this.slider.api.pause(), (this.roc = !0)),
          this.vcbtn.css("display", ""),
          CTween.fadeOut(this.vpbtn, 500, !1),
          CTween.fadeIn(this.vcbtn, 500),
          CTween.fadeIn(this.vframe, 500),
          this.vframe
            .css("display", "block")
            .attr("src", this.video + "&autoplay=1"),
          this.view.$element.addClass("ms-def-cursor"),
          this.moz && this.view.$element.css("perspective", "none"),
          this.view.swipeControl && this.view.swipeControl.disable(),
          this.slider.slideController.dispatchEvent(
            new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)
          ));
      }),
      (p.__closeVideo = function () {
        if (this.vplayed) {
          (this.vplayed = !1), this.roc && this.slider.api.resume();
          var that = this;
          CTween.fadeIn(this.vpbtn, 500),
            CTween.animate(
              this.vcbtn,
              500,
              { opacity: 0 },
              {
                complete: function () {
                  that.vcbtn.css("display", "none");
                },
              }
            ),
            CTween.animate(
              this.vframe,
              500,
              { opacity: 0 },
              {
                complete: function () {
                  that.vframe.attr("src", "about:blank").css("display", "none");
                },
              }
            ),
            this.moz && this.view.$element.css("perspective", ""),
            this.view.swipeControl && this.view.swipeControl.enable(),
            this.view.$element.removeClass("ms-def-cursor"),
            this.slider.slideController.dispatchEvent(
              new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE)
            );
        }
      }),
      (p.create = function () {
        var that = this;
        this.hasLayers && this.layerController.create(),
          this.link &&
            this.link
              .addClass("ms-slide-link")
              .html("")
              .on("click", function (e) {
                that.linkdis && e.preventDefault();
              }),
          this.video &&
            (-1 === this.video.indexOf("?") && (this.video += "?"),
            (this.vframe = $("<iframe></iframe>")
              .addClass("ms-slide-video")
              .css({ width: "100%", height: "100%", display: "none" })
              .attr("src", "about:blank")
              .attr("allowfullscreen", "true")
              .appendTo(this.$element)),
            (this.vpbtn = $("<div></div>")
              .addClass("ms-slide-vpbtn")
              .on("click", function () {
                that.__playVideo();
              })
              .appendTo(this.$element)),
            (this.vcbtn = $("<div></div>")
              .addClass("ms-slide-vcbtn")
              .on("click", function () {
                that.__closeVideo();
              })
              .appendTo(this.$element)
              .css("display", "none")),
            window._touch &&
              this.vcbtn
                .removeClass("ms-slide-vcbtn")
                .addClass("ms-slide-vcbtn-mobile")
                .append('<div class="ms-vcbtn-txt">Close video</div>')
                .appendTo(this.view.$element.parent())),
          !this.slider.options.autoHeight &&
            this.hasBG &&
            (this.$imgcont.css("height", "100%"),
            ("center" === this.fillMode || "stretch" === this.fillMode) &&
              (this.fillMode = "fill")),
          this.slider.options.autoHeight &&
            this.$element.addClass("ms-slide-auto-height"),
          this.sleep(!0);
      }),
      (p.destroy = function () {
        this.hasLayers &&
          (this.layerController.destroy(), (this.layerController = null)),
          this.$element.remove(),
          (this.$element = null);
      }),
      (p.prepareToSelect = function () {
        this.pselected ||
          this.selected ||
          ((this.pselected = !0),
          (this.link || this.video) &&
            (this.view.addEventListener(
              MSViewEvents.SWIPE_START,
              this.onSwipeStart,
              this
            ),
            this.view.addEventListener(
              MSViewEvents.SWIPE_MOVE,
              this.onSwipeMove,
              this
            ),
            this.view.addEventListener(
              MSViewEvents.SWIPE_CANCEL,
              this.onSwipeCancel,
              this
            ),
            (this.linkdis = !1),
            (this.swipeMoved = !1)),
          this.loadImages(),
          this.hasLayers && this.layerController.prepareToShow(),
          this.ready &&
            (this.bgvideo && this.bgvideo.play(),
            this.hasLayers &&
              this.slider.options.instantStartLayers &&
              this.layerController.showLayers()),
          this.moz && this.$element.css("margin-top", ""));
      }),
      (p.select = function () {
        this.selected ||
          ((this.selected = !0),
          (this.pselected = !1),
          this.$element.addClass("ms-sl-selected"),
          this.hasLayers &&
            (this.slider.options.autoHeight &&
              this.layerController.updateHeight(),
            this.slider.options.instantStartLayers ||
              this.layerController.showLayers()),
          this.ready && this.bgvideo && this.bgvideo.play(),
          this.videoAutoPlay &&
            ((this.videodis = !1), this.vpbtn.trigger("click")));
      }),
      (p.unselect = function () {
        (this.pselected = !1),
          this.moz && this.$element.css("margin-top", "0.1px"),
          (this.link || this.video) &&
            (this.view.removeEventListener(
              MSViewEvents.SWIPE_START,
              this.onSwipeStart,
              this
            ),
            this.view.removeEventListener(
              MSViewEvents.SWIPE_MOVE,
              this.onSwipeMove,
              this
            ),
            this.view.removeEventListener(
              MSViewEvents.SWIPE_CANCEL,
              this.onSwipeCancel,
              this
            )),
          this.bgvideo &&
            (this.bgvideo.pause(),
            !this.autoPauseBgVid &&
              this.vinit &&
              (this.bgvideo.currentTime = 0)),
          this.hasLayers && this.layerController.hideLayers(),
          this.selected &&
            ((this.selected = !1),
            this.$element.removeClass("ms-sl-selected"),
            this.video &&
              this.vplayed &&
              (this.__closeVideo(), (this.roc = !1)));
      }),
      (p.sleep = function (force) {
        (!this.isSleeping || force) &&
          ((this.isSleeping = !0),
          this.autoAppend && this.$element.detach(),
          this.hasLayers && this.layerController.onSlideSleep());
      }),
      (p.wakeup = function () {
        this.isSleeping &&
          ((this.isSleeping = !1),
          this.autoAppend && this.view.$slideCont.append(this.$element),
          this.moz && this.$element.css("margin-top", "0.1px"),
          this.setupBG(),
          this.hasBG && this.bgAligner.align(),
          this.hasLayers && this.layerController.onSlideWakeup());
      });
  })(window, document, jQuery),
  (function ($) {
    "use strict";
    var SliderViewList = {};
    (window.MSSlideController = function (slider) {
      (this._delayProgress = 0),
        (this._timer = new averta.Timer(100)),
        (this._timer.onTimer = this.onTimer),
        (this._timer.refrence = this),
        (this.currentSlide = null),
        (this.slider = slider),
        (this.so = slider.options),
        averta.EventDispatcher.call(this);
    }),
      (MSSlideController.registerView = function (name, _class) {
        if (name in SliderViewList)
          throw new Error(name + ", is already registered.");
        SliderViewList[name] = _class;
      }),
      (MSSlideController.SliderControlList = {}),
      (MSSlideController.registerControl = function (name, _class) {
        if (name in MSSlideController.SliderControlList)
          throw new Error(name + ", is already registered.");
        MSSlideController.SliderControlList[name] = _class;
      });
    var p = MSSlideController.prototype;
    (p.setupView = function () {
      var that = this;
      this.resize_listener = function () {
        that.__resize();
      };
      var viewOptions = {
        spacing: this.so.space,
        mouseSwipe: this.so.mouse,
        loop: this.so.loop,
        autoHeight: this.so.autoHeight,
        swipe: this.so.swipe,
        speed: this.so.speed,
        dir: this.so.dir,
        viewNum: this.so.inView,
        critMargin: this.so.critMargin,
      };
      this.so.viewOptions && $.extend(viewOptions, this.so.viewOptions),
        this.so.autoHeight && (this.so.heightLimit = !1);
      var viewClass = SliderViewList[this.slider.options.view] || MSBasicView;
      if (
        (!viewClass._3dreq ||
          (window._css3d && !window.MSBrowserInfo.msie) ||
          (viewClass = viewClass._fallback || MSBasicView),
        (this.view = new viewClass(viewOptions)),
        this.so.overPause)
      ) {
        var that = this;
        this.slider.$element
          .on("mouseenter", function () {
            (that.is_over = !0), that._stopTimer();
          })
          .on("mouseleave", function () {
            (that.is_over = !1), that._startTimer();
          });
      }
    }),
      (p.onChangeStart = function () {
        (this.change_started = !0),
          this.currentSlide && this.currentSlide.unselect(),
          (this.currentSlide = this.view.currentSlide),
          this.currentSlide.prepareToSelect(),
          this.so.endPause &&
            this.currentSlide.index === this.slider.slides.length - 1 &&
            (this.pause(), this.skipTimer()),
          this.so.autoHeight &&
            this.slider.setHeight(this.currentSlide.getHeight()),
          this.so.deepLink && this.__updateWindowHash(),
          this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START));
      }),
      (p.onChangeEnd = function () {
        if (
          ((this.change_started = !1),
          this._startTimer(),
          this.currentSlide.select(),
          this.so.preload > 1)
        ) {
          var loc,
            i,
            slide,
            l = this.so.preload - 1;
          for (i = 1; l >= i; ++i) {
            if (
              ((loc = this.view.index + i), loc >= this.view.slideList.length)
            ) {
              if (!this.so.loop) {
                i = l;
                continue;
              }
              loc -= this.view.slideList.length;
            }
            (slide = this.view.slideList[loc]), slide && slide.loadImages();
          }
          for (
            l > this.view.slideList.length / 2 &&
              (l = Math.floor(this.view.slideList.length / 2)),
              i = 1;
            l >= i;
            ++i
          ) {
            if (((loc = this.view.index - i), 0 > loc)) {
              if (!this.so.loop) {
                i = l;
                continue;
              }
              loc = this.view.slideList.length + loc;
            }
            (slide = this.view.slideList[loc]), slide && slide.loadImages();
          }
        }
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END));
      }),
      (p.onSwipeStart = function () {
        this.skipTimer();
      }),
      (p.skipTimer = function () {
        this._timer.reset(),
          (this._delayProgress = 0),
          this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING));
      }),
      (p.onTimer = function () {
        if (
          (this._timer.getTime() >= 1e3 * this.view.currentSlide.delay &&
            (this.skipTimer(), this.view.next(), (this.hideCalled = !1)),
          (this._delayProgress =
            this._timer.getTime() / (10 * this.view.currentSlide.delay)),
          this.so.hideLayers &&
            !this.hideCalled &&
            1e3 * this.view.currentSlide.delay - this._timer.getTime() <= 300)
        ) {
          var currentSlide = this.view.currentSlide;
          currentSlide.hasLayers &&
            currentSlide.layerController.animHideLayers(),
            (this.hideCalled = !0);
        }
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING));
      }),
      (p._stopTimer = function () {
        this._timer && this._timer.stop();
      }),
      (p._startTimer = function () {
        this.paused ||
          this.is_over ||
          !this.currentSlide ||
          !this.currentSlide.ready ||
          this.change_started ||
          this._timer.start();
      }),
      (p.__appendSlides = function () {
        var slide,
          loc,
          i = 0,
          l = this.view.slideList.length - 1;
        for (i; l > i; ++i)
          (slide = this.view.slideList[i]),
            slide.detached || (slide.$element.detach(), (slide.detached = !0));
        for (
          this.view.appendSlide(this.view.slideList[this.view.index]),
            l = 3,
            i = 1;
          l >= i;
          ++i
        ) {
          if (
            ((loc = this.view.index + i), loc >= this.view.slideList.length)
          ) {
            if (!this.so.loop) {
              i = l;
              continue;
            }
            loc -= this.view.slideList.length;
          }
          (slide = this.view.slideList[loc]),
            (slide.detached = !1),
            this.view.appendSlide(slide);
        }
        for (
          l > this.view.slideList.length / 2 &&
            (l = Math.floor(this.view.slideList.length / 2)),
            i = 1;
          l >= i;
          ++i
        ) {
          if (((loc = this.view.index - i), 0 > loc)) {
            if (!this.so.loop) {
              i = l;
              continue;
            }
            loc = this.view.slideList.length + loc;
          }
          (slide = this.view.slideList[loc]),
            (slide.detached = !1),
            this.view.appendSlide(slide);
        }
      }),
      (p.__resize = function (hard) {
        this.created &&
          ((this.width = this.slider.$element[0].clientWidth || this.so.width),
          this.so.fullwidth ||
            (this.width = Math.min(this.width, this.so.width)),
          this.so.fullheight
            ? ((this.so.heightLimit = !1),
              (this.so.autoHeight = !1),
              (this.height = this.slider.$element[0].clientHeight))
            : this.so.responsive
            ? ((this.slider.aspect = this.slider.getResponsiveValue(
                this.slider.responsiveAspect
              )),
              (this.height = this.width / this.slider.aspect))
            : (this.height = this.width / this.slider.aspect),
          this.so.autoHeight
            ? (this.currentSlide.setSize(this.width, null, hard),
              this.view.setSize(
                this.width,
                this.currentSlide.getHeight(),
                hard
              ))
            : this.view.setSize(
                this.width,
                Math.max(
                  this.so.minHeight,
                  this.so.heightLimit
                    ? Math.min(this.height, this.so.height)
                    : this.height
                ),
                hard
              ),
          this.slider.$controlsCont &&
            this.so.centerControls &&
            this.so.fullwidth &&
            this.view.$element.css(
              "left",
              Math.min(
                0,
                -(this.slider.$element[0].clientWidth - this.so.width) / 2
              ) + "px"
            ),
          this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)));
      }),
      (p.__dispatchInit = function () {
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT));
      }),
      (p.__updateWindowHash = function () {
        var hash = window.location.hash,
          dl = this.so.deepLink,
          dlt = this.so.deepLinkType,
          eq = "path" === dlt ? "/" : "=",
          sep = "path" === dlt ? "/" : "&",
          sliderHash = dl + eq + (this.view.index + 1),
          regTest = new RegExp(dl + eq + "[0-9]+", "g");
        window.location.hash =
          "" === hash
            ? sep + sliderHash
            : regTest.test(hash)
            ? hash.replace(regTest, sliderHash)
            : hash + sep + sliderHash;
      }),
      (p.__curentSlideInHash = function () {
        var hash = window.location.hash,
          dl = this.so.deepLink,
          dlt = this.so.deepLinkType,
          eq = "path" === dlt ? "/" : "=",
          regTest = new RegExp(dl + eq + "[0-9]+", "g");
        if (regTest.test(hash)) {
          var index = Number(
            hash
              .match(regTest)[0]
              .match(/[0-9]+/g)
              .pop()
          );
          if (!isNaN(index)) return index - 1;
        }
        return -1;
      }),
      (p.__onHashChanged = function () {
        var index = this.__curentSlideInHash();
        -1 !== index && this.gotoSlide(index);
      }),
      (p.__findLayerById = function (layerId) {
        if (!this.currentSlide) return null;
        var layer;
        return (
          this.currentSlide.layerController &&
            (layer = this.currentSlide.layerController.getLayerById(layerId)),
          !layer && this.slider.overlayLayers
            ? this.slider.overlayLayers.layerController.getLayerById(layerId)
            : layer
        );
      }),
      (p.setup = function () {
        (this.created = !0),
          (this.paused = !this.so.autoplay),
          this.view.addEventListener(
            MSViewEvents.CHANGE_START,
            this.onChangeStart,
            this
          ),
          this.view.addEventListener(
            MSViewEvents.CHANGE_END,
            this.onChangeEnd,
            this
          ),
          this.view.addEventListener(
            MSViewEvents.SWIPE_START,
            this.onSwipeStart,
            this
          ),
          (this.currentSlide = this.view.slideList[this.so.start - 1]),
          this.__resize();
        var slideInHash = this.__curentSlideInHash(),
          startSlide = -1 !== slideInHash ? slideInHash : this.so.start - 1;
        if (
          (this.view.create(startSlide),
          0 === this.so.preload && this.view.slideList[0].loadImages(),
          (this.scroller = this.view.controller),
          this.so.wheel)
        ) {
          var that = this,
            last_time = new Date().getTime();
          (this.wheellistener = function (event) {
            var e = window.event || event.orginalEvent || event;
            e.preventDefault();
            var current_time = new Date().getTime();
            if (!(400 > current_time - last_time)) {
              last_time = current_time;
              var delta = Math.abs(e.detail || e.wheelDelta);
              window.MSBrowserInfo.mozilla && (delta *= 100);
              var scrollThreshold = 15;
              return (
                e.detail < 0 || e.wheelDelta > 0
                  ? delta >= scrollThreshold && that.previous(!0)
                  : delta >= scrollThreshold && that.next(!0),
                !1
              );
            }
          }),
            this.slider.$element[0].addEventListener(
              "mousewheel",
              this.wheellistener,
              { passive: !1 }
            );
        }
        0 === this.slider.$element[0].clientWidth &&
          (this.slider.init_safemode = !0),
          this.__resize();
        var that = this;
        this.so.deepLink &&
          $(window).on("hashchange", function () {
            that.__onHashChanged();
          });
      }),
      (p.index = function () {
        return this.view.index;
      }),
      (p.count = function () {
        return this.view.slidesCount;
      }),
      (p.next = function (checkLoop) {
        this.skipTimer(), this.view.next(checkLoop);
      }),
      (p.previous = function (checkLoop) {
        this.skipTimer(), this.view.previous(checkLoop);
      }),
      (p.gotoSlide = function (index) {
        (index = Math.min(index, this.count() - 1)),
          this.skipTimer(),
          this.view.gotoSlide(index);
      }),
      (p.destroy = function (reset) {
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY)),
          this.slider.destroy(reset);
      }),
      (p._destroy = function () {
        this._timer.reset(),
          (this._timer = null),
          $(window).off("resize", this.resize_listener),
          this.view.destroy(),
          (this.view = null),
          this.so.wheel &&
            (window.MSBrowserInfo.mozilla
              ? this.slider.$element[0].removeEventListener(
                  "DOMMouseScroll",
                  this.wheellistener
                )
              : this.slider.$element.off("mousewheel", this.wheellistener),
            (this.wheellistener = null)),
          (this.so = null);
      }),
      (p.runAction = function (action) {
        var actionParams = [];
        if (-1 !== action.indexOf("(")) {
          var temp = action.slice(0, action.indexOf("("));
          (actionParams = action
            .slice(action.indexOf("(") + 1, -1)
            .replace(/\"|\'|\s/g, "")
            .split(",")),
            (action = temp);
        }
        action in this ? this[action].apply(this, actionParams) : console;
      }),
      (p.update = function (hard) {
        this.slider.init_safemode && hard && (this.slider.init_safemode = !1),
          this.__resize(hard),
          hard &&
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE));
      }),
      (p.locate = function () {
        this.__resize();
      }),
      (p.resume = function () {
        this.paused && ((this.paused = !1), this._startTimer());
      }),
      (p.pause = function () {
        this.paused || ((this.paused = !0), this._stopTimer());
      }),
      (p.currentTime = function () {
        return this._delayProgress;
      }),
      (p.showLayer = function (layerId, delay) {
        var layer = this.__findLayerById(layerId);
        layer &&
          (delay
            ? (clearTimeout(layer.actionTimeout),
              (layer.actionTimeout = setTimeout(
                this.showLayer,
                delay,
                layerId,
                0
              )))
            : layer.start());
      }),
      (p.hideLayer = function (layerId, delay) {
        var layer = this.__findLayerById(layerId);
        layer &&
          (delay
            ? (clearTimeout(layer.actionTimeout),
              (layer.actionTimeout = setTimeout(
                this.hideLayer,
                delay,
                layerId,
                0
              )))
            : layer.hide());
      }),
      (p.toggleLayer = function (layerId, delay) {
        var layer = this.__findLayerById(layerId);
        layer &&
          (delay
            ? (clearTimeout(layer.actionTimeout),
              (layer.actionTimeout = setTimeout(
                this.toggleLayer,
                delay,
                layerId,
                0
              )))
            : layer.isShowing
            ? layer.hide()
            : layer.start());
      }),
      (p.showLayers = function (layerIds, delay) {
        var self = this;
        $.each(
          layerIds.replace(/\s+/g, "").split("|"),
          function (index, layerId) {
            self.showLayer(layerId, delay);
          }
        );
      }),
      (p.hideLayers = function (layerIds, delay) {
        var self = this;
        $.each(
          layerIds.replace(/\s+/g, "").split("|"),
          function (index, layerId) {
            self.hideLayer(layerId, delay);
          }
        );
      }),
      (p.toggleLayers = function (layerIds, delay) {
        var self = this;
        $.each(
          layerIds.replace(/\s+/g, "").split("|"),
          function (index, layerId) {
            self.toggleLayer(layerId, delay);
          }
        );
      }),
      averta.EventDispatcher.extend(p);
  })(jQuery),
  (function ($) {
    "use strict";
    var LayerTypes = {
      image: MSImageLayerElement,
      text: MSLayerElement,
      video: MSVideoLayerElement,
      hotspot: MSHotspotLayer,
      button: MSButtonLayer,
    };
    (window.MasterSlider = function () {
      (this.options = {
        forceInit: !0,
        autoplay: !1,
        loop: !1,
        mouse: !0,
        swipe: !0,
        grabCursor: !0,
        space: 0,
        fillMode: "fill",
        start: 1,
        view: "basic",
        width: 300,
        height: 150,
        inView: 15,
        critMargin: 1,
        mobileBGVideo: !1,
        heightLimit: !0,
        smoothHeight: !0,
        autoHeight: !1,
        minHeight: -1,
        fullwidth: !1,
        fullheight: !1,
        autofill: !1,
        layersMode: "center",
        hideLayers: !1,
        endPause: !1,
        centerControls: !0,
        overPause: !0,
        shuffle: !1,
        speed: 17,
        dir: "h",
        preload: 0,
        wheel: !1,
        layout: "boxed",
        autofillTarget: null,
        fullscreenMargin: 0,
        instantStartLayers: !1,
        parallaxMode: "mouse",
        rtl: !1,
        deepLink: null,
        deepLinkType: "path",
        disablePlugins: [],
        responsive: !0,
        tabletWidth: 768,
        tabletHeight: null,
        phoneWidth: 480,
        phoneHeight: null,
        sizingReference: "window",
      }),
        (this.slides = []),
        (this.activePlugins = []),
        (this.$element = null),
        (this.lastMargin = 0),
        (this.leftSpace = 0),
        (this.topSpace = 0),
        (this.rightSpace = 0),
        (this.bottomSpace = 0),
        (this._holdOn = 0);
      var that = this;
      (this.resize_listener = function () {
        that._resize();
      }),
        $(window).on("resize", this.resize_listener);
    }),
      (MasterSlider.author = "Averta Ltd. (www.averta.net)"),
      (MasterSlider.version = "2.85.13"),
      (MasterSlider.releaseDate = "Feb 2022"),
      (MasterSlider._plugins = []);
    var MS = MasterSlider;
    MS.registerPlugin = function (plugin) {
      -1 === MS._plugins.indexOf(plugin) && MS._plugins.push(plugin);
    };
    var p = MasterSlider.prototype;
    (p.__setupSlides = function () {
      var new_slide,
        that = this,
        ind = 0;
      this.$element.children(".ms-slide").each(function () {
        var $slide_ele = $(this);
        (new_slide = new MSSlide()),
          (new_slide.$element = $slide_ele),
          (new_slide.slider = that),
          (new_slide.delay =
            void 0 !== $slide_ele.data("delay") ? $slide_ele.data("delay") : 3),
          (new_slide.fillMode =
            void 0 !== $slide_ele.data("fill-mode")
              ? $slide_ele.data("fill-mode")
              : that.options.fillMode),
          (new_slide.index = ind++),
          (new_slide.id = $slide_ele.data("id"));
        var slide_img = $slide_ele.children("img:not(.ms-layer)");
        slide_img.length > 0 && new_slide.setBG(slide_img[0]);
        var slide_video = $slide_ele.children("video");
        if (
          (slide_video.length > 0 && new_slide.setBGVideo(slide_video),
          that.controls)
        )
          for (var i = 0, l = that.controls.length; l > i; ++i)
            that.controls[i].slideAction(new_slide);
        $slide_ele.children("a").each(function () {
          var $this = $(this);
          "video" === this.getAttribute("data-type")
            ? ((new_slide.video = this.getAttribute("href")),
              (new_slide.videoAutoPlay = $this.data("autoplay")),
              $this.remove())
            : $this.hasClass("ms-layer") || (new_slide.link = $(this));
        });
        that.__createSlideLayers(new_slide, $slide_ele.find(".ms-layer")),
          that.slides.push(new_slide),
          that.slideController.view.addSlide(new_slide);
      });
    }),
      (p._setupOverlayLayers = function () {
        var self = this,
          $ollayers = this.$element.children(".ms-overlay-layers").eq(0);
        if ($ollayers.length) {
          var overlayLayers = new MSOverlayLayers(this);
          (overlayLayers.$element = $ollayers),
            self.__createSlideLayers(
              overlayLayers,
              $ollayers.find(".ms-layer")
            ),
            this.view.$element.prepend($ollayers),
            (this.overlayLayers = overlayLayers),
            overlayLayers.create();
        }
      }),
      (p.__createSlideLayers = function (slide, layers) {
        0 != layers.length &&
          (slide.setupLayerController(),
          layers.each(function (index, domEle) {
            var $parent_ele,
              $layer_element = $(this);
            "A" === domEle.nodeName &&
              "image" === $layer_element.find(">img").data("type") &&
              (($parent_ele = $(this)),
              ($layer_element = $parent_ele.find("img")));
            var layer = new LayerTypes[$layer_element.data("type") || "text"]();
            (layer.$element = $layer_element),
              (layer.link = $parent_ele),
              (layer.id = layer.$element.data("id")),
              (layer.waitForAction = layer.$element.data("wait")),
              (layer.masked = layer.$element.data("masked")),
              (layer.maskWidth = layer.$element.data("mask-width")),
              (layer.maskHeight = layer.$element.data("mask-height"));
            var eff_parameters = {},
              end_eff_parameters = {};
            void 0 !== $layer_element.data("effect") &&
              (eff_parameters.name = $layer_element.data("effect")),
              void 0 !== $layer_element.data("ease") &&
                (eff_parameters.ease = $layer_element.data("ease")),
              void 0 !== $layer_element.data("duration") &&
                (eff_parameters.duration = $layer_element.data("duration")),
              void 0 !== $layer_element.data("delay") &&
                (eff_parameters.delay = $layer_element.data("delay")),
              $layer_element.data("hide-effect") &&
                (end_eff_parameters.name = $layer_element.data("hide-effect")),
              $layer_element.data("hide-ease") &&
                (end_eff_parameters.ease = $layer_element.data("hide-ease")),
              void 0 !== $layer_element.data("hide-duration") &&
                (end_eff_parameters.duration =
                  $layer_element.data("hide-duration")),
              void 0 !== $layer_element.data("hide-time") &&
                (end_eff_parameters.time = $layer_element.data("hide-time")),
              layer.setStartAnim(eff_parameters),
              layer.setEndAnim(end_eff_parameters),
              slide.layerController.addLayer(layer);
          }));
      }),
      (p._removeLoading = function () {
        $(window).off("resize", this.resize_listener),
          this.$element
            .removeClass("before-init")
            .css("visibility", "visible")
            .css("height", "")
            .css("opacity", 0),
          CTween.fadeIn(this.$element),
          this.$loading.remove(),
          this.slideController && this.slideController.__resize();
      }),
      (p._resize = function () {
        if (this.$loading) {
          var h = this.$loading[0].clientWidth / this.aspect;
          (h = this.options.heightLimit ? Math.min(h, this.options.height) : h),
            this.$loading.height(h),
            this.$element.height(h);
        }
      }),
      (p._shuffleSlides = function () {
        for (
          var r,
            slides = this.$element.children(".ms-slide"),
            i = 0,
            l = slides.length;
          l > i;
          ++i
        )
          (r = Math.floor(Math.random() * (l - 1))),
            i != r &&
              (this.$element[0].insertBefore(slides[i], slides[r]),
              (slides = this.$element.children(".ms-slide")));
      }),
      (p._setupSliderLayout = function () {
        this._updateSideMargins(), (this.lastMargin = this.leftSpace);
        var lo = this.options.layout;
        "boxed" !== lo && "partialview" !== lo && (this.options.fullwidth = !0),
          ("fullscreen" === lo || "autofill" === lo) &&
            ((this.options.fullheight = !0),
            "autofill" === lo &&
              ((this.$autofillTarget = $(this.options.autofillTarget)),
              0 === this.$autofillTarget.length &&
                (this.$autofillTarget = this.$element.parent()))),
          "partialview" === lo &&
            this.$element.addClass("ms-layout-partialview"),
          ("fullscreen" === lo || "fullwidth" === lo || "autofill" === lo) &&
            ($(window).on("resize", { that: this }, this._updateLayout),
            this._updateLayout()),
          $(window).on("resize", this.slideController.resize_listener);
      }),
      (p._updateLayout = function (event) {
        var that = event ? event.data.that : this,
          lo = that.options.layout,
          $element = that.$element,
          $win = $(window);
        if ("fullscreen" === lo)
          (document.body.style.overflow = "hidden"),
            $element.height(
              $win.height() -
                that.options.fullscreenMargin -
                that.topSpace -
                that.bottomSpace
            ),
            (document.body.style.overflow = "");
        else if ("autofill" === lo)
          return void $element
            .height(
              that.$autofillTarget.height() -
                that.options.fullscreenMargin -
                that.topSpace -
                that.bottomSpace
            )
            .width(
              that.$autofillTarget.width() - that.leftSpace - that.rightSpace
            );
        $element.width($win.width() - that.leftSpace - that.rightSpace);
        var margin = -$element.offset().left + that.leftSpace + that.lastMargin;
        $element.css("margin-left", margin), (that.lastMargin = margin);
      }),
      (p._init = function () {
        if (!(this._holdOn > 0) && this._docReady) {
          if (
            ((this.initialized = !0),
            "all" !== this.options.preload && this._removeLoading(),
            this.options.shuffle && this._shuffleSlides(),
            MSLayerEffects.setup(),
            this.slideController.setupView(),
            (this.view = this.slideController.view),
            (this.$controlsCont = $("<div></div>").addClass(
              "ms-inner-controls-cont"
            )),
            this.options.centerControls &&
              this.$controlsCont.css("max-width", this.options.width + "px"),
            this.$controlsCont.prepend(this.view.$element),
            (this.$msContainer = $("<div></div>")
              .addClass("ms-container")
              .prependTo(this.$element)
              .append(this.$controlsCont)),
            this.controls)
          )
            for (var i = 0, l = this.controls.length; l > i; ++i)
              this.controls[i].setup();
          if (
            (this._setupSliderLayout(),
            this.__setupSlides(),
            this.slideController.setup(),
            this._setupOverlayLayers(),
            this.controls)
          )
            for (i = 0, l = this.controls.length; l > i; ++i)
              this.controls[i].create();
          if (
            (this.options.autoHeight &&
              this.slideController.view.$element.height(
                this.slideController.currentSlide.getHeight()
              ),
            this.options.swipe &&
              !window._touch &&
              this.options.grabCursor &&
              this.options.mouse)
          ) {
            var $view = this.view.$element;
            $view
              .on("mousedown", function () {
                $view.removeClass("ms-grab-cursor"),
                  $view.addClass("ms-grabbing-cursor"),
                  window.MSBrowserInfo.msie &&
                    window.ms_grabbing_curosr &&
                    ($view[0].style.cursor =
                      "url(" + window.ms_grabbing_curosr + "), move");
              })
              .addClass("ms-grab-cursor"),
              $(document).on("mouseup", function () {
                $view.removeClass("ms-grabbing-cursor"),
                  $view.addClass("ms-grab-cursor"),
                  window.MSBrowserInfo.msie &&
                    window.ms_grab_curosr &&
                    ($view[0].style.cursor =
                      "url(" + window.ms_grab_curosr + "), move");
              });
          }
          this.slideController.__dispatchInit();
        }
      }),
      (p.setHeight = function (value) {
        this.options.smoothHeight
          ? (this.htween &&
              (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)),
            (this.htween = CTween.animate(
              this.slideController.view.$element,
              500,
              { height: value },
              { ease: "easeOutQuart" }
            )))
          : this.slideController.view.$element.height(value);
      }),
      (p.reserveSpace = function (side, space) {
        var sideSpace = side + "Space",
          pos = this[sideSpace];
        return (this[sideSpace] += space), this._updateSideMargins(), pos;
      }),
      (p._updateSideMargins = function () {
        this.$element.css(
          "margin",
          this.topSpace +
            "px " +
            this.rightSpace +
            "px " +
            this.bottomSpace +
            "px " +
            this.leftSpace +
            "px"
        );
      }),
      (p._realignControls = function () {
        (this.rightSpace =
          this.leftSpace =
          this.topSpace =
          this.bottomSpace =
            0),
          this._updateSideMargins(),
          this.api.dispatchEvent(
            new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE)
          );
      }),
      (p.control = function (control, options) {
        if (control in MSSlideController.SliderControlList) {
          this.controls || (this.controls = []);
          var ins = new MSSlideController.SliderControlList[control](options);
          return (ins.slider = this), this.controls.push(ins), this;
        }
      }),
      (p.holdOn = function () {
        this._holdOn++;
      }),
      (p.release = function () {
        this._holdOn--, this._init();
      }),
      (p.setup = function (target, options) {
        if (
          ((this.$element =
            "string" == typeof target ? $("#" + target) : target.eq(0)),
          (this.setupMarkup = this.$element.html()),
          0 !== this.$element.length)
        ) {
          this.$element.addClass("master-slider").addClass("before-init"),
            window.MSBrowserInfo.msie
              ? this.$element
                  .addClass("ms-ie")
                  .addClass(
                    "ms-ie" +
                      window.MSBrowserInfo.version.slice(
                        0,
                        window.MSBrowserInfo.version.indexOf(".")
                      )
                  )
              : window.MSBrowserInfo.webkit
              ? this.$element.addClass("ms-wk")
              : window.MSBrowserInfo.mozilla &&
                this.$element.addClass("ms-moz");
          var ua = navigator.userAgent.toLowerCase(),
            isAndroid = ua.indexOf("android") > -1;
          isAndroid && this.$element.addClass("ms-android");
          var that = this;
          $.extend(this.options, options),
            (this.aspect = this.options.width / this.options.height),
            (this.responsiveWidth = [
              this.options.phoneWidth,
              this.options.tabletWidth,
              this.options.width,
            ]),
            (this.responsiveHeight = [
              this.options.phoneHeight,
              this.options.tabletHeight,
              this.options.height,
            ]),
            (this.responsiveAspect = [
              this.options.phoneWidth / this.options.phoneHeight,
              this.options.tabletWidth / this.options.tabletHeight,
              this.options.width / this.options.height,
            ]),
            (this.$loading = $("<div></div>")
              .addClass("ms-loading-container")
              .insertBefore(this.$element)
              .append($("<div></div>").addClass("ms-loading"))),
            this.$loading.parent().css("position", "relative"),
            this.options.autofill &&
              ((this.options.fullwidth = !0), (this.options.fullheight = !0)),
            this.options.fullheight && this.$element.addClass("ms-fullheight"),
            this._resize(),
            (this.slideController = new MSSlideController(this)),
            (this.api = this.slideController);
          for (var i = 0, l = MS._plugins.length; i !== l; i++) {
            var plugin = MS._plugins[i];
            -1 === this.options.disablePlugins.indexOf(plugin.name) &&
              this.activePlugins.push(new plugin(this));
          }
          return (
            this.options.forceInit && MasterSlider.addJQReadyErrorCheck(this),
            $(document).ready(function () {
              that.initialized || ((that._docReady = !0), that._init());
            }),
            this
          );
        }
      }),
      (p.getActiveBreakpoint = function (getIndex) {
        var bpList = ["phone", "tablet", "desktop"],
          bpSizes = [
            this.options.phoneWidth || 480,
            this.options.tabletWidth || 768,
            this.options.width,
          ],
          currentSize =
            "self" === this.options.sizingReference
              ? this.$element.outerWidth(!1)
              : window.innerWidth,
          bp = "desktop",
          bpIndex = 2;
        return (
          bpSizes.every(
            function (size, index) {
              return size >= currentSize
                ? ((bp = bpList[index]), (bpIndex = index), !1)
                : !0;
            }.bind(this)
          ),
          getIndex ? bpIndex : bp
        );
      }),
      (p.getBreakpointReferenceSize = function () {
        var bp = this.getActiveBreakpoint();
        return "desktop" === bp
          ? this.options.width
          : this.options[bp + "Width"];
      }),
      (p.getResponsiveValue = function (repsVal) {
        var bpIndex = this.getActiveBreakpoint(!0);
        return repsVal.slice(bpIndex).filter(function (value) {
          return void 0 !== value && 1 / 0 !== value;
        })[0];
      }),
      (p.destroy = function (insertMarkup) {
        for (var i = 0, l = this.activePlugins.length; i !== l; i++)
          this.activePlugins[i].destroy();
        if (this.controls)
          for (i = 0, l = this.controls.length; i !== l; i++)
            this.controls[i].destroy();
        this.slideController && this.slideController._destroy(),
          this.$loading && this.$loading.remove(),
          insertMarkup
            ? this.$element.html(this.setupMarkup).css("visibility", "hidden")
            : this.$element.remove();
        var lo = this.options.layout;
        ("fullscreen" === lo || "fullwidth" === lo) &&
          $(window).off("resize", this._updateLayout),
          (this.view = null),
          (this.slides = null),
          (this.options = null),
          (this.slideController = null),
          (this.api = null),
          (this.resize_listener = null),
          (this.activePlugins = null);
      });
  })(jQuery),
  (function ($, window, document, undefined) {
    function MasterSliderPlugin(element, options) {
      (this.element = element),
        (this.$element = $(element)),
        (this.settings = $.extend({}, defaults, options)),
        (this._defaults = defaults),
        (this._name = pluginName),
        this.init();
    }
    var pluginName = "masterslider",
      defaults = { controls: {} };
    $.extend(MasterSliderPlugin.prototype, {
      init: function () {
        var self = this;
        this._slider = new MasterSlider();
        for (var control in this.settings.controls)
          this._slider.control(control, this.settings.controls[control]);
        this._slider.setup(this.$element, this.settings);
        var _superDispatch = this._slider.api.dispatchEvent;
        this._slider.api.dispatchEvent = function (event) {
          self.$element.trigger(event.type), _superDispatch.call(this, event);
        };
      },
      api: function () {
        return this._slider.api;
      },
      slider: function () {
        return this._slider;
      },
    }),
      ($.fn[pluginName] = function (options) {
        var args = arguments,
          plugin = "plugin_" + pluginName;
        if (options === undefined || "object" == typeof options)
          return this.each(function () {
            $.data(this, plugin) ||
              $.data(this, plugin, new MasterSliderPlugin(this, options));
          });
        if (
          "string" == typeof options &&
          "_" !== options[0] &&
          "init" !== options
        ) {
          var returns;
          return (
            this.each(function () {
              var instance = $.data(this, plugin);
              instance instanceof MasterSliderPlugin &&
                "function" == typeof instance[options] &&
                (returns = instance[options].apply(
                  instance,
                  Array.prototype.slice.call(args, 1)
                )),
                instance instanceof MasterSliderPlugin &&
                  "function" == typeof instance._slider.api[options] &&
                  (returns = instance._slider.api[options].apply(
                    instance._slider.api,
                    Array.prototype.slice.call(args, 1)
                  )),
                "destroy" === options && $.data(this, plugin, null);
            }),
            returns !== undefined ? returns : this
          );
        }
      });
  })(jQuery, window, document),
  (function ($, window) {
    "use strict";
    var sliderInstances = [];
    MasterSlider.addJQReadyErrorCheck = function (slider) {
      sliderInstances.push(slider);
    };
    var _ready = $.fn.ready,
      _onerror = window.onerror;
    $.fn.ready = function () {
      return (
        (window.onerror = function () {
          if (0 !== sliderInstances.length)
            for (var i = 0, l = sliderInstances.length; i !== l; i++) {
              var slider = sliderInstances[i];
              slider.initialized || ((slider._docReady = !0), slider._init());
            }
          return _onerror ? _onerror.apply(this, arguments) : !1;
        }),
        _ready.apply(this, arguments)
      );
    };
  })(jQuery, window, document),
  (window.MSViewEvents = function (type, data) {
    (this.type = type), (this.data = data);
  }),
  (MSViewEvents.SWIPE_START = "swipeStart"),
  (MSViewEvents.SWIPE_END = "swipeEnd"),
  (MSViewEvents.SWIPE_MOVE = "swipeMove"),
  (MSViewEvents.SWIPE_CANCEL = "swipeCancel"),
  (MSViewEvents.SCROLL = "scroll"),
  (MSViewEvents.CHANGE_START = "slideChangeStart"),
  (MSViewEvents.CHANGE_END = "slideChangeEnd"),
  (function ($) {
    "use strict";
    window.MSBasicView = function (options) {
      (this.options = {
        loop: !1,
        dir: "h",
        autoHeight: !1,
        spacing: 5,
        mouseSwipe: !0,
        swipe: !0,
        speed: 17,
        minSlideSpeed: 2,
        viewNum: 20,
        critMargin: 1,
      }),
        $.extend(this.options, options),
        (this.dir = this.options.dir),
        (this.loop = this.options.loop),
        (this.spacing = this.options.spacing),
        (this.__width = 0),
        (this.__height = 0),
        (this.__cssProb = "h" === this.dir ? "left" : "top"),
        (this.__offset = "h" === this.dir ? "offsetLeft" : "offsetTop"),
        (this.__dimension = "h" === this.dir ? "__width" : "__height"),
        (this.__translate_end = window._css3d ? " translateZ(0px)" : ""),
        (this.$slideCont = $("<div></div>").addClass("ms-slide-container")),
        (this.$element = $("<div></div>")
          .addClass("ms-view")
          .addClass("ms-basic-view")
          .append(this.$slideCont)),
        (this.currentSlide = null),
        (this.index = -1),
        (this.slidesCount = 0),
        (this.slides = []),
        (this.slideList = []),
        (this.viewSlidesList = []),
        (this.css3 = window._cssanim),
        (this.start_buffer = 0),
        (this.firstslide_snap = 0),
        (this.slideChanged = !1),
        (this.controller = new Controller(0, 0, {
          snapping: !0,
          snapsize: 100,
          paging: !0,
          snappingMinSpeed: this.options.minSlideSpeed,
          friction: (100 - 0.5 * this.options.speed) / 100,
          endless: this.loop,
        })),
        this.controller.renderCallback(
          "h" === this.dir ? this._horizUpdate : this._vertiUpdate,
          this
        ),
        this.controller.snappingCallback(this.__snapUpdate, this),
        this.controller.snapCompleteCallback(this.__snapCompelet, this),
        averta.EventDispatcher.call(this);
    };
    var p = MSBasicView.prototype;
    (p.__snapCompelet = function () {
      this.slideChanged &&
        ((this.slideChanged = !1),
        this.__locateSlides(),
        (this.start_buffer = 0),
        this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)));
    }),
      (p.__snapUpdate = function (controller, snap, change) {
        if (this.loop) {
          var target_index = this.index + change;
          this.updateLoop(target_index),
            target_index >= this.slidesCount &&
              (target_index -= this.slidesCount),
            0 > target_index &&
              (target_index = this.slidesCount + target_index),
            (this.index = target_index);
        } else {
          if (0 > snap || snap >= this.slidesCount) return;
          this.index = snap;
        }
        this._checkCritMargins(),
          window.MSBrowserInfo.mozilla &&
            ((this.slideList[this.index].$element[0].style.marginTop = "0.1px"),
            this.currentSlide &&
              (this.currentSlide.$element[0].style.marginTop = ""));
        var new_slide = this.slideList[this.index];
        new_slide !== this.currentSlide &&
          ((this.currentSlide = new_slide),
          this.autoUpdateZIndex && this.__updateSlidesZindex(),
          (this.slideChanged = !0),
          this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)));
      }),
      (p._checkCritMargins = function () {
        if (!this.normalMode) {
          var hlf = Math.floor(this.options.viewNum / 2),
            inView = this.viewSlidesList.indexOf(this.slideList[this.index]),
            size = this[this.__dimension] + this.spacing,
            cm = this.options.critMargin;
          return this.loop
            ? void (
                (cm >= inView || inView >= this.viewSlidesList.length - cm) &&
                ((size *= inView - hlf),
                this.__locateSlides(!1, size + this.start_buffer),
                (this.start_buffer += size))
              )
            : void (
                ((cm > inView && this.index >= cm) ||
                  (inView >= this.viewSlidesList.length - cm &&
                    this.index < this.slidesCount - cm)) &&
                this.__locateSlides(!1)
              );
        }
      }),
      (p._vertiUpdate = function (controller, value) {
        return (
          (this.__contPos = value),
          this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)),
          this.css3
            ? void (this.$slideCont[0].style[window._jcsspfx + "Transform"] =
                "translateY(" + -value + "px)" + this.__translate_end)
            : void (this.$slideCont[0].style.top = -value + "px")
        );
      }),
      (p._horizUpdate = function (controller, value) {
        return (
          (this.__contPos = value),
          this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)),
          this.css3
            ? void (this.$slideCont[0].style[window._jcsspfx + "Transform"] =
                "translateX(" + -value + "px)" + this.__translate_end)
            : void (this.$slideCont[0].style.left = -value + "px")
        );
      }),
      (p.__updateViewList = function () {
        if (this.normalMode) return void (this.viewSlidesList = this.slides);
        var temp = this.viewSlidesList.slice();
        this.viewSlidesList = [];
        var l,
          i = 0,
          hlf = Math.floor(this.options.viewNum / 2);
        if (this.loop)
          for (; i !== this.options.viewNum; i++)
            this.viewSlidesList.push(
              this.slides[this.currentSlideLoc - hlf + i]
            );
        else {
          for (i = 0; i !== hlf && this.index - i !== -1; i++)
            this.viewSlidesList.unshift(this.slideList[this.index - i]);
          for (i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
            this.viewSlidesList.push(this.slideList[this.index + i]);
        }
        for (i = 0, l = temp.length; i !== l; i++)
          -1 === this.viewSlidesList.indexOf(temp[i]) && temp[i].sleep();
        (temp = null), this.currentSlide && this.__updateSlidesZindex();
      }),
      (p.__locateSlides = function (move, start) {
        this.__updateViewList(),
          (start = this.loop
            ? start || 0
            : this.slides.indexOf(this.viewSlidesList[0]) *
              (this[this.__dimension] + this.spacing));
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
          var pos = start + i * (this[this.__dimension] + this.spacing);
          (slide = this.viewSlidesList[i]),
            slide.wakeup(),
            (slide.position = pos),
            (slide.$element[0].style[this.__cssProb] = pos + "px");
        }
        move !== !1 &&
          this.controller.changeTo(
            this.slideList[this.index].position,
            !1,
            null,
            null,
            !1
          );
      }),
      (p.__createLoopList = function () {
        var return_arr = [],
          i = 0,
          count = this.slidesCount / 2,
          before_count =
            this.slidesCount % 2 === 0 ? count - 1 : Math.floor(count),
          after_count = this.slidesCount % 2 === 0 ? count : Math.floor(count);
        for (this.currentSlideLoc = before_count, i = 1; before_count >= i; ++i)
          return_arr.unshift(
            this.slideList[
              this.index - i < 0
                ? this.slidesCount - i + this.index
                : this.index - i
            ]
          );
        for (
          return_arr.push(this.slideList[this.index]), i = 1;
          after_count >= i;
          ++i
        )
          return_arr.push(
            this.slideList[
              this.index + i >= this.slidesCount
                ? this.index + i - this.slidesCount
                : this.index + i
            ]
          );
        return return_arr;
      }),
      (p.__getSteps = function (index, target) {
        var right =
            index > target ? this.slidesCount - index + target : target - index,
          left = Math.abs(this.slidesCount - right);
        return left > right ? right : -left;
      }),
      (p.__pushEnd = function () {
        var first_slide = this.slides.shift(),
          last_slide = this.slides[this.slidesCount - 2];
        if ((this.slides.push(first_slide), this.normalMode)) {
          var pos =
            last_slide.$element[0][this.__offset] +
            this.spacing +
            this[this.__dimension];
          (first_slide.$element[0].style[this.__cssProb] = pos + "px"),
            (first_slide.position = pos);
        }
      }),
      (p.__pushStart = function () {
        var last_slide = this.slides.pop(),
          first_slide = this.slides[0];
        if ((this.slides.unshift(last_slide), this.normalMode)) {
          var pos =
            first_slide.$element[0][this.__offset] -
            this.spacing -
            this[this.__dimension];
          (last_slide.$element[0].style[this.__cssProb] = pos + "px"),
            (last_slide.position = pos);
        }
      }),
      (p.__updateSlidesZindex = function () {
        {
          var slide,
            l = this.viewSlidesList.length;
          Math.floor(l / 2);
        }
        if (this.loop)
          for (
            var loc = this.viewSlidesList.indexOf(this.currentSlide), i = 0;
            i !== l;
            i++
          )
            (slide = this.viewSlidesList[i]),
              this.viewSlidesList[i].$element.css(
                "z-index",
                loc >= i ? i + 1 : l - i
              );
        else {
          for (
            var beforeNum =
                this.currentSlide.index - this.viewSlidesList[0].index,
              i = 0;
            i !== l;
            i++
          )
            this.viewSlidesList[i].$element.css(
              "z-index",
              beforeNum >= i ? i + 1 : l - i
            );
          this.currentSlide.$element.css("z-index", l);
        }
      }),
      (p.addSlide = function (slide) {
        (slide.view = this),
          this.slides.push(slide),
          this.slideList.push(slide),
          this.slidesCount++;
      }),
      (p.appendSlide = function (slide) {
        this.$slideCont.append(slide.$element);
      }),
      (p.updateLoop = function (index) {
        if (this.loop)
          for (
            var steps = this.__getSteps(this.index, index),
              i = 0,
              l = Math.abs(steps);
            l > i;
            ++i
          )
            0 > steps ? this.__pushStart() : this.__pushEnd();
      }),
      (p.gotoSlide = function (index, fast) {
        this.updateLoop(index), (this.index = index);
        var target_slide = this.slideList[index];
        this._checkCritMargins(),
          this.controller.changeTo(
            target_slide.position,
            !fast,
            null,
            null,
            !1
          ),
          target_slide !== this.currentSlide &&
            ((this.slideChanged = !0),
            (this.currentSlide = target_slide),
            this.autoUpdateZIndex && this.__updateSlidesZindex(),
            this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)),
            fast &&
              this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)));
      }),
      (p.next = function (checkLoop) {
        return checkLoop && !this.loop && this.index + 1 >= this.slidesCount
          ? void this.controller.bounce(10)
          : void this.gotoSlide(
              this.index + 1 >= this.slidesCount ? 0 : this.index + 1
            );
      }),
      (p.previous = function (checkLoop) {
        return checkLoop && !this.loop && this.index - 1 < 0
          ? void this.controller.bounce(-10)
          : void this.gotoSlide(
              this.index - 1 < 0 ? this.slidesCount - 1 : this.index - 1
            );
      }),
      (p.setupSwipe = function () {
        (this.swipeControl = new averta.TouchSwipe(this.$element)),
          (this.swipeControl.swipeType =
            "h" === this.dir ? "horizontal" : "vertical");
        var that = this;
        this.swipeControl.onSwipe =
          "h" === this.dir
            ? function (status) {
                that.horizSwipeMove(status);
              }
            : function (status) {
                that.vertSwipeMove(status);
              };
      }),
      (p.vertSwipeMove = function (status) {
        var phase = status.phase;
        if ("start" === phase)
          this.controller.stop(),
            this.dispatchEvent(
              new MSViewEvents(MSViewEvents.SWIPE_START, status)
            );
        else if (
          "move" === phase &&
          (!this.loop ||
            Math.abs(
              this.currentSlide.position - this.controller.value + status.moveY
            ) <
              this.cont_size / 2)
        )
          this.controller.drag(status.moveY),
            this.dispatchEvent(
              new MSViewEvents(MSViewEvents.SWIPE_MOVE, status)
            );
        else if ("end" === phase || "cancel" === phase) {
          var speed = ((status.distanceY / status.duration) * 50) / 3,
            speedh = Math.abs(((status.distanceY / status.duration) * 50) / 3);
          Math.abs(speed) > 0.1 && Math.abs(speed) >= speedh
            ? (this.controller.push(-speed),
              speed > this.controller.options.snappingMinSpeed &&
                this.dispatchEvent(
                  new MSViewEvents(MSViewEvents.SWIPE_END, status)
                ))
            : (this.controller.cancel(),
              this.dispatchEvent(
                new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status)
              ));
        }
      }),
      (p.horizSwipeMove = function (status) {
        var phase = status.phase;
        if ("start" === phase)
          this.controller.stop(),
            this.dispatchEvent(
              new MSViewEvents(MSViewEvents.SWIPE_START, status)
            );
        else if (
          "move" === phase &&
          (!this.loop ||
            Math.abs(
              this.currentSlide.position - this.controller.value + status.moveX
            ) <
              this.cont_size / 2)
        )
          this.controller.drag(status.moveX),
            this.dispatchEvent(
              new MSViewEvents(MSViewEvents.SWIPE_MOVE, status)
            );
        else if ("end" === phase || "cancel" === phase) {
          var speed = ((status.distanceX / status.duration) * 50) / 3,
            speedv = Math.abs(((status.distanceY / status.duration) * 50) / 3);
          Math.abs(speed) > 0.1 && Math.abs(speed) >= speedv
            ? (this.controller.push(-speed),
              speed > this.controller.options.snappingMinSpeed &&
                this.dispatchEvent(
                  new MSViewEvents(MSViewEvents.SWIPE_END, status)
                ))
            : (this.controller.cancel(),
              this.dispatchEvent(
                new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status)
              ));
        }
      }),
      (p.setSize = function (width, height, hard) {
        if (this.lastWidth !== width || height !== this.lastHeight || hard) {
          this.$element.width(width).height(height);
          for (var i = 0; i < this.slidesCount; ++i)
            this.slides[i].setSize(width, height, hard);
          (this.__width = width),
            (this.__height = height),
            this.__created &&
              (this.__locateSlides(),
              (this.cont_size =
                (this.slidesCount - 1) *
                (this[this.__dimension] + this.spacing)),
              this.loop || (this.controller._max_value = this.cont_size),
              (this.controller.options.snapsize =
                this[this.__dimension] + this.spacing),
              this.controller.changeTo(
                this.currentSlide.position,
                !1,
                null,
                null,
                !1
              ),
              this.controller.cancel(),
              (this.lastWidth = width),
              (this.lastHeight = height));
        }
      }),
      (p.create = function (index) {
        (this.__created = !0),
          (this.index = Math.min(index || 0, this.slidesCount - 1)),
          (this.lastSnap = this.index),
          this.loop && (this.slides = this.__createLoopList()),
          (this.normalMode = this.slidesCount <= this.options.viewNum);
        for (var i = 0; i < this.slidesCount; ++i) this.slides[i].create();
        this.__locateSlides(),
          (this.controller.options.snapsize =
            this[this.__dimension] + this.spacing),
          this.loop ||
            (this.controller._max_value =
              (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)),
          this.gotoSlide(this.index, !0),
          this.options.swipe &&
            (window._touch || this.options.mouseSwipe) &&
            this.setupSwipe();
      }),
      (p.destroy = function () {
        if (this.__created) {
          for (var i = 0; i < this.slidesCount; ++i) this.slides[i].destroy();
          (this.slides = null),
            (this.slideList = null),
            this.$element.remove(),
            this.controller.destroy(),
            (this.controller = null);
        }
      }),
      averta.EventDispatcher.extend(p),
      MSSlideController.registerView("basic", MSBasicView);
  })(jQuery),
  (function () {
    "use strict";
    (window.MSWaveView = function (options) {
      MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"),
        this.$slideCont.css(window._csspfx + "transform-style", "preserve-3d"),
        (this.autoUpdateZIndex = !0);
    }),
      MSWaveView.extend(MSBasicView),
      (MSWaveView._3dreq = !0),
      (MSWaveView._fallback = MSBasicView);
    var p = MSWaveView.prototype,
      _super = MSBasicView.prototype;
    (p._horizUpdate = function (controller, value) {
      _super._horizUpdate.call(this, controller, value);
      for (
        var slide, distance, cont_scroll = -value, i = 0;
        i < this.slidesCount;
        ++i
      )
        (slide = this.slideList[i]),
          (distance = -cont_scroll - slide.position),
          this.__updateSlidesHoriz(slide, distance);
    }),
      (p._vertiUpdate = function (controller, value) {
        _super._vertiUpdate.call(this, controller, value);
        for (
          var slide, distance, cont_scroll = -value, i = 0;
          i < this.slidesCount;
          ++i
        )
          (slide = this.slideList[i]),
            (distance = -cont_scroll - slide.position),
            this.__updateSlidesVertic(slide, distance);
      }),
      (p.__updateSlidesHoriz = function (slide, distance) {
        var value = Math.abs((100 * distance) / this.__width);
        slide.$element[0].style[window._csspfx + "transform"] =
          "translateZ(" + 3 * -value + "px) rotateY(0.01deg)";
      }),
      (p.__updateSlidesVertic = function (slide, distance) {
        this.__updateSlidesHoriz(slide, distance);
      }),
      MSSlideController.registerView("wave", MSWaveView);
  })(jQuery),
  (function () {
    (window.MSFadeBasicView = function (options) {
      MSWaveView.call(this, options),
        this.$element
          .removeClass("ms-wave-view")
          .addClass("ms-fade-basic-view");
    }),
      MSFadeBasicView.extend(MSWaveView);
    {
      var p = MSFadeBasicView.prototype;
      MSFadeBasicView.prototype;
    }
    (p.__updateSlidesHoriz = function (slide, distance) {
      var value = Math.abs((0.6 * distance) / this.__width);
      (value = 1 - Math.min(value, 0.6)), slide.$element.css("opacity", value);
    }),
      (p.__updateSlidesVertic = function (slide, distance) {
        this.__updateSlidesHoriz(slide, distance);
      }),
      MSSlideController.registerView("fadeBasic", MSFadeBasicView),
      (MSWaveView._fallback = MSFadeBasicView);
  })(),
  (function () {
    (window.MSFadeWaveView = function (options) {
      MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-fade-wave-view");
    }),
      MSFadeWaveView.extend(MSWaveView),
      (MSFadeWaveView._3dreq = !0),
      (MSFadeWaveView._fallback = MSFadeBasicView);
    {
      var p = MSFadeWaveView.prototype;
      MSWaveView.prototype;
    }
    (p.__updateSlidesHoriz = function (slide, distance) {
      var value = Math.abs((100 * distance) / this.__width);
      (value = Math.min(value, 100)),
        slide.$element.css("opacity", 1 - value / 300),
        (slide.$element[0].style[window._jcsspfx + "Transform"] =
          "scale(" + (1 - value / 800) + ") rotateY(0.01deg) ");
    }),
      (p.__updateSlidesVertic = function (slide, distance) {
        this.__updateSlidesHoriz(slide, distance);
      }),
      MSSlideController.registerView("fadeWave", MSFadeWaveView);
  })(),
  (function () {
    "use strict";
    (window.MSFlowView = function (options) {
      MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-flow-view");
    }),
      MSFlowView.extend(MSWaveView),
      (MSFlowView._3dreq = !0),
      (MSFlowView._fallback = MSFadeBasicView);
    {
      var p = MSFlowView.prototype;
      MSWaveView.prototype;
    }
    (p.__updateSlidesHoriz = function (slide, distance) {
      var value = Math.abs((100 * distance) / this.__width),
        rvalue = Math.min(0.3 * value, 30) * (0 > distance ? -1 : 1),
        zvalue = 1.2 * value;
      slide.$element[0].style[window._jcsspfx + "Transform"] =
        "translateZ(" + 5 * -zvalue + "px) rotateY(" + rvalue + "deg) ";
    }),
      (p.__updateSlidesVertic = function (slide, distance) {
        var value = Math.abs((100 * distance) / this.__width),
          rvalue = Math.min(0.3 * value, 30) * (0 > distance ? -1 : 1),
          zvalue = 1.2 * value;
        slide.$element[0].style[window._jcsspfx + "Transform"] =
          "translateZ(" + 5 * -zvalue + "px) rotateX(" + -rvalue + "deg) ";
      }),
      MSSlideController.registerView("flow", MSFlowView);
  })(jQuery),
  (function () {
    (window.MSFadeFlowView = function (options) {
      MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-fade-flow-view");
    }),
      MSFadeFlowView.extend(MSWaveView),
      (MSFadeFlowView._3dreq = !0);
    {
      var p = MSFadeFlowView.prototype;
      MSWaveView.prototype;
    }
    (p.__calculate = function (distance) {
      var value = Math.min(Math.abs((100 * distance) / this.__width), 100),
        rvalue = Math.min(0.5 * value, 50) * (0 > distance ? -1 : 1);
      return { value: value, rvalue: rvalue };
    }),
      (p.__updateSlidesHoriz = function (slide, distance) {
        var clc = this.__calculate(distance);
        slide.$element.css("opacity", 1 - clc.value / 300),
          (slide.$element[0].style[window._jcsspfx + "Transform"] =
            "translateZ(" + -clc.value + "px) rotateY(" + clc.rvalue + "deg) ");
      }),
      (p.__updateSlidesVertic = function (slide, distance) {
        var clc = this.__calculate(distance);
        slide.$element.css("opacity", 1 - clc.value / 300),
          (slide.$element[0].style[window._jcsspfx + "Transform"] =
            "translateZ(" +
            -clc.value +
            "px) rotateX(" +
            -clc.rvalue +
            "deg) ");
      }),
      MSSlideController.registerView("fadeFlow", MSFadeFlowView);
  })(),
  (function ($) {
    "use strict";
    (window.MSMaskView = function (options) {
      MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-mask-view");
    }),
      MSMaskView.extend(MSBasicView);
    var p = MSMaskView.prototype,
      _super = MSBasicView.prototype;
    (p.addSlide = function (slide) {
      (slide.view = this),
        (slide.$frame = $("<div></div>")
          .addClass("ms-mask-frame")
          .append(slide.$element)),
        (slide.$element[0].style.position = "relative"),
        (slide.autoAppend = !1),
        this.slides.push(slide),
        this.slideList.push(slide),
        this.slidesCount++;
    }),
      (p.setSize = function (width, height) {
        for (
          var slider = this.slides[0].slider, i = 0;
          i < this.slidesCount;
          ++i
        )
          (this.slides[i].$frame[0].style.width = width + "px"),
            slider.options.autoHeight ||
              (this.slides[i].$frame[0].style.height = height + "px");
        _super.setSize.call(this, width, height);
      }),
      (p._horizUpdate = function (controller, value) {
        _super._horizUpdate.call(this, controller, value);
        var i = 0;
        if (this.css3)
          for (i = 0; i < this.slidesCount; ++i)
            this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] =
              "translateX(" +
              (value - this.slideList[i].position) +
              "px)" +
              this.__translate_end;
        else
          for (i = 0; i < this.slidesCount; ++i)
            this.slideList[i].$element[0].style.left =
              value - this.slideList[i].position + "px";
      }),
      (p._vertiUpdate = function (controller, value) {
        _super._vertiUpdate.call(this, controller, value);
        var i = 0;
        if (this.css3)
          for (i = 0; i < this.slidesCount; ++i)
            this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] =
              "translateY(" +
              (value - this.slideList[i].position) +
              "px)" +
              this.__translate_end;
        else
          for (i = 0; i < this.slidesCount; ++i)
            this.slideList[i].$element[0].style.top =
              value - this.slideList[i].position + "px";
      }),
      (p.__pushEnd = function () {
        var first_slide = this.slides.shift(),
          last_slide = this.slides[this.slidesCount - 2];
        if ((this.slides.push(first_slide), this.normalMode)) {
          var pos =
            last_slide.$frame[0][this.__offset] +
            this.spacing +
            this[this.__dimension];
          (first_slide.$frame[0].style[this.__cssProb] = pos + "px"),
            (first_slide.position = pos);
        }
      }),
      (p.__pushStart = function () {
        var last_slide = this.slides.pop(),
          first_slide = this.slides[0];
        if ((this.slides.unshift(last_slide), this.normalMode)) {
          var pos =
            first_slide.$frame[0][this.__offset] -
            this.spacing -
            this[this.__dimension];
          (last_slide.$frame[0].style[this.__cssProb] = pos + "px"),
            (last_slide.position = pos);
        }
      }),
      (p.__updateViewList = function () {
        if (this.normalMode) return void (this.viewSlidesList = this.slides);
        var temp = this.viewSlidesList.slice();
        this.viewSlidesList = [];
        var l,
          i = 0,
          hlf = Math.floor(this.options.viewNum / 2);
        if (this.loop)
          for (; i !== this.options.viewNum; i++)
            this.viewSlidesList.push(
              this.slides[this.currentSlideLoc - hlf + i]
            );
        else {
          for (i = 0; i !== hlf && this.index - i !== -1; i++)
            this.viewSlidesList.unshift(this.slideList[this.index - i]);
          for (i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
            this.viewSlidesList.push(this.slideList[this.index + i]);
        }
        for (i = 0, l = temp.length; i !== l; i++)
          -1 === this.viewSlidesList.indexOf(temp[i]) &&
            (temp[i].sleep(), temp[i].$frame.detach());
        temp = null;
      }),
      (p.__locateSlides = function (move, start) {
        this.__updateViewList(),
          (start = this.loop
            ? start || 0
            : this.slides.indexOf(this.viewSlidesList[0]) *
              (this[this.__dimension] + this.spacing));
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
          var pos = start + i * (this[this.__dimension] + this.spacing);
          if (
            ((slide = this.viewSlidesList[i]),
            this.$slideCont.append(slide.$frame),
            slide.wakeup(!1),
            (slide.position = pos),
            slide.selected && slide.bgvideo)
          )
            try {
              slide.bgvideo.play();
            } catch (e) {}
          slide.$frame[0].style[this.__cssProb] = pos + "px";
        }
        move !== !1 &&
          this.controller.changeTo(
            this.slideList[this.index].position,
            !1,
            null,
            null,
            !1
          );
      }),
      MSSlideController.registerView("mask", MSMaskView);
  })(jQuery),
  (function () {
    "use strict";
    (window.MSParallaxMaskView = function (options) {
      MSMaskView.call(this, options),
        this.$element
          .removeClass("ms-basic-view")
          .addClass("ms-parallax-mask-view");
    }),
      MSParallaxMaskView.extend(MSMaskView),
      (MSParallaxMaskView.parallaxAmount = 0.5);
    var p = MSParallaxMaskView.prototype,
      _super = MSBasicView.prototype;
    (p._horizUpdate = function (controller, value) {
      _super._horizUpdate.call(this, controller, value);
      var i = 0;
      if (this.css3)
        for (i = 0; i < this.slidesCount; ++i)
          this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] =
            "translateX(" +
            (value - this.slideList[i].position) *
              MSParallaxMaskView.parallaxAmount +
            "px)" +
            this.__translate_end;
      else
        for (i = 0; i < this.slidesCount; ++i)
          this.slideList[i].$element[0].style.left =
            (value - this.slideList[i].position) *
              MSParallaxMaskView.parallaxAmount +
            "px";
    }),
      (p._vertiUpdate = function (controller, value) {
        _super._vertiUpdate.call(this, controller, value);
        var i = 0;
        if (this.css3)
          for (i = 0; i < this.slidesCount; ++i)
            this.slideList[i].$element[0].style[window._jcsspfx + "Transform"] =
              "translateY(" +
              (value - this.slideList[i].position) *
                MSParallaxMaskView.parallaxAmount +
              "px)" +
              this.__translate_end;
        else
          for (i = 0; i < this.slidesCount; ++i)
            this.slideList[i].$element[0].style.top =
              (value - this.slideList[i].position) *
                MSParallaxMaskView.parallaxAmount +
              "px";
      }),
      MSSlideController.registerView("parallaxMask", MSParallaxMaskView);
  })(jQuery),
  (function () {
    "use strict";
    (window.MSFadeView = function (options) {
      MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"),
        this.controller.renderCallback(this.__update, this);
    }),
      MSFadeView.extend(MSBasicView);
    var p = MSFadeView.prototype,
      _super = MSBasicView.prototype;
    (p.__update = function (controller, value) {
      for (
        var slide, distance, cont_scroll = -value, i = 0;
        i < this.slidesCount;
        ++i
      )
        (slide = this.slideList[i]),
          (distance = -cont_scroll - slide.position),
          this.__updateSlides(slide, distance);
    }),
      (p.__updateSlides = function (slide, distance) {
        var value = Math.abs(distance / this[this.__dimension]);
        0 >= 1 - value
          ? slide.$element.css("opacity", 0).css("visibility", "hidden")
          : slide.$element.css("opacity", 1 - value).css("visibility", "");
      }),
      (p.__locateSlides = function (move, start) {
        this.__updateViewList(),
          (start = this.loop
            ? start || 0
            : this.slides.indexOf(this.viewSlidesList[0]) *
              (this[this.__dimension] + this.spacing));
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
          var pos = start + i * this[this.__dimension];
          (slide = this.viewSlidesList[i]),
            slide.wakeup(),
            (slide.position = pos);
        }
        move !== !1 &&
          this.controller.changeTo(
            this.slideList[this.index].position,
            !1,
            null,
            null,
            !1
          );
      }),
      (p.__pushEnd = function () {
        var first_slide = this.slides.shift(),
          last_slide = this.slides[this.slidesCount - 2];
        this.slides.push(first_slide),
          (first_slide.position = last_slide.position + this[this.__dimension]);
      }),
      (p.__pushStart = function () {
        var last_slide = this.slides.pop(),
          first_slide = this.slides[0];
        this.slides.unshift(last_slide),
          (last_slide.position = first_slide.position - this[this.__dimension]);
      }),
      (p.create = function (index) {
        _super.create.call(this, index),
          (this.spacing = 0),
          (this.controller.options.minValidDist = 10);
      }),
      MSSlideController.registerView("fade", MSFadeView);
  })(jQuery),
  (function () {
    "use strict";
    (window.MSScaleView = function (options) {
      MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"),
        this.controller.renderCallback(this.__update, this);
    }),
      MSScaleView.extend(MSFadeView);
    var p = MSScaleView.prototype,
      _super = MSFadeView.prototype;
    (p.__updateSlides = function (slide, distance) {
      var value = Math.abs(distance / this[this.__dimension]),
        element = slide.$element[0];
      0 >= 1 - value
        ? ((element.style.opacity = 0),
          (element.style.visibility = "hidden"),
          (element.style[window._jcsspfx + "Transform"] = ""))
        : ((element.style.opacity = 1 - value),
          (element.style.visibility = ""),
          (element.style[window._jcsspfx + "Transform"] =
            "perspective(2000px) translateZ(" +
            value * (0 > distance ? -0.5 : 0.5) * 300 +
            "px)"));
    }),
      (p.create = function (index) {
        _super.create.call(this, index),
          (this.controller.options.minValidDist = 0.03);
      }),
      MSSlideController.registerView("scale", MSScaleView);
  })(jQuery),
  (function () {
    "use strict";
    (window.MSStackView = function (options) {
      MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-stack-view"),
        this.controller.renderCallback(this.__update, this),
        (this.autoUpdateZIndex = !0);
    }),
      MSStackView.extend(MSFadeView),
      (MSStackView._3dreq = !0),
      (MSStackView._fallback = MSFadeView);
    var p = MSStackView.prototype,
      _super = MSFadeView.prototype;
    (p.__updateSlidesZindex = function () {
      for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++)
        (slide = this.viewSlidesList[i]),
          this.viewSlidesList[i].$element.css("z-index", l - i);
    }),
      (p.__updateSlides = function (slide, distance) {
        var value = Math.abs(distance / this[this.__dimension]),
          element = slide.$element[0];
        0 >= 1 - value
          ? ((element.style.opacity = 1),
            (element.style.visibility = "hidden"),
            (element.style[window._jcsspfx + "Transform"] = ""))
          : ((element.style.visibility = ""),
            (element.style[window._jcsspfx + "Transform"] =
              0 > distance
                ? "perspective(2000px) translateZ(" + -300 * value + "px)"
                : this.__translate +
                  "(" +
                  -value * this[this.__dimension] +
                  "px)"));
      }),
      (p.create = function (index) {
        _super.create.call(this, index),
          (this.controller.options.minValidDist = 0.03),
          (this.__translate = "h" === this.dir ? "translateX" : "translateY");
      }),
      MSSlideController.registerView("stack", MSStackView);
  })(jQuery),
  (function () {
    "use strict";
    var perspective = 2e3;
    (window.MSFocusView = function (options) {
      MSWaveView.call(this, options),
        this.$element.removeClass("ms-wave-view").addClass("ms-focus-view"),
        (this.options.centerSpace = this.options.centerSpace || 1);
    }),
      MSFocusView.extend(MSWaveView),
      (MSFocusView._3dreq = !0),
      (MSFocusView._fallback = MSFadeBasicView);
    {
      var p = MSFocusView.prototype;
      MSWaveView.prototype;
    }
    (p.__calcview = function (z, w) {
      var a = ((w / 2) * z) / (z + perspective);
      return (a * (z + perspective)) / perspective;
    }),
      (p.__updateSlidesHoriz = function (slide, distance) {
        var value = Math.abs((100 * distance) / this.__width);
        (value = 15 * -Math.min(value, 100)),
          slide.$element.css(
            window._csspfx + "transform",
            "translateZ(" +
              (value + 1) +
              "px) rotateY(0.01deg) translateX(" +
              (0 > distance ? 1 : -1) *
                -this.__calcview(value, this.__width) *
                this.options.centerSpace +
              "px)"
          );
      }),
      (p.__updateSlidesVertic = function (slide, distance) {
        var value = Math.abs((100 * distance) / this.__width);
        (value = 15 * -Math.min(value, 100)),
          slide.$element.css(
            window._csspfx + "transform",
            "translateZ(" +
              (value + 1) +
              "px) rotateY(0.01deg) translateY(" +
              (0 > distance ? 1 : -1) *
                -this.__calcview(value, this.__width) *
                this.options.centerSpace +
              "px)"
          );
      }),
      MSSlideController.registerView("focus", MSFocusView);
  })(),
  (function () {
    (window.MSPartialWaveView = function (options) {
      MSWaveView.call(this, options),
        this.$element
          .removeClass("ms-wave-view")
          .addClass("ms-partial-wave-view");
    }),
      MSPartialWaveView.extend(MSWaveView),
      (MSPartialWaveView._3dreq = !0),
      (MSPartialWaveView._fallback = MSFadeBasicView);
    {
      var p = MSPartialWaveView.prototype;
      MSWaveView.prototype;
    }
    (p.__updateSlidesHoriz = function (slide, distance) {
      var value = Math.abs((100 * distance) / this.__width);
      slide.hasBG &&
        slide.$bg_img.css(
          "opacity",
          (100 - Math.abs((120 * distance) / this.__width / 3)) / 100
        ),
        slide.$element.css(
          window._csspfx + "transform",
          "translateZ(" +
            3 * -value +
            "px) rotateY(0.01deg) translateX(" +
            0.75 * distance +
            "px)"
        );
    }),
      (p.__updateSlidesVertic = function (slide, distance) {
        var value = Math.abs((100 * distance) / this.__width);
        slide.hasBG &&
          slide.$bg_img.css(
            "opacity",
            (100 - Math.abs((120 * distance) / this.__width / 3)) / 100
          ),
          slide.$element.css(
            window._csspfx + "transform",
            "translateZ(" +
              3 * -value +
              "px) rotateY(0.01deg) translateY(" +
              0.75 * distance +
              "px)"
          );
      }),
      MSSlideController.registerView("partialWave", MSPartialWaveView);
  })(),
  (function () {
    "use strict";
    (window.MSBoxView = function (options) {
      MSBasicView.call(this, options),
        this.$element.removeClass("ms-basic-view").addClass("ms-box-view"),
        this.controller.renderCallback(this.__update, this);
    }),
      MSBoxView.extend(MSFadeView),
      (MSBoxView._3dreq = !0);
    var p = MSBoxView.prototype,
      _super = MSFadeView.prototype;
    (p.__updateSlides = function (slide, distance) {
      var value = Math.abs(distance / this[this.__dimension]),
        element = slide.$element[0];
      0 >= 1 - value
        ? ((element.style.visibility = "hidden"),
          (element.style[window._jcsspfx + "Transform"] = ""))
        : ((element.style.visibility = ""),
          (element.style[window._jcsspfx + "Transform"] =
            "rotate" +
            this._rotateDir +
            "(" +
            value * (0 > distance ? 1 : -1) * 90 * this._calcFactor +
            "deg)"),
          (element.style[window._jcsspfx + "TransformOrigin"] =
            "50% 50% -" + slide[this.__dimension] / 2 + "px"),
          (element.style.zIndex = Math.ceil(2 * (1 - value))));
    }),
      (p.create = function (index) {
        _super.create.call(this, index),
          (this.controller.options.minValidDist = 0.03),
          (this._rotateDir = "h" === this.options.dir ? "Y" : "X"),
          (this._calcFactor = "h" === this.options.dir ? 1 : -1);
      }),
      MSSlideController.registerView("box", MSBoxView);
  })(jQuery),
  (function ($) {
    "use strict";
    var BaseControl = function () {
        this.options = {
          prefix: "ms-",
          autohide: !0,
          overVideo: !0,
          customClass: null,
        };
      },
      p = BaseControl.prototype;
    (p.slideAction = function () {}),
      (p.setup = function () {
        (this.cont = this.options.insertTo
          ? $(this.options.insertTo)
          : this.slider.$controlsCont),
          this.options.overVideo || this._hideOnvideoStarts();
      }),
      (p.checkHideUnder = function () {
        this.options.hideUnder &&
          ((this.needsRealign =
            !this.options.insetTo &&
            ("left" === this.options.align || "right" === this.options.align) &&
            this.options.inset === !1),
          $(window).on("resize", { that: this }, this.onResize),
          this.onResize());
      }),
      (p.onResize = function (event) {
        var that = (event && event.data.that) || this,
          w = window.innerWidth;
        w <= that.options.hideUnder && !that.detached
          ? (that.hide(!0), (that.detached = !0), that.onDetach())
          : w >= that.options.hideUnder &&
            that.detached &&
            ((that.detached = !1), that.visible(), that.onAppend());
      }),
      (p.create = function () {
        this.options.autohide &&
          (this.hide(!0),
          this.slider.$controlsCont
            .on("mouseenter", this._onMouseEnter.bind(this))
            .on("mouseleave", this._onMouseLeave.bind(this))
            .on("mousedown", this._onMouseDown.bind(this)),
          this.$element &&
            this.$element
              .on("mouseenter", this._onMouseEnter.bind(this))
              .on("mouseleave", this._onMouseLeave.bind(this))
              .on("mousedown", this._onMouseDown.bind(this)),
          $(document).on("mouseup", this._onMouseUp.bind(this))),
          this.options.align &&
            this.$element.addClass("ms-align-" + this.options.align),
          this.options.customClass &&
            this.$element &&
            this.$element.addClass(this.options.customClass);
      }),
      (p._onMouseEnter = function () {
        this._disableAH || this.mdown || this.visible(), (this.mleave = !1);
      }),
      (p._onMouseLeave = function () {
        this.mdown || this.hide(), (this.mleave = !0);
      }),
      (p._onMouseDown = function () {
        this.mdown = !0;
      }),
      (p._onMouseUp = function () {
        this.mdown && this.mleave && this.hide(), (this.mdown = !1);
      }),
      (p.onAppend = function () {
        this.needsRealign && this.slider._realignControls();
      }),
      (p.onDetach = function () {
        this.needsRealign && this.slider._realignControls();
      }),
      (p._hideOnvideoStarts = function () {
        var that = this;
        this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, function () {
          (that._disableAH = !0), that.hide();
        }),
          this.slider.api.addEventListener(
            MSSliderEvent.VIDEO_CLOSE,
            function () {
              (that._disableAH = !1), that.visible();
            }
          );
      }),
      (p.hide = function (fast) {
        if (fast)
          this.$element.css("opacity", 0), this.$element.css("display", "none");
        else {
          clearTimeout(this.hideTo);
          var $element = this.$element;
          this.hideTo = setTimeout(function () {
            CTween.fadeOut($element, 400, !1);
          }, 20);
        }
        this.$element.addClass("ms-ctrl-hide");
      }),
      (p.visible = function () {
        this.detached ||
          (clearTimeout(this.hideTo),
          this.$element.css("display", ""),
          CTween.fadeIn(this.$element, 400, !1),
          this.$element.removeClass("ms-ctrl-hide"));
      }),
      (p.destroy = function () {
        this.options &&
          this.options.hideUnder &&
          $(window).off("resize", this.onResize);
      }),
      (window.BaseControl = BaseControl);
  })(jQuery),
  (function ($) {
    "use strict";
    var MSArrows = function (options) {
      BaseControl.call(this), $.extend(this.options, options);
    };
    MSArrows.extend(BaseControl);
    var p = MSArrows.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      var that = this;
      (this.$next = $("<div></div>")
        .addClass(this.options.prefix + "nav-next")
        .on("click", function () {
          that.slider.api.next(!0);
        })),
        (this.$prev = $("<div></div>")
          .addClass(this.options.prefix + "nav-prev")
          .on("click", function () {
            that.slider.api.previous(!0);
          })),
        _super.setup.call(this),
        this.cont.append(this.$next),
        this.cont.append(this.$prev),
        this.checkHideUnder();
    }),
      (p.hide = function (fast) {
        return fast
          ? (this.$prev.css("opacity", 0).css("display", "none"),
            void this.$next.css("opacity", 0).css("display", "none"))
          : (CTween.fadeOut(this.$prev, 400, !1),
            CTween.fadeOut(this.$next, 400, !1),
            this.$prev.addClass("ms-ctrl-hide"),
            void this.$next.addClass("ms-ctrl-hide"));
      }),
      (p.visible = function () {
        this.detached ||
          (CTween.fadeIn(this.$prev, 400),
          CTween.fadeIn(this.$next, 400),
          this.$prev.removeClass("ms-ctrl-hide").css("display", ""),
          this.$next.removeClass("ms-ctrl-hide").css("display", ""));
      }),
      (p.destroy = function () {
        _super.destroy(), this.$next.remove(), this.$prev.remove();
      }),
      (window.MSArrows = MSArrows),
      MSSlideController.registerControl("arrows", MSArrows);
  })(jQuery),
  (function ($) {
    "use strict";
    var MSThumblist = function (options) {
      BaseControl.call(this),
        (this.options.dir = "h"),
        (this.options.wheel = "v" === options.dir),
        (this.options.arrows = !1),
        (this.options.speed = 17),
        (this.options.align = null),
        (this.options.inset = !1),
        (this.options.margin = 10),
        (this.options.space = 10),
        (this.options.width = 100),
        (this.options.height = 100),
        (this.options.type = "thumbs"),
        (this.options.hover = !1),
        $.extend(this.options, options),
        (this.thumbs = []),
        (this.index_count = 0),
        (this.__dimen = "h" === this.options.dir ? "width" : "height"),
        (this.__alignsize = "h" === this.options.dir ? "height" : "width"),
        (this.__jdimen =
          "h" === this.options.dir ? "outerWidth" : "outerHeight"),
        (this.__pos = "h" === this.options.dir ? "left" : "top"),
        (this.click_enable = !0);
    };
    MSThumblist.extend(BaseControl);
    var p = MSThumblist.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      if (
        ((this.$element = $("<div></div>").addClass(
          this.options.prefix + "thumb-list"
        )),
        "tabs" === this.options.type &&
          this.$element.addClass(this.options.prefix + "tabs"),
        this.$element.addClass("ms-dir-" + this.options.dir),
        _super.setup.call(this),
        this.$element.appendTo(
          this.slider.$controlsCont === this.cont
            ? this.slider.$element
            : this.cont
        ),
        (this.$thumbscont = $("<div></div>")
          .addClass("ms-thumbs-cont")
          .appendTo(this.$element)),
        this.options.arrows)
      ) {
        var that = this;
        (this.$fwd = $("<div></div>")
          .addClass("ms-thumblist-fwd")
          .appendTo(this.$element)
          .on("click", function () {
            that.controller.push(-15);
          })),
          (this.$bwd = $("<div></div>")
            .addClass("ms-thumblist-bwd")
            .appendTo(this.$element)
            .on("click", function () {
              that.controller.push(15);
            }));
      }
      if (!this.options.insetTo && this.options.align) {
        var align = this.options.align;
        this.options.inset
          ? this.$element.css(align, this.options.margin)
          : "top" === align
          ? this.$element
              .detach()
              .prependTo(this.slider.$element)
              .css({
                "margin-bottom": this.options.margin,
                position: "relative",
              })
          : "bottom" === align
          ? this.$element.css({
              "margin-top": this.options.margin,
              position: "relative",
            })
          : (this.slider.api.addEventListener(
              MSSliderEvent.RESERVED_SPACE_CHANGE,
              this.align,
              this
            ),
            this.align()),
          "v" === this.options.dir
            ? this.$element.width(this.options.width)
            : this.$element.height(this.options.height);
      }
      this.checkHideUnder();
    }),
      (p.align = function () {
        if (!this.detached) {
          var align = this.options.align,
            pos = this.slider.reserveSpace(
              align,
              this.options[this.__alignsize] + 2 * this.options.margin
            );
          this.$element.css(
            align,
            -pos - this.options[this.__alignsize] - this.options.margin
          );
        }
      }),
      (p.slideAction = function (slide) {
        var thumb_ele = slide.$element.find(".ms-thumb"),
          that = this,
          thumb_frame = $("<div></div>")
            .addClass("ms-thumb-frame")
            .append(thumb_ele)
            .append($('<div class="ms-thumb-ol"></div>'))
            .on(this.options.hover ? "hover" : "click", function () {
              that.changeSlide(thumb_frame);
            });
        if (
          (this.options.align &&
            thumb_frame
              .width(
                this.options.width -
                  ("v" === this.options.dir && "tabs" === this.options.type
                    ? 12
                    : 0)
              )
              .height(this.options.height)
              .css(
                "margin-" + ("v" === this.options.dir ? "bottom" : "right"),
                this.options.space
              ),
          (thumb_frame[0].index = this.index_count++),
          this.$thumbscont.append(thumb_frame),
          this.options.fillMode && thumb_ele.is("img"))
        ) {
          var aligner = new window.MSAligner(
            this.options.fillMode,
            thumb_frame,
            thumb_ele
          );
          (thumb_ele[0].aligner = aligner),
            thumb_ele
              .one("load", function () {
                var $this = $(this);
                $this[0].aligner.init($this.width(), $this.height()),
                  $this[0].aligner.align();
              })
              .each($.jqLoadFix);
        }
        window.MSBrowserInfo.msie &&
          thumb_ele.on("dragstart", function (event) {
            event.preventDefault();
          }),
          this.thumbs.push(thumb_frame);
      }),
      (p.create = function () {
        _super.create.call(this),
          (this.__translate_end = window._css3d ? " translateZ(0px)" : ""),
          (this.controller = new Controller(0, 0, {
            snappingMinSpeed: 2,
            friction: (100 - 0.5 * this.options.speed) / 100,
          })),
          this.controller.renderCallback(
            "h" === this.options.dir ? this._hMove : this._vMove,
            this
          );
        var that = this;
        (this.resize_listener = function () {
          that.__resize();
        }),
          $(window).on("resize", this.resize_listener),
          (this.thumbSize = this.thumbs[0][this.__jdimen](!0)),
          this.setupSwipe(),
          this.__resize();
        var that = this;
        this.options.wheel &&
          ((this.wheellistener = function (event) {
            var e = window.event || event.orginalEvent || event,
              delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            return that.controller.push(10 * -delta), !1;
          }),
          window.MSBrowserInfo.mozilla
            ? this.$element[0].addEventListener(
                "DOMMouseScroll",
                this.wheellistener
              )
            : this.$element.on("mousewheel", this.wheellistener)),
          this.slider.api.addEventListener(
            MSSliderEvent.CHANGE_START,
            this.update,
            this
          ),
          this.slider.api.addEventListener(
            MSSliderEvent.HARD_UPDATE,
            this.realignThumbs,
            this
          ),
          (this.cindex = this.slider.api.index()),
          this.select(this.thumbs[this.cindex]);
      }),
      (p._hMove = function (controller, value) {
        return (
          (this.__contPos = value),
          window._cssanim
            ? void (this.$thumbscont[0].style[window._jcsspfx + "Transform"] =
                "translateX(" + -value + "px)" + this.__translate_end)
            : void (this.$thumbscont[0].style.left = -value + "px")
        );
      }),
      (p._vMove = function (controller, value) {
        return (
          (this.__contPos = value),
          window._cssanim
            ? void (this.$thumbscont[0].style[window._jcsspfx + "Transform"] =
                "translateY(" + -value + "px)" + this.__translate_end)
            : void (this.$thumbscont[0].style.top = -value + "px")
        );
      }),
      (p.setupSwipe = function () {
        (this.swipeControl = new averta.TouchSwipe(this.$element)),
          (this.swipeControl.swipeType =
            "h" === this.options.dir ? "horizontal" : "vertical");
        var that = this;
        this.swipeControl.onSwipe =
          "h" === this.options.dir
            ? function (status) {
                that.horizSwipeMove(status);
              }
            : function (status) {
                that.vertSwipeMove(status);
              };
      }),
      (p.vertSwipeMove = function (status) {
        if (!this.dTouch) {
          var phase = status.phase;
          if ("start" === phase) this.controller.stop();
          else if ("move" === phase) this.controller.drag(status.moveY);
          else if ("end" === phase || "cancel" === phase) {
            var speed = Math.abs(
              ((status.distanceY / status.duration) * 50) / 3
            );
            speed > 0.1
              ? this.controller.push(
                  ((-status.distanceY / status.duration) * 50) / 3
                )
              : ((this.click_enable = !0), this.controller.cancel());
          }
        }
      }),
      (p.horizSwipeMove = function (status) {
        if (!this.dTouch) {
          var phase = status.phase;
          if ("start" === phase)
            this.controller.stop(), (this.click_enable = !1);
          else if ("move" === phase) this.controller.drag(status.moveX);
          else if ("end" === phase || "cancel" === phase) {
            var speed = Math.abs(
              ((status.distanceX / status.duration) * 50) / 3
            );
            speed > 0.1
              ? this.controller.push(
                  ((-status.distanceX / status.duration) * 50) / 3
                )
              : ((this.click_enable = !0), this.controller.cancel());
          }
        }
      }),
      (p.update = function () {
        var nindex = this.slider.api.index();
        this.cindex !== nindex &&
          (null != this.cindex && this.unselect(this.thumbs[this.cindex]),
          (this.cindex = nindex),
          this.select(this.thumbs[this.cindex]),
          this.dTouch || this.updateThumbscroll());
      }),
      (p.realignThumbs = function () {
        this.$element.find(".ms-thumb").each(function (index, thumb) {
          thumb.aligner && thumb.aligner.align();
        });
      }),
      (p.updateThumbscroll = function () {
        var pos = this.thumbSize * this.cindex;
        if (
          (0 / 0 == this.controller.value && (this.controller.value = 0),
          pos - this.controller.value < 0)
        )
          return void this.controller.gotoSnap(this.cindex, !0);
        if (
          pos + this.thumbSize - this.controller.value >
          this.$element[this.__dimen]()
        ) {
          var first_snap =
            this.cindex -
            Math.floor(this.$element[this.__dimen]() / this.thumbSize) +
            1;
          return void this.controller.gotoSnap(first_snap, !0);
        }
      }),
      (p.changeSlide = function (thumb) {
        this.click_enable &&
          this.cindex !== thumb[0].index &&
          this.slider.api.gotoSlide(thumb[0].index);
      }),
      (p.unselect = function (ele) {
        ele.removeClass("ms-thumb-frame-selected");
      }),
      (p.select = function (ele) {
        ele.addClass("ms-thumb-frame-selected");
      }),
      (p.__resize = function () {
        var size = this.$element[this.__dimen]();
        if (this.ls !== size) {
          (this.ls = size),
            (this.thumbSize = this.thumbs[0][this.__jdimen](!0));
          var len = this.slider.api.count() * this.thumbSize;
          (this.$thumbscont[0].style[this.__dimen] = len + "px"),
            size >= len
              ? ((this.dTouch = !0),
                this.controller.stop(),
                (this.$thumbscont[0].style[this.__pos] =
                  0.5 * (size - len) + "px"),
                (this.$thumbscont[0].style[window._jcsspfx + "Transform"] = ""))
              : ((this.dTouch = !1),
                (this.click_enable = !0),
                (this.$thumbscont[0].style[this.__pos] = ""),
                (this.controller._max_value = len - size),
                (this.controller.options.snapsize = this.thumbSize),
                this.updateThumbscroll());
        }
      }),
      (p.destroy = function () {
        _super.destroy(),
          this.options.wheel &&
            (window.MSBrowserInfo.mozilla
              ? this.$element[0].removeEventListener(
                  "DOMMouseScroll",
                  this.wheellistener
                )
              : this.$element.off("mousewheel", this.wheellistener),
            (this.wheellistener = null)),
          $(window).off("resize", this.resize_listener),
          this.$element.remove(),
          this.slider.api.removeEventListener(
            MSSliderEvent.RESERVED_SPACE_CHANGE,
            this.align,
            this
          ),
          this.slider.api.removeEventListener(
            MSSliderEvent.CHANGE_START,
            this.update,
            this
          );
      }),
      (window.MSThumblist = MSThumblist),
      MSSlideController.registerControl("thumblist", MSThumblist);
  })(jQuery),
  (function ($) {
    "use strict";
    var MSBulltes = function (options) {
      BaseControl.call(this),
        (this.options.dir = "h"),
        (this.options.inset = !0),
        (this.options.margin = 10),
        (this.options.space = 10),
        $.extend(this.options, options),
        (this.bullets = []);
    };
    MSBulltes.extend(BaseControl);
    var p = MSBulltes.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      if (
        (_super.setup.call(this),
        (this.$element = $("<div></div>")
          .addClass(this.options.prefix + "bullets")
          .addClass("ms-dir-" + this.options.dir)
          .appendTo(this.cont)),
        (this.$bullet_cont = $("<div></div>")
          .addClass("ms-bullets-count")
          .appendTo(this.$element)),
        !this.options.insetTo && this.options.align)
      ) {
        var align = this.options.align;
        this.options.inset && this.$element.css(align, this.options.margin);
      }
      this.checkHideUnder();
    }),
      (p.create = function () {
        _super.create.call(this);
        var that = this;
        this.slider.api.addEventListener(
          MSSliderEvent.CHANGE_START,
          this.update,
          this
        ),
          (this.cindex = this.slider.api.index());
        for (var i = 0; i < this.slider.api.count(); ++i) {
          var bullet = $("<div></div>").addClass("ms-bullet");
          (bullet[0].index = i),
            bullet.on("click", function () {
              that.changeSlide(this.index);
            }),
            this.$bullet_cont.append(bullet),
            this.bullets.push(bullet),
            "h" === this.options.dir
              ? bullet.css("margin", this.options.space / 2)
              : bullet.css("margin", this.options.space);
        }
        "h" === this.options.dir
          ? this.$element.width(bullet.outerWidth(!0) * this.slider.api.count())
          : this.$element.css("margin-top", -this.$element.outerHeight(!0) / 2),
          this.select(this.bullets[this.cindex]);
      }),
      (p.update = function () {
        var nindex = this.slider.api.index();
        this.cindex !== nindex &&
          (null != this.cindex && this.unselect(this.bullets[this.cindex]),
          (this.cindex = nindex),
          this.select(this.bullets[this.cindex]));
      }),
      (p.changeSlide = function (index) {
        this.cindex !== index && this.slider.api.gotoSlide(index);
      }),
      (p.unselect = function (ele) {
        ele.removeClass("ms-bullet-selected");
      }),
      (p.select = function (ele) {
        ele.addClass("ms-bullet-selected");
      }),
      (p.destroy = function () {
        _super.destroy(),
          this.slider.api.removeEventListener(
            MSSliderEvent.CHANGE_START,
            this.update,
            this
          ),
          this.$element.remove();
      }),
      (window.MSBulltes = MSBulltes),
      MSSlideController.registerControl("bullets", MSBulltes);
  })(jQuery),
  (function ($) {
    "use strict";
    var MSScrollbar = function (options) {
      BaseControl.call(this),
        (this.options.dir = "h"),
        (this.options.autohide = !0),
        (this.options.width = 4),
        (this.options.color = "#3D3D3D"),
        (this.options.margin = 10),
        $.extend(this.options, options),
        (this.__dimen = "h" === this.options.dir ? "width" : "height"),
        (this.__jdimen =
          "h" === this.options.dir ? "outerWidth" : "outerHeight"),
        (this.__pos = "h" === this.options.dir ? "left" : "top"),
        (this.__translate_end = window._css3d ? " translateZ(0px)" : ""),
        (this.__translate_start =
          "h" === this.options.dir ? " translateX(" : "translateY(");
    };
    MSScrollbar.extend(BaseControl);
    var p = MSScrollbar.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      if (
        ((this.$element = $("<div></div>")
          .addClass(this.options.prefix + "sbar")
          .addClass("ms-dir-" + this.options.dir)),
        _super.setup.call(this),
        this.$element.appendTo(
          this.slider.$controlsCont === this.cont
            ? this.slider.$element
            : this.cont
        ),
        (this.$bar = $("<div></div>")
          .addClass(this.options.prefix + "bar")
          .appendTo(this.$element)),
        this.slider.options.loop &&
          ((this.disable = !0), this.$element.remove()),
        "v" === this.options.dir
          ? this.$bar.width(this.options.width)
          : this.$bar.height(this.options.width),
        this.$bar.css("background-color", this.options.color),
        !this.options.insetTo && this.options.align)
      ) {
        this.$element.css(
          "v" === this.options.dir
            ? { right: "auto", left: "auto" }
            : { top: "auto", bottom: "auto" }
        );
        var align = this.options.align;
        this.options.inset
          ? this.$element.css(align, this.options.margin)
          : "top" === align
          ? this.$element
              .prependTo(this.slider.$element)
              .css({
                "margin-bottom": this.options.margin,
                position: "relative",
              })
          : "bottom" === align
          ? this.$element.css({
              "margin-top": this.options.margin,
              position: "relative",
            })
          : (this.slider.api.addEventListener(
              MSSliderEvent.RESERVED_SPACE_CHANGE,
              this.align,
              this
            ),
            this.align());
      }
      this.checkHideUnder();
    }),
      (p.align = function () {
        if (!this.detached) {
          var align = this.options.align,
            pos = this.slider.reserveSpace(
              align,
              2 * this.options.margin + this.options.width
            );
          this.$element.css(
            align,
            -pos - this.options.margin - this.options.width
          );
        }
      }),
      (p.create = function () {
        if (!this.disable) {
          (this.scroller = this.slider.api.scroller),
            this.slider.api.view.addEventListener(
              MSViewEvents.SCROLL,
              this._update,
              this
            ),
            this.slider.api.addEventListener(
              MSSliderEvent.RESIZE,
              this._resize,
              this
            ),
            this._resize(),
            this.options.autohide && this.$bar.css("opacity", "0");
        }
      }),
      (p._resize = function () {
        (this.vdimen = this.$element[this.__dimen]()),
          (this.bar_dimen =
            (this.slider.api.view["__" + this.__dimen] * this.vdimen) /
            this.scroller._max_value),
          this.$bar[this.__dimen](this.bar_dimen);
      }),
      (p._update = function () {
        var value =
          (this.scroller.value * (this.vdimen - this.bar_dimen)) /
          this.scroller._max_value;
        if (this.lvalue !== value) {
          if (((this.lvalue = value), this.options.autohide)) {
            clearTimeout(this.hto), this.$bar.css("opacity", "1");
            var that = this;
            this.hto = setTimeout(function () {
              that.$bar.css("opacity", "0");
            }, 150);
          }
          return 0 > value
            ? void (this.$bar[0].style[this.__dimen] =
                this.bar_dimen + value + "px")
            : (value > this.vdimen - this.bar_dimen &&
                (this.$bar[0].style[this.__dimen] = this.vdimen - value + "px"),
              window._cssanim
                ? void (this.$bar[0].style[window._jcsspfx + "Transform"] =
                    this.__translate_start +
                    value +
                    "px)" +
                    this.__translate_end)
                : void (this.$bar[0].style[this.__pos] = value + "px"));
        }
      }),
      (p.destroy = function () {
        _super.destroy(),
          this.slider.api.view.removeEventListener(
            MSViewEvents.SCROLL,
            this._update,
            this
          ),
          this.slider.api.removeEventListener(
            MSSliderEvent.RESIZE,
            this._resize,
            this
          ),
          this.slider.api.removeEventListener(
            MSSliderEvent.RESERVED_SPACE_CHANGE,
            this.align,
            this
          ),
          this.$element.remove();
      }),
      (window.MSScrollbar = MSScrollbar),
      MSSlideController.registerControl("scrollbar", MSScrollbar);
  })(jQuery),
  (function ($) {
    "use strict";
    var MSTimerbar = function (options) {
      BaseControl.call(this),
        (this.options.autohide = !1),
        (this.options.width = 4),
        (this.options.color = "#FFFFFF"),
        (this.options.inset = !0),
        (this.options.margin = 0),
        $.extend(this.options, options);
    };
    MSTimerbar.extend(BaseControl);
    var p = MSTimerbar.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      if (
        (_super.setup.call(this),
        (this.$element = $("<div></div>").addClass(
          this.options.prefix + "timerbar"
        )),
        _super.setup.call(this),
        this.$element.appendTo(
          this.slider.$controlsCont === this.cont
            ? this.slider.$element
            : this.cont
        ),
        (this.$bar = $("<div></div>")
          .addClass("ms-time-bar")
          .appendTo(this.$element)),
        "v" === this.options.dir
          ? (this.$bar.width(this.options.width),
            this.$element.width(this.options.width))
          : (this.$bar.height(this.options.width),
            this.$element.height(this.options.width)),
        this.$bar.css("background-color", this.options.color),
        !this.options.insetTo && this.options.align)
      ) {
        this.$element.css({ top: "auto", bottom: "auto" });
        var align = this.options.align;
        this.options.inset
          ? this.$element.css(align, this.options.margin)
          : "top" === align
          ? this.$element
              .prependTo(this.slider.$element)
              .css({
                "margin-bottom": this.options.margin,
                position: "relative",
              })
          : "bottom" === align
          ? this.$element.css({
              "margin-top": this.options.margin,
              position: "relative",
            })
          : (this.slider.api.addEventListener(
              MSSliderEvent.RESERVED_SPACE_CHANGE,
              this.align,
              this
            ),
            this.align());
      }
      this.checkHideUnder();
    }),
      (p.align = function () {
        if (!this.detached) {
          var align = this.options.align,
            pos = this.slider.reserveSpace(
              align,
              2 * this.options.margin + this.options.width
            );
          this.$element.css(
            align,
            -pos - this.options.margin - this.options.width
          );
        }
      }),
      (p.create = function () {
        _super.create.call(this),
          this.slider.api.addEventListener(
            MSSliderEvent.WAITING,
            this._update,
            this
          ),
          this._update();
      }),
      (p._update = function () {
        this.$bar[0].style.width = this.slider.api._delayProgress + "%";
      }),
      (p.destroy = function () {
        _super.destroy(),
          this.slider.api.removeEventListener(
            MSSliderEvent.RESERVED_SPACE_CHANGE,
            this.align,
            this
          ),
          this.slider.api.removeEventListener(
            MSSliderEvent.WAITING,
            this._update,
            this
          ),
          this.$element.remove();
      }),
      (window.MSTimerbar = MSTimerbar),
      MSSlideController.registerControl("timebar", MSTimerbar);
  })(jQuery),
  (function ($) {
    "use strict";
    var MSCircleTimer = function (options) {
      BaseControl.call(this),
        (this.options.color = "#A2A2A2"),
        (this.options.stroke = 10),
        (this.options.radius = 4),
        (this.options.autohide = !1),
        $.extend(this.options, options);
    };
    MSCircleTimer.extend(BaseControl);
    var p = MSCircleTimer.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      return (
        _super.setup.call(this),
        (this.$element = $("<div></div>")
          .addClass(this.options.prefix + "ctimer")
          .appendTo(this.cont)),
        (this.$canvas = $("<canvas></canvas>")
          .addClass("ms-ctimer-canvas")
          .appendTo(this.$element)),
        (this.$bar = $("<div></div>")
          .addClass("ms-ctimer-bullet")
          .appendTo(this.$element)),
        this.$canvas[0].getContext
          ? ((this.ctx = this.$canvas[0].getContext("2d")),
            (this.prog = 0),
            (this.__w = 2 * (this.options.radius + this.options.stroke / 2)),
            (this.$canvas[0].width = this.__w),
            (this.$canvas[0].height = this.__w),
            void this.checkHideUnder())
          : (this.destroy(), void (this.disable = !0))
      );
    }),
      (p.create = function () {
        if (!this.disable) {
          _super.create.call(this),
            this.slider.api.addEventListener(
              MSSliderEvent.WAITING,
              this._update,
              this
            );
          var that = this;
          this.$element.on("click", function () {
            that.slider.api.paused
              ? that.slider.api.resume()
              : that.slider.api.pause();
          }),
            this._update();
        }
      }),
      (p._update = function () {
        var that = this;
        $(this)
          .stop(!0)
          .animate(
            { prog: 0.01 * this.slider.api._delayProgress },
            {
              duration: 200,
              step: function () {
                that._draw();
              },
            }
          );
      }),
      (p._draw = function () {
        this.ctx.clearRect(0, 0, this.__w, this.__w),
          this.ctx.beginPath(),
          this.ctx.arc(
            0.5 * this.__w,
            0.5 * this.__w,
            this.options.radius,
            1.5 * Math.PI,
            1.5 * Math.PI + 2 * Math.PI * this.prog,
            !1
          ),
          (this.ctx.strokeStyle = this.options.color),
          (this.ctx.lineWidth = this.options.stroke),
          this.ctx.stroke();
      }),
      (p.destroy = function () {
        _super.destroy(),
          this.disable ||
            ($(this).stop(!0),
            this.slider.api.removeEventListener(
              MSSliderEvent.WAITING,
              this._update,
              this
            ),
            this.$element.remove());
      }),
      (window.MSCircleTimer = MSCircleTimer),
      MSSlideController.registerControl("circletimer", MSCircleTimer);
  })(jQuery),
  (function ($) {
    "use strict";
    (window.MSLightbox = function (options) {
      BaseControl.call(this, options),
        (this.options.autohide = !1),
        $.extend(this.options, options),
        (this.data_list = []);
    }),
      (MSLightbox.fadeDuratation = 400),
      MSLightbox.extend(BaseControl);
    var p = MSLightbox.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      _super.setup.call(this),
        (this.$element = $("<div></div>")
          .addClass(this.options.prefix + "lightbox-btn")
          .appendTo(this.cont)),
        this.checkHideUnder();
    }),
      (p.slideAction = function (slide) {
        $("<div></div>")
          .addClass(this.options.prefix + "lightbox-btn")
          .appendTo(slide.$element)
          .append($(slide.$element.find(".ms-lightbox")));
      }),
      (p.create = function () {
        _super.create.call(this);
      }),
      MSSlideController.registerControl("lightbox", MSLightbox);
  })(jQuery),
  (function ($) {
    "use strict";
    (window.MSSlideInfo = function (options) {
      BaseControl.call(this, options),
        (this.options.autohide = !1),
        (this.options.align = null),
        (this.options.inset = !1),
        (this.options.margin = 10),
        (this.options.size = 100),
        (this.options.dir = "h"),
        $.extend(this.options, options),
        (this.data_list = []);
    }),
      (MSSlideInfo.fadeDuratation = 400),
      MSSlideInfo.extend(BaseControl);
    var p = MSSlideInfo.prototype,
      _super = BaseControl.prototype;
    (p.setup = function () {
      if (
        ((this.$element = $("<div></div>")
          .addClass(this.options.prefix + "slide-info")
          .addClass("ms-dir-" + this.options.dir)),
        _super.setup.call(this),
        this.$element.appendTo(
          this.slider.$controlsCont === this.cont
            ? this.slider.$element
            : this.cont
        ),
        !this.options.insetTo && this.options.align)
      ) {
        var align = this.options.align;
        this.options.inset
          ? this.$element.css(align, this.options.margin)
          : "top" === align
          ? this.$element
              .prependTo(this.slider.$element)
              .css({
                "margin-bottom": this.options.margin,
                position: "relative",
              })
          : "bottom" === align
          ? this.$element.css({
              "margin-top": this.options.margin,
              position: "relative",
            })
          : (this.slider.api.addEventListener(
              MSSliderEvent.RESERVED_SPACE_CHANGE,
              this.align,
              this
            ),
            this.align()),
          "v" === this.options.dir
            ? this.$element.width(this.options.size)
            : this.$element.css("min-height", this.options.size);
      }
      this.checkHideUnder();
    }),
      (p.align = function () {
        if (!this.detached) {
          var align = this.options.align,
            pos = this.slider.reserveSpace(
              align,
              this.options.size + 2 * this.options.margin
            );
          this.$element.css(
            align,
            -pos - this.options.size - this.options.margin
          );
        }
      }),
      (p.slideAction = function (slide) {
        var info_ele = $(slide.$element.find(".ms-info"));
        info_ele.detach(), (this.data_list[slide.index] = info_ele);
      }),
      (p.create = function () {
        _super.create.call(this),
          this.slider.api.addEventListener(
            MSSliderEvent.CHANGE_START,
            this.update,
            this
          ),
          (this.cindex = this.slider.api.index()),
          this.switchEle(this.data_list[this.cindex]);
      }),
      (p.update = function () {
        var nindex = this.slider.api.index();
        this.switchEle(this.data_list[nindex]), (this.cindex = nindex);
      }),
      (p.switchEle = function (ele) {
        if (this.current_ele) {
          this.current_ele[0].tween && this.current_ele[0].tween.stop(!0),
            (this.current_ele[0].tween = CTween.animate(
              this.current_ele,
              MSSlideInfo.fadeDuratation,
              { opacity: 0 },
              {
                complete: function () {
                  this.detach(),
                    (this[0].tween = null),
                    ele.css("position", "relative");
                },
                target: this.current_ele,
              }
            )),
            ele.css("position", "absolute");
        }
        this.__show(ele);
      }),
      (p.__show = function (ele) {
        ele.appendTo(this.$element).css("opacity", "0"),
          this.current_ele &&
            ele.height(Math.max(ele.height(), this.current_ele.height())),
          clearTimeout(this.tou),
          (this.tou = setTimeout(function () {
            CTween.fadeIn(ele, MSSlideInfo.fadeDuratation),
              ele.css("height", "");
          }, MSSlideInfo.fadeDuratation)),
          ele[0].tween && ele[0].tween.stop(!0),
          (this.current_ele = ele);
      }),
      (p.destroy = function () {
        _super.destroy(),
          clearTimeout(this.tou),
          this.current_ele &&
            this.current_ele[0].tween &&
            this.current_ele[0].tween.stop("true"),
          this.$element.remove(),
          this.slider.api.removeEventListener(
            MSSliderEvent.RESERVED_SPACE_CHANGE,
            this.align,
            this
          ),
          this.slider.api.removeEventListener(
            MSSliderEvent.CHANGE_START,
            this.update,
            this
          );
      }),
      MSSlideController.registerControl("slideinfo", MSSlideInfo);
  })(jQuery),
  (function ($) {
    window.MSGallery = function (id, slider) {
      (this.id = id),
        (this.slider = slider),
        (this.telement = $("#" + id)),
        (this.botcont = $("<div></div>")
          .addClass("ms-gallery-botcont")
          .appendTo(this.telement)),
        (this.thumbcont = $("<div></div>")
          .addClass("ms-gal-thumbcont hide-thumbs")
          .appendTo(this.botcont)),
        (this.playbtn = $("<div></div>")
          .addClass("ms-gal-playbtn")
          .appendTo(this.botcont)),
        (this.thumbtoggle = $("<div></div>")
          .addClass("ms-gal-thumbtoggle")
          .appendTo(this.botcont)),
        slider.control("thumblist", {
          insertTo: this.thumbcont,
          autohide: !1,
          dir: "h",
        }),
        slider.control("slidenum", { insertTo: this.botcont, autohide: !1 }),
        slider.control("slideinfo", { insertTo: this.botcont, autohide: !1 }),
        slider.control("timebar", { insertTo: this.botcont, autohide: !1 }),
        slider.control("bullets", { insertTo: this.botcont, autohide: !1 });
    };
    var p = MSGallery.prototype;
    (p._init = function () {
      var that = this;
      this.slider.api.paused || this.playbtn.addClass("btn-pause"),
        this.playbtn.on("click", function () {
          that.slider.api.paused
            ? (that.slider.api.resume(), that.playbtn.addClass("btn-pause"))
            : (that.slider.api.pause(), that.playbtn.removeClass("btn-pause"));
        }),
        this.thumbtoggle.on("click", function () {
          that.vthumbs
            ? (that.thumbtoggle.removeClass("btn-hide"),
              (that.vthumbs = !1),
              that.thumbcont.addClass("hide-thumbs"))
            : (that.thumbtoggle.addClass("btn-hide"),
              that.thumbcont.removeClass("hide-thumbs"),
              (that.vthumbs = !0));
        });
    }),
      (p.setup = function () {
        var that = this;
        $(document).ready(function () {
          that._init();
        });
      });
  })(jQuery),
  (function ($) {
    var getPhotosetURL = function (key, id, count) {
        return (
          "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" +
          key +
          "&photoset_id=" +
          id +
          "&per_page=" +
          count +
          "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
        );
      },
      getUserPublicURL = function (key, id, count) {
        return (
          "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=" +
          key +
          "&user_id=" +
          id +
          "&per_page=" +
          count +
          "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"
        );
      },
      getImageSource = function (fid, server, id, secret, size, data) {
        return "_o" === size && data
          ? data.url_o
          : "https://farm" +
              fid +
              ".staticflickr.com/" +
              server +
              "/" +
              id +
              "_" +
              secret +
              size +
              ".jpg";
      };
    window.MSFlickrV2 = function (slider, options) {
      var _options = {
        count: 10,
        type: "photoset",
        thumbSize: "q",
        imgSize: "c",
      };
      if (((this.slider = slider), this.slider.holdOn(), !options.key))
        return void this.errMsg(
          "Flickr API Key required. Please add it in settings."
        );
      $.extend(_options, options), (this.options = _options);
      var that = this;
      "photoset" === this.options.type
        ? $.getJSON(
            getPhotosetURL(
              this.options.key,
              this.options.id,
              this.options.count
            ),
            function (data) {
              that._photosData(data);
            }
          )
        : $.getJSON(
            getUserPublicURL(
              this.options.key,
              this.options.id,
              this.options.count
            ),
            function (data) {
              (that.options.type = "photos"), that._photosData(data);
            }
          ),
        "" !== this.options.imgSize &&
          "-" !== this.options.imgSize &&
          (this.options.imgSize = "_" + this.options.imgSize),
        (this.options.thumbSize = "_" + this.options.thumbSize),
        (this.slideTemplate =
          this.slider.$element.find(".ms-slide")[0].outerHTML),
        this.slider.$element.find(".ms-slide").remove();
    };
    var p = MSFlickrV2.prototype;
    (p._photosData = function (data) {
      if ("fail" === data.stat)
        return void this.errMsg(
          "Flickr API ERROR#" + data.code + ": " + data.message
        );
      {
        var that = this;
        this.options.author || this.options.desc;
      }
      $.each(data[this.options.type].photo, function (i, item) {
        var slide_cont = that.slideTemplate.replace(
          /{{[\w-]+}}/g,
          function (match) {
            return (
              (match = match.replace(/{{|}}/g, "")),
              shortCodes[match]
                ? shortCodes[match](item, that)
                : "{{" + match + "}}"
            );
          }
        );
        $(slide_cont).appendTo(that.slider.$element);
      }),
        that._initSlider();
    }),
      (p.errMsg = function (msg) {
        this.slider.$element.css("display", "block"),
          this.errEle ||
            (this.errEle = $(
              '<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>'
            ).appendTo(this.slider.$loading)),
          this.errEle.html(msg);
      }),
      (p._initSlider = function () {
        this.slider.release();
      });
    var shortCodes = {
      image: function (data, that) {
        return getImageSource(
          data.farm,
          data.server,
          data.id,
          data.secret,
          that.options.imgSize,
          data
        );
      },
      thumb: function (data, that) {
        return getImageSource(
          data.farm,
          data.server,
          data.id,
          data.secret,
          that.options.thumbSize
        );
      },
      title: function (data) {
        return data.title;
      },
      "owner-name": function (data) {
        return data.ownername;
      },
      "date-taken": function (data) {
        return data.datetaken;
      },
      views: function (data) {
        return data.views;
      },
      description: function (data) {
        return data.description._content;
      },
    };
  })(jQuery),
  (function ($) {
    window.MSFacebookGallery = function (slider, options) {
      var _options = {
        count: 10,
        type: "photostream",
        thumbSize: "320",
        imgSize: "orginal",
        https: !1,
        token: "",
      };
      (this.slider = slider),
        this.slider.holdOn(),
        $.extend(_options, options),
        (this.options = _options),
        (this.graph = "https://graph.facebook.com");
      var that = this;
      "photostream" === this.options.type
        ? $.getJSON(
            this.graph +
              "/" +
              this.options.username +
              "/photos/uploaded/?fields=source,name,link,images,from&limit=" +
              this.options.count +
              "&access_token=" +
              this.options.token,
            function (data) {
              that._photosData(data);
            }
          )
        : $.getJSON(
            this.graph +
              "/" +
              this.options.albumId +
              "/photos?fields=source,name,link,images,from&limit=" +
              this.options.count +
              "&access_token=" +
              this.options.token,
            function (data) {
              that._photosData(data);
            }
          ),
        (this.slideTemplate =
          this.slider.$element.find(".ms-slide")[0].outerHTML),
        this.slider.$element.find(".ms-slide").remove();
    };
    var p = MSFacebookGallery.prototype;
    (p._photosData = function (content) {
      if (content.error)
        return void this.errMsg(
          "Facebook API ERROR#" +
            content.error.code +
            "(" +
            content.error.type +
            "): " +
            content.error.message
        );
      for (
        var that = this,
          i = (this.options.author || this.options.desc, 0),
          l = content.data.length;
        i !== l;
        i++
      ) {
        var slide_cont = that.slideTemplate.replace(
          /{{[\w-]+}}/g,
          function (match) {
            return (
              (match = match.replace(/{{|}}/g, "")),
              shortCodes[match]
                ? shortCodes[match](content.data[i], that)
                : "{{" + match + "}}"
            );
          }
        );
        $(slide_cont).appendTo(that.slider.$element);
      }
      that._initSlider();
    }),
      (p.errMsg = function (msg) {
        this.slider.$element.css("display", "block"),
          this.errEle ||
            (this.errEle = $(
              '<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>'
            ).appendTo(this.slider.$loading)),
          this.errEle.html(msg);
      }),
      (p._initSlider = function () {
        this.slider.release();
      });
    var getImageSource = function (images, size) {
        if ("orginal" === size) return images[0].source;
        for (var i = 0, l = images.length; i !== l; i++)
          if (-1 !== images[i].source.indexOf(size + "x" + size))
            return images[i].source;
        return images[0].source;
      },
      shortCodes = {
        image: function (data, that) {
          return getImageSource(data.images, that.options.imgSize);
        },
        thumb: function (data, that) {
          return getImageSource(data.images, that.options.thumbSize);
        },
        name: function (data) {
          return data.name;
        },
        "owner-name": function (data) {
          return data.from.name;
        },
        link: function (data) {
          return data.link;
        },
      };
  })(jQuery),
  (function ($) {
    "use strict";
    (window.MSScrollParallax = function (slider, parallax, bgparallax, fade) {
      (this.fade = fade),
        (this.slider = slider),
        (this.parallax = parallax / 100),
        (this.bgparallax = bgparallax / 100),
        slider.api.addEventListener(MSSliderEvent.INIT, this.init, this),
        slider.api.addEventListener(MSSliderEvent.DESTROY, this.destory, this),
        slider.api.addEventListener(
          MSSliderEvent.CHANGE_END,
          this.resetLayers,
          this
        ),
        slider.api.addEventListener(
          MSSliderEvent.CHANGE_START,
          this.updateCurrentSlide,
          this
        );
    }),
      (window.MSScrollParallax.setup = function (
        slider,
        parallax,
        bgparallax,
        fade
      ) {
        return window._mobile
          ? void 0
          : (null == parallax && (parallax = 50),
            null == bgparallax && (bgparallax = 40),
            new MSScrollParallax(slider, parallax, bgparallax, fade));
      });
    var p = window.MSScrollParallax.prototype;
    (p.init = function () {
      this.slider.$element.addClass("ms-scroll-parallax"),
        (this.sliderOffset = this.slider.$element.offset().top),
        this.updateCurrentSlide();
      for (
        var slide,
          slides = this.slider.api.view.slideList,
          i = 0,
          l = slides.length;
        i !== l;
        i++
      )
        (slide = slides[i]),
          slide.hasLayers &&
            (slide.layerController.$layers.wrap(
              '<div class="ms-scroll-parallax-cont"></div>'
            ),
            (slide.$scrollParallaxCont =
              slide.layerController.$layers.parent()));
      $(window)
        .on("scroll", { that: this }, this.moveParallax)
        .trigger("scroll");
    }),
      (p.resetLayers = function () {
        if (this.lastSlide) {
          var layers = this.lastSlide.$scrollParallaxCont;
          window._css2d
            ? (layers && (layers[0].style[window._jcsspfx + "Transform"] = ""),
              this.lastSlide.hasBG &&
                (this.lastSlide.$imgcont[0].style[
                  window._jcsspfx + "Transform"
                ] = ""))
            : (layers && (layers[0].style.top = ""),
              this.lastSlide.hasBG &&
                (this.lastSlide.$imgcont[0].style.top = "0px"));
        }
      }),
      (p.updateCurrentSlide = function () {
        (this.lastSlide = this.currentSlide),
          (this.currentSlide = this.slider.api.currentSlide),
          this.moveParallax({ data: { that: this } });
      }),
      (p.moveParallax = function (e) {
        var that = e.data.that,
          slider = that.slider,
          offset = that.sliderOffset,
          scrollTop = $(window).scrollTop(),
          layers = that.currentSlide.$scrollParallaxCont,
          out = offset - scrollTop;
        0 >= out
          ? (layers &&
              (window._css3d
                ? (layers[0].style[window._jcsspfx + "Transform"] =
                    "translateY(" +
                    -out * that.parallax +
                    "px) translateZ(0.4px)")
                : window._css2d
                ? (layers[0].style[window._jcsspfx + "Transform"] =
                    "translateY(" + -out * that.parallax + "px)")
                : (layers[0].style.top = -out * that.parallax + "px")),
            that.updateSlidesBG(-out * that.bgparallax + "px", !0),
            layers &&
              that.fade &&
              layers.css("opacity", 1 - Math.min(1, -out / slider.api.height)))
          : (layers &&
              (window._css2d
                ? (layers[0].style[window._jcsspfx + "Transform"] = "")
                : (layers[0].style.top = "")),
            that.updateSlidesBG("0px", !1),
            layers && that.fade && layers.css("opacity", 1));
      }),
      (p.updateSlidesBG = function (pos, fixed) {
        for (
          var slides = this.slider.api.view.slideList,
            position =
              !fixed || window.MSBrowserInfo.msie || window.MSBrowserInfo.opera
                ? ""
                : "fixed",
            i = 0,
            l = slides.length;
          i !== l;
          i++
        )
          slides[i].hasBG &&
            ((slides[i].$imgcont[0].style.position = position),
            (slides[i].$imgcont[0].style.top = pos)),
            slides[i].$bgvideocont &&
              ((slides[i].$bgvideocont[0].style.position = position),
              (slides[i].$bgvideocont[0].style.top = pos));
      }),
      (p.destory = function () {
        slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this),
          slider.api.removeEventListener(
            MSSliderEvent.DESTROY,
            this.destory,
            this
          ),
          slider.api.removeEventListener(
            MSSliderEvent.CHANGE_END,
            this.resetLayers,
            this
          ),
          slider.api.removeEventListener(
            MSSliderEvent.CHANGE_START,
            this.updateCurrentSlide,
            this
          ),
          $(window).off("scroll", this.moveParallax);
      });
  })(jQuery),
  (function ($, document, window) {
    var PId = 0;
    if (window.MasterSlider) {
      var KeyboardNav = function (slider) {
        (this.slider = slider),
          (this.PId = PId++),
          this.slider.options.keyboard &&
            slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
      };
      KeyboardNav.name = "MSKeyboardNav";
      var p = KeyboardNav.prototype;
      (p.init = function () {
        var api = this.slider.api;
        $(document).on("keydown.kbnav" + this.PId, function (event) {
          var which = event.which;
          37 === which || 40 === which
            ? api.previous(!0)
            : (38 === which || 39 === which) && api.next(!0);
        });
      }),
        (p.destroy = function () {
          $(document).off("keydown.kbnav" + this.PId),
            this.slider.api.removeEventListener(
              MSSliderEvent.INIT,
              this.init,
              this
            );
        }),
        MasterSlider.registerPlugin(KeyboardNav);
    }
  })(jQuery, document, window),
  (function ($, document, window) {
    var PId = 0,
      $window = $(window),
      $doc = $(document);
    if (window.MasterSlider) {
      var StartOnAppear = function (slider) {
        (this.PId = PId++),
          (this.slider = slider),
          (this.$slider = slider.$element),
          this.slider.options.startOnAppear &&
            (slider.holdOn(), $doc.ready(this.init.bind(this)));
      };
      StartOnAppear.name = "MSStartOnAppear";
      var p = StartOnAppear.prototype;
      (p.init = function () {
        this.slider.api;
        $window
          .on("scroll.soa" + this.PId, this._onScroll.bind(this))
          .trigger("scroll");
      }),
        (p._onScroll = function () {
          var vpBottom = $window.scrollTop() + $window.height(),
            top = this.$slider.offset().top;
          vpBottom > top &&
            ($window.off("scroll.soa" + this.PId), this.slider.release());
        }),
        (p.destroy = function () {}),
        MasterSlider.registerPlugin(StartOnAppear);
    }
  })(jQuery, document, window),
  (function (document, window) {
    var filterUnits = { "hue-rotate": "deg", blur: "px" },
      initialValues = {
        opacity: 1,
        contrast: 1,
        brightness: 1,
        saturate: 1,
        "hue-rotate": 0,
        invert: 0,
        sepia: 0,
        blur: 0,
        grayscale: 0,
      };
    if (window.MasterSlider) {
      var Filters = function (slider) {
        (this.slider = slider),
          this.slider.options.filters &&
            slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
      };
      Filters.name = "MSFilters";
      var p = Filters.prototype;
      (p.init = function () {
        var api = this.slider.api,
          view = api.view;
        (this.filters = this.slider.options.filters),
          (this.slideList = view.slideList),
          (this.slidesCount = view.slidesCount),
          (this.dimension = view[view.__dimension]),
          (this.target =
            "slide" === this.slider.options.filterTarget
              ? "$element"
              : "$bg_img"),
          (this.filterName = window.MSBrowserInfo.webkit
            ? "WebkitFilter"
            : "filter");
        var superFun = view.controller.__renderHook.fun,
          superRef = view.controller.__renderHook.ref;
        view.controller.renderCallback(function (controller, value) {
          superFun.call(superRef, controller, value), this.applyEffect(value);
        }, this),
          this.applyEffect(view.controller.value);
      }),
        (p.applyEffect = function (value) {
          for (var factor, slide, i = 0; i < this.slidesCount; ++i)
            (slide = this.slideList[i]),
              (factor = Math.min(
                1,
                Math.abs(value - slide.position) / this.dimension
              )),
              slide[this.target] &&
                (window.MSBrowserInfo.msie
                  ? null != this.filters.opacity &&
                    slide[this.target].opacity(
                      1 - this.filters.opacity * factor
                    )
                  : (slide[this.target][0].style[this.filterName] =
                      this.generateStyle(factor)));
        }),
        (p.generateStyle = function (factor) {
          var unit,
            style = "";
          for (var filter in this.filters)
            (unit = filterUnits[filter] || ""),
              (style +=
                filter +
                "(" +
                (initialValues[filter] +
                  (this.filters[filter] - initialValues[filter]) * factor) +
                ") ");
          return style;
        }),
        (p.destroy = function () {
          this.slider.api.removeEventListener(
            MSSliderEvent.INIT,
            this.init,
            this
          );
        }),
        MasterSlider.registerPlugin(Filters);
    }
  })(document, window, jQuery),
  (function ($, document, window) {
    if (window.MasterSlider) {
      var ScrollToAction = function (slider) {
        (this.slider = slider),
          slider.api.addEventListener(MSSliderEvent.INIT, this.init, this);
      };
      ScrollToAction.name = "MSScrollToAction";
      var p = ScrollToAction.prototype;
      (p.init = function () {
        var api = this.slider.api;
        (api.scrollToEnd = _scrollToEnd), (api.scrollTo = _scrollTo);
      }),
        (p.destroy = function () {});
      var _scrollTo = function (target, duration) {
          var target = (this.slider.$element, $(target).eq(0));
          0 !== target.length &&
            (null == duration && (duration = 1.4),
            $("html, body").animate(
              { scrollTop: target.offset().top },
              1e3 * duration,
              "easeInOutQuad"
            ));
        },
        _scrollToEnd = function (duration) {
          var sliderEle = this.slider.$element;
          null == duration && (duration = 1.4),
            $("html, body").animate(
              { scrollTop: sliderEle.offset().top + sliderEle.outerHeight(!1) },
              1e3 * duration,
              "easeInOutQuad"
            );
        };
      MasterSlider.registerPlugin(ScrollToAction);
    }
  })(jQuery, document, window),
  (function ($, window) {
    "use strict";
    if (window.MSReady)
      for (var i = 0, l = MSReady.length; i !== l; i++)
        MSReady[i].call(null, $);
  })(jQuery, window, document),
  (function ($) {
    $(window).on("vc_reload", function () {
      if (window.MSReady)
        for (var i = 0, l = MSReady.length; i !== l; i++)
          MSReady[i].call(null, $);
    }),
      (window.msCli = function (f) {
        f = f || "pause";
        var m = masterslider_instances;
        for (var i in m) m[i].api[f]();
      });
  })(jQuery);

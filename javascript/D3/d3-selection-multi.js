// https://github.com/d3/d3-selection-multi Version 1.0.1. Copyright 2017 Mike Bostock.
! function(t, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(require("d3-selection"), require("d3-transition")) : "function" == typeof define && define.amd ? define(["d3-selection", "d3-transition"], n) : n(t.d3, t.d3)
}(this, function(t, n) {
  "use strict";

  function r(n, r) {
    return n.each(function() {
      var n = r.apply(this, arguments),
        e = t.select(this);
      for (var i in n) e.attr(i, n[i])
    })
  }

  function e(t, n) {
    for (var r in n) t.attr(r, n[r]);
    return t
  }

  function i(n, r, e) {
    return n.each(function() {
      var n = r.apply(this, arguments),
        i = t.select(this);
      for (var o in n) i.style(o, n[o], e)
    })
  }

  function o(t, n, r) {
    for (var e in n) t.style(e, n[e], r);
    return t
  }

  function f(n, r) {
    return n.each(function() {
      var n = r.apply(this, arguments),
        e = t.select(this);
      for (var i in n) e.property(i, n[i])
    })
  }

  function u(t, n) {
    for (var r in n) t.property(r, n[r]);
    return t
  }

  function s(n, r) {
    return n.each(function() {
      var e = r.apply(this, arguments),
        i = t.select(this).transition(n);
      for (var o in e) i.attr(o, e[o])
    })
  }

  function c(t, n) {
    for (var r in n) t.attr(r, n[r]);
    return t
  }

  function a(n, r, e) {
    return n.each(function() {
      var i = r.apply(this, arguments),
        o = t.select(this).transition(n);
      for (var f in i) o.style(f, i[f], e)
    })
  }

  function p(t, n, r) {
    for (var e in n) t.style(e, n[e], r);
    return t
  }
  var l = function(t) {
      return ("function" == typeof t ? r : e)(this, t)
    },
    y = function(t, n) {
      return ("function" == typeof t ? i : o)(this, t, null == n ? "" : n)
    },
    h = function(t) {
      return ("function" == typeof t ? f : u)(this, t)
    },
    v = function(t) {
      return ("function" == typeof t ? s : c)(this, t)
    },
    d = function(t, n) {
      return ("function" == typeof t ? a : p)(this, t, null == n ? "" : n)
    };
  t.selection.prototype.attrs = l, t.selection.prototype.styles = y, t.selection.prototype.properties = h, n.transition.prototype.attrs = v, n.transition.prototype.styles = d
});

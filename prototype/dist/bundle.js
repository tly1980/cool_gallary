;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by CoffeeScript 1.6.2
(function() {
  var BaseView, constants, tpl, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  tpl = require('./tpls');

  constants = {};

  BaseView = (function(_super) {
    __extends(BaseView, _super);

    function BaseView() {
      _ref = BaseView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    BaseView.prototype.log = function() {
      return console.log.apply(console, arguments);
    };

    BaseView.prototype.the_tpl = function() {
      return tpl;
    };

    BaseView.prototype.the_constants = function() {
      return constants;
    };

    BaseView.prototype.register = function(widget_context) {
      this.widget_context = widget_context;
      return this.post_register();
    };

    BaseView.prototype.set_click = function(evt_name, evt_value) {
      evt_value = evt_value + ';' + (new Date()).valueOf();
      console.log('set_click', evt_name, evt_value);
      return this.widget_context.set(evt_name, evt_value);
    };

    BaseView.prototype.get_click = function(evt_name) {
      var ret;

      console.log('evt_name:', evt_name, '@widget_context', this.widget_context.toJSON());
      ret = this.widget_context.get(evt_name);
      console.log('ret', ret);
      return ret.split(';')[0];
    };

    BaseView.prototype.post_register = function() {};

    return BaseView;

  })(Backbone.View);

  exports.BaseView = BaseView;

}).call(this);

},{"./tpls":4}],2:[function(require,module,exports){
// Generated by CoffeeScript 1.6.2
(function() {
  var LayoutView, base, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  base = require('./base');

  LayoutView = (function(_super) {
    __extends(LayoutView, _super);

    function LayoutView() {
      _ref = LayoutView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return LayoutView;

  })(base.BaseView);

  exports.LayoutView = LayoutView;

}).call(this);

},{"./base":1}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.6.2
(function() {
  var layout;

  layout = require('./layout');

}).call(this);

},{"./layout":2}],4:[function(require,module,exports){
//generated by tpl2js - http://github.com/tly1980/tpl2modue
exports={"layout":"<div>\n</div>"};
},{}]},{},[3])
;
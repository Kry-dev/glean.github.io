(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/formatter", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginFormatter = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _jquery, _Plugin2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = babelHelpers.interopRequireDefault(_jquery);
  _Plugin2 = babelHelpers.interopRequireDefault(_Plugin2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NAME = 'formatter';

  var Formatter = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Formatter, _Plugin);

    var _super = _createSuper(Formatter);

    function Formatter() {
      babelHelpers.classCallCheck(this, Formatter);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Formatter, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (!_jquery.default.fn.formatter) {
          return;
        }

        var browserName = navigator.userAgent.toLowerCase();
        if (/msie/i.test(browserName) && !/opera/.test(browserName)) ;
        var $el = this.$el;
        var options = this.options;

        if (options.pattern) {
          options.pattern = options.pattern.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');
        }

        $el.formatter(options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          persistent: true
        };
      }
    }]);
    return Formatter;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Formatter);

  var _default = Formatter;
  _exports.default = _default;
});
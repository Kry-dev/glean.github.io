(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/asscrollable", ["exports", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Plugin);
    global.PluginAsscrollable = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Plugin2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Plugin2 = babelHelpers.interopRequireDefault(_Plugin2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NAME = 'scrollable';

  var Scrollable = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Scrollable, _Plugin);

    var _super = _createSuper(Scrollable);

    function Scrollable() {
      babelHelpers.classCallCheck(this, Scrollable);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Scrollable, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        var $el = this.$el;
        $el.asScrollable(this.options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          namespace: 'scrollable',
          contentSelector: '> [data-role=\'content\']',
          containerSelector: '> [data-role=\'container\']'
        };
      }
    }]);
    return Scrollable;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Scrollable);

  var _default = Scrollable;
  _exports.default = _default;
});
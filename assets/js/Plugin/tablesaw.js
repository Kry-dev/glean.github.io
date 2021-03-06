(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/tablesaw", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginTablesaw = mod.exports;
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

  var NAME = 'tablesaw';

  var Tablesaw = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Tablesaw, _Plugin);

    var _super = _createSuper(Tablesaw);

    function Tablesaw() {
      babelHelpers.classCallCheck(this, Tablesaw);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Tablesaw, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {};
      }
    }, {
      key: "api",
      value: function api() {
        return function () {
          if (typeof _jquery.default.fn.tablesaw === 'undefined') {
            return;
          }

          (0, _jquery.default)(document).trigger('enhance.tablesaw');
        };
      }
    }]);
    return Tablesaw;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Tablesaw);

  var _default = Tablesaw;
  _exports.default = _default;
});
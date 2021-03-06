(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/asprogress", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginAsprogress = mod.exports;
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

  var NAME = 'progress';

  var Progress = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Progress, _Plugin);

    var _super = _createSuper(Progress);

    function Progress() {
      babelHelpers.classCallCheck(this, Progress);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Progress, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (!_jquery.default.fn.asProgress) {
          return;
        }

        var $el = this.$el;
        $el.asProgress(this.options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          bootstrap: true,
          onUpdate: function onUpdate(n) {
            var per = (n - this.min) / (this.max - this.min);

            if (per < 0.5) {
              this.$target.addClass('progress-bar-success').removeClass('progress-bar-warning progress-bar-danger');
            } else if (per >= 0.5 && per < 0.8) {
              this.$target.addClass('progress-bar-warning').removeClass('progress-bar-success progress-bar-danger');
            } else {
              this.$target.addClass('progress-bar-danger').removeClass('progress-bar-success progress-bar-warning');
            }
          },
          labelCallback: function labelCallback(n) {
            var label;
            var labelType = this.$element.data('labeltype');

            if (labelType === 'percentage') {
              var percentage = this.getPercentage(n);
              label = "".concat(percentage, "%");
            } else if (labelType === 'steps') {
              var total = this.$element.data('totalsteps');

              if (!total) {
                total = 10;
              }

              var step = Math.round(total * (n - this.min) / (this.max - this.min));
              label = "".concat(step, " / ").concat(total);
            } else {
              label = n;
            }

            if (this.$element.parent().hasClass('contextual-progress')) {
              this.$element.parent().find('.progress-label').html(label);
            }

            return label;
          }
        };
      }
    }]);
    return Progress;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Progress);

  var _default = Progress;
  _exports.default = _default;
});
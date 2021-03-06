(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/forms/general", ["jquery"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("jquery"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery);
    global.formsGeneral = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_jquery) {
  "use strict";

  _jquery = babelHelpers.interopRequireDefault(_jquery);
  (0, _jquery.default)(document).ready(function () {
    Form.init();
  });
});
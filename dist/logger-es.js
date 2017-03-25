var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var chalk = require('chalk');

var Logger = function () {
  function Logger() {
    classCallCheck(this, Logger);
  }

  createClass(Logger, [{
    key: '_chalk',
    value: function _chalk(text) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';

      return chalk[color](text);
    }
  }, {
    key: 'log',
    value: function log(text) {
      console.log(this._chalk(text));
    }
  }, {
    key: 'warn',
    value: function warn(text) {
      console.warn(this._chalk(text, 'yellow'));
    }
  }, {
    key: 'error',
    value: function error(text) {
      console.error(this._chalk(text, 'red'));
    }
  }, {
    key: 'succes',
    value: function succes(text) {
      console.log(this._chalk(text, 'cyan'));
    }
  }]);
  return Logger;
}();

var logger = new Logger();

export default logger;
//# sourceMappingURL=logger-es.js.map

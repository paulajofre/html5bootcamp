"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(actorName) {
  _classCallCheck(this, Actor);

  this.actorName = actorName;
  console.log(actorName);
};

exports.default = Actor;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.callbacks = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, cb) {
      this.callbacks[event] = cb;
    }
  }, {
    key: "emit",
    value: function emit(event, params) {
      this.callbacks[event](params);
    }
  }, {
    key: "off",
    value: function off(event) {
      delete this.callbacks[event];
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;
"use strict";

var _movie = _interopRequireDefault(require("./modules/movie"));

var _logger = _interopRequireDefault(require("./modules/logger"));

var _social = _interopRequireDefault(require("./modules/social"));

var _actor = _interopRequireDefault(require("./modules/actor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movieOne = new _movie.default('Mulholland Drive', '2001', '147');
var logger = new _logger.default();
movieOne.on('play', logger.log);
movieOne.on('resume', logger.log);
movieOne.on('pause', logger.log);
movieOne.play();
Object.assign(movieOne, _social.default);
movieOne.share('Paula');
var actor = new _actor.default('Kyle MacLachlan');
var otherCast = [new _actor.default('Paul Winfield', 50), new _actor.default('Michael Biehn', 50), new _actor.default('Linda Hamilton', 50)];
movieOne.addCast('Paula the best');
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(info);
    }
  }]);

  return Logger;
}();

exports.default = Logger;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventemitter = _interopRequireDefault(require("./eventemitter"));

var _actor = _interopRequireDefault(require("./actor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Movie =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));
    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    return _this;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit('play', "The 'play' event has been emitted");
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit('pause', "The 'pause' event has been emitted");
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit('resume', "The 'resume' event has been emitted");
    }
  }, {
    key: "addCast",
    value: function addCast(name) {
      otherCast.push(new _actor.default(name));
    }
  }]);

  return Movie;
}(_eventemitter.default);

exports.default = Movie;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Social = {
  share: function share(friendName) {
    console.log('Share', this.title, 'with', friendName);
  },
  like: function like(friendName) {
    console.log(friendName, 'likes', this.title);
  }
};
var _default = Social;
exports.default = _default;

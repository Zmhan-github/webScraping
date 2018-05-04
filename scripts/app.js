"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParserApp = function (_React$Component) {
  _inherits(ParserApp, _React$Component);

  function ParserApp() {
    _classCallCheck(this, ParserApp);

    return _possibleConstructorReturn(this, (ParserApp.__proto__ || Object.getPrototypeOf(ParserApp)).apply(this, arguments));
  }

  _createClass(ParserApp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(Login, null),
        null && React.createElement(Steps, null),
        null && React.createElement(Result, null)
      );
    }
  }]);

  return ParserApp;
}(React.Component);

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();

      var defaultClientAuth = {
        login: "test",
        password: "12345"
      };

      var login = e.target.elements.login.value.trim();
      var password = e.target.elements.password.value.trim();

      if (defaultClientAuth.login === login && defaultClientAuth.password === password) {
        alert("login: " + login + "\npassword: " + password);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.submitForm, className: "form-box" },
        React.createElement(
          "i",
          null,
          "\uD83D\uDD78"
        ),
        React.createElement(
          "label",
          null,
          "Login:",
          React.createElement("input", { type: "text", name: "login" })
        ),
        React.createElement(
          "label",
          null,
          "Password:",
          React.createElement("input", { type: "password", name: "password" })
        ),
        React.createElement(
          "button",
          null,
          "\u0412\u0445\u043E\u0434"
        )
      );
    }
  }]);

  return Login;
}(React.Component);

var Steps = function (_React$Component3) {
  _inherits(Steps, _React$Component3);

  function Steps() {
    _classCallCheck(this, Steps);

    return _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
  }

  _createClass(Steps, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(Step, null),
        React.createElement(Step, null),
        React.createElement(Step, null)
      );
    }
  }]);

  return Steps;
}(React.Component);

var Step = function (_React$Component4) {
  _inherits(Step, _React$Component4);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Steps"
      );
    }
  }]);

  return Step;
}(React.Component);

var Result = function (_React$Component5) {
  _inherits(Result, _React$Component5);

  function Result() {
    _classCallCheck(this, Result);

    return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
  }

  _createClass(Result, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Result"
      );
    }
  }]);

  return Result;
}(React.Component);

ReactDOM.render(React.createElement(ParserApp, null), document.getElementById("app"));

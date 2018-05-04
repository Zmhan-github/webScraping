"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParserApp = function (_React$Component) {
  _inherits(ParserApp, _React$Component);

  function ParserApp(props) {
    _classCallCheck(this, ParserApp);

    var _this = _possibleConstructorReturn(this, (ParserApp.__proto__ || Object.getPrototypeOf(ParserApp)).call(this, props));

    _this.state = {
      DashboardVisible: false
    };

    _this.showDashboard = _this.showDashboard.bind(_this);
    _this.hideDashboard = _this.hideDashboard.bind(_this);
    return _this;
  }

  _createClass(ParserApp, [{
    key: "showDashboard",
    value: function showDashboard() {
      this.setState({ DashboardVisible: true });
    }
  }, {
    key: "hideDashboard",
    value: function hideDashboard() {
      this.setState({ DashboardVisible: false });
    }
  }, {
    key: "render",
    value: function render() {
      var DashboardVisible = this.state.DashboardVisible;

      return React.createElement(
        "div",
        { className: "container" },
        DashboardVisible || React.createElement(Login, { showDashboard: this.showDashboard }),
        DashboardVisible && React.createElement(Dashboard, { hideDashboard: this.hideDashboard })
      );
    }
  }]);

  return ParserApp;
}(React.Component);

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this2 = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this2.state = {
      login: "test",
      password: "12345"
    };

    _this2.submitForm = _this2.submitForm.bind(_this2);
    return _this2;
  }

  _createClass(Login, [{
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();
      var login = e.target.elements.login.value.trim();
      var password = e.target.elements.password.value.trim();

      if (this.state.login === login && this.state.password === password) {
        console.log("login: " + login + "\npassword: " + password);
        console.log("Actions:", this.props.showDashboard);
        this.props.showDashboard();
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

var Dashboard = function (_React$Component3) {
  _inherits(Dashboard, _React$Component3);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this3 = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this3.state = {
      site: "www.squidtv.net",
      path: "india"
    };
    console.log(_this3);
    return _this3;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var hideDashboard = this.props.hideDashboard;
      var _state = this.state,
          site = _state.site,
          path = _state.path;

      return React.createElement(
        "div",
        { className: "dashboard-box" },
        React.createElement(
          "header",
          null,
          React.createElement(
            "nav",
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "WeB Site:"
              ),
              React.createElement(
                "li",
                null,
                site,
                "/",
                path
              )
            )
          ),
          React.createElement(
            "button",
            { onClick: function onClick() {
                return hideDashboard();
              } },
            "\u0412\u044B\u0445\u043E\u0434"
          )
        ),
        React.createElement(
          "main",
          null,
          React.createElement(Step, null),
          React.createElement(Step, null),
          React.createElement(Step, null)
        ),
        React.createElement(Result, null)
      );
    }
  }]);

  return Dashboard;
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
        "select",
        { defaultValue: 1 },
        React.createElement(
          "option",
          { value: "0" },
          "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434 "
        ),
        React.createElement(
          "option",
          { value: "1" },
          "\u041C\u043E\u0441\u043A\u0432\u0430 "
        ),
        React.createElement(
          "option",
          { value: "2" },
          "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433 "
        ),
        React.createElement(
          "option",
          { value: "3" },
          "\u0411\u0435\u0440\u043B\u0438\u043D"
        )
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
        "footer",
        null,
        "Result"
      );
    }
  }]);

  return Result;
}(React.Component);

ReactDOM.render(React.createElement(ParserApp, null), document.getElementById("app"));

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@apollo/client");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    clients {\n      name\n      _id\n      email\n      phone\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_CLIENTS = (0, _client.gql)(_templateObject());
var _default = GET_CLIENTS;
exports["default"] = _default;
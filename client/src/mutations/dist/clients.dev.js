"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_CLIENT = exports.ADD_CLIENT = void 0;

var _client = require("@apollo/client");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation deleteClient($_id: ID!) {\n    deleteClient(_id: $_id) {\n      _id\n      name\n      email\n      phone\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation addClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      _id\n      name\n      email\n      phone\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ADD_CLIENT = (0, _client.gql)(_templateObject());
exports.ADD_CLIENT = ADD_CLIENT;
var DELETE_CLIENT = (0, _client.gql)(_templateObject2());
exports.DELETE_CLIENT = DELETE_CLIENT;
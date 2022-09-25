"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_PROJECT = exports.DELETE_PROJECT = exports.ADD_PROJECT = void 0;

var _client = require("@apollo/client");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation UpdateProject(\n    $_id: ID!\n    $name: String!\n    $description: String!\n    $status: ProjectStatusUpdate!\n  ) {\n    updateProject(\n      _id: $_id\n      name: $name\n      description: $description\n      status: $status\n    ) {\n      _id\n      name\n      description\n      status\n      client {\n        _id\n        name\n        email\n        phone\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation DeleteProject($_id: ID!) {\n    deleteProject(_id: $_id) {\n      _id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation AddProject(\n    $name: String!\n    $description: String!\n    $status: ProjectStatus!\n    $clientId: ID!\n  ) {\n    addProject(\n      name: $name\n      description: $description\n      status: $status\n      clientId: $clientId\n    ) {\n      _id\n      name\n      description\n      status\n      client {\n        _id\n        name\n        email\n        phone\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ADD_PROJECT = (0, _client.gql)(_templateObject());
exports.ADD_PROJECT = ADD_PROJECT;
var DELETE_PROJECT = (0, _client.gql)(_templateObject2());
exports.DELETE_PROJECT = DELETE_PROJECT;
var UPDATE_PROJECT = (0, _client.gql)(_templateObject3());
exports.UPDATE_PROJECT = UPDATE_PROJECT;
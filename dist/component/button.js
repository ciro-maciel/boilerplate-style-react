'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n'], ['\n    color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.button(_templateObject, _variables.color.base);
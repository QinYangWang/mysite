var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// (disabled):fs
var require_fs = __commonJS({
  "(disabled):fs"() {
  }
});

// node_modules/kind-of/index.js
var require_kind_of = __commonJS({
  "node_modules/kind-of/index.js"(exports2, module2) {
    var toString = Object.prototype.toString;
    module2.exports = function kindOf(val) {
      if (val === void 0)
        return "undefined";
      if (val === null)
        return "null";
      var type = typeof val;
      if (type === "boolean")
        return "boolean";
      if (type === "string")
        return "string";
      if (type === "number")
        return "number";
      if (type === "symbol")
        return "symbol";
      if (type === "function") {
        return isGeneratorFn(val) ? "generatorfunction" : "function";
      }
      if (isArray(val))
        return "array";
      if (isBuffer(val))
        return "buffer";
      if (isArguments(val))
        return "arguments";
      if (isDate(val))
        return "date";
      if (isError(val))
        return "error";
      if (isRegexp(val))
        return "regexp";
      switch (ctorName(val)) {
        case "Symbol":
          return "symbol";
        case "Promise":
          return "promise";
        case "WeakMap":
          return "weakmap";
        case "WeakSet":
          return "weakset";
        case "Map":
          return "map";
        case "Set":
          return "set";
        case "Int8Array":
          return "int8array";
        case "Uint8Array":
          return "uint8array";
        case "Uint8ClampedArray":
          return "uint8clampedarray";
        case "Int16Array":
          return "int16array";
        case "Uint16Array":
          return "uint16array";
        case "Int32Array":
          return "int32array";
        case "Uint32Array":
          return "uint32array";
        case "Float32Array":
          return "float32array";
        case "Float64Array":
          return "float64array";
      }
      if (isGeneratorObj(val)) {
        return "generator";
      }
      type = toString.call(val);
      switch (type) {
        case "[object Object]":
          return "object";
        case "[object Map Iterator]":
          return "mapiterator";
        case "[object Set Iterator]":
          return "setiterator";
        case "[object String Iterator]":
          return "stringiterator";
        case "[object Array Iterator]":
          return "arrayiterator";
      }
      return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
    function ctorName(val) {
      return typeof val.constructor === "function" ? val.constructor.name : null;
    }
    function isArray(val) {
      if (Array.isArray)
        return Array.isArray(val);
      return val instanceof Array;
    }
    function isError(val) {
      return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
    }
    function isDate(val) {
      if (val instanceof Date)
        return true;
      return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
    }
    function isRegexp(val) {
      if (val instanceof RegExp)
        return true;
      return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
    }
    function isGeneratorFn(name, val) {
      return ctorName(name) === "GeneratorFunction";
    }
    function isGeneratorObj(val) {
      return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
    }
    function isArguments(val) {
      try {
        if (typeof val.length === "number" && typeof val.callee === "function") {
          return true;
        }
      } catch (err) {
        if (err.message.indexOf("callee") !== -1) {
          return true;
        }
      }
      return false;
    }
    function isBuffer(val) {
      if (val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/extend-shallow/index.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_extendable();
    module2.exports = function extend(o) {
      if (!isObject(o)) {
        o = {};
      }
      var len = arguments.length;
      for (var i = 1; i < len; i++) {
        var obj = arguments[i];
        if (isObject(obj)) {
          assign(o, obj);
        }
      }
      return o;
    };
    function assign(a, b) {
      for (var key in b) {
        if (hasOwn(b, key)) {
          a[key] = b[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/section-matter/index.js
var require_section_matter = __commonJS({
  "node_modules/section-matter/index.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var extend = require_extend_shallow();
    module2.exports = function(input, options2) {
      if (typeof options2 === "function") {
        options2 = { parse: options2 };
      }
      var file = toObject(input);
      var defaults = { section_delimiter: "---", parse: identity };
      var opts = extend({}, defaults, options2);
      var delim = opts.section_delimiter;
      var lines = file.content.split(/\r?\n/);
      var sections = null;
      var section = createSection();
      var content = [];
      var stack = [];
      function initSections(val) {
        file.content = val;
        sections = [];
        content = [];
      }
      function closeSection(val) {
        if (stack.length) {
          section.key = getKey(stack[0], delim);
          section.content = val;
          opts.parse(section, sections);
          sections.push(section);
          section = createSection();
          content = [];
          stack = [];
        }
      }
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var len = stack.length;
        var ln = line.trim();
        if (isDelimiter(ln, delim)) {
          if (ln.length === 3 && i !== 0) {
            if (len === 0 || len === 2) {
              content.push(line);
              continue;
            }
            stack.push(ln);
            section.data = content.join("\n");
            content = [];
            continue;
          }
          if (sections === null) {
            initSections(content.join("\n"));
          }
          if (len === 2) {
            closeSection(content.join("\n"));
          }
          stack.push(ln);
          continue;
        }
        content.push(line);
      }
      if (sections === null) {
        initSections(content.join("\n"));
      } else {
        closeSection(content.join("\n"));
      }
      file.sections = sections;
      return file;
    };
    function isDelimiter(line, delim) {
      if (line.slice(0, delim.length) !== delim) {
        return false;
      }
      if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false;
      }
      return true;
    }
    function toObject(input) {
      if (typeOf(input) !== "object") {
        input = { content: input };
      }
      if (typeof input.content !== "string" && !isBuffer(input.content)) {
        throw new TypeError("expected a buffer or string");
      }
      input.content = input.content.toString();
      input.sections = [];
      return input;
    }
    function getKey(val, delim) {
      return val ? val.slice(delim.length).trim() : "";
    }
    function createSection() {
      return { key: "", data: "", content: "" };
    }
    function identity(val) {
      return val;
    }
    function isBuffer(val) {
      if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js
var require_common = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js"(exports2, module2) {
    "use strict";
    function isNothing(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    function isObject(subject) {
      return typeof subject === "object" && subject !== null;
    }
    function toArray(sequence) {
      if (Array.isArray(sequence))
        return sequence;
      else if (isNothing(sequence))
        return [];
      return [sequence];
    }
    function extend(target, source) {
      var index, length, key, sourceKeys;
      if (source) {
        sourceKeys = Object.keys(source);
        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }
      return target;
    }
    function repeat(string, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }
      return result;
    }
    function isNegativeZero(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
    }
    module2.exports.isNothing = isNothing;
    module2.exports.isObject = isObject;
    module2.exports.toArray = toArray;
    module2.exports.repeat = repeat;
    module2.exports.isNegativeZero = isNegativeZero;
    module2.exports.extend = extend;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js
var require_exception = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js"(exports2, module2) {
    "use strict";
    function YAMLException(reason, mark) {
      Error.call(this);
      this.name = "YAMLException";
      this.reason = reason;
      this.mark = mark;
      this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || "";
      }
    }
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ": ";
      result += this.reason || "(unknown reason)";
      if (!compact && this.mark) {
        result += " " + this.mark.toString();
      }
      return result;
    };
    module2.exports = YAMLException;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js
var require_mark = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    function Mark(name, buffer, position, line, column) {
      this.name = name;
      this.buffer = buffer;
      this.position = position;
      this.line = line;
      this.column = column;
    }
    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet;
      if (!this.buffer)
        return null;
      indent = indent || 4;
      maxLength = maxLength || 75;
      head = "";
      start = this.position;
      while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
          head = " ... ";
          start += 5;
          break;
        }
      }
      tail = "";
      end = this.position;
      while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
          tail = " ... ";
          end -= 5;
          break;
        }
      }
      snippet = this.buffer.slice(start, end);
      return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";
    };
    Mark.prototype.toString = function toString(compact) {
      var snippet, where = "";
      if (this.name) {
        where += 'in "' + this.name + '" ';
      }
      where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
      if (!compact) {
        snippet = this.getSnippet();
        if (snippet) {
          where += ":\n" + snippet;
        }
      }
      return where;
    };
    module2.exports = Mark;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js
var require_type = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js"(exports2, module2) {
    "use strict";
    var YAMLException = require_exception();
    var TYPE_CONSTRUCTOR_OPTIONS = [
      "kind",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "defaultStyle",
      "styleAliases"
    ];
    var YAML_NODE_KINDS = [
      "scalar",
      "sequence",
      "mapping"
    ];
    function compileStyleAliases(map) {
      var result = {};
      if (map !== null) {
        Object.keys(map).forEach(function(style) {
          map[style].forEach(function(alias) {
            result[String(alias)] = style;
          });
        });
      }
      return result;
    }
    function Type(tag, options2) {
      options2 = options2 || {};
      Object.keys(options2).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });
      this.tag = tag;
      this.kind = options2["kind"] || null;
      this.resolve = options2["resolve"] || function() {
        return true;
      };
      this.construct = options2["construct"] || function(data) {
        return data;
      };
      this.instanceOf = options2["instanceOf"] || null;
      this.predicate = options2["predicate"] || null;
      this.represent = options2["represent"] || null;
      this.defaultStyle = options2["defaultStyle"] || null;
      this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }
    module2.exports = Type;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js
var require_schema = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Type = require_type();
    function compileList(schema, name, result) {
      var exclude = [];
      schema.include.forEach(function(includedSchema) {
        result = compileList(includedSchema, name, result);
      });
      schema[name].forEach(function(currentType) {
        result.forEach(function(previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
            exclude.push(previousIndex);
          }
        });
        result.push(currentType);
      });
      return result.filter(function(type, index) {
        return exclude.indexOf(index) === -1;
      });
    }
    function compileMap() {
      var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index, length;
      function collectType(type) {
        result[type.kind][type.tag] = result["fallback"][type.tag] = type;
      }
      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }
    function Schema(definition) {
      this.include = definition.include || [];
      this.implicit = definition.implicit || [];
      this.explicit = definition.explicit || [];
      this.implicit.forEach(function(type) {
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
      });
      this.compiledImplicit = compileList(this, "implicit", []);
      this.compiledExplicit = compileList(this, "explicit", []);
      this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    Schema.DEFAULT = null;
    Schema.create = function createSchema() {
      var schemas, types;
      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT;
          types = arguments[0];
          break;
        case 2:
          schemas = arguments[0];
          types = arguments[1];
          break;
        default:
          throw new YAMLException("Wrong number of arguments for Schema.create function");
      }
      schemas = common.toArray(schemas);
      types = common.toArray(types);
      if (!schemas.every(function(schema) {
        return schema instanceof Schema;
      })) {
        throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
      }
      if (!types.every(function(type) {
        return type instanceof Type;
      })) {
        throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      return new Schema({
        include: schemas,
        explicit: types
      });
    };
    module2.exports = Schema;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js
var require_str = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function(data) {
        return data !== null ? data : "";
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js
var require_seq = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function(data) {
        return data !== null ? data : [];
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js
var require_map = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function(data) {
        return data !== null ? data : {};
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js
var require_failsafe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      explicit: [
        require_str(),
        require_seq(),
        require_map()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js
var require_null = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlNull(data) {
      if (data === null)
        return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    function constructYamlNull() {
      return null;
    }
    function isNull(object) {
      return object === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function() {
          return "~";
        },
        lowercase: function() {
          return "null";
        },
        uppercase: function() {
          return "NULL";
        },
        camelcase: function() {
          return "Null";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js
var require_bool = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlBoolean(data) {
      if (data === null)
        return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    function constructYamlBoolean(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    function isBoolean(object) {
      return Object.prototype.toString.call(object) === "[object Boolean]";
    }
    module2.exports = new Type("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function(object) {
          return object ? "true" : "false";
        },
        uppercase: function(object) {
          return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
          return object ? "True" : "False";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js
var require_int = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    function isHexCode(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    function isOctCode(c) {
      return 48 <= c && c <= 55;
    }
    function isDecCode(c) {
      return 48 <= c && c <= 57;
    }
    function resolveYamlInteger(data) {
      if (data === null)
        return false;
      var max = data.length, index = 0, hasDigits = false, ch;
      if (!max)
        return false;
      ch = data[index];
      if (ch === "-" || ch === "+") {
        ch = data[++index];
      }
      if (ch === "0") {
        if (index + 1 === max)
          return true;
        ch = data[++index];
        if (ch === "b") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (ch !== "0" && ch !== "1")
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "x") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!isHexCode(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (!isOctCode(data.charCodeAt(index)))
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "_")
        return false;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (ch === ":")
          break;
        if (!isDecCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_")
        return false;
      if (ch !== ":")
        return true;
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
    }
    function constructYamlInteger(data) {
      var value = data, sign = 1, ch, base, digits = [];
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
      }
      ch = value[0];
      if (ch === "-" || ch === "+") {
        if (ch === "-")
          sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0")
        return 0;
      if (ch === "0") {
        if (value[1] === "b")
          return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x")
          return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
      }
      if (value.indexOf(":") !== -1) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseInt(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function(d) {
          value += d * base;
          base *= 60;
        });
        return sign * value;
      }
      return sign * parseInt(value, 10);
    }
    function isInteger(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function(obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
          return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
          return obj.toString(10);
        },
        /* eslint-disable max-len */
        hexadecimal: function(obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js
var require_float = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    function resolveYamlFloat(data) {
      if (data === null)
        return false;
      if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === "_") {
        return false;
      }
      return true;
    }
    function constructYamlFloat(data) {
      var value, sign, base, digits;
      value = data.replace(/_/g, "").toLowerCase();
      sign = value[0] === "-" ? -1 : 1;
      digits = [];
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      } else if (value.indexOf(":") >= 0) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseFloat(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function(d) {
          value += d * base;
          base *= 60;
        });
        return sign * value;
      }
      return sign * parseFloat(value, 10);
    }
    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    function representYamlFloat(object, style) {
      var res;
      if (isNaN(object)) {
        switch (style) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (common.isNegativeZero(object)) {
        return "-0.0";
      }
      res = object.toString(10);
      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
    }
    function isFloat(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js
var require_json = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_failsafe()
      ],
      implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js
var require_core = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_json()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var YAML_DATE_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    var YAML_TIMESTAMP_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    function resolveYamlTimestamp(data) {
      if (data === null)
        return false;
      if (YAML_DATE_REGEXP.exec(data) !== null)
        return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
        return true;
      return false;
    }
    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
      match = YAML_DATE_REGEXP.exec(data);
      if (match === null)
        match = YAML_TIMESTAMP_REGEXP.exec(data);
      if (match === null)
        throw new Error("Date resolve error");
      year = +match[1];
      month = +match[2] - 1;
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-")
          delta = -delta;
      }
      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
      if (delta)
        date.setTime(date.getTime() - delta);
      return date;
    }
    function representYamlTimestamp(object) {
      return object.toISOString();
    }
    module2.exports = new Type("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js
var require_merge = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlMerge(data) {
      return data === "<<" || data === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: resolveYamlMerge
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js
var require_binary = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js"(exports2, module2) {
    "use strict";
    var NodeBuffer;
    try {
      _require = require;
      NodeBuffer = _require("buffer").Buffer;
    } catch (__) {
    }
    var _require;
    var Type = require_type();
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    function resolveYamlBinary(data) {
      if (data === null)
        return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64)
          continue;
        if (code < 0)
          return false;
        bitlen += 6;
      }
      return bitlen % 8 === 0;
    }
    function constructYamlBinary(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
      }
      tailbits = max % 4 * 6;
      if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
      }
      if (NodeBuffer) {
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
      }
      return result;
    }
    function representYamlBinary(object) {
      var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object[idx];
      }
      tail = max % 3;
      if (tail === 0) {
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    function isBinary(object) {
      return NodeBuffer && NodeBuffer.isBuffer(object);
    }
    module2.exports = new Type("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js
var require_omap = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    function resolveYamlOmap(data) {
      if (data === null)
        return true;
      var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]")
          return false;
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey)
              pairHasKey = true;
            else
              return false;
          }
        }
        if (!pairHasKey)
          return false;
        if (objectKeys.indexOf(pairKey) === -1)
          objectKeys.push(pairKey);
        else
          return false;
      }
      return true;
    }
    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }
    module2.exports = new Type("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js
var require_pairs = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _toString = Object.prototype.toString;
    function resolveYamlPairs(data) {
      if (data === null)
        return true;
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        if (_toString.call(pair) !== "[object Object]")
          return false;
        keys = Object.keys(pair);
        if (keys.length !== 1)
          return false;
        result[index] = [keys[0], pair[keys[0]]];
      }
      return true;
    }
    function constructYamlPairs(data) {
      if (data === null)
        return [];
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [keys[0], pair[keys[0]]];
      }
      return result;
    }
    module2.exports = new Type("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js
var require_set = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function resolveYamlSet(data) {
      if (data === null)
        return true;
      var key, object = data;
      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null)
            return false;
        }
      }
      return true;
    }
    function constructYamlSet(data) {
      return data !== null ? data : {};
    }
    module2.exports = new Type("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js
var require_default_safe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_core()
      ],
      implicit: [
        require_timestamp(),
        require_merge()
      ],
      explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js
var require_undefined = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptUndefined() {
      return true;
    }
    function constructJavascriptUndefined() {
      return void 0;
    }
    function representJavascriptUndefined() {
      return "";
    }
    function isUndefined(object) {
      return typeof object === "undefined";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/undefined", {
      kind: "scalar",
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js
var require_regexp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptRegExp(data) {
      if (data === null)
        return false;
      if (data.length === 0)
        return false;
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail)
          modifiers = tail[1];
        if (modifiers.length > 3)
          return false;
        if (regexp[regexp.length - modifiers.length - 1] !== "/")
          return false;
      }
      return true;
    }
    function constructJavascriptRegExp(data) {
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail)
          modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
      }
      return new RegExp(regexp, modifiers);
    }
    function representJavascriptRegExp(object) {
      var result = "/" + object.source + "/";
      if (object.global)
        result += "g";
      if (object.multiline)
        result += "m";
      if (object.ignoreCase)
        result += "i";
      return result;
    }
    function isRegExp(object) {
      return Object.prototype.toString.call(object) === "[object RegExp]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/regexp", {
      kind: "scalar",
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js
var require_function = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js"(exports2, module2) {
    "use strict";
    var esprima;
    try {
      _require = require;
      esprima = _require("esprima");
    } catch (_) {
      if (typeof window !== "undefined")
        esprima = window.esprima;
    }
    var _require;
    var Type = require_type();
    function resolveJavascriptFunction(data) {
      if (data === null)
        return false;
      try {
        var source = "(" + data + ")", ast = esprima.parse(source, { range: true });
        if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    function constructJavascriptFunction(data) {
      var source = "(" + data + ")", ast = esprima.parse(source, { range: true }), params = [], body;
      if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
        throw new Error("Failed to resolve function");
      }
      ast.body[0].expression.params.forEach(function(param) {
        params.push(param.name);
      });
      body = ast.body[0].expression.body.range;
      if (ast.body[0].expression.body.type === "BlockStatement") {
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
      }
      return new Function(params, "return " + source.slice(body[0], body[1]));
    }
    function representJavascriptFunction(object) {
      return object.toString();
    }
    function isFunction(object) {
      return Object.prototype.toString.call(object) === "[object Function]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/function", {
      kind: "scalar",
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js
var require_default_full = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = Schema.DEFAULT = new Schema({
      include: [
        require_default_safe()
      ],
      explicit: [
        require_undefined(),
        require_regexp(),
        require_function()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js
var require_loader = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Mark = require_mark();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CONTEXT_FLOW_IN = 1;
    var CONTEXT_FLOW_OUT = 2;
    var CONTEXT_BLOCK_IN = 3;
    var CONTEXT_BLOCK_OUT = 4;
    var CHOMPING_CLIP = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP = 3;
    var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function is_EOL(c) {
      return c === 10 || c === 13;
    }
    function is_WHITE_SPACE(c) {
      return c === 9 || c === 32;
    }
    function is_WS_OR_EOL(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    function is_FLOW_INDICATOR(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    function fromHexCode(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32;
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    function escapedHexLen(c) {
      if (c === 120) {
        return 2;
      }
      if (c === 117) {
        return 4;
      }
      if (c === 85) {
        return 8;
      }
      return 0;
    }
    function fromDecimalCode(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    function simpleEscapeSequence(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    function charFromCodepoint(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    function setProperty(object, key, value) {
      if (key === "__proto__") {
        Object.defineProperty(object, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value
        });
      } else {
        object[key] = value;
      }
    }
    var simpleEscapeCheck = new Array(256);
    var simpleEscapeMap = new Array(256);
    for (i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    var i;
    function State(input, options2) {
      this.input = input;
      this.filename = options2["filename"] || null;
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.onWarning = options2["onWarning"] || null;
      this.legacy = options2["legacy"] || false;
      this.json = options2["json"] || false;
      this.listener = options2["listener"] || null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = input.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.documents = [];
    }
    function generateError(state, message) {
      return new YAMLException(
        message,
        new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart)
      );
    }
    function throwError(state, message) {
      throw generateError(state, message);
    }
    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }
    var directiveHandlers = {
      YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
          throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
          throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
          throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
          throwWarning(state, "unsupported YAML version of the document");
        }
      },
      TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        state.tagMap[handle] = prefix;
      }
    };
    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              throwError(state, "expected valid JSON character");
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
      }
    }
    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;
      if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
      }
      sourceKeys = Object.keys(source);
      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        if (!_hasOwnProperty.call(destination, key)) {
          setProperty(destination, key, source[key]);
          overridableKeys[key] = true;
        }
      }
    }
    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
      var index, quantity;
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, "nested arrays are not supported inside keys");
          }
          if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
            keyNode[index] = "[object Object]";
          }
        }
      }
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode);
      if (_result === null) {
        _result = {};
      }
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state, _result, valueNode[index], overridableKeys);
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.position = startPos || state.position;
          throwError(state, "duplicated mapping key");
        }
        setProperty(_result, keyNode, valueNode);
        delete overridableKeys[keyNode];
      }
      return _result;
    }
    function readLineBreak(state) {
      var ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 10) {
        state.position++;
      } else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) {
          state.position++;
        }
      } else {
        throwError(state, "a line break is expected");
      }
      state.line += 1;
      state.lineStart = state.position;
    }
    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        if (is_EOL(ch)) {
          readLineBreak(state);
          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;
          while (ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }
      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
      }
      return lineBreaks;
    }
    function testDocumentSeparator(state) {
      var _position = state.position, ch;
      ch = state.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }
      return false;
    }
    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += " ";
      } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
      }
    }
    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
      ch = state.input.charCodeAt(state.position);
      if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }
      state.kind = "scalar";
      state.result = "";
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
      while (ch !== 0) {
        if (ch === 58) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }
        } else if (ch === 35) {
          preceding = state.input.charCodeAt(state.position - 1);
          if (is_WS_OR_EOL(preceding)) {
            break;
          }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;
        } else if (is_EOL(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1);
          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }
        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, captureEnd, false);
      if (state.result) {
        return true;
      }
      state.kind = _kind;
      state.result = _result;
      return false;
    }
    function readSingleQuotedScalar(state, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 39) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 39) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (ch === 39) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a single quoted scalar");
    }
    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 34) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 34) {
          captureSegment(state, captureStart, state.position, true);
          state.position++;
          return true;
        } else if (ch === 92) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent);
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch];
            state.position++;
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);
              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                throwError(state, "expected hexadecimal character");
              }
            }
            state.result += charFromCodepoint(hexResult);
            state.position++;
          } else {
            throwError(state, "unknown escape sequence");
          }
          captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a double quoted scalar");
    }
    function readFlowCollection(state, nodeIndent) {
      var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
      } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
      } else {
        return false;
      }
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(++state.position);
      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? "mapping" : "sequence";
          state.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state, "missed comma between flow collection entries");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            skipSeparationSpace(state, true, nodeIndent);
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          skipSeparationSpace(state, true, nodeIndent);
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state.result;
        }
        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
          _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }
      throwError(state, "unexpected end of the stream within a flow collection");
    }
    function readBlockScalar(state, nodeIndent) {
      var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 124) {
        folding = false;
      } else if (ch === 62) {
        folding = true;
      } else {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state, "repeat of a chomping mode identifier");
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state, "repeat of an indentation width identifier");
          }
        } else {
          break;
        }
      }
      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (!is_EOL(ch) && ch !== 0);
        }
      }
      while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }
        if (state.lineIndent < textIndent) {
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              state.result += "\n";
            }
          }
          break;
        }
        if (folding) {
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat("\n", emptyLines + 1);
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state.result += " ";
            }
          } else {
            state.result += common.repeat("\n", emptyLines);
          }
        } else {
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while (!is_EOL(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
      }
      return true;
    }
    function readBlockSequence(state, nodeIndent) {
      var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (ch !== 45) {
          break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
          break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
      }
      return false;
    }
    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        _pos = state.position;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
          if (ch === 63) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = true;
            allowCompact = true;
          } else if (atExplicitKey) {
            atExplicitKey = false;
            allowCompact = true;
          } else {
            throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
          }
          state.position += 1;
          ch = following;
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 58) {
              ch = state.input.charCodeAt(++state.position);
              if (!is_WS_OR_EOL(ch)) {
                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
              }
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;
            } else if (detected) {
              throwError(state, "can not read an implicit mapping pair; a colon is missed");
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true;
            }
          } else if (detected) {
            throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        } else {
          break;
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }
          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
            keyTag = keyNode = valueNode = null;
          }
          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }
        if (state.lineIndent > nodeIndent && ch !== 0) {
          throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
      }
      return detected;
    }
    function readTagProperty(state) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 33)
        return false;
      if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
      }
      ch = state.input.charCodeAt(++state.position);
      if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
      } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
      } else {
        tagHandle = "!";
      }
      _position = state.position;
      if (isVerbatim) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 62);
        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          throwError(state, "unexpected end of the stream within a verbatim tag");
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);
              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, "named tag handle cannot contain such characters");
              }
              isNamed = true;
              _position = state.position + 1;
            } else {
              throwError(state, "tag suffix cannot contain exclamation marks");
            }
          }
          ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, "tag suffix cannot contain flow indicator characters");
        }
      }
      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
      }
      if (isVerbatim) {
        state.tag = tagName;
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
      } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
      } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
      }
      return true;
    }
    function readAnchorProperty(state) {
      var _position, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 38)
        return false;
      if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
      }
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
      }
      state.anchor = state.input.slice(_position, state.position);
      return true;
    }
    function readAlias(state) {
      var _position, alias, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 42)
        return false;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
      }
      alias = state.input.slice(_position, state.position);
      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
      }
      state.result = state.anchorMap[alias];
      skipSeparationSpace(state, true, -1);
      return true;
    }
    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent;
      if (state.listener !== null) {
        state.listener("open", state);
      }
      state.tag = null;
      state.anchor = null;
      state.kind = null;
      state.result = null;
      allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }
      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }
      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }
      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
          if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
            hasContent = true;
          } else {
            if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;
            } else if (readAlias(state)) {
              hasContent = true;
              if (state.tag !== null || state.anchor !== null) {
                throwError(state, "alias node should not have any properties");
              }
            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;
              if (state.tag === null) {
                state.tag = "?";
              }
            }
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
      }
      if (state.tag !== null && state.tag !== "!") {
        if (state.tag === "?") {
          if (state.result !== null && state.kind !== "scalar") {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
          }
          for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type = state.implicitTypes[typeIndex];
            if (type.resolve(state.result)) {
              state.result = type.construct(state.result);
              state.tag = type.tag;
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
              break;
            }
          }
        } else if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
          type = state.typeMap[state.kind || "fallback"][state.tag];
          if (state.result !== null && type.kind !== state.kind) {
            throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
          }
          if (!type.resolve(state.result)) {
            throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
          } else {
            state.result = type.construct(state.result);
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else {
          throwError(state, "unknown tag !<" + state.tag + ">");
        }
      }
      if (state.listener !== null) {
        state.listener("close", state);
      }
      return state.tag !== null || state.anchor !== null || hasContent;
    }
    function readDocument(state) {
      var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = {};
      state.anchorMap = {};
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
          break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
          throwError(state, "directive name must not be less than one character in length");
        }
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0 && !is_EOL(ch));
            break;
          }
          if (is_EOL(ch))
            break;
          _position = state.position;
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0)
          readLineBreak(state);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
      }
      skipSeparationSpace(state, true, -1);
      if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
      }
      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state, true, -1);
      if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
      }
      state.documents.push(state.result);
      if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        }
        return;
      }
      if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
      } else {
        return;
      }
    }
    function loadDocuments(input, options2) {
      input = String(input);
      options2 = options2 || {};
      if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state = new State(input, options2);
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
      }
      state.input += "\0";
      while (state.input.charCodeAt(state.position) === 32) {
        state.lineIndent += 1;
        state.position += 1;
      }
      while (state.position < state.length - 1) {
        readDocument(state);
      }
      return state.documents;
    }
    function loadAll(input, iterator, options2) {
      if (iterator !== null && typeof iterator === "object" && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      var documents = loadDocuments(input, options2);
      if (typeof iterator !== "function") {
        return documents;
      }
      for (var index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }
    function load(input, options2) {
      var documents = loadDocuments(input, options2);
      if (documents.length === 0) {
        return void 0;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new YAMLException("expected a single document in the stream, but found more");
    }
    function safeLoadAll(input, iterator, options2) {
      if (typeof iterator === "object" && iterator !== null && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    function safeLoad(input, options2) {
      return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.loadAll = loadAll;
    module2.exports.load = load;
    module2.exports.safeLoadAll = safeLoadAll;
    module2.exports.safeLoad = safeLoad;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js
var require_dumper = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CHAR_TAB = 9;
    var CHAR_LINE_FEED = 10;
    var CHAR_CARRIAGE_RETURN = 13;
    var CHAR_SPACE = 32;
    var CHAR_EXCLAMATION = 33;
    var CHAR_DOUBLE_QUOTE = 34;
    var CHAR_SHARP = 35;
    var CHAR_PERCENT = 37;
    var CHAR_AMPERSAND = 38;
    var CHAR_SINGLE_QUOTE = 39;
    var CHAR_ASTERISK = 42;
    var CHAR_COMMA = 44;
    var CHAR_MINUS = 45;
    var CHAR_COLON = 58;
    var CHAR_EQUALS = 61;
    var CHAR_GREATER_THAN = 62;
    var CHAR_QUESTION = 63;
    var CHAR_COMMERCIAL_AT = 64;
    var CHAR_LEFT_SQUARE_BRACKET = 91;
    var CHAR_RIGHT_SQUARE_BRACKET = 93;
    var CHAR_GRAVE_ACCENT = 96;
    var CHAR_LEFT_CURLY_BRACKET = 123;
    var CHAR_VERTICAL_LINE = 124;
    var CHAR_RIGHT_CURLY_BRACKET = 125;
    var ESCAPE_SEQUENCES = {};
    ESCAPE_SEQUENCES[0] = "\\0";
    ESCAPE_SEQUENCES[7] = "\\a";
    ESCAPE_SEQUENCES[8] = "\\b";
    ESCAPE_SEQUENCES[9] = "\\t";
    ESCAPE_SEQUENCES[10] = "\\n";
    ESCAPE_SEQUENCES[11] = "\\v";
    ESCAPE_SEQUENCES[12] = "\\f";
    ESCAPE_SEQUENCES[13] = "\\r";
    ESCAPE_SEQUENCES[27] = "\\e";
    ESCAPE_SEQUENCES[34] = '\\"';
    ESCAPE_SEQUENCES[92] = "\\\\";
    ESCAPE_SEQUENCES[133] = "\\N";
    ESCAPE_SEQUENCES[160] = "\\_";
    ESCAPE_SEQUENCES[8232] = "\\L";
    ESCAPE_SEQUENCES[8233] = "\\P";
    var DEPRECATED_BOOLEANS_SYNTAX = [
      "y",
      "Y",
      "yes",
      "Yes",
      "YES",
      "on",
      "On",
      "ON",
      "n",
      "N",
      "no",
      "No",
      "NO",
      "off",
      "Off",
      "OFF"
    ];
    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;
      if (map === null)
        return {};
      result = {};
      keys = Object.keys(map);
      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }
        result[tag] = style;
      }
      return result;
    }
    function encodeHex(character) {
      var string, handle, length;
      string = character.toString(16).toUpperCase();
      if (character <= 255) {
        handle = "x";
        length = 2;
      } else if (character <= 65535) {
        handle = "u";
        length = 4;
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
      } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
      }
      return "\\" + handle + common.repeat("0", length - string.length) + string;
    }
    function State(options2) {
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.indent = Math.max(1, options2["indent"] || 2);
      this.noArrayIndent = options2["noArrayIndent"] || false;
      this.skipInvalid = options2["skipInvalid"] || false;
      this.flowLevel = common.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
      this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
      this.sortKeys = options2["sortKeys"] || false;
      this.lineWidth = options2["lineWidth"] || 80;
      this.noRefs = options2["noRefs"] || false;
      this.noCompatMode = options2["noCompatMode"] || false;
      this.condenseFlow = options2["condenseFlow"] || false;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = "";
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    function indentString(string, spaces) {
      var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
      while (position < length) {
        next = string.indexOf("\n", position);
        if (next === -1) {
          line = string.slice(position);
          position = length;
        } else {
          line = string.slice(position, next + 1);
          position = next + 1;
        }
        if (line.length && line !== "\n")
          result += ind;
        result += line;
      }
      return result;
    }
    function generateNextLine(state, level) {
      return "\n" + common.repeat(" ", state.indent * level);
    }
    function testImplicitResolving(state, str2) {
      var index, length, type;
      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];
        if (type.resolve(str2)) {
          return true;
        }
      }
      return false;
    }
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }
    function isPrintable(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
    }
    function isNsChar(c) {
      return isPrintable(c) && !isWhitespace(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    function isPlainSafe(c, prev) {
      return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
    }
    function isPlainSafeFirst(c) {
      return isPrintable(c) && c !== 65279 && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }
    var STYLE_PLAIN = 1;
    var STYLE_SINGLE = 2;
    var STYLE_LITERAL = 3;
    var STYLE_FOLDED = 4;
    var STYLE_DOUBLE = 5;
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
      var i;
      var char, prev_char;
      var hasLineBreak = false;
      var hasFoldableLine = false;
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1;
      var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));
      if (singleLineOnly) {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
      } else {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
              i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
      }
      if (!hasLineBreak && !hasFoldableLine) {
        return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
      }
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
      }
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    function writeScalar(state, string, level, iskey) {
      state.dump = function() {
        if (string.length === 0) {
          return "''";
        }
        if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
          return "'" + string + "'";
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string2) {
          return testImplicitResolving(state, string2);
        }
        switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
          case STYLE_PLAIN:
            return string;
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
          case STYLE_FOLDED:
            return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string, lineWidth) + '"';
          default:
            throw new YAMLException("impossible error: invalid scalar style");
        }
      }();
    }
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
      var clip = string[string.length - 1] === "\n";
      var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
      var chomp = keep ? "+" : clip ? "" : "-";
      return indentIndicator + chomp + "\n";
    }
    function dropEndingNewline(string) {
      return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
    }
    function foldString(string, width) {
      var lineRe = /(\n+)([^\n]*)/g;
      var result = function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
      }();
      var prevMoreIndented = string[0] === "\n" || string[0] === " ";
      var moreIndented;
      var match;
      while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    function foldLine(line, width) {
      if (line === "" || line[0] === " ")
        return line;
      var breakRe = / [^ ]/g;
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          end = curr > start ? curr : next;
          result += "\n" + line.slice(start, end);
          start = end + 1;
        }
        curr = next;
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1);
    }
    function escapeString(string) {
      var result = "";
      var char, nextChar;
      var escapeSeq;
      for (var i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        if (char >= 55296 && char <= 56319) {
          nextChar = string.charCodeAt(i + 1);
          if (nextChar >= 56320 && nextChar <= 57343) {
            result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
            i++;
            continue;
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
      }
      return result;
    }
    function writeFlowSequence(state, level, object) {
      var _result = "", _tag = state.tag, index, length;
      for (index = 0, length = object.length; index < length; index += 1) {
        if (writeNode(state, level, object[index], false, false)) {
          if (index !== 0)
            _result += "," + (!state.condenseFlow ? " " : "");
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = "[" + _result + "]";
    }
    function writeBlockSequence(state, level, object, compact) {
      var _result = "", _tag = state.tag, index, length;
      for (index = 0, length = object.length; index < length; index += 1) {
        if (writeNode(state, level + 1, object[index], true, true)) {
          if (!compact || index !== 0) {
            _result += generateNextLine(state, level);
          }
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += "-";
          } else {
            _result += "- ";
          }
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = _result || "[]";
    }
    function writeFlowMapping(state, level, object) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (index !== 0)
          pairBuffer += ", ";
        if (state.condenseFlow)
          pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level, objectKey, false, false)) {
          continue;
        }
        if (state.dump.length > 1024)
          pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
          continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = "{" + _result + "}";
    }
    function writeBlockMapping(state, level, object, compact) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state.sortKeys === true) {
        objectKeyList.sort();
      } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        throw new YAMLException("sortKeys must be a boolean or a function");
      }
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (!compact || index !== 0) {
          pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += "?";
          } else {
            pairBuffer += "? ";
          }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
          pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue;
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ":";
        } else {
          pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = _result || "{}";
    }
    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style;
      typeList = explicit ? state.explicitTypes : state.implicitTypes;
      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
          state.tag = explicit ? type.tag : "?";
          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
            }
            state.dump = _result;
          }
          return true;
        }
      }
      return false;
    }
    function writeNode(state, level, object, block, compact, iskey) {
      state.tag = null;
      state.dump = object;
      if (!detectType(state, object, false)) {
        detectType(state, object, true);
      }
      var type = _toString.call(state.dump);
      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }
      if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
      }
      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
          if (block && Object.keys(state.dump).length !== 0) {
            writeBlockMapping(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowMapping(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object Array]") {
          var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
          if (block && state.dump.length !== 0) {
            writeBlockSequence(state, arrayLevel, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowSequence(state, arrayLevel, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object String]") {
          if (state.tag !== "?") {
            writeScalar(state, state.dump, level, iskey);
          }
        } else {
          if (state.skipInvalid)
            return false;
          throw new YAMLException("unacceptable kind of an object to dump " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
          state.dump = "!<" + state.tag + "> " + state.dump;
        }
      }
      return true;
    }
    function getDuplicateReferences(object, state) {
      var objects = [], duplicatesIndexes = [], index, length;
      inspectNode(object, objects, duplicatesIndexes);
      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state.usedDuplicates = new Array(length);
    }
    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList, index, length;
      if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object);
          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              inspectNode(object[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }
    function dump(input, options2) {
      options2 = options2 || {};
      var state = new State(options2);
      if (!state.noRefs)
        getDuplicateReferences(input, state);
      if (writeNode(state, 0, input, true, true))
        return state.dump + "\n";
      return "";
    }
    function safeDump(input, options2) {
      return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.dump = dump;
    module2.exports.safeDump = safeDump;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js
var require_js_yaml = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js"(exports2, module2) {
    "use strict";
    var loader = require_loader();
    var dumper = require_dumper();
    function deprecated(name) {
      return function() {
        throw new Error("Function " + name + " is deprecated and cannot be used.");
      };
    }
    module2.exports.Type = require_type();
    module2.exports.Schema = require_schema();
    module2.exports.FAILSAFE_SCHEMA = require_failsafe();
    module2.exports.JSON_SCHEMA = require_json();
    module2.exports.CORE_SCHEMA = require_core();
    module2.exports.DEFAULT_SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_FULL_SCHEMA = require_default_full();
    module2.exports.load = loader.load;
    module2.exports.loadAll = loader.loadAll;
    module2.exports.safeLoad = loader.safeLoad;
    module2.exports.safeLoadAll = loader.safeLoadAll;
    module2.exports.dump = dumper.dump;
    module2.exports.safeDump = dumper.safeDump;
    module2.exports.YAMLException = require_exception();
    module2.exports.MINIMAL_SCHEMA = require_failsafe();
    module2.exports.SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_SCHEMA = require_default_full();
    module2.exports.scan = deprecated("scan");
    module2.exports.parse = deprecated("parse");
    module2.exports.compose = deprecated("compose");
    module2.exports.addConstructor = deprecated("addConstructor");
  }
});

// node_modules/gray-matter/node_modules/js-yaml/index.js
var require_js_yaml2 = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/index.js"(exports2, module2) {
    "use strict";
    var yaml2 = require_js_yaml();
    module2.exports = yaml2;
  }
});

// node_modules/gray-matter/lib/engines.js
var require_engines = __commonJS({
  "node_modules/gray-matter/lib/engines.js"(exports, module) {
    "use strict";
    var yaml = require_js_yaml2();
    var engines = exports = module.exports;
    engines.yaml = {
      parse: yaml.safeLoad.bind(yaml),
      stringify: yaml.safeDump.bind(yaml)
    };
    engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function(obj, options2) {
        const opts = Object.assign({ replacer: null, space: 2 }, options2);
        return JSON.stringify(obj, opts.replacer, opts.space);
      }
    };
    engines.javascript = {
      parse: function parse(str, options, wrap) {
        try {
          if (wrap !== false) {
            str = "(function() {\nreturn " + str.trim() + ";\n}());";
          }
          return eval(str) || {};
        } catch (err) {
          if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
            return parse(str, options, false);
          }
          throw new SyntaxError(err);
        }
      },
      stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
      }
    };
  }
});

// node_modules/strip-bom-string/index.js
var require_strip_bom_string = __commonJS({
  "node_modules/strip-bom-string/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(str2) {
      if (typeof str2 === "string" && str2.charAt(0) === "\uFEFF") {
        return str2.slice(1);
      }
      return str2;
    };
  }
});

// node_modules/gray-matter/lib/utils.js
var require_utils = __commonJS({
  "node_modules/gray-matter/lib/utils.js"(exports2) {
    "use strict";
    var stripBom = require_strip_bom_string();
    var typeOf = require_kind_of();
    exports2.define = function(obj, key, val) {
      Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
      });
    };
    exports2.isBuffer = function(val) {
      return typeOf(val) === "buffer";
    };
    exports2.isObject = function(val) {
      return typeOf(val) === "object";
    };
    exports2.toBuffer = function(input) {
      return typeof input === "string" ? Buffer.from(input) : input;
    };
    exports2.toString = function(input) {
      if (exports2.isBuffer(input))
        return stripBom(String(input));
      if (typeof input !== "string") {
        throw new TypeError("expected input to be a string or buffer");
      }
      return stripBom(input);
    };
    exports2.arrayify = function(val) {
      return val ? Array.isArray(val) ? val : [val] : [];
    };
    exports2.startsWith = function(str2, substr, len) {
      if (typeof len !== "number")
        len = substr.length;
      return str2.slice(0, len) === substr;
    };
  }
});

// node_modules/gray-matter/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/gray-matter/lib/defaults.js"(exports2, module2) {
    "use strict";
    var engines2 = require_engines();
    var utils = require_utils();
    module2.exports = function(options2) {
      const opts = Object.assign({}, options2);
      opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || "---");
      if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0]);
      }
      opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
      opts.engines = Object.assign({}, engines2, opts.parsers, opts.engines);
      return opts;
    };
  }
});

// node_modules/gray-matter/lib/engine.js
var require_engine = __commonJS({
  "node_modules/gray-matter/lib/engine.js"(exports2, module2) {
    "use strict";
    module2.exports = function(name, options2) {
      let engine = options2.engines[name] || options2.engines[aliase(name)];
      if (typeof engine === "undefined") {
        throw new Error('gray-matter engine "' + name + '" is not registered');
      }
      if (typeof engine === "function") {
        engine = { parse: engine };
      }
      return engine;
    };
    function aliase(name) {
      switch (name.toLowerCase()) {
        case "js":
        case "javascript":
          return "javascript";
        case "coffee":
        case "coffeescript":
        case "cson":
          return "coffee";
        case "yaml":
        case "yml":
          return "yaml";
        default: {
          return name;
        }
      }
    }
  }
});

// node_modules/gray-matter/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/gray-matter/lib/stringify.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(file, data, options2) {
      if (data == null && options2 == null) {
        switch (typeOf(file)) {
          case "object":
            data = file.data;
            options2 = {};
            break;
          case "string":
            return file;
          default: {
            throw new TypeError("expected file to be a string or object");
          }
        }
      }
      const str2 = file.content;
      const opts = defaults(options2);
      if (data == null) {
        if (!opts.data)
          return file;
        data = opts.data;
      }
      const language = file.language || opts.language;
      const engine = getEngine(language, opts);
      if (typeof engine.stringify !== "function") {
        throw new TypeError('expected "' + language + '.stringify" to be a function');
      }
      data = Object.assign({}, file.data, data);
      const open = opts.delimiters[0];
      const close = opts.delimiters[1];
      const matter2 = engine.stringify(data, options2).trim();
      let buf = "";
      if (matter2 !== "{}") {
        buf = newline(open) + newline(matter2) + newline(close);
      }
      if (typeof file.excerpt === "string" && file.excerpt !== "") {
        if (str2.indexOf(file.excerpt.trim()) === -1) {
          buf += newline(file.excerpt) + newline(close);
        }
      }
      return buf + newline(str2);
    };
    function newline(str2) {
      return str2.slice(-1) !== "\n" ? str2 + "\n" : str2;
    }
  }
});

// node_modules/gray-matter/lib/excerpt.js
var require_excerpt = __commonJS({
  "node_modules/gray-matter/lib/excerpt.js"(exports2, module2) {
    "use strict";
    var defaults = require_defaults();
    module2.exports = function(file, options2) {
      const opts = defaults(options2);
      if (file.data == null) {
        file.data = {};
      }
      if (typeof opts.excerpt === "function") {
        return opts.excerpt(file, opts);
      }
      const sep = file.data.excerpt_separator || opts.excerpt_separator;
      if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file;
      }
      const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
      const idx = file.content.indexOf(delimiter);
      if (idx !== -1) {
        file.excerpt = file.content.slice(0, idx);
      }
      return file;
    };
  }
});

// node_modules/gray-matter/lib/to-file.js
var require_to_file = __commonJS({
  "node_modules/gray-matter/lib/to-file.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var stringify = require_stringify();
    var utils = require_utils();
    module2.exports = function(file) {
      if (typeOf(file) !== "object") {
        file = { content: file };
      }
      if (typeOf(file.data) !== "object") {
        file.data = {};
      }
      if (file.contents && file.content == null) {
        file.content = file.contents;
      }
      utils.define(file, "orig", utils.toBuffer(file.content));
      utils.define(file, "language", file.language || "");
      utils.define(file, "matter", file.matter || "");
      utils.define(file, "stringify", function(data, options2) {
        if (options2 && options2.language) {
          file.language = options2.language;
        }
        return stringify(file, data, options2);
      });
      file.content = utils.toString(file.content);
      file.isEmpty = false;
      file.excerpt = "";
      return file;
    };
  }
});

// node_modules/gray-matter/lib/parse.js
var require_parse = __commonJS({
  "node_modules/gray-matter/lib/parse.js"(exports2, module2) {
    "use strict";
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(language, str2, options2) {
      const opts = defaults(options2);
      const engine = getEngine(language, opts);
      if (typeof engine.parse !== "function") {
        throw new TypeError('expected "' + language + '.parse" to be a function');
      }
      return engine.parse(str2, opts);
    };
  }
});

// node_modules/gray-matter/index.js
var require_gray_matter = __commonJS({
  "node_modules/gray-matter/index.js"(exports2, module2) {
    "use strict";
    var fs = require_fs();
    var sections = require_section_matter();
    var defaults = require_defaults();
    var stringify = require_stringify();
    var excerpt = require_excerpt();
    var engines2 = require_engines();
    var toFile = require_to_file();
    var parse2 = require_parse();
    var utils = require_utils();
    function matter2(input, options2) {
      if (input === "") {
        return { data: {}, content: input, excerpt: "", orig: input };
      }
      let file = toFile(input);
      const cached = matter2.cache[file.content];
      if (!options2) {
        if (cached) {
          file = Object.assign({}, cached);
          file.orig = cached.orig;
          return file;
        }
        matter2.cache[file.content] = file;
      }
      return parseMatter(file, options2);
    }
    function parseMatter(file, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      const close = "\n" + opts.delimiters[1];
      let str2 = file.content;
      if (opts.language) {
        file.language = opts.language;
      }
      const openLen = open.length;
      if (!utils.startsWith(str2, open, openLen)) {
        excerpt(file, opts);
        return file;
      }
      if (str2.charAt(openLen) === open.slice(-1)) {
        return file;
      }
      str2 = str2.slice(openLen);
      const len = str2.length;
      const language = matter2.language(str2, opts);
      if (language.name) {
        file.language = language.name;
        str2 = str2.slice(language.raw.length);
      }
      let closeIndex = str2.indexOf(close);
      if (closeIndex === -1) {
        closeIndex = len;
      }
      file.matter = str2.slice(0, closeIndex);
      const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
      if (block === "") {
        file.isEmpty = true;
        file.empty = file.content;
        file.data = {};
      } else {
        file.data = parse2(file.language, file.matter, opts);
      }
      if (closeIndex === len) {
        file.content = "";
      } else {
        file.content = str2.slice(closeIndex + close.length);
        if (file.content[0] === "\r") {
          file.content = file.content.slice(1);
        }
        if (file.content[0] === "\n") {
          file.content = file.content.slice(1);
        }
      }
      excerpt(file, opts);
      if (opts.sections === true || typeof opts.section === "function") {
        sections(file, opts.section);
      }
      return file;
    }
    matter2.engines = engines2;
    matter2.stringify = function(file, data, options2) {
      if (typeof file === "string")
        file = matter2(file, options2);
      return stringify(file, data, options2);
    };
    matter2.read = function(filepath, options2) {
      const str2 = fs.readFileSync(filepath, "utf8");
      const file = matter2(str2, options2);
      file.path = filepath;
      return file;
    };
    matter2.test = function(str2, options2) {
      return utils.startsWith(str2, defaults(options2).delimiters[0]);
    };
    matter2.language = function(str2, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      if (matter2.test(str2)) {
        str2 = str2.slice(open.length);
      }
      const language = str2.slice(0, str2.search(/\r?\n/));
      return {
        raw: language,
        name: language ? language.trim() : ""
      };
    };
    matter2.cache = {};
    matter2.clearCache = function() {
      matter2.cache = {};
    };
    module2.exports = matter2;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CloudflareSyncPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");
var import_gray_matter = __toESM(require_gray_matter());

// src/settings.ts
var import_obsidian = require("obsidian");
var CloudflareSyncSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Cloudflare Sync" });
    containerEl.createEl("h3", { text: "Connection" });
    new import_obsidian.Setting(containerEl).setName("Server URL").setDesc("Your Cloudflare Workers URL (e.g., https://mysite.your-account.workers.dev)").addText(
      (text) => text.setPlaceholder("https://mysite.your-account.workers.dev").setValue(this.plugin.settings.serverUrl).onChange(async (value) => {
        this.plugin.settings.serverUrl = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("API Token").setDesc("Your API token for authentication").addText((text) => {
      text.inputEl.type = "password";
      return text.setPlaceholder("Enter your API token").setValue(this.plugin.settings.apiToken).onChange(async (value) => {
        this.plugin.settings.apiToken = value;
        await this.plugin.saveSettings();
      });
    });
    containerEl.createEl("h3", { text: "Sync Settings" });
    new import_obsidian.Setting(containerEl).setName("Auto Sync").setDesc("Automatically sync files when they are modified (with debounce)").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoSync).onChange(async (value) => {
        this.plugin.settings.autoSync = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Auto Sync Interval").setDesc("How often to run a full sync (in minutes). Set to 0 to disable periodic sync.").addSlider(
      (slider) => slider.setLimits(0, 60, 1).setValue(this.plugin.settings.autoSyncInterval).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.autoSyncInterval = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Debounce Delay").setDesc("Seconds to wait after a file change before syncing (prevents excessive uploads while typing)").addSlider(
      (slider) => slider.setLimits(5, 120, 5).setValue(this.plugin.settings.debounceDelay).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.debounceDelay = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Sync on Startup").setDesc("Automatically run a full sync when Obsidian starts").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.syncOnStartup).onChange(async (value) => {
        this.plugin.settings.syncOnStartup = value;
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Conflict Resolution" });
    new import_obsidian.Setting(containerEl).setName("Conflict Strategy").setDesc("How to handle conflicts when both local and remote have changed").addDropdown(
      (dropdown) => dropdown.addOption("ask", "Ask me every time").addOption("local-wins", "Local always wins").addOption("remote-wins", "Remote always wins").setValue(this.plugin.settings.conflictStrategy).onChange(async (value) => {
        this.plugin.settings.conflictStrategy = value;
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Content Settings" });
    new import_obsidian.Setting(containerEl).setName("Auto Frontmatter").setDesc("Automatically generate frontmatter for new markdown files").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoFrontmatter).onChange(async (value) => {
        this.plugin.settings.autoFrontmatter = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Sync All Files").setDesc("Sync all files in the vault (not just markdown)").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.syncAllFiles).onChange(async (value) => {
        this.plugin.settings.syncAllFiles = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Exclude Folders").setDesc("Comma-separated list of folders to exclude from sync").addText(
      (text) => text.setPlaceholder("_templates, .trash").setValue((this.plugin.settings.excludeFolders || []).join(", ")).onChange(async (value) => {
        this.plugin.settings.excludeFolders = value.split(",").map((s) => s.trim()).filter(Boolean);
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Instructions" });
    const instructions = containerEl.createEl("div", { cls: "markdown-preview-view" });
    instructions.innerHTML = `
      <h4>Server Setup:</h4>
      <ol>
        <li>Deploy the Cloudflare Workers site</li>
        <li>Set <code>API_TOKEN</code> secret: <code>npx wrangler secret put API_TOKEN</code></li>
        <li>Copy the Workers URL and token to settings above</li>
      </ol>
      <h4>Sync Behavior:</h4>
      <ul>
        <li><strong>Auto Sync</strong> \u2014 Files sync after a debounce delay when modified</li>
        <li><strong>Periodic Sync</strong> \u2014 Full sync runs at the configured interval</li>
        <li><strong>Startup Sync</strong> \u2014 Full sync on Obsidian launch</li>
        <li><strong>Conflict Detection</strong> \u2014 Three-way hash comparison detects conflicts</li>
      </ul>
      <h4>Frontmatter fields:</h4>
      <ul>
        <li><code>title</code> - Post title</li>
        <li><code>slug</code> - URL-friendly identifier</li>
        <li><code>date</code> - Publication date (ISO format)</li>
        <li><code>summary</code> - Post summary/excerpt</li>
        <li><code>tags</code> - Array or comma-separated tags</li>
        <li><code>publish</code> - Whether to make public (default: false)</li>
        <li><code>coverImage</code> - Cover image filename</li>
      </ul>
      <h4>Commands:</h4>
      <ul>
        <li><strong>Full Sync</strong> \u2014 Bidirectional sync with conflict detection</li>
        <li><strong>Sync to Cloudflare</strong> \u2014 Upload all notes (one-way)</li>
        <li><strong>Download from Cloudflare</strong> \u2014 Download all notes (one-way)</li>
        <li><strong>Sync current file</strong> \u2014 Upload current file</li>
        <li><strong>Resolve conflicts</strong> \u2014 Open conflict resolution dialog</li>
        <li><strong>Show sync status</strong> \u2014 View sync statistics</li>
      </ul>
    `;
  }
};

// src/sync-engine.ts
var import_obsidian2 = require("obsidian");
var SyncEngine = class {
  constructor(plugin) {
    this.syncStates = {};
    this.autoSyncTimer = null;
    this.debounceTimers = /* @__PURE__ */ new Map();
    this._stats = {
      lastSyncTime: null,
      totalFiles: 0,
      syncedFiles: 0,
      pendingUpload: 0,
      pendingDownload: 0,
      conflicts: 0,
      errors: 0,
      isSyncing: false
    };
    this._conflicts = [];
    this._isSyncing = false;
    // Callbacks
    this.onStatsChanged = null;
    this.onConflictsFound = null;
    this.onSyncError = null;
    this.onSyncComplete = null;
    this.plugin = plugin;
  }
  get stats() {
    return { ...this._stats };
  }
  get conflicts() {
    return [...this._conflicts];
  }
  get isSyncing() {
    return this._isSyncing;
  }
  // ========== State Persistence ==========
  async loadSyncState() {
    const data = await this.plugin.loadData();
    this.syncStates = (data == null ? void 0 : data._syncStates) || {};
  }
  async saveSyncState() {
    const data = await this.plugin.loadData() || {};
    data._syncStates = this.syncStates;
    await this.plugin.saveData(data);
  }
  // ========== Hash Computation ==========
  async computeLocalHash(content) {
    const data = typeof content === "string" ? new TextEncoder().encode(content) : new Uint8Array(content);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  // ========== Auto Sync Scheduling ==========
  startAutoSync() {
    this.stopAutoSync();
    const intervalMs = (this.plugin.settings.autoSyncInterval || 5) * 60 * 1e3;
    console.log(`[SyncEngine] Auto sync started, interval: ${intervalMs / 1e3}s`);
    this.autoSyncTimer = setInterval(() => {
      if (!this._isSyncing) {
        console.log("[SyncEngine] Auto sync triggered");
        this.fullSync().catch((err) => {
          console.error("[SyncEngine] Auto sync failed:", err);
        });
      }
    }, intervalMs);
  }
  stopAutoSync() {
    if (this.autoSyncTimer) {
      clearInterval(this.autoSyncTimer);
      this.autoSyncTimer = null;
      console.log("[SyncEngine] Auto sync stopped");
    }
  }
  // ========== Debounced File Sync ==========
  scheduleFileSync(file) {
    const existingTimer = this.debounceTimers.get(file.path);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }
    const delayMs = (this.plugin.settings.debounceDelay || 30) * 1e3;
    const timer = setTimeout(async () => {
      this.debounceTimers.delete(file.path);
      try {
        await this.syncSingleFile(file);
      } catch (err) {
        console.error(`[SyncEngine] Debounced sync failed for ${file.path}:`, err.message);
      }
    }, delayMs);
    this.debounceTimers.set(file.path, timer);
    this.updatePendingStats();
  }
  // ========== Core Sync Logic ==========
  async fullSync() {
    var _a, _b, _c;
    if (this._isSyncing) {
      console.log("[SyncEngine] Sync already in progress, skipping");
      return;
    }
    this._isSyncing = true;
    this._stats.isSyncing = true;
    this._conflicts = [];
    this.emitStatsChanged();
    try {
      console.log("[SyncEngine] Starting full sync...");
      const localFiles = this.plugin.app.vault.getFiles().filter(
        (f) => this.plugin.shouldSyncFile(f.path)
      );
      const localFileMap = /* @__PURE__ */ new Map();
      for (const file of localFiles) {
        const remoteKey = this.plugin.getRemoteKey(file);
        const isMarkdown = file.path.endsWith(".md");
        const content = isMarkdown ? await this.plugin.app.vault.read(file) : await this.plugin.app.vault.readBinary(file);
        const hash = await this.computeLocalHash(content);
        localFileMap.set(remoteKey, { file, hash });
      }
      const remoteMetas = await this.fetchRemoteMetas("");
      const remoteMetaMap = /* @__PURE__ */ new Map();
      for (const meta of remoteMetas) {
        remoteMetaMap.set(meta.key, meta);
      }
      const allKeys = /* @__PURE__ */ new Set([...localFileMap.keys(), ...remoteMetaMap.keys()]);
      const toUpload = [];
      const toDownload = [];
      const conflicts = [];
      let syncedCount = 0;
      for (const key of allKeys) {
        const local = localFileMap.get(key);
        const remote = remoteMetaMap.get(key);
        const localPath = key;
        const savedState = this.syncStates[localPath];
        const localHash = (local == null ? void 0 : local.hash) || null;
        const remoteHash = (remote == null ? void 0 : remote.contentHash) || null;
        const lastSyncedHash = (savedState == null ? void 0 : savedState.lastSyncedHash) || null;
        if (localHash && !remoteHash) {
          if (lastSyncedHash) {
            toUpload.push({ file: local.file, key, hash: localHash });
          } else {
            toUpload.push({ file: local.file, key, hash: localHash });
          }
        } else if (!localHash && remoteHash) {
          if (lastSyncedHash) {
            toDownload.push({ key });
          } else {
            toDownload.push({ key });
          }
        } else if (localHash && remoteHash) {
          if (localHash === remoteHash) {
            syncedCount++;
            this.syncStates[localPath] = {
              remoteKey: key,
              lastSyncedHash: localHash,
              lastSyncedTime: Date.now()
            };
          } else if (!lastSyncedHash) {
            conflicts.push(await this.buildConflictInfo(local.file, key, localHash, remoteHash));
          } else if (localHash !== lastSyncedHash && remoteHash === lastSyncedHash) {
            toUpload.push({ file: local.file, key, hash: localHash });
          } else if (localHash === lastSyncedHash && remoteHash !== lastSyncedHash) {
            toDownload.push({ key });
          } else {
            conflicts.push(await this.buildConflictInfo(local.file, key, localHash, remoteHash));
          }
        }
      }
      console.log(
        `[SyncEngine] Analysis: ${toUpload.length} upload, ${toDownload.length} download, ${conflicts.length} conflicts, ${syncedCount} synced`
      );
      for (const item of toUpload) {
        try {
          await this.plugin.syncFileToRemote(item.file);
          const localPath = item.key;
          this.syncStates[localPath] = {
            remoteKey: item.key,
            lastSyncedHash: item.hash,
            lastSyncedTime: Date.now()
          };
          syncedCount++;
        } catch (err) {
          console.error(`[SyncEngine] Upload failed for ${item.key}:`, err.message);
          this._stats.errors++;
        }
      }
      for (const item of toDownload) {
        try {
          const data = await this.downloadAndSave(item.key);
          if (data) {
            const localPath = item.key;
            this.syncStates[localPath] = {
              remoteKey: item.key,
              lastSyncedHash: data.contentHash || "",
              lastSyncedTime: Date.now()
            };
            syncedCount++;
          }
        } catch (err) {
          console.error(`[SyncEngine] Download failed for ${item.key}:`, err.message);
          this._stats.errors++;
        }
      }
      this._conflicts = conflicts;
      const strategy = this.plugin.settings.conflictStrategy || "ask";
      if (conflicts.length > 0) {
        if (strategy === "ask") {
          (_a = this.onConflictsFound) == null ? void 0 : _a.call(this, conflicts);
        } else {
          for (const conflict of conflicts) {
            await this.resolveConflict(
              conflict,
              strategy === "local-wins" ? "local" : "remote"
            );
          }
          this._conflicts = [];
        }
      }
      this._stats = {
        lastSyncTime: Date.now(),
        totalFiles: allKeys.size,
        syncedFiles: syncedCount,
        pendingUpload: 0,
        pendingDownload: 0,
        conflicts: this._conflicts.length,
        errors: this._stats.errors,
        isSyncing: false
      };
      await this.saveSyncState();
      (_b = this.onSyncComplete) == null ? void 0 : _b.call(this);
    } catch (err) {
      console.error("[SyncEngine] Full sync failed:", err);
      this._stats.errors++;
      this._stats.isSyncing = false;
      (_c = this.onSyncError) == null ? void 0 : _c.call(this, err.message);
    } finally {
      this._isSyncing = false;
      this._stats.isSyncing = false;
      this.emitStatsChanged();
    }
  }
  async syncSingleFile(file) {
    var _a;
    if (this._isSyncing)
      return;
    try {
      const remoteKey = this.plugin.getRemoteKey(file);
      const localPath = file.path;
      const isMarkdown = file.path.endsWith(".md");
      const content = isMarkdown ? await this.plugin.app.vault.read(file) : await this.plugin.app.vault.readBinary(file);
      const localHash = await this.computeLocalHash(content);
      let remoteHash = null;
      try {
        const meta = await this.plugin.api(
          `/api/sync/meta/${remoteKey}`
        );
        remoteHash = meta.data.contentHash || null;
      } catch (e) {
      }
      const savedState = this.syncStates[localPath];
      const lastSyncedHash = (savedState == null ? void 0 : savedState.lastSyncedHash) || null;
      if (localHash === remoteHash) {
        this.syncStates[localPath] = {
          remoteKey,
          lastSyncedHash: localHash,
          lastSyncedTime: Date.now()
        };
      } else if (!remoteHash || localHash !== lastSyncedHash && remoteHash === lastSyncedHash) {
        await this.plugin.syncFileToRemote(file);
        this.syncStates[localPath] = {
          remoteKey,
          lastSyncedHash: localHash,
          lastSyncedTime: Date.now()
        };
      } else if (localHash === lastSyncedHash && remoteHash !== lastSyncedHash) {
        const data = await this.downloadAndSave(remoteKey);
        if (data) {
          this.syncStates[localPath] = {
            remoteKey,
            lastSyncedHash: data.contentHash || remoteHash,
            lastSyncedTime: Date.now()
          };
        }
      } else {
        const conflict = await this.buildConflictInfo(file, remoteKey, localHash, remoteHash);
        this._conflicts.push(conflict);
        this._stats.conflicts = this._conflicts.length;
        (_a = this.onConflictsFound) == null ? void 0 : _a.call(this, [conflict]);
      }
      await this.saveSyncState();
      this.updatePendingStats();
    } catch (err) {
      console.error(`[SyncEngine] Single file sync failed for ${file.path}:`, err.message);
      this._stats.errors++;
      this.emitStatsChanged();
    }
  }
  // ========== Conflict Resolution ==========
  async resolveConflict(conflict, resolution) {
    const localPath = conflict.localPath;
    const file = this.plugin.app.vault.getAbstractFileByPath(localPath);
    try {
      switch (resolution) {
        case "local": {
          if (file instanceof import_obsidian2.TFile) {
            await this.plugin.syncFileToRemote(file);
            const content = await this.plugin.app.vault.read(file);
            const hash = await this.computeLocalHash(content);
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: hash,
              lastSyncedTime: Date.now()
            };
          }
          break;
        }
        case "remote": {
          const data = await this.downloadAndSave(conflict.remoteKey);
          if (data) {
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: data.contentHash || conflict.remoteHash,
              lastSyncedTime: Date.now()
            };
          }
          break;
        }
        case "both": {
          const conflictPath = localPath.replace(/\.md$/, `.conflict-${Date.now()}.md`);
          await this.plugin.app.vault.create(conflictPath, conflict.remoteContent);
          if (file instanceof import_obsidian2.TFile) {
            await this.plugin.syncFileToRemote(file);
            const content = await this.plugin.app.vault.read(file);
            const hash = await this.computeLocalHash(content);
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: hash,
              lastSyncedTime: Date.now()
            };
          }
          break;
        }
      }
      this._conflicts = this._conflicts.filter((c) => c.localPath !== localPath);
      this._stats.conflicts = this._conflicts.length;
      await this.saveSyncState();
      this.emitStatsChanged();
    } catch (err) {
      console.error(`[SyncEngine] Conflict resolution failed for ${localPath}:`, err.message);
      this._stats.errors++;
      this.emitStatsChanged();
    }
  }
  async resolveAllConflicts(resolution) {
    const conflictsToResolve = [...this._conflicts];
    for (const conflict of conflictsToResolve) {
      await this.resolveConflict(conflict, resolution);
    }
  }
  // ========== Helpers ==========
  async fetchRemoteMetas(prefix) {
    try {
      const res = await this.plugin.api("/api/sync/batch-meta", {
        method: "POST",
        body: JSON.stringify({ prefix })
      });
      return res.data.files;
    } catch (err) {
      console.error("[SyncEngine] Failed to fetch remote metas:", err.message);
      return [];
    }
  }
  async downloadAndSave(remoteKey) {
    try {
      const res = await this.plugin.api(`/api/sync/download/${remoteKey}`);
      const data = res.data;
      const localPath = data.key;
      const isMarkdown = localPath.endsWith(".md");
      const existingFile = this.plugin.app.vault.getAbstractFileByPath(localPath);
      if (existingFile instanceof import_obsidian2.TFile) {
        if (isMarkdown || data.encoding === "utf-8") {
          await this.plugin.app.vault.modify(existingFile, data.content);
        } else {
          const buffer = this.plugin.base64ToArrayBuffer(data.content);
          await this.plugin.app.vault.modifyBinary(existingFile, buffer);
        }
        console.log(`[SyncEngine] Updated ${localPath}`);
      } else {
        const folderPath = localPath.substring(0, localPath.lastIndexOf("/"));
        if (folderPath) {
          await this.plugin.app.vault.createFolder(folderPath).catch(() => {
          });
        }
        if (isMarkdown || data.encoding === "utf-8") {
          await this.plugin.app.vault.create(localPath, data.content);
        } else {
          const buffer = this.plugin.base64ToArrayBuffer(data.content);
          await this.plugin.app.vault.createBinary(localPath, buffer);
        }
        console.log(`[SyncEngine] Created ${localPath}`);
      }
      return { contentHash: data.contentHash };
    } catch (err) {
      console.error(`[SyncEngine] Download failed for ${remoteKey}:`, err.message);
      return null;
    }
  }
  async buildConflictInfo(file, remoteKey, localHash, remoteHash) {
    const localContent = await this.plugin.app.vault.read(file);
    let remoteContent = "";
    try {
      const res = await this.plugin.api(`/api/sync/download/${remoteKey}`);
      remoteContent = res.data.content;
    } catch (e) {
      remoteContent = "(Failed to fetch remote content)";
    }
    return {
      localPath: file.path,
      remoteKey,
      localContent,
      remoteContent,
      localHash,
      remoteHash
    };
  }
  updatePendingStats() {
    this._stats.pendingUpload = this.debounceTimers.size;
    this.emitStatsChanged();
  }
  emitStatsChanged() {
    var _a;
    (_a = this.onStatsChanged) == null ? void 0 : _a.call(this, this.stats);
  }
  // ========== Cleanup ==========
  destroy() {
    this.stopAutoSync();
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();
  }
};

// src/status-bar.ts
var import_obsidian3 = require("obsidian");
var SyncStatusBar = class {
  constructor(plugin, opts) {
    this._stats = null;
    this._conflicts = [];
    this.onShowConflicts = null;
    this.onTriggerSync = null;
    this.plugin = plugin;
    this.onShowConflicts = opts.onShowConflicts || null;
    this.onTriggerSync = opts.onTriggerSync || null;
    this.statusBarEl = plugin.addStatusBarItem();
    this.statusBarEl.addClass("cf-sync-status");
    this.statusBarEl.setAttribute("aria-label", "Cloudflare Sync Status");
    this.iconEl = this.statusBarEl.createEl("span", { cls: "cf-status-icon" });
    this.textEl = this.statusBarEl.createEl("span", { cls: "cf-status-text" });
    this.statusBarEl.addEventListener("click", () => {
      this.showDetailModal();
    });
    this.addStyles();
    this.render();
  }
  updateStats(stats) {
    this._stats = stats;
    this.render();
  }
  updateConflicts(conflicts) {
    this._conflicts = conflicts;
    this.render();
  }
  render() {
    const stats = this._stats;
    if (!stats) {
      (0, import_obsidian3.setIcon)(this.iconEl, "cloud");
      this.textEl.textContent = "Not synced";
      this.statusBarEl.className = "cf-sync-status cf-status-idle";
      return;
    }
    if (stats.isSyncing) {
      (0, import_obsidian3.setIcon)(this.iconEl, "refresh-cw");
      this.textEl.textContent = "Syncing...";
      this.statusBarEl.className = "cf-sync-status cf-status-syncing";
      this.iconEl.addClass("cf-spin");
      return;
    }
    this.iconEl.removeClass("cf-spin");
    if (stats.conflicts > 0) {
      (0, import_obsidian3.setIcon)(this.iconEl, "alert-triangle");
      this.textEl.textContent = `${stats.conflicts} conflict${stats.conflicts > 1 ? "s" : ""}`;
      this.statusBarEl.className = "cf-sync-status cf-status-conflict";
      return;
    }
    if (stats.errors > 0) {
      (0, import_obsidian3.setIcon)(this.iconEl, "x-circle");
      this.textEl.textContent = `${stats.errors} error${stats.errors > 1 ? "s" : ""}`;
      this.statusBarEl.className = "cf-sync-status cf-status-error";
      return;
    }
    (0, import_obsidian3.setIcon)(this.iconEl, "check-circle");
    const timeAgo = stats.lastSyncTime ? this.formatTimeAgo(stats.lastSyncTime) : "never";
    const parts = [timeAgo];
    if (stats.pendingUpload > 0)
      parts.push(`${stats.pendingUpload} pending`);
    this.textEl.textContent = parts.join(" \xB7 ");
    this.statusBarEl.className = "cf-sync-status cf-status-synced";
  }
  formatTimeAgo(timestamp) {
    const diff = Date.now() - timestamp;
    const seconds = Math.floor(diff / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (seconds < 60)
      return "just now";
    if (minutes < 60)
      return `${minutes}m ago`;
    if (hours < 24)
      return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  }
  showDetailModal() {
    new SyncDetailModal(this.plugin.app, this._stats, this._conflicts, {
      onShowConflicts: this.onShowConflicts,
      onTriggerSync: this.onTriggerSync
    }).open();
  }
  addStyles() {
    if (document.querySelector("#cf-status-bar-styles"))
      return;
    const style = document.createElement("style");
    style.id = "cf-status-bar-styles";
    style.textContent = `
      .cf-sync-status {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        padding: 0 6px;
        border-radius: 4px;
        transition: background 0.15s ease;
        font-size: 0.85em;
      }
      .cf-sync-status:hover {
        background: var(--background-modifier-hover);
      }
      .cf-status-icon {
        display: flex;
        align-items: center;
        width: 14px;
        height: 14px;
      }
      .cf-status-icon svg {
        width: 14px;
        height: 14px;
      }
      .cf-status-text {
        white-space: nowrap;
      }
      .cf-status-idle .cf-status-icon { color: var(--text-muted); }
      .cf-status-syncing .cf-status-icon { color: var(--text-accent); }
      .cf-status-synced .cf-status-icon { color: var(--text-success, #4ade80); }
      .cf-status-conflict .cf-status-icon { color: var(--text-warning, #facc15); }
      .cf-status-error .cf-status-icon { color: var(--text-error, #f87171); }
      .cf-spin {
        animation: cf-spin 1s linear infinite;
      }
      @keyframes cf-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
  destroy() {
    this.statusBarEl.remove();
  }
};
var SyncDetailModal = class extends import_obsidian3.Modal {
  constructor(app, stats, conflicts, opts) {
    super(app);
    this.stats = stats;
    this.conflicts = conflicts;
    this.onShowConflicts = opts.onShowConflicts || null;
    this.onTriggerSync = opts.onTriggerSync || null;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("cf-sync-detail-modal");
    this.addStyles();
    const header = contentEl.createEl("div", { cls: "cf-detail-header" });
    const titleRow = header.createEl("div", { cls: "cf-detail-title-row" });
    const iconEl = titleRow.createEl("span", { cls: "cf-detail-icon" });
    (0, import_obsidian3.setIcon)(iconEl, "cloud");
    titleRow.createEl("h2", { text: "Sync Status", cls: "cf-detail-title" });
    const stats = this.stats;
    if (!stats) {
      contentEl.createEl("div", {
        cls: "cf-detail-empty",
        text: "No sync data available. Run a sync first."
      });
    } else {
      const grid = contentEl.createEl("div", { cls: "cf-detail-grid" });
      this.addStatCard(grid, "clock", "Last Sync", stats.lastSyncTime ? this.formatTime(stats.lastSyncTime) : "Never");
      this.addStatCard(grid, "files", "Total Files", String(stats.totalFiles));
      this.addStatCard(grid, "check-circle", "Synced", String(stats.syncedFiles));
      this.addStatCard(grid, "upload", "Pending \u2191", String(stats.pendingUpload));
      this.addStatCard(grid, "download", "Pending \u2193", String(stats.pendingDownload));
      this.addStatCard(grid, "alert-triangle", "Conflicts", String(stats.conflicts), stats.conflicts > 0 ? "cf-stat-warning" : "");
      this.addStatCard(grid, "x-circle", "Errors", String(stats.errors), stats.errors > 0 ? "cf-stat-error" : "");
      if (this.conflicts.length > 0) {
        const conflictSection = contentEl.createEl("div", {
          cls: "cf-detail-section"
        });
        conflictSection.createEl("h3", { text: "Conflicting Files" });
        const conflictList = conflictSection.createEl("ul", {
          cls: "cf-conflict-list"
        });
        for (const c of this.conflicts) {
          const li = conflictList.createEl("li", { cls: "cf-conflict-item" });
          const fileIcon = li.createEl("span", { cls: "cf-item-icon" });
          (0, import_obsidian3.setIcon)(fileIcon, "file-warning");
          li.createEl("span", { text: c.localPath, cls: "cf-item-path" });
        }
        if (this.onShowConflicts) {
          const resolveBtn = conflictSection.createEl("button", {
            cls: "cf-btn cf-btn-primary"
          });
          const btnIcon = resolveBtn.createEl("span", { cls: "cf-btn-icon" });
          (0, import_obsidian3.setIcon)(btnIcon, "alert-triangle");
          resolveBtn.createEl("span", { text: "Resolve Conflicts" });
          resolveBtn.addEventListener("click", () => {
            var _a;
            this.close();
            (_a = this.onShowConflicts) == null ? void 0 : _a.call(this);
          });
        }
      }
    }
    const actions = contentEl.createEl("div", { cls: "cf-detail-actions" });
    if (this.onTriggerSync) {
      const syncBtn = actions.createEl("button", { cls: "cf-btn cf-btn-primary" });
      const syncIcon = syncBtn.createEl("span", { cls: "cf-btn-icon" });
      (0, import_obsidian3.setIcon)(syncIcon, "refresh-cw");
      syncBtn.createEl("span", { text: "Sync Now" });
      syncBtn.addEventListener("click", () => {
        var _a;
        this.close();
        (_a = this.onTriggerSync) == null ? void 0 : _a.call(this);
      });
    }
    const closeBtn = actions.createEl("button", {
      cls: "cf-btn",
      text: "Close"
    });
    closeBtn.addEventListener("click", () => this.close());
  }
  onClose() {
    this.contentEl.empty();
  }
  addStatCard(container, icon, label, value, extraClass) {
    const card = container.createEl("div", {
      cls: `cf-stat-card ${extraClass || ""}`
    });
    const iconEl = card.createEl("div", { cls: "cf-stat-icon" });
    (0, import_obsidian3.setIcon)(iconEl, icon);
    card.createEl("div", { cls: "cf-stat-value", text: value });
    card.createEl("div", { cls: "cf-stat-label", text: label });
  }
  formatTime(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  addStyles() {
    if (document.querySelector("#cf-detail-modal-styles"))
      return;
    const style = document.createElement("style");
    style.id = "cf-detail-modal-styles";
    style.textContent = `
      .cf-sync-detail-modal {
        max-width: 600px;
      }
      .cf-detail-header {
        padding: 16px 20px 12px;
        border-bottom: 1px solid var(--background-modifier-border);
      }
      .cf-detail-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cf-detail-icon {
        color: var(--text-accent);
      }
      .cf-detail-title {
        margin: 0;
        font-size: 1.15em;
      }
      .cf-detail-empty {
        padding: 30px 20px;
        text-align: center;
        color: var(--text-muted);
      }
      .cf-detail-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
        padding: 16px 20px;
      }
      .cf-stat-card {
        background: var(--background-secondary);
        border-radius: 8px;
        padding: 12px;
        text-align: center;
        border: 1px solid var(--background-modifier-border);
      }
      .cf-stat-icon {
        display: flex;
        justify-content: center;
        margin-bottom: 4px;
        color: var(--text-muted);
      }
      .cf-stat-icon svg {
        width: 16px;
        height: 16px;
      }
      .cf-stat-value {
        font-size: 1.3em;
        font-weight: 700;
        line-height: 1.2;
      }
      .cf-stat-label {
        font-size: 0.75em;
        color: var(--text-muted);
        margin-top: 2px;
      }
      .cf-stat-warning .cf-stat-value {
        color: var(--text-warning, #facc15);
      }
      .cf-stat-warning .cf-stat-icon {
        color: var(--text-warning, #facc15);
      }
      .cf-stat-error .cf-stat-value {
        color: var(--text-error, #f87171);
      }
      .cf-stat-error .cf-stat-icon {
        color: var(--text-error, #f87171);
      }
      .cf-detail-section {
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
      }
      .cf-detail-section h3 {
        margin: 0 0 8px;
        font-size: 0.95em;
      }
      .cf-conflict-list {
        list-style: none;
        padding: 0;
        margin: 0 0 10px;
      }
      .cf-conflict-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 0;
        font-size: 0.85em;
      }
      .cf-item-icon {
        display: flex;
        color: var(--text-warning, #facc15);
      }
      .cf-item-icon svg {
        width: 14px;
        height: 14px;
      }
      .cf-item-path {
        font-family: var(--font-monospace);
      }
      .cf-detail-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
      }
      .cf-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        border: 1px solid var(--background-modifier-border);
        background: var(--background-secondary);
        color: var(--text-normal);
        transition: all 0.15s ease;
      }
      .cf-btn:hover {
        background: var(--background-modifier-hover);
      }
      .cf-btn-primary {
        background: var(--interactive-accent);
        color: var(--text-on-accent);
        border-color: var(--interactive-accent);
      }
      .cf-btn-primary:hover {
        opacity: 0.9;
        background: var(--interactive-accent-hover, var(--interactive-accent));
      }
      .cf-btn-icon {
        display: flex;
        align-items: center;
      }
    `;
    document.head.appendChild(style);
  }
};

// src/conflict-modal.ts
var import_obsidian4 = require("obsidian");
var ConflictModal = class extends import_obsidian4.Modal {
  constructor(app, conflicts, onResolve, onResolveAll) {
    super(app);
    this.currentIndex = 0;
    this.conflicts = conflicts;
    this.onResolve = onResolve;
    this.onResolveAll = onResolveAll;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("cf-sync-conflict-modal");
    this.renderCurrentConflict();
  }
  onClose() {
    this.contentEl.empty();
  }
  renderCurrentConflict() {
    const { contentEl } = this;
    contentEl.empty();
    if (this.conflicts.length === 0) {
      contentEl.createEl("div", {
        cls: "cf-conflict-empty",
        text: "\u2705 All conflicts resolved!"
      });
      setTimeout(() => this.close(), 1500);
      return;
    }
    const conflict = this.conflicts[this.currentIndex];
    if (!conflict) {
      this.close();
      return;
    }
    this.addStyles();
    const header = contentEl.createEl("div", { cls: "cf-conflict-header" });
    const titleRow = header.createEl("div", { cls: "cf-conflict-title-row" });
    const iconEl = titleRow.createEl("span", { cls: "cf-conflict-icon" });
    (0, import_obsidian4.setIcon)(iconEl, "alert-triangle");
    titleRow.createEl("h2", {
      text: "Sync Conflict",
      cls: "cf-conflict-title"
    });
    header.createEl("div", {
      cls: "cf-conflict-subtitle",
      text: `${this.currentIndex + 1} of ${this.conflicts.length} conflicts`
    });
    header.createEl("div", {
      cls: "cf-conflict-filepath",
      text: conflict.localPath
    });
    const diffContainer = contentEl.createEl("div", { cls: "cf-conflict-diff" });
    const localPanel = diffContainer.createEl("div", { cls: "cf-conflict-panel cf-local" });
    const localHeader = localPanel.createEl("div", { cls: "cf-panel-header" });
    const localIconEl = localHeader.createEl("span", { cls: "cf-panel-icon" });
    (0, import_obsidian4.setIcon)(localIconEl, "monitor");
    localHeader.createEl("span", { text: "Local Version" });
    localHeader.createEl("span", { cls: "cf-hash", text: conflict.localHash.substring(0, 8) });
    const localContent = localPanel.createEl("div", { cls: "cf-panel-content" });
    this.renderDiffContent(localContent, conflict.localContent, conflict.remoteContent, "local");
    const remotePanel = diffContainer.createEl("div", { cls: "cf-conflict-panel cf-remote" });
    const remoteHeader = remotePanel.createEl("div", { cls: "cf-panel-header" });
    const remoteIconEl = remoteHeader.createEl("span", { cls: "cf-panel-icon" });
    (0, import_obsidian4.setIcon)(remoteIconEl, "cloud");
    remoteHeader.createEl("span", { text: "Remote Version" });
    remoteHeader.createEl("span", { cls: "cf-hash", text: conflict.remoteHash.substring(0, 8) });
    const remoteContent = remotePanel.createEl("div", { cls: "cf-panel-content" });
    this.renderDiffContent(remoteContent, conflict.remoteContent, conflict.localContent, "remote");
    const actions = contentEl.createEl("div", { cls: "cf-conflict-actions" });
    const individualActions = actions.createEl("div", {
      cls: "cf-individual-actions"
    });
    const keepLocalBtn = individualActions.createEl("button", {
      cls: "cf-btn cf-btn-local"
    });
    const localBtnIcon = keepLocalBtn.createEl("span", { cls: "cf-btn-icon" });
    (0, import_obsidian4.setIcon)(localBtnIcon, "monitor");
    keepLocalBtn.createEl("span", { text: "Keep Local" });
    keepLocalBtn.addEventListener("click", () => this.handleResolve(conflict, "local"));
    const keepRemoteBtn = individualActions.createEl("button", {
      cls: "cf-btn cf-btn-remote"
    });
    const remoteBtnIcon = keepRemoteBtn.createEl("span", { cls: "cf-btn-icon" });
    (0, import_obsidian4.setIcon)(remoteBtnIcon, "cloud");
    keepRemoteBtn.createEl("span", { text: "Keep Remote" });
    keepRemoteBtn.addEventListener("click", () => this.handleResolve(conflict, "remote"));
    const keepBothBtn = individualActions.createEl("button", {
      cls: "cf-btn cf-btn-both"
    });
    const bothBtnIcon = keepBothBtn.createEl("span", { cls: "cf-btn-icon" });
    (0, import_obsidian4.setIcon)(bothBtnIcon, "copy");
    keepBothBtn.createEl("span", { text: "Keep Both" });
    keepBothBtn.addEventListener("click", () => this.handleResolve(conflict, "both"));
    if (this.conflicts.length > 1) {
      const batchActions = actions.createEl("div", { cls: "cf-batch-actions" });
      batchActions.createEl("span", {
        cls: "cf-batch-label",
        text: "Apply to all:"
      });
      const allLocalBtn = batchActions.createEl("button", {
        cls: "cf-btn cf-btn-small cf-btn-local",
        text: "All Local"
      });
      allLocalBtn.addEventListener("click", () => this.handleResolveAll("local"));
      const allRemoteBtn = batchActions.createEl("button", {
        cls: "cf-btn cf-btn-small cf-btn-remote",
        text: "All Remote"
      });
      allRemoteBtn.addEventListener("click", () => this.handleResolveAll("remote"));
    }
    if (this.conflicts.length > 1) {
      const nav = actions.createEl("div", { cls: "cf-conflict-nav" });
      const prevBtn = nav.createEl("button", { cls: "cf-btn cf-btn-nav" });
      (0, import_obsidian4.setIcon)(prevBtn, "chevron-left");
      prevBtn.disabled = this.currentIndex === 0;
      prevBtn.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderCurrentConflict();
        }
      });
      nav.createEl("span", {
        text: `${this.currentIndex + 1} / ${this.conflicts.length}`,
        cls: "cf-nav-text"
      });
      const nextBtn = nav.createEl("button", { cls: "cf-btn cf-btn-nav" });
      (0, import_obsidian4.setIcon)(nextBtn, "chevron-right");
      nextBtn.disabled = this.currentIndex >= this.conflicts.length - 1;
      nextBtn.addEventListener("click", () => {
        if (this.currentIndex < this.conflicts.length - 1) {
          this.currentIndex++;
          this.renderCurrentConflict();
        }
      });
    }
  }
  renderDiffContent(container, content, otherContent, side) {
    const lines = content.split("\n");
    const otherLines = otherContent.split("\n");
    const pre = container.createEl("pre", { cls: "cf-diff-pre" });
    for (let i = 0; i < lines.length; i++) {
      const lineEl = pre.createEl("div", { cls: "cf-diff-line" });
      lineEl.createEl("span", {
        cls: "cf-line-num",
        text: String(i + 1)
      });
      const isDiff = i >= otherLines.length || lines[i] !== otherLines[i];
      const lineContent = lineEl.createEl("span", {
        cls: `cf-line-content ${isDiff ? side === "local" ? "cf-diff-local" : "cf-diff-remote" : ""}`
      });
      lineContent.textContent = lines[i] || " ";
    }
  }
  async handleResolve(conflict, resolution) {
    const buttons = this.contentEl.querySelectorAll("button");
    buttons.forEach((btn) => btn.disabled = true);
    try {
      await this.onResolve(conflict, resolution);
      this.conflicts = this.conflicts.filter((c) => c.localPath !== conflict.localPath);
      if (this.currentIndex >= this.conflicts.length) {
        this.currentIndex = Math.max(0, this.conflicts.length - 1);
      }
      this.renderCurrentConflict();
    } catch (err) {
      console.error("Conflict resolution failed:", err);
      buttons.forEach((btn) => btn.disabled = false);
    }
  }
  async handleResolveAll(resolution) {
    const buttons = this.contentEl.querySelectorAll("button");
    buttons.forEach((btn) => btn.disabled = true);
    try {
      await this.onResolveAll(resolution);
      this.conflicts = [];
      this.renderCurrentConflict();
    } catch (err) {
      console.error("Batch conflict resolution failed:", err);
      buttons.forEach((btn) => btn.disabled = false);
    }
  }
  addStyles() {
    if (document.querySelector("#cf-conflict-styles"))
      return;
    const style = document.createElement("style");
    style.id = "cf-conflict-styles";
    style.textContent = `
      .cf-sync-conflict-modal {
        max-width: 900px;
        width: 90vw;
      }
      .cf-sync-conflict-modal .modal-content {
        padding: 0;
      }
      .cf-conflict-header {
        padding: 16px 20px;
        border-bottom: 1px solid var(--background-modifier-border);
      }
      .cf-conflict-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cf-conflict-icon {
        color: var(--text-warning);
      }
      .cf-conflict-title {
        margin: 0;
        font-size: 1.2em;
      }
      .cf-conflict-subtitle {
        color: var(--text-muted);
        font-size: 0.85em;
        margin-top: 4px;
      }
      .cf-conflict-filepath {
        font-family: var(--font-monospace);
        font-size: 0.85em;
        color: var(--text-accent);
        margin-top: 4px;
        padding: 4px 8px;
        background: var(--background-secondary);
        border-radius: 4px;
        display: inline-block;
      }
      .cf-conflict-diff {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--background-modifier-border);
        max-height: 400px;
        overflow: hidden;
      }
      .cf-conflict-panel {
        background: var(--background-primary);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .cf-panel-header {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        font-weight: 600;
        font-size: 0.85em;
        border-bottom: 1px solid var(--background-modifier-border);
        flex-shrink: 0;
      }
      .cf-local .cf-panel-header {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.1);
      }
      .cf-remote .cf-panel-header {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.1);
      }
      .cf-panel-icon {
        display: flex;
        align-items: center;
      }
      .cf-hash {
        margin-left: auto;
        font-family: var(--font-monospace);
        font-size: 0.8em;
        color: var(--text-muted);
        background: var(--background-secondary);
        padding: 1px 6px;
        border-radius: 3px;
      }
      .cf-panel-content {
        overflow: auto;
        flex: 1;
        max-height: 350px;
      }
      .cf-diff-pre {
        margin: 0;
        padding: 0;
        font-family: var(--font-monospace);
        font-size: 0.8em;
        line-height: 1.5;
      }
      .cf-diff-line {
        display: flex;
        white-space: pre;
      }
      .cf-line-num {
        flex-shrink: 0;
        width: 36px;
        text-align: right;
        padding-right: 8px;
        color: var(--text-faint);
        user-select: none;
        border-right: 1px solid var(--background-modifier-border);
        margin-right: 8px;
      }
      .cf-line-content {
        flex: 1;
      }
      .cf-diff-local {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.15);
      }
      .cf-diff-remote {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.15);
      }
      .cf-conflict-actions {
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .cf-individual-actions {
        display: flex;
        gap: 8px;
        justify-content: center;
      }
      .cf-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        border: 1px solid var(--background-modifier-border);
        background: var(--background-secondary);
        color: var(--text-normal);
        transition: all 0.15s ease;
      }
      .cf-btn:hover:not(:disabled) {
        background: var(--background-modifier-hover);
        border-color: var(--text-accent);
      }
      .cf-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .cf-btn-icon {
        display: flex;
        align-items: center;
      }
      .cf-btn-local:hover:not(:disabled) {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.15);
        border-color: rgb(var(--color-blue-rgb, 0, 120, 215));
      }
      .cf-btn-remote:hover:not(:disabled) {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.15);
        border-color: rgb(var(--color-green-rgb, 0, 180, 80));
      }
      .cf-btn-both:hover:not(:disabled) {
        background: rgba(var(--color-orange-rgb, 230, 150, 0), 0.15);
        border-color: rgb(var(--color-orange-rgb, 230, 150, 0));
      }
      .cf-btn-small {
        padding: 3px 10px;
        font-size: 0.8em;
      }
      .cf-batch-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
      }
      .cf-batch-label {
        font-size: 0.8em;
        color: var(--text-muted);
      }
      .cf-conflict-nav {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
      }
      .cf-btn-nav {
        padding: 4px 8px;
      }
      .cf-nav-text {
        font-size: 0.85em;
        color: var(--text-muted);
      }
      .cf-conflict-empty {
        padding: 40px 20px;
        text-align: center;
        font-size: 1.2em;
        color: var(--text-success, var(--interactive-success));
      }
    `;
    document.head.appendChild(style);
  }
};

// src/main.ts
var CloudflareSyncPlugin = class extends import_obsidian5.Plugin {
  async onload() {
    await this.loadSettings();
    this.syncEngine = new SyncEngine(this);
    await this.syncEngine.loadSyncState();
    this.statusBar = new SyncStatusBar(this, {
      onShowConflicts: () => this.showConflictModal(),
      onTriggerSync: () => this.triggerFullSync()
    });
    this.syncEngine.onStatsChanged = (stats) => {
      this.statusBar.updateStats(stats);
    };
    this.syncEngine.onConflictsFound = (conflicts) => {
      this.statusBar.updateConflicts(conflicts);
      new import_obsidian5.Notice(`\u26A0\uFE0F ${conflicts.length} sync conflict(s) found. Click status bar to resolve.`);
      this.showConflictModal();
    };
    this.syncEngine.onSyncComplete = () => {
      const stats = this.syncEngine.stats;
      if (stats.conflicts === 0) {
        new import_obsidian5.Notice(`\u2705 Sync complete: ${stats.syncedFiles} files synced`);
      }
    };
    this.syncEngine.onSyncError = (error) => {
      new import_obsidian5.Notice(`\u274C Sync error: ${error}`);
    };
    this.addSettingTab(new CloudflareSyncSettingTab(this.app, this));
    this.addCommand({
      id: "sync-full",
      name: "Full sync with Cloudflare",
      callback: () => this.triggerFullSync()
    });
    this.addCommand({
      id: "sync-to-remote",
      name: "Sync entire vault to Cloudflare (upload only)",
      callback: () => this.syncToRemote()
    });
    this.addCommand({
      id: "sync-from-remote",
      name: "Download entire vault from Cloudflare",
      callback: () => this.syncFromRemote()
    });
    this.addCommand({
      id: "update-frontmatter",
      name: "Update frontmatter for current file",
      editorCallback: (editor) => this.updateCurrentFileFrontmatter(editor)
    });
    this.addCommand({
      id: "generate-all-frontmatter",
      name: "Generate frontmatter for all markdown files",
      callback: () => this.generateAllFrontmatter()
    });
    this.addCommand({
      id: "sync-current-file",
      name: "Sync current file to Cloudflare",
      editorCallback: () => this.syncCurrentFile()
    });
    this.addCommand({
      id: "resolve-conflicts",
      name: "Resolve sync conflicts",
      callback: () => this.showConflictModal()
    });
    this.addCommand({
      id: "show-sync-status",
      name: "Show sync status",
      callback: () => {
        this.statusBar["showDetailModal"]();
      }
    });
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian5.TFile && this.settings.autoSync) {
          this.syncEngine.scheduleFileSync(file);
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        if (file instanceof import_obsidian5.TFile && this.settings.autoFrontmatter) {
          if (file.path.endsWith(".md")) {
            this.updateFileFrontmatter(file);
          }
        }
      })
    );
    this.addRibbonIcon("cloud-upload", "Full Sync with Cloudflare", () => {
      this.triggerFullSync();
    });
    if (this.settings.autoSync) {
      this.syncEngine.startAutoSync();
    }
    if (this.settings.syncOnStartup) {
      setTimeout(() => {
        this.triggerFullSync();
      }, 3e3);
    }
    if (this.settings.autoFrontmatter) {
      setTimeout(() => {
        this.scanAndGenerateFrontmatter();
      }, 2e3);
    }
    console.log("Cloudflare Sync plugin loaded");
  }
  async loadSettings() {
    this.settings = Object.assign(
      {
        serverUrl: "",
        apiToken: "",
        autoSync: true,
        autoFrontmatter: true,
        syncAllFiles: true,
        excludeFolders: ["_templates", ".trash"],
        excludeFiles: [],
        autoSyncInterval: 5,
        conflictStrategy: "ask",
        syncOnStartup: true,
        debounceDelay: 30
      },
      await this.loadData()
    );
  }
  async saveSettings() {
    await this.saveData(this.settings);
    if (this.syncEngine) {
      if (this.settings.autoSync) {
        this.syncEngine.startAutoSync();
      } else {
        this.syncEngine.stopAutoSync();
      }
    }
  }
  // ========== Sync Triggers ==========
  async triggerFullSync() {
    if (!this.settings.serverUrl || !this.settings.apiToken) {
      new import_obsidian5.Notice("Please configure Server URL and API Token in settings");
      return;
    }
    try {
      await this.api("/api/blog/site");
    } catch (error) {
      new import_obsidian5.Notice(`Connection failed: ${error.message}`);
      return;
    }
    new import_obsidian5.Notice("Starting full sync...");
    await this.syncEngine.fullSync();
  }
  showConflictModal() {
    const conflicts = this.syncEngine.conflicts;
    if (conflicts.length === 0) {
      new import_obsidian5.Notice("No conflicts to resolve");
      return;
    }
    new ConflictModal(
      this.app,
      conflicts,
      async (conflict, resolution) => {
        await this.syncEngine.resolveConflict(conflict, resolution);
        this.statusBar.updateConflicts(this.syncEngine.conflicts);
      },
      async (resolution) => {
        await this.syncEngine.resolveAllConflicts(resolution);
        this.statusBar.updateConflicts(this.syncEngine.conflicts);
      }
    ).open();
  }
  // ========== API 调用 ==========
  async api(endpoint, options2) {
    const { serverUrl, apiToken } = this.settings;
    if (!serverUrl || !apiToken) {
      throw new Error(`Server URL (${serverUrl || "empty"}) and API token (${apiToken ? "set" : "empty"}) are required`);
    }
    const url = serverUrl.replace(/\/$/, "") + endpoint;
    console.log(`[API] ${(options2 == null ? void 0 : options2.method) || "GET"} ${url}`);
    const headers = new Headers(options2 == null ? void 0 : options2.headers);
    headers.set("Authorization", `Bearer ${apiToken}`);
    if ((options2 == null ? void 0 : options2.method) && options2.method !== "GET") {
      headers.set("Content-Type", "application/json");
    }
    const response = await fetch(url, {
      ...options2,
      headers
    });
    console.log(`[API] Response: ${response.status} ${response.statusText}`);
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(`API error ${response.status}: ${error.error || response.statusText}`);
    }
    return response.json();
  }
  // ========== 上传/下载 ==========
  async uploadFile(key, content, contentType = "text/markdown", encoding = "utf-8") {
    await this.api("/api/sync/upload", {
      method: "POST",
      body: JSON.stringify({ key, content, contentType, encoding })
    });
  }
  async downloadFile(key) {
    const res = await this.api(`/api/sync/download/${key}`);
    return res.data;
  }
  async listFiles(prefix = "") {
    const res = await this.api(
      `/api/sync/list?prefix=${encodeURIComponent(prefix)}`
    );
    return res.data.files;
  }
  async deleteFile(key) {
    await this.api(`/api/sync/delete/${key}`, { method: "DELETE" });
  }
  // ========== Frontmatter 处理 ==========
  async generateFrontmatter(file) {
    var _a;
    const content = await this.app.vault.read(file);
    const existing = (0, import_gray_matter.default)(content);
    return {
      title: existing.data.title || file.basename,
      slug: existing.data.slug || this.generateSlug(file.basename),
      date: existing.data.date || new Date(file.stat.ctime).toISOString(),
      summary: existing.data.summary || this.extractSummary(existing.content),
      tags: existing.data.tags || [],
      publish: (_a = existing.data.publish) != null ? _a : false,
      coverImage: existing.data.coverImage
    };
  }
  generateSlug(filename) {
    return filename.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "").substring(0, 100);
  }
  extractSummary(content) {
    const firstParagraph = content.split("\n\n")[0];
    return firstParagraph.replace(/[#*`_\[\]]/g, "").substring(0, 200);
  }
  async updateFileFrontmatter(file, silent = false) {
    if (!file.path.endsWith(".md"))
      return false;
    const content = await this.app.vault.read(file);
    if (content.startsWith("---"))
      return false;
    const frontmatter = await this.generateFrontmatter(file);
    const newContent = import_gray_matter.default.stringify(content, frontmatter);
    await this.app.vault.modify(file, newContent);
    if (!silent) {
      new import_obsidian5.Notice(`Updated frontmatter for ${file.name}`);
    }
    return true;
  }
  async updateCurrentFileFrontmatter(editor) {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      new import_obsidian5.Notice("No active file");
      return;
    }
    const frontmatter = await this.generateFrontmatter(activeFile);
    const content = editor.getValue();
    const newContent = import_gray_matter.default.stringify(content, frontmatter);
    editor.setValue(newContent);
    new import_obsidian5.Notice("Updated frontmatter");
  }
  /**
   * 扫描所有 md 文件，确保每个文件都有完整的 frontmatter
   * 统一处理三种情况：
   * 1. 完全没有 frontmatter → 生成全部字段
   * 2. 有部分 frontmatter（缺少某些字段）→ 补全缺失字段
   * 3. 已有完整 frontmatter → 跳过
   */
  async scanAndGenerateFrontmatter() {
    const files = this.app.vault.getFiles().filter(
      (f) => f.path.endsWith(".md") && this.shouldSyncFile(f.path)
    );
    let generated = 0;
    const requiredFields = ["title", "slug", "date", "summary", "tags", "publish"];
    console.log(`[Frontmatter] Scanning ${files.length} markdown files...`);
    for (const file of files) {
      try {
        const content = await this.app.vault.read(file);
        const parsed = (0, import_gray_matter.default)(content);
        const defaults = {
          title: file.basename,
          slug: this.generateSlug(file.basename),
          date: new Date(file.stat.ctime).toISOString(),
          summary: this.extractSummary(parsed.content),
          tags: [],
          publish: false
        };
        let changed = false;
        for (const field of requiredFields) {
          if (parsed.data[field] === void 0 || parsed.data[field] === null) {
            parsed.data[field] = defaults[field];
            changed = true;
          }
        }
        if (changed) {
          const newContent = import_gray_matter.default.stringify(parsed.content, parsed.data);
          await this.app.vault.modify(file, newContent);
          generated++;
          console.log(`[Frontmatter] \u2705 ${file.path} \u2014 added missing fields`);
        }
      } catch (err) {
        console.error(`[Frontmatter] \u274C Failed for ${file.path}:`, err.message);
      }
    }
    if (generated > 0) {
      new import_obsidian5.Notice(`\u2705 Generated/updated frontmatter for ${generated} file(s)`);
    }
    console.log(`[Frontmatter] Done: ${generated}/${files.length} files updated`);
  }
  /**
   * 为所有 md 文件强制生成/更新 frontmatter（包括已有 frontmatter 的文件）
   */
  async generateAllFrontmatter() {
    const files = this.app.vault.getFiles().filter(
      (f) => f.path.endsWith(".md") && this.shouldSyncFile(f.path)
    );
    let updated = 0;
    new import_obsidian5.Notice(`Generating frontmatter for ${files.length} files...`);
    for (const file of files) {
      try {
        const content = await this.app.vault.read(file);
        const frontmatter = await this.generateFrontmatter(file);
        const newContent = import_gray_matter.default.stringify(
          (0, import_gray_matter.default)(content).content,
          // 去掉旧 frontmatter，用新的替换
          frontmatter
        );
        if (content !== newContent) {
          await this.app.vault.modify(file, newContent);
          updated++;
        }
      } catch (err) {
        console.error(`[Frontmatter] Failed for ${file.path}:`, err.message);
      }
    }
    new import_obsidian5.Notice(`\u2705 Updated frontmatter for ${updated}/${files.length} files`);
  }
  // ========== 同步逻辑 ==========
  shouldSyncFile(filePath) {
    for (const exclude of this.settings.excludeFolders || []) {
      if (filePath.startsWith(exclude + "/") || filePath.startsWith(exclude)) {
        return false;
      }
    }
    if (filePath.includes(".conflict-")) {
      return false;
    }
    return true;
  }
  getRemoteKey(file) {
    return file.path;
  }
  getMimeType(ext) {
    const map = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      webp: "image/webp",
      svg: "image/svg+xml",
      avif: "image/avif",
      pdf: "application/pdf",
      mp3: "audio/mpeg",
      mp4: "video/mp4",
      json: "application/json",
      yaml: "text/yaml",
      yml: "text/yaml",
      css: "text/css",
      js: "text/javascript",
      ts: "text/typescript"
    };
    return map[ext.toLowerCase()] || "application/octet-stream";
  }
  async syncFileToRemote(file) {
    if (!this.shouldSyncFile(file.path))
      return;
    try {
      const isMarkdown = file.path.endsWith(".md");
      console.log(`[Sync] Reading file: ${file.path} (${isMarkdown ? "markdown" : file.extension})`);
      let content;
      let contentType;
      let encoding = "utf-8";
      if (isMarkdown) {
        content = await this.app.vault.read(file);
        contentType = "text/markdown";
      } else {
        const buffer = await this.app.vault.readBinary(file);
        content = this.arrayBufferToBase64(buffer);
        encoding = "base64";
        contentType = this.getMimeType(file.extension);
      }
      console.log(`[Sync] File size: ${file.stat.size} bytes, encoding: ${encoding}`);
      const isPublished = isMarkdown ? (() => {
        const parsed = (0, import_gray_matter.default)(content);
        return parsed.data.publish === true;
      })() : false;
      const remoteKey = this.getRemoteKey(file);
      console.log(`[Sync] Uploading to: ${remoteKey}`);
      await this.uploadFile(remoteKey, content, contentType, encoding);
      console.log(`[Sync] \u2705 Uploaded ${file.name}`);
      if (isMarkdown && isPublished) {
        console.log(`[Sync] Extracting images from ${file.name}`);
        await this.extractAndUploadImages(content, file);
      }
    } catch (error) {
      console.error(`[Sync] \u274C Failed to sync ${file.name}:`, error.message);
      throw error;
    }
  }
  async syncFileFromRemote(remoteFile) {
    try {
      const data = await this.downloadFile(remoteFile.key);
      const localPath = data.key;
      const existingFile = this.app.vault.getAbstractFileByPath(localPath);
      const isMarkdown = localPath.endsWith(".md");
      if (existingFile instanceof import_obsidian5.TFile) {
        if (isMarkdown || data.encoding === "utf-8") {
          const localContent = await this.app.vault.read(existingFile);
          if (localContent !== data.content) {
            await this.app.vault.modify(existingFile, data.content);
            console.log(`[Download] Updated ${localPath}`);
          }
        } else {
          if (existingFile.stat.size !== data.size) {
            const buffer = this.base64ToArrayBuffer(data.content);
            await this.app.vault.modifyBinary(existingFile, buffer);
            console.log(`[Download] Updated ${localPath}`);
          }
        }
      } else {
        const folderPath = localPath.substring(0, localPath.lastIndexOf("/"));
        if (folderPath) {
          await this.app.vault.createFolder(folderPath).catch(() => {
          });
        }
        if (isMarkdown || data.encoding === "utf-8") {
          await this.app.vault.create(localPath, data.content);
        } else {
          const buffer = this.base64ToArrayBuffer(data.content);
          await this.app.vault.createBinary(localPath, buffer);
        }
        console.log(`[Download] Created ${localPath}`);
      }
    } catch (error) {
      console.error(`[Download] Failed to sync ${remoteFile.key}:`, error.message);
    }
  }
  base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }
  async syncToRemote() {
    new import_obsidian5.Notice("Syncing vault to Cloudflare...");
    try {
      const files = this.app.vault.getFiles();
      let synced = 0;
      let skipped = 0;
      console.log(`[Sync] Found ${files.length} files in vault`);
      try {
        await this.api("/api/blog/site");
        console.log("[Sync] \u2705 API connection test passed");
      } catch (error) {
        console.error("[Sync] \u274C API connection test failed:", error.message);
        new import_obsidian5.Notice(`Connection failed: ${error.message}`);
        return;
      }
      for (const file of files) {
        if (!this.shouldSyncFile(file.path)) {
          skipped++;
          continue;
        }
        try {
          await this.syncFileToRemote(file);
          synced++;
        } catch (error) {
          console.error(`[Sync] \u274C Failed to sync ${file.path}:`, error.message);
        }
      }
      console.log(`[Sync] Done: ${synced} synced, ${skipped} skipped`);
      new import_obsidian5.Notice(`Synced ${synced}/${files.length} files (${skipped} skipped)`);
    } catch (error) {
      console.error("[Sync] Failed to sync:", error);
      new import_obsidian5.Notice(`Sync failed: ${error.message}`);
    }
  }
  async syncFromRemote() {
    new import_obsidian5.Notice("Downloading from Cloudflare...");
    try {
      console.log("[Download] Listing remote files...");
      const remoteFiles = await this.listFiles("");
      console.log(`[Download] Found ${remoteFiles.length} remote files`);
      let synced = 0;
      for (const remoteFile of remoteFiles) {
        console.log(`[Download] Processing: ${remoteFile.key}`);
        try {
          await this.syncFileFromRemote(remoteFile);
          synced++;
        } catch (error) {
          console.error(`[Download] Failed to sync ${remoteFile.key}:`, error.message);
        }
      }
      console.log(`[Download] Done: ${synced} files processed`);
      new import_obsidian5.Notice(`Downloaded ${synced} files from Cloudflare`);
    } catch (error) {
      console.error("[Download] Failed:", error);
      new import_obsidian5.Notice(`Download failed: ${error.message}`);
    }
  }
  async syncCurrentFile() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      new import_obsidian5.Notice("No active file");
      return;
    }
    await this.syncFileToRemote(activeFile);
    new import_obsidian5.Notice(`Synced ${activeFile.name} to Cloudflare`);
  }
  // ========== 图片处理 ==========
  async extractAndUploadImages(content, file) {
    var _a;
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      const imagePath = match[1];
      if (imagePath.startsWith("./") || !imagePath.startsWith("http")) {
        const folder = ((_a = file.parent) == null ? void 0 : _a.path) || "";
        const fullPath = (0, import_obsidian5.normalizePath)(`${folder}/${imagePath}`);
        const imageFile = this.app.vault.getAbstractFileByPath(fullPath);
        if (imageFile instanceof import_obsidian5.TFile) {
          const imageBuffer = await this.app.vault.readBinary(imageFile);
          const base64 = this.arrayBufferToBase64(imageBuffer);
          const ext = imageFile.extension.toLowerCase();
          let contentType = "application/octet-stream";
          if (["jpg", "jpeg"].includes(ext))
            contentType = `image/jpeg`;
          else if (ext === "png")
            contentType = "image/png";
          else if (ext === "gif")
            contentType = "image/gif";
          else if (ext === "webp")
            contentType = "image/webp";
          else if (ext === "svg")
            contentType = "image/svg+xml";
          await this.api("/api/sync/upload", {
            method: "POST",
            body: JSON.stringify({
              key: `images/${imageFile.name}`,
              content: base64,
              contentType,
              encoding: "base64"
            })
          });
        }
      }
    }
  }
  arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  onunload() {
    var _a, _b;
    console.log("Cloudflare Sync plugin unloading...");
    (_a = this.syncEngine) == null ? void 0 : _a.destroy();
    (_b = this.statusBar) == null ? void 0 : _b.destroy();
    console.log("Cloudflare Sync plugin unloaded");
  }
};
/*! Bundled license information:

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

strip-bom-string/index.js:
  (*!
   * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2tpbmQtb2YvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2lzLWV4dGVuZGFibGUvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zZWN0aW9uLW1hdHRlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvY29tbW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9leGNlcHRpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL21hcmsuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9zdHIuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2VxLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL21hcC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvc2NoZW1hL2ZhaWxzYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL251bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYm9vbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9pbnQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvZmxvYXQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9qc29uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvY29yZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS90aW1lc3RhbXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvbWVyZ2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYmluYXJ5LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL29tYXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvcGFpcnMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2V0LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvZGVmYXVsdF9zYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL2pzL3VuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9qcy9yZWdleHAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvanMvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X2Z1bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL2xvYWRlci5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvZHVtcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9lbmdpbmVzLmpzIiwgIm5vZGVfbW9kdWxlcy9zdHJpcC1ib20tc3RyaW5nL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvdXRpbHMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9kZWZhdWx0cy5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2VuZ2luZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL3N0cmluZ2lmeS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2V4Y2VycHQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi90by1maWxlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvcGFyc2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2luZGV4LmpzIiwgInNyYy9tYWluLnRzIiwgInNyYy9zZXR0aW5ncy50cyIsICJzcmMvc3luYy1lbmdpbmUudHMiLCAic3JjL3N0YXR1cy1iYXIudHMiLCAic3JjL2NvbmZsaWN0LW1vZGFsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gJ2Jvb2xlYW4nO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiAnc3RyaW5nJztcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSByZXR1cm4gJ251bWJlcic7XG4gIGlmICh0eXBlID09PSAnc3ltYm9sJykgcmV0dXJuICdzeW1ib2wnO1xuICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpc0dlbmVyYXRvckZuKHZhbCkgPyAnZ2VuZXJhdG9yZnVuY3Rpb24nIDogJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlmIChpc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICBpZiAoaXNCdWZmZXIodmFsKSkgcmV0dXJuICdidWZmZXInO1xuICBpZiAoaXNBcmd1bWVudHModmFsKSkgcmV0dXJuICdhcmd1bWVudHMnO1xuICBpZiAoaXNEYXRlKHZhbCkpIHJldHVybiAnZGF0ZSc7XG4gIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICBpZiAoaXNSZWdleHAodmFsKSkgcmV0dXJuICdyZWdleHAnO1xuXG4gIHN3aXRjaCAoY3Rvck5hbWUodmFsKSkge1xuICAgIGNhc2UgJ1N5bWJvbCc6IHJldHVybiAnc3ltYm9sJztcbiAgICBjYXNlICdQcm9taXNlJzogcmV0dXJuICdwcm9taXNlJztcblxuICAgIC8vIFNldCwgTWFwLCBXZWFrU2V0LCBXZWFrTWFwXG4gICAgY2FzZSAnV2Vha01hcCc6IHJldHVybiAnd2Vha21hcCc7XG4gICAgY2FzZSAnV2Vha1NldCc6IHJldHVybiAnd2Vha3NldCc7XG4gICAgY2FzZSAnTWFwJzogcmV0dXJuICdtYXAnO1xuICAgIGNhc2UgJ1NldCc6IHJldHVybiAnc2V0JztcblxuICAgIC8vIDgtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDhBcnJheSc6IHJldHVybiAnaW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OEFycmF5JzogcmV0dXJuICd1aW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OENsYW1wZWRBcnJheSc6IHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuXG4gICAgLy8gMTYtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDE2QXJyYXknOiByZXR1cm4gJ2ludDE2YXJyYXknO1xuICAgIGNhc2UgJ1VpbnQxNkFycmF5JzogcmV0dXJuICd1aW50MTZhcnJheSc7XG5cbiAgICAvLyAzMi1iaXQgdHlwZWQgYXJyYXlzXG4gICAgY2FzZSAnSW50MzJBcnJheSc6IHJldHVybiAnaW50MzJhcnJheSc7XG4gICAgY2FzZSAnVWludDMyQXJyYXknOiByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgICBjYXNlICdGbG9hdDMyQXJyYXknOiByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gICAgY2FzZSAnRmxvYXQ2NEFycmF5JzogcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgaWYgKGlzR2VuZXJhdG9yT2JqKHZhbCkpIHtcbiAgICByZXR1cm4gJ2dlbmVyYXRvcic7XG4gIH1cblxuICAvLyBOb24tcGxhaW4gb2JqZWN0c1xuICB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOiByZXR1cm4gJ29iamVjdCc7XG4gICAgLy8gaXRlcmF0b3JzXG4gICAgY2FzZSAnW29iamVjdCBNYXAgSXRlcmF0b3JdJzogcmV0dXJuICdtYXBpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTZXQgSXRlcmF0b3JdJzogcmV0dXJuICdzZXRpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTdHJpbmcgSXRlcmF0b3JdJzogcmV0dXJuICdzdHJpbmdpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheSBJdGVyYXRvcl0nOiByZXR1cm4gJ2FycmF5aXRlcmF0b3InO1xuICB9XG5cbiAgLy8gb3RoZXJcbiAgcmV0dXJuIHR5cGUuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbn07XG5cbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yIHx8ICh0eXBlb2YgdmFsLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gJ251bWJlcicpO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ2V4cCh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLmZsYWdzID09PSAnc3RyaW5nJ1xuICAgICYmIHR5cGVvZiB2YWwuaWdub3JlQ2FzZSA9PT0gJ2Jvb2xlYW4nXG4gICAgJiYgdHlwZW9mIHZhbC5tdWx0aWxpbmUgPT09ICdib29sZWFuJ1xuICAgICYmIHR5cGVvZiB2YWwuZ2xvYmFsID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRm4obmFtZSwgdmFsKSB7XG4gIHJldHVybiBjdG9yTmFtZShuYW1lKSA9PT0gJ0dlbmVyYXRvckZ1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNHZW5lcmF0b3JPYmoodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRocm93ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5yZXR1cm4gPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLm5leHQgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmFsLmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbC5jYWxsZWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NhbGxlZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IFNhZmFyaSA1LTcgKDgtMTAgeXItb2xkIGJyb3dzZXIpLFxuICogdGFrZSBhIGxvb2sgYXQgaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pcy1idWZmZXJcbiAqL1xuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgaWYgKHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsICIvKiFcbiAqIGlzLWV4dGVuZGFibGUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGVuZGFibGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRlbmRhYmxlKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsXG4gICAgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoby8qLCBvYmplY3RzKi8pIHtcbiAgaWYgKCFpc09iamVjdChvKSkgeyBvID0ge307IH1cblxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgYXNzaWduKG8sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufTtcblxuZnVuY3Rpb24gYXNzaWduKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoaGFzT3duKGIsIGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBvZiBgb2JqYC5cbiAqL1xuXG5mdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZC1zaGFsbG93Jyk7XG5cbi8qKlxuICogUGFyc2Ugc2VjdGlvbnMgaW4gYGlucHV0YCB3aXRoIHRoZSBnaXZlbiBgb3B0aW9uc2AuXG4gKlxuICogYGBganNcbiAqIHZhciBzZWN0aW9ucyA9IHJlcXVpcmUoJ3slPSBuYW1lICV9Jyk7XG4gKiB2YXIgcmVzdWx0ID0gc2VjdGlvbnMoaW5wdXQsIG9wdGlvbnMpO1xuICogLy8geyBjb250ZW50OiAnQ29udGVudCBiZWZvcmUgc2VjdGlvbnMnLCBzZWN0aW9uczogW10gfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xCdWZmZXJ8T2JqZWN0fSBgaW5wdXRgIElmIGlucHV0IGlzIGFuIG9iamVjdCwgaXQncyBgY29udGVudGAgcHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyBvciBidWZmZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgYGNvbnRlbnRgIHN0cmluZyBhbmQgYW4gYXJyYXkgb2YgYHNlY3Rpb25zYCBvYmplY3RzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlucHV0LCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMgPSB7IHBhcnNlOiBvcHRpb25zIH07XG4gIH1cblxuICB2YXIgZmlsZSA9IHRvT2JqZWN0KGlucHV0KTtcbiAgdmFyIGRlZmF1bHRzID0ge3NlY3Rpb25fZGVsaW1pdGVyOiAnLS0tJywgcGFyc2U6IGlkZW50aXR5fTtcbiAgdmFyIG9wdHMgPSBleHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgdmFyIGRlbGltID0gb3B0cy5zZWN0aW9uX2RlbGltaXRlcjtcbiAgdmFyIGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBzZWN0aW9ucyA9IG51bGw7XG4gIHZhciBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbigpO1xuICB2YXIgY29udGVudCA9IFtdO1xuICB2YXIgc3RhY2sgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0U2VjdGlvbnModmFsKSB7XG4gICAgZmlsZS5jb250ZW50ID0gdmFsO1xuICAgIHNlY3Rpb25zID0gW107XG4gICAgY29udGVudCA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VTZWN0aW9uKHZhbCkge1xuICAgIGlmIChzdGFjay5sZW5ndGgpIHtcbiAgICAgIHNlY3Rpb24ua2V5ID0gZ2V0S2V5KHN0YWNrWzBdLCBkZWxpbSk7XG4gICAgICBzZWN0aW9uLmNvbnRlbnQgPSB2YWw7XG4gICAgICBvcHRzLnBhcnNlKHNlY3Rpb24sIHNlY3Rpb25zKTtcbiAgICAgIHNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbigpO1xuICAgICAgY29udGVudCA9IFtdO1xuICAgICAgc3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcbiAgICB2YXIgbGVuID0gc3RhY2subGVuZ3RoO1xuICAgIHZhciBsbiA9IGxpbmUudHJpbSgpO1xuXG4gICAgaWYgKGlzRGVsaW1pdGVyKGxuLCBkZWxpbSkpIHtcbiAgICAgIGlmIChsbi5sZW5ndGggPT09IDMgJiYgaSAhPT0gMCkge1xuICAgICAgICBpZiAobGVuID09PSAwIHx8IGxlbiA9PT0gMikge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChsaW5lKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGxuKTtcbiAgICAgICAgc2VjdGlvbi5kYXRhID0gY29udGVudC5qb2luKCdcXG4nKTtcbiAgICAgICAgY29udGVudCA9IFtdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY3Rpb25zID09PSBudWxsKSB7XG4gICAgICAgIGluaXRTZWN0aW9ucyhjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICBjbG9zZVNlY3Rpb24oY29udGVudC5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2gobG4pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29udGVudC5wdXNoKGxpbmUpO1xuICB9XG5cbiAgaWYgKHNlY3Rpb25zID09PSBudWxsKSB7XG4gICAgaW5pdFNlY3Rpb25zKGNvbnRlbnQuam9pbignXFxuJykpO1xuICB9IGVsc2Uge1xuICAgIGNsb3NlU2VjdGlvbihjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIGZpbGUuc2VjdGlvbnMgPSBzZWN0aW9ucztcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG5mdW5jdGlvbiBpc0RlbGltaXRlcihsaW5lLCBkZWxpbSkge1xuICBpZiAobGluZS5zbGljZSgwLCBkZWxpbS5sZW5ndGgpICE9PSBkZWxpbSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGluZS5jaGFyQXQoZGVsaW0ubGVuZ3RoICsgMSkgPT09IGRlbGltLnNsaWNlKC0xKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QoaW5wdXQpIHtcbiAgaWYgKHR5cGVPZihpbnB1dCkgIT09ICdvYmplY3QnKSB7XG4gICAgaW5wdXQgPSB7IGNvbnRlbnQ6IGlucHV0IH07XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LmNvbnRlbnQgIT09ICdzdHJpbmcnICYmICFpc0J1ZmZlcihpbnB1dC5jb250ZW50KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGEgYnVmZmVyIG9yIHN0cmluZycpO1xuICB9XG5cbiAgaW5wdXQuY29udGVudCA9IGlucHV0LmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgaW5wdXQuc2VjdGlvbnMgPSBbXTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRLZXkodmFsLCBkZWxpbSkge1xuICByZXR1cm4gdmFsID8gdmFsLnNsaWNlKGRlbGltLmxlbmd0aCkudHJpbSgpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oKSB7XG4gIHJldHVybiB7IGtleTogJycsIGRhdGE6ICcnLCBjb250ZW50OiAnJyB9O1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eSh2YWwpIHtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIGlmICh2YWwgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBpc05vdGhpbmcoc3ViamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBzdWJqZWN0ID09PSAndW5kZWZpbmVkJykgfHwgKHN1YmplY3QgPT09IG51bGwpO1xufVxuXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcpICYmIChzdWJqZWN0ICE9PSBudWxsKTtcbn1cblxuXG5mdW5jdGlvbiB0b0FycmF5KHNlcXVlbmNlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNlcXVlbmNlKSkgcmV0dXJuIHNlcXVlbmNlO1xuICBlbHNlIGlmIChpc05vdGhpbmcoc2VxdWVuY2UpKSByZXR1cm4gW107XG5cbiAgcmV0dXJuIFsgc2VxdWVuY2UgXTtcbn1cblxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGluZGV4LCBsZW5ndGgsIGtleSwgc291cmNlS2V5cztcblxuICBpZiAoc291cmNlKSB7XG4gICAgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gc291cmNlS2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBrZXkgPSBzb3VyY2VLZXlzW2luZGV4XTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuXG5mdW5jdGlvbiByZXBlYXQoc3RyaW5nLCBjb3VudCkge1xuICB2YXIgcmVzdWx0ID0gJycsIGN5Y2xlO1xuXG4gIGZvciAoY3ljbGUgPSAwOyBjeWNsZSA8IGNvdW50OyBjeWNsZSArPSAxKSB7XG4gICAgcmVzdWx0ICs9IHN0cmluZztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gaXNOZWdhdGl2ZVplcm8obnVtYmVyKSB7XG4gIHJldHVybiAobnVtYmVyID09PSAwKSAmJiAoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZID09PSAxIC8gbnVtYmVyKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5pc05vdGhpbmcgICAgICA9IGlzTm90aGluZztcbm1vZHVsZS5leHBvcnRzLmlzT2JqZWN0ICAgICAgID0gaXNPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cy50b0FycmF5ICAgICAgICA9IHRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0cy5yZXBlYXQgICAgICAgICA9IHJlcGVhdDtcbm1vZHVsZS5leHBvcnRzLmlzTmVnYXRpdmVaZXJvID0gaXNOZWdhdGl2ZVplcm87XG5tb2R1bGUuZXhwb3J0cy5leHRlbmQgICAgICAgICA9IGV4dGVuZDtcbiIsICIvLyBZQU1MIGVycm9yIGNsYXNzLiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg0NTg5ODRcbi8vXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFlBTUxFeGNlcHRpb24ocmVhc29uLCBtYXJrKSB7XG4gIC8vIFN1cGVyIGNvbnN0cnVjdG9yXG4gIEVycm9yLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYW1lID0gJ1lBTUxFeGNlcHRpb24nO1xuICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgdGhpcy5tYXJrID0gbWFyaztcbiAgdGhpcy5tZXNzYWdlID0gKHRoaXMucmVhc29uIHx8ICcodW5rbm93biByZWFzb24pJykgKyAodGhpcy5tYXJrID8gJyAnICsgdGhpcy5tYXJrLnRvU3RyaW5nKCkgOiAnJyk7XG5cbiAgLy8gSW5jbHVkZSBzdGFjayB0cmFjZSBpbiBlcnJvciBvYmplY3RcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgLy8gQ2hyb21lIGFuZCBOb2RlSlNcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGRiwgSUUgMTArIGFuZCBTYWZhcmkgNisuIEZhbGxiYWNrIGZvciBvdGhlcnNcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjayB8fCAnJztcbiAgfVxufVxuXG5cbi8vIEluaGVyaXQgZnJvbSBFcnJvclxuWUFNTEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5ZQU1MRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFlBTUxFeGNlcHRpb247XG5cblxuWUFNTEV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhjb21wYWN0KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLm5hbWUgKyAnOiAnO1xuXG4gIHJlc3VsdCArPSB0aGlzLnJlYXNvbiB8fCAnKHVua25vd24gcmVhc29uKSc7XG5cbiAgaWYgKCFjb21wYWN0ICYmIHRoaXMubWFyaykge1xuICAgIHJlc3VsdCArPSAnICcgKyB0aGlzLm1hcmsudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gWUFNTEV4Y2VwdGlvbjtcbiIsICIndXNlIHN0cmljdCc7XG5cblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uJyk7XG5cblxuZnVuY3Rpb24gTWFyayhuYW1lLCBidWZmZXIsIHBvc2l0aW9uLCBsaW5lLCBjb2x1bW4pIHtcbiAgdGhpcy5uYW1lICAgICA9IG5hbWU7XG4gIHRoaXMuYnVmZmVyICAgPSBidWZmZXI7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgdGhpcy5saW5lICAgICA9IGxpbmU7XG4gIHRoaXMuY29sdW1uICAgPSBjb2x1bW47XG59XG5cblxuTWFyay5wcm90b3R5cGUuZ2V0U25pcHBldCA9IGZ1bmN0aW9uIGdldFNuaXBwZXQoaW5kZW50LCBtYXhMZW5ndGgpIHtcbiAgdmFyIGhlYWQsIHN0YXJ0LCB0YWlsLCBlbmQsIHNuaXBwZXQ7XG5cbiAgaWYgKCF0aGlzLmJ1ZmZlcikgcmV0dXJuIG51bGw7XG5cbiAgaW5kZW50ID0gaW5kZW50IHx8IDQ7XG4gIG1heExlbmd0aCA9IG1heExlbmd0aCB8fCA3NTtcblxuICBoZWFkID0gJyc7XG4gIHN0YXJ0ID0gdGhpcy5wb3NpdGlvbjtcblxuICB3aGlsZSAoc3RhcnQgPiAwICYmICdcXHgwMFxcclxcblxceDg1XFx1MjAyOFxcdTIwMjknLmluZGV4T2YodGhpcy5idWZmZXIuY2hhckF0KHN0YXJ0IC0gMSkpID09PSAtMSkge1xuICAgIHN0YXJ0IC09IDE7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gLSBzdGFydCA+IChtYXhMZW5ndGggLyAyIC0gMSkpIHtcbiAgICAgIGhlYWQgPSAnIC4uLiAnO1xuICAgICAgc3RhcnQgKz0gNTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHRhaWwgPSAnJztcbiAgZW5kID0gdGhpcy5wb3NpdGlvbjtcblxuICB3aGlsZSAoZW5kIDwgdGhpcy5idWZmZXIubGVuZ3RoICYmICdcXHgwMFxcclxcblxceDg1XFx1MjAyOFxcdTIwMjknLmluZGV4T2YodGhpcy5idWZmZXIuY2hhckF0KGVuZCkpID09PSAtMSkge1xuICAgIGVuZCArPSAxO1xuICAgIGlmIChlbmQgLSB0aGlzLnBvc2l0aW9uID4gKG1heExlbmd0aCAvIDIgLSAxKSkge1xuICAgICAgdGFpbCA9ICcgLi4uICc7XG4gICAgICBlbmQgLT0gNTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNuaXBwZXQgPSB0aGlzLmJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTtcblxuICByZXR1cm4gY29tbW9uLnJlcGVhdCgnICcsIGluZGVudCkgKyBoZWFkICsgc25pcHBldCArIHRhaWwgKyAnXFxuJyArXG4gICAgICAgICBjb21tb24ucmVwZWF0KCcgJywgaW5kZW50ICsgdGhpcy5wb3NpdGlvbiAtIHN0YXJ0ICsgaGVhZC5sZW5ndGgpICsgJ14nO1xufTtcblxuXG5NYXJrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGNvbXBhY3QpIHtcbiAgdmFyIHNuaXBwZXQsIHdoZXJlID0gJyc7XG5cbiAgaWYgKHRoaXMubmFtZSkge1xuICAgIHdoZXJlICs9ICdpbiBcIicgKyB0aGlzLm5hbWUgKyAnXCIgJztcbiAgfVxuXG4gIHdoZXJlICs9ICdhdCBsaW5lICcgKyAodGhpcy5saW5lICsgMSkgKyAnLCBjb2x1bW4gJyArICh0aGlzLmNvbHVtbiArIDEpO1xuXG4gIGlmICghY29tcGFjdCkge1xuICAgIHNuaXBwZXQgPSB0aGlzLmdldFNuaXBwZXQoKTtcblxuICAgIGlmIChzbmlwcGV0KSB7XG4gICAgICB3aGVyZSArPSAnOlxcbicgKyBzbmlwcGV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aGVyZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBNYXJrO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFlBTUxFeGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgVFlQRV9DT05TVFJVQ1RPUl9PUFRJT05TID0gW1xuICAna2luZCcsXG4gICdyZXNvbHZlJyxcbiAgJ2NvbnN0cnVjdCcsXG4gICdpbnN0YW5jZU9mJyxcbiAgJ3ByZWRpY2F0ZScsXG4gICdyZXByZXNlbnQnLFxuICAnZGVmYXVsdFN0eWxlJyxcbiAgJ3N0eWxlQWxpYXNlcydcbl07XG5cbnZhciBZQU1MX05PREVfS0lORFMgPSBbXG4gICdzY2FsYXInLFxuICAnc2VxdWVuY2UnLFxuICAnbWFwcGluZydcbl07XG5cbmZ1bmN0aW9uIGNvbXBpbGVTdHlsZUFsaWFzZXMobWFwKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBpZiAobWFwICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgbWFwW3N0eWxlXS5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICByZXN1bHRbU3RyaW5nKGFsaWFzKV0gPSBzdHlsZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gVHlwZSh0YWcsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChUWVBFX0NPTlNUUlVDVE9SX09QVElPTlMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdVbmtub3duIG9wdGlvbiBcIicgKyBuYW1lICsgJ1wiIGlzIG1ldCBpbiBkZWZpbml0aW9uIG9mIFwiJyArIHRhZyArICdcIiBZQU1MIHR5cGUuJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBUT0RPOiBBZGQgdGFnIGZvcm1hdCBjaGVjay5cbiAgdGhpcy50YWcgICAgICAgICAgPSB0YWc7XG4gIHRoaXMua2luZCAgICAgICAgID0gb3B0aW9uc1sna2luZCddICAgICAgICAgfHwgbnVsbDtcbiAgdGhpcy5yZXNvbHZlICAgICAgPSBvcHRpb25zWydyZXNvbHZlJ10gICAgICB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9O1xuICB0aGlzLmNvbnN0cnVjdCAgICA9IG9wdGlvbnNbJ2NvbnN0cnVjdCddICAgIHx8IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9O1xuICB0aGlzLmluc3RhbmNlT2YgICA9IG9wdGlvbnNbJ2luc3RhbmNlT2YnXSAgIHx8IG51bGw7XG4gIHRoaXMucHJlZGljYXRlICAgID0gb3B0aW9uc1sncHJlZGljYXRlJ10gICAgfHwgbnVsbDtcbiAgdGhpcy5yZXByZXNlbnQgICAgPSBvcHRpb25zWydyZXByZXNlbnQnXSAgICB8fCBudWxsO1xuICB0aGlzLmRlZmF1bHRTdHlsZSA9IG9wdGlvbnNbJ2RlZmF1bHRTdHlsZSddIHx8IG51bGw7XG4gIHRoaXMuc3R5bGVBbGlhc2VzID0gY29tcGlsZVN0eWxlQWxpYXNlcyhvcHRpb25zWydzdHlsZUFsaWFzZXMnXSB8fCBudWxsKTtcblxuICBpZiAoWUFNTF9OT0RFX0tJTkRTLmluZGV4T2YodGhpcy5raW5kKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignVW5rbm93biBraW5kIFwiJyArIHRoaXMua2luZCArICdcIiBpcyBzcGVjaWZpZWQgZm9yIFwiJyArIHRhZyArICdcIiBZQU1MIHR5cGUuJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuKi9cblxudmFyIGNvbW1vbiAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIFlBTUxFeGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xudmFyIFR5cGUgICAgICAgICAgPSByZXF1aXJlKCcuL3R5cGUnKTtcblxuXG5mdW5jdGlvbiBjb21waWxlTGlzdChzY2hlbWEsIG5hbWUsIHJlc3VsdCkge1xuICB2YXIgZXhjbHVkZSA9IFtdO1xuXG4gIHNjaGVtYS5pbmNsdWRlLmZvckVhY2goZnVuY3Rpb24gKGluY2x1ZGVkU2NoZW1hKSB7XG4gICAgcmVzdWx0ID0gY29tcGlsZUxpc3QoaW5jbHVkZWRTY2hlbWEsIG5hbWUsIHJlc3VsdCk7XG4gIH0pO1xuXG4gIHNjaGVtYVtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50VHlwZSkge1xuICAgIHJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChwcmV2aW91c1R5cGUsIHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIGlmIChwcmV2aW91c1R5cGUudGFnID09PSBjdXJyZW50VHlwZS50YWcgJiYgcHJldmlvdXNUeXBlLmtpbmQgPT09IGN1cnJlbnRUeXBlLmtpbmQpIHtcbiAgICAgICAgZXhjbHVkZS5wdXNoKHByZXZpb3VzSW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzdWx0LnB1c2goY3VycmVudFR5cGUpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZXhjbHVkZS5pbmRleE9mKGluZGV4KSA9PT0gLTE7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGNvbXBpbGVNYXAoLyogbGlzdHMuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgc2NhbGFyOiB7fSxcbiAgICAgICAgc2VxdWVuY2U6IHt9LFxuICAgICAgICBtYXBwaW5nOiB7fSxcbiAgICAgICAgZmFsbGJhY2s6IHt9XG4gICAgICB9LCBpbmRleCwgbGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3RUeXBlKHR5cGUpIHtcbiAgICByZXN1bHRbdHlwZS5raW5kXVt0eXBlLnRhZ10gPSByZXN1bHRbJ2ZhbGxiYWNrJ11bdHlwZS50YWddID0gdHlwZTtcbiAgfVxuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGFyZ3VtZW50c1tpbmRleF0uZm9yRWFjaChjb2xsZWN0VHlwZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5mdW5jdGlvbiBTY2hlbWEoZGVmaW5pdGlvbikge1xuICB0aGlzLmluY2x1ZGUgID0gZGVmaW5pdGlvbi5pbmNsdWRlICB8fCBbXTtcbiAgdGhpcy5pbXBsaWNpdCA9IGRlZmluaXRpb24uaW1wbGljaXQgfHwgW107XG4gIHRoaXMuZXhwbGljaXQgPSBkZWZpbml0aW9uLmV4cGxpY2l0IHx8IFtdO1xuXG4gIHRoaXMuaW1wbGljaXQuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIGlmICh0eXBlLmxvYWRLaW5kICYmIHR5cGUubG9hZEtpbmQgIT09ICdzY2FsYXInKSB7XG4gICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignVGhlcmUgaXMgYSBub24tc2NhbGFyIHR5cGUgaW4gdGhlIGltcGxpY2l0IGxpc3Qgb2YgYSBzY2hlbWEuIEltcGxpY2l0IHJlc29sdmluZyBvZiBzdWNoIHR5cGVzIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLmNvbXBpbGVkSW1wbGljaXQgPSBjb21waWxlTGlzdCh0aGlzLCAnaW1wbGljaXQnLCBbXSk7XG4gIHRoaXMuY29tcGlsZWRFeHBsaWNpdCA9IGNvbXBpbGVMaXN0KHRoaXMsICdleHBsaWNpdCcsIFtdKTtcbiAgdGhpcy5jb21waWxlZFR5cGVNYXAgID0gY29tcGlsZU1hcCh0aGlzLmNvbXBpbGVkSW1wbGljaXQsIHRoaXMuY29tcGlsZWRFeHBsaWNpdCk7XG59XG5cblxuU2NoZW1hLkRFRkFVTFQgPSBudWxsO1xuXG5cblNjaGVtYS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGVTY2hlbWEoKSB7XG4gIHZhciBzY2hlbWFzLCB0eXBlcztcblxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICBzY2hlbWFzID0gU2NoZW1hLkRFRkFVTFQ7XG4gICAgICB0eXBlcyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgc2NoZW1hcyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIHR5cGVzID0gYXJndW1lbnRzWzFdO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1dyb25nIG51bWJlciBvZiBhcmd1bWVudHMgZm9yIFNjaGVtYS5jcmVhdGUgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHNjaGVtYXMgPSBjb21tb24udG9BcnJheShzY2hlbWFzKTtcbiAgdHlwZXMgPSBjb21tb24udG9BcnJheSh0eXBlcyk7XG5cbiAgaWYgKCFzY2hlbWFzLmV2ZXJ5KGZ1bmN0aW9uIChzY2hlbWEpIHsgcmV0dXJuIHNjaGVtYSBpbnN0YW5jZW9mIFNjaGVtYTsgfSkpIHtcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignU3BlY2lmaWVkIGxpc3Qgb2Ygc3VwZXIgc2NoZW1hcyAob3IgYSBzaW5nbGUgU2NoZW1hIG9iamVjdCkgY29udGFpbnMgYSBub24tU2NoZW1hIG9iamVjdC4nKTtcbiAgfVxuXG4gIGlmICghdHlwZXMuZXZlcnkoZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIHR5cGUgaW5zdGFuY2VvZiBUeXBlOyB9KSkge1xuICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdTcGVjaWZpZWQgbGlzdCBvZiBZQU1MIHR5cGVzIChvciBhIHNpbmdsZSBUeXBlIG9iamVjdCkgY29udGFpbnMgYSBub24tVHlwZSBvYmplY3QuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYSh7XG4gICAgaW5jbHVkZTogc2NoZW1hcyxcbiAgICBleHBsaWNpdDogdHlwZXNcbiAgfSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NoZW1hO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnN0cicsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogJyc7IH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnNlcScsIHtcbiAga2luZDogJ3NlcXVlbmNlJyxcbiAgY29uc3RydWN0OiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiBbXTsgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6bWFwJywge1xuICBraW5kOiAnbWFwcGluZycsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDoge307IH1cbn0pO1xuIiwgIi8vIFN0YW5kYXJkIFlBTUwncyBGYWlsc2FmZSBzY2hlbWEuXG4vLyBodHRwOi8vd3d3LnlhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI4MDIzNDZcblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGV4cGxpY2l0OiBbXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9zdHInKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL3NlcScpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvbWFwJylcbiAgXVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxOdWxsKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBtYXggPSBkYXRhLmxlbmd0aDtcblxuICByZXR1cm4gKG1heCA9PT0gMSAmJiBkYXRhID09PSAnficpIHx8XG4gICAgICAgICAobWF4ID09PSA0ICYmIChkYXRhID09PSAnbnVsbCcgfHwgZGF0YSA9PT0gJ051bGwnIHx8IGRhdGEgPT09ICdOVUxMJykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PT0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6bnVsbCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sTnVsbCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sTnVsbCxcbiAgcHJlZGljYXRlOiBpc051bGwsXG4gIHJlcHJlc2VudDoge1xuICAgIGNhbm9uaWNhbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ34nOyAgICB9LFxuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ251bGwnOyB9LFxuICAgIHVwcGVyY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ05VTEwnOyB9LFxuICAgIGNhbWVsY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ051bGwnOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sQm9vbGVhbihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG1heCA9IGRhdGEubGVuZ3RoO1xuXG4gIHJldHVybiAobWF4ID09PSA0ICYmIChkYXRhID09PSAndHJ1ZScgfHwgZGF0YSA9PT0gJ1RydWUnIHx8IGRhdGEgPT09ICdUUlVFJykpIHx8XG4gICAgICAgICAobWF4ID09PSA1ICYmIChkYXRhID09PSAnZmFsc2UnIHx8IGRhdGEgPT09ICdGYWxzZScgfHwgZGF0YSA9PT0gJ0ZBTFNFJykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sQm9vbGVhbihkYXRhKSB7XG4gIHJldHVybiBkYXRhID09PSAndHJ1ZScgfHxcbiAgICAgICAgIGRhdGEgPT09ICdUcnVlJyB8fFxuICAgICAgICAgZGF0YSA9PT0gJ1RSVUUnO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpib29sJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxCb29sZWFuLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxCb29sZWFuLFxuICBwcmVkaWNhdGU6IGlzQm9vbGVhbixcbiAgcmVwcmVzZW50OiB7XG4gICAgbG93ZXJjYXNlOiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgPyAndHJ1ZScgOiAnZmFsc2UnOyB9LFxuICAgIHVwcGVyY2FzZTogZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ID8gJ1RSVUUnIDogJ0ZBTFNFJzsgfSxcbiAgICBjYW1lbGNhc2U6IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCA/ICdUcnVlJyA6ICdGYWxzZSc7IH1cbiAgfSxcbiAgZGVmYXVsdFN0eWxlOiAnbG93ZXJjYXNlJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi4vY29tbW9uJyk7XG52YXIgVHlwZSAgID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5mdW5jdGlvbiBpc0hleENvZGUoYykge1xuICByZXR1cm4gKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHx8XG4gICAgICAgICAoKDB4NDEvKiBBICovIDw9IGMpICYmIChjIDw9IDB4NDYvKiBGICovKSkgfHxcbiAgICAgICAgICgoMHg2MS8qIGEgKi8gPD0gYykgJiYgKGMgPD0gMHg2Ni8qIGYgKi8pKTtcbn1cblxuZnVuY3Rpb24gaXNPY3RDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzNy8qIDcgKi8pKTtcbn1cblxuZnVuY3Rpb24gaXNEZWNDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxJbnRlZ2VyKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICB2YXIgbWF4ID0gZGF0YS5sZW5ndGgsXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBoYXNEaWdpdHMgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIGlmICghbWF4KSByZXR1cm4gZmFsc2U7XG5cbiAgY2ggPSBkYXRhW2luZGV4XTtcblxuICAvLyBzaWduXG4gIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICBjaCA9IGRhdGFbKytpbmRleF07XG4gIH1cblxuICBpZiAoY2ggPT09ICcwJykge1xuICAgIC8vIDBcbiAgICBpZiAoaW5kZXggKyAxID09PSBtYXgpIHJldHVybiB0cnVlO1xuICAgIGNoID0gZGF0YVsrK2luZGV4XTtcblxuICAgIC8vIGJhc2UgMiwgYmFzZSA4LCBiYXNlIDE2XG5cbiAgICBpZiAoY2ggPT09ICdiJykge1xuICAgICAgLy8gYmFzZSAyXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgY2ggPSBkYXRhW2luZGV4XTtcbiAgICAgICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoY2ggIT09ICcwJyAmJiBjaCAhPT0gJzEnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzRGlnaXRzICYmIGNoICE9PSAnXyc7XG4gICAgfVxuXG5cbiAgICBpZiAoY2ggPT09ICd4Jykge1xuICAgICAgLy8gYmFzZSAxNlxuICAgICAgaW5kZXgrKztcblxuICAgICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFpc0hleENvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNEaWdpdHMgJiYgY2ggIT09ICdfJztcbiAgICB9XG5cbiAgICAvLyBiYXNlIDhcbiAgICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgICBpZiAoIWlzT2N0Q29kZShkYXRhLmNoYXJDb2RlQXQoaW5kZXgpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0RpZ2l0cyAmJiBjaCAhPT0gJ18nO1xuICB9XG5cbiAgLy8gYmFzZSAxMCAoZXhjZXB0IDApIG9yIGJhc2UgNjBcblxuICAvLyB2YWx1ZSBzaG91bGQgbm90IHN0YXJ0IHdpdGggYF9gO1xuICBpZiAoY2ggPT09ICdfJykgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgIGlmIChjaCA9PT0gJzonKSBicmVhaztcbiAgICBpZiAoIWlzRGVjQ29kZShkYXRhLmNoYXJDb2RlQXQoaW5kZXgpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICB9XG5cbiAgLy8gU2hvdWxkIGhhdmUgZGlnaXRzIGFuZCBzaG91bGQgbm90IGVuZCB3aXRoIGBfYFxuICBpZiAoIWhhc0RpZ2l0cyB8fCBjaCA9PT0gJ18nKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gaWYgIWJhc2U2MCAtIGRvbmU7XG4gIGlmIChjaCAhPT0gJzonKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBiYXNlNjAgYWxtb3N0IG5vdCB1c2VkLCBubyBuZWVkcyB0byBvcHRpbWl6ZVxuICByZXR1cm4gL14oOlswLTVdP1swLTldKSskLy50ZXN0KGRhdGEuc2xpY2UoaW5kZXgpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEludGVnZXIoZGF0YSkge1xuICB2YXIgdmFsdWUgPSBkYXRhLCBzaWduID0gMSwgY2gsIGJhc2UsIGRpZ2l0cyA9IFtdO1xuXG4gIGlmICh2YWx1ZS5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9fL2csICcnKTtcbiAgfVxuXG4gIGNoID0gdmFsdWVbMF07XG5cbiAgaWYgKGNoID09PSAnLScgfHwgY2ggPT09ICcrJykge1xuICAgIGlmIChjaCA9PT0gJy0nKSBzaWduID0gLTE7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKTtcbiAgICBjaCA9IHZhbHVlWzBdO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnMCcpIHJldHVybiAwO1xuXG4gIGlmIChjaCA9PT0gJzAnKSB7XG4gICAgaWYgKHZhbHVlWzFdID09PSAnYicpIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIDIpO1xuICAgIGlmICh2YWx1ZVsxXSA9PT0gJ3gnKSByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLCAxNik7XG4gICAgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZSwgOCk7XG4gIH1cblxuICBpZiAodmFsdWUuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHZhbHVlLnNwbGl0KCc6JykuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgZGlnaXRzLnVuc2hpZnQocGFyc2VJbnQodiwgMTApKTtcbiAgICB9KTtcblxuICAgIHZhbHVlID0gMDtcbiAgICBiYXNlID0gMTtcblxuICAgIGRpZ2l0cy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICB2YWx1ZSArPSAoZCAqIGJhc2UpO1xuICAgICAgYmFzZSAqPSA2MDtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWduICogdmFsdWU7XG5cbiAgfVxuXG4gIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUsIDEwKTtcbn1cblxuZnVuY3Rpb24gaXNJbnRlZ2VyKG9iamVjdCkge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiZcbiAgICAgICAgIChvYmplY3QgJSAxID09PSAwICYmICFjb21tb24uaXNOZWdhdGl2ZVplcm8ob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmludCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sSW50ZWdlcixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sSW50ZWdlcixcbiAgcHJlZGljYXRlOiBpc0ludGVnZXIsXG4gIHJlcHJlc2VudDoge1xuICAgIGJpbmFyeTogICAgICBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogPj0gMCA/ICcwYicgKyBvYmoudG9TdHJpbmcoMikgOiAnLTBiJyArIG9iai50b1N0cmluZygyKS5zbGljZSgxKTsgfSxcbiAgICBvY3RhbDogICAgICAgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMCcgICsgb2JqLnRvU3RyaW5nKDgpIDogJy0wJyAgKyBvYmoudG9TdHJpbmcoOCkuc2xpY2UoMSk7IH0sXG4gICAgZGVjaW1hbDogICAgIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai50b1N0cmluZygxMCk7IH0sXG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIGhleGFkZWNpbWFsOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogPj0gMCA/ICcweCcgKyBvYmoudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgOiAgJy0weCcgKyBvYmoudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkuc2xpY2UoMSk7IH1cbiAgfSxcbiAgZGVmYXVsdFN0eWxlOiAnZGVjaW1hbCcsXG4gIHN0eWxlQWxpYXNlczoge1xuICAgIGJpbmFyeTogICAgICBbIDIsICAnYmluJyBdLFxuICAgIG9jdGFsOiAgICAgICBbIDgsICAnb2N0JyBdLFxuICAgIGRlY2ltYWw6ICAgICBbIDEwLCAnZGVjJyBdLFxuICAgIGhleGFkZWNpbWFsOiBbIDE2LCAnaGV4JyBdXG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4uL2NvbW1vbicpO1xudmFyIFR5cGUgICA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxudmFyIFlBTUxfRkxPQVRfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gIC8vIDIuNWU0LCAyLjUgYW5kIGludGVnZXJzXG4gICdeKD86Wy0rXT8oPzowfFsxLTldWzAtOV9dKikoPzpcXFxcLlswLTlfXSopPyg/OltlRV1bLStdP1swLTldKyk/JyArXG4gIC8vIC4yZTQsIC4yXG4gIC8vIHNwZWNpYWwgY2FzZSwgc2VlbXMgbm90IGZyb20gc3BlY1xuICAnfFxcXFwuWzAtOV9dKyg/OltlRV1bLStdP1swLTldKyk/JyArXG4gIC8vIDIwOjU5XG4gICd8Wy0rXT9bMC05XVswLTlfXSooPzo6WzAtNV0/WzAtOV0pK1xcXFwuWzAtOV9dKicgK1xuICAvLyAuaW5mXG4gICd8Wy0rXT9cXFxcLig/OmluZnxJbmZ8SU5GKScgK1xuICAvLyAubmFuXG4gICd8XFxcXC4oPzpuYW58TmFOfE5BTikpJCcpO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEZsb2F0KGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoIVlBTUxfRkxPQVRfUEFUVEVSTi50ZXN0KGRhdGEpIHx8XG4gICAgICAvLyBRdWljayBoYWNrIHRvIG5vdCBhbGxvdyBpbnRlZ2VycyBlbmQgd2l0aCBgX2BcbiAgICAgIC8vIFByb2JhYmx5IHNob3VsZCB1cGRhdGUgcmVnZXhwICYgY2hlY2sgc3BlZWRcbiAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAxXSA9PT0gJ18nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxGbG9hdChkYXRhKSB7XG4gIHZhciB2YWx1ZSwgc2lnbiwgYmFzZSwgZGlnaXRzO1xuXG4gIHZhbHVlICA9IGRhdGEucmVwbGFjZSgvXy9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgc2lnbiAgID0gdmFsdWVbMF0gPT09ICctJyA/IC0xIDogMTtcbiAgZGlnaXRzID0gW107XG5cbiAgaWYgKCcrLScuaW5kZXhPZih2YWx1ZVswXSkgPj0gMCkge1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBpZiAodmFsdWUgPT09ICcuaW5mJykge1xuICAgIHJldHVybiAoc2lnbiA9PT0gMSkgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJy5uYW4nKSB7XG4gICAgcmV0dXJuIE5hTjtcblxuICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJzonKSA+PSAwKSB7XG4gICAgdmFsdWUuc3BsaXQoJzonKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBkaWdpdHMudW5zaGlmdChwYXJzZUZsb2F0KHYsIDEwKSk7XG4gICAgfSk7XG5cbiAgICB2YWx1ZSA9IDAuMDtcbiAgICBiYXNlID0gMTtcblxuICAgIGRpZ2l0cy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICB2YWx1ZSArPSBkICogYmFzZTtcbiAgICAgIGJhc2UgKj0gNjA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbiAqIHZhbHVlO1xuXG4gIH1cbiAgcmV0dXJuIHNpZ24gKiBwYXJzZUZsb2F0KHZhbHVlLCAxMCk7XG59XG5cblxudmFyIFNDSUVOVElGSUNfV0lUSE9VVF9ET1QgPSAvXlstK10/WzAtOV0rZS87XG5cbmZ1bmN0aW9uIHJlcHJlc2VudFlhbWxGbG9hdChvYmplY3QsIHN0eWxlKSB7XG4gIHZhciByZXM7XG5cbiAgaWYgKGlzTmFOKG9iamVjdCkpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICBjYXNlICdsb3dlcmNhc2UnOiByZXR1cm4gJy5uYW4nO1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzogcmV0dXJuICcuTkFOJztcbiAgICAgIGNhc2UgJ2NhbWVsY2FzZSc6IHJldHVybiAnLk5hTic7XG4gICAgfVxuICB9IGVsc2UgaWYgKE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA9PT0gb2JqZWN0KSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgY2FzZSAnbG93ZXJjYXNlJzogcmV0dXJuICcuaW5mJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLklORic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy5JbmYnO1xuICAgIH1cbiAgfSBlbHNlIGlmIChOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgPT09IG9iamVjdCkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6IHJldHVybiAnLS5pbmYnO1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzogcmV0dXJuICctLklORic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy0uSW5mJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpIHtcbiAgICByZXR1cm4gJy0wLjAnO1xuICB9XG5cbiAgcmVzID0gb2JqZWN0LnRvU3RyaW5nKDEwKTtcblxuICAvLyBKUyBzdHJpbmdpZmllciBjYW4gYnVpbGQgc2NpZW50aWZpYyBmb3JtYXQgd2l0aG91dCBkb3RzOiA1ZS0xMDAsXG4gIC8vIHdoaWxlIFlBTUwgcmVxdXJlcyBkb3Q6IDUuZS0xMDAuIEZpeCBpdCB3aXRoIHNpbXBsZSBoYWNrXG5cbiAgcmV0dXJuIFNDSUVOVElGSUNfV0lUSE9VVF9ET1QudGVzdChyZXMpID8gcmVzLnJlcGxhY2UoJ2UnLCAnLmUnKSA6IHJlcztcbn1cblxuZnVuY3Rpb24gaXNGbG9hdChvYmplY3QpIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgTnVtYmVyXScpICYmXG4gICAgICAgICAob2JqZWN0ICUgMSAhPT0gMCB8fCBjb21tb24uaXNOZWdhdGl2ZVplcm8ob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmZsb2F0Jywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxGbG9hdCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sRmxvYXQsXG4gIHByZWRpY2F0ZTogaXNGbG9hdCxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRZYW1sRmxvYXQsXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuIiwgIi8vIFN0YW5kYXJkIFlBTUwncyBKU09OIHNjaGVtYS5cbi8vIGh0dHA6Ly93d3cueWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2lkMjgwMzIzMVxuLy9cbi8vIE5PVEU6IEpTLVlBTUwgZG9lcyBub3Qgc3VwcG9ydCBzY2hlbWEtc3BlY2lmaWMgdGFnIHJlc29sdXRpb24gcmVzdHJpY3Rpb25zLlxuLy8gU28sIHRoaXMgc2NoZW1hIGlzIG5vdCBzdWNoIHN0cmljdCBhcyBkZWZpbmVkIGluIHRoZSBZQU1MIHNwZWNpZmljYXRpb24uXG4vLyBJdCBhbGxvd3MgbnVtYmVycyBpbiBiaW5hcnkgbm90YWlvbiwgdXNlIGBOdWxsYCBhbmQgYE5VTExgIGFzIGBudWxsYCwgZXRjLlxuXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi4vc2NoZW1hJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU2NoZW1hKHtcbiAgaW5jbHVkZTogW1xuICAgIHJlcXVpcmUoJy4vZmFpbHNhZmUnKVxuICBdLFxuICBpbXBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvbnVsbCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvYm9vbCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvaW50JyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9mbG9hdCcpXG4gIF1cbn0pO1xuIiwgIi8vIFN0YW5kYXJkIFlBTUwncyBDb3JlIHNjaGVtYS5cbi8vIGh0dHA6Ly93d3cueWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2lkMjgwNDkyM1xuLy9cbi8vIE5PVEU6IEpTLVlBTUwgZG9lcyBub3Qgc3VwcG9ydCBzY2hlbWEtc3BlY2lmaWMgdGFnIHJlc29sdXRpb24gcmVzdHJpY3Rpb25zLlxuLy8gU28sIENvcmUgc2NoZW1hIGhhcyBubyBkaXN0aW5jdGlvbnMgZnJvbSBKU09OIHNjaGVtYSBpcyBKUy1ZQU1MLlxuXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi4vc2NoZW1hJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU2NoZW1hKHtcbiAgaW5jbHVkZTogW1xuICAgIHJlcXVpcmUoJy4vanNvbicpXG4gIF1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBZQU1MX0RBVEVfUkVHRVhQID0gbmV3IFJlZ0V4cChcbiAgJ14oWzAtOV1bMC05XVswLTldWzAtOV0pJyAgICAgICAgICArIC8vIFsxXSB5ZWFyXG4gICctKFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbMl0gbW9udGhcbiAgJy0oWzAtOV1bMC05XSkkJyk7ICAgICAgICAgICAgICAgICAgIC8vIFszXSBkYXlcblxudmFyIFlBTUxfVElNRVNUQU1QX1JFR0VYUCA9IG5ldyBSZWdFeHAoXG4gICdeKFswLTldWzAtOV1bMC05XVswLTldKScgICAgICAgICAgKyAvLyBbMV0geWVhclxuICAnLShbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICsgLy8gWzJdIG1vbnRoXG4gICctKFswLTldWzAtOV0/KScgICAgICAgICAgICAgICAgICAgKyAvLyBbM10gZGF5XG4gICcoPzpbVHRdfFsgXFxcXHRdKyknICAgICAgICAgICAgICAgICArIC8vIC4uLlxuICAnKFswLTldWzAtOV0/KScgICAgICAgICAgICAgICAgICAgICsgLy8gWzRdIGhvdXJcbiAgJzooWzAtOV1bMC05XSknICAgICAgICAgICAgICAgICAgICArIC8vIFs1XSBtaW51dGVcbiAgJzooWzAtOV1bMC05XSknICAgICAgICAgICAgICAgICAgICArIC8vIFs2XSBzZWNvbmRcbiAgJyg/OlxcXFwuKFswLTldKikpPycgICAgICAgICAgICAgICAgICsgLy8gWzddIGZyYWN0aW9uXG4gICcoPzpbIFxcXFx0XSooWnwoWy0rXSkoWzAtOV1bMC05XT8pJyArIC8vIFs4XSB0eiBbOV0gdHpfc2lnbiBbMTBdIHR6X2hvdXJcbiAgJyg/OjooWzAtOV1bMC05XSkpPykpPyQnKTsgICAgICAgICAgIC8vIFsxMV0gdHpfbWludXRlXG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sVGltZXN0YW1wKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKFlBTUxfREFURV9SRUdFWFAuZXhlYyhkYXRhKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGlmIChZQU1MX1RJTUVTVEFNUF9SRUdFWFAuZXhlYyhkYXRhKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFRpbWVzdGFtcChkYXRhKSB7XG4gIHZhciBtYXRjaCwgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uID0gMCxcbiAgICAgIGRlbHRhID0gbnVsbCwgdHpfaG91ciwgdHpfbWludXRlLCBkYXRlO1xuXG4gIG1hdGNoID0gWUFNTF9EQVRFX1JFR0VYUC5leGVjKGRhdGEpO1xuICBpZiAobWF0Y2ggPT09IG51bGwpIG1hdGNoID0gWUFNTF9USU1FU1RBTVBfUkVHRVhQLmV4ZWMoZGF0YSk7XG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ0RhdGUgcmVzb2x2ZSBlcnJvcicpO1xuXG4gIC8vIG1hdGNoOiBbMV0geWVhciBbMl0gbW9udGggWzNdIGRheVxuXG4gIHllYXIgPSArKG1hdGNoWzFdKTtcbiAgbW9udGggPSArKG1hdGNoWzJdKSAtIDE7IC8vIEpTIG1vbnRoIHN0YXJ0cyB3aXRoIDBcbiAgZGF5ID0gKyhtYXRjaFszXSk7XG5cbiAgaWYgKCFtYXRjaFs0XSkgeyAvLyBubyBob3VyXG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXkpKTtcbiAgfVxuXG4gIC8vIG1hdGNoOiBbNF0gaG91ciBbNV0gbWludXRlIFs2XSBzZWNvbmQgWzddIGZyYWN0aW9uXG5cbiAgaG91ciA9ICsobWF0Y2hbNF0pO1xuICBtaW51dGUgPSArKG1hdGNoWzVdKTtcbiAgc2Vjb25kID0gKyhtYXRjaFs2XSk7XG5cbiAgaWYgKG1hdGNoWzddKSB7XG4gICAgZnJhY3Rpb24gPSBtYXRjaFs3XS5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAoZnJhY3Rpb24ubGVuZ3RoIDwgMykgeyAvLyBtaWxsaS1zZWNvbmRzXG4gICAgICBmcmFjdGlvbiArPSAnMCc7XG4gICAgfVxuICAgIGZyYWN0aW9uID0gK2ZyYWN0aW9uO1xuICB9XG5cbiAgLy8gbWF0Y2g6IFs4XSB0eiBbOV0gdHpfc2lnbiBbMTBdIHR6X2hvdXIgWzExXSB0el9taW51dGVcblxuICBpZiAobWF0Y2hbOV0pIHtcbiAgICB0el9ob3VyID0gKyhtYXRjaFsxMF0pO1xuICAgIHR6X21pbnV0ZSA9ICsobWF0Y2hbMTFdIHx8IDApO1xuICAgIGRlbHRhID0gKHR6X2hvdXIgKiA2MCArIHR6X21pbnV0ZSkgKiA2MDAwMDsgLy8gZGVsdGEgaW4gbWlsaS1zZWNvbmRzXG4gICAgaWYgKG1hdGNoWzldID09PSAnLScpIGRlbHRhID0gLWRlbHRhO1xuICB9XG5cbiAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbikpO1xuXG4gIGlmIChkZWx0YSkgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpIC0gZGVsdGEpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRZYW1sVGltZXN0YW1wKG9iamVjdCAvKiwgc3R5bGUqLykge1xuICByZXR1cm4gb2JqZWN0LnRvSVNPU3RyaW5nKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnRpbWVzdGFtcCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sVGltZXN0YW1wLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxUaW1lc3RhbXAsXG4gIGluc3RhbmNlT2Y6IERhdGUsXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbFRpbWVzdGFtcFxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxNZXJnZShkYXRhKSB7XG4gIHJldHVybiBkYXRhID09PSAnPDwnIHx8IGRhdGEgPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm1lcmdlJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxNZXJnZVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UqL1xuXG52YXIgTm9kZUJ1ZmZlcjtcblxudHJ5IHtcbiAgLy8gQSB0cmljayBmb3IgYnJvd3NlcmlmaWVkIHZlcnNpb24sIHRvIG5vdCBpbmNsdWRlIGBCdWZmZXJgIHNoaW1cbiAgdmFyIF9yZXF1aXJlID0gcmVxdWlyZTtcbiAgTm9kZUJ1ZmZlciA9IF9yZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG59IGNhdGNoIChfXykge31cblxudmFyIFR5cGUgICAgICAgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cblxuLy8gWyA2NCwgNjUsIDY2IF0gLT4gWyBwYWRkaW5nLCBDUiwgTEYgXVxudmFyIEJBU0U2NF9NQVAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cXG5cXHInO1xuXG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sQmluYXJ5KGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICB2YXIgY29kZSwgaWR4LCBiaXRsZW4gPSAwLCBtYXggPSBkYXRhLmxlbmd0aCwgbWFwID0gQkFTRTY0X01BUDtcblxuICAvLyBDb252ZXJ0IG9uZSBieSBvbmUuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGNvZGUgPSBtYXAuaW5kZXhPZihkYXRhLmNoYXJBdChpZHgpKTtcblxuICAgIC8vIFNraXAgQ1IvTEZcbiAgICBpZiAoY29kZSA+IDY0KSBjb250aW51ZTtcblxuICAgIC8vIEZhaWwgb24gaWxsZWdhbCBjaGFyYWN0ZXJzXG4gICAgaWYgKGNvZGUgPCAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBiaXRsZW4gKz0gNjtcbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBhbnkgYml0cyBsZWZ0LCBzb3VyY2Ugd2FzIGNvcnJ1cHRlZFxuICByZXR1cm4gKGJpdGxlbiAlIDgpID09PSAwO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sQmluYXJ5KGRhdGEpIHtcbiAgdmFyIGlkeCwgdGFpbGJpdHMsXG4gICAgICBpbnB1dCA9IGRhdGEucmVwbGFjZSgvW1xcclxcbj1dL2csICcnKSwgLy8gcmVtb3ZlIENSL0xGICYgcGFkZGluZyB0byBzaW1wbGlmeSBzY2FuXG4gICAgICBtYXggPSBpbnB1dC5sZW5ndGgsXG4gICAgICBtYXAgPSBCQVNFNjRfTUFQLFxuICAgICAgYml0cyA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICAvLyBDb2xsZWN0IGJ5IDYqNCBiaXRzICgzIGJ5dGVzKVxuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgNCA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxNikgJiAweEZGKTtcbiAgICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDgpICYgMHhGRik7XG4gICAgICByZXN1bHQucHVzaChiaXRzICYgMHhGRik7XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDYpIHwgbWFwLmluZGV4T2YoaW5wdXQuY2hhckF0KGlkeCkpO1xuICB9XG5cbiAgLy8gRHVtcCB0YWlsXG5cbiAgdGFpbGJpdHMgPSAobWF4ICUgNCkgKiA2O1xuXG4gIGlmICh0YWlsYml0cyA9PT0gMCkge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDE2KSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDgpICYgMHhGRik7XG4gICAgcmVzdWx0LnB1c2goYml0cyAmIDB4RkYpO1xuICB9IGVsc2UgaWYgKHRhaWxiaXRzID09PSAxOCkge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDEwKSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDIpICYgMHhGRik7XG4gIH0gZWxzZSBpZiAodGFpbGJpdHMgPT09IDEyKSB7XG4gICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gNCkgJiAweEZGKTtcbiAgfVxuXG4gIC8vIFdyYXAgaW50byBCdWZmZXIgZm9yIE5vZGVKUyBhbmQgbGVhdmUgQXJyYXkgZm9yIGJyb3dzZXJcbiAgaWYgKE5vZGVCdWZmZXIpIHtcbiAgICAvLyBTdXBwb3J0IG5vZGUgNi4rIEJ1ZmZlciBBUEkgd2hlbiBhdmFpbGFibGVcbiAgICByZXR1cm4gTm9kZUJ1ZmZlci5mcm9tID8gTm9kZUJ1ZmZlci5mcm9tKHJlc3VsdCkgOiBuZXcgTm9kZUJ1ZmZlcihyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50WWFtbEJpbmFyeShvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgdmFyIHJlc3VsdCA9ICcnLCBiaXRzID0gMCwgaWR4LCB0YWlsLFxuICAgICAgbWF4ID0gb2JqZWN0Lmxlbmd0aCxcbiAgICAgIG1hcCA9IEJBU0U2NF9NQVA7XG5cbiAgLy8gQ29udmVydCBldmVyeSB0aHJlZSBieXRlcyB0byA0IEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgZm9yIChpZHggPSAwOyBpZHggPCBtYXg7IGlkeCsrKSB7XG4gICAgaWYgKChpZHggJSAzID09PSAwKSAmJiBpZHgpIHtcbiAgICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTgpICYgMHgzRl07XG4gICAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDEyKSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA2KSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFtiaXRzICYgMHgzRl07XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDgpICsgb2JqZWN0W2lkeF07XG4gIH1cblxuICAvLyBEdW1wIHRhaWxcblxuICB0YWlsID0gbWF4ICUgMztcblxuICBpZiAodGFpbCA9PT0gMCkge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTgpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDYpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFtiaXRzICYgMHgzRl07XG4gIH0gZWxzZSBpZiAodGFpbCA9PT0gMikge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTApICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA0KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPDwgMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgfSBlbHNlIGlmICh0YWlsID09PSAxKSB7XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAyKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPDwgNCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQmluYXJ5KG9iamVjdCkge1xuICByZXR1cm4gTm9kZUJ1ZmZlciAmJiBOb2RlQnVmZmVyLmlzQnVmZmVyKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmJpbmFyeScsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sQmluYXJ5LFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxCaW5hcnksXG4gIHByZWRpY2F0ZTogaXNCaW5hcnksXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbEJpbmFyeVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxudmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX3RvU3RyaW5nICAgICAgID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxPbWFwKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBvYmplY3RLZXlzID0gW10sIGluZGV4LCBsZW5ndGgsIHBhaXIsIHBhaXJLZXksIHBhaXJIYXNLZXksXG4gICAgICBvYmplY3QgPSBkYXRhO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuICAgIHBhaXJIYXNLZXkgPSBmYWxzZTtcblxuICAgIGlmIChfdG9TdHJpbmcuY2FsbChwYWlyKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAocGFpcktleSBpbiBwYWlyKSB7XG4gICAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwocGFpciwgcGFpcktleSkpIHtcbiAgICAgICAgaWYgKCFwYWlySGFzS2V5KSBwYWlySGFzS2V5ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYWlySGFzS2V5KSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAob2JqZWN0S2V5cy5pbmRleE9mKHBhaXJLZXkpID09PSAtMSkgb2JqZWN0S2V5cy5wdXNoKHBhaXJLZXkpO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxPbWFwKGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm9tYXAnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sT21hcCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sT21hcFxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxudmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sUGFpcnMoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGluZGV4LCBsZW5ndGgsIHBhaXIsIGtleXMsIHJlc3VsdCxcbiAgICAgIG9iamVjdCA9IGRhdGE7XG5cbiAgcmVzdWx0ID0gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAgaWYgKF90b1N0cmluZy5jYWxsKHBhaXIpICE9PSAnW29iamVjdCBPYmplY3RdJykgcmV0dXJuIGZhbHNlO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHBhaXIpO1xuXG4gICAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXN1bHRbaW5kZXhdID0gWyBrZXlzWzBdLCBwYWlyW2tleXNbMF1dIF07XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFBhaXJzKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBbXTtcblxuICB2YXIgaW5kZXgsIGxlbmd0aCwgcGFpciwga2V5cywgcmVzdWx0LFxuICAgICAgb2JqZWN0ID0gZGF0YTtcblxuICByZXN1bHQgPSBuZXcgQXJyYXkob2JqZWN0Lmxlbmd0aCk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpciA9IG9iamVjdFtpbmRleF07XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMocGFpcik7XG5cbiAgICByZXN1bHRbaW5kZXhdID0gWyBrZXlzWzBdLCBwYWlyW2tleXNbMF1dIF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpwYWlycycsIHtcbiAga2luZDogJ3NlcXVlbmNlJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxQYWlycyxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sUGFpcnNcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFNldChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIga2V5LCBvYmplY3QgPSBkYXRhO1xuXG4gIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIGlmIChvYmplY3Rba2V5XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sU2V0KGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnNldCcsIHtcbiAga2luZDogJ21hcHBpbmcnLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbFNldCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sU2V0XG59KTtcbiIsICIvLyBKUy1ZQU1MJ3MgZGVmYXVsdCBzY2hlbWEgZm9yIGBzYWZlTG9hZGAgZnVuY3Rpb24uXG4vLyBJdCBpcyBub3QgZGVzY3JpYmVkIGluIHRoZSBZQU1MIHNwZWNpZmljYXRpb24uXG4vL1xuLy8gVGhpcyBzY2hlbWEgaXMgYmFzZWQgb24gc3RhbmRhcmQgWUFNTCdzIENvcmUgc2NoZW1hIGFuZCBpbmNsdWRlcyBtb3N0IG9mXG4vLyBleHRyYSB0eXBlcyBkZXNjcmliZWQgYXQgWUFNTCB0YWcgcmVwb3NpdG9yeS4gKGh0dHA6Ly95YW1sLm9yZy90eXBlLylcblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2NvcmUnKVxuICBdLFxuICBpbXBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvdGltZXN0YW1wJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9tZXJnZScpXG4gIF0sXG4gIGV4cGxpY2l0OiBbXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9iaW5hcnknKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL29tYXAnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL3BhaXJzJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9zZXQnKVxuICBdXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vLi4vdHlwZScpO1xuXG5mdW5jdGlvbiByZXNvbHZlSmF2YXNjcmlwdFVuZGVmaW5lZCgpIHtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdEphdmFzY3JpcHRVbmRlZmluZWQoKSB7XG4gIC8qZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkKi9cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50SmF2YXNjcmlwdFVuZGVmaW5lZCgpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpqcy91bmRlZmluZWQnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlSmF2YXNjcmlwdFVuZGVmaW5lZCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RKYXZhc2NyaXB0VW5kZWZpbmVkLFxuICBwcmVkaWNhdGU6IGlzVW5kZWZpbmVkLFxuICByZXByZXNlbnQ6IHJlcHJlc2VudEphdmFzY3JpcHRVbmRlZmluZWRcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi8uLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVKYXZhc2NyaXB0UmVnRXhwKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHJlZ2V4cCA9IGRhdGEsXG4gICAgICB0YWlsICAgPSAvXFwvKFtnaW1dKikkLy5leGVjKGRhdGEpLFxuICAgICAgbW9kaWZpZXJzID0gJyc7XG5cbiAgLy8gaWYgcmVnZXhwIHN0YXJ0cyB3aXRoICcvJyBpdCBjYW4gaGF2ZSBtb2RpZmllcnMgYW5kIG11c3QgYmUgcHJvcGVybHkgY2xvc2VkXG4gIC8vIGAvZm9vL2dpbWAgLSBtb2RpZmllcnMgdGFpbCBjYW4gYmUgbWF4aW11bSAzIGNoYXJzXG4gIGlmIChyZWdleHBbMF0gPT09ICcvJykge1xuICAgIGlmICh0YWlsKSBtb2RpZmllcnMgPSB0YWlsWzFdO1xuXG4gICAgaWYgKG1vZGlmaWVycy5sZW5ndGggPiAzKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gaWYgZXhwcmVzc2lvbiBzdGFydHMgd2l0aCAvLCBpcyBzaG91bGQgYmUgcHJvcGVybHkgdGVybWluYXRlZFxuICAgIGlmIChyZWdleHBbcmVnZXhwLmxlbmd0aCAtIG1vZGlmaWVycy5sZW5ndGggLSAxXSAhPT0gJy8nKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SmF2YXNjcmlwdFJlZ0V4cChkYXRhKSB7XG4gIHZhciByZWdleHAgPSBkYXRhLFxuICAgICAgdGFpbCAgID0gL1xcLyhbZ2ltXSopJC8uZXhlYyhkYXRhKSxcbiAgICAgIG1vZGlmaWVycyA9ICcnO1xuXG4gIC8vIGAvZm9vL2dpbWAgLSB0YWlsIGNhbiBiZSBtYXhpbXVtIDQgY2hhcnNcbiAgaWYgKHJlZ2V4cFswXSA9PT0gJy8nKSB7XG4gICAgaWYgKHRhaWwpIG1vZGlmaWVycyA9IHRhaWxbMV07XG4gICAgcmVnZXhwID0gcmVnZXhwLnNsaWNlKDEsIHJlZ2V4cC5sZW5ndGggLSBtb2RpZmllcnMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleHAsIG1vZGlmaWVycyk7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudEphdmFzY3JpcHRSZWdFeHAob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHZhciByZXN1bHQgPSAnLycgKyBvYmplY3Quc291cmNlICsgJy8nO1xuXG4gIGlmIChvYmplY3QuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAob2JqZWN0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKG9iamVjdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpqcy9yZWdleHAnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlSmF2YXNjcmlwdFJlZ0V4cCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RKYXZhc2NyaXB0UmVnRXhwLFxuICBwcmVkaWNhdGU6IGlzUmVnRXhwLFxuICByZXByZXNlbnQ6IHJlcHJlc2VudEphdmFzY3JpcHRSZWdFeHBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGVzcHJpbWE7XG5cbi8vIEJyb3dzZXJpZmllZCB2ZXJzaW9uIGRvZXMgbm90IGhhdmUgZXNwcmltYVxuLy9cbi8vIDEuIEZvciBub2RlLmpzIGp1c3QgcmVxdWlyZSBtb2R1bGUgYXMgZGVwc1xuLy8gMi4gRm9yIGJyb3dzZXIgdHJ5IHRvIHJlcXVpcmUgbXVkdWxlIHZpYSBleHRlcm5hbCBBTUQgc3lzdGVtLlxuLy8gICAgSWYgbm90IGZvdW5kIC0gdHJ5IHRvIGZhbGxiYWNrIHRvIHdpbmRvdy5lc3ByaW1hLiBJZiBub3Rcbi8vICAgIGZvdW5kIHRvbyAtIHRoZW4gZmFpbCB0byBwYXJzZS5cbi8vXG50cnkge1xuICAvLyB3b3JrYXJvdW5kIHRvIGV4Y2x1ZGUgcGFja2FnZSBmcm9tIGJyb3dzZXJpZnkgbGlzdC5cbiAgdmFyIF9yZXF1aXJlID0gcmVxdWlyZTtcbiAgZXNwcmltYSA9IF9yZXF1aXJlKCdlc3ByaW1hJyk7XG59IGNhdGNoIChfKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuICAvKiBnbG9iYWwgd2luZG93ICovXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZXNwcmltYSA9IHdpbmRvdy5lc3ByaW1hO1xufVxuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uLy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUphdmFzY3JpcHRGdW5jdGlvbihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICB2YXIgc291cmNlID0gJygnICsgZGF0YSArICcpJyxcbiAgICAgICAgYXN0ICAgID0gZXNwcmltYS5wYXJzZShzb3VyY2UsIHsgcmFuZ2U6IHRydWUgfSk7XG5cbiAgICBpZiAoYXN0LnR5cGUgICAgICAgICAgICAgICAgICAgICE9PSAnUHJvZ3JhbScgICAgICAgICAgICAgfHxcbiAgICAgICAgYXN0LmJvZHkubGVuZ3RoICAgICAgICAgICAgICE9PSAxICAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgYXN0LmJvZHlbMF0udHlwZSAgICAgICAgICAgICE9PSAnRXhwcmVzc2lvblN0YXRlbWVudCcgfHxcbiAgICAgICAgKGFzdC5ib2R5WzBdLmV4cHJlc3Npb24udHlwZSAhPT0gJ0Fycm93RnVuY3Rpb25FeHByZXNzaW9uJyAmJlxuICAgICAgICAgIGFzdC5ib2R5WzBdLmV4cHJlc3Npb24udHlwZSAhPT0gJ0Z1bmN0aW9uRXhwcmVzc2lvbicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RKYXZhc2NyaXB0RnVuY3Rpb24oZGF0YSkge1xuICAvKmpzbGludCBldmlsOnRydWUqL1xuXG4gIHZhciBzb3VyY2UgPSAnKCcgKyBkYXRhICsgJyknLFxuICAgICAgYXN0ICAgID0gZXNwcmltYS5wYXJzZShzb3VyY2UsIHsgcmFuZ2U6IHRydWUgfSksXG4gICAgICBwYXJhbXMgPSBbXSxcbiAgICAgIGJvZHk7XG5cbiAgaWYgKGFzdC50eXBlICAgICAgICAgICAgICAgICAgICAhPT0gJ1Byb2dyYW0nICAgICAgICAgICAgIHx8XG4gICAgICBhc3QuYm9keS5sZW5ndGggICAgICAgICAgICAgIT09IDEgICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgYXN0LmJvZHlbMF0udHlwZSAgICAgICAgICAgICE9PSAnRXhwcmVzc2lvblN0YXRlbWVudCcgfHxcbiAgICAgIChhc3QuYm9keVswXS5leHByZXNzaW9uLnR5cGUgIT09ICdBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicgJiZcbiAgICAgICAgYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi50eXBlICE9PSAnRnVuY3Rpb25FeHByZXNzaW9uJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZXNvbHZlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBhc3QuYm9keVswXS5leHByZXNzaW9uLnBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHBhcmFtcy5wdXNoKHBhcmFtLm5hbWUpO1xuICB9KTtcblxuICBib2R5ID0gYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi5ib2R5LnJhbmdlO1xuXG4gIC8vIEVzcHJpbWEncyByYW5nZXMgaW5jbHVkZSB0aGUgZmlyc3QgJ3snIGFuZCB0aGUgbGFzdCAnfScgY2hhcmFjdGVycyBvblxuICAvLyBmdW5jdGlvbiBleHByZXNzaW9ucy4gU28gY3V0IHRoZW0gb3V0LlxuICBpZiAoYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi5ib2R5LnR5cGUgPT09ICdCbG9ja1N0YXRlbWVudCcpIHtcbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jKi9cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKHBhcmFtcywgc291cmNlLnNsaWNlKGJvZHlbMF0gKyAxLCBib2R5WzFdIC0gMSkpO1xuICB9XG4gIC8vIEVTNiBhcnJvdyBmdW5jdGlvbnMgY2FuIG9taXQgdGhlIEJsb2NrU3RhdGVtZW50LiBJbiB0aGF0IGNhc2UsIGp1c3QgcmV0dXJuXG4gIC8vIHRoZSBib2R5LlxuICAvKmVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jKi9cbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihwYXJhbXMsICdyZXR1cm4gJyArIHNvdXJjZS5zbGljZShib2R5WzBdLCBib2R5WzFdKSk7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudEphdmFzY3JpcHRGdW5jdGlvbihvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmpzL2Z1bmN0aW9uJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZUphdmFzY3JpcHRGdW5jdGlvbixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RKYXZhc2NyaXB0RnVuY3Rpb24sXG4gIHByZWRpY2F0ZTogaXNGdW5jdGlvbixcbiAgcmVwcmVzZW50OiByZXByZXNlbnRKYXZhc2NyaXB0RnVuY3Rpb25cbn0pO1xuIiwgIi8vIEpTLVlBTUwncyBkZWZhdWx0IHNjaGVtYSBmb3IgYGxvYWRgIGZ1bmN0aW9uLlxuLy8gSXQgaXMgbm90IGRlc2NyaWJlZCBpbiB0aGUgWUFNTCBzcGVjaWZpY2F0aW9uLlxuLy9cbi8vIFRoaXMgc2NoZW1hIGlzIGJhc2VkIG9uIEpTLVlBTUwncyBkZWZhdWx0IHNhZmUgc2NoZW1hIGFuZCBpbmNsdWRlc1xuLy8gSmF2YVNjcmlwdC1zcGVjaWZpYyB0eXBlczogISFqcy91bmRlZmluZWQsICEhanMvcmVnZXhwIGFuZCAhIWpzL2Z1bmN0aW9uLlxuLy9cbi8vIEFsc28gdGhpcyBzY2hlbWEgaXMgdXNlZCBhcyBkZWZhdWx0IGJhc2Ugc2NoZW1hIGF0IGBTY2hlbWEuY3JlYXRlYCBmdW5jdGlvbi5cblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NoZW1hLkRFRkFVTFQgPSBuZXcgU2NoZW1hKHtcbiAgaW5jbHVkZTogW1xuICAgIHJlcXVpcmUoJy4vZGVmYXVsdF9zYWZlJylcbiAgXSxcbiAgZXhwbGljaXQ6IFtcbiAgICByZXF1aXJlKCcuLi90eXBlL2pzL3VuZGVmaW5lZCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvanMvcmVnZXhwJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9qcy9mdW5jdGlvbicpXG4gIF1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuLG5vLXVzZS1iZWZvcmUtZGVmaW5lKi9cblxudmFyIGNvbW1vbiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIFlBTUxFeGNlcHRpb24gICAgICAgPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xudmFyIE1hcmsgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL21hcmsnKTtcbnZhciBERUZBVUxUX1NBRkVfU0NIRU1BID0gcmVxdWlyZSgnLi9zY2hlbWEvZGVmYXVsdF9zYWZlJyk7XG52YXIgREVGQVVMVF9GVUxMX1NDSEVNQSA9IHJlcXVpcmUoJy4vc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xuXG5cbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5cbnZhciBDT05URVhUX0ZMT1dfSU4gICA9IDE7XG52YXIgQ09OVEVYVF9GTE9XX09VVCAgPSAyO1xudmFyIENPTlRFWFRfQkxPQ0tfSU4gID0gMztcbnZhciBDT05URVhUX0JMT0NLX09VVCA9IDQ7XG5cblxudmFyIENIT01QSU5HX0NMSVAgID0gMTtcbnZhciBDSE9NUElOR19TVFJJUCA9IDI7XG52YXIgQ0hPTVBJTkdfS0VFUCAgPSAzO1xuXG5cbnZhciBQQVRURVJOX05PTl9QUklOVEFCTEUgICAgICAgICA9IC9bXFx4MDAtXFx4MDhcXHgwQlxceDBDXFx4MEUtXFx4MUZcXHg3Ri1cXHg4NFxceDg2LVxceDlGXFx1RkZGRVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLztcbnZhciBQQVRURVJOX05PTl9BU0NJSV9MSU5FX0JSRUFLUyA9IC9bXFx4ODVcXHUyMDI4XFx1MjAyOV0vO1xudmFyIFBBVFRFUk5fRkxPV19JTkRJQ0FUT1JTICAgICAgID0gL1ssXFxbXFxdXFx7XFx9XS87XG52YXIgUEFUVEVSTl9UQUdfSEFORExFICAgICAgICAgICAgPSAvXig/OiF8ISF8IVthLXpcXC1dKyEpJC9pO1xudmFyIFBBVFRFUk5fVEFHX1VSSSAgICAgICAgICAgICAgID0gL14oPzohfFteLFxcW1xcXVxce1xcfV0pKD86JVswLTlhLWZdezJ9fFswLTlhLXpcXC0jO1xcL1xcPzpAJj1cXCtcXCQsX1xcLiF+XFwqJ1xcKFxcKVxcW1xcXV0pKiQvaTtcblxuXG5mdW5jdGlvbiBfY2xhc3Mob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTsgfVxuXG5mdW5jdGlvbiBpc19FT0woYykge1xuICByZXR1cm4gKGMgPT09IDB4MEEvKiBMRiAqLykgfHwgKGMgPT09IDB4MEQvKiBDUiAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX1dISVRFX1NQQUNFKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDA5LyogVGFiICovKSB8fCAoYyA9PT0gMHgyMC8qIFNwYWNlICovKTtcbn1cblxuZnVuY3Rpb24gaXNfV1NfT1JfRU9MKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDA5LyogVGFiICovKSB8fFxuICAgICAgICAgKGMgPT09IDB4MjAvKiBTcGFjZSAqLykgfHxcbiAgICAgICAgIChjID09PSAweDBBLyogTEYgKi8pIHx8XG4gICAgICAgICAoYyA9PT0gMHgwRC8qIENSICovKTtcbn1cblxuZnVuY3Rpb24gaXNfRkxPV19JTkRJQ0FUT1IoYykge1xuICByZXR1cm4gYyA9PT0gMHgyQy8qICwgKi8gfHxcbiAgICAgICAgIGMgPT09IDB4NUIvKiBbICovIHx8XG4gICAgICAgICBjID09PSAweDVELyogXSAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg3Qi8qIHsgKi8gfHxcbiAgICAgICAgIGMgPT09IDB4N0QvKiB9ICovO1xufVxuXG5mdW5jdGlvbiBmcm9tSGV4Q29kZShjKSB7XG4gIHZhciBsYztcblxuICBpZiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSkge1xuICAgIHJldHVybiBjIC0gMHgzMDtcbiAgfVxuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSovXG4gIGxjID0gYyB8IDB4MjA7XG5cbiAgaWYgKCgweDYxLyogYSAqLyA8PSBsYykgJiYgKGxjIDw9IDB4NjYvKiBmICovKSkge1xuICAgIHJldHVybiBsYyAtIDB4NjEgKyAxMDtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlZEhleExlbihjKSB7XG4gIGlmIChjID09PSAweDc4LyogeCAqLykgeyByZXR1cm4gMjsgfVxuICBpZiAoYyA9PT0gMHg3NS8qIHUgKi8pIHsgcmV0dXJuIDQ7IH1cbiAgaWYgKGMgPT09IDB4NTUvKiBVICovKSB7IHJldHVybiA4OyB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBmcm9tRGVjaW1hbENvZGUoYykge1xuICBpZiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSkge1xuICAgIHJldHVybiBjIC0gMHgzMDtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlRXNjYXBlU2VxdWVuY2UoYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbiAgcmV0dXJuIChjID09PSAweDMwLyogMCAqLykgPyAnXFx4MDAnIDpcbiAgICAgICAgKGMgPT09IDB4NjEvKiBhICovKSA/ICdcXHgwNycgOlxuICAgICAgICAoYyA9PT0gMHg2Mi8qIGIgKi8pID8gJ1xceDA4JyA6XG4gICAgICAgIChjID09PSAweDc0LyogdCAqLykgPyAnXFx4MDknIDpcbiAgICAgICAgKGMgPT09IDB4MDkvKiBUYWIgKi8pID8gJ1xceDA5JyA6XG4gICAgICAgIChjID09PSAweDZFLyogbiAqLykgPyAnXFx4MEEnIDpcbiAgICAgICAgKGMgPT09IDB4NzYvKiB2ICovKSA/ICdcXHgwQicgOlxuICAgICAgICAoYyA9PT0gMHg2Ni8qIGYgKi8pID8gJ1xceDBDJyA6XG4gICAgICAgIChjID09PSAweDcyLyogciAqLykgPyAnXFx4MEQnIDpcbiAgICAgICAgKGMgPT09IDB4NjUvKiBlICovKSA/ICdcXHgxQicgOlxuICAgICAgICAoYyA9PT0gMHgyMC8qIFNwYWNlICovKSA/ICcgJyA6XG4gICAgICAgIChjID09PSAweDIyLyogXCIgKi8pID8gJ1xceDIyJyA6XG4gICAgICAgIChjID09PSAweDJGLyogLyAqLykgPyAnLycgOlxuICAgICAgICAoYyA9PT0gMHg1Qy8qIFxcICovKSA/ICdcXHg1QycgOlxuICAgICAgICAoYyA9PT0gMHg0RS8qIE4gKi8pID8gJ1xceDg1JyA6XG4gICAgICAgIChjID09PSAweDVGLyogXyAqLykgPyAnXFx4QTAnIDpcbiAgICAgICAgKGMgPT09IDB4NEMvKiBMICovKSA/ICdcXHUyMDI4JyA6XG4gICAgICAgIChjID09PSAweDUwLyogUCAqLykgPyAnXFx1MjAyOScgOiAnJztcbn1cblxuZnVuY3Rpb24gY2hhckZyb21Db2RlcG9pbnQoYykge1xuICBpZiAoYyA8PSAweEZGRkYpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgfVxuICAvLyBFbmNvZGUgVVRGLTE2IHN1cnJvZ2F0ZSBwYWlyXG4gIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VURi0xNiNDb2RlX3BvaW50c19VLjJCMDEwMDAwX3RvX1UuMkIxMEZGRkZcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgKChjIC0gMHgwMTAwMDApID4+IDEwKSArIDB4RDgwMCxcbiAgICAoKGMgLSAweDAxMDAwMCkgJiAweDAzRkYpICsgMHhEQzAwXG4gICk7XG59XG5cbi8vIHNldCBhIHByb3BlcnR5IG9mIGEgbGl0ZXJhbCBvYmplY3QsIHdoaWxlIHByb3RlY3RpbmcgYWdhaW5zdCBwcm90b3R5cGUgcG9sbHV0aW9uLFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvanMteWFtbC9pc3N1ZXMvMTY0IGZvciBtb3JlIGRldGFpbHNcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAvLyB1c2VkIGZvciB0aGlzIHNwZWNpZmljIGtleSBvbmx5IGJlY2F1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIHNsb3dcbiAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxudmFyIHNpbXBsZUVzY2FwZUNoZWNrID0gbmV3IEFycmF5KDI1Nik7IC8vIGludGVnZXIsIGZvciBmYXN0IGFjY2Vzc1xudmFyIHNpbXBsZUVzY2FwZU1hcCA9IG5ldyBBcnJheSgyNTYpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICBzaW1wbGVFc2NhcGVDaGVja1tpXSA9IHNpbXBsZUVzY2FwZVNlcXVlbmNlKGkpID8gMSA6IDA7XG4gIHNpbXBsZUVzY2FwZU1hcFtpXSA9IHNpbXBsZUVzY2FwZVNlcXVlbmNlKGkpO1xufVxuXG5cbmZ1bmN0aW9uIFN0YXRlKGlucHV0LCBvcHRpb25zKSB7XG4gIHRoaXMuaW5wdXQgPSBpbnB1dDtcblxuICB0aGlzLmZpbGVuYW1lICA9IG9wdGlvbnNbJ2ZpbGVuYW1lJ10gIHx8IG51bGw7XG4gIHRoaXMuc2NoZW1hICAgID0gb3B0aW9uc1snc2NoZW1hJ10gICAgfHwgREVGQVVMVF9GVUxMX1NDSEVNQTtcbiAgdGhpcy5vbldhcm5pbmcgPSBvcHRpb25zWydvbldhcm5pbmcnXSB8fCBudWxsO1xuICB0aGlzLmxlZ2FjeSAgICA9IG9wdGlvbnNbJ2xlZ2FjeSddICAgIHx8IGZhbHNlO1xuICB0aGlzLmpzb24gICAgICA9IG9wdGlvbnNbJ2pzb24nXSAgICAgIHx8IGZhbHNlO1xuICB0aGlzLmxpc3RlbmVyICA9IG9wdGlvbnNbJ2xpc3RlbmVyJ10gIHx8IG51bGw7XG5cbiAgdGhpcy5pbXBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRJbXBsaWNpdDtcbiAgdGhpcy50eXBlTWFwICAgICAgID0gdGhpcy5zY2hlbWEuY29tcGlsZWRUeXBlTWFwO1xuXG4gIHRoaXMubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgdGhpcy5wb3NpdGlvbiAgID0gMDtcbiAgdGhpcy5saW5lICAgICAgID0gMDtcbiAgdGhpcy5saW5lU3RhcnQgID0gMDtcbiAgdGhpcy5saW5lSW5kZW50ID0gMDtcblxuICB0aGlzLmRvY3VtZW50cyA9IFtdO1xuXG4gIC8qXG4gIHRoaXMudmVyc2lvbjtcbiAgdGhpcy5jaGVja0xpbmVCcmVha3M7XG4gIHRoaXMudGFnTWFwO1xuICB0aGlzLmFuY2hvck1hcDtcbiAgdGhpcy50YWc7XG4gIHRoaXMuYW5jaG9yO1xuICB0aGlzLmtpbmQ7XG4gIHRoaXMucmVzdWx0OyovXG5cbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKSB7XG4gIHJldHVybiBuZXcgWUFNTEV4Y2VwdGlvbihcbiAgICBtZXNzYWdlLFxuICAgIG5ldyBNYXJrKHN0YXRlLmZpbGVuYW1lLCBzdGF0ZS5pbnB1dCwgc3RhdGUucG9zaXRpb24sIHN0YXRlLmxpbmUsIChzdGF0ZS5wb3NpdGlvbiAtIHN0YXRlLmxpbmVTdGFydCkpKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihzdGF0ZSwgbWVzc2FnZSkge1xuICB0aHJvdyBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dXYXJuaW5nKHN0YXRlLCBtZXNzYWdlKSB7XG4gIGlmIChzdGF0ZS5vbldhcm5pbmcpIHtcbiAgICBzdGF0ZS5vbldhcm5pbmcuY2FsbChudWxsLCBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuXG52YXIgZGlyZWN0aXZlSGFuZGxlcnMgPSB7XG5cbiAgWUFNTDogZnVuY3Rpb24gaGFuZGxlWWFtbERpcmVjdGl2ZShzdGF0ZSwgbmFtZSwgYXJncykge1xuXG4gICAgdmFyIG1hdGNoLCBtYWpvciwgbWlub3I7XG5cbiAgICBpZiAoc3RhdGUudmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0aW9uIG9mICVZQU1MIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ1lBTUwgZGlyZWN0aXZlIGFjY2VwdHMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBtYXRjaCA9IC9eKFswLTldKylcXC4oWzAtOV0rKSQvLmV4ZWMoYXJnc1swXSk7XG5cbiAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbGwtZm9ybWVkIGFyZ3VtZW50IG9mIHRoZSBZQU1MIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIG1ham9yID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcbiAgICBtaW5vciA9IHBhcnNlSW50KG1hdGNoWzJdLCAxMCk7XG5cbiAgICBpZiAobWFqb3IgIT09IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmFjY2VwdGFibGUgWUFNTCB2ZXJzaW9uIG9mIHRoZSBkb2N1bWVudCcpO1xuICAgIH1cblxuICAgIHN0YXRlLnZlcnNpb24gPSBhcmdzWzBdO1xuICAgIHN0YXRlLmNoZWNrTGluZUJyZWFrcyA9IChtaW5vciA8IDIpO1xuXG4gICAgaWYgKG1pbm9yICE9PSAxICYmIG1pbm9yICE9PSAyKSB7XG4gICAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICd1bnN1cHBvcnRlZCBZQU1MIHZlcnNpb24gb2YgdGhlIGRvY3VtZW50Jyk7XG4gICAgfVxuICB9LFxuXG4gIFRBRzogZnVuY3Rpb24gaGFuZGxlVGFnRGlyZWN0aXZlKHN0YXRlLCBuYW1lLCBhcmdzKSB7XG5cbiAgICB2YXIgaGFuZGxlLCBwcmVmaXg7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IDIpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdUQUcgZGlyZWN0aXZlIGFjY2VwdHMgZXhhY3RseSB0d28gYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlID0gYXJnc1swXTtcbiAgICBwcmVmaXggPSBhcmdzWzFdO1xuXG4gICAgaWYgKCFQQVRURVJOX1RBR19IQU5ETEUudGVzdChoYW5kbGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCB0YWcgaGFuZGxlIChmaXJzdCBhcmd1bWVudCkgb2YgdGhlIFRBRyBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwoc3RhdGUudGFnTWFwLCBoYW5kbGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGhlcmUgaXMgYSBwcmV2aW91c2x5IGRlY2xhcmVkIHN1ZmZpeCBmb3IgXCInICsgaGFuZGxlICsgJ1wiIHRhZyBoYW5kbGUnKTtcbiAgICB9XG5cbiAgICBpZiAoIVBBVFRFUk5fVEFHX1VSSS50ZXN0KHByZWZpeCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbGwtZm9ybWVkIHRhZyBwcmVmaXggKHNlY29uZCBhcmd1bWVudCkgb2YgdGhlIFRBRyBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzdGF0ZS50YWdNYXBbaGFuZGxlXSA9IHByZWZpeDtcbiAgfVxufTtcblxuXG5mdW5jdGlvbiBjYXB0dXJlU2VnbWVudChzdGF0ZSwgc3RhcnQsIGVuZCwgY2hlY2tKc29uKSB7XG4gIHZhciBfcG9zaXRpb24sIF9sZW5ndGgsIF9jaGFyYWN0ZXIsIF9yZXN1bHQ7XG5cbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgX3Jlc3VsdCA9IHN0YXRlLmlucHV0LnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgaWYgKGNoZWNrSnNvbikge1xuICAgICAgZm9yIChfcG9zaXRpb24gPSAwLCBfbGVuZ3RoID0gX3Jlc3VsdC5sZW5ndGg7IF9wb3NpdGlvbiA8IF9sZW5ndGg7IF9wb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIF9jaGFyYWN0ZXIgPSBfcmVzdWx0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uKTtcbiAgICAgICAgaWYgKCEoX2NoYXJhY3RlciA9PT0gMHgwOSB8fFxuICAgICAgICAgICAgICAoMHgyMCA8PSBfY2hhcmFjdGVyICYmIF9jaGFyYWN0ZXIgPD0gMHgxMEZGRkYpKSkge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdleHBlY3RlZCB2YWxpZCBKU09OIGNoYXJhY3RlcicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChQQVRURVJOX05PTl9QUklOVEFCTEUudGVzdChfcmVzdWx0KSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RoZSBzdHJlYW0gY29udGFpbnMgbm9uLXByaW50YWJsZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuXG4gICAgc3RhdGUucmVzdWx0ICs9IF9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VNYXBwaW5ncyhzdGF0ZSwgZGVzdGluYXRpb24sIHNvdXJjZSwgb3ZlcnJpZGFibGVLZXlzKSB7XG4gIHZhciBzb3VyY2VLZXlzLCBrZXksIGluZGV4LCBxdWFudGl0eTtcblxuICBpZiAoIWNvbW1vbi5pc09iamVjdChzb3VyY2UpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Nhbm5vdCBtZXJnZSBtYXBwaW5nczsgdGhlIHByb3ZpZGVkIHNvdXJjZSBvYmplY3QgaXMgdW5hY2NlcHRhYmxlJyk7XG4gIH1cblxuICBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSBzb3VyY2VLZXlzLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaW5kZXhdO1xuXG4gICAgaWYgKCFfaGFzT3duUHJvcGVydHkuY2FsbChkZXN0aW5hdGlvbiwga2V5KSkge1xuICAgICAgc2V0UHJvcGVydHkoZGVzdGluYXRpb24sIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgb3ZlcnJpZGFibGVLZXlzW2tleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLCBzdGFydExpbmUsIHN0YXJ0UG9zKSB7XG4gIHZhciBpbmRleCwgcXVhbnRpdHk7XG5cbiAgLy8gVGhlIG91dHB1dCBpcyBhIHBsYWluIG9iamVjdCBoZXJlLCBzbyBrZXlzIGNhbiBvbmx5IGJlIHN0cmluZ3MuXG4gIC8vIFdlIG5lZWQgdG8gY29udmVydCBrZXlOb2RlIHRvIGEgc3RyaW5nLCBidXQgZG9pbmcgc28gY2FuIGhhbmcgdGhlIHByb2Nlc3NcbiAgLy8gKGRlZXBseSBuZXN0ZWQgYXJyYXlzIHRoYXQgZXhwbG9kZSBleHBvbmVudGlhbGx5IHVzaW5nIGFsaWFzZXMpLlxuICBpZiAoQXJyYXkuaXNBcnJheShrZXlOb2RlKSkge1xuICAgIGtleU5vZGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChrZXlOb2RlKTtcblxuICAgIGZvciAoaW5kZXggPSAwLCBxdWFudGl0eSA9IGtleU5vZGUubGVuZ3RoOyBpbmRleCA8IHF1YW50aXR5OyBpbmRleCArPSAxKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlOb2RlW2luZGV4XSkpIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25lc3RlZCBhcnJheXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW5zaWRlIGtleXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBrZXlOb2RlID09PSAnb2JqZWN0JyAmJiBfY2xhc3Moa2V5Tm9kZVtpbmRleF0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICBrZXlOb2RlW2luZGV4XSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEF2b2lkIGNvZGUgZXhlY3V0aW9uIGluIGxvYWQoKSB2aWEgdG9TdHJpbmcgcHJvcGVydHlcbiAgLy8gKHN0aWxsIHVzZSBpdHMgb3duIHRvU3RyaW5nIGZvciBhcnJheXMsIHRpbWVzdGFtcHMsXG4gIC8vIGFuZCB3aGF0ZXZlciB1c2VyIHNjaGVtYSBleHRlbnNpb25zIGhhcHBlbiB0byBoYXZlIEBAdG9TdHJpbmdUYWcpXG4gIGlmICh0eXBlb2Yga2V5Tm9kZSA9PT0gJ29iamVjdCcgJiYgX2NsYXNzKGtleU5vZGUpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGtleU5vZGUgPSAnW29iamVjdCBPYmplY3RdJztcbiAgfVxuXG5cbiAga2V5Tm9kZSA9IFN0cmluZyhrZXlOb2RlKTtcblxuICBpZiAoX3Jlc3VsdCA9PT0gbnVsbCkge1xuICAgIF9yZXN1bHQgPSB7fTtcbiAgfVxuXG4gIGlmIChrZXlUYWcgPT09ICd0YWc6eWFtbC5vcmcsMjAwMjptZXJnZScpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZU5vZGUpKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSB2YWx1ZU5vZGUubGVuZ3RoOyBpbmRleCA8IHF1YW50aXR5OyBpbmRleCArPSAxKSB7XG4gICAgICAgIG1lcmdlTWFwcGluZ3Moc3RhdGUsIF9yZXN1bHQsIHZhbHVlTm9kZVtpbmRleF0sIG92ZXJyaWRhYmxlS2V5cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlTWFwcGluZ3Moc3RhdGUsIF9yZXN1bHQsIHZhbHVlTm9kZSwgb3ZlcnJpZGFibGVLZXlzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFzdGF0ZS5qc29uICYmXG4gICAgICAgICFfaGFzT3duUHJvcGVydHkuY2FsbChvdmVycmlkYWJsZUtleXMsIGtleU5vZGUpICYmXG4gICAgICAgIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKF9yZXN1bHQsIGtleU5vZGUpKSB7XG4gICAgICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lIHx8IHN0YXRlLmxpbmU7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiA9IHN0YXJ0UG9zIHx8IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0ZWQgbWFwcGluZyBrZXknKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydHkoX3Jlc3VsdCwga2V5Tm9kZSwgdmFsdWVOb2RlKTtcbiAgICBkZWxldGUgb3ZlcnJpZGFibGVLZXlzW2tleU5vZGVdO1xuICB9XG5cbiAgcmV0dXJuIF9yZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRMaW5lQnJlYWsoc3RhdGUpIHtcbiAgdmFyIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDBBLyogTEYgKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICB9IGVsc2UgaWYgKGNoID09PSAweDBELyogQ1IgKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgIGlmIChzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSA9PT0gMHgwQS8qIExGICovKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYSBsaW5lIGJyZWFrIGlzIGV4cGVjdGVkJyk7XG4gIH1cblxuICBzdGF0ZS5saW5lICs9IDE7XG4gIHN0YXRlLmxpbmVTdGFydCA9IHN0YXRlLnBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBhbGxvd0NvbW1lbnRzLCBjaGVja0luZGVudCkge1xuICB2YXIgbGluZUJyZWFrcyA9IDAsXG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoYWxsb3dDb21tZW50cyAmJiBjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIGRvIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfSB3aGlsZSAoY2ggIT09IDB4MEEvKiBMRiAqLyAmJiBjaCAhPT0gMHgwRC8qIENSICovICYmIGNoICE9PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG5cbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgICBsaW5lQnJlYWtzKys7XG4gICAgICBzdGF0ZS5saW5lSW5kZW50ID0gMDtcblxuICAgICAgd2hpbGUgKGNoID09PSAweDIwLyogU3BhY2UgKi8pIHtcbiAgICAgICAgc3RhdGUubGluZUluZGVudCsrO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaGVja0luZGVudCAhPT0gLTEgJiYgbGluZUJyZWFrcyAhPT0gMCAmJiBzdGF0ZS5saW5lSW5kZW50IDwgY2hlY2tJbmRlbnQpIHtcbiAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICdkZWZpY2llbnQgaW5kZW50YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBsaW5lQnJlYWtzO1xufVxuXG5mdW5jdGlvbiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG5cbiAgLy8gQ29uZGl0aW9uIHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgaXMgdGVzdGVkXG4gIC8vIGluIHBhcmVudCBvbiBlYWNoIGNhbGwsIGZvciBlZmZpY2llbmN5LiBObyBuZWVkcyB0byB0ZXN0IGhlcmUgYWdhaW4uXG4gIGlmICgoY2ggPT09IDB4MkQvKiAtICovIHx8IGNoID09PSAweDJFLyogLiAqLykgJiZcbiAgICAgIGNoID09PSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbiArIDEpICYmXG4gICAgICBjaCA9PT0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24gKyAyKSkge1xuXG4gICAgX3Bvc2l0aW9uICs9IDM7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gMCB8fCBpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIGNvdW50KSB7XG4gIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHN0YXRlLnJlc3VsdCArPSAnICc7XG4gIH0gZWxzZSBpZiAoY291bnQgPiAxKSB7XG4gICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGNvdW50IC0gMSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiByZWFkUGxhaW5TY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQsIHdpdGhpbkZsb3dDb2xsZWN0aW9uKSB7XG4gIHZhciBwcmVjZWRpbmcsXG4gICAgICBmb2xsb3dpbmcsXG4gICAgICBjYXB0dXJlU3RhcnQsXG4gICAgICBjYXB0dXJlRW5kLFxuICAgICAgaGFzUGVuZGluZ0NvbnRlbnQsXG4gICAgICBfbGluZSxcbiAgICAgIF9saW5lU3RhcnQsXG4gICAgICBfbGluZUluZGVudCxcbiAgICAgIF9raW5kID0gc3RhdGUua2luZCxcbiAgICAgIF9yZXN1bHQgPSBzdGF0ZS5yZXN1bHQsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChpc19XU19PUl9FT0woY2gpICAgICAgfHxcbiAgICAgIGlzX0ZMT1dfSU5ESUNBVE9SKGNoKSB8fFxuICAgICAgY2ggPT09IDB4MjMvKiAjICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyNi8qICYgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDJBLyogKiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjEvKiAhICovICAgIHx8XG4gICAgICBjaCA9PT0gMHg3Qy8qIHwgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDNFLyogPiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjcvKiAnICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyMi8qIFwiICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyNS8qICUgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDQwLyogQCAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4NjAvKiBgICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNoID09PSAweDNGLyogPyAqLyB8fCBjaCA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykgfHxcbiAgICAgICAgd2l0aGluRmxvd0NvbGxlY3Rpb24gJiYgaXNfRkxPV19JTkRJQ0FUT1IoZm9sbG93aW5nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgaGFzUGVuZGluZ0NvbnRlbnQgPSBmYWxzZTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBpZiAoY2ggPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICAgIGlmIChpc19XU19PUl9FT0woZm9sbG93aW5nKSB8fFxuICAgICAgICAgIHdpdGhpbkZsb3dDb2xsZWN0aW9uICYmIGlzX0ZMT1dfSU5ESUNBVE9SKGZvbGxvd2luZykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgcHJlY2VkaW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiAtIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKHByZWNlZGluZykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHx8XG4gICAgICAgICAgICAgICB3aXRoaW5GbG93Q29sbGVjdGlvbiAmJiBpc19GTE9XX0lORElDQVRPUihjaCkpIHtcbiAgICAgIGJyZWFrO1xuXG4gICAgfSBlbHNlIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgICBfbGluZVN0YXJ0ID0gc3RhdGUubGluZVN0YXJ0O1xuICAgICAgX2xpbmVJbmRlbnQgPSBzdGF0ZS5saW5lSW5kZW50O1xuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIC0xKTtcblxuICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPj0gbm9kZUluZGVudCkge1xuICAgICAgICBoYXNQZW5kaW5nQ29udGVudCA9IHRydWU7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucG9zaXRpb24gPSBjYXB0dXJlRW5kO1xuICAgICAgICBzdGF0ZS5saW5lID0gX2xpbmU7XG4gICAgICAgIHN0YXRlLmxpbmVTdGFydCA9IF9saW5lU3RhcnQ7XG4gICAgICAgIHN0YXRlLmxpbmVJbmRlbnQgPSBfbGluZUluZGVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1BlbmRpbmdDb250ZW50KSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCBmYWxzZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBzdGF0ZS5saW5lIC0gX2xpbmUpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgaGFzUGVuZGluZ0NvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uICsgMTtcbiAgICB9XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIH1cblxuICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCBmYWxzZSk7XG5cbiAgaWYgKHN0YXRlLnJlc3VsdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9IF9raW5kO1xuICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlYWRTaW5nbGVRdW90ZWRTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNoLFxuICAgICAgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDI3LyogJyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIHN0YXRlLnBvc2l0aW9uKys7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDI3LyogJyAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICBpZiAoY2ggPT09IDB4MjcvKiAnICovKSB7XG4gICAgICAgIGNhcHR1cmVTdGFydCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgdHJ1ZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCkpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgZG9jdW1lbnQgd2l0aGluIGEgc2luZ2xlIHF1b3RlZCBzY2FsYXInKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIHNpbmdsZSBxdW90ZWQgc2NhbGFyJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWREb3VibGVRdW90ZWRTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNhcHR1cmVTdGFydCxcbiAgICAgIGNhcHR1cmVFbmQsXG4gICAgICBoZXhMZW5ndGgsXG4gICAgICBoZXhSZXN1bHQsXG4gICAgICB0bXAsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyMi8qIFwiICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcbiAgc3RhdGUucG9zaXRpb24rKztcbiAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlICgoY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSkgIT09IDApIHtcbiAgICBpZiAoY2ggPT09IDB4MjIvKiBcIiAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHg1Qy8qIFxcICovKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBzdGF0ZS5wb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgIGlmIChpc19FT0woY2gpKSB7XG4gICAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCBub2RlSW5kZW50KTtcblxuICAgICAgICAvLyBUT0RPOiByZXdvcmsgdG8gaW5saW5lIGZuIHdpdGggbm8gdHlwZSBjYXN0P1xuICAgICAgfSBlbHNlIGlmIChjaCA8IDI1NiAmJiBzaW1wbGVFc2NhcGVDaGVja1tjaF0pIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IHNpbXBsZUVzY2FwZU1hcFtjaF07XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG5cbiAgICAgIH0gZWxzZSBpZiAoKHRtcCA9IGVzY2FwZWRIZXhMZW4oY2gpKSA+IDApIHtcbiAgICAgICAgaGV4TGVuZ3RoID0gdG1wO1xuICAgICAgICBoZXhSZXN1bHQgPSAwO1xuXG4gICAgICAgIGZvciAoOyBoZXhMZW5ndGggPiAwOyBoZXhMZW5ndGgtLSkge1xuICAgICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmICgodG1wID0gZnJvbUhleENvZGUoY2gpKSA+PSAwKSB7XG4gICAgICAgICAgICBoZXhSZXN1bHQgPSAoaGV4UmVzdWx0IDw8IDQpICsgdG1wO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdleHBlY3RlZCBoZXhhZGVjaW1hbCBjaGFyYWN0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY2hhckZyb21Db2RlcG9pbnQoaGV4UmVzdWx0KTtcblxuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5rbm93biBlc2NhcGUgc2VxdWVuY2UnKTtcbiAgICAgIH1cblxuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCB0cnVlKTtcbiAgICAgIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCBub2RlSW5kZW50KSk7XG4gICAgICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB9IGVsc2UgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgJiYgdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBkb2N1bWVudCB3aXRoaW4gYSBkb3VibGUgcXVvdGVkIHNjYWxhcicpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgZG91YmxlIHF1b3RlZCBzY2FsYXInKTtcbn1cblxuZnVuY3Rpb24gcmVhZEZsb3dDb2xsZWN0aW9uKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciByZWFkTmV4dCA9IHRydWUsXG4gICAgICBfbGluZSxcbiAgICAgIF90YWcgICAgID0gc3RhdGUudGFnLFxuICAgICAgX3Jlc3VsdCxcbiAgICAgIF9hbmNob3IgID0gc3RhdGUuYW5jaG9yLFxuICAgICAgZm9sbG93aW5nLFxuICAgICAgdGVybWluYXRvcixcbiAgICAgIGlzUGFpcixcbiAgICAgIGlzRXhwbGljaXRQYWlyLFxuICAgICAgaXNNYXBwaW5nLFxuICAgICAgb3ZlcnJpZGFibGVLZXlzID0ge30sXG4gICAgICBrZXlOb2RlLFxuICAgICAga2V5VGFnLFxuICAgICAgdmFsdWVOb2RlLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4NUIvKiBbICovKSB7XG4gICAgdGVybWluYXRvciA9IDB4NUQ7LyogXSAqL1xuICAgIGlzTWFwcGluZyA9IGZhbHNlO1xuICAgIF9yZXN1bHQgPSBbXTtcbiAgfSBlbHNlIGlmIChjaCA9PT0gMHg3Qi8qIHsgKi8pIHtcbiAgICB0ZXJtaW5hdG9yID0gMHg3RDsvKiB9ICovXG4gICAgaXNNYXBwaW5nID0gdHJ1ZTtcbiAgICBfcmVzdWx0ID0ge307XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IHRlcm1pbmF0b3IpIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICBzdGF0ZS50YWcgPSBfdGFnO1xuICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgIHN0YXRlLmtpbmQgPSBpc01hcHBpbmcgPyAnbWFwcGluZycgOiAnc2VxdWVuY2UnO1xuICAgICAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXJlYWROZXh0KSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbWlzc2VkIGNvbW1hIGJldHdlZW4gZmxvdyBjb2xsZWN0aW9uIGVudHJpZXMnKTtcbiAgICB9XG5cbiAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICBpc1BhaXIgPSBpc0V4cGxpY2l0UGFpciA9IGZhbHNlO1xuXG4gICAgaWYgKGNoID09PSAweDNGLyogPyAqLykge1xuICAgICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykpIHtcbiAgICAgICAgaXNQYWlyID0gaXNFeHBsaWNpdFBhaXIgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfRkxPV19JTiwgZmFsc2UsIHRydWUpO1xuICAgIGtleVRhZyA9IHN0YXRlLnRhZztcbiAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmICgoaXNFeHBsaWNpdFBhaXIgfHwgc3RhdGUubGluZSA9PT0gX2xpbmUpICYmIGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgaXNQYWlyID0gdHJ1ZTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuICAgICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfRkxPV19JTiwgZmFsc2UsIHRydWUpO1xuICAgICAgdmFsdWVOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc01hcHBpbmcpIHtcbiAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUpO1xuICAgIH0gZWxzZSBpZiAoaXNQYWlyKSB7XG4gICAgICBfcmVzdWx0LnB1c2goc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgbnVsbCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcmVzdWx0LnB1c2goa2V5Tm9kZSk7XG4gICAgfVxuXG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSAweDJDLyogLCAqLykge1xuICAgICAgcmVhZE5leHQgPSB0cnVlO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWFkTmV4dCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIGZsb3cgY29sbGVjdGlvbicpO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNhcHR1cmVTdGFydCxcbiAgICAgIGZvbGRpbmcsXG4gICAgICBjaG9tcGluZyAgICAgICA9IENIT01QSU5HX0NMSVAsXG4gICAgICBkaWRSZWFkQ29udGVudCA9IGZhbHNlLFxuICAgICAgZGV0ZWN0ZWRJbmRlbnQgPSBmYWxzZSxcbiAgICAgIHRleHRJbmRlbnQgICAgID0gbm9kZUluZGVudCxcbiAgICAgIGVtcHR5TGluZXMgICAgID0gMCxcbiAgICAgIGF0TW9yZUluZGVudGVkID0gZmFsc2UsXG4gICAgICB0bXAsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHg3Qy8qIHwgKi8pIHtcbiAgICBmb2xkaW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4M0UvKiA+ICovKSB7XG4gICAgZm9sZGluZyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IDB4MkIvKiArICovIHx8IGNoID09PSAweDJELyogLSAqLykge1xuICAgICAgaWYgKENIT01QSU5HX0NMSVAgPT09IGNob21waW5nKSB7XG4gICAgICAgIGNob21waW5nID0gKGNoID09PSAweDJCLyogKyAqLykgPyBDSE9NUElOR19LRUVQIDogQ0hPTVBJTkdfU1RSSVA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAncmVwZWF0IG9mIGEgY2hvbXBpbmcgbW9kZSBpZGVudGlmaWVyJyk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKCh0bXAgPSBmcm9tRGVjaW1hbENvZGUoY2gpKSA+PSAwKSB7XG4gICAgICBpZiAodG1wID09PSAwKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdiYWQgZXhwbGljaXQgaW5kZW50YXRpb24gd2lkdGggb2YgYSBibG9jayBzY2FsYXI7IGl0IGNhbm5vdCBiZSBsZXNzIHRoYW4gb25lJyk7XG4gICAgICB9IGVsc2UgaWYgKCFkZXRlY3RlZEluZGVudCkge1xuICAgICAgICB0ZXh0SW5kZW50ID0gbm9kZUluZGVudCArIHRtcCAtIDE7XG4gICAgICAgIGRldGVjdGVkSW5kZW50ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdyZXBlYXQgb2YgYW4gaW5kZW50YXRpb24gd2lkdGggaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpO1xuXG4gICAgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICAgIHdoaWxlICghaXNfRU9MKGNoKSAmJiAoY2ggIT09IDApKTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICByZWFkTGluZUJyZWFrKHN0YXRlKTtcbiAgICBzdGF0ZS5saW5lSW5kZW50ID0gMDtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoKCFkZXRlY3RlZEluZGVudCB8fCBzdGF0ZS5saW5lSW5kZW50IDwgdGV4dEluZGVudCkgJiZcbiAgICAgICAgICAgKGNoID09PSAweDIwLyogU3BhY2UgKi8pKSB7XG4gICAgICBzdGF0ZS5saW5lSW5kZW50Kys7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFkZXRlY3RlZEluZGVudCAmJiBzdGF0ZS5saW5lSW5kZW50ID4gdGV4dEluZGVudCkge1xuICAgICAgdGV4dEluZGVudCA9IHN0YXRlLmxpbmVJbmRlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIGVtcHR5TGluZXMrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIEVuZCBvZiB0aGUgc2NhbGFyLlxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgdGV4dEluZGVudCkge1xuXG4gICAgICAvLyBQZXJmb3JtIHRoZSBjaG9tcGluZy5cbiAgICAgIGlmIChjaG9tcGluZyA9PT0gQ0hPTVBJTkdfS0VFUCkge1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuICAgICAgfSBlbHNlIGlmIChjaG9tcGluZyA9PT0gQ0hPTVBJTkdfQ0xJUCkge1xuICAgICAgICBpZiAoZGlkUmVhZENvbnRlbnQpIHsgLy8gaS5lLiBvbmx5IGlmIHRoZSBzY2FsYXIgaXMgbm90IGVtcHR5LlxuICAgICAgICAgIHN0YXRlLnJlc3VsdCArPSAnXFxuJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCcmVhayB0aGlzIGB3aGlsZWAgY3ljbGUgYW5kIGdvIHRvIHRoZSBmdW5jaXRvbidzIGVwaWxvZ3VlLlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gRm9sZGVkIHN0eWxlOiB1c2UgZmFuY3kgcnVsZXMgdG8gaGFuZGxlIGxpbmUgYnJlYWtzLlxuICAgIGlmIChmb2xkaW5nKSB7XG5cbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggd2hpdGUgc3BhY2UgY2hhcmFjdGVycyAobW9yZS1pbmRlbnRlZCBsaW5lcykgYXJlIG5vdCBmb2xkZWQuXG4gICAgICBpZiAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgIGF0TW9yZUluZGVudGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZXhjZXB0IGZvciB0aGUgZmlyc3QgY29udGVudCBsaW5lIChjZi4gRXhhbXBsZSA4LjEpXG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBkaWRSZWFkQ29udGVudCA/IDEgKyBlbXB0eUxpbmVzIDogZW1wdHlMaW5lcyk7XG5cbiAgICAgIC8vIEVuZCBvZiBtb3JlLWluZGVudGVkIGJsb2NrLlxuICAgICAgfSBlbHNlIGlmIChhdE1vcmVJbmRlbnRlZCkge1xuICAgICAgICBhdE1vcmVJbmRlbnRlZCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZW1wdHlMaW5lcyArIDEpO1xuXG4gICAgICAvLyBKdXN0IG9uZSBsaW5lIGJyZWFrIC0gcGVyY2VpdmUgYXMgdGhlIHNhbWUgbGluZS5cbiAgICAgIH0gZWxzZSBpZiAoZW1wdHlMaW5lcyA9PT0gMCkge1xuICAgICAgICBpZiAoZGlkUmVhZENvbnRlbnQpIHsgLy8gaS5lLiBvbmx5IGlmIHdlIGhhdmUgYWxyZWFkeSByZWFkIHNvbWUgc2NhbGFyIGNvbnRlbnQuXG4gICAgICAgICAgc3RhdGUucmVzdWx0ICs9ICcgJztcbiAgICAgICAgfVxuXG4gICAgICAvLyBTZXZlcmFsIGxpbmUgYnJlYWtzIC0gcGVyY2VpdmUgYXMgZGlmZmVyZW50IGxpbmVzLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGVtcHR5TGluZXMpO1xuICAgICAgfVxuXG4gICAgLy8gTGl0ZXJhbCBzdHlsZToganVzdCBhZGQgZXhhY3QgbnVtYmVyIG9mIGxpbmUgYnJlYWtzIGJldHdlZW4gY29udGVudCBsaW5lcy5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gS2VlcCBhbGwgbGluZSBicmVha3MgZXhjZXB0IHRoZSBoZWFkZXIgbGluZSBicmVhay5cbiAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBkaWRSZWFkQ29udGVudCA/IDEgKyBlbXB0eUxpbmVzIDogZW1wdHlMaW5lcyk7XG4gICAgfVxuXG4gICAgZGlkUmVhZENvbnRlbnQgPSB0cnVlO1xuICAgIGRldGVjdGVkSW5kZW50ID0gdHJ1ZTtcbiAgICBlbXB0eUxpbmVzID0gMDtcbiAgICBjYXB0dXJlU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIHdoaWxlICghaXNfRU9MKGNoKSAmJiAoY2ggIT09IDApKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgX2xpbmUsXG4gICAgICBfdGFnICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBfYW5jaG9yICAgPSBzdGF0ZS5hbmNob3IsXG4gICAgICBfcmVzdWx0ICAgPSBbXSxcbiAgICAgIGZvbGxvd2luZyxcbiAgICAgIGRldGVjdGVkICA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG5cbiAgICBpZiAoY2ggIT09IDB4MkQvKiAtICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAoIWlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgc3RhdGUucG9zaXRpb24rKztcblxuICAgIGlmIChza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSkpIHtcbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50IDw9IG5vZGVJbmRlbnQpIHtcbiAgICAgICAgX3Jlc3VsdC5wdXNoKG51bGwpO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfQkxPQ0tfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICBfcmVzdWx0LnB1c2goc3RhdGUucmVzdWx0KTtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKChzdGF0ZS5saW5lID09PSBfbGluZSB8fCBzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCkgJiYgKGNoICE9PSAwKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2JhZCBpbmRlbnRhdGlvbiBvZiBhIHNlcXVlbmNlIGVudHJ5Jyk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgbm9kZUluZGVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRldGVjdGVkKSB7XG4gICAgc3RhdGUudGFnID0gX3RhZztcbiAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgIHN0YXRlLmtpbmQgPSAnc2VxdWVuY2UnO1xuICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tNYXBwaW5nKHN0YXRlLCBub2RlSW5kZW50LCBmbG93SW5kZW50KSB7XG4gIHZhciBmb2xsb3dpbmcsXG4gICAgICBhbGxvd0NvbXBhY3QsXG4gICAgICBfbGluZSxcbiAgICAgIF9wb3MsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgX2FuY2hvciAgICAgICA9IHN0YXRlLmFuY2hvcixcbiAgICAgIF9yZXN1bHQgICAgICAgPSB7fSxcbiAgICAgIG92ZXJyaWRhYmxlS2V5cyA9IHt9LFxuICAgICAga2V5VGFnICAgICAgICA9IG51bGwsXG4gICAgICBrZXlOb2RlICAgICAgID0gbnVsbCxcbiAgICAgIHZhbHVlTm9kZSAgICAgPSBudWxsLFxuICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlLFxuICAgICAgZGV0ZWN0ZWQgICAgICA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuICAgIF9saW5lID0gc3RhdGUubGluZTsgLy8gU2F2ZSB0aGUgY3VycmVudCBsaW5lLlxuICAgIF9wb3MgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIC8vXG4gICAgLy8gRXhwbGljaXQgbm90YXRpb24gY2FzZS4gVGhlcmUgYXJlIHR3byBzZXBhcmF0ZSBibG9ja3M6XG4gICAgLy8gZmlyc3QgZm9yIHRoZSBrZXkgKGRlbm90ZWQgYnkgXCI/XCIpIGFuZCBzZWNvbmQgZm9yIHRoZSB2YWx1ZSAoZGVub3RlZCBieSBcIjpcIilcbiAgICAvL1xuICAgIGlmICgoY2ggPT09IDB4M0YvKiA/ICovIHx8IGNoID09PSAweDNBLyogOiAqLykgJiYgaXNfV1NfT1JfRU9MKGZvbGxvd2luZykpIHtcblxuICAgICAgaWYgKGNoID09PSAweDNGLyogPyAqLykge1xuICAgICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsKTtcbiAgICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgYXRFeHBsaWNpdEtleSA9IHRydWU7XG4gICAgICAgIGFsbG93Q29tcGFjdCA9IHRydWU7XG5cbiAgICAgIH0gZWxzZSBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAvLyBpLmUuIDB4M0EvKiA6ICovID09PSBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIGV4cGxpY2l0IGtleS5cbiAgICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlO1xuICAgICAgICBhbGxvd0NvbXBhY3QgPSB0cnVlO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaW5jb21wbGV0ZSBleHBsaWNpdCBtYXBwaW5nIHBhaXI7IGEga2V5IG5vZGUgaXMgbWlzc2VkOyBvciBmb2xsb3dlZCBieSBhIG5vbi10YWJ1bGF0ZWQgZW1wdHkgbGluZScpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5wb3NpdGlvbiArPSAxO1xuICAgICAgY2ggPSBmb2xsb3dpbmc7XG5cbiAgICAvL1xuICAgIC8vIEltcGxpY2l0IG5vdGF0aW9uIGNhc2UuIEZsb3ctc3R5bGUgbm9kZSBhcyB0aGUga2V5IGZpcnN0LCB0aGVuIFwiOlwiLCBhbmQgdGhlIHZhbHVlLlxuICAgIC8vXG4gICAgfSBlbHNlIGlmIChjb21wb3NlTm9kZShzdGF0ZSwgZmxvd0luZGVudCwgQ09OVEVYVF9GTE9XX09VVCwgZmFsc2UsIHRydWUpKSB7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lID09PSBfbGluZSkge1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2ggPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgICAgaWYgKCFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlciBpcyBleHBlY3RlZCBhZnRlciB0aGUga2V5LXZhbHVlIHNlcGFyYXRvciB3aXRoaW4gYSBibG9jayBtYXBwaW5nJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsKTtcbiAgICAgICAgICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBhdEV4cGxpY2l0S2V5ID0gZmFsc2U7XG4gICAgICAgICAgYWxsb3dDb21wYWN0ID0gZmFsc2U7XG4gICAgICAgICAga2V5VGFnID0gc3RhdGUudGFnO1xuICAgICAgICAgIGtleU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW4gbm90IHJlYWQgYW4gaW1wbGljaXQgbWFwcGluZyBwYWlyOyBhIGNvbG9uIGlzIG1pc3NlZCcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgICAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIHRoZSByZXN1bHQgb2YgYGNvbXBvc2VOb2RlYC5cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW4gbm90IHJlYWQgYSBibG9jayBtYXBwaW5nIGVudHJ5OyBhIG11bHRpbGluZSBrZXkgbWF5IG5vdCBiZSBhbiBpbXBsaWNpdCBrZXknKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgdGhlIHJlc3VsdCBvZiBgY29tcG9zZU5vZGVgLlxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrOyAvLyBSZWFkaW5nIGlzIGRvbmUuIEdvIHRvIHRoZSBlcGlsb2d1ZS5cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIENvbW1vbiByZWFkaW5nIGNvZGUgZm9yIGJvdGggZXhwbGljaXQgYW5kIGltcGxpY2l0IG5vdGF0aW9ucy5cbiAgICAvL1xuICAgIGlmIChzdGF0ZS5saW5lID09PSBfbGluZSB8fCBzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCkge1xuICAgICAgaWYgKGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0JMT0NLX09VVCwgdHJ1ZSwgYWxsb3dDb21wYWN0KSkge1xuICAgICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAgIGtleU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXRFeHBsaWNpdEtleSkge1xuICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLCBfbGluZSwgX3Bvcyk7XG4gICAgICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCAmJiAoY2ggIT09IDApKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYmFkIGluZGVudGF0aW9uIG9mIGEgbWFwcGluZyBlbnRyeScpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IG5vZGVJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIEVwaWxvZ3VlLlxuICAvL1xuXG4gIC8vIFNwZWNpYWwgY2FzZTogbGFzdCBtYXBwaW5nJ3Mgbm9kZSBjb250YWlucyBvbmx5IHRoZSBrZXkgaW4gZXhwbGljaXQgbm90YXRpb24uXG4gIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIG51bGwpO1xuICB9XG5cbiAgLy8gRXhwb3NlIHRoZSByZXN1bHRpbmcgbWFwcGluZy5cbiAgaWYgKGRldGVjdGVkKSB7XG4gICAgc3RhdGUudGFnID0gX3RhZztcbiAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgIHN0YXRlLmtpbmQgPSAnbWFwcGluZyc7XG4gICAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBkZXRlY3RlZDtcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1Byb3BlcnR5KHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sXG4gICAgICBpc1ZlcmJhdGltID0gZmFsc2UsXG4gICAgICBpc05hbWVkICAgID0gZmFsc2UsXG4gICAgICB0YWdIYW5kbGUsXG4gICAgICB0YWdOYW1lLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjEvKiAhICovKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLnRhZyAhPT0gbnVsbCkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGlvbiBvZiBhIHRhZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHgzQy8qIDwgKi8pIHtcbiAgICBpc1ZlcmJhdGltID0gdHJ1ZTtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgyMS8qICEgKi8pIHtcbiAgICBpc05hbWVkID0gdHJ1ZTtcbiAgICB0YWdIYW5kbGUgPSAnISEnO1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICB9IGVsc2Uge1xuICAgIHRhZ0hhbmRsZSA9ICchJztcbiAgfVxuXG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIGlmIChpc1ZlcmJhdGltKSB7XG4gICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICB3aGlsZSAoY2ggIT09IDAgJiYgY2ggIT09IDB4M0UvKiA+ICovKTtcblxuICAgIGlmIChzdGF0ZS5wb3NpdGlvbiA8IHN0YXRlLmxlbmd0aCkge1xuICAgICAgdGFnTmFtZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSB2ZXJiYXRpbSB0YWcnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgyMS8qICEgKi8pIHtcbiAgICAgICAgaWYgKCFpc05hbWVkKSB7XG4gICAgICAgICAgdGFnSGFuZGxlID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uIC0gMSwgc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgICAgICAgIGlmICghUEFUVEVSTl9UQUdfSEFORExFLnRlc3QodGFnSGFuZGxlKSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWVkIHRhZyBoYW5kbGUgY2Fubm90IGNvbnRhaW4gc3VjaCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaXNOYW1lZCA9IHRydWU7XG4gICAgICAgICAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24gKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgc3VmZml4IGNhbm5vdCBjb250YWluIGV4Y2xhbWF0aW9uIG1hcmtzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRhZ05hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChQQVRURVJOX0ZMT1dfSU5ESUNBVE9SUy50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIHN1ZmZpeCBjYW5ub3QgY29udGFpbiBmbG93IGluZGljYXRvciBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRhZ05hbWUgJiYgIVBBVFRFUk5fVEFHX1VSSS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBuYW1lIGNhbm5vdCBjb250YWluIHN1Y2ggY2hhcmFjdGVyczogJyArIHRhZ05hbWUpO1xuICB9XG5cbiAgaWYgKGlzVmVyYmF0aW0pIHtcbiAgICBzdGF0ZS50YWcgPSB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAoX2hhc093blByb3BlcnR5LmNhbGwoc3RhdGUudGFnTWFwLCB0YWdIYW5kbGUpKSB7XG4gICAgc3RhdGUudGFnID0gc3RhdGUudGFnTWFwW3RhZ0hhbmRsZV0gKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAodGFnSGFuZGxlID09PSAnIScpIHtcbiAgICBzdGF0ZS50YWcgPSAnIScgKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAodGFnSGFuZGxlID09PSAnISEnKSB7XG4gICAgc3RhdGUudGFnID0gJ3RhZzp5YW1sLm9yZywyMDAyOicgKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZGVjbGFyZWQgdGFnIGhhbmRsZSBcIicgKyB0YWdIYW5kbGUgKyAnXCInKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQW5jaG9yUHJvcGVydHkoc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbixcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDI2LyogJiAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRpb24gb2YgYW4gYW5jaG9yIHByb3BlcnR5Jyk7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSAmJiAhaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBfcG9zaXRpb24pIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmFtZSBvZiBhbiBhbmNob3Igbm9kZSBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICB9XG5cbiAgc3RhdGUuYW5jaG9yID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQWxpYXMoc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbiwgYWxpYXMsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyQS8qICogKi8pIHJldHVybiBmYWxzZTtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSAmJiAhaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBfcG9zaXRpb24pIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmFtZSBvZiBhbiBhbGlhcyBub2RlIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyJyk7XG4gIH1cblxuICBhbGlhcyA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmICghX2hhc093blByb3BlcnR5LmNhbGwoc3RhdGUuYW5jaG9yTWFwLCBhbGlhcykpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5pZGVudGlmaWVkIGFsaWFzIFwiJyArIGFsaWFzICsgJ1wiJyk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bHQgPSBzdGF0ZS5hbmNob3JNYXBbYWxpYXNdO1xuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlTm9kZShzdGF0ZSwgcGFyZW50SW5kZW50LCBub2RlQ29udGV4dCwgYWxsb3dUb1NlZWssIGFsbG93Q29tcGFjdCkge1xuICB2YXIgYWxsb3dCbG9ja1N0eWxlcyxcbiAgICAgIGFsbG93QmxvY2tTY2FsYXJzLFxuICAgICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zLFxuICAgICAgaW5kZW50U3RhdHVzID0gMSwgLy8gMTogdGhpcz5wYXJlbnQsIDA6IHRoaXM9cGFyZW50LCAtMTogdGhpczxwYXJlbnRcbiAgICAgIGF0TmV3TGluZSAgPSBmYWxzZSxcbiAgICAgIGhhc0NvbnRlbnQgPSBmYWxzZSxcbiAgICAgIHR5cGVJbmRleCxcbiAgICAgIHR5cGVRdWFudGl0eSxcbiAgICAgIHR5cGUsXG4gICAgICBmbG93SW5kZW50LFxuICAgICAgYmxvY2tJbmRlbnQ7XG5cbiAgaWYgKHN0YXRlLmxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgc3RhdGUubGlzdGVuZXIoJ29wZW4nLCBzdGF0ZSk7XG4gIH1cblxuICBzdGF0ZS50YWcgICAgPSBudWxsO1xuICBzdGF0ZS5hbmNob3IgPSBudWxsO1xuICBzdGF0ZS5raW5kICAgPSBudWxsO1xuICBzdGF0ZS5yZXN1bHQgPSBudWxsO1xuXG4gIGFsbG93QmxvY2tTdHlsZXMgPSBhbGxvd0Jsb2NrU2NhbGFycyA9IGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9XG4gICAgQ09OVEVYVF9CTE9DS19PVVQgPT09IG5vZGVDb250ZXh0IHx8XG4gICAgQ09OVEVYVF9CTE9DS19JTiAgPT09IG5vZGVDb250ZXh0O1xuXG4gIGlmIChhbGxvd1RvU2Vlaykge1xuICAgIGlmIChza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSkpIHtcbiAgICAgIGF0TmV3TGluZSA9IHRydWU7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gcGFyZW50SW5kZW50KSB7XG4gICAgICAgIGluZGVudFN0YXR1cyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgcGFyZW50SW5kZW50KSB7XG4gICAgICAgIGluZGVudFN0YXR1cyA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbmRlbnRTdGF0dXMgPT09IDEpIHtcbiAgICB3aGlsZSAocmVhZFRhZ1Byb3BlcnR5KHN0YXRlKSB8fCByZWFkQW5jaG9yUHJvcGVydHkoc3RhdGUpKSB7XG4gICAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICAgIGF0TmV3TGluZSA9IHRydWU7XG4gICAgICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9IGFsbG93QmxvY2tTdHlsZXM7XG5cbiAgICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPiBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IHBhcmVudEluZGVudCkge1xuICAgICAgICAgIGluZGVudFN0YXR1cyA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IHBhcmVudEluZGVudCkge1xuICAgICAgICAgIGluZGVudFN0YXR1cyA9IC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxsb3dCbG9ja0NvbGxlY3Rpb25zKSB7XG4gICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zID0gYXROZXdMaW5lIHx8IGFsbG93Q29tcGFjdDtcbiAgfVxuXG4gIGlmIChpbmRlbnRTdGF0dXMgPT09IDEgfHwgQ09OVEVYVF9CTE9DS19PVVQgPT09IG5vZGVDb250ZXh0KSB7XG4gICAgaWYgKENPTlRFWFRfRkxPV19JTiA9PT0gbm9kZUNvbnRleHQgfHwgQ09OVEVYVF9GTE9XX09VVCA9PT0gbm9kZUNvbnRleHQpIHtcbiAgICAgIGZsb3dJbmRlbnQgPSBwYXJlbnRJbmRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsb3dJbmRlbnQgPSBwYXJlbnRJbmRlbnQgKyAxO1xuICAgIH1cblxuICAgIGJsb2NrSW5kZW50ID0gc3RhdGUucG9zaXRpb24gLSBzdGF0ZS5saW5lU3RhcnQ7XG5cbiAgICBpZiAoaW5kZW50U3RhdHVzID09PSAxKSB7XG4gICAgICBpZiAoYWxsb3dCbG9ja0NvbGxlY3Rpb25zICYmXG4gICAgICAgICAgKHJlYWRCbG9ja1NlcXVlbmNlKHN0YXRlLCBibG9ja0luZGVudCkgfHxcbiAgICAgICAgICAgcmVhZEJsb2NrTWFwcGluZyhzdGF0ZSwgYmxvY2tJbmRlbnQsIGZsb3dJbmRlbnQpKSB8fFxuICAgICAgICAgIHJlYWRGbG93Q29sbGVjdGlvbihzdGF0ZSwgZmxvd0luZGVudCkpIHtcbiAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGFsbG93QmxvY2tTY2FsYXJzICYmIHJlYWRCbG9ja1NjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkpIHx8XG4gICAgICAgICAgICByZWFkU2luZ2xlUXVvdGVkU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50KSB8fFxuICAgICAgICAgICAgcmVhZERvdWJsZVF1b3RlZFNjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkpIHtcbiAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlYWRBbGlhcyhzdGF0ZSkpIHtcbiAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChzdGF0ZS50YWcgIT09IG51bGwgfHwgc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYWxpYXMgbm9kZSBzaG91bGQgbm90IGhhdmUgYW55IHByb3BlcnRpZXMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWFkUGxhaW5TY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQsIENPTlRFWFRfRkxPV19JTiA9PT0gbm9kZUNvbnRleHQpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc3RhdGUudGFnID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS50YWcgPSAnPyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbmRlbnRTdGF0dXMgPT09IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZTogYmxvY2sgc2VxdWVuY2VzIGFyZSBhbGxvd2VkIHRvIGhhdmUgc2FtZSBpbmRlbnRhdGlvbiBsZXZlbCBhcyB0aGUgcGFyZW50LlxuICAgICAgLy8gaHR0cDovL3d3dy55YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjaWQyNzk5Nzg0XG4gICAgICBoYXNDb250ZW50ID0gYWxsb3dCbG9ja0NvbGxlY3Rpb25zICYmIHJlYWRCbG9ja1NlcXVlbmNlKHN0YXRlLCBibG9ja0luZGVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICchJykge1xuICAgIGlmIChzdGF0ZS50YWcgPT09ICc/Jykge1xuICAgICAgLy8gSW1wbGljaXQgcmVzb2x2aW5nIGlzIG5vdCBhbGxvd2VkIGZvciBub24tc2NhbGFyIHR5cGVzLCBhbmQgJz8nXG4gICAgICAvLyBub24tc3BlY2lmaWMgdGFnIGlzIG9ubHkgYXV0b21hdGljYWxseSBhc3NpZ25lZCB0byBwbGFpbiBzY2FsYXJzLlxuICAgICAgLy9cbiAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byBjaGVjayBraW5kIGNvbmZvcm1pdHkgaW4gY2FzZSB1c2VyIGV4cGxpY2l0bHkgYXNzaWducyAnPydcbiAgICAgIC8vIHRhZywgZm9yIGV4YW1wbGUgbGlrZSB0aGlzOiBcIiE8Pz4gWzBdXCJcbiAgICAgIC8vXG4gICAgICBpZiAoc3RhdGUucmVzdWx0ICE9PSBudWxsICYmIHN0YXRlLmtpbmQgIT09ICdzY2FsYXInKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmFjY2VwdGFibGUgbm9kZSBraW5kIGZvciAhPD8+IHRhZzsgaXQgc2hvdWxkIGJlIFwic2NhbGFyXCIsIG5vdCBcIicgKyBzdGF0ZS5raW5kICsgJ1wiJyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodHlwZUluZGV4ID0gMCwgdHlwZVF1YW50aXR5ID0gc3RhdGUuaW1wbGljaXRUeXBlcy5sZW5ndGg7IHR5cGVJbmRleCA8IHR5cGVRdWFudGl0eTsgdHlwZUluZGV4ICs9IDEpIHtcbiAgICAgICAgdHlwZSA9IHN0YXRlLmltcGxpY2l0VHlwZXNbdHlwZUluZGV4XTtcblxuICAgICAgICBpZiAodHlwZS5yZXNvbHZlKHN0YXRlLnJlc3VsdCkpIHsgLy8gYHN0YXRlLnJlc3VsdGAgdXBkYXRlZCBpbiByZXNvbHZlciBpZiBtYXRjaGVkXG4gICAgICAgICAgc3RhdGUucmVzdWx0ID0gdHlwZS5jb25zdHJ1Y3Qoc3RhdGUucmVzdWx0KTtcbiAgICAgICAgICBzdGF0ZS50YWcgPSB0eXBlLnRhZztcbiAgICAgICAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLnR5cGVNYXBbc3RhdGUua2luZCB8fCAnZmFsbGJhY2snXSwgc3RhdGUudGFnKSkge1xuICAgICAgdHlwZSA9IHN0YXRlLnR5cGVNYXBbc3RhdGUua2luZCB8fCAnZmFsbGJhY2snXVtzdGF0ZS50YWddO1xuXG4gICAgICBpZiAoc3RhdGUucmVzdWx0ICE9PSBudWxsICYmIHR5cGUua2luZCAhPT0gc3RhdGUua2luZCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIG5vZGUga2luZCBmb3IgITwnICsgc3RhdGUudGFnICsgJz4gdGFnOyBpdCBzaG91bGQgYmUgXCInICsgdHlwZS5raW5kICsgJ1wiLCBub3QgXCInICsgc3RhdGUua2luZCArICdcIicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXR5cGUucmVzb2x2ZShzdGF0ZS5yZXN1bHQpKSB7IC8vIGBzdGF0ZS5yZXN1bHRgIHVwZGF0ZWQgaW4gcmVzb2x2ZXIgaWYgbWF0Y2hlZFxuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2Fubm90IHJlc29sdmUgYSBub2RlIHdpdGggITwnICsgc3RhdGUudGFnICsgJz4gZXhwbGljaXQgdGFnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5yZXN1bHQgPSB0eXBlLmNvbnN0cnVjdChzdGF0ZS5yZXN1bHQpO1xuICAgICAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3Vua25vd24gdGFnICE8JyArIHN0YXRlLnRhZyArICc+Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgc3RhdGUubGlzdGVuZXIoJ2Nsb3NlJywgc3RhdGUpO1xuICB9XG4gIHJldHVybiBzdGF0ZS50YWcgIT09IG51bGwgfHwgIHN0YXRlLmFuY2hvciAhPT0gbnVsbCB8fCBoYXNDb250ZW50O1xufVxuXG5mdW5jdGlvbiByZWFkRG9jdW1lbnQoc3RhdGUpIHtcbiAgdmFyIGRvY3VtZW50U3RhcnQgPSBzdGF0ZS5wb3NpdGlvbixcbiAgICAgIF9wb3NpdGlvbixcbiAgICAgIGRpcmVjdGl2ZU5hbWUsXG4gICAgICBkaXJlY3RpdmVBcmdzLFxuICAgICAgaGFzRGlyZWN0aXZlcyA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgc3RhdGUudmVyc2lvbiA9IG51bGw7XG4gIHN0YXRlLmNoZWNrTGluZUJyZWFrcyA9IHN0YXRlLmxlZ2FjeTtcbiAgc3RhdGUudGFnTWFwID0ge307XG4gIHN0YXRlLmFuY2hvck1hcCA9IHt9O1xuXG4gIHdoaWxlICgoY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSkgIT09IDApIHtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPiAwIHx8IGNoICE9PSAweDI1LyogJSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaGFzRGlyZWN0aXZlcyA9IHRydWU7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZGlyZWN0aXZlTmFtZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICAgIGRpcmVjdGl2ZUFyZ3MgPSBbXTtcblxuICAgIGlmIChkaXJlY3RpdmVOYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkaXJlY3RpdmUgbmFtZSBtdXN0IG5vdCBiZSBsZXNzIHRoYW4gb25lIGNoYXJhY3RlciBpbiBsZW5ndGgnKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfRU9MKGNoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNfRU9MKGNoKSkgYnJlYWs7XG5cbiAgICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBkaXJlY3RpdmVBcmdzLnB1c2goc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbikpO1xuICAgIH1cblxuICAgIGlmIChjaCAhPT0gMCkgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG5cbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwoZGlyZWN0aXZlSGFuZGxlcnMsIGRpcmVjdGl2ZU5hbWUpKSB7XG4gICAgICBkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmVOYW1lXShzdGF0ZSwgZGlyZWN0aXZlTmFtZSwgZGlyZWN0aXZlQXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ3Vua25vd24gZG9jdW1lbnQgZGlyZWN0aXZlIFwiJyArIGRpcmVjdGl2ZU5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH1cblxuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IDAgJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pICAgICA9PT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKSA9PT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAyKSA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbiArPSAzO1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcblxuICB9IGVsc2UgaWYgKGhhc0RpcmVjdGl2ZXMpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZGlyZWN0aXZlcyBlbmQgbWFyayBpcyBleHBlY3RlZCcpO1xuICB9XG5cbiAgY29tcG9zZU5vZGUoc3RhdGUsIHN0YXRlLmxpbmVJbmRlbnQgLSAxLCBDT05URVhUX0JMT0NLX09VVCwgZmFsc2UsIHRydWUpO1xuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgaWYgKHN0YXRlLmNoZWNrTGluZUJyZWFrcyAmJlxuICAgICAgUEFUVEVSTl9OT05fQVNDSUlfTElORV9CUkVBS1MudGVzdChzdGF0ZS5pbnB1dC5zbGljZShkb2N1bWVudFN0YXJ0LCBzdGF0ZS5wb3NpdGlvbikpKSB7XG4gICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAnbm9uLUFTQ0lJIGxpbmUgYnJlYWtzIGFyZSBpbnRlcnByZXRlZCBhcyBjb250ZW50Jyk7XG4gIH1cblxuICBzdGF0ZS5kb2N1bWVudHMucHVzaChzdGF0ZS5yZXN1bHQpO1xuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcblxuICAgIGlmIChzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSA9PT0gMHgyRS8qIC4gKi8pIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uICs9IDM7XG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA8IChzdGF0ZS5sZW5ndGggLSAxKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdlbmQgb2YgdGhlIHN0cmVhbSBvciBhIGRvY3VtZW50IHNlcGFyYXRvciBpcyBleHBlY3RlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWREb2N1bWVudHMoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaW5wdXQgPSBTdHJpbmcoaW5wdXQpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaW5wdXQubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAvLyBBZGQgdGFpbGluZyBgXFxuYCBpZiBub3QgZXhpc3RzXG4gICAgaWYgKGlucHV0LmNoYXJDb2RlQXQoaW5wdXQubGVuZ3RoIC0gMSkgIT09IDB4MEEvKiBMRiAqLyAmJlxuICAgICAgICBpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpICE9PSAweDBELyogQ1IgKi8pIHtcbiAgICAgIGlucHV0ICs9ICdcXG4nO1xuICAgIH1cblxuICAgIC8vIFN0cmlwIEJPTVxuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlKGlucHV0LCBvcHRpb25zKTtcblxuICB2YXIgbnVsbHBvcyA9IGlucHV0LmluZGV4T2YoJ1xcMCcpO1xuXG4gIGlmIChudWxscG9zICE9PSAtMSkge1xuICAgIHN0YXRlLnBvc2l0aW9uID0gbnVsbHBvcztcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbnVsbCBieXRlIGlzIG5vdCBhbGxvd2VkIGluIGlucHV0Jyk7XG4gIH1cblxuICAvLyBVc2UgMCBhcyBzdHJpbmcgdGVybWluYXRvci4gVGhhdCBzaWduaWZpY2FudGx5IHNpbXBsaWZpZXMgYm91bmRzIGNoZWNrLlxuICBzdGF0ZS5pbnB1dCArPSAnXFwwJztcblxuICB3aGlsZSAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MjAvKiBTcGFjZSAqLykge1xuICAgIHN0YXRlLmxpbmVJbmRlbnQgKz0gMTtcbiAgICBzdGF0ZS5wb3NpdGlvbiArPSAxO1xuICB9XG5cbiAgd2hpbGUgKHN0YXRlLnBvc2l0aW9uIDwgKHN0YXRlLmxlbmd0aCAtIDEpKSB7XG4gICAgcmVhZERvY3VtZW50KHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5kb2N1bWVudHM7XG59XG5cblxuZnVuY3Rpb24gbG9hZEFsbChpbnB1dCwgaXRlcmF0b3IsIG9wdGlvbnMpIHtcbiAgaWYgKGl0ZXJhdG9yICE9PSBudWxsICYmIHR5cGVvZiBpdGVyYXRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IGl0ZXJhdG9yO1xuICAgIGl0ZXJhdG9yID0gbnVsbDtcbiAgfVxuXG4gIHZhciBkb2N1bWVudHMgPSBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKTtcblxuICBpZiAodHlwZW9mIGl0ZXJhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50cztcbiAgfVxuXG4gIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gZG9jdW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBpdGVyYXRvcihkb2N1bWVudHNbaW5kZXhdKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWQoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdmFyIGRvY3VtZW50cyA9IGxvYWREb2N1bWVudHMoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIGlmIChkb2N1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQqL1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBkb2N1bWVudHNbMF07XG4gIH1cbiAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ2V4cGVjdGVkIGEgc2luZ2xlIGRvY3VtZW50IGluIHRoZSBzdHJlYW0sIGJ1dCBmb3VuZCBtb3JlJyk7XG59XG5cblxuZnVuY3Rpb24gc2FmZUxvYWRBbGwoaW5wdXQsIGl0ZXJhdG9yLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3IgPT09ICdvYmplY3QnICYmIGl0ZXJhdG9yICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBpdGVyYXRvcjtcbiAgICBpdGVyYXRvciA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbG9hZEFsbChpbnB1dCwgaXRlcmF0b3IsIGNvbW1vbi5leHRlbmQoeyBzY2hlbWE6IERFRkFVTFRfU0FGRV9TQ0hFTUEgfSwgb3B0aW9ucykpO1xufVxuXG5cbmZ1bmN0aW9uIHNhZmVMb2FkKGlucHV0LCBvcHRpb25zKSB7XG4gIHJldHVybiBsb2FkKGlucHV0LCBjb21tb24uZXh0ZW5kKHsgc2NoZW1hOiBERUZBVUxUX1NBRkVfU0NIRU1BIH0sIG9wdGlvbnMpKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5sb2FkQWxsICAgICA9IGxvYWRBbGw7XG5tb2R1bGUuZXhwb3J0cy5sb2FkICAgICAgICA9IGxvYWQ7XG5tb2R1bGUuZXhwb3J0cy5zYWZlTG9hZEFsbCA9IHNhZmVMb2FkQWxsO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWQgICAgPSBzYWZlTG9hZDtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUqL1xuXG52YXIgY29tbW9uICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uJyk7XG52YXIgWUFNTEV4Y2VwdGlvbiAgICAgICA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG52YXIgREVGQVVMVF9GVUxMX1NDSEVNQSA9IHJlcXVpcmUoJy4vc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xudmFyIERFRkFVTFRfU0FGRV9TQ0hFTUEgPSByZXF1aXJlKCcuL3NjaGVtYS9kZWZhdWx0X3NhZmUnKTtcblxudmFyIF90b1N0cmluZyAgICAgICA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIENIQVJfVEFCICAgICAgICAgICAgICAgICAgPSAweDA5OyAvKiBUYWIgKi9cbnZhciBDSEFSX0xJTkVfRkVFRCAgICAgICAgICAgID0gMHgwQTsgLyogTEYgKi9cbnZhciBDSEFSX0NBUlJJQUdFX1JFVFVSTiAgICAgID0gMHgwRDsgLyogQ1IgKi9cbnZhciBDSEFSX1NQQUNFICAgICAgICAgICAgICAgID0gMHgyMDsgLyogU3BhY2UgKi9cbnZhciBDSEFSX0VYQ0xBTUFUSU9OICAgICAgICAgID0gMHgyMTsgLyogISAqL1xudmFyIENIQVJfRE9VQkxFX1FVT1RFICAgICAgICAgPSAweDIyOyAvKiBcIiAqL1xudmFyIENIQVJfU0hBUlAgICAgICAgICAgICAgICAgPSAweDIzOyAvKiAjICovXG52YXIgQ0hBUl9QRVJDRU5UICAgICAgICAgICAgICA9IDB4MjU7IC8qICUgKi9cbnZhciBDSEFSX0FNUEVSU0FORCAgICAgICAgICAgID0gMHgyNjsgLyogJiAqL1xudmFyIENIQVJfU0lOR0xFX1FVT1RFICAgICAgICAgPSAweDI3OyAvKiAnICovXG52YXIgQ0hBUl9BU1RFUklTSyAgICAgICAgICAgICA9IDB4MkE7IC8qICogKi9cbnZhciBDSEFSX0NPTU1BICAgICAgICAgICAgICAgID0gMHgyQzsgLyogLCAqL1xudmFyIENIQVJfTUlOVVMgICAgICAgICAgICAgICAgPSAweDJEOyAvKiAtICovXG52YXIgQ0hBUl9DT0xPTiAgICAgICAgICAgICAgICA9IDB4M0E7IC8qIDogKi9cbnZhciBDSEFSX0VRVUFMUyAgICAgICAgICAgICAgID0gMHgzRDsgLyogPSAqL1xudmFyIENIQVJfR1JFQVRFUl9USEFOICAgICAgICAgPSAweDNFOyAvKiA+ICovXG52YXIgQ0hBUl9RVUVTVElPTiAgICAgICAgICAgICA9IDB4M0Y7IC8qID8gKi9cbnZhciBDSEFSX0NPTU1FUkNJQUxfQVQgICAgICAgID0gMHg0MDsgLyogQCAqL1xudmFyIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVCAgPSAweDVCOyAvKiBbICovXG52YXIgQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCA9IDB4NUQ7IC8qIF0gKi9cbnZhciBDSEFSX0dSQVZFX0FDQ0VOVCAgICAgICAgID0gMHg2MDsgLyogYCAqL1xudmFyIENIQVJfTEVGVF9DVVJMWV9CUkFDS0VUICAgPSAweDdCOyAvKiB7ICovXG52YXIgQ0hBUl9WRVJUSUNBTF9MSU5FICAgICAgICA9IDB4N0M7IC8qIHwgKi9cbnZhciBDSEFSX1JJR0hUX0NVUkxZX0JSQUNLRVQgID0gMHg3RDsgLyogfSAqL1xuXG52YXIgRVNDQVBFX1NFUVVFTkNFUyA9IHt9O1xuXG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDBdICAgPSAnXFxcXDAnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDA3XSAgID0gJ1xcXFxhJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwOF0gICA9ICdcXFxcYic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDldICAgPSAnXFxcXHQnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBBXSAgID0gJ1xcXFxuJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwQl0gICA9ICdcXFxcdic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MENdICAgPSAnXFxcXGYnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBEXSAgID0gJ1xcXFxyJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgxQl0gICA9ICdcXFxcZSc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjJdICAgPSAnXFxcXFwiJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHg1Q10gICA9ICdcXFxcXFxcXCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4ODVdICAgPSAnXFxcXE4nO1xuRVNDQVBFX1NFUVVFTkNFU1sweEEwXSAgID0gJ1xcXFxfJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgyMDI4XSA9ICdcXFxcTCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjAyOV0gPSAnXFxcXFAnO1xuXG52YXIgREVQUkVDQVRFRF9CT09MRUFOU19TWU5UQVggPSBbXG4gICd5JywgJ1knLCAneWVzJywgJ1llcycsICdZRVMnLCAnb24nLCAnT24nLCAnT04nLFxuICAnbicsICdOJywgJ25vJywgJ05vJywgJ05PJywgJ29mZicsICdPZmYnLCAnT0ZGJ1xuXTtcblxuZnVuY3Rpb24gY29tcGlsZVN0eWxlTWFwKHNjaGVtYSwgbWFwKSB7XG4gIHZhciByZXN1bHQsIGtleXMsIGluZGV4LCBsZW5ndGgsIHRhZywgc3R5bGUsIHR5cGU7XG5cbiAgaWYgKG1hcCA9PT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHJlc3VsdCA9IHt9O1xuICBrZXlzID0gT2JqZWN0LmtleXMobWFwKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdGFnID0ga2V5c1tpbmRleF07XG4gICAgc3R5bGUgPSBTdHJpbmcobWFwW3RhZ10pO1xuXG4gICAgaWYgKHRhZy5zbGljZSgwLCAyKSA9PT0gJyEhJykge1xuICAgICAgdGFnID0gJ3RhZzp5YW1sLm9yZywyMDAyOicgKyB0YWcuc2xpY2UoMik7XG4gICAgfVxuICAgIHR5cGUgPSBzY2hlbWEuY29tcGlsZWRUeXBlTWFwWydmYWxsYmFjayddW3RhZ107XG5cbiAgICBpZiAodHlwZSAmJiBfaGFzT3duUHJvcGVydHkuY2FsbCh0eXBlLnN0eWxlQWxpYXNlcywgc3R5bGUpKSB7XG4gICAgICBzdHlsZSA9IHR5cGUuc3R5bGVBbGlhc2VzW3N0eWxlXTtcbiAgICB9XG5cbiAgICByZXN1bHRbdGFnXSA9IHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSGV4KGNoYXJhY3Rlcikge1xuICB2YXIgc3RyaW5nLCBoYW5kbGUsIGxlbmd0aDtcblxuICBzdHJpbmcgPSBjaGFyYWN0ZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cbiAgaWYgKGNoYXJhY3RlciA8PSAweEZGKSB7XG4gICAgaGFuZGxlID0gJ3gnO1xuICAgIGxlbmd0aCA9IDI7XG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyIDw9IDB4RkZGRikge1xuICAgIGhhbmRsZSA9ICd1JztcbiAgICBsZW5ndGggPSA0O1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA8PSAweEZGRkZGRkZGKSB7XG4gICAgaGFuZGxlID0gJ1UnO1xuICAgIGxlbmd0aCA9IDg7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ2NvZGUgcG9pbnQgd2l0aGluIGEgc3RyaW5nIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIDB4RkZGRkZGRkYnKTtcbiAgfVxuXG4gIHJldHVybiAnXFxcXCcgKyBoYW5kbGUgKyBjb21tb24ucmVwZWF0KCcwJywgbGVuZ3RoIC0gc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFN0YXRlKG9wdGlvbnMpIHtcbiAgdGhpcy5zY2hlbWEgICAgICAgID0gb3B0aW9uc1snc2NoZW1hJ10gfHwgREVGQVVMVF9GVUxMX1NDSEVNQTtcbiAgdGhpcy5pbmRlbnQgICAgICAgID0gTWF0aC5tYXgoMSwgKG9wdGlvbnNbJ2luZGVudCddIHx8IDIpKTtcbiAgdGhpcy5ub0FycmF5SW5kZW50ID0gb3B0aW9uc1snbm9BcnJheUluZGVudCddIHx8IGZhbHNlO1xuICB0aGlzLnNraXBJbnZhbGlkICAgPSBvcHRpb25zWydza2lwSW52YWxpZCddIHx8IGZhbHNlO1xuICB0aGlzLmZsb3dMZXZlbCAgICAgPSAoY29tbW9uLmlzTm90aGluZyhvcHRpb25zWydmbG93TGV2ZWwnXSkgPyAtMSA6IG9wdGlvbnNbJ2Zsb3dMZXZlbCddKTtcbiAgdGhpcy5zdHlsZU1hcCAgICAgID0gY29tcGlsZVN0eWxlTWFwKHRoaXMuc2NoZW1hLCBvcHRpb25zWydzdHlsZXMnXSB8fCBudWxsKTtcbiAgdGhpcy5zb3J0S2V5cyAgICAgID0gb3B0aW9uc1snc29ydEtleXMnXSB8fCBmYWxzZTtcbiAgdGhpcy5saW5lV2lkdGggICAgID0gb3B0aW9uc1snbGluZVdpZHRoJ10gfHwgODA7XG4gIHRoaXMubm9SZWZzICAgICAgICA9IG9wdGlvbnNbJ25vUmVmcyddIHx8IGZhbHNlO1xuICB0aGlzLm5vQ29tcGF0TW9kZSAgPSBvcHRpb25zWydub0NvbXBhdE1vZGUnXSB8fCBmYWxzZTtcbiAgdGhpcy5jb25kZW5zZUZsb3cgID0gb3B0aW9uc1snY29uZGVuc2VGbG93J10gfHwgZmFsc2U7XG5cbiAgdGhpcy5pbXBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRJbXBsaWNpdDtcbiAgdGhpcy5leHBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRFeHBsaWNpdDtcblxuICB0aGlzLnRhZyA9IG51bGw7XG4gIHRoaXMucmVzdWx0ID0gJyc7XG5cbiAgdGhpcy5kdXBsaWNhdGVzID0gW107XG4gIHRoaXMudXNlZER1cGxpY2F0ZXMgPSBudWxsO1xufVxuXG4vLyBJbmRlbnRzIGV2ZXJ5IGxpbmUgaW4gYSBzdHJpbmcuIEVtcHR5IGxpbmVzIChcXG4gb25seSkgYXJlIG5vdCBpbmRlbnRlZC5cbmZ1bmN0aW9uIGluZGVudFN0cmluZyhzdHJpbmcsIHNwYWNlcykge1xuICB2YXIgaW5kID0gY29tbW9uLnJlcGVhdCgnICcsIHNwYWNlcyksXG4gICAgICBwb3NpdGlvbiA9IDAsXG4gICAgICBuZXh0ID0gLTEsXG4gICAgICByZXN1bHQgPSAnJyxcbiAgICAgIGxpbmUsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgIG5leHQgPSBzdHJpbmcuaW5kZXhPZignXFxuJywgcG9zaXRpb24pO1xuICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgbGluZSA9IHN0cmluZy5zbGljZShwb3NpdGlvbik7XG4gICAgICBwb3NpdGlvbiA9IGxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZSA9IHN0cmluZy5zbGljZShwb3NpdGlvbiwgbmV4dCArIDEpO1xuICAgICAgcG9zaXRpb24gPSBuZXh0ICsgMTtcbiAgICB9XG5cbiAgICBpZiAobGluZS5sZW5ndGggJiYgbGluZSAhPT0gJ1xcbicpIHJlc3VsdCArPSBpbmQ7XG5cbiAgICByZXN1bHQgKz0gbGluZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKSB7XG4gIHJldHVybiAnXFxuJyArIGNvbW1vbi5yZXBlYXQoJyAnLCBzdGF0ZS5pbmRlbnQgKiBsZXZlbCk7XG59XG5cbmZ1bmN0aW9uIHRlc3RJbXBsaWNpdFJlc29sdmluZyhzdGF0ZSwgc3RyKSB7XG4gIHZhciBpbmRleCwgbGVuZ3RoLCB0eXBlO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBzdGF0ZS5pbXBsaWNpdFR5cGVzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB0eXBlID0gc3RhdGUuaW1wbGljaXRUeXBlc1tpbmRleF07XG5cbiAgICBpZiAodHlwZS5yZXNvbHZlKHN0cikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gWzMzXSBzLXdoaXRlIDo6PSBzLXNwYWNlIHwgcy10YWJcbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjKSB7XG4gIHJldHVybiBjID09PSBDSEFSX1NQQUNFIHx8IGMgPT09IENIQVJfVEFCO1xufVxuXG4vLyBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBjYW4gYmUgcHJpbnRlZCB3aXRob3V0IGVzY2FwaW5nLlxuLy8gRnJvbSBZQU1MIDEuMjogXCJhbnkgYWxsb3dlZCBjaGFyYWN0ZXJzIGtub3duIHRvIGJlIG5vbi1wcmludGFibGVcbi8vIHNob3VsZCBhbHNvIGJlIGVzY2FwZWQuIFtIb3dldmVyLF0gVGhpcyBpc25cdTIwMTl0IG1hbmRhdG9yeVwiXG4vLyBEZXJpdmVkIGZyb20gbmItY2hhciAtIFxcdCAtICN4ODUgLSAjeEEwIC0gI3gyMDI4IC0gI3gyMDI5LlxuZnVuY3Rpb24gaXNQcmludGFibGUoYykge1xuICByZXR1cm4gICgweDAwMDIwIDw9IGMgJiYgYyA8PSAweDAwMDA3RSlcbiAgICAgIHx8ICgoMHgwMDBBMSA8PSBjICYmIGMgPD0gMHgwMEQ3RkYpICYmIGMgIT09IDB4MjAyOCAmJiBjICE9PSAweDIwMjkpXG4gICAgICB8fCAoKDB4MEUwMDAgPD0gYyAmJiBjIDw9IDB4MDBGRkZEKSAmJiBjICE9PSAweEZFRkYgLyogQk9NICovKVxuICAgICAgfHwgICgweDEwMDAwIDw9IGMgJiYgYyA8PSAweDEwRkZGRik7XG59XG5cbi8vIFszNF0gbnMtY2hhciA6Oj0gbmItY2hhciAtIHMtd2hpdGVcbi8vIFsyN10gbmItY2hhciA6Oj0gYy1wcmludGFibGUgLSBiLWNoYXIgLSBjLWJ5dGUtb3JkZXItbWFya1xuLy8gWzI2XSBiLWNoYXIgIDo6PSBiLWxpbmUtZmVlZCB8IGItY2FycmlhZ2UtcmV0dXJuXG4vLyBbMjRdIGItbGluZS1mZWVkICAgICAgIDo6PSAgICAgI3hBICAgIC8qIExGICovXG4vLyBbMjVdIGItY2FycmlhZ2UtcmV0dXJuIDo6PSAgICAgI3hEICAgIC8qIENSICovXG4vLyBbM10gIGMtYnl0ZS1vcmRlci1tYXJrIDo6PSAgICAgI3hGRUZGXG5mdW5jdGlvbiBpc05zQ2hhcihjKSB7XG4gIHJldHVybiBpc1ByaW50YWJsZShjKSAmJiAhaXNXaGl0ZXNwYWNlKGMpXG4gICAgLy8gYnl0ZS1vcmRlci1tYXJrXG4gICAgJiYgYyAhPT0gMHhGRUZGXG4gICAgLy8gYi1jaGFyXG4gICAgJiYgYyAhPT0gQ0hBUl9DQVJSSUFHRV9SRVRVUk5cbiAgICAmJiBjICE9PSBDSEFSX0xJTkVfRkVFRDtcbn1cblxuLy8gU2ltcGxpZmllZCB0ZXN0IGZvciB2YWx1ZXMgYWxsb3dlZCBhZnRlciB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHBsYWluIHN0eWxlLlxuZnVuY3Rpb24gaXNQbGFpblNhZmUoYywgcHJldikge1xuICAvLyBVc2VzIGEgc3Vic2V0IG9mIG5iLWNoYXIgLSBjLWZsb3ctaW5kaWNhdG9yIC0gXCI6XCIgLSBcIiNcIlxuICAvLyB3aGVyZSBuYi1jaGFyIDo6PSBjLXByaW50YWJsZSAtIGItY2hhciAtIGMtYnl0ZS1vcmRlci1tYXJrLlxuICByZXR1cm4gaXNQcmludGFibGUoYykgJiYgYyAhPT0gMHhGRUZGXG4gICAgLy8gLSBjLWZsb3ctaW5kaWNhdG9yXG4gICAgJiYgYyAhPT0gQ0hBUl9DT01NQVxuICAgICYmIGMgIT09IENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfQ1VSTFlfQlJBQ0tFVFxuICAgIC8vIC0gXCI6XCIgLSBcIiNcIlxuICAgIC8vIC8qIEFuIG5zLWNoYXIgcHJlY2VkaW5nICovIFwiI1wiXG4gICAgJiYgYyAhPT0gQ0hBUl9DT0xPTlxuICAgICYmICgoYyAhPT0gQ0hBUl9TSEFSUCkgfHwgKHByZXYgJiYgaXNOc0NoYXIocHJldikpKTtcbn1cblxuLy8gU2ltcGxpZmllZCB0ZXN0IGZvciB2YWx1ZXMgYWxsb3dlZCBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHBsYWluIHN0eWxlLlxuZnVuY3Rpb24gaXNQbGFpblNhZmVGaXJzdChjKSB7XG4gIC8vIFVzZXMgYSBzdWJzZXQgb2YgbnMtY2hhciAtIGMtaW5kaWNhdG9yXG4gIC8vIHdoZXJlIG5zLWNoYXIgPSBuYi1jaGFyIC0gcy13aGl0ZS5cbiAgcmV0dXJuIGlzUHJpbnRhYmxlKGMpICYmIGMgIT09IDB4RkVGRlxuICAgICYmICFpc1doaXRlc3BhY2UoYykgLy8gLSBzLXdoaXRlXG4gICAgLy8gLSAoYy1pbmRpY2F0b3IgOjo9XG4gICAgLy8gXHUyMDFDLVx1MjAxRCB8IFx1MjAxQz9cdTIwMUQgfCBcdTIwMUM6XHUyMDFEIHwgXHUyMDFDLFx1MjAxRCB8IFx1MjAxQ1tcdTIwMUQgfCBcdTIwMUNdXHUyMDFEIHwgXHUyMDFDe1x1MjAxRCB8IFx1MjAxQ31cdTIwMURcbiAgICAmJiBjICE9PSBDSEFSX01JTlVTXG4gICAgJiYgYyAhPT0gQ0hBUl9RVUVTVElPTlxuICAgICYmIGMgIT09IENIQVJfQ09MT05cbiAgICAmJiBjICE9PSBDSEFSX0NPTU1BXG4gICAgJiYgYyAhPT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfTEVGVF9DVVJMWV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9DVVJMWV9CUkFDS0VUXG4gICAgLy8gfCBcdTIwMUMjXHUyMDFEIHwgXHUyMDFDJlx1MjAxRCB8IFx1MjAxQypcdTIwMUQgfCBcdTIwMUMhXHUyMDFEIHwgXHUyMDFDfFx1MjAxRCB8IFx1MjAxQz1cdTIwMUQgfCBcdTIwMUM+XHUyMDFEIHwgXHUyMDFDJ1x1MjAxRCB8IFx1MjAxQ1wiXHUyMDFEXG4gICAgJiYgYyAhPT0gQ0hBUl9TSEFSUFxuICAgICYmIGMgIT09IENIQVJfQU1QRVJTQU5EXG4gICAgJiYgYyAhPT0gQ0hBUl9BU1RFUklTS1xuICAgICYmIGMgIT09IENIQVJfRVhDTEFNQVRJT05cbiAgICAmJiBjICE9PSBDSEFSX1ZFUlRJQ0FMX0xJTkVcbiAgICAmJiBjICE9PSBDSEFSX0VRVUFMU1xuICAgICYmIGMgIT09IENIQVJfR1JFQVRFUl9USEFOXG4gICAgJiYgYyAhPT0gQ0hBUl9TSU5HTEVfUVVPVEVcbiAgICAmJiBjICE9PSBDSEFSX0RPVUJMRV9RVU9URVxuICAgIC8vIHwgXHUyMDFDJVx1MjAxRCB8IFx1MjAxQ0BcdTIwMUQgfCBcdTIwMUNgXHUyMDFEKVxuICAgICYmIGMgIT09IENIQVJfUEVSQ0VOVFxuICAgICYmIGMgIT09IENIQVJfQ09NTUVSQ0lBTF9BVFxuICAgICYmIGMgIT09IENIQVJfR1JBVkVfQUNDRU5UO1xufVxuXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYmxvY2sgaW5kZW50YXRpb24gaW5kaWNhdG9yIGlzIHJlcXVpcmVkLlxuZnVuY3Rpb24gbmVlZEluZGVudEluZGljYXRvcihzdHJpbmcpIHtcbiAgdmFyIGxlYWRpbmdTcGFjZVJlID0gL15cXG4qIC87XG4gIHJldHVybiBsZWFkaW5nU3BhY2VSZS50ZXN0KHN0cmluZyk7XG59XG5cbnZhciBTVFlMRV9QTEFJTiAgID0gMSxcbiAgICBTVFlMRV9TSU5HTEUgID0gMixcbiAgICBTVFlMRV9MSVRFUkFMID0gMyxcbiAgICBTVFlMRV9GT0xERUQgID0gNCxcbiAgICBTVFlMRV9ET1VCTEUgID0gNTtcblxuLy8gRGV0ZXJtaW5lcyB3aGljaCBzY2FsYXIgc3R5bGVzIGFyZSBwb3NzaWJsZSBhbmQgcmV0dXJucyB0aGUgcHJlZmVycmVkIHN0eWxlLlxuLy8gbGluZVdpZHRoID0gLTEgPT4gbm8gbGltaXQuXG4vLyBQcmUtY29uZGl0aW9uczogc3RyLmxlbmd0aCA+IDAuXG4vLyBQb3N0LWNvbmRpdGlvbnM6XG4vLyAgICBTVFlMRV9QTEFJTiBvciBTVFlMRV9TSU5HTEUgPT4gbm8gXFxuIGFyZSBpbiB0aGUgc3RyaW5nLlxuLy8gICAgU1RZTEVfTElURVJBTCA9PiBubyBsaW5lcyBhcmUgc3VpdGFibGUgZm9yIGZvbGRpbmcgKG9yIGxpbmVXaWR0aCBpcyAtMSkuXG4vLyAgICBTVFlMRV9GT0xERUQgPT4gYSBsaW5lID4gbGluZVdpZHRoIGFuZCBjYW4gYmUgZm9sZGVkIChhbmQgbGluZVdpZHRoICE9IC0xKS5cbmZ1bmN0aW9uIGNob29zZVNjYWxhclN0eWxlKHN0cmluZywgc2luZ2xlTGluZU9ubHksIGluZGVudFBlckxldmVsLCBsaW5lV2lkdGgsIHRlc3RBbWJpZ3VvdXNUeXBlKSB7XG4gIHZhciBpO1xuICB2YXIgY2hhciwgcHJldl9jaGFyO1xuICB2YXIgaGFzTGluZUJyZWFrID0gZmFsc2U7XG4gIHZhciBoYXNGb2xkYWJsZUxpbmUgPSBmYWxzZTsgLy8gb25seSBjaGVja2VkIGlmIHNob3VsZFRyYWNrV2lkdGhcbiAgdmFyIHNob3VsZFRyYWNrV2lkdGggPSBsaW5lV2lkdGggIT09IC0xO1xuICB2YXIgcHJldmlvdXNMaW5lQnJlYWsgPSAtMTsgLy8gY291bnQgdGhlIGZpcnN0IGxpbmUgY29ycmVjdGx5XG4gIHZhciBwbGFpbiA9IGlzUGxhaW5TYWZlRmlyc3Qoc3RyaW5nLmNoYXJDb2RlQXQoMCkpXG4gICAgICAgICAgJiYgIWlzV2hpdGVzcGFjZShzdHJpbmcuY2hhckNvZGVBdChzdHJpbmcubGVuZ3RoIC0gMSkpO1xuXG4gIGlmIChzaW5nbGVMaW5lT25seSkge1xuICAgIC8vIENhc2U6IG5vIGJsb2NrIHN0eWxlcy5cbiAgICAvLyBDaGVjayBmb3IgZGlzYWxsb3dlZCBjaGFyYWN0ZXJzIHRvIHJ1bGUgb3V0IHBsYWluIGFuZCBzaW5nbGUuXG4gICAgZm9yIChpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhciA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgaWYgKCFpc1ByaW50YWJsZShjaGFyKSkge1xuICAgICAgICByZXR1cm4gU1RZTEVfRE9VQkxFO1xuICAgICAgfVxuICAgICAgcHJldl9jaGFyID0gaSA+IDAgPyBzdHJpbmcuY2hhckNvZGVBdChpIC0gMSkgOiBudWxsO1xuICAgICAgcGxhaW4gPSBwbGFpbiAmJiBpc1BsYWluU2FmZShjaGFyLCBwcmV2X2NoYXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDYXNlOiBibG9jayBzdHlsZXMgcGVybWl0dGVkLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgIGlmIChjaGFyID09PSBDSEFSX0xJTkVfRkVFRCkge1xuICAgICAgICBoYXNMaW5lQnJlYWsgPSB0cnVlO1xuICAgICAgICAvLyBDaGVjayBpZiBhbnkgbGluZSBjYW4gYmUgZm9sZGVkLlxuICAgICAgICBpZiAoc2hvdWxkVHJhY2tXaWR0aCkge1xuICAgICAgICAgIGhhc0ZvbGRhYmxlTGluZSA9IGhhc0ZvbGRhYmxlTGluZSB8fFxuICAgICAgICAgICAgLy8gRm9sZGFibGUgbGluZSA9IHRvbyBsb25nLCBhbmQgbm90IG1vcmUtaW5kZW50ZWQuXG4gICAgICAgICAgICAoaSAtIHByZXZpb3VzTGluZUJyZWFrIC0gMSA+IGxpbmVXaWR0aCAmJlxuICAgICAgICAgICAgIHN0cmluZ1twcmV2aW91c0xpbmVCcmVhayArIDFdICE9PSAnICcpO1xuICAgICAgICAgIHByZXZpb3VzTGluZUJyZWFrID0gaTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNQcmludGFibGUoY2hhcikpIHtcbiAgICAgICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgICAgIH1cbiAgICAgIHByZXZfY2hhciA9IGkgPiAwID8gc3RyaW5nLmNoYXJDb2RlQXQoaSAtIDEpIDogbnVsbDtcbiAgICAgIHBsYWluID0gcGxhaW4gJiYgaXNQbGFpblNhZmUoY2hhciwgcHJldl9jaGFyKTtcbiAgICB9XG4gICAgLy8gaW4gY2FzZSB0aGUgZW5kIGlzIG1pc3NpbmcgYSBcXG5cbiAgICBoYXNGb2xkYWJsZUxpbmUgPSBoYXNGb2xkYWJsZUxpbmUgfHwgKHNob3VsZFRyYWNrV2lkdGggJiZcbiAgICAgIChpIC0gcHJldmlvdXNMaW5lQnJlYWsgLSAxID4gbGluZVdpZHRoICYmXG4gICAgICAgc3RyaW5nW3ByZXZpb3VzTGluZUJyZWFrICsgMV0gIT09ICcgJykpO1xuICB9XG4gIC8vIEFsdGhvdWdoIGV2ZXJ5IHN0eWxlIGNhbiByZXByZXNlbnQgXFxuIHdpdGhvdXQgZXNjYXBpbmcsIHByZWZlciBibG9jayBzdHlsZXNcbiAgLy8gZm9yIG11bHRpbGluZSwgc2luY2UgdGhleSdyZSBtb3JlIHJlYWRhYmxlIGFuZCB0aGV5IGRvbid0IGFkZCBlbXB0eSBsaW5lcy5cbiAgLy8gQWxzbyBwcmVmZXIgZm9sZGluZyBhIHN1cGVyLWxvbmcgbGluZS5cbiAgaWYgKCFoYXNMaW5lQnJlYWsgJiYgIWhhc0ZvbGRhYmxlTGluZSkge1xuICAgIC8vIFN0cmluZ3MgaW50ZXJwcmV0YWJsZSBhcyBhbm90aGVyIHR5cGUgaGF2ZSB0byBiZSBxdW90ZWQ7XG4gICAgLy8gZS5nLiB0aGUgc3RyaW5nICd0cnVlJyB2cy4gdGhlIGJvb2xlYW4gdHJ1ZS5cbiAgICByZXR1cm4gcGxhaW4gJiYgIXRlc3RBbWJpZ3VvdXNUeXBlKHN0cmluZylcbiAgICAgID8gU1RZTEVfUExBSU4gOiBTVFlMRV9TSU5HTEU7XG4gIH1cbiAgLy8gRWRnZSBjYXNlOiBibG9jayBpbmRlbnRhdGlvbiBpbmRpY2F0b3IgY2FuIG9ubHkgaGF2ZSBvbmUgZGlnaXQuXG4gIGlmIChpbmRlbnRQZXJMZXZlbCA+IDkgJiYgbmVlZEluZGVudEluZGljYXRvcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgfVxuICAvLyBBdCB0aGlzIHBvaW50IHdlIGtub3cgYmxvY2sgc3R5bGVzIGFyZSB2YWxpZC5cbiAgLy8gUHJlZmVyIGxpdGVyYWwgc3R5bGUgdW5sZXNzIHdlIHdhbnQgdG8gZm9sZC5cbiAgcmV0dXJuIGhhc0ZvbGRhYmxlTGluZSA/IFNUWUxFX0ZPTERFRCA6IFNUWUxFX0xJVEVSQUw7XG59XG5cbi8vIE5vdGU6IGxpbmUgYnJlYWtpbmcvZm9sZGluZyBpcyBpbXBsZW1lbnRlZCBmb3Igb25seSB0aGUgZm9sZGVkIHN0eWxlLlxuLy8gTkIuIFdlIGRyb3AgdGhlIGxhc3QgdHJhaWxpbmcgbmV3bGluZSAoaWYgYW55KSBvZiBhIHJldHVybmVkIGJsb2NrIHNjYWxhclxuLy8gIHNpbmNlIHRoZSBkdW1wZXIgYWRkcyBpdHMgb3duIG5ld2xpbmUuIFRoaXMgYWx3YXlzIHdvcmtzOlxuLy8gICAgXHUyMDIyIE5vIGVuZGluZyBuZXdsaW5lID0+IHVuYWZmZWN0ZWQ7IGFscmVhZHkgdXNpbmcgc3RyaXAgXCItXCIgY2hvbXBpbmcuXG4vLyAgICBcdTIwMjIgRW5kaW5nIG5ld2xpbmUgICAgPT4gcmVtb3ZlZCB0aGVuIHJlc3RvcmVkLlxuLy8gIEltcG9ydGFudGx5LCB0aGlzIGtlZXBzIHRoZSBcIitcIiBjaG9tcCBpbmRpY2F0b3IgZnJvbSBnYWluaW5nIGFuIGV4dHJhIGxpbmUuXG5mdW5jdGlvbiB3cml0ZVNjYWxhcihzdGF0ZSwgc3RyaW5nLCBsZXZlbCwgaXNrZXkpIHtcbiAgc3RhdGUuZHVtcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBcIicnXCI7XG4gICAgfVxuICAgIGlmICghc3RhdGUubm9Db21wYXRNb2RlICYmXG4gICAgICAgIERFUFJFQ0FURURfQk9PTEVBTlNfU1lOVEFYLmluZGV4T2Yoc3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBcIidcIiArIHN0cmluZyArIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBpbmRlbnQgPSBzdGF0ZS5pbmRlbnQgKiBNYXRoLm1heCgxLCBsZXZlbCk7IC8vIG5vIDAtaW5kZW50IHNjYWxhcnNcbiAgICAvLyBBcyBpbmRlbnRhdGlvbiBnZXRzIGRlZXBlciwgbGV0IHRoZSB3aWR0aCBkZWNyZWFzZSBtb25vdG9uaWNhbGx5XG4gICAgLy8gdG8gdGhlIGxvd2VyIGJvdW5kIG1pbihzdGF0ZS5saW5lV2lkdGgsIDQwKS5cbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpbXBsaWVzXG4gICAgLy8gIHN0YXRlLmxpbmVXaWR0aCBcdTIyNjQgNDAgKyBzdGF0ZS5pbmRlbnQ6IHdpZHRoIGlzIGZpeGVkIGF0IHRoZSBsb3dlciBib3VuZC5cbiAgICAvLyAgc3RhdGUubGluZVdpZHRoID4gNDAgKyBzdGF0ZS5pbmRlbnQ6IHdpZHRoIGRlY3JlYXNlcyB1bnRpbCB0aGUgbG93ZXIgYm91bmQuXG4gICAgLy8gVGhpcyBiZWhhdmVzIGJldHRlciB0aGFuIGEgY29uc3RhbnQgbWluaW11bSB3aWR0aCB3aGljaCBkaXNhbGxvd3MgbmFycm93ZXIgb3B0aW9ucyxcbiAgICAvLyBvciBhbiBpbmRlbnQgdGhyZXNob2xkIHdoaWNoIGNhdXNlcyB0aGUgd2lkdGggdG8gc3VkZGVubHkgaW5jcmVhc2UuXG4gICAgdmFyIGxpbmVXaWR0aCA9IHN0YXRlLmxpbmVXaWR0aCA9PT0gLTFcbiAgICAgID8gLTEgOiBNYXRoLm1heChNYXRoLm1pbihzdGF0ZS5saW5lV2lkdGgsIDQwKSwgc3RhdGUubGluZVdpZHRoIC0gaW5kZW50KTtcblxuICAgIC8vIFdpdGhvdXQga25vd2luZyBpZiBrZXlzIGFyZSBpbXBsaWNpdC9leHBsaWNpdCwgYXNzdW1lIGltcGxpY2l0IGZvciBzYWZldHkuXG4gICAgdmFyIHNpbmdsZUxpbmVPbmx5ID0gaXNrZXlcbiAgICAgIC8vIE5vIGJsb2NrIHN0eWxlcyBpbiBmbG93IG1vZGUuXG4gICAgICB8fCAoc3RhdGUuZmxvd0xldmVsID4gLTEgJiYgbGV2ZWwgPj0gc3RhdGUuZmxvd0xldmVsKTtcbiAgICBmdW5jdGlvbiB0ZXN0QW1iaWd1aXR5KHN0cmluZykge1xuICAgICAgcmV0dXJuIHRlc3RJbXBsaWNpdFJlc29sdmluZyhzdGF0ZSwgc3RyaW5nKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNob29zZVNjYWxhclN0eWxlKHN0cmluZywgc2luZ2xlTGluZU9ubHksIHN0YXRlLmluZGVudCwgbGluZVdpZHRoLCB0ZXN0QW1iaWd1aXR5KSkge1xuICAgICAgY2FzZSBTVFlMRV9QTEFJTjpcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIGNhc2UgU1RZTEVfU0lOR0xFOlxuICAgICAgICByZXR1cm4gXCInXCIgKyBzdHJpbmcucmVwbGFjZSgvJy9nLCBcIicnXCIpICsgXCInXCI7XG4gICAgICBjYXNlIFNUWUxFX0xJVEVSQUw6XG4gICAgICAgIHJldHVybiAnfCcgKyBibG9ja0hlYWRlcihzdHJpbmcsIHN0YXRlLmluZGVudClcbiAgICAgICAgICArIGRyb3BFbmRpbmdOZXdsaW5lKGluZGVudFN0cmluZyhzdHJpbmcsIGluZGVudCkpO1xuICAgICAgY2FzZSBTVFlMRV9GT0xERUQ6XG4gICAgICAgIHJldHVybiAnPicgKyBibG9ja0hlYWRlcihzdHJpbmcsIHN0YXRlLmluZGVudClcbiAgICAgICAgICArIGRyb3BFbmRpbmdOZXdsaW5lKGluZGVudFN0cmluZyhmb2xkU3RyaW5nKHN0cmluZywgbGluZVdpZHRoKSwgaW5kZW50KSk7XG4gICAgICBjYXNlIFNUWUxFX0RPVUJMRTpcbiAgICAgICAgcmV0dXJuICdcIicgKyBlc2NhcGVTdHJpbmcoc3RyaW5nLCBsaW5lV2lkdGgpICsgJ1wiJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdpbXBvc3NpYmxlIGVycm9yOiBpbnZhbGlkIHNjYWxhciBzdHlsZScpO1xuICAgIH1cbiAgfSgpKTtcbn1cblxuLy8gUHJlLWNvbmRpdGlvbnM6IHN0cmluZyBpcyB2YWxpZCBmb3IgYSBibG9jayBzY2FsYXIsIDEgPD0gaW5kZW50UGVyTGV2ZWwgPD0gOS5cbmZ1bmN0aW9uIGJsb2NrSGVhZGVyKHN0cmluZywgaW5kZW50UGVyTGV2ZWwpIHtcbiAgdmFyIGluZGVudEluZGljYXRvciA9IG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSA/IFN0cmluZyhpbmRlbnRQZXJMZXZlbCkgOiAnJztcblxuICAvLyBub3RlIHRoZSBzcGVjaWFsIGNhc2U6IHRoZSBzdHJpbmcgJ1xcbicgY291bnRzIGFzIGEgXCJ0cmFpbGluZ1wiIGVtcHR5IGxpbmUuXG4gIHZhciBjbGlwID0gICAgICAgICAgc3RyaW5nW3N0cmluZy5sZW5ndGggLSAxXSA9PT0gJ1xcbic7XG4gIHZhciBrZWVwID0gY2xpcCAmJiAoc3RyaW5nW3N0cmluZy5sZW5ndGggLSAyXSA9PT0gJ1xcbicgfHwgc3RyaW5nID09PSAnXFxuJyk7XG4gIHZhciBjaG9tcCA9IGtlZXAgPyAnKycgOiAoY2xpcCA/ICcnIDogJy0nKTtcblxuICByZXR1cm4gaW5kZW50SW5kaWNhdG9yICsgY2hvbXAgKyAnXFxuJztcbn1cblxuLy8gKFNlZSB0aGUgbm90ZSBmb3Igd3JpdGVTY2FsYXIuKVxuZnVuY3Rpb24gZHJvcEVuZGluZ05ld2xpbmUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdbc3RyaW5nLmxlbmd0aCAtIDFdID09PSAnXFxuJyA/IHN0cmluZy5zbGljZSgwLCAtMSkgOiBzdHJpbmc7XG59XG5cbi8vIE5vdGU6IGEgbG9uZyBsaW5lIHdpdGhvdXQgYSBzdWl0YWJsZSBicmVhayBwb2ludCB3aWxsIGV4Y2VlZCB0aGUgd2lkdGggbGltaXQuXG4vLyBQcmUtY29uZGl0aW9uczogZXZlcnkgY2hhciBpbiBzdHIgaXNQcmludGFibGUsIHN0ci5sZW5ndGggPiAwLCB3aWR0aCA+IDAuXG5mdW5jdGlvbiBmb2xkU3RyaW5nKHN0cmluZywgd2lkdGgpIHtcbiAgLy8gSW4gZm9sZGVkIHN0eWxlLCAkayQgY29uc2VjdXRpdmUgbmV3bGluZXMgb3V0cHV0IGFzICRrKzEkIG5ld2xpbmVzXHUyMDE0XG4gIC8vIHVubGVzcyB0aGV5J3JlIGJlZm9yZSBvciBhZnRlciBhIG1vcmUtaW5kZW50ZWQgbGluZSwgb3IgYXQgdGhlIHZlcnlcbiAgLy8gYmVnaW5uaW5nIG9yIGVuZCwgaW4gd2hpY2ggY2FzZSAkayQgbWFwcyB0byAkayQuXG4gIC8vIFRoZXJlZm9yZSwgcGFyc2UgZWFjaCBjaHVuayBhcyBuZXdsaW5lKHMpIGZvbGxvd2VkIGJ5IGEgY29udGVudCBsaW5lLlxuICB2YXIgbGluZVJlID0gLyhcXG4rKShbXlxcbl0qKS9nO1xuXG4gIC8vIGZpcnN0IGxpbmUgKHBvc3NpYmx5IGFuIGVtcHR5IGxpbmUpXG4gIHZhciByZXN1bHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXh0TEYgPSBzdHJpbmcuaW5kZXhPZignXFxuJyk7XG4gICAgbmV4dExGID0gbmV4dExGICE9PSAtMSA/IG5leHRMRiA6IHN0cmluZy5sZW5ndGg7XG4gICAgbGluZVJlLmxhc3RJbmRleCA9IG5leHRMRjtcbiAgICByZXR1cm4gZm9sZExpbmUoc3RyaW5nLnNsaWNlKDAsIG5leHRMRiksIHdpZHRoKTtcbiAgfSgpKTtcbiAgLy8gSWYgd2UgaGF2ZW4ndCByZWFjaGVkIHRoZSBmaXJzdCBjb250ZW50IGxpbmUgeWV0LCBkb24ndCBhZGQgYW4gZXh0cmEgXFxuLlxuICB2YXIgcHJldk1vcmVJbmRlbnRlZCA9IHN0cmluZ1swXSA9PT0gJ1xcbicgfHwgc3RyaW5nWzBdID09PSAnICc7XG4gIHZhciBtb3JlSW5kZW50ZWQ7XG5cbiAgLy8gcmVzdCBvZiB0aGUgbGluZXNcbiAgdmFyIG1hdGNoO1xuICB3aGlsZSAoKG1hdGNoID0gbGluZVJlLmV4ZWMoc3RyaW5nKSkpIHtcbiAgICB2YXIgcHJlZml4ID0gbWF0Y2hbMV0sIGxpbmUgPSBtYXRjaFsyXTtcbiAgICBtb3JlSW5kZW50ZWQgPSAobGluZVswXSA9PT0gJyAnKTtcbiAgICByZXN1bHQgKz0gcHJlZml4XG4gICAgICArICghcHJldk1vcmVJbmRlbnRlZCAmJiAhbW9yZUluZGVudGVkICYmIGxpbmUgIT09ICcnXG4gICAgICAgID8gJ1xcbicgOiAnJylcbiAgICAgICsgZm9sZExpbmUobGluZSwgd2lkdGgpO1xuICAgIHByZXZNb3JlSW5kZW50ZWQgPSBtb3JlSW5kZW50ZWQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHcmVlZHkgbGluZSBicmVha2luZy5cbi8vIFBpY2tzIHRoZSBsb25nZXN0IGxpbmUgdW5kZXIgdGhlIGxpbWl0IGVhY2ggdGltZSxcbi8vIG90aGVyd2lzZSBzZXR0bGVzIGZvciB0aGUgc2hvcnRlc3QgbGluZSBvdmVyIHRoZSBsaW1pdC5cbi8vIE5CLiBNb3JlLWluZGVudGVkIGxpbmVzICpjYW5ub3QqIGJlIGZvbGRlZCwgYXMgdGhhdCB3b3VsZCBhZGQgYW4gZXh0cmEgXFxuLlxuZnVuY3Rpb24gZm9sZExpbmUobGluZSwgd2lkdGgpIHtcbiAgaWYgKGxpbmUgPT09ICcnIHx8IGxpbmVbMF0gPT09ICcgJykgcmV0dXJuIGxpbmU7XG5cbiAgLy8gU2luY2UgYSBtb3JlLWluZGVudGVkIGxpbmUgYWRkcyBhIFxcbiwgYnJlYWtzIGNhbid0IGJlIGZvbGxvd2VkIGJ5IGEgc3BhY2UuXG4gIHZhciBicmVha1JlID0gLyBbXiBdL2c7IC8vIG5vdGU6IHRoZSBtYXRjaCBpbmRleCB3aWxsIGFsd2F5cyBiZSA8PSBsZW5ndGgtMi5cbiAgdmFyIG1hdGNoO1xuICAvLyBzdGFydCBpcyBhbiBpbmNsdXNpdmUgaW5kZXguIGVuZCwgY3VyciwgYW5kIG5leHQgYXJlIGV4Y2x1c2l2ZS5cbiAgdmFyIHN0YXJ0ID0gMCwgZW5kLCBjdXJyID0gMCwgbmV4dCA9IDA7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICAvLyBJbnZhcmlhbnRzOiAwIDw9IHN0YXJ0IDw9IGxlbmd0aC0xLlxuICAvLyAgIDAgPD0gY3VyciA8PSBuZXh0IDw9IG1heCgwLCBsZW5ndGgtMikuIGN1cnIgLSBzdGFydCA8PSB3aWR0aC5cbiAgLy8gSW5zaWRlIHRoZSBsb29wOlxuICAvLyAgIEEgbWF0Y2ggaW1wbGllcyBsZW5ndGggPj0gMiwgc28gY3VyciBhbmQgbmV4dCBhcmUgPD0gbGVuZ3RoLTIuXG4gIHdoaWxlICgobWF0Y2ggPSBicmVha1JlLmV4ZWMobGluZSkpKSB7XG4gICAgbmV4dCA9IG1hdGNoLmluZGV4O1xuICAgIC8vIG1haW50YWluIGludmFyaWFudDogY3VyciAtIHN0YXJ0IDw9IHdpZHRoXG4gICAgaWYgKG5leHQgLSBzdGFydCA+IHdpZHRoKSB7XG4gICAgICBlbmQgPSAoY3VyciA+IHN0YXJ0KSA/IGN1cnIgOiBuZXh0OyAvLyBkZXJpdmUgZW5kIDw9IGxlbmd0aC0yXG4gICAgICByZXN1bHQgKz0gJ1xcbicgKyBsaW5lLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgLy8gc2tpcCB0aGUgc3BhY2UgdGhhdCB3YXMgb3V0cHV0IGFzIFxcblxuICAgICAgc3RhcnQgPSBlbmQgKyAxOyAgICAgICAgICAgICAgICAgICAgLy8gZGVyaXZlIHN0YXJ0IDw9IGxlbmd0aC0xXG4gICAgfVxuICAgIGN1cnIgPSBuZXh0O1xuICB9XG5cbiAgLy8gQnkgdGhlIGludmFyaWFudHMsIHN0YXJ0IDw9IGxlbmd0aC0xLCBzbyB0aGVyZSBpcyBzb21ldGhpbmcgbGVmdCBvdmVyLlxuICAvLyBJdCBpcyBlaXRoZXIgdGhlIHdob2xlIHN0cmluZyBvciBhIHBhcnQgc3RhcnRpbmcgZnJvbSBub24td2hpdGVzcGFjZS5cbiAgcmVzdWx0ICs9ICdcXG4nO1xuICAvLyBJbnNlcnQgYSBicmVhayBpZiB0aGUgcmVtYWluZGVyIGlzIHRvbyBsb25nIGFuZCB0aGVyZSBpcyBhIGJyZWFrIGF2YWlsYWJsZS5cbiAgaWYgKGxpbmUubGVuZ3RoIC0gc3RhcnQgPiB3aWR0aCAmJiBjdXJyID4gc3RhcnQpIHtcbiAgICByZXN1bHQgKz0gbGluZS5zbGljZShzdGFydCwgY3VycikgKyAnXFxuJyArIGxpbmUuc2xpY2UoY3VyciArIDEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCArPSBsaW5lLnNsaWNlKHN0YXJ0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuc2xpY2UoMSk7IC8vIGRyb3AgZXh0cmEgXFxuIGpvaW5lclxufVxuXG4vLyBFc2NhcGVzIGEgZG91YmxlLXF1b3RlZCBzdHJpbmcuXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNoYXIsIG5leHRDaGFyO1xuICB2YXIgZXNjYXBlU2VxO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhciA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIC8vIENoZWNrIGZvciBzdXJyb2dhdGUgcGFpcnMgKHJlZmVyZW5jZSBVbmljb2RlIDMuMCBzZWN0aW9uIFwiMy43IFN1cnJvZ2F0ZXNcIikuXG4gICAgaWYgKGNoYXIgPj0gMHhEODAwICYmIGNoYXIgPD0gMHhEQkZGLyogaGlnaCBzdXJyb2dhdGUgKi8pIHtcbiAgICAgIG5leHRDaGFyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgaWYgKG5leHRDaGFyID49IDB4REMwMCAmJiBuZXh0Q2hhciA8PSAweERGRkYvKiBsb3cgc3Vycm9nYXRlICovKSB7XG4gICAgICAgIC8vIENvbWJpbmUgdGhlIHN1cnJvZ2F0ZSBwYWlyIGFuZCBzdG9yZSBpdCBlc2NhcGVkLlxuICAgICAgICByZXN1bHQgKz0gZW5jb2RlSGV4KChjaGFyIC0gMHhEODAwKSAqIDB4NDAwICsgbmV4dENoYXIgLSAweERDMDAgKyAweDEwMDAwKTtcbiAgICAgICAgLy8gQWR2YW5jZSBpbmRleCBvbmUgZXh0cmEgc2luY2Ugd2UgYWxyZWFkeSB1c2VkIHRoYXQgY2hhciBoZXJlLlxuICAgICAgICBpKys7IGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlc2NhcGVTZXEgPSBFU0NBUEVfU0VRVUVOQ0VTW2NoYXJdO1xuICAgIHJlc3VsdCArPSAhZXNjYXBlU2VxICYmIGlzUHJpbnRhYmxlKGNoYXIpXG4gICAgICA/IHN0cmluZ1tpXVxuICAgICAgOiBlc2NhcGVTZXEgfHwgZW5jb2RlSGV4KGNoYXIpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG93U2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBvYmplY3QpIHtcbiAgdmFyIF9yZXN1bHQgPSAnJyxcbiAgICAgIF90YWcgICAgPSBzdGF0ZS50YWcsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAvLyBXcml0ZSBvbmx5IHZhbGlkIGVsZW1lbnRzLlxuICAgIGlmICh3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3RbaW5kZXhdLCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBpZiAoaW5kZXggIT09IDApIF9yZXN1bHQgKz0gJywnICsgKCFzdGF0ZS5jb25kZW5zZUZsb3cgPyAnICcgOiAnJyk7XG4gICAgICBfcmVzdWx0ICs9IHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9ICdbJyArIF9yZXN1bHQgKyAnXSc7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbGV2ZWwsIG9iamVjdCwgY29tcGFjdCkge1xuICB2YXIgX3Jlc3VsdCA9ICcnLFxuICAgICAgX3RhZyAgICA9IHN0YXRlLnRhZyxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIC8vIFdyaXRlIG9ubHkgdmFsaWQgZWxlbWVudHMuXG4gICAgaWYgKHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCBvYmplY3RbaW5kZXhdLCB0cnVlLCB0cnVlKSkge1xuICAgICAgaWYgKCFjb21wYWN0IHx8IGluZGV4ICE9PSAwKSB7XG4gICAgICAgIF9yZXN1bHQgKz0gZ2VuZXJhdGVOZXh0TGluZShzdGF0ZSwgbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuZHVtcCAmJiBDSEFSX0xJTkVfRkVFRCA9PT0gc3RhdGUuZHVtcC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgIF9yZXN1bHQgKz0gJy0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdCArPSAnLSAnO1xuICAgICAgfVxuXG4gICAgICBfcmVzdWx0ICs9IHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9IF9yZXN1bHQgfHwgJ1tdJzsgLy8gRW1wdHkgc2VxdWVuY2UgaWYgbm8gdmFsaWQgdmFsdWVzLlxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb3dNYXBwaW5nKHN0YXRlLCBsZXZlbCwgb2JqZWN0KSB7XG4gIHZhciBfcmVzdWx0ICAgICAgID0gJycsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9iamVjdEtleSxcbiAgICAgIG9iamVjdFZhbHVlLFxuICAgICAgcGFpckJ1ZmZlcjtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0S2V5TGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG5cbiAgICBwYWlyQnVmZmVyID0gJyc7XG4gICAgaWYgKGluZGV4ICE9PSAwKSBwYWlyQnVmZmVyICs9ICcsICc7XG5cbiAgICBpZiAoc3RhdGUuY29uZGVuc2VGbG93KSBwYWlyQnVmZmVyICs9ICdcIic7XG5cbiAgICBvYmplY3RLZXkgPSBvYmplY3RLZXlMaXN0W2luZGV4XTtcbiAgICBvYmplY3RWYWx1ZSA9IG9iamVjdFtvYmplY3RLZXldO1xuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3RLZXksIGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQga2V5O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kdW1wLmxlbmd0aCA+IDEwMjQpIHBhaXJCdWZmZXIgKz0gJz8gJztcblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcCArIChzdGF0ZS5jb25kZW5zZUZsb3cgPyAnXCInIDogJycpICsgJzonICsgKHN0YXRlLmNvbmRlbnNlRmxvdyA/ICcnIDogJyAnKTtcblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0VmFsdWUsIGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQgdmFsdWUuXG4gICAgfVxuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wO1xuXG4gICAgLy8gQm90aCBrZXkgYW5kIHZhbHVlIGFyZSB2YWxpZC5cbiAgICBfcmVzdWx0ICs9IHBhaXJCdWZmZXI7XG4gIH1cblxuICBzdGF0ZS50YWcgPSBfdGFnO1xuICBzdGF0ZS5kdW1wID0gJ3snICsgX3Jlc3VsdCArICd9Jztcbn1cblxuZnVuY3Rpb24gd3JpdGVCbG9ja01hcHBpbmcoc3RhdGUsIGxldmVsLCBvYmplY3QsIGNvbXBhY3QpIHtcbiAgdmFyIF9yZXN1bHQgICAgICAgPSAnJyxcbiAgICAgIF90YWcgICAgICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBvYmplY3RLZXlMaXN0ID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoLFxuICAgICAgb2JqZWN0S2V5LFxuICAgICAgb2JqZWN0VmFsdWUsXG4gICAgICBleHBsaWNpdFBhaXIsXG4gICAgICBwYWlyQnVmZmVyO1xuXG4gIC8vIEFsbG93IHNvcnRpbmcga2V5cyBzbyB0aGF0IHRoZSBvdXRwdXQgZmlsZSBpcyBkZXRlcm1pbmlzdGljXG4gIGlmIChzdGF0ZS5zb3J0S2V5cyA9PT0gdHJ1ZSkge1xuICAgIC8vIERlZmF1bHQgc29ydGluZ1xuICAgIG9iamVjdEtleUxpc3Quc29ydCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzdGF0ZS5zb3J0S2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEN1c3RvbSBzb3J0IGZ1bmN0aW9uXG4gICAgb2JqZWN0S2V5TGlzdC5zb3J0KHN0YXRlLnNvcnRLZXlzKTtcbiAgfSBlbHNlIGlmIChzdGF0ZS5zb3J0S2V5cykge1xuICAgIC8vIFNvbWV0aGluZyBpcyB3cm9uZ1xuICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdzb3J0S2V5cyBtdXN0IGJlIGEgYm9vbGVhbiBvciBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0S2V5TGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpckJ1ZmZlciA9ICcnO1xuXG4gICAgaWYgKCFjb21wYWN0IHx8IGluZGV4ICE9PSAwKSB7XG4gICAgICBwYWlyQnVmZmVyICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICB9XG5cbiAgICBvYmplY3RLZXkgPSBvYmplY3RLZXlMaXN0W2luZGV4XTtcbiAgICBvYmplY3RWYWx1ZSA9IG9iamVjdFtvYmplY3RLZXldO1xuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0S2V5LCB0cnVlLCB0cnVlLCB0cnVlKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCBrZXkuXG4gICAgfVxuXG4gICAgZXhwbGljaXRQYWlyID0gKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICc/JykgfHxcbiAgICAgICAgICAgICAgICAgICAoc3RhdGUuZHVtcCAmJiBzdGF0ZS5kdW1wLmxlbmd0aCA+IDEwMjQpO1xuXG4gICAgaWYgKGV4cGxpY2l0UGFpcikge1xuICAgICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICBwYWlyQnVmZmVyICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhaXJCdWZmZXIgKz0gJz8gJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXA7XG5cbiAgICBpZiAoZXhwbGljaXRQYWlyKSB7XG4gICAgICBwYWlyQnVmZmVyICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICB9XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCBvYmplY3RWYWx1ZSwgdHJ1ZSwgZXhwbGljaXRQYWlyKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCB2YWx1ZS5cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZHVtcCAmJiBDSEFSX0xJTkVfRkVFRCA9PT0gc3RhdGUuZHVtcC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICBwYWlyQnVmZmVyICs9ICc6JztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFpckJ1ZmZlciArPSAnOiAnO1xuICAgIH1cblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcDtcblxuICAgIC8vIEJvdGgga2V5IGFuZCB2YWx1ZSBhcmUgdmFsaWQuXG4gICAgX3Jlc3VsdCArPSBwYWlyQnVmZmVyO1xuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9IF9yZXN1bHQgfHwgJ3t9JzsgLy8gRW1wdHkgbWFwcGluZyBpZiBubyB2YWxpZCBwYWlycy5cbn1cblxuZnVuY3Rpb24gZGV0ZWN0VHlwZShzdGF0ZSwgb2JqZWN0LCBleHBsaWNpdCkge1xuICB2YXIgX3Jlc3VsdCwgdHlwZUxpc3QsIGluZGV4LCBsZW5ndGgsIHR5cGUsIHN0eWxlO1xuXG4gIHR5cGVMaXN0ID0gZXhwbGljaXQgPyBzdGF0ZS5leHBsaWNpdFR5cGVzIDogc3RhdGUuaW1wbGljaXRUeXBlcztcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdHlwZUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHR5cGUgPSB0eXBlTGlzdFtpbmRleF07XG5cbiAgICBpZiAoKHR5cGUuaW5zdGFuY2VPZiAgfHwgdHlwZS5wcmVkaWNhdGUpICYmXG4gICAgICAgICghdHlwZS5pbnN0YW5jZU9mIHx8ICgodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpICYmIChvYmplY3QgaW5zdGFuY2VvZiB0eXBlLmluc3RhbmNlT2YpKSkgJiZcbiAgICAgICAgKCF0eXBlLnByZWRpY2F0ZSAgfHwgdHlwZS5wcmVkaWNhdGUob2JqZWN0KSkpIHtcblxuICAgICAgc3RhdGUudGFnID0gZXhwbGljaXQgPyB0eXBlLnRhZyA6ICc/JztcblxuICAgICAgaWYgKHR5cGUucmVwcmVzZW50KSB7XG4gICAgICAgIHN0eWxlID0gc3RhdGUuc3R5bGVNYXBbdHlwZS50YWddIHx8IHR5cGUuZGVmYXVsdFN0eWxlO1xuXG4gICAgICAgIGlmIChfdG9TdHJpbmcuY2FsbCh0eXBlLnJlcHJlc2VudCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICAgICAgICBfcmVzdWx0ID0gdHlwZS5yZXByZXNlbnQob2JqZWN0LCBzdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2hhc093blByb3BlcnR5LmNhbGwodHlwZS5yZXByZXNlbnQsIHN0eWxlKSkge1xuICAgICAgICAgIF9yZXN1bHQgPSB0eXBlLnJlcHJlc2VudFtzdHlsZV0ob2JqZWN0LCBzdHlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJyE8JyArIHR5cGUudGFnICsgJz4gdGFnIHJlc29sdmVyIGFjY2VwdHMgbm90IFwiJyArIHN0eWxlICsgJ1wiIHN0eWxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5kdW1wID0gX3Jlc3VsdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBTZXJpYWxpemVzIGBvYmplY3RgIGFuZCB3cml0ZXMgaXQgdG8gZ2xvYmFsIGByZXN1bHRgLlxuLy8gUmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIG9yIGZhbHNlIG9uIGludmFsaWQgb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG9iamVjdCwgYmxvY2ssIGNvbXBhY3QsIGlza2V5KSB7XG4gIHN0YXRlLnRhZyA9IG51bGw7XG4gIHN0YXRlLmR1bXAgPSBvYmplY3Q7XG5cbiAgaWYgKCFkZXRlY3RUeXBlKHN0YXRlLCBvYmplY3QsIGZhbHNlKSkge1xuICAgIGRldGVjdFR5cGUoc3RhdGUsIG9iamVjdCwgdHJ1ZSk7XG4gIH1cblxuICB2YXIgdHlwZSA9IF90b1N0cmluZy5jYWxsKHN0YXRlLmR1bXApO1xuXG4gIGlmIChibG9jaykge1xuICAgIGJsb2NrID0gKHN0YXRlLmZsb3dMZXZlbCA8IDAgfHwgc3RhdGUuZmxvd0xldmVsID4gbGV2ZWwpO1xuICB9XG5cbiAgdmFyIG9iamVjdE9yQXJyYXkgPSB0eXBlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBBcnJheV0nLFxuICAgICAgZHVwbGljYXRlSW5kZXgsXG4gICAgICBkdXBsaWNhdGU7XG5cbiAgaWYgKG9iamVjdE9yQXJyYXkpIHtcbiAgICBkdXBsaWNhdGVJbmRleCA9IHN0YXRlLmR1cGxpY2F0ZXMuaW5kZXhPZihvYmplY3QpO1xuICAgIGR1cGxpY2F0ZSA9IGR1cGxpY2F0ZUluZGV4ICE9PSAtMTtcbiAgfVxuXG4gIGlmICgoc3RhdGUudGFnICE9PSBudWxsICYmIHN0YXRlLnRhZyAhPT0gJz8nKSB8fCBkdXBsaWNhdGUgfHwgKHN0YXRlLmluZGVudCAhPT0gMiAmJiBsZXZlbCA+IDApKSB7XG4gICAgY29tcGFjdCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGR1cGxpY2F0ZSAmJiBzdGF0ZS51c2VkRHVwbGljYXRlc1tkdXBsaWNhdGVJbmRleF0pIHtcbiAgICBzdGF0ZS5kdW1wID0gJypyZWZfJyArIGR1cGxpY2F0ZUluZGV4O1xuICB9IGVsc2Uge1xuICAgIGlmIChvYmplY3RPckFycmF5ICYmIGR1cGxpY2F0ZSAmJiAhc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdKSB7XG4gICAgICBzdGF0ZS51c2VkRHVwbGljYXRlc1tkdXBsaWNhdGVJbmRleF0gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgIGlmIChibG9jayAmJiAoT2JqZWN0LmtleXMoc3RhdGUuZHVtcCkubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICB3cml0ZUJsb2NrTWFwcGluZyhzdGF0ZSwgbGV2ZWwsIHN0YXRlLmR1bXAsIGNvbXBhY3QpO1xuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlRmxvd01hcHBpbmcoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wKTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyAnICcgKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICB2YXIgYXJyYXlMZXZlbCA9IChzdGF0ZS5ub0FycmF5SW5kZW50ICYmIChsZXZlbCA+IDApKSA/IGxldmVsIC0gMSA6IGxldmVsO1xuICAgICAgaWYgKGJsb2NrICYmIChzdGF0ZS5kdW1wLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgd3JpdGVCbG9ja1NlcXVlbmNlKHN0YXRlLCBhcnJheUxldmVsLCBzdGF0ZS5kdW1wLCBjb21wYWN0KTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZUZsb3dTZXF1ZW5jZShzdGF0ZSwgYXJyYXlMZXZlbCwgc3RhdGUuZHVtcCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgJyAnICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgIGlmIChzdGF0ZS50YWcgIT09ICc/Jykge1xuICAgICAgICB3cml0ZVNjYWxhcihzdGF0ZSwgc3RhdGUuZHVtcCwgbGV2ZWwsIGlza2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXRlLnNraXBJbnZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbigndW5hY2NlcHRhYmxlIGtpbmQgb2YgYW4gb2JqZWN0IHRvIGR1bXAgJyArIHR5cGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnPycpIHtcbiAgICAgIHN0YXRlLmR1bXAgPSAnITwnICsgc3RhdGUudGFnICsgJz4gJyArIHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldER1cGxpY2F0ZVJlZmVyZW5jZXMob2JqZWN0LCBzdGF0ZSkge1xuICB2YXIgb2JqZWN0cyA9IFtdLFxuICAgICAgZHVwbGljYXRlc0luZGV4ZXMgPSBbXSxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGluc3BlY3ROb2RlKG9iamVjdCwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBkdXBsaWNhdGVzSW5kZXhlcy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgc3RhdGUuZHVwbGljYXRlcy5wdXNoKG9iamVjdHNbZHVwbGljYXRlc0luZGV4ZXNbaW5kZXhdXSk7XG4gIH1cbiAgc3RhdGUudXNlZER1cGxpY2F0ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdE5vZGUob2JqZWN0LCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcykge1xuICB2YXIgb2JqZWN0S2V5TGlzdCxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGlmIChvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICBpbmRleCA9IG9iamVjdHMuaW5kZXhPZihvYmplY3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChkdXBsaWNhdGVzSW5kZXhlcy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgZHVwbGljYXRlc0luZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgIGluc3BlY3ROb2RlKG9iamVjdFtpbmRleF0sIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgIGluc3BlY3ROb2RlKG9iamVjdFtvYmplY3RLZXlMaXN0W2luZGV4XV0sIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkdW1wKGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZShvcHRpb25zKTtcblxuICBpZiAoIXN0YXRlLm5vUmVmcykgZ2V0RHVwbGljYXRlUmVmZXJlbmNlcyhpbnB1dCwgc3RhdGUpO1xuXG4gIGlmICh3cml0ZU5vZGUoc3RhdGUsIDAsIGlucHV0LCB0cnVlLCB0cnVlKSkgcmV0dXJuIHN0YXRlLmR1bXAgKyAnXFxuJztcblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHNhZmVEdW1wKGlucHV0LCBvcHRpb25zKSB7XG4gIHJldHVybiBkdW1wKGlucHV0LCBjb21tb24uZXh0ZW5kKHsgc2NoZW1hOiBERUZBVUxUX1NBRkVfU0NIRU1BIH0sIG9wdGlvbnMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZHVtcCAgICAgPSBkdW1wO1xubW9kdWxlLmV4cG9ydHMuc2FmZUR1bXAgPSBzYWZlRHVtcDtcbiIsICIndXNlIHN0cmljdCc7XG5cblxudmFyIGxvYWRlciA9IHJlcXVpcmUoJy4vanMteWFtbC9sb2FkZXInKTtcbnZhciBkdW1wZXIgPSByZXF1aXJlKCcuL2pzLXlhbWwvZHVtcGVyJyk7XG5cblxuZnVuY3Rpb24gZGVwcmVjYXRlZChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiAnICsgbmFtZSArICcgaXMgZGVwcmVjYXRlZCBhbmQgY2Fubm90IGJlIHVzZWQuJyk7XG4gIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMuVHlwZSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC90eXBlJyk7XG5tb2R1bGUuZXhwb3J0cy5TY2hlbWEgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYScpO1xubW9kdWxlLmV4cG9ydHMuRkFJTFNBRkVfU0NIRU1BICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEvZmFpbHNhZmUnKTtcbm1vZHVsZS5leHBvcnRzLkpTT05fU0NIRU1BICAgICAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2pzb24nKTtcbm1vZHVsZS5leHBvcnRzLkNPUkVfU0NIRU1BICAgICAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2NvcmUnKTtcbm1vZHVsZS5leHBvcnRzLkRFRkFVTFRfU0FGRV9TQ0hFTUEgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfc2FmZScpO1xubW9kdWxlLmV4cG9ydHMuREVGQVVMVF9GVUxMX1NDSEVNQSA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEvZGVmYXVsdF9mdWxsJyk7XG5tb2R1bGUuZXhwb3J0cy5sb2FkICAgICAgICAgICAgICAgID0gbG9hZGVyLmxvYWQ7XG5tb2R1bGUuZXhwb3J0cy5sb2FkQWxsICAgICAgICAgICAgID0gbG9hZGVyLmxvYWRBbGw7XG5tb2R1bGUuZXhwb3J0cy5zYWZlTG9hZCAgICAgICAgICAgID0gbG9hZGVyLnNhZmVMb2FkO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWRBbGwgICAgICAgICA9IGxvYWRlci5zYWZlTG9hZEFsbDtcbm1vZHVsZS5leHBvcnRzLmR1bXAgICAgICAgICAgICAgICAgPSBkdW1wZXIuZHVtcDtcbm1vZHVsZS5leHBvcnRzLnNhZmVEdW1wICAgICAgICAgICAgPSBkdW1wZXIuc2FmZUR1bXA7XG5tb2R1bGUuZXhwb3J0cy5ZQU1MRXhjZXB0aW9uICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL2V4Y2VwdGlvbicpO1xuXG4vLyBEZXByZWNhdGVkIHNjaGVtYSBuYW1lcyBmcm9tIEpTLVlBTUwgMi4wLnhcbm1vZHVsZS5leHBvcnRzLk1JTklNQUxfU0NIRU1BID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9mYWlsc2FmZScpO1xubW9kdWxlLmV4cG9ydHMuU0FGRV9TQ0hFTUEgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfc2FmZScpO1xubW9kdWxlLmV4cG9ydHMuREVGQVVMVF9TQ0hFTUEgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xuXG4vLyBEZXByZWNhdGVkIGZ1bmN0aW9ucyBmcm9tIEpTLVlBTUwgMS54Lnhcbm1vZHVsZS5leHBvcnRzLnNjYW4gICAgICAgICAgID0gZGVwcmVjYXRlZCgnc2NhbicpO1xubW9kdWxlLmV4cG9ydHMucGFyc2UgICAgICAgICAgPSBkZXByZWNhdGVkKCdwYXJzZScpO1xubW9kdWxlLmV4cG9ydHMuY29tcG9zZSAgICAgICAgPSBkZXByZWNhdGVkKCdjb21wb3NlJyk7XG5tb2R1bGUuZXhwb3J0cy5hZGRDb25zdHJ1Y3RvciA9IGRlcHJlY2F0ZWQoJ2FkZENvbnN0cnVjdG9yJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB5YW1sID0gcmVxdWlyZSgnLi9saWIvanMteWFtbC5qcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0geWFtbDtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHlhbWwgPSByZXF1aXJlKCdqcy15YW1sJyk7XG5cbi8qKlxuICogRGVmYXVsdCBlbmdpbmVzXG4gKi9cblxuY29uc3QgZW5naW5lcyA9IGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBZQU1MXG4gKi9cblxuZW5naW5lcy55YW1sID0ge1xuICBwYXJzZTogeWFtbC5zYWZlTG9hZC5iaW5kKHlhbWwpLFxuICBzdHJpbmdpZnk6IHlhbWwuc2FmZUR1bXAuYmluZCh5YW1sKVxufTtcblxuLyoqXG4gKiBKU09OXG4gKi9cblxuZW5naW5lcy5qc29uID0ge1xuICBwYXJzZTogSlNPTi5wYXJzZS5iaW5kKEpTT04pLFxuICBzdHJpbmdpZnk6IGZ1bmN0aW9uKG9iaiwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtyZXBsYWNlcjogbnVsbCwgc3BhY2U6IDJ9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBvcHRzLnJlcGxhY2VyLCBvcHRzLnNwYWNlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBKYXZhU2NyaXB0XG4gKi9cblxuZW5naW5lcy5qYXZhc2NyaXB0ID0ge1xuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zLCB3cmFwKSB7XG4gICAgLyogZXNsaW50IG5vLWV2YWw6IDAgKi9cbiAgICB0cnkge1xuICAgICAgaWYgKHdyYXAgIT09IGZhbHNlKSB7XG4gICAgICAgIHN0ciA9ICcoZnVuY3Rpb24oKSB7XFxucmV0dXJuICcgKyBzdHIudHJpbSgpICsgJztcXG59KCkpOyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXZhbChzdHIpIHx8IHt9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKHdyYXAgIT09IGZhbHNlICYmIC8odW5leHBlY3RlZHxpZGVudGlmaWVyKS9pLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgICAgIHJldHVybiBwYXJzZShzdHIsIG9wdGlvbnMsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihlcnIpO1xuICAgIH1cbiAgfSxcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0cmluZ2lmeWluZyBKYXZhU2NyaXB0IGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgfVxufTtcbiIsICIvKiFcbiAqIHN0cmlwLWJvbS1zdHJpbmcgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3N0cmlwLWJvbS1zdHJpbmc+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCAyMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyAmJiBzdHIuY2hhckF0KDApID09PSAnXFx1ZmVmZicpIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBzdHI7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RyaXBCb20gPSByZXF1aXJlKCdzdHJpcC1ib20tc3RyaW5nJyk7XG5jb25zdCB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG5cbmV4cG9ydHMuZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbCkge1xuICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB2YWxcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsYCBpcyBhIGJ1ZmZlclxuICovXG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVPZih2YWwpID09PSAnYnVmZmVyJztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGB2YWxgIGlzIGFuIG9iamVjdFxuICovXG5cbmV4cG9ydHMuaXNPYmplY3QgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVPZih2YWwpID09PSAnb2JqZWN0Jztcbn07XG5cbi8qKlxuICogQ2FzdCBgaW5wdXRgIHRvIGEgYnVmZmVyXG4gKi9cblxuZXhwb3J0cy50b0J1ZmZlciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gQnVmZmVyLmZyb20oaW5wdXQpIDogaW5wdXQ7XG59O1xuXG4vKipcbiAqIENhc3QgYHZhbGAgdG8gYSBzdHJpbmcuXG4gKi9cblxuZXhwb3J0cy50b1N0cmluZyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gIGlmIChleHBvcnRzLmlzQnVmZmVyKGlucHV0KSkgcmV0dXJuIHN0cmlwQm9tKFN0cmluZyhpbnB1dCkpO1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGlucHV0IHRvIGJlIGEgc3RyaW5nIG9yIGJ1ZmZlcicpO1xuICB9XG4gIHJldHVybiBzdHJpcEJvbShpbnB1dCk7XG59O1xuXG4vKipcbiAqIENhc3QgYHZhbGAgdG8gYW4gYXJyYXkuXG4gKi9cblxuZXhwb3J0cy5hcnJheWlmeSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdmFsID8gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdKSA6IFtdO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYHN0cmAgc3RhcnRzIHdpdGggYHN1YnN0cmAuXG4gKi9cblxuZXhwb3J0cy5zdGFydHNXaXRoID0gZnVuY3Rpb24oc3RyLCBzdWJzdHIsIGxlbikge1xuICBpZiAodHlwZW9mIGxlbiAhPT0gJ251bWJlcicpIGxlbiA9IHN1YnN0ci5sZW5ndGg7XG4gIHJldHVybiBzdHIuc2xpY2UoMCwgbGVuKSA9PT0gc3Vic3RyO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVuZ2luZXMgPSByZXF1aXJlKCcuL2VuZ2luZXMnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXG4gIC8vIGVuc3VyZSB0aGF0IGRlbGltaXRlcnMgYXJlIGFuIGFycmF5XG4gIG9wdHMuZGVsaW1pdGVycyA9IHV0aWxzLmFycmF5aWZ5KG9wdHMuZGVsaW1zIHx8IG9wdHMuZGVsaW1pdGVycyB8fCAnLS0tJyk7XG4gIGlmIChvcHRzLmRlbGltaXRlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgb3B0cy5kZWxpbWl0ZXJzLnB1c2gob3B0cy5kZWxpbWl0ZXJzWzBdKTtcbiAgfVxuXG4gIG9wdHMubGFuZ3VhZ2UgPSAob3B0cy5sYW5ndWFnZSB8fCBvcHRzLmxhbmcgfHwgJ3lhbWwnKS50b0xvd2VyQ2FzZSgpO1xuICBvcHRzLmVuZ2luZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbmdpbmVzLCBvcHRzLnBhcnNlcnMsIG9wdHMuZW5naW5lcyk7XG4gIHJldHVybiBvcHRzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSwgb3B0aW9ucykge1xuICBsZXQgZW5naW5lID0gb3B0aW9ucy5lbmdpbmVzW25hbWVdIHx8IG9wdGlvbnMuZW5naW5lc1thbGlhc2UobmFtZSldO1xuICBpZiAodHlwZW9mIGVuZ2luZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dyYXktbWF0dGVyIGVuZ2luZSBcIicgKyBuYW1lICsgJ1wiIGlzIG5vdCByZWdpc3RlcmVkJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmdpbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbmdpbmUgPSB7IHBhcnNlOiBlbmdpbmUgfTtcbiAgfVxuICByZXR1cm4gZW5naW5lO1xufTtcblxuZnVuY3Rpb24gYWxpYXNlKG5hbWUpIHtcbiAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdqcyc6XG4gICAgY2FzZSAnamF2YXNjcmlwdCc6XG4gICAgICByZXR1cm4gJ2phdmFzY3JpcHQnO1xuICAgIGNhc2UgJ2NvZmZlZSc6XG4gICAgY2FzZSAnY29mZmVlc2NyaXB0JzpcbiAgICBjYXNlICdjc29uJzpcbiAgICAgIHJldHVybiAnY29mZmVlJztcbiAgICBjYXNlICd5YW1sJzpcbiAgICBjYXNlICd5bWwnOlxuICAgICAgcmV0dXJuICd5YW1sJztcbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcbmNvbnN0IGdldEVuZ2luZSA9IHJlcXVpcmUoJy4vZW5naW5lJyk7XG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmaWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gIGlmIChkYXRhID09IG51bGwgJiYgb3B0aW9ucyA9PSBudWxsKSB7XG4gICAgc3dpdGNoICh0eXBlT2YoZmlsZSkpIHtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGRhdGEgPSBmaWxlLmRhdGE7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgZmlsZSB0byBiZSBhIHN0cmluZyBvciBvYmplY3QnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzdHIgPSBmaWxlLmNvbnRlbnQ7XG4gIGNvbnN0IG9wdHMgPSBkZWZhdWx0cyhvcHRpb25zKTtcbiAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgIGlmICghb3B0cy5kYXRhKSByZXR1cm4gZmlsZTtcbiAgICBkYXRhID0gb3B0cy5kYXRhO1xuICB9XG5cbiAgY29uc3QgbGFuZ3VhZ2UgPSBmaWxlLmxhbmd1YWdlIHx8IG9wdHMubGFuZ3VhZ2U7XG4gIGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZShsYW5ndWFnZSwgb3B0cyk7XG4gIGlmICh0eXBlb2YgZW5naW5lLnN0cmluZ2lmeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIFwiJyArIGxhbmd1YWdlICsgJy5zdHJpbmdpZnlcIiB0byBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsZS5kYXRhLCBkYXRhKTtcbiAgY29uc3Qgb3BlbiA9IG9wdHMuZGVsaW1pdGVyc1swXTtcbiAgY29uc3QgY2xvc2UgPSBvcHRzLmRlbGltaXRlcnNbMV07XG4gIGNvbnN0IG1hdHRlciA9IGVuZ2luZS5zdHJpbmdpZnkoZGF0YSwgb3B0aW9ucykudHJpbSgpO1xuICBsZXQgYnVmID0gJyc7XG5cbiAgaWYgKG1hdHRlciAhPT0gJ3t9Jykge1xuICAgIGJ1ZiA9IG5ld2xpbmUob3BlbikgKyBuZXdsaW5lKG1hdHRlcikgKyBuZXdsaW5lKGNsb3NlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZmlsZS5leGNlcnB0ID09PSAnc3RyaW5nJyAmJiBmaWxlLmV4Y2VycHQgIT09ICcnKSB7XG4gICAgaWYgKHN0ci5pbmRleE9mKGZpbGUuZXhjZXJwdC50cmltKCkpID09PSAtMSkge1xuICAgICAgYnVmICs9IG5ld2xpbmUoZmlsZS5leGNlcnB0KSArIG5ld2xpbmUoY2xvc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgKyBuZXdsaW5lKHN0cik7XG59O1xuXG5mdW5jdGlvbiBuZXdsaW5lKHN0cikge1xuICByZXR1cm4gc3RyLnNsaWNlKC0xKSAhPT0gJ1xcbicgPyBzdHIgKyAnXFxuJyA6IHN0cjtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZpbGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuXG4gIGlmIChmaWxlLmRhdGEgPT0gbnVsbCkge1xuICAgIGZpbGUuZGF0YSA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRzLmV4Y2VycHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0cy5leGNlcnB0KGZpbGUsIG9wdHMpO1xuICB9XG5cbiAgY29uc3Qgc2VwID0gZmlsZS5kYXRhLmV4Y2VycHRfc2VwYXJhdG9yIHx8IG9wdHMuZXhjZXJwdF9zZXBhcmF0b3I7XG4gIGlmIChzZXAgPT0gbnVsbCAmJiAob3B0cy5leGNlcnB0ID09PSBmYWxzZSB8fCBvcHRzLmV4Y2VycHQgPT0gbnVsbCkpIHtcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGNvbnN0IGRlbGltaXRlciA9IHR5cGVvZiBvcHRzLmV4Y2VycHQgPT09ICdzdHJpbmcnXG4gICAgPyBvcHRzLmV4Y2VycHRcbiAgICA6IChzZXAgfHwgb3B0cy5kZWxpbWl0ZXJzWzBdKTtcblxuICAvLyBpZiBlbmFibGVkLCBnZXQgdGhlIGV4Y2VycHQgZGVmaW5lZCBhZnRlciBmcm9udC1tYXR0ZXJcbiAgY29uc3QgaWR4ID0gZmlsZS5jb250ZW50LmluZGV4T2YoZGVsaW1pdGVyKTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICBmaWxlLmV4Y2VycHQgPSBmaWxlLmNvbnRlbnQuc2xpY2UoMCwgaWR4KTtcbiAgfVxuXG4gIHJldHVybiBmaWxlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHZhbHVlIHRvIGVuc3VyZSBhbiBvYmplY3QgaXMgcmV0dXJuZWRcbiAqIHdpdGggdGhlIGV4cGVjdGVkIHByb3BlcnRpZXMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmaWxlKSB7XG4gIGlmICh0eXBlT2YoZmlsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgZmlsZSA9IHsgY29udGVudDogZmlsZSB9O1xuICB9XG5cbiAgaWYgKHR5cGVPZihmaWxlLmRhdGEpICE9PSAnb2JqZWN0Jykge1xuICAgIGZpbGUuZGF0YSA9IHt9O1xuICB9XG5cbiAgLy8gaWYgZmlsZSB3YXMgcGFzc2VkIGFzIGFuIG9iamVjdCwgZW5zdXJlIHRoYXRcbiAgLy8gXCJmaWxlLmNvbnRlbnRcIiBpcyBzZXRcbiAgaWYgKGZpbGUuY29udGVudHMgJiYgZmlsZS5jb250ZW50ID09IG51bGwpIHtcbiAgICBmaWxlLmNvbnRlbnQgPSBmaWxlLmNvbnRlbnRzO1xuICB9XG5cbiAgLy8gc2V0IG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMgb24gdGhlIGZpbGUgb2JqZWN0XG4gIHV0aWxzLmRlZmluZShmaWxlLCAnb3JpZycsIHV0aWxzLnRvQnVmZmVyKGZpbGUuY29udGVudCkpO1xuICB1dGlscy5kZWZpbmUoZmlsZSwgJ2xhbmd1YWdlJywgZmlsZS5sYW5ndWFnZSB8fCAnJyk7XG4gIHV0aWxzLmRlZmluZShmaWxlLCAnbWF0dGVyJywgZmlsZS5tYXR0ZXIgfHwgJycpO1xuICB1dGlscy5kZWZpbmUoZmlsZSwgJ3N0cmluZ2lmeScsIGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxhbmd1YWdlKSB7XG4gICAgICBmaWxlLmxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ2lmeShmaWxlLCBkYXRhLCBvcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gc3RyaXAgQk9NIGFuZCBlbnN1cmUgdGhhdCBcImZpbGUuY29udGVudFwiIGlzIGEgc3RyaW5nXG4gIGZpbGUuY29udGVudCA9IHV0aWxzLnRvU3RyaW5nKGZpbGUuY29udGVudCk7XG4gIGZpbGUuaXNFbXB0eSA9IGZhbHNlO1xuICBmaWxlLmV4Y2VycHQgPSAnJztcbiAgcmV0dXJuIGZpbGU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ2V0RW5naW5lID0gcmVxdWlyZSgnLi9lbmdpbmUnKTtcbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxhbmd1YWdlLCBzdHIsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUobGFuZ3VhZ2UsIG9wdHMpO1xuICBpZiAodHlwZW9mIGVuZ2luZS5wYXJzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIFwiJyArIGxhbmd1YWdlICsgJy5wYXJzZVwiIHRvIGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuICByZXR1cm4gZW5naW5lLnBhcnNlKHN0ciwgb3B0cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qgc2VjdGlvbnMgPSByZXF1aXJlKCdzZWN0aW9uLW1hdHRlcicpO1xuY29uc3QgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2xpYi9kZWZhdWx0cycpO1xuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9saWIvc3RyaW5naWZ5Jyk7XG5jb25zdCBleGNlcnB0ID0gcmVxdWlyZSgnLi9saWIvZXhjZXJwdCcpO1xuY29uc3QgZW5naW5lcyA9IHJlcXVpcmUoJy4vbGliL2VuZ2luZXMnKTtcbmNvbnN0IHRvRmlsZSA9IHJlcXVpcmUoJy4vbGliL3RvLWZpbGUnKTtcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9saWIvcGFyc2UnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi9saWIvdXRpbHMnKTtcblxuLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBvciBvYmplY3Qgd2l0aCBgY29udGVudGAgcHJvcGVydHksIGV4dHJhY3RzXG4gKiBhbmQgcGFyc2VzIGZyb250LW1hdHRlciBmcm9tIHRoZSBzdHJpbmcsIHRoZW4gcmV0dXJucyBhbiBvYmplY3RcbiAqIHdpdGggYGRhdGFgLCBgY29udGVudGAgYW5kIG90aGVyIFt1c2VmdWwgcHJvcGVydGllc10oI3JldHVybmVkLW9iamVjdCkuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1hdHRlciA9IHJlcXVpcmUoJ2dyYXktbWF0dGVyJyk7XG4gKiBjb25zb2xlLmxvZyhtYXR0ZXIoJy0tLVxcbnRpdGxlOiBIb21lXFxuLS0tXFxuT3RoZXIgc3R1ZmYnKSk7XG4gKiAvLz0+IHsgZGF0YTogeyB0aXRsZTogJ0hvbWUnfSwgY29udGVudDogJ090aGVyIHN0dWZmJyB9XG4gKiBgYGBcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gYGlucHV0YCBTdHJpbmcsIG9yIG9iamVjdCB3aXRoIGBjb250ZW50YCBzdHJpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbWF0dGVyKGlucHV0LCBvcHRpb25zKSB7XG4gIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICByZXR1cm4geyBkYXRhOiB7fSwgY29udGVudDogaW5wdXQsIGV4Y2VycHQ6ICcnLCBvcmlnOiBpbnB1dCB9O1xuICB9XG5cbiAgbGV0IGZpbGUgPSB0b0ZpbGUoaW5wdXQpO1xuICBjb25zdCBjYWNoZWQgPSBtYXR0ZXIuY2FjaGVbZmlsZS5jb250ZW50XTtcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICBmaWxlID0gT2JqZWN0LmFzc2lnbih7fSwgY2FjaGVkKTtcbiAgICAgIGZpbGUub3JpZyA9IGNhY2hlZC5vcmlnO1xuICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuXG4gICAgLy8gb25seSBjYWNoZSBpZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBwYXNzZWQuIGlmIHdlIGNhY2hlIHdoZW4gb3B0aW9uc1xuICAgIC8vIGFyZSBwYXNzZWQsIHdlIHdvdWxkIG5lZWQgdG8gYWxzbyBjYWNoZSBvcHRpb25zIHZhbHVlcywgd2hpY2ggd291bGRcbiAgICAvLyBuZWdhdGUgYW55IHBlcmZvcm1hbmNlIGJlbmVmaXRzIG9mIGNhY2hpbmdcbiAgICBtYXR0ZXIuY2FjaGVbZmlsZS5jb250ZW50XSA9IGZpbGU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VNYXR0ZXIoZmlsZSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUGFyc2UgZnJvbnQgbWF0dGVyXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VNYXR0ZXIoZmlsZSwgb3B0aW9ucykge1xuICBjb25zdCBvcHRzID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGNvbnN0IG9wZW4gPSBvcHRzLmRlbGltaXRlcnNbMF07XG4gIGNvbnN0IGNsb3NlID0gJ1xcbicgKyBvcHRzLmRlbGltaXRlcnNbMV07XG4gIGxldCBzdHIgPSBmaWxlLmNvbnRlbnQ7XG5cbiAgaWYgKG9wdHMubGFuZ3VhZ2UpIHtcbiAgICBmaWxlLmxhbmd1YWdlID0gb3B0cy5sYW5ndWFnZTtcbiAgfVxuXG4gIC8vIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSBvcGVuaW5nIGRlbGltaXRlclxuICBjb25zdCBvcGVuTGVuID0gb3Blbi5sZW5ndGg7XG4gIGlmICghdXRpbHMuc3RhcnRzV2l0aChzdHIsIG9wZW4sIG9wZW5MZW4pKSB7XG4gICAgZXhjZXJwdChmaWxlLCBvcHRzKTtcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIC8vIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBhZnRlciB0aGUgb3BlbmluZyBkZWxpbWl0ZXIgaXNcbiAgLy8gYSBjaGFyYWN0ZXIgZnJvbSB0aGUgZGVsaW1pdGVyLCB0aGVuIGl0J3Mgbm90IGEgZnJvbnQtXG4gIC8vIG1hdHRlciBkZWxpbWl0ZXJcbiAgaWYgKHN0ci5jaGFyQXQob3BlbkxlbikgPT09IG9wZW4uc2xpY2UoLTEpKSB7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICAvLyBzdHJpcCB0aGUgb3BlbmluZyBkZWxpbWl0ZXJcbiAgc3RyID0gc3RyLnNsaWNlKG9wZW5MZW4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIC8vIHVzZSB0aGUgbGFuZ3VhZ2UgZGVmaW5lZCBhZnRlciBmaXJzdCBkZWxpbWl0ZXIsIGlmIGl0IGV4aXN0c1xuICBjb25zdCBsYW5ndWFnZSA9IG1hdHRlci5sYW5ndWFnZShzdHIsIG9wdHMpO1xuICBpZiAobGFuZ3VhZ2UubmFtZSkge1xuICAgIGZpbGUubGFuZ3VhZ2UgPSBsYW5ndWFnZS5uYW1lO1xuICAgIHN0ciA9IHN0ci5zbGljZShsYW5ndWFnZS5yYXcubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGdldCB0aGUgaW5kZXggb2YgdGhlIGNsb3NpbmcgZGVsaW1pdGVyXG4gIGxldCBjbG9zZUluZGV4ID0gc3RyLmluZGV4T2YoY2xvc2UpO1xuICBpZiAoY2xvc2VJbmRleCA9PT0gLTEpIHtcbiAgICBjbG9zZUluZGV4ID0gbGVuO1xuICB9XG5cbiAgLy8gZ2V0IHRoZSByYXcgZnJvbnQtbWF0dGVyIGJsb2NrXG4gIGZpbGUubWF0dGVyID0gc3RyLnNsaWNlKDAsIGNsb3NlSW5kZXgpO1xuXG4gIGNvbnN0IGJsb2NrID0gZmlsZS5tYXR0ZXIucmVwbGFjZSgvXlxccyojW15cXG5dKy9nbSwgJycpLnRyaW0oKTtcbiAgaWYgKGJsb2NrID09PSAnJykge1xuICAgIGZpbGUuaXNFbXB0eSA9IHRydWU7XG4gICAgZmlsZS5lbXB0eSA9IGZpbGUuY29udGVudDtcbiAgICBmaWxlLmRhdGEgPSB7fTtcbiAgfSBlbHNlIHtcblxuICAgIC8vIGNyZWF0ZSBmaWxlLmRhdGEgYnkgcGFyc2luZyB0aGUgcmF3IGZpbGUubWF0dGVyIGJsb2NrXG4gICAgZmlsZS5kYXRhID0gcGFyc2UoZmlsZS5sYW5ndWFnZSwgZmlsZS5tYXR0ZXIsIG9wdHMpO1xuICB9XG5cbiAgLy8gdXBkYXRlIGZpbGUuY29udGVudFxuICBpZiAoY2xvc2VJbmRleCA9PT0gbGVuKSB7XG4gICAgZmlsZS5jb250ZW50ID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgZmlsZS5jb250ZW50ID0gc3RyLnNsaWNlKGNsb3NlSW5kZXggKyBjbG9zZS5sZW5ndGgpO1xuICAgIGlmIChmaWxlLmNvbnRlbnRbMF0gPT09ICdcXHInKSB7XG4gICAgICBmaWxlLmNvbnRlbnQgPSBmaWxlLmNvbnRlbnQuc2xpY2UoMSk7XG4gICAgfVxuICAgIGlmIChmaWxlLmNvbnRlbnRbMF0gPT09ICdcXG4nKSB7XG4gICAgICBmaWxlLmNvbnRlbnQgPSBmaWxlLmNvbnRlbnQuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgZXhjZXJwdChmaWxlLCBvcHRzKTtcblxuICBpZiAob3B0cy5zZWN0aW9ucyA9PT0gdHJ1ZSB8fCB0eXBlb2Ygb3B0cy5zZWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VjdGlvbnMoZmlsZSwgb3B0cy5zZWN0aW9uKTtcbiAgfVxuICByZXR1cm4gZmlsZTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgZW5naW5lc1xuICovXG5cbm1hdHRlci5lbmdpbmVzID0gZW5naW5lcztcblxuLyoqXG4gKiBTdHJpbmdpZnkgYW4gb2JqZWN0IHRvIFlBTUwgb3IgdGhlIHNwZWNpZmllZCBsYW5ndWFnZSwgYW5kXG4gKiBhcHBlbmQgaXQgdG8gdGhlIGdpdmVuIHN0cmluZy4gQnkgZGVmYXVsdCwgb25seSBZQU1MIGFuZCBKU09OXG4gKiBjYW4gYmUgc3RyaW5naWZpZWQuIFNlZSB0aGUgW2VuZ2luZXNdKCNlbmdpbmVzKSBzZWN0aW9uIHRvIGxlYXJuXG4gKiBob3cgdG8gc3RyaW5naWZ5IG90aGVyIGxhbmd1YWdlcy5cbiAqXG4gKiBgYGBqc1xuICogY29uc29sZS5sb2cobWF0dGVyLnN0cmluZ2lmeSgnZm9vIGJhciBiYXonLCB7dGl0bGU6ICdIb21lJ30pKTtcbiAqIC8vIHJlc3VsdHMgaW46XG4gKiAvLyAtLS1cbiAqIC8vIHRpdGxlOiBIb21lXG4gKiAvLyAtLS1cbiAqIC8vIGZvbyBiYXIgYmF6XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gYGZpbGVgIFRoZSBjb250ZW50IHN0cmluZyB0byBhcHBlbmQgdG8gc3RyaW5naWZpZWQgZnJvbnQtbWF0dGVyLCBvciBhIGZpbGUgb2JqZWN0IHdpdGggYGZpbGUuY29udGVudGAgc3RyaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBkYXRhYCBGcm9udCBtYXR0ZXIgdG8gc3RyaW5naWZ5LlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBbT3B0aW9uc10oI29wdGlvbnMpIHRvIHBhc3MgdG8gZ3JheS1tYXR0ZXIgYW5kIFtqcy15YW1sXS5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyBhIHN0cmluZyBjcmVhdGVkIGJ5IHdyYXBwaW5nIHN0cmluZ2lmaWVkIHlhbWwgd2l0aCBkZWxpbWl0ZXJzLCBhbmQgYXBwZW5kaW5nIHRoYXQgdG8gdGhlIGdpdmVuIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWF0dGVyLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKGZpbGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBmaWxlID09PSAnc3RyaW5nJykgZmlsZSA9IG1hdHRlcihmaWxlLCBvcHRpb25zKTtcbiAgcmV0dXJuIHN0cmluZ2lmeShmaWxlLCBkYXRhLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogU3luY2hyb25vdXNseSByZWFkIGEgZmlsZSBmcm9tIHRoZSBmaWxlIHN5c3RlbSBhbmQgcGFyc2VcbiAqIGZyb250IG1hdHRlci4gUmV0dXJucyB0aGUgc2FtZSBvYmplY3QgYXMgdGhlIFttYWluIGZ1bmN0aW9uXSgjbWF0dGVyKS5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgZmlsZSA9IG1hdHRlci5yZWFkKCcuL2NvbnRlbnQvYmxvZy1wb3N0Lm1kJyk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgZmlsZXBhdGhgIGZpbGUgcGF0aCBvZiB0aGUgZmlsZSB0byByZWFkLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBbT3B0aW9uc10oI29wdGlvbnMpIHRvIHBhc3MgdG8gZ3JheS1tYXR0ZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgW2FuIG9iamVjdF0oI3JldHVybmVkLW9iamVjdCkgd2l0aCBgZGF0YWAgYW5kIGBjb250ZW50YFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tYXR0ZXIucmVhZCA9IGZ1bmN0aW9uKGZpbGVwYXRoLCBvcHRpb25zKSB7XG4gIGNvbnN0IHN0ciA9IGZzLnJlYWRGaWxlU3luYyhmaWxlcGF0aCwgJ3V0ZjgnKTtcbiAgY29uc3QgZmlsZSA9IG1hdHRlcihzdHIsIG9wdGlvbnMpO1xuICBmaWxlLnBhdGggPSBmaWxlcGF0aDtcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gYHN0cmluZ2AgaGFzIGZyb250IG1hdHRlci5cbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmluZ2BcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIGZyb250IG1hdHRlciBleGlzdHMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1hdHRlci50ZXN0ID0gZnVuY3Rpb24oc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB1dGlscy5zdGFydHNXaXRoKHN0ciwgZGVmYXVsdHMob3B0aW9ucykuZGVsaW1pdGVyc1swXSk7XG59O1xuXG4vKipcbiAqIERldGVjdCB0aGUgbGFuZ3VhZ2UgdG8gdXNlLCBpZiBvbmUgaXMgZGVmaW5lZCBhZnRlciB0aGVcbiAqIGZpcnN0IGZyb250LW1hdHRlciBkZWxpbWl0ZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBPYmplY3Qgd2l0aCBgcmF3YCAoYWN0dWFsIGxhbmd1YWdlIHN0cmluZyksIGFuZCBgbmFtZWAsIHRoZSBsYW5ndWFnZSB3aXRoIHdoaXRlc3BhY2UgdHJpbW1lZFxuICovXG5cbm1hdHRlci5sYW5ndWFnZSA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuICBjb25zdCBvcHRzID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGNvbnN0IG9wZW4gPSBvcHRzLmRlbGltaXRlcnNbMF07XG5cbiAgaWYgKG1hdHRlci50ZXN0KHN0cikpIHtcbiAgICBzdHIgPSBzdHIuc2xpY2Uob3Blbi5sZW5ndGgpO1xuICB9XG5cbiAgY29uc3QgbGFuZ3VhZ2UgPSBzdHIuc2xpY2UoMCwgc3RyLnNlYXJjaCgvXFxyP1xcbi8pKTtcbiAgcmV0dXJuIHtcbiAgICByYXc6IGxhbmd1YWdlLFxuICAgIG5hbWU6IGxhbmd1YWdlID8gbGFuZ3VhZ2UudHJpbSgpIDogJydcbiAgfTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBtYXR0ZXJgXG4gKi9cblxubWF0dGVyLmNhY2hlID0ge307XG5tYXR0ZXIuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBtYXR0ZXIuY2FjaGUgPSB7fTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IG1hdHRlcjtcbiIsICJpbXBvcnQgeyBQbHVnaW4sIE5vdGljZSwgVEZpbGUsIFRGb2xkZXIsIG5vcm1hbGl6ZVBhdGggfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCB7IENsb3VkZmxhcmVTeW5jU2V0dGluZ1RhYiwgQ2xvdWRmbGFyZVN5bmNTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgU3luY0VuZ2luZSwgQ29uZmxpY3RJbmZvLCBDb25mbGljdFJlc29sdXRpb24gfSBmcm9tICcuL3N5bmMtZW5naW5lJztcbmltcG9ydCB7IFN5bmNTdGF0dXNCYXIgfSBmcm9tICcuL3N0YXR1cy1iYXInO1xuaW1wb3J0IHsgQ29uZmxpY3RNb2RhbCB9IGZyb20gJy4vY29uZmxpY3QtbW9kYWwnO1xuXG5pbnRlcmZhY2UgRnJvbnRtYXR0ZXJEYXRhIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHNsdWc/OiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG4gIHN1bW1hcnk/OiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgcHVibGlzaD86IGJvb2xlYW47XG4gIGNvdmVySW1hZ2U/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBSZW1vdGVGaWxlIHtcbiAga2V5OiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgdXBsb2FkZWQ/OiBzdHJpbmc7XG4gIGh0dHBFdGFnPzogc3RyaW5nO1xuICBjb250ZW50SGFzaD86IHN0cmluZztcbiAgZW5jb2Rpbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkZmxhcmVTeW5jUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IENsb3VkZmxhcmVTeW5jU2V0dGluZ3M7XG4gIHN5bmNFbmdpbmU6IFN5bmNFbmdpbmU7XG4gIHN0YXR1c0JhcjogU3luY1N0YXR1c0JhcjtcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIC8vIFx1NTIxRFx1NTlDQlx1NTMxNlx1NTQwQ1x1NkI2NVx1NUYxNVx1NjRDRVxuICAgIHRoaXMuc3luY0VuZ2luZSA9IG5ldyBTeW5jRW5naW5lKHRoaXMpO1xuICAgIGF3YWl0IHRoaXMuc3luY0VuZ2luZS5sb2FkU3luY1N0YXRlKCk7XG5cbiAgICAvLyBcdTUyMURcdTU5Q0JcdTUzMTZcdTcyQjZcdTYwMDFcdTY4MEZcbiAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTeW5jU3RhdHVzQmFyKHRoaXMsIHtcbiAgICAgIG9uU2hvd0NvbmZsaWN0czogKCkgPT4gdGhpcy5zaG93Q29uZmxpY3RNb2RhbCgpLFxuICAgICAgb25UcmlnZ2VyU3luYzogKCkgPT4gdGhpcy50cmlnZ2VyRnVsbFN5bmMoKSxcbiAgICB9KTtcblxuICAgIC8vIFx1N0VEMVx1NUI5QVx1NTQwQ1x1NkI2NVx1NUYxNVx1NjRDRVx1NTZERVx1OEMwM1xuICAgIHRoaXMuc3luY0VuZ2luZS5vblN0YXRzQ2hhbmdlZCA9IChzdGF0cykgPT4ge1xuICAgICAgdGhpcy5zdGF0dXNCYXIudXBkYXRlU3RhdHMoc3RhdHMpO1xuICAgIH07XG5cbiAgICB0aGlzLnN5bmNFbmdpbmUub25Db25mbGljdHNGb3VuZCA9IChjb25mbGljdHMpID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzQmFyLnVwZGF0ZUNvbmZsaWN0cyhjb25mbGljdHMpO1xuICAgICAgbmV3IE5vdGljZShgXHUyNkEwXHVGRTBGICR7Y29uZmxpY3RzLmxlbmd0aH0gc3luYyBjb25mbGljdChzKSBmb3VuZC4gQ2xpY2sgc3RhdHVzIGJhciB0byByZXNvbHZlLmApO1xuICAgICAgdGhpcy5zaG93Q29uZmxpY3RNb2RhbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLnN5bmNFbmdpbmUub25TeW5jQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzdGF0cyA9IHRoaXMuc3luY0VuZ2luZS5zdGF0cztcbiAgICAgIGlmIChzdGF0cy5jb25mbGljdHMgPT09IDApIHtcbiAgICAgICAgbmV3IE5vdGljZShgXHUyNzA1IFN5bmMgY29tcGxldGU6ICR7c3RhdHMuc3luY2VkRmlsZXN9IGZpbGVzIHN5bmNlZGApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnN5bmNFbmdpbmUub25TeW5jRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgIG5ldyBOb3RpY2UoYFx1Mjc0QyBTeW5jIGVycm9yOiAke2Vycm9yfWApO1xuICAgIH07XG5cbiAgICAvLyBcdTZERkJcdTUyQTBcdThCQkVcdTdGNkVcdTk3NjJcdTY3N0ZcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENsb3VkZmxhcmVTeW5jU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgLy8gXHU2REZCXHU1MkEwXHU1NDdEXHU0RUU0XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1mdWxsJyxcbiAgICAgIG5hbWU6ICdGdWxsIHN5bmMgd2l0aCBDbG91ZGZsYXJlJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnRyaWdnZXJGdWxsU3luYygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy10by1yZW1vdGUnLFxuICAgICAgbmFtZTogJ1N5bmMgZW50aXJlIHZhdWx0IHRvIENsb3VkZmxhcmUgKHVwbG9hZCBvbmx5KScsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zeW5jVG9SZW1vdGUoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3N5bmMtZnJvbS1yZW1vdGUnLFxuICAgICAgbmFtZTogJ0Rvd25sb2FkIGVudGlyZSB2YXVsdCBmcm9tIENsb3VkZmxhcmUnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc3luY0Zyb21SZW1vdGUoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3VwZGF0ZS1mcm9udG1hdHRlcicsXG4gICAgICBuYW1lOiAnVXBkYXRlIGZyb250bWF0dGVyIGZvciBjdXJyZW50IGZpbGUnLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3IpID0+IHRoaXMudXBkYXRlQ3VycmVudEZpbGVGcm9udG1hdHRlcihlZGl0b3IpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnZ2VuZXJhdGUtYWxsLWZyb250bWF0dGVyJyxcbiAgICAgIG5hbWU6ICdHZW5lcmF0ZSBmcm9udG1hdHRlciBmb3IgYWxsIG1hcmtkb3duIGZpbGVzJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmdlbmVyYXRlQWxsRnJvbnRtYXR0ZXIoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3N5bmMtY3VycmVudC1maWxlJyxcbiAgICAgIG5hbWU6ICdTeW5jIGN1cnJlbnQgZmlsZSB0byBDbG91ZGZsYXJlJyxcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoKSA9PiB0aGlzLnN5bmNDdXJyZW50RmlsZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncmVzb2x2ZS1jb25mbGljdHMnLFxuICAgICAgbmFtZTogJ1Jlc29sdmUgc3luYyBjb25mbGljdHMnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd0NvbmZsaWN0TW9kYWwoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3Nob3ctc3luYy1zdGF0dXMnLFxuICAgICAgbmFtZTogJ1Nob3cgc3luYyBzdGF0dXMnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgLy8gXHU4OUU2XHU1M0QxXHU3MkI2XHU2MDAxXHU2ODBGXHU3MEI5XHU1MUZCXHU5MDNCXHU4RjkxXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyWydzaG93RGV0YWlsTW9kYWwnXSgpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NEZERFx1NUI1OFx1NEU4Qlx1NEVGNlx1RkYwQ1x1NEY3Rlx1NzUyOCBkZWJvdW5jZWQgXHU1NDBDXHU2QjY1XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oJ21vZGlmeScsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgdGhpcy5zZXR0aW5ncy5hdXRvU3luYykge1xuICAgICAgICAgIHRoaXMuc3luY0VuZ2luZS5zY2hlZHVsZUZpbGVTeW5jKGZpbGUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBcdTc2RDFcdTU0MkNcdTY1ODdcdTRFRjZcdTUyMUJcdTVFRkFcdTRFOEJcdTRFRjZcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbignY3JlYXRlJywgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiB0aGlzLnNldHRpbmdzLmF1dG9Gcm9udG1hdHRlcikge1xuICAgICAgICAgIGlmIChmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbGVGcm9udG1hdHRlcihmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFx1NkRGQlx1NTJBMCBSaWJib24gXHU1NkZFXHU2ODA3XG4gICAgdGhpcy5hZGRSaWJib25JY29uKCdjbG91ZC11cGxvYWQnLCAnRnVsbCBTeW5jIHdpdGggQ2xvdWRmbGFyZScsICgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlckZ1bGxTeW5jKCk7XG4gICAgfSk7XG5cbiAgICAvLyBcdTU0MkZcdTUyQThcdTgxRUFcdTUyQThcdTU0MENcdTZCNjVcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvU3luYykge1xuICAgICAgdGhpcy5zeW5jRW5naW5lLnN0YXJ0QXV0b1N5bmMoKTtcbiAgICB9XG5cbiAgICAvLyBcdTU0MkZcdTUyQThcdTY1RjZcdTU0MENcdTZCNjVcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zeW5jT25TdGFydHVwKSB7XG4gICAgICAvLyBcdTVFRjZcdThGREYgMyBcdTc5RDJcdTdCNDkgT2JzaWRpYW4gXHU1QjhDXHU1MTY4XHU1MkEwXHU4RjdEXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRnVsbFN5bmMoKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vIFx1NTQyRlx1NTJBOFx1NjVGNlx1NjI2Qlx1NjNDRlx1NjI0MFx1NjcwOSBtZCBcdTY1ODdcdTRFRjZcdUZGMENcdTgxRUFcdTUyQThcdTg4NjVcdTUxNjhcdTdGM0FcdTU5MzFcdTc2ODQgZnJvbnRtYXR0ZXJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvRnJvbnRtYXR0ZXIpIHtcbiAgICAgIC8vIFx1NUVGNlx1OEZERiAyIFx1NzlEMlx1N0I0OVx1NUY4NSB2YXVsdCBcdTVCOENcdTUxNjhcdTUyQTBcdThGN0RcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjYW5BbmRHZW5lcmF0ZUZyb250bWF0dGVyKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnQ2xvdWRmbGFyZSBTeW5jIHBsdWdpbiBsb2FkZWQnKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgc2VydmVyVXJsOiAnJyxcbiAgICAgICAgYXBpVG9rZW46ICcnLFxuICAgICAgICBhdXRvU3luYzogdHJ1ZSxcbiAgICAgICAgYXV0b0Zyb250bWF0dGVyOiB0cnVlLFxuICAgICAgICBzeW5jQWxsRmlsZXM6IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVGb2xkZXJzOiBbJ190ZW1wbGF0ZXMnLCAnLnRyYXNoJ10sXG4gICAgICAgIGV4Y2x1ZGVGaWxlczogW10sXG4gICAgICAgIGF1dG9TeW5jSW50ZXJ2YWw6IDUsXG4gICAgICAgIGNvbmZsaWN0U3RyYXRlZ3k6ICdhc2snIGFzIGNvbnN0LFxuICAgICAgICBzeW5jT25TdGFydHVwOiB0cnVlLFxuICAgICAgICBkZWJvdW5jZURlbGF5OiAzMCxcbiAgICAgIH0sXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cbiAgICAvLyBcdTkxQ0RcdTU0MkZcdTgxRUFcdTUyQThcdTU0MENcdTZCNjVcdUZGMDhcdTk1RjRcdTk2OTRcdTUzRUZcdTgwRkRcdTY1MzlcdTUzRDhcdUZGMDlcbiAgICBpZiAodGhpcy5zeW5jRW5naW5lKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvU3luYykge1xuICAgICAgICB0aGlzLnN5bmNFbmdpbmUuc3RhcnRBdXRvU3luYygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeW5jRW5naW5lLnN0b3BBdXRvU3luYygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gU3luYyBUcmlnZ2VycyA9PT09PT09PT09XG5cbiAgYXN5bmMgdHJpZ2dlckZ1bGxTeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5zZXR0aW5ncy5zZXJ2ZXJVcmwgfHwgIXRoaXMuc2V0dGluZ3MuYXBpVG9rZW4pIHtcbiAgICAgIG5ldyBOb3RpY2UoJ1BsZWFzZSBjb25maWd1cmUgU2VydmVyIFVSTCBhbmQgQVBJIFRva2VuIGluIHNldHRpbmdzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGVzdCBjb25uZWN0aW9uIGZpcnN0XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuYXBpKCcvYXBpL2Jsb2cvc2l0ZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIG5ldyBOb3RpY2UoYENvbm5lY3Rpb24gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IE5vdGljZSgnU3RhcnRpbmcgZnVsbCBzeW5jLi4uJyk7XG4gICAgYXdhaXQgdGhpcy5zeW5jRW5naW5lLmZ1bGxTeW5jKCk7XG4gIH1cblxuICBzaG93Q29uZmxpY3RNb2RhbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb25mbGljdHMgPSB0aGlzLnN5bmNFbmdpbmUuY29uZmxpY3RzO1xuICAgIGlmIChjb25mbGljdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBuZXcgTm90aWNlKCdObyBjb25mbGljdHMgdG8gcmVzb2x2ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBDb25mbGljdE1vZGFsKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICBjb25mbGljdHMsXG4gICAgICBhc3luYyAoY29uZmxpY3QsIHJlc29sdXRpb24pID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jRW5naW5lLnJlc29sdmVDb25mbGljdChjb25mbGljdCwgcmVzb2x1dGlvbik7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLnVwZGF0ZUNvbmZsaWN0cyh0aGlzLnN5bmNFbmdpbmUuY29uZmxpY3RzKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyAocmVzb2x1dGlvbikgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNFbmdpbmUucmVzb2x2ZUFsbENvbmZsaWN0cyhyZXNvbHV0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIudXBkYXRlQ29uZmxpY3RzKHRoaXMuc3luY0VuZ2luZS5jb25mbGljdHMpO1xuICAgICAgfVxuICAgICkub3BlbigpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBBUEkgXHU4QzAzXHU3NTI4ID09PT09PT09PT1cblxuICBhc3luYyBhcGk8VCA9IGFueT4oZW5kcG9pbnQ6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RJbml0KTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgeyBzZXJ2ZXJVcmwsIGFwaVRva2VuIH0gPSB0aGlzLnNldHRpbmdzO1xuXG4gICAgaWYgKCFzZXJ2ZXJVcmwgfHwgIWFwaVRva2VuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciBVUkwgKCR7c2VydmVyVXJsIHx8ICdlbXB0eSd9KSBhbmQgQVBJIHRva2VuICgke2FwaVRva2VuID8gJ3NldCcgOiAnZW1wdHknfSkgYXJlIHJlcXVpcmVkYCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gc2VydmVyVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyBlbmRwb2ludDtcbiAgICBjb25zb2xlLmxvZyhgW0FQSV0gJHtvcHRpb25zPy5tZXRob2QgfHwgJ0dFVCd9ICR7dXJsfWApO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnM/LmhlYWRlcnMpO1xuICAgIGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2FwaVRva2VufWApO1xuICAgIGlmIChvcHRpb25zPy5tZXRob2QgJiYgb3B0aW9ucy5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhgW0FQSV0gUmVzcG9uc2U6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBlcnJvcjogcmVzcG9uc2Uuc3RhdHVzVGV4dCB9KSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBlcnJvciAke3Jlc3BvbnNlLnN0YXR1c306ICR7ZXJyb3IuZXJyb3IgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBcdTRFMEFcdTRGMjAvXHU0RTBCXHU4RjdEID09PT09PT09PT1cblxuICBhc3luYyB1cGxvYWRGaWxlKGtleTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGNvbnRlbnRUeXBlID0gJ3RleHQvbWFya2Rvd24nLCBlbmNvZGluZzogJ3V0Zi04JyB8ICdiYXNlNjQnID0gJ3V0Zi04Jyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuYXBpKCcvYXBpL3N5bmMvdXBsb2FkJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGtleSwgY29udGVudCwgY29udGVudFR5cGUsIGVuY29kaW5nIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZG93bmxvYWRGaWxlKGtleTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdGVGaWxlPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5hcGk8eyBzdWNjZXNzOiBib29sZWFuOyBkYXRhOiBSZW1vdGVGaWxlIH0+KGAvYXBpL3N5bmMvZG93bmxvYWQvJHtrZXl9YCk7XG4gICAgcmV0dXJuIHJlcy5kYXRhO1xuICB9XG5cbiAgYXN5bmMgbGlzdEZpbGVzKHByZWZpeCA9ICcnKTogUHJvbWlzZTx7IGtleTogc3RyaW5nOyBzaXplOiBudW1iZXI7IHVwbG9hZGVkPzogc3RyaW5nOyBodHRwRXRhZz86IHN0cmluZyB9W10+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmFwaTx7IHN1Y2Nlc3M6IGJvb2xlYW47IGRhdGE6IHsgZmlsZXM6IGFueVtdIH0gfT4oXG4gICAgICBgL2FwaS9zeW5jL2xpc3Q/cHJlZml4PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHByZWZpeCl9YFxuICAgICk7XG4gICAgcmV0dXJuIHJlcy5kYXRhLmZpbGVzO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlRmlsZShrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuYXBpKGAvYXBpL3N5bmMvZGVsZXRlLyR7a2V5fWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gRnJvbnRtYXR0ZXIgXHU1OTA0XHU3NDA2ID09PT09PT09PT1cblxuICBhc3luYyBnZW5lcmF0ZUZyb250bWF0dGVyKGZpbGU6IFRGaWxlKTogUHJvbWlzZTxGcm9udG1hdHRlckRhdGE+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICBjb25zdCBleGlzdGluZyA9IG1hdHRlcihjb250ZW50KTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogZXhpc3RpbmcuZGF0YS50aXRsZSB8fCBmaWxlLmJhc2VuYW1lLFxuICAgICAgc2x1ZzogZXhpc3RpbmcuZGF0YS5zbHVnIHx8IHRoaXMuZ2VuZXJhdGVTbHVnKGZpbGUuYmFzZW5hbWUpLFxuICAgICAgZGF0ZTogZXhpc3RpbmcuZGF0YS5kYXRlIHx8IG5ldyBEYXRlKGZpbGUuc3RhdC5jdGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHN1bW1hcnk6IGV4aXN0aW5nLmRhdGEuc3VtbWFyeSB8fCB0aGlzLmV4dHJhY3RTdW1tYXJ5KGV4aXN0aW5nLmNvbnRlbnQpLFxuICAgICAgdGFnczogZXhpc3RpbmcuZGF0YS50YWdzIHx8IFtdLFxuICAgICAgcHVibGlzaDogZXhpc3RpbmcuZGF0YS5wdWJsaXNoID8/IGZhbHNlLFxuICAgICAgY292ZXJJbWFnZTogZXhpc3RpbmcuZGF0YS5jb3ZlckltYWdlLFxuICAgIH07XG4gIH1cblxuICBnZW5lcmF0ZVNsdWcoZmlsZW5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZpbGVuYW1lXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJy0nKVxuICAgICAgLnJlcGxhY2UoL1teXFx3LV0vZywgJycpXG4gICAgICAuc3Vic3RyaW5nKDAsIDEwMCk7XG4gIH1cblxuICBleHRyYWN0U3VtbWFyeShjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZpcnN0UGFyYWdyYXBoID0gY29udGVudC5zcGxpdCgnXFxuXFxuJylbMF07XG4gICAgcmV0dXJuIGZpcnN0UGFyYWdyYXBoLnJlcGxhY2UoL1sjKmBfXFxbXFxdXS9nLCAnJykuc3Vic3RyaW5nKDAsIDIwMCk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVGaWxlRnJvbnRtYXR0ZXIoZmlsZTogVEZpbGUsIHNpbGVudCA9IGZhbHNlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAvLyBcdTU5ODJcdTY3OUNcdTVERjJcdTY3MDkgZnJvbnRtYXR0ZXJcdUZGMENcdThERjNcdThGQzdcdUZGMDhcdTRFQzVcdTRFM0FcdTdGM0FcdTU5MzFcdTc2ODRcdTY1ODdcdTRFRjZcdTc1MUZcdTYyMTBcdUZGMDlcbiAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCctLS0nKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBhd2FpdCB0aGlzLmdlbmVyYXRlRnJvbnRtYXR0ZXIoZmlsZSk7XG4gICAgY29uc3QgbmV3Q29udGVudCA9IG1hdHRlci5zdHJpbmdpZnkoY29udGVudCwgZnJvbnRtYXR0ZXIpO1xuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXdDb250ZW50KTtcblxuICAgIGlmICghc2lsZW50KSB7XG4gICAgICBuZXcgTm90aWNlKGBVcGRhdGVkIGZyb250bWF0dGVyIGZvciAke2ZpbGUubmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhc3luYyB1cGRhdGVDdXJyZW50RmlsZUZyb250bWF0dGVyKGVkaXRvcjogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XG4gICAgaWYgKCFhY3RpdmVGaWxlKSB7XG4gICAgICBuZXcgTm90aWNlKCdObyBhY3RpdmUgZmlsZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZyb250bWF0dGVyID0gYXdhaXQgdGhpcy5nZW5lcmF0ZUZyb250bWF0dGVyKGFjdGl2ZUZpbGUpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBuZXdDb250ZW50ID0gbWF0dGVyLnN0cmluZ2lmeShjb250ZW50LCBmcm9udG1hdHRlcik7XG5cbiAgICBlZGl0b3Iuc2V0VmFsdWUobmV3Q29udGVudCk7XG4gICAgbmV3IE5vdGljZSgnVXBkYXRlZCBmcm9udG1hdHRlcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjI2Qlx1NjNDRlx1NjI0MFx1NjcwOSBtZCBcdTY1ODdcdTRFRjZcdUZGMENcdTc4NkVcdTRGRERcdTZCQ0ZcdTRFMkFcdTY1ODdcdTRFRjZcdTkwRkRcdTY3MDlcdTVCOENcdTY1NzRcdTc2ODQgZnJvbnRtYXR0ZXJcbiAgICogXHU3RURGXHU0RTAwXHU1OTA0XHU3NDA2XHU0RTA5XHU3OUNEXHU2MEM1XHU1MUI1XHVGRjFBXG4gICAqIDEuIFx1NUI4Q1x1NTE2OFx1NkNBMVx1NjcwOSBmcm9udG1hdHRlciBcdTIxOTIgXHU3NTFGXHU2MjEwXHU1MTY4XHU5MEU4XHU1QjU3XHU2QkI1XG4gICAqIDIuIFx1NjcwOVx1OTBFOFx1NTIwNiBmcm9udG1hdHRlclx1RkYwOFx1N0YzQVx1NUMxMVx1NjdEMFx1NEU5Qlx1NUI1N1x1NkJCNVx1RkYwOVx1MjE5MiBcdTg4NjVcdTUxNjhcdTdGM0FcdTU5MzFcdTVCNTdcdTZCQjVcbiAgICogMy4gXHU1REYyXHU2NzA5XHU1QjhDXHU2NTc0IGZyb250bWF0dGVyIFx1MjE5MiBcdThERjNcdThGQzdcbiAgICovXG4gIGFzeW5jIHNjYW5BbmRHZW5lcmF0ZUZyb250bWF0dGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoXG4gICAgICAoZikgPT4gZi5wYXRoLmVuZHNXaXRoKCcubWQnKSAmJiB0aGlzLnNob3VsZFN5bmNGaWxlKGYucGF0aClcbiAgICApO1xuXG4gICAgbGV0IGdlbmVyYXRlZCA9IDA7XG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbJ3RpdGxlJywgJ3NsdWcnLCAnZGF0ZScsICdzdW1tYXJ5JywgJ3RhZ3MnLCAncHVibGlzaCddIGFzIGNvbnN0O1xuXG4gICAgY29uc29sZS5sb2coYFtGcm9udG1hdHRlcl0gU2Nhbm5pbmcgJHtmaWxlcy5sZW5ndGh9IG1hcmtkb3duIGZpbGVzLi4uYCk7XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuXG4gICAgICAgIC8vIGdyYXktbWF0dGVyIFx1N0VERlx1NEUwMFx1ODlFM1x1Njc5MFx1RkYxQVx1NjVFMFx1OEJCQVx1NjcwOVx1NkNBMVx1NjcwOSAtLS0gXHU5MEZEXHU4MEZEXHU2QjYzXHU3ODZFXHU4OUUzXHU2NzkwXG4gICAgICAgIC8vIFx1NkNBMVx1NjcwOSBmcm9udG1hdHRlciBcdTIxOTIgZGF0YT17fSwgY29udGVudD1cdTUzOUZcdTU5Q0JcdTUxODVcdTVCQjlcbiAgICAgICAgLy8gXHU2NzA5IGZyb250bWF0dGVyIFx1MjE5MiBkYXRhPXtcdTVERjJcdTY3MDlcdTVCNTdcdTZCQjV9LCBjb250ZW50PVx1NkI2M1x1NjU4N1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBtYXR0ZXIoY29udGVudCk7XG5cbiAgICAgICAgLy8gXHU3NTFGXHU2MjEwXHU5RUQ4XHU4QkE0XHU1MDNDXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge1xuICAgICAgICAgIHRpdGxlOiBmaWxlLmJhc2VuYW1lLFxuICAgICAgICAgIHNsdWc6IHRoaXMuZ2VuZXJhdGVTbHVnKGZpbGUuYmFzZW5hbWUpLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGZpbGUuc3RhdC5jdGltZSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdW1tYXJ5OiB0aGlzLmV4dHJhY3RTdW1tYXJ5KHBhcnNlZC5jb250ZW50KSxcbiAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICBwdWJsaXNoOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBcdTY4QzBcdTY3RTVcdTU0RUFcdTRFOUJcdTVGQzVcdTg5ODFcdTVCNTdcdTZCQjVcdTdGM0FcdTU5MzFcbiAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiByZXF1aXJlZEZpZWxkcykge1xuICAgICAgICAgIGlmIChwYXJzZWQuZGF0YVtmaWVsZF0gPT09IHVuZGVmaW5lZCB8fCBwYXJzZWQuZGF0YVtmaWVsZF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcnNlZC5kYXRhW2ZpZWxkXSA9IGRlZmF1bHRzW2ZpZWxkXTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgLy8gXHU3NTI4IGdyYXktbWF0dGVyIFx1OTFDRFx1NjVCMFx1NUU4Rlx1NTIxN1x1NTMxNlx1RkYwOFx1ODFFQVx1NTJBOFx1NkRGQlx1NTJBMCAtLS0gXHU1MjA2XHU5Njk0XHU3QjI2XHVGRjA5XG4gICAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IG1hdHRlci5zdHJpbmdpZnkocGFyc2VkLmNvbnRlbnQsIHBhcnNlZC5kYXRhKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbmV3Q29udGVudCk7XG4gICAgICAgICAgZ2VuZXJhdGVkKys7XG4gICAgICAgICAgY29uc29sZS5sb2coYFtGcm9udG1hdHRlcl0gXHUyNzA1ICR7ZmlsZS5wYXRofSBcdTIwMTQgYWRkZWQgbWlzc2luZyBmaWVsZHNgKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW0Zyb250bWF0dGVyXSBcdTI3NEMgRmFpbGVkIGZvciAke2ZpbGUucGF0aH06YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChnZW5lcmF0ZWQgPiAwKSB7XG4gICAgICBuZXcgTm90aWNlKGBcdTI3MDUgR2VuZXJhdGVkL3VwZGF0ZWQgZnJvbnRtYXR0ZXIgZm9yICR7Z2VuZXJhdGVkfSBmaWxlKHMpYCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBbRnJvbnRtYXR0ZXJdIERvbmU6ICR7Z2VuZXJhdGVkfS8ke2ZpbGVzLmxlbmd0aH0gZmlsZXMgdXBkYXRlZGApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NEUzQVx1NjI0MFx1NjcwOSBtZCBcdTY1ODdcdTRFRjZcdTVGM0FcdTUyMzZcdTc1MUZcdTYyMTAvXHU2NkY0XHU2NUIwIGZyb250bWF0dGVyXHVGRjA4XHU1MzA1XHU2MkVDXHU1REYyXHU2NzA5IGZyb250bWF0dGVyIFx1NzY4NFx1NjU4N1x1NEVGNlx1RkYwOVxuICAgKi9cbiAgYXN5bmMgZ2VuZXJhdGVBbGxGcm9udG1hdHRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCkuZmlsdGVyKFxuICAgICAgKGYpID0+IGYucGF0aC5lbmRzV2l0aCgnLm1kJykgJiYgdGhpcy5zaG91bGRTeW5jRmlsZShmLnBhdGgpXG4gICAgKTtcblxuICAgIGxldCB1cGRhdGVkID0gMDtcbiAgICBuZXcgTm90aWNlKGBHZW5lcmF0aW5nIGZyb250bWF0dGVyIGZvciAke2ZpbGVzLmxlbmd0aH0gZmlsZXMuLi5gKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgIGNvbnN0IGZyb250bWF0dGVyID0gYXdhaXQgdGhpcy5nZW5lcmF0ZUZyb250bWF0dGVyKGZpbGUpO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gbWF0dGVyLnN0cmluZ2lmeShcbiAgICAgICAgICBtYXR0ZXIoY29udGVudCkuY29udGVudCwgLy8gXHU1M0JCXHU2Mzg5XHU2NUU3IGZyb250bWF0dGVyXHVGRjBDXHU3NTI4XHU2NUIwXHU3Njg0XHU2NkZGXHU2MzYyXG4gICAgICAgICAgZnJvbnRtYXR0ZXJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBcdTRFQzVcdTU3MjhcdTUxODVcdTVCQjlcdTVCOUVcdTk2NDVcdTUzRDhcdTUzMTZcdTY1RjZcdTUxOTlcdTUxNjVcbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG5ld0NvbnRlbnQpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbmV3Q29udGVudCk7XG4gICAgICAgICAgdXBkYXRlZCsrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbRnJvbnRtYXR0ZXJdIEZhaWxlZCBmb3IgJHtmaWxlLnBhdGh9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKGBcdTI3MDUgVXBkYXRlZCBmcm9udG1hdHRlciBmb3IgJHt1cGRhdGVkfS8ke2ZpbGVzLmxlbmd0aH0gZmlsZXNgKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gXHU1NDBDXHU2QjY1XHU5MDNCXHU4RjkxID09PT09PT09PT1cblxuICBzaG91bGRTeW5jRmlsZShmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gXHU2MzkyXHU5NjY0XHU3Mjc5XHU1QjlBXHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgZm9yIChjb25zdCBleGNsdWRlIG9mIHRoaXMuc2V0dGluZ3MuZXhjbHVkZUZvbGRlcnMgfHwgW10pIHtcbiAgICAgIGlmIChmaWxlUGF0aC5zdGFydHNXaXRoKGV4Y2x1ZGUgKyAnLycpIHx8IGZpbGVQYXRoLnN0YXJ0c1dpdGgoZXhjbHVkZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFx1NjM5Mlx1OTY2NCAuY29uZmxpY3QgXHU2NTg3XHU0RUY2XG4gICAgaWYgKGZpbGVQYXRoLmluY2x1ZGVzKCcuY29uZmxpY3QtJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFJlbW90ZUtleShmaWxlOiBURmlsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZpbGUucGF0aDtcbiAgfVxuXG4gIGdldE1pbWVUeXBlKGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICBqcGc6ICdpbWFnZS9qcGVnJywganBlZzogJ2ltYWdlL2pwZWcnLCBwbmc6ICdpbWFnZS9wbmcnLFxuICAgICAgZ2lmOiAnaW1hZ2UvZ2lmJywgd2VicDogJ2ltYWdlL3dlYnAnLCBzdmc6ICdpbWFnZS9zdmcreG1sJyxcbiAgICAgIGF2aWY6ICdpbWFnZS9hdmlmJywgcGRmOiAnYXBwbGljYXRpb24vcGRmJyxcbiAgICAgIG1wMzogJ2F1ZGlvL21wZWcnLCBtcDQ6ICd2aWRlby9tcDQnLFxuICAgICAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLCB5YW1sOiAndGV4dC95YW1sJywgeW1sOiAndGV4dC95YW1sJyxcbiAgICAgIGNzczogJ3RleHQvY3NzJywganM6ICd0ZXh0L2phdmFzY3JpcHQnLCB0czogJ3RleHQvdHlwZXNjcmlwdCcsXG4gICAgfTtcbiAgICByZXR1cm4gbWFwW2V4dC50b0xvd2VyQ2FzZSgpXSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgfVxuXG4gIGFzeW5jIHN5bmNGaWxlVG9SZW1vdGUoZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuc2hvdWxkU3luY0ZpbGUoZmlsZS5wYXRoKSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpO1xuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBSZWFkaW5nIGZpbGU6ICR7ZmlsZS5wYXRofSAoJHtpc01hcmtkb3duID8gJ21hcmtkb3duJyA6IGZpbGUuZXh0ZW5zaW9ufSlgKTtcblxuICAgICAgbGV0IGNvbnRlbnQ6IHN0cmluZztcbiAgICAgIGxldCBjb250ZW50VHlwZTogc3RyaW5nO1xuICAgICAgbGV0IGVuY29kaW5nOiAndXRmLTgnIHwgJ2Jhc2U2NCcgPSAndXRmLTgnO1xuXG4gICAgICBpZiAoaXNNYXJrZG93bikge1xuICAgICAgICBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgY29udGVudFR5cGUgPSAndGV4dC9tYXJrZG93bic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTRFOENcdThGREJcdTUyMzZcdTY1ODdcdTRFRjZcdTc1MjggYmFzZTY0IFx1N0YxNlx1NzgwMVxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkQmluYXJ5KGZpbGUpO1xuICAgICAgICBjb250ZW50ID0gdGhpcy5hcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcik7XG4gICAgICAgIGVuY29kaW5nID0gJ2Jhc2U2NCc7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRNaW1lVHlwZShmaWxlLmV4dGVuc2lvbik7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gRmlsZSBzaXplOiAke2ZpbGUuc3RhdC5zaXplfSBieXRlcywgZW5jb2Rpbmc6ICR7ZW5jb2Rpbmd9YCk7XG5cbiAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NjYyRiBtYXJrZG93blx1RkYwQ1x1NjhDMFx1NjdFNVx1NjYyRlx1NTQyNlx1NURGMlx1NTNEMVx1NUUwM1x1NEVFNVx1NTFCM1x1NUI5QVx1NjYyRlx1NTQyNlx1NEUwQVx1NEYyMFx1NTZGRVx1NzI0N1xuICAgICAgY29uc3QgaXNQdWJsaXNoZWQgPSBpc01hcmtkb3duXG4gICAgICAgID8gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG1hdHRlcihjb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQuZGF0YS5wdWJsaXNoID09PSB0cnVlO1xuICAgICAgICAgIH0pKClcbiAgICAgICAgOiBmYWxzZTtcblxuICAgICAgLy8gXHU0RTBBXHU0RjIwXHU2NTg3XHU0RUY2XG4gICAgICBjb25zdCByZW1vdGVLZXkgPSB0aGlzLmdldFJlbW90ZUtleShmaWxlKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gVXBsb2FkaW5nIHRvOiAke3JlbW90ZUtleX1gKTtcbiAgICAgIGF3YWl0IHRoaXMudXBsb2FkRmlsZShyZW1vdGVLZXksIGNvbnRlbnQsIGNvbnRlbnRUeXBlLCBlbmNvZGluZyk7XG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIFx1MjcwNSBVcGxvYWRlZCAke2ZpbGUubmFtZX1gKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDIG1hcmtkb3duIFx1NURGMlx1NTNEMVx1NUUwM1x1RkYwQ1x1NjNEMFx1NTNENlx1NUU3Nlx1NEUwQVx1NEYyMFx1NTZGRVx1NzI0N1xuICAgICAgaWYgKGlzTWFya2Rvd24gJiYgaXNQdWJsaXNoZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBFeHRyYWN0aW5nIGltYWdlcyBmcm9tICR7ZmlsZS5uYW1lfWApO1xuICAgICAgICBhd2FpdCB0aGlzLmV4dHJhY3RBbmRVcGxvYWRJbWFnZXMoY29udGVudCwgZmlsZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihgW1N5bmNdIFx1Mjc0QyBGYWlsZWQgdG8gc3luYyAke2ZpbGUubmFtZX06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzeW5jRmlsZUZyb21SZW1vdGUocmVtb3RlRmlsZTogeyBrZXk6IHN0cmluZyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRvd25sb2FkRmlsZShyZW1vdGVGaWxlLmtleSk7XG4gICAgICBjb25zdCBsb2NhbFBhdGggPSBkYXRhLmtleTtcblxuICAgICAgY29uc3QgZXhpc3RpbmdGaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGxvY2FsUGF0aCk7XG4gICAgICBjb25zdCBpc01hcmtkb3duID0gbG9jYWxQYXRoLmVuZHNXaXRoKCcubWQnKTtcblxuICAgICAgaWYgKGV4aXN0aW5nRmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgIGlmIChpc01hcmtkb3duIHx8IGRhdGEuZW5jb2RpbmcgPT09ICd1dGYtOCcpIHtcbiAgICAgICAgICAvLyBcdTY1ODdcdTY3MkNcdTY1ODdcdTRFRjZcdTc2RjRcdTYzQTVcdTZCRDRcdThGODNcbiAgICAgICAgICBjb25zdCBsb2NhbENvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGV4aXN0aW5nRmlsZSk7XG4gICAgICAgICAgaWYgKGxvY2FsQ29udGVudCAhPT0gZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZXhpc3RpbmdGaWxlLCBkYXRhLmNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gVXBkYXRlZCAke2xvY2FsUGF0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gXHU0RThDXHU4RkRCXHU1MjM2XHU2NTg3XHU0RUY2XHU2QkQ0XHU4RjgzXHU1OTI3XHU1QzBGXG4gICAgICAgICAgaWYgKGV4aXN0aW5nRmlsZS5zdGF0LnNpemUgIT09IGRhdGEuc2l6ZSkge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5iYXNlNjRUb0FycmF5QnVmZmVyKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnlCaW5hcnkoZXhpc3RpbmdGaWxlLCBidWZmZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gVXBkYXRlZCAke2xvY2FsUGF0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFx1NjU4N1x1NEVGNlx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwQ1x1NTIxQlx1NUVGQVxuICAgICAgICBjb25zdCBmb2xkZXJQYXRoID0gbG9jYWxQYXRoLnN1YnN0cmluZygwLCBsb2NhbFBhdGgubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgIGlmIChmb2xkZXJQYXRoKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlclBhdGgpLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc01hcmtkb3duIHx8IGRhdGEuZW5jb2RpbmcgPT09ICd1dGYtOCcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUobG9jYWxQYXRoLCBkYXRhLmNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuYmFzZTY0VG9BcnJheUJ1ZmZlcihkYXRhLmNvbnRlbnQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUJpbmFyeShsb2NhbFBhdGgsIGJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gQ3JlYXRlZCAke2xvY2FsUGF0aH1gKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbRG93bmxvYWRdIEZhaWxlZCB0byBzeW5jICR7cmVtb3RlRmlsZS5rZXl9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0OiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XG4gICAgY29uc3QgYmluYXJ5ID0gYXRvYihiYXNlNjQpO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYmluYXJ5Lmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5hcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ5dGVzW2ldID0gYmluYXJ5LmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcy5idWZmZXI7XG4gIH1cblxuICBhc3luYyBzeW5jVG9SZW1vdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbmV3IE5vdGljZSgnU3luY2luZyB2YXVsdCB0byBDbG91ZGZsYXJlLi4uJyk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpO1xuICAgICAgbGV0IHN5bmNlZCA9IDA7XG4gICAgICBsZXQgc2tpcHBlZCA9IDA7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gRm91bmQgJHtmaWxlcy5sZW5ndGh9IGZpbGVzIGluIHZhdWx0YCk7XG5cbiAgICAgIC8vIFRlc3QgQVBJIGNvbm5lY3Rpb24gZmlyc3RcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBpKCcvYXBpL2Jsb2cvc2l0ZScpO1xuICAgICAgICBjb25zb2xlLmxvZygnW1N5bmNdIFx1MjcwNSBBUEkgY29ubmVjdGlvbiB0ZXN0IHBhc3NlZCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbU3luY10gXHUyNzRDIEFQSSBjb25uZWN0aW9uIHRlc3QgZmFpbGVkOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBuZXcgTm90aWNlKGBDb25uZWN0aW9uIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkU3luY0ZpbGUoZmlsZS5wYXRoKSkge1xuICAgICAgICAgIHNraXBwZWQrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICAgIHN5bmNlZCsrO1xuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW1N5bmNdIFx1Mjc0QyBGYWlsZWQgdG8gc3luYyAke2ZpbGUucGF0aH06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBEb25lOiAke3N5bmNlZH0gc3luY2VkLCAke3NraXBwZWR9IHNraXBwZWRgKTtcbiAgICAgIG5ldyBOb3RpY2UoYFN5bmNlZCAke3N5bmNlZH0vJHtmaWxlcy5sZW5ndGh9IGZpbGVzICgke3NraXBwZWR9IHNraXBwZWQpYCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1N5bmNdIEZhaWxlZCB0byBzeW5jOicsIGVycm9yKTtcbiAgICAgIG5ldyBOb3RpY2UoYFN5bmMgZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3luY0Zyb21SZW1vdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbmV3IE5vdGljZSgnRG93bmxvYWRpbmcgZnJvbSBDbG91ZGZsYXJlLi4uJyk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ1tEb3dubG9hZF0gTGlzdGluZyByZW1vdGUgZmlsZXMuLi4nKTtcbiAgICAgIGNvbnN0IHJlbW90ZUZpbGVzID0gYXdhaXQgdGhpcy5saXN0RmlsZXMoJycpO1xuICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gRm91bmQgJHtyZW1vdGVGaWxlcy5sZW5ndGh9IHJlbW90ZSBmaWxlc2ApO1xuXG4gICAgICBsZXQgc3luY2VkID0gMDtcblxuICAgICAgZm9yIChjb25zdCByZW1vdGVGaWxlIG9mIHJlbW90ZUZpbGVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbRG93bmxvYWRdIFByb2Nlc3Npbmc6ICR7cmVtb3RlRmlsZS5rZXl9YCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5zeW5jRmlsZUZyb21SZW1vdGUocmVtb3RlRmlsZSk7XG4gICAgICAgICAgc3luY2VkKys7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbRG93bmxvYWRdIEZhaWxlZCB0byBzeW5jICR7cmVtb3RlRmlsZS5rZXl9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbRG93bmxvYWRdIERvbmU6ICR7c3luY2VkfSBmaWxlcyBwcm9jZXNzZWRgKTtcbiAgICAgIG5ldyBOb3RpY2UoYERvd25sb2FkZWQgJHtzeW5jZWR9IGZpbGVzIGZyb20gQ2xvdWRmbGFyZWApO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tEb3dubG9hZF0gRmFpbGVkOicsIGVycm9yKTtcbiAgICAgIG5ldyBOb3RpY2UoYERvd25sb2FkIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN5bmNDdXJyZW50RmlsZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUpIHtcbiAgICAgIG5ldyBOb3RpY2UoJ05vIGFjdGl2ZSBmaWxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5zeW5jRmlsZVRvUmVtb3RlKGFjdGl2ZUZpbGUpO1xuICAgIG5ldyBOb3RpY2UoYFN5bmNlZCAke2FjdGl2ZUZpbGUubmFtZX0gdG8gQ2xvdWRmbGFyZWApO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBcdTU2RkVcdTcyNDdcdTU5MDRcdTc0MDYgPT09PT09PT09PVxuXG4gIGFzeW5jIGV4dHJhY3RBbmRVcGxvYWRJbWFnZXMoY29udGVudDogc3RyaW5nLCBmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGltYWdlUmVnZXggPSAvIVxcWy4qP1xcXVxcKCguKj8pXFwpL2c7XG4gICAgbGV0IG1hdGNoO1xuXG4gICAgd2hpbGUgKChtYXRjaCA9IGltYWdlUmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlUGF0aCA9IG1hdGNoWzFdO1xuXG4gICAgICBpZiAoaW1hZ2VQYXRoLnN0YXJ0c1dpdGgoJy4vJykgfHwgIWltYWdlUGF0aC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgY29uc3QgZm9sZGVyID0gZmlsZS5wYXJlbnQ/LnBhdGggfHwgJyc7XG4gICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gbm9ybWFsaXplUGF0aChgJHtmb2xkZXJ9LyR7aW1hZ2VQYXRofWApO1xuICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZnVsbFBhdGgpO1xuXG4gICAgICAgIGlmIChpbWFnZUZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgIGNvbnN0IGltYWdlQnVmZmVyID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZEJpbmFyeShpbWFnZUZpbGUpO1xuICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IHRoaXMuYXJyYXlCdWZmZXJUb0Jhc2U2NChpbWFnZUJ1ZmZlcik7XG4gICAgICAgICAgY29uc3QgZXh0ID0gaW1hZ2VGaWxlLmV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgbGV0IGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgICAgICAgaWYgKFsnanBnJywgJ2pwZWcnXS5pbmNsdWRlcyhleHQpKSBjb250ZW50VHlwZSA9IGBpbWFnZS9qcGVnYDtcbiAgICAgICAgICBlbHNlIGlmIChleHQgPT09ICdwbmcnKSBjb250ZW50VHlwZSA9ICdpbWFnZS9wbmcnO1xuICAgICAgICAgIGVsc2UgaWYgKGV4dCA9PT0gJ2dpZicpIGNvbnRlbnRUeXBlID0gJ2ltYWdlL2dpZic7XG4gICAgICAgICAgZWxzZSBpZiAoZXh0ID09PSAnd2VicCcpIGNvbnRlbnRUeXBlID0gJ2ltYWdlL3dlYnAnO1xuICAgICAgICAgIGVsc2UgaWYgKGV4dCA9PT0gJ3N2ZycpIGNvbnRlbnRUeXBlID0gJ2ltYWdlL3N2Zyt4bWwnO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy5hcGkoJy9hcGkvc3luYy91cGxvYWQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAga2V5OiBgaW1hZ2VzLyR7aW1hZ2VGaWxlLm5hbWV9YCxcbiAgICAgICAgICAgICAgY29udGVudDogYmFzZTY0LFxuICAgICAgICAgICAgICBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgZW5jb2Rpbmc6ICdiYXNlNjQnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBsZXQgYmluYXJ5ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ0b2EoYmluYXJ5KTtcbiAgfVxuXG4gIG9udW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdDbG91ZGZsYXJlIFN5bmMgcGx1Z2luIHVubG9hZGluZy4uLicpO1xuICAgIHRoaXMuc3luY0VuZ2luZT8uZGVzdHJveSgpO1xuICAgIHRoaXMuc3RhdHVzQmFyPy5kZXN0cm95KCk7XG4gICAgY29uc29sZS5sb2coJ0Nsb3VkZmxhcmUgU3luYyBwbHVnaW4gdW5sb2FkZWQnKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCBDbG91ZGZsYXJlU3luY1BsdWdpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHR5cGUgeyBDb25mbGljdFN0cmF0ZWd5IH0gZnJvbSAnLi9zeW5jLWVuZ2luZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmbGFyZVN5bmNTZXR0aW5ncyB7XG4gIHNlcnZlclVybDogc3RyaW5nO1xuICBhcGlUb2tlbjogc3RyaW5nO1xuICBhdXRvU3luYzogYm9vbGVhbjtcbiAgYXV0b0Zyb250bWF0dGVyOiBib29sZWFuO1xuICBzeW5jQWxsRmlsZXM6IGJvb2xlYW47XG4gIGV4Y2x1ZGVGb2xkZXJzOiBzdHJpbmdbXTtcbiAgYXV0b1N5bmNJbnRlcnZhbDogbnVtYmVyOyAgICAgICAvLyBcdTgxRUFcdTUyQThcdTU0MENcdTZCNjVcdTk1RjRcdTk2OTRcdUZGMDhcdTUyMDZcdTk0OUZcdUZGMDlcbiAgY29uZmxpY3RTdHJhdGVneTogQ29uZmxpY3RTdHJhdGVneTsgLy8gXHU1MUIyXHU3QTgxXHU4OUUzXHU1MUIzXHU3QjU2XHU3NTY1XG4gIHN5bmNPblN0YXJ0dXA6IGJvb2xlYW47ICAgICAgICAgLy8gXHU1NDJGXHU1MkE4XHU2NUY2XHU1NDBDXHU2QjY1XG4gIGRlYm91bmNlRGVsYXk6IG51bWJlcjsgICAgICAgICAgLy8gXHU2NTg3XHU0RUY2XHU0RkVFXHU2NTM5XHU1NDBFXHU1RUY2XHU4RkRGXHU1NDBDXHU2QjY1XHVGRjA4XHU3OUQyXHVGRjA5XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZsYXJlU3luY1NldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnQ2xvdWRmbGFyZSBTeW5jJyB9KTtcblxuICAgIC8vID09PT09IENvbm5lY3Rpb24gPT09PT1cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdDb25uZWN0aW9uJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ1NlcnZlciBVUkwnKVxuICAgICAgLnNldERlc2MoJ1lvdXIgQ2xvdWRmbGFyZSBXb3JrZXJzIFVSTCAoZS5nLiwgaHR0cHM6Ly9teXNpdGUueW91ci1hY2NvdW50LndvcmtlcnMuZGV2KScpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignaHR0cHM6Ly9teXNpdGUueW91ci1hY2NvdW50LndvcmtlcnMuZGV2JylcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNlcnZlclVybCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdBUEkgVG9rZW4nKVxuICAgICAgLnNldERlc2MoJ1lvdXIgQVBJIHRva2VuIGZvciBhdXRoZW50aWNhdGlvbicpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0LmlucHV0RWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdFbnRlciB5b3VyIEFQSSB0b2tlbicpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFwaVRva2VuKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFwaVRva2VuID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gPT09PT0gU3luYyBTZXR0aW5ncyA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1N5bmMgU2V0dGluZ3MnIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQXV0byBTeW5jJylcbiAgICAgIC5zZXREZXNjKCdBdXRvbWF0aWNhbGx5IHN5bmMgZmlsZXMgd2hlbiB0aGV5IGFyZSBtb2RpZmllZCAod2l0aCBkZWJvdW5jZSknKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQXV0byBTeW5jIEludGVydmFsJylcbiAgICAgIC5zZXREZXNjKCdIb3cgb2Z0ZW4gdG8gcnVuIGEgZnVsbCBzeW5jIChpbiBtaW51dGVzKS4gU2V0IHRvIDAgdG8gZGlzYWJsZSBwZXJpb2RpYyBzeW5jLicpXG4gICAgICAuYWRkU2xpZGVyKChzbGlkZXIpID0+XG4gICAgICAgIHNsaWRlclxuICAgICAgICAgIC5zZXRMaW1pdHMoMCwgNjAsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9TeW5jSW50ZXJ2YWwpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvU3luY0ludGVydmFsID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0RlYm91bmNlIERlbGF5JylcbiAgICAgIC5zZXREZXNjKCdTZWNvbmRzIHRvIHdhaXQgYWZ0ZXIgYSBmaWxlIGNoYW5nZSBiZWZvcmUgc3luY2luZyAocHJldmVudHMgZXhjZXNzaXZlIHVwbG9hZHMgd2hpbGUgdHlwaW5nKScpXG4gICAgICAuYWRkU2xpZGVyKChzbGlkZXIpID0+XG4gICAgICAgIHNsaWRlclxuICAgICAgICAgIC5zZXRMaW1pdHMoNSwgMTIwLCA1KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZWJvdW5jZURlbGF5KVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGVib3VuY2VEZWxheSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdTeW5jIG9uIFN0YXJ0dXAnKVxuICAgICAgLnNldERlc2MoJ0F1dG9tYXRpY2FsbHkgcnVuIGEgZnVsbCBzeW5jIHdoZW4gT2JzaWRpYW4gc3RhcnRzJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN5bmNPblN0YXJ0dXApXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3luY09uU3RhcnR1cCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyA9PT09PSBDb25mbGljdCBSZXNvbHV0aW9uID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnQ29uZmxpY3QgUmVzb2x1dGlvbicgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdDb25mbGljdCBTdHJhdGVneScpXG4gICAgICAuc2V0RGVzYygnSG93IHRvIGhhbmRsZSBjb25mbGljdHMgd2hlbiBib3RoIGxvY2FsIGFuZCByZW1vdGUgaGF2ZSBjaGFuZ2VkJylcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbignYXNrJywgJ0FzayBtZSBldmVyeSB0aW1lJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCdsb2NhbC13aW5zJywgJ0xvY2FsIGFsd2F5cyB3aW5zJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCdyZW1vdGUtd2lucycsICdSZW1vdGUgYWx3YXlzIHdpbnMnKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb25mbGljdFN0cmF0ZWd5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29uZmxpY3RTdHJhdGVneSA9IHZhbHVlIGFzIENvbmZsaWN0U3RyYXRlZ3k7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vID09PT09IENvbnRlbnQgU2V0dGluZ3MgPT09PT1cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdDb250ZW50IFNldHRpbmdzJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0F1dG8gRnJvbnRtYXR0ZXInKVxuICAgICAgLnNldERlc2MoJ0F1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgZnJvbnRtYXR0ZXIgZm9yIG5ldyBtYXJrZG93biBmaWxlcycpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvRnJvbnRtYXR0ZXIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ1N5bmMgQWxsIEZpbGVzJylcbiAgICAgIC5zZXREZXNjKCdTeW5jIGFsbCBmaWxlcyBpbiB0aGUgdmF1bHQgKG5vdCBqdXN0IG1hcmtkb3duKScpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeW5jQWxsRmlsZXMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3luY0FsbEZpbGVzID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0V4Y2x1ZGUgRm9sZGVycycpXG4gICAgICAuc2V0RGVzYygnQ29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZm9sZGVycyB0byBleGNsdWRlIGZyb20gc3luYycpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignX3RlbXBsYXRlcywgLnRyYXNoJylcbiAgICAgICAgICAuc2V0VmFsdWUoKHRoaXMucGx1Z2luLnNldHRpbmdzLmV4Y2x1ZGVGb2xkZXJzIHx8IFtdKS5qb2luKCcsICcpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmV4Y2x1ZGVGb2xkZXJzID0gdmFsdWVcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLm1hcCgocykgPT4gcy50cmltKCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vID09PT09IEluc3RydWN0aW9ucyA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0luc3RydWN0aW9ucycgfSk7XG5cbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBjb250YWluZXJFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdtYXJrZG93bi1wcmV2aWV3LXZpZXcnIH0pO1xuICAgIGluc3RydWN0aW9ucy5pbm5lckhUTUwgPSBgXG4gICAgICA8aDQ+U2VydmVyIFNldHVwOjwvaDQ+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5EZXBsb3kgdGhlIENsb3VkZmxhcmUgV29ya2VycyBzaXRlPC9saT5cbiAgICAgICAgPGxpPlNldCA8Y29kZT5BUElfVE9LRU48L2NvZGU+IHNlY3JldDogPGNvZGU+bnB4IHdyYW5nbGVyIHNlY3JldCBwdXQgQVBJX1RPS0VOPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT5Db3B5IHRoZSBXb3JrZXJzIFVSTCBhbmQgdG9rZW4gdG8gc2V0dGluZ3MgYWJvdmU8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxoND5TeW5jIEJlaGF2aW9yOjwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48c3Ryb25nPkF1dG8gU3luYzwvc3Ryb25nPiBcdTIwMTQgRmlsZXMgc3luYyBhZnRlciBhIGRlYm91bmNlIGRlbGF5IHdoZW4gbW9kaWZpZWQ8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5QZXJpb2RpYyBTeW5jPC9zdHJvbmc+IFx1MjAxNCBGdWxsIHN5bmMgcnVucyBhdCB0aGUgY29uZmlndXJlZCBpbnRlcnZhbDwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlN0YXJ0dXAgU3luYzwvc3Ryb25nPiBcdTIwMTQgRnVsbCBzeW5jIG9uIE9ic2lkaWFuIGxhdW5jaDwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPkNvbmZsaWN0IERldGVjdGlvbjwvc3Ryb25nPiBcdTIwMTQgVGhyZWUtd2F5IGhhc2ggY29tcGFyaXNvbiBkZXRlY3RzIGNvbmZsaWN0czwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGg0PkZyb250bWF0dGVyIGZpZWxkczo8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PGNvZGU+dGl0bGU8L2NvZGU+IC0gUG9zdCB0aXRsZTwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5zbHVnPC9jb2RlPiAtIFVSTC1mcmllbmRseSBpZGVudGlmaWVyPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmRhdGU8L2NvZGU+IC0gUHVibGljYXRpb24gZGF0ZSAoSVNPIGZvcm1hdCk8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+c3VtbWFyeTwvY29kZT4gLSBQb3N0IHN1bW1hcnkvZXhjZXJwdDwvbGk+XG4gICAgICAgIDxsaT48Y29kZT50YWdzPC9jb2RlPiAtIEFycmF5IG9yIGNvbW1hLXNlcGFyYXRlZCB0YWdzPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnB1Ymxpc2g8L2NvZGU+IC0gV2hldGhlciB0byBtYWtlIHB1YmxpYyAoZGVmYXVsdDogZmFsc2UpPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmNvdmVySW1hZ2U8L2NvZGU+IC0gQ292ZXIgaW1hZ2UgZmlsZW5hbWU8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoND5Db21tYW5kczo8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PHN0cm9uZz5GdWxsIFN5bmM8L3N0cm9uZz4gXHUyMDE0IEJpZGlyZWN0aW9uYWwgc3luYyB3aXRoIGNvbmZsaWN0IGRldGVjdGlvbjwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlN5bmMgdG8gQ2xvdWRmbGFyZTwvc3Ryb25nPiBcdTIwMTQgVXBsb2FkIGFsbCBub3RlcyAob25lLXdheSk8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5Eb3dubG9hZCBmcm9tIENsb3VkZmxhcmU8L3N0cm9uZz4gXHUyMDE0IERvd25sb2FkIGFsbCBub3RlcyAob25lLXdheSk8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5TeW5jIGN1cnJlbnQgZmlsZTwvc3Ryb25nPiBcdTIwMTQgVXBsb2FkIGN1cnJlbnQgZmlsZTwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlJlc29sdmUgY29uZmxpY3RzPC9zdHJvbmc+IFx1MjAxNCBPcGVuIGNvbmZsaWN0IHJlc29sdXRpb24gZGlhbG9nPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+U2hvdyBzeW5jIHN0YXR1czwvc3Ryb25nPiBcdTIwMTQgVmlldyBzeW5jIHN0YXRpc3RpY3M8L2xpPlxuICAgICAgPC91bD5cbiAgICBgO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgVEZpbGUsIFZhdWx0LCBub3JtYWxpemVQYXRoIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHR5cGUgQ2xvdWRmbGFyZVN5bmNQbHVnaW4gZnJvbSAnLi9tYWluJztcblxuLy8gPT09PT09PT09PSBUeXBlcyA9PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFN5bmNGaWxlU3RhdHVzID1cbiAgfCAnc3luY2VkJyAgICAgICAvLyBcdTY3MkNcdTU3MzBcdTU0OENcdThGRENcdTdBMEJcdTRFMDBcdTgxRjRcbiAgfCAnbG9jYWwtb25seScgICAvLyBcdTRFQzVcdTY3MkNcdTU3MzBcdTVCNThcdTU3MjhcbiAgfCAncmVtb3RlLW9ubHknICAvLyBcdTRFQzVcdThGRENcdTdBMEJcdTVCNThcdTU3MjhcbiAgfCAnbG9jYWwtbW9kaWZpZWQnICAvLyBcdTY3MkNcdTU3MzBcdTY3MDlcdTRGRUVcdTY1MzlcbiAgfCAncmVtb3RlLW1vZGlmaWVkJyAvLyBcdThGRENcdTdBMEJcdTY3MDlcdTRGRUVcdTY1MzlcbiAgfCAnY29uZmxpY3QnICAgICAvLyBcdTUzQ0NcdTY1QjlcdTkwRkRcdTY3MDlcdTRGRUVcdTY1MzlcbiAgfCAnZXJyb3InOyAgICAgICAvLyBcdTU0MENcdTZCNjVcdTUxRkFcdTk1MTlcblxuZXhwb3J0IGludGVyZmFjZSBTeW5jRmlsZVN0YXRlIHtcbiAgbG9jYWxQYXRoOiBzdHJpbmc7XG4gIHJlbW90ZUtleTogc3RyaW5nO1xuICBsb2NhbEhhc2g6IHN0cmluZyB8IG51bGw7XG4gIHJlbW90ZUhhc2g6IHN0cmluZyB8IG51bGw7XG4gIGxhc3RTeW5jZWRIYXNoOiBzdHJpbmcgfCBudWxsO1xuICBzdGF0dXM6IFN5bmNGaWxlU3RhdHVzO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTeW5jU3RhdHMge1xuICBsYXN0U3luY1RpbWU6IG51bWJlciB8IG51bGw7XG4gIHRvdGFsRmlsZXM6IG51bWJlcjtcbiAgc3luY2VkRmlsZXM6IG51bWJlcjtcbiAgcGVuZGluZ1VwbG9hZDogbnVtYmVyO1xuICBwZW5kaW5nRG93bmxvYWQ6IG51bWJlcjtcbiAgY29uZmxpY3RzOiBudW1iZXI7XG4gIGVycm9yczogbnVtYmVyO1xuICBpc1N5bmNpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3RlRmlsZU1ldGEge1xuICBrZXk6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICB1cGxvYWRlZD86IHN0cmluZztcbiAgaHR0cEV0YWc/OiBzdHJpbmc7XG4gIGNvbnRlbnRIYXNoPzogc3RyaW5nO1xuICBjb250ZW50VHlwZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN5bmNTdGF0ZVN0b3JlIHtcbiAgW2xvY2FsUGF0aDogc3RyaW5nXToge1xuICAgIHJlbW90ZUtleTogc3RyaW5nO1xuICAgIGxhc3RTeW5jZWRIYXNoOiBzdHJpbmc7XG4gICAgbGFzdFN5bmNlZFRpbWU6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgQ29uZmxpY3RSZXNvbHV0aW9uID0gJ2xvY2FsJyB8ICdyZW1vdGUnIHwgJ2JvdGgnO1xuZXhwb3J0IHR5cGUgQ29uZmxpY3RTdHJhdGVneSA9ICdhc2snIHwgJ2xvY2FsLXdpbnMnIHwgJ3JlbW90ZS13aW5zJztcblxuZXhwb3J0IGludGVyZmFjZSBDb25mbGljdEluZm8ge1xuICBsb2NhbFBhdGg6IHN0cmluZztcbiAgcmVtb3RlS2V5OiBzdHJpbmc7XG4gIGxvY2FsQ29udGVudDogc3RyaW5nO1xuICByZW1vdGVDb250ZW50OiBzdHJpbmc7XG4gIGxvY2FsSGFzaDogc3RyaW5nO1xuICByZW1vdGVIYXNoOiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT0gU3luY0VuZ2luZSA9PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBTeW5jRW5naW5lIHtcbiAgcHJpdmF0ZSBwbHVnaW46IENsb3VkZmxhcmVTeW5jUGx1Z2luO1xuICBwcml2YXRlIHN5bmNTdGF0ZXM6IFN5bmNTdGF0ZVN0b3JlID0ge307XG4gIHByaXZhdGUgYXV0b1N5bmNUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVib3VuY2VUaW1lcnM6IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+PiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBfc3RhdHM6IFN5bmNTdGF0cyA9IHtcbiAgICBsYXN0U3luY1RpbWU6IG51bGwsXG4gICAgdG90YWxGaWxlczogMCxcbiAgICBzeW5jZWRGaWxlczogMCxcbiAgICBwZW5kaW5nVXBsb2FkOiAwLFxuICAgIHBlbmRpbmdEb3dubG9hZDogMCxcbiAgICBjb25mbGljdHM6IDAsXG4gICAgZXJyb3JzOiAwLFxuICAgIGlzU3luY2luZzogZmFsc2UsXG4gIH07XG4gIHByaXZhdGUgX2NvbmZsaWN0czogQ29uZmxpY3RJbmZvW10gPSBbXTtcbiAgcHJpdmF0ZSBfaXNTeW5jaW5nID0gZmFsc2U7XG5cbiAgLy8gQ2FsbGJhY2tzXG4gIG9uU3RhdHNDaGFuZ2VkOiAoKHN0YXRzOiBTeW5jU3RhdHMpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gIG9uQ29uZmxpY3RzRm91bmQ6ICgoY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgb25TeW5jRXJyb3I6ICgoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgb25TeW5jQ29tcGxldGU6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHBsdWdpbjogQ2xvdWRmbGFyZVN5bmNQbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldCBzdGF0cygpOiBTeW5jU3RhdHMge1xuICAgIHJldHVybiB7IC4uLnRoaXMuX3N0YXRzIH07XG4gIH1cblxuICBnZXQgY29uZmxpY3RzKCk6IENvbmZsaWN0SW5mb1tdIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NvbmZsaWN0c107XG4gIH1cblxuICBnZXQgaXNTeW5jaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1N5bmNpbmc7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFN0YXRlIFBlcnNpc3RlbmNlID09PT09PT09PT1cblxuICBhc3luYyBsb2FkU3luY1N0YXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnBsdWdpbi5sb2FkRGF0YSgpO1xuICAgIHRoaXMuc3luY1N0YXRlcyA9IGRhdGE/Ll9zeW5jU3RhdGVzIHx8IHt9O1xuICB9XG5cbiAgYXN5bmMgc2F2ZVN5bmNTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhID0gKGF3YWl0IHRoaXMucGx1Z2luLmxvYWREYXRhKCkpIHx8IHt9O1xuICAgIGRhdGEuX3N5bmNTdGF0ZXMgPSB0aGlzLnN5bmNTdGF0ZXM7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZURhdGEoZGF0YSk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IEhhc2ggQ29tcHV0YXRpb24gPT09PT09PT09PVxuXG4gIGFzeW5jIGNvbXB1dGVMb2NhbEhhc2goY29udGVudDogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIC8vIFx1NEY3Rlx1NzUyOFx1N0I4MFx1NTM1NVx1NzY4NFx1NTRDOFx1NUUwQ1x1N0I5N1x1NkNENVx1RkYwOFx1OTAwMlx1NzUyOFx1NEU4RSBPYnNpZGlhbiBcdTczQUZcdTU4ODNcdUZGMDlcbiAgICBjb25zdCBkYXRhID1cbiAgICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShjb250ZW50KVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KGNvbnRlbnQpO1xuXG4gICAgLy8gXHU0RjdGXHU3NTI4IFdlYiBDcnlwdG8gQVBJXHVGRjA4XHU2MjQwXHU2NzA5IE9ic2lkaWFuIFx1NUU3M1x1NTNGMFx1OTBGRFx1NjUyRlx1NjMwMVx1RkYwOVxuICAgIGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdCgnU0hBLTI1NicsIGRhdGEpO1xuICAgIGNvbnN0IGhhc2hBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpO1xuICAgIHJldHVybiBoYXNoQXJyYXkubWFwKChiKSA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gQXV0byBTeW5jIFNjaGVkdWxpbmcgPT09PT09PT09PVxuXG4gIHN0YXJ0QXV0b1N5bmMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wQXV0b1N5bmMoKTtcblxuICAgIGNvbnN0IGludGVydmFsTXMgPSAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmNJbnRlcnZhbCB8fCA1KSAqIDYwICogMTAwMDtcbiAgICBjb25zb2xlLmxvZyhgW1N5bmNFbmdpbmVdIEF1dG8gc3luYyBzdGFydGVkLCBpbnRlcnZhbDogJHtpbnRlcnZhbE1zIC8gMTAwMH1zYCk7XG5cbiAgICB0aGlzLmF1dG9TeW5jVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2lzU3luY2luZykge1xuICAgICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIEF1dG8gc3luYyB0cmlnZ2VyZWQnKTtcbiAgICAgICAgdGhpcy5mdWxsU3luYygpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdbU3luY0VuZ2luZV0gQXV0byBzeW5jIGZhaWxlZDonLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBpbnRlcnZhbE1zKTtcbiAgfVxuXG4gIHN0b3BBdXRvU3luYygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvU3luY1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1N5bmNUaW1lcik7XG4gICAgICB0aGlzLmF1dG9TeW5jVGltZXIgPSBudWxsO1xuICAgICAgY29uc29sZS5sb2coJ1tTeW5jRW5naW5lXSBBdXRvIHN5bmMgc3RvcHBlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gRGVib3VuY2VkIEZpbGUgU3luYyA9PT09PT09PT09XG5cbiAgc2NoZWR1bGVGaWxlU3luYyhmaWxlOiBURmlsZSk6IHZvaWQge1xuICAgIGNvbnN0IGV4aXN0aW5nVGltZXIgPSB0aGlzLmRlYm91bmNlVGltZXJzLmdldChmaWxlLnBhdGgpO1xuICAgIGlmIChleGlzdGluZ1RpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZXhpc3RpbmdUaW1lcik7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXlNcyA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZWJvdW5jZURlbGF5IHx8IDMwKSAqIDEwMDA7XG5cbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5kZWJvdW5jZVRpbWVycy5kZWxldGUoZmlsZS5wYXRoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1NpbmdsZUZpbGUoZmlsZSk7XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gRGVib3VuY2VkIHN5bmMgZmFpbGVkIGZvciAke2ZpbGUucGF0aH06YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5TXMpO1xuXG4gICAgdGhpcy5kZWJvdW5jZVRpbWVycy5zZXQoZmlsZS5wYXRoLCB0aW1lcik7XG4gICAgdGhpcy51cGRhdGVQZW5kaW5nU3RhdHMoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gQ29yZSBTeW5jIExvZ2ljID09PT09PT09PT1cblxuICBhc3luYyBmdWxsU3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5faXNTeW5jaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIFN5bmMgYWxyZWFkeSBpbiBwcm9ncmVzcywgc2tpcHBpbmcnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1N5bmNpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3N0YXRzLmlzU3luY2luZyA9IHRydWU7XG4gICAgdGhpcy5fY29uZmxpY3RzID0gW107XG4gICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ1tTeW5jRW5naW5lXSBTdGFydGluZyBmdWxsIHN5bmMuLi4nKTtcblxuICAgICAgLy8gMS4gXHU4M0I3XHU1M0Q2XHU2NzJDXHU1NzMwXHU2MjQwXHU2NzA5XHU2NTg3XHU0RUY2XHU1M0NBXHU1MTc2IGhhc2hcbiAgICAgIGNvbnN0IGxvY2FsRmlsZXMgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoXG4gICAgICAgIChmKSA9PiB0aGlzLnBsdWdpbi5zaG91bGRTeW5jRmlsZShmLnBhdGgpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2NhbEZpbGVNYXAgPSBuZXcgTWFwPHN0cmluZywgeyBmaWxlOiBURmlsZTsgaGFzaDogc3RyaW5nIH0+KCk7XG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbG9jYWxGaWxlcykge1xuICAgICAgICBjb25zdCByZW1vdGVLZXkgPSB0aGlzLnBsdWdpbi5nZXRSZW1vdGVLZXkoZmlsZSk7XG4gICAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpO1xuICAgICAgICAvLyBcdTVCRjkgdGV4dCBcdTY1ODdcdTRFRjYgaGFzaCBcdTVCNTdcdTdCMjZcdTRFMzJcdUZGMENcdTVCRjlcdTRFOENcdThGREJcdTUyMzZcdTY1ODdcdTRFRjYgaGFzaCBcdTUzOUZcdTU5Q0IgQXJyYXlCdWZmZXJcdUZGMDhcdTRFMEVcdTY3MERcdTUyQTFcdTdBRUZcdTRFMDBcdTgxRjRcdUZGMDlcbiAgICAgICAgY29uc3QgY29udGVudDogc3RyaW5nIHwgQXJyYXlCdWZmZXIgPSBpc01hcmtkb3duXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZChmaWxlKVxuICAgICAgICAgIDogYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWRCaW5hcnkoZmlsZSk7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCB0aGlzLmNvbXB1dGVMb2NhbEhhc2goY29udGVudCk7XG4gICAgICAgIGxvY2FsRmlsZU1hcC5zZXQocmVtb3RlS2V5LCB7IGZpbGUsIGhhc2ggfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIFx1NjI3OVx1OTFDRlx1ODNCN1x1NTNENlx1OEZEQ1x1N0EwQlx1NjU4N1x1NEVGNlx1NTE0M1x1NjU3MFx1NjM2RVxuICAgICAgY29uc3QgcmVtb3RlTWV0YXMgPSBhd2FpdCB0aGlzLmZldGNoUmVtb3RlTWV0YXMoJycpO1xuICAgICAgY29uc3QgcmVtb3RlTWV0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSZW1vdGVGaWxlTWV0YT4oKTtcbiAgICAgIGZvciAoY29uc3QgbWV0YSBvZiByZW1vdGVNZXRhcykge1xuICAgICAgICByZW1vdGVNZXRhTWFwLnNldChtZXRhLmtleSwgbWV0YSk7XG4gICAgICB9XG5cbiAgICAgIC8vIDMuIFx1NEUwOVx1NjVCOVx1NkJENFx1NUJGOVxuICAgICAgY29uc3QgYWxsS2V5cyA9IG5ldyBTZXQoWy4uLmxvY2FsRmlsZU1hcC5rZXlzKCksIC4uLnJlbW90ZU1ldGFNYXAua2V5cygpXSk7XG4gICAgICBjb25zdCB0b1VwbG9hZDogeyBmaWxlOiBURmlsZTsga2V5OiBzdHJpbmc7IGhhc2g6IHN0cmluZyB9W10gPSBbXTtcbiAgICAgIGNvbnN0IHRvRG93bmxvYWQ6IHsga2V5OiBzdHJpbmcgfVtdID0gW107XG4gICAgICBjb25zdCBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdID0gW107XG4gICAgICBsZXQgc3luY2VkQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBhbGxLZXlzKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxGaWxlTWFwLmdldChrZXkpO1xuICAgICAgICBjb25zdCByZW1vdGUgPSByZW1vdGVNZXRhTWFwLmdldChrZXkpO1xuICAgICAgICBjb25zdCBsb2NhbFBhdGggPSBrZXk7XG4gICAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXTtcblxuICAgICAgICBjb25zdCBsb2NhbEhhc2ggPSBsb2NhbD8uaGFzaCB8fCBudWxsO1xuICAgICAgICBjb25zdCByZW1vdGVIYXNoID0gcmVtb3RlPy5jb250ZW50SGFzaCB8fCBudWxsO1xuICAgICAgICBjb25zdCBsYXN0U3luY2VkSGFzaCA9IHNhdmVkU3RhdGU/Lmxhc3RTeW5jZWRIYXNoIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKGxvY2FsSGFzaCAmJiAhcmVtb3RlSGFzaCkge1xuICAgICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NjcwOVx1MzAwMVx1OEZEQ1x1N0EwQlx1NkNBMVx1NjcwOVxuICAgICAgICAgIGlmIChsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RTRCXHU1MjREXHU1NDBDXHU2QjY1XHU4RkM3XHU0RjQ2XHU4RkRDXHU3QTBCXHU4OEFCXHU1MjIwXHU0RTg2IFx1MjE5MiBcdTRFMEJcdThGN0RcdTUyMjBcdTk2NjRcdUZGMDhcdTYyMTZcdThERjNcdThGQzdcdUZGMDlcbiAgICAgICAgICAgIC8vIFx1OEZEOVx1OTFDQ1x1OTAwOVx1NjJFOVx1OTFDRFx1NjVCMFx1NEUwQVx1NEYyMFxuICAgICAgICAgICAgdG9VcGxvYWQucHVzaCh7IGZpbGU6IGxvY2FsIS5maWxlLCBrZXksIGhhc2g6IGxvY2FsSGFzaCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU2NUIwXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTBBXHU0RjIwXG4gICAgICAgICAgICB0b1VwbG9hZC5wdXNoKHsgZmlsZTogbG9jYWwhLmZpbGUsIGtleSwgaGFzaDogbG9jYWxIYXNoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghbG9jYWxIYXNoICYmIHJlbW90ZUhhc2gpIHtcbiAgICAgICAgICAvLyBcdThGRENcdTdBMEJcdTY3MDlcdTMwMDFcdTY3MkNcdTU3MzBcdTZDQTFcdTY3MDlcbiAgICAgICAgICBpZiAobGFzdFN5bmNlZEhhc2gpIHtcbiAgICAgICAgICAgIC8vIFx1NEU0Qlx1NTI0RFx1NTQwQ1x1NkI2NVx1OEZDN1x1NEY0Nlx1NjcyQ1x1NTczMFx1ODhBQlx1NTIyMFx1NEU4NiBcdTIxOTIgXHU4REYzXHU4RkM3XHVGRjA4XHU2MjE2XHU5MUNEXHU2NUIwXHU0RTBCXHU4RjdEXHVGRjA5XG4gICAgICAgICAgICAvLyBcdThGRDlcdTkxQ0NcdTkwMDlcdTYyRTlcdTkxQ0RcdTY1QjBcdTRFMEJcdThGN0RcbiAgICAgICAgICAgIHRvRG93bmxvYWQucHVzaCh7IGtleSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU2NUIwXHU3Njg0XHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTBCXHU4RjdEXG4gICAgICAgICAgICB0b0Rvd25sb2FkLnB1c2goeyBrZXkgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsSGFzaCAmJiByZW1vdGVIYXNoKSB7XG4gICAgICAgICAgaWYgKGxvY2FsSGFzaCA9PT0gcmVtb3RlSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU1REYyXHU1NDBDXHU2QjY1XG4gICAgICAgICAgICBzeW5jZWRDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICAgIHJlbW90ZUtleToga2V5LFxuICAgICAgICAgICAgICBsYXN0U3luY2VkSGFzaDogbG9jYWxIYXNoLFxuICAgICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmICghbGFzdFN5bmNlZEhhc2gpIHtcbiAgICAgICAgICAgIC8vIFx1OTk5Nlx1NkIyMVx1NTQwQ1x1NkI2NVx1RkYwQ1x1OTcwMFx1ODk4MVx1NTFCMlx1N0E4MVx1NjhDMFx1NkQ0Qlx1RkYwOFx1OTBGRFx1NjYyRlx1NjVCMFx1NzY4NFx1RkYwOVxuICAgICAgICAgICAgLy8gXHU0RjE4XHU1MTQ4XHU0RjdGXHU3NTI4XHU2NzJDXHU1NzMwXHU3MjQ4XHU2NzJDXG4gICAgICAgICAgICBjb25mbGljdHMucHVzaChhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGxvY2FsIS5maWxlLCBrZXksIGxvY2FsSGFzaCwgcmVtb3RlSGFzaCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoICE9PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoID09PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RUM1XHU2NzJDXHU1NzMwXHU0RkVFXHU2NTM5XG4gICAgICAgICAgICB0b1VwbG9hZC5wdXNoKHsgZmlsZTogbG9jYWwhLmZpbGUsIGtleSwgaGFzaDogbG9jYWxIYXNoIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoID09PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoICE9PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RUM1XHU4RkRDXHU3QTBCXHU0RkVFXHU2NTM5XG4gICAgICAgICAgICB0b0Rvd25sb2FkLnB1c2goeyBrZXkgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFx1NTNDQ1x1NjVCOVx1OTBGRFx1NEZFRVx1NjUzOVx1NEU4NiBcdTIxOTIgXHU1MUIyXHU3QTgxXHVGRjAxXG4gICAgICAgICAgICBjb25mbGljdHMucHVzaChhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGxvY2FsIS5maWxlLCBrZXksIGxvY2FsSGFzaCwgcmVtb3RlSGFzaCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFtTeW5jRW5naW5lXSBBbmFseXNpczogJHt0b1VwbG9hZC5sZW5ndGh9IHVwbG9hZCwgJHt0b0Rvd25sb2FkLmxlbmd0aH0gZG93bmxvYWQsICR7Y29uZmxpY3RzLmxlbmd0aH0gY29uZmxpY3RzLCAke3N5bmNlZENvdW50fSBzeW5jZWRgXG4gICAgICApO1xuXG4gICAgICAvLyA0LiBcdTYyNjdcdTg4NENcdTRFMEFcdTRGMjBcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b1VwbG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN5bmNGaWxlVG9SZW1vdGUoaXRlbS5maWxlKTtcbiAgICAgICAgICBjb25zdCBsb2NhbFBhdGggPSBpdGVtLmtleTtcbiAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgIHJlbW90ZUtleTogaXRlbS5rZXksXG4gICAgICAgICAgICBsYXN0U3luY2VkSGFzaDogaXRlbS5oYXNoLFxuICAgICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzeW5jZWRDb3VudCsrO1xuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBVcGxvYWQgZmFpbGVkIGZvciAke2l0ZW0ua2V5fTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdHMuZXJyb3JzKys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gNS4gXHU2MjY3XHU4ODRDXHU0RTBCXHU4RjdEXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdG9Eb3dubG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRvd25sb2FkQW5kU2F2ZShpdGVtLmtleSk7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IGl0ZW0ua2V5O1xuICAgICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICAgIHJlbW90ZUtleTogaXRlbS5rZXksXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8ICcnLFxuICAgICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzeW5jZWRDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gRG93bmxvYWQgZmFpbGVkIGZvciAke2l0ZW0ua2V5fTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdHMuZXJyb3JzKys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gNi4gXHU1OTA0XHU3NDA2XHU1MUIyXHU3QTgxXG4gICAgICB0aGlzLl9jb25mbGljdHMgPSBjb25mbGljdHM7XG4gICAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZsaWN0U3RyYXRlZ3kgfHwgJ2Fzayc7XG5cbiAgICAgIGlmIChjb25mbGljdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc3RyYXRlZ3kgPT09ICdhc2snKSB7XG4gICAgICAgICAgLy8gXHU5MDFBXHU3N0U1IFVJIFx1NUM0Mlx1NUYzOVx1NTFGQVx1NTFCMlx1N0E4MVx1ODlFM1x1NTFCM1x1NUJGOVx1OEJERFx1Njg0NlxuICAgICAgICAgIHRoaXMub25Db25mbGljdHNGb3VuZD8uKGNvbmZsaWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU4OUUzXHU1MUIzXG4gICAgICAgICAgZm9yIChjb25zdCBjb25mbGljdCBvZiBjb25mbGljdHMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVzb2x2ZUNvbmZsaWN0KFxuICAgICAgICAgICAgICBjb25mbGljdCxcbiAgICAgICAgICAgICAgc3RyYXRlZ3kgPT09ICdsb2NhbC13aW5zJyA/ICdsb2NhbCcgOiAncmVtb3RlJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fY29uZmxpY3RzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gNy4gXHU2NkY0XHU2NUIwXHU3RURGXHU4QkExXG4gICAgICB0aGlzLl9zdGF0cyA9IHtcbiAgICAgICAgbGFzdFN5bmNUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB0b3RhbEZpbGVzOiBhbGxLZXlzLnNpemUsXG4gICAgICAgIHN5bmNlZEZpbGVzOiBzeW5jZWRDb3VudCxcbiAgICAgICAgcGVuZGluZ1VwbG9hZDogMCxcbiAgICAgICAgcGVuZGluZ0Rvd25sb2FkOiAwLFxuICAgICAgICBjb25mbGljdHM6IHRoaXMuX2NvbmZsaWN0cy5sZW5ndGgsXG4gICAgICAgIGVycm9yczogdGhpcy5fc3RhdHMuZXJyb3JzLFxuICAgICAgICBpc1N5bmNpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgYXdhaXQgdGhpcy5zYXZlU3luY1N0YXRlKCk7XG4gICAgICB0aGlzLm9uU3luY0NvbXBsZXRlPy4oKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1N5bmNFbmdpbmVdIEZ1bGwgc3luYyBmYWlsZWQ6JywgZXJyKTtcbiAgICAgIHRoaXMuX3N0YXRzLmVycm9ycysrO1xuICAgICAgdGhpcy5fc3RhdHMuaXNTeW5jaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm9uU3luY0Vycm9yPy4oZXJyLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9pc1N5bmNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXRzLmlzU3luY2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3luY1NpbmdsZUZpbGUoZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5faXNTeW5jaW5nKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVtb3RlS2V5ID0gdGhpcy5wbHVnaW4uZ2V0UmVtb3RlS2V5KGZpbGUpO1xuICAgICAgY29uc3QgbG9jYWxQYXRoID0gZmlsZS5wYXRoO1xuXG4gICAgICAvLyBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzAgaGFzaFx1RkYwOHRleHQgaGFzaCBcdTVCNTdcdTdCMjZcdTRFMzJcdUZGMENiaW5hcnkgaGFzaCBcdTUzOUZcdTU5Q0IgQXJyYXlCdWZmZXJcdUZGMENcdTRFMEVcdTY3MERcdTUyQTFcdTdBRUZcdTRFMDBcdTgxRjRcdUZGMDlcbiAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpO1xuICAgICAgY29uc3QgY29udGVudDogc3RyaW5nIHwgQXJyYXlCdWZmZXIgPSBpc01hcmtkb3duXG4gICAgICAgID8gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSlcbiAgICAgICAgOiBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZEJpbmFyeShmaWxlKTtcbiAgICAgIGNvbnN0IGxvY2FsSGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcblxuICAgICAgLy8gXHU4M0I3XHU1M0Q2XHU4RkRDXHU3QTBCIGhhc2hcbiAgICAgIGxldCByZW1vdGVIYXNoOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8eyBzdWNjZXNzOiBib29sZWFuOyBkYXRhOiBSZW1vdGVGaWxlTWV0YSB9PihcbiAgICAgICAgICBgL2FwaS9zeW5jL21ldGEvJHtyZW1vdGVLZXl9YFxuICAgICAgICApO1xuICAgICAgICByZW1vdGVIYXNoID0gbWV0YS5kYXRhLmNvbnRlbnRIYXNoIHx8IG51bGw7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gXHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHU0RTBEXHU1QjU4XHU1NzI4XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXTtcbiAgICAgIGNvbnN0IGxhc3RTeW5jZWRIYXNoID0gc2F2ZWRTdGF0ZT8ubGFzdFN5bmNlZEhhc2ggfHwgbnVsbDtcblxuICAgICAgaWYgKGxvY2FsSGFzaCA9PT0gcmVtb3RlSGFzaCkge1xuICAgICAgICAvLyBcdTVERjJcdTU0MENcdTZCNjVcbiAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgcmVtb3RlS2V5LFxuICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBsb2NhbEhhc2gsXG4gICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKCFyZW1vdGVIYXNoIHx8IChsb2NhbEhhc2ggIT09IGxhc3RTeW5jZWRIYXNoICYmIHJlbW90ZUhhc2ggPT09IGxhc3RTeW5jZWRIYXNoKSkge1xuICAgICAgICAvLyBcdTY3MkNcdTU3MzBcdTRGRUVcdTY1MzlcdTYyMTZcdThGRENcdTdBMEJcdTRFMERcdTVCNThcdTU3MjggXHUyMTkyIFx1NEUwQVx1NEYyMFxuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICByZW1vdGVLZXksXG4gICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGxvY2FsSGFzaCxcbiAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoID09PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoICE9PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAvLyBcdTRFQzVcdThGRENcdTdBMEJcdTRGRUVcdTY1MzkgXHUyMTkyIFx1NEUwQlx1OEY3RFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5kb3dubG9hZEFuZFNhdmUocmVtb3RlS2V5KTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgIHJlbW90ZUtleSxcbiAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8IHJlbW90ZUhhc2gsXG4gICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTUxQjJcdTdBODFcbiAgICAgICAgY29uc3QgY29uZmxpY3QgPSBhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGZpbGUsIHJlbW90ZUtleSwgbG9jYWxIYXNoLCByZW1vdGVIYXNoKTtcbiAgICAgICAgdGhpcy5fY29uZmxpY3RzLnB1c2goY29uZmxpY3QpO1xuICAgICAgICB0aGlzLl9zdGF0cy5jb25mbGljdHMgPSB0aGlzLl9jb25mbGljdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLm9uQ29uZmxpY3RzRm91bmQ/LihbY29uZmxpY3RdKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zYXZlU3luY1N0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBlbmRpbmdTdGF0cygpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gU2luZ2xlIGZpbGUgc3luYyBmYWlsZWQgZm9yICR7ZmlsZS5wYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gQ29uZmxpY3QgUmVzb2x1dGlvbiA9PT09PT09PT09XG5cbiAgYXN5bmMgcmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0OiBDb25mbGljdEluZm8sIHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxvY2FsUGF0aCA9IGNvbmZsaWN0LmxvY2FsUGF0aDtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChsb2NhbFBhdGgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN3aXRjaCAocmVzb2x1dGlvbikge1xuICAgICAgICBjYXNlICdsb2NhbCc6IHtcbiAgICAgICAgICAvLyBcdTc1MjhcdTY3MkNcdTU3MzBcdTcyNDhcdTY3MkNcdTg5ODZcdTc2RDZcdThGRENcdTdBMEJcbiAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgICByZW1vdGVLZXk6IGNvbmZsaWN0LnJlbW90ZUtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncmVtb3RlJzoge1xuICAgICAgICAgIC8vIFx1NzUyOFx1OEZEQ1x1N0EwQlx1NzI0OFx1NjcyQ1x1ODk4Nlx1NzZENlx1NjcyQ1x1NTczMFxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRvd25sb2FkQW5kU2F2ZShjb25mbGljdC5yZW1vdGVLZXkpO1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgICAgcmVtb3RlS2V5OiBjb25mbGljdC5yZW1vdGVLZXksXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8IGNvbmZsaWN0LnJlbW90ZUhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYm90aCc6IHtcbiAgICAgICAgICAvLyBcdTRGRERcdTc1NTlcdTRFMjRcdTRFMkFcdTcyNDhcdTY3MkNcdUZGMENcdTY3MkNcdTU3MzBcdTUyMUJcdTVFRkEgLmNvbmZsaWN0IFx1NTI2Rlx1NjcyQ1xuICAgICAgICAgIGNvbnN0IGNvbmZsaWN0UGF0aCA9IGxvY2FsUGF0aC5yZXBsYWNlKC9cXC5tZCQvLCBgLmNvbmZsaWN0LSR7RGF0ZS5ub3coKX0ubWRgKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY3JlYXRlKGNvbmZsaWN0UGF0aCwgY29uZmxpY3QucmVtb3RlQ29udGVudCk7XG5cbiAgICAgICAgICAvLyBcdTRFMEFcdTRGMjBcdTY3MkNcdTU3MzBcdTcyNDhcdTY3MkNcdTUyMzBcdThGRENcdTdBMEJcbiAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgICByZW1vdGVLZXk6IGNvbmZsaWN0LnJlbW90ZUtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHU0RUNFXHU1MUIyXHU3QTgxXHU1MjE3XHU4ODY4XHU0RTJEXHU3OUZCXHU5NjY0XG4gICAgICB0aGlzLl9jb25mbGljdHMgPSB0aGlzLl9jb25mbGljdHMuZmlsdGVyKChjKSA9PiBjLmxvY2FsUGF0aCAhPT0gbG9jYWxQYXRoKTtcbiAgICAgIHRoaXMuX3N0YXRzLmNvbmZsaWN0cyA9IHRoaXMuX2NvbmZsaWN0cy5sZW5ndGg7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTeW5jU3RhdGUoKTtcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gQ29uZmxpY3QgcmVzb2x1dGlvbiBmYWlsZWQgZm9yICR7bG9jYWxQYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlc29sdmVBbGxDb25mbGljdHMocmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29uZmxpY3RzVG9SZXNvbHZlID0gWy4uLnRoaXMuX2NvbmZsaWN0c107XG4gICAgZm9yIChjb25zdCBjb25mbGljdCBvZiBjb25mbGljdHNUb1Jlc29sdmUpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0LCByZXNvbHV0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09IEhlbHBlcnMgPT09PT09PT09PVxuXG4gIHByaXZhdGUgYXN5bmMgZmV0Y2hSZW1vdGVNZXRhcyhwcmVmaXg6IHN0cmluZyk6IFByb21pc2U8UmVtb3RlRmlsZU1ldGFbXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBkYXRhOiB7IGZpbGVzOiBSZW1vdGVGaWxlTWV0YVtdOyBjb3VudDogbnVtYmVyIH07XG4gICAgICB9PignL2FwaS9zeW5jL2JhdGNoLW1ldGEnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByZWZpeCB9KSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5kYXRhLmZpbGVzO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbU3luY0VuZ2luZV0gRmFpbGVkIHRvIGZldGNoIHJlbW90ZSBtZXRhczonLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkb3dubG9hZEFuZFNhdmUoXG4gICAgcmVtb3RlS2V5OiBzdHJpbmdcbiAgKTogUHJvbWlzZTx7IGNvbnRlbnRIYXNoPzogc3RyaW5nIH0gfCBudWxsPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucGx1Z2luLmFwaTx7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBrZXk6IHN0cmluZztcbiAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgIHVwbG9hZGVkPzogc3RyaW5nO1xuICAgICAgICAgIGNvbnRlbnRIYXNoPzogc3RyaW5nO1xuICAgICAgICAgIGVuY29kaW5nPzogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgfT4oYC9hcGkvc3luYy9kb3dubG9hZC8ke3JlbW90ZUtleX1gKTtcblxuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgY29uc3QgbG9jYWxQYXRoID0gZGF0YS5rZXk7XG4gICAgICBjb25zdCBpc01hcmtkb3duID0gbG9jYWxQYXRoLmVuZHNXaXRoKCcubWQnKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nRmlsZSA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobG9jYWxQYXRoKTtcblxuICAgICAgaWYgKGV4aXN0aW5nRmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgIGlmIChpc01hcmtkb3duIHx8IGRhdGEuZW5jb2RpbmcgPT09ICd1dGYtOCcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQubW9kaWZ5KGV4aXN0aW5nRmlsZSwgZGF0YS5jb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnBsdWdpbi5iYXNlNjRUb0FycmF5QnVmZmVyKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0Lm1vZGlmeUJpbmFyeShleGlzdGluZ0ZpbGUsIGJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFtTeW5jRW5naW5lXSBVcGRhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXHU1MjFCXHU1RUZBXHU2NTg3XHU0RUY2XG4gICAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBsb2NhbFBhdGguc3Vic3RyaW5nKDAsIGxvY2FsUGF0aC5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgaWYgKGZvbGRlclBhdGgpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlclBhdGgpLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNNYXJrZG93biB8fCBkYXRhLmVuY29kaW5nID09PSAndXRmLTgnKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmNyZWF0ZShsb2NhbFBhdGgsIGRhdGEuY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5wbHVnaW4uYmFzZTY0VG9BcnJheUJ1ZmZlcihkYXRhLmNvbnRlbnQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5jcmVhdGVCaW5hcnkobG9jYWxQYXRoLCBidWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBbU3luY0VuZ2luZV0gQ3JlYXRlZCAke2xvY2FsUGF0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgY29udGVudEhhc2g6IGRhdGEuY29udGVudEhhc2ggfTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihgW1N5bmNFbmdpbmVdIERvd25sb2FkIGZhaWxlZCBmb3IgJHtyZW1vdGVLZXl9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYnVpbGRDb25mbGljdEluZm8oXG4gICAgZmlsZTogVEZpbGUsXG4gICAgcmVtb3RlS2V5OiBzdHJpbmcsXG4gICAgbG9jYWxIYXNoOiBzdHJpbmcsXG4gICAgcmVtb3RlSGFzaDogc3RyaW5nXG4gICk6IFByb21pc2U8Q29uZmxpY3RJbmZvPiB7XG4gICAgY29uc3QgbG9jYWxDb250ZW50ID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG5cbiAgICBsZXQgcmVtb3RlQ29udGVudCA9ICcnO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBkYXRhOiB7IGNvbnRlbnQ6IHN0cmluZyB9O1xuICAgICAgfT4oYC9hcGkvc3luYy9kb3dubG9hZC8ke3JlbW90ZUtleX1gKTtcbiAgICAgIHJlbW90ZUNvbnRlbnQgPSByZXMuZGF0YS5jb250ZW50O1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmVtb3RlQ29udGVudCA9ICcoRmFpbGVkIHRvIGZldGNoIHJlbW90ZSBjb250ZW50KSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsUGF0aDogZmlsZS5wYXRoLFxuICAgICAgcmVtb3RlS2V5LFxuICAgICAgbG9jYWxDb250ZW50LFxuICAgICAgcmVtb3RlQ29udGVudCxcbiAgICAgIGxvY2FsSGFzaCxcbiAgICAgIHJlbW90ZUhhc2gsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGVuZGluZ1N0YXRzKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRzLnBlbmRpbmdVcGxvYWQgPSB0aGlzLmRlYm91bmNlVGltZXJzLnNpemU7XG4gICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRTdGF0c0NoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlZD8uKHRoaXMuc3RhdHMpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBDbGVhbnVwID09PT09PT09PT1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcEF1dG9TeW5jKCk7XG4gICAgZm9yIChjb25zdCB0aW1lciBvZiB0aGlzLmRlYm91bmNlVGltZXJzLnZhbHVlcygpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgICB0aGlzLmRlYm91bmNlVGltZXJzLmNsZWFyKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBQbHVnaW4sIHNldEljb24sIE1vZGFsLCBBcHAgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgdHlwZSB7IFN5bmNTdGF0cywgQ29uZmxpY3RJbmZvIH0gZnJvbSAnLi9zeW5jLWVuZ2luZSc7XG5cbmV4cG9ydCBjbGFzcyBTeW5jU3RhdHVzQmFyIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFBsdWdpbjtcbiAgcHJpdmF0ZSBzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaWNvbkVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB0ZXh0RWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9zdGF0czogU3luY1N0YXRzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2NvbmZsaWN0czogQ29uZmxpY3RJbmZvW10gPSBbXTtcbiAgcHJpdmF0ZSBvblNob3dDb25mbGljdHM6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG9uVHJpZ2dlclN5bmM6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBsdWdpbjogUGx1Z2luLFxuICAgIG9wdHM6IHtcbiAgICAgIG9uU2hvd0NvbmZsaWN0cz86ICgpID0+IHZvaWQ7XG4gICAgICBvblRyaWdnZXJTeW5jPzogKCkgPT4gdm9pZDtcbiAgICB9XG4gICkge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMub25TaG93Q29uZmxpY3RzID0gb3B0cy5vblNob3dDb25mbGljdHMgfHwgbnVsbDtcbiAgICB0aGlzLm9uVHJpZ2dlclN5bmMgPSBvcHRzLm9uVHJpZ2dlclN5bmMgfHwgbnVsbDtcblxuICAgIC8vIENyZWF0ZSBzdGF0dXMgYmFyIGVsZW1lbnRcbiAgICB0aGlzLnN0YXR1c0JhckVsID0gcGx1Z2luLmFkZFN0YXR1c0Jhckl0ZW0oKTtcbiAgICB0aGlzLnN0YXR1c0JhckVsLmFkZENsYXNzKCdjZi1zeW5jLXN0YXR1cycpO1xuICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Nsb3VkZmxhcmUgU3luYyBTdGF0dXMnKTtcblxuICAgIHRoaXMuaWNvbkVsID0gdGhpcy5zdGF0dXNCYXJFbC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2Ytc3RhdHVzLWljb24nIH0pO1xuICAgIHRoaXMudGV4dEVsID0gdGhpcy5zdGF0dXNCYXJFbC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2Ytc3RhdHVzLXRleHQnIH0pO1xuXG4gICAgLy8gQ2xpY2sgaGFuZGxlciBcdTIwMTQgb3BlbnMgZGV0YWlsIHBhbmVsXG4gICAgdGhpcy5zdGF0dXNCYXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RldGFpbE1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc3R5bGVzXG4gICAgdGhpcy5hZGRTdHlsZXMoKTtcblxuICAgIC8vIEluaXRpYWwgcmVuZGVyXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRzKHN0YXRzOiBTeW5jU3RhdHMpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB1cGRhdGVDb25mbGljdHMoY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSk6IHZvaWQge1xuICAgIHRoaXMuX2NvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdHMgPSB0aGlzLl9zdGF0cztcblxuICAgIGlmICghc3RhdHMpIHtcbiAgICAgIHNldEljb24odGhpcy5pY29uRWwsICdjbG91ZCcpO1xuICAgICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSAnTm90IHN5bmNlZCc7XG4gICAgICB0aGlzLnN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdjZi1zeW5jLXN0YXR1cyBjZi1zdGF0dXMtaWRsZSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmlzU3luY2luZykge1xuICAgICAgc2V0SWNvbih0aGlzLmljb25FbCwgJ3JlZnJlc2gtY3cnKTtcbiAgICAgIHRoaXMudGV4dEVsLnRleHRDb250ZW50ID0gJ1N5bmNpbmcuLi4nO1xuICAgICAgdGhpcy5zdGF0dXNCYXJFbC5jbGFzc05hbWUgPSAnY2Ytc3luYy1zdGF0dXMgY2Ytc3RhdHVzLXN5bmNpbmcnO1xuICAgICAgdGhpcy5pY29uRWwuYWRkQ2xhc3MoJ2NmLXNwaW4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmljb25FbC5yZW1vdmVDbGFzcygnY2Ytc3BpbicpO1xuXG4gICAgaWYgKHN0YXRzLmNvbmZsaWN0cyA+IDApIHtcbiAgICAgIHNldEljb24odGhpcy5pY29uRWwsICdhbGVydC10cmlhbmdsZScpO1xuICAgICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSBgJHtzdGF0cy5jb25mbGljdHN9IGNvbmZsaWN0JHtzdGF0cy5jb25mbGljdHMgPiAxID8gJ3MnIDogJyd9YDtcbiAgICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1jb25mbGljdCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmVycm9ycyA+IDApIHtcbiAgICAgIHNldEljb24odGhpcy5pY29uRWwsICd4LWNpcmNsZScpO1xuICAgICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSBgJHtzdGF0cy5lcnJvcnN9IGVycm9yJHtzdGF0cy5lcnJvcnMgPiAxID8gJ3MnIDogJyd9YDtcbiAgICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1lcnJvcic7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3luY2VkIHN0YXRlXG4gICAgc2V0SWNvbih0aGlzLmljb25FbCwgJ2NoZWNrLWNpcmNsZScpO1xuICAgIGNvbnN0IHRpbWVBZ28gPSBzdGF0cy5sYXN0U3luY1RpbWUgPyB0aGlzLmZvcm1hdFRpbWVBZ28oc3RhdHMubGFzdFN5bmNUaW1lKSA6ICduZXZlcic7XG4gICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW3RpbWVBZ29dO1xuICAgIGlmIChzdGF0cy5wZW5kaW5nVXBsb2FkID4gMCkgcGFydHMucHVzaChgJHtzdGF0cy5wZW5kaW5nVXBsb2FkfSBwZW5kaW5nYCk7XG4gICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSBwYXJ0cy5qb2luKCcgXHUwMEI3ICcpO1xuICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1zeW5jZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lQWdvKHRpbWVzdGFtcDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBkaWZmID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcblxuICAgIGlmIChzZWNvbmRzIDwgNjApIHJldHVybiAnanVzdCBub3cnO1xuICAgIGlmIChtaW51dGVzIDwgNjApIHJldHVybiBgJHttaW51dGVzfW0gYWdvYDtcbiAgICBpZiAoaG91cnMgPCAyNCkgcmV0dXJuIGAke2hvdXJzfWggYWdvYDtcbiAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihob3VycyAvIDI0KX1kIGFnb2A7XG4gIH1cblxuICBwcml2YXRlIHNob3dEZXRhaWxNb2RhbCgpOiB2b2lkIHtcbiAgICBuZXcgU3luY0RldGFpbE1vZGFsKHRoaXMucGx1Z2luLmFwcCwgdGhpcy5fc3RhdHMsIHRoaXMuX2NvbmZsaWN0cywge1xuICAgICAgb25TaG93Q29uZmxpY3RzOiB0aGlzLm9uU2hvd0NvbmZsaWN0cyxcbiAgICAgIG9uVHJpZ2dlclN5bmM6IHRoaXMub25UcmlnZ2VyU3luYyxcbiAgICB9KS5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NmLXN0YXR1cy1iYXItc3R5bGVzJykpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdjZi1zdGF0dXMtYmFyLXN0eWxlcyc7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICAuY2Ytc3luYy1zdGF0dXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgfVxuICAgICAgLmNmLXN5bmMtc3RhdHVzOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ob3Zlcik7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdHVzLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgfVxuICAgICAgLmNmLXN0YXR1cy1pY29uIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdHVzLXRleHQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXR1cy1pZGxlIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuICAgICAgLmNmLXN0YXR1cy1zeW5jaW5nIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LWFjY2VudCk7IH1cbiAgICAgIC5jZi1zdGF0dXMtc3luY2VkIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LXN1Y2Nlc3MsICM0YWRlODApOyB9XG4gICAgICAuY2Ytc3RhdHVzLWNvbmZsaWN0IC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LXdhcm5pbmcsICNmYWNjMTUpOyB9XG4gICAgICAuY2Ytc3RhdHVzLWVycm9yIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LWVycm9yLCAjZjg3MTcxKTsgfVxuICAgICAgLmNmLXNwaW4ge1xuICAgICAgICBhbmltYXRpb246IGNmLXNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBjZi1zcGluIHtcbiAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgIGA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzQmFyRWwucmVtb3ZlKCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PSBEZXRhaWwgTW9kYWwgPT09PT09PT09PVxuXG5jbGFzcyBTeW5jRGV0YWlsTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgc3RhdHM6IFN5bmNTdGF0cyB8IG51bGw7XG4gIHByaXZhdGUgY29uZmxpY3RzOiBDb25mbGljdEluZm9bXTtcbiAgcHJpdmF0ZSBvblNob3dDb25mbGljdHM6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gIHByaXZhdGUgb25UcmlnZ2VyU3luYzogKCgpID0+IHZvaWQpIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IEFwcCxcbiAgICBzdGF0czogU3luY1N0YXRzIHwgbnVsbCxcbiAgICBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdLFxuICAgIG9wdHM6IHtcbiAgICAgIG9uU2hvd0NvbmZsaWN0cz86ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gICAgICBvblRyaWdnZXJTeW5jPzogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5zdGF0cyA9IHN0YXRzO1xuICAgIHRoaXMuY29uZmxpY3RzID0gY29uZmxpY3RzO1xuICAgIHRoaXMub25TaG93Q29uZmxpY3RzID0gb3B0cy5vblNob3dDb25mbGljdHMgfHwgbnVsbDtcbiAgICB0aGlzLm9uVHJpZ2dlclN5bmMgPSBvcHRzLm9uVHJpZ2dlclN5bmMgfHwgbnVsbDtcbiAgfVxuXG4gIG9uT3BlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ2NmLXN5bmMtZGV0YWlsLW1vZGFsJyk7XG5cbiAgICB0aGlzLmFkZFN0eWxlcygpO1xuXG4gICAgLy8gSGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRldGFpbC1oZWFkZXInIH0pO1xuICAgIGNvbnN0IHRpdGxlUm93ID0gaGVhZGVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRldGFpbC10aXRsZS1yb3cnIH0pO1xuICAgIGNvbnN0IGljb25FbCA9IHRpdGxlUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1kZXRhaWwtaWNvbicgfSk7XG4gICAgc2V0SWNvbihpY29uRWwsICdjbG91ZCcpO1xuICAgIHRpdGxlUm93LmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1N5bmMgU3RhdHVzJywgY2xzOiAnY2YtZGV0YWlsLXRpdGxlJyB9KTtcblxuICAgIGNvbnN0IHN0YXRzID0gdGhpcy5zdGF0cztcblxuICAgIGlmICghc3RhdHMpIHtcbiAgICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbHM6ICdjZi1kZXRhaWwtZW1wdHknLFxuICAgICAgICB0ZXh0OiAnTm8gc3luYyBkYXRhIGF2YWlsYWJsZS4gUnVuIGEgc3luYyBmaXJzdC4nLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0YXRzIGdyaWRcbiAgICAgIGNvbnN0IGdyaWQgPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtZGV0YWlsLWdyaWQnIH0pO1xuXG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICdjbG9jaycsICdMYXN0IFN5bmMnLCBzdGF0cy5sYXN0U3luY1RpbWUgPyB0aGlzLmZvcm1hdFRpbWUoc3RhdHMubGFzdFN5bmNUaW1lKSA6ICdOZXZlcicpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnZmlsZXMnLCAnVG90YWwgRmlsZXMnLCBTdHJpbmcoc3RhdHMudG90YWxGaWxlcykpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnY2hlY2stY2lyY2xlJywgJ1N5bmNlZCcsIFN0cmluZyhzdGF0cy5zeW5jZWRGaWxlcykpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAndXBsb2FkJywgJ1BlbmRpbmcgXHUyMTkxJywgU3RyaW5nKHN0YXRzLnBlbmRpbmdVcGxvYWQpKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ2Rvd25sb2FkJywgJ1BlbmRpbmcgXHUyMTkzJywgU3RyaW5nKHN0YXRzLnBlbmRpbmdEb3dubG9hZCkpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnYWxlcnQtdHJpYW5nbGUnLCAnQ29uZmxpY3RzJywgU3RyaW5nKHN0YXRzLmNvbmZsaWN0cyksIHN0YXRzLmNvbmZsaWN0cyA+IDAgPyAnY2Ytc3RhdC13YXJuaW5nJyA6ICcnKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ3gtY2lyY2xlJywgJ0Vycm9ycycsIFN0cmluZyhzdGF0cy5lcnJvcnMpLCBzdGF0cy5lcnJvcnMgPiAwID8gJ2NmLXN0YXQtZXJyb3InIDogJycpO1xuXG4gICAgICAvLyBDb25mbGljdCBsaXN0XG4gICAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjb25mbGljdFNlY3Rpb24gPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbHM6ICdjZi1kZXRhaWwtc2VjdGlvbicsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25mbGljdFNlY3Rpb24uY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnQ29uZmxpY3RpbmcgRmlsZXMnIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbmZsaWN0TGlzdCA9IGNvbmZsaWN0U2VjdGlvbi5jcmVhdGVFbCgndWwnLCB7XG4gICAgICAgICAgY2xzOiAnY2YtY29uZmxpY3QtbGlzdCcsXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5jb25mbGljdHMpIHtcbiAgICAgICAgICBjb25zdCBsaSA9IGNvbmZsaWN0TGlzdC5jcmVhdGVFbCgnbGknLCB7IGNsczogJ2NmLWNvbmZsaWN0LWl0ZW0nIH0pO1xuICAgICAgICAgIGNvbnN0IGZpbGVJY29uID0gbGkuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWl0ZW0taWNvbicgfSk7XG4gICAgICAgICAgc2V0SWNvbihmaWxlSWNvbiwgJ2ZpbGUtd2FybmluZycpO1xuICAgICAgICAgIGxpLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBjLmxvY2FsUGF0aCwgY2xzOiAnY2YtaXRlbS1wYXRoJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uU2hvd0NvbmZsaWN0cykge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVCdG4gPSBjb25mbGljdFNlY3Rpb24uY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tcHJpbWFyeScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYnRuSWNvbiA9IHJlc29sdmVCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICAgICAgICBzZXRJY29uKGJ0bkljb24sICdhbGVydC10cmlhbmdsZScpO1xuICAgICAgICAgIHJlc29sdmVCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdSZXNvbHZlIENvbmZsaWN0cycgfSk7XG4gICAgICAgICAgcmVzb2x2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMub25TaG93Q29uZmxpY3RzPy4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGlvbnNcbiAgICBjb25zdCBhY3Rpb25zID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRldGFpbC1hY3Rpb25zJyB9KTtcblxuICAgIGlmICh0aGlzLm9uVHJpZ2dlclN5bmMpIHtcbiAgICAgIGNvbnN0IHN5bmNCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2NmLWJ0biBjZi1idG4tcHJpbWFyeScgfSk7XG4gICAgICBjb25zdCBzeW5jSWNvbiA9IHN5bmNCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICAgIHNldEljb24oc3luY0ljb24sICdyZWZyZXNoLWN3Jyk7XG4gICAgICBzeW5jQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnU3luYyBOb3cnIH0pO1xuICAgICAgc3luY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB0aGlzLm9uVHJpZ2dlclN5bmM/LigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbHM6ICdjZi1idG4nLFxuICAgICAgdGV4dDogJ0Nsb3NlJyxcbiAgICB9KTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFN0YXRDYXJkKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGljb246IHN0cmluZywgbGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXh0cmFDbGFzcz86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsczogYGNmLXN0YXQtY2FyZCAke2V4dHJhQ2xhc3MgfHwgJyd9YCxcbiAgICB9KTtcbiAgICBjb25zdCBpY29uRWwgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXN0YXQtaWNvbicgfSk7XG4gICAgc2V0SWNvbihpY29uRWwsIGljb24pO1xuICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2Ytc3RhdC12YWx1ZScsIHRleHQ6IHZhbHVlIH0pO1xuICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2Ytc3RhdC1sYWJlbCcsIHRleHQ6IGxhYmVsIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lKHRpbWVzdGFtcDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZi1kZXRhaWwtbW9kYWwtc3R5bGVzJykpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdjZi1kZXRhaWwtbW9kYWwtc3R5bGVzJztcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5jZi1zeW5jLWRldGFpbC1tb2RhbCB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjBweCAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC10aXRsZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWFjY2VudCk7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtZW1wdHkge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWNhcmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtaWNvbiBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC13YXJuaW5nIC5jZi1zdGF0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtd2FybmluZywgI2ZhY2MxNSk7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC13YXJuaW5nIC5jZi1zdGF0LWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC13YXJuaW5nLCAjZmFjYzE1KTtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWVycm9yIC5jZi1zdGF0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZXJyb3IsICNmODcxNzEpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtZXJyb3IgLmNmLXN0YXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWVycm9yLCAjZjg3MTcxKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtc2VjdGlvbiBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtbGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICB9XG4gICAgICAuY2YtaXRlbS1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtd2FybmluZywgI2ZhY2MxNSk7XG4gICAgICB9XG4gICAgICAuY2YtaXRlbS1pY29uIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAuY2YtaXRlbS1wYXRoIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ub3NwYWNlKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICB9XG4gICAgICAuY2YtYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWhvdmVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWludGVyYWN0aXZlLWFjY2VudCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW9uLWFjY2VudCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW50ZXJhY3RpdmUtYWNjZW50KTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW50ZXJhY3RpdmUtYWNjZW50LWhvdmVyLCB2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE1vZGFsLCBBcHAsIFRGaWxlLCBzZXRJY29uIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHR5cGUgeyBDb25mbGljdEluZm8sIENvbmZsaWN0UmVzb2x1dGlvbiB9IGZyb20gJy4vc3luYy1lbmdpbmUnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmxpY3RNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdO1xuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBvblJlc29sdmU6IChjb25mbGljdDogQ29uZmxpY3RJbmZvLCByZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pID0+IFByb21pc2U8dm9pZD47XG4gIHByaXZhdGUgb25SZXNvbHZlQWxsOiAocmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogQXBwLFxuICAgIGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW10sXG4gICAgb25SZXNvbHZlOiAoY29uZmxpY3Q6IENvbmZsaWN0SW5mbywgcmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKSA9PiBQcm9taXNlPHZvaWQ+LFxuICAgIG9uUmVzb2x2ZUFsbDogKHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbikgPT4gUHJvbWlzZTx2b2lkPlxuICApIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuY29uZmxpY3RzID0gY29uZmxpY3RzO1xuICAgIHRoaXMub25SZXNvbHZlID0gb25SZXNvbHZlO1xuICAgIHRoaXMub25SZXNvbHZlQWxsID0gb25SZXNvbHZlQWxsO1xuICB9XG5cbiAgb25PcGVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygnY2Ytc3luYy1jb25mbGljdC1tb2RhbCcpO1xuXG4gICAgdGhpcy5yZW5kZXJDdXJyZW50Q29uZmxpY3QoKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ3VycmVudENvbmZsaWN0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xuXG4gICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsczogJ2NmLWNvbmZsaWN0LWVtcHR5JyxcbiAgICAgICAgdGV4dDogJ1x1MjcwNSBBbGwgY29uZmxpY3RzIHJlc29sdmVkIScsXG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbG9zZSgpLCAxNTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25mbGljdCA9IHRoaXMuY29uZmxpY3RzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICBpZiAoIWNvbmZsaWN0KSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gPT09PT0gXHU2ODM3XHU1RjBGID09PT09XG4gICAgdGhpcy5hZGRTdHlsZXMoKTtcblxuICAgIC8vID09PT09IEhlYWRlciA9PT09PVxuICAgIGNvbnN0IGhlYWRlciA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1oZWFkZXInIH0pO1xuXG4gICAgY29uc3QgdGl0bGVSb3cgPSBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtdGl0bGUtcm93JyB9KTtcbiAgICBjb25zdCBpY29uRWwgPSB0aXRsZVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtY29uZmxpY3QtaWNvbicgfSk7XG4gICAgc2V0SWNvbihpY29uRWwsICdhbGVydC10cmlhbmdsZScpO1xuICAgIHRpdGxlUm93LmNyZWF0ZUVsKCdoMicsIHtcbiAgICAgIHRleHQ6ICdTeW5jIENvbmZsaWN0JyxcbiAgICAgIGNsczogJ2NmLWNvbmZsaWN0LXRpdGxlJyxcbiAgICB9KTtcblxuICAgIGhlYWRlci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xzOiAnY2YtY29uZmxpY3Qtc3VidGl0bGUnLFxuICAgICAgdGV4dDogYCR7dGhpcy5jdXJyZW50SW5kZXggKyAxfSBvZiAke3RoaXMuY29uZmxpY3RzLmxlbmd0aH0gY29uZmxpY3RzYCxcbiAgICB9KTtcblxuICAgIGhlYWRlci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xzOiAnY2YtY29uZmxpY3QtZmlsZXBhdGgnLFxuICAgICAgdGV4dDogY29uZmxpY3QubG9jYWxQYXRoLFxuICAgIH0pO1xuXG4gICAgLy8gPT09PT0gRGlmZiBWaWV3ID09PT09XG4gICAgY29uc3QgZGlmZkNvbnRhaW5lciA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1kaWZmJyB9KTtcblxuICAgIC8vIExvY2FsIHNpZGVcbiAgICBjb25zdCBsb2NhbFBhbmVsID0gZGlmZkNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1wYW5lbCBjZi1sb2NhbCcgfSk7XG4gICAgY29uc3QgbG9jYWxIZWFkZXIgPSBsb2NhbFBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXBhbmVsLWhlYWRlcicgfSk7XG4gICAgY29uc3QgbG9jYWxJY29uRWwgPSBsb2NhbEhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtcGFuZWwtaWNvbicgfSk7XG4gICAgc2V0SWNvbihsb2NhbEljb25FbCwgJ21vbml0b3InKTtcbiAgICBsb2NhbEhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ0xvY2FsIFZlcnNpb24nIH0pO1xuICAgIGxvY2FsSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1oYXNoJywgdGV4dDogY29uZmxpY3QubG9jYWxIYXNoLnN1YnN0cmluZygwLCA4KSB9KTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGVudCA9IGxvY2FsUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtcGFuZWwtY29udGVudCcgfSk7XG4gICAgdGhpcy5yZW5kZXJEaWZmQ29udGVudChsb2NhbENvbnRlbnQsIGNvbmZsaWN0LmxvY2FsQ29udGVudCwgY29uZmxpY3QucmVtb3RlQ29udGVudCwgJ2xvY2FsJyk7XG5cbiAgICAvLyBSZW1vdGUgc2lkZVxuICAgIGNvbnN0IHJlbW90ZVBhbmVsID0gZGlmZkNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1wYW5lbCBjZi1yZW1vdGUnIH0pO1xuICAgIGNvbnN0IHJlbW90ZUhlYWRlciA9IHJlbW90ZVBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXBhbmVsLWhlYWRlcicgfSk7XG4gICAgY29uc3QgcmVtb3RlSWNvbkVsID0gcmVtb3RlSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1wYW5lbC1pY29uJyB9KTtcbiAgICBzZXRJY29uKHJlbW90ZUljb25FbCwgJ2Nsb3VkJyk7XG4gICAgcmVtb3RlSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnUmVtb3RlIFZlcnNpb24nIH0pO1xuICAgIHJlbW90ZUhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtaGFzaCcsIHRleHQ6IGNvbmZsaWN0LnJlbW90ZUhhc2guc3Vic3RyaW5nKDAsIDgpIH0pO1xuXG4gICAgY29uc3QgcmVtb3RlQ29udGVudCA9IHJlbW90ZVBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXBhbmVsLWNvbnRlbnQnIH0pO1xuICAgIHRoaXMucmVuZGVyRGlmZkNvbnRlbnQocmVtb3RlQ29udGVudCwgY29uZmxpY3QucmVtb3RlQ29udGVudCwgY29uZmxpY3QubG9jYWxDb250ZW50LCAncmVtb3RlJyk7XG5cbiAgICAvLyA9PT09PSBBY3Rpb25zID09PT09XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1hY3Rpb25zJyB9KTtcblxuICAgIC8vIEluZGl2aWR1YWwgYWN0aW9uc1xuICAgIGNvbnN0IGluZGl2aWR1YWxBY3Rpb25zID0gYWN0aW9ucy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xzOiAnY2YtaW5kaXZpZHVhbC1hY3Rpb25zJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGtlZXBMb2NhbEJ0biA9IGluZGl2aWR1YWxBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLWxvY2FsJyxcbiAgICB9KTtcbiAgICBjb25zdCBsb2NhbEJ0bkljb24gPSBrZWVwTG9jYWxCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICBzZXRJY29uKGxvY2FsQnRuSWNvbiwgJ21vbml0b3InKTtcbiAgICBrZWVwTG9jYWxCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdLZWVwIExvY2FsJyB9KTtcbiAgICBrZWVwTG9jYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc29sdmUoY29uZmxpY3QsICdsb2NhbCcpKTtcblxuICAgIGNvbnN0IGtlZXBSZW1vdGVCdG4gPSBpbmRpdmlkdWFsQWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xzOiAnY2YtYnRuIGNmLWJ0bi1yZW1vdGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlbW90ZUJ0bkljb24gPSBrZWVwUmVtb3RlQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1idG4taWNvbicgfSk7XG4gICAgc2V0SWNvbihyZW1vdGVCdG5JY29uLCAnY2xvdWQnKTtcbiAgICBrZWVwUmVtb3RlQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnS2VlcCBSZW1vdGUnIH0pO1xuICAgIGtlZXBSZW1vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc29sdmUoY29uZmxpY3QsICdyZW1vdGUnKSk7XG5cbiAgICBjb25zdCBrZWVwQm90aEJ0biA9IGluZGl2aWR1YWxBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLWJvdGgnLFxuICAgIH0pO1xuICAgIGNvbnN0IGJvdGhCdG5JY29uID0ga2VlcEJvdGhCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICBzZXRJY29uKGJvdGhCdG5JY29uLCAnY29weScpO1xuICAgIGtlZXBCb3RoQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnS2VlcCBCb3RoJyB9KTtcbiAgICBrZWVwQm90aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzb2x2ZShjb25mbGljdCwgJ2JvdGgnKSk7XG5cbiAgICAvLyBCYXRjaCBhY3Rpb25zIChpZiBtdWx0aXBsZSBjb25mbGljdHMpXG4gICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGJhdGNoQWN0aW9ucyA9IGFjdGlvbnMuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtYmF0Y2gtYWN0aW9ucycgfSk7XG4gICAgICBiYXRjaEFjdGlvbnMuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogJ2NmLWJhdGNoLWxhYmVsJyxcbiAgICAgICAgdGV4dDogJ0FwcGx5IHRvIGFsbDonLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFsbExvY2FsQnRuID0gYmF0Y2hBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tc21hbGwgY2YtYnRuLWxvY2FsJyxcbiAgICAgICAgdGV4dDogJ0FsbCBMb2NhbCcsXG4gICAgICB9KTtcbiAgICAgIGFsbExvY2FsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNvbHZlQWxsKCdsb2NhbCcpKTtcblxuICAgICAgY29uc3QgYWxsUmVtb3RlQnRuID0gYmF0Y2hBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tc21hbGwgY2YtYnRuLXJlbW90ZScsXG4gICAgICAgIHRleHQ6ICdBbGwgUmVtb3RlJyxcbiAgICAgIH0pO1xuICAgICAgYWxsUmVtb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNvbHZlQWxsKCdyZW1vdGUnKSk7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBuYXYgPSBhY3Rpb25zLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LW5hdicgfSk7XG5cbiAgICAgIGNvbnN0IHByZXZCdG4gPSBuYXYuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnY2YtYnRuIGNmLWJ0bi1uYXYnIH0pO1xuICAgICAgc2V0SWNvbihwcmV2QnRuLCAnY2hldnJvbi1sZWZ0Jyk7XG4gICAgICBwcmV2QnRuLmRpc2FibGVkID0gdGhpcy5jdXJyZW50SW5kZXggPT09IDA7XG4gICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmF2LmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICB0ZXh0OiBgJHt0aGlzLmN1cnJlbnRJbmRleCArIDF9IC8gJHt0aGlzLmNvbmZsaWN0cy5sZW5ndGh9YCxcbiAgICAgICAgY2xzOiAnY2YtbmF2LXRleHQnLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5leHRCdG4gPSBuYXYuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnY2YtYnRuIGNmLWJ0bi1uYXYnIH0pO1xuICAgICAgc2V0SWNvbihuZXh0QnRuLCAnY2hldnJvbi1yaWdodCcpO1xuICAgICAgbmV4dEJ0bi5kaXNhYmxlZCA9IHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuY29uZmxpY3RzLmxlbmd0aCAtIDE7XG4gICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLmNvbmZsaWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckRpZmZDb250ZW50KFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIG90aGVyQ29udGVudDogc3RyaW5nLFxuICAgIHNpZGU6ICdsb2NhbCcgfCAncmVtb3RlJ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IG90aGVyTGluZXMgPSBvdGhlckNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXG4gICAgY29uc3QgcHJlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdwcmUnLCB7IGNsczogJ2NmLWRpZmYtcHJlJyB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmVFbCA9IHByZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1kaWZmLWxpbmUnIH0pO1xuXG4gICAgICAvLyBMaW5lIG51bWJlclxuICAgICAgbGluZUVsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbHM6ICdjZi1saW5lLW51bScsXG4gICAgICAgIHRleHQ6IFN0cmluZyhpICsgMSksXG4gICAgICB9KTtcblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIGxpbmUgZGlmZmVyc1xuICAgICAgY29uc3QgaXNEaWZmID0gaSA+PSBvdGhlckxpbmVzLmxlbmd0aCB8fCBsaW5lc1tpXSAhPT0gb3RoZXJMaW5lc1tpXTtcblxuICAgICAgY29uc3QgbGluZUNvbnRlbnQgPSBsaW5lRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogYGNmLWxpbmUtY29udGVudCAke2lzRGlmZiA/IChzaWRlID09PSAnbG9jYWwnID8gJ2NmLWRpZmYtbG9jYWwnIDogJ2NmLWRpZmYtcmVtb3RlJykgOiAnJ31gLFxuICAgICAgfSk7XG4gICAgICBsaW5lQ29udGVudC50ZXh0Q29udGVudCA9IGxpbmVzW2ldIHx8ICcgJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlc29sdmUoY29uZmxpY3Q6IENvbmZsaWN0SW5mbywgcmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiAoYnRuLmRpc2FibGVkID0gdHJ1ZSkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMub25SZXNvbHZlKGNvbmZsaWN0LCByZXNvbHV0aW9uKTtcbiAgICAgIHRoaXMuY29uZmxpY3RzID0gdGhpcy5jb25mbGljdHMuZmlsdGVyKChjKSA9PiBjLmxvY2FsUGF0aCAhPT0gY29uZmxpY3QubG9jYWxQYXRoKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmNvbmZsaWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBNYXRoLm1heCgwLCB0aGlzLmNvbmZsaWN0cy5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyQ3VycmVudENvbmZsaWN0KCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbmZsaWN0IHJlc29sdXRpb24gZmFpbGVkOicsIGVycik7XG4gICAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4gKGJ0bi5kaXNhYmxlZCA9IGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVSZXNvbHZlQWxsKHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4gKGJ0bi5kaXNhYmxlZCA9IHRydWUpKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm9uUmVzb2x2ZUFsbChyZXNvbHV0aW9uKTtcbiAgICAgIHRoaXMuY29uZmxpY3RzID0gW107XG4gICAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdCYXRjaCBjb25mbGljdCByZXNvbHV0aW9uIGZhaWxlZDonLCBlcnIpO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU3R5bGVzKCk6IHZvaWQge1xuICAgIC8vIE9ubHkgYWRkIG9uY2VcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NmLWNvbmZsaWN0LXN0eWxlcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaWQgPSAnY2YtY29uZmxpY3Qtc3R5bGVzJztcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5jZi1zeW5jLWNvbmZsaWN0LW1vZGFsIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICB9XG4gICAgICAuY2Ytc3luYy1jb25mbGljdC1tb2RhbCAubW9kYWwtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LXRpdGxlLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC13YXJuaW5nKTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1maWxlcGF0aCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm9zcGFjZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1hY2NlbnQpO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtZGlmZiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ2FwOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtcGFuZWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmNmLXBhbmVsLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgICAgLmNmLWxvY2FsIC5jZi1wYW5lbC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWJsdWUtcmdiLCAwLCAxMjAsIDIxNSksIDAuMSk7XG4gICAgICB9XG4gICAgICAuY2YtcmVtb3RlIC5jZi1wYW5lbC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWdyZWVuLXJnYiwgMCwgMTgwLCA4MCksIDAuMSk7XG4gICAgICB9XG4gICAgICAuY2YtcGFuZWwtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtaGFzaCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vc3BhY2UpO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgcGFkZGluZzogMXB4IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLmNmLXBhbmVsLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICB9XG4gICAgICAuY2YtZGlmZi1wcmUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm9zcGFjZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuY2YtZGlmZi1saW5lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICAgIC5jZi1saW5lLW51bSB7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZmFpbnQpO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAgIC5jZi1saW5lLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgLmNmLWRpZmYtbG9jYWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWJsdWUtcmdiLCAwLCAxMjAsIDIxNSksIDAuMTUpO1xuICAgICAgfVxuICAgICAgLmNmLWRpZmYtcmVtb3RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ncmVlbi1yZ2IsIDAsIDE4MCwgODApLCAwLjE1KTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1hY3Rpb25zIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICB9XG4gICAgICAuY2YtaW5kaXZpZHVhbC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNmLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICB9XG4gICAgICAuY2YtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ob3Zlcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1hY2NlbnQpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLWxvY2FsOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ibHVlLXJnYiwgMCwgMTIwLCAyMTUpLCAwLjE1KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IodmFyKC0tY29sb3ItYmx1ZS1yZ2IsIDAsIDEyMCwgMjE1KSk7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLXJlbW90ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItZ3JlZW4tcmdiLCAwLCAxODAsIDgwKSwgMC4xNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLWNvbG9yLWdyZWVuLXJnYiwgMCwgMTgwLCA4MCkpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1ib3RoOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1vcmFuZ2UtcmdiLCAyMzAsIDE1MCwgMCksIDAuMTUpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYih2YXIoLS1jb2xvci1vcmFuZ2UtcmdiLCAyMzAsIDE1MCwgMCkpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1zbWFsbCB7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgfVxuICAgICAgLmNmLWJhdGNoLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtYmF0Y2gtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1uYXYge1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgfVxuICAgICAgLmNmLW5hdi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1lbXB0eSB7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zdWNjZXNzLCB2YXIoLS1pbnRlcmFjdGl2ZS1zdWNjZXNzKSk7XG4gICAgICB9XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtDQUFBQSxVQUFBQyxTQUFBO0FBQUEsUUFBSSxXQUFXLE9BQU8sVUFBVTtBQUVoQyxJQUFBQSxRQUFP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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFLLFVBQVU7QUFBQSxjQUNuQixLQUFLLFVBQVUsVUFBVTtBQUFBLGNBQ3pCLFNBQVM7QUFBQSxjQUNUO0FBQUEsY0FDQSxVQUFVO0FBQUEsWUFDWixDQUFDO0FBQUEsVUFDSCxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsb0JBQW9CLFFBQTZCO0FBQy9DLFVBQU0sUUFBUSxJQUFJLFdBQVcsTUFBTTtBQUNuQyxRQUFJLFNBQVM7QUFDYixhQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sWUFBWSxLQUFLO0FBQ3pDLGdCQUFVLE9BQU8sYUFBYSxNQUFNLENBQUMsQ0FBQztBQUFBLElBQ3hDO0FBQ0EsV0FBTyxLQUFLLE1BQU07QUFBQSxFQUNwQjtBQUFBLEVBRUEsV0FBVztBQXZ0QmI7QUF3dEJJLFlBQVEsSUFBSSxxQ0FBcUM7QUFDakQsZUFBSyxlQUFMLG1CQUFpQjtBQUNqQixlQUFLLGNBQUwsbUJBQWdCO0FBQ2hCLFlBQVEsSUFBSSxpQ0FBaUM7QUFBQSxFQUMvQztBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgInN0ciIsICJzdHJpbmciLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicmVxdWlyZV9qc195YW1sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInlhbWwiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzdHIiLCAiZXhwb3J0cyIsICJzdHIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZW5naW5lcyIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJzdHIiLCAibWF0dGVyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzdHIiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJlbmdpbmVzIiwgInBhcnNlIiwgIm1hdHRlciIsICJvcHRpb25zIiwgInN0ciIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAib3B0aW9ucyIsICJtYXR0ZXIiXQp9Cg==

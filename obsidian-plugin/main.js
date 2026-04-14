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
        const content = file.path.endsWith(".md") ? await this.plugin.app.vault.read(file) : this.plugin.arrayBufferToBase64(await this.plugin.app.vault.readBinary(file));
        const hash = await this.computeLocalHash(content);
        localFileMap.set(remoteKey, { file, hash });
      }
      const remoteMetas = await this.fetchRemoteMetas("vault/");
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
        const localPath = key.replace(/^vault\//, "");
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
          const localPath = item.key.replace(/^vault\//, "");
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
            const localPath = item.key.replace(/^vault\//, "");
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
      const content = isMarkdown ? await this.plugin.app.vault.read(file) : this.plugin.arrayBufferToBase64(await this.plugin.app.vault.readBinary(file));
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
      const localPath = data.key.replace(/^vault\//, "");
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
  async updateFileFrontmatter(file) {
    if (!file.path.endsWith(".md"))
      return;
    const content = await this.app.vault.read(file);
    if (content.startsWith("---"))
      return;
    const frontmatter = await this.generateFrontmatter(file);
    const newContent = import_gray_matter.default.stringify(content, frontmatter);
    await this.app.vault.modify(file, newContent);
    new import_obsidian5.Notice(`Updated frontmatter for ${file.name}`);
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
    return `vault/${file.path}`;
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
      const localPath = data.key.replace(/^vault\//, "");
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
      const remoteFiles = await this.listFiles("vault/");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2tpbmQtb2YvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2lzLWV4dGVuZGFibGUvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zZWN0aW9uLW1hdHRlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvY29tbW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9leGNlcHRpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL21hcmsuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9zdHIuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2VxLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL21hcC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvc2NoZW1hL2ZhaWxzYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL251bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYm9vbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9pbnQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvZmxvYXQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9qc29uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvY29yZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS90aW1lc3RhbXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvbWVyZ2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYmluYXJ5LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL29tYXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvcGFpcnMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2V0LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvZGVmYXVsdF9zYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL2pzL3VuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9qcy9yZWdleHAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvanMvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X2Z1bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL2xvYWRlci5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvZHVtcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9lbmdpbmVzLmpzIiwgIm5vZGVfbW9kdWxlcy9zdHJpcC1ib20tc3RyaW5nL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvdXRpbHMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9kZWZhdWx0cy5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2VuZ2luZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL3N0cmluZ2lmeS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2V4Y2VycHQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi90by1maWxlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvcGFyc2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2luZGV4LmpzIiwgInNyYy9tYWluLnRzIiwgInNyYy9zZXR0aW5ncy50cyIsICJzcmMvc3luYy1lbmdpbmUudHMiLCAic3JjL3N0YXR1cy1iYXIudHMiLCAic3JjL2NvbmZsaWN0LW1vZGFsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gJ2Jvb2xlYW4nO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiAnc3RyaW5nJztcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSByZXR1cm4gJ251bWJlcic7XG4gIGlmICh0eXBlID09PSAnc3ltYm9sJykgcmV0dXJuICdzeW1ib2wnO1xuICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpc0dlbmVyYXRvckZuKHZhbCkgPyAnZ2VuZXJhdG9yZnVuY3Rpb24nIDogJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlmIChpc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICBpZiAoaXNCdWZmZXIodmFsKSkgcmV0dXJuICdidWZmZXInO1xuICBpZiAoaXNBcmd1bWVudHModmFsKSkgcmV0dXJuICdhcmd1bWVudHMnO1xuICBpZiAoaXNEYXRlKHZhbCkpIHJldHVybiAnZGF0ZSc7XG4gIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICBpZiAoaXNSZWdleHAodmFsKSkgcmV0dXJuICdyZWdleHAnO1xuXG4gIHN3aXRjaCAoY3Rvck5hbWUodmFsKSkge1xuICAgIGNhc2UgJ1N5bWJvbCc6IHJldHVybiAnc3ltYm9sJztcbiAgICBjYXNlICdQcm9taXNlJzogcmV0dXJuICdwcm9taXNlJztcblxuICAgIC8vIFNldCwgTWFwLCBXZWFrU2V0LCBXZWFrTWFwXG4gICAgY2FzZSAnV2Vha01hcCc6IHJldHVybiAnd2Vha21hcCc7XG4gICAgY2FzZSAnV2Vha1NldCc6IHJldHVybiAnd2Vha3NldCc7XG4gICAgY2FzZSAnTWFwJzogcmV0dXJuICdtYXAnO1xuICAgIGNhc2UgJ1NldCc6IHJldHVybiAnc2V0JztcblxuICAgIC8vIDgtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDhBcnJheSc6IHJldHVybiAnaW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OEFycmF5JzogcmV0dXJuICd1aW50OGFycmF5JztcbiAgICBjYXNlICdVaW50OENsYW1wZWRBcnJheSc6IHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuXG4gICAgLy8gMTYtYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDE2QXJyYXknOiByZXR1cm4gJ2ludDE2YXJyYXknO1xuICAgIGNhc2UgJ1VpbnQxNkFycmF5JzogcmV0dXJuICd1aW50MTZhcnJheSc7XG5cbiAgICAvLyAzMi1iaXQgdHlwZWQgYXJyYXlzXG4gICAgY2FzZSAnSW50MzJBcnJheSc6IHJldHVybiAnaW50MzJhcnJheSc7XG4gICAgY2FzZSAnVWludDMyQXJyYXknOiByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgICBjYXNlICdGbG9hdDMyQXJyYXknOiByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gICAgY2FzZSAnRmxvYXQ2NEFycmF5JzogcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgaWYgKGlzR2VuZXJhdG9yT2JqKHZhbCkpIHtcbiAgICByZXR1cm4gJ2dlbmVyYXRvcic7XG4gIH1cblxuICAvLyBOb24tcGxhaW4gb2JqZWN0c1xuICB0eXBlID0gdG9TdHJpbmcuY2FsbCh2YWwpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOiByZXR1cm4gJ29iamVjdCc7XG4gICAgLy8gaXRlcmF0b3JzXG4gICAgY2FzZSAnW29iamVjdCBNYXAgSXRlcmF0b3JdJzogcmV0dXJuICdtYXBpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTZXQgSXRlcmF0b3JdJzogcmV0dXJuICdzZXRpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBTdHJpbmcgSXRlcmF0b3JdJzogcmV0dXJuICdzdHJpbmdpdGVyYXRvcic7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheSBJdGVyYXRvcl0nOiByZXR1cm4gJ2FycmF5aXRlcmF0b3InO1xuICB9XG5cbiAgLy8gb3RoZXJcbiAgcmV0dXJuIHR5cGUuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbn07XG5cbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yIHx8ICh0eXBlb2YgdmFsLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gJ251bWJlcicpO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ2V4cCh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLmZsYWdzID09PSAnc3RyaW5nJ1xuICAgICYmIHR5cGVvZiB2YWwuaWdub3JlQ2FzZSA9PT0gJ2Jvb2xlYW4nXG4gICAgJiYgdHlwZW9mIHZhbC5tdWx0aWxpbmUgPT09ICdib29sZWFuJ1xuICAgICYmIHR5cGVvZiB2YWwuZ2xvYmFsID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRm4obmFtZSwgdmFsKSB7XG4gIHJldHVybiBjdG9yTmFtZShuYW1lKSA9PT0gJ0dlbmVyYXRvckZ1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNHZW5lcmF0b3JPYmoodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRocm93ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5yZXR1cm4gPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLm5leHQgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmFsLmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbC5jYWxsZWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NhbGxlZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IFNhZmFyaSA1LTcgKDgtMTAgeXItb2xkIGJyb3dzZXIpLFxuICogdGFrZSBhIGxvb2sgYXQgaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pcy1idWZmZXJcbiAqL1xuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgaWYgKHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsICIvKiFcbiAqIGlzLWV4dGVuZGFibGUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGVuZGFibGU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRlbmRhYmxlKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsXG4gICAgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoby8qLCBvYmplY3RzKi8pIHtcbiAgaWYgKCFpc09iamVjdChvKSkgeyBvID0ge307IH1cblxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgYXNzaWduKG8sIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufTtcblxuZnVuY3Rpb24gYXNzaWduKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoaGFzT3duKGIsIGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBrZXlgIGlzIGFuIG93biBwcm9wZXJ0eSBvZiBgb2JqYC5cbiAqL1xuXG5mdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZC1zaGFsbG93Jyk7XG5cbi8qKlxuICogUGFyc2Ugc2VjdGlvbnMgaW4gYGlucHV0YCB3aXRoIHRoZSBnaXZlbiBgb3B0aW9uc2AuXG4gKlxuICogYGBganNcbiAqIHZhciBzZWN0aW9ucyA9IHJlcXVpcmUoJ3slPSBuYW1lICV9Jyk7XG4gKiB2YXIgcmVzdWx0ID0gc2VjdGlvbnMoaW5wdXQsIG9wdGlvbnMpO1xuICogLy8geyBjb250ZW50OiAnQ29udGVudCBiZWZvcmUgc2VjdGlvbnMnLCBzZWN0aW9uczogW10gfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xCdWZmZXJ8T2JqZWN0fSBgaW5wdXRgIElmIGlucHV0IGlzIGFuIG9iamVjdCwgaXQncyBgY29udGVudGAgcHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyBvciBidWZmZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgYGNvbnRlbnRgIHN0cmluZyBhbmQgYW4gYXJyYXkgb2YgYHNlY3Rpb25zYCBvYmplY3RzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlucHV0LCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMgPSB7IHBhcnNlOiBvcHRpb25zIH07XG4gIH1cblxuICB2YXIgZmlsZSA9IHRvT2JqZWN0KGlucHV0KTtcbiAgdmFyIGRlZmF1bHRzID0ge3NlY3Rpb25fZGVsaW1pdGVyOiAnLS0tJywgcGFyc2U6IGlkZW50aXR5fTtcbiAgdmFyIG9wdHMgPSBleHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgdmFyIGRlbGltID0gb3B0cy5zZWN0aW9uX2RlbGltaXRlcjtcbiAgdmFyIGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBzZWN0aW9ucyA9IG51bGw7XG4gIHZhciBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbigpO1xuICB2YXIgY29udGVudCA9IFtdO1xuICB2YXIgc3RhY2sgPSBbXTtcblxuICBmdW5jdGlvbiBpbml0U2VjdGlvbnModmFsKSB7XG4gICAgZmlsZS5jb250ZW50ID0gdmFsO1xuICAgIHNlY3Rpb25zID0gW107XG4gICAgY29udGVudCA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VTZWN0aW9uKHZhbCkge1xuICAgIGlmIChzdGFjay5sZW5ndGgpIHtcbiAgICAgIHNlY3Rpb24ua2V5ID0gZ2V0S2V5KHN0YWNrWzBdLCBkZWxpbSk7XG4gICAgICBzZWN0aW9uLmNvbnRlbnQgPSB2YWw7XG4gICAgICBvcHRzLnBhcnNlKHNlY3Rpb24sIHNlY3Rpb25zKTtcbiAgICAgIHNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbigpO1xuICAgICAgY29udGVudCA9IFtdO1xuICAgICAgc3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcbiAgICB2YXIgbGVuID0gc3RhY2subGVuZ3RoO1xuICAgIHZhciBsbiA9IGxpbmUudHJpbSgpO1xuXG4gICAgaWYgKGlzRGVsaW1pdGVyKGxuLCBkZWxpbSkpIHtcbiAgICAgIGlmIChsbi5sZW5ndGggPT09IDMgJiYgaSAhPT0gMCkge1xuICAgICAgICBpZiAobGVuID09PSAwIHx8IGxlbiA9PT0gMikge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChsaW5lKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGxuKTtcbiAgICAgICAgc2VjdGlvbi5kYXRhID0gY29udGVudC5qb2luKCdcXG4nKTtcbiAgICAgICAgY29udGVudCA9IFtdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY3Rpb25zID09PSBudWxsKSB7XG4gICAgICAgIGluaXRTZWN0aW9ucyhjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICBjbG9zZVNlY3Rpb24oY29udGVudC5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2gobG4pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29udGVudC5wdXNoKGxpbmUpO1xuICB9XG5cbiAgaWYgKHNlY3Rpb25zID09PSBudWxsKSB7XG4gICAgaW5pdFNlY3Rpb25zKGNvbnRlbnQuam9pbignXFxuJykpO1xuICB9IGVsc2Uge1xuICAgIGNsb3NlU2VjdGlvbihjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIGZpbGUuc2VjdGlvbnMgPSBzZWN0aW9ucztcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG5mdW5jdGlvbiBpc0RlbGltaXRlcihsaW5lLCBkZWxpbSkge1xuICBpZiAobGluZS5zbGljZSgwLCBkZWxpbS5sZW5ndGgpICE9PSBkZWxpbSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGluZS5jaGFyQXQoZGVsaW0ubGVuZ3RoICsgMSkgPT09IGRlbGltLnNsaWNlKC0xKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QoaW5wdXQpIHtcbiAgaWYgKHR5cGVPZihpbnB1dCkgIT09ICdvYmplY3QnKSB7XG4gICAgaW5wdXQgPSB7IGNvbnRlbnQ6IGlucHV0IH07XG4gIH1cblxuICBpZiAodHlwZW9mIGlucHV0LmNvbnRlbnQgIT09ICdzdHJpbmcnICYmICFpc0J1ZmZlcihpbnB1dC5jb250ZW50KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGEgYnVmZmVyIG9yIHN0cmluZycpO1xuICB9XG5cbiAgaW5wdXQuY29udGVudCA9IGlucHV0LmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgaW5wdXQuc2VjdGlvbnMgPSBbXTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRLZXkodmFsLCBkZWxpbSkge1xuICByZXR1cm4gdmFsID8gdmFsLnNsaWNlKGRlbGltLmxlbmd0aCkudHJpbSgpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oKSB7XG4gIHJldHVybiB7IGtleTogJycsIGRhdGE6ICcnLCBjb250ZW50OiAnJyB9O1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eSh2YWwpIHtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIGlmICh2YWwgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBpc05vdGhpbmcoc3ViamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBzdWJqZWN0ID09PSAndW5kZWZpbmVkJykgfHwgKHN1YmplY3QgPT09IG51bGwpO1xufVxuXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcpICYmIChzdWJqZWN0ICE9PSBudWxsKTtcbn1cblxuXG5mdW5jdGlvbiB0b0FycmF5KHNlcXVlbmNlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNlcXVlbmNlKSkgcmV0dXJuIHNlcXVlbmNlO1xuICBlbHNlIGlmIChpc05vdGhpbmcoc2VxdWVuY2UpKSByZXR1cm4gW107XG5cbiAgcmV0dXJuIFsgc2VxdWVuY2UgXTtcbn1cblxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGluZGV4LCBsZW5ndGgsIGtleSwgc291cmNlS2V5cztcblxuICBpZiAoc291cmNlKSB7XG4gICAgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gc291cmNlS2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBrZXkgPSBzb3VyY2VLZXlzW2luZGV4XTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuXG5mdW5jdGlvbiByZXBlYXQoc3RyaW5nLCBjb3VudCkge1xuICB2YXIgcmVzdWx0ID0gJycsIGN5Y2xlO1xuXG4gIGZvciAoY3ljbGUgPSAwOyBjeWNsZSA8IGNvdW50OyBjeWNsZSArPSAxKSB7XG4gICAgcmVzdWx0ICs9IHN0cmluZztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gaXNOZWdhdGl2ZVplcm8obnVtYmVyKSB7XG4gIHJldHVybiAobnVtYmVyID09PSAwKSAmJiAoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZID09PSAxIC8gbnVtYmVyKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5pc05vdGhpbmcgICAgICA9IGlzTm90aGluZztcbm1vZHVsZS5leHBvcnRzLmlzT2JqZWN0ICAgICAgID0gaXNPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cy50b0FycmF5ICAgICAgICA9IHRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0cy5yZXBlYXQgICAgICAgICA9IHJlcGVhdDtcbm1vZHVsZS5leHBvcnRzLmlzTmVnYXRpdmVaZXJvID0gaXNOZWdhdGl2ZVplcm87XG5tb2R1bGUuZXhwb3J0cy5leHRlbmQgICAgICAgICA9IGV4dGVuZDtcbiIsICIvLyBZQU1MIGVycm9yIGNsYXNzLiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg0NTg5ODRcbi8vXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFlBTUxFeGNlcHRpb24ocmVhc29uLCBtYXJrKSB7XG4gIC8vIFN1cGVyIGNvbnN0cnVjdG9yXG4gIEVycm9yLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYW1lID0gJ1lBTUxFeGNlcHRpb24nO1xuICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgdGhpcy5tYXJrID0gbWFyaztcbiAgdGhpcy5tZXNzYWdlID0gKHRoaXMucmVhc29uIHx8ICcodW5rbm93biByZWFzb24pJykgKyAodGhpcy5tYXJrID8gJyAnICsgdGhpcy5tYXJrLnRvU3RyaW5nKCkgOiAnJyk7XG5cbiAgLy8gSW5jbHVkZSBzdGFjayB0cmFjZSBpbiBlcnJvciBvYmplY3RcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgLy8gQ2hyb21lIGFuZCBOb2RlSlNcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGRiwgSUUgMTArIGFuZCBTYWZhcmkgNisuIEZhbGxiYWNrIGZvciBvdGhlcnNcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjayB8fCAnJztcbiAgfVxufVxuXG5cbi8vIEluaGVyaXQgZnJvbSBFcnJvclxuWUFNTEV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5ZQU1MRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFlBTUxFeGNlcHRpb247XG5cblxuWUFNTEV4Y2VwdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhjb21wYWN0KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLm5hbWUgKyAnOiAnO1xuXG4gIHJlc3VsdCArPSB0aGlzLnJlYXNvbiB8fCAnKHVua25vd24gcmVhc29uKSc7XG5cbiAgaWYgKCFjb21wYWN0ICYmIHRoaXMubWFyaykge1xuICAgIHJlc3VsdCArPSAnICcgKyB0aGlzLm1hcmsudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gWUFNTEV4Y2VwdGlvbjtcbiIsICIndXNlIHN0cmljdCc7XG5cblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uJyk7XG5cblxuZnVuY3Rpb24gTWFyayhuYW1lLCBidWZmZXIsIHBvc2l0aW9uLCBsaW5lLCBjb2x1bW4pIHtcbiAgdGhpcy5uYW1lICAgICA9IG5hbWU7XG4gIHRoaXMuYnVmZmVyICAgPSBidWZmZXI7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgdGhpcy5saW5lICAgICA9IGxpbmU7XG4gIHRoaXMuY29sdW1uICAgPSBjb2x1bW47XG59XG5cblxuTWFyay5wcm90b3R5cGUuZ2V0U25pcHBldCA9IGZ1bmN0aW9uIGdldFNuaXBwZXQoaW5kZW50LCBtYXhMZW5ndGgpIHtcbiAgdmFyIGhlYWQsIHN0YXJ0LCB0YWlsLCBlbmQsIHNuaXBwZXQ7XG5cbiAgaWYgKCF0aGlzLmJ1ZmZlcikgcmV0dXJuIG51bGw7XG5cbiAgaW5kZW50ID0gaW5kZW50IHx8IDQ7XG4gIG1heExlbmd0aCA9IG1heExlbmd0aCB8fCA3NTtcblxuICBoZWFkID0gJyc7XG4gIHN0YXJ0ID0gdGhpcy5wb3NpdGlvbjtcblxuICB3aGlsZSAoc3RhcnQgPiAwICYmICdcXHgwMFxcclxcblxceDg1XFx1MjAyOFxcdTIwMjknLmluZGV4T2YodGhpcy5idWZmZXIuY2hhckF0KHN0YXJ0IC0gMSkpID09PSAtMSkge1xuICAgIHN0YXJ0IC09IDE7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gLSBzdGFydCA+IChtYXhMZW5ndGggLyAyIC0gMSkpIHtcbiAgICAgIGhlYWQgPSAnIC4uLiAnO1xuICAgICAgc3RhcnQgKz0gNTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHRhaWwgPSAnJztcbiAgZW5kID0gdGhpcy5wb3NpdGlvbjtcblxuICB3aGlsZSAoZW5kIDwgdGhpcy5idWZmZXIubGVuZ3RoICYmICdcXHgwMFxcclxcblxceDg1XFx1MjAyOFxcdTIwMjknLmluZGV4T2YodGhpcy5idWZmZXIuY2hhckF0KGVuZCkpID09PSAtMSkge1xuICAgIGVuZCArPSAxO1xuICAgIGlmIChlbmQgLSB0aGlzLnBvc2l0aW9uID4gKG1heExlbmd0aCAvIDIgLSAxKSkge1xuICAgICAgdGFpbCA9ICcgLi4uICc7XG4gICAgICBlbmQgLT0gNTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNuaXBwZXQgPSB0aGlzLmJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTtcblxuICByZXR1cm4gY29tbW9uLnJlcGVhdCgnICcsIGluZGVudCkgKyBoZWFkICsgc25pcHBldCArIHRhaWwgKyAnXFxuJyArXG4gICAgICAgICBjb21tb24ucmVwZWF0KCcgJywgaW5kZW50ICsgdGhpcy5wb3NpdGlvbiAtIHN0YXJ0ICsgaGVhZC5sZW5ndGgpICsgJ14nO1xufTtcblxuXG5NYXJrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGNvbXBhY3QpIHtcbiAgdmFyIHNuaXBwZXQsIHdoZXJlID0gJyc7XG5cbiAgaWYgKHRoaXMubmFtZSkge1xuICAgIHdoZXJlICs9ICdpbiBcIicgKyB0aGlzLm5hbWUgKyAnXCIgJztcbiAgfVxuXG4gIHdoZXJlICs9ICdhdCBsaW5lICcgKyAodGhpcy5saW5lICsgMSkgKyAnLCBjb2x1bW4gJyArICh0aGlzLmNvbHVtbiArIDEpO1xuXG4gIGlmICghY29tcGFjdCkge1xuICAgIHNuaXBwZXQgPSB0aGlzLmdldFNuaXBwZXQoKTtcblxuICAgIGlmIChzbmlwcGV0KSB7XG4gICAgICB3aGVyZSArPSAnOlxcbicgKyBzbmlwcGV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aGVyZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBNYXJrO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFlBTUxFeGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgVFlQRV9DT05TVFJVQ1RPUl9PUFRJT05TID0gW1xuICAna2luZCcsXG4gICdyZXNvbHZlJyxcbiAgJ2NvbnN0cnVjdCcsXG4gICdpbnN0YW5jZU9mJyxcbiAgJ3ByZWRpY2F0ZScsXG4gICdyZXByZXNlbnQnLFxuICAnZGVmYXVsdFN0eWxlJyxcbiAgJ3N0eWxlQWxpYXNlcydcbl07XG5cbnZhciBZQU1MX05PREVfS0lORFMgPSBbXG4gICdzY2FsYXInLFxuICAnc2VxdWVuY2UnLFxuICAnbWFwcGluZydcbl07XG5cbmZ1bmN0aW9uIGNvbXBpbGVTdHlsZUFsaWFzZXMobWFwKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBpZiAobWFwICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgbWFwW3N0eWxlXS5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICByZXN1bHRbU3RyaW5nKGFsaWFzKV0gPSBzdHlsZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gVHlwZSh0YWcsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChUWVBFX0NPTlNUUlVDVE9SX09QVElPTlMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdVbmtub3duIG9wdGlvbiBcIicgKyBuYW1lICsgJ1wiIGlzIG1ldCBpbiBkZWZpbml0aW9uIG9mIFwiJyArIHRhZyArICdcIiBZQU1MIHR5cGUuJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBUT0RPOiBBZGQgdGFnIGZvcm1hdCBjaGVjay5cbiAgdGhpcy50YWcgICAgICAgICAgPSB0YWc7XG4gIHRoaXMua2luZCAgICAgICAgID0gb3B0aW9uc1sna2luZCddICAgICAgICAgfHwgbnVsbDtcbiAgdGhpcy5yZXNvbHZlICAgICAgPSBvcHRpb25zWydyZXNvbHZlJ10gICAgICB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9O1xuICB0aGlzLmNvbnN0cnVjdCAgICA9IG9wdGlvbnNbJ2NvbnN0cnVjdCddICAgIHx8IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9O1xuICB0aGlzLmluc3RhbmNlT2YgICA9IG9wdGlvbnNbJ2luc3RhbmNlT2YnXSAgIHx8IG51bGw7XG4gIHRoaXMucHJlZGljYXRlICAgID0gb3B0aW9uc1sncHJlZGljYXRlJ10gICAgfHwgbnVsbDtcbiAgdGhpcy5yZXByZXNlbnQgICAgPSBvcHRpb25zWydyZXByZXNlbnQnXSAgICB8fCBudWxsO1xuICB0aGlzLmRlZmF1bHRTdHlsZSA9IG9wdGlvbnNbJ2RlZmF1bHRTdHlsZSddIHx8IG51bGw7XG4gIHRoaXMuc3R5bGVBbGlhc2VzID0gY29tcGlsZVN0eWxlQWxpYXNlcyhvcHRpb25zWydzdHlsZUFsaWFzZXMnXSB8fCBudWxsKTtcblxuICBpZiAoWUFNTF9OT0RFX0tJTkRTLmluZGV4T2YodGhpcy5raW5kKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignVW5rbm93biBraW5kIFwiJyArIHRoaXMua2luZCArICdcIiBpcyBzcGVjaWZpZWQgZm9yIFwiJyArIHRhZyArICdcIiBZQU1MIHR5cGUuJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuKi9cblxudmFyIGNvbW1vbiAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIFlBTUxFeGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xudmFyIFR5cGUgICAgICAgICAgPSByZXF1aXJlKCcuL3R5cGUnKTtcblxuXG5mdW5jdGlvbiBjb21waWxlTGlzdChzY2hlbWEsIG5hbWUsIHJlc3VsdCkge1xuICB2YXIgZXhjbHVkZSA9IFtdO1xuXG4gIHNjaGVtYS5pbmNsdWRlLmZvckVhY2goZnVuY3Rpb24gKGluY2x1ZGVkU2NoZW1hKSB7XG4gICAgcmVzdWx0ID0gY29tcGlsZUxpc3QoaW5jbHVkZWRTY2hlbWEsIG5hbWUsIHJlc3VsdCk7XG4gIH0pO1xuXG4gIHNjaGVtYVtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50VHlwZSkge1xuICAgIHJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChwcmV2aW91c1R5cGUsIHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIGlmIChwcmV2aW91c1R5cGUudGFnID09PSBjdXJyZW50VHlwZS50YWcgJiYgcHJldmlvdXNUeXBlLmtpbmQgPT09IGN1cnJlbnRUeXBlLmtpbmQpIHtcbiAgICAgICAgZXhjbHVkZS5wdXNoKHByZXZpb3VzSW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzdWx0LnB1c2goY3VycmVudFR5cGUpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZXhjbHVkZS5pbmRleE9mKGluZGV4KSA9PT0gLTE7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGNvbXBpbGVNYXAoLyogbGlzdHMuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgc2NhbGFyOiB7fSxcbiAgICAgICAgc2VxdWVuY2U6IHt9LFxuICAgICAgICBtYXBwaW5nOiB7fSxcbiAgICAgICAgZmFsbGJhY2s6IHt9XG4gICAgICB9LCBpbmRleCwgbGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3RUeXBlKHR5cGUpIHtcbiAgICByZXN1bHRbdHlwZS5raW5kXVt0eXBlLnRhZ10gPSByZXN1bHRbJ2ZhbGxiYWNrJ11bdHlwZS50YWddID0gdHlwZTtcbiAgfVxuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGFyZ3VtZW50c1tpbmRleF0uZm9yRWFjaChjb2xsZWN0VHlwZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5mdW5jdGlvbiBTY2hlbWEoZGVmaW5pdGlvbikge1xuICB0aGlzLmluY2x1ZGUgID0gZGVmaW5pdGlvbi5pbmNsdWRlICB8fCBbXTtcbiAgdGhpcy5pbXBsaWNpdCA9IGRlZmluaXRpb24uaW1wbGljaXQgfHwgW107XG4gIHRoaXMuZXhwbGljaXQgPSBkZWZpbml0aW9uLmV4cGxpY2l0IHx8IFtdO1xuXG4gIHRoaXMuaW1wbGljaXQuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIGlmICh0eXBlLmxvYWRLaW5kICYmIHR5cGUubG9hZEtpbmQgIT09ICdzY2FsYXInKSB7XG4gICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignVGhlcmUgaXMgYSBub24tc2NhbGFyIHR5cGUgaW4gdGhlIGltcGxpY2l0IGxpc3Qgb2YgYSBzY2hlbWEuIEltcGxpY2l0IHJlc29sdmluZyBvZiBzdWNoIHR5cGVzIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLmNvbXBpbGVkSW1wbGljaXQgPSBjb21waWxlTGlzdCh0aGlzLCAnaW1wbGljaXQnLCBbXSk7XG4gIHRoaXMuY29tcGlsZWRFeHBsaWNpdCA9IGNvbXBpbGVMaXN0KHRoaXMsICdleHBsaWNpdCcsIFtdKTtcbiAgdGhpcy5jb21waWxlZFR5cGVNYXAgID0gY29tcGlsZU1hcCh0aGlzLmNvbXBpbGVkSW1wbGljaXQsIHRoaXMuY29tcGlsZWRFeHBsaWNpdCk7XG59XG5cblxuU2NoZW1hLkRFRkFVTFQgPSBudWxsO1xuXG5cblNjaGVtYS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGVTY2hlbWEoKSB7XG4gIHZhciBzY2hlbWFzLCB0eXBlcztcblxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICBzY2hlbWFzID0gU2NoZW1hLkRFRkFVTFQ7XG4gICAgICB0eXBlcyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgc2NoZW1hcyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIHR5cGVzID0gYXJndW1lbnRzWzFdO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1dyb25nIG51bWJlciBvZiBhcmd1bWVudHMgZm9yIFNjaGVtYS5jcmVhdGUgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHNjaGVtYXMgPSBjb21tb24udG9BcnJheShzY2hlbWFzKTtcbiAgdHlwZXMgPSBjb21tb24udG9BcnJheSh0eXBlcyk7XG5cbiAgaWYgKCFzY2hlbWFzLmV2ZXJ5KGZ1bmN0aW9uIChzY2hlbWEpIHsgcmV0dXJuIHNjaGVtYSBpbnN0YW5jZW9mIFNjaGVtYTsgfSkpIHtcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignU3BlY2lmaWVkIGxpc3Qgb2Ygc3VwZXIgc2NoZW1hcyAob3IgYSBzaW5nbGUgU2NoZW1hIG9iamVjdCkgY29udGFpbnMgYSBub24tU2NoZW1hIG9iamVjdC4nKTtcbiAgfVxuXG4gIGlmICghdHlwZXMuZXZlcnkoZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIHR5cGUgaW5zdGFuY2VvZiBUeXBlOyB9KSkge1xuICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdTcGVjaWZpZWQgbGlzdCBvZiBZQU1MIHR5cGVzIChvciBhIHNpbmdsZSBUeXBlIG9iamVjdCkgY29udGFpbnMgYSBub24tVHlwZSBvYmplY3QuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNjaGVtYSh7XG4gICAgaW5jbHVkZTogc2NoZW1hcyxcbiAgICBleHBsaWNpdDogdHlwZXNcbiAgfSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NoZW1hO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnN0cicsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogJyc7IH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnNlcScsIHtcbiAga2luZDogJ3NlcXVlbmNlJyxcbiAgY29uc3RydWN0OiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiBbXTsgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6bWFwJywge1xuICBraW5kOiAnbWFwcGluZycsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDoge307IH1cbn0pO1xuIiwgIi8vIFN0YW5kYXJkIFlBTUwncyBGYWlsc2FmZSBzY2hlbWEuXG4vLyBodHRwOi8vd3d3LnlhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI4MDIzNDZcblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGV4cGxpY2l0OiBbXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9zdHInKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL3NlcScpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvbWFwJylcbiAgXVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxOdWxsKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBtYXggPSBkYXRhLmxlbmd0aDtcblxuICByZXR1cm4gKG1heCA9PT0gMSAmJiBkYXRhID09PSAnficpIHx8XG4gICAgICAgICAobWF4ID09PSA0ICYmIChkYXRhID09PSAnbnVsbCcgfHwgZGF0YSA9PT0gJ051bGwnIHx8IGRhdGEgPT09ICdOVUxMJykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PT0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6bnVsbCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sTnVsbCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sTnVsbCxcbiAgcHJlZGljYXRlOiBpc051bGwsXG4gIHJlcHJlc2VudDoge1xuICAgIGNhbm9uaWNhbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ34nOyAgICB9LFxuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ251bGwnOyB9LFxuICAgIHVwcGVyY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ05VTEwnOyB9LFxuICAgIGNhbWVsY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ051bGwnOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sQm9vbGVhbihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG1heCA9IGRhdGEubGVuZ3RoO1xuXG4gIHJldHVybiAobWF4ID09PSA0ICYmIChkYXRhID09PSAndHJ1ZScgfHwgZGF0YSA9PT0gJ1RydWUnIHx8IGRhdGEgPT09ICdUUlVFJykpIHx8XG4gICAgICAgICAobWF4ID09PSA1ICYmIChkYXRhID09PSAnZmFsc2UnIHx8IGRhdGEgPT09ICdGYWxzZScgfHwgZGF0YSA9PT0gJ0ZBTFNFJykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sQm9vbGVhbihkYXRhKSB7XG4gIHJldHVybiBkYXRhID09PSAndHJ1ZScgfHxcbiAgICAgICAgIGRhdGEgPT09ICdUcnVlJyB8fFxuICAgICAgICAgZGF0YSA9PT0gJ1RSVUUnO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpib29sJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxCb29sZWFuLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxCb29sZWFuLFxuICBwcmVkaWNhdGU6IGlzQm9vbGVhbixcbiAgcmVwcmVzZW50OiB7XG4gICAgbG93ZXJjYXNlOiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgPyAndHJ1ZScgOiAnZmFsc2UnOyB9LFxuICAgIHVwcGVyY2FzZTogZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ID8gJ1RSVUUnIDogJ0ZBTFNFJzsgfSxcbiAgICBjYW1lbGNhc2U6IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCA/ICdUcnVlJyA6ICdGYWxzZSc7IH1cbiAgfSxcbiAgZGVmYXVsdFN0eWxlOiAnbG93ZXJjYXNlJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi4vY29tbW9uJyk7XG52YXIgVHlwZSAgID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5mdW5jdGlvbiBpc0hleENvZGUoYykge1xuICByZXR1cm4gKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHx8XG4gICAgICAgICAoKDB4NDEvKiBBICovIDw9IGMpICYmIChjIDw9IDB4NDYvKiBGICovKSkgfHxcbiAgICAgICAgICgoMHg2MS8qIGEgKi8gPD0gYykgJiYgKGMgPD0gMHg2Ni8qIGYgKi8pKTtcbn1cblxuZnVuY3Rpb24gaXNPY3RDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzNy8qIDcgKi8pKTtcbn1cblxuZnVuY3Rpb24gaXNEZWNDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxJbnRlZ2VyKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICB2YXIgbWF4ID0gZGF0YS5sZW5ndGgsXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBoYXNEaWdpdHMgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIGlmICghbWF4KSByZXR1cm4gZmFsc2U7XG5cbiAgY2ggPSBkYXRhW2luZGV4XTtcblxuICAvLyBzaWduXG4gIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICBjaCA9IGRhdGFbKytpbmRleF07XG4gIH1cblxuICBpZiAoY2ggPT09ICcwJykge1xuICAgIC8vIDBcbiAgICBpZiAoaW5kZXggKyAxID09PSBtYXgpIHJldHVybiB0cnVlO1xuICAgIGNoID0gZGF0YVsrK2luZGV4XTtcblxuICAgIC8vIGJhc2UgMiwgYmFzZSA4LCBiYXNlIDE2XG5cbiAgICBpZiAoY2ggPT09ICdiJykge1xuICAgICAgLy8gYmFzZSAyXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgY2ggPSBkYXRhW2luZGV4XTtcbiAgICAgICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoY2ggIT09ICcwJyAmJiBjaCAhPT0gJzEnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzRGlnaXRzICYmIGNoICE9PSAnXyc7XG4gICAgfVxuXG5cbiAgICBpZiAoY2ggPT09ICd4Jykge1xuICAgICAgLy8gYmFzZSAxNlxuICAgICAgaW5kZXgrKztcblxuICAgICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFpc0hleENvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNEaWdpdHMgJiYgY2ggIT09ICdfJztcbiAgICB9XG5cbiAgICAvLyBiYXNlIDhcbiAgICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgICBpZiAoIWlzT2N0Q29kZShkYXRhLmNoYXJDb2RlQXQoaW5kZXgpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0RpZ2l0cyAmJiBjaCAhPT0gJ18nO1xuICB9XG5cbiAgLy8gYmFzZSAxMCAoZXhjZXB0IDApIG9yIGJhc2UgNjBcblxuICAvLyB2YWx1ZSBzaG91bGQgbm90IHN0YXJ0IHdpdGggYF9gO1xuICBpZiAoY2ggPT09ICdfJykgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgIGlmIChjaCA9PT0gJzonKSBicmVhaztcbiAgICBpZiAoIWlzRGVjQ29kZShkYXRhLmNoYXJDb2RlQXQoaW5kZXgpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICB9XG5cbiAgLy8gU2hvdWxkIGhhdmUgZGlnaXRzIGFuZCBzaG91bGQgbm90IGVuZCB3aXRoIGBfYFxuICBpZiAoIWhhc0RpZ2l0cyB8fCBjaCA9PT0gJ18nKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gaWYgIWJhc2U2MCAtIGRvbmU7XG4gIGlmIChjaCAhPT0gJzonKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBiYXNlNjAgYWxtb3N0IG5vdCB1c2VkLCBubyBuZWVkcyB0byBvcHRpbWl6ZVxuICByZXR1cm4gL14oOlswLTVdP1swLTldKSskLy50ZXN0KGRhdGEuc2xpY2UoaW5kZXgpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEludGVnZXIoZGF0YSkge1xuICB2YXIgdmFsdWUgPSBkYXRhLCBzaWduID0gMSwgY2gsIGJhc2UsIGRpZ2l0cyA9IFtdO1xuXG4gIGlmICh2YWx1ZS5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9fL2csICcnKTtcbiAgfVxuXG4gIGNoID0gdmFsdWVbMF07XG5cbiAgaWYgKGNoID09PSAnLScgfHwgY2ggPT09ICcrJykge1xuICAgIGlmIChjaCA9PT0gJy0nKSBzaWduID0gLTE7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKTtcbiAgICBjaCA9IHZhbHVlWzBdO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnMCcpIHJldHVybiAwO1xuXG4gIGlmIChjaCA9PT0gJzAnKSB7XG4gICAgaWYgKHZhbHVlWzFdID09PSAnYicpIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIDIpO1xuICAgIGlmICh2YWx1ZVsxXSA9PT0gJ3gnKSByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLCAxNik7XG4gICAgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZSwgOCk7XG4gIH1cblxuICBpZiAodmFsdWUuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHZhbHVlLnNwbGl0KCc6JykuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgZGlnaXRzLnVuc2hpZnQocGFyc2VJbnQodiwgMTApKTtcbiAgICB9KTtcblxuICAgIHZhbHVlID0gMDtcbiAgICBiYXNlID0gMTtcblxuICAgIGRpZ2l0cy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICB2YWx1ZSArPSAoZCAqIGJhc2UpO1xuICAgICAgYmFzZSAqPSA2MDtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWduICogdmFsdWU7XG5cbiAgfVxuXG4gIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUsIDEwKTtcbn1cblxuZnVuY3Rpb24gaXNJbnRlZ2VyKG9iamVjdCkge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiZcbiAgICAgICAgIChvYmplY3QgJSAxID09PSAwICYmICFjb21tb24uaXNOZWdhdGl2ZVplcm8ob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmludCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sSW50ZWdlcixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sSW50ZWdlcixcbiAgcHJlZGljYXRlOiBpc0ludGVnZXIsXG4gIHJlcHJlc2VudDoge1xuICAgIGJpbmFyeTogICAgICBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogPj0gMCA/ICcwYicgKyBvYmoudG9TdHJpbmcoMikgOiAnLTBiJyArIG9iai50b1N0cmluZygyKS5zbGljZSgxKTsgfSxcbiAgICBvY3RhbDogICAgICAgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMCcgICsgb2JqLnRvU3RyaW5nKDgpIDogJy0wJyAgKyBvYmoudG9TdHJpbmcoOCkuc2xpY2UoMSk7IH0sXG4gICAgZGVjaW1hbDogICAgIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai50b1N0cmluZygxMCk7IH0sXG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIGhleGFkZWNpbWFsOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogPj0gMCA/ICcweCcgKyBvYmoudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgOiAgJy0weCcgKyBvYmoudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkuc2xpY2UoMSk7IH1cbiAgfSxcbiAgZGVmYXVsdFN0eWxlOiAnZGVjaW1hbCcsXG4gIHN0eWxlQWxpYXNlczoge1xuICAgIGJpbmFyeTogICAgICBbIDIsICAnYmluJyBdLFxuICAgIG9jdGFsOiAgICAgICBbIDgsICAnb2N0JyBdLFxuICAgIGRlY2ltYWw6ICAgICBbIDEwLCAnZGVjJyBdLFxuICAgIGhleGFkZWNpbWFsOiBbIDE2LCAnaGV4JyBdXG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4uL2NvbW1vbicpO1xudmFyIFR5cGUgICA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxudmFyIFlBTUxfRkxPQVRfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gIC8vIDIuNWU0LCAyLjUgYW5kIGludGVnZXJzXG4gICdeKD86Wy0rXT8oPzowfFsxLTldWzAtOV9dKikoPzpcXFxcLlswLTlfXSopPyg/OltlRV1bLStdP1swLTldKyk/JyArXG4gIC8vIC4yZTQsIC4yXG4gIC8vIHNwZWNpYWwgY2FzZSwgc2VlbXMgbm90IGZyb20gc3BlY1xuICAnfFxcXFwuWzAtOV9dKyg/OltlRV1bLStdP1swLTldKyk/JyArXG4gIC8vIDIwOjU5XG4gICd8Wy0rXT9bMC05XVswLTlfXSooPzo6WzAtNV0/WzAtOV0pK1xcXFwuWzAtOV9dKicgK1xuICAvLyAuaW5mXG4gICd8Wy0rXT9cXFxcLig/OmluZnxJbmZ8SU5GKScgK1xuICAvLyAubmFuXG4gICd8XFxcXC4oPzpuYW58TmFOfE5BTikpJCcpO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEZsb2F0KGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoIVlBTUxfRkxPQVRfUEFUVEVSTi50ZXN0KGRhdGEpIHx8XG4gICAgICAvLyBRdWljayBoYWNrIHRvIG5vdCBhbGxvdyBpbnRlZ2VycyBlbmQgd2l0aCBgX2BcbiAgICAgIC8vIFByb2JhYmx5IHNob3VsZCB1cGRhdGUgcmVnZXhwICYgY2hlY2sgc3BlZWRcbiAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAxXSA9PT0gJ18nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxGbG9hdChkYXRhKSB7XG4gIHZhciB2YWx1ZSwgc2lnbiwgYmFzZSwgZGlnaXRzO1xuXG4gIHZhbHVlICA9IGRhdGEucmVwbGFjZSgvXy9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgc2lnbiAgID0gdmFsdWVbMF0gPT09ICctJyA/IC0xIDogMTtcbiAgZGlnaXRzID0gW107XG5cbiAgaWYgKCcrLScuaW5kZXhPZih2YWx1ZVswXSkgPj0gMCkge1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBpZiAodmFsdWUgPT09ICcuaW5mJykge1xuICAgIHJldHVybiAoc2lnbiA9PT0gMSkgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJy5uYW4nKSB7XG4gICAgcmV0dXJuIE5hTjtcblxuICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJzonKSA+PSAwKSB7XG4gICAgdmFsdWUuc3BsaXQoJzonKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBkaWdpdHMudW5zaGlmdChwYXJzZUZsb2F0KHYsIDEwKSk7XG4gICAgfSk7XG5cbiAgICB2YWx1ZSA9IDAuMDtcbiAgICBiYXNlID0gMTtcblxuICAgIGRpZ2l0cy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICB2YWx1ZSArPSBkICogYmFzZTtcbiAgICAgIGJhc2UgKj0gNjA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbiAqIHZhbHVlO1xuXG4gIH1cbiAgcmV0dXJuIHNpZ24gKiBwYXJzZUZsb2F0KHZhbHVlLCAxMCk7XG59XG5cblxudmFyIFNDSUVOVElGSUNfV0lUSE9VVF9ET1QgPSAvXlstK10/WzAtOV0rZS87XG5cbmZ1bmN0aW9uIHJlcHJlc2VudFlhbWxGbG9hdChvYmplY3QsIHN0eWxlKSB7XG4gIHZhciByZXM7XG5cbiAgaWYgKGlzTmFOKG9iamVjdCkpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICBjYXNlICdsb3dlcmNhc2UnOiByZXR1cm4gJy5uYW4nO1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzogcmV0dXJuICcuTkFOJztcbiAgICAgIGNhc2UgJ2NhbWVsY2FzZSc6IHJldHVybiAnLk5hTic7XG4gICAgfVxuICB9IGVsc2UgaWYgKE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA9PT0gb2JqZWN0KSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgY2FzZSAnbG93ZXJjYXNlJzogcmV0dXJuICcuaW5mJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLklORic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy5JbmYnO1xuICAgIH1cbiAgfSBlbHNlIGlmIChOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgPT09IG9iamVjdCkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6IHJldHVybiAnLS5pbmYnO1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzogcmV0dXJuICctLklORic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy0uSW5mJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpIHtcbiAgICByZXR1cm4gJy0wLjAnO1xuICB9XG5cbiAgcmVzID0gb2JqZWN0LnRvU3RyaW5nKDEwKTtcblxuICAvLyBKUyBzdHJpbmdpZmllciBjYW4gYnVpbGQgc2NpZW50aWZpYyBmb3JtYXQgd2l0aG91dCBkb3RzOiA1ZS0xMDAsXG4gIC8vIHdoaWxlIFlBTUwgcmVxdXJlcyBkb3Q6IDUuZS0xMDAuIEZpeCBpdCB3aXRoIHNpbXBsZSBoYWNrXG5cbiAgcmV0dXJuIFNDSUVOVElGSUNfV0lUSE9VVF9ET1QudGVzdChyZXMpID8gcmVzLnJlcGxhY2UoJ2UnLCAnLmUnKSA6IHJlcztcbn1cblxuZnVuY3Rpb24gaXNGbG9hdChvYmplY3QpIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgTnVtYmVyXScpICYmXG4gICAgICAgICAob2JqZWN0ICUgMSAhPT0gMCB8fCBjb21tb24uaXNOZWdhdGl2ZVplcm8ob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmZsb2F0Jywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxGbG9hdCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sRmxvYXQsXG4gIHByZWRpY2F0ZTogaXNGbG9hdCxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRZYW1sRmxvYXQsXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuIiwgIi8vIFN0YW5kYXJkIFlBTUwncyBKU09OIHNjaGVtYS5cbi8vIGh0dHA6Ly93d3cueWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2lkMjgwMzIzMVxuLy9cbi8vIE5PVEU6IEpTLVlBTUwgZG9lcyBub3Qgc3VwcG9ydCBzY2hlbWEtc3BlY2lmaWMgdGFnIHJlc29sdXRpb24gcmVzdHJpY3Rpb25zLlxuLy8gU28sIHRoaXMgc2NoZW1hIGlzIG5vdCBzdWNoIHN0cmljdCBhcyBkZWZpbmVkIGluIHRoZSBZQU1MIHNwZWNpZmljYXRpb24uXG4vLyBJdCBhbGxvd3MgbnVtYmVycyBpbiBiaW5hcnkgbm90YWlvbiwgdXNlIGBOdWxsYCBhbmQgYE5VTExgIGFzIGBudWxsYCwgZXRjLlxuXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi4vc2NoZW1hJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU2NoZW1hKHtcbiAgaW5jbHVkZTogW1xuICAgIHJlcXVpcmUoJy4vZmFpbHNhZmUnKVxuICBdLFxuICBpbXBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvbnVsbCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvYm9vbCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvaW50JyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9mbG9hdCcpXG4gIF1cbn0pO1xuIiwgIi8vIFN0YW5kYXJkIFlBTUwncyBDb3JlIHNjaGVtYS5cbi8vIGh0dHA6Ly93d3cueWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2lkMjgwNDkyM1xuLy9cbi8vIE5PVEU6IEpTLVlBTUwgZG9lcyBub3Qgc3VwcG9ydCBzY2hlbWEtc3BlY2lmaWMgdGFnIHJlc29sdXRpb24gcmVzdHJpY3Rpb25zLlxuLy8gU28sIENvcmUgc2NoZW1hIGhhcyBubyBkaXN0aW5jdGlvbnMgZnJvbSBKU09OIHNjaGVtYSBpcyBKUy1ZQU1MLlxuXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi4vc2NoZW1hJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgU2NoZW1hKHtcbiAgaW5jbHVkZTogW1xuICAgIHJlcXVpcmUoJy4vanNvbicpXG4gIF1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBZQU1MX0RBVEVfUkVHRVhQID0gbmV3IFJlZ0V4cChcbiAgJ14oWzAtOV1bMC05XVswLTldWzAtOV0pJyAgICAgICAgICArIC8vIFsxXSB5ZWFyXG4gICctKFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbMl0gbW9udGhcbiAgJy0oWzAtOV1bMC05XSkkJyk7ICAgICAgICAgICAgICAgICAgIC8vIFszXSBkYXlcblxudmFyIFlBTUxfVElNRVNUQU1QX1JFR0VYUCA9IG5ldyBSZWdFeHAoXG4gICdeKFswLTldWzAtOV1bMC05XVswLTldKScgICAgICAgICAgKyAvLyBbMV0geWVhclxuICAnLShbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICsgLy8gWzJdIG1vbnRoXG4gICctKFswLTldWzAtOV0/KScgICAgICAgICAgICAgICAgICAgKyAvLyBbM10gZGF5XG4gICcoPzpbVHRdfFsgXFxcXHRdKyknICAgICAgICAgICAgICAgICArIC8vIC4uLlxuICAnKFswLTldWzAtOV0/KScgICAgICAgICAgICAgICAgICAgICsgLy8gWzRdIGhvdXJcbiAgJzooWzAtOV1bMC05XSknICAgICAgICAgICAgICAgICAgICArIC8vIFs1XSBtaW51dGVcbiAgJzooWzAtOV1bMC05XSknICAgICAgICAgICAgICAgICAgICArIC8vIFs2XSBzZWNvbmRcbiAgJyg/OlxcXFwuKFswLTldKikpPycgICAgICAgICAgICAgICAgICsgLy8gWzddIGZyYWN0aW9uXG4gICcoPzpbIFxcXFx0XSooWnwoWy0rXSkoWzAtOV1bMC05XT8pJyArIC8vIFs4XSB0eiBbOV0gdHpfc2lnbiBbMTBdIHR6X2hvdXJcbiAgJyg/OjooWzAtOV1bMC05XSkpPykpPyQnKTsgICAgICAgICAgIC8vIFsxMV0gdHpfbWludXRlXG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sVGltZXN0YW1wKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKFlBTUxfREFURV9SRUdFWFAuZXhlYyhkYXRhKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIGlmIChZQU1MX1RJTUVTVEFNUF9SRUdFWFAuZXhlYyhkYXRhKSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFRpbWVzdGFtcChkYXRhKSB7XG4gIHZhciBtYXRjaCwgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uID0gMCxcbiAgICAgIGRlbHRhID0gbnVsbCwgdHpfaG91ciwgdHpfbWludXRlLCBkYXRlO1xuXG4gIG1hdGNoID0gWUFNTF9EQVRFX1JFR0VYUC5leGVjKGRhdGEpO1xuICBpZiAobWF0Y2ggPT09IG51bGwpIG1hdGNoID0gWUFNTF9USU1FU1RBTVBfUkVHRVhQLmV4ZWMoZGF0YSk7XG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ0RhdGUgcmVzb2x2ZSBlcnJvcicpO1xuXG4gIC8vIG1hdGNoOiBbMV0geWVhciBbMl0gbW9udGggWzNdIGRheVxuXG4gIHllYXIgPSArKG1hdGNoWzFdKTtcbiAgbW9udGggPSArKG1hdGNoWzJdKSAtIDE7IC8vIEpTIG1vbnRoIHN0YXJ0cyB3aXRoIDBcbiAgZGF5ID0gKyhtYXRjaFszXSk7XG5cbiAgaWYgKCFtYXRjaFs0XSkgeyAvLyBubyBob3VyXG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXkpKTtcbiAgfVxuXG4gIC8vIG1hdGNoOiBbNF0gaG91ciBbNV0gbWludXRlIFs2XSBzZWNvbmQgWzddIGZyYWN0aW9uXG5cbiAgaG91ciA9ICsobWF0Y2hbNF0pO1xuICBtaW51dGUgPSArKG1hdGNoWzVdKTtcbiAgc2Vjb25kID0gKyhtYXRjaFs2XSk7XG5cbiAgaWYgKG1hdGNoWzddKSB7XG4gICAgZnJhY3Rpb24gPSBtYXRjaFs3XS5zbGljZSgwLCAzKTtcbiAgICB3aGlsZSAoZnJhY3Rpb24ubGVuZ3RoIDwgMykgeyAvLyBtaWxsaS1zZWNvbmRzXG4gICAgICBmcmFjdGlvbiArPSAnMCc7XG4gICAgfVxuICAgIGZyYWN0aW9uID0gK2ZyYWN0aW9uO1xuICB9XG5cbiAgLy8gbWF0Y2g6IFs4XSB0eiBbOV0gdHpfc2lnbiBbMTBdIHR6X2hvdXIgWzExXSB0el9taW51dGVcblxuICBpZiAobWF0Y2hbOV0pIHtcbiAgICB0el9ob3VyID0gKyhtYXRjaFsxMF0pO1xuICAgIHR6X21pbnV0ZSA9ICsobWF0Y2hbMTFdIHx8IDApO1xuICAgIGRlbHRhID0gKHR6X2hvdXIgKiA2MCArIHR6X21pbnV0ZSkgKiA2MDAwMDsgLy8gZGVsdGEgaW4gbWlsaS1zZWNvbmRzXG4gICAgaWYgKG1hdGNoWzldID09PSAnLScpIGRlbHRhID0gLWRlbHRhO1xuICB9XG5cbiAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbikpO1xuXG4gIGlmIChkZWx0YSkgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpIC0gZGVsdGEpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRZYW1sVGltZXN0YW1wKG9iamVjdCAvKiwgc3R5bGUqLykge1xuICByZXR1cm4gb2JqZWN0LnRvSVNPU3RyaW5nKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnRpbWVzdGFtcCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sVGltZXN0YW1wLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxUaW1lc3RhbXAsXG4gIGluc3RhbmNlT2Y6IERhdGUsXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbFRpbWVzdGFtcFxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxNZXJnZShkYXRhKSB7XG4gIHJldHVybiBkYXRhID09PSAnPDwnIHx8IGRhdGEgPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm1lcmdlJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxNZXJnZVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UqL1xuXG52YXIgTm9kZUJ1ZmZlcjtcblxudHJ5IHtcbiAgLy8gQSB0cmljayBmb3IgYnJvd3NlcmlmaWVkIHZlcnNpb24sIHRvIG5vdCBpbmNsdWRlIGBCdWZmZXJgIHNoaW1cbiAgdmFyIF9yZXF1aXJlID0gcmVxdWlyZTtcbiAgTm9kZUJ1ZmZlciA9IF9yZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG59IGNhdGNoIChfXykge31cblxudmFyIFR5cGUgICAgICAgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cblxuLy8gWyA2NCwgNjUsIDY2IF0gLT4gWyBwYWRkaW5nLCBDUiwgTEYgXVxudmFyIEJBU0U2NF9NQVAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cXG5cXHInO1xuXG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sQmluYXJ5KGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICB2YXIgY29kZSwgaWR4LCBiaXRsZW4gPSAwLCBtYXggPSBkYXRhLmxlbmd0aCwgbWFwID0gQkFTRTY0X01BUDtcblxuICAvLyBDb252ZXJ0IG9uZSBieSBvbmUuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGNvZGUgPSBtYXAuaW5kZXhPZihkYXRhLmNoYXJBdChpZHgpKTtcblxuICAgIC8vIFNraXAgQ1IvTEZcbiAgICBpZiAoY29kZSA+IDY0KSBjb250aW51ZTtcblxuICAgIC8vIEZhaWwgb24gaWxsZWdhbCBjaGFyYWN0ZXJzXG4gICAgaWYgKGNvZGUgPCAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBiaXRsZW4gKz0gNjtcbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBhbnkgYml0cyBsZWZ0LCBzb3VyY2Ugd2FzIGNvcnJ1cHRlZFxuICByZXR1cm4gKGJpdGxlbiAlIDgpID09PSAwO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sQmluYXJ5KGRhdGEpIHtcbiAgdmFyIGlkeCwgdGFpbGJpdHMsXG4gICAgICBpbnB1dCA9IGRhdGEucmVwbGFjZSgvW1xcclxcbj1dL2csICcnKSwgLy8gcmVtb3ZlIENSL0xGICYgcGFkZGluZyB0byBzaW1wbGlmeSBzY2FuXG4gICAgICBtYXggPSBpbnB1dC5sZW5ndGgsXG4gICAgICBtYXAgPSBCQVNFNjRfTUFQLFxuICAgICAgYml0cyA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICAvLyBDb2xsZWN0IGJ5IDYqNCBiaXRzICgzIGJ5dGVzKVxuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgNCA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxNikgJiAweEZGKTtcbiAgICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDgpICYgMHhGRik7XG4gICAgICByZXN1bHQucHVzaChiaXRzICYgMHhGRik7XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDYpIHwgbWFwLmluZGV4T2YoaW5wdXQuY2hhckF0KGlkeCkpO1xuICB9XG5cbiAgLy8gRHVtcCB0YWlsXG5cbiAgdGFpbGJpdHMgPSAobWF4ICUgNCkgKiA2O1xuXG4gIGlmICh0YWlsYml0cyA9PT0gMCkge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDE2KSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDgpICYgMHhGRik7XG4gICAgcmVzdWx0LnB1c2goYml0cyAmIDB4RkYpO1xuICB9IGVsc2UgaWYgKHRhaWxiaXRzID09PSAxOCkge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDEwKSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDIpICYgMHhGRik7XG4gIH0gZWxzZSBpZiAodGFpbGJpdHMgPT09IDEyKSB7XG4gICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gNCkgJiAweEZGKTtcbiAgfVxuXG4gIC8vIFdyYXAgaW50byBCdWZmZXIgZm9yIE5vZGVKUyBhbmQgbGVhdmUgQXJyYXkgZm9yIGJyb3dzZXJcbiAgaWYgKE5vZGVCdWZmZXIpIHtcbiAgICAvLyBTdXBwb3J0IG5vZGUgNi4rIEJ1ZmZlciBBUEkgd2hlbiBhdmFpbGFibGVcbiAgICByZXR1cm4gTm9kZUJ1ZmZlci5mcm9tID8gTm9kZUJ1ZmZlci5mcm9tKHJlc3VsdCkgOiBuZXcgTm9kZUJ1ZmZlcihyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50WWFtbEJpbmFyeShvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgdmFyIHJlc3VsdCA9ICcnLCBiaXRzID0gMCwgaWR4LCB0YWlsLFxuICAgICAgbWF4ID0gb2JqZWN0Lmxlbmd0aCxcbiAgICAgIG1hcCA9IEJBU0U2NF9NQVA7XG5cbiAgLy8gQ29udmVydCBldmVyeSB0aHJlZSBieXRlcyB0byA0IEFTQ0lJIGNoYXJhY3RlcnMuXG5cbiAgZm9yIChpZHggPSAwOyBpZHggPCBtYXg7IGlkeCsrKSB7XG4gICAgaWYgKChpZHggJSAzID09PSAwKSAmJiBpZHgpIHtcbiAgICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTgpICYgMHgzRl07XG4gICAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDEyKSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA2KSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFtiaXRzICYgMHgzRl07XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDgpICsgb2JqZWN0W2lkeF07XG4gIH1cblxuICAvLyBEdW1wIHRhaWxcblxuICB0YWlsID0gbWF4ICUgMztcblxuICBpZiAodGFpbCA9PT0gMCkge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTgpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDYpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFtiaXRzICYgMHgzRl07XG4gIH0gZWxzZSBpZiAodGFpbCA9PT0gMikge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTApICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA0KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPDwgMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgfSBlbHNlIGlmICh0YWlsID09PSAxKSB7XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAyKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPDwgNCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgICByZXN1bHQgKz0gbWFwWzY0XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQmluYXJ5KG9iamVjdCkge1xuICByZXR1cm4gTm9kZUJ1ZmZlciAmJiBOb2RlQnVmZmVyLmlzQnVmZmVyKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmJpbmFyeScsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sQmluYXJ5LFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxCaW5hcnksXG4gIHByZWRpY2F0ZTogaXNCaW5hcnksXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbEJpbmFyeVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxudmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX3RvU3RyaW5nICAgICAgID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxPbWFwKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBvYmplY3RLZXlzID0gW10sIGluZGV4LCBsZW5ndGgsIHBhaXIsIHBhaXJLZXksIHBhaXJIYXNLZXksXG4gICAgICBvYmplY3QgPSBkYXRhO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuICAgIHBhaXJIYXNLZXkgPSBmYWxzZTtcblxuICAgIGlmIChfdG9TdHJpbmcuY2FsbChwYWlyKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAocGFpcktleSBpbiBwYWlyKSB7XG4gICAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwocGFpciwgcGFpcktleSkpIHtcbiAgICAgICAgaWYgKCFwYWlySGFzS2V5KSBwYWlySGFzS2V5ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYWlySGFzS2V5KSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAob2JqZWN0S2V5cy5pbmRleE9mKHBhaXJLZXkpID09PSAtMSkgb2JqZWN0S2V5cy5wdXNoKHBhaXJLZXkpO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxPbWFwKGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm9tYXAnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sT21hcCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sT21hcFxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxudmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sUGFpcnMoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGluZGV4LCBsZW5ndGgsIHBhaXIsIGtleXMsIHJlc3VsdCxcbiAgICAgIG9iamVjdCA9IGRhdGE7XG5cbiAgcmVzdWx0ID0gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAgaWYgKF90b1N0cmluZy5jYWxsKHBhaXIpICE9PSAnW29iamVjdCBPYmplY3RdJykgcmV0dXJuIGZhbHNlO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHBhaXIpO1xuXG4gICAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXN1bHRbaW5kZXhdID0gWyBrZXlzWzBdLCBwYWlyW2tleXNbMF1dIF07XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFBhaXJzKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBbXTtcblxuICB2YXIgaW5kZXgsIGxlbmd0aCwgcGFpciwga2V5cywgcmVzdWx0LFxuICAgICAgb2JqZWN0ID0gZGF0YTtcblxuICByZXN1bHQgPSBuZXcgQXJyYXkob2JqZWN0Lmxlbmd0aCk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpciA9IG9iamVjdFtpbmRleF07XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMocGFpcik7XG5cbiAgICByZXN1bHRbaW5kZXhdID0gWyBrZXlzWzBdLCBwYWlyW2tleXNbMF1dIF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpwYWlycycsIHtcbiAga2luZDogJ3NlcXVlbmNlJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxQYWlycyxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sUGFpcnNcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFNldChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIga2V5LCBvYmplY3QgPSBkYXRhO1xuXG4gIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIGlmIChvYmplY3Rba2V5XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sU2V0KGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnNldCcsIHtcbiAga2luZDogJ21hcHBpbmcnLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbFNldCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sU2V0XG59KTtcbiIsICIvLyBKUy1ZQU1MJ3MgZGVmYXVsdCBzY2hlbWEgZm9yIGBzYWZlTG9hZGAgZnVuY3Rpb24uXG4vLyBJdCBpcyBub3QgZGVzY3JpYmVkIGluIHRoZSBZQU1MIHNwZWNpZmljYXRpb24uXG4vL1xuLy8gVGhpcyBzY2hlbWEgaXMgYmFzZWQgb24gc3RhbmRhcmQgWUFNTCdzIENvcmUgc2NoZW1hIGFuZCBpbmNsdWRlcyBtb3N0IG9mXG4vLyBleHRyYSB0eXBlcyBkZXNjcmliZWQgYXQgWUFNTCB0YWcgcmVwb3NpdG9yeS4gKGh0dHA6Ly95YW1sLm9yZy90eXBlLylcblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2NvcmUnKVxuICBdLFxuICBpbXBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvdGltZXN0YW1wJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9tZXJnZScpXG4gIF0sXG4gIGV4cGxpY2l0OiBbXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9iaW5hcnknKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL29tYXAnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL3BhaXJzJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9zZXQnKVxuICBdXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vLi4vdHlwZScpO1xuXG5mdW5jdGlvbiByZXNvbHZlSmF2YXNjcmlwdFVuZGVmaW5lZCgpIHtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdEphdmFzY3JpcHRVbmRlZmluZWQoKSB7XG4gIC8qZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkKi9cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50SmF2YXNjcmlwdFVuZGVmaW5lZCgpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpqcy91bmRlZmluZWQnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlSmF2YXNjcmlwdFVuZGVmaW5lZCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RKYXZhc2NyaXB0VW5kZWZpbmVkLFxuICBwcmVkaWNhdGU6IGlzVW5kZWZpbmVkLFxuICByZXByZXNlbnQ6IHJlcHJlc2VudEphdmFzY3JpcHRVbmRlZmluZWRcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi8uLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVKYXZhc2NyaXB0UmVnRXhwKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHJlZ2V4cCA9IGRhdGEsXG4gICAgICB0YWlsICAgPSAvXFwvKFtnaW1dKikkLy5leGVjKGRhdGEpLFxuICAgICAgbW9kaWZpZXJzID0gJyc7XG5cbiAgLy8gaWYgcmVnZXhwIHN0YXJ0cyB3aXRoICcvJyBpdCBjYW4gaGF2ZSBtb2RpZmllcnMgYW5kIG11c3QgYmUgcHJvcGVybHkgY2xvc2VkXG4gIC8vIGAvZm9vL2dpbWAgLSBtb2RpZmllcnMgdGFpbCBjYW4gYmUgbWF4aW11bSAzIGNoYXJzXG4gIGlmIChyZWdleHBbMF0gPT09ICcvJykge1xuICAgIGlmICh0YWlsKSBtb2RpZmllcnMgPSB0YWlsWzFdO1xuXG4gICAgaWYgKG1vZGlmaWVycy5sZW5ndGggPiAzKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gaWYgZXhwcmVzc2lvbiBzdGFydHMgd2l0aCAvLCBpcyBzaG91bGQgYmUgcHJvcGVybHkgdGVybWluYXRlZFxuICAgIGlmIChyZWdleHBbcmVnZXhwLmxlbmd0aCAtIG1vZGlmaWVycy5sZW5ndGggLSAxXSAhPT0gJy8nKSByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SmF2YXNjcmlwdFJlZ0V4cChkYXRhKSB7XG4gIHZhciByZWdleHAgPSBkYXRhLFxuICAgICAgdGFpbCAgID0gL1xcLyhbZ2ltXSopJC8uZXhlYyhkYXRhKSxcbiAgICAgIG1vZGlmaWVycyA9ICcnO1xuXG4gIC8vIGAvZm9vL2dpbWAgLSB0YWlsIGNhbiBiZSBtYXhpbXVtIDQgY2hhcnNcbiAgaWYgKHJlZ2V4cFswXSA9PT0gJy8nKSB7XG4gICAgaWYgKHRhaWwpIG1vZGlmaWVycyA9IHRhaWxbMV07XG4gICAgcmVnZXhwID0gcmVnZXhwLnNsaWNlKDEsIHJlZ2V4cC5sZW5ndGggLSBtb2RpZmllcnMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleHAsIG1vZGlmaWVycyk7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudEphdmFzY3JpcHRSZWdFeHAob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHZhciByZXN1bHQgPSAnLycgKyBvYmplY3Quc291cmNlICsgJy8nO1xuXG4gIGlmIChvYmplY3QuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAob2JqZWN0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKG9iamVjdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpqcy9yZWdleHAnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlSmF2YXNjcmlwdFJlZ0V4cCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RKYXZhc2NyaXB0UmVnRXhwLFxuICBwcmVkaWNhdGU6IGlzUmVnRXhwLFxuICByZXByZXNlbnQ6IHJlcHJlc2VudEphdmFzY3JpcHRSZWdFeHBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGVzcHJpbWE7XG5cbi8vIEJyb3dzZXJpZmllZCB2ZXJzaW9uIGRvZXMgbm90IGhhdmUgZXNwcmltYVxuLy9cbi8vIDEuIEZvciBub2RlLmpzIGp1c3QgcmVxdWlyZSBtb2R1bGUgYXMgZGVwc1xuLy8gMi4gRm9yIGJyb3dzZXIgdHJ5IHRvIHJlcXVpcmUgbXVkdWxlIHZpYSBleHRlcm5hbCBBTUQgc3lzdGVtLlxuLy8gICAgSWYgbm90IGZvdW5kIC0gdHJ5IHRvIGZhbGxiYWNrIHRvIHdpbmRvdy5lc3ByaW1hLiBJZiBub3Rcbi8vICAgIGZvdW5kIHRvbyAtIHRoZW4gZmFpbCB0byBwYXJzZS5cbi8vXG50cnkge1xuICAvLyB3b3JrYXJvdW5kIHRvIGV4Y2x1ZGUgcGFja2FnZSBmcm9tIGJyb3dzZXJpZnkgbGlzdC5cbiAgdmFyIF9yZXF1aXJlID0gcmVxdWlyZTtcbiAgZXNwcmltYSA9IF9yZXF1aXJlKCdlc3ByaW1hJyk7XG59IGNhdGNoIChfKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuICAvKiBnbG9iYWwgd2luZG93ICovXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZXNwcmltYSA9IHdpbmRvdy5lc3ByaW1hO1xufVxuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uLy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUphdmFzY3JpcHRGdW5jdGlvbihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICB2YXIgc291cmNlID0gJygnICsgZGF0YSArICcpJyxcbiAgICAgICAgYXN0ICAgID0gZXNwcmltYS5wYXJzZShzb3VyY2UsIHsgcmFuZ2U6IHRydWUgfSk7XG5cbiAgICBpZiAoYXN0LnR5cGUgICAgICAgICAgICAgICAgICAgICE9PSAnUHJvZ3JhbScgICAgICAgICAgICAgfHxcbiAgICAgICAgYXN0LmJvZHkubGVuZ3RoICAgICAgICAgICAgICE9PSAxICAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgYXN0LmJvZHlbMF0udHlwZSAgICAgICAgICAgICE9PSAnRXhwcmVzc2lvblN0YXRlbWVudCcgfHxcbiAgICAgICAgKGFzdC5ib2R5WzBdLmV4cHJlc3Npb24udHlwZSAhPT0gJ0Fycm93RnVuY3Rpb25FeHByZXNzaW9uJyAmJlxuICAgICAgICAgIGFzdC5ib2R5WzBdLmV4cHJlc3Npb24udHlwZSAhPT0gJ0Z1bmN0aW9uRXhwcmVzc2lvbicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RKYXZhc2NyaXB0RnVuY3Rpb24oZGF0YSkge1xuICAvKmpzbGludCBldmlsOnRydWUqL1xuXG4gIHZhciBzb3VyY2UgPSAnKCcgKyBkYXRhICsgJyknLFxuICAgICAgYXN0ICAgID0gZXNwcmltYS5wYXJzZShzb3VyY2UsIHsgcmFuZ2U6IHRydWUgfSksXG4gICAgICBwYXJhbXMgPSBbXSxcbiAgICAgIGJvZHk7XG5cbiAgaWYgKGFzdC50eXBlICAgICAgICAgICAgICAgICAgICAhPT0gJ1Byb2dyYW0nICAgICAgICAgICAgIHx8XG4gICAgICBhc3QuYm9keS5sZW5ndGggICAgICAgICAgICAgIT09IDEgICAgICAgICAgICAgICAgICAgICB8fFxuICAgICAgYXN0LmJvZHlbMF0udHlwZSAgICAgICAgICAgICE9PSAnRXhwcmVzc2lvblN0YXRlbWVudCcgfHxcbiAgICAgIChhc3QuYm9keVswXS5leHByZXNzaW9uLnR5cGUgIT09ICdBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicgJiZcbiAgICAgICAgYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi50eXBlICE9PSAnRnVuY3Rpb25FeHByZXNzaW9uJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZXNvbHZlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBhc3QuYm9keVswXS5leHByZXNzaW9uLnBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHBhcmFtcy5wdXNoKHBhcmFtLm5hbWUpO1xuICB9KTtcblxuICBib2R5ID0gYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi5ib2R5LnJhbmdlO1xuXG4gIC8vIEVzcHJpbWEncyByYW5nZXMgaW5jbHVkZSB0aGUgZmlyc3QgJ3snIGFuZCB0aGUgbGFzdCAnfScgY2hhcmFjdGVycyBvblxuICAvLyBmdW5jdGlvbiBleHByZXNzaW9ucy4gU28gY3V0IHRoZW0gb3V0LlxuICBpZiAoYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi5ib2R5LnR5cGUgPT09ICdCbG9ja1N0YXRlbWVudCcpIHtcbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jKi9cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKHBhcmFtcywgc291cmNlLnNsaWNlKGJvZHlbMF0gKyAxLCBib2R5WzFdIC0gMSkpO1xuICB9XG4gIC8vIEVTNiBhcnJvdyBmdW5jdGlvbnMgY2FuIG9taXQgdGhlIEJsb2NrU3RhdGVtZW50LiBJbiB0aGF0IGNhc2UsIGp1c3QgcmV0dXJuXG4gIC8vIHRoZSBib2R5LlxuICAvKmVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jKi9cbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihwYXJhbXMsICdyZXR1cm4gJyArIHNvdXJjZS5zbGljZShib2R5WzBdLCBib2R5WzFdKSk7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudEphdmFzY3JpcHRGdW5jdGlvbihvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmpzL2Z1bmN0aW9uJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZUphdmFzY3JpcHRGdW5jdGlvbixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RKYXZhc2NyaXB0RnVuY3Rpb24sXG4gIHByZWRpY2F0ZTogaXNGdW5jdGlvbixcbiAgcmVwcmVzZW50OiByZXByZXNlbnRKYXZhc2NyaXB0RnVuY3Rpb25cbn0pO1xuIiwgIi8vIEpTLVlBTUwncyBkZWZhdWx0IHNjaGVtYSBmb3IgYGxvYWRgIGZ1bmN0aW9uLlxuLy8gSXQgaXMgbm90IGRlc2NyaWJlZCBpbiB0aGUgWUFNTCBzcGVjaWZpY2F0aW9uLlxuLy9cbi8vIFRoaXMgc2NoZW1hIGlzIGJhc2VkIG9uIEpTLVlBTUwncyBkZWZhdWx0IHNhZmUgc2NoZW1hIGFuZCBpbmNsdWRlc1xuLy8gSmF2YVNjcmlwdC1zcGVjaWZpYyB0eXBlczogISFqcy91bmRlZmluZWQsICEhanMvcmVnZXhwIGFuZCAhIWpzL2Z1bmN0aW9uLlxuLy9cbi8vIEFsc28gdGhpcyBzY2hlbWEgaXMgdXNlZCBhcyBkZWZhdWx0IGJhc2Ugc2NoZW1hIGF0IGBTY2hlbWEuY3JlYXRlYCBmdW5jdGlvbi5cblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NoZW1hLkRFRkFVTFQgPSBuZXcgU2NoZW1hKHtcbiAgaW5jbHVkZTogW1xuICAgIHJlcXVpcmUoJy4vZGVmYXVsdF9zYWZlJylcbiAgXSxcbiAgZXhwbGljaXQ6IFtcbiAgICByZXF1aXJlKCcuLi90eXBlL2pzL3VuZGVmaW5lZCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvanMvcmVnZXhwJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9qcy9mdW5jdGlvbicpXG4gIF1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuLG5vLXVzZS1iZWZvcmUtZGVmaW5lKi9cblxudmFyIGNvbW1vbiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIFlBTUxFeGNlcHRpb24gICAgICAgPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xudmFyIE1hcmsgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL21hcmsnKTtcbnZhciBERUZBVUxUX1NBRkVfU0NIRU1BID0gcmVxdWlyZSgnLi9zY2hlbWEvZGVmYXVsdF9zYWZlJyk7XG52YXIgREVGQVVMVF9GVUxMX1NDSEVNQSA9IHJlcXVpcmUoJy4vc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xuXG5cbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5cbnZhciBDT05URVhUX0ZMT1dfSU4gICA9IDE7XG52YXIgQ09OVEVYVF9GTE9XX09VVCAgPSAyO1xudmFyIENPTlRFWFRfQkxPQ0tfSU4gID0gMztcbnZhciBDT05URVhUX0JMT0NLX09VVCA9IDQ7XG5cblxudmFyIENIT01QSU5HX0NMSVAgID0gMTtcbnZhciBDSE9NUElOR19TVFJJUCA9IDI7XG52YXIgQ0hPTVBJTkdfS0VFUCAgPSAzO1xuXG5cbnZhciBQQVRURVJOX05PTl9QUklOVEFCTEUgICAgICAgICA9IC9bXFx4MDAtXFx4MDhcXHgwQlxceDBDXFx4MEUtXFx4MUZcXHg3Ri1cXHg4NFxceDg2LVxceDlGXFx1RkZGRVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLztcbnZhciBQQVRURVJOX05PTl9BU0NJSV9MSU5FX0JSRUFLUyA9IC9bXFx4ODVcXHUyMDI4XFx1MjAyOV0vO1xudmFyIFBBVFRFUk5fRkxPV19JTkRJQ0FUT1JTICAgICAgID0gL1ssXFxbXFxdXFx7XFx9XS87XG52YXIgUEFUVEVSTl9UQUdfSEFORExFICAgICAgICAgICAgPSAvXig/OiF8ISF8IVthLXpcXC1dKyEpJC9pO1xudmFyIFBBVFRFUk5fVEFHX1VSSSAgICAgICAgICAgICAgID0gL14oPzohfFteLFxcW1xcXVxce1xcfV0pKD86JVswLTlhLWZdezJ9fFswLTlhLXpcXC0jO1xcL1xcPzpAJj1cXCtcXCQsX1xcLiF+XFwqJ1xcKFxcKVxcW1xcXV0pKiQvaTtcblxuXG5mdW5jdGlvbiBfY2xhc3Mob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTsgfVxuXG5mdW5jdGlvbiBpc19FT0woYykge1xuICByZXR1cm4gKGMgPT09IDB4MEEvKiBMRiAqLykgfHwgKGMgPT09IDB4MEQvKiBDUiAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX1dISVRFX1NQQUNFKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDA5LyogVGFiICovKSB8fCAoYyA9PT0gMHgyMC8qIFNwYWNlICovKTtcbn1cblxuZnVuY3Rpb24gaXNfV1NfT1JfRU9MKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDA5LyogVGFiICovKSB8fFxuICAgICAgICAgKGMgPT09IDB4MjAvKiBTcGFjZSAqLykgfHxcbiAgICAgICAgIChjID09PSAweDBBLyogTEYgKi8pIHx8XG4gICAgICAgICAoYyA9PT0gMHgwRC8qIENSICovKTtcbn1cblxuZnVuY3Rpb24gaXNfRkxPV19JTkRJQ0FUT1IoYykge1xuICByZXR1cm4gYyA9PT0gMHgyQy8qICwgKi8gfHxcbiAgICAgICAgIGMgPT09IDB4NUIvKiBbICovIHx8XG4gICAgICAgICBjID09PSAweDVELyogXSAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg3Qi8qIHsgKi8gfHxcbiAgICAgICAgIGMgPT09IDB4N0QvKiB9ICovO1xufVxuXG5mdW5jdGlvbiBmcm9tSGV4Q29kZShjKSB7XG4gIHZhciBsYztcblxuICBpZiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSkge1xuICAgIHJldHVybiBjIC0gMHgzMDtcbiAgfVxuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSovXG4gIGxjID0gYyB8IDB4MjA7XG5cbiAgaWYgKCgweDYxLyogYSAqLyA8PSBsYykgJiYgKGxjIDw9IDB4NjYvKiBmICovKSkge1xuICAgIHJldHVybiBsYyAtIDB4NjEgKyAxMDtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlZEhleExlbihjKSB7XG4gIGlmIChjID09PSAweDc4LyogeCAqLykgeyByZXR1cm4gMjsgfVxuICBpZiAoYyA9PT0gMHg3NS8qIHUgKi8pIHsgcmV0dXJuIDQ7IH1cbiAgaWYgKGMgPT09IDB4NTUvKiBVICovKSB7IHJldHVybiA4OyB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBmcm9tRGVjaW1hbENvZGUoYykge1xuICBpZiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSkge1xuICAgIHJldHVybiBjIC0gMHgzMDtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlRXNjYXBlU2VxdWVuY2UoYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbiAgcmV0dXJuIChjID09PSAweDMwLyogMCAqLykgPyAnXFx4MDAnIDpcbiAgICAgICAgKGMgPT09IDB4NjEvKiBhICovKSA/ICdcXHgwNycgOlxuICAgICAgICAoYyA9PT0gMHg2Mi8qIGIgKi8pID8gJ1xceDA4JyA6XG4gICAgICAgIChjID09PSAweDc0LyogdCAqLykgPyAnXFx4MDknIDpcbiAgICAgICAgKGMgPT09IDB4MDkvKiBUYWIgKi8pID8gJ1xceDA5JyA6XG4gICAgICAgIChjID09PSAweDZFLyogbiAqLykgPyAnXFx4MEEnIDpcbiAgICAgICAgKGMgPT09IDB4NzYvKiB2ICovKSA/ICdcXHgwQicgOlxuICAgICAgICAoYyA9PT0gMHg2Ni8qIGYgKi8pID8gJ1xceDBDJyA6XG4gICAgICAgIChjID09PSAweDcyLyogciAqLykgPyAnXFx4MEQnIDpcbiAgICAgICAgKGMgPT09IDB4NjUvKiBlICovKSA/ICdcXHgxQicgOlxuICAgICAgICAoYyA9PT0gMHgyMC8qIFNwYWNlICovKSA/ICcgJyA6XG4gICAgICAgIChjID09PSAweDIyLyogXCIgKi8pID8gJ1xceDIyJyA6XG4gICAgICAgIChjID09PSAweDJGLyogLyAqLykgPyAnLycgOlxuICAgICAgICAoYyA9PT0gMHg1Qy8qIFxcICovKSA/ICdcXHg1QycgOlxuICAgICAgICAoYyA9PT0gMHg0RS8qIE4gKi8pID8gJ1xceDg1JyA6XG4gICAgICAgIChjID09PSAweDVGLyogXyAqLykgPyAnXFx4QTAnIDpcbiAgICAgICAgKGMgPT09IDB4NEMvKiBMICovKSA/ICdcXHUyMDI4JyA6XG4gICAgICAgIChjID09PSAweDUwLyogUCAqLykgPyAnXFx1MjAyOScgOiAnJztcbn1cblxuZnVuY3Rpb24gY2hhckZyb21Db2RlcG9pbnQoYykge1xuICBpZiAoYyA8PSAweEZGRkYpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgfVxuICAvLyBFbmNvZGUgVVRGLTE2IHN1cnJvZ2F0ZSBwYWlyXG4gIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VURi0xNiNDb2RlX3BvaW50c19VLjJCMDEwMDAwX3RvX1UuMkIxMEZGRkZcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgKChjIC0gMHgwMTAwMDApID4+IDEwKSArIDB4RDgwMCxcbiAgICAoKGMgLSAweDAxMDAwMCkgJiAweDAzRkYpICsgMHhEQzAwXG4gICk7XG59XG5cbi8vIHNldCBhIHByb3BlcnR5IG9mIGEgbGl0ZXJhbCBvYmplY3QsIHdoaWxlIHByb3RlY3RpbmcgYWdhaW5zdCBwcm90b3R5cGUgcG9sbHV0aW9uLFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvanMteWFtbC9pc3N1ZXMvMTY0IGZvciBtb3JlIGRldGFpbHNcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAvLyB1c2VkIGZvciB0aGlzIHNwZWNpZmljIGtleSBvbmx5IGJlY2F1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGlzIHNsb3dcbiAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxudmFyIHNpbXBsZUVzY2FwZUNoZWNrID0gbmV3IEFycmF5KDI1Nik7IC8vIGludGVnZXIsIGZvciBmYXN0IGFjY2Vzc1xudmFyIHNpbXBsZUVzY2FwZU1hcCA9IG5ldyBBcnJheSgyNTYpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICBzaW1wbGVFc2NhcGVDaGVja1tpXSA9IHNpbXBsZUVzY2FwZVNlcXVlbmNlKGkpID8gMSA6IDA7XG4gIHNpbXBsZUVzY2FwZU1hcFtpXSA9IHNpbXBsZUVzY2FwZVNlcXVlbmNlKGkpO1xufVxuXG5cbmZ1bmN0aW9uIFN0YXRlKGlucHV0LCBvcHRpb25zKSB7XG4gIHRoaXMuaW5wdXQgPSBpbnB1dDtcblxuICB0aGlzLmZpbGVuYW1lICA9IG9wdGlvbnNbJ2ZpbGVuYW1lJ10gIHx8IG51bGw7XG4gIHRoaXMuc2NoZW1hICAgID0gb3B0aW9uc1snc2NoZW1hJ10gICAgfHwgREVGQVVMVF9GVUxMX1NDSEVNQTtcbiAgdGhpcy5vbldhcm5pbmcgPSBvcHRpb25zWydvbldhcm5pbmcnXSB8fCBudWxsO1xuICB0aGlzLmxlZ2FjeSAgICA9IG9wdGlvbnNbJ2xlZ2FjeSddICAgIHx8IGZhbHNlO1xuICB0aGlzLmpzb24gICAgICA9IG9wdGlvbnNbJ2pzb24nXSAgICAgIHx8IGZhbHNlO1xuICB0aGlzLmxpc3RlbmVyICA9IG9wdGlvbnNbJ2xpc3RlbmVyJ10gIHx8IG51bGw7XG5cbiAgdGhpcy5pbXBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRJbXBsaWNpdDtcbiAgdGhpcy50eXBlTWFwICAgICAgID0gdGhpcy5zY2hlbWEuY29tcGlsZWRUeXBlTWFwO1xuXG4gIHRoaXMubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgdGhpcy5wb3NpdGlvbiAgID0gMDtcbiAgdGhpcy5saW5lICAgICAgID0gMDtcbiAgdGhpcy5saW5lU3RhcnQgID0gMDtcbiAgdGhpcy5saW5lSW5kZW50ID0gMDtcblxuICB0aGlzLmRvY3VtZW50cyA9IFtdO1xuXG4gIC8qXG4gIHRoaXMudmVyc2lvbjtcbiAgdGhpcy5jaGVja0xpbmVCcmVha3M7XG4gIHRoaXMudGFnTWFwO1xuICB0aGlzLmFuY2hvck1hcDtcbiAgdGhpcy50YWc7XG4gIHRoaXMuYW5jaG9yO1xuICB0aGlzLmtpbmQ7XG4gIHRoaXMucmVzdWx0OyovXG5cbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKSB7XG4gIHJldHVybiBuZXcgWUFNTEV4Y2VwdGlvbihcbiAgICBtZXNzYWdlLFxuICAgIG5ldyBNYXJrKHN0YXRlLmZpbGVuYW1lLCBzdGF0ZS5pbnB1dCwgc3RhdGUucG9zaXRpb24sIHN0YXRlLmxpbmUsIChzdGF0ZS5wb3NpdGlvbiAtIHN0YXRlLmxpbmVTdGFydCkpKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihzdGF0ZSwgbWVzc2FnZSkge1xuICB0aHJvdyBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dXYXJuaW5nKHN0YXRlLCBtZXNzYWdlKSB7XG4gIGlmIChzdGF0ZS5vbldhcm5pbmcpIHtcbiAgICBzdGF0ZS5vbldhcm5pbmcuY2FsbChudWxsLCBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuXG52YXIgZGlyZWN0aXZlSGFuZGxlcnMgPSB7XG5cbiAgWUFNTDogZnVuY3Rpb24gaGFuZGxlWWFtbERpcmVjdGl2ZShzdGF0ZSwgbmFtZSwgYXJncykge1xuXG4gICAgdmFyIG1hdGNoLCBtYWpvciwgbWlub3I7XG5cbiAgICBpZiAoc3RhdGUudmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0aW9uIG9mICVZQU1MIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ1lBTUwgZGlyZWN0aXZlIGFjY2VwdHMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBtYXRjaCA9IC9eKFswLTldKylcXC4oWzAtOV0rKSQvLmV4ZWMoYXJnc1swXSk7XG5cbiAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbGwtZm9ybWVkIGFyZ3VtZW50IG9mIHRoZSBZQU1MIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIG1ham9yID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcbiAgICBtaW5vciA9IHBhcnNlSW50KG1hdGNoWzJdLCAxMCk7XG5cbiAgICBpZiAobWFqb3IgIT09IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmFjY2VwdGFibGUgWUFNTCB2ZXJzaW9uIG9mIHRoZSBkb2N1bWVudCcpO1xuICAgIH1cblxuICAgIHN0YXRlLnZlcnNpb24gPSBhcmdzWzBdO1xuICAgIHN0YXRlLmNoZWNrTGluZUJyZWFrcyA9IChtaW5vciA8IDIpO1xuXG4gICAgaWYgKG1pbm9yICE9PSAxICYmIG1pbm9yICE9PSAyKSB7XG4gICAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICd1bnN1cHBvcnRlZCBZQU1MIHZlcnNpb24gb2YgdGhlIGRvY3VtZW50Jyk7XG4gICAgfVxuICB9LFxuXG4gIFRBRzogZnVuY3Rpb24gaGFuZGxlVGFnRGlyZWN0aXZlKHN0YXRlLCBuYW1lLCBhcmdzKSB7XG5cbiAgICB2YXIgaGFuZGxlLCBwcmVmaXg7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IDIpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdUQUcgZGlyZWN0aXZlIGFjY2VwdHMgZXhhY3RseSB0d28gYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlID0gYXJnc1swXTtcbiAgICBwcmVmaXggPSBhcmdzWzFdO1xuXG4gICAgaWYgKCFQQVRURVJOX1RBR19IQU5ETEUudGVzdChoYW5kbGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCB0YWcgaGFuZGxlIChmaXJzdCBhcmd1bWVudCkgb2YgdGhlIFRBRyBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwoc3RhdGUudGFnTWFwLCBoYW5kbGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGhlcmUgaXMgYSBwcmV2aW91c2x5IGRlY2xhcmVkIHN1ZmZpeCBmb3IgXCInICsgaGFuZGxlICsgJ1wiIHRhZyBoYW5kbGUnKTtcbiAgICB9XG5cbiAgICBpZiAoIVBBVFRFUk5fVEFHX1VSSS50ZXN0KHByZWZpeCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbGwtZm9ybWVkIHRhZyBwcmVmaXggKHNlY29uZCBhcmd1bWVudCkgb2YgdGhlIFRBRyBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzdGF0ZS50YWdNYXBbaGFuZGxlXSA9IHByZWZpeDtcbiAgfVxufTtcblxuXG5mdW5jdGlvbiBjYXB0dXJlU2VnbWVudChzdGF0ZSwgc3RhcnQsIGVuZCwgY2hlY2tKc29uKSB7XG4gIHZhciBfcG9zaXRpb24sIF9sZW5ndGgsIF9jaGFyYWN0ZXIsIF9yZXN1bHQ7XG5cbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgX3Jlc3VsdCA9IHN0YXRlLmlucHV0LnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgaWYgKGNoZWNrSnNvbikge1xuICAgICAgZm9yIChfcG9zaXRpb24gPSAwLCBfbGVuZ3RoID0gX3Jlc3VsdC5sZW5ndGg7IF9wb3NpdGlvbiA8IF9sZW5ndGg7IF9wb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIF9jaGFyYWN0ZXIgPSBfcmVzdWx0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uKTtcbiAgICAgICAgaWYgKCEoX2NoYXJhY3RlciA9PT0gMHgwOSB8fFxuICAgICAgICAgICAgICAoMHgyMCA8PSBfY2hhcmFjdGVyICYmIF9jaGFyYWN0ZXIgPD0gMHgxMEZGRkYpKSkge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdleHBlY3RlZCB2YWxpZCBKU09OIGNoYXJhY3RlcicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChQQVRURVJOX05PTl9QUklOVEFCTEUudGVzdChfcmVzdWx0KSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RoZSBzdHJlYW0gY29udGFpbnMgbm9uLXByaW50YWJsZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuXG4gICAgc3RhdGUucmVzdWx0ICs9IF9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VNYXBwaW5ncyhzdGF0ZSwgZGVzdGluYXRpb24sIHNvdXJjZSwgb3ZlcnJpZGFibGVLZXlzKSB7XG4gIHZhciBzb3VyY2VLZXlzLCBrZXksIGluZGV4LCBxdWFudGl0eTtcblxuICBpZiAoIWNvbW1vbi5pc09iamVjdChzb3VyY2UpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Nhbm5vdCBtZXJnZSBtYXBwaW5nczsgdGhlIHByb3ZpZGVkIHNvdXJjZSBvYmplY3QgaXMgdW5hY2NlcHRhYmxlJyk7XG4gIH1cblxuICBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSBzb3VyY2VLZXlzLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaW5kZXhdO1xuXG4gICAgaWYgKCFfaGFzT3duUHJvcGVydHkuY2FsbChkZXN0aW5hdGlvbiwga2V5KSkge1xuICAgICAgc2V0UHJvcGVydHkoZGVzdGluYXRpb24sIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgb3ZlcnJpZGFibGVLZXlzW2tleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLCBzdGFydExpbmUsIHN0YXJ0UG9zKSB7XG4gIHZhciBpbmRleCwgcXVhbnRpdHk7XG5cbiAgLy8gVGhlIG91dHB1dCBpcyBhIHBsYWluIG9iamVjdCBoZXJlLCBzbyBrZXlzIGNhbiBvbmx5IGJlIHN0cmluZ3MuXG4gIC8vIFdlIG5lZWQgdG8gY29udmVydCBrZXlOb2RlIHRvIGEgc3RyaW5nLCBidXQgZG9pbmcgc28gY2FuIGhhbmcgdGhlIHByb2Nlc3NcbiAgLy8gKGRlZXBseSBuZXN0ZWQgYXJyYXlzIHRoYXQgZXhwbG9kZSBleHBvbmVudGlhbGx5IHVzaW5nIGFsaWFzZXMpLlxuICBpZiAoQXJyYXkuaXNBcnJheShrZXlOb2RlKSkge1xuICAgIGtleU5vZGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChrZXlOb2RlKTtcblxuICAgIGZvciAoaW5kZXggPSAwLCBxdWFudGl0eSA9IGtleU5vZGUubGVuZ3RoOyBpbmRleCA8IHF1YW50aXR5OyBpbmRleCArPSAxKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlOb2RlW2luZGV4XSkpIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25lc3RlZCBhcnJheXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW5zaWRlIGtleXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBrZXlOb2RlID09PSAnb2JqZWN0JyAmJiBfY2xhc3Moa2V5Tm9kZVtpbmRleF0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICBrZXlOb2RlW2luZGV4XSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEF2b2lkIGNvZGUgZXhlY3V0aW9uIGluIGxvYWQoKSB2aWEgdG9TdHJpbmcgcHJvcGVydHlcbiAgLy8gKHN0aWxsIHVzZSBpdHMgb3duIHRvU3RyaW5nIGZvciBhcnJheXMsIHRpbWVzdGFtcHMsXG4gIC8vIGFuZCB3aGF0ZXZlciB1c2VyIHNjaGVtYSBleHRlbnNpb25zIGhhcHBlbiB0byBoYXZlIEBAdG9TdHJpbmdUYWcpXG4gIGlmICh0eXBlb2Yga2V5Tm9kZSA9PT0gJ29iamVjdCcgJiYgX2NsYXNzKGtleU5vZGUpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGtleU5vZGUgPSAnW29iamVjdCBPYmplY3RdJztcbiAgfVxuXG5cbiAga2V5Tm9kZSA9IFN0cmluZyhrZXlOb2RlKTtcblxuICBpZiAoX3Jlc3VsdCA9PT0gbnVsbCkge1xuICAgIF9yZXN1bHQgPSB7fTtcbiAgfVxuXG4gIGlmIChrZXlUYWcgPT09ICd0YWc6eWFtbC5vcmcsMjAwMjptZXJnZScpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZU5vZGUpKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSB2YWx1ZU5vZGUubGVuZ3RoOyBpbmRleCA8IHF1YW50aXR5OyBpbmRleCArPSAxKSB7XG4gICAgICAgIG1lcmdlTWFwcGluZ3Moc3RhdGUsIF9yZXN1bHQsIHZhbHVlTm9kZVtpbmRleF0sIG92ZXJyaWRhYmxlS2V5cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlTWFwcGluZ3Moc3RhdGUsIF9yZXN1bHQsIHZhbHVlTm9kZSwgb3ZlcnJpZGFibGVLZXlzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFzdGF0ZS5qc29uICYmXG4gICAgICAgICFfaGFzT3duUHJvcGVydHkuY2FsbChvdmVycmlkYWJsZUtleXMsIGtleU5vZGUpICYmXG4gICAgICAgIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKF9yZXN1bHQsIGtleU5vZGUpKSB7XG4gICAgICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lIHx8IHN0YXRlLmxpbmU7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiA9IHN0YXJ0UG9zIHx8IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0ZWQgbWFwcGluZyBrZXknKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydHkoX3Jlc3VsdCwga2V5Tm9kZSwgdmFsdWVOb2RlKTtcbiAgICBkZWxldGUgb3ZlcnJpZGFibGVLZXlzW2tleU5vZGVdO1xuICB9XG5cbiAgcmV0dXJuIF9yZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRMaW5lQnJlYWsoc3RhdGUpIHtcbiAgdmFyIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDBBLyogTEYgKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICB9IGVsc2UgaWYgKGNoID09PSAweDBELyogQ1IgKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgIGlmIChzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSA9PT0gMHgwQS8qIExGICovKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYSBsaW5lIGJyZWFrIGlzIGV4cGVjdGVkJyk7XG4gIH1cblxuICBzdGF0ZS5saW5lICs9IDE7XG4gIHN0YXRlLmxpbmVTdGFydCA9IHN0YXRlLnBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBhbGxvd0NvbW1lbnRzLCBjaGVja0luZGVudCkge1xuICB2YXIgbGluZUJyZWFrcyA9IDAsXG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoYWxsb3dDb21tZW50cyAmJiBjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIGRvIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfSB3aGlsZSAoY2ggIT09IDB4MEEvKiBMRiAqLyAmJiBjaCAhPT0gMHgwRC8qIENSICovICYmIGNoICE9PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG5cbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgICBsaW5lQnJlYWtzKys7XG4gICAgICBzdGF0ZS5saW5lSW5kZW50ID0gMDtcblxuICAgICAgd2hpbGUgKGNoID09PSAweDIwLyogU3BhY2UgKi8pIHtcbiAgICAgICAgc3RhdGUubGluZUluZGVudCsrO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaGVja0luZGVudCAhPT0gLTEgJiYgbGluZUJyZWFrcyAhPT0gMCAmJiBzdGF0ZS5saW5lSW5kZW50IDwgY2hlY2tJbmRlbnQpIHtcbiAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICdkZWZpY2llbnQgaW5kZW50YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBsaW5lQnJlYWtzO1xufVxuXG5mdW5jdGlvbiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG5cbiAgLy8gQ29uZGl0aW9uIHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgaXMgdGVzdGVkXG4gIC8vIGluIHBhcmVudCBvbiBlYWNoIGNhbGwsIGZvciBlZmZpY2llbmN5LiBObyBuZWVkcyB0byB0ZXN0IGhlcmUgYWdhaW4uXG4gIGlmICgoY2ggPT09IDB4MkQvKiAtICovIHx8IGNoID09PSAweDJFLyogLiAqLykgJiZcbiAgICAgIGNoID09PSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbiArIDEpICYmXG4gICAgICBjaCA9PT0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24gKyAyKSkge1xuXG4gICAgX3Bvc2l0aW9uICs9IDM7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gMCB8fCBpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIGNvdW50KSB7XG4gIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHN0YXRlLnJlc3VsdCArPSAnICc7XG4gIH0gZWxzZSBpZiAoY291bnQgPiAxKSB7XG4gICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGNvdW50IC0gMSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiByZWFkUGxhaW5TY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQsIHdpdGhpbkZsb3dDb2xsZWN0aW9uKSB7XG4gIHZhciBwcmVjZWRpbmcsXG4gICAgICBmb2xsb3dpbmcsXG4gICAgICBjYXB0dXJlU3RhcnQsXG4gICAgICBjYXB0dXJlRW5kLFxuICAgICAgaGFzUGVuZGluZ0NvbnRlbnQsXG4gICAgICBfbGluZSxcbiAgICAgIF9saW5lU3RhcnQsXG4gICAgICBfbGluZUluZGVudCxcbiAgICAgIF9raW5kID0gc3RhdGUua2luZCxcbiAgICAgIF9yZXN1bHQgPSBzdGF0ZS5yZXN1bHQsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChpc19XU19PUl9FT0woY2gpICAgICAgfHxcbiAgICAgIGlzX0ZMT1dfSU5ESUNBVE9SKGNoKSB8fFxuICAgICAgY2ggPT09IDB4MjMvKiAjICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyNi8qICYgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDJBLyogKiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjEvKiAhICovICAgIHx8XG4gICAgICBjaCA9PT0gMHg3Qy8qIHwgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDNFLyogPiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjcvKiAnICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyMi8qIFwiICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyNS8qICUgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDQwLyogQCAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4NjAvKiBgICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNoID09PSAweDNGLyogPyAqLyB8fCBjaCA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykgfHxcbiAgICAgICAgd2l0aGluRmxvd0NvbGxlY3Rpb24gJiYgaXNfRkxPV19JTkRJQ0FUT1IoZm9sbG93aW5nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgaGFzUGVuZGluZ0NvbnRlbnQgPSBmYWxzZTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBpZiAoY2ggPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICAgIGlmIChpc19XU19PUl9FT0woZm9sbG93aW5nKSB8fFxuICAgICAgICAgIHdpdGhpbkZsb3dDb2xsZWN0aW9uICYmIGlzX0ZMT1dfSU5ESUNBVE9SKGZvbGxvd2luZykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgcHJlY2VkaW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiAtIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKHByZWNlZGluZykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHx8XG4gICAgICAgICAgICAgICB3aXRoaW5GbG93Q29sbGVjdGlvbiAmJiBpc19GTE9XX0lORElDQVRPUihjaCkpIHtcbiAgICAgIGJyZWFrO1xuXG4gICAgfSBlbHNlIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgICBfbGluZVN0YXJ0ID0gc3RhdGUubGluZVN0YXJ0O1xuICAgICAgX2xpbmVJbmRlbnQgPSBzdGF0ZS5saW5lSW5kZW50O1xuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIC0xKTtcblxuICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPj0gbm9kZUluZGVudCkge1xuICAgICAgICBoYXNQZW5kaW5nQ29udGVudCA9IHRydWU7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucG9zaXRpb24gPSBjYXB0dXJlRW5kO1xuICAgICAgICBzdGF0ZS5saW5lID0gX2xpbmU7XG4gICAgICAgIHN0YXRlLmxpbmVTdGFydCA9IF9saW5lU3RhcnQ7XG4gICAgICAgIHN0YXRlLmxpbmVJbmRlbnQgPSBfbGluZUluZGVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1BlbmRpbmdDb250ZW50KSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCBmYWxzZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBzdGF0ZS5saW5lIC0gX2xpbmUpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgaGFzUGVuZGluZ0NvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uICsgMTtcbiAgICB9XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIH1cblxuICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCBmYWxzZSk7XG5cbiAgaWYgKHN0YXRlLnJlc3VsdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9IF9raW5kO1xuICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlYWRTaW5nbGVRdW90ZWRTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNoLFxuICAgICAgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDI3LyogJyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIHN0YXRlLnBvc2l0aW9uKys7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDI3LyogJyAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICBpZiAoY2ggPT09IDB4MjcvKiAnICovKSB7XG4gICAgICAgIGNhcHR1cmVTdGFydCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgdHJ1ZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCkpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgZG9jdW1lbnQgd2l0aGluIGEgc2luZ2xlIHF1b3RlZCBzY2FsYXInKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIHNpbmdsZSBxdW90ZWQgc2NhbGFyJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWREb3VibGVRdW90ZWRTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNhcHR1cmVTdGFydCxcbiAgICAgIGNhcHR1cmVFbmQsXG4gICAgICBoZXhMZW5ndGgsXG4gICAgICBoZXhSZXN1bHQsXG4gICAgICB0bXAsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyMi8qIFwiICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcbiAgc3RhdGUucG9zaXRpb24rKztcbiAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlICgoY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSkgIT09IDApIHtcbiAgICBpZiAoY2ggPT09IDB4MjIvKiBcIiAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHg1Qy8qIFxcICovKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBzdGF0ZS5wb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgIGlmIChpc19FT0woY2gpKSB7XG4gICAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCBub2RlSW5kZW50KTtcblxuICAgICAgICAvLyBUT0RPOiByZXdvcmsgdG8gaW5saW5lIGZuIHdpdGggbm8gdHlwZSBjYXN0P1xuICAgICAgfSBlbHNlIGlmIChjaCA8IDI1NiAmJiBzaW1wbGVFc2NhcGVDaGVja1tjaF0pIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IHNpbXBsZUVzY2FwZU1hcFtjaF07XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG5cbiAgICAgIH0gZWxzZSBpZiAoKHRtcCA9IGVzY2FwZWRIZXhMZW4oY2gpKSA+IDApIHtcbiAgICAgICAgaGV4TGVuZ3RoID0gdG1wO1xuICAgICAgICBoZXhSZXN1bHQgPSAwO1xuXG4gICAgICAgIGZvciAoOyBoZXhMZW5ndGggPiAwOyBoZXhMZW5ndGgtLSkge1xuICAgICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmICgodG1wID0gZnJvbUhleENvZGUoY2gpKSA+PSAwKSB7XG4gICAgICAgICAgICBoZXhSZXN1bHQgPSAoaGV4UmVzdWx0IDw8IDQpICsgdG1wO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdleHBlY3RlZCBoZXhhZGVjaW1hbCBjaGFyYWN0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY2hhckZyb21Db2RlcG9pbnQoaGV4UmVzdWx0KTtcblxuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5rbm93biBlc2NhcGUgc2VxdWVuY2UnKTtcbiAgICAgIH1cblxuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCB0cnVlKTtcbiAgICAgIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCBub2RlSW5kZW50KSk7XG4gICAgICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB9IGVsc2UgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgJiYgdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBkb2N1bWVudCB3aXRoaW4gYSBkb3VibGUgcXVvdGVkIHNjYWxhcicpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgZG91YmxlIHF1b3RlZCBzY2FsYXInKTtcbn1cblxuZnVuY3Rpb24gcmVhZEZsb3dDb2xsZWN0aW9uKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciByZWFkTmV4dCA9IHRydWUsXG4gICAgICBfbGluZSxcbiAgICAgIF90YWcgICAgID0gc3RhdGUudGFnLFxuICAgICAgX3Jlc3VsdCxcbiAgICAgIF9hbmNob3IgID0gc3RhdGUuYW5jaG9yLFxuICAgICAgZm9sbG93aW5nLFxuICAgICAgdGVybWluYXRvcixcbiAgICAgIGlzUGFpcixcbiAgICAgIGlzRXhwbGljaXRQYWlyLFxuICAgICAgaXNNYXBwaW5nLFxuICAgICAgb3ZlcnJpZGFibGVLZXlzID0ge30sXG4gICAgICBrZXlOb2RlLFxuICAgICAga2V5VGFnLFxuICAgICAgdmFsdWVOb2RlLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4NUIvKiBbICovKSB7XG4gICAgdGVybWluYXRvciA9IDB4NUQ7LyogXSAqL1xuICAgIGlzTWFwcGluZyA9IGZhbHNlO1xuICAgIF9yZXN1bHQgPSBbXTtcbiAgfSBlbHNlIGlmIChjaCA9PT0gMHg3Qi8qIHsgKi8pIHtcbiAgICB0ZXJtaW5hdG9yID0gMHg3RDsvKiB9ICovXG4gICAgaXNNYXBwaW5nID0gdHJ1ZTtcbiAgICBfcmVzdWx0ID0ge307XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IHRlcm1pbmF0b3IpIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICBzdGF0ZS50YWcgPSBfdGFnO1xuICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgIHN0YXRlLmtpbmQgPSBpc01hcHBpbmcgPyAnbWFwcGluZycgOiAnc2VxdWVuY2UnO1xuICAgICAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXJlYWROZXh0KSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbWlzc2VkIGNvbW1hIGJldHdlZW4gZmxvdyBjb2xsZWN0aW9uIGVudHJpZXMnKTtcbiAgICB9XG5cbiAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICBpc1BhaXIgPSBpc0V4cGxpY2l0UGFpciA9IGZhbHNlO1xuXG4gICAgaWYgKGNoID09PSAweDNGLyogPyAqLykge1xuICAgICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykpIHtcbiAgICAgICAgaXNQYWlyID0gaXNFeHBsaWNpdFBhaXIgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfRkxPV19JTiwgZmFsc2UsIHRydWUpO1xuICAgIGtleVRhZyA9IHN0YXRlLnRhZztcbiAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmICgoaXNFeHBsaWNpdFBhaXIgfHwgc3RhdGUubGluZSA9PT0gX2xpbmUpICYmIGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgaXNQYWlyID0gdHJ1ZTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuICAgICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfRkxPV19JTiwgZmFsc2UsIHRydWUpO1xuICAgICAgdmFsdWVOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc01hcHBpbmcpIHtcbiAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUpO1xuICAgIH0gZWxzZSBpZiAoaXNQYWlyKSB7XG4gICAgICBfcmVzdWx0LnB1c2goc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgbnVsbCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcmVzdWx0LnB1c2goa2V5Tm9kZSk7XG4gICAgfVxuXG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSAweDJDLyogLCAqLykge1xuICAgICAgcmVhZE5leHQgPSB0cnVlO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWFkTmV4dCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIGZsb3cgY29sbGVjdGlvbicpO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tTY2FsYXIoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIGNhcHR1cmVTdGFydCxcbiAgICAgIGZvbGRpbmcsXG4gICAgICBjaG9tcGluZyAgICAgICA9IENIT01QSU5HX0NMSVAsXG4gICAgICBkaWRSZWFkQ29udGVudCA9IGZhbHNlLFxuICAgICAgZGV0ZWN0ZWRJbmRlbnQgPSBmYWxzZSxcbiAgICAgIHRleHRJbmRlbnQgICAgID0gbm9kZUluZGVudCxcbiAgICAgIGVtcHR5TGluZXMgICAgID0gMCxcbiAgICAgIGF0TW9yZUluZGVudGVkID0gZmFsc2UsXG4gICAgICB0bXAsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHg3Qy8qIHwgKi8pIHtcbiAgICBmb2xkaW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4M0UvKiA+ICovKSB7XG4gICAgZm9sZGluZyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IDB4MkIvKiArICovIHx8IGNoID09PSAweDJELyogLSAqLykge1xuICAgICAgaWYgKENIT01QSU5HX0NMSVAgPT09IGNob21waW5nKSB7XG4gICAgICAgIGNob21waW5nID0gKGNoID09PSAweDJCLyogKyAqLykgPyBDSE9NUElOR19LRUVQIDogQ0hPTVBJTkdfU1RSSVA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAncmVwZWF0IG9mIGEgY2hvbXBpbmcgbW9kZSBpZGVudGlmaWVyJyk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKCh0bXAgPSBmcm9tRGVjaW1hbENvZGUoY2gpKSA+PSAwKSB7XG4gICAgICBpZiAodG1wID09PSAwKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdiYWQgZXhwbGljaXQgaW5kZW50YXRpb24gd2lkdGggb2YgYSBibG9jayBzY2FsYXI7IGl0IGNhbm5vdCBiZSBsZXNzIHRoYW4gb25lJyk7XG4gICAgICB9IGVsc2UgaWYgKCFkZXRlY3RlZEluZGVudCkge1xuICAgICAgICB0ZXh0SW5kZW50ID0gbm9kZUluZGVudCArIHRtcCAtIDE7XG4gICAgICAgIGRldGVjdGVkSW5kZW50ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdyZXBlYXQgb2YgYW4gaW5kZW50YXRpb24gd2lkdGggaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpO1xuXG4gICAgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICAgIHdoaWxlICghaXNfRU9MKGNoKSAmJiAoY2ggIT09IDApKTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICByZWFkTGluZUJyZWFrKHN0YXRlKTtcbiAgICBzdGF0ZS5saW5lSW5kZW50ID0gMDtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoKCFkZXRlY3RlZEluZGVudCB8fCBzdGF0ZS5saW5lSW5kZW50IDwgdGV4dEluZGVudCkgJiZcbiAgICAgICAgICAgKGNoID09PSAweDIwLyogU3BhY2UgKi8pKSB7XG4gICAgICBzdGF0ZS5saW5lSW5kZW50Kys7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFkZXRlY3RlZEluZGVudCAmJiBzdGF0ZS5saW5lSW5kZW50ID4gdGV4dEluZGVudCkge1xuICAgICAgdGV4dEluZGVudCA9IHN0YXRlLmxpbmVJbmRlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIGVtcHR5TGluZXMrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIEVuZCBvZiB0aGUgc2NhbGFyLlxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgdGV4dEluZGVudCkge1xuXG4gICAgICAvLyBQZXJmb3JtIHRoZSBjaG9tcGluZy5cbiAgICAgIGlmIChjaG9tcGluZyA9PT0gQ0hPTVBJTkdfS0VFUCkge1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuICAgICAgfSBlbHNlIGlmIChjaG9tcGluZyA9PT0gQ0hPTVBJTkdfQ0xJUCkge1xuICAgICAgICBpZiAoZGlkUmVhZENvbnRlbnQpIHsgLy8gaS5lLiBvbmx5IGlmIHRoZSBzY2FsYXIgaXMgbm90IGVtcHR5LlxuICAgICAgICAgIHN0YXRlLnJlc3VsdCArPSAnXFxuJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCcmVhayB0aGlzIGB3aGlsZWAgY3ljbGUgYW5kIGdvIHRvIHRoZSBmdW5jaXRvbidzIGVwaWxvZ3VlLlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gRm9sZGVkIHN0eWxlOiB1c2UgZmFuY3kgcnVsZXMgdG8gaGFuZGxlIGxpbmUgYnJlYWtzLlxuICAgIGlmIChmb2xkaW5nKSB7XG5cbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggd2hpdGUgc3BhY2UgY2hhcmFjdGVycyAobW9yZS1pbmRlbnRlZCBsaW5lcykgYXJlIG5vdCBmb2xkZWQuXG4gICAgICBpZiAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgIGF0TW9yZUluZGVudGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZXhjZXB0IGZvciB0aGUgZmlyc3QgY29udGVudCBsaW5lIChjZi4gRXhhbXBsZSA4LjEpXG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBkaWRSZWFkQ29udGVudCA/IDEgKyBlbXB0eUxpbmVzIDogZW1wdHlMaW5lcyk7XG5cbiAgICAgIC8vIEVuZCBvZiBtb3JlLWluZGVudGVkIGJsb2NrLlxuICAgICAgfSBlbHNlIGlmIChhdE1vcmVJbmRlbnRlZCkge1xuICAgICAgICBhdE1vcmVJbmRlbnRlZCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZW1wdHlMaW5lcyArIDEpO1xuXG4gICAgICAvLyBKdXN0IG9uZSBsaW5lIGJyZWFrIC0gcGVyY2VpdmUgYXMgdGhlIHNhbWUgbGluZS5cbiAgICAgIH0gZWxzZSBpZiAoZW1wdHlMaW5lcyA9PT0gMCkge1xuICAgICAgICBpZiAoZGlkUmVhZENvbnRlbnQpIHsgLy8gaS5lLiBvbmx5IGlmIHdlIGhhdmUgYWxyZWFkeSByZWFkIHNvbWUgc2NhbGFyIGNvbnRlbnQuXG4gICAgICAgICAgc3RhdGUucmVzdWx0ICs9ICcgJztcbiAgICAgICAgfVxuXG4gICAgICAvLyBTZXZlcmFsIGxpbmUgYnJlYWtzIC0gcGVyY2VpdmUgYXMgZGlmZmVyZW50IGxpbmVzLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGVtcHR5TGluZXMpO1xuICAgICAgfVxuXG4gICAgLy8gTGl0ZXJhbCBzdHlsZToganVzdCBhZGQgZXhhY3QgbnVtYmVyIG9mIGxpbmUgYnJlYWtzIGJldHdlZW4gY29udGVudCBsaW5lcy5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gS2VlcCBhbGwgbGluZSBicmVha3MgZXhjZXB0IHRoZSBoZWFkZXIgbGluZSBicmVhay5cbiAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBkaWRSZWFkQ29udGVudCA/IDEgKyBlbXB0eUxpbmVzIDogZW1wdHlMaW5lcyk7XG4gICAgfVxuXG4gICAgZGlkUmVhZENvbnRlbnQgPSB0cnVlO1xuICAgIGRldGVjdGVkSW5kZW50ID0gdHJ1ZTtcbiAgICBlbXB0eUxpbmVzID0gMDtcbiAgICBjYXB0dXJlU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIHdoaWxlICghaXNfRU9MKGNoKSAmJiAoY2ggIT09IDApKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgX2xpbmUsXG4gICAgICBfdGFnICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBfYW5jaG9yICAgPSBzdGF0ZS5hbmNob3IsXG4gICAgICBfcmVzdWx0ICAgPSBbXSxcbiAgICAgIGZvbGxvd2luZyxcbiAgICAgIGRldGVjdGVkICA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG5cbiAgICBpZiAoY2ggIT09IDB4MkQvKiAtICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICBpZiAoIWlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgc3RhdGUucG9zaXRpb24rKztcblxuICAgIGlmIChza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSkpIHtcbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50IDw9IG5vZGVJbmRlbnQpIHtcbiAgICAgICAgX3Jlc3VsdC5wdXNoKG51bGwpO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7XG4gICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfQkxPQ0tfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICBfcmVzdWx0LnB1c2goc3RhdGUucmVzdWx0KTtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKChzdGF0ZS5saW5lID09PSBfbGluZSB8fCBzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCkgJiYgKGNoICE9PSAwKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2JhZCBpbmRlbnRhdGlvbiBvZiBhIHNlcXVlbmNlIGVudHJ5Jyk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgbm9kZUluZGVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRldGVjdGVkKSB7XG4gICAgc3RhdGUudGFnID0gX3RhZztcbiAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgIHN0YXRlLmtpbmQgPSAnc2VxdWVuY2UnO1xuICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWFkQmxvY2tNYXBwaW5nKHN0YXRlLCBub2RlSW5kZW50LCBmbG93SW5kZW50KSB7XG4gIHZhciBmb2xsb3dpbmcsXG4gICAgICBhbGxvd0NvbXBhY3QsXG4gICAgICBfbGluZSxcbiAgICAgIF9wb3MsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgX2FuY2hvciAgICAgICA9IHN0YXRlLmFuY2hvcixcbiAgICAgIF9yZXN1bHQgICAgICAgPSB7fSxcbiAgICAgIG92ZXJyaWRhYmxlS2V5cyA9IHt9LFxuICAgICAga2V5VGFnICAgICAgICA9IG51bGwsXG4gICAgICBrZXlOb2RlICAgICAgID0gbnVsbCxcbiAgICAgIHZhbHVlTm9kZSAgICAgPSBudWxsLFxuICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlLFxuICAgICAgZGV0ZWN0ZWQgICAgICA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuICAgIF9saW5lID0gc3RhdGUubGluZTsgLy8gU2F2ZSB0aGUgY3VycmVudCBsaW5lLlxuICAgIF9wb3MgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIC8vXG4gICAgLy8gRXhwbGljaXQgbm90YXRpb24gY2FzZS4gVGhlcmUgYXJlIHR3byBzZXBhcmF0ZSBibG9ja3M6XG4gICAgLy8gZmlyc3QgZm9yIHRoZSBrZXkgKGRlbm90ZWQgYnkgXCI/XCIpIGFuZCBzZWNvbmQgZm9yIHRoZSB2YWx1ZSAoZGVub3RlZCBieSBcIjpcIilcbiAgICAvL1xuICAgIGlmICgoY2ggPT09IDB4M0YvKiA/ICovIHx8IGNoID09PSAweDNBLyogOiAqLykgJiYgaXNfV1NfT1JfRU9MKGZvbGxvd2luZykpIHtcblxuICAgICAgaWYgKGNoID09PSAweDNGLyogPyAqLykge1xuICAgICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsKTtcbiAgICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgYXRFeHBsaWNpdEtleSA9IHRydWU7XG4gICAgICAgIGFsbG93Q29tcGFjdCA9IHRydWU7XG5cbiAgICAgIH0gZWxzZSBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAvLyBpLmUuIDB4M0EvKiA6ICovID09PSBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIGV4cGxpY2l0IGtleS5cbiAgICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlO1xuICAgICAgICBhbGxvd0NvbXBhY3QgPSB0cnVlO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaW5jb21wbGV0ZSBleHBsaWNpdCBtYXBwaW5nIHBhaXI7IGEga2V5IG5vZGUgaXMgbWlzc2VkOyBvciBmb2xsb3dlZCBieSBhIG5vbi10YWJ1bGF0ZWQgZW1wdHkgbGluZScpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5wb3NpdGlvbiArPSAxO1xuICAgICAgY2ggPSBmb2xsb3dpbmc7XG5cbiAgICAvL1xuICAgIC8vIEltcGxpY2l0IG5vdGF0aW9uIGNhc2UuIEZsb3ctc3R5bGUgbm9kZSBhcyB0aGUga2V5IGZpcnN0LCB0aGVuIFwiOlwiLCBhbmQgdGhlIHZhbHVlLlxuICAgIC8vXG4gICAgfSBlbHNlIGlmIChjb21wb3NlTm9kZShzdGF0ZSwgZmxvd0luZGVudCwgQ09OVEVYVF9GTE9XX09VVCwgZmFsc2UsIHRydWUpKSB7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lID09PSBfbGluZSkge1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2ggPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgICAgaWYgKCFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlciBpcyBleHBlY3RlZCBhZnRlciB0aGUga2V5LXZhbHVlIHNlcGFyYXRvciB3aXRoaW4gYSBibG9jayBtYXBwaW5nJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsKTtcbiAgICAgICAgICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBhdEV4cGxpY2l0S2V5ID0gZmFsc2U7XG4gICAgICAgICAgYWxsb3dDb21wYWN0ID0gZmFsc2U7XG4gICAgICAgICAga2V5VGFnID0gc3RhdGUudGFnO1xuICAgICAgICAgIGtleU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW4gbm90IHJlYWQgYW4gaW1wbGljaXQgbWFwcGluZyBwYWlyOyBhIGNvbG9uIGlzIG1pc3NlZCcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgICAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIHRoZSByZXN1bHQgb2YgYGNvbXBvc2VOb2RlYC5cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW4gbm90IHJlYWQgYSBibG9jayBtYXBwaW5nIGVudHJ5OyBhIG11bHRpbGluZSBrZXkgbWF5IG5vdCBiZSBhbiBpbXBsaWNpdCBrZXknKTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgdGhlIHJlc3VsdCBvZiBgY29tcG9zZU5vZGVgLlxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrOyAvLyBSZWFkaW5nIGlzIGRvbmUuIEdvIHRvIHRoZSBlcGlsb2d1ZS5cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIENvbW1vbiByZWFkaW5nIGNvZGUgZm9yIGJvdGggZXhwbGljaXQgYW5kIGltcGxpY2l0IG5vdGF0aW9ucy5cbiAgICAvL1xuICAgIGlmIChzdGF0ZS5saW5lID09PSBfbGluZSB8fCBzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCkge1xuICAgICAgaWYgKGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0JMT0NLX09VVCwgdHJ1ZSwgYWxsb3dDb21wYWN0KSkge1xuICAgICAgICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAgIGtleU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWVOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXRFeHBsaWNpdEtleSkge1xuICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLCBfbGluZSwgX3Bvcyk7XG4gICAgICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCAmJiAoY2ggIT09IDApKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYmFkIGluZGVudGF0aW9uIG9mIGEgbWFwcGluZyBlbnRyeScpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IG5vZGVJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIEVwaWxvZ3VlLlxuICAvL1xuXG4gIC8vIFNwZWNpYWwgY2FzZTogbGFzdCBtYXBwaW5nJ3Mgbm9kZSBjb250YWlucyBvbmx5IHRoZSBrZXkgaW4gZXhwbGljaXQgbm90YXRpb24uXG4gIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIG51bGwpO1xuICB9XG5cbiAgLy8gRXhwb3NlIHRoZSByZXN1bHRpbmcgbWFwcGluZy5cbiAgaWYgKGRldGVjdGVkKSB7XG4gICAgc3RhdGUudGFnID0gX3RhZztcbiAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgIHN0YXRlLmtpbmQgPSAnbWFwcGluZyc7XG4gICAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBkZXRlY3RlZDtcbn1cblxuZnVuY3Rpb24gcmVhZFRhZ1Byb3BlcnR5KHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sXG4gICAgICBpc1ZlcmJhdGltID0gZmFsc2UsXG4gICAgICBpc05hbWVkICAgID0gZmFsc2UsXG4gICAgICB0YWdIYW5kbGUsXG4gICAgICB0YWdOYW1lLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjEvKiAhICovKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLnRhZyAhPT0gbnVsbCkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGlvbiBvZiBhIHRhZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHgzQy8qIDwgKi8pIHtcbiAgICBpc1ZlcmJhdGltID0gdHJ1ZTtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgyMS8qICEgKi8pIHtcbiAgICBpc05hbWVkID0gdHJ1ZTtcbiAgICB0YWdIYW5kbGUgPSAnISEnO1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICB9IGVsc2Uge1xuICAgIHRhZ0hhbmRsZSA9ICchJztcbiAgfVxuXG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIGlmIChpc1ZlcmJhdGltKSB7XG4gICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICB3aGlsZSAoY2ggIT09IDAgJiYgY2ggIT09IDB4M0UvKiA+ICovKTtcblxuICAgIGlmIChzdGF0ZS5wb3NpdGlvbiA8IHN0YXRlLmxlbmd0aCkge1xuICAgICAgdGFnTmFtZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSB2ZXJiYXRpbSB0YWcnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgyMS8qICEgKi8pIHtcbiAgICAgICAgaWYgKCFpc05hbWVkKSB7XG4gICAgICAgICAgdGFnSGFuZGxlID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uIC0gMSwgc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgICAgICAgIGlmICghUEFUVEVSTl9UQUdfSEFORExFLnRlc3QodGFnSGFuZGxlKSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWVkIHRhZyBoYW5kbGUgY2Fubm90IGNvbnRhaW4gc3VjaCBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaXNOYW1lZCA9IHRydWU7XG4gICAgICAgICAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24gKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgc3VmZml4IGNhbm5vdCBjb250YWluIGV4Y2xhbWF0aW9uIG1hcmtzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRhZ05hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChQQVRURVJOX0ZMT1dfSU5ESUNBVE9SUy50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIHN1ZmZpeCBjYW5ub3QgY29udGFpbiBmbG93IGluZGljYXRvciBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRhZ05hbWUgJiYgIVBBVFRFUk5fVEFHX1VSSS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBuYW1lIGNhbm5vdCBjb250YWluIHN1Y2ggY2hhcmFjdGVyczogJyArIHRhZ05hbWUpO1xuICB9XG5cbiAgaWYgKGlzVmVyYmF0aW0pIHtcbiAgICBzdGF0ZS50YWcgPSB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAoX2hhc093blByb3BlcnR5LmNhbGwoc3RhdGUudGFnTWFwLCB0YWdIYW5kbGUpKSB7XG4gICAgc3RhdGUudGFnID0gc3RhdGUudGFnTWFwW3RhZ0hhbmRsZV0gKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAodGFnSGFuZGxlID09PSAnIScpIHtcbiAgICBzdGF0ZS50YWcgPSAnIScgKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAodGFnSGFuZGxlID09PSAnISEnKSB7XG4gICAgc3RhdGUudGFnID0gJ3RhZzp5YW1sLm9yZywyMDAyOicgKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZGVjbGFyZWQgdGFnIGhhbmRsZSBcIicgKyB0YWdIYW5kbGUgKyAnXCInKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQW5jaG9yUHJvcGVydHkoc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbixcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDI2LyogJiAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRpb24gb2YgYW4gYW5jaG9yIHByb3BlcnR5Jyk7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSAmJiAhaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBfcG9zaXRpb24pIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmFtZSBvZiBhbiBhbmNob3Igbm9kZSBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICB9XG5cbiAgc3RhdGUuYW5jaG9yID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQWxpYXMoc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbiwgYWxpYXMsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyQS8qICogKi8pIHJldHVybiBmYWxzZTtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSAmJiAhaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBfcG9zaXRpb24pIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmFtZSBvZiBhbiBhbGlhcyBub2RlIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyJyk7XG4gIH1cblxuICBhbGlhcyA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmICghX2hhc093blByb3BlcnR5LmNhbGwoc3RhdGUuYW5jaG9yTWFwLCBhbGlhcykpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5pZGVudGlmaWVkIGFsaWFzIFwiJyArIGFsaWFzICsgJ1wiJyk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bHQgPSBzdGF0ZS5hbmNob3JNYXBbYWxpYXNdO1xuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlTm9kZShzdGF0ZSwgcGFyZW50SW5kZW50LCBub2RlQ29udGV4dCwgYWxsb3dUb1NlZWssIGFsbG93Q29tcGFjdCkge1xuICB2YXIgYWxsb3dCbG9ja1N0eWxlcyxcbiAgICAgIGFsbG93QmxvY2tTY2FsYXJzLFxuICAgICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zLFxuICAgICAgaW5kZW50U3RhdHVzID0gMSwgLy8gMTogdGhpcz5wYXJlbnQsIDA6IHRoaXM9cGFyZW50LCAtMTogdGhpczxwYXJlbnRcbiAgICAgIGF0TmV3TGluZSAgPSBmYWxzZSxcbiAgICAgIGhhc0NvbnRlbnQgPSBmYWxzZSxcbiAgICAgIHR5cGVJbmRleCxcbiAgICAgIHR5cGVRdWFudGl0eSxcbiAgICAgIHR5cGUsXG4gICAgICBmbG93SW5kZW50LFxuICAgICAgYmxvY2tJbmRlbnQ7XG5cbiAgaWYgKHN0YXRlLmxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgc3RhdGUubGlzdGVuZXIoJ29wZW4nLCBzdGF0ZSk7XG4gIH1cblxuICBzdGF0ZS50YWcgICAgPSBudWxsO1xuICBzdGF0ZS5hbmNob3IgPSBudWxsO1xuICBzdGF0ZS5raW5kICAgPSBudWxsO1xuICBzdGF0ZS5yZXN1bHQgPSBudWxsO1xuXG4gIGFsbG93QmxvY2tTdHlsZXMgPSBhbGxvd0Jsb2NrU2NhbGFycyA9IGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9XG4gICAgQ09OVEVYVF9CTE9DS19PVVQgPT09IG5vZGVDb250ZXh0IHx8XG4gICAgQ09OVEVYVF9CTE9DS19JTiAgPT09IG5vZGVDb250ZXh0O1xuXG4gIGlmIChhbGxvd1RvU2Vlaykge1xuICAgIGlmIChza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSkpIHtcbiAgICAgIGF0TmV3TGluZSA9IHRydWU7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gcGFyZW50SW5kZW50KSB7XG4gICAgICAgIGluZGVudFN0YXR1cyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgcGFyZW50SW5kZW50KSB7XG4gICAgICAgIGluZGVudFN0YXR1cyA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbmRlbnRTdGF0dXMgPT09IDEpIHtcbiAgICB3aGlsZSAocmVhZFRhZ1Byb3BlcnR5KHN0YXRlKSB8fCByZWFkQW5jaG9yUHJvcGVydHkoc3RhdGUpKSB7XG4gICAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICAgIGF0TmV3TGluZSA9IHRydWU7XG4gICAgICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9IGFsbG93QmxvY2tTdHlsZXM7XG5cbiAgICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPiBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IHBhcmVudEluZGVudCkge1xuICAgICAgICAgIGluZGVudFN0YXR1cyA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IHBhcmVudEluZGVudCkge1xuICAgICAgICAgIGluZGVudFN0YXR1cyA9IC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxsb3dCbG9ja0NvbGxlY3Rpb25zKSB7XG4gICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zID0gYXROZXdMaW5lIHx8IGFsbG93Q29tcGFjdDtcbiAgfVxuXG4gIGlmIChpbmRlbnRTdGF0dXMgPT09IDEgfHwgQ09OVEVYVF9CTE9DS19PVVQgPT09IG5vZGVDb250ZXh0KSB7XG4gICAgaWYgKENPTlRFWFRfRkxPV19JTiA9PT0gbm9kZUNvbnRleHQgfHwgQ09OVEVYVF9GTE9XX09VVCA9PT0gbm9kZUNvbnRleHQpIHtcbiAgICAgIGZsb3dJbmRlbnQgPSBwYXJlbnRJbmRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsb3dJbmRlbnQgPSBwYXJlbnRJbmRlbnQgKyAxO1xuICAgIH1cblxuICAgIGJsb2NrSW5kZW50ID0gc3RhdGUucG9zaXRpb24gLSBzdGF0ZS5saW5lU3RhcnQ7XG5cbiAgICBpZiAoaW5kZW50U3RhdHVzID09PSAxKSB7XG4gICAgICBpZiAoYWxsb3dCbG9ja0NvbGxlY3Rpb25zICYmXG4gICAgICAgICAgKHJlYWRCbG9ja1NlcXVlbmNlKHN0YXRlLCBibG9ja0luZGVudCkgfHxcbiAgICAgICAgICAgcmVhZEJsb2NrTWFwcGluZyhzdGF0ZSwgYmxvY2tJbmRlbnQsIGZsb3dJbmRlbnQpKSB8fFxuICAgICAgICAgIHJlYWRGbG93Q29sbGVjdGlvbihzdGF0ZSwgZmxvd0luZGVudCkpIHtcbiAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGFsbG93QmxvY2tTY2FsYXJzICYmIHJlYWRCbG9ja1NjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkpIHx8XG4gICAgICAgICAgICByZWFkU2luZ2xlUXVvdGVkU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50KSB8fFxuICAgICAgICAgICAgcmVhZERvdWJsZVF1b3RlZFNjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkpIHtcbiAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlYWRBbGlhcyhzdGF0ZSkpIHtcbiAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChzdGF0ZS50YWcgIT09IG51bGwgfHwgc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYWxpYXMgbm9kZSBzaG91bGQgbm90IGhhdmUgYW55IHByb3BlcnRpZXMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWFkUGxhaW5TY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQsIENPTlRFWFRfRkxPV19JTiA9PT0gbm9kZUNvbnRleHQpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc3RhdGUudGFnID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS50YWcgPSAnPyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbmRlbnRTdGF0dXMgPT09IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZTogYmxvY2sgc2VxdWVuY2VzIGFyZSBhbGxvd2VkIHRvIGhhdmUgc2FtZSBpbmRlbnRhdGlvbiBsZXZlbCBhcyB0aGUgcGFyZW50LlxuICAgICAgLy8gaHR0cDovL3d3dy55YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjaWQyNzk5Nzg0XG4gICAgICBoYXNDb250ZW50ID0gYWxsb3dCbG9ja0NvbGxlY3Rpb25zICYmIHJlYWRCbG9ja1NlcXVlbmNlKHN0YXRlLCBibG9ja0luZGVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICchJykge1xuICAgIGlmIChzdGF0ZS50YWcgPT09ICc/Jykge1xuICAgICAgLy8gSW1wbGljaXQgcmVzb2x2aW5nIGlzIG5vdCBhbGxvd2VkIGZvciBub24tc2NhbGFyIHR5cGVzLCBhbmQgJz8nXG4gICAgICAvLyBub24tc3BlY2lmaWMgdGFnIGlzIG9ubHkgYXV0b21hdGljYWxseSBhc3NpZ25lZCB0byBwbGFpbiBzY2FsYXJzLlxuICAgICAgLy9cbiAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byBjaGVjayBraW5kIGNvbmZvcm1pdHkgaW4gY2FzZSB1c2VyIGV4cGxpY2l0bHkgYXNzaWducyAnPydcbiAgICAgIC8vIHRhZywgZm9yIGV4YW1wbGUgbGlrZSB0aGlzOiBcIiE8Pz4gWzBdXCJcbiAgICAgIC8vXG4gICAgICBpZiAoc3RhdGUucmVzdWx0ICE9PSBudWxsICYmIHN0YXRlLmtpbmQgIT09ICdzY2FsYXInKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmFjY2VwdGFibGUgbm9kZSBraW5kIGZvciAhPD8+IHRhZzsgaXQgc2hvdWxkIGJlIFwic2NhbGFyXCIsIG5vdCBcIicgKyBzdGF0ZS5raW5kICsgJ1wiJyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodHlwZUluZGV4ID0gMCwgdHlwZVF1YW50aXR5ID0gc3RhdGUuaW1wbGljaXRUeXBlcy5sZW5ndGg7IHR5cGVJbmRleCA8IHR5cGVRdWFudGl0eTsgdHlwZUluZGV4ICs9IDEpIHtcbiAgICAgICAgdHlwZSA9IHN0YXRlLmltcGxpY2l0VHlwZXNbdHlwZUluZGV4XTtcblxuICAgICAgICBpZiAodHlwZS5yZXNvbHZlKHN0YXRlLnJlc3VsdCkpIHsgLy8gYHN0YXRlLnJlc3VsdGAgdXBkYXRlZCBpbiByZXNvbHZlciBpZiBtYXRjaGVkXG4gICAgICAgICAgc3RhdGUucmVzdWx0ID0gdHlwZS5jb25zdHJ1Y3Qoc3RhdGUucmVzdWx0KTtcbiAgICAgICAgICBzdGF0ZS50YWcgPSB0eXBlLnRhZztcbiAgICAgICAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLnR5cGVNYXBbc3RhdGUua2luZCB8fCAnZmFsbGJhY2snXSwgc3RhdGUudGFnKSkge1xuICAgICAgdHlwZSA9IHN0YXRlLnR5cGVNYXBbc3RhdGUua2luZCB8fCAnZmFsbGJhY2snXVtzdGF0ZS50YWddO1xuXG4gICAgICBpZiAoc3RhdGUucmVzdWx0ICE9PSBudWxsICYmIHR5cGUua2luZCAhPT0gc3RhdGUua2luZCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIG5vZGUga2luZCBmb3IgITwnICsgc3RhdGUudGFnICsgJz4gdGFnOyBpdCBzaG91bGQgYmUgXCInICsgdHlwZS5raW5kICsgJ1wiLCBub3QgXCInICsgc3RhdGUua2luZCArICdcIicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXR5cGUucmVzb2x2ZShzdGF0ZS5yZXN1bHQpKSB7IC8vIGBzdGF0ZS5yZXN1bHRgIHVwZGF0ZWQgaW4gcmVzb2x2ZXIgaWYgbWF0Y2hlZFxuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2Fubm90IHJlc29sdmUgYSBub2RlIHdpdGggITwnICsgc3RhdGUudGFnICsgJz4gZXhwbGljaXQgdGFnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5yZXN1bHQgPSB0eXBlLmNvbnN0cnVjdChzdGF0ZS5yZXN1bHQpO1xuICAgICAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3Vua25vd24gdGFnICE8JyArIHN0YXRlLnRhZyArICc+Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgc3RhdGUubGlzdGVuZXIoJ2Nsb3NlJywgc3RhdGUpO1xuICB9XG4gIHJldHVybiBzdGF0ZS50YWcgIT09IG51bGwgfHwgIHN0YXRlLmFuY2hvciAhPT0gbnVsbCB8fCBoYXNDb250ZW50O1xufVxuXG5mdW5jdGlvbiByZWFkRG9jdW1lbnQoc3RhdGUpIHtcbiAgdmFyIGRvY3VtZW50U3RhcnQgPSBzdGF0ZS5wb3NpdGlvbixcbiAgICAgIF9wb3NpdGlvbixcbiAgICAgIGRpcmVjdGl2ZU5hbWUsXG4gICAgICBkaXJlY3RpdmVBcmdzLFxuICAgICAgaGFzRGlyZWN0aXZlcyA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgc3RhdGUudmVyc2lvbiA9IG51bGw7XG4gIHN0YXRlLmNoZWNrTGluZUJyZWFrcyA9IHN0YXRlLmxlZ2FjeTtcbiAgc3RhdGUudGFnTWFwID0ge307XG4gIHN0YXRlLmFuY2hvck1hcCA9IHt9O1xuXG4gIHdoaWxlICgoY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSkgIT09IDApIHtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPiAwIHx8IGNoICE9PSAweDI1LyogJSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaGFzRGlyZWN0aXZlcyA9IHRydWU7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZGlyZWN0aXZlTmFtZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICAgIGRpcmVjdGl2ZUFyZ3MgPSBbXTtcblxuICAgIGlmIChkaXJlY3RpdmVOYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkaXJlY3RpdmUgbmFtZSBtdXN0IG5vdCBiZSBsZXNzIHRoYW4gb25lIGNoYXJhY3RlciBpbiBsZW5ndGgnKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfRU9MKGNoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNfRU9MKGNoKSkgYnJlYWs7XG5cbiAgICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBkaXJlY3RpdmVBcmdzLnB1c2goc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbikpO1xuICAgIH1cblxuICAgIGlmIChjaCAhPT0gMCkgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG5cbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwoZGlyZWN0aXZlSGFuZGxlcnMsIGRpcmVjdGl2ZU5hbWUpKSB7XG4gICAgICBkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmVOYW1lXShzdGF0ZSwgZGlyZWN0aXZlTmFtZSwgZGlyZWN0aXZlQXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ3Vua25vd24gZG9jdW1lbnQgZGlyZWN0aXZlIFwiJyArIGRpcmVjdGl2ZU5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH1cblxuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IDAgJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pICAgICA9PT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKSA9PT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAyKSA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbiArPSAzO1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcblxuICB9IGVsc2UgaWYgKGhhc0RpcmVjdGl2ZXMpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZGlyZWN0aXZlcyBlbmQgbWFyayBpcyBleHBlY3RlZCcpO1xuICB9XG5cbiAgY29tcG9zZU5vZGUoc3RhdGUsIHN0YXRlLmxpbmVJbmRlbnQgLSAxLCBDT05URVhUX0JMT0NLX09VVCwgZmFsc2UsIHRydWUpO1xuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgaWYgKHN0YXRlLmNoZWNrTGluZUJyZWFrcyAmJlxuICAgICAgUEFUVEVSTl9OT05fQVNDSUlfTElORV9CUkVBS1MudGVzdChzdGF0ZS5pbnB1dC5zbGljZShkb2N1bWVudFN0YXJ0LCBzdGF0ZS5wb3NpdGlvbikpKSB7XG4gICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAnbm9uLUFTQ0lJIGxpbmUgYnJlYWtzIGFyZSBpbnRlcnByZXRlZCBhcyBjb250ZW50Jyk7XG4gIH1cblxuICBzdGF0ZS5kb2N1bWVudHMucHVzaChzdGF0ZS5yZXN1bHQpO1xuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcblxuICAgIGlmIChzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSA9PT0gMHgyRS8qIC4gKi8pIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uICs9IDM7XG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA8IChzdGF0ZS5sZW5ndGggLSAxKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdlbmQgb2YgdGhlIHN0cmVhbSBvciBhIGRvY3VtZW50IHNlcGFyYXRvciBpcyBleHBlY3RlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWREb2N1bWVudHMoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaW5wdXQgPSBTdHJpbmcoaW5wdXQpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaW5wdXQubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAvLyBBZGQgdGFpbGluZyBgXFxuYCBpZiBub3QgZXhpc3RzXG4gICAgaWYgKGlucHV0LmNoYXJDb2RlQXQoaW5wdXQubGVuZ3RoIC0gMSkgIT09IDB4MEEvKiBMRiAqLyAmJlxuICAgICAgICBpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpICE9PSAweDBELyogQ1IgKi8pIHtcbiAgICAgIGlucHV0ICs9ICdcXG4nO1xuICAgIH1cblxuICAgIC8vIFN0cmlwIEJPTVxuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlKGlucHV0LCBvcHRpb25zKTtcblxuICB2YXIgbnVsbHBvcyA9IGlucHV0LmluZGV4T2YoJ1xcMCcpO1xuXG4gIGlmIChudWxscG9zICE9PSAtMSkge1xuICAgIHN0YXRlLnBvc2l0aW9uID0gbnVsbHBvcztcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbnVsbCBieXRlIGlzIG5vdCBhbGxvd2VkIGluIGlucHV0Jyk7XG4gIH1cblxuICAvLyBVc2UgMCBhcyBzdHJpbmcgdGVybWluYXRvci4gVGhhdCBzaWduaWZpY2FudGx5IHNpbXBsaWZpZXMgYm91bmRzIGNoZWNrLlxuICBzdGF0ZS5pbnB1dCArPSAnXFwwJztcblxuICB3aGlsZSAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MjAvKiBTcGFjZSAqLykge1xuICAgIHN0YXRlLmxpbmVJbmRlbnQgKz0gMTtcbiAgICBzdGF0ZS5wb3NpdGlvbiArPSAxO1xuICB9XG5cbiAgd2hpbGUgKHN0YXRlLnBvc2l0aW9uIDwgKHN0YXRlLmxlbmd0aCAtIDEpKSB7XG4gICAgcmVhZERvY3VtZW50KHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5kb2N1bWVudHM7XG59XG5cblxuZnVuY3Rpb24gbG9hZEFsbChpbnB1dCwgaXRlcmF0b3IsIG9wdGlvbnMpIHtcbiAgaWYgKGl0ZXJhdG9yICE9PSBudWxsICYmIHR5cGVvZiBpdGVyYXRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IGl0ZXJhdG9yO1xuICAgIGl0ZXJhdG9yID0gbnVsbDtcbiAgfVxuXG4gIHZhciBkb2N1bWVudHMgPSBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKTtcblxuICBpZiAodHlwZW9mIGl0ZXJhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50cztcbiAgfVxuXG4gIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gZG9jdW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBpdGVyYXRvcihkb2N1bWVudHNbaW5kZXhdKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWQoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdmFyIGRvY3VtZW50cyA9IGxvYWREb2N1bWVudHMoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIGlmIChkb2N1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQqL1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBkb2N1bWVudHNbMF07XG4gIH1cbiAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ2V4cGVjdGVkIGEgc2luZ2xlIGRvY3VtZW50IGluIHRoZSBzdHJlYW0sIGJ1dCBmb3VuZCBtb3JlJyk7XG59XG5cblxuZnVuY3Rpb24gc2FmZUxvYWRBbGwoaW5wdXQsIGl0ZXJhdG9yLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3IgPT09ICdvYmplY3QnICYmIGl0ZXJhdG9yICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBpdGVyYXRvcjtcbiAgICBpdGVyYXRvciA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbG9hZEFsbChpbnB1dCwgaXRlcmF0b3IsIGNvbW1vbi5leHRlbmQoeyBzY2hlbWE6IERFRkFVTFRfU0FGRV9TQ0hFTUEgfSwgb3B0aW9ucykpO1xufVxuXG5cbmZ1bmN0aW9uIHNhZmVMb2FkKGlucHV0LCBvcHRpb25zKSB7XG4gIHJldHVybiBsb2FkKGlucHV0LCBjb21tb24uZXh0ZW5kKHsgc2NoZW1hOiBERUZBVUxUX1NBRkVfU0NIRU1BIH0sIG9wdGlvbnMpKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5sb2FkQWxsICAgICA9IGxvYWRBbGw7XG5tb2R1bGUuZXhwb3J0cy5sb2FkICAgICAgICA9IGxvYWQ7XG5tb2R1bGUuZXhwb3J0cy5zYWZlTG9hZEFsbCA9IHNhZmVMb2FkQWxsO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWQgICAgPSBzYWZlTG9hZDtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUqL1xuXG52YXIgY29tbW9uICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uJyk7XG52YXIgWUFNTEV4Y2VwdGlvbiAgICAgICA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG52YXIgREVGQVVMVF9GVUxMX1NDSEVNQSA9IHJlcXVpcmUoJy4vc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xudmFyIERFRkFVTFRfU0FGRV9TQ0hFTUEgPSByZXF1aXJlKCcuL3NjaGVtYS9kZWZhdWx0X3NhZmUnKTtcblxudmFyIF90b1N0cmluZyAgICAgICA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIENIQVJfVEFCICAgICAgICAgICAgICAgICAgPSAweDA5OyAvKiBUYWIgKi9cbnZhciBDSEFSX0xJTkVfRkVFRCAgICAgICAgICAgID0gMHgwQTsgLyogTEYgKi9cbnZhciBDSEFSX0NBUlJJQUdFX1JFVFVSTiAgICAgID0gMHgwRDsgLyogQ1IgKi9cbnZhciBDSEFSX1NQQUNFICAgICAgICAgICAgICAgID0gMHgyMDsgLyogU3BhY2UgKi9cbnZhciBDSEFSX0VYQ0xBTUFUSU9OICAgICAgICAgID0gMHgyMTsgLyogISAqL1xudmFyIENIQVJfRE9VQkxFX1FVT1RFICAgICAgICAgPSAweDIyOyAvKiBcIiAqL1xudmFyIENIQVJfU0hBUlAgICAgICAgICAgICAgICAgPSAweDIzOyAvKiAjICovXG52YXIgQ0hBUl9QRVJDRU5UICAgICAgICAgICAgICA9IDB4MjU7IC8qICUgKi9cbnZhciBDSEFSX0FNUEVSU0FORCAgICAgICAgICAgID0gMHgyNjsgLyogJiAqL1xudmFyIENIQVJfU0lOR0xFX1FVT1RFICAgICAgICAgPSAweDI3OyAvKiAnICovXG52YXIgQ0hBUl9BU1RFUklTSyAgICAgICAgICAgICA9IDB4MkE7IC8qICogKi9cbnZhciBDSEFSX0NPTU1BICAgICAgICAgICAgICAgID0gMHgyQzsgLyogLCAqL1xudmFyIENIQVJfTUlOVVMgICAgICAgICAgICAgICAgPSAweDJEOyAvKiAtICovXG52YXIgQ0hBUl9DT0xPTiAgICAgICAgICAgICAgICA9IDB4M0E7IC8qIDogKi9cbnZhciBDSEFSX0VRVUFMUyAgICAgICAgICAgICAgID0gMHgzRDsgLyogPSAqL1xudmFyIENIQVJfR1JFQVRFUl9USEFOICAgICAgICAgPSAweDNFOyAvKiA+ICovXG52YXIgQ0hBUl9RVUVTVElPTiAgICAgICAgICAgICA9IDB4M0Y7IC8qID8gKi9cbnZhciBDSEFSX0NPTU1FUkNJQUxfQVQgICAgICAgID0gMHg0MDsgLyogQCAqL1xudmFyIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVCAgPSAweDVCOyAvKiBbICovXG52YXIgQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCA9IDB4NUQ7IC8qIF0gKi9cbnZhciBDSEFSX0dSQVZFX0FDQ0VOVCAgICAgICAgID0gMHg2MDsgLyogYCAqL1xudmFyIENIQVJfTEVGVF9DVVJMWV9CUkFDS0VUICAgPSAweDdCOyAvKiB7ICovXG52YXIgQ0hBUl9WRVJUSUNBTF9MSU5FICAgICAgICA9IDB4N0M7IC8qIHwgKi9cbnZhciBDSEFSX1JJR0hUX0NVUkxZX0JSQUNLRVQgID0gMHg3RDsgLyogfSAqL1xuXG52YXIgRVNDQVBFX1NFUVVFTkNFUyA9IHt9O1xuXG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDBdICAgPSAnXFxcXDAnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDA3XSAgID0gJ1xcXFxhJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwOF0gICA9ICdcXFxcYic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDldICAgPSAnXFxcXHQnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBBXSAgID0gJ1xcXFxuJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwQl0gICA9ICdcXFxcdic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MENdICAgPSAnXFxcXGYnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBEXSAgID0gJ1xcXFxyJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgxQl0gICA9ICdcXFxcZSc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjJdICAgPSAnXFxcXFwiJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHg1Q10gICA9ICdcXFxcXFxcXCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4ODVdICAgPSAnXFxcXE4nO1xuRVNDQVBFX1NFUVVFTkNFU1sweEEwXSAgID0gJ1xcXFxfJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgyMDI4XSA9ICdcXFxcTCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjAyOV0gPSAnXFxcXFAnO1xuXG52YXIgREVQUkVDQVRFRF9CT09MRUFOU19TWU5UQVggPSBbXG4gICd5JywgJ1knLCAneWVzJywgJ1llcycsICdZRVMnLCAnb24nLCAnT24nLCAnT04nLFxuICAnbicsICdOJywgJ25vJywgJ05vJywgJ05PJywgJ29mZicsICdPZmYnLCAnT0ZGJ1xuXTtcblxuZnVuY3Rpb24gY29tcGlsZVN0eWxlTWFwKHNjaGVtYSwgbWFwKSB7XG4gIHZhciByZXN1bHQsIGtleXMsIGluZGV4LCBsZW5ndGgsIHRhZywgc3R5bGUsIHR5cGU7XG5cbiAgaWYgKG1hcCA9PT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHJlc3VsdCA9IHt9O1xuICBrZXlzID0gT2JqZWN0LmtleXMobWFwKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdGFnID0ga2V5c1tpbmRleF07XG4gICAgc3R5bGUgPSBTdHJpbmcobWFwW3RhZ10pO1xuXG4gICAgaWYgKHRhZy5zbGljZSgwLCAyKSA9PT0gJyEhJykge1xuICAgICAgdGFnID0gJ3RhZzp5YW1sLm9yZywyMDAyOicgKyB0YWcuc2xpY2UoMik7XG4gICAgfVxuICAgIHR5cGUgPSBzY2hlbWEuY29tcGlsZWRUeXBlTWFwWydmYWxsYmFjayddW3RhZ107XG5cbiAgICBpZiAodHlwZSAmJiBfaGFzT3duUHJvcGVydHkuY2FsbCh0eXBlLnN0eWxlQWxpYXNlcywgc3R5bGUpKSB7XG4gICAgICBzdHlsZSA9IHR5cGUuc3R5bGVBbGlhc2VzW3N0eWxlXTtcbiAgICB9XG5cbiAgICByZXN1bHRbdGFnXSA9IHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSGV4KGNoYXJhY3Rlcikge1xuICB2YXIgc3RyaW5nLCBoYW5kbGUsIGxlbmd0aDtcblxuICBzdHJpbmcgPSBjaGFyYWN0ZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cbiAgaWYgKGNoYXJhY3RlciA8PSAweEZGKSB7XG4gICAgaGFuZGxlID0gJ3gnO1xuICAgIGxlbmd0aCA9IDI7XG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyIDw9IDB4RkZGRikge1xuICAgIGhhbmRsZSA9ICd1JztcbiAgICBsZW5ndGggPSA0O1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA8PSAweEZGRkZGRkZGKSB7XG4gICAgaGFuZGxlID0gJ1UnO1xuICAgIGxlbmd0aCA9IDg7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ2NvZGUgcG9pbnQgd2l0aGluIGEgc3RyaW5nIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIDB4RkZGRkZGRkYnKTtcbiAgfVxuXG4gIHJldHVybiAnXFxcXCcgKyBoYW5kbGUgKyBjb21tb24ucmVwZWF0KCcwJywgbGVuZ3RoIC0gc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFN0YXRlKG9wdGlvbnMpIHtcbiAgdGhpcy5zY2hlbWEgICAgICAgID0gb3B0aW9uc1snc2NoZW1hJ10gfHwgREVGQVVMVF9GVUxMX1NDSEVNQTtcbiAgdGhpcy5pbmRlbnQgICAgICAgID0gTWF0aC5tYXgoMSwgKG9wdGlvbnNbJ2luZGVudCddIHx8IDIpKTtcbiAgdGhpcy5ub0FycmF5SW5kZW50ID0gb3B0aW9uc1snbm9BcnJheUluZGVudCddIHx8IGZhbHNlO1xuICB0aGlzLnNraXBJbnZhbGlkICAgPSBvcHRpb25zWydza2lwSW52YWxpZCddIHx8IGZhbHNlO1xuICB0aGlzLmZsb3dMZXZlbCAgICAgPSAoY29tbW9uLmlzTm90aGluZyhvcHRpb25zWydmbG93TGV2ZWwnXSkgPyAtMSA6IG9wdGlvbnNbJ2Zsb3dMZXZlbCddKTtcbiAgdGhpcy5zdHlsZU1hcCAgICAgID0gY29tcGlsZVN0eWxlTWFwKHRoaXMuc2NoZW1hLCBvcHRpb25zWydzdHlsZXMnXSB8fCBudWxsKTtcbiAgdGhpcy5zb3J0S2V5cyAgICAgID0gb3B0aW9uc1snc29ydEtleXMnXSB8fCBmYWxzZTtcbiAgdGhpcy5saW5lV2lkdGggICAgID0gb3B0aW9uc1snbGluZVdpZHRoJ10gfHwgODA7XG4gIHRoaXMubm9SZWZzICAgICAgICA9IG9wdGlvbnNbJ25vUmVmcyddIHx8IGZhbHNlO1xuICB0aGlzLm5vQ29tcGF0TW9kZSAgPSBvcHRpb25zWydub0NvbXBhdE1vZGUnXSB8fCBmYWxzZTtcbiAgdGhpcy5jb25kZW5zZUZsb3cgID0gb3B0aW9uc1snY29uZGVuc2VGbG93J10gfHwgZmFsc2U7XG5cbiAgdGhpcy5pbXBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRJbXBsaWNpdDtcbiAgdGhpcy5leHBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRFeHBsaWNpdDtcblxuICB0aGlzLnRhZyA9IG51bGw7XG4gIHRoaXMucmVzdWx0ID0gJyc7XG5cbiAgdGhpcy5kdXBsaWNhdGVzID0gW107XG4gIHRoaXMudXNlZER1cGxpY2F0ZXMgPSBudWxsO1xufVxuXG4vLyBJbmRlbnRzIGV2ZXJ5IGxpbmUgaW4gYSBzdHJpbmcuIEVtcHR5IGxpbmVzIChcXG4gb25seSkgYXJlIG5vdCBpbmRlbnRlZC5cbmZ1bmN0aW9uIGluZGVudFN0cmluZyhzdHJpbmcsIHNwYWNlcykge1xuICB2YXIgaW5kID0gY29tbW9uLnJlcGVhdCgnICcsIHNwYWNlcyksXG4gICAgICBwb3NpdGlvbiA9IDAsXG4gICAgICBuZXh0ID0gLTEsXG4gICAgICByZXN1bHQgPSAnJyxcbiAgICAgIGxpbmUsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgIG5leHQgPSBzdHJpbmcuaW5kZXhPZignXFxuJywgcG9zaXRpb24pO1xuICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgbGluZSA9IHN0cmluZy5zbGljZShwb3NpdGlvbik7XG4gICAgICBwb3NpdGlvbiA9IGxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZSA9IHN0cmluZy5zbGljZShwb3NpdGlvbiwgbmV4dCArIDEpO1xuICAgICAgcG9zaXRpb24gPSBuZXh0ICsgMTtcbiAgICB9XG5cbiAgICBpZiAobGluZS5sZW5ndGggJiYgbGluZSAhPT0gJ1xcbicpIHJlc3VsdCArPSBpbmQ7XG5cbiAgICByZXN1bHQgKz0gbGluZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKSB7XG4gIHJldHVybiAnXFxuJyArIGNvbW1vbi5yZXBlYXQoJyAnLCBzdGF0ZS5pbmRlbnQgKiBsZXZlbCk7XG59XG5cbmZ1bmN0aW9uIHRlc3RJbXBsaWNpdFJlc29sdmluZyhzdGF0ZSwgc3RyKSB7XG4gIHZhciBpbmRleCwgbGVuZ3RoLCB0eXBlO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBzdGF0ZS5pbXBsaWNpdFR5cGVzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB0eXBlID0gc3RhdGUuaW1wbGljaXRUeXBlc1tpbmRleF07XG5cbiAgICBpZiAodHlwZS5yZXNvbHZlKHN0cikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gWzMzXSBzLXdoaXRlIDo6PSBzLXNwYWNlIHwgcy10YWJcbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjKSB7XG4gIHJldHVybiBjID09PSBDSEFSX1NQQUNFIHx8IGMgPT09IENIQVJfVEFCO1xufVxuXG4vLyBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBjYW4gYmUgcHJpbnRlZCB3aXRob3V0IGVzY2FwaW5nLlxuLy8gRnJvbSBZQU1MIDEuMjogXCJhbnkgYWxsb3dlZCBjaGFyYWN0ZXJzIGtub3duIHRvIGJlIG5vbi1wcmludGFibGVcbi8vIHNob3VsZCBhbHNvIGJlIGVzY2FwZWQuIFtIb3dldmVyLF0gVGhpcyBpc25cdTIwMTl0IG1hbmRhdG9yeVwiXG4vLyBEZXJpdmVkIGZyb20gbmItY2hhciAtIFxcdCAtICN4ODUgLSAjeEEwIC0gI3gyMDI4IC0gI3gyMDI5LlxuZnVuY3Rpb24gaXNQcmludGFibGUoYykge1xuICByZXR1cm4gICgweDAwMDIwIDw9IGMgJiYgYyA8PSAweDAwMDA3RSlcbiAgICAgIHx8ICgoMHgwMDBBMSA8PSBjICYmIGMgPD0gMHgwMEQ3RkYpICYmIGMgIT09IDB4MjAyOCAmJiBjICE9PSAweDIwMjkpXG4gICAgICB8fCAoKDB4MEUwMDAgPD0gYyAmJiBjIDw9IDB4MDBGRkZEKSAmJiBjICE9PSAweEZFRkYgLyogQk9NICovKVxuICAgICAgfHwgICgweDEwMDAwIDw9IGMgJiYgYyA8PSAweDEwRkZGRik7XG59XG5cbi8vIFszNF0gbnMtY2hhciA6Oj0gbmItY2hhciAtIHMtd2hpdGVcbi8vIFsyN10gbmItY2hhciA6Oj0gYy1wcmludGFibGUgLSBiLWNoYXIgLSBjLWJ5dGUtb3JkZXItbWFya1xuLy8gWzI2XSBiLWNoYXIgIDo6PSBiLWxpbmUtZmVlZCB8IGItY2FycmlhZ2UtcmV0dXJuXG4vLyBbMjRdIGItbGluZS1mZWVkICAgICAgIDo6PSAgICAgI3hBICAgIC8qIExGICovXG4vLyBbMjVdIGItY2FycmlhZ2UtcmV0dXJuIDo6PSAgICAgI3hEICAgIC8qIENSICovXG4vLyBbM10gIGMtYnl0ZS1vcmRlci1tYXJrIDo6PSAgICAgI3hGRUZGXG5mdW5jdGlvbiBpc05zQ2hhcihjKSB7XG4gIHJldHVybiBpc1ByaW50YWJsZShjKSAmJiAhaXNXaGl0ZXNwYWNlKGMpXG4gICAgLy8gYnl0ZS1vcmRlci1tYXJrXG4gICAgJiYgYyAhPT0gMHhGRUZGXG4gICAgLy8gYi1jaGFyXG4gICAgJiYgYyAhPT0gQ0hBUl9DQVJSSUFHRV9SRVRVUk5cbiAgICAmJiBjICE9PSBDSEFSX0xJTkVfRkVFRDtcbn1cblxuLy8gU2ltcGxpZmllZCB0ZXN0IGZvciB2YWx1ZXMgYWxsb3dlZCBhZnRlciB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHBsYWluIHN0eWxlLlxuZnVuY3Rpb24gaXNQbGFpblNhZmUoYywgcHJldikge1xuICAvLyBVc2VzIGEgc3Vic2V0IG9mIG5iLWNoYXIgLSBjLWZsb3ctaW5kaWNhdG9yIC0gXCI6XCIgLSBcIiNcIlxuICAvLyB3aGVyZSBuYi1jaGFyIDo6PSBjLXByaW50YWJsZSAtIGItY2hhciAtIGMtYnl0ZS1vcmRlci1tYXJrLlxuICByZXR1cm4gaXNQcmludGFibGUoYykgJiYgYyAhPT0gMHhGRUZGXG4gICAgLy8gLSBjLWZsb3ctaW5kaWNhdG9yXG4gICAgJiYgYyAhPT0gQ0hBUl9DT01NQVxuICAgICYmIGMgIT09IENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfQ1VSTFlfQlJBQ0tFVFxuICAgIC8vIC0gXCI6XCIgLSBcIiNcIlxuICAgIC8vIC8qIEFuIG5zLWNoYXIgcHJlY2VkaW5nICovIFwiI1wiXG4gICAgJiYgYyAhPT0gQ0hBUl9DT0xPTlxuICAgICYmICgoYyAhPT0gQ0hBUl9TSEFSUCkgfHwgKHByZXYgJiYgaXNOc0NoYXIocHJldikpKTtcbn1cblxuLy8gU2ltcGxpZmllZCB0ZXN0IGZvciB2YWx1ZXMgYWxsb3dlZCBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHBsYWluIHN0eWxlLlxuZnVuY3Rpb24gaXNQbGFpblNhZmVGaXJzdChjKSB7XG4gIC8vIFVzZXMgYSBzdWJzZXQgb2YgbnMtY2hhciAtIGMtaW5kaWNhdG9yXG4gIC8vIHdoZXJlIG5zLWNoYXIgPSBuYi1jaGFyIC0gcy13aGl0ZS5cbiAgcmV0dXJuIGlzUHJpbnRhYmxlKGMpICYmIGMgIT09IDB4RkVGRlxuICAgICYmICFpc1doaXRlc3BhY2UoYykgLy8gLSBzLXdoaXRlXG4gICAgLy8gLSAoYy1pbmRpY2F0b3IgOjo9XG4gICAgLy8gXHUyMDFDLVx1MjAxRCB8IFx1MjAxQz9cdTIwMUQgfCBcdTIwMUM6XHUyMDFEIHwgXHUyMDFDLFx1MjAxRCB8IFx1MjAxQ1tcdTIwMUQgfCBcdTIwMUNdXHUyMDFEIHwgXHUyMDFDe1x1MjAxRCB8IFx1MjAxQ31cdTIwMURcbiAgICAmJiBjICE9PSBDSEFSX01JTlVTXG4gICAgJiYgYyAhPT0gQ0hBUl9RVUVTVElPTlxuICAgICYmIGMgIT09IENIQVJfQ09MT05cbiAgICAmJiBjICE9PSBDSEFSX0NPTU1BXG4gICAgJiYgYyAhPT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfTEVGVF9DVVJMWV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9DVVJMWV9CUkFDS0VUXG4gICAgLy8gfCBcdTIwMUMjXHUyMDFEIHwgXHUyMDFDJlx1MjAxRCB8IFx1MjAxQypcdTIwMUQgfCBcdTIwMUMhXHUyMDFEIHwgXHUyMDFDfFx1MjAxRCB8IFx1MjAxQz1cdTIwMUQgfCBcdTIwMUM+XHUyMDFEIHwgXHUyMDFDJ1x1MjAxRCB8IFx1MjAxQ1wiXHUyMDFEXG4gICAgJiYgYyAhPT0gQ0hBUl9TSEFSUFxuICAgICYmIGMgIT09IENIQVJfQU1QRVJTQU5EXG4gICAgJiYgYyAhPT0gQ0hBUl9BU1RFUklTS1xuICAgICYmIGMgIT09IENIQVJfRVhDTEFNQVRJT05cbiAgICAmJiBjICE9PSBDSEFSX1ZFUlRJQ0FMX0xJTkVcbiAgICAmJiBjICE9PSBDSEFSX0VRVUFMU1xuICAgICYmIGMgIT09IENIQVJfR1JFQVRFUl9USEFOXG4gICAgJiYgYyAhPT0gQ0hBUl9TSU5HTEVfUVVPVEVcbiAgICAmJiBjICE9PSBDSEFSX0RPVUJMRV9RVU9URVxuICAgIC8vIHwgXHUyMDFDJVx1MjAxRCB8IFx1MjAxQ0BcdTIwMUQgfCBcdTIwMUNgXHUyMDFEKVxuICAgICYmIGMgIT09IENIQVJfUEVSQ0VOVFxuICAgICYmIGMgIT09IENIQVJfQ09NTUVSQ0lBTF9BVFxuICAgICYmIGMgIT09IENIQVJfR1JBVkVfQUNDRU5UO1xufVxuXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYmxvY2sgaW5kZW50YXRpb24gaW5kaWNhdG9yIGlzIHJlcXVpcmVkLlxuZnVuY3Rpb24gbmVlZEluZGVudEluZGljYXRvcihzdHJpbmcpIHtcbiAgdmFyIGxlYWRpbmdTcGFjZVJlID0gL15cXG4qIC87XG4gIHJldHVybiBsZWFkaW5nU3BhY2VSZS50ZXN0KHN0cmluZyk7XG59XG5cbnZhciBTVFlMRV9QTEFJTiAgID0gMSxcbiAgICBTVFlMRV9TSU5HTEUgID0gMixcbiAgICBTVFlMRV9MSVRFUkFMID0gMyxcbiAgICBTVFlMRV9GT0xERUQgID0gNCxcbiAgICBTVFlMRV9ET1VCTEUgID0gNTtcblxuLy8gRGV0ZXJtaW5lcyB3aGljaCBzY2FsYXIgc3R5bGVzIGFyZSBwb3NzaWJsZSBhbmQgcmV0dXJucyB0aGUgcHJlZmVycmVkIHN0eWxlLlxuLy8gbGluZVdpZHRoID0gLTEgPT4gbm8gbGltaXQuXG4vLyBQcmUtY29uZGl0aW9uczogc3RyLmxlbmd0aCA+IDAuXG4vLyBQb3N0LWNvbmRpdGlvbnM6XG4vLyAgICBTVFlMRV9QTEFJTiBvciBTVFlMRV9TSU5HTEUgPT4gbm8gXFxuIGFyZSBpbiB0aGUgc3RyaW5nLlxuLy8gICAgU1RZTEVfTElURVJBTCA9PiBubyBsaW5lcyBhcmUgc3VpdGFibGUgZm9yIGZvbGRpbmcgKG9yIGxpbmVXaWR0aCBpcyAtMSkuXG4vLyAgICBTVFlMRV9GT0xERUQgPT4gYSBsaW5lID4gbGluZVdpZHRoIGFuZCBjYW4gYmUgZm9sZGVkIChhbmQgbGluZVdpZHRoICE9IC0xKS5cbmZ1bmN0aW9uIGNob29zZVNjYWxhclN0eWxlKHN0cmluZywgc2luZ2xlTGluZU9ubHksIGluZGVudFBlckxldmVsLCBsaW5lV2lkdGgsIHRlc3RBbWJpZ3VvdXNUeXBlKSB7XG4gIHZhciBpO1xuICB2YXIgY2hhciwgcHJldl9jaGFyO1xuICB2YXIgaGFzTGluZUJyZWFrID0gZmFsc2U7XG4gIHZhciBoYXNGb2xkYWJsZUxpbmUgPSBmYWxzZTsgLy8gb25seSBjaGVja2VkIGlmIHNob3VsZFRyYWNrV2lkdGhcbiAgdmFyIHNob3VsZFRyYWNrV2lkdGggPSBsaW5lV2lkdGggIT09IC0xO1xuICB2YXIgcHJldmlvdXNMaW5lQnJlYWsgPSAtMTsgLy8gY291bnQgdGhlIGZpcnN0IGxpbmUgY29ycmVjdGx5XG4gIHZhciBwbGFpbiA9IGlzUGxhaW5TYWZlRmlyc3Qoc3RyaW5nLmNoYXJDb2RlQXQoMCkpXG4gICAgICAgICAgJiYgIWlzV2hpdGVzcGFjZShzdHJpbmcuY2hhckNvZGVBdChzdHJpbmcubGVuZ3RoIC0gMSkpO1xuXG4gIGlmIChzaW5nbGVMaW5lT25seSkge1xuICAgIC8vIENhc2U6IG5vIGJsb2NrIHN0eWxlcy5cbiAgICAvLyBDaGVjayBmb3IgZGlzYWxsb3dlZCBjaGFyYWN0ZXJzIHRvIHJ1bGUgb3V0IHBsYWluIGFuZCBzaW5nbGUuXG4gICAgZm9yIChpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhciA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgaWYgKCFpc1ByaW50YWJsZShjaGFyKSkge1xuICAgICAgICByZXR1cm4gU1RZTEVfRE9VQkxFO1xuICAgICAgfVxuICAgICAgcHJldl9jaGFyID0gaSA+IDAgPyBzdHJpbmcuY2hhckNvZGVBdChpIC0gMSkgOiBudWxsO1xuICAgICAgcGxhaW4gPSBwbGFpbiAmJiBpc1BsYWluU2FmZShjaGFyLCBwcmV2X2NoYXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDYXNlOiBibG9jayBzdHlsZXMgcGVybWl0dGVkLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgIGlmIChjaGFyID09PSBDSEFSX0xJTkVfRkVFRCkge1xuICAgICAgICBoYXNMaW5lQnJlYWsgPSB0cnVlO1xuICAgICAgICAvLyBDaGVjayBpZiBhbnkgbGluZSBjYW4gYmUgZm9sZGVkLlxuICAgICAgICBpZiAoc2hvdWxkVHJhY2tXaWR0aCkge1xuICAgICAgICAgIGhhc0ZvbGRhYmxlTGluZSA9IGhhc0ZvbGRhYmxlTGluZSB8fFxuICAgICAgICAgICAgLy8gRm9sZGFibGUgbGluZSA9IHRvbyBsb25nLCBhbmQgbm90IG1vcmUtaW5kZW50ZWQuXG4gICAgICAgICAgICAoaSAtIHByZXZpb3VzTGluZUJyZWFrIC0gMSA+IGxpbmVXaWR0aCAmJlxuICAgICAgICAgICAgIHN0cmluZ1twcmV2aW91c0xpbmVCcmVhayArIDFdICE9PSAnICcpO1xuICAgICAgICAgIHByZXZpb3VzTGluZUJyZWFrID0gaTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNQcmludGFibGUoY2hhcikpIHtcbiAgICAgICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgICAgIH1cbiAgICAgIHByZXZfY2hhciA9IGkgPiAwID8gc3RyaW5nLmNoYXJDb2RlQXQoaSAtIDEpIDogbnVsbDtcbiAgICAgIHBsYWluID0gcGxhaW4gJiYgaXNQbGFpblNhZmUoY2hhciwgcHJldl9jaGFyKTtcbiAgICB9XG4gICAgLy8gaW4gY2FzZSB0aGUgZW5kIGlzIG1pc3NpbmcgYSBcXG5cbiAgICBoYXNGb2xkYWJsZUxpbmUgPSBoYXNGb2xkYWJsZUxpbmUgfHwgKHNob3VsZFRyYWNrV2lkdGggJiZcbiAgICAgIChpIC0gcHJldmlvdXNMaW5lQnJlYWsgLSAxID4gbGluZVdpZHRoICYmXG4gICAgICAgc3RyaW5nW3ByZXZpb3VzTGluZUJyZWFrICsgMV0gIT09ICcgJykpO1xuICB9XG4gIC8vIEFsdGhvdWdoIGV2ZXJ5IHN0eWxlIGNhbiByZXByZXNlbnQgXFxuIHdpdGhvdXQgZXNjYXBpbmcsIHByZWZlciBibG9jayBzdHlsZXNcbiAgLy8gZm9yIG11bHRpbGluZSwgc2luY2UgdGhleSdyZSBtb3JlIHJlYWRhYmxlIGFuZCB0aGV5IGRvbid0IGFkZCBlbXB0eSBsaW5lcy5cbiAgLy8gQWxzbyBwcmVmZXIgZm9sZGluZyBhIHN1cGVyLWxvbmcgbGluZS5cbiAgaWYgKCFoYXNMaW5lQnJlYWsgJiYgIWhhc0ZvbGRhYmxlTGluZSkge1xuICAgIC8vIFN0cmluZ3MgaW50ZXJwcmV0YWJsZSBhcyBhbm90aGVyIHR5cGUgaGF2ZSB0byBiZSBxdW90ZWQ7XG4gICAgLy8gZS5nLiB0aGUgc3RyaW5nICd0cnVlJyB2cy4gdGhlIGJvb2xlYW4gdHJ1ZS5cbiAgICByZXR1cm4gcGxhaW4gJiYgIXRlc3RBbWJpZ3VvdXNUeXBlKHN0cmluZylcbiAgICAgID8gU1RZTEVfUExBSU4gOiBTVFlMRV9TSU5HTEU7XG4gIH1cbiAgLy8gRWRnZSBjYXNlOiBibG9jayBpbmRlbnRhdGlvbiBpbmRpY2F0b3IgY2FuIG9ubHkgaGF2ZSBvbmUgZGlnaXQuXG4gIGlmIChpbmRlbnRQZXJMZXZlbCA+IDkgJiYgbmVlZEluZGVudEluZGljYXRvcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgfVxuICAvLyBBdCB0aGlzIHBvaW50IHdlIGtub3cgYmxvY2sgc3R5bGVzIGFyZSB2YWxpZC5cbiAgLy8gUHJlZmVyIGxpdGVyYWwgc3R5bGUgdW5sZXNzIHdlIHdhbnQgdG8gZm9sZC5cbiAgcmV0dXJuIGhhc0ZvbGRhYmxlTGluZSA/IFNUWUxFX0ZPTERFRCA6IFNUWUxFX0xJVEVSQUw7XG59XG5cbi8vIE5vdGU6IGxpbmUgYnJlYWtpbmcvZm9sZGluZyBpcyBpbXBsZW1lbnRlZCBmb3Igb25seSB0aGUgZm9sZGVkIHN0eWxlLlxuLy8gTkIuIFdlIGRyb3AgdGhlIGxhc3QgdHJhaWxpbmcgbmV3bGluZSAoaWYgYW55KSBvZiBhIHJldHVybmVkIGJsb2NrIHNjYWxhclxuLy8gIHNpbmNlIHRoZSBkdW1wZXIgYWRkcyBpdHMgb3duIG5ld2xpbmUuIFRoaXMgYWx3YXlzIHdvcmtzOlxuLy8gICAgXHUyMDIyIE5vIGVuZGluZyBuZXdsaW5lID0+IHVuYWZmZWN0ZWQ7IGFscmVhZHkgdXNpbmcgc3RyaXAgXCItXCIgY2hvbXBpbmcuXG4vLyAgICBcdTIwMjIgRW5kaW5nIG5ld2xpbmUgICAgPT4gcmVtb3ZlZCB0aGVuIHJlc3RvcmVkLlxuLy8gIEltcG9ydGFudGx5LCB0aGlzIGtlZXBzIHRoZSBcIitcIiBjaG9tcCBpbmRpY2F0b3IgZnJvbSBnYWluaW5nIGFuIGV4dHJhIGxpbmUuXG5mdW5jdGlvbiB3cml0ZVNjYWxhcihzdGF0ZSwgc3RyaW5nLCBsZXZlbCwgaXNrZXkpIHtcbiAgc3RhdGUuZHVtcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBcIicnXCI7XG4gICAgfVxuICAgIGlmICghc3RhdGUubm9Db21wYXRNb2RlICYmXG4gICAgICAgIERFUFJFQ0FURURfQk9PTEVBTlNfU1lOVEFYLmluZGV4T2Yoc3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBcIidcIiArIHN0cmluZyArIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBpbmRlbnQgPSBzdGF0ZS5pbmRlbnQgKiBNYXRoLm1heCgxLCBsZXZlbCk7IC8vIG5vIDAtaW5kZW50IHNjYWxhcnNcbiAgICAvLyBBcyBpbmRlbnRhdGlvbiBnZXRzIGRlZXBlciwgbGV0IHRoZSB3aWR0aCBkZWNyZWFzZSBtb25vdG9uaWNhbGx5XG4gICAgLy8gdG8gdGhlIGxvd2VyIGJvdW5kIG1pbihzdGF0ZS5saW5lV2lkdGgsIDQwKS5cbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpbXBsaWVzXG4gICAgLy8gIHN0YXRlLmxpbmVXaWR0aCBcdTIyNjQgNDAgKyBzdGF0ZS5pbmRlbnQ6IHdpZHRoIGlzIGZpeGVkIGF0IHRoZSBsb3dlciBib3VuZC5cbiAgICAvLyAgc3RhdGUubGluZVdpZHRoID4gNDAgKyBzdGF0ZS5pbmRlbnQ6IHdpZHRoIGRlY3JlYXNlcyB1bnRpbCB0aGUgbG93ZXIgYm91bmQuXG4gICAgLy8gVGhpcyBiZWhhdmVzIGJldHRlciB0aGFuIGEgY29uc3RhbnQgbWluaW11bSB3aWR0aCB3aGljaCBkaXNhbGxvd3MgbmFycm93ZXIgb3B0aW9ucyxcbiAgICAvLyBvciBhbiBpbmRlbnQgdGhyZXNob2xkIHdoaWNoIGNhdXNlcyB0aGUgd2lkdGggdG8gc3VkZGVubHkgaW5jcmVhc2UuXG4gICAgdmFyIGxpbmVXaWR0aCA9IHN0YXRlLmxpbmVXaWR0aCA9PT0gLTFcbiAgICAgID8gLTEgOiBNYXRoLm1heChNYXRoLm1pbihzdGF0ZS5saW5lV2lkdGgsIDQwKSwgc3RhdGUubGluZVdpZHRoIC0gaW5kZW50KTtcblxuICAgIC8vIFdpdGhvdXQga25vd2luZyBpZiBrZXlzIGFyZSBpbXBsaWNpdC9leHBsaWNpdCwgYXNzdW1lIGltcGxpY2l0IGZvciBzYWZldHkuXG4gICAgdmFyIHNpbmdsZUxpbmVPbmx5ID0gaXNrZXlcbiAgICAgIC8vIE5vIGJsb2NrIHN0eWxlcyBpbiBmbG93IG1vZGUuXG4gICAgICB8fCAoc3RhdGUuZmxvd0xldmVsID4gLTEgJiYgbGV2ZWwgPj0gc3RhdGUuZmxvd0xldmVsKTtcbiAgICBmdW5jdGlvbiB0ZXN0QW1iaWd1aXR5KHN0cmluZykge1xuICAgICAgcmV0dXJuIHRlc3RJbXBsaWNpdFJlc29sdmluZyhzdGF0ZSwgc3RyaW5nKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNob29zZVNjYWxhclN0eWxlKHN0cmluZywgc2luZ2xlTGluZU9ubHksIHN0YXRlLmluZGVudCwgbGluZVdpZHRoLCB0ZXN0QW1iaWd1aXR5KSkge1xuICAgICAgY2FzZSBTVFlMRV9QTEFJTjpcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIGNhc2UgU1RZTEVfU0lOR0xFOlxuICAgICAgICByZXR1cm4gXCInXCIgKyBzdHJpbmcucmVwbGFjZSgvJy9nLCBcIicnXCIpICsgXCInXCI7XG4gICAgICBjYXNlIFNUWUxFX0xJVEVSQUw6XG4gICAgICAgIHJldHVybiAnfCcgKyBibG9ja0hlYWRlcihzdHJpbmcsIHN0YXRlLmluZGVudClcbiAgICAgICAgICArIGRyb3BFbmRpbmdOZXdsaW5lKGluZGVudFN0cmluZyhzdHJpbmcsIGluZGVudCkpO1xuICAgICAgY2FzZSBTVFlMRV9GT0xERUQ6XG4gICAgICAgIHJldHVybiAnPicgKyBibG9ja0hlYWRlcihzdHJpbmcsIHN0YXRlLmluZGVudClcbiAgICAgICAgICArIGRyb3BFbmRpbmdOZXdsaW5lKGluZGVudFN0cmluZyhmb2xkU3RyaW5nKHN0cmluZywgbGluZVdpZHRoKSwgaW5kZW50KSk7XG4gICAgICBjYXNlIFNUWUxFX0RPVUJMRTpcbiAgICAgICAgcmV0dXJuICdcIicgKyBlc2NhcGVTdHJpbmcoc3RyaW5nLCBsaW5lV2lkdGgpICsgJ1wiJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdpbXBvc3NpYmxlIGVycm9yOiBpbnZhbGlkIHNjYWxhciBzdHlsZScpO1xuICAgIH1cbiAgfSgpKTtcbn1cblxuLy8gUHJlLWNvbmRpdGlvbnM6IHN0cmluZyBpcyB2YWxpZCBmb3IgYSBibG9jayBzY2FsYXIsIDEgPD0gaW5kZW50UGVyTGV2ZWwgPD0gOS5cbmZ1bmN0aW9uIGJsb2NrSGVhZGVyKHN0cmluZywgaW5kZW50UGVyTGV2ZWwpIHtcbiAgdmFyIGluZGVudEluZGljYXRvciA9IG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSA/IFN0cmluZyhpbmRlbnRQZXJMZXZlbCkgOiAnJztcblxuICAvLyBub3RlIHRoZSBzcGVjaWFsIGNhc2U6IHRoZSBzdHJpbmcgJ1xcbicgY291bnRzIGFzIGEgXCJ0cmFpbGluZ1wiIGVtcHR5IGxpbmUuXG4gIHZhciBjbGlwID0gICAgICAgICAgc3RyaW5nW3N0cmluZy5sZW5ndGggLSAxXSA9PT0gJ1xcbic7XG4gIHZhciBrZWVwID0gY2xpcCAmJiAoc3RyaW5nW3N0cmluZy5sZW5ndGggLSAyXSA9PT0gJ1xcbicgfHwgc3RyaW5nID09PSAnXFxuJyk7XG4gIHZhciBjaG9tcCA9IGtlZXAgPyAnKycgOiAoY2xpcCA/ICcnIDogJy0nKTtcblxuICByZXR1cm4gaW5kZW50SW5kaWNhdG9yICsgY2hvbXAgKyAnXFxuJztcbn1cblxuLy8gKFNlZSB0aGUgbm90ZSBmb3Igd3JpdGVTY2FsYXIuKVxuZnVuY3Rpb24gZHJvcEVuZGluZ05ld2xpbmUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdbc3RyaW5nLmxlbmd0aCAtIDFdID09PSAnXFxuJyA/IHN0cmluZy5zbGljZSgwLCAtMSkgOiBzdHJpbmc7XG59XG5cbi8vIE5vdGU6IGEgbG9uZyBsaW5lIHdpdGhvdXQgYSBzdWl0YWJsZSBicmVhayBwb2ludCB3aWxsIGV4Y2VlZCB0aGUgd2lkdGggbGltaXQuXG4vLyBQcmUtY29uZGl0aW9uczogZXZlcnkgY2hhciBpbiBzdHIgaXNQcmludGFibGUsIHN0ci5sZW5ndGggPiAwLCB3aWR0aCA+IDAuXG5mdW5jdGlvbiBmb2xkU3RyaW5nKHN0cmluZywgd2lkdGgpIHtcbiAgLy8gSW4gZm9sZGVkIHN0eWxlLCAkayQgY29uc2VjdXRpdmUgbmV3bGluZXMgb3V0cHV0IGFzICRrKzEkIG5ld2xpbmVzXHUyMDE0XG4gIC8vIHVubGVzcyB0aGV5J3JlIGJlZm9yZSBvciBhZnRlciBhIG1vcmUtaW5kZW50ZWQgbGluZSwgb3IgYXQgdGhlIHZlcnlcbiAgLy8gYmVnaW5uaW5nIG9yIGVuZCwgaW4gd2hpY2ggY2FzZSAkayQgbWFwcyB0byAkayQuXG4gIC8vIFRoZXJlZm9yZSwgcGFyc2UgZWFjaCBjaHVuayBhcyBuZXdsaW5lKHMpIGZvbGxvd2VkIGJ5IGEgY29udGVudCBsaW5lLlxuICB2YXIgbGluZVJlID0gLyhcXG4rKShbXlxcbl0qKS9nO1xuXG4gIC8vIGZpcnN0IGxpbmUgKHBvc3NpYmx5IGFuIGVtcHR5IGxpbmUpXG4gIHZhciByZXN1bHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXh0TEYgPSBzdHJpbmcuaW5kZXhPZignXFxuJyk7XG4gICAgbmV4dExGID0gbmV4dExGICE9PSAtMSA/IG5leHRMRiA6IHN0cmluZy5sZW5ndGg7XG4gICAgbGluZVJlLmxhc3RJbmRleCA9IG5leHRMRjtcbiAgICByZXR1cm4gZm9sZExpbmUoc3RyaW5nLnNsaWNlKDAsIG5leHRMRiksIHdpZHRoKTtcbiAgfSgpKTtcbiAgLy8gSWYgd2UgaGF2ZW4ndCByZWFjaGVkIHRoZSBmaXJzdCBjb250ZW50IGxpbmUgeWV0LCBkb24ndCBhZGQgYW4gZXh0cmEgXFxuLlxuICB2YXIgcHJldk1vcmVJbmRlbnRlZCA9IHN0cmluZ1swXSA9PT0gJ1xcbicgfHwgc3RyaW5nWzBdID09PSAnICc7XG4gIHZhciBtb3JlSW5kZW50ZWQ7XG5cbiAgLy8gcmVzdCBvZiB0aGUgbGluZXNcbiAgdmFyIG1hdGNoO1xuICB3aGlsZSAoKG1hdGNoID0gbGluZVJlLmV4ZWMoc3RyaW5nKSkpIHtcbiAgICB2YXIgcHJlZml4ID0gbWF0Y2hbMV0sIGxpbmUgPSBtYXRjaFsyXTtcbiAgICBtb3JlSW5kZW50ZWQgPSAobGluZVswXSA9PT0gJyAnKTtcbiAgICByZXN1bHQgKz0gcHJlZml4XG4gICAgICArICghcHJldk1vcmVJbmRlbnRlZCAmJiAhbW9yZUluZGVudGVkICYmIGxpbmUgIT09ICcnXG4gICAgICAgID8gJ1xcbicgOiAnJylcbiAgICAgICsgZm9sZExpbmUobGluZSwgd2lkdGgpO1xuICAgIHByZXZNb3JlSW5kZW50ZWQgPSBtb3JlSW5kZW50ZWQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHcmVlZHkgbGluZSBicmVha2luZy5cbi8vIFBpY2tzIHRoZSBsb25nZXN0IGxpbmUgdW5kZXIgdGhlIGxpbWl0IGVhY2ggdGltZSxcbi8vIG90aGVyd2lzZSBzZXR0bGVzIGZvciB0aGUgc2hvcnRlc3QgbGluZSBvdmVyIHRoZSBsaW1pdC5cbi8vIE5CLiBNb3JlLWluZGVudGVkIGxpbmVzICpjYW5ub3QqIGJlIGZvbGRlZCwgYXMgdGhhdCB3b3VsZCBhZGQgYW4gZXh0cmEgXFxuLlxuZnVuY3Rpb24gZm9sZExpbmUobGluZSwgd2lkdGgpIHtcbiAgaWYgKGxpbmUgPT09ICcnIHx8IGxpbmVbMF0gPT09ICcgJykgcmV0dXJuIGxpbmU7XG5cbiAgLy8gU2luY2UgYSBtb3JlLWluZGVudGVkIGxpbmUgYWRkcyBhIFxcbiwgYnJlYWtzIGNhbid0IGJlIGZvbGxvd2VkIGJ5IGEgc3BhY2UuXG4gIHZhciBicmVha1JlID0gLyBbXiBdL2c7IC8vIG5vdGU6IHRoZSBtYXRjaCBpbmRleCB3aWxsIGFsd2F5cyBiZSA8PSBsZW5ndGgtMi5cbiAgdmFyIG1hdGNoO1xuICAvLyBzdGFydCBpcyBhbiBpbmNsdXNpdmUgaW5kZXguIGVuZCwgY3VyciwgYW5kIG5leHQgYXJlIGV4Y2x1c2l2ZS5cbiAgdmFyIHN0YXJ0ID0gMCwgZW5kLCBjdXJyID0gMCwgbmV4dCA9IDA7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICAvLyBJbnZhcmlhbnRzOiAwIDw9IHN0YXJ0IDw9IGxlbmd0aC0xLlxuICAvLyAgIDAgPD0gY3VyciA8PSBuZXh0IDw9IG1heCgwLCBsZW5ndGgtMikuIGN1cnIgLSBzdGFydCA8PSB3aWR0aC5cbiAgLy8gSW5zaWRlIHRoZSBsb29wOlxuICAvLyAgIEEgbWF0Y2ggaW1wbGllcyBsZW5ndGggPj0gMiwgc28gY3VyciBhbmQgbmV4dCBhcmUgPD0gbGVuZ3RoLTIuXG4gIHdoaWxlICgobWF0Y2ggPSBicmVha1JlLmV4ZWMobGluZSkpKSB7XG4gICAgbmV4dCA9IG1hdGNoLmluZGV4O1xuICAgIC8vIG1haW50YWluIGludmFyaWFudDogY3VyciAtIHN0YXJ0IDw9IHdpZHRoXG4gICAgaWYgKG5leHQgLSBzdGFydCA+IHdpZHRoKSB7XG4gICAgICBlbmQgPSAoY3VyciA+IHN0YXJ0KSA/IGN1cnIgOiBuZXh0OyAvLyBkZXJpdmUgZW5kIDw9IGxlbmd0aC0yXG4gICAgICByZXN1bHQgKz0gJ1xcbicgKyBsaW5lLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgLy8gc2tpcCB0aGUgc3BhY2UgdGhhdCB3YXMgb3V0cHV0IGFzIFxcblxuICAgICAgc3RhcnQgPSBlbmQgKyAxOyAgICAgICAgICAgICAgICAgICAgLy8gZGVyaXZlIHN0YXJ0IDw9IGxlbmd0aC0xXG4gICAgfVxuICAgIGN1cnIgPSBuZXh0O1xuICB9XG5cbiAgLy8gQnkgdGhlIGludmFyaWFudHMsIHN0YXJ0IDw9IGxlbmd0aC0xLCBzbyB0aGVyZSBpcyBzb21ldGhpbmcgbGVmdCBvdmVyLlxuICAvLyBJdCBpcyBlaXRoZXIgdGhlIHdob2xlIHN0cmluZyBvciBhIHBhcnQgc3RhcnRpbmcgZnJvbSBub24td2hpdGVzcGFjZS5cbiAgcmVzdWx0ICs9ICdcXG4nO1xuICAvLyBJbnNlcnQgYSBicmVhayBpZiB0aGUgcmVtYWluZGVyIGlzIHRvbyBsb25nIGFuZCB0aGVyZSBpcyBhIGJyZWFrIGF2YWlsYWJsZS5cbiAgaWYgKGxpbmUubGVuZ3RoIC0gc3RhcnQgPiB3aWR0aCAmJiBjdXJyID4gc3RhcnQpIHtcbiAgICByZXN1bHQgKz0gbGluZS5zbGljZShzdGFydCwgY3VycikgKyAnXFxuJyArIGxpbmUuc2xpY2UoY3VyciArIDEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCArPSBsaW5lLnNsaWNlKHN0YXJ0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuc2xpY2UoMSk7IC8vIGRyb3AgZXh0cmEgXFxuIGpvaW5lclxufVxuXG4vLyBFc2NhcGVzIGEgZG91YmxlLXF1b3RlZCBzdHJpbmcuXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNoYXIsIG5leHRDaGFyO1xuICB2YXIgZXNjYXBlU2VxO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhciA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIC8vIENoZWNrIGZvciBzdXJyb2dhdGUgcGFpcnMgKHJlZmVyZW5jZSBVbmljb2RlIDMuMCBzZWN0aW9uIFwiMy43IFN1cnJvZ2F0ZXNcIikuXG4gICAgaWYgKGNoYXIgPj0gMHhEODAwICYmIGNoYXIgPD0gMHhEQkZGLyogaGlnaCBzdXJyb2dhdGUgKi8pIHtcbiAgICAgIG5leHRDaGFyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgaWYgKG5leHRDaGFyID49IDB4REMwMCAmJiBuZXh0Q2hhciA8PSAweERGRkYvKiBsb3cgc3Vycm9nYXRlICovKSB7XG4gICAgICAgIC8vIENvbWJpbmUgdGhlIHN1cnJvZ2F0ZSBwYWlyIGFuZCBzdG9yZSBpdCBlc2NhcGVkLlxuICAgICAgICByZXN1bHQgKz0gZW5jb2RlSGV4KChjaGFyIC0gMHhEODAwKSAqIDB4NDAwICsgbmV4dENoYXIgLSAweERDMDAgKyAweDEwMDAwKTtcbiAgICAgICAgLy8gQWR2YW5jZSBpbmRleCBvbmUgZXh0cmEgc2luY2Ugd2UgYWxyZWFkeSB1c2VkIHRoYXQgY2hhciBoZXJlLlxuICAgICAgICBpKys7IGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlc2NhcGVTZXEgPSBFU0NBUEVfU0VRVUVOQ0VTW2NoYXJdO1xuICAgIHJlc3VsdCArPSAhZXNjYXBlU2VxICYmIGlzUHJpbnRhYmxlKGNoYXIpXG4gICAgICA/IHN0cmluZ1tpXVxuICAgICAgOiBlc2NhcGVTZXEgfHwgZW5jb2RlSGV4KGNoYXIpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG93U2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBvYmplY3QpIHtcbiAgdmFyIF9yZXN1bHQgPSAnJyxcbiAgICAgIF90YWcgICAgPSBzdGF0ZS50YWcsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAvLyBXcml0ZSBvbmx5IHZhbGlkIGVsZW1lbnRzLlxuICAgIGlmICh3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3RbaW5kZXhdLCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBpZiAoaW5kZXggIT09IDApIF9yZXN1bHQgKz0gJywnICsgKCFzdGF0ZS5jb25kZW5zZUZsb3cgPyAnICcgOiAnJyk7XG4gICAgICBfcmVzdWx0ICs9IHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9ICdbJyArIF9yZXN1bHQgKyAnXSc7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbGV2ZWwsIG9iamVjdCwgY29tcGFjdCkge1xuICB2YXIgX3Jlc3VsdCA9ICcnLFxuICAgICAgX3RhZyAgICA9IHN0YXRlLnRhZyxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIC8vIFdyaXRlIG9ubHkgdmFsaWQgZWxlbWVudHMuXG4gICAgaWYgKHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCBvYmplY3RbaW5kZXhdLCB0cnVlLCB0cnVlKSkge1xuICAgICAgaWYgKCFjb21wYWN0IHx8IGluZGV4ICE9PSAwKSB7XG4gICAgICAgIF9yZXN1bHQgKz0gZ2VuZXJhdGVOZXh0TGluZShzdGF0ZSwgbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuZHVtcCAmJiBDSEFSX0xJTkVfRkVFRCA9PT0gc3RhdGUuZHVtcC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgIF9yZXN1bHQgKz0gJy0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdCArPSAnLSAnO1xuICAgICAgfVxuXG4gICAgICBfcmVzdWx0ICs9IHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9IF9yZXN1bHQgfHwgJ1tdJzsgLy8gRW1wdHkgc2VxdWVuY2UgaWYgbm8gdmFsaWQgdmFsdWVzLlxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb3dNYXBwaW5nKHN0YXRlLCBsZXZlbCwgb2JqZWN0KSB7XG4gIHZhciBfcmVzdWx0ICAgICAgID0gJycsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9iamVjdEtleSxcbiAgICAgIG9iamVjdFZhbHVlLFxuICAgICAgcGFpckJ1ZmZlcjtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0S2V5TGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG5cbiAgICBwYWlyQnVmZmVyID0gJyc7XG4gICAgaWYgKGluZGV4ICE9PSAwKSBwYWlyQnVmZmVyICs9ICcsICc7XG5cbiAgICBpZiAoc3RhdGUuY29uZGVuc2VGbG93KSBwYWlyQnVmZmVyICs9ICdcIic7XG5cbiAgICBvYmplY3RLZXkgPSBvYmplY3RLZXlMaXN0W2luZGV4XTtcbiAgICBvYmplY3RWYWx1ZSA9IG9iamVjdFtvYmplY3RLZXldO1xuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3RLZXksIGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQga2V5O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kdW1wLmxlbmd0aCA+IDEwMjQpIHBhaXJCdWZmZXIgKz0gJz8gJztcblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcCArIChzdGF0ZS5jb25kZW5zZUZsb3cgPyAnXCInIDogJycpICsgJzonICsgKHN0YXRlLmNvbmRlbnNlRmxvdyA/ICcnIDogJyAnKTtcblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0VmFsdWUsIGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQgdmFsdWUuXG4gICAgfVxuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wO1xuXG4gICAgLy8gQm90aCBrZXkgYW5kIHZhbHVlIGFyZSB2YWxpZC5cbiAgICBfcmVzdWx0ICs9IHBhaXJCdWZmZXI7XG4gIH1cblxuICBzdGF0ZS50YWcgPSBfdGFnO1xuICBzdGF0ZS5kdW1wID0gJ3snICsgX3Jlc3VsdCArICd9Jztcbn1cblxuZnVuY3Rpb24gd3JpdGVCbG9ja01hcHBpbmcoc3RhdGUsIGxldmVsLCBvYmplY3QsIGNvbXBhY3QpIHtcbiAgdmFyIF9yZXN1bHQgICAgICAgPSAnJyxcbiAgICAgIF90YWcgICAgICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBvYmplY3RLZXlMaXN0ID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoLFxuICAgICAgb2JqZWN0S2V5LFxuICAgICAgb2JqZWN0VmFsdWUsXG4gICAgICBleHBsaWNpdFBhaXIsXG4gICAgICBwYWlyQnVmZmVyO1xuXG4gIC8vIEFsbG93IHNvcnRpbmcga2V5cyBzbyB0aGF0IHRoZSBvdXRwdXQgZmlsZSBpcyBkZXRlcm1pbmlzdGljXG4gIGlmIChzdGF0ZS5zb3J0S2V5cyA9PT0gdHJ1ZSkge1xuICAgIC8vIERlZmF1bHQgc29ydGluZ1xuICAgIG9iamVjdEtleUxpc3Quc29ydCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzdGF0ZS5zb3J0S2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEN1c3RvbSBzb3J0IGZ1bmN0aW9uXG4gICAgb2JqZWN0S2V5TGlzdC5zb3J0KHN0YXRlLnNvcnRLZXlzKTtcbiAgfSBlbHNlIGlmIChzdGF0ZS5zb3J0S2V5cykge1xuICAgIC8vIFNvbWV0aGluZyBpcyB3cm9uZ1xuICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdzb3J0S2V5cyBtdXN0IGJlIGEgYm9vbGVhbiBvciBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0S2V5TGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpckJ1ZmZlciA9ICcnO1xuXG4gICAgaWYgKCFjb21wYWN0IHx8IGluZGV4ICE9PSAwKSB7XG4gICAgICBwYWlyQnVmZmVyICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICB9XG5cbiAgICBvYmplY3RLZXkgPSBvYmplY3RLZXlMaXN0W2luZGV4XTtcbiAgICBvYmplY3RWYWx1ZSA9IG9iamVjdFtvYmplY3RLZXldO1xuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0S2V5LCB0cnVlLCB0cnVlLCB0cnVlKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCBrZXkuXG4gICAgfVxuXG4gICAgZXhwbGljaXRQYWlyID0gKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICc/JykgfHxcbiAgICAgICAgICAgICAgICAgICAoc3RhdGUuZHVtcCAmJiBzdGF0ZS5kdW1wLmxlbmd0aCA+IDEwMjQpO1xuXG4gICAgaWYgKGV4cGxpY2l0UGFpcikge1xuICAgICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICBwYWlyQnVmZmVyICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhaXJCdWZmZXIgKz0gJz8gJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXA7XG5cbiAgICBpZiAoZXhwbGljaXRQYWlyKSB7XG4gICAgICBwYWlyQnVmZmVyICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICB9XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCBvYmplY3RWYWx1ZSwgdHJ1ZSwgZXhwbGljaXRQYWlyKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCB2YWx1ZS5cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZHVtcCAmJiBDSEFSX0xJTkVfRkVFRCA9PT0gc3RhdGUuZHVtcC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICBwYWlyQnVmZmVyICs9ICc6JztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFpckJ1ZmZlciArPSAnOiAnO1xuICAgIH1cblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcDtcblxuICAgIC8vIEJvdGgga2V5IGFuZCB2YWx1ZSBhcmUgdmFsaWQuXG4gICAgX3Jlc3VsdCArPSBwYWlyQnVmZmVyO1xuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9IF9yZXN1bHQgfHwgJ3t9JzsgLy8gRW1wdHkgbWFwcGluZyBpZiBubyB2YWxpZCBwYWlycy5cbn1cblxuZnVuY3Rpb24gZGV0ZWN0VHlwZShzdGF0ZSwgb2JqZWN0LCBleHBsaWNpdCkge1xuICB2YXIgX3Jlc3VsdCwgdHlwZUxpc3QsIGluZGV4LCBsZW5ndGgsIHR5cGUsIHN0eWxlO1xuXG4gIHR5cGVMaXN0ID0gZXhwbGljaXQgPyBzdGF0ZS5leHBsaWNpdFR5cGVzIDogc3RhdGUuaW1wbGljaXRUeXBlcztcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdHlwZUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHR5cGUgPSB0eXBlTGlzdFtpbmRleF07XG5cbiAgICBpZiAoKHR5cGUuaW5zdGFuY2VPZiAgfHwgdHlwZS5wcmVkaWNhdGUpICYmXG4gICAgICAgICghdHlwZS5pbnN0YW5jZU9mIHx8ICgodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpICYmIChvYmplY3QgaW5zdGFuY2VvZiB0eXBlLmluc3RhbmNlT2YpKSkgJiZcbiAgICAgICAgKCF0eXBlLnByZWRpY2F0ZSAgfHwgdHlwZS5wcmVkaWNhdGUob2JqZWN0KSkpIHtcblxuICAgICAgc3RhdGUudGFnID0gZXhwbGljaXQgPyB0eXBlLnRhZyA6ICc/JztcblxuICAgICAgaWYgKHR5cGUucmVwcmVzZW50KSB7XG4gICAgICAgIHN0eWxlID0gc3RhdGUuc3R5bGVNYXBbdHlwZS50YWddIHx8IHR5cGUuZGVmYXVsdFN0eWxlO1xuXG4gICAgICAgIGlmIChfdG9TdHJpbmcuY2FsbCh0eXBlLnJlcHJlc2VudCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICAgICAgICBfcmVzdWx0ID0gdHlwZS5yZXByZXNlbnQob2JqZWN0LCBzdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2hhc093blByb3BlcnR5LmNhbGwodHlwZS5yZXByZXNlbnQsIHN0eWxlKSkge1xuICAgICAgICAgIF9yZXN1bHQgPSB0eXBlLnJlcHJlc2VudFtzdHlsZV0ob2JqZWN0LCBzdHlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJyE8JyArIHR5cGUudGFnICsgJz4gdGFnIHJlc29sdmVyIGFjY2VwdHMgbm90IFwiJyArIHN0eWxlICsgJ1wiIHN0eWxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5kdW1wID0gX3Jlc3VsdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBTZXJpYWxpemVzIGBvYmplY3RgIGFuZCB3cml0ZXMgaXQgdG8gZ2xvYmFsIGByZXN1bHRgLlxuLy8gUmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIG9yIGZhbHNlIG9uIGludmFsaWQgb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG9iamVjdCwgYmxvY2ssIGNvbXBhY3QsIGlza2V5KSB7XG4gIHN0YXRlLnRhZyA9IG51bGw7XG4gIHN0YXRlLmR1bXAgPSBvYmplY3Q7XG5cbiAgaWYgKCFkZXRlY3RUeXBlKHN0YXRlLCBvYmplY3QsIGZhbHNlKSkge1xuICAgIGRldGVjdFR5cGUoc3RhdGUsIG9iamVjdCwgdHJ1ZSk7XG4gIH1cblxuICB2YXIgdHlwZSA9IF90b1N0cmluZy5jYWxsKHN0YXRlLmR1bXApO1xuXG4gIGlmIChibG9jaykge1xuICAgIGJsb2NrID0gKHN0YXRlLmZsb3dMZXZlbCA8IDAgfHwgc3RhdGUuZmxvd0xldmVsID4gbGV2ZWwpO1xuICB9XG5cbiAgdmFyIG9iamVjdE9yQXJyYXkgPSB0eXBlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBBcnJheV0nLFxuICAgICAgZHVwbGljYXRlSW5kZXgsXG4gICAgICBkdXBsaWNhdGU7XG5cbiAgaWYgKG9iamVjdE9yQXJyYXkpIHtcbiAgICBkdXBsaWNhdGVJbmRleCA9IHN0YXRlLmR1cGxpY2F0ZXMuaW5kZXhPZihvYmplY3QpO1xuICAgIGR1cGxpY2F0ZSA9IGR1cGxpY2F0ZUluZGV4ICE9PSAtMTtcbiAgfVxuXG4gIGlmICgoc3RhdGUudGFnICE9PSBudWxsICYmIHN0YXRlLnRhZyAhPT0gJz8nKSB8fCBkdXBsaWNhdGUgfHwgKHN0YXRlLmluZGVudCAhPT0gMiAmJiBsZXZlbCA+IDApKSB7XG4gICAgY29tcGFjdCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGR1cGxpY2F0ZSAmJiBzdGF0ZS51c2VkRHVwbGljYXRlc1tkdXBsaWNhdGVJbmRleF0pIHtcbiAgICBzdGF0ZS5kdW1wID0gJypyZWZfJyArIGR1cGxpY2F0ZUluZGV4O1xuICB9IGVsc2Uge1xuICAgIGlmIChvYmplY3RPckFycmF5ICYmIGR1cGxpY2F0ZSAmJiAhc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdKSB7XG4gICAgICBzdGF0ZS51c2VkRHVwbGljYXRlc1tkdXBsaWNhdGVJbmRleF0gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgIGlmIChibG9jayAmJiAoT2JqZWN0LmtleXMoc3RhdGUuZHVtcCkubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICB3cml0ZUJsb2NrTWFwcGluZyhzdGF0ZSwgbGV2ZWwsIHN0YXRlLmR1bXAsIGNvbXBhY3QpO1xuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlRmxvd01hcHBpbmcoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wKTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyAnICcgKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICB2YXIgYXJyYXlMZXZlbCA9IChzdGF0ZS5ub0FycmF5SW5kZW50ICYmIChsZXZlbCA+IDApKSA/IGxldmVsIC0gMSA6IGxldmVsO1xuICAgICAgaWYgKGJsb2NrICYmIChzdGF0ZS5kdW1wLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgd3JpdGVCbG9ja1NlcXVlbmNlKHN0YXRlLCBhcnJheUxldmVsLCBzdGF0ZS5kdW1wLCBjb21wYWN0KTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZUZsb3dTZXF1ZW5jZShzdGF0ZSwgYXJyYXlMZXZlbCwgc3RhdGUuZHVtcCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgJyAnICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgIGlmIChzdGF0ZS50YWcgIT09ICc/Jykge1xuICAgICAgICB3cml0ZVNjYWxhcihzdGF0ZSwgc3RhdGUuZHVtcCwgbGV2ZWwsIGlza2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXRlLnNraXBJbnZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbigndW5hY2NlcHRhYmxlIGtpbmQgb2YgYW4gb2JqZWN0IHRvIGR1bXAgJyArIHR5cGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnPycpIHtcbiAgICAgIHN0YXRlLmR1bXAgPSAnITwnICsgc3RhdGUudGFnICsgJz4gJyArIHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldER1cGxpY2F0ZVJlZmVyZW5jZXMob2JqZWN0LCBzdGF0ZSkge1xuICB2YXIgb2JqZWN0cyA9IFtdLFxuICAgICAgZHVwbGljYXRlc0luZGV4ZXMgPSBbXSxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGluc3BlY3ROb2RlKG9iamVjdCwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBkdXBsaWNhdGVzSW5kZXhlcy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgc3RhdGUuZHVwbGljYXRlcy5wdXNoKG9iamVjdHNbZHVwbGljYXRlc0luZGV4ZXNbaW5kZXhdXSk7XG4gIH1cbiAgc3RhdGUudXNlZER1cGxpY2F0ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdE5vZGUob2JqZWN0LCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcykge1xuICB2YXIgb2JqZWN0S2V5TGlzdCxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoO1xuXG4gIGlmIChvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICBpbmRleCA9IG9iamVjdHMuaW5kZXhPZihvYmplY3QpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChkdXBsaWNhdGVzSW5kZXhlcy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgZHVwbGljYXRlc0luZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdHMucHVzaChvYmplY3QpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgIGluc3BlY3ROb2RlKG9iamVjdFtpbmRleF0sIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAgIGluc3BlY3ROb2RlKG9iamVjdFtvYmplY3RLZXlMaXN0W2luZGV4XV0sIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkdW1wKGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZShvcHRpb25zKTtcblxuICBpZiAoIXN0YXRlLm5vUmVmcykgZ2V0RHVwbGljYXRlUmVmZXJlbmNlcyhpbnB1dCwgc3RhdGUpO1xuXG4gIGlmICh3cml0ZU5vZGUoc3RhdGUsIDAsIGlucHV0LCB0cnVlLCB0cnVlKSkgcmV0dXJuIHN0YXRlLmR1bXAgKyAnXFxuJztcblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHNhZmVEdW1wKGlucHV0LCBvcHRpb25zKSB7XG4gIHJldHVybiBkdW1wKGlucHV0LCBjb21tb24uZXh0ZW5kKHsgc2NoZW1hOiBERUZBVUxUX1NBRkVfU0NIRU1BIH0sIG9wdGlvbnMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZHVtcCAgICAgPSBkdW1wO1xubW9kdWxlLmV4cG9ydHMuc2FmZUR1bXAgPSBzYWZlRHVtcDtcbiIsICIndXNlIHN0cmljdCc7XG5cblxudmFyIGxvYWRlciA9IHJlcXVpcmUoJy4vanMteWFtbC9sb2FkZXInKTtcbnZhciBkdW1wZXIgPSByZXF1aXJlKCcuL2pzLXlhbWwvZHVtcGVyJyk7XG5cblxuZnVuY3Rpb24gZGVwcmVjYXRlZChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiAnICsgbmFtZSArICcgaXMgZGVwcmVjYXRlZCBhbmQgY2Fubm90IGJlIHVzZWQuJyk7XG4gIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMuVHlwZSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC90eXBlJyk7XG5tb2R1bGUuZXhwb3J0cy5TY2hlbWEgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYScpO1xubW9kdWxlLmV4cG9ydHMuRkFJTFNBRkVfU0NIRU1BICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEvZmFpbHNhZmUnKTtcbm1vZHVsZS5leHBvcnRzLkpTT05fU0NIRU1BICAgICAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2pzb24nKTtcbm1vZHVsZS5leHBvcnRzLkNPUkVfU0NIRU1BICAgICAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2NvcmUnKTtcbm1vZHVsZS5leHBvcnRzLkRFRkFVTFRfU0FGRV9TQ0hFTUEgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfc2FmZScpO1xubW9kdWxlLmV4cG9ydHMuREVGQVVMVF9GVUxMX1NDSEVNQSA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEvZGVmYXVsdF9mdWxsJyk7XG5tb2R1bGUuZXhwb3J0cy5sb2FkICAgICAgICAgICAgICAgID0gbG9hZGVyLmxvYWQ7XG5tb2R1bGUuZXhwb3J0cy5sb2FkQWxsICAgICAgICAgICAgID0gbG9hZGVyLmxvYWRBbGw7XG5tb2R1bGUuZXhwb3J0cy5zYWZlTG9hZCAgICAgICAgICAgID0gbG9hZGVyLnNhZmVMb2FkO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWRBbGwgICAgICAgICA9IGxvYWRlci5zYWZlTG9hZEFsbDtcbm1vZHVsZS5leHBvcnRzLmR1bXAgICAgICAgICAgICAgICAgPSBkdW1wZXIuZHVtcDtcbm1vZHVsZS5leHBvcnRzLnNhZmVEdW1wICAgICAgICAgICAgPSBkdW1wZXIuc2FmZUR1bXA7XG5tb2R1bGUuZXhwb3J0cy5ZQU1MRXhjZXB0aW9uICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL2V4Y2VwdGlvbicpO1xuXG4vLyBEZXByZWNhdGVkIHNjaGVtYSBuYW1lcyBmcm9tIEpTLVlBTUwgMi4wLnhcbm1vZHVsZS5leHBvcnRzLk1JTklNQUxfU0NIRU1BID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9mYWlsc2FmZScpO1xubW9kdWxlLmV4cG9ydHMuU0FGRV9TQ0hFTUEgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfc2FmZScpO1xubW9kdWxlLmV4cG9ydHMuREVGQVVMVF9TQ0hFTUEgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xuXG4vLyBEZXByZWNhdGVkIGZ1bmN0aW9ucyBmcm9tIEpTLVlBTUwgMS54Lnhcbm1vZHVsZS5leHBvcnRzLnNjYW4gICAgICAgICAgID0gZGVwcmVjYXRlZCgnc2NhbicpO1xubW9kdWxlLmV4cG9ydHMucGFyc2UgICAgICAgICAgPSBkZXByZWNhdGVkKCdwYXJzZScpO1xubW9kdWxlLmV4cG9ydHMuY29tcG9zZSAgICAgICAgPSBkZXByZWNhdGVkKCdjb21wb3NlJyk7XG5tb2R1bGUuZXhwb3J0cy5hZGRDb25zdHJ1Y3RvciA9IGRlcHJlY2F0ZWQoJ2FkZENvbnN0cnVjdG9yJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB5YW1sID0gcmVxdWlyZSgnLi9saWIvanMteWFtbC5qcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0geWFtbDtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHlhbWwgPSByZXF1aXJlKCdqcy15YW1sJyk7XG5cbi8qKlxuICogRGVmYXVsdCBlbmdpbmVzXG4gKi9cblxuY29uc3QgZW5naW5lcyA9IGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBZQU1MXG4gKi9cblxuZW5naW5lcy55YW1sID0ge1xuICBwYXJzZTogeWFtbC5zYWZlTG9hZC5iaW5kKHlhbWwpLFxuICBzdHJpbmdpZnk6IHlhbWwuc2FmZUR1bXAuYmluZCh5YW1sKVxufTtcblxuLyoqXG4gKiBKU09OXG4gKi9cblxuZW5naW5lcy5qc29uID0ge1xuICBwYXJzZTogSlNPTi5wYXJzZS5iaW5kKEpTT04pLFxuICBzdHJpbmdpZnk6IGZ1bmN0aW9uKG9iaiwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtyZXBsYWNlcjogbnVsbCwgc3BhY2U6IDJ9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBvcHRzLnJlcGxhY2VyLCBvcHRzLnNwYWNlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBKYXZhU2NyaXB0XG4gKi9cblxuZW5naW5lcy5qYXZhc2NyaXB0ID0ge1xuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zLCB3cmFwKSB7XG4gICAgLyogZXNsaW50IG5vLWV2YWw6IDAgKi9cbiAgICB0cnkge1xuICAgICAgaWYgKHdyYXAgIT09IGZhbHNlKSB7XG4gICAgICAgIHN0ciA9ICcoZnVuY3Rpb24oKSB7XFxucmV0dXJuICcgKyBzdHIudHJpbSgpICsgJztcXG59KCkpOyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXZhbChzdHIpIHx8IHt9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKHdyYXAgIT09IGZhbHNlICYmIC8odW5leHBlY3RlZHxpZGVudGlmaWVyKS9pLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgICAgIHJldHVybiBwYXJzZShzdHIsIG9wdGlvbnMsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihlcnIpO1xuICAgIH1cbiAgfSxcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0cmluZ2lmeWluZyBKYXZhU2NyaXB0IGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgfVxufTtcbiIsICIvKiFcbiAqIHN0cmlwLWJvbS1zdHJpbmcgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L3N0cmlwLWJvbS1zdHJpbmc+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCAyMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyAmJiBzdHIuY2hhckF0KDApID09PSAnXFx1ZmVmZicpIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBzdHI7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RyaXBCb20gPSByZXF1aXJlKCdzdHJpcC1ib20tc3RyaW5nJyk7XG5jb25zdCB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG5cbmV4cG9ydHMuZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbCkge1xuICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB2YWxcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsYCBpcyBhIGJ1ZmZlclxuICovXG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVPZih2YWwpID09PSAnYnVmZmVyJztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGB2YWxgIGlzIGFuIG9iamVjdFxuICovXG5cbmV4cG9ydHMuaXNPYmplY3QgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVPZih2YWwpID09PSAnb2JqZWN0Jztcbn07XG5cbi8qKlxuICogQ2FzdCBgaW5wdXRgIHRvIGEgYnVmZmVyXG4gKi9cblxuZXhwb3J0cy50b0J1ZmZlciA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gQnVmZmVyLmZyb20oaW5wdXQpIDogaW5wdXQ7XG59O1xuXG4vKipcbiAqIENhc3QgYHZhbGAgdG8gYSBzdHJpbmcuXG4gKi9cblxuZXhwb3J0cy50b1N0cmluZyA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gIGlmIChleHBvcnRzLmlzQnVmZmVyKGlucHV0KSkgcmV0dXJuIHN0cmlwQm9tKFN0cmluZyhpbnB1dCkpO1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGlucHV0IHRvIGJlIGEgc3RyaW5nIG9yIGJ1ZmZlcicpO1xuICB9XG4gIHJldHVybiBzdHJpcEJvbShpbnB1dCk7XG59O1xuXG4vKipcbiAqIENhc3QgYHZhbGAgdG8gYW4gYXJyYXkuXG4gKi9cblxuZXhwb3J0cy5hcnJheWlmeSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdmFsID8gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdKSA6IFtdO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYHN0cmAgc3RhcnRzIHdpdGggYHN1YnN0cmAuXG4gKi9cblxuZXhwb3J0cy5zdGFydHNXaXRoID0gZnVuY3Rpb24oc3RyLCBzdWJzdHIsIGxlbikge1xuICBpZiAodHlwZW9mIGxlbiAhPT0gJ251bWJlcicpIGxlbiA9IHN1YnN0ci5sZW5ndGg7XG4gIHJldHVybiBzdHIuc2xpY2UoMCwgbGVuKSA9PT0gc3Vic3RyO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVuZ2luZXMgPSByZXF1aXJlKCcuL2VuZ2luZXMnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXG4gIC8vIGVuc3VyZSB0aGF0IGRlbGltaXRlcnMgYXJlIGFuIGFycmF5XG4gIG9wdHMuZGVsaW1pdGVycyA9IHV0aWxzLmFycmF5aWZ5KG9wdHMuZGVsaW1zIHx8IG9wdHMuZGVsaW1pdGVycyB8fCAnLS0tJyk7XG4gIGlmIChvcHRzLmRlbGltaXRlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgb3B0cy5kZWxpbWl0ZXJzLnB1c2gob3B0cy5kZWxpbWl0ZXJzWzBdKTtcbiAgfVxuXG4gIG9wdHMubGFuZ3VhZ2UgPSAob3B0cy5sYW5ndWFnZSB8fCBvcHRzLmxhbmcgfHwgJ3lhbWwnKS50b0xvd2VyQ2FzZSgpO1xuICBvcHRzLmVuZ2luZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbmdpbmVzLCBvcHRzLnBhcnNlcnMsIG9wdHMuZW5naW5lcyk7XG4gIHJldHVybiBvcHRzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSwgb3B0aW9ucykge1xuICBsZXQgZW5naW5lID0gb3B0aW9ucy5lbmdpbmVzW25hbWVdIHx8IG9wdGlvbnMuZW5naW5lc1thbGlhc2UobmFtZSldO1xuICBpZiAodHlwZW9mIGVuZ2luZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dyYXktbWF0dGVyIGVuZ2luZSBcIicgKyBuYW1lICsgJ1wiIGlzIG5vdCByZWdpc3RlcmVkJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmdpbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbmdpbmUgPSB7IHBhcnNlOiBlbmdpbmUgfTtcbiAgfVxuICByZXR1cm4gZW5naW5lO1xufTtcblxuZnVuY3Rpb24gYWxpYXNlKG5hbWUpIHtcbiAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdqcyc6XG4gICAgY2FzZSAnamF2YXNjcmlwdCc6XG4gICAgICByZXR1cm4gJ2phdmFzY3JpcHQnO1xuICAgIGNhc2UgJ2NvZmZlZSc6XG4gICAgY2FzZSAnY29mZmVlc2NyaXB0JzpcbiAgICBjYXNlICdjc29uJzpcbiAgICAgIHJldHVybiAnY29mZmVlJztcbiAgICBjYXNlICd5YW1sJzpcbiAgICBjYXNlICd5bWwnOlxuICAgICAgcmV0dXJuICd5YW1sJztcbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcbmNvbnN0IGdldEVuZ2luZSA9IHJlcXVpcmUoJy4vZW5naW5lJyk7XG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmaWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gIGlmIChkYXRhID09IG51bGwgJiYgb3B0aW9ucyA9PSBudWxsKSB7XG4gICAgc3dpdGNoICh0eXBlT2YoZmlsZSkpIHtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGRhdGEgPSBmaWxlLmRhdGE7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgZmlsZSB0byBiZSBhIHN0cmluZyBvciBvYmplY3QnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzdHIgPSBmaWxlLmNvbnRlbnQ7XG4gIGNvbnN0IG9wdHMgPSBkZWZhdWx0cyhvcHRpb25zKTtcbiAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgIGlmICghb3B0cy5kYXRhKSByZXR1cm4gZmlsZTtcbiAgICBkYXRhID0gb3B0cy5kYXRhO1xuICB9XG5cbiAgY29uc3QgbGFuZ3VhZ2UgPSBmaWxlLmxhbmd1YWdlIHx8IG9wdHMubGFuZ3VhZ2U7XG4gIGNvbnN0IGVuZ2luZSA9IGdldEVuZ2luZShsYW5ndWFnZSwgb3B0cyk7XG4gIGlmICh0eXBlb2YgZW5naW5lLnN0cmluZ2lmeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIFwiJyArIGxhbmd1YWdlICsgJy5zdHJpbmdpZnlcIiB0byBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsZS5kYXRhLCBkYXRhKTtcbiAgY29uc3Qgb3BlbiA9IG9wdHMuZGVsaW1pdGVyc1swXTtcbiAgY29uc3QgY2xvc2UgPSBvcHRzLmRlbGltaXRlcnNbMV07XG4gIGNvbnN0IG1hdHRlciA9IGVuZ2luZS5zdHJpbmdpZnkoZGF0YSwgb3B0aW9ucykudHJpbSgpO1xuICBsZXQgYnVmID0gJyc7XG5cbiAgaWYgKG1hdHRlciAhPT0gJ3t9Jykge1xuICAgIGJ1ZiA9IG5ld2xpbmUob3BlbikgKyBuZXdsaW5lKG1hdHRlcikgKyBuZXdsaW5lKGNsb3NlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZmlsZS5leGNlcnB0ID09PSAnc3RyaW5nJyAmJiBmaWxlLmV4Y2VycHQgIT09ICcnKSB7XG4gICAgaWYgKHN0ci5pbmRleE9mKGZpbGUuZXhjZXJwdC50cmltKCkpID09PSAtMSkge1xuICAgICAgYnVmICs9IG5ld2xpbmUoZmlsZS5leGNlcnB0KSArIG5ld2xpbmUoY2xvc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgKyBuZXdsaW5lKHN0cik7XG59O1xuXG5mdW5jdGlvbiBuZXdsaW5lKHN0cikge1xuICByZXR1cm4gc3RyLnNsaWNlKC0xKSAhPT0gJ1xcbicgPyBzdHIgKyAnXFxuJyA6IHN0cjtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZpbGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuXG4gIGlmIChmaWxlLmRhdGEgPT0gbnVsbCkge1xuICAgIGZpbGUuZGF0YSA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRzLmV4Y2VycHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0cy5leGNlcnB0KGZpbGUsIG9wdHMpO1xuICB9XG5cbiAgY29uc3Qgc2VwID0gZmlsZS5kYXRhLmV4Y2VycHRfc2VwYXJhdG9yIHx8IG9wdHMuZXhjZXJwdF9zZXBhcmF0b3I7XG4gIGlmIChzZXAgPT0gbnVsbCAmJiAob3B0cy5leGNlcnB0ID09PSBmYWxzZSB8fCBvcHRzLmV4Y2VycHQgPT0gbnVsbCkpIHtcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGNvbnN0IGRlbGltaXRlciA9IHR5cGVvZiBvcHRzLmV4Y2VycHQgPT09ICdzdHJpbmcnXG4gICAgPyBvcHRzLmV4Y2VycHRcbiAgICA6IChzZXAgfHwgb3B0cy5kZWxpbWl0ZXJzWzBdKTtcblxuICAvLyBpZiBlbmFibGVkLCBnZXQgdGhlIGV4Y2VycHQgZGVmaW5lZCBhZnRlciBmcm9udC1tYXR0ZXJcbiAgY29uc3QgaWR4ID0gZmlsZS5jb250ZW50LmluZGV4T2YoZGVsaW1pdGVyKTtcbiAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICBmaWxlLmV4Y2VycHQgPSBmaWxlLmNvbnRlbnQuc2xpY2UoMCwgaWR4KTtcbiAgfVxuXG4gIHJldHVybiBmaWxlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHZhbHVlIHRvIGVuc3VyZSBhbiBvYmplY3QgaXMgcmV0dXJuZWRcbiAqIHdpdGggdGhlIGV4cGVjdGVkIHByb3BlcnRpZXMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmaWxlKSB7XG4gIGlmICh0eXBlT2YoZmlsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgZmlsZSA9IHsgY29udGVudDogZmlsZSB9O1xuICB9XG5cbiAgaWYgKHR5cGVPZihmaWxlLmRhdGEpICE9PSAnb2JqZWN0Jykge1xuICAgIGZpbGUuZGF0YSA9IHt9O1xuICB9XG5cbiAgLy8gaWYgZmlsZSB3YXMgcGFzc2VkIGFzIGFuIG9iamVjdCwgZW5zdXJlIHRoYXRcbiAgLy8gXCJmaWxlLmNvbnRlbnRcIiBpcyBzZXRcbiAgaWYgKGZpbGUuY29udGVudHMgJiYgZmlsZS5jb250ZW50ID09IG51bGwpIHtcbiAgICBmaWxlLmNvbnRlbnQgPSBmaWxlLmNvbnRlbnRzO1xuICB9XG5cbiAgLy8gc2V0IG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMgb24gdGhlIGZpbGUgb2JqZWN0XG4gIHV0aWxzLmRlZmluZShmaWxlLCAnb3JpZycsIHV0aWxzLnRvQnVmZmVyKGZpbGUuY29udGVudCkpO1xuICB1dGlscy5kZWZpbmUoZmlsZSwgJ2xhbmd1YWdlJywgZmlsZS5sYW5ndWFnZSB8fCAnJyk7XG4gIHV0aWxzLmRlZmluZShmaWxlLCAnbWF0dGVyJywgZmlsZS5tYXR0ZXIgfHwgJycpO1xuICB1dGlscy5kZWZpbmUoZmlsZSwgJ3N0cmluZ2lmeScsIGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxhbmd1YWdlKSB7XG4gICAgICBmaWxlLmxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ2lmeShmaWxlLCBkYXRhLCBvcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gc3RyaXAgQk9NIGFuZCBlbnN1cmUgdGhhdCBcImZpbGUuY29udGVudFwiIGlzIGEgc3RyaW5nXG4gIGZpbGUuY29udGVudCA9IHV0aWxzLnRvU3RyaW5nKGZpbGUuY29udGVudCk7XG4gIGZpbGUuaXNFbXB0eSA9IGZhbHNlO1xuICBmaWxlLmV4Y2VycHQgPSAnJztcbiAgcmV0dXJuIGZpbGU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ2V0RW5naW5lID0gcmVxdWlyZSgnLi9lbmdpbmUnKTtcbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxhbmd1YWdlLCBzdHIsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUobGFuZ3VhZ2UsIG9wdHMpO1xuICBpZiAodHlwZW9mIGVuZ2luZS5wYXJzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIFwiJyArIGxhbmd1YWdlICsgJy5wYXJzZVwiIHRvIGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuICByZXR1cm4gZW5naW5lLnBhcnNlKHN0ciwgb3B0cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qgc2VjdGlvbnMgPSByZXF1aXJlKCdzZWN0aW9uLW1hdHRlcicpO1xuY29uc3QgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2xpYi9kZWZhdWx0cycpO1xuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9saWIvc3RyaW5naWZ5Jyk7XG5jb25zdCBleGNlcnB0ID0gcmVxdWlyZSgnLi9saWIvZXhjZXJwdCcpO1xuY29uc3QgZW5naW5lcyA9IHJlcXVpcmUoJy4vbGliL2VuZ2luZXMnKTtcbmNvbnN0IHRvRmlsZSA9IHJlcXVpcmUoJy4vbGliL3RvLWZpbGUnKTtcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9saWIvcGFyc2UnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi9saWIvdXRpbHMnKTtcblxuLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBvciBvYmplY3Qgd2l0aCBgY29udGVudGAgcHJvcGVydHksIGV4dHJhY3RzXG4gKiBhbmQgcGFyc2VzIGZyb250LW1hdHRlciBmcm9tIHRoZSBzdHJpbmcsIHRoZW4gcmV0dXJucyBhbiBvYmplY3RcbiAqIHdpdGggYGRhdGFgLCBgY29udGVudGAgYW5kIG90aGVyIFt1c2VmdWwgcHJvcGVydGllc10oI3JldHVybmVkLW9iamVjdCkuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1hdHRlciA9IHJlcXVpcmUoJ2dyYXktbWF0dGVyJyk7XG4gKiBjb25zb2xlLmxvZyhtYXR0ZXIoJy0tLVxcbnRpdGxlOiBIb21lXFxuLS0tXFxuT3RoZXIgc3R1ZmYnKSk7XG4gKiAvLz0+IHsgZGF0YTogeyB0aXRsZTogJ0hvbWUnfSwgY29udGVudDogJ090aGVyIHN0dWZmJyB9XG4gKiBgYGBcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gYGlucHV0YCBTdHJpbmcsIG9yIG9iamVjdCB3aXRoIGBjb250ZW50YCBzdHJpbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbWF0dGVyKGlucHV0LCBvcHRpb25zKSB7XG4gIGlmIChpbnB1dCA9PT0gJycpIHtcbiAgICByZXR1cm4geyBkYXRhOiB7fSwgY29udGVudDogaW5wdXQsIGV4Y2VycHQ6ICcnLCBvcmlnOiBpbnB1dCB9O1xuICB9XG5cbiAgbGV0IGZpbGUgPSB0b0ZpbGUoaW5wdXQpO1xuICBjb25zdCBjYWNoZWQgPSBtYXR0ZXIuY2FjaGVbZmlsZS5jb250ZW50XTtcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICBmaWxlID0gT2JqZWN0LmFzc2lnbih7fSwgY2FjaGVkKTtcbiAgICAgIGZpbGUub3JpZyA9IGNhY2hlZC5vcmlnO1xuICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuXG4gICAgLy8gb25seSBjYWNoZSBpZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBwYXNzZWQuIGlmIHdlIGNhY2hlIHdoZW4gb3B0aW9uc1xuICAgIC8vIGFyZSBwYXNzZWQsIHdlIHdvdWxkIG5lZWQgdG8gYWxzbyBjYWNoZSBvcHRpb25zIHZhbHVlcywgd2hpY2ggd291bGRcbiAgICAvLyBuZWdhdGUgYW55IHBlcmZvcm1hbmNlIGJlbmVmaXRzIG9mIGNhY2hpbmdcbiAgICBtYXR0ZXIuY2FjaGVbZmlsZS5jb250ZW50XSA9IGZpbGU7XG4gIH1cblxuICByZXR1cm4gcGFyc2VNYXR0ZXIoZmlsZSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUGFyc2UgZnJvbnQgbWF0dGVyXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VNYXR0ZXIoZmlsZSwgb3B0aW9ucykge1xuICBjb25zdCBvcHRzID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGNvbnN0IG9wZW4gPSBvcHRzLmRlbGltaXRlcnNbMF07XG4gIGNvbnN0IGNsb3NlID0gJ1xcbicgKyBvcHRzLmRlbGltaXRlcnNbMV07XG4gIGxldCBzdHIgPSBmaWxlLmNvbnRlbnQ7XG5cbiAgaWYgKG9wdHMubGFuZ3VhZ2UpIHtcbiAgICBmaWxlLmxhbmd1YWdlID0gb3B0cy5sYW5ndWFnZTtcbiAgfVxuXG4gIC8vIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSBvcGVuaW5nIGRlbGltaXRlclxuICBjb25zdCBvcGVuTGVuID0gb3Blbi5sZW5ndGg7XG4gIGlmICghdXRpbHMuc3RhcnRzV2l0aChzdHIsIG9wZW4sIG9wZW5MZW4pKSB7XG4gICAgZXhjZXJwdChmaWxlLCBvcHRzKTtcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIC8vIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBhZnRlciB0aGUgb3BlbmluZyBkZWxpbWl0ZXIgaXNcbiAgLy8gYSBjaGFyYWN0ZXIgZnJvbSB0aGUgZGVsaW1pdGVyLCB0aGVuIGl0J3Mgbm90IGEgZnJvbnQtXG4gIC8vIG1hdHRlciBkZWxpbWl0ZXJcbiAgaWYgKHN0ci5jaGFyQXQob3BlbkxlbikgPT09IG9wZW4uc2xpY2UoLTEpKSB7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICAvLyBzdHJpcCB0aGUgb3BlbmluZyBkZWxpbWl0ZXJcbiAgc3RyID0gc3RyLnNsaWNlKG9wZW5MZW4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIC8vIHVzZSB0aGUgbGFuZ3VhZ2UgZGVmaW5lZCBhZnRlciBmaXJzdCBkZWxpbWl0ZXIsIGlmIGl0IGV4aXN0c1xuICBjb25zdCBsYW5ndWFnZSA9IG1hdHRlci5sYW5ndWFnZShzdHIsIG9wdHMpO1xuICBpZiAobGFuZ3VhZ2UubmFtZSkge1xuICAgIGZpbGUubGFuZ3VhZ2UgPSBsYW5ndWFnZS5uYW1lO1xuICAgIHN0ciA9IHN0ci5zbGljZShsYW5ndWFnZS5yYXcubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGdldCB0aGUgaW5kZXggb2YgdGhlIGNsb3NpbmcgZGVsaW1pdGVyXG4gIGxldCBjbG9zZUluZGV4ID0gc3RyLmluZGV4T2YoY2xvc2UpO1xuICBpZiAoY2xvc2VJbmRleCA9PT0gLTEpIHtcbiAgICBjbG9zZUluZGV4ID0gbGVuO1xuICB9XG5cbiAgLy8gZ2V0IHRoZSByYXcgZnJvbnQtbWF0dGVyIGJsb2NrXG4gIGZpbGUubWF0dGVyID0gc3RyLnNsaWNlKDAsIGNsb3NlSW5kZXgpO1xuXG4gIGNvbnN0IGJsb2NrID0gZmlsZS5tYXR0ZXIucmVwbGFjZSgvXlxccyojW15cXG5dKy9nbSwgJycpLnRyaW0oKTtcbiAgaWYgKGJsb2NrID09PSAnJykge1xuICAgIGZpbGUuaXNFbXB0eSA9IHRydWU7XG4gICAgZmlsZS5lbXB0eSA9IGZpbGUuY29udGVudDtcbiAgICBmaWxlLmRhdGEgPSB7fTtcbiAgfSBlbHNlIHtcblxuICAgIC8vIGNyZWF0ZSBmaWxlLmRhdGEgYnkgcGFyc2luZyB0aGUgcmF3IGZpbGUubWF0dGVyIGJsb2NrXG4gICAgZmlsZS5kYXRhID0gcGFyc2UoZmlsZS5sYW5ndWFnZSwgZmlsZS5tYXR0ZXIsIG9wdHMpO1xuICB9XG5cbiAgLy8gdXBkYXRlIGZpbGUuY29udGVudFxuICBpZiAoY2xvc2VJbmRleCA9PT0gbGVuKSB7XG4gICAgZmlsZS5jb250ZW50ID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgZmlsZS5jb250ZW50ID0gc3RyLnNsaWNlKGNsb3NlSW5kZXggKyBjbG9zZS5sZW5ndGgpO1xuICAgIGlmIChmaWxlLmNvbnRlbnRbMF0gPT09ICdcXHInKSB7XG4gICAgICBmaWxlLmNvbnRlbnQgPSBmaWxlLmNvbnRlbnQuc2xpY2UoMSk7XG4gICAgfVxuICAgIGlmIChmaWxlLmNvbnRlbnRbMF0gPT09ICdcXG4nKSB7XG4gICAgICBmaWxlLmNvbnRlbnQgPSBmaWxlLmNvbnRlbnQuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgZXhjZXJwdChmaWxlLCBvcHRzKTtcblxuICBpZiAob3B0cy5zZWN0aW9ucyA9PT0gdHJ1ZSB8fCB0eXBlb2Ygb3B0cy5zZWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VjdGlvbnMoZmlsZSwgb3B0cy5zZWN0aW9uKTtcbiAgfVxuICByZXR1cm4gZmlsZTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgZW5naW5lc1xuICovXG5cbm1hdHRlci5lbmdpbmVzID0gZW5naW5lcztcblxuLyoqXG4gKiBTdHJpbmdpZnkgYW4gb2JqZWN0IHRvIFlBTUwgb3IgdGhlIHNwZWNpZmllZCBsYW5ndWFnZSwgYW5kXG4gKiBhcHBlbmQgaXQgdG8gdGhlIGdpdmVuIHN0cmluZy4gQnkgZGVmYXVsdCwgb25seSBZQU1MIGFuZCBKU09OXG4gKiBjYW4gYmUgc3RyaW5naWZpZWQuIFNlZSB0aGUgW2VuZ2luZXNdKCNlbmdpbmVzKSBzZWN0aW9uIHRvIGxlYXJuXG4gKiBob3cgdG8gc3RyaW5naWZ5IG90aGVyIGxhbmd1YWdlcy5cbiAqXG4gKiBgYGBqc1xuICogY29uc29sZS5sb2cobWF0dGVyLnN0cmluZ2lmeSgnZm9vIGJhciBiYXonLCB7dGl0bGU6ICdIb21lJ30pKTtcbiAqIC8vIHJlc3VsdHMgaW46XG4gKiAvLyAtLS1cbiAqIC8vIHRpdGxlOiBIb21lXG4gKiAvLyAtLS1cbiAqIC8vIGZvbyBiYXIgYmF6XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gYGZpbGVgIFRoZSBjb250ZW50IHN0cmluZyB0byBhcHBlbmQgdG8gc3RyaW5naWZpZWQgZnJvbnQtbWF0dGVyLCBvciBhIGZpbGUgb2JqZWN0IHdpdGggYGZpbGUuY29udGVudGAgc3RyaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBkYXRhYCBGcm9udCBtYXR0ZXIgdG8gc3RyaW5naWZ5LlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBbT3B0aW9uc10oI29wdGlvbnMpIHRvIHBhc3MgdG8gZ3JheS1tYXR0ZXIgYW5kIFtqcy15YW1sXS5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyBhIHN0cmluZyBjcmVhdGVkIGJ5IHdyYXBwaW5nIHN0cmluZ2lmaWVkIHlhbWwgd2l0aCBkZWxpbWl0ZXJzLCBhbmQgYXBwZW5kaW5nIHRoYXQgdG8gdGhlIGdpdmVuIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWF0dGVyLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKGZpbGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBmaWxlID09PSAnc3RyaW5nJykgZmlsZSA9IG1hdHRlcihmaWxlLCBvcHRpb25zKTtcbiAgcmV0dXJuIHN0cmluZ2lmeShmaWxlLCBkYXRhLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogU3luY2hyb25vdXNseSByZWFkIGEgZmlsZSBmcm9tIHRoZSBmaWxlIHN5c3RlbSBhbmQgcGFyc2VcbiAqIGZyb250IG1hdHRlci4gUmV0dXJucyB0aGUgc2FtZSBvYmplY3QgYXMgdGhlIFttYWluIGZ1bmN0aW9uXSgjbWF0dGVyKS5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgZmlsZSA9IG1hdHRlci5yZWFkKCcuL2NvbnRlbnQvYmxvZy1wb3N0Lm1kJyk7XG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgZmlsZXBhdGhgIGZpbGUgcGF0aCBvZiB0aGUgZmlsZSB0byByZWFkLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBbT3B0aW9uc10oI29wdGlvbnMpIHRvIHBhc3MgdG8gZ3JheS1tYXR0ZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgW2FuIG9iamVjdF0oI3JldHVybmVkLW9iamVjdCkgd2l0aCBgZGF0YWAgYW5kIGBjb250ZW50YFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tYXR0ZXIucmVhZCA9IGZ1bmN0aW9uKGZpbGVwYXRoLCBvcHRpb25zKSB7XG4gIGNvbnN0IHN0ciA9IGZzLnJlYWRGaWxlU3luYyhmaWxlcGF0aCwgJ3V0ZjgnKTtcbiAgY29uc3QgZmlsZSA9IG1hdHRlcihzdHIsIG9wdGlvbnMpO1xuICBmaWxlLnBhdGggPSBmaWxlcGF0aDtcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gYHN0cmluZ2AgaGFzIGZyb250IG1hdHRlci5cbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmluZ2BcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIGZyb250IG1hdHRlciBleGlzdHMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1hdHRlci50ZXN0ID0gZnVuY3Rpb24oc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB1dGlscy5zdGFydHNXaXRoKHN0ciwgZGVmYXVsdHMob3B0aW9ucykuZGVsaW1pdGVyc1swXSk7XG59O1xuXG4vKipcbiAqIERldGVjdCB0aGUgbGFuZ3VhZ2UgdG8gdXNlLCBpZiBvbmUgaXMgZGVmaW5lZCBhZnRlciB0aGVcbiAqIGZpcnN0IGZyb250LW1hdHRlciBkZWxpbWl0ZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBPYmplY3Qgd2l0aCBgcmF3YCAoYWN0dWFsIGxhbmd1YWdlIHN0cmluZyksIGFuZCBgbmFtZWAsIHRoZSBsYW5ndWFnZSB3aXRoIHdoaXRlc3BhY2UgdHJpbW1lZFxuICovXG5cbm1hdHRlci5sYW5ndWFnZSA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuICBjb25zdCBvcHRzID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGNvbnN0IG9wZW4gPSBvcHRzLmRlbGltaXRlcnNbMF07XG5cbiAgaWYgKG1hdHRlci50ZXN0KHN0cikpIHtcbiAgICBzdHIgPSBzdHIuc2xpY2Uob3Blbi5sZW5ndGgpO1xuICB9XG5cbiAgY29uc3QgbGFuZ3VhZ2UgPSBzdHIuc2xpY2UoMCwgc3RyLnNlYXJjaCgvXFxyP1xcbi8pKTtcbiAgcmV0dXJuIHtcbiAgICByYXc6IGxhbmd1YWdlLFxuICAgIG5hbWU6IGxhbmd1YWdlID8gbGFuZ3VhZ2UudHJpbSgpIDogJydcbiAgfTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBtYXR0ZXJgXG4gKi9cblxubWF0dGVyLmNhY2hlID0ge307XG5tYXR0ZXIuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBtYXR0ZXIuY2FjaGUgPSB7fTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IG1hdHRlcjtcbiIsICJpbXBvcnQgeyBQbHVnaW4sIE5vdGljZSwgVEZpbGUsIFRGb2xkZXIsIG5vcm1hbGl6ZVBhdGggfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCB7IENsb3VkZmxhcmVTeW5jU2V0dGluZ1RhYiwgQ2xvdWRmbGFyZVN5bmNTZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgU3luY0VuZ2luZSwgQ29uZmxpY3RJbmZvLCBDb25mbGljdFJlc29sdXRpb24gfSBmcm9tICcuL3N5bmMtZW5naW5lJztcbmltcG9ydCB7IFN5bmNTdGF0dXNCYXIgfSBmcm9tICcuL3N0YXR1cy1iYXInO1xuaW1wb3J0IHsgQ29uZmxpY3RNb2RhbCB9IGZyb20gJy4vY29uZmxpY3QtbW9kYWwnO1xuXG5pbnRlcmZhY2UgRnJvbnRtYXR0ZXJEYXRhIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHNsdWc/OiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG4gIHN1bW1hcnk/OiBzdHJpbmc7XG4gIHRhZ3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgcHVibGlzaD86IGJvb2xlYW47XG4gIGNvdmVySW1hZ2U/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBSZW1vdGVGaWxlIHtcbiAga2V5OiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgdXBsb2FkZWQ/OiBzdHJpbmc7XG4gIGh0dHBFdGFnPzogc3RyaW5nO1xuICBjb250ZW50SGFzaD86IHN0cmluZztcbiAgZW5jb2Rpbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkZmxhcmVTeW5jUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3M6IENsb3VkZmxhcmVTeW5jU2V0dGluZ3M7XG4gIHN5bmNFbmdpbmU6IFN5bmNFbmdpbmU7XG4gIHN0YXR1c0JhcjogU3luY1N0YXR1c0JhcjtcblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIC8vIFx1NTIxRFx1NTlDQlx1NTMxNlx1NTQwQ1x1NkI2NVx1NUYxNVx1NjRDRVxuICAgIHRoaXMuc3luY0VuZ2luZSA9IG5ldyBTeW5jRW5naW5lKHRoaXMpO1xuICAgIGF3YWl0IHRoaXMuc3luY0VuZ2luZS5sb2FkU3luY1N0YXRlKCk7XG5cbiAgICAvLyBcdTUyMURcdTU5Q0JcdTUzMTZcdTcyQjZcdTYwMDFcdTY4MEZcbiAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTeW5jU3RhdHVzQmFyKHRoaXMsIHtcbiAgICAgIG9uU2hvd0NvbmZsaWN0czogKCkgPT4gdGhpcy5zaG93Q29uZmxpY3RNb2RhbCgpLFxuICAgICAgb25UcmlnZ2VyU3luYzogKCkgPT4gdGhpcy50cmlnZ2VyRnVsbFN5bmMoKSxcbiAgICB9KTtcblxuICAgIC8vIFx1N0VEMVx1NUI5QVx1NTQwQ1x1NkI2NVx1NUYxNVx1NjRDRVx1NTZERVx1OEMwM1xuICAgIHRoaXMuc3luY0VuZ2luZS5vblN0YXRzQ2hhbmdlZCA9IChzdGF0cykgPT4ge1xuICAgICAgdGhpcy5zdGF0dXNCYXIudXBkYXRlU3RhdHMoc3RhdHMpO1xuICAgIH07XG5cbiAgICB0aGlzLnN5bmNFbmdpbmUub25Db25mbGljdHNGb3VuZCA9IChjb25mbGljdHMpID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzQmFyLnVwZGF0ZUNvbmZsaWN0cyhjb25mbGljdHMpO1xuICAgICAgbmV3IE5vdGljZShgXHUyNkEwXHVGRTBGICR7Y29uZmxpY3RzLmxlbmd0aH0gc3luYyBjb25mbGljdChzKSBmb3VuZC4gQ2xpY2sgc3RhdHVzIGJhciB0byByZXNvbHZlLmApO1xuICAgICAgdGhpcy5zaG93Q29uZmxpY3RNb2RhbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLnN5bmNFbmdpbmUub25TeW5jQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzdGF0cyA9IHRoaXMuc3luY0VuZ2luZS5zdGF0cztcbiAgICAgIGlmIChzdGF0cy5jb25mbGljdHMgPT09IDApIHtcbiAgICAgICAgbmV3IE5vdGljZShgXHUyNzA1IFN5bmMgY29tcGxldGU6ICR7c3RhdHMuc3luY2VkRmlsZXN9IGZpbGVzIHN5bmNlZGApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnN5bmNFbmdpbmUub25TeW5jRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgIG5ldyBOb3RpY2UoYFx1Mjc0QyBTeW5jIGVycm9yOiAke2Vycm9yfWApO1xuICAgIH07XG5cbiAgICAvLyBcdTZERkJcdTUyQTBcdThCQkVcdTdGNkVcdTk3NjJcdTY3N0ZcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IENsb3VkZmxhcmVTeW5jU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgLy8gXHU2REZCXHU1MkEwXHU1NDdEXHU0RUU0XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1mdWxsJyxcbiAgICAgIG5hbWU6ICdGdWxsIHN5bmMgd2l0aCBDbG91ZGZsYXJlJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnRyaWdnZXJGdWxsU3luYygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy10by1yZW1vdGUnLFxuICAgICAgbmFtZTogJ1N5bmMgZW50aXJlIHZhdWx0IHRvIENsb3VkZmxhcmUgKHVwbG9hZCBvbmx5KScsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zeW5jVG9SZW1vdGUoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3N5bmMtZnJvbS1yZW1vdGUnLFxuICAgICAgbmFtZTogJ0Rvd25sb2FkIGVudGlyZSB2YXVsdCBmcm9tIENsb3VkZmxhcmUnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc3luY0Zyb21SZW1vdGUoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3VwZGF0ZS1mcm9udG1hdHRlcicsXG4gICAgICBuYW1lOiAnVXBkYXRlIGZyb250bWF0dGVyIGZvciBjdXJyZW50IGZpbGUnLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3IpID0+IHRoaXMudXBkYXRlQ3VycmVudEZpbGVGcm9udG1hdHRlcihlZGl0b3IpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1jdXJyZW50LWZpbGUnLFxuICAgICAgbmFtZTogJ1N5bmMgY3VycmVudCBmaWxlIHRvIENsb3VkZmxhcmUnLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6ICgpID0+IHRoaXMuc3luY0N1cnJlbnRGaWxlKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdyZXNvbHZlLWNvbmZsaWN0cycsXG4gICAgICBuYW1lOiAnUmVzb2x2ZSBzeW5jIGNvbmZsaWN0cycsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG93Q29uZmxpY3RNb2RhbCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc2hvdy1zeW5jLXN0YXR1cycsXG4gICAgICBuYW1lOiAnU2hvdyBzeW5jIHN0YXR1cycsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAvLyBcdTg5RTZcdTUzRDFcdTcyQjZcdTYwMDFcdTY4MEZcdTcwQjlcdTUxRkJcdTkwM0JcdThGOTFcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJbJ3Nob3dEZXRhaWxNb2RhbCddKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gXHU3NkQxXHU1NDJDXHU2NTg3XHU0RUY2XHU0RkREXHU1QjU4XHU0RThCXHU0RUY2XHVGRjBDXHU0RjdGXHU3NTI4IGRlYm91bmNlZCBcdTU0MENcdTZCNjVcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbignbW9kaWZ5JywgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiB0aGlzLnNldHRpbmdzLmF1dG9TeW5jKSB7XG4gICAgICAgICAgdGhpcy5zeW5jRW5naW5lLnNjaGVkdWxlRmlsZVN5bmMoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTIxQlx1NUVGQVx1NEU4Qlx1NEVGNlxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKCdjcmVhdGUnLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIHRoaXMuc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyKSB7XG4gICAgICAgICAgaWYgKGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsZUZyb250bWF0dGVyKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gXHU2REZCXHU1MkEwIFJpYmJvbiBcdTU2RkVcdTY4MDdcbiAgICB0aGlzLmFkZFJpYmJvbkljb24oJ2Nsb3VkLXVwbG9hZCcsICdGdWxsIFN5bmMgd2l0aCBDbG91ZGZsYXJlJywgKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyRnVsbFN5bmMoKTtcbiAgICB9KTtcblxuICAgIC8vIFx1NTQyRlx1NTJBOFx1ODFFQVx1NTJBOFx1NTQwQ1x1NkI2NVxuICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9TeW5jKSB7XG4gICAgICB0aGlzLnN5bmNFbmdpbmUuc3RhcnRBdXRvU3luYygpO1xuICAgIH1cblxuICAgIC8vIFx1NTQyRlx1NTJBOFx1NjVGNlx1NTQwQ1x1NkI2NVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN5bmNPblN0YXJ0dXApIHtcbiAgICAgIC8vIFx1NUVGNlx1OEZERiAzIFx1NzlEMlx1N0I0OSBPYnNpZGlhbiBcdTVCOENcdTUxNjhcdTUyQTBcdThGN0RcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnRyaWdnZXJGdWxsU3luYygpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0Nsb3VkZmxhcmUgU3luYyBwbHVnaW4gbG9hZGVkJyk7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHNlcnZlclVybDogJycsXG4gICAgICAgIGFwaVRva2VuOiAnJyxcbiAgICAgICAgYXV0b1N5bmM6IHRydWUsXG4gICAgICAgIGF1dG9Gcm9udG1hdHRlcjogdHJ1ZSxcbiAgICAgICAgc3luY0FsbEZpbGVzOiB0cnVlLFxuICAgICAgICBleGNsdWRlRm9sZGVyczogWydfdGVtcGxhdGVzJywgJy50cmFzaCddLFxuICAgICAgICBleGNsdWRlRmlsZXM6IFtdLFxuICAgICAgICBhdXRvU3luY0ludGVydmFsOiA1LFxuICAgICAgICBjb25mbGljdFN0cmF0ZWd5OiAnYXNrJyBhcyBjb25zdCxcbiAgICAgICAgc3luY09uU3RhcnR1cDogdHJ1ZSxcbiAgICAgICAgZGVib3VuY2VEZWxheTogMzAsXG4gICAgICB9LFxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuXG4gICAgLy8gXHU5MUNEXHU1NDJGXHU4MUVBXHU1MkE4XHU1NDBDXHU2QjY1XHVGRjA4XHU5NUY0XHU5Njk0XHU1M0VGXHU4MEZEXHU2NTM5XHU1M0Q4XHVGRjA5XG4gICAgaWYgKHRoaXMuc3luY0VuZ2luZSkge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b1N5bmMpIHtcbiAgICAgICAgdGhpcy5zeW5jRW5naW5lLnN0YXJ0QXV0b1N5bmMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3luY0VuZ2luZS5zdG9wQXV0b1N5bmMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09IFN5bmMgVHJpZ2dlcnMgPT09PT09PT09PVxuXG4gIGFzeW5jIHRyaWdnZXJGdWxsU3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3Muc2VydmVyVXJsIHx8ICF0aGlzLnNldHRpbmdzLmFwaVRva2VuKSB7XG4gICAgICBuZXcgTm90aWNlKCdQbGVhc2UgY29uZmlndXJlIFNlcnZlciBVUkwgYW5kIEFQSSBUb2tlbiBpbiBzZXR0aW5ncycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRlc3QgY29ubmVjdGlvbiBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmFwaSgnL2FwaS9ibG9nL3NpdGUnKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBuZXcgTm90aWNlKGBDb25uZWN0aW9uIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoJ1N0YXJ0aW5nIGZ1bGwgc3luYy4uLicpO1xuICAgIGF3YWl0IHRoaXMuc3luY0VuZ2luZS5mdWxsU3luYygpO1xuICB9XG5cbiAgc2hvd0NvbmZsaWN0TW9kYWwoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmxpY3RzID0gdGhpcy5zeW5jRW5naW5lLmNvbmZsaWN0cztcbiAgICBpZiAoY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbmV3IE5vdGljZSgnTm8gY29uZmxpY3RzIHRvIHJlc29sdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXcgQ29uZmxpY3RNb2RhbChcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgY29uZmxpY3RzLFxuICAgICAgYXN5bmMgKGNvbmZsaWN0LCByZXNvbHV0aW9uKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY0VuZ2luZS5yZXNvbHZlQ29uZmxpY3QoY29uZmxpY3QsIHJlc29sdXRpb24pO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci51cGRhdGVDb25mbGljdHModGhpcy5zeW5jRW5naW5lLmNvbmZsaWN0cyk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgKHJlc29sdXRpb24pID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jRW5naW5lLnJlc29sdmVBbGxDb25mbGljdHMocmVzb2x1dGlvbik7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLnVwZGF0ZUNvbmZsaWN0cyh0aGlzLnN5bmNFbmdpbmUuY29uZmxpY3RzKTtcbiAgICAgIH1cbiAgICApLm9wZW4oKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gQVBJIFx1OEMwM1x1NzUyOCA9PT09PT09PT09XG5cbiAgYXN5bmMgYXBpPFQgPSBhbnk+KGVuZHBvaW50OiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0SW5pdCk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IHsgc2VydmVyVXJsLCBhcGlUb2tlbiB9ID0gdGhpcy5zZXR0aW5ncztcblxuICAgIGlmICghc2VydmVyVXJsIHx8ICFhcGlUb2tlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgVVJMICgke3NlcnZlclVybCB8fCAnZW1wdHknfSkgYW5kIEFQSSB0b2tlbiAoJHthcGlUb2tlbiA/ICdzZXQnIDogJ2VtcHR5J30pIGFyZSByZXF1aXJlZGApO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHNlcnZlclVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgZW5kcG9pbnQ7XG4gICAgY29uc29sZS5sb2coYFtBUEldICR7b3B0aW9ucz8ubWV0aG9kIHx8ICdHRVQnfSAke3VybH1gKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zPy5oZWFkZXJzKTtcbiAgICBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlUb2tlbn1gKTtcbiAgICBpZiAob3B0aW9ucz8ubWV0aG9kICYmIG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coYFtBUEldIFJlc3BvbnNlOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHsgZXJyb3I6IHJlc3BvbnNlLnN0YXR1c1RleHQgfSkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBUEkgZXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke2Vycm9yLmVycm9yIHx8IHJlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gXHU0RTBBXHU0RjIwL1x1NEUwQlx1OEY3RCA9PT09PT09PT09XG5cbiAgYXN5bmMgdXBsb2FkRmlsZShrZXk6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBjb250ZW50VHlwZSA9ICd0ZXh0L21hcmtkb3duJywgZW5jb2Rpbmc6ICd1dGYtOCcgfCAnYmFzZTY0JyA9ICd1dGYtOCcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmFwaSgnL2FwaS9zeW5jL3VwbG9hZCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBrZXksIGNvbnRlbnQsIGNvbnRlbnRUeXBlLCBlbmNvZGluZyB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGRvd25sb2FkRmlsZShrZXk6IHN0cmluZyk6IFByb21pc2U8UmVtb3RlRmlsZT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuYXBpPHsgc3VjY2VzczogYm9vbGVhbjsgZGF0YTogUmVtb3RlRmlsZSB9PihgL2FwaS9zeW5jL2Rvd25sb2FkLyR7a2V5fWApO1xuICAgIHJldHVybiByZXMuZGF0YTtcbiAgfVxuXG4gIGFzeW5jIGxpc3RGaWxlcyhwcmVmaXggPSAnJyk6IFByb21pc2U8eyBrZXk6IHN0cmluZzsgc2l6ZTogbnVtYmVyOyB1cGxvYWRlZD86IHN0cmluZzsgaHR0cEV0YWc/OiBzdHJpbmcgfVtdPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5hcGk8eyBzdWNjZXNzOiBib29sZWFuOyBkYXRhOiB7IGZpbGVzOiBhbnlbXSB9IH0+KFxuICAgICAgYC9hcGkvc3luYy9saXN0P3ByZWZpeD0ke2VuY29kZVVSSUNvbXBvbmVudChwcmVmaXgpfWBcbiAgICApO1xuICAgIHJldHVybiByZXMuZGF0YS5maWxlcztcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUZpbGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmFwaShgL2FwaS9zeW5jL2RlbGV0ZS8ke2tleX1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IEZyb250bWF0dGVyIFx1NTkwNFx1NzQwNiA9PT09PT09PT09XG5cbiAgYXN5bmMgZ2VuZXJhdGVGcm9udG1hdHRlcihmaWxlOiBURmlsZSk6IFByb21pc2U8RnJvbnRtYXR0ZXJEYXRhPiB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBtYXR0ZXIoY29udGVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGV4aXN0aW5nLmRhdGEudGl0bGUgfHwgZmlsZS5iYXNlbmFtZSxcbiAgICAgIHNsdWc6IGV4aXN0aW5nLmRhdGEuc2x1ZyB8fCB0aGlzLmdlbmVyYXRlU2x1ZyhmaWxlLmJhc2VuYW1lKSxcbiAgICAgIGRhdGU6IGV4aXN0aW5nLmRhdGEuZGF0ZSB8fCBuZXcgRGF0ZShmaWxlLnN0YXQuY3RpbWUpLnRvSVNPU3RyaW5nKCksXG4gICAgICBzdW1tYXJ5OiBleGlzdGluZy5kYXRhLnN1bW1hcnkgfHwgdGhpcy5leHRyYWN0U3VtbWFyeShleGlzdGluZy5jb250ZW50KSxcbiAgICAgIHRhZ3M6IGV4aXN0aW5nLmRhdGEudGFncyB8fCBbXSxcbiAgICAgIHB1Ymxpc2g6IGV4aXN0aW5nLmRhdGEucHVibGlzaCA/PyBmYWxzZSxcbiAgICAgIGNvdmVySW1hZ2U6IGV4aXN0aW5nLmRhdGEuY292ZXJJbWFnZSxcbiAgICB9O1xuICB9XG5cbiAgZ2VuZXJhdGVTbHVnKGZpbGVuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaWxlbmFtZVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgIC5yZXBsYWNlKC9bXlxcdy1dL2csICcnKVxuICAgICAgLnN1YnN0cmluZygwLCAxMDApO1xuICB9XG5cbiAgZXh0cmFjdFN1bW1hcnkoY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBmaXJzdFBhcmFncmFwaCA9IGNvbnRlbnQuc3BsaXQoJ1xcblxcbicpWzBdO1xuICAgIHJldHVybiBmaXJzdFBhcmFncmFwaC5yZXBsYWNlKC9bIypgX1xcW1xcXV0vZywgJycpLnN1YnN0cmluZygwLCAyMDApO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlRmlsZUZyb250bWF0dGVyKGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICBpZiAoY29udGVudC5zdGFydHNXaXRoKCctLS0nKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBhd2FpdCB0aGlzLmdlbmVyYXRlRnJvbnRtYXR0ZXIoZmlsZSk7XG4gICAgY29uc3QgbmV3Q29udGVudCA9IG1hdHRlci5zdHJpbmdpZnkoY29udGVudCwgZnJvbnRtYXR0ZXIpO1xuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXdDb250ZW50KTtcblxuICAgIG5ldyBOb3RpY2UoYFVwZGF0ZWQgZnJvbnRtYXR0ZXIgZm9yICR7ZmlsZS5uYW1lfWApO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlQ3VycmVudEZpbGVGcm9udG1hdHRlcihlZGl0b3I6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgIGlmICghYWN0aXZlRmlsZSkge1xuICAgICAgbmV3IE5vdGljZSgnTm8gYWN0aXZlIGZpbGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmcm9udG1hdHRlciA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVGcm9udG1hdHRlcihhY3RpdmVGaWxlKTtcbiAgICBjb25zdCBjb250ZW50ID0gZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgY29uc3QgbmV3Q29udGVudCA9IG1hdHRlci5zdHJpbmdpZnkoY29udGVudCwgZnJvbnRtYXR0ZXIpO1xuXG4gICAgZWRpdG9yLnNldFZhbHVlKG5ld0NvbnRlbnQpO1xuICAgIG5ldyBOb3RpY2UoJ1VwZGF0ZWQgZnJvbnRtYXR0ZXInKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gXHU1NDBDXHU2QjY1XHU5MDNCXHU4RjkxID09PT09PT09PT1cblxuICBzaG91bGRTeW5jRmlsZShmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gXHU2MzkyXHU5NjY0XHU3Mjc5XHU1QjlBXHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgZm9yIChjb25zdCBleGNsdWRlIG9mIHRoaXMuc2V0dGluZ3MuZXhjbHVkZUZvbGRlcnMgfHwgW10pIHtcbiAgICAgIGlmIChmaWxlUGF0aC5zdGFydHNXaXRoKGV4Y2x1ZGUgKyAnLycpIHx8IGZpbGVQYXRoLnN0YXJ0c1dpdGgoZXhjbHVkZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFx1NjM5Mlx1OTY2NCAuY29uZmxpY3QgXHU2NTg3XHU0RUY2XG4gICAgaWYgKGZpbGVQYXRoLmluY2x1ZGVzKCcuY29uZmxpY3QtJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFJlbW90ZUtleShmaWxlOiBURmlsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGB2YXVsdC8ke2ZpbGUucGF0aH1gO1xuICB9XG5cbiAgZ2V0TWltZVR5cGUoZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgIGpwZzogJ2ltYWdlL2pwZWcnLCBqcGVnOiAnaW1hZ2UvanBlZycsIHBuZzogJ2ltYWdlL3BuZycsXG4gICAgICBnaWY6ICdpbWFnZS9naWYnLCB3ZWJwOiAnaW1hZ2Uvd2VicCcsIHN2ZzogJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICAgYXZpZjogJ2ltYWdlL2F2aWYnLCBwZGY6ICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgbXAzOiAnYXVkaW8vbXBlZycsIG1wNDogJ3ZpZGVvL21wNCcsXG4gICAgICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsIHlhbWw6ICd0ZXh0L3lhbWwnLCB5bWw6ICd0ZXh0L3lhbWwnLFxuICAgICAgY3NzOiAndGV4dC9jc3MnLCBqczogJ3RleHQvamF2YXNjcmlwdCcsIHRzOiAndGV4dC90eXBlc2NyaXB0JyxcbiAgICB9O1xuICAgIHJldHVybiBtYXBbZXh0LnRvTG93ZXJDYXNlKCldIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICB9XG5cbiAgYXN5bmMgc3luY0ZpbGVUb1JlbW90ZShmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5zaG91bGRTeW5jRmlsZShmaWxlLnBhdGgpKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgaXNNYXJrZG93biA9IGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJyk7XG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIFJlYWRpbmcgZmlsZTogJHtmaWxlLnBhdGh9ICgke2lzTWFya2Rvd24gPyAnbWFya2Rvd24nIDogZmlsZS5leHRlbnNpb259KWApO1xuXG4gICAgICBsZXQgY29udGVudDogc3RyaW5nO1xuICAgICAgbGV0IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gICAgICBsZXQgZW5jb2Rpbmc6ICd1dGYtOCcgfCAnYmFzZTY0JyA9ICd1dGYtOCc7XG5cbiAgICAgIGlmIChpc01hcmtkb3duKSB7XG4gICAgICAgIGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L21hcmtkb3duJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFx1NEU4Q1x1OEZEQlx1NTIzNlx1NjU4N1x1NEVGNlx1NzUyOCBiYXNlNjQgXHU3RjE2XHU3ODAxXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWRCaW5hcnkoZmlsZSk7XG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyKTtcbiAgICAgICAgZW5jb2RpbmcgPSAnYmFzZTY0JztcbiAgICAgICAgY29udGVudFR5cGUgPSB0aGlzLmdldE1pbWVUeXBlKGZpbGUuZXh0ZW5zaW9uKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBGaWxlIHNpemU6ICR7ZmlsZS5zdGF0LnNpemV9IGJ5dGVzLCBlbmNvZGluZzogJHtlbmNvZGluZ31gKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2NjJGIG1hcmtkb3duXHVGRjBDXHU2OEMwXHU2N0U1XHU2NjJGXHU1NDI2XHU1REYyXHU1M0QxXHU1RTAzXHU0RUU1XHU1MUIzXHU1QjlBXHU2NjJGXHU1NDI2XHU0RTBBXHU0RjIwXHU1NkZFXHU3MjQ3XG4gICAgICBjb25zdCBpc1B1Ymxpc2hlZCA9IGlzTWFya2Rvd25cbiAgICAgICAgPyAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbWF0dGVyKGNvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5kYXRhLnB1Ymxpc2ggPT09IHRydWU7XG4gICAgICAgICAgfSkoKVxuICAgICAgICA6IGZhbHNlO1xuXG4gICAgICAvLyBcdTRFMEFcdTRGMjBcdTY1ODdcdTRFRjZcbiAgICAgIGNvbnN0IHJlbW90ZUtleSA9IHRoaXMuZ2V0UmVtb3RlS2V5KGZpbGUpO1xuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBVcGxvYWRpbmcgdG86ICR7cmVtb3RlS2V5fWApO1xuICAgICAgYXdhaXQgdGhpcy51cGxvYWRGaWxlKHJlbW90ZUtleSwgY29udGVudCwgY29udGVudFR5cGUsIGVuY29kaW5nKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gXHUyNzA1IFVwbG9hZGVkICR7ZmlsZS5uYW1lfWApO1xuXG4gICAgICAvLyBcdTU5ODJcdTY3OUMgbWFya2Rvd24gXHU1REYyXHU1M0QxXHU1RTAzXHVGRjBDXHU2M0QwXHU1M0Q2XHU1RTc2XHU0RTBBXHU0RjIwXHU1NkZFXHU3MjQ3XG4gICAgICBpZiAoaXNNYXJrZG93biAmJiBpc1B1Ymxpc2hlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIEV4dHJhY3RpbmcgaW1hZ2VzIGZyb20gJHtmaWxlLm5hbWV9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZXh0cmFjdEFuZFVwbG9hZEltYWdlcyhjb250ZW50LCBmaWxlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY10gXHUyNzRDIEZhaWxlZCB0byBzeW5jICR7ZmlsZS5uYW1lfTpgLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN5bmNGaWxlRnJvbVJlbW90ZShyZW1vdGVGaWxlOiB7IGtleTogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZG93bmxvYWRGaWxlKHJlbW90ZUZpbGUua2V5KTtcbiAgICAgIC8vIHZhdWx0L25vdGVzL215LW5vdGUubWQgLT4gbm90ZXMvbXktbm90ZS5tZFxuICAgICAgY29uc3QgbG9jYWxQYXRoID0gZGF0YS5rZXkucmVwbGFjZSgvXnZhdWx0XFwvLywgJycpO1xuXG4gICAgICBjb25zdCBleGlzdGluZ0ZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobG9jYWxQYXRoKTtcbiAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBsb2NhbFBhdGguZW5kc1dpdGgoJy5tZCcpO1xuXG4gICAgICBpZiAoZXhpc3RpbmdGaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgaWYgKGlzTWFya2Rvd24gfHwgZGF0YS5lbmNvZGluZyA9PT0gJ3V0Zi04Jykge1xuICAgICAgICAgIC8vIFx1NjU4N1x1NjcyQ1x1NjU4N1x1NEVGNlx1NzZGNFx1NjNBNVx1NkJENFx1OEY4M1xuICAgICAgICAgIGNvbnN0IGxvY2FsQ29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZXhpc3RpbmdGaWxlKTtcbiAgICAgICAgICBpZiAobG9jYWxDb250ZW50ICE9PSBkYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShleGlzdGluZ0ZpbGUsIGRhdGEuY29udGVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBVcGRhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBcdTRFOENcdThGREJcdTUyMzZcdTY1ODdcdTRFRjZcdTZCRDRcdThGODNcdTU5MjdcdTVDMEZcbiAgICAgICAgICBpZiAoZXhpc3RpbmdGaWxlLnN0YXQuc2l6ZSAhPT0gZGF0YS5zaXplKSB7XG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLmJhc2U2NFRvQXJyYXlCdWZmZXIoZGF0YS5jb250ZW50KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeUJpbmFyeShleGlzdGluZ0ZpbGUsIGJ1ZmZlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBVcGRhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXHU2NTg3XHU0RUY2XHU0RTBEXHU1QjU4XHU1NzI4XHVGRjBDXHU1MjFCXHU1RUZBXG4gICAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBsb2NhbFBhdGguc3Vic3RyaW5nKDAsIGxvY2FsUGF0aC5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgaWYgKGZvbGRlclBhdGgpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyUGF0aCkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTWFya2Rvd24gfHwgZGF0YS5lbmNvZGluZyA9PT0gJ3V0Zi04Jykge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShsb2NhbFBhdGgsIGRhdGEuY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5iYXNlNjRUb0FycmF5QnVmZmVyKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KGxvY2FsUGF0aCwgYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBDcmVhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtEb3dubG9hZF0gRmFpbGVkIHRvIHN5bmMgJHtyZW1vdGVGaWxlLmtleX06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYmFzZTY0VG9BcnJheUJ1ZmZlcihiYXNlNjQ6IHN0cmluZyk6IEFycmF5QnVmZmVyIHtcbiAgICBjb25zdCBiaW5hcnkgPSBhdG9iKGJhc2U2NCk7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShiaW5hcnkubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgYnl0ZXNbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzLmJ1ZmZlcjtcbiAgfVxuXG4gIGFzeW5jIHN5bmNUb1JlbW90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBuZXcgTm90aWNlKCdTeW5jaW5nIHZhdWx0IHRvIENsb3VkZmxhcmUuLi4nKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCk7XG4gICAgICBsZXQgc3luY2VkID0gMDtcbiAgICAgIGxldCBza2lwcGVkID0gMDtcblxuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBGb3VuZCAke2ZpbGVzLmxlbmd0aH0gZmlsZXMgaW4gdmF1bHRgKTtcblxuICAgICAgLy8gVGVzdCBBUEkgY29ubmVjdGlvbiBmaXJzdFxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkoJy9hcGkvYmxvZy9zaXRlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbU3luY10gXHUyNzA1IEFQSSBjb25uZWN0aW9uIHRlc3QgcGFzc2VkJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTeW5jXSBcdTI3NEMgQVBJIGNvbm5lY3Rpb24gdGVzdCBmYWlsZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIG5ldyBOb3RpY2UoYENvbm5lY3Rpb24gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRTeW5jRmlsZShmaWxlLnBhdGgpKSB7XG4gICAgICAgICAgc2tpcHBlZCsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNGaWxlVG9SZW1vdGUoZmlsZSk7XG4gICAgICAgICAgc3luY2VkKys7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbU3luY10gXHUyNzRDIEZhaWxlZCB0byBzeW5jICR7ZmlsZS5wYXRofTpgLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIERvbmU6ICR7c3luY2VkfSBzeW5jZWQsICR7c2tpcHBlZH0gc2tpcHBlZGApO1xuICAgICAgbmV3IE5vdGljZShgU3luY2VkICR7c3luY2VkfS8ke2ZpbGVzLmxlbmd0aH0gZmlsZXMgKCR7c2tpcHBlZH0gc2tpcHBlZClgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbU3luY10gRmFpbGVkIHRvIHN5bmM6JywgZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShgU3luYyBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzeW5jRnJvbVJlbW90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBuZXcgTm90aWNlKCdEb3dubG9hZGluZyBmcm9tIENsb3VkZmxhcmUuLi4nKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnW0Rvd25sb2FkXSBMaXN0aW5nIHJlbW90ZSBmaWxlcy4uLicpO1xuICAgICAgY29uc3QgcmVtb3RlRmlsZXMgPSBhd2FpdCB0aGlzLmxpc3RGaWxlcygndmF1bHQvJyk7XG4gICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBGb3VuZCAke3JlbW90ZUZpbGVzLmxlbmd0aH0gcmVtb3RlIGZpbGVzYCk7XG5cbiAgICAgIGxldCBzeW5jZWQgPSAwO1xuXG4gICAgICBmb3IgKGNvbnN0IHJlbW90ZUZpbGUgb2YgcmVtb3RlRmlsZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gUHJvY2Vzc2luZzogJHtyZW1vdGVGaWxlLmtleX1gKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNGaWxlRnJvbVJlbW90ZShyZW1vdGVGaWxlKTtcbiAgICAgICAgICBzeW5jZWQrKztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtEb3dubG9hZF0gRmFpbGVkIHRvIHN5bmMgJHtyZW1vdGVGaWxlLmtleX06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gRG9uZTogJHtzeW5jZWR9IGZpbGVzIHByb2Nlc3NlZGApO1xuICAgICAgbmV3IE5vdGljZShgRG93bmxvYWRlZCAke3N5bmNlZH0gZmlsZXMgZnJvbSBDbG91ZGZsYXJlYCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0Rvd25sb2FkXSBGYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShgRG93bmxvYWQgZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3luY0N1cnJlbnRGaWxlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgIGlmICghYWN0aXZlRmlsZSkge1xuICAgICAgbmV3IE5vdGljZSgnTm8gYWN0aXZlIGZpbGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLnN5bmNGaWxlVG9SZW1vdGUoYWN0aXZlRmlsZSk7XG4gICAgbmV3IE5vdGljZShgU3luY2VkICR7YWN0aXZlRmlsZS5uYW1lfSB0byBDbG91ZGZsYXJlYCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFx1NTZGRVx1NzI0N1x1NTkwNFx1NzQwNiA9PT09PT09PT09XG5cbiAgYXN5bmMgZXh0cmFjdEFuZFVwbG9hZEltYWdlcyhjb250ZW50OiBzdHJpbmcsIGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaW1hZ2VSZWdleCA9IC8hXFxbLio/XFxdXFwoKC4qPylcXCkvZztcbiAgICBsZXQgbWF0Y2g7XG5cbiAgICB3aGlsZSAoKG1hdGNoID0gaW1hZ2VSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VQYXRoID0gbWF0Y2hbMV07XG5cbiAgICAgIGlmIChpbWFnZVBhdGguc3RhcnRzV2l0aCgnLi8nKSB8fCAhaW1hZ2VQYXRoLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICBjb25zdCBmb2xkZXIgPSBmaWxlLnBhcmVudD8ucGF0aCB8fCAnJztcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBub3JtYWxpemVQYXRoKGAke2ZvbGRlcn0vJHtpbWFnZVBhdGh9YCk7XG4gICAgICAgIGNvbnN0IGltYWdlRmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmdWxsUGF0aCk7XG5cbiAgICAgICAgaWYgKGltYWdlRmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgY29uc3QgaW1hZ2VCdWZmZXIgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkQmluYXJ5KGltYWdlRmlsZSk7XG4gICAgICAgICAgY29uc3QgYmFzZTY0ID0gdGhpcy5hcnJheUJ1ZmZlclRvQmFzZTY0KGltYWdlQnVmZmVyKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbWFnZUZpbGUuZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBsZXQgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICBpZiAoWydqcGcnLCAnanBlZyddLmluY2x1ZGVzKGV4dCkpIGNvbnRlbnRUeXBlID0gYGltYWdlL2pwZWdgO1xuICAgICAgICAgIGVsc2UgaWYgKGV4dCA9PT0gJ3BuZycpIGNvbnRlbnRUeXBlID0gJ2ltYWdlL3BuZyc7XG4gICAgICAgICAgZWxzZSBpZiAoZXh0ID09PSAnZ2lmJykgY29udGVudFR5cGUgPSAnaW1hZ2UvZ2lmJztcbiAgICAgICAgICBlbHNlIGlmIChleHQgPT09ICd3ZWJwJykgY29udGVudFR5cGUgPSAnaW1hZ2Uvd2VicCc7XG4gICAgICAgICAgZWxzZSBpZiAoZXh0ID09PSAnc3ZnJykgY29udGVudFR5cGUgPSAnaW1hZ2Uvc3ZnK3htbCc7XG5cbiAgICAgICAgICBhd2FpdCB0aGlzLmFwaSgnL2FwaS9zeW5jL3VwbG9hZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBrZXk6IGBpbWFnZXMvJHtpbWFnZUZpbGUubmFtZX1gLFxuICAgICAgICAgICAgICBjb250ZW50OiBiYXNlNjQsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NCcsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGxldCBiaW5hcnkgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYnRvYShiaW5hcnkpO1xuICB9XG5cbiAgb251bmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ0Nsb3VkZmxhcmUgU3luYyBwbHVnaW4gdW5sb2FkaW5nLi4uJyk7XG4gICAgdGhpcy5zeW5jRW5naW5lPy5kZXN0cm95KCk7XG4gICAgdGhpcy5zdGF0dXNCYXI/LmRlc3Ryb3koKTtcbiAgICBjb25zb2xlLmxvZygnQ2xvdWRmbGFyZSBTeW5jIHBsdWdpbiB1bmxvYWRlZCcpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IENsb3VkZmxhcmVTeW5jUGx1Z2luIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgdHlwZSB7IENvbmZsaWN0U3RyYXRlZ3kgfSBmcm9tICcuL3N5bmMtZW5naW5lJztcblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZsYXJlU3luY1NldHRpbmdzIHtcbiAgc2VydmVyVXJsOiBzdHJpbmc7XG4gIGFwaVRva2VuOiBzdHJpbmc7XG4gIGF1dG9TeW5jOiBib29sZWFuO1xuICBhdXRvRnJvbnRtYXR0ZXI6IGJvb2xlYW47XG4gIHN5bmNBbGxGaWxlczogYm9vbGVhbjtcbiAgZXhjbHVkZUZvbGRlcnM6IHN0cmluZ1tdO1xuICBhdXRvU3luY0ludGVydmFsOiBudW1iZXI7ICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NTQwQ1x1NkI2NVx1OTVGNFx1OTY5NFx1RkYwOFx1NTIwNlx1OTQ5Rlx1RkYwOVxuICBjb25mbGljdFN0cmF0ZWd5OiBDb25mbGljdFN0cmF0ZWd5OyAvLyBcdTUxQjJcdTdBODFcdTg5RTNcdTUxQjNcdTdCNTZcdTc1NjVcbiAgc3luY09uU3RhcnR1cDogYm9vbGVhbjsgICAgICAgICAvLyBcdTU0MkZcdTUyQThcdTY1RjZcdTU0MENcdTZCNjVcbiAgZGVib3VuY2VEZWxheTogbnVtYmVyOyAgICAgICAgICAvLyBcdTY1ODdcdTRFRjZcdTRGRUVcdTY1MzlcdTU0MEVcdTVFRjZcdThGREZcdTU0MENcdTZCNjVcdUZGMDhcdTc5RDJcdUZGMDlcbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZmxhcmVTeW5jU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwbHVnaW46IENsb3VkZmxhcmVTeW5jUGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IENsb3VkZmxhcmVTeW5jUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdDbG91ZGZsYXJlIFN5bmMnIH0pO1xuXG4gICAgLy8gPT09PT0gQ29ubmVjdGlvbiA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0Nvbm5lY3Rpb24nIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnU2VydmVyIFVSTCcpXG4gICAgICAuc2V0RGVzYygnWW91ciBDbG91ZGZsYXJlIFdvcmtlcnMgVVJMIChlLmcuLCBodHRwczovL215c2l0ZS55b3VyLWFjY291bnQud29ya2Vycy5kZXYpJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdodHRwczovL215c2l0ZS55b3VyLWFjY291bnQud29ya2Vycy5kZXYnKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXJ2ZXJVcmwpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0FQSSBUb2tlbicpXG4gICAgICAuc2V0RGVzYygnWW91ciBBUEkgdG9rZW4gZm9yIGF1dGhlbnRpY2F0aW9uJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRleHQuaW5wdXRFbC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0VudGVyIHlvdXIgQVBJIHRva2VuJylcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXBpVG9rZW4pXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXBpVG9rZW4gPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyA9PT09PSBTeW5jIFNldHRpbmdzID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnU3luYyBTZXR0aW5ncycgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdBdXRvIFN5bmMnKVxuICAgICAgLnNldERlc2MoJ0F1dG9tYXRpY2FsbHkgc3luYyBmaWxlcyB3aGVuIHRoZXkgYXJlIG1vZGlmaWVkICh3aXRoIGRlYm91bmNlKScpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvU3luYylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvU3luYyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdBdXRvIFN5bmMgSW50ZXJ2YWwnKVxuICAgICAgLnNldERlc2MoJ0hvdyBvZnRlbiB0byBydW4gYSBmdWxsIHN5bmMgKGluIG1pbnV0ZXMpLiBTZXQgdG8gMCB0byBkaXNhYmxlIHBlcmlvZGljIHN5bmMuJylcbiAgICAgIC5hZGRTbGlkZXIoKHNsaWRlcikgPT5cbiAgICAgICAgc2xpZGVyXG4gICAgICAgICAgLnNldExpbWl0cygwLCA2MCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmNJbnRlcnZhbClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9TeW5jSW50ZXJ2YWwgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRGVib3VuY2UgRGVsYXknKVxuICAgICAgLnNldERlc2MoJ1NlY29uZHMgdG8gd2FpdCBhZnRlciBhIGZpbGUgY2hhbmdlIGJlZm9yZSBzeW5jaW5nIChwcmV2ZW50cyBleGNlc3NpdmUgdXBsb2FkcyB3aGlsZSB0eXBpbmcpJylcbiAgICAgIC5hZGRTbGlkZXIoKHNsaWRlcikgPT5cbiAgICAgICAgc2xpZGVyXG4gICAgICAgICAgLnNldExpbWl0cyg1LCAxMjAsIDUpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRlYm91bmNlRGVsYXkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZWJvdW5jZURlbGF5ID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ1N5bmMgb24gU3RhcnR1cCcpXG4gICAgICAuc2V0RGVzYygnQXV0b21hdGljYWxseSBydW4gYSBmdWxsIHN5bmMgd2hlbiBPYnNpZGlhbiBzdGFydHMnKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc3luY09uU3RhcnR1cClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeW5jT25TdGFydHVwID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vID09PT09IENvbmZsaWN0IFJlc29sdXRpb24gPT09PT1cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdDb25mbGljdCBSZXNvbHV0aW9uJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0NvbmZsaWN0IFN0cmF0ZWd5JylcbiAgICAgIC5zZXREZXNjKCdIb3cgdG8gaGFuZGxlIGNvbmZsaWN0cyB3aGVuIGJvdGggbG9jYWwgYW5kIHJlbW90ZSBoYXZlIGNoYW5nZWQnKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT5cbiAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAuYWRkT3B0aW9uKCdhc2snLCAnQXNrIG1lIGV2ZXJ5IHRpbWUnKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ2xvY2FsLXdpbnMnLCAnTG9jYWwgYWx3YXlzIHdpbnMnKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ3JlbW90ZS13aW5zJywgJ1JlbW90ZSBhbHdheXMgd2lucycpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZsaWN0U3RyYXRlZ3kpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb25mbGljdFN0cmF0ZWd5ID0gdmFsdWUgYXMgQ29uZmxpY3RTdHJhdGVneTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gPT09PT0gQ29udGVudCBTZXR0aW5ncyA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0NvbnRlbnQgU2V0dGluZ3MnIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQXV0byBGcm9udG1hdHRlcicpXG4gICAgICAuc2V0RGVzYygnQXV0b21hdGljYWxseSBnZW5lcmF0ZSBmcm9udG1hdHRlciBmb3IgbmV3IG1hcmtkb3duIGZpbGVzJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9Gcm9udG1hdHRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvRnJvbnRtYXR0ZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnU3luYyBBbGwgRmlsZXMnKVxuICAgICAgLnNldERlc2MoJ1N5bmMgYWxsIGZpbGVzIGluIHRoZSB2YXVsdCAobm90IGp1c3QgbWFya2Rvd24pJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN5bmNBbGxGaWxlcylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeW5jQWxsRmlsZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRXhjbHVkZSBGb2xkZXJzJylcbiAgICAgIC5zZXREZXNjKCdDb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBmb2xkZXJzIHRvIGV4Y2x1ZGUgZnJvbSBzeW5jJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdfdGVtcGxhdGVzLCAudHJhc2gnKVxuICAgICAgICAgIC5zZXRWYWx1ZSgodGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhjbHVkZUZvbGRlcnMgfHwgW10pLmpvaW4oJywgJykpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhjbHVkZUZvbGRlcnMgPSB2YWx1ZVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAubWFwKChzKSA9PiBzLnRyaW0oKSlcbiAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gPT09PT0gSW5zdHJ1Y3Rpb25zID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnSW5zdHJ1Y3Rpb25zJyB9KTtcblxuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21hcmtkb3duLXByZXZpZXctdmlldycgfSk7XG4gICAgaW5zdHJ1Y3Rpb25zLmlubmVySFRNTCA9IGBcbiAgICAgIDxoND5TZXJ2ZXIgU2V0dXA6PC9oND5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPkRlcGxveSB0aGUgQ2xvdWRmbGFyZSBXb3JrZXJzIHNpdGU8L2xpPlxuICAgICAgICA8bGk+U2V0IDxjb2RlPkFQSV9UT0tFTjwvY29kZT4gc2VjcmV0OiA8Y29kZT5ucHggd3JhbmdsZXIgc2VjcmV0IHB1dCBBUElfVE9LRU48L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPkNvcHkgdGhlIFdvcmtlcnMgVVJMIGFuZCB0b2tlbiB0byBzZXR0aW5ncyBhYm92ZTwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPGg0PlN5bmMgQmVoYXZpb3I6PC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxzdHJvbmc+QXV0byBTeW5jPC9zdHJvbmc+IFx1MjAxNCBGaWxlcyBzeW5jIGFmdGVyIGEgZGVib3VuY2UgZGVsYXkgd2hlbiBtb2RpZmllZDwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlBlcmlvZGljIFN5bmM8L3N0cm9uZz4gXHUyMDE0IEZ1bGwgc3luYyBydW5zIGF0IHRoZSBjb25maWd1cmVkIGludGVydmFsPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+U3RhcnR1cCBTeW5jPC9zdHJvbmc+IFx1MjAxNCBGdWxsIHN5bmMgb24gT2JzaWRpYW4gbGF1bmNoPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+Q29uZmxpY3QgRGV0ZWN0aW9uPC9zdHJvbmc+IFx1MjAxNCBUaHJlZS13YXkgaGFzaCBjb21wYXJpc29uIGRldGVjdHMgY29uZmxpY3RzPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8aDQ+RnJvbnRtYXR0ZXIgZmllbGRzOjwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48Y29kZT50aXRsZTwvY29kZT4gLSBQb3N0IHRpdGxlPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnNsdWc8L2NvZGU+IC0gVVJMLWZyaWVuZGx5IGlkZW50aWZpZXI8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZGF0ZTwvY29kZT4gLSBQdWJsaWNhdGlvbiBkYXRlIChJU08gZm9ybWF0KTwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5zdW1tYXJ5PC9jb2RlPiAtIFBvc3Qgc3VtbWFyeS9leGNlcnB0PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnRhZ3M8L2NvZGU+IC0gQXJyYXkgb3IgY29tbWEtc2VwYXJhdGVkIHRhZ3M8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cHVibGlzaDwvY29kZT4gLSBXaGV0aGVyIHRvIG1ha2UgcHVibGljIChkZWZhdWx0OiBmYWxzZSk8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+Y292ZXJJbWFnZTwvY29kZT4gLSBDb3ZlciBpbWFnZSBmaWxlbmFtZTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGg0PkNvbW1hbmRzOjwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48c3Ryb25nPkZ1bGwgU3luYzwvc3Ryb25nPiBcdTIwMTQgQmlkaXJlY3Rpb25hbCBzeW5jIHdpdGggY29uZmxpY3QgZGV0ZWN0aW9uPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+U3luYyB0byBDbG91ZGZsYXJlPC9zdHJvbmc+IFx1MjAxNCBVcGxvYWQgYWxsIG5vdGVzIChvbmUtd2F5KTwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPkRvd25sb2FkIGZyb20gQ2xvdWRmbGFyZTwvc3Ryb25nPiBcdTIwMTQgRG93bmxvYWQgYWxsIG5vdGVzIChvbmUtd2F5KTwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlN5bmMgY3VycmVudCBmaWxlPC9zdHJvbmc+IFx1MjAxNCBVcGxvYWQgY3VycmVudCBmaWxlPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+UmVzb2x2ZSBjb25mbGljdHM8L3N0cm9uZz4gXHUyMDE0IE9wZW4gY29uZmxpY3QgcmVzb2x1dGlvbiBkaWFsb2c8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5TaG93IHN5bmMgc3RhdHVzPC9zdHJvbmc+IFx1MjAxNCBWaWV3IHN5bmMgc3RhdGlzdGljczwvbGk+XG4gICAgICA8L3VsPlxuICAgIGA7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBURmlsZSwgVmF1bHQsIG5vcm1hbGl6ZVBhdGggfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgdHlwZSBDbG91ZGZsYXJlU3luY1BsdWdpbiBmcm9tICcuL21haW4nO1xuXG4vLyA9PT09PT09PT09IFR5cGVzID09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgU3luY0ZpbGVTdGF0dXMgPVxuICB8ICdzeW5jZWQnICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NTQ4Q1x1OEZEQ1x1N0EwQlx1NEUwMFx1ODFGNFxuICB8ICdsb2NhbC1vbmx5JyAgIC8vIFx1NEVDNVx1NjcyQ1x1NTczMFx1NUI1OFx1NTcyOFxuICB8ICdyZW1vdGUtb25seScgIC8vIFx1NEVDNVx1OEZEQ1x1N0EwQlx1NUI1OFx1NTcyOFxuICB8ICdsb2NhbC1tb2RpZmllZCcgIC8vIFx1NjcyQ1x1NTczMFx1NjcwOVx1NEZFRVx1NjUzOVxuICB8ICdyZW1vdGUtbW9kaWZpZWQnIC8vIFx1OEZEQ1x1N0EwQlx1NjcwOVx1NEZFRVx1NjUzOVxuICB8ICdjb25mbGljdCcgICAgIC8vIFx1NTNDQ1x1NjVCOVx1OTBGRFx1NjcwOVx1NEZFRVx1NjUzOVxuICB8ICdlcnJvcic7ICAgICAgIC8vIFx1NTQwQ1x1NkI2NVx1NTFGQVx1OTUxOVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNGaWxlU3RhdGUge1xuICBsb2NhbFBhdGg6IHN0cmluZztcbiAgcmVtb3RlS2V5OiBzdHJpbmc7XG4gIGxvY2FsSGFzaDogc3RyaW5nIHwgbnVsbDtcbiAgcmVtb3RlSGFzaDogc3RyaW5nIHwgbnVsbDtcbiAgbGFzdFN5bmNlZEhhc2g6IHN0cmluZyB8IG51bGw7XG4gIHN0YXR1czogU3luY0ZpbGVTdGF0dXM7XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNTdGF0cyB7XG4gIGxhc3RTeW5jVGltZTogbnVtYmVyIHwgbnVsbDtcbiAgdG90YWxGaWxlczogbnVtYmVyO1xuICBzeW5jZWRGaWxlczogbnVtYmVyO1xuICBwZW5kaW5nVXBsb2FkOiBudW1iZXI7XG4gIHBlbmRpbmdEb3dubG9hZDogbnVtYmVyO1xuICBjb25mbGljdHM6IG51bWJlcjtcbiAgZXJyb3JzOiBudW1iZXI7XG4gIGlzU3luY2luZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdGVGaWxlTWV0YSB7XG4gIGtleTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHVwbG9hZGVkPzogc3RyaW5nO1xuICBodHRwRXRhZz86IHN0cmluZztcbiAgY29udGVudEhhc2g/OiBzdHJpbmc7XG4gIGNvbnRlbnRUeXBlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3luY1N0YXRlU3RvcmUge1xuICBbbG9jYWxQYXRoOiBzdHJpbmddOiB7XG4gICAgcmVtb3RlS2V5OiBzdHJpbmc7XG4gICAgbGFzdFN5bmNlZEhhc2g6IHN0cmluZztcbiAgICBsYXN0U3luY2VkVGltZTogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBDb25mbGljdFJlc29sdXRpb24gPSAnbG9jYWwnIHwgJ3JlbW90ZScgfCAnYm90aCc7XG5leHBvcnQgdHlwZSBDb25mbGljdFN0cmF0ZWd5ID0gJ2FzaycgfCAnbG9jYWwtd2lucycgfCAncmVtb3RlLXdpbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZsaWN0SW5mbyB7XG4gIGxvY2FsUGF0aDogc3RyaW5nO1xuICByZW1vdGVLZXk6IHN0cmluZztcbiAgbG9jYWxDb250ZW50OiBzdHJpbmc7XG4gIHJlbW90ZUNvbnRlbnQ6IHN0cmluZztcbiAgbG9jYWxIYXNoOiBzdHJpbmc7XG4gIHJlbW90ZUhhc2g6IHN0cmluZztcbn1cblxuLy8gPT09PT09PT09PSBTeW5jRW5naW5lID09PT09PT09PT1cblxuZXhwb3J0IGNsYXNzIFN5bmNFbmdpbmUge1xuICBwcml2YXRlIHBsdWdpbjogQ2xvdWRmbGFyZVN5bmNQbHVnaW47XG4gIHByaXZhdGUgc3luY1N0YXRlczogU3luY1N0YXRlU3RvcmUgPSB7fTtcbiAgcHJpdmF0ZSBhdXRvU3luY1RpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWJvdW5jZVRpbWVyczogTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIF9zdGF0czogU3luY1N0YXRzID0ge1xuICAgIGxhc3RTeW5jVGltZTogbnVsbCxcbiAgICB0b3RhbEZpbGVzOiAwLFxuICAgIHN5bmNlZEZpbGVzOiAwLFxuICAgIHBlbmRpbmdVcGxvYWQ6IDAsXG4gICAgcGVuZGluZ0Rvd25sb2FkOiAwLFxuICAgIGNvbmZsaWN0czogMCxcbiAgICBlcnJvcnM6IDAsXG4gICAgaXNTeW5jaW5nOiBmYWxzZSxcbiAgfTtcbiAgcHJpdmF0ZSBfY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSA9IFtdO1xuICBwcml2YXRlIF9pc1N5bmNpbmcgPSBmYWxzZTtcblxuICAvLyBDYWxsYmFja3NcbiAgb25TdGF0c0NoYW5nZWQ6ICgoc3RhdHM6IFN5bmNTdGF0cykgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgb25Db25mbGljdHNGb3VuZDogKChjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBvblN5bmNFcnJvcjogKChlcnJvcjogc3RyaW5nKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBvblN5bmNDb21wbGV0ZTogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0IHN0YXRzKCk6IFN5bmNTdGF0cyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5fc3RhdHMgfTtcbiAgfVxuXG4gIGdldCBjb25mbGljdHMoKTogQ29uZmxpY3RJbmZvW10ge1xuICAgIHJldHVybiBbLi4udGhpcy5fY29uZmxpY3RzXTtcbiAgfVxuXG4gIGdldCBpc1N5bmNpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3luY2luZztcbiAgfVxuXG4gIC8vID09PT09PT09PT0gU3RhdGUgUGVyc2lzdGVuY2UgPT09PT09PT09PVxuXG4gIGFzeW5jIGxvYWRTeW5jU3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMucGx1Z2luLmxvYWREYXRhKCk7XG4gICAgdGhpcy5zeW5jU3RhdGVzID0gZGF0YT8uX3N5bmNTdGF0ZXMgfHwge307XG4gIH1cblxuICBhc3luYyBzYXZlU3luY1N0YXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgdGhpcy5wbHVnaW4ubG9hZERhdGEoKSkgfHwge307XG4gICAgZGF0YS5fc3luY1N0YXRlcyA9IHRoaXMuc3luY1N0YXRlcztcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlRGF0YShkYXRhKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gSGFzaCBDb21wdXRhdGlvbiA9PT09PT09PT09XG5cbiAgYXN5bmMgY29tcHV0ZUxvY2FsSGFzaChjb250ZW50OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgLy8gXHU0RjdGXHU3NTI4XHU3QjgwXHU1MzU1XHU3Njg0XHU1NEM4XHU1RTBDXHU3Qjk3XHU2Q0Q1XHVGRjA4XHU5MDAyXHU3NTI4XHU0RThFIE9ic2lkaWFuIFx1NzNBRlx1NTg4M1x1RkYwOVxuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGNvbnRlbnQpXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoY29udGVudCk7XG5cbiAgICAvLyBcdTRGN0ZcdTc1MjggV2ViIENyeXB0byBBUElcdUZGMDhcdTYyNDBcdTY3MDkgT2JzaWRpYW4gXHU1RTczXHU1M0YwXHU5MEZEXHU2NTJGXHU2MzAxXHVGRjA5XG4gICAgY29uc3QgaGFzaEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMjU2JywgZGF0YSk7XG4gICAgY29uc3QgaGFzaEFycmF5ID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShoYXNoQnVmZmVyKSk7XG4gICAgcmV0dXJuIGhhc2hBcnJheS5tYXAoKGIpID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBBdXRvIFN5bmMgU2NoZWR1bGluZyA9PT09PT09PT09XG5cbiAgc3RhcnRBdXRvU3luYygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BBdXRvU3luYygpO1xuXG4gICAgY29uc3QgaW50ZXJ2YWxNcyA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvU3luY0ludGVydmFsIHx8IDUpICogNjAgKiAxMDAwO1xuICAgIGNvbnNvbGUubG9nKGBbU3luY0VuZ2luZV0gQXV0byBzeW5jIHN0YXJ0ZWQsIGludGVydmFsOiAke2ludGVydmFsTXMgLyAxMDAwfXNgKTtcblxuICAgIHRoaXMuYXV0b1N5bmNUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNTeW5jaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbU3luY0VuZ2luZV0gQXV0byBzeW5jIHRyaWdnZXJlZCcpO1xuICAgICAgICB0aGlzLmZ1bGxTeW5jKCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTeW5jRW5naW5lXSBBdXRvIHN5bmMgZmFpbGVkOicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIGludGVydmFsTXMpO1xuICB9XG5cbiAgc3RvcEF1dG9TeW5jKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9TeW5jVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvU3luY1RpbWVyKTtcbiAgICAgIHRoaXMuYXV0b1N5bmNUaW1lciA9IG51bGw7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIEF1dG8gc3luYyBzdG9wcGVkJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBEZWJvdW5jZWQgRmlsZSBTeW5jID09PT09PT09PT1cblxuICBzY2hlZHVsZUZpbGVTeW5jKGZpbGU6IFRGaWxlKTogdm9pZCB7XG4gICAgY29uc3QgZXhpc3RpbmdUaW1lciA9IHRoaXMuZGVib3VuY2VUaW1lcnMuZ2V0KGZpbGUucGF0aCk7XG4gICAgaWYgKGV4aXN0aW5nVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChleGlzdGluZ1RpbWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxheU1zID0gKHRoaXMucGx1Z2luLnNldHRpbmdzLmRlYm91bmNlRGVsYXkgfHwgMzApICogMTAwMDtcblxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLmRlYm91bmNlVGltZXJzLmRlbGV0ZShmaWxlLnBhdGgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU2luZ2xlRmlsZShmaWxlKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBEZWJvdW5jZWQgc3luYyBmYWlsZWQgZm9yICR7ZmlsZS5wYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSwgZGVsYXlNcyk7XG5cbiAgICB0aGlzLmRlYm91bmNlVGltZXJzLnNldChmaWxlLnBhdGgsIHRpbWVyKTtcbiAgICB0aGlzLnVwZGF0ZVBlbmRpbmdTdGF0cygpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBDb3JlIFN5bmMgTG9naWMgPT09PT09PT09PVxuXG4gIGFzeW5jIGZ1bGxTeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9pc1N5bmNpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbU3luY0VuZ2luZV0gU3luYyBhbHJlYWR5IGluIHByb2dyZXNzLCBza2lwcGluZycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzU3luY2luZyA9IHRydWU7XG4gICAgdGhpcy5fc3RhdHMuaXNTeW5jaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jb25mbGljdHMgPSBbXTtcbiAgICB0aGlzLmVtaXRTdGF0c0NoYW5nZWQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIFN0YXJ0aW5nIGZ1bGwgc3luYy4uLicpO1xuXG4gICAgICAvLyAxLiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTYyNDBcdTY3MDlcdTY1ODdcdTRFRjZcdTUzQ0FcdTUxNzYgaGFzaFxuICAgICAgY29uc3QgbG9jYWxGaWxlcyA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcihcbiAgICAgICAgKGYpID0+IHRoaXMucGx1Z2luLnNob3VsZFN5bmNGaWxlKGYucGF0aClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxvY2FsRmlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IGZpbGU6IFRGaWxlOyBoYXNoOiBzdHJpbmcgfT4oKTtcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBsb2NhbEZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHJlbW90ZUtleSA9IHRoaXMucGx1Z2luLmdldFJlbW90ZUtleShmaWxlKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJylcbiAgICAgICAgICA/IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpXG4gICAgICAgICAgOiB0aGlzLnBsdWdpbi5hcnJheUJ1ZmZlclRvQmFzZTY0KGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkQmluYXJ5KGZpbGUpKTtcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgbG9jYWxGaWxlTWFwLnNldChyZW1vdGVLZXksIHsgZmlsZSwgaGFzaCB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gXHU2Mjc5XHU5MUNGXHU4M0I3XHU1M0Q2XHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHU1MTQzXHU2NTcwXHU2MzZFXG4gICAgICBjb25zdCByZW1vdGVNZXRhcyA9IGF3YWl0IHRoaXMuZmV0Y2hSZW1vdGVNZXRhcygndmF1bHQvJyk7XG4gICAgICBjb25zdCByZW1vdGVNZXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJlbW90ZUZpbGVNZXRhPigpO1xuICAgICAgZm9yIChjb25zdCBtZXRhIG9mIHJlbW90ZU1ldGFzKSB7XG4gICAgICAgIHJlbW90ZU1ldGFNYXAuc2V0KG1ldGEua2V5LCBtZXRhKTtcbiAgICAgIH1cblxuICAgICAgLy8gMy4gXHU0RTA5XHU2NUI5XHU2QkQ0XHU1QkY5XG4gICAgICBjb25zdCBhbGxLZXlzID0gbmV3IFNldChbLi4ubG9jYWxGaWxlTWFwLmtleXMoKSwgLi4ucmVtb3RlTWV0YU1hcC5rZXlzKCldKTtcbiAgICAgIGNvbnN0IHRvVXBsb2FkOiB7IGZpbGU6IFRGaWxlOyBrZXk6IHN0cmluZzsgaGFzaDogc3RyaW5nIH1bXSA9IFtdO1xuICAgICAgY29uc3QgdG9Eb3dubG9hZDogeyBrZXk6IHN0cmluZyB9W10gPSBbXTtcbiAgICAgIGNvbnN0IGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW10gPSBbXTtcbiAgICAgIGxldCBzeW5jZWRDb3VudCA9IDA7XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGFsbEtleXMpIHtcbiAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbEZpbGVNYXAuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IHJlbW90ZSA9IHJlbW90ZU1ldGFNYXAuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IGtleS5yZXBsYWNlKC9edmF1bHRcXC8vLCAnJyk7XG4gICAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXTtcblxuICAgICAgICBjb25zdCBsb2NhbEhhc2ggPSBsb2NhbD8uaGFzaCB8fCBudWxsO1xuICAgICAgICBjb25zdCByZW1vdGVIYXNoID0gcmVtb3RlPy5jb250ZW50SGFzaCB8fCBudWxsO1xuICAgICAgICBjb25zdCBsYXN0U3luY2VkSGFzaCA9IHNhdmVkU3RhdGU/Lmxhc3RTeW5jZWRIYXNoIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKGxvY2FsSGFzaCAmJiAhcmVtb3RlSGFzaCkge1xuICAgICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NjcwOVx1MzAwMVx1OEZEQ1x1N0EwQlx1NkNBMVx1NjcwOVxuICAgICAgICAgIGlmIChsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RTRCXHU1MjREXHU1NDBDXHU2QjY1XHU4RkM3XHU0RjQ2XHU4RkRDXHU3QTBCXHU4OEFCXHU1MjIwXHU0RTg2IFx1MjE5MiBcdTRFMEJcdThGN0RcdTUyMjBcdTk2NjRcdUZGMDhcdTYyMTZcdThERjNcdThGQzdcdUZGMDlcbiAgICAgICAgICAgIC8vIFx1OEZEOVx1OTFDQ1x1OTAwOVx1NjJFOVx1OTFDRFx1NjVCMFx1NEUwQVx1NEYyMFxuICAgICAgICAgICAgdG9VcGxvYWQucHVzaCh7IGZpbGU6IGxvY2FsIS5maWxlLCBrZXksIGhhc2g6IGxvY2FsSGFzaCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU2NUIwXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTBBXHU0RjIwXG4gICAgICAgICAgICB0b1VwbG9hZC5wdXNoKHsgZmlsZTogbG9jYWwhLmZpbGUsIGtleSwgaGFzaDogbG9jYWxIYXNoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghbG9jYWxIYXNoICYmIHJlbW90ZUhhc2gpIHtcbiAgICAgICAgICAvLyBcdThGRENcdTdBMEJcdTY3MDlcdTMwMDFcdTY3MkNcdTU3MzBcdTZDQTFcdTY3MDlcbiAgICAgICAgICBpZiAobGFzdFN5bmNlZEhhc2gpIHtcbiAgICAgICAgICAgIC8vIFx1NEU0Qlx1NTI0RFx1NTQwQ1x1NkI2NVx1OEZDN1x1NEY0Nlx1NjcyQ1x1NTczMFx1ODhBQlx1NTIyMFx1NEU4NiBcdTIxOTIgXHU4REYzXHU4RkM3XHVGRjA4XHU2MjE2XHU5MUNEXHU2NUIwXHU0RTBCXHU4RjdEXHVGRjA5XG4gICAgICAgICAgICAvLyBcdThGRDlcdTkxQ0NcdTkwMDlcdTYyRTlcdTkxQ0RcdTY1QjBcdTRFMEJcdThGN0RcbiAgICAgICAgICAgIHRvRG93bmxvYWQucHVzaCh7IGtleSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU2NUIwXHU3Njg0XHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTBCXHU4RjdEXG4gICAgICAgICAgICB0b0Rvd25sb2FkLnB1c2goeyBrZXkgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsSGFzaCAmJiByZW1vdGVIYXNoKSB7XG4gICAgICAgICAgaWYgKGxvY2FsSGFzaCA9PT0gcmVtb3RlSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU1REYyXHU1NDBDXHU2QjY1XG4gICAgICAgICAgICBzeW5jZWRDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICAgIHJlbW90ZUtleToga2V5LFxuICAgICAgICAgICAgICBsYXN0U3luY2VkSGFzaDogbG9jYWxIYXNoLFxuICAgICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmICghbGFzdFN5bmNlZEhhc2gpIHtcbiAgICAgICAgICAgIC8vIFx1OTk5Nlx1NkIyMVx1NTQwQ1x1NkI2NVx1RkYwQ1x1OTcwMFx1ODk4MVx1NTFCMlx1N0E4MVx1NjhDMFx1NkQ0Qlx1RkYwOFx1OTBGRFx1NjYyRlx1NjVCMFx1NzY4NFx1RkYwOVxuICAgICAgICAgICAgLy8gXHU0RjE4XHU1MTQ4XHU0RjdGXHU3NTI4XHU2NzJDXHU1NzMwXHU3MjQ4XHU2NzJDXG4gICAgICAgICAgICBjb25mbGljdHMucHVzaChhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGxvY2FsIS5maWxlLCBrZXksIGxvY2FsSGFzaCwgcmVtb3RlSGFzaCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoICE9PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoID09PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RUM1XHU2NzJDXHU1NzMwXHU0RkVFXHU2NTM5XG4gICAgICAgICAgICB0b1VwbG9hZC5wdXNoKHsgZmlsZTogbG9jYWwhLmZpbGUsIGtleSwgaGFzaDogbG9jYWxIYXNoIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoID09PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoICE9PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RUM1XHU4RkRDXHU3QTBCXHU0RkVFXHU2NTM5XG4gICAgICAgICAgICB0b0Rvd25sb2FkLnB1c2goeyBrZXkgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFx1NTNDQ1x1NjVCOVx1OTBGRFx1NEZFRVx1NjUzOVx1NEU4NiBcdTIxOTIgXHU1MUIyXHU3QTgxXHVGRjAxXG4gICAgICAgICAgICBjb25mbGljdHMucHVzaChhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGxvY2FsIS5maWxlLCBrZXksIGxvY2FsSGFzaCwgcmVtb3RlSGFzaCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFtTeW5jRW5naW5lXSBBbmFseXNpczogJHt0b1VwbG9hZC5sZW5ndGh9IHVwbG9hZCwgJHt0b0Rvd25sb2FkLmxlbmd0aH0gZG93bmxvYWQsICR7Y29uZmxpY3RzLmxlbmd0aH0gY29uZmxpY3RzLCAke3N5bmNlZENvdW50fSBzeW5jZWRgXG4gICAgICApO1xuXG4gICAgICAvLyA0LiBcdTYyNjdcdTg4NENcdTRFMEFcdTRGMjBcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b1VwbG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN5bmNGaWxlVG9SZW1vdGUoaXRlbS5maWxlKTtcbiAgICAgICAgICBjb25zdCBsb2NhbFBhdGggPSBpdGVtLmtleS5yZXBsYWNlKC9edmF1bHRcXC8vLCAnJyk7XG4gICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICByZW1vdGVLZXk6IGl0ZW0ua2V5LFxuICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGl0ZW0uaGFzaCxcbiAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgc3luY2VkQ291bnQrKztcbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gVXBsb2FkIGZhaWxlZCBmb3IgJHtpdGVtLmtleX06YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMuX3N0YXRzLmVycm9ycysrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDUuIFx1NjI2N1x1ODg0Q1x1NEUwQlx1OEY3RFxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRvRG93bmxvYWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5kb3dubG9hZEFuZFNhdmUoaXRlbS5rZXkpO1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFBhdGggPSBpdGVtLmtleS5yZXBsYWNlKC9edmF1bHRcXC8vLCAnJyk7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgICAgcmVtb3RlS2V5OiBpdGVtLmtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGRhdGEuY29udGVudEhhc2ggfHwgJycsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN5bmNlZENvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBEb3dubG9hZCBmYWlsZWQgZm9yICR7aXRlbS5rZXl9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyA2LiBcdTU5MDRcdTc0MDZcdTUxQjJcdTdBODFcbiAgICAgIHRoaXMuX2NvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29uZmxpY3RTdHJhdGVneSB8fCAnYXNrJztcblxuICAgICAgaWYgKGNvbmZsaWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2FzaycpIHtcbiAgICAgICAgICAvLyBcdTkwMUFcdTc3RTUgVUkgXHU1QzQyXHU1RjM5XHU1MUZBXHU1MUIyXHU3QTgxXHU4OUUzXHU1MUIzXHU1QkY5XHU4QkREXHU2ODQ2XG4gICAgICAgICAgdGhpcy5vbkNvbmZsaWN0c0ZvdW5kPy4oY29uZmxpY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTg5RTNcdTUxQjNcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbmZsaWN0IG9mIGNvbmZsaWN0cykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXNvbHZlQ29uZmxpY3QoXG4gICAgICAgICAgICAgIGNvbmZsaWN0LFxuICAgICAgICAgICAgICBzdHJhdGVneSA9PT0gJ2xvY2FsLXdpbnMnID8gJ2xvY2FsJyA6ICdyZW1vdGUnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9jb25mbGljdHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyA3LiBcdTY2RjRcdTY1QjBcdTdFREZcdThCQTFcbiAgICAgIHRoaXMuX3N0YXRzID0ge1xuICAgICAgICBsYXN0U3luY1RpbWU6IERhdGUubm93KCksXG4gICAgICAgIHRvdGFsRmlsZXM6IGFsbEtleXMuc2l6ZSxcbiAgICAgICAgc3luY2VkRmlsZXM6IHN5bmNlZENvdW50LFxuICAgICAgICBwZW5kaW5nVXBsb2FkOiAwLFxuICAgICAgICBwZW5kaW5nRG93bmxvYWQ6IDAsXG4gICAgICAgIGNvbmZsaWN0czogdGhpcy5fY29uZmxpY3RzLmxlbmd0aCxcbiAgICAgICAgZXJyb3JzOiB0aGlzLl9zdGF0cy5lcnJvcnMsXG4gICAgICAgIGlzU3luY2luZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTeW5jU3RhdGUoKTtcbiAgICAgIHRoaXMub25TeW5jQ29tcGxldGU/LigpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbU3luY0VuZ2luZV0gRnVsbCBzeW5jIGZhaWxlZDonLCBlcnIpO1xuICAgICAgdGhpcy5fc3RhdHMuZXJyb3JzKys7XG4gICAgICB0aGlzLl9zdGF0cy5pc1N5bmNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMub25TeW5jRXJyb3I/LihlcnIubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2lzU3luY2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhdHMuaXNTeW5jaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmVtaXRTdGF0c0NoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzeW5jU2luZ2xlRmlsZShmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9pc1N5bmNpbmcpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZW1vdGVLZXkgPSB0aGlzLnBsdWdpbi5nZXRSZW1vdGVLZXkoZmlsZSk7XG4gICAgICBjb25zdCBsb2NhbFBhdGggPSBmaWxlLnBhdGg7XG5cbiAgICAgIC8vIFx1ODNCN1x1NTNENlx1NjcyQ1x1NTczMCBoYXNoXG4gICAgICBjb25zdCBpc01hcmtkb3duID0gZmlsZS5wYXRoLmVuZHNXaXRoKCcubWQnKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpc01hcmtkb3duXG4gICAgICAgID8gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSlcbiAgICAgICAgOiB0aGlzLnBsdWdpbi5hcnJheUJ1ZmZlclRvQmFzZTY0KGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkQmluYXJ5KGZpbGUpKTtcbiAgICAgIGNvbnN0IGxvY2FsSGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcblxuICAgICAgLy8gXHU4M0I3XHU1M0Q2XHU4RkRDXHU3QTBCIGhhc2hcbiAgICAgIGxldCByZW1vdGVIYXNoOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8eyBzdWNjZXNzOiBib29sZWFuOyBkYXRhOiBSZW1vdGVGaWxlTWV0YSB9PihcbiAgICAgICAgICBgL2FwaS9zeW5jL21ldGEvJHtyZW1vdGVLZXl9YFxuICAgICAgICApO1xuICAgICAgICByZW1vdGVIYXNoID0gbWV0YS5kYXRhLmNvbnRlbnRIYXNoIHx8IG51bGw7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gXHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHU0RTBEXHU1QjU4XHU1NzI4XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXTtcbiAgICAgIGNvbnN0IGxhc3RTeW5jZWRIYXNoID0gc2F2ZWRTdGF0ZT8ubGFzdFN5bmNlZEhhc2ggfHwgbnVsbDtcblxuICAgICAgaWYgKGxvY2FsSGFzaCA9PT0gcmVtb3RlSGFzaCkge1xuICAgICAgICAvLyBcdTVERjJcdTU0MENcdTZCNjVcbiAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgcmVtb3RlS2V5LFxuICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBsb2NhbEhhc2gsXG4gICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKCFyZW1vdGVIYXNoIHx8IChsb2NhbEhhc2ggIT09IGxhc3RTeW5jZWRIYXNoICYmIHJlbW90ZUhhc2ggPT09IGxhc3RTeW5jZWRIYXNoKSkge1xuICAgICAgICAvLyBcdTY3MkNcdTU3MzBcdTRGRUVcdTY1MzlcdTYyMTZcdThGRENcdTdBMEJcdTRFMERcdTVCNThcdTU3MjggXHUyMTkyIFx1NEUwQVx1NEYyMFxuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICByZW1vdGVLZXksXG4gICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGxvY2FsSGFzaCxcbiAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoID09PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoICE9PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAvLyBcdTRFQzVcdThGRENcdTdBMEJcdTRGRUVcdTY1MzkgXHUyMTkyIFx1NEUwQlx1OEY3RFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5kb3dubG9hZEFuZFNhdmUocmVtb3RlS2V5KTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgIHJlbW90ZUtleSxcbiAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8IHJlbW90ZUhhc2gsXG4gICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTUxQjJcdTdBODFcbiAgICAgICAgY29uc3QgY29uZmxpY3QgPSBhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGZpbGUsIHJlbW90ZUtleSwgbG9jYWxIYXNoLCByZW1vdGVIYXNoKTtcbiAgICAgICAgdGhpcy5fY29uZmxpY3RzLnB1c2goY29uZmxpY3QpO1xuICAgICAgICB0aGlzLl9zdGF0cy5jb25mbGljdHMgPSB0aGlzLl9jb25mbGljdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLm9uQ29uZmxpY3RzRm91bmQ/LihbY29uZmxpY3RdKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zYXZlU3luY1N0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBlbmRpbmdTdGF0cygpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gU2luZ2xlIGZpbGUgc3luYyBmYWlsZWQgZm9yICR7ZmlsZS5wYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gQ29uZmxpY3QgUmVzb2x1dGlvbiA9PT09PT09PT09XG5cbiAgYXN5bmMgcmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0OiBDb25mbGljdEluZm8sIHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxvY2FsUGF0aCA9IGNvbmZsaWN0LmxvY2FsUGF0aDtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChsb2NhbFBhdGgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN3aXRjaCAocmVzb2x1dGlvbikge1xuICAgICAgICBjYXNlICdsb2NhbCc6IHtcbiAgICAgICAgICAvLyBcdTc1MjhcdTY3MkNcdTU3MzBcdTcyNDhcdTY3MkNcdTg5ODZcdTc2RDZcdThGRENcdTdBMEJcbiAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgICByZW1vdGVLZXk6IGNvbmZsaWN0LnJlbW90ZUtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncmVtb3RlJzoge1xuICAgICAgICAgIC8vIFx1NzUyOFx1OEZEQ1x1N0EwQlx1NzI0OFx1NjcyQ1x1ODk4Nlx1NzZENlx1NjcyQ1x1NTczMFxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRvd25sb2FkQW5kU2F2ZShjb25mbGljdC5yZW1vdGVLZXkpO1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgICAgcmVtb3RlS2V5OiBjb25mbGljdC5yZW1vdGVLZXksXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8IGNvbmZsaWN0LnJlbW90ZUhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYm90aCc6IHtcbiAgICAgICAgICAvLyBcdTRGRERcdTc1NTlcdTRFMjRcdTRFMkFcdTcyNDhcdTY3MkNcdUZGMENcdTY3MkNcdTU3MzBcdTUyMUJcdTVFRkEgLmNvbmZsaWN0IFx1NTI2Rlx1NjcyQ1xuICAgICAgICAgIGNvbnN0IGNvbmZsaWN0UGF0aCA9IGxvY2FsUGF0aC5yZXBsYWNlKC9cXC5tZCQvLCBgLmNvbmZsaWN0LSR7RGF0ZS5ub3coKX0ubWRgKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY3JlYXRlKGNvbmZsaWN0UGF0aCwgY29uZmxpY3QucmVtb3RlQ29udGVudCk7XG5cbiAgICAgICAgICAvLyBcdTRFMEFcdTRGMjBcdTY3MkNcdTU3MzBcdTcyNDhcdTY3MkNcdTUyMzBcdThGRENcdTdBMEJcbiAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgICByZW1vdGVLZXk6IGNvbmZsaWN0LnJlbW90ZUtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHU0RUNFXHU1MUIyXHU3QTgxXHU1MjE3XHU4ODY4XHU0RTJEXHU3OUZCXHU5NjY0XG4gICAgICB0aGlzLl9jb25mbGljdHMgPSB0aGlzLl9jb25mbGljdHMuZmlsdGVyKChjKSA9PiBjLmxvY2FsUGF0aCAhPT0gbG9jYWxQYXRoKTtcbiAgICAgIHRoaXMuX3N0YXRzLmNvbmZsaWN0cyA9IHRoaXMuX2NvbmZsaWN0cy5sZW5ndGg7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTeW5jU3RhdGUoKTtcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gQ29uZmxpY3QgcmVzb2x1dGlvbiBmYWlsZWQgZm9yICR7bG9jYWxQYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlc29sdmVBbGxDb25mbGljdHMocmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29uZmxpY3RzVG9SZXNvbHZlID0gWy4uLnRoaXMuX2NvbmZsaWN0c107XG4gICAgZm9yIChjb25zdCBjb25mbGljdCBvZiBjb25mbGljdHNUb1Jlc29sdmUpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0LCByZXNvbHV0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09IEhlbHBlcnMgPT09PT09PT09PVxuXG4gIHByaXZhdGUgYXN5bmMgZmV0Y2hSZW1vdGVNZXRhcyhwcmVmaXg6IHN0cmluZyk6IFByb21pc2U8UmVtb3RlRmlsZU1ldGFbXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBkYXRhOiB7IGZpbGVzOiBSZW1vdGVGaWxlTWV0YVtdOyBjb3VudDogbnVtYmVyIH07XG4gICAgICB9PignL2FwaS9zeW5jL2JhdGNoLW1ldGEnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByZWZpeCB9KSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5kYXRhLmZpbGVzO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbU3luY0VuZ2luZV0gRmFpbGVkIHRvIGZldGNoIHJlbW90ZSBtZXRhczonLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkb3dubG9hZEFuZFNhdmUoXG4gICAgcmVtb3RlS2V5OiBzdHJpbmdcbiAgKTogUHJvbWlzZTx7IGNvbnRlbnRIYXNoPzogc3RyaW5nIH0gfCBudWxsPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucGx1Z2luLmFwaTx7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBrZXk6IHN0cmluZztcbiAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgIHVwbG9hZGVkPzogc3RyaW5nO1xuICAgICAgICAgIGNvbnRlbnRIYXNoPzogc3RyaW5nO1xuICAgICAgICAgIGVuY29kaW5nPzogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgfT4oYC9hcGkvc3luYy9kb3dubG9hZC8ke3JlbW90ZUtleX1gKTtcblxuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgY29uc3QgbG9jYWxQYXRoID0gZGF0YS5rZXkucmVwbGFjZSgvXnZhdWx0XFwvLywgJycpO1xuICAgICAgY29uc3QgaXNNYXJrZG93biA9IGxvY2FsUGF0aC5lbmRzV2l0aCgnLm1kJyk7XG4gICAgICBjb25zdCBleGlzdGluZ0ZpbGUgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGxvY2FsUGF0aCk7XG5cbiAgICAgIGlmIChleGlzdGluZ0ZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICBpZiAoaXNNYXJrZG93biB8fCBkYXRhLmVuY29kaW5nID09PSAndXRmLTgnKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0Lm1vZGlmeShleGlzdGluZ0ZpbGUsIGRhdGEuY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5wbHVnaW4uYmFzZTY0VG9BcnJheUJ1ZmZlcihkYXRhLmNvbnRlbnQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5tb2RpZnlCaW5hcnkoZXhpc3RpbmdGaWxlLCBidWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBbU3luY0VuZ2luZV0gVXBkYXRlZCAke2xvY2FsUGF0aH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFx1NTIxQlx1NUVGQVx1NjU4N1x1NEVGNlxuICAgICAgICBjb25zdCBmb2xkZXJQYXRoID0gbG9jYWxQYXRoLnN1YnN0cmluZygwLCBsb2NhbFBhdGgubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgIGlmIChmb2xkZXJQYXRoKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXJQYXRoKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTWFya2Rvd24gfHwgZGF0YS5lbmNvZGluZyA9PT0gJ3V0Zi04Jykge1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5jcmVhdGUobG9jYWxQYXRoLCBkYXRhLmNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMucGx1Z2luLmJhc2U2NFRvQXJyYXlCdWZmZXIoZGF0YS5jb250ZW50KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KGxvY2FsUGF0aCwgYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgW1N5bmNFbmdpbmVdIENyZWF0ZWQgJHtsb2NhbFBhdGh9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNvbnRlbnRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIH07XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBEb3dubG9hZCBmYWlsZWQgZm9yICR7cmVtb3RlS2V5fTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGJ1aWxkQ29uZmxpY3RJbmZvKFxuICAgIGZpbGU6IFRGaWxlLFxuICAgIHJlbW90ZUtleTogc3RyaW5nLFxuICAgIGxvY2FsSGFzaDogc3RyaW5nLFxuICAgIHJlbW90ZUhhc2g6IHN0cmluZ1xuICApOiBQcm9taXNlPENvbmZsaWN0SW5mbz4ge1xuICAgIGNvbnN0IGxvY2FsQ29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuXG4gICAgbGV0IHJlbW90ZUNvbnRlbnQgPSAnJztcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBpPHtcbiAgICAgICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICAgICAgZGF0YTogeyBjb250ZW50OiBzdHJpbmcgfTtcbiAgICAgIH0+KGAvYXBpL3N5bmMvZG93bmxvYWQvJHtyZW1vdGVLZXl9YCk7XG4gICAgICByZW1vdGVDb250ZW50ID0gcmVzLmRhdGEuY29udGVudDtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJlbW90ZUNvbnRlbnQgPSAnKEZhaWxlZCB0byBmZXRjaCByZW1vdGUgY29udGVudCknO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhbFBhdGg6IGZpbGUucGF0aCxcbiAgICAgIHJlbW90ZUtleSxcbiAgICAgIGxvY2FsQ29udGVudCxcbiAgICAgIHJlbW90ZUNvbnRlbnQsXG4gICAgICBsb2NhbEhhc2gsXG4gICAgICByZW1vdGVIYXNoLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBlbmRpbmdTdGF0cygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0cy5wZW5kaW5nVXBsb2FkID0gdGhpcy5kZWJvdW5jZVRpbWVycy5zaXplO1xuICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0U3RhdHNDaGFuZ2VkKCk6IHZvaWQge1xuICAgIHRoaXMub25TdGF0c0NoYW5nZWQ/Lih0aGlzLnN0YXRzKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gQ2xlYW51cCA9PT09PT09PT09XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BBdXRvU3luYygpO1xuICAgIGZvciAoY29uc3QgdGltZXIgb2YgdGhpcy5kZWJvdW5jZVRpbWVycy52YWx1ZXMoKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gICAgdGhpcy5kZWJvdW5jZVRpbWVycy5jbGVhcigpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgUGx1Z2luLCBzZXRJY29uLCBNb2RhbCwgQXBwIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHR5cGUgeyBTeW5jU3RhdHMsIENvbmZsaWN0SW5mbyB9IGZyb20gJy4vc3luYy1lbmdpbmUnO1xuXG5leHBvcnQgY2xhc3MgU3luY1N0YXR1c0JhciB7XG4gIHByaXZhdGUgcGx1Z2luOiBQbHVnaW47XG4gIHByaXZhdGUgc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGljb25FbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdGV4dEVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfc3RhdHM6IFN5bmNTdGF0cyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9jb25mbGljdHM6IENvbmZsaWN0SW5mb1tdID0gW107XG4gIHByaXZhdGUgb25TaG93Q29uZmxpY3RzOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBvblRyaWdnZXJTeW5jOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwbHVnaW46IFBsdWdpbixcbiAgICBvcHRzOiB7XG4gICAgICBvblNob3dDb25mbGljdHM/OiAoKSA9PiB2b2lkO1xuICAgICAgb25UcmlnZ2VyU3luYz86ICgpID0+IHZvaWQ7XG4gICAgfVxuICApIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLm9uU2hvd0NvbmZsaWN0cyA9IG9wdHMub25TaG93Q29uZmxpY3RzIHx8IG51bGw7XG4gICAgdGhpcy5vblRyaWdnZXJTeW5jID0gb3B0cy5vblRyaWdnZXJTeW5jIHx8IG51bGw7XG5cbiAgICAvLyBDcmVhdGUgc3RhdHVzIGJhciBlbGVtZW50XG4gICAgdGhpcy5zdGF0dXNCYXJFbCA9IHBsdWdpbi5hZGRTdGF0dXNCYXJJdGVtKCk7XG4gICAgdGhpcy5zdGF0dXNCYXJFbC5hZGRDbGFzcygnY2Ytc3luYy1zdGF0dXMnKTtcbiAgICB0aGlzLnN0YXR1c0JhckVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDbG91ZGZsYXJlIFN5bmMgU3RhdHVzJyk7XG5cbiAgICB0aGlzLmljb25FbCA9IHRoaXMuc3RhdHVzQmFyRWwuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLXN0YXR1cy1pY29uJyB9KTtcbiAgICB0aGlzLnRleHRFbCA9IHRoaXMuc3RhdHVzQmFyRWwuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLXN0YXR1cy10ZXh0JyB9KTtcblxuICAgIC8vIENsaWNrIGhhbmRsZXIgXHUyMDE0IG9wZW5zIGRldGFpbCBwYW5lbFxuICAgIHRoaXMuc3RhdHVzQmFyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEZXRhaWxNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIHN0eWxlc1xuICAgIHRoaXMuYWRkU3R5bGVzKCk7XG5cbiAgICAvLyBJbml0aWFsIHJlbmRlclxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB1cGRhdGVTdGF0cyhzdGF0czogU3luY1N0YXRzKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgdXBkYXRlQ29uZmxpY3RzKGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW10pOiB2b2lkIHtcbiAgICB0aGlzLl9jb25mbGljdHMgPSBjb25mbGljdHM7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRzID0gdGhpcy5fc3RhdHM7XG5cbiAgICBpZiAoIXN0YXRzKSB7XG4gICAgICBzZXRJY29uKHRoaXMuaWNvbkVsLCAnY2xvdWQnKTtcbiAgICAgIHRoaXMudGV4dEVsLnRleHRDb250ZW50ID0gJ05vdCBzeW5jZWQnO1xuICAgICAgdGhpcy5zdGF0dXNCYXJFbC5jbGFzc05hbWUgPSAnY2Ytc3luYy1zdGF0dXMgY2Ytc3RhdHVzLWlkbGUnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGF0cy5pc1N5bmNpbmcpIHtcbiAgICAgIHNldEljb24odGhpcy5pY29uRWwsICdyZWZyZXNoLWN3Jyk7XG4gICAgICB0aGlzLnRleHRFbC50ZXh0Q29udGVudCA9ICdTeW5jaW5nLi4uJztcbiAgICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1zeW5jaW5nJztcbiAgICAgIHRoaXMuaWNvbkVsLmFkZENsYXNzKCdjZi1zcGluJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pY29uRWwucmVtb3ZlQ2xhc3MoJ2NmLXNwaW4nKTtcblxuICAgIGlmIChzdGF0cy5jb25mbGljdHMgPiAwKSB7XG4gICAgICBzZXRJY29uKHRoaXMuaWNvbkVsLCAnYWxlcnQtdHJpYW5nbGUnKTtcbiAgICAgIHRoaXMudGV4dEVsLnRleHRDb250ZW50ID0gYCR7c3RhdHMuY29uZmxpY3RzfSBjb25mbGljdCR7c3RhdHMuY29uZmxpY3RzID4gMSA/ICdzJyA6ICcnfWA7XG4gICAgICB0aGlzLnN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdjZi1zeW5jLXN0YXR1cyBjZi1zdGF0dXMtY29uZmxpY3QnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGF0cy5lcnJvcnMgPiAwKSB7XG4gICAgICBzZXRJY29uKHRoaXMuaWNvbkVsLCAneC1jaXJjbGUnKTtcbiAgICAgIHRoaXMudGV4dEVsLnRleHRDb250ZW50ID0gYCR7c3RhdHMuZXJyb3JzfSBlcnJvciR7c3RhdHMuZXJyb3JzID4gMSA/ICdzJyA6ICcnfWA7XG4gICAgICB0aGlzLnN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdjZi1zeW5jLXN0YXR1cyBjZi1zdGF0dXMtZXJyb3InO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN5bmNlZCBzdGF0ZVxuICAgIHNldEljb24odGhpcy5pY29uRWwsICdjaGVjay1jaXJjbGUnKTtcbiAgICBjb25zdCB0aW1lQWdvID0gc3RhdHMubGFzdFN5bmNUaW1lID8gdGhpcy5mb3JtYXRUaW1lQWdvKHN0YXRzLmxhc3RTeW5jVGltZSkgOiAnbmV2ZXInO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFt0aW1lQWdvXTtcbiAgICBpZiAoc3RhdHMucGVuZGluZ1VwbG9hZCA+IDApIHBhcnRzLnB1c2goYCR7c3RhdHMucGVuZGluZ1VwbG9hZH0gcGVuZGluZ2ApO1xuICAgIHRoaXMudGV4dEVsLnRleHRDb250ZW50ID0gcGFydHMuam9pbignIFx1MDBCNyAnKTtcbiAgICB0aGlzLnN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdjZi1zeW5jLXN0YXR1cyBjZi1zdGF0dXMtc3luY2VkJztcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VGltZUFnbyh0aW1lc3RhbXA6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDApO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG5cbiAgICBpZiAoc2Vjb25kcyA8IDYwKSByZXR1cm4gJ2p1c3Qgbm93JztcbiAgICBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gYCR7bWludXRlc31tIGFnb2A7XG4gICAgaWYgKGhvdXJzIDwgMjQpIHJldHVybiBgJHtob3Vyc31oIGFnb2A7XG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IoaG91cnMgLyAyNCl9ZCBhZ29gO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RGV0YWlsTW9kYWwoKTogdm9pZCB7XG4gICAgbmV3IFN5bmNEZXRhaWxNb2RhbCh0aGlzLnBsdWdpbi5hcHAsIHRoaXMuX3N0YXRzLCB0aGlzLl9jb25mbGljdHMsIHtcbiAgICAgIG9uU2hvd0NvbmZsaWN0czogdGhpcy5vblNob3dDb25mbGljdHMsXG4gICAgICBvblRyaWdnZXJTeW5jOiB0aGlzLm9uVHJpZ2dlclN5bmMsXG4gICAgfSkub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZi1zdGF0dXMtYmFyLXN0eWxlcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaWQgPSAnY2Ytc3RhdHVzLWJhci1zdHlsZXMnO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgLmNmLXN5bmMtc3RhdHVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1zeW5jLXN0YXR1czpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItaG92ZXIpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXR1cy1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0dXMtaWNvbiBzdmcge1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgfVxuICAgICAgLmNmLXN0YXR1cy10ZXh0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0dXMtaWRsZSAuY2Ytc3RhdHVzLWljb24geyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IH1cbiAgICAgIC5jZi1zdGF0dXMtc3luY2luZyAuY2Ytc3RhdHVzLWljb24geyBjb2xvcjogdmFyKC0tdGV4dC1hY2NlbnQpOyB9XG4gICAgICAuY2Ytc3RhdHVzLXN5bmNlZCAuY2Ytc3RhdHVzLWljb24geyBjb2xvcjogdmFyKC0tdGV4dC1zdWNjZXNzLCAjNGFkZTgwKTsgfVxuICAgICAgLmNmLXN0YXR1cy1jb25mbGljdCAuY2Ytc3RhdHVzLWljb24geyBjb2xvcjogdmFyKC0tdGV4dC13YXJuaW5nLCAjZmFjYzE1KTsgfVxuICAgICAgLmNmLXN0YXR1cy1lcnJvciAuY2Ytc3RhdHVzLWljb24geyBjb2xvcjogdmFyKC0tdGV4dC1lcnJvciwgI2Y4NzE3MSk7IH1cbiAgICAgIC5jZi1zcGluIHtcbiAgICAgICAgYW5pbWF0aW9uOiBjZi1zcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgY2Ytc3BpbiB7XG4gICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgICAgIH1cbiAgICBgO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1c0JhckVsLnJlbW92ZSgpO1xuICB9XG59XG5cbi8vID09PT09PT09PT0gRGV0YWlsIE1vZGFsID09PT09PT09PT1cblxuY2xhc3MgU3luY0RldGFpbE1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHN0YXRzOiBTeW5jU3RhdHMgfCBudWxsO1xuICBwcml2YXRlIGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW107XG4gIHByaXZhdGUgb25TaG93Q29uZmxpY3RzOiAoKCkgPT4gdm9pZCkgfCBudWxsO1xuICBwcml2YXRlIG9uVHJpZ2dlclN5bmM6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYXBwOiBBcHAsXG4gICAgc3RhdHM6IFN5bmNTdGF0cyB8IG51bGwsXG4gICAgY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSxcbiAgICBvcHRzOiB7XG4gICAgICBvblNob3dDb25mbGljdHM/OiAoKCkgPT4gdm9pZCkgfCBudWxsO1xuICAgICAgb25UcmlnZ2VyU3luYz86ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuc3RhdHMgPSBzdGF0cztcbiAgICB0aGlzLmNvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICB0aGlzLm9uU2hvd0NvbmZsaWN0cyA9IG9wdHMub25TaG93Q29uZmxpY3RzIHx8IG51bGw7XG4gICAgdGhpcy5vblRyaWdnZXJTeW5jID0gb3B0cy5vblRyaWdnZXJTeW5jIHx8IG51bGw7XG4gIH1cblxuICBvbk9wZW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmVtcHR5KCk7XG4gICAgY29udGVudEVsLmFkZENsYXNzKCdjZi1zeW5jLWRldGFpbC1tb2RhbCcpO1xuXG4gICAgdGhpcy5hZGRTdHlsZXMoKTtcblxuICAgIC8vIEhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1kZXRhaWwtaGVhZGVyJyB9KTtcbiAgICBjb25zdCB0aXRsZVJvdyA9IGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1kZXRhaWwtdGl0bGUtcm93JyB9KTtcbiAgICBjb25zdCBpY29uRWwgPSB0aXRsZVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtZGV0YWlsLWljb24nIH0pO1xuICAgIHNldEljb24oaWNvbkVsLCAnY2xvdWQnKTtcbiAgICB0aXRsZVJvdy5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdTeW5jIFN0YXR1cycsIGNsczogJ2NmLWRldGFpbC10aXRsZScgfSk7XG5cbiAgICBjb25zdCBzdGF0cyA9IHRoaXMuc3RhdHM7XG5cbiAgICBpZiAoIXN0YXRzKSB7XG4gICAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xzOiAnY2YtZGV0YWlsLWVtcHR5JyxcbiAgICAgICAgdGV4dDogJ05vIHN5bmMgZGF0YSBhdmFpbGFibGUuIFJ1biBhIHN5bmMgZmlyc3QuJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGF0cyBncmlkXG4gICAgICBjb25zdCBncmlkID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRldGFpbC1ncmlkJyB9KTtcblxuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnY2xvY2snLCAnTGFzdCBTeW5jJywgc3RhdHMubGFzdFN5bmNUaW1lID8gdGhpcy5mb3JtYXRUaW1lKHN0YXRzLmxhc3RTeW5jVGltZSkgOiAnTmV2ZXInKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ2ZpbGVzJywgJ1RvdGFsIEZpbGVzJywgU3RyaW5nKHN0YXRzLnRvdGFsRmlsZXMpKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ2NoZWNrLWNpcmNsZScsICdTeW5jZWQnLCBTdHJpbmcoc3RhdHMuc3luY2VkRmlsZXMpKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ3VwbG9hZCcsICdQZW5kaW5nIFx1MjE5MScsIFN0cmluZyhzdGF0cy5wZW5kaW5nVXBsb2FkKSk7XG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICdkb3dubG9hZCcsICdQZW5kaW5nIFx1MjE5MycsIFN0cmluZyhzdGF0cy5wZW5kaW5nRG93bmxvYWQpKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ2FsZXJ0LXRyaWFuZ2xlJywgJ0NvbmZsaWN0cycsIFN0cmluZyhzdGF0cy5jb25mbGljdHMpLCBzdGF0cy5jb25mbGljdHMgPiAwID8gJ2NmLXN0YXQtd2FybmluZycgOiAnJyk7XG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICd4LWNpcmNsZScsICdFcnJvcnMnLCBTdHJpbmcoc3RhdHMuZXJyb3JzKSwgc3RhdHMuZXJyb3JzID4gMCA/ICdjZi1zdGF0LWVycm9yJyA6ICcnKTtcblxuICAgICAgLy8gQ29uZmxpY3QgbGlzdFxuICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgY29uZmxpY3RTZWN0aW9uID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xzOiAnY2YtZGV0YWlsLXNlY3Rpb24nLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uZmxpY3RTZWN0aW9uLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0NvbmZsaWN0aW5nIEZpbGVzJyB9KTtcblxuICAgICAgICBjb25zdCBjb25mbGljdExpc3QgPSBjb25mbGljdFNlY3Rpb24uY3JlYXRlRWwoJ3VsJywge1xuICAgICAgICAgIGNsczogJ2NmLWNvbmZsaWN0LWxpc3QnLFxuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIHRoaXMuY29uZmxpY3RzKSB7XG4gICAgICAgICAgY29uc3QgbGkgPSBjb25mbGljdExpc3QuY3JlYXRlRWwoJ2xpJywgeyBjbHM6ICdjZi1jb25mbGljdC1pdGVtJyB9KTtcbiAgICAgICAgICBjb25zdCBmaWxlSWNvbiA9IGxpLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1pdGVtLWljb24nIH0pO1xuICAgICAgICAgIHNldEljb24oZmlsZUljb24sICdmaWxlLXdhcm5pbmcnKTtcbiAgICAgICAgICBsaS5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogYy5sb2NhbFBhdGgsIGNsczogJ2NmLWl0ZW0tcGF0aCcgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vblNob3dDb25mbGljdHMpIHtcbiAgICAgICAgICBjb25zdCByZXNvbHZlQnRuID0gY29uZmxpY3RTZWN0aW9uLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLXByaW1hcnknLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGJ0bkljb24gPSByZXNvbHZlQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1idG4taWNvbicgfSk7XG4gICAgICAgICAgc2V0SWNvbihidG5JY29uLCAnYWxlcnQtdHJpYW5nbGUnKTtcbiAgICAgICAgICByZXNvbHZlQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnUmVzb2x2ZSBDb25mbGljdHMnIH0pO1xuICAgICAgICAgIHJlc29sdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLm9uU2hvd0NvbmZsaWN0cz8uKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBY3Rpb25zXG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1kZXRhaWwtYWN0aW9ucycgfSk7XG5cbiAgICBpZiAodGhpcy5vblRyaWdnZXJTeW5jKSB7XG4gICAgICBjb25zdCBzeW5jQnRuID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdjZi1idG4gY2YtYnRuLXByaW1hcnknIH0pO1xuICAgICAgY29uc3Qgc3luY0ljb24gPSBzeW5jQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1idG4taWNvbicgfSk7XG4gICAgICBzZXRJY29uKHN5bmNJY29uLCAncmVmcmVzaC1jdycpO1xuICAgICAgc3luY0J0bi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ1N5bmMgTm93JyB9KTtcbiAgICAgIHN5bmNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5vblRyaWdnZXJTeW5jPy4oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlQnRuID0gYWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xzOiAnY2YtYnRuJyxcbiAgICAgIHRleHQ6ICdDbG9zZScsXG4gICAgfSk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdGF0Q2FyZChjb250YWluZXI6IEhUTUxFbGVtZW50LCBpY29uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4dHJhQ2xhc3M/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbHM6IGBjZi1zdGF0LWNhcmQgJHtleHRyYUNsYXNzIHx8ICcnfWAsXG4gICAgfSk7XG4gICAgY29uc3QgaWNvbkVsID0gY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1zdGF0LWljb24nIH0pO1xuICAgIHNldEljb24oaWNvbkVsLCBpY29uKTtcbiAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXN0YXQtdmFsdWUnLCB0ZXh0OiB2YWx1ZSB9KTtcbiAgICBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXN0YXQtbGFiZWwnLCB0ZXh0OiBsYWJlbCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VGltZSh0aW1lc3RhbXA6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2YtZGV0YWlsLW1vZGFsLXN0eWxlcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaWQgPSAnY2YtZGV0YWlsLW1vZGFsLXN0eWxlcyc7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICAuY2Ytc3luYy1kZXRhaWwtbW9kYWwge1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHggMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtdGl0bGUtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1hY2NlbnQpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLWVtcHR5IHtcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWljb24gc3ZnIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtd2FybmluZyAuY2Ytc3RhdC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdhcm5pbmcsICNmYWNjMTUpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtd2FybmluZyAuY2Ytc3RhdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtd2FybmluZywgI2ZhY2MxNSk7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC1lcnJvciAuY2Ytc3RhdC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWVycm9yLCAjZjg3MTcxKTtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWVycm9yIC5jZi1zdGF0LWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1lcnJvciwgI2Y4NzE3MSk7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLXNlY3Rpb24gaDMge1xuICAgICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWxpc3Qge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgfVxuICAgICAgLmNmLWl0ZW0taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdhcm5pbmcsICNmYWNjMTUpO1xuICAgICAgfVxuICAgICAgLmNmLWl0ZW0taWNvbiBzdmcge1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgfVxuICAgICAgLmNmLWl0ZW0tcGF0aCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm9zcGFjZSk7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICB9XG4gICAgICAuY2YtYnRuOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ob3Zlcik7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1vbi1hY2NlbnQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWludGVyYWN0aXZlLWFjY2VudCk7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLXByaW1hcnk6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWludGVyYWN0aXZlLWFjY2VudC1ob3ZlciwgdmFyKC0taW50ZXJhY3RpdmUtYWNjZW50KSk7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIGA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBNb2RhbCwgQXBwLCBURmlsZSwgc2V0SWNvbiB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB0eXBlIHsgQ29uZmxpY3RJbmZvLCBDb25mbGljdFJlc29sdXRpb24gfSBmcm9tICcuL3N5bmMtZW5naW5lJztcblxuZXhwb3J0IGNsYXNzIENvbmZsaWN0TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgY29uZmxpY3RzOiBDb25mbGljdEluZm9bXTtcbiAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgb25SZXNvbHZlOiAoY29uZmxpY3Q6IENvbmZsaWN0SW5mbywgcmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBwcml2YXRlIG9uUmVzb2x2ZUFsbDogKHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbikgPT4gUHJvbWlzZTx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IEFwcCxcbiAgICBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdLFxuICAgIG9uUmVzb2x2ZTogKGNvbmZsaWN0OiBDb25mbGljdEluZm8sIHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbikgPT4gUHJvbWlzZTx2b2lkPixcbiAgICBvblJlc29sdmVBbGw6IChyZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pID0+IFByb21pc2U8dm9pZD5cbiAgKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLmNvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICB0aGlzLm9uUmVzb2x2ZSA9IG9uUmVzb2x2ZTtcbiAgICB0aGlzLm9uUmVzb2x2ZUFsbCA9IG9uUmVzb2x2ZUFsbDtcbiAgfVxuXG4gIG9uT3BlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ2NmLXN5bmMtY29uZmxpY3QtbW9kYWwnKTtcblxuICAgIHRoaXMucmVuZGVyQ3VycmVudENvbmZsaWN0KCk7XG4gIH1cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckN1cnJlbnRDb25mbGljdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcblxuICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbHM6ICdjZi1jb25mbGljdC1lbXB0eScsXG4gICAgICAgIHRleHQ6ICdcdTI3MDUgQWxsIGNvbmZsaWN0cyByZXNvbHZlZCEnLFxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2UoKSwgMTUwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmxpY3QgPSB0aGlzLmNvbmZsaWN0c1t0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgaWYgKCFjb25mbGljdCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vID09PT09IFx1NjgzN1x1NUYwRiA9PT09PVxuICAgIHRoaXMuYWRkU3R5bGVzKCk7XG5cbiAgICAvLyA9PT09PSBIZWFkZXIgPT09PT1cbiAgICBjb25zdCBoZWFkZXIgPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtaGVhZGVyJyB9KTtcblxuICAgIGNvbnN0IHRpdGxlUm93ID0gaGVhZGVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LXRpdGxlLXJvdycgfSk7XG4gICAgY29uc3QgaWNvbkVsID0gdGl0bGVSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWNvbmZsaWN0LWljb24nIH0pO1xuICAgIHNldEljb24oaWNvbkVsLCAnYWxlcnQtdHJpYW5nbGUnKTtcbiAgICB0aXRsZVJvdy5jcmVhdGVFbCgnaDInLCB7XG4gICAgICB0ZXh0OiAnU3luYyBDb25mbGljdCcsXG4gICAgICBjbHM6ICdjZi1jb25mbGljdC10aXRsZScsXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsczogJ2NmLWNvbmZsaWN0LXN1YnRpdGxlJyxcbiAgICAgIHRleHQ6IGAke3RoaXMuY3VycmVudEluZGV4ICsgMX0gb2YgJHt0aGlzLmNvbmZsaWN0cy5sZW5ndGh9IGNvbmZsaWN0c2AsXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsczogJ2NmLWNvbmZsaWN0LWZpbGVwYXRoJyxcbiAgICAgIHRleHQ6IGNvbmZsaWN0LmxvY2FsUGF0aCxcbiAgICB9KTtcblxuICAgIC8vID09PT09IERpZmYgVmlldyA9PT09PVxuICAgIGNvbnN0IGRpZmZDb250YWluZXIgPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtZGlmZicgfSk7XG5cbiAgICAvLyBMb2NhbCBzaWRlXG4gICAgY29uc3QgbG9jYWxQYW5lbCA9IGRpZmZDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtcGFuZWwgY2YtbG9jYWwnIH0pO1xuICAgIGNvbnN0IGxvY2FsSGVhZGVyID0gbG9jYWxQYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1wYW5lbC1oZWFkZXInIH0pO1xuICAgIGNvbnN0IGxvY2FsSWNvbkVsID0gbG9jYWxIZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLXBhbmVsLWljb24nIH0pO1xuICAgIHNldEljb24obG9jYWxJY29uRWwsICdtb25pdG9yJyk7XG4gICAgbG9jYWxIZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdMb2NhbCBWZXJzaW9uJyB9KTtcbiAgICBsb2NhbEhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtaGFzaCcsIHRleHQ6IGNvbmZsaWN0LmxvY2FsSGFzaC5zdWJzdHJpbmcoMCwgOCkgfSk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRlbnQgPSBsb2NhbFBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXBhbmVsLWNvbnRlbnQnIH0pO1xuICAgIHRoaXMucmVuZGVyRGlmZkNvbnRlbnQobG9jYWxDb250ZW50LCBjb25mbGljdC5sb2NhbENvbnRlbnQsIGNvbmZsaWN0LnJlbW90ZUNvbnRlbnQsICdsb2NhbCcpO1xuXG4gICAgLy8gUmVtb3RlIHNpZGVcbiAgICBjb25zdCByZW1vdGVQYW5lbCA9IGRpZmZDb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtcGFuZWwgY2YtcmVtb3RlJyB9KTtcbiAgICBjb25zdCByZW1vdGVIZWFkZXIgPSByZW1vdGVQYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1wYW5lbC1oZWFkZXInIH0pO1xuICAgIGNvbnN0IHJlbW90ZUljb25FbCA9IHJlbW90ZUhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtcGFuZWwtaWNvbicgfSk7XG4gICAgc2V0SWNvbihyZW1vdGVJY29uRWwsICdjbG91ZCcpO1xuICAgIHJlbW90ZUhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ1JlbW90ZSBWZXJzaW9uJyB9KTtcbiAgICByZW1vdGVIZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWhhc2gnLCB0ZXh0OiBjb25mbGljdC5yZW1vdGVIYXNoLnN1YnN0cmluZygwLCA4KSB9KTtcblxuICAgIGNvbnN0IHJlbW90ZUNvbnRlbnQgPSByZW1vdGVQYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1wYW5lbC1jb250ZW50JyB9KTtcbiAgICB0aGlzLnJlbmRlckRpZmZDb250ZW50KHJlbW90ZUNvbnRlbnQsIGNvbmZsaWN0LnJlbW90ZUNvbnRlbnQsIGNvbmZsaWN0LmxvY2FsQ29udGVudCwgJ3JlbW90ZScpO1xuXG4gICAgLy8gPT09PT0gQWN0aW9ucyA9PT09PVxuICAgIGNvbnN0IGFjdGlvbnMgPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtYWN0aW9ucycgfSk7XG5cbiAgICAvLyBJbmRpdmlkdWFsIGFjdGlvbnNcbiAgICBjb25zdCBpbmRpdmlkdWFsQWN0aW9ucyA9IGFjdGlvbnMuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsczogJ2NmLWluZGl2aWR1YWwtYWN0aW9ucycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBrZWVwTG9jYWxCdG4gPSBpbmRpdmlkdWFsQWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xzOiAnY2YtYnRuIGNmLWJ0bi1sb2NhbCcsXG4gICAgfSk7XG4gICAgY29uc3QgbG9jYWxCdG5JY29uID0ga2VlcExvY2FsQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1idG4taWNvbicgfSk7XG4gICAgc2V0SWNvbihsb2NhbEJ0bkljb24sICdtb25pdG9yJyk7XG4gICAga2VlcExvY2FsQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnS2VlcCBMb2NhbCcgfSk7XG4gICAga2VlcExvY2FsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNvbHZlKGNvbmZsaWN0LCAnbG9jYWwnKSk7XG5cbiAgICBjb25zdCBrZWVwUmVtb3RlQnRuID0gaW5kaXZpZHVhbEFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tcmVtb3RlJyxcbiAgICB9KTtcbiAgICBjb25zdCByZW1vdGVCdG5JY29uID0ga2VlcFJlbW90ZUJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtYnRuLWljb24nIH0pO1xuICAgIHNldEljb24ocmVtb3RlQnRuSWNvbiwgJ2Nsb3VkJyk7XG4gICAga2VlcFJlbW90ZUJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ0tlZXAgUmVtb3RlJyB9KTtcbiAgICBrZWVwUmVtb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNvbHZlKGNvbmZsaWN0LCAncmVtb3RlJykpO1xuXG4gICAgY29uc3Qga2VlcEJvdGhCdG4gPSBpbmRpdmlkdWFsQWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xzOiAnY2YtYnRuIGNmLWJ0bi1ib3RoJyxcbiAgICB9KTtcbiAgICBjb25zdCBib3RoQnRuSWNvbiA9IGtlZXBCb3RoQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1idG4taWNvbicgfSk7XG4gICAgc2V0SWNvbihib3RoQnRuSWNvbiwgJ2NvcHknKTtcbiAgICBrZWVwQm90aEJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ0tlZXAgQm90aCcgfSk7XG4gICAga2VlcEJvdGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc29sdmUoY29uZmxpY3QsICdib3RoJykpO1xuXG4gICAgLy8gQmF0Y2ggYWN0aW9ucyAoaWYgbXVsdGlwbGUgY29uZmxpY3RzKVxuICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBiYXRjaEFjdGlvbnMgPSBhY3Rpb25zLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWJhdGNoLWFjdGlvbnMnIH0pO1xuICAgICAgYmF0Y2hBY3Rpb25zLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbHM6ICdjZi1iYXRjaC1sYWJlbCcsXG4gICAgICAgIHRleHQ6ICdBcHBseSB0byBhbGw6JyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBhbGxMb2NhbEJ0biA9IGJhdGNoQWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLXNtYWxsIGNmLWJ0bi1sb2NhbCcsXG4gICAgICAgIHRleHQ6ICdBbGwgTG9jYWwnLFxuICAgICAgfSk7XG4gICAgICBhbGxMb2NhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzb2x2ZUFsbCgnbG9jYWwnKSk7XG5cbiAgICAgIGNvbnN0IGFsbFJlbW90ZUJ0biA9IGJhdGNoQWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLXNtYWxsIGNmLWJ0bi1yZW1vdGUnLFxuICAgICAgICB0ZXh0OiAnQWxsIFJlbW90ZScsXG4gICAgICB9KTtcbiAgICAgIGFsbFJlbW90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzb2x2ZUFsbCgncmVtb3RlJykpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgbmF2ID0gYWN0aW9ucy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1uYXYnIH0pO1xuXG4gICAgICBjb25zdCBwcmV2QnRuID0gbmF2LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2NmLWJ0biBjZi1idG4tbmF2JyB9KTtcbiAgICAgIHNldEljb24ocHJldkJ0biwgJ2NoZXZyb24tbGVmdCcpO1xuICAgICAgcHJldkJ0bi5kaXNhYmxlZCA9IHRoaXMuY3VycmVudEluZGV4ID09PSAwO1xuICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgICAgICAgdGhpcy5yZW5kZXJDdXJyZW50Q29uZmxpY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG5hdi5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgdGV4dDogYCR7dGhpcy5jdXJyZW50SW5kZXggKyAxfSAvICR7dGhpcy5jb25mbGljdHMubGVuZ3RofWAsXG4gICAgICAgIGNsczogJ2NmLW5hdi10ZXh0JyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuZXh0QnRuID0gbmF2LmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2NmLWJ0biBjZi1idG4tbmF2JyB9KTtcbiAgICAgIHNldEljb24obmV4dEJ0biwgJ2NoZXZyb24tcmlnaHQnKTtcbiAgICAgIG5leHRCdG4uZGlzYWJsZWQgPSB0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmNvbmZsaWN0cy5sZW5ndGggLSAxO1xuICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5jb25mbGljdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDdXJyZW50Q29uZmxpY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJEaWZmQ29udGVudChcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICBvdGhlckNvbnRlbnQ6IHN0cmluZyxcbiAgICBzaWRlOiAnbG9jYWwnIHwgJ3JlbW90ZSdcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCBvdGhlckxpbmVzID0gb3RoZXJDb250ZW50LnNwbGl0KCdcXG4nKTtcblxuICAgIGNvbnN0IHByZSA9IGNvbnRhaW5lci5jcmVhdGVFbCgncHJlJywgeyBjbHM6ICdjZi1kaWZmLXByZScgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lRWwgPSBwcmUuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtZGlmZi1saW5lJyB9KTtcblxuICAgICAgLy8gTGluZSBudW1iZXJcbiAgICAgIGxpbmVFbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xzOiAnY2YtbGluZS1udW0nLFxuICAgICAgICB0ZXh0OiBTdHJpbmcoaSArIDEpLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIERldGVybWluZSBpZiBsaW5lIGRpZmZlcnNcbiAgICAgIGNvbnN0IGlzRGlmZiA9IGkgPj0gb3RoZXJMaW5lcy5sZW5ndGggfHwgbGluZXNbaV0gIT09IG90aGVyTGluZXNbaV07XG5cbiAgICAgIGNvbnN0IGxpbmVDb250ZW50ID0gbGluZUVsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbHM6IGBjZi1saW5lLWNvbnRlbnQgJHtpc0RpZmYgPyAoc2lkZSA9PT0gJ2xvY2FsJyA/ICdjZi1kaWZmLWxvY2FsJyA6ICdjZi1kaWZmLXJlbW90ZScpIDogJyd9YCxcbiAgICAgIH0pO1xuICAgICAgbGluZUNvbnRlbnQudGV4dENvbnRlbnQgPSBsaW5lc1tpXSB8fCAnICc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVSZXNvbHZlKGNvbmZsaWN0OiBDb25mbGljdEluZm8sIHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4gKGJ0bi5kaXNhYmxlZCA9IHRydWUpKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm9uUmVzb2x2ZShjb25mbGljdCwgcmVzb2x1dGlvbik7XG4gICAgICB0aGlzLmNvbmZsaWN0cyA9IHRoaXMuY29uZmxpY3RzLmZpbHRlcigoYykgPT4gYy5sb2NhbFBhdGggIT09IGNvbmZsaWN0LmxvY2FsUGF0aCk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5jb25mbGljdHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5jb25mbGljdHMubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb25mbGljdCByZXNvbHV0aW9uIGZhaWxlZDonLCBlcnIpO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUmVzb2x2ZUFsbChyZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSB0cnVlKSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5vblJlc29sdmVBbGwocmVzb2x1dGlvbik7XG4gICAgICB0aGlzLmNvbmZsaWN0cyA9IFtdO1xuICAgICAgdGhpcy5yZW5kZXJDdXJyZW50Q29uZmxpY3QoKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignQmF0Y2ggY29uZmxpY3QgcmVzb2x1dGlvbiBmYWlsZWQ6JywgZXJyKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiAoYnRuLmRpc2FibGVkID0gZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFN0eWxlcygpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFkZCBvbmNlXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZi1jb25mbGljdC1zdHlsZXMnKSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ2NmLWNvbmZsaWN0LXN0eWxlcyc7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICAuY2Ytc3luYy1jb25mbGljdC1tb2RhbCB7XG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgfVxuICAgICAgLmNmLXN5bmMtY29uZmxpY3QtbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC10aXRsZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtd2FybmluZyk7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3Qtc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtZmlsZXBhdGgge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vc3BhY2UpO1xuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYWNjZW50KTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWRpZmYge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdhcDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5jZi1wYW5lbC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cbiAgICAgIC5jZi1sb2NhbCAuY2YtcGFuZWwtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ibHVlLXJnYiwgMCwgMTIwLCAyMTUpLCAwLjEpO1xuICAgICAgfVxuICAgICAgLmNmLXJlbW90ZSAuY2YtcGFuZWwtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ncmVlbi1yZ2IsIDAsIDE4MCwgODApLCAwLjEpO1xuICAgICAgfVxuICAgICAgLmNmLXBhbmVsLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNmLWhhc2gge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ub3NwYWNlKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDFweCA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5jZi1wYW5lbC1jb250ZW50IHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgfVxuICAgICAgLmNmLWRpZmYtcHJlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vc3BhY2UpO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgICAgLmNmLWRpZmYtbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICB9XG4gICAgICAuY2YtbGluZS1udW0ge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWZhaW50KTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgICAuY2YtbGluZS1jb250ZW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIC5jZi1kaWZmLWxvY2FsIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ibHVlLXJnYiwgMCwgMTIwLCAyMTUpLCAwLjE1KTtcbiAgICAgIH1cbiAgICAgIC5jZi1kaWZmLXJlbW90ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItZ3JlZW4tcmdiLCAwLCAxODAsIDgwKSwgMC4xNSk7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtYWN0aW9ucyB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmNmLWluZGl2aWR1YWwtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW5vcm1hbCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItaG92ZXIpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtYWNjZW50KTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG46ZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1sb2NhbDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItYmx1ZS1yZ2IsIDAsIDEyMCwgMjE1KSwgMC4xNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLWNvbG9yLWJsdWUtcmdiLCAwLCAxMjAsIDIxNSkpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1yZW1vdGU6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWdyZWVuLXJnYiwgMCwgMTgwLCA4MCksIDAuMTUpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYih2YXIoLS1jb2xvci1ncmVlbi1yZ2IsIDAsIDE4MCwgODApKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tYm90aDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3Itb3JhbmdlLXJnYiwgMjMwLCAxNTAsIDApLCAwLjE1KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IodmFyKC0tY29sb3Itb3JhbmdlLXJnYiwgMjMwLCAxNTAsIDApKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tc21hbGwge1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1iYXRjaC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNmLWJhdGNoLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tbmF2IHtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIH1cbiAgICAgIC5jZi1uYXYtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtZW1wdHkge1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc3VjY2VzcywgdmFyKC0taW50ZXJhY3RpdmUtc3VjY2VzcykpO1xuICAgICAgfVxuICAgIGA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxrQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLFFBQUksV0FBVyxPQUFPLFVBQVU7QUFFaEMsSUFBQUEsUUFBTyxVQUFVLFNBQVMsT0FBTyxLQUFLO0FBQ3BDLFVBQUksUUFBUTtBQUFRLGVBQU87QUFDM0IsVUFBSSxRQUFRO0FBQU0sZUFBTztBQUV6QixVQUFJLE9BQU8sT0FBTztBQUNsQixVQUFJLFNBQVM7QUFBVyxlQUFPO0FBQy9CLFVBQUksU0FBUztBQUFVLGVBQU87QUFDOUIsVUFBSSxTQUFTO0FBQVUsZUFBTztBQUM5QixVQUFJLFNBQVM7QUFBVSxlQUFPO0FBQzlCLFVBQUksU0FBUyxZQUFZO0FBQ3ZCLGVBQU8sY0FBYyxHQUFHLElBQUksc0JBQXNCO0FBQUEsTUFDcEQ7QUFFQSxVQUFJLFFBQVEsR0FBRztBQUFHLGVBQU87QUFDekIsVUFBSSxTQUFTLEdBQUc7QUFBRyxlQUFPO0FBQzFCLFVBQUksWUFBWSxHQUFHO0FBQUcsZUFBTztBQUM3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LHlCQUF5QjtBQUFHO0FBRXZELFVBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxVQUFNLEtBQUs7QUFDWCxVQUFNLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMElwQixhQUFTLEtBQUssWUFBWSxLQUFLO0FBQUEsRUFDakM7QUFDRjs7O0FDMWJBLElBQUFDLG1CQUEyQztBQUdwQyxJQUFNLGdCQUFOLGNBQTRCLHVCQUFNO0FBQUEsRUFNdkMsWUFDRSxLQUNBLFdBQ0EsV0FDQSxjQUNBO0FBQ0EsVUFBTSxH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QUFLLGNBQUwsbUJBQWdCO0FBQ2hCLFlBQVEsSUFBSSxpQ0FBaUM7QUFBQSxFQUMvQztBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgInN0ciIsICJzdHJpbmciLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicmVxdWlyZV9qc195YW1sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInlhbWwiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzdHIiLCAiZXhwb3J0cyIsICJzdHIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZW5naW5lcyIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJzdHIiLCAibWF0dGVyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzdHIiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJlbmdpbmVzIiwgInBhcnNlIiwgIm1hdHRlciIsICJvcHRpb25zIiwgInN0ciIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAib3B0aW9ucyIsICJtYXR0ZXIiXQp9Cg==

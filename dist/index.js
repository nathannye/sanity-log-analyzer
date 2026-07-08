var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// node_modules/prismjs/prism.js
var require_prism = __commonJS({
  "node_modules/prismjs/prism.js"(exports, module) {
    "use strict";
    var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
    var Prism3 = (function(_self2) {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _ = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: _self2.Prism && _self2.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function deepClone(o, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_.util.type(o)) {
              case "Object":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = /** @type {Record<string, any>} */
                {};
                visited[id] = clone;
                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }
                return (
                  /** @type {any} */
                  clone
                );
              case "Array":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                /** @type {Array} */
                /** @type {any} */
                o.forEach(function(v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return (
                  /** @type {any} */
                  clone
                );
              default:
                return o;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document === "undefined") {
              return null;
            }
            if (document.currentScript && document.currentScript.tagName === "SCRIPT" && 1 < 2) {
              return (
                /** @type {any} */
                document.currentScript
              );
            }
            try {
              throw new Error();
            } catch (err) {
              var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
              if (src) {
                var scripts = document.getElementsByTagName("script");
                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(id, redef) {
            var lang2 = _.util.clone(_.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(inside, before, insert, root) {
            root = root || /** @type {any} */
            _.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _.languages.DFS(_.languages, function(key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);
                var property = o[i];
                var propertyType = _.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(container, async, callback) {
          var env = {
            callback,
            container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          _.hooks.run("before-highlightall", env);
          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
          _.hooks.run("before-all-elements-highlight", env);
          for (var i = 0, element; element = env.elements[i++]; ) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(element, async, callback) {
          var language = _.util.getLanguage(element);
          var grammar = _.languages[language];
          _.util.setLanguage(element, language);
          var parent = element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre") {
            _.util.setLanguage(parent, language);
          }
          var code = element.textContent;
          var env = {
            element,
            language,
            grammar,
            code
          };
          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;
            _.hooks.run("before-insert", env);
            env.element.innerHTML = env.highlightedCode;
            _.hooks.run("after-highlight", env);
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
          }
          _.hooks.run("before-sanity-check", env);
          parent = env.element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
            parent.setAttribute("tabindex", "0");
          }
          if (!env.code) {
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
            return;
          }
          _.hooks.run("before-highlight", env);
          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }
          if (async && _self2.Worker) {
            var worker = new Worker(_.filename);
            worker.onmessage = function(evt) {
              insertHighlightedCode(evt.data);
            };
            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _.tokenize(env.code, env.grammar);
          _.hooks.run("after-tokenize", env);
          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(name, env) {
            var callbacks = _.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i = 0, callback; callback = callbacks[i++]; ) {
              callback(env);
            }
          }
        },
        Token
      };
      _self2.Prism = _;
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o, language) {
        if (typeof o == "string") {
          return o;
        }
        if (Array.isArray(o)) {
          var s = "";
          o.forEach(function(e) {
            s += stringify(e, language);
          });
          return s;
        }
        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: "span",
          classes: ["token", o.type],
          attributes: {},
          language
        };
        var aliases = o.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            if (rematch && rematch.cause == token + "," + j) {
              return;
            }
            var patternObj = patterns[j];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      if (!_self2.document) {
        if (!_self2.addEventListener) {
          return _;
        }
        if (!_.disableWorkerMessageHandler) {
          _self2.addEventListener("message", function(evt) {
            var message = JSON.parse(evt.data);
            var lang2 = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
            if (immediateClose) {
              _self2.close();
            }
          }, false);
        }
        return _;
      }
      var script = _.util.currentScript();
      if (script) {
        _.filename = script.src;
        if (script.hasAttribute("data-manual")) {
          _.manual = true;
        }
      }
      function highlightAutomaticallyCallback() {
        if (!_.manual) {
          _.highlightAll();
        }
      }
      if (!_.manual) {
        var readyState = document.readyState;
        if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
          document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }
      return _;
    })(_self);
    if (typeof module !== "undefined" && module.exports) {
      module.exports = Prism3;
    }
    if (typeof global !== "undefined") {
      global.Prism = Prism3;
    }
    Prism3.languages.markup = {
      "comment": {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      "prolog": {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      "doctype": {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          "string": {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          "punctuation": /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          "name": /[^\s<>'"]+/
        }
      },
      "cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      "tag": {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          "tag": {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              "punctuation": /^<\/?/,
              "namespace": /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              "punctuation": [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: true
                }
              ]
            }
          },
          "punctuation": /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              "namespace": /^[^\s>\/:]+:/
            }
          }
        }
      },
      "entity": [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    };
    Prism3.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism3.languages.markup["entity"];
    Prism3.languages.markup["doctype"].inside["internal-subset"].inside = Prism3.languages.markup;
    Prism3.hooks.add("wrap", function(env) {
      if (env.type === "entity") {
        env.attributes["title"] = env.content.replace(/&amp;/, "&");
      }
    });
    Object.defineProperty(Prism3.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside["language-" + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism3.languages[lang]
        };
        includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside["language-" + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism3.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return tagName;
          }), "i"),
          lookbehind: true,
          greedy: true,
          inside
        };
        Prism3.languages.insertBefore("markup", "cdata", def);
      }
    });
    Object.defineProperty(Prism3.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(attrName, lang) {
        Prism3.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                "value": {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [lang, "language-" + lang],
                  inside: Prism3.languages[lang]
                },
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    });
    Prism3.languages.html = Prism3.languages.markup;
    Prism3.languages.mathml = Prism3.languages.markup;
    Prism3.languages.svg = Prism3.languages.markup;
    Prism3.languages.xml = Prism3.languages.extend("markup", {});
    Prism3.languages.ssml = Prism3.languages.xml;
    Prism3.languages.atom = Prism3.languages.xml;
    Prism3.languages.rss = Prism3.languages.xml;
    (function(Prism4) {
      var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      Prism4.languages.css = {
        "comment": /\/\*[\s\S]*?\*\//,
        "atrule": {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            "rule": /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            "keyword": {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
            // See rest below
          }
        },
        "url": {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: true,
          inside: {
            "function": /^url/i,
            "punctuation": /^\(|\)$/,
            "string": {
              pattern: RegExp("^" + string.source + "$"),
              alias: "url"
            }
          }
        },
        "selector": {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
          lookbehind: true
        },
        "string": {
          pattern: string,
          greedy: true
        },
        "property": {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        "important": /!important\b/i,
        "function": {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        "punctuation": /[(){};:,]/
      };
      Prism4.languages.css["atrule"].inside.rest = Prism4.languages.css;
      var markup = Prism4.languages.markup;
      if (markup) {
        markup.tag.addInlined("style", "css");
        markup.tag.addAttribute("style", "css");
      }
    })(Prism3);
    Prism3.languages.clike = {
      "comment": [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      "string": {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          "punctuation": /[.\\]/
        }
      },
      "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      "boolean": /\b(?:false|true)\b/,
      "function": /\b\w+(?=\()/,
      "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      "punctuation": /[{}[\];(),.:]/
    };
    Prism3.languages.javascript = Prism3.languages.extend("clike", {
      "class-name": [
        Prism3.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true
        }
      ],
      "keyword": [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      "number": {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: true
      },
      "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    Prism3.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    Prism3.languages.insertBefore("javascript", "keyword", {
      "regex": {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism3.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      "parameter": [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: Prism3.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: Prism3.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: Prism3.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: Prism3.languages.javascript
        }
      ],
      "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism3.languages.insertBefore("javascript", "string", {
      "hashbang": {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          "interpolation": {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: Prism3.languages.javascript
            }
          },
          "string": /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    });
    Prism3.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    });
    if (Prism3.languages.markup) {
      Prism3.languages.markup.tag.addInlined("script", "javascript");
      Prism3.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
        "javascript"
      );
    }
    Prism3.languages.js = Prism3.languages.javascript;
    (function() {
      if (typeof Prism3 === "undefined" || typeof document === "undefined") {
        return;
      }
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      var LOADING_MESSAGE = "Loading\u2026";
      var FAILURE_MESSAGE = function(status, message) {
        return "\u2716 Error " + status + " while fetching file: " + message;
      };
      var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
      var EXTENSIONS = {
        "js": "javascript",
        "py": "python",
        "rb": "ruby",
        "ps1": "powershell",
        "psm1": "powershell",
        "sh": "bash",
        "bat": "batch",
        "h": "c",
        "tex": "latex"
      };
      var STATUS_ATTR = "data-src-status";
      var STATUS_LOADING = "loading";
      var STATUS_LOADED = "loaded";
      var STATUS_FAILED = "failed";
      var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
      function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              success(xhr.responseText);
            } else {
              if (xhr.status >= 400) {
                error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
              } else {
                error(FAILURE_EMPTY_MESSAGE);
              }
            }
          }
        };
        xhr.send(null);
      }
      function parseRange(range) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
        if (m) {
          var start = Number(m[1]);
          var comma = m[2];
          var end = m[3];
          if (!comma) {
            return [start, start];
          }
          if (!end) {
            return [start, void 0];
          }
          return [start, Number(end)];
        }
        return void 0;
      }
      Prism3.hooks.add("before-highlightall", function(env) {
        env.selector += ", " + SELECTOR;
      });
      Prism3.hooks.add("before-sanity-check", function(env) {
        var pre = (
          /** @type {HTMLPreElement} */
          env.element
        );
        if (pre.matches(SELECTOR)) {
          env.code = "";
          pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
          var code = pre.appendChild(document.createElement("CODE"));
          code.textContent = LOADING_MESSAGE;
          var src = pre.getAttribute("data-src");
          var language = env.language;
          if (language === "none") {
            var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
            language = EXTENSIONS[extension] || extension;
          }
          Prism3.util.setLanguage(code, language);
          Prism3.util.setLanguage(pre, language);
          var autoloader = Prism3.plugins.autoloader;
          if (autoloader) {
            autoloader.loadLanguages(language);
          }
          loadFile(
            src,
            function(text) {
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
              var range = parseRange(pre.getAttribute("data-range"));
              if (range) {
                var lines = text.split(/\r\n?|\n/g);
                var start = range[0];
                var end = range[1] == null ? lines.length : range[1];
                if (start < 0) {
                  start += lines.length;
                }
                start = Math.max(0, Math.min(start - 1, lines.length));
                if (end < 0) {
                  end += lines.length;
                }
                end = Math.max(0, Math.min(end, lines.length));
                text = lines.slice(start, end).join("\n");
                if (!pre.hasAttribute("data-start")) {
                  pre.setAttribute("data-start", String(start + 1));
                }
              }
              code.textContent = text;
              Prism3.highlightElement(code);
            },
            function(error) {
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
              code.textContent = error;
            }
          );
        }
      });
      Prism3.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function highlight(container) {
          var elements = (container || document).querySelectorAll(SELECTOR);
          for (var i = 0, element; element = elements[i++]; ) {
            Prism3.highlightElement(element);
          }
        }
      };
      var logged = false;
      Prism3.fileHighlight = function() {
        if (!logged) {
          console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
          logged = true;
        }
        Prism3.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  }
});

// src/index.ts
import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";

// src/stream.ts
import { access, stat } from "fs/promises";
import { createInterface } from "readline";
import { createReadStream } from "fs";
import { createGunzip } from "zlib";

// src/log-entry.ts
function toNumber(value) {
  if (typeof value === "number" && !Number.isNaN(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}
function toString(value) {
  if (value === null || value === void 0) return "";
  return String(value);
}
function toBoolean(value) {
  return value === true;
}
function toTags(value) {
  if (!Array.isArray(value)) return [];
  return value.map((tag) => toString(tag)).filter(Boolean);
}
function parseTimestamp(value) {
  if (!value) return { date: "", hour: 0 };
  return {
    date: value.slice(0, 10),
    hour: Number.parseInt(value.slice(11, 13) || "0", 10) || 0
  };
}
function parseLogEntry(raw) {
  if (!raw || typeof raw !== "object") return null;
  const record = raw;
  const body = record.body ?? {};
  const attributes = record.attributes;
  const sanity = attributes?.sanity;
  const timestamp = toString(record.timestamp);
  const { date, hour } = parseTimestamp(timestamp);
  return {
    timestamp,
    date,
    hour,
    method: toString(body.method),
    insertId: toString(body.insertId),
    duration: toNumber(body.duration),
    requestSize: toNumber(body.requestSize),
    responseSize: toNumber(body.responseSize),
    status: toNumber(body.status ?? body.responseStatus),
    url: toString(body.url),
    referer: toString(body.referer),
    userAgent: toString(body.userAgent),
    remoteIp: toString(body.remoteIp),
    projectId: toString(sanity?.projectId),
    dataset: toString(sanity?.dataset),
    domain: toString(sanity?.domain),
    endpoint: toString(sanity?.endpoint),
    groqQueryIdentifier: toString(sanity?.groqQueryIdentifier),
    apiVersion: toString(sanity?.apiVersion),
    tags: toTags(sanity?.tags),
    studioRequest: toBoolean(sanity?.studioRequest)
  };
}

// src/stream.ts
function isGzipPath(inputPath) {
  return inputPath.toLowerCase().endsWith(".gz");
}
var READ_BUFFER_BYTES = 4 * 1024 * 1024;
var PROGRESS_BYTE_INTERVAL = 50 * 1024 * 1024;
var PROGRESS_ENTRY_INTERVAL = 1e5;
var PROGRESS_MIN_INTERVAL_MS = 250;
function createProgressReporter(byteSource, totalBytes, onProgress) {
  let lastReportedBytes = 0;
  let lastReportedEntries = 0;
  let lastReportedAt = 0;
  return (entriesProcessed, force = false) => {
    if (!onProgress) return;
    const bytesRead = byteSource.bytesRead;
    const bytesDelta = bytesRead - lastReportedBytes;
    const entriesDelta = entriesProcessed - lastReportedEntries;
    const shouldReport = force || bytesDelta >= PROGRESS_BYTE_INTERVAL || entriesDelta >= PROGRESS_ENTRY_INTERVAL;
    if (!shouldReport) return;
    const now = Date.now();
    if (!force && now - lastReportedAt < PROGRESS_MIN_INTERVAL_MS) return;
    lastReportedBytes = bytesRead;
    lastReportedEntries = entriesProcessed;
    lastReportedAt = now;
    const percent = totalBytes > 0 ? Math.min(100, bytesRead / totalBytes * 100) : 100;
    onProgress({ bytesRead, totalBytes, percent, entriesProcessed });
  };
}
async function* streamLogEntries(inputPath, onProgress) {
  await access(inputPath);
  const { size: totalBytes } = await stat(inputPath);
  const fileStream = createReadStream(inputPath, {
    highWaterMark: READ_BUFFER_BYTES
  });
  const input = isGzipPath(inputPath) ? fileStream.pipe(createGunzip()) : fileStream.setEncoding("utf8");
  const rl = createInterface({ input, crlfDelay: Infinity });
  const reportProgress = createProgressReporter(fileStream, totalBytes, onProgress);
  let entriesProcessed = 0;
  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const raw = JSON.parse(trimmed);
      const entry = parseLogEntry(raw);
      if (entry) {
        yield entry;
        entriesProcessed += 1;
        reportProgress(entriesProcessed);
      }
    } catch {
    }
  }
  reportProgress(entriesProcessed, true);
}

// src/aggregate.ts
function createBreakdown() {
  return { requests: 0, responseBytes: 0 };
}
function createTotals() {
  return { requests: 0, responseBytes: 0, requestBytes: 0 };
}
function formatBucketLabel(lower, upper) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  const format = (value) => {
    if (value === Infinity) return "\u221E";
    let scaled = value;
    let unitIndex = 0;
    while (scaled >= 1024 && unitIndex < units.length - 1) {
      scaled /= 1024;
      unitIndex += 1;
    }
    return unitIndex === 0 ? `${Math.round(scaled)} ${units[unitIndex]}` : `${scaled.toFixed(0)} ${units[unitIndex]}`;
  };
  if (upper === Infinity) return `${format(lower)}+`;
  return `${format(lower)} - ${format(upper)}`;
}
function createSummary(histogramBuckets) {
  const histogram = {};
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    const label = formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]);
    histogram[label] = 0;
  }
  return {
    totalRequests: 0,
    totalResponseBytes: 0,
    totalRequestBytes: 0,
    firstTimestamp: null,
    lastTimestamp: null,
    byDomain: {},
    byEndpoint: {},
    byDate: {},
    byHour: {},
    byUrl: {},
    byReferer: {},
    byUserAgent: {},
    byIp: {},
    studio: createTotals(),
    nonStudio: createTotals(),
    byStatus: {},
    byStatusNonStudio: {},
    responseSizeHistogram: histogram,
    responseSizeHistogramNonStudio: { ...histogram },
    byDomainNonStudio: {},
    byEndpointNonStudio: {},
    byDateNonStudio: {},
    byHourNonStudio: {},
    byUrlNonStudio: {},
    byRefererNonStudio: {},
    byUserAgentNonStudio: {},
    byIpNonStudio: {}
  };
}
function incrementBreakdown(map, key, responseBytes) {
  const normalized = key || "(empty)";
  if (!map[normalized]) map[normalized] = createBreakdown();
  map[normalized].requests += 1;
  map[normalized].responseBytes += responseBytes;
}
function incrementHourBreakdown(map, hour, responseBytes) {
  if (!map[hour]) map[hour] = createBreakdown();
  map[hour].requests += 1;
  map[hour].responseBytes += responseBytes;
}
function incrementStatus(map, status) {
  map[status] = (map[status] ?? 0) + 1;
}
function bucketLabelsFor(histogramBuckets) {
  const labels = [];
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    labels.push(formatBucketLabel(histogramBuckets[i], histogramBuckets[i + 1]));
  }
  return labels;
}
function bucketIndex(responseBytes, histogramBuckets) {
  for (let i = 0; i < histogramBuckets.length - 1; i += 1) {
    if (responseBytes < histogramBuckets[i + 1]) return i;
  }
  return Math.max(0, histogramBuckets.length - 2);
}
function createHistogramTracker(bucketCount) {
  return {
    counts: new Array(bucketCount).fill(0),
    nonStudioCounts: new Array(bucketCount).fill(0)
  };
}
function histogramToRecord(labels, counts) {
  const histogram = {};
  for (let i = 0; i < labels.length; i += 1) {
    histogram[labels[i]] = counts[i];
  }
  return histogram;
}
function accumulateEntry(summary, entry, histogramBuckets, histogram) {
  const responseBytes = entry.responseSize;
  const requestBytes = entry.requestSize;
  const studioRequest = entry.studioRequest;
  summary.totalRequests += 1;
  summary.totalResponseBytes += responseBytes;
  summary.totalRequestBytes += requestBytes;
  if (entry.timestamp) {
    if (!summary.firstTimestamp) summary.firstTimestamp = entry.timestamp;
    summary.lastTimestamp = entry.timestamp;
  }
  incrementBreakdown(summary.byDomain, entry.domain, responseBytes);
  incrementBreakdown(summary.byEndpoint, entry.endpoint, responseBytes);
  incrementBreakdown(summary.byDate, entry.date, responseBytes);
  incrementHourBreakdown(summary.byHour, entry.hour, responseBytes);
  incrementBreakdown(summary.byUrl, entry.url, responseBytes);
  incrementBreakdown(summary.byReferer, entry.referer, responseBytes);
  incrementBreakdown(summary.byUserAgent, entry.userAgent, responseBytes);
  incrementBreakdown(summary.byIp, entry.remoteIp, responseBytes);
  if (!studioRequest) {
    incrementBreakdown(summary.byDomainNonStudio, entry.domain, responseBytes);
    incrementBreakdown(summary.byEndpointNonStudio, entry.endpoint, responseBytes);
    incrementBreakdown(summary.byDateNonStudio, entry.date, responseBytes);
    incrementHourBreakdown(summary.byHourNonStudio, entry.hour, responseBytes);
    incrementBreakdown(summary.byUrlNonStudio, entry.url, responseBytes);
    incrementBreakdown(summary.byRefererNonStudio, entry.referer, responseBytes);
    incrementBreakdown(summary.byUserAgentNonStudio, entry.userAgent, responseBytes);
    incrementBreakdown(summary.byIpNonStudio, entry.remoteIp, responseBytes);
  }
  if (studioRequest) {
    summary.studio.requests += 1;
    summary.studio.responseBytes += responseBytes;
    summary.studio.requestBytes += requestBytes;
  } else {
    summary.nonStudio.requests += 1;
    summary.nonStudio.responseBytes += responseBytes;
    summary.nonStudio.requestBytes += requestBytes;
  }
  incrementStatus(summary.byStatus, entry.status);
  if (!studioRequest) {
    incrementStatus(summary.byStatusNonStudio, entry.status);
  }
  const bucket = bucketIndex(responseBytes, histogramBuckets);
  histogram.counts[bucket] += 1;
  if (!studioRequest) {
    histogram.nonStudioCounts[bucket] += 1;
  }
}
async function aggregateLogFile(inputPath, histogramBuckets, onProgress) {
  const summary = createSummary(histogramBuckets);
  const labels = bucketLabelsFor(histogramBuckets);
  const histogram = createHistogramTracker(labels.length);
  for await (const entry of streamLogEntries(inputPath, onProgress)) {
    accumulateEntry(summary, entry, histogramBuckets, histogram);
  }
  summary.responseSizeHistogram = histogramToRecord(labels, histogram.counts);
  summary.responseSizeHistogramNonStudio = histogramToRecord(
    labels,
    histogram.nonStudioCounts
  );
  return summary;
}

// src/config.ts
import { readFile } from "fs/promises";
var DEFAULT_REPORT_CONFIG = {
  title: "Sanity Request Log Report",
  topN: 50,
  histogramBuckets: [0, 1024, 10240, 102400, 1048576, 10485760, Infinity],
  sections: {
    domain: true,
    endpoint: true,
    date: true,
    hour: true,
    status: true,
    histogram: true,
    urls: true,
    referers: true,
    userAgents: true,
    ips: true,
    billableComparison: true
  }
};
function resolveReportConfig(input = {}) {
  return {
    title: input.title ?? DEFAULT_REPORT_CONFIG.title,
    topN: input.topN ?? DEFAULT_REPORT_CONFIG.topN,
    histogramBuckets: input.histogramBuckets ?? DEFAULT_REPORT_CONFIG.histogramBuckets,
    sections: {
      ...DEFAULT_REPORT_CONFIG.sections,
      ...input.sections ?? {}
    }
  };
}
async function loadReportConfig(configPath) {
  if (!configPath) return resolveReportConfig();
  const text = await readFile(configPath, "utf8");
  if (!text.trim()) return resolveReportConfig();
  return resolveReportConfig(JSON.parse(text));
}

// src/index.ts
import { renderReportHtml } from "./report/render.js";

// src/format.ts
function formatNumber(value) {
  return Number(value).toLocaleString();
}
function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const abs = Math.abs(bytes);
  let unitIndex = 0;
  let scaled = abs;
  while (scaled >= 1024 && unitIndex < units.length - 1) {
    scaled /= 1024;
    unitIndex += 1;
  }
  const rendered = unitIndex === 0 ? String(Math.round(scaled)) : scaled.toFixed(1);
  return `${bytes < 0 ? "-" : ""}${rendered} ${units[unitIndex]}`;
}
function formatPercentage(value) {
  return `${value.toFixed(1)}%`;
}
function formatDistributionShare(share) {
  const percent = share * 100;
  if (percent > 0 && percent < 1) return "<1%";
  return `${Math.round(percent)}%`;
}
function formatPeakHour(hourLabel) {
  const hour = Number.parseInt(hourLabel.split(":")[0] ?? "", 10);
  if (!Number.isFinite(hour)) return hourLabel;
  if (hour === 0) return "12AM";
  if (hour === 12) return "12PM";
  return hour < 12 ? `${hour}AM` : `${hour - 12}PM`;
}
var readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC"
});
function formatReadableDate(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "";
  return readableDateFormatter.format(date);
}
function formatIsoDate(isoDate) {
  if (!isoDate) return "";
  const date = /* @__PURE__ */ new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return "";
  const weekday = date.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" });
  return `${weekday} ${readableDateFormatter.format(date)}`;
}

// src/report/classify-url.ts
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
  ".ico"
]);
var VIDEO_EXTENSIONS = /* @__PURE__ */ new Set([".mp4", ".webm", ".mov", ".m4v", ".ogv"]);
var FILE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".pdf",
  ".zip",
  ".json",
  ".txt",
  ".css",
  ".js",
  ".xml",
  ".csv",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".mp3",
  ".wav",
  ".ogg"
]);
function getPathname(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return null;
  }
}
function getExtension(pathname) {
  const lastDot = pathname.lastIndexOf(".");
  if (lastDot === -1) return "";
  return pathname.slice(lastDot).toLowerCase();
}
function isQueryPath(pathname) {
  return pathname.includes("/data/query") || pathname.endsWith("/query");
}
function isMp4Url(url) {
  const pathname = getPathname(url);
  if (!pathname) return false;
  return getExtension(pathname) === ".mp4";
}
function classifyUrl(url) {
  const pathname = getPathname(url);
  if (!pathname) return null;
  if (isQueryPath(pathname)) return "query";
  const lowerPath = pathname.toLowerCase();
  if (lowerPath.includes("/images/")) return "image";
  const ext = getExtension(pathname);
  if (IMAGE_EXTENSIONS.has(ext)) return "image";
  if (VIDEO_EXTENSIONS.has(ext)) return "video";
  if (lowerPath.includes("/files/") || FILE_EXTENSIONS.has(ext)) return "file";
  return null;
}

// src/report/analyze-groq.ts
import { GroqSyntaxError, parse } from "groq-js";

// src/report/groq-constants.ts
var GROQ_SPREAD_WARNING = "uses the {...} spread operator and may waste bandwidth by fetching more fields than needed";

// src/report/analyze-groq.ts
function emptyStats() {
  return {
    dereferences: 0,
    projections: 0,
    subqueries: 0,
    spreads: 0,
    arrayTraversals: 0,
    functionCalls: {}
  };
}
function asNode(value) {
  if (!value || typeof value !== "object") return null;
  return value;
}
function functionName(namespace, name) {
  const ns = typeof namespace === "string" ? namespace : "";
  const fn = typeof name === "string" ? name : "unknown";
  return ns ? `${ns}::${fn}` : fn;
}
function walkNode(node, stats, inFuncArg) {
  const current = asNode(node);
  if (!current) return;
  switch (current.type) {
    case "Deref":
      stats.dereferences += 1;
      break;
    case "Projection":
      stats.projections += 1;
      break;
    case "Filter":
      stats.arrayTraversals += 1;
      if (inFuncArg) stats.subqueries += 1;
      break;
    case "ObjectSplat":
    case "ObjectConditionalSplat":
      stats.spreads += 1;
      break;
    case "FuncCall":
      {
        const name = functionName(current.namespace, current.name);
        stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
        const args = current.args;
        if (Array.isArray(args)) {
          for (const arg of args) walkNode(arg, stats, true);
        }
      }
      return;
    case "PipeFuncCall":
      {
        const name = functionName("", current.name);
        stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
        walkNode(current.base, stats, inFuncArg);
        const args = current.args;
        if (Array.isArray(args)) {
          for (const arg of args) walkNode(arg, stats, true);
        }
      }
      return;
    case "SelectorFuncCall":
      {
        const name = functionName("", current.name);
        stats.functionCalls[name] = (stats.functionCalls[name] ?? 0) + 1;
        walkNode(current.arg, stats, true);
      }
      return;
    default:
      break;
  }
  for (const value of Object.values(current)) {
    if (Array.isArray(value)) {
      for (const child of value) walkNode(child, stats, inFuncArg);
    } else {
      walkNode(value, stats, inFuncArg);
    }
  }
}
function analyzeGroqQuery(query, params) {
  try {
    const ast = parse(query, params ? { params } : {});
    const stats = emptyStats();
    walkNode(ast, stats, false);
    return stats;
  } catch (error) {
    if (error instanceof GroqSyntaxError) return null;
    throw error;
  }
}
function hasGroqSpreadOperator(query, params) {
  const stats = analyzeGroqQuery(query, params);
  return stats !== null && stats.spreads > 0;
}

// src/report/format-groq.ts
function formatGroqForDisplay(query) {
  const normalized = query.replace(/\r\n?/g, "\n").replace(/\t/g, "  ");
  const lines = normalized.split("\n").map((line) => line.trimEnd());
  while (lines.length > 0 && lines[0] === "") lines.shift();
  while (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();
  const nonEmpty = lines.filter((line) => line.trim().length > 0);
  if (nonEmpty.length === 0) return "";
  const minIndent = Math.min(
    ...nonEmpty.map((line) => line.match(/^ */)?.[0].length ?? 0)
  );
  const dedented = lines.map((line) => {
    if (line.trim().length === 0) return "";
    return line.slice(Math.min(minIndent, line.length)).trimStart();
  });
  return dedented.join("\n").trim();
}

// src/report/groq-query.ts
function decodeSearchParam(raw) {
  return decodeURIComponent(raw.replace(/\+/g, " "));
}
function extractGroqQuery(url) {
  try {
    const parsed = new URL(url);
    const raw = parsed.searchParams.get("query");
    if (!raw) return null;
    const trimmed = decodeSearchParam(raw).trim();
    return trimmed.length > 0 ? trimmed : null;
  } catch {
    return null;
  }
}
function extractGroqParams(url) {
  try {
    const parsed = new URL(url);
    const raw = parsed.searchParams.get("params");
    if (!raw) return null;
    const decoded = decodeSearchParam(raw).trim();
    if (!decoded) return null;
    const value = JSON.parse(decoded);
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    return value;
  } catch {
    return null;
  }
}

// src/report/highlight-groq.ts
var import_prismjs = __toESM(require_prism(), 1);

// node_modules/@sanity/prism-groq/groq.js
var groq = {
  comment: {
    pattern: /\/\/.*/,
    greedy: true
  },
  string: {
    pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true,
    inside: {
      escape: /\\(?:[\\/"'bfnrt]|u[0-9a-fA-F]{4}|u\{[0-9a-fA-F]+\})/
    }
  },
  number: /(?<!\w)-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?(?!\w)/,
  boolean: /\b(?:false|true)\b/,
  null: /\bnull\b/,
  "keyword-operator": /\b(?:asc|desc|in|match)\b/,
  function: /\b(?:after|before|boost|coalesce|count|dateTime|defined|identity|length|lower|now|order|path|references|round|score|select|string|upper)\b(?=\s*\()/,
  "namespaced-call": {
    pattern: /\b[a-zA-Z_]\w*\s*::\s*[a-zA-Z_]\w*(?=\s*\()/,
    inside: {
      namespace: {
        pattern: /^[a-zA-Z_]\w*/,
        alias: "class-name"
      },
      "namespace-separator": {
        pattern: /::/,
        alias: "operator"
      },
      "namespaced-function": {
        pattern: /[a-zA-Z_]\w*$/,
        alias: "function"
      }
    }
  },
  variable: /\$[a-zA-Z_]\w*/,
  "special-variable": {
    pattern: /@|\^+/,
    alias: "variable"
  },
  wildcard: {
    pattern: /\*(?=\s*[\[{|])/,
    alias: "variable"
  },
  spread: {
    pattern: /\.\.\./,
    alias: "operator"
  },
  dereference: {
    pattern: /->/,
    alias: "operator"
  },
  pipe: {
    pattern: /\|(?!\|)/,
    alias: "operator"
  },
  operator: /=>|[!=<>]=|&&|\|\||[!+\-*/%]|\*\*|\.\.(?!\.)/,
  punctuation: /[[\]{}(),:;]/,
  accessor: {
    pattern: /\./,
    alias: "punctuation"
  },
  identifier: /\b[a-zA-Z_]\w*\b/
};
if (typeof Prism !== "undefined" && typeof Prism.languages === "object" && Prism.languages !== null && !Array.isArray(Prism.languages)) {
  Prism.languages.groq = groq;
}
var refractorGroq = Object.assign(
  /** @param {{languages: Record<string, unknown>}} prism */
  (prism) => {
    prism.languages.groq = groq;
  },
  { displayName: "groq", aliases: [] }
);

// src/report/highlight-groq.ts
function highlightGroq(query) {
  return import_prismjs.default.highlight(query, import_prismjs.default.languages.groq, "groq");
}

// src/ranked-row.ts
function avgBytesPerRequest(row) {
  return row.requests > 0 ? row.responseBytes / row.requests : 0;
}

// src/report/group-urls-by-kind.ts
function groupUrlsByKind(rows) {
  const groups = {
    image: [],
    file: [],
    query: [],
    other: []
  };
  for (const row of rows) {
    const kind = classifyUrl(row.label);
    if (kind === "image") {
      groups.image.push(row);
    } else if (kind === "file" || kind === "video") {
      groups.file.push(row);
    } else if (kind === "query") {
      groups.query.push(row);
    } else {
      groups.other.push(row);
    }
  }
  return groups;
}

// src/report/parse-image-url.ts
function getExtension2(filename) {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) return "";
  return filename.slice(lastDot).toLowerCase();
}
function parsePositiveInt(value) {
  if (value === null) return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
}
function parseWidthFromId(filename) {
  const ext = getExtension2(filename);
  const nameWithoutExt = ext ? filename.slice(0, -ext.length) : filename;
  const parts = nameWithoutExt.split("-");
  const lastPart = parts[parts.length - 1] ?? "";
  const dimensionMatch = lastPart.match(/^(\d+)x(\d+)$/);
  if (!dimensionMatch) {
    return { id: nameWithoutExt, width: null };
  }
  return {
    id: parts.slice(0, -1).join("-") || nameWithoutExt,
    width: parsePositiveInt(dimensionMatch[1] ?? null)
  };
}
function parseImageUrl(url) {
  try {
    const parsed = new URL(url);
    const segments = parsed.pathname.split("/").filter(Boolean);
    const filename = segments.at(-1) ?? url;
    const ext = getExtension2(filename);
    const isSvg = ext === ".svg";
    const { id, width: widthFromId } = parseWidthFromId(filename);
    const width = parsePositiveInt(parsed.searchParams.get("w")) ?? widthFromId;
    const quality = parsePositiveInt(parsed.searchParams.get("q"));
    const format = parsed.searchParams.get("format") ?? parsed.searchParams.get("fm");
    return { id, width, quality, format, isSvg };
  } catch {
    return {
      id: url,
      width: null,
      quality: null,
      format: null,
      isSvg: false
    };
  }
}
function hasImageWidthError(width) {
  return width !== null && width > 2e3;
}
function hasImageQualityError(quality, isSvg) {
  return !isSvg && quality !== null && quality > 87;
}
function hasImageFormatError(format) {
  return format !== null && format !== "auto";
}

// src/report/report-filename.ts
function slugifyReportFilename(title) {
  const slug = title.toLowerCase().trim().replaceAll(/[^\w\s-]/g, "").replaceAll(/\s+/g, "-").replaceAll(/-+/g, "-").replace(/^-+|-+$/g, "");
  return slug || "report";
}
function markdownReportFilename(data, view) {
  const base = slugifyReportFilename(data.title);
  const suffix = view === "billable" ? "_billable-only" : "_all";
  return `${base}${suffix}.md`;
}

// src/report/narrative.ts
var CONCENTRATION_SHARE = 0.5;
var REASSURING_5XX_RATE = 1e-3;
var PRIMARY_OPPORTUNITY_LABEL = {
  "image-width": "oversized image delivery",
  "image-format": "image CDN settings",
  "image-quality": "image quality settings",
  "groq-spread": "GROQ query efficiency",
  "mp4-transfer": "video delivery format",
  "status-5xx": "server reliability",
  "status-4xx": "client request errors"
};
function dominantSegment(segments) {
  if (segments.length === 0) return null;
  return segments.reduce(
    (largest, segment) => segment.bytes > largest.bytes ? segment : largest
  );
}
function primaryProblem(problems) {
  if (problems.length === 0) return null;
  return problems.reduce((primary, problem) => {
    const primaryBytes = primary.responseBytes ?? 0;
    const problemBytes = problem.responseBytes ?? 0;
    if (problemBytes !== primaryBytes) {
      return problemBytes > primaryBytes ? problem : primary;
    }
    return (problem.requests ?? 0) > (primary.requests ?? 0) ? problem : primary;
  });
}
function contributorShare(contributorBytes, kindBytes) {
  if (kindBytes <= 0) return 0;
  return contributorBytes / kindBytes;
}
function serverErrorCount(view) {
  return view.byStatus.filter(({ label }) => Number(label) >= 500).reduce((sum, row) => sum + row.count, 0);
}
var INSIGHT_TEMPLATES = [
  {
    kind: "fact",
    when: (ctx) => {
      const dominant = dominantSegment(ctx.summary.distribution.segments);
      return dominant !== null && dominant.share >= CONCENTRATION_SHARE;
    },
    render: (ctx) => {
      const dominant = dominantSegment(ctx.summary.distribution.segments);
      if (!dominant) return "";
      const label = dominant.label.toLowerCase();
      return `Bandwidth is dominated by ${label} (${formatDistributionShare(dominant.share)}).`;
    },
    score: (ctx) => {
      const dominant = dominantSegment(ctx.summary.distribution.segments);
      return dominant ? dominant.share * 100 : 0;
    }
  },
  {
    kind: "fact",
    when: (ctx) => {
      const query = ctx.topContributors.query;
      if (!query) return false;
      return contributorShare(
        query.responseBytes,
        ctx.view.byUrlKind.query.responseBytes
      ) >= CONCENTRATION_SHARE;
    },
    render: () => "Only one query is responsible for most query bandwidth.",
    score: (ctx) => {
      const query = ctx.topContributors.query;
      if (!query) return 0;
      return contributorShare(
        query.responseBytes,
        ctx.view.byUrlKind.query.responseBytes
      ) * 80;
    }
  },
  {
    kind: "fact",
    when: (ctx) => {
      const image = ctx.topContributors.image;
      if (!image) return false;
      return contributorShare(
        image.responseBytes,
        ctx.view.byUrlKind.image.responseBytes
      ) >= CONCENTRATION_SHARE;
    },
    render: () => "A single image accounts for most image bandwidth.",
    score: (ctx) => {
      const image = ctx.topContributors.image;
      if (!image) return 0;
      return contributorShare(
        image.responseBytes,
        ctx.view.byUrlKind.image.responseBytes
      ) * 70;
    }
  },
  {
    kind: "opportunity",
    when: (ctx) => primaryProblem([...ctx.summary.critical, ...ctx.summary.warnings]) !== null,
    render: (ctx) => {
      const primary = primaryProblem([
        ...ctx.summary.critical,
        ...ctx.summary.warnings
      ]);
      if (!primary) return "";
      if (primary.id === "image-width") {
        return "Image dimensions appear to be the primary optimization opportunity.";
      }
      if (primary.id === "groq-spread") {
        return "GROQ query shape appears to be the main bandwidth driver.";
      }
      if (primary.id === "image-format" || primary.id === "image-quality") {
        return "Image CDN settings appear to be the primary optimization opportunity.";
      }
      if (primary.id === "mp4-transfer") {
        return "Video delivery format appears to be the primary optimization opportunity.";
      }
      if (primary.id === "status-5xx") {
        return "Server reliability appears to be the most urgent issue.";
      }
      return "Client request errors appear to need attention.";
    },
    score: (ctx) => {
      const primary = primaryProblem([
        ...ctx.summary.critical,
        ...ctx.summary.warnings
      ]);
      if (!primary) return 0;
      const bytes = primary.responseBytes ?? 0;
      if (ctx.view.responseBytes <= 0) return 50;
      return Math.max(40, bytes / ctx.view.responseBytes * 100);
    }
  },
  {
    kind: "health",
    when: (ctx) => {
      const count = serverErrorCount(ctx.view);
      if (count === 0) return false;
      return count / Math.max(ctx.view.requests, 1) < REASSURING_5XX_RATE;
    },
    render: (ctx) => {
      const count = serverErrorCount(ctx.view);
      return `Server health appears normal with only ${formatNumber(count)} 5xx ${count === 1 ? "response" : "responses"}.`;
    },
    score: () => 55
  },
  {
    kind: "health",
    when: (ctx) => {
      const count = serverErrorCount(ctx.view);
      if (count === 0) return false;
      return count / Math.max(ctx.view.requests, 1) >= REASSURING_5XX_RATE;
    },
    render: () => "Server errors are elevated and likely need investigation.",
    score: () => 90
  },
  {
    kind: "health",
    when: (ctx) => ctx.summary.critical.length === 0 && ctx.summary.warnings.length === 0,
    render: () => "No major optimization targets stand out in this dataset.",
    score: () => 20
  }
];
function renderSynthesis(ctx) {
  const problems = [...ctx.summary.critical, ...ctx.summary.warnings];
  const primary = primaryProblem(problems);
  const health = ctx.summary.overallHealth;
  if (health === "red" && primary?.id === "status-5xx") {
    return "Server reliability should be addressed before bandwidth optimizations.";
  }
  if (problems.length === 0) {
    return "Overall this dataset looks healthy with no significant issues detected.";
  }
  if (primary) {
    const target = PRIMARY_OPPORTUNITY_LABEL[primary.id];
    if (target) {
      if (health === "green") {
        return `Overall this dataset shows a healthy API with ${target} being the primary optimization target.`;
      }
      return `Overall this dataset is generally healthy, with ${target} as the primary optimization target.`;
    }
  }
  return "Overall this dataset has a mix of issues worth reviewing in the sections below.";
}
function buildAtAGlance(view, summary) {
  const ctx = {
    view,
    summary,
    topContributors: summary.topContributors
  };
  const bullets = INSIGHT_TEMPLATES.filter((template) => template.when(ctx)).map((template) => ({
    text: template.render(ctx),
    kind: template.kind,
    score: template.score(ctx)
  })).filter((item) => item.text.length > 0).sort((a, b) => b.score - a.score);
  const selected = [];
  const usedKinds = /* @__PURE__ */ new Set();
  for (const item of bullets) {
    if (selected.length >= 4) break;
    if (item.kind !== "health" && usedKinds.has(item.kind)) continue;
    selected.push({ text: item.text, kind: item.kind });
    usedKinds.add(item.kind);
  }
  const synthesis = renderSynthesis(ctx);
  if (synthesis) {
    selected.push({ text: synthesis, kind: "synthesis" });
  }
  return selected;
}

// src/report/summarize.ts
var KB = 1024;
var MB = KB * 1024;
var CRITICAL_BYTES_THRESHOLD = 100 * MB;
var CRITICAL_REQUESTS_THRESHOLD = 1e3;
var CRITICAL_SHARE_THRESHOLD = 0.25;
var CRITICAL_TOTAL_BYTES_THRESHOLD = 10 * MB;
var CRITICAL_TOTAL_REQUESTS_THRESHOLD = 100;
var CONCENTRATION_SHARE_THRESHOLD = 0.75;
var SPIKE_SHARE_THRESHOLD = 0.7;
var REASONABLE_AVG_IMAGE_BYTES = 400 * KB;
var STUDIO_NEGLIGIBLE_SHARE_THRESHOLD = 0.2;
var DISTRIBUTION_DOMINANCE_THRESHOLD = 0.5;
function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}
function formatCountLabel(count, singular, plural) {
  return `${formatNumber(count)} ${pluralize(count, singular, plural)}`;
}
function sumRows(rows) {
  return rows.reduce(
    (totals, row) => {
      totals.requests += row.requests;
      totals.responseBytes += row.responseBytes;
      return totals;
    },
    { requests: 0, responseBytes: 0 }
  );
}
function isCriticalIssue(issue, view) {
  return issue.responseBytes >= CRITICAL_BYTES_THRESHOLD || issue.requests >= CRITICAL_REQUESTS_THRESHOLD || view.responseBytes >= CRITICAL_TOTAL_BYTES_THRESHOLD && issue.responseBytes / view.responseBytes >= CRITICAL_SHARE_THRESHOLD || view.requests >= CRITICAL_TOTAL_REQUESTS_THRESHOLD && issue.requests / view.requests >= CRITICAL_SHARE_THRESHOLD;
}
function severityForIssue(issue, view) {
  return isCriticalIssue(issue, view) ? "critical" : "warning";
}
function pushProblem(target, problem) {
  target.push(problem);
}
function getImageRows(rows) {
  return groupUrlsByKind(rows).image.map((row) => ({
    row,
    parsed: parseImageUrl(row.label)
  }));
}
function analyzeImages(rows) {
  const imageRows = getImageRows(rows);
  const wideRows = imageRows.filter(
    ({ parsed }) => hasImageWidthError(parsed.width)
  );
  const unsafeFormatRows = imageRows.filter(
    ({ parsed }) => hasImageFormatError(parsed.format)
  );
  const qualityRows = imageRows.filter(
    ({ parsed }) => hasImageQualityError(parsed.quality, parsed.isSvg)
  );
  return {
    imageRows,
    wideRows,
    unsafeFormatRows,
    qualityRows,
    imageTotals: sumRows(imageRows.map(({ row }) => row))
  };
}
function getQuerySpreadRows(rows) {
  return groupUrlsByKind(rows).query.filter((row) => {
    const query = extractGroqQuery(row.label);
    const params = query ? extractGroqParams(row.label) : null;
    return query !== null && hasGroqSpreadOperator(query, params ?? void 0);
  });
}
function getMp4Rows(rows) {
  return groupUrlsByKind(rows).file.filter((row) => isMp4Url(row.label));
}
function dominantRankedRow(rows, metric) {
  const nonZero = rows.filter((row) => row[metric] > 0);
  if (nonZero.length <= 1) return null;
  const total = nonZero.reduce((sum, row) => sum + row[metric], 0);
  if (total <= 0) return null;
  let largest = nonZero[0];
  for (const row of nonZero.slice(1)) {
    if (row[metric] > largest[metric]) largest = row;
  }
  return {
    label: largest.label,
    value: largest[metric],
    total,
    share: largest[metric] / total
  };
}
function dominantCountRow(rows) {
  const nonZero = rows.filter((row) => row.count > 0);
  if (nonZero.length <= 1) return null;
  const total = nonZero.reduce((sum, row) => sum + row.count, 0);
  if (total <= 0) return null;
  let largest = nonZero[0];
  for (const row of nonZero.slice(1)) {
    if (row.count > largest.count) largest = row;
  }
  return {
    label: largest.label,
    count: largest.count,
    total,
    share: largest.count / total
  };
}
function friendlyDomainLabel(domain) {
  const lower = domain.toLowerCase();
  if (lower.includes("cdn.sanity.io") || lower === "cdn") return "CDN";
  if (lower.includes("apicdn") || lower.includes("api.sanity.io")) {
    return "API CDN";
  }
  return domain;
}
function healthFromCounts(critical, warning) {
  if (critical > 0) return "red";
  if (warning > 0) return "yellow";
  return "green";
}
function buildDistribution(view) {
  const segments = [
    { label: "Images", bytes: view.byUrlKind.image.responseBytes, share: 0 },
    { label: "Queries", bytes: view.byUrlKind.query.responseBytes, share: 0 },
    { label: "Files", bytes: view.byUrlKind.file.responseBytes, share: 0 },
    { label: "Other", bytes: view.byUrlKind.other.responseBytes, share: 0 }
  ].filter((segment) => segment.bytes > 0).map((segment) => ({
    ...segment,
    share: view.responseBytes > 0 ? segment.bytes / view.responseBytes : 0
  }));
  return {
    totalBytes: view.responseBytes,
    segments
  };
}
function detectProblems(view, critical, warnings) {
  const querySpreadRows = getQuerySpreadRows(view.byUrl);
  if (querySpreadRows.length > 0) {
    const totals = sumRows(querySpreadRows);
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "groq-spread",
      severity,
      summary: `${formatCountLabel(querySpreadRows.length, "query")} ${querySpreadRows.length === 1 ? "uses" : "use"} the spread operator {...}`,
      suggestedFix: "Project only needed fields instead of using the {...} spread operator",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  const mp4Rows = getMp4Rows(view.byUrl);
  if (mp4Rows.length > 0) {
    const totals = sumRows(mp4Rows);
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "mp4-transfer",
      severity,
      summary: `${formatCountLabel(mp4Rows.length, "MP4 URL", "MP4 URLs")} served as progressive MP4`,
      suggestedFix: "Serve video via HLS (or similar adaptive streaming) instead of progressive MP4",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  const images = analyzeImages(view.byUrl);
  if (images.wideRows.length > 0) {
    const totals = sumRows(images.wideRows.map(({ row }) => row));
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "image-width",
      severity,
      summary: `${formatCountLabel(images.wideRows.length, "image")} exceed 2000px`,
      suggestedFix: "Cap CDN width requests at 2000px or below",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  if (images.unsafeFormatRows.length > 0) {
    const totals = sumRows(images.unsafeFormatRows.map(({ row }) => row));
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "image-format",
      severity,
      summary: `${formatCountLabel(images.unsafeFormatRows.length, "image")} missing format=auto`,
      suggestedFix: 'Use auto=format (or fm/format="auto") for CDN image URLs',
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  if (images.qualityRows.length > 0) {
    const totals = sumRows(images.qualityRows.map(({ row }) => row));
    const severity = severityForIssue(totals, view);
    const problem = {
      id: "image-quality",
      severity,
      summary: `${formatCountLabel(images.qualityRows.length, "image")} with quality above 87`,
      suggestedFix: "Keep image quality at 87 or below for raster assets",
      requests: totals.requests,
      responseBytes: totals.responseBytes
    };
    pushProblem(severity === "critical" ? critical : warnings, problem);
  }
  const serverErrorCount2 = view.byStatus.filter(({ label }) => Number(label) >= 500).reduce((sum, row) => sum + row.count, 0);
  const clientErrorCount = view.byStatus.filter(({ label }) => {
    const status = Number(label);
    return status >= 400 && status < 500;
  }).reduce((sum, row) => sum + row.count, 0);
  if (serverErrorCount2 > 0) {
    pushProblem(critical, {
      id: "status-5xx",
      severity: "critical",
      summary: `${formatCountLabel(serverErrorCount2, "server error")}`,
      suggestedFix: "Investigate failing API/CDN handlers returning 5xx",
      requests: serverErrorCount2
    });
  }
  if (clientErrorCount > 0) {
    pushProblem(warnings, {
      id: "status-4xx",
      severity: "warning",
      summary: `${formatCountLabel(clientErrorCount, "client error")}`,
      suggestedFix: "Review missing assets and invalid client requests returning 4xx",
      requests: clientErrorCount
    });
  }
  return {
    querySpreadRows,
    mp4Rows,
    images,
    serverErrorCount: serverErrorCount2,
    clientErrorCount
  };
}
function buildObservations(view) {
  const observations = [];
  const distribution = buildDistribution(view);
  const dominant = distribution.segments.reduce(
    (largest, segment) => {
      if (!largest || segment.bytes > largest.bytes) return segment;
      return largest;
    },
    null
  );
  if (dominant && dominant.share >= DISTRIBUTION_DOMINANCE_THRESHOLD && view.responseBytes > 0) {
    observations.push({
      summary: `${dominant.label} account for ${formatDistributionShare(dominant.share)} of bandwidth`
    });
  }
  const domainDominant = dominantRankedRow(view.byDomain, "responseBytes");
  if (domainDominant && domainDominant.share >= CONCENTRATION_SHARE_THRESHOLD) {
    observations.push({
      summary: `${friendlyDomainLabel(domainDominant.label)} serves ${formatDistributionShare(domainDominant.share)} of traffic`
    });
  }
  const hourDominant = dominantRankedRow(view.byHour, "responseBytes");
  if (hourDominant && hourDominant.share >= SPIKE_SHARE_THRESHOLD) {
    observations.push({
      summary: `Peak hour was ${formatPeakHour(hourDominant.label)}`
    });
  }
  const histogramDominant = dominantCountRow(view.responseSizeHistogram);
  if (histogramDominant && histogramDominant.share >= CONCENTRATION_SHARE_THRESHOLD) {
    observations.push({
      summary: `${formatDistributionShare(histogramDominant.share)} of responses are ${histogramDominant.label}`
    });
  }
  return observations;
}
function buildHealthySignals(view, context) {
  const healthy = [];
  const { querySpreadRows, mp4Rows, images, serverErrorCount: serverErrorCount2, clientErrorCount } = context;
  if (images.imageRows.length > 0 && images.unsafeFormatRows.length === 0) {
    healthy.push({ summary: "All images use auto=format" });
  }
  if (images.imageTotals.requests > 0 && images.imageTotals.responseBytes / images.imageTotals.requests < REASONABLE_AVG_IMAGE_BYTES) {
    healthy.push({ summary: "Average image response size is reasonable" });
  }
  const hourDominant = dominantRankedRow(view.byHour, "responseBytes");
  if (!hourDominant || hourDominant.share < SPIKE_SHARE_THRESHOLD) {
    healthy.push({ summary: "No suspicious bandwidth spikes detected" });
  }
  if (view.includesStudio && view.responseBytes > 0 && view.studio.responseBytes / view.responseBytes < STUDIO_NEGLIGIBLE_SHARE_THRESHOLD) {
    healthy.push({ summary: "Studio traffic is negligible" });
  }
  if (serverErrorCount2 === 0) {
    healthy.push({ summary: "No server errors detected" });
  }
  if (clientErrorCount === 0) {
    healthy.push({ summary: "No client errors detected" });
  }
  if (view.byUrlKind.query.requests > 0 && querySpreadRows.length === 0) {
    healthy.push({ summary: "No GROQ spread queries detected" });
  }
  if (images.imageRows.length > 0 && images.wideRows.length === 0) {
    healthy.push({ summary: "No oversized image widths detected" });
  }
  if (images.imageRows.length > 0 && images.qualityRows.length === 0) {
    healthy.push({ summary: "No high image quality settings detected" });
  }
  if (view.byUrlKind.file.requests > 0 && mp4Rows.length === 0) {
    healthy.push({ summary: "No progressive MP4 downloads detected" });
  }
  return healthy.slice(0, 8);
}
function buildReportSummary(view) {
  const critical = [];
  const warnings = [];
  const detection = detectProblems(view, critical, warnings);
  const distribution = buildDistribution(view);
  const observations = buildObservations(view);
  const healthy = buildHealthySignals(view, detection);
  const partialSummary = {
    overallHealth: healthFromCounts(critical.length, warnings.length),
    critical,
    warnings,
    observations,
    healthy,
    atAGlance: [],
    distribution,
    topContributors: view.topContributors
  };
  return {
    ...partialSummary,
    atAGlance: buildAtAGlance(view, partialSummary)
  };
}
function summaryHeadline(summary) {
  const issueTotal = summary.critical.length + summary.warnings.length;
  if (issueTotal === 0) return "\u2705 No issues detected";
  return `\u{1F6A8} ${formatNumber(issueTotal)} ${pluralize(issueTotal, "issue")} detected`;
}

// src/report/markdown.ts
function escapeMarkdownCell(value) {
  return value.replaceAll("|", "\\|").replaceAll("\n", " ").replaceAll("\r", "");
}
var MP4_WARNING = "consider HLS streaming instead of MP4";
function renderBulletGroup(title, items) {
  if (items.length === 0) return "";
  return [
    `### ${title}`,
    "",
    ...items.slice(0, 8).map((item) => `- ${item}`),
    ""
  ].join("\n");
}
function renderDistributionSummary(summary) {
  const lines = [
    "### Distribution",
    "",
    `- Total: ${formatBytes(summary.distribution.totalBytes)}`,
    ...summary.distribution.segments.map(
      (segment) => `- ${segment.label}: ${formatBytes(segment.bytes)}`
    ),
    ""
  ];
  return lines.join("\n");
}
function renderContributorSummary(summary) {
  const items = [];
  const { topContributors } = summary;
  if (topContributors.image) {
    items.push(
      `- Largest image: ${formatBytes(topContributors.image.responseBytes)} (${formatNumber(topContributors.image.requests)} requests)`
    );
  }
  if (topContributors.query) {
    items.push(
      `- Largest query: ${formatBytes(topContributors.query.responseBytes)} (${formatNumber(topContributors.query.requests)} requests)`
    );
  }
  if (topContributors.file) {
    items.push(
      `- Largest file: ${formatBytes(topContributors.file.responseBytes)} (${formatNumber(topContributors.file.requests)} requests)`
    );
  }
  if (topContributors.referer) {
    items.push(
      `- Largest referer: ${formatBytes(topContributors.referer.responseBytes)}`
    );
  }
  if (items.length === 0) return "";
  return ["### Top contributors", "", ...items, ""].join("\n");
}
function buildExecutiveSummary(view) {
  const summary = view.summary;
  const atAGlanceBullets = summary.atAGlance.filter((insight) => insight.kind !== "synthesis").map((insight) => insight.text);
  const synthesis = summary.atAGlance.find(
    (insight) => insight.kind === "synthesis"
  );
  return [
    "## Executive Summary",
    "",
    summaryHeadline(summary),
    "",
    renderBulletGroup("At a glance", atAGlanceBullets),
    synthesis ? `${synthesis.text}
` : "",
    renderDistributionSummary(summary),
    renderContributorSummary(summary),
    renderBulletGroup(
      "Critical",
      summary.critical.map((item) => item.summary)
    ),
    renderBulletGroup(
      "Warnings",
      summary.warnings.map((item) => item.summary)
    ),
    renderBulletGroup(
      "Observations",
      summary.observations.map((item) => item.summary)
    ),
    renderBulletGroup(
      "No action needed",
      summary.healthy.map((item) => item.summary)
    )
  ].filter(Boolean).join("\n");
}
function formatImageMetric(value, issue) {
  if (value === null) return "\u2014";
  const base = String(value);
  return issue ? `${base} (${issue})` : base;
}
function rankedTable(title, rows) {
  if (rows.length === 0) return "";
  const lines = [
    `### ${title}`,
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    lines.push(
      `| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function urlRankedTable(title, rows) {
  if (rows.length === 0) return "";
  const lines = [
    `#### ${title}`,
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    lines.push(
      `| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function imageUrlTable(rows) {
  if (rows.length === 0) return "";
  const lines = [
    "#### Images",
    "",
    "| ID | URL | Width | Quality | Format | Bandwidth | Requests | Avg / req |",
    "| --- | --- | ---: | ---: | --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    const parsed = parseImageUrl(row.label);
    const width = formatImageMetric(
      parsed.width,
      hasImageWidthError(parsed.width) ? "width exceeds 2000px" : void 0
    );
    const quality = formatImageMetric(
      parsed.quality,
      hasImageQualityError(parsed.quality, parsed.isSvg) ? "quality exceeds 87" : void 0
    );
    const format = formatImageMetric(
      parsed.format,
      hasImageFormatError(parsed.format) ? 'format should be "auto"' : void 0
    );
    lines.push(
      `| ${escapeMarkdownCell(parsed.id)} | ${escapeMarkdownCell(row.label)} | ${width} | ${quality} | ${format} | ${formatBytes(row.responseBytes)} | ${formatNumber(row.requests)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function queryUrlTable(rows, groqByUrl) {
  if (rows.length === 0) return "";
  const lines = [
    "#### Queries",
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    const groqDetails = groqByUrl[row.label];
    const label = groqDetails?.hasSpreadOperator ? `${row.label} (${GROQ_SPREAD_WARNING})` : row.label;
    lines.push(
      `| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function fileUrlTable(rows) {
  if (rows.length === 0) return "";
  const lines = [
    "#### Files",
    "",
    "| Label | Requests | Bandwidth | Avg / req |",
    "| --- | ---: | ---: | ---: |"
  ];
  for (const row of rows) {
    const label = isMp4Url(row.label) ? `${row.label} (${MP4_WARNING})` : row.label;
    lines.push(
      `| ${escapeMarkdownCell(label)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function urlSectionsMarkdown(view) {
  const groups = groupUrlsByKind(view.byUrl);
  const parts = ["### Top URLs", ""];
  if (groups.image.length > 0) {
    parts.push(imageUrlTable(groups.image));
  }
  if (groups.file.length > 0) {
    parts.push(fileUrlTable(groups.file));
  }
  if (groups.query.length > 0) {
    parts.push(queryUrlTable(groups.query, view.groqByUrl));
  }
  if (groups.other.length > 0) {
    parts.push(urlRankedTable("Other", groups.other));
  }
  return parts.filter(Boolean).join("\n");
}
function userAgentTable(title, view) {
  const rows = view.byUserAgent;
  if (rows.length === 0) return "";
  const stats = view.userAgentStats;
  const lines = [`### ${title}`, ""];
  if (stats.trackableRequests > 0) {
    lines.push(
      `Mac ${formatPercentage(stats.macPct)} \xB7 Windows ${formatPercentage(stats.windowsPct)} \xB7 Mobile ${formatPercentage(stats.mobilePct)} \xB7 Desktop ${formatPercentage(stats.desktopPct)}`,
      ""
    );
  }
  lines.push(
    "| Device | Label | Requests | Bandwidth | Avg / req |",
    "| --- | --- | ---: | ---: | ---: |"
  );
  for (const row of rows) {
    const parsed = view.userAgentByLabel[row.label];
    const device = parsed.deviceKind === "mobile" ? "Mobile" : parsed.deviceKind === "desktop" ? "Desktop" : "\u2014";
    lines.push(
      `| ${device} | ${escapeMarkdownCell(`${parsed.displayLabel} \u2014 ${parsed.raw}`)} | ${formatNumber(row.requests)} | ${formatBytes(row.responseBytes)} | ${formatBytes(avgBytesPerRequest(row))} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function countTable(title, rows) {
  if (rows.length === 0) return "";
  const lines = [`### ${title}`, "", "| Label | Count |", "| --- | ---: |"];
  for (const row of rows) {
    lines.push(
      `| ${escapeMarkdownCell(row.label)} | ${formatNumber(row.count)} |`
    );
  }
  lines.push("");
  return lines.join("\n");
}
function renderSummary(view) {
  const period = view.firstTimestamp && view.lastTimestamp ? `${formatReadableDate(view.firstTimestamp)} \u2192 ${formatReadableDate(view.lastTimestamp)}` : "No timestamps found";
  return [
    "## Summary",
    "",
    `- Requests: ${formatNumber(view.requests)}`,
    `- Response bandwidth: ${formatBytes(view.responseBytes)}`,
    `- Request bytes: ${formatBytes(view.requestBytes)}`,
    `- Period: ${period}`,
    `- Studio: ${formatNumber(view.studio.requests)} requests, ${formatBytes(view.studio.responseBytes)} response`,
    `- Billable: ${formatNumber(view.nonStudio.requests)} requests, ${formatBytes(view.nonStudio.responseBytes)} response`,
    ""
  ].join("\n");
}
function renderSections(view, sections) {
  const parts = [];
  if (sections.domain) parts.push(rankedTable("Top domains", view.byDomain));
  if (sections.endpoint)
    parts.push(rankedTable("Top endpoints", view.byEndpoint));
  if (sections.date) parts.push(rankedTable("Daily bandwidth", view.byDate));
  if (sections.hour) parts.push(rankedTable("Hourly bandwidth", view.byHour));
  if (sections.status) parts.push(countTable("Response codes", view.byStatus));
  if (sections.histogram) {
    parts.push(countTable("Response size buckets", view.responseSizeHistogram));
  }
  if (sections.urls) parts.push(urlSectionsMarkdown(view));
  if (sections.referers)
    parts.push(rankedTable("Top referers", view.byReferer));
  if (sections.userAgents) {
    parts.push(userAgentTable("Top user agents", view));
  }
  if (sections.ips) parts.push(rankedTable("Top IPs", view.byIp));
  return parts.filter(Boolean).join("\n");
}
function renderReportMarkdown(data, viewKey) {
  const view = viewKey === "billable" ? data.billable : data.all;
  return [
    `# ${data.title}`,
    "",
    `- Source: \`${data.sourcePath}\``,
    `- Generated: ${data.generatedAt}`,
    `- View: ${view.label}`,
    `- Max table rows: ${data.config.topN}`,
    "",
    buildExecutiveSummary(view),
    "",
    renderSummary(view),
    renderSections(view, data.config.sections)
  ].join("\n");
}

// src/report/parse-user-agent.ts
import { UAParser } from "ua-parser-js";
import { isBot } from "ua-parser-js/bot-detection";
var NON_BROWSER_CLIENT = /^@sanity\/client\b|\bsanity\/client\b|^curl\b|^axios\b|node-fetch|^got\/|python-requests|aiohttp|httpx|^Go-http-client|^okhttp\b|^Java\/|^libwww-perl|postmanruntime/i;
var EXPLICIT_MOBILE = /\bMobile\b|iPhone|iPod|Android.+Mobile|Windows Phone/i;
var EXPLICIT_DESKTOP = /Macintosh|Windows NT|Win64|X11; Linux|X11; Ubuntu|CrOS/i;
function normalizeBrowserName(name) {
  if (!name) return void 0;
  return name.replace(/^Mobile\s+/i, "");
}
function normalizeOsName(name) {
  if (!name) return void 0;
  if (name === "Mac OS") return "macOS";
  return name;
}
function classifyOsFamily(osName) {
  if (!osName) return "other";
  if (osName === "macOS") return "mac";
  if (osName === "Windows") return "windows";
  return "other";
}
function isMobileDeviceType(type) {
  return type === "mobile" || type === "tablet" || type === "wearable";
}
function isNonBrowserClient(raw) {
  return NON_BROWSER_CLIENT.test(raw);
}
function resolveDeviceKind(raw, deviceType) {
  if (isMobileDeviceType(deviceType) || EXPLICIT_MOBILE.test(raw)) {
    return "mobile";
  }
  if (EXPLICIT_DESKTOP.test(raw)) {
    return "desktop";
  }
  return null;
}
function fallbackDisplayLabel(raw) {
  if (!raw) return "Unknown";
  if (/@sanity\/client/i.test(raw)) return "@sanity/client";
  if (/^curl\b/i.test(raw)) return "curl";
  if (/postman/i.test(raw)) return "Postman";
  if (/^axios\b/i.test(raw) || /node-fetch/i.test(raw) || /^got\//i.test(raw)) {
    return "HTTP client";
  }
  if (/python-requests|aiohttp|httpx/i.test(raw)) return "Python client";
  if (/^Go-http-client/i.test(raw)) return "Go client";
  if (raw.length > 48) return `${raw.slice(0, 45)}\u2026`;
  return raw;
}
function buildDisplayLabel(osName, browserName, raw) {
  const parts = [osName, browserName].filter(Boolean);
  if (parts.length === 0) return fallbackDisplayLabel(raw);
  return parts.join(" ");
}
function notTrackable(raw) {
  return {
    deviceKind: null,
    osFamily: null,
    isTrackable: false,
    displayLabel: fallbackDisplayLabel(raw),
    raw
  };
}
function parseUserAgent(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return notTrackable(raw);
  if (isNonBrowserClient(trimmed) || isBot(trimmed)) {
    return notTrackable(raw);
  }
  const result = new UAParser(trimmed).getResult();
  if (isBot(result) || !result.browser.name) {
    return notTrackable(raw);
  }
  const osName = normalizeOsName(result.os.name);
  const browserName = normalizeBrowserName(result.browser.name);
  const deviceKind = resolveDeviceKind(trimmed, result.device.type);
  const osFamily = classifyOsFamily(osName);
  return {
    deviceKind,
    osFamily,
    isTrackable: deviceKind !== null,
    displayLabel: buildDisplayLabel(osName, browserName, trimmed),
    raw
  };
}
function aggregateUserAgentStats(rows) {
  let trackableRequests = 0;
  let macRequests = 0;
  let windowsRequests = 0;
  let mobileRequests = 0;
  let desktopRequests = 0;
  for (const row of rows) {
    const parsed = parseUserAgent(row.label);
    if (!parsed.isTrackable || !parsed.deviceKind) continue;
    trackableRequests += row.requests;
    if (parsed.osFamily === "mac") macRequests += row.requests;
    if (parsed.osFamily === "windows") windowsRequests += row.requests;
    if (parsed.deviceKind === "mobile") mobileRequests += row.requests;
    if (parsed.deviceKind === "desktop") desktopRequests += row.requests;
  }
  const toPct = (count) => trackableRequests > 0 ? count / trackableRequests * 100 : 0;
  return {
    trackableRequests,
    macPct: toPct(macRequests),
    windowsPct: toPct(windowsRequests),
    mobilePct: toPct(mobileRequests),
    desktopPct: toPct(desktopRequests)
  };
}

// src/report/enrich-report.ts
function buildUserAgentByLabel(rows) {
  const byLabel = {};
  for (const row of rows) {
    byLabel[row.label] = parseUserAgent(row.label);
  }
  return byLabel;
}
function buildGroqByUrl(rows) {
  const byUrl = {};
  for (const row of rows) {
    const query = extractGroqQuery(row.label);
    if (!query) continue;
    const params = extractGroqParams(row.label);
    const formattedQuery = formatGroqForDisplay(query);
    const stats = analyzeGroqQuery(formattedQuery, params ?? void 0);
    byUrl[row.label] = {
      query,
      params,
      formattedQuery,
      highlightedQuery: highlightGroq(formattedQuery),
      stats,
      hasSpreadOperator: hasGroqSpreadOperator(
        formattedQuery,
        params ?? void 0
      )
    };
  }
  return byUrl;
}
function enrichReportView(view) {
  return {
    ...view,
    summary: buildReportSummary(view),
    userAgentByLabel: buildUserAgentByLabel(view.byUserAgent),
    userAgentStats: aggregateUserAgentStats(view.byUserAgent),
    groqByUrl: buildGroqByUrl(view.byUrl)
  };
}
function enrichReportData(data) {
  const all = enrichReportView(data.all);
  const billable = enrichReportView(data.billable);
  const enriched = {
    ...data,
    all,
    billable,
    markdown: {
      billable: "",
      all: ""
    }
  };
  return {
    ...enriched,
    markdown: {
      billable: renderReportMarkdown(enriched, "billable"),
      all: renderReportMarkdown(enriched, "all")
    }
  };
}

// src/report-data.ts
function topN(map, limit, sortBy = "responseBytes") {
  return Object.entries(map).map(([label, value]) => ({ label, ...value })).sort(
    (a, b) => sortBy === "responseBytes" ? b.responseBytes - a.responseBytes : b.requests - a.requests
  ).slice(0, limit);
}
function sortDateRows(map) {
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b)).map(([isoDate, value]) => ({
    label: formatIsoDate(isoDate),
    ...value
  }));
}
function sortHourRows(map) {
  return Array.from({ length: 24 }, (_, hour) => ({
    label: `${hour.toString().padStart(2, "0")}:00`,
    ...map[hour] ?? { requests: 0, responseBytes: 0 }
  }));
}
function toCountRows(map) {
  return Object.entries(map).map(([label, count]) => ({ label, count })).sort((a, b) => Number(a.label) - Number(b.label));
}
function zeroTotals() {
  return { requests: 0, responseBytes: 0, requestBytes: 0 };
}
function zeroBreakdown() {
  return { requests: 0, responseBytes: 0 };
}
function emptyUrlKindBreakdown() {
  return {
    image: zeroBreakdown(),
    file: zeroBreakdown(),
    query: zeroBreakdown(),
    other: zeroBreakdown()
  };
}
function urlKindTab(url) {
  const kind = classifyUrl(url);
  if (kind === "image") return "image";
  if (kind === "file" || kind === "video") return "file";
  if (kind === "query") return "query";
  return "other";
}
function updateTopContributor(current, label, breakdown) {
  if (!current || breakdown.responseBytes > current.responseBytes) {
    return { label, ...breakdown };
  }
  return current;
}
function computeUrlKindStats(map) {
  const byUrlKind = emptyUrlKindBreakdown();
  let topContributors = {};
  for (const [label, breakdown] of Object.entries(map)) {
    const tab = urlKindTab(label);
    byUrlKind[tab].requests += breakdown.requests;
    byUrlKind[tab].responseBytes += breakdown.responseBytes;
    if (tab !== "other") {
      topContributors = {
        ...topContributors,
        [tab]: updateTopContributor(topContributors[tab], label, breakdown)
      };
    }
  }
  return { byUrlKind, topContributors };
}
function topReferer(map) {
  let top;
  for (const [label, breakdown] of Object.entries(map)) {
    top = updateTopContributor(top, label, breakdown);
  }
  return top;
}
function viewFromSummary(label, summary, prefix, topLimit) {
  const responseHistogram = Object.entries(summary.responseSizeHistogram).map(
    ([bucketLabel, count]) => ({ label: bucketLabel, count })
  );
  const responseHistogramNonStudio = Object.entries(
    summary.responseSizeHistogramNonStudio
  ).map(([bucketLabel, count]) => ({ label: bucketLabel, count }));
  const urlMap = prefix ? summary.byUrlNonStudio : summary.byUrl;
  const refererMap = prefix ? summary.byRefererNonStudio : summary.byReferer;
  const { byUrlKind, topContributors: urlTops } = computeUrlKindStats(urlMap);
  const refererTop = topReferer(refererMap);
  const byDomain = prefix ? topN(summary.byDomainNonStudio, topLimit) : topN(summary.byDomain, topLimit);
  const byEndpoint = prefix ? topN(summary.byEndpointNonStudio, topLimit) : topN(summary.byEndpoint, topLimit);
  const byDate = prefix ? sortDateRows(summary.byDateNonStudio) : sortDateRows(summary.byDate);
  const byHour = prefix ? sortHourRows(summary.byHourNonStudio) : sortHourRows(summary.byHour);
  const byUrl = topN(urlMap, topLimit);
  const byReferer = topN(refererMap, topLimit);
  const byUserAgent = prefix ? topN(summary.byUserAgentNonStudio, topLimit) : topN(summary.byUserAgent, topLimit);
  const byIp = prefix ? topN(summary.byIpNonStudio, topLimit) : topN(summary.byIp, topLimit);
  const byStatus = prefix ? toCountRows(summary.byStatusNonStudio) : toCountRows(summary.byStatus);
  return {
    label,
    requests: prefix ? summary.nonStudio.requests : summary.totalRequests,
    responseBytes: prefix ? summary.nonStudio.responseBytes : summary.totalResponseBytes,
    requestBytes: prefix ? summary.nonStudio.requestBytes : summary.totalRequestBytes,
    firstTimestamp: summary.firstTimestamp,
    lastTimestamp: summary.lastTimestamp,
    studio: prefix ? zeroTotals() : summary.studio,
    nonStudio: summary.nonStudio,
    byDomain,
    byEndpoint,
    byDate,
    byHour,
    byUrl,
    byReferer,
    byUserAgent,
    byIp,
    byStatus,
    responseSizeHistogram: prefix ? responseHistogramNonStudio : responseHistogram,
    byUrlKind,
    topContributors: {
      ...urlTops,
      referer: refererTop
    },
    includesStudio: !prefix
  };
}
function buildReportData(summary, config, sourcePath) {
  return enrichReportData({
    title: config.title,
    sourcePath,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    config,
    all: viewFromSummary("All requests", summary, "", config.topN),
    billable: viewFromSummary("Billable requests", summary, "NonStudio", config.topN)
  });
}

// src/index.ts
async function analyzeLog(inputPath, options = {}) {
  const config = resolveReportConfig(options.config);
  const summary = await aggregateLogFile(
    inputPath,
    config.histogramBuckets,
    options.onProgress
  );
  return buildReportData(summary, config, inputPath);
}
async function writeHtmlReport(report, outputPath) {
  const html = renderReportHtml(report);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}
function generateMarkdown(report, options) {
  const view = options?.view ?? "billable";
  return report.markdown[view];
}
async function writeMarkdownReport(report, outputPath, options) {
  const markdown = generateMarkdown(report, options);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, markdown);
}
export {
  DEFAULT_REPORT_CONFIG,
  analyzeLog,
  enrichReportData,
  generateMarkdown,
  loadReportConfig,
  markdownReportFilename,
  resolveReportConfig,
  writeHtmlReport,
  writeMarkdownReport
};
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/

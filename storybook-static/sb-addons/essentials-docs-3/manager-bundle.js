try {
  (() => {
    var Gc = Object.create;
    var mn = Object.defineProperty;
    var Wc = Object.getOwnPropertyDescriptor;
    var Kc = Object.getOwnPropertyNames;
    var Yc = Object.getPrototypeOf,
      Xc = Object.prototype.hasOwnProperty;
    var Ie = ((e) =>
      typeof require < "u"
        ? require
        : typeof Proxy < "u"
          ? new Proxy(e, {
              get: (t, r) => (typeof require < "u" ? require : t)[r],
            })
          : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var ze = (e, t) => () => (e && (t = e((e = 0))), t);
    var Qc = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      fa = (e, t) => {
        for (var r in t) mn(e, r, { get: t[r], enumerable: !0 });
      },
      Zc = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of Kc(t))
            !Xc.call(e, o) &&
              o !== r &&
              mn(e, o, {
                get: () => t[o],
                enumerable: !(n = Wc(t, o)) || n.enumerable,
              });
        return e;
      };
    var ed = (e, t, r) => (
      (r = e != null ? Gc(Yc(e)) : {}),
      Zc(
        t || !e || !e.__esModule
          ? mn(r, "default", { value: e, enumerable: !0 })
          : r,
        e,
      )
    );
    var V = ze(() => {});
    var J = ze(() => {});
    var H = ze(() => {});
    var C,
      ma,
      et,
      d1,
      p1,
      h1,
      f1,
      td,
      m1,
      de,
      Kt,
      rd,
      y1,
      g1,
      b1,
      E1,
      ya,
      v1,
      A1,
      D1,
      tt,
      Dr,
      S1,
      w1,
      rt,
      C1,
      x1,
      T1,
      ga,
      Yt,
      F1,
      Me,
      Ue,
      I1,
      k1,
      R1,
      Xt = ze(() => {
        V();
        J();
        H();
        (C = __REACT__),
          ({
            Children: ma,
            Component: et,
            Fragment: d1,
            Profiler: p1,
            PureComponent: h1,
            StrictMode: f1,
            Suspense: td,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: m1,
            cloneElement: de,
            createContext: Kt,
            createElement: rd,
            createFactory: y1,
            createRef: g1,
            forwardRef: b1,
            isValidElement: E1,
            lazy: ya,
            memo: v1,
            startTransition: A1,
            unstable_act: D1,
            useCallback: tt,
            useContext: Dr,
            useDebugValue: S1,
            useDeferredValue: w1,
            useEffect: rt,
            useId: C1,
            useImperativeHandle: x1,
            useInsertionEffect: T1,
            useLayoutEffect: ga,
            useMemo: Yt,
            useReducer: F1,
            useRef: Me,
            useState: Ue,
            useSyncExternalStore: I1,
            useTransition: k1,
            version: R1,
          } = __REACT__);
      });
    var Ia = {};
    fa(Ia, {
      A: () => ad,
      ActionBar: () => yn,
      AddonPanel: () => gn,
      Badge: () => id,
      Bar: () => sd,
      Blockquote: () => ld,
      Button: () => ba,
      ClipboardCode: () => ud,
      Code: () => Ea,
      DL: () => cd,
      Div: () => dd,
      DocumentWrapper: () => pd,
      EmptyTabContent: () => va,
      ErrorFormatter: () => Aa,
      FlexBar: () => bn,
      Form: () => nt,
      H1: () => hd,
      H2: () => En,
      H3: () => Da,
      H4: () => fd,
      H5: () => md,
      H6: () => yd,
      HR: () => gd,
      IconButton: () => ht,
      IconButtonSkeleton: () => bd,
      Icons: () => Ed,
      Img: () => vd,
      LI: () => Ad,
      Link: () => Sa,
      ListItem: () => Dd,
      Loader: () => wa,
      Modal: () => Sd,
      OL: () => wd,
      P: () => Cd,
      Placeholder: () => xd,
      Pre: () => Td,
      ProgressSpinner: () => Fd,
      ResetWrapper: () => Ca,
      ScrollArea: () => Id,
      Separator: () => kd,
      Spaced: () => Rd,
      Span: () => Od,
      StorybookIcon: () => _d,
      StorybookLogo: () => Pd,
      Symbols: () => Bd,
      SyntaxHighlighter: () => vn,
      TT: () => Nd,
      TabBar: () => jd,
      TabButton: () => Ld,
      TabWrapper: () => Md,
      Table: () => Ud,
      Tabs: () => $d,
      TabsState: () => xa,
      TooltipLinkList: () => qd,
      TooltipMessage: () => Vd,
      TooltipNote: () => An,
      UL: () => Jd,
      WithTooltip: () => Sr,
      WithTooltipPure: () => Ta,
      Zoom: () => Dn,
      codeCommon: () => Tt,
      components: () => Sn,
      createCopyToClipboardFunction: () => Hd,
      default: () => od,
      getStoryHref: () => Fa,
      icons: () => zd,
      interleaveSeparators: () => Gd,
      nameSpaceClassNames: () => wn,
      resetComponents: () => Wd,
      withReset: () => Ft,
    });
    var od,
      ad,
      yn,
      gn,
      id,
      sd,
      ld,
      ba,
      ud,
      Ea,
      cd,
      dd,
      pd,
      va,
      Aa,
      bn,
      nt,
      hd,
      En,
      Da,
      fd,
      md,
      yd,
      gd,
      ht,
      bd,
      Ed,
      vd,
      Ad,
      Sa,
      Dd,
      wa,
      Sd,
      wd,
      Cd,
      xd,
      Td,
      Fd,
      Ca,
      Id,
      kd,
      Rd,
      Od,
      _d,
      Pd,
      Bd,
      vn,
      Nd,
      jd,
      Ld,
      Md,
      Ud,
      $d,
      xa,
      qd,
      Vd,
      An,
      Jd,
      Sr,
      Ta,
      Dn,
      Tt,
      Sn,
      Hd,
      Fa,
      zd,
      Gd,
      wn,
      Wd,
      Ft,
      Qt = ze(() => {
        V();
        J();
        H();
        (od = __STORYBOOK_COMPONENTS__),
          ({
            A: ad,
            ActionBar: yn,
            AddonPanel: gn,
            Badge: id,
            Bar: sd,
            Blockquote: ld,
            Button: ba,
            ClipboardCode: ud,
            Code: Ea,
            DL: cd,
            Div: dd,
            DocumentWrapper: pd,
            EmptyTabContent: va,
            ErrorFormatter: Aa,
            FlexBar: bn,
            Form: nt,
            H1: hd,
            H2: En,
            H3: Da,
            H4: fd,
            H5: md,
            H6: yd,
            HR: gd,
            IconButton: ht,
            IconButtonSkeleton: bd,
            Icons: Ed,
            Img: vd,
            LI: Ad,
            Link: Sa,
            ListItem: Dd,
            Loader: wa,
            Modal: Sd,
            OL: wd,
            P: Cd,
            Placeholder: xd,
            Pre: Td,
            ProgressSpinner: Fd,
            ResetWrapper: Ca,
            ScrollArea: Id,
            Separator: kd,
            Spaced: Rd,
            Span: Od,
            StorybookIcon: _d,
            StorybookLogo: Pd,
            Symbols: Bd,
            SyntaxHighlighter: vn,
            TT: Nd,
            TabBar: jd,
            TabButton: Ld,
            TabWrapper: Md,
            Table: Ud,
            Tabs: $d,
            TabsState: xa,
            TooltipLinkList: qd,
            TooltipMessage: Vd,
            TooltipNote: An,
            UL: Jd,
            WithTooltip: Sr,
            WithTooltipPure: Ta,
            Zoom: Dn,
            codeCommon: Tt,
            components: Sn,
            createCopyToClipboardFunction: Hd,
            getStoryHref: Fa,
            icons: zd,
            interleaveSeparators: Gd,
            nameSpaceClassNames: wn,
            resetComponents: Wd,
            withReset: Ft,
          } = __STORYBOOK_COMPONENTS__);
      });
    var oi = Qc((xr, ni) => {
      V();
      J();
      H();
      (function (e, t) {
        typeof xr == "object" && typeof ni < "u"
          ? t(xr)
          : typeof define == "function" && define.amd
            ? define(["exports"], t)
            : ((e = typeof globalThis < "u" ? globalThis : e || self),
              t((e.jtpp = {})));
      })(xr, function (e) {
        "use strict";
        function t(s) {
          return s.text !== void 0 && s.text !== ""
            ? `'${s.type}' with value '${s.text}'`
            : `'${s.type}'`;
        }
        class r extends Error {
          constructor(f) {
            super(`No parslet found for token: ${t(f)}`),
              (this.token = f),
              Object.setPrototypeOf(this, r.prototype);
          }
          getToken() {
            return this.token;
          }
        }
        class n extends Error {
          constructor(f) {
            super(`The parsing ended early. The next token was: ${t(f)}`),
              (this.token = f),
              Object.setPrototypeOf(this, n.prototype);
          }
          getToken() {
            return this.token;
          }
        }
        class o extends Error {
          constructor(f, g) {
            let T = `Unexpected type: '${f.type}'.`;
            g !== void 0 && (T += ` Message: ${g}`),
              super(T),
              Object.setPrototypeOf(this, o.prototype);
          }
        }
        function i(s) {
          return (f) => (f.startsWith(s) ? { type: s, text: s } : null);
        }
        function a(s) {
          let f = 0,
            g,
            T = s[0],
            B = !1;
          if (T !== "'" && T !== '"') return null;
          for (; f < s.length; ) {
            if ((f++, (g = s[f]), !B && g === T)) {
              f++;
              break;
            }
            B = !B && g === "\\";
          }
          if (g !== T) throw new Error("Unterminated String");
          return s.slice(0, f);
        }
        let l = new RegExp(
            "[$_\\p{ID_Start}]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}",
            "u",
          ),
          u = new RegExp(
            "[$\\-\\p{ID_Continue}\\u200C\\u200D]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}",
            "u",
          );
        function c(s) {
          let f = s[0];
          if (!l.test(f)) return null;
          let g = 1;
          do {
            if (((f = s[g]), !u.test(f))) break;
            g++;
          } while (g < s.length);
          return s.slice(0, g);
        }
        let d = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
        function p(s) {
          var f, g;
          return (g =
            (f = d.exec(s)) === null || f === void 0 ? void 0 : f[0]) !==
            null && g !== void 0
            ? g
            : null;
        }
        let h = (s) => {
          let f = c(s);
          return f == null ? null : { type: "Identifier", text: f };
        };
        function y(s) {
          return (f) => {
            if (!f.startsWith(s)) return null;
            let g = f[s.length];
            return g !== void 0 && u.test(g) ? null : { type: s, text: s };
          };
        }
        let E = (s) => {
            let f = a(s);
            return f == null ? null : { type: "StringValue", text: f };
          },
          v = (s) => (s.length > 0 ? null : { type: "EOF", text: "" }),
          A = (s) => {
            let f = p(s);
            return f === null ? null : { type: "Number", text: f };
          },
          D = [
            v,
            i("=>"),
            i("("),
            i(")"),
            i("{"),
            i("}"),
            i("["),
            i("]"),
            i("|"),
            i("&"),
            i("<"),
            i(">"),
            i(","),
            i(";"),
            i("*"),
            i("?"),
            i("!"),
            i("="),
            i(":"),
            i("..."),
            i("."),
            i("#"),
            i("~"),
            i("/"),
            i("@"),
            y("undefined"),
            y("null"),
            y("function"),
            y("this"),
            y("new"),
            y("module"),
            y("event"),
            y("external"),
            y("typeof"),
            y("keyof"),
            y("readonly"),
            y("import"),
            y("is"),
            y("in"),
            y("asserts"),
            A,
            h,
            E,
          ],
          S = /^\s*\n\s*/;
        class F {
          static create(f) {
            let g = this.read(f);
            f = g.text;
            let T = this.read(f);
            return (f = T.text), new F(f, void 0, g.token, T.token);
          }
          constructor(f, g, T, B) {
            (this.text = ""),
              (this.text = f),
              (this.previous = g),
              (this.current = T),
              (this.next = B);
          }
          static read(f, g = !1) {
            (g = g || S.test(f)), (f = f.trim());
            for (let T of D) {
              let B = T(f);
              if (B !== null) {
                let q = Object.assign(Object.assign({}, B), { startOfLine: g });
                return (f = f.slice(q.text.length)), { text: f, token: q };
              }
            }
            throw new Error("Unexpected Token " + f);
          }
          advance() {
            let f = F.read(this.text);
            return new F(f.text, this.current, this.next, f.token);
          }
        }
        function x(s) {
          if (s === void 0) throw new Error("Unexpected undefined");
          if (
            s.type === "JsdocTypeKeyValue" ||
            s.type === "JsdocTypeParameterList" ||
            s.type === "JsdocTypeProperty" ||
            s.type === "JsdocTypeReadonlyProperty" ||
            s.type === "JsdocTypeObjectField" ||
            s.type === "JsdocTypeJsdocObjectField" ||
            s.type === "JsdocTypeIndexSignature" ||
            s.type === "JsdocTypeMappedType"
          )
            throw new o(s);
          return s;
        }
        function O(s) {
          return s.type === "JsdocTypeKeyValue" ? N(s) : x(s);
        }
        function R(s) {
          return s.type === "JsdocTypeName" ? s : N(s);
        }
        function N(s) {
          if (s.type !== "JsdocTypeKeyValue") throw new o(s);
          return s;
        }
        function j(s) {
          var f;
          if (s.type === "JsdocTypeVariadic") {
            if (
              ((f = s.element) === null || f === void 0 ? void 0 : f.type) ===
              "JsdocTypeName"
            )
              return s;
            throw new o(s);
          }
          if (s.type !== "JsdocTypeNumber" && s.type !== "JsdocTypeName")
            throw new o(s);
          return s;
        }
        function U(s) {
          return (
            s.type === "JsdocTypeIndexSignature" ||
            s.type === "JsdocTypeMappedType"
          );
        }
        var P;
        (function (s) {
          (s[(s.ALL = 0)] = "ALL"),
            (s[(s.PARAMETER_LIST = 1)] = "PARAMETER_LIST"),
            (s[(s.OBJECT = 2)] = "OBJECT"),
            (s[(s.KEY_VALUE = 3)] = "KEY_VALUE"),
            (s[(s.INDEX_BRACKETS = 4)] = "INDEX_BRACKETS"),
            (s[(s.UNION = 5)] = "UNION"),
            (s[(s.INTERSECTION = 6)] = "INTERSECTION"),
            (s[(s.PREFIX = 7)] = "PREFIX"),
            (s[(s.INFIX = 8)] = "INFIX"),
            (s[(s.TUPLE = 9)] = "TUPLE"),
            (s[(s.SYMBOL = 10)] = "SYMBOL"),
            (s[(s.OPTIONAL = 11)] = "OPTIONAL"),
            (s[(s.NULLABLE = 12)] = "NULLABLE"),
            (s[(s.KEY_OF_TYPE_OF = 13)] = "KEY_OF_TYPE_OF"),
            (s[(s.FUNCTION = 14)] = "FUNCTION"),
            (s[(s.ARROW = 15)] = "ARROW"),
            (s[(s.ARRAY_BRACKETS = 16)] = "ARRAY_BRACKETS"),
            (s[(s.GENERIC = 17)] = "GENERIC"),
            (s[(s.NAME_PATH = 18)] = "NAME_PATH"),
            (s[(s.PARENTHESIS = 19)] = "PARENTHESIS"),
            (s[(s.SPECIAL_TYPES = 20)] = "SPECIAL_TYPES");
        })(P || (P = {}));
        class K {
          constructor(f, g, T) {
            (this.grammar = f),
              typeof g == "string"
                ? (this._lexer = F.create(g))
                : (this._lexer = g),
              (this.baseParser = T);
          }
          get lexer() {
            return this._lexer;
          }
          parse() {
            let f = this.parseType(P.ALL);
            if (this.lexer.current.type !== "EOF")
              throw new n(this.lexer.current);
            return f;
          }
          parseType(f) {
            return x(this.parseIntermediateType(f));
          }
          parseIntermediateType(f) {
            let g = this.tryParslets(null, f);
            if (g === null) throw new r(this.lexer.current);
            return this.parseInfixIntermediateType(g, f);
          }
          parseInfixIntermediateType(f, g) {
            let T = this.tryParslets(f, g);
            for (; T !== null; ) (f = T), (T = this.tryParslets(f, g));
            return f;
          }
          tryParslets(f, g) {
            for (let T of this.grammar) {
              let B = T(this, g, f);
              if (B !== null) return B;
            }
            return null;
          }
          consume(f) {
            return (
              Array.isArray(f) || (f = [f]),
              f.includes(this.lexer.current.type)
                ? ((this._lexer = this.lexer.advance()), !0)
                : !1
            );
          }
          acceptLexerState(f) {
            this._lexer = f.lexer;
          }
        }
        function L(s) {
          return (
            s === "EOF" || s === "|" || s === "," || s === ")" || s === ">"
          );
        }
        let z = (s, f, g) => {
          let T = s.lexer.current.type,
            B = s.lexer.next.type;
          return (g == null && T === "?" && !L(B)) || (g != null && T === "?")
            ? (s.consume("?"),
              g == null
                ? {
                    type: "JsdocTypeNullable",
                    element: s.parseType(P.NULLABLE),
                    meta: { position: "prefix" },
                  }
                : {
                    type: "JsdocTypeNullable",
                    element: x(g),
                    meta: { position: "suffix" },
                  })
            : null;
        };
        function b(s) {
          let f = (g, T, B) => {
            let q = g.lexer.current.type,
              W = g.lexer.next.type;
            if (B === null) {
              if ("parsePrefix" in s && s.accept(q, W)) return s.parsePrefix(g);
            } else if ("parseInfix" in s && s.precedence > T && s.accept(q, W))
              return s.parseInfix(g, B);
            return null;
          };
          return Object.defineProperty(f, "name", { value: s.name }), f;
        }
        let w = b({
            name: "optionalParslet",
            accept: (s) => s === "=",
            precedence: P.OPTIONAL,
            parsePrefix: (s) => (
              s.consume("="),
              {
                type: "JsdocTypeOptional",
                element: s.parseType(P.OPTIONAL),
                meta: { position: "prefix" },
              }
            ),
            parseInfix: (s, f) => (
              s.consume("="),
              {
                type: "JsdocTypeOptional",
                element: x(f),
                meta: { position: "suffix" },
              }
            ),
          }),
          I = b({
            name: "numberParslet",
            accept: (s) => s === "Number",
            parsePrefix: (s) => {
              let f = parseFloat(s.lexer.current.text);
              return s.consume("Number"), { type: "JsdocTypeNumber", value: f };
            },
          }),
          M = b({
            name: "parenthesisParslet",
            accept: (s) => s === "(",
            parsePrefix: (s) => {
              if ((s.consume("("), s.consume(")")))
                return { type: "JsdocTypeParameterList", elements: [] };
              let f = s.parseIntermediateType(P.ALL);
              if (!s.consume(")")) throw new Error("Unterminated parenthesis");
              return f.type === "JsdocTypeParameterList"
                ? f
                : f.type === "JsdocTypeKeyValue"
                  ? { type: "JsdocTypeParameterList", elements: [f] }
                  : { type: "JsdocTypeParenthesis", element: x(f) };
            },
          }),
          $ = b({
            name: "specialTypesParslet",
            accept: (s, f) =>
              (s === "?" && L(f)) ||
              s === "null" ||
              s === "undefined" ||
              s === "*",
            parsePrefix: (s) => {
              if (s.consume("null")) return { type: "JsdocTypeNull" };
              if (s.consume("undefined")) return { type: "JsdocTypeUndefined" };
              if (s.consume("*")) return { type: "JsdocTypeAny" };
              if (s.consume("?")) return { type: "JsdocTypeUnknown" };
              throw new Error("Unacceptable token: " + s.lexer.current.text);
            },
          }),
          Y = b({
            name: "notNullableParslet",
            accept: (s) => s === "!",
            precedence: P.NULLABLE,
            parsePrefix: (s) => (
              s.consume("!"),
              {
                type: "JsdocTypeNotNullable",
                element: s.parseType(P.NULLABLE),
                meta: { position: "prefix" },
              }
            ),
            parseInfix: (s, f) => (
              s.consume("!"),
              {
                type: "JsdocTypeNotNullable",
                element: x(f),
                meta: { position: "suffix" },
              }
            ),
          });
        function re({ allowTrailingComma: s }) {
          return b({
            name: "parameterListParslet",
            accept: (f) => f === ",",
            precedence: P.PARAMETER_LIST,
            parseInfix: (f, g) => {
              let T = [O(g)];
              f.consume(",");
              do
                try {
                  let B = f.parseIntermediateType(P.PARAMETER_LIST);
                  T.push(O(B));
                } catch (B) {
                  if (s && B instanceof r) break;
                  throw B;
                }
              while (f.consume(","));
              if (
                T.length > 0 &&
                T.slice(0, -1).some((B) => B.type === "JsdocTypeVariadic")
              )
                throw new Error(
                  "Only the last parameter may be a rest parameter",
                );
              return { type: "JsdocTypeParameterList", elements: T };
            },
          });
        }
        let Z = b({
            name: "genericParslet",
            accept: (s, f) => s === "<" || (s === "." && f === "<"),
            precedence: P.GENERIC,
            parseInfix: (s, f) => {
              let g = s.consume(".");
              s.consume("<");
              let T = [];
              do T.push(s.parseType(P.PARAMETER_LIST));
              while (s.consume(","));
              if (!s.consume(">"))
                throw new Error("Unterminated generic parameter list");
              return {
                type: "JsdocTypeGeneric",
                left: x(f),
                elements: T,
                meta: { brackets: "angle", dot: g },
              };
            },
          }),
          X = b({
            name: "unionParslet",
            accept: (s) => s === "|",
            precedence: P.UNION,
            parseInfix: (s, f) => {
              s.consume("|");
              let g = [];
              do g.push(s.parseType(P.UNION));
              while (s.consume("|"));
              return { type: "JsdocTypeUnion", elements: [x(f), ...g] };
            },
          }),
          ee = [z, w, I, M, $, Y, re({ allowTrailingComma: !0 }), Z, X, w];
        function ge({
          allowSquareBracketsOnAnyType: s,
          allowJsdocNamePaths: f,
          pathGrammar: g,
        }) {
          return function (B, q, W) {
            if (W == null || q >= P.NAME_PATH) return null;
            let te = B.lexer.current.type,
              Ce = B.lexer.next.type;
            if (
              !(
                (te === "." && Ce !== "<") ||
                (te === "[" && (s || W.type === "JsdocTypeName")) ||
                (f && (te === "~" || te === "#"))
              )
            )
              return null;
            let _e,
              Ar = !1;
            B.consume(".")
              ? (_e = "property")
              : B.consume("[")
                ? ((_e = "property-brackets"), (Ar = !0))
                : B.consume("~")
                  ? (_e = "inner")
                  : (B.consume("#"), (_e = "instance"));
            let pa = g !== null ? new K(g, B.lexer, B) : B,
              He = pa.parseIntermediateType(P.NAME_PATH);
            B.acceptLexerState(pa);
            let Wt;
            switch (He.type) {
              case "JsdocTypeName":
                Wt = {
                  type: "JsdocTypeProperty",
                  value: He.value,
                  meta: { quote: void 0 },
                };
                break;
              case "JsdocTypeNumber":
                Wt = {
                  type: "JsdocTypeProperty",
                  value: He.value.toString(10),
                  meta: { quote: void 0 },
                };
                break;
              case "JsdocTypeStringValue":
                Wt = {
                  type: "JsdocTypeProperty",
                  value: He.value,
                  meta: { quote: He.meta.quote },
                };
                break;
              case "JsdocTypeSpecialNamePath":
                if (He.specialType === "event") Wt = He;
                else
                  throw new o(
                    He,
                    "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'",
                  );
                break;
              default:
                throw new o(
                  He,
                  "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'",
                );
            }
            if (Ar && !B.consume("]")) {
              let ha = B.lexer.current;
              throw new Error(
                `Unterminated square brackets. Next token is '${ha.type}' with text '${ha.text}'`,
              );
            }
            return {
              type: "JsdocTypeNamePath",
              left: x(W),
              right: Wt,
              pathType: _e,
            };
          };
        }
        function ue({ allowedAdditionalTokens: s }) {
          return b({
            name: "nameParslet",
            accept: (f) =>
              f === "Identifier" ||
              f === "this" ||
              f === "new" ||
              s.includes(f),
            parsePrefix: (f) => {
              let { type: g, text: T } = f.lexer.current;
              return f.consume(g), { type: "JsdocTypeName", value: T };
            },
          });
        }
        let Se = b({
          name: "stringValueParslet",
          accept: (s) => s === "StringValue",
          parsePrefix: (s) => {
            let f = s.lexer.current.text;
            return (
              s.consume("StringValue"),
              {
                type: "JsdocTypeStringValue",
                value: f.slice(1, -1),
                meta: { quote: f[0] === "'" ? "single" : "double" },
              }
            );
          },
        });
        function ne({ pathGrammar: s, allowedTypes: f }) {
          return b({
            name: "specialNamePathParslet",
            accept: (g) => f.includes(g),
            parsePrefix: (g) => {
              let T = g.lexer.current.type;
              if ((g.consume(T), !g.consume(":")))
                return { type: "JsdocTypeName", value: T };
              let B,
                q = g.lexer.current;
              if (g.consume("StringValue"))
                B = {
                  type: "JsdocTypeSpecialNamePath",
                  value: q.text.slice(1, -1),
                  specialType: T,
                  meta: { quote: q.text[0] === "'" ? "single" : "double" },
                };
              else {
                let Ce = "",
                  Ae = ["Identifier", "@", "/"];
                for (; Ae.some((_e) => g.consume(_e)); )
                  (Ce += q.text), (q = g.lexer.current);
                B = {
                  type: "JsdocTypeSpecialNamePath",
                  value: Ce,
                  specialType: T,
                  meta: { quote: void 0 },
                };
              }
              let W = new K(s, g.lexer, g),
                te = W.parseInfixIntermediateType(B, P.ALL);
              return g.acceptLexerState(W), x(te);
            },
          });
        }
        let je = [
            ue({ allowedAdditionalTokens: ["external", "module"] }),
            Se,
            I,
            ge({
              allowSquareBracketsOnAnyType: !1,
              allowJsdocNamePaths: !0,
              pathGrammar: null,
            }),
          ],
          Re = [...je, ne({ allowedTypes: ["event"], pathGrammar: je })];
        function Je(s) {
          let f;
          if (s.type === "JsdocTypeParameterList") f = s.elements;
          else if (s.type === "JsdocTypeParenthesis") f = [s.element];
          else throw new o(s);
          return f.map((g) => O(g));
        }
        function Ht(s) {
          let f = Je(s);
          if (f.some((g) => g.type === "JsdocTypeKeyValue"))
            throw new Error("No parameter should be named");
          return f;
        }
        function Ct({
          allowNamedParameters: s,
          allowNoReturnType: f,
          allowWithoutParenthesis: g,
          allowNewAsFunctionKeyword: T,
        }) {
          return b({
            name: "functionParslet",
            accept: (B, q) =>
              B === "function" || (T && B === "new" && q === "("),
            parsePrefix: (B) => {
              let q = B.consume("new");
              B.consume("function");
              let W = B.lexer.current.type === "(";
              if (!W) {
                if (!g) throw new Error("function is missing parameter list");
                return { type: "JsdocTypeName", value: "function" };
              }
              let te = {
                  type: "JsdocTypeFunction",
                  parameters: [],
                  arrow: !1,
                  constructor: q,
                  parenthesis: W,
                },
                Ce = B.parseIntermediateType(P.FUNCTION);
              if (s === void 0) te.parameters = Ht(Ce);
              else {
                if (q && Ce.type === "JsdocTypeFunction" && Ce.arrow)
                  return (te = Ce), (te.constructor = !0), te;
                te.parameters = Je(Ce);
                for (let Ae of te.parameters)
                  if (Ae.type === "JsdocTypeKeyValue" && !s.includes(Ae.key))
                    throw new Error(
                      `only allowed named parameters are ${s.join(", ")} but got ${Ae.type}`,
                    );
              }
              if (B.consume(":")) te.returnType = B.parseType(P.PREFIX);
              else if (!f) throw new Error("function is missing return type");
              return te;
            },
          });
        }
        function zt({ allowPostfix: s, allowEnclosingBrackets: f }) {
          return b({
            name: "variadicParslet",
            accept: (g) => g === "...",
            precedence: P.PREFIX,
            parsePrefix: (g) => {
              g.consume("...");
              let T = f && g.consume("[");
              try {
                let B = g.parseType(P.PREFIX);
                if (T && !g.consume("]"))
                  throw new Error("Unterminated variadic type. Missing ']'");
                return {
                  type: "JsdocTypeVariadic",
                  element: x(B),
                  meta: { position: "prefix", squareBrackets: T },
                };
              } catch (B) {
                if (B instanceof r) {
                  if (T)
                    throw new Error(
                      "Empty square brackets for variadic are not allowed.",
                    );
                  return {
                    type: "JsdocTypeVariadic",
                    meta: { position: void 0, squareBrackets: !1 },
                  };
                } else throw B;
              }
            },
            parseInfix: s
              ? (g, T) => (
                  g.consume("..."),
                  {
                    type: "JsdocTypeVariadic",
                    element: x(T),
                    meta: { position: "suffix", squareBrackets: !1 },
                  }
                )
              : void 0,
          });
        }
        let br = b({
            name: "symbolParslet",
            accept: (s) => s === "(",
            precedence: P.SYMBOL,
            parseInfix: (s, f) => {
              if (f.type !== "JsdocTypeName")
                throw new Error(
                  "Symbol expects a name on the left side. (Reacting on '(')",
                );
              s.consume("(");
              let g = { type: "JsdocTypeSymbol", value: f.value };
              if (!s.consume(")")) {
                let T = s.parseIntermediateType(P.SYMBOL);
                if (((g.element = j(T)), !s.consume(")")))
                  throw new Error("Symbol does not end after value");
              }
              return g;
            },
          }),
          Fe = b({
            name: "arrayBracketsParslet",
            precedence: P.ARRAY_BRACKETS,
            accept: (s, f) => s === "[" && f === "]",
            parseInfix: (s, f) => (
              s.consume("["),
              s.consume("]"),
              {
                type: "JsdocTypeGeneric",
                left: { type: "JsdocTypeName", value: "Array" },
                elements: [x(f)],
                meta: { brackets: "square", dot: !1 },
              }
            ),
          });
        function Te({ objectFieldGrammar: s, allowKeyTypes: f }) {
          return b({
            name: "objectParslet",
            accept: (g) => g === "{",
            parsePrefix: (g) => {
              g.consume("{");
              let T = {
                type: "JsdocTypeObject",
                meta: { separator: "comma" },
                elements: [],
              };
              if (!g.consume("}")) {
                let B,
                  q = new K(s, g.lexer, g);
                for (;;) {
                  q.acceptLexerState(g);
                  let W = q.parseIntermediateType(P.OBJECT);
                  g.acceptLexerState(q),
                    W === void 0 &&
                      f &&
                      (W = g.parseIntermediateType(P.OBJECT));
                  let te = !1;
                  if (
                    (W.type === "JsdocTypeNullable" &&
                      ((te = !0), (W = W.element)),
                    W.type === "JsdocTypeNumber" ||
                      W.type === "JsdocTypeName" ||
                      W.type === "JsdocTypeStringValue")
                  ) {
                    let Ae;
                    W.type === "JsdocTypeStringValue" && (Ae = W.meta.quote),
                      T.elements.push({
                        type: "JsdocTypeObjectField",
                        key: W.value.toString(),
                        right: void 0,
                        optional: te,
                        readonly: !1,
                        meta: { quote: Ae },
                      });
                  } else if (
                    W.type === "JsdocTypeObjectField" ||
                    W.type === "JsdocTypeJsdocObjectField"
                  )
                    T.elements.push(W);
                  else throw new o(W);
                  if (g.lexer.current.startOfLine) B = "linebreak";
                  else if (g.consume(",")) B = "comma";
                  else if (g.consume(";")) B = "semicolon";
                  else break;
                  if (g.lexer.current.type === "}") break;
                }
                if (((T.meta.separator = B ?? "comma"), !g.consume("}")))
                  throw new Error("Unterminated record type. Missing '}'");
              }
              return T;
            },
          });
        }
        function Xe({
          allowSquaredProperties: s,
          allowKeyTypes: f,
          allowReadonly: g,
          allowOptional: T,
        }) {
          return b({
            name: "objectFieldParslet",
            precedence: P.KEY_VALUE,
            accept: (B) => B === ":",
            parseInfix: (B, q) => {
              var W;
              let te = !1,
                Ce = !1;
              T &&
                q.type === "JsdocTypeNullable" &&
                ((te = !0), (q = q.element)),
                g &&
                  q.type === "JsdocTypeReadonlyProperty" &&
                  ((Ce = !0), (q = q.element));
              let Ae = (W = B.baseParser) !== null && W !== void 0 ? W : B;
              if (
                (Ae.acceptLexerState(B),
                q.type === "JsdocTypeNumber" ||
                  q.type === "JsdocTypeName" ||
                  q.type === "JsdocTypeStringValue" ||
                  U(q))
              ) {
                if (U(q) && !s) throw new o(q);
                Ae.consume(":");
                let _e;
                q.type === "JsdocTypeStringValue" && (_e = q.meta.quote);
                let Ar = Ae.parseType(P.KEY_VALUE);
                return (
                  B.acceptLexerState(Ae),
                  {
                    type: "JsdocTypeObjectField",
                    key: U(q) ? q : q.value.toString(),
                    right: Ar,
                    optional: te,
                    readonly: Ce,
                    meta: { quote: _e },
                  }
                );
              } else {
                if (!f) throw new o(q);
                Ae.consume(":");
                let _e = Ae.parseType(P.KEY_VALUE);
                return (
                  B.acceptLexerState(Ae),
                  { type: "JsdocTypeJsdocObjectField", left: x(q), right: _e }
                );
              }
            },
          });
        }
        function xt({ allowOptional: s, allowVariadic: f }) {
          return b({
            name: "keyValueParslet",
            precedence: P.KEY_VALUE,
            accept: (g) => g === ":",
            parseInfix: (g, T) => {
              let B = !1,
                q = !1;
              if (
                (s &&
                  T.type === "JsdocTypeNullable" &&
                  ((B = !0), (T = T.element)),
                f &&
                  T.type === "JsdocTypeVariadic" &&
                  T.element !== void 0 &&
                  ((q = !0), (T = T.element)),
                T.type !== "JsdocTypeName")
              )
                throw new o(T);
              g.consume(":");
              let W = g.parseType(P.KEY_VALUE);
              return {
                type: "JsdocTypeKeyValue",
                key: T.value,
                right: W,
                optional: B,
                variadic: q,
              };
            },
          });
        }
        let Er = [
            ...ee,
            Ct({
              allowWithoutParenthesis: !0,
              allowNamedParameters: ["this", "new"],
              allowNoReturnType: !0,
              allowNewAsFunctionKeyword: !1,
            }),
            Se,
            ne({
              allowedTypes: ["module", "external", "event"],
              pathGrammar: Re,
            }),
            zt({ allowEnclosingBrackets: !0, allowPostfix: !0 }),
            ue({ allowedAdditionalTokens: ["keyof"] }),
            br,
            Fe,
            ge({
              allowSquareBracketsOnAnyType: !1,
              allowJsdocNamePaths: !0,
              pathGrammar: Re,
            }),
          ],
          pn = [
            ...Er,
            Te({
              objectFieldGrammar: [
                ue({ allowedAdditionalTokens: ["module", "in"] }),
                Xe({
                  allowSquaredProperties: !1,
                  allowKeyTypes: !0,
                  allowOptional: !1,
                  allowReadonly: !1,
                }),
                ...Er,
              ],
              allowKeyTypes: !0,
            }),
            xt({ allowOptional: !0, allowVariadic: !0 }),
          ],
          sa = b({
            name: "typeOfParslet",
            accept: (s) => s === "typeof",
            parsePrefix: (s) => (
              s.consume("typeof"),
              {
                type: "JsdocTypeTypeof",
                element: x(s.parseType(P.KEY_OF_TYPE_OF)),
              }
            ),
          }),
          Sc = [
            ue({
              allowedAdditionalTokens: [
                "module",
                "keyof",
                "event",
                "external",
                "in",
              ],
            }),
            z,
            w,
            Se,
            I,
            Xe({
              allowSquaredProperties: !1,
              allowKeyTypes: !1,
              allowOptional: !1,
              allowReadonly: !1,
            }),
          ],
          wc = [
            ...ee,
            Te({ allowKeyTypes: !1, objectFieldGrammar: Sc }),
            ue({ allowedAdditionalTokens: ["event", "external", "in"] }),
            sa,
            Ct({
              allowWithoutParenthesis: !1,
              allowNamedParameters: ["this", "new"],
              allowNoReturnType: !0,
              allowNewAsFunctionKeyword: !1,
            }),
            zt({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
            ue({ allowedAdditionalTokens: ["keyof"] }),
            ne({ allowedTypes: ["module"], pathGrammar: Re }),
            ge({
              allowSquareBracketsOnAnyType: !1,
              allowJsdocNamePaths: !0,
              pathGrammar: Re,
            }),
            xt({ allowOptional: !1, allowVariadic: !1 }),
            br,
          ],
          Cc = b({
            name: "assertsParslet",
            accept: (s) => s === "asserts",
            parsePrefix: (s) => {
              s.consume("asserts");
              let f = s.parseIntermediateType(P.SYMBOL);
              if (f.type !== "JsdocTypeName")
                throw new o(
                  f,
                  "A typescript asserts always has to have a name on the left side.",
                );
              return (
                s.consume("is"),
                {
                  type: "JsdocTypeAsserts",
                  left: f,
                  right: x(s.parseIntermediateType(P.INFIX)),
                }
              );
            },
          });
        function xc({ allowQuestionMark: s }) {
          return b({
            name: "tupleParslet",
            accept: (f) => f === "[",
            parsePrefix: (f) => {
              f.consume("[");
              let g = { type: "JsdocTypeTuple", elements: [] };
              if (f.consume("]")) return g;
              let T = f.parseIntermediateType(P.ALL);
              if (
                (T.type === "JsdocTypeParameterList"
                  ? T.elements[0].type === "JsdocTypeKeyValue"
                    ? (g.elements = T.elements.map(N))
                    : (g.elements = T.elements.map(x))
                  : T.type === "JsdocTypeKeyValue"
                    ? (g.elements = [N(T)])
                    : (g.elements = [x(T)]),
                !f.consume("]"))
              )
                throw new Error("Unterminated '['");
              if (!s && g.elements.some((B) => B.type === "JsdocTypeUnknown"))
                throw new Error("Question mark in tuple not allowed");
              return g;
            },
          });
        }
        let Tc = b({
            name: "keyOfParslet",
            accept: (s) => s === "keyof",
            parsePrefix: (s) => (
              s.consume("keyof"),
              {
                type: "JsdocTypeKeyof",
                element: x(s.parseType(P.KEY_OF_TYPE_OF)),
              }
            ),
          }),
          Fc = b({
            name: "importParslet",
            accept: (s) => s === "import",
            parsePrefix: (s) => {
              if ((s.consume("import"), !s.consume("(")))
                throw new Error("Missing parenthesis after import keyword");
              let f = s.parseType(P.PREFIX);
              if (f.type !== "JsdocTypeStringValue")
                throw new Error(
                  "Only string values are allowed as paths for imports",
                );
              if (!s.consume(")"))
                throw new Error(
                  "Missing closing parenthesis after import keyword",
                );
              return { type: "JsdocTypeImport", element: f };
            },
          }),
          Ic = b({
            name: "readonlyPropertyParslet",
            accept: (s) => s === "readonly",
            parsePrefix: (s) => (
              s.consume("readonly"),
              {
                type: "JsdocTypeReadonlyProperty",
                element: s.parseType(P.KEY_VALUE),
              }
            ),
          }),
          kc = b({
            name: "arrowFunctionParslet",
            precedence: P.ARROW,
            accept: (s) => s === "=>",
            parseInfix: (s, f) => (
              s.consume("=>"),
              {
                type: "JsdocTypeFunction",
                parameters: Je(f).map(R),
                arrow: !0,
                constructor: !1,
                parenthesis: !0,
                returnType: s.parseType(P.OBJECT),
              }
            ),
          }),
          Rc = b({
            name: "intersectionParslet",
            accept: (s) => s === "&",
            precedence: P.INTERSECTION,
            parseInfix: (s, f) => {
              s.consume("&");
              let g = [];
              do g.push(s.parseType(P.INTERSECTION));
              while (s.consume("&"));
              return { type: "JsdocTypeIntersection", elements: [x(f), ...g] };
            },
          }),
          Oc = b({
            name: "predicateParslet",
            precedence: P.INFIX,
            accept: (s) => s === "is",
            parseInfix: (s, f) => {
              if (f.type !== "JsdocTypeName")
                throw new o(
                  f,
                  "A typescript predicate always has to have a name on the left side.",
                );
              return (
                s.consume("is"),
                {
                  type: "JsdocTypePredicate",
                  left: f,
                  right: x(s.parseIntermediateType(P.INFIX)),
                }
              );
            },
          }),
          _c = b({
            name: "objectSquareBracketPropertyParslet",
            accept: (s) => s === "[",
            parsePrefix: (s) => {
              if (s.baseParser === void 0)
                throw new Error("Only allowed inside object grammar");
              s.consume("[");
              let f = s.lexer.current.text;
              s.consume("Identifier");
              let g;
              if (s.consume(":")) {
                let T = s.baseParser;
                T.acceptLexerState(s),
                  (g = {
                    type: "JsdocTypeIndexSignature",
                    key: f,
                    right: T.parseType(P.INDEX_BRACKETS),
                  }),
                  s.acceptLexerState(T);
              } else if (s.consume("in")) {
                let T = s.baseParser;
                T.acceptLexerState(s),
                  (g = {
                    type: "JsdocTypeMappedType",
                    key: f,
                    right: T.parseType(P.ARRAY_BRACKETS),
                  }),
                  s.acceptLexerState(T);
              } else
                throw new Error(
                  "Missing ':' or 'in' inside square bracketed property.",
                );
              if (!s.consume("]"))
                throw new Error("Unterminated square brackets");
              return g;
            },
          }),
          Pc = [
            Ic,
            ue({
              allowedAdditionalTokens: [
                "module",
                "event",
                "keyof",
                "event",
                "external",
                "in",
              ],
            }),
            z,
            w,
            Se,
            I,
            Xe({
              allowSquaredProperties: !0,
              allowKeyTypes: !1,
              allowOptional: !0,
              allowReadonly: !0,
            }),
            _c,
          ],
          Bc = [
            ...ee,
            Te({ allowKeyTypes: !1, objectFieldGrammar: Pc }),
            sa,
            Tc,
            Fc,
            Se,
            Ct({
              allowWithoutParenthesis: !0,
              allowNoReturnType: !1,
              allowNamedParameters: ["this", "new", "args"],
              allowNewAsFunctionKeyword: !0,
            }),
            xc({ allowQuestionMark: !1 }),
            zt({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
            Cc,
            ue({ allowedAdditionalTokens: ["event", "external", "in"] }),
            ne({ allowedTypes: ["module"], pathGrammar: Re }),
            Fe,
            kc,
            ge({
              allowSquareBracketsOnAnyType: !0,
              allowJsdocNamePaths: !1,
              pathGrammar: Re,
            }),
            Rc,
            Oc,
            xt({ allowVariadic: !0, allowOptional: !0 }),
          ];
        function la(s, f) {
          switch (f) {
            case "closure":
              return new K(wc, s).parse();
            case "jsdoc":
              return new K(pn, s).parse();
            case "typescript":
              return new K(Bc, s).parse();
          }
        }
        function Nc(s, f = ["typescript", "closure", "jsdoc"]) {
          let g;
          for (let T of f)
            try {
              return la(s, T);
            } catch (B) {
              g = B;
            }
          throw g;
        }
        function Gt(s, f) {
          let g = s[f.type];
          if (g === void 0)
            throw new Error(
              `In this set of transform rules exists no rule for type ${f.type}.`,
            );
          return g(f, (T) => Gt(s, T));
        }
        function we(s) {
          throw new Error(
            "This transform is not available. Are you trying the correct parsing mode?",
          );
        }
        function ua(s) {
          let f = { params: [] };
          for (let g of s.parameters)
            g.type === "JsdocTypeKeyValue"
              ? g.key === "this"
                ? (f.this = g.right)
                : g.key === "new"
                  ? (f.new = g.right)
                  : f.params.push(g)
              : f.params.push(g);
          return f;
        }
        function vr(s, f, g) {
          return s === "prefix" ? g + f : f + g;
        }
        function Qe(s, f) {
          switch (f) {
            case "double":
              return `"${s}"`;
            case "single":
              return `'${s}'`;
            case void 0:
              return s;
          }
        }
        function ca() {
          return {
            JsdocTypeParenthesis: (s, f) =>
              `(${s.element !== void 0 ? f(s.element) : ""})`,
            JsdocTypeKeyof: (s, f) => `keyof ${f(s.element)}`,
            JsdocTypeFunction: (s, f) => {
              if (s.arrow) {
                if (s.returnType === void 0)
                  throw new Error("Arrow function needs a return type.");
                let g = `(${s.parameters.map(f).join(", ")}) => ${f(s.returnType)}`;
                return s.constructor && (g = "new " + g), g;
              } else {
                let g = s.constructor ? "new" : "function";
                return (
                  s.parenthesis &&
                    ((g += `(${s.parameters.map(f).join(", ")})`),
                    s.returnType !== void 0 && (g += `: ${f(s.returnType)}`)),
                  g
                );
              }
            },
            JsdocTypeName: (s) => s.value,
            JsdocTypeTuple: (s, f) => `[${s.elements.map(f).join(", ")}]`,
            JsdocTypeVariadic: (s, f) =>
              s.meta.position === void 0
                ? "..."
                : vr(s.meta.position, f(s.element), "..."),
            JsdocTypeNamePath: (s, f) => {
              let g = f(s.left),
                T = f(s.right);
              switch (s.pathType) {
                case "inner":
                  return `${g}~${T}`;
                case "instance":
                  return `${g}#${T}`;
                case "property":
                  return `${g}.${T}`;
                case "property-brackets":
                  return `${g}[${T}]`;
              }
            },
            JsdocTypeStringValue: (s) => Qe(s.value, s.meta.quote),
            JsdocTypeAny: () => "*",
            JsdocTypeGeneric: (s, f) => {
              if (s.meta.brackets === "square") {
                let g = s.elements[0],
                  T = f(g);
                return g.type === "JsdocTypeUnion" ||
                  g.type === "JsdocTypeIntersection"
                  ? `(${T})[]`
                  : `${T}[]`;
              } else
                return `${f(s.left)}${s.meta.dot ? "." : ""}<${s.elements.map(f).join(", ")}>`;
            },
            JsdocTypeImport: (s, f) => `import(${f(s.element)})`,
            JsdocTypeObjectField: (s, f) => {
              let g = "";
              return (
                s.readonly && (g += "readonly "),
                typeof s.key == "string"
                  ? (g += Qe(s.key, s.meta.quote))
                  : (g += f(s.key)),
                s.optional && (g += "?"),
                s.right === void 0 ? g : g + `: ${f(s.right)}`
              );
            },
            JsdocTypeJsdocObjectField: (s, f) => `${f(s.left)}: ${f(s.right)}`,
            JsdocTypeKeyValue: (s, f) => {
              let g = s.key;
              return (
                s.optional && (g += "?"),
                s.variadic && (g = "..." + g),
                s.right === void 0 ? g : g + `: ${f(s.right)}`
              );
            },
            JsdocTypeSpecialNamePath: (s) =>
              `${s.specialType}:${Qe(s.value, s.meta.quote)}`,
            JsdocTypeNotNullable: (s, f) =>
              vr(s.meta.position, f(s.element), "!"),
            JsdocTypeNull: () => "null",
            JsdocTypeNullable: (s, f) => vr(s.meta.position, f(s.element), "?"),
            JsdocTypeNumber: (s) => s.value.toString(),
            JsdocTypeObject: (s, f) =>
              `{${s.elements.map(f).join((s.meta.separator === "comma" ? "," : ";") + " ")}}`,
            JsdocTypeOptional: (s, f) => vr(s.meta.position, f(s.element), "="),
            JsdocTypeSymbol: (s, f) =>
              `${s.value}(${s.element !== void 0 ? f(s.element) : ""})`,
            JsdocTypeTypeof: (s, f) => `typeof ${f(s.element)}`,
            JsdocTypeUndefined: () => "undefined",
            JsdocTypeUnion: (s, f) => s.elements.map(f).join(" | "),
            JsdocTypeUnknown: () => "?",
            JsdocTypeIntersection: (s, f) => s.elements.map(f).join(" & "),
            JsdocTypeProperty: (s) => Qe(s.value, s.meta.quote),
            JsdocTypePredicate: (s, f) => `${f(s.left)} is ${f(s.right)}`,
            JsdocTypeIndexSignature: (s, f) => `[${s.key}: ${f(s.right)}]`,
            JsdocTypeMappedType: (s, f) => `[${s.key} in ${f(s.right)}]`,
            JsdocTypeAsserts: (s, f) => `asserts ${f(s.left)} is ${f(s.right)}`,
          };
        }
        let jc = ca();
        function Lc(s) {
          return Gt(jc, s);
        }
        let Mc = [
          "null",
          "true",
          "false",
          "break",
          "case",
          "catch",
          "class",
          "const",
          "continue",
          "debugger",
          "default",
          "delete",
          "do",
          "else",
          "export",
          "extends",
          "finally",
          "for",
          "function",
          "if",
          "import",
          "in",
          "instanceof",
          "new",
          "return",
          "super",
          "switch",
          "this",
          "throw",
          "try",
          "typeof",
          "var",
          "void",
          "while",
          "with",
          "yield",
        ];
        function Ze(s) {
          let f = { type: "NameExpression", name: s };
          return Mc.includes(s) && (f.reservedWord = !0), f;
        }
        let Uc = {
          JsdocTypeOptional: (s, f) => {
            let g = f(s.element);
            return (g.optional = !0), g;
          },
          JsdocTypeNullable: (s, f) => {
            let g = f(s.element);
            return (g.nullable = !0), g;
          },
          JsdocTypeNotNullable: (s, f) => {
            let g = f(s.element);
            return (g.nullable = !1), g;
          },
          JsdocTypeVariadic: (s, f) => {
            if (s.element === void 0)
              throw new Error(
                "dots without value are not allowed in catharsis mode",
              );
            let g = f(s.element);
            return (g.repeatable = !0), g;
          },
          JsdocTypeAny: () => ({ type: "AllLiteral" }),
          JsdocTypeNull: () => ({ type: "NullLiteral" }),
          JsdocTypeStringValue: (s) => Ze(Qe(s.value, s.meta.quote)),
          JsdocTypeUndefined: () => ({ type: "UndefinedLiteral" }),
          JsdocTypeUnknown: () => ({ type: "UnknownLiteral" }),
          JsdocTypeFunction: (s, f) => {
            let g = ua(s),
              T = { type: "FunctionType", params: g.params.map(f) };
            return (
              g.this !== void 0 && (T.this = f(g.this)),
              g.new !== void 0 && (T.new = f(g.new)),
              s.returnType !== void 0 && (T.result = f(s.returnType)),
              T
            );
          },
          JsdocTypeGeneric: (s, f) => ({
            type: "TypeApplication",
            applications: s.elements.map((g) => f(g)),
            expression: f(s.left),
          }),
          JsdocTypeSpecialNamePath: (s) =>
            Ze(s.specialType + ":" + Qe(s.value, s.meta.quote)),
          JsdocTypeName: (s) =>
            s.value !== "function"
              ? Ze(s.value)
              : { type: "FunctionType", params: [] },
          JsdocTypeNumber: (s) => Ze(s.value.toString()),
          JsdocTypeObject: (s, f) => {
            let g = { type: "RecordType", fields: [] };
            for (let T of s.elements)
              T.type !== "JsdocTypeObjectField" &&
              T.type !== "JsdocTypeJsdocObjectField"
                ? g.fields.push({ type: "FieldType", key: f(T), value: void 0 })
                : g.fields.push(f(T));
            return g;
          },
          JsdocTypeObjectField: (s, f) => {
            if (typeof s.key != "string")
              throw new Error(
                "Index signatures and mapped types are not supported",
              );
            return {
              type: "FieldType",
              key: Ze(Qe(s.key, s.meta.quote)),
              value: s.right === void 0 ? void 0 : f(s.right),
            };
          },
          JsdocTypeJsdocObjectField: (s, f) => ({
            type: "FieldType",
            key: f(s.left),
            value: f(s.right),
          }),
          JsdocTypeUnion: (s, f) => ({
            type: "TypeUnion",
            elements: s.elements.map((g) => f(g)),
          }),
          JsdocTypeKeyValue: (s, f) => ({
            type: "FieldType",
            key: Ze(s.key),
            value: s.right === void 0 ? void 0 : f(s.right),
          }),
          JsdocTypeNamePath: (s, f) => {
            let g = f(s.left),
              T;
            s.right.type === "JsdocTypeSpecialNamePath"
              ? (T = f(s.right).name)
              : (T = Qe(s.right.value, s.right.meta.quote));
            let B =
              s.pathType === "inner"
                ? "~"
                : s.pathType === "instance"
                  ? "#"
                  : ".";
            return Ze(`${g.name}${B}${T}`);
          },
          JsdocTypeSymbol: (s) => {
            let f = "",
              g = s.element,
              T = !1;
            return (
              g?.type === "JsdocTypeVariadic" &&
                (g.meta.position === "prefix" ? (f = "...") : (T = !0),
                (g = g.element)),
              g?.type === "JsdocTypeName"
                ? (f += g.value)
                : g?.type === "JsdocTypeNumber" && (f += g.value.toString()),
              T && (f += "..."),
              Ze(`${s.value}(${f})`)
            );
          },
          JsdocTypeParenthesis: (s, f) => f(x(s.element)),
          JsdocTypeMappedType: we,
          JsdocTypeIndexSignature: we,
          JsdocTypeImport: we,
          JsdocTypeKeyof: we,
          JsdocTypeTuple: we,
          JsdocTypeTypeof: we,
          JsdocTypeIntersection: we,
          JsdocTypeProperty: we,
          JsdocTypePredicate: we,
          JsdocTypeAsserts: we,
        };
        function $c(s) {
          return Gt(Uc, s);
        }
        function pt(s) {
          switch (s) {
            case void 0:
              return "none";
            case "single":
              return "single";
            case "double":
              return "double";
          }
        }
        function qc(s) {
          switch (s) {
            case "inner":
              return "INNER_MEMBER";
            case "instance":
              return "INSTANCE_MEMBER";
            case "property":
              return "MEMBER";
            case "property-brackets":
              return "MEMBER";
          }
        }
        function hn(s, f) {
          return f.length === 2
            ? { type: s, left: f[0], right: f[1] }
            : { type: s, left: f[0], right: hn(s, f.slice(1)) };
        }
        let Vc = {
          JsdocTypeOptional: (s, f) => ({
            type: "OPTIONAL",
            value: f(s.element),
            meta: {
              syntax:
                s.meta.position === "prefix"
                  ? "PREFIX_EQUAL_SIGN"
                  : "SUFFIX_EQUALS_SIGN",
            },
          }),
          JsdocTypeNullable: (s, f) => ({
            type: "NULLABLE",
            value: f(s.element),
            meta: {
              syntax:
                s.meta.position === "prefix"
                  ? "PREFIX_QUESTION_MARK"
                  : "SUFFIX_QUESTION_MARK",
            },
          }),
          JsdocTypeNotNullable: (s, f) => ({
            type: "NOT_NULLABLE",
            value: f(s.element),
            meta: {
              syntax:
                s.meta.position === "prefix" ? "PREFIX_BANG" : "SUFFIX_BANG",
            },
          }),
          JsdocTypeVariadic: (s, f) => {
            let g = {
              type: "VARIADIC",
              meta: {
                syntax:
                  s.meta.position === "prefix"
                    ? "PREFIX_DOTS"
                    : s.meta.position === "suffix"
                      ? "SUFFIX_DOTS"
                      : "ONLY_DOTS",
              },
            };
            return s.element !== void 0 && (g.value = f(s.element)), g;
          },
          JsdocTypeName: (s) => ({ type: "NAME", name: s.value }),
          JsdocTypeTypeof: (s, f) => ({
            type: "TYPE_QUERY",
            name: f(s.element),
          }),
          JsdocTypeTuple: (s, f) => ({
            type: "TUPLE",
            entries: s.elements.map(f),
          }),
          JsdocTypeKeyof: (s, f) => ({
            type: "KEY_QUERY",
            value: f(s.element),
          }),
          JsdocTypeImport: (s) => ({
            type: "IMPORT",
            path: {
              type: "STRING_VALUE",
              quoteStyle: pt(s.element.meta.quote),
              string: s.element.value,
            },
          }),
          JsdocTypeUndefined: () => ({ type: "NAME", name: "undefined" }),
          JsdocTypeAny: () => ({ type: "ANY" }),
          JsdocTypeFunction: (s, f) => {
            let g = ua(s),
              T = {
                type: s.arrow ? "ARROW" : "FUNCTION",
                params: g.params.map((B) => {
                  if (B.type === "JsdocTypeKeyValue") {
                    if (B.right === void 0)
                      throw new Error(
                        "Function parameter without ':' is not expected to be 'KEY_VALUE'",
                      );
                    return {
                      type: "NAMED_PARAMETER",
                      name: B.key,
                      typeName: f(B.right),
                    };
                  } else return f(B);
                }),
                new: null,
                returns: null,
              };
            return (
              g.this !== void 0
                ? (T.this = f(g.this))
                : s.arrow || (T.this = null),
              g.new !== void 0 && (T.new = f(g.new)),
              s.returnType !== void 0 && (T.returns = f(s.returnType)),
              T
            );
          },
          JsdocTypeGeneric: (s, f) => {
            let g = {
              type: "GENERIC",
              subject: f(s.left),
              objects: s.elements.map(f),
              meta: {
                syntax:
                  s.meta.brackets === "square"
                    ? "SQUARE_BRACKET"
                    : s.meta.dot
                      ? "ANGLE_BRACKET_WITH_DOT"
                      : "ANGLE_BRACKET",
              },
            };
            return (
              s.meta.brackets === "square" &&
                s.elements[0].type === "JsdocTypeFunction" &&
                !s.elements[0].parenthesis &&
                (g.objects[0] = { type: "NAME", name: "function" }),
              g
            );
          },
          JsdocTypeObjectField: (s, f) => {
            if (typeof s.key != "string")
              throw new Error(
                "Index signatures and mapped types are not supported",
              );
            if (s.right === void 0)
              return {
                type: "RECORD_ENTRY",
                key: s.key,
                quoteStyle: pt(s.meta.quote),
                value: null,
                readonly: !1,
              };
            let g = f(s.right);
            return (
              s.optional &&
                (g = {
                  type: "OPTIONAL",
                  value: g,
                  meta: { syntax: "SUFFIX_KEY_QUESTION_MARK" },
                }),
              {
                type: "RECORD_ENTRY",
                key: s.key.toString(),
                quoteStyle: pt(s.meta.quote),
                value: g,
                readonly: !1,
              }
            );
          },
          JsdocTypeJsdocObjectField: () => {
            throw new Error("Keys may not be typed in jsdoctypeparser.");
          },
          JsdocTypeKeyValue: (s, f) => {
            if (s.right === void 0)
              return {
                type: "RECORD_ENTRY",
                key: s.key,
                quoteStyle: "none",
                value: null,
                readonly: !1,
              };
            let g = f(s.right);
            return (
              s.optional &&
                (g = {
                  type: "OPTIONAL",
                  value: g,
                  meta: { syntax: "SUFFIX_KEY_QUESTION_MARK" },
                }),
              {
                type: "RECORD_ENTRY",
                key: s.key,
                quoteStyle: "none",
                value: g,
                readonly: !1,
              }
            );
          },
          JsdocTypeObject: (s, f) => {
            let g = [];
            for (let T of s.elements)
              (T.type === "JsdocTypeObjectField" ||
                T.type === "JsdocTypeJsdocObjectField") &&
                g.push(f(T));
            return { type: "RECORD", entries: g };
          },
          JsdocTypeSpecialNamePath: (s) => {
            if (s.specialType !== "module")
              throw new Error(
                `jsdoctypeparser does not support type ${s.specialType} at this point.`,
              );
            return {
              type: "MODULE",
              value: {
                type: "FILE_PATH",
                quoteStyle: pt(s.meta.quote),
                path: s.value,
              },
            };
          },
          JsdocTypeNamePath: (s, f) => {
            let g = !1,
              T,
              B;
            s.right.type === "JsdocTypeSpecialNamePath" &&
            s.right.specialType === "event"
              ? ((g = !0), (T = s.right.value), (B = pt(s.right.meta.quote)))
              : ((T = s.right.value), (B = pt(s.right.meta.quote)));
            let q = {
              type: qc(s.pathType),
              owner: f(s.left),
              name: T,
              quoteStyle: B,
              hasEventPrefix: g,
            };
            if (q.owner.type === "MODULE") {
              let W = q.owner;
              return (q.owner = q.owner.value), (W.value = q), W;
            } else return q;
          },
          JsdocTypeUnion: (s, f) => hn("UNION", s.elements.map(f)),
          JsdocTypeParenthesis: (s, f) => ({
            type: "PARENTHESIS",
            value: f(x(s.element)),
          }),
          JsdocTypeNull: () => ({ type: "NAME", name: "null" }),
          JsdocTypeUnknown: () => ({ type: "UNKNOWN" }),
          JsdocTypeStringValue: (s) => ({
            type: "STRING_VALUE",
            quoteStyle: pt(s.meta.quote),
            string: s.value,
          }),
          JsdocTypeIntersection: (s, f) =>
            hn("INTERSECTION", s.elements.map(f)),
          JsdocTypeNumber: (s) => ({
            type: "NUMBER_VALUE",
            number: s.value.toString(),
          }),
          JsdocTypeSymbol: we,
          JsdocTypeProperty: we,
          JsdocTypePredicate: we,
          JsdocTypeMappedType: we,
          JsdocTypeIndexSignature: we,
          JsdocTypeAsserts: we,
        };
        function Jc(s) {
          return Gt(Vc, s);
        }
        function Hc() {
          return {
            JsdocTypeIntersection: (s, f) => ({
              type: "JsdocTypeIntersection",
              elements: s.elements.map(f),
            }),
            JsdocTypeGeneric: (s, f) => ({
              type: "JsdocTypeGeneric",
              left: f(s.left),
              elements: s.elements.map(f),
              meta: { dot: s.meta.dot, brackets: s.meta.brackets },
            }),
            JsdocTypeNullable: (s) => s,
            JsdocTypeUnion: (s, f) => ({
              type: "JsdocTypeUnion",
              elements: s.elements.map(f),
            }),
            JsdocTypeUnknown: (s) => s,
            JsdocTypeUndefined: (s) => s,
            JsdocTypeTypeof: (s, f) => ({
              type: "JsdocTypeTypeof",
              element: f(s.element),
            }),
            JsdocTypeSymbol: (s, f) => {
              let g = { type: "JsdocTypeSymbol", value: s.value };
              return s.element !== void 0 && (g.element = f(s.element)), g;
            },
            JsdocTypeOptional: (s, f) => ({
              type: "JsdocTypeOptional",
              element: f(s.element),
              meta: { position: s.meta.position },
            }),
            JsdocTypeObject: (s, f) => ({
              type: "JsdocTypeObject",
              meta: { separator: "comma" },
              elements: s.elements.map(f),
            }),
            JsdocTypeNumber: (s) => s,
            JsdocTypeNull: (s) => s,
            JsdocTypeNotNullable: (s, f) => ({
              type: "JsdocTypeNotNullable",
              element: f(s.element),
              meta: { position: s.meta.position },
            }),
            JsdocTypeSpecialNamePath: (s) => s,
            JsdocTypeObjectField: (s, f) => ({
              type: "JsdocTypeObjectField",
              key: s.key,
              right: s.right === void 0 ? void 0 : f(s.right),
              optional: s.optional,
              readonly: s.readonly,
              meta: s.meta,
            }),
            JsdocTypeJsdocObjectField: (s, f) => ({
              type: "JsdocTypeJsdocObjectField",
              left: f(s.left),
              right: f(s.right),
            }),
            JsdocTypeKeyValue: (s, f) => ({
              type: "JsdocTypeKeyValue",
              key: s.key,
              right: s.right === void 0 ? void 0 : f(s.right),
              optional: s.optional,
              variadic: s.variadic,
            }),
            JsdocTypeImport: (s, f) => ({
              type: "JsdocTypeImport",
              element: f(s.element),
            }),
            JsdocTypeAny: (s) => s,
            JsdocTypeStringValue: (s) => s,
            JsdocTypeNamePath: (s) => s,
            JsdocTypeVariadic: (s, f) => {
              let g = {
                type: "JsdocTypeVariadic",
                meta: {
                  position: s.meta.position,
                  squareBrackets: s.meta.squareBrackets,
                },
              };
              return s.element !== void 0 && (g.element = f(s.element)), g;
            },
            JsdocTypeTuple: (s, f) => ({
              type: "JsdocTypeTuple",
              elements: s.elements.map(f),
            }),
            JsdocTypeName: (s) => s,
            JsdocTypeFunction: (s, f) => {
              let g = {
                type: "JsdocTypeFunction",
                arrow: s.arrow,
                parameters: s.parameters.map(f),
                constructor: s.constructor,
                parenthesis: s.parenthesis,
              };
              return (
                s.returnType !== void 0 && (g.returnType = f(s.returnType)), g
              );
            },
            JsdocTypeKeyof: (s, f) => ({
              type: "JsdocTypeKeyof",
              element: f(s.element),
            }),
            JsdocTypeParenthesis: (s, f) => ({
              type: "JsdocTypeParenthesis",
              element: f(s.element),
            }),
            JsdocTypeProperty: (s) => s,
            JsdocTypePredicate: (s, f) => ({
              type: "JsdocTypePredicate",
              left: f(s.left),
              right: f(s.right),
            }),
            JsdocTypeIndexSignature: (s, f) => ({
              type: "JsdocTypeIndexSignature",
              key: s.key,
              right: f(s.right),
            }),
            JsdocTypeMappedType: (s, f) => ({
              type: "JsdocTypeMappedType",
              key: s.key,
              right: f(s.right),
            }),
            JsdocTypeAsserts: (s, f) => ({
              type: "JsdocTypeAsserts",
              left: f(s.left),
              right: f(s.right),
            }),
          };
        }
        let da = {
          JsdocTypeAny: [],
          JsdocTypeFunction: ["parameters", "returnType"],
          JsdocTypeGeneric: ["left", "elements"],
          JsdocTypeImport: [],
          JsdocTypeIndexSignature: ["right"],
          JsdocTypeIntersection: ["elements"],
          JsdocTypeKeyof: ["element"],
          JsdocTypeKeyValue: ["right"],
          JsdocTypeMappedType: ["right"],
          JsdocTypeName: [],
          JsdocTypeNamePath: ["left", "right"],
          JsdocTypeNotNullable: ["element"],
          JsdocTypeNull: [],
          JsdocTypeNullable: ["element"],
          JsdocTypeNumber: [],
          JsdocTypeObject: ["elements"],
          JsdocTypeObjectField: ["right"],
          JsdocTypeJsdocObjectField: ["left", "right"],
          JsdocTypeOptional: ["element"],
          JsdocTypeParenthesis: ["element"],
          JsdocTypeSpecialNamePath: [],
          JsdocTypeStringValue: [],
          JsdocTypeSymbol: ["element"],
          JsdocTypeTuple: ["elements"],
          JsdocTypeTypeof: ["element"],
          JsdocTypeUndefined: [],
          JsdocTypeUnion: ["elements"],
          JsdocTypeUnknown: [],
          JsdocTypeVariadic: ["element"],
          JsdocTypeProperty: [],
          JsdocTypePredicate: ["left", "right"],
          JsdocTypeAsserts: ["left", "right"],
        };
        function fn(s, f, g, T, B) {
          T?.(s, f, g);
          let q = da[s.type];
          for (let W of q) {
            let te = s[W];
            if (te !== void 0)
              if (Array.isArray(te)) for (let Ce of te) fn(Ce, s, W, T, B);
              else fn(te, s, W, T, B);
          }
          B?.(s, f, g);
        }
        function zc(s, f, g) {
          fn(s, void 0, void 0, f, g);
        }
        (e.catharsisTransform = $c),
          (e.identityTransformRules = Hc),
          (e.jtpTransform = Jc),
          (e.parse = la),
          (e.stringify = Lc),
          (e.stringifyRules = ca),
          (e.transform = Gt),
          (e.traverse = zc),
          (e.tryParse = Nc),
          (e.visitorKeys = da);
      });
    });
    var vA,
      AA,
      DA,
      SA,
      ru,
      wA,
      CA,
      nu,
      xA,
      TA,
      FA,
      IA,
      kA,
      RA,
      Lf,
      zr,
      OA,
      _A,
      PA,
      BA,
      k,
      Ro,
      NA,
      Gr,
      jA,
      Wr = ze(() => {
        V();
        J();
        H();
        (vA = __STORYBOOK_THEMING__),
          ({
            CacheProvider: AA,
            ClassNames: DA,
            Global: SA,
            ThemeProvider: ru,
            background: wA,
            color: CA,
            convert: nu,
            create: xA,
            createCache: TA,
            createGlobal: FA,
            createReset: IA,
            css: kA,
            darken: RA,
            ensure: Lf,
            ignoreSsrWarning: zr,
            isPropValid: OA,
            jsx: _A,
            keyframes: PA,
            lighten: BA,
            styled: k,
            themes: Ro,
            typography: NA,
            useTheme: Gr,
            withTheme: jA,
          } = __STORYBOOK_THEMING__);
      });
    function Jf(e, t, { signal: r, edges: n } = {}) {
      let o,
        i = null,
        a = n != null && n.includes("leading"),
        l = n == null || n.includes("trailing"),
        u = () => {
          i !== null && (e.apply(o, i), (o = void 0), (i = null));
        },
        c = () => {
          l && u(), y();
        },
        d = null,
        p = () => {
          d != null && clearTimeout(d),
            (d = setTimeout(() => {
              (d = null), c();
            }, t));
        },
        h = () => {
          d !== null && (clearTimeout(d), (d = null));
        },
        y = () => {
          h(), (o = void 0), (i = null);
        },
        E = () => {
          h(), u();
        },
        v = function (...A) {
          if (r?.aborted) return;
          (o = this), (i = A);
          let D = d == null;
          p(), a && D && u();
        };
      return (
        (v.schedule = p),
        (v.cancel = y),
        (v.flush = E),
        r?.addEventListener("abort", y, { once: !0 }),
        v
      );
    }
    function iu(e, t = 0, r = {}) {
      typeof r != "object" && (r = {});
      let { signal: n, leading: o = !1, trailing: i = !0, maxWait: a } = r,
        l = Array(2);
      o && (l[0] = "leading"), i && (l[1] = "trailing");
      let u,
        c = null,
        d = Jf(
          function (...y) {
            (u = e.apply(this, y)), (c = null);
          },
          t,
          { signal: n, edges: l },
        ),
        p = function (...y) {
          if (a != null) {
            if (c === null) c = Date.now();
            else if (Date.now() - c >= a)
              return (
                (u = e.apply(this, y)),
                (c = Date.now()),
                d.cancel(),
                d.schedule(),
                u
              );
          }
          return d.apply(this, y), u;
        },
        h = () => (d.flush(), u);
      return (p.cancel = d.cancel), (p.flush = h), p;
    }
    var Mf,
      ou,
      Uf,
      au,
      $f,
      qf,
      dr,
      Oe,
      Vf,
      jt,
      Oo,
      _o = ze(() => {
        V();
        J();
        H();
        (Mf = Object.create),
          (ou = Object.defineProperty),
          (Uf = Object.getOwnPropertyDescriptor),
          (au = Object.getOwnPropertyNames),
          ($f = Object.getPrototypeOf),
          (qf = Object.prototype.hasOwnProperty),
          (dr = ((e) =>
            typeof Ie < "u"
              ? Ie
              : typeof Proxy < "u"
                ? new Proxy(e, { get: (t, r) => (typeof Ie < "u" ? Ie : t)[r] })
                : e)(function (e) {
            if (typeof Ie < "u") return Ie.apply(this, arguments);
            throw Error('Dynamic require of "' + e + '" is not supported');
          })),
          (Oe = (e, t) =>
            function () {
              return (
                t || (0, e[au(e)[0]])((t = { exports: {} }).exports, t),
                t.exports
              );
            }),
          (Vf = (e, t, r, n) => {
            if ((t && typeof t == "object") || typeof t == "function")
              for (let o of au(t))
                !qf.call(e, o) &&
                  o !== r &&
                  ou(e, o, {
                    get: () => t[o],
                    enumerable: !(n = Uf(t, o)) || n.enumerable,
                  });
            return e;
          }),
          (jt = (e, t, r) => (
            (r = e != null ? Mf($f(e)) : {}),
            Vf(
              t || !e || !e.__esModule
                ? ou(r, "default", { value: e, enumerable: !0 })
                : r,
              e,
            )
          ));
        Oo = (e) => `control-${e.replace(/\s+/g, "-")}`;
      });
    var GA,
      WA,
      KA,
      YA,
      su,
      XA,
      QA,
      ZA,
      eD,
      tD,
      rD,
      nD,
      oD,
      aD,
      iD,
      sD,
      lD,
      uD,
      cD,
      dD,
      pD,
      hD,
      fD,
      mD,
      yD,
      gD,
      bD,
      ED,
      vD,
      AD,
      DD,
      SD,
      wD,
      CD,
      xD,
      TD,
      FD,
      ID,
      kD,
      RD,
      OD,
      _D,
      PD,
      BD,
      ND,
      jD,
      LD,
      MD,
      UD,
      $D,
      lu,
      qD,
      uu,
      cu,
      VD,
      JD,
      du,
      HD,
      zD,
      GD,
      WD,
      KD,
      YD,
      XD,
      QD,
      ZD,
      eS,
      tS,
      rS,
      nS,
      oS,
      aS,
      iS,
      sS,
      lS,
      uS,
      cS,
      dS,
      pS,
      hS,
      fS,
      mS,
      yS,
      gS,
      bS,
      ES,
      vS,
      AS,
      DS,
      SS,
      wS,
      Hf,
      CS,
      xS,
      TS,
      FS,
      IS,
      kS,
      RS,
      zf,
      Gf,
      OS,
      _S,
      PS,
      BS,
      NS,
      jS,
      LS,
      MS,
      US,
      $S,
      qS,
      VS,
      JS,
      HS,
      zS,
      GS,
      WS,
      KS,
      YS,
      XS,
      QS,
      ZS,
      ew,
      tw,
      rw,
      nw,
      ow,
      aw,
      iw,
      sw,
      lw,
      uw,
      cw,
      pu,
      dw,
      pw,
      hw,
      fw,
      mw,
      yw,
      gw,
      hu,
      bw,
      Ew,
      vw,
      Aw,
      Dw,
      Sw,
      ww,
      Cw,
      xw,
      Tw,
      Fw,
      Iw,
      kw,
      Rw,
      Ow,
      _w,
      Pw,
      Bw,
      Nw,
      jw,
      Lw,
      Mw,
      Uw,
      $w,
      qw,
      Vw,
      Jw,
      Hw,
      zw,
      Gw,
      Ww,
      Kw,
      Yw,
      Xw,
      Qw,
      Zw,
      eC,
      tC,
      rC,
      nC,
      oC,
      aC,
      iC,
      sC,
      lC,
      uC,
      cC,
      dC,
      pC,
      hC,
      fC,
      mC,
      yC,
      gC,
      bC,
      EC,
      vC,
      AC,
      DC,
      SC,
      wC,
      CC,
      xC,
      TC,
      FC,
      IC,
      kC,
      fu,
      RC,
      OC,
      _C,
      PC,
      BC,
      NC,
      jC,
      LC,
      MC,
      UC,
      $C,
      qC,
      VC,
      Wf,
      JC,
      HC,
      zC,
      GC,
      WC,
      KC,
      YC,
      XC,
      QC,
      ZC,
      Kf,
      ex,
      tx,
      rx,
      nx,
      ox,
      ax,
      mu,
      yu,
      gu,
      ix,
      Po = ze(() => {
        V();
        J();
        H();
        (GA = __STORYBOOK_ICONS__),
          ({
            AccessibilityAltIcon: WA,
            AccessibilityIcon: KA,
            AccessibilityIgnoredIcon: YA,
            AddIcon: su,
            AdminIcon: XA,
            AlertAltIcon: QA,
            AlertIcon: ZA,
            AlignLeftIcon: eD,
            AlignRightIcon: tD,
            AppleIcon: rD,
            ArrowBottomLeftIcon: nD,
            ArrowBottomRightIcon: oD,
            ArrowDownIcon: aD,
            ArrowLeftIcon: iD,
            ArrowRightIcon: sD,
            ArrowSolidDownIcon: lD,
            ArrowSolidLeftIcon: uD,
            ArrowSolidRightIcon: cD,
            ArrowSolidUpIcon: dD,
            ArrowTopLeftIcon: pD,
            ArrowTopRightIcon: hD,
            ArrowUpIcon: fD,
            AzureDevOpsIcon: mD,
            BackIcon: yD,
            BasketIcon: gD,
            BatchAcceptIcon: bD,
            BatchDenyIcon: ED,
            BeakerIcon: vD,
            BellIcon: AD,
            BitbucketIcon: DD,
            BoldIcon: SD,
            BookIcon: wD,
            BookmarkHollowIcon: CD,
            BookmarkIcon: xD,
            BottomBarIcon: TD,
            BottomBarToggleIcon: FD,
            BoxIcon: ID,
            BranchIcon: kD,
            BrowserIcon: RD,
            ButtonIcon: OD,
            CPUIcon: _D,
            CalendarIcon: PD,
            CameraIcon: BD,
            CameraStabilizeIcon: ND,
            CategoryIcon: jD,
            CertificateIcon: LD,
            ChangedIcon: MD,
            ChatIcon: UD,
            CheckIcon: $D,
            ChevronDownIcon: lu,
            ChevronLeftIcon: qD,
            ChevronRightIcon: uu,
            ChevronSmallDownIcon: cu,
            ChevronSmallLeftIcon: VD,
            ChevronSmallRightIcon: JD,
            ChevronSmallUpIcon: du,
            ChevronUpIcon: HD,
            ChromaticIcon: zD,
            ChromeIcon: GD,
            CircleHollowIcon: WD,
            CircleIcon: KD,
            ClearIcon: YD,
            CloseAltIcon: XD,
            CloseIcon: QD,
            CloudHollowIcon: ZD,
            CloudIcon: eS,
            CogIcon: tS,
            CollapseIcon: rS,
            CommandIcon: nS,
            CommentAddIcon: oS,
            CommentIcon: aS,
            CommentsIcon: iS,
            CommitIcon: sS,
            CompassIcon: lS,
            ComponentDrivenIcon: uS,
            ComponentIcon: cS,
            ContrastIcon: dS,
            ContrastIgnoredIcon: pS,
            ControlsIcon: hS,
            CopyIcon: fS,
            CreditIcon: mS,
            CrossIcon: yS,
            DashboardIcon: gS,
            DatabaseIcon: bS,
            DeleteIcon: ES,
            DiamondIcon: vS,
            DirectionIcon: AS,
            DiscordIcon: DS,
            DocChartIcon: SS,
            DocListIcon: wS,
            DocumentIcon: Hf,
            DownloadIcon: CS,
            DragIcon: xS,
            EditIcon: TS,
            EllipsisIcon: FS,
            EmailIcon: IS,
            ExpandAltIcon: kS,
            ExpandIcon: RS,
            EyeCloseIcon: zf,
            EyeIcon: Gf,
            FaceHappyIcon: OS,
            FaceNeutralIcon: _S,
            FaceSadIcon: PS,
            FacebookIcon: BS,
            FailedIcon: NS,
            FastForwardIcon: jS,
            FigmaIcon: LS,
            FilterIcon: MS,
            FlagIcon: US,
            FolderIcon: $S,
            FormIcon: qS,
            GDriveIcon: VS,
            GithubIcon: JS,
            GitlabIcon: HS,
            GlobeIcon: zS,
            GoogleIcon: GS,
            GraphBarIcon: WS,
            GraphLineIcon: KS,
            GraphqlIcon: YS,
            GridAltIcon: XS,
            GridIcon: QS,
            GrowIcon: ZS,
            HeartHollowIcon: ew,
            HeartIcon: tw,
            HomeIcon: rw,
            HourglassIcon: nw,
            InfoIcon: ow,
            ItalicIcon: aw,
            JumpToIcon: iw,
            KeyIcon: sw,
            LightningIcon: lw,
            LightningOffIcon: uw,
            LinkBrokenIcon: cw,
            LinkIcon: pu,
            LinkedinIcon: dw,
            LinuxIcon: pw,
            ListOrderedIcon: hw,
            ListUnorderedIcon: fw,
            LocationIcon: mw,
            LockIcon: yw,
            MarkdownIcon: gw,
            MarkupIcon: hu,
            MediumIcon: bw,
            MemoryIcon: Ew,
            MenuIcon: vw,
            MergeIcon: Aw,
            MirrorIcon: Dw,
            MobileIcon: Sw,
            MoonIcon: ww,
            NutIcon: Cw,
            OutboxIcon: xw,
            OutlineIcon: Tw,
            PaintBrushIcon: Fw,
            PaperClipIcon: Iw,
            ParagraphIcon: kw,
            PassedIcon: Rw,
            PhoneIcon: Ow,
            PhotoDragIcon: _w,
            PhotoIcon: Pw,
            PhotoStabilizeIcon: Bw,
            PinAltIcon: Nw,
            PinIcon: jw,
            PlayAllHollowIcon: Lw,
            PlayBackIcon: Mw,
            PlayHollowIcon: Uw,
            PlayIcon: $w,
            PlayNextIcon: qw,
            PlusIcon: Vw,
            PointerDefaultIcon: Jw,
            PointerHandIcon: Hw,
            PowerIcon: zw,
            PrintIcon: Gw,
            ProceedIcon: Ww,
            ProfileIcon: Kw,
            PullRequestIcon: Yw,
            QuestionIcon: Xw,
            RSSIcon: Qw,
            RedirectIcon: Zw,
            ReduxIcon: eC,
            RefreshIcon: tC,
            ReplyIcon: rC,
            RepoIcon: nC,
            RequestChangeIcon: oC,
            RewindIcon: aC,
            RulerIcon: iC,
            SaveIcon: sC,
            SearchIcon: lC,
            ShareAltIcon: uC,
            ShareIcon: cC,
            ShieldIcon: dC,
            SideBySideIcon: pC,
            SidebarAltIcon: hC,
            SidebarAltToggleIcon: fC,
            SidebarIcon: mC,
            SidebarToggleIcon: yC,
            SpeakerIcon: gC,
            StackedIcon: bC,
            StarHollowIcon: EC,
            StarIcon: vC,
            StatusFailIcon: AC,
            StatusIcon: DC,
            StatusPassIcon: SC,
            StatusWarnIcon: wC,
            StickerIcon: CC,
            StopAltHollowIcon: xC,
            StopAltIcon: TC,
            StopIcon: FC,
            StorybookIcon: IC,
            StructureIcon: kC,
            SubtractIcon: fu,
            SunIcon: RC,
            SupportIcon: OC,
            SwitchAltIcon: _C,
            SyncIcon: PC,
            TabletIcon: BC,
            ThumbsUpIcon: NC,
            TimeIcon: jC,
            TimerIcon: LC,
            TransferIcon: MC,
            TrashIcon: UC,
            TwitterIcon: $C,
            TypeIcon: qC,
            UbuntuIcon: VC,
            UndoIcon: Wf,
            UnfoldIcon: JC,
            UnlockIcon: HC,
            UnpinIcon: zC,
            UploadIcon: GC,
            UserAddIcon: WC,
            UserAltIcon: KC,
            UserIcon: YC,
            UsersIcon: XC,
            VSCodeIcon: QC,
            VerifiedIcon: ZC,
            VideoIcon: Kf,
            WandIcon: ex,
            WatchIcon: tx,
            WindowsIcon: rx,
            WrenchIcon: nx,
            XIcon: ox,
            YoutubeIcon: ax,
            ZoomIcon: mu,
            ZoomOutIcon: yu,
            ZoomResetIcon: gu,
            iconList: ix,
          } = __STORYBOOK_ICONS__);
      });
    var Nu = {};
    fa(Nu, { ColorControl: () => Bu, default: () => Mm });
    function At() {
      return (At =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Uo(e, t) {
      if (e == null) return {};
      var r,
        n,
        o = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++)
        t.indexOf((r = i[n])) >= 0 || (o[r] = e[r]);
      return o;
    }
    function Bo(e) {
      var t = Me(e),
        r = Me(function (n) {
          t.current && t.current(n);
        });
      return (t.current = e), r.current;
    }
    function Ru(e, t, r) {
      var n = Bo(r),
        o = Ue(function () {
          return e.toHsva(t);
        }),
        i = o[0],
        a = o[1],
        l = Me({ color: t, hsva: i });
      rt(
        function () {
          if (!e.equal(t, l.current.color)) {
            var c = e.toHsva(t);
            (l.current = { hsva: c, color: t }), a(c);
          }
        },
        [t, e],
      ),
        rt(
          function () {
            var c;
            Iu(i, l.current.hsva) ||
              e.equal((c = e.fromHsva(i)), l.current.color) ||
              ((l.current = { hsva: i, color: c }), n(c));
          },
          [i, e, n],
        );
      var u = tt(function (c) {
        a(function (d) {
          return Object.assign({}, d, c);
        });
      }, []);
      return [i, u];
    }
    var em,
      Su,
      tm,
      rm,
      Be,
      Mt,
      pr,
      No,
      bu,
      Eu,
      $o,
      hr,
      qo,
      ve,
      nm,
      om,
      jo,
      am,
      im,
      sm,
      lm,
      wu,
      Lo,
      Qr,
      Cu,
      um,
      Kr,
      cm,
      xu,
      Tu,
      Fu,
      Iu,
      ku,
      dm,
      pm,
      hm,
      vu,
      Ou,
      fm,
      mm,
      ym,
      gm,
      _u,
      bm,
      Em,
      vm,
      Am,
      Dm,
      Sm,
      wm,
      Cm,
      xm,
      Tm,
      Fm,
      Au,
      Im,
      km,
      Pu,
      Yr,
      Rm,
      Om,
      _m,
      Mo,
      Pm,
      Bm,
      Xr,
      Du,
      Lt,
      Nm,
      jm,
      Zr,
      Lm,
      Bu,
      Mm,
      ju = ze(() => {
        V();
        J();
        H();
        _o();
        Xt();
        Qt();
        Wr();
        Po();
        (em = Oe({
          "../../node_modules/color-name/index.js"(e, t) {
            t.exports = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50],
            };
          },
        })),
          (Su = Oe({
            "../../node_modules/color-convert/conversions.js"(e, t) {
              var r = em(),
                n = {};
              for (let a of Object.keys(r)) n[r[a]] = a;
              var o = {
                rgb: { channels: 3, labels: "rgb" },
                hsl: { channels: 3, labels: "hsl" },
                hsv: { channels: 3, labels: "hsv" },
                hwb: { channels: 3, labels: "hwb" },
                cmyk: { channels: 4, labels: "cmyk" },
                xyz: { channels: 3, labels: "xyz" },
                lab: { channels: 3, labels: "lab" },
                lch: { channels: 3, labels: "lch" },
                hex: { channels: 1, labels: ["hex"] },
                keyword: { channels: 1, labels: ["keyword"] },
                ansi16: { channels: 1, labels: ["ansi16"] },
                ansi256: { channels: 1, labels: ["ansi256"] },
                hcg: { channels: 3, labels: ["h", "c", "g"] },
                apple: { channels: 3, labels: ["r16", "g16", "b16"] },
                gray: { channels: 1, labels: ["gray"] },
              };
              t.exports = o;
              for (let a of Object.keys(o)) {
                if (!("channels" in o[a]))
                  throw new Error("missing channels property: " + a);
                if (!("labels" in o[a]))
                  throw new Error("missing channel labels property: " + a);
                if (o[a].labels.length !== o[a].channels)
                  throw new Error("channel and label counts mismatch: " + a);
                let { channels: l, labels: u } = o[a];
                delete o[a].channels,
                  delete o[a].labels,
                  Object.defineProperty(o[a], "channels", { value: l }),
                  Object.defineProperty(o[a], "labels", { value: u });
              }
              (o.rgb.hsl = function (a) {
                let l = a[0] / 255,
                  u = a[1] / 255,
                  c = a[2] / 255,
                  d = Math.min(l, u, c),
                  p = Math.max(l, u, c),
                  h = p - d,
                  y,
                  E;
                p === d
                  ? (y = 0)
                  : l === p
                    ? (y = (u - c) / h)
                    : u === p
                      ? (y = 2 + (c - l) / h)
                      : c === p && (y = 4 + (l - u) / h),
                  (y = Math.min(y * 60, 360)),
                  y < 0 && (y += 360);
                let v = (d + p) / 2;
                return (
                  p === d
                    ? (E = 0)
                    : v <= 0.5
                      ? (E = h / (p + d))
                      : (E = h / (2 - p - d)),
                  [y, E * 100, v * 100]
                );
              }),
                (o.rgb.hsv = function (a) {
                  let l,
                    u,
                    c,
                    d,
                    p,
                    h = a[0] / 255,
                    y = a[1] / 255,
                    E = a[2] / 255,
                    v = Math.max(h, y, E),
                    A = v - Math.min(h, y, E),
                    D = function (S) {
                      return (v - S) / 6 / A + 1 / 2;
                    };
                  return (
                    A === 0
                      ? ((d = 0), (p = 0))
                      : ((p = A / v),
                        (l = D(h)),
                        (u = D(y)),
                        (c = D(E)),
                        h === v
                          ? (d = c - u)
                          : y === v
                            ? (d = 1 / 3 + l - c)
                            : E === v && (d = 2 / 3 + u - l),
                        d < 0 ? (d += 1) : d > 1 && (d -= 1)),
                    [d * 360, p * 100, v * 100]
                  );
                }),
                (o.rgb.hwb = function (a) {
                  let l = a[0],
                    u = a[1],
                    c = a[2],
                    d = o.rgb.hsl(a)[0],
                    p = (1 / 255) * Math.min(l, Math.min(u, c));
                  return (
                    (c = 1 - (1 / 255) * Math.max(l, Math.max(u, c))),
                    [d, p * 100, c * 100]
                  );
                }),
                (o.rgb.cmyk = function (a) {
                  let l = a[0] / 255,
                    u = a[1] / 255,
                    c = a[2] / 255,
                    d = Math.min(1 - l, 1 - u, 1 - c),
                    p = (1 - l - d) / (1 - d) || 0,
                    h = (1 - u - d) / (1 - d) || 0,
                    y = (1 - c - d) / (1 - d) || 0;
                  return [p * 100, h * 100, y * 100, d * 100];
                });
              function i(a, l) {
                return (
                  (a[0] - l[0]) ** 2 + (a[1] - l[1]) ** 2 + (a[2] - l[2]) ** 2
                );
              }
              (o.rgb.keyword = function (a) {
                let l = n[a];
                if (l) return l;
                let u = 1 / 0,
                  c;
                for (let d of Object.keys(r)) {
                  let p = r[d],
                    h = i(a, p);
                  h < u && ((u = h), (c = d));
                }
                return c;
              }),
                (o.keyword.rgb = function (a) {
                  return r[a];
                }),
                (o.rgb.xyz = function (a) {
                  let l = a[0] / 255,
                    u = a[1] / 255,
                    c = a[2] / 255;
                  (l = l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92),
                    (u =
                      u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92),
                    (c =
                      c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92);
                  let d = l * 0.4124 + u * 0.3576 + c * 0.1805,
                    p = l * 0.2126 + u * 0.7152 + c * 0.0722,
                    h = l * 0.0193 + u * 0.1192 + c * 0.9505;
                  return [d * 100, p * 100, h * 100];
                }),
                (o.rgb.lab = function (a) {
                  let l = o.rgb.xyz(a),
                    u = l[0],
                    c = l[1],
                    d = l[2];
                  (u /= 95.047),
                    (c /= 100),
                    (d /= 108.883),
                    (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
                    (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116),
                    (d = d > 0.008856 ? d ** (1 / 3) : 7.787 * d + 16 / 116);
                  let p = 116 * c - 16,
                    h = 500 * (u - c),
                    y = 200 * (c - d);
                  return [p, h, y];
                }),
                (o.hsl.rgb = function (a) {
                  let l = a[0] / 360,
                    u = a[1] / 100,
                    c = a[2] / 100,
                    d,
                    p,
                    h;
                  if (u === 0) return (h = c * 255), [h, h, h];
                  c < 0.5 ? (d = c * (1 + u)) : (d = c + u - c * u);
                  let y = 2 * c - d,
                    E = [0, 0, 0];
                  for (let v = 0; v < 3; v++)
                    (p = l + (1 / 3) * -(v - 1)),
                      p < 0 && p++,
                      p > 1 && p--,
                      6 * p < 1
                        ? (h = y + (d - y) * 6 * p)
                        : 2 * p < 1
                          ? (h = d)
                          : 3 * p < 2
                            ? (h = y + (d - y) * (2 / 3 - p) * 6)
                            : (h = y),
                      (E[v] = h * 255);
                  return E;
                }),
                (o.hsl.hsv = function (a) {
                  let l = a[0],
                    u = a[1] / 100,
                    c = a[2] / 100,
                    d = u,
                    p = Math.max(c, 0.01);
                  (c *= 2),
                    (u *= c <= 1 ? c : 2 - c),
                    (d *= p <= 1 ? p : 2 - p);
                  let h = (c + u) / 2,
                    y = c === 0 ? (2 * d) / (p + d) : (2 * u) / (c + u);
                  return [l, y * 100, h * 100];
                }),
                (o.hsv.rgb = function (a) {
                  let l = a[0] / 60,
                    u = a[1] / 100,
                    c = a[2] / 100,
                    d = Math.floor(l) % 6,
                    p = l - Math.floor(l),
                    h = 255 * c * (1 - u),
                    y = 255 * c * (1 - u * p),
                    E = 255 * c * (1 - u * (1 - p));
                  switch (((c *= 255), d)) {
                    case 0:
                      return [c, E, h];
                    case 1:
                      return [y, c, h];
                    case 2:
                      return [h, c, E];
                    case 3:
                      return [h, y, c];
                    case 4:
                      return [E, h, c];
                    case 5:
                      return [c, h, y];
                  }
                }),
                (o.hsv.hsl = function (a) {
                  let l = a[0],
                    u = a[1] / 100,
                    c = a[2] / 100,
                    d = Math.max(c, 0.01),
                    p,
                    h;
                  h = (2 - u) * c;
                  let y = (2 - u) * d;
                  return (
                    (p = u * d),
                    (p /= y <= 1 ? y : 2 - y),
                    (p = p || 0),
                    (h /= 2),
                    [l, p * 100, h * 100]
                  );
                }),
                (o.hwb.rgb = function (a) {
                  let l = a[0] / 360,
                    u = a[1] / 100,
                    c = a[2] / 100,
                    d = u + c,
                    p;
                  d > 1 && ((u /= d), (c /= d));
                  let h = Math.floor(6 * l),
                    y = 1 - c;
                  (p = 6 * l - h), (h & 1) !== 0 && (p = 1 - p);
                  let E = u + p * (y - u),
                    v,
                    A,
                    D;
                  switch (h) {
                    default:
                    case 6:
                    case 0:
                      (v = y), (A = E), (D = u);
                      break;
                    case 1:
                      (v = E), (A = y), (D = u);
                      break;
                    case 2:
                      (v = u), (A = y), (D = E);
                      break;
                    case 3:
                      (v = u), (A = E), (D = y);
                      break;
                    case 4:
                      (v = E), (A = u), (D = y);
                      break;
                    case 5:
                      (v = y), (A = u), (D = E);
                      break;
                  }
                  return [v * 255, A * 255, D * 255];
                }),
                (o.cmyk.rgb = function (a) {
                  let l = a[0] / 100,
                    u = a[1] / 100,
                    c = a[2] / 100,
                    d = a[3] / 100,
                    p = 1 - Math.min(1, l * (1 - d) + d),
                    h = 1 - Math.min(1, u * (1 - d) + d),
                    y = 1 - Math.min(1, c * (1 - d) + d);
                  return [p * 255, h * 255, y * 255];
                }),
                (o.xyz.rgb = function (a) {
                  let l = a[0] / 100,
                    u = a[1] / 100,
                    c = a[2] / 100,
                    d,
                    p,
                    h;
                  return (
                    (d = l * 3.2406 + u * -1.5372 + c * -0.4986),
                    (p = l * -0.9689 + u * 1.8758 + c * 0.0415),
                    (h = l * 0.0557 + u * -0.204 + c * 1.057),
                    (d =
                      d > 0.0031308
                        ? 1.055 * d ** (1 / 2.4) - 0.055
                        : d * 12.92),
                    (p =
                      p > 0.0031308
                        ? 1.055 * p ** (1 / 2.4) - 0.055
                        : p * 12.92),
                    (h =
                      h > 0.0031308
                        ? 1.055 * h ** (1 / 2.4) - 0.055
                        : h * 12.92),
                    (d = Math.min(Math.max(0, d), 1)),
                    (p = Math.min(Math.max(0, p), 1)),
                    (h = Math.min(Math.max(0, h), 1)),
                    [d * 255, p * 255, h * 255]
                  );
                }),
                (o.xyz.lab = function (a) {
                  let l = a[0],
                    u = a[1],
                    c = a[2];
                  (l /= 95.047),
                    (u /= 100),
                    (c /= 108.883),
                    (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
                    (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
                    (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116);
                  let d = 116 * u - 16,
                    p = 500 * (l - u),
                    h = 200 * (u - c);
                  return [d, p, h];
                }),
                (o.lab.xyz = function (a) {
                  let l = a[0],
                    u = a[1],
                    c = a[2],
                    d,
                    p,
                    h;
                  (p = (l + 16) / 116), (d = u / 500 + p), (h = p - c / 200);
                  let y = p ** 3,
                    E = d ** 3,
                    v = h ** 3;
                  return (
                    (p = y > 0.008856 ? y : (p - 16 / 116) / 7.787),
                    (d = E > 0.008856 ? E : (d - 16 / 116) / 7.787),
                    (h = v > 0.008856 ? v : (h - 16 / 116) / 7.787),
                    (d *= 95.047),
                    (p *= 100),
                    (h *= 108.883),
                    [d, p, h]
                  );
                }),
                (o.lab.lch = function (a) {
                  let l = a[0],
                    u = a[1],
                    c = a[2],
                    d;
                  (d = (Math.atan2(c, u) * 360) / 2 / Math.PI),
                    d < 0 && (d += 360);
                  let p = Math.sqrt(u * u + c * c);
                  return [l, p, d];
                }),
                (o.lch.lab = function (a) {
                  let l = a[0],
                    u = a[1],
                    c = (a[2] / 360) * 2 * Math.PI,
                    d = u * Math.cos(c),
                    p = u * Math.sin(c);
                  return [l, d, p];
                }),
                (o.rgb.ansi16 = function (a, l = null) {
                  let [u, c, d] = a,
                    p = l === null ? o.rgb.hsv(a)[2] : l;
                  if (((p = Math.round(p / 50)), p === 0)) return 30;
                  let h =
                    30 +
                    ((Math.round(d / 255) << 2) |
                      (Math.round(c / 255) << 1) |
                      Math.round(u / 255));
                  return p === 2 && (h += 60), h;
                }),
                (o.hsv.ansi16 = function (a) {
                  return o.rgb.ansi16(o.hsv.rgb(a), a[2]);
                }),
                (o.rgb.ansi256 = function (a) {
                  let l = a[0],
                    u = a[1],
                    c = a[2];
                  return l === u && u === c
                    ? l < 8
                      ? 16
                      : l > 248
                        ? 231
                        : Math.round(((l - 8) / 247) * 24) + 232
                    : 16 +
                        36 * Math.round((l / 255) * 5) +
                        6 * Math.round((u / 255) * 5) +
                        Math.round((c / 255) * 5);
                }),
                (o.ansi16.rgb = function (a) {
                  let l = a % 10;
                  if (l === 0 || l === 7)
                    return (
                      a > 50 && (l += 3.5), (l = (l / 10.5) * 255), [l, l, l]
                    );
                  let u = (~~(a > 50) + 1) * 0.5,
                    c = (l & 1) * u * 255,
                    d = ((l >> 1) & 1) * u * 255,
                    p = ((l >> 2) & 1) * u * 255;
                  return [c, d, p];
                }),
                (o.ansi256.rgb = function (a) {
                  if (a >= 232) {
                    let p = (a - 232) * 10 + 8;
                    return [p, p, p];
                  }
                  a -= 16;
                  let l,
                    u = (Math.floor(a / 36) / 5) * 255,
                    c = (Math.floor((l = a % 36) / 6) / 5) * 255,
                    d = ((l % 6) / 5) * 255;
                  return [u, c, d];
                }),
                (o.rgb.hex = function (a) {
                  let l = (
                    ((Math.round(a[0]) & 255) << 16) +
                    ((Math.round(a[1]) & 255) << 8) +
                    (Math.round(a[2]) & 255)
                  )
                    .toString(16)
                    .toUpperCase();
                  return "000000".substring(l.length) + l;
                }),
                (o.hex.rgb = function (a) {
                  let l = a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                  if (!l) return [0, 0, 0];
                  let u = l[0];
                  l[0].length === 3 &&
                    (u = u
                      .split("")
                      .map((y) => y + y)
                      .join(""));
                  let c = parseInt(u, 16),
                    d = (c >> 16) & 255,
                    p = (c >> 8) & 255,
                    h = c & 255;
                  return [d, p, h];
                }),
                (o.rgb.hcg = function (a) {
                  let l = a[0] / 255,
                    u = a[1] / 255,
                    c = a[2] / 255,
                    d = Math.max(Math.max(l, u), c),
                    p = Math.min(Math.min(l, u), c),
                    h = d - p,
                    y,
                    E;
                  return (
                    h < 1 ? (y = p / (1 - h)) : (y = 0),
                    h <= 0
                      ? (E = 0)
                      : d === l
                        ? (E = ((u - c) / h) % 6)
                        : d === u
                          ? (E = 2 + (c - l) / h)
                          : (E = 4 + (l - u) / h),
                    (E /= 6),
                    (E %= 1),
                    [E * 360, h * 100, y * 100]
                  );
                }),
                (o.hsl.hcg = function (a) {
                  let l = a[1] / 100,
                    u = a[2] / 100,
                    c = u < 0.5 ? 2 * l * u : 2 * l * (1 - u),
                    d = 0;
                  return (
                    c < 1 && (d = (u - 0.5 * c) / (1 - c)),
                    [a[0], c * 100, d * 100]
                  );
                }),
                (o.hsv.hcg = function (a) {
                  let l = a[1] / 100,
                    u = a[2] / 100,
                    c = l * u,
                    d = 0;
                  return (
                    c < 1 && (d = (u - c) / (1 - c)), [a[0], c * 100, d * 100]
                  );
                }),
                (o.hcg.rgb = function (a) {
                  let l = a[0] / 360,
                    u = a[1] / 100,
                    c = a[2] / 100;
                  if (u === 0) return [c * 255, c * 255, c * 255];
                  let d = [0, 0, 0],
                    p = (l % 1) * 6,
                    h = p % 1,
                    y = 1 - h,
                    E = 0;
                  switch (Math.floor(p)) {
                    case 0:
                      (d[0] = 1), (d[1] = h), (d[2] = 0);
                      break;
                    case 1:
                      (d[0] = y), (d[1] = 1), (d[2] = 0);
                      break;
                    case 2:
                      (d[0] = 0), (d[1] = 1), (d[2] = h);
                      break;
                    case 3:
                      (d[0] = 0), (d[1] = y), (d[2] = 1);
                      break;
                    case 4:
                      (d[0] = h), (d[1] = 0), (d[2] = 1);
                      break;
                    default:
                      (d[0] = 1), (d[1] = 0), (d[2] = y);
                  }
                  return (
                    (E = (1 - u) * c),
                    [
                      (u * d[0] + E) * 255,
                      (u * d[1] + E) * 255,
                      (u * d[2] + E) * 255,
                    ]
                  );
                }),
                (o.hcg.hsv = function (a) {
                  let l = a[1] / 100,
                    u = a[2] / 100,
                    c = l + u * (1 - l),
                    d = 0;
                  return c > 0 && (d = l / c), [a[0], d * 100, c * 100];
                }),
                (o.hcg.hsl = function (a) {
                  let l = a[1] / 100,
                    u = (a[2] / 100) * (1 - l) + 0.5 * l,
                    c = 0;
                  return (
                    u > 0 && u < 0.5
                      ? (c = l / (2 * u))
                      : u >= 0.5 && u < 1 && (c = l / (2 * (1 - u))),
                    [a[0], c * 100, u * 100]
                  );
                }),
                (o.hcg.hwb = function (a) {
                  let l = a[1] / 100,
                    u = a[2] / 100,
                    c = l + u * (1 - l);
                  return [a[0], (c - l) * 100, (1 - c) * 100];
                }),
                (o.hwb.hcg = function (a) {
                  let l = a[1] / 100,
                    u = 1 - a[2] / 100,
                    c = u - l,
                    d = 0;
                  return (
                    c < 1 && (d = (u - c) / (1 - c)), [a[0], c * 100, d * 100]
                  );
                }),
                (o.apple.rgb = function (a) {
                  return [
                    (a[0] / 65535) * 255,
                    (a[1] / 65535) * 255,
                    (a[2] / 65535) * 255,
                  ];
                }),
                (o.rgb.apple = function (a) {
                  return [
                    (a[0] / 255) * 65535,
                    (a[1] / 255) * 65535,
                    (a[2] / 255) * 65535,
                  ];
                }),
                (o.gray.rgb = function (a) {
                  return [
                    (a[0] / 100) * 255,
                    (a[0] / 100) * 255,
                    (a[0] / 100) * 255,
                  ];
                }),
                (o.gray.hsl = function (a) {
                  return [0, 0, a[0]];
                }),
                (o.gray.hsv = o.gray.hsl),
                (o.gray.hwb = function (a) {
                  return [0, 100, a[0]];
                }),
                (o.gray.cmyk = function (a) {
                  return [0, 0, 0, a[0]];
                }),
                (o.gray.lab = function (a) {
                  return [a[0], 0, 0];
                }),
                (o.gray.hex = function (a) {
                  let l = Math.round((a[0] / 100) * 255) & 255,
                    u = ((l << 16) + (l << 8) + l).toString(16).toUpperCase();
                  return "000000".substring(u.length) + u;
                }),
                (o.rgb.gray = function (a) {
                  return [((a[0] + a[1] + a[2]) / 3 / 255) * 100];
                });
            },
          })),
          (tm = Oe({
            "../../node_modules/color-convert/route.js"(e, t) {
              var r = Su();
              function n() {
                let l = {},
                  u = Object.keys(r);
                for (let c = u.length, d = 0; d < c; d++)
                  l[u[d]] = { distance: -1, parent: null };
                return l;
              }
              function o(l) {
                let u = n(),
                  c = [l];
                for (u[l].distance = 0; c.length; ) {
                  let d = c.pop(),
                    p = Object.keys(r[d]);
                  for (let h = p.length, y = 0; y < h; y++) {
                    let E = p[y],
                      v = u[E];
                    v.distance === -1 &&
                      ((v.distance = u[d].distance + 1),
                      (v.parent = d),
                      c.unshift(E));
                  }
                }
                return u;
              }
              function i(l, u) {
                return function (c) {
                  return u(l(c));
                };
              }
              function a(l, u) {
                let c = [u[l].parent, l],
                  d = r[u[l].parent][l],
                  p = u[l].parent;
                for (; u[p].parent; )
                  c.unshift(u[p].parent),
                    (d = i(r[u[p].parent][p], d)),
                    (p = u[p].parent);
                return (d.conversion = c), d;
              }
              t.exports = function (l) {
                let u = o(l),
                  c = {},
                  d = Object.keys(u);
                for (let p = d.length, h = 0; h < p; h++) {
                  let y = d[h];
                  u[y].parent !== null && (c[y] = a(y, u));
                }
                return c;
              };
            },
          })),
          (rm = Oe({
            "../../node_modules/color-convert/index.js"(e, t) {
              var r = Su(),
                n = tm(),
                o = {},
                i = Object.keys(r);
              function a(u) {
                let c = function (...d) {
                  let p = d[0];
                  return p == null ? p : (p.length > 1 && (d = p), u(d));
                };
                return "conversion" in u && (c.conversion = u.conversion), c;
              }
              function l(u) {
                let c = function (...d) {
                  let p = d[0];
                  if (p == null) return p;
                  p.length > 1 && (d = p);
                  let h = u(d);
                  if (typeof h == "object")
                    for (let y = h.length, E = 0; E < y; E++)
                      h[E] = Math.round(h[E]);
                  return h;
                };
                return "conversion" in u && (c.conversion = u.conversion), c;
              }
              i.forEach((u) => {
                (o[u] = {}),
                  Object.defineProperty(o[u], "channels", {
                    value: r[u].channels,
                  }),
                  Object.defineProperty(o[u], "labels", { value: r[u].labels });
                let c = n(u);
                Object.keys(c).forEach((d) => {
                  let p = c[d];
                  (o[u][d] = l(p)), (o[u][d].raw = a(p));
                });
              }),
                (t.exports = o);
            },
          })),
          (Be = jt(rm()));
        (Mt = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = 1),
            e > r ? r : e < t ? t : e
          );
        }),
          (pr = function (e) {
            return "touches" in e;
          }),
          (No = function (e) {
            return (e && e.ownerDocument.defaultView) || self;
          }),
          (bu = function (e, t, r) {
            var n = e.getBoundingClientRect(),
              o = pr(t)
                ? (function (i, a) {
                    for (var l = 0; l < i.length; l++)
                      if (i[l].identifier === a) return i[l];
                    return i[0];
                  })(t.touches, r)
                : t;
            return {
              left: Mt((o.pageX - (n.left + No(e).pageXOffset)) / n.width),
              top: Mt((o.pageY - (n.top + No(e).pageYOffset)) / n.height),
            };
          }),
          (Eu = function (e) {
            !pr(e) && e.preventDefault();
          }),
          ($o = C.memo(function (e) {
            var t = e.onMove,
              r = e.onKey,
              n = Uo(e, ["onMove", "onKey"]),
              o = Me(null),
              i = Bo(t),
              a = Bo(r),
              l = Me(null),
              u = Me(!1),
              c = Yt(
                function () {
                  var y = function (A) {
                      Eu(A),
                        (pr(A) ? A.touches.length > 0 : A.buttons > 0) &&
                        o.current
                          ? i(bu(o.current, A, l.current))
                          : v(!1);
                    },
                    E = function () {
                      return v(!1);
                    };
                  function v(A) {
                    var D = u.current,
                      S = No(o.current),
                      F = A ? S.addEventListener : S.removeEventListener;
                    F(D ? "touchmove" : "mousemove", y),
                      F(D ? "touchend" : "mouseup", E);
                  }
                  return [
                    function (A) {
                      var D = A.nativeEvent,
                        S = o.current;
                      if (
                        S &&
                        (Eu(D),
                        !(function (x, O) {
                          return O && !pr(x);
                        })(D, u.current) && S)
                      ) {
                        if (pr(D)) {
                          u.current = !0;
                          var F = D.changedTouches || [];
                          F.length && (l.current = F[0].identifier);
                        }
                        S.focus(), i(bu(S, D, l.current)), v(!0);
                      }
                    },
                    function (A) {
                      var D = A.which || A.keyCode;
                      D < 37 ||
                        D > 40 ||
                        (A.preventDefault(),
                        a({
                          left: D === 39 ? 0.05 : D === 37 ? -0.05 : 0,
                          top: D === 40 ? 0.05 : D === 38 ? -0.05 : 0,
                        }));
                    },
                    v,
                  ];
                },
                [a, i],
              ),
              d = c[0],
              p = c[1],
              h = c[2];
            return (
              rt(
                function () {
                  return h;
                },
                [h],
              ),
              C.createElement(
                "div",
                At({}, n, {
                  onTouchStart: d,
                  onMouseDown: d,
                  className: "react-colorful__interactive",
                  ref: o,
                  onKeyDown: p,
                  tabIndex: 0,
                  role: "slider",
                }),
              )
            );
          })),
          (hr = function (e) {
            return e.filter(Boolean).join(" ");
          }),
          (qo = function (e) {
            var t = e.color,
              r = e.left,
              n = e.top,
              o = n === void 0 ? 0.5 : n,
              i = hr(["react-colorful__pointer", e.className]);
            return C.createElement(
              "div",
              {
                className: i,
                style: { top: 100 * o + "%", left: 100 * r + "%" },
              },
              C.createElement("div", {
                className: "react-colorful__pointer-fill",
                style: { backgroundColor: t },
              }),
            );
          }),
          (ve = function (e, t, r) {
            return (
              t === void 0 && (t = 0),
              r === void 0 && (r = Math.pow(10, t)),
              Math.round(r * e) / r
            );
          }),
          (nm = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
          (om = function (e) {
            return xu(jo(e));
          }),
          (jo = function (e) {
            return (
              e[0] === "#" && (e = e.substring(1)),
              e.length < 6
                ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a:
                      e.length === 4
                        ? ve(parseInt(e[3] + e[3], 16) / 255, 2)
                        : 1,
                  }
                : {
                    r: parseInt(e.substring(0, 2), 16),
                    g: parseInt(e.substring(2, 4), 16),
                    b: parseInt(e.substring(4, 6), 16),
                    a:
                      e.length === 8
                        ? ve(parseInt(e.substring(6, 8), 16) / 255, 2)
                        : 1,
                  }
            );
          }),
          (am = function (e, t) {
            return t === void 0 && (t = "deg"), Number(e) * (nm[t] || 1);
          }),
          (im = function (e) {
            var t =
              /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
              );
            return t
              ? sm({
                  h: am(t[1], t[2]),
                  s: Number(t[3]),
                  l: Number(t[4]),
                  a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (sm = function (e) {
            var t = e.s,
              r = e.l;
            return {
              h: e.h,
              s:
                (t *= (r < 50 ? r : 100 - r) / 100) > 0
                  ? ((2 * t) / (r + t)) * 100
                  : 0,
              v: r + t,
              a: e.a,
            };
          }),
          (lm = function (e) {
            return cm(Cu(e));
          }),
          (wu = function (e) {
            var t = e.s,
              r = e.v,
              n = e.a,
              o = ((200 - t) * r) / 100;
            return {
              h: ve(e.h),
              s: ve(
                o > 0 && o < 200
                  ? ((t * r) / 100 / (o <= 100 ? o : 200 - o)) * 100
                  : 0,
              ),
              l: ve(o / 2),
              a: ve(n, 2),
            };
          }),
          (Lo = function (e) {
            var t = wu(e);
            return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
          }),
          (Qr = function (e) {
            var t = wu(e);
            return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
          }),
          (Cu = function (e) {
            var t = e.h,
              r = e.s,
              n = e.v,
              o = e.a;
            (t = (t / 360) * 6), (r /= 100), (n /= 100);
            var i = Math.floor(t),
              a = n * (1 - r),
              l = n * (1 - (t - i) * r),
              u = n * (1 - (1 - t + i) * r),
              c = i % 6;
            return {
              r: ve(255 * [n, l, a, a, u, n][c]),
              g: ve(255 * [u, n, n, l, a, a][c]),
              b: ve(255 * [a, a, u, n, n, l][c]),
              a: ve(o, 2),
            };
          }),
          (um = function (e) {
            var t =
              /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
              );
            return t
              ? xu({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (Kr = function (e) {
            var t = e.toString(16);
            return t.length < 2 ? "0" + t : t;
          }),
          (cm = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              o = e.a,
              i = o < 1 ? Kr(ve(255 * o)) : "";
            return "#" + Kr(t) + Kr(r) + Kr(n) + i;
          }),
          (xu = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              o = e.a,
              i = Math.max(t, r, n),
              a = i - Math.min(t, r, n),
              l = a
                ? i === t
                  ? (r - n) / a
                  : i === r
                    ? 2 + (n - t) / a
                    : 4 + (t - r) / a
                : 0;
            return {
              h: ve(60 * (l < 0 ? l + 6 : l)),
              s: ve(i ? (a / i) * 100 : 0),
              v: ve((i / 255) * 100),
              a: o,
            };
          }),
          (Tu = C.memo(function (e) {
            var t = e.hue,
              r = e.onChange,
              n = hr(["react-colorful__hue", e.className]);
            return C.createElement(
              "div",
              { className: n },
              C.createElement(
                $o,
                {
                  onMove: function (o) {
                    r({ h: 360 * o.left });
                  },
                  onKey: function (o) {
                    r({ h: Mt(t + 360 * o.left, 0, 360) });
                  },
                  "aria-label": "Hue",
                  "aria-valuenow": ve(t),
                  "aria-valuemax": "360",
                  "aria-valuemin": "0",
                },
                C.createElement(qo, {
                  className: "react-colorful__hue-pointer",
                  left: t / 360,
                  color: Lo({ h: t, s: 100, v: 100, a: 1 }),
                }),
              ),
            );
          })),
          (Fu = C.memo(function (e) {
            var t = e.hsva,
              r = e.onChange,
              n = { backgroundColor: Lo({ h: t.h, s: 100, v: 100, a: 1 }) };
            return C.createElement(
              "div",
              { className: "react-colorful__saturation", style: n },
              C.createElement(
                $o,
                {
                  onMove: function (o) {
                    r({ s: 100 * o.left, v: 100 - 100 * o.top });
                  },
                  onKey: function (o) {
                    r({
                      s: Mt(t.s + 100 * o.left, 0, 100),
                      v: Mt(t.v - 100 * o.top, 0, 100),
                    });
                  },
                  "aria-label": "Color",
                  "aria-valuetext":
                    "Saturation " + ve(t.s) + "%, Brightness " + ve(t.v) + "%",
                },
                C.createElement(qo, {
                  className: "react-colorful__saturation-pointer",
                  top: 1 - t.v / 100,
                  left: t.s / 100,
                  color: Lo(t),
                }),
              ),
            );
          })),
          (Iu = function (e, t) {
            if (e === t) return !0;
            for (var r in e) if (e[r] !== t[r]) return !1;
            return !0;
          }),
          (ku = function (e, t) {
            return e.replace(/\s/g, "") === t.replace(/\s/g, "");
          }),
          (dm = function (e, t) {
            return e.toLowerCase() === t.toLowerCase() || Iu(jo(e), jo(t));
          });
        (pm = typeof window < "u" ? ga : rt),
          (hm = function () {
            return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
          }),
          (vu = new Map()),
          (Ou = function (e) {
            pm(function () {
              var t = e.current ? e.current.ownerDocument : document;
              if (t !== void 0 && !vu.has(t)) {
                var r = t.createElement("style");
                (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                  vu.set(t, r);
                var n = hm();
                n && r.setAttribute("nonce", n), t.head.appendChild(r);
              }
            }, []);
          }),
          (fm = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              o = n === void 0 ? r.defaultColor : n,
              i = e.onChange,
              a = Uo(e, ["className", "colorModel", "color", "onChange"]),
              l = Me(null);
            Ou(l);
            var u = Ru(r, o, i),
              c = u[0],
              d = u[1],
              p = hr(["react-colorful", t]);
            return C.createElement(
              "div",
              At({}, a, { ref: l, className: p }),
              C.createElement(Fu, { hsva: c, onChange: d }),
              C.createElement(Tu, {
                hue: c.h,
                onChange: d,
                className: "react-colorful__last-control",
              }),
            );
          }),
          (mm = {
            defaultColor: "000",
            toHsva: om,
            fromHsva: function (e) {
              return lm({ h: e.h, s: e.s, v: e.v, a: 1 });
            },
            equal: dm,
          }),
          (ym = function (e) {
            return C.createElement(fm, At({}, e, { colorModel: mm }));
          }),
          (gm = function (e) {
            var t = e.className,
              r = e.hsva,
              n = e.onChange,
              o = {
                backgroundImage:
                  "linear-gradient(90deg, " +
                  Qr(Object.assign({}, r, { a: 0 })) +
                  ", " +
                  Qr(Object.assign({}, r, { a: 1 })) +
                  ")",
              },
              i = hr(["react-colorful__alpha", t]),
              a = ve(100 * r.a);
            return C.createElement(
              "div",
              { className: i },
              C.createElement("div", {
                className: "react-colorful__alpha-gradient",
                style: o,
              }),
              C.createElement(
                $o,
                {
                  onMove: function (l) {
                    n({ a: l.left });
                  },
                  onKey: function (l) {
                    n({ a: Mt(r.a + l.left) });
                  },
                  "aria-label": "Alpha",
                  "aria-valuetext": a + "%",
                  "aria-valuenow": a,
                  "aria-valuemin": "0",
                  "aria-valuemax": "100",
                },
                C.createElement(qo, {
                  className: "react-colorful__alpha-pointer",
                  left: r.a,
                  color: Qr(r),
                }),
              ),
            );
          }),
          (_u = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              o = n === void 0 ? r.defaultColor : n,
              i = e.onChange,
              a = Uo(e, ["className", "colorModel", "color", "onChange"]),
              l = Me(null);
            Ou(l);
            var u = Ru(r, o, i),
              c = u[0],
              d = u[1],
              p = hr(["react-colorful", t]);
            return C.createElement(
              "div",
              At({}, a, { ref: l, className: p }),
              C.createElement(Fu, { hsva: c, onChange: d }),
              C.createElement(Tu, { hue: c.h, onChange: d }),
              C.createElement(gm, {
                hsva: c,
                onChange: d,
                className: "react-colorful__last-control",
              }),
            );
          }),
          (bm = {
            defaultColor: "hsla(0, 0%, 0%, 1)",
            toHsva: im,
            fromHsva: Qr,
            equal: ku,
          }),
          (Em = function (e) {
            return C.createElement(_u, At({}, e, { colorModel: bm }));
          }),
          (vm = {
            defaultColor: "rgba(0, 0, 0, 1)",
            toHsva: um,
            fromHsva: function (e) {
              var t = Cu(e);
              return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
            },
            equal: ku,
          }),
          (Am = function (e) {
            return C.createElement(_u, At({}, e, { colorModel: vm }));
          }),
          (Dm = k.div({
            position: "relative",
            maxWidth: 250,
            '&[aria-readonly="true"]': { opacity: 0.5 },
          })),
          (Sm = k(Sr)({
            position: "absolute",
            zIndex: 1,
            top: 4,
            left: 4,
            "[aria-readonly=true] &": { cursor: "not-allowed" },
          })),
          (wm = k.div({
            width: 200,
            margin: 5,
            ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" },
            ".react-colorful__hue": {
              boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)",
            },
            ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" },
          })),
          (Cm = k(An)(({ theme: e }) => ({
            fontFamily: e.typography.fonts.base,
          }))),
          (xm = k.div({
            display: "grid",
            gridTemplateColumns: "repeat(9, 16px)",
            gap: 6,
            padding: 3,
            marginTop: 5,
            width: 200,
          })),
          (Tm = k.div(({ theme: e, active: t }) => ({
            width: 16,
            height: 16,
            boxShadow: t
              ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
              : `${e.appBorderColor} 0 0 0 1px inset`,
            borderRadius: e.appBorderRadius,
          }))),
          (Fm = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
          (Au = ({ value: e, style: t, ...r }) => {
            let n = `linear-gradient(${e}, ${e}), ${Fm}, linear-gradient(#fff, #fff)`;
            return C.createElement(Tm, {
              ...r,
              style: { ...t, backgroundImage: n },
            });
          }),
          (Im = k(nt.Input)(({ theme: e, readOnly: t }) => ({
            width: "100%",
            paddingLeft: 30,
            paddingRight: 30,
            boxSizing: "border-box",
            fontFamily: e.typography.fonts.base,
          }))),
          (km = k(hu)(({ theme: e }) => ({
            position: "absolute",
            zIndex: 1,
            top: 6,
            right: 7,
            width: 20,
            height: 20,
            padding: 4,
            boxSizing: "border-box",
            cursor: "pointer",
            color: e.input.color,
          }))),
          (Pu = ((e) => ((e.RGB = "rgb"), (e.HSL = "hsl"), (e.HEX = "hex"), e))(
            Pu || {},
          )),
          (Yr = Object.values(Pu)),
          (Rm = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
          (Om =
            /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
          (_m =
            /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
          (Mo = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
          (Pm = /^\s*#?([0-9a-f]{3})\s*$/i),
          (Bm = { hex: ym, rgb: Am, hsl: Em }),
          (Xr = {
            hex: "transparent",
            rgb: "rgba(0, 0, 0, 0)",
            hsl: "hsla(0, 0%, 0%, 0)",
          }),
          (Du = (e) => {
            let t = e?.match(Rm);
            if (!t) return [0, 0, 0, 1];
            let [, r, n, o, i = 1] = t;
            return [r, n, o, i].map(Number);
          }),
          (Lt = (e) => {
            if (!e) return;
            let t = !0;
            if (Om.test(e)) {
              let [a, l, u, c] = Du(e),
                [d, p, h] = Be.default.rgb.hsl([a, l, u]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: Be.default.rgb.keyword([a, l, u]),
                colorSpace: "rgb",
                rgb: e,
                hsl: `hsla(${d}, ${p}%, ${h}%, ${c})`,
                hex: `#${Be.default.rgb.hex([a, l, u]).toLowerCase()}`,
              };
            }
            if (_m.test(e)) {
              let [a, l, u, c] = Du(e),
                [d, p, h] = Be.default.hsl.rgb([a, l, u]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: Be.default.hsl.keyword([a, l, u]),
                colorSpace: "hsl",
                rgb: `rgba(${d}, ${p}, ${h}, ${c})`,
                hsl: e,
                hex: `#${Be.default.hsl.hex([a, l, u]).toLowerCase()}`,
              };
            }
            let r = e.replace("#", ""),
              n = Be.default.keyword.rgb(r) || Be.default.hex.rgb(r),
              o = Be.default.rgb.hsl(n),
              i = e;
            if (
              (/[^#a-f0-9]/i.test(e) ? (i = r) : Mo.test(e) && (i = `#${r}`),
              i.startsWith("#"))
            )
              t = Mo.test(i);
            else
              try {
                Be.default.keyword.hex(i);
              } catch {
                t = !1;
              }
            return {
              valid: t,
              value: i,
              keyword: Be.default.rgb.keyword(n),
              colorSpace: "hex",
              rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
              hsl: `hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,
              hex: i,
            };
          }),
          (Nm = (e, t, r) => {
            if (!e || !t?.valid) return Xr[r];
            if (r !== "hex") return t?.[r] || Xr[r];
            if (!t.hex.startsWith("#"))
              try {
                return `#${Be.default.keyword.hex(t.hex)}`;
              } catch {
                return Xr.hex;
              }
            let n = t.hex.match(Pm);
            if (!n) return Mo.test(t.hex) ? t.hex : Xr.hex;
            let [o, i, a] = n[1].split("");
            return `#${o}${o}${i}${i}${a}${a}`;
          }),
          (jm = (e, t) => {
            let [r, n] = Ue(e || ""),
              [o, i] = Ue(() => Lt(r)),
              [a, l] = Ue(o?.colorSpace || "hex");
            rt(() => {
              let p = e || "",
                h = Lt(p);
              n(p), i(h), l(h?.colorSpace || "hex");
            }, [e]);
            let u = Yt(() => Nm(r, o, a).toLowerCase(), [r, o, a]),
              c = tt(
                (p) => {
                  let h = Lt(p),
                    y = h?.value || p || "";
                  n(y),
                    y === "" && (i(void 0), t(void 0)),
                    h && (i(h), l(h.colorSpace), t(h.value));
                },
                [t],
              ),
              d = tt(() => {
                let p = Yr.indexOf(a) + 1;
                p >= Yr.length && (p = 0), l(Yr[p]);
                let h = o?.[Yr[p]] || "";
                n(h), t(h);
              }, [o, a, t]);
            return {
              value: r,
              realValue: u,
              updateValue: c,
              color: o,
              colorSpace: a,
              cycleColorSpace: d,
            };
          }),
          (Zr = (e) => e.replace(/\s*/, "").toLowerCase()),
          (Lm = (e, t, r) => {
            let [n, o] = Ue(t?.valid ? [t] : []);
            rt(() => {
              t === void 0 && o([]);
            }, [t]);
            let i = Yt(
                () =>
                  (e || [])
                    .map((l) =>
                      typeof l == "string"
                        ? Lt(l)
                        : l.title
                          ? { ...Lt(l.color), keyword: l.title }
                          : Lt(l.color),
                    )
                    .concat(n)
                    .filter(Boolean)
                    .slice(-27),
                [e, n],
              ),
              a = tt(
                (l) => {
                  l?.valid &&
                    (i.some((u) => Zr(u[r]) === Zr(l[r])) ||
                      o((u) => u.concat(l)));
                },
                [r, i],
              );
            return { presets: i, addPreset: a };
          }),
          (Bu = ({
            name: e,
            value: t,
            onChange: r,
            onFocus: n,
            onBlur: o,
            presetColors: i,
            startOpen: a = !1,
            argType: l,
          }) => {
            let u = tt(iu(r, 200), [r]),
              {
                value: c,
                realValue: d,
                updateValue: p,
                color: h,
                colorSpace: y,
                cycleColorSpace: E,
              } = jm(t, u),
              { presets: v, addPreset: A } = Lm(i, h, y),
              D = Bm[y],
              S = !!l?.table?.readonly;
            return C.createElement(
              Dm,
              { "aria-readonly": S },
              C.createElement(
                Sm,
                {
                  startOpen: a,
                  trigger: S ? [null] : void 0,
                  closeOnOutsideClick: !0,
                  onVisibleChange: () => A(h),
                  tooltip: C.createElement(
                    wm,
                    null,
                    C.createElement(D, {
                      color: d === "transparent" ? "#000000" : d,
                      onChange: p,
                      onFocus: n,
                      onBlur: o,
                    }),
                    v.length > 0 &&
                      C.createElement(
                        xm,
                        null,
                        v.map((F, x) =>
                          C.createElement(
                            Sr,
                            {
                              key: `${F.value}-${x}`,
                              hasChrome: !1,
                              tooltip: C.createElement(Cm, {
                                note: F.keyword || F.value,
                              }),
                            },
                            C.createElement(Au, {
                              value: F[y],
                              active: h && Zr(F[y]) === Zr(h[y]),
                              onClick: () => p(F.value),
                            }),
                          ),
                        ),
                      ),
                  ),
                },
                C.createElement(Au, { value: d, style: { margin: 4 } }),
              ),
              C.createElement(Im, {
                id: Oo(e),
                value: c,
                onChange: (F) => p(F.target.value),
                onFocus: (F) => F.target.select(),
                readOnly: S,
                placeholder: "Choose color...",
              }),
              c ? C.createElement(km, { onClick: E }) : null,
            );
          }),
          (Mm = Bu);
      });
    V();
    J();
    H();
    V();
    J();
    H();
    V();
    J();
    H();
    Xt();
    Qt();
    V();
    J();
    H();
    V();
    J();
    H();
    V();
    J();
    H();
    var Kd = Object.defineProperty,
      ce = (e, t) => Kd(e, "name", { value: t, configurable: !0 });
    function pe(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n = Array.from(typeof e == "string" ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var o = n.reduce(function (l, u) {
        var c = u.match(/\n([\t ]+|(?!\s).)/g);
        return c
          ? l.concat(
              c.map(function (d) {
                var p, h;
                return (h =
                  (p = d.match(/[\t ]/g)) === null || p === void 0
                    ? void 0
                    : p.length) !== null && h !== void 0
                  ? h
                  : 0;
              }),
            )
          : l;
      }, []);
      if (o.length) {
        var i = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            "}",
          "g",
        );
        n = n.map(function (l) {
          return l.replace(
            i,
            `
`,
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, "");
      var a = n[0];
      return (
        t.forEach(function (l, u) {
          var c = a.match(/(?:^|\n)( *)$/),
            d = c ? c[1] : "",
            p = l;
          typeof l == "string" &&
            l.includes(`
`) &&
            (p = String(l)
              .split(
                `
`,
              )
              .map(function (h, y) {
                return y === 0 ? h : "" + d + h;
              }).join(`
`)),
            (a += p + n[u + 1]);
        }),
        a
      );
    }
    ce(pe, "dedent");
    function Cn({ code: e, category: t }) {
      let r = String(e).padStart(4, "0");
      return `SB_${t}_${r}`;
    }
    ce(Cn, "parseErrorCode");
    var ka = class Ra extends Error {
      constructor(t) {
        super(Ra.getFullMessage(t)),
          (this.data = {}),
          (this.fromStorybook = !0),
          (this.category = t.category),
          (this.documentation = t.documentation ?? !1),
          (this.code = t.code);
      }
      get fullErrorCode() {
        return Cn({ code: this.code, category: this.category });
      }
      get name() {
        let t = this.constructor.name;
        return `${this.fullErrorCode} (${t})`;
      }
      static getFullMessage({
        documentation: t,
        code: r,
        category: n,
        message: o,
      }) {
        let i;
        return (
          t === !0
            ? (i = `https://storybook.js.org/error/${Cn({ code: r, category: n })}`)
            : typeof t == "string"
              ? (i = t)
              : Array.isArray(t) &&
                (i = `
${t.map((a) => `	- ${a}`).join(`
`)}`),
          `${o}${
            i != null
              ? `

More info: ${i}
`
              : ""
          }`
        );
      }
    };
    ce(ka, "StorybookError");
    var be = ka,
      Yd = ((e) => (
        (e.BLOCKS = "BLOCKS"),
        (e.DOCS_TOOLS = "DOCS-TOOLS"),
        (e.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER"),
        (e.PREVIEW_CHANNELS = "PREVIEW_CHANNELS"),
        (e.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS"),
        (e.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER"),
        (e.PREVIEW_API = "PREVIEW_API"),
        (e.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM"),
        (e.PREVIEW_ROUTER = "PREVIEW_ROUTER"),
        (e.PREVIEW_THEMING = "PREVIEW_THEMING"),
        (e.RENDERER_HTML = "RENDERER_HTML"),
        (e.RENDERER_PREACT = "RENDERER_PREACT"),
        (e.RENDERER_REACT = "RENDERER_REACT"),
        (e.RENDERER_SERVER = "RENDERER_SERVER"),
        (e.RENDERER_SVELTE = "RENDERER_SVELTE"),
        (e.RENDERER_VUE = "RENDERER_VUE"),
        (e.RENDERER_VUE3 = "RENDERER_VUE3"),
        (e.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS"),
        (e.FRAMEWORK_NEXTJS = "FRAMEWORK_NEXTJS"),
        (e.ADDON_VITEST = "ADDON_VITEST"),
        e
      ))(Yd || {}),
      Oa = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 1,
            message: pe`
        Couldn't find story matching id '${t.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${t.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`,
          }),
            (this.data = t);
        }
      };
    ce(Oa, "MissingStoryAfterHmrError");
    var _a = Oa,
      Xd = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 2,
            documentation:
              "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function",
            message: pe`
        We detected that you use an implicit action arg while ${t.phase} of your story.  
        ${
          t.deprecated
            ? `
This is deprecated and won't work in Storybook 8 anymore.
`
            : ""
        }
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${t.name}: fn()
          }`,
          }),
            (this.data = t);
        }
      };
    ce(Xd, "ImplicitActionsDuringRendering");
    var Pa = class extends be {
      constructor() {
        super({
          category: "PREVIEW_API",
          code: 3,
          message: pe`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`,
        });
      }
    };
    ce(Pa, "CalledExtractOnStoreError");
    var Ba = Pa,
      Na = class extends be {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 4,
            message: pe`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
            documentation:
              "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field",
          });
        }
      };
    ce(Na, "MissingRenderToCanvasError");
    var ja = Na,
      La = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 5,
            message: pe`
        Called \`Preview.${t.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${t.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`,
          }),
            (this.data = t);
        }
      };
    ce(La, "CalledPreviewMethodBeforeInitializationError");
    var ke = La,
      Ma = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 6,
            message: pe`
        Error fetching \`/index.json\`:
        
        ${t.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`,
          }),
            (this.data = t);
        }
      };
    ce(Ma, "StoryIndexFetchError");
    var Ua = Ma,
      $a = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 7,
            message: pe`
        Tried to render docs entry ${t.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`,
          }),
            (this.data = t);
        }
      };
    ce($a, "MdxFileWithNoCsfReferencesError");
    var qa = $a,
      Va = class extends be {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 8,
            message: pe`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`,
          });
        }
      };
    ce(Va, "EmptyIndexError");
    var Ja = Va,
      Ha = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 9,
            message: pe`
        Couldn't find story matching '${t.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`,
          }),
            (this.data = t);
        }
      };
    ce(Ha, "NoStoryMatchError");
    var za = Ha,
      Ga = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 10,
            message: pe`
        Couldn't find story matching id '${t.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`,
          }),
            (this.data = t);
        }
      };
    ce(Ga, "MissingStoryFromCsfFileError");
    var Wa = Ga,
      Ka = class extends be {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 11,
            message: pe`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`,
          });
        }
      };
    ce(Ka, "StoryStoreAccessedBeforeInitializationError");
    var Ya = Ka,
      Xa = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 12,
            message: pe`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${t.playFunction}`,
          }),
            (this.data = t);
        }
      };
    ce(Xa, "MountMustBeDestructuredError");
    var wr = Xa,
      Qa = class extends be {
        constructor(t) {
          super({
            category: "PREVIEW_API",
            code: 14,
            message: pe`
        No render function available for storyId '${t.id}'
      `,
          }),
            (this.data = t);
        }
      };
    ce(Qa, "NoRenderFunctionError");
    var Za = Qa,
      ei = class extends be {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 15,
            message: pe`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `,
          });
        }
      };
    ce(ei, "NoStoryMountedError");
    var ti = ei,
      Qd = class extends be {
        constructor() {
          super({
            category: "FRAMEWORK_NEXTJS",
            code: 1,
            documentation:
              "https://storybook.js.org/docs/get-started/nextjs#faq",
            message: pe`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `,
          });
        }
      };
    ce(Qd, "NextJsSharpError");
    var Zd = class extends be {
      constructor(t) {
        super({
          category: "FRAMEWORK_NEXTJS",
          code: 2,
          message: pe`
        Tried to access router mocks from "${t.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `,
        }),
          (this.data = t);
      }
    };
    ce(Zd, "NextjsRouterMocksNotAvailable");
    var ri = class extends be {
      constructor(t) {
        super({
          category: "DOCS-TOOLS",
          code: 1,
          documentation:
            "https://github.com/storybookjs/storybook/issues/26606",
          message: pe`
        There was a failure when generating detailed ArgTypes in ${t.language} for:
        ${JSON.stringify(t.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `,
        }),
          (this.data = t);
      }
    };
    ce(ri, "UnknownArgTypesError");
    var Cr = ri,
      ep = class extends be {
        constructor(t) {
          super({
            category: "ADDON_VITEST",
            code: 1,
            message: pe`
        Encountered an unsupported value "${t.value}" when setting the viewport ${t.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `,
          }),
            (this.data = t);
        }
      };
    ce(ep, "UnsupportedViewportDimensionError");
    var Nt = ed(oi(), 1);
    V();
    J();
    H();
    V();
    J();
    H();
    var ub = __STORYBOOK_CHANNELS__,
      {
        Channel: Tr,
        HEARTBEAT_INTERVAL: cb,
        HEARTBEAT_MAX_LATENCY: db,
        PostMessageTransport: pb,
        WebsocketTransport: hb,
        createBrowserChannel: fb,
      } = __STORYBOOK_CHANNELS__;
    V();
    J();
    H();
    var Eb = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Ge,
        logger: Q,
        once: ot,
        pretty: vb,
      } = __STORYBOOK_CLIENT_LOGGER__;
    V();
    J();
    H();
    var Cb = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: ai,
        ARGTYPES_INFO_RESPONSE: xn,
        CHANNEL_CREATED: xb,
        CHANNEL_WS_DISCONNECT: Tb,
        CONFIG_ERROR: ii,
        CREATE_NEW_STORYFILE_REQUEST: Fb,
        CREATE_NEW_STORYFILE_RESPONSE: Ib,
        CURRENT_STORY_WAS_SET: Tn,
        DOCS_PREPARED: si,
        DOCS_RENDERED: Fr,
        FILE_COMPONENT_SEARCH_REQUEST: kb,
        FILE_COMPONENT_SEARCH_RESPONSE: Rb,
        FORCE_REMOUNT: li,
        FORCE_RE_RENDER: Ir,
        GLOBALS_UPDATED: ft,
        NAVIGATE_URL: ui,
        PLAY_FUNCTION_THREW_EXCEPTION: ci,
        PRELOAD_ENTRIES: di,
        PREVIEW_BUILDER_PROGRESS: Ob,
        PREVIEW_KEYDOWN: pi,
        REGISTER_SUBSCRIPTION: _b,
        REQUEST_WHATS_NEW_DATA: Pb,
        RESET_STORY_ARGS: Zt,
        RESULT_WHATS_NEW_DATA: Bb,
        SAVE_STORY_REQUEST: Nb,
        SAVE_STORY_RESPONSE: jb,
        SELECT_STORY: Lb,
        SET_CONFIG: Mb,
        SET_CURRENT_STORY: hi,
        SET_FILTER: Ub,
        SET_GLOBALS: fi,
        SET_INDEX: $b,
        SET_STORIES: qb,
        SET_WHATS_NEW_CACHE: Vb,
        SHARED_STATE_CHANGED: Jb,
        SHARED_STATE_SET: Hb,
        STORIES_COLLAPSE_ALL: zb,
        STORIES_EXPAND_ALL: Gb,
        STORY_ARGS_UPDATED: Fn,
        STORY_CHANGED: mi,
        STORY_ERRORED: yi,
        STORY_FINISHED: In,
        STORY_INDEX_INVALIDATED: gi,
        STORY_MISSING: kn,
        STORY_PREPARED: bi,
        STORY_RENDERED: er,
        STORY_RENDER_PHASE_CHANGED: It,
        STORY_SPECIFIED: Ei,
        STORY_THREW_EXCEPTION: vi,
        STORY_UNCHANGED: Ai,
        TELEMETRY_ERROR: Wb,
        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: Kb,
        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Yb,
        TESTING_MODULE_CRASH_REPORT: Xb,
        TESTING_MODULE_PROGRESS_REPORT: Qb,
        TESTING_MODULE_RUN_ALL_REQUEST: Zb,
        TESTING_MODULE_RUN_REQUEST: eE,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: tE,
        UNHANDLED_ERRORS_WHILE_PLAYING: Di,
        UPDATE_GLOBALS: kr,
        UPDATE_QUERY_PARAMS: Si,
        UPDATE_STORY_ARGS: tr,
      } = __STORYBOOK_CORE_EVENTS__;
    V();
    J();
    H();
    var tp = Object.create,
      On = Object.defineProperty,
      rp = Object.getOwnPropertyDescriptor,
      np = Object.getOwnPropertyNames,
      op = Object.getPrototypeOf,
      ap = Object.prototype.hasOwnProperty,
      he = (e, t) => On(e, "name", { value: t, configurable: !0 }),
      ip = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      sp = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of np(t))
            !ap.call(e, o) &&
              o !== r &&
              On(e, o, {
                get: () => t[o],
                enumerable: !(n = rp(t, o)) || n.enumerable,
              });
        return e;
      },
      lp = (e, t, r) => (
        (r = e != null ? tp(op(e)) : {}),
        sp(
          t || !e || !e.__esModule
            ? On(r, "default", { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      up = ip((e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (o) {
                    return Object.keys(o).concat(
                      Object.getOwnPropertySymbols(o),
                    );
                  }
                : Object.keys;
            return function (o, i) {
              return he(function a(l, u, c) {
                var d,
                  p,
                  h,
                  y = t.call(l),
                  E = t.call(u);
                if (l === u) return !0;
                if (l == null || u == null) return !1;
                if (c.indexOf(l) > -1 && c.indexOf(u) > -1) return !0;
                if (
                  (c.push(l, u),
                  y != E ||
                    ((d = n(l)),
                    (p = n(u)),
                    d.length != p.length ||
                      d.some(function (v) {
                        return !a(l[v], u[v], c);
                      })))
                )
                  return !1;
                switch (y.slice(8, -1)) {
                  case "Symbol":
                    return l.valueOf() == u.valueOf();
                  case "Date":
                  case "Number":
                    return +l == +u || (+l != +l && +u != +u);
                  case "RegExp":
                  case "Function":
                  case "String":
                  case "Boolean":
                    return "" + l == "" + u;
                  case "Set":
                  case "Map":
                    (d = l.entries()), (p = u.entries());
                    do
                      if (!a((h = d.next()).value, p.next().value, c))
                        return !1;
                    while (!h.done);
                    return !0;
                  case "ArrayBuffer":
                    (l = new Uint8Array(l)), (u = new Uint8Array(u));
                  case "DataView":
                    (l = new Uint8Array(l.buffer)),
                      (u = new Uint8Array(u.buffer));
                  case "Float32Array":
                  case "Float64Array":
                  case "Int8Array":
                  case "Int16Array":
                  case "Int32Array":
                  case "Uint8Array":
                  case "Uint16Array":
                  case "Uint32Array":
                  case "Uint8ClampedArray":
                  case "Arguments":
                  case "Array":
                    if (l.length != u.length) return !1;
                    for (h = 0; h < l.length; h++)
                      if (
                        (h in l || h in u) &&
                        (h in l != h in u || !a(l[h], u[h], c))
                      )
                        return !1;
                    return !0;
                  case "Object":
                    return a(r(l), r(u), c);
                  default:
                    return !1;
                }
              }, "n")(o, i, []);
            };
          })());
      });
    function xi(e) {
      return e
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/\./g, " ")
        .replace(/([^\n])([A-Z])([a-z])/g, (t, r, n, o) => `${r} ${n}${o}`)
        .replace(/([a-z])([A-Z])/g, (t, r, n) => `${r} ${n}`)
        .replace(/([a-z])([0-9])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/([0-9])([a-z])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/(\s|^)(\w)/g, (t, r, n) => `${r}${n.toUpperCase()}`)
        .replace(/ +/g, " ")
        .trim();
    }
    he(xi, "toStartCaseStr");
    var wi = lp(up(), 1),
      Ti = he(
        (e) => e.map((t) => typeof t < "u").filter(Boolean).length,
        "count",
      ),
      cp = he((e, t) => {
        let { exists: r, eq: n, neq: o, truthy: i } = e;
        if (Ti([r, n, o, i]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`,
          );
        if (typeof n < "u") return (0, wi.isEqual)(t, n);
        if (typeof o < "u") return !(0, wi.isEqual)(t, o);
        if (typeof r < "u") {
          let a = typeof t < "u";
          return r ? a : !a;
        }
        return typeof i > "u" || i ? !!t : !t;
      }, "testValue"),
      _n = he((e, t, r) => {
        if (!e.if) return !0;
        let { arg: n, global: o } = e.if;
        if (Ti([n, o]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`,
          );
        let i = n ? t[n] : r[o];
        return cp(e.if, i);
      }, "includeConditionalArg");
    function dp(e) {
      let t,
        r = {
          _tag: "Preview",
          input: e,
          get composed() {
            if (t) return t;
            let { addons: n, ...o } = e;
            return (t = Rt(at([...(n ?? []), o]))), t;
          },
          meta(n) {
            return Fi(n, this);
          },
        };
      return (globalThis.globalProjectAnnotations = r.composed), r;
    }
    he(dp, "__definePreview");
    function pp(e) {
      return (
        e != null &&
        typeof e == "object" &&
        "_tag" in e &&
        e?._tag === "Preview"
      );
    }
    he(pp, "isPreview");
    function hp(e) {
      return (
        e != null && typeof e == "object" && "_tag" in e && e?._tag === "Meta"
      );
    }
    he(hp, "isMeta");
    function Fi(e, t) {
      return {
        _tag: "Meta",
        input: e,
        preview: t,
        get composed() {
          throw new Error("Not implemented");
        },
        story(r) {
          return Ii(r, this);
        },
      };
    }
    he(Fi, "defineMeta");
    function Ii(e, t) {
      return {
        _tag: "Story",
        input: e,
        meta: t,
        get composed() {
          throw new Error("Not implemented");
        },
      };
    }
    he(Ii, "defineStory");
    function mt(e) {
      return (
        e != null && typeof e == "object" && "_tag" in e && e?._tag === "Story"
      );
    }
    he(mt, "isStory");
    var Pn = he(
        (e) =>
          e
            .toLowerCase()
            .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-")
            .replace(/-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        "sanitize",
      ),
      Ci = he((e, t) => {
        let r = Pn(e);
        if (r === "")
          throw new Error(
            `Invalid ${t} '${e}', must include alphanumeric characters`,
          );
        return r;
      }, "sanitizeSafe"),
      ki = he(
        (e, t) => `${Ci(e, "kind")}${t ? `--${Ci(t, "name")}` : ""}`,
        "toId",
      ),
      Ri = he((e) => xi(e), "storyNameFromExport");
    function Rn(e, t) {
      return Array.isArray(t) ? t.includes(e) : e.match(t);
    }
    he(Rn, "matches");
    function kt(e, { includeStories: t, excludeStories: r }) {
      return e !== "__esModule" && (!t || Rn(e, t)) && (!r || !Rn(e, r));
    }
    he(kt, "isExportStory");
    var sE = he((e, { rootSeparator: t, groupSeparator: r }) => {
        let [n, o] = e.split(t, 2),
          i = (o || e).split(r).filter((a) => !!a);
        return { root: o ? n : null, groups: i };
      }, "parseKind"),
      Oi = he((...e) => {
        let t = e.reduce(
          (r, n) => (n.startsWith("!") ? r.delete(n.slice(1)) : r.add(n), r),
          new Set(),
        );
        return Array.from(t);
      }, "combineTags");
    var fp = Object.create,
      ro = Object.defineProperty,
      mp = Object.getOwnPropertyDescriptor,
      yp = Object.getOwnPropertyNames,
      gp = Object.getPrototypeOf,
      bp = Object.prototype.hasOwnProperty,
      m = (e, t) => ro(e, "name", { value: t, configurable: !0 }),
      Rr = ((e) =>
        typeof Ie < "u"
          ? Ie
          : typeof Proxy < "u"
            ? new Proxy(e, { get: (t, r) => (typeof Ie < "u" ? Ie : t)[r] })
            : e)(function (e) {
        if (typeof Ie < "u") return Ie.apply(this, arguments);
        throw Error('Dynamic require of "' + e + '" is not supported');
      }),
      De = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      Ep = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of yp(t))
            !bp.call(e, o) &&
              o !== r &&
              ro(e, o, {
                get: () => t[o],
                enumerable: !(n = mp(t, o)) || n.enumerable,
              });
        return e;
      },
      Bt = (e, t, r) => (
        (r = e != null ? fp(gp(e)) : {}),
        Ep(
          t || !e || !e.__esModule
            ? ro(r, "default", { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      Wi = De((e, t) => {
        (function (r) {
          if (typeof e == "object" && typeof t < "u") t.exports = r();
          else if (typeof define == "function" && define.amd) define([], r);
          else {
            var n;
            typeof window < "u" || typeof window < "u"
              ? (n = window)
              : typeof self < "u"
                ? (n = self)
                : (n = this),
              (n.memoizerific = r());
          }
        })(function () {
          var r, n, o;
          return m(function i(a, l, u) {
            function c(h, y) {
              if (!l[h]) {
                if (!a[h]) {
                  var E = typeof Rr == "function" && Rr;
                  if (!y && E) return E(h, !0);
                  if (d) return d(h, !0);
                  var v = new Error("Cannot find module '" + h + "'");
                  throw ((v.code = "MODULE_NOT_FOUND"), v);
                }
                var A = (l[h] = { exports: {} });
                a[h][0].call(
                  A.exports,
                  function (D) {
                    var S = a[h][1][D];
                    return c(S || D);
                  },
                  A,
                  A.exports,
                  i,
                  a,
                  l,
                  u,
                );
              }
              return l[h].exports;
            }
            m(c, "s");
            for (
              var d = typeof Rr == "function" && Rr, p = 0;
              p < u.length;
              p++
            )
              c(u[p]);
            return c;
          }, "e")(
            {
              1: [
                function (i, a, l) {
                  a.exports = function (u) {
                    if (typeof Map != "function" || u) {
                      var c = i("./similar");
                      return new c();
                    } else return new Map();
                  };
                },
                { "./similar": 2 },
              ],
              2: [
                function (i, a, l) {
                  function u() {
                    return (
                      (this.list = []),
                      (this.lastItem = void 0),
                      (this.size = 0),
                      this
                    );
                  }
                  m(u, "Similar"),
                    (u.prototype.get = function (c) {
                      var d;
                      if (this.lastItem && this.isEqual(this.lastItem.key, c))
                        return this.lastItem.val;
                      if (((d = this.indexOf(c)), d >= 0))
                        return (this.lastItem = this.list[d]), this.list[d].val;
                    }),
                    (u.prototype.set = function (c, d) {
                      var p;
                      return this.lastItem && this.isEqual(this.lastItem.key, c)
                        ? ((this.lastItem.val = d), this)
                        : ((p = this.indexOf(c)),
                          p >= 0
                            ? ((this.lastItem = this.list[p]),
                              (this.list[p].val = d),
                              this)
                            : ((this.lastItem = { key: c, val: d }),
                              this.list.push(this.lastItem),
                              this.size++,
                              this));
                    }),
                    (u.prototype.delete = function (c) {
                      var d;
                      if (
                        (this.lastItem &&
                          this.isEqual(this.lastItem.key, c) &&
                          (this.lastItem = void 0),
                        (d = this.indexOf(c)),
                        d >= 0)
                      )
                        return this.size--, this.list.splice(d, 1)[0];
                    }),
                    (u.prototype.has = function (c) {
                      var d;
                      return this.lastItem && this.isEqual(this.lastItem.key, c)
                        ? !0
                        : ((d = this.indexOf(c)),
                          d >= 0 ? ((this.lastItem = this.list[d]), !0) : !1);
                    }),
                    (u.prototype.forEach = function (c, d) {
                      var p;
                      for (p = 0; p < this.size; p++)
                        c.call(
                          d || this,
                          this.list[p].val,
                          this.list[p].key,
                          this,
                        );
                    }),
                    (u.prototype.indexOf = function (c) {
                      var d;
                      for (d = 0; d < this.size; d++)
                        if (this.isEqual(this.list[d].key, c)) return d;
                      return -1;
                    }),
                    (u.prototype.isEqual = function (c, d) {
                      return c === d || (c !== c && d !== d);
                    }),
                    (a.exports = u);
                },
                {},
              ],
              3: [
                function (i, a, l) {
                  var u = i("map-or-similar");
                  a.exports = function (h) {
                    var y = new u(!1),
                      E = [];
                    return function (v) {
                      var A = m(function () {
                        var D = y,
                          S,
                          F,
                          x = arguments.length - 1,
                          O = Array(x + 1),
                          R = !0,
                          N;
                        if (
                          (A.numArgs || A.numArgs === 0) &&
                          A.numArgs !== x + 1
                        )
                          throw new Error(
                            "Memoizerific functions should always be called with the same number of arguments",
                          );
                        for (N = 0; N < x; N++) {
                          if (
                            ((O[N] = { cacheItem: D, arg: arguments[N] }),
                            D.has(arguments[N]))
                          ) {
                            D = D.get(arguments[N]);
                            continue;
                          }
                          (R = !1),
                            (S = new u(!1)),
                            D.set(arguments[N], S),
                            (D = S);
                        }
                        return (
                          R &&
                            (D.has(arguments[x])
                              ? (F = D.get(arguments[x]))
                              : (R = !1)),
                          R ||
                            ((F = v.apply(null, arguments)),
                            D.set(arguments[x], F)),
                          h > 0 &&
                            ((O[x] = { cacheItem: D, arg: arguments[x] }),
                            R ? c(E, O) : E.push(O),
                            E.length > h && d(E.shift())),
                          (A.wasMemoized = R),
                          (A.numArgs = x + 1),
                          F
                        );
                      }, "memoizerific");
                      return (
                        (A.limit = h),
                        (A.wasMemoized = !1),
                        (A.cache = y),
                        (A.lru = E),
                        A
                      );
                    };
                  };
                  function c(h, y) {
                    var E = h.length,
                      v = y.length,
                      A,
                      D,
                      S;
                    for (D = 0; D < E; D++) {
                      for (A = !0, S = 0; S < v; S++)
                        if (!p(h[D][S].arg, y[S].arg)) {
                          A = !1;
                          break;
                        }
                      if (A) break;
                    }
                    h.push(h.splice(D, 1)[0]);
                  }
                  m(c, "moveToMostRecentLru");
                  function d(h) {
                    var y = h.length,
                      E = h[y - 1],
                      v,
                      A;
                    for (
                      E.cacheItem.delete(E.arg), A = y - 2;
                      A >= 0 &&
                      ((E = h[A]), (v = E.cacheItem.get(E.arg)), !v || !v.size);
                      A--
                    )
                      E.cacheItem.delete(E.arg);
                  }
                  m(d, "removeCachedResult");
                  function p(h, y) {
                    return h === y || (h !== h && y !== y);
                  }
                  m(p, "isEqual");
                },
                { "map-or-similar": 1 },
              ],
            },
            {},
            [3],
          )(3);
        });
      }),
      Ki = De((e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.encodeString = n);
        var t = Array.from(
            { length: 256 },
            (o, i) =>
              "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase(),
          ),
          r = new Int8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
          ]);
        function n(o) {
          let i = o.length;
          if (i === 0) return "";
          let a = "",
            l = 0,
            u = 0;
          e: for (; u < i; u++) {
            let c = o.charCodeAt(u);
            for (; c < 128; ) {
              if (
                (r[c] !== 1 &&
                  (l < u && (a += o.slice(l, u)), (l = u + 1), (a += t[c])),
                ++u === i)
              )
                break e;
              c = o.charCodeAt(u);
            }
            if ((l < u && (a += o.slice(l, u)), c < 2048)) {
              (l = u + 1), (a += t[192 | (c >> 6)] + t[128 | (c & 63)]);
              continue;
            }
            if (c < 55296 || c >= 57344) {
              (l = u + 1),
                (a +=
                  t[224 | (c >> 12)] +
                  t[128 | ((c >> 6) & 63)] +
                  t[128 | (c & 63)]);
              continue;
            }
            if ((++u, u >= i)) throw new Error("URI malformed");
            let d = o.charCodeAt(u) & 1023;
            (l = u + 1),
              (c = 65536 + (((c & 1023) << 10) | d)),
              (a +=
                t[240 | (c >> 18)] +
                t[128 | ((c >> 12) & 63)] +
                t[128 | ((c >> 6) & 63)] +
                t[128 | (c & 63)]);
          }
          return l === 0 ? o : l < i ? a + o.slice(l) : a;
        }
        m(n, "encodeString");
      }),
      no = De((e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defaultOptions =
            e.defaultShouldSerializeObject =
            e.defaultValueSerializer =
              void 0);
        var t = Ki(),
          r = m((i) => {
            switch (typeof i) {
              case "string":
                return (0, t.encodeString)(i);
              case "bigint":
              case "boolean":
                return "" + i;
              case "number":
                if (Number.isFinite(i))
                  return i < 1e21 ? "" + i : (0, t.encodeString)("" + i);
                break;
            }
            return i instanceof Date
              ? (0, t.encodeString)(i.toISOString())
              : "";
          }, "defaultValueSerializer");
        e.defaultValueSerializer = r;
        var n = m((i) => i instanceof Date, "defaultShouldSerializeObject");
        e.defaultShouldSerializeObject = n;
        var o = m((i) => i, "identityFunc");
        e.defaultOptions = {
          nesting: !0,
          nestingSyntax: "dot",
          arrayRepeat: !1,
          arrayRepeatSyntax: "repeat",
          delimiter: 38,
          valueDeserializer: o,
          valueSerializer: e.defaultValueSerializer,
          keyDeserializer: o,
          shouldSerializeObject: e.defaultShouldSerializeObject,
        };
      }),
      Yi = De((e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getDeepObject = o),
          (e.stringifyObject = d);
        var t = no(),
          r = Ki();
        function n(p) {
          return p === "__proto__" || p === "constructor" || p === "prototype";
        }
        m(n, "isPrototypeKey");
        function o(p, h, y, E, v) {
          if (n(h)) return p;
          let A = p[h];
          return typeof A == "object" && A !== null
            ? A
            : !E &&
                (v ||
                  typeof y == "number" ||
                  (typeof y == "string" &&
                    y * 0 === 0 &&
                    y.indexOf(".") === -1))
              ? (p[h] = [])
              : (p[h] = {});
        }
        m(o, "getDeepObject");
        var i = 20,
          a = "[]",
          l = "[",
          u = "]",
          c = ".";
        function d(p, h, y = 0, E, v) {
          let {
              nestingSyntax: A = t.defaultOptions.nestingSyntax,
              arrayRepeat: D = t.defaultOptions.arrayRepeat,
              arrayRepeatSyntax: S = t.defaultOptions.arrayRepeatSyntax,
              nesting: F = t.defaultOptions.nesting,
              delimiter: x = t.defaultOptions.delimiter,
              valueSerializer: O = t.defaultOptions.valueSerializer,
              shouldSerializeObject: R = t.defaultOptions.shouldSerializeObject,
            } = h,
            N = typeof x == "number" ? String.fromCharCode(x) : x,
            j = v === !0 && D,
            U = A === "dot" || (A === "js" && !v);
          if (y > i) return "";
          let P = "",
            K = !0,
            L = !1;
          for (let z in p) {
            let b = p[z],
              w;
            E
              ? ((w = E),
                j
                  ? S === "bracket" && (w += a)
                  : U
                    ? ((w += c), (w += z))
                    : ((w += l), (w += z), (w += u)))
              : (w = z),
              K || (P += N),
              typeof b == "object" && b !== null && !R(b)
                ? ((L = b.pop !== void 0),
                  (F || (D && L)) && (P += d(b, h, y + 1, w, L)))
                : ((P += (0, r.encodeString)(w)), (P += "="), (P += O(b, z))),
              K && (K = !1);
          }
          return P;
        }
        m(d, "stringifyObject");
      }),
      vp = De((e, t) => {
        "use strict";
        var r = 12,
          n = 0,
          o = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7,
            7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24,
            36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7,
          ];
        function i(u) {
          var c = u.indexOf("%");
          if (c === -1) return u;
          for (
            var d = u.length, p = "", h = 0, y = 0, E = c, v = r;
            c > -1 && c < d;

          ) {
            var A = l(u[c + 1], 4),
              D = l(u[c + 2], 0),
              S = A | D,
              F = o[S];
            if (
              ((v = o[256 + v + F]), (y = (y << 6) | (S & o[364 + F])), v === r)
            )
              (p += u.slice(h, E)),
                (p +=
                  y <= 65535
                    ? String.fromCharCode(y)
                    : String.fromCharCode(
                        55232 + (y >> 10),
                        56320 + (y & 1023),
                      )),
                (y = 0),
                (h = c + 3),
                (c = E = u.indexOf("%", h));
            else {
              if (v === n) return null;
              if (((c += 3), c < d && u.charCodeAt(c) === 37)) continue;
              return null;
            }
          }
          return p + u.slice(h);
        }
        m(i, "decodeURIComponent");
        var a = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15,
        };
        function l(u, c) {
          var d = a[u];
          return d === void 0 ? 255 : d << c;
        }
        m(l, "hexCodeToInt"), (t.exports = i);
      }),
      Ap = De((e) => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (p) {
            return p && p.__esModule ? p : { default: p };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.numberValueDeserializer = e.numberKeyDeserializer = void 0),
          (e.parse = d);
        var r = Yi(),
          n = no(),
          o = t(vp()),
          i = m((p) => {
            let h = Number(p);
            return Number.isNaN(h) ? p : h;
          }, "numberKeyDeserializer");
        e.numberKeyDeserializer = i;
        var a = m((p) => {
          let h = Number(p);
          return Number.isNaN(h) ? p : h;
        }, "numberValueDeserializer");
        e.numberValueDeserializer = a;
        var l = /\+/g,
          u = m(function () {}, "Empty");
        u.prototype = Object.create(null);
        function c(p, h, y, E, v) {
          let A = p.substring(h, y);
          return (
            E && (A = A.replace(l, " ")), v && (A = (0, o.default)(A) || A), A
          );
        }
        m(c, "computeKeySlice");
        function d(p, h) {
          let {
              valueDeserializer: y = n.defaultOptions.valueDeserializer,
              keyDeserializer: E = n.defaultOptions.keyDeserializer,
              arrayRepeatSyntax: v = n.defaultOptions.arrayRepeatSyntax,
              nesting: A = n.defaultOptions.nesting,
              arrayRepeat: D = n.defaultOptions.arrayRepeat,
              nestingSyntax: S = n.defaultOptions.nestingSyntax,
              delimiter: F = n.defaultOptions.delimiter,
            } = h ?? {},
            x = typeof F == "string" ? F.charCodeAt(0) : F,
            O = S === "js",
            R = new u();
          if (typeof p != "string") return R;
          let N = p.length,
            j = "",
            U = -1,
            P = -1,
            K = -1,
            L = R,
            z,
            b = "",
            w = "",
            I = !1,
            M = !1,
            $ = !1,
            Y = !1,
            re = !1,
            Z = !1,
            X = !1,
            ee = 0,
            ge = -1,
            ue = -1,
            Se = -1;
          for (let ne = 0; ne < N + 1; ne++) {
            if (((ee = ne !== N ? p.charCodeAt(ne) : x), ee === x)) {
              if (
                ((X = P > U),
                X || (P = ne),
                K !== P - 1 &&
                  ((w = c(p, K + 1, ge > -1 ? ge : P, $, I)),
                  (b = E(w)),
                  z !== void 0 &&
                    (L = (0, r.getDeepObject)(L, z, b, O && re, O && Z))),
                X || b !== "")
              ) {
                X &&
                  ((j = p.slice(P + 1, ne)),
                  Y && (j = j.replace(l, " ")),
                  M && (j = (0, o.default)(j) || j));
                let je = y(j, b);
                if (D) {
                  let Re = L[b];
                  Re === void 0
                    ? ge > -1
                      ? (L[b] = [je])
                      : (L[b] = je)
                    : Re.pop
                      ? Re.push(je)
                      : (L[b] = [Re, je]);
                } else L[b] = je;
              }
              (j = ""),
                (U = ne),
                (P = ne),
                (I = !1),
                (M = !1),
                ($ = !1),
                (Y = !1),
                (re = !1),
                (Z = !1),
                (ge = -1),
                (K = ne),
                (L = R),
                (z = void 0),
                (b = "");
            } else
              ee === 93
                ? (D && v === "bracket" && Se === 91 && (ge = ue),
                  A &&
                    (S === "index" || O) &&
                    P <= U &&
                    (K !== ue &&
                      ((w = c(p, K + 1, ne, $, I)),
                      (b = E(w)),
                      z !== void 0 &&
                        (L = (0, r.getDeepObject)(L, z, b, void 0, O)),
                      (z = b),
                      ($ = !1),
                      (I = !1)),
                    (K = ne),
                    (Z = !0),
                    (re = !1)))
                : ee === 46
                  ? A &&
                    (S === "dot" || O) &&
                    P <= U &&
                    (K !== ue &&
                      ((w = c(p, K + 1, ne, $, I)),
                      (b = E(w)),
                      z !== void 0 && (L = (0, r.getDeepObject)(L, z, b, O)),
                      (z = b),
                      ($ = !1),
                      (I = !1)),
                    (re = !0),
                    (Z = !1),
                    (K = ne))
                  : ee === 91
                    ? A &&
                      (S === "index" || O) &&
                      P <= U &&
                      (K !== ue &&
                        ((w = c(p, K + 1, ne, $, I)),
                        (b = E(w)),
                        O &&
                          z !== void 0 &&
                          (L = (0, r.getDeepObject)(L, z, b, O)),
                        (z = b),
                        ($ = !1),
                        (I = !1),
                        (re = !1),
                        (Z = !0)),
                      (K = ne))
                    : ee === 61
                      ? P <= U
                        ? (P = ne)
                        : (M = !0)
                      : ee === 43
                        ? P > U
                          ? (Y = !0)
                          : ($ = !0)
                        : ee === 37 && (P > U ? (M = !0) : (I = !0));
            (ue = ne), (Se = ee);
          }
          return R;
        }
        m(d, "parse");
      }),
      Dp = De((e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.stringify = r);
        var t = Yi();
        function r(n, o) {
          if (n === null || typeof n != "object") return "";
          let i = o ?? {};
          return (0, t.stringifyObject)(n, i);
        }
        m(r, "stringify");
      }),
      oo = De((e) => {
        "use strict";
        var t =
            (e && e.__createBinding) ||
            (Object.create
              ? function (i, a, l, u) {
                  u === void 0 && (u = l);
                  var c = Object.getOwnPropertyDescriptor(a, l);
                  (!c ||
                    ("get" in c
                      ? !a.__esModule
                      : c.writable || c.configurable)) &&
                    (c = {
                      enumerable: !0,
                      get: m(function () {
                        return a[l];
                      }, "get"),
                    }),
                    Object.defineProperty(i, u, c);
                }
              : function (i, a, l, u) {
                  u === void 0 && (u = l), (i[u] = a[l]);
                }),
          r =
            (e && e.__exportStar) ||
            function (i, a) {
              for (var l in i)
                l !== "default" &&
                  !Object.prototype.hasOwnProperty.call(a, l) &&
                  t(a, i, l);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.stringify = e.parse = void 0);
        var n = Ap();
        Object.defineProperty(e, "parse", {
          enumerable: !0,
          get: m(function () {
            return n.parse;
          }, "get"),
        });
        var o = Dp();
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: m(function () {
            return o.stringify;
          }, "get"),
        }),
          r(no(), e);
      }),
      Xi = De((e, t) => {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Abreve: "\u0102",
          abreve: "\u0103",
          ac: "\u223E",
          acd: "\u223F",
          acE: "\u223E\u0333",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          Acy: "\u0410",
          acy: "\u0430",
          AElig: "\xC6",
          aelig: "\xE6",
          af: "\u2061",
          Afr: "\u{1D504}",
          afr: "\u{1D51E}",
          Agrave: "\xC0",
          agrave: "\xE0",
          alefsym: "\u2135",
          aleph: "\u2135",
          Alpha: "\u0391",
          alpha: "\u03B1",
          Amacr: "\u0100",
          amacr: "\u0101",
          amalg: "\u2A3F",
          amp: "&",
          AMP: "&",
          andand: "\u2A55",
          And: "\u2A53",
          and: "\u2227",
          andd: "\u2A5C",
          andslope: "\u2A58",
          andv: "\u2A5A",
          ang: "\u2220",
          ange: "\u29A4",
          angle: "\u2220",
          angmsdaa: "\u29A8",
          angmsdab: "\u29A9",
          angmsdac: "\u29AA",
          angmsdad: "\u29AB",
          angmsdae: "\u29AC",
          angmsdaf: "\u29AD",
          angmsdag: "\u29AE",
          angmsdah: "\u29AF",
          angmsd: "\u2221",
          angrt: "\u221F",
          angrtvb: "\u22BE",
          angrtvbd: "\u299D",
          angsph: "\u2222",
          angst: "\xC5",
          angzarr: "\u237C",
          Aogon: "\u0104",
          aogon: "\u0105",
          Aopf: "\u{1D538}",
          aopf: "\u{1D552}",
          apacir: "\u2A6F",
          ap: "\u2248",
          apE: "\u2A70",
          ape: "\u224A",
          apid: "\u224B",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224A",
          Aring: "\xC5",
          aring: "\xE5",
          Ascr: "\u{1D49C}",
          ascr: "\u{1D4B6}",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224D",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          awconint: "\u2233",
          awint: "\u2A11",
          backcong: "\u224C",
          backepsilon: "\u03F6",
          backprime: "\u2035",
          backsim: "\u223D",
          backsimeq: "\u22CD",
          Backslash: "\u2216",
          Barv: "\u2AE7",
          barvee: "\u22BD",
          barwed: "\u2305",
          Barwed: "\u2306",
          barwedge: "\u2305",
          bbrk: "\u23B5",
          bbrktbrk: "\u23B6",
          bcong: "\u224C",
          Bcy: "\u0411",
          bcy: "\u0431",
          bdquo: "\u201E",
          becaus: "\u2235",
          because: "\u2235",
          Because: "\u2235",
          bemptyv: "\u29B0",
          bepsi: "\u03F6",
          bernou: "\u212C",
          Bernoullis: "\u212C",
          Beta: "\u0392",
          beta: "\u03B2",
          beth: "\u2136",
          between: "\u226C",
          Bfr: "\u{1D505}",
          bfr: "\u{1D51F}",
          bigcap: "\u22C2",
          bigcirc: "\u25EF",
          bigcup: "\u22C3",
          bigodot: "\u2A00",
          bigoplus: "\u2A01",
          bigotimes: "\u2A02",
          bigsqcup: "\u2A06",
          bigstar: "\u2605",
          bigtriangledown: "\u25BD",
          bigtriangleup: "\u25B3",
          biguplus: "\u2A04",
          bigvee: "\u22C1",
          bigwedge: "\u22C0",
          bkarow: "\u290D",
          blacklozenge: "\u29EB",
          blacksquare: "\u25AA",
          blacktriangle: "\u25B4",
          blacktriangledown: "\u25BE",
          blacktriangleleft: "\u25C2",
          blacktriangleright: "\u25B8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20E5",
          bnequiv: "\u2261\u20E5",
          bNot: "\u2AED",
          bnot: "\u2310",
          Bopf: "\u{1D539}",
          bopf: "\u{1D553}",
          bot: "\u22A5",
          bottom: "\u22A5",
          bowtie: "\u22C8",
          boxbox: "\u29C9",
          boxdl: "\u2510",
          boxdL: "\u2555",
          boxDl: "\u2556",
          boxDL: "\u2557",
          boxdr: "\u250C",
          boxdR: "\u2552",
          boxDr: "\u2553",
          boxDR: "\u2554",
          boxh: "\u2500",
          boxH: "\u2550",
          boxhd: "\u252C",
          boxHd: "\u2564",
          boxhD: "\u2565",
          boxHD: "\u2566",
          boxhu: "\u2534",
          boxHu: "\u2567",
          boxhU: "\u2568",
          boxHU: "\u2569",
          boxminus: "\u229F",
          boxplus: "\u229E",
          boxtimes: "\u22A0",
          boxul: "\u2518",
          boxuL: "\u255B",
          boxUl: "\u255C",
          boxUL: "\u255D",
          boxur: "\u2514",
          boxuR: "\u2558",
          boxUr: "\u2559",
          boxUR: "\u255A",
          boxv: "\u2502",
          boxV: "\u2551",
          boxvh: "\u253C",
          boxvH: "\u256A",
          boxVh: "\u256B",
          boxVH: "\u256C",
          boxvl: "\u2524",
          boxvL: "\u2561",
          boxVl: "\u2562",
          boxVL: "\u2563",
          boxvr: "\u251C",
          boxvR: "\u255E",
          boxVr: "\u255F",
          boxVR: "\u2560",
          bprime: "\u2035",
          breve: "\u02D8",
          Breve: "\u02D8",
          brvbar: "\xA6",
          bscr: "\u{1D4B7}",
          Bscr: "\u212C",
          bsemi: "\u204F",
          bsim: "\u223D",
          bsime: "\u22CD",
          bsolb: "\u29C5",
          bsol: "\\",
          bsolhsub: "\u27C8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224E",
          bumpE: "\u2AAE",
          bumpe: "\u224F",
          Bumpeq: "\u224E",
          bumpeq: "\u224F",
          Cacute: "\u0106",
          cacute: "\u0107",
          capand: "\u2A44",
          capbrcup: "\u2A49",
          capcap: "\u2A4B",
          cap: "\u2229",
          Cap: "\u22D2",
          capcup: "\u2A47",
          capdot: "\u2A40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\uFE00",
          caret: "\u2041",
          caron: "\u02C7",
          Cayleys: "\u212D",
          ccaps: "\u2A4D",
          Ccaron: "\u010C",
          ccaron: "\u010D",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          Ccirc: "\u0108",
          ccirc: "\u0109",
          Cconint: "\u2230",
          ccups: "\u2A4C",
          ccupssm: "\u2A50",
          Cdot: "\u010A",
          cdot: "\u010B",
          cedil: "\xB8",
          Cedilla: "\xB8",
          cemptyv: "\u29B2",
          cent: "\xA2",
          centerdot: "\xB7",
          CenterDot: "\xB7",
          cfr: "\u{1D520}",
          Cfr: "\u212D",
          CHcy: "\u0427",
          chcy: "\u0447",
          check: "\u2713",
          checkmark: "\u2713",
          Chi: "\u03A7",
          chi: "\u03C7",
          circ: "\u02C6",
          circeq: "\u2257",
          circlearrowleft: "\u21BA",
          circlearrowright: "\u21BB",
          circledast: "\u229B",
          circledcirc: "\u229A",
          circleddash: "\u229D",
          CircleDot: "\u2299",
          circledR: "\xAE",
          circledS: "\u24C8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cir: "\u25CB",
          cirE: "\u29C3",
          cire: "\u2257",
          cirfnint: "\u2A10",
          cirmid: "\u2AEF",
          cirscir: "\u29C2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201D",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          colon: ":",
          Colon: "\u2237",
          Colone: "\u2A74",
          colone: "\u2254",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2A6D",
          Congruent: "\u2261",
          conint: "\u222E",
          Conint: "\u222F",
          ContourIntegral: "\u222E",
          copf: "\u{1D554}",
          Copf: "\u2102",
          coprod: "\u2210",
          Coproduct: "\u2210",
          copy: "\xA9",
          COPY: "\xA9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21B5",
          cross: "\u2717",
          Cross: "\u2A2F",
          Cscr: "\u{1D49E}",
          cscr: "\u{1D4B8}",
          csub: "\u2ACF",
          csube: "\u2AD1",
          csup: "\u2AD0",
          csupe: "\u2AD2",
          ctdot: "\u22EF",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22DE",
          cuesc: "\u22DF",
          cularr: "\u21B6",
          cularrp: "\u293D",
          cupbrcap: "\u2A48",
          cupcap: "\u2A46",
          CupCap: "\u224D",
          cup: "\u222A",
          Cup: "\u22D3",
          cupcup: "\u2A4A",
          cupdot: "\u228D",
          cupor: "\u2A45",
          cups: "\u222A\uFE00",
          curarr: "\u21B7",
          curarrm: "\u293C",
          curlyeqprec: "\u22DE",
          curlyeqsucc: "\u22DF",
          curlyvee: "\u22CE",
          curlywedge: "\u22CF",
          curren: "\xA4",
          curvearrowleft: "\u21B6",
          curvearrowright: "\u21B7",
          cuvee: "\u22CE",
          cuwed: "\u22CF",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232D",
          dagger: "\u2020",
          Dagger: "\u2021",
          daleth: "\u2138",
          darr: "\u2193",
          Darr: "\u21A1",
          dArr: "\u21D3",
          dash: "\u2010",
          Dashv: "\u2AE4",
          dashv: "\u22A3",
          dbkarow: "\u290F",
          dblac: "\u02DD",
          Dcaron: "\u010E",
          dcaron: "\u010F",
          Dcy: "\u0414",
          dcy: "\u0434",
          ddagger: "\u2021",
          ddarr: "\u21CA",
          DD: "\u2145",
          dd: "\u2146",
          DDotrahd: "\u2911",
          ddotseq: "\u2A77",
          deg: "\xB0",
          Del: "\u2207",
          Delta: "\u0394",
          delta: "\u03B4",
          demptyv: "\u29B1",
          dfisht: "\u297F",
          Dfr: "\u{1D507}",
          dfr: "\u{1D521}",
          dHar: "\u2965",
          dharl: "\u21C3",
          dharr: "\u21C2",
          DiacriticalAcute: "\xB4",
          DiacriticalDot: "\u02D9",
          DiacriticalDoubleAcute: "\u02DD",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02DC",
          diam: "\u22C4",
          diamond: "\u22C4",
          Diamond: "\u22C4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xA8",
          DifferentialD: "\u2146",
          digamma: "\u03DD",
          disin: "\u22F2",
          div: "\xF7",
          divide: "\xF7",
          divideontimes: "\u22C7",
          divonx: "\u22C7",
          DJcy: "\u0402",
          djcy: "\u0452",
          dlcorn: "\u231E",
          dlcrop: "\u230D",
          dollar: "$",
          Dopf: "\u{1D53B}",
          dopf: "\u{1D555}",
          Dot: "\xA8",
          dot: "\u02D9",
          DotDot: "\u20DC",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22A1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222F",
          DoubleDot: "\xA8",
          DoubleDownArrow: "\u21D3",
          DoubleLeftArrow: "\u21D0",
          DoubleLeftRightArrow: "\u21D4",
          DoubleLeftTee: "\u2AE4",
          DoubleLongLeftArrow: "\u27F8",
          DoubleLongLeftRightArrow: "\u27FA",
          DoubleLongRightArrow: "\u27F9",
          DoubleRightArrow: "\u21D2",
          DoubleRightTee: "\u22A8",
          DoubleUpArrow: "\u21D1",
          DoubleUpDownArrow: "\u21D5",
          DoubleVerticalBar: "\u2225",
          DownArrowBar: "\u2913",
          downarrow: "\u2193",
          DownArrow: "\u2193",
          Downarrow: "\u21D3",
          DownArrowUpArrow: "\u21F5",
          DownBreve: "\u0311",
          downdownarrows: "\u21CA",
          downharpoonleft: "\u21C3",
          downharpoonright: "\u21C2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295E",
          DownLeftVectorBar: "\u2956",
          DownLeftVector: "\u21BD",
          DownRightTeeVector: "\u295F",
          DownRightVectorBar: "\u2957",
          DownRightVector: "\u21C1",
          DownTeeArrow: "\u21A7",
          DownTee: "\u22A4",
          drbkarow: "\u2910",
          drcorn: "\u231F",
          drcrop: "\u230C",
          Dscr: "\u{1D49F}",
          dscr: "\u{1D4B9}",
          DScy: "\u0405",
          dscy: "\u0455",
          dsol: "\u29F6",
          Dstrok: "\u0110",
          dstrok: "\u0111",
          dtdot: "\u22F1",
          dtri: "\u25BF",
          dtrif: "\u25BE",
          duarr: "\u21F5",
          duhar: "\u296F",
          dwangle: "\u29A6",
          DZcy: "\u040F",
          dzcy: "\u045F",
          dzigrarr: "\u27FF",
          Eacute: "\xC9",
          eacute: "\xE9",
          easter: "\u2A6E",
          Ecaron: "\u011A",
          ecaron: "\u011B",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          ecir: "\u2256",
          ecolon: "\u2255",
          Ecy: "\u042D",
          ecy: "\u044D",
          eDDot: "\u2A77",
          Edot: "\u0116",
          edot: "\u0117",
          eDot: "\u2251",
          ee: "\u2147",
          efDot: "\u2252",
          Efr: "\u{1D508}",
          efr: "\u{1D522}",
          eg: "\u2A9A",
          Egrave: "\xC8",
          egrave: "\xE8",
          egs: "\u2A96",
          egsdot: "\u2A98",
          el: "\u2A99",
          Element: "\u2208",
          elinters: "\u23E7",
          ell: "\u2113",
          els: "\u2A95",
          elsdot: "\u2A97",
          Emacr: "\u0112",
          emacr: "\u0113",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25FB",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25AB",
          emsp13: "\u2004",
          emsp14: "\u2005",
          emsp: "\u2003",
          ENG: "\u014A",
          eng: "\u014B",
          ensp: "\u2002",
          Eogon: "\u0118",
          eogon: "\u0119",
          Eopf: "\u{1D53C}",
          eopf: "\u{1D556}",
          epar: "\u22D5",
          eparsl: "\u29E3",
          eplus: "\u2A71",
          epsi: "\u03B5",
          Epsilon: "\u0395",
          epsilon: "\u03B5",
          epsiv: "\u03F5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2A96",
          eqslantless: "\u2A95",
          Equal: "\u2A75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225F",
          Equilibrium: "\u21CC",
          equiv: "\u2261",
          equivDD: "\u2A78",
          eqvparsl: "\u29E5",
          erarr: "\u2971",
          erDot: "\u2253",
          escr: "\u212F",
          Escr: "\u2130",
          esdot: "\u2250",
          Esim: "\u2A73",
          esim: "\u2242",
          Eta: "\u0397",
          eta: "\u03B7",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          euro: "\u20AC",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          exponentiale: "\u2147",
          ExponentialE: "\u2147",
          fallingdotseq: "\u2252",
          Fcy: "\u0424",
          fcy: "\u0444",
          female: "\u2640",
          ffilig: "\uFB03",
          fflig: "\uFB00",
          ffllig: "\uFB04",
          Ffr: "\u{1D509}",
          ffr: "\u{1D523}",
          filig: "\uFB01",
          FilledSmallSquare: "\u25FC",
          FilledVerySmallSquare: "\u25AA",
          fjlig: "fj",
          flat: "\u266D",
          fllig: "\uFB02",
          fltns: "\u25B1",
          fnof: "\u0192",
          Fopf: "\u{1D53D}",
          fopf: "\u{1D557}",
          forall: "\u2200",
          ForAll: "\u2200",
          fork: "\u22D4",
          forkv: "\u2AD9",
          Fouriertrf: "\u2131",
          fpartint: "\u2A0D",
          frac12: "\xBD",
          frac13: "\u2153",
          frac14: "\xBC",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215B",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xBE",
          frac35: "\u2157",
          frac38: "\u215C",
          frac45: "\u2158",
          frac56: "\u215A",
          frac58: "\u215D",
          frac78: "\u215E",
          frasl: "\u2044",
          frown: "\u2322",
          fscr: "\u{1D4BB}",
          Fscr: "\u2131",
          gacute: "\u01F5",
          Gamma: "\u0393",
          gamma: "\u03B3",
          Gammad: "\u03DC",
          gammad: "\u03DD",
          gap: "\u2A86",
          Gbreve: "\u011E",
          gbreve: "\u011F",
          Gcedil: "\u0122",
          Gcirc: "\u011C",
          gcirc: "\u011D",
          Gcy: "\u0413",
          gcy: "\u0433",
          Gdot: "\u0120",
          gdot: "\u0121",
          ge: "\u2265",
          gE: "\u2267",
          gEl: "\u2A8C",
          gel: "\u22DB",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2A7E",
          gescc: "\u2AA9",
          ges: "\u2A7E",
          gesdot: "\u2A80",
          gesdoto: "\u2A82",
          gesdotol: "\u2A84",
          gesl: "\u22DB\uFE00",
          gesles: "\u2A94",
          Gfr: "\u{1D50A}",
          gfr: "\u{1D524}",
          gg: "\u226B",
          Gg: "\u22D9",
          ggg: "\u22D9",
          gimel: "\u2137",
          GJcy: "\u0403",
          gjcy: "\u0453",
          gla: "\u2AA5",
          gl: "\u2277",
          glE: "\u2A92",
          glj: "\u2AA4",
          gnap: "\u2A8A",
          gnapprox: "\u2A8A",
          gne: "\u2A88",
          gnE: "\u2269",
          gneq: "\u2A88",
          gneqq: "\u2269",
          gnsim: "\u22E7",
          Gopf: "\u{1D53E}",
          gopf: "\u{1D558}",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22DB",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2AA2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2A7E",
          GreaterTilde: "\u2273",
          Gscr: "\u{1D4A2}",
          gscr: "\u210A",
          gsim: "\u2273",
          gsime: "\u2A8E",
          gsiml: "\u2A90",
          gtcc: "\u2AA7",
          gtcir: "\u2A7A",
          gt: ">",
          GT: ">",
          Gt: "\u226B",
          gtdot: "\u22D7",
          gtlPar: "\u2995",
          gtquest: "\u2A7C",
          gtrapprox: "\u2A86",
          gtrarr: "\u2978",
          gtrdot: "\u22D7",
          gtreqless: "\u22DB",
          gtreqqless: "\u2A8C",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\uFE00",
          gvnE: "\u2269\uFE00",
          Hacek: "\u02C7",
          hairsp: "\u200A",
          half: "\xBD",
          hamilt: "\u210B",
          HARDcy: "\u042A",
          hardcy: "\u044A",
          harrcir: "\u2948",
          harr: "\u2194",
          hArr: "\u21D4",
          harrw: "\u21AD",
          Hat: "^",
          hbar: "\u210F",
          Hcirc: "\u0124",
          hcirc: "\u0125",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22B9",
          hfr: "\u{1D525}",
          Hfr: "\u210C",
          HilbertSpace: "\u210B",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21FF",
          homtht: "\u223B",
          hookleftarrow: "\u21A9",
          hookrightarrow: "\u21AA",
          hopf: "\u{1D559}",
          Hopf: "\u210D",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          hscr: "\u{1D4BD}",
          Hscr: "\u210B",
          hslash: "\u210F",
          Hstrok: "\u0126",
          hstrok: "\u0127",
          HumpDownHump: "\u224E",
          HumpEqual: "\u224F",
          hybull: "\u2043",
          hyphen: "\u2010",
          Iacute: "\xCD",
          iacute: "\xED",
          ic: "\u2063",
          Icirc: "\xCE",
          icirc: "\xEE",
          Icy: "\u0418",
          icy: "\u0438",
          Idot: "\u0130",
          IEcy: "\u0415",
          iecy: "\u0435",
          iexcl: "\xA1",
          iff: "\u21D4",
          ifr: "\u{1D526}",
          Ifr: "\u2111",
          Igrave: "\xCC",
          igrave: "\xEC",
          ii: "\u2148",
          iiiint: "\u2A0C",
          iiint: "\u222D",
          iinfin: "\u29DC",
          iiota: "\u2129",
          IJlig: "\u0132",
          ijlig: "\u0133",
          Imacr: "\u012A",
          imacr: "\u012B",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          Im: "\u2111",
          imof: "\u22B7",
          imped: "\u01B5",
          Implies: "\u21D2",
          incare: "\u2105",
          in: "\u2208",
          infin: "\u221E",
          infintie: "\u29DD",
          inodot: "\u0131",
          intcal: "\u22BA",
          int: "\u222B",
          Int: "\u222C",
          integers: "\u2124",
          Integral: "\u222B",
          intercal: "\u22BA",
          Intersection: "\u22C2",
          intlarhk: "\u2A17",
          intprod: "\u2A3C",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          IOcy: "\u0401",
          iocy: "\u0451",
          Iogon: "\u012E",
          iogon: "\u012F",
          Iopf: "\u{1D540}",
          iopf: "\u{1D55A}",
          Iota: "\u0399",
          iota: "\u03B9",
          iprod: "\u2A3C",
          iquest: "\xBF",
          iscr: "\u{1D4BE}",
          Iscr: "\u2110",
          isin: "\u2208",
          isindot: "\u22F5",
          isinE: "\u22F9",
          isins: "\u22F4",
          isinsv: "\u22F3",
          isinv: "\u2208",
          it: "\u2062",
          Itilde: "\u0128",
          itilde: "\u0129",
          Iukcy: "\u0406",
          iukcy: "\u0456",
          Iuml: "\xCF",
          iuml: "\xEF",
          Jcirc: "\u0134",
          jcirc: "\u0135",
          Jcy: "\u0419",
          jcy: "\u0439",
          Jfr: "\u{1D50D}",
          jfr: "\u{1D527}",
          jmath: "\u0237",
          Jopf: "\u{1D541}",
          jopf: "\u{1D55B}",
          Jscr: "\u{1D4A5}",
          jscr: "\u{1D4BF}",
          Jsercy: "\u0408",
          jsercy: "\u0458",
          Jukcy: "\u0404",
          jukcy: "\u0454",
          Kappa: "\u039A",
          kappa: "\u03BA",
          kappav: "\u03F0",
          Kcedil: "\u0136",
          kcedil: "\u0137",
          Kcy: "\u041A",
          kcy: "\u043A",
          Kfr: "\u{1D50E}",
          kfr: "\u{1D528}",
          kgreen: "\u0138",
          KHcy: "\u0425",
          khcy: "\u0445",
          KJcy: "\u040C",
          kjcy: "\u045C",
          Kopf: "\u{1D542}",
          kopf: "\u{1D55C}",
          Kscr: "\u{1D4A6}",
          kscr: "\u{1D4C0}",
          lAarr: "\u21DA",
          Lacute: "\u0139",
          lacute: "\u013A",
          laemptyv: "\u29B4",
          lagran: "\u2112",
          Lambda: "\u039B",
          lambda: "\u03BB",
          lang: "\u27E8",
          Lang: "\u27EA",
          langd: "\u2991",
          langle: "\u27E8",
          lap: "\u2A85",
          Laplacetrf: "\u2112",
          laquo: "\xAB",
          larrb: "\u21E4",
          larrbfs: "\u291F",
          larr: "\u2190",
          Larr: "\u219E",
          lArr: "\u21D0",
          larrfs: "\u291D",
          larrhk: "\u21A9",
          larrlp: "\u21AB",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21A2",
          latail: "\u2919",
          lAtail: "\u291B",
          lat: "\u2AAB",
          late: "\u2AAD",
          lates: "\u2AAD\uFE00",
          lbarr: "\u290C",
          lBarr: "\u290E",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298B",
          lbrksld: "\u298F",
          lbrkslu: "\u298D",
          Lcaron: "\u013D",
          lcaron: "\u013E",
          Lcedil: "\u013B",
          lcedil: "\u013C",
          lceil: "\u2308",
          lcub: "{",
          Lcy: "\u041B",
          lcy: "\u043B",
          ldca: "\u2936",
          ldquo: "\u201C",
          ldquor: "\u201E",
          ldrdhar: "\u2967",
          ldrushar: "\u294B",
          ldsh: "\u21B2",
          le: "\u2264",
          lE: "\u2266",
          LeftAngleBracket: "\u27E8",
          LeftArrowBar: "\u21E4",
          leftarrow: "\u2190",
          LeftArrow: "\u2190",
          Leftarrow: "\u21D0",
          LeftArrowRightArrow: "\u21C6",
          leftarrowtail: "\u21A2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27E6",
          LeftDownTeeVector: "\u2961",
          LeftDownVectorBar: "\u2959",
          LeftDownVector: "\u21C3",
          LeftFloor: "\u230A",
          leftharpoondown: "\u21BD",
          leftharpoonup: "\u21BC",
          leftleftarrows: "\u21C7",
          leftrightarrow: "\u2194",
          LeftRightArrow: "\u2194",
          Leftrightarrow: "\u21D4",
          leftrightarrows: "\u21C6",
          leftrightharpoons: "\u21CB",
          leftrightsquigarrow: "\u21AD",
          LeftRightVector: "\u294E",
          LeftTeeArrow: "\u21A4",
          LeftTee: "\u22A3",
          LeftTeeVector: "\u295A",
          leftthreetimes: "\u22CB",
          LeftTriangleBar: "\u29CF",
          LeftTriangle: "\u22B2",
          LeftTriangleEqual: "\u22B4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVectorBar: "\u2958",
          LeftUpVector: "\u21BF",
          LeftVectorBar: "\u2952",
          LeftVector: "\u21BC",
          lEg: "\u2A8B",
          leg: "\u22DA",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2A7D",
          lescc: "\u2AA8",
          les: "\u2A7D",
          lesdot: "\u2A7F",
          lesdoto: "\u2A81",
          lesdotor: "\u2A83",
          lesg: "\u22DA\uFE00",
          lesges: "\u2A93",
          lessapprox: "\u2A85",
          lessdot: "\u22D6",
          lesseqgtr: "\u22DA",
          lesseqqgtr: "\u2A8B",
          LessEqualGreater: "\u22DA",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2AA1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2A7D",
          LessTilde: "\u2272",
          lfisht: "\u297C",
          lfloor: "\u230A",
          Lfr: "\u{1D50F}",
          lfr: "\u{1D529}",
          lg: "\u2276",
          lgE: "\u2A91",
          lHar: "\u2962",
          lhard: "\u21BD",
          lharu: "\u21BC",
          lharul: "\u296A",
          lhblk: "\u2584",
          LJcy: "\u0409",
          ljcy: "\u0459",
          llarr: "\u21C7",
          ll: "\u226A",
          Ll: "\u22D8",
          llcorner: "\u231E",
          Lleftarrow: "\u21DA",
          llhard: "\u296B",
          lltri: "\u25FA",
          Lmidot: "\u013F",
          lmidot: "\u0140",
          lmoustache: "\u23B0",
          lmoust: "\u23B0",
          lnap: "\u2A89",
          lnapprox: "\u2A89",
          lne: "\u2A87",
          lnE: "\u2268",
          lneq: "\u2A87",
          lneqq: "\u2268",
          lnsim: "\u22E6",
          loang: "\u27EC",
          loarr: "\u21FD",
          lobrk: "\u27E6",
          longleftarrow: "\u27F5",
          LongLeftArrow: "\u27F5",
          Longleftarrow: "\u27F8",
          longleftrightarrow: "\u27F7",
          LongLeftRightArrow: "\u27F7",
          Longleftrightarrow: "\u27FA",
          longmapsto: "\u27FC",
          longrightarrow: "\u27F6",
          LongRightArrow: "\u27F6",
          Longrightarrow: "\u27F9",
          looparrowleft: "\u21AB",
          looparrowright: "\u21AC",
          lopar: "\u2985",
          Lopf: "\u{1D543}",
          lopf: "\u{1D55D}",
          loplus: "\u2A2D",
          lotimes: "\u2A34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25CA",
          lozenge: "\u25CA",
          lozf: "\u29EB",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21C6",
          lrcorner: "\u231F",
          lrhar: "\u21CB",
          lrhard: "\u296D",
          lrm: "\u200E",
          lrtri: "\u22BF",
          lsaquo: "\u2039",
          lscr: "\u{1D4C1}",
          Lscr: "\u2112",
          lsh: "\u21B0",
          Lsh: "\u21B0",
          lsim: "\u2272",
          lsime: "\u2A8D",
          lsimg: "\u2A8F",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201A",
          Lstrok: "\u0141",
          lstrok: "\u0142",
          ltcc: "\u2AA6",
          ltcir: "\u2A79",
          lt: "<",
          LT: "<",
          Lt: "\u226A",
          ltdot: "\u22D6",
          lthree: "\u22CB",
          ltimes: "\u22C9",
          ltlarr: "\u2976",
          ltquest: "\u2A7B",
          ltri: "\u25C3",
          ltrie: "\u22B4",
          ltrif: "\u25C2",
          ltrPar: "\u2996",
          lurdshar: "\u294A",
          luruhar: "\u2966",
          lvertneqq: "\u2268\uFE00",
          lvnE: "\u2268\uFE00",
          macr: "\xAF",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          Map: "\u2905",
          map: "\u21A6",
          mapsto: "\u21A6",
          mapstodown: "\u21A7",
          mapstoleft: "\u21A4",
          mapstoup: "\u21A5",
          marker: "\u25AE",
          mcomma: "\u2A29",
          Mcy: "\u041C",
          mcy: "\u043C",
          mdash: "\u2014",
          mDDot: "\u223A",
          measuredangle: "\u2221",
          MediumSpace: "\u205F",
          Mellintrf: "\u2133",
          Mfr: "\u{1D510}",
          mfr: "\u{1D52A}",
          mho: "\u2127",
          micro: "\xB5",
          midast: "*",
          midcir: "\u2AF0",
          mid: "\u2223",
          middot: "\xB7",
          minusb: "\u229F",
          minus: "\u2212",
          minusd: "\u2238",
          minusdu: "\u2A2A",
          MinusPlus: "\u2213",
          mlcp: "\u2ADB",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22A7",
          Mopf: "\u{1D544}",
          mopf: "\u{1D55E}",
          mp: "\u2213",
          mscr: "\u{1D4C2}",
          Mscr: "\u2133",
          mstpos: "\u223E",
          Mu: "\u039C",
          mu: "\u03BC",
          multimap: "\u22B8",
          mumap: "\u22B8",
          nabla: "\u2207",
          Nacute: "\u0143",
          nacute: "\u0144",
          nang: "\u2220\u20D2",
          nap: "\u2249",
          napE: "\u2A70\u0338",
          napid: "\u224B\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natural: "\u266E",
          naturals: "\u2115",
          natur: "\u266E",
          nbsp: "\xA0",
          nbump: "\u224E\u0338",
          nbumpe: "\u224F\u0338",
          ncap: "\u2A43",
          Ncaron: "\u0147",
          ncaron: "\u0148",
          Ncedil: "\u0145",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2A6D\u0338",
          ncup: "\u2A42",
          Ncy: "\u041D",
          ncy: "\u043D",
          ndash: "\u2013",
          nearhk: "\u2924",
          nearr: "\u2197",
          neArr: "\u21D7",
          nearrow: "\u2197",
          ne: "\u2260",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200B",
          NegativeThickSpace: "\u200B",
          NegativeThinSpace: "\u200B",
          NegativeVeryThinSpace: "\u200B",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226B",
          NestedLessLess: "\u226A",
          NewLine: `
`,
          nexist: "\u2204",
          nexists: "\u2204",
          Nfr: "\u{1D511}",
          nfr: "\u{1D52B}",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2A7E\u0338",
          nges: "\u2A7E\u0338",
          nGg: "\u22D9\u0338",
          ngsim: "\u2275",
          nGt: "\u226B\u20D2",
          ngt: "\u226F",
          ngtr: "\u226F",
          nGtv: "\u226B\u0338",
          nharr: "\u21AE",
          nhArr: "\u21CE",
          nhpar: "\u2AF2",
          ni: "\u220B",
          nis: "\u22FC",
          nisd: "\u22FA",
          niv: "\u220B",
          NJcy: "\u040A",
          njcy: "\u045A",
          nlarr: "\u219A",
          nlArr: "\u21CD",
          nldr: "\u2025",
          nlE: "\u2266\u0338",
          nle: "\u2270",
          nleftarrow: "\u219A",
          nLeftarrow: "\u21CD",
          nleftrightarrow: "\u21AE",
          nLeftrightarrow: "\u21CE",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2A7D\u0338",
          nles: "\u2A7D\u0338",
          nless: "\u226E",
          nLl: "\u22D8\u0338",
          nlsim: "\u2274",
          nLt: "\u226A\u20D2",
          nlt: "\u226E",
          nltri: "\u22EA",
          nltrie: "\u22EC",
          nLtv: "\u226A\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xA0",
          nopf: "\u{1D55F}",
          Nopf: "\u2115",
          Not: "\u2AEC",
          not: "\xAC",
          NotCongruent: "\u2262",
          NotCupCap: "\u226D",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226F",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226B\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2A7E\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224E\u0338",
          NotHumpEqual: "\u224F\u0338",
          notin: "\u2209",
          notindot: "\u22F5\u0338",
          notinE: "\u22F9\u0338",
          notinva: "\u2209",
          notinvb: "\u22F7",
          notinvc: "\u22F6",
          NotLeftTriangleBar: "\u29CF\u0338",
          NotLeftTriangle: "\u22EA",
          NotLeftTriangleEqual: "\u22EC",
          NotLess: "\u226E",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226A\u0338",
          NotLessSlantEqual: "\u2A7D\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2AA2\u0338",
          NotNestedLessLess: "\u2AA1\u0338",
          notni: "\u220C",
          notniva: "\u220C",
          notnivb: "\u22FE",
          notnivc: "\u22FD",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2AAF\u0338",
          NotPrecedesSlantEqual: "\u22E0",
          NotReverseElement: "\u220C",
          NotRightTriangleBar: "\u29D0\u0338",
          NotRightTriangle: "\u22EB",
          NotRightTriangleEqual: "\u22ED",
          NotSquareSubset: "\u228F\u0338",
          NotSquareSubsetEqual: "\u22E2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22E3",
          NotSubset: "\u2282\u20D2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2AB0\u0338",
          NotSucceedsSlantEqual: "\u22E1",
          NotSucceedsTilde: "\u227F\u0338",
          NotSuperset: "\u2283\u20D2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          nparallel: "\u2226",
          npar: "\u2226",
          nparsl: "\u2AFD\u20E5",
          npart: "\u2202\u0338",
          npolint: "\u2A14",
          npr: "\u2280",
          nprcue: "\u22E0",
          nprec: "\u2280",
          npreceq: "\u2AAF\u0338",
          npre: "\u2AAF\u0338",
          nrarrc: "\u2933\u0338",
          nrarr: "\u219B",
          nrArr: "\u21CF",
          nrarrw: "\u219D\u0338",
          nrightarrow: "\u219B",
          nRightarrow: "\u21CF",
          nrtri: "\u22EB",
          nrtrie: "\u22ED",
          nsc: "\u2281",
          nsccue: "\u22E1",
          nsce: "\u2AB0\u0338",
          Nscr: "\u{1D4A9}",
          nscr: "\u{1D4C3}",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22E2",
          nsqsupe: "\u22E3",
          nsub: "\u2284",
          nsubE: "\u2AC5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20D2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2AC5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2AB0\u0338",
          nsup: "\u2285",
          nsupE: "\u2AC6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20D2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2AC6\u0338",
          ntgl: "\u2279",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          ntlg: "\u2278",
          ntriangleleft: "\u22EA",
          ntrianglelefteq: "\u22EC",
          ntriangleright: "\u22EB",
          ntrianglerighteq: "\u22ED",
          Nu: "\u039D",
          nu: "\u03BD",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224D\u20D2",
          nvdash: "\u22AC",
          nvDash: "\u22AD",
          nVdash: "\u22AE",
          nVDash: "\u22AF",
          nvge: "\u2265\u20D2",
          nvgt: ">\u20D2",
          nvHarr: "\u2904",
          nvinfin: "\u29DE",
          nvlArr: "\u2902",
          nvle: "\u2264\u20D2",
          nvlt: "<\u20D2",
          nvltrie: "\u22B4\u20D2",
          nvrArr: "\u2903",
          nvrtrie: "\u22B5\u20D2",
          nvsim: "\u223C\u20D2",
          nwarhk: "\u2923",
          nwarr: "\u2196",
          nwArr: "\u21D6",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          Oacute: "\xD3",
          oacute: "\xF3",
          oast: "\u229B",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          ocir: "\u229A",
          Ocy: "\u041E",
          ocy: "\u043E",
          odash: "\u229D",
          Odblac: "\u0150",
          odblac: "\u0151",
          odiv: "\u2A38",
          odot: "\u2299",
          odsold: "\u29BC",
          OElig: "\u0152",
          oelig: "\u0153",
          ofcir: "\u29BF",
          Ofr: "\u{1D512}",
          ofr: "\u{1D52C}",
          ogon: "\u02DB",
          Ograve: "\xD2",
          ograve: "\xF2",
          ogt: "\u29C1",
          ohbar: "\u29B5",
          ohm: "\u03A9",
          oint: "\u222E",
          olarr: "\u21BA",
          olcir: "\u29BE",
          olcross: "\u29BB",
          oline: "\u203E",
          olt: "\u29C0",
          Omacr: "\u014C",
          omacr: "\u014D",
          Omega: "\u03A9",
          omega: "\u03C9",
          Omicron: "\u039F",
          omicron: "\u03BF",
          omid: "\u29B6",
          ominus: "\u2296",
          Oopf: "\u{1D546}",
          oopf: "\u{1D560}",
          opar: "\u29B7",
          OpenCurlyDoubleQuote: "\u201C",
          OpenCurlyQuote: "\u2018",
          operp: "\u29B9",
          oplus: "\u2295",
          orarr: "\u21BB",
          Or: "\u2A54",
          or: "\u2228",
          ord: "\u2A5D",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xAA",
          ordm: "\xBA",
          origof: "\u22B6",
          oror: "\u2A56",
          orslope: "\u2A57",
          orv: "\u2A5B",
          oS: "\u24C8",
          Oscr: "\u{1D4AA}",
          oscr: "\u2134",
          Oslash: "\xD8",
          oslash: "\xF8",
          osol: "\u2298",
          Otilde: "\xD5",
          otilde: "\xF5",
          otimesas: "\u2A36",
          Otimes: "\u2A37",
          otimes: "\u2297",
          Ouml: "\xD6",
          ouml: "\xF6",
          ovbar: "\u233D",
          OverBar: "\u203E",
          OverBrace: "\u23DE",
          OverBracket: "\u23B4",
          OverParenthesis: "\u23DC",
          para: "\xB6",
          parallel: "\u2225",
          par: "\u2225",
          parsim: "\u2AF3",
          parsl: "\u2AFD",
          part: "\u2202",
          PartialD: "\u2202",
          Pcy: "\u041F",
          pcy: "\u043F",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22A5",
          pertenk: "\u2031",
          Pfr: "\u{1D513}",
          pfr: "\u{1D52D}",
          Phi: "\u03A6",
          phi: "\u03C6",
          phiv: "\u03D5",
          phmmat: "\u2133",
          phone: "\u260E",
          Pi: "\u03A0",
          pi: "\u03C0",
          pitchfork: "\u22D4",
          piv: "\u03D6",
          planck: "\u210F",
          planckh: "\u210E",
          plankv: "\u210F",
          plusacir: "\u2A23",
          plusb: "\u229E",
          pluscir: "\u2A22",
          plus: "+",
          plusdo: "\u2214",
          plusdu: "\u2A25",
          pluse: "\u2A72",
          PlusMinus: "\xB1",
          plusmn: "\xB1",
          plussim: "\u2A26",
          plustwo: "\u2A27",
          pm: "\xB1",
          Poincareplane: "\u210C",
          pointint: "\u2A15",
          popf: "\u{1D561}",
          Popf: "\u2119",
          pound: "\xA3",
          prap: "\u2AB7",
          Pr: "\u2ABB",
          pr: "\u227A",
          prcue: "\u227C",
          precapprox: "\u2AB7",
          prec: "\u227A",
          preccurlyeq: "\u227C",
          Precedes: "\u227A",
          PrecedesEqual: "\u2AAF",
          PrecedesSlantEqual: "\u227C",
          PrecedesTilde: "\u227E",
          preceq: "\u2AAF",
          precnapprox: "\u2AB9",
          precneqq: "\u2AB5",
          precnsim: "\u22E8",
          pre: "\u2AAF",
          prE: "\u2AB3",
          precsim: "\u227E",
          prime: "\u2032",
          Prime: "\u2033",
          primes: "\u2119",
          prnap: "\u2AB9",
          prnE: "\u2AB5",
          prnsim: "\u22E8",
          prod: "\u220F",
          Product: "\u220F",
          profalar: "\u232E",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221D",
          Proportional: "\u221D",
          Proportion: "\u2237",
          propto: "\u221D",
          prsim: "\u227E",
          prurel: "\u22B0",
          Pscr: "\u{1D4AB}",
          pscr: "\u{1D4C5}",
          Psi: "\u03A8",
          psi: "\u03C8",
          puncsp: "\u2008",
          Qfr: "\u{1D514}",
          qfr: "\u{1D52E}",
          qint: "\u2A0C",
          qopf: "\u{1D562}",
          Qopf: "\u211A",
          qprime: "\u2057",
          Qscr: "\u{1D4AC}",
          qscr: "\u{1D4C6}",
          quaternions: "\u210D",
          quatint: "\u2A16",
          quest: "?",
          questeq: "\u225F",
          quot: '"',
          QUOT: '"',
          rAarr: "\u21DB",
          race: "\u223D\u0331",
          Racute: "\u0154",
          racute: "\u0155",
          radic: "\u221A",
          raemptyv: "\u29B3",
          rang: "\u27E9",
          Rang: "\u27EB",
          rangd: "\u2992",
          range: "\u29A5",
          rangle: "\u27E9",
          raquo: "\xBB",
          rarrap: "\u2975",
          rarrb: "\u21E5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarr: "\u2192",
          Rarr: "\u21A0",
          rArr: "\u21D2",
          rarrfs: "\u291E",
          rarrhk: "\u21AA",
          rarrlp: "\u21AC",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          Rarrtl: "\u2916",
          rarrtl: "\u21A3",
          rarrw: "\u219D",
          ratail: "\u291A",
          rAtail: "\u291C",
          ratio: "\u2236",
          rationals: "\u211A",
          rbarr: "\u290D",
          rBarr: "\u290F",
          RBarr: "\u2910",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298C",
          rbrksld: "\u298E",
          rbrkslu: "\u2990",
          Rcaron: "\u0158",
          rcaron: "\u0159",
          Rcedil: "\u0156",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          Rcy: "\u0420",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201D",
          rdquor: "\u201D",
          rdsh: "\u21B3",
          real: "\u211C",
          realine: "\u211B",
          realpart: "\u211C",
          reals: "\u211D",
          Re: "\u211C",
          rect: "\u25AD",
          reg: "\xAE",
          REG: "\xAE",
          ReverseElement: "\u220B",
          ReverseEquilibrium: "\u21CB",
          ReverseUpEquilibrium: "\u296F",
          rfisht: "\u297D",
          rfloor: "\u230B",
          rfr: "\u{1D52F}",
          Rfr: "\u211C",
          rHar: "\u2964",
          rhard: "\u21C1",
          rharu: "\u21C0",
          rharul: "\u296C",
          Rho: "\u03A1",
          rho: "\u03C1",
          rhov: "\u03F1",
          RightAngleBracket: "\u27E9",
          RightArrowBar: "\u21E5",
          rightarrow: "\u2192",
          RightArrow: "\u2192",
          Rightarrow: "\u21D2",
          RightArrowLeftArrow: "\u21C4",
          rightarrowtail: "\u21A3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27E7",
          RightDownTeeVector: "\u295D",
          RightDownVectorBar: "\u2955",
          RightDownVector: "\u21C2",
          RightFloor: "\u230B",
          rightharpoondown: "\u21C1",
          rightharpoonup: "\u21C0",
          rightleftarrows: "\u21C4",
          rightleftharpoons: "\u21CC",
          rightrightarrows: "\u21C9",
          rightsquigarrow: "\u219D",
          RightTeeArrow: "\u21A6",
          RightTee: "\u22A2",
          RightTeeVector: "\u295B",
          rightthreetimes: "\u22CC",
          RightTriangleBar: "\u29D0",
          RightTriangle: "\u22B3",
          RightTriangleEqual: "\u22B5",
          RightUpDownVector: "\u294F",
          RightUpTeeVector: "\u295C",
          RightUpVectorBar: "\u2954",
          RightUpVector: "\u21BE",
          RightVectorBar: "\u2953",
          RightVector: "\u21C0",
          ring: "\u02DA",
          risingdotseq: "\u2253",
          rlarr: "\u21C4",
          rlhar: "\u21CC",
          rlm: "\u200F",
          rmoustache: "\u23B1",
          rmoust: "\u23B1",
          rnmid: "\u2AEE",
          roang: "\u27ED",
          roarr: "\u21FE",
          robrk: "\u27E7",
          ropar: "\u2986",
          ropf: "\u{1D563}",
          Ropf: "\u211D",
          roplus: "\u2A2E",
          rotimes: "\u2A35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2A12",
          rrarr: "\u21C9",
          Rrightarrow: "\u21DB",
          rsaquo: "\u203A",
          rscr: "\u{1D4C7}",
          Rscr: "\u211B",
          rsh: "\u21B1",
          Rsh: "\u21B1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22CC",
          rtimes: "\u22CA",
          rtri: "\u25B9",
          rtrie: "\u22B5",
          rtrif: "\u25B8",
          rtriltri: "\u29CE",
          RuleDelayed: "\u29F4",
          ruluhar: "\u2968",
          rx: "\u211E",
          Sacute: "\u015A",
          sacute: "\u015B",
          sbquo: "\u201A",
          scap: "\u2AB8",
          Scaron: "\u0160",
          scaron: "\u0161",
          Sc: "\u2ABC",
          sc: "\u227B",
          sccue: "\u227D",
          sce: "\u2AB0",
          scE: "\u2AB4",
          Scedil: "\u015E",
          scedil: "\u015F",
          Scirc: "\u015C",
          scirc: "\u015D",
          scnap: "\u2ABA",
          scnE: "\u2AB6",
          scnsim: "\u22E9",
          scpolint: "\u2A13",
          scsim: "\u227F",
          Scy: "\u0421",
          scy: "\u0441",
          sdotb: "\u22A1",
          sdot: "\u22C5",
          sdote: "\u2A66",
          searhk: "\u2925",
          searr: "\u2198",
          seArr: "\u21D8",
          searrow: "\u2198",
          sect: "\xA7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          Sfr: "\u{1D516}",
          sfr: "\u{1D530}",
          sfrown: "\u2322",
          sharp: "\u266F",
          SHCHcy: "\u0429",
          shchcy: "\u0449",
          SHcy: "\u0428",
          shcy: "\u0448",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xAD",
          Sigma: "\u03A3",
          sigma: "\u03C3",
          sigmaf: "\u03C2",
          sigmav: "\u03C2",
          sim: "\u223C",
          simdot: "\u2A6A",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2A9E",
          simgE: "\u2AA0",
          siml: "\u2A9D",
          simlE: "\u2A9F",
          simne: "\u2246",
          simplus: "\u2A24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2A33",
          smeparsl: "\u29E4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2AAA",
          smte: "\u2AAC",
          smtes: "\u2AAC\uFE00",
          SOFTcy: "\u042C",
          softcy: "\u044C",
          solbar: "\u233F",
          solb: "\u29C4",
          sol: "/",
          Sopf: "\u{1D54A}",
          sopf: "\u{1D564}",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\uFE00",
          sqcup: "\u2294",
          sqcups: "\u2294\uFE00",
          Sqrt: "\u221A",
          sqsub: "\u228F",
          sqsube: "\u2291",
          sqsubset: "\u228F",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          square: "\u25A1",
          Square: "\u25A1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228F",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25AA",
          squ: "\u25A1",
          squf: "\u25AA",
          srarr: "\u2192",
          Sscr: "\u{1D4AE}",
          sscr: "\u{1D4C8}",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22C6",
          Star: "\u22C6",
          star: "\u2606",
          starf: "\u2605",
          straightepsilon: "\u03F5",
          straightphi: "\u03D5",
          strns: "\xAF",
          sub: "\u2282",
          Sub: "\u22D0",
          subdot: "\u2ABD",
          subE: "\u2AC5",
          sube: "\u2286",
          subedot: "\u2AC3",
          submult: "\u2AC1",
          subnE: "\u2ACB",
          subne: "\u228A",
          subplus: "\u2ABF",
          subrarr: "\u2979",
          subset: "\u2282",
          Subset: "\u22D0",
          subseteq: "\u2286",
          subseteqq: "\u2AC5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228A",
          subsetneqq: "\u2ACB",
          subsim: "\u2AC7",
          subsub: "\u2AD5",
          subsup: "\u2AD3",
          succapprox: "\u2AB8",
          succ: "\u227B",
          succcurlyeq: "\u227D",
          Succeeds: "\u227B",
          SucceedsEqual: "\u2AB0",
          SucceedsSlantEqual: "\u227D",
          SucceedsTilde: "\u227F",
          succeq: "\u2AB0",
          succnapprox: "\u2ABA",
          succneqq: "\u2AB6",
          succnsim: "\u22E9",
          succsim: "\u227F",
          SuchThat: "\u220B",
          sum: "\u2211",
          Sum: "\u2211",
          sung: "\u266A",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          sup: "\u2283",
          Sup: "\u22D1",
          supdot: "\u2ABE",
          supdsub: "\u2AD8",
          supE: "\u2AC6",
          supe: "\u2287",
          supedot: "\u2AC4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27C9",
          suphsub: "\u2AD7",
          suplarr: "\u297B",
          supmult: "\u2AC2",
          supnE: "\u2ACC",
          supne: "\u228B",
          supplus: "\u2AC0",
          supset: "\u2283",
          Supset: "\u22D1",
          supseteq: "\u2287",
          supseteqq: "\u2AC6",
          supsetneq: "\u228B",
          supsetneqq: "\u2ACC",
          supsim: "\u2AC8",
          supsub: "\u2AD4",
          supsup: "\u2AD6",
          swarhk: "\u2926",
          swarr: "\u2199",
          swArr: "\u21D9",
          swarrow: "\u2199",
          swnwar: "\u292A",
          szlig: "\xDF",
          Tab: "	",
          target: "\u2316",
          Tau: "\u03A4",
          tau: "\u03C4",
          tbrk: "\u23B4",
          Tcaron: "\u0164",
          tcaron: "\u0165",
          Tcedil: "\u0162",
          tcedil: "\u0163",
          Tcy: "\u0422",
          tcy: "\u0442",
          tdot: "\u20DB",
          telrec: "\u2315",
          Tfr: "\u{1D517}",
          tfr: "\u{1D531}",
          there4: "\u2234",
          therefore: "\u2234",
          Therefore: "\u2234",
          Theta: "\u0398",
          theta: "\u03B8",
          thetasym: "\u03D1",
          thetav: "\u03D1",
          thickapprox: "\u2248",
          thicksim: "\u223C",
          ThickSpace: "\u205F\u200A",
          ThinSpace: "\u2009",
          thinsp: "\u2009",
          thkap: "\u2248",
          thksim: "\u223C",
          THORN: "\xDE",
          thorn: "\xFE",
          tilde: "\u02DC",
          Tilde: "\u223C",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          timesbar: "\u2A31",
          timesb: "\u22A0",
          times: "\xD7",
          timesd: "\u2A30",
          tint: "\u222D",
          toea: "\u2928",
          topbot: "\u2336",
          topcir: "\u2AF1",
          top: "\u22A4",
          Topf: "\u{1D54B}",
          topf: "\u{1D565}",
          topfork: "\u2ADA",
          tosa: "\u2929",
          tprime: "\u2034",
          trade: "\u2122",
          TRADE: "\u2122",
          triangle: "\u25B5",
          triangledown: "\u25BF",
          triangleleft: "\u25C3",
          trianglelefteq: "\u22B4",
          triangleq: "\u225C",
          triangleright: "\u25B9",
          trianglerighteq: "\u22B5",
          tridot: "\u25EC",
          trie: "\u225C",
          triminus: "\u2A3A",
          TripleDot: "\u20DB",
          triplus: "\u2A39",
          trisb: "\u29CD",
          tritime: "\u2A3B",
          trpezium: "\u23E2",
          Tscr: "\u{1D4AF}",
          tscr: "\u{1D4C9}",
          TScy: "\u0426",
          tscy: "\u0446",
          TSHcy: "\u040B",
          tshcy: "\u045B",
          Tstrok: "\u0166",
          tstrok: "\u0167",
          twixt: "\u226C",
          twoheadleftarrow: "\u219E",
          twoheadrightarrow: "\u21A0",
          Uacute: "\xDA",
          uacute: "\xFA",
          uarr: "\u2191",
          Uarr: "\u219F",
          uArr: "\u21D1",
          Uarrocir: "\u2949",
          Ubrcy: "\u040E",
          ubrcy: "\u045E",
          Ubreve: "\u016C",
          ubreve: "\u016D",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ucy: "\u0423",
          ucy: "\u0443",
          udarr: "\u21C5",
          Udblac: "\u0170",
          udblac: "\u0171",
          udhar: "\u296E",
          ufisht: "\u297E",
          Ufr: "\u{1D518}",
          ufr: "\u{1D532}",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uHar: "\u2963",
          uharl: "\u21BF",
          uharr: "\u21BE",
          uhblk: "\u2580",
          ulcorn: "\u231C",
          ulcorner: "\u231C",
          ulcrop: "\u230F",
          ultri: "\u25F8",
          Umacr: "\u016A",
          umacr: "\u016B",
          uml: "\xA8",
          UnderBar: "_",
          UnderBrace: "\u23DF",
          UnderBracket: "\u23B5",
          UnderParenthesis: "\u23DD",
          Union: "\u22C3",
          UnionPlus: "\u228E",
          Uogon: "\u0172",
          uogon: "\u0173",
          Uopf: "\u{1D54C}",
          uopf: "\u{1D566}",
          UpArrowBar: "\u2912",
          uparrow: "\u2191",
          UpArrow: "\u2191",
          Uparrow: "\u21D1",
          UpArrowDownArrow: "\u21C5",
          updownarrow: "\u2195",
          UpDownArrow: "\u2195",
          Updownarrow: "\u21D5",
          UpEquilibrium: "\u296E",
          upharpoonleft: "\u21BF",
          upharpoonright: "\u21BE",
          uplus: "\u228E",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          upsi: "\u03C5",
          Upsi: "\u03D2",
          upsih: "\u03D2",
          Upsilon: "\u03A5",
          upsilon: "\u03C5",
          UpTeeArrow: "\u21A5",
          UpTee: "\u22A5",
          upuparrows: "\u21C8",
          urcorn: "\u231D",
          urcorner: "\u231D",
          urcrop: "\u230E",
          Uring: "\u016E",
          uring: "\u016F",
          urtri: "\u25F9",
          Uscr: "\u{1D4B0}",
          uscr: "\u{1D4CA}",
          utdot: "\u22F0",
          Utilde: "\u0168",
          utilde: "\u0169",
          utri: "\u25B5",
          utrif: "\u25B4",
          uuarr: "\u21C8",
          Uuml: "\xDC",
          uuml: "\xFC",
          uwangle: "\u29A7",
          vangrt: "\u299C",
          varepsilon: "\u03F5",
          varkappa: "\u03F0",
          varnothing: "\u2205",
          varphi: "\u03D5",
          varpi: "\u03D6",
          varpropto: "\u221D",
          varr: "\u2195",
          vArr: "\u21D5",
          varrho: "\u03F1",
          varsigma: "\u03C2",
          varsubsetneq: "\u228A\uFE00",
          varsubsetneqq: "\u2ACB\uFE00",
          varsupsetneq: "\u228B\uFE00",
          varsupsetneqq: "\u2ACC\uFE00",
          vartheta: "\u03D1",
          vartriangleleft: "\u22B2",
          vartriangleright: "\u22B3",
          vBar: "\u2AE8",
          Vbar: "\u2AEB",
          vBarv: "\u2AE9",
          Vcy: "\u0412",
          vcy: "\u0432",
          vdash: "\u22A2",
          vDash: "\u22A8",
          Vdash: "\u22A9",
          VDash: "\u22AB",
          Vdashl: "\u2AE6",
          veebar: "\u22BB",
          vee: "\u2228",
          Vee: "\u22C1",
          veeeq: "\u225A",
          vellip: "\u22EE",
          verbar: "|",
          Verbar: "\u2016",
          vert: "|",
          Vert: "\u2016",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200A",
          Vfr: "\u{1D519}",
          vfr: "\u{1D533}",
          vltri: "\u22B2",
          vnsub: "\u2282\u20D2",
          vnsup: "\u2283\u20D2",
          Vopf: "\u{1D54D}",
          vopf: "\u{1D567}",
          vprop: "\u221D",
          vrtri: "\u22B3",
          Vscr: "\u{1D4B1}",
          vscr: "\u{1D4CB}",
          vsubnE: "\u2ACB\uFE00",
          vsubne: "\u228A\uFE00",
          vsupnE: "\u2ACC\uFE00",
          vsupne: "\u228B\uFE00",
          Vvdash: "\u22AA",
          vzigzag: "\u299A",
          Wcirc: "\u0174",
          wcirc: "\u0175",
          wedbar: "\u2A5F",
          wedge: "\u2227",
          Wedge: "\u22C0",
          wedgeq: "\u2259",
          weierp: "\u2118",
          Wfr: "\u{1D51A}",
          wfr: "\u{1D534}",
          Wopf: "\u{1D54E}",
          wopf: "\u{1D568}",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          Wscr: "\u{1D4B2}",
          wscr: "\u{1D4CC}",
          xcap: "\u22C2",
          xcirc: "\u25EF",
          xcup: "\u22C3",
          xdtri: "\u25BD",
          Xfr: "\u{1D51B}",
          xfr: "\u{1D535}",
          xharr: "\u27F7",
          xhArr: "\u27FA",
          Xi: "\u039E",
          xi: "\u03BE",
          xlarr: "\u27F5",
          xlArr: "\u27F8",
          xmap: "\u27FC",
          xnis: "\u22FB",
          xodot: "\u2A00",
          Xopf: "\u{1D54F}",
          xopf: "\u{1D569}",
          xoplus: "\u2A01",
          xotime: "\u2A02",
          xrarr: "\u27F6",
          xrArr: "\u27F9",
          Xscr: "\u{1D4B3}",
          xscr: "\u{1D4CD}",
          xsqcup: "\u2A06",
          xuplus: "\u2A04",
          xutri: "\u25B3",
          xvee: "\u22C1",
          xwedge: "\u22C0",
          Yacute: "\xDD",
          yacute: "\xFD",
          YAcy: "\u042F",
          yacy: "\u044F",
          Ycirc: "\u0176",
          ycirc: "\u0177",
          Ycy: "\u042B",
          ycy: "\u044B",
          yen: "\xA5",
          Yfr: "\u{1D51C}",
          yfr: "\u{1D536}",
          YIcy: "\u0407",
          yicy: "\u0457",
          Yopf: "\u{1D550}",
          yopf: "\u{1D56A}",
          Yscr: "\u{1D4B4}",
          yscr: "\u{1D4CE}",
          YUcy: "\u042E",
          yucy: "\u044E",
          yuml: "\xFF",
          Yuml: "\u0178",
          Zacute: "\u0179",
          zacute: "\u017A",
          Zcaron: "\u017D",
          zcaron: "\u017E",
          Zcy: "\u0417",
          zcy: "\u0437",
          Zdot: "\u017B",
          zdot: "\u017C",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200B",
          Zeta: "\u0396",
          zeta: "\u03B6",
          zfr: "\u{1D537}",
          Zfr: "\u2128",
          ZHcy: "\u0416",
          zhcy: "\u0436",
          zigrarr: "\u21DD",
          zopf: "\u{1D56B}",
          Zopf: "\u2124",
          Zscr: "\u{1D4B5}",
          zscr: "\u{1D4CF}",
          zwj: "\u200D",
          zwnj: "\u200C",
        };
      }),
      Sp = De((e, t) => {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          AElig: "\xC6",
          aelig: "\xE6",
          Agrave: "\xC0",
          agrave: "\xE0",
          amp: "&",
          AMP: "&",
          Aring: "\xC5",
          aring: "\xE5",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          brvbar: "\xA6",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          cedil: "\xB8",
          cent: "\xA2",
          copy: "\xA9",
          COPY: "\xA9",
          curren: "\xA4",
          deg: "\xB0",
          divide: "\xF7",
          Eacute: "\xC9",
          eacute: "\xE9",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          Egrave: "\xC8",
          egrave: "\xE8",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          frac12: "\xBD",
          frac14: "\xBC",
          frac34: "\xBE",
          gt: ">",
          GT: ">",
          Iacute: "\xCD",
          iacute: "\xED",
          Icirc: "\xCE",
          icirc: "\xEE",
          iexcl: "\xA1",
          Igrave: "\xCC",
          igrave: "\xEC",
          iquest: "\xBF",
          Iuml: "\xCF",
          iuml: "\xEF",
          laquo: "\xAB",
          lt: "<",
          LT: "<",
          macr: "\xAF",
          micro: "\xB5",
          middot: "\xB7",
          nbsp: "\xA0",
          not: "\xAC",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          Oacute: "\xD3",
          oacute: "\xF3",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          Ograve: "\xD2",
          ograve: "\xF2",
          ordf: "\xAA",
          ordm: "\xBA",
          Oslash: "\xD8",
          oslash: "\xF8",
          Otilde: "\xD5",
          otilde: "\xF5",
          Ouml: "\xD6",
          ouml: "\xF6",
          para: "\xB6",
          plusmn: "\xB1",
          pound: "\xA3",
          quot: '"',
          QUOT: '"',
          raquo: "\xBB",
          reg: "\xAE",
          REG: "\xAE",
          sect: "\xA7",
          shy: "\xAD",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          szlig: "\xDF",
          THORN: "\xDE",
          thorn: "\xFE",
          times: "\xD7",
          Uacute: "\xDA",
          uacute: "\xFA",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uml: "\xA8",
          Uuml: "\xDC",
          uuml: "\xFC",
          Yacute: "\xDD",
          yacute: "\xFD",
          yen: "\xA5",
          yuml: "\xFF",
        };
      }),
      Qi = De((e, t) => {
        t.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      }),
      wp = De((e, t) => {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      }),
      Cp = De((e) => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (i) {
            return i && i.__esModule ? i : { default: i };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = t(wp()),
          n =
            String.fromCodePoint ||
            function (i) {
              var a = "";
              return (
                i > 65535 &&
                  ((i -= 65536),
                  (a += String.fromCharCode(((i >>> 10) & 1023) | 55296)),
                  (i = 56320 | (i & 1023))),
                (a += String.fromCharCode(i)),
                a
              );
            };
        function o(i) {
          return (i >= 55296 && i <= 57343) || i > 1114111
            ? "\uFFFD"
            : (i in r.default && (i = r.default[i]), n(i));
        }
        m(o, "decodeCodePoint"), (e.default = o);
      }),
      _i = De((e) => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (d) {
            return d && d.__esModule ? d : { default: d };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
        var r = t(Xi()),
          n = t(Sp()),
          o = t(Qi()),
          i = t(Cp()),
          a = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (e.decodeXML = l(o.default)), (e.decodeHTMLStrict = l(r.default));
        function l(d) {
          var p = c(d);
          return function (h) {
            return String(h).replace(a, p);
          };
        }
        m(l, "getStrictDecoder");
        var u = m(function (d, p) {
          return d < p ? 1 : -1;
        }, "sorter");
        e.decodeHTML = (function () {
          for (
            var d = Object.keys(n.default).sort(u),
              p = Object.keys(r.default).sort(u),
              h = 0,
              y = 0;
            h < p.length;
            h++
          )
            d[y] === p[h] ? ((p[h] += ";?"), y++) : (p[h] += ";");
          var E = new RegExp(
              "&(?:" + p.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
              "g",
            ),
            v = c(r.default);
          function A(D) {
            return D.substr(-1) !== ";" && (D += ";"), v(D);
          }
          return (
            m(A, "replacer"),
            function (D) {
              return String(D).replace(E, A);
            }
          );
        })();
        function c(d) {
          return m(function (p) {
            if (p.charAt(1) === "#") {
              var h = p.charAt(2);
              return h === "X" || h === "x"
                ? i.default(parseInt(p.substr(3), 16))
                : i.default(parseInt(p.substr(2), 10));
            }
            return d[p.slice(1, -1)] || p;
          }, "replace");
        }
        m(c, "getReplacer");
      }),
      Pi = De((e) => {
        "use strict";
        var t =
          (e && e.__importDefault) ||
          function (S) {
            return S && S.__esModule ? S : { default: S };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0);
        var r = t(Qi()),
          n = u(r.default),
          o = c(n);
        e.encodeXML = D(n);
        var i = t(Xi()),
          a = u(i.default),
          l = c(a);
        (e.encodeHTML = y(a, l)), (e.encodeNonAsciiHTML = D(a));
        function u(S) {
          return Object.keys(S)
            .sort()
            .reduce(function (F, x) {
              return (F[S[x]] = "&" + x + ";"), F;
            }, {});
        }
        m(u, "getInverseObj");
        function c(S) {
          for (
            var F = [], x = [], O = 0, R = Object.keys(S);
            O < R.length;
            O++
          ) {
            var N = R[O];
            N.length === 1 ? F.push("\\" + N) : x.push(N);
          }
          F.sort();
          for (var j = 0; j < F.length - 1; j++) {
            for (
              var U = j;
              U < F.length - 1 &&
              F[U].charCodeAt(1) + 1 === F[U + 1].charCodeAt(1);

            )
              U += 1;
            var P = 1 + U - j;
            P < 3 || F.splice(j, P, F[j] + "-" + F[U]);
          }
          return (
            x.unshift("[" + F.join("") + "]"), new RegExp(x.join("|"), "g")
          );
        }
        m(c, "getInverseReplacer");
        var d =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          p =
            String.prototype.codePointAt != null
              ? function (S) {
                  return S.codePointAt(0);
                }
              : function (S) {
                  return (
                    (S.charCodeAt(0) - 55296) * 1024 +
                    S.charCodeAt(1) -
                    56320 +
                    65536
                  );
                };
        function h(S) {
          return (
            "&#x" +
            (S.length > 1 ? p(S) : S.charCodeAt(0)).toString(16).toUpperCase() +
            ";"
          );
        }
        m(h, "singleCharReplacer");
        function y(S, F) {
          return function (x) {
            return x
              .replace(F, function (O) {
                return S[O];
              })
              .replace(d, h);
          };
        }
        m(y, "getInverse");
        var E = new RegExp(o.source + "|" + d.source, "g");
        function v(S) {
          return S.replace(E, h);
        }
        m(v, "escape"), (e.escape = v);
        function A(S) {
          return S.replace(o, h);
        }
        m(A, "escapeUTF8"), (e.escapeUTF8 = A);
        function D(S) {
          return function (F) {
            return F.replace(E, function (x) {
              return S[x] || h(x);
            });
          };
        }
        m(D, "getASCIIEncoder");
      }),
      xp = De((e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0);
        var t = _i(),
          r = Pi();
        function n(u, c) {
          return (!c || c <= 0 ? t.decodeXML : t.decodeHTML)(u);
        }
        m(n, "decode"), (e.decode = n);
        function o(u, c) {
          return (!c || c <= 0 ? t.decodeXML : t.decodeHTMLStrict)(u);
        }
        m(o, "decodeStrict"), (e.decodeStrict = o);
        function i(u, c) {
          return (!c || c <= 0 ? r.encodeXML : r.encodeHTML)(u);
        }
        m(i, "encode"), (e.encode = i);
        var a = Pi();
        Object.defineProperty(e, "encodeXML", {
          enumerable: !0,
          get: m(function () {
            return a.encodeXML;
          }, "get"),
        }),
          Object.defineProperty(e, "encodeHTML", {
            enumerable: !0,
            get: m(function () {
              return a.encodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "encodeNonAsciiHTML", {
            enumerable: !0,
            get: m(function () {
              return a.encodeNonAsciiHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "escape", {
            enumerable: !0,
            get: m(function () {
              return a.escape;
            }, "get"),
          }),
          Object.defineProperty(e, "escapeUTF8", {
            enumerable: !0,
            get: m(function () {
              return a.escapeUTF8;
            }, "get"),
          }),
          Object.defineProperty(e, "encodeHTML4", {
            enumerable: !0,
            get: m(function () {
              return a.encodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "encodeHTML5", {
            enumerable: !0,
            get: m(function () {
              return a.encodeHTML;
            }, "get"),
          });
        var l = _i();
        Object.defineProperty(e, "decodeXML", {
          enumerable: !0,
          get: m(function () {
            return l.decodeXML;
          }, "get"),
        }),
          Object.defineProperty(e, "decodeHTML", {
            enumerable: !0,
            get: m(function () {
              return l.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTMLStrict", {
            enumerable: !0,
            get: m(function () {
              return l.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML4", {
            enumerable: !0,
            get: m(function () {
              return l.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML5", {
            enumerable: !0,
            get: m(function () {
              return l.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML4Strict", {
            enumerable: !0,
            get: m(function () {
              return l.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeHTML5Strict", {
            enumerable: !0,
            get: m(function () {
              return l.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(e, "decodeXMLStrict", {
            enumerable: !0,
            get: m(function () {
              return l.decodeXML;
            }, "get"),
          });
      }),
      Tp = De((e, t) => {
        "use strict";
        function r(b, w) {
          if (!(b instanceof w))
            throw new TypeError("Cannot call a class as a function");
        }
        m(r, "_classCallCheck");
        function n(b, w) {
          for (var I = 0; I < w.length; I++) {
            var M = w[I];
            (M.enumerable = M.enumerable || !1),
              (M.configurable = !0),
              "value" in M && (M.writable = !0),
              Object.defineProperty(b, M.key, M);
          }
        }
        m(n, "_defineProperties");
        function o(b, w, I) {
          return w && n(b.prototype, w), I && n(b, I), b;
        }
        m(o, "_createClass");
        function i(b, w) {
          var I =
            (typeof Symbol < "u" && b[Symbol.iterator]) || b["@@iterator"];
          if (!I) {
            if (
              Array.isArray(b) ||
              (I = a(b)) ||
              (w && b && typeof b.length == "number")
            ) {
              I && (b = I);
              var M = 0,
                $ = m(function () {}, "F");
              return {
                s: $,
                n: m(function () {
                  return M >= b.length
                    ? { done: !0 }
                    : { done: !1, value: b[M++] };
                }, "n"),
                e: m(function (X) {
                  throw X;
                }, "e"),
                f: $,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var Y = !0,
            re = !1,
            Z;
          return {
            s: m(function () {
              I = I.call(b);
            }, "s"),
            n: m(function () {
              var X = I.next();
              return (Y = X.done), X;
            }, "n"),
            e: m(function (X) {
              (re = !0), (Z = X);
            }, "e"),
            f: m(function () {
              try {
                !Y && I.return != null && I.return();
              } finally {
                if (re) throw Z;
              }
            }, "f"),
          };
        }
        m(i, "_createForOfIteratorHelper");
        function a(b, w) {
          if (b) {
            if (typeof b == "string") return l(b, w);
            var I = Object.prototype.toString.call(b).slice(8, -1);
            if (
              (I === "Object" && b.constructor && (I = b.constructor.name),
              I === "Map" || I === "Set")
            )
              return Array.from(b);
            if (
              I === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)
            )
              return l(b, w);
          }
        }
        m(a, "_unsupportedIterableToArray");
        function l(b, w) {
          (w == null || w > b.length) && (w = b.length);
          for (var I = 0, M = new Array(w); I < w; I++) M[I] = b[I];
          return M;
        }
        m(l, "_arrayLikeToArray");
        var u = xp(),
          c = {
            fg: "#FFF",
            bg: "#000",
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: d(),
          };
        function d() {
          var b = {
            0: "#000",
            1: "#A00",
            2: "#0A0",
            3: "#A50",
            4: "#00A",
            5: "#A0A",
            6: "#0AA",
            7: "#AAA",
            8: "#555",
            9: "#F55",
            10: "#5F5",
            11: "#FF5",
            12: "#55F",
            13: "#F5F",
            14: "#5FF",
            15: "#FFF",
          };
          return (
            S(0, 5).forEach(function (w) {
              S(0, 5).forEach(function (I) {
                S(0, 5).forEach(function (M) {
                  return p(w, I, M, b);
                });
              });
            }),
            S(0, 23).forEach(function (w) {
              var I = w + 232,
                M = h(w * 10 + 8);
              b[I] = "#" + M + M + M;
            }),
            b
          );
        }
        m(d, "getDefaultColors");
        function p(b, w, I, M) {
          var $ = 16 + b * 36 + w * 6 + I,
            Y = b > 0 ? b * 40 + 55 : 0,
            re = w > 0 ? w * 40 + 55 : 0,
            Z = I > 0 ? I * 40 + 55 : 0;
          M[$] = y([Y, re, Z]);
        }
        m(p, "setStyleColor");
        function h(b) {
          for (var w = b.toString(16); w.length < 2; ) w = "0" + w;
          return w;
        }
        m(h, "toHexString");
        function y(b) {
          var w = [],
            I = i(b),
            M;
          try {
            for (I.s(); !(M = I.n()).done; ) {
              var $ = M.value;
              w.push(h($));
            }
          } catch (Y) {
            I.e(Y);
          } finally {
            I.f();
          }
          return "#" + w.join("");
        }
        m(y, "toColorHexString");
        function E(b, w, I, M) {
          var $;
          return (
            w === "text"
              ? ($ = O(I, M))
              : w === "display"
                ? ($ = A(b, I, M))
                : w === "xterm256Foreground"
                  ? ($ = j(b, M.colors[I]))
                  : w === "xterm256Background"
                    ? ($ = U(b, M.colors[I]))
                    : w === "rgb" && ($ = v(b, I)),
            $
          );
        }
        m(E, "generateOutput");
        function v(b, w) {
          w = w.substring(2).slice(0, -1);
          var I = +w.substr(0, 2),
            M = w.substring(5).split(";"),
            $ = M.map(function (Y) {
              return ("0" + Number(Y).toString(16)).substr(-2);
            }).join("");
          return N(b, (I === 38 ? "color:#" : "background-color:#") + $);
        }
        m(v, "handleRgb");
        function A(b, w, I) {
          w = parseInt(w, 10);
          var M = {
              "-1": m(function () {
                return "<br/>";
              }, "_"),
              0: m(function () {
                return b.length && D(b);
              }, "_"),
              1: m(function () {
                return R(b, "b");
              }, "_"),
              3: m(function () {
                return R(b, "i");
              }, "_"),
              4: m(function () {
                return R(b, "u");
              }, "_"),
              8: m(function () {
                return N(b, "display:none");
              }, "_"),
              9: m(function () {
                return R(b, "strike");
              }, "_"),
              22: m(function () {
                return N(
                  b,
                  "font-weight:normal;text-decoration:none;font-style:normal",
                );
              }, "_"),
              23: m(function () {
                return P(b, "i");
              }, "_"),
              24: m(function () {
                return P(b, "u");
              }, "_"),
              39: m(function () {
                return j(b, I.fg);
              }, "_"),
              49: m(function () {
                return U(b, I.bg);
              }, "_"),
              53: m(function () {
                return N(b, "text-decoration:overline");
              }, "_"),
            },
            $;
          return (
            M[w]
              ? ($ = M[w]())
              : 4 < w && w < 7
                ? ($ = R(b, "blink"))
                : 29 < w && w < 38
                  ? ($ = j(b, I.colors[w - 30]))
                  : 39 < w && w < 48
                    ? ($ = U(b, I.colors[w - 40]))
                    : 89 < w && w < 98
                      ? ($ = j(b, I.colors[8 + (w - 90)]))
                      : 99 < w &&
                        w < 108 &&
                        ($ = U(b, I.colors[8 + (w - 100)])),
            $
          );
        }
        m(A, "handleDisplay");
        function D(b) {
          var w = b.slice(0);
          return (
            (b.length = 0),
            w
              .reverse()
              .map(function (I) {
                return "</" + I + ">";
              })
              .join("")
          );
        }
        m(D, "resetStyles");
        function S(b, w) {
          for (var I = [], M = b; M <= w; M++) I.push(M);
          return I;
        }
        m(S, "range");
        function F(b) {
          return function (w) {
            return (b === null || w.category !== b) && b !== "all";
          };
        }
        m(F, "notCategory");
        function x(b) {
          b = parseInt(b, 10);
          var w = null;
          return (
            b === 0
              ? (w = "all")
              : b === 1
                ? (w = "bold")
                : 2 < b && b < 5
                  ? (w = "underline")
                  : 4 < b && b < 7
                    ? (w = "blink")
                    : b === 8
                      ? (w = "hide")
                      : b === 9
                        ? (w = "strike")
                        : (29 < b && b < 38) || b === 39 || (89 < b && b < 98)
                          ? (w = "foreground-color")
                          : ((39 < b && b < 48) ||
                              b === 49 ||
                              (99 < b && b < 108)) &&
                            (w = "background-color"),
            w
          );
        }
        m(x, "categoryForCode");
        function O(b, w) {
          return w.escapeXML ? u.encodeXML(b) : b;
        }
        m(O, "pushText");
        function R(b, w, I) {
          return (
            I || (I = ""),
            b.push(w),
            "<".concat(w).concat(I ? ' style="'.concat(I, '"') : "", ">")
          );
        }
        m(R, "pushTag");
        function N(b, w) {
          return R(b, "span", w);
        }
        m(N, "pushStyle");
        function j(b, w) {
          return R(b, "span", "color:" + w);
        }
        m(j, "pushForegroundColor");
        function U(b, w) {
          return R(b, "span", "background-color:" + w);
        }
        m(U, "pushBackgroundColor");
        function P(b, w) {
          var I;
          if ((b.slice(-1)[0] === w && (I = b.pop()), I)) return "</" + w + ">";
        }
        m(P, "closeTag");
        function K(b, w, I) {
          var M = !1,
            $ = 3;
          function Y() {
            return "";
          }
          m(Y, "remove");
          function re(Fe, Te) {
            return I("xterm256Foreground", Te), "";
          }
          m(re, "removeXterm256Foreground");
          function Z(Fe, Te) {
            return I("xterm256Background", Te), "";
          }
          m(Z, "removeXterm256Background");
          function X(Fe) {
            return w.newline ? I("display", -1) : I("text", Fe), "";
          }
          m(X, "newline");
          function ee(Fe, Te) {
            (M = !0),
              Te.trim().length === 0 && (Te = "0"),
              (Te = Te.trimRight(";").split(";"));
            var Xe = i(Te),
              xt;
            try {
              for (Xe.s(); !(xt = Xe.n()).done; ) {
                var Er = xt.value;
                I("display", Er);
              }
            } catch (pn) {
              Xe.e(pn);
            } finally {
              Xe.f();
            }
            return "";
          }
          m(ee, "ansiMess");
          function ge(Fe) {
            return I("text", Fe), "";
          }
          m(ge, "realText");
          function ue(Fe) {
            return I("rgb", Fe), "";
          }
          m(ue, "rgb");
          var Se = [
            { pattern: /^\x08+/, sub: Y },
            { pattern: /^\x1b\[[012]?K/, sub: Y },
            { pattern: /^\x1b\[\(B/, sub: Y },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: ue },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: re },
            { pattern: /^\x1b\[48;5;(\d+)m/, sub: Z },
            { pattern: /^\n/, sub: X },
            { pattern: /^\r+\n/, sub: X },
            { pattern: /^\r/, sub: X },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: ee },
            { pattern: /^\x1b\[\d?J/, sub: Y },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: Y },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: Y },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: ge },
          ];
          function ne(Fe, Te) {
            (Te > $ && M) || ((M = !1), (b = b.replace(Fe.pattern, Fe.sub)));
          }
          m(ne, "process");
          var je = [],
            Re = b,
            Je = Re.length;
          e: for (; Je > 0; ) {
            for (var Ht = 0, Ct = 0, zt = Se.length; Ct < zt; Ht = ++Ct) {
              var br = Se[Ht];
              if ((ne(br, Ht), b.length !== Je)) {
                Je = b.length;
                continue e;
              }
            }
            if (b.length === Je) break;
            je.push(0), (Je = b.length);
          }
          return je;
        }
        m(K, "tokenize");
        function L(b, w, I) {
          return (
            w !== "text" &&
              ((b = b.filter(F(x(I)))),
              b.push({ token: w, data: I, category: x(I) })),
            b
          );
        }
        m(L, "updateStickyStack");
        var z = (function () {
          function b(w) {
            r(this, b),
              (w = w || {}),
              w.colors && (w.colors = Object.assign({}, c.colors, w.colors)),
              (this.options = Object.assign({}, c, w)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            m(b, "Filter"),
            o(b, [
              {
                key: "toHtml",
                value: m(function (w) {
                  var I = this;
                  w = typeof w == "string" ? [w] : w;
                  var M = this.stack,
                    $ = this.options,
                    Y = [];
                  return (
                    this.stickyStack.forEach(function (re) {
                      var Z = E(M, re.token, re.data, $);
                      Z && Y.push(Z);
                    }),
                    K(w.join(""), $, function (re, Z) {
                      var X = E(M, re, Z, $);
                      X && Y.push(X),
                        $.stream && (I.stickyStack = L(I.stickyStack, re, Z));
                    }),
                    M.length && Y.push(D(M)),
                    Y.join("")
                  );
                }, "toHtml"),
              },
            ]),
            b
          );
        })();
        t.exports = z;
      }),
      Ee = (() => {
        let e;
        return (
          typeof window < "u"
            ? (e = window)
            : typeof globalThis < "u"
              ? (e = globalThis)
              : typeof window < "u"
                ? (e = window)
                : typeof self < "u"
                  ? (e = self)
                  : (e = {}),
          e
        );
      })();
    function Zi() {
      let e = {
        setHandler: m(() => {}, "setHandler"),
        send: m(() => {}, "send"),
      };
      return new Tr({ transport: e });
    }
    m(Zi, "mockChannel");
    var es = class {
      constructor() {
        (this.getChannel = m(() => {
          if (!this.channel) {
            let t = Zi();
            return this.setChannel(t), t;
          }
          return this.channel;
        }, "getChannel")),
          (this.ready = m(() => this.promise, "ready")),
          (this.hasChannel = m(() => !!this.channel, "hasChannel")),
          (this.setChannel = m((t) => {
            (this.channel = t), this.resolve();
          }, "setChannel")),
          (this.promise = new Promise((t) => {
            this.resolve = () => t(this.getChannel());
          }));
      }
    };
    m(es, "AddonStore");
    var Fp = es,
      Bn = "__STORYBOOK_ADDONS_PREVIEW";
    function ts() {
      return Ee[Bn] || (Ee[Bn] = new Fp()), Ee[Bn];
    }
    m(ts, "getAddonsStore");
    var bt = ts();
    function Ip(e) {
      return e;
    }
    m(Ip, "definePreview");
    var rs = class {
      constructor() {
        (this.hookListsMap = void 0),
          (this.mountedDecorators = void 0),
          (this.prevMountedDecorators = void 0),
          (this.currentHooks = void 0),
          (this.nextHookIndex = void 0),
          (this.currentPhase = void 0),
          (this.currentEffects = void 0),
          (this.prevEffects = void 0),
          (this.currentDecoratorName = void 0),
          (this.hasUpdates = void 0),
          (this.currentContext = void 0),
          (this.renderListener = m((t) => {
            t === this.currentContext?.id &&
              (this.triggerEffects(),
              (this.currentContext = null),
              this.removeRenderListeners());
          }, "renderListener")),
          this.init();
      }
      init() {
        (this.hookListsMap = new WeakMap()),
          (this.mountedDecorators = new Set()),
          (this.prevMountedDecorators = new Set()),
          (this.currentHooks = []),
          (this.nextHookIndex = 0),
          (this.currentPhase = "NONE"),
          (this.currentEffects = []),
          (this.prevEffects = []),
          (this.currentDecoratorName = null),
          (this.hasUpdates = !1),
          (this.currentContext = null);
      }
      clean() {
        this.prevEffects.forEach((t) => {
          t.destroy && t.destroy();
        }),
          this.init(),
          this.removeRenderListeners();
      }
      getNextHook() {
        let t = this.currentHooks[this.nextHookIndex];
        return (this.nextHookIndex += 1), t;
      }
      triggerEffects() {
        this.prevEffects.forEach((t) => {
          !this.currentEffects.includes(t) && t.destroy && t.destroy();
        }),
          this.currentEffects.forEach((t) => {
            this.prevEffects.includes(t) || (t.destroy = t.create());
          }),
          (this.prevEffects = this.currentEffects),
          (this.currentEffects = []);
      }
      addRenderListeners() {
        this.removeRenderListeners(),
          bt.getChannel().on(er, this.renderListener);
      }
      removeRenderListeners() {
        bt.getChannel().removeListener(er, this.renderListener);
      }
    };
    m(rs, "HooksContext");
    var ns = rs;
    function qn(e) {
      let t = m((...r) => {
        let { hooks: n } = typeof r[0] == "function" ? r[1] : r[0],
          o = n.currentPhase,
          i = n.currentHooks,
          a = n.nextHookIndex,
          l = n.currentDecoratorName;
        (n.currentDecoratorName = e.name),
          n.prevMountedDecorators.has(e)
            ? ((n.currentPhase = "UPDATE"),
              (n.currentHooks = n.hookListsMap.get(e) || []))
            : ((n.currentPhase = "MOUNT"),
              (n.currentHooks = []),
              n.hookListsMap.set(e, n.currentHooks),
              n.prevMountedDecorators.add(e)),
          (n.nextHookIndex = 0);
        let u = Ee.STORYBOOK_HOOKS_CONTEXT;
        Ee.STORYBOOK_HOOKS_CONTEXT = n;
        let c = e(...r);
        if (
          ((Ee.STORYBOOK_HOOKS_CONTEXT = u),
          n.currentPhase === "UPDATE" && n.getNextHook() != null)
        )
          throw new Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement.",
          );
        return (
          (n.currentPhase = o),
          (n.currentHooks = i),
          (n.nextHookIndex = a),
          (n.currentDecoratorName = l),
          c
        );
      }, "hookified");
      return (t.originalFn = e), t;
    }
    m(qn, "hookify");
    var Nn = 0,
      kp = 25,
      Rp = m(
        (e) => (t, r) => {
          let n = e(
            qn(t),
            r.map((o) => qn(o)),
          );
          return (o) => {
            let { hooks: i } = o;
            (i.prevMountedDecorators ??= new Set()),
              (i.mountedDecorators = new Set([t, ...r])),
              (i.currentContext = o),
              (i.hasUpdates = !1);
            let a = n(o);
            for (Nn = 1; i.hasUpdates; )
              if (
                ((i.hasUpdates = !1),
                (i.currentEffects = []),
                (a = n(o)),
                (Nn += 1),
                Nn > kp)
              )
                throw new Error(
                  "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.",
                );
            return i.addRenderListeners(), a;
          };
        },
        "applyHooks",
      ),
      Op = m(
        (e, t) => e.length === t.length && e.every((r, n) => r === t[n]),
        "areDepsEqual",
      ),
      ao = m(
        () =>
          new Error(
            "Storybook preview hooks can only be called inside decorators and story functions.",
          ),
        "invalidHooksError",
      );
    function io() {
      return Ee.STORYBOOK_HOOKS_CONTEXT || null;
    }
    m(io, "getHooksContextOrNull");
    function Ur() {
      let e = io();
      if (e == null) throw ao();
      return e;
    }
    m(Ur, "getHooksContextOrThrow");
    function os(e, t, r) {
      let n = Ur();
      if (n.currentPhase === "MOUNT") {
        r != null &&
          !Array.isArray(r) &&
          Q.warn(
            `${e} received a final argument that is not an array (instead, received ${r}). When specified, the final argument must be an array.`,
          );
        let o = { name: e, deps: r };
        return n.currentHooks.push(o), t(o), o;
      }
      if (n.currentPhase === "UPDATE") {
        let o = n.getNextHook();
        if (o == null)
          throw new Error(
            "Rendered more hooks than during the previous render.",
          );
        return (
          o.name !== e &&
            Q.warn(
              `Storybook has detected a change in the order of Hooks${n.currentDecoratorName ? ` called by ${n.currentDecoratorName}` : ""}. This will lead to bugs and errors if not fixed.`,
            ),
          r != null &&
            o.deps == null &&
            Q.warn(
              `${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`,
            ),
          r != null &&
            o.deps != null &&
            r.length !== o.deps.length &&
            Q.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${o.deps}
Incoming: ${r}`),
          (r == null || o.deps == null || !Op(r, o.deps)) &&
            (t(o), (o.deps = r)),
          o
        );
      }
      throw ao();
    }
    m(os, "useHook");
    function ar(e, t, r) {
      let { memoizedState: n } = os(
        e,
        (o) => {
          o.memoizedState = t();
        },
        r,
      );
      return n;
    }
    m(ar, "useMemoLike");
    function _p(e, t) {
      return ar("useMemo", e, t);
    }
    m(_p, "useMemo");
    function or(e, t) {
      return ar("useCallback", () => e, t);
    }
    m(or, "useCallback");
    function so(e, t) {
      return ar(e, () => ({ current: t }), []);
    }
    m(so, "useRefLike");
    function Pp(e) {
      return so("useRef", e);
    }
    m(Pp, "useRef");
    function as() {
      let e = io();
      if (e != null && e.currentPhase !== "NONE") e.hasUpdates = !0;
      else
        try {
          bt.getChannel().emit(Ir);
        } catch {
          Q.warn(
            "State updates of Storybook preview hooks work only in browser",
          );
        }
    }
    m(as, "triggerUpdate");
    function lo(e, t) {
      let r = so(e, typeof t == "function" ? t() : t),
        n = m((o) => {
          (r.current = typeof o == "function" ? o(r.current) : o), as();
        }, "setState");
      return [r.current, n];
    }
    m(lo, "useStateLike");
    function uo(e) {
      return lo("useState", e);
    }
    m(uo, "useState");
    function Bp(e, t, r) {
      let n = r != null ? () => r(t) : t,
        [o, i] = lo("useReducer", n);
      return [o, m((a) => i((l) => e(l, a)), "dispatch")];
    }
    m(Bp, "useReducer");
    function $r(e, t) {
      let r = Ur(),
        n = ar("useEffect", () => ({ create: e }), t);
      r.currentEffects.includes(n) || r.currentEffects.push(n);
    }
    m($r, "useEffect");
    function Np(e, t = []) {
      let r = bt.getChannel();
      return (
        $r(
          () => (
            Object.entries(e).forEach(([n, o]) => r.on(n, o)),
            () => {
              Object.entries(e).forEach(([n, o]) => r.removeListener(n, o));
            }
          ),
          [...Object.keys(e), ...t],
        ),
        or(r.emit.bind(r), [r])
      );
    }
    m(Np, "useChannel");
    function qr() {
      let { currentContext: e } = Ur();
      if (e == null) throw ao();
      return e;
    }
    m(qr, "useStoryContext");
    function jp(e, t) {
      let { parameters: r } = qr();
      if (e) return r[e] ?? t;
    }
    m(jp, "useParameter");
    function Lp() {
      let e = bt.getChannel(),
        { id: t, args: r } = qr(),
        n = or((i) => e.emit(tr, { storyId: t, updatedArgs: i }), [e, t]),
        o = or((i) => e.emit(Zt, { storyId: t, argNames: i }), [e, t]);
      return [r, n, o];
    }
    m(Lp, "useArgs");
    function Mp() {
      let e = bt.getChannel(),
        { globals: t } = qr(),
        r = or((n) => e.emit(kr, { globals: n }), [e]);
      return [t, r];
    }
    m(Mp, "useGlobals");
    var gE = m(
      ({
        name: e,
        parameterName: t,
        wrapper: r,
        skipIfNoParametersOrOptions: n = !1,
      }) => {
        let o = m(
          (i) => (a, l) => {
            let u = l.parameters && l.parameters[t];
            return (u && u.disable) || (n && !i && !u)
              ? a(l)
              : r(a, l, { options: i, parameters: u });
          },
          "decorator",
        );
        return (...i) =>
          typeof i[0] == "function"
            ? o()(...i)
            : (...a) => {
                if (a.length > 1)
                  return i.length > 1 ? o(i)(...a) : o(...i)(...a);
                throw new Error(`Passing stories directly into ${e}() is not allowed,
        instead use addDecorator(${e}) and pass options with the '${t}' parameter`);
              };
      },
      "makeDecorator",
    );
    function fe(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n = Array.from(typeof e == "string" ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var o = n.reduce(function (l, u) {
        var c = u.match(/\n([\t ]+|(?!\s).)/g);
        return c
          ? l.concat(
              c.map(function (d) {
                var p, h;
                return (h =
                  (p = d.match(/[\t ]/g)) === null || p === void 0
                    ? void 0
                    : p.length) !== null && h !== void 0
                  ? h
                  : 0;
              }),
            )
          : l;
      }, []);
      if (o.length) {
        var i = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            "}",
          "g",
        );
        n = n.map(function (l) {
          return l.replace(
            i,
            `
`,
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, "");
      var a = n[0];
      return (
        t.forEach(function (l, u) {
          var c = a.match(/(?:^|\n)( *)$/),
            d = c ? c[1] : "",
            p = l;
          typeof l == "string" &&
            l.includes(`
`) &&
            (p = String(l)
              .split(
                `
`,
              )
              .map(function (h, y) {
                return y === 0 ? h : "" + d + h;
              }).join(`
`)),
            (a += p + n[u + 1]);
        }),
        a
      );
    }
    m(fe, "dedent");
    var Up = fe,
      Bi = new Map(),
      $p = "UNIVERSAL_STORE:",
      Pe = { PENDING: "PENDING", RESOLVED: "RESOLVED", REJECTED: "REJECTED" },
      it = class G {
        constructor(t, r) {
          if (
            ((this.debugging = !1),
            (this.listeners = new Map([["*", new Set()]])),
            (this.getState = m(
              () => (this.debug("getState", { state: this.state }), this.state),
              "getState",
            )),
            (this.subscribe = m((n, o) => {
              let i = typeof n == "function",
                a = i ? "*" : n,
                l = i ? n : o;
              if ((this.debug("subscribe", { eventType: a, listener: l }), !l))
                throw new TypeError(
                  `Missing first subscribe argument, or second if first is the event type, when subscribing to a UniversalStore with id '${this.id}'`,
                );
              return (
                this.listeners.has(a) || this.listeners.set(a, new Set()),
                this.listeners.get(a).add(l),
                () => {
                  this.debug("unsubscribe", { eventType: a, listener: l }),
                    this.listeners.has(a) &&
                      (this.listeners.get(a).delete(l),
                      this.listeners.get(a)?.size === 0 &&
                        this.listeners.delete(a));
                }
              );
            }, "subscribe")),
            (this.send = m((n) => {
              if (
                (this.debug("send", { event: n }),
                this.status !== G.Status.READY)
              )
                throw new TypeError(fe`Cannot send event before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({ event: n, id: this.id, actor: this.actor, environment: this.environment }, null, 2)}`);
              this.emitToListeners(n, { actor: this.actor }),
                this.emitToChannel(n, { actor: this.actor });
            }, "send")),
            (this.debugging = t.debug ?? !1),
            !G.isInternalConstructing)
          )
            throw new TypeError(
              "UniversalStore is not constructable - use UniversalStore.create() instead",
            );
          if (
            ((G.isInternalConstructing = !1),
            (this.id = t.id),
            (this.actorId =
              Date.now().toString(36) +
              Math.random().toString(36).substring(2)),
            (this.actorType = t.leader
              ? G.ActorType.LEADER
              : G.ActorType.FOLLOWER),
            (this.state = t.initialState),
            (this.channelEventName = `${$p}${this.id}`),
            this.debug("constructor", {
              options: t,
              environmentOverrides: r,
              channelEventName: this.channelEventName,
            }),
            this.actor.type === G.ActorType.LEADER)
          )
            this.syncing = { state: Pe.RESOLVED, promise: Promise.resolve() };
          else {
            let n,
              o,
              i = new Promise((a, l) => {
                (n = m(() => {
                  this.syncing.state === Pe.PENDING &&
                    ((this.syncing.state = Pe.RESOLVED), a());
                }, "syncingResolve")),
                  (o = m((u) => {
                    this.syncing.state === Pe.PENDING &&
                      ((this.syncing.state = Pe.REJECTED), l(u));
                  }, "syncingReject"));
              });
            this.syncing = {
              state: Pe.PENDING,
              promise: i,
              resolve: n,
              reject: o,
            };
          }
          (this.getState = this.getState.bind(this)),
            (this.setState = this.setState.bind(this)),
            (this.subscribe = this.subscribe.bind(this)),
            (this.onStateChange = this.onStateChange.bind(this)),
            (this.send = this.send.bind(this)),
            (this.emitToChannel = this.emitToChannel.bind(this)),
            (this.prepareThis = this.prepareThis.bind(this)),
            (this.emitToListeners = this.emitToListeners.bind(this)),
            (this.handleChannelEvents = this.handleChannelEvents.bind(this)),
            (this.debug = this.debug.bind(this)),
            (this.channel = r?.channel ?? G.preparation.channel),
            (this.environment = r?.environment ?? G.preparation.environment),
            this.channel && this.environment
              ? this.prepareThis({
                  channel: this.channel,
                  environment: this.environment,
                })
              : G.preparation.promise.then(this.prepareThis);
        }
        static setupPreparationPromise() {
          let t,
            r,
            n = new Promise((o, i) => {
              (t = m((a) => {
                o(a);
              }, "resolveRef")),
                (r = m((...a) => {
                  i(a);
                }, "rejectRef"));
            });
          G.preparation = { resolve: t, reject: r, promise: n };
        }
        get actor() {
          return Object.freeze({
            id: this.actorId,
            type: this.actorType,
            environment: this.environment ?? G.Environment.UNKNOWN,
          });
        }
        get status() {
          if (!this.channel || !this.environment) return G.Status.UNPREPARED;
          switch (this.syncing?.state) {
            case Pe.PENDING:
            case void 0:
              return G.Status.SYNCING;
            case Pe.REJECTED:
              return G.Status.ERROR;
            case Pe.RESOLVED:
            default:
              return G.Status.READY;
          }
        }
        untilReady() {
          return Promise.all([G.preparation.promise, this.syncing?.promise]);
        }
        static create(t) {
          if (!t || typeof t?.id != "string")
            throw new TypeError(
              "id is required and must be a string, when creating a UniversalStore",
            );
          t.debug &&
            console.debug(
              fe`[UniversalStore]
        create`,
              { options: t },
            );
          let r = Bi.get(t.id);
          if (r)
            return (
              console.warn(fe`UniversalStore with id "${t.id}" already exists in this environment, re-using existing.
        You should reuse the existing instance instead of trying to create a new one.`),
              r
            );
          G.isInternalConstructing = !0;
          let n = new G(t);
          return Bi.set(t.id, n), n;
        }
        static __prepare(t, r) {
          (G.preparation.channel = t),
            (G.preparation.environment = r),
            G.preparation.resolve({ channel: t, environment: r });
        }
        setState(t) {
          let r = this.state,
            n = typeof t == "function" ? t(r) : t;
          if (
            (this.debug("setState", {
              newState: n,
              previousState: r,
              updater: t,
            }),
            this.status !== G.Status.READY)
          )
            throw new TypeError(fe`Cannot set state before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({ newState: n, id: this.id, actor: this.actor, environment: this.environment }, null, 2)}`);
          this.state = n;
          let o = {
            type: G.InternalEventType.SET_STATE,
            payload: { state: n, previousState: r },
          };
          this.emitToChannel(o, { actor: this.actor }),
            this.emitToListeners(o, { actor: this.actor });
        }
        onStateChange(t) {
          return (
            this.debug("onStateChange", { listener: t }),
            this.subscribe(
              G.InternalEventType.SET_STATE,
              ({ payload: r }, n) => {
                t(r.state, r.previousState, n);
              },
            )
          );
        }
        emitToChannel(t, r) {
          this.debug("emitToChannel", {
            event: t,
            eventInfo: r,
            channel: this.channel,
          }),
            this.channel?.emit(this.channelEventName, {
              event: t,
              eventInfo: r,
            });
        }
        prepareThis({ channel: t, environment: r }) {
          (this.channel = t),
            (this.environment = r),
            this.debug("prepared", { channel: t, environment: r }),
            this.channel.on(this.channelEventName, this.handleChannelEvents),
            this.actor.type === G.ActorType.LEADER
              ? this.emitToChannel(
                  { type: G.InternalEventType.LEADER_CREATED },
                  { actor: this.actor },
                )
              : (this.emitToChannel(
                  { type: G.InternalEventType.FOLLOWER_CREATED },
                  { actor: this.actor },
                ),
                this.emitToChannel(
                  { type: G.InternalEventType.EXISTING_STATE_REQUEST },
                  { actor: this.actor },
                ),
                setTimeout(() => {
                  this.syncing.reject(
                    new TypeError(
                      `No existing state found for follower with id: '${this.id}'. Make sure a leader with the same id exists before creating a follower.`,
                    ),
                  );
                }, 1e3));
        }
        emitToListeners(t, r) {
          let n = this.listeners.get(t.type),
            o = this.listeners.get("*");
          this.debug("emitToListeners", {
            event: t,
            eventInfo: r,
            eventTypeListeners: n,
            everythingListeners: o,
          }),
            [...(n ?? []), ...(o ?? [])].forEach((i) => i(t, r));
        }
        handleChannelEvents(t) {
          let { event: r, eventInfo: n } = t;
          if ([n.actor.id, n.forwardingActor?.id].includes(this.actor.id)) {
            this.debug("handleChannelEvents: Ignoring event from self", {
              channelEvent: t,
            });
            return;
          } else if (
            this.syncing?.state === Pe.PENDING &&
            r.type !== G.InternalEventType.EXISTING_STATE_RESPONSE
          ) {
            this.debug("handleChannelEvents: Ignoring event while syncing", {
              channelEvent: t,
            });
            return;
          }
          if (
            (this.debug("handleChannelEvents", { channelEvent: t }),
            this.actor.type === G.ActorType.LEADER)
          ) {
            let o = !0;
            switch (r.type) {
              case G.InternalEventType.EXISTING_STATE_REQUEST:
                o = !1;
                let i = {
                  type: G.InternalEventType.EXISTING_STATE_RESPONSE,
                  payload: this.state,
                };
                this.debug(
                  "handleChannelEvents: responding to existing state request",
                  { responseEvent: i },
                ),
                  this.emitToChannel(i, { actor: this.actor });
                break;
              case G.InternalEventType.LEADER_CREATED:
                (o = !1),
                  (this.syncing.state = Pe.REJECTED),
                  this.debug(
                    "handleChannelEvents: erroring due to second leader being created",
                    { event: r },
                  ),
                  console.error(fe`Detected multiple UniversalStore leaders created with the same id "${this.id}".
            Only one leader can exists at a time, your stores are now in an invalid state.
            Leaders detected:
            this: ${JSON.stringify(this.actor, null, 2)}
            other: ${JSON.stringify(n.actor, null, 2)}`);
                break;
            }
            o &&
              (this.debug("handleChannelEvents: forwarding event", {
                channelEvent: t,
              }),
              this.emitToChannel(r, {
                actor: n.actor,
                forwardingActor: this.actor,
              }));
          }
          if (this.actor.type === G.ActorType.FOLLOWER)
            switch (r.type) {
              case G.InternalEventType.EXISTING_STATE_RESPONSE:
                if (
                  (this.debug(
                    "handleChannelEvents: Setting state from leader's existing state response",
                    { event: r },
                  ),
                  this.syncing?.state !== Pe.PENDING)
                )
                  break;
                this.syncing.resolve?.();
                let o = {
                  type: G.InternalEventType.SET_STATE,
                  payload: { state: r.payload, previousState: this.state },
                };
                (this.state = r.payload), this.emitToListeners(o, n);
                break;
            }
          switch (r.type) {
            case G.InternalEventType.SET_STATE:
              this.debug("handleChannelEvents: Setting state", { event: r }),
                (this.state = r.payload.state);
              break;
          }
          this.emitToListeners(r, { actor: n.actor });
        }
        debug(t, r) {
          this.debugging &&
            console.debug(
              fe`[UniversalStore::${this.id}::${this.environment ?? G.Environment.UNKNOWN}]
        ${t}`,
              JSON.stringify(
                {
                  data: r,
                  actor: this.actor,
                  state: this.state,
                  status: this.status,
                },
                null,
                2,
              ),
            );
        }
        static __reset() {
          G.preparation.reject(new Error("reset")),
            G.setupPreparationPromise(),
            (G.isInternalConstructing = !1);
        }
      };
    m(it, "UniversalStore"),
      (it.ActorType = { LEADER: "LEADER", FOLLOWER: "FOLLOWER" }),
      (it.Environment = {
        SERVER: "SERVER",
        MANAGER: "MANAGER",
        PREVIEW: "PREVIEW",
        UNKNOWN: "UNKNOWN",
        MOCK: "MOCK",
      }),
      (it.InternalEventType = {
        EXISTING_STATE_REQUEST: "__EXISTING_STATE_REQUEST",
        EXISTING_STATE_RESPONSE: "__EXISTING_STATE_RESPONSE",
        SET_STATE: "__SET_STATE",
        LEADER_CREATED: "__LEADER_CREATED",
        FOLLOWER_CREATED: "__FOLLOWER_CREATED",
      }),
      (it.Status = {
        UNPREPARED: "UNPREPARED",
        SYNCING: "SYNCING",
        READY: "READY",
        ERROR: "ERROR",
      }),
      (it.isInternalConstructing = !1),
      it.setupPreparationPromise();
    var Or = it;
    function is(e, t) {
      let r = {},
        n = Object.entries(e);
      for (let o = 0; o < n.length; o++) {
        let [i, a] = n[o];
        t(a, i) || (r[i] = a);
      }
      return r;
    }
    m(is, "omitBy");
    function ss(e, t) {
      let r = {};
      for (let n = 0; n < t.length; n++) {
        let o = t[n];
        Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
      }
      return r;
    }
    m(ss, "pick");
    function ls(e, t) {
      let r = {},
        n = Object.entries(e);
      for (let o = 0; o < n.length; o++) {
        let [i, a] = n[o];
        t(a, i) && (r[i] = a);
      }
      return r;
    }
    m(ls, "pickBy");
    function Le(e) {
      if (typeof e != "object" || e == null) return !1;
      if (Object.getPrototypeOf(e) === null) return !0;
      if (e.toString() !== "[object Object]") return !1;
      let t = e;
      for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    m(Le, "isPlainObject");
    function Et(e, t) {
      let r = {},
        n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        let i = n[o],
          a = e[i];
        r[i] = t(a, i, e);
      }
      return r;
    }
    m(Et, "mapValues");
    var qp = "[object RegExp]",
      Vp = "[object String]",
      Jp = "[object Number]",
      Hp = "[object Boolean]",
      Ni = "[object Arguments]",
      zp = "[object Symbol]",
      Gp = "[object Date]",
      Wp = "[object Map]",
      Kp = "[object Set]",
      Yp = "[object Array]",
      Xp = "[object Function]",
      Qp = "[object ArrayBuffer]",
      jn = "[object Object]",
      Zp = "[object Error]",
      eh = "[object DataView]",
      th = "[object Uint8Array]",
      rh = "[object Uint8ClampedArray]",
      nh = "[object Uint16Array]",
      oh = "[object Uint32Array]",
      ah = "[object BigUint64Array]",
      ih = "[object Int8Array]",
      sh = "[object Int16Array]",
      lh = "[object Int32Array]",
      uh = "[object BigInt64Array]",
      ch = "[object Float32Array]",
      dh = "[object Float64Array]";
    function Vn(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    m(Vn, "getSymbols");
    function Jn(e) {
      return e == null
        ? e === void 0
          ? "[object Undefined]"
          : "[object Null]"
        : Object.prototype.toString.call(e);
    }
    m(Jn, "getTag");
    function co(e, t) {
      if (typeof e == typeof t)
        switch (typeof e) {
          case "bigint":
          case "string":
          case "boolean":
          case "symbol":
          case "undefined":
            return e === t;
          case "number":
            return e === t || Object.is(e, t);
          case "function":
            return e === t;
          case "object":
            return $e(e, t);
        }
      return $e(e, t);
    }
    m(co, "isEqual");
    function $e(e, t, r) {
      if (Object.is(e, t)) return !0;
      let n = Jn(e),
        o = Jn(t);
      if ((n === Ni && (n = jn), o === Ni && (o = jn), n !== o)) return !1;
      switch (n) {
        case Vp:
          return e.toString() === t.toString();
        case Jp: {
          let l = e.valueOf(),
            u = t.valueOf();
          return l === u || (Number.isNaN(l) && Number.isNaN(u));
        }
        case Hp:
        case Gp:
        case zp:
          return Object.is(e.valueOf(), t.valueOf());
        case qp:
          return e.source === t.source && e.flags === t.flags;
        case Xp:
          return e === t;
      }
      r = r ?? new Map();
      let i = r.get(e),
        a = r.get(t);
      if (i != null && a != null) return i === t;
      r.set(e, t), r.set(t, e);
      try {
        switch (n) {
          case Wp: {
            if (e.size !== t.size) return !1;
            for (let [l, u] of e.entries())
              if (!t.has(l) || !$e(u, t.get(l), r)) return !1;
            return !0;
          }
          case Kp: {
            if (e.size !== t.size) return !1;
            let l = Array.from(e.values()),
              u = Array.from(t.values());
            for (let c = 0; c < l.length; c++) {
              let d = l[c],
                p = u.findIndex((h) => $e(d, h, r));
              if (p === -1) return !1;
              u.splice(p, 1);
            }
            return !0;
          }
          case Yp:
          case th:
          case rh:
          case nh:
          case oh:
          case ah:
          case ih:
          case sh:
          case lh:
          case uh:
          case ch:
          case dh: {
            if (
              (typeof Buffer < "u" &&
                Buffer.isBuffer(e) !== Buffer.isBuffer(t)) ||
              e.length !== t.length
            )
              return !1;
            for (let l = 0; l < e.length; l++)
              if (!$e(e[l], t[l], r)) return !1;
            return !0;
          }
          case Qp:
            return e.byteLength !== t.byteLength
              ? !1
              : $e(new Uint8Array(e), new Uint8Array(t), r);
          case eh:
            return e.byteLength !== t.byteLength ||
              e.byteOffset !== t.byteOffset
              ? !1
              : $e(e.buffer, t.buffer, r);
          case Zp:
            return e.name === t.name && e.message === t.message;
          case jn: {
            if (!($e(e.constructor, t.constructor, r) || (Le(e) && Le(t))))
              return !1;
            let l = [...Object.keys(e), ...Vn(e)],
              u = [...Object.keys(t), ...Vn(t)];
            if (l.length !== u.length) return !1;
            for (let c = 0; c < l.length; c++) {
              let d = l[c],
                p = e[d];
              if (!Object.prototype.hasOwnProperty.call(t, d)) return !1;
              let h = t[d];
              if (!$e(p, h, r)) return !1;
            }
            return !0;
          }
          default:
            return !1;
        }
      } finally {
        r.delete(e), r.delete(t);
      }
    }
    m($e, "areObjectsEqual");
    var EE = m((e, t) => {
        let [r, n] = uo(t ? t(e.getState()) : e.getState());
        return (
          $r(
            () =>
              e.onStateChange((o, i) => {
                if (!t) {
                  n(o);
                  return;
                }
                let a = t(o),
                  l = t(i);
                !co(a, l) && n(a);
              }),
            [e, n, t],
          ),
          [r, e.setState]
        );
      }, "useUniversalStore"),
      ph = class us extends Or {
        constructor(t, r) {
          (Or.isInternalConstructing = !0),
            super(
              { ...t, leader: !0 },
              { channel: new Tr({}), environment: Or.Environment.MOCK },
            ),
            (Or.isInternalConstructing = !1),
            typeof r?.fn == "function" &&
              ((this.testUtils = r),
              (this.getState = r.fn(this.getState)),
              (this.setState = r.fn(this.setState)),
              (this.subscribe = r.fn(this.subscribe)),
              (this.onStateChange = r.fn(this.onStateChange)),
              (this.send = r.fn(this.send)));
        }
        static create(t, r) {
          return new us(t, r);
        }
        unsubscribeAll() {
          if (!this.testUtils)
            throw new Error(Up`Cannot call unsubscribeAll on a store that does not have testUtils.
        Please provide testUtils as the second argument when creating the store.`);
          let t = m((r) => {
            try {
              r.value();
            } catch {}
          }, "callReturnedUnsubscribeFn");
          this.subscribe.mock?.results.forEach(t),
            this.onStateChange.mock?.results.forEach(t);
        }
      };
    m(ph, "MockUniversalStore");
    var Ln = Bt(Wi(), 1),
      Ot = Symbol("incompatible"),
      Hn = m((e, t) => {
        let r = t.type;
        if (e == null || !r || t.mapping) return e;
        switch (r.name) {
          case "string":
            return String(e);
          case "enum":
            return e;
          case "number":
            return Number(e);
          case "boolean":
            return String(e) === "true";
          case "array":
            return !r.value || !Array.isArray(e)
              ? Ot
              : e.reduce((n, o, i) => {
                  let a = Hn(o, { type: r.value });
                  return a !== Ot && (n[i] = a), n;
                }, new Array(e.length));
          case "object":
            return typeof e == "string" || typeof e == "number"
              ? e
              : !r.value || typeof e != "object"
                ? Ot
                : Object.entries(e).reduce((n, [o, i]) => {
                    let a = Hn(i, { type: r.value[o] });
                    return a === Ot ? n : Object.assign(n, { [o]: a });
                  }, {});
          default:
            return Ot;
        }
      }, "map"),
      hh = m(
        (e, t) =>
          Object.entries(e).reduce((r, [n, o]) => {
            if (!t[n]) return r;
            let i = Hn(o, t[n]);
            return i === Ot ? r : Object.assign(r, { [n]: i });
          }, {}),
        "mapArgsToTypes",
      ),
      zn = m(
        (e, t) =>
          Array.isArray(e) && Array.isArray(t)
            ? t
                .reduce((r, n, o) => ((r[o] = zn(e[o], t[o])), r), [...e])
                .filter((r) => r !== void 0)
            : !Le(e) || !Le(t)
              ? t
              : Object.keys({ ...e, ...t }).reduce((r, n) => {
                  if (n in t) {
                    let o = zn(e[n], t[n]);
                    o !== void 0 && (r[n] = o);
                  } else r[n] = e[n];
                  return r;
                }, {}),
        "combineArgs",
      ),
      fh = m(
        (e, t) =>
          Object.entries(t).reduce((r, [n, { options: o }]) => {
            function i() {
              return n in e && (r[n] = e[n]), r;
            }
            if ((m(i, "allowArg"), !o)) return i();
            if (!Array.isArray(o))
              return (
                ot.error(fe`
        Invalid argType: '${n}.options' should be an array.

        More info: https://storybook.js.org/docs/api/arg-types
      `),
                i()
              );
            if (o.some((p) => p && ["object", "function"].includes(typeof p)))
              return (
                ot.error(fe`
        Invalid argType: '${n}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
      `),
                i()
              );
            let a = Array.isArray(e[n]),
              l = a && e[n].findIndex((p) => !o.includes(p)),
              u = a && l === -1;
            if (e[n] === void 0 || o.includes(e[n]) || u) return i();
            let c = a ? `${n}[${l}]` : n,
              d = o
                .map((p) => (typeof p == "string" ? `'${p}'` : String(p)))
                .join(", ");
            return (
              ot.warn(
                `Received illegal value for '${c}'. Supported options: ${d}`,
              ),
              r
            );
          }, {}),
        "validateOptions",
      ),
      rr = Symbol("Deeply equal"),
      Nr = m((e, t) => {
        if (typeof e != typeof t) return t;
        if (co(e, t)) return rr;
        if (Array.isArray(e) && Array.isArray(t)) {
          let r = t.reduce((n, o, i) => {
            let a = Nr(e[i], o);
            return a !== rr && (n[i] = a), n;
          }, new Array(t.length));
          return t.length >= e.length
            ? r
            : r.concat(new Array(e.length - t.length).fill(void 0));
        }
        return Le(e) && Le(t)
          ? Object.keys({ ...e, ...t }).reduce((r, n) => {
              let o = Nr(e?.[n], t?.[n]);
              return o === rr ? r : Object.assign(r, { [n]: o });
            }, {})
          : t;
      }, "deepDiff"),
      cs = "UNTARGETED";
    function ds({ args: e, argTypes: t }) {
      let r = {};
      return (
        Object.entries(e).forEach(([n, o]) => {
          let { target: i = cs } = t[n] || {};
          (r[i] = r[i] || {}), (r[i][n] = o);
        }),
        r
      );
    }
    m(ds, "groupArgsByTarget");
    function ps(e) {
      return Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e;
    }
    m(ps, "deleteUndefined");
    var hs = class {
      constructor() {
        (this.initialArgsByStoryId = {}), (this.argsByStoryId = {});
      }
      get(t) {
        if (!(t in this.argsByStoryId))
          throw new Error(
            `No args known for ${t} -- has it been rendered yet?`,
          );
        return this.argsByStoryId[t];
      }
      setInitial(t) {
        if (!this.initialArgsByStoryId[t.id])
          (this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs);
        else if (this.initialArgsByStoryId[t.id] !== t.initialArgs) {
          let r = Nr(this.initialArgsByStoryId[t.id], this.argsByStoryId[t.id]);
          (this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs),
            r !== rr && this.updateFromDelta(t, r);
        }
      }
      updateFromDelta(t, r) {
        let n = fh(r, t.argTypes);
        this.argsByStoryId[t.id] = zn(this.argsByStoryId[t.id], n);
      }
      updateFromPersisted(t, r) {
        let n = hh(r, t.argTypes);
        return this.updateFromDelta(t, n);
      }
      update(t, r) {
        if (!(t in this.argsByStoryId))
          throw new Error(
            `No args known for ${t} -- has it been rendered yet?`,
          );
        this.argsByStoryId[t] = ps({ ...this.argsByStoryId[t], ...r });
      }
    };
    m(hs, "ArgsStore");
    var mh = hs,
      fs = m(
        (e = {}) =>
          Object.entries(e).reduce(
            (t, [r, { defaultValue: n }]) => (typeof n < "u" && (t[r] = n), t),
            {},
          ),
        "getValuesFromArgTypes",
      ),
      ms = class {
        constructor({ globals: t = {}, globalTypes: r = {} }) {
          this.set({ globals: t, globalTypes: r });
        }
        set({ globals: t = {}, globalTypes: r = {} }) {
          let n = this.initialGlobals && Nr(this.initialGlobals, this.globals);
          this.allowedGlobalNames = new Set([
            ...Object.keys(t),
            ...Object.keys(r),
          ]);
          let o = fs(r);
          (this.initialGlobals = { ...o, ...t }),
            (this.globals = this.initialGlobals),
            n && n !== rr && this.updateFromPersisted(n);
        }
        filterAllowedGlobals(t) {
          return Object.entries(t).reduce(
            (r, [n, o]) => (
              this.allowedGlobalNames.has(n)
                ? (r[n] = o)
                : Q.warn(
                    `Attempted to set a global (${n}) that is not defined in initial globals or globalTypes`,
                  ),
              r
            ),
            {},
          );
        }
        updateFromPersisted(t) {
          let r = this.filterAllowedGlobals(t);
          this.globals = { ...this.globals, ...r };
        }
        get() {
          return this.globals;
        }
        update(t) {
          this.globals = { ...this.globals, ...this.filterAllowedGlobals(t) };
        }
      };
    m(ms, "GlobalsStore");
    var yh = ms,
      gh = Bt(Wi(), 1),
      bh = (0, gh.default)(1)((e) =>
        Object.values(e).reduce(
          (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
          {},
        ),
      ),
      ys = class {
        constructor({ entries: t } = { v: 5, entries: {} }) {
          this.entries = t;
        }
        entryFromSpecifier(t) {
          let r = Object.values(this.entries);
          if (t === "*") return r[0];
          if (typeof t == "string")
            return this.entries[t]
              ? this.entries[t]
              : r.find((i) => i.id.startsWith(t));
          let { name: n, title: o } = t;
          return r.find((i) => i.name === n && i.title === o);
        }
        storyIdToEntry(t) {
          let r = this.entries[t];
          if (!r) throw new _a({ storyId: t });
          return r;
        }
        importPathToEntry(t) {
          return bh(this.entries)[t];
        }
      };
    m(ys, "StoryIndexStore");
    var Eh = ys,
      vh = m((e) => (typeof e == "string" ? { name: e } : e), "normalizeType"),
      Ah = m(
        (e) => (typeof e == "string" ? { type: e } : e),
        "normalizeControl",
      ),
      Dh = m((e, t) => {
        let { type: r, control: n, ...o } = e,
          i = { name: t, ...o };
        return (
          r && (i.type = vh(r)),
          n ? (i.control = Ah(n)) : n === !1 && (i.control = { disable: !0 }),
          i
        );
      }, "normalizeInputType"),
      jr = m((e) => Et(e, Dh), "normalizeInputTypes"),
      se = m((e) => (Array.isArray(e) ? e : e ? [e] : []), "normalizeArrays"),
      Sh = fe`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
    function Lr(e, t, r) {
      let n = t,
        o = typeof t == "function" ? t : null,
        { story: i } = n;
      i && (Q.debug("deprecated story", i), Ge(Sh));
      let a = Ri(e),
        l = (typeof n != "function" && n.name) || n.storyName || i?.name || a,
        u = [...se(n.decorators), ...se(i?.decorators)],
        c = { ...i?.parameters, ...n.parameters },
        d = { ...i?.args, ...n.args },
        p = { ...i?.argTypes, ...n.argTypes },
        h = [...se(n.loaders), ...se(i?.loaders)],
        y = [...se(n.beforeEach), ...se(i?.beforeEach)],
        E = [...se(n.experimental_afterEach), ...se(i?.experimental_afterEach)],
        { render: v, play: A, tags: D = [], globals: S = {} } = n,
        F = c.__id || ki(r.id, a);
      return {
        moduleExport: t,
        id: F,
        name: l,
        tags: D,
        decorators: u,
        parameters: c,
        args: d,
        argTypes: jr(p),
        loaders: h,
        beforeEach: y,
        experimental_afterEach: E,
        globals: S,
        ...(v && { render: v }),
        ...(o && { userStoryFn: o }),
        ...(A && { play: A }),
      };
    }
    m(Lr, "normalizeStory");
    function Mr(e, t = e.title, r) {
      let { id: n, argTypes: o } = e;
      return {
        id: Pn(n || t),
        ...e,
        title: t,
        ...(o && { argTypes: jr(o) }),
        parameters: { fileName: r, ...e.parameters },
      };
    }
    m(Mr, "normalizeComponentAnnotations");
    var wh = m((e) => {
        let { globals: t, globalTypes: r } = e;
        (t || r) &&
          Q.error(
            "Global args/argTypes can only be set globally",
            JSON.stringify({ globals: t, globalTypes: r }),
          );
      }, "checkGlobals"),
      Ch = m((e) => {
        let { options: t } = e;
        t?.storySort &&
          Q.error("The storySort option parameter can only be set globally");
      }, "checkStorySort"),
      _r = m((e) => {
        e && (wh(e), Ch(e));
      }, "checkDisallowedParameters");
    function gs(e, t, r) {
      let { default: n, __namedExportsOrder: o, ...i } = e,
        a = Object.values(i)[0];
      if (mt(a)) {
        let c = Mr(a.meta.input, r, t);
        _r(c.parameters);
        let d = { meta: c, stories: {}, moduleExports: e };
        return (
          Object.keys(i).forEach((p) => {
            if (kt(p, c)) {
              let h = Lr(p, i[p].input, c);
              _r(h.parameters), (d.stories[h.id] = h);
            }
          }),
          (d.projectAnnotations = a.meta.preview.composed),
          d
        );
      }
      let l = Mr(n, r, t);
      _r(l.parameters);
      let u = { meta: l, stories: {}, moduleExports: e };
      return (
        Object.keys(i).forEach((c) => {
          if (kt(c, l)) {
            let d = Lr(c, i[c], l);
            _r(d.parameters), (u.stories[d.id] = d);
          }
        }),
        u
      );
    }
    m(gs, "processCSFFile");
    function bs(e) {
      return e != null && Es(e).includes("mount");
    }
    m(bs, "mountDestructured");
    function Es(e) {
      let t = e.toString().match(/[^(]*\(([^)]*)/);
      if (!t) return [];
      let r = Gn(t[1]);
      if (!r.length) return [];
      let n = r[0];
      return n.startsWith("{") && n.endsWith("}")
        ? Gn(n.slice(1, -1).replace(/\s/g, "")).map((o) =>
            o.replace(/:.*|=.*/g, ""),
          )
        : [];
    }
    m(Es, "getUsedProps");
    function Gn(e) {
      let t = [],
        r = [],
        n = 0;
      for (let i = 0; i < e.length; i++)
        if (e[i] === "{" || e[i] === "[") r.push(e[i] === "{" ? "}" : "]");
        else if (e[i] === r[r.length - 1]) r.pop();
        else if (!r.length && e[i] === ",") {
          let a = e.substring(n, i).trim();
          a && t.push(a), (n = i + 1);
        }
      let o = e.substring(n).trim();
      return o && t.push(o), t;
    }
    m(Gn, "splitByComma");
    function vs(e, t, r) {
      let n = r(e);
      return (o) => t(n, o);
    }
    m(vs, "decorateStory");
    function As({
      componentId: e,
      title: t,
      kind: r,
      id: n,
      name: o,
      story: i,
      parameters: a,
      initialArgs: l,
      argTypes: u,
      ...c
    } = {}) {
      return c;
    }
    m(As, "sanitizeStoryContextUpdate");
    function Ds(e, t) {
      let r = {},
        n = m(
          (i) => (a) => {
            if (!r.value)
              throw new Error("Decorated function called without init");
            return (r.value = { ...r.value, ...As(a) }), i(r.value);
          },
          "bindWithContext",
        ),
        o = t.reduce((i, a) => vs(i, a, n), e);
      return (i) => ((r.value = i), o(i));
    }
    m(Ds, "defaultDecorateStory");
    var Ke = m((...e) => {
      let t = {},
        r = e.filter(Boolean),
        n = r.reduce(
          (o, i) => (
            Object.entries(i).forEach(([a, l]) => {
              let u = o[a];
              Array.isArray(l) || typeof u > "u"
                ? (o[a] = l)
                : Le(l) && Le(u)
                  ? (t[a] = !0)
                  : typeof l < "u" && (o[a] = l);
            }),
            o
          ),
          {},
        );
      return (
        Object.keys(t).forEach((o) => {
          let i = r
            .filter(Boolean)
            .map((a) => a[o])
            .filter((a) => typeof a < "u");
          i.every((a) => Le(a)) ? (n[o] = Ke(...i)) : (n[o] = i[i.length - 1]);
        }),
        n
      );
    }, "combineParameters");
    function po(e, t, r) {
      let { moduleExport: n, id: o, name: i } = e || {},
        a = ho(e, t, r),
        l = m(async (R) => {
          let N = {};
          for (let j of [
            ...("__STORYBOOK_TEST_LOADERS__" in Ee &&
            Array.isArray(Ee.__STORYBOOK_TEST_LOADERS__)
              ? [Ee.__STORYBOOK_TEST_LOADERS__]
              : []),
            se(r.loaders),
            se(t.loaders),
            se(e.loaders),
          ]) {
            if (R.abortSignal.aborted) return N;
            let U = await Promise.all(j.map((P) => P(R)));
            Object.assign(N, ...U);
          }
          return N;
        }, "applyLoaders"),
        u = m(async (R) => {
          let N = new Array();
          for (let j of [
            ...se(r.beforeEach),
            ...se(t.beforeEach),
            ...se(e.beforeEach),
          ]) {
            if (R.abortSignal.aborted) return N;
            let U = await j(R);
            U && N.push(U);
          }
          return N;
        }, "applyBeforeEach"),
        c = m(async (R) => {
          let N = [
            ...se(r.experimental_afterEach),
            ...se(t.experimental_afterEach),
            ...se(e.experimental_afterEach),
          ].reverse();
          for (let j of N) {
            if (R.abortSignal.aborted) return;
            await j(R);
          }
        }, "applyAfterEach"),
        d = m((R) => R.originalStoryFn(R.args, R), "undecoratedStoryFn"),
        { applyDecorators: p = Ds, runStep: h } = r,
        y = [...se(e?.decorators), ...se(t?.decorators), ...se(r?.decorators)],
        E = e?.userStoryFn || e?.render || t.render || r.render,
        v = Rp(p)(d, y),
        A = m((R) => v(R), "unboundStoryFn"),
        D = e?.play ?? t?.play,
        S = bs(D);
      if (!E && !S) throw new Za({ id: o });
      let F = m(
          (R) => async () => (await R.renderToCanvas(), R.canvas),
          "defaultMount",
        ),
        x = e.mount ?? t.mount ?? r.mount ?? F,
        O = r.testingLibraryRender;
      return {
        storyGlobals: {},
        ...a,
        moduleExport: n,
        id: o,
        name: i,
        story: i,
        originalStoryFn: E,
        undecoratedStoryFn: d,
        unboundStoryFn: A,
        applyLoaders: l,
        applyBeforeEach: u,
        applyAfterEach: c,
        playFunction: D,
        runStep: h,
        mount: x,
        testingLibraryRender: O,
        renderToCanvas: r.renderToCanvas,
        usesMount: S,
      };
    }
    m(po, "prepareStory");
    function Ss(e, t, r) {
      return { ...ho(void 0, e, t), moduleExport: r };
    }
    m(Ss, "prepareMeta");
    function ho(e, t, r) {
      let n = ["dev", "test"],
        o = Ee.DOCS_OPTIONS?.autodocs === !0 ? ["autodocs"] : [],
        i = Oi(
          ...n,
          ...o,
          ...(r.tags ?? []),
          ...(t.tags ?? []),
          ...(e?.tags ?? []),
        ),
        a = Ke(r.parameters, t.parameters, e?.parameters),
        { argTypesEnhancers: l = [], argsEnhancers: u = [] } = r,
        c = Ke(r.argTypes, t.argTypes, e?.argTypes);
      if (e) {
        let D = e?.userStoryFn || e?.render || t.render || r.render;
        a.__isArgsStory = D && D.length > 0;
      }
      let d = { ...r.args, ...t.args, ...e?.args },
        p = { ...t.globals, ...e?.globals },
        h = {
          componentId: t.id,
          title: t.title,
          kind: t.title,
          id: e?.id || t.id,
          name: e?.name || "__meta",
          story: e?.name || "__meta",
          component: t.component,
          subcomponents: t.subcomponents,
          tags: i,
          parameters: a,
          initialArgs: d,
          argTypes: c,
          storyGlobals: p,
        };
      h.argTypes = l.reduce((D, S) => S({ ...h, argTypes: D }), h.argTypes);
      let y = { ...d };
      h.initialArgs = u.reduce(
        (D, S) => ({ ...D, ...S({ ...h, initialArgs: D }) }),
        y,
      );
      let { name: E, story: v, ...A } = h;
      return A;
    }
    m(ho, "preparePartialAnnotations");
    function fo(e) {
      let { args: t } = e,
        r = { ...e, allArgs: void 0, argsByTarget: void 0 };
      if (Ee.FEATURES?.argTypeTargetsV7) {
        let i = ds(e);
        r = { ...e, allArgs: e.args, argsByTarget: i, args: i[cs] || {} };
      }
      let n = Object.entries(r.args).reduce((i, [a, l]) => {
          if (!r.argTypes[a]?.mapping) return (i[a] = l), i;
          let u = m((c) => {
            let d = r.argTypes[a].mapping;
            return d && c in d ? d[c] : c;
          }, "mappingFn");
          return (i[a] = Array.isArray(l) ? l.map(u) : u(l)), i;
        }, {}),
        o = Object.entries(n).reduce((i, [a, l]) => {
          let u = r.argTypes[a] || {};
          return _n(u, n, r.globals) && (i[a] = l), i;
        }, {});
      return { ...r, unmappedArgs: t, args: o };
    }
    m(fo, "prepareContext");
    var Wn = m((e, t, r) => {
        let n = typeof e;
        switch (n) {
          case "boolean":
          case "string":
          case "number":
          case "function":
          case "symbol":
            return { name: n };
          default:
            break;
        }
        return e
          ? r.has(e)
            ? (Q.warn(fe`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `),
              { name: "other", value: "cyclic object" })
            : (r.add(e),
              Array.isArray(e)
                ? {
                    name: "array",
                    value:
                      e.length > 0
                        ? Wn(e[0], t, new Set(r))
                        : { name: "other", value: "unknown" },
                  }
                : { name: "object", value: Et(e, (o) => Wn(o, t, new Set(r))) })
          : { name: "object", value: {} };
      }, "inferType"),
      ws = m((e) => {
        let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
          o = Et(n, (a, l) => ({
            name: l,
            type: Wn(a, `${t}.${l}`, new Set()),
          })),
          i = Et(r, (a, l) => ({ name: l }));
        return Ke(o, i, r);
      }, "inferArgTypes");
    ws.secondPass = !0;
    var ji = m(
        (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
        "matches",
      ),
      Cs = m(
        (e, t, r) =>
          !t && !r
            ? e
            : e &&
              ls(e, (n, o) => {
                let i = n.name || o.toString();
                return !!(!t || ji(i, t)) && (!r || !ji(i, r));
              }),
        "filterArgTypes",
      ),
      xh = m((e, t, r) => {
        let { type: n, options: o } = e;
        if (n) {
          if (r.color && r.color.test(t)) {
            let i = n.name;
            if (i === "string") return { control: { type: "color" } };
            i !== "enum" &&
              Q.warn(
                `Addon controls: Control of type color only supports string, received "${i}" instead`,
              );
          }
          if (r.date && r.date.test(t)) return { control: { type: "date" } };
          switch (n.name) {
            case "array":
              return { control: { type: "object" } };
            case "boolean":
              return { control: { type: "boolean" } };
            case "string":
              return { control: { type: "text" } };
            case "number":
              return { control: { type: "number" } };
            case "enum": {
              let { value: i } = n;
              return {
                control: { type: i?.length <= 5 ? "radio" : "select" },
                options: i,
              };
            }
            case "function":
            case "symbol":
              return null;
            default:
              return { control: { type: o ? "select" : "object" } };
          }
        }
      }, "inferControl"),
      xs = m((e) => {
        let {
          argTypes: t,
          parameters: {
            __isArgsStory: r,
            controls: {
              include: n = null,
              exclude: o = null,
              matchers: i = {},
            } = {},
          },
        } = e;
        if (!r) return t;
        let a = Cs(t, n, o),
          l = Et(a, (u, c) => u?.type && xh(u, c.toString(), i));
        return Ke(l, a);
      }, "inferControls");
    xs.secondPass = !0;
    function Rt({
      argTypes: e,
      globalTypes: t,
      argTypesEnhancers: r,
      decorators: n,
      loaders: o,
      beforeEach: i,
      experimental_afterEach: a,
      globals: l,
      initialGlobals: u,
      ...c
    }) {
      return (
        l &&
          Object.keys(l).length > 0 &&
          Ge(fe`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `),
        {
          ...(e && { argTypes: jr(e) }),
          ...(t && { globalTypes: jr(t) }),
          decorators: se(n),
          loaders: se(o),
          beforeEach: se(i),
          experimental_afterEach: se(a),
          argTypesEnhancers: [...(r || []), ws, xs],
          initialGlobals: Ke(u, l),
          ...c,
        }
      );
    }
    m(Rt, "normalizeProjectAnnotations");
    var Th = m(
      (e) => async () => {
        let t = [];
        for (let r of e) {
          let n = await r();
          n && t.unshift(n);
        }
        return async () => {
          for (let r of t) await r();
        };
      },
      "composeBeforeAllHooks",
    );
    function Ts(e) {
      return async (t, r, n) => {
        await e.reduceRight(
          (o, i) => async () => i(t, o, n),
          async () => r(n),
        )();
      };
    }
    m(Ts, "composeStepRunners");
    function Pt(e, t) {
      return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
    }
    m(Pt, "getField");
    function We(e, t, r = {}) {
      return Pt(e, t).reduce((n, o) => {
        let i = se(o);
        return r.reverseFileOrder ? [...i, ...n] : [...n, ...i];
      }, []);
    }
    m(We, "getArrayField");
    function _t(e, t) {
      return Object.assign({}, ...Pt(e, t));
    }
    m(_t, "getObjectField");
    function yt(e, t) {
      return Pt(e, t).pop();
    }
    m(yt, "getSingletonField");
    function at(e) {
      let t = We(e, "argTypesEnhancers"),
        r = Pt(e, "runStep"),
        n = We(e, "beforeAll");
      return {
        parameters: Ke(...Pt(e, "parameters")),
        decorators: We(e, "decorators", {
          reverseFileOrder: !(Ee.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: _t(e, "args"),
        argsEnhancers: We(e, "argsEnhancers"),
        argTypes: _t(e, "argTypes"),
        argTypesEnhancers: [
          ...t.filter((o) => !o.secondPass),
          ...t.filter((o) => o.secondPass),
        ],
        globals: _t(e, "globals"),
        initialGlobals: _t(e, "initialGlobals"),
        globalTypes: _t(e, "globalTypes"),
        loaders: We(e, "loaders"),
        beforeAll: Th(n),
        beforeEach: We(e, "beforeEach"),
        experimental_afterEach: We(e, "experimental_afterEach"),
        render: yt(e, "render"),
        renderToCanvas: yt(e, "renderToCanvas"),
        renderToDOM: yt(e, "renderToDOM"),
        applyDecorators: yt(e, "applyDecorators"),
        runStep: Ts(r),
        tags: We(e, "tags"),
        mount: yt(e, "mount"),
        testingLibraryRender: yt(e, "testingLibraryRender"),
      };
    }
    m(at, "composeConfigs");
    var Fs = class {
      constructor() {
        this.reports = [];
      }
      async addReport(t) {
        this.reports.push(t);
      }
    };
    m(Fs, "ReporterAPI");
    var Is = Fs;
    function ks(e, t, r) {
      return mt(e)
        ? {
            story: e.input,
            meta: e.meta.input,
            preview: e.meta.preview.composed,
          }
        : { story: e, meta: t, preview: r };
    }
    m(ks, "getCsfFactoryAnnotations");
    function Fh(e) {
      globalThis.defaultProjectAnnotations = e;
    }
    m(Fh, "setDefaultProjectAnnotations");
    var Ih = "ComposedStory",
      kh = "Unnamed Story";
    function Rs(e) {
      return e ? at([e]) : {};
    }
    m(Rs, "extractAnnotation");
    function Rh(e) {
      let t = Array.isArray(e) ? e : [e];
      return (
        (globalThis.globalProjectAnnotations = at([
          globalThis.defaultProjectAnnotations ?? {},
          at(t.map(Rs)),
        ])),
        globalThis.globalProjectAnnotations ?? {}
      );
    }
    m(Rh, "setProjectAnnotations");
    var st = [];
    function Os(e, t, r, n, o) {
      if (e === void 0)
        throw new Error("Expected a story but received undefined.");
      t.title = t.title ?? Ih;
      let i = Mr(t),
        a = o || e.storyName || e.story?.name || e.name || kh,
        l = Lr(a, e, i),
        u = Rt(at([n ?? globalThis.globalProjectAnnotations ?? {}, r ?? {}])),
        c = po(l, i, u),
        d = { ...fs(u.globalTypes), ...u.initialGlobals, ...c.storyGlobals },
        p = new Is(),
        h = m(() => {
          let D = fo({
            hooks: new ns(),
            globals: d,
            args: { ...c.initialArgs },
            viewMode: "story",
            reporting: p,
            loaded: {},
            abortSignal: new AbortController().signal,
            step: m((S, F) => c.runStep(S, F, D), "step"),
            canvasElement: null,
            canvas: {},
            globalTypes: u.globalTypes,
            ...c,
            context: null,
            mount: null,
          });
          return (
            (D.parameters.__isPortableStory = !0),
            (D.context = D),
            c.renderToCanvas &&
              (D.renderToCanvas = async () => {
                let S = await c.renderToCanvas?.(
                  {
                    componentId: c.componentId,
                    title: c.title,
                    id: c.id,
                    name: c.name,
                    tags: c.tags,
                    showMain: m(() => {}, "showMain"),
                    showError: m((F) => {
                      throw new Error(`${F.title}
${F.description}`);
                    }, "showError"),
                    showException: m((F) => {
                      throw F;
                    }, "showException"),
                    forceRemount: !0,
                    storyContext: D,
                    storyFn: m(() => c.unboundStoryFn(D), "storyFn"),
                    unboundStoryFn: c.unboundStoryFn,
                  },
                  D.canvasElement,
                );
                S && st.push(S);
              }),
            (D.mount = c.mount(D)),
            D
          );
        }, "initializeContext"),
        y,
        E = m(async (D) => {
          let S = h();
          return (
            (S.canvasElement ??= globalThis?.document?.body),
            y && (S.loaded = y.loaded),
            Object.assign(S, D),
            c.playFunction(S)
          );
        }, "play"),
        v = m((D) => {
          let S = h();
          return Object.assign(S, D), _s(c, S);
        }, "run"),
        A = c.playFunction ? E : void 0;
      return Object.assign(
        m(function (D) {
          let S = h();
          return (
            y && (S.loaded = y.loaded),
            (S.args = { ...S.initialArgs, ...D }),
            c.unboundStoryFn(S)
          );
        }, "storyFn"),
        {
          id: c.id,
          storyName: a,
          load: m(async () => {
            for (let S of [...st].reverse()) await S();
            st.length = 0;
            let D = h();
            (D.loaded = await c.applyLoaders(D)),
              st.push(...(await c.applyBeforeEach(D)).filter(Boolean)),
              (y = D);
          }, "load"),
          globals: d,
          args: c.initialArgs,
          parameters: c.parameters,
          argTypes: c.argTypes,
          play: A,
          run: v,
          reporting: p,
          tags: c.tags,
        },
      );
    }
    m(Os, "composeStory");
    var Oh = m((e, t, r, n) => Os(e, t, r, {}, n), "defaultComposeStory");
    function _h(e, t, r = Oh) {
      let { default: n, __esModule: o, __namedExportsOrder: i, ...a } = e,
        l = n;
      return Object.entries(a).reduce((u, [c, d]) => {
        let { story: p, meta: h } = ks(d);
        return (
          !l && h && (l = h),
          kt(c, l) ? Object.assign(u, { [c]: r(p, l, t, c) }) : u
        );
      }, {});
    }
    m(_h, "composeStories");
    function Ph(e) {
      return e.extend({
        mount: m(async ({ mount: t, page: r }, n) => {
          await n(async (o, ...i) => {
            if (
              !("__pw_type" in o) ||
              ("__pw_type" in o && o.__pw_type !== "jsx")
            )
              throw new Error(fe`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
            await r.evaluate(async (l) => {
              let u = await globalThis.__pwUnwrapObject?.(l);
              return ("__pw_type" in u ? u.type : u)?.load?.();
            }, o);
            let a = await t(o, ...i);
            return (
              await r.evaluate(async (l) => {
                let u = await globalThis.__pwUnwrapObject?.(l),
                  c = "__pw_type" in u ? u.type : u,
                  d = document.querySelector("#root");
                return c?.play?.({ canvasElement: d });
              }, o),
              a
            );
          });
        }, "mount"),
      });
    }
    m(Ph, "createPlaywrightTest");
    async function _s(e, t) {
      for (let o of [...st].reverse()) await o();
      if (((st.length = 0), !t.canvasElement)) {
        let o = document.createElement("div");
        globalThis?.document?.body?.appendChild(o),
          (t.canvasElement = o),
          st.push(() => {
            globalThis?.document?.body?.contains(o) &&
              globalThis?.document?.body?.removeChild(o);
          });
      }
      if (((t.loaded = await e.applyLoaders(t)), t.abortSignal.aborted)) return;
      st.push(...(await e.applyBeforeEach(t)).filter(Boolean));
      let r = e.playFunction,
        n = e.usesMount;
      n || (await t.mount()),
        !t.abortSignal.aborted &&
          (r &&
            (n ||
              (t.mount = async () => {
                throw new wr({ playFunction: r.toString() });
              }),
            await r(t)),
          await e.applyAfterEach(t));
    }
    m(_s, "runStory");
    function Kn(e, t) {
      return is(ss(e, t), (r) => r === void 0);
    }
    m(Kn, "picky");
    var Li = 1e3,
      Bh = 1e4,
      Ps = class {
        constructor(t, r, n) {
          (this.importFn = r),
            (this.getStoriesJsonData = m(() => {
              let a = this.getSetStoriesPayload(),
                l = [
                  "fileName",
                  "docsOnly",
                  "framework",
                  "__id",
                  "__isArgsStory",
                ];
              return {
                v: 3,
                stories: Et(a.stories, (u) => {
                  let { importPath: c } = this.storyIndex.entries[u.id];
                  return {
                    ...Kn(u, ["id", "name", "title"]),
                    importPath: c,
                    kind: u.title,
                    story: u.name,
                    parameters: { ...Kn(u.parameters, l), fileName: c },
                  };
                }),
              };
            }, "getStoriesJsonData")),
            (this.storyIndex = new Eh(t)),
            (this.projectAnnotations = Rt(n));
          let { initialGlobals: o, globalTypes: i } = this.projectAnnotations;
          (this.args = new mh()),
            (this.userGlobals = new yh({ globals: o, globalTypes: i })),
            (this.hooks = {}),
            (this.cleanupCallbacks = {}),
            (this.processCSFFileWithCache = (0, Ln.default)(Li)(gs)),
            (this.prepareMetaWithCache = (0, Ln.default)(Li)(Ss)),
            (this.prepareStoryWithCache = (0, Ln.default)(Bh)(po));
        }
        setProjectAnnotations(t) {
          this.projectAnnotations = Rt(t);
          let { initialGlobals: r, globalTypes: n } = t;
          this.userGlobals.set({ globals: r, globalTypes: n });
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          t && (this.importFn = t),
            r && (this.storyIndex.entries = r.entries),
            this.cachedCSFFiles && (await this.cacheAllCSFFiles());
        }
        async storyIdToEntry(t) {
          return this.storyIndex.storyIdToEntry(t);
        }
        async loadCSFFileByStoryId(t) {
          let { importPath: r, title: n } = this.storyIndex.storyIdToEntry(t),
            o = await this.importFn(r);
          return this.processCSFFileWithCache(o, r, n);
        }
        async loadAllCSFFiles() {
          let t = {};
          return (
            Object.entries(this.storyIndex.entries).forEach(
              ([r, { importPath: n }]) => {
                t[n] = r;
              },
            ),
            (
              await Promise.all(
                Object.entries(t).map(async ([r, n]) => ({
                  importPath: r,
                  csfFile: await this.loadCSFFileByStoryId(n),
                })),
              )
            ).reduce((r, { importPath: n, csfFile: o }) => ((r[n] = o), r), {})
          );
        }
        async cacheAllCSFFiles() {
          this.cachedCSFFiles = await this.loadAllCSFFiles();
        }
        preparedMetaFromCSFFile({ csfFile: t }) {
          let r = t.meta;
          return this.prepareMetaWithCache(
            r,
            this.projectAnnotations,
            t.moduleExports.default,
          );
        }
        async loadStory({ storyId: t }) {
          let r = await this.loadCSFFileByStoryId(t);
          return this.storyFromCSFFile({ storyId: t, csfFile: r });
        }
        storyFromCSFFile({ storyId: t, csfFile: r }) {
          let n = r.stories[t];
          if (!n) throw new Wa({ storyId: t });
          let o = r.meta,
            i = this.prepareStoryWithCache(
              n,
              o,
              r.projectAnnotations ?? this.projectAnnotations,
            );
          return (
            this.args.setInitial(i),
            (this.hooks[i.id] = this.hooks[i.id] || new ns()),
            i
          );
        }
        componentStoriesFromCSFFile({ csfFile: t }) {
          return Object.keys(this.storyIndex.entries)
            .filter((r) => !!t.stories[r])
            .map((r) => this.storyFromCSFFile({ storyId: r, csfFile: t }));
        }
        async loadEntry(t) {
          let r = await this.storyIdToEntry(t),
            n = r.type === "docs" ? r.storiesImports : [],
            [o, ...i] = await Promise.all([
              this.importFn(r.importPath),
              ...n.map((a) => {
                let l = this.storyIndex.importPathToEntry(a);
                return this.loadCSFFileByStoryId(l.id);
              }),
            ]);
          return { entryExports: o, csfFiles: i };
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          let n = this.userGlobals.get(),
            { initialGlobals: o } = this.userGlobals,
            i = new Is();
          return fo({
            ...t,
            args: r ? t.initialArgs : this.args.get(t.id),
            initialGlobals: o,
            globalTypes: this.projectAnnotations.globalTypes,
            userGlobals: n,
            reporting: i,
            globals: { ...n, ...t.storyGlobals },
            hooks: this.hooks[t.id],
          });
        }
        addCleanupCallbacks(t, r) {
          this.cleanupCallbacks[t.id] = r;
        }
        async cleanupStory(t) {
          this.hooks[t.id].clean();
          let r = this.cleanupCallbacks[t.id];
          if (r) for (let n of [...r].reverse()) await n();
          delete this.cleanupCallbacks[t.id];
        }
        extract(t = { includeDocsOnly: !1 }) {
          let { cachedCSFFiles: r } = this;
          if (!r) throw new Ba();
          return Object.entries(this.storyIndex.entries).reduce(
            (n, [o, { type: i, importPath: a }]) => {
              if (i === "docs") return n;
              let l = r[a],
                u = this.storyFromCSFFile({ storyId: o, csfFile: l });
              return (
                (!t.includeDocsOnly && u.parameters.docsOnly) ||
                  (n[o] = Object.entries(u).reduce(
                    (c, [d, p]) =>
                      d === "moduleExport" || typeof p == "function"
                        ? c
                        : Array.isArray(p)
                          ? Object.assign(c, { [d]: p.slice().sort() })
                          : Object.assign(c, { [d]: p }),
                    {
                      args: u.initialArgs,
                      globals: {
                        ...this.userGlobals.initialGlobals,
                        ...this.userGlobals.globals,
                        ...u.storyGlobals,
                      },
                    },
                  )),
                n
              );
            },
            {},
          );
        }
        getSetStoriesPayload() {
          let t = this.extract({ includeDocsOnly: !0 }),
            r = Object.values(t).reduce(
              (n, { title: o }) => ((n[o] = {}), n),
              {},
            );
          return {
            v: 2,
            globals: this.userGlobals.get(),
            globalParameters: {},
            kindParameters: r,
            stories: t,
          };
        }
        raw() {
          return (
            Ge(
              "StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead",
            ),
            Object.values(this.extract())
              .map(({ id: t }) => this.fromId(t))
              .filter(Boolean)
          );
        }
        fromId(t) {
          if (
            (Ge(
              "StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead",
            ),
            !this.cachedCSFFiles)
          )
            throw new Error(
              "Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.",
            );
          let r;
          try {
            ({ importPath: r } = this.storyIndex.storyIdToEntry(t));
          } catch {
            return null;
          }
          let n = this.cachedCSFFiles[r],
            o = this.storyFromCSFFile({ storyId: t, csfFile: n });
          return {
            ...o,
            storyFn: m((i) => {
              let a = {
                ...this.getStoryContext(o),
                abortSignal: new AbortController().signal,
                canvasElement: null,
                loaded: {},
                step: m((l, u) => o.runStep(l, u, a), "step"),
                context: null,
                mount: null,
                canvas: {},
                viewMode: "story",
              };
              return o.unboundStoryFn({ ...a, ...i });
            }, "storyFn"),
          };
        }
      };
    m(Ps, "StoryStore");
    var Nh = Ps;
    function Bs(e) {
      return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
    }
    m(Bs, "slash");
    var jh = m((e) => {
      if (e.length === 0) return e;
      let t = e[e.length - 1],
        r = t?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, "");
      if (e.length === 1) return [r];
      let n = e[e.length - 2];
      return r && n && r.toLowerCase() === n.toLowerCase()
        ? [...e.slice(0, -2), r]
        : r && (/^(story|stories)([.][^.]+)$/i.test(t) || /^index$/i.test(r))
          ? e.slice(0, -1)
          : [...e.slice(0, -1), r];
    }, "sanitize");
    function Yn(e) {
      return e
        .flatMap((t) => t.split("/"))
        .filter(Boolean)
        .join("/");
    }
    m(Yn, "pathJoin");
    var Lh = m((e, t, r) => {
        let {
          directory: n,
          importPathMatcher: o,
          titlePrefix: i = "",
        } = t || {};
        typeof e == "number" &&
          ot.warn(fe`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
        let a = Bs(String(e));
        if (o.exec(a)) {
          if (!r) {
            let l = a.replace(n, ""),
              u = Yn([i, l]).split("/");
            return (u = jh(u)), u.join("/");
          }
          return i ? Yn([i, r]) : r;
        }
      }, "userOrAutoTitleFromSpecifier"),
      HE = m((e, t, r) => {
        for (let n = 0; n < t.length; n += 1) {
          let o = Lh(e, t[n], r);
          if (o) return o;
        }
        return r || void 0;
      }, "userOrAutoTitle"),
      Mi = /\s*\/\s*/,
      Mh = m(
        (e = {}) =>
          (t, r) => {
            if (t.title === r.title && !e.includeNames) return 0;
            let n = e.method || "configure",
              o = e.order || [],
              i = t.title.trim().split(Mi),
              a = r.title.trim().split(Mi);
            e.includeNames && (i.push(t.name), a.push(r.name));
            let l = 0;
            for (; i[l] || a[l]; ) {
              if (!i[l]) return -1;
              if (!a[l]) return 1;
              let u = i[l],
                c = a[l];
              if (u !== c) {
                let p = o.indexOf(u),
                  h = o.indexOf(c),
                  y = o.indexOf("*");
                return p !== -1 || h !== -1
                  ? (p === -1 && (y !== -1 ? (p = y) : (p = o.length)),
                    h === -1 && (y !== -1 ? (h = y) : (h = o.length)),
                    p - h)
                  : n === "configure"
                    ? 0
                    : u.localeCompare(c, e.locales ? e.locales : void 0, {
                        numeric: !0,
                        sensitivity: "accent",
                      });
              }
              let d = o.indexOf(u);
              d === -1 && (d = o.indexOf("*")),
                (o = d !== -1 && Array.isArray(o[d + 1]) ? o[d + 1] : []),
                (l += 1);
            }
            return 0;
          },
        "storySort",
      ),
      Uh = m((e, t, r) => {
        if (t) {
          let n;
          typeof t == "function" ? (n = t) : (n = Mh(t)), e.sort(n);
        } else
          e.sort((n, o) => r.indexOf(n.importPath) - r.indexOf(o.importPath));
        return e;
      }, "sortStoriesCommon"),
      zE = m((e, t, r) => {
        try {
          return Uh(e, t, r);
        } catch (n) {
          throw new Error(fe`
    Error sorting stories with sort parameter ${t}:

    > ${n.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
        }
      }, "sortStoriesV7"),
      Vr = new Error("prepareAborted"),
      { AbortController: Ui } = globalThis;
    function Xn(e) {
      try {
        let { name: t = "Error", message: r = String(e), stack: n } = e;
        return { name: t, message: r, stack: n };
      } catch {
        return { name: "Error", message: String(e) };
      }
    }
    m(Xn, "serializeError");
    var Ns = class {
      constructor(
        t,
        r,
        n,
        o,
        i,
        a,
        l = { autoplay: !0, forceInitialArgs: !1 },
        u,
      ) {
        (this.channel = t),
          (this.store = r),
          (this.renderToScreen = n),
          (this.callbacks = o),
          (this.id = i),
          (this.viewMode = a),
          (this.renderOptions = l),
          (this.type = "story"),
          (this.notYetRendered = !0),
          (this.rerenderEnqueued = !1),
          (this.disableKeyListeners = !1),
          (this.teardownRender = m(() => {}, "teardownRender")),
          (this.torndown = !1),
          (this.abortController = new Ui()),
          u && ((this.story = u), (this.phase = "preparing"));
      }
      async runPhase(t, r, n) {
        (this.phase = r),
          this.channel.emit(It, { newPhase: this.phase, storyId: this.id }),
          n && (await n(), this.checkIfAborted(t));
      }
      checkIfAborted(t) {
        return t.aborted
          ? ((this.phase = "aborted"),
            this.channel.emit(It, { newPhase: this.phase, storyId: this.id }),
            !0)
          : !1;
      }
      async prepare() {
        if (
          (await this.runPhase(
            this.abortController.signal,
            "preparing",
            async () => {
              this.story = await this.store.loadStory({ storyId: this.id });
            },
          ),
          this.abortController.signal.aborted)
        )
          throw (await this.store.cleanupStory(this.story), Vr);
      }
      isEqual(t) {
        return !!(this.id === t.id && this.story && this.story === t.story);
      }
      isPreparing() {
        return ["preparing"].includes(this.phase);
      }
      isPending() {
        return [
          "loading",
          "beforeEach",
          "rendering",
          "playing",
          "afterEach",
        ].includes(this.phase);
      }
      async renderToElement(t) {
        return (
          (this.canvasElement = t),
          this.render({ initial: !0, forceRemount: !0 })
        );
      }
      storyContext() {
        if (!this.story)
          throw new Error("Cannot call storyContext before preparing");
        let { forceInitialArgs: t } = this.renderOptions;
        return this.store.getStoryContext(this.story, { forceInitialArgs: t });
      }
      async render({ initial: t = !1, forceRemount: r = !1 } = {}) {
        let { canvasElement: n } = this;
        if (!this.story) throw new Error("cannot render when not prepared");
        let o = this.story;
        if (!n) throw new Error("cannot render when canvasElement is unset");
        let {
          id: i,
          componentId: a,
          title: l,
          name: u,
          tags: c,
          applyLoaders: d,
          applyBeforeEach: p,
          applyAfterEach: h,
          unboundStoryFn: y,
          playFunction: E,
          runStep: v,
        } = o;
        r && !t && (this.cancelRender(), (this.abortController = new Ui()));
        let A = this.abortController.signal,
          D = !1,
          S = o.usesMount;
        try {
          let F = {
            ...this.storyContext(),
            viewMode: this.viewMode,
            abortSignal: A,
            canvasElement: n,
            loaded: {},
            step: m((L, z) => v(L, z, F), "step"),
            context: null,
            canvas: {},
            renderToCanvas: m(async () => {
              let L = await this.renderToScreen(x, n);
              (this.teardownRender = L || (() => {})), (D = !0);
            }, "renderToCanvas"),
            mount: m(async (...L) => {
              this.callbacks.showStoryDuringRender?.();
              let z = null;
              return (
                await this.runPhase(A, "rendering", async () => {
                  z = await o.mount(F)(...L);
                }),
                S && (await this.runPhase(A, "playing")),
                z
              );
            }, "mount"),
          };
          F.context = F;
          let x = {
            componentId: a,
            title: l,
            kind: l,
            id: i,
            name: u,
            story: u,
            tags: c,
            ...this.callbacks,
            showError: m(
              (L) => ((this.phase = "errored"), this.callbacks.showError(L)),
              "showError",
            ),
            showException: m(
              (L) => (
                (this.phase = "errored"), this.callbacks.showException(L)
              ),
              "showException",
            ),
            forceRemount: r || this.notYetRendered,
            storyContext: F,
            storyFn: m(() => y(F), "storyFn"),
            unboundStoryFn: y,
          };
          if (
            (await this.runPhase(A, "loading", async () => {
              F.loaded = await d(F);
            }),
            A.aborted)
          )
            return;
          let O = await p(F);
          if (
            (this.store.addCleanupCallbacks(o, O),
            this.checkIfAborted(A) ||
              (!D && !S && (await F.mount()),
              (this.notYetRendered = !1),
              A.aborted))
          )
            return;
          let R =
              this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors ===
              !0,
            N = new Set(),
            j = m((L) => N.add("error" in L ? L.error : L.reason), "onError");
          if (
            this.renderOptions.autoplay &&
            r &&
            E &&
            this.phase !== "errored"
          ) {
            window.addEventListener("error", j),
              window.addEventListener("unhandledrejection", j),
              (this.disableKeyListeners = !0);
            try {
              if (
                (S
                  ? await E(F)
                  : ((F.mount = async () => {
                      throw new wr({ playFunction: E.toString() });
                    }),
                    await this.runPhase(A, "playing", async () => E(F))),
                !D)
              )
                throw new ti();
              this.checkIfAborted(A),
                !R && N.size > 0
                  ? await this.runPhase(A, "errored")
                  : await this.runPhase(A, "played");
            } catch (L) {
              if (
                (this.callbacks.showStoryDuringRender?.(),
                await this.runPhase(A, "errored", async () => {
                  this.channel.emit(ci, Xn(L));
                }),
                this.story.parameters.throwPlayFunctionExceptions !== !1)
              )
                throw L;
              console.error(L);
            }
            if (
              (!R && N.size > 0 && this.channel.emit(Di, Array.from(N).map(Xn)),
              (this.disableKeyListeners = !1),
              window.removeEventListener("unhandledrejection", j),
              window.removeEventListener("error", j),
              A.aborted)
            )
              return;
          }
          await this.runPhase(A, "completed", async () =>
            this.channel.emit(er, i),
          ),
            this.phase !== "errored" &&
              (await this.runPhase(A, "afterEach", async () => {
                await h(F);
              }));
          let U = !R && N.size > 0,
            P = F.reporting.reports.some((L) => L.status === "failed"),
            K = U || P;
          await this.runPhase(A, "finished", async () =>
            this.channel.emit(In, {
              storyId: i,
              status: K ? "error" : "success",
              reporters: F.reporting.reports,
            }),
          );
        } catch (F) {
          (this.phase = "errored"),
            this.callbacks.showException(F),
            await this.runPhase(A, "finished", async () =>
              this.channel.emit(In, {
                storyId: i,
                status: "error",
                reporters: [],
              }),
            );
        }
        this.rerenderEnqueued && ((this.rerenderEnqueued = !1), this.render());
      }
      async rerender() {
        if (this.isPending() && this.phase !== "playing")
          this.rerenderEnqueued = !0;
        else return this.render();
      }
      async remount() {
        return await this.teardown(), this.render({ forceRemount: !0 });
      }
      cancelRender() {
        this.abortController?.abort();
      }
      async teardown() {
        (this.torndown = !0),
          this.cancelRender(),
          this.story && (await this.store.cleanupStory(this.story));
        for (let t = 0; t < 3; t += 1) {
          if (!this.isPending()) {
            await this.teardownRender();
            return;
          }
          await new Promise((r) => setTimeout(r, 0));
        }
        window.location.reload(), await new Promise(() => {});
      }
    };
    m(Ns, "StoryRender");
    var Qn = Ns,
      { fetch: $h } = Ee,
      qh = "./index.json",
      js = class {
        constructor(t, r, n = bt.getChannel(), o = !0) {
          (this.importFn = t),
            (this.getProjectAnnotations = r),
            (this.channel = n),
            (this.storyRenders = []),
            (this.storeInitializationPromise = new Promise((i, a) => {
              (this.resolveStoreInitializationPromise = i),
                (this.rejectStoreInitializationPromise = a);
            })),
            o && this.initialize();
        }
        get storyStore() {
          return new Proxy(
            {},
            {
              get: m((t, r) => {
                if (this.storyStoreValue)
                  return (
                    Ge(
                      "Accessing the Story Store is deprecated and will be removed in 9.0",
                    ),
                    this.storyStoreValue[r]
                  );
                throw new Ya();
              }, "get"),
            },
          );
        }
        async initialize() {
          this.setupListeners();
          try {
            let t = await this.getProjectAnnotationsOrRenderError();
            await this.runBeforeAllHook(t),
              await this.initializeWithProjectAnnotations(t);
          } catch (t) {
            this.rejectStoreInitializationPromise(t);
          }
        }
        ready() {
          return this.storeInitializationPromise;
        }
        setupListeners() {
          this.channel.on(gi, this.onStoryIndexChanged.bind(this)),
            this.channel.on(kr, this.onUpdateGlobals.bind(this)),
            this.channel.on(tr, this.onUpdateArgs.bind(this)),
            this.channel.on(ai, this.onRequestArgTypesInfo.bind(this)),
            this.channel.on(Zt, this.onResetArgs.bind(this)),
            this.channel.on(Ir, this.onForceReRender.bind(this)),
            this.channel.on(li, this.onForceRemount.bind(this));
        }
        async getProjectAnnotationsOrRenderError() {
          try {
            let t = await this.getProjectAnnotations();
            if (
              ((this.renderToCanvas = t.renderToCanvas), !this.renderToCanvas)
            )
              throw new ja();
            return t;
          } catch (t) {
            throw (
              (this.renderPreviewEntryError("Error reading preview.js:", t), t)
            );
          }
        }
        async initializeWithProjectAnnotations(t) {
          this.projectAnnotationsBeforeInitialization = t;
          try {
            let r = await this.getStoryIndexFromServer();
            return this.initializeWithStoryIndex(r);
          } catch (r) {
            throw (
              (this.renderPreviewEntryError("Error loading story index:", r), r)
            );
          }
        }
        async runBeforeAllHook(t) {
          try {
            await this.beforeAllCleanup?.(),
              (this.beforeAllCleanup = await t.beforeAll?.());
          } catch (r) {
            throw (
              (this.renderPreviewEntryError("Error in beforeAll hook:", r), r)
            );
          }
        }
        async getStoryIndexFromServer() {
          let t = await $h(qh);
          if (t.status === 200) return t.json();
          throw new Ua({ text: await t.text() });
        }
        initializeWithStoryIndex(t) {
          if (!this.projectAnnotationsBeforeInitialization)
            throw new Error(
              "Cannot call initializeWithStoryIndex until project annotations resolve",
            );
          (this.storyStoreValue = new Nh(
            t,
            this.importFn,
            this.projectAnnotationsBeforeInitialization,
          )),
            delete this.projectAnnotationsBeforeInitialization,
            this.setInitialGlobals(),
            this.resolveStoreInitializationPromise();
        }
        async setInitialGlobals() {
          this.emitGlobals();
        }
        emitGlobals() {
          if (!this.storyStoreValue)
            throw new ke({ methodName: "emitGlobals" });
          let t = {
            globals: this.storyStoreValue.userGlobals.get() || {},
            globalTypes:
              this.storyStoreValue.projectAnnotations.globalTypes || {},
          };
          this.channel.emit(fi, t);
        }
        async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
          delete this.previewEntryError, (this.getProjectAnnotations = t);
          let r = await this.getProjectAnnotationsOrRenderError();
          if ((await this.runBeforeAllHook(r), !this.storyStoreValue)) {
            await this.initializeWithProjectAnnotations(r);
            return;
          }
          this.storyStoreValue.setProjectAnnotations(r), this.emitGlobals();
        }
        async onStoryIndexChanged() {
          if (
            (delete this.previewEntryError,
            !(
              !this.storyStoreValue &&
              !this.projectAnnotationsBeforeInitialization
            ))
          )
            try {
              let t = await this.getStoryIndexFromServer();
              if (this.projectAnnotationsBeforeInitialization) {
                this.initializeWithStoryIndex(t);
                return;
              }
              await this.onStoriesChanged({ storyIndex: t });
            } catch (t) {
              throw (
                (this.renderPreviewEntryError("Error loading story index:", t),
                t)
              );
            }
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          if (!this.storyStoreValue)
            throw new ke({ methodName: "onStoriesChanged" });
          await this.storyStoreValue.onStoriesChanged({
            importFn: t,
            storyIndex: r,
          });
        }
        async onUpdateGlobals({ globals: t, currentStory: r }) {
          if (
            (this.storyStoreValue || (await this.storeInitializationPromise),
            !this.storyStoreValue)
          )
            throw new ke({ methodName: "onUpdateGlobals" });
          if ((this.storyStoreValue.userGlobals.update(t), r)) {
            let {
              initialGlobals: n,
              storyGlobals: o,
              userGlobals: i,
              globals: a,
            } = this.storyStoreValue.getStoryContext(r);
            this.channel.emit(ft, {
              initialGlobals: n,
              userGlobals: i,
              storyGlobals: o,
              globals: a,
            });
          } else {
            let { initialGlobals: n, globals: o } =
              this.storyStoreValue.userGlobals;
            this.channel.emit(ft, {
              initialGlobals: n,
              userGlobals: o,
              storyGlobals: {},
              globals: o,
            });
          }
          await Promise.all(this.storyRenders.map((n) => n.rerender()));
        }
        async onUpdateArgs({ storyId: t, updatedArgs: r }) {
          if (!this.storyStoreValue)
            throw new ke({ methodName: "onUpdateArgs" });
          this.storyStoreValue.args.update(t, r),
            await Promise.all(
              this.storyRenders
                .filter((n) => n.id === t && !n.renderOptions.forceInitialArgs)
                .map((n) =>
                  n.story && n.story.usesMount ? n.remount() : n.rerender(),
                ),
            ),
            this.channel.emit(Fn, {
              storyId: t,
              args: this.storyStoreValue.args.get(t),
            });
        }
        async onRequestArgTypesInfo({ id: t, payload: r }) {
          try {
            await this.storeInitializationPromise;
            let n = await this.storyStoreValue?.loadStory(r);
            this.channel.emit(xn, {
              id: t,
              success: !0,
              payload: { argTypes: n?.argTypes || {} },
              error: null,
            });
          } catch (n) {
            this.channel.emit(xn, { id: t, success: !1, error: n?.message });
          }
        }
        async onResetArgs({ storyId: t, argNames: r }) {
          if (!this.storyStoreValue)
            throw new ke({ methodName: "onResetArgs" });
          let n =
              this.storyRenders.find((i) => i.id === t)?.story ||
              (await this.storyStoreValue.loadStory({ storyId: t })),
            o = (
              r || [
                ...new Set([
                  ...Object.keys(n.initialArgs),
                  ...Object.keys(this.storyStoreValue.args.get(t)),
                ]),
              ]
            ).reduce((i, a) => ((i[a] = n.initialArgs[a]), i), {});
          await this.onUpdateArgs({ storyId: t, updatedArgs: o });
        }
        async onForceReRender() {
          await Promise.all(this.storyRenders.map((t) => t.rerender()));
        }
        async onForceRemount({ storyId: t }) {
          await Promise.all(
            this.storyRenders.filter((r) => r.id === t).map((r) => r.remount()),
          );
        }
        renderStoryToElement(t, r, n, o) {
          if (!this.renderToCanvas || !this.storyStoreValue)
            throw new ke({ methodName: "renderStoryToElement" });
          let i = new Qn(
            this.channel,
            this.storyStoreValue,
            this.renderToCanvas,
            n,
            t.id,
            "docs",
            o,
            t,
          );
          return (
            i.renderToElement(r),
            this.storyRenders.push(i),
            async () => {
              await this.teardownRender(i);
            }
          );
        }
        async teardownRender(t, { viewModeChanged: r } = {}) {
          (this.storyRenders = this.storyRenders.filter((n) => n !== t)),
            await t?.teardown?.({ viewModeChanged: r });
        }
        async loadStory({ storyId: t }) {
          if (!this.storyStoreValue) throw new ke({ methodName: "loadStory" });
          return this.storyStoreValue.loadStory({ storyId: t });
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          if (!this.storyStoreValue)
            throw new ke({ methodName: "getStoryContext" });
          return this.storyStoreValue.getStoryContext(t, {
            forceInitialArgs: r,
          });
        }
        async extract(t) {
          if (!this.storyStoreValue) throw new ke({ methodName: "extract" });
          if (this.previewEntryError) throw this.previewEntryError;
          return (
            await this.storyStoreValue.cacheAllCSFFiles(),
            this.storyStoreValue.extract(t)
          );
        }
        renderPreviewEntryError(t, r) {
          (this.previewEntryError = r),
            Q.error(t),
            Q.error(r),
            this.channel.emit(ii, r);
        }
      };
    m(js, "Preview");
    var Ls = js,
      Vh = !1,
      Mn = "Invariant failed";
    function Pr(e, t) {
      if (!e) {
        if (Vh) throw new Error(Mn);
        var r = typeof t == "function" ? t() : t,
          n = r ? "".concat(Mn, ": ").concat(r) : Mn;
        throw new Error(n);
      }
    }
    m(Pr, "invariant");
    var Ms = class {
      constructor(t, r, n, o) {
        (this.channel = t),
          (this.store = r),
          (this.renderStoryToElement = n),
          (this.storyIdByName = m((i) => {
            let a = this.nameToStoryId.get(i);
            if (a) return a;
            throw new Error(`No story found with that name: ${i}`);
          }, "storyIdByName")),
          (this.componentStories = m(
            () => this.componentStoriesValue,
            "componentStories",
          )),
          (this.componentStoriesFromCSFFile = m(
            (i) => this.store.componentStoriesFromCSFFile({ csfFile: i }),
            "componentStoriesFromCSFFile",
          )),
          (this.storyById = m((i) => {
            if (!i) {
              if (!this.primaryStory)
                throw new Error(
                  "No primary story defined for docs entry. Did you forget to use `<Meta>`?",
                );
              return this.primaryStory;
            }
            let a = this.storyIdToCSFFile.get(i);
            if (!a)
              throw new Error(
                `Called \`storyById\` for story that was never loaded: ${i}`,
              );
            return this.store.storyFromCSFFile({ storyId: i, csfFile: a });
          }, "storyById")),
          (this.getStoryContext = m(
            (i) => ({
              ...this.store.getStoryContext(i),
              loaded: {},
              viewMode: "docs",
            }),
            "getStoryContext",
          )),
          (this.loadStory = m(
            (i) => this.store.loadStory({ storyId: i }),
            "loadStory",
          )),
          (this.componentStoriesValue = []),
          (this.storyIdToCSFFile = new Map()),
          (this.exportToStory = new Map()),
          (this.exportsToCSFFile = new Map()),
          (this.nameToStoryId = new Map()),
          (this.attachedCSFFiles = new Set()),
          o.forEach((i, a) => {
            this.referenceCSFFile(i);
          });
      }
      referenceCSFFile(t) {
        this.exportsToCSFFile.set(t.moduleExports, t),
          this.exportsToCSFFile.set(t.moduleExports.default, t),
          this.store
            .componentStoriesFromCSFFile({ csfFile: t })
            .forEach((r) => {
              let n = t.stories[r.id];
              this.storyIdToCSFFile.set(n.id, t),
                this.exportToStory.set(n.moduleExport, r);
            });
      }
      attachCSFFile(t) {
        if (!this.exportsToCSFFile.has(t.moduleExports))
          throw new Error(
            "Cannot attach a CSF file that has not been referenced",
          );
        this.attachedCSFFiles.has(t) ||
          (this.attachedCSFFiles.add(t),
          this.store
            .componentStoriesFromCSFFile({ csfFile: t })
            .forEach((r) => {
              this.nameToStoryId.set(r.name, r.id),
                this.componentStoriesValue.push(r),
                this.primaryStory || (this.primaryStory = r);
            }));
      }
      referenceMeta(t, r) {
        let n = this.resolveModuleExport(t);
        if (n.type !== "meta")
          throw new Error(
            "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?",
          );
        r && this.attachCSFFile(n.csfFile);
      }
      get projectAnnotations() {
        let { projectAnnotations: t } = this.store;
        if (!t)
          throw new Error(
            "Can't get projectAnnotations from DocsContext before they are initialized",
          );
        return t;
      }
      resolveAttachedModuleExportType(t) {
        if (t === "story") {
          if (!this.primaryStory)
            throw new Error(
              "No primary story attached to this docs file, did you forget to use <Meta of={} />?",
            );
          return { type: "story", story: this.primaryStory };
        }
        if (this.attachedCSFFiles.size === 0)
          throw new Error(
            "No CSF file attached to this docs file, did you forget to use <Meta of={} />?",
          );
        let r = Array.from(this.attachedCSFFiles)[0];
        if (t === "meta") return { type: "meta", csfFile: r };
        let { component: n } = r.meta;
        if (!n)
          throw new Error(
            "Attached CSF file does not defined a component, did you forget to export one?",
          );
        return { type: "component", component: n };
      }
      resolveModuleExport(t) {
        let r = this.exportsToCSFFile.get(t);
        if (r) return { type: "meta", csfFile: r };
        let n = this.exportToStory.get(mt(t) ? t.input : t);
        return n
          ? { type: "story", story: n }
          : { type: "component", component: t };
      }
      resolveOf(t, r = []) {
        let n;
        if (["component", "meta", "story"].includes(t)) {
          let o = t;
          n = this.resolveAttachedModuleExportType(o);
        } else n = this.resolveModuleExport(t);
        if (r.length && !r.includes(n.type)) {
          let o = n.type === "component" ? "component or unknown" : n.type;
          throw new Error(fe`Invalid value passed to the 'of' prop. The value was resolved to a '${o}' type but the only types for this block are: ${r.join(", ")}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
        }
        switch (n.type) {
          case "component":
            return { ...n, projectAnnotations: this.projectAnnotations };
          case "meta":
            return {
              ...n,
              preparedMeta: this.store.preparedMetaFromCSFFile({
                csfFile: n.csfFile,
              }),
            };
          case "story":
          default:
            return n;
        }
      }
    };
    m(Ms, "DocsContext");
    var mo = Ms,
      Us = class {
        constructor(t, r, n, o) {
          (this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = "docs"),
            (this.subtype = "csf"),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id);
        }
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id);
          if (this.torndown) throw Vr;
          let { importPath: n, title: o } = this.entry,
            i = this.store.processCSFFileWithCache(t, n, o),
            a = Object.keys(i.stories)[0];
          (this.story = this.store.storyFromCSFFile({
            storyId: a,
            csfFile: i,
          })),
            (this.csfFiles = [i, ...r]),
            (this.preparing = !1);
        }
        isEqual(t) {
          return !!(this.id === t.id && this.story && this.story === t.story);
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error("Cannot render docs before preparing");
          let r = new mo(this.channel, this.store, t, this.csfFiles);
          return this.csfFiles.forEach((n) => r.attachCSFFile(n)), r;
        }
        async renderToElement(t, r) {
          if (!this.story || !this.csfFiles)
            throw new Error("Cannot render docs before preparing");
          let n = this.docsContext(r),
            { docs: o } = this.story.parameters || {};
          if (!o)
            throw new Error(
              "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed",
            );
          let i = await o.renderer(),
            { render: a } = i,
            l = m(async () => {
              try {
                await a(n, o, t), this.channel.emit(Fr, this.id);
              } catch (u) {
                this.callbacks.showException(u);
              }
            }, "renderDocs");
          return (
            (this.rerender = async () => l()),
            (this.teardownRender = async ({ viewModeChanged: u }) => {
              !u || !t || i.unmount(t);
            }),
            l()
          );
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0);
        }
      };
    m(Us, "CsfDocsRender");
    var $i = Us,
      $s = class {
        constructor(t, r, n, o) {
          (this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = "docs"),
            (this.subtype = "mdx"),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id);
        }
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id);
          if (this.torndown) throw Vr;
          (this.csfFiles = r), (this.exports = t), (this.preparing = !1);
        }
        isEqual(t) {
          return !!(
            this.id === t.id &&
            this.exports &&
            this.exports === t.exports
          );
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error("Cannot render docs before preparing");
          return new mo(this.channel, this.store, t, this.csfFiles);
        }
        async renderToElement(t, r) {
          if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
            throw new Error("Cannot render docs before preparing");
          let n = this.docsContext(r),
            { docs: o } = this.store.projectAnnotations.parameters || {};
          if (!o)
            throw new Error(
              "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed",
            );
          let i = { ...o, page: this.exports.default },
            a = await o.renderer(),
            { render: l } = a,
            u = m(async () => {
              try {
                await l(n, i, t), this.channel.emit(Fr, this.id);
              } catch (c) {
                this.callbacks.showException(c);
              }
            }, "renderDocs");
          return (
            (this.rerender = async () => u()),
            (this.teardownRender = async ({ viewModeChanged: c } = {}) => {
              !c || !t || (a.unmount(t), (this.torndown = !0));
            }),
            u()
          );
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0);
        }
      };
    m($s, "MdxDocsRender");
    var qi = $s,
      Jh = globalThis;
    function qs(e) {
      let t = (e.composedPath && e.composedPath()[0]) || e.target;
      return (
        /input|textarea/i.test(t.tagName) ||
        t.getAttribute("contenteditable") !== null
      );
    }
    m(qs, "focusInInput");
    var Vs = "attached-mdx",
      Hh = "unattached-mdx";
    function Js({ tags: e }) {
      return e?.includes(Hh) || e?.includes(Vs);
    }
    m(Js, "isMdxEntry");
    function Br(e) {
      return e.type === "story";
    }
    m(Br, "isStoryRender");
    function Hs(e) {
      return e.type === "docs";
    }
    m(Hs, "isDocsRender");
    function zs(e) {
      return Hs(e) && e.subtype === "csf";
    }
    m(zs, "isCsfDocsRender");
    var Gs = class extends Ls {
      constructor(t, r, n, o) {
        super(t, r, void 0, !1),
          (this.importFn = t),
          (this.getProjectAnnotations = r),
          (this.selectionStore = n),
          (this.view = o),
          this.initialize();
      }
      setupListeners() {
        super.setupListeners(),
          (Jh.onkeydown = this.onKeydown.bind(this)),
          this.channel.on(hi, this.onSetCurrentStory.bind(this)),
          this.channel.on(Si, this.onUpdateQueryParams.bind(this)),
          this.channel.on(di, this.onPreloadStories.bind(this));
      }
      async setInitialGlobals() {
        if (!this.storyStoreValue)
          throw new ke({ methodName: "setInitialGlobals" });
        let { globals: t } = this.selectionStore.selectionSpecifier || {};
        t && this.storyStoreValue.userGlobals.updateFromPersisted(t),
          this.emitGlobals();
      }
      async initializeWithStoryIndex(t) {
        return (
          await super.initializeWithStoryIndex(t), this.selectSpecifiedStory()
        );
      }
      async selectSpecifiedStory() {
        if (!this.storyStoreValue)
          throw new ke({ methodName: "selectSpecifiedStory" });
        if (this.selectionStore.selection) {
          await this.renderSelection();
          return;
        }
        if (!this.selectionStore.selectionSpecifier) {
          this.renderMissingStory();
          return;
        }
        let { storySpecifier: t, args: r } =
            this.selectionStore.selectionSpecifier,
          n = this.storyStoreValue.storyIndex.entryFromSpecifier(t);
        if (!n) {
          t === "*"
            ? this.renderStoryLoadingException(t, new Ja())
            : this.renderStoryLoadingException(
                t,
                new za({ storySpecifier: t.toString() }),
              );
          return;
        }
        let { id: o, type: i } = n;
        this.selectionStore.setSelection({ storyId: o, viewMode: i }),
          this.channel.emit(Ei, this.selectionStore.selection),
          this.channel.emit(Tn, this.selectionStore.selection),
          await this.renderSelection({ persistedArgs: r });
      }
      async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
        await super.onGetProjectAnnotationsChanged({
          getProjectAnnotations: t,
        }),
          this.selectionStore.selection && this.renderSelection();
      }
      async onStoriesChanged({ importFn: t, storyIndex: r }) {
        await super.onStoriesChanged({ importFn: t, storyIndex: r }),
          this.selectionStore.selection
            ? await this.renderSelection()
            : await this.selectSpecifiedStory();
      }
      onKeydown(t) {
        if (!this.storyRenders.find((r) => r.disableKeyListeners) && !qs(t)) {
          let {
            altKey: r,
            ctrlKey: n,
            metaKey: o,
            shiftKey: i,
            key: a,
            code: l,
            keyCode: u,
          } = t;
          this.channel.emit(pi, {
            event: {
              altKey: r,
              ctrlKey: n,
              metaKey: o,
              shiftKey: i,
              key: a,
              code: l,
              keyCode: u,
            },
          });
        }
      }
      async onSetCurrentStory(t) {
        this.selectionStore.setSelection({ viewMode: "story", ...t }),
          await this.storeInitializationPromise,
          this.channel.emit(Tn, this.selectionStore.selection),
          this.renderSelection();
      }
      onUpdateQueryParams(t) {
        this.selectionStore.setQueryParams(t);
      }
      async onUpdateGlobals({ globals: t }) {
        let r =
          (this.currentRender instanceof Qn && this.currentRender.story) ||
          void 0;
        super.onUpdateGlobals({ globals: t, currentStory: r }),
          (this.currentRender instanceof qi ||
            this.currentRender instanceof $i) &&
            (await this.currentRender.rerender?.());
      }
      async onUpdateArgs({ storyId: t, updatedArgs: r }) {
        super.onUpdateArgs({ storyId: t, updatedArgs: r });
      }
      async onPreloadStories({ ids: t }) {
        await this.storeInitializationPromise,
          this.storyStoreValue &&
            (await Promise.allSettled(
              t.map((r) => this.storyStoreValue?.loadEntry(r)),
            ));
      }
      async renderSelection({ persistedArgs: t } = {}) {
        let { renderToCanvas: r } = this;
        if (!this.storyStoreValue || !r)
          throw new ke({ methodName: "renderSelection" });
        let { selection: n } = this.selectionStore;
        if (!n)
          throw new Error(
            "Cannot call renderSelection as no selection was made",
          );
        let { storyId: o } = n,
          i;
        try {
          i = await this.storyStoreValue.storyIdToEntry(o);
        } catch (h) {
          this.currentRender && (await this.teardownRender(this.currentRender)),
            this.renderStoryLoadingException(o, h);
          return;
        }
        let a = this.currentSelection?.storyId !== o,
          l = this.currentRender?.type !== i.type;
        i.type === "story"
          ? this.view.showPreparingStory({ immediate: l })
          : this.view.showPreparingDocs({ immediate: l }),
          this.currentRender?.isPreparing() &&
            (await this.teardownRender(this.currentRender));
        let u;
        i.type === "story"
          ? (u = new Qn(
              this.channel,
              this.storyStoreValue,
              r,
              this.mainStoryCallbacks(o),
              o,
              "story",
            ))
          : Js(i)
            ? (u = new qi(
                this.channel,
                this.storyStoreValue,
                i,
                this.mainStoryCallbacks(o),
              ))
            : (u = new $i(
                this.channel,
                this.storyStoreValue,
                i,
                this.mainStoryCallbacks(o),
              ));
        let c = this.currentSelection;
        this.currentSelection = n;
        let d = this.currentRender;
        this.currentRender = u;
        try {
          await u.prepare();
        } catch (h) {
          d && (await this.teardownRender(d)),
            h !== Vr && this.renderStoryLoadingException(o, h);
          return;
        }
        let p = !a && d && !u.isEqual(d);
        if (
          (t &&
            Br(u) &&
            (Pr(!!u.story),
            this.storyStoreValue.args.updateFromPersisted(u.story, t)),
          d && !d.torndown && !a && !p && !l)
        ) {
          (this.currentRender = d),
            this.channel.emit(Ai, o),
            this.view.showMain();
          return;
        }
        if (
          (d && (await this.teardownRender(d, { viewModeChanged: l })),
          c && (a || l) && this.channel.emit(mi, o),
          Br(u))
        ) {
          Pr(!!u.story);
          let {
            parameters: h,
            initialArgs: y,
            argTypes: E,
            unmappedArgs: v,
            initialGlobals: A,
            userGlobals: D,
            storyGlobals: S,
            globals: F,
          } = this.storyStoreValue.getStoryContext(u.story);
          this.channel.emit(bi, {
            id: o,
            parameters: h,
            initialArgs: y,
            argTypes: E,
            args: v,
          }),
            this.channel.emit(ft, {
              userGlobals: D,
              storyGlobals: S,
              globals: F,
              initialGlobals: A,
            });
        } else {
          let { parameters: h } = this.storyStoreValue.projectAnnotations,
            { initialGlobals: y, globals: E } =
              this.storyStoreValue.userGlobals;
          if (
            (this.channel.emit(ft, {
              globals: E,
              initialGlobals: y,
              storyGlobals: {},
              userGlobals: E,
            }),
            zs(u) || u.entry.tags?.includes(Vs))
          ) {
            if (!u.csfFiles) throw new qa({ storyId: o });
            ({ parameters: h } = this.storyStoreValue.preparedMetaFromCSFFile({
              csfFile: u.csfFiles[0],
            }));
          }
          this.channel.emit(si, { id: o, parameters: h });
        }
        Br(u)
          ? (Pr(!!u.story),
            this.storyRenders.push(u),
            this.currentRender.renderToElement(
              this.view.prepareForStory(u.story),
            ))
          : this.currentRender.renderToElement(
              this.view.prepareForDocs(),
              this.renderStoryToElement.bind(this),
            );
      }
      async teardownRender(t, { viewModeChanged: r = !1 } = {}) {
        (this.storyRenders = this.storyRenders.filter((n) => n !== t)),
          await t?.teardown?.({ viewModeChanged: r });
      }
      mainStoryCallbacks(t) {
        return {
          showStoryDuringRender: m(
            () => this.view.showStoryDuringRender(),
            "showStoryDuringRender",
          ),
          showMain: m(() => this.view.showMain(), "showMain"),
          showError: m((r) => this.renderError(t, r), "showError"),
          showException: m((r) => this.renderException(t, r), "showException"),
        };
      }
      renderPreviewEntryError(t, r) {
        super.renderPreviewEntryError(t, r), this.view.showErrorDisplay(r);
      }
      renderMissingStory() {
        this.view.showNoPreview(), this.channel.emit(kn);
      }
      renderStoryLoadingException(t, r) {
        Q.error(r), this.view.showErrorDisplay(r), this.channel.emit(kn, t);
      }
      renderException(t, r) {
        let { name: n = "Error", message: o = String(r), stack: i } = r;
        this.channel.emit(vi, { name: n, message: o, stack: i }),
          this.channel.emit(It, { newPhase: "errored", storyId: t }),
          this.view.showErrorDisplay(r),
          Q.error(`Error rendering story '${t}':`),
          Q.error(r);
      }
      renderError(t, { title: r, description: n }) {
        Q.error(`Error rendering story ${r}: ${n}`),
          this.channel.emit(yi, { title: r, description: n }),
          this.channel.emit(It, { newPhase: "errored", storyId: t }),
          this.view.showErrorDisplay({ message: r, stack: n });
      }
    };
    m(Gs, "PreviewWithSelection");
    var zh = Gs,
      Zn = Bt(oo(), 1),
      Gh = Bt(oo(), 1),
      Vi = /^[a-zA-Z0-9 _-]*$/,
      Ws = /^-?[0-9]+(\.[0-9]+)?$/,
      Wh = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
      Ks =
        /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
      eo = m(
        (e = "", t) =>
          e === null || e === "" || !Vi.test(e)
            ? !1
            : t == null ||
                t instanceof Date ||
                typeof t == "number" ||
                typeof t == "boolean"
              ? !0
              : typeof t == "string"
                ? Vi.test(t) || Ws.test(t) || Wh.test(t) || Ks.test(t)
                : Array.isArray(t)
                  ? t.every((r) => eo(e, r))
                  : Le(t)
                    ? Object.entries(t).every(([r, n]) => eo(r, n))
                    : !1,
        "validateArgs",
      ),
      Kh = {
        delimiter: ";",
        nesting: !0,
        arrayRepeat: !0,
        arrayRepeatSyntax: "bracket",
        nestingSyntax: "js",
        valueDeserializer(e) {
          if (e.startsWith("!")) {
            if (e === "!undefined") return;
            if (e === "!null") return null;
            if (e === "!true") return !0;
            if (e === "!false") return !1;
            if (e.startsWith("!date(") && e.endsWith(")"))
              return new Date(e.replaceAll(" ", "+").slice(6, -1));
            if (e.startsWith("!hex(") && e.endsWith(")"))
              return `#${e.slice(5, -1)}`;
            let t = e.slice(1).match(Ks);
            if (t)
              return e.startsWith("!rgba") || e.startsWith("!RGBA")
                ? `${t[1]}(${t[2]}, ${t[3]}, ${t[4]}, ${t[5]})`
                : e.startsWith("!hsla") || e.startsWith("!HSLA")
                  ? `${t[1]}(${t[2]}, ${t[3]}%, ${t[4]}%, ${t[5]})`
                  : e.startsWith("!rgb") || e.startsWith("!RGB")
                    ? `${t[1]}(${t[2]}, ${t[3]}, ${t[4]})`
                    : `${t[1]}(${t[2]}, ${t[3]}%, ${t[4]}%)`;
          }
          return Ws.test(e) ? Number(e) : e;
        },
      },
      Ji = m((e) => {
        let t = e.split(";").map((r) => r.replace("=", "~").replace(":", "="));
        return Object.entries((0, Gh.parse)(t.join(";"), Kh)).reduce(
          (r, [n, o]) =>
            eo(n, o)
              ? Object.assign(r, { [n]: o })
              : (ot.warn(fe`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    `),
                r),
          {},
        );
      }, "parseArgsParam"),
      { history: Ys, document: lt } = Ee;
    function Xs(e) {
      let t = (e || "").match(/^\/story\/(.+)/);
      if (!t)
        throw new Error(`Invalid path '${e}',  must start with '/story/'`);
      return t[1];
    }
    m(Xs, "pathToId");
    var Qs = m(({ selection: e, extraParams: t }) => {
        let r = lt?.location.search.slice(1),
          {
            path: n,
            selectedKind: o,
            selectedStory: i,
            ...a
          } = (0, Zn.parse)(r);
        return `?${(0, Zn.stringify)({ ...a, ...t, ...(e && { id: e.storyId, viewMode: e.viewMode }) })}`;
      }, "getQueryString"),
      Yh = m((e) => {
        if (!e) return;
        let t = Qs({ selection: e }),
          { hash: r = "" } = lt.location;
        (lt.title = e.storyId),
          Ys.replaceState({}, "", `${lt.location.pathname}${t}${r}`);
      }, "setPath"),
      Xh = m(
        (e) => e != null && typeof e == "object" && Array.isArray(e) === !1,
        "isObject",
      ),
      nr = m((e) => {
        if (e !== void 0) {
          if (typeof e == "string") return e;
          if (Array.isArray(e)) return nr(e[0]);
          if (Xh(e)) return nr(Object.values(e).filter(Boolean));
        }
      }, "getFirstString"),
      Qh = m(() => {
        if (typeof lt < "u") {
          let e = lt.location.search.slice(1),
            t = (0, Zn.parse)(e),
            r = typeof t.args == "string" ? Ji(t.args) : void 0,
            n = typeof t.globals == "string" ? Ji(t.globals) : void 0,
            o = nr(t.viewMode);
          (typeof o != "string" || !o.match(/docs|story/)) && (o = "story");
          let i = nr(t.path),
            a = i ? Xs(i) : nr(t.id);
          if (a) return { storySpecifier: a, args: r, globals: n, viewMode: o };
        }
        return null;
      }, "getSelectionSpecifierFromPath"),
      Zs = class {
        constructor() {
          this.selectionSpecifier = Qh();
        }
        setSelection(t) {
          (this.selection = t), Yh(this.selection);
        }
        setQueryParams(t) {
          let r = Qs({ extraParams: t }),
            { hash: n = "" } = lt.location;
          Ys.replaceState({}, "", `${lt.location.pathname}${r}${n}`);
        }
      };
    m(Zs, "UrlStore");
    var Zh = Zs,
      ef = Bt(Tp(), 1),
      tf = Bt(oo(), 1),
      { document: xe } = Ee,
      Hi = 100,
      el = ((e) => (
        (e.MAIN = "MAIN"),
        (e.NOPREVIEW = "NOPREVIEW"),
        (e.PREPARING_STORY = "PREPARING_STORY"),
        (e.PREPARING_DOCS = "PREPARING_DOCS"),
        (e.ERROR = "ERROR"),
        e
      ))(el || {}),
      Un = {
        PREPARING_STORY: "sb-show-preparing-story",
        PREPARING_DOCS: "sb-show-preparing-docs",
        MAIN: "sb-show-main",
        NOPREVIEW: "sb-show-nopreview",
        ERROR: "sb-show-errordisplay",
      },
      $n = {
        centered: "sb-main-centered",
        fullscreen: "sb-main-fullscreen",
        padded: "sb-main-padded",
      },
      zi = new ef.default({ escapeXML: !0 }),
      tl = class {
        constructor() {
          if (((this.testing = !1), typeof xe < "u")) {
            let { __SPECIAL_TEST_PARAMETER__: t } = (0, tf.parse)(
              xe.location.search.slice(1),
            );
            switch (t) {
              case "preparing-story": {
                this.showPreparingStory(), (this.testing = !0);
                break;
              }
              case "preparing-docs": {
                this.showPreparingDocs(), (this.testing = !0);
                break;
              }
              default:
            }
          }
        }
        prepareForStory(t) {
          return (
            this.showStory(),
            this.applyLayout(t.parameters.layout),
            (xe.documentElement.scrollTop = 0),
            (xe.documentElement.scrollLeft = 0),
            this.storyRoot()
          );
        }
        storyRoot() {
          return xe.getElementById("storybook-root");
        }
        prepareForDocs() {
          return (
            this.showMain(),
            this.showDocs(),
            this.applyLayout("fullscreen"),
            (xe.documentElement.scrollTop = 0),
            (xe.documentElement.scrollLeft = 0),
            this.docsRoot()
          );
        }
        docsRoot() {
          return xe.getElementById("storybook-docs");
        }
        applyLayout(t = "padded") {
          if (t === "none") {
            xe.body.classList.remove(this.currentLayoutClass),
              (this.currentLayoutClass = null);
            return;
          }
          this.checkIfLayoutExists(t);
          let r = $n[t];
          xe.body.classList.remove(this.currentLayoutClass),
            xe.body.classList.add(r),
            (this.currentLayoutClass = r);
        }
        checkIfLayoutExists(t) {
          $n[t] ||
            Q.warn(fe`
          The desired layout: ${t} is not a valid option.
          The possible options are: ${Object.keys($n).join(", ")}, none.
        `);
        }
        showMode(t) {
          clearTimeout(this.preparingTimeout),
            Object.keys(el).forEach((r) => {
              r === t
                ? xe.body.classList.add(Un[r])
                : xe.body.classList.remove(Un[r]);
            });
        }
        showErrorDisplay({ message: t = "", stack: r = "" }) {
          let n = t,
            o = r,
            i = t.split(`
`);
          i.length > 1 &&
            (([n] = i),
            (o = i
              .slice(1)
              .join(
                `
`,
              )
              .replace(/^\n/, ""))),
            (xe.getElementById("error-message").innerHTML = zi.toHtml(n)),
            (xe.getElementById("error-stack").innerHTML = zi.toHtml(o)),
            this.showMode("ERROR");
        }
        showNoPreview() {
          this.testing ||
            (this.showMode("NOPREVIEW"),
            this.storyRoot()?.setAttribute("hidden", "true"),
            this.docsRoot()?.setAttribute("hidden", "true"));
        }
        showPreparingStory({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode("PREPARING_STORY")
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode("PREPARING_STORY"),
                  Hi,
                ));
        }
        showPreparingDocs({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode("PREPARING_DOCS")
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode("PREPARING_DOCS"),
                  Hi,
                ));
        }
        showMain() {
          this.showMode("MAIN");
        }
        showDocs() {
          this.storyRoot().setAttribute("hidden", "true"),
            this.docsRoot().removeAttribute("hidden");
        }
        showStory() {
          this.docsRoot().setAttribute("hidden", "true"),
            this.storyRoot().removeAttribute("hidden");
        }
        showStoryDuringRender() {
          xe.body.classList.add(Un.MAIN);
        }
      };
    m(tl, "WebView");
    var rf = tl,
      nf = class extends zh {
        constructor(t, r) {
          super(t, r, new Zh(), new rf()),
            (this.importFn = t),
            (this.getProjectAnnotations = r),
            (Ee.__STORYBOOK_PREVIEW__ = this);
        }
      };
    m(nf, "PreviewWeb");
    var { document: gt } = Ee,
      of = [
        "application/javascript",
        "application/ecmascript",
        "application/x-ecmascript",
        "application/x-javascript",
        "text/ecmascript",
        "text/javascript",
        "text/javascript1.0",
        "text/javascript1.1",
        "text/javascript1.2",
        "text/javascript1.3",
        "text/javascript1.4",
        "text/javascript1.5",
        "text/jscript",
        "text/livescript",
        "text/x-ecmascript",
        "text/x-javascript",
        "module",
      ],
      af = "script",
      Gi = "scripts-root";
    function to() {
      let e = gt.createEvent("Event");
      e.initEvent("DOMContentLoaded", !0, !0), gt.dispatchEvent(e);
    }
    m(to, "simulateDOMContentLoaded");
    function rl(e, t, r) {
      let n = gt.createElement("script");
      (n.type = e.type === "module" ? "module" : "text/javascript"),
        e.src
          ? ((n.onload = t), (n.onerror = t), (n.src = e.src))
          : (n.textContent = e.innerText),
        r ? r.appendChild(n) : gt.head.appendChild(n),
        e.parentNode.removeChild(e),
        e.src || t();
    }
    m(rl, "insertScript");
    function yo(e, t, r = 0) {
      e[r](() => {
        r++, r === e.length ? t() : yo(e, t, r);
      });
    }
    m(yo, "insertScriptsSequentially");
    function sf(e) {
      let t = gt.getElementById(Gi);
      t
        ? (t.innerHTML = "")
        : ((t = gt.createElement("div")), (t.id = Gi), gt.body.appendChild(t));
      let r = Array.from(e.querySelectorAll(af));
      if (r.length) {
        let n = [];
        r.forEach((o) => {
          let i = o.getAttribute("type");
          (!i || of.includes(i)) && n.push((a) => rl(o, a, t));
        }),
          n.length && yo(n, to, void 0);
      } else to();
    }
    m(sf, "simulatePageLoad");
    var lf = Object.defineProperty,
      _ = (e, t) => lf(e, "name", { value: t, configurable: !0 }),
      uf = _((e) => e.name === "literal", "isLiteral"),
      cf = _((e) => e.value.replace(/['|"]/g, ""), "toEnumOption"),
      df = _((e) => {
        switch (e.type) {
          case "function":
            return { name: "function" };
          case "object":
            let t = {};
            return (
              e.signature.properties.forEach((r) => {
                t[r.key] = sr(r.value);
              }),
              { name: "object", value: t }
            );
          default:
            throw new Cr({ type: e, language: "Flow" });
        }
      }, "convertSig"),
      sr = _((e) => {
        let { name: t, raw: r } = e,
          n = {};
        switch ((typeof r < "u" && (n.raw = r), e.name)) {
          case "literal":
            return { ...n, name: "other", value: e.value };
          case "string":
          case "number":
          case "symbol":
          case "boolean":
            return { ...n, name: t };
          case "Array":
            return { ...n, name: "array", value: e.elements.map(sr) };
          case "signature":
            return { ...n, ...df(e) };
          case "union":
            return e.elements?.every(uf)
              ? { ...n, name: "enum", value: e.elements?.map(cf) }
              : { ...n, name: t, value: e.elements?.map(sr) };
          case "intersection":
            return { ...n, name: t, value: e.elements?.map(sr) };
          default:
            return { ...n, name: "other", value: t };
        }
      }, "convert");
    function nl(e, t) {
      let r = {},
        n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        let i = n[o],
          a = e[i];
        r[i] = t(a, i, e);
      }
      return r;
    }
    _(nl, "mapValues");
    var ol = /^['"]|['"]$/g,
      pf = _((e) => e.replace(ol, ""), "trimQuotes"),
      hf = _((e) => ol.test(e), "includesQuotes"),
      al = _((e) => {
        let t = pf(e);
        return hf(e) || Number.isNaN(Number(t)) ? t : Number(t);
      }, "parseLiteral"),
      ff = /^\(.*\) => /,
      ir = _((e) => {
        let { name: t, raw: r, computed: n, value: o } = e,
          i = {};
        switch ((typeof r < "u" && (i.raw = r), t)) {
          case "enum": {
            let l = n ? o : o.map((u) => al(u.value));
            return { ...i, name: t, value: l };
          }
          case "string":
          case "number":
          case "symbol":
            return { ...i, name: t };
          case "func":
            return { ...i, name: "function" };
          case "bool":
          case "boolean":
            return { ...i, name: "boolean" };
          case "arrayOf":
          case "array":
            return { ...i, name: "array", value: o && ir(o) };
          case "object":
            return { ...i, name: t };
          case "objectOf":
            return { ...i, name: t, value: ir(o) };
          case "shape":
          case "exact":
            let a = nl(o, (l) => ir(l));
            return { ...i, name: "object", value: a };
          case "union":
            return { ...i, name: "union", value: o.map((l) => ir(l)) };
          case "instanceOf":
          case "element":
          case "elementType":
          default: {
            if (t?.indexOf("|") > 0)
              try {
                let c = t.split("|").map((d) => JSON.parse(d));
                return { ...i, name: "enum", value: c };
              } catch {}
            let l = o ? `${t}(${o})` : t,
              u = ff.test(t) ? "function" : "other";
            return { ...i, name: u, value: l };
          }
        }
      }, "convert"),
      mf = _((e) => {
        switch (e.type) {
          case "function":
            return { name: "function" };
          case "object":
            let t = {};
            return (
              e.signature.properties.forEach((r) => {
                t[r.key] = lr(r.value);
              }),
              { name: "object", value: t }
            );
          default:
            throw new Cr({ type: e, language: "Typescript" });
        }
      }, "convertSig"),
      lr = _((e) => {
        let { name: t, raw: r } = e,
          n = {};
        switch ((typeof r < "u" && (n.raw = r), e.name)) {
          case "string":
          case "number":
          case "symbol":
          case "boolean":
            return { ...n, name: t };
          case "Array":
            return { ...n, name: "array", value: e.elements.map(lr) };
          case "signature":
            return { ...n, ...mf(e) };
          case "union":
            let o;
            return (
              e.elements?.every((i) => i.name === "literal")
                ? (o = {
                    ...n,
                    name: "enum",
                    value: e.elements?.map((i) => al(i.value)),
                  })
                : (o = { ...n, name: t, value: e.elements?.map(lr) }),
              o
            );
          case "intersection":
            return { ...n, name: t, value: e.elements?.map(lr) };
          default:
            return { ...n, name: "other", value: t };
        }
      }, "convert"),
      go = _((e) => {
        let { type: t, tsType: r, flowType: n } = e;
        try {
          if (t != null) return ir(t);
          if (r != null) return lr(r);
          if (n != null) return sr(n);
        } catch (o) {
          console.error(o);
        }
        return null;
      }, "convert"),
      yf = ((e) => (
        (e.JAVASCRIPT = "JavaScript"),
        (e.FLOW = "Flow"),
        (e.TYPESCRIPT = "TypeScript"),
        (e.UNKNOWN = "Unknown"),
        e
      ))(yf || {}),
      gf = ["null", "undefined"];
    function Jr(e) {
      return gf.some((t) => t === e);
    }
    _(Jr, "isDefaultValueBlacklisted");
    var bf = _((e) => {
      if (!e) return "";
      if (typeof e == "string") return e;
      throw new Error(
        `Description: expected string, got: ${JSON.stringify(e)}`,
      );
    }, "str");
    function bo(e) {
      return !!e.__docgenInfo;
    }
    _(bo, "hasDocgen");
    function il(e) {
      return e != null && Object.keys(e).length > 0;
    }
    _(il, "isValidDocgenSection");
    function sl(e, t) {
      return bo(e) ? e.__docgenInfo[t] : null;
    }
    _(sl, "getDocgenSection");
    function ll(e) {
      return bo(e) ? bf(e.__docgenInfo.description) : "";
    }
    _(ll, "getDocgenDescription");
    var ut;
    (function (e) {
      (e.start = "/**"), (e.nostart = "/***"), (e.delim = "*"), (e.end = "*/");
    })((ut = ut || (ut = {})));
    function ul(e) {
      return /^\s+$/.test(e);
    }
    _(ul, "isSpace");
    function cl(e) {
      let t = e.match(/\r+$/);
      return t == null
        ? ["", e]
        : [e.slice(-t[0].length), e.slice(0, -t[0].length)];
    }
    _(cl, "splitCR");
    function vt(e) {
      let t = e.match(/^\s+/);
      return t == null
        ? ["", e]
        : [e.slice(0, t[0].length), e.slice(t[0].length)];
    }
    _(vt, "splitSpace");
    function dl(e) {
      return e.split(/\n/);
    }
    _(dl, "splitLines");
    function pl(e = {}) {
      return Object.assign(
        {
          tag: "",
          name: "",
          type: "",
          optional: !1,
          description: "",
          problems: [],
          source: [],
        },
        e,
      );
    }
    _(pl, "seedSpec");
    function hl(e = {}) {
      return Object.assign(
        {
          start: "",
          delimiter: "",
          postDelimiter: "",
          tag: "",
          postTag: "",
          name: "",
          postName: "",
          type: "",
          postType: "",
          description: "",
          end: "",
          lineEnd: "",
        },
        e,
      );
    }
    _(hl, "seedTokens");
    var Ef = /^@\S+/;
    function fl({ fence: e = "```" } = {}) {
      let t = ml(e),
        r = _((n, o) => (t(n) ? !o : o), "toggleFence");
      return _(function (n) {
        let o = [[]],
          i = !1;
        for (let a of n)
          Ef.test(a.tokens.description) && !i
            ? o.push([a])
            : o[o.length - 1].push(a),
            (i = r(a.tokens.description, i));
        return o;
      }, "parseBlock");
    }
    _(fl, "getParser");
    function ml(e) {
      return typeof e == "string" ? (t) => t.split(e).length % 2 === 0 : e;
    }
    _(ml, "getFencer");
    function yl({ startLine: e = 0, markers: t = ut } = {}) {
      let r = null,
        n = e;
      return _(function (o) {
        let i = o,
          a = hl();
        if (
          (([a.lineEnd, i] = cl(i)),
          ([a.start, i] = vt(i)),
          r === null &&
            i.startsWith(t.start) &&
            !i.startsWith(t.nostart) &&
            ((r = []),
            (a.delimiter = i.slice(0, t.start.length)),
            (i = i.slice(t.start.length)),
            ([a.postDelimiter, i] = vt(i))),
          r === null)
        )
          return n++, null;
        let l = i.trimRight().endsWith(t.end);
        if (
          (a.delimiter === "" &&
            i.startsWith(t.delim) &&
            !i.startsWith(t.end) &&
            ((a.delimiter = t.delim),
            (i = i.slice(t.delim.length)),
            ([a.postDelimiter, i] = vt(i))),
          l)
        ) {
          let u = i.trimRight();
          (a.end = i.slice(u.length - t.end.length)),
            (i = u.slice(0, -t.end.length));
        }
        if (
          ((a.description = i),
          r.push({ number: n, source: o, tokens: a }),
          n++,
          l)
        ) {
          let u = r.slice();
          return (r = null), u;
        }
        return null;
      }, "parseSource");
    }
    _(yl, "getParser");
    function gl({ tokenizers: e }) {
      return _(function (t) {
        var r;
        let n = pl({ source: t });
        for (let o of e)
          if (
            ((n = o(n)),
            !(
              (r = n.problems[n.problems.length - 1]) === null || r === void 0
            ) && r.critical)
          )
            break;
        return n;
      }, "parseSpec");
    }
    _(gl, "getParser");
    function bl() {
      return (e) => {
        let { tokens: t } = e.source[0],
          r = t.description.match(/\s*(@(\S+))(\s*)/);
        return r === null
          ? (e.problems.push({
              code: "spec:tag:prefix",
              message: 'tag should start with "@" symbol',
              line: e.source[0].number,
              critical: !0,
            }),
            e)
          : ((t.tag = r[1]),
            (t.postTag = r[3]),
            (t.description = t.description.slice(r[0].length)),
            (e.tag = r[2]),
            e);
      };
    }
    _(bl, "tagTokenizer");
    function El(e = "compact") {
      let t = vl(e);
      return (r) => {
        let n = 0,
          o = [];
        for (let [l, { tokens: u }] of r.source.entries()) {
          let c = "";
          if (l === 0 && u.description[0] !== "{") return r;
          for (let d of u.description)
            if ((d === "{" && n++, d === "}" && n--, (c += d), n === 0)) break;
          if ((o.push([u, c]), n === 0)) break;
        }
        if (n !== 0)
          return (
            r.problems.push({
              code: "spec:type:unpaired-curlies",
              message: "unpaired curlies",
              line: r.source[0].number,
              critical: !0,
            }),
            r
          );
        let i = [],
          a = o[0][0].postDelimiter.length;
        for (let [l, [u, c]] of o.entries())
          (u.type = c),
            l > 0 &&
              ((u.type = u.postDelimiter.slice(a) + c),
              (u.postDelimiter = u.postDelimiter.slice(0, a))),
            ([u.postType, u.description] = vt(u.description.slice(c.length))),
            i.push(u.type);
        return (
          (i[0] = i[0].slice(1)),
          (i[i.length - 1] = i[i.length - 1].slice(0, -1)),
          (r.type = t(i)),
          r
        );
      };
    }
    _(El, "typeTokenizer");
    var vf = _((e) => e.trim(), "trim");
    function vl(e) {
      return e === "compact"
        ? (t) => t.map(vf).join("")
        : e === "preserve"
          ? (t) =>
              t.join(`
`)
          : e;
    }
    _(vl, "getJoiner");
    var Af = _((e) => e && e.startsWith('"') && e.endsWith('"'), "isQuoted");
    function Al() {
      let e = _((t, { tokens: r }, n) => (r.type === "" ? t : n), "typeEnd");
      return (t) => {
        let { tokens: r } = t.source[t.source.reduce(e, 0)],
          n = r.description.trimLeft(),
          o = n.split('"');
        if (o.length > 1 && o[0] === "" && o.length % 2 === 1)
          return (
            (t.name = o[1]),
            (r.name = `"${o[1]}"`),
            ([r.postName, r.description] = vt(n.slice(r.name.length))),
            t
          );
        let i = 0,
          a = "",
          l = !1,
          u;
        for (let d of n) {
          if (i === 0 && ul(d)) break;
          d === "[" && i++, d === "]" && i--, (a += d);
        }
        if (i !== 0)
          return (
            t.problems.push({
              code: "spec:name:unpaired-brackets",
              message: "unpaired brackets",
              line: t.source[0].number,
              critical: !0,
            }),
            t
          );
        let c = a;
        if (a[0] === "[" && a[a.length - 1] === "]") {
          (l = !0), (a = a.slice(1, -1));
          let d = a.split("=");
          if (
            ((a = d[0].trim()),
            d[1] !== void 0 && (u = d.slice(1).join("=").trim()),
            a === "")
          )
            return (
              t.problems.push({
                code: "spec:name:empty-name",
                message: "empty name",
                line: t.source[0].number,
                critical: !0,
              }),
              t
            );
          if (u === "")
            return (
              t.problems.push({
                code: "spec:name:empty-default",
                message: "empty default value",
                line: t.source[0].number,
                critical: !0,
              }),
              t
            );
          if (!Af(u) && /=(?!>)/.test(u))
            return (
              t.problems.push({
                code: "spec:name:invalid-default",
                message: "invalid default value syntax",
                line: t.source[0].number,
                critical: !0,
              }),
              t
            );
        }
        return (
          (t.optional = l),
          (t.name = a),
          (r.name = c),
          u !== void 0 && (t.default = u),
          ([r.postName, r.description] = vt(n.slice(r.name.length))),
          t
        );
      };
    }
    _(Al, "nameTokenizer");
    function Dl(e = "compact", t = ut) {
      let r = Eo(e);
      return (n) => ((n.description = r(n.source, t)), n);
    }
    _(Dl, "descriptionTokenizer");
    function Eo(e) {
      return e === "compact" ? Sl : e === "preserve" ? wl : e;
    }
    _(Eo, "getJoiner");
    function Sl(e, t = ut) {
      return e
        .map(({ tokens: { description: r } }) => r.trim())
        .filter((r) => r !== "")
        .join(" ");
    }
    _(Sl, "compactJoiner");
    var Df = _((e, { tokens: t }, r) => (t.type === "" ? e : r), "lineNo"),
      Sf = _(
        ({ tokens: e }) =>
          (e.delimiter === "" ? e.start : e.postDelimiter.slice(1)) +
          e.description,
        "getDescription",
      );
    function wl(e, t = ut) {
      if (e.length === 0) return "";
      e[0].tokens.description === "" &&
        e[0].tokens.delimiter === t.start &&
        (e = e.slice(1));
      let r = e[e.length - 1];
      return (
        r !== void 0 &&
          r.tokens.description === "" &&
          r.tokens.end.endsWith(t.end) &&
          (e = e.slice(0, -1)),
        (e = e.slice(e.reduce(Df, 0))),
        e.map(Sf).join(`
`)
      );
    }
    _(wl, "preserveJoiner");
    function Cl({
      startLine: e = 0,
      fence: t = "```",
      spacing: r = "compact",
      markers: n = ut,
      tokenizers: o = [bl(), El(r), Al(), Dl(r)],
    } = {}) {
      if (e < 0 || e % 1 > 0) throw new Error("Invalid startLine");
      let i = yl({ startLine: e, markers: n }),
        a = fl({ fence: t }),
        l = gl({ tokenizers: o }),
        u = Eo(r);
      return function (c) {
        let d = [];
        for (let p of dl(c)) {
          let h = i(p);
          if (h === null) continue;
          let y = a(h),
            E = y.slice(1).map(l);
          d.push({
            description: u(y[0], n),
            tags: E,
            source: h,
            problems: E.reduce((v, A) => v.concat(A.problems), []),
          });
        }
        return d;
      };
    }
    _(Cl, "getParser");
    function xl(e) {
      return (
        e.start +
        e.delimiter +
        e.postDelimiter +
        e.tag +
        e.postTag +
        e.type +
        e.postType +
        e.name +
        e.postName +
        e.description +
        e.end +
        e.lineEnd
      );
    }
    _(xl, "join");
    function Tl() {
      return (e) =>
        e.source.map(({ tokens: t }) => xl(t)).join(`
`);
    }
    _(Tl, "getStringifier");
    var wf = {
        line: 0,
        start: 0,
        delimiter: 0,
        postDelimiter: 0,
        tag: 0,
        postTag: 0,
        name: 0,
        postName: 0,
        type: 0,
        postType: 0,
        description: 0,
        end: 0,
        lineEnd: 0,
      },
      Dv = Object.keys(wf);
    function Fl(e, t = {}) {
      return Cl(t)(e);
    }
    _(Fl, "parse");
    var Sv = Tl();
    function Il(e) {
      return e != null && e.includes("@");
    }
    _(Il, "containsJsDoc");
    function kl(e) {
      let t =
          `/**
` +
          (e ?? "")
            .split(
              `
`,
            )
            .map((n) => ` * ${n}`).join(`
`) +
          `
*/`,
        r = Fl(t, { spacing: "preserve" });
      if (!r || r.length === 0) throw new Error("Cannot parse JSDoc tags.");
      return r[0];
    }
    _(kl, "parse");
    var Cf = {
        tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"],
      },
      xf = _((e, t = Cf) => {
        if (!Il(e)) return { includesJsDoc: !1, ignore: !1 };
        let r = kl(e),
          n = Rl(r, t.tags);
        return n.ignore
          ? { includesJsDoc: !0, ignore: !0 }
          : {
              includesJsDoc: !0,
              ignore: !1,
              description: r.description.trim(),
              extractedTags: n,
            };
      }, "parseJsDoc");
    function Rl(e, t) {
      let r = { params: null, deprecated: null, returns: null, ignore: !1 };
      for (let n of e.tags)
        if (!(t !== void 0 && !t.includes(n.tag)))
          if (n.tag === "ignore") {
            r.ignore = !0;
            break;
          } else
            switch (n.tag) {
              case "param":
              case "arg":
              case "argument": {
                let o = _l(n);
                o != null &&
                  (r.params == null && (r.params = []), r.params.push(o));
                break;
              }
              case "deprecated": {
                let o = Pl(n);
                o != null && (r.deprecated = o);
                break;
              }
              case "returns": {
                let o = Bl(n);
                o != null && (r.returns = o);
                break;
              }
              default:
                break;
            }
      return r;
    }
    _(Rl, "extractJsDocTags");
    function Ol(e) {
      return e.replace(/[\.-]$/, "");
    }
    _(Ol, "normaliseParamName");
    function _l(e) {
      if (!e.name || e.name === "-") return null;
      let t = Do(e.type);
      return {
        name: e.name,
        type: t,
        description: Ao(e.description),
        getPrettyName: _(() => Ol(e.name), "getPrettyName"),
        getTypeName: _(() => (t ? So(t) : null), "getTypeName"),
      };
    }
    _(_l, "extractParam");
    function Pl(e) {
      return e.name ? vo(e.name, e.description) : null;
    }
    _(Pl, "extractDeprecated");
    function vo(e, t) {
      let r = e === "" ? t : `${e} ${t}`;
      return Ao(r);
    }
    _(vo, "joinNameAndDescription");
    function Ao(e) {
      let t = e.replace(/^- /g, "").trim();
      return t === "" ? null : t;
    }
    _(Ao, "normaliseDescription");
    function Bl(e) {
      let t = Do(e.type);
      return t
        ? {
            type: t,
            description: vo(e.name, e.description),
            getTypeName: _(() => So(t), "getTypeName"),
          }
        : null;
    }
    _(Bl, "extractReturns");
    var ct = (0, Nt.stringifyRules)(),
      Tf = ct.JsdocTypeObject;
    ct.JsdocTypeAny = () => "any";
    ct.JsdocTypeObject = (e, t) => `(${Tf(e, t)})`;
    ct.JsdocTypeOptional = (e, t) => t(e.element);
    ct.JsdocTypeNullable = (e, t) => t(e.element);
    ct.JsdocTypeNotNullable = (e, t) => t(e.element);
    ct.JsdocTypeUnion = (e, t) => e.elements.map(t).join("|");
    function Do(e) {
      try {
        return (0, Nt.parse)(e, "typescript");
      } catch {
        return null;
      }
    }
    _(Do, "extractType");
    function So(e) {
      return (0, Nt.transform)(ct, e);
    }
    _(So, "extractTypeName");
    function wo(e) {
      return e.length > 90;
    }
    _(wo, "isTooLongForTypeSummary");
    function Nl(e) {
      return e.length > 50;
    }
    _(Nl, "isTooLongForDefaultValueSummary");
    function me(e, t) {
      return e === t ? { summary: e } : { summary: e, detail: t };
    }
    _(me, "createSummaryValue");
    var wv = _((e) => e.replace(/\\r\\n/g, "\\n"), "normalizeNewlines");
    function jl(e, t) {
      if (e != null) {
        let { value: r } = e;
        if (!Jr(r)) return Nl(r) ? me(t?.name, r) : me(r);
      }
      return null;
    }
    _(jl, "createDefaultValue");
    function Co({ name: e, value: t, elements: r, raw: n }) {
      return t ?? (r != null ? r.map(Co).join(" | ") : (n ?? e));
    }
    _(Co, "generateUnionElement");
    function Ll({ name: e, raw: t, elements: r }) {
      return r != null
        ? me(r.map(Co).join(" | "))
        : t != null
          ? me(t.replace(/^\|\s*/, ""))
          : me(e);
    }
    _(Ll, "generateUnion");
    function Ml({ type: e, raw: t }) {
      return t != null ? me(t) : me(e);
    }
    _(Ml, "generateFuncSignature");
    function Ul({ type: e, raw: t }) {
      return t != null ? (wo(t) ? me(e, t) : me(t)) : me(e);
    }
    _(Ul, "generateObjectSignature");
    function $l(e) {
      let { type: t } = e;
      return t === "object" ? Ul(e) : Ml(e);
    }
    _($l, "generateSignature");
    function ql({ name: e, raw: t }) {
      return t != null ? (wo(t) ? me(e, t) : me(t)) : me(e);
    }
    _(ql, "generateDefault");
    function Vl(e) {
      if (e == null) return null;
      switch (e.name) {
        case "union":
          return Ll(e);
        case "signature":
          return $l(e);
        default:
          return ql(e);
      }
    }
    _(Vl, "createType");
    var Ff = _((e, t) => {
      let { flowType: r, description: n, required: o, defaultValue: i } = t;
      return {
        name: e,
        type: Vl(r),
        required: o,
        description: n,
        defaultValue: jl(i ?? null, r ?? null),
      };
    }, "createFlowPropDef");
    function Jl({ defaultValue: e }) {
      if (e != null) {
        let { value: t } = e;
        if (!Jr(t)) return me(t);
      }
      return null;
    }
    _(Jl, "createDefaultValue");
    function Hl({ tsType: e, required: t }) {
      if (e == null) return null;
      let r = e.name;
      return (
        t || (r = r.replace(" | undefined", "")),
        me(["Array", "Record", "signature"].includes(e.name) ? e.raw : r)
      );
    }
    _(Hl, "createType");
    var If = _((e, t) => {
      let { description: r, required: n } = t;
      return {
        name: e,
        type: Hl(t),
        required: n,
        description: r,
        defaultValue: Jl(t),
      };
    }, "createTsPropDef");
    function zl(e) {
      return e != null ? me(e.name) : null;
    }
    _(zl, "createType");
    function Gl(e) {
      let { computed: t, func: r } = e;
      return typeof t > "u" && typeof r > "u";
    }
    _(Gl, "isReactDocgenTypescript");
    function Wl(e) {
      return e
        ? e.name === "string"
          ? !0
          : e.name === "enum"
            ? Array.isArray(e.value) &&
              e.value.every(
                ({ value: t }) =>
                  typeof t == "string" &&
                  t[0] === '"' &&
                  t[t.length - 1] === '"',
              )
            : !1
        : !1;
    }
    _(Wl, "isStringValued");
    function Kl(e, t) {
      if (e != null) {
        let { value: r } = e;
        if (!Jr(r)) return Gl(e) && Wl(t) ? me(JSON.stringify(r)) : me(r);
      }
      return null;
    }
    _(Kl, "createDefaultValue");
    function xo(e, t, r) {
      let { description: n, required: o, defaultValue: i } = r;
      return {
        name: e,
        type: zl(t),
        required: o,
        description: n,
        defaultValue: Kl(i, t),
      };
    }
    _(xo, "createBasicPropDef");
    function ur(e, t) {
      if (t?.includesJsDoc) {
        let { description: r, extractedTags: n } = t;
        r != null && (e.description = t.description);
        let o = {
          ...n,
          params: n?.params?.map((i) => ({
            name: i.getPrettyName(),
            description: i.description,
          })),
        };
        Object.values(o).filter(Boolean).length > 0 && (e.jsDocTags = o);
      }
      return e;
    }
    _(ur, "applyJsDocResult");
    var kf = _((e, t, r) => {
        let n = xo(e, t.type, t);
        return (n.sbType = go(t)), ur(n, r);
      }, "javaScriptFactory"),
      Rf = _((e, t, r) => {
        let n = If(e, t);
        return (n.sbType = go(t)), ur(n, r);
      }, "tsFactory"),
      Of = _((e, t, r) => {
        let n = Ff(e, t);
        return (n.sbType = go(t)), ur(n, r);
      }, "flowFactory"),
      _f = _((e, t, r) => {
        let n = xo(e, { name: "unknown" }, t);
        return ur(n, r);
      }, "unknownFactory"),
      Yl = _((e) => {
        switch (e) {
          case "JavaScript":
            return kf;
          case "TypeScript":
            return Rf;
          case "Flow":
            return Of;
          default:
            return _f;
        }
      }, "getPropDefFactory"),
      Xl = _(
        (e) =>
          e.type != null
            ? "JavaScript"
            : e.flowType != null
              ? "Flow"
              : e.tsType != null
                ? "TypeScript"
                : "Unknown",
        "getTypeSystem",
      ),
      Pf = _((e) => {
        let t = Xl(e[0]),
          r = Yl(t);
        return e.map((n) => {
          let o = n;
          return (
            n.type?.elements &&
              (o = { ...n, type: { ...n.type, value: n.type.elements } }),
            To(o.name, o, t, r)
          );
        });
      }, "extractComponentSectionArray"),
      Bf = _((e) => {
        let t = Object.keys(e),
          r = Xl(e[t[0]]),
          n = Yl(r);
        return t
          .map((o) => {
            let i = e[o];
            return i != null ? To(o, i, r, n) : null;
          })
          .filter(Boolean);
      }, "extractComponentSectionObject"),
      Cv = _((e, t) => {
        let r = sl(e, t);
        return il(r) ? (Array.isArray(r) ? Pf(r) : Bf(r)) : [];
      }, "extractComponentProps");
    function To(e, t, r, n) {
      let o = xf(t.description);
      return o.includesJsDoc && o.ignore
        ? null
        : {
            propDef: n(e, t, o),
            jsDocTags: o.extractedTags,
            docgenInfo: t,
            typeSystem: r,
          };
    }
    _(To, "extractProp");
    function Nf(e) {
      return e != null ? ll(e) : "";
    }
    _(Nf, "extractComponentDescription");
    var Tv = _((e) => {
        let {
            component: t,
            argTypes: r,
            parameters: { docs: n = {} },
          } = e,
          { extractArgTypes: o } = n,
          i = o && t ? o(t) : {};
        return i ? Ke(i, r) : r;
      }, "enhanceArgTypes"),
      Hr = "storybook/docs",
      Ql = `${Hr}/panel`,
      Fo = "docs",
      Io = `${Hr}/snippet-rendered`,
      cr = ((e) => (
        (e.AUTO = "auto"), (e.CODE = "code"), (e.DYNAMIC = "dynamic"), e
      ))(cr || {}),
      jf = /(addons\/|addon-|addon-essentials\/)(docs|controls)/,
      Fv = _(
        (e) => e.presetsList?.some((t) => jf.test(t.name)),
        "hasDocsOrControls",
      );
    V();
    J();
    H();
    var Lv = __STORYBOOK_API__,
      {
        ActiveTabs: Mv,
        Consumer: Uv,
        ManagerContext: $v,
        Provider: qv,
        RequestResponseError: Vv,
        addons: ko,
        combineParameters: Jv,
        controlOrMetaKey: Hv,
        controlOrMetaSymbol: zv,
        eventMatchesShortcut: Gv,
        eventToShortcut: Wv,
        experimental_MockUniversalStore: Kv,
        experimental_UniversalStore: Yv,
        experimental_requestResponse: Xv,
        experimental_useUniversalStore: Qv,
        isMacLike: Zv,
        isShortcutTaken: eA,
        keyToSymbol: tA,
        merge: rA,
        mockChannel: nA,
        optionOrAltSymbol: oA,
        shortcutMatchesShortcut: aA,
        shortcutToHumanString: iA,
        types: Zl,
        useAddonState: sA,
        useArgTypes: lA,
        useArgs: uA,
        useChannel: eu,
        useGlobalTypes: cA,
        useGlobals: dA,
        useParameter: tu,
        useSharedState: pA,
        useStoryPrepared: hA,
        useStorybookApi: fA,
        useStorybookState: mA,
      } = __STORYBOOK_API__;
    Wr();
    V();
    J();
    H();
    _o();
    Xt();
    Xt();
    Qt();
    Wr();
    Po();
    V();
    J();
    H();
    var dx = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Yf,
        logger: Xf,
        once: Qf,
        pretty: px,
      } = __STORYBOOK_CLIENT_LOGGER__;
    V();
    J();
    H();
    V();
    J();
    H();
    V();
    J();
    H();
    V();
    J();
    H();
    V();
    J();
    H();
    var Nx = __STORYBOOK_CHANNELS__,
      {
        Channel: Zf,
        HEARTBEAT_INTERVAL: jx,
        HEARTBEAT_MAX_LATENCY: Lx,
        PostMessageTransport: Mx,
        WebsocketTransport: Ux,
        createBrowserChannel: $x,
      } = __STORYBOOK_CHANNELS__;
    var Hu = Oe({
        "../../node_modules/memoizerific/memoizerific.js"(e, t) {
          (function (r) {
            if (typeof e == "object" && typeof t < "u") t.exports = r();
            else if (typeof define == "function" && define.amd) define([], r);
            else {
              var n;
              typeof window < "u" || typeof window < "u"
                ? (n = window)
                : typeof self < "u"
                  ? (n = self)
                  : (n = this),
                (n.memoizerific = r());
            }
          })(function () {
            return (function r(n, o, i) {
              function a(c, d) {
                if (!o[c]) {
                  if (!n[c]) {
                    var p = typeof dr == "function" && dr;
                    if (!d && p) return p(c, !0);
                    if (l) return l(c, !0);
                    var h = new Error("Cannot find module '" + c + "'");
                    throw ((h.code = "MODULE_NOT_FOUND"), h);
                  }
                  var y = (o[c] = { exports: {} });
                  n[c][0].call(
                    y.exports,
                    function (E) {
                      var v = n[c][1][E];
                      return a(v || E);
                    },
                    y,
                    y.exports,
                    r,
                    n,
                    o,
                    i,
                  );
                }
                return o[c].exports;
              }
              for (
                var l = typeof dr == "function" && dr, u = 0;
                u < i.length;
                u++
              )
                a(i[u]);
              return a;
            })(
              {
                1: [
                  function (r, n, o) {
                    n.exports = function (i) {
                      if (typeof Map != "function" || i) {
                        var a = r("./similar");
                        return new a();
                      } else return new Map();
                    };
                  },
                  { "./similar": 2 },
                ],
                2: [
                  function (r, n, o) {
                    function i() {
                      return (
                        (this.list = []),
                        (this.lastItem = void 0),
                        (this.size = 0),
                        this
                      );
                    }
                    (i.prototype.get = function (a) {
                      var l;
                      if (this.lastItem && this.isEqual(this.lastItem.key, a))
                        return this.lastItem.val;
                      if (((l = this.indexOf(a)), l >= 0))
                        return (this.lastItem = this.list[l]), this.list[l].val;
                    }),
                      (i.prototype.set = function (a, l) {
                        var u;
                        return this.lastItem &&
                          this.isEqual(this.lastItem.key, a)
                          ? ((this.lastItem.val = l), this)
                          : ((u = this.indexOf(a)),
                            u >= 0
                              ? ((this.lastItem = this.list[u]),
                                (this.list[u].val = l),
                                this)
                              : ((this.lastItem = { key: a, val: l }),
                                this.list.push(this.lastItem),
                                this.size++,
                                this));
                      }),
                      (i.prototype.delete = function (a) {
                        var l;
                        if (
                          (this.lastItem &&
                            this.isEqual(this.lastItem.key, a) &&
                            (this.lastItem = void 0),
                          (l = this.indexOf(a)),
                          l >= 0)
                        )
                          return this.size--, this.list.splice(l, 1)[0];
                      }),
                      (i.prototype.has = function (a) {
                        var l;
                        return this.lastItem &&
                          this.isEqual(this.lastItem.key, a)
                          ? !0
                          : ((l = this.indexOf(a)),
                            l >= 0 ? ((this.lastItem = this.list[l]), !0) : !1);
                      }),
                      (i.prototype.forEach = function (a, l) {
                        var u;
                        for (u = 0; u < this.size; u++)
                          a.call(
                            l || this,
                            this.list[u].val,
                            this.list[u].key,
                            this,
                          );
                      }),
                      (i.prototype.indexOf = function (a) {
                        var l;
                        for (l = 0; l < this.size; l++)
                          if (this.isEqual(this.list[l].key, a)) return l;
                        return -1;
                      }),
                      (i.prototype.isEqual = function (a, l) {
                        return a === l || (a !== a && l !== l);
                      }),
                      (n.exports = i);
                  },
                  {},
                ],
                3: [
                  function (r, n, o) {
                    var i = r("map-or-similar");
                    n.exports = function (c) {
                      var d = new i(!1),
                        p = [];
                      return function (h) {
                        var y = function () {
                          var E = d,
                            v,
                            A,
                            D = arguments.length - 1,
                            S = Array(D + 1),
                            F = !0,
                            x;
                          if (
                            (y.numArgs || y.numArgs === 0) &&
                            y.numArgs !== D + 1
                          )
                            throw new Error(
                              "Memoizerific functions should always be called with the same number of arguments",
                            );
                          for (x = 0; x < D; x++) {
                            if (
                              ((S[x] = { cacheItem: E, arg: arguments[x] }),
                              E.has(arguments[x]))
                            ) {
                              E = E.get(arguments[x]);
                              continue;
                            }
                            (F = !1),
                              (v = new i(!1)),
                              E.set(arguments[x], v),
                              (E = v);
                          }
                          return (
                            F &&
                              (E.has(arguments[D])
                                ? (A = E.get(arguments[D]))
                                : (F = !1)),
                            F ||
                              ((A = h.apply(null, arguments)),
                              E.set(arguments[D], A)),
                            c > 0 &&
                              ((S[D] = { cacheItem: E, arg: arguments[D] }),
                              F ? a(p, S) : p.push(S),
                              p.length > c && l(p.shift())),
                            (y.wasMemoized = F),
                            (y.numArgs = D + 1),
                            A
                          );
                        };
                        return (
                          (y.limit = c),
                          (y.wasMemoized = !1),
                          (y.cache = d),
                          (y.lru = p),
                          y
                        );
                      };
                    };
                    function a(c, d) {
                      var p = c.length,
                        h = d.length,
                        y,
                        E,
                        v;
                      for (E = 0; E < p; E++) {
                        for (y = !0, v = 0; v < h; v++)
                          if (!u(c[E][v].arg, d[v].arg)) {
                            y = !1;
                            break;
                          }
                        if (y) break;
                      }
                      c.push(c.splice(E, 1)[0]);
                    }
                    function l(c) {
                      var d = c.length,
                        p = c[d - 1],
                        h,
                        y;
                      for (
                        p.cacheItem.delete(p.arg), y = d - 2;
                        y >= 0 &&
                        ((p = c[y]),
                        (h = p.cacheItem.get(p.arg)),
                        !h || !h.size);
                        y--
                      )
                        p.cacheItem.delete(p.arg);
                    }
                    function u(c, d) {
                      return c === d || (c !== c && d !== d);
                    }
                  },
                  { "map-or-similar": 1 },
                ],
              },
              {},
              [3],
            )(3);
          });
        },
      }),
      Um = Oe({
        "../../node_modules/tocbot/src/js/default-options.js"(e, t) {
          t.exports = {
            tocSelector: ".js-toc",
            contentSelector: ".js-toc-content",
            headingSelector: "h1, h2, h3",
            ignoreSelector: ".js-toc-ignore",
            hasInnerContainers: !1,
            linkClass: "toc-link",
            extraLinkClasses: "",
            activeLinkClass: "is-active-link",
            listClass: "toc-list",
            extraListClasses: "",
            isCollapsedClass: "is-collapsed",
            collapsibleClass: "is-collapsible",
            listItemClass: "toc-list-item",
            activeListItemClass: "is-active-li",
            collapseDepth: 0,
            scrollSmooth: !0,
            scrollSmoothDuration: 420,
            scrollSmoothOffset: 0,
            scrollEndCallback: function (r) {},
            headingsOffset: 1,
            throttleTimeout: 50,
            positionFixedSelector: null,
            positionFixedClass: "is-position-fixed",
            fixedSidebarOffset: "auto",
            includeHtml: !1,
            includeTitleTags: !1,
            onClick: function (r) {},
            orderedList: !0,
            scrollContainer: null,
            skipRendering: !1,
            headingLabelCallback: !1,
            ignoreHiddenElements: !1,
            headingObjectCallback: null,
            basePath: "",
            disableTocScrollSync: !1,
            tocScrollOffset: 0,
          };
        },
      }),
      $m = Oe({
        "../../node_modules/tocbot/src/js/build-html.js"(e, t) {
          t.exports = function (r) {
            var n = [].forEach,
              o = [].some,
              i = document.body,
              a,
              l = !0,
              u = " ";
            function c(x, O) {
              var R = O.appendChild(p(x));
              if (x.children.length) {
                var N = h(x.isCollapsed);
                x.children.forEach(function (j) {
                  c(j, N);
                }),
                  R.appendChild(N);
              }
            }
            function d(x, O) {
              var R = !1,
                N = h(R);
              if (
                (O.forEach(function (j) {
                  c(j, N);
                }),
                (a = x || a),
                a !== null)
              )
                return (
                  a.firstChild && a.removeChild(a.firstChild),
                  O.length === 0 ? a : a.appendChild(N)
                );
            }
            function p(x) {
              var O = document.createElement("li"),
                R = document.createElement("a");
              return (
                r.listItemClass && O.setAttribute("class", r.listItemClass),
                r.onClick && (R.onclick = r.onClick),
                r.includeTitleTags && R.setAttribute("title", x.textContent),
                r.includeHtml && x.childNodes.length
                  ? n.call(x.childNodes, function (N) {
                      R.appendChild(N.cloneNode(!0));
                    })
                  : (R.textContent = x.textContent),
                R.setAttribute("href", r.basePath + "#" + x.id),
                R.setAttribute(
                  "class",
                  r.linkClass +
                    u +
                    "node-name--" +
                    x.nodeName +
                    u +
                    r.extraLinkClasses,
                ),
                O.appendChild(R),
                O
              );
            }
            function h(x) {
              var O = r.orderedList ? "ol" : "ul",
                R = document.createElement(O),
                N = r.listClass + u + r.extraListClasses;
              return (
                x &&
                  ((N = N + u + r.collapsibleClass),
                  (N = N + u + r.isCollapsedClass)),
                R.setAttribute("class", N),
                R
              );
            }
            function y() {
              if (
                r.scrollContainer &&
                document.querySelector(r.scrollContainer)
              ) {
                var x;
                x = document.querySelector(r.scrollContainer).scrollTop;
              } else x = document.documentElement.scrollTop || i.scrollTop;
              var O = document.querySelector(r.positionFixedSelector);
              r.fixedSidebarOffset === "auto" &&
                (r.fixedSidebarOffset = a.offsetTop),
                x > r.fixedSidebarOffset
                  ? O.className.indexOf(r.positionFixedClass) === -1 &&
                    (O.className += u + r.positionFixedClass)
                  : (O.className = O.className.replace(
                      u + r.positionFixedClass,
                      "",
                    ));
            }
            function E(x) {
              var O = 0;
              return (
                x !== null &&
                  ((O = x.offsetTop),
                  r.hasInnerContainers && (O += E(x.offsetParent))),
                O
              );
            }
            function v(x, O) {
              return x && x.className !== O && (x.className = O), x;
            }
            function A(x) {
              if (
                r.scrollContainer &&
                document.querySelector(r.scrollContainer)
              ) {
                var O;
                O = document.querySelector(r.scrollContainer).scrollTop;
              } else O = document.documentElement.scrollTop || i.scrollTop;
              r.positionFixedSelector && y();
              var R = x,
                N;
              if (l && a !== null && R.length > 0) {
                o.call(R, function (b, w) {
                  if (E(b) > O + r.headingsOffset + 10) {
                    var I = w === 0 ? w : w - 1;
                    return (N = R[I]), !0;
                  } else if (w === R.length - 1)
                    return (N = R[R.length - 1]), !0;
                });
                var j = a.querySelector("." + r.activeLinkClass),
                  U = a.querySelector(
                    "." +
                      r.linkClass +
                      ".node-name--" +
                      N.nodeName +
                      '[href="' +
                      r.basePath +
                      "#" +
                      N.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") +
                      '"]',
                  );
                if (j === U) return;
                var P = a.querySelectorAll("." + r.linkClass);
                n.call(P, function (b) {
                  v(b, b.className.replace(u + r.activeLinkClass, ""));
                });
                var K = a.querySelectorAll("." + r.listItemClass);
                n.call(K, function (b) {
                  v(b, b.className.replace(u + r.activeListItemClass, ""));
                }),
                  U &&
                    U.className.indexOf(r.activeLinkClass) === -1 &&
                    (U.className += u + r.activeLinkClass);
                var L = U && U.parentNode;
                L &&
                  L.className.indexOf(r.activeListItemClass) === -1 &&
                  (L.className += u + r.activeListItemClass);
                var z = a.querySelectorAll(
                  "." + r.listClass + "." + r.collapsibleClass,
                );
                n.call(z, function (b) {
                  b.className.indexOf(r.isCollapsedClass) === -1 &&
                    (b.className += u + r.isCollapsedClass);
                }),
                  U &&
                    U.nextSibling &&
                    U.nextSibling.className.indexOf(r.isCollapsedClass) !==
                      -1 &&
                    v(
                      U.nextSibling,
                      U.nextSibling.className.replace(
                        u + r.isCollapsedClass,
                        "",
                      ),
                    ),
                  D(U && U.parentNode.parentNode);
              }
            }
            function D(x) {
              return x &&
                x.className.indexOf(r.collapsibleClass) !== -1 &&
                x.className.indexOf(r.isCollapsedClass) !== -1
                ? (v(x, x.className.replace(u + r.isCollapsedClass, "")),
                  D(x.parentNode.parentNode))
                : x;
            }
            function S(x) {
              var O = x.target || x.srcElement;
              typeof O.className != "string" ||
                O.className.indexOf(r.linkClass) === -1 ||
                (l = !1);
            }
            function F() {
              l = !0;
            }
            return {
              enableTocAnimation: F,
              disableTocAnimation: S,
              render: d,
              updateToc: A,
            };
          };
        },
      }),
      qm = Oe({
        "../../node_modules/tocbot/src/js/parse-content.js"(e, t) {
          t.exports = function (r) {
            var n = [].reduce;
            function o(p) {
              return p[p.length - 1];
            }
            function i(p) {
              return +p.nodeName.toUpperCase().replace("H", "");
            }
            function a(p) {
              try {
                return (
                  p instanceof window.HTMLElement ||
                  p instanceof window.parent.HTMLElement
                );
              } catch {
                return p instanceof window.HTMLElement;
              }
            }
            function l(p) {
              if (!a(p)) return p;
              if (
                r.ignoreHiddenElements &&
                (!p.offsetHeight || !p.offsetParent)
              )
                return null;
              let h =
                p.getAttribute("data-heading-label") ||
                (r.headingLabelCallback
                  ? String(r.headingLabelCallback(p.innerText))
                  : (p.innerText || p.textContent).trim());
              var y = {
                id: p.id,
                children: [],
                nodeName: p.nodeName,
                headingLevel: i(p),
                textContent: h,
              };
              return (
                r.includeHtml && (y.childNodes = p.childNodes),
                r.headingObjectCallback ? r.headingObjectCallback(y, p) : y
              );
            }
            function u(p, h) {
              for (
                var y = l(p),
                  E = y.headingLevel,
                  v = h,
                  A = o(v),
                  D = A ? A.headingLevel : 0,
                  S = E - D;
                S > 0 && ((A = o(v)), !(A && E === A.headingLevel));

              )
                A && A.children !== void 0 && (v = A.children), S--;
              return E >= r.collapseDepth && (y.isCollapsed = !0), v.push(y), v;
            }
            function c(p, h) {
              var y = h;
              r.ignoreSelector &&
                (y = h.split(",").map(function (E) {
                  return E.trim() + ":not(" + r.ignoreSelector + ")";
                }));
              try {
                return p.querySelectorAll(y);
              } catch {
                return (
                  console.warn("Headers not found with selector: " + y), null
                );
              }
            }
            function d(p) {
              return n.call(
                p,
                function (h, y) {
                  var E = l(y);
                  return E && u(E, h.nest), h;
                },
                { nest: [] },
              );
            }
            return { nestHeadingsArray: d, selectHeadings: c };
          };
        },
      }),
      Vm = Oe({
        "../../node_modules/tocbot/src/js/update-toc-scroll.js"(e, t) {
          t.exports = function (r) {
            var n = r.tocElement || document.querySelector(r.tocSelector);
            if (n && n.scrollHeight > n.clientHeight) {
              var o = n.querySelector("." + r.activeListItemClass);
              o && (n.scrollTop = o.offsetTop - r.tocScrollOffset);
            }
          };
        },
      }),
      Jm = Oe({
        "../../node_modules/tocbot/src/js/scroll-smooth/index.js"(e) {
          e.initSmoothScrolling = t;
          function t(n) {
            var o = n.duration,
              i = n.offset,
              a = location.hash ? c(location.href) : location.href;
            l();
            function l() {
              document.body.addEventListener("click", p, !1);
              function p(h) {
                !u(h.target) ||
                  h.target.className.indexOf("no-smooth-scroll") > -1 ||
                  (h.target.href.charAt(h.target.href.length - 2) === "#" &&
                    h.target.href.charAt(h.target.href.length - 1) === "!") ||
                  h.target.className.indexOf(n.linkClass) === -1 ||
                  r(h.target.hash, {
                    duration: o,
                    offset: i,
                    callback: function () {
                      d(h.target.hash);
                    },
                  });
              }
            }
            function u(p) {
              return (
                p.tagName.toLowerCase() === "a" &&
                (p.hash.length > 0 ||
                  p.href.charAt(p.href.length - 1) === "#") &&
                (c(p.href) === a || c(p.href) + "#" === a)
              );
            }
            function c(p) {
              return p.slice(0, p.lastIndexOf("#"));
            }
            function d(p) {
              var h = document.getElementById(p.substring(1));
              h &&
                (/^(?:a|select|input|button|textarea)$/i.test(h.tagName) ||
                  (h.tabIndex = -1),
                h.focus());
            }
          }
          function r(n, o) {
            var i = window.pageYOffset,
              a = {
                duration: o.duration,
                offset: o.offset || 0,
                callback: o.callback,
                easing: o.easing || E,
              },
              l =
                document.querySelector(
                  '[id="' + decodeURI(n).split("#").join("") + '"]',
                ) ||
                document.querySelector('[id="' + n.split("#").join("") + '"]'),
              u =
                typeof n == "string"
                  ? a.offset +
                    (n
                      ? (l && l.getBoundingClientRect().top) || 0
                      : -(
                          document.documentElement.scrollTop ||
                          document.body.scrollTop
                        ))
                  : n,
              c = typeof a.duration == "function" ? a.duration(u) : a.duration,
              d,
              p;
            requestAnimationFrame(function (v) {
              (d = v), h(v);
            });
            function h(v) {
              (p = v - d),
                window.scrollTo(0, a.easing(p, i, u, c)),
                p < c ? requestAnimationFrame(h) : y();
            }
            function y() {
              window.scrollTo(0, i + u),
                typeof a.callback == "function" && a.callback();
            }
            function E(v, A, D, S) {
              return (
                (v /= S / 2),
                v < 1
                  ? (D / 2) * v * v + A
                  : (v--, (-D / 2) * (v * (v - 2) - 1) + A)
              );
            }
          }
        },
      }),
      Hm = Oe({
        "../../node_modules/tocbot/src/js/index.js"(e, t) {
          (function (r, n) {
            typeof define == "function" && define.amd
              ? define([], n(r))
              : typeof e == "object"
                ? (t.exports = n(r))
                : (r.tocbot = n(r));
          })(typeof window < "u" ? window : window || window, function (r) {
            var n = Um(),
              o = {},
              i = {},
              a = $m(),
              l = qm(),
              u = Vm(),
              c,
              d,
              p =
                !!r &&
                !!r.document &&
                !!r.document.querySelector &&
                !!r.addEventListener;
            if (typeof window > "u" && !p) return;
            var h,
              y = Object.prototype.hasOwnProperty;
            function E() {
              for (var S = {}, F = 0; F < arguments.length; F++) {
                var x = arguments[F];
                for (var O in x) y.call(x, O) && (S[O] = x[O]);
              }
              return S;
            }
            function v(S, F, x) {
              F || (F = 250);
              var O, R;
              return function () {
                var N = x || this,
                  j = +new Date(),
                  U = arguments;
                O && j < O + F
                  ? (clearTimeout(R),
                    (R = setTimeout(function () {
                      (O = j), S.apply(N, U);
                    }, F)))
                  : ((O = j), S.apply(N, U));
              };
            }
            function A(S) {
              try {
                return (
                  S.contentElement || document.querySelector(S.contentSelector)
                );
              } catch {
                return (
                  console.warn(
                    "Contents element not found: " + S.contentSelector,
                  ),
                  null
                );
              }
            }
            function D(S) {
              try {
                return S.tocElement || document.querySelector(S.tocSelector);
              } catch {
                return (
                  console.warn("TOC element not found: " + S.tocSelector), null
                );
              }
            }
            return (
              (i.destroy = function () {
                var S = D(o);
                S !== null &&
                  (o.skipRendering || (S && (S.innerHTML = "")),
                  o.scrollContainer && document.querySelector(o.scrollContainer)
                    ? (document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          "scroll",
                          this._scrollListener,
                          !1,
                        ),
                      document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          "resize",
                          this._scrollListener,
                          !1,
                        ),
                      c &&
                        document
                          .querySelector(o.scrollContainer)
                          .removeEventListener(
                            "click",
                            this._clickListener,
                            !1,
                          ))
                    : (document.removeEventListener(
                        "scroll",
                        this._scrollListener,
                        !1,
                      ),
                      document.removeEventListener(
                        "resize",
                        this._scrollListener,
                        !1,
                      ),
                      c &&
                        document.removeEventListener(
                          "click",
                          this._clickListener,
                          !1,
                        )));
              }),
              (i.init = function (S) {
                if (p) {
                  (o = E(n, S || {})),
                    (this.options = o),
                    (this.state = {}),
                    o.scrollSmooth &&
                      ((o.duration = o.scrollSmoothDuration),
                      (o.offset = o.scrollSmoothOffset),
                      (i.scrollSmooth = Jm().initSmoothScrolling(o))),
                    (c = a(o)),
                    (d = l(o)),
                    (this._buildHtml = c),
                    (this._parseContent = d),
                    (this._headingsArray = h),
                    i.destroy();
                  var F = A(o);
                  if (F !== null) {
                    var x = D(o);
                    if (
                      x !== null &&
                      ((h = d.selectHeadings(F, o.headingSelector)), h !== null)
                    ) {
                      var O = d.nestHeadingsArray(h),
                        R = O.nest;
                      if (!o.skipRendering) c.render(x, R);
                      else return this;
                      (this._scrollListener = v(function (j) {
                        c.updateToc(h), !o.disableTocScrollSync && u(o);
                        var U =
                          j &&
                          j.target &&
                          j.target.scrollingElement &&
                          j.target.scrollingElement.scrollTop === 0;
                        ((j &&
                          (j.eventPhase === 0 || j.currentTarget === null)) ||
                          U) &&
                          (c.updateToc(h),
                          o.scrollEndCallback && o.scrollEndCallback(j));
                      }, o.throttleTimeout)),
                        this._scrollListener(),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? (document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                "scroll",
                                this._scrollListener,
                                !1,
                              ),
                            document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                "resize",
                                this._scrollListener,
                                !1,
                              ))
                          : (document.addEventListener(
                              "scroll",
                              this._scrollListener,
                              !1,
                            ),
                            document.addEventListener(
                              "resize",
                              this._scrollListener,
                              !1,
                            ));
                      var N = null;
                      return (
                        (this._clickListener = v(function (j) {
                          o.scrollSmooth && c.disableTocAnimation(j),
                            c.updateToc(h),
                            N && clearTimeout(N),
                            (N = setTimeout(function () {
                              c.enableTocAnimation();
                            }, o.scrollSmoothDuration));
                        }, o.throttleTimeout)),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                "click",
                                this._clickListener,
                                !1,
                              )
                          : document.addEventListener(
                              "click",
                              this._clickListener,
                              !1,
                            ),
                        this
                      );
                    }
                  }
                }
              }),
              (i.refresh = function (S) {
                i.destroy(), i.init(S || this.options);
              }),
              (r.tocbot = i),
              i
            );
          });
        },
      });
    function Ut() {
      return (
        (Ut = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        Ut.apply(null, arguments)
      );
    }
    function zm(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function mr(e, t) {
      return (
        (mr = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return (r.__proto__ = n), r;
            }),
        mr(e, t)
      );
    }
    function Gm(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        mr(e, t);
    }
    function Go(e) {
      return (
        (Go = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        Go(e)
      );
    }
    function Wm(e) {
      try {
        return Function.toString.call(e).indexOf("[native code]") !== -1;
      } catch {
        return typeof e == "function";
      }
    }
    function zu() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return (zu = function () {
        return !!e;
      })();
    }
    function Km(e, t, r) {
      if (zu()) return Reflect.construct.apply(null, arguments);
      var n = [null];
      n.push.apply(n, t);
      var o = new (e.bind.apply(e, n))();
      return r && mr(o, r.prototype), o;
    }
    function Wo(e) {
      var t = typeof Map == "function" ? new Map() : void 0;
      return (
        (Wo = function (r) {
          if (r === null || !Wm(r)) return r;
          if (typeof r != "function")
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          if (t !== void 0) {
            if (t.has(r)) return t.get(r);
            t.set(r, n);
          }
          function n() {
            return Km(r, arguments, Go(this).constructor);
          }
          return (
            (n.prototype = Object.create(r.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            mr(n, r)
          );
        }),
        Wo(e)
      );
    }
    var Ve = (function (e) {
      Gm(t, e);
      function t(r) {
        var n;
        if (1)
          n =
            e.call(
              this,
              "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                r +
                " for more information.",
            ) || this;
        else for (var o, i, a; a < o; a++);
        return zm(n);
      }
      return t;
    })(Wo(Error));
    function Vo(e) {
      return Math.round(e * 255);
    }
    function Ym(e, t, r) {
      return Vo(e) + "," + Vo(t) + "," + Vo(r);
    }
    function yr(e, t, r, n) {
      if ((n === void 0 && (n = Ym), t === 0)) return n(r, r, r);
      var o = (((e % 360) + 360) % 360) / 60,
        i = (1 - Math.abs(2 * r - 1)) * t,
        a = i * (1 - Math.abs((o % 2) - 1)),
        l = 0,
        u = 0,
        c = 0;
      o >= 0 && o < 1
        ? ((l = i), (u = a))
        : o >= 1 && o < 2
          ? ((l = a), (u = i))
          : o >= 2 && o < 3
            ? ((u = i), (c = a))
            : o >= 3 && o < 4
              ? ((u = a), (c = i))
              : o >= 4 && o < 5
                ? ((l = a), (c = i))
                : o >= 5 && o < 6 && ((l = i), (c = a));
      var d = r - i / 2,
        p = l + d,
        h = u + d,
        y = c + d;
      return n(p, h, y);
    }
    var Lu = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "639",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32",
    };
    function Xm(e) {
      if (typeof e != "string") return e;
      var t = e.toLowerCase();
      return Lu[t] ? "#" + Lu[t] : e;
    }
    var Qm = /^#[a-fA-F0-9]{6}$/,
      Zm = /^#[a-fA-F0-9]{8}$/,
      ey = /^#[a-fA-F0-9]{3}$/,
      ty = /^#[a-fA-F0-9]{4}$/,
      Jo =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      ry =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      ny =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      oy =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function nn(e) {
      if (typeof e != "string") throw new Ve(3);
      var t = Xm(e);
      if (t.match(Qm))
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
        };
      if (t.match(Zm)) {
        var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
          alpha: r,
        };
      }
      if (t.match(ey))
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
        };
      if (t.match(ty)) {
        var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
          alpha: n,
        };
      }
      var o = Jo.exec(t);
      if (o)
        return {
          red: parseInt("" + o[1], 10),
          green: parseInt("" + o[2], 10),
          blue: parseInt("" + o[3], 10),
        };
      var i = ry.exec(t.substring(0, 50));
      if (i)
        return {
          red: parseInt("" + i[1], 10),
          green: parseInt("" + i[2], 10),
          blue: parseInt("" + i[3], 10),
          alpha:
            parseFloat("" + i[4]) > 1
              ? parseFloat("" + i[4]) / 100
              : parseFloat("" + i[4]),
        };
      var a = ny.exec(t);
      if (a) {
        var l = parseInt("" + a[1], 10),
          u = parseInt("" + a[2], 10) / 100,
          c = parseInt("" + a[3], 10) / 100,
          d = "rgb(" + yr(l, u, c) + ")",
          p = Jo.exec(d);
        if (!p) throw new Ve(4, t, d);
        return {
          red: parseInt("" + p[1], 10),
          green: parseInt("" + p[2], 10),
          blue: parseInt("" + p[3], 10),
        };
      }
      var h = oy.exec(t.substring(0, 50));
      if (h) {
        var y = parseInt("" + h[1], 10),
          E = parseInt("" + h[2], 10) / 100,
          v = parseInt("" + h[3], 10) / 100,
          A = "rgb(" + yr(y, E, v) + ")",
          D = Jo.exec(A);
        if (!D) throw new Ve(4, t, A);
        return {
          red: parseInt("" + D[1], 10),
          green: parseInt("" + D[2], 10),
          blue: parseInt("" + D[3], 10),
          alpha:
            parseFloat("" + h[4]) > 1
              ? parseFloat("" + h[4]) / 100
              : parseFloat("" + h[4]),
        };
      }
      throw new Ve(5);
    }
    function ay(e) {
      var t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        o = Math.max(t, r, n),
        i = Math.min(t, r, n),
        a = (o + i) / 2;
      if (o === i)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: a, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: a };
      var l,
        u = o - i,
        c = a > 0.5 ? u / (2 - o - i) : u / (o + i);
      switch (o) {
        case t:
          l = (r - n) / u + (r < n ? 6 : 0);
          break;
        case r:
          l = (n - t) / u + 2;
          break;
        default:
          l = (t - r) / u + 4;
          break;
      }
      return (
        (l *= 60),
        e.alpha !== void 0
          ? { hue: l, saturation: c, lightness: a, alpha: e.alpha }
          : { hue: l, saturation: c, lightness: a }
      );
    }
    function Gu(e) {
      return ay(nn(e));
    }
    var iy = function (e) {
        return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? "#" + e[1] + e[3] + e[5]
          : e;
      },
      Ko = iy;
    function Dt(e) {
      var t = e.toString(16);
      return t.length === 1 ? "0" + t : t;
    }
    function Ho(e) {
      return Dt(Math.round(e * 255));
    }
    function sy(e, t, r) {
      return Ko("#" + Ho(e) + Ho(t) + Ho(r));
    }
    function rn(e, t, r) {
      return yr(e, t, r, sy);
    }
    function ly(e, t, r) {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number")
        return rn(e, t, r);
      if (typeof e == "object" && t === void 0 && r === void 0)
        return rn(e.hue, e.saturation, e.lightness);
      throw new Ve(1);
    }
    function uy(e, t, r, n) {
      if (
        typeof e == "number" &&
        typeof t == "number" &&
        typeof r == "number" &&
        typeof n == "number"
      )
        return n >= 1 ? rn(e, t, r) : "rgba(" + yr(e, t, r) + "," + n + ")";
      if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? rn(e.hue, e.saturation, e.lightness)
          : "rgba(" +
              yr(e.hue, e.saturation, e.lightness) +
              "," +
              e.alpha +
              ")";
      throw new Ve(2);
    }
    function Yo(e, t, r) {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number")
        return Ko("#" + Dt(e) + Dt(t) + Dt(r));
      if (typeof e == "object" && t === void 0 && r === void 0)
        return Ko("#" + Dt(e.red) + Dt(e.green) + Dt(e.blue));
      throw new Ve(6);
    }
    function Ye(e, t, r, n) {
      if (typeof e == "string" && typeof t == "number") {
        var o = nn(e);
        return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
      } else {
        if (
          typeof e == "number" &&
          typeof t == "number" &&
          typeof r == "number" &&
          typeof n == "number"
        )
          return n >= 1
            ? Yo(e, t, r)
            : "rgba(" + e + "," + t + "," + r + "," + n + ")";
        if (
          typeof e == "object" &&
          t === void 0 &&
          r === void 0 &&
          n === void 0
        )
          return e.alpha >= 1
            ? Yo(e.red, e.green, e.blue)
            : "rgba(" +
                e.red +
                "," +
                e.green +
                "," +
                e.blue +
                "," +
                e.alpha +
                ")";
      }
      throw new Ve(7);
    }
    var cy = function (e) {
        return (
          typeof e.red == "number" &&
          typeof e.green == "number" &&
          typeof e.blue == "number" &&
          (typeof e.alpha != "number" || typeof e.alpha > "u")
        );
      },
      dy = function (e) {
        return (
          typeof e.red == "number" &&
          typeof e.green == "number" &&
          typeof e.blue == "number" &&
          typeof e.alpha == "number"
        );
      },
      py = function (e) {
        return (
          typeof e.hue == "number" &&
          typeof e.saturation == "number" &&
          typeof e.lightness == "number" &&
          (typeof e.alpha != "number" || typeof e.alpha > "u")
        );
      },
      hy = function (e) {
        return (
          typeof e.hue == "number" &&
          typeof e.saturation == "number" &&
          typeof e.lightness == "number" &&
          typeof e.alpha == "number"
        );
      };
    function Wu(e) {
      if (typeof e != "object") throw new Ve(8);
      if (dy(e)) return Ye(e);
      if (cy(e)) return Yo(e);
      if (hy(e)) return uy(e);
      if (py(e)) return ly(e);
      throw new Ve(8);
    }
    function Ku(e, t, r) {
      return function () {
        var n = r.concat(Array.prototype.slice.call(arguments));
        return n.length >= t ? e.apply(this, n) : Ku(e, t, n);
      };
    }
    function on(e) {
      return Ku(e, e.length, []);
    }
    function an(e, t, r) {
      return Math.max(e, Math.min(t, r));
    }
    function fy(e, t) {
      if (t === "transparent") return t;
      var r = Gu(t);
      return Wu(
        Ut({}, r, { lightness: an(0, 1, r.lightness - parseFloat(e)) }),
      );
    }
    var my = on(fy),
      qe = my;
    function yy(e, t) {
      if (t === "transparent") return t;
      var r = Gu(t);
      return Wu(
        Ut({}, r, { lightness: an(0, 1, r.lightness + parseFloat(e)) }),
      );
    }
    var gy = on(yy),
      St = gy;
    function by(e, t) {
      if (t === "transparent") return t;
      var r = nn(t),
        n = typeof r.alpha == "number" ? r.alpha : 1,
        o = Ut({}, r, {
          alpha: an(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
        });
      return Ye(o);
    }
    var Ey = on(by),
      en = Ey;
    function vy(e, t) {
      if (t === "transparent") return t;
      var r = nn(t),
        n = typeof r.alpha == "number" ? r.alpha : 1,
        o = Ut({}, r, {
          alpha: an(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
        });
      return Ye(o);
    }
    var Ay = on(vy),
      le = Ay,
      Dy = k.div(Ft, ({ theme: e }) => ({
        backgroundColor:
          e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
        borderRadius: e.appBorderRadius,
        border: `1px dashed ${e.appBorderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        margin: "25px 0 40px",
        color: le(0.3, e.color.defaultText),
        fontSize: e.typography.size.s2,
      })),
      Sy = (e) =>
        C.createElement(Dy, {
          ...e,
          className: "docblock-emptyblock sb-unstyled",
        }),
      wy = k(vn)(({ theme: e }) => ({
        fontSize: `${e.typography.size.s2 - 1}px`,
        lineHeight: "19px",
        margin: "25px 0 40px",
        borderRadius: e.appBorderRadius,
        boxShadow:
          e.base === "light"
            ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
            : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
        "pre.prismjs": { padding: 20, background: "inherit" },
      })),
      Cy = k.div(({ theme: e }) => ({
        background: e.background.content,
        borderRadius: e.appBorderRadius,
        border: `1px solid ${e.appBorderColor}`,
        boxShadow:
          e.base === "light"
            ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
            : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
        margin: "25px 0 40px",
        padding: "20px 20px 20px 22px",
      })),
      tn = k.div(({ theme: e }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        height: 17,
        marginTop: 1,
        width: "60%",
        [`&:first-child${zr}`]: { margin: 0 },
      })),
      xy = () =>
        C.createElement(
          Cy,
          null,
          C.createElement(tn, null),
          C.createElement(tn, { style: { width: "80%" } }),
          C.createElement(tn, { style: { width: "30%" } }),
          C.createElement(tn, { style: { width: "80%" } }),
        ),
      Yu = ({
        isLoading: e,
        error: t,
        language: r,
        code: n,
        dark: o,
        format: i = !1,
        ...a
      }) => {
        let { typography: l } = Gr();
        if (e) return C.createElement(xy, null);
        if (t) return C.createElement(Sy, null, t);
        let u = C.createElement(
          wy,
          {
            bordered: !0,
            copyable: !0,
            format: i,
            language: r,
            className: "docblock-source sb-unstyled",
            ...a,
          },
          n,
        );
        if (typeof o > "u") return u;
        let c = o ? Ro.dark : Ro.light;
        return C.createElement(
          ru,
          {
            theme: nu({ ...c, fontCode: l.fonts.mono, fontBase: l.fonts.base }),
          },
          u,
        );
      },
      ye = (e) =>
        `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
      Qo = 600,
      gT = k.h1(Ft, ({ theme: e }) => ({
        color: e.color.defaultText,
        fontSize: e.typography.size.m3,
        fontWeight: e.typography.weight.bold,
        lineHeight: "32px",
        [`@media (min-width: ${Qo}px)`]: {
          fontSize: e.typography.size.l1,
          lineHeight: "36px",
          marginBottom: "16px",
        },
      })),
      bT = k.h2(Ft, ({ theme: e }) => ({
        fontWeight: e.typography.weight.regular,
        fontSize: e.typography.size.s3,
        lineHeight: "20px",
        borderBottom: "none",
        marginBottom: 15,
        [`@media (min-width: ${Qo}px)`]: {
          fontSize: e.typography.size.m1,
          lineHeight: "28px",
          marginBottom: 24,
        },
        color: le(0.25, e.color.defaultText),
      })),
      ET = k.div(({ theme: e }) => {
        let t = {
            fontFamily: e.typography.fonts.base,
            fontSize: e.typography.size.s3,
            margin: 0,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            WebkitOverflowScrolling: "touch",
          },
          r = {
            margin: "20px 0 8px",
            padding: 0,
            cursor: "text",
            position: "relative",
            color: e.color.defaultText,
            "&:first-of-type": { marginTop: 0, paddingTop: 0 },
            "&:hover a.anchor": { textDecoration: "none" },
            "& code": { fontSize: "inherit" },
          },
          n = {
            lineHeight: 1,
            margin: "0 2px",
            padding: "3px 5px",
            whiteSpace: "nowrap",
            borderRadius: 3,
            fontSize: e.typography.size.s2 - 1,
            border:
              e.base === "light"
                ? `1px solid ${e.color.mediumlight}`
                : `1px solid ${e.color.darker}`,
            color:
              e.base === "light"
                ? le(0.1, e.color.defaultText)
                : le(0.3, e.color.defaultText),
            backgroundColor:
              e.base === "light" ? e.color.lighter : e.color.border,
          };
        return {
          maxWidth: 1e3,
          width: "100%",
          [ye("a")]: {
            ...t,
            fontSize: "inherit",
            lineHeight: "24px",
            color: e.color.secondary,
            textDecoration: "none",
            "&.absent": { color: "#cc0000" },
            "&.anchor": {
              display: "block",
              paddingLeft: 30,
              marginLeft: -30,
              cursor: "pointer",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
            },
          },
          [ye("blockquote")]: {
            ...t,
            margin: "16px 0",
            borderLeft: `4px solid ${e.color.medium}`,
            padding: "0 15px",
            color: e.color.dark,
            "& > :first-of-type": { marginTop: 0 },
            "& > :last-child": { marginBottom: 0 },
          },
          [ye("div")]: t,
          [ye("dl")]: {
            ...t,
            margin: "16px 0",
            padding: 0,
            "& dt": {
              fontSize: "14px",
              fontWeight: "bold",
              fontStyle: "italic",
              padding: 0,
              margin: "16px 0 4px",
            },
            "& dt:first-of-type": { padding: 0 },
            "& dt > :first-of-type": { marginTop: 0 },
            "& dt > :last-child": { marginBottom: 0 },
            "& dd": { margin: "0 0 16px", padding: "0 15px" },
            "& dd > :first-of-type": { marginTop: 0 },
            "& dd > :last-child": { marginBottom: 0 },
          },
          [ye("h1")]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.l1}px`,
            fontWeight: e.typography.weight.bold,
          },
          [ye("h2")]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.m2}px`,
            paddingBottom: 4,
            borderBottom: `1px solid ${e.appBorderColor}`,
          },
          [ye("h3")]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.m1}px`,
            fontWeight: e.typography.weight.bold,
          },
          [ye("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
          [ye("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
          [ye("h6")]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.s2}px`,
            color: e.color.dark,
          },
          [ye("hr")]: {
            border: "0 none",
            borderTop: `1px solid ${e.appBorderColor}`,
            height: 4,
            padding: 0,
          },
          [ye("img")]: { maxWidth: "100%" },
          [ye("li")]: {
            ...t,
            fontSize: e.typography.size.s2,
            color: e.color.defaultText,
            lineHeight: "24px",
            "& + li": { marginTop: ".25em" },
            "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
            "& code": n,
          },
          [ye("ol")]: {
            ...t,
            margin: "16px 0",
            paddingLeft: 30,
            "& :first-of-type": { marginTop: 0 },
            "& :last-child": { marginBottom: 0 },
          },
          [ye("p")]: {
            ...t,
            margin: "16px 0",
            fontSize: e.typography.size.s2,
            lineHeight: "24px",
            color: e.color.defaultText,
            "& code": n,
          },
          [ye("pre")]: {
            ...t,
            fontFamily: e.typography.fonts.mono,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            lineHeight: "18px",
            padding: "11px 1rem",
            whiteSpace: "pre-wrap",
            color: "inherit",
            borderRadius: 3,
            margin: "1rem 0",
            "&:not(.prismjs)": {
              background: "transparent",
              border: "none",
              borderRadius: 0,
              padding: 0,
              margin: 0,
            },
            "& pre, &.prismjs": {
              padding: 15,
              margin: 0,
              whiteSpace: "pre-wrap",
              color: "inherit",
              fontSize: "13px",
              lineHeight: "19px",
              code: { color: "inherit", fontSize: "inherit" },
            },
            "& code": { whiteSpace: "pre" },
            "& code, & tt": { border: "none" },
          },
          [ye("span")]: {
            ...t,
            "&.frame": {
              display: "block",
              overflow: "hidden",
              "& > span": {
                border: `1px solid ${e.color.medium}`,
                display: "block",
                float: "left",
                overflow: "hidden",
                margin: "13px 0 0",
                padding: 7,
                width: "auto",
              },
              "& span img": { display: "block", float: "left" },
              "& span span": {
                clear: "both",
                color: e.color.darkest,
                display: "block",
                padding: "5px 0 0",
              },
            },
            "&.align-center": {
              display: "block",
              overflow: "hidden",
              clear: "both",
              "& > span": {
                display: "block",
                overflow: "hidden",
                margin: "13px auto 0",
                textAlign: "center",
              },
              "& span img": { margin: "0 auto", textAlign: "center" },
            },
            "&.align-right": {
              display: "block",
              overflow: "hidden",
              clear: "both",
              "& > span": {
                display: "block",
                overflow: "hidden",
                margin: "13px 0 0",
                textAlign: "right",
              },
              "& span img": { margin: 0, textAlign: "right" },
            },
            "&.float-left": {
              display: "block",
              marginRight: 13,
              overflow: "hidden",
              float: "left",
              "& span": { margin: "13px 0 0" },
            },
            "&.float-right": {
              display: "block",
              marginLeft: 13,
              overflow: "hidden",
              float: "right",
              "& > span": {
                display: "block",
                overflow: "hidden",
                margin: "13px auto 0",
                textAlign: "right",
              },
            },
          },
          [ye("table")]: {
            ...t,
            margin: "16px 0",
            fontSize: e.typography.size.s2,
            lineHeight: "24px",
            padding: 0,
            borderCollapse: "collapse",
            "& tr": {
              borderTop: `1px solid ${e.appBorderColor}`,
              backgroundColor: e.appContentBg,
              margin: 0,
              padding: 0,
            },
            "& tr:nth-of-type(2n)": {
              backgroundColor:
                e.base === "dark" ? e.color.darker : e.color.lighter,
            },
            "& tr th": {
              fontWeight: "bold",
              color: e.color.defaultText,
              border: `1px solid ${e.appBorderColor}`,
              margin: 0,
              padding: "6px 13px",
            },
            "& tr td": {
              border: `1px solid ${e.appBorderColor}`,
              color: e.color.defaultText,
              margin: 0,
              padding: "6px 13px",
            },
            "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
            "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
          },
          [ye("ul")]: {
            ...t,
            margin: "16px 0",
            paddingLeft: 30,
            "& :first-of-type": { marginTop: 0 },
            "& :last-child": { marginBottom: 0 },
            listStyle: "disc",
          },
        };
      }),
      vT = k.div(({ theme: e }) => ({
        background: e.background.content,
        display: "flex",
        justifyContent: "center",
        padding: "4rem 20px",
        minHeight: "100vh",
        boxSizing: "border-box",
        gap: "3rem",
        [`@media (min-width: ${Qo}px)`]: {},
      }));
    var sn = (e) => ({
        borderRadius: e.appBorderRadius,
        background: e.background.content,
        boxShadow:
          e.base === "light"
            ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
            : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
        border: `1px solid ${e.appBorderColor}`,
      }),
      { window: AT } = globalThis;
    var Ty = Kt({ scale: 1 }),
      { PREVIEW_URL: DT } = globalThis;
    var ST = k.strong(({ theme: e }) => ({ color: e.color.orange }));
    var Fy = k(bn)({
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        transition: "transform .2s linear",
      }),
      Iy = k.div({ display: "flex", alignItems: "center", gap: 4 }),
      ky = k.div(({ theme: e }) => ({
        width: 14,
        height: 14,
        borderRadius: 2,
        margin: "0 7px",
        backgroundColor: e.appBorderColor,
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      })),
      Ry = ({
        isLoading: e,
        storyId: t,
        baseUrl: r,
        zoom: n,
        resetZoom: o,
        ...i
      }) =>
        C.createElement(
          Fy,
          { ...i },
          C.createElement(
            Iy,
            { key: "left" },
            e
              ? [1, 2, 3].map((a) => C.createElement(ky, { key: a }))
              : C.createElement(
                  C.Fragment,
                  null,
                  C.createElement(
                    ht,
                    {
                      key: "zoomin",
                      onClick: (a) => {
                        a.preventDefault(), n(0.8);
                      },
                      title: "Zoom in",
                    },
                    C.createElement(mu, null),
                  ),
                  C.createElement(
                    ht,
                    {
                      key: "zoomout",
                      onClick: (a) => {
                        a.preventDefault(), n(1.25);
                      },
                      title: "Zoom out",
                    },
                    C.createElement(yu, null),
                  ),
                  C.createElement(
                    ht,
                    {
                      key: "zoomreset",
                      onClick: (a) => {
                        a.preventDefault(), o();
                      },
                      title: "Reset zoom",
                    },
                    C.createElement(gu, null),
                  ),
                ),
          ),
        ),
      Oy = k.div(
        ({ isColumn: e, columns: t, layout: r }) => ({
          display: e || !t ? "block" : "flex",
          position: "relative",
          flexWrap: "wrap",
          overflow: "auto",
          flexDirection: e ? "column" : "row",
          "& .innerZoomElementWrapper > *": e
            ? {
                width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
                display: "block",
              }
            : {
                maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
                display: "inline-block",
              },
        }),
        ({ layout: e = "padded" }) =>
          e === "centered" || e === "padded"
            ? {
                padding: "30px 20px",
                "& .innerZoomElementWrapper > *": {
                  width: "auto",
                  border: "10px solid transparent!important",
                },
              }
            : {},
        ({ layout: e = "padded" }) =>
          e === "centered"
            ? {
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "center",
                alignItems: "center",
              }
            : {},
        ({ columns: e }) =>
          e && e > 1
            ? {
                ".innerZoomElementWrapper > *": {
                  minWidth: `calc(100% / ${e} - 20px)`,
                },
              }
            : {},
      ),
      Mu = k(Yu)(({ theme: e }) => ({
        margin: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: e.appBorderRadius,
        borderBottomRightRadius: e.appBorderRadius,
        border: "none",
        background:
          e.base === "light"
            ? "rgba(0, 0, 0, 0.85)"
            : qe(0.05, e.background.content),
        color: e.color.lightest,
        button: {
          background:
            e.base === "light"
              ? "rgba(0, 0, 0, 0.85)"
              : qe(0.05, e.background.content),
        },
      })),
      _y = k.div(
        ({ theme: e, withSource: t, isExpanded: r }) => ({
          position: "relative",
          overflow: "hidden",
          margin: "25px 0 40px",
          ...sn(e),
          borderBottomLeftRadius: t && r && 0,
          borderBottomRightRadius: t && r && 0,
          borderBottomWidth: r && 0,
          "h3 + &": { marginTop: "16px" },
        }),
        ({ withToolbar: e }) => e && { paddingTop: 40 },
      ),
      Py = (e, t, r) => {
        switch (!0) {
          case !!(e && e.error):
            return {
              source: null,
              actionItem: {
                title: "No code available",
                className:
                  "docblock-code-toggle docblock-code-toggle--disabled",
                disabled: !0,
                onClick: () => r(!1),
              },
            };
          case t:
            return {
              source: C.createElement(Mu, { ...e, dark: !0 }),
              actionItem: {
                title: "Hide code",
                className:
                  "docblock-code-toggle docblock-code-toggle--expanded",
                onClick: () => r(!1),
              },
            };
          default:
            return {
              source: C.createElement(Mu, { ...e, dark: !0 }),
              actionItem: {
                title: "Show code",
                className: "docblock-code-toggle",
                onClick: () => r(!0),
              },
            };
        }
      };
    function By(e) {
      if (ma.count(e) === 1) {
        let t = e;
        if (t.props) return t.props.id;
      }
      return null;
    }
    var Ny = k(Ry)({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 40,
      }),
      jy = k.div({ overflow: "hidden", position: "relative" }),
      Ly = ({
        isLoading: e,
        isColumn: t,
        columns: r,
        children: n,
        withSource: o,
        withToolbar: i = !1,
        isExpanded: a = !1,
        additionalActions: l,
        className: u,
        layout: c = "padded",
        ...d
      }) => {
        let [p, h] = Ue(a),
          { source: y, actionItem: E } = Py(o, p, h),
          [v, A] = Ue(1),
          D = [u].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
          S = o ? [E] : [],
          [F, x] = Ue(l ? [...l] : []),
          O = [...S, ...F],
          { window: R } = globalThis,
          N = tt(async (U) => {
            let { createCopyToClipboardFunction: P } =
              await Promise.resolve().then(() => (Qt(), Ia));
            P();
          }, []),
          j = (U) => {
            let P = R.getSelection();
            (P && P.type === "Range") ||
              (U.preventDefault(),
              F.filter((K) => K.title === "Copied").length === 0 &&
                N(y.props.code).then(() => {
                  x([...F, { title: "Copied", onClick: () => {} }]),
                    R.setTimeout(
                      () => x(F.filter((K) => K.title !== "Copied")),
                      1500,
                    );
                }));
          };
        return C.createElement(
          _y,
          { withSource: o, withToolbar: i, ...d, className: D.join(" ") },
          i &&
            C.createElement(Ny, {
              isLoading: e,
              border: !0,
              zoom: (U) => A(v * U),
              resetZoom: () => A(1),
              storyId: By(n),
              baseUrl: "./iframe.html",
            }),
          C.createElement(
            Ty.Provider,
            { value: { scale: v } },
            C.createElement(
              jy,
              { className: "docs-story", onCopyCapture: o && j },
              C.createElement(
                Oy,
                { isColumn: t || !Array.isArray(n), columns: r, layout: c },
                C.createElement(
                  Dn.Element,
                  { scale: v },
                  Array.isArray(n)
                    ? n.map((U, P) => C.createElement("div", { key: P }, U))
                    : C.createElement("div", null, n),
                ),
              ),
              C.createElement(yn, { actionItems: O }),
            ),
          ),
          o && p && y,
        );
      };
    k(Ly)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
    var Uu;
    (function (e) {
      (e[(e.MAX = 0)] = "MAX"),
        (e[(e.HIGH = 1)] = "HIGH"),
        (e[(e.MED = 2)] = "MED"),
        (e[(e.LOW = 3)] = "LOW"),
        (e[(e.MIN = 4)] = "MIN");
    })(Uu || (Uu = {}));
    var wT = [
      "allowFullScreen",
      "allowTransparency",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "cellPadding",
      "cellSpacing",
      "charSet",
      "classId",
      "colSpan",
      "contentEditable",
      "contextMenu",
      "crossOrigin",
      "encType",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "hrefLang",
      "inputMode",
      "keyParams",
      "keyType",
      "marginHeight",
      "marginWidth",
      "maxLength",
      "mediaGroup",
      "minLength",
      "noValidate",
      "radioGroup",
      "readOnly",
      "rowSpan",
      "spellCheck",
      "srcDoc",
      "srcLang",
      "srcSet",
      "tabIndex",
      "useMap",
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), {
      class: "className",
      for: "htmlFor",
    });
    var My = /^(\s*>[\s\S]*?)(?=\n\n|$)/;
    var Uy =
        /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,
      $y = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/;
    var qy = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      Vy = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      Jy = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
      Hy =
        /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i;
    var zy = /^<!--[\s\S]*?(?:-->)/;
    var Gy =
      /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i;
    var Wy = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/;
    var ln =
        "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",
      CT = new RegExp(`^([*_])\\1${ln}\\1\\1(?!\\1)`),
      xT = new RegExp(`^([*_])${ln}\\1(?!\\1|\\w)`),
      TT = new RegExp(`^==${ln}==`),
      FT = new RegExp(`^~~${ln}~~`);
    var Zo = "(?:\\d+\\.)",
      ea = "(?:[*+-])";
    function Xu(e) {
      return "( *)(" + (e === 1 ? Zo : ea) + ") +";
    }
    var Qu = Xu(1),
      Zu = Xu(2);
    function ec(e) {
      return new RegExp("^" + (e === 1 ? Qu : Zu));
    }
    var IT = ec(1),
      kT = ec(2);
    function tc(e) {
      return new RegExp(
        "^" +
          (e === 1 ? Qu : Zu) +
          "[^\\n]*(?:\\n(?!\\1" +
          (e === 1 ? Zo : ea) +
          " )[^\\n]*)*(\\n|$)",
        "gm",
      );
    }
    var Ky = tc(1),
      Yy = tc(2);
    function rc(e) {
      let t = e === 1 ? Zo : ea;
      return new RegExp(
        "^( *)(" +
          t +
          ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
          t +
          " (?!" +
          t +
          " ))\\n*|\\s*\\n*$)",
      );
    }
    var Xy = rc(1),
      Qy = rc(2);
    var RT = new RegExp(
      `^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`,
    );
    var Zy = [My, Uy, $y, qy, Jy, Vy, zy, Wy, Ky, Xy, Yy, Qy],
      OT = [...Zy, /^[^\n]+(?:  \n|\n{2,})/, Hy, Gy];
    var _T = k.label(({ theme: e }) => ({
      lineHeight: "18px",
      alignItems: "center",
      marginBottom: 8,
      display: "inline-block",
      position: "relative",
      whiteSpace: "nowrap",
      background: e.boolean.background,
      borderRadius: "3em",
      padding: 1,
      '&[aria-disabled="true"]': {
        opacity: 0.5,
        input: { cursor: "not-allowed" },
      },
      input: {
        appearance: "none",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: "3em",
        "&:focus": {
          outline: "none",
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: "center",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: "1",
        cursor: "pointer",
        display: "inline-block",
        padding: "7px 15px",
        transition: "all 100ms ease-out",
        userSelect: "none",
        borderRadius: "3em",
        color: le(0.5, e.color.defaultText),
        background: "transparent",
        "&:hover": {
          boxShadow: `${en(0.3, e.appBorderColor)} 0 0 0 1px inset`,
        },
        "&:active": {
          boxShadow: `${en(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: en(1, e.appBorderColor),
        },
        "&:first-of-type": { paddingRight: 8 },
        "&:last-of-type": { paddingLeft: 8 },
      },
      "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
        {
          background: e.boolean.selectedBackground,
          boxShadow:
            e.base === "light"
              ? `${en(0.1, e.appBorderColor)} 0 0 2px`
              : `${e.appBorderColor} 0 0 0 1px`,
          color: e.color.defaultText,
          padding: "7px 15px",
        },
    }));
    var PT = k(nt.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 })),
      BT = k.div(({ theme: e }) => ({
        flex: 1,
        display: "flex",
        input: {
          marginLeft: 10,
          flex: 1,
          height: 32,
          "&::-webkit-calendar-picker-indicator": {
            opacity: 0.5,
            height: 12,
            filter: e.base === "light" ? void 0 : "invert(1)",
          },
        },
        "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
        "input:last-of-type": { flexGrow: 3 },
      }));
    var NT = k.label({ display: "flex" });
    var jT = k(nt.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 }));
    var LT = k.div(
        ({ isInline: e }) =>
          e
            ? {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                label: { display: "inline-flex", marginRight: 15 },
              }
            : { label: { display: "flex" } },
        (e) => {
          if (e["aria-readonly"] === "true")
            return { input: { cursor: "not-allowed" } };
        },
      ),
      MT = k.span({ "[aria-readonly=true] &": { opacity: 0.5 } }),
      UT = k.label({
        lineHeight: "20px",
        alignItems: "center",
        marginBottom: 8,
        "&:last-child": { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      });
    var $T = k.div(
        ({ isInline: e }) =>
          e
            ? {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                label: { display: "inline-flex", marginRight: 15 },
              }
            : { label: { display: "flex" } },
        (e) => {
          if (e["aria-readonly"] === "true")
            return { input: { cursor: "not-allowed" } };
        },
      ),
      qT = k.span({ "[aria-readonly=true] &": { opacity: 0.5 } }),
      VT = k.label({
        lineHeight: "20px",
        alignItems: "center",
        marginBottom: 8,
        "&:last-child": { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      });
    var eg = {
        appearance: "none",
        border: "0 none",
        boxSizing: "inherit",
        display: " block",
        margin: " 0",
        background: "transparent",
        padding: 0,
        fontSize: "inherit",
        position: "relative",
      },
      JT = k.select(eg, ({ theme: e }) => ({
        boxSizing: "border-box",
        position: "relative",
        padding: "6px 10px",
        width: "100%",
        color: e.input.color || "inherit",
        background: e.input.background,
        borderRadius: e.input.borderRadius,
        boxShadow: `${e.input.border} 0 0 0 1px inset`,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: "20px",
        "&:focus": {
          boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
          outline: "none",
        },
        "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
        "::placeholder": { color: e.textMutedColor },
        "&[multiple]": {
          overflow: "auto",
          padding: 0,
          option: {
            display: "block",
            padding: "6px 10px",
            marginLeft: 1,
            marginRight: 1,
          },
        },
      })),
      HT = k.span(({ theme: e }) => ({
        display: "inline-block",
        lineHeight: "normal",
        overflow: "hidden",
        position: "relative",
        verticalAlign: "top",
        width: "100%",
        svg: {
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          height: "12px",
          marginTop: "-6px",
          right: "12px",
          top: "50%",
          fill: e.textMutedColor,
          path: { fill: e.textMutedColor },
        },
      }));
    var tg = "Error",
      rg = "Object",
      ng = "Array",
      og = "String",
      ag = "Number",
      ig = "Boolean",
      sg = "Date",
      lg = "Null",
      ug = "Undefined",
      cg = "Function",
      dg = "Symbol",
      nc = "ADD_DELTA_TYPE",
      oc = "REMOVE_DELTA_TYPE",
      ac = "UPDATE_DELTA_TYPE",
      ta = "value",
      pg = "key";
    function wt(e) {
      return e !== null &&
        typeof e == "object" &&
        !Array.isArray(e) &&
        typeof e[Symbol.iterator] == "function"
        ? "Iterable"
        : Object.prototype.toString.call(e).slice(8, -1);
    }
    function ic(e, t) {
      let r = wt(e),
        n = wt(t);
      return (r === "Function" || n === "Function") && n !== r;
    }
    var ra = class extends et {
      constructor(e) {
        super(e),
          (this.state = { inputRefKey: null, inputRefValue: null }),
          (this.refInputValue = this.refInputValue.bind(this)),
          (this.refInputKey = this.refInputKey.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this)),
          (this.onSubmit = this.onSubmit.bind(this));
      }
      componentDidMount() {
        let { inputRefKey: e, inputRefValue: t } = this.state,
          { onlyValue: r } = this.props;
        e && typeof e.focus == "function" && e.focus(),
          r && t && typeof t.focus == "function" && t.focus(),
          document.addEventListener("keydown", this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === "Enter" || e.key === "Enter") &&
            (e.preventDefault(), this.onSubmit()),
          (e.code === "Escape" || e.key === "Escape") &&
            (e.preventDefault(), this.props.handleCancel()));
      }
      onSubmit() {
        let {
            handleAdd: e,
            onlyValue: t,
            onSubmitValueParser: r,
            keyPath: n,
            deep: o,
          } = this.props,
          { inputRefKey: i, inputRefValue: a } = this.state,
          l = {};
        if (!t) {
          if (!i.value) return;
          l.key = i.value;
        }
        (l.newValue = r(!1, n, o, l.key, a.value)), e(l);
      }
      refInputKey(e) {
        this.state.inputRefKey = e;
      }
      refInputValue(e) {
        this.state.inputRefValue = e;
      }
      render() {
        let {
            handleCancel: e,
            onlyValue: t,
            addButtonElement: r,
            cancelButtonElement: n,
            inputElementGenerator: o,
            keyPath: i,
            deep: a,
          } = this.props,
          l = de(r, { onClick: this.onSubmit }),
          u = de(n, { onClick: e }),
          c = o(ta, i, a),
          d = de(c, { placeholder: "Value", ref: this.refInputValue }),
          p = null;
        if (!t) {
          let h = o(pg, i, a);
          p = de(h, { placeholder: "Key", ref: this.refInputKey });
        }
        return C.createElement(
          "span",
          { className: "rejt-add-value-node" },
          p,
          d,
          u,
          l,
        );
      }
    };
    ra.defaultProps = {
      onlyValue: !1,
      addButtonElement: C.createElement("button", null, "+"),
      cancelButtonElement: C.createElement("button", null, "c"),
    };
    var sc = class extends et {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: o } = this.props,
          i = n.length;
        o(n[i - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleRemoveItem(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: o, nextDeep: i } = this.state,
            a = n[e];
          t(e, o, i, a)
            .then(() => {
              let l = { keyPath: o, deep: i, key: e, oldValue: a, type: oc };
              n.splice(e, 1), this.setState({ data: n });
              let { onUpdate: u, onDeltaUpdate: c } = this.props;
              u(o[o.length - 1], n), c(l);
            })
            .catch(r.error);
        };
      }
      handleAddValueAdd({ newValue: e }) {
        let { data: t, keyPath: r, nextDeep: n } = this.state,
          { beforeAddAction: o, logger: i } = this.props;
        o(t.length, r, n, e)
          .then(() => {
            let a = [...t, e];
            this.setState({ data: a }), this.handleAddValueCancel();
            let { onUpdate: l, onDeltaUpdate: u } = this.props;
            l(r[r.length - 1], a),
              u({
                type: nc,
                keyPath: r,
                deep: n,
                key: a.length - 1,
                newValue: e,
              });
          })
          .catch(i.error);
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: o } = this.props,
            { data: i, keyPath: a, nextDeep: l } = this.state,
            u = i[e];
          o(e, a, l, u, t)
            .then(() => {
              (i[e] = t), this.setState({ data: i });
              let { onUpdate: c, onDeltaUpdate: d } = this.props;
              c(a[a.length - 1], i),
                d({
                  type: ac,
                  keyPath: a,
                  deep: l,
                  key: e,
                  newValue: t,
                  oldValue: u,
                }),
                r(void 0);
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, data: t, keyPath: r, deep: n } = this.state,
          {
            handleRemove: o,
            readOnly: i,
            getStyle: a,
            dataType: l,
            minusMenuElement: u,
          } = this.props,
          { minus: c, collapsed: d } = a(e, t, r, n, l),
          p = i(e, t, r, n, l),
          h = de(u, { onClick: o, className: "rejt-minus-menu", style: c });
        return C.createElement(
          "span",
          { className: "rejt-collapsed" },
          C.createElement(
            "span",
            {
              className: "rejt-collapsed-text",
              style: d,
              onClick: this.handleCollapseMode,
            },
            "[...] ",
            t.length,
            " ",
            t.length === 1 ? "item" : "items",
          ),
          !p && h,
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            addFormVisible: o,
            nextDeep: i,
          } = this.state,
          {
            isCollapsed: a,
            handleRemove: l,
            onDeltaUpdate: u,
            readOnly: c,
            getStyle: d,
            dataType: p,
            addButtonElement: h,
            cancelButtonElement: y,
            editButtonElement: E,
            inputElementGenerator: v,
            textareaElementGenerator: A,
            minusMenuElement: D,
            plusMenuElement: S,
            beforeRemoveAction: F,
            beforeAddAction: x,
            beforeUpdateAction: O,
            logger: R,
            onSubmitValueParser: N,
          } = this.props,
          {
            minus: j,
            plus: U,
            delimiter: P,
            ul: K,
            addForm: L,
          } = d(e, t, r, n, p),
          z = c(e, t, r, n, p),
          b = de(S, {
            onClick: this.handleAddMode,
            className: "rejt-plus-menu",
            style: U,
          }),
          w = de(D, { onClick: l, className: "rejt-minus-menu", style: j });
        return C.createElement(
          "span",
          { className: "rejt-not-collapsed" },
          C.createElement(
            "span",
            { className: "rejt-not-collapsed-delimiter", style: P },
            "[",
          ),
          !o && b,
          C.createElement(
            "ul",
            { className: "rejt-not-collapsed-list", style: K },
            t.map((I, M) =>
              C.createElement(un, {
                key: M,
                name: M.toString(),
                data: I,
                keyPath: r,
                deep: i,
                isCollapsed: a,
                handleRemove: this.handleRemoveItem(M),
                handleUpdateValue: this.handleEditValue,
                onUpdate: this.onChildUpdate,
                onDeltaUpdate: u,
                readOnly: c,
                getStyle: d,
                addButtonElement: h,
                cancelButtonElement: y,
                editButtonElement: E,
                inputElementGenerator: v,
                textareaElementGenerator: A,
                minusMenuElement: D,
                plusMenuElement: S,
                beforeRemoveAction: F,
                beforeAddAction: x,
                beforeUpdateAction: O,
                logger: R,
                onSubmitValueParser: N,
              }),
            ),
          ),
          !z &&
            o &&
            C.createElement(
              "div",
              { className: "rejt-add-form", style: L },
              C.createElement(ra, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                onlyValue: !0,
                addButtonElement: h,
                cancelButtonElement: y,
                inputElementGenerator: v,
                keyPath: r,
                deep: n,
                onSubmitValueParser: N,
              }),
            ),
          C.createElement(
            "span",
            { className: "rejt-not-collapsed-delimiter", style: P },
            "]",
          ),
          !z && w,
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: o,
          } = this.state,
          { dataType: i, getStyle: a } = this.props,
          l = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          u = a(e, r, n, o, i);
        return C.createElement(
          "div",
          { className: "rejt-array-node" },
          C.createElement(
            "span",
            { onClick: this.handleCollapseMode },
            C.createElement(
              "span",
              { className: "rejt-name", style: u.name },
              e,
              " :",
              " ",
            ),
          ),
          l,
        );
      }
    };
    sc.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: C.createElement("span", null, " - "),
      plusMenuElement: C.createElement("span", null, " + "),
    };
    var lc = class extends et {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: o,
            deep: i,
          } = this.state,
          { readOnly: a, dataType: l } = this.props,
          u = a(r, n, o, i, l);
        e && !u && typeof t.focus == "function" && t.focus();
      }
      componentDidMount() {
        document.addEventListener("keydown", this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === "Enter" || e.key === "Enter") &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === "Escape" || e.key === "Escape") &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: o,
          } = this.props,
          { inputRef: i, name: a, deep: l } = this.state;
        if (!i) return;
        let u = n(!0, o, l, a, i.value);
        e({ value: u, key: a })
          .then(() => {
            ic(t, u) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: o,
          } = this.state,
          {
            handleRemove: i,
            originalValue: a,
            readOnly: l,
            dataType: u,
            getStyle: c,
            editButtonElement: d,
            cancelButtonElement: p,
            textareaElementGenerator: h,
            minusMenuElement: y,
            keyPath: E,
          } = this.props,
          v = c(e, a, n, o, u),
          A = null,
          D = null,
          S = l(e, a, n, o, u);
        if (r && !S) {
          let F = h(ta, E, o, e, a, u),
            x = de(d, { onClick: this.handleEdit }),
            O = de(p, { onClick: this.handleCancelEdit }),
            R = de(F, { ref: this.refInput, defaultValue: a });
          (A = C.createElement(
            "span",
            { className: "rejt-edit-form", style: v.editForm },
            R,
            " ",
            O,
            x,
          )),
            (D = null);
        } else {
          A = C.createElement(
            "span",
            {
              className: "rejt-value",
              style: v.value,
              onClick: S ? null : this.handleEditMode,
            },
            t,
          );
          let F = de(y, {
            onClick: i,
            className: "rejt-minus-menu",
            style: v.minus,
          });
          D = S ? null : F;
        }
        return C.createElement(
          "li",
          { className: "rejt-function-value-node", style: v.li },
          C.createElement(
            "span",
            { className: "rejt-name", style: v.name },
            e,
            " :",
            " ",
          ),
          A,
          D,
        );
      }
    };
    lc.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => {},
      editButtonElement: C.createElement("button", null, "e"),
      cancelButtonElement: C.createElement("button", null, "c"),
      minusMenuElement: C.createElement("span", null, " - "),
    };
    var un = class extends et {
      constructor(e) {
        super(e),
          (this.state = {
            data: e.data,
            name: e.name,
            keyPath: e.keyPath,
            deep: e.deep,
          });
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      render() {
        let { data: e, name: t, keyPath: r, deep: n } = this.state,
          {
            isCollapsed: o,
            handleRemove: i,
            handleUpdateValue: a,
            onUpdate: l,
            onDeltaUpdate: u,
            readOnly: c,
            getStyle: d,
            addButtonElement: p,
            cancelButtonElement: h,
            editButtonElement: y,
            inputElementGenerator: E,
            textareaElementGenerator: v,
            minusMenuElement: A,
            plusMenuElement: D,
            beforeRemoveAction: S,
            beforeAddAction: F,
            beforeUpdateAction: x,
            logger: O,
            onSubmitValueParser: R,
          } = this.props,
          N = () => !0,
          j = wt(e);
        switch (j) {
          case tg:
            return C.createElement(Xo, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: i,
              onUpdate: l,
              onDeltaUpdate: u,
              readOnly: N,
              dataType: j,
              getStyle: d,
              addButtonElement: p,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              textareaElementGenerator: v,
              minusMenuElement: A,
              plusMenuElement: D,
              beforeRemoveAction: S,
              beforeAddAction: F,
              beforeUpdateAction: x,
              logger: O,
              onSubmitValueParser: R,
            });
          case rg:
            return C.createElement(Xo, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: i,
              onUpdate: l,
              onDeltaUpdate: u,
              readOnly: c,
              dataType: j,
              getStyle: d,
              addButtonElement: p,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              textareaElementGenerator: v,
              minusMenuElement: A,
              plusMenuElement: D,
              beforeRemoveAction: S,
              beforeAddAction: F,
              beforeUpdateAction: x,
              logger: O,
              onSubmitValueParser: R,
            });
          case ng:
            return C.createElement(sc, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: i,
              onUpdate: l,
              onDeltaUpdate: u,
              readOnly: c,
              dataType: j,
              getStyle: d,
              addButtonElement: p,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              textareaElementGenerator: v,
              minusMenuElement: A,
              plusMenuElement: D,
              beforeRemoveAction: S,
              beforeAddAction: F,
              beforeUpdateAction: x,
              logger: O,
              onSubmitValueParser: R,
            });
          case og:
            return C.createElement(dt, {
              name: t,
              value: `"${e}"`,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: c,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          case ag:
            return C.createElement(dt, {
              name: t,
              value: e,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: c,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          case ig:
            return C.createElement(dt, {
              name: t,
              value: e ? "true" : "false",
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: c,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          case sg:
            return C.createElement(dt, {
              name: t,
              value: e.toISOString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: N,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          case lg:
            return C.createElement(dt, {
              name: t,
              value: "null",
              originalValue: "null",
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: c,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          case ug:
            return C.createElement(dt, {
              name: t,
              value: "undefined",
              originalValue: "undefined",
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: c,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          case cg:
            return C.createElement(lc, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: c,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              textareaElementGenerator: v,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          case dg:
            return C.createElement(dt, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: i,
              handleUpdateValue: a,
              readOnly: N,
              dataType: j,
              getStyle: d,
              cancelButtonElement: h,
              editButtonElement: y,
              inputElementGenerator: E,
              minusMenuElement: A,
              logger: O,
              onSubmitValueParser: R,
            });
          default:
            return null;
        }
      }
    };
    un.defaultProps = { keyPath: [], deep: 0 };
    var Xo = class extends et {
      constructor(e) {
        super(e);
        let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
        (this.state = {
          name: e.name,
          data: e.data,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: o } = this.props,
          i = n.length;
        o(n[i - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleAddValueAdd({ key: e, newValue: t }) {
        let { data: r, keyPath: n, nextDeep: o } = this.state,
          { beforeAddAction: i, logger: a } = this.props;
        i(e, n, o, t)
          .then(() => {
            (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
            let { onUpdate: l, onDeltaUpdate: u } = this.props;
            l(n[n.length - 1], r),
              u({ type: nc, keyPath: n, deep: o, key: e, newValue: t });
          })
          .catch(a.error);
      }
      handleRemoveValue(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: o, nextDeep: i } = this.state,
            a = n[e];
          t(e, o, i, a)
            .then(() => {
              let l = { keyPath: o, deep: i, key: e, oldValue: a, type: oc };
              delete n[e], this.setState({ data: n });
              let { onUpdate: u, onDeltaUpdate: c } = this.props;
              u(o[o.length - 1], n), c(l);
            })
            .catch(r.error);
        };
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: o } = this.props,
            { data: i, keyPath: a, nextDeep: l } = this.state,
            u = i[e];
          o(e, a, l, u, t)
            .then(() => {
              (i[e] = t), this.setState({ data: i });
              let { onUpdate: c, onDeltaUpdate: d } = this.props;
              c(a[a.length - 1], i),
                d({
                  type: ac,
                  keyPath: a,
                  deep: l,
                  key: e,
                  newValue: t,
                  oldValue: u,
                }),
                r();
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, keyPath: t, deep: r, data: n } = this.state,
          {
            handleRemove: o,
            readOnly: i,
            dataType: a,
            getStyle: l,
            minusMenuElement: u,
          } = this.props,
          { minus: c, collapsed: d } = l(e, n, t, r, a),
          p = Object.getOwnPropertyNames(n),
          h = i(e, n, t, r, a),
          y = de(u, { onClick: o, className: "rejt-minus-menu", style: c });
        return C.createElement(
          "span",
          { className: "rejt-collapsed" },
          C.createElement(
            "span",
            {
              className: "rejt-collapsed-text",
              style: d,
              onClick: this.handleCollapseMode,
            },
            "{...}",
            " ",
            p.length,
            " ",
            p.length === 1 ? "key" : "keys",
          ),
          !h && y,
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            nextDeep: o,
            addFormVisible: i,
          } = this.state,
          {
            isCollapsed: a,
            handleRemove: l,
            onDeltaUpdate: u,
            readOnly: c,
            getStyle: d,
            dataType: p,
            addButtonElement: h,
            cancelButtonElement: y,
            editButtonElement: E,
            inputElementGenerator: v,
            textareaElementGenerator: A,
            minusMenuElement: D,
            plusMenuElement: S,
            beforeRemoveAction: F,
            beforeAddAction: x,
            beforeUpdateAction: O,
            logger: R,
            onSubmitValueParser: N,
          } = this.props,
          {
            minus: j,
            plus: U,
            addForm: P,
            ul: K,
            delimiter: L,
          } = d(e, t, r, n, p),
          z = Object.getOwnPropertyNames(t),
          b = c(e, t, r, n, p),
          w = de(S, {
            onClick: this.handleAddMode,
            className: "rejt-plus-menu",
            style: U,
          }),
          I = de(D, { onClick: l, className: "rejt-minus-menu", style: j }),
          M = z.map(($) =>
            C.createElement(un, {
              key: $,
              name: $,
              data: t[$],
              keyPath: r,
              deep: o,
              isCollapsed: a,
              handleRemove: this.handleRemoveValue($),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: u,
              readOnly: c,
              getStyle: d,
              addButtonElement: h,
              cancelButtonElement: y,
              editButtonElement: E,
              inputElementGenerator: v,
              textareaElementGenerator: A,
              minusMenuElement: D,
              plusMenuElement: S,
              beforeRemoveAction: F,
              beforeAddAction: x,
              beforeUpdateAction: O,
              logger: R,
              onSubmitValueParser: N,
            }),
          );
        return C.createElement(
          "span",
          { className: "rejt-not-collapsed" },
          C.createElement(
            "span",
            { className: "rejt-not-collapsed-delimiter", style: L },
            "{",
          ),
          !b && w,
          C.createElement(
            "ul",
            { className: "rejt-not-collapsed-list", style: K },
            M,
          ),
          !b &&
            i &&
            C.createElement(
              "div",
              { className: "rejt-add-form", style: P },
              C.createElement(ra, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                addButtonElement: h,
                cancelButtonElement: y,
                inputElementGenerator: v,
                keyPath: r,
                deep: n,
                onSubmitValueParser: N,
              }),
            ),
          C.createElement(
            "span",
            { className: "rejt-not-collapsed-delimiter", style: L },
            "}",
          ),
          !b && I,
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: o,
          } = this.state,
          { getStyle: i, dataType: a } = this.props,
          l = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          u = i(e, r, n, o, a);
        return C.createElement(
          "div",
          { className: "rejt-object-node" },
          C.createElement(
            "span",
            { onClick: this.handleCollapseMode },
            C.createElement(
              "span",
              { className: "rejt-name", style: u.name },
              e,
              " :",
              " ",
            ),
          ),
          l,
        );
      }
    };
    Xo.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: C.createElement("span", null, " - "),
      plusMenuElement: C.createElement("span", null, " + "),
    };
    var dt = class extends et {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: o,
            deep: i,
          } = this.state,
          { readOnly: a, dataType: l } = this.props,
          u = a(r, n, o, i, l);
        e && !u && typeof t.focus == "function" && t.focus();
      }
      componentDidMount() {
        document.addEventListener("keydown", this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === "Enter" || e.key === "Enter") &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === "Escape" || e.key === "Escape") &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: o,
          } = this.props,
          { inputRef: i, name: a, deep: l } = this.state;
        if (!i) return;
        let u = n(!0, o, l, a, i.value);
        e({ value: u, key: a })
          .then(() => {
            ic(t, u) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: o,
          } = this.state,
          {
            handleRemove: i,
            originalValue: a,
            readOnly: l,
            dataType: u,
            getStyle: c,
            editButtonElement: d,
            cancelButtonElement: p,
            inputElementGenerator: h,
            minusMenuElement: y,
            keyPath: E,
          } = this.props,
          v = c(e, a, n, o, u),
          A = l(e, a, n, o, u),
          D = r && !A,
          S = h(ta, E, o, e, a, u),
          F = de(d, { onClick: this.handleEdit }),
          x = de(p, { onClick: this.handleCancelEdit }),
          O = de(S, { ref: this.refInput, defaultValue: JSON.stringify(a) }),
          R = de(y, {
            onClick: i,
            className: "rejt-minus-menu",
            style: v.minus,
          });
        return C.createElement(
          "li",
          { className: "rejt-value-node", style: v.li },
          C.createElement(
            "span",
            { className: "rejt-name", style: v.name },
            e,
            " : ",
          ),
          D
            ? C.createElement(
                "span",
                { className: "rejt-edit-form", style: v.editForm },
                O,
                " ",
                x,
                F,
              )
            : C.createElement(
                "span",
                {
                  className: "rejt-value",
                  style: v.value,
                  onClick: A ? null : this.handleEditMode,
                },
                String(t),
              ),
          !A && !D && R,
        );
      }
    };
    dt.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => Promise.resolve(),
      editButtonElement: C.createElement("button", null, "e"),
      cancelButtonElement: C.createElement("button", null, "c"),
      minusMenuElement: C.createElement("span", null, " - "),
    };
    function hg(e) {
      let t = e;
      if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
      try {
        t = JSON.parse(e);
      } catch {}
      return t;
    }
    var fg = {
        minus: { color: "red" },
        plus: { color: "green" },
        collapsed: { color: "grey" },
        delimiter: {},
        ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
        name: { color: "#2287CD" },
        addForm: {},
      },
      mg = {
        minus: { color: "red" },
        plus: { color: "green" },
        collapsed: { color: "grey" },
        delimiter: {},
        ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
        name: { color: "#2287CD" },
        addForm: {},
      },
      yg = {
        minus: { color: "red" },
        editForm: {},
        value: { color: "#7bba3d" },
        li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
        name: { color: "#2287CD" },
      },
      gg = class extends et {
        constructor(e) {
          super(e),
            (this.state = { data: e.data, rootName: e.rootName }),
            (this.onUpdate = this.onUpdate.bind(this)),
            (this.removeRoot = this.removeRoot.bind(this));
        }
        static getDerivedStateFromProps(e, t) {
          return e.data !== t.data || e.rootName !== t.rootName
            ? { data: e.data, rootName: e.rootName }
            : null;
        }
        onUpdate(e, t) {
          this.setState({ data: t }), this.props.onFullyUpdate(t);
        }
        removeRoot() {
          this.onUpdate(null, null);
        }
        render() {
          let { data: e, rootName: t } = this.state,
            {
              isCollapsed: r,
              onDeltaUpdate: n,
              readOnly: o,
              getStyle: i,
              addButtonElement: a,
              cancelButtonElement: l,
              editButtonElement: u,
              inputElement: c,
              textareaElement: d,
              minusMenuElement: p,
              plusMenuElement: h,
              beforeRemoveAction: y,
              beforeAddAction: E,
              beforeUpdateAction: v,
              logger: A,
              onSubmitValueParser: D,
              fallback: S = null,
            } = this.props,
            F = wt(e),
            x = o;
          wt(o) === "Boolean" && (x = () => o);
          let O = c;
          c && wt(c) !== "Function" && (O = () => c);
          let R = d;
          return (
            d && wt(d) !== "Function" && (R = () => d),
            F === "Object" || F === "Array"
              ? C.createElement(
                  "div",
                  { className: "rejt-tree" },
                  C.createElement(un, {
                    data: e,
                    name: t,
                    deep: -1,
                    isCollapsed: r,
                    onUpdate: this.onUpdate,
                    onDeltaUpdate: n,
                    readOnly: x,
                    getStyle: i,
                    addButtonElement: a,
                    cancelButtonElement: l,
                    editButtonElement: u,
                    inputElementGenerator: O,
                    textareaElementGenerator: R,
                    minusMenuElement: p,
                    plusMenuElement: h,
                    handleRemove: this.removeRoot,
                    beforeRemoveAction: y,
                    beforeAddAction: E,
                    beforeUpdateAction: v,
                    logger: A,
                    onSubmitValueParser: D,
                  }),
                )
              : S
          );
        }
      };
    gg.defaultProps = {
      rootName: "root",
      isCollapsed: (e, t) => t !== -1,
      getStyle: (e, t, r, n, o) => {
        switch (o) {
          case "Object":
          case "Error":
            return fg;
          case "Array":
            return mg;
          default:
            return yg;
        }
      },
      readOnly: () => !1,
      onFullyUpdate: () => {},
      onDeltaUpdate: () => {},
      beforeRemoveAction: () => Promise.resolve(),
      beforeAddAction: () => Promise.resolve(),
      beforeUpdateAction: () => Promise.resolve(),
      logger: { error: () => {} },
      onSubmitValueParser: (e, t, r, n, o) => hg(o),
      inputElement: () => C.createElement("input", null),
      textareaElement: () => C.createElement("textarea", null),
      fallback: null,
    };
    var { window: zT } = globalThis,
      GT = k.div(({ theme: e }) => ({
        position: "relative",
        display: "flex",
        '&[aria-readonly="true"]': { opacity: 0.5 },
        ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
        ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
          { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
        ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
          { "& > svg": { opacity: 1 } },
        ".rejt-edit-form button": { display: "none" },
        ".rejt-add-form": { marginLeft: 10 },
        ".rejt-add-value-node": {
          display: "inline-flex",
          alignItems: "center",
        },
        ".rejt-name": { lineHeight: "22px" },
        ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
        ".rejt-plus-menu": { marginLeft: 5 },
        ".rejt-object-node > span > *, .rejt-array-node > span > *": {
          position: "relative",
          zIndex: 2,
        },
        ".rejt-object-node, .rejt-array-node": { position: "relative" },
        ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
          {
            content: '""',
            position: "absolute",
            top: 0,
            display: "block",
            width: "100%",
            marginLeft: "-1rem",
            padding: "0 4px 0 1rem",
            height: 22,
          },
        ".rejt-collapsed::before, .rejt-not-collapsed::before": {
          zIndex: 1,
          background: "transparent",
          borderRadius: 4,
          transition: "background 0.2s",
          pointerEvents: "none",
          opacity: 0.1,
        },
        ".rejt-object-node:hover, .rejt-array-node:hover": {
          "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": {
            background: e.color.secondary,
          },
        },
        ".rejt-collapsed::after, .rejt-not-collapsed::after": {
          content: '""',
          position: "absolute",
          display: "inline-block",
          pointerEvents: "none",
          width: 0,
          height: 0,
        },
        ".rejt-collapsed::after": {
          left: -8,
          top: 8,
          borderTop: "3px solid transparent",
          borderBottom: "3px solid transparent",
          borderLeft: "3px solid rgba(153,153,153,0.6)",
        },
        ".rejt-not-collapsed::after": {
          left: -10,
          top: 10,
          borderTop: "3px solid rgba(153,153,153,0.6)",
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
        },
        ".rejt-value": {
          display: "inline-block",
          border: "1px solid transparent",
          borderRadius: 4,
          margin: "1px 0",
          padding: "0 4px",
          cursor: "text",
          color: e.color.defaultText,
        },
        ".rejt-value-node:hover > .rejt-value": {
          background: e.color.lighter,
          borderColor: e.appBorderColor,
        },
      })),
      WT = k.button(({ theme: e, primary: t }) => ({
        border: 0,
        height: 20,
        margin: 1,
        borderRadius: 4,
        background: t ? e.color.secondary : "transparent",
        color: t ? e.color.lightest : e.color.dark,
        fontWeight: t ? "bold" : "normal",
        cursor: "pointer",
        order: t ? "initial" : 9,
      })),
      KT = k(su)(({ theme: e, disabled: t }) => ({
        display: "inline-block",
        verticalAlign: "middle",
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: t ? "not-allowed" : "pointer",
        color: e.textMutedColor,
        "&:hover": t ? {} : { color: e.color.ancillary },
        "svg + &": { marginLeft: 0 },
      })),
      YT = k(fu)(({ theme: e, disabled: t }) => ({
        display: "inline-block",
        verticalAlign: "middle",
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: t ? "not-allowed" : "pointer",
        color: e.textMutedColor,
        "&:hover": t ? {} : { color: e.color.negative },
        "svg + &": { marginLeft: 0 },
      })),
      XT = k.input(({ theme: e, placeholder: t }) => ({
        outline: 0,
        margin: t ? 1 : "1px 0",
        padding: "3px 4px",
        color: e.color.defaultText,
        background: e.background.app,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 4,
        lineHeight: "14px",
        width: t === "Key" ? 80 : 120,
        "&:focus": { border: `1px solid ${e.color.secondary}` },
      })),
      QT = k(ht)(({ theme: e }) => ({
        position: "absolute",
        zIndex: 2,
        top: 2,
        right: 2,
        height: 21,
        padding: "0 3px",
        background: e.background.bar,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 3,
        color: e.textMutedColor,
        fontSize: "9px",
        fontWeight: "bold",
        textDecoration: "none",
        span: { marginLeft: 3, marginTop: 1 },
      })),
      ZT = k(nt.Textarea)(({ theme: e }) => ({
        flex: 1,
        padding: "7px 6px",
        fontFamily: e.typography.fonts.mono,
        fontSize: "12px",
        lineHeight: "18px",
        "&::placeholder": {
          fontFamily: e.typography.fonts.base,
          fontSize: "13px",
        },
        "&:placeholder-shown": { padding: "7px 10px" },
      }));
    var eF = k.input(({ theme: e, min: t, max: r, value: n, disabled: o }) => ({
        "&": {
          width: "100%",
          backgroundColor: "transparent",
          appearance: "none",
        },
        "&::-webkit-slider-runnable-track": {
          background:
            e.base === "light"
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${qe(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${qe(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${St(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${St(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: "100%",
          height: 6,
          cursor: o ? "not-allowed" : "pointer",
        },
        "&::-webkit-slider-thumb": {
          marginTop: "-6px",
          width: 16,
          height: 16,
          border: `1px solid ${Ye(e.appBorderColor, 0.2)}`,
          borderRadius: "50px",
          boxShadow: `0 1px 3px 0px ${Ye(e.appBorderColor, 0.2)}`,
          cursor: o ? "not-allowed" : "grab",
          appearance: "none",
          background: `${e.input.background}`,
          transition: "all 150ms ease-out",
          "&:hover": {
            background: `${qe(0.05, e.input.background)}`,
            transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
            transition: "all 50ms ease-out",
          },
          "&:active": {
            background: `${e.input.background}`,
            transform: "scale3d(1, 1, 1) translateY(0px)",
            cursor: o ? "not-allowed" : "grab",
          },
        },
        "&:focus": {
          outline: "none",
          "&::-webkit-slider-runnable-track": {
            borderColor: Ye(e.color.secondary, 0.4),
          },
          "&::-webkit-slider-thumb": {
            borderColor: e.color.secondary,
            boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
          },
        },
        "&::-moz-range-track": {
          background:
            e.base === "light"
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${qe(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${qe(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${St(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${St(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: "100%",
          height: 6,
          cursor: o ? "not-allowed" : "pointer",
          outline: "none",
        },
        "&::-moz-range-thumb": {
          width: 16,
          height: 16,
          border: `1px solid ${Ye(e.appBorderColor, 0.2)}`,
          borderRadius: "50px",
          boxShadow: `0 1px 3px 0px ${Ye(e.appBorderColor, 0.2)}`,
          cursor: o ? "not-allowed" : "grap",
          background: `${e.input.background}`,
          transition: "all 150ms ease-out",
          "&:hover": {
            background: `${qe(0.05, e.input.background)}`,
            transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
            transition: "all 50ms ease-out",
          },
          "&:active": {
            background: `${e.input.background}`,
            transform: "scale3d(1, 1, 1) translateY(0px)",
            cursor: "grabbing",
          },
        },
        "&::-ms-track": {
          background:
            e.base === "light"
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${qe(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${qe(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${St(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${St(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          color: "transparent",
          width: "100%",
          height: "6px",
          cursor: "pointer",
        },
        "&::-ms-fill-lower": { borderRadius: 6 },
        "&::-ms-fill-upper": { borderRadius: 6 },
        "&::-ms-thumb": {
          width: 16,
          height: 16,
          background: `${e.input.background}`,
          border: `1px solid ${Ye(e.appBorderColor, 0.2)}`,
          borderRadius: 50,
          cursor: "grab",
          marginTop: 0,
        },
        "@supports (-ms-ime-align:auto)": {
          "input[type=range]": { margin: "0" },
        },
      })),
      bg = k.span({
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        whiteSpace: "nowrap",
        fontFeatureSettings: "tnum",
        fontVariantNumeric: "tabular-nums",
        "[aria-readonly=true] &": { opacity: 0.5 },
      }),
      tF = k(bg)(({ numberOFDecimalsPlaces: e, max: t }) => ({
        width: `${e + t.toString().length * 2 + 3}ch`,
        textAlign: "right",
        flexShrink: 0,
      })),
      rF = k.div({ display: "flex", alignItems: "center", width: "100%" });
    var nF = k.label({ display: "flex" }),
      oF = k.div(({ isMaxed: e }) => ({
        marginLeft: "0.75rem",
        paddingTop: "0.35rem",
        color: e ? "red" : void 0,
      }));
    var aF = k(nt.Input)({ padding: 10 });
    var iF = ya(() => Promise.resolve().then(() => (ju(), Nu)));
    var sF = k.table(({ theme: e }) => ({
      "&&": {
        borderCollapse: "collapse",
        borderSpacing: 0,
        border: "none",
        tr: { border: "none !important", background: "none" },
        "td, th": { padding: 0, border: "none", width: "auto!important" },
        marginTop: 0,
        marginBottom: 0,
        "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
        "th:last-of-type, td:last-of-type": { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: "none", border: "none" },
        code: Tt({ theme: e }),
        div: { span: { fontWeight: "bold" } },
        "& code": {
          margin: 0,
          display: "inline-block",
          fontSize: e.typography.size.s1,
        },
      },
    }));
    var Eg = jt(Hu());
    var lF = k.div(({ isExpanded: e }) => ({
        display: "flex",
        flexDirection: e ? "column" : "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginBottom: "-4px",
        minWidth: 100,
      })),
      uF = k.span(Tt, ({ theme: e, simple: t = !1 }) => ({
        flex: "0 0 auto",
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        wordBreak: "break-word",
        whiteSpace: "normal",
        maxWidth: "100%",
        margin: 0,
        marginRight: "4px",
        marginBottom: "4px",
        paddingTop: "2px",
        paddingBottom: "2px",
        lineHeight: "13px",
        ...(t && {
          background: "transparent",
          border: "0 none",
          paddingLeft: 0,
        }),
      })),
      cF = k.button(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        marginBottom: "4px",
        background: "none",
        border: "none",
      })),
      dF = k.div(Tt, ({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        fontSize: e.typography.size.s1,
        margin: 0,
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
      })),
      pF = k.div(({ theme: e, width: t }) => ({
        width: t,
        minWidth: 200,
        maxWidth: 800,
        padding: 15,
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        boxSizing: "content-box",
        "& code": { padding: "0 !important" },
      })),
      hF = k(du)({ marginLeft: 4 }),
      fF = k(cu)({ marginLeft: 4 });
    var mF = (0, Eg.default)(1e3)((e) => {
      let t = e.split(/\r?\n/);
      return `${Math.max(...t.map((r) => r.length))}ch`;
    });
    var yF = k.span({ fontWeight: "bold" }),
      gF = k.span(({ theme: e }) => ({
        color: e.color.negative,
        fontFamily: e.typography.fonts.mono,
        cursor: "help",
      })),
      bF = k.div(({ theme: e }) => ({
        "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
        code: {
          ...Tt({ theme: e }),
          fontSize: 12,
          fontFamily: e.typography.fonts.mono,
        },
        "& code": { margin: 0, display: "inline-block" },
        "& pre > code": { whiteSpace: "pre-wrap" },
      })),
      EF = k.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === "light"
            ? le(0.1, e.color.defaultText)
            : le(0.2, e.color.defaultText),
        marginTop: t ? 4 : 0,
      })),
      vF = k.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === "light"
            ? le(0.1, e.color.defaultText)
            : le(0.2, e.color.defaultText),
        marginTop: t ? 12 : 0,
        marginBottom: 12,
      })),
      AF = k.td(({ theme: e, expandable: t }) => ({
        paddingLeft: t ? "40px !important" : "20px !important",
      }));
    var DF = k.div(({ inAddonPanel: e, theme: t }) => ({
        height: e ? "100%" : "auto",
        display: "flex",
        border: e ? "none" : `1px solid ${t.appBorderColor}`,
        borderRadius: e ? 0 : t.appBorderRadius,
        padding: e ? 0 : 40,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 15,
        background: t.background.content,
        boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0",
      })),
      SF = k.div(({ theme: e }) => ({
        display: "flex",
        fontSize: e.typography.size.s2 - 1,
        gap: 25,
      })),
      wF = k.div(({ theme: e }) => ({
        width: 1,
        height: 16,
        backgroundColor: e.appBorderColor,
      }));
    var CF = k(lu)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === "light"
            ? le(0.25, e.color.defaultText)
            : le(0.3, e.color.defaultText),
        border: "none",
        display: "inline-block",
      })),
      xF = k(uu)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === "light"
            ? le(0.25, e.color.defaultText)
            : le(0.3, e.color.defaultText),
        border: "none",
        display: "inline-block",
      })),
      TF = k.span(({ theme: e }) => ({
        display: "flex",
        lineHeight: "20px",
        alignItems: "center",
      })),
      FF = k.td(({ theme: e }) => ({
        position: "relative",
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s1 - 1,
        color:
          e.base === "light"
            ? le(0.4, e.color.defaultText)
            : le(0.6, e.color.defaultText),
        background: `${e.background.app} !important`,
        "& ~ td": { background: `${e.background.app} !important` },
      })),
      IF = k.td(({ theme: e }) => ({
        position: "relative",
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        background: e.background.app,
      })),
      kF = k.td({ position: "relative" }),
      RF = k.tr(({ theme: e }) => ({
        "&:hover > td": {
          backgroundColor: `${St(0.005, e.background.app)} !important`,
          boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
          cursor: "row-resize",
        },
      })),
      OF = k.button({
        background: "none",
        border: "none",
        padding: "0",
        font: "inherit",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        width: "100%",
        color: "transparent",
        cursor: "row-resize !important",
      });
    var _F = k.div(({ theme: e }) => ({
        display: "flex",
        gap: 16,
        borderBottom: `1px solid ${e.appBorderColor}`,
        "&:last-child": { borderBottom: 0 },
      })),
      PF = k.div(({ numColumn: e }) => ({
        display: "flex",
        flexDirection: "column",
        flex: e || 1,
        gap: 5,
        padding: "12px 20px",
      })),
      BF = k.div(({ theme: e, width: t, height: r }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        width: t || "100%",
        height: r || 16,
        borderRadius: 3,
      }));
    var NF = k.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
        "&&": {
          borderSpacing: 0,
          color: e.color.defaultText,
          "td, th": {
            padding: 0,
            border: "none",
            verticalAlign: "top",
            textOverflow: "ellipsis",
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: "20px",
          textAlign: "left",
          width: "100%",
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          "thead th:first-of-type, td:first-of-type": { width: "25%" },
          "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
          "th:nth-of-type(2), td:nth-of-type(2)": {
            ...(t ? null : { width: "35%" }),
          },
          "td:nth-of-type(3)": { ...(t ? null : { width: "15%" }) },
          "th:last-of-type, td:last-of-type": {
            paddingRight: 20,
            ...(t ? null : { width: "25%" }),
          },
          th: {
            color:
              e.base === "light"
                ? le(0.25, e.color.defaultText)
                : le(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
            "&:last-of-type": { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === "light"
                      ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                      : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))",
                }),
            "> tr > *": {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  "> tr:first-of-type > *": {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr:last-of-type > *": {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr > *:first-of-type": {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr > *:last-of-type": {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  "> tr:first-of-type > td:first-of-type": {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  "> tr:first-of-type > td:last-of-type": {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  "> tr:last-of-type > td:first-of-type": {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  "> tr:last-of-type > td:last-of-type": {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      })),
      jF = k(ht)(({ theme: e }) => ({ margin: "-4px -12px -4px 0" })),
      LF = k.span({ display: "flex", justifyContent: "space-between" });
    var MF = k.div(({ theme: e }) => ({
        marginRight: 30,
        fontSize: `${e.typography.size.s1}px`,
        color:
          e.base === "light"
            ? le(0.4, e.color.defaultText)
            : le(0.6, e.color.defaultText),
      })),
      UF = k.div({
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }),
      $F = k.div({
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        "&:not(:last-child)": { marginBottom: "1rem" },
      }),
      qF = k.div(Ft, ({ theme: e }) => ({
        ...sn(e),
        margin: "25px 0 40px",
        padding: "30px 20px",
      }));
    var VF = k.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        color: e.color.defaultText,
      })),
      JF = k.div(({ theme: e }) => ({
        color:
          e.base === "light"
            ? le(0.2, e.color.defaultText)
            : le(0.6, e.color.defaultText),
      })),
      HF = k.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 }),
      zF = k.div(({ theme: e }) => ({
        flex: 1,
        textAlign: "center",
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        lineHeight: 1,
        overflow: "hidden",
        color:
          e.base === "light"
            ? le(0.4, e.color.defaultText)
            : le(0.6, e.color.defaultText),
        "> div": {
          display: "inline-block",
          overflow: "hidden",
          maxWidth: "100%",
          textOverflow: "ellipsis",
        },
        span: { display: "block", marginTop: 2 },
      })),
      GF = k.div({ display: "flex", flexDirection: "row" }),
      WF = k.div(({ background: e }) => ({
        position: "relative",
        flex: 1,
        "&::before": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: e,
          content: '""',
        },
      })),
      KF = k.div(({ theme: e }) => ({
        ...sn(e),
        display: "flex",
        flexDirection: "row",
        height: 50,
        marginBottom: 5,
        overflow: "hidden",
        backgroundColor: "white",
        backgroundImage:
          "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
        backgroundClip: "padding-box",
      })),
      YF = k.div({
        display: "flex",
        flexDirection: "column",
        flex: 1,
        position: "relative",
        marginBottom: 30,
      }),
      XF = k.div({ flex: 1, display: "flex", flexDirection: "row" }),
      QF = k.div({ display: "flex", alignItems: "flex-start" }),
      ZF = k.div({ flex: "0 0 30%" }),
      e5 = k.div({ flex: 1 }),
      t5 = k.div(({ theme: e }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20,
        fontWeight: e.typography.weight.bold,
        color:
          e.base === "light"
            ? le(0.4, e.color.defaultText)
            : le(0.6, e.color.defaultText),
      })),
      r5 = k.div(({ theme: e }) => ({
        fontSize: e.typography.size.s2,
        lineHeight: "20px",
        display: "flex",
        flexDirection: "column",
      }));
    var n5 = k.div(({ theme: e }) => ({
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        marginLeft: 10,
        lineHeight: 1.2,
      })),
      o5 = k.div(({ theme: e }) => ({
        ...sn(e),
        overflow: "hidden",
        height: 40,
        width: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        "> img, > svg": { width: 20, height: 20 },
      })),
      a5 = k.div({
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        flex: "0 1 calc(20% - 10px)",
        minWidth: 120,
        margin: "0px 10px 30px 0",
      }),
      i5 = k.div({ display: "flex", flexFlow: "row wrap" });
    globalThis &&
      globalThis.__DOCS_CONTEXT__ === void 0 &&
      ((globalThis.__DOCS_CONTEXT__ = Kt(null)),
      (globalThis.__DOCS_CONTEXT__.displayName = "DocsContext"));
    var uc = globalThis ? globalThis.__DOCS_CONTEXT__ : Kt(null);
    var vg = Object.create,
      cc = Object.defineProperty,
      Ag = Object.getOwnPropertyDescriptor,
      dc = Object.getOwnPropertyNames,
      Dg = Object.getPrototypeOf,
      Sg = Object.prototype.hasOwnProperty,
      Ne = (e, t) =>
        function () {
          return (
            t || (0, e[dc(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        },
      wg = (e, t, r, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let o of dc(t))
            !Sg.call(e, o) &&
              o !== r &&
              cc(e, o, {
                get: () => t[o],
                enumerable: !(n = Ag(t, o)) || n.enumerable,
              });
        return e;
      },
      na = (e, t, r) => (
        (r = e != null ? vg(Dg(e)) : {}),
        wg(
          t || !e || !e.__esModule
            ? cc(r, "default", { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      Cg = [
        "bubbles",
        "cancelBubble",
        "cancelable",
        "composed",
        "currentTarget",
        "defaultPrevented",
        "eventPhase",
        "isTrusted",
        "returnValue",
        "srcElement",
        "target",
        "timeStamp",
        "type",
      ],
      xg = ["detail"];
    function Tg(e) {
      let t = Cg.filter((r) => e[r] !== void 0).reduce(
        (r, n) => ({ ...r, [n]: e[n] }),
        {},
      );
      return (
        e instanceof CustomEvent &&
          xg
            .filter((r) => e[r] !== void 0)
            .forEach((r) => {
              t[r] = e[r];
            }),
        t
      );
    }
    var Fg = jt(Hu(), 1),
      pc = Ne({
        "node_modules/has-symbols/shams.js"(e, t) {
          t.exports = function () {
            if (
              typeof Symbol != "function" ||
              typeof Object.getOwnPropertySymbols != "function"
            )
              return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var r = {},
              n = Symbol("test"),
              o = Object(n);
            if (
              typeof n == "string" ||
              Object.prototype.toString.call(n) !== "[object Symbol]" ||
              Object.prototype.toString.call(o) !== "[object Symbol]"
            )
              return !1;
            var i = 42;
            r[n] = i;
            for (n in r) return !1;
            if (
              (typeof Object.keys == "function" &&
                Object.keys(r).length !== 0) ||
              (typeof Object.getOwnPropertyNames == "function" &&
                Object.getOwnPropertyNames(r).length !== 0)
            )
              return !1;
            var a = Object.getOwnPropertySymbols(r);
            if (
              a.length !== 1 ||
              a[0] !== n ||
              !Object.prototype.propertyIsEnumerable.call(r, n)
            )
              return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
              var l = Object.getOwnPropertyDescriptor(r, n);
              if (l.value !== i || l.enumerable !== !0) return !1;
            }
            return !0;
          };
        },
      }),
      hc = Ne({
        "node_modules/has-symbols/index.js"(e, t) {
          var r = typeof Symbol < "u" && Symbol,
            n = pc();
          t.exports = function () {
            return typeof r != "function" ||
              typeof Symbol != "function" ||
              typeof r("foo") != "symbol" ||
              typeof Symbol("bar") != "symbol"
              ? !1
              : n();
          };
        },
      }),
      Ig = Ne({
        "node_modules/function-bind/implementation.js"(e, t) {
          var r = "Function.prototype.bind called on incompatible ",
            n = Array.prototype.slice,
            o = Object.prototype.toString,
            i = "[object Function]";
          t.exports = function (a) {
            var l = this;
            if (typeof l != "function" || o.call(l) !== i)
              throw new TypeError(r + l);
            for (
              var u = n.call(arguments, 1),
                c,
                d = function () {
                  if (this instanceof c) {
                    var v = l.apply(this, u.concat(n.call(arguments)));
                    return Object(v) === v ? v : this;
                  } else return l.apply(a, u.concat(n.call(arguments)));
                },
                p = Math.max(0, l.length - u.length),
                h = [],
                y = 0;
              y < p;
              y++
            )
              h.push("$" + y);
            if (
              ((c = Function(
                "binder",
                "return function (" +
                  h.join(",") +
                  "){ return binder.apply(this,arguments); }",
              )(d)),
              l.prototype)
            ) {
              var E = function () {};
              (E.prototype = l.prototype),
                (c.prototype = new E()),
                (E.prototype = null);
            }
            return c;
          };
        },
      }),
      oa = Ne({
        "node_modules/function-bind/index.js"(e, t) {
          var r = Ig();
          t.exports = Function.prototype.bind || r;
        },
      }),
      kg = Ne({
        "node_modules/has/src/index.js"(e, t) {
          var r = oa();
          t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
        },
      }),
      fc = Ne({
        "node_modules/get-intrinsic/index.js"(e, t) {
          var r,
            n = SyntaxError,
            o = Function,
            i = TypeError,
            a = function (L) {
              try {
                return o('"use strict"; return (' + L + ").constructor;")();
              } catch {}
            },
            l = Object.getOwnPropertyDescriptor;
          if (l)
            try {
              l({}, "");
            } catch {
              l = null;
            }
          var u = function () {
              throw new i();
            },
            c = l
              ? (function () {
                  try {
                    return arguments.callee, u;
                  } catch {
                    try {
                      return l(arguments, "callee").get;
                    } catch {
                      return u;
                    }
                  }
                })()
              : u,
            d = hc()(),
            p =
              Object.getPrototypeOf ||
              function (L) {
                return L.__proto__;
              },
            h = {},
            y = typeof Uint8Array > "u" ? r : p(Uint8Array),
            E = {
              "%AggregateError%":
                typeof AggregateError > "u" ? r : AggregateError,
              "%Array%": Array,
              "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
              "%ArrayIteratorPrototype%": d ? p([][Symbol.iterator]()) : r,
              "%AsyncFromSyncIteratorPrototype%": r,
              "%AsyncFunction%": h,
              "%AsyncGenerator%": h,
              "%AsyncGeneratorFunction%": h,
              "%AsyncIteratorPrototype%": h,
              "%Atomics%": typeof Atomics > "u" ? r : Atomics,
              "%BigInt%": typeof BigInt > "u" ? r : BigInt,
              "%Boolean%": Boolean,
              "%DataView%": typeof DataView > "u" ? r : DataView,
              "%Date%": Date,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": Error,
              "%eval%": eval,
              "%EvalError%": EvalError,
              "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
              "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
              "%FinalizationRegistry%":
                typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
              "%Function%": o,
              "%GeneratorFunction%": h,
              "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
              "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
              "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%": d ? p(p([][Symbol.iterator]())) : r,
              "%JSON%": typeof JSON == "object" ? JSON : r,
              "%Map%": typeof Map > "u" ? r : Map,
              "%MapIteratorPrototype%":
                typeof Map > "u" || !d ? r : p(new Map()[Symbol.iterator]()),
              "%Math%": Math,
              "%Number%": Number,
              "%Object%": Object,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": typeof Promise > "u" ? r : Promise,
              "%Proxy%": typeof Proxy > "u" ? r : Proxy,
              "%RangeError%": RangeError,
              "%ReferenceError%": ReferenceError,
              "%Reflect%": typeof Reflect > "u" ? r : Reflect,
              "%RegExp%": RegExp,
              "%Set%": typeof Set > "u" ? r : Set,
              "%SetIteratorPrototype%":
                typeof Set > "u" || !d ? r : p(new Set()[Symbol.iterator]()),
              "%SharedArrayBuffer%":
                typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
              "%String%": String,
              "%StringIteratorPrototype%": d ? p(""[Symbol.iterator]()) : r,
              "%Symbol%": d ? Symbol : r,
              "%SyntaxError%": n,
              "%ThrowTypeError%": c,
              "%TypedArray%": y,
              "%TypeError%": i,
              "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
              "%Uint8ClampedArray%":
                typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
              "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
              "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
              "%URIError%": URIError,
              "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
              "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
              "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
            },
            v = function L(z) {
              var b;
              if (z === "%AsyncFunction%") b = a("async function () {}");
              else if (z === "%GeneratorFunction%") b = a("function* () {}");
              else if (z === "%AsyncGeneratorFunction%")
                b = a("async function* () {}");
              else if (z === "%AsyncGenerator%") {
                var w = L("%AsyncGeneratorFunction%");
                w && (b = w.prototype);
              } else if (z === "%AsyncIteratorPrototype%") {
                var I = L("%AsyncGenerator%");
                I && (b = p(I.prototype));
              }
              return (E[z] = b), b;
            },
            A = {
              "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
              "%ArrayPrototype%": ["Array", "prototype"],
              "%ArrayProto_entries%": ["Array", "prototype", "entries"],
              "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
              "%ArrayProto_keys%": ["Array", "prototype", "keys"],
              "%ArrayProto_values%": ["Array", "prototype", "values"],
              "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
              "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
              "%AsyncGeneratorPrototype%": [
                "AsyncGeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%BooleanPrototype%": ["Boolean", "prototype"],
              "%DataViewPrototype%": ["DataView", "prototype"],
              "%DatePrototype%": ["Date", "prototype"],
              "%ErrorPrototype%": ["Error", "prototype"],
              "%EvalErrorPrototype%": ["EvalError", "prototype"],
              "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
              "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
              "%FunctionPrototype%": ["Function", "prototype"],
              "%Generator%": ["GeneratorFunction", "prototype"],
              "%GeneratorPrototype%": [
                "GeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
              "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
              "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
              "%JSONParse%": ["JSON", "parse"],
              "%JSONStringify%": ["JSON", "stringify"],
              "%MapPrototype%": ["Map", "prototype"],
              "%NumberPrototype%": ["Number", "prototype"],
              "%ObjectPrototype%": ["Object", "prototype"],
              "%ObjProto_toString%": ["Object", "prototype", "toString"],
              "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
              "%PromisePrototype%": ["Promise", "prototype"],
              "%PromiseProto_then%": ["Promise", "prototype", "then"],
              "%Promise_all%": ["Promise", "all"],
              "%Promise_reject%": ["Promise", "reject"],
              "%Promise_resolve%": ["Promise", "resolve"],
              "%RangeErrorPrototype%": ["RangeError", "prototype"],
              "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
              "%RegExpPrototype%": ["RegExp", "prototype"],
              "%SetPrototype%": ["Set", "prototype"],
              "%SharedArrayBufferPrototype%": [
                "SharedArrayBuffer",
                "prototype",
              ],
              "%StringPrototype%": ["String", "prototype"],
              "%SymbolPrototype%": ["Symbol", "prototype"],
              "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
              "%TypedArrayPrototype%": ["TypedArray", "prototype"],
              "%TypeErrorPrototype%": ["TypeError", "prototype"],
              "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
              "%Uint8ClampedArrayPrototype%": [
                "Uint8ClampedArray",
                "prototype",
              ],
              "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
              "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
              "%URIErrorPrototype%": ["URIError", "prototype"],
              "%WeakMapPrototype%": ["WeakMap", "prototype"],
              "%WeakSetPrototype%": ["WeakSet", "prototype"],
            },
            D = oa(),
            S = kg(),
            F = D.call(Function.call, Array.prototype.concat),
            x = D.call(Function.apply, Array.prototype.splice),
            O = D.call(Function.call, String.prototype.replace),
            R = D.call(Function.call, String.prototype.slice),
            N = D.call(Function.call, RegExp.prototype.exec),
            j =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            U = /\\(\\)?/g,
            P = function (L) {
              var z = R(L, 0, 1),
                b = R(L, -1);
              if (z === "%" && b !== "%")
                throw new n("invalid intrinsic syntax, expected closing `%`");
              if (b === "%" && z !== "%")
                throw new n("invalid intrinsic syntax, expected opening `%`");
              var w = [];
              return (
                O(L, j, function (I, M, $, Y) {
                  w[w.length] = $ ? O(Y, U, "$1") : M || I;
                }),
                w
              );
            },
            K = function (L, z) {
              var b = L,
                w;
              if ((S(A, b) && ((w = A[b]), (b = "%" + w[0] + "%")), S(E, b))) {
                var I = E[b];
                if ((I === h && (I = v(b)), typeof I > "u" && !z))
                  throw new i(
                    "intrinsic " +
                      L +
                      " exists, but is not available. Please file an issue!",
                  );
                return { alias: w, name: b, value: I };
              }
              throw new n("intrinsic " + L + " does not exist!");
            };
          t.exports = function (L, z) {
            if (typeof L != "string" || L.length === 0)
              throw new i("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof z != "boolean")
              throw new i('"allowMissing" argument must be a boolean');
            if (N(/^%?[^%]*%?$/, L) === null)
              throw new n(
                "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
              );
            var b = P(L),
              w = b.length > 0 ? b[0] : "",
              I = K("%" + w + "%", z),
              M = I.name,
              $ = I.value,
              Y = !1,
              re = I.alias;
            re && ((w = re[0]), x(b, F([0, 1], re)));
            for (var Z = 1, X = !0; Z < b.length; Z += 1) {
              var ee = b[Z],
                ge = R(ee, 0, 1),
                ue = R(ee, -1);
              if (
                (ge === '"' ||
                  ge === "'" ||
                  ge === "`" ||
                  ue === '"' ||
                  ue === "'" ||
                  ue === "`") &&
                ge !== ue
              )
                throw new n(
                  "property names with quotes must have matching quotes",
                );
              if (
                ((ee === "constructor" || !X) && (Y = !0),
                (w += "." + ee),
                (M = "%" + w + "%"),
                S(E, M))
              )
                $ = E[M];
              else if ($ != null) {
                if (!(ee in $)) {
                  if (!z)
                    throw new i(
                      "base intrinsic for " +
                        L +
                        " exists, but the property is not available.",
                    );
                  return;
                }
                if (l && Z + 1 >= b.length) {
                  var Se = l($, ee);
                  (X = !!Se),
                    X && "get" in Se && !("originalValue" in Se.get)
                      ? ($ = Se.get)
                      : ($ = $[ee]);
                } else (X = S($, ee)), ($ = $[ee]);
                X && !Y && (E[M] = $);
              }
            }
            return $;
          };
        },
      }),
      Rg = Ne({
        "node_modules/call-bind/index.js"(e, t) {
          var r = oa(),
            n = fc(),
            o = n("%Function.prototype.apply%"),
            i = n("%Function.prototype.call%"),
            a = n("%Reflect.apply%", !0) || r.call(i, o),
            l = n("%Object.getOwnPropertyDescriptor%", !0),
            u = n("%Object.defineProperty%", !0),
            c = n("%Math.max%");
          if (u)
            try {
              u({}, "a", { value: 1 });
            } catch {
              u = null;
            }
          t.exports = function (p) {
            var h = a(r, i, arguments);
            if (l && u) {
              var y = l(h, "length");
              y.configurable &&
                u(h, "length", {
                  value: 1 + c(0, p.length - (arguments.length - 1)),
                });
            }
            return h;
          };
          var d = function () {
            return a(r, o, arguments);
          };
          u ? u(t.exports, "apply", { value: d }) : (t.exports.apply = d);
        },
      }),
      Og = Ne({
        "node_modules/call-bind/callBound.js"(e, t) {
          var r = fc(),
            n = Rg(),
            o = n(r("String.prototype.indexOf"));
          t.exports = function (i, a) {
            var l = r(i, !!a);
            return typeof l == "function" && o(i, ".prototype.") > -1
              ? n(l)
              : l;
          };
        },
      }),
      _g = Ne({
        "node_modules/has-tostringtag/shams.js"(e, t) {
          var r = pc();
          t.exports = function () {
            return r() && !!Symbol.toStringTag;
          };
        },
      }),
      Pg = Ne({
        "node_modules/is-regex/index.js"(e, t) {
          var r = Og(),
            n = _g()(),
            o,
            i,
            a,
            l;
          n &&
            ((o = r("Object.prototype.hasOwnProperty")),
            (i = r("RegExp.prototype.exec")),
            (a = {}),
            (u = function () {
              throw a;
            }),
            (l = { toString: u, valueOf: u }),
            typeof Symbol.toPrimitive == "symbol" &&
              (l[Symbol.toPrimitive] = u));
          var u,
            c = r("Object.prototype.toString"),
            d = Object.getOwnPropertyDescriptor,
            p = "[object RegExp]";
          t.exports = n
            ? function (h) {
                if (!h || typeof h != "object") return !1;
                var y = d(h, "lastIndex"),
                  E = y && o(y, "value");
                if (!E) return !1;
                try {
                  i(h, l);
                } catch (v) {
                  return v === a;
                }
              }
            : function (h) {
                return !h || (typeof h != "object" && typeof h != "function")
                  ? !1
                  : c(h) === p;
              };
        },
      }),
      Bg = Ne({
        "node_modules/is-function/index.js"(e, t) {
          t.exports = n;
          var r = Object.prototype.toString;
          function n(o) {
            if (!o) return !1;
            var i = r.call(o);
            return (
              i === "[object Function]" ||
              (typeof o == "function" && i !== "[object RegExp]") ||
              (typeof window < "u" &&
                (o === window.setTimeout ||
                  o === window.alert ||
                  o === window.confirm ||
                  o === window.prompt))
            );
          }
        },
      }),
      Ng = Ne({
        "node_modules/is-symbol/index.js"(e, t) {
          var r = Object.prototype.toString,
            n = hc()();
          n
            ? ((o = Symbol.prototype.toString),
              (i = /^Symbol\(.*\)$/),
              (a = function (l) {
                return typeof l.valueOf() != "symbol" ? !1 : i.test(o.call(l));
              }),
              (t.exports = function (l) {
                if (typeof l == "symbol") return !0;
                if (r.call(l) !== "[object Symbol]") return !1;
                try {
                  return a(l);
                } catch {
                  return !1;
                }
              }))
            : (t.exports = function (l) {
                return !1;
              });
          var o, i, a;
        },
      }),
      jg = na(Pg()),
      Lg = na(Bg()),
      Mg = na(Ng());
    function Ug(e) {
      return e != null && typeof e == "object" && Array.isArray(e) === !1;
    }
    var $g =
        typeof window == "object" &&
        window &&
        window.Object === Object &&
        window,
      qg = $g,
      Vg = typeof self == "object" && self && self.Object === Object && self,
      Jg = qg || Vg || Function("return this")(),
      aa = Jg,
      Hg = aa.Symbol,
      $t = Hg,
      mc = Object.prototype,
      zg = mc.hasOwnProperty,
      Gg = mc.toString,
      fr = $t ? $t.toStringTag : void 0;
    function Wg(e) {
      var t = zg.call(e, fr),
        r = e[fr];
      try {
        e[fr] = void 0;
        var n = !0;
      } catch {}
      var o = Gg.call(e);
      return n && (t ? (e[fr] = r) : delete e[fr]), o;
    }
    var Kg = Wg,
      Yg = Object.prototype,
      Xg = Yg.toString;
    function Qg(e) {
      return Xg.call(e);
    }
    var Zg = Qg,
      e0 = "[object Null]",
      t0 = "[object Undefined]",
      $u = $t ? $t.toStringTag : void 0;
    function r0(e) {
      return e == null
        ? e === void 0
          ? t0
          : e0
        : $u && $u in Object(e)
          ? Kg(e)
          : Zg(e);
    }
    var n0 = r0,
      qu = $t ? $t.prototype : void 0;
    qu && qu.toString;
    function o0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    var yc = o0,
      a0 = "[object AsyncFunction]",
      i0 = "[object Function]",
      s0 = "[object GeneratorFunction]",
      l0 = "[object Proxy]";
    function u0(e) {
      if (!yc(e)) return !1;
      var t = n0(e);
      return t == i0 || t == s0 || t == a0 || t == l0;
    }
    var c0 = u0,
      d0 = aa["__core-js_shared__"],
      zo = d0,
      Vu = (function () {
        var e = /[^.]+$/.exec((zo && zo.keys && zo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function p0(e) {
      return !!Vu && Vu in e;
    }
    var h0 = p0,
      f0 = Function.prototype,
      m0 = f0.toString;
    function y0(e) {
      if (e != null) {
        try {
          return m0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    var g0 = y0,
      b0 = /[\\^$.*+?()[\]{}|]/g,
      E0 = /^\[object .+?Constructor\]$/,
      v0 = Function.prototype,
      A0 = Object.prototype,
      D0 = v0.toString,
      S0 = A0.hasOwnProperty,
      w0 = RegExp(
        "^" +
          D0.call(S0)
            .replace(b0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?",
            ) +
          "$",
      );
    function C0(e) {
      if (!yc(e) || h0(e)) return !1;
      var t = c0(e) ? w0 : E0;
      return t.test(g0(e));
    }
    var x0 = C0;
    function T0(e, t) {
      return e?.[t];
    }
    var F0 = T0;
    function I0(e, t) {
      var r = F0(e, t);
      return x0(r) ? r : void 0;
    }
    var gc = I0;
    function k0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    var R0 = k0,
      O0 = gc(Object, "create"),
      gr = O0;
    function _0() {
      (this.__data__ = gr ? gr(null) : {}), (this.size = 0);
    }
    var P0 = _0;
    function B0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    var N0 = B0,
      j0 = "__lodash_hash_undefined__",
      L0 = Object.prototype,
      M0 = L0.hasOwnProperty;
    function U0(e) {
      var t = this.__data__;
      if (gr) {
        var r = t[e];
        return r === j0 ? void 0 : r;
      }
      return M0.call(t, e) ? t[e] : void 0;
    }
    var $0 = U0,
      q0 = Object.prototype,
      V0 = q0.hasOwnProperty;
    function J0(e) {
      var t = this.__data__;
      return gr ? t[e] !== void 0 : V0.call(t, e);
    }
    var H0 = J0,
      z0 = "__lodash_hash_undefined__";
    function G0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = gr && t === void 0 ? z0 : t),
        this
      );
    }
    var W0 = G0;
    function qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    qt.prototype.clear = P0;
    qt.prototype.delete = N0;
    qt.prototype.get = $0;
    qt.prototype.has = H0;
    qt.prototype.set = W0;
    var Ju = qt;
    function K0() {
      (this.__data__ = []), (this.size = 0);
    }
    var Y0 = K0;
    function X0(e, t) {
      for (var r = e.length; r--; ) if (R0(e[r][0], t)) return r;
      return -1;
    }
    var cn = X0,
      Q0 = Array.prototype,
      Z0 = Q0.splice;
    function e2(e) {
      var t = this.__data__,
        r = cn(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Z0.call(t, r, 1), --this.size, !0;
    }
    var t2 = e2;
    function r2(e) {
      var t = this.__data__,
        r = cn(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    var n2 = r2;
    function o2(e) {
      return cn(this.__data__, e) > -1;
    }
    var a2 = o2;
    function i2(e, t) {
      var r = this.__data__,
        n = cn(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    var s2 = i2;
    function Vt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Vt.prototype.clear = Y0;
    Vt.prototype.delete = t2;
    Vt.prototype.get = n2;
    Vt.prototype.has = a2;
    Vt.prototype.set = s2;
    var l2 = Vt,
      u2 = gc(aa, "Map"),
      c2 = u2;
    function d2() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ju(),
          map: new (c2 || l2)(),
          string: new Ju(),
        });
    }
    var p2 = d2;
    function h2(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    var f2 = h2;
    function m2(e, t) {
      var r = e.__data__;
      return f2(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    var dn = m2;
    function y2(e) {
      var t = dn(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    var g2 = y2;
    function b2(e) {
      return dn(this, e).get(e);
    }
    var E2 = b2;
    function v2(e) {
      return dn(this, e).has(e);
    }
    var A2 = v2;
    function D2(e, t) {
      var r = dn(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    var S2 = D2;
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = p2;
    Jt.prototype.delete = g2;
    Jt.prototype.get = E2;
    Jt.prototype.has = A2;
    Jt.prototype.set = S2;
    var bc = Jt,
      w2 = "Expected a function";
    function ia(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(w2);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (ia.Cache || bc)()), r;
    }
    ia.Cache = bc;
    var C2 = ia,
      x2 = 500;
    function T2(e) {
      var t = C2(e, function (n) {
          return r.size === x2 && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    var F2 = T2,
      I2 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      k2 = /\\(\\)?/g;
    F2(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(I2, function (r, n, o, i) {
          t.push(o ? i.replace(k2, "$1") : n || r);
        }),
        t
      );
    });
    var R2 = Ug,
      O2 = (e) => {
        let t = null,
          r = !1,
          n = !1,
          o = !1,
          i = "";
        if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
          for (let a = 0; a < e.length; a += 1)
            !t && !r && !n && !o
              ? e[a] === '"' || e[a] === "'" || e[a] === "`"
                ? (t = e[a])
                : e[a] === "/" && e[a + 1] === "*"
                  ? (r = !0)
                  : e[a] === "/" && e[a + 1] === "/"
                    ? (n = !0)
                    : e[a] === "/" && e[a + 1] !== "/" && (o = !0)
              : (t &&
                  ((e[a] === t && e[a - 1] !== "\\") ||
                    (e[a] ===
                      `
` &&
                      t !== "`")) &&
                  (t = null),
                o &&
                  ((e[a] === "/" && e[a - 1] !== "\\") ||
                    e[a] ===
                      `
`) &&
                  (o = !1),
                r && e[a - 1] === "/" && e[a - 2] === "*" && (r = !1),
                n &&
                  e[a] ===
                    `
` &&
                  (n = !1)),
              !r && !n && (i += e[a]);
        else i = e;
        return i;
      },
      _2 = (0, Fg.default)(1e4)((e) => O2(e).replace(/\n\s*/g, "").trim()),
      P2 = function (e, t) {
        let r = t.slice(0, t.indexOf("{")),
          n = t.slice(t.indexOf("{"));
        if (r.includes("=>") || r.includes("function")) return t;
        let o = r;
        return (o = o.replace(e, "function")), o + n;
      },
      B2 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
    function Ec(e) {
      if (!R2(e)) return e;
      let t = e,
        r = !1;
      return (
        typeof Event < "u" && e instanceof Event && ((t = Tg(t)), (r = !0)),
        (t = Object.keys(t).reduce((n, o) => {
          try {
            t[o] && t[o].toJSON, (n[o] = t[o]);
          } catch {
            r = !0;
          }
          return n;
        }, {})),
        r ? t : e
      );
    }
    var N2 = function (e) {
        let t, r, n, o;
        return function (i, a) {
          try {
            if (i === "")
              return (
                (o = []),
                (t = new Map([[a, "[]"]])),
                (r = new Map()),
                (n = []),
                a
              );
            let l = r.get(this) || this;
            for (; n.length && l !== n[0]; ) n.shift(), o.pop();
            if (typeof a == "boolean") return a;
            if (a === void 0) return e.allowUndefined ? "_undefined_" : void 0;
            if (a === null) return null;
            if (typeof a == "number")
              return a === -1 / 0
                ? "_-Infinity_"
                : a === 1 / 0
                  ? "_Infinity_"
                  : Number.isNaN(a)
                    ? "_NaN_"
                    : a;
            if (typeof a == "bigint") return `_bigint_${a.toString()}`;
            if (typeof a == "string")
              return B2.test(a) ? (e.allowDate ? `_date_${a}` : void 0) : a;
            if ((0, jg.default)(a))
              return e.allowRegExp ? `_regexp_${a.flags}|${a.source}` : void 0;
            if ((0, Lg.default)(a)) {
              if (!e.allowFunction) return;
              let { name: c } = a,
                d = a.toString();
              return d.match(
                /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/,
              )
                ? `_function_${c}|${(() => {}).toString()}`
                : `_function_${c}|${_2(P2(i, d))}`;
            }
            if ((0, Mg.default)(a)) {
              if (!e.allowSymbol) return;
              let c = Symbol.keyFor(a);
              return c !== void 0
                ? `_gsymbol_${c}`
                : `_symbol_${a.toString().slice(7, -1)}`;
            }
            if (n.length >= e.maxDepth)
              return Array.isArray(a) ? `[Array(${a.length})]` : "[Object]";
            if (a === this) return `_duplicate_${JSON.stringify(o)}`;
            if (a instanceof Error && e.allowError)
              return {
                __isConvertedError__: !0,
                errorProperties: {
                  ...(a.cause ? { cause: a.cause } : {}),
                  ...a,
                  name: a.name,
                  message: a.message,
                  stack: a.stack,
                  "_constructor-name_": a.constructor.name,
                },
              };
            if (
              a.constructor &&
              a.constructor.name &&
              a.constructor.name !== "Object" &&
              !Array.isArray(a) &&
              !e.allowClass
            )
              return;
            let u = t.get(a);
            if (!u) {
              let c = Array.isArray(a) ? a : Ec(a);
              if (
                a.constructor &&
                a.constructor.name &&
                a.constructor.name !== "Object" &&
                !Array.isArray(a) &&
                e.allowClass
              )
                try {
                  Object.assign(c, {
                    "_constructor-name_": a.constructor.name,
                  });
                } catch {}
              return (
                o.push(i),
                n.unshift(c),
                t.set(a, JSON.stringify(o)),
                a !== c && r.set(a, c),
                c
              );
            }
            return `_duplicate_${u}`;
          } catch {
            return;
          }
        };
      },
      j2 = {
        maxDepth: 10,
        space: void 0,
        allowFunction: !0,
        allowRegExp: !0,
        allowDate: !0,
        allowClass: !0,
        allowError: !0,
        allowUndefined: !0,
        allowSymbol: !0,
        lazyEval: !0,
      },
      L2 = (e, t = {}) => {
        let r = { ...j2, ...t };
        return JSON.stringify(Ec(e), N2(r), t.space);
      };
    function M2(e) {
      return L2(e, { allowFunction: !1 });
    }
    var U2 = Kt({ sources: {} }),
      $2 = "--unknown--";
    var q2 = (e, t, r) => {
        let { sources: n } = r,
          o = n?.[e];
        return o?.[M2(t)] || o?.[$2] || { code: "" };
      },
      V2 = ({
        snippet: e,
        storyContext: t,
        typeFromProps: r,
        transformFromProps: n,
      }) => {
        let { __isArgsStory: o } = t.parameters,
          i = t.parameters.docs?.source || {},
          a = r || i.type || cr.AUTO;
        if (i.code !== void 0) return i.code;
        let l =
          a === cr.DYNAMIC || (a === cr.AUTO && e && o)
            ? e
            : i.originalSource || "";
        return (n ?? i.transform)?.(l, t) || l;
      },
      J2 = (e, t, r) => {
        let n,
          { of: o } = e;
        if ("of" in e && o === void 0)
          throw new Error(
            "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
          );
        if (o) n = t.resolveOf(o, ["story"]).story;
        else
          try {
            n = t.storyById();
          } catch {}
        let i = n?.parameters?.docs?.source || {},
          { code: a } = e,
          l = e.format ?? i.format,
          u = e.language ?? i.language ?? "jsx",
          c = e.dark ?? i.dark ?? !1;
        if (!a && !n) return { error: "Oh no! The source is not available." };
        if (a) return { code: a, format: l, language: u, dark: c };
        let d = t.getStoryContext(n),
          p = e.__forceInitialArgs ? d.initialArgs : d.unmappedArgs,
          h = q2(n.id, p, r);
        return (
          (l = h.format ?? n.parameters.docs?.source?.format ?? !1),
          {
            code: V2({
              snippet: h.code,
              storyContext: { ...d, args: p },
              typeFromProps: e.type,
              transformFromProps: e.transform,
            }),
            format: l,
            language: u,
            dark: c,
          }
        );
      },
      vc = (e) => {
        let t = Dr(U2),
          r = Dr(uc),
          n = J2(e, r, t);
        return C.createElement(Yu, { ...n });
      };
    var { document: H2 } = globalThis;
    function z2(e, t) {
      e.channel.emit(ui, t);
    }
    var s5 = Sn.a;
    var Ac = ["h1", "h2", "h3", "h4", "h5", "h6"],
      G2 = Ac.reduce(
        (e, t) => ({
          ...e,
          [t]: k(t)({
            "& svg": {
              position: "relative",
              top: "-0.1em",
              visibility: "hidden",
            },
            "&:hover svg": { visibility: "visible" },
          }),
        }),
        {},
      ),
      W2 = k.a(() => ({
        float: "left",
        lineHeight: "inherit",
        paddingRight: "10px",
        marginLeft: "-24px",
        color: "inherit",
      })),
      K2 = ({ as: e, id: t, children: r, ...n }) => {
        let o = Dr(uc),
          i = G2[e],
          a = `#${t}`;
        return C.createElement(
          i,
          { id: t, ...n },
          C.createElement(
            W2,
            {
              "aria-hidden": "true",
              href: a,
              tabIndex: -1,
              target: "_self",
              onClick: (l) => {
                H2.getElementById(t) && z2(o, a);
              },
            },
            C.createElement(pu, null),
          ),
          r,
        );
      },
      Dc = (e) => {
        let { as: t, id: r, children: n, ...o } = e;
        if (r) return C.createElement(K2, { as: t, id: r, ...o }, n);
        let i = t,
          { as: a, ...l } = e;
        return C.createElement(i, { ...wn(l, t) });
      },
      l5 = Ac.reduce(
        (e, t) => ({ ...e, [t]: (r) => C.createElement(Dc, { as: t, ...r }) }),
        {},
      );
    var Y2 = ((e) => (
      (e.INFO = "info"),
      (e.NOTES = "notes"),
      (e.DOCGEN = "docgen"),
      (e.AUTO = "auto"),
      e
    ))(Y2 || {});
    var u5 = jt(Hm()),
      c5 = k.div(({ theme: e }) => ({
        width: "10rem",
        "@media (max-width: 768px)": { display: "none" },
      })),
      d5 = k.div(({ theme: e }) => ({
        position: "fixed",
        bottom: 0,
        top: 0,
        width: "10rem",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        overflowY: "auto",
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s2,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        WebkitOverflowScrolling: "touch",
        "& *": { boxSizing: "border-box" },
        "& > .toc-wrapper > .toc-list": {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
          ".toc-list": {
            paddingLeft: 0,
            borderLeft: `solid 2px ${e.color.mediumlight}`,
            ".toc-list": {
              paddingLeft: 0,
              borderLeft: `solid 2px ${e.color.mediumlight}`,
            },
          },
        },
        "& .toc-list-item": {
          position: "relative",
          listStyleType: "none",
          marginLeft: 20,
          paddingTop: 3,
          paddingBottom: 3,
        },
        "& .toc-list-item::before": {
          content: '""',
          position: "absolute",
          height: "100%",
          top: 0,
          left: 0,
          transform: "translateX(calc(-2px - 20px))",
          borderLeft: `solid 2px ${e.color.mediumdark}`,
          opacity: 0,
          transition: "opacity 0.2s",
        },
        "& .toc-list-item.is-active-li::before": { opacity: 1 },
        "& .toc-list-item > a": {
          color: e.color.defaultText,
          textDecoration: "none",
        },
        "& .toc-list-item.is-active-li > a": {
          fontWeight: 600,
          color: e.color.secondary,
          textDecoration: "none",
        },
      })),
      p5 = k.p(({ theme: e }) => ({
        fontWeight: 600,
        fontSize: "0.875em",
        color: e.textColor,
        textTransform: "uppercase",
        marginBottom: 10,
      }));
    var { document: h5, window: f5 } = globalThis;
    var X2 =
        /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
      Q2 = Object.hasOwnProperty,
      Z2 = class {
        constructor() {
          this.occurrences, this.reset();
        }
        slug(e, t) {
          let r = this,
            n = e1(e, t === !0),
            o = n;
          for (; Q2.call(r.occurrences, n); )
            r.occurrences[o]++, (n = o + "-" + r.occurrences[o]);
          return (r.occurrences[n] = 0), n;
        }
        reset() {
          this.occurrences = Object.create(null);
        }
      };
    function e1(e, t) {
      return typeof e != "string"
        ? ""
        : (t || (e = e.toLowerCase()), e.replace(X2, "").replace(/ /g, "-"));
    }
    var t1 = new Z2(),
      r1 = ({ children: e, disableAnchor: t, ...r }) => {
        if (t || typeof e != "string") return C.createElement(En, null, e);
        let n = t1.slug(e.toLowerCase());
        return C.createElement(Dc, { as: "h2", id: n, ...r }, e);
      };
    var m5 = k(r1)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: "16px",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      color: e.textMutedColor,
      border: 0,
      marginBottom: "12px",
      "&:first-of-type": { marginTop: "56px" },
    }));
    ko.register(Hr, (e) => {
      ko.add(Ql, {
        title: "Code",
        type: Zl.PANEL,
        paramKey: Fo,
        disabled: (t) => !t?.docs?.codePanel,
        match: ({ viewMode: t }) => t === "story",
        render: ({ active: t }) => {
          let r = tu(Fo, { source: { code: "" }, theme: "dark" }),
            [n, o] = C.useState({});
          eu({
            [Io]: ({ source: a, format: l }) => {
              o({ source: a, format: l });
            },
          });
          let i = Gr().base !== "light";
          return C.createElement(
            gn,
            { active: !!t },
            C.createElement(
              n1,
              null,
              C.createElement(vc, {
                ...r.source,
                code: r.source.code || n.source,
                format: r.source.format || n.format,
                dark: i,
              }),
            ),
          );
        },
      });
    });
    var n1 = k.div(() => ({
      height: "100%",
      [`> :first-child${zr}`]: { margin: 0, height: "100%", boxShadow: "none" },
    }));
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}

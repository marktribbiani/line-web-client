(function () {
  'use strict';
  var h,
    aa = aa || {},
    k = this,
    m = function (a) {
      return void 0 !== a;
    },
    ba = function () {},
    ca = function (a) {
      var b = typeof a;
      if ('object' == b)
        if (a) {
          if (a instanceof Array) return 'array';
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ('[object Window]' == c) return 'object';
          if (
            '[object Array]' == c ||
            ('number' == typeof a.length &&
              'undefined' != typeof a.splice &&
              'undefined' != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable('splice'))
          )
            return 'array';
          if (
            '[object Function]' == c ||
            ('undefined' != typeof a.call &&
              'undefined' != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable('call'))
          )
            return 'function';
        } else return 'null';
      else if ('function' == b && 'undefined' == typeof a.call) return 'object';
      return b;
    },
    n = function (a) {
      return 'array' == ca(a);
    },
    da = function (a) {
      var b = ca(a);
      return 'array' == b || ('object' == b && 'number' == typeof a.length);
    },
    p = function (a) {
      return 'string' == typeof a;
    },
    ea = function (a) {
      return 'number' == typeof a;
    },
    q = function (a) {
      return 'function' == ca(a);
    },
    r = function (a) {
      var b = typeof a;
      return ('object' == b && null != a) || 'function' == b;
    },
    fa = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ga = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    t = function (a, b, c) {
      t =
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code')
          ? fa
          : ga;
      return t.apply(null, arguments);
    },
    ha = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b);
      };
    },
    u =
      Date.now ||
      function () {
        return +new Date();
      },
    v = function (a, b) {
      var c = a.split('.'),
        d = k;
      c[0] in d || !d.execScript || d.execScript('var ' + c[0]);
      for (var e; c.length && (e = c.shift()); )
        !c.length && m(b) ? (d[e] = b) : (d = d[e] ? d[e] : (d[e] = {}));
    },
    w = function (a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.P = b.prototype;
      a.prototype = new c();
      a.ie = function (a, c, f) {
        for (var g = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
          g[l - 2] = arguments[l];
        return b.prototype[c].apply(a, g);
      };
    };
  Function.prototype.bind =
    Function.prototype.bind ||
    function (a, b) {
      if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return t.apply(null, c);
      }
      return t(this, a);
    };
  var x = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, x);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };
  w(x, Error);
  x.prototype.name = 'CustomError';
  var ia = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
        },
    ja = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var y = Array.prototype,
    ka = y.indexOf
      ? function (a, b, c) {
          return y.indexOf.call(a, b, c);
        }
      : function (a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    la = y.forEach
      ? function (a, b, c) {
          y.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = p(a) ? a.split('') : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    ma = y.some
      ? function (a, b, c) {
          return y.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = p(a) ? a.split('') : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        },
    na = y.every
      ? function (a, b, c) {
          return y.every.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = p(a) ? a.split('') : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
          return !0;
        },
    pa = function (a) {
      var b;
      a: {
        b = oa;
        for (var c = a.length, d = p(a) ? a.split('') : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
          }
        b = -1;
      }
      return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
    },
    qa = function (a, b) {
      var c = ka(a, b),
        d;
      (d = 0 <= c) && y.splice.call(a, c, 1);
      return d;
    },
    ra = function (a) {
      return y.concat.apply(y, arguments);
    },
    sa = function (a, b, c) {
      return 2 >= arguments.length ? y.slice.call(a, b) : y.slice.call(a, b, c);
    };
  var ta = 'StopIteration' in k ? k.StopIteration : Error('StopIteration'),
    ua = function () {};
  ua.prototype.next = function () {
    throw ta;
  };
  ua.prototype.Sb = function () {
    return this;
  };
  var va = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    wa = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    xa = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    ya = function (a, b) {
      var c;
      a: {
        for (c in a) if (b.call(void 0, a[c], c, a)) break a;
        c = void 0;
      }
      return c && a[c];
    },
    za = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' ',
    ),
    Aa = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < za.length; f++)
          (c = za[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    Ba = function (a) {
      var b = arguments.length;
      if (1 == b && n(arguments[0])) return Ba.apply(null, arguments[0]);
      for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
      return c;
    };
  var z = function (a, b) {
    this.p = {};
    this.b = [];
    this.Ja = this.j = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error('Uneven number of arguments');
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else a && this.ha(a);
  };
  z.prototype.t = function () {
    Ca(this);
    for (var a = [], b = 0; b < this.b.length; b++) a.push(this.p[this.b[b]]);
    return a;
  };
  z.prototype.H = function () {
    Ca(this);
    return this.b.concat();
  };
  z.prototype.T = function (a) {
    return A(this.p, a);
  };
  z.prototype.remove = function (a) {
    return A(this.p, a)
      ? (delete this.p[a], this.j--, this.Ja++, this.b.length > 2 * this.j && Ca(this), !0)
      : !1;
  };
  var Ca = function (a) {
    if (a.j != a.b.length) {
      for (var b = 0, c = 0; b < a.b.length; ) {
        var d = a.b[b];
        A(a.p, d) && (a.b[c++] = d);
        b++;
      }
      a.b.length = c;
    }
    if (a.j != a.b.length) {
      for (var e = {}, c = (b = 0); b < a.b.length; )
        (d = a.b[b]), A(e, d) || ((a.b[c++] = d), (e[d] = 1)), b++;
      a.b.length = c;
    }
  };
  h = z.prototype;
  h.get = function (a, b) {
    return A(this.p, a) ? this.p[a] : b;
  };
  h.set = function (a, b) {
    A(this.p, a) || (this.j++, this.b.push(a), this.Ja++);
    this.p[a] = b;
  };
  h.ha = function (a) {
    var b;
    a instanceof z ? ((b = a.H()), (a = a.t())) : ((b = xa(a)), (a = wa(a)));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
  };
  h.forEach = function (a, b) {
    for (var c = this.H(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  h.clone = function () {
    return new z(this);
  };
  h.Nb = function () {
    Ca(this);
    for (var a = {}, b = 0; b < this.b.length; b++) {
      var c = this.b[b];
      a[c] = this.p[c];
    }
    return a;
  };
  h.Sb = function (a) {
    Ca(this);
    var b = 0,
      c = this.b,
      d = this.p,
      e = this.Ja,
      f = this,
      g = new ua();
    g.next = function () {
      for (;;) {
        if (e != f.Ja) throw Error('The map has changed since the iterator was created');
        if (b >= c.length) throw ta;
        var g = c[b++];
        return a ? g : d[g];
      }
    };
    return g;
  };
  var A = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var Da,
    Ea,
    Fa = {
      id: 'hitType',
      name: 't',
      valueType: 'text',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Ga = {
      id: 'sessionControl',
      name: 'sc',
      valueType: 'text',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Ha = {
      id: 'description',
      name: 'cd',
      valueType: 'text',
      maxLength: 2048,
      defaultValue: void 0,
    },
    Ia = {
      id: 'eventCategory',
      name: 'ec',
      valueType: 'text',
      maxLength: 150,
      defaultValue: void 0,
    },
    Ja = {
      id: 'eventAction',
      name: 'ea',
      valueType: 'text',
      maxLength: 500,
      defaultValue: void 0,
    },
    Ka = { id: 'eventLabel', name: 'el', valueType: 'text', maxLength: 500, defaultValue: void 0 },
    La = {
      id: 'eventValue',
      name: 'ev',
      valueType: 'integer',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Ma = {
      zd: Fa,
      $c: {
        id: 'anonymizeIp',
        name: 'aip',
        valueType: 'boolean',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Kd: {
        id: 'queueTime',
        name: 'qt',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      fd: {
        id: 'cacheBuster',
        name: 'z',
        valueType: 'text',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Qd: Ga,
      Rd: {
        id: 'sessionGroup',
        name: 'sg',
        valueType: 'text',
        maxLength: void 0,
        defaultValue: void 0,
      },
      ge: {
        id: 'userId',
        name: 'uid',
        valueType: 'text',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Hd: {
        id: 'nonInteraction',
        name: 'ni',
        valueType: 'boolean',
        maxLength: void 0,
        defaultValue: void 0,
      },
      qd: Ha,
      $d: { id: 'title', name: 'dt', valueType: 'text', maxLength: 1500, defaultValue: void 0 },
      bd: { id: 'appId', name: 'aid', valueType: 'text', maxLength: 150, defaultValue: void 0 },
      cd: {
        id: 'appInstallerId',
        name: 'aiid',
        valueType: 'text',
        maxLength: 150,
        defaultValue: void 0,
      },
      td: Ia,
      sd: Ja,
      ud: Ka,
      vd: La,
      Td: {
        id: 'socialNetwork',
        name: 'sn',
        valueType: 'text',
        maxLength: 50,
        defaultValue: void 0,
      },
      Sd: {
        id: 'socialAction',
        name: 'sa',
        valueType: 'text',
        maxLength: 50,
        defaultValue: void 0,
      },
      Ud: {
        id: 'socialTarget',
        name: 'st',
        valueType: 'text',
        maxLength: 2048,
        defaultValue: void 0,
      },
      ce: {
        id: 'transactionId',
        name: 'ti',
        valueType: 'text',
        maxLength: 500,
        defaultValue: void 0,
      },
      be: {
        id: 'transactionAffiliation',
        name: 'ta',
        valueType: 'text',
        maxLength: 500,
        defaultValue: void 0,
      },
      de: {
        id: 'transactionRevenue',
        name: 'tr',
        valueType: 'currency',
        maxLength: void 0,
        defaultValue: void 0,
      },
      ee: {
        id: 'transactionShipping',
        name: 'ts',
        valueType: 'currency',
        maxLength: void 0,
        defaultValue: void 0,
      },
      fe: {
        id: 'transactionTax',
        name: 'tt',
        valueType: 'currency',
        maxLength: void 0,
        defaultValue: void 0,
      },
      od: {
        id: 'currencyCode',
        name: 'cu',
        valueType: 'text',
        maxLength: 10,
        defaultValue: void 0,
      },
      Dd: {
        id: 'itemPrice',
        name: 'ip',
        valueType: 'currency',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Ed: {
        id: 'itemQuantity',
        name: 'iq',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Bd: { id: 'itemCode', name: 'ic', valueType: 'text', maxLength: 500, defaultValue: void 0 },
      Cd: { id: 'itemName', name: 'in', valueType: 'text', maxLength: 500, defaultValue: void 0 },
      Ad: {
        id: 'itemCategory',
        name: 'iv',
        valueType: 'text',
        maxLength: 500,
        defaultValue: void 0,
      },
      md: {
        id: 'campaignSource',
        name: 'cs',
        valueType: 'text',
        maxLength: 100,
        defaultValue: void 0,
      },
      kd: {
        id: 'campaignMedium',
        name: 'cm',
        valueType: 'text',
        maxLength: 50,
        defaultValue: void 0,
      },
      ld: {
        id: 'campaignName',
        name: 'cn',
        valueType: 'text',
        maxLength: 100,
        defaultValue: void 0,
      },
      jd: {
        id: 'campaignKeyword',
        name: 'ck',
        valueType: 'text',
        maxLength: 500,
        defaultValue: void 0,
      },
      gd: {
        id: 'campaignContent',
        name: 'cc',
        valueType: 'text',
        maxLength: 500,
        defaultValue: void 0,
      },
      hd: { id: 'campaignId', name: 'ci', valueType: 'text', maxLength: 100, defaultValue: void 0 },
      yd: {
        id: 'gclid',
        name: 'gclid',
        valueType: 'text',
        maxLength: void 0,
        defaultValue: void 0,
      },
      pd: {
        id: 'dclid',
        name: 'dclid',
        valueType: 'text',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Jd: {
        id: 'pageLoadTime',
        name: 'plt',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      rd: {
        id: 'dnsTime',
        name: 'dns',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Vd: {
        id: 'tcpConnectTime',
        name: 'tcp',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Pd: {
        id: 'serverResponseTime',
        name: 'srt',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Id: {
        id: 'pageDownloadTime',
        name: 'pdt',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Ld: {
        id: 'redirectResponseTime',
        name: 'rrt',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Wd: {
        id: 'timingCategory',
        name: 'utc',
        valueType: 'text',
        maxLength: 150,
        defaultValue: void 0,
      },
      Zd: { id: 'timingVar', name: 'utv', valueType: 'text', maxLength: 500, defaultValue: void 0 },
      Yd: {
        id: 'timingValue',
        name: 'utt',
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      },
      Xd: {
        id: 'timingLabel',
        name: 'utl',
        valueType: 'text',
        maxLength: 500,
        defaultValue: void 0,
      },
      wd: {
        id: 'exDescription',
        name: 'exd',
        valueType: 'text',
        maxLength: 150,
        defaultValue: void 0,
      },
      xd: {
        id: 'exFatal',
        name: 'exf',
        valueType: 'boolean',
        maxLength: void 0,
        defaultValue: '1',
      },
    },
    Na = function (a) {
      if (1 > a || 200 < a) throw Error('Expected dimension index range 1-200, but was : ' + a);
      return {
        id: 'dimension' + a,
        name: 'cd' + a,
        valueType: 'text',
        maxLength: 150,
        defaultValue: void 0,
      };
    },
    Oa = function (a) {
      if (1 > a || 200 < a) throw Error('Expected metric index range 1-200, but was : ' + a);
      return {
        id: 'metric' + a,
        name: 'cm' + a,
        valueType: 'integer',
        maxLength: void 0,
        defaultValue: void 0,
      };
    };
  var Pa = function (a) {
      if (1 > a) return '0';
      if (3 > a) return '1-2';
      a = Math.floor(Math.log(a - 1) / Math.log(2));
      return Math.pow(2, a) + 1 + '-' + Math.pow(2, a + 1);
    },
    Qa = function (a, b) {
      for (var c = 0, d = a.length - 1, e = 0; c <= d; ) {
        var f = Math.floor((c + d) / 2),
          e = a[f];
        if (b <= e) {
          d = 0 == f ? 0 : a[f - 1];
          if (b > d) return (d + 1).toString() + '-' + e.toString();
          d = f - 1;
        } else if (b > e) {
          if (f >= a.length - 1) return (a[a.length - 1] + 1).toString() + '+';
          c = f + 1;
        }
      }
      return '<= 0';
    };
  var B = function () {
      this.gb = [];
    },
    Ra = function () {
      return new B();
    };
  h = B.prototype;
  h.when = function (a) {
    this.gb.push(a);
    return this;
  };
  h.Rb = function (a) {
    var b = arguments;
    this.when(function (a) {
      return 0 <= ka(b, a.ub());
    });
    return this;
  };
  h.Yc = function (a, b) {
    var c = sa(arguments, 1);
    this.when(function (b) {
      b = b.V().get(a);
      return 0 <= ka(c, b);
    });
    return this;
  };
  h.mb = function (a, b) {
    if (r(this.e)) throw Error('Filter has already been set.');
    this.e = r(b) ? t(a, b) : a;
    return this;
  };
  h.ia = function () {
    if (0 == this.gb.length)
      throw Error('Must specify at least one predicate using #when or a helper method.');
    if (!r(this.e)) throw Error('Must specify a delegate filter using #applyFilter.');
    return t(function (a) {
      na(this.gb, function (b) {
        return b(a);
      }) && this.e(a);
    }, this);
  };
  var C = function () {
    this.lb = !1;
    this.zb = '';
    this.Kb = !1;
    this.ya = null;
  };
  C.prototype.Wb = function (a) {
    this.lb = !0;
    this.zb = a || ' - ';
    return this;
  };
  C.prototype.Sc = function () {
    this.Kb = !0;
    return this;
  };
  C.prototype.Dc = function () {
    return Sa(this, Pa);
  };
  C.prototype.Ec = function (a) {
    return Sa(this, ha(Qa, a));
  };
  var Sa = function (a, b) {
    if (null != a.ya) throw Error('LabelerBuilder: Only one labeling strategy may be used.');
    a.ya = t(function (a) {
      var d = a.V().get(La),
        e = a.V().get(Ka);
      ea(d) && ((d = b(d)), null != e && this.lb && (d = e + this.zb + d), a.V().set(Ka, d));
    }, a);
    return a;
  };
  C.prototype.ia = function () {
    if (null == this.ya)
      throw Error(
        'LabelerBuilder: a labeling strategy must be specified prior to calling build().',
      );
    return Ra()
      .Rb('event')
      .mb(
        t(function (a) {
          this.ya(a);
          this.Kb && a.V().remove(La);
        }, this),
      )
      .ia();
  };
  var Ua = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ('undefined' == typeof d) throw Error('[goog.string.format] Template required');
      return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (
        a,
        b,
        d,
        l,
        D,
        N,
        Y,
        Z,
      ) {
        if ('%' == N) return '%';
        var Nb = c.shift();
        if ('undefined' == typeof Nb) throw Error('[goog.string.format] Not enough arguments');
        arguments[0] = Nb;
        return Ta[N].apply(null, arguments);
      });
    },
    Ta = {
      s: function (a, b, c) {
        return isNaN(c) || '' == c || a.length >= c
          ? a
          : (a =
              -1 < b.indexOf('-', 0)
                ? a + Array(c - a.length + 1).join(' ')
                : Array(c - a.length + 1).join(' ') + a);
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || '' == e || (d = parseFloat(a).toFixed(e));
        var f;
        f = 0 > a ? '-' : 0 <= b.indexOf('+') ? '+' : 0 <= b.indexOf(' ') ? ' ' : '';
        0 <= a && (d = f + d);
        if (isNaN(c) || d.length >= c) return d;
        d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
        a = c - d.length - f.length;
        return (d =
          0 <= b.indexOf('-', 0)
            ? f + d + Array(a + 1).join(' ')
            : f + Array(a + 1).join(0 <= b.indexOf('0', 0) ? '0' : ' ') + d);
      },
      d: function (a, b, c, d, e, f, g, l) {
        return Ta.f(parseInt(a, 10), b, c, d, 0, f, g, l);
      },
    };
  Ta.i = Ta.d;
  Ta.u = Ta.d;
  var Va = function (a) {
      if ('function' == typeof a.t) return a.t();
      if (p(a)) return a.split('');
      if (da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return wa(a);
    },
    Wa = function (a, b) {
      if ('function' == typeof a.forEach) a.forEach(b, void 0);
      else if (da(a) || p(a)) la(a, b, void 0);
      else {
        var c;
        if ('function' == typeof a.H) c = a.H();
        else if ('function' != typeof a.t)
          if (da(a) || p(a)) {
            c = [];
            for (var d = a.length, e = 0; e < d; e++) c.push(e);
          } else c = xa(a);
        else c = void 0;
        for (var d = Va(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
      }
    };
  var E = function (a) {
    this.w = new z();
    if (0 < arguments.length % 2)
      throw Error('Uneven number of arguments to ParameterMap constructor.');
    for (var b = arguments, c = 0; c < b.length; c += 2) this.set(b[c], b[c + 1]);
  };
  E.prototype.set = function (a, b) {
    if (null == b) throw Error('undefined-or-null value for key: ' + a.name);
    this.w.set(a.name, { key: a, value: b });
  };
  E.prototype.remove = function (a) {
    this.w.remove(a.name);
  };
  E.prototype.get = function (a) {
    a = this.w.get(a.name, null);
    return null === a ? null : a.value;
  };
  E.prototype.ha = function (a) {
    this.w.ha(a.w);
  };
  var Xa = function (a, b) {
    la(a.w.t(), function (a) {
      b(a.key, a.value);
    });
  };
  E.prototype.Nb = function () {
    var a = {};
    Xa(this, function (b, c) {
      a[b.id] = c;
    });
    return a;
  };
  E.prototype.clone = function () {
    var a = new E();
    a.w = this.w.clone();
    return a;
  };
  E.prototype.toString = function () {
    var a = {};
    Xa(this, function (b, c) {
      a[b.id] = c;
    });
    return JSON.stringify(a);
  };
  var F = function (a) {
    this.e = a;
  };
  h = F.prototype;
  h.Yb = function (a) {
    var b = new F(t(this.M, this));
    b.I = Ia;
    b.Q = a;
    return b;
  };
  h.action = function (a) {
    var b = new F(t(this.M, this));
    b.I = Ja;
    b.Q = a;
    return b;
  };
  h.label = function (a) {
    var b = new F(t(this.M, this));
    b.I = Ka;
    b.Q = a;
    return b;
  };
  h.value = function (a) {
    var b = new F(t(this.M, this));
    b.I = La;
    b.Q = a;
    return b;
  };
  h.fc = function (a) {
    var b = new F(t(this.M, this));
    b.I = Na(a.index);
    b.Q = a.value;
    return b;
  };
  h.vc = function (a) {
    var b = new F(t(this.M, this));
    b.I = Oa(a.index);
    b.Q = a.value;
    return b;
  };
  h.send = function (a) {
    var b = new E();
    this.M(b);
    return a.send('event', b);
  };
  h.M = function (a) {
    null != this.I && null != this.Q && !a.w.T(this.I.name) && a.set(this.I, this.Q);
    r(this.e) && this.e(a);
  };
  var Ya = new F(ba);
  var G = function () {
    this.aa = this.aa;
    this.Ca = this.Ca;
  };
  G.prototype.aa = !1;
  G.prototype.ma = function () {
    this.aa || ((this.aa = !0), this.o());
  };
  G.prototype.o = function () {
    if (this.Ca) for (; this.Ca.length; ) this.Ca.shift()();
  };
  var Za = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.X = !1;
    this.Hb = !0;
  };
  Za.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Hb = !1;
  };
  var $a = function (a) {
    $a[' '](a);
    return a;
  };
  $a[' '] = ba;
  var H;
  a: {
    var ab = k.navigator;
    if (ab) {
      var bb = ab.userAgent;
      if (bb) {
        H = bb;
        break a;
      }
    }
    H = '';
  }
  var cb = function () {
    return -1 != H.indexOf('Edge') || -1 != H.indexOf('Trident') || -1 != H.indexOf('MSIE');
  };
  var I = function () {
    return -1 != H.indexOf('Edge');
  };
  var db = -1 != H.indexOf('Opera') || -1 != H.indexOf('OPR'),
    J = cb(),
    eb =
      -1 != H.indexOf('Gecko') &&
      !(-1 != H.toLowerCase().indexOf('webkit') && !I()) &&
      !(-1 != H.indexOf('Trident') || -1 != H.indexOf('MSIE')) &&
      !I(),
    fb = -1 != H.toLowerCase().indexOf('webkit') && !I(),
    gb = function () {
      var a = H;
      if (eb) return /rv\:([^\);]+)(\)|;)/.exec(a);
      if (J && I()) return /Edge\/([\d\.]+)/.exec(a);
      if (J) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (fb) return /WebKit\/(\S+)/.exec(a);
    },
    hb = function () {
      var a = k.document;
      return a ? a.documentMode : void 0;
    },
    ib = (function () {
      if (db && k.opera) {
        var a = k.opera.version;
        return q(a) ? a() : a;
      }
      var a = '',
        b = gb();
      b && (a = b ? b[1] : '');
      return J && !I() && ((b = hb()), b > parseFloat(a)) ? String(b) : a;
    })(),
    jb = {},
    K = function (a) {
      var b;
      if (!(b = jb[a])) {
        b = 0;
        for (
          var c = ia(String(ib)).split('.'),
            d = ia(String(a)).split('.'),
            e = Math.max(c.length, d.length),
            f = 0;
          0 == b && f < e;
          f++
        ) {
          var g = c[f] || '',
            l = d[f] || '',
            D = /(\d*)(\D*)/g,
            N = /(\d*)(\D*)/g;
          do {
            var Y = D.exec(g) || ['', '', ''],
              Z = N.exec(l) || ['', '', ''];
            if (0 == Y[0].length && 0 == Z[0].length) break;
            b =
              ja(
                0 == Y[1].length ? 0 : parseInt(Y[1], 10),
                0 == Z[1].length ? 0 : parseInt(Z[1], 10),
              ) ||
              ja(0 == Y[2].length, 0 == Z[2].length) ||
              ja(Y[2], Z[2]);
          } while (0 == b);
        }
        b = jb[a] = 0 <= b;
      }
      return b;
    },
    kb = k.document,
    lb = hb(),
    mb =
      !kb || !J || (!lb && I())
        ? void 0
        : lb || ('CSS1Compat' == kb.compatMode ? parseInt(ib, 10) : 5);
  var nb = !J || (J && (I() || 9 <= mb)),
    ob = J && !K('9'),
    pb = !fb || K('528'),
    qb = (eb && K('1.9b')) || (J && K('8')) || (db && K('9.5')) || (fb && K('528')),
    rb = (eb && !K('8')) || (J && !K('9'));
  var sb = function (a, b) {
    Za.call(this, a ? a.type : '');
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.sb = this.state = null;
    if (a) {
      var c = (this.type = a.type);
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      var d = a.relatedTarget;
      if (d) {
        if (eb) {
          var e;
          a: {
            try {
              $a(d.nodeName);
              e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (d = null);
        }
      } else 'mouseover' == c ? (d = a.fromElement) : 'mouseout' == c && (d = a.toElement);
      this.relatedTarget = d;
      this.offsetX = fb || void 0 !== a.offsetX ? a.offsetX : a.layerX;
      this.offsetY = fb || void 0 !== a.offsetY ? a.offsetY : a.layerY;
      this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
      this.screenX = a.screenX || 0;
      this.screenY = a.screenY || 0;
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.charCode = a.charCode || ('keypress' == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.state = a.state;
      this.sb = a;
      a.defaultPrevented && this.preventDefault();
    }
  };
  w(sb, Za);
  sb.prototype.preventDefault = function () {
    sb.P.preventDefault.call(this);
    var a = this.sb;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), ob))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var tb = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    ub = function (a) {
      return !(!a || !a[tb]);
    },
    vb = 0;
  var wb = function (a, b, c, d, e) {
      this.O = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.ka = !!d;
      this.sa = e;
      this.key = ++vb;
      this.removed = this.ja = !1;
    },
    xb = function (a) {
      a.removed = !0;
      a.O = null;
      a.proxy = null;
      a.src = null;
      a.sa = null;
    };
  var L = function (a) {
    this.src = a;
    this.k = {};
    this.fa = 0;
  };
  L.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.k[f];
    a || ((a = this.k[f] = []), this.fa++);
    var g = yb(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.ja = !1))
      : ((b = new wb(b, this.src, f, !!d, e)), (b.ja = c), a.push(b));
    return b;
  };
  L.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.k)) return !1;
    var e = this.k[a];
    b = yb(e, b, c, d);
    return -1 < b
      ? (xb(e[b]), y.splice.call(e, b, 1), 0 == e.length && (delete this.k[a], this.fa--), !0)
      : !1;
  };
  var zb = function (a, b) {
    var c = b.type;
    if (!(c in a.k)) return !1;
    var d = qa(a.k[c], b);
    d && (xb(b), 0 == a.k[c].length && (delete a.k[c], a.fa--));
    return d;
  };
  L.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.k)
      if (!a || c == a) {
        for (var d = this.k[c], e = 0; e < d.length; e++) ++b, xb(d[e]);
        delete this.k[c];
        this.fa--;
      }
    return b;
  };
  L.prototype.ba = function (a, b, c, d) {
    a = this.k[a.toString()];
    var e = -1;
    a && (e = yb(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  var yb = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.O == b && f.ka == !!c && f.sa == d) return e;
    }
    return -1;
  };
  var Ab = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    Bb = {},
    Cb = 0,
    Db = function (a, b, c, d, e) {
      if (n(b)) {
        for (var f = 0; f < b.length; f++) Db(a, b[f], c, d, e);
        return null;
      }
      c = Eb(c);
      return ub(a) ? a.listen(b, c, d, e) : Fb(a, b, c, !1, d, e);
    },
    Fb = function (a, b, c, d, e, f) {
      if (!b) throw Error('Invalid event type');
      var g = !!e,
        l = Gb(a);
      l || (a[Ab] = l = new L(a));
      c = l.add(b, c, d, e, f);
      if (c.proxy) return c;
      d = Hb();
      c.proxy = d;
      d.src = a;
      d.O = c;
      a.addEventListener
        ? a.addEventListener(b.toString(), d, g)
        : a.attachEvent(Ib(b.toString()), d);
      Cb++;
      return c;
    },
    Hb = function () {
      var a = Jb,
        b = nb
          ? function (c) {
              return a.call(b.src, b.O, c);
            }
          : function (c) {
              c = a.call(b.src, b.O, c);
              if (!c) return c;
            };
      return b;
    },
    Kb = function (a, b, c, d, e) {
      if (n(b)) {
        for (var f = 0; f < b.length; f++) Kb(a, b[f], c, d, e);
        return null;
      }
      c = Eb(c);
      return ub(a) ? a.cb(b, c, d, e) : Fb(a, b, c, !0, d, e);
    },
    Lb = function (a, b, c, d, e) {
      if (n(b)) for (var f = 0; f < b.length; f++) Lb(a, b[f], c, d, e);
      else
        (c = Eb(c)),
          ub(a) ? a.jb(b, c, d, e) : a && (a = Gb(a)) && (b = a.ba(b, c, !!d, e)) && Mb(b);
    },
    Mb = function (a) {
      if (ea(a) || !a || a.removed) return !1;
      var b = a.src;
      if (ub(b)) return zb(b.B, a);
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.ka)
        : b.detachEvent && b.detachEvent(Ib(c), d);
      Cb--;
      (c = Gb(b)) ? (zb(c, a), 0 == c.fa && ((c.src = null), (b[Ab] = null))) : xb(a);
      return !0;
    },
    Ib = function (a) {
      return a in Bb ? Bb[a] : (Bb[a] = 'on' + a);
    },
    Pb = function (a, b, c, d) {
      var e = !0;
      if ((a = Gb(a)))
        if ((b = a.k[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.ka == c && !f.removed && ((f = Ob(f, d)), (e = e && !1 !== f));
          }
      return e;
    },
    Ob = function (a, b) {
      var c = a.O,
        d = a.sa || a.src;
      a.ja && Mb(a);
      return c.call(d, b);
    },
    Jb = function (a, b) {
      if (a.removed) return !0;
      if (!nb) {
        var c;
        if (!(c = b))
          a: {
            c = ['window', 'event'];
            for (var d = k, e; (e = c.shift()); )
              if (null != d[e]) d = d[e];
              else {
                c = null;
                break a;
              }
            c = d;
          }
        e = c;
        c = new sb(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
          a: {
            var f = !1;
            if (0 == e.keyCode)
              try {
                e.keyCode = -1;
                break a;
              } catch (g) {
                f = !0;
              }
            if (f || void 0 == e.returnValue) e.returnValue = !0;
          }
          e = [];
          for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
          for (var f = a.type, l = e.length - 1; !c.X && 0 <= l; l--) {
            c.currentTarget = e[l];
            var D = Pb(e[l], f, !0, c),
              d = d && D;
          }
          for (l = 0; !c.X && l < e.length; l++)
            (c.currentTarget = e[l]), (D = Pb(e[l], f, !1, c)), (d = d && D);
        }
        return d;
      }
      return Ob(a, new sb(b, this));
    },
    Gb = function (a) {
      a = a[Ab];
      return a instanceof L ? a : null;
    },
    Qb = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0),
    Eb = function (a) {
      if (q(a)) return a;
      a[Qb] ||
        (a[Qb] = function (b) {
          return a.handleEvent(b);
        });
      return a[Qb];
    };
  var M = function () {
    G.call(this);
    this.B = new L(this);
    this.Tb = this;
    this.fb = null;
  };
  w(M, G);
  M.prototype[tb] = !0;
  h = M.prototype;
  h.addEventListener = function (a, b, c, d) {
    Db(this, a, b, c, d);
  };
  h.removeEventListener = function (a, b, c, d) {
    Lb(this, a, b, c, d);
  };
  h.dispatchEvent = function (a) {
    var b,
      c = this.fb;
    if (c) {
      b = [];
      for (var d = 1; c; c = c.fb) b.push(c), ++d;
    }
    c = this.Tb;
    d = a.type || a;
    if (p(a)) a = new Za(a, c);
    else if (a instanceof Za) a.target = a.target || c;
    else {
      var e = a;
      a = new Za(d, c);
      Aa(a, e);
    }
    var e = !0,
      f;
    if (b)
      for (var g = b.length - 1; !a.X && 0 <= g; g--)
        (f = a.currentTarget = b[g]), (e = Rb(f, d, !0, a) && e);
    a.X ||
      ((f = a.currentTarget = c), (e = Rb(f, d, !0, a) && e), a.X || (e = Rb(f, d, !1, a) && e));
    if (b)
      for (g = 0; !a.X && g < b.length; g++)
        (f = a.currentTarget = b[g]), (e = Rb(f, d, !1, a) && e);
    return e;
  };
  h.o = function () {
    M.P.o.call(this);
    this.B && this.B.removeAll(void 0);
    this.fb = null;
  };
  h.listen = function (a, b, c, d) {
    return this.B.add(String(a), b, !1, c, d);
  };
  h.cb = function (a, b, c, d) {
    return this.B.add(String(a), b, !0, c, d);
  };
  h.jb = function (a, b, c, d) {
    return this.B.remove(String(a), b, c, d);
  };
  var Rb = function (a, b, c, d) {
    b = a.B.k[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.removed && g.ka == c) {
        var l = g.O,
          D = g.sa || g.src;
        g.ja && zb(a.B, g);
        e = !1 !== l.call(D, d) && e;
      }
    }
    return e && 0 != d.Hb;
  };
  M.prototype.ba = function (a, b, c, d) {
    return this.B.ba(String(a), b, c, d);
  };
  var Sb = function (a, b, c) {
    this.tc = c;
    this.dc = a;
    this.Gc = b;
    this.Ba = 0;
    this.ta = null;
  };
  Sb.prototype.get = function () {
    var a;
    0 < this.Ba ? (this.Ba--, (a = this.ta), (this.ta = a.next), (a.next = null)) : (a = this.dc());
    return a;
  };
  Sb.prototype.put = function (a) {
    this.Gc(a);
    this.Ba < this.tc && (this.Ba++, (a.next = this.ta), (this.ta = a));
  };
  var Tb = function (a) {
      k.setTimeout(function () {
        throw a;
      }, 0);
    },
    Ub,
    Vb = function () {
      var a = k.MessageChannel;
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        -1 == H.indexOf('Presto') &&
        (a = function () {
          var a = document.createElement('IFRAME');
          a.style.display = 'none';
          a.src = '';
          document.documentElement.appendChild(a);
          var b = a.contentWindow,
            a = b.document;
          a.open();
          a.write('');
          a.close();
          var c = 'callImmediate' + Math.random(),
            d = 'file:' == b.location.protocol ? '*' : b.location.protocol + '//' + b.location.host,
            a = t(function (a) {
              if (('*' == d || a.origin == d) && a.data == c) this.port1.onmessage();
            }, this);
          b.addEventListener('message', a, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              b.postMessage(c, d);
            },
          };
        });
      if ('undefined' !== typeof a && !cb()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (m(c.next)) {
            c = c.next;
            var a = c.ob;
            c.ob = null;
            a();
          }
        };
        return function (a) {
          d.next = { ob: a };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return 'undefined' !== typeof document &&
        'onreadystatechange' in document.createElement('SCRIPT')
        ? function (a) {
            var b = document.createElement('SCRIPT');
            b.onreadystatechange = function () {
              b.onreadystatechange = null;
              b.parentNode.removeChild(b);
              b = null;
              a();
              a = null;
            };
            document.documentElement.appendChild(b);
          }
        : function (a) {
            k.setTimeout(a, 0);
          };
    };
  var Wb = function () {
      this.Ka = this.Z = null;
    },
    Yb = new Sb(
      function () {
        return new Xb();
      },
      function (a) {
        a.reset();
      },
      100,
    );
  Wb.prototype.add = function (a, b) {
    var c = Yb.get();
    c.set(a, b);
    this.Ka ? (this.Ka.next = c) : (this.Z = c);
    this.Ka = c;
  };
  Wb.prototype.remove = function () {
    var a = null;
    this.Z && ((a = this.Z), (this.Z = this.Z.next), this.Z || (this.Ka = null), (a.next = null));
    return a;
  };
  var Xb = function () {
    this.next = this.scope = this.Wa = null;
  };
  Xb.prototype.set = function (a, b) {
    this.Wa = a;
    this.scope = b;
    this.next = null;
  };
  Xb.prototype.reset = function () {
    this.next = this.scope = this.Wa = null;
  };
  var cc = function (a, b) {
      Zb || $b();
      ac || (Zb(), (ac = !0));
      bc.add(a, b);
    },
    Zb,
    $b = function () {
      if (k.Promise && k.Promise.resolve) {
        var a = k.Promise.resolve();
        Zb = function () {
          a.then(dc);
        };
      } else
        Zb = function () {
          var a = dc;
          !q(k.setImmediate) ||
          (k.Window && k.Window.prototype && k.Window.prototype.setImmediate == k.setImmediate)
            ? (Ub || (Ub = Vb()), Ub(a))
            : k.setImmediate(a);
        };
    },
    ac = !1,
    bc = new Wb(),
    dc = function () {
      for (var a = null; (a = bc.remove()); ) {
        try {
          a.Wa.call(a.scope);
        } catch (b) {
          Tb(b);
        }
        Yb.put(a);
      }
      ac = !1;
    };
  var ec = function (a) {
      a.prototype.then = a.prototype.then;
      a.prototype.$goog_Thenable = !0;
    },
    fc = function (a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };
  var P = function (a, b) {
      this.m = 0;
      this.D = void 0;
      this.S = this.G = this.l = null;
      this.ra = this.Va = !1;
      if (a == gc) O(this, 2, b);
      else
        try {
          var c = this;
          a.call(
            b,
            function (a) {
              O(c, 2, a);
            },
            function (a) {
              O(c, 3, a);
            },
          );
        } catch (d) {
          O(this, 3, d);
        }
    },
    hc = function () {
      this.next = this.context = this.da = this.Da = this.L = null;
      this.Na = !1;
    };
  hc.prototype.reset = function () {
    this.context = this.da = this.Da = this.L = null;
    this.Na = !1;
  };
  var ic = new Sb(
      function () {
        return new hc();
      },
      function (a) {
        a.reset();
      },
      100,
    ),
    jc = function (a, b, c) {
      var d = ic.get();
      d.Da = a;
      d.da = b;
      d.context = c;
      return d;
    },
    gc = function () {};
  P.prototype.then = function (a, b, c) {
    return kc(this, q(a) ? a : null, q(b) ? b : null, c);
  };
  ec(P);
  P.prototype.cancel = function (a) {
    0 == this.m &&
      cc(function () {
        var b = new lc(a);
        mc(this, b);
      }, this);
  };
  var mc = function (a, b) {
      if (0 == a.m)
        if (a.l) {
          var c = a.l;
          if (c.G) {
            for (
              var d = 0, e = null, f = null, g = c.G;
              g && (g.Na || (d++, g.L == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.m && 1 == d
                ? mc(c, b)
                : (f ? ((d = f), d.next == c.S && (c.S = d), (d.next = d.next.next)) : nc(c),
                  oc(c, e, 3, b)));
          }
          a.l = null;
        } else O(a, 3, b);
    },
    qc = function (a, b) {
      a.G || (2 != a.m && 3 != a.m) || pc(a);
      a.S ? (a.S.next = b) : (a.G = b);
      a.S = b;
    },
    kc = function (a, b, c, d) {
      var e = jc(null, null, null);
      e.L = new P(function (a, g) {
        e.Da = b
          ? function (c) {
              try {
                var e = b.call(d, c);
                a(e);
              } catch (N) {
                g(N);
              }
            }
          : a;
        e.da = c
          ? function (b) {
              try {
                var e = c.call(d, b);
                !m(e) && b instanceof lc ? g(b) : a(e);
              } catch (N) {
                g(N);
              }
            }
          : g;
      });
      e.L.l = a;
      qc(a, e);
      return e.L;
    };
  P.prototype.Pb = function (a) {
    this.m = 0;
    O(this, 2, a);
  };
  P.prototype.Qb = function (a) {
    this.m = 0;
    O(this, 3, a);
  };
  var O = function (a, b, c) {
      if (0 == a.m) {
        if (a == c) (b = 3), (c = new TypeError('Promise cannot resolve to itself'));
        else {
          if (fc(c)) {
            a.m = 1;
            b = c;
            c = a.Pb;
            var d = a.Qb;
            b instanceof P ? qc(b, jc(c || ba, d || null, a)) : b.then(c, d, a);
            return;
          }
          if (r(c))
            try {
              if (((d = c.then), q(d))) {
                rc(a, c, d);
                return;
              }
            } catch (e) {
              (b = 3), (c = e);
            }
        }
        a.D = c;
        a.m = b;
        a.l = null;
        pc(a);
        3 != b || c instanceof lc || sc(a, c);
      }
    },
    rc = function (a, b, c) {
      a.m = 1;
      var d = !1,
        e = function (b) {
          d || ((d = !0), a.Pb(b));
        },
        f = function (b) {
          d || ((d = !0), a.Qb(b));
        };
      try {
        c.call(b, e, f);
      } catch (g) {
        f(g);
      }
    },
    pc = function (a) {
      a.Va || ((a.Va = !0), cc(a.gc, a));
    },
    nc = function (a) {
      var b = null;
      a.G && ((b = a.G), (a.G = b.next), (b.next = null));
      a.G || (a.S = null);
      return b;
    };
  P.prototype.gc = function () {
    for (var a = null; (a = nc(this)); ) oc(this, a, this.m, this.D);
    this.Va = !1;
  };
  var oc = function (a, b, c, d) {
      b.L && (b.L.l = null);
      if (2 == c) b.Da.call(b.context, d);
      else if (null != b.da) {
        if (!b.Na) for (; a && a.ra; a = a.l) a.ra = !1;
        b.da.call(b.context, d);
      }
      ic.put(b);
    },
    sc = function (a, b) {
      a.ra = !0;
      cc(function () {
        a.ra && tc.call(null, b);
      });
    },
    tc = Tb,
    lc = function (a) {
      x.call(this, a);
    };
  w(lc, x);
  lc.prototype.name = 'cancel';
  /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
  var Q = function (a, b) {
    this.Fa = [];
    this.Cb = a;
    this.rb = b || null;
    this.ca = this.C = !1;
    this.D = void 0;
    this.hb = this.Xb = this.Oa = !1;
    this.Ia = 0;
    this.l = null;
    this.Qa = 0;
  };
  Q.prototype.cancel = function (a) {
    if (this.C) this.D instanceof Q && this.D.cancel();
    else {
      if (this.l) {
        var b = this.l;
        delete this.l;
        a ? b.cancel(a) : (b.Qa--, 0 >= b.Qa && b.cancel());
      }
      this.Cb ? this.Cb.call(this.rb, this) : (this.hb = !0);
      this.C || this.A(new uc());
    }
  };
  Q.prototype.qb = function (a, b) {
    this.Oa = !1;
    vc(this, a, b);
  };
  var vc = function (a, b, c) {
      a.C = !0;
      a.D = c;
      a.ca = !b;
      wc(a);
    },
    yc = function (a) {
      if (a.C) {
        if (!a.hb) throw new xc();
        a.hb = !1;
      }
    };
  Q.prototype.v = function (a) {
    yc(this);
    vc(this, !0, a);
  };
  Q.prototype.A = function (a) {
    yc(this);
    vc(this, !1, a);
  };
  Q.prototype.n = function (a, b) {
    return zc(this, a, null, b);
  };
  var zc = function (a, b, c, d) {
    a.Fa.push([b, c, d]);
    a.C && wc(a);
    return a;
  };
  Q.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new P(function (a, b) {
        d = a;
        e = b;
      });
    zc(this, d, function (a) {
      a instanceof uc ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };
  ec(Q);
  var Ac = function (a) {
      var b = new Q();
      zc(a, b.v, b.A, b);
      return b;
    },
    Bc = function (a) {
      return ma(a.Fa, function (a) {
        return q(a[1]);
      });
    },
    wc = function (a) {
      if (a.Ia && a.C && Bc(a)) {
        var b = a.Ia,
          c = Cc[b];
        c && (k.clearTimeout(c.ua), delete Cc[b]);
        a.Ia = 0;
      }
      a.l && (a.l.Qa--, delete a.l);
      for (var b = a.D, d = (c = !1); a.Fa.length && !a.Oa; ) {
        var e = a.Fa.shift(),
          f = e[0],
          g = e[1],
          e = e[2];
        if ((f = a.ca ? g : f))
          try {
            var l = f.call(e || a.rb, b);
            m(l) && ((a.ca = a.ca && (l == b || l instanceof Error)), (a.D = b = l));
            fc(b) && ((d = !0), (a.Oa = !0));
          } catch (D) {
            (b = D), (a.ca = !0), Bc(a) || (c = !0);
          }
      }
      a.D = b;
      d &&
        ((l = t(a.qb, a, !0)),
        (d = t(a.qb, a, !1)),
        b instanceof Q ? (zc(b, l, d), (b.Xb = !0)) : b.then(l, d));
      c && ((b = new Dc(b)), (Cc[b.ua] = b), (a.Ia = b.ua));
    },
    Ec = function (a) {
      var b = new Q();
      b.v(a);
      return b;
    },
    Gc = function () {
      var a = Fc,
        b = new Q();
      b.A(a);
      return b;
    },
    xc = function () {
      x.call(this);
    };
  w(xc, x);
  xc.prototype.message = 'Deferred has already fired';
  xc.prototype.name = 'AlreadyCalledError';
  var uc = function () {
    x.call(this);
  };
  w(uc, x);
  uc.prototype.message = 'Deferred was canceled';
  uc.prototype.name = 'CanceledError';
  var Dc = function (a) {
    this.ua = k.setTimeout(t(this.Tc, this), 0);
    this.na = a;
  };
  Dc.prototype.Tc = function () {
    delete Cc[this.ua];
    throw this.na;
  };
  var Cc = {};
  var Hc = function (a) {
    this.qa = [];
    this.e = a;
  };
  Hc.prototype.R = function (a) {
    if (!q(a)) throw Error('Invalid filter. Must be a function.');
    this.qa.push(a);
  };
  Hc.prototype.send = function (a, b) {
    if (0 == this.qa.length) return this.e.send(a, b);
    var c = new R(a, b);
    return Ic(this, 0, c).n(function () {
      if (!c.Sa) return this.e.send(a, b);
    }, this);
  };
  var Ic = function (a, b, c) {
      return Ec()
        .n(function () {
          return this.qa[b](c);
        }, a)
        .n(function () {
          if (++b < this.qa.length && !c.Sa) return Ic(this, b, c);
        }, a);
    },
    R = function (a, b) {
      this.Wc = a;
      this.Cc = b;
      this.Sa = !1;
    };
  R.prototype.ub = function () {
    return this.Wc;
  };
  R.prototype.V = function () {
    return this.Cc;
  };
  R.prototype.cancel = function () {
    this.Sa = !0;
  };
  Ba(
    'area base br col command embed hr img input keygen link meta param source track wbr'.split(
      ' ',
    ),
  );
  var Jc = function (a, b) {
    this.width = a;
    this.height = b;
  };
  Jc.prototype.clone = function () {
    return new Jc(this.width, this.height);
  };
  Jc.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  (!eb && !J) || (J && J && (I() || 9 <= mb)) || (eb && K('1.9.1'));
  J && K('9');
  var Kc = {
      id: 'apiVersion',
      name: 'v',
      valueType: 'text',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Lc = {
      id: 'appName',
      name: 'an',
      valueType: 'text',
      maxLength: 100,
      defaultValue: void 0,
    },
    Mc = {
      id: 'appVersion',
      name: 'av',
      valueType: 'text',
      maxLength: 100,
      defaultValue: void 0,
    },
    Nc = {
      id: 'clientId',
      name: 'cid',
      valueType: 'text',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Oc = {
      id: 'language',
      name: 'ul',
      valueType: 'text',
      maxLength: 20,
      defaultValue: void 0,
    },
    Pc = {
      id: 'libVersion',
      name: '_v',
      valueType: 'text',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Qc = {
      id: 'sampleRateOverride',
      name: 'usro',
      valueType: 'integer',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Rc = {
      id: 'screenColors',
      name: 'sd',
      valueType: 'text',
      maxLength: 20,
      defaultValue: void 0,
    },
    Sc = {
      id: 'screenResolution',
      name: 'sr',
      valueType: 'text',
      maxLength: 20,
      defaultValue: void 0,
    },
    Tc = {
      id: 'trackingId',
      name: 'tid',
      valueType: 'text',
      maxLength: void 0,
      defaultValue: void 0,
    },
    Uc = { id: 'viewportSize', name: 'vp', valueType: 'text', maxLength: 20, defaultValue: void 0 },
    Vc = {
      ad: Kc,
      dd: Lc,
      ed: Mc,
      nd: Nc,
      Fd: Oc,
      Gd: Pc,
      Md: Qc,
      Nd: Rc,
      Od: Sc,
      ae: Tc,
      he: Uc,
    },
    Xc = function (a) {
      if (!p(a)) return a;
      var b = Wc(a, Ma);
      if (r(b)) return b;
      b = Wc(a, Vc);
      if (r(b)) return b;
      b = /^dimension(\d+)$/.exec(a);
      if (null !== b) return Na(parseInt(b[1], 10));
      b = /^metric(\d+)$/.exec(a);
      if (null !== b) return Oa(parseInt(b[1], 10));
      throw Error(a + ' is not a valid parameter name.');
    },
    Wc = function (a, b) {
      var c = ya(b, function (b) {
        return b.id == a && 'metric' != a && 'dimension' != a;
      });
      return r(c) ? c : null;
    };
  var S = function (a, b) {
    this.ac = b;
    this.q = b.Xa();
    this.Fb = new E();
    this.ib = !1;
  };
  h = S.prototype;
  h.set = function (a, b) {
    if (null == b) throw Error('Value must be defined and not null. Parameter=' + a.id);
    var c = Xc(a);
    this.Fb.set(c, b);
  };
  h.R = function (a) {
    this.ac.R(a);
  };
  h.send = function (a, b) {
    if (a instanceof F) return a.send(this);
    var c = this.Fb.clone();
    b instanceof E
      ? c.ha(b)
      : r(b) &&
        va(
          b,
          function (a, b) {
            null != a && c.set(Xc(b), a);
          },
          this,
        );
    this.ib && ((this.ib = !1), c.set(Ga, 'start'));
    return this.q.send(a, c);
  };
  h.Hc = function (a) {
    var b = { description: a };
    this.set(Ha, a);
    return this.send('appview', b);
  };
  h.Ic = function (a, b, c, d) {
    return this.send('event', { eventCategory: a, eventAction: b, eventLabel: c, eventValue: d });
  };
  h.Kc = function (a, b, c) {
    return this.send('social', { socialNetwork: a, socialAction: b, socialTarget: c });
  };
  h.Jc = function (a, b) {
    return this.send('exception', { exDescription: a, exFatal: b });
  };
  h.Ib = function (a, b, c, d, e) {
    return this.send('timing', {
      timingCategory: a,
      timingVar: b,
      timingLabel: d,
      timingValue: c,
      sampleRateOverride: e,
    });
  };
  h.jc = function () {
    this.ib = !0;
  };
  h.Rc = function (a, b, c, d) {
    return new Yc(this, a, b, c, d);
  };
  var Yc = function (a, b, c, d, e) {
    this.Ob = a;
    this.Zb = b;
    this.Xc = c;
    this.rc = d;
    this.Ea = e;
    this.Qc = u();
  };
  Yc.prototype.send = function () {
    var a = this.Ob.Ib(this.Zb, this.Xc, u() - this.Qc, this.rc, this.Ea);
    this.Ob = null;
    return a;
  };
  var Zc = function (a, b, c, d, e) {
    this.sc = a;
    this.Ub = b;
    this.Vb = c;
    this.g = d;
    this.$b = e;
  };
  Zc.prototype.mc = function (a) {
    var b = new S(0, this.$b.create());
    b.set(Pc, this.sc);
    b.set(Kc, 1);
    b.set(Lc, this.Ub);
    b.set(Mc, this.Vb);
    b.set(Tc, a);
    (a = navigator.language || navigator.browserLanguage) && b.set(Oc, a);
    (a = screen.colorDepth + '-bit') && b.set(Rc, a);
    (a = [screen.width, screen.height].join('x')) && b.set(Sc, a);
    a = window.document;
    a = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
    a = new Jc(a.clientWidth, a.clientHeight);
    (a = [a.width, a.height].join('x')) && b.set(Uc, a);
    return b;
  };
  Zc.prototype.kc = function () {
    return Ac(this.g.ea);
  };
  var $c = function (a, b, c, d, e, f) {
    Q.call(this, e, f);
    this.bb = a;
    this.Ta = [];
    this.tb = !!b;
    this.ic = !!c;
    this.cc = !!d;
    for (b = this.Bb = 0; b < a.length; b++)
      zc(a[b], t(this.vb, this, b, !0), t(this.vb, this, b, !1));
    0 != a.length || this.tb || this.v(this.Ta);
  };
  w($c, Q);
  $c.prototype.vb = function (a, b, c) {
    this.Bb++;
    this.Ta[a] = [b, c];
    this.C ||
      (this.tb && b
        ? this.v([a, c])
        : this.ic && !b
        ? this.A(c)
        : this.Bb == this.bb.length && this.v(this.Ta));
    this.cc && !b && (c = null);
    return c;
  };
  $c.prototype.A = function (a) {
    $c.P.A.call(this, a);
    for (a = 0; a < this.bb.length; a++) this.bb[a].cancel();
  };
  var ad = function (a) {
    return new $c(a, !1, !0).n(function (a) {
      for (var c = [], d = 0; d < a.length; d++) c[d] = a[d][1];
      return c;
    });
  };
  var bd = function () {
    for (var a = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split(''), b = 0, c = a.length; b < c; b++)
      switch (a[b]) {
        case 'x':
          a[b] = Math.floor(16 * Math.random()).toString(16);
          break;
        case 'y':
          a[b] = (Math.floor(4 * Math.random()) + 8).toString(16);
      }
    return a.join('');
  };
  var T = function (a) {
      this.J = a;
      this.Ea = 100;
      this.pb = [];
      this.W = this.ga = null;
      this.ea = cd(this);
      this.ea.n(function () {
        this.Jb = Db(this.J, 'a', t(this.nc, this));
      }, this);
    },
    cd = function (a) {
      return dd(a).n(function () {
        return this;
      }, a);
    },
    dd = function (a) {
      return ad([ed(a), fd(a)]);
    };
  T.prototype.nc = function () {
    U(this);
    var a = gd(this),
      b = this.xa();
    dd(this).n(function () {
      a != gd(this) && hd(this, 'analytics.user-id');
      b != this.xa() && hd(this, 'analytics.tracking-permitted');
    }, this);
  };
  var id = function (a, b) {
    U(a);
    a.pb.push(b);
  };
  T.prototype.Oc = function (a) {
    U(this);
    var b = this.W != a;
    this.W = a;
    this.J.set('analytics.tracking-permitted', a.toString());
    b && hd(this, 'analytics.tracking-permitted');
  };
  T.prototype.xa = function () {
    U(this);
    var a;
    if ((a = this.W)) (a = k._gaUserPrefs), (a = !(a && a.ioo && a.ioo()));
    return a;
  };
  var ed = function (a) {
      return a.J.get('analytics.tracking-permitted').n(function (a) {
        this.W = !0;
        if (m(a))
          switch (a) {
            case 'true':
              this.W = !0;
              break;
            case 'false':
              this.W = !1;
          }
      }, a);
    },
    gd = function (a) {
      U(a);
      if (!p(a.ga)) throw Error('Invalid state. UserID is not a string.');
      return a.ga;
    },
    fd = function (a) {
      return a.J.get('analytics.user-id').n(function (a) {
        m(a) ? (this.ga = a) : jd(this);
      }, a);
    },
    jd = function (a) {
      a.ga = bd();
      return a.J.set('analytics.user-id', a.ga).n(function () {
        hd(this, 'analytics.user-id');
      }, a);
    };
  T.prototype.Nc = function (a) {
    U(this);
    this.Ea = a;
  };
  var kd = function (a) {
    U(a);
    return a.Ea;
  };
  T.prototype.Fc = function () {
    return jd(this);
  };
  var hd = function (a, b) {
    la(a.pb, function (a) {
      a(b);
    });
  };
  T.prototype.ma = function () {
    null != this.Jb && Mb(this.Jb);
  };
  var U = function (a) {
    if (!Ac(a.ea).C) throw Error('Settings object accessed prior to entering ready state.');
  };
  var ld = function () {
    M.call(this);
    this.eb = 'google-analytics';
    this.J = chrome_new.storage.local;
    chrome_new.storage.onChanged.addListener(t(this.Ac, this));
  };
  w(ld, M);
  ld.prototype.Ac = function (a) {
    md(this, a) && this.dispatchEvent('a');
  };
  var md = function (a, b) {
    return ma(
      xa(b),
      function (a) {
        return 0 == a.lastIndexOf(this.eb, 0);
      },
      a,
    );
  };
  ld.prototype.get = function (a) {
    var b = new Q(),
      c = this.eb + '.' + a;
    this.J.get(c, function (a) {
      chrome_new.runtime.lastError
        ? b.A(chrome_new.runtime.lastError)
        : ((a = a[c]), b.v(null != a ? a.toString() : void 0));
    });
    return b;
  };
  ld.prototype.set = function (a, b) {
    var c = new Q(),
      d = {};
    d[this.eb + '.' + a] = b;
    this.J.set(d, function () {
      chrome_new.runtime.lastError ? c.A(chrome_new.runtime.lastError) : c.v();
    });
    return c;
  };
  var V = function () {};
  V.lc = function () {
    return V.yb ? V.yb : (V.yb = new V());
  };
  V.prototype.send = function () {
    return Ec();
  };
  var nd = function (a) {
    this.ec = a;
  };
  nd.prototype.send = function (a, b) {
    this.ec.push({ pc: a, Bc: b });
    return Ec();
  };
  var od = function (a, b, c) {
    this.g = a;
    this.U = [];
    this.K = { enabled: new nd(this.U), disabled: c };
    this.q = this.K.enabled;
    zc(Ac(this.g.ea), ha(this.zc, b), this.yc, this);
  };
  od.prototype.zc = function (a) {
    if (null === this.U) throw Error('Channel setup already completed.');
    this.K.enabled = a();
    pd(this);
    la(
      this.U,
      function (a) {
        this.send(a.pc, a.Bc);
      },
      this,
    );
    this.U = null;
    id(this.g, t(this.xc, this));
  };
  od.prototype.yc = function () {
    if (null === this.U) throw Error('Channel setup already completed.');
    this.q = this.K.enabled = this.K.disabled;
    this.U = null;
  };
  od.prototype.send = function (a, b) {
    return this.q.send(a, b);
  };
  var pd = function (a) {
    a.q = a.g.xa() ? a.K.enabled : a.K.disabled;
  };
  od.prototype.xc = function (a) {
    switch (a) {
      case 'analytics.tracking-permitted':
        pd(this);
    }
  };
  var qd = function (a, b) {
    this.Ra = [];
    var c = t(function () {
      this.pa = new Hc(b.Xa());
      la(
        this.Ra,
        function (a) {
          this.pa.R(a);
        },
        this,
      );
      this.Ra = null;
      return this.pa;
    }, this);
    this.q = new od(a, c, V.lc());
  };
  qd.prototype.Xa = function () {
    return this.q;
  };
  qd.prototype.R = function (a) {
    this.pa ? this.pa.R(a) : this.Ra.push(a);
  };
  var rd = function (a, b) {
    this.g = a;
    this.Pc = b;
  };
  rd.prototype.create = function () {
    return new qd(this.g, this.Pc);
  };
  var sd = function (a, b) {
    M.call(this);
    this.wa = a || 1;
    this.Y = b || k;
    this.Pa = t(this.Uc, this);
    this.ab = u();
  };
  w(sd, M);
  h = sd.prototype;
  h.enabled = !1;
  h.h = null;
  h.Uc = function () {
    if (this.enabled) {
      var a = u() - this.ab;
      0 < a && a < 0.8 * this.wa
        ? (this.h = this.Y.setTimeout(this.Pa, this.wa - a))
        : (this.h && (this.Y.clearTimeout(this.h), (this.h = null)),
          this.dispatchEvent('tick'),
          this.enabled && ((this.h = this.Y.setTimeout(this.Pa, this.wa)), (this.ab = u())));
    }
  };
  h.start = function () {
    this.enabled = !0;
    this.h || ((this.h = this.Y.setTimeout(this.Pa, this.wa)), (this.ab = u()));
  };
  h.stop = function () {
    this.enabled = !1;
    this.h && (this.Y.clearTimeout(this.h), (this.h = null));
  };
  h.o = function () {
    sd.P.o.call(this);
    this.stop();
    delete this.Y;
  };
  var td = function (a, b, c) {
    if (q(a)) c && (a = t(a, c));
    else if (a && 'function' == typeof a.handleEvent) a = t(a.handleEvent, a);
    else throw Error('Invalid listener argument');
    return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
  };
  var W = function (a) {
    G.call(this);
    this.Ya = a;
    this.b = {};
  };
  w(W, G);
  var ud = [];
  W.prototype.listen = function (a, b, c, d) {
    n(b) || (b && (ud[0] = b.toString()), (b = ud));
    for (var e = 0; e < b.length; e++) {
      var f = Db(a, b[e], c || this.handleEvent, d || !1, this.Ya || this);
      if (!f) break;
      this.b[f.key] = f;
    }
    return this;
  };
  W.prototype.cb = function (a, b, c, d) {
    return vd(this, a, b, c, d);
  };
  var vd = function (a, b, c, d, e, f) {
    if (n(c)) for (var g = 0; g < c.length; g++) vd(a, b, c[g], d, e, f);
    else {
      b = Kb(b, c, d || a.handleEvent, e, f || a.Ya || a);
      if (!b) return a;
      a.b[b.key] = b;
    }
    return a;
  };
  W.prototype.jb = function (a, b, c, d, e) {
    if (n(b)) for (var f = 0; f < b.length; f++) this.jb(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (e = e || this.Ya || this),
        (c = Eb(c)),
        (d = !!d),
        (b = ub(a) ? a.ba(b, c, d, e) : a ? ((a = Gb(a)) ? a.ba(b, c, d, e) : null) : null),
        b && (Mb(b), delete this.b[b.key]);
    return this;
  };
  W.prototype.removeAll = function () {
    va(this.b, Mb);
    this.b = {};
  };
  W.prototype.o = function () {
    W.P.o.call(this);
    this.removeAll();
  };
  W.prototype.handleEvent = function () {
    throw Error('EventHandler.handleEvent not implemented');
  };
  var wd = function () {
    M.call(this);
    this.oa = new W(this);
    pb &&
      (qb
        ? this.oa.listen(rb ? document.body : window, ['online', 'offline'], this.wb)
        : ((this.Eb = pb ? navigator.onLine : !0),
          (this.h = new sd(250)),
          this.oa.listen(this.h, 'tick', this.oc),
          this.h.start()));
  };
  w(wd, M);
  wd.prototype.oc = function () {
    var a = pb ? navigator.onLine : !0;
    a != this.Eb && ((this.Eb = a), this.wb());
  };
  wd.prototype.wb = function () {
    this.dispatchEvent((pb ? navigator.onLine : 1) ? 'online' : 'offline');
  };
  wd.prototype.o = function () {
    wd.P.o.call(this);
    this.oa.ma();
    this.oa = null;
    this.h && (this.h.ma(), (this.h = null));
  };
  var xd = function (a, b) {
    this.g = a;
    this.e = b;
  };
  xd.prototype.send = function (a, b) {
    b.set(Nc, gd(this.g));
    return this.e.send(a, b);
  };
  var yd = function (a) {
    this.e = a;
  };
  yd.prototype.send = function (a, b) {
    zd(b);
    Ad(b);
    return this.e.send(a, b);
  };
  var zd = function (a) {
      Xa(a, function (b, c) {
        m(b.maxLength) &&
          'text' == b.valueType &&
          0 < b.maxLength &&
          c.length > b.maxLength &&
          a.set(b, c.substring(0, b.maxLength));
      });
    },
    Ad = function (a) {
      Xa(a, function (b, c) {
        m(b.defaultValue) && c == b.defaultValue && a.remove(b);
      });
    };
  var Fc = { status: 'device-offline', la: void 0 },
    Bd = {
      status: 'rate-limited',
      la: void 0,
    },
    Cd = { status: 'sampled-out', la: void 0 },
    Dd = { status: 'sent', la: void 0 };
  var Ed = function (a, b) {
    this.Vc = a;
    this.e = b;
  };
  Ed.prototype.send = function (a, b) {
    var c;
    c = this.Vc;
    var d = c.Lb(),
      e = Math.floor((d - c.Ab) * c.hc);
    0 < e && ((c.$ = Math.min(c.$ + e, c.uc)), (c.Ab = d));
    1 > c.$ ? (c = !1) : (--c.$, (c = !0));
    return c || 'item' == a || 'transaction' == a ? this.e.send(a, b) : Ec(Bd);
  };
  var Fd = function () {
    this.$ = 60;
    this.uc = 500;
    this.hc = 5e-4;
    this.Lb = function () {
      return new Date().getTime();
    };
    this.Ab = this.Lb();
  };
  var Gd = function (a, b) {
    this.g = a;
    this.e = b;
  };
  Gd.prototype.send = function (a, b) {
    var c = b.get(Nc),
      c = parseInt(c.split('-')[1], 16),
      d;
    'timing' != a ? (d = kd(this.g)) : ((d = b.get(Qc)) && b.remove(Qc), (d = d || kd(this.g)));
    return c < 655.36 * d ? this.e.send(a, b) : Ec(Cd);
  };
  var Hd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
    Jd = function (a) {
      if (Id) {
        Id = !1;
        var b = k.location;
        if (b) {
          var c = b.href;
          if (c && (c = (c = Jd(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname)
            throw ((Id = !0), Error());
        }
      }
      return a.match(Hd);
    },
    Id = fb,
    Kd = function (a, b) {
      for (var c = a.split('&'), d = 0; d < c.length; d++) {
        var e = c[d].indexOf('='),
          f = null,
          g = null;
        0 <= e ? ((f = c[d].substring(0, e)), (g = c[d].substring(e + 1))) : (f = c[d]);
        b(f, g ? decodeURIComponent(g.replace(/\+/g, ' ')) : '');
      }
    };
  var Ld = function () {};
  Ld.prototype.nb = null;
  var Nd = function (a) {
    var b;
    (b = a.nb) || ((b = {}), Md(a) && ((b[0] = !0), (b[1] = !0)), (b = a.nb = b));
    return b;
  };
  var Od,
    Pd = function () {};
  w(Pd, Ld);
  var Qd = function (a) {
      return (a = Md(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    Md = function (a) {
      if (!a.xb && 'undefined' == typeof XMLHttpRequest && 'undefined' != typeof ActiveXObject) {
        for (
          var b = [
              'MSXML2.XMLHTTP.6.0',
              'MSXML2.XMLHTTP.3.0',
              'MSXML2.XMLHTTP',
              'Microsoft.XMLHTTP',
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.xb = d);
          } catch (e) {}
        }
        throw Error(
          'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed',
        );
      }
      return a.xb;
    };
  Od = new Pd();
  var X = function (a) {
    M.call(this);
    this.headers = new z();
    this.Ma = a || null;
    this.F = !1;
    this.La = this.a = null;
    this.za = this.$a = '';
    this.N = this.Za = this.va = this.Ua = !1;
    this.Ha = 0;
    this.Ga = null;
    this.Gb = '';
    this.kb = this.Zc = !1;
  };
  w(X, M);
  var Rd = /^https?$/i,
    Sd = ['POST', 'PUT'],
    Td = [],
    Ud = function (a, b, c) {
      var d = new X();
      Td.push(d);
      b && d.listen('complete', b);
      d.cb('ready', d.bc);
      d.send(a, 'POST', c, void 0);
    };
  X.prototype.bc = function () {
    this.ma();
    qa(Td, this);
  };
  X.prototype.send = function (a, b, c, d) {
    if (this.a)
      throw Error(
        '[goog.net.XhrIo] Object is active with another request=' + this.$a + '; newUri=' + a,
      );
    b = b ? b.toUpperCase() : 'GET';
    this.$a = a;
    this.za = '';
    this.Ua = !1;
    this.F = !0;
    this.a = this.Ma ? Qd(this.Ma) : Qd(Od);
    this.La = this.Ma ? Nd(this.Ma) : Nd(Od);
    this.a.onreadystatechange = t(this.Db, this);
    try {
      (this.Za = !0), this.a.open(b, String(a), !0), (this.Za = !1);
    } catch (e) {
      this.na(5, e);
      return;
    }
    a = c || '';
    var f = this.headers.clone();
    d &&
      Wa(d, function (a, b) {
        f.set(b, a);
      });
    d = pa(f.H());
    c = k.FormData && a instanceof k.FormData;
    !(0 <= ka(Sd, b)) ||
      d ||
      c ||
      f.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    f.forEach(function (a, b) {
      this.a.setRequestHeader(b, a);
    }, this);
    this.Gb && (this.a.responseType = this.Gb);
    'withCredentials' in this.a && (this.a.withCredentials = this.Zc);
    try {
      Vd(this),
        0 < this.Ha &&
          ((this.kb = Wd(this.a))
            ? ((this.a.timeout = this.Ha), (this.a.ontimeout = t(this.Mb, this)))
            : (this.Ga = td(this.Mb, this.Ha, this))),
        (this.va = !0),
        this.a.send(a),
        (this.va = !1);
    } catch (g) {
      this.na(5, g);
    }
  };
  var Wd = function (a) {
      return J && K(9) && ea(a.timeout) && m(a.ontimeout);
    },
    oa = function (a) {
      return 'content-type' == a.toLowerCase();
    };
  X.prototype.Mb = function () {
    'undefined' != typeof aa &&
      this.a &&
      ((this.za = 'Timed out after ' + this.Ha + 'ms, aborting'),
      this.dispatchEvent('timeout'),
      this.abort(8));
  };
  X.prototype.na = function (a, b) {
    this.F = !1;
    this.a && ((this.N = !0), this.a.abort(), (this.N = !1));
    this.za = b;
    Xd(this);
    Yd(this);
  };
  var Xd = function (a) {
    a.Ua || ((a.Ua = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'));
  };
  X.prototype.abort = function () {
    this.a &&
      this.F &&
      ((this.F = !1),
      (this.N = !0),
      this.a.abort(),
      (this.N = !1),
      this.dispatchEvent('complete'),
      this.dispatchEvent('abort'),
      Yd(this));
  };
  X.prototype.o = function () {
    this.a &&
      (this.F && ((this.F = !1), (this.N = !0), this.a.abort(), (this.N = !1)), Yd(this, !0));
    X.P.o.call(this);
  };
  X.prototype.Db = function () {
    this.aa || (this.Za || this.va || this.N ? Zd(this) : this.wc());
  };
  X.prototype.wc = function () {
    Zd(this);
  };
  var Zd = function (a) {
      if (a.F && 'undefined' != typeof aa && (!a.La[1] || 4 != $d(a) || 2 != ae(a)))
        if (a.va && 4 == $d(a)) td(a.Db, 0, a);
        else if ((a.dispatchEvent('readystatechange'), 4 == $d(a))) {
          a.F = !1;
          try {
            var b = ae(a),
              c;
            a: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                c = !0;
                break a;
              default:
                c = !1;
            }
            var d;
            if (!(d = c)) {
              var e;
              if ((e = 0 === b)) {
                var f = Jd(String(a.$a))[1] || null;
                if (!f && self.location)
                  var g = self.location.protocol,
                    f = g.substr(0, g.length - 1);
                e = !Rd.test(f ? f.toLowerCase() : '');
              }
              d = e;
            }
            if (d) a.dispatchEvent('complete'), a.dispatchEvent('success');
            else {
              var l;
              try {
                l = 2 < $d(a) ? a.a.statusText : '';
              } catch (D) {
                l = '';
              }
              a.za = l + ' [' + ae(a) + ']';
              Xd(a);
            }
          } finally {
            Yd(a);
          }
        }
    },
    Yd = function (a, b) {
      if (a.a) {
        Vd(a);
        var c = a.a,
          d = a.La[0] ? ba : null;
        a.a = null;
        a.La = null;
        b || a.dispatchEvent('ready');
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    Vd = function (a) {
      a.a && a.kb && (a.a.ontimeout = null);
      ea(a.Ga) && (k.clearTimeout(a.Ga), (a.Ga = null));
    },
    $d = function (a) {
      return a.a ? a.a.readyState : 0;
    },
    ae = function (a) {
      try {
        return 2 < $d(a) ? a.a.status : -1;
      } catch (b) {
        return -1;
      }
    };
  var be = function (a, b, c) {
      this.r = a || null;
      this.qc = !!c;
    },
    ce = function (a) {
      a.c ||
        ((a.c = new z()),
        (a.j = 0),
        a.r &&
          Kd(a.r, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c);
          }));
    };
  h = be.prototype;
  h.c = null;
  h.j = null;
  h.add = function (a, b) {
    ce(this);
    this.r = null;
    a = de(this, a);
    var c = this.c.get(a);
    c || this.c.set(a, (c = []));
    c.push(b);
    this.j++;
    return this;
  };
  h.remove = function (a) {
    ce(this);
    a = de(this, a);
    return this.c.T(a) ? ((this.r = null), (this.j -= this.c.get(a).length), this.c.remove(a)) : !1;
  };
  h.T = function (a) {
    ce(this);
    a = de(this, a);
    return this.c.T(a);
  };
  h.H = function () {
    ce(this);
    for (var a = this.c.t(), b = this.c.H(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  h.t = function (a) {
    ce(this);
    var b = [];
    if (p(a)) this.T(a) && (b = ra(b, this.c.get(de(this, a))));
    else {
      a = this.c.t();
      for (var c = 0; c < a.length; c++) b = ra(b, a[c]);
    }
    return b;
  };
  h.set = function (a, b) {
    ce(this);
    this.r = null;
    a = de(this, a);
    this.T(a) && (this.j -= this.c.get(a).length);
    this.c.set(a, [b]);
    this.j++;
    return this;
  };
  h.get = function (a, b) {
    var c = a ? this.t(a) : [];
    return 0 < c.length ? String(c[0]) : b;
  };
  h.toString = function () {
    if (this.r) return this.r;
    if (!this.c) return '';
    for (var a = [], b = this.c.H(), c = 0; c < b.length; c++)
      for (
        var d = b[c], e = encodeURIComponent(String(d)), d = this.t(d), f = 0;
        f < d.length;
        f++
      ) {
        var g = e;
        '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    return (this.r = a.join('&'));
  };
  h.clone = function () {
    var a = new be();
    a.r = this.r;
    this.c && ((a.c = this.c.clone()), (a.j = this.j));
    return a;
  };
  var de = function (a, b) {
    var c = String(b);
    a.qc && (c = c.toLowerCase());
    return c;
  };
  var ee = function (a, b) {
    this.Mc = a;
    this.Aa = b;
  };
  ee.prototype.send = function (a, b) {
    if (pb && !navigator.onLine) return Gc();
    var c = new Q(),
      d = fe(a, b);
    d.length > this.Aa
      ? c.A({
          status: 'payload-too-big',
          la: Ua('Encoded hit length == %s, but should be <= %s.', d.length, this.Aa),
        })
      : Ud(
          this.Mc,
          function () {
            c.v(Dd);
          },
          d,
        );
    return c;
  };
  var fe = function (a, b) {
    var c = new be();
    c.add(Fa.name, a);
    Xa(b, function (a, b) {
      c.add(a.name, b.toString());
    });
    return c.toString();
  };
  var ge = function (a, b, c) {
    this.g = a;
    this.Lc = b;
    this.Aa = c;
  };
  ge.prototype.Xa = function () {
    if (!this.q) {
      if (!Ac(this.g.ea).C)
        throw Error('Cannot construct shared channel prior to settings being ready.');
      new wd();
      var a = new yd(new ee(this.Lc, this.Aa)),
        b = new Fd();
      this.q = new xd(this.g, new Gd(this.g, new Ed(b, a)));
    }
    return this.q;
  };
  var he = new z(),
    ie = function () {
      Da || (Da = new T(new ld()));
      return Da;
    };
  v('goog.async.Deferred', Q);
  v('goog.async.Deferred.prototype.addCallback', Q.prototype.n);
  v('goog.async.Deferred.prototype.callback', Q.prototype.v);
  v('goog.async.Deferred.prototype.then', Q.prototype.then);
  v('goog.events.EventTarget', M);
  v('goog.events.EventTarget.prototype.listen', M.prototype.listen);
  v('analytics.getService', function (a, b) {
    var c = he.get(a, null),
      d = b || chrome_new.runtime.getManifest().version;
    if (null === c) {
      c = ie();
      if (!Ea) {
        var e = ie();
        Ea = new rd(e, new ge(e, 'https://www.google-analytics.com/collect', 8192));
      }
      c = new Zc('ca1.6.0', a, d, c, Ea);
      he.set(a, c);
    }
    return c;
  });
  v('analytics.internal.GoogleAnalyticsService', Zc);
  v('analytics.internal.GoogleAnalyticsService.prototype.getTracker', Zc.prototype.mc);
  v('analytics.internal.GoogleAnalyticsService.prototype.getConfig', Zc.prototype.kc);
  v('analytics.internal.ServiceSettings', T);
  v('analytics.internal.ServiceSettings.prototype.setTrackingPermitted', T.prototype.Oc);
  v('analytics.internal.ServiceSettings.prototype.isTrackingPermitted', T.prototype.xa);
  v('analytics.internal.ServiceSettings.prototype.setSampleRate', T.prototype.Nc);
  v('analytics.internal.ServiceSettings.prototype.resetUserId', T.prototype.Fc);
  v('analytics.internal.ServiceTracker', S);
  v('analytics.internal.ServiceTracker.prototype.send', S.prototype.send);
  v('analytics.internal.ServiceTracker.prototype.sendAppView', S.prototype.Hc);
  v('analytics.internal.ServiceTracker.prototype.sendEvent', S.prototype.Ic);
  v('analytics.internal.ServiceTracker.prototype.sendSocial', S.prototype.Kc);
  v('analytics.internal.ServiceTracker.prototype.sendException', S.prototype.Jc);
  v('analytics.internal.ServiceTracker.prototype.sendTiming', S.prototype.Ib);
  v('analytics.internal.ServiceTracker.prototype.startTiming', S.prototype.Rc);
  v('analytics.internal.ServiceTracker.Timing', Yc);
  v('analytics.internal.ServiceTracker.Timing.prototype.send', Yc.prototype.send);
  v('analytics.internal.ServiceTracker.prototype.forceSessionStart', S.prototype.jc);
  v('analytics.internal.ServiceTracker.prototype.addFilter', S.prototype.R);
  v('analytics.internal.FilterChannel.Hit', R);
  v('analytics.internal.FilterChannel.Hit.prototype.getHitType', R.prototype.ub);
  v('analytics.internal.FilterChannel.Hit.prototype.getParameters', R.prototype.V);
  v('analytics.internal.FilterChannel.Hit.prototype.cancel', R.prototype.cancel);
  v('analytics.ParameterMap', E);
  v('analytics.ParameterMap.Entry', E.Entry);
  v('analytics.ParameterMap.prototype.set', E.prototype.set);
  v('analytics.ParameterMap.prototype.get', E.prototype.get);
  v('analytics.ParameterMap.prototype.remove', E.prototype.remove);
  v('analytics.ParameterMap.prototype.toObject', E.prototype.Nb);
  v('analytics.HitTypes.APPVIEW', 'appview');
  v('analytics.HitTypes.EVENT', 'event');
  v('analytics.HitTypes.SOCIAL', 'social');
  v('analytics.HitTypes.TRANSACTION', 'transaction');
  v('analytics.HitTypes.ITEM', 'item');
  v('analytics.HitTypes.TIMING', 'timing');
  v('analytics.HitTypes.EXCEPTION', 'exception');
  va(Ma, function (a) {
    var b = a.id.replace(/[A-Z]/, '_$&').toUpperCase();
    v('analytics.Parameters.' + b, a);
  });
  v('analytics.filters.EventLabelerBuilder', C);
  v('analytics.filters.EventLabelerBuilder.prototype.appendToExistingLabel', C.prototype.Wb);
  v('analytics.filters.EventLabelerBuilder.prototype.stripValue', C.prototype.Sc);
  v('analytics.filters.EventLabelerBuilder.prototype.powersOfTwo', C.prototype.Dc);
  v('analytics.filters.EventLabelerBuilder.prototype.rangeBounds', C.prototype.Ec);
  v('analytics.filters.EventLabelerBuilder.prototype.build', C.prototype.ia);
  v('analytics.filters.FilterBuilder', B);
  v('analytics.filters.FilterBuilder.builder', Ra);
  v('analytics.filters.FilterBuilder.prototype.when', B.prototype.when);
  v('analytics.filters.FilterBuilder.prototype.whenHitType', B.prototype.Rb);
  v('analytics.filters.FilterBuilder.prototype.whenValue', B.prototype.Yc);
  v('analytics.filters.FilterBuilder.prototype.applyFilter', B.prototype.mb);
  v('analytics.filters.FilterBuilder.prototype.build', B.prototype.ia);
  v('analytics.EventBuilder', F);
  v('analytics.EventBuilder.builder', function () {
    return Ya;
  });
  v('analytics.EventBuilder.prototype.category', F.prototype.Yb);
  v('analytics.EventBuilder.prototype.action', F.prototype.action);
  v('analytics.EventBuilder.prototype.label', F.prototype.label);
  v('analytics.EventBuilder.prototype.value', F.prototype.value);
  v('analytics.EventBuilder.prototype.dimension', F.prototype.fc);
  v('analytics.EventBuilder.prototype.metric', F.prototype.vc);
  v('analytics.EventBuilder.prototype.send', F.prototype.send);
}.call(this));

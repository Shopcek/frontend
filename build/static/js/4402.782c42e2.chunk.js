/*! For license information please see 4402.782c42e2.chunk.js.LICENSE.txt */
;(self.webpackChunktoner_react_frontend = self.webpackChunktoner_react_frontend || []).push([
    [4402],
    {
        9734: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var n = r(4654)
            function i(t, e, r) {
                return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), (e[r + 0] = t >>> 8), (e[r + 1] = t >>> 0), e
            }
            function s(t, e, r) {
                return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), (e[r + 0] = t >>> 0), (e[r + 1] = t >>> 8), e
            }
            function o(t, e) {
                return void 0 === e && (e = 0), (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]
            }
            function a(t, e) {
                return void 0 === e && (e = 0), ((t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]) >>> 0
            }
            function c(t, e) {
                return void 0 === e && (e = 0), (t[e + 3] << 24) | (t[e + 2] << 16) | (t[e + 1] << 8) | t[e]
            }
            function u(t, e) {
                return void 0 === e && (e = 0), ((t[e + 3] << 24) | (t[e + 2] << 16) | (t[e + 1] << 8) | t[e]) >>> 0
            }
            function h(t, e, r) {
                return (
                    void 0 === e && (e = new Uint8Array(4)),
                    void 0 === r && (r = 0),
                    (e[r + 0] = t >>> 24),
                    (e[r + 1] = t >>> 16),
                    (e[r + 2] = t >>> 8),
                    (e[r + 3] = t >>> 0),
                    e
                )
            }
            function l(t, e, r) {
                return (
                    void 0 === e && (e = new Uint8Array(4)),
                    void 0 === r && (r = 0),
                    (e[r + 0] = t >>> 0),
                    (e[r + 1] = t >>> 8),
                    (e[r + 2] = t >>> 16),
                    (e[r + 3] = t >>> 24),
                    e
                )
            }
            function f(t, e, r) {
                return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), h((t / 4294967296) >>> 0, e, r), h(t >>> 0, e, r + 4), e
            }
            function p(t, e, r) {
                return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), l(t >>> 0, e, r), l((t / 4294967296) >>> 0, e, r + 4), e
            }
            ;(e.readInt16BE = function (t, e) {
                return void 0 === e && (e = 0), (((t[e + 0] << 8) | t[e + 1]) << 16) >> 16
            }),
                (e.readUint16BE = function (t, e) {
                    return void 0 === e && (e = 0), ((t[e + 0] << 8) | t[e + 1]) >>> 0
                }),
                (e.readInt16LE = function (t, e) {
                    return void 0 === e && (e = 0), (((t[e + 1] << 8) | t[e]) << 16) >> 16
                }),
                (e.readUint16LE = function (t, e) {
                    return void 0 === e && (e = 0), ((t[e + 1] << 8) | t[e]) >>> 0
                }),
                (e.writeUint16BE = i),
                (e.writeInt16BE = i),
                (e.writeUint16LE = s),
                (e.writeInt16LE = s),
                (e.readInt32BE = o),
                (e.readUint32BE = a),
                (e.readInt32LE = c),
                (e.readUint32LE = u),
                (e.writeUint32BE = h),
                (e.writeInt32BE = h),
                (e.writeUint32LE = l),
                (e.writeInt32LE = l),
                (e.readInt64BE = function (t, e) {
                    void 0 === e && (e = 0)
                    var r = o(t, e),
                        n = o(t, e + 4)
                    return 4294967296 * r + n - 4294967296 * (n >> 31)
                }),
                (e.readUint64BE = function (t, e) {
                    return void 0 === e && (e = 0), 4294967296 * a(t, e) + a(t, e + 4)
                }),
                (e.readInt64LE = function (t, e) {
                    void 0 === e && (e = 0)
                    var r = c(t, e)
                    return 4294967296 * c(t, e + 4) + r - 4294967296 * (r >> 31)
                }),
                (e.readUint64LE = function (t, e) {
                    void 0 === e && (e = 0)
                    var r = u(t, e)
                    return 4294967296 * u(t, e + 4) + r
                }),
                (e.writeUint64BE = f),
                (e.writeInt64BE = f),
                (e.writeUint64LE = p),
                (e.writeInt64LE = p),
                (e.readUintBE = function (t, e, r) {
                    if ((void 0 === r && (r = 0), t % 8 !== 0)) throw new Error('readUintBE supports only bitLengths divisible by 8')
                    if (t / 8 > e.length - r) throw new Error('readUintBE: array is too short for the given bitLength')
                    for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--) (n += e[s] * i), (i *= 256)
                    return n
                }),
                (e.readUintLE = function (t, e, r) {
                    if ((void 0 === r && (r = 0), t % 8 !== 0)) throw new Error('readUintLE supports only bitLengths divisible by 8')
                    if (t / 8 > e.length - r) throw new Error('readUintLE: array is too short for the given bitLength')
                    for (var n = 0, i = 1, s = r; s < r + t / 8; s++) (n += e[s] * i), (i *= 256)
                    return n
                }),
                (e.writeUintBE = function (t, e, r, i) {
                    if ((void 0 === r && (r = new Uint8Array(t / 8)), void 0 === i && (i = 0), t % 8 !== 0))
                        throw new Error('writeUintBE supports only bitLengths divisible by 8')
                    if (!n.isSafeInteger(e)) throw new Error('writeUintBE value must be an integer')
                    for (var s = 1, o = t / 8 + i - 1; o >= i; o--) (r[o] = (e / s) & 255), (s *= 256)
                    return r
                }),
                (e.writeUintLE = function (t, e, r, i) {
                    if ((void 0 === r && (r = new Uint8Array(t / 8)), void 0 === i && (i = 0), t % 8 !== 0))
                        throw new Error('writeUintLE supports only bitLengths divisible by 8')
                    if (!n.isSafeInteger(e)) throw new Error('writeUintLE value must be an integer')
                    for (var s = 1, o = i; o < i + t / 8; o++) (r[o] = (e / s) & 255), (s *= 256)
                    return r
                }),
                (e.readFloat32BE = function (t, e) {
                    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e)
                }),
                (e.readFloat32LE = function (t, e) {
                    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e, !0)
                }),
                (e.readFloat64BE = function (t, e) {
                    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e)
                }),
                (e.readFloat64LE = function (t, e) {
                    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e, !0)
                }),
                (e.writeFloat32BE = function (t, e, r) {
                    return (
                        void 0 === e && (e = new Uint8Array(4)),
                        void 0 === r && (r = 0),
                        new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t),
                        e
                    )
                }),
                (e.writeFloat32LE = function (t, e, r) {
                    return (
                        void 0 === e && (e = new Uint8Array(4)),
                        void 0 === r && (r = 0),
                        new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t, !0),
                        e
                    )
                }),
                (e.writeFloat64BE = function (t, e, r) {
                    return (
                        void 0 === e && (e = new Uint8Array(8)),
                        void 0 === r && (r = 0),
                        new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t),
                        e
                    )
                }),
                (e.writeFloat64LE = function (t, e, r) {
                    return (
                        void 0 === e && (e = new Uint8Array(8)),
                        void 0 === r && (r = 0),
                        new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t, !0),
                        e
                    )
                })
        },
        2873: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var n = r(9734),
                i = r(3227),
                s = 20
            function o(t, e, r) {
                for (
                    var i = 1634760805,
                        o = 857760878,
                        a = 2036477234,
                        c = 1797285236,
                        u = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
                        h = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
                        l = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
                        f = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
                        p = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
                        d = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
                        g = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
                        y = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
                        v = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
                        m = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
                        w = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
                        _ = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
                        b = i,
                        E = o,
                        S = a,
                        I = c,
                        O = u,
                        P = h,
                        x = l,
                        A = f,
                        R = p,
                        N = d,
                        T = g,
                        C = y,
                        j = v,
                        L = m,
                        U = w,
                        M = _,
                        D = 0;
                    D < s;
                    D += 2
                )
                    (O = ((O ^= R = (R + (j = ((j ^= b = (b + O) | 0) >>> 16) | (j << 16))) | 0) >>> 20) | (O << 12)),
                        (P = ((P ^= N = (N + (L = ((L ^= E = (E + P) | 0) >>> 16) | (L << 16))) | 0) >>> 20) | (P << 12)),
                        (x = ((x ^= T = (T + (U = ((U ^= S = (S + x) | 0) >>> 16) | (U << 16))) | 0) >>> 20) | (x << 12)),
                        (A = ((A ^= C = (C + (M = ((M ^= I = (I + A) | 0) >>> 16) | (M << 16))) | 0) >>> 20) | (A << 12)),
                        (x = ((x ^= T = (T + (U = ((U ^= S = (S + x) | 0) >>> 24) | (U << 8))) | 0) >>> 25) | (x << 7)),
                        (A = ((A ^= C = (C + (M = ((M ^= I = (I + A) | 0) >>> 24) | (M << 8))) | 0) >>> 25) | (A << 7)),
                        (P = ((P ^= N = (N + (L = ((L ^= E = (E + P) | 0) >>> 24) | (L << 8))) | 0) >>> 25) | (P << 7)),
                        (O = ((O ^= R = (R + (j = ((j ^= b = (b + O) | 0) >>> 24) | (j << 8))) | 0) >>> 25) | (O << 7)),
                        (P = ((P ^= T = (T + (M = ((M ^= b = (b + P) | 0) >>> 16) | (M << 16))) | 0) >>> 20) | (P << 12)),
                        (x = ((x ^= C = (C + (j = ((j ^= E = (E + x) | 0) >>> 16) | (j << 16))) | 0) >>> 20) | (x << 12)),
                        (A = ((A ^= R = (R + (L = ((L ^= S = (S + A) | 0) >>> 16) | (L << 16))) | 0) >>> 20) | (A << 12)),
                        (O = ((O ^= N = (N + (U = ((U ^= I = (I + O) | 0) >>> 16) | (U << 16))) | 0) >>> 20) | (O << 12)),
                        (A = ((A ^= R = (R + (L = ((L ^= S = (S + A) | 0) >>> 24) | (L << 8))) | 0) >>> 25) | (A << 7)),
                        (O = ((O ^= N = (N + (U = ((U ^= I = (I + O) | 0) >>> 24) | (U << 8))) | 0) >>> 25) | (O << 7)),
                        (x = ((x ^= C = (C + (j = ((j ^= E = (E + x) | 0) >>> 24) | (j << 8))) | 0) >>> 25) | (x << 7)),
                        (P = ((P ^= T = (T + (M = ((M ^= b = (b + P) | 0) >>> 24) | (M << 8))) | 0) >>> 25) | (P << 7))
                n.writeUint32LE((b + i) | 0, t, 0),
                    n.writeUint32LE((E + o) | 0, t, 4),
                    n.writeUint32LE((S + a) | 0, t, 8),
                    n.writeUint32LE((I + c) | 0, t, 12),
                    n.writeUint32LE((O + u) | 0, t, 16),
                    n.writeUint32LE((P + h) | 0, t, 20),
                    n.writeUint32LE((x + l) | 0, t, 24),
                    n.writeUint32LE((A + f) | 0, t, 28),
                    n.writeUint32LE((R + p) | 0, t, 32),
                    n.writeUint32LE((N + d) | 0, t, 36),
                    n.writeUint32LE((T + g) | 0, t, 40),
                    n.writeUint32LE((C + y) | 0, t, 44),
                    n.writeUint32LE((j + v) | 0, t, 48),
                    n.writeUint32LE((L + m) | 0, t, 52),
                    n.writeUint32LE((U + w) | 0, t, 56),
                    n.writeUint32LE((M + _) | 0, t, 60)
            }
            function a(t, e, r, n, s) {
                if ((void 0 === s && (s = 0), 32 !== t.length)) throw new Error('ChaCha: key size must be 32 bytes')
                if (n.length < r.length) throw new Error('ChaCha: destination is shorter than source')
                var a, u
                if (0 === s) {
                    if (8 !== e.length && 12 !== e.length) throw new Error('ChaCha nonce must be 8 or 12 bytes')
                    ;(u = (a = new Uint8Array(16)).length - e.length), a.set(e, u)
                } else {
                    if (16 !== e.length) throw new Error('ChaCha nonce with counter must be 16 bytes')
                    ;(a = e), (u = s)
                }
                for (var h = new Uint8Array(64), l = 0; l < r.length; l += 64) {
                    o(h, a, t)
                    for (var f = l; f < l + 64 && f < r.length; f++) n[f] = r[f] ^ h[f - l]
                    c(a, 0, u)
                }
                return i.wipe(h), 0 === s && i.wipe(a), n
            }
            function c(t, e, r) {
                for (var n = 1; r--; ) (n = (n + (255 & t[e])) | 0), (t[e] = 255 & n), (n >>>= 8), e++
                if (n > 0) throw new Error('ChaCha: counter overflow')
            }
            ;(e.streamXOR = a),
                (e.stream = function (t, e, r, n) {
                    return void 0 === n && (n = 0), i.wipe(r), a(t, e, r, r, n)
                })
        },
        4533: (t, e, r) => {
            'use strict'
            var n = r(2873),
                i = r(2625),
                s = r(3227),
                o = r(9734),
                a = r(6852)
            ;(e.Cv = 32), (e.WH = 12), (e.pg = 16)
            var c = new Uint8Array(16),
                u = (function () {
                    function t(t) {
                        if (((this.nonceLength = e.WH), (this.tagLength = e.pg), t.length !== e.Cv))
                            throw new Error('ChaCha20Poly1305 needs 32-byte key')
                        this._key = new Uint8Array(t)
                    }
                    return (
                        (t.prototype.seal = function (t, e, r, i) {
                            if (t.length > 16) throw new Error('ChaCha20Poly1305: incorrect nonce length')
                            var o = new Uint8Array(16)
                            o.set(t, o.length - t.length)
                            var a = new Uint8Array(32)
                            n.stream(this._key, o, a, 4)
                            var c,
                                u = e.length + this.tagLength
                            if (i) {
                                if (i.length !== u) throw new Error('ChaCha20Poly1305: incorrect destination length')
                                c = i
                            } else c = new Uint8Array(u)
                            return (
                                n.streamXOR(this._key, o, e, c, 4),
                                this._authenticate(c.subarray(c.length - this.tagLength, c.length), a, c.subarray(0, c.length - this.tagLength), r),
                                s.wipe(o),
                                c
                            )
                        }),
                        (t.prototype.open = function (t, e, r, i) {
                            if (t.length > 16) throw new Error('ChaCha20Poly1305: incorrect nonce length')
                            if (e.length < this.tagLength) return null
                            var o = new Uint8Array(16)
                            o.set(t, o.length - t.length)
                            var c = new Uint8Array(32)
                            n.stream(this._key, o, c, 4)
                            var u = new Uint8Array(this.tagLength)
                            if (
                                (this._authenticate(u, c, e.subarray(0, e.length - this.tagLength), r),
                                !a.equal(u, e.subarray(e.length - this.tagLength, e.length)))
                            )
                                return null
                            var h,
                                l = e.length - this.tagLength
                            if (i) {
                                if (i.length !== l) throw new Error('ChaCha20Poly1305: incorrect destination length')
                                h = i
                            } else h = new Uint8Array(l)
                            return n.streamXOR(this._key, o, e.subarray(0, e.length - this.tagLength), h, 4), s.wipe(o), h
                        }),
                        (t.prototype.clean = function () {
                            return s.wipe(this._key), this
                        }),
                        (t.prototype._authenticate = function (t, e, r, n) {
                            var a = new i.Poly1305(e)
                            n && (a.update(n), n.length % 16 > 0 && a.update(c.subarray(n.length % 16))),
                                a.update(r),
                                r.length % 16 > 0 && a.update(c.subarray(r.length % 16))
                            var u = new Uint8Array(8)
                            n && o.writeUint64LE(n.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u)
                            for (var h = a.digest(), l = 0; l < h.length; l++) t[l] = h[l]
                            a.clean(), s.wipe(h), s.wipe(u)
                        }),
                        t
                    )
                })()
            e.OK = u
        },
        6852: (t, e) => {
            'use strict'
            function r(t, e) {
                if (t.length !== e.length) return 0
                for (var r = 0, n = 0; n < t.length; n++) r |= t[n] ^ e[n]
                return 1 & ((r - 1) >>> 8)
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.select = function (t, e, r) {
                    return (~(t - 1) & e) | ((t - 1) & r)
                }),
                (e.lessOrEqual = function (t, e) {
                    return (((0 | t) - (0 | e) - 1) >>> 31) & 1
                }),
                (e.compare = r),
                (e.equal = function (t, e) {
                    return 0 !== t.length && 0 !== e.length && 0 !== r(t, e)
                })
        },
        4519: (t, e, r) => {
            'use strict'
            e.Xx = e._w = e.aP = e.KS = e.jQ = void 0
            const n = r(4701),
                i = r(1956),
                s = r(3227)
            function o(t) {
                const e = new Float64Array(16)
                if (t) for (let r = 0; r < t.length; r++) e[r] = t[r]
                return e
            }
            ;(e.jQ = 64), (e.KS = 64), (e.aP = 32)
            new Uint8Array(32)[0] = 9
            const a = o(),
                c = o([1]),
                u = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                h = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                f = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                p = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139])
            function d(t, e) {
                for (let r = 0; r < 16; r++) t[r] = 0 | e[r]
            }
            function g(t) {
                let e = 1
                for (let r = 0; r < 16; r++) {
                    let n = t[r] + e + 65535
                    ;(e = Math.floor(n / 65536)), (t[r] = n - 65536 * e)
                }
                t[0] += e - 1 + 37 * (e - 1)
            }
            function y(t, e, r) {
                const n = ~(r - 1)
                for (let i = 0; i < 16; i++) {
                    const r = n & (t[i] ^ e[i])
                    ;(t[i] ^= r), (e[i] ^= r)
                }
            }
            function v(t, e) {
                const r = o(),
                    n = o()
                for (let i = 0; i < 16; i++) n[i] = e[i]
                g(n), g(n), g(n)
                for (let i = 0; i < 2; i++) {
                    r[0] = n[0] - 65517
                    for (let e = 1; e < 15; e++) (r[e] = n[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535)
                    r[15] = n[15] - 32767 - ((r[14] >> 16) & 1)
                    const t = (r[15] >> 16) & 1
                    ;(r[14] &= 65535), y(n, r, 1 - t)
                }
                for (let i = 0; i < 16; i++) (t[2 * i] = 255 & n[i]), (t[2 * i + 1] = n[i] >> 8)
            }
            function m(t, e) {
                let r = 0
                for (let n = 0; n < 32; n++) r |= t[n] ^ e[n]
                return (1 & ((r - 1) >>> 8)) - 1
            }
            function w(t, e) {
                const r = new Uint8Array(32),
                    n = new Uint8Array(32)
                return v(r, t), v(n, e), m(r, n)
            }
            function _(t) {
                const e = new Uint8Array(32)
                return v(e, t), 1 & e[0]
            }
            function b(t, e, r) {
                for (let n = 0; n < 16; n++) t[n] = e[n] + r[n]
            }
            function E(t, e, r) {
                for (let n = 0; n < 16; n++) t[n] = e[n] - r[n]
            }
            function S(t, e, r) {
                let n,
                    i,
                    s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    h = 0,
                    l = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    w = 0,
                    _ = 0,
                    b = 0,
                    E = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    x = 0,
                    A = 0,
                    R = 0,
                    N = 0,
                    T = 0,
                    C = 0,
                    j = 0,
                    L = 0,
                    U = 0,
                    M = r[0],
                    D = r[1],
                    k = r[2],
                    q = r[3],
                    z = r[4],
                    H = r[5],
                    B = r[6],
                    K = r[7],
                    V = r[8],
                    F = r[9],
                    W = r[10],
                    G = r[11],
                    Y = r[12],
                    J = r[13],
                    Q = r[14],
                    $ = r[15]
                ;(n = e[0]),
                    (s += n * M),
                    (o += n * D),
                    (a += n * k),
                    (c += n * q),
                    (u += n * z),
                    (h += n * H),
                    (l += n * B),
                    (f += n * K),
                    (p += n * V),
                    (d += n * F),
                    (g += n * W),
                    (y += n * G),
                    (v += n * Y),
                    (m += n * J),
                    (w += n * Q),
                    (_ += n * $),
                    (n = e[1]),
                    (o += n * M),
                    (a += n * D),
                    (c += n * k),
                    (u += n * q),
                    (h += n * z),
                    (l += n * H),
                    (f += n * B),
                    (p += n * K),
                    (d += n * V),
                    (g += n * F),
                    (y += n * W),
                    (v += n * G),
                    (m += n * Y),
                    (w += n * J),
                    (_ += n * Q),
                    (b += n * $),
                    (n = e[2]),
                    (a += n * M),
                    (c += n * D),
                    (u += n * k),
                    (h += n * q),
                    (l += n * z),
                    (f += n * H),
                    (p += n * B),
                    (d += n * K),
                    (g += n * V),
                    (y += n * F),
                    (v += n * W),
                    (m += n * G),
                    (w += n * Y),
                    (_ += n * J),
                    (b += n * Q),
                    (E += n * $),
                    (n = e[3]),
                    (c += n * M),
                    (u += n * D),
                    (h += n * k),
                    (l += n * q),
                    (f += n * z),
                    (p += n * H),
                    (d += n * B),
                    (g += n * K),
                    (y += n * V),
                    (v += n * F),
                    (m += n * W),
                    (w += n * G),
                    (_ += n * Y),
                    (b += n * J),
                    (E += n * Q),
                    (S += n * $),
                    (n = e[4]),
                    (u += n * M),
                    (h += n * D),
                    (l += n * k),
                    (f += n * q),
                    (p += n * z),
                    (d += n * H),
                    (g += n * B),
                    (y += n * K),
                    (v += n * V),
                    (m += n * F),
                    (w += n * W),
                    (_ += n * G),
                    (b += n * Y),
                    (E += n * J),
                    (S += n * Q),
                    (I += n * $),
                    (n = e[5]),
                    (h += n * M),
                    (l += n * D),
                    (f += n * k),
                    (p += n * q),
                    (d += n * z),
                    (g += n * H),
                    (y += n * B),
                    (v += n * K),
                    (m += n * V),
                    (w += n * F),
                    (_ += n * W),
                    (b += n * G),
                    (E += n * Y),
                    (S += n * J),
                    (I += n * Q),
                    (O += n * $),
                    (n = e[6]),
                    (l += n * M),
                    (f += n * D),
                    (p += n * k),
                    (d += n * q),
                    (g += n * z),
                    (y += n * H),
                    (v += n * B),
                    (m += n * K),
                    (w += n * V),
                    (_ += n * F),
                    (b += n * W),
                    (E += n * G),
                    (S += n * Y),
                    (I += n * J),
                    (O += n * Q),
                    (P += n * $),
                    (n = e[7]),
                    (f += n * M),
                    (p += n * D),
                    (d += n * k),
                    (g += n * q),
                    (y += n * z),
                    (v += n * H),
                    (m += n * B),
                    (w += n * K),
                    (_ += n * V),
                    (b += n * F),
                    (E += n * W),
                    (S += n * G),
                    (I += n * Y),
                    (O += n * J),
                    (P += n * Q),
                    (x += n * $),
                    (n = e[8]),
                    (p += n * M),
                    (d += n * D),
                    (g += n * k),
                    (y += n * q),
                    (v += n * z),
                    (m += n * H),
                    (w += n * B),
                    (_ += n * K),
                    (b += n * V),
                    (E += n * F),
                    (S += n * W),
                    (I += n * G),
                    (O += n * Y),
                    (P += n * J),
                    (x += n * Q),
                    (A += n * $),
                    (n = e[9]),
                    (d += n * M),
                    (g += n * D),
                    (y += n * k),
                    (v += n * q),
                    (m += n * z),
                    (w += n * H),
                    (_ += n * B),
                    (b += n * K),
                    (E += n * V),
                    (S += n * F),
                    (I += n * W),
                    (O += n * G),
                    (P += n * Y),
                    (x += n * J),
                    (A += n * Q),
                    (R += n * $),
                    (n = e[10]),
                    (g += n * M),
                    (y += n * D),
                    (v += n * k),
                    (m += n * q),
                    (w += n * z),
                    (_ += n * H),
                    (b += n * B),
                    (E += n * K),
                    (S += n * V),
                    (I += n * F),
                    (O += n * W),
                    (P += n * G),
                    (x += n * Y),
                    (A += n * J),
                    (R += n * Q),
                    (N += n * $),
                    (n = e[11]),
                    (y += n * M),
                    (v += n * D),
                    (m += n * k),
                    (w += n * q),
                    (_ += n * z),
                    (b += n * H),
                    (E += n * B),
                    (S += n * K),
                    (I += n * V),
                    (O += n * F),
                    (P += n * W),
                    (x += n * G),
                    (A += n * Y),
                    (R += n * J),
                    (N += n * Q),
                    (T += n * $),
                    (n = e[12]),
                    (v += n * M),
                    (m += n * D),
                    (w += n * k),
                    (_ += n * q),
                    (b += n * z),
                    (E += n * H),
                    (S += n * B),
                    (I += n * K),
                    (O += n * V),
                    (P += n * F),
                    (x += n * W),
                    (A += n * G),
                    (R += n * Y),
                    (N += n * J),
                    (T += n * Q),
                    (C += n * $),
                    (n = e[13]),
                    (m += n * M),
                    (w += n * D),
                    (_ += n * k),
                    (b += n * q),
                    (E += n * z),
                    (S += n * H),
                    (I += n * B),
                    (O += n * K),
                    (P += n * V),
                    (x += n * F),
                    (A += n * W),
                    (R += n * G),
                    (N += n * Y),
                    (T += n * J),
                    (C += n * Q),
                    (j += n * $),
                    (n = e[14]),
                    (w += n * M),
                    (_ += n * D),
                    (b += n * k),
                    (E += n * q),
                    (S += n * z),
                    (I += n * H),
                    (O += n * B),
                    (P += n * K),
                    (x += n * V),
                    (A += n * F),
                    (R += n * W),
                    (N += n * G),
                    (T += n * Y),
                    (C += n * J),
                    (j += n * Q),
                    (L += n * $),
                    (n = e[15]),
                    (_ += n * M),
                    (b += n * D),
                    (E += n * k),
                    (S += n * q),
                    (I += n * z),
                    (O += n * H),
                    (P += n * B),
                    (x += n * K),
                    (A += n * V),
                    (R += n * F),
                    (N += n * W),
                    (T += n * G),
                    (C += n * Y),
                    (j += n * J),
                    (L += n * Q),
                    (U += n * $),
                    (s += 38 * b),
                    (o += 38 * E),
                    (a += 38 * S),
                    (c += 38 * I),
                    (u += 38 * O),
                    (h += 38 * P),
                    (l += 38 * x),
                    (f += 38 * A),
                    (p += 38 * R),
                    (d += 38 * N),
                    (g += 38 * T),
                    (y += 38 * C),
                    (v += 38 * j),
                    (m += 38 * L),
                    (w += 38 * U),
                    (i = 1),
                    (n = s + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (s = n - 65536 * i),
                    (n = o + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (o = n - 65536 * i),
                    (n = a + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (a = n - 65536 * i),
                    (n = c + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (c = n - 65536 * i),
                    (n = u + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (u = n - 65536 * i),
                    (n = h + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (h = n - 65536 * i),
                    (n = l + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (l = n - 65536 * i),
                    (n = f + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (f = n - 65536 * i),
                    (n = p + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (p = n - 65536 * i),
                    (n = d + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (d = n - 65536 * i),
                    (n = g + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (g = n - 65536 * i),
                    (n = y + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (y = n - 65536 * i),
                    (n = v + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (v = n - 65536 * i),
                    (n = m + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (m = n - 65536 * i),
                    (n = w + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (w = n - 65536 * i),
                    (n = _ + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (_ = n - 65536 * i),
                    (s += i - 1 + 37 * (i - 1)),
                    (i = 1),
                    (n = s + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (s = n - 65536 * i),
                    (n = o + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (o = n - 65536 * i),
                    (n = a + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (a = n - 65536 * i),
                    (n = c + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (c = n - 65536 * i),
                    (n = u + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (u = n - 65536 * i),
                    (n = h + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (h = n - 65536 * i),
                    (n = l + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (l = n - 65536 * i),
                    (n = f + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (f = n - 65536 * i),
                    (n = p + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (p = n - 65536 * i),
                    (n = d + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (d = n - 65536 * i),
                    (n = g + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (g = n - 65536 * i),
                    (n = y + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (y = n - 65536 * i),
                    (n = v + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (v = n - 65536 * i),
                    (n = m + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (m = n - 65536 * i),
                    (n = w + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (w = n - 65536 * i),
                    (n = _ + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (_ = n - 65536 * i),
                    (s += i - 1 + 37 * (i - 1)),
                    (t[0] = s),
                    (t[1] = o),
                    (t[2] = a),
                    (t[3] = c),
                    (t[4] = u),
                    (t[5] = h),
                    (t[6] = l),
                    (t[7] = f),
                    (t[8] = p),
                    (t[9] = d),
                    (t[10] = g),
                    (t[11] = y),
                    (t[12] = v),
                    (t[13] = m),
                    (t[14] = w),
                    (t[15] = _)
            }
            function I(t, e) {
                S(t, e, e)
            }
            function O(t, e) {
                const r = o()
                let n
                for (n = 0; n < 16; n++) r[n] = e[n]
                for (n = 253; n >= 0; n--) I(r, r), 2 !== n && 4 !== n && S(r, r, e)
                for (n = 0; n < 16; n++) t[n] = r[n]
            }
            function P(t, e) {
                const r = o(),
                    n = o(),
                    i = o(),
                    s = o(),
                    a = o(),
                    c = o(),
                    u = o(),
                    l = o(),
                    f = o()
                E(r, t[1], t[0]),
                    E(f, e[1], e[0]),
                    S(r, r, f),
                    b(n, t[0], t[1]),
                    b(f, e[0], e[1]),
                    S(n, n, f),
                    S(i, t[3], e[3]),
                    S(i, i, h),
                    S(s, t[2], e[2]),
                    b(s, s, s),
                    E(a, n, r),
                    E(c, s, i),
                    b(u, s, i),
                    b(l, n, r),
                    S(t[0], a, c),
                    S(t[1], l, u),
                    S(t[2], u, c),
                    S(t[3], a, l)
            }
            function x(t, e, r) {
                for (let n = 0; n < 4; n++) y(t[n], e[n], r)
            }
            function A(t, e) {
                const r = o(),
                    n = o(),
                    i = o()
                O(i, e[2]), S(r, e[0], i), S(n, e[1], i), v(t, n), (t[31] ^= _(r) << 7)
            }
            function R(t, e, r) {
                d(t[0], a), d(t[1], c), d(t[2], c), d(t[3], a)
                for (let n = 255; n >= 0; --n) {
                    const i = (r[(n / 8) | 0] >> (7 & n)) & 1
                    x(t, e, i), P(e, t), P(t, t), x(t, e, i)
                }
            }
            function N(t, e) {
                const r = [o(), o(), o(), o()]
                d(r[0], l), d(r[1], f), d(r[2], c), S(r[3], l, f), R(t, r, e)
            }
            function T(t) {
                if (t.length !== e.aP) throw new Error('ed25519: seed must be '.concat(e.aP, ' bytes'))
                const r = (0, i.hash)(t)
                ;(r[0] &= 248), (r[31] &= 127), (r[31] |= 64)
                const n = new Uint8Array(32),
                    s = [o(), o(), o(), o()]
                N(s, r), A(n, s)
                const a = new Uint8Array(64)
                return a.set(t), a.set(n, 32), { publicKey: n, secretKey: a }
            }
            e._w = T
            const C = new Float64Array([
                237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16
            ])
            function j(t, e) {
                let r, n, i, s
                for (n = 63; n >= 32; --n) {
                    for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
                        (e[i] += r - 16 * e[n] * C[i - (n - 32)]), (r = Math.floor((e[i] + 128) / 256)), (e[i] -= 256 * r)
                    ;(e[i] += r), (e[n] = 0)
                }
                for (r = 0, i = 0; i < 32; i++) (e[i] += r - (e[31] >> 4) * C[i]), (r = e[i] >> 8), (e[i] &= 255)
                for (i = 0; i < 32; i++) e[i] -= r * C[i]
                for (n = 0; n < 32; n++) (e[n + 1] += e[n] >> 8), (t[n] = 255 & e[n])
            }
            function L(t) {
                const e = new Float64Array(64)
                for (let r = 0; r < 64; r++) e[r] = t[r]
                for (let r = 0; r < 64; r++) t[r] = 0
                j(t, e)
            }
            function U(t, e) {
                const r = o(),
                    n = o(),
                    i = o(),
                    s = o(),
                    h = o(),
                    l = o(),
                    f = o()
                return (
                    d(t[2], c),
                    (function (t, e) {
                        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8)
                        t[15] &= 32767
                    })(t[1], e),
                    I(i, t[1]),
                    S(s, i, u),
                    E(i, i, t[2]),
                    b(s, t[2], s),
                    I(h, s),
                    I(l, h),
                    S(f, l, h),
                    S(r, f, i),
                    S(r, r, s),
                    (function (t, e) {
                        const r = o()
                        let n
                        for (n = 0; n < 16; n++) r[n] = e[n]
                        for (n = 250; n >= 0; n--) I(r, r), 1 !== n && S(r, r, e)
                        for (n = 0; n < 16; n++) t[n] = r[n]
                    })(r, r),
                    S(r, r, i),
                    S(r, r, s),
                    S(r, r, s),
                    S(t[0], r, s),
                    I(n, t[0]),
                    S(n, n, s),
                    w(n, i) && S(t[0], t[0], p),
                    I(n, t[0]),
                    S(n, n, s),
                    w(n, i) ? -1 : (_(t[0]) === e[31] >> 7 && E(t[0], a, t[0]), S(t[3], t[0], t[1]), 0)
                )
            }
            e.Xx = function (t, e) {
                const r = new Float64Array(64),
                    n = [o(), o(), o(), o()],
                    s = (0, i.hash)(t.subarray(0, 32))
                ;(s[0] &= 248), (s[31] &= 127), (s[31] |= 64)
                const a = new Uint8Array(64)
                a.set(s.subarray(32), 32)
                const c = new i.SHA512()
                c.update(a.subarray(32)), c.update(e)
                const u = c.digest()
                c.clean(), L(u), N(n, u), A(a, n), c.reset(), c.update(a.subarray(0, 32)), c.update(t.subarray(32)), c.update(e)
                const h = c.digest()
                L(h)
                for (let i = 0; i < 32; i++) r[i] = u[i]
                for (let i = 0; i < 32; i++) for (let t = 0; t < 32; t++) r[i + t] += h[i] * s[t]
                return j(a.subarray(32), r), a
            }
        },
        5202: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.isSerializableHash = function (t) {
                    return 'undefined' !== typeof t.saveState && 'undefined' !== typeof t.restoreState && 'undefined' !== typeof t.cleanSavedState
                })
        },
        1791: (t, e, r) => {
            'use strict'
            var n = r(1680),
                i = r(3227),
                s = (function () {
                    function t(t, e, r, i) {
                        void 0 === r && (r = new Uint8Array(0)), (this._counter = new Uint8Array(1)), (this._hash = t), (this._info = i)
                        var s = n.hmac(this._hash, r, e)
                        ;(this._hmac = new n.HMAC(t, s)),
                            (this._buffer = new Uint8Array(this._hmac.digestLength)),
                            (this._bufpos = this._buffer.length)
                    }
                    return (
                        (t.prototype._fillBuffer = function () {
                            this._counter[0]++
                            var t = this._counter[0]
                            if (0 === t) throw new Error('hkdf: cannot expand more')
                            this._hmac.reset(),
                                t > 1 && this._hmac.update(this._buffer),
                                this._info && this._hmac.update(this._info),
                                this._hmac.update(this._counter),
                                this._hmac.finish(this._buffer),
                                (this._bufpos = 0)
                        }),
                        (t.prototype.expand = function (t) {
                            for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
                                this._bufpos === this._buffer.length && this._fillBuffer(), (e[r] = this._buffer[this._bufpos++])
                            return e
                        }),
                        (t.prototype.clean = function () {
                            this._hmac.clean(), i.wipe(this._buffer), i.wipe(this._counter), (this._bufpos = 0)
                        }),
                        t
                    )
                })()
            e.t = s
        },
        1680: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var n = r(5202),
                i = r(6852),
                s = r(3227),
                o = (function () {
                    function t(t, e) {
                        ;(this._finished = !1),
                            (this._inner = new t()),
                            (this._outer = new t()),
                            (this.blockSize = this._outer.blockSize),
                            (this.digestLength = this._outer.digestLength)
                        var r = new Uint8Array(this.blockSize)
                        e.length > this.blockSize ? this._inner.update(e).finish(r).clean() : r.set(e)
                        for (var i = 0; i < r.length; i++) r[i] ^= 54
                        this._inner.update(r)
                        for (i = 0; i < r.length; i++) r[i] ^= 106
                        this._outer.update(r),
                            n.isSerializableHash(this._inner) &&
                                n.isSerializableHash(this._outer) &&
                                ((this._innerKeyedState = this._inner.saveState()), (this._outerKeyedState = this._outer.saveState())),
                            s.wipe(r)
                    }
                    return (
                        (t.prototype.reset = function () {
                            if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer))
                                throw new Error("hmac: can't reset() because hash doesn't implement restoreState()")
                            return (
                                this._inner.restoreState(this._innerKeyedState),
                                this._outer.restoreState(this._outerKeyedState),
                                (this._finished = !1),
                                this
                            )
                        }),
                        (t.prototype.clean = function () {
                            n.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState),
                                n.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState),
                                this._inner.clean(),
                                this._outer.clean()
                        }),
                        (t.prototype.update = function (t) {
                            return this._inner.update(t), this
                        }),
                        (t.prototype.finish = function (t) {
                            return this._finished
                                ? (this._outer.finish(t), this)
                                : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), (this._finished = !0), this)
                        }),
                        (t.prototype.digest = function () {
                            var t = new Uint8Array(this.digestLength)
                            return this.finish(t), t
                        }),
                        (t.prototype.saveState = function () {
                            if (!n.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it")
                            return this._inner.saveState()
                        }),
                        (t.prototype.restoreState = function (t) {
                            if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer))
                                throw new Error("hmac: can't restoreState() because hash doesn't implement it")
                            return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), (this._finished = !1), this
                        }),
                        (t.prototype.cleanSavedState = function (t) {
                            if (!n.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it")
                            this._inner.cleanSavedState(t)
                        }),
                        t
                    )
                })()
            ;(e.HMAC = o),
                (e.hmac = function (t, e, r) {
                    var n = new o(t, e)
                    n.update(r)
                    var i = n.digest()
                    return n.clean(), i
                }),
                (e.equal = i.equal)
        },
        4654: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.mul =
                    Math.imul ||
                    function (t, e) {
                        var r = 65535 & t,
                            n = 65535 & e
                        return (r * n + (((((t >>> 16) & 65535) * n + r * ((e >>> 16) & 65535)) << 16) >>> 0)) | 0
                    }),
                (e.add = function (t, e) {
                    return (t + e) | 0
                }),
                (e.sub = function (t, e) {
                    return (t - e) | 0
                }),
                (e.rotl = function (t, e) {
                    return (t << e) | (t >>> (32 - e))
                }),
                (e.rotr = function (t, e) {
                    return (t << (32 - e)) | (t >>> e)
                }),
                (e.isInteger =
                    Number.isInteger ||
                    function (t) {
                        return 'number' === typeof t && isFinite(t) && Math.floor(t) === t
                    }),
                (e.MAX_SAFE_INTEGER = 9007199254740991),
                (e.isSafeInteger = function (t) {
                    return e.isInteger(t) && t >= -e.MAX_SAFE_INTEGER && t <= e.MAX_SAFE_INTEGER
                })
        },
        2625: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var n = r(6852),
                i = r(3227)
            e.DIGEST_LENGTH = 16
            var s = (function () {
                function t(t) {
                    ;(this.digestLength = e.DIGEST_LENGTH),
                        (this._buffer = new Uint8Array(16)),
                        (this._r = new Uint16Array(10)),
                        (this._h = new Uint16Array(10)),
                        (this._pad = new Uint16Array(8)),
                        (this._leftover = 0),
                        (this._fin = 0),
                        (this._finished = !1)
                    var r = t[0] | (t[1] << 8)
                    this._r[0] = 8191 & r
                    var n = t[2] | (t[3] << 8)
                    this._r[1] = 8191 & ((r >>> 13) | (n << 3))
                    var i = t[4] | (t[5] << 8)
                    this._r[2] = 7939 & ((n >>> 10) | (i << 6))
                    var s = t[6] | (t[7] << 8)
                    this._r[3] = 8191 & ((i >>> 7) | (s << 9))
                    var o = t[8] | (t[9] << 8)
                    ;(this._r[4] = 255 & ((s >>> 4) | (o << 12))), (this._r[5] = (o >>> 1) & 8190)
                    var a = t[10] | (t[11] << 8)
                    this._r[6] = 8191 & ((o >>> 14) | (a << 2))
                    var c = t[12] | (t[13] << 8)
                    this._r[7] = 8065 & ((a >>> 11) | (c << 5))
                    var u = t[14] | (t[15] << 8)
                    ;(this._r[8] = 8191 & ((c >>> 8) | (u << 8))),
                        (this._r[9] = (u >>> 5) & 127),
                        (this._pad[0] = t[16] | (t[17] << 8)),
                        (this._pad[1] = t[18] | (t[19] << 8)),
                        (this._pad[2] = t[20] | (t[21] << 8)),
                        (this._pad[3] = t[22] | (t[23] << 8)),
                        (this._pad[4] = t[24] | (t[25] << 8)),
                        (this._pad[5] = t[26] | (t[27] << 8)),
                        (this._pad[6] = t[28] | (t[29] << 8)),
                        (this._pad[7] = t[30] | (t[31] << 8))
                }
                return (
                    (t.prototype._blocks = function (t, e, r) {
                        for (
                            var n = this._fin ? 0 : 2048,
                                i = this._h[0],
                                s = this._h[1],
                                o = this._h[2],
                                a = this._h[3],
                                c = this._h[4],
                                u = this._h[5],
                                h = this._h[6],
                                l = this._h[7],
                                f = this._h[8],
                                p = this._h[9],
                                d = this._r[0],
                                g = this._r[1],
                                y = this._r[2],
                                v = this._r[3],
                                m = this._r[4],
                                w = this._r[5],
                                _ = this._r[6],
                                b = this._r[7],
                                E = this._r[8],
                                S = this._r[9];
                            r >= 16;

                        ) {
                            var I = t[e + 0] | (t[e + 1] << 8)
                            i += 8191 & I
                            var O = t[e + 2] | (t[e + 3] << 8)
                            s += 8191 & ((I >>> 13) | (O << 3))
                            var P = t[e + 4] | (t[e + 5] << 8)
                            o += 8191 & ((O >>> 10) | (P << 6))
                            var x = t[e + 6] | (t[e + 7] << 8)
                            a += 8191 & ((P >>> 7) | (x << 9))
                            var A = t[e + 8] | (t[e + 9] << 8)
                            ;(c += 8191 & ((x >>> 4) | (A << 12))), (u += (A >>> 1) & 8191)
                            var R = t[e + 10] | (t[e + 11] << 8)
                            h += 8191 & ((A >>> 14) | (R << 2))
                            var N = t[e + 12] | (t[e + 13] << 8)
                            l += 8191 & ((R >>> 11) | (N << 5))
                            var T = t[e + 14] | (t[e + 15] << 8),
                                C = 0,
                                j = C
                            ;(j += i * d),
                                (j += s * (5 * S)),
                                (j += o * (5 * E)),
                                (j += a * (5 * b)),
                                (C = (j += c * (5 * _)) >>> 13),
                                (j &= 8191),
                                (j += u * (5 * w)),
                                (j += h * (5 * m)),
                                (j += l * (5 * v)),
                                (j += (f += 8191 & ((N >>> 8) | (T << 8))) * (5 * y))
                            var L = (C += (j += (p += (T >>> 5) | n) * (5 * g)) >>> 13)
                            ;(L += i * g),
                                (L += s * d),
                                (L += o * (5 * S)),
                                (L += a * (5 * E)),
                                (C = (L += c * (5 * b)) >>> 13),
                                (L &= 8191),
                                (L += u * (5 * _)),
                                (L += h * (5 * w)),
                                (L += l * (5 * m)),
                                (L += f * (5 * v)),
                                (C += (L += p * (5 * y)) >>> 13),
                                (L &= 8191)
                            var U = C
                            ;(U += i * y),
                                (U += s * g),
                                (U += o * d),
                                (U += a * (5 * S)),
                                (C = (U += c * (5 * E)) >>> 13),
                                (U &= 8191),
                                (U += u * (5 * b)),
                                (U += h * (5 * _)),
                                (U += l * (5 * w)),
                                (U += f * (5 * m))
                            var M = (C += (U += p * (5 * v)) >>> 13)
                            ;(M += i * v),
                                (M += s * y),
                                (M += o * g),
                                (M += a * d),
                                (C = (M += c * (5 * S)) >>> 13),
                                (M &= 8191),
                                (M += u * (5 * E)),
                                (M += h * (5 * b)),
                                (M += l * (5 * _)),
                                (M += f * (5 * w))
                            var D = (C += (M += p * (5 * m)) >>> 13)
                            ;(D += i * m),
                                (D += s * v),
                                (D += o * y),
                                (D += a * g),
                                (C = (D += c * d) >>> 13),
                                (D &= 8191),
                                (D += u * (5 * S)),
                                (D += h * (5 * E)),
                                (D += l * (5 * b)),
                                (D += f * (5 * _))
                            var k = (C += (D += p * (5 * w)) >>> 13)
                            ;(k += i * w),
                                (k += s * m),
                                (k += o * v),
                                (k += a * y),
                                (C = (k += c * g) >>> 13),
                                (k &= 8191),
                                (k += u * d),
                                (k += h * (5 * S)),
                                (k += l * (5 * E)),
                                (k += f * (5 * b))
                            var q = (C += (k += p * (5 * _)) >>> 13)
                            ;(q += i * _),
                                (q += s * w),
                                (q += o * m),
                                (q += a * v),
                                (C = (q += c * y) >>> 13),
                                (q &= 8191),
                                (q += u * g),
                                (q += h * d),
                                (q += l * (5 * S)),
                                (q += f * (5 * E))
                            var z = (C += (q += p * (5 * b)) >>> 13)
                            ;(z += i * b),
                                (z += s * _),
                                (z += o * w),
                                (z += a * m),
                                (C = (z += c * v) >>> 13),
                                (z &= 8191),
                                (z += u * y),
                                (z += h * g),
                                (z += l * d),
                                (z += f * (5 * S))
                            var H = (C += (z += p * (5 * E)) >>> 13)
                            ;(H += i * E),
                                (H += s * b),
                                (H += o * _),
                                (H += a * w),
                                (C = (H += c * m) >>> 13),
                                (H &= 8191),
                                (H += u * v),
                                (H += h * y),
                                (H += l * g),
                                (H += f * d)
                            var B = (C += (H += p * (5 * S)) >>> 13)
                            ;(B += i * S),
                                (B += s * E),
                                (B += o * b),
                                (B += a * _),
                                (C = (B += c * w) >>> 13),
                                (B &= 8191),
                                (B += u * m),
                                (B += h * v),
                                (B += l * y),
                                (B += f * g),
                                (i = j = 8191 & (C = ((C = (((C += (B += p * d) >>> 13) << 2) + C) | 0) + (j &= 8191)) | 0)),
                                (s = L += C >>>= 13),
                                (o = U &= 8191),
                                (a = M &= 8191),
                                (c = D &= 8191),
                                (u = k &= 8191),
                                (h = q &= 8191),
                                (l = z &= 8191),
                                (f = H &= 8191),
                                (p = B &= 8191),
                                (e += 16),
                                (r -= 16)
                        }
                        ;(this._h[0] = i),
                            (this._h[1] = s),
                            (this._h[2] = o),
                            (this._h[3] = a),
                            (this._h[4] = c),
                            (this._h[5] = u),
                            (this._h[6] = h),
                            (this._h[7] = l),
                            (this._h[8] = f),
                            (this._h[9] = p)
                    }),
                    (t.prototype.finish = function (t, e) {
                        void 0 === e && (e = 0)
                        var r,
                            n,
                            i,
                            s,
                            o = new Uint16Array(10)
                        if (this._leftover) {
                            for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0
                            ;(this._fin = 1), this._blocks(this._buffer, 0, 16)
                        }
                        for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++)
                            (this._h[s] += r), (r = this._h[s] >>> 13), (this._h[s] &= 8191)
                        for (
                            this._h[0] += 5 * r,
                                r = this._h[0] >>> 13,
                                this._h[0] &= 8191,
                                this._h[1] += r,
                                r = this._h[1] >>> 13,
                                this._h[1] &= 8191,
                                this._h[2] += r,
                                o[0] = this._h[0] + 5,
                                r = o[0] >>> 13,
                                o[0] &= 8191,
                                s = 1;
                            s < 10;
                            s++
                        )
                            (o[s] = this._h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191)
                        for (o[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= n
                        for (n = ~n, s = 0; s < 10; s++) this._h[s] = (this._h[s] & n) | o[s]
                        for (
                            this._h[0] = 65535 & (this._h[0] | (this._h[1] << 13)),
                                this._h[1] = 65535 & ((this._h[1] >>> 3) | (this._h[2] << 10)),
                                this._h[2] = 65535 & ((this._h[2] >>> 6) | (this._h[3] << 7)),
                                this._h[3] = 65535 & ((this._h[3] >>> 9) | (this._h[4] << 4)),
                                this._h[4] = 65535 & ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)),
                                this._h[5] = 65535 & ((this._h[6] >>> 2) | (this._h[7] << 11)),
                                this._h[6] = 65535 & ((this._h[7] >>> 5) | (this._h[8] << 8)),
                                this._h[7] = 65535 & ((this._h[8] >>> 8) | (this._h[9] << 5)),
                                i = this._h[0] + this._pad[0],
                                this._h[0] = 65535 & i,
                                s = 1;
                            s < 8;
                            s++
                        )
                            (i = (((this._h[s] + this._pad[s]) | 0) + (i >>> 16)) | 0), (this._h[s] = 65535 & i)
                        return (
                            (t[e + 0] = this._h[0] >>> 0),
                            (t[e + 1] = this._h[0] >>> 8),
                            (t[e + 2] = this._h[1] >>> 0),
                            (t[e + 3] = this._h[1] >>> 8),
                            (t[e + 4] = this._h[2] >>> 0),
                            (t[e + 5] = this._h[2] >>> 8),
                            (t[e + 6] = this._h[3] >>> 0),
                            (t[e + 7] = this._h[3] >>> 8),
                            (t[e + 8] = this._h[4] >>> 0),
                            (t[e + 9] = this._h[4] >>> 8),
                            (t[e + 10] = this._h[5] >>> 0),
                            (t[e + 11] = this._h[5] >>> 8),
                            (t[e + 12] = this._h[6] >>> 0),
                            (t[e + 13] = this._h[6] >>> 8),
                            (t[e + 14] = this._h[7] >>> 0),
                            (t[e + 15] = this._h[7] >>> 8),
                            (this._finished = !0),
                            this
                        )
                    }),
                    (t.prototype.update = function (t) {
                        var e,
                            r = 0,
                            n = t.length
                        if (this._leftover) {
                            ;(e = 16 - this._leftover) > n && (e = n)
                            for (var i = 0; i < e; i++) this._buffer[this._leftover + i] = t[r + i]
                            if (((n -= e), (r += e), (this._leftover += e), this._leftover < 16)) return this
                            this._blocks(this._buffer, 0, 16), (this._leftover = 0)
                        }
                        if ((n >= 16 && ((e = n - (n % 16)), this._blocks(t, r, e), (r += e), (n -= e)), n)) {
                            for (i = 0; i < n; i++) this._buffer[this._leftover + i] = t[r + i]
                            this._leftover += n
                        }
                        return this
                    }),
                    (t.prototype.digest = function () {
                        if (this._finished) throw new Error('Poly1305 was finished')
                        var t = new Uint8Array(16)
                        return this.finish(t), t
                    }),
                    (t.prototype.clean = function () {
                        return (
                            i.wipe(this._buffer),
                            i.wipe(this._r),
                            i.wipe(this._h),
                            i.wipe(this._pad),
                            (this._leftover = 0),
                            (this._fin = 0),
                            (this._finished = !0),
                            this
                        )
                    }),
                    t
                )
            })()
            ;(e.Poly1305 = s),
                (e.oneTimeAuth = function (t, e) {
                    var r = new s(t)
                    r.update(e)
                    var n = r.digest()
                    return r.clean(), n
                }),
                (e.equal = function (t, r) {
                    return t.length === e.DIGEST_LENGTH && r.length === e.DIGEST_LENGTH && n.equal(t, r)
                })
        },
        4701: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0)
            const n = r(4239),
                i = r(9734),
                s = r(3227)
            function o(t) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.defaultRandomSource).randomBytes(t)
            }
            ;(e.defaultRandomSource = new n.SystemRandomSource()),
                (e.randomBytes = o),
                (e.randomUint32 = function () {
                    const t = o(4, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.defaultRandomSource),
                        r = (0, i.readUint32LE)(t)
                    return (0, s.wipe)(t), r
                })
            const a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            function c(t) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.defaultRandomSource
                if (r.length < 2) throw new Error('randomString charset is too short')
                if (r.length > 256) throw new Error('randomString charset is too long')
                let i = ''
                const c = r.length,
                    u = 256 - (256 % c)
                for (; t > 0; ) {
                    const e = o(Math.ceil((256 * t) / u), n)
                    for (let n = 0; n < e.length && t > 0; n++) {
                        const s = e[n]
                        s < u && ((i += r.charAt(s % c)), t--)
                    }
                    ;(0, s.wipe)(e)
                }
                return i
            }
            ;(e.randomString = c),
                (e.randomStringForEntropy = function (t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.defaultRandomSource
                    return c(Math.ceil(t / (Math.log(r.length) / Math.LN2)), r, n)
                })
        },
        3687: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.BrowserRandomSource = void 0)
            e.BrowserRandomSource = class {
                constructor() {
                    ;(this.isAvailable = !1), (this.isInstantiated = !1)
                    const t = 'undefined' !== typeof self ? self.crypto || self.msCrypto : null
                    t && void 0 !== t.getRandomValues && ((this._crypto = t), (this.isAvailable = !0), (this.isInstantiated = !0))
                }
                randomBytes(t) {
                    if (!this.isAvailable || !this._crypto) throw new Error('Browser random byte generator is not available.')
                    const e = new Uint8Array(t)
                    for (let r = 0; r < e.length; r += 65536) this._crypto.getRandomValues(e.subarray(r, r + Math.min(e.length - r, 65536)))
                    return e
                }
            }
        },
        6846: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.NodeRandomSource = void 0)
            const n = r(3227)
            e.NodeRandomSource = class {
                constructor() {
                    ;(this.isAvailable = !1), (this.isInstantiated = !1)
                    {
                        const t = r(5883)
                        t && t.randomBytes && ((this._crypto = t), (this.isAvailable = !0), (this.isInstantiated = !0))
                    }
                }
                randomBytes(t) {
                    if (!this.isAvailable || !this._crypto) throw new Error('Node.js random byte generator is not available.')
                    let e = this._crypto.randomBytes(t)
                    if (e.length !== t) throw new Error('NodeRandomSource: got fewer bytes than requested')
                    const r = new Uint8Array(t)
                    for (let n = 0; n < r.length; n++) r[n] = e[n]
                    return (0, n.wipe)(e), r
                }
            }
        },
        4239: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.SystemRandomSource = void 0)
            const n = r(3687),
                i = r(6846)
            e.SystemRandomSource = class {
                constructor() {
                    return (
                        (this.isAvailable = !1),
                        (this.name = ''),
                        (this._source = new n.BrowserRandomSource()),
                        this._source.isAvailable
                            ? ((this.isAvailable = !0), void (this.name = 'Browser'))
                            : ((this._source = new i.NodeRandomSource()),
                              this._source.isAvailable ? ((this.isAvailable = !0), void (this.name = 'Node')) : void 0)
                    )
                }
                randomBytes(t) {
                    if (!this.isAvailable) throw new Error('System random byte generator is not available.')
                    return this._source.randomBytes(t)
                }
            }
        },
        9900: (t, e, r) => {
            'use strict'
            var n = r(9734),
                i = r(3227)
            ;(e.k = 32), (e.cn = 64)
            var s = (function () {
                function t() {
                    ;(this.digestLength = e.k),
                        (this.blockSize = e.cn),
                        (this._state = new Int32Array(8)),
                        (this._temp = new Int32Array(64)),
                        (this._buffer = new Uint8Array(128)),
                        (this._bufferLength = 0),
                        (this._bytesHashed = 0),
                        (this._finished = !1),
                        this.reset()
                }
                return (
                    (t.prototype._initState = function () {
                        ;(this._state[0] = 1779033703),
                            (this._state[1] = 3144134277),
                            (this._state[2] = 1013904242),
                            (this._state[3] = 2773480762),
                            (this._state[4] = 1359893119),
                            (this._state[5] = 2600822924),
                            (this._state[6] = 528734635),
                            (this._state[7] = 1541459225)
                    }),
                    (t.prototype.reset = function () {
                        return this._initState(), (this._bufferLength = 0), (this._bytesHashed = 0), (this._finished = !1), this
                    }),
                    (t.prototype.clean = function () {
                        i.wipe(this._buffer), i.wipe(this._temp), this.reset()
                    }),
                    (t.prototype.update = function (t, e) {
                        if ((void 0 === e && (e = t.length), this._finished)) throw new Error("SHA256: can't update because hash was finished.")
                        var r = 0
                        if (((this._bytesHashed += e), this._bufferLength > 0)) {
                            for (; this._bufferLength < this.blockSize && e > 0; ) (this._buffer[this._bufferLength++] = t[r++]), e--
                            this._bufferLength === this.blockSize &&
                                (a(this._temp, this._state, this._buffer, 0, this.blockSize), (this._bufferLength = 0))
                        }
                        for (e >= this.blockSize && ((r = a(this._temp, this._state, t, r, e)), (e %= this.blockSize)); e > 0; )
                            (this._buffer[this._bufferLength++] = t[r++]), e--
                        return this
                    }),
                    (t.prototype.finish = function (t) {
                        if (!this._finished) {
                            var e = this._bytesHashed,
                                r = this._bufferLength,
                                i = (e / 536870912) | 0,
                                s = e << 3,
                                o = e % 64 < 56 ? 64 : 128
                            this._buffer[r] = 128
                            for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0
                            n.writeUint32BE(i, this._buffer, o - 8),
                                n.writeUint32BE(s, this._buffer, o - 4),
                                a(this._temp, this._state, this._buffer, 0, o),
                                (this._finished = !0)
                        }
                        for (c = 0; c < this.digestLength / 4; c++) n.writeUint32BE(this._state[c], t, 4 * c)
                        return this
                    }),
                    (t.prototype.digest = function () {
                        var t = new Uint8Array(this.digestLength)
                        return this.finish(t), t
                    }),
                    (t.prototype.saveState = function () {
                        if (this._finished) throw new Error('SHA256: cannot save finished state')
                        return {
                            state: new Int32Array(this._state),
                            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                            bufferLength: this._bufferLength,
                            bytesHashed: this._bytesHashed
                        }
                    }),
                    (t.prototype.restoreState = function (t) {
                        return (
                            this._state.set(t.state),
                            (this._bufferLength = t.bufferLength),
                            t.buffer && this._buffer.set(t.buffer),
                            (this._bytesHashed = t.bytesHashed),
                            (this._finished = !1),
                            this
                        )
                    }),
                    (t.prototype.cleanSavedState = function (t) {
                        i.wipe(t.state), t.buffer && i.wipe(t.buffer), (t.bufferLength = 0), (t.bytesHashed = 0)
                    }),
                    t
                )
            })()
            e.mE = s
            var o = new Int32Array([
                1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278,
                1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
                1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
                773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
                3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
                1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
            ])
            function a(t, e, r, i, s) {
                for (; s >= 64; ) {
                    for (var a = e[0], c = e[1], u = e[2], h = e[3], l = e[4], f = e[5], p = e[6], d = e[7], g = 0; g < 16; g++) {
                        var y = i + 4 * g
                        t[g] = n.readUint32BE(r, y)
                    }
                    for (g = 16; g < 64; g++) {
                        var v = t[g - 2],
                            m = ((v >>> 17) | (v << 15)) ^ ((v >>> 19) | (v << 13)) ^ (v >>> 10),
                            w = (((v = t[g - 15]) >>> 7) | (v << 25)) ^ ((v >>> 18) | (v << 14)) ^ (v >>> 3)
                        t[g] = ((m + t[g - 7]) | 0) + ((w + t[g - 16]) | 0)
                    }
                    for (g = 0; g < 64; g++) {
                        ;(m =
                            ((((((l >>> 6) | (l << 26)) ^ ((l >>> 11) | (l << 21)) ^ ((l >>> 25) | (l << 7))) + ((l & f) ^ (~l & p))) | 0) +
                                ((d + ((o[g] + t[g]) | 0)) | 0)) |
                            0),
                            (w =
                                ((((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10))) + ((a & c) ^ (a & u) ^ (c & u))) | 0)
                        ;(d = p), (p = f), (f = l), (l = (h + m) | 0), (h = u), (u = c), (c = a), (a = (m + w) | 0)
                    }
                    ;(e[0] += a), (e[1] += c), (e[2] += u), (e[3] += h), (e[4] += l), (e[5] += f), (e[6] += p), (e[7] += d), (i += 64), (s -= 64)
                }
                return i
            }
            e.vp = function (t) {
                var e = new s()
                e.update(t)
                var r = e.digest()
                return e.clean(), r
            }
        },
        1956: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            var n = r(9734),
                i = r(3227)
            ;(e.DIGEST_LENGTH = 64), (e.BLOCK_SIZE = 128)
            var s = (function () {
                function t() {
                    ;(this.digestLength = e.DIGEST_LENGTH),
                        (this.blockSize = e.BLOCK_SIZE),
                        (this._stateHi = new Int32Array(8)),
                        (this._stateLo = new Int32Array(8)),
                        (this._tempHi = new Int32Array(16)),
                        (this._tempLo = new Int32Array(16)),
                        (this._buffer = new Uint8Array(256)),
                        (this._bufferLength = 0),
                        (this._bytesHashed = 0),
                        (this._finished = !1),
                        this.reset()
                }
                return (
                    (t.prototype._initState = function () {
                        ;(this._stateHi[0] = 1779033703),
                            (this._stateHi[1] = 3144134277),
                            (this._stateHi[2] = 1013904242),
                            (this._stateHi[3] = 2773480762),
                            (this._stateHi[4] = 1359893119),
                            (this._stateHi[5] = 2600822924),
                            (this._stateHi[6] = 528734635),
                            (this._stateHi[7] = 1541459225),
                            (this._stateLo[0] = 4089235720),
                            (this._stateLo[1] = 2227873595),
                            (this._stateLo[2] = 4271175723),
                            (this._stateLo[3] = 1595750129),
                            (this._stateLo[4] = 2917565137),
                            (this._stateLo[5] = 725511199),
                            (this._stateLo[6] = 4215389547),
                            (this._stateLo[7] = 327033209)
                    }),
                    (t.prototype.reset = function () {
                        return this._initState(), (this._bufferLength = 0), (this._bytesHashed = 0), (this._finished = !1), this
                    }),
                    (t.prototype.clean = function () {
                        i.wipe(this._buffer), i.wipe(this._tempHi), i.wipe(this._tempLo), this.reset()
                    }),
                    (t.prototype.update = function (t, r) {
                        if ((void 0 === r && (r = t.length), this._finished)) throw new Error("SHA512: can't update because hash was finished.")
                        var n = 0
                        if (((this._bytesHashed += r), this._bufferLength > 0)) {
                            for (; this._bufferLength < e.BLOCK_SIZE && r > 0; ) (this._buffer[this._bufferLength++] = t[n++]), r--
                            this._bufferLength === this.blockSize &&
                                (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                                (this._bufferLength = 0))
                        }
                        for (
                            r >= this.blockSize &&
                            ((n = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, n, r)), (r %= this.blockSize));
                            r > 0;

                        )
                            (this._buffer[this._bufferLength++] = t[n++]), r--
                        return this
                    }),
                    (t.prototype.finish = function (t) {
                        if (!this._finished) {
                            var e = this._bytesHashed,
                                r = this._bufferLength,
                                i = (e / 536870912) | 0,
                                s = e << 3,
                                o = e % 128 < 112 ? 128 : 256
                            this._buffer[r] = 128
                            for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0
                            n.writeUint32BE(i, this._buffer, o - 8),
                                n.writeUint32BE(s, this._buffer, o - 4),
                                a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o),
                                (this._finished = !0)
                        }
                        for (c = 0; c < this.digestLength / 8; c++)
                            n.writeUint32BE(this._stateHi[c], t, 8 * c), n.writeUint32BE(this._stateLo[c], t, 8 * c + 4)
                        return this
                    }),
                    (t.prototype.digest = function () {
                        var t = new Uint8Array(this.digestLength)
                        return this.finish(t), t
                    }),
                    (t.prototype.saveState = function () {
                        if (this._finished) throw new Error('SHA256: cannot save finished state')
                        return {
                            stateHi: new Int32Array(this._stateHi),
                            stateLo: new Int32Array(this._stateLo),
                            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                            bufferLength: this._bufferLength,
                            bytesHashed: this._bytesHashed
                        }
                    }),
                    (t.prototype.restoreState = function (t) {
                        return (
                            this._stateHi.set(t.stateHi),
                            this._stateLo.set(t.stateLo),
                            (this._bufferLength = t.bufferLength),
                            t.buffer && this._buffer.set(t.buffer),
                            (this._bytesHashed = t.bytesHashed),
                            (this._finished = !1),
                            this
                        )
                    }),
                    (t.prototype.cleanSavedState = function (t) {
                        i.wipe(t.stateHi), i.wipe(t.stateLo), t.buffer && i.wipe(t.buffer), (t.bufferLength = 0), (t.bytesHashed = 0)
                    }),
                    t
                )
            })()
            e.SHA512 = s
            var o = new Int32Array([
                1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993,
                3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764,
                1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401,
                2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235,
                1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671,
                3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
                773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350,
                1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008,
                3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616,
                1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
                1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474,
                593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
                3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269,
                320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158,
                1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591
            ])
            function a(t, e, r, i, s, a, c) {
                for (
                    var u,
                        h,
                        l,
                        f,
                        p,
                        d,
                        g,
                        y,
                        v = r[0],
                        m = r[1],
                        w = r[2],
                        _ = r[3],
                        b = r[4],
                        E = r[5],
                        S = r[6],
                        I = r[7],
                        O = i[0],
                        P = i[1],
                        x = i[2],
                        A = i[3],
                        R = i[4],
                        N = i[5],
                        T = i[6],
                        C = i[7];
                    c >= 128;

                ) {
                    for (var j = 0; j < 16; j++) {
                        var L = 8 * j + a
                        ;(t[j] = n.readUint32BE(s, L)), (e[j] = n.readUint32BE(s, L + 4))
                    }
                    for (j = 0; j < 80; j++) {
                        var U,
                            M,
                            D = v,
                            k = m,
                            q = w,
                            z = _,
                            H = b,
                            B = E,
                            K = S,
                            V = O,
                            F = P,
                            W = x,
                            G = A,
                            Y = R,
                            J = N,
                            Q = T
                        if (
                            ((p = 65535 & (h = C)),
                            (d = h >>> 16),
                            (g = 65535 & (u = I)),
                            (y = u >>> 16),
                            (p += 65535 & (h = ((R >>> 14) | (b << 18)) ^ ((R >>> 18) | (b << 14)) ^ ((b >>> 9) | (R << 23)))),
                            (d += h >>> 16),
                            (g += 65535 & (u = ((b >>> 14) | (R << 18)) ^ ((b >>> 18) | (R << 14)) ^ ((R >>> 9) | (b << 23)))),
                            (y += u >>> 16),
                            (p += 65535 & (h = (R & N) ^ (~R & T))),
                            (d += h >>> 16),
                            (g += 65535 & (u = (b & E) ^ (~b & S))),
                            (y += u >>> 16),
                            (u = o[2 * j]),
                            (p += 65535 & (h = o[2 * j + 1])),
                            (d += h >>> 16),
                            (g += 65535 & u),
                            (y += u >>> 16),
                            (u = t[j % 16]),
                            (d += (h = e[j % 16]) >>> 16),
                            (g += 65535 & u),
                            (y += u >>> 16),
                            (g += (d += (p += 65535 & h) >>> 16) >>> 16),
                            (p = 65535 & (h = f = (65535 & p) | (d << 16))),
                            (d = h >>> 16),
                            (g = 65535 & (u = l = (65535 & g) | ((y += g >>> 16) << 16))),
                            (y = u >>> 16),
                            (p += 65535 & (h = ((O >>> 28) | (v << 4)) ^ ((v >>> 2) | (O << 30)) ^ ((v >>> 7) | (O << 25)))),
                            (d += h >>> 16),
                            (g += 65535 & (u = ((v >>> 28) | (O << 4)) ^ ((O >>> 2) | (v << 30)) ^ ((O >>> 7) | (v << 25)))),
                            (y += u >>> 16),
                            (d += (h = (O & P) ^ (O & x) ^ (P & x)) >>> 16),
                            (g += 65535 & (u = (v & m) ^ (v & w) ^ (m & w))),
                            (y += u >>> 16),
                            (U = (65535 & (g += (d += (p += 65535 & h) >>> 16) >>> 16)) | ((y += g >>> 16) << 16)),
                            (M = (65535 & p) | (d << 16)),
                            (p = 65535 & (h = G)),
                            (d = h >>> 16),
                            (g = 65535 & (u = z)),
                            (y = u >>> 16),
                            (d += (h = f) >>> 16),
                            (g += 65535 & (u = l)),
                            (y += u >>> 16),
                            (m = D),
                            (w = k),
                            (_ = q),
                            (b = z = (65535 & (g += (d += (p += 65535 & h) >>> 16) >>> 16)) | ((y += g >>> 16) << 16)),
                            (E = H),
                            (S = B),
                            (I = K),
                            (v = U),
                            (P = V),
                            (x = F),
                            (A = W),
                            (R = G = (65535 & p) | (d << 16)),
                            (N = Y),
                            (T = J),
                            (C = Q),
                            (O = M),
                            j % 16 === 15)
                        )
                            for (L = 0; L < 16; L++)
                                (u = t[L]),
                                    (p = 65535 & (h = e[L])),
                                    (d = h >>> 16),
                                    (g = 65535 & u),
                                    (y = u >>> 16),
                                    (u = t[(L + 9) % 16]),
                                    (p += 65535 & (h = e[(L + 9) % 16])),
                                    (d += h >>> 16),
                                    (g += 65535 & u),
                                    (y += u >>> 16),
                                    (l = t[(L + 1) % 16]),
                                    (p +=
                                        65535 &
                                        (h = (((f = e[(L + 1) % 16]) >>> 1) | (l << 31)) ^ ((f >>> 8) | (l << 24)) ^ ((f >>> 7) | (l << 25)))),
                                    (d += h >>> 16),
                                    (g += 65535 & (u = ((l >>> 1) | (f << 31)) ^ ((l >>> 8) | (f << 24)) ^ (l >>> 7))),
                                    (y += u >>> 16),
                                    (l = t[(L + 14) % 16]),
                                    (d +=
                                        (h = (((f = e[(L + 14) % 16]) >>> 19) | (l << 13)) ^ ((l >>> 29) | (f << 3)) ^ ((f >>> 6) | (l << 26))) >>>
                                        16),
                                    (g += 65535 & (u = ((l >>> 19) | (f << 13)) ^ ((f >>> 29) | (l << 3)) ^ (l >>> 6))),
                                    (y += u >>> 16),
                                    (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                                    (t[L] = (65535 & g) | (y << 16)),
                                    (e[L] = (65535 & p) | (d << 16))
                    }
                    ;(p = 65535 & (h = O)),
                        (d = h >>> 16),
                        (g = 65535 & (u = v)),
                        (y = u >>> 16),
                        (u = r[0]),
                        (d += (h = i[0]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[0] = v = (65535 & g) | (y << 16)),
                        (i[0] = O = (65535 & p) | (d << 16)),
                        (p = 65535 & (h = P)),
                        (d = h >>> 16),
                        (g = 65535 & (u = m)),
                        (y = u >>> 16),
                        (u = r[1]),
                        (d += (h = i[1]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[1] = m = (65535 & g) | (y << 16)),
                        (i[1] = P = (65535 & p) | (d << 16)),
                        (p = 65535 & (h = x)),
                        (d = h >>> 16),
                        (g = 65535 & (u = w)),
                        (y = u >>> 16),
                        (u = r[2]),
                        (d += (h = i[2]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[2] = w = (65535 & g) | (y << 16)),
                        (i[2] = x = (65535 & p) | (d << 16)),
                        (p = 65535 & (h = A)),
                        (d = h >>> 16),
                        (g = 65535 & (u = _)),
                        (y = u >>> 16),
                        (u = r[3]),
                        (d += (h = i[3]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[3] = _ = (65535 & g) | (y << 16)),
                        (i[3] = A = (65535 & p) | (d << 16)),
                        (p = 65535 & (h = R)),
                        (d = h >>> 16),
                        (g = 65535 & (u = b)),
                        (y = u >>> 16),
                        (u = r[4]),
                        (d += (h = i[4]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[4] = b = (65535 & g) | (y << 16)),
                        (i[4] = R = (65535 & p) | (d << 16)),
                        (p = 65535 & (h = N)),
                        (d = h >>> 16),
                        (g = 65535 & (u = E)),
                        (y = u >>> 16),
                        (u = r[5]),
                        (d += (h = i[5]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[5] = E = (65535 & g) | (y << 16)),
                        (i[5] = N = (65535 & p) | (d << 16)),
                        (p = 65535 & (h = T)),
                        (d = h >>> 16),
                        (g = 65535 & (u = S)),
                        (y = u >>> 16),
                        (u = r[6]),
                        (d += (h = i[6]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[6] = S = (65535 & g) | (y << 16)),
                        (i[6] = T = (65535 & p) | (d << 16)),
                        (p = 65535 & (h = C)),
                        (d = h >>> 16),
                        (g = 65535 & (u = I)),
                        (y = u >>> 16),
                        (u = r[7]),
                        (d += (h = i[7]) >>> 16),
                        (g += 65535 & u),
                        (y += u >>> 16),
                        (y += (g += (d += (p += 65535 & h) >>> 16) >>> 16) >>> 16),
                        (r[7] = I = (65535 & g) | (y << 16)),
                        (i[7] = C = (65535 & p) | (d << 16)),
                        (a += 128),
                        (c -= 128)
                }
                return a
            }
            e.hash = function (t) {
                var e = new s()
                e.update(t)
                var r = e.digest()
                return e.clean(), r
            }
        },
        3227: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.wipe = function (t) {
                    for (var e = 0; e < t.length; e++) t[e] = 0
                    return t
                })
        },
        3539: (t, e, r) => {
            'use strict'
            e.gi = e.Au = e.KS = e.kz = void 0
            const n = r(4701),
                i = r(3227)
            function s(t) {
                const e = new Float64Array(16)
                if (t) for (let r = 0; r < t.length; r++) e[r] = t[r]
                return e
            }
            ;(e.kz = 32), (e.KS = 32)
            const o = new Uint8Array(32)
            o[0] = 9
            const a = s([56129, 1])
            function c(t) {
                let e = 1
                for (let r = 0; r < 16; r++) {
                    let n = t[r] + e + 65535
                    ;(e = Math.floor(n / 65536)), (t[r] = n - 65536 * e)
                }
                t[0] += e - 1 + 37 * (e - 1)
            }
            function u(t, e, r) {
                const n = ~(r - 1)
                for (let i = 0; i < 16; i++) {
                    const r = n & (t[i] ^ e[i])
                    ;(t[i] ^= r), (e[i] ^= r)
                }
            }
            function h(t, e, r) {
                for (let n = 0; n < 16; n++) t[n] = e[n] + r[n]
            }
            function l(t, e, r) {
                for (let n = 0; n < 16; n++) t[n] = e[n] - r[n]
            }
            function f(t, e, r) {
                let n,
                    i,
                    s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    h = 0,
                    l = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    w = 0,
                    _ = 0,
                    b = 0,
                    E = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    x = 0,
                    A = 0,
                    R = 0,
                    N = 0,
                    T = 0,
                    C = 0,
                    j = 0,
                    L = 0,
                    U = 0,
                    M = r[0],
                    D = r[1],
                    k = r[2],
                    q = r[3],
                    z = r[4],
                    H = r[5],
                    B = r[6],
                    K = r[7],
                    V = r[8],
                    F = r[9],
                    W = r[10],
                    G = r[11],
                    Y = r[12],
                    J = r[13],
                    Q = r[14],
                    $ = r[15]
                ;(n = e[0]),
                    (s += n * M),
                    (o += n * D),
                    (a += n * k),
                    (c += n * q),
                    (u += n * z),
                    (h += n * H),
                    (l += n * B),
                    (f += n * K),
                    (p += n * V),
                    (d += n * F),
                    (g += n * W),
                    (y += n * G),
                    (v += n * Y),
                    (m += n * J),
                    (w += n * Q),
                    (_ += n * $),
                    (n = e[1]),
                    (o += n * M),
                    (a += n * D),
                    (c += n * k),
                    (u += n * q),
                    (h += n * z),
                    (l += n * H),
                    (f += n * B),
                    (p += n * K),
                    (d += n * V),
                    (g += n * F),
                    (y += n * W),
                    (v += n * G),
                    (m += n * Y),
                    (w += n * J),
                    (_ += n * Q),
                    (b += n * $),
                    (n = e[2]),
                    (a += n * M),
                    (c += n * D),
                    (u += n * k),
                    (h += n * q),
                    (l += n * z),
                    (f += n * H),
                    (p += n * B),
                    (d += n * K),
                    (g += n * V),
                    (y += n * F),
                    (v += n * W),
                    (m += n * G),
                    (w += n * Y),
                    (_ += n * J),
                    (b += n * Q),
                    (E += n * $),
                    (n = e[3]),
                    (c += n * M),
                    (u += n * D),
                    (h += n * k),
                    (l += n * q),
                    (f += n * z),
                    (p += n * H),
                    (d += n * B),
                    (g += n * K),
                    (y += n * V),
                    (v += n * F),
                    (m += n * W),
                    (w += n * G),
                    (_ += n * Y),
                    (b += n * J),
                    (E += n * Q),
                    (S += n * $),
                    (n = e[4]),
                    (u += n * M),
                    (h += n * D),
                    (l += n * k),
                    (f += n * q),
                    (p += n * z),
                    (d += n * H),
                    (g += n * B),
                    (y += n * K),
                    (v += n * V),
                    (m += n * F),
                    (w += n * W),
                    (_ += n * G),
                    (b += n * Y),
                    (E += n * J),
                    (S += n * Q),
                    (I += n * $),
                    (n = e[5]),
                    (h += n * M),
                    (l += n * D),
                    (f += n * k),
                    (p += n * q),
                    (d += n * z),
                    (g += n * H),
                    (y += n * B),
                    (v += n * K),
                    (m += n * V),
                    (w += n * F),
                    (_ += n * W),
                    (b += n * G),
                    (E += n * Y),
                    (S += n * J),
                    (I += n * Q),
                    (O += n * $),
                    (n = e[6]),
                    (l += n * M),
                    (f += n * D),
                    (p += n * k),
                    (d += n * q),
                    (g += n * z),
                    (y += n * H),
                    (v += n * B),
                    (m += n * K),
                    (w += n * V),
                    (_ += n * F),
                    (b += n * W),
                    (E += n * G),
                    (S += n * Y),
                    (I += n * J),
                    (O += n * Q),
                    (P += n * $),
                    (n = e[7]),
                    (f += n * M),
                    (p += n * D),
                    (d += n * k),
                    (g += n * q),
                    (y += n * z),
                    (v += n * H),
                    (m += n * B),
                    (w += n * K),
                    (_ += n * V),
                    (b += n * F),
                    (E += n * W),
                    (S += n * G),
                    (I += n * Y),
                    (O += n * J),
                    (P += n * Q),
                    (x += n * $),
                    (n = e[8]),
                    (p += n * M),
                    (d += n * D),
                    (g += n * k),
                    (y += n * q),
                    (v += n * z),
                    (m += n * H),
                    (w += n * B),
                    (_ += n * K),
                    (b += n * V),
                    (E += n * F),
                    (S += n * W),
                    (I += n * G),
                    (O += n * Y),
                    (P += n * J),
                    (x += n * Q),
                    (A += n * $),
                    (n = e[9]),
                    (d += n * M),
                    (g += n * D),
                    (y += n * k),
                    (v += n * q),
                    (m += n * z),
                    (w += n * H),
                    (_ += n * B),
                    (b += n * K),
                    (E += n * V),
                    (S += n * F),
                    (I += n * W),
                    (O += n * G),
                    (P += n * Y),
                    (x += n * J),
                    (A += n * Q),
                    (R += n * $),
                    (n = e[10]),
                    (g += n * M),
                    (y += n * D),
                    (v += n * k),
                    (m += n * q),
                    (w += n * z),
                    (_ += n * H),
                    (b += n * B),
                    (E += n * K),
                    (S += n * V),
                    (I += n * F),
                    (O += n * W),
                    (P += n * G),
                    (x += n * Y),
                    (A += n * J),
                    (R += n * Q),
                    (N += n * $),
                    (n = e[11]),
                    (y += n * M),
                    (v += n * D),
                    (m += n * k),
                    (w += n * q),
                    (_ += n * z),
                    (b += n * H),
                    (E += n * B),
                    (S += n * K),
                    (I += n * V),
                    (O += n * F),
                    (P += n * W),
                    (x += n * G),
                    (A += n * Y),
                    (R += n * J),
                    (N += n * Q),
                    (T += n * $),
                    (n = e[12]),
                    (v += n * M),
                    (m += n * D),
                    (w += n * k),
                    (_ += n * q),
                    (b += n * z),
                    (E += n * H),
                    (S += n * B),
                    (I += n * K),
                    (O += n * V),
                    (P += n * F),
                    (x += n * W),
                    (A += n * G),
                    (R += n * Y),
                    (N += n * J),
                    (T += n * Q),
                    (C += n * $),
                    (n = e[13]),
                    (m += n * M),
                    (w += n * D),
                    (_ += n * k),
                    (b += n * q),
                    (E += n * z),
                    (S += n * H),
                    (I += n * B),
                    (O += n * K),
                    (P += n * V),
                    (x += n * F),
                    (A += n * W),
                    (R += n * G),
                    (N += n * Y),
                    (T += n * J),
                    (C += n * Q),
                    (j += n * $),
                    (n = e[14]),
                    (w += n * M),
                    (_ += n * D),
                    (b += n * k),
                    (E += n * q),
                    (S += n * z),
                    (I += n * H),
                    (O += n * B),
                    (P += n * K),
                    (x += n * V),
                    (A += n * F),
                    (R += n * W),
                    (N += n * G),
                    (T += n * Y),
                    (C += n * J),
                    (j += n * Q),
                    (L += n * $),
                    (n = e[15]),
                    (_ += n * M),
                    (b += n * D),
                    (E += n * k),
                    (S += n * q),
                    (I += n * z),
                    (O += n * H),
                    (P += n * B),
                    (x += n * K),
                    (A += n * V),
                    (R += n * F),
                    (N += n * W),
                    (T += n * G),
                    (C += n * Y),
                    (j += n * J),
                    (L += n * Q),
                    (U += n * $),
                    (s += 38 * b),
                    (o += 38 * E),
                    (a += 38 * S),
                    (c += 38 * I),
                    (u += 38 * O),
                    (h += 38 * P),
                    (l += 38 * x),
                    (f += 38 * A),
                    (p += 38 * R),
                    (d += 38 * N),
                    (g += 38 * T),
                    (y += 38 * C),
                    (v += 38 * j),
                    (m += 38 * L),
                    (w += 38 * U),
                    (i = 1),
                    (n = s + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (s = n - 65536 * i),
                    (n = o + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (o = n - 65536 * i),
                    (n = a + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (a = n - 65536 * i),
                    (n = c + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (c = n - 65536 * i),
                    (n = u + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (u = n - 65536 * i),
                    (n = h + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (h = n - 65536 * i),
                    (n = l + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (l = n - 65536 * i),
                    (n = f + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (f = n - 65536 * i),
                    (n = p + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (p = n - 65536 * i),
                    (n = d + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (d = n - 65536 * i),
                    (n = g + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (g = n - 65536 * i),
                    (n = y + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (y = n - 65536 * i),
                    (n = v + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (v = n - 65536 * i),
                    (n = m + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (m = n - 65536 * i),
                    (n = w + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (w = n - 65536 * i),
                    (n = _ + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (_ = n - 65536 * i),
                    (s += i - 1 + 37 * (i - 1)),
                    (i = 1),
                    (n = s + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (s = n - 65536 * i),
                    (n = o + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (o = n - 65536 * i),
                    (n = a + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (a = n - 65536 * i),
                    (n = c + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (c = n - 65536 * i),
                    (n = u + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (u = n - 65536 * i),
                    (n = h + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (h = n - 65536 * i),
                    (n = l + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (l = n - 65536 * i),
                    (n = f + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (f = n - 65536 * i),
                    (n = p + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (p = n - 65536 * i),
                    (n = d + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (d = n - 65536 * i),
                    (n = g + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (g = n - 65536 * i),
                    (n = y + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (y = n - 65536 * i),
                    (n = v + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (v = n - 65536 * i),
                    (n = m + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (m = n - 65536 * i),
                    (n = w + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (w = n - 65536 * i),
                    (n = _ + i + 65535),
                    (i = Math.floor(n / 65536)),
                    (_ = n - 65536 * i),
                    (s += i - 1 + 37 * (i - 1)),
                    (t[0] = s),
                    (t[1] = o),
                    (t[2] = a),
                    (t[3] = c),
                    (t[4] = u),
                    (t[5] = h),
                    (t[6] = l),
                    (t[7] = f),
                    (t[8] = p),
                    (t[9] = d),
                    (t[10] = g),
                    (t[11] = y),
                    (t[12] = v),
                    (t[13] = m),
                    (t[14] = w),
                    (t[15] = _)
            }
            function p(t, e) {
                f(t, e, e)
            }
            function d(t, e) {
                const r = new Uint8Array(32),
                    n = new Float64Array(80),
                    i = s(),
                    o = s(),
                    d = s(),
                    g = s(),
                    y = s(),
                    v = s()
                for (let s = 0; s < 31; s++) r[s] = t[s]
                ;(r[31] = (127 & t[31]) | 64),
                    (r[0] &= 248),
                    (function (t, e) {
                        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8)
                        t[15] &= 32767
                    })(n, e)
                for (let s = 0; s < 16; s++) o[s] = n[s]
                i[0] = g[0] = 1
                for (let s = 254; s >= 0; --s) {
                    const t = (r[s >>> 3] >>> (7 & s)) & 1
                    u(i, o, t),
                        u(d, g, t),
                        h(y, i, d),
                        l(i, i, d),
                        h(d, o, g),
                        l(o, o, g),
                        p(g, y),
                        p(v, i),
                        f(i, d, i),
                        f(d, o, y),
                        h(y, i, d),
                        l(i, i, d),
                        p(o, i),
                        l(d, g, v),
                        f(i, d, a),
                        h(i, i, g),
                        f(d, d, i),
                        f(i, g, v),
                        f(g, o, n),
                        p(o, y),
                        u(i, o, t),
                        u(d, g, t)
                }
                for (let s = 0; s < 16; s++) (n[s + 16] = i[s]), (n[s + 32] = d[s]), (n[s + 48] = o[s]), (n[s + 64] = g[s])
                const m = n.subarray(32),
                    w = n.subarray(16)
                !(function (t, e) {
                    const r = s()
                    for (let n = 0; n < 16; n++) r[n] = e[n]
                    for (let n = 253; n >= 0; n--) p(r, r), 2 !== n && 4 !== n && f(r, r, e)
                    for (let n = 0; n < 16; n++) t[n] = r[n]
                })(m, m),
                    f(w, w, m)
                const _ = new Uint8Array(32)
                return (
                    (function (t, e) {
                        const r = s(),
                            n = s()
                        for (let i = 0; i < 16; i++) n[i] = e[i]
                        c(n), c(n), c(n)
                        for (let i = 0; i < 2; i++) {
                            r[0] = n[0] - 65517
                            for (let e = 1; e < 15; e++) (r[e] = n[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535)
                            r[15] = n[15] - 32767 - ((r[14] >> 16) & 1)
                            const t = (r[15] >> 16) & 1
                            ;(r[14] &= 65535), u(n, r, 1 - t)
                        }
                        for (let i = 0; i < 16; i++) (t[2 * i] = 255 & n[i]), (t[2 * i + 1] = n[i] >> 8)
                    })(_, w),
                    _
                )
            }
            function g(t) {
                return d(t, o)
            }
            function y(t) {
                if (t.length !== e.KS) throw new Error('x25519: seed must be '.concat(e.KS, ' bytes'))
                const r = new Uint8Array(t)
                return { publicKey: g(r), secretKey: r }
            }
            ;(e.Au = function (t) {
                const e = (0, n.randomBytes)(32, t),
                    r = y(e)
                return (0, i.wipe)(e), r
            }),
                (e.gi = function (t, r) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                    if (t.length !== e.kz) throw new Error('X25519: incorrect secret key length')
                    if (r.length !== e.kz) throw new Error('X25519: incorrect public key length')
                    const i = d(t, r)
                    if (n) {
                        let t = 0
                        for (let e = 0; e < i.length; e++) t |= i[e]
                        if (0 === t) throw new Error('X25519: invalid shared key')
                    }
                    return i
                })
        },
        2760: (t, e, r) => {
            'use strict'
            function n() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }
            function i() {
                const t = n()
                return t.subtle || t.webkitSubtle
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0),
                (e.getBrowerCrypto = n),
                (e.getSubtleCrypto = i),
                (e.isBrowserCryptoAvailable = function () {
                    return !!n() && !!i()
                })
        },
        4300: (t, e) => {
            'use strict'
            function r() {
                return 'undefined' === typeof document && 'undefined' !== typeof navigator && 'ReactNative' === navigator.product
            }
            function n() {
                return 'undefined' !== typeof process && 'undefined' !== typeof process.versions && 'undefined' !== typeof process.versions.node
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.isBrowser = e.isNode = e.isReactNative = void 0),
                (e.isReactNative = r),
                (e.isNode = n),
                (e.isBrowser = function () {
                    return !r() && !n()
                })
        },
        5503: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            const n = r(900)
            n.__exportStar(r(2760), e), n.__exportStar(r(4300), e)
        },
        900: (t, e, r) => {
            'use strict'
            r.r(e),
                r.d(e, {
                    __assign: () => s,
                    __asyncDelegator: () => _,
                    __asyncGenerator: () => w,
                    __asyncValues: () => b,
                    __await: () => m,
                    __awaiter: () => h,
                    __classPrivateFieldGet: () => O,
                    __classPrivateFieldSet: () => P,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => i,
                    __generator: () => l,
                    __importDefault: () => I,
                    __importStar: () => S,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => o,
                    __spread: () => y,
                    __spreadArrays: () => v,
                    __values: () => d
                })
            var n = function (t, e) {
                return (
                    (n =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e
                            }) ||
                        function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        }),
                    n(t, e)
                )
            }
            function i(t, e) {
                function r() {
                    this.constructor = t
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()))
            }
            var s = function () {
                return (
                    (s =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                            return t
                        }),
                    s.apply(this, arguments)
                )
            }
            function o(t, e) {
                var r = {}
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n])
                if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
                    var i = 0
                    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                        e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                }
                return r
            }
            function a(t, e, r, n) {
                var i,
                    s = arguments.length,
                    o = s < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n
                if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n)
                else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o)
                return s > 3 && o && Object.defineProperty(e, r, o), o
            }
            function c(t, e) {
                return function (r, n) {
                    e(r, n, t)
                }
            }
            function u(t, e) {
                if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }
            function h(t, e, r, n) {
                return new (r || (r = Promise))(function (i, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(t) {
                        var e
                        t.done
                            ? i(t.value)
                            : ((e = t.value),
                              e instanceof r
                                  ? e
                                  : new r(function (t) {
                                        t(e)
                                    })).then(o, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            }
            function l(t, e) {
                var r,
                    n,
                    i,
                    s,
                    o = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0]) throw i[1]
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    }
                return (
                    (s = { next: a(0), throw: a(1), return: a(2) }),
                    'function' === typeof Symbol &&
                        (s[Symbol.iterator] = function () {
                            return this
                        }),
                    s
                )
                function a(s) {
                    return function (a) {
                        return (function (s) {
                            if (r) throw new TypeError('Generator is already executing.')
                            for (; o; )
                                try {
                                    if (
                                        ((r = 1),
                                        n &&
                                            (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                                            !(i = i.call(n, s[1])).done)
                                    )
                                        return i
                                    switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                                        case 0:
                                        case 1:
                                            i = s
                                            break
                                        case 4:
                                            return o.label++, { value: s[1], done: !1 }
                                        case 5:
                                            o.label++, (n = s[1]), (s = [0])
                                            continue
                                        case 7:
                                            ;(s = o.ops.pop()), o.trys.pop()
                                            continue
                                        default:
                                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                o = 0
                                                continue
                                            }
                                            if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                                o.label = s[1]
                                                break
                                            }
                                            if (6 === s[0] && o.label < i[1]) {
                                                ;(o.label = i[1]), (i = s)
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                ;(o.label = i[2]), o.ops.push(s)
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop()
                                            continue
                                    }
                                    s = e.call(t, o)
                                } catch (a) {
                                    ;(s = [6, a]), (n = 0)
                                } finally {
                                    r = i = 0
                                }
                            if (5 & s[0]) throw s[1]
                            return { value: s[0] ? s[1] : void 0, done: !0 }
                        })([s, a])
                    }
                }
            }
            function f(t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r])
            }
            function p(t, e) {
                for (var r in t) 'default' === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }
            function d(t) {
                var e = 'function' === typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0
                if (r) return r.call(t)
                if (t && 'number' === typeof t.length)
                    return {
                        next: function () {
                            return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
                        }
                    }
                throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
            }
            function g(t, e) {
                var r = 'function' === typeof Symbol && t[Symbol.iterator]
                if (!r) return t
                var n,
                    i,
                    s = r.call(t),
                    o = []
                try {
                    for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value)
                } catch (a) {
                    i = { error: a }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }
            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]))
                return t
            }
            function v() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length
                var n = Array(t),
                    i = 0
                for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o]
                return n
            }
            function m(t) {
                return this instanceof m ? ((this.v = t), this) : new m(t)
            }
            function w(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var n,
                    i = r.apply(t, e || []),
                    s = []
                return (
                    (n = {}),
                    o('next'),
                    o('throw'),
                    o('return'),
                    (n[Symbol.asyncIterator] = function () {
                        return this
                    }),
                    n
                )
                function o(t) {
                    i[t] &&
                        (n[t] = function (e) {
                            return new Promise(function (r, n) {
                                s.push([t, e, r, n]) > 1 || a(t, e)
                            })
                        })
                }
                function a(t, e) {
                    try {
                        ;(r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (n) {
                        h(s[0][3], n)
                    }
                    var r
                }
                function c(t) {
                    a('next', t)
                }
                function u(t) {
                    a('throw', t)
                }
                function h(t, e) {
                    t(e), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }
            function _(t) {
                var e, r
                return (
                    (e = {}),
                    n('next'),
                    n('throw', function (t) {
                        throw t
                    }),
                    n('return'),
                    (e[Symbol.iterator] = function () {
                        return this
                    }),
                    e
                )
                function n(n, i) {
                    e[n] = t[n]
                        ? function (e) {
                              return (r = !r) ? { value: m(t[n](e)), done: 'return' === n } : i ? i(e) : e
                          }
                        : i
                }
            }
            function b(t) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var e,
                    r = t[Symbol.asyncIterator]
                return r
                    ? r.call(t)
                    : ((t = d(t)),
                      (e = {}),
                      n('next'),
                      n('throw'),
                      n('return'),
                      (e[Symbol.asyncIterator] = function () {
                          return this
                      }),
                      e)
                function n(r) {
                    e[r] =
                        t[r] &&
                        function (e) {
                            return new Promise(function (n, i) {
                                ;(function (t, e, r, n) {
                                    Promise.resolve(n).then(function (e) {
                                        t({ value: e, done: r })
                                    }, e)
                                })(n, i, (e = t[r](e)).done, e.value)
                            })
                        }
                }
            }
            function E(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e), t
            }
            function S(t) {
                if (t && t.__esModule) return t
                var e = {}
                if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return (e.default = t), e
            }
            function I(t) {
                return t && t.__esModule ? t : { default: t }
            }
            function O(t, e) {
                if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                return e.get(t)
            }
            function P(t, e, r) {
                if (!e.has(t)) throw new TypeError('attempted to set private field on non-instance')
                return e.set(t, r), r
            }
        },
        4402: (t, e, r) => {
            'use strict'
            r.d(e, { EthereumProvider: () => Mu })
            var n = {}
            r.r(n), r.d(n, { identity: () => k })
            var i = {}
            r.r(i), r.d(i, { base2: () => q })
            var s = {}
            r.r(s), r.d(s, { base8: () => z })
            var o = {}
            r.r(o), r.d(o, { base10: () => H })
            var a = {}
            r.r(a), r.d(a, { base16: () => B, base16upper: () => K })
            var c = {}
            r.r(c),
                r.d(c, {
                    base32: () => V,
                    base32hex: () => Y,
                    base32hexpad: () => Q,
                    base32hexpadupper: () => $,
                    base32hexupper: () => J,
                    base32pad: () => W,
                    base32padupper: () => G,
                    base32upper: () => F,
                    base32z: () => X
                })
            var u = {}
            r.r(u), r.d(u, { base36: () => Z, base36upper: () => tt })
            var h = {}
            r.r(h), r.d(h, { base58btc: () => et, base58flickr: () => rt })
            var l = {}
            r.r(l), r.d(l, { base64: () => nt, base64pad: () => it, base64url: () => st, base64urlpad: () => ot })
            var f = {}
            r.r(f), r.d(f, { base256emoji: () => ht })
            var p = {}
            r.r(p), r.d(p, { sha256: () => Ut, sha512: () => Mt })
            var d = {}
            r.r(d), r.d(d, { identity: () => kt })
            var g = {}
            r.r(g), r.d(g, { code: () => zt, decode: () => Bt, encode: () => Ht, name: () => qt })
            var y = {}
            r.r(y), r.d(y, { code: () => Wt, decode: () => Yt, encode: () => Gt, name: () => Ft })
            var v = r(8041),
                m = r.n(v),
                w = r(4533),
                _ = r(1791),
                b = r(4701),
                E = r(9900),
                S = r(3539)
            function I(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }
            function O() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? I(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
            }
            function P(t, e) {
                e || (e = t.reduce((t, e) => t + e.length, 0))
                const r = O(e)
                let n = 0
                for (const i of t) r.set(i, n), (n += i.length)
                return I(r)
            }
            var x = function (t, e) {
                if (t.length >= 255) throw new TypeError('Alphabet too long')
                for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255
                for (var i = 0; i < t.length; i++) {
                    var s = t.charAt(i),
                        o = s.charCodeAt(0)
                    if (255 !== r[o]) throw new TypeError(s + ' is ambiguous')
                    r[o] = i
                }
                var a = t.length,
                    c = t.charAt(0),
                    u = Math.log(a) / Math.log(256),
                    h = Math.log(256) / Math.log(a)
                function l(t) {
                    if ('string' !== typeof t) throw new TypeError('Expected String')
                    if (0 === t.length) return new Uint8Array()
                    var e = 0
                    if (' ' !== t[e]) {
                        for (var n = 0, i = 0; t[e] === c; ) n++, e++
                        for (var s = ((t.length - e) * u + 1) >>> 0, o = new Uint8Array(s); t[e]; ) {
                            var h = r[t.charCodeAt(e)]
                            if (255 === h) return
                            for (var l = 0, f = s - 1; (0 !== h || l < i) && -1 !== f; f--, l++)
                                (h += (a * o[f]) >>> 0), (o[f] = h % 256 >>> 0), (h = (h / 256) >>> 0)
                            if (0 !== h) throw new Error('Non-zero carry')
                            ;(i = l), e++
                        }
                        if (' ' !== t[e]) {
                            for (var p = s - i; p !== s && 0 === o[p]; ) p++
                            for (var d = new Uint8Array(n + (s - p)), g = n; p !== s; ) d[g++] = o[p++]
                            return d
                        }
                    }
                }
                return {
                    encode: function (e) {
                        if (
                            (e instanceof Uint8Array ||
                                (ArrayBuffer.isView(e)
                                    ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                                    : Array.isArray(e) && (e = Uint8Array.from(e))),
                            !(e instanceof Uint8Array))
                        )
                            throw new TypeError('Expected Uint8Array')
                        if (0 === e.length) return ''
                        for (var r = 0, n = 0, i = 0, s = e.length; i !== s && 0 === e[i]; ) i++, r++
                        for (var o = ((s - i) * h + 1) >>> 0, u = new Uint8Array(o); i !== s; ) {
                            for (var l = e[i], f = 0, p = o - 1; (0 !== l || f < n) && -1 !== p; p--, f++)
                                (l += (256 * u[p]) >>> 0), (u[p] = l % a >>> 0), (l = (l / a) >>> 0)
                            if (0 !== l) throw new Error('Non-zero carry')
                            ;(n = f), i++
                        }
                        for (var d = o - n; d !== o && 0 === u[d]; ) d++
                        for (var g = c.repeat(r); d < o; ++d) g += t.charAt(u[d])
                        return g
                    },
                    decodeUnsafe: l,
                    decode: function (t) {
                        var r = l(t)
                        if (r) return r
                        throw new Error('Non-'.concat(e, ' character'))
                    }
                }
            }
            const A = x,
                R =
                    (new Uint8Array(0),
                    (t) => {
                        if (t instanceof Uint8Array && 'Uint8Array' === t.constructor.name) return t
                        if (t instanceof ArrayBuffer) return new Uint8Array(t)
                        if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                        throw new Error('Unknown type, must be binary type')
                    })
            class N {
                constructor(t, e, r) {
                    ;(this.name = t), (this.prefix = e), (this.baseEncode = r)
                }
                encode(t) {
                    if (t instanceof Uint8Array) return ''.concat(this.prefix).concat(this.baseEncode(t))
                    throw Error('Unknown type, must be binary type')
                }
            }
            class T {
                constructor(t, e, r) {
                    if (((this.name = t), (this.prefix = e), void 0 === e.codePointAt(0))) throw new Error('Invalid prefix character')
                    ;(this.prefixCodePoint = e.codePointAt(0)), (this.baseDecode = r)
                }
                decode(t) {
                    if ('string' === typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint)
                            throw Error(
                                'Unable to decode multibase string '
                                    .concat(JSON.stringify(t), ', ')
                                    .concat(this.name, ' decoder only supports inputs prefixed with ')
                                    .concat(this.prefix)
                            )
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error('Can only multibase decode strings')
                }
                or(t) {
                    return j(this, t)
                }
            }
            class C {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return j(this, t)
                }
                decode(t) {
                    const e = t[0],
                        r = this.decoders[e]
                    if (r) return r.decode(t)
                    throw RangeError(
                        'Unable to decode multibase string '
                            .concat(JSON.stringify(t), ', only inputs prefixed with ')
                            .concat(Object.keys(this.decoders), ' are supported')
                    )
                }
            }
            const j = (t, e) => new C({ ...(t.decoders || { [t.prefix]: t }), ...(e.decoders || { [e.prefix]: e }) })
            class L {
                constructor(t, e, r, n) {
                    ;(this.name = t),
                        (this.prefix = e),
                        (this.baseEncode = r),
                        (this.baseDecode = n),
                        (this.encoder = new N(t, e, r)),
                        (this.decoder = new T(t, e, n))
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const U = (t) => {
                    let { name: e, prefix: r, encode: n, decode: i } = t
                    return new L(e, r, n, i)
                },
                M = (t) => {
                    let { prefix: e, name: r, alphabet: n } = t
                    const { encode: i, decode: s } = A(n, r)
                    return U({ prefix: e, name: r, encode: i, decode: (t) => R(s(t)) })
                },
                D = (t) => {
                    let { name: e, prefix: r, bitsPerChar: n, alphabet: i } = t
                    return U({
                        prefix: r,
                        name: e,
                        encode: (t) =>
                            ((t, e, r) => {
                                const n = '=' === e[e.length - 1],
                                    i = (1 << r) - 1
                                let s = '',
                                    o = 0,
                                    a = 0
                                for (let c = 0; c < t.length; ++c) for (a = (a << 8) | t[c], o += 8; o > r; ) (o -= r), (s += e[i & (a >> o)])
                                if ((o && (s += e[i & (a << (r - o))]), n)) for (; (s.length * r) & 7; ) s += '='
                                return s
                            })(t, i, n),
                        decode: (t) =>
                            ((t, e, r, n) => {
                                const i = {}
                                for (let h = 0; h < e.length; ++h) i[e[h]] = h
                                let s = t.length
                                for (; '=' === t[s - 1]; ) --s
                                const o = new Uint8Array(((s * r) / 8) | 0)
                                let a = 0,
                                    c = 0,
                                    u = 0
                                for (let h = 0; h < s; ++h) {
                                    const e = i[t[h]]
                                    if (void 0 === e) throw new SyntaxError('Non-'.concat(n, ' character'))
                                    ;(c = (c << r) | e), (a += r), a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)))
                                }
                                if (a >= r || 255 & (c << (8 - a))) throw new SyntaxError('Unexpected end of data')
                                return o
                            })(t, i, n, e)
                    })
                },
                k = U({
                    prefix: '\0',
                    name: 'identity',
                    encode: (t) => ((t) => new TextDecoder().decode(t))(t),
                    decode: (t) => ((t) => new TextEncoder().encode(t))(t)
                }),
                q = D({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 }),
                z = D({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 }),
                H = M({ prefix: '9', name: 'base10', alphabet: '0123456789' }),
                B = D({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
                K = D({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 }),
                V = D({ prefix: 'b', name: 'base32', alphabet: 'abcdefghijklmnopqrstuvwxyz234567', bitsPerChar: 5 }),
                F = D({ prefix: 'B', name: 'base32upper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', bitsPerChar: 5 }),
                W = D({ prefix: 'c', name: 'base32pad', alphabet: 'abcdefghijklmnopqrstuvwxyz234567=', bitsPerChar: 5 }),
                G = D({ prefix: 'C', name: 'base32padupper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=', bitsPerChar: 5 }),
                Y = D({ prefix: 'v', name: 'base32hex', alphabet: '0123456789abcdefghijklmnopqrstuv', bitsPerChar: 5 }),
                J = D({ prefix: 'V', name: 'base32hexupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV', bitsPerChar: 5 }),
                Q = D({ prefix: 't', name: 'base32hexpad', alphabet: '0123456789abcdefghijklmnopqrstuv=', bitsPerChar: 5 }),
                $ = D({ prefix: 'T', name: 'base32hexpadupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=', bitsPerChar: 5 }),
                X = D({ prefix: 'h', name: 'base32z', alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769', bitsPerChar: 5 }),
                Z = M({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
                tt = M({ prefix: 'K', name: 'base36upper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' }),
                et = M({ name: 'base58btc', prefix: 'z', alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz' }),
                rt = M({ name: 'base58flickr', prefix: 'Z', alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ' }),
                nt = D({ prefix: 'm', name: 'base64', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', bitsPerChar: 6 }),
                it = D({
                    prefix: 'M',
                    name: 'base64pad',
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    bitsPerChar: 6
                }),
                st = D({
                    prefix: 'u',
                    name: 'base64url',
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
                    bitsPerChar: 6
                }),
                ot = D({
                    prefix: 'U',
                    name: 'base64urlpad',
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
                    bitsPerChar: 6
                }),
                at = Array.from(
                    '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
                ),
                ct = at.reduce((t, e, r) => ((t[r] = e), t), []),
                ut = at.reduce((t, e, r) => ((t[e.codePointAt(0)] = r), t), [])
            const ht = U({
                prefix: '\ud83d\ude80',
                name: 'base256emoji',
                encode: function (t) {
                    return t.reduce((t, e) => (t += ct[e]), '')
                },
                decode: function (t) {
                    const e = []
                    for (const r of t) {
                        const t = ut[r.codePointAt(0)]
                        if (void 0 === t) throw new Error('Non-base256emoji character: '.concat(r))
                        e.push(t)
                    }
                    return new Uint8Array(e)
                }
            })
            var lt = function t(e, r, n) {
                    r = r || []
                    var i = (n = n || 0)
                    for (; e >= dt; ) (r[n++] = (255 & e) | ft), (e /= 128)
                    for (; e & pt; ) (r[n++] = (255 & e) | ft), (e >>>= 7)
                    return (r[n] = 0 | e), (t.bytes = n - i + 1), r
                },
                ft = 128,
                pt = -128,
                dt = Math.pow(2, 31)
            var gt = function t(e, r) {
                    var n,
                        i = 0,
                        s = 0,
                        o = (r = r || 0),
                        a = e.length
                    do {
                        if (o >= a) throw ((t.bytes = 0), new RangeError('Could not decode varint'))
                        ;(n = e[o++]), (i += s < 28 ? (n & vt) << s : (n & vt) * Math.pow(2, s)), (s += 7)
                    } while (n >= yt)
                    return (t.bytes = o - r), i
                },
                yt = 128,
                vt = 127
            var mt = Math.pow(2, 7),
                wt = Math.pow(2, 14),
                _t = Math.pow(2, 21),
                bt = Math.pow(2, 28),
                Et = Math.pow(2, 35),
                St = Math.pow(2, 42),
                It = Math.pow(2, 49),
                Ot = Math.pow(2, 56),
                Pt = Math.pow(2, 63)
            const xt = {
                    encode: lt,
                    decode: gt,
                    encodingLength: function (t) {
                        return t < mt ? 1 : t < wt ? 2 : t < _t ? 3 : t < bt ? 4 : t < Et ? 5 : t < St ? 6 : t < It ? 7 : t < Ot ? 8 : t < Pt ? 9 : 10
                    }
                },
                At = function (t, e) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                    return xt.encode(t, e, r), e
                },
                Rt = (t) => xt.encodingLength(t),
                Nt = (t, e) => {
                    const r = e.byteLength,
                        n = Rt(t),
                        i = n + Rt(r),
                        s = new Uint8Array(i + r)
                    return At(t, s, 0), At(r, s, n), s.set(e, i), new Tt(t, r, e, s)
                }
            class Tt {
                constructor(t, e, r, n) {
                    ;(this.code = t), (this.size = e), (this.digest = r), (this.bytes = n)
                }
            }
            const Ct = (t) => {
                let { name: e, code: r, encode: n } = t
                return new jt(e, r, n)
            }
            class jt {
                constructor(t, e, r) {
                    ;(this.name = t), (this.code = e), (this.encode = r)
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const e = this.encode(t)
                        return e instanceof Uint8Array ? Nt(this.code, e) : e.then((t) => Nt(this.code, t))
                    }
                    throw Error('Unknown type, must be binary type')
                }
            }
            const Lt = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)),
                Ut = Ct({ name: 'sha2-256', code: 18, encode: Lt('SHA-256') }),
                Mt = Ct({ name: 'sha2-512', code: 19, encode: Lt('SHA-512') }),
                Dt = R,
                kt = { code: 0, name: 'identity', encode: Dt, digest: (t) => Nt(0, Dt(t)) },
                qt = 'raw',
                zt = 85,
                Ht = (t) => R(t),
                Bt = (t) => R(t),
                Kt = new TextEncoder(),
                Vt = new TextDecoder(),
                Ft = 'json',
                Wt = 512,
                Gt = (t) => Kt.encode(JSON.stringify(t)),
                Yt = (t) => JSON.parse(Vt.decode(t))
            Symbol.toStringTag, Symbol.for('nodejs.util.inspect.custom')
            Symbol.for('@ipld/js-cid/CID')
            const Jt = { ...n, ...i, ...s, ...o, ...a, ...c, ...u, ...h, ...l, ...f }
            function Qt(t, e, r, n) {
                return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } }
            }
            const $t = Qt(
                    'utf8',
                    'u',
                    (t) => 'u' + new TextDecoder('utf8').decode(t),
                    (t) => new TextEncoder().encode(t.substring(1))
                ),
                Xt = Qt(
                    'ascii',
                    'a',
                    (t) => {
                        let e = 'a'
                        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
                        return e
                    },
                    (t) => {
                        const e = O((t = t.substring(1)).length)
                        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r)
                        return e
                    }
                ),
                Zt = { utf8: $t, 'utf-8': $t, hex: Jt.base16, latin1: Xt, ascii: Xt, binary: Xt, ...Jt }
            function te(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'utf8'
                const r = Zt[e]
                if (!r) throw new Error('Unsupported encoding "'.concat(e, '"'))
                return ('utf8' !== e && 'utf-8' !== e) || null == globalThis.Buffer || null == globalThis.Buffer.from
                    ? r.decoder.decode(''.concat(r.prefix).concat(t))
                    : I(globalThis.Buffer.from(t, 'utf-8'))
            }
            function ee(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'utf8'
                const r = Zt[e]
                if (!r) throw new Error('Unsupported encoding "'.concat(e, '"'))
                return ('utf8' !== e && 'utf-8' !== e) || null == globalThis.Buffer || null == globalThis.Buffer.from
                    ? r.encoder.encode(t).substring(1)
                    : globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString('utf8')
            }
            var re = function (t, e, r) {
                    if (r || 2 === arguments.length)
                        for (var n, i = 0, s = e.length; i < s; i++) (!n && i in e) || (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]))
                    return t.concat(n || Array.prototype.slice.call(e))
                },
                ne = function (t, e, r) {
                    ;(this.name = t), (this.version = e), (this.os = r), (this.type = 'browser')
                },
                ie = function (t) {
                    ;(this.version = t), (this.type = 'node'), (this.name = 'node'), (this.os = process.platform)
                },
                se = function (t, e, r, n) {
                    ;(this.name = t), (this.version = e), (this.os = r), (this.bot = n), (this.type = 'bot-device')
                },
                oe = function () {
                    ;(this.type = 'bot'), (this.bot = !0), (this.name = 'bot'), (this.version = null), (this.os = null)
                },
                ae = function () {
                    ;(this.type = 'react-native'), (this.name = 'react-native'), (this.version = null), (this.os = null)
                },
                ce = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                ue = 3,
                he = [
                    ['aol', /AOLShield\/([0-9\._]+)/],
                    ['edge', /Edge\/([0-9\._]+)/],
                    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
                    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
                    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
                    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
                    ['silk', /\bSilk\/([0-9._-]+)\b/],
                    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
                    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
                    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
                    ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ['fxios', /FxiOS\/([0-9\.]+)/],
                    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
                    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
                    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
                    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ['ie', /MSIE\s(7\.0)/],
                    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ['android', /Android\s([0-9\.]+)/],
                    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ['safari', /Version\/([0-9\._]+).*Safari/],
                    ['facebook', /FB[AS]V\/([0-9\.]+)/],
                    ['instagram', /Instagram\s([0-9\.]+)/],
                    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ['curl', /^curl\/([0-9\.]+)$/],
                    [
                        'searchbot',
                        /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
                    ]
                ],
                le = [
                    ['iOS', /iP(hone|od|ad)/],
                    ['Android OS', /Android/],
                    ['BlackBerry OS', /BlackBerry|BB10/],
                    ['Windows Mobile', /IEMobile/],
                    ['Amazon OS', /Kindle/],
                    ['Windows 3.11', /Win16/],
                    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
                    ['Windows 98', /(Windows 98)|(Win98)/],
                    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
                    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
                    ['Windows Server 2003', /(Windows NT 5.2)/],
                    ['Windows Vista', /(Windows NT 6.0)/],
                    ['Windows 7', /(Windows NT 6.1)/],
                    ['Windows 8', /(Windows NT 6.2)/],
                    ['Windows 8.1', /(Windows NT 6.3)/],
                    ['Windows 10', /(Windows NT 10.0)/],
                    ['Windows ME', /Windows ME/],
                    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ['Open BSD', /OpenBSD/],
                    ['Sun OS', /SunOS/],
                    ['Chrome OS', /CrOS/],
                    ['Linux', /(Linux)|(X11)/],
                    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
                    ['QNX', /QNX/],
                    ['BeOS', /BeOS/],
                    ['OS/2', /OS\/2/]
                ]
            function fe(t) {
                return t
                    ? de(t)
                    : 'undefined' === typeof document && 'undefined' !== typeof navigator && 'ReactNative' === navigator.product
                      ? new ae()
                      : 'undefined' !== typeof navigator
                        ? de(navigator.userAgent)
                        : 'undefined' !== typeof process && process.version
                          ? new ie(process.version.slice(1))
                          : null
            }
            function pe(t) {
                return (
                    '' !== t &&
                    he.reduce(function (e, r) {
                        var n = r[0],
                            i = r[1]
                        if (e) return e
                        var s = i.exec(t)
                        return !!s && [n, s]
                    }, !1)
                )
            }
            function de(t) {
                var e = pe(t)
                if (!e) return null
                var r = e[0],
                    n = e[1]
                if ('searchbot' === r) return new oe()
                var i = n[1] && n[1].split('.').join('_').split('_').slice(0, 3)
                i
                    ? i.length < ue &&
                      (i = re(
                          re([], i, !0),
                          (function (t) {
                              for (var e = [], r = 0; r < t; r++) e.push('0')
                              return e
                          })(ue - i.length),
                          !0
                      ))
                    : (i = [])
                var s = i.join('.'),
                    o = (function (t) {
                        for (var e = 0, r = le.length; e < r; e++) {
                            var n = le[e],
                                i = n[0]
                            if (n[1].exec(t)) return i
                        }
                        return null
                    })(t),
                    a = ce.exec(t)
                return a && a[1] ? new se(r, s, o, a[1]) : new ne(r, s, o)
            }
            var ge = r(3659),
                ye = r(8783),
                ve = r(5210),
                me = r(1172)
            r(7370)
            const we = {
                    waku: {
                        publish: 'waku_publish',
                        batchPublish: 'waku_batchPublish',
                        subscribe: 'waku_subscribe',
                        batchSubscribe: 'waku_batchSubscribe',
                        subscription: 'waku_subscription',
                        unsubscribe: 'waku_unsubscribe',
                        batchUnsubscribe: 'waku_batchUnsubscribe'
                    },
                    irn: {
                        publish: 'irn_publish',
                        batchPublish: 'irn_batchPublish',
                        subscribe: 'irn_subscribe',
                        batchSubscribe: 'irn_batchSubscribe',
                        subscription: 'irn_subscription',
                        unsubscribe: 'irn_unsubscribe',
                        batchUnsubscribe: 'irn_batchUnsubscribe'
                    },
                    iridium: {
                        publish: 'iridium_publish',
                        batchPublish: 'iridium_batchPublish',
                        subscribe: 'iridium_subscribe',
                        batchSubscribe: 'iridium_batchSubscribe',
                        subscription: 'iridium_subscription',
                        unsubscribe: 'iridium_unsubscribe',
                        batchUnsubscribe: 'iridium_batchUnsubscribe'
                    }
                },
                _e = ':'
            function be(t) {
                const [e, r] = t.split(_e)
                return { namespace: e, reference: r }
            }
            function Ee(t, e) {
                return t.includes(':') ? [t] : e.chains || []
            }
            const Se = 'base10',
                Ie = 'base16',
                Oe = 'base64pad',
                Pe = 'utf8',
                xe = 0,
                Ae = 1,
                Re = 0,
                Ne = 1,
                Te = 12,
                Ce = 32
            function je() {
                return ee((0, b.randomBytes)(Ce), Ie)
            }
            function Le(t) {
                return ee((0, E.vp)(te(t, Pe)), Ie)
            }
            function Ue(t) {
                return Number(ee(t, Se))
            }
            function Me(t) {
                const e = (function (t) {
                    return te(''.concat(t), Se)
                })(typeof t.type < 'u' ? t.type : xe)
                if (Ue(e) === Ae && typeof t.senderPublicKey > 'u') throw new Error('Missing sender public key for type 1 envelope')
                const r = typeof t.senderPublicKey < 'u' ? te(t.senderPublicKey, Ie) : void 0,
                    n = typeof t.iv < 'u' ? te(t.iv, Ie) : (0, b.randomBytes)(Te)
                return (function (t) {
                    if (Ue(t.type) === Ae) {
                        if (typeof t.senderPublicKey > 'u') throw new Error('Missing sender public key for type 1 envelope')
                        return ee(P([t.type, t.senderPublicKey, t.iv, t.sealed]), Oe)
                    }
                    return ee(P([t.type, t.iv, t.sealed]), Oe)
                })({ type: e, sealed: new w.OK(te(t.symKey, Ie)).seal(n, te(t.message, Pe)), iv: n, senderPublicKey: r })
            }
            function De(t) {
                const e = te(t, Oe),
                    r = e.slice(Re, Ne),
                    n = Ne
                if (Ue(r) === Ae) {
                    const t = n + Ce,
                        i = t + Te,
                        s = e.slice(n, t),
                        o = e.slice(t, i)
                    return { type: r, sealed: e.slice(i), iv: o, senderPublicKey: s }
                }
                const i = n + Te,
                    s = e.slice(n, i)
                return { type: r, sealed: e.slice(i), iv: s }
            }
            function ke(t) {
                const e = (null === t || void 0 === t ? void 0 : t.type) || xe
                if (e === Ae) {
                    if (typeof (null === t || void 0 === t ? void 0 : t.senderPublicKey) > 'u') throw new Error('missing sender public key')
                    if (typeof (null === t || void 0 === t ? void 0 : t.receiverPublicKey) > 'u') throw new Error('missing receiver public key')
                }
                return {
                    type: e,
                    senderPublicKey: null === t || void 0 === t ? void 0 : t.senderPublicKey,
                    receiverPublicKey: null === t || void 0 === t ? void 0 : t.receiverPublicKey
                }
            }
            function qe(t) {
                return t.type === Ae && 'string' == typeof t.senderPublicKey && 'string' == typeof t.receiverPublicKey
            }
            var ze = Object.defineProperty,
                He = Object.getOwnPropertySymbols,
                Be = Object.prototype.hasOwnProperty,
                Ke = Object.prototype.propertyIsEnumerable,
                Ve = (t, e, r) => (e in t ? ze(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                Fe = (t, e) => {
                    for (var r in e || (e = {})) Be.call(e, r) && Ve(t, r, e[r])
                    if (He) for (var r of He(e)) Ke.call(e, r) && Ve(t, r, e[r])
                    return t
                }
            const We = 'ReactNative',
                Ge = { reactNative: 'react-native', node: 'node', browser: 'browser', unknown: 'unknown' },
                Ye = 'js'
            function Je() {
                return typeof process < 'u' && typeof process.versions < 'u' && typeof process.versions.node < 'u'
            }
            function Qe() {
                return !(0, ye.getDocument)() && !!(0, ye.getNavigator)() && navigator.product === We
            }
            function $e() {
                return !Je() && !!(0, ye.getNavigator)() && !!(0, ye.getDocument)()
            }
            function Xe() {
                return Qe() ? Ge.reactNative : Je() ? Ge.node : $e() ? Ge.browser : Ge.unknown
            }
            function Ze(t, e, n) {
                const i = (function () {
                        if (Xe() === Ge.reactNative && typeof r.g < 'u' && typeof (null == r.g ? void 0 : r.g.Platform) < 'u') {
                            const { OS: t, Version: e } = r.g.Platform
                            return [t, e].join('-')
                        }
                        const t = fe()
                        if (null === t) return 'unknown'
                        const e = t.os ? t.os.replace(' ', '').toLowerCase() : 'unknown'
                        return 'browser' === t.type ? [e, t.name, t.version].join('-') : [e, t.version].join('-')
                    })(),
                    s = (function () {
                        var t
                        const e = Xe()
                        return e === Ge.browser ? [e, (null == (t = (0, ye.getLocation)()) ? void 0 : t.host) || 'unknown'].join(':') : e
                    })()
                return [[t, e].join('-'), [Ye, n].join('-'), i, s].join('/')
            }
            function tr(t) {
                let { protocol: e, version: r, relayUrl: n, sdkVersion: i, auth: s, projectId: o, useOnCloseEvent: a, bundleId: c } = t
                const u = n.split('?'),
                    h = { auth: s, ua: Ze(e, r, i), projectId: o, useOnCloseEvent: a || void 0, origin: c || void 0 },
                    l = (function (t, e) {
                        let r = me.parse(t)
                        return (r = Fe(Fe({}, r), e)), me.stringify(r)
                    })(u[1] || '', h)
                return u[0] + '?' + l
            }
            function er(t, e) {
                return t.filter((t) => e.includes(t)).length === t.length
            }
            function rr(t) {
                return Object.fromEntries(t.entries())
            }
            function nr(t) {
                return new Map(Object.entries(t))
            }
            function ir() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge.FIVE_MINUTES,
                    e = arguments.length > 1 ? arguments[1] : void 0
                const r = (0, ge.toMiliseconds)(t || ge.FIVE_MINUTES)
                let n, i, s
                return {
                    resolve: (t) => {
                        s && n && (clearTimeout(s), n(t))
                    },
                    reject: (t) => {
                        s && i && (clearTimeout(s), i(t))
                    },
                    done: () =>
                        new Promise((t, o) => {
                            ;(s = setTimeout(() => {
                                o(new Error(e))
                            }, r)),
                                (n = t),
                                (i = o)
                        })
                }
            }
            function sr(t, e, r) {
                return new Promise(async (n, i) => {
                    const s = setTimeout(() => i(new Error(r)), e)
                    try {
                        n(await t)
                    } catch (o) {
                        i(o)
                    }
                    clearTimeout(s)
                })
            }
            function or(t, e) {
                if ('string' == typeof e && e.startsWith(''.concat(t, ':'))) return e
                if ('topic' === t.toLowerCase()) {
                    if ('string' != typeof e) throw new Error('Value must be "string" for expirer target type: topic')
                    return 'topic:'.concat(e)
                }
                if ('id' === t.toLowerCase()) {
                    if ('number' != typeof e) throw new Error('Value must be "number" for expirer target type: id')
                    return 'id:'.concat(e)
                }
                throw new Error('Unknown expirer target type: '.concat(t))
            }
            function ar(t) {
                const [e, r] = t.split(':'),
                    n = { id: void 0, topic: void 0 }
                if ('topic' === e && 'string' == typeof r) n.topic = r
                else {
                    if ('id' !== e || !Number.isInteger(Number(r)))
                        throw new Error('Invalid target, expected id:number or topic:string, got '.concat(e, ':').concat(r))
                    n.id = Number(r)
                }
                return n
            }
            function cr(t, e) {
                return (0, ge.fromMiliseconds)((e || Date.now()) + (0, ge.toMiliseconds)(t))
            }
            function ur(t) {
                return Date.now() >= (0, ge.toMiliseconds)(t)
            }
            function hr(t, e) {
                return ''.concat(t).concat(e ? ':'.concat(e) : '')
            }
            function lr() {
                return [
                    ...new Set([
                        ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []),
                        ...(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [])
                    ])
                ]
            }
            function fr(t) {
                return (null === t || void 0 === t ? void 0 : t.relay) || { protocol: 'irn' }
            }
            function pr(t) {
                const e = we[t]
                if (typeof e > 'u') throw new Error('Relay Protocol not supported: '.concat(t))
                return e
            }
            var dr = Object.defineProperty,
                gr = Object.defineProperties,
                yr = Object.getOwnPropertyDescriptors,
                vr = Object.getOwnPropertySymbols,
                mr = Object.prototype.hasOwnProperty,
                wr = Object.prototype.propertyIsEnumerable,
                _r = (t, e, r) => (e in t ? dr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r))
            function br(t) {
                const e = {},
                    r = 'relay' + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '-')
                return (
                    Object.keys(t).forEach((n) => {
                        if (n.startsWith(r)) {
                            const i = n.replace(r, ''),
                                s = t[n]
                            e[i] = s
                        }
                    }),
                    e
                )
            }
            function Er(t) {
                const e = (t = (t = t.includes('wc://') ? t.replace('wc://', '') : t).includes('wc:') ? t.replace('wc:', '') : t).indexOf(':'),
                    r = -1 !== t.indexOf('?') ? t.indexOf('?') : void 0,
                    n = t.substring(0, e),
                    i = t.substring(e + 1, r).split('@'),
                    s = typeof r < 'u' ? t.substring(r) : '',
                    o = me.parse(s)
                return {
                    protocol: n,
                    topic: Sr(i[0]),
                    version: parseInt(i[1], 10),
                    symKey: o.symKey,
                    relay: br(o),
                    expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0
                }
            }
            function Sr(t) {
                return t.startsWith('//') ? t.substring(2) : t
            }
            function Ir(t) {
                return (
                    ''.concat(t.protocol, ':').concat(t.topic, '@').concat(t.version, '?') +
                    me.stringify(
                        ((t, e) => gr(t, yr(e)))(
                            ((t, e) => {
                                for (var r in e || (e = {})) mr.call(e, r) && _r(t, r, e[r])
                                if (vr) for (var r of vr(e)) wr.call(e, r) && _r(t, r, e[r])
                                return t
                            })(
                                { symKey: t.symKey },
                                (function (t) {
                                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '-'
                                    const r = {}
                                    return (
                                        Object.keys(t).forEach((n) => {
                                            const i = 'relay' + e + n
                                            t[n] && (r[i] = t[n])
                                        }),
                                        r
                                    )
                                })(t.relay)
                            ),
                            { expiryTimestamp: t.expiryTimestamp }
                        )
                    )
                )
            }
            Object.defineProperty,
                Object.defineProperties,
                Object.getOwnPropertyDescriptors,
                Object.getOwnPropertySymbols,
                Object.prototype.hasOwnProperty,
                Object.prototype.propertyIsEnumerable
            function Or(t) {
                const e = []
                return (
                    t.forEach((t) => {
                        const [r, n] = t.split(':')
                        e.push(''.concat(r, ':').concat(n))
                    }),
                    e
                )
            }
            function Pr(t) {
                return t.includes(':')
            }
            function xr(t) {
                return Pr(t) ? t.split(':')[0] : t
            }
            const Ar = {
                    INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
                    INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
                    INVALID_UPDATE_REQUEST: { message: 'Invalid update request.', code: 1003 },
                    INVALID_EXTEND_REQUEST: { message: 'Invalid extend request.', code: 1004 },
                    INVALID_SESSION_SETTLE_REQUEST: { message: 'Invalid session settle request.', code: 1005 },
                    UNAUTHORIZED_METHOD: { message: 'Unauthorized method.', code: 3001 },
                    UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
                    UNAUTHORIZED_UPDATE_REQUEST: { message: 'Unauthorized update request.', code: 3003 },
                    UNAUTHORIZED_EXTEND_REQUEST: { message: 'Unauthorized extend request.', code: 3004 },
                    USER_REJECTED: { message: 'User rejected.', code: 5e3 },
                    USER_REJECTED_CHAINS: { message: 'User rejected chains.', code: 5001 },
                    USER_REJECTED_METHODS: { message: 'User rejected methods.', code: 5002 },
                    USER_REJECTED_EVENTS: { message: 'User rejected events.', code: 5003 },
                    UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
                    UNSUPPORTED_METHODS: { message: 'Unsupported methods.', code: 5101 },
                    UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
                    UNSUPPORTED_ACCOUNTS: { message: 'Unsupported accounts.', code: 5103 },
                    UNSUPPORTED_NAMESPACE_KEY: { message: 'Unsupported namespace key.', code: 5104 },
                    USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
                    SESSION_SETTLEMENT_FAILED: { message: 'Session settlement failed.', code: 7e3 },
                    WC_METHOD_UNSUPPORTED: { message: 'Unsupported wc_ method.', code: 10001 }
                },
                Rr = {
                    NOT_INITIALIZED: { message: 'Not initialized.', code: 1 },
                    NO_MATCHING_KEY: { message: 'No matching key.', code: 2 },
                    RESTORE_WILL_OVERRIDE: { message: 'Restore will override.', code: 3 },
                    RESUBSCRIBED: { message: 'Resubscribed.', code: 4 },
                    MISSING_OR_INVALID: { message: 'Missing or invalid.', code: 5 },
                    EXPIRED: { message: 'Expired.', code: 6 },
                    UNKNOWN_TYPE: { message: 'Unknown type.', code: 7 },
                    MISMATCHED_TOPIC: { message: 'Mismatched topic.', code: 8 },
                    NON_CONFORMING_NAMESPACES: { message: 'Non conforming namespaces.', code: 9 }
                }
            function Nr(t, e) {
                const { message: r, code: n } = Rr[t]
                return { message: e ? ''.concat(r, ' ').concat(e) : r, code: n }
            }
            function Tr(t, e) {
                const { message: r, code: n } = Ar[t]
                return { message: e ? ''.concat(r, ' ').concat(e) : r, code: n }
            }
            function Cr(t, e) {
                return !!Array.isArray(t) && (!(typeof e < 'u' && t.length) || t.every(e))
            }
            function jr(t) {
                return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
            }
            function Lr(t) {
                return typeof t > 'u'
            }
            function Ur(t, e) {
                return !(!e || !Lr(t)) || ('string' == typeof t && !!t.trim().length)
            }
            function Mr(t, e) {
                return !(!e || !Lr(t)) || ('number' == typeof t && !isNaN(t))
            }
            function Dr(t) {
                return !(!Ur(t, !1) || !t.includes(':')) && 2 === t.split(':').length
            }
            function kr(t) {
                let e = !0
                return Cr(t) ? t.length && (e = t.every((t) => Ur(t, !1))) : (e = !1), e
            }
            function qr(t, e, r) {
                let n = null
                return (
                    Object.entries(t).forEach((t) => {
                        let [i, s] = t
                        if (n) return
                        const o = (function (t, e, r) {
                            let n = null
                            return (
                                Cr(e) && e.length
                                    ? e.forEach((t) => {
                                          n ||
                                              Dr(t) ||
                                              (n = Tr(
                                                  'UNSUPPORTED_CHAINS',
                                                  ''.concat(r, ', chain ').concat(t, ' should be a string and conform to "namespace:chainId" format')
                                              ))
                                      })
                                    : Dr(t) ||
                                      (n = Tr(
                                          'UNSUPPORTED_CHAINS',
                                          ''.concat(
                                              r,
                                              ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'
                                          )
                                      )),
                                n
                            )
                        })(i, Ee(i, s), ''.concat(e, ' ').concat(r))
                        o && (n = o)
                    }),
                    n
                )
            }
            function zr(t, e) {
                let r = null
                return (
                    Cr(t)
                        ? t.forEach((t) => {
                              r ||
                                  (function (t) {
                                      if (Ur(t, !1) && t.includes(':')) {
                                          const e = t.split(':')
                                          if (3 === e.length) {
                                              const t = e[0] + ':' + e[1]
                                              return !!e[2] && Dr(t)
                                          }
                                      }
                                      return !1
                                  })(t) ||
                                  (r = Tr(
                                      'UNSUPPORTED_ACCOUNTS',
                                      ''.concat(e, ', account ').concat(t, ' should be a string and conform to "namespace:chainId:address" format')
                                  ))
                          })
                        : (r = Tr(
                              'UNSUPPORTED_ACCOUNTS',
                              ''.concat(e, ', accounts should be an array of strings conforming to "namespace:chainId:address" format')
                          )),
                    r
                )
            }
            function Hr(t, e) {
                let r = null
                return (
                    Object.values(t).forEach((t) => {
                        if (r) return
                        const n = (function (t, e) {
                            let r = null
                            return (
                                kr(null === t || void 0 === t ? void 0 : t.methods)
                                    ? kr(null === t || void 0 === t ? void 0 : t.events) ||
                                      (r = Tr(
                                          'UNSUPPORTED_EVENTS',
                                          ''.concat(e, ', events should be an array of strings or empty array for no events')
                                      ))
                                    : (r = Tr(
                                          'UNSUPPORTED_METHODS',
                                          ''.concat(e, ', methods should be an array of strings or empty array for no methods')
                                      )),
                                r
                            )
                        })(t, ''.concat(e, ', namespace'))
                        n && (r = n)
                    }),
                    r
                )
            }
            function Br(t, e) {
                let r = null
                if (t && jr(t)) {
                    const n = Hr(t, e)
                    n && (r = n)
                    const i = (function (t, e) {
                        let r = null
                        return (
                            Object.values(t).forEach((t) => {
                                if (r) return
                                const n = zr(null === t || void 0 === t ? void 0 : t.accounts, ''.concat(e, ' namespace'))
                                n && (r = n)
                            }),
                            r
                        )
                    })(t, e)
                    i && (r = i)
                } else r = Nr('MISSING_OR_INVALID', ''.concat(e, ', namespaces should be an object with data'))
                return r
            }
            function Kr(t) {
                return Ur(t.protocol, !0)
            }
            function Vr(t) {
                return typeof t < 'u' && null !== typeof t
            }
            function Fr(t, e) {
                return !(
                    !Dr(e) ||
                    !(function (t) {
                        const e = []
                        return (
                            Object.values(t).forEach((t) => {
                                e.push(...Or(t.accounts))
                            }),
                            e
                        )
                    })(t).includes(e)
                )
            }
            function Wr(t, e, r) {
                return (
                    !!Ur(r, !1) &&
                    (function (t, e) {
                        const r = []
                        return (
                            Object.values(t).forEach((t) => {
                                Or(t.accounts).includes(e) && r.push(...t.methods)
                            }),
                            r
                        )
                    })(t, e).includes(r)
                )
            }
            function Gr(t, e, r) {
                return (
                    !!Ur(r, !1) &&
                    (function (t, e) {
                        const r = []
                        return (
                            Object.values(t).forEach((t) => {
                                Or(t.accounts).includes(e) && r.push(...t.events)
                            }),
                            r
                        )
                    })(t, e).includes(r)
                )
            }
            function Yr(t, e, r) {
                let n = null
                const i = (function (t) {
                        const e = {}
                        return (
                            Object.keys(t).forEach((r) => {
                                var n
                                r.includes(':')
                                    ? (e[r] = t[r])
                                    : null == (n = t[r].chains) ||
                                      n.forEach((n) => {
                                          e[n] = { methods: t[r].methods, events: t[r].events }
                                      })
                            }),
                            e
                        )
                    })(t),
                    s = (function (t) {
                        const e = {}
                        return (
                            Object.keys(t).forEach((r) => {
                                if (r.includes(':')) e[r] = t[r]
                                else {
                                    const n = Or(t[r].accounts)
                                    null === n ||
                                        void 0 === n ||
                                        n.forEach((n) => {
                                            e[n] = {
                                                accounts: t[r].accounts.filter((t) => t.includes(''.concat(n, ':'))),
                                                methods: t[r].methods,
                                                events: t[r].events
                                            }
                                        })
                                }
                            }),
                            e
                        )
                    })(e),
                    o = Object.keys(i),
                    a = Object.keys(s),
                    c = Jr(Object.keys(t)),
                    u = Jr(Object.keys(e)),
                    h = c.filter((t) => !u.includes(t))
                return (
                    h.length &&
                        (n = Nr(
                            'NON_CONFORMING_NAMESPACES',
                            ''
                                .concat(r, " namespaces keys don't satisfy requiredNamespaces.\n      Required: ")
                                .concat(h.toString(), '\n      Received: ')
                                .concat(Object.keys(e).toString())
                        )),
                    er(o, a) ||
                        (n = Nr(
                            'NON_CONFORMING_NAMESPACES',
                            ''
                                .concat(r, " namespaces chains don't satisfy required namespaces.\n      Required: ")
                                .concat(o.toString(), '\n      Approved: ')
                                .concat(a.toString())
                        )),
                    Object.keys(e).forEach((t) => {
                        if (!t.includes(':') || n) return
                        const i = Or(e[t].accounts)
                        i.includes(t) ||
                            (n = Nr(
                                'NON_CONFORMING_NAMESPACES',
                                ''
                                    .concat(r, " namespaces accounts don't satisfy namespace accounts for ")
                                    .concat(t, '\n        Required: ')
                                    .concat(t, '\n        Approved: ')
                                    .concat(i.toString())
                            ))
                    }),
                    o.forEach((t) => {
                        n ||
                            (er(i[t].methods, s[t].methods)
                                ? er(i[t].events, s[t].events) ||
                                  (n = Nr(
                                      'NON_CONFORMING_NAMESPACES',
                                      ''.concat(r, " namespaces events don't satisfy namespace events for ").concat(t)
                                  ))
                                : (n = Nr(
                                      'NON_CONFORMING_NAMESPACES',
                                      ''.concat(r, " namespaces methods don't satisfy namespace methods for ").concat(t)
                                  )))
                    }),
                    n
                )
            }
            function Jr(t) {
                return [...new Set(t.map((t) => (t.includes(':') ? t.split(':')[0] : t)))]
            }
            function Qr() {
                const t = Xe()
                return new Promise((e) => {
                    switch (t) {
                        case Ge.browser:
                            e(
                                (function () {
                                    var t
                                    return $e() && (null === (t = navigator) || void 0 === t ? void 0 : t.onLine)
                                })()
                            )
                            break
                        case Ge.reactNative:
                            e(
                                (async function () {
                                    if (Qe() && typeof r.g < 'u' && null != r.g && r.g.NetInfo) {
                                        const t = await (null == r.g ? void 0 : r.g.NetInfo.fetch())
                                        return null === t || void 0 === t ? void 0 : t.isConnected
                                    }
                                    return !0
                                })()
                            )
                            break
                        case Ge.node:
                        default:
                            e(!0)
                    }
                })
            }
            function $r(t) {
                switch (Xe()) {
                    case Ge.browser:
                        !(function (t) {
                            !Qe() && $e() && (window.addEventListener('online', () => t(!0)), window.addEventListener('offline', () => t(!1)))
                        })(t)
                        break
                    case Ge.reactNative:
                        !(function (t) {
                            var e
                            Qe() &&
                                typeof r.g < 'u' &&
                                null != r.g &&
                                r.g.NetInfo &&
                                (null === (e = r.g) ||
                                    void 0 === e ||
                                    e.NetInfo.addEventListener((e) => t(null === e || void 0 === e ? void 0 : e.isConnected)))
                        })(t)
                    case Ge.node:
                }
            }
            const Xr = {}
            class Zr {
                static get(t) {
                    return Xr[t]
                }
                static set(t, e) {
                    Xr[t] = e
                }
                static delete(t) {
                    delete Xr[t]
                }
            }
            const tn =
                    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                en =
                    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                rn = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/
            function nn(t, e) {
                if (!('__proto__' === t || ('constructor' === t && e && 'object' === typeof e && 'prototype' in e))) return e
                !(function (t) {
                    console.warn('[destr] Dropping "'.concat(t, '" key to prevent prototype pollution.'))
                })(t)
            }
            function sn(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                if ('string' !== typeof t) return t
                const r = t.trim()
                if ('"' === t[0] && t.endsWith('"') && !t.includes('\\')) return r.slice(1, -1)
                if (r.length <= 9) {
                    const t = r.toLowerCase()
                    if ('true' === t) return !0
                    if ('false' === t) return !1
                    if ('undefined' === t) return
                    if ('null' === t) return null
                    if ('nan' === t) return Number.NaN
                    if ('infinity' === t) return Number.POSITIVE_INFINITY
                    if ('-infinity' === t) return Number.NEGATIVE_INFINITY
                }
                if (!rn.test(t)) {
                    if (e.strict) throw new SyntaxError('[destr] Invalid JSON')
                    return t
                }
                try {
                    if (tn.test(t) || en.test(t)) {
                        if (e.strict) throw new Error('[destr] Possible prototype pollution')
                        return JSON.parse(t, nn)
                    }
                    return JSON.parse(t)
                } catch (n) {
                    if (e.strict) throw n
                    return t
                }
            }
            function on(t) {
                try {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n]
                    return (i = t(...r)) && 'function' === typeof i.then ? i : Promise.resolve(i)
                } catch (s) {
                    return Promise.reject(s)
                }
                var i
            }
            function an(t) {
                if (
                    (function (t) {
                        const e = typeof t
                        return null === t || ('object' !== e && 'function' !== e)
                    })(t)
                )
                    return String(t)
                if (
                    (function (t) {
                        const e = Object.getPrototypeOf(t)
                        return !e || e.isPrototypeOf(Object)
                    })(t) ||
                    Array.isArray(t)
                )
                    return JSON.stringify(t)
                if ('function' === typeof t.toJSON) return an(t.toJSON())
                throw new Error('[unstorage] Cannot stringify value!')
            }
            function cn() {
                if (void 0 === typeof Buffer) throw new TypeError('[unstorage] Buffer is not supported!')
            }
            const un = 'base64:'
            function hn(t) {
                return t ? t.split('?')[0].replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '') : ''
            }
            function ln() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                return hn(e.join(':'))
            }
            function fn(t) {
                return (t = hn(t)) ? t + ':' : ''
            }
            const pn = () => {
                const t = new Map()
                return {
                    name: 'memory',
                    options: {},
                    hasItem: (e) => t.has(e),
                    getItem(e) {
                        var r
                        return null !== (r = t.get(e)) && void 0 !== r ? r : null
                    },
                    getItemRaw(e) {
                        var r
                        return null !== (r = t.get(e)) && void 0 !== r ? r : null
                    },
                    setItem(e, r) {
                        t.set(e, r)
                    },
                    setItemRaw(e, r) {
                        t.set(e, r)
                    },
                    removeItem(e) {
                        t.delete(e)
                    },
                    getKeys: () => Array.from(t.keys()),
                    clear() {
                        t.clear()
                    },
                    dispose() {
                        t.clear()
                    }
                }
            }
            function dn() {
                const t = {
                        mounts: { '': (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).driver || pn() },
                        mountpoints: [''],
                        watching: !1,
                        watchListeners: [],
                        unwatch: {}
                    },
                    e = (e) => {
                        for (const r of t.mountpoints) if (e.startsWith(r)) return { base: r, relativeKey: e.slice(r.length), driver: t.mounts[r] }
                        return { base: '', relativeKey: e, driver: t.mounts[''] }
                    },
                    r = (e, r) =>
                        t.mountpoints
                            .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
                            .map((r) => ({ relativeBase: e.length > r.length ? e.slice(r.length) : void 0, mountpoint: r, driver: t.mounts[r] })),
                    n = (e, r) => {
                        if (t.watching) {
                            r = hn(r)
                            for (const n of t.watchListeners) n(e, r)
                        }
                    },
                    i = async () => {
                        if (t.watching) {
                            for (const e in t.unwatch) await t.unwatch[e]()
                            ;(t.unwatch = {}), (t.watching = !1)
                        }
                    },
                    s = (t, r, n) => {
                        const i = new Map(),
                            s = (t) => {
                                let e = i.get(t.base)
                                return e || ((e = { driver: t.driver, base: t.base, items: [] }), i.set(t.base, e)), e
                            }
                        for (const o of t) {
                            const t = 'string' === typeof o,
                                n = hn(t ? o : o.key),
                                i = t ? void 0 : o.value,
                                a = t || !o.options ? r : { ...r, ...o.options },
                                c = e(n)
                            s(c).items.push({ key: n, value: i, relativeKey: c.relativeKey, options: a })
                        }
                        return Promise.all([...i.values()].map((t) => n(t))).then((t) => t.flat())
                    },
                    o = {
                        hasItem(t) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            t = hn(t)
                            const { relativeKey: n, driver: i } = e(t)
                            return on(i.hasItem, n, r)
                        },
                        getItem(t) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            t = hn(t)
                            const { relativeKey: n, driver: i } = e(t)
                            return on(i.getItem, n, r).then((t) => sn(t))
                        },
                        getItems: (t, e) =>
                            s(t, e, (t) =>
                                t.driver.getItems
                                    ? on(
                                          t.driver.getItems,
                                          t.items.map((t) => ({ key: t.relativeKey, options: t.options })),
                                          e
                                      ).then((e) => e.map((e) => ({ key: ln(t.base, e.key), value: sn(e.value) })))
                                    : Promise.all(
                                          t.items.map((e) =>
                                              on(t.driver.getItem, e.relativeKey, e.options).then((t) => ({ key: e.key, value: sn(t) }))
                                          )
                                      )
                            ),
                        getItemRaw(t) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            t = hn(t)
                            const { relativeKey: n, driver: i } = e(t)
                            return i.getItemRaw
                                ? on(i.getItemRaw, n, r)
                                : on(i.getItem, n, r).then((t) =>
                                      (function (t) {
                                          return 'string' !== typeof t ? t : t.startsWith(un) ? (cn(), Buffer.from(t.slice(un.length), 'base64')) : t
                                      })(t)
                                  )
                        },
                        async setItem(t, r) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                            if (void 0 === r) return o.removeItem(t)
                            t = hn(t)
                            const { relativeKey: s, driver: a } = e(t)
                            a.setItem && (await on(a.setItem, s, an(r), i), a.watch || n('update', t))
                        },
                        async setItems(t, e) {
                            await s(t, e, async (t) => {
                                t.driver.setItems &&
                                    (await on(
                                        t.driver.setItems,
                                        t.items.map((t) => ({ key: t.relativeKey, value: an(t.value), options: t.options })),
                                        e
                                    )),
                                    t.driver.setItem &&
                                        (await Promise.all(t.items.map((e) => on(t.driver.setItem, e.relativeKey, an(e.value), e.options))))
                            })
                        },
                        async setItemRaw(t, r) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                            if (void 0 === r) return o.removeItem(t, i)
                            t = hn(t)
                            const { relativeKey: s, driver: a } = e(t)
                            if (a.setItemRaw) await on(a.setItemRaw, s, r, i)
                            else {
                                if (!a.setItem) return
                                await on(
                                    a.setItem,
                                    s,
                                    (function (t) {
                                        if ('string' === typeof t) return t
                                        cn()
                                        const e = Buffer.from(t).toString('base64')
                                        return un + e
                                    })(r),
                                    i
                                )
                            }
                            a.watch || n('update', t)
                        },
                        async removeItem(t) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            'boolean' === typeof r && (r = { removeMeta: r }), (t = hn(t))
                            const { relativeKey: i, driver: s } = e(t)
                            s.removeItem &&
                                (await on(s.removeItem, i, r),
                                (r.removeMeta || r.removeMata) && (await on(s.removeItem, i + '$', r)),
                                s.watch || n('remove', t))
                        },
                        async getMeta(t) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            'boolean' === typeof r && (r = { nativeOnly: r }), (t = hn(t))
                            const { relativeKey: n, driver: i } = e(t),
                                s = Object.create(null)
                            if ((i.getMeta && Object.assign(s, await on(i.getMeta, n, r)), !r.nativeOnly)) {
                                const t = await on(i.getItem, n + '$', r).then((t) => sn(t))
                                t &&
                                    'object' === typeof t &&
                                    ('string' === typeof t.atime && (t.atime = new Date(t.atime)),
                                    'string' === typeof t.mtime && (t.mtime = new Date(t.mtime)),
                                    Object.assign(s, t))
                            }
                            return s
                        },
                        setMeta(t, e) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                            return this.setItem(t + '$', e, r)
                        },
                        removeMeta(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            return this.removeItem(t + '$', e)
                        },
                        async getKeys(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            t = fn(t)
                            const n = r(t, !0)
                            let i = []
                            const s = []
                            for (const r of n) {
                                const t = (await on(r.driver.getKeys, r.relativeBase, e))
                                    .map((t) => r.mountpoint + hn(t))
                                    .filter((t) => !i.some((e) => t.startsWith(e)))
                                s.push(...t), (i = [r.mountpoint, ...i.filter((t) => !t.startsWith(r.mountpoint))])
                            }
                            return t ? s.filter((e) => e.startsWith(t) && !e.endsWith('$')) : s.filter((t) => !t.endsWith('$'))
                        },
                        async clear(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            ;(t = fn(t)),
                                await Promise.all(
                                    r(t, !1).map(async (t) => {
                                        if (t.driver.clear) return on(t.driver.clear, t.relativeBase, e)
                                        if (t.driver.removeItem) {
                                            const r = await t.driver.getKeys(t.relativeBase || '', e)
                                            return Promise.all(r.map((r) => t.driver.removeItem(r, e)))
                                        }
                                    })
                                )
                        },
                        async dispose() {
                            await Promise.all(Object.values(t.mounts).map((t) => yn(t)))
                        },
                        watch: async (e) => (
                            await (async () => {
                                if (!t.watching) {
                                    t.watching = !0
                                    for (const e in t.mounts) t.unwatch[e] = await gn(t.mounts[e], n, e)
                                }
                            })(),
                            t.watchListeners.push(e),
                            async () => {
                                ;(t.watchListeners = t.watchListeners.filter((t) => t !== e)), 0 === t.watchListeners.length && (await i())
                            }
                        ),
                        async unwatch() {
                            ;(t.watchListeners = []), await i()
                        },
                        mount(e, r) {
                            if ((e = fn(e)) && t.mounts[e]) throw new Error('already mounted at '.concat(e))
                            return (
                                e && (t.mountpoints.push(e), t.mountpoints.sort((t, e) => e.length - t.length)),
                                (t.mounts[e] = r),
                                t.watching &&
                                    Promise.resolve(gn(r, n, e))
                                        .then((r) => {
                                            t.unwatch[e] = r
                                        })
                                        .catch(console.error),
                                o
                            )
                        },
                        async unmount(e) {
                            let r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                            ;(e = fn(e)) &&
                                t.mounts[e] &&
                                (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]),
                                r && (await yn(t.mounts[e])),
                                (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                                delete t.mounts[e])
                        },
                        getMount() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
                            t = hn(t) + ':'
                            const r = e(t)
                            return { driver: r.driver, base: r.base }
                        },
                        getMounts() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            t = hn(t)
                            return r(t, e.parents).map((t) => ({ driver: t.driver, base: t.mountpoint }))
                        }
                    }
                return o
            }
            function gn(t, e, r) {
                return t.watch ? t.watch((t, n) => e(t, r + n)) : () => {}
            }
            async function yn(t) {
                'function' === typeof t.dispose && (await on(t.dispose))
            }
            function vn(t) {
                return new Promise((e, r) => {
                    ;(t.oncomplete = t.onsuccess = () => e(t.result)), (t.onabort = t.onerror = () => r(t.error))
                })
            }
            function mn(t, e) {
                const r = indexedDB.open(t)
                r.onupgradeneeded = () => r.result.createObjectStore(e)
                const n = vn(r)
                return (t, r) => n.then((n) => r(n.transaction(e, t).objectStore(e)))
            }
            let wn
            function _n() {
                return wn || (wn = mn('keyval-store', 'keyval')), wn
            }
            function bn(t) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _n())('readonly', (e) => vn(e.get(t)))
            }
            function En(t, e) {
                return (
                    (t.openCursor().onsuccess = function () {
                        this.result && (e(this.result), this.result.continue())
                    }),
                    vn(t.transaction)
                )
            }
            const Sn = (t) => JSON.stringify(t, (t, e) => ('bigint' === typeof e ? e.toString() + 'n' : e)),
                In = (t) => {
                    const e = t.replace(
                        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
                        '$1"$2n"$3'
                    )
                    return JSON.parse(e, (t, e) => ('string' === typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e))
                }
            function On(t) {
                if ('string' !== typeof t) throw new Error('Cannot safe json parse value of type '.concat(typeof t))
                try {
                    return In(t)
                } catch (e) {
                    return t
                }
            }
            function Pn(t) {
                return 'string' === typeof t ? t : Sn(t) || ''
            }
            var xn = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                const e = t.base && t.base.length > 0 ? ''.concat(t.base, ':') : '',
                    r = (t) => e + t
                let n
                return (
                    t.dbName && t.storeName && (n = mn(t.dbName, t.storeName)),
                    {
                        name: 'idb-keyval',
                        options: t,
                        hasItem: async (t) => !(typeof (await bn(r(t), n)) > 'u'),
                        async getItem(t) {
                            var e
                            return null !== (e = await bn(r(t), n)) && void 0 !== e ? e : null
                        },
                        setItem: (t, e) =>
                            (function (t, e) {
                                return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _n())(
                                    'readwrite',
                                    (r) => (r.put(e, t), vn(r.transaction))
                                )
                            })(r(t), e, n),
                        removeItem: (t) =>
                            (function (t) {
                                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _n())(
                                    'readwrite',
                                    (e) => (e.delete(t), vn(e.transaction))
                                )
                            })(r(t), n),
                        getKeys: () =>
                            (function () {
                                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _n())('readonly', (t) => {
                                    if (t.getAllKeys) return vn(t.getAllKeys())
                                    const e = []
                                    return En(t, (t) => e.push(t.key)).then(() => e)
                                })
                            })(n),
                        clear: () =>
                            (function () {
                                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _n())(
                                    'readwrite',
                                    (t) => (t.clear(), vn(t.transaction))
                                )
                            })(n)
                    }
                )
            }
            class An {
                constructor() {
                    this.indexedDb = dn({ driver: xn({ dbName: 'WALLET_CONNECT_V2_INDEXED_DB', storeName: 'keyvaluestorage' }) })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value])
                }
                async getItem(t) {
                    const e = await this.indexedDb.getItem(t)
                    if (null !== e) return e
                }
                async setItem(t, e) {
                    await this.indexedDb.setItem(t, Pn(e))
                }
                async removeItem(t) {
                    await this.indexedDb.removeItem(t)
                }
            }
            var Rn = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof r.g < 'u' ? r.g : typeof self < 'u' ? self : {},
                Nn = { exports: {} }
            function Tn(t) {
                var e
                return [t[0], On(null != (e = t[1]) ? e : '')]
            }
            !(function () {
                let t
                function e() {}
                ;(t = e),
                    (t.prototype.getItem = function (t) {
                        return this.hasOwnProperty(t) ? String(this[t]) : null
                    }),
                    (t.prototype.setItem = function (t, e) {
                        this[t] = String(e)
                    }),
                    (t.prototype.removeItem = function (t) {
                        delete this[t]
                    }),
                    (t.prototype.clear = function () {
                        const t = this
                        Object.keys(t).forEach(function (e) {
                            ;(t[e] = void 0), delete t[e]
                        })
                    }),
                    (t.prototype.key = function (t) {
                        return (t = t || 0), Object.keys(this)[t]
                    }),
                    t.prototype.__defineGetter__('length', function () {
                        return Object.keys(this).length
                    }),
                    typeof Rn < 'u' && Rn.localStorage
                        ? (Nn.exports = Rn.localStorage)
                        : typeof window < 'u' && window.localStorage
                          ? (Nn.exports = window.localStorage)
                          : (Nn.exports = new e())
            })()
            class Cn {
                constructor() {
                    this.localStorage = Nn.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(Tn)
                }
                async getItem(t) {
                    const e = this.localStorage.getItem(t)
                    if (null !== e) return On(e)
                }
                async setItem(t, e) {
                    this.localStorage.setItem(t, Pn(e))
                }
                async removeItem(t) {
                    this.localStorage.removeItem(t)
                }
            }
            const jn = async (t, e) => {
                e.length &&
                    e.forEach(async (e) => {
                        await t.removeItem(e)
                    })
            }
            class Ln {
                constructor() {
                    ;(this.initialized = !1),
                        (this.setInitialized = (t) => {
                            ;(this.storage = t), (this.initialized = !0)
                        })
                    const t = new Cn()
                    this.storage = t
                    try {
                        ;(async (t, e, r) => {
                            const n = 'wc_storage_version',
                                i = await e.getItem(n)
                            if (i && i >= 1) return void r(e)
                            const s = await t.getKeys()
                            if (!s.length) return void r(e)
                            const o = []
                            for (; s.length; ) {
                                const r = s.shift()
                                if (!r) continue
                                const n = r.toLowerCase()
                                if (n.includes('wc@') || n.includes('walletconnect') || n.includes('wc_') || n.includes('wallet_connect')) {
                                    const n = await t.getItem(r)
                                    await e.setItem(r, n), o.push(r)
                                }
                            }
                            await e.setItem(n, 1), r(e), jn(t, o)
                        })(t, new An(), this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(t) {
                    return await this.initialize(), this.storage.getItem(t)
                }
                async setItem(t, e) {
                    return await this.initialize(), this.storage.setItem(t, e)
                }
                async removeItem(t) {
                    return await this.initialize(), this.storage.removeItem(t)
                }
                async initialize() {
                    this.initialized ||
                        (await new Promise((t) => {
                            const e = setInterval(() => {
                                this.initialized && (clearInterval(e), t())
                            }, 20)
                        }))
                }
            }
            var Un = r(1345),
                Mn = r(5051),
                Dn = r(3375)
            class kn extends Dn.q {
                constructor(t) {
                    super(), (this.opts = t), (this.protocol = 'wc'), (this.version = 2)
                }
            }
            class qn extends Dn.q {
                constructor(t, e) {
                    super(), (this.core = t), (this.logger = e), (this.records = new Map())
                }
            }
            class zn {
                constructor(t, e) {
                    ;(this.logger = t), (this.core = e)
                }
            }
            class Hn extends Dn.q {
                constructor(t, e) {
                    super(), (this.relayer = t), (this.logger = e)
                }
            }
            class Bn extends Dn.q {
                constructor(t) {
                    super()
                }
            }
            class Kn {
                constructor(t, e, r, n) {
                    ;(this.core = t), (this.logger = e), (this.name = r)
                }
            }
            class Vn extends Dn.q {
                constructor(t, e) {
                    super(), (this.relayer = t), (this.logger = e)
                }
            }
            class Fn extends Dn.q {
                constructor(t, e) {
                    super(), (this.core = t), (this.logger = e)
                }
            }
            class Wn {
                constructor(t, e) {
                    ;(this.projectId = t), (this.logger = e)
                }
            }
            class Gn {
                constructor(t, e) {
                    ;(this.projectId = t), (this.logger = e)
                }
            }
            class Yn {
                constructor(t) {
                    ;(this.opts = t), (this.protocol = 'wc'), (this.version = 2)
                }
            }
            class Jn {
                constructor(t) {
                    this.client = t
                }
            }
            var Qn = r(4519)
            const $n = '.',
                Xn = 'base64url',
                Zn = 'utf8',
                ti = 'utf8',
                ei = ':',
                ri = 'did',
                ni = 'key',
                ii = 'base58btc',
                si = 'z',
                oi = 'K36'
            function ai(t) {
                return ee(te(Pn(t), Zn), Xn)
            }
            function ci(t) {
                const e = te(oi, ii),
                    r = si + ee(P([e, t]), ii)
                return [ri, ni, r].join(ei)
            }
            function ui() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, b.randomBytes)(32)
                return Qn._w(t)
            }
            async function hi(t, e, r, n) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, ge.fromMiliseconds)(Date.now())
                const s = { alg: 'EdDSA', typ: 'JWT' },
                    o = { iss: ci(n.publicKey), sub: t, aud: e, iat: i, exp: i + r },
                    a = te([ai((c = { header: s, payload: o }).header), ai(c.payload)].join($n), ti)
                var c
                return (function (t) {
                    return [ai(t.header), ai(t.payload), ((e = t.signature), ee(e, Xn))].join($n)
                    var e
                })({ header: s, payload: o, signature: Qn.Xx(n.secretKey, a) })
            }
            r(6395)
            const li = 'INTERNAL_ERROR',
                fi = 'SERVER_ERROR',
                pi = [-32700, -32600, -32601, -32602, -32603],
                di = {
                    PARSE_ERROR: { code: -32700, message: 'Parse error' },
                    INVALID_REQUEST: { code: -32600, message: 'Invalid Request' },
                    METHOD_NOT_FOUND: { code: -32601, message: 'Method not found' },
                    INVALID_PARAMS: { code: -32602, message: 'Invalid params' },
                    [li]: { code: -32603, message: 'Internal error' },
                    [fi]: { code: -32e3, message: 'Server error' }
                },
                gi = fi
            function yi(t) {
                return pi.includes(t)
            }
            function vi(t) {
                return Object.keys(di).includes(t) ? di[t] : di[gi]
            }
            function mi(t) {
                const e = Object.values(di).find((e) => e.code === t)
                return e || di[gi]
            }
            function wi(t, e, r) {
                return t.message.includes('getaddrinfo ENOTFOUND') || t.message.includes('connect ECONNREFUSED')
                    ? new Error('Unavailable '.concat(r, ' RPC url at ').concat(e))
                    : t
            }
            var _i = r(5503)
            function bi() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3
                return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t))
            }
            function Ei() {
                return BigInt(bi(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6))
            }
            function Si(t, e, r) {
                return { id: r || bi(), jsonrpc: '2.0', method: t, params: e }
            }
            function Ii(t, e) {
                return { id: t, jsonrpc: '2.0', result: e }
            }
            function Oi(t, e, r) {
                return { id: t, jsonrpc: '2.0', error: Pi(e, r) }
            }
            function Pi(t, e) {
                return 'undefined' === typeof t
                    ? vi(li)
                    : ('string' === typeof t && (t = Object.assign(Object.assign({}, vi(fi)), { message: t })),
                      'undefined' !== typeof e && (t.data = e),
                      yi(t.code) && (t = mi(t.code)),
                      t)
            }
            class xi {}
            class Ai extends xi {
                constructor() {
                    super()
                }
            }
            class Ri extends Ai {
                constructor(t) {
                    super()
                }
            }
            function Ni(t, e) {
                const r = (function (t) {
                    const e = t.match(new RegExp(/^\w+:/, 'gi'))
                    if (e && e.length) return e[0]
                })(t)
                return 'undefined' !== typeof r && new RegExp(e).test(r)
            }
            function Ti(t) {
                return Ni(t, '^https?:')
            }
            function Ci(t) {
                return Ni(t, '^wss?:')
            }
            function ji(t) {
                return 'object' === typeof t && 'id' in t && 'jsonrpc' in t && '2.0' === t.jsonrpc
            }
            function Li(t) {
                return ji(t) && 'method' in t
            }
            function Ui(t) {
                return ji(t) && (Mi(t) || Di(t))
            }
            function Mi(t) {
                return 'result' in t
            }
            function Di(t) {
                return 'error' in t
            }
            class ki extends Ri {
                constructor(t) {
                    super(t),
                        (this.events = new v.EventEmitter()),
                        (this.hasRegisteredEventListeners = !1),
                        (this.connection = this.setConnection(t)),
                        this.connection.connected && this.registerEventListeners()
                }
                async connect() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                    await this.open(t)
                }
                async disconnect() {
                    await this.close()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async request(t, e) {
                    return this.requestStrict(Si(t.method, t.params || [], t.id || Ei().toString()), e)
                }
                async requestStrict(t, e) {
                    return new Promise(async (r, n) => {
                        if (!this.connection.connected)
                            try {
                                await this.open()
                            } catch (i) {
                                n(i)
                            }
                        this.events.on(''.concat(t.id), (t) => {
                            Di(t) ? n(t.error) : r(t.result)
                        })
                        try {
                            await this.connection.send(t, e)
                        } catch (i) {
                            n(i)
                        }
                    })
                }
                setConnection() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                }
                onPayload(t) {
                    this.events.emit('payload', t),
                        Ui(t) ? this.events.emit(''.concat(t.id), t) : this.events.emit('message', { type: t.method, data: t.params })
                }
                onClose(t) {
                    t &&
                        3e3 === t.code &&
                        this.events.emit(
                            'error',
                            new Error(
                                'WebSocket connection closed abnormally with code: '
                                    .concat(t.code, ' ')
                                    .concat(t.reason ? '('.concat(t.reason, ')') : '')
                            )
                        ),
                        this.events.emit('disconnect')
                }
                async open() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                    ;(this.connection === t && this.connection.connected) ||
                        (this.connection.connected && this.close(),
                        'string' === typeof t && (await this.connection.open(t), (t = this.connection)),
                        (this.connection = this.setConnection(t)),
                        await this.connection.open(),
                        this.registerEventListeners(),
                        this.events.emit('connect'))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners ||
                        (this.connection.on('payload', (t) => this.onPayload(t)),
                        this.connection.on('close', (t) => this.onClose(t)),
                        this.connection.on('error', (t) => this.events.emit('error', t)),
                        this.connection.on('register_error', (t) => this.onClose()),
                        (this.hasRegisteredEventListeners = !0))
                }
            }
            const qi = (t) => t.split('?')[0],
                zi =
                    typeof WebSocket < 'u'
                        ? WebSocket
                        : typeof r.g < 'u' && typeof r.g.WebSocket < 'u'
                          ? r.g.WebSocket
                          : typeof window < 'u' && typeof window.WebSocket < 'u'
                            ? window.WebSocket
                            : typeof self < 'u' && typeof self.WebSocket < 'u'
                              ? self.WebSocket
                              : r(8720)
            class Hi {
                constructor(t) {
                    if (((this.url = t), (this.events = new v.EventEmitter()), (this.registering = !1), !Ci(t)))
                        throw new Error('Provided URL is not compatible with WebSocket connection: '.concat(t))
                    this.url = t
                }
                get connected() {
                    return typeof this.socket < 'u'
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url
                    await this.register(t)
                }
                async close() {
                    return new Promise((t, e) => {
                        typeof this.socket > 'u'
                            ? e(new Error('Connection already closed'))
                            : ((this.socket.onclose = (e) => {
                                  this.onClose(e), t()
                              }),
                              this.socket.close())
                    })
                }
                async send(t) {
                    typeof this.socket > 'u' && (this.socket = await this.register())
                    try {
                        this.socket.send(Pn(t))
                    } catch (e) {
                        this.onError(t.id, e)
                    }
                }
                register() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url
                    if (!Ci(t)) throw new Error('Provided URL is not compatible with WebSocket connection: '.concat(t))
                    if (this.registering) {
                        const t = this.events.getMaxListeners()
                        return (
                            (this.events.listenerCount('register_error') >= t || this.events.listenerCount('open') >= t) &&
                                this.events.setMaxListeners(t + 1),
                            new Promise((t, e) => {
                                this.events.once('register_error', (t) => {
                                    this.resetMaxListeners(), e(t)
                                }),
                                    this.events.once('open', () => {
                                        if ((this.resetMaxListeners(), typeof this.socket > 'u'))
                                            return e(new Error('WebSocket connection is missing or invalid'))
                                        t(this.socket)
                                    })
                            })
                        )
                    }
                    return (
                        (this.url = t),
                        (this.registering = !0),
                        new Promise((e, n) => {
                            const i = new URLSearchParams(t).get('origin'),
                                s = (0, _i.isReactNative)()
                                    ? { headers: { origin: i } }
                                    : { rejectUnauthorized: ((a = t), !new RegExp('wss?://localhost(:d{2,5})?').test(a)) },
                                o = new zi(t, [], s)
                            var a
                            typeof WebSocket < 'u' ||
                            (typeof r.g < 'u' && typeof r.g.WebSocket < 'u') ||
                            (typeof window < 'u' && typeof window.WebSocket < 'u') ||
                            (typeof self < 'u' && typeof self.WebSocket < 'u')
                                ? (o.onerror = (t) => {
                                      const e = t
                                      n(this.emitError(e.error))
                                  })
                                : o.on('error', (t) => {
                                      n(this.emitError(t))
                                  }),
                                (o.onopen = () => {
                                    this.onOpen(o), e(o)
                                })
                        })
                    )
                }
                onOpen(t) {
                    ;(t.onmessage = (t) => this.onPayload(t)),
                        (t.onclose = (t) => this.onClose(t)),
                        (this.socket = t),
                        (this.registering = !1),
                        this.events.emit('open')
                }
                onClose(t) {
                    ;(this.socket = void 0), (this.registering = !1), this.events.emit('close', t)
                }
                onPayload(t) {
                    if (typeof t.data > 'u') return
                    const e = 'string' == typeof t.data ? On(t.data) : t.data
                    this.events.emit('payload', e)
                }
                onError(t, e) {
                    const r = this.parseError(e),
                        n = Oi(t, r.message || r.toString())
                    this.events.emit('payload', n)
                }
                parseError(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url
                    return wi(t, qi(e), 'WS')
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(t) {
                    const e = this.parseError(
                        new Error((null === t || void 0 === t ? void 0 : t.message) || 'WebSocket connection failed for host: '.concat(qi(this.url)))
                    )
                    return this.events.emit('register_error', e), e
                }
            }
            var Bi = r(3108),
                Ki = r.n(Bi),
                Vi = r(8117),
                Fi = r.n(Vi)
            var Wi = function (t, e) {
                    if (t.length >= 255) throw new TypeError('Alphabet too long')
                    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255
                    for (var i = 0; i < t.length; i++) {
                        var s = t.charAt(i),
                            o = s.charCodeAt(0)
                        if (255 !== r[o]) throw new TypeError(s + ' is ambiguous')
                        r[o] = i
                    }
                    var a = t.length,
                        c = t.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        h = Math.log(256) / Math.log(a)
                    function l(t) {
                        if ('string' != typeof t) throw new TypeError('Expected String')
                        if (0 === t.length) return new Uint8Array()
                        var e = 0
                        if (' ' !== t[e]) {
                            for (var n = 0, i = 0; t[e] === c; ) n++, e++
                            for (var s = ((t.length - e) * u + 1) >>> 0, o = new Uint8Array(s); t[e]; ) {
                                var h = r[t.charCodeAt(e)]
                                if (255 === h) return
                                for (var l = 0, f = s - 1; (0 !== h || l < i) && -1 !== f; f--, l++)
                                    (h += (a * o[f]) >>> 0), (o[f] = h % 256 >>> 0), (h = (h / 256) >>> 0)
                                if (0 !== h) throw new Error('Non-zero carry')
                                ;(i = l), e++
                            }
                            if (' ' !== t[e]) {
                                for (var p = s - i; p !== s && 0 === o[p]; ) p++
                                for (var d = new Uint8Array(n + (s - p)), g = n; p !== s; ) d[g++] = o[p++]
                                return d
                            }
                        }
                    }
                    return {
                        encode: function (e) {
                            if (
                                (e instanceof Uint8Array ||
                                    (ArrayBuffer.isView(e)
                                        ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                                        : Array.isArray(e) && (e = Uint8Array.from(e))),
                                !(e instanceof Uint8Array))
                            )
                                throw new TypeError('Expected Uint8Array')
                            if (0 === e.length) return ''
                            for (var r = 0, n = 0, i = 0, s = e.length; i !== s && 0 === e[i]; ) i++, r++
                            for (var o = ((s - i) * h + 1) >>> 0, u = new Uint8Array(o); i !== s; ) {
                                for (var l = e[i], f = 0, p = o - 1; (0 !== l || f < n) && -1 !== p; p--, f++)
                                    (l += (256 * u[p]) >>> 0), (u[p] = l % a >>> 0), (l = (l / a) >>> 0)
                                if (0 !== l) throw new Error('Non-zero carry')
                                ;(n = f), i++
                            }
                            for (var d = o - n; d !== o && 0 === u[d]; ) d++
                            for (var g = c.repeat(r); d < o; ++d) g += t.charAt(u[d])
                            return g
                        },
                        decodeUnsafe: l,
                        decode: function (t) {
                            var r = l(t)
                            if (r) return r
                            throw new Error('Non-'.concat(e, ' character'))
                        }
                    }
                },
                Gi = Wi
            const Yi = (t) => {
                if (t instanceof Uint8Array && 'Uint8Array' === t.constructor.name) return t
                if (t instanceof ArrayBuffer) return new Uint8Array(t)
                if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                throw new Error('Unknown type, must be binary type')
            }
            class Ji {
                constructor(t, e, r) {
                    ;(this.name = t), (this.prefix = e), (this.baseEncode = r)
                }
                encode(t) {
                    if (t instanceof Uint8Array) return ''.concat(this.prefix).concat(this.baseEncode(t))
                    throw Error('Unknown type, must be binary type')
                }
            }
            class Qi {
                constructor(t, e, r) {
                    if (((this.name = t), (this.prefix = e), void 0 === e.codePointAt(0))) throw new Error('Invalid prefix character')
                    ;(this.prefixCodePoint = e.codePointAt(0)), (this.baseDecode = r)
                }
                decode(t) {
                    if ('string' == typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint)
                            throw Error(
                                'Unable to decode multibase string '
                                    .concat(JSON.stringify(t), ', ')
                                    .concat(this.name, ' decoder only supports inputs prefixed with ')
                                    .concat(this.prefix)
                            )
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error('Can only multibase decode strings')
                }
                or(t) {
                    return Xi(this, t)
                }
            }
            class $i {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return Xi(this, t)
                }
                decode(t) {
                    const e = t[0],
                        r = this.decoders[e]
                    if (r) return r.decode(t)
                    throw RangeError(
                        'Unable to decode multibase string '
                            .concat(JSON.stringify(t), ', only inputs prefixed with ')
                            .concat(Object.keys(this.decoders), ' are supported')
                    )
                }
            }
            const Xi = (t, e) => new $i({ ...(t.decoders || { [t.prefix]: t }), ...(e.decoders || { [e.prefix]: e }) })
            class Zi {
                constructor(t, e, r, n) {
                    ;(this.name = t),
                        (this.prefix = e),
                        (this.baseEncode = r),
                        (this.baseDecode = n),
                        (this.encoder = new Ji(t, e, r)),
                        (this.decoder = new Qi(t, e, n))
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const ts = (t) => {
                    let { name: e, prefix: r, encode: n, decode: i } = t
                    return new Zi(e, r, n, i)
                },
                es = (t) => {
                    let { prefix: e, name: r, alphabet: n } = t
                    const { encode: i, decode: s } = Gi(n, r)
                    return ts({ prefix: e, name: r, encode: i, decode: (t) => Yi(s(t)) })
                },
                rs = (t) => {
                    let { name: e, prefix: r, bitsPerChar: n, alphabet: i } = t
                    return ts({
                        prefix: r,
                        name: e,
                        encode: (t) =>
                            ((t, e, r) => {
                                const n = '=' === e[e.length - 1],
                                    i = (1 << r) - 1
                                let s = '',
                                    o = 0,
                                    a = 0
                                for (let c = 0; c < t.length; ++c) for (a = (a << 8) | t[c], o += 8; o > r; ) (o -= r), (s += e[i & (a >> o)])
                                if ((o && (s += e[i & (a << (r - o))]), n)) for (; (s.length * r) & 7; ) s += '='
                                return s
                            })(t, i, n),
                        decode: (t) =>
                            ((t, e, r, n) => {
                                const i = {}
                                for (let h = 0; h < e.length; ++h) i[e[h]] = h
                                let s = t.length
                                for (; '=' === t[s - 1]; ) --s
                                const o = new Uint8Array(((s * r) / 8) | 0)
                                let a = 0,
                                    c = 0,
                                    u = 0
                                for (let h = 0; h < s; ++h) {
                                    const e = i[t[h]]
                                    if (void 0 === e) throw new SyntaxError('Non-'.concat(n, ' character'))
                                    ;(c = (c << r) | e), (a += r), a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)))
                                }
                                if (a >= r || 255 & (c << (8 - a))) throw new SyntaxError('Unexpected end of data')
                                return o
                            })(t, i, n, e)
                    })
                },
                ns = ts({
                    prefix: '\0',
                    name: 'identity',
                    encode: (t) => ((t) => new TextDecoder().decode(t))(t),
                    decode: (t) => ((t) => new TextEncoder().encode(t))(t)
                })
            var is = Object.freeze({ __proto__: null, identity: ns })
            const ss = rs({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 })
            var os = Object.freeze({ __proto__: null, base2: ss })
            const as = rs({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 })
            var cs = Object.freeze({ __proto__: null, base8: as })
            const us = es({ prefix: '9', name: 'base10', alphabet: '0123456789' })
            var hs = Object.freeze({ __proto__: null, base10: us })
            const ls = rs({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
                fs = rs({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 })
            var ps = Object.freeze({ __proto__: null, base16: ls, base16upper: fs })
            const ds = rs({ prefix: 'b', name: 'base32', alphabet: 'abcdefghijklmnopqrstuvwxyz234567', bitsPerChar: 5 }),
                gs = rs({ prefix: 'B', name: 'base32upper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', bitsPerChar: 5 }),
                ys = rs({ prefix: 'c', name: 'base32pad', alphabet: 'abcdefghijklmnopqrstuvwxyz234567=', bitsPerChar: 5 }),
                vs = rs({ prefix: 'C', name: 'base32padupper', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=', bitsPerChar: 5 }),
                ms = rs({ prefix: 'v', name: 'base32hex', alphabet: '0123456789abcdefghijklmnopqrstuv', bitsPerChar: 5 }),
                ws = rs({ prefix: 'V', name: 'base32hexupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV', bitsPerChar: 5 }),
                _s = rs({ prefix: 't', name: 'base32hexpad', alphabet: '0123456789abcdefghijklmnopqrstuv=', bitsPerChar: 5 }),
                bs = rs({ prefix: 'T', name: 'base32hexpadupper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=', bitsPerChar: 5 }),
                Es = rs({ prefix: 'h', name: 'base32z', alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769', bitsPerChar: 5 })
            var Ss = Object.freeze({
                __proto__: null,
                base32: ds,
                base32upper: gs,
                base32pad: ys,
                base32padupper: vs,
                base32hex: ms,
                base32hexupper: ws,
                base32hexpad: _s,
                base32hexpadupper: bs,
                base32z: Es
            })
            const Is = es({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
                Os = es({ prefix: 'K', name: 'base36upper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' })
            var Ps = Object.freeze({ __proto__: null, base36: Is, base36upper: Os })
            const xs = es({ name: 'base58btc', prefix: 'z', alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz' }),
                As = es({ name: 'base58flickr', prefix: 'Z', alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ' })
            var Rs = Object.freeze({ __proto__: null, base58btc: xs, base58flickr: As })
            const Ns = rs({
                    prefix: 'm',
                    name: 'base64',
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                    bitsPerChar: 6
                }),
                Ts = rs({
                    prefix: 'M',
                    name: 'base64pad',
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    bitsPerChar: 6
                }),
                Cs = rs({
                    prefix: 'u',
                    name: 'base64url',
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
                    bitsPerChar: 6
                }),
                js = rs({
                    prefix: 'U',
                    name: 'base64urlpad',
                    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
                    bitsPerChar: 6
                })
            var Ls = Object.freeze({ __proto__: null, base64: Ns, base64pad: Ts, base64url: Cs, base64urlpad: js })
            const Us = Array.from(
                    '\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42'
                ),
                Ms = Us.reduce((t, e, r) => ((t[r] = e), t), []),
                Ds = Us.reduce((t, e, r) => ((t[e.codePointAt(0)] = r), t), [])
            const ks = ts({
                prefix: '\ud83d\ude80',
                name: 'base256emoji',
                encode: function (t) {
                    return t.reduce((t, e) => (t += Ms[e]), '')
                },
                decode: function (t) {
                    const e = []
                    for (const r of t) {
                        const t = Ds[r.codePointAt(0)]
                        if (void 0 === t) throw new Error('Non-base256emoji character: '.concat(r))
                        e.push(t)
                    }
                    return new Uint8Array(e)
                }
            })
            var qs = Object.freeze({ __proto__: null, base256emoji: ks }),
                zs = function t(e, r, n) {
                    r = r || []
                    for (var i = (n = n || 0); e >= Ks; ) (r[n++] = (255 & e) | Hs), (e /= 128)
                    for (; e & Bs; ) (r[n++] = (255 & e) | Hs), (e >>>= 7)
                    return (r[n] = 0 | e), (t.bytes = n - i + 1), r
                },
                Hs = 128,
                Bs = -128,
                Ks = Math.pow(2, 31)
            var Vs = function t(e, r) {
                    var n,
                        i = 0,
                        s = 0,
                        o = (r = r || 0),
                        a = e.length
                    do {
                        if (o >= a) throw ((t.bytes = 0), new RangeError('Could not decode varint'))
                        ;(n = e[o++]), (i += s < 28 ? (n & Ws) << s : (n & Ws) * Math.pow(2, s)), (s += 7)
                    } while (n >= Fs)
                    return (t.bytes = o - r), i
                },
                Fs = 128,
                Ws = 127
            var Gs = Math.pow(2, 7),
                Ys = Math.pow(2, 14),
                Js = Math.pow(2, 21),
                Qs = Math.pow(2, 28),
                $s = Math.pow(2, 35),
                Xs = Math.pow(2, 42),
                Zs = Math.pow(2, 49),
                to = Math.pow(2, 56),
                eo = Math.pow(2, 63),
                ro = {
                    encode: zs,
                    decode: Vs,
                    encodingLength: function (t) {
                        return t < Gs ? 1 : t < Ys ? 2 : t < Js ? 3 : t < Qs ? 4 : t < $s ? 5 : t < Xs ? 6 : t < Zs ? 7 : t < to ? 8 : t < eo ? 9 : 10
                    }
                },
                no = ro
            const io = function (t, e) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                    return no.encode(t, e, r), e
                },
                so = (t) => no.encodingLength(t),
                oo = (t, e) => {
                    const r = e.byteLength,
                        n = so(t),
                        i = n + so(r),
                        s = new Uint8Array(i + r)
                    return io(t, s, 0), io(r, s, n), s.set(e, i), new ao(t, r, e, s)
                }
            class ao {
                constructor(t, e, r, n) {
                    ;(this.code = t), (this.size = e), (this.digest = r), (this.bytes = n)
                }
            }
            const co = (t) => {
                let { name: e, code: r, encode: n } = t
                return new uo(e, r, n)
            }
            class uo {
                constructor(t, e, r) {
                    ;(this.name = t), (this.code = e), (this.encode = r)
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const e = this.encode(t)
                        return e instanceof Uint8Array ? oo(this.code, e) : e.then((t) => oo(this.code, t))
                    }
                    throw Error('Unknown type, must be binary type')
                }
            }
            const ho = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)),
                lo = co({ name: 'sha2-256', code: 18, encode: ho('SHA-256') }),
                fo = co({ name: 'sha2-512', code: 19, encode: ho('SHA-512') })
            Object.freeze({ __proto__: null, sha256: lo, sha512: fo })
            const po = Yi,
                go = { code: 0, name: 'identity', encode: po, digest: (t) => oo(0, po(t)) }
            Object.freeze({ __proto__: null, identity: go })
            new TextEncoder(), new TextDecoder()
            const yo = { ...is, ...os, ...cs, ...hs, ...ps, ...Ss, ...Ps, ...Rs, ...Ls, ...qs }
            function vo(t) {
                return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
            }
            function mo(t, e, r, n) {
                return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } }
            }
            const wo = mo(
                    'utf8',
                    'u',
                    (t) => 'u' + new TextDecoder('utf8').decode(t),
                    (t) => new TextEncoder().encode(t.substring(1))
                ),
                _o = mo(
                    'ascii',
                    'a',
                    (t) => {
                        let e = 'a'
                        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
                        return e
                    },
                    (t) => {
                        const e = (function () {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                            return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe
                                ? vo(globalThis.Buffer.allocUnsafe(t))
                                : new Uint8Array(t)
                        })((t = t.substring(1)).length)
                        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r)
                        return e
                    }
                ),
                bo = { utf8: wo, 'utf-8': wo, hex: yo.base16, latin1: _o, ascii: _o, binary: _o, ...yo }
            const Eo = 'core',
                So = ''.concat('wc', '@2:').concat(Eo, ':'),
                Io = 'error',
                Oo = { database: ':memory:' },
                Po = 'client_ed25519_seed',
                xo = ge.ONE_DAY,
                Ao = ge.SIX_HOURS,
                Ro = 'wss://relay.walletconnect.com',
                No = 'wss://relay.walletconnect.org',
                To = 'relayer_message',
                Co = 'relayer_message_ack',
                jo = 'relayer_connect',
                Lo = 'relayer_disconnect',
                Uo = 'relayer_error',
                Mo = 'relayer_connection_stalled',
                Do = 'relayer_publish',
                ko = 'payload',
                qo = 'connect',
                zo = 'disconnect',
                Ho = 'error',
                Bo = ge.ONE_SECOND,
                Ko = 'subscription_created',
                Vo = 'subscription_deleted',
                Fo = 'subscription_sync',
                Wo = 'subscription_resubscribed',
                Go = 1e3 * ge.FIVE_SECONDS,
                Yo = {
                    wc_pairingDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1001 } },
                    wc_pairingPing: {
                        req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1002 },
                        res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1003 }
                    },
                    unregistered_method: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 0 } }
                },
                Jo = 'pairing_create',
                Qo = 'pairing_expire',
                $o = 'pairing_delete',
                Xo = 'pairing_ping',
                Zo = 'history_created',
                ta = 'history_updated',
                ea = 'history_deleted',
                ra = 'history_sync',
                na = 'expirer_created',
                ia = 'expirer_deleted',
                sa = 'expirer_expired',
                oa = 'expirer_sync',
                aa = 'verify-api',
                ca = 'https://verify.walletconnect.com',
                ua = 'https://verify.walletconnect.org',
                ha = [ca, ua]
            class la {
                constructor(t, e) {
                    ;(this.core = t),
                        (this.logger = e),
                        (this.keychain = new Map()),
                        (this.name = 'keychain'),
                        (this.version = '0.3'),
                        (this.initialized = !1),
                        (this.storagePrefix = So),
                        (this.init = async () => {
                            if (!this.initialized) {
                                const t = await this.getKeyChain()
                                typeof t < 'u' && (this.keychain = t), (this.initialized = !0)
                            }
                        }),
                        (this.has = (t) => (this.isInitialized(), this.keychain.has(t))),
                        (this.set = async (t, e) => {
                            this.isInitialized(), this.keychain.set(t, e), await this.persist()
                        }),
                        (this.get = (t) => {
                            this.isInitialized()
                            const e = this.keychain.get(t)
                            if (typeof e > 'u') {
                                const { message: e } = Nr('NO_MATCHING_KEY', ''.concat(this.name, ': ').concat(t))
                                throw new Error(e)
                            }
                            return e
                        }),
                        (this.del = async (t) => {
                            this.isInitialized(), this.keychain.delete(t), await this.persist()
                        }),
                        (this.core = t),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name))
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
                }
                async setKeyChain(t) {
                    await this.core.storage.setItem(this.storageKey, rr(t))
                }
                async getKeyChain() {
                    const t = await this.core.storage.getItem(this.storageKey)
                    return typeof t < 'u' ? nr(t) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
            }
            class fa {
                constructor(t, e, r) {
                    ;(this.core = t),
                        (this.logger = e),
                        (this.name = 'crypto'),
                        (this.initialized = !1),
                        (this.init = async () => {
                            this.initialized || (await this.keychain.init(), (this.initialized = !0))
                        }),
                        (this.hasKeys = (t) => (this.isInitialized(), this.keychain.has(t))),
                        (this.getClientId = async () => {
                            this.isInitialized()
                            return ci(ui(await this.getClientSeed()).publicKey)
                        }),
                        (this.generateKeyPair = () => {
                            this.isInitialized()
                            const t = (function () {
                                const t = S.Au()
                                return { privateKey: ee(t.secretKey, Ie), publicKey: ee(t.publicKey, Ie) }
                            })()
                            return this.setPrivateKey(t.publicKey, t.privateKey)
                        }),
                        (this.signJWT = async (t) => {
                            this.isInitialized()
                            const e = ui(await this.getClientSeed()),
                                r = je(),
                                n = xo
                            return await hi(r, t, n, e)
                        }),
                        (this.generateSharedKey = (t, e, r) => {
                            this.isInitialized()
                            const n = (function (t, e) {
                                const r = S.gi(te(t, Ie), te(e, Ie), !0)
                                return ee(new _.t(E.mE, r).expand(Ce), Ie)
                            })(this.getPrivateKey(t), e)
                            return this.setSymKey(n, r)
                        }),
                        (this.setSymKey = async (t, e) => {
                            this.isInitialized()
                            const r =
                                e ||
                                (function (t) {
                                    return ee((0, E.vp)(te(t, Ie)), Ie)
                                })(t)
                            return await this.keychain.set(r, t), r
                        }),
                        (this.deleteKeyPair = async (t) => {
                            this.isInitialized(), await this.keychain.del(t)
                        }),
                        (this.deleteSymKey = async (t) => {
                            this.isInitialized(), await this.keychain.del(t)
                        }),
                        (this.encode = async (t, e, r) => {
                            this.isInitialized()
                            const n = ke(r),
                                i = Pn(e)
                            if (qe(n)) {
                                const e = n.senderPublicKey,
                                    r = n.receiverPublicKey
                                t = await this.generateSharedKey(e, r)
                            }
                            const s = this.getSymKey(t),
                                { type: o, senderPublicKey: a } = n
                            return Me({ type: o, symKey: s, message: i, senderPublicKey: a })
                        }),
                        (this.decode = async (t, e, r) => {
                            this.isInitialized()
                            const n = (function (t, e) {
                                const r = De(t)
                                return ke({
                                    type: Ue(r.type),
                                    senderPublicKey: typeof r.senderPublicKey < 'u' ? ee(r.senderPublicKey, Ie) : void 0,
                                    receiverPublicKey: null === e || void 0 === e ? void 0 : e.receiverPublicKey
                                })
                            })(e, r)
                            if (qe(n)) {
                                const e = n.receiverPublicKey,
                                    r = n.senderPublicKey
                                t = await this.generateSharedKey(e, r)
                            }
                            try {
                                const r = (function (t) {
                                    const e = new w.OK(te(t.symKey, Ie)),
                                        { sealed: r, iv: n } = De(t.encoded),
                                        i = e.open(n, r)
                                    if (null === i) throw new Error('Failed to decrypt')
                                    return ee(i, Pe)
                                })({ symKey: this.getSymKey(t), encoded: e })
                                return On(r)
                            } catch (Ln) {
                                this.logger.error(
                                    "Failed to decode message from topic: '".concat(t, "', clientId: '").concat(await this.getClientId(), "'")
                                ),
                                    this.logger.error(Ln)
                            }
                        }),
                        (this.getPayloadType = (t) => Ue(De(t).type)),
                        (this.getPayloadSenderPublicKey = (t) => {
                            const e = De(t)
                            return e.senderPublicKey ? ee(e.senderPublicKey, Ie) : void 0
                        }),
                        (this.core = t),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        (this.keychain = r || new la(this.core, this.logger))
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                async setPrivateKey(t, e) {
                    return await this.keychain.set(t, e), t
                }
                getPrivateKey(t) {
                    return this.keychain.get(t)
                }
                async getClientSeed() {
                    let t = ''
                    try {
                        t = this.keychain.get(Po)
                    } catch {
                        ;(t = je()), await this.keychain.set(Po, t)
                    }
                    return (function (t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'utf8'
                        const r = bo[e]
                        if (!r) throw new Error('Unsupported encoding "'.concat(e, '"'))
                        return ('utf8' !== e && 'utf-8' !== e) || null == globalThis.Buffer || null == globalThis.Buffer.from
                            ? r.decoder.decode(''.concat(r.prefix).concat(t))
                            : vo(globalThis.Buffer.from(t, 'utf-8'))
                    })(t, 'base16')
                }
                getSymKey(t) {
                    return this.keychain.get(t)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
            }
            class pa extends zn {
                constructor(t, e) {
                    super(t, e),
                        (this.logger = t),
                        (this.core = e),
                        (this.messages = new Map()),
                        (this.name = 'messages'),
                        (this.version = '0.3'),
                        (this.initialized = !1),
                        (this.storagePrefix = So),
                        (this.init = async () => {
                            if (!this.initialized) {
                                this.logger.trace('Initialized')
                                try {
                                    const t = await this.getRelayerMessages()
                                    typeof t < 'u' && (this.messages = t),
                                        this.logger.debug('Successfully Restored records for '.concat(this.name)),
                                        this.logger.trace({ type: 'method', method: 'restore', size: this.messages.size })
                                } catch (t) {
                                    this.logger.debug('Failed to Restore records for '.concat(this.name)), this.logger.error(t)
                                } finally {
                                    this.initialized = !0
                                }
                            }
                        }),
                        (this.set = async (t, e) => {
                            this.isInitialized()
                            const r = Le(e)
                            let n = this.messages.get(t)
                            return typeof n > 'u' && (n = {}), typeof n[r] < 'u' || ((n[r] = e), this.messages.set(t, n), await this.persist()), r
                        }),
                        (this.get = (t) => {
                            this.isInitialized()
                            let e = this.messages.get(t)
                            return typeof e > 'u' && (e = {}), e
                        }),
                        (this.has = (t, e) => {
                            this.isInitialized()
                            return typeof this.get(t)[Le(e)] < 'u'
                        }),
                        (this.del = async (t) => {
                            this.isInitialized(), this.messages.delete(t), await this.persist()
                        }),
                        (this.logger = (0, Mn.generateChildLogger)(t, this.name)),
                        (this.core = e)
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
                }
                async setRelayerMessages(t) {
                    await this.core.storage.setItem(this.storageKey, rr(t))
                }
                async getRelayerMessages() {
                    const t = await this.core.storage.getItem(this.storageKey)
                    return typeof t < 'u' ? nr(t) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
            }
            class da extends Hn {
                constructor(t, e) {
                    super(t, e),
                        (this.relayer = t),
                        (this.logger = e),
                        (this.events = new v.EventEmitter()),
                        (this.name = 'publisher'),
                        (this.queue = new Map()),
                        (this.publishTimeout = (0, ge.toMiliseconds)(2 * ge.TEN_SECONDS)),
                        (this.needsTransportRestart = !1),
                        (this.publish = async (t, e, r) => {
                            var n
                            this.logger.debug('Publishing Payload'),
                                this.logger.trace({ type: 'method', method: 'publish', params: { topic: t, message: e, opts: r } })
                            try {
                                const i = (null === r || void 0 === r ? void 0 : r.ttl) || Ao,
                                    s = fr(r),
                                    o = (null === r || void 0 === r ? void 0 : r.prompt) || !1,
                                    a = (null === r || void 0 === r ? void 0 : r.tag) || 0,
                                    c = (null === r || void 0 === r ? void 0 : r.id) || Ei().toString(),
                                    u = { topic: t, message: e, opts: { ttl: i, relay: s, prompt: o, tag: a, id: c } },
                                    h = setTimeout(() => this.queue.set(c, u), this.publishTimeout)
                                try {
                                    await await sr(
                                        this.rpcPublish(t, e, i, s, o, a, c),
                                        this.publishTimeout,
                                        'Failed to publish payload, please try again. id:'.concat(c, ' tag:').concat(a)
                                    ),
                                        this.removeRequestFromQueue(c),
                                        this.relayer.events.emit(Do, u)
                                } catch (Hn) {
                                    if (
                                        (this.logger.debug('Publishing Payload stalled'),
                                        (this.needsTransportRestart = !0),
                                        null != (n = null === r || void 0 === r ? void 0 : r.internal) && n.throwOnFailedPublish)
                                    )
                                        throw (this.removeRequestFromQueue(c), Hn)
                                    return
                                } finally {
                                    clearTimeout(h)
                                }
                                this.logger.debug('Successfully Published Payload'),
                                    this.logger.trace({ type: 'method', method: 'publish', params: { topic: t, message: e, opts: r } })
                            } catch (zn) {
                                throw (this.logger.debug('Failed to Publish Payload'), this.logger.error(zn), zn)
                            }
                        }),
                        (this.on = (t, e) => {
                            this.events.on(t, e)
                        }),
                        (this.once = (t, e) => {
                            this.events.once(t, e)
                        }),
                        (this.off = (t, e) => {
                            this.events.off(t, e)
                        }),
                        (this.removeListener = (t, e) => {
                            this.events.removeListener(t, e)
                        }),
                        (this.relayer = t),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        this.registerEventListeners()
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                rpcPublish(t, e, r, n, i, s, o) {
                    var a, c, u, h
                    const l = { method: pr(n.protocol).publish, params: { topic: t, message: e, ttl: r, prompt: i, tag: s }, id: o }
                    return (
                        Lr(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt),
                        Lr(null == (u = l.params) ? void 0 : u.tag) && (null == (h = l.params) || delete h.tag),
                        this.logger.debug('Outgoing Relay Payload'),
                        this.logger.trace({ type: 'message', direction: 'outgoing', request: l }),
                        this.relayer.request(l)
                    )
                }
                removeRequestFromQueue(t) {
                    this.queue.delete(t)
                }
                checkQueue() {
                    this.queue.forEach(async (t) => {
                        const { topic: e, message: r, opts: n } = t
                        await this.publish(e, r, n)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) return (this.needsTransportRestart = !1), void this.relayer.events.emit(Mo)
                        this.checkQueue()
                    }),
                        this.relayer.on(Co, (t) => {
                            this.removeRequestFromQueue(t.id.toString())
                        })
                }
            }
            class ga {
                constructor() {
                    ;(this.map = new Map()),
                        (this.set = (t, e) => {
                            const r = this.get(t)
                            this.exists(t, e) || this.map.set(t, [...r, e])
                        }),
                        (this.get = (t) => this.map.get(t) || []),
                        (this.exists = (t, e) => this.get(t).includes(e)),
                        (this.delete = (t, e) => {
                            if (typeof e > 'u') return void this.map.delete(t)
                            if (!this.map.has(t)) return
                            const r = this.get(t)
                            if (!this.exists(t, e)) return
                            const n = r.filter((t) => t !== e)
                            n.length ? this.map.set(t, n) : this.map.delete(t)
                        }),
                        (this.clear = () => {
                            this.map.clear()
                        })
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var ya = Object.defineProperty,
                va = Object.defineProperties,
                ma = Object.getOwnPropertyDescriptors,
                wa = Object.getOwnPropertySymbols,
                _a = Object.prototype.hasOwnProperty,
                ba = Object.prototype.propertyIsEnumerable,
                Ea = (t, e, r) => (e in t ? ya(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                Sa = (t, e) => {
                    for (var r in e || (e = {})) _a.call(e, r) && Ea(t, r, e[r])
                    if (wa) for (var r of wa(e)) ba.call(e, r) && Ea(t, r, e[r])
                    return t
                },
                Ia = (t, e) => va(t, ma(e))
            class Oa extends Vn {
                constructor(t, e) {
                    super(t, e),
                        (this.relayer = t),
                        (this.logger = e),
                        (this.subscriptions = new Map()),
                        (this.topicMap = new ga()),
                        (this.events = new v.EventEmitter()),
                        (this.name = 'subscription'),
                        (this.version = '0.3'),
                        (this.pending = new Map()),
                        (this.cached = []),
                        (this.initialized = !1),
                        (this.pendingSubscriptionWatchLabel = 'pending_sub_watch_label'),
                        (this.pollingInterval = 20),
                        (this.storagePrefix = So),
                        (this.subscribeTimeout = 1e4),
                        (this.restartInProgress = !1),
                        (this.batchSubscribeTopicsLimit = 500),
                        (this.init = async () => {
                            this.initialized ||
                                (this.logger.trace('Initialized'),
                                this.registerEventListeners(),
                                (this.clientId = await this.relayer.core.crypto.getClientId()))
                        }),
                        (this.subscribe = async (t, e) => {
                            await this.restartToComplete(),
                                this.isInitialized(),
                                this.logger.debug('Subscribing Topic'),
                                this.logger.trace({ type: 'method', method: 'subscribe', params: { topic: t, opts: e } })
                            try {
                                const r = fr(e),
                                    n = { topic: t, relay: r }
                                this.pending.set(t, n)
                                const i = await this.rpcSubscribe(t, r)
                                return (
                                    this.onSubscribe(i, n),
                                    this.logger.debug('Successfully Subscribed Topic'),
                                    this.logger.trace({ type: 'method', method: 'subscribe', params: { topic: t, opts: e } }),
                                    i
                                )
                            } catch (r) {
                                throw (this.logger.debug('Failed to Subscribe Topic'), this.logger.error(r), r)
                            }
                        }),
                        (this.unsubscribe = async (t, e) => {
                            await this.restartToComplete(),
                                this.isInitialized(),
                                typeof (null === e || void 0 === e ? void 0 : e.id) < 'u'
                                    ? await this.unsubscribeById(t, e.id, e)
                                    : await this.unsubscribeByTopic(t, e)
                        }),
                        (this.isSubscribed = async (t) => {
                            if (this.topics.includes(t)) return !0
                            const e = ''.concat(this.pendingSubscriptionWatchLabel, '_').concat(t)
                            return await new Promise((r, n) => {
                                const i = new ge.Watch()
                                i.start(e)
                                const s = setInterval(() => {
                                    !this.pending.has(t) && this.topics.includes(t) && (clearInterval(s), i.stop(e), r(!0)),
                                        i.elapsed(e) >= Go && (clearInterval(s), i.stop(e), n(new Error('Subscription resolution timeout')))
                                }, this.pollingInterval)
                            }).catch(() => !1)
                        }),
                        (this.on = (t, e) => {
                            this.events.on(t, e)
                        }),
                        (this.once = (t, e) => {
                            this.events.once(t, e)
                        }),
                        (this.off = (t, e) => {
                            this.events.off(t, e)
                        }),
                        (this.removeListener = (t, e) => {
                            this.events.removeListener(t, e)
                        }),
                        (this.restart = async () => {
                            ;(this.restartInProgress = !0), await this.restore(), await this.reset(), (this.restartInProgress = !1)
                        }),
                        (this.relayer = t),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        (this.clientId = '')
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + '//' + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(t, e) {
                    let r = !1
                    try {
                        r = this.getSubscription(t).topic === e
                    } catch {}
                    return r
                }
                onEnable() {
                    ;(this.cached = []), (this.initialized = !0)
                }
                onDisable() {
                    ;(this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(t, e) {
                    const r = this.topicMap.get(t)
                    await Promise.all(r.map(async (r) => await this.unsubscribeById(t, r, e)))
                }
                async unsubscribeById(t, e, r) {
                    this.logger.debug('Unsubscribing Topic'),
                        this.logger.trace({ type: 'method', method: 'unsubscribe', params: { topic: t, id: e, opts: r } })
                    try {
                        const n = fr(r)
                        await this.rpcUnsubscribe(t, e, n)
                        const i = Tr('USER_DISCONNECTED', ''.concat(this.name, ', ').concat(t))
                        await this.onUnsubscribe(t, e, i),
                            this.logger.debug('Successfully Unsubscribed Topic'),
                            this.logger.trace({ type: 'method', method: 'unsubscribe', params: { topic: t, id: e, opts: r } })
                    } catch (n) {
                        throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(n), n)
                    }
                }
                async rpcSubscribe(t, e) {
                    const r = { method: pr(e.protocol).subscribe, params: { topic: t } }
                    this.logger.debug('Outgoing Relay Payload'), this.logger.trace({ type: 'payload', direction: 'outgoing', request: r })
                    try {
                        await await sr(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug('Outgoing Relay Subscribe Payload stalled'), this.relayer.events.emit(Mo)
                    }
                    return Le(t + this.clientId)
                }
                async rpcBatchSubscribe(t) {
                    if (!t.length) return
                    const e = { method: pr(t[0].relay.protocol).batchSubscribe, params: { topics: t.map((t) => t.topic) } }
                    this.logger.debug('Outgoing Relay Payload'), this.logger.trace({ type: 'payload', direction: 'outgoing', request: e })
                    try {
                        return await await sr(this.relayer.request(e), this.subscribeTimeout)
                    } catch {
                        this.logger.debug('Outgoing Relay Payload stalled'), this.relayer.events.emit(Mo)
                    }
                }
                rpcUnsubscribe(t, e, r) {
                    const n = { method: pr(r.protocol).unsubscribe, params: { topic: t, id: e } }
                    return (
                        this.logger.debug('Outgoing Relay Payload'),
                        this.logger.trace({ type: 'payload', direction: 'outgoing', request: n }),
                        this.relayer.request(n)
                    )
                }
                onSubscribe(t, e) {
                    this.setSubscription(t, Ia(Sa({}, e), { id: t })), this.pending.delete(e.topic)
                }
                onBatchSubscribe(t) {
                    t.length &&
                        t.forEach((t) => {
                            this.setSubscription(t.id, Sa({}, t)), this.pending.delete(t.topic)
                        })
                }
                async onUnsubscribe(t, e, r) {
                    this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, r), await this.relayer.messages.del(t)
                }
                async setRelayerSubscriptions(t) {
                    await this.relayer.core.storage.setItem(this.storageKey, t)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(t, e) {
                    this.subscriptions.has(t) ||
                        (this.logger.debug('Setting subscription'),
                        this.logger.trace({ type: 'method', method: 'setSubscription', id: t, subscription: e }),
                        this.addSubscription(t, e))
                }
                addSubscription(t, e) {
                    this.subscriptions.set(t, Sa({}, e)), this.topicMap.set(e.topic, t), this.events.emit(Ko, e)
                }
                getSubscription(t) {
                    this.logger.debug('Getting subscription'), this.logger.trace({ type: 'method', method: 'getSubscription', id: t })
                    const e = this.subscriptions.get(t)
                    if (!e) {
                        const { message: e } = Nr('NO_MATCHING_KEY', ''.concat(this.name, ': ').concat(t))
                        throw new Error(e)
                    }
                    return e
                }
                deleteSubscription(t, e) {
                    this.logger.debug('Deleting subscription'), this.logger.trace({ type: 'method', method: 'deleteSubscription', id: t, reason: e })
                    const r = this.getSubscription(t)
                    this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(Vo, Ia(Sa({}, r), { reason: e }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(Fo)
                }
                async reset() {
                    if (this.cached.length) {
                        const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit)
                        for (let e = 0; e < t; e++) {
                            const t = this.cached.splice(0, this.batchSubscribeTopicsLimit)
                            await this.batchSubscribe(t)
                        }
                    }
                    this.events.emit(Wo)
                }
                async restore() {
                    try {
                        const t = await this.getRelayerSubscriptions()
                        if (typeof t > 'u' || !t.length) return
                        if (this.subscriptions.size) {
                            const { message: t } = Nr('RESTORE_WILL_OVERRIDE', this.name)
                            throw (
                                (this.logger.error(t),
                                this.logger.error(''.concat(this.name, ': ').concat(JSON.stringify(this.values))),
                                new Error(t))
                            )
                        }
                        ;(this.cached = t),
                            this.logger.debug('Successfully Restored subscriptions for '.concat(this.name)),
                            this.logger.trace({ type: 'method', method: 'restore', subscriptions: this.values })
                    } catch (t) {
                        this.logger.debug('Failed to Restore subscriptions for '.concat(this.name)), this.logger.error(t)
                    }
                }
                async batchSubscribe(t) {
                    if (!t.length) return
                    const e = await this.rpcBatchSubscribe(t)
                    Cr(e) && this.onBatchSubscribe(e.map((e, r) => Ia(Sa({}, t[r]), { id: e })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return
                    const t = []
                    this.pending.forEach((e) => {
                        t.push(e)
                    }),
                        await this.batchSubscribe(t)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }),
                        this.relayer.on(jo, async () => {
                            await this.onConnect()
                        }),
                        this.relayer.on(Lo, () => {
                            this.onDisconnect()
                        }),
                        this.events.on(Ko, async (t) => {
                            const e = Ko
                            this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, data: t }), await this.persist()
                        }),
                        this.events.on(Vo, async (t) => {
                            const e = Vo
                            this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, data: t }), await this.persist()
                        })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress &&
                        (await new Promise((t) => {
                            const e = setInterval(() => {
                                this.restartInProgress || (clearInterval(e), t())
                            }, this.pollingInterval)
                        }))
                }
            }
            var Pa = Object.defineProperty,
                xa = Object.getOwnPropertySymbols,
                Aa = Object.prototype.hasOwnProperty,
                Ra = Object.prototype.propertyIsEnumerable,
                Na = (t, e, r) => (e in t ? Pa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r))
            class Ta extends Bn {
                constructor(t) {
                    super(t),
                        (this.protocol = 'wc'),
                        (this.version = 2),
                        (this.events = new v.EventEmitter()),
                        (this.name = 'relayer'),
                        (this.transportExplicitlyClosed = !1),
                        (this.initialized = !1),
                        (this.connectionAttemptInProgress = !1),
                        (this.connectionStatusPollingInterval = 20),
                        (this.staleConnectionErrors = ['socket hang up', 'socket stalled']),
                        (this.hasExperiencedNetworkDisruption = !1),
                        (this.requestsInFlight = new Map()),
                        (this.request = async (t) => {
                            this.logger.debug('Publishing Request Payload')
                            const e = t.id,
                                r = this.provider.request(t)
                            this.requestsInFlight.set(e, { promise: r, request: t })
                            try {
                                return await this.toEstablishConnection(), await r
                            } catch (n) {
                                throw (this.logger.debug('Failed to Publish Request'), this.logger.error(n), n)
                            } finally {
                                this.requestsInFlight.delete(e)
                            }
                        }),
                        (this.onPayloadHandler = (t) => {
                            this.onProviderPayload(t)
                        }),
                        (this.onConnectHandler = () => {
                            this.events.emit(jo)
                        }),
                        (this.onDisconnectHandler = () => {
                            this.onProviderDisconnect()
                        }),
                        (this.onProviderErrorHandler = (t) => {
                            this.logger.error(t),
                                this.events.emit(Uo, t),
                                this.logger.info('Fatal socket error received, closing transport'),
                                this.transportClose()
                        }),
                        (this.registerProviderListeners = () => {
                            this.provider.on(ko, this.onPayloadHandler),
                                this.provider.on(qo, this.onConnectHandler),
                                this.provider.on(zo, this.onDisconnectHandler),
                                this.provider.on(Ho, this.onProviderErrorHandler)
                        }),
                        (this.core = t.core),
                        (this.logger =
                            typeof t.logger < 'u' && 'string' != typeof t.logger
                                ? (0, Mn.generateChildLogger)(t.logger, this.name)
                                : (0, Mn.pino)((0, Mn.getDefaultLoggerOptions)({ level: t.logger || 'error' }))),
                        (this.messages = new pa(this.logger, t.core)),
                        (this.subscriber = new Oa(this, this.logger)),
                        (this.publisher = new da(this, this.logger)),
                        (this.relayUrl = (null === t || void 0 === t ? void 0 : t.relayUrl) || Ro),
                        (this.projectId = t.projectId),
                        (this.bundleId = (function () {
                            var t
                            try {
                                return Qe() && typeof r.g < 'u' && typeof (null == r.g ? void 0 : r.g.Application) < 'u'
                                    ? null == (t = r.g.Application)
                                        ? void 0
                                        : t.applicationId
                                    : void 0
                            } catch {
                                return
                            }
                        })()),
                        (this.provider = {})
                }
                async init() {
                    this.logger.trace('Initialized'),
                        this.registerEventListeners(),
                        await this.createProvider(),
                        await Promise.all([this.messages.init(), this.subscriber.init()])
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(
                            'Connection via '.concat(this.relayUrl, ' failed, attempting to connect via failover domain ').concat(No, '...')
                        ),
                            await this.restartTransport(No)
                    }
                    ;(this.initialized = !0),
                        setTimeout(async () => {
                            0 === this.subscriber.topics.length &&
                                (this.logger.info('No topics subscribed to after init, closing transport'),
                                await this.transportClose(),
                                (this.transportExplicitlyClosed = !1))
                        }, 1e4)
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(t, e, r) {
                    this.isInitialized(),
                        await this.publisher.publish(t, e, r),
                        await this.recordMessageEvent({ topic: t, message: e, publishedAt: Date.now() })
                }
                async subscribe(t, e) {
                    var r
                    this.isInitialized()
                    let n,
                        i = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || ''
                    if (i) return i
                    const s = (e) => {
                        e.topic === t && (this.subscriber.off(Ko, s), n())
                    }
                    return (
                        await Promise.all([
                            new Promise((t) => {
                                ;(n = t), this.subscriber.on(Ko, s)
                            }),
                            new Promise(async (r) => {
                                ;(i = await this.subscriber.subscribe(t, e)), r()
                            })
                        ]),
                        i
                    )
                }
                async unsubscribe(t, e) {
                    this.isInitialized(), await this.subscriber.unsubscribe(t, e)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async transportClose() {
                    this.requestsInFlight.size > 0 &&
                        (this.logger.debug('Waiting for all in-flight requests to finish before closing transport...'),
                        this.requestsInFlight.forEach(async (t) => {
                            await t.promise
                        })),
                        (this.transportExplicitlyClosed = !0),
                        this.hasExperiencedNetworkDisruption && this.connected
                            ? await sr(this.provider.disconnect(), 1e3, 'provider.disconnect()').catch(() => this.onProviderDisconnect())
                            : this.connected && (await this.provider.disconnect())
                }
                async transportOpen(t) {
                    if (((this.transportExplicitlyClosed = !1), await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress)) {
                        t && t !== this.relayUrl && ((this.relayUrl = t), await this.transportClose(), await this.createProvider()),
                            (this.connectionAttemptInProgress = !0)
                        try {
                            await Promise.all([
                                new Promise((t) => {
                                    if (!this.initialized) return t()
                                    this.subscriber.once(Wo, () => {
                                        t()
                                    })
                                }),
                                new Promise(async (t, e) => {
                                    try {
                                        await sr(this.provider.connect(), 1e4, 'Socket stalled when trying to connect to '.concat(this.relayUrl))
                                    } catch (r) {
                                        return void e(r)
                                    }
                                    t()
                                })
                            ])
                        } catch (e) {
                            this.logger.error(e)
                            const t = e
                            if (!this.isConnectionStalled(t.message)) throw e
                            this.provider.events.emit(zo)
                        } finally {
                            ;(this.connectionAttemptInProgress = !1), (this.hasExperiencedNetworkDisruption = !1)
                        }
                    }
                }
                async restartTransport(t) {
                    await this.confirmOnlineStateOrThrow(),
                        !this.connectionAttemptInProgress &&
                            ((this.relayUrl = t || this.relayUrl),
                            await this.transportClose(),
                            await this.createProvider(),
                            await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!(await Qr())) throw new Error('No internet connection detected. Please restart your network and try again.')
                }
                isConnectionStalled(t) {
                    return this.staleConnectionErrors.some((e) => t.includes(e))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners()
                    const t = await this.core.crypto.signJWT(this.relayUrl)
                    ;(this.provider = new ki(
                        new Hi(
                            tr({
                                sdkVersion: '2.11.1',
                                protocol: this.protocol,
                                version: this.version,
                                relayUrl: this.relayUrl,
                                projectId: this.projectId,
                                auth: t,
                                useOnCloseEvent: !0,
                                bundleId: this.bundleId
                            })
                        )
                    )),
                        this.registerProviderListeners()
                }
                async recordMessageEvent(t) {
                    const { topic: e, message: r } = t
                    await this.messages.set(e, r)
                }
                async shouldIgnoreMessageEvent(t) {
                    const { topic: e, message: r } = t
                    if (!r || 0 === r.length) return this.logger.debug('Ignoring invalid/empty message: '.concat(r)), !0
                    if (!(await this.subscriber.isSubscribed(e))) return this.logger.debug('Ignoring message for non-subscribed topic '.concat(e)), !0
                    const n = this.messages.has(e, r)
                    return n && this.logger.debug('Ignoring duplicate message: '.concat(r)), n
                }
                async onProviderPayload(t) {
                    if (
                        (this.logger.debug('Incoming Relay Payload'),
                        this.logger.trace({ type: 'payload', direction: 'incoming', payload: t }),
                        Li(t))
                    ) {
                        if (!t.method.endsWith('_subscription')) return
                        const e = t.params,
                            { topic: r, message: n, publishedAt: i } = e.data,
                            s = { topic: r, message: n, publishedAt: i }
                        this.logger.debug('Emitting Relayer Payload'),
                            this.logger.trace(
                                ((t, e) => {
                                    for (var r in e || (e = {})) Aa.call(e, r) && Na(t, r, e[r])
                                    if (xa) for (var r of xa(e)) Ra.call(e, r) && Na(t, r, e[r])
                                    return t
                                })({ type: 'event', event: e.id }, s)
                            ),
                            this.events.emit(e.id, s),
                            await this.acknowledgePayload(t),
                            await this.onMessageEvent(s)
                    } else Ui(t) && this.events.emit(Co, t)
                }
                async onMessageEvent(t) {
                    ;(await this.shouldIgnoreMessageEvent(t)) || (this.events.emit(To, t), await this.recordMessageEvent(t))
                }
                async acknowledgePayload(t) {
                    const e = Ii(t.id, !0)
                    await this.provider.connection.send(e)
                }
                unregisterProviderListeners() {
                    this.provider.off(ko, this.onPayloadHandler),
                        this.provider.off(qo, this.onConnectHandler),
                        this.provider.off(zo, this.onDisconnectHandler),
                        this.provider.off(Ho, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(Mo, () => {
                        this.restartTransport().catch((t) => this.logger.error(t))
                    })
                    let t = await Qr()
                    $r(async (e) => {
                        this.initialized &&
                            t !== e &&
                            ((t = e),
                            e
                                ? await this.restartTransport().catch((t) => this.logger.error(t))
                                : ((this.hasExperiencedNetworkDisruption = !0), await this.transportClose().catch((t) => this.logger.error(t))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(Lo), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed ||
                        (this.logger.info('attemptToReconnect called. Connecting...'),
                        setTimeout(
                            async () => {
                                await this.restartTransport().catch((t) => this.logger.error(t))
                            },
                            (0, ge.toMiliseconds)(Bo)
                        ))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
                async toEstablishConnection() {
                    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
                        if (this.connectionAttemptInProgress)
                            return await new Promise((t) => {
                                const e = setInterval(() => {
                                    this.connected && (clearInterval(e), t())
                                }, this.connectionStatusPollingInterval)
                            })
                        await this.restartTransport()
                    }
                }
            }
            var Ca = Object.defineProperty,
                ja = Object.getOwnPropertySymbols,
                La = Object.prototype.hasOwnProperty,
                Ua = Object.prototype.propertyIsEnumerable,
                Ma = (t, e, r) => (e in t ? Ca(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                Da = (t, e) => {
                    for (var r in e || (e = {})) La.call(e, r) && Ma(t, r, e[r])
                    if (ja) for (var r of ja(e)) Ua.call(e, r) && Ma(t, r, e[r])
                    return t
                }
            class ka extends Kn {
                constructor(t, e, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : So,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0
                    super(t, e, r, n),
                        (this.core = t),
                        (this.logger = e),
                        (this.name = r),
                        (this.map = new Map()),
                        (this.version = '0.3'),
                        (this.cached = []),
                        (this.initialized = !1),
                        (this.storagePrefix = So),
                        (this.init = async () => {
                            this.initialized ||
                                (this.logger.trace('Initialized'),
                                await this.restore(),
                                this.cached.forEach((t) => {
                                    this.getKey && null !== t && !Lr(t)
                                        ? this.map.set(this.getKey(t), t)
                                        : (function (t) {
                                                var e
                                                return null == (e = null === t || void 0 === t ? void 0 : t.proposer) ? void 0 : e.publicKey
                                            })(t)
                                          ? this.map.set(t.id, t)
                                          : (function (t) {
                                                return null === t || void 0 === t ? void 0 : t.topic
                                            })(t) && this.map.set(t.topic, t)
                                }),
                                (this.cached = []),
                                (this.initialized = !0))
                        }),
                        (this.set = async (t, e) => {
                            this.isInitialized(),
                                this.map.has(t)
                                    ? await this.update(t, e)
                                    : (this.logger.debug('Setting value'),
                                      this.logger.trace({ type: 'method', method: 'set', key: t, value: e }),
                                      this.map.set(t, e),
                                      await this.persist())
                        }),
                        (this.get = (t) => (
                            this.isInitialized(),
                            this.logger.debug('Getting value'),
                            this.logger.trace({ type: 'method', method: 'get', key: t }),
                            this.getData(t)
                        )),
                        (this.getAll = (t) => (
                            this.isInitialized(), t ? this.values.filter((e) => Object.keys(t).every((r) => Ki()(e[r], t[r]))) : this.values
                        )),
                        (this.update = async (t, e) => {
                            this.isInitialized(),
                                this.logger.debug('Updating value'),
                                this.logger.trace({ type: 'method', method: 'update', key: t, update: e })
                            const r = Da(Da({}, this.getData(t)), e)
                            this.map.set(t, r), await this.persist()
                        }),
                        (this.delete = async (t, e) => {
                            this.isInitialized(),
                                this.map.has(t) &&
                                    (this.logger.debug('Deleting value'),
                                    this.logger.trace({ type: 'method', method: 'delete', key: t, reason: e }),
                                    this.map.delete(t),
                                    await this.persist())
                        }),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        (this.storagePrefix = n),
                        (this.getKey = i)
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(t) {
                    const e = this.map.get(t)
                    if (!e) {
                        const { message: e } = Nr('NO_MATCHING_KEY', ''.concat(this.name, ': ').concat(t))
                        throw (this.logger.error(e), new Error(e))
                    }
                    return e
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        const t = await this.getDataStore()
                        if (typeof t > 'u' || !t.length) return
                        if (this.map.size) {
                            const { message: t } = Nr('RESTORE_WILL_OVERRIDE', this.name)
                            throw (this.logger.error(t), new Error(t))
                        }
                        ;(this.cached = t),
                            this.logger.debug('Successfully Restored value for '.concat(this.name)),
                            this.logger.trace({ type: 'method', method: 'restore', value: this.values })
                    } catch (t) {
                        this.logger.debug('Failed to Restore value for '.concat(this.name)), this.logger.error(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
            }
            class qa {
                constructor(t, e) {
                    ;(this.core = t),
                        (this.logger = e),
                        (this.name = 'pairing'),
                        (this.version = '0.3'),
                        (this.events = new (m())()),
                        (this.initialized = !1),
                        (this.storagePrefix = So),
                        (this.ignoredPayloadTypes = [Ae]),
                        (this.registeredMethods = []),
                        (this.init = async () => {
                            this.initialized ||
                                (await this.pairings.init(),
                                await this.cleanup(),
                                this.registerRelayerEvents(),
                                this.registerExpirerEvents(),
                                (this.initialized = !0),
                                this.logger.trace('Initialized'))
                        }),
                        (this.register = (t) => {
                            let { methods: e } = t
                            this.isInitialized(), (this.registeredMethods = [...new Set([...this.registeredMethods, ...e])])
                        }),
                        (this.create = async () => {
                            this.isInitialized()
                            const t = je(),
                                e = await this.core.crypto.setSymKey(t),
                                r = cr(ge.FIVE_MINUTES),
                                n = { protocol: 'irn' },
                                i = { topic: e, expiry: r, relay: n, active: !1 },
                                s = Ir({
                                    protocol: this.core.protocol,
                                    version: this.core.version,
                                    topic: e,
                                    symKey: t,
                                    relay: n,
                                    expiryTimestamp: r
                                })
                            return (
                                await this.pairings.set(e, i), await this.core.relayer.subscribe(e), this.core.expirer.set(e, r), { topic: e, uri: s }
                            )
                        }),
                        (this.pair = async (t) => {
                            this.isInitialized(), this.isValidPair(t)
                            const { topic: e, symKey: r, relay: n, expiryTimestamp: i } = Er(t.uri)
                            let s
                            if (this.pairings.keys.includes(e) && ((s = this.pairings.get(e)), s.active))
                                throw new Error('Pairing already exists: '.concat(e, '. Please try again with a new connection URI.'))
                            const o = i || cr(ge.FIVE_MINUTES),
                                a = { topic: e, relay: n, expiry: o, active: !1 }
                            return (
                                await this.pairings.set(e, a),
                                this.core.expirer.set(e, o),
                                t.activatePairing && (await this.activate({ topic: e })),
                                this.events.emit(Jo, a),
                                this.core.crypto.keychain.has(e) ||
                                    (await this.core.crypto.setSymKey(r, e), await this.core.relayer.subscribe(e, { relay: n })),
                                a
                            )
                        }),
                        (this.activate = async (t) => {
                            let { topic: e } = t
                            this.isInitialized()
                            const r = cr(ge.THIRTY_DAYS)
                            await this.pairings.update(e, { active: !0, expiry: r }), this.core.expirer.set(e, r)
                        }),
                        (this.ping = async (t) => {
                            this.isInitialized(), await this.isValidPing(t)
                            const { topic: e } = t
                            if (this.pairings.keys.includes(e)) {
                                const t = await this.sendRequest(e, 'wc_pairingPing', {}),
                                    { done: r, resolve: n, reject: i } = ir()
                                this.events.once(hr('pairing_ping', t), (t) => {
                                    let { error: e } = t
                                    e ? i(e) : n()
                                }),
                                    await r()
                            }
                        }),
                        (this.updateExpiry = async (t) => {
                            let { topic: e, expiry: r } = t
                            this.isInitialized(), await this.pairings.update(e, { expiry: r })
                        }),
                        (this.updateMetadata = async (t) => {
                            let { topic: e, metadata: r } = t
                            this.isInitialized(), await this.pairings.update(e, { peerMetadata: r })
                        }),
                        (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
                        (this.disconnect = async (t) => {
                            this.isInitialized(), await this.isValidDisconnect(t)
                            const { topic: e } = t
                            this.pairings.keys.includes(e) &&
                                (await this.sendRequest(e, 'wc_pairingDelete', Tr('USER_DISCONNECTED')), await this.deletePairing(e))
                        }),
                        (this.sendRequest = async (t, e, r) => {
                            const n = Si(e, r),
                                i = await this.core.crypto.encode(t, n),
                                s = Yo[e].req
                            return this.core.history.set(t, n), this.core.relayer.publish(t, i, s), n.id
                        }),
                        (this.sendResult = async (t, e, r) => {
                            const n = Ii(t, r),
                                i = await this.core.crypto.encode(e, n),
                                s = await this.core.history.get(e, t),
                                o = Yo[s.request.method].res
                            await this.core.relayer.publish(e, i, o), await this.core.history.resolve(n)
                        }),
                        (this.sendError = async (t, e, r) => {
                            const n = Oi(t, r),
                                i = await this.core.crypto.encode(e, n),
                                s = await this.core.history.get(e, t),
                                o = Yo[s.request.method] ? Yo[s.request.method].res : Yo.unregistered_method.res
                            await this.core.relayer.publish(e, i, o), await this.core.history.resolve(n)
                        }),
                        (this.deletePairing = async (t, e) => {
                            await this.core.relayer.unsubscribe(t),
                                await Promise.all([
                                    this.pairings.delete(t, Tr('USER_DISCONNECTED')),
                                    this.core.crypto.deleteSymKey(t),
                                    e ? Promise.resolve() : this.core.expirer.del(t)
                                ])
                        }),
                        (this.cleanup = async () => {
                            const t = this.pairings.getAll().filter((t) => ur(t.expiry))
                            await Promise.all(t.map((t) => this.deletePairing(t.topic)))
                        }),
                        (this.onRelayEventRequest = (t) => {
                            const { topic: e, payload: r } = t
                            switch (r.method) {
                                case 'wc_pairingPing':
                                    return this.onPairingPingRequest(e, r)
                                case 'wc_pairingDelete':
                                    return this.onPairingDeleteRequest(e, r)
                                default:
                                    return this.onUnknownRpcMethodRequest(e, r)
                            }
                        }),
                        (this.onRelayEventResponse = async (t) => {
                            const { topic: e, payload: r } = t,
                                n = (await this.core.history.get(e, r.id)).request.method
                            return 'wc_pairingPing' === n ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(n)
                        }),
                        (this.onPairingPingRequest = async (t, e) => {
                            const { id: r } = e
                            try {
                                this.isValidPing({ topic: t }), await this.sendResult(r, t, !0), this.events.emit(Xo, { id: r, topic: t })
                            } catch (n) {
                                await this.sendError(r, t, n), this.logger.error(n)
                            }
                        }),
                        (this.onPairingPingResponse = (t, e) => {
                            const { id: r } = e
                            setTimeout(() => {
                                Mi(e)
                                    ? this.events.emit(hr('pairing_ping', r), {})
                                    : Di(e) && this.events.emit(hr('pairing_ping', r), { error: e.error })
                            }, 500)
                        }),
                        (this.onPairingDeleteRequest = async (t, e) => {
                            const { id: r } = e
                            try {
                                this.isValidDisconnect({ topic: t }), await this.deletePairing(t), this.events.emit($o, { id: r, topic: t })
                            } catch (n) {
                                await this.sendError(r, t, n), this.logger.error(n)
                            }
                        }),
                        (this.onUnknownRpcMethodRequest = async (t, e) => {
                            const { id: r, method: n } = e
                            try {
                                if (this.registeredMethods.includes(n)) return
                                const e = Tr('WC_METHOD_UNSUPPORTED', n)
                                await this.sendError(r, t, e), this.logger.error(e)
                            } catch (zn) {
                                await this.sendError(r, t, zn), this.logger.error(zn)
                            }
                        }),
                        (this.onUnknownRpcMethodResponse = (t) => {
                            this.registeredMethods.includes(t) || this.logger.error(Tr('WC_METHOD_UNSUPPORTED', t))
                        }),
                        (this.isValidPair = (t) => {
                            var e
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'pair() params: '.concat(t))
                                throw new Error(e)
                            }
                            if (
                                !(function (t) {
                                    if (Ur(t, !1))
                                        try {
                                            return typeof new URL(t) < 'u'
                                        } catch {
                                            return !1
                                        }
                                    return !1
                                })(t.uri)
                            ) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'pair() uri: '.concat(t.uri))
                                throw new Error(e)
                            }
                            const r = Er(t.uri)
                            if (null == (e = null === r || void 0 === r ? void 0 : r.relay) || !e.protocol) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'pair() uri#relay-protocol')
                                throw new Error(t)
                            }
                            if (null == r || !r.symKey) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'pair() uri#symKey')
                                throw new Error(t)
                            }
                            if (
                                null != r &&
                                r.expiryTimestamp &&
                                (0, ge.toMiliseconds)(null === r || void 0 === r ? void 0 : r.expiryTimestamp) < Date.now()
                            ) {
                                const { message: t } = Nr('EXPIRED', 'pair() URI has expired. Please try again with a new connection URI.')
                                throw new Error(t)
                            }
                        }),
                        (this.isValidPing = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'ping() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e } = t
                            await this.isValidPairingTopic(e)
                        }),
                        (this.isValidDisconnect = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'disconnect() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e } = t
                            await this.isValidPairingTopic(e)
                        }),
                        (this.isValidPairingTopic = async (t) => {
                            if (!Ur(t, !1)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'pairing topic should be a string: '.concat(t))
                                throw new Error(e)
                            }
                            if (!this.pairings.keys.includes(t)) {
                                const { message: e } = Nr('NO_MATCHING_KEY', "pairing topic doesn't exist: ".concat(t))
                                throw new Error(e)
                            }
                            if (ur(this.pairings.get(t).expiry)) {
                                await this.deletePairing(t)
                                const { message: e } = Nr('EXPIRED', 'pairing topic: '.concat(t))
                                throw new Error(e)
                            }
                        }),
                        (this.core = t),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        (this.pairings = new ka(this.core, this.logger, this.name, this.storagePrefix))
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(To, async (t) => {
                        const { topic: e, message: r } = t
                        if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return
                        const n = await this.core.crypto.decode(e, r)
                        try {
                            Li(n)
                                ? (this.core.history.set(e, n), this.onRelayEventRequest({ topic: e, payload: n }))
                                : Ui(n) &&
                                  (await this.core.history.resolve(n),
                                  await this.onRelayEventResponse({ topic: e, payload: n }),
                                  this.core.history.delete(e, n.id))
                        } catch (i) {
                            this.logger.error(i)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(sa, async (t) => {
                        const { topic: e } = ar(t.target)
                        e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit(Qo, { topic: e }))
                    })
                }
            }
            class za extends qn {
                constructor(t, e) {
                    super(t, e),
                        (this.core = t),
                        (this.logger = e),
                        (this.records = new Map()),
                        (this.events = new v.EventEmitter()),
                        (this.name = 'history'),
                        (this.version = '0.3'),
                        (this.cached = []),
                        (this.initialized = !1),
                        (this.storagePrefix = So),
                        (this.init = async () => {
                            this.initialized ||
                                (this.logger.trace('Initialized'),
                                await this.restore(),
                                this.cached.forEach((t) => this.records.set(t.id, t)),
                                (this.cached = []),
                                this.registerEventListeners(),
                                (this.initialized = !0))
                        }),
                        (this.set = (t, e, r) => {
                            if (
                                (this.isInitialized(),
                                this.logger.debug('Setting JSON-RPC request history record'),
                                this.logger.trace({ type: 'method', method: 'set', topic: t, request: e, chainId: r }),
                                this.records.has(e.id))
                            )
                                return
                            const n = {
                                id: e.id,
                                topic: t,
                                request: { method: e.method, params: e.params || null },
                                chainId: r,
                                expiry: cr(ge.THIRTY_DAYS)
                            }
                            this.records.set(n.id, n), this.events.emit(Zo, n)
                        }),
                        (this.resolve = async (t) => {
                            if (
                                (this.isInitialized(),
                                this.logger.debug('Updating JSON-RPC response history record'),
                                this.logger.trace({ type: 'method', method: 'update', response: t }),
                                !this.records.has(t.id))
                            )
                                return
                            const e = await this.getRecord(t.id)
                            typeof e.response > 'u' &&
                                ((e.response = Di(t) ? { error: t.error } : { result: t.result }), this.records.set(e.id, e), this.events.emit(ta, e))
                        }),
                        (this.get = async (t, e) => (
                            this.isInitialized(),
                            this.logger.debug('Getting record'),
                            this.logger.trace({ type: 'method', method: 'get', topic: t, id: e }),
                            await this.getRecord(e)
                        )),
                        (this.delete = (t, e) => {
                            this.isInitialized(),
                                this.logger.debug('Deleting record'),
                                this.logger.trace({ type: 'method', method: 'delete', id: e }),
                                this.values.forEach((r) => {
                                    if (r.topic === t) {
                                        if (typeof e < 'u' && r.id !== e) return
                                        this.records.delete(r.id), this.events.emit(ea, r)
                                    }
                                })
                        }),
                        (this.exists = async (t, e) => (this.isInitialized(), !!this.records.has(e) && (await this.getRecord(e)).topic === t)),
                        (this.on = (t, e) => {
                            this.events.on(t, e)
                        }),
                        (this.once = (t, e) => {
                            this.events.once(t, e)
                        }),
                        (this.off = (t, e) => {
                            this.events.off(t, e)
                        }),
                        (this.removeListener = (t, e) => {
                            this.events.removeListener(t, e)
                        }),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name))
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const t = []
                    return (
                        this.values.forEach((e) => {
                            if (typeof e.response < 'u') return
                            const r = { topic: e.topic, request: Si(e.request.method, e.request.params, e.id), chainId: e.chainId }
                            return t.push(r)
                        }),
                        t
                    )
                }
                async setJsonRpcRecords(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(t) {
                    this.isInitialized()
                    const e = this.records.get(t)
                    if (!e) {
                        const { message: e } = Nr('NO_MATCHING_KEY', ''.concat(this.name, ': ').concat(t))
                        throw new Error(e)
                    }
                    return e
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(ra)
                }
                async restore() {
                    try {
                        const t = await this.getJsonRpcRecords()
                        if (typeof t > 'u' || !t.length) return
                        if (this.records.size) {
                            const { message: t } = Nr('RESTORE_WILL_OVERRIDE', this.name)
                            throw (this.logger.error(t), new Error(t))
                        }
                        ;(this.cached = t),
                            this.logger.debug('Successfully Restored records for '.concat(this.name)),
                            this.logger.trace({ type: 'method', method: 'restore', records: this.values })
                    } catch (t) {
                        this.logger.debug('Failed to Restore records for '.concat(this.name)), this.logger.error(t)
                    }
                }
                registerEventListeners() {
                    this.events.on(Zo, (t) => {
                        const e = Zo
                        this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, record: t }), this.persist()
                    }),
                        this.events.on(ta, (t) => {
                            const e = ta
                            this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, record: t }), this.persist()
                        }),
                        this.events.on(ea, (t) => {
                            const e = ea
                            this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, record: t }), this.persist()
                        }),
                        this.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, () => {
                            this.cleanup()
                        })
                }
                cleanup() {
                    try {
                        this.records.forEach((t) => {
                            ;(0, ge.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                                (this.logger.info('Deleting expired history log: '.concat(t.id)), this.delete(t.topic, t.id))
                        })
                    } catch (t) {
                        this.logger.warn(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
            }
            class Ha extends Fn {
                constructor(t, e) {
                    super(t, e),
                        (this.core = t),
                        (this.logger = e),
                        (this.expirations = new Map()),
                        (this.events = new v.EventEmitter()),
                        (this.name = 'expirer'),
                        (this.version = '0.3'),
                        (this.cached = []),
                        (this.initialized = !1),
                        (this.storagePrefix = So),
                        (this.init = async () => {
                            this.initialized ||
                                (this.logger.trace('Initialized'),
                                await this.restore(),
                                this.cached.forEach((t) => this.expirations.set(t.target, t)),
                                (this.cached = []),
                                this.registerEventListeners(),
                                (this.initialized = !0))
                        }),
                        (this.has = (t) => {
                            try {
                                const e = this.formatTarget(t)
                                return typeof this.getExpiration(e) < 'u'
                            } catch {
                                return !1
                            }
                        }),
                        (this.set = (t, e) => {
                            this.isInitialized()
                            const r = this.formatTarget(t),
                                n = { target: r, expiry: e }
                            this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(na, { target: r, expiration: n })
                        }),
                        (this.get = (t) => {
                            this.isInitialized()
                            const e = this.formatTarget(t)
                            return this.getExpiration(e)
                        }),
                        (this.del = (t) => {
                            if ((this.isInitialized(), this.has(t))) {
                                const e = this.formatTarget(t),
                                    r = this.getExpiration(e)
                                this.expirations.delete(e), this.events.emit(ia, { target: e, expiration: r })
                            }
                        }),
                        (this.on = (t, e) => {
                            this.events.on(t, e)
                        }),
                        (this.once = (t, e) => {
                            this.events.once(t, e)
                        }),
                        (this.off = (t, e) => {
                            this.events.off(t, e)
                        }),
                        (this.removeListener = (t, e) => {
                            this.events.removeListener(t, e)
                        }),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name))
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(t) {
                    if ('string' == typeof t)
                        return (function (t) {
                            return or('topic', t)
                        })(t)
                    if ('number' == typeof t)
                        return (function (t) {
                            return or('id', t)
                        })(t)
                    const { message: e } = Nr('UNKNOWN_TYPE', 'Target type: '.concat(typeof t))
                    throw new Error(e)
                }
                async setExpirations(t) {
                    await this.core.storage.setItem(this.storageKey, t)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(oa)
                }
                async restore() {
                    try {
                        const t = await this.getExpirations()
                        if (typeof t > 'u' || !t.length) return
                        if (this.expirations.size) {
                            const { message: t } = Nr('RESTORE_WILL_OVERRIDE', this.name)
                            throw (this.logger.error(t), new Error(t))
                        }
                        ;(this.cached = t),
                            this.logger.debug('Successfully Restored expirations for '.concat(this.name)),
                            this.logger.trace({ type: 'method', method: 'restore', expirations: this.values })
                    } catch (t) {
                        this.logger.debug('Failed to Restore expirations for '.concat(this.name)), this.logger.error(t)
                    }
                }
                getExpiration(t) {
                    const e = this.expirations.get(t)
                    if (!e) {
                        const { message: e } = Nr('NO_MATCHING_KEY', ''.concat(this.name, ': ').concat(t))
                        throw (this.logger.error(e), new Error(e))
                    }
                    return e
                }
                checkExpiry(t, e) {
                    const { expiry: r } = e
                    ;(0, ge.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e)
                }
                expire(t, e) {
                    this.expirations.delete(t), this.events.emit(sa, { target: t, expiration: e })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((t, e) => this.checkExpiry(e, t))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(Un.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()),
                        this.events.on(na, (t) => {
                            const e = na
                            this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, data: t }), this.persist()
                        }),
                        this.events.on(sa, (t) => {
                            const e = sa
                            this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, data: t }), this.persist()
                        }),
                        this.events.on(ia, (t) => {
                            const e = ia
                            this.logger.info('Emitting '.concat(e)), this.logger.debug({ type: 'event', event: e, data: t }), this.persist()
                        })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                }
            }
            class Ba extends Wn {
                constructor(t, e) {
                    super(t, e),
                        (this.projectId = t),
                        (this.logger = e),
                        (this.name = aa),
                        (this.initialized = !1),
                        (this.queue = []),
                        (this.verifyDisabled = !1),
                        (this.init = async (t) => {
                            if (this.verifyDisabled || Qe() || !$e()) return
                            const e = this.getVerifyUrl(null === t || void 0 === t ? void 0 : t.verifyUrl)
                            this.verifyUrl !== e && this.removeIframe(), (this.verifyUrl = e)
                            try {
                                await this.createIframe()
                            } catch (r) {
                                this.logger.info('Verify iframe failed to load: '.concat(this.verifyUrl)), this.logger.info(r)
                            }
                            if (!this.initialized) {
                                this.removeIframe(), (this.verifyUrl = ua)
                                try {
                                    await this.createIframe()
                                } catch (r) {
                                    this.logger.info('Verify iframe failed to load: '.concat(this.verifyUrl)),
                                        this.logger.info(r),
                                        (this.verifyDisabled = !0)
                                }
                            }
                        }),
                        (this.register = async (t) => {
                            this.initialized ? this.sendPost(t.attestationId) : (this.addToQueue(t.attestationId), await this.init())
                        }),
                        (this.resolve = async (t) => {
                            if (this.isDevEnv) return ''
                            const e = this.getVerifyUrl(null === t || void 0 === t ? void 0 : t.verifyUrl)
                            let r
                            try {
                                r = await this.fetchAttestation(t.attestationId, e)
                            } catch (n) {
                                this.logger.info('failed to resolve attestation: '.concat(t.attestationId, ' from url: ').concat(e)),
                                    this.logger.info(n),
                                    (r = await this.fetchAttestation(t.attestationId, ua))
                            }
                            return r
                        }),
                        (this.fetchAttestation = async (t, e) => {
                            this.logger.info('resolving attestation: '.concat(t, ' from url: ').concat(e))
                            const r = this.startAbortTimer(2 * ge.ONE_SECOND),
                                n = await fetch(''.concat(e, '/attestation/').concat(t), { signal: this.abortController.signal })
                            return clearTimeout(r), 200 === n.status ? await n.json() : void 0
                        }),
                        (this.addToQueue = (t) => {
                            this.queue.push(t)
                        }),
                        (this.processQueue = () => {
                            0 !== this.queue.length && (this.queue.forEach((t) => this.sendPost(t)), (this.queue = []))
                        }),
                        (this.sendPost = (t) => {
                            var e
                            try {
                                if (!this.iframe) return
                                null == (e = this.iframe.contentWindow) || e.postMessage(t, '*'),
                                    this.logger.info('postMessage sent: '.concat(t, ' ').concat(this.verifyUrl))
                            } catch {}
                        }),
                        (this.createIframe = async () => {
                            let t
                            const e = (r) => {
                                'verify_ready' === r.data &&
                                    ((this.initialized = !0), this.processQueue(), window.removeEventListener('message', e), t())
                            }
                            await Promise.race([
                                new Promise((r) => {
                                    if (document.getElementById(aa)) return r()
                                    window.addEventListener('message', e)
                                    const n = document.createElement('iframe')
                                    ;(n.id = aa),
                                        (n.src = ''.concat(this.verifyUrl, '/').concat(this.projectId)),
                                        (n.style.display = 'none'),
                                        document.body.append(n),
                                        (this.iframe = n),
                                        (t = r)
                                }),
                                new Promise((t, r) =>
                                    setTimeout(
                                        () => {
                                            window.removeEventListener('message', e), r('verify iframe load timeout')
                                        },
                                        (0, ge.toMiliseconds)(ge.FIVE_SECONDS)
                                    )
                                )
                            ])
                        }),
                        (this.removeIframe = () => {
                            this.iframe && (this.iframe.remove(), (this.iframe = void 0), (this.initialized = !1))
                        }),
                        (this.getVerifyUrl = (t) => {
                            let e = t || ca
                            return (
                                ha.includes(e) ||
                                    (this.logger.info('verify url: '.concat(e, ', not included in trusted list, assigning default: ').concat(ca)),
                                    (e = ca)),
                                e
                            )
                        }),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        (this.verifyUrl = ca),
                        (this.abortController = new AbortController()),
                        (this.isDevEnv =
                            Je() &&
                            {
                                NODE_ENV: 'production',
                                PUBLIC_URL: '',
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0,
                                REACT_APP_API_URL: '',
                                REACT_APP_DEFAULTAUTH: 'fake',
                                REACT_APP_APIKEY: '',
                                REACT_APP_AUTHDOMAIN: '',
                                REACT_APP_DATABASEURL: '',
                                REACT_APP_PROJECTID: '',
                                REACT_APP_STORAGEBUCKET: '',
                                REACT_APP_MESSAGINGSENDERID: '',
                                REACT_APP_APPID: '',
                                REACT_APP_MEASUREMENTID: ''
                            }.IS_VITEST)
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                startAbortTimer(t) {
                    return (this.abortController = new AbortController()), setTimeout(() => this.abortController.abort(), (0, ge.toMiliseconds)(t))
                }
            }
            class Ka extends Gn {
                constructor(t, e) {
                    super(t, e),
                        (this.projectId = t),
                        (this.logger = e),
                        (this.context = 'echo'),
                        (this.registerDeviceToken = async (t) => {
                            const { clientId: e, token: r, notificationType: n, enableEncrypted: i = !1 } = t,
                                s = ''.concat('https://echo.walletconnect.com', '/').concat(this.projectId, '/clients')
                            await Fi()(s, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ client_id: e, type: n, token: r, always_raw: i })
                            })
                        }),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.context))
                }
            }
            var Va = Object.defineProperty,
                Fa = Object.getOwnPropertySymbols,
                Wa = Object.prototype.hasOwnProperty,
                Ga = Object.prototype.propertyIsEnumerable,
                Ya = (t, e, r) => (e in t ? Va(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                Ja = (t, e) => {
                    for (var r in e || (e = {})) Wa.call(e, r) && Ya(t, r, e[r])
                    if (Fa) for (var r of Fa(e)) Ga.call(e, r) && Ya(t, r, e[r])
                    return t
                }
            class Qa extends kn {
                constructor(t) {
                    super(t),
                        (this.protocol = 'wc'),
                        (this.version = 2),
                        (this.name = Eo),
                        (this.events = new v.EventEmitter()),
                        (this.initialized = !1),
                        (this.on = (t, e) => this.events.on(t, e)),
                        (this.once = (t, e) => this.events.once(t, e)),
                        (this.off = (t, e) => this.events.off(t, e)),
                        (this.removeListener = (t, e) => this.events.removeListener(t, e)),
                        (this.projectId = null === t || void 0 === t ? void 0 : t.projectId),
                        (this.relayUrl = (null === t || void 0 === t ? void 0 : t.relayUrl) || Ro),
                        (this.customStoragePrefix = null != t && t.customStoragePrefix ? ':'.concat(t.customStoragePrefix) : '')
                    const e =
                        typeof (null === t || void 0 === t ? void 0 : t.logger) < 'u' &&
                        'string' != typeof (null === t || void 0 === t ? void 0 : t.logger)
                            ? t.logger
                            : (0, Mn.pino)((0, Mn.getDefaultLoggerOptions)({ level: (null === t || void 0 === t ? void 0 : t.logger) || Io }))
                    ;(this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        (this.heartbeat = new Un.HeartBeat()),
                        (this.crypto = new fa(this, this.logger, null === t || void 0 === t ? void 0 : t.keychain)),
                        (this.history = new za(this, this.logger)),
                        (this.expirer = new Ha(this, this.logger)),
                        (this.storage =
                            null != t && t.storage ? t.storage : new Ln(Ja(Ja({}, Oo), null === t || void 0 === t ? void 0 : t.storageOptions))),
                        (this.relayer = new Ta({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId })),
                        (this.pairing = new qa(this, this.logger)),
                        (this.verify = new Ba(this.projectId || '', this.logger)),
                        (this.echoClient = new Ka(this.projectId || '', this.logger))
                }
                static async init(t) {
                    const e = new Qa(t)
                    await e.initialize()
                    const r = await e.crypto.getClientId()
                    return await e.storage.setItem('WALLETCONNECT_CLIENT_ID', r), e
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || (await this.initialize())
                }
                async initialize() {
                    this.logger.trace('Initialized')
                    try {
                        await this.crypto.init(),
                            await this.history.init(),
                            await this.expirer.init(),
                            await this.relayer.init(),
                            await this.heartbeat.init(),
                            await this.pairing.init(),
                            (this.initialized = !0),
                            this.logger.info('Core Initialization Success')
                    } catch (t) {
                        throw (this.logger.warn('Core Initialization Failure at epoch '.concat(Date.now()), t), this.logger.error(t.message), t)
                    }
                }
            }
            const $a = Qa,
                Xa = 'client',
                Za = ''.concat('wc', '@').concat(2, ':').concat(Xa, ':'),
                tc = Xa,
                ec = 'error',
                rc = 'WALLETCONNECT_DEEPLINK_CHOICE',
                nc = 'Proposal expired',
                ic = ge.SEVEN_DAYS,
                sc = {
                    wc_sessionPropose: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1101 } },
                    wc_sessionSettle: { req: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1103 } },
                    wc_sessionUpdate: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1105 } },
                    wc_sessionExtend: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1107 } },
                    wc_sessionRequest: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1109 } },
                    wc_sessionEvent: { req: { ttl: ge.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ge.FIVE_MINUTES, prompt: !1, tag: 1111 } },
                    wc_sessionDelete: { req: { ttl: ge.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ge.ONE_DAY, prompt: !1, tag: 1113 } },
                    wc_sessionPing: { req: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ge.THIRTY_SECONDS, prompt: !1, tag: 1115 } }
                },
                oc = { min: ge.FIVE_MINUTES, max: ge.SEVEN_DAYS },
                ac = 'IDLE',
                cc = 'ACTIVE',
                uc = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest']
            var hc = Object.defineProperty,
                lc = Object.defineProperties,
                fc = Object.getOwnPropertyDescriptors,
                pc = Object.getOwnPropertySymbols,
                dc = Object.prototype.hasOwnProperty,
                gc = Object.prototype.propertyIsEnumerable,
                yc = (t, e, r) => (e in t ? hc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                vc = (t, e) => {
                    for (var r in e || (e = {})) dc.call(e, r) && yc(t, r, e[r])
                    if (pc) for (var r of pc(e)) gc.call(e, r) && yc(t, r, e[r])
                    return t
                },
                mc = (t, e) => lc(t, fc(e))
            class wc extends Jn {
                constructor(t) {
                    var e
                    super(t),
                        (e = this),
                        (this.name = 'engine'),
                        (this.events = new (m())()),
                        (this.initialized = !1),
                        (this.ignoredPayloadTypes = [Ae]),
                        (this.requestQueue = { state: ac, queue: [] }),
                        (this.sessionRequestQueue = { state: ac, queue: [] }),
                        (this.requestQueueDelay = ge.ONE_SECOND),
                        (this.init = async () => {
                            this.initialized ||
                                (await this.cleanup(),
                                this.registerRelayerEvents(),
                                this.registerExpirerEvents(),
                                this.registerPairingEvents(),
                                this.client.core.pairing.register({ methods: Object.keys(sc) }),
                                (this.initialized = !0),
                                setTimeout(
                                    () => {
                                        ;(this.sessionRequestQueue.queue = this.getPendingSessionRequests()), this.processSessionRequestQueue()
                                    },
                                    (0, ge.toMiliseconds)(this.requestQueueDelay)
                                ))
                        }),
                        (this.connect = async (t) => {
                            await this.isInitialized()
                            const e = mc(vc({}, t), {
                                requiredNamespaces: t.requiredNamespaces || {},
                                optionalNamespaces: t.optionalNamespaces || {}
                            })
                            await this.isValidConnect(e)
                            const { pairingTopic: r, requiredNamespaces: n, optionalNamespaces: i, sessionProperties: s, relays: o } = e
                            let a,
                                c = r,
                                u = !1
                            if ((c && (u = this.client.core.pairing.pairings.get(c).active), !c || !u)) {
                                const { topic: t, uri: e } = await this.client.core.pairing.create()
                                ;(c = t), (a = e)
                            }
                            const h = await this.client.core.crypto.generateKeyPair(),
                                l = sc.wc_sessionPropose.req.ttl || ge.FIVE_MINUTES,
                                f = cr(l),
                                p = vc(
                                    {
                                        requiredNamespaces: n,
                                        optionalNamespaces: i,
                                        relays: null !== o && void 0 !== o ? o : [{ protocol: 'irn' }],
                                        proposer: { publicKey: h, metadata: this.client.metadata },
                                        expiryTimestamp: f
                                    },
                                    s && { sessionProperties: s }
                                ),
                                { reject: d, resolve: g, done: y } = ir(l, nc)
                            if (
                                (this.events.once(hr('session_connect'), async (t) => {
                                    let { error: e, session: r } = t
                                    if (e) d(e)
                                    else if (r) {
                                        r.self.publicKey = h
                                        const t = mc(vc({}, r), {
                                            requiredNamespaces: p.requiredNamespaces,
                                            optionalNamespaces: p.optionalNamespaces
                                        })
                                        await this.client.session.set(r.topic, t),
                                            await this.setExpiry(r.topic, r.expiry),
                                            c && (await this.client.core.pairing.updateMetadata({ topic: c, metadata: r.peer.metadata })),
                                            g(t)
                                    }
                                }),
                                !c)
                            ) {
                                const { message: t } = Nr('NO_MATCHING_KEY', 'connect() pairing topic: '.concat(c))
                                throw new Error(t)
                            }
                            const v = await this.sendRequest({ topic: c, method: 'wc_sessionPropose', params: p, throwOnFailedPublish: !0 })
                            return await this.setProposal(v, vc({ id: v }, p)), { uri: a, approval: y }
                        }),
                        (this.pair = async (t) => (await this.isInitialized(), await this.client.core.pairing.pair(t))),
                        (this.approve = async (t) => {
                            await this.isInitialized(), await this.isValidApprove(t)
                            const { id: e, relayProtocol: r, namespaces: n, sessionProperties: i } = t,
                                s = this.client.proposal.get(e)
                            let { pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: u } = s
                            o = o || ''
                            const h = await this.client.core.crypto.generateKeyPair(),
                                l = a.publicKey,
                                f = await this.client.core.crypto.generateSharedKey(h, l)
                            o &&
                                e &&
                                (await this.client.core.pairing.updateMetadata({ topic: o, metadata: a.metadata }),
                                await this.sendResult({
                                    id: e,
                                    topic: o,
                                    result: { relay: { protocol: null !== r && void 0 !== r ? r : 'irn' }, responderPublicKey: h }
                                }),
                                await this.client.proposal.delete(e, Tr('USER_DISCONNECTED')),
                                await this.client.core.pairing.activate({ topic: o }))
                            const p = vc(
                                {
                                    relay: { protocol: null !== r && void 0 !== r ? r : 'irn' },
                                    namespaces: n,
                                    pairingTopic: o,
                                    controller: { publicKey: h, metadata: this.client.metadata },
                                    expiry: cr(ic)
                                },
                                i && { sessionProperties: i }
                            )
                            await this.client.core.relayer.subscribe(f)
                            const d = mc(vc({}, p), {
                                topic: f,
                                requiredNamespaces: c,
                                optionalNamespaces: u,
                                pairingTopic: o,
                                acknowledged: !1,
                                self: p.controller,
                                peer: { publicKey: a.publicKey, metadata: a.metadata },
                                controller: h
                            })
                            await this.client.session.set(f, d)
                            try {
                                await this.sendRequest({ topic: f, method: 'wc_sessionSettle', params: p, throwOnFailedPublish: !0 })
                            } catch (er) {
                                throw (
                                    (this.client.logger.error(er),
                                    this.client.session.delete(f, Tr('USER_DISCONNECTED')),
                                    await this.client.core.relayer.unsubscribe(f),
                                    er)
                                )
                            }
                            return (
                                await this.setExpiry(f, cr(ic)),
                                { topic: f, acknowledged: () => new Promise((t) => setTimeout(() => t(this.client.session.get(f)), 500)) }
                            )
                        }),
                        (this.reject = async (t) => {
                            await this.isInitialized(), await this.isValidReject(t)
                            const { id: e, reason: r } = t,
                                { pairingTopic: n } = this.client.proposal.get(e)
                            n && (await this.sendError(e, n, r), await this.client.proposal.delete(e, Tr('USER_DISCONNECTED')))
                        }),
                        (this.update = async (t) => {
                            await this.isInitialized(), await this.isValidUpdate(t)
                            const { topic: e, namespaces: r } = t,
                                n = await this.sendRequest({ topic: e, method: 'wc_sessionUpdate', params: { namespaces: r } }),
                                { done: i, resolve: s, reject: o } = ir()
                            return (
                                this.events.once(hr('session_update', n), (t) => {
                                    let { error: e } = t
                                    e ? o(e) : s()
                                }),
                                await this.client.session.update(e, { namespaces: r }),
                                { acknowledged: i }
                            )
                        }),
                        (this.extend = async (t) => {
                            await this.isInitialized(), await this.isValidExtend(t)
                            const { topic: e } = t,
                                r = await this.sendRequest({ topic: e, method: 'wc_sessionExtend', params: {} }),
                                { done: n, resolve: i, reject: s } = ir()
                            return (
                                this.events.once(hr('session_extend', r), (t) => {
                                    let { error: e } = t
                                    e ? s(e) : i()
                                }),
                                await this.setExpiry(e, cr(ic)),
                                { acknowledged: n }
                            )
                        }),
                        (this.request = async (e) => {
                            await this.isInitialized(), await this.isValidRequest(e)
                            const { chainId: n, request: i, topic: s, expiry: o = sc.wc_sessionRequest.req.ttl } = e,
                                a = bi(),
                                { done: c, resolve: u, reject: h } = ir(o, 'Request expired. Please try again.')
                            return (
                                this.events.once(hr('session_request', a), (t) => {
                                    let { error: e, result: r } = t
                                    e ? h(e) : u(r)
                                }),
                                await Promise.all([
                                    new Promise(async (t) => {
                                        await this.sendRequest({
                                            clientRpcId: a,
                                            topic: s,
                                            method: 'wc_sessionRequest',
                                            params: { request: mc(vc({}, i), { expiryTimestamp: cr(o) }), chainId: n },
                                            expiry: o,
                                            throwOnFailedPublish: !0
                                        }).catch((t) => h(t)),
                                            this.client.events.emit('session_request_sent', { topic: s, request: i, chainId: n, id: a }),
                                            t()
                                    }),
                                    new Promise(async (e) => {
                                        const n = await (async function (t, e) {
                                            try {
                                                return (await t.getItem(e)) || ($e() ? localStorage.getItem(e) : void 0)
                                            } catch (i) {
                                                console.error(i)
                                            }
                                        })(this.client.core.storage, rc)
                                        ;(async function (e) {
                                            let { id: n, topic: i, wcDeepLink: s } = e
                                            try {
                                                if (!s) return
                                                const t = 'string' == typeof s ? JSON.parse(s) : s
                                                let e = null === t || void 0 === t ? void 0 : t.href
                                                if ('string' != typeof e) return
                                                e.endsWith('/') && (e = e.slice(0, -1))
                                                const o = ''.concat(e, '/wc?requestId=').concat(n, '&sessionTopic=').concat(i),
                                                    a = Xe()
                                                a === Ge.browser
                                                    ? o.startsWith('https://')
                                                        ? window.open(o, '_blank', 'noreferrer noopener')
                                                        : window.open(o, '_self', 'noreferrer noopener')
                                                    : a === Ge.reactNative &&
                                                      typeof (null == r.g ? void 0 : r.g.Linking) < 'u' &&
                                                      (await r.g.Linking.openURL(o))
                                            } catch (t) {
                                                console.error(t)
                                            }
                                        })({ id: a, topic: s, wcDeepLink: n }),
                                            e()
                                    }),
                                    c()
                                ]).then((t) => t[2])
                            )
                        }),
                        (this.respond = async (t) => {
                            await this.isInitialized(), await this.isValidRespond(t)
                            const { topic: e, response: r } = t,
                                { id: n } = r
                            Mi(r)
                                ? await this.sendResult({ id: n, topic: e, result: r.result, throwOnFailedPublish: !0 })
                                : Di(r) && (await this.sendError(n, e, r.error)),
                                this.cleanupAfterResponse(t)
                        }),
                        (this.ping = async (t) => {
                            await this.isInitialized(), await this.isValidPing(t)
                            const { topic: e } = t
                            if (this.client.session.keys.includes(e)) {
                                const t = await this.sendRequest({ topic: e, method: 'wc_sessionPing', params: {} }),
                                    { done: r, resolve: n, reject: i } = ir()
                                this.events.once(hr('session_ping', t), (t) => {
                                    let { error: e } = t
                                    e ? i(e) : n()
                                }),
                                    await r()
                            } else this.client.core.pairing.pairings.keys.includes(e) && (await this.client.core.pairing.ping({ topic: e }))
                        }),
                        (this.emit = async (t) => {
                            await this.isInitialized(), await this.isValidEmit(t)
                            const { topic: e, event: r, chainId: n } = t
                            await this.sendRequest({ topic: e, method: 'wc_sessionEvent', params: { event: r, chainId: n } })
                        }),
                        (this.disconnect = async (t) => {
                            await this.isInitialized(), await this.isValidDisconnect(t)
                            const { topic: e } = t
                            if (this.client.session.keys.includes(e))
                                await this.sendRequest({
                                    topic: e,
                                    method: 'wc_sessionDelete',
                                    params: Tr('USER_DISCONNECTED'),
                                    throwOnFailedPublish: !0
                                }),
                                    await this.deleteSession({ topic: e, emitEvent: !1 })
                            else {
                                if (!this.client.core.pairing.pairings.keys.includes(e)) {
                                    const { message: t } = Nr('MISMATCHED_TOPIC', 'Session or pairing topic not found: '.concat(e))
                                    throw new Error(t)
                                }
                                await this.client.core.pairing.disconnect({ topic: e })
                            }
                        }),
                        (this.find = (t) => (
                            this.isInitialized(),
                            this.client.session.getAll().filter((e) =>
                                (function (t, e) {
                                    const { requiredNamespaces: r } = e,
                                        n = Object.keys(t.namespaces),
                                        i = Object.keys(r)
                                    let s = !0
                                    return (
                                        !!er(i, n) &&
                                        (n.forEach((e) => {
                                            const { accounts: n, methods: i, events: o } = t.namespaces[e],
                                                a = Or(n),
                                                c = r[e]
                                            ;(!er(Ee(e, c), a) || !er(c.methods, i) || !er(c.events, o)) && (s = !1)
                                        }),
                                        s)
                                    )
                                })(e, t)
                            )
                        )),
                        (this.getPendingSessionRequests = () => this.client.pendingRequest.getAll()),
                        (this.cleanupDuplicatePairings = async (t) => {
                            if (t.pairingTopic)
                                try {
                                    const e = this.client.core.pairing.pairings.get(t.pairingTopic),
                                        r = this.client.core.pairing.pairings.getAll().filter((r) => {
                                            var n, i
                                            return (
                                                (null == (n = r.peerMetadata) ? void 0 : n.url) &&
                                                (null == (i = r.peerMetadata) ? void 0 : i.url) === t.peer.metadata.url &&
                                                r.topic &&
                                                r.topic !== e.topic
                                            )
                                        })
                                    if (0 === r.length) return
                                    this.client.logger.info('Cleaning up '.concat(r.length, ' duplicate pairing(s)')),
                                        await Promise.all(r.map((t) => this.client.core.pairing.disconnect({ topic: t.topic }))),
                                        this.client.logger.info('Duplicate pairings clean up finished')
                                } catch (e) {
                                    this.client.logger.error(e)
                                }
                        }),
                        (this.deleteSession = async (t) => {
                            const { topic: e, expirerHasDeleted: r = !1, emitEvent: n = !0, id: i = 0 } = t,
                                { self: s } = this.client.session.get(e)
                            await this.client.core.relayer.unsubscribe(e),
                                await this.client.session.delete(e, Tr('USER_DISCONNECTED')),
                                this.client.core.crypto.keychain.has(s.publicKey) && (await this.client.core.crypto.deleteKeyPair(s.publicKey)),
                                this.client.core.crypto.keychain.has(e) && (await this.client.core.crypto.deleteSymKey(e)),
                                r || this.client.core.expirer.del(e),
                                this.client.core.storage.removeItem(rc).catch((t) => this.client.logger.warn(t)),
                                this.getPendingSessionRequests().forEach((t) => {
                                    t.topic === e && this.deletePendingSessionRequest(t.id, Tr('USER_DISCONNECTED'))
                                }),
                                n && this.client.events.emit('session_delete', { id: i, topic: e })
                        }),
                        (this.deleteProposal = async (t, e) => {
                            await Promise.all([
                                this.client.proposal.delete(t, Tr('USER_DISCONNECTED')),
                                e ? Promise.resolve() : this.client.core.expirer.del(t)
                            ])
                        }),
                        (this.deletePendingSessionRequest = async function (t, r) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                            await Promise.all([e.client.pendingRequest.delete(t, r), n ? Promise.resolve() : e.client.core.expirer.del(t)]),
                                (e.sessionRequestQueue.queue = e.sessionRequestQueue.queue.filter((e) => e.id !== t)),
                                n && ((e.sessionRequestQueue.state = ac), e.client.events.emit('session_request_expire', { id: t }))
                        }),
                        (this.setExpiry = async (t, e) => {
                            this.client.session.keys.includes(t) && (await this.client.session.update(t, { expiry: e })),
                                this.client.core.expirer.set(t, e)
                        }),
                        (this.setProposal = async (t, e) => {
                            await this.client.proposal.set(t, e), this.client.core.expirer.set(t, cr(sc.wc_sessionPropose.req.ttl))
                        }),
                        (this.setPendingSessionRequest = async (t) => {
                            const { id: e, topic: r, params: n, verifyContext: i } = t,
                                s = n.request.expiryTimestamp || cr(sc.wc_sessionRequest.req.ttl)
                            await this.client.pendingRequest.set(e, { id: e, topic: r, params: n, verifyContext: i }),
                                s && this.client.core.expirer.set(e, s)
                        }),
                        (this.sendRequest = async (t) => {
                            const { topic: e, method: r, params: n, expiry: i, relayRpcId: s, clientRpcId: o, throwOnFailedPublish: a } = t,
                                c = Si(r, n, o)
                            if ($e() && uc.includes(r)) {
                                const t = Le(JSON.stringify(c))
                                this.client.core.verify.register({ attestationId: t })
                            }
                            const u = await this.client.core.crypto.encode(e, c),
                                h = sc[r].req
                            return (
                                i && (h.ttl = i),
                                s && (h.id = s),
                                this.client.core.history.set(e, c),
                                a
                                    ? ((h.internal = mc(vc({}, h.internal), { throwOnFailedPublish: !0 })),
                                      await this.client.core.relayer.publish(e, u, h))
                                    : this.client.core.relayer.publish(e, u, h).catch((t) => this.client.logger.error(t)),
                                c.id
                            )
                        }),
                        (this.sendResult = async (t) => {
                            const { id: e, topic: r, result: n, throwOnFailedPublish: i } = t,
                                s = Ii(e, n),
                                o = await this.client.core.crypto.encode(r, s),
                                a = await this.client.core.history.get(r, e),
                                c = sc[a.request.method].res
                            i
                                ? ((c.internal = mc(vc({}, c.internal), { throwOnFailedPublish: !0 })),
                                  await this.client.core.relayer.publish(r, o, c))
                                : this.client.core.relayer.publish(r, o, c).catch((t) => this.client.logger.error(t)),
                                await this.client.core.history.resolve(s)
                        }),
                        (this.sendError = async (t, e, r) => {
                            const n = Oi(t, r),
                                i = await this.client.core.crypto.encode(e, n),
                                s = await this.client.core.history.get(e, t),
                                o = sc[s.request.method].res
                            this.client.core.relayer.publish(e, i, o), await this.client.core.history.resolve(n)
                        }),
                        (this.cleanup = async () => {
                            const t = [],
                                e = []
                            this.client.session.getAll().forEach((e) => {
                                let r = !1
                                ur(e.expiry) && (r = !0), this.client.core.crypto.keychain.has(e.topic) || (r = !0), r && t.push(e.topic)
                            }),
                                this.client.proposal.getAll().forEach((t) => {
                                    ur(t.expiryTimestamp) && e.push(t.id)
                                }),
                                await Promise.all([...t.map((t) => this.deleteSession({ topic: t })), ...e.map((t) => this.deleteProposal(t))])
                        }),
                        (this.onRelayEventRequest = async (t) => {
                            this.requestQueue.queue.push(t), await this.processRequestsQueue()
                        }),
                        (this.processRequestsQueue = async () => {
                            if (this.requestQueue.state !== cc) {
                                for (
                                    this.client.logger.info('Request queue starting with '.concat(this.requestQueue.queue.length, ' requests'));
                                    this.requestQueue.queue.length > 0;

                                ) {
                                    this.requestQueue.state = cc
                                    const e = this.requestQueue.queue.shift()
                                    if (e)
                                        try {
                                            this.processRequest(e), await new Promise((t) => setTimeout(t, 300))
                                        } catch (t) {
                                            this.client.logger.warn(t)
                                        }
                                }
                                this.requestQueue.state = ac
                            } else this.client.logger.info('Request queue already active, skipping...')
                        }),
                        (this.processRequest = (t) => {
                            const { topic: e, payload: r } = t,
                                n = r.method
                            switch (n) {
                                case 'wc_sessionPropose':
                                    return this.onSessionProposeRequest(e, r)
                                case 'wc_sessionSettle':
                                    return this.onSessionSettleRequest(e, r)
                                case 'wc_sessionUpdate':
                                    return this.onSessionUpdateRequest(e, r)
                                case 'wc_sessionExtend':
                                    return this.onSessionExtendRequest(e, r)
                                case 'wc_sessionPing':
                                    return this.onSessionPingRequest(e, r)
                                case 'wc_sessionDelete':
                                    return this.onSessionDeleteRequest(e, r)
                                case 'wc_sessionRequest':
                                    return this.onSessionRequest(e, r)
                                case 'wc_sessionEvent':
                                    return this.onSessionEventRequest(e, r)
                                default:
                                    return this.client.logger.info('Unsupported request method '.concat(n))
                            }
                        }),
                        (this.onRelayEventResponse = async (t) => {
                            const { topic: e, payload: r } = t,
                                n = (await this.client.core.history.get(e, r.id)).request.method
                            switch (n) {
                                case 'wc_sessionPropose':
                                    return this.onSessionProposeResponse(e, r)
                                case 'wc_sessionSettle':
                                    return this.onSessionSettleResponse(e, r)
                                case 'wc_sessionUpdate':
                                    return this.onSessionUpdateResponse(e, r)
                                case 'wc_sessionExtend':
                                    return this.onSessionExtendResponse(e, r)
                                case 'wc_sessionPing':
                                    return this.onSessionPingResponse(e, r)
                                case 'wc_sessionRequest':
                                    return this.onSessionRequestResponse(e, r)
                                default:
                                    return this.client.logger.info('Unsupported response method '.concat(n))
                            }
                        }),
                        (this.onRelayEventUnknownPayload = (t) => {
                            const { topic: e } = t,
                                { message: r } = Nr(
                                    'MISSING_OR_INVALID',
                                    'Decoded payload on topic '.concat(e, ' is not identifiable as a JSON-RPC request or a response.')
                                )
                            throw new Error(r)
                        }),
                        (this.onSessionProposeRequest = async (t, e) => {
                            const { params: r, id: n } = e
                            try {
                                this.isValidConnect(vc({}, e.params))
                                const i = r.expiryTimestamp || cr(sc.wc_sessionPropose.req.ttl),
                                    s = vc({ id: n, pairingTopic: t, expiryTimestamp: i }, r)
                                await this.setProposal(n, s)
                                const o = Le(JSON.stringify(e)),
                                    a = await this.getVerifyContext(o, s.proposer.metadata)
                                this.client.events.emit('session_proposal', { id: n, params: s, verifyContext: a })
                            } catch (kn) {
                                await this.sendError(n, t, kn), this.client.logger.error(kn)
                            }
                        }),
                        (this.onSessionProposeResponse = async (t, e) => {
                            const { id: r } = e
                            if (Mi(e)) {
                                const { result: n } = e
                                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', result: n })
                                const i = this.client.proposal.get(r)
                                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', proposal: i })
                                const s = i.proposer.publicKey
                                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', selfPublicKey: s })
                                const o = n.responderPublicKey
                                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', peerPublicKey: o })
                                const a = await this.client.core.crypto.generateSharedKey(s, o)
                                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', sessionTopic: a })
                                const c = await this.client.core.relayer.subscribe(a)
                                this.client.logger.trace({ type: 'method', method: 'onSessionProposeResponse', subscriptionId: c }),
                                    await this.client.core.pairing.activate({ topic: t })
                            } else
                                Di(e) &&
                                    (await this.client.proposal.delete(r, Tr('USER_DISCONNECTED')),
                                    this.events.emit(hr('session_connect'), { error: e.error }))
                        }),
                        (this.onSessionSettleRequest = async (t, e) => {
                            const { id: r, params: n } = e
                            try {
                                this.isValidSessionSettleRequest(n)
                                const { relay: r, controller: i, expiry: s, namespaces: o, sessionProperties: a, pairingTopic: c } = e.params,
                                    u = vc(
                                        {
                                            topic: t,
                                            relay: r,
                                            expiry: s,
                                            namespaces: o,
                                            acknowledged: !0,
                                            pairingTopic: c,
                                            requiredNamespaces: {},
                                            optionalNamespaces: {},
                                            controller: i.publicKey,
                                            self: { publicKey: '', metadata: this.client.metadata },
                                            peer: { publicKey: i.publicKey, metadata: i.metadata }
                                        },
                                        a && { sessionProperties: a }
                                    )
                                await this.sendResult({ id: e.id, topic: t, result: !0 }),
                                    this.events.emit(hr('session_connect'), { session: u }),
                                    this.cleanupDuplicatePairings(u)
                            } catch (kn) {
                                await this.sendError(r, t, kn), this.client.logger.error(kn)
                            }
                        }),
                        (this.onSessionSettleResponse = async (t, e) => {
                            const { id: r } = e
                            Mi(e)
                                ? (await this.client.session.update(t, { acknowledged: !0 }), this.events.emit(hr('session_approve', r), {}))
                                : Di(e) &&
                                  (await this.client.session.delete(t, Tr('USER_DISCONNECTED')),
                                  this.events.emit(hr('session_approve', r), { error: e.error }))
                        }),
                        (this.onSessionUpdateRequest = async (t, e) => {
                            const { params: r, id: n } = e
                            try {
                                const e = ''.concat(t, '_session_update'),
                                    i = Zr.get(e)
                                if (i && this.isRequestOutOfSync(i, n))
                                    return void this.client.logger.info('Discarding out of sync request - '.concat(n))
                                this.isValidUpdate(vc({ topic: t }, r)),
                                    await this.client.session.update(t, { namespaces: r.namespaces }),
                                    await this.sendResult({ id: n, topic: t, result: !0 }),
                                    this.client.events.emit('session_update', { id: n, topic: t, params: r }),
                                    Zr.set(e, n)
                            } catch (kn) {
                                await this.sendError(n, t, kn), this.client.logger.error(kn)
                            }
                        }),
                        (this.isRequestOutOfSync = (t, e) => parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3))),
                        (this.onSessionUpdateResponse = (t, e) => {
                            const { id: r } = e
                            Mi(e)
                                ? this.events.emit(hr('session_update', r), {})
                                : Di(e) && this.events.emit(hr('session_update', r), { error: e.error })
                        }),
                        (this.onSessionExtendRequest = async (t, e) => {
                            const { id: r } = e
                            try {
                                this.isValidExtend({ topic: t }),
                                    await this.setExpiry(t, cr(ic)),
                                    await this.sendResult({ id: r, topic: t, result: !0 }),
                                    this.client.events.emit('session_extend', { id: r, topic: t })
                            } catch (n) {
                                await this.sendError(r, t, n), this.client.logger.error(n)
                            }
                        }),
                        (this.onSessionExtendResponse = (t, e) => {
                            const { id: r } = e
                            Mi(e)
                                ? this.events.emit(hr('session_extend', r), {})
                                : Di(e) && this.events.emit(hr('session_extend', r), { error: e.error })
                        }),
                        (this.onSessionPingRequest = async (t, e) => {
                            const { id: r } = e
                            try {
                                this.isValidPing({ topic: t }),
                                    await this.sendResult({ id: r, topic: t, result: !0 }),
                                    this.client.events.emit('session_ping', { id: r, topic: t })
                            } catch (n) {
                                await this.sendError(r, t, n), this.client.logger.error(n)
                            }
                        }),
                        (this.onSessionPingResponse = (t, e) => {
                            const { id: r } = e
                            setTimeout(() => {
                                Mi(e)
                                    ? this.events.emit(hr('session_ping', r), {})
                                    : Di(e) && this.events.emit(hr('session_ping', r), { error: e.error })
                            }, 500)
                        }),
                        (this.onSessionDeleteRequest = async (t, e) => {
                            const { id: r } = e
                            try {
                                this.isValidDisconnect({ topic: t, reason: e.params }),
                                    await Promise.all([
                                        new Promise((e) => {
                                            this.client.core.relayer.once(Do, async () => {
                                                e(await this.deleteSession({ topic: t, id: r }))
                                            })
                                        }),
                                        this.sendResult({ id: r, topic: t, result: !0 }),
                                        this.cleanupPendingSentRequestsForTopic({ topic: t, error: Tr('USER_DISCONNECTED') })
                                    ])
                            } catch (n) {
                                this.client.logger.error(n)
                            }
                        }),
                        (this.onSessionRequest = async (t, e) => {
                            const { id: r, params: n } = e
                            try {
                                this.isValidRequest(vc({ topic: t }, n))
                                const e = Le(JSON.stringify(Si('wc_sessionRequest', n, r))),
                                    i = this.client.session.get(t),
                                    s = { id: r, topic: t, params: n, verifyContext: await this.getVerifyContext(e, i.peer.metadata) }
                                await this.setPendingSessionRequest(s),
                                    this.addSessionRequestToSessionRequestQueue(s),
                                    this.processSessionRequestQueue()
                            } catch (kn) {
                                await this.sendError(r, t, kn), this.client.logger.error(kn)
                            }
                        }),
                        (this.onSessionRequestResponse = (t, e) => {
                            const { id: r } = e
                            Mi(e)
                                ? this.events.emit(hr('session_request', r), { result: e.result })
                                : Di(e) && this.events.emit(hr('session_request', r), { error: e.error })
                        }),
                        (this.onSessionEventRequest = async (t, e) => {
                            const { id: r, params: n } = e
                            try {
                                const e = ''.concat(t, '_session_event_').concat(n.event.name),
                                    i = Zr.get(e)
                                if (i && this.isRequestOutOfSync(i, r))
                                    return void this.client.logger.info('Discarding out of sync request - '.concat(r))
                                this.isValidEmit(vc({ topic: t }, n)),
                                    this.client.events.emit('session_event', { id: r, topic: t, params: n }),
                                    Zr.set(e, r)
                            } catch (kn) {
                                await this.sendError(r, t, kn), this.client.logger.error(kn)
                            }
                        }),
                        (this.addSessionRequestToSessionRequestQueue = (t) => {
                            this.sessionRequestQueue.queue.push(t)
                        }),
                        (this.cleanupAfterResponse = (t) => {
                            this.deletePendingSessionRequest(t.response.id, { message: 'fulfilled', code: 0 }),
                                setTimeout(
                                    () => {
                                        ;(this.sessionRequestQueue.state = ac), this.processSessionRequestQueue()
                                    },
                                    (0, ge.toMiliseconds)(this.requestQueueDelay)
                                )
                        }),
                        (this.cleanupPendingSentRequestsForTopic = (t) => {
                            let { topic: e, error: r } = t
                            const n = this.client.core.history.pending
                            n.length > 0 &&
                                n
                                    .filter((t) => t.topic === e && 'wc_sessionRequest' === t.request.method)
                                    .forEach((t) => {
                                        this.events.emit(hr('session_request', t.request.id), { error: r })
                                    })
                        }),
                        (this.processSessionRequestQueue = () => {
                            if (this.sessionRequestQueue.state === cc) return void this.client.logger.info('session request queue is already active.')
                            const t = this.sessionRequestQueue.queue[0]
                            if (t)
                                try {
                                    ;(this.sessionRequestQueue.state = cc), this.client.events.emit('session_request', t)
                                } catch (e) {
                                    this.client.logger.error(e)
                                }
                            else this.client.logger.info('session request queue is empty.')
                        }),
                        (this.onPairingCreated = (t) => {
                            if (t.active) return
                            const e = this.client.proposal.getAll().find((e) => e.pairingTopic === t.topic)
                            e &&
                                this.onSessionProposeRequest(
                                    t.topic,
                                    Si(
                                        'wc_sessionPropose',
                                        {
                                            requiredNamespaces: e.requiredNamespaces,
                                            optionalNamespaces: e.optionalNamespaces,
                                            relays: e.relays,
                                            proposer: e.proposer,
                                            sessionProperties: e.sessionProperties
                                        },
                                        e.id
                                    )
                                )
                        }),
                        (this.isValidConnect = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'connect() params: '.concat(JSON.stringify(t)))
                                throw new Error(e)
                            }
                            const { pairingTopic: e, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: i, relays: s } = t
                            if (
                                (Lr(e) || (await this.isValidPairingTopic(e)),
                                !(function (t, e) {
                                    let r = !1
                                    return (
                                        e && !t
                                            ? (r = !0)
                                            : t &&
                                              Cr(t) &&
                                              t.length &&
                                              t.forEach((t) => {
                                                  r = Kr(t)
                                              }),
                                        r
                                    )
                                })(s, !0))
                            ) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'connect() relays: '.concat(s))
                                throw new Error(t)
                            }
                            !Lr(r) && 0 !== jr(r) && this.validateNamespaces(r, 'requiredNamespaces'),
                                !Lr(n) && 0 !== jr(n) && this.validateNamespaces(n, 'optionalNamespaces'),
                                Lr(i) || this.validateSessionProps(i, 'sessionProperties')
                        }),
                        (this.validateNamespaces = (t, e) => {
                            const r = (function (t, e, r) {
                                let n = null
                                if (t && jr(t)) {
                                    const i = Hr(t, e)
                                    i && (n = i)
                                    const s = qr(t, e, r)
                                    s && (n = s)
                                } else n = Nr('MISSING_OR_INVALID', ''.concat(e, ', ').concat(r, ' should be an object with data'))
                                return n
                            })(t, 'connect()', e)
                            if (r) throw new Error(r.message)
                        }),
                        (this.isValidApprove = async (t) => {
                            if (!Vr(t)) throw new Error(Nr('MISSING_OR_INVALID', 'approve() params: '.concat(t)).message)
                            const { id: e, namespaces: r, relayProtocol: n, sessionProperties: i } = t
                            await this.isValidProposalId(e)
                            const s = this.client.proposal.get(e),
                                o = Br(r, 'approve()')
                            if (o) throw new Error(o.message)
                            const a = Yr(s.requiredNamespaces, r, 'approve()')
                            if (a) throw new Error(a.message)
                            if (!Ur(n, !0)) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'approve() relayProtocol: '.concat(n))
                                throw new Error(t)
                            }
                            Lr(i) || this.validateSessionProps(i, 'sessionProperties')
                        }),
                        (this.isValidReject = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'reject() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { id: e, reason: r } = t
                            if (
                                (await this.isValidProposalId(e),
                                !(function (t) {
                                    return !(!t || 'object' != typeof t || !t.code || !Mr(t.code, !1) || !t.message || !Ur(t.message, !1))
                                })(r))
                            ) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'reject() reason: '.concat(JSON.stringify(r)))
                                throw new Error(t)
                            }
                        }),
                        (this.isValidSessionSettleRequest = (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'onSessionSettleRequest() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { relay: e, controller: r, namespaces: n, expiry: i } = t
                            if (!Kr(e)) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'onSessionSettleRequest() relay protocol should be a string')
                                throw new Error(t)
                            }
                            const s = (function (t, e) {
                                let r = null
                                return (
                                    Ur(null === t || void 0 === t ? void 0 : t.publicKey, !1) ||
                                        (r = Nr('MISSING_OR_INVALID', ''.concat(e, ' controller public key should be a string'))),
                                    r
                                )
                            })(r, 'onSessionSettleRequest()')
                            if (s) throw new Error(s.message)
                            const o = Br(n, 'onSessionSettleRequest()')
                            if (o) throw new Error(o.message)
                            if (ur(i)) {
                                const { message: t } = Nr('EXPIRED', 'onSessionSettleRequest()')
                                throw new Error(t)
                            }
                        }),
                        (this.isValidUpdate = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'update() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e, namespaces: r } = t
                            await this.isValidSessionTopic(e)
                            const n = this.client.session.get(e),
                                i = Br(r, 'update()')
                            if (i) throw new Error(i.message)
                            const s = Yr(n.requiredNamespaces, r, 'update()')
                            if (s) throw new Error(s.message)
                        }),
                        (this.isValidExtend = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'extend() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e } = t
                            await this.isValidSessionTopic(e)
                        }),
                        (this.isValidRequest = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'request() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e, request: r, chainId: n, expiry: i } = t
                            await this.isValidSessionTopic(e)
                            const { namespaces: s } = this.client.session.get(e)
                            if (!Fr(s, n)) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'request() chainId: '.concat(n))
                                throw new Error(t)
                            }
                            if (
                                !(function (t) {
                                    return !(Lr(t) || !Ur(t.method, !1))
                                })(r)
                            ) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'request() '.concat(JSON.stringify(r)))
                                throw new Error(t)
                            }
                            if (!Wr(s, n, r.method)) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'request() method: '.concat(r.method))
                                throw new Error(t)
                            }
                            if (
                                i &&
                                !(function (t, e) {
                                    return Mr(t, !1) && t <= e.max && t >= e.min
                                })(i, oc)
                            ) {
                                const { message: t } = Nr(
                                    'MISSING_OR_INVALID',
                                    'request() expiry: '
                                        .concat(i, '. Expiry must be a number (in seconds) between ')
                                        .concat(oc.min, ' and ')
                                        .concat(oc.max)
                                )
                                throw new Error(t)
                            }
                        }),
                        (this.isValidRespond = async (t) => {
                            var e
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'respond() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: r, response: n } = t
                            try {
                                await this.isValidSessionTopic(r)
                            } catch (kn) {
                                throw (null != (e = null === t || void 0 === t ? void 0 : t.response) && e.id && this.cleanupAfterResponse(t), kn)
                            }
                            if (
                                !(function (t) {
                                    return !(Lr(t) || (Lr(t.result) && Lr(t.error)) || !Mr(t.id, !1) || !Ur(t.jsonrpc, !1))
                                })(n)
                            ) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'respond() response: '.concat(JSON.stringify(n)))
                                throw new Error(t)
                            }
                        }),
                        (this.isValidPing = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'ping() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e } = t
                            await this.isValidSessionOrPairingTopic(e)
                        }),
                        (this.isValidEmit = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'emit() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e, event: r, chainId: n } = t
                            await this.isValidSessionTopic(e)
                            const { namespaces: i } = this.client.session.get(e)
                            if (!Fr(i, n)) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'emit() chainId: '.concat(n))
                                throw new Error(t)
                            }
                            if (
                                !(function (t) {
                                    return !(Lr(t) || !Ur(t.name, !1))
                                })(r)
                            ) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'emit() event: '.concat(JSON.stringify(r)))
                                throw new Error(t)
                            }
                            if (!Gr(i, n, r.name)) {
                                const { message: t } = Nr('MISSING_OR_INVALID', 'emit() event: '.concat(JSON.stringify(r)))
                                throw new Error(t)
                            }
                        }),
                        (this.isValidDisconnect = async (t) => {
                            if (!Vr(t)) {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'disconnect() params: '.concat(t))
                                throw new Error(e)
                            }
                            const { topic: e } = t
                            await this.isValidSessionOrPairingTopic(e)
                        }),
                        (this.getVerifyContext = async (t, e) => {
                            const r = { verified: { verifyUrl: e.verifyUrl || ca, validation: 'UNKNOWN', origin: e.url || '' } }
                            try {
                                const n = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: e.verifyUrl })
                                n &&
                                    ((r.verified.origin = n.origin),
                                    (r.verified.isScam = n.isScam),
                                    (r.verified.validation = n.origin === new URL(e.url).origin ? 'VALID' : 'INVALID'))
                            } catch (n) {
                                this.client.logger.info(n)
                            }
                            return this.client.logger.info('Verify context: '.concat(JSON.stringify(r))), r
                        }),
                        (this.validateSessionProps = (t, e) => {
                            Object.values(t).forEach((t) => {
                                if (!Ur(t, !1)) {
                                    const { message: r } = Nr(
                                        'MISSING_OR_INVALID',
                                        ''.concat(e, ' must be in Record<string, string> format. Received: ').concat(JSON.stringify(t))
                                    )
                                    throw new Error(r)
                                }
                            })
                        })
                }
                async isInitialized() {
                    if (!this.initialized) {
                        const { message: t } = Nr('NOT_INITIALIZED', this.name)
                        throw new Error(t)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(To, async (t) => {
                        const { topic: e, message: r } = t
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return
                        const n = await this.client.core.crypto.decode(e, r)
                        try {
                            Li(n)
                                ? (this.client.core.history.set(e, n), this.onRelayEventRequest({ topic: e, payload: n }))
                                : Ui(n)
                                  ? (await this.client.core.history.resolve(n),
                                    await this.onRelayEventResponse({ topic: e, payload: n }),
                                    this.client.core.history.delete(e, n.id))
                                  : this.onRelayEventUnknownPayload({ topic: e, payload: n })
                        } catch (i) {
                            this.client.logger.error(i)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(sa, async (t) => {
                        const { topic: e, id: r } = ar(t.target)
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, Nr('EXPIRED'), !0)
                        e
                            ? this.client.session.keys.includes(e) &&
                              (await this.deleteSession({ topic: e, expirerHasDeleted: !0 }), this.client.events.emit('session_expire', { topic: e }))
                            : r && (await this.deleteProposal(r, !0), this.client.events.emit('proposal_expire', { id: r }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(Jo, (t) => this.onPairingCreated(t))
                }
                isValidPairingTopic(t) {
                    if (!Ur(t, !1)) {
                        const { message: e } = Nr('MISSING_OR_INVALID', 'pairing topic should be a string: '.concat(t))
                        throw new Error(e)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                        const { message: e } = Nr('NO_MATCHING_KEY', "pairing topic doesn't exist: ".concat(t))
                        throw new Error(e)
                    }
                    if (ur(this.client.core.pairing.pairings.get(t).expiry)) {
                        const { message: e } = Nr('EXPIRED', 'pairing topic: '.concat(t))
                        throw new Error(e)
                    }
                }
                async isValidSessionTopic(t) {
                    if (!Ur(t, !1)) {
                        const { message: e } = Nr('MISSING_OR_INVALID', 'session topic should be a string: '.concat(t))
                        throw new Error(e)
                    }
                    if (!this.client.session.keys.includes(t)) {
                        const { message: e } = Nr('NO_MATCHING_KEY', "session topic doesn't exist: ".concat(t))
                        throw new Error(e)
                    }
                    if (ur(this.client.session.get(t).expiry)) {
                        await this.deleteSession({ topic: t })
                        const { message: e } = Nr('EXPIRED', 'session topic: '.concat(t))
                        throw new Error(e)
                    }
                    if (!this.client.core.crypto.keychain.has(t)) {
                        const { message: e } = Nr('MISSING_OR_INVALID', 'session topic does not exist in keychain: '.concat(t))
                        throw (await this.deleteSession({ topic: t }), new Error(e))
                    }
                }
                async isValidSessionOrPairingTopic(t) {
                    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t)
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(t)) {
                            if (Ur(t, !1)) {
                                const { message: e } = Nr('NO_MATCHING_KEY', "session or pairing topic doesn't exist: ".concat(t))
                                throw new Error(e)
                            }
                            {
                                const { message: e } = Nr('MISSING_OR_INVALID', 'session or pairing topic should be a string: '.concat(t))
                                throw new Error(e)
                            }
                        }
                        this.isValidPairingTopic(t)
                    }
                }
                async isValidProposalId(t) {
                    if ('number' != typeof t) {
                        const { message: e } = Nr('MISSING_OR_INVALID', 'proposal id should be a number: '.concat(t))
                        throw new Error(e)
                    }
                    if (!this.client.proposal.keys.includes(t)) {
                        const { message: e } = Nr('NO_MATCHING_KEY', "proposal id doesn't exist: ".concat(t))
                        throw new Error(e)
                    }
                    if (ur(this.client.proposal.get(t).expiryTimestamp)) {
                        await this.deleteProposal(t)
                        const { message: e } = Nr('EXPIRED', 'proposal id: '.concat(t))
                        throw new Error(e)
                    }
                }
            }
            class _c extends ka {
                constructor(t, e) {
                    super(t, e, 'proposal', Za), (this.core = t), (this.logger = e)
                }
            }
            class bc extends ka {
                constructor(t, e) {
                    super(t, e, 'session', Za), (this.core = t), (this.logger = e)
                }
            }
            class Ec extends ka {
                constructor(t, e) {
                    super(t, e, 'request', Za, (t) => t.id), (this.core = t), (this.logger = e)
                }
            }
            class Sc extends Yn {
                constructor(t) {
                    super(t),
                        (this.protocol = 'wc'),
                        (this.version = 2),
                        (this.name = tc),
                        (this.events = new v.EventEmitter()),
                        (this.on = (t, e) => this.events.on(t, e)),
                        (this.once = (t, e) => this.events.once(t, e)),
                        (this.off = (t, e) => this.events.off(t, e)),
                        (this.removeListener = (t, e) => this.events.removeListener(t, e)),
                        (this.removeAllListeners = (t) => this.events.removeAllListeners(t)),
                        (this.connect = async (t) => {
                            try {
                                return await this.engine.connect(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.pair = async (t) => {
                            try {
                                return await this.engine.pair(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.approve = async (t) => {
                            try {
                                return await this.engine.approve(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.reject = async (t) => {
                            try {
                                return await this.engine.reject(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.update = async (t) => {
                            try {
                                return await this.engine.update(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.extend = async (t) => {
                            try {
                                return await this.engine.extend(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.request = async (t) => {
                            try {
                                return await this.engine.request(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.respond = async (t) => {
                            try {
                                return await this.engine.respond(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.ping = async (t) => {
                            try {
                                return await this.engine.ping(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.emit = async (t) => {
                            try {
                                return await this.engine.emit(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.disconnect = async (t) => {
                            try {
                                return await this.engine.disconnect(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.find = (t) => {
                            try {
                                return this.engine.find(t)
                            } catch (e) {
                                throw (this.logger.error(e.message), e)
                            }
                        }),
                        (this.getPendingSessionRequests = () => {
                            try {
                                return this.engine.getPendingSessionRequests()
                            } catch (t) {
                                throw (this.logger.error(t.message), t)
                            }
                        }),
                        (this.name = (null === t || void 0 === t ? void 0 : t.name) || tc),
                        (this.metadata = (null === t || void 0 === t ? void 0 : t.metadata) ||
                            (0, ve.D)() || { name: '', description: '', url: '', icons: [''] })
                    const e =
                        typeof (null === t || void 0 === t ? void 0 : t.logger) < 'u' &&
                        'string' != typeof (null === t || void 0 === t ? void 0 : t.logger)
                            ? t.logger
                            : (0, Mn.pino)((0, Mn.getDefaultLoggerOptions)({ level: (null === t || void 0 === t ? void 0 : t.logger) || ec }))
                    ;(this.core = (null === t || void 0 === t ? void 0 : t.core) || new $a(t)),
                        (this.logger = (0, Mn.generateChildLogger)(e, this.name)),
                        (this.session = new bc(this.core, this.logger)),
                        (this.proposal = new _c(this.core, this.logger)),
                        (this.pendingRequest = new Ec(this.core, this.logger)),
                        (this.engine = new wc(this))
                }
                static async init(t) {
                    const e = new Sc(t)
                    return await e.initialize(), e
                }
                get context() {
                    return (0, Mn.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace('Initialized')
                    try {
                        await this.core.start(),
                            await this.session.init(),
                            await this.proposal.init(),
                            await this.pendingRequest.init(),
                            await this.engine.init(),
                            this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
                            this.logger.info('SignClient Initialization Success')
                    } catch (t) {
                        throw (this.logger.info('SignClient Initialization Failure'), this.logger.error(t.message), t)
                    }
                }
            }
            var Ic = r(7395),
                Oc = r.n(Ic)
            const Pc = { headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, method: 'POST' }
            class xc {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    if (
                        ((this.url = t),
                        (this.disableProviderPing = e),
                        (this.events = new v.EventEmitter()),
                        (this.isAvailable = !1),
                        (this.registering = !1),
                        !Ti(t))
                    )
                        throw new Error('Provided URL is not compatible with HTTP connection: '.concat(t))
                    ;(this.url = t), (this.disableProviderPing = e)
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url
                    await this.register(t)
                }
                async close() {
                    if (!this.isAvailable) throw new Error('Connection already closed')
                    this.onClose()
                }
                async send(t, e) {
                    this.isAvailable || (await this.register())
                    try {
                        const e = Pn(t),
                            r = await Oc()(this.url, Object.assign(Object.assign({}, Pc), { body: e })),
                            n = await r.json()
                        this.onPayload({ data: n })
                    } catch (r) {
                        this.onError(t.id, r)
                    }
                }
                async register() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url
                    if (!Ti(t)) throw new Error('Provided URL is not compatible with HTTP connection: '.concat(t))
                    if (this.registering) {
                        const t = this.events.getMaxListeners()
                        return (
                            (this.events.listenerCount('register_error') >= t || this.events.listenerCount('open') >= t) &&
                                this.events.setMaxListeners(t + 1),
                            new Promise((t, e) => {
                                this.events.once('register_error', (t) => {
                                    this.resetMaxListeners(), e(t)
                                }),
                                    this.events.once('open', () => {
                                        if ((this.resetMaxListeners(), 'undefined' === typeof this.isAvailable))
                                            return e(new Error('HTTP connection is missing or invalid'))
                                        t()
                                    })
                            })
                        )
                    }
                    ;(this.url = t), (this.registering = !0)
                    try {
                        if (!this.disableProviderPing) {
                            const e = Pn({ id: 1, jsonrpc: '2.0', method: 'test', params: [] })
                            await Oc()(t, Object.assign(Object.assign({}, Pc), { body: e }))
                        }
                        this.onOpen()
                    } catch (e) {
                        const t = this.parseError(e)
                        throw (this.events.emit('register_error', t), this.onClose(), t)
                    }
                }
                onOpen() {
                    ;(this.isAvailable = !0), (this.registering = !1), this.events.emit('open')
                }
                onClose() {
                    ;(this.isAvailable = !1), (this.registering = !1), this.events.emit('close')
                }
                onPayload(t) {
                    if ('undefined' === typeof t.data) return
                    const e = 'string' === typeof t.data ? On(t.data) : t.data
                    this.events.emit('payload', e)
                }
                onError(t, e) {
                    const r = this.parseError(e),
                        n = Oi(t, r.message || r.toString())
                    this.events.emit('payload', n)
                }
                parseError(t) {
                    return wi(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url, 'HTTP')
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            const Ac = xc,
                Rc = 'error',
                Nc = ''.concat('wc', '@2:').concat('universal_provider', ':'),
                Tc = 'default_chain_changed'
            var Cc = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof r.g < 'u' ? r.g : typeof self < 'u' ? self : {},
                jc = { exports: {} }
            !(function (t, e) {
                ;(function () {
                    var r,
                        n = 'Expected a function',
                        i = '__lodash_hash_undefined__',
                        s = '__lodash_placeholder__',
                        o = 16,
                        a = 32,
                        c = 64,
                        u = 128,
                        h = 256,
                        l = 1 / 0,
                        f = 9007199254740991,
                        p = NaN,
                        d = 4294967295,
                        g = [
                            ['ary', u],
                            ['bind', 1],
                            ['bindKey', 2],
                            ['curry', 8],
                            ['curryRight', o],
                            ['flip', 512],
                            ['partial', a],
                            ['partialRight', c],
                            ['rearg', h]
                        ],
                        y = '[object Arguments]',
                        v = '[object Array]',
                        m = '[object Boolean]',
                        w = '[object Date]',
                        _ = '[object Error]',
                        b = '[object Function]',
                        E = '[object GeneratorFunction]',
                        S = '[object Map]',
                        I = '[object Number]',
                        O = '[object Object]',
                        P = '[object Promise]',
                        x = '[object RegExp]',
                        A = '[object Set]',
                        R = '[object String]',
                        N = '[object Symbol]',
                        T = '[object WeakMap]',
                        C = '[object ArrayBuffer]',
                        j = '[object DataView]',
                        L = '[object Float32Array]',
                        U = '[object Float64Array]',
                        M = '[object Int8Array]',
                        D = '[object Int16Array]',
                        k = '[object Int32Array]',
                        q = '[object Uint8Array]',
                        z = '[object Uint8ClampedArray]',
                        H = '[object Uint16Array]',
                        B = '[object Uint32Array]',
                        K = /\b__p \+= '';/g,
                        V = /\b(__p \+=) '' \+/g,
                        F = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        W = /&(?:amp|lt|gt|quot|#39);/g,
                        G = /[&<>"']/g,
                        Y = RegExp(W.source),
                        J = RegExp(G.source),
                        Q = /<%-([\s\S]+?)%>/g,
                        $ = /<%([\s\S]+?)%>/g,
                        X = /<%=([\s\S]+?)%>/g,
                        Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        tt = /^\w*$/,
                        et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        rt = /[\\^$.*+?()[\]{}|]/g,
                        nt = RegExp(rt.source),
                        it = /^\s+/,
                        st = /\s/,
                        ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        at = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ct = /,? & /,
                        ut = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ht = /[()=,{}\[\]\/\s]/,
                        lt = /\\(\\)?/g,
                        ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        pt = /\w*$/,
                        dt = /^[-+]0x[0-9a-f]+$/i,
                        gt = /^0b[01]+$/i,
                        yt = /^\[object .+?Constructor\]$/,
                        vt = /^0o[0-7]+$/i,
                        mt = /^(?:0|[1-9]\d*)$/,
                        wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        _t = /($^)/,
                        bt = /['\n\r\u2028\u2029\\]/g,
                        Et = '\\ud800-\\udfff',
                        St = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
                        It = '\\u2700-\\u27bf',
                        Ot = 'a-z\\xdf-\\xf6\\xf8-\\xff',
                        Pt = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
                        xt = '\\ufe0e\\ufe0f',
                        At =
                            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
                        Rt = "['\u2019]",
                        Nt = '[' + Et + ']',
                        Tt = '[' + At + ']',
                        Ct = '[' + St + ']',
                        jt = '\\d+',
                        Lt = '[' + It + ']',
                        Ut = '[' + Ot + ']',
                        Mt = '[^' + Et + At + jt + It + Ot + Pt + ']',
                        Dt = '\\ud83c[\\udffb-\\udfff]',
                        kt = '[^' + Et + ']',
                        qt = '(?:\\ud83c[\\udde6-\\uddff]){2}',
                        zt = '[\\ud800-\\udbff][\\udc00-\\udfff]',
                        Ht = '[' + Pt + ']',
                        Bt = '\\u200d',
                        Kt = '(?:' + Ut + '|' + Mt + ')',
                        Vt = '(?:' + Ht + '|' + Mt + ')',
                        Ft = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        Wt = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        Gt = '(?:' + Ct + '|' + Dt + ')' + '?',
                        Yt = '[' + xt + ']?',
                        Jt = Yt + Gt + ('(?:' + Bt + '(?:' + [kt, qt, zt].join('|') + ')' + Yt + Gt + ')*'),
                        Qt = '(?:' + [Lt, qt, zt].join('|') + ')' + Jt,
                        $t = '(?:' + [kt + Ct + '?', Ct, qt, zt, Nt].join('|') + ')',
                        Xt = RegExp(Rt, 'g'),
                        Zt = RegExp(Ct, 'g'),
                        te = RegExp(Dt + '(?=' + Dt + ')|' + $t + Jt, 'g'),
                        ee = RegExp(
                            [
                                Ht + '?' + Ut + '+' + Ft + '(?=' + [Tt, Ht, '$'].join('|') + ')',
                                Vt + '+' + Wt + '(?=' + [Tt, Ht + Kt, '$'].join('|') + ')',
                                Ht + '?' + Kt + '+' + Ft,
                                Ht + '+' + Wt,
                                '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
                                '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
                                jt,
                                Qt
                            ].join('|'),
                            'g'
                        ),
                        re = RegExp('[' + Bt + Et + St + xt + ']'),
                        ne = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        ie = [
                            'Array',
                            'Buffer',
                            'DataView',
                            'Date',
                            'Error',
                            'Float32Array',
                            'Float64Array',
                            'Function',
                            'Int8Array',
                            'Int16Array',
                            'Int32Array',
                            'Map',
                            'Math',
                            'Object',
                            'Promise',
                            'RegExp',
                            'Set',
                            'String',
                            'Symbol',
                            'TypeError',
                            'Uint8Array',
                            'Uint8ClampedArray',
                            'Uint16Array',
                            'Uint32Array',
                            'WeakMap',
                            '_',
                            'clearTimeout',
                            'isFinite',
                            'parseInt',
                            'setTimeout'
                        ],
                        se = -1,
                        oe = {}
                    ;(oe[L] = oe[U] = oe[M] = oe[D] = oe[k] = oe[q] = oe[z] = oe[H] = oe[B] = !0),
                        (oe[y] = oe[v] = oe[C] = oe[m] = oe[j] = oe[w] = oe[_] = oe[b] = oe[S] = oe[I] = oe[O] = oe[x] = oe[A] = oe[R] = oe[T] = !1)
                    var ae = {}
                    ;(ae[y] =
                        ae[v] =
                        ae[C] =
                        ae[j] =
                        ae[m] =
                        ae[w] =
                        ae[L] =
                        ae[U] =
                        ae[M] =
                        ae[D] =
                        ae[k] =
                        ae[S] =
                        ae[I] =
                        ae[O] =
                        ae[x] =
                        ae[A] =
                        ae[R] =
                        ae[N] =
                        ae[q] =
                        ae[z] =
                        ae[H] =
                        ae[B] =
                            !0),
                        (ae[_] = ae[b] = ae[T] = !1)
                    var ce = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
                        ue = parseFloat,
                        he = parseInt,
                        le = 'object' == typeof Cc && Cc && Cc.Object === Object && Cc,
                        fe = 'object' == typeof self && self && self.Object === Object && self,
                        pe = le || fe || Function('return this')(),
                        de = e && !e.nodeType && e,
                        ge = de && t && !t.nodeType && t,
                        ye = ge && ge.exports === de,
                        ve = ye && le.process,
                        me = (function () {
                            try {
                                return (ge && ge.require && ge.require('util').types) || (ve && ve.binding && ve.binding('util'))
                            } catch {}
                        })(),
                        we = me && me.isArrayBuffer,
                        _e = me && me.isDate,
                        be = me && me.isMap,
                        Ee = me && me.isRegExp,
                        Se = me && me.isSet,
                        Ie = me && me.isTypedArray
                    function Oe(t, e, r) {
                        switch (r.length) {
                            case 0:
                                return t.call(e)
                            case 1:
                                return t.call(e, r[0])
                            case 2:
                                return t.call(e, r[0], r[1])
                            case 3:
                                return t.call(e, r[0], r[1], r[2])
                        }
                        return t.apply(e, r)
                    }
                    function Pe(t, e, r, n) {
                        for (var i = -1, s = null == t ? 0 : t.length; ++i < s; ) {
                            var o = t[i]
                            e(n, o, r(o), t)
                        }
                        return n
                    }
                    function xe(t, e) {
                        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t); );
                        return t
                    }
                    function Ae(t, e) {
                        for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t); );
                        return t
                    }
                    function Re(t, e) {
                        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (!e(t[r], r, t)) return !1
                        return !0
                    }
                    function Ne(t, e) {
                        for (var r = -1, n = null == t ? 0 : t.length, i = 0, s = []; ++r < n; ) {
                            var o = t[r]
                            e(o, r, t) && (s[i++] = o)
                        }
                        return s
                    }
                    function Te(t, e) {
                        return !!(null == t ? 0 : t.length) && He(t, e, 0) > -1
                    }
                    function Ce(t, e, r) {
                        for (var n = -1, i = null == t ? 0 : t.length; ++n < i; ) if (r(e, t[n])) return !0
                        return !1
                    }
                    function je(t, e) {
                        for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; ) i[r] = e(t[r], r, t)
                        return i
                    }
                    function Le(t, e) {
                        for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r]
                        return t
                    }
                    function Ue(t, e, r, n) {
                        var i = -1,
                            s = null == t ? 0 : t.length
                        for (n && s && (r = t[++i]); ++i < s; ) r = e(r, t[i], i, t)
                        return r
                    }
                    function Me(t, e, r, n) {
                        var i = null == t ? 0 : t.length
                        for (n && i && (r = t[--i]); i--; ) r = e(r, t[i], i, t)
                        return r
                    }
                    function De(t, e) {
                        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0
                        return !1
                    }
                    var ke = Fe('length')
                    function qe(t, e, r) {
                        var n
                        return (
                            r(t, function (t, r, i) {
                                if (e(t, r, i)) return (n = r), !1
                            }),
                            n
                        )
                    }
                    function ze(t, e, r, n) {
                        for (var i = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; ) if (e(t[s], s, t)) return s
                        return -1
                    }
                    function He(t, e, r) {
                        return e === e
                            ? (function (t, e, r) {
                                  for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n
                                  return -1
                              })(t, e, r)
                            : ze(t, Ke, r)
                    }
                    function Be(t, e, r, n) {
                        for (var i = r - 1, s = t.length; ++i < s; ) if (n(t[i], e)) return i
                        return -1
                    }
                    function Ke(t) {
                        return t !== t
                    }
                    function Ve(t, e) {
                        var r = null == t ? 0 : t.length
                        return r ? Ye(t, e) / r : p
                    }
                    function Fe(t) {
                        return function (e) {
                            return null == e ? r : e[t]
                        }
                    }
                    function We(t) {
                        return function (e) {
                            return null == t ? r : t[e]
                        }
                    }
                    function Ge(t, e, r, n, i) {
                        return (
                            i(t, function (t, i, s) {
                                r = n ? ((n = !1), t) : e(r, t, i, s)
                            }),
                            r
                        )
                    }
                    function Ye(t, e) {
                        for (var n, i = -1, s = t.length; ++i < s; ) {
                            var o = e(t[i])
                            o !== r && (n = n === r ? o : n + o)
                        }
                        return n
                    }
                    function Je(t, e) {
                        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r)
                        return n
                    }
                    function Qe(t) {
                        return t && t.slice(0, fr(t) + 1).replace(it, '')
                    }
                    function $e(t) {
                        return function (e) {
                            return t(e)
                        }
                    }
                    function Xe(t, e) {
                        return je(e, function (e) {
                            return t[e]
                        })
                    }
                    function Ze(t, e) {
                        return t.has(e)
                    }
                    function tr(t, e) {
                        for (var r = -1, n = t.length; ++r < n && He(e, t[r], 0) > -1; );
                        return r
                    }
                    function er(t, e) {
                        for (var r = t.length; r-- && He(e, t[r], 0) > -1; );
                        return r
                    }
                    var rr = We({
                            '\xc0': 'A',
                            '\xc1': 'A',
                            '\xc2': 'A',
                            '\xc3': 'A',
                            '\xc4': 'A',
                            '\xc5': 'A',
                            '\xe0': 'a',
                            '\xe1': 'a',
                            '\xe2': 'a',
                            '\xe3': 'a',
                            '\xe4': 'a',
                            '\xe5': 'a',
                            '\xc7': 'C',
                            '\xe7': 'c',
                            '\xd0': 'D',
                            '\xf0': 'd',
                            '\xc8': 'E',
                            '\xc9': 'E',
                            '\xca': 'E',
                            '\xcb': 'E',
                            '\xe8': 'e',
                            '\xe9': 'e',
                            '\xea': 'e',
                            '\xeb': 'e',
                            '\xcc': 'I',
                            '\xcd': 'I',
                            '\xce': 'I',
                            '\xcf': 'I',
                            '\xec': 'i',
                            '\xed': 'i',
                            '\xee': 'i',
                            '\xef': 'i',
                            '\xd1': 'N',
                            '\xf1': 'n',
                            '\xd2': 'O',
                            '\xd3': 'O',
                            '\xd4': 'O',
                            '\xd5': 'O',
                            '\xd6': 'O',
                            '\xd8': 'O',
                            '\xf2': 'o',
                            '\xf3': 'o',
                            '\xf4': 'o',
                            '\xf5': 'o',
                            '\xf6': 'o',
                            '\xf8': 'o',
                            '\xd9': 'U',
                            '\xda': 'U',
                            '\xdb': 'U',
                            '\xdc': 'U',
                            '\xf9': 'u',
                            '\xfa': 'u',
                            '\xfb': 'u',
                            '\xfc': 'u',
                            '\xdd': 'Y',
                            '\xfd': 'y',
                            '\xff': 'y',
                            '\xc6': 'Ae',
                            '\xe6': 'ae',
                            '\xde': 'Th',
                            '\xfe': 'th',
                            '\xdf': 'ss',
                            '\u0100': 'A',
                            '\u0102': 'A',
                            '\u0104': 'A',
                            '\u0101': 'a',
                            '\u0103': 'a',
                            '\u0105': 'a',
                            '\u0106': 'C',
                            '\u0108': 'C',
                            '\u010a': 'C',
                            '\u010c': 'C',
                            '\u0107': 'c',
                            '\u0109': 'c',
                            '\u010b': 'c',
                            '\u010d': 'c',
                            '\u010e': 'D',
                            '\u0110': 'D',
                            '\u010f': 'd',
                            '\u0111': 'd',
                            '\u0112': 'E',
                            '\u0114': 'E',
                            '\u0116': 'E',
                            '\u0118': 'E',
                            '\u011a': 'E',
                            '\u0113': 'e',
                            '\u0115': 'e',
                            '\u0117': 'e',
                            '\u0119': 'e',
                            '\u011b': 'e',
                            '\u011c': 'G',
                            '\u011e': 'G',
                            '\u0120': 'G',
                            '\u0122': 'G',
                            '\u011d': 'g',
                            '\u011f': 'g',
                            '\u0121': 'g',
                            '\u0123': 'g',
                            '\u0124': 'H',
                            '\u0126': 'H',
                            '\u0125': 'h',
                            '\u0127': 'h',
                            '\u0128': 'I',
                            '\u012a': 'I',
                            '\u012c': 'I',
                            '\u012e': 'I',
                            '\u0130': 'I',
                            '\u0129': 'i',
                            '\u012b': 'i',
                            '\u012d': 'i',
                            '\u012f': 'i',
                            '\u0131': 'i',
                            '\u0134': 'J',
                            '\u0135': 'j',
                            '\u0136': 'K',
                            '\u0137': 'k',
                            '\u0138': 'k',
                            '\u0139': 'L',
                            '\u013b': 'L',
                            '\u013d': 'L',
                            '\u013f': 'L',
                            '\u0141': 'L',
                            '\u013a': 'l',
                            '\u013c': 'l',
                            '\u013e': 'l',
                            '\u0140': 'l',
                            '\u0142': 'l',
                            '\u0143': 'N',
                            '\u0145': 'N',
                            '\u0147': 'N',
                            '\u014a': 'N',
                            '\u0144': 'n',
                            '\u0146': 'n',
                            '\u0148': 'n',
                            '\u014b': 'n',
                            '\u014c': 'O',
                            '\u014e': 'O',
                            '\u0150': 'O',
                            '\u014d': 'o',
                            '\u014f': 'o',
                            '\u0151': 'o',
                            '\u0154': 'R',
                            '\u0156': 'R',
                            '\u0158': 'R',
                            '\u0155': 'r',
                            '\u0157': 'r',
                            '\u0159': 'r',
                            '\u015a': 'S',
                            '\u015c': 'S',
                            '\u015e': 'S',
                            '\u0160': 'S',
                            '\u015b': 's',
                            '\u015d': 's',
                            '\u015f': 's',
                            '\u0161': 's',
                            '\u0162': 'T',
                            '\u0164': 'T',
                            '\u0166': 'T',
                            '\u0163': 't',
                            '\u0165': 't',
                            '\u0167': 't',
                            '\u0168': 'U',
                            '\u016a': 'U',
                            '\u016c': 'U',
                            '\u016e': 'U',
                            '\u0170': 'U',
                            '\u0172': 'U',
                            '\u0169': 'u',
                            '\u016b': 'u',
                            '\u016d': 'u',
                            '\u016f': 'u',
                            '\u0171': 'u',
                            '\u0173': 'u',
                            '\u0174': 'W',
                            '\u0175': 'w',
                            '\u0176': 'Y',
                            '\u0177': 'y',
                            '\u0178': 'Y',
                            '\u0179': 'Z',
                            '\u017b': 'Z',
                            '\u017d': 'Z',
                            '\u017a': 'z',
                            '\u017c': 'z',
                            '\u017e': 'z',
                            '\u0132': 'IJ',
                            '\u0133': 'ij',
                            '\u0152': 'Oe',
                            '\u0153': 'oe',
                            '\u0149': "'n",
                            '\u017f': 's'
                        }),
                        nr = We({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })
                    function ir(t) {
                        return '\\' + ce[t]
                    }
                    function sr(t) {
                        return re.test(t)
                    }
                    function or(t) {
                        var e = -1,
                            r = Array(t.size)
                        return (
                            t.forEach(function (t, n) {
                                r[++e] = [n, t]
                            }),
                            r
                        )
                    }
                    function ar(t, e) {
                        return function (r) {
                            return t(e(r))
                        }
                    }
                    function cr(t, e) {
                        for (var r = -1, n = t.length, i = 0, o = []; ++r < n; ) {
                            var a = t[r]
                            ;(a === e || a === s) && ((t[r] = s), (o[i++] = r))
                        }
                        return o
                    }
                    function ur(t) {
                        var e = -1,
                            r = Array(t.size)
                        return (
                            t.forEach(function (t) {
                                r[++e] = t
                            }),
                            r
                        )
                    }
                    function hr(t) {
                        return sr(t)
                            ? (function (t) {
                                  for (var e = (te.lastIndex = 0); te.test(t); ) ++e
                                  return e
                              })(t)
                            : ke(t)
                    }
                    function lr(t) {
                        return sr(t)
                            ? (function (t) {
                                  return t.match(te) || []
                              })(t)
                            : (function (t) {
                                  return t.split('')
                              })(t)
                    }
                    function fr(t) {
                        for (var e = t.length; e-- && st.test(t.charAt(e)); );
                        return e
                    }
                    var pr = We({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" })
                    var dr = (function t(e) {
                        var st = (e = null == e ? pe : dr.defaults(pe.Object(), e, dr.pick(pe, ie))).Array,
                            Et = e.Date,
                            St = e.Error,
                            It = e.Function,
                            Ot = e.Math,
                            Pt = e.Object,
                            xt = e.RegExp,
                            At = e.String,
                            Rt = e.TypeError,
                            Nt = st.prototype,
                            Tt = It.prototype,
                            Ct = Pt.prototype,
                            jt = e['__core-js_shared__'],
                            Lt = Tt.toString,
                            Ut = Ct.hasOwnProperty,
                            Mt = 0,
                            Dt = (function () {
                                var t = /[^.]+$/.exec((jt && jt.keys && jt.keys.IE_PROTO) || '')
                                return t ? 'Symbol(src)_1.' + t : ''
                            })(),
                            kt = Ct.toString,
                            qt = Lt.call(Pt),
                            zt = pe._,
                            Ht = xt(
                                '^' +
                                    Lt.call(Ut)
                                        .replace(rt, '\\$&')
                                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                                    '$'
                            ),
                            Bt = ye ? e.Buffer : r,
                            Kt = e.Symbol,
                            Vt = e.Uint8Array,
                            Ft = Bt ? Bt.allocUnsafe : r,
                            Wt = ar(Pt.getPrototypeOf, Pt),
                            Gt = Pt.create,
                            Yt = Ct.propertyIsEnumerable,
                            Jt = Nt.splice,
                            Qt = Kt ? Kt.isConcatSpreadable : r,
                            $t = Kt ? Kt.iterator : r,
                            te = Kt ? Kt.toStringTag : r,
                            re = (function () {
                                try {
                                    var t = hs(Pt, 'defineProperty')
                                    return t({}, '', {}), t
                                } catch {}
                            })(),
                            ce = e.clearTimeout !== pe.clearTimeout && e.clearTimeout,
                            le = Et && Et.now !== pe.Date.now && Et.now,
                            fe = e.setTimeout !== pe.setTimeout && e.setTimeout,
                            de = Ot.ceil,
                            ge = Ot.floor,
                            ve = Pt.getOwnPropertySymbols,
                            me = Bt ? Bt.isBuffer : r,
                            ke = e.isFinite,
                            We = Nt.join,
                            gr = ar(Pt.keys, Pt),
                            yr = Ot.max,
                            vr = Ot.min,
                            mr = Et.now,
                            wr = e.parseInt,
                            _r = Ot.random,
                            br = Nt.reverse,
                            Er = hs(e, 'DataView'),
                            Sr = hs(e, 'Map'),
                            Ir = hs(e, 'Promise'),
                            Or = hs(e, 'Set'),
                            Pr = hs(e, 'WeakMap'),
                            xr = hs(Pt, 'create'),
                            Ar = Pr && new Pr(),
                            Rr = {},
                            Nr = Ms(Er),
                            Tr = Ms(Sr),
                            Cr = Ms(Ir),
                            jr = Ms(Or),
                            Lr = Ms(Pr),
                            Ur = Kt ? Kt.prototype : r,
                            Mr = Ur ? Ur.valueOf : r,
                            Dr = Ur ? Ur.toString : r
                        function kr(t) {
                            if (ta(t) && !Ko(t) && !(t instanceof Br)) {
                                if (t instanceof Hr) return t
                                if (Ut.call(t, '__wrapped__')) return Ds(t)
                            }
                            return new Hr(t)
                        }
                        var qr = (function () {
                            function t() {}
                            return function (e) {
                                if (!Zo(e)) return {}
                                if (Gt) return Gt(e)
                                t.prototype = e
                                var n = new t()
                                return (t.prototype = r), n
                            }
                        })()
                        function zr() {}
                        function Hr(t, e) {
                            ;(this.__wrapped__ = t), (this.__actions__ = []), (this.__chain__ = !!e), (this.__index__ = 0), (this.__values__ = r)
                        }
                        function Br(t) {
                            ;(this.__wrapped__ = t),
                                (this.__actions__ = []),
                                (this.__dir__ = 1),
                                (this.__filtered__ = !1),
                                (this.__iteratees__ = []),
                                (this.__takeCount__ = d),
                                (this.__views__ = [])
                        }
                        function Kr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length
                            for (this.clear(); ++e < r; ) {
                                var n = t[e]
                                this.set(n[0], n[1])
                            }
                        }
                        function Vr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length
                            for (this.clear(); ++e < r; ) {
                                var n = t[e]
                                this.set(n[0], n[1])
                            }
                        }
                        function Fr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length
                            for (this.clear(); ++e < r; ) {
                                var n = t[e]
                                this.set(n[0], n[1])
                            }
                        }
                        function Wr(t) {
                            var e = -1,
                                r = null == t ? 0 : t.length
                            for (this.__data__ = new Fr(); ++e < r; ) this.add(t[e])
                        }
                        function Gr(t) {
                            var e = (this.__data__ = new Vr(t))
                            this.size = e.size
                        }
                        function Yr(t, e) {
                            var r = Ko(t),
                                n = !r && Bo(t),
                                i = !r && !n && Go(t),
                                s = !r && !n && !i && ca(t),
                                o = r || n || i || s,
                                a = o ? Je(t.length, At) : [],
                                c = a.length
                            for (var u in t)
                                (e || Ut.call(t, u)) &&
                                    (!o ||
                                        !(
                                            'length' == u ||
                                            (i && ('offset' == u || 'parent' == u)) ||
                                            (s && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                                            vs(u, c)
                                        )) &&
                                    a.push(u)
                            return a
                        }
                        function Jr(t) {
                            var e = t.length
                            return e ? t[Gn(0, e - 1)] : r
                        }
                        function Qr(t, e) {
                            return js(Ai(t), on(e, 0, t.length))
                        }
                        function $r(t) {
                            return js(Ai(t))
                        }
                        function Xr(t, e, n) {
                            ;((n !== r && !qo(t[e], n)) || (n === r && !(e in t))) && nn(t, e, n)
                        }
                        function Zr(t, e, n) {
                            var i = t[e]
                            ;(!Ut.call(t, e) || !qo(i, n) || (n === r && !(e in t))) && nn(t, e, n)
                        }
                        function tn(t, e) {
                            for (var r = t.length; r--; ) if (qo(t[r][0], e)) return r
                            return -1
                        }
                        function en(t, e, r, n) {
                            return (
                                ln(t, function (t, i, s) {
                                    e(n, t, r(t), s)
                                }),
                                n
                            )
                        }
                        function rn(t, e) {
                            return t && Ri(e, Na(e), t)
                        }
                        function nn(t, e, r) {
                            '__proto__' == e && re ? re(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (t[e] = r)
                        }
                        function sn(t, e) {
                            for (var n = -1, i = e.length, s = st(i), o = null == t; ++n < i; ) s[n] = o ? r : Oa(t, e[n])
                            return s
                        }
                        function on(t, e, n) {
                            return t === t && (n !== r && (t = t <= n ? t : n), e !== r && (t = t >= e ? t : e)), t
                        }
                        function an(t, e, n, i, s, o) {
                            var a,
                                c = 1 & e,
                                u = 2 & e,
                                h = 4 & e
                            if ((n && (a = s ? n(t, i, s, o) : n(t)), a !== r)) return a
                            if (!Zo(t)) return t
                            var l = Ko(t)
                            if (l) {
                                if (
                                    ((a = (function (t) {
                                        var e = t.length,
                                            r = new t.constructor(e)
                                        return e && 'string' == typeof t[0] && Ut.call(t, 'index') && ((r.index = t.index), (r.input = t.input)), r
                                    })(t)),
                                    !c)
                                )
                                    return Ai(t, a)
                            } else {
                                var f = ps(t),
                                    p = f == b || f == E
                                if (Go(t)) return Ei(t, c)
                                if (f == O || f == y || (p && !s)) {
                                    if (((a = u || p ? {} : gs(t)), !c))
                                        return u
                                            ? (function (t, e) {
                                                  return Ri(t, fs(t), e)
                                              })(
                                                  t,
                                                  (function (t, e) {
                                                      return t && Ri(e, Ta(e), t)
                                                  })(a, t)
                                              )
                                            : (function (t, e) {
                                                  return Ri(t, ls(t), e)
                                              })(t, rn(a, t))
                                } else {
                                    if (!ae[f]) return s ? t : {}
                                    a = (function (t, e, r) {
                                        var n = t.constructor
                                        switch (e) {
                                            case C:
                                                return Si(t)
                                            case m:
                                            case w:
                                                return new n(+t)
                                            case j:
                                                return (function (t, e) {
                                                    var r = e ? Si(t.buffer) : t.buffer
                                                    return new t.constructor(r, t.byteOffset, t.byteLength)
                                                })(t, r)
                                            case L:
                                            case U:
                                            case M:
                                            case D:
                                            case k:
                                            case q:
                                            case z:
                                            case H:
                                            case B:
                                                return Ii(t, r)
                                            case S:
                                                return new n()
                                            case I:
                                            case R:
                                                return new n(t)
                                            case x:
                                                return (function (t) {
                                                    var e = new t.constructor(t.source, pt.exec(t))
                                                    return (e.lastIndex = t.lastIndex), e
                                                })(t)
                                            case A:
                                                return new n()
                                            case N:
                                                return (function (t) {
                                                    return Mr ? Pt(Mr.call(t)) : {}
                                                })(t)
                                        }
                                    })(t, f, c)
                                }
                            }
                            o || (o = new Gr())
                            var d = o.get(t)
                            if (d) return d
                            o.set(t, a),
                                sa(t)
                                    ? t.forEach(function (r) {
                                          a.add(an(r, e, n, r, t, o))
                                      })
                                    : ea(t) &&
                                      t.forEach(function (r, i) {
                                          a.set(i, an(r, e, n, i, t, o))
                                      })
                            var g = l ? r : (h ? (u ? ns : rs) : u ? Ta : Na)(t)
                            return (
                                xe(g || t, function (r, i) {
                                    g && (r = t[(i = r)]), Zr(a, i, an(r, e, n, i, t, o))
                                }),
                                a
                            )
                        }
                        function cn(t, e, n) {
                            var i = n.length
                            if (null == t) return !i
                            for (t = Pt(t); i--; ) {
                                var s = n[i],
                                    o = e[s],
                                    a = t[s]
                                if ((a === r && !(s in t)) || !o(a)) return !1
                            }
                            return !0
                        }
                        function un(t, e, i) {
                            if ('function' != typeof t) throw new Rt(n)
                            return Rs(function () {
                                t.apply(r, i)
                            }, e)
                        }
                        function hn(t, e, r, n) {
                            var i = -1,
                                s = Te,
                                o = !0,
                                a = t.length,
                                c = [],
                                u = e.length
                            if (!a) return c
                            r && (e = je(e, $e(r))), n ? ((s = Ce), (o = !1)) : e.length >= 200 && ((s = Ze), (o = !1), (e = new Wr(e)))
                            t: for (; ++i < a; ) {
                                var h = t[i],
                                    l = null == r ? h : r(h)
                                if (((h = n || 0 !== h ? h : 0), o && l === l)) {
                                    for (var f = u; f--; ) if (e[f] === l) continue t
                                    c.push(h)
                                } else s(e, l, n) || c.push(h)
                            }
                            return c
                        }
                        ;(kr.templateSettings = { escape: Q, evaluate: $, interpolate: X, variable: '', imports: { _: kr } }),
                            (kr.prototype = zr.prototype),
                            (kr.prototype.constructor = kr),
                            (Hr.prototype = qr(zr.prototype)),
                            (Hr.prototype.constructor = Hr),
                            (Br.prototype = qr(zr.prototype)),
                            (Br.prototype.constructor = Br),
                            (Kr.prototype.clear = function () {
                                ;(this.__data__ = xr ? xr(null) : {}), (this.size = 0)
                            }),
                            (Kr.prototype.delete = function (t) {
                                var e = this.has(t) && delete this.__data__[t]
                                return (this.size -= e ? 1 : 0), e
                            }),
                            (Kr.prototype.get = function (t) {
                                var e = this.__data__
                                if (xr) {
                                    var n = e[t]
                                    return n === i ? r : n
                                }
                                return Ut.call(e, t) ? e[t] : r
                            }),
                            (Kr.prototype.has = function (t) {
                                var e = this.__data__
                                return xr ? e[t] !== r : Ut.call(e, t)
                            }),
                            (Kr.prototype.set = function (t, e) {
                                var n = this.__data__
                                return (this.size += this.has(t) ? 0 : 1), (n[t] = xr && e === r ? i : e), this
                            }),
                            (Vr.prototype.clear = function () {
                                ;(this.__data__ = []), (this.size = 0)
                            }),
                            (Vr.prototype.delete = function (t) {
                                var e = this.__data__,
                                    r = tn(e, t)
                                return !(r < 0) && (r == e.length - 1 ? e.pop() : Jt.call(e, r, 1), --this.size, !0)
                            }),
                            (Vr.prototype.get = function (t) {
                                var e = this.__data__,
                                    n = tn(e, t)
                                return n < 0 ? r : e[n][1]
                            }),
                            (Vr.prototype.has = function (t) {
                                return tn(this.__data__, t) > -1
                            }),
                            (Vr.prototype.set = function (t, e) {
                                var r = this.__data__,
                                    n = tn(r, t)
                                return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this
                            }),
                            (Fr.prototype.clear = function () {
                                ;(this.size = 0), (this.__data__ = { hash: new Kr(), map: new (Sr || Vr)(), string: new Kr() })
                            }),
                            (Fr.prototype.delete = function (t) {
                                var e = cs(this, t).delete(t)
                                return (this.size -= e ? 1 : 0), e
                            }),
                            (Fr.prototype.get = function (t) {
                                return cs(this, t).get(t)
                            }),
                            (Fr.prototype.has = function (t) {
                                return cs(this, t).has(t)
                            }),
                            (Fr.prototype.set = function (t, e) {
                                var r = cs(this, t),
                                    n = r.size
                                return r.set(t, e), (this.size += r.size == n ? 0 : 1), this
                            }),
                            (Wr.prototype.add = Wr.prototype.push =
                                function (t) {
                                    return this.__data__.set(t, i), this
                                }),
                            (Wr.prototype.has = function (t) {
                                return this.__data__.has(t)
                            }),
                            (Gr.prototype.clear = function () {
                                ;(this.__data__ = new Vr()), (this.size = 0)
                            }),
                            (Gr.prototype.delete = function (t) {
                                var e = this.__data__,
                                    r = e.delete(t)
                                return (this.size = e.size), r
                            }),
                            (Gr.prototype.get = function (t) {
                                return this.__data__.get(t)
                            }),
                            (Gr.prototype.has = function (t) {
                                return this.__data__.has(t)
                            }),
                            (Gr.prototype.set = function (t, e) {
                                var r = this.__data__
                                if (r instanceof Vr) {
                                    var n = r.__data__
                                    if (!Sr || n.length < 199) return n.push([t, e]), (this.size = ++r.size), this
                                    r = this.__data__ = new Fr(n)
                                }
                                return r.set(t, e), (this.size = r.size), this
                            })
                        var ln = Ci(wn),
                            fn = Ci(_n, !0)
                        function pn(t, e) {
                            var r = !0
                            return (
                                ln(t, function (t, n, i) {
                                    return (r = !!e(t, n, i))
                                }),
                                r
                            )
                        }
                        function dn(t, e, n) {
                            for (var i = -1, s = t.length; ++i < s; ) {
                                var o = t[i],
                                    a = e(o)
                                if (null != a && (c === r ? a === a && !aa(a) : n(a, c)))
                                    var c = a,
                                        u = o
                            }
                            return u
                        }
                        function gn(t, e) {
                            var r = []
                            return (
                                ln(t, function (t, n, i) {
                                    e(t, n, i) && r.push(t)
                                }),
                                r
                            )
                        }
                        function yn(t, e, r, n, i) {
                            var s = -1,
                                o = t.length
                            for (r || (r = ys), i || (i = []); ++s < o; ) {
                                var a = t[s]
                                e > 0 && r(a) ? (e > 1 ? yn(a, e - 1, r, n, i) : Le(i, a)) : n || (i[i.length] = a)
                            }
                            return i
                        }
                        var vn = ji(),
                            mn = ji(!0)
                        function wn(t, e) {
                            return t && vn(t, e, Na)
                        }
                        function _n(t, e) {
                            return t && mn(t, e, Na)
                        }
                        function bn(t, e) {
                            return Ne(e, function (e) {
                                return Qo(t[e])
                            })
                        }
                        function En(t, e) {
                            for (var n = 0, i = (e = mi(e, t)).length; null != t && n < i; ) t = t[Us(e[n++])]
                            return n && n == i ? t : r
                        }
                        function Sn(t, e, r) {
                            var n = e(t)
                            return Ko(t) ? n : Le(n, r(t))
                        }
                        function In(t) {
                            return null == t
                                ? t === r
                                    ? '[object Undefined]'
                                    : '[object Null]'
                                : te && te in Pt(t)
                                  ? (function (t) {
                                        var e = Ut.call(t, te),
                                            n = t[te]
                                        try {
                                            t[te] = r
                                            var i = !0
                                        } catch {}
                                        var s = kt.call(t)
                                        return i && (e ? (t[te] = n) : delete t[te]), s
                                    })(t)
                                  : (function (t) {
                                        return kt.call(t)
                                    })(t)
                        }
                        function On(t, e) {
                            return t > e
                        }
                        function Pn(t, e) {
                            return null != t && Ut.call(t, e)
                        }
                        function xn(t, e) {
                            return null != t && e in Pt(t)
                        }
                        function An(t, e, n) {
                            for (var i = n ? Ce : Te, s = t[0].length, o = t.length, a = o, c = st(o), u = 1 / 0, h = []; a--; ) {
                                var l = t[a]
                                a && e && (l = je(l, $e(e))),
                                    (u = vr(l.length, u)),
                                    (c[a] = !n && (e || (s >= 120 && l.length >= 120)) ? new Wr(a && l) : r)
                            }
                            l = t[0]
                            var f = -1,
                                p = c[0]
                            t: for (; ++f < s && h.length < u; ) {
                                var d = l[f],
                                    g = e ? e(d) : d
                                if (((d = n || 0 !== d ? d : 0), !(p ? Ze(p, g) : i(h, g, n)))) {
                                    for (a = o; --a; ) {
                                        var y = c[a]
                                        if (!(y ? Ze(y, g) : i(t[a], g, n))) continue t
                                    }
                                    p && p.push(g), h.push(d)
                                }
                            }
                            return h
                        }
                        function Rn(t, e, n) {
                            var i = null == (t = Ps(t, (e = mi(e, t)))) ? t : t[Us(Ys(e))]
                            return null == i ? r : Oe(i, t, n)
                        }
                        function Nn(t) {
                            return ta(t) && In(t) == y
                        }
                        function Tn(t, e, n, i, s) {
                            return (
                                t === e ||
                                (null == t || null == e || (!ta(t) && !ta(e))
                                    ? t !== t && e !== e
                                    : (function (t, e, n, i, s, o) {
                                          var a = Ko(t),
                                              c = Ko(e),
                                              u = a ? v : ps(t),
                                              h = c ? v : ps(e)
                                          ;(u = u == y ? O : u), (h = h == y ? O : h)
                                          var l = u == O,
                                              f = h == O,
                                              p = u == h
                                          if (p && Go(t)) {
                                              if (!Go(e)) return !1
                                              ;(a = !0), (l = !1)
                                          }
                                          if (p && !l)
                                              return (
                                                  o || (o = new Gr()),
                                                  a || ca(t)
                                                      ? ts(t, e, n, i, s, o)
                                                      : (function (t, e, r, n, i, s, o) {
                                                            switch (r) {
                                                                case j:
                                                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1
                                                                    ;(t = t.buffer), (e = e.buffer)
                                                                case C:
                                                                    return !(t.byteLength != e.byteLength || !s(new Vt(t), new Vt(e)))
                                                                case m:
                                                                case w:
                                                                case I:
                                                                    return qo(+t, +e)
                                                                case _:
                                                                    return t.name == e.name && t.message == e.message
                                                                case x:
                                                                case R:
                                                                    return t == e + ''
                                                                case S:
                                                                    var a = or
                                                                case A:
                                                                    var c = 1 & n
                                                                    if ((a || (a = ur), t.size != e.size && !c)) return !1
                                                                    var u = o.get(t)
                                                                    if (u) return u == e
                                                                    ;(n |= 2), o.set(t, e)
                                                                    var h = ts(a(t), a(e), n, i, s, o)
                                                                    return o.delete(t), h
                                                                case N:
                                                                    if (Mr) return Mr.call(t) == Mr.call(e)
                                                            }
                                                            return !1
                                                        })(t, e, u, n, i, s, o)
                                              )
                                          if (!(1 & n)) {
                                              var d = l && Ut.call(t, '__wrapped__'),
                                                  g = f && Ut.call(e, '__wrapped__')
                                              if (d || g) {
                                                  var b = d ? t.value() : t,
                                                      E = g ? e.value() : e
                                                  return o || (o = new Gr()), s(b, E, n, i, o)
                                              }
                                          }
                                          return (
                                              !!p &&
                                              (o || (o = new Gr()),
                                              (function (t, e, n, i, s, o) {
                                                  var a = 1 & n,
                                                      c = rs(t),
                                                      u = c.length,
                                                      h = rs(e),
                                                      l = h.length
                                                  if (u != l && !a) return !1
                                                  for (var f = u; f--; ) {
                                                      var p = c[f]
                                                      if (!(a ? p in e : Ut.call(e, p))) return !1
                                                  }
                                                  var d = o.get(t),
                                                      g = o.get(e)
                                                  if (d && g) return d == e && g == t
                                                  var y = !0
                                                  o.set(t, e), o.set(e, t)
                                                  for (var v = a; ++f < u; ) {
                                                      var m = t[(p = c[f])],
                                                          w = e[p]
                                                      if (i) var _ = a ? i(w, m, p, e, t, o) : i(m, w, p, t, e, o)
                                                      if (!(_ === r ? m === w || s(m, w, n, i, o) : _)) {
                                                          y = !1
                                                          break
                                                      }
                                                      v || (v = 'constructor' == p)
                                                  }
                                                  if (y && !v) {
                                                      var b = t.constructor,
                                                          E = e.constructor
                                                      b != E &&
                                                          'constructor' in t &&
                                                          'constructor' in e &&
                                                          !('function' == typeof b && b instanceof b && 'function' == typeof E && E instanceof E) &&
                                                          (y = !1)
                                                  }
                                                  return o.delete(t), o.delete(e), y
                                              })(t, e, n, i, s, o))
                                          )
                                      })(t, e, n, i, Tn, s))
                            )
                        }
                        function Cn(t, e, n, i) {
                            var s = n.length,
                                o = s,
                                a = !i
                            if (null == t) return !o
                            for (t = Pt(t); s--; ) {
                                var c = n[s]
                                if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                            }
                            for (; ++s < o; ) {
                                var u = (c = n[s])[0],
                                    h = t[u],
                                    l = c[1]
                                if (a && c[2]) {
                                    if (h === r && !(u in t)) return !1
                                } else {
                                    var f = new Gr()
                                    if (i) var p = i(h, l, u, t, e, f)
                                    if (!(p === r ? Tn(l, h, 3, i, f) : p)) return !1
                                }
                            }
                            return !0
                        }
                        function jn(t) {
                            return (
                                !(
                                    !Zo(t) ||
                                    (function (t) {
                                        return !!Dt && Dt in t
                                    })(t)
                                ) && (Qo(t) ? Ht : yt).test(Ms(t))
                            )
                        }
                        function Ln(t) {
                            return 'function' == typeof t ? t : null == t ? rc : 'object' == typeof t ? (Ko(t) ? zn(t[0], t[1]) : qn(t)) : lc(t)
                        }
                        function Un(t) {
                            if (!Es(t)) return gr(t)
                            var e = []
                            for (var r in Pt(t)) Ut.call(t, r) && 'constructor' != r && e.push(r)
                            return e
                        }
                        function Mn(t) {
                            if (!Zo(t))
                                return (function (t) {
                                    var e = []
                                    if (null != t) for (var r in Pt(t)) e.push(r)
                                    return e
                                })(t)
                            var e = Es(t),
                                r = []
                            for (var n in t) ('constructor' == n && (e || !Ut.call(t, n))) || r.push(n)
                            return r
                        }
                        function Dn(t, e) {
                            return t < e
                        }
                        function kn(t, e) {
                            var r = -1,
                                n = Fo(t) ? st(t.length) : []
                            return (
                                ln(t, function (t, i, s) {
                                    n[++r] = e(t, i, s)
                                }),
                                n
                            )
                        }
                        function qn(t) {
                            var e = us(t)
                            return 1 == e.length && e[0][2]
                                ? Is(e[0][0], e[0][1])
                                : function (r) {
                                      return r === t || Cn(r, t, e)
                                  }
                        }
                        function zn(t, e) {
                            return ws(t) && Ss(e)
                                ? Is(Us(t), e)
                                : function (n) {
                                      var i = Oa(n, t)
                                      return i === r && i === e ? Pa(n, t) : Tn(e, i, 3)
                                  }
                        }
                        function Hn(t, e, n, i, s) {
                            t !== e &&
                                vn(
                                    e,
                                    function (o, a) {
                                        if ((s || (s = new Gr()), Zo(o)))
                                            !(function (t, e, n, i, s, o, a) {
                                                var c = xs(t, n),
                                                    u = xs(e, n),
                                                    h = a.get(u)
                                                if (h) return void Xr(t, n, h)
                                                var l = o ? o(c, u, n + '', t, e, a) : r,
                                                    f = l === r
                                                if (f) {
                                                    var p = Ko(u),
                                                        d = !p && Go(u),
                                                        g = !p && !d && ca(u)
                                                    ;(l = u),
                                                        p || d || g
                                                            ? Ko(c)
                                                                ? (l = c)
                                                                : Wo(c)
                                                                  ? (l = Ai(c))
                                                                  : d
                                                                    ? ((f = !1), (l = Ei(u, !0)))
                                                                    : g
                                                                      ? ((f = !1), (l = Ii(u, !0)))
                                                                      : (l = [])
                                                            : na(u) || Bo(u)
                                                              ? ((l = c), Bo(c) ? (l = ya(c)) : (!Zo(c) || Qo(c)) && (l = gs(u)))
                                                              : (f = !1)
                                                }
                                                f && (a.set(u, l), s(l, u, i, o, a), a.delete(u)), Xr(t, n, l)
                                            })(t, e, a, n, Hn, i, s)
                                        else {
                                            var c = i ? i(xs(t, a), o, a + '', t, e, s) : r
                                            c === r && (c = o), Xr(t, a, c)
                                        }
                                    },
                                    Ta
                                )
                        }
                        function Bn(t, e) {
                            var n = t.length
                            if (n) return vs((e += e < 0 ? n : 0), n) ? t[e] : r
                        }
                        function Kn(t, e, r) {
                            e = e.length
                                ? je(e, function (t) {
                                      return Ko(t)
                                          ? function (e) {
                                                return En(e, 1 === t.length ? t[0] : t)
                                            }
                                          : t
                                  })
                                : [rc]
                            var n = -1
                            e = je(e, $e(as()))
                            var i = kn(t, function (t, r, i) {
                                var s = je(e, function (e) {
                                    return e(t)
                                })
                                return { criteria: s, index: ++n, value: t }
                            })
                            return (function (t, e) {
                                var r = t.length
                                for (t.sort(e); r--; ) t[r] = t[r].value
                                return t
                            })(i, function (t, e) {
                                return (function (t, e, r) {
                                    for (var n = -1, i = t.criteria, s = e.criteria, o = i.length, a = r.length; ++n < o; ) {
                                        var c = Oi(i[n], s[n])
                                        if (c) return n >= a ? c : c * ('desc' == r[n] ? -1 : 1)
                                    }
                                    return t.index - e.index
                                })(t, e, r)
                            })
                        }
                        function Vn(t, e, r) {
                            for (var n = -1, i = e.length, s = {}; ++n < i; ) {
                                var o = e[n],
                                    a = En(t, o)
                                r(a, o) && Xn(s, mi(o, t), a)
                            }
                            return s
                        }
                        function Fn(t, e, r, n) {
                            var i = n ? Be : He,
                                s = -1,
                                o = e.length,
                                a = t
                            for (t === e && (e = Ai(e)), r && (a = je(t, $e(r))); ++s < o; )
                                for (var c = 0, u = e[s], h = r ? r(u) : u; (c = i(a, h, c, n)) > -1; ) a !== t && Jt.call(a, c, 1), Jt.call(t, c, 1)
                            return t
                        }
                        function Wn(t, e) {
                            for (var r = t ? e.length : 0, n = r - 1; r--; ) {
                                var i = e[r]
                                if (r == n || i !== s) {
                                    var s = i
                                    vs(i) ? Jt.call(t, i, 1) : hi(t, i)
                                }
                            }
                            return t
                        }
                        function Gn(t, e) {
                            return t + ge(_r() * (e - t + 1))
                        }
                        function Yn(t, e) {
                            var r = ''
                            if (!t || e < 1 || e > f) return r
                            do {
                                e % 2 && (r += t), (e = ge(e / 2)) && (t += t)
                            } while (e)
                            return r
                        }
                        function Jn(t, e) {
                            return Ns(Os(t, e, rc), t + '')
                        }
                        function Qn(t) {
                            return Jr(qa(t))
                        }
                        function $n(t, e) {
                            var r = qa(t)
                            return js(r, on(e, 0, r.length))
                        }
                        function Xn(t, e, n, i) {
                            if (!Zo(t)) return t
                            for (var s = -1, o = (e = mi(e, t)).length, a = o - 1, c = t; null != c && ++s < o; ) {
                                var u = Us(e[s]),
                                    h = n
                                if ('__proto__' === u || 'constructor' === u || 'prototype' === u) return t
                                if (s != a) {
                                    var l = c[u]
                                    ;(h = i ? i(l, u, c) : r) === r && (h = Zo(l) ? l : vs(e[s + 1]) ? [] : {})
                                }
                                Zr(c, u, h), (c = c[u])
                            }
                            return t
                        }
                        var Zn = Ar
                                ? function (t, e) {
                                      return Ar.set(t, e), t
                                  }
                                : rc,
                            ti = re
                                ? function (t, e) {
                                      return re(t, 'toString', { configurable: !0, enumerable: !1, value: Za(e), writable: !0 })
                                  }
                                : rc
                        function ei(t) {
                            return js(qa(t))
                        }
                        function ri(t, e, r) {
                            var n = -1,
                                i = t.length
                            e < 0 && (e = -e > i ? 0 : i + e), (r = r > i ? i : r) < 0 && (r += i), (i = e > r ? 0 : (r - e) >>> 0), (e >>>= 0)
                            for (var s = st(i); ++n < i; ) s[n] = t[n + e]
                            return s
                        }
                        function ni(t, e) {
                            var r
                            return (
                                ln(t, function (t, n, i) {
                                    return !(r = e(t, n, i))
                                }),
                                !!r
                            )
                        }
                        function ii(t, e, r) {
                            var n = 0,
                                i = null == t ? n : t.length
                            if ('number' == typeof e && e === e && i <= 2147483647) {
                                for (; n < i; ) {
                                    var s = (n + i) >>> 1,
                                        o = t[s]
                                    null !== o && !aa(o) && (r ? o <= e : o < e) ? (n = s + 1) : (i = s)
                                }
                                return i
                            }
                            return si(t, e, rc, r)
                        }
                        function si(t, e, n, i) {
                            var s = 0,
                                o = null == t ? 0 : t.length
                            if (0 === o) return 0
                            for (var a = (e = n(e)) !== e, c = null === e, u = aa(e), h = e === r; s < o; ) {
                                var l = ge((s + o) / 2),
                                    f = n(t[l]),
                                    p = f !== r,
                                    d = null === f,
                                    g = f === f,
                                    y = aa(f)
                                if (a) var v = i || g
                                else
                                    v = h ? g && (i || p) : c ? g && p && (i || !d) : u ? g && p && !d && (i || !y) : !d && !y && (i ? f <= e : f < e)
                                v ? (s = l + 1) : (o = l)
                            }
                            return vr(o, 4294967294)
                        }
                        function oi(t, e) {
                            for (var r = -1, n = t.length, i = 0, s = []; ++r < n; ) {
                                var o = t[r],
                                    a = e ? e(o) : o
                                if (!r || !qo(a, c)) {
                                    var c = a
                                    s[i++] = 0 === o ? 0 : o
                                }
                            }
                            return s
                        }
                        function ai(t) {
                            return 'number' == typeof t ? t : aa(t) ? p : +t
                        }
                        function ci(t) {
                            if ('string' == typeof t) return t
                            if (Ko(t)) return je(t, ci) + ''
                            if (aa(t)) return Dr ? Dr.call(t) : ''
                            var e = t + ''
                            return '0' == e && 1 / t == -l ? '-0' : e
                        }
                        function ui(t, e, r) {
                            var n = -1,
                                i = Te,
                                s = t.length,
                                o = !0,
                                a = [],
                                c = a
                            if (r) (o = !1), (i = Ce)
                            else if (s >= 200) {
                                var u = e ? null : Yi(t)
                                if (u) return ur(u)
                                ;(o = !1), (i = Ze), (c = new Wr())
                            } else c = e ? [] : a
                            t: for (; ++n < s; ) {
                                var h = t[n],
                                    l = e ? e(h) : h
                                if (((h = r || 0 !== h ? h : 0), o && l === l)) {
                                    for (var f = c.length; f--; ) if (c[f] === l) continue t
                                    e && c.push(l), a.push(h)
                                } else i(c, l, r) || (c !== a && c.push(l), a.push(h))
                            }
                            return a
                        }
                        function hi(t, e) {
                            return null == (t = Ps(t, (e = mi(e, t)))) || delete t[Us(Ys(e))]
                        }
                        function li(t, e, r, n) {
                            return Xn(t, e, r(En(t, e)), n)
                        }
                        function fi(t, e, r, n) {
                            for (var i = t.length, s = n ? i : -1; (n ? s-- : ++s < i) && e(t[s], s, t); );
                            return r ? ri(t, n ? 0 : s, n ? s + 1 : i) : ri(t, n ? s + 1 : 0, n ? i : s)
                        }
                        function pi(t, e) {
                            var r = t
                            return (
                                r instanceof Br && (r = r.value()),
                                Ue(
                                    e,
                                    function (t, e) {
                                        return e.func.apply(e.thisArg, Le([t], e.args))
                                    },
                                    r
                                )
                            )
                        }
                        function di(t, e, r) {
                            var n = t.length
                            if (n < 2) return n ? ui(t[0]) : []
                            for (var i = -1, s = st(n); ++i < n; ) for (var o = t[i], a = -1; ++a < n; ) a != i && (s[i] = hn(s[i] || o, t[a], e, r))
                            return ui(yn(s, 1), e, r)
                        }
                        function gi(t, e, n) {
                            for (var i = -1, s = t.length, o = e.length, a = {}; ++i < s; ) {
                                var c = i < o ? e[i] : r
                                n(a, t[i], c)
                            }
                            return a
                        }
                        function yi(t) {
                            return Wo(t) ? t : []
                        }
                        function vi(t) {
                            return 'function' == typeof t ? t : rc
                        }
                        function mi(t, e) {
                            return Ko(t) ? t : ws(t, e) ? [t] : Ls(va(t))
                        }
                        var wi = Jn
                        function _i(t, e, n) {
                            var i = t.length
                            return (n = n === r ? i : n), !e && n >= i ? t : ri(t, e, n)
                        }
                        var bi =
                            ce ||
                            function (t) {
                                return pe.clearTimeout(t)
                            }
                        function Ei(t, e) {
                            if (e) return t.slice()
                            var r = t.length,
                                n = Ft ? Ft(r) : new t.constructor(r)
                            return t.copy(n), n
                        }
                        function Si(t) {
                            var e = new t.constructor(t.byteLength)
                            return new Vt(e).set(new Vt(t)), e
                        }
                        function Ii(t, e) {
                            var r = e ? Si(t.buffer) : t.buffer
                            return new t.constructor(r, t.byteOffset, t.length)
                        }
                        function Oi(t, e) {
                            if (t !== e) {
                                var n = t !== r,
                                    i = null === t,
                                    s = t === t,
                                    o = aa(t),
                                    a = e !== r,
                                    c = null === e,
                                    u = e === e,
                                    h = aa(e)
                                if ((!c && !h && !o && t > e) || (o && a && u && !c && !h) || (i && a && u) || (!n && u) || !s) return 1
                                if ((!i && !o && !h && t < e) || (h && n && s && !i && !o) || (c && n && s) || (!a && s) || !u) return -1
                            }
                            return 0
                        }
                        function Pi(t, e, r, n) {
                            for (var i = -1, s = t.length, o = r.length, a = -1, c = e.length, u = yr(s - o, 0), h = st(c + u), l = !n; ++a < c; )
                                h[a] = e[a]
                            for (; ++i < o; ) (l || i < s) && (h[r[i]] = t[i])
                            for (; u--; ) h[a++] = t[i++]
                            return h
                        }
                        function xi(t, e, r, n) {
                            for (
                                var i = -1, s = t.length, o = -1, a = r.length, c = -1, u = e.length, h = yr(s - a, 0), l = st(h + u), f = !n;
                                ++i < h;

                            )
                                l[i] = t[i]
                            for (var p = i; ++c < u; ) l[p + c] = e[c]
                            for (; ++o < a; ) (f || i < s) && (l[p + r[o]] = t[i++])
                            return l
                        }
                        function Ai(t, e) {
                            var r = -1,
                                n = t.length
                            for (e || (e = st(n)); ++r < n; ) e[r] = t[r]
                            return e
                        }
                        function Ri(t, e, n, i) {
                            var s = !n
                            n || (n = {})
                            for (var o = -1, a = e.length; ++o < a; ) {
                                var c = e[o],
                                    u = i ? i(n[c], t[c], c, n, t) : r
                                u === r && (u = t[c]), s ? nn(n, c, u) : Zr(n, c, u)
                            }
                            return n
                        }
                        function Ni(t, e) {
                            return function (r, n) {
                                var i = Ko(r) ? Pe : en,
                                    s = e ? e() : {}
                                return i(r, t, as(n, 2), s)
                            }
                        }
                        function Ti(t) {
                            return Jn(function (e, n) {
                                var i = -1,
                                    s = n.length,
                                    o = s > 1 ? n[s - 1] : r,
                                    a = s > 2 ? n[2] : r
                                for (
                                    o = t.length > 3 && 'function' == typeof o ? (s--, o) : r,
                                        a && ms(n[0], n[1], a) && ((o = s < 3 ? r : o), (s = 1)),
                                        e = Pt(e);
                                    ++i < s;

                                ) {
                                    var c = n[i]
                                    c && t(e, c, i, o)
                                }
                                return e
                            })
                        }
                        function Ci(t, e) {
                            return function (r, n) {
                                if (null == r) return r
                                if (!Fo(r)) return t(r, n)
                                for (var i = r.length, s = e ? i : -1, o = Pt(r); (e ? s-- : ++s < i) && !1 !== n(o[s], s, o); );
                                return r
                            }
                        }
                        function ji(t) {
                            return function (e, r, n) {
                                for (var i = -1, s = Pt(e), o = n(e), a = o.length; a--; ) {
                                    var c = o[t ? a : ++i]
                                    if (!1 === r(s[c], c, s)) break
                                }
                                return e
                            }
                        }
                        function Li(t) {
                            return function (e) {
                                var n = sr((e = va(e))) ? lr(e) : r,
                                    i = n ? n[0] : e.charAt(0),
                                    s = n ? _i(n, 1).join('') : e.slice(1)
                                return i[t]() + s
                            }
                        }
                        function Ui(t) {
                            return function (e) {
                                return Ue(Qa(Ba(e).replace(Xt, '')), t, '')
                            }
                        }
                        function Mi(t) {
                            return function () {
                                var e = arguments
                                switch (e.length) {
                                    case 0:
                                        return new t()
                                    case 1:
                                        return new t(e[0])
                                    case 2:
                                        return new t(e[0], e[1])
                                    case 3:
                                        return new t(e[0], e[1], e[2])
                                    case 4:
                                        return new t(e[0], e[1], e[2], e[3])
                                    case 5:
                                        return new t(e[0], e[1], e[2], e[3], e[4])
                                    case 6:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5])
                                    case 7:
                                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                                }
                                var r = qr(t.prototype),
                                    n = t.apply(r, e)
                                return Zo(n) ? n : r
                            }
                        }
                        function Di(t) {
                            return function (e, n, i) {
                                var s = Pt(e)
                                if (!Fo(e)) {
                                    var o = as(n, 3)
                                    ;(e = Na(e)),
                                        (n = function (t) {
                                            return o(s[t], t, s)
                                        })
                                }
                                var a = t(e, n, i)
                                return a > -1 ? s[o ? e[a] : a] : r
                            }
                        }
                        function ki(t) {
                            return es(function (e) {
                                var i = e.length,
                                    s = i,
                                    o = Hr.prototype.thru
                                for (t && e.reverse(); s--; ) {
                                    var a = e[s]
                                    if ('function' != typeof a) throw new Rt(n)
                                    if (o && !c && 'wrapper' == ss(a)) var c = new Hr([], !0)
                                }
                                for (s = c ? s : i; ++s < i; ) {
                                    var u = ss((a = e[s])),
                                        h = 'wrapper' == u ? is(a) : r
                                    c =
                                        h && _s(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                                            ? c[ss(h[0])].apply(c, h[3])
                                            : 1 == a.length && _s(a)
                                              ? c[u]()
                                              : c.thru(a)
                                }
                                return function () {
                                    var t = arguments,
                                        r = t[0]
                                    if (c && 1 == t.length && Ko(r)) return c.plant(r).value()
                                    for (var n = 0, s = i ? e[n].apply(this, t) : r; ++n < i; ) s = e[n].call(this, s)
                                    return s
                                }
                            })
                        }
                        function qi(t, e, n, i, s, o, a, c, h, l) {
                            var f = e & u,
                                p = 1 & e,
                                d = 2 & e,
                                g = 24 & e,
                                y = 512 & e,
                                v = d ? r : Mi(t)
                            return function u() {
                                for (var m = arguments.length, w = st(m), _ = m; _--; ) w[_] = arguments[_]
                                if (g)
                                    var b = os(u),
                                        E = (function (t, e) {
                                            for (var r = t.length, n = 0; r--; ) t[r] === e && ++n
                                            return n
                                        })(w, b)
                                if ((i && (w = Pi(w, i, s, g)), o && (w = xi(w, o, a, g)), (m -= E), g && m < l)) {
                                    var S = cr(w, b)
                                    return Wi(t, e, qi, u.placeholder, n, w, S, c, h, l - m)
                                }
                                var I = p ? n : this,
                                    O = d ? I[t] : t
                                return (
                                    (m = w.length),
                                    c
                                        ? (w = (function (t, e) {
                                              for (var n = t.length, i = vr(e.length, n), s = Ai(t); i--; ) {
                                                  var o = e[i]
                                                  t[i] = vs(o, n) ? s[o] : r
                                              }
                                              return t
                                          })(w, c))
                                        : y && m > 1 && w.reverse(),
                                    f && h < m && (w.length = h),
                                    this && this !== pe && this instanceof u && (O = v || Mi(O)),
                                    O.apply(I, w)
                                )
                            }
                        }
                        function zi(t, e) {
                            return function (r, n) {
                                return (function (t, e, r, n) {
                                    return (
                                        wn(t, function (t, i, s) {
                                            e(n, r(t), i, s)
                                        }),
                                        n
                                    )
                                })(r, t, e(n), {})
                            }
                        }
                        function Hi(t, e) {
                            return function (n, i) {
                                var s
                                if (n === r && i === r) return e
                                if ((n !== r && (s = n), i !== r)) {
                                    if (s === r) return i
                                    'string' == typeof n || 'string' == typeof i ? ((n = ci(n)), (i = ci(i))) : ((n = ai(n)), (i = ai(i))),
                                        (s = t(n, i))
                                }
                                return s
                            }
                        }
                        function Bi(t) {
                            return es(function (e) {
                                return (
                                    (e = je(e, $e(as()))),
                                    Jn(function (r) {
                                        var n = this
                                        return t(e, function (t) {
                                            return Oe(t, n, r)
                                        })
                                    })
                                )
                            })
                        }
                        function Ki(t, e) {
                            var n = (e = e === r ? ' ' : ci(e)).length
                            if (n < 2) return n ? Yn(e, t) : e
                            var i = Yn(e, de(t / hr(e)))
                            return sr(e) ? _i(lr(i), 0, t).join('') : i.slice(0, t)
                        }
                        function Vi(t) {
                            return function (e, n, i) {
                                return (
                                    i && 'number' != typeof i && ms(e, n, i) && (n = i = r),
                                    (e = fa(e)),
                                    n === r ? ((n = e), (e = 0)) : (n = fa(n)),
                                    (function (t, e, r, n) {
                                        for (var i = -1, s = yr(de((e - t) / (r || 1)), 0), o = st(s); s--; ) (o[n ? s : ++i] = t), (t += r)
                                        return o
                                    })(e, n, (i = i === r ? (e < n ? 1 : -1) : fa(i)), t)
                                )
                            }
                        }
                        function Fi(t) {
                            return function (e, r) {
                                return ('string' == typeof e && 'string' == typeof r) || ((e = ga(e)), (r = ga(r))), t(e, r)
                            }
                        }
                        function Wi(t, e, n, i, s, o, u, h, l, f) {
                            var p = 8 & e
                            ;(e |= p ? a : c), 4 & (e &= ~(p ? c : a)) || (e &= -4)
                            var d = [t, e, s, p ? o : r, p ? u : r, p ? r : o, p ? r : u, h, l, f],
                                g = n.apply(r, d)
                            return _s(t) && As(g, d), (g.placeholder = i), Ts(g, t, e)
                        }
                        function Gi(t) {
                            var e = Ot[t]
                            return function (t, r) {
                                if (((t = ga(t)), (r = null == r ? 0 : vr(pa(r), 292)) && ke(t))) {
                                    var n = (va(t) + 'e').split('e')
                                    return +((n = (va(e(n[0] + 'e' + (+n[1] + r))) + 'e').split('e'))[0] + 'e' + (+n[1] - r))
                                }
                                return e(t)
                            }
                        }
                        var Yi =
                            Or && 1 / ur(new Or([, -0]))[1] == l
                                ? function (t) {
                                      return new Or(t)
                                  }
                                : ac
                        function Ji(t) {
                            return function (e) {
                                var r = ps(e)
                                return r == S
                                    ? or(e)
                                    : r == A
                                      ? (function (t) {
                                            var e = -1,
                                                r = Array(t.size)
                                            return (
                                                t.forEach(function (t) {
                                                    r[++e] = [t, t]
                                                }),
                                                r
                                            )
                                        })(e)
                                      : (function (t, e) {
                                            return je(e, function (e) {
                                                return [e, t[e]]
                                            })
                                        })(e, t(e))
                            }
                        }
                        function Qi(t, e, i, l, f, p, d, g) {
                            var y = 2 & e
                            if (!y && 'function' != typeof t) throw new Rt(n)
                            var v = l ? l.length : 0
                            if (
                                (v || ((e &= -97), (l = f = r)),
                                (d = d === r ? d : yr(pa(d), 0)),
                                (g = g === r ? g : pa(g)),
                                (v -= f ? f.length : 0),
                                e & c)
                            ) {
                                var m = l,
                                    w = f
                                l = f = r
                            }
                            var _ = y ? r : is(t),
                                b = [t, e, i, l, f, m, w, p, d, g]
                            if (
                                (_ &&
                                    (function (t, e) {
                                        var r = t[1],
                                            n = e[1],
                                            i = r | n,
                                            o = i < 131,
                                            a =
                                                (n == u && 8 == r) ||
                                                (n == u && r == h && t[7].length <= e[8]) ||
                                                (384 == n && e[7].length <= e[8] && 8 == r)
                                        if (!o && !a) return t
                                        1 & n && ((t[2] = e[2]), (i |= 1 & r ? 0 : 4))
                                        var c = e[3]
                                        if (c) {
                                            var l = t[3]
                                            ;(t[3] = l ? Pi(l, c, e[4]) : c), (t[4] = l ? cr(t[3], s) : e[4])
                                        }
                                        ;(c = e[5]),
                                            c && ((l = t[5]), (t[5] = l ? xi(l, c, e[6]) : c), (t[6] = l ? cr(t[5], s) : e[6])),
                                            (c = e[7]),
                                            c && (t[7] = c),
                                            n & u && (t[8] = null == t[8] ? e[8] : vr(t[8], e[8])),
                                            null == t[9] && (t[9] = e[9]),
                                            (t[0] = e[0]),
                                            (t[1] = i)
                                    })(b, _),
                                (t = b[0]),
                                (e = b[1]),
                                (i = b[2]),
                                (l = b[3]),
                                (f = b[4]),
                                !(g = b[9] = b[9] === r ? (y ? 0 : t.length) : yr(b[9] - v, 0)) && 24 & e && (e &= -25),
                                e && 1 != e)
                            )
                                E =
                                    8 == e || e == o
                                        ? (function (t, e, n) {
                                              var i = Mi(t)
                                              return function s() {
                                                  for (var o = arguments.length, a = st(o), c = o, u = os(s); c--; ) a[c] = arguments[c]
                                                  var h = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : cr(a, u)
                                                  return (o -= h.length) < n
                                                      ? Wi(t, e, qi, s.placeholder, r, a, h, r, r, n - o)
                                                      : Oe(this && this !== pe && this instanceof s ? i : t, this, a)
                                              }
                                          })(t, e, g)
                                        : (e != a && 33 != e) || f.length
                                          ? qi.apply(r, b)
                                          : (function (t, e, r, n) {
                                                var i = 1 & e,
                                                    s = Mi(t)
                                                return function e() {
                                                    for (
                                                        var o = -1,
                                                            a = arguments.length,
                                                            c = -1,
                                                            u = n.length,
                                                            h = st(u + a),
                                                            l = this && this !== pe && this instanceof e ? s : t;
                                                        ++c < u;

                                                    )
                                                        h[c] = n[c]
                                                    for (; a--; ) h[c++] = arguments[++o]
                                                    return Oe(l, i ? r : this, h)
                                                }
                                            })(t, e, i, l)
                            else
                                var E = (function (t, e, r) {
                                    var n = 1 & e,
                                        i = Mi(t)
                                    return function e() {
                                        return (this && this !== pe && this instanceof e ? i : t).apply(n ? r : this, arguments)
                                    }
                                })(t, e, i)
                            return Ts((_ ? Zn : As)(E, b), t, e)
                        }
                        function $i(t, e, n, i) {
                            return t === r || (qo(t, Ct[n]) && !Ut.call(i, n)) ? e : t
                        }
                        function Xi(t, e, n, i, s, o) {
                            return Zo(t) && Zo(e) && (o.set(e, t), Hn(t, e, r, Xi, o), o.delete(e)), t
                        }
                        function Zi(t) {
                            return na(t) ? r : t
                        }
                        function ts(t, e, n, i, s, o) {
                            var a = 1 & n,
                                c = t.length,
                                u = e.length
                            if (c != u && !(a && u > c)) return !1
                            var h = o.get(t),
                                l = o.get(e)
                            if (h && l) return h == e && l == t
                            var f = -1,
                                p = !0,
                                d = 2 & n ? new Wr() : r
                            for (o.set(t, e), o.set(e, t); ++f < c; ) {
                                var g = t[f],
                                    y = e[f]
                                if (i) var v = a ? i(y, g, f, e, t, o) : i(g, y, f, t, e, o)
                                if (v !== r) {
                                    if (v) continue
                                    p = !1
                                    break
                                }
                                if (d) {
                                    if (
                                        !De(e, function (t, e) {
                                            if (!Ze(d, e) && (g === t || s(g, t, n, i, o))) return d.push(e)
                                        })
                                    ) {
                                        p = !1
                                        break
                                    }
                                } else if (g !== y && !s(g, y, n, i, o)) {
                                    p = !1
                                    break
                                }
                            }
                            return o.delete(t), o.delete(e), p
                        }
                        function es(t) {
                            return Ns(Os(t, r, Ks), t + '')
                        }
                        function rs(t) {
                            return Sn(t, Na, ls)
                        }
                        function ns(t) {
                            return Sn(t, Ta, fs)
                        }
                        var is = Ar
                            ? function (t) {
                                  return Ar.get(t)
                              }
                            : ac
                        function ss(t) {
                            for (var e = t.name + '', r = Rr[e], n = Ut.call(Rr, e) ? r.length : 0; n--; ) {
                                var i = r[n],
                                    s = i.func
                                if (null == s || s == t) return i.name
                            }
                            return e
                        }
                        function os(t) {
                            return (Ut.call(kr, 'placeholder') ? kr : t).placeholder
                        }
                        function as() {
                            var t = kr.iteratee || nc
                            return (t = t === nc ? Ln : t), arguments.length ? t(arguments[0], arguments[1]) : t
                        }
                        function cs(t, e) {
                            var r = t.__data__
                            return (function (t) {
                                var e = typeof t
                                return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t
                            })(e)
                                ? r['string' == typeof e ? 'string' : 'hash']
                                : r.map
                        }
                        function us(t) {
                            for (var e = Na(t), r = e.length; r--; ) {
                                var n = e[r],
                                    i = t[n]
                                e[r] = [n, i, Ss(i)]
                            }
                            return e
                        }
                        function hs(t, e) {
                            var n = (function (t, e) {
                                return null == t ? r : t[e]
                            })(t, e)
                            return jn(n) ? n : r
                        }
                        var ls = ve
                                ? function (t) {
                                      return null == t
                                          ? []
                                          : ((t = Pt(t)),
                                            Ne(ve(t), function (e) {
                                                return Yt.call(t, e)
                                            }))
                                  }
                                : dc,
                            fs = ve
                                ? function (t) {
                                      for (var e = []; t; ) Le(e, ls(t)), (t = Wt(t))
                                      return e
                                  }
                                : dc,
                            ps = In
                        function ds(t, e, r) {
                            for (var n = -1, i = (e = mi(e, t)).length, s = !1; ++n < i; ) {
                                var o = Us(e[n])
                                if (!(s = null != t && r(t, o))) break
                                t = t[o]
                            }
                            return s || ++n != i ? s : !!(i = null == t ? 0 : t.length) && Xo(i) && vs(o, i) && (Ko(t) || Bo(t))
                        }
                        function gs(t) {
                            return 'function' != typeof t.constructor || Es(t) ? {} : qr(Wt(t))
                        }
                        function ys(t) {
                            return Ko(t) || Bo(t) || !!(Qt && t && t[Qt])
                        }
                        function vs(t, e) {
                            var r,
                                n = typeof t
                            return (
                                !!(e = null !== (r = e) && void 0 !== r ? r : f) &&
                                ('number' == n || ('symbol' != n && mt.test(t))) &&
                                t > -1 &&
                                t % 1 == 0 &&
                                t < e
                            )
                        }
                        function ms(t, e, r) {
                            if (!Zo(r)) return !1
                            var n = typeof e
                            return !!('number' == n ? Fo(r) && vs(e, r.length) : 'string' == n && e in r) && qo(r[e], t)
                        }
                        function ws(t, e) {
                            if (Ko(t)) return !1
                            var r = typeof t
                            return (
                                !('number' != r && 'symbol' != r && 'boolean' != r && null != t && !aa(t)) ||
                                tt.test(t) ||
                                !Z.test(t) ||
                                (null != e && t in Pt(e))
                            )
                        }
                        function _s(t) {
                            var e = ss(t),
                                r = kr[e]
                            if ('function' != typeof r || !(e in Br.prototype)) return !1
                            if (t === r) return !0
                            var n = is(r)
                            return !!n && t === n[0]
                        }
                        ;((Er && ps(new Er(new ArrayBuffer(1))) != j) ||
                            (Sr && ps(new Sr()) != S) ||
                            (Ir && ps(Ir.resolve()) != P) ||
                            (Or && ps(new Or()) != A) ||
                            (Pr && ps(new Pr()) != T)) &&
                            (ps = function (t) {
                                var e = In(t),
                                    n = e == O ? t.constructor : r,
                                    i = n ? Ms(n) : ''
                                if (i)
                                    switch (i) {
                                        case Nr:
                                            return j
                                        case Tr:
                                            return S
                                        case Cr:
                                            return P
                                        case jr:
                                            return A
                                        case Lr:
                                            return T
                                    }
                                return e
                            })
                        var bs = jt ? Qo : gc
                        function Es(t) {
                            var e = t && t.constructor
                            return t === (('function' == typeof e && e.prototype) || Ct)
                        }
                        function Ss(t) {
                            return t === t && !Zo(t)
                        }
                        function Is(t, e) {
                            return function (n) {
                                return null != n && n[t] === e && (e !== r || t in Pt(n))
                            }
                        }
                        function Os(t, e, n) {
                            return (
                                (e = yr(e === r ? t.length - 1 : e, 0)),
                                function () {
                                    for (var r = arguments, i = -1, s = yr(r.length - e, 0), o = st(s); ++i < s; ) o[i] = r[e + i]
                                    i = -1
                                    for (var a = st(e + 1); ++i < e; ) a[i] = r[i]
                                    return (a[e] = n(o)), Oe(t, this, a)
                                }
                            )
                        }
                        function Ps(t, e) {
                            return e.length < 2 ? t : En(t, ri(e, 0, -1))
                        }
                        function xs(t, e) {
                            if (('constructor' !== e || 'function' != typeof t[e]) && '__proto__' != e) return t[e]
                        }
                        var As = Cs(Zn),
                            Rs =
                                fe ||
                                function (t, e) {
                                    return pe.setTimeout(t, e)
                                },
                            Ns = Cs(ti)
                        function Ts(t, e, r) {
                            var n = e + ''
                            return Ns(
                                t,
                                (function (t, e) {
                                    var r = e.length
                                    if (!r) return t
                                    var n = r - 1
                                    return (
                                        (e[n] = (r > 1 ? '& ' : '') + e[n]),
                                        (e = e.join(r > 2 ? ', ' : ' ')),
                                        t.replace(ot, '{\n/* [wrapped with ' + e + '] */\n')
                                    )
                                })(
                                    n,
                                    (function (t, e) {
                                        return (
                                            xe(g, function (r) {
                                                var n = '_.' + r[0]
                                                e & r[1] && !Te(t, n) && t.push(n)
                                            }),
                                            t.sort()
                                        )
                                    })(
                                        (function (t) {
                                            var e = t.match(at)
                                            return e ? e[1].split(ct) : []
                                        })(n),
                                        r
                                    )
                                )
                            )
                        }
                        function Cs(t) {
                            var e = 0,
                                n = 0
                            return function () {
                                var i = mr(),
                                    s = 16 - (i - n)
                                if (((n = i), s > 0)) {
                                    if (++e >= 800) return arguments[0]
                                } else e = 0
                                return t.apply(r, arguments)
                            }
                        }
                        function js(t, e) {
                            var n = -1,
                                i = t.length,
                                s = i - 1
                            for (e = e === r ? i : e; ++n < e; ) {
                                var o = Gn(n, s),
                                    a = t[o]
                                ;(t[o] = t[n]), (t[n] = a)
                            }
                            return (t.length = e), t
                        }
                        var Ls = (function (t) {
                            var e = jo(t, function (t) {
                                    return 500 === r.size && r.clear(), t
                                }),
                                r = e.cache
                            return e
                        })(function (t) {
                            var e = []
                            return (
                                46 === t.charCodeAt(0) && e.push(''),
                                t.replace(et, function (t, r, n, i) {
                                    e.push(n ? i.replace(lt, '$1') : r || t)
                                }),
                                e
                            )
                        })
                        function Us(t) {
                            if ('string' == typeof t || aa(t)) return t
                            var e = t + ''
                            return '0' == e && 1 / t == -l ? '-0' : e
                        }
                        function Ms(t) {
                            if (null != t) {
                                try {
                                    return Lt.call(t)
                                } catch {}
                                try {
                                    return t + ''
                                } catch {}
                            }
                            return ''
                        }
                        function Ds(t) {
                            if (t instanceof Br) return t.clone()
                            var e = new Hr(t.__wrapped__, t.__chain__)
                            return (e.__actions__ = Ai(t.__actions__)), (e.__index__ = t.__index__), (e.__values__ = t.__values__), e
                        }
                        var ks = Jn(function (t, e) {
                                return Wo(t) ? hn(t, yn(e, 1, Wo, !0)) : []
                            }),
                            qs = Jn(function (t, e) {
                                var n = Ys(e)
                                return Wo(n) && (n = r), Wo(t) ? hn(t, yn(e, 1, Wo, !0), as(n, 2)) : []
                            }),
                            zs = Jn(function (t, e) {
                                var n = Ys(e)
                                return Wo(n) && (n = r), Wo(t) ? hn(t, yn(e, 1, Wo, !0), r, n) : []
                            })
                        function Hs(t, e, r) {
                            var n = null == t ? 0 : t.length
                            if (!n) return -1
                            var i = null == r ? 0 : pa(r)
                            return i < 0 && (i = yr(n + i, 0)), ze(t, as(e, 3), i)
                        }
                        function Bs(t, e, n) {
                            var i = null == t ? 0 : t.length
                            if (!i) return -1
                            var s = i - 1
                            return n !== r && ((s = pa(n)), (s = n < 0 ? yr(i + s, 0) : vr(s, i - 1))), ze(t, as(e, 3), s, !0)
                        }
                        function Ks(t) {
                            return (null == t ? 0 : t.length) ? yn(t, 1) : []
                        }
                        function Vs(t) {
                            return t && t.length ? t[0] : r
                        }
                        var Fs = Jn(function (t) {
                                var e = je(t, yi)
                                return e.length && e[0] === t[0] ? An(e) : []
                            }),
                            Ws = Jn(function (t) {
                                var e = Ys(t),
                                    n = je(t, yi)
                                return e === Ys(n) ? (e = r) : n.pop(), n.length && n[0] === t[0] ? An(n, as(e, 2)) : []
                            }),
                            Gs = Jn(function (t) {
                                var e = Ys(t),
                                    n = je(t, yi)
                                return (e = 'function' == typeof e ? e : r) && n.pop(), n.length && n[0] === t[0] ? An(n, r, e) : []
                            })
                        function Ys(t) {
                            var e = null == t ? 0 : t.length
                            return e ? t[e - 1] : r
                        }
                        var Js = Jn(Qs)
                        function Qs(t, e) {
                            return t && t.length && e && e.length ? Fn(t, e) : t
                        }
                        var $s = es(function (t, e) {
                            var r = null == t ? 0 : t.length,
                                n = sn(t, e)
                            return (
                                Wn(
                                    t,
                                    je(e, function (t) {
                                        return vs(t, r) ? +t : t
                                    }).sort(Oi)
                                ),
                                n
                            )
                        })
                        function Xs(t) {
                            return null == t ? t : br.call(t)
                        }
                        var Zs = Jn(function (t) {
                                return ui(yn(t, 1, Wo, !0))
                            }),
                            to = Jn(function (t) {
                                var e = Ys(t)
                                return Wo(e) && (e = r), ui(yn(t, 1, Wo, !0), as(e, 2))
                            }),
                            eo = Jn(function (t) {
                                var e = Ys(t)
                                return (e = 'function' == typeof e ? e : r), ui(yn(t, 1, Wo, !0), r, e)
                            })
                        function ro(t) {
                            if (!t || !t.length) return []
                            var e = 0
                            return (
                                (t = Ne(t, function (t) {
                                    if (Wo(t)) return (e = yr(t.length, e)), !0
                                })),
                                Je(e, function (e) {
                                    return je(t, Fe(e))
                                })
                            )
                        }
                        function no(t, e) {
                            if (!t || !t.length) return []
                            var n = ro(t)
                            return null == e
                                ? n
                                : je(n, function (t) {
                                      return Oe(e, r, t)
                                  })
                        }
                        var io = Jn(function (t, e) {
                                return Wo(t) ? hn(t, e) : []
                            }),
                            so = Jn(function (t) {
                                return di(Ne(t, Wo))
                            }),
                            oo = Jn(function (t) {
                                var e = Ys(t)
                                return Wo(e) && (e = r), di(Ne(t, Wo), as(e, 2))
                            }),
                            ao = Jn(function (t) {
                                var e = Ys(t)
                                return (e = 'function' == typeof e ? e : r), di(Ne(t, Wo), r, e)
                            }),
                            co = Jn(ro)
                        var uo = Jn(function (t) {
                            var e = t.length,
                                n = e > 1 ? t[e - 1] : r
                            return (n = 'function' == typeof n ? (t.pop(), n) : r), no(t, n)
                        })
                        function ho(t) {
                            var e = kr(t)
                            return (e.__chain__ = !0), e
                        }
                        function lo(t, e) {
                            return e(t)
                        }
                        var fo = es(function (t) {
                            var e = t.length,
                                n = e ? t[0] : 0,
                                i = this.__wrapped__,
                                s = function (e) {
                                    return sn(e, t)
                                }
                            return !(e > 1 || this.__actions__.length) && i instanceof Br && vs(n)
                                ? ((i = i.slice(n, +n + (e ? 1 : 0))).__actions__.push({ func: lo, args: [s], thisArg: r }),
                                  new Hr(i, this.__chain__).thru(function (t) {
                                      return e && !t.length && t.push(r), t
                                  }))
                                : this.thru(s)
                        })
                        var po = Ni(function (t, e, r) {
                            Ut.call(t, r) ? ++t[r] : nn(t, r, 1)
                        })
                        var go = Di(Hs),
                            yo = Di(Bs)
                        function vo(t, e) {
                            return (Ko(t) ? xe : ln)(t, as(e, 3))
                        }
                        function mo(t, e) {
                            return (Ko(t) ? Ae : fn)(t, as(e, 3))
                        }
                        var wo = Ni(function (t, e, r) {
                            Ut.call(t, r) ? t[r].push(e) : nn(t, r, [e])
                        })
                        var _o = Jn(function (t, e, r) {
                                var n = -1,
                                    i = 'function' == typeof e,
                                    s = Fo(t) ? st(t.length) : []
                                return (
                                    ln(t, function (t) {
                                        s[++n] = i ? Oe(e, t, r) : Rn(t, e, r)
                                    }),
                                    s
                                )
                            }),
                            bo = Ni(function (t, e, r) {
                                nn(t, r, e)
                            })
                        function Eo(t, e) {
                            return (Ko(t) ? je : kn)(t, as(e, 3))
                        }
                        var So = Ni(
                            function (t, e, r) {
                                t[r ? 0 : 1].push(e)
                            },
                            function () {
                                return [[], []]
                            }
                        )
                        var Io = Jn(function (t, e) {
                                if (null == t) return []
                                var r = e.length
                                return r > 1 && ms(t, e[0], e[1]) ? (e = []) : r > 2 && ms(e[0], e[1], e[2]) && (e = [e[0]]), Kn(t, yn(e, 1), [])
                            }),
                            Oo =
                                le ||
                                function () {
                                    return pe.Date.now()
                                }
                        function Po(t, e, n) {
                            return (e = n ? r : e), (e = t && null == e ? t.length : e), Qi(t, u, r, r, r, r, e)
                        }
                        function xo(t, e) {
                            var i
                            if ('function' != typeof e) throw new Rt(n)
                            return (
                                (t = pa(t)),
                                function () {
                                    return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = r), i
                                }
                            )
                        }
                        var Ao = Jn(function (t, e, r) {
                                var n = 1
                                if (r.length) {
                                    var i = cr(r, os(Ao))
                                    n |= a
                                }
                                return Qi(t, n, e, r, i)
                            }),
                            Ro = Jn(function (t, e, r) {
                                var n = 3
                                if (r.length) {
                                    var i = cr(r, os(Ro))
                                    n |= a
                                }
                                return Qi(e, n, t, r, i)
                            })
                        function No(t, e, i) {
                            var s,
                                o,
                                a,
                                c,
                                u,
                                h,
                                l = 0,
                                f = !1,
                                p = !1,
                                d = !0
                            if ('function' != typeof t) throw new Rt(n)
                            function g(e) {
                                var n = s,
                                    i = o
                                return (s = o = r), (l = e), (c = t.apply(i, n))
                            }
                            function y(t) {
                                var n = t - h
                                return h === r || n >= e || n < 0 || (p && t - l >= a)
                            }
                            function v() {
                                var t = Oo()
                                if (y(t)) return m(t)
                                u = Rs(
                                    v,
                                    (function (t) {
                                        var r = e - (t - h)
                                        return p ? vr(r, a - (t - l)) : r
                                    })(t)
                                )
                            }
                            function m(t) {
                                return (u = r), d && s ? g(t) : ((s = o = r), c)
                            }
                            function w() {
                                var t = Oo(),
                                    n = y(t)
                                if (((s = arguments), (o = this), (h = t), n)) {
                                    if (u === r)
                                        return (function (t) {
                                            return (l = t), (u = Rs(v, e)), f ? g(t) : c
                                        })(h)
                                    if (p) return bi(u), (u = Rs(v, e)), g(h)
                                }
                                return u === r && (u = Rs(v, e)), c
                            }
                            return (
                                (e = ga(e) || 0),
                                Zo(i) &&
                                    ((f = !!i.leading),
                                    (a = (p = 'maxWait' in i) ? yr(ga(i.maxWait) || 0, e) : a),
                                    (d = 'trailing' in i ? !!i.trailing : d)),
                                (w.cancel = function () {
                                    u !== r && bi(u), (l = 0), (s = h = o = u = r)
                                }),
                                (w.flush = function () {
                                    return u === r ? c : m(Oo())
                                }),
                                w
                            )
                        }
                        var To = Jn(function (t, e) {
                                return un(t, 1, e)
                            }),
                            Co = Jn(function (t, e, r) {
                                return un(t, ga(e) || 0, r)
                            })
                        function jo(t, e) {
                            if ('function' != typeof t || (null != e && 'function' != typeof e)) throw new Rt(n)
                            var r = function () {
                                var n = arguments,
                                    i = e ? e.apply(this, n) : n[0],
                                    s = r.cache
                                if (s.has(i)) return s.get(i)
                                var o = t.apply(this, n)
                                return (r.cache = s.set(i, o) || s), o
                            }
                            return (r.cache = new (jo.Cache || Fr)()), r
                        }
                        function Lo(t) {
                            if ('function' != typeof t) throw new Rt(n)
                            return function () {
                                var e = arguments
                                switch (e.length) {
                                    case 0:
                                        return !t.call(this)
                                    case 1:
                                        return !t.call(this, e[0])
                                    case 2:
                                        return !t.call(this, e[0], e[1])
                                    case 3:
                                        return !t.call(this, e[0], e[1], e[2])
                                }
                                return !t.apply(this, e)
                            }
                        }
                        jo.Cache = Fr
                        var Uo = wi(function (t, e) {
                                var r = (e = 1 == e.length && Ko(e[0]) ? je(e[0], $e(as())) : je(yn(e, 1), $e(as()))).length
                                return Jn(function (n) {
                                    for (var i = -1, s = vr(n.length, r); ++i < s; ) n[i] = e[i].call(this, n[i])
                                    return Oe(t, this, n)
                                })
                            }),
                            Mo = Jn(function (t, e) {
                                var n = cr(e, os(Mo))
                                return Qi(t, a, r, e, n)
                            }),
                            Do = Jn(function (t, e) {
                                var n = cr(e, os(Do))
                                return Qi(t, c, r, e, n)
                            }),
                            ko = es(function (t, e) {
                                return Qi(t, h, r, r, r, e)
                            })
                        function qo(t, e) {
                            return t === e || (t !== t && e !== e)
                        }
                        var zo = Fi(On),
                            Ho = Fi(function (t, e) {
                                return t >= e
                            }),
                            Bo = Nn(
                                (function () {
                                    return arguments
                                })()
                            )
                                ? Nn
                                : function (t) {
                                      return ta(t) && Ut.call(t, 'callee') && !Yt.call(t, 'callee')
                                  },
                            Ko = st.isArray,
                            Vo = we
                                ? $e(we)
                                : function (t) {
                                      return ta(t) && In(t) == C
                                  }
                        function Fo(t) {
                            return null != t && Xo(t.length) && !Qo(t)
                        }
                        function Wo(t) {
                            return ta(t) && Fo(t)
                        }
                        var Go = me || gc,
                            Yo = _e
                                ? $e(_e)
                                : function (t) {
                                      return ta(t) && In(t) == w
                                  }
                        function Jo(t) {
                            if (!ta(t)) return !1
                            var e = In(t)
                            return e == _ || '[object DOMException]' == e || ('string' == typeof t.message && 'string' == typeof t.name && !na(t))
                        }
                        function Qo(t) {
                            if (!Zo(t)) return !1
                            var e = In(t)
                            return e == b || e == E || '[object AsyncFunction]' == e || '[object Proxy]' == e
                        }
                        function $o(t) {
                            return 'number' == typeof t && t == pa(t)
                        }
                        function Xo(t) {
                            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= f
                        }
                        function Zo(t) {
                            var e = typeof t
                            return null != t && ('object' == e || 'function' == e)
                        }
                        function ta(t) {
                            return null != t && 'object' == typeof t
                        }
                        var ea = be
                            ? $e(be)
                            : function (t) {
                                  return ta(t) && ps(t) == S
                              }
                        function ra(t) {
                            return 'number' == typeof t || (ta(t) && In(t) == I)
                        }
                        function na(t) {
                            if (!ta(t) || In(t) != O) return !1
                            var e = Wt(t)
                            if (null === e) return !0
                            var r = Ut.call(e, 'constructor') && e.constructor
                            return 'function' == typeof r && r instanceof r && Lt.call(r) == qt
                        }
                        var ia = Ee
                            ? $e(Ee)
                            : function (t) {
                                  return ta(t) && In(t) == x
                              }
                        var sa = Se
                            ? $e(Se)
                            : function (t) {
                                  return ta(t) && ps(t) == A
                              }
                        function oa(t) {
                            return 'string' == typeof t || (!Ko(t) && ta(t) && In(t) == R)
                        }
                        function aa(t) {
                            return 'symbol' == typeof t || (ta(t) && In(t) == N)
                        }
                        var ca = Ie
                            ? $e(Ie)
                            : function (t) {
                                  return ta(t) && Xo(t.length) && !!oe[In(t)]
                              }
                        var ua = Fi(Dn),
                            ha = Fi(function (t, e) {
                                return t <= e
                            })
                        function la(t) {
                            if (!t) return []
                            if (Fo(t)) return oa(t) ? lr(t) : Ai(t)
                            if ($t && t[$t])
                                return (function (t) {
                                    for (var e, r = []; !(e = t.next()).done; ) r.push(e.value)
                                    return r
                                })(t[$t]())
                            var e = ps(t)
                            return (e == S ? or : e == A ? ur : qa)(t)
                        }
                        function fa(t) {
                            return t ? ((t = ga(t)) === l || t === -l ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t === t ? t : 0) : 0 === t ? t : 0
                        }
                        function pa(t) {
                            var e = fa(t),
                                r = e % 1
                            return e === e ? (r ? e - r : e) : 0
                        }
                        function da(t) {
                            return t ? on(pa(t), 0, d) : 0
                        }
                        function ga(t) {
                            if ('number' == typeof t) return t
                            if (aa(t)) return p
                            if (Zo(t)) {
                                var e = 'function' == typeof t.valueOf ? t.valueOf() : t
                                t = Zo(e) ? e + '' : e
                            }
                            if ('string' != typeof t) return 0 === t ? t : +t
                            t = Qe(t)
                            var r = gt.test(t)
                            return r || vt.test(t) ? he(t.slice(2), r ? 2 : 8) : dt.test(t) ? p : +t
                        }
                        function ya(t) {
                            return Ri(t, Ta(t))
                        }
                        function va(t) {
                            return null == t ? '' : ci(t)
                        }
                        var ma = Ti(function (t, e) {
                                if (Es(e) || Fo(e)) Ri(e, Na(e), t)
                                else for (var r in e) Ut.call(e, r) && Zr(t, r, e[r])
                            }),
                            wa = Ti(function (t, e) {
                                Ri(e, Ta(e), t)
                            }),
                            _a = Ti(function (t, e, r, n) {
                                Ri(e, Ta(e), t, n)
                            }),
                            ba = Ti(function (t, e, r, n) {
                                Ri(e, Na(e), t, n)
                            }),
                            Ea = es(sn)
                        var Sa = Jn(function (t, e) {
                                t = Pt(t)
                                var n = -1,
                                    i = e.length,
                                    s = i > 2 ? e[2] : r
                                for (s && ms(e[0], e[1], s) && (i = 1); ++n < i; )
                                    for (var o = e[n], a = Ta(o), c = -1, u = a.length; ++c < u; ) {
                                        var h = a[c],
                                            l = t[h]
                                        ;(l === r || (qo(l, Ct[h]) && !Ut.call(t, h))) && (t[h] = o[h])
                                    }
                                return t
                            }),
                            Ia = Jn(function (t) {
                                return t.push(r, Xi), Oe(ja, r, t)
                            })
                        function Oa(t, e, n) {
                            var i = null == t ? r : En(t, e)
                            return i === r ? n : i
                        }
                        function Pa(t, e) {
                            return null != t && ds(t, e, xn)
                        }
                        var xa = zi(function (t, e, r) {
                                null != e && 'function' != typeof e.toString && (e = kt.call(e)), (t[e] = r)
                            }, Za(rc)),
                            Aa = zi(function (t, e, r) {
                                null != e && 'function' != typeof e.toString && (e = kt.call(e)), Ut.call(t, e) ? t[e].push(r) : (t[e] = [r])
                            }, as),
                            Ra = Jn(Rn)
                        function Na(t) {
                            return Fo(t) ? Yr(t) : Un(t)
                        }
                        function Ta(t) {
                            return Fo(t) ? Yr(t, !0) : Mn(t)
                        }
                        var Ca = Ti(function (t, e, r) {
                                Hn(t, e, r)
                            }),
                            ja = Ti(function (t, e, r, n) {
                                Hn(t, e, r, n)
                            }),
                            La = es(function (t, e) {
                                var r = {}
                                if (null == t) return r
                                var n = !1
                                ;(e = je(e, function (e) {
                                    return (e = mi(e, t)), n || (n = e.length > 1), e
                                })),
                                    Ri(t, ns(t), r),
                                    n && (r = an(r, 7, Zi))
                                for (var i = e.length; i--; ) hi(r, e[i])
                                return r
                            })
                        var Ua = es(function (t, e) {
                            return null == t
                                ? {}
                                : (function (t, e) {
                                      return Vn(t, e, function (e, r) {
                                          return Pa(t, r)
                                      })
                                  })(t, e)
                        })
                        function Ma(t, e) {
                            if (null == t) return {}
                            var r = je(ns(t), function (t) {
                                return [t]
                            })
                            return (
                                (e = as(e)),
                                Vn(t, r, function (t, r) {
                                    return e(t, r[0])
                                })
                            )
                        }
                        var Da = Ji(Na),
                            ka = Ji(Ta)
                        function qa(t) {
                            return null == t ? [] : Xe(t, Na(t))
                        }
                        var za = Ui(function (t, e, r) {
                            return (e = e.toLowerCase()), t + (r ? Ha(e) : e)
                        })
                        function Ha(t) {
                            return Ja(va(t).toLowerCase())
                        }
                        function Ba(t) {
                            return (t = va(t)) && t.replace(wt, rr).replace(Zt, '')
                        }
                        var Ka = Ui(function (t, e, r) {
                                return t + (r ? '-' : '') + e.toLowerCase()
                            }),
                            Va = Ui(function (t, e, r) {
                                return t + (r ? ' ' : '') + e.toLowerCase()
                            }),
                            Fa = Li('toLowerCase')
                        var Wa = Ui(function (t, e, r) {
                            return t + (r ? '_' : '') + e.toLowerCase()
                        })
                        var Ga = Ui(function (t, e, r) {
                            return t + (r ? ' ' : '') + Ja(e)
                        })
                        var Ya = Ui(function (t, e, r) {
                                return t + (r ? ' ' : '') + e.toUpperCase()
                            }),
                            Ja = Li('toUpperCase')
                        function Qa(t, e, n) {
                            return (
                                (t = va(t)),
                                (e = n ? r : e) === r
                                    ? (function (t) {
                                          return ne.test(t)
                                      })(t)
                                        ? (function (t) {
                                              return t.match(ee) || []
                                          })(t)
                                        : (function (t) {
                                              return t.match(ut) || []
                                          })(t)
                                    : t.match(e) || []
                            )
                        }
                        var $a = Jn(function (t, e) {
                                try {
                                    return Oe(t, r, e)
                                } catch (n) {
                                    return Jo(n) ? n : new St(n)
                                }
                            }),
                            Xa = es(function (t, e) {
                                return (
                                    xe(e, function (e) {
                                        ;(e = Us(e)), nn(t, e, Ao(t[e], t))
                                    }),
                                    t
                                )
                            })
                        function Za(t) {
                            return function () {
                                return t
                            }
                        }
                        var tc = ki(),
                            ec = ki(!0)
                        function rc(t) {
                            return t
                        }
                        function nc(t) {
                            return Ln('function' == typeof t ? t : an(t, 1))
                        }
                        var ic = Jn(function (t, e) {
                                return function (r) {
                                    return Rn(r, t, e)
                                }
                            }),
                            sc = Jn(function (t, e) {
                                return function (r) {
                                    return Rn(t, r, e)
                                }
                            })
                        function oc(t, e, r) {
                            var n = Na(e),
                                i = bn(e, n)
                            null == r && (!Zo(e) || (!i.length && n.length)) && ((r = e), (e = t), (t = this), (i = bn(e, Na(e))))
                            var s = !(Zo(r) && 'chain' in r) || !!r.chain,
                                o = Qo(t)
                            return (
                                xe(i, function (r) {
                                    var n = e[r]
                                    ;(t[r] = n),
                                        o &&
                                            (t.prototype[r] = function () {
                                                var e = this.__chain__
                                                if (s || e) {
                                                    var r = t(this.__wrapped__)
                                                    return (
                                                        (r.__actions__ = Ai(this.__actions__)).push({ func: n, args: arguments, thisArg: t }),
                                                        (r.__chain__ = e),
                                                        r
                                                    )
                                                }
                                                return n.apply(t, Le([this.value()], arguments))
                                            })
                                }),
                                t
                            )
                        }
                        function ac() {}
                        var cc = Bi(je),
                            uc = Bi(Re),
                            hc = Bi(De)
                        function lc(t) {
                            return ws(t)
                                ? Fe(Us(t))
                                : (function (t) {
                                      return function (e) {
                                          return En(e, t)
                                      }
                                  })(t)
                        }
                        var fc = Vi(),
                            pc = Vi(!0)
                        function dc() {
                            return []
                        }
                        function gc() {
                            return !1
                        }
                        var yc = Hi(function (t, e) {
                                return t + e
                            }, 0),
                            vc = Gi('ceil'),
                            mc = Hi(function (t, e) {
                                return t / e
                            }, 1),
                            wc = Gi('floor')
                        var _c = Hi(function (t, e) {
                                return t * e
                            }, 1),
                            bc = Gi('round'),
                            Ec = Hi(function (t, e) {
                                return t - e
                            }, 0)
                        return (
                            (kr.after = function (t, e) {
                                if ('function' != typeof e) throw new Rt(n)
                                return (
                                    (t = pa(t)),
                                    function () {
                                        if (--t < 1) return e.apply(this, arguments)
                                    }
                                )
                            }),
                            (kr.ary = Po),
                            (kr.assign = ma),
                            (kr.assignIn = wa),
                            (kr.assignInWith = _a),
                            (kr.assignWith = ba),
                            (kr.at = Ea),
                            (kr.before = xo),
                            (kr.bind = Ao),
                            (kr.bindAll = Xa),
                            (kr.bindKey = Ro),
                            (kr.castArray = function () {
                                if (!arguments.length) return []
                                var t = arguments[0]
                                return Ko(t) ? t : [t]
                            }),
                            (kr.chain = ho),
                            (kr.chunk = function (t, e, n) {
                                e = (n ? ms(t, e, n) : e === r) ? 1 : yr(pa(e), 0)
                                var i = null == t ? 0 : t.length
                                if (!i || e < 1) return []
                                for (var s = 0, o = 0, a = st(de(i / e)); s < i; ) a[o++] = ri(t, s, (s += e))
                                return a
                            }),
                            (kr.compact = function (t) {
                                for (var e = -1, r = null == t ? 0 : t.length, n = 0, i = []; ++e < r; ) {
                                    var s = t[e]
                                    s && (i[n++] = s)
                                }
                                return i
                            }),
                            (kr.concat = function () {
                                var t = arguments.length
                                if (!t) return []
                                for (var e = st(t - 1), r = arguments[0], n = t; n--; ) e[n - 1] = arguments[n]
                                return Le(Ko(r) ? Ai(r) : [r], yn(e, 1))
                            }),
                            (kr.cond = function (t) {
                                var e = null == t ? 0 : t.length,
                                    r = as()
                                return (
                                    (t = e
                                        ? je(t, function (t) {
                                              if ('function' != typeof t[1]) throw new Rt(n)
                                              return [r(t[0]), t[1]]
                                          })
                                        : []),
                                    Jn(function (r) {
                                        for (var n = -1; ++n < e; ) {
                                            var i = t[n]
                                            if (Oe(i[0], this, r)) return Oe(i[1], this, r)
                                        }
                                    })
                                )
                            }),
                            (kr.conforms = function (t) {
                                return (function (t) {
                                    var e = Na(t)
                                    return function (r) {
                                        return cn(r, t, e)
                                    }
                                })(an(t, 1))
                            }),
                            (kr.constant = Za),
                            (kr.countBy = po),
                            (kr.create = function (t, e) {
                                var r = qr(t)
                                return null == e ? r : rn(r, e)
                            }),
                            (kr.curry = function t(e, n, i) {
                                var s = Qi(e, 8, r, r, r, r, r, (n = i ? r : n))
                                return (s.placeholder = t.placeholder), s
                            }),
                            (kr.curryRight = function t(e, n, i) {
                                var s = Qi(e, o, r, r, r, r, r, (n = i ? r : n))
                                return (s.placeholder = t.placeholder), s
                            }),
                            (kr.debounce = No),
                            (kr.defaults = Sa),
                            (kr.defaultsDeep = Ia),
                            (kr.defer = To),
                            (kr.delay = Co),
                            (kr.difference = ks),
                            (kr.differenceBy = qs),
                            (kr.differenceWith = zs),
                            (kr.drop = function (t, e, n) {
                                var i = null == t ? 0 : t.length
                                return i ? ri(t, (e = n || e === r ? 1 : pa(e)) < 0 ? 0 : e, i) : []
                            }),
                            (kr.dropRight = function (t, e, n) {
                                var i = null == t ? 0 : t.length
                                return i ? ri(t, 0, (e = i - (e = n || e === r ? 1 : pa(e))) < 0 ? 0 : e) : []
                            }),
                            (kr.dropRightWhile = function (t, e) {
                                return t && t.length ? fi(t, as(e, 3), !0, !0) : []
                            }),
                            (kr.dropWhile = function (t, e) {
                                return t && t.length ? fi(t, as(e, 3), !0) : []
                            }),
                            (kr.fill = function (t, e, n, i) {
                                var s = null == t ? 0 : t.length
                                return s
                                    ? (n && 'number' != typeof n && ms(t, e, n) && ((n = 0), (i = s)),
                                      (function (t, e, n, i) {
                                          var s = t.length
                                          for (
                                              (n = pa(n)) < 0 && (n = -n > s ? 0 : s + n),
                                                  (i = i === r || i > s ? s : pa(i)) < 0 && (i += s),
                                                  i = n > i ? 0 : da(i);
                                              n < i;

                                          )
                                              t[n++] = e
                                          return t
                                      })(t, e, n, i))
                                    : []
                            }),
                            (kr.filter = function (t, e) {
                                return (Ko(t) ? Ne : gn)(t, as(e, 3))
                            }),
                            (kr.flatMap = function (t, e) {
                                return yn(Eo(t, e), 1)
                            }),
                            (kr.flatMapDeep = function (t, e) {
                                return yn(Eo(t, e), l)
                            }),
                            (kr.flatMapDepth = function (t, e, n) {
                                return (n = n === r ? 1 : pa(n)), yn(Eo(t, e), n)
                            }),
                            (kr.flatten = Ks),
                            (kr.flattenDeep = function (t) {
                                return (null == t ? 0 : t.length) ? yn(t, l) : []
                            }),
                            (kr.flattenDepth = function (t, e) {
                                return (null == t ? 0 : t.length) ? yn(t, (e = e === r ? 1 : pa(e))) : []
                            }),
                            (kr.flip = function (t) {
                                return Qi(t, 512)
                            }),
                            (kr.flow = tc),
                            (kr.flowRight = ec),
                            (kr.fromPairs = function (t) {
                                for (var e = -1, r = null == t ? 0 : t.length, n = {}; ++e < r; ) {
                                    var i = t[e]
                                    n[i[0]] = i[1]
                                }
                                return n
                            }),
                            (kr.functions = function (t) {
                                return null == t ? [] : bn(t, Na(t))
                            }),
                            (kr.functionsIn = function (t) {
                                return null == t ? [] : bn(t, Ta(t))
                            }),
                            (kr.groupBy = wo),
                            (kr.initial = function (t) {
                                return (null == t ? 0 : t.length) ? ri(t, 0, -1) : []
                            }),
                            (kr.intersection = Fs),
                            (kr.intersectionBy = Ws),
                            (kr.intersectionWith = Gs),
                            (kr.invert = xa),
                            (kr.invertBy = Aa),
                            (kr.invokeMap = _o),
                            (kr.iteratee = nc),
                            (kr.keyBy = bo),
                            (kr.keys = Na),
                            (kr.keysIn = Ta),
                            (kr.map = Eo),
                            (kr.mapKeys = function (t, e) {
                                var r = {}
                                return (
                                    (e = as(e, 3)),
                                    wn(t, function (t, n, i) {
                                        nn(r, e(t, n, i), t)
                                    }),
                                    r
                                )
                            }),
                            (kr.mapValues = function (t, e) {
                                var r = {}
                                return (
                                    (e = as(e, 3)),
                                    wn(t, function (t, n, i) {
                                        nn(r, n, e(t, n, i))
                                    }),
                                    r
                                )
                            }),
                            (kr.matches = function (t) {
                                return qn(an(t, 1))
                            }),
                            (kr.matchesProperty = function (t, e) {
                                return zn(t, an(e, 1))
                            }),
                            (kr.memoize = jo),
                            (kr.merge = Ca),
                            (kr.mergeWith = ja),
                            (kr.method = ic),
                            (kr.methodOf = sc),
                            (kr.mixin = oc),
                            (kr.negate = Lo),
                            (kr.nthArg = function (t) {
                                return (
                                    (t = pa(t)),
                                    Jn(function (e) {
                                        return Bn(e, t)
                                    })
                                )
                            }),
                            (kr.omit = La),
                            (kr.omitBy = function (t, e) {
                                return Ma(t, Lo(as(e)))
                            }),
                            (kr.once = function (t) {
                                return xo(2, t)
                            }),
                            (kr.orderBy = function (t, e, n, i) {
                                return null == t
                                    ? []
                                    : (Ko(e) || (e = null == e ? [] : [e]), Ko((n = i ? r : n)) || (n = null == n ? [] : [n]), Kn(t, e, n))
                            }),
                            (kr.over = cc),
                            (kr.overArgs = Uo),
                            (kr.overEvery = uc),
                            (kr.overSome = hc),
                            (kr.partial = Mo),
                            (kr.partialRight = Do),
                            (kr.partition = So),
                            (kr.pick = Ua),
                            (kr.pickBy = Ma),
                            (kr.property = lc),
                            (kr.propertyOf = function (t) {
                                return function (e) {
                                    return null == t ? r : En(t, e)
                                }
                            }),
                            (kr.pull = Js),
                            (kr.pullAll = Qs),
                            (kr.pullAllBy = function (t, e, r) {
                                return t && t.length && e && e.length ? Fn(t, e, as(r, 2)) : t
                            }),
                            (kr.pullAllWith = function (t, e, n) {
                                return t && t.length && e && e.length ? Fn(t, e, r, n) : t
                            }),
                            (kr.pullAt = $s),
                            (kr.range = fc),
                            (kr.rangeRight = pc),
                            (kr.rearg = ko),
                            (kr.reject = function (t, e) {
                                return (Ko(t) ? Ne : gn)(t, Lo(as(e, 3)))
                            }),
                            (kr.remove = function (t, e) {
                                var r = []
                                if (!t || !t.length) return r
                                var n = -1,
                                    i = [],
                                    s = t.length
                                for (e = as(e, 3); ++n < s; ) {
                                    var o = t[n]
                                    e(o, n, t) && (r.push(o), i.push(n))
                                }
                                return Wn(t, i), r
                            }),
                            (kr.rest = function (t, e) {
                                if ('function' != typeof t) throw new Rt(n)
                                return Jn(t, (e = e === r ? e : pa(e)))
                            }),
                            (kr.reverse = Xs),
                            (kr.sampleSize = function (t, e, n) {
                                return (e = (n ? ms(t, e, n) : e === r) ? 1 : pa(e)), (Ko(t) ? Qr : $n)(t, e)
                            }),
                            (kr.set = function (t, e, r) {
                                return null == t ? t : Xn(t, e, r)
                            }),
                            (kr.setWith = function (t, e, n, i) {
                                return (i = 'function' == typeof i ? i : r), null == t ? t : Xn(t, e, n, i)
                            }),
                            (kr.shuffle = function (t) {
                                return (Ko(t) ? $r : ei)(t)
                            }),
                            (kr.slice = function (t, e, n) {
                                var i = null == t ? 0 : t.length
                                return i
                                    ? (n && 'number' != typeof n && ms(t, e, n)
                                          ? ((e = 0), (n = i))
                                          : ((e = null == e ? 0 : pa(e)), (n = n === r ? i : pa(n))),
                                      ri(t, e, n))
                                    : []
                            }),
                            (kr.sortBy = Io),
                            (kr.sortedUniq = function (t) {
                                return t && t.length ? oi(t) : []
                            }),
                            (kr.sortedUniqBy = function (t, e) {
                                return t && t.length ? oi(t, as(e, 2)) : []
                            }),
                            (kr.split = function (t, e, n) {
                                return (
                                    n && 'number' != typeof n && ms(t, e, n) && (e = n = r),
                                    (n = n === r ? d : n >>> 0)
                                        ? (t = va(t)) && ('string' == typeof e || (null != e && !ia(e))) && !(e = ci(e)) && sr(t)
                                            ? _i(lr(t), 0, n)
                                            : t.split(e, n)
                                        : []
                                )
                            }),
                            (kr.spread = function (t, e) {
                                if ('function' != typeof t) throw new Rt(n)
                                return (
                                    (e = null == e ? 0 : yr(pa(e), 0)),
                                    Jn(function (r) {
                                        var n = r[e],
                                            i = _i(r, 0, e)
                                        return n && Le(i, n), Oe(t, this, i)
                                    })
                                )
                            }),
                            (kr.tail = function (t) {
                                var e = null == t ? 0 : t.length
                                return e ? ri(t, 1, e) : []
                            }),
                            (kr.take = function (t, e, n) {
                                return t && t.length ? ri(t, 0, (e = n || e === r ? 1 : pa(e)) < 0 ? 0 : e) : []
                            }),
                            (kr.takeRight = function (t, e, n) {
                                var i = null == t ? 0 : t.length
                                return i ? ri(t, (e = i - (e = n || e === r ? 1 : pa(e))) < 0 ? 0 : e, i) : []
                            }),
                            (kr.takeRightWhile = function (t, e) {
                                return t && t.length ? fi(t, as(e, 3), !1, !0) : []
                            }),
                            (kr.takeWhile = function (t, e) {
                                return t && t.length ? fi(t, as(e, 3)) : []
                            }),
                            (kr.tap = function (t, e) {
                                return e(t), t
                            }),
                            (kr.throttle = function (t, e, r) {
                                var i = !0,
                                    s = !0
                                if ('function' != typeof t) throw new Rt(n)
                                return (
                                    Zo(r) && ((i = 'leading' in r ? !!r.leading : i), (s = 'trailing' in r ? !!r.trailing : s)),
                                    No(t, e, { leading: i, maxWait: e, trailing: s })
                                )
                            }),
                            (kr.thru = lo),
                            (kr.toArray = la),
                            (kr.toPairs = Da),
                            (kr.toPairsIn = ka),
                            (kr.toPath = function (t) {
                                return Ko(t) ? je(t, Us) : aa(t) ? [t] : Ai(Ls(va(t)))
                            }),
                            (kr.toPlainObject = ya),
                            (kr.transform = function (t, e, r) {
                                var n = Ko(t),
                                    i = n || Go(t) || ca(t)
                                if (((e = as(e, 4)), null == r)) {
                                    var s = t && t.constructor
                                    r = i ? (n ? new s() : []) : Zo(t) && Qo(s) ? qr(Wt(t)) : {}
                                }
                                return (
                                    (i ? xe : wn)(t, function (t, n, i) {
                                        return e(r, t, n, i)
                                    }),
                                    r
                                )
                            }),
                            (kr.unary = function (t) {
                                return Po(t, 1)
                            }),
                            (kr.union = Zs),
                            (kr.unionBy = to),
                            (kr.unionWith = eo),
                            (kr.uniq = function (t) {
                                return t && t.length ? ui(t) : []
                            }),
                            (kr.uniqBy = function (t, e) {
                                return t && t.length ? ui(t, as(e, 2)) : []
                            }),
                            (kr.uniqWith = function (t, e) {
                                return (e = 'function' == typeof e ? e : r), t && t.length ? ui(t, r, e) : []
                            }),
                            (kr.unset = function (t, e) {
                                return null == t || hi(t, e)
                            }),
                            (kr.unzip = ro),
                            (kr.unzipWith = no),
                            (kr.update = function (t, e, r) {
                                return null == t ? t : li(t, e, vi(r))
                            }),
                            (kr.updateWith = function (t, e, n, i) {
                                return (i = 'function' == typeof i ? i : r), null == t ? t : li(t, e, vi(n), i)
                            }),
                            (kr.values = qa),
                            (kr.valuesIn = function (t) {
                                return null == t ? [] : Xe(t, Ta(t))
                            }),
                            (kr.without = io),
                            (kr.words = Qa),
                            (kr.wrap = function (t, e) {
                                return Mo(vi(e), t)
                            }),
                            (kr.xor = so),
                            (kr.xorBy = oo),
                            (kr.xorWith = ao),
                            (kr.zip = co),
                            (kr.zipObject = function (t, e) {
                                return gi(t || [], e || [], Zr)
                            }),
                            (kr.zipObjectDeep = function (t, e) {
                                return gi(t || [], e || [], Xn)
                            }),
                            (kr.zipWith = uo),
                            (kr.entries = Da),
                            (kr.entriesIn = ka),
                            (kr.extend = wa),
                            (kr.extendWith = _a),
                            oc(kr, kr),
                            (kr.add = yc),
                            (kr.attempt = $a),
                            (kr.camelCase = za),
                            (kr.capitalize = Ha),
                            (kr.ceil = vc),
                            (kr.clamp = function (t, e, n) {
                                return (
                                    n === r && ((n = e), (e = r)),
                                    n !== r && (n = (n = ga(n)) === n ? n : 0),
                                    e !== r && (e = (e = ga(e)) === e ? e : 0),
                                    on(ga(t), e, n)
                                )
                            }),
                            (kr.clone = function (t) {
                                return an(t, 4)
                            }),
                            (kr.cloneDeep = function (t) {
                                return an(t, 5)
                            }),
                            (kr.cloneDeepWith = function (t, e) {
                                return an(t, 5, (e = 'function' == typeof e ? e : r))
                            }),
                            (kr.cloneWith = function (t, e) {
                                return an(t, 4, (e = 'function' == typeof e ? e : r))
                            }),
                            (kr.conformsTo = function (t, e) {
                                return null == e || cn(t, e, Na(e))
                            }),
                            (kr.deburr = Ba),
                            (kr.defaultTo = function (t, e) {
                                return null == t || t !== t ? e : t
                            }),
                            (kr.divide = mc),
                            (kr.endsWith = function (t, e, n) {
                                ;(t = va(t)), (e = ci(e))
                                var i = t.length,
                                    s = (n = n === r ? i : on(pa(n), 0, i))
                                return (n -= e.length) >= 0 && t.slice(n, s) == e
                            }),
                            (kr.eq = qo),
                            (kr.escape = function (t) {
                                return (t = va(t)) && J.test(t) ? t.replace(G, nr) : t
                            }),
                            (kr.escapeRegExp = function (t) {
                                return (t = va(t)) && nt.test(t) ? t.replace(rt, '\\$&') : t
                            }),
                            (kr.every = function (t, e, n) {
                                var i = Ko(t) ? Re : pn
                                return n && ms(t, e, n) && (e = r), i(t, as(e, 3))
                            }),
                            (kr.find = go),
                            (kr.findIndex = Hs),
                            (kr.findKey = function (t, e) {
                                return qe(t, as(e, 3), wn)
                            }),
                            (kr.findLast = yo),
                            (kr.findLastIndex = Bs),
                            (kr.findLastKey = function (t, e) {
                                return qe(t, as(e, 3), _n)
                            }),
                            (kr.floor = wc),
                            (kr.forEach = vo),
                            (kr.forEachRight = mo),
                            (kr.forIn = function (t, e) {
                                return null == t ? t : vn(t, as(e, 3), Ta)
                            }),
                            (kr.forInRight = function (t, e) {
                                return null == t ? t : mn(t, as(e, 3), Ta)
                            }),
                            (kr.forOwn = function (t, e) {
                                return t && wn(t, as(e, 3))
                            }),
                            (kr.forOwnRight = function (t, e) {
                                return t && _n(t, as(e, 3))
                            }),
                            (kr.get = Oa),
                            (kr.gt = zo),
                            (kr.gte = Ho),
                            (kr.has = function (t, e) {
                                return null != t && ds(t, e, Pn)
                            }),
                            (kr.hasIn = Pa),
                            (kr.head = Vs),
                            (kr.identity = rc),
                            (kr.includes = function (t, e, r, n) {
                                ;(t = Fo(t) ? t : qa(t)), (r = r && !n ? pa(r) : 0)
                                var i = t.length
                                return r < 0 && (r = yr(i + r, 0)), oa(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && He(t, e, r) > -1
                            }),
                            (kr.indexOf = function (t, e, r) {
                                var n = null == t ? 0 : t.length
                                if (!n) return -1
                                var i = null == r ? 0 : pa(r)
                                return i < 0 && (i = yr(n + i, 0)), He(t, e, i)
                            }),
                            (kr.inRange = function (t, e, n) {
                                return (
                                    (e = fa(e)),
                                    n === r ? ((n = e), (e = 0)) : (n = fa(n)),
                                    (function (t, e, r) {
                                        return t >= vr(e, r) && t < yr(e, r)
                                    })((t = ga(t)), e, n)
                                )
                            }),
                            (kr.invoke = Ra),
                            (kr.isArguments = Bo),
                            (kr.isArray = Ko),
                            (kr.isArrayBuffer = Vo),
                            (kr.isArrayLike = Fo),
                            (kr.isArrayLikeObject = Wo),
                            (kr.isBoolean = function (t) {
                                return !0 === t || !1 === t || (ta(t) && In(t) == m)
                            }),
                            (kr.isBuffer = Go),
                            (kr.isDate = Yo),
                            (kr.isElement = function (t) {
                                return ta(t) && 1 === t.nodeType && !na(t)
                            }),
                            (kr.isEmpty = function (t) {
                                if (null == t) return !0
                                if (Fo(t) && (Ko(t) || 'string' == typeof t || 'function' == typeof t.splice || Go(t) || ca(t) || Bo(t)))
                                    return !t.length
                                var e = ps(t)
                                if (e == S || e == A) return !t.size
                                if (Es(t)) return !Un(t).length
                                for (var r in t) if (Ut.call(t, r)) return !1
                                return !0
                            }),
                            (kr.isEqual = function (t, e) {
                                return Tn(t, e)
                            }),
                            (kr.isEqualWith = function (t, e, n) {
                                var i = (n = 'function' == typeof n ? n : r) ? n(t, e) : r
                                return i === r ? Tn(t, e, r, n) : !!i
                            }),
                            (kr.isError = Jo),
                            (kr.isFinite = function (t) {
                                return 'number' == typeof t && ke(t)
                            }),
                            (kr.isFunction = Qo),
                            (kr.isInteger = $o),
                            (kr.isLength = Xo),
                            (kr.isMap = ea),
                            (kr.isMatch = function (t, e) {
                                return t === e || Cn(t, e, us(e))
                            }),
                            (kr.isMatchWith = function (t, e, n) {
                                return (n = 'function' == typeof n ? n : r), Cn(t, e, us(e), n)
                            }),
                            (kr.isNaN = function (t) {
                                return ra(t) && t != +t
                            }),
                            (kr.isNative = function (t) {
                                if (bs(t)) throw new St('Unsupported core-js use. Try https://npms.io/search?q=ponyfill.')
                                return jn(t)
                            }),
                            (kr.isNil = function (t) {
                                return null == t
                            }),
                            (kr.isNull = function (t) {
                                return null === t
                            }),
                            (kr.isNumber = ra),
                            (kr.isObject = Zo),
                            (kr.isObjectLike = ta),
                            (kr.isPlainObject = na),
                            (kr.isRegExp = ia),
                            (kr.isSafeInteger = function (t) {
                                return $o(t) && t >= -f && t <= f
                            }),
                            (kr.isSet = sa),
                            (kr.isString = oa),
                            (kr.isSymbol = aa),
                            (kr.isTypedArray = ca),
                            (kr.isUndefined = function (t) {
                                return t === r
                            }),
                            (kr.isWeakMap = function (t) {
                                return ta(t) && ps(t) == T
                            }),
                            (kr.isWeakSet = function (t) {
                                return ta(t) && '[object WeakSet]' == In(t)
                            }),
                            (kr.join = function (t, e) {
                                return null == t ? '' : We.call(t, e)
                            }),
                            (kr.kebabCase = Ka),
                            (kr.last = Ys),
                            (kr.lastIndexOf = function (t, e, n) {
                                var i = null == t ? 0 : t.length
                                if (!i) return -1
                                var s = i
                                return (
                                    n !== r && (s = (s = pa(n)) < 0 ? yr(i + s, 0) : vr(s, i - 1)),
                                    e === e
                                        ? (function (t, e, r) {
                                              for (var n = r + 1; n--; ) if (t[n] === e) return n
                                              return n
                                          })(t, e, s)
                                        : ze(t, Ke, s, !0)
                                )
                            }),
                            (kr.lowerCase = Va),
                            (kr.lowerFirst = Fa),
                            (kr.lt = ua),
                            (kr.lte = ha),
                            (kr.max = function (t) {
                                return t && t.length ? dn(t, rc, On) : r
                            }),
                            (kr.maxBy = function (t, e) {
                                return t && t.length ? dn(t, as(e, 2), On) : r
                            }),
                            (kr.mean = function (t) {
                                return Ve(t, rc)
                            }),
                            (kr.meanBy = function (t, e) {
                                return Ve(t, as(e, 2))
                            }),
                            (kr.min = function (t) {
                                return t && t.length ? dn(t, rc, Dn) : r
                            }),
                            (kr.minBy = function (t, e) {
                                return t && t.length ? dn(t, as(e, 2), Dn) : r
                            }),
                            (kr.stubArray = dc),
                            (kr.stubFalse = gc),
                            (kr.stubObject = function () {
                                return {}
                            }),
                            (kr.stubString = function () {
                                return ''
                            }),
                            (kr.stubTrue = function () {
                                return !0
                            }),
                            (kr.multiply = _c),
                            (kr.nth = function (t, e) {
                                return t && t.length ? Bn(t, pa(e)) : r
                            }),
                            (kr.noConflict = function () {
                                return pe._ === this && (pe._ = zt), this
                            }),
                            (kr.noop = ac),
                            (kr.now = Oo),
                            (kr.pad = function (t, e, r) {
                                t = va(t)
                                var n = (e = pa(e)) ? hr(t) : 0
                                if (!e || n >= e) return t
                                var i = (e - n) / 2
                                return Ki(ge(i), r) + t + Ki(de(i), r)
                            }),
                            (kr.padEnd = function (t, e, r) {
                                t = va(t)
                                var n = (e = pa(e)) ? hr(t) : 0
                                return e && n < e ? t + Ki(e - n, r) : t
                            }),
                            (kr.padStart = function (t, e, r) {
                                t = va(t)
                                var n = (e = pa(e)) ? hr(t) : 0
                                return e && n < e ? Ki(e - n, r) + t : t
                            }),
                            (kr.parseInt = function (t, e, r) {
                                return r || null == e ? (e = 0) : e && (e = +e), wr(va(t).replace(it, ''), e || 0)
                            }),
                            (kr.random = function (t, e, n) {
                                if (
                                    (n && 'boolean' != typeof n && ms(t, e, n) && (e = n = r),
                                    n === r && ('boolean' == typeof e ? ((n = e), (e = r)) : 'boolean' == typeof t && ((n = t), (t = r))),
                                    t === r && e === r ? ((t = 0), (e = 1)) : ((t = fa(t)), e === r ? ((e = t), (t = 0)) : (e = fa(e))),
                                    t > e)
                                ) {
                                    var i = t
                                    ;(t = e), (e = i)
                                }
                                if (n || t % 1 || e % 1) {
                                    var s = _r()
                                    return vr(t + s * (e - t + ue('1e-' + ((s + '').length - 1))), e)
                                }
                                return Gn(t, e)
                            }),
                            (kr.reduce = function (t, e, r) {
                                var n = Ko(t) ? Ue : Ge,
                                    i = arguments.length < 3
                                return n(t, as(e, 4), r, i, ln)
                            }),
                            (kr.reduceRight = function (t, e, r) {
                                var n = Ko(t) ? Me : Ge,
                                    i = arguments.length < 3
                                return n(t, as(e, 4), r, i, fn)
                            }),
                            (kr.repeat = function (t, e, n) {
                                return (e = (n ? ms(t, e, n) : e === r) ? 1 : pa(e)), Yn(va(t), e)
                            }),
                            (kr.replace = function () {
                                var t = arguments,
                                    e = va(t[0])
                                return t.length < 3 ? e : e.replace(t[1], t[2])
                            }),
                            (kr.result = function (t, e, n) {
                                var i = -1,
                                    s = (e = mi(e, t)).length
                                for (s || ((s = 1), (t = r)); ++i < s; ) {
                                    var o = null == t ? r : t[Us(e[i])]
                                    o === r && ((i = s), (o = n)), (t = Qo(o) ? o.call(t) : o)
                                }
                                return t
                            }),
                            (kr.round = bc),
                            (kr.runInContext = t),
                            (kr.sample = function (t) {
                                return (Ko(t) ? Jr : Qn)(t)
                            }),
                            (kr.size = function (t) {
                                if (null == t) return 0
                                if (Fo(t)) return oa(t) ? hr(t) : t.length
                                var e = ps(t)
                                return e == S || e == A ? t.size : Un(t).length
                            }),
                            (kr.snakeCase = Wa),
                            (kr.some = function (t, e, n) {
                                var i = Ko(t) ? De : ni
                                return n && ms(t, e, n) && (e = r), i(t, as(e, 3))
                            }),
                            (kr.sortedIndex = function (t, e) {
                                return ii(t, e)
                            }),
                            (kr.sortedIndexBy = function (t, e, r) {
                                return si(t, e, as(r, 2))
                            }),
                            (kr.sortedIndexOf = function (t, e) {
                                var r = null == t ? 0 : t.length
                                if (r) {
                                    var n = ii(t, e)
                                    if (n < r && qo(t[n], e)) return n
                                }
                                return -1
                            }),
                            (kr.sortedLastIndex = function (t, e) {
                                return ii(t, e, !0)
                            }),
                            (kr.sortedLastIndexBy = function (t, e, r) {
                                return si(t, e, as(r, 2), !0)
                            }),
                            (kr.sortedLastIndexOf = function (t, e) {
                                if (null == t ? 0 : t.length) {
                                    var r = ii(t, e, !0) - 1
                                    if (qo(t[r], e)) return r
                                }
                                return -1
                            }),
                            (kr.startCase = Ga),
                            (kr.startsWith = function (t, e, r) {
                                return (t = va(t)), (r = null == r ? 0 : on(pa(r), 0, t.length)), (e = ci(e)), t.slice(r, r + e.length) == e
                            }),
                            (kr.subtract = Ec),
                            (kr.sum = function (t) {
                                return t && t.length ? Ye(t, rc) : 0
                            }),
                            (kr.sumBy = function (t, e) {
                                return t && t.length ? Ye(t, as(e, 2)) : 0
                            }),
                            (kr.template = function (t, e, n) {
                                var i = kr.templateSettings
                                n && ms(t, e, n) && (e = r), (t = va(t)), (e = _a({}, e, i, $i))
                                var s,
                                    o,
                                    a = _a({}, e.imports, i.imports, $i),
                                    c = Na(a),
                                    u = Xe(a, c),
                                    h = 0,
                                    l = e.interpolate || _t,
                                    f = "__p += '",
                                    p = xt(
                                        (e.escape || _t).source +
                                            '|' +
                                            l.source +
                                            '|' +
                                            (l === X ? ft : _t).source +
                                            '|' +
                                            (e.evaluate || _t).source +
                                            '|$',
                                        'g'
                                    ),
                                    d =
                                        '//# sourceURL=' +
                                        (Ut.call(e, 'sourceURL') ? (e.sourceURL + '').replace(/\s/g, ' ') : 'lodash.templateSources[' + ++se + ']') +
                                        '\n'
                                t.replace(p, function (e, r, n, i, a, c) {
                                    return (
                                        n || (n = i),
                                        (f += t.slice(h, c).replace(bt, ir)),
                                        r && ((s = !0), (f += "' +\n__e(" + r + ") +\n'")),
                                        a && ((o = !0), (f += "';\n" + a + ";\n__p += '")),
                                        n && (f += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                                        (h = c + e.length),
                                        e
                                    )
                                }),
                                    (f += "';\n")
                                var g = Ut.call(e, 'variable') && e.variable
                                if (g) {
                                    if (ht.test(g)) throw new St('Invalid `variable` option passed into `_.template`')
                                } else f = 'with (obj) {\n' + f + '\n}\n'
                                ;(f = (o ? f.replace(K, '') : f).replace(V, '$1').replace(F, '$1;')),
                                    (f =
                                        'function(' +
                                        (g || 'obj') +
                                        ') {\n' +
                                        (g ? '' : 'obj || (obj = {});\n') +
                                        "var __t, __p = ''" +
                                        (s ? ', __e = _.escape' : '') +
                                        (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ';\n') +
                                        f +
                                        'return __p\n}')
                                var y = $a(function () {
                                    return It(c, d + 'return ' + f).apply(r, u)
                                })
                                if (((y.source = f), Jo(y))) throw y
                                return y
                            }),
                            (kr.times = function (t, e) {
                                if ((t = pa(t)) < 1 || t > f) return []
                                var r = d,
                                    n = vr(t, d)
                                ;(e = as(e)), (t -= d)
                                for (var i = Je(n, e); ++r < t; ) e(r)
                                return i
                            }),
                            (kr.toFinite = fa),
                            (kr.toInteger = pa),
                            (kr.toLength = da),
                            (kr.toLower = function (t) {
                                return va(t).toLowerCase()
                            }),
                            (kr.toNumber = ga),
                            (kr.toSafeInteger = function (t) {
                                return t ? on(pa(t), -f, f) : 0 === t ? t : 0
                            }),
                            (kr.toString = va),
                            (kr.toUpper = function (t) {
                                return va(t).toUpperCase()
                            }),
                            (kr.trim = function (t, e, n) {
                                if ((t = va(t)) && (n || e === r)) return Qe(t)
                                if (!t || !(e = ci(e))) return t
                                var i = lr(t),
                                    s = lr(e)
                                return _i(i, tr(i, s), er(i, s) + 1).join('')
                            }),
                            (kr.trimEnd = function (t, e, n) {
                                if ((t = va(t)) && (n || e === r)) return t.slice(0, fr(t) + 1)
                                if (!t || !(e = ci(e))) return t
                                var i = lr(t)
                                return _i(i, 0, er(i, lr(e)) + 1).join('')
                            }),
                            (kr.trimStart = function (t, e, n) {
                                if ((t = va(t)) && (n || e === r)) return t.replace(it, '')
                                if (!t || !(e = ci(e))) return t
                                var i = lr(t)
                                return _i(i, tr(i, lr(e))).join('')
                            }),
                            (kr.truncate = function (t, e) {
                                var n = 30,
                                    i = '...'
                                if (Zo(e)) {
                                    var s = 'separator' in e ? e.separator : s
                                    ;(n = 'length' in e ? pa(e.length) : n), (i = 'omission' in e ? ci(e.omission) : i)
                                }
                                var o = (t = va(t)).length
                                if (sr(t)) {
                                    var a = lr(t)
                                    o = a.length
                                }
                                if (n >= o) return t
                                var c = n - hr(i)
                                if (c < 1) return i
                                var u = a ? _i(a, 0, c).join('') : t.slice(0, c)
                                if (s === r) return u + i
                                if ((a && (c += u.length - c), ia(s))) {
                                    if (t.slice(c).search(s)) {
                                        var h,
                                            l = u
                                        for (s.global || (s = xt(s.source, va(pt.exec(s)) + 'g')), s.lastIndex = 0; (h = s.exec(l)); ) var f = h.index
                                        u = u.slice(0, f === r ? c : f)
                                    }
                                } else if (t.indexOf(ci(s), c) != c) {
                                    var p = u.lastIndexOf(s)
                                    p > -1 && (u = u.slice(0, p))
                                }
                                return u + i
                            }),
                            (kr.unescape = function (t) {
                                return (t = va(t)) && Y.test(t) ? t.replace(W, pr) : t
                            }),
                            (kr.uniqueId = function (t) {
                                var e = ++Mt
                                return va(t) + e
                            }),
                            (kr.upperCase = Ya),
                            (kr.upperFirst = Ja),
                            (kr.each = vo),
                            (kr.eachRight = mo),
                            (kr.first = Vs),
                            oc(
                                kr,
                                (function () {
                                    var t = {}
                                    return (
                                        wn(kr, function (e, r) {
                                            Ut.call(kr.prototype, r) || (t[r] = e)
                                        }),
                                        t
                                    )
                                })(),
                                { chain: !1 }
                            ),
                            (kr.VERSION = '4.17.21'),
                            xe(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (t) {
                                kr[t].placeholder = kr
                            }),
                            xe(['drop', 'take'], function (t, e) {
                                ;(Br.prototype[t] = function (n) {
                                    n = n === r ? 1 : yr(pa(n), 0)
                                    var i = this.__filtered__ && !e ? new Br(this) : this.clone()
                                    return (
                                        i.__filtered__
                                            ? (i.__takeCount__ = vr(n, i.__takeCount__))
                                            : i.__views__.push({ size: vr(n, d), type: t + (i.__dir__ < 0 ? 'Right' : '') }),
                                        i
                                    )
                                }),
                                    (Br.prototype[t + 'Right'] = function (e) {
                                        return this.reverse()[t](e).reverse()
                                    })
                            }),
                            xe(['filter', 'map', 'takeWhile'], function (t, e) {
                                var r = e + 1,
                                    n = 1 == r || 3 == r
                                Br.prototype[t] = function (t) {
                                    var e = this.clone()
                                    return e.__iteratees__.push({ iteratee: as(t, 3), type: r }), (e.__filtered__ = e.__filtered__ || n), e
                                }
                            }),
                            xe(['head', 'last'], function (t, e) {
                                var r = 'take' + (e ? 'Right' : '')
                                Br.prototype[t] = function () {
                                    return this[r](1).value()[0]
                                }
                            }),
                            xe(['initial', 'tail'], function (t, e) {
                                var r = 'drop' + (e ? '' : 'Right')
                                Br.prototype[t] = function () {
                                    return this.__filtered__ ? new Br(this) : this[r](1)
                                }
                            }),
                            (Br.prototype.compact = function () {
                                return this.filter(rc)
                            }),
                            (Br.prototype.find = function (t) {
                                return this.filter(t).head()
                            }),
                            (Br.prototype.findLast = function (t) {
                                return this.reverse().find(t)
                            }),
                            (Br.prototype.invokeMap = Jn(function (t, e) {
                                return 'function' == typeof t
                                    ? new Br(this)
                                    : this.map(function (r) {
                                          return Rn(r, t, e)
                                      })
                            })),
                            (Br.prototype.reject = function (t) {
                                return this.filter(Lo(as(t)))
                            }),
                            (Br.prototype.slice = function (t, e) {
                                t = pa(t)
                                var n = this
                                return n.__filtered__ && (t > 0 || e < 0)
                                    ? new Br(n)
                                    : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                                      e !== r && (n = (e = pa(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                                      n)
                            }),
                            (Br.prototype.takeRightWhile = function (t) {
                                return this.reverse().takeWhile(t).reverse()
                            }),
                            (Br.prototype.toArray = function () {
                                return this.take(d)
                            }),
                            wn(Br.prototype, function (t, e) {
                                var n = /^(?:filter|find|map|reject)|While$/.test(e),
                                    i = /^(?:head|last)$/.test(e),
                                    s = kr[i ? 'take' + ('last' == e ? 'Right' : '') : e],
                                    o = i || /^find/.test(e)
                                s &&
                                    (kr.prototype[e] = function () {
                                        var e = this.__wrapped__,
                                            a = i ? [1] : arguments,
                                            c = e instanceof Br,
                                            u = a[0],
                                            h = c || Ko(e),
                                            l = function (t) {
                                                var e = s.apply(kr, Le([t], a))
                                                return i && f ? e[0] : e
                                            }
                                        h && n && 'function' == typeof u && 1 != u.length && (c = h = !1)
                                        var f = this.__chain__,
                                            p = !!this.__actions__.length,
                                            d = o && !f,
                                            g = c && !p
                                        if (!o && h) {
                                            e = g ? e : new Br(this)
                                            var y = t.apply(e, a)
                                            return y.__actions__.push({ func: lo, args: [l], thisArg: r }), new Hr(y, f)
                                        }
                                        return d && g ? t.apply(this, a) : ((y = this.thru(l)), d ? (i ? y.value()[0] : y.value()) : y)
                                    })
                            }),
                            xe(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (t) {
                                var e = Nt[t],
                                    r = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
                                    n = /^(?:pop|shift)$/.test(t)
                                kr.prototype[t] = function () {
                                    var t = arguments
                                    if (n && !this.__chain__) {
                                        var i = this.value()
                                        return e.apply(Ko(i) ? i : [], t)
                                    }
                                    return this[r](function (r) {
                                        return e.apply(Ko(r) ? r : [], t)
                                    })
                                }
                            }),
                            wn(Br.prototype, function (t, e) {
                                var r = kr[e]
                                if (r) {
                                    var n = r.name + ''
                                    Ut.call(Rr, n) || (Rr[n] = []), Rr[n].push({ name: e, func: r })
                                }
                            }),
                            (Rr[qi(r, 2).name] = [{ name: 'wrapper', func: r }]),
                            (Br.prototype.clone = function () {
                                var t = new Br(this.__wrapped__)
                                return (
                                    (t.__actions__ = Ai(this.__actions__)),
                                    (t.__dir__ = this.__dir__),
                                    (t.__filtered__ = this.__filtered__),
                                    (t.__iteratees__ = Ai(this.__iteratees__)),
                                    (t.__takeCount__ = this.__takeCount__),
                                    (t.__views__ = Ai(this.__views__)),
                                    t
                                )
                            }),
                            (Br.prototype.reverse = function () {
                                if (this.__filtered__) {
                                    var t = new Br(this)
                                    ;(t.__dir__ = -1), (t.__filtered__ = !0)
                                } else (t = this.clone()).__dir__ *= -1
                                return t
                            }),
                            (Br.prototype.value = function () {
                                var t = this.__wrapped__.value(),
                                    e = this.__dir__,
                                    r = Ko(t),
                                    n = e < 0,
                                    i = r ? t.length : 0,
                                    s = (function (t, e, r) {
                                        for (var n = -1, i = r.length; ++n < i; ) {
                                            var s = r[n],
                                                o = s.size
                                            switch (s.type) {
                                                case 'drop':
                                                    t += o
                                                    break
                                                case 'dropRight':
                                                    e -= o
                                                    break
                                                case 'take':
                                                    e = vr(e, t + o)
                                                    break
                                                case 'takeRight':
                                                    t = yr(t, e - o)
                                            }
                                        }
                                        return { start: t, end: e }
                                    })(0, i, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    u = n ? a : o - 1,
                                    h = this.__iteratees__,
                                    l = h.length,
                                    f = 0,
                                    p = vr(c, this.__takeCount__)
                                if (!r || (!n && i == c && p == c)) return pi(t, this.__actions__)
                                var d = []
                                t: for (; c-- && f < p; ) {
                                    for (var g = -1, y = t[(u += e)]; ++g < l; ) {
                                        var v = h[g],
                                            m = v.iteratee,
                                            w = v.type,
                                            _ = m(y)
                                        if (2 == w) y = _
                                        else if (!_) {
                                            if (1 == w) continue t
                                            break t
                                        }
                                    }
                                    d[f++] = y
                                }
                                return d
                            }),
                            (kr.prototype.at = fo),
                            (kr.prototype.chain = function () {
                                return ho(this)
                            }),
                            (kr.prototype.commit = function () {
                                return new Hr(this.value(), this.__chain__)
                            }),
                            (kr.prototype.next = function () {
                                this.__values__ === r && (this.__values__ = la(this.value()))
                                var t = this.__index__ >= this.__values__.length
                                return { done: t, value: t ? r : this.__values__[this.__index__++] }
                            }),
                            (kr.prototype.plant = function (t) {
                                for (var e, n = this; n instanceof zr; ) {
                                    var i = Ds(n)
                                    ;(i.__index__ = 0), (i.__values__ = r), e ? (s.__wrapped__ = i) : (e = i)
                                    var s = i
                                    n = n.__wrapped__
                                }
                                return (s.__wrapped__ = t), e
                            }),
                            (kr.prototype.reverse = function () {
                                var t = this.__wrapped__
                                if (t instanceof Br) {
                                    var e = t
                                    return (
                                        this.__actions__.length && (e = new Br(this)),
                                        (e = e.reverse()).__actions__.push({ func: lo, args: [Xs], thisArg: r }),
                                        new Hr(e, this.__chain__)
                                    )
                                }
                                return this.thru(Xs)
                            }),
                            (kr.prototype.toJSON =
                                kr.prototype.valueOf =
                                kr.prototype.value =
                                    function () {
                                        return pi(this.__wrapped__, this.__actions__)
                                    }),
                            (kr.prototype.first = kr.prototype.head),
                            $t &&
                                (kr.prototype[$t] = function () {
                                    return this
                                }),
                            kr
                        )
                    })()
                    ge ? (((ge.exports = dr)._ = dr), (de._ = dr)) : (pe._ = dr)
                }).call(Cc)
            })(jc, jc.exports)
            var Lc = Object.defineProperty,
                Uc = Object.defineProperties,
                Mc = Object.getOwnPropertyDescriptors,
                Dc = Object.getOwnPropertySymbols,
                kc = Object.prototype.hasOwnProperty,
                qc = Object.prototype.propertyIsEnumerable,
                zc = (t, e, r) => (e in t ? Lc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                Hc = (t, e) => {
                    for (var r in e || (e = {})) kc.call(e, r) && zc(t, r, e[r])
                    if (Dc) for (var r of Dc(e)) qc.call(e, r) && zc(t, r, e[r])
                    return t
                },
                Bc = (t, e) => Uc(t, Mc(e))
            function Kc(t, e, r) {
                var n
                const i = be(t)
                return (
                    (null == (n = e.rpcMap) ? void 0 : n[i.reference]) ||
                    ''.concat('https://rpc.walletconnect.com/v1/', '?chainId=').concat(i.namespace, ':').concat(i.reference, '&projectId=').concat(r)
                )
            }
            function Vc(t) {
                return t.includes(':') ? t.split(':')[1] : t
            }
            function Fc(t) {
                return t.map((t) => ''.concat(t.split(':')[0], ':').concat(t.split(':')[1]))
            }
            function Wc() {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                const e = Gc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    r = Gc(t)
                return jc.exports.merge(e, r)
            }
            function Gc(t) {
                var e, r, n, i
                const s = {}
                if (!jr(t)) return s
                for (const [o, a] of Object.entries(t)) {
                    const t = Pr(o) ? [o] : a.chains,
                        c = a.methods || [],
                        u = a.events || [],
                        h = a.rpcMap || {},
                        l = xr(o)
                    s[l] = Bc(Hc(Hc({}, s[l]), a), {
                        chains: lr(t, null == (e = s[l]) ? void 0 : e.chains),
                        methods: lr(c, null == (r = s[l]) ? void 0 : r.methods),
                        events: lr(u, null == (n = s[l]) ? void 0 : n.events),
                        rpcMap: Hc(Hc({}, h), null == (i = s[l]) ? void 0 : i.rpcMap)
                    })
                }
                return s
            }
            function Yc(t) {
                return t.includes(':') ? t.split(':')[2] : t
            }
            function Jc(t) {
                const e = {}
                for (const [r, n] of Object.entries(t)) {
                    const t = n.methods || [],
                        i = n.events || [],
                        s = n.accounts || [],
                        o = Pr(r) ? [r] : n.chains ? n.chains : Fc(n.accounts)
                    e[r] = { chains: o, methods: t, events: i, accounts: s }
                }
                return e
            }
            function Qc(t) {
                return 'number' == typeof t
                    ? t
                    : t.includes('0x')
                      ? parseInt(t, 16)
                      : ((t = t.includes(':') ? t.split(':')[1] : t), isNaN(Number(t)) ? t : Number(t))
            }
            const $c = {},
                Xc = (t) => $c[t],
                Zc = (t, e) => {
                    $c[t] = e
                }
            class tu {
                constructor(t) {
                    ;(this.name = 'polkadot'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.chainId = this.getDefaultChain()),
                        (this.httpProviders = this.createHttpProviders())
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), (this.chainId = t), this.events.emit(Tc, ''.concat(this.name, ':').concat(t))
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return (t && t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2])) || []
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            var r
                            const n = Vc(e)
                            t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                        }),
                        t
                    )
                }
                getHttpProvider() {
                    const t = ''.concat(this.name, ':').concat(this.chainId),
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Kc(t, this.namespace, this.client.core.projectId)
                    if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                    return new ki(new Ac(r, Xc('disableProviderPing')))
                }
            }
            class eu {
                constructor(t) {
                    ;(this.name = 'eip155'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.httpProviders = this.createHttpProviders()),
                        (this.chainId = parseInt(this.getDefaultChain()))
                }
                async request(t) {
                    switch (t.request.method) {
                        case 'eth_requestAccounts':
                        case 'eth_accounts':
                            return this.getAccounts()
                        case 'wallet_switchEthereumChain':
                            return await this.handleSwitchChain(t)
                        case 'eth_chainId':
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(t.request.method)
                        ? await this.client.request(t)
                        : this.getHttpProvider().request(t.request)
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(parseInt(t), e),
                        (this.chainId = parseInt(t)),
                        this.events.emit(Tc, ''.concat(this.name, ':').concat(t))
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString()
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                createHttpProvider(t, e) {
                    const r = e || Kc(''.concat(this.name, ':').concat(t), this.namespace, this.client.core.projectId)
                    if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                    return new ki(new xc(r, Xc('disableProviderPing')))
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            var r
                            const n = parseInt(Vc(e))
                            t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                        }),
                        t
                    )
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return t ? [...new Set(t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2]))] : []
                }
                getHttpProvider() {
                    const t = this.chainId,
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                async handleSwitchChain(t) {
                    var e, r
                    let n = t.request.params ? (null == (e = t.request.params[0]) ? void 0 : e.chainId) : '0x0'
                    n = n.startsWith('0x') ? n : '0x'.concat(n)
                    const i = parseInt(n, 16)
                    if (this.isChainApproved(i)) this.setDefaultChain(''.concat(i))
                    else {
                        if (!this.namespace.methods.includes('wallet_switchEthereumChain'))
                            throw new Error(
                                "Failed to switch to chain 'eip155:".concat(
                                    i,
                                    "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."
                                )
                            )
                        await this.client.request({
                            topic: t.topic,
                            request: { method: t.request.method, params: [{ chainId: n }] },
                            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                        }),
                            this.setDefaultChain(''.concat(i))
                    }
                    return null
                }
                isChainApproved(t) {
                    return this.namespace.chains.includes(''.concat(this.name, ':').concat(t))
                }
            }
            class ru {
                constructor(t) {
                    ;(this.name = 'solana'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.chainId = this.getDefaultChain()),
                        (this.httpProviders = this.createHttpProviders())
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), (this.chainId = t), this.events.emit(Tc, ''.concat(this.name, ':').concat(t))
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return t ? [...new Set(t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2]))] : []
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            var r
                            const n = Vc(e)
                            t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                        }),
                        t
                    )
                }
                getHttpProvider() {
                    const t = ''.concat(this.name, ':').concat(this.chainId),
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Kc(t, this.namespace, this.client.core.projectId)
                    if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                    return new ki(new Ac(r, Xc('disableProviderPing')))
                }
            }
            class nu {
                constructor(t) {
                    ;(this.name = 'cosmos'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.chainId = this.getDefaultChain()),
                        (this.httpProviders = this.createHttpProviders())
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e),
                        (this.chainId = t),
                        this.events.emit(Tc, ''.concat(this.name, ':').concat(this.chainId))
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return t ? [...new Set(t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2]))] : []
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            var r
                            const n = Vc(e)
                            t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                        }),
                        t
                    )
                }
                getHttpProvider() {
                    const t = ''.concat(this.name, ':').concat(this.chainId),
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Kc(t, this.namespace, this.client.core.projectId)
                    if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                    return new ki(new Ac(r, Xc('disableProviderPing')))
                }
            }
            class iu {
                constructor(t) {
                    ;(this.name = 'cip34'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.chainId = this.getDefaultChain()),
                        (this.httpProviders = this.createHttpProviders())
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e),
                        (this.chainId = t),
                        this.events.emit(Tc, ''.concat(this.name, ':').concat(this.chainId))
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return t ? [...new Set(t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2]))] : []
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            const r = this.getCardanoRPCUrl(e),
                                n = Vc(e)
                            t[n] = this.createHttpProvider(n, r)
                        }),
                        t
                    )
                }
                getHttpProvider() {
                    const t = ''.concat(this.name, ':').concat(this.chainId),
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                getCardanoRPCUrl(t) {
                    const e = this.namespace.rpcMap
                    if (e) return e[t]
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || this.getCardanoRPCUrl(t)
                    if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                    return new ki(new Ac(r, Xc('disableProviderPing')))
                }
            }
            class su {
                constructor(t) {
                    ;(this.name = 'elrond'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.chainId = this.getDefaultChain()),
                        (this.httpProviders = this.createHttpProviders())
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), (this.chainId = t), this.events.emit(Tc, ''.concat(this.name, ':').concat(t))
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return t ? [...new Set(t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2]))] : []
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            var r
                            const n = Vc(e)
                            t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                        }),
                        t
                    )
                }
                getHttpProvider() {
                    const t = ''.concat(this.name, ':').concat(this.chainId),
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Kc(t, this.namespace, this.client.core.projectId)
                    if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                    return new ki(new Ac(r, Xc('disableProviderPing')))
                }
            }
            class ou {
                constructor(t) {
                    ;(this.name = 'multiversx'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.chainId = this.getDefaultChain()),
                        (this.httpProviders = this.createHttpProviders())
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    this.httpProviders[t] || this.setHttpProvider(t, e), (this.chainId = t), this.events.emit(Tc, ''.concat(this.name, ':').concat(t))
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return t ? [...new Set(t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2]))] : []
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            var r
                            const n = Vc(e)
                            t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                        }),
                        t
                    )
                }
                getHttpProvider() {
                    const t = ''.concat(this.name, ':').concat(this.chainId),
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Kc(t, this.namespace, this.client.core.projectId)
                    if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                    return new ki(new Ac(r, Xc('disableProviderPing')))
                }
            }
            class au {
                constructor(t) {
                    ;(this.name = 'near'),
                        (this.namespace = t.namespace),
                        (this.events = Xc('events')),
                        (this.client = Xc('client')),
                        (this.chainId = this.getDefaultChain()),
                        (this.httpProviders = this.createHttpProviders())
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId
                    if (this.namespace.defaultChain) return this.namespace.defaultChain
                    const t = this.namespace.chains[0]
                    if (!t) throw new Error('ChainId not found')
                    return t.split(':')[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, e) {
                    if (((this.chainId = t), !this.httpProviders[t])) {
                        const r = e || Kc(''.concat(this.name, ':').concat(t), this.namespace)
                        if (!r) throw new Error('No RPC url provided for chainId: '.concat(t))
                        this.setHttpProvider(t, r)
                    }
                    this.events.emit(Tc, ''.concat(this.name, ':').concat(this.chainId))
                }
                getAccounts() {
                    const t = this.namespace.accounts
                    return (t && t.filter((t) => t.split(':')[1] === this.chainId.toString()).map((t) => t.split(':')[2])) || []
                }
                createHttpProviders() {
                    const t = {}
                    return (
                        this.namespace.chains.forEach((e) => {
                            var r
                            t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
                        }),
                        t
                    )
                }
                getHttpProvider() {
                    const t = ''.concat(this.name, ':').concat(this.chainId),
                        e = this.httpProviders[t]
                    if (typeof e > 'u') throw new Error('JSON-RPC provider for '.concat(t, ' not found'))
                    return e
                }
                setHttpProvider(t, e) {
                    const r = this.createHttpProvider(t, e)
                    r && (this.httpProviders[t] = r)
                }
                createHttpProvider(t, e) {
                    const r = e || Kc(t, this.namespace)
                    return typeof r > 'u' ? void 0 : new ki(new Ac(r, Xc('disableProviderPing')))
                }
            }
            var cu = Object.defineProperty,
                uu = Object.defineProperties,
                hu = Object.getOwnPropertyDescriptors,
                lu = Object.getOwnPropertySymbols,
                fu = Object.prototype.hasOwnProperty,
                pu = Object.prototype.propertyIsEnumerable,
                du = (t, e, r) => (e in t ? cu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                gu = (t, e) => {
                    for (var r in e || (e = {})) fu.call(e, r) && du(t, r, e[r])
                    if (lu) for (var r of lu(e)) pu.call(e, r) && du(t, r, e[r])
                    return t
                },
                yu = (t, e) => uu(t, hu(e))
            class vu {
                constructor(t) {
                    ;(this.events = new (m())()),
                        (this.rpcProviders = {}),
                        (this.shouldAbortPairingAttempt = !1),
                        (this.maxPairingAttempts = 10),
                        (this.disableProviderPing = !1),
                        (this.providerOpts = t),
                        (this.logger =
                            typeof (null === t || void 0 === t ? void 0 : t.logger) < 'u' &&
                            'string' != typeof (null === t || void 0 === t ? void 0 : t.logger)
                                ? t.logger
                                : (0, Mn.pino)((0, Mn.getDefaultLoggerOptions)({ level: (null === t || void 0 === t ? void 0 : t.logger) || Rc }))),
                        (this.disableProviderPing = (null === t || void 0 === t ? void 0 : t.disableProviderPing) || !1)
                }
                static async init(t) {
                    const e = new vu(t)
                    return await e.initialize(), e
                }
                async request(t, e, r) {
                    const [n, i] = this.validateChain(e)
                    if (!this.session) throw new Error('Please call connect() before request()')
                    return await this.getProvider(n).request({
                        request: gu({}, t),
                        chainId: ''.concat(n, ':').concat(i),
                        topic: this.session.topic,
                        expiry: r
                    })
                }
                sendAsync(t, e, r, n) {
                    const i = new Date().getTime()
                    this.request(t, r, n)
                        .then((t) => e(null, Ii(i, t)))
                        .catch((t) => e(t, void 0))
                }
                async enable() {
                    if (!this.client) throw new Error('Sign Client not initialized')
                    return (
                        this.session ||
                            (await this.connect({
                                namespaces: this.namespaces,
                                optionalNamespaces: this.optionalNamespaces,
                                sessionProperties: this.sessionProperties
                            })),
                        await this.requestAccounts()
                    )
                }
                async disconnect() {
                    var t
                    if (!this.session) throw new Error('Please call connect() before enable()')
                    await this.client.disconnect({ topic: null == (t = this.session) ? void 0 : t.topic, reason: Tr('USER_DISCONNECTED') }),
                        await this.cleanup()
                }
                async connect(t) {
                    if (!this.client) throw new Error('Sign Client not initialized')
                    if ((this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing)) return await this.pair(t.pairingTopic)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(t) {
                    this.shouldAbortPairingAttempt = !1
                    let e = 0
                    do {
                        if (this.shouldAbortPairingAttempt) throw new Error('Pairing aborted')
                        if (e >= this.maxPairingAttempts) throw new Error('Max auto pairing attempts reached')
                        const { uri: r, approval: n } = await this.client.connect({
                            pairingTopic: t,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        })
                        r && ((this.uri = r), this.events.emit('display_uri', r)),
                            await n()
                                .then((t) => {
                                    this.session = t
                                    const e = Jc(t.namespaces)
                                    ;(this.namespaces = Wc(this.namespaces, e)), this.persist('namespaces', this.namespaces)
                                })
                                .catch((t) => {
                                    if (t.message !== nc) throw t
                                    e++
                                })
                    } while (!this.session)
                    return this.onConnect(), this.session
                }
                setDefaultChain(t, e) {
                    try {
                        if (!this.session) return
                        const [r, n] = this.validateChain(t)
                        this.getProvider(r).setDefaultChain(n, e)
                    } catch (Vn) {
                        if (!/Please call connect/.test(Vn.message)) throw Vn
                    }
                }
                async cleanupPendingPairings() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    this.logger.info('Cleaning up inactive pairings...')
                    const e = this.client.pairing.getAll()
                    if (Cr(e)) {
                        for (const r of e)
                            t.deletePairings
                                ? this.client.core.expirer.set(r.topic, 0)
                                : await this.client.core.relayer.subscriber.unsubscribe(r.topic)
                        this.logger.info('Inactive pairings cleared: '.concat(e.length))
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (
                        ((this.namespaces = await this.getFromStore('namespaces')),
                        (this.optionalNamespaces = (await this.getFromStore('optionalNamespaces')) || {}),
                        this.client.session.length)
                    ) {
                        const t = this.client.session.keys.length - 1
                        ;(this.session = this.client.session.get(this.client.session.keys[t])), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace('Initialized'), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    ;(this.client =
                        this.providerOpts.client ||
                        (await Sc.init({
                            logger: this.providerOpts.logger || Rc,
                            relayUrl: this.providerOpts.relayUrl || 'wss://relay.walletconnect.com',
                            projectId: this.providerOpts.projectId,
                            metadata: this.providerOpts.metadata,
                            storageOptions: this.providerOpts.storageOptions,
                            storage: this.providerOpts.storage,
                            name: this.providerOpts.name
                        }))),
                        this.logger.trace('SignClient Initialized')
                }
                createProviders() {
                    if (!this.client) throw new Error('Sign Client not initialized')
                    if (!this.session) throw new Error('Session not initialized. Please call connect() before enable()')
                    const t = [...new Set(Object.keys(this.session.namespaces).map((t) => xr(t)))]
                    Zc('client', this.client),
                        Zc('events', this.events),
                        Zc('disableProviderPing', this.disableProviderPing),
                        t.forEach((t) => {
                            if (!this.session) return
                            const e = (function (t, e) {
                                    const r = Object.keys(e.namespaces).filter((e) => e.includes(t))
                                    if (!r.length) return []
                                    const n = []
                                    return (
                                        r.forEach((t) => {
                                            const r = e.namespaces[t].accounts
                                            n.push(...r)
                                        }),
                                        n
                                    )
                                })(t, this.session),
                                r = Fc(e),
                                n = Wc(this.namespaces, this.optionalNamespaces),
                                i = yu(gu({}, n[t]), { accounts: e, chains: r })
                            switch (t) {
                                case 'eip155':
                                    this.rpcProviders[t] = new eu({ namespace: i })
                                    break
                                case 'solana':
                                    this.rpcProviders[t] = new ru({ namespace: i })
                                    break
                                case 'cosmos':
                                    this.rpcProviders[t] = new nu({ namespace: i })
                                    break
                                case 'polkadot':
                                    this.rpcProviders[t] = new tu({ namespace: i })
                                    break
                                case 'cip34':
                                    this.rpcProviders[t] = new iu({ namespace: i })
                                    break
                                case 'elrond':
                                    this.rpcProviders[t] = new su({ namespace: i })
                                    break
                                case 'multiversx':
                                    this.rpcProviders[t] = new ou({ namespace: i })
                                    break
                                case 'near':
                                    this.rpcProviders[t] = new au({ namespace: i })
                            }
                        })
                }
                registerEventListeners() {
                    if (typeof this.client > 'u') throw new Error('Sign Client is not initialized')
                    this.client.on('session_ping', (t) => {
                        this.events.emit('session_ping', t)
                    }),
                        this.client.on('session_event', (t) => {
                            const { params: e } = t,
                                { event: r } = e
                            if ('accountsChanged' === r.name) {
                                const t = r.data
                                t && Cr(t) && this.events.emit('accountsChanged', t.map(Yc))
                            } else if ('chainChanged' === r.name) {
                                const t = e.chainId,
                                    r = e.event.data,
                                    n = xr(t),
                                    i = Qc(t) !== Qc(r) ? ''.concat(n, ':').concat(Qc(r)) : t
                                this.onChainChanged(i)
                            } else this.events.emit(r.name, r.data)
                            this.events.emit('session_event', t)
                        }),
                        this.client.on('session_update', (t) => {
                            let { topic: e, params: r } = t
                            var n
                            const { namespaces: i } = r,
                                s = null == (n = this.client) ? void 0 : n.session.get(e)
                            ;(this.session = yu(gu({}, s), { namespaces: i })),
                                this.onSessionUpdate(),
                                this.events.emit('session_update', { topic: e, params: r })
                        }),
                        this.client.on('session_delete', async (t) => {
                            await this.cleanup(),
                                this.events.emit('session_delete', t),
                                this.events.emit('disconnect', yu(gu({}, Tr('USER_DISCONNECTED')), { data: t.topic }))
                        }),
                        this.on(Tc, (t) => {
                            this.onChainChanged(t, !0)
                        })
                }
                getProvider(t) {
                    if (!this.rpcProviders[t]) throw new Error('Provider not found: '.concat(t))
                    return this.rpcProviders[t]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach((t) => {
                        var e
                        this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t])
                    })
                }
                setNamespaces(t) {
                    const { namespaces: e, optionalNamespaces: r, sessionProperties: n } = t
                    e && Object.keys(e).length && (this.namespaces = e),
                        r && Object.keys(r).length && (this.optionalNamespaces = r),
                        (this.sessionProperties = n),
                        this.persist('namespaces', e),
                        this.persist('optionalNamespaces', r)
                }
                validateChain(t) {
                    const [e, r] = (null === t || void 0 === t ? void 0 : t.split(':')) || ['', '']
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, r]
                    if (
                        e &&
                        !Object.keys(this.namespaces || {})
                            .map((t) => xr(t))
                            .includes(e)
                    )
                        throw new Error("Namespace '".concat(e, "' is not configured. Please call connect() first with namespace config."))
                    if (e && r) return [e, r]
                    const n = xr(Object.keys(this.namespaces)[0])
                    return [n, this.rpcProviders[n].getDefaultChain()]
                }
                async requestAccounts() {
                    const [t] = this.validateChain()
                    return await this.getProvider(t).requestAccounts()
                }
                onChainChanged(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    if (!this.namespaces) return
                    const [r, n] = this.validateChain(t)
                    n &&
                        (e || this.getProvider(r).setDefaultChain(n),
                        this.namespaces[r]
                            ? (this.namespaces[r].defaultChain = n)
                            : this.namespaces[''.concat(r, ':').concat(n)]
                              ? (this.namespaces[''.concat(r, ':').concat(n)].defaultChain = n)
                              : (this.namespaces[''.concat(r, ':').concat(n)] = { defaultChain: n }),
                        this.persist('namespaces', this.namespaces),
                        this.events.emit('chainChanged', n))
                }
                onConnect() {
                    this.createProviders(), this.events.emit('connect', { session: this.session })
                }
                async cleanup() {
                    ;(this.session = void 0),
                        (this.namespaces = void 0),
                        (this.optionalNamespaces = void 0),
                        (this.sessionProperties = void 0),
                        this.persist('namespaces', void 0),
                        this.persist('optionalNamespaces', void 0),
                        this.persist('sessionProperties', void 0),
                        await this.cleanupPendingPairings({ deletePairings: !0 })
                }
                persist(t, e) {
                    this.client.core.storage.setItem(''.concat(Nc, '/').concat(t), e)
                }
                async getFromStore(t) {
                    return await this.client.core.storage.getItem(''.concat(Nc, '/').concat(t))
                }
            }
            const mu = vu,
                wu = ''.concat('wc', '@2:').concat('ethereum_provider', ':'),
                _u = ['eth_sendTransaction', 'personal_sign'],
                bu = [
                    'eth_accounts',
                    'eth_requestAccounts',
                    'eth_sendRawTransaction',
                    'eth_sign',
                    'eth_signTransaction',
                    'eth_signTypedData',
                    'eth_signTypedData_v3',
                    'eth_signTypedData_v4',
                    'eth_sendTransaction',
                    'personal_sign',
                    'wallet_switchEthereumChain',
                    'wallet_addEthereumChain',
                    'wallet_getPermissions',
                    'wallet_requestPermissions',
                    'wallet_registerOnboarding',
                    'wallet_watchAsset',
                    'wallet_scanQRCode'
                ],
                Eu = ['chainChanged', 'accountsChanged'],
                Su = ['chainChanged', 'accountsChanged', 'message', 'disconnect', 'connect']
            var Iu = Object.defineProperty,
                Ou = Object.defineProperties,
                Pu = Object.getOwnPropertyDescriptors,
                xu = Object.getOwnPropertySymbols,
                Au = Object.prototype.hasOwnProperty,
                Ru = Object.prototype.propertyIsEnumerable,
                Nu = (t, e, r) => (e in t ? Iu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
                Tu = (t, e) => {
                    for (var r in e || (e = {})) Au.call(e, r) && Nu(t, r, e[r])
                    if (xu) for (var r of xu(e)) Ru.call(e, r) && Nu(t, r, e[r])
                    return t
                },
                Cu = (t, e) => Ou(t, Pu(e))
            function ju(t) {
                return Number(t[0].split(':')[1])
            }
            function Lu(t) {
                return '0x'.concat(t.toString(16))
            }
            class Uu {
                constructor() {
                    ;(this.events = new v.EventEmitter()),
                        (this.namespace = 'eip155'),
                        (this.accounts = []),
                        (this.chainId = 1),
                        (this.STORAGE_KEY = wu),
                        (this.on = (t, e) => (this.events.on(t, e), this)),
                        (this.once = (t, e) => (this.events.once(t, e), this)),
                        (this.removeListener = (t, e) => (this.events.removeListener(t, e), this)),
                        (this.off = (t, e) => (this.events.off(t, e), this)),
                        (this.parseAccount = (t) => (this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t)),
                        (this.signer = {}),
                        (this.rpc = {})
                }
                static async init(t) {
                    const e = new Uu()
                    return await e.initialize(t), e
                }
                async request(t, e) {
                    return await this.signer.request(t, this.formatChainId(this.chainId), e)
                }
                sendAsync(t, e, r) {
                    this.signer.sendAsync(t, e, this.formatChainId(this.chainId), r)
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || (await this.connect()), await this.request({ method: 'eth_requestAccounts' })
                }
                async connect(t) {
                    if (!this.signer.client) throw new Error('Provider not initialized. Call init() first')
                    this.loadConnectOpts(t)
                    const { required: e, optional: r } = (function (t) {
                        const { chains: e, optionalChains: r, methods: n, optionalMethods: i, events: s, optionalEvents: o, rpcMap: a } = t
                        if (!Cr(e)) throw new Error('Invalid chains')
                        const c = { chains: e, methods: n || _u, events: s || Eu, rpcMap: Tu({}, e.length ? { [ju(e)]: a[ju(e)] } : {}) },
                            u = null === s || void 0 === s ? void 0 : s.filter((t) => !Eu.includes(t)),
                            h = null === n || void 0 === n ? void 0 : n.filter((t) => !_u.includes(t))
                        if (!r && !o && !i && (null == u || !u.length) && (null == h || !h.length)) return { required: e.length ? c : void 0 }
                        const l = ((null === u || void 0 === u ? void 0 : u.length) && (null === h || void 0 === h ? void 0 : h.length)) || !r,
                            f = {
                                chains: [...new Set(l ? c.chains.concat(r || []) : r)],
                                methods: [...new Set(c.methods.concat(null != i && i.length ? i : bu))],
                                events: [...new Set(c.events.concat(null != o && o.length ? o : Su))],
                                rpcMap: a
                            }
                        return { required: e.length ? c : void 0, optional: r.length ? f : void 0 }
                    })(this.rpc)
                    try {
                        const n = await new Promise(async (n, i) => {
                            var s
                            this.rpc.showQrModal &&
                                (null == (s = this.modal) ||
                                    s.subscribeModal((t) => {
                                        !t.open &&
                                            !this.signer.session &&
                                            (this.signer.abortPairingAttempt(), i(new Error('Connection request reset. Please try again.')))
                                    })),
                                await this.signer
                                    .connect(
                                        Cu(
                                            Tu(
                                                { namespaces: Tu({}, e && { [this.namespace]: e }) },
                                                r && { optionalNamespaces: { [this.namespace]: r } }
                                            ),
                                            { pairingTopic: null === t || void 0 === t ? void 0 : t.pairingTopic }
                                        )
                                    )
                                    .then((t) => {
                                        n(t)
                                    })
                                    .catch((t) => {
                                        i(new Error(t.message))
                                    })
                        })
                        if (!n) return
                        const i = (function (t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                            const r = []
                            return (
                                Object.keys(t).forEach((n) => {
                                    if (e.length && !e.includes(n)) return
                                    const i = t[n]
                                    r.push(...i.accounts)
                                }),
                                r
                            )
                        })(n.namespaces, [this.namespace])
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i),
                            this.setAccounts(i),
                            this.events.emit('connect', { chainId: Lu(this.chainId) })
                    } catch (kn) {
                        throw (this.signer.logger.error(kn), kn)
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && (await this.signer.disconnect()), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on('session_event', (t) => {
                        const { params: e } = t,
                            { event: r } = e
                        'accountsChanged' === r.name
                            ? ((this.accounts = this.parseAccounts(r.data)), this.events.emit('accountsChanged', this.accounts))
                            : 'chainChanged' === r.name
                              ? this.setChainId(this.formatChainId(r.data))
                              : this.events.emit(r.name, r.data),
                            this.events.emit('session_event', t)
                    }),
                        this.signer.on('chainChanged', (t) => {
                            const e = parseInt(t)
                            ;(this.chainId = e), this.events.emit('chainChanged', Lu(this.chainId)), this.persist()
                        }),
                        this.signer.on('session_update', (t) => {
                            this.events.emit('session_update', t)
                        }),
                        this.signer.on('session_delete', (t) => {
                            this.reset(),
                                this.events.emit('session_delete', t),
                                this.events.emit('disconnect', Cu(Tu({}, Tr('USER_DISCONNECTED')), { data: t.topic, name: 'USER_DISCONNECTED' }))
                        }),
                        this.signer.on('display_uri', (t) => {
                            var e, r
                            this.rpc.showQrModal && (null == (e = this.modal) || e.closeModal(), null == (r = this.modal) || r.openModal({ uri: t })),
                                this.events.emit('display_uri', t)
                        })
                }
                switchEthereumChain(t) {
                    this.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: t.toString(16) }] })
                }
                isCompatibleChainId(t) {
                    return 'string' == typeof t && t.startsWith(''.concat(this.namespace, ':'))
                }
                formatChainId(t) {
                    return ''.concat(this.namespace, ':').concat(t)
                }
                parseChainId(t) {
                    return Number(t.split(':')[1])
                }
                setChainIds(t) {
                    const e = t.filter((t) => this.isCompatibleChainId(t)).map((t) => this.parseChainId(t))
                    e.length && ((this.chainId = e[0]), this.events.emit('chainChanged', Lu(this.chainId)), this.persist())
                }
                setChainId(t) {
                    if (this.isCompatibleChainId(t)) {
                        const e = this.parseChainId(t)
                        ;(this.chainId = e), this.switchEthereumChain(e)
                    }
                }
                parseAccountId(t) {
                    const [e, r, n] = t.split(':')
                    return { chainId: ''.concat(e, ':').concat(r), address: n }
                }
                setAccounts(t) {
                    ;(this.accounts = t
                        .filter((t) => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId)
                        .map((t) => this.parseAccountId(t).address)),
                        this.events.emit('accountsChanged', this.accounts)
                }
                getRpcConfig(t) {
                    var e, r
                    const n = null != (e = null === t || void 0 === t ? void 0 : t.chains) ? e : [],
                        i = null != (r = null === t || void 0 === t ? void 0 : t.optionalChains) ? r : [],
                        s = n.concat(i)
                    if (!s.length) throw new Error('No chains specified in either `chains` or `optionalChains`')
                    const o = n.length ? (null === t || void 0 === t ? void 0 : t.methods) || _u : [],
                        a = n.length ? (null === t || void 0 === t ? void 0 : t.events) || Eu : [],
                        c = (null === t || void 0 === t ? void 0 : t.optionalMethods) || [],
                        u = (null === t || void 0 === t ? void 0 : t.optionalEvents) || [],
                        h = (null === t || void 0 === t ? void 0 : t.rpcMap) || this.buildRpcMap(s, t.projectId),
                        l = (null === t || void 0 === t ? void 0 : t.qrModalOptions) || void 0
                    return {
                        chains: null === n || void 0 === n ? void 0 : n.map((t) => this.formatChainId(t)),
                        optionalChains: i.map((t) => this.formatChainId(t)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: h,
                        showQrModal: !(null == t || !t.showQrModal),
                        qrModalOptions: l,
                        projectId: t.projectId,
                        metadata: t.metadata
                    }
                }
                buildRpcMap(t, e) {
                    const r = {}
                    return (
                        t.forEach((t) => {
                            r[t] = this.getRpcUrl(t, e)
                        }),
                        r
                    )
                }
                async initialize(t) {
                    if (
                        ((this.rpc = this.getRpcConfig(t)),
                        (this.chainId = this.rpc.chains.length ? ju(this.rpc.chains) : ju(this.rpc.optionalChains)),
                        (this.signer = await mu.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: t.disableProviderPing,
                            relayUrl: t.relayUrl,
                            storageOptions: t.storageOptions
                        })),
                        this.registerEventListeners(),
                        await this.loadPersistedSession(),
                        this.rpc.showQrModal)
                    ) {
                        let t
                        try {
                            const { WalletConnectModal: e } = await r.e(1199).then(r.bind(r, 1199))
                            t = e
                        } catch {
                            throw new Error('To use QR modal, please install @walletconnect/modal package')
                        }
                        if (t)
                            try {
                                this.modal = new t(Tu({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions))
                            } catch (e) {
                                throw (this.signer.logger.error(e), new Error('Could not generate WalletConnectModal Instance'))
                            }
                    }
                }
                loadConnectOpts(t) {
                    if (!t) return
                    const { chains: e, optionalChains: r, rpcMap: n } = t
                    e &&
                        Cr(e) &&
                        ((this.rpc.chains = e.map((t) => this.formatChainId(t))),
                        e.forEach((t) => {
                            this.rpc.rpcMap[t] = (null === n || void 0 === n ? void 0 : n[t]) || this.getRpcUrl(t)
                        })),
                        r &&
                            Cr(r) &&
                            ((this.rpc.optionalChains = []),
                            (this.rpc.optionalChains = null === r || void 0 === r ? void 0 : r.map((t) => this.formatChainId(t))),
                            r.forEach((t) => {
                                this.rpc.rpcMap[t] = (null === n || void 0 === n ? void 0 : n[t]) || this.getRpcUrl(t)
                            }))
                }
                getRpcUrl(t, e) {
                    var r
                    return (
                        (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) ||
                        ''
                            .concat('https://rpc.walletconnect.com/v1/', '?chainId=eip155:')
                            .concat(t, '&projectId=')
                            .concat(e || this.rpc.projectId)
                    )
                }
                async loadPersistedSession() {
                    if (!this.session) return
                    const t = await this.signer.client.core.storage.getItem(''.concat(this.STORAGE_KEY, '/chainId')),
                        e = this.session.namespaces[''.concat(this.namespace, ':').concat(t)]
                            ? this.session.namespaces[''.concat(this.namespace, ':').concat(t)]
                            : this.session.namespaces[this.namespace]
                    this.setChainIds(t ? [this.formatChainId(t)] : null === e || void 0 === e ? void 0 : e.accounts),
                        this.setAccounts(null === e || void 0 === e ? void 0 : e.accounts)
                }
                reset() {
                    ;(this.chainId = 1), (this.accounts = [])
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(''.concat(this.STORAGE_KEY, '/chainId'), this.chainId)
                }
                parseAccounts(t) {
                    return 'string' == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map((t) => this.parseAccount(t))
                }
            }
            const Mu = Uu
        },
        3375: (t, e, r) => {
            'use strict'
            r.d(e, { q: () => n })
            class n {}
        },
        6727: (t, e, r) => {
            'use strict'
            r.r(e), r.d(e, { IEvents: () => n.q })
            var n = r(3375)
        },
        3918: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0)
            const n = r(3659)
            ;(e.HEARTBEAT_INTERVAL = n.FIVE_SECONDS), (e.HEARTBEAT_EVENTS = { pulse: 'heartbeat_pulse' })
        },
        7122: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            r(8182).__exportStar(r(3918), e)
        },
        588: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.HeartBeat = void 0)
            const n = r(8182),
                i = r(8041),
                s = r(3659),
                o = r(5326),
                a = r(7122)
            class c extends o.IHeartBeat {
                constructor(t) {
                    super(t),
                        (this.events = new i.EventEmitter()),
                        (this.interval = a.HEARTBEAT_INTERVAL),
                        (this.interval = (null === t || void 0 === t ? void 0 : t.interval) || a.HEARTBEAT_INTERVAL)
                }
                static init(t) {
                    return n.__awaiter(this, void 0, void 0, function* () {
                        const e = new c(t)
                        return yield e.init(), e
                    })
                }
                init() {
                    return n.__awaiter(this, void 0, void 0, function* () {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                initialize() {
                    return n.__awaiter(this, void 0, void 0, function* () {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            e.HeartBeat = c
        },
        1345: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            const n = r(8182)
            n.__exportStar(r(588), e), n.__exportStar(r(5326), e), n.__exportStar(r(7122), e)
        },
        1398: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.IHeartBeat = void 0)
            const n = r(6727)
            class i extends n.IEvents {
                constructor(t) {
                    super()
                }
            }
            e.IHeartBeat = i
        },
        5326: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            r(8182).__exportStar(r(1398), e)
        },
        8182: (t, e, r) => {
            'use strict'
            r.r(e),
                r.d(e, {
                    __assign: () => s,
                    __asyncDelegator: () => _,
                    __asyncGenerator: () => w,
                    __asyncValues: () => b,
                    __await: () => m,
                    __awaiter: () => h,
                    __classPrivateFieldGet: () => O,
                    __classPrivateFieldSet: () => P,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => i,
                    __generator: () => l,
                    __importDefault: () => I,
                    __importStar: () => S,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => o,
                    __spread: () => y,
                    __spreadArrays: () => v,
                    __values: () => d
                })
            var n = function (t, e) {
                return (
                    (n =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e
                            }) ||
                        function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        }),
                    n(t, e)
                )
            }
            function i(t, e) {
                function r() {
                    this.constructor = t
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()))
            }
            var s = function () {
                return (
                    (s =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                            return t
                        }),
                    s.apply(this, arguments)
                )
            }
            function o(t, e) {
                var r = {}
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n])
                if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
                    var i = 0
                    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                        e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                }
                return r
            }
            function a(t, e, r, n) {
                var i,
                    s = arguments.length,
                    o = s < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n
                if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n)
                else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o)
                return s > 3 && o && Object.defineProperty(e, r, o), o
            }
            function c(t, e) {
                return function (r, n) {
                    e(r, n, t)
                }
            }
            function u(t, e) {
                if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }
            function h(t, e, r, n) {
                return new (r || (r = Promise))(function (i, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(t) {
                        var e
                        t.done
                            ? i(t.value)
                            : ((e = t.value),
                              e instanceof r
                                  ? e
                                  : new r(function (t) {
                                        t(e)
                                    })).then(o, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            }
            function l(t, e) {
                var r,
                    n,
                    i,
                    s,
                    o = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0]) throw i[1]
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    }
                return (
                    (s = { next: a(0), throw: a(1), return: a(2) }),
                    'function' === typeof Symbol &&
                        (s[Symbol.iterator] = function () {
                            return this
                        }),
                    s
                )
                function a(s) {
                    return function (a) {
                        return (function (s) {
                            if (r) throw new TypeError('Generator is already executing.')
                            for (; o; )
                                try {
                                    if (
                                        ((r = 1),
                                        n &&
                                            (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                                            !(i = i.call(n, s[1])).done)
                                    )
                                        return i
                                    switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                                        case 0:
                                        case 1:
                                            i = s
                                            break
                                        case 4:
                                            return o.label++, { value: s[1], done: !1 }
                                        case 5:
                                            o.label++, (n = s[1]), (s = [0])
                                            continue
                                        case 7:
                                            ;(s = o.ops.pop()), o.trys.pop()
                                            continue
                                        default:
                                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                o = 0
                                                continue
                                            }
                                            if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                                o.label = s[1]
                                                break
                                            }
                                            if (6 === s[0] && o.label < i[1]) {
                                                ;(o.label = i[1]), (i = s)
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                ;(o.label = i[2]), o.ops.push(s)
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop()
                                            continue
                                    }
                                    s = e.call(t, o)
                                } catch (a) {
                                    ;(s = [6, a]), (n = 0)
                                } finally {
                                    r = i = 0
                                }
                            if (5 & s[0]) throw s[1]
                            return { value: s[0] ? s[1] : void 0, done: !0 }
                        })([s, a])
                    }
                }
            }
            function f(t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r])
            }
            function p(t, e) {
                for (var r in t) 'default' === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }
            function d(t) {
                var e = 'function' === typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0
                if (r) return r.call(t)
                if (t && 'number' === typeof t.length)
                    return {
                        next: function () {
                            return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
                        }
                    }
                throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
            }
            function g(t, e) {
                var r = 'function' === typeof Symbol && t[Symbol.iterator]
                if (!r) return t
                var n,
                    i,
                    s = r.call(t),
                    o = []
                try {
                    for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value)
                } catch (a) {
                    i = { error: a }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }
            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]))
                return t
            }
            function v() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length
                var n = Array(t),
                    i = 0
                for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o]
                return n
            }
            function m(t) {
                return this instanceof m ? ((this.v = t), this) : new m(t)
            }
            function w(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var n,
                    i = r.apply(t, e || []),
                    s = []
                return (
                    (n = {}),
                    o('next'),
                    o('throw'),
                    o('return'),
                    (n[Symbol.asyncIterator] = function () {
                        return this
                    }),
                    n
                )
                function o(t) {
                    i[t] &&
                        (n[t] = function (e) {
                            return new Promise(function (r, n) {
                                s.push([t, e, r, n]) > 1 || a(t, e)
                            })
                        })
                }
                function a(t, e) {
                    try {
                        ;(r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (n) {
                        h(s[0][3], n)
                    }
                    var r
                }
                function c(t) {
                    a('next', t)
                }
                function u(t) {
                    a('throw', t)
                }
                function h(t, e) {
                    t(e), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }
            function _(t) {
                var e, r
                return (
                    (e = {}),
                    n('next'),
                    n('throw', function (t) {
                        throw t
                    }),
                    n('return'),
                    (e[Symbol.iterator] = function () {
                        return this
                    }),
                    e
                )
                function n(n, i) {
                    e[n] = t[n]
                        ? function (e) {
                              return (r = !r) ? { value: m(t[n](e)), done: 'return' === n } : i ? i(e) : e
                          }
                        : i
                }
            }
            function b(t) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var e,
                    r = t[Symbol.asyncIterator]
                return r
                    ? r.call(t)
                    : ((t = d(t)),
                      (e = {}),
                      n('next'),
                      n('throw'),
                      n('return'),
                      (e[Symbol.asyncIterator] = function () {
                          return this
                      }),
                      e)
                function n(r) {
                    e[r] =
                        t[r] &&
                        function (e) {
                            return new Promise(function (n, i) {
                                ;(function (t, e, r, n) {
                                    Promise.resolve(n).then(function (e) {
                                        t({ value: e, done: r })
                                    }, e)
                                })(n, i, (e = t[r](e)).done, e.value)
                            })
                        }
                }
            }
            function E(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e), t
            }
            function S(t) {
                if (t && t.__esModule) return t
                var e = {}
                if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return (e.default = t), e
            }
            function I(t) {
                return t && t.__esModule ? t : { default: t }
            }
            function O(t, e) {
                if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                return e.get(t)
            }
            function P(t, e, r) {
                if (!e.has(t)) throw new TypeError('attempted to set private field on non-instance')
                return e.set(t, r), r
            }
        },
        7395: function (t, e) {
            var r = 'undefined' !== typeof self ? self : this,
                n = (function () {
                    function t() {
                        ;(this.fetch = !1), (this.DOMException = r.DOMException)
                    }
                    return (t.prototype = r), new t()
                })()
            !(function (t) {
                !(function (e) {
                    var r = 'URLSearchParams' in t,
                        n = 'Symbol' in t && 'iterator' in Symbol,
                        i =
                            'FileReader' in t &&
                            'Blob' in t &&
                            (function () {
                                try {
                                    return new Blob(), !0
                                } catch (t) {
                                    return !1
                                }
                            })(),
                        s = 'FormData' in t,
                        o = 'ArrayBuffer' in t
                    if (o)
                        var a = [
                                '[object Int8Array]',
                                '[object Uint8Array]',
                                '[object Uint8ClampedArray]',
                                '[object Int16Array]',
                                '[object Uint16Array]',
                                '[object Int32Array]',
                                '[object Uint32Array]',
                                '[object Float32Array]',
                                '[object Float64Array]'
                            ],
                            c =
                                ArrayBuffer.isView ||
                                function (t) {
                                    return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                                }
                    function u(t) {
                        if (('string' !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)))
                            throw new TypeError('Invalid character in header field name')
                        return t.toLowerCase()
                    }
                    function h(t) {
                        return 'string' !== typeof t && (t = String(t)), t
                    }
                    function l(t) {
                        var e = {
                            next: function () {
                                var e = t.shift()
                                return { done: void 0 === e, value: e }
                            }
                        }
                        return (
                            n &&
                                (e[Symbol.iterator] = function () {
                                    return e
                                }),
                            e
                        )
                    }
                    function f(t) {
                        ;(this.map = {}),
                            t instanceof f
                                ? t.forEach(function (t, e) {
                                      this.append(e, t)
                                  }, this)
                                : Array.isArray(t)
                                  ? t.forEach(function (t) {
                                        this.append(t[0], t[1])
                                    }, this)
                                  : t &&
                                    Object.getOwnPropertyNames(t).forEach(function (e) {
                                        this.append(e, t[e])
                                    }, this)
                    }
                    function p(t) {
                        if (t.bodyUsed) return Promise.reject(new TypeError('Already read'))
                        t.bodyUsed = !0
                    }
                    function d(t) {
                        return new Promise(function (e, r) {
                            ;(t.onload = function () {
                                e(t.result)
                            }),
                                (t.onerror = function () {
                                    r(t.error)
                                })
                        })
                    }
                    function g(t) {
                        var e = new FileReader(),
                            r = d(e)
                        return e.readAsArrayBuffer(t), r
                    }
                    function y(t) {
                        if (t.slice) return t.slice(0)
                        var e = new Uint8Array(t.byteLength)
                        return e.set(new Uint8Array(t)), e.buffer
                    }
                    function v() {
                        return (
                            (this.bodyUsed = !1),
                            (this._initBody = function (t) {
                                var e
                                ;(this._bodyInit = t),
                                    t
                                        ? 'string' === typeof t
                                            ? (this._bodyText = t)
                                            : i && Blob.prototype.isPrototypeOf(t)
                                              ? (this._bodyBlob = t)
                                              : s && FormData.prototype.isPrototypeOf(t)
                                                ? (this._bodyFormData = t)
                                                : r && URLSearchParams.prototype.isPrototypeOf(t)
                                                  ? (this._bodyText = t.toString())
                                                  : o && i && (e = t) && DataView.prototype.isPrototypeOf(e)
                                                    ? ((this._bodyArrayBuffer = y(t.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                                    : o && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t))
                                                      ? (this._bodyArrayBuffer = y(t))
                                                      : (this._bodyText = t = Object.prototype.toString.call(t))
                                        : (this._bodyText = ''),
                                    this.headers.get('content-type') ||
                                        ('string' === typeof t
                                            ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                                            : this._bodyBlob && this._bodyBlob.type
                                              ? this.headers.set('content-type', this._bodyBlob.type)
                                              : r &&
                                                URLSearchParams.prototype.isPrototypeOf(t) &&
                                                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'))
                            }),
                            i &&
                                ((this.blob = function () {
                                    var t = p(this)
                                    if (t) return t
                                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                                    if (this._bodyFormData) throw new Error('could not read FormData body as blob')
                                    return Promise.resolve(new Blob([this._bodyText]))
                                }),
                                (this.arrayBuffer = function () {
                                    return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                                })),
                            (this.text = function () {
                                var t = p(this)
                                if (t) return t
                                if (this._bodyBlob)
                                    return (function (t) {
                                        var e = new FileReader(),
                                            r = d(e)
                                        return e.readAsText(t), r
                                    })(this._bodyBlob)
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(
                                        (function (t) {
                                            for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++)
                                                r[n] = String.fromCharCode(e[n])
                                            return r.join('')
                                        })(this._bodyArrayBuffer)
                                    )
                                if (this._bodyFormData) throw new Error('could not read FormData body as text')
                                return Promise.resolve(this._bodyText)
                            }),
                            s &&
                                (this.formData = function () {
                                    return this.text().then(_)
                                }),
                            (this.json = function () {
                                return this.text().then(JSON.parse)
                            }),
                            this
                        )
                    }
                    ;(f.prototype.append = function (t, e) {
                        ;(t = u(t)), (e = h(e))
                        var r = this.map[t]
                        this.map[t] = r ? r + ', ' + e : e
                    }),
                        (f.prototype.delete = function (t) {
                            delete this.map[u(t)]
                        }),
                        (f.prototype.get = function (t) {
                            return (t = u(t)), this.has(t) ? this.map[t] : null
                        }),
                        (f.prototype.has = function (t) {
                            return this.map.hasOwnProperty(u(t))
                        }),
                        (f.prototype.set = function (t, e) {
                            this.map[u(t)] = h(e)
                        }),
                        (f.prototype.forEach = function (t, e) {
                            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                        }),
                        (f.prototype.keys = function () {
                            var t = []
                            return (
                                this.forEach(function (e, r) {
                                    t.push(r)
                                }),
                                l(t)
                            )
                        }),
                        (f.prototype.values = function () {
                            var t = []
                            return (
                                this.forEach(function (e) {
                                    t.push(e)
                                }),
                                l(t)
                            )
                        }),
                        (f.prototype.entries = function () {
                            var t = []
                            return (
                                this.forEach(function (e, r) {
                                    t.push([r, e])
                                }),
                                l(t)
                            )
                        }),
                        n && (f.prototype[Symbol.iterator] = f.prototype.entries)
                    var m = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
                    function w(t, e) {
                        var r = (e = e || {}).body
                        if (t instanceof w) {
                            if (t.bodyUsed) throw new TypeError('Already read')
                            ;(this.url = t.url),
                                (this.credentials = t.credentials),
                                e.headers || (this.headers = new f(t.headers)),
                                (this.method = t.method),
                                (this.mode = t.mode),
                                (this.signal = t.signal),
                                r || null == t._bodyInit || ((r = t._bodyInit), (t.bodyUsed = !0))
                        } else this.url = String(t)
                        if (
                            ((this.credentials = e.credentials || this.credentials || 'same-origin'),
                            (!e.headers && this.headers) || (this.headers = new f(e.headers)),
                            (this.method = (function (t) {
                                var e = t.toUpperCase()
                                return m.indexOf(e) > -1 ? e : t
                            })(e.method || this.method || 'GET')),
                            (this.mode = e.mode || this.mode || null),
                            (this.signal = e.signal || this.signal),
                            (this.referrer = null),
                            ('GET' === this.method || 'HEAD' === this.method) && r)
                        )
                            throw new TypeError('Body not allowed for GET or HEAD requests')
                        this._initBody(r)
                    }
                    function _(t) {
                        var e = new FormData()
                        return (
                            t
                                .trim()
                                .split('&')
                                .forEach(function (t) {
                                    if (t) {
                                        var r = t.split('='),
                                            n = r.shift().replace(/\+/g, ' '),
                                            i = r.join('=').replace(/\+/g, ' ')
                                        e.append(decodeURIComponent(n), decodeURIComponent(i))
                                    }
                                }),
                            e
                        )
                    }
                    function b(t) {
                        var e = new f()
                        return (
                            t
                                .replace(/\r?\n[\t ]+/g, ' ')
                                .split(/\r?\n/)
                                .forEach(function (t) {
                                    var r = t.split(':'),
                                        n = r.shift().trim()
                                    if (n) {
                                        var i = r.join(':').trim()
                                        e.append(n, i)
                                    }
                                }),
                            e
                        )
                    }
                    function E(t, e) {
                        e || (e = {}),
                            (this.type = 'default'),
                            (this.status = void 0 === e.status ? 200 : e.status),
                            (this.ok = this.status >= 200 && this.status < 300),
                            (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
                            (this.headers = new f(e.headers)),
                            (this.url = e.url || ''),
                            this._initBody(t)
                    }
                    ;(w.prototype.clone = function () {
                        return new w(this, { body: this._bodyInit })
                    }),
                        v.call(w.prototype),
                        v.call(E.prototype),
                        (E.prototype.clone = function () {
                            return new E(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new f(this.headers),
                                url: this.url
                            })
                        }),
                        (E.error = function () {
                            var t = new E(null, { status: 0, statusText: '' })
                            return (t.type = 'error'), t
                        })
                    var S = [301, 302, 303, 307, 308]
                    ;(E.redirect = function (t, e) {
                        if (-1 === S.indexOf(e)) throw new RangeError('Invalid status code')
                        return new E(null, { status: e, headers: { location: t } })
                    }),
                        (e.DOMException = t.DOMException)
                    try {
                        new e.DOMException()
                    } catch (O) {
                        ;(e.DOMException = function (t, e) {
                            ;(this.message = t), (this.name = e)
                            var r = Error(t)
                            this.stack = r.stack
                        }),
                            (e.DOMException.prototype = Object.create(Error.prototype)),
                            (e.DOMException.prototype.constructor = e.DOMException)
                    }
                    function I(t, r) {
                        return new Promise(function (n, s) {
                            var o = new w(t, r)
                            if (o.signal && o.signal.aborted) return s(new e.DOMException('Aborted', 'AbortError'))
                            var a = new XMLHttpRequest()
                            function c() {
                                a.abort()
                            }
                            ;(a.onload = function () {
                                var t = { status: a.status, statusText: a.statusText, headers: b(a.getAllResponseHeaders() || '') }
                                t.url = 'responseURL' in a ? a.responseURL : t.headers.get('X-Request-URL')
                                var e = 'response' in a ? a.response : a.responseText
                                n(new E(e, t))
                            }),
                                (a.onerror = function () {
                                    s(new TypeError('Network request failed'))
                                }),
                                (a.ontimeout = function () {
                                    s(new TypeError('Network request failed'))
                                }),
                                (a.onabort = function () {
                                    s(new e.DOMException('Aborted', 'AbortError'))
                                }),
                                a.open(o.method, o.url, !0),
                                'include' === o.credentials ? (a.withCredentials = !0) : 'omit' === o.credentials && (a.withCredentials = !1),
                                'responseType' in a && i && (a.responseType = 'blob'),
                                o.headers.forEach(function (t, e) {
                                    a.setRequestHeader(e, t)
                                }),
                                o.signal &&
                                    (o.signal.addEventListener('abort', c),
                                    (a.onreadystatechange = function () {
                                        4 === a.readyState && o.signal.removeEventListener('abort', c)
                                    })),
                                a.send('undefined' === typeof o._bodyInit ? null : o._bodyInit)
                        })
                    }
                    ;(I.polyfill = !0),
                        t.fetch || ((t.fetch = I), (t.Headers = f), (t.Request = w), (t.Response = E)),
                        (e.Headers = f),
                        (e.Request = w),
                        (e.Response = E),
                        (e.fetch = I),
                        Object.defineProperty(e, '__esModule', { value: !0 })
                })({})
            })(n),
                (n.fetch.ponyfill = !0),
                delete n.fetch.polyfill
            var i = n
            ;((e = i.fetch).default = i.fetch),
                (e.fetch = i.fetch),
                (e.Headers = i.Headers),
                (e.Request = i.Request),
                (e.Response = i.Response),
                (t.exports = e)
        },
        2923: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.PINO_CUSTOM_CONTEXT_KEY = e.PINO_LOGGER_DEFAULTS = void 0),
                (e.PINO_LOGGER_DEFAULTS = { level: 'info' }),
                (e.PINO_CUSTOM_CONTEXT_KEY = 'custom_context')
        },
        5051: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.pino = void 0)
            const n = r(6254),
                i = n.__importDefault(r(24))
            Object.defineProperty(e, 'pino', {
                enumerable: !0,
                get: function () {
                    return i.default
                }
            }),
                n.__exportStar(r(2923), e),
                n.__exportStar(r(1067), e)
        },
        1067: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.generateChildLogger =
                    e.formatChildLoggerContext =
                    e.getLoggerContext =
                    e.setBrowserLoggerContext =
                    e.getBrowserLoggerContext =
                    e.getDefaultLoggerOptions =
                        void 0)
            const n = r(2923)
            function i(t) {
                return t[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY] || ''
            }
            function s(t, e) {
                return (t[arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY] = e), t
            }
            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.PINO_CUSTOM_CONTEXT_KEY,
                    r = ''
                return (r = 'undefined' === typeof t.bindings ? i(t, e) : t.bindings().context || ''), r
            }
            function a(t, e) {
                const r = o(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY)
                return r.trim() ? ''.concat(r, '/').concat(e) : e
            }
            ;(e.getDefaultLoggerOptions = function (t) {
                return Object.assign(Object.assign({}, t), { level: (null === t || void 0 === t ? void 0 : t.level) || n.PINO_LOGGER_DEFAULTS.level })
            }),
                (e.getBrowserLoggerContext = i),
                (e.setBrowserLoggerContext = s),
                (e.getLoggerContext = o),
                (e.formatChildLoggerContext = a),
                (e.generateChildLogger = function (t, e) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.PINO_CUSTOM_CONTEXT_KEY
                    const i = a(t, e, r)
                    return s(t.child({ context: i }), i, r)
                })
        },
        6254: (t, e, r) => {
            'use strict'
            r.r(e),
                r.d(e, {
                    __assign: () => s,
                    __asyncDelegator: () => _,
                    __asyncGenerator: () => w,
                    __asyncValues: () => b,
                    __await: () => m,
                    __awaiter: () => h,
                    __classPrivateFieldGet: () => O,
                    __classPrivateFieldSet: () => P,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => i,
                    __generator: () => l,
                    __importDefault: () => I,
                    __importStar: () => S,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => o,
                    __spread: () => y,
                    __spreadArrays: () => v,
                    __values: () => d
                })
            var n = function (t, e) {
                return (
                    (n =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e
                            }) ||
                        function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        }),
                    n(t, e)
                )
            }
            function i(t, e) {
                function r() {
                    this.constructor = t
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()))
            }
            var s = function () {
                return (
                    (s =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                            return t
                        }),
                    s.apply(this, arguments)
                )
            }
            function o(t, e) {
                var r = {}
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n])
                if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
                    var i = 0
                    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                        e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                }
                return r
            }
            function a(t, e, r, n) {
                var i,
                    s = arguments.length,
                    o = s < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n
                if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n)
                else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o)
                return s > 3 && o && Object.defineProperty(e, r, o), o
            }
            function c(t, e) {
                return function (r, n) {
                    e(r, n, t)
                }
            }
            function u(t, e) {
                if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }
            function h(t, e, r, n) {
                return new (r || (r = Promise))(function (i, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(t) {
                        var e
                        t.done
                            ? i(t.value)
                            : ((e = t.value),
                              e instanceof r
                                  ? e
                                  : new r(function (t) {
                                        t(e)
                                    })).then(o, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            }
            function l(t, e) {
                var r,
                    n,
                    i,
                    s,
                    o = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0]) throw i[1]
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    }
                return (
                    (s = { next: a(0), throw: a(1), return: a(2) }),
                    'function' === typeof Symbol &&
                        (s[Symbol.iterator] = function () {
                            return this
                        }),
                    s
                )
                function a(s) {
                    return function (a) {
                        return (function (s) {
                            if (r) throw new TypeError('Generator is already executing.')
                            for (; o; )
                                try {
                                    if (
                                        ((r = 1),
                                        n &&
                                            (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                                            !(i = i.call(n, s[1])).done)
                                    )
                                        return i
                                    switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                                        case 0:
                                        case 1:
                                            i = s
                                            break
                                        case 4:
                                            return o.label++, { value: s[1], done: !1 }
                                        case 5:
                                            o.label++, (n = s[1]), (s = [0])
                                            continue
                                        case 7:
                                            ;(s = o.ops.pop()), o.trys.pop()
                                            continue
                                        default:
                                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                o = 0
                                                continue
                                            }
                                            if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                                o.label = s[1]
                                                break
                                            }
                                            if (6 === s[0] && o.label < i[1]) {
                                                ;(o.label = i[1]), (i = s)
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                ;(o.label = i[2]), o.ops.push(s)
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop()
                                            continue
                                    }
                                    s = e.call(t, o)
                                } catch (a) {
                                    ;(s = [6, a]), (n = 0)
                                } finally {
                                    r = i = 0
                                }
                            if (5 & s[0]) throw s[1]
                            return { value: s[0] ? s[1] : void 0, done: !0 }
                        })([s, a])
                    }
                }
            }
            function f(t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r])
            }
            function p(t, e) {
                for (var r in t) 'default' === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }
            function d(t) {
                var e = 'function' === typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0
                if (r) return r.call(t)
                if (t && 'number' === typeof t.length)
                    return {
                        next: function () {
                            return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
                        }
                    }
                throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
            }
            function g(t, e) {
                var r = 'function' === typeof Symbol && t[Symbol.iterator]
                if (!r) return t
                var n,
                    i,
                    s = r.call(t),
                    o = []
                try {
                    for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value)
                } catch (a) {
                    i = { error: a }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }
            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]))
                return t
            }
            function v() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length
                var n = Array(t),
                    i = 0
                for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o]
                return n
            }
            function m(t) {
                return this instanceof m ? ((this.v = t), this) : new m(t)
            }
            function w(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var n,
                    i = r.apply(t, e || []),
                    s = []
                return (
                    (n = {}),
                    o('next'),
                    o('throw'),
                    o('return'),
                    (n[Symbol.asyncIterator] = function () {
                        return this
                    }),
                    n
                )
                function o(t) {
                    i[t] &&
                        (n[t] = function (e) {
                            return new Promise(function (r, n) {
                                s.push([t, e, r, n]) > 1 || a(t, e)
                            })
                        })
                }
                function a(t, e) {
                    try {
                        ;(r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (n) {
                        h(s[0][3], n)
                    }
                    var r
                }
                function c(t) {
                    a('next', t)
                }
                function u(t) {
                    a('throw', t)
                }
                function h(t, e) {
                    t(e), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }
            function _(t) {
                var e, r
                return (
                    (e = {}),
                    n('next'),
                    n('throw', function (t) {
                        throw t
                    }),
                    n('return'),
                    (e[Symbol.iterator] = function () {
                        return this
                    }),
                    e
                )
                function n(n, i) {
                    e[n] = t[n]
                        ? function (e) {
                              return (r = !r) ? { value: m(t[n](e)), done: 'return' === n } : i ? i(e) : e
                          }
                        : i
                }
            }
            function b(t) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var e,
                    r = t[Symbol.asyncIterator]
                return r
                    ? r.call(t)
                    : ((t = d(t)),
                      (e = {}),
                      n('next'),
                      n('throw'),
                      n('return'),
                      (e[Symbol.asyncIterator] = function () {
                          return this
                      }),
                      e)
                function n(r) {
                    e[r] =
                        t[r] &&
                        function (e) {
                            return new Promise(function (n, i) {
                                ;(function (t, e, r, n) {
                                    Promise.resolve(n).then(function (e) {
                                        t({ value: e, done: r })
                                    }, e)
                                })(n, i, (e = t[r](e)).done, e.value)
                            })
                        }
                }
            }
            function E(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e), t
            }
            function S(t) {
                if (t && t.__esModule) return t
                var e = {}
                if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return (e.default = t), e
            }
            function I(t) {
                return t && t.__esModule ? t : { default: t }
            }
            function O(t, e) {
                if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                return e.get(t)
            }
            function P(t, e, r) {
                if (!e.has(t)) throw new TypeError('attempted to set private field on non-instance')
                return e.set(t, r), r
            }
        },
        7370: () => {},
        6395: () => {},
        4813: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            const n = r(1397)
            n.__exportStar(r(6775), e), n.__exportStar(r(3403), e)
        },
        6775: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.ONE_THOUSAND = e.ONE_HUNDRED = void 0),
                (e.ONE_HUNDRED = 100),
                (e.ONE_THOUSAND = 1e3)
        },
        3403: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.ONE_YEAR =
                    e.FOUR_WEEKS =
                    e.THREE_WEEKS =
                    e.TWO_WEEKS =
                    e.ONE_WEEK =
                    e.THIRTY_DAYS =
                    e.SEVEN_DAYS =
                    e.FIVE_DAYS =
                    e.THREE_DAYS =
                    e.ONE_DAY =
                    e.TWENTY_FOUR_HOURS =
                    e.TWELVE_HOURS =
                    e.SIX_HOURS =
                    e.THREE_HOURS =
                    e.ONE_HOUR =
                    e.SIXTY_MINUTES =
                    e.THIRTY_MINUTES =
                    e.TEN_MINUTES =
                    e.FIVE_MINUTES =
                    e.ONE_MINUTE =
                    e.SIXTY_SECONDS =
                    e.THIRTY_SECONDS =
                    e.TEN_SECONDS =
                    e.FIVE_SECONDS =
                    e.ONE_SECOND =
                        void 0),
                (e.ONE_SECOND = 1),
                (e.FIVE_SECONDS = 5),
                (e.TEN_SECONDS = 10),
                (e.THIRTY_SECONDS = 30),
                (e.SIXTY_SECONDS = 60),
                (e.ONE_MINUTE = e.SIXTY_SECONDS),
                (e.FIVE_MINUTES = 5 * e.ONE_MINUTE),
                (e.TEN_MINUTES = 10 * e.ONE_MINUTE),
                (e.THIRTY_MINUTES = 30 * e.ONE_MINUTE),
                (e.SIXTY_MINUTES = 60 * e.ONE_MINUTE),
                (e.ONE_HOUR = e.SIXTY_MINUTES),
                (e.THREE_HOURS = 3 * e.ONE_HOUR),
                (e.SIX_HOURS = 6 * e.ONE_HOUR),
                (e.TWELVE_HOURS = 12 * e.ONE_HOUR),
                (e.TWENTY_FOUR_HOURS = 24 * e.ONE_HOUR),
                (e.ONE_DAY = e.TWENTY_FOUR_HOURS),
                (e.THREE_DAYS = 3 * e.ONE_DAY),
                (e.FIVE_DAYS = 5 * e.ONE_DAY),
                (e.SEVEN_DAYS = 7 * e.ONE_DAY),
                (e.THIRTY_DAYS = 30 * e.ONE_DAY),
                (e.ONE_WEEK = e.SEVEN_DAYS),
                (e.TWO_WEEKS = 2 * e.ONE_WEEK),
                (e.THREE_WEEKS = 3 * e.ONE_WEEK),
                (e.FOUR_WEEKS = 4 * e.ONE_WEEK),
                (e.ONE_YEAR = 365 * e.ONE_DAY)
        },
        3659: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            const n = r(1397)
            n.__exportStar(r(271), e), n.__exportStar(r(6349), e), n.__exportStar(r(8332), e), n.__exportStar(r(4813), e)
        },
        8332: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            r(1397).__exportStar(r(5780), e)
        },
        5780: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.IWatch = void 0)
            e.IWatch = class {}
        },
        6317: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.fromMiliseconds = e.toMiliseconds = void 0)
            const n = r(4813)
            ;(e.toMiliseconds = function (t) {
                return t * n.ONE_THOUSAND
            }),
                (e.fromMiliseconds = function (t) {
                    return Math.floor(t / n.ONE_THOUSAND)
                })
        },
        8083: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.delay = void 0),
                (e.delay = function (t) {
                    return new Promise((e) => {
                        setTimeout(() => {
                            e(!0)
                        }, t)
                    })
                })
        },
        271: (t, e, r) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 })
            const n = r(1397)
            n.__exportStar(r(8083), e), n.__exportStar(r(6317), e)
        },
        6349: (t, e) => {
            'use strict'
            Object.defineProperty(e, '__esModule', { value: !0 }), (e.Watch = void 0)
            class r {
                constructor() {
                    this.timestamps = new Map()
                }
                start(t) {
                    if (this.timestamps.has(t)) throw new Error('Watch already started for label: '.concat(t))
                    this.timestamps.set(t, { started: Date.now() })
                }
                stop(t) {
                    const e = this.get(t)
                    if ('undefined' !== typeof e.elapsed) throw new Error('Watch already stopped for label: '.concat(t))
                    const r = Date.now() - e.started
                    this.timestamps.set(t, { started: e.started, elapsed: r })
                }
                get(t) {
                    const e = this.timestamps.get(t)
                    if ('undefined' === typeof e) throw new Error('No timestamp found for label: '.concat(t))
                    return e
                }
                elapsed(t) {
                    const e = this.get(t)
                    return e.elapsed || Date.now() - e.started
                }
            }
            ;(e.Watch = r), (e.default = r)
        },
        1397: (t, e, r) => {
            'use strict'
            r.r(e),
                r.d(e, {
                    __assign: () => s,
                    __asyncDelegator: () => _,
                    __asyncGenerator: () => w,
                    __asyncValues: () => b,
                    __await: () => m,
                    __awaiter: () => h,
                    __classPrivateFieldGet: () => O,
                    __classPrivateFieldSet: () => P,
                    __createBinding: () => f,
                    __decorate: () => a,
                    __exportStar: () => p,
                    __extends: () => i,
                    __generator: () => l,
                    __importDefault: () => I,
                    __importStar: () => S,
                    __makeTemplateObject: () => E,
                    __metadata: () => u,
                    __param: () => c,
                    __read: () => g,
                    __rest: () => o,
                    __spread: () => y,
                    __spreadArrays: () => v,
                    __values: () => d
                })
            var n = function (t, e) {
                return (
                    (n =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e
                            }) ||
                        function (t, e) {
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                        }),
                    n(t, e)
                )
            }
            function i(t, e) {
                function r() {
                    this.constructor = t
                }
                n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()))
            }
            var s = function () {
                return (
                    (s =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                            return t
                        }),
                    s.apply(this, arguments)
                )
            }
            function o(t, e) {
                var r = {}
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n])
                if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
                    var i = 0
                    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                        e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                }
                return r
            }
            function a(t, e, r, n) {
                var i,
                    s = arguments.length,
                    o = s < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n
                if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n)
                else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o)
                return s > 3 && o && Object.defineProperty(e, r, o), o
            }
            function c(t, e) {
                return function (r, n) {
                    e(r, n, t)
                }
            }
            function u(t, e) {
                if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }
            function h(t, e, r, n) {
                return new (r || (r = Promise))(function (i, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function c(t) {
                        var e
                        t.done
                            ? i(t.value)
                            : ((e = t.value),
                              e instanceof r
                                  ? e
                                  : new r(function (t) {
                                        t(e)
                                    })).then(o, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            }
            function l(t, e) {
                var r,
                    n,
                    i,
                    s,
                    o = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0]) throw i[1]
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    }
                return (
                    (s = { next: a(0), throw: a(1), return: a(2) }),
                    'function' === typeof Symbol &&
                        (s[Symbol.iterator] = function () {
                            return this
                        }),
                    s
                )
                function a(s) {
                    return function (a) {
                        return (function (s) {
                            if (r) throw new TypeError('Generator is already executing.')
                            for (; o; )
                                try {
                                    if (
                                        ((r = 1),
                                        n &&
                                            (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                                            !(i = i.call(n, s[1])).done)
                                    )
                                        return i
                                    switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                                        case 0:
                                        case 1:
                                            i = s
                                            break
                                        case 4:
                                            return o.label++, { value: s[1], done: !1 }
                                        case 5:
                                            o.label++, (n = s[1]), (s = [0])
                                            continue
                                        case 7:
                                            ;(s = o.ops.pop()), o.trys.pop()
                                            continue
                                        default:
                                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                o = 0
                                                continue
                                            }
                                            if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                                o.label = s[1]
                                                break
                                            }
                                            if (6 === s[0] && o.label < i[1]) {
                                                ;(o.label = i[1]), (i = s)
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                ;(o.label = i[2]), o.ops.push(s)
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop()
                                            continue
                                    }
                                    s = e.call(t, o)
                                } catch (a) {
                                    ;(s = [6, a]), (n = 0)
                                } finally {
                                    r = i = 0
                                }
                            if (5 & s[0]) throw s[1]
                            return { value: s[0] ? s[1] : void 0, done: !0 }
                        })([s, a])
                    }
                }
            }
            function f(t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r])
            }
            function p(t, e) {
                for (var r in t) 'default' === r || e.hasOwnProperty(r) || (e[r] = t[r])
            }
            function d(t) {
                var e = 'function' === typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0
                if (r) return r.call(t)
                if (t && 'number' === typeof t.length)
                    return {
                        next: function () {
                            return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }
                        }
                    }
                throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
            }
            function g(t, e) {
                var r = 'function' === typeof Symbol && t[Symbol.iterator]
                if (!r) return t
                var n,
                    i,
                    s = r.call(t),
                    o = []
                try {
                    for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value)
                } catch (a) {
                    i = { error: a }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }
            function y() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]))
                return t
            }
            function v() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length
                var n = Array(t),
                    i = 0
                for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o]
                return n
            }
            function m(t) {
                return this instanceof m ? ((this.v = t), this) : new m(t)
            }
            function w(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var n,
                    i = r.apply(t, e || []),
                    s = []
                return (
                    (n = {}),
                    o('next'),
                    o('throw'),
                    o('return'),
                    (n[Symbol.asyncIterator] = function () {
                        return this
                    }),
                    n
                )
                function o(t) {
                    i[t] &&
                        (n[t] = function (e) {
                            return new Promise(function (r, n) {
                                s.push([t, e, r, n]) > 1 || a(t, e)
                            })
                        })
                }
                function a(t, e) {
                    try {
                        ;(r = i[t](e)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : h(s[0][2], r)
                    } catch (n) {
                        h(s[0][3], n)
                    }
                    var r
                }
                function c(t) {
                    a('next', t)
                }
                function u(t) {
                    a('throw', t)
                }
                function h(t, e) {
                    t(e), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }
            function _(t) {
                var e, r
                return (
                    (e = {}),
                    n('next'),
                    n('throw', function (t) {
                        throw t
                    }),
                    n('return'),
                    (e[Symbol.iterator] = function () {
                        return this
                    }),
                    e
                )
                function n(n, i) {
                    e[n] = t[n]
                        ? function (e) {
                              return (r = !r) ? { value: m(t[n](e)), done: 'return' === n } : i ? i(e) : e
                          }
                        : i
                }
            }
            function b(t) {
                if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                var e,
                    r = t[Symbol.asyncIterator]
                return r
                    ? r.call(t)
                    : ((t = d(t)),
                      (e = {}),
                      n('next'),
                      n('throw'),
                      n('return'),
                      (e[Symbol.asyncIterator] = function () {
                          return this
                      }),
                      e)
                function n(r) {
                    e[r] =
                        t[r] &&
                        function (e) {
                            return new Promise(function (n, i) {
                                ;(function (t, e, r, n) {
                                    Promise.resolve(n).then(function (e) {
                                        t({ value: e, done: r })
                                    }, e)
                                })(n, i, (e = t[r](e)).done, e.value)
                            })
                        }
                }
            }
            function E(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e), t
            }
            function S(t) {
                if (t && t.__esModule) return t
                var e = {}
                if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return (e.default = t), e
            }
            function I(t) {
                return t && t.__esModule ? t : { default: t }
            }
            function O(t, e) {
                if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                return e.get(t)
            }
            function P(t, e, r) {
                if (!e.has(t)) throw new TypeError('attempted to set private field on non-instance')
                return e.set(t, r), r
            }
        },
        8783: (t, e) => {
            'use strict'
            function r(t) {
                let e
                return 'undefined' !== typeof window && 'undefined' !== typeof window[t] && (e = window[t]), e
            }
            function n(t) {
                const e = r(t)
                if (!e) throw new Error(''.concat(t, ' is not defined in Window'))
                return e
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.getLocalStorage =
                    e.getLocalStorageOrThrow =
                    e.getCrypto =
                    e.getCryptoOrThrow =
                    e.getLocation =
                    e.getLocationOrThrow =
                    e.getNavigator =
                    e.getNavigatorOrThrow =
                    e.getDocument =
                    e.getDocumentOrThrow =
                    e.getFromWindowOrThrow =
                    e.getFromWindow =
                        void 0),
                (e.getFromWindow = r),
                (e.getFromWindowOrThrow = n),
                (e.getDocumentOrThrow = function () {
                    return n('document')
                }),
                (e.getDocument = function () {
                    return r('document')
                }),
                (e.getNavigatorOrThrow = function () {
                    return n('navigator')
                }),
                (e.getNavigator = function () {
                    return r('navigator')
                }),
                (e.getLocationOrThrow = function () {
                    return n('location')
                }),
                (e.getLocation = function () {
                    return r('location')
                }),
                (e.getCryptoOrThrow = function () {
                    return n('crypto')
                }),
                (e.getCrypto = function () {
                    return r('crypto')
                }),
                (e.getLocalStorageOrThrow = function () {
                    return n('localStorage')
                }),
                (e.getLocalStorage = function () {
                    return r('localStorage')
                })
        },
        5210: (t, e, r) => {
            'use strict'
            e.D = void 0
            const n = r(8783)
            e.D = function () {
                let t, e
                try {
                    ;(t = n.getDocumentOrThrow()), (e = n.getLocationOrThrow())
                } catch (s) {
                    return null
                }
                function r() {
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n]
                    const i = t.getElementsByTagName('meta')
                    for (let t = 0; t < i.length; t++) {
                        const e = i[t],
                            n = ['itemprop', 'property', 'name'].map((t) => e.getAttribute(t)).filter((t) => !!t && r.includes(t))
                        if (n.length && n) {
                            const t = e.getAttribute('content')
                            if (t) return t
                        }
                    }
                    return ''
                }
                const i = (function () {
                    let e = r('name', 'og:site_name', 'og:title', 'twitter:title')
                    return e || (e = t.title), e
                })()
                return {
                    description: r('description', 'og:description', 'twitter:description', 'keywords'),
                    url: e.origin,
                    icons: (function () {
                        const r = t.getElementsByTagName('link'),
                            n = []
                        for (let t = 0; t < r.length; t++) {
                            const i = r[t],
                                s = i.getAttribute('rel')
                            if (s && s.toLowerCase().indexOf('icon') > -1) {
                                const t = i.getAttribute('href')
                                if (t)
                                    if (
                                        -1 === t.toLowerCase().indexOf('https:') &&
                                        -1 === t.toLowerCase().indexOf('http:') &&
                                        0 !== t.indexOf('//')
                                    ) {
                                        let r = e.protocol + '//' + e.host
                                        if (0 === t.indexOf('/')) r += t
                                        else {
                                            const n = e.pathname.split('/')
                                            n.pop()
                                            r += n.join('/') + '/' + t
                                        }
                                        n.push(r)
                                    } else if (0 === t.indexOf('//')) {
                                        const r = e.protocol + t
                                        n.push(r)
                                    } else n.push(t)
                            }
                        }
                        return n
                    })(),
                    name: i
                }
            }
        },
        8271: (t) => {
            'use strict'
            var e = '%[a-f0-9]{2}',
                r = new RegExp('(' + e + ')|([^%]+?)', 'gi'),
                n = new RegExp('(' + e + ')+', 'gi')
            function i(t, e) {
                try {
                    return [decodeURIComponent(t.join(''))]
                } catch (s) {}
                if (1 === t.length) return t
                e = e || 1
                var r = t.slice(0, e),
                    n = t.slice(e)
                return Array.prototype.concat.call([], i(r), i(n))
            }
            function s(t) {
                try {
                    return decodeURIComponent(t)
                } catch (s) {
                    for (var e = t.match(r) || [], n = 1; n < e.length; n++) e = (t = i(e, n).join('')).match(r) || []
                    return t
                }
            }
            t.exports = function (t) {
                if ('string' !== typeof t) throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof t + '`')
                try {
                    return (t = t.replace(/\+/g, ' ')), decodeURIComponent(t)
                } catch (e) {
                    return (function (t) {
                        for (var r = { '%FE%FF': '\ufffd\ufffd', '%FF%FE': '\ufffd\ufffd' }, i = n.exec(t); i; ) {
                            try {
                                r[i[0]] = decodeURIComponent(i[0])
                            } catch (e) {
                                var o = s(i[0])
                                o !== i[0] && (r[i[0]] = o)
                            }
                            i = n.exec(t)
                        }
                        r['%C2'] = '\ufffd'
                        for (var a = Object.keys(r), c = 0; c < a.length; c++) {
                            var u = a[c]
                            t = t.replace(new RegExp(u, 'g'), r[u])
                        }
                        return t
                    })(t)
                }
            }
        },
        8041: (t) => {
            'use strict'
            var e,
                r = 'object' === typeof Reflect ? Reflect : null,
                n =
                    r && 'function' === typeof r.apply
                        ? r.apply
                        : function (t, e, r) {
                              return Function.prototype.apply.call(t, e, r)
                          }
            e =
                r && 'function' === typeof r.ownKeys
                    ? r.ownKeys
                    : Object.getOwnPropertySymbols
                      ? function (t) {
                            return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                        }
                      : function (t) {
                            return Object.getOwnPropertyNames(t)
                        }
            var i =
                Number.isNaN ||
                function (t) {
                    return t !== t
                }
            function s() {
                s.init.call(this)
            }
            ;(t.exports = s),
                (t.exports.once = function (t, e) {
                    return new Promise(function (r, n) {
                        function i(r) {
                            t.removeListener(e, s), n(r)
                        }
                        function s() {
                            'function' === typeof t.removeListener && t.removeListener('error', i), r([].slice.call(arguments))
                        }
                        g(t, e, s, { once: !0 }),
                            'error' !== e &&
                                (function (t, e, r) {
                                    'function' === typeof t.on && g(t, 'error', e, r)
                                })(t, i, { once: !0 })
                    })
                }),
                (s.EventEmitter = s),
                (s.prototype._events = void 0),
                (s.prototype._eventsCount = 0),
                (s.prototype._maxListeners = void 0)
            var o = 10
            function a(t) {
                if ('function' !== typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }
            function c(t) {
                return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
            }
            function u(t, e, r, n) {
                var i, s, o, u
                if (
                    (a(r),
                    void 0 === (s = t._events)
                        ? ((s = t._events = Object.create(null)), (t._eventsCount = 0))
                        : (void 0 !== s.newListener && (t.emit('newListener', e, r.listener ? r.listener : r), (s = t._events)), (o = s[e])),
                    void 0 === o)
                )
                    (o = s[e] = r), ++t._eventsCount
                else if (
                    ('function' === typeof o ? (o = s[e] = n ? [r, o] : [o, r]) : n ? o.unshift(r) : o.push(r),
                    (i = c(t)) > 0 && o.length > i && !o.warned)
                ) {
                    o.warned = !0
                    var h = new Error(
                        'Possible EventEmitter memory leak detected. ' +
                            o.length +
                            ' ' +
                            String(e) +
                            ' listeners added. Use emitter.setMaxListeners() to increase limit'
                    )
                    ;(h.name = 'MaxListenersExceededWarning'),
                        (h.emitter = t),
                        (h.type = e),
                        (h.count = o.length),
                        (u = h),
                        console && console.warn && console.warn(u)
                }
                return t
            }
            function h() {
                if (!this.fired)
                    return (
                        this.target.removeListener(this.type, this.wrapFn),
                        (this.fired = !0),
                        0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                    )
            }
            function l(t, e, r) {
                var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
                    i = h.bind(n)
                return (i.listener = r), (n.wrapFn = i), i
            }
            function f(t, e, r) {
                var n = t._events
                if (void 0 === n) return []
                var i = n[e]
                return void 0 === i
                    ? []
                    : 'function' === typeof i
                      ? r
                          ? [i.listener || i]
                          : [i]
                      : r
                        ? (function (t) {
                              for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r]
                              return e
                          })(i)
                        : d(i, i.length)
            }
            function p(t) {
                var e = this._events
                if (void 0 !== e) {
                    var r = e[t]
                    if ('function' === typeof r) return 1
                    if (void 0 !== r) return r.length
                }
                return 0
            }
            function d(t, e) {
                for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n]
                return r
            }
            function g(t, e, r, n) {
                if ('function' === typeof t.on) n.once ? t.once(e, r) : t.on(e, r)
                else {
                    if ('function' !== typeof t.addEventListener)
                        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
                    t.addEventListener(e, function i(s) {
                        n.once && t.removeEventListener(e, i), r(s)
                    })
                }
            }
            Object.defineProperty(s, 'defaultMaxListeners', {
                enumerable: !0,
                get: function () {
                    return o
                },
                set: function (t) {
                    if ('number' !== typeof t || t < 0 || i(t))
                        throw new RangeError(
                            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + '.'
                        )
                    o = t
                }
            }),
                (s.init = function () {
                    ;(void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
                        ((this._events = Object.create(null)), (this._eventsCount = 0)),
                        (this._maxListeners = this._maxListeners || void 0)
                }),
                (s.prototype.setMaxListeners = function (t) {
                    if ('number' !== typeof t || t < 0 || i(t))
                        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + '.')
                    return (this._maxListeners = t), this
                }),
                (s.prototype.getMaxListeners = function () {
                    return c(this)
                }),
                (s.prototype.emit = function (t) {
                    for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r])
                    var i = 'error' === t,
                        s = this._events
                    if (void 0 !== s) i = i && void 0 === s.error
                    else if (!i) return !1
                    if (i) {
                        var o
                        if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o
                        var a = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''))
                        throw ((a.context = o), a)
                    }
                    var c = s[t]
                    if (void 0 === c) return !1
                    if ('function' === typeof c) n(c, this, e)
                    else {
                        var u = c.length,
                            h = d(c, u)
                        for (r = 0; r < u; ++r) n(h[r], this, e)
                    }
                    return !0
                }),
                (s.prototype.addListener = function (t, e) {
                    return u(this, t, e, !1)
                }),
                (s.prototype.on = s.prototype.addListener),
                (s.prototype.prependListener = function (t, e) {
                    return u(this, t, e, !0)
                }),
                (s.prototype.once = function (t, e) {
                    return a(e), this.on(t, l(this, t, e)), this
                }),
                (s.prototype.prependOnceListener = function (t, e) {
                    return a(e), this.prependListener(t, l(this, t, e)), this
                }),
                (s.prototype.removeListener = function (t, e) {
                    var r, n, i, s, o
                    if ((a(e), void 0 === (n = this._events))) return this
                    if (void 0 === (r = n[t])) return this
                    if (r === e || r.listener === e)
                        0 === --this._eventsCount
                            ? (this._events = Object.create(null))
                            : (delete n[t], n.removeListener && this.emit('removeListener', t, r.listener || e))
                    else if ('function' !== typeof r) {
                        for (i = -1, s = r.length - 1; s >= 0; s--)
                            if (r[s] === e || r[s].listener === e) {
                                ;(o = r[s].listener), (i = s)
                                break
                            }
                        if (i < 0) return this
                        0 === i
                            ? r.shift()
                            : (function (t, e) {
                                  for (; e + 1 < t.length; e++) t[e] = t[e + 1]
                                  t.pop()
                              })(r, i),
                            1 === r.length && (n[t] = r[0]),
                            void 0 !== n.removeListener && this.emit('removeListener', t, o || e)
                    }
                    return this
                }),
                (s.prototype.off = s.prototype.removeListener),
                (s.prototype.removeAllListeners = function (t) {
                    var e, r, n
                    if (void 0 === (r = this._events)) return this
                    if (void 0 === r.removeListener)
                        return (
                            0 === arguments.length
                                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                                : void 0 !== r[t] && (0 === --this._eventsCount ? (this._events = Object.create(null)) : delete r[t]),
                            this
                        )
                    if (0 === arguments.length) {
                        var i,
                            s = Object.keys(r)
                        for (n = 0; n < s.length; ++n) 'removeListener' !== (i = s[n]) && this.removeAllListeners(i)
                        return this.removeAllListeners('removeListener'), (this._events = Object.create(null)), (this._eventsCount = 0), this
                    }
                    if ('function' === typeof (e = r[t])) this.removeListener(t, e)
                    else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n])
                    return this
                }),
                (s.prototype.listeners = function (t) {
                    return f(this, t, !0)
                }),
                (s.prototype.rawListeners = function (t) {
                    return f(this, t, !1)
                }),
                (s.listenerCount = function (t, e) {
                    return 'function' === typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
                }),
                (s.prototype.listenerCount = p),
                (s.prototype.eventNames = function () {
                    return this._eventsCount > 0 ? e(this._events) : []
                })
        },
        2214: (t) => {
            'use strict'
            t.exports = function (t, e) {
                for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
                    var o = n[s],
                        a = t[o]
                    ;(i ? -1 !== e.indexOf(o) : e(o, a, t)) && (r[o] = a)
                }
                return r
            }
        },
        8117: (t, e, r) => {
            t.exports = self.fetch || (self.fetch = r(9377).default || r(9377))
        },
        3108: (t, e, r) => {
            t = r.nmd(t)
            var n = '__lodash_hash_undefined__',
                i = 1,
                s = 2,
                o = 9007199254740991,
                a = '[object Arguments]',
                c = '[object Array]',
                u = '[object AsyncFunction]',
                h = '[object Boolean]',
                l = '[object Date]',
                f = '[object Error]',
                p = '[object Function]',
                d = '[object GeneratorFunction]',
                g = '[object Map]',
                y = '[object Number]',
                v = '[object Null]',
                m = '[object Object]',
                w = '[object Promise]',
                _ = '[object Proxy]',
                b = '[object RegExp]',
                E = '[object Set]',
                S = '[object String]',
                I = '[object Symbol]',
                O = '[object Undefined]',
                P = '[object WeakMap]',
                x = '[object ArrayBuffer]',
                A = '[object DataView]',
                R = /^\[object .+?Constructor\]$/,
                N = /^(?:0|[1-9]\d*)$/,
                T = {}
            ;(T['[object Float32Array]'] =
                T['[object Float64Array]'] =
                T['[object Int8Array]'] =
                T['[object Int16Array]'] =
                T['[object Int32Array]'] =
                T['[object Uint8Array]'] =
                T['[object Uint8ClampedArray]'] =
                T['[object Uint16Array]'] =
                T['[object Uint32Array]'] =
                    !0),
                (T[a] = T[c] = T[x] = T[h] = T[A] = T[l] = T[f] = T[p] = T[g] = T[y] = T[m] = T[b] = T[E] = T[S] = T[P] = !1)
            var C = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
                j = 'object' == typeof self && self && self.Object === Object && self,
                L = C || j || Function('return this')(),
                U = e && !e.nodeType && e,
                M = U && t && !t.nodeType && t,
                D = M && M.exports === U,
                k = D && C.process,
                q = (function () {
                    try {
                        return k && k.binding && k.binding('util')
                    } catch (t) {}
                })(),
                z = q && q.isTypedArray
            function H(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0
                return !1
            }
            function B(t) {
                var e = -1,
                    r = Array(t.size)
                return (
                    t.forEach(function (t, n) {
                        r[++e] = [n, t]
                    }),
                    r
                )
            }
            function K(t) {
                var e = -1,
                    r = Array(t.size)
                return (
                    t.forEach(function (t) {
                        r[++e] = t
                    }),
                    r
                )
            }
            var V,
                F,
                W = Array.prototype,
                G = Function.prototype,
                Y = Object.prototype,
                J = L['__core-js_shared__'],
                Q = G.toString,
                $ = Y.hasOwnProperty,
                X = (function () {
                    var t = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || '')
                    return t ? 'Symbol(src)_1.' + t : ''
                })(),
                Z = Y.toString,
                tt = RegExp(
                    '^' +
                        Q.call($)
                            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                        '$'
                ),
                et = D ? L.Buffer : void 0,
                rt = L.Symbol,
                nt = L.Uint8Array,
                it = Y.propertyIsEnumerable,
                st = W.splice,
                ot = rt ? rt.toStringTag : void 0,
                at = Object.getOwnPropertySymbols,
                ct = et ? et.isBuffer : void 0,
                ut =
                    ((V = Object.keys),
                    (F = Object),
                    function (t) {
                        return V(F(t))
                    }),
                ht = kt(L, 'DataView'),
                lt = kt(L, 'Map'),
                ft = kt(L, 'Promise'),
                pt = kt(L, 'Set'),
                dt = kt(L, 'WeakMap'),
                gt = kt(Object, 'create'),
                yt = Bt(ht),
                vt = Bt(lt),
                mt = Bt(ft),
                wt = Bt(pt),
                _t = Bt(dt),
                bt = rt ? rt.prototype : void 0,
                Et = bt ? bt.valueOf : void 0
            function St(t) {
                var e = -1,
                    r = null == t ? 0 : t.length
                for (this.clear(); ++e < r; ) {
                    var n = t[e]
                    this.set(n[0], n[1])
                }
            }
            function It(t) {
                var e = -1,
                    r = null == t ? 0 : t.length
                for (this.clear(); ++e < r; ) {
                    var n = t[e]
                    this.set(n[0], n[1])
                }
            }
            function Ot(t) {
                var e = -1,
                    r = null == t ? 0 : t.length
                for (this.clear(); ++e < r; ) {
                    var n = t[e]
                    this.set(n[0], n[1])
                }
            }
            function Pt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length
                for (this.__data__ = new Ot(); ++e < r; ) this.add(t[e])
            }
            function xt(t) {
                var e = (this.__data__ = new It(t))
                this.size = e.size
            }
            function At(t, e) {
                var r = Ft(t),
                    n = !r && Vt(t),
                    i = !r && !n && Wt(t),
                    s = !r && !n && !i && $t(t),
                    o = r || n || i || s,
                    a = o
                        ? (function (t, e) {
                              for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r)
                              return n
                          })(t.length, String)
                        : [],
                    c = a.length
                for (var u in t)
                    (!e && !$.call(t, u)) ||
                        (o &&
                            ('length' == u ||
                                (i && ('offset' == u || 'parent' == u)) ||
                                (s && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                                Ht(u, c))) ||
                        a.push(u)
                return a
            }
            function Rt(t, e) {
                for (var r = t.length; r--; ) if (Kt(t[r][0], e)) return r
                return -1
            }
            function Nt(t) {
                return null == t
                    ? void 0 === t
                        ? O
                        : v
                    : ot && ot in Object(t)
                      ? (function (t) {
                            var e = $.call(t, ot),
                                r = t[ot]
                            try {
                                t[ot] = void 0
                                var n = !0
                            } catch (s) {}
                            var i = Z.call(t)
                            n && (e ? (t[ot] = r) : delete t[ot])
                            return i
                        })(t)
                      : (function (t) {
                            return Z.call(t)
                        })(t)
            }
            function Tt(t) {
                return Qt(t) && Nt(t) == a
            }
            function Ct(t, e, r, n, o) {
                return (
                    t === e ||
                    (null == t || null == e || (!Qt(t) && !Qt(e))
                        ? t !== t && e !== e
                        : (function (t, e, r, n, o, u) {
                              var p = Ft(t),
                                  d = Ft(e),
                                  v = p ? c : zt(t),
                                  w = d ? c : zt(e),
                                  _ = (v = v == a ? m : v) == m,
                                  O = (w = w == a ? m : w) == m,
                                  P = v == w
                              if (P && Wt(t)) {
                                  if (!Wt(e)) return !1
                                  ;(p = !0), (_ = !1)
                              }
                              if (P && !_)
                                  return (
                                      u || (u = new xt()),
                                      p || $t(t)
                                          ? Ut(t, e, r, n, o, u)
                                          : (function (t, e, r, n, o, a, c) {
                                                switch (r) {
                                                    case A:
                                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1
                                                        ;(t = t.buffer), (e = e.buffer)
                                                    case x:
                                                        return !(t.byteLength != e.byteLength || !a(new nt(t), new nt(e)))
                                                    case h:
                                                    case l:
                                                    case y:
                                                        return Kt(+t, +e)
                                                    case f:
                                                        return t.name == e.name && t.message == e.message
                                                    case b:
                                                    case S:
                                                        return t == e + ''
                                                    case g:
                                                        var u = B
                                                    case E:
                                                        var p = n & i
                                                        if ((u || (u = K), t.size != e.size && !p)) return !1
                                                        var d = c.get(t)
                                                        if (d) return d == e
                                                        ;(n |= s), c.set(t, e)
                                                        var v = Ut(u(t), u(e), n, o, a, c)
                                                        return c.delete(t), v
                                                    case I:
                                                        if (Et) return Et.call(t) == Et.call(e)
                                                }
                                                return !1
                                            })(t, e, v, r, n, o, u)
                                  )
                              if (!(r & i)) {
                                  var R = _ && $.call(t, '__wrapped__'),
                                      N = O && $.call(e, '__wrapped__')
                                  if (R || N) {
                                      var T = R ? t.value() : t,
                                          C = N ? e.value() : e
                                      return u || (u = new xt()), o(T, C, r, n, u)
                                  }
                              }
                              if (!P) return !1
                              return (
                                  u || (u = new xt()),
                                  (function (t, e, r, n, s, o) {
                                      var a = r & i,
                                          c = Mt(t),
                                          u = c.length,
                                          h = Mt(e),
                                          l = h.length
                                      if (u != l && !a) return !1
                                      var f = u
                                      for (; f--; ) {
                                          var p = c[f]
                                          if (!(a ? p in e : $.call(e, p))) return !1
                                      }
                                      var d = o.get(t)
                                      if (d && o.get(e)) return d == e
                                      var g = !0
                                      o.set(t, e), o.set(e, t)
                                      var y = a
                                      for (; ++f < u; ) {
                                          var v = t[(p = c[f])],
                                              m = e[p]
                                          if (n) var w = a ? n(m, v, p, e, t, o) : n(v, m, p, t, e, o)
                                          if (!(void 0 === w ? v === m || s(v, m, r, n, o) : w)) {
                                              g = !1
                                              break
                                          }
                                          y || (y = 'constructor' == p)
                                      }
                                      if (g && !y) {
                                          var _ = t.constructor,
                                              b = e.constructor
                                          _ == b ||
                                              !('constructor' in t) ||
                                              !('constructor' in e) ||
                                              ('function' == typeof _ && _ instanceof _ && 'function' == typeof b && b instanceof b) ||
                                              (g = !1)
                                      }
                                      return o.delete(t), o.delete(e), g
                                  })(t, e, r, n, o, u)
                              )
                          })(t, e, r, n, Ct, o))
                )
            }
            function jt(t) {
                return (
                    !(
                        !Jt(t) ||
                        (function (t) {
                            return !!X && X in t
                        })(t)
                    ) && (Gt(t) ? tt : R).test(Bt(t))
                )
            }
            function Lt(t) {
                if (
                    !(function (t) {
                        var e = t && t.constructor,
                            r = ('function' == typeof e && e.prototype) || Y
                        return t === r
                    })(t)
                )
                    return ut(t)
                var e = []
                for (var r in Object(t)) $.call(t, r) && 'constructor' != r && e.push(r)
                return e
            }
            function Ut(t, e, r, n, o, a) {
                var c = r & i,
                    u = t.length,
                    h = e.length
                if (u != h && !(c && h > u)) return !1
                var l = a.get(t)
                if (l && a.get(e)) return l == e
                var f = -1,
                    p = !0,
                    d = r & s ? new Pt() : void 0
                for (a.set(t, e), a.set(e, t); ++f < u; ) {
                    var g = t[f],
                        y = e[f]
                    if (n) var v = c ? n(y, g, f, e, t, a) : n(g, y, f, t, e, a)
                    if (void 0 !== v) {
                        if (v) continue
                        p = !1
                        break
                    }
                    if (d) {
                        if (
                            !H(e, function (t, e) {
                                if (((i = e), !d.has(i) && (g === t || o(g, t, r, n, a)))) return d.push(e)
                                var i
                            })
                        ) {
                            p = !1
                            break
                        }
                    } else if (g !== y && !o(g, y, r, n, a)) {
                        p = !1
                        break
                    }
                }
                return a.delete(t), a.delete(e), p
            }
            function Mt(t) {
                return (function (t, e, r) {
                    var n = e(t)
                    return Ft(t)
                        ? n
                        : (function (t, e) {
                              for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r]
                              return t
                          })(n, r(t))
                })(t, Xt, qt)
            }
            function Dt(t, e) {
                var r = t.__data__
                return (function (t) {
                    var e = typeof t
                    return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t
                })(e)
                    ? r['string' == typeof e ? 'string' : 'hash']
                    : r.map
            }
            function kt(t, e) {
                var r = (function (t, e) {
                    return null == t ? void 0 : t[e]
                })(t, e)
                return jt(r) ? r : void 0
            }
            ;(St.prototype.clear = function () {
                ;(this.__data__ = gt ? gt(null) : {}), (this.size = 0)
            }),
                (St.prototype.delete = function (t) {
                    var e = this.has(t) && delete this.__data__[t]
                    return (this.size -= e ? 1 : 0), e
                }),
                (St.prototype.get = function (t) {
                    var e = this.__data__
                    if (gt) {
                        var r = e[t]
                        return r === n ? void 0 : r
                    }
                    return $.call(e, t) ? e[t] : void 0
                }),
                (St.prototype.has = function (t) {
                    var e = this.__data__
                    return gt ? void 0 !== e[t] : $.call(e, t)
                }),
                (St.prototype.set = function (t, e) {
                    var r = this.__data__
                    return (this.size += this.has(t) ? 0 : 1), (r[t] = gt && void 0 === e ? n : e), this
                }),
                (It.prototype.clear = function () {
                    ;(this.__data__ = []), (this.size = 0)
                }),
                (It.prototype.delete = function (t) {
                    var e = this.__data__,
                        r = Rt(e, t)
                    return !(r < 0) && (r == e.length - 1 ? e.pop() : st.call(e, r, 1), --this.size, !0)
                }),
                (It.prototype.get = function (t) {
                    var e = this.__data__,
                        r = Rt(e, t)
                    return r < 0 ? void 0 : e[r][1]
                }),
                (It.prototype.has = function (t) {
                    return Rt(this.__data__, t) > -1
                }),
                (It.prototype.set = function (t, e) {
                    var r = this.__data__,
                        n = Rt(r, t)
                    return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this
                }),
                (Ot.prototype.clear = function () {
                    ;(this.size = 0), (this.__data__ = { hash: new St(), map: new (lt || It)(), string: new St() })
                }),
                (Ot.prototype.delete = function (t) {
                    var e = Dt(this, t).delete(t)
                    return (this.size -= e ? 1 : 0), e
                }),
                (Ot.prototype.get = function (t) {
                    return Dt(this, t).get(t)
                }),
                (Ot.prototype.has = function (t) {
                    return Dt(this, t).has(t)
                }),
                (Ot.prototype.set = function (t, e) {
                    var r = Dt(this, t),
                        n = r.size
                    return r.set(t, e), (this.size += r.size == n ? 0 : 1), this
                }),
                (Pt.prototype.add = Pt.prototype.push =
                    function (t) {
                        return this.__data__.set(t, n), this
                    }),
                (Pt.prototype.has = function (t) {
                    return this.__data__.has(t)
                }),
                (xt.prototype.clear = function () {
                    ;(this.__data__ = new It()), (this.size = 0)
                }),
                (xt.prototype.delete = function (t) {
                    var e = this.__data__,
                        r = e.delete(t)
                    return (this.size = e.size), r
                }),
                (xt.prototype.get = function (t) {
                    return this.__data__.get(t)
                }),
                (xt.prototype.has = function (t) {
                    return this.__data__.has(t)
                }),
                (xt.prototype.set = function (t, e) {
                    var r = this.__data__
                    if (r instanceof It) {
                        var n = r.__data__
                        if (!lt || n.length < 199) return n.push([t, e]), (this.size = ++r.size), this
                        r = this.__data__ = new Ot(n)
                    }
                    return r.set(t, e), (this.size = r.size), this
                })
            var qt = at
                    ? function (t) {
                          return null == t
                              ? []
                              : ((t = Object(t)),
                                (function (t, e) {
                                    for (var r = -1, n = null == t ? 0 : t.length, i = 0, s = []; ++r < n; ) {
                                        var o = t[r]
                                        e(o, r, t) && (s[i++] = o)
                                    }
                                    return s
                                })(at(t), function (e) {
                                    return it.call(t, e)
                                }))
                      }
                    : function () {
                          return []
                      },
                zt = Nt
            function Ht(t, e) {
                return !!(e = null == e ? o : e) && ('number' == typeof t || N.test(t)) && t > -1 && t % 1 == 0 && t < e
            }
            function Bt(t) {
                if (null != t) {
                    try {
                        return Q.call(t)
                    } catch (e) {}
                    try {
                        return t + ''
                    } catch (e) {}
                }
                return ''
            }
            function Kt(t, e) {
                return t === e || (t !== t && e !== e)
            }
            ;((ht && zt(new ht(new ArrayBuffer(1))) != A) ||
                (lt && zt(new lt()) != g) ||
                (ft && zt(ft.resolve()) != w) ||
                (pt && zt(new pt()) != E) ||
                (dt && zt(new dt()) != P)) &&
                (zt = function (t) {
                    var e = Nt(t),
                        r = e == m ? t.constructor : void 0,
                        n = r ? Bt(r) : ''
                    if (n)
                        switch (n) {
                            case yt:
                                return A
                            case vt:
                                return g
                            case mt:
                                return w
                            case wt:
                                return E
                            case _t:
                                return P
                        }
                    return e
                })
            var Vt = Tt(
                    (function () {
                        return arguments
                    })()
                )
                    ? Tt
                    : function (t) {
                          return Qt(t) && $.call(t, 'callee') && !it.call(t, 'callee')
                      },
                Ft = Array.isArray
            var Wt =
                ct ||
                function () {
                    return !1
                }
            function Gt(t) {
                if (!Jt(t)) return !1
                var e = Nt(t)
                return e == p || e == d || e == u || e == _
            }
            function Yt(t) {
                return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= o
            }
            function Jt(t) {
                var e = typeof t
                return null != t && ('object' == e || 'function' == e)
            }
            function Qt(t) {
                return null != t && 'object' == typeof t
            }
            var $t = z
                ? (function (t) {
                      return function (e) {
                          return t(e)
                      }
                  })(z)
                : function (t) {
                      return Qt(t) && Yt(t.length) && !!T[Nt(t)]
                  }
            function Xt(t) {
                return null != (e = t) && Yt(e.length) && !Gt(e) ? At(t) : Lt(t)
                var e
            }
            t.exports = function (t, e) {
                return Ct(t, e)
            }
        },
        1172: (t, e, r) => {
            'use strict'
            const n = r(2376),
                i = r(8271),
                s = r(4266),
                o = r(2214),
                a = Symbol('encodeFragmentIdentifier')
            function c(t) {
                if ('string' !== typeof t || 1 !== t.length) throw new TypeError('arrayFormatSeparator must be single character string')
            }
            function u(t, e) {
                return e.encode ? (e.strict ? n(t) : encodeURIComponent(t)) : t
            }
            function h(t, e) {
                return e.decode ? i(t) : t
            }
            function l(t) {
                return Array.isArray(t)
                    ? t.sort()
                    : 'object' === typeof t
                      ? l(Object.keys(t))
                            .sort((t, e) => Number(t) - Number(e))
                            .map((e) => t[e])
                      : t
            }
            function f(t) {
                const e = t.indexOf('#')
                return -1 !== e && (t = t.slice(0, e)), t
            }
            function p(t) {
                const e = (t = f(t)).indexOf('?')
                return -1 === e ? '' : t.slice(e + 1)
            }
            function d(t, e) {
                return (
                    e.parseNumbers && !Number.isNaN(Number(t)) && 'string' === typeof t && '' !== t.trim()
                        ? (t = Number(t))
                        : !e.parseBooleans ||
                          null === t ||
                          ('true' !== t.toLowerCase() && 'false' !== t.toLowerCase()) ||
                          (t = 'true' === t.toLowerCase()),
                    t
                )
            }
            function g(t, e) {
                c(
                    (e = Object.assign(
                        { decode: !0, sort: !0, arrayFormat: 'none', arrayFormatSeparator: ',', parseNumbers: !1, parseBooleans: !1 },
                        e
                    )).arrayFormatSeparator
                )
                const r = (function (t) {
                        let e
                        switch (t.arrayFormat) {
                            case 'index':
                                return (t, r, n) => {
                                    ;(e = /\[(\d*)\]$/.exec(t)),
                                        (t = t.replace(/\[\d*\]$/, '')),
                                        e ? (void 0 === n[t] && (n[t] = {}), (n[t][e[1]] = r)) : (n[t] = r)
                                }
                            case 'bracket':
                                return (t, r, n) => {
                                    ;(e = /(\[\])$/.exec(t)),
                                        (t = t.replace(/\[\]$/, '')),
                                        e ? (void 0 !== n[t] ? (n[t] = [].concat(n[t], r)) : (n[t] = [r])) : (n[t] = r)
                                }
                            case 'colon-list-separator':
                                return (t, r, n) => {
                                    ;(e = /(:list)$/.exec(t)),
                                        (t = t.replace(/:list$/, '')),
                                        e ? (void 0 !== n[t] ? (n[t] = [].concat(n[t], r)) : (n[t] = [r])) : (n[t] = r)
                                }
                            case 'comma':
                            case 'separator':
                                return (e, r, n) => {
                                    const i = 'string' === typeof r && r.includes(t.arrayFormatSeparator),
                                        s = 'string' === typeof r && !i && h(r, t).includes(t.arrayFormatSeparator)
                                    r = s ? h(r, t) : r
                                    const o = i || s ? r.split(t.arrayFormatSeparator).map((e) => h(e, t)) : null === r ? r : h(r, t)
                                    n[e] = o
                                }
                            case 'bracket-separator':
                                return (e, r, n) => {
                                    const i = /(\[\])$/.test(e)
                                    if (((e = e.replace(/\[\]$/, '')), !i)) return void (n[e] = r ? h(r, t) : r)
                                    const s = null === r ? [] : r.split(t.arrayFormatSeparator).map((e) => h(e, t))
                                    void 0 !== n[e] ? (n[e] = [].concat(n[e], s)) : (n[e] = s)
                                }
                            default:
                                return (t, e, r) => {
                                    void 0 !== r[t] ? (r[t] = [].concat(r[t], e)) : (r[t] = e)
                                }
                        }
                    })(e),
                    n = Object.create(null)
                if ('string' !== typeof t) return n
                if (!(t = t.trim().replace(/^[?#&]/, ''))) return n
                for (const i of t.split('&')) {
                    if ('' === i) continue
                    let [t, o] = s(e.decode ? i.replace(/\+/g, ' ') : i, '=')
                    ;(o = void 0 === o ? null : ['comma', 'separator', 'bracket-separator'].includes(e.arrayFormat) ? o : h(o, e)), r(h(t, e), o, n)
                }
                for (const i of Object.keys(n)) {
                    const t = n[i]
                    if ('object' === typeof t && null !== t) for (const r of Object.keys(t)) t[r] = d(t[r], e)
                    else n[i] = d(t, e)
                }
                return !1 === e.sort
                    ? n
                    : (!0 === e.sort ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce((t, e) => {
                          const r = n[e]
                          return Boolean(r) && 'object' === typeof r && !Array.isArray(r) ? (t[e] = l(r)) : (t[e] = r), t
                      }, Object.create(null))
            }
            ;(e.extract = p),
                (e.parse = g),
                (e.stringify = (t, e) => {
                    if (!t) return ''
                    c((e = Object.assign({ encode: !0, strict: !0, arrayFormat: 'none', arrayFormatSeparator: ',' }, e)).arrayFormatSeparator)
                    const r = (r) => {
                            return (e.skipNull && (null === (n = t[r]) || void 0 === n)) || (e.skipEmptyString && '' === t[r])
                            var n
                        },
                        n = (function (t) {
                            switch (t.arrayFormat) {
                                case 'index':
                                    return (e) => (r, n) => {
                                        const i = r.length
                                        return void 0 === n || (t.skipNull && null === n) || (t.skipEmptyString && '' === n)
                                            ? r
                                            : null === n
                                              ? [...r, [u(e, t), '[', i, ']'].join('')]
                                              : [...r, [u(e, t), '[', u(i, t), ']=', u(n, t)].join('')]
                                    }
                                case 'bracket':
                                    return (e) => (r, n) =>
                                        void 0 === n || (t.skipNull && null === n) || (t.skipEmptyString && '' === n)
                                            ? r
                                            : null === n
                                              ? [...r, [u(e, t), '[]'].join('')]
                                              : [...r, [u(e, t), '[]=', u(n, t)].join('')]
                                case 'colon-list-separator':
                                    return (e) => (r, n) =>
                                        void 0 === n || (t.skipNull && null === n) || (t.skipEmptyString && '' === n)
                                            ? r
                                            : null === n
                                              ? [...r, [u(e, t), ':list='].join('')]
                                              : [...r, [u(e, t), ':list=', u(n, t)].join('')]
                                case 'comma':
                                case 'separator':
                                case 'bracket-separator': {
                                    const e = 'bracket-separator' === t.arrayFormat ? '[]=' : '='
                                    return (r) => (n, i) =>
                                        void 0 === i || (t.skipNull && null === i) || (t.skipEmptyString && '' === i)
                                            ? n
                                            : ((i = null === i ? '' : i),
                                              0 === n.length ? [[u(r, t), e, u(i, t)].join('')] : [[n, u(i, t)].join(t.arrayFormatSeparator)])
                                }
                                default:
                                    return (e) => (r, n) =>
                                        void 0 === n || (t.skipNull && null === n) || (t.skipEmptyString && '' === n)
                                            ? r
                                            : null === n
                                              ? [...r, u(e, t)]
                                              : [...r, [u(e, t), '=', u(n, t)].join('')]
                            }
                        })(e),
                        i = {}
                    for (const o of Object.keys(t)) r(o) || (i[o] = t[o])
                    const s = Object.keys(i)
                    return (
                        !1 !== e.sort && s.sort(e.sort),
                        s
                            .map((r) => {
                                const i = t[r]
                                return void 0 === i
                                    ? ''
                                    : null === i
                                      ? u(r, e)
                                      : Array.isArray(i)
                                        ? 0 === i.length && 'bracket-separator' === e.arrayFormat
                                            ? u(r, e) + '[]'
                                            : i.reduce(n(r), []).join('&')
                                        : u(r, e) + '=' + u(i, e)
                            })
                            .filter((t) => t.length > 0)
                            .join('&')
                    )
                }),
                (e.parseUrl = (t, e) => {
                    e = Object.assign({ decode: !0 }, e)
                    const [r, n] = s(t, '#')
                    return Object.assign(
                        { url: r.split('?')[0] || '', query: g(p(t), e) },
                        e && e.parseFragmentIdentifier && n ? { fragmentIdentifier: h(n, e) } : {}
                    )
                }),
                (e.stringifyUrl = (t, r) => {
                    r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r)
                    const n = f(t.url).split('?')[0] || '',
                        i = e.extract(t.url),
                        s = e.parse(i, { sort: !1 }),
                        o = Object.assign(s, t.query)
                    let c = e.stringify(o, r)
                    c && (c = '?'.concat(c))
                    let h = (function (t) {
                        let e = ''
                        const r = t.indexOf('#')
                        return -1 !== r && (e = t.slice(r)), e
                    })(t.url)
                    return (
                        t.fragmentIdentifier && (h = '#'.concat(r[a] ? u(t.fragmentIdentifier, r) : t.fragmentIdentifier)),
                        ''.concat(n).concat(c).concat(h)
                    )
                }),
                (e.pick = (t, r, n) => {
                    n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n)
                    const { url: i, query: s, fragmentIdentifier: c } = e.parseUrl(t, n)
                    return e.stringifyUrl({ url: i, query: o(s, r), fragmentIdentifier: c }, n)
                }),
                (e.exclude = (t, r, n) => {
                    const i = Array.isArray(r) ? (t) => !r.includes(t) : (t, e) => !r(t, e)
                    return e.pick(t, i, n)
                })
        },
        5960: (t) => {
            'use strict'
            function e(t) {
                try {
                    return JSON.stringify(t)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            t.exports = function (t, r, n) {
                var i = (n && n.stringify) || e
                if ('object' === typeof t && null !== t) {
                    var s = r.length + 1
                    if (1 === s) return t
                    var o = new Array(s)
                    o[0] = i(t)
                    for (var a = 1; a < s; a++) o[a] = i(r[a])
                    return o.join(' ')
                }
                if ('string' !== typeof t) return t
                var c = r.length
                if (0 === c) return t
                for (var u = '', h = 0, l = -1, f = (t && t.length) || 0, p = 0; p < f; ) {
                    if (37 === t.charCodeAt(p) && p + 1 < f) {
                        switch (((l = l > -1 ? l : 0), t.charCodeAt(p + 1))) {
                            case 100:
                            case 102:
                                if (h >= c) break
                                if (null == r[h]) break
                                l < p && (u += t.slice(l, p)), (u += Number(r[h])), (l = p + 2), p++
                                break
                            case 105:
                                if (h >= c) break
                                if (null == r[h]) break
                                l < p && (u += t.slice(l, p)), (u += Math.floor(Number(r[h]))), (l = p + 2), p++
                                break
                            case 79:
                            case 111:
                            case 106:
                                if (h >= c) break
                                if (void 0 === r[h]) break
                                l < p && (u += t.slice(l, p))
                                var d = typeof r[h]
                                if ('string' === d) {
                                    ;(u += "'" + r[h] + "'"), (l = p + 2), p++
                                    break
                                }
                                if ('function' === d) {
                                    ;(u += r[h].name || '<anonymous>'), (l = p + 2), p++
                                    break
                                }
                                ;(u += i(r[h])), (l = p + 2), p++
                                break
                            case 115:
                                if (h >= c) break
                                l < p && (u += t.slice(l, p)), (u += String(r[h])), (l = p + 2), p++
                                break
                            case 37:
                                l < p && (u += t.slice(l, p)), (u += '%'), (l = p + 2), p++, h--
                        }
                        ++h
                    }
                    ++p
                }
                if (-1 === l) return t
                l < f && (u += t.slice(l))
                return u
            }
        },
        4266: (t) => {
            'use strict'
            t.exports = (t, e) => {
                if ('string' !== typeof t || 'string' !== typeof e) throw new TypeError('Expected the arguments to be of type `string`')
                if ('' === e) return [t]
                const r = t.indexOf(e)
                return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)]
            }
        },
        2376: (t) => {
            'use strict'
            t.exports = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (t) => '%'.concat(t.charCodeAt(0).toString(16).toUpperCase()))
        },
        9377: (t, e, r) => {
            'use strict'
            function n(t, e) {
                return (
                    (e = e || {}),
                    new Promise(function (r, n) {
                        var i = new XMLHttpRequest(),
                            s = [],
                            o = [],
                            a = {},
                            c = function () {
                                return {
                                    ok: 2 == ((i.status / 100) | 0),
                                    statusText: i.statusText,
                                    status: i.status,
                                    url: i.responseURL,
                                    text: function () {
                                        return Promise.resolve(i.responseText)
                                    },
                                    json: function () {
                                        return Promise.resolve(i.responseText).then(JSON.parse)
                                    },
                                    blob: function () {
                                        return Promise.resolve(new Blob([i.response]))
                                    },
                                    clone: c,
                                    headers: {
                                        keys: function () {
                                            return s
                                        },
                                        entries: function () {
                                            return o
                                        },
                                        get: function (t) {
                                            return a[t.toLowerCase()]
                                        },
                                        has: function (t) {
                                            return t.toLowerCase() in a
                                        }
                                    }
                                }
                            }
                        for (var u in (i.open(e.method || 'get', t, !0),
                        (i.onload = function () {
                            i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, e, r) {
                                s.push((e = e.toLowerCase())), o.push([e, r]), (a[e] = a[e] ? a[e] + ',' + r : r)
                            }),
                                r(c())
                        }),
                        (i.onerror = n),
                        (i.withCredentials = 'include' == e.credentials),
                        e.headers))
                            i.setRequestHeader(u, e.headers[u])
                        i.send(e.body || null)
                    })
                )
            }
            r.r(e), r.d(e, { default: () => n })
        },
        8720: (t) => {
            'use strict'
            t.exports = function () {
                throw new Error('ws does not work in the browser. Browser clients must use the native WebSocket object')
            }
        },
        24: (t, e, r) => {
            'use strict'
            const n = r(5960)
            t.exports = o
            const i =
                    (function () {
                        function t(t) {
                            return 'undefined' !== typeof t && t
                        }
                        try {
                            return (
                                'undefined' !== typeof globalThis ||
                                    Object.defineProperty(Object.prototype, 'globalThis', {
                                        get: function () {
                                            return delete Object.prototype.globalThis, (this.globalThis = this)
                                        },
                                        configurable: !0
                                    }),
                                globalThis
                            )
                        } catch (e) {
                            return t(self) || t(window) || t(this) || {}
                        }
                    })().console || {},
                s = {
                    mapHttpRequest: f,
                    mapHttpResponse: f,
                    wrapRequestSerializer: p,
                    wrapResponseSerializer: p,
                    wrapErrorSerializer: p,
                    req: f,
                    res: f,
                    err: function (t) {
                        const e = { type: t.constructor.name, msg: t.message, stack: t.stack }
                        for (const r in t) void 0 === e[r] && (e[r] = t[r])
                        return e
                    }
                }
            function o(t) {
                ;(t = t || {}).browser = t.browser || {}
                const e = t.browser.transmit
                if (e && 'function' !== typeof e.send) throw Error('pino: transmit option must have a send function')
                const r = t.browser.write || i
                t.browser.write && (t.browser.asObject = !0)
                const n = t.serializers || {},
                    s = (function (t, e) {
                        if (Array.isArray(t))
                            return t.filter(function (t) {
                                return '!stdSerializers.err' !== t
                            })
                        return !0 === t && Object.keys(e)
                    })(t.browser.serialize, n)
                let f = t.browser.serialize
                Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf('!stdSerializers.err') > -1 && (f = !1)
                'function' === typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === t.enabled && (t.level = 'silent')
                const p = t.level || 'info',
                    g = Object.create(r)
                g.log || (g.log = d),
                    Object.defineProperty(g, 'levelVal', {
                        get: function () {
                            return 'silent' === this.level ? 1 / 0 : this.levels.values[this.level]
                        }
                    }),
                    Object.defineProperty(g, 'level', {
                        get: function () {
                            return this._level
                        },
                        set: function (t) {
                            if ('silent' !== t && !this.levels.values[t]) throw Error('unknown level ' + t)
                            ;(this._level = t),
                                a(y, g, 'error', 'log'),
                                a(y, g, 'fatal', 'error'),
                                a(y, g, 'warn', 'error'),
                                a(y, g, 'info', 'log'),
                                a(y, g, 'debug', 'log'),
                                a(y, g, 'trace', 'log')
                        }
                    })
                const y = {
                    transmit: e,
                    serialize: s,
                    asObject: t.browser.asObject,
                    levels: ['error', 'fatal', 'warn', 'info', 'debug', 'trace'],
                    timestamp: l(t)
                }
                return (
                    (g.levels = o.levels),
                    (g.level = p),
                    (g.setMaxListeners =
                        g.getMaxListeners =
                        g.emit =
                        g.addListener =
                        g.on =
                        g.prependListener =
                        g.once =
                        g.prependOnceListener =
                        g.removeListener =
                        g.removeAllListeners =
                        g.listeners =
                        g.listenerCount =
                        g.eventNames =
                        g.write =
                        g.flush =
                            d),
                    (g.serializers = n),
                    (g._serialize = s),
                    (g._stdErrSerialize = f),
                    (g.child = function (r, i) {
                        if (!r) throw new Error('missing bindings for child Pino')
                        ;(i = i || {}), s && r.serializers && (i.serializers = r.serializers)
                        const o = i.serializers
                        if (s && o) {
                            var a = Object.assign({}, n, o),
                                l = !0 === t.browser.serialize ? Object.keys(a) : s
                            delete r.serializers, c([r], l, a, this._stdErrSerialize)
                        }
                        function f(t) {
                            ;(this._childLevel = 1 + (0 | t._childLevel)),
                                (this.error = u(t, r, 'error')),
                                (this.fatal = u(t, r, 'fatal')),
                                (this.warn = u(t, r, 'warn')),
                                (this.info = u(t, r, 'info')),
                                (this.debug = u(t, r, 'debug')),
                                (this.trace = u(t, r, 'trace')),
                                a && ((this.serializers = a), (this._serialize = l)),
                                e && (this._logEvent = h([].concat(t._logEvent.bindings, r)))
                        }
                        return (f.prototype = this), new f(this)
                    }),
                    e && (g._logEvent = h()),
                    g
                )
            }
            function a(t, e, r, s) {
                const a = Object.getPrototypeOf(e)
                ;(e[r] = e.levelVal > e.levels.values[r] ? d : a[r] ? a[r] : i[r] || i[s] || d),
                    (function (t, e, r) {
                        if (!t.transmit && e[r] === d) return
                        e[r] =
                            ((s = e[r]),
                            function () {
                                const a = t.timestamp(),
                                    u = new Array(arguments.length),
                                    l = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this
                                for (var f = 0; f < u.length; f++) u[f] = arguments[f]
                                if (
                                    (t.serialize && !t.asObject && c(u, this._serialize, this.serializers, this._stdErrSerialize),
                                    t.asObject
                                        ? s.call(
                                              l,
                                              (function (t, e, r, i) {
                                                  t._serialize && c(r, t._serialize, t.serializers, t._stdErrSerialize)
                                                  const s = r.slice()
                                                  let a = s[0]
                                                  const u = {}
                                                  i && (u.time = i), (u.level = o.levels.values[e])
                                                  let h = 1 + (0 | t._childLevel)
                                                  if ((h < 1 && (h = 1), null !== a && 'object' === typeof a)) {
                                                      for (; h-- && 'object' === typeof s[0]; ) Object.assign(u, s.shift())
                                                      a = s.length ? n(s.shift(), s) : void 0
                                                  } else 'string' === typeof a && (a = n(s.shift(), s))
                                                  return void 0 !== a && (u.msg = a), u
                                              })(this, r, u, a)
                                          )
                                        : s.apply(l, u),
                                    t.transmit)
                                ) {
                                    const n = t.transmit.level || e.level,
                                        i = o.levels.values[n],
                                        s = o.levels.values[r]
                                    if (s < i) return
                                    !(function (t, e, r) {
                                        const n = e.send,
                                            i = e.ts,
                                            s = e.methodLevel,
                                            o = e.methodValue,
                                            a = e.val,
                                            u = t._logEvent.bindings
                                        c(
                                            r,
                                            t._serialize || Object.keys(t.serializers),
                                            t.serializers,
                                            void 0 === t._stdErrSerialize || t._stdErrSerialize
                                        ),
                                            (t._logEvent.ts = i),
                                            (t._logEvent.messages = r.filter(function (t) {
                                                return -1 === u.indexOf(t)
                                            })),
                                            (t._logEvent.level.label = s),
                                            (t._logEvent.level.value = o),
                                            n(s, t._logEvent, a),
                                            (t._logEvent = h(u))
                                    })(
                                        this,
                                        {
                                            ts: a,
                                            methodLevel: r,
                                            methodValue: s,
                                            transmitLevel: n,
                                            transmitValue: o.levels.values[t.transmit.level || e.level],
                                            send: t.transmit.send,
                                            val: e.levelVal
                                        },
                                        u
                                    )
                                }
                            })
                        var s
                    })(t, e, r)
            }
            function c(t, e, r, n) {
                for (const i in t)
                    if (n && t[i] instanceof Error) t[i] = o.stdSerializers.err(t[i])
                    else if ('object' === typeof t[i] && !Array.isArray(t[i]))
                        for (const n in t[i]) e && e.indexOf(n) > -1 && n in r && (t[i][n] = r[n](t[i][n]))
            }
            function u(t, e, r) {
                return function () {
                    const n = new Array(1 + arguments.length)
                    n[0] = e
                    for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1]
                    return t[r].apply(this, n)
                }
            }
            function h(t) {
                return { ts: 0, messages: [], bindings: t || [], level: { label: '', value: 0 } }
            }
            function l(t) {
                return 'function' === typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? g : y
            }
            function f() {
                return {}
            }
            function p(t) {
                return t
            }
            function d() {}
            function g() {
                return !1
            }
            function y() {
                return Date.now()
            }
            ;(o.levels = {
                values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
                labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' }
            }),
                (o.stdSerializers = s),
                (o.stdTimeFunctions = Object.assign(
                    {},
                    {
                        nullTime: g,
                        epochTime: y,
                        unixTime: function () {
                            return Math.round(Date.now() / 1e3)
                        },
                        isoTime: function () {
                            return new Date(Date.now()).toISOString()
                        }
                    }
                ))
        }
    }
])

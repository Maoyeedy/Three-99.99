(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r); new MutationObserver(r => { for (const s of r) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o) }).observe(document, { childList: !0, subtree: !0 }); function e (r) { const s = {}; return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s } function n (r) { if (r.ep) return; r.ep = !0; const s = e(r); fetch(r.href, s) } })()/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds = "170", Wo = 0, Js = 1, Xo = 2, so = 1, qo = 2, Ze = 3, dn = 0, ge = 1, Ke = 2, un = 0, Jn = 1, Qs = 2, ta = 3, ea = 4, Yo = 5, bn = 100, Zo = 101, Ko = 102, $o = 103, jo = 104, Jo = 200, Qo = 201, tl = 202, el = 203, Yr = 204, Zr = 205, nl = 206, il = 207, rl = 208, sl = 209, al = 210, ol = 211, ll = 212, cl = 213, ul = 214, Kr = 0, $r = 1, jr = 2, ei = 3, Jr = 4, Qr = 5, ts = 6, es = 7, ao = 0, hl = 1, dl = 2, hn = 0, fl = 1, pl = 2, ml = 3, _l = 4, gl = 5, vl = 6, xl = 7, oo = 300, ni = 301, ii = 302, ns = 303, is = 304, ur = 306, yi = 1e3, Rn = 1001, rs = 1002, Ie = 1003, Ml = 1004, Ui = 1005, Oe = 1006, mr = 1007, Cn = 1008, Qe = 1009, lo = 1010, co = 1011, Ti = 1012, Us = 1013, Ln = 1014, $e = 1015, wi = 1016, Is = 1017, Ns = 1018, ri = 1020, uo = 35902, ho = 1021, fo = 1022, Ue = 1023, po = 1024, mo = 1025, Qn = 1026, si = 1027, _o = 1028, Fs = 1029, go = 1030, Os = 1031, Bs = 1033, nr = 33776, ir = 33777, rr = 33778, sr = 33779, ss = 35840, as = 35841, os = 35842, ls = 35843, cs = 36196, us = 37492, hs = 37496, ds = 37808, fs = 37809, ps = 37810, ms = 37811, _s = 37812, gs = 37813, vs = 37814, xs = 37815, Ms = 37816, Ss = 37817, Es = 37818, ys = 37819, Ts = 37820, As = 37821, ar = 36492, bs = 36494, ws = 36495, vo = 36283, Rs = 36284, Cs = 36285, Ps = 36286, Sl = 3200, El = 3201, xo = 0, yl = 1, cn = "", Ae = "srgb", oi = "srgb-linear", hr = "linear", qt = "srgb", Nn = 7680, na = 519, Tl = 512, Al = 513, bl = 514, Mo = 515, wl = 516, Rl = 517, Cl = 518, Pl = 519, ia = 35044, ra = "300 es", je = 2e3, lr = 2001; class li { addEventListener (t, e) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e) } hasEventListener (t, e) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[t] !== void 0 && n[t].indexOf(e) !== -1 } removeEventListener (t, e) { if (this._listeners === void 0) return; const r = this._listeners[t]; if (r !== void 0) { const s = r.indexOf(e); s !== -1 && r.splice(s, 1) } } dispatchEvent (t) { if (this._listeners === void 0) return; const n = this._listeners[t.type]; if (n !== void 0) { t.target = this; const r = n.slice(0); for (let s = 0, o = r.length; s < o; s++)r[s].call(this, t); t.target = null } } } const ue = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let sa = 1234567; const Si = Math.PI / 180, Ai = 180 / Math.PI; function ci () { const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (ue[i & 255] + ue[i >> 8 & 255] + ue[i >> 16 & 255] + ue[i >> 24 & 255] + "-" + ue[t & 255] + ue[t >> 8 & 255] + "-" + ue[t >> 16 & 15 | 64] + ue[t >> 24 & 255] + "-" + ue[e & 63 | 128] + ue[e >> 8 & 255] + "-" + ue[e >> 16 & 255] + ue[e >> 24 & 255] + ue[n & 255] + ue[n >> 8 & 255] + ue[n >> 16 & 255] + ue[n >> 24 & 255]).toLowerCase() } function pe (i, t, e) { return Math.max(t, Math.min(e, i)) } function zs (i, t) { return (i % t + t) % t } function Ll (i, t, e, n, r) { return n + (i - t) * (r - n) / (e - t) } function Dl (i, t, e) { return i !== t ? (e - i) / (t - i) : 0 } function Ei (i, t, e) { return (1 - e) * i + e * t } function Ul (i, t, e, n) { return Ei(i, t, 1 - Math.exp(-e * n)) } function Il (i, t = 1) { return t - Math.abs(zs(i, t * 2) - t) } function Nl (i, t, e) { return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i)) } function Fl (i, t, e) { return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10)) } function Ol (i, t) { return i + Math.floor(Math.random() * (t - i + 1)) } function Bl (i, t) { return i + Math.random() * (t - i) } function zl (i) { return i * (.5 - Math.random()) } function Hl (i) { i !== void 0 && (sa = i); let t = sa += 1831565813; return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296 } function Vl (i) { return i * Si } function Gl (i) { return i * Ai } function kl (i) { return (i & i - 1) === 0 && i !== 0 } function Wl (i) { return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2)) } function Xl (i) { return Math.pow(2, Math.floor(Math.log(i) / Math.LN2)) } function ql (i, t, e, n, r) { const s = Math.cos, o = Math.sin, a = s(e / 2), l = o(e / 2), c = s((t + n) / 2), u = o((t + n) / 2), d = s((t - n) / 2), f = o((t - n) / 2), m = s((n - t) / 2), v = o((n - t) / 2); switch (r) { case "XYX": i.set(a * u, l * d, l * f, a * c); break; case "YZY": i.set(l * f, a * u, l * d, a * c); break; case "ZXZ": i.set(l * d, l * f, a * u, a * c); break; case "XZX": i.set(a * u, l * v, l * m, a * c); break; case "YXY": i.set(l * m, a * u, l * v, a * c); break; case "ZYZ": i.set(l * v, l * m, a * u, a * c); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r) } } function $n (i, t) { switch (t.constructor) { case Float32Array: return i; case Uint32Array: return i / 4294967295; case Uint16Array: return i / 65535; case Uint8Array: return i / 255; case Int32Array: return Math.max(i / 2147483647, -1); case Int16Array: return Math.max(i / 32767, -1); case Int8Array: return Math.max(i / 127, -1); default: throw new Error("Invalid component type.") } } function de (i, t) { switch (t.constructor) { case Float32Array: return i; case Uint32Array: return Math.round(i * 4294967295); case Uint16Array: return Math.round(i * 65535); case Uint8Array: return Math.round(i * 255); case Int32Array: return Math.round(i * 2147483647); case Int16Array: return Math.round(i * 32767); case Int8Array: return Math.round(i * 127); default: throw new Error("Invalid component type.") } } const Fn = { DEG2RAD: Si, RAD2DEG: Ai, generateUUID: ci, clamp: pe, euclideanModulo: zs, mapLinear: Ll, inverseLerp: Dl, lerp: Ei, damp: Ul, pingpong: Il, smoothstep: Nl, smootherstep: Fl, randInt: Ol, randFloat: Bl, randFloatSpread: zl, seededRandom: Hl, degToRad: Vl, radToDeg: Gl, isPowerOfTwo: kl, ceilPowerOfTwo: Wl, floorPowerOfTwo: Xl, setQuaternionFromProperEuler: ql, normalize: de, denormalize: $n }; class Wt { constructor (t = 0, e = 0) { Wt.prototype.isVector2 = !0, this.x = t, this.y = e } get width () { return this.x } set width (t) { this.x = t } get height () { return this.y } set height (t) { this.y = t } set (t, e) { return this.x = t, this.y = e, this } setScalar (t) { return this.x = t, this.y = t, this } setX (t) { return this.x = t, this } setY (t) { return this.y = t, this } setComponent (t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent (t) { switch (t) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + t) } } clone () { return new this.constructor(this.x, this.y) } copy (t) { return this.x = t.x, this.y = t.y, this } add (t) { return this.x += t.x, this.y += t.y, this } addScalar (t) { return this.x += t, this.y += t, this } addVectors (t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this } addScaledVector (t, e) { return this.x += t.x * e, this.y += t.y * e, this } sub (t) { return this.x -= t.x, this.y -= t.y, this } subScalar (t) { return this.x -= t, this.y -= t, this } subVectors (t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this } multiply (t) { return this.x *= t.x, this.y *= t.y, this } multiplyScalar (t) { return this.x *= t, this.y *= t, this } divide (t) { return this.x /= t.x, this.y /= t.y, this } divideScalar (t) { return this.multiplyScalar(1 / t) } applyMatrix3 (t) { const e = this.x, n = this.y, r = t.elements; return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this } min (t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this } max (t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this } clamp (t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this } clampScalar (t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this } clampLength (t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero () { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate () { return this.x = -this.x, this.y = -this.y, this } dot (t) { return this.x * t.x + this.y * t.y } cross (t) { return this.x * t.y - this.y * t.x } lengthSq () { return this.x * this.x + this.y * this.y } length () { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength () { return Math.abs(this.x) + Math.abs(this.y) } normalize () { return this.divideScalar(this.length() || 1) } angle () { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo (t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0) return Math.PI / 2; const n = this.dot(t) / e; return Math.acos(pe(n, -1, 1)) } distanceTo (t) { return Math.sqrt(this.distanceToSquared(t)) } distanceToSquared (t) { const e = this.x - t.x, n = this.y - t.y; return e * e + n * n } manhattanDistanceTo (t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) } setLength (t) { return this.normalize().multiplyScalar(t) } lerp (t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this } lerpVectors (t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this } equals (t) { return t.x === this.x && t.y === this.y } fromArray (t, e = 0) { return this.x = t[e], this.y = t[e + 1], this } toArray (t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t } fromBufferAttribute (t, e) { return this.x = t.getX(e), this.y = t.getY(e), this } rotateAround (t, e) { const n = Math.cos(e), r = Math.sin(e), s = this.x - t.x, o = this.y - t.y; return this.x = s * n - o * r + t.x, this.y = s * r + o * n + t.y, this } random () { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator] () { yield this.x, yield this.y } } class Ct { constructor (t, e, n, r, s, o, a, l, c) { Ct.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, r, s, o, a, l, c) } set (t, e, n, r, s, o, a, l, c) { const u = this.elements; return u[0] = t, u[1] = r, u[2] = a, u[3] = e, u[4] = s, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this } identity () { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy (t) { const e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this } extractBasis (t, e, n) { return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4 (t) { const e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this } multiply (t) { return this.multiplyMatrices(this, t) } premultiply (t) { return this.multiplyMatrices(t, this) } multiplyMatrices (t, e) { const n = t.elements, r = e.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], d = n[7], f = n[2], m = n[5], v = n[8], M = r[0], p = r[3], h = r[6], A = r[1], T = r[4], E = r[7], B = r[2], C = r[5], b = r[8]; return s[0] = o * M + a * A + l * B, s[3] = o * p + a * T + l * C, s[6] = o * h + a * E + l * b, s[1] = c * M + u * A + d * B, s[4] = c * p + u * T + d * C, s[7] = c * h + u * E + d * b, s[2] = f * M + m * A + v * B, s[5] = f * p + m * T + v * C, s[8] = f * h + m * E + v * b, this } multiplyScalar (t) { const e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this } determinant () { const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], o = t[4], a = t[5], l = t[6], c = t[7], u = t[8]; return e * o * u - e * a * c - n * s * u + n * a * l + r * s * c - r * o * l } invert () { const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], o = t[4], a = t[5], l = t[6], c = t[7], u = t[8], d = u * o - a * c, f = a * l - u * s, m = c * s - o * l, v = e * d + n * f + r * m; if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const M = 1 / v; return t[0] = d * M, t[1] = (r * c - u * n) * M, t[2] = (a * n - r * o) * M, t[3] = f * M, t[4] = (u * e - r * l) * M, t[5] = (r * s - a * e) * M, t[6] = m * M, t[7] = (n * l - c * e) * M, t[8] = (o * e - n * s) * M, this } transpose () { let t; const e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this } getNormalMatrix (t) { return this.setFromMatrix4(t).invert().transpose() } transposeIntoArray (t) { const e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this } setUvTransform (t, e, n, r, s, o, a) { const l = Math.cos(s), c = Math.sin(s); return this.set(n * l, n * c, -n * (l * o + c * a) + o + t, -r * c, r * l, -r * (-c * o + l * a) + a + e, 0, 0, 1), this } scale (t, e) { return this.premultiply(_r.makeScale(t, e)), this } rotate (t) { return this.premultiply(_r.makeRotation(-t)), this } translate (t, e) { return this.premultiply(_r.makeTranslation(t, e)), this } makeTranslation (t, e) { return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this } makeRotation (t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this } makeScale (t, e) { return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this } equals (t) { const e = this.elements, n = t.elements; for (let r = 0; r < 9; r++)if (e[r] !== n[r]) return !1; return !0 } fromArray (t, e = 0) { for (let n = 0; n < 9; n++)this.elements[n] = t[n + e]; return this } toArray (t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t } clone () { return new this.constructor().fromArray(this.elements) } } const _r = new Ct; function So (i) { for (let t = i.length - 1; t >= 0; --t)if (i[t] >= 65535) return !0; return !1 } function bi (i) { return document.createElementNS("http://www.w3.org/1999/xhtml", i) } function Yl () { const i = bi("canvas"); return i.style.display = "block", i } const aa = {}; function vi (i) { i in aa || (aa[i] = !0, console.warn(i)) } function Zl (i, t, e) { return new Promise(function (n, r) { function s () { switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) { case i.WAIT_FAILED: r(); break; case i.TIMEOUT_EXPIRED: setTimeout(s, e); break; default: n() } } setTimeout(s, e) }) } function Kl (i) { const t = i.elements; t[2] = .5 * t[2] + .5 * t[3], t[6] = .5 * t[6] + .5 * t[7], t[10] = .5 * t[10] + .5 * t[11], t[14] = .5 * t[14] + .5 * t[15] } function $l (i) { const t = i.elements; t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1) } const zt = { enabled: !0, workingColorSpace: oi, spaces: {}, convert: function (i, t, e) { return this.enabled === !1 || t === e || !t || !e || (this.spaces[t].transfer === qt && (i.r = Je(i.r), i.g = Je(i.g), i.b = Je(i.b)), this.spaces[t].primaries !== this.spaces[e].primaries && (i.applyMatrix3(this.spaces[t].toXYZ), i.applyMatrix3(this.spaces[e].fromXYZ)), this.spaces[e].transfer === qt && (i.r = ti(i.r), i.g = ti(i.g), i.b = ti(i.b))), i }, fromWorkingColorSpace: function (i, t) { return this.convert(i, this.workingColorSpace, t) }, toWorkingColorSpace: function (i, t) { return this.convert(i, t, this.workingColorSpace) }, getPrimaries: function (i) { return this.spaces[i].primaries }, getTransfer: function (i) { return i === cn ? hr : this.spaces[i].transfer }, getLuminanceCoefficients: function (i, t = this.workingColorSpace) { return i.fromArray(this.spaces[t].luminanceCoefficients) }, define: function (i) { Object.assign(this.spaces, i) }, _getMatrix: function (i, t, e) { return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ) }, _getDrawingBufferColorSpace: function (i) { return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace }, _getUnpackColorSpace: function (i = this.workingColorSpace) { return this.spaces[i].workingColorSpaceConfig.unpackColorSpace } }; function Je (i) { return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4) } function ti (i) { return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055 } const oa = [.64, .33, .3, .6, .15, .06], la = [.2126, .7152, .0722], ca = [.3127, .329], ua = new Ct().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), ha = new Ct().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715); zt.define({ [oi]: { primaries: oa, whitePoint: ca, transfer: hr, toXYZ: ua, fromXYZ: ha, luminanceCoefficients: la, workingColorSpaceConfig: { unpackColorSpace: Ae }, outputColorSpaceConfig: { drawingBufferColorSpace: Ae } }, [Ae]: { primaries: oa, whitePoint: ca, transfer: qt, toXYZ: ua, fromXYZ: ha, luminanceCoefficients: la, outputColorSpaceConfig: { drawingBufferColorSpace: Ae } } }); let On; class jl { static getDataURL (t) { if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src; let e; if (t instanceof HTMLCanvasElement) e = t; else { On === void 0 && (On = bi("canvas")), On.width = t.width, On.height = t.height; const n = On.getContext("2d"); t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = On } return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png") } static sRGBToLinear (t) { if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) { const e = bi("canvas"); e.width = t.width, e.height = t.height; const n = e.getContext("2d"); n.drawImage(t, 0, 0, t.width, t.height); const r = n.getImageData(0, 0, t.width, t.height), s = r.data; for (let o = 0; o < s.length; o++)s[o] = Je(s[o] / 255) * 255; return n.putImageData(r, 0, 0), e } else if (t.data) { const e = t.data.slice(0); for (let n = 0; n < e.length; n++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Je(e[n] / 255) * 255) : e[n] = Je(e[n]); return { data: e, width: t.width, height: t.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t } } let Jl = 0; class Eo { constructor (t = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: Jl++ }), this.uuid = ci(), this.data = t, this.dataReady = !0, this.version = 0 } set needsUpdate (t) { t === !0 && this.version++ } toJSON (t) { const e = t === void 0 || typeof t == "string"; if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, r = this.data; if (r !== null) { let s; if (Array.isArray(r)) { s = []; for (let o = 0, a = r.length; o < a; o++)r[o].isDataTexture ? s.push(gr(r[o].image)) : s.push(gr(r[o])) } else s = gr(r); n.url = s } return e || (t.images[this.uuid] = n), n } } function gr (i) { return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? jl.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let Ql = 0; class me extends li { constructor (t = me.DEFAULT_IMAGE, e = me.DEFAULT_MAPPING, n = Rn, r = Rn, s = Oe, o = Cn, a = Ue, l = Qe, c = me.DEFAULT_ANISOTROPY, u = cn) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ql++ }), this.uuid = ci(), this.name = "", this.source = new Eo(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Wt(0, 0), this.repeat = new Wt(1, 1), this.center = new Wt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ct, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0 } get image () { return this.source.data } set image (t = null) { this.source.data = t } updateMatrix () { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone () { return new this.constructor().copy(this) } copy (t) { return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this } toJSON (t) { const e = t === void 0 || typeof t == "string"; if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid]; const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n } dispose () { this.dispatchEvent({ type: "dispose" }) } transformUv (t) { if (this.mapping !== oo) return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) { case yi: t.x = t.x - Math.floor(t.x); break; case Rn: t.x = t.x < 0 ? 0 : 1; break; case rs: Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x); break }if (t.y < 0 || t.y > 1) switch (this.wrapT) { case yi: t.y = t.y - Math.floor(t.y); break; case Rn: t.y = t.y < 0 ? 0 : 1; break; case rs: Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y); break }return this.flipY && (t.y = 1 - t.y), t } set needsUpdate (t) { t === !0 && (this.version++, this.source.needsUpdate = !0) } set needsPMREMUpdate (t) { t === !0 && this.pmremVersion++ } } me.DEFAULT_IMAGE = null; me.DEFAULT_MAPPING = oo; me.DEFAULT_ANISOTROPY = 1; class ee { constructor (t = 0, e = 0, n = 0, r = 1) { ee.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = r } get width () { return this.z } set width (t) { this.z = t } get height () { return this.w } set height (t) { this.w = t } set (t, e, n, r) { return this.x = t, this.y = e, this.z = n, this.w = r, this } setScalar (t) { return this.x = t, this.y = t, this.z = t, this.w = t, this } setX (t) { return this.x = t, this } setY (t) { return this.y = t, this } setZ (t) { return this.z = t, this } setW (t) { return this.w = t, this } setComponent (t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; case 2: this.z = e; break; case 3: this.w = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent (t) { switch (t) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + t) } } clone () { return new this.constructor(this.x, this.y, this.z, this.w) } copy (t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this } add (t) { return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this } addScalar (t) { return this.x += t, this.y += t, this.z += t, this.w += t, this } addVectors (t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this } addScaledVector (t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this } sub (t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this } subScalar (t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this } subVectors (t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this } multiply (t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this } multiplyScalar (t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this } applyMatrix4 (t) { const e = this.x, n = this.y, r = this.z, s = this.w, o = t.elements; return this.x = o[0] * e + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * e + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * e + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * e + o[7] * n + o[11] * r + o[15] * s, this } divide (t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this } divideScalar (t) { return this.multiplyScalar(1 / t) } setAxisAngleFromQuaternion (t) { this.w = 2 * Math.acos(t.w); const e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this } setAxisAngleFromRotationMatrix (t) { let e, n, r, s; const l = t.elements, c = l[0], u = l[4], d = l[8], f = l[1], m = l[5], v = l[9], M = l[2], p = l[6], h = l[10]; if (Math.abs(u - f) < .01 && Math.abs(d - M) < .01 && Math.abs(v - p) < .01) { if (Math.abs(u + f) < .1 && Math.abs(d + M) < .1 && Math.abs(v + p) < .1 && Math.abs(c + m + h - 3) < .1) return this.set(1, 0, 0, 0), this; e = Math.PI; const T = (c + 1) / 2, E = (m + 1) / 2, B = (h + 1) / 2, C = (u + f) / 4, b = (d + M) / 4, U = (v + p) / 4; return T > E && T > B ? T < .01 ? (n = 0, r = .707106781, s = .707106781) : (n = Math.sqrt(T), r = C / n, s = b / n) : E > B ? E < .01 ? (n = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(E), n = C / r, s = U / r) : B < .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(B), n = b / s, r = U / s), this.set(n, r, s, e), this } let A = Math.sqrt((p - v) * (p - v) + (d - M) * (d - M) + (f - u) * (f - u)); return Math.abs(A) < .001 && (A = 1), this.x = (p - v) / A, this.y = (d - M) / A, this.z = (f - u) / A, this.w = Math.acos((c + m + h - 1) / 2), this } setFromMatrixPosition (t) { const e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this } min (t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this } max (t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this } clamp (t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this } clampScalar (t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this } clampLength (t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero () { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate () { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot (t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w } lengthSq () { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength () { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize () { return this.divideScalar(this.length() || 1) } setLength (t) { return this.normalize().multiplyScalar(t) } lerp (t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this } lerpVectors (t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this } equals (t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w } fromArray (t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this } toArray (t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t } fromBufferAttribute (t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this } random () { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator] () { yield this.x, yield this.y, yield this.z, yield this.w } } class tc extends li { constructor (t = 1, e = 1, n = {}) { super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new ee(0, 0, t, e), this.scissorTest = !1, this.viewport = new ee(0, 0, t, e); const r = { width: t, height: e, depth: 1 }; n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: Oe, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1 }, n); const s = new me(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace); s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = []; const o = n.count; for (let a = 0; a < o; a++)this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = !0; this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples } get texture () { return this.textures[0] } set texture (t) { this.textures[0] = t } setSize (t, e, n = 1) { if (this.width !== t || this.height !== e || this.depth !== n) { this.width = t, this.height = e, this.depth = n; for (let r = 0, s = this.textures.length; r < s; r++)this.textures[r].image.width = t, this.textures[r].image.height = e, this.textures[r].image.depth = n; this.dispose() } this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e) } clone () { return new this.constructor().copy(this) } copy (t) { this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0; for (let n = 0, r = t.textures.length; n < r; n++)this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0; const e = Object.assign({}, t.texture.image); return this.texture.source = new Eo(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this } dispose () { this.dispatchEvent({ type: "dispose" }) } } class Dn extends tc { constructor (t = 1, e = 1, n = {}) { super(t, e, n), this.isWebGLRenderTarget = !0 } } class yo extends me { constructor (t = null, e = 1, n = 1, r = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Ie, this.minFilter = Ie, this.wrapR = Rn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set } addLayerUpdate (t) { this.layerUpdates.add(t) } clearLayerUpdates () { this.layerUpdates.clear() } } class ec extends me { constructor (t = null, e = 1, n = 1, r = 1) { super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Ie, this.minFilter = Ie, this.wrapR = Rn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class fn { constructor (t = 0, e = 0, n = 0, r = 1) { this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = r } static slerpFlat (t, e, n, r, s, o, a) { let l = n[r + 0], c = n[r + 1], u = n[r + 2], d = n[r + 3]; const f = s[o + 0], m = s[o + 1], v = s[o + 2], M = s[o + 3]; if (a === 0) { t[e + 0] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = d; return } if (a === 1) { t[e + 0] = f, t[e + 1] = m, t[e + 2] = v, t[e + 3] = M; return } if (d !== M || l !== f || c !== m || u !== v) { let p = 1 - a; const h = l * f + c * m + u * v + d * M, A = h >= 0 ? 1 : -1, T = 1 - h * h; if (T > Number.EPSILON) { const B = Math.sqrt(T), C = Math.atan2(B, h * A); p = Math.sin(p * C) / B, a = Math.sin(a * C) / B } const E = a * A; if (l = l * p + f * E, c = c * p + m * E, u = u * p + v * E, d = d * p + M * E, p === 1 - a) { const B = 1 / Math.sqrt(l * l + c * c + u * u + d * d); l *= B, c *= B, u *= B, d *= B } } t[e] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = d } static multiplyQuaternionsFlat (t, e, n, r, s, o) { const a = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], d = s[o], f = s[o + 1], m = s[o + 2], v = s[o + 3]; return t[e] = a * v + u * d + l * m - c * f, t[e + 1] = l * v + u * f + c * d - a * m, t[e + 2] = c * v + u * m + a * f - l * d, t[e + 3] = u * v - a * d - l * f - c * m, t } get x () { return this._x } set x (t) { this._x = t, this._onChangeCallback() } get y () { return this._y } set y (t) { this._y = t, this._onChangeCallback() } get z () { return this._z } set z (t) { this._z = t, this._onChangeCallback() } get w () { return this._w } set w (t) { this._w = t, this._onChangeCallback() } set (t, e, n, r) { return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this } clone () { return new this.constructor(this._x, this._y, this._z, this._w) } copy (t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this } setFromEuler (t, e = !0) { const n = t._x, r = t._y, s = t._z, o = t._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(r / 2), d = a(s / 2), f = l(n / 2), m = l(r / 2), v = l(s / 2); switch (o) { case "XYZ": this._x = f * u * d + c * m * v, this._y = c * m * d - f * u * v, this._z = c * u * v + f * m * d, this._w = c * u * d - f * m * v; break; case "YXZ": this._x = f * u * d + c * m * v, this._y = c * m * d - f * u * v, this._z = c * u * v - f * m * d, this._w = c * u * d + f * m * v; break; case "ZXY": this._x = f * u * d - c * m * v, this._y = c * m * d + f * u * v, this._z = c * u * v + f * m * d, this._w = c * u * d - f * m * v; break; case "ZYX": this._x = f * u * d - c * m * v, this._y = c * m * d + f * u * v, this._z = c * u * v - f * m * d, this._w = c * u * d + f * m * v; break; case "YZX": this._x = f * u * d + c * m * v, this._y = c * m * d + f * u * v, this._z = c * u * v - f * m * d, this._w = c * u * d - f * m * v; break; case "XZY": this._x = f * u * d - c * m * v, this._y = c * m * d - f * u * v, this._z = c * u * v + f * m * d, this._w = c * u * d + f * m * v; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) }return e === !0 && this._onChangeCallback(), this } setFromAxisAngle (t, e) { const n = e / 2, r = Math.sin(n); return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix (t) { const e = t.elements, n = e[0], r = e[4], s = e[8], o = e[1], a = e[5], l = e[9], c = e[2], u = e[6], d = e[10], f = n + a + d; if (f > 0) { const m = .5 / Math.sqrt(f + 1); this._w = .25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (o - r) * m } else if (n > a && n > d) { const m = 2 * Math.sqrt(1 + n - a - d); this._w = (u - l) / m, this._x = .25 * m, this._y = (r + o) / m, this._z = (s + c) / m } else if (a > d) { const m = 2 * Math.sqrt(1 + a - n - d); this._w = (s - c) / m, this._x = (r + o) / m, this._y = .25 * m, this._z = (l + u) / m } else { const m = 2 * Math.sqrt(1 + d - n - a); this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = .25 * m } return this._onChangeCallback(), this } setFromUnitVectors (t, e) { let n = t.dot(e) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize() } angleTo (t) { return 2 * Math.acos(Math.abs(pe(this.dot(t), -1, 1))) } rotateTowards (t, e) { const n = this.angleTo(t); if (n === 0) return this; const r = Math.min(1, e / n); return this.slerp(t, r), this } identity () { return this.set(0, 0, 0, 1) } invert () { return this.conjugate() } conjugate () { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot (t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w } lengthSq () { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length () { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize () { let t = this.length(); return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this } multiply (t) { return this.multiplyQuaternions(this, t) } premultiply (t) { return this.multiplyQuaternions(t, this) } multiplyQuaternions (t, e) { const n = t._x, r = t._y, s = t._z, o = t._w, a = e._x, l = e._y, c = e._z, u = e._w; return this._x = n * u + o * a + r * c - s * l, this._y = r * u + o * l + s * a - n * c, this._z = s * u + o * c + n * l - r * a, this._w = o * u - n * a - r * l - s * c, this._onChangeCallback(), this } slerp (t, e) { if (e === 0) return this; if (e === 1) return this.copy(t); const n = this._x, r = this._y, s = this._z, o = this._w; let a = o * t._w + n * t._x + r * t._y + s * t._z; if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = n, this._y = r, this._z = s, this; const l = 1 - a * a; if (l <= Number.EPSILON) { const m = 1 - e; return this._w = m * o + e * this._w, this._x = m * n + e * this._x, this._y = m * r + e * this._y, this._z = m * s + e * this._z, this.normalize(), this } const c = Math.sqrt(l), u = Math.atan2(c, a), d = Math.sin((1 - e) * u) / c, f = Math.sin(e * u) / c; return this._w = o * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this } slerpQuaternions (t, e, n) { return this.copy(t).slerp(e, n) } random () { const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n); return this.set(r * Math.sin(t), r * Math.cos(t), s * Math.sin(e), s * Math.cos(e)) } equals (t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w } fromArray (t, e = 0) { return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this } toArray (t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t } fromBufferAttribute (t, e) { return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this } toJSON () { return this.toArray() } _onChange (t) { return this._onChangeCallback = t, this } _onChangeCallback () { } *[Symbol.iterator] () { yield this._x, yield this._y, yield this._z, yield this._w } } class N { constructor (t = 0, e = 0, n = 0) { N.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n } set (t, e, n) { return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this } setScalar (t) { return this.x = t, this.y = t, this.z = t, this } setX (t) { return this.x = t, this } setY (t) { return this.y = t, this } setZ (t) { return this.z = t, this } setComponent (t, e) { switch (t) { case 0: this.x = e; break; case 1: this.y = e; break; case 2: this.z = e; break; default: throw new Error("index is out of range: " + t) }return this } getComponent (t) { switch (t) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + t) } } clone () { return new this.constructor(this.x, this.y, this.z) } copy (t) { return this.x = t.x, this.y = t.y, this.z = t.z, this } add (t) { return this.x += t.x, this.y += t.y, this.z += t.z, this } addScalar (t) { return this.x += t, this.y += t, this.z += t, this } addVectors (t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this } addScaledVector (t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this } sub (t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this } subScalar (t) { return this.x -= t, this.y -= t, this.z -= t, this } subVectors (t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this } multiply (t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this } multiplyScalar (t) { return this.x *= t, this.y *= t, this.z *= t, this } multiplyVectors (t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this } applyEuler (t) { return this.applyQuaternion(da.setFromEuler(t)) } applyAxisAngle (t, e) { return this.applyQuaternion(da.setFromAxisAngle(t, e)) } applyMatrix3 (t) { const e = this.x, n = this.y, r = this.z, s = t.elements; return this.x = s[0] * e + s[3] * n + s[6] * r, this.y = s[1] * e + s[4] * n + s[7] * r, this.z = s[2] * e + s[5] * n + s[8] * r, this } applyNormalMatrix (t) { return this.applyMatrix3(t).normalize() } applyMatrix4 (t) { const e = this.x, n = this.y, r = this.z, s = t.elements, o = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]); return this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * o, this } applyQuaternion (t) { const e = this.x, n = this.y, r = this.z, s = t.x, o = t.y, a = t.z, l = t.w, c = 2 * (o * r - a * n), u = 2 * (a * e - s * r), d = 2 * (s * n - o * e); return this.x = e + l * c + o * d - a * u, this.y = n + l * u + a * c - s * d, this.z = r + l * d + s * u - o * c, this } project (t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix) } unproject (t) { return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld) } transformDirection (t) { const e = this.x, n = this.y, r = this.z, s = t.elements; return this.x = s[0] * e + s[4] * n + s[8] * r, this.y = s[1] * e + s[5] * n + s[9] * r, this.z = s[2] * e + s[6] * n + s[10] * r, this.normalize() } divide (t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this } divideScalar (t) { return this.multiplyScalar(1 / t) } min (t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this } max (t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this } clamp (t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this } clampScalar (t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this } clampLength (t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) } floor () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero () { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate () { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot (t) { return this.x * t.x + this.y * t.y + this.z * t.z } lengthSq () { return this.x * this.x + this.y * this.y + this.z * this.z } length () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength () { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize () { return this.divideScalar(this.length() || 1) } setLength (t) { return this.normalize().multiplyScalar(t) } lerp (t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this } lerpVectors (t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this } cross (t) { return this.crossVectors(this, t) } crossVectors (t, e) { const n = t.x, r = t.y, s = t.z, o = e.x, a = e.y, l = e.z; return this.x = r * l - s * a, this.y = s * o - n * l, this.z = n * a - r * o, this } projectOnVector (t) { const e = t.lengthSq(); if (e === 0) return this.set(0, 0, 0); const n = t.dot(this) / e; return this.copy(t).multiplyScalar(n) } projectOnPlane (t) { return vr.copy(this).projectOnVector(t), this.sub(vr) } reflect (t) { return this.sub(vr.copy(t).multiplyScalar(2 * this.dot(t))) } angleTo (t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (e === 0) return Math.PI / 2; const n = this.dot(t) / e; return Math.acos(pe(n, -1, 1)) } distanceTo (t) { return Math.sqrt(this.distanceToSquared(t)) } distanceToSquared (t) { const e = this.x - t.x, n = this.y - t.y, r = this.z - t.z; return e * e + n * n + r * r } manhattanDistanceTo (t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z) } setFromSpherical (t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta) } setFromSphericalCoords (t, e, n) { const r = Math.sin(e) * t; return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this } setFromCylindrical (t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y) } setFromCylindricalCoords (t, e, n) { return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this } setFromMatrixPosition (t) { const e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this } setFromMatrixScale (t) { const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = n, this.z = r, this } setFromMatrixColumn (t, e) { return this.fromArray(t.elements, e * 4) } setFromMatrix3Column (t, e) { return this.fromArray(t.elements, e * 3) } setFromEuler (t) { return this.x = t._x, this.y = t._y, this.z = t._z, this } setFromColor (t) { return this.x = t.r, this.y = t.g, this.z = t.b, this } equals (t) { return t.x === this.x && t.y === this.y && t.z === this.z } fromArray (t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this } toArray (t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t } fromBufferAttribute (t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this } random () { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection () { const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e); return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this } *[Symbol.iterator] () { yield this.x, yield this.y, yield this.z } } const vr = new N, da = new fn; class Ri { constructor (t = new N(1 / 0, 1 / 0, 1 / 0), e = new N(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = t, this.max = e } set (t, e) { return this.min.copy(t), this.max.copy(e), this } setFromArray (t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e += 3)this.expandByPoint(Re.fromArray(t, e)); return this } setFromBufferAttribute (t) { this.makeEmpty(); for (let e = 0, n = t.count; e < n; e++)this.expandByPoint(Re.fromBufferAttribute(t, e)); return this } setFromPoints (t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]); return this } setFromCenterAndSize (t, e) { const n = Re.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this } setFromObject (t, e = !1) { return this.makeEmpty(), this.expandByObject(t, e) } clone () { return new this.constructor().copy(this) } copy (t) { return this.min.copy(t.min), this.max.copy(t.max), this } makeEmpty () { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty () { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter (t) { return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) } getSize (t) { return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min) } expandByPoint (t) { return this.min.min(t), this.max.max(t), this } expandByVector (t) { return this.min.sub(t), this.max.add(t), this } expandByScalar (t) { return this.min.addScalar(-t), this.max.addScalar(t), this } expandByObject (t, e = !1) { t.updateWorldMatrix(!1, !1); const n = t.geometry; if (n !== void 0) { const s = n.getAttribute("position"); if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0) for (let o = 0, a = s.count; o < a; o++)t.isMesh === !0 ? t.getVertexPosition(o, Re) : Re.fromBufferAttribute(s, o), Re.applyMatrix4(t.matrixWorld), this.expandByPoint(Re); else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Ii.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ii.copy(n.boundingBox)), Ii.applyMatrix4(t.matrixWorld), this.union(Ii) } const r = t.children; for (let s = 0, o = r.length; s < o; s++)this.expandByObject(r[s], e); return this } containsPoint (t) { return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z } containsBox (t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z } getParameter (t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox (t) { return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z } intersectsSphere (t) { return this.clampPoint(t.center, Re), Re.distanceToSquared(t.center) <= t.radius * t.radius } intersectsPlane (t) { let e, n; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant } intersectsTriangle (t) { if (this.isEmpty()) return !1; this.getCenter(pi), Ni.subVectors(this.max, pi), Bn.subVectors(t.a, pi), zn.subVectors(t.b, pi), Hn.subVectors(t.c, pi), nn.subVectors(zn, Bn), rn.subVectors(Hn, zn), _n.subVectors(Bn, Hn); let e = [0, -nn.z, nn.y, 0, -rn.z, rn.y, 0, -_n.z, _n.y, nn.z, 0, -nn.x, rn.z, 0, -rn.x, _n.z, 0, -_n.x, -nn.y, nn.x, 0, -rn.y, rn.x, 0, -_n.y, _n.x, 0]; return !xr(e, Bn, zn, Hn, Ni) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !xr(e, Bn, zn, Hn, Ni)) ? !1 : (Fi.crossVectors(nn, rn), e = [Fi.x, Fi.y, Fi.z], xr(e, Bn, zn, Hn, Ni)) } clampPoint (t, e) { return e.copy(t).clamp(this.min, this.max) } distanceToPoint (t) { return this.clampPoint(t, Re).distanceTo(t) } getBoundingSphere (t) { return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Re).length() * .5), t } intersect (t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this } union (t) { return this.min.min(t.min), this.max.max(t.max), this } applyMatrix4 (t) { return this.isEmpty() ? this : (Ge[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Ge[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Ge[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Ge[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Ge[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Ge[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Ge[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Ge[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Ge), this) } translate (t) { return this.min.add(t), this.max.add(t), this } equals (t) { return t.min.equals(this.min) && t.max.equals(this.max) } } const Ge = [new N, new N, new N, new N, new N, new N, new N, new N], Re = new N, Ii = new Ri, Bn = new N, zn = new N, Hn = new N, nn = new N, rn = new N, _n = new N, pi = new N, Ni = new N, Fi = new N, gn = new N; function xr (i, t, e, n, r) { for (let s = 0, o = i.length - 3; s <= o; s += 3) { gn.fromArray(i, s); const a = r.x * Math.abs(gn.x) + r.y * Math.abs(gn.y) + r.z * Math.abs(gn.z), l = t.dot(gn), c = e.dot(gn), u = n.dot(gn); if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1 } return !0 } const nc = new Ri, mi = new N, Mr = new N; class Hs { constructor (t = new N, e = -1) { this.isSphere = !0, this.center = t, this.radius = e } set (t, e) { return this.center.copy(t), this.radius = e, this } setFromPoints (t, e) { const n = this.center; e !== void 0 ? n.copy(e) : nc.setFromPoints(t).getCenter(n); let r = 0; for (let s = 0, o = t.length; s < o; s++)r = Math.max(r, n.distanceToSquared(t[s])); return this.radius = Math.sqrt(r), this } copy (t) { return this.center.copy(t.center), this.radius = t.radius, this } isEmpty () { return this.radius < 0 } makeEmpty () { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint (t) { return t.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint (t) { return t.distanceTo(this.center) - this.radius } intersectsSphere (t) { const e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e } intersectsBox (t) { return t.intersectsSphere(this) } intersectsPlane (t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius } clampPoint (t, e) { const n = this.center.distanceToSquared(t); return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e } getBoundingBox (t) { return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t) } applyMatrix4 (t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this } translate (t) { return this.center.add(t), this } expandByPoint (t) { if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this; mi.subVectors(t, this.center); const e = mi.lengthSq(); if (e > this.radius * this.radius) { const n = Math.sqrt(e), r = (n - this.radius) * .5; this.center.addScaledVector(mi, r / n), this.radius += r } return this } union (t) { return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Mr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(mi.copy(t.center).add(Mr)), this.expandByPoint(mi.copy(t.center).sub(Mr))), this) } equals (t) { return t.center.equals(this.center) && t.radius === this.radius } clone () { return new this.constructor().copy(this) } } const ke = new N, Sr = new N, Oi = new N, sn = new N, Er = new N, Bi = new N, yr = new N; class ic { constructor (t = new N, e = new N(0, 0, -1)) { this.origin = t, this.direction = e } set (t, e) { return this.origin.copy(t), this.direction.copy(e), this } copy (t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this } at (t, e) { return e.copy(this.origin).addScaledVector(this.direction, t) } lookAt (t) { return this.direction.copy(t).sub(this.origin).normalize(), this } recast (t) { return this.origin.copy(this.at(t, ke)), this } closestPointToPoint (t, e) { e.subVectors(t, this.origin); const n = e.dot(this.direction); return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint (t) { return Math.sqrt(this.distanceSqToPoint(t)) } distanceSqToPoint (t) { const e = ke.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (ke.copy(this.origin).addScaledVector(this.direction, e), ke.distanceToSquared(t)) } distanceSqToSegment (t, e, n, r) { Sr.copy(t).add(e).multiplyScalar(.5), Oi.copy(e).sub(t).normalize(), sn.copy(this.origin).sub(Sr); const s = t.distanceTo(e) * .5, o = -this.direction.dot(Oi), a = sn.dot(this.direction), l = -sn.dot(Oi), c = sn.lengthSq(), u = Math.abs(1 - o * o); let d, f, m, v; if (u > 0) if (d = o * l - a, f = o * a - l, v = s * u, d >= 0) if (f >= -v) if (f <= v) { const M = 1 / u; d *= M, f *= M, m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * l) + c } else f = s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c; else f = -s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c; else f <= -v ? (d = Math.max(0, -(-o * s + a)), f = d > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c) : f <= v ? (d = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (d = Math.max(0, -(o * s + a)), f = d > 0 ? s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c); else f = o > 0 ? -s : s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c; return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(Sr).addScaledVector(Oi, f), m } intersectSphere (t, e) { ke.subVectors(t.center, this.origin); const n = ke.dot(this.direction), r = ke.dot(ke) - n * n, s = t.radius * t.radius; if (r > s) return null; const o = Math.sqrt(s - r), a = n - o, l = n + o; return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e) } intersectsSphere (t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius } distanceToPlane (t) { const e = t.normal.dot(this.direction); if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(t.normal) + t.constant) / e; return n >= 0 ? n : null } intersectPlane (t, e) { const n = this.distanceToPlane(t); return n === null ? null : this.at(n, e) } intersectsPlane (t) { const e = t.distanceToPoint(this.origin); return e === 0 || t.normal.dot(this.direction) * e < 0 } intersectBox (t, e) { let n, r, s, o, a, l; const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin; return c >= 0 ? (n = (t.min.x - f.x) * c, r = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c, r = (t.min.x - f.x) * c), u >= 0 ? (s = (t.min.y - f.y) * u, o = (t.max.y - f.y) * u) : (s = (t.max.y - f.y) * u, o = (t.min.y - f.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), d >= 0 ? (a = (t.min.z - f.z) * d, l = (t.max.z - f.z) * d) : (a = (t.max.z - f.z) * d, l = (t.min.z - f.z) * d), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, e) } intersectsBox (t) { return this.intersectBox(t, ke) !== null } intersectTriangle (t, e, n, r, s) { Er.subVectors(e, t), Bi.subVectors(n, t), yr.crossVectors(Er, Bi); let o = this.direction.dot(yr), a; if (o > 0) { if (r) return null; a = 1 } else if (o < 0) a = -1, o = -o; else return null; sn.subVectors(this.origin, t); const l = a * this.direction.dot(Bi.crossVectors(sn, Bi)); if (l < 0) return null; const c = a * this.direction.dot(Er.cross(sn)); if (c < 0 || l + c > o) return null; const u = -a * sn.dot(yr); return u < 0 ? null : this.at(u / o, s) } applyMatrix4 (t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this } equals (t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction) } clone () { return new this.constructor().copy(this) } } class ne { constructor (t, e, n, r, s, o, a, l, c, u, d, f, m, v, M, p) { ne.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, r, s, o, a, l, c, u, d, f, m, v, M, p) } set (t, e, n, r, s, o, a, l, c, u, d, f, m, v, M, p) { const h = this.elements; return h[0] = t, h[4] = e, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = l, h[2] = c, h[6] = u, h[10] = d, h[14] = f, h[3] = m, h[7] = v, h[11] = M, h[15] = p, this } identity () { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone () { return new ne().fromArray(this.elements) } copy (t) { const e = this.elements, n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this } copyPosition (t) { const e = this.elements, n = t.elements; return e[12] = n[12], e[13] = n[13], e[14] = n[14], this } setFromMatrix3 (t) { const e = t.elements; return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this } extractBasis (t, e, n) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis (t, e, n) { return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this } extractRotation (t) { const e = this.elements, n = t.elements, r = 1 / Vn.setFromMatrixColumn(t, 0).length(), s = 1 / Vn.setFromMatrixColumn(t, 1).length(), o = 1 / Vn.setFromMatrixColumn(t, 2).length(); return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this } makeRotationFromEuler (t) { const e = this.elements, n = t.x, r = t.y, s = t.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), d = Math.sin(s); if (t.order === "XYZ") { const f = o * u, m = o * d, v = a * u, M = a * d; e[0] = l * u, e[4] = -l * d, e[8] = c, e[1] = m + v * c, e[5] = f - M * c, e[9] = -a * l, e[2] = M - f * c, e[6] = v + m * c, e[10] = o * l } else if (t.order === "YXZ") { const f = l * u, m = l * d, v = c * u, M = c * d; e[0] = f + M * a, e[4] = v * a - m, e[8] = o * c, e[1] = o * d, e[5] = o * u, e[9] = -a, e[2] = m * a - v, e[6] = M + f * a, e[10] = o * l } else if (t.order === "ZXY") { const f = l * u, m = l * d, v = c * u, M = c * d; e[0] = f - M * a, e[4] = -o * d, e[8] = v + m * a, e[1] = m + v * a, e[5] = o * u, e[9] = M - f * a, e[2] = -o * c, e[6] = a, e[10] = o * l } else if (t.order === "ZYX") { const f = o * u, m = o * d, v = a * u, M = a * d; e[0] = l * u, e[4] = v * c - m, e[8] = f * c + M, e[1] = l * d, e[5] = M * c + f, e[9] = m * c - v, e[2] = -c, e[6] = a * l, e[10] = o * l } else if (t.order === "YZX") { const f = o * l, m = o * c, v = a * l, M = a * c; e[0] = l * u, e[4] = M - f * d, e[8] = v * d + m, e[1] = d, e[5] = o * u, e[9] = -a * u, e[2] = -c * u, e[6] = m * d + v, e[10] = f - M * d } else if (t.order === "XZY") { const f = o * l, m = o * c, v = a * l, M = a * c; e[0] = l * u, e[4] = -d, e[8] = c * u, e[1] = f * d + M, e[5] = o * u, e[9] = m * d - v, e[2] = v * d - m, e[6] = a * u, e[10] = M * d + f } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this } makeRotationFromQuaternion (t) { return this.compose(rc, t, sc) } lookAt (t, e, n) { const r = this.elements; return xe.subVectors(t, e), xe.lengthSq() === 0 && (xe.z = 1), xe.normalize(), an.crossVectors(n, xe), an.lengthSq() === 0 && (Math.abs(n.z) === 1 ? xe.x += 1e-4 : xe.z += 1e-4, xe.normalize(), an.crossVectors(n, xe)), an.normalize(), zi.crossVectors(xe, an), r[0] = an.x, r[4] = zi.x, r[8] = xe.x, r[1] = an.y, r[5] = zi.y, r[9] = xe.y, r[2] = an.z, r[6] = zi.z, r[10] = xe.z, this } multiply (t) { return this.multiplyMatrices(this, t) } premultiply (t) { return this.multiplyMatrices(t, this) } multiplyMatrices (t, e) { const n = t.elements, r = e.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], d = n[5], f = n[9], m = n[13], v = n[2], M = n[6], p = n[10], h = n[14], A = n[3], T = n[7], E = n[11], B = n[15], C = r[0], b = r[4], U = r[8], S = r[12], x = r[1], w = r[5], k = r[9], z = r[13], Z = r[2], K = r[6], X = r[10], j = r[14], V = r[3], it = r[7], ct = r[11], xt = r[15]; return s[0] = o * C + a * x + l * Z + c * V, s[4] = o * b + a * w + l * K + c * it, s[8] = o * U + a * k + l * X + c * ct, s[12] = o * S + a * z + l * j + c * xt, s[1] = u * C + d * x + f * Z + m * V, s[5] = u * b + d * w + f * K + m * it, s[9] = u * U + d * k + f * X + m * ct, s[13] = u * S + d * z + f * j + m * xt, s[2] = v * C + M * x + p * Z + h * V, s[6] = v * b + M * w + p * K + h * it, s[10] = v * U + M * k + p * X + h * ct, s[14] = v * S + M * z + p * j + h * xt, s[3] = A * C + T * x + E * Z + B * V, s[7] = A * b + T * w + E * K + B * it, s[11] = A * U + T * k + E * X + B * ct, s[15] = A * S + T * z + E * j + B * xt, this } multiplyScalar (t) { const e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this } determinant () { const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], o = t[1], a = t[5], l = t[9], c = t[13], u = t[2], d = t[6], f = t[10], m = t[14], v = t[3], M = t[7], p = t[11], h = t[15]; return v * (+s * l * d - r * c * d - s * a * f + n * c * f + r * a * m - n * l * m) + M * (+e * l * m - e * c * f + s * o * f - r * o * m + r * c * u - s * l * u) + p * (+e * c * d - e * a * m - s * o * d + n * o * m + s * a * u - n * c * u) + h * (-r * a * u - e * l * d + e * a * f + r * o * d - n * o * f + n * l * u) } transpose () { const t = this.elements; let e; return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this } setPosition (t, e, n) { const r = this.elements; return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this } invert () { const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], o = t[4], a = t[5], l = t[6], c = t[7], u = t[8], d = t[9], f = t[10], m = t[11], v = t[12], M = t[13], p = t[14], h = t[15], A = d * p * c - M * f * c + M * l * m - a * p * m - d * l * h + a * f * h, T = v * f * c - u * p * c - v * l * m + o * p * m + u * l * h - o * f * h, E = u * M * c - v * d * c + v * a * m - o * M * m - u * a * h + o * d * h, B = v * d * l - u * M * l - v * a * f + o * M * f + u * a * p - o * d * p, C = e * A + n * T + r * E + s * B; if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const b = 1 / C; return t[0] = A * b, t[1] = (M * f * s - d * p * s - M * r * m + n * p * m + d * r * h - n * f * h) * b, t[2] = (a * p * s - M * l * s + M * r * c - n * p * c - a * r * h + n * l * h) * b, t[3] = (d * l * s - a * f * s - d * r * c + n * f * c + a * r * m - n * l * m) * b, t[4] = T * b, t[5] = (u * p * s - v * f * s + v * r * m - e * p * m - u * r * h + e * f * h) * b, t[6] = (v * l * s - o * p * s - v * r * c + e * p * c + o * r * h - e * l * h) * b, t[7] = (o * f * s - u * l * s + u * r * c - e * f * c - o * r * m + e * l * m) * b, t[8] = E * b, t[9] = (v * d * s - u * M * s - v * n * m + e * M * m + u * n * h - e * d * h) * b, t[10] = (o * M * s - v * a * s + v * n * c - e * M * c - o * n * h + e * a * h) * b, t[11] = (u * a * s - o * d * s - u * n * c + e * d * c + o * n * m - e * a * m) * b, t[12] = B * b, t[13] = (u * M * r - v * d * r + v * n * f - e * M * f - u * n * p + e * d * p) * b, t[14] = (v * a * r - o * M * r - v * n * l + e * M * l + o * n * p - e * a * p) * b, t[15] = (o * d * r - u * a * r + u * n * l - e * d * l - o * n * f + e * a * f) * b, this } scale (t) { const e = this.elements, n = t.x, r = t.y, s = t.z; return e[0] *= n, e[4] *= r, e[8] *= s, e[1] *= n, e[5] *= r, e[9] *= s, e[2] *= n, e[6] *= r, e[10] *= s, e[3] *= n, e[7] *= r, e[11] *= s, this } getMaxScaleOnAxis () { const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, n, r)) } makeTranslation (t, e, n) { return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX (t) { const e = Math.cos(t), n = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this } makeRotationY (t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this } makeRotationZ (t) { const e = Math.cos(t), n = Math.sin(t); return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis (t, e) { const n = Math.cos(e), r = Math.sin(e), s = 1 - n, o = t.x, a = t.y, l = t.z, c = s * o, u = s * a; return this.set(c * o + n, c * a - r * l, c * l + r * a, 0, c * a + r * l, u * a + n, u * l - r * o, 0, c * l - r * a, u * l + r * o, s * l * l + n, 0, 0, 0, 0, 1), this } makeScale (t, e, n) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear (t, e, n, r, s, o) { return this.set(1, n, s, 0, t, 1, o, 0, e, r, 1, 0, 0, 0, 0, 1), this } compose (t, e, n) { const r = this.elements, s = e._x, o = e._y, a = e._z, l = e._w, c = s + s, u = o + o, d = a + a, f = s * c, m = s * u, v = s * d, M = o * u, p = o * d, h = a * d, A = l * c, T = l * u, E = l * d, B = n.x, C = n.y, b = n.z; return r[0] = (1 - (M + h)) * B, r[1] = (m + E) * B, r[2] = (v - T) * B, r[3] = 0, r[4] = (m - E) * C, r[5] = (1 - (f + h)) * C, r[6] = (p + A) * C, r[7] = 0, r[8] = (v + T) * b, r[9] = (p - A) * b, r[10] = (1 - (f + M)) * b, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this } decompose (t, e, n) { const r = this.elements; let s = Vn.set(r[0], r[1], r[2]).length(); const o = Vn.set(r[4], r[5], r[6]).length(), a = Vn.set(r[8], r[9], r[10]).length(); this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], Ce.copy(this); const c = 1 / s, u = 1 / o, d = 1 / a; return Ce.elements[0] *= c, Ce.elements[1] *= c, Ce.elements[2] *= c, Ce.elements[4] *= u, Ce.elements[5] *= u, Ce.elements[6] *= u, Ce.elements[8] *= d, Ce.elements[9] *= d, Ce.elements[10] *= d, e.setFromRotationMatrix(Ce), n.x = s, n.y = o, n.z = a, this } makePerspective (t, e, n, r, s, o, a = je) { const l = this.elements, c = 2 * s / (e - t), u = 2 * s / (n - r), d = (e + t) / (e - t), f = (n + r) / (n - r); let m, v; if (a === je) m = -(o + s) / (o - s), v = -2 * o * s / (o - s); else if (a === lr) m = -o / (o - s), v = -o * s / (o - s); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a); return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this } makeOrthographic (t, e, n, r, s, o, a = je) { const l = this.elements, c = 1 / (e - t), u = 1 / (n - r), d = 1 / (o - s), f = (e + t) * c, m = (n + r) * u; let v, M; if (a === je) v = (o + s) * d, M = -2 * d; else if (a === lr) v = s * d, M = -1 * d; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a); return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = M, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this } equals (t) { const e = this.elements, n = t.elements; for (let r = 0; r < 16; r++)if (e[r] !== n[r]) return !1; return !0 } fromArray (t, e = 0) { for (let n = 0; n < 16; n++)this.elements[n] = t[n + e]; return this } toArray (t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t } } const Vn = new N, Ce = new ne, rc = new N(0, 0, 0), sc = new N(1, 1, 1), an = new N, zi = new N, xe = new N, fa = new ne, pa = new fn; class Se { constructor (t = 0, e = 0, n = 0, r = Se.DEFAULT_ORDER) { this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = r } get x () { return this._x } set x (t) { this._x = t, this._onChangeCallback() } get y () { return this._y } set y (t) { this._y = t, this._onChangeCallback() } get z () { return this._z } set z (t) { this._z = t, this._onChangeCallback() } get order () { return this._order } set order (t) { this._order = t, this._onChangeCallback() } set (t, e, n, r = this._order) { return this._x = t, this._y = e, this._z = n, this._order = r, this._onChangeCallback(), this } clone () { return new this.constructor(this._x, this._y, this._z, this._order) } copy (t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this } setFromRotationMatrix (t, e = this._order, n = !0) { const r = t.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], u = r[9], d = r[2], f = r[6], m = r[10]; switch (e) { case "XYZ": this._y = Math.asin(pe(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0); break; case "YXZ": this._x = Math.asin(-pe(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0); break; case "ZXY": this._x = Math.asin(pe(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s)); break; case "ZYX": this._y = Math.asin(-pe(d, -1, 1)), Math.abs(d) < .9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c)); break; case "YZX": this._z = Math.asin(pe(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(a, m)); break; case "XZY": this._z = Math.asin(-pe(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e) }return this._order = e, n === !0 && this._onChangeCallback(), this } setFromQuaternion (t, e, n) { return fa.makeRotationFromQuaternion(t), this.setFromRotationMatrix(fa, e, n) } setFromVector3 (t, e = this._order) { return this.set(t.x, t.y, t.z, e) } reorder (t) { return pa.setFromEuler(this), this.setFromQuaternion(pa, t) } equals (t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order } fromArray (t) { return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this } toArray (t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t } _onChange (t) { return this._onChangeCallback = t, this } _onChangeCallback () { } *[Symbol.iterator] () { yield this._x, yield this._y, yield this._z, yield this._order } } Se.DEFAULT_ORDER = "XYZ"; class To { constructor () { this.mask = 1 } set (t) { this.mask = (1 << t | 0) >>> 0 } enable (t) { this.mask |= 1 << t | 0 } enableAll () { this.mask = -1 } toggle (t) { this.mask ^= 1 << t | 0 } disable (t) { this.mask &= ~(1 << t | 0) } disableAll () { this.mask = 0 } test (t) { return (this.mask & t.mask) !== 0 } isEnabled (t) { return (this.mask & (1 << t | 0)) !== 0 } } let ac = 0; const ma = new N, Gn = new fn, We = new ne, Hi = new N, _i = new N, oc = new N, lc = new fn, _a = new N(1, 0, 0), ga = new N(0, 1, 0), va = new N(0, 0, 1), xa = { type: "added" }, cc = { type: "removed" }, kn = { type: "childadded", child: null }, Tr = { type: "childremoved", child: null }; class le extends li { constructor () { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ac++ }), this.uuid = ci(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = le.DEFAULT_UP.clone(); const t = new N, e = new Se, n = new fn, r = new N(1, 1, 1); function s () { n.setFromEuler(e, !1) } function o () { e.setFromQuaternion(n, void 0, !1) } e._onChange(s), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: r }, modelViewMatrix: { value: new ne }, normalMatrix: { value: new Ct } }), this.matrix = new ne, this.matrixWorld = new ne, this.matrixAutoUpdate = le.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new To, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow () { } onAfterShadow () { } onBeforeRender () { } onAfterRender () { } applyMatrix4 (t) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion (t) { return this.quaternion.premultiply(t), this } setRotationFromAxisAngle (t, e) { this.quaternion.setFromAxisAngle(t, e) } setRotationFromEuler (t) { this.quaternion.setFromEuler(t, !0) } setRotationFromMatrix (t) { this.quaternion.setFromRotationMatrix(t) } setRotationFromQuaternion (t) { this.quaternion.copy(t) } rotateOnAxis (t, e) { return Gn.setFromAxisAngle(t, e), this.quaternion.multiply(Gn), this } rotateOnWorldAxis (t, e) { return Gn.setFromAxisAngle(t, e), this.quaternion.premultiply(Gn), this } rotateX (t) { return this.rotateOnAxis(_a, t) } rotateY (t) { return this.rotateOnAxis(ga, t) } rotateZ (t) { return this.rotateOnAxis(va, t) } translateOnAxis (t, e) { return ma.copy(t).applyQuaternion(this.quaternion), this.position.add(ma.multiplyScalar(e)), this } translateX (t) { return this.translateOnAxis(_a, t) } translateY (t) { return this.translateOnAxis(ga, t) } translateZ (t) { return this.translateOnAxis(va, t) } localToWorld (t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld) } worldToLocal (t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(We.copy(this.matrixWorld).invert()) } lookAt (t, e, n) { t.isVector3 ? Hi.copy(t) : Hi.set(t, e, n); const r = this.parent; this.updateWorldMatrix(!0, !1), _i.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? We.lookAt(_i, Hi, this.up) : We.lookAt(Hi, _i, this.up), this.quaternion.setFromRotationMatrix(We), r && (We.extractRotation(r.matrixWorld), Gn.setFromRotationMatrix(We), this.quaternion.premultiply(Gn.invert())) } add (t) { if (arguments.length > 1) { for (let e = 0; e < arguments.length; e++)this.add(arguments[e]); return this } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(xa), kn.child = t, this.dispatchEvent(kn), kn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this) } remove (t) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const e = this.children.indexOf(t); return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(cc), Tr.child = t, this.dispatchEvent(Tr), Tr.child = null), this } removeFromParent () { const t = this.parent; return t !== null && t.remove(this), this } clear () { return this.remove(...this.children) } attach (t) { return this.updateWorldMatrix(!0, !1), We.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), We.multiply(t.parent.matrixWorld)), t.applyMatrix4(We), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(xa), kn.child = t, this.dispatchEvent(kn), kn.child = null, this } getObjectById (t) { return this.getObjectByProperty("id", t) } getObjectByName (t) { return this.getObjectByProperty("name", t) } getObjectByProperty (t, e) { if (this[t] === e) return this; for (let n = 0, r = this.children.length; n < r; n++) { const o = this.children[n].getObjectByProperty(t, e); if (o !== void 0) return o } } getObjectsByProperty (t, e, n = []) { this[t] === e && n.push(this); const r = this.children; for (let s = 0, o = r.length; s < o; s++)r[s].getObjectsByProperty(t, e, n); return n } getWorldPosition (t) { return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion (t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_i, t, oc), t } getWorldScale (t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_i, lc, t), t } getWorldDirection (t) { this.updateWorldMatrix(!0, !1); const e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize() } raycast () { } traverse (t) { t(this); const e = this.children; for (let n = 0, r = e.length; n < r; n++)e[n].traverse(t) } traverseVisible (t) { if (this.visible === !1) return; t(this); const e = this.children; for (let n = 0, r = e.length; n < r; n++)e[n].traverseVisible(t) } traverseAncestors (t) { const e = this.parent; e !== null && (t(e), e.traverseAncestors(t)) } updateMatrix () { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld (t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0); const e = this.children; for (let n = 0, r = e.length; n < r; n++)e[n].updateMatrixWorld(t) } updateWorldMatrix (t, e) { const n = this.parent; if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) { const r = this.children; for (let s = 0, o = r.length; s < o; s++)r[s].updateWorldMatrix(!1, !0) } } toJSON (t) { const e = t === void 0 || typeof t == "string", n = {}; e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); const r = {}; r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map(a => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = { center: r.boundingSphere.center.toArray(), radius: r.boundingSphere.radius }), this.boundingBox !== null && (r.boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() })); function s (a, l) { return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)), l.uuid } if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid); else if (this.isMesh || this.isLine || this.isPoints) { r.geometry = s(t.geometries, this.geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { const l = a.shapes; if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) { const d = l[c]; s(t.shapes, d) } else s(t.shapes, l) } } if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const a = []; for (let l = 0, c = this.material.length; l < c; l++)a.push(s(t.materials, this.material[l])); r.material = a } else r.material = s(t.materials, this.material); if (this.children.length > 0) { r.children = []; for (let a = 0; a < this.children.length; a++)r.children.push(this.children[a].toJSON(t).object) } if (this.animations.length > 0) { r.animations = []; for (let a = 0; a < this.animations.length; a++) { const l = this.animations[a]; r.animations.push(s(t.animations, l)) } } if (e) { const a = o(t.geometries), l = o(t.materials), c = o(t.textures), u = o(t.images), d = o(t.shapes), f = o(t.skeletons), m = o(t.animations), v = o(t.nodes); a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), v.length > 0 && (n.nodes = v) } return n.object = r, n; function o (a) { const l = []; for (const c in a) { const u = a[c]; delete u.metadata, l.push(u) } return l } } clone (t) { return new this.constructor().copy(this, t) } copy (t, e = !0) { if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0) for (let n = 0; n < t.children.length; n++) { const r = t.children[n]; this.add(r.clone()) } return this } } le.DEFAULT_UP = new N(0, 1, 0); le.DEFAULT_MATRIX_AUTO_UPDATE = !0; le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const Pe = new N, Xe = new N, Ar = new N, qe = new N, Wn = new N, Xn = new N, Ma = new N, br = new N, wr = new N, Rr = new N, Cr = new ee, Pr = new ee, Lr = new ee; class De { constructor (t = new N, e = new N, n = new N) { this.a = t, this.b = e, this.c = n } static getNormal (t, e, n, r) { r.subVectors(n, e), Pe.subVectors(t, e), r.cross(Pe); const s = r.lengthSq(); return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0) } static getBarycoord (t, e, n, r, s) { Pe.subVectors(r, e), Xe.subVectors(n, e), Ar.subVectors(t, e); const o = Pe.dot(Pe), a = Pe.dot(Xe), l = Pe.dot(Ar), c = Xe.dot(Xe), u = Xe.dot(Ar), d = o * c - a * a; if (d === 0) return s.set(0, 0, 0), null; const f = 1 / d, m = (c * l - a * u) * f, v = (o * u - a * l) * f; return s.set(1 - m - v, v, m) } static containsPoint (t, e, n, r) { return this.getBarycoord(t, e, n, r, qe) === null ? !1 : qe.x >= 0 && qe.y >= 0 && qe.x + qe.y <= 1 } static getInterpolation (t, e, n, r, s, o, a, l) { return this.getBarycoord(t, e, n, r, qe) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, qe.x), l.addScaledVector(o, qe.y), l.addScaledVector(a, qe.z), l) } static getInterpolatedAttribute (t, e, n, r, s, o) { return Cr.setScalar(0), Pr.setScalar(0), Lr.setScalar(0), Cr.fromBufferAttribute(t, e), Pr.fromBufferAttribute(t, n), Lr.fromBufferAttribute(t, r), o.setScalar(0), o.addScaledVector(Cr, s.x), o.addScaledVector(Pr, s.y), o.addScaledVector(Lr, s.z), o } static isFrontFacing (t, e, n, r) { return Pe.subVectors(n, e), Xe.subVectors(t, e), Pe.cross(Xe).dot(r) < 0 } set (t, e, n) { return this.a.copy(t), this.b.copy(e), this.c.copy(n), this } setFromPointsAndIndices (t, e, n, r) { return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this } setFromAttributeAndIndices (t, e, n, r) { return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this } clone () { return new this.constructor().copy(this) } copy (t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this } getArea () { return Pe.subVectors(this.c, this.b), Xe.subVectors(this.a, this.b), Pe.cross(Xe).length() * .5 } getMidpoint (t) { return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal (t) { return De.getNormal(this.a, this.b, this.c, t) } getPlane (t) { return t.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord (t, e) { return De.getBarycoord(t, this.a, this.b, this.c, e) } getInterpolation (t, e, n, r, s) { return De.getInterpolation(t, this.a, this.b, this.c, e, n, r, s) } containsPoint (t) { return De.containsPoint(t, this.a, this.b, this.c) } isFrontFacing (t) { return De.isFrontFacing(this.a, this.b, this.c, t) } intersectsBox (t) { return t.intersectsTriangle(this) } closestPointToPoint (t, e) { const n = this.a, r = this.b, s = this.c; let o, a; Wn.subVectors(r, n), Xn.subVectors(s, n), br.subVectors(t, n); const l = Wn.dot(br), c = Xn.dot(br); if (l <= 0 && c <= 0) return e.copy(n); wr.subVectors(t, r); const u = Wn.dot(wr), d = Xn.dot(wr); if (u >= 0 && d <= u) return e.copy(r); const f = l * d - u * c; if (f <= 0 && l >= 0 && u <= 0) return o = l / (l - u), e.copy(n).addScaledVector(Wn, o); Rr.subVectors(t, s); const m = Wn.dot(Rr), v = Xn.dot(Rr); if (v >= 0 && m <= v) return e.copy(s); const M = m * c - l * v; if (M <= 0 && c >= 0 && v <= 0) return a = c / (c - v), e.copy(n).addScaledVector(Xn, a); const p = u * v - m * d; if (p <= 0 && d - u >= 0 && m - v >= 0) return Ma.subVectors(s, r), a = (d - u) / (d - u + (m - v)), e.copy(r).addScaledVector(Ma, a); const h = 1 / (p + M + f); return o = M * h, a = f * h, e.copy(n).addScaledVector(Wn, o).addScaledVector(Xn, a) } equals (t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c) } } const Ao = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, on = { h: 0, s: 0, l: 0 }, Vi = { h: 0, s: 0, l: 0 }; function Dr (i, t, e) { return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i } class Vt { constructor (t, e, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n) } set (t, e, n) { if (e === void 0 && n === void 0) { const r = t; r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r) } else this.setRGB(t, e, n); return this } setScalar (t) { return this.r = t, this.g = t, this.b = t, this } setHex (t, e = Ae) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, zt.toWorkingColorSpace(this, e), this } setRGB (t, e, n, r = zt.workingColorSpace) { return this.r = t, this.g = e, this.b = n, zt.toWorkingColorSpace(this, r), this } setHSL (t, e, n, r = zt.workingColorSpace) { if (t = zs(t, 1), e = pe(e, 0, 1), n = pe(n, 0, 1), e === 0) this.r = this.g = this.b = n; else { const s = n <= .5 ? n * (1 + e) : n + e - n * e, o = 2 * n - s; this.r = Dr(o, s, t + 1 / 3), this.g = Dr(o, s, t), this.b = Dr(o, s, t - 1 / 3) } return zt.toWorkingColorSpace(this, r), this } setStyle (t, e = Ae) { function n (s) { s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.") } let r; if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) { let s; const o = r[1], a = r[2]; switch (o) { case "rgb": case "rgba": if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e); if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e); break; case "hsl": case "hsla": if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e); break; default: console.warn("THREE.Color: Unknown color model " + t) } } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) { const s = r[1], o = s.length; if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e); if (o === 6) return this.setHex(parseInt(s, 16), e); console.warn("THREE.Color: Invalid hex color " + t) } else if (t && t.length > 0) return this.setColorName(t, e); return this } setColorName (t, e = Ae) { const n = Ao[t.toLowerCase()]; return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this } clone () { return new this.constructor(this.r, this.g, this.b) } copy (t) { return this.r = t.r, this.g = t.g, this.b = t.b, this } copySRGBToLinear (t) { return this.r = Je(t.r), this.g = Je(t.g), this.b = Je(t.b), this } copyLinearToSRGB (t) { return this.r = ti(t.r), this.g = ti(t.g), this.b = ti(t.b), this } convertSRGBToLinear () { return this.copySRGBToLinear(this), this } convertLinearToSRGB () { return this.copyLinearToSRGB(this), this } getHex (t = Ae) { return zt.fromWorkingColorSpace(he.copy(this), t), Math.round(pe(he.r * 255, 0, 255)) * 65536 + Math.round(pe(he.g * 255, 0, 255)) * 256 + Math.round(pe(he.b * 255, 0, 255)) } getHexString (t = Ae) { return ("000000" + this.getHex(t).toString(16)).slice(-6) } getHSL (t, e = zt.workingColorSpace) { zt.fromWorkingColorSpace(he.copy(this), e); const n = he.r, r = he.g, s = he.b, o = Math.max(n, r, s), a = Math.min(n, r, s); let l, c; const u = (a + o) / 2; if (a === o) l = 0, c = 0; else { const d = o - a; switch (c = u <= .5 ? d / (o + a) : d / (2 - o - a), o) { case n: l = (r - s) / d + (r < s ? 6 : 0); break; case r: l = (s - n) / d + 2; break; case s: l = (n - r) / d + 4; break }l /= 6 } return t.h = l, t.s = c, t.l = u, t } getRGB (t, e = zt.workingColorSpace) { return zt.fromWorkingColorSpace(he.copy(this), e), t.r = he.r, t.g = he.g, t.b = he.b, t } getStyle (t = Ae) { zt.fromWorkingColorSpace(he.copy(this), t); const e = he.r, n = he.g, r = he.b; return t !== Ae ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` } offsetHSL (t, e, n) { return this.getHSL(on), this.setHSL(on.h + t, on.s + e, on.l + n) } add (t) { return this.r += t.r, this.g += t.g, this.b += t.b, this } addColors (t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this } addScalar (t) { return this.r += t, this.g += t, this.b += t, this } sub (t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this } multiply (t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this } multiplyScalar (t) { return this.r *= t, this.g *= t, this.b *= t, this } lerp (t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this } lerpColors (t, e, n) { return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this } lerpHSL (t, e) { this.getHSL(on), t.getHSL(Vi); const n = Ei(on.h, Vi.h, e), r = Ei(on.s, Vi.s, e), s = Ei(on.l, Vi.l, e); return this.setHSL(n, r, s), this } setFromVector3 (t) { return this.r = t.x, this.g = t.y, this.b = t.z, this } applyMatrix3 (t) { const e = this.r, n = this.g, r = this.b, s = t.elements; return this.r = s[0] * e + s[3] * n + s[6] * r, this.g = s[1] * e + s[4] * n + s[7] * r, this.b = s[2] * e + s[5] * n + s[8] * r, this } equals (t) { return t.r === this.r && t.g === this.g && t.b === this.b } fromArray (t, e = 0) { return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this } toArray (t = [], e = 0) { return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t } fromBufferAttribute (t, e) { return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this } toJSON () { return this.getHex() } *[Symbol.iterator] () { yield this.r, yield this.g, yield this.b } } const he = new Vt; Vt.NAMES = Ao; let uc = 0; class Ci extends li { static get type () { return "Material" } get type () { return this.constructor.type } set type (t) { } constructor () { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: uc++ }), this.uuid = ci(), this.name = "", this.blending = Jn, this.side = dn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Yr, this.blendDst = Zr, this.blendEquation = bn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Vt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ei, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = na, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Nn, this.stencilZFail = Nn, this.stencilZPass = Nn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest () { return this._alphaTest } set alphaTest (t) { this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t } onBeforeRender () { } onBeforeCompile () { } customProgramCacheKey () { return this.onBeforeCompile.toString() } setValues (t) { if (t !== void 0) for (const e in t) { const n = t[e]; if (n === void 0) { console.warn(`THREE.Material: parameter '${e}' has value of undefined.`); continue } const r = this[e]; if (r === void 0) { console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`); continue } r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n } } toJSON (t) { const e = t === void 0 || typeof t == "string"; e && (t = { textures: {}, images: {} }); const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Jn && (n.blending = this.blending), this.side !== dn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Yr && (n.blendSrc = this.blendSrc), this.blendDst !== Zr && (n.blendDst = this.blendDst), this.blendEquation !== bn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ei && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== na && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Nn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Nn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Nn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function r (s) { const o = []; for (const a in s) { const l = s[a]; delete l.metadata, o.push(l) } return o } if (e) { const s = r(t.textures), o = r(t.images); s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o) } return n } clone () { return new this.constructor().copy(this) } copy (t) { this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite; const e = t.clippingPlanes; let n = null; if (e !== null) { const r = e.length; n = new Array(r); for (let s = 0; s !== r; ++s)n[s] = e[s].clone() } return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this } dispose () { this.dispatchEvent({ type: "dispose" }) } set needsUpdate (t) { t === !0 && this.version++ } onBuild () { console.warn("Material: onBuild() has been removed.") } } class bo extends Ci { static get type () { return "MeshBasicMaterial" } constructor (t) { super(), this.isMeshBasicMaterial = !0, this.color = new Vt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Se, this.combine = ao, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t) } copy (t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this } } const re = new N, Gi = new Wt; class ze { constructor (t, e, n = !1) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = ia, this.updateRanges = [], this.gpuType = $e, this.version = 0 } onUploadCallback () { } set needsUpdate (t) { t === !0 && this.version++ } setUsage (t) { return this.usage = t, this } addUpdateRange (t, e) { this.updateRanges.push({ start: t, count: e }) } clearUpdateRanges () { this.updateRanges.length = 0 } copy (t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this } copyAt (t, e, n) { t *= this.itemSize, n *= e.itemSize; for (let r = 0, s = this.itemSize; r < s; r++)this.array[t + r] = e.array[n + r]; return this } copyArray (t) { return this.array.set(t), this } applyMatrix3 (t) { if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++)Gi.fromBufferAttribute(this, e), Gi.applyMatrix3(t), this.setXY(e, Gi.x, Gi.y); else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++)re.fromBufferAttribute(this, e), re.applyMatrix3(t), this.setXYZ(e, re.x, re.y, re.z); return this } applyMatrix4 (t) { for (let e = 0, n = this.count; e < n; e++)re.fromBufferAttribute(this, e), re.applyMatrix4(t), this.setXYZ(e, re.x, re.y, re.z); return this } applyNormalMatrix (t) { for (let e = 0, n = this.count; e < n; e++)re.fromBufferAttribute(this, e), re.applyNormalMatrix(t), this.setXYZ(e, re.x, re.y, re.z); return this } transformDirection (t) { for (let e = 0, n = this.count; e < n; e++)re.fromBufferAttribute(this, e), re.transformDirection(t), this.setXYZ(e, re.x, re.y, re.z); return this } set (t, e = 0) { return this.array.set(t, e), this } getComponent (t, e) { let n = this.array[t * this.itemSize + e]; return this.normalized && (n = $n(n, this.array)), n } setComponent (t, e, n) { return this.normalized && (n = de(n, this.array)), this.array[t * this.itemSize + e] = n, this } getX (t) { let e = this.array[t * this.itemSize]; return this.normalized && (e = $n(e, this.array)), e } setX (t, e) { return this.normalized && (e = de(e, this.array)), this.array[t * this.itemSize] = e, this } getY (t) { let e = this.array[t * this.itemSize + 1]; return this.normalized && (e = $n(e, this.array)), e } setY (t, e) { return this.normalized && (e = de(e, this.array)), this.array[t * this.itemSize + 1] = e, this } getZ (t) { let e = this.array[t * this.itemSize + 2]; return this.normalized && (e = $n(e, this.array)), e } setZ (t, e) { return this.normalized && (e = de(e, this.array)), this.array[t * this.itemSize + 2] = e, this } getW (t) { let e = this.array[t * this.itemSize + 3]; return this.normalized && (e = $n(e, this.array)), e } setW (t, e) { return this.normalized && (e = de(e, this.array)), this.array[t * this.itemSize + 3] = e, this } setXY (t, e, n) { return t *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this } setXYZ (t, e, n, r) { return t *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array), r = de(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this } setXYZW (t, e, n, r, s) { return t *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array), r = de(r, this.array), s = de(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this } onUpload (t) { return this.onUploadCallback = t, this } clone () { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON () { const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (t.name = this.name), this.usage !== ia && (t.usage = this.usage), t } } class wo extends ze { constructor (t, e, n) { super(new Uint16Array(t), e, n) } } class Ro extends ze { constructor (t, e, n) { super(new Uint32Array(t), e, n) } } class Pn extends ze { constructor (t, e, n) { super(new Float32Array(t), e, n) } } let hc = 0; const Te = new ne, Ur = new le, qn = new N, Me = new Ri, gi = new Ri, oe = new N; class Un extends li { constructor () { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: hc++ }), this.uuid = ci(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex () { return this.index } setIndex (t) { return Array.isArray(t) ? this.index = new (So(t) ? Ro : wo)(t, 1) : this.index = t, this } setIndirect (t) { return this.indirect = t, this } getIndirect () { return this.indirect } getAttribute (t) { return this.attributes[t] } setAttribute (t, e) { return this.attributes[t] = e, this } deleteAttribute (t) { return delete this.attributes[t], this } hasAttribute (t) { return this.attributes[t] !== void 0 } addGroup (t, e, n = 0) { this.groups.push({ start: t, count: e, materialIndex: n }) } clearGroups () { this.groups = [] } setDrawRange (t, e) { this.drawRange.start = t, this.drawRange.count = e } applyMatrix4 (t) { const e = this.attributes.position; e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const s = new Ct().getNormalMatrix(t); n.applyNormalMatrix(s), n.needsUpdate = !0 } const r = this.attributes.tangent; return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion (t) { return Te.makeRotationFromQuaternion(t), this.applyMatrix4(Te), this } rotateX (t) { return Te.makeRotationX(t), this.applyMatrix4(Te), this } rotateY (t) { return Te.makeRotationY(t), this.applyMatrix4(Te), this } rotateZ (t) { return Te.makeRotationZ(t), this.applyMatrix4(Te), this } translate (t, e, n) { return Te.makeTranslation(t, e, n), this.applyMatrix4(Te), this } scale (t, e, n) { return Te.makeScale(t, e, n), this.applyMatrix4(Te), this } lookAt (t) { return Ur.lookAt(t), Ur.updateMatrix(), this.applyMatrix4(Ur.matrix), this } center () { return this.computeBoundingBox(), this.boundingBox.getCenter(qn).negate(), this.translate(qn.x, qn.y, qn.z), this } setFromPoints (t) { const e = this.getAttribute("position"); if (e === void 0) { const n = []; for (let r = 0, s = t.length; r < s; r++) { const o = t[r]; n.push(o.x, o.y, o.z || 0) } this.setAttribute("position", new Pn(n, 3)) } else { for (let n = 0, r = e.count; n < r; n++) { const s = t[n]; e.setXYZ(n, s.x, s.y, s.z || 0) } t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0 } return this } computeBoundingBox () { this.boundingBox === null && (this.boundingBox = new Ri); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new N(-1 / 0, -1 / 0, -1 / 0), new N(1 / 0, 1 / 0, 1 / 0)); return } if (t !== void 0) { if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, r = e.length; n < r; n++) { const s = e[n]; Me.setFromBufferAttribute(s), this.morphTargetsRelative ? (oe.addVectors(this.boundingBox.min, Me.min), this.boundingBox.expandByPoint(oe), oe.addVectors(this.boundingBox.max, Me.max), this.boundingBox.expandByPoint(oe)) : (this.boundingBox.expandByPoint(Me.min), this.boundingBox.expandByPoint(Me.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere () { this.boundingSphere === null && (this.boundingSphere = new Hs); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new N, 1 / 0); return } if (t) { const n = this.boundingSphere.center; if (Me.setFromBufferAttribute(t), e) for (let s = 0, o = e.length; s < o; s++) { const a = e[s]; gi.setFromBufferAttribute(a), this.morphTargetsRelative ? (oe.addVectors(Me.min, gi.min), Me.expandByPoint(oe), oe.addVectors(Me.max, gi.max), Me.expandByPoint(oe)) : (Me.expandByPoint(gi.min), Me.expandByPoint(gi.max)) } Me.getCenter(n); let r = 0; for (let s = 0, o = t.count; s < o; s++)oe.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(oe)); if (e) for (let s = 0, o = e.length; s < o; s++) { const a = e[s], l = this.morphTargetsRelative; for (let c = 0, u = a.count; c < u; c++)oe.fromBufferAttribute(a, c), l && (qn.fromBufferAttribute(t, c), oe.add(qn)), r = Math.max(r, n.distanceToSquared(oe)) } this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents () { const t = this.index, e = this.attributes; if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = e.position, r = e.normal, s = e.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ze(new Float32Array(4 * n.count), 4)); const o = this.getAttribute("tangent"), a = [], l = []; for (let U = 0; U < n.count; U++)a[U] = new N, l[U] = new N; const c = new N, u = new N, d = new N, f = new Wt, m = new Wt, v = new Wt, M = new N, p = new N; function h (U, S, x) { c.fromBufferAttribute(n, U), u.fromBufferAttribute(n, S), d.fromBufferAttribute(n, x), f.fromBufferAttribute(s, U), m.fromBufferAttribute(s, S), v.fromBufferAttribute(s, x), u.sub(c), d.sub(c), m.sub(f), v.sub(f); const w = 1 / (m.x * v.y - v.x * m.y); isFinite(w) && (M.copy(u).multiplyScalar(v.y).addScaledVector(d, -m.y).multiplyScalar(w), p.copy(d).multiplyScalar(m.x).addScaledVector(u, -v.x).multiplyScalar(w), a[U].add(M), a[S].add(M), a[x].add(M), l[U].add(p), l[S].add(p), l[x].add(p)) } let A = this.groups; A.length === 0 && (A = [{ start: 0, count: t.count }]); for (let U = 0, S = A.length; U < S; ++U) { const x = A[U], w = x.start, k = x.count; for (let z = w, Z = w + k; z < Z; z += 3)h(t.getX(z + 0), t.getX(z + 1), t.getX(z + 2)) } const T = new N, E = new N, B = new N, C = new N; function b (U) { B.fromBufferAttribute(r, U), C.copy(B); const S = a[U]; T.copy(S), T.sub(B.multiplyScalar(B.dot(S))).normalize(), E.crossVectors(C, S); const w = E.dot(l[U]) < 0 ? -1 : 1; o.setXYZW(U, T.x, T.y, T.z, w) } for (let U = 0, S = A.length; U < S; ++U) { const x = A[U], w = x.start, k = x.count; for (let z = w, Z = w + k; z < Z; z += 3)b(t.getX(z + 0)), b(t.getX(z + 1)), b(t.getX(z + 2)) } } computeVertexNormals () { const t = this.index, e = this.getAttribute("position"); if (e !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new ze(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n); else for (let f = 0, m = n.count; f < m; f++)n.setXYZ(f, 0, 0, 0); const r = new N, s = new N, o = new N, a = new N, l = new N, c = new N, u = new N, d = new N; if (t) for (let f = 0, m = t.count; f < m; f += 3) { const v = t.getX(f + 0), M = t.getX(f + 1), p = t.getX(f + 2); r.fromBufferAttribute(e, v), s.fromBufferAttribute(e, M), o.fromBufferAttribute(e, p), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), a.fromBufferAttribute(n, v), l.fromBufferAttribute(n, M), c.fromBufferAttribute(n, p), a.add(u), l.add(u), c.add(u), n.setXYZ(v, a.x, a.y, a.z), n.setXYZ(M, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z) } else for (let f = 0, m = e.count; f < m; f += 3)r.fromBufferAttribute(e, f + 0), s.fromBufferAttribute(e, f + 1), o.fromBufferAttribute(e, f + 2), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals () { const t = this.attributes.normal; for (let e = 0, n = t.count; e < n; e++)oe.fromBufferAttribute(t, e), oe.normalize(), t.setXYZ(e, oe.x, oe.y, oe.z) } toNonIndexed () { function t (a, l) { const c = a.array, u = a.itemSize, d = a.normalized, f = new c.constructor(l.length * u); let m = 0, v = 0; for (let M = 0, p = l.length; M < p; M++) { a.isInterleavedBufferAttribute ? m = l[M] * a.data.stride + a.offset : m = l[M] * u; for (let h = 0; h < u; h++)f[v++] = c[m++] } return new ze(f, u, d) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const e = new Un, n = this.index.array, r = this.attributes; for (const a in r) { const l = r[a], c = t(l, n); e.setAttribute(a, c) } const s = this.morphAttributes; for (const a in s) { const l = [], c = s[a]; for (let u = 0, d = c.length; u < d; u++) { const f = c[u], m = t(f, n); l.push(m) } e.morphAttributes[a] = l } e.morphTargetsRelative = this.morphTargetsRelative; const o = this.groups; for (let a = 0, l = o.length; a < l; a++) { const c = o[a]; e.addGroup(c.start, c.count, c.materialIndex) } return e } toJSON () { const t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in l) l[c] !== void 0 && (t[c] = l[c]); return t } t.data = { attributes: {} }; const e = this.index; e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) }); const n = this.attributes; for (const l in n) { const c = n[l]; t.data.attributes[l] = c.toJSON(t.data) } const r = {}; let s = !1; for (const l in this.morphAttributes) { const c = this.morphAttributes[l], u = []; for (let d = 0, f = c.length; d < f; d++) { const m = c[d]; u.push(m.toJSON(t.data)) } u.length > 0 && (r[l] = u, s = !0) } s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative); const o = this.groups; o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o))); const a = this.boundingSphere; return a !== null && (t.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t } clone () { return new this.constructor().copy(this) } copy (t) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const e = {}; this.name = t.name; const n = t.index; n !== null && this.setIndex(n.clone(e)); const r = t.attributes; for (const c in r) { const u = r[c]; this.setAttribute(c, u.clone(e)) } const s = t.morphAttributes; for (const c in s) { const u = [], d = s[c]; for (let f = 0, m = d.length; f < m; f++)u.push(d[f].clone(e)); this.morphAttributes[c] = u } this.morphTargetsRelative = t.morphTargetsRelative; const o = t.groups; for (let c = 0, u = o.length; c < u; c++) { const d = o[c]; this.addGroup(d.start, d.count, d.materialIndex) } const a = t.boundingBox; a !== null && (this.boundingBox = a.clone()); const l = t.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this } dispose () { this.dispatchEvent({ type: "dispose" }) } } const Sa = new ne, vn = new ic, ki = new Hs, Ea = new N, Wi = new N, Xi = new N, qi = new N, Ir = new N, Yi = new N, ya = new N, Zi = new N; class Be extends le { constructor (t = new Un, e = new bo) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets() } copy (t, e) { return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this } updateMorphTargets () { const e = this.geometry.morphAttributes, n = Object.keys(e); if (n.length > 0) { const r = e[n[0]]; if (r !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, o = r.length; s < o; s++) { const a = r[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s } } } } getVertexPosition (t, e) { const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative; e.fromBufferAttribute(r, t); const a = this.morphTargetInfluences; if (s && a) { Yi.set(0, 0, 0); for (let l = 0, c = s.length; l < c; l++) { const u = a[l], d = s[l]; u !== 0 && (Ir.fromBufferAttribute(d, t), o ? Yi.addScaledVector(Ir, u) : Yi.addScaledVector(Ir.sub(e), u)) } e.add(Yi) } return e } raycast (t, e) { const n = this.geometry, r = this.material, s = this.matrixWorld; r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ki.copy(n.boundingSphere), ki.applyMatrix4(s), vn.copy(t.ray).recast(t.near), !(ki.containsPoint(vn.origin) === !1 && (vn.intersectSphere(ki, Ea) === null || vn.origin.distanceToSquared(Ea) > (t.far - t.near) ** 2)) && (Sa.copy(s).invert(), vn.copy(t.ray).applyMatrix4(Sa), !(n.boundingBox !== null && vn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, vn))) } _computeIntersections (t, e, n) { let r; const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, d = s.attributes.normal, f = s.groups, m = s.drawRange; if (a !== null) if (Array.isArray(o)) for (let v = 0, M = f.length; v < M; v++) { const p = f[v], h = o[p.materialIndex], A = Math.max(p.start, m.start), T = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count)); for (let E = A, B = T; E < B; E += 3) { const C = a.getX(E), b = a.getX(E + 1), U = a.getX(E + 2); r = Ki(this, h, t, n, c, u, d, C, b, U), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = p.materialIndex, e.push(r)) } } else { const v = Math.max(0, m.start), M = Math.min(a.count, m.start + m.count); for (let p = v, h = M; p < h; p += 3) { const A = a.getX(p), T = a.getX(p + 1), E = a.getX(p + 2); r = Ki(this, o, t, n, c, u, d, A, T, E), r && (r.faceIndex = Math.floor(p / 3), e.push(r)) } } else if (l !== void 0) if (Array.isArray(o)) for (let v = 0, M = f.length; v < M; v++) { const p = f[v], h = o[p.materialIndex], A = Math.max(p.start, m.start), T = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count)); for (let E = A, B = T; E < B; E += 3) { const C = E, b = E + 1, U = E + 2; r = Ki(this, h, t, n, c, u, d, C, b, U), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = p.materialIndex, e.push(r)) } } else { const v = Math.max(0, m.start), M = Math.min(l.count, m.start + m.count); for (let p = v, h = M; p < h; p += 3) { const A = p, T = p + 1, E = p + 2; r = Ki(this, o, t, n, c, u, d, A, T, E), r && (r.faceIndex = Math.floor(p / 3), e.push(r)) } } } } function dc (i, t, e, n, r, s, o, a) { let l; if (t.side === ge ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, t.side === dn, a), l === null) return null; Zi.copy(a), Zi.applyMatrix4(i.matrixWorld); const c = e.ray.origin.distanceTo(Zi); return c < e.near || c > e.far ? null : { distance: c, point: Zi.clone(), object: i } } function Ki (i, t, e, n, r, s, o, a, l, c) { i.getVertexPosition(a, Wi), i.getVertexPosition(l, Xi), i.getVertexPosition(c, qi); const u = dc(i, t, e, n, Wi, Xi, qi, ya); if (u) { const d = new N; De.getBarycoord(ya, Wi, Xi, qi, d), r && (u.uv = De.getInterpolatedAttribute(r, a, l, c, d, new Wt)), s && (u.uv1 = De.getInterpolatedAttribute(s, a, l, c, d, new Wt)), o && (u.normal = De.getInterpolatedAttribute(o, a, l, c, d, new N), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1)); const f = { a, b: l, c, normal: new N, materialIndex: 0 }; De.getNormal(Wi, Xi, qi, f.normal), u.face = f, u.barycoord = d } return u } class ui extends Un { constructor (t = 1, e = 1, n = 1, r = 1, s = 1, o = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: r, heightSegments: s, depthSegments: o }; const a = this; r = Math.floor(r), s = Math.floor(s), o = Math.floor(o); const l = [], c = [], u = [], d = []; let f = 0, m = 0; v("z", "y", "x", -1, -1, n, e, t, o, s, 0), v("z", "y", "x", 1, -1, n, e, -t, o, s, 1), v("x", "z", "y", 1, 1, t, n, e, r, o, 2), v("x", "z", "y", 1, -1, t, n, -e, r, o, 3), v("x", "y", "z", 1, -1, t, e, n, r, s, 4), v("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Pn(c, 3)), this.setAttribute("normal", new Pn(u, 3)), this.setAttribute("uv", new Pn(d, 2)); function v (M, p, h, A, T, E, B, C, b, U, S) { const x = E / b, w = B / U, k = E / 2, z = B / 2, Z = C / 2, K = b + 1, X = U + 1; let j = 0, V = 0; const it = new N; for (let ct = 0; ct < X; ct++) { const xt = ct * w - z; for (let Dt = 0; Dt < K; Dt++) { const Yt = Dt * x - k; it[M] = Yt * A, it[p] = xt * T, it[h] = Z, c.push(it.x, it.y, it.z), it[M] = 0, it[p] = 0, it[h] = C > 0 ? 1 : -1, u.push(it.x, it.y, it.z), d.push(Dt / b), d.push(1 - ct / U), j += 1 } } for (let ct = 0; ct < U; ct++)for (let xt = 0; xt < b; xt++) { const Dt = f + xt + K * ct, Yt = f + xt + K * (ct + 1), W = f + (xt + 1) + K * (ct + 1), tt = f + (xt + 1) + K * ct; l.push(Dt, Yt, tt), l.push(Yt, W, tt), V += 6 } a.addGroup(m, V, S), m += V, f += j } } copy (t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON (t) { return new ui(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments) } } function ai (i) { const t = {}; for (const e in i) { t[e] = {}; for (const n in i[e]) { const r = i[e][n]; r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = r.clone() : Array.isArray(r) ? t[e][n] = r.slice() : t[e][n] = r } } return t } function fe (i) { const t = {}; for (let e = 0; e < i.length; e++) { const n = ai(i[e]); for (const r in n) t[r] = n[r] } return t } function fc (i) { const t = []; for (let e = 0; e < i.length; e++)t.push(i[e].clone()); return t } function Co (i) { const t = i.getRenderTarget(); return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : zt.workingColorSpace } const pc = { clone: ai, merge: fe }; var mc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, _c = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class pn extends Ci { static get type () { return "ShaderMaterial" } constructor (t) { super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = mc, this.fragmentShader = _c, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t) } copy (t) { return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ai(t.uniforms), this.uniformsGroups = fc(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this } toJSON (t) { const e = super.toJSON(t); e.glslVersion = this.glslVersion, e.uniforms = {}; for (const r in this.uniforms) { const o = this.uniforms[r].value; o && o.isTexture ? e.uniforms[r] = { type: "t", value: o.toJSON(t).uuid } : o && o.isColor ? e.uniforms[r] = { type: "c", value: o.getHex() } : o && o.isVector2 ? e.uniforms[r] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? e.uniforms[r] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? e.uniforms[r] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? e.uniforms[r] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? e.uniforms[r] = { type: "m4", value: o.toArray() } : e.uniforms[r] = { value: o } } Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping; const n = {}; for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0); return Object.keys(n).length > 0 && (e.extensions = n), e } } class Po extends le { constructor () { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ne, this.projectionMatrix = new ne, this.projectionMatrixInverse = new ne, this.coordinateSystem = je } copy (t, e) { return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this } getWorldDirection (t) { return super.getWorldDirection(t).negate() } updateMatrixWorld (t) { super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix (t, e) { super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone () { return new this.constructor().copy(this) } } const ln = new N, Ta = new Wt, Aa = new Wt; class Le extends Po { constructor (t = 50, e = 1, n = .1, r = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy (t, e) { return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this } setFocalLength (t) { const e = .5 * this.getFilmHeight() / t; this.fov = Ai * 2 * Math.atan(e), this.updateProjectionMatrix() } getFocalLength () { const t = Math.tan(Si * .5 * this.fov); return .5 * this.getFilmHeight() / t } getEffectiveFOV () { return Ai * 2 * Math.atan(Math.tan(Si * .5 * this.fov) / this.zoom) } getFilmWidth () { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight () { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds (t, e, n) { ln.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), e.set(ln.x, ln.y).multiplyScalar(-t / ln.z), ln.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(ln.x, ln.y).multiplyScalar(-t / ln.z) } getViewSize (t, e) { return this.getViewBounds(t, Ta, Aa), e.subVectors(Aa, Ta) } setViewOffset (t, e, n, r, s, o) { this.aspect = t / e, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset () { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix () { const t = this.near; let e = t * Math.tan(Si * .5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -.5 * r; const o = this.view; if (this.view !== null && this.view.enabled) { const l = o.fullWidth, c = o.fullHeight; s += o.offsetX * r / l, e -= o.offsetY * n / c, r *= o.width / l, n *= o.height / c } const a = this.filmOffset; a !== 0 && (s += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON (t) { const e = super.toJSON(t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e } } const Yn = -90, Zn = 1; class gc extends le { constructor (t, e, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const r = new Le(Yn, Zn, t, e); r.layers = this.layers, this.add(r); const s = new Le(Yn, Zn, t, e); s.layers = this.layers, this.add(s); const o = new Le(Yn, Zn, t, e); o.layers = this.layers, this.add(o); const a = new Le(Yn, Zn, t, e); a.layers = this.layers, this.add(a); const l = new Le(Yn, Zn, t, e); l.layers = this.layers, this.add(l); const c = new Le(Yn, Zn, t, e); c.layers = this.layers, this.add(c) } updateCoordinateSystem () { const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, o, a, l] = e; for (const c of e) this.remove(c); if (t === je) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1); else if (t === lr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t); for (const c of e) this.add(c), c.updateMatrixWorld() } update (t, e) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: r } = this; this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem()); const [s, o, a, l, c, u] = this.children, d = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), v = t.xr.enabled; t.xr.enabled = !1; const M = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, o), t.setRenderTarget(n, 2, r), t.render(e, a), t.setRenderTarget(n, 3, r), t.render(e, l), t.setRenderTarget(n, 4, r), t.render(e, c), n.texture.generateMipmaps = M, t.setRenderTarget(n, 5, r), t.render(e, u), t.setRenderTarget(d, f, m), t.xr.enabled = v, n.texture.needsPMREMUpdate = !0 } } class Lo extends me { constructor (t, e, n, r, s, o, a, l, c, u) { t = t !== void 0 ? t : [], e = e !== void 0 ? e : ni, super(t, e, n, r, s, o, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1 } get images () { return this.image } set images (t) { this.image = t } } class vc extends Dn {
	constructor (t = 1, e = {}) { super(t, t, e), this.isWebGLCubeRenderTarget = !0; const n = { width: t, height: t, depth: 1 }, r = [n, n, n, n, n, n]; this.texture = new Lo(r, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Oe } fromEquirectangularTexture (t, e) {
		this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, r = new ui(5, 5, 5), s = new pn({ name: "CubemapFromEquirect", uniforms: ai(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: ge, blending: un }); s.uniforms.tEquirect.value = e; const o = new Be(r, s), a = e.minFilter; return e.minFilter === Cn && (e.minFilter = Oe), new gc(1, 10, this).update(t, o), e.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
	} clear (t, e, n, r) { const s = t.getRenderTarget(); for (let o = 0; o < 6; o++)t.setRenderTarget(this, o), t.clear(e, n, r); t.setRenderTarget(s) }
} const Nr = new N, xc = new N, Mc = new Ct; class Tn { constructor (t = new N(1, 0, 0), e = 0) { this.isPlane = !0, this.normal = t, this.constant = e } set (t, e) { return this.normal.copy(t), this.constant = e, this } setComponents (t, e, n, r) { return this.normal.set(t, e, n), this.constant = r, this } setFromNormalAndCoplanarPoint (t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this } setFromCoplanarPoints (t, e, n) { const r = Nr.subVectors(n, e).cross(xc.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(r, t), this } copy (t) { return this.normal.copy(t.normal), this.constant = t.constant, this } normalize () { const t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this } negate () { return this.constant *= -1, this.normal.negate(), this } distanceToPoint (t) { return this.normal.dot(t) + this.constant } distanceToSphere (t) { return this.distanceToPoint(t.center) - t.radius } projectPoint (t, e) { return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t)) } intersectLine (t, e) { const n = t.delta(Nr), r = this.normal.dot(n); if (r === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null; const s = -(t.start.dot(this.normal) + this.constant) / r; return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s) } intersectsLine (t) { const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end); return e < 0 && n > 0 || n < 0 && e > 0 } intersectsBox (t) { return t.intersectsPlane(this) } intersectsSphere (t) { return t.intersectsPlane(this) } coplanarPoint (t) { return t.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4 (t, e) { const n = e || Mc.getNormalMatrix(t), r = this.coplanarPoint(Nr).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize(); return this.constant = -r.dot(s), this } translate (t) { return this.constant -= t.dot(this.normal), this } equals (t) { return t.normal.equals(this.normal) && t.constant === this.constant } clone () { return new this.constructor().copy(this) } } const xn = new Hs, $i = new N; class Vs { constructor (t = new Tn, e = new Tn, n = new Tn, r = new Tn, s = new Tn, o = new Tn) { this.planes = [t, e, n, r, s, o] } set (t, e, n, r, s, o) { const a = this.planes; return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this } copy (t) { const e = this.planes; for (let n = 0; n < 6; n++)e[n].copy(t.planes[n]); return this } setFromProjectionMatrix (t, e = je) { const n = this.planes, r = t.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], u = r[5], d = r[6], f = r[7], m = r[8], v = r[9], M = r[10], p = r[11], h = r[12], A = r[13], T = r[14], E = r[15]; if (n[0].setComponents(l - s, f - c, p - m, E - h).normalize(), n[1].setComponents(l + s, f + c, p + m, E + h).normalize(), n[2].setComponents(l + o, f + u, p + v, E + A).normalize(), n[3].setComponents(l - o, f - u, p - v, E - A).normalize(), n[4].setComponents(l - a, f - d, p - M, E - T).normalize(), e === je) n[5].setComponents(l + a, f + d, p + M, E + T).normalize(); else if (e === lr) n[5].setComponents(a, d, M, T).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e); return this } intersectsObject (t) { if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld); else { const e = t.geometry; e.boundingSphere === null && e.computeBoundingSphere(), xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld) } return this.intersectsSphere(xn) } intersectsSprite (t) { return xn.center.set(0, 0, 0), xn.radius = .7071067811865476, xn.applyMatrix4(t.matrixWorld), this.intersectsSphere(xn) } intersectsSphere (t) { const e = this.planes, n = t.center, r = -t.radius; for (let s = 0; s < 6; s++)if (e[s].distanceToPoint(n) < r) return !1; return !0 } intersectsBox (t) { const e = this.planes; for (let n = 0; n < 6; n++) { const r = e[n]; if ($i.x = r.normal.x > 0 ? t.max.x : t.min.x, $i.y = r.normal.y > 0 ? t.max.y : t.min.y, $i.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint($i) < 0) return !1 } return !0 } containsPoint (t) { const e = this.planes; for (let n = 0; n < 6; n++)if (e[n].distanceToPoint(t) < 0) return !1; return !0 } clone () { return new this.constructor().copy(this) } } function Do () { let i = null, t = !1, e = null, n = null; function r (s, o) { e(s, o), n = i.requestAnimationFrame(r) } return { start: function () { t !== !0 && e !== null && (n = i.requestAnimationFrame(r), t = !0) }, stop: function () { i.cancelAnimationFrame(n), t = !1 }, setAnimationLoop: function (s) { e = s }, setContext: function (s) { i = s } } } function Sc (i) { const t = new WeakMap; function e (a, l) { const c = a.array, u = a.usage, d = c.byteLength, f = i.createBuffer(); i.bindBuffer(l, f), i.bufferData(l, c, u), a.onUploadCallback(); let m; if (c instanceof Float32Array) m = i.FLOAT; else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT; else if (c instanceof Int16Array) m = i.SHORT; else if (c instanceof Uint32Array) m = i.UNSIGNED_INT; else if (c instanceof Int32Array) m = i.INT; else if (c instanceof Int8Array) m = i.BYTE; else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE; else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c); return { buffer: f, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: d } } function n (a, l, c) { const u = l.array, d = l.updateRanges; if (i.bindBuffer(c, a), d.length === 0) i.bufferSubData(c, 0, u); else { d.sort((m, v) => m.start - v.start); let f = 0; for (let m = 1; m < d.length; m++) { const v = d[f], M = d[m]; M.start <= v.start + v.count + 1 ? v.count = Math.max(v.count, M.start + M.count - v.start) : (++f, d[f] = M) } d.length = f + 1; for (let m = 0, v = d.length; m < v; m++) { const M = d[m]; i.bufferSubData(c, M.start * u.BYTES_PER_ELEMENT, u, M.start, M.count) } l.clearUpdateRanges() } l.onUploadCallback() } function r (a) { return a.isInterleavedBufferAttribute && (a = a.data), t.get(a) } function s (a) { a.isInterleavedBufferAttribute && (a = a.data); const l = t.get(a); l && (i.deleteBuffer(l.buffer), t.delete(a)) } function o (a, l) { if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) { const u = t.get(a); (!u || u.version < a.version) && t.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version }); return } const c = t.get(a); if (c === void 0) t.set(a, e(a, l)); else if (c.version < a.version) { if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); n(c.buffer, a, l), c.version = a.version } } return { get: r, remove: s, update: o } } class dr extends Un { constructor (t = 1, e = 1, n = 1, r = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: r }; const s = t / 2, o = e / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, u = l + 1, d = t / a, f = e / l, m = [], v = [], M = [], p = []; for (let h = 0; h < u; h++) { const A = h * f - o; for (let T = 0; T < c; T++) { const E = T * d - s; v.push(E, -A, 0), M.push(0, 0, 1), p.push(T / a), p.push(1 - h / l) } } for (let h = 0; h < l; h++)for (let A = 0; A < a; A++) { const T = A + c * h, E = A + c * (h + 1), B = A + 1 + c * (h + 1), C = A + 1 + c * h; m.push(T, E, C), m.push(E, B, C) } this.setIndex(m), this.setAttribute("position", new Pn(v, 3)), this.setAttribute("normal", new Pn(M, 3)), this.setAttribute("uv", new Pn(p, 2)) } copy (t) { return super.copy(t), this.parameters = Object.assign({}, t.parameters), this } static fromJSON (t) { return new dr(t.width, t.height, t.widthSegments, t.heightSegments) } } var Ec = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, yc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Tc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Ac = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, bc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, wc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Rc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Cc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Pc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Lc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Dc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Uc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ic = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Nc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Fc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Oc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Bc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, zc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Hc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Vc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Gc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, kc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Wc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Xc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, qc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Yc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Zc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Kc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, $c = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, jc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Jc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Qc = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, tu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, eu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, nu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, iu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ru = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, su = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, au = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ou = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, lu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, cu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, uu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, hu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, du = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, fu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, pu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, mu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, _u = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, gu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, vu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, xu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Mu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Su = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Eu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, yu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Tu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Au = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, bu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, wu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Ru = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Cu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Pu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Lu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Du = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Uu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Iu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Nu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Fu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ou = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Bu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, zu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Hu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Vu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Gu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ku = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Wu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Xu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, qu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Yu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Zu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ku = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, $u = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, ju = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ju = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Qu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, th = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, eh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, nh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ih = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, rh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, sh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, ah = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, oh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, lh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ch = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, uh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, hh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, dh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, fh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ph = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, mh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, _h = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, gh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, vh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, xh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Mh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const Sh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Eh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Th = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ah = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, bh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, wh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Rh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Ch = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Ph = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Lh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Dh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Uh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ih = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Nh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Fh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Oh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Bh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Hh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Gh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, kh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Wh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, qh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Zh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Kh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, $h = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, jh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Qh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, td = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Lt = { alphahash_fragment: Ec, alphahash_pars_fragment: yc, alphamap_fragment: Tc, alphamap_pars_fragment: Ac, alphatest_fragment: bc, alphatest_pars_fragment: wc, aomap_fragment: Rc, aomap_pars_fragment: Cc, batching_pars_vertex: Pc, batching_vertex: Lc, begin_vertex: Dc, beginnormal_vertex: Uc, bsdfs: Ic, iridescence_fragment: Nc, bumpmap_pars_fragment: Fc, clipping_planes_fragment: Oc, clipping_planes_pars_fragment: Bc, clipping_planes_pars_vertex: zc, clipping_planes_vertex: Hc, color_fragment: Vc, color_pars_fragment: Gc, color_pars_vertex: kc, color_vertex: Wc, common: Xc, cube_uv_reflection_fragment: qc, defaultnormal_vertex: Yc, displacementmap_pars_vertex: Zc, displacementmap_vertex: Kc, emissivemap_fragment: $c, emissivemap_pars_fragment: jc, colorspace_fragment: Jc, colorspace_pars_fragment: Qc, envmap_fragment: tu, envmap_common_pars_fragment: eu, envmap_pars_fragment: nu, envmap_pars_vertex: iu, envmap_physical_pars_fragment: pu, envmap_vertex: ru, fog_vertex: su, fog_pars_vertex: au, fog_fragment: ou, fog_pars_fragment: lu, gradientmap_pars_fragment: cu, lightmap_pars_fragment: uu, lights_lambert_fragment: hu, lights_lambert_pars_fragment: du, lights_pars_begin: fu, lights_toon_fragment: mu, lights_toon_pars_fragment: _u, lights_phong_fragment: gu, lights_phong_pars_fragment: vu, lights_physical_fragment: xu, lights_physical_pars_fragment: Mu, lights_fragment_begin: Su, lights_fragment_maps: Eu, lights_fragment_end: yu, logdepthbuf_fragment: Tu, logdepthbuf_pars_fragment: Au, logdepthbuf_pars_vertex: bu, logdepthbuf_vertex: wu, map_fragment: Ru, map_pars_fragment: Cu, map_particle_fragment: Pu, map_particle_pars_fragment: Lu, metalnessmap_fragment: Du, metalnessmap_pars_fragment: Uu, morphinstance_vertex: Iu, morphcolor_vertex: Nu, morphnormal_vertex: Fu, morphtarget_pars_vertex: Ou, morphtarget_vertex: Bu, normal_fragment_begin: zu, normal_fragment_maps: Hu, normal_pars_fragment: Vu, normal_pars_vertex: Gu, normal_vertex: ku, normalmap_pars_fragment: Wu, clearcoat_normal_fragment_begin: Xu, clearcoat_normal_fragment_maps: qu, clearcoat_pars_fragment: Yu, iridescence_pars_fragment: Zu, opaque_fragment: Ku, packing: $u, premultiplied_alpha_fragment: ju, project_vertex: Ju, dithering_fragment: Qu, dithering_pars_fragment: th, roughnessmap_fragment: eh, roughnessmap_pars_fragment: nh, shadowmap_pars_fragment: ih, shadowmap_pars_vertex: rh, shadowmap_vertex: sh, shadowmask_pars_fragment: ah, skinbase_vertex: oh, skinning_pars_vertex: lh, skinning_vertex: ch, skinnormal_vertex: uh, specularmap_fragment: hh, specularmap_pars_fragment: dh, tonemapping_fragment: fh, tonemapping_pars_fragment: ph, transmission_fragment: mh, transmission_pars_fragment: _h, uv_pars_fragment: gh, uv_pars_vertex: vh, uv_vertex: xh, worldpos_vertex: Mh, background_vert: Sh, background_frag: Eh, backgroundCube_vert: yh, backgroundCube_frag: Th, cube_vert: Ah, cube_frag: bh, depth_vert: wh, depth_frag: Rh, distanceRGBA_vert: Ch, distanceRGBA_frag: Ph, equirect_vert: Lh, equirect_frag: Dh, linedashed_vert: Uh, linedashed_frag: Ih, meshbasic_vert: Nh, meshbasic_frag: Fh, meshlambert_vert: Oh, meshlambert_frag: Bh, meshmatcap_vert: zh, meshmatcap_frag: Hh, meshnormal_vert: Vh, meshnormal_frag: Gh, meshphong_vert: kh, meshphong_frag: Wh, meshphysical_vert: Xh, meshphysical_frag: qh, meshtoon_vert: Yh, meshtoon_frag: Zh, points_vert: Kh, points_frag: $h, shadow_vert: jh, shadow_frag: Jh, sprite_vert: Qh, sprite_frag: td }, et = { common: { diffuse: { value: new Vt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ct }, alphaMap: { value: null }, alphaMapTransform: { value: new Ct }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ct } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ct }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ct } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ct } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ct }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ct }, normalScale: { value: new Wt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ct }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ct } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ct } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ct } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Vt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Vt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ct }, alphaTest: { value: 0 }, uvTransform: { value: new Ct } }, sprite: { diffuse: { value: new Vt(16777215) }, opacity: { value: 1 }, center: { value: new Wt(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ct }, alphaMap: { value: null }, alphaMapTransform: { value: new Ct }, alphaTest: { value: 0 } } }, Fe = { basic: { uniforms: fe([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.fog]), vertexShader: Lt.meshbasic_vert, fragmentShader: Lt.meshbasic_frag }, lambert: { uniforms: fe([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, { emissive: { value: new Vt(0) } }]), vertexShader: Lt.meshlambert_vert, fragmentShader: Lt.meshlambert_frag }, phong: { uniforms: fe([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, { emissive: { value: new Vt(0) }, specular: { value: new Vt(1118481) }, shininess: { value: 30 } }]), vertexShader: Lt.meshphong_vert, fragmentShader: Lt.meshphong_frag }, standard: { uniforms: fe([et.common, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.roughnessmap, et.metalnessmap, et.fog, et.lights, { emissive: { value: new Vt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Lt.meshphysical_vert, fragmentShader: Lt.meshphysical_frag }, toon: { uniforms: fe([et.common, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.gradientmap, et.fog, et.lights, { emissive: { value: new Vt(0) } }]), vertexShader: Lt.meshtoon_vert, fragmentShader: Lt.meshtoon_frag }, matcap: { uniforms: fe([et.common, et.bumpmap, et.normalmap, et.displacementmap, et.fog, { matcap: { value: null } }]), vertexShader: Lt.meshmatcap_vert, fragmentShader: Lt.meshmatcap_frag }, points: { uniforms: fe([et.points, et.fog]), vertexShader: Lt.points_vert, fragmentShader: Lt.points_frag }, dashed: { uniforms: fe([et.common, et.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Lt.linedashed_vert, fragmentShader: Lt.linedashed_frag }, depth: { uniforms: fe([et.common, et.displacementmap]), vertexShader: Lt.depth_vert, fragmentShader: Lt.depth_frag }, normal: { uniforms: fe([et.common, et.bumpmap, et.normalmap, et.displacementmap, { opacity: { value: 1 } }]), vertexShader: Lt.meshnormal_vert, fragmentShader: Lt.meshnormal_frag }, sprite: { uniforms: fe([et.sprite, et.fog]), vertexShader: Lt.sprite_vert, fragmentShader: Lt.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ct }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Lt.background_vert, fragmentShader: Lt.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ct } }, vertexShader: Lt.backgroundCube_vert, fragmentShader: Lt.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Lt.cube_vert, fragmentShader: Lt.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Lt.equirect_vert, fragmentShader: Lt.equirect_frag }, distanceRGBA: { uniforms: fe([et.common, et.displacementmap, { referencePosition: { value: new N }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Lt.distanceRGBA_vert, fragmentShader: Lt.distanceRGBA_frag }, shadow: { uniforms: fe([et.lights, et.fog, { color: { value: new Vt(0) }, opacity: { value: 1 } }]), vertexShader: Lt.shadow_vert, fragmentShader: Lt.shadow_frag } }; Fe.physical = { uniforms: fe([Fe.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ct }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ct }, clearcoatNormalScale: { value: new Wt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ct }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ct }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ct }, sheen: { value: 0 }, sheenColor: { value: new Vt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ct }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ct }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ct }, transmissionSamplerSize: { value: new Wt }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ct }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Vt(0) }, specularColor: { value: new Vt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ct }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ct }, anisotropyVector: { value: new Wt }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ct } }]), vertexShader: Lt.meshphysical_vert, fragmentShader: Lt.meshphysical_frag }; const ji = { r: 0, b: 0, g: 0 }, Mn = new Se, ed = new ne; function nd (i, t, e, n, r, s, o) { const a = new Vt(0); let l = s === !0 ? 0 : 1, c, u, d = null, f = 0, m = null; function v (A) { let T = A.isScene === !0 ? A.background : null; return T && T.isTexture && (T = (A.backgroundBlurriness > 0 ? e : t).get(T)), T } function M (A) { let T = !1; const E = v(A); E === null ? h(a, l) : E && E.isColor && (h(E, 1), T = !0); const B = i.xr.getEnvironmentBlendMode(); B === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : B === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || T) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)) } function p (A, T) { const E = v(T); E && (E.isCubeTexture || E.mapping === ur) ? (u === void 0 && (u = new Be(new ui(1, 1, 1), new pn({ name: "BackgroundCubeMaterial", uniforms: ai(Fe.backgroundCube.uniforms), vertexShader: Fe.backgroundCube.vertexShader, fragmentShader: Fe.backgroundCube.fragmentShader, side: ge, depthTest: !1, depthWrite: !1, fog: !1 })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function (B, C, b) { this.matrixWorld.copyPosition(b.matrixWorld) }, Object.defineProperty(u.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), r.update(u)), Mn.copy(T.backgroundRotation), Mn.x *= -1, Mn.y *= -1, Mn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (Mn.y *= -1, Mn.z *= -1), u.material.uniforms.envMap.value = E, u.material.uniforms.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(ed.makeRotationFromEuler(Mn)), u.material.toneMapped = zt.getTransfer(E.colorSpace) !== qt, (d !== E || f !== E.version || m !== i.toneMapping) && (u.material.needsUpdate = !0, d = E, f = E.version, m = i.toneMapping), u.layers.enableAll(), A.unshift(u, u.geometry, u.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new Be(new dr(2, 2), new pn({ name: "BackgroundMaterial", uniforms: ai(Fe.background.uniforms), vertexShader: Fe.background.vertexShader, fragmentShader: Fe.background.fragmentShader, side: dn, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function () { return this.uniforms.t2D.value } }), r.update(c)), c.material.uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, c.material.toneMapped = zt.getTransfer(E.colorSpace) !== qt, E.matrixAutoUpdate === !0 && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E.matrix), (d !== E || f !== E.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, d = E, f = E.version, m = i.toneMapping), c.layers.enableAll(), A.unshift(c, c.geometry, c.material, 0, 0, null)) } function h (A, T) { A.getRGB(ji, Co(i)), n.buffers.color.setClear(ji.r, ji.g, ji.b, T, o) } return { getClearColor: function () { return a }, setClearColor: function (A, T = 1) { a.set(A), l = T, h(a, l) }, getClearAlpha: function () { return l }, setClearAlpha: function (A) { l = A, h(a, l) }, render: M, addToRenderList: p } } function id (i, t) { const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null); let s = r, o = !1; function a (x, w, k, z, Z) { let K = !1; const X = d(z, k, w); s !== X && (s = X, c(s.object)), K = m(x, z, k, Z), K && v(x, z, k, Z), Z !== null && t.update(Z, i.ELEMENT_ARRAY_BUFFER), (K || o) && (o = !1, E(x, w, k, z), Z !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(Z).buffer)) } function l () { return i.createVertexArray() } function c (x) { return i.bindVertexArray(x) } function u (x) { return i.deleteVertexArray(x) } function d (x, w, k) { const z = k.wireframe === !0; let Z = n[x.id]; Z === void 0 && (Z = {}, n[x.id] = Z); let K = Z[w.id]; K === void 0 && (K = {}, Z[w.id] = K); let X = K[z]; return X === void 0 && (X = f(l()), K[z] = X), X } function f (x) { const w = [], k = [], z = []; for (let Z = 0; Z < e; Z++)w[Z] = 0, k[Z] = 0, z[Z] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: w, enabledAttributes: k, attributeDivisors: z, object: x, attributes: {}, index: null } } function m (x, w, k, z) { const Z = s.attributes, K = w.attributes; let X = 0; const j = k.getAttributes(); for (const V in j) if (j[V].location >= 0) { const ct = Z[V]; let xt = K[V]; if (xt === void 0 && (V === "instanceMatrix" && x.instanceMatrix && (xt = x.instanceMatrix), V === "instanceColor" && x.instanceColor && (xt = x.instanceColor)), ct === void 0 || ct.attribute !== xt || xt && ct.data !== xt.data) return !0; X++ } return s.attributesNum !== X || s.index !== z } function v (x, w, k, z) { const Z = {}, K = w.attributes; let X = 0; const j = k.getAttributes(); for (const V in j) if (j[V].location >= 0) { let ct = K[V]; ct === void 0 && (V === "instanceMatrix" && x.instanceMatrix && (ct = x.instanceMatrix), V === "instanceColor" && x.instanceColor && (ct = x.instanceColor)); const xt = {}; xt.attribute = ct, ct && ct.data && (xt.data = ct.data), Z[V] = xt, X++ } s.attributes = Z, s.attributesNum = X, s.index = z } function M () { const x = s.newAttributes; for (let w = 0, k = x.length; w < k; w++)x[w] = 0 } function p (x) { h(x, 0) } function h (x, w) { const k = s.newAttributes, z = s.enabledAttributes, Z = s.attributeDivisors; k[x] = 1, z[x] === 0 && (i.enableVertexAttribArray(x), z[x] = 1), Z[x] !== w && (i.vertexAttribDivisor(x, w), Z[x] = w) } function A () { const x = s.newAttributes, w = s.enabledAttributes; for (let k = 0, z = w.length; k < z; k++)w[k] !== x[k] && (i.disableVertexAttribArray(k), w[k] = 0) } function T (x, w, k, z, Z, K, X) { X === !0 ? i.vertexAttribIPointer(x, w, k, Z, K) : i.vertexAttribPointer(x, w, k, z, Z, K) } function E (x, w, k, z) { M(); const Z = z.attributes, K = k.getAttributes(), X = w.defaultAttributeValues; for (const j in K) { const V = K[j]; if (V.location >= 0) { let it = Z[j]; if (it === void 0 && (j === "instanceMatrix" && x.instanceMatrix && (it = x.instanceMatrix), j === "instanceColor" && x.instanceColor && (it = x.instanceColor)), it !== void 0) { const ct = it.normalized, xt = it.itemSize, Dt = t.get(it); if (Dt === void 0) continue; const Yt = Dt.buffer, W = Dt.type, tt = Dt.bytesPerElement, _t = W === i.INT || W === i.UNSIGNED_INT || it.gpuType === Us; if (it.isInterleavedBufferAttribute) { const rt = it.data, yt = rt.stride, bt = it.offset; if (rt.isInstancedInterleavedBuffer) { for (let Ut = 0; Ut < V.locationSize; Ut++)h(V.location + Ut, rt.meshPerAttribute); x.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = rt.meshPerAttribute * rt.count) } else for (let Ut = 0; Ut < V.locationSize; Ut++)p(V.location + Ut); i.bindBuffer(i.ARRAY_BUFFER, Yt); for (let Ut = 0; Ut < V.locationSize; Ut++)T(V.location + Ut, xt / V.locationSize, W, ct, yt * tt, (bt + xt / V.locationSize * Ut) * tt, _t) } else { if (it.isInstancedBufferAttribute) { for (let rt = 0; rt < V.locationSize; rt++)h(V.location + rt, it.meshPerAttribute); x.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = it.meshPerAttribute * it.count) } else for (let rt = 0; rt < V.locationSize; rt++)p(V.location + rt); i.bindBuffer(i.ARRAY_BUFFER, Yt); for (let rt = 0; rt < V.locationSize; rt++)T(V.location + rt, xt / V.locationSize, W, ct, xt * tt, xt / V.locationSize * rt * tt, _t) } } else if (X !== void 0) { const ct = X[j]; if (ct !== void 0) switch (ct.length) { case 2: i.vertexAttrib2fv(V.location, ct); break; case 3: i.vertexAttrib3fv(V.location, ct); break; case 4: i.vertexAttrib4fv(V.location, ct); break; default: i.vertexAttrib1fv(V.location, ct) } } } } A() } function B () { U(); for (const x in n) { const w = n[x]; for (const k in w) { const z = w[k]; for (const Z in z) u(z[Z].object), delete z[Z]; delete w[k] } delete n[x] } } function C (x) { if (n[x.id] === void 0) return; const w = n[x.id]; for (const k in w) { const z = w[k]; for (const Z in z) u(z[Z].object), delete z[Z]; delete w[k] } delete n[x.id] } function b (x) { for (const w in n) { const k = n[w]; if (k[x.id] === void 0) continue; const z = k[x.id]; for (const Z in z) u(z[Z].object), delete z[Z]; delete k[x.id] } } function U () { S(), o = !0, s !== r && (s = r, c(s.object)) } function S () { r.geometry = null, r.program = null, r.wireframe = !1 } return { setup: a, reset: U, resetDefaultState: S, dispose: B, releaseStatesOfGeometry: C, releaseStatesOfProgram: b, initAttributes: M, enableAttribute: p, disableUnusedAttributes: A } } function rd (i, t, e) { let n; function r (c) { n = c } function s (c, u) { i.drawArrays(n, c, u), e.update(u, n, 1) } function o (c, u, d) { d !== 0 && (i.drawArraysInstanced(n, c, u, d), e.update(u, n, d)) } function a (c, u, d) { if (d === 0) return; t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, d); let m = 0; for (let v = 0; v < d; v++)m += u[v]; e.update(m, n, 1) } function l (c, u, d, f) { if (d === 0) return; const m = t.get("WEBGL_multi_draw"); if (m === null) for (let v = 0; v < c.length; v++)o(c[v], u[v], f[v]); else { m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, d); let v = 0; for (let M = 0; M < d; M++)v += u[M] * f[M]; e.update(v, n, 1) } } this.setMode = r, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l } function sd (i, t, e, n) { let r; function s () { if (r !== void 0) return r; if (t.has("EXT_texture_filter_anisotropic") === !0) { const b = t.get("EXT_texture_filter_anisotropic"); r = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else r = 0; return r } function o (b) { return !(b !== Ue && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)) } function a (b) { const U = b === wi && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float")); return !(b !== Qe && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && b !== $e && !U) } function l (b) { if (b === "highp") { if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp"; b = "mediump" } return b === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } let c = e.precision !== void 0 ? e.precision : "highp"; const u = l(c); u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u); const d = e.logarithmicDepthBuffer === !0, f = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), B = v > 0, C = i.getParameter(i.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: d, reverseDepthBuffer: f, maxTextures: m, maxVertexTextures: v, maxTextureSize: M, maxCubemapSize: p, maxAttributes: h, maxVertexUniforms: A, maxVaryings: T, maxFragmentUniforms: E, vertexTextures: B, maxSamples: C } } function ad (i) { const t = this; let e = null, n = 0, r = !1, s = !1; const o = new Tn, a = new Ct, l = { value: null, needsUpdate: !1 }; this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (d, f) { const m = d.length !== 0 || f || n !== 0 || r; return r = f, n = d.length, m }, this.beginShadows = function () { s = !0, u(null) }, this.endShadows = function () { s = !1 }, this.setGlobalState = function (d, f) { e = u(d, f, 0) }, this.setState = function (d, f, m) { const v = d.clippingPlanes, M = d.clipIntersection, p = d.clipShadows, h = i.get(d); if (!r || v === null || v.length === 0 || s && !p) s ? u(null) : c(); else { const A = s ? 0 : n, T = A * 4; let E = h.clippingState || null; l.value = E, E = u(v, f, T, m); for (let B = 0; B !== T; ++B)E[B] = e[B]; h.clippingState = E, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += A } }; function c () { l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0 } function u (d, f, m, v) { const M = d !== null ? d.length : 0; let p = null; if (M !== 0) { if (p = l.value, v !== !0 || p === null) { const h = m + M * 4, A = f.matrixWorldInverse; a.getNormalMatrix(A), (p === null || p.length < h) && (p = new Float32Array(h)); for (let T = 0, E = m; T !== M; ++T, E += 4)o.copy(d[T]).applyMatrix4(A, a), o.normal.toArray(p, E), p[E + 3] = o.constant } l.value = p, l.needsUpdate = !0 } return t.numPlanes = M, t.numIntersection = 0, p } } function od (i) { let t = new WeakMap; function e (o, a) { return a === ns ? o.mapping = ni : a === is && (o.mapping = ii), o } function n (o) { if (o && o.isTexture) { const a = o.mapping; if (a === ns || a === is) if (t.has(o)) { const l = t.get(o).texture; return e(l, o.mapping) } else { const l = o.image; if (l && l.height > 0) { const c = new vc(l.height); return c.fromEquirectangularTexture(i, o), t.set(o, c), o.addEventListener("dispose", r), e(c.texture, o.mapping) } else return null } } return o } function r (o) { const a = o.target; a.removeEventListener("dispose", r); const l = t.get(a); l !== void 0 && (t.delete(a), l.dispose()) } function s () { t = new WeakMap } return { get: n, dispose: s } } class Gs extends Po { constructor (t = -1, e = 1, n = 1, r = -1, s = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix() } copy (t, e) { return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this } setViewOffset (t, e, n, r, s, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset () { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix () { const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2; let s = n - t, o = n + t, a = r + e, l = r - e; if (this.view !== null && this.view.enabled) { const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom; s += c * this.view.offsetX, o = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height } this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON (t) { const e = super.toJSON(t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e } } const jn = 4, ba = [.125, .215, .35, .446, .526, .582], wn = 20, Fr = new Gs, wa = new Vt; let Or = null, Br = 0, zr = 0, Hr = !1; const An = (1 + Math.sqrt(5)) / 2, Kn = 1 / An, Ra = [new N(-An, Kn, 0), new N(An, Kn, 0), new N(-Kn, 0, An), new N(Kn, 0, An), new N(0, An, -Kn), new N(0, An, Kn), new N(-1, 1, -1), new N(1, 1, -1), new N(-1, 1, 1), new N(1, 1, 1)]; class Ca { constructor (t) { this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene (t, e = 0, n = .1, r = 100) { Or = this._renderer.getRenderTarget(), Br = this._renderer.getActiveCubeFace(), zr = this._renderer.getActiveMipmapLevel(), Hr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256); const s = this._allocateTargets(); return s.depthBuffer = !0, this._sceneToCubeUV(t, n, r, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s } fromEquirectangular (t, e = null) { return this._fromTexture(t, e) } fromCubemap (t, e = null) { return this._fromTexture(t, e) } compileCubemapShader () { this._cubemapMaterial === null && (this._cubemapMaterial = Da(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader () { this._equirectMaterial === null && (this._equirectMaterial = La(), this._compileMaterial(this._equirectMaterial)) } dispose () { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize (t) { this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose () { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let t = 0; t < this._lodPlanes.length; t++)this._lodPlanes[t].dispose() } _cleanup (t) { this._renderer.setRenderTarget(Or, Br, zr), this._renderer.xr.enabled = Hr, t.scissorTest = !1, Ji(t, 0, 0, t.width, t.height) } _fromTexture (t, e) { t.mapping === ni || t.mapping === ii ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Or = this._renderer.getRenderTarget(), Br = this._renderer.getActiveCubeFace(), zr = this._renderer.getActiveMipmapLevel(), Hr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; const n = e || this._allocateTargets(); return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets () { const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: Oe, minFilter: Oe, generateMipmaps: !1, type: wi, format: Ue, colorSpace: oi, depthBuffer: !1 }, r = Pa(t, e, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Pa(t, e, n); const { _lodMax: s } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ld(s)), this._blurMaterial = cd(s, t, e) } return r } _compileMaterial (t) { const e = new Be(this._lodPlanes[0], t); this._renderer.compile(e, Fr) } _sceneToCubeUV (t, e, n, r) { const a = new Le(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, f = u.toneMapping; u.getClearColor(wa), u.toneMapping = hn, u.autoClear = !1; const m = new bo({ name: "PMREM.Background", side: ge, depthWrite: !1, depthTest: !1 }), v = new Be(new ui, m); let M = !1; const p = t.background; p ? p.isColor && (m.color.copy(p), t.background = null, M = !0) : (m.color.copy(wa), M = !0); for (let h = 0; h < 6; h++) { const A = h % 3; A === 0 ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0)) : A === 1 ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0)) : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h])); const T = this._cubeSize; Ji(r, A * T, h > 2 ? T : 0, T, T), u.setRenderTarget(r), M && u.render(v, a), u.render(t, a) } v.geometry.dispose(), v.material.dispose(), u.toneMapping = f, u.autoClear = d, t.background = p } _textureToCubeUV (t, e) { const n = this._renderer, r = t.mapping === ni || t.mapping === ii; r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Da()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = La()); const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Be(this._lodPlanes[0], s), a = s.uniforms; a.envMap.value = t; const l = this._cubeSize; Ji(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, Fr) } _applyPMREM (t) { const e = this._renderer, n = e.autoClear; e.autoClear = !1; const r = this._lodPlanes.length; for (let s = 1; s < r; s++) { const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = Ra[(r - s - 1) % Ra.length]; this._blur(t, s - 1, s, o, a) } e.autoClear = n } _blur (t, e, n, r, s) { const o = this._pingPongRenderTarget; this._halfBlur(t, o, e, n, r, "latitudinal", s), this._halfBlur(o, t, n, n, r, "longitudinal", s) } _halfBlur (t, e, n, r, s, o, a) { const l = this._renderer, c = this._blurMaterial; o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const u = 3, d = new Be(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, v = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * wn - 1), M = s / v, p = isFinite(s) ? 1 + Math.floor(u * M) : wn; p > wn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wn}`); const h = []; let A = 0; for (let b = 0; b < wn; ++b) { const U = b / M, S = Math.exp(-U * U / 2); h.push(S), b === 0 ? A += S : b < p && (A += 2 * S) } for (let b = 0; b < h.length; b++)h[b] = h[b] / A; f.envMap.value = t.texture, f.samples.value = p, f.weights.value = h, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a); const { _lodMax: T } = this; f.dTheta.value = v, f.mipInt.value = T - n; const E = this._sizeLods[r], B = 3 * E * (r > T - jn ? r - T + jn : 0), C = 4 * (this._cubeSize - E); Ji(e, B, C, 3 * E, 2 * E), l.setRenderTarget(e), l.render(d, Fr) } } function ld (i) { const t = [], e = [], n = []; let r = i; const s = i - jn + 1 + ba.length; for (let o = 0; o < s; o++) { const a = Math.pow(2, r); e.push(a); let l = 1 / a; o > i - jn ? l = ba[o - i + jn - 1] : o === 0 && (l = 0), n.push(l); const c = 1 / (a - 2), u = -c, d = 1 + c, f = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, v = 6, M = 3, p = 2, h = 1, A = new Float32Array(M * v * m), T = new Float32Array(p * v * m), E = new Float32Array(h * v * m); for (let C = 0; C < m; C++) { const b = C % 3 * 2 / 3 - 1, U = C > 2 ? 0 : -1, S = [b, U, 0, b + 2 / 3, U, 0, b + 2 / 3, U + 1, 0, b, U, 0, b + 2 / 3, U + 1, 0, b, U + 1, 0]; A.set(S, M * v * C), T.set(f, p * v * C); const x = [C, C, C, C, C, C]; E.set(x, h * v * C) } const B = new Un; B.setAttribute("position", new ze(A, M)), B.setAttribute("uv", new ze(T, p)), B.setAttribute("faceIndex", new ze(E, h)), t.push(B), r > jn && r-- } return { lodPlanes: t, sizeLods: e, sigmas: n } } function Pa (i, t, e) { const n = new Dn(i, t, e); return n.texture.mapping = ur, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function Ji (i, t, e, n, r) { i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r) } function cd (i, t, e) {
	const n = new Float32Array(wn), r = new N(0, 1, 0); return new pn({
		name: "SphericalGaussianBlur", defines: { n: wn, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ks(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: un, depthTest: !1, depthWrite: !1
	})
} function La () {
	return new pn({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ks(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: un, depthTest: !1, depthWrite: !1
	})
} function Da () {
	return new pn({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ks(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: un, depthTest: !1, depthWrite: !1
	})
} function ks () {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function ud (i) { let t = new WeakMap, e = null; function n (a) { if (a && a.isTexture) { const l = a.mapping, c = l === ns || l === is, u = l === ni || l === ii; if (c || u) { let d = t.get(a); const f = d !== void 0 ? d.texture.pmremVersion : 0; if (a.isRenderTargetTexture && a.pmremVersion !== f) return e === null && (e = new Ca(i)), d = c ? e.fromEquirectangular(a, d) : e.fromCubemap(a, d), d.texture.pmremVersion = a.pmremVersion, t.set(a, d), d.texture; if (d !== void 0) return d.texture; { const m = a.image; return c && m && m.height > 0 || u && m && r(m) ? (e === null && (e = new Ca(i)), d = c ? e.fromEquirectangular(a) : e.fromCubemap(a), d.texture.pmremVersion = a.pmremVersion, t.set(a, d), a.addEventListener("dispose", s), d.texture) : null } } } return a } function r (a) { let l = 0; const c = 6; for (let u = 0; u < c; u++)a[u] !== void 0 && l++; return l === c } function s (a) { const l = a.target; l.removeEventListener("dispose", s); const c = t.get(l); c !== void 0 && (t.delete(l), c.dispose()) } function o () { t = new WeakMap, e !== null && (e.dispose(), e = null) } return { get: n, dispose: o } } function hd (i) { const t = {}; function e (n) { if (t[n] !== void 0) return t[n]; let r; switch (n) { case "WEBGL_depth_texture": r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: r = i.getExtension(n) }return t[n] = r, r } return { has: function (n) { return e(n) !== null }, init: function () { e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent") }, get: function (n) { const r = e(n); return r === null && vi("THREE.WebGLRenderer: " + n + " extension not supported."), r } } } function dd (i, t, e, n) { const r = {}, s = new WeakMap; function o (d) { const f = d.target; f.index !== null && t.remove(f.index); for (const v in f.attributes) t.remove(f.attributes[v]); for (const v in f.morphAttributes) { const M = f.morphAttributes[v]; for (let p = 0, h = M.length; p < h; p++)t.remove(M[p]) } f.removeEventListener("dispose", o), delete r[f.id]; const m = s.get(f); m && (t.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries-- } function a (d, f) { return r[f.id] === !0 || (f.addEventListener("dispose", o), r[f.id] = !0, e.memory.geometries++), f } function l (d) { const f = d.attributes; for (const v in f) t.update(f[v], i.ARRAY_BUFFER); const m = d.morphAttributes; for (const v in m) { const M = m[v]; for (let p = 0, h = M.length; p < h; p++)t.update(M[p], i.ARRAY_BUFFER) } } function c (d) { const f = [], m = d.index, v = d.attributes.position; let M = 0; if (m !== null) { const A = m.array; M = m.version; for (let T = 0, E = A.length; T < E; T += 3) { const B = A[T + 0], C = A[T + 1], b = A[T + 2]; f.push(B, C, C, b, b, B) } } else if (v !== void 0) { const A = v.array; M = v.version; for (let T = 0, E = A.length / 3 - 1; T < E; T += 3) { const B = T + 0, C = T + 1, b = T + 2; f.push(B, C, C, b, b, B) } } else return; const p = new (So(f) ? Ro : wo)(f, 1); p.version = M; const h = s.get(d); h && t.remove(h), s.set(d, p) } function u (d) { const f = s.get(d); if (f) { const m = d.index; m !== null && f.version < m.version && c(d) } else c(d); return s.get(d) } return { get: a, update: l, getWireframeAttribute: u } } function fd (i, t, e) { let n; function r (f) { n = f } let s, o; function a (f) { s = f.type, o = f.bytesPerElement } function l (f, m) { i.drawElements(n, m, s, f * o), e.update(m, n, 1) } function c (f, m, v) { v !== 0 && (i.drawElementsInstanced(n, m, s, f * o, v), e.update(m, n, v)) } function u (f, m, v) { if (v === 0) return; t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, f, 0, v); let p = 0; for (let h = 0; h < v; h++)p += m[h]; e.update(p, n, 1) } function d (f, m, v, M) { if (v === 0) return; const p = t.get("WEBGL_multi_draw"); if (p === null) for (let h = 0; h < f.length; h++)c(f[h] / o, m[h], M[h]); else { p.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, M, 0, v); let h = 0; for (let A = 0; A < v; A++)h += m[A] * M[A]; e.update(h, n, 1) } } this.setMode = r, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = d } function pd (i) { const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n (s, o, a) { switch (e.calls++, o) { case i.TRIANGLES: e.triangles += a * (s / 3); break; case i.LINES: e.lines += a * (s / 2); break; case i.LINE_STRIP: e.lines += a * (s - 1); break; case i.LINE_LOOP: e.lines += a * s; break; case i.POINTS: e.points += a * s; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } } function r () { e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0 } return { memory: t, render: e, programs: null, autoReset: !0, reset: r, update: n } } function md (i, t, e) { const n = new WeakMap, r = new ee; function s (o, a, l) { const c = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, d = u !== void 0 ? u.length : 0; let f = n.get(a); if (f === void 0 || f.count !== d) { let x = function () { U.dispose(), n.delete(a), a.removeEventListener("dispose", x) }; var m = x; f !== void 0 && f.texture.dispose(); const v = a.morphAttributes.position !== void 0, M = a.morphAttributes.normal !== void 0, p = a.morphAttributes.color !== void 0, h = a.morphAttributes.position || [], A = a.morphAttributes.normal || [], T = a.morphAttributes.color || []; let E = 0; v === !0 && (E = 1), M === !0 && (E = 2), p === !0 && (E = 3); let B = a.attributes.position.count * E, C = 1; B > t.maxTextureSize && (C = Math.ceil(B / t.maxTextureSize), B = t.maxTextureSize); const b = new Float32Array(B * C * 4 * d), U = new yo(b, B, C, d); U.type = $e, U.needsUpdate = !0; const S = E * 4; for (let w = 0; w < d; w++) { const k = h[w], z = A[w], Z = T[w], K = B * C * 4 * w; for (let X = 0; X < k.count; X++) { const j = X * S; v === !0 && (r.fromBufferAttribute(k, X), b[K + j + 0] = r.x, b[K + j + 1] = r.y, b[K + j + 2] = r.z, b[K + j + 3] = 0), M === !0 && (r.fromBufferAttribute(z, X), b[K + j + 4] = r.x, b[K + j + 5] = r.y, b[K + j + 6] = r.z, b[K + j + 7] = 0), p === !0 && (r.fromBufferAttribute(Z, X), b[K + j + 8] = r.x, b[K + j + 9] = r.y, b[K + j + 10] = r.z, b[K + j + 11] = Z.itemSize === 4 ? r.w : 1) } } f = { count: d, texture: U, size: new Wt(B, C) }, n.set(a, f), a.addEventListener("dispose", x) } if (o.isInstancedMesh === !0 && o.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", o.morphTexture, e); else { let v = 0; for (let p = 0; p < c.length; p++)v += c[p]; const M = a.morphTargetsRelative ? 1 : 1 - v; l.getUniforms().setValue(i, "morphTargetBaseInfluence", M), l.getUniforms().setValue(i, "morphTargetInfluences", c) } l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size) } return { update: s } } function _d (i, t, e, n) { let r = new WeakMap; function s (l) { const c = n.render.frame, u = l.geometry, d = t.get(l, u); if (r.get(d) !== c && (t.update(d), r.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) { const f = l.skeleton; r.get(f) !== c && (f.update(), r.set(f, c)) } return d } function o () { r = new WeakMap } function a (l) { const c = l.target; c.removeEventListener("dispose", a), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor) } return { update: s, dispose: o } } class Uo extends me { constructor (t, e, n, r, s, o, a, l, c, u = Qn) { if (u !== Qn && u !== si) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && u === Qn && (n = Ln), n === void 0 && u === si && (n = ri), super(null, r, s, o, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = a !== void 0 ? a : Ie, this.minFilter = l !== void 0 ? l : Ie, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy (t) { return super.copy(t), this.compareFunction = t.compareFunction, this } toJSON (t) { const e = super.toJSON(t); return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e } } const Io = new me, Ua = new Uo(1, 1), No = new yo, Fo = new ec, Oo = new Lo, Ia = [], Na = [], Fa = new Float32Array(16), Oa = new Float32Array(9), Ba = new Float32Array(4); function hi (i, t, e) { const n = i[0]; if (n <= 0 || n > 0) return i; const r = t * e; let s = Ia[r]; if (s === void 0 && (s = new Float32Array(r), Ia[r] = s), t !== 0) { n.toArray(s, 0); for (let o = 1, a = 0; o !== t; ++o)a += e, i[o].toArray(s, a) } return s } function se (i, t) { if (i.length !== t.length) return !1; for (let e = 0, n = i.length; e < n; e++)if (i[e] !== t[e]) return !1; return !0 } function ae (i, t) { for (let e = 0, n = t.length; e < n; e++)i[e] = t[e] } function fr (i, t) { let e = Na[t]; e === void 0 && (e = new Int32Array(t), Na[t] = e); for (let n = 0; n !== t; ++n)e[n] = i.allocateTextureUnit(); return e } function gd (i, t) { const e = this.cache; e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t) } function vd (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (se(e, t)) return; i.uniform2fv(this.addr, t), ae(e, t) } } function xd (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b); else { if (se(e, t)) return; i.uniform3fv(this.addr, t), ae(e, t) } } function Md (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (se(e, t)) return; i.uniform4fv(this.addr, t), ae(e, t) } } function Sd (i, t) { const e = this.cache, n = t.elements; if (n === void 0) { if (se(e, t)) return; i.uniformMatrix2fv(this.addr, !1, t), ae(e, t) } else { if (se(e, n)) return; Ba.set(n), i.uniformMatrix2fv(this.addr, !1, Ba), ae(e, n) } } function Ed (i, t) { const e = this.cache, n = t.elements; if (n === void 0) { if (se(e, t)) return; i.uniformMatrix3fv(this.addr, !1, t), ae(e, t) } else { if (se(e, n)) return; Oa.set(n), i.uniformMatrix3fv(this.addr, !1, Oa), ae(e, n) } } function yd (i, t) { const e = this.cache, n = t.elements; if (n === void 0) { if (se(e, t)) return; i.uniformMatrix4fv(this.addr, !1, t), ae(e, t) } else { if (se(e, n)) return; Fa.set(n), i.uniformMatrix4fv(this.addr, !1, Fa), ae(e, n) } } function Td (i, t) { const e = this.cache; e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t) } function Ad (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (se(e, t)) return; i.uniform2iv(this.addr, t), ae(e, t) } } function bd (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else { if (se(e, t)) return; i.uniform3iv(this.addr, t), ae(e, t) } } function wd (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (se(e, t)) return; i.uniform4iv(this.addr, t), ae(e, t) } } function Rd (i, t) { const e = this.cache; e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t) } function Cd (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else { if (se(e, t)) return; i.uniform2uiv(this.addr, t), ae(e, t) } } function Pd (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else { if (se(e, t)) return; i.uniform3uiv(this.addr, t), ae(e, t) } } function Ld (i, t) { const e = this.cache; if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else { if (se(e, t)) return; i.uniform4uiv(this.addr, t), ae(e, t) } } function Dd (i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r); let s; this.type === i.SAMPLER_2D_SHADOW ? (Ua.compareFunction = Mo, s = Ua) : s = Io, e.setTexture2D(t || s, r) } function Ud (i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || Fo, r) } function Id (i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || Oo, r) } function Nd (i, t, e) { const n = this.cache, r = e.allocateTextureUnit(); n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || No, r) } function Fd (i) { switch (i) { case 5126: return gd; case 35664: return vd; case 35665: return xd; case 35666: return Md; case 35674: return Sd; case 35675: return Ed; case 35676: return yd; case 5124: case 35670: return Td; case 35667: case 35671: return Ad; case 35668: case 35672: return bd; case 35669: case 35673: return wd; case 5125: return Rd; case 36294: return Cd; case 36295: return Pd; case 36296: return Ld; case 35678: case 36198: case 36298: case 36306: case 35682: return Dd; case 35679: case 36299: case 36307: return Ud; case 35680: case 36300: case 36308: case 36293: return Id; case 36289: case 36303: case 36311: case 36292: return Nd } } function Od (i, t) { i.uniform1fv(this.addr, t) } function Bd (i, t) { const e = hi(t, this.size, 2); i.uniform2fv(this.addr, e) } function zd (i, t) { const e = hi(t, this.size, 3); i.uniform3fv(this.addr, e) } function Hd (i, t) { const e = hi(t, this.size, 4); i.uniform4fv(this.addr, e) } function Vd (i, t) { const e = hi(t, this.size, 4); i.uniformMatrix2fv(this.addr, !1, e) } function Gd (i, t) { const e = hi(t, this.size, 9); i.uniformMatrix3fv(this.addr, !1, e) } function kd (i, t) { const e = hi(t, this.size, 16); i.uniformMatrix4fv(this.addr, !1, e) } function Wd (i, t) { i.uniform1iv(this.addr, t) } function Xd (i, t) { i.uniform2iv(this.addr, t) } function qd (i, t) { i.uniform3iv(this.addr, t) } function Yd (i, t) { i.uniform4iv(this.addr, t) } function Zd (i, t) { i.uniform1uiv(this.addr, t) } function Kd (i, t) { i.uniform2uiv(this.addr, t) } function $d (i, t) { i.uniform3uiv(this.addr, t) } function jd (i, t) { i.uniform4uiv(this.addr, t) } function Jd (i, t, e) { const n = this.cache, r = t.length, s = fr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTexture2D(t[o] || Io, s[o]) } function Qd (i, t, e) { const n = this.cache, r = t.length, s = fr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTexture3D(t[o] || Fo, s[o]) } function tf (i, t, e) { const n = this.cache, r = t.length, s = fr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTextureCube(t[o] || Oo, s[o]) } function ef (i, t, e) { const n = this.cache, r = t.length, s = fr(e, r); se(n, s) || (i.uniform1iv(this.addr, s), ae(n, s)); for (let o = 0; o !== r; ++o)e.setTexture2DArray(t[o] || No, s[o]) } function nf (i) { switch (i) { case 5126: return Od; case 35664: return Bd; case 35665: return zd; case 35666: return Hd; case 35674: return Vd; case 35675: return Gd; case 35676: return kd; case 5124: case 35670: return Wd; case 35667: case 35671: return Xd; case 35668: case 35672: return qd; case 35669: case 35673: return Yd; case 5125: return Zd; case 36294: return Kd; case 36295: return $d; case 36296: return jd; case 35678: case 36198: case 36298: case 36306: case 35682: return Jd; case 35679: case 36299: case 36307: return Qd; case 35680: case 36300: case 36308: case 36293: return tf; case 36289: case 36303: case 36311: case 36292: return ef } } class rf { constructor (t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Fd(e.type) } } class sf { constructor (t, e, n) { this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = nf(e.type) } } class af { constructor (t) { this.id = t, this.seq = [], this.map = {} } setValue (t, e, n) { const r = this.seq; for (let s = 0, o = r.length; s !== o; ++s) { const a = r[s]; a.setValue(t, e[a.id], n) } } } const Vr = /(\w+)(\])?(\[|\.)?/g; function za (i, t) { i.seq.push(t), i.map[t.id] = t } function of (i, t, e) { const n = i.name, r = n.length; for (Vr.lastIndex = 0; ;) { const s = Vr.exec(n), o = Vr.lastIndex; let a = s[1]; const l = s[2] === "]", c = s[3]; if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) { za(e, c === void 0 ? new rf(a, i, t) : new sf(a, i, t)); break } else { let d = e.map[a]; d === void 0 && (d = new af(a), za(e, d)), e = d } } } class or { constructor (t, e) { this.seq = [], this.map = {}; const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS); for (let r = 0; r < n; ++r) { const s = t.getActiveUniform(e, r), o = t.getUniformLocation(e, s.name); of(s, o, this) } } setValue (t, e, n, r) { const s = this.map[e]; s !== void 0 && s.setValue(t, n, r) } setOptional (t, e, n) { const r = e[n]; r !== void 0 && this.setValue(t, n, r) } static upload (t, e, n, r) { for (let s = 0, o = e.length; s !== o; ++s) { const a = e[s], l = n[a.id]; l.needsUpdate !== !1 && a.setValue(t, l.value, r) } } static seqWithValue (t, e) { const n = []; for (let r = 0, s = t.length; r !== s; ++r) { const o = t[r]; o.id in e && n.push(o) } return n } } function Ha (i, t, e) { const n = i.createShader(t); return i.shaderSource(n, e), i.compileShader(n), n } const lf = 37297; let cf = 0; function uf (i, t) {
	const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length); for (let o = r; o < s; o++) { const a = o + 1; n.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`) } return n.join(`
`)
} const Va = new Ct; function hf (i) { zt._getMatrix(Va, zt.workingColorSpace, i); const t = `mat3( ${Va.elements.map(e => e.toFixed(4))} )`; switch (zt.getTransfer(i)) { case hr: return [t, "LinearTransferOETF"]; case qt: return [t, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"] } } function Ga (i, t, e) {
	const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = i.getShaderInfoLog(t).trim(); if (n && r === "") return ""; const s = /ERROR: 0:(\d+)/.exec(r); if (s) {
		const o = parseInt(s[1]); return e.toUpperCase() + `

`+ r + `

`+ uf(i.getShaderSource(t), o)
	} else return r
} function df (i, t) {
	const e = hf(t); return [`vec4 ${i}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`)
} function ff (i, t) { let e; switch (t) { case fl: e = "Linear"; break; case pl: e = "Reinhard"; break; case ml: e = "Cineon"; break; case _l: e = "ACESFilmic"; break; case vl: e = "AgX"; break; case xl: e = "Neutral"; break; case gl: e = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear" }return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }" } const Qi = new N; function pf () {
	zt.getLuminanceCoefficients(Qi); const i = Qi.x.toFixed(4), t = Qi.y.toFixed(4), e = Qi.z.toFixed(4); return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`)
} function mf (i) {
	return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(xi).join(`
`)
} function _f (i) {
	const t = []; for (const e in i) { const n = i[e]; n !== !1 && t.push("#define " + e + " " + n) } return t.join(`
`)
} function gf (i, t) { const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES); for (let r = 0; r < n; r++) { const s = i.getActiveAttrib(t, r), o = s.name; let a = 1; s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), e[o] = { type: s.type, location: i.getAttribLocation(t, o), locationSize: a } } return e } function xi (i) { return i !== "" } function ka (i, t) { const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps; return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows) } function Wa (i, t) { return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection) } const vf = /^[ \t]*#include +<([\w\d./]+)>/gm; function Ls (i) { return i.replace(vf, Mf) } const xf = new Map; function Mf (i, t) { let e = Lt[t]; if (e === void 0) { const n = xf.get(t); if (n !== void 0) e = Lt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n); else throw new Error("Can not resolve #include <" + t + ">") } return Ls(e) } const Sf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function Xa (i) { return i.replace(Sf, Ef) } function Ef (i, t, e, n) { let r = ""; for (let s = parseInt(t); s < parseInt(e); s++)r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s); return r } function qa (i) {
	let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`; return i.precision === "highp" ? t += `
#define HIGH_PRECISION`: i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION`: i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t
} function yf (i) { let t = "SHADOWMAP_TYPE_BASIC"; return i.shadowMapType === so ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === qo ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Ze && (t = "SHADOWMAP_TYPE_VSM"), t } function Tf (i) { let t = "ENVMAP_TYPE_CUBE"; if (i.envMap) switch (i.envMapMode) { case ni: case ii: t = "ENVMAP_TYPE_CUBE"; break; case ur: t = "ENVMAP_TYPE_CUBE_UV"; break }return t } function Af (i) { let t = "ENVMAP_MODE_REFLECTION"; if (i.envMap) switch (i.envMapMode) { case ii: t = "ENVMAP_MODE_REFRACTION"; break }return t } function bf (i) { let t = "ENVMAP_BLENDING_NONE"; if (i.envMap) switch (i.combine) { case ao: t = "ENVMAP_BLENDING_MULTIPLY"; break; case hl: t = "ENVMAP_BLENDING_MIX"; break; case dl: t = "ENVMAP_BLENDING_ADD"; break }return t } function wf (i) { const t = i.envMapCubeUVHeight; if (t === null) return null; const e = Math.log2(t) - 2, n = 1 / t; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e } } function Rf (i, t, e, n) {
	const r = i.getContext(), s = e.defines; let o = e.vertexShader, a = e.fragmentShader; const l = yf(e), c = Tf(e), u = Af(e), d = bf(e), f = wf(e), m = mf(e), v = _f(s), M = r.createProgram(); let p, h, A = e.glslVersion ? "#version " + e.glslVersion + `
`: ""; e.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v].filter(xi).join(`
`), p.length > 0 && (p += `
`), h = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v].filter(xi).join(`
`), h.length > 0 && (h += `
`)) : (p = [qa(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + u : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(xi).join(`
`), h = [qa(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + u : "", e.envMap ? "#define " + d : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== hn ? "#define TONE_MAPPING" : "", e.toneMapping !== hn ? Lt.tonemapping_pars_fragment : "", e.toneMapping !== hn ? ff("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Lt.colorspace_pars_fragment, df("linearToOutputTexel", e.outputColorSpace), pf(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(xi).join(`
`)), o = Ls(o), o = ka(o, e), o = Wa(o, e), a = Ls(a), a = ka(a, e), a = Wa(a, e), o = Xa(o), a = Xa(a), e.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ p, h = ["#define varying in", e.glslVersion === ra ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === ra ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ h); const T = A + p + o, E = A + h + a, B = Ha(r, r.VERTEX_SHADER, T), C = Ha(r, r.FRAGMENT_SHADER, E); r.attachShader(M, B), r.attachShader(M, C), e.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M); function b (w) {
		if (i.debug.checkShaderErrors) {
			const k = r.getProgramInfoLog(M).trim(), z = r.getShaderInfoLog(B).trim(), Z = r.getShaderInfoLog(C).trim(); let K = !0, X = !0; if (r.getProgramParameter(M, r.LINK_STATUS) === !1) if (K = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, M, B, C); else {
				const j = Ga(r, B, "vertex"), V = Ga(r, C, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: `+ w.name + `
Material Type: `+ w.type + `

Program Info Log: `+ k + `
`+ j + `
`+ V)
			} else k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (z === "" || Z === "") && (X = !1); X && (w.diagnostics = { runnable: K, programLog: k, vertexShader: { log: z, prefix: p }, fragmentShader: { log: Z, prefix: h } })
		} r.deleteShader(B), r.deleteShader(C), U = new or(r, M), S = gf(r, M)
	} let U; this.getUniforms = function () { return U === void 0 && b(this), U }; let S; this.getAttributes = function () { return S === void 0 && b(this), S }; let x = e.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return x === !1 && (x = r.getProgramParameter(M, lf)), x }, this.destroy = function () { n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0 }, this.type = e.shaderType, this.name = e.shaderName, this.id = cf++, this.cacheKey = t, this.usedTimes = 1, this.program = M, this.vertexShader = B, this.fragmentShader = C, this
} let Cf = 0; class Pf { constructor () { this.shaderCache = new Map, this.materialCache = new Map } update (t) { const e = t.vertexShader, n = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(t); return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this } remove (t) { const e = this.materialCache.get(t); for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(t), this } getVertexShaderID (t) { return this._getShaderStage(t.vertexShader).id } getFragmentShaderID (t) { return this._getShaderStage(t.fragmentShader).id } dispose () { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial (t) { const e = this.materialCache; let n = e.get(t); return n === void 0 && (n = new Set, e.set(t, n)), n } _getShaderStage (t) { const e = this.shaderCache; let n = e.get(t); return n === void 0 && (n = new Lf(t), e.set(t, n)), n } } class Lf { constructor (t) { this.id = Cf++, this.code = t, this.usedTimes = 0 } } function Df (i, t, e, n, r, s, o) { const a = new To, l = new Pf, c = new Set, u = [], d = r.logarithmicDepthBuffer, f = r.vertexTextures; let m = r.precision; const v = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function M (S) { return c.add(S), S === 0 ? "uv" : `uv${S}` } function p (S, x, w, k, z) { const Z = k.fog, K = z.geometry, X = S.isMeshStandardMaterial ? k.environment : null, j = (S.isMeshStandardMaterial ? e : t).get(S.envMap || X), V = j && j.mapping === ur ? j.image.height : null, it = v[S.type]; S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead.")); const ct = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, xt = ct !== void 0 ? ct.length : 0; let Dt = 0; K.morphAttributes.position !== void 0 && (Dt = 1), K.morphAttributes.normal !== void 0 && (Dt = 2), K.morphAttributes.color !== void 0 && (Dt = 3); let Yt, W, tt, _t; if (it) { const Xt = Fe[it]; Yt = Xt.vertexShader, W = Xt.fragmentShader } else Yt = S.vertexShader, W = S.fragmentShader, l.update(S), tt = l.getVertexShaderID(S), _t = l.getFragmentShaderID(S); const rt = i.getRenderTarget(), yt = i.state.buffers.depth.getReversed(), bt = z.isInstancedMesh === !0, Ut = z.isBatchedMesh === !0, Qt = !!S.map, Ot = !!S.matcap, ie = !!j, D = !!S.aoMap, Ee = !!S.lightMap, It = !!S.bumpMap, Nt = !!S.normalMap, St = !!S.displacementMap, $t = !!S.emissiveMap, Mt = !!S.metalnessMap, y = !!S.roughnessMap, _ = S.anisotropy > 0, I = S.clearcoat > 0, q = S.dispersion > 0, $ = S.iridescence > 0, G = S.sheen > 0, gt = S.transmission > 0, st = _ && !!S.anisotropyMap, ut = I && !!S.clearcoatMap, Bt = I && !!S.clearcoatNormalMap, J = I && !!S.clearcoatRoughnessMap, ht = $ && !!S.iridescenceMap, Et = $ && !!S.iridescenceThicknessMap, Tt = G && !!S.sheenColorMap, dt = G && !!S.sheenRoughnessMap, Ft = !!S.specularMap, Pt = !!S.specularColorMap, Zt = !!S.specularIntensityMap, R = gt && !!S.transmissionMap, nt = gt && !!S.thicknessMap, H = !!S.gradientMap, Y = !!S.alphaMap, lt = S.alphaTest > 0, at = !!S.alphaHash, wt = !!S.extensions; let te = hn; S.toneMapped && (rt === null || rt.isXRRenderTarget === !0) && (te = i.toneMapping); const ce = { shaderID: it, shaderType: S.type, shaderName: S.name, vertexShader: Yt, fragmentShader: W, defines: S.defines, customVertexShaderID: tt, customFragmentShaderID: _t, isRawShaderMaterial: S.isRawShaderMaterial === !0, glslVersion: S.glslVersion, precision: m, batching: Ut, batchingColor: Ut && z._colorsTexture !== null, instancing: bt, instancingColor: bt && z.instanceColor !== null, instancingMorph: bt && z.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: rt === null ? i.outputColorSpace : rt.isXRRenderTarget === !0 ? rt.texture.colorSpace : oi, alphaToCoverage: !!S.alphaToCoverage, map: Qt, matcap: Ot, envMap: ie, envMapMode: ie && j.mapping, envMapCubeUVHeight: V, aoMap: D, lightMap: Ee, bumpMap: It, normalMap: Nt, displacementMap: f && St, emissiveMap: $t, normalMapObjectSpace: Nt && S.normalMapType === yl, normalMapTangentSpace: Nt && S.normalMapType === xo, metalnessMap: Mt, roughnessMap: y, anisotropy: _, anisotropyMap: st, clearcoat: I, clearcoatMap: ut, clearcoatNormalMap: Bt, clearcoatRoughnessMap: J, dispersion: q, iridescence: $, iridescenceMap: ht, iridescenceThicknessMap: Et, sheen: G, sheenColorMap: Tt, sheenRoughnessMap: dt, specularMap: Ft, specularColorMap: Pt, specularIntensityMap: Zt, transmission: gt, transmissionMap: R, thicknessMap: nt, gradientMap: H, opaque: S.transparent === !1 && S.blending === Jn && S.alphaToCoverage === !1, alphaMap: Y, alphaTest: lt, alphaHash: at, combine: S.combine, mapUv: Qt && M(S.map.channel), aoMapUv: D && M(S.aoMap.channel), lightMapUv: Ee && M(S.lightMap.channel), bumpMapUv: It && M(S.bumpMap.channel), normalMapUv: Nt && M(S.normalMap.channel), displacementMapUv: St && M(S.displacementMap.channel), emissiveMapUv: $t && M(S.emissiveMap.channel), metalnessMapUv: Mt && M(S.metalnessMap.channel), roughnessMapUv: y && M(S.roughnessMap.channel), anisotropyMapUv: st && M(S.anisotropyMap.channel), clearcoatMapUv: ut && M(S.clearcoatMap.channel), clearcoatNormalMapUv: Bt && M(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: J && M(S.clearcoatRoughnessMap.channel), iridescenceMapUv: ht && M(S.iridescenceMap.channel), iridescenceThicknessMapUv: Et && M(S.iridescenceThicknessMap.channel), sheenColorMapUv: Tt && M(S.sheenColorMap.channel), sheenRoughnessMapUv: dt && M(S.sheenRoughnessMap.channel), specularMapUv: Ft && M(S.specularMap.channel), specularColorMapUv: Pt && M(S.specularColorMap.channel), specularIntensityMapUv: Zt && M(S.specularIntensityMap.channel), transmissionMapUv: R && M(S.transmissionMap.channel), thicknessMapUv: nt && M(S.thicknessMap.channel), alphaMapUv: Y && M(S.alphaMap.channel), vertexTangents: !!K.attributes.tangent && (Nt || _), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4, pointsUvs: z.isPoints === !0 && !!K.attributes.uv && (Qt || Y), fog: !!Z, useFog: S.fog === !0, fogExp2: !!Z && Z.isFogExp2, flatShading: S.flatShading === !0, sizeAttenuation: S.sizeAttenuation === !0, logarithmicDepthBuffer: d, reverseDepthBuffer: yt, skinning: z.isSkinnedMesh === !0, morphTargets: K.morphAttributes.position !== void 0, morphNormals: K.morphAttributes.normal !== void 0, morphColors: K.morphAttributes.color !== void 0, morphTargetsCount: xt, morphTextureStride: Dt, numDirLights: x.directional.length, numPointLights: x.point.length, numSpotLights: x.spot.length, numSpotLightMaps: x.spotLightMap.length, numRectAreaLights: x.rectArea.length, numHemiLights: x.hemi.length, numDirLightShadows: x.directionalShadowMap.length, numPointLightShadows: x.pointShadowMap.length, numSpotLightShadows: x.spotShadowMap.length, numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps, numLightProbes: x.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: S.dithering, shadowMapEnabled: i.shadowMap.enabled && w.length > 0, shadowMapType: i.shadowMap.type, toneMapping: te, decodeVideoTexture: Qt && S.map.isVideoTexture === !0 && zt.getTransfer(S.map.colorSpace) === qt, decodeVideoTextureEmissive: $t && S.emissiveMap.isVideoTexture === !0 && zt.getTransfer(S.emissiveMap.colorSpace) === qt, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === Ke, flipSided: S.side === ge, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: wt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (wt && S.extensions.multiDraw === !0 || Ut) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() }; return ce.vertexUv1s = c.has(1), ce.vertexUv2s = c.has(2), ce.vertexUv3s = c.has(3), c.clear(), ce } function h (S) { const x = []; if (S.shaderID ? x.push(S.shaderID) : (x.push(S.customVertexShaderID), x.push(S.customFragmentShaderID)), S.defines !== void 0) for (const w in S.defines) x.push(w), x.push(S.defines[w]); return S.isRawShaderMaterial === !1 && (A(x, S), T(x, S), x.push(i.outputColorSpace)), x.push(S.customProgramCacheKey), x.join() } function A (S, x) { S.push(x.precision), S.push(x.outputColorSpace), S.push(x.envMapMode), S.push(x.envMapCubeUVHeight), S.push(x.mapUv), S.push(x.alphaMapUv), S.push(x.lightMapUv), S.push(x.aoMapUv), S.push(x.bumpMapUv), S.push(x.normalMapUv), S.push(x.displacementMapUv), S.push(x.emissiveMapUv), S.push(x.metalnessMapUv), S.push(x.roughnessMapUv), S.push(x.anisotropyMapUv), S.push(x.clearcoatMapUv), S.push(x.clearcoatNormalMapUv), S.push(x.clearcoatRoughnessMapUv), S.push(x.iridescenceMapUv), S.push(x.iridescenceThicknessMapUv), S.push(x.sheenColorMapUv), S.push(x.sheenRoughnessMapUv), S.push(x.specularMapUv), S.push(x.specularColorMapUv), S.push(x.specularIntensityMapUv), S.push(x.transmissionMapUv), S.push(x.thicknessMapUv), S.push(x.combine), S.push(x.fogExp2), S.push(x.sizeAttenuation), S.push(x.morphTargetsCount), S.push(x.morphAttributeCount), S.push(x.numDirLights), S.push(x.numPointLights), S.push(x.numSpotLights), S.push(x.numSpotLightMaps), S.push(x.numHemiLights), S.push(x.numRectAreaLights), S.push(x.numDirLightShadows), S.push(x.numPointLightShadows), S.push(x.numSpotLightShadows), S.push(x.numSpotLightShadowsWithMaps), S.push(x.numLightProbes), S.push(x.shadowMapType), S.push(x.toneMapping), S.push(x.numClippingPlanes), S.push(x.numClipIntersection), S.push(x.depthPacking) } function T (S, x) { a.disableAll(), x.supportsVertexTextures && a.enable(0), x.instancing && a.enable(1), x.instancingColor && a.enable(2), x.instancingMorph && a.enable(3), x.matcap && a.enable(4), x.envMap && a.enable(5), x.normalMapObjectSpace && a.enable(6), x.normalMapTangentSpace && a.enable(7), x.clearcoat && a.enable(8), x.iridescence && a.enable(9), x.alphaTest && a.enable(10), x.vertexColors && a.enable(11), x.vertexAlphas && a.enable(12), x.vertexUv1s && a.enable(13), x.vertexUv2s && a.enable(14), x.vertexUv3s && a.enable(15), x.vertexTangents && a.enable(16), x.anisotropy && a.enable(17), x.alphaHash && a.enable(18), x.batching && a.enable(19), x.dispersion && a.enable(20), x.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), x.fog && a.enable(0), x.useFog && a.enable(1), x.flatShading && a.enable(2), x.logarithmicDepthBuffer && a.enable(3), x.reverseDepthBuffer && a.enable(4), x.skinning && a.enable(5), x.morphTargets && a.enable(6), x.morphNormals && a.enable(7), x.morphColors && a.enable(8), x.premultipliedAlpha && a.enable(9), x.shadowMapEnabled && a.enable(10), x.doubleSided && a.enable(11), x.flipSided && a.enable(12), x.useDepthPacking && a.enable(13), x.dithering && a.enable(14), x.transmission && a.enable(15), x.sheen && a.enable(16), x.opaque && a.enable(17), x.pointsUvs && a.enable(18), x.decodeVideoTexture && a.enable(19), x.decodeVideoTextureEmissive && a.enable(20), x.alphaToCoverage && a.enable(21), S.push(a.mask) } function E (S) { const x = v[S.type]; let w; if (x) { const k = Fe[x]; w = pc.clone(k.uniforms) } else w = S.uniforms; return w } function B (S, x) { let w; for (let k = 0, z = u.length; k < z; k++) { const Z = u[k]; if (Z.cacheKey === x) { w = Z, ++w.usedTimes; break } } return w === void 0 && (w = new Rf(i, x, S, s), u.push(w)), w } function C (S) { if (--S.usedTimes === 0) { const x = u.indexOf(S); u[x] = u[u.length - 1], u.pop(), S.destroy() } } function b (S) { l.remove(S) } function U () { l.dispose() } return { getParameters: p, getProgramCacheKey: h, getUniforms: E, acquireProgram: B, releaseProgram: C, releaseShaderCache: b, programs: u, dispose: U } } function Uf () { let i = new WeakMap; function t (o) { return i.has(o) } function e (o) { let a = i.get(o); return a === void 0 && (a = {}, i.set(o, a)), a } function n (o) { i.delete(o) } function r (o, a, l) { i.get(o)[a] = l } function s () { i = new WeakMap } return { has: t, get: e, remove: n, update: r, dispose: s } } function If (i, t) { return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id } function Ya (i, t) { return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id } function Za () { const i = []; let t = 0; const e = [], n = [], r = []; function s () { t = 0, e.length = 0, n.length = 0, r.length = 0 } function o (d, f, m, v, M, p) { let h = i[t]; return h === void 0 ? (h = { id: d.id, object: d, geometry: f, material: m, groupOrder: v, renderOrder: d.renderOrder, z: M, group: p }, i[t] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = m, h.groupOrder = v, h.renderOrder = d.renderOrder, h.z = M, h.group = p), t++, h } function a (d, f, m, v, M, p) { const h = o(d, f, m, v, M, p); m.transmission > 0 ? n.push(h) : m.transparent === !0 ? r.push(h) : e.push(h) } function l (d, f, m, v, M, p) { const h = o(d, f, m, v, M, p); m.transmission > 0 ? n.unshift(h) : m.transparent === !0 ? r.unshift(h) : e.unshift(h) } function c (d, f) { e.length > 1 && e.sort(d || If), n.length > 1 && n.sort(f || Ya), r.length > 1 && r.sort(f || Ya) } function u () { for (let d = t, f = i.length; d < f; d++) { const m = i[d]; if (m.id === null) break; m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null } } return { opaque: e, transmissive: n, transparent: r, init: s, push: a, unshift: l, finish: u, sort: c } } function Nf () { let i = new WeakMap; function t (n, r) { const s = i.get(n); let o; return s === void 0 ? (o = new Za, i.set(n, [o])) : r >= s.length ? (o = new Za, s.push(o)) : o = s[r], o } function e () { i = new WeakMap } return { get: t, dispose: e } } function Ff () { const i = {}; return { get: function (t) { if (i[t.id] !== void 0) return i[t.id]; let e; switch (t.type) { case "DirectionalLight": e = { direction: new N, color: new Vt }; break; case "SpotLight": e = { position: new N, direction: new N, color: new Vt, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": e = { position: new N, color: new Vt, distance: 0, decay: 0 }; break; case "HemisphereLight": e = { direction: new N, skyColor: new Vt, groundColor: new Vt }; break; case "RectAreaLight": e = { color: new Vt, position: new N, halfWidth: new N, halfHeight: new N }; break }return i[t.id] = e, e } } } function Of () { const i = {}; return { get: function (t) { if (i[t.id] !== void 0) return i[t.id]; let e; switch (t.type) { case "DirectionalLight": e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Wt }; break; case "SpotLight": e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Wt }; break; case "PointLight": e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Wt, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return i[t.id] = e, e } } } let Bf = 0; function zf (i, t) { return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0) } function Hf (i) { const t = new Ff, e = Of(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let c = 0; c < 9; c++)n.probe.push(new N); const r = new N, s = new ne, o = new ne; function a (c) { let u = 0, d = 0, f = 0; for (let S = 0; S < 9; S++)n.probe[S].set(0, 0, 0); let m = 0, v = 0, M = 0, p = 0, h = 0, A = 0, T = 0, E = 0, B = 0, C = 0, b = 0; c.sort(zf); for (let S = 0, x = c.length; S < x; S++) { const w = c[S], k = w.color, z = w.intensity, Z = w.distance, K = w.shadow && w.shadow.map ? w.shadow.map.texture : null; if (w.isAmbientLight) u += k.r * z, d += k.g * z, f += k.b * z; else if (w.isLightProbe) { for (let X = 0; X < 9; X++)n.probe[X].addScaledVector(w.sh.coefficients[X], z); b++ } else if (w.isDirectionalLight) { const X = t.get(w); if (X.color.copy(w.color).multiplyScalar(w.intensity), w.castShadow) { const j = w.shadow, V = e.get(w); V.shadowIntensity = j.intensity, V.shadowBias = j.bias, V.shadowNormalBias = j.normalBias, V.shadowRadius = j.radius, V.shadowMapSize = j.mapSize, n.directionalShadow[m] = V, n.directionalShadowMap[m] = K, n.directionalShadowMatrix[m] = w.shadow.matrix, A++ } n.directional[m] = X, m++ } else if (w.isSpotLight) { const X = t.get(w); X.position.setFromMatrixPosition(w.matrixWorld), X.color.copy(k).multiplyScalar(z), X.distance = Z, X.coneCos = Math.cos(w.angle), X.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)), X.decay = w.decay, n.spot[M] = X; const j = w.shadow; if (w.map && (n.spotLightMap[B] = w.map, B++, j.updateMatrices(w), w.castShadow && C++), n.spotLightMatrix[M] = j.matrix, w.castShadow) { const V = e.get(w); V.shadowIntensity = j.intensity, V.shadowBias = j.bias, V.shadowNormalBias = j.normalBias, V.shadowRadius = j.radius, V.shadowMapSize = j.mapSize, n.spotShadow[M] = V, n.spotShadowMap[M] = K, E++ } M++ } else if (w.isRectAreaLight) { const X = t.get(w); X.color.copy(k).multiplyScalar(z), X.halfWidth.set(w.width * .5, 0, 0), X.halfHeight.set(0, w.height * .5, 0), n.rectArea[p] = X, p++ } else if (w.isPointLight) { const X = t.get(w); if (X.color.copy(w.color).multiplyScalar(w.intensity), X.distance = w.distance, X.decay = w.decay, w.castShadow) { const j = w.shadow, V = e.get(w); V.shadowIntensity = j.intensity, V.shadowBias = j.bias, V.shadowNormalBias = j.normalBias, V.shadowRadius = j.radius, V.shadowMapSize = j.mapSize, V.shadowCameraNear = j.camera.near, V.shadowCameraFar = j.camera.far, n.pointShadow[v] = V, n.pointShadowMap[v] = K, n.pointShadowMatrix[v] = w.shadow.matrix, T++ } n.point[v] = X, v++ } else if (w.isHemisphereLight) { const X = t.get(w); X.skyColor.copy(w.color).multiplyScalar(z), X.groundColor.copy(w.groundColor).multiplyScalar(z), n.hemi[h] = X, h++ } } p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = et.LTC_FLOAT_1, n.rectAreaLTC2 = et.LTC_FLOAT_2) : (n.rectAreaLTC1 = et.LTC_HALF_1, n.rectAreaLTC2 = et.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f; const U = n.hash; (U.directionalLength !== m || U.pointLength !== v || U.spotLength !== M || U.rectAreaLength !== p || U.hemiLength !== h || U.numDirectionalShadows !== A || U.numPointShadows !== T || U.numSpotShadows !== E || U.numSpotMaps !== B || U.numLightProbes !== b) && (n.directional.length = m, n.spot.length = M, n.rectArea.length = p, n.point.length = v, n.hemi.length = h, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = E + B - C, n.spotLightMap.length = B, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = b, U.directionalLength = m, U.pointLength = v, U.spotLength = M, U.rectAreaLength = p, U.hemiLength = h, U.numDirectionalShadows = A, U.numPointShadows = T, U.numSpotShadows = E, U.numSpotMaps = B, U.numLightProbes = b, n.version = Bf++) } function l (c, u) { let d = 0, f = 0, m = 0, v = 0, M = 0; const p = u.matrixWorldInverse; for (let h = 0, A = c.length; h < A; h++) { const T = c[h]; if (T.isDirectionalLight) { const E = n.directional[d]; E.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(p), d++ } else if (T.isSpotLight) { const E = n.spot[m]; E.position.setFromMatrixPosition(T.matrixWorld), E.position.applyMatrix4(p), E.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(p), m++ } else if (T.isRectAreaLight) { const E = n.rectArea[v]; E.position.setFromMatrixPosition(T.matrixWorld), E.position.applyMatrix4(p), o.identity(), s.copy(T.matrixWorld), s.premultiply(p), o.extractRotation(s), E.halfWidth.set(T.width * .5, 0, 0), E.halfHeight.set(0, T.height * .5, 0), E.halfWidth.applyMatrix4(o), E.halfHeight.applyMatrix4(o), v++ } else if (T.isPointLight) { const E = n.point[f]; E.position.setFromMatrixPosition(T.matrixWorld), E.position.applyMatrix4(p), f++ } else if (T.isHemisphereLight) { const E = n.hemi[M]; E.direction.setFromMatrixPosition(T.matrixWorld), E.direction.transformDirection(p), M++ } } } return { setup: a, setupView: l, state: n } } function Ka (i) { const t = new Hf(i), e = [], n = []; function r (u) { c.camera = u, e.length = 0, n.length = 0 } function s (u) { e.push(u) } function o (u) { n.push(u) } function a () { t.setup(e) } function l (u) { t.setupView(e, u) } const c = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} }; return { init: r, state: c, setupLights: a, setupLightsView: l, pushLight: s, pushShadow: o } } function Vf (i) { let t = new WeakMap; function e (r, s = 0) { const o = t.get(r); let a; return o === void 0 ? (a = new Ka(i), t.set(r, [a])) : s >= o.length ? (a = new Ka(i), o.push(a)) : a = o[s], a } function n () { t = new WeakMap } return { get: e, dispose: n } } class Gf extends Ci { static get type () { return "MeshDepthMaterial" } constructor (t) { super(), this.isMeshDepthMaterial = !0, this.depthPacking = Sl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t) } copy (t) { return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this } } class kf extends Ci { static get type () { return "MeshDistanceMaterial" } constructor (t) { super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t) } copy (t) { return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this } } const Wf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Xf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function qf (i, t, e) { let n = new Vs; const r = new Wt, s = new Wt, o = new ee, a = new Gf({ depthPacking: El }), l = new kf, c = {}, u = e.maxTextureSize, d = { [dn]: ge, [ge]: dn, [Ke]: Ke }, f = new pn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Wt }, radius: { value: 4 } }, vertexShader: Wf, fragmentShader: Xf }), m = f.clone(); m.defines.HORIZONTAL_PASS = 1; const v = new Un; v.setAttribute("position", new ze(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const M = new Be(v, f), p = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = so; let h = this.type; this.render = function (C, b, U) { if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || C.length === 0) return; const S = i.getRenderTarget(), x = i.getActiveCubeFace(), w = i.getActiveMipmapLevel(), k = i.state; k.setBlending(un), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1); const z = h !== Ze && this.type === Ze, Z = h === Ze && this.type !== Ze; for (let K = 0, X = C.length; K < X; K++) { const j = C[K], V = j.shadow; if (V === void 0) { console.warn("THREE.WebGLShadowMap:", j, "has no shadow."); continue } if (V.autoUpdate === !1 && V.needsUpdate === !1) continue; r.copy(V.mapSize); const it = V.getFrameExtents(); if (r.multiply(it), s.copy(V.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / it.x), r.x = s.x * it.x, V.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / it.y), r.y = s.y * it.y, V.mapSize.y = s.y)), V.map === null || z === !0 || Z === !0) { const xt = this.type !== Ze ? { minFilter: Ie, magFilter: Ie } : {}; V.map !== null && V.map.dispose(), V.map = new Dn(r.x, r.y, xt), V.map.texture.name = j.name + ".shadowMap", V.camera.updateProjectionMatrix() } i.setRenderTarget(V.map), i.clear(); const ct = V.getViewportCount(); for (let xt = 0; xt < ct; xt++) { const Dt = V.getViewport(xt); o.set(s.x * Dt.x, s.y * Dt.y, s.x * Dt.z, s.y * Dt.w), k.viewport(o), V.updateMatrices(j, xt), n = V.getFrustum(), E(b, U, V.camera, j, this.type) } V.isPointLightShadow !== !0 && this.type === Ze && A(V, U), V.needsUpdate = !1 } h = this.type, p.needsUpdate = !1, i.setRenderTarget(S, x, w) }; function A (C, b) { const U = t.update(M); f.defines.VSM_SAMPLES !== C.blurSamples && (f.defines.VSM_SAMPLES = C.blurSamples, m.defines.VSM_SAMPLES = C.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), C.mapPass === null && (C.mapPass = new Dn(r.x, r.y)), f.uniforms.shadow_pass.value = C.map.texture, f.uniforms.resolution.value = C.mapSize, f.uniforms.radius.value = C.radius, i.setRenderTarget(C.mapPass), i.clear(), i.renderBufferDirect(b, null, U, f, M, null), m.uniforms.shadow_pass.value = C.mapPass.texture, m.uniforms.resolution.value = C.mapSize, m.uniforms.radius.value = C.radius, i.setRenderTarget(C.map), i.clear(), i.renderBufferDirect(b, null, U, m, M, null) } function T (C, b, U, S) { let x = null; const w = U.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial; if (w !== void 0) x = w; else if (x = U.isPointLight === !0 ? l : a, i.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) { const k = x.uuid, z = b.uuid; let Z = c[k]; Z === void 0 && (Z = {}, c[k] = Z); let K = Z[z]; K === void 0 && (K = x.clone(), Z[z] = K, b.addEventListener("dispose", B)), x = K } if (x.visible = b.visible, x.wireframe = b.wireframe, S === Ze ? x.side = b.shadowSide !== null ? b.shadowSide : b.side : x.side = b.shadowSide !== null ? b.shadowSide : d[b.side], x.alphaMap = b.alphaMap, x.alphaTest = b.alphaTest, x.map = b.map, x.clipShadows = b.clipShadows, x.clippingPlanes = b.clippingPlanes, x.clipIntersection = b.clipIntersection, x.displacementMap = b.displacementMap, x.displacementScale = b.displacementScale, x.displacementBias = b.displacementBias, x.wireframeLinewidth = b.wireframeLinewidth, x.linewidth = b.linewidth, U.isPointLight === !0 && x.isMeshDistanceMaterial === !0) { const k = i.properties.get(x); k.light = U } return x } function E (C, b, U, S, x) { if (C.visible === !1) return; if (C.layers.test(b.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && x === Ze) && (!C.frustumCulled || n.intersectsObject(C))) { C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, C.matrixWorld); const z = t.update(C), Z = C.material; if (Array.isArray(Z)) { const K = z.groups; for (let X = 0, j = K.length; X < j; X++) { const V = K[X], it = Z[V.materialIndex]; if (it && it.visible) { const ct = T(C, it, S, x); C.onBeforeShadow(i, C, b, U, z, ct, V), i.renderBufferDirect(U, null, z, ct, C, V), C.onAfterShadow(i, C, b, U, z, ct, V) } } } else if (Z.visible) { const K = T(C, Z, S, x); C.onBeforeShadow(i, C, b, U, z, K, null), i.renderBufferDirect(U, null, z, K, C, null), C.onAfterShadow(i, C, b, U, z, K, null) } } const k = C.children; for (let z = 0, Z = k.length; z < Z; z++)E(k[z], b, U, S, x) } function B (C) { C.target.removeEventListener("dispose", B); for (const U in c) { const S = c[U], x = C.target.uuid; x in S && (S[x].dispose(), delete S[x]) } } } const Yf = { [Kr]: $r, [jr]: ts, [Jr]: es, [ei]: Qr, [$r]: Kr, [ts]: jr, [es]: Jr, [Qr]: ei }; function Zf (i, t) { function e () { let R = !1; const nt = new ee; let H = null; const Y = new ee(0, 0, 0, 0); return { setMask: function (lt) { H !== lt && !R && (i.colorMask(lt, lt, lt, lt), H = lt) }, setLocked: function (lt) { R = lt }, setClear: function (lt, at, wt, te, ce) { ce === !0 && (lt *= te, at *= te, wt *= te), nt.set(lt, at, wt, te), Y.equals(nt) === !1 && (i.clearColor(lt, at, wt, te), Y.copy(nt)) }, reset: function () { R = !1, H = null, Y.set(-1, 0, 0, 0) } } } function n () { let R = !1, nt = !1, H = null, Y = null, lt = null; return { setReversed: function (at) { if (nt !== at) { const wt = t.get("EXT_clip_control"); nt ? wt.clipControlEXT(wt.LOWER_LEFT_EXT, wt.ZERO_TO_ONE_EXT) : wt.clipControlEXT(wt.LOWER_LEFT_EXT, wt.NEGATIVE_ONE_TO_ONE_EXT); const te = lt; lt = null, this.setClear(te) } nt = at }, getReversed: function () { return nt }, setTest: function (at) { at ? rt(i.DEPTH_TEST) : yt(i.DEPTH_TEST) }, setMask: function (at) { H !== at && !R && (i.depthMask(at), H = at) }, setFunc: function (at) { if (nt && (at = Yf[at]), Y !== at) { switch (at) { case Kr: i.depthFunc(i.NEVER); break; case $r: i.depthFunc(i.ALWAYS); break; case jr: i.depthFunc(i.LESS); break; case ei: i.depthFunc(i.LEQUAL); break; case Jr: i.depthFunc(i.EQUAL); break; case Qr: i.depthFunc(i.GEQUAL); break; case ts: i.depthFunc(i.GREATER); break; case es: i.depthFunc(i.NOTEQUAL); break; default: i.depthFunc(i.LEQUAL) }Y = at } }, setLocked: function (at) { R = at }, setClear: function (at) { lt !== at && (nt && (at = 1 - at), i.clearDepth(at), lt = at) }, reset: function () { R = !1, H = null, Y = null, lt = null, nt = !1 } } } function r () { let R = !1, nt = null, H = null, Y = null, lt = null, at = null, wt = null, te = null, ce = null; return { setTest: function (Xt) { R || (Xt ? rt(i.STENCIL_TEST) : yt(i.STENCIL_TEST)) }, setMask: function (Xt) { nt !== Xt && !R && (i.stencilMask(Xt), nt = Xt) }, setFunc: function (Xt, be, He) { (H !== Xt || Y !== be || lt !== He) && (i.stencilFunc(Xt, be, He), H = Xt, Y = be, lt = He) }, setOp: function (Xt, be, He) { (at !== Xt || wt !== be || te !== He) && (i.stencilOp(Xt, be, He), at = Xt, wt = be, te = He) }, setLocked: function (Xt) { R = Xt }, setClear: function (Xt) { ce !== Xt && (i.clearStencil(Xt), ce = Xt) }, reset: function () { R = !1, nt = null, H = null, Y = null, lt = null, at = null, wt = null, te = null, ce = null } } } const s = new e, o = new n, a = new r, l = new WeakMap, c = new WeakMap; let u = {}, d = {}, f = new WeakMap, m = [], v = null, M = !1, p = null, h = null, A = null, T = null, E = null, B = null, C = null, b = new Vt(0, 0, 0), U = 0, S = !1, x = null, w = null, k = null, z = null, Z = null; const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let X = !1, j = 0; const V = i.getParameter(i.VERSION); V.indexOf("WebGL") !== -1 ? (j = parseFloat(/^WebGL (\d)/.exec(V)[1]), X = j >= 1) : V.indexOf("OpenGL ES") !== -1 && (j = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), X = j >= 2); let it = null, ct = {}; const xt = i.getParameter(i.SCISSOR_BOX), Dt = i.getParameter(i.VIEWPORT), Yt = new ee().fromArray(xt), W = new ee().fromArray(Dt); function tt (R, nt, H, Y) { const lt = new Uint8Array(4), at = i.createTexture(); i.bindTexture(R, at), i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST); for (let wt = 0; wt < H; wt++)R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY ? i.texImage3D(nt, 0, i.RGBA, 1, 1, Y, 0, i.RGBA, i.UNSIGNED_BYTE, lt) : i.texImage2D(nt + wt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, lt); return at } const _t = {}; _t[i.TEXTURE_2D] = tt(i.TEXTURE_2D, i.TEXTURE_2D, 1), _t[i.TEXTURE_CUBE_MAP] = tt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), _t[i.TEXTURE_2D_ARRAY] = tt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), _t[i.TEXTURE_3D] = tt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), rt(i.DEPTH_TEST), o.setFunc(ei), It(!1), Nt(Js), rt(i.CULL_FACE), D(un); function rt (R) { u[R] !== !0 && (i.enable(R), u[R] = !0) } function yt (R) { u[R] !== !1 && (i.disable(R), u[R] = !1) } function bt (R, nt) { return d[R] !== nt ? (i.bindFramebuffer(R, nt), d[R] = nt, R === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = nt), R === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = nt), !0) : !1 } function Ut (R, nt) { let H = m, Y = !1; if (R) { H = f.get(nt), H === void 0 && (H = [], f.set(nt, H)); const lt = R.textures; if (H.length !== lt.length || H[0] !== i.COLOR_ATTACHMENT0) { for (let at = 0, wt = lt.length; at < wt; at++)H[at] = i.COLOR_ATTACHMENT0 + at; H.length = lt.length, Y = !0 } } else H[0] !== i.BACK && (H[0] = i.BACK, Y = !0); Y && i.drawBuffers(H) } function Qt (R) { return v !== R ? (i.useProgram(R), v = R, !0) : !1 } const Ot = { [bn]: i.FUNC_ADD, [Zo]: i.FUNC_SUBTRACT, [Ko]: i.FUNC_REVERSE_SUBTRACT }; Ot[$o] = i.MIN, Ot[jo] = i.MAX; const ie = { [Jo]: i.ZERO, [Qo]: i.ONE, [tl]: i.SRC_COLOR, [Yr]: i.SRC_ALPHA, [al]: i.SRC_ALPHA_SATURATE, [rl]: i.DST_COLOR, [nl]: i.DST_ALPHA, [el]: i.ONE_MINUS_SRC_COLOR, [Zr]: i.ONE_MINUS_SRC_ALPHA, [sl]: i.ONE_MINUS_DST_COLOR, [il]: i.ONE_MINUS_DST_ALPHA, [ol]: i.CONSTANT_COLOR, [ll]: i.ONE_MINUS_CONSTANT_COLOR, [cl]: i.CONSTANT_ALPHA, [ul]: i.ONE_MINUS_CONSTANT_ALPHA }; function D (R, nt, H, Y, lt, at, wt, te, ce, Xt) { if (R === un) { M === !0 && (yt(i.BLEND), M = !1); return } if (M === !1 && (rt(i.BLEND), M = !0), R !== Yo) { if (R !== p || Xt !== S) { if ((h !== bn || E !== bn) && (i.blendEquation(i.FUNC_ADD), h = bn, E = bn), Xt) switch (R) { case Jn: i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case Qs: i.blendFunc(i.ONE, i.ONE); break; case ta: i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break; case ea: i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", R); break } else switch (R) { case Jn: i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break; case Qs: i.blendFunc(i.SRC_ALPHA, i.ONE); break; case ta: i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break; case ea: i.blendFunc(i.ZERO, i.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", R); break }A = null, T = null, B = null, C = null, b.set(0, 0, 0), U = 0, p = R, S = Xt } return } lt = lt || nt, at = at || H, wt = wt || Y, (nt !== h || lt !== E) && (i.blendEquationSeparate(Ot[nt], Ot[lt]), h = nt, E = lt), (H !== A || Y !== T || at !== B || wt !== C) && (i.blendFuncSeparate(ie[H], ie[Y], ie[at], ie[wt]), A = H, T = Y, B = at, C = wt), (te.equals(b) === !1 || ce !== U) && (i.blendColor(te.r, te.g, te.b, ce), b.copy(te), U = ce), p = R, S = !1 } function Ee (R, nt) { R.side === Ke ? yt(i.CULL_FACE) : rt(i.CULL_FACE); let H = R.side === ge; nt && (H = !H), It(H), R.blending === Jn && R.transparent === !1 ? D(un) : D(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), o.setFunc(R.depthFunc), o.setTest(R.depthTest), o.setMask(R.depthWrite), s.setMask(R.colorWrite); const Y = R.stencilWrite; a.setTest(Y), Y && (a.setMask(R.stencilWriteMask), a.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), a.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), $t(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === !0 ? rt(i.SAMPLE_ALPHA_TO_COVERAGE) : yt(i.SAMPLE_ALPHA_TO_COVERAGE) } function It (R) { x !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), x = R) } function Nt (R) { R !== Wo ? (rt(i.CULL_FACE), R !== w && (R === Js ? i.cullFace(i.BACK) : R === Xo ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : yt(i.CULL_FACE), w = R } function St (R) { R !== k && (X && i.lineWidth(R), k = R) } function $t (R, nt, H) { R ? (rt(i.POLYGON_OFFSET_FILL), (z !== nt || Z !== H) && (i.polygonOffset(nt, H), z = nt, Z = H)) : yt(i.POLYGON_OFFSET_FILL) } function Mt (R) { R ? rt(i.SCISSOR_TEST) : yt(i.SCISSOR_TEST) } function y (R) { R === void 0 && (R = i.TEXTURE0 + K - 1), it !== R && (i.activeTexture(R), it = R) } function _ (R, nt, H) { H === void 0 && (it === null ? H = i.TEXTURE0 + K - 1 : H = it); let Y = ct[H]; Y === void 0 && (Y = { type: void 0, texture: void 0 }, ct[H] = Y), (Y.type !== R || Y.texture !== nt) && (it !== H && (i.activeTexture(H), it = H), i.bindTexture(R, nt || _t[R]), Y.type = R, Y.texture = nt) } function I () { const R = ct[it]; R !== void 0 && R.type !== void 0 && (i.bindTexture(R.type, null), R.type = void 0, R.texture = void 0) } function q () { try { i.compressedTexImage2D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function $ () { try { i.compressedTexImage3D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function G () { try { i.texSubImage2D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function gt () { try { i.texSubImage3D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function st () { try { i.compressedTexSubImage2D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function ut () { try { i.compressedTexSubImage3D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function Bt () { try { i.texStorage2D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function J () { try { i.texStorage3D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function ht () { try { i.texImage2D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function Et () { try { i.texImage3D.apply(i, arguments) } catch (R) { console.error("THREE.WebGLState:", R) } } function Tt (R) { Yt.equals(R) === !1 && (i.scissor(R.x, R.y, R.z, R.w), Yt.copy(R)) } function dt (R) { W.equals(R) === !1 && (i.viewport(R.x, R.y, R.z, R.w), W.copy(R)) } function Ft (R, nt) { let H = c.get(nt); H === void 0 && (H = new WeakMap, c.set(nt, H)); let Y = H.get(R); Y === void 0 && (Y = i.getUniformBlockIndex(nt, R.name), H.set(R, Y)) } function Pt (R, nt) { const Y = c.get(nt).get(R); l.get(nt) !== Y && (i.uniformBlockBinding(nt, Y, R.__bindingPointIndex), l.set(nt, Y)) } function Zt () { i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), o.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, it = null, ct = {}, d = {}, f = new WeakMap, m = [], v = null, M = !1, p = null, h = null, A = null, T = null, E = null, B = null, C = null, b = new Vt(0, 0, 0), U = 0, S = !1, x = null, w = null, k = null, z = null, Z = null, Yt.set(0, 0, i.canvas.width, i.canvas.height), W.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), o.reset(), a.reset() } return { buffers: { color: s, depth: o, stencil: a }, enable: rt, disable: yt, bindFramebuffer: bt, drawBuffers: Ut, useProgram: Qt, setBlending: D, setMaterial: Ee, setFlipSided: It, setCullFace: Nt, setLineWidth: St, setPolygonOffset: $t, setScissorTest: Mt, activeTexture: y, bindTexture: _, unbindTexture: I, compressedTexImage2D: q, compressedTexImage3D: $, texImage2D: ht, texImage3D: Et, updateUBOMapping: Ft, uniformBlockBinding: Pt, texStorage2D: Bt, texStorage3D: J, texSubImage2D: G, texSubImage3D: gt, compressedTexSubImage2D: st, compressedTexSubImage3D: ut, scissor: Tt, viewport: dt, reset: Zt } } function $a (i, t, e, n) { const r = Kf(n); switch (e) { case ho: return i * t; case po: return i * t; case mo: return i * t * 2; case _o: return i * t / r.components * r.byteLength; case Fs: return i * t / r.components * r.byteLength; case go: return i * t * 2 / r.components * r.byteLength; case Os: return i * t * 2 / r.components * r.byteLength; case fo: return i * t * 3 / r.components * r.byteLength; case Ue: return i * t * 4 / r.components * r.byteLength; case Bs: return i * t * 4 / r.components * r.byteLength; case nr: case ir: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8; case rr: case sr: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16; case as: case ls: return Math.max(i, 16) * Math.max(t, 8) / 4; case ss: case os: return Math.max(i, 8) * Math.max(t, 8) / 2; case cs: case us: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8; case hs: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16; case ds: return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16; case fs: return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16; case ps: return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16; case ms: return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16; case _s: return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16; case gs: return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16; case vs: return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16; case xs: return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16; case Ms: return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16; case Ss: return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16; case Es: return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16; case ys: return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16; case Ts: return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16; case As: return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16; case ar: case bs: case ws: return Math.ceil(i / 4) * Math.ceil(t / 4) * 16; case vo: case Rs: return Math.ceil(i / 4) * Math.ceil(t / 4) * 8; case Cs: case Ps: return Math.ceil(i / 4) * Math.ceil(t / 4) * 16 }throw new Error(`Unable to determine texture byte length for ${e} format.`) } function Kf (i) { switch (i) { case Qe: case lo: return { byteLength: 1, components: 1 }; case Ti: case co: case wi: return { byteLength: 2, components: 1 }; case Is: case Ns: return { byteLength: 2, components: 4 }; case Ln: case Us: case $e: return { byteLength: 4, components: 1 }; case uo: return { byteLength: 4, components: 3 } }throw new Error(`Unknown texture type ${i}.`) } function $f (i, t, e, n, r, s, o) { const a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Wt, u = new WeakMap; let d; const f = new WeakMap; let m = !1; try { m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function v (y, _) { return m ? new OffscreenCanvas(y, _) : bi("canvas") } function M (y, _, I) { let q = 1; const $ = Mt(y); if (($.width > I || $.height > I) && (q = I / Math.max($.width, $.height)), q < 1) if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) { const G = Math.floor(q * $.width), gt = Math.floor(q * $.height); d === void 0 && (d = v(G, gt)); const st = _ ? v(G, gt) : d; return st.width = G, st.height = gt, st.getContext("2d").drawImage(y, 0, 0, G, gt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + G + "x" + gt + ")."), st } else return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), y; return y } function p (y) { return y.generateMipmaps } function h (y) { i.generateMipmap(y) } function A (y) { return y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : y.isWebGL3DRenderTarget ? i.TEXTURE_3D : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D } function T (y, _, I, q, $ = !1) { if (y !== null) { if (i[y] !== void 0) return i[y]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'") } let G = _; if (_ === i.RED && (I === i.FLOAT && (G = i.R32F), I === i.HALF_FLOAT && (G = i.R16F), I === i.UNSIGNED_BYTE && (G = i.R8)), _ === i.RED_INTEGER && (I === i.UNSIGNED_BYTE && (G = i.R8UI), I === i.UNSIGNED_SHORT && (G = i.R16UI), I === i.UNSIGNED_INT && (G = i.R32UI), I === i.BYTE && (G = i.R8I), I === i.SHORT && (G = i.R16I), I === i.INT && (G = i.R32I)), _ === i.RG && (I === i.FLOAT && (G = i.RG32F), I === i.HALF_FLOAT && (G = i.RG16F), I === i.UNSIGNED_BYTE && (G = i.RG8)), _ === i.RG_INTEGER && (I === i.UNSIGNED_BYTE && (G = i.RG8UI), I === i.UNSIGNED_SHORT && (G = i.RG16UI), I === i.UNSIGNED_INT && (G = i.RG32UI), I === i.BYTE && (G = i.RG8I), I === i.SHORT && (G = i.RG16I), I === i.INT && (G = i.RG32I)), _ === i.RGB_INTEGER && (I === i.UNSIGNED_BYTE && (G = i.RGB8UI), I === i.UNSIGNED_SHORT && (G = i.RGB16UI), I === i.UNSIGNED_INT && (G = i.RGB32UI), I === i.BYTE && (G = i.RGB8I), I === i.SHORT && (G = i.RGB16I), I === i.INT && (G = i.RGB32I)), _ === i.RGBA_INTEGER && (I === i.UNSIGNED_BYTE && (G = i.RGBA8UI), I === i.UNSIGNED_SHORT && (G = i.RGBA16UI), I === i.UNSIGNED_INT && (G = i.RGBA32UI), I === i.BYTE && (G = i.RGBA8I), I === i.SHORT && (G = i.RGBA16I), I === i.INT && (G = i.RGBA32I)), _ === i.RGB && I === i.UNSIGNED_INT_5_9_9_9_REV && (G = i.RGB9_E5), _ === i.RGBA) { const gt = $ ? hr : zt.getTransfer(q); I === i.FLOAT && (G = i.RGBA32F), I === i.HALF_FLOAT && (G = i.RGBA16F), I === i.UNSIGNED_BYTE && (G = gt === qt ? i.SRGB8_ALPHA8 : i.RGBA8), I === i.UNSIGNED_SHORT_4_4_4_4 && (G = i.RGBA4), I === i.UNSIGNED_SHORT_5_5_5_1 && (G = i.RGB5_A1) } return (G === i.R16F || G === i.R32F || G === i.RG16F || G === i.RG32F || G === i.RGBA16F || G === i.RGBA32F) && t.get("EXT_color_buffer_float"), G } function E (y, _) { let I; return y ? _ === null || _ === Ln || _ === ri ? I = i.DEPTH24_STENCIL8 : _ === $e ? I = i.DEPTH32F_STENCIL8 : _ === Ti && (I = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Ln || _ === ri ? I = i.DEPTH_COMPONENT24 : _ === $e ? I = i.DEPTH_COMPONENT32F : _ === Ti && (I = i.DEPTH_COMPONENT16), I } function B (y, _) { return p(y) === !0 || y.isFramebufferTexture && y.minFilter !== Ie && y.minFilter !== Oe ? Math.log2(Math.max(_.width, _.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? _.mipmaps.length : 1 } function C (y) { const _ = y.target; _.removeEventListener("dispose", C), U(_), _.isVideoTexture && u.delete(_) } function b (y) { const _ = y.target; _.removeEventListener("dispose", b), x(_) } function U (y) { const _ = n.get(y); if (_.__webglInit === void 0) return; const I = y.source, q = f.get(I); if (q) { const $ = q[_.__cacheKey]; $.usedTimes--, $.usedTimes === 0 && S(y), Object.keys(q).length === 0 && f.delete(I) } n.remove(y) } function S (y) { const _ = n.get(y); i.deleteTexture(_.__webglTexture); const I = y.source, q = f.get(I); delete q[_.__cacheKey], o.memory.textures-- } function x (y) { const _ = n.get(y); if (y.depthTexture && (y.depthTexture.dispose(), n.remove(y.depthTexture)), y.isWebGLCubeRenderTarget) for (let q = 0; q < 6; q++) { if (Array.isArray(_.__webglFramebuffer[q])) for (let $ = 0; $ < _.__webglFramebuffer[q].length; $++)i.deleteFramebuffer(_.__webglFramebuffer[q][$]); else i.deleteFramebuffer(_.__webglFramebuffer[q]); _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[q]) } else { if (Array.isArray(_.__webglFramebuffer)) for (let q = 0; q < _.__webglFramebuffer.length; q++)i.deleteFramebuffer(_.__webglFramebuffer[q]); else i.deleteFramebuffer(_.__webglFramebuffer); if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let q = 0; q < _.__webglColorRenderbuffer.length; q++)_.__webglColorRenderbuffer[q] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]); _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer) } const I = y.textures; for (let q = 0, $ = I.length; q < $; q++) { const G = n.get(I[q]); G.__webglTexture && (i.deleteTexture(G.__webglTexture), o.memory.textures--), n.remove(I[q]) } n.remove(y) } let w = 0; function k () { w = 0 } function z () { const y = w; return y >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + r.maxTextures), w += 1, y } function Z (y) { const _ = []; return _.push(y.wrapS), _.push(y.wrapT), _.push(y.wrapR || 0), _.push(y.magFilter), _.push(y.minFilter), _.push(y.anisotropy), _.push(y.internalFormat), _.push(y.format), _.push(y.type), _.push(y.generateMipmaps), _.push(y.premultiplyAlpha), _.push(y.flipY), _.push(y.unpackAlignment), _.push(y.colorSpace), _.join() } function K (y, _) { const I = n.get(y); if (y.isVideoTexture && St(y), y.isRenderTargetTexture === !1 && y.version > 0 && I.__version !== y.version) { const q = y.image; if (q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (q.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { W(I, y, _); return } } e.bindTexture(i.TEXTURE_2D, I.__webglTexture, i.TEXTURE0 + _) } function X (y, _) { const I = n.get(y); if (y.version > 0 && I.__version !== y.version) { W(I, y, _); return } e.bindTexture(i.TEXTURE_2D_ARRAY, I.__webglTexture, i.TEXTURE0 + _) } function j (y, _) { const I = n.get(y); if (y.version > 0 && I.__version !== y.version) { W(I, y, _); return } e.bindTexture(i.TEXTURE_3D, I.__webglTexture, i.TEXTURE0 + _) } function V (y, _) { const I = n.get(y); if (y.version > 0 && I.__version !== y.version) { tt(I, y, _); return } e.bindTexture(i.TEXTURE_CUBE_MAP, I.__webglTexture, i.TEXTURE0 + _) } const it = { [yi]: i.REPEAT, [Rn]: i.CLAMP_TO_EDGE, [rs]: i.MIRRORED_REPEAT }, ct = { [Ie]: i.NEAREST, [Ml]: i.NEAREST_MIPMAP_NEAREST, [Ui]: i.NEAREST_MIPMAP_LINEAR, [Oe]: i.LINEAR, [mr]: i.LINEAR_MIPMAP_NEAREST, [Cn]: i.LINEAR_MIPMAP_LINEAR }, xt = { [Tl]: i.NEVER, [Pl]: i.ALWAYS, [Al]: i.LESS, [Mo]: i.LEQUAL, [bl]: i.EQUAL, [Cl]: i.GEQUAL, [wl]: i.GREATER, [Rl]: i.NOTEQUAL }; function Dt (y, _) { if (_.type === $e && t.has("OES_texture_float_linear") === !1 && (_.magFilter === Oe || _.magFilter === mr || _.magFilter === Ui || _.magFilter === Cn || _.minFilter === Oe || _.minFilter === mr || _.minFilter === Ui || _.minFilter === Cn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, it[_.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, it[_.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, it[_.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, ct[_.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, ct[_.minFilter]), _.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, xt[_.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) { if (_.magFilter === Ie || _.minFilter !== Ui && _.minFilter !== Cn || _.type === $e && t.has("OES_texture_float_linear") === !1) return; if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) { const I = t.get("EXT_texture_filter_anisotropic"); i.texParameterf(y, I.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy } } } function Yt (y, _) { let I = !1; y.__webglInit === void 0 && (y.__webglInit = !0, _.addEventListener("dispose", C)); const q = _.source; let $ = f.get(q); $ === void 0 && ($ = {}, f.set(q, $)); const G = Z(_); if (G !== y.__cacheKey) { $[G] === void 0 && ($[G] = { texture: i.createTexture(), usedTimes: 0 }, o.memory.textures++, I = !0), $[G].usedTimes++; const gt = $[y.__cacheKey]; gt !== void 0 && ($[y.__cacheKey].usedTimes--, gt.usedTimes === 0 && S(_)), y.__cacheKey = G, y.__webglTexture = $[G].texture } return I } function W (y, _, I) { let q = i.TEXTURE_2D; (_.isDataArrayTexture || _.isCompressedArrayTexture) && (q = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (q = i.TEXTURE_3D); const $ = Yt(y, _), G = _.source; e.bindTexture(q, y.__webglTexture, i.TEXTURE0 + I); const gt = n.get(G); if (G.version !== gt.__version || $ === !0) { e.activeTexture(i.TEXTURE0 + I); const st = zt.getPrimaries(zt.workingColorSpace), ut = _.colorSpace === cn ? null : zt.getPrimaries(_.colorSpace), Bt = _.colorSpace === cn || st === ut ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Bt); let J = M(_.image, !1, r.maxTextureSize); J = $t(_, J); const ht = s.convert(_.format, _.colorSpace), Et = s.convert(_.type); let Tt = T(_.internalFormat, ht, Et, _.colorSpace, _.isVideoTexture); Dt(q, _); let dt; const Ft = _.mipmaps, Pt = _.isVideoTexture !== !0, Zt = gt.__version === void 0 || $ === !0, R = G.dataReady, nt = B(_, J); if (_.isDepthTexture) Tt = E(_.format === si, _.type), Zt && (Pt ? e.texStorage2D(i.TEXTURE_2D, 1, Tt, J.width, J.height) : e.texImage2D(i.TEXTURE_2D, 0, Tt, J.width, J.height, 0, ht, Et, null)); else if (_.isDataTexture) if (Ft.length > 0) { Pt && Zt && e.texStorage2D(i.TEXTURE_2D, nt, Tt, Ft[0].width, Ft[0].height); for (let H = 0, Y = Ft.length; H < Y; H++)dt = Ft[H], Pt ? R && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ht, Et, dt.data) : e.texImage2D(i.TEXTURE_2D, H, Tt, dt.width, dt.height, 0, ht, Et, dt.data); _.generateMipmaps = !1 } else Pt ? (Zt && e.texStorage2D(i.TEXTURE_2D, nt, Tt, J.width, J.height), R && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, J.width, J.height, ht, Et, J.data)) : e.texImage2D(i.TEXTURE_2D, 0, Tt, J.width, J.height, 0, ht, Et, J.data); else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) { Pt && Zt && e.texStorage3D(i.TEXTURE_2D_ARRAY, nt, Tt, Ft[0].width, Ft[0].height, J.depth); for (let H = 0, Y = Ft.length; H < Y; H++)if (dt = Ft[H], _.format !== Ue) if (ht !== null) if (Pt) { if (R) if (_.layerUpdates.size > 0) { const lt = $a(dt.width, dt.height, _.format, _.type); for (const at of _.layerUpdates) { const wt = dt.data.subarray(at * lt / dt.data.BYTES_PER_ELEMENT, (at + 1) * lt / dt.data.BYTES_PER_ELEMENT); e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, at, dt.width, dt.height, 1, ht, wt) } _.clearLayerUpdates() } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, dt.width, dt.height, J.depth, ht, dt.data) } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, H, Tt, dt.width, dt.height, J.depth, 0, dt.data, 0, 0); else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"); else Pt ? R && e.texSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, dt.width, dt.height, J.depth, ht, Et, dt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, H, Tt, dt.width, dt.height, J.depth, 0, ht, Et, dt.data) } else { Pt && Zt && e.texStorage2D(i.TEXTURE_2D, nt, Tt, Ft[0].width, Ft[0].height); for (let H = 0, Y = Ft.length; H < Y; H++)dt = Ft[H], _.format !== Ue ? ht !== null ? Pt ? R && e.compressedTexSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ht, dt.data) : e.compressedTexImage2D(i.TEXTURE_2D, H, Tt, dt.width, dt.height, 0, dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pt ? R && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ht, Et, dt.data) : e.texImage2D(i.TEXTURE_2D, H, Tt, dt.width, dt.height, 0, ht, Et, dt.data) } else if (_.isDataArrayTexture) if (Pt) { if (Zt && e.texStorage3D(i.TEXTURE_2D_ARRAY, nt, Tt, J.width, J.height, J.depth), R) if (_.layerUpdates.size > 0) { const H = $a(J.width, J.height, _.format, _.type); for (const Y of _.layerUpdates) { const lt = J.data.subarray(Y * H / J.data.BYTES_PER_ELEMENT, (Y + 1) * H / J.data.BYTES_PER_ELEMENT); e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Y, J.width, J.height, 1, ht, Et, lt) } _.clearLayerUpdates() } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, ht, Et, J.data) } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Tt, J.width, J.height, J.depth, 0, ht, Et, J.data); else if (_.isData3DTexture) Pt ? (Zt && e.texStorage3D(i.TEXTURE_3D, nt, Tt, J.width, J.height, J.depth), R && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, ht, Et, J.data)) : e.texImage3D(i.TEXTURE_3D, 0, Tt, J.width, J.height, J.depth, 0, ht, Et, J.data); else if (_.isFramebufferTexture) { if (Zt) if (Pt) e.texStorage2D(i.TEXTURE_2D, nt, Tt, J.width, J.height); else { let H = J.width, Y = J.height; for (let lt = 0; lt < nt; lt++)e.texImage2D(i.TEXTURE_2D, lt, Tt, H, Y, 0, ht, Et, null), H >>= 1, Y >>= 1 } } else if (Ft.length > 0) { if (Pt && Zt) { const H = Mt(Ft[0]); e.texStorage2D(i.TEXTURE_2D, nt, Tt, H.width, H.height) } for (let H = 0, Y = Ft.length; H < Y; H++)dt = Ft[H], Pt ? R && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, ht, Et, dt) : e.texImage2D(i.TEXTURE_2D, H, Tt, ht, Et, dt); _.generateMipmaps = !1 } else if (Pt) { if (Zt) { const H = Mt(J); e.texStorage2D(i.TEXTURE_2D, nt, Tt, H.width, H.height) } R && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ht, Et, J) } else e.texImage2D(i.TEXTURE_2D, 0, Tt, ht, Et, J); p(_) && h(q), gt.__version = G.version, _.onUpdate && _.onUpdate(_) } y.__version = _.version } function tt (y, _, I) { if (_.image.length !== 6) return; const q = Yt(y, _), $ = _.source; e.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + I); const G = n.get($); if ($.version !== G.__version || q === !0) { e.activeTexture(i.TEXTURE0 + I); const gt = zt.getPrimaries(zt.workingColorSpace), st = _.colorSpace === cn ? null : zt.getPrimaries(_.colorSpace), ut = _.colorSpace === cn || gt === st ? i.NONE : i.BROWSER_DEFAULT_WEBGL; i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ut); const Bt = _.isCompressedTexture || _.image[0].isCompressedTexture, J = _.image[0] && _.image[0].isDataTexture, ht = []; for (let Y = 0; Y < 6; Y++)!Bt && !J ? ht[Y] = M(_.image[Y], !0, r.maxCubemapSize) : ht[Y] = J ? _.image[Y].image : _.image[Y], ht[Y] = $t(_, ht[Y]); const Et = ht[0], Tt = s.convert(_.format, _.colorSpace), dt = s.convert(_.type), Ft = T(_.internalFormat, Tt, dt, _.colorSpace), Pt = _.isVideoTexture !== !0, Zt = G.__version === void 0 || q === !0, R = $.dataReady; let nt = B(_, Et); Dt(i.TEXTURE_CUBE_MAP, _); let H; if (Bt) { Pt && Zt && e.texStorage2D(i.TEXTURE_CUBE_MAP, nt, Ft, Et.width, Et.height); for (let Y = 0; Y < 6; Y++) { H = ht[Y].mipmaps; for (let lt = 0; lt < H.length; lt++) { const at = H[lt]; _.format !== Ue ? Tt !== null ? Pt ? R && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt, 0, 0, at.width, at.height, Tt, at.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt, Ft, at.width, at.height, 0, at.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pt ? R && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt, 0, 0, at.width, at.height, Tt, dt, at.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt, Ft, at.width, at.height, 0, Tt, dt, at.data) } } } else { if (H = _.mipmaps, Pt && Zt) { H.length > 0 && nt++; const Y = Mt(ht[0]); e.texStorage2D(i.TEXTURE_CUBE_MAP, nt, Ft, Y.width, Y.height) } for (let Y = 0; Y < 6; Y++)if (J) { Pt ? R && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, ht[Y].width, ht[Y].height, Tt, dt, ht[Y].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ft, ht[Y].width, ht[Y].height, 0, Tt, dt, ht[Y].data); for (let lt = 0; lt < H.length; lt++) { const wt = H[lt].image[Y].image; Pt ? R && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt + 1, 0, 0, wt.width, wt.height, Tt, dt, wt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt + 1, Ft, wt.width, wt.height, 0, Tt, dt, wt.data) } } else { Pt ? R && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, Tt, dt, ht[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ft, Tt, dt, ht[Y]); for (let lt = 0; lt < H.length; lt++) { const at = H[lt]; Pt ? R && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt + 1, 0, 0, Tt, dt, at.image[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, lt + 1, Ft, Tt, dt, at.image[Y]) } } } p(_) && h(i.TEXTURE_CUBE_MAP), G.__version = $.version, _.onUpdate && _.onUpdate(_) } y.__version = _.version } function _t (y, _, I, q, $, G) { const gt = s.convert(I.format, I.colorSpace), st = s.convert(I.type), ut = T(I.internalFormat, gt, st, I.colorSpace), Bt = n.get(_), J = n.get(I); if (J.__renderTarget = _, !Bt.__hasExternalTextures) { const ht = Math.max(1, _.width >> G), Et = Math.max(1, _.height >> G); $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? e.texImage3D($, G, ut, ht, Et, _.depth, 0, gt, st, null) : e.texImage2D($, G, ut, ht, Et, 0, gt, st, null) } e.bindFramebuffer(i.FRAMEBUFFER, y), Nt(_) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, q, $, J.__webglTexture, 0, It(_)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, q, $, J.__webglTexture, G), e.bindFramebuffer(i.FRAMEBUFFER, null) } function rt (y, _, I) { if (i.bindRenderbuffer(i.RENDERBUFFER, y), _.depthBuffer) { const q = _.depthTexture, $ = q && q.isDepthTexture ? q.type : null, G = E(_.stencilBuffer, $), gt = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, st = It(_); Nt(_) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, st, G, _.width, _.height) : I ? i.renderbufferStorageMultisample(i.RENDERBUFFER, st, G, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, G, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, gt, i.RENDERBUFFER, y) } else { const q = _.textures; for (let $ = 0; $ < q.length; $++) { const G = q[$], gt = s.convert(G.format, G.colorSpace), st = s.convert(G.type), ut = T(G.internalFormat, gt, st, G.colorSpace), Bt = It(_); I && Nt(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Bt, ut, _.width, _.height) : Nt(_) ? a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Bt, ut, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, ut, _.width, _.height) } } i.bindRenderbuffer(i.RENDERBUFFER, null) } function yt (y, _) { if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (e.bindFramebuffer(i.FRAMEBUFFER, y), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); const q = n.get(_.depthTexture); q.__renderTarget = _, (!q.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), K(_.depthTexture, 0); const $ = q.__webglTexture, G = It(_); if (_.depthTexture.format === Qn) Nt(_) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, G) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0); else if (_.depthTexture.format === si) Nt(_) ? a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, G) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0); else throw new Error("Unknown depthTexture format") } function bt (y) { const _ = n.get(y), I = y.isWebGLCubeRenderTarget === !0; if (_.__boundDepthTexture !== y.depthTexture) { const q = y.depthTexture; if (_.__depthDisposeCallback && _.__depthDisposeCallback(), q) { const $ = () => { delete _.__boundDepthTexture, delete _.__depthDisposeCallback, q.removeEventListener("dispose", $) }; q.addEventListener("dispose", $), _.__depthDisposeCallback = $ } _.__boundDepthTexture = q } if (y.depthTexture && !_.__autoAllocateDepthBuffer) { if (I) throw new Error("target.depthTexture not supported in Cube render targets"); yt(_.__webglFramebuffer, y) } else if (I) { _.__webglDepthbuffer = []; for (let q = 0; q < 6; q++)if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[q]), _.__webglDepthbuffer[q] === void 0) _.__webglDepthbuffer[q] = i.createRenderbuffer(), rt(_.__webglDepthbuffer[q], y, !1); else { const $ = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, G = _.__webglDepthbuffer[q]; i.bindRenderbuffer(i.RENDERBUFFER, G), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, G) } } else if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i.createRenderbuffer(), rt(_.__webglDepthbuffer, y, !1); else { const q = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, $ = _.__webglDepthbuffer; i.bindRenderbuffer(i.RENDERBUFFER, $), i.framebufferRenderbuffer(i.FRAMEBUFFER, q, i.RENDERBUFFER, $) } e.bindFramebuffer(i.FRAMEBUFFER, null) } function Ut (y, _, I) { const q = n.get(y); _ !== void 0 && _t(q.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), I !== void 0 && bt(y) } function Qt (y) { const _ = y.texture, I = n.get(y), q = n.get(_); y.addEventListener("dispose", b); const $ = y.textures, G = y.isWebGLCubeRenderTarget === !0, gt = $.length > 1; if (gt || (q.__webglTexture === void 0 && (q.__webglTexture = i.createTexture()), q.__version = _.version, o.memory.textures++), G) { I.__webglFramebuffer = []; for (let st = 0; st < 6; st++)if (_.mipmaps && _.mipmaps.length > 0) { I.__webglFramebuffer[st] = []; for (let ut = 0; ut < _.mipmaps.length; ut++)I.__webglFramebuffer[st][ut] = i.createFramebuffer() } else I.__webglFramebuffer[st] = i.createFramebuffer() } else { if (_.mipmaps && _.mipmaps.length > 0) { I.__webglFramebuffer = []; for (let st = 0; st < _.mipmaps.length; st++)I.__webglFramebuffer[st] = i.createFramebuffer() } else I.__webglFramebuffer = i.createFramebuffer(); if (gt) for (let st = 0, ut = $.length; st < ut; st++) { const Bt = n.get($[st]); Bt.__webglTexture === void 0 && (Bt.__webglTexture = i.createTexture(), o.memory.textures++) } if (y.samples > 0 && Nt(y) === !1) { I.__webglMultisampledFramebuffer = i.createFramebuffer(), I.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, I.__webglMultisampledFramebuffer); for (let st = 0; st < $.length; st++) { const ut = $[st]; I.__webglColorRenderbuffer[st] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, I.__webglColorRenderbuffer[st]); const Bt = s.convert(ut.format, ut.colorSpace), J = s.convert(ut.type), ht = T(ut.internalFormat, Bt, J, ut.colorSpace, y.isXRRenderTarget === !0), Et = It(y); i.renderbufferStorageMultisample(i.RENDERBUFFER, Et, ht, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + st, i.RENDERBUFFER, I.__webglColorRenderbuffer[st]) } i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (I.__webglDepthRenderbuffer = i.createRenderbuffer(), rt(I.__webglDepthRenderbuffer, y, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null) } } if (G) { e.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture), Dt(i.TEXTURE_CUBE_MAP, _); for (let st = 0; st < 6; st++)if (_.mipmaps && _.mipmaps.length > 0) for (let ut = 0; ut < _.mipmaps.length; ut++)_t(I.__webglFramebuffer[st][ut], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + st, ut); else _t(I.__webglFramebuffer[st], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + st, 0); p(_) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture() } else if (gt) { for (let st = 0, ut = $.length; st < ut; st++) { const Bt = $[st], J = n.get(Bt); e.bindTexture(i.TEXTURE_2D, J.__webglTexture), Dt(i.TEXTURE_2D, Bt), _t(I.__webglFramebuffer, y, Bt, i.COLOR_ATTACHMENT0 + st, i.TEXTURE_2D, 0), p(Bt) && h(i.TEXTURE_2D) } e.unbindTexture() } else { let st = i.TEXTURE_2D; if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (st = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(st, q.__webglTexture), Dt(st, _), _.mipmaps && _.mipmaps.length > 0) for (let ut = 0; ut < _.mipmaps.length; ut++)_t(I.__webglFramebuffer[ut], y, _, i.COLOR_ATTACHMENT0, st, ut); else _t(I.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, st, 0); p(_) && h(st), e.unbindTexture() } y.depthBuffer && bt(y) } function Ot (y) { const _ = y.textures; for (let I = 0, q = _.length; I < q; I++) { const $ = _[I]; if (p($)) { const G = A(y), gt = n.get($).__webglTexture; e.bindTexture(G, gt), h(G), e.unbindTexture() } } } const ie = [], D = []; function Ee (y) { if (y.samples > 0) { if (Nt(y) === !1) { const _ = y.textures, I = y.width, q = y.height; let $ = i.COLOR_BUFFER_BIT; const G = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, gt = n.get(y), st = _.length > 1; if (st) for (let ut = 0; ut < _.length; ut++)e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.TEXTURE_2D, null, 0); e.bindFramebuffer(i.READ_FRAMEBUFFER, gt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglFramebuffer); for (let ut = 0; ut < _.length; ut++) { if (y.resolveDepthBuffer && (y.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)), st) { i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, gt.__webglColorRenderbuffer[ut]); const Bt = n.get(_[ut]).__webglTexture; i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Bt, 0) } i.blitFramebuffer(0, 0, I, q, 0, 0, I, q, $, i.NEAREST), l === !0 && (ie.length = 0, D.length = 0, ie.push(i.COLOR_ATTACHMENT0 + ut), y.depthBuffer && y.resolveDepthBuffer === !1 && (ie.push(G), D.push(G), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, D)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ie)) } if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), st) for (let ut = 0; ut < _.length; ut++) { e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.RENDERBUFFER, gt.__webglColorRenderbuffer[ut]); const Bt = n.get(_[ut]).__webglTexture; e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.TEXTURE_2D, Bt, 0) } e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglMultisampledFramebuffer) } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && l) { const _ = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT; i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]) } } } function It (y) { return Math.min(r.maxSamples, y.samples) } function Nt (y) { const _ = n.get(y); return y.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1 } function St (y) { const _ = o.render.frame; u.get(y) !== _ && (u.set(y, _), y.update()) } function $t (y, _) { const I = y.colorSpace, q = y.format, $ = y.type; return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || I !== oi && I !== cn && (zt.getTransfer(I) === qt ? (q !== Ue || $ !== Qe) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", I)), _ } function Mt (y) { return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (c.width = y.naturalWidth || y.width, c.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (c.width = y.displayWidth, c.height = y.displayHeight) : (c.width = y.width, c.height = y.height), c } this.allocateTextureUnit = z, this.resetTextureUnits = k, this.setTexture2D = K, this.setTexture2DArray = X, this.setTexture3D = j, this.setTextureCube = V, this.rebindTextures = Ut, this.setupRenderTarget = Qt, this.updateRenderTargetMipmap = Ot, this.updateMultisampleRenderTarget = Ee, this.setupDepthRenderbuffer = bt, this.setupFrameBufferTexture = _t, this.useMultisampledRTT = Nt } function jf (i, t) { function e (n, r = cn) { let s; const o = zt.getTransfer(r); if (n === Qe) return i.UNSIGNED_BYTE; if (n === Is) return i.UNSIGNED_SHORT_4_4_4_4; if (n === Ns) return i.UNSIGNED_SHORT_5_5_5_1; if (n === uo) return i.UNSIGNED_INT_5_9_9_9_REV; if (n === lo) return i.BYTE; if (n === co) return i.SHORT; if (n === Ti) return i.UNSIGNED_SHORT; if (n === Us) return i.INT; if (n === Ln) return i.UNSIGNED_INT; if (n === $e) return i.FLOAT; if (n === wi) return i.HALF_FLOAT; if (n === ho) return i.ALPHA; if (n === fo) return i.RGB; if (n === Ue) return i.RGBA; if (n === po) return i.LUMINANCE; if (n === mo) return i.LUMINANCE_ALPHA; if (n === Qn) return i.DEPTH_COMPONENT; if (n === si) return i.DEPTH_STENCIL; if (n === _o) return i.RED; if (n === Fs) return i.RED_INTEGER; if (n === go) return i.RG; if (n === Os) return i.RG_INTEGER; if (n === Bs) return i.RGBA_INTEGER; if (n === nr || n === ir || n === rr || n === sr) if (o === qt) if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) { if (n === nr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (n === ir) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (n === rr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (n === sr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) { if (n === nr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT; if (n === ir) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (n === rr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (n === sr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (n === ss || n === as || n === os || n === ls) if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) { if (n === ss) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (n === as) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (n === os) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (n === ls) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (n === cs || n === us || n === hs) if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) { if (n === cs || n === us) return o === qt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2; if (n === hs) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (n === ds || n === fs || n === ps || n === ms || n === _s || n === gs || n === vs || n === xs || n === Ms || n === Ss || n === Es || n === ys || n === Ts || n === As) if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) { if (n === ds) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR; if (n === fs) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR; if (n === ps) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR; if (n === ms) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR; if (n === _s) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR; if (n === gs) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR; if (n === vs) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR; if (n === xs) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR; if (n === Ms) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR; if (n === Ss) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR; if (n === Es) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR; if (n === ys) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR; if (n === Ts) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR; if (n === As) return o === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (n === ar || n === bs || n === ws) if (s = t.get("EXT_texture_compression_bptc"), s !== null) { if (n === ar) return o === qt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (n === bs) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (n === ws) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (n === vo || n === Rs || n === Cs || n === Ps) if (s = t.get("EXT_texture_compression_rgtc"), s !== null) { if (n === ar) return s.COMPRESSED_RED_RGTC1_EXT; if (n === Rs) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (n === Cs) return s.COMPRESSED_RED_GREEN_RGTC2_EXT; if (n === Ps) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return n === ri ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null } return { convert: e } } class Jf extends Le { constructor (t = []) { super(), this.isArrayCamera = !0, this.cameras = t } } class Mi extends le { constructor () { super(), this.isGroup = !0, this.type = "Group" } } const Qf = { type: "move" }; class Gr { constructor () { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace () { return this._hand === null && (this._hand = new Mi, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace () { return this._targetRay === null && (this._targetRay = new Mi, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new N, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new N), this._targetRay } getGripSpace () { return this._grip === null && (this._grip = new Mi, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new N, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new N), this._grip } dispatchEvent (t) { return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this } connect (t) { if (t && t.hand) { const e = this._hand; if (e) for (const n of t.hand.values()) this._getHandJoint(e, n) } return this.dispatchEvent({ type: "connected", data: t }), this } disconnect (t) { return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update (t, e, n) { let r = null, s = null, o = null; const a = this._targetRay, l = this._grip, c = this._hand; if (t && e.session.visibilityState !== "visible-blurred") { if (c && t.hand) { o = !0; for (const M of t.hand.values()) { const p = e.getJointPose(M, n), h = this._getHandJoint(c, M); p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = p.radius), h.visible = p !== null } const u = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], f = u.position.distanceTo(d.position), m = .02, v = .005; c.inputState.pinching && f > m + v ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && f <= m - v && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this })) } else l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1)); a !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Qf))) } return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this } _getHandJoint (t, e) { if (t.joints[e.jointName] === void 0) { const n = new Mi; n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n) } return t.joints[e.jointName] } } const tp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, ep = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`; class np { constructor () { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init (t, e, n) { if (this.texture === null) { const r = new me, s = t.properties.get(r); s.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = r } } getMesh (t) { if (this.texture !== null && this.mesh === null) { const e = t.cameras[0].viewport, n = new pn({ vertexShader: tp, fragmentShader: ep, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } }); this.mesh = new Be(new dr(20, 20), n) } return this.mesh } reset () { this.texture = null, this.mesh = null } getDepthTexture () { return this.texture } } class ip extends li { constructor (t, e) { super(); const n = this; let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, u = null, d = null, f = null, m = null, v = null; const M = new np, p = e.getContextAttributes(); let h = null, A = null; const T = [], E = [], B = new Wt; let C = null; const b = new Le; b.viewport = new ee; const U = new Le; U.viewport = new ee; const S = [b, U], x = new Jf; let w = null, k = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (W) { let tt = T[W]; return tt === void 0 && (tt = new Gr, T[W] = tt), tt.getTargetRaySpace() }, this.getControllerGrip = function (W) { let tt = T[W]; return tt === void 0 && (tt = new Gr, T[W] = tt), tt.getGripSpace() }, this.getHand = function (W) { let tt = T[W]; return tt === void 0 && (tt = new Gr, T[W] = tt), tt.getHandSpace() }; function z (W) { const tt = E.indexOf(W.inputSource); if (tt === -1) return; const _t = T[tt]; _t !== void 0 && (_t.update(W.inputSource, W.frame, c || o), _t.dispatchEvent({ type: W.type, data: W.inputSource })) } function Z () { r.removeEventListener("select", z), r.removeEventListener("selectstart", z), r.removeEventListener("selectend", z), r.removeEventListener("squeeze", z), r.removeEventListener("squeezestart", z), r.removeEventListener("squeezeend", z), r.removeEventListener("end", Z), r.removeEventListener("inputsourceschange", K); for (let W = 0; W < T.length; W++) { const tt = E[W]; tt !== null && (E[W] = null, T[W].disconnect(tt)) } w = null, k = null, M.reset(), t.setRenderTarget(h), m = null, f = null, d = null, r = null, A = null, Yt.stop(), n.isPresenting = !1, t.setPixelRatio(C), t.setSize(B.width, B.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (W) { s = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (W) { a = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return c || o }, this.setReferenceSpace = function (W) { c = W }, this.getBaseLayer = function () { return f !== null ? f : m }, this.getBinding = function () { return d }, this.getFrame = function () { return v }, this.getSession = function () { return r }, this.setSession = async function (W) { if (r = W, r !== null) { if (h = t.getRenderTarget(), r.addEventListener("select", z), r.addEventListener("selectstart", z), r.addEventListener("selectend", z), r.addEventListener("squeeze", z), r.addEventListener("squeezestart", z), r.addEventListener("squeezeend", z), r.addEventListener("end", Z), r.addEventListener("inputsourceschange", K), p.xrCompatible !== !0 && await e.makeXRCompatible(), C = t.getPixelRatio(), t.getSize(B), r.renderState.layers === void 0) { const tt = { antialias: p.antialias, alpha: !0, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: s }; m = new XRWebGLLayer(r, e, tt), r.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, !1), A = new Dn(m.framebufferWidth, m.framebufferHeight, { format: Ue, type: Qe, colorSpace: t.outputColorSpace, stencilBuffer: p.stencil }) } else { let tt = null, _t = null, rt = null; p.depth && (rt = p.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, tt = p.stencil ? si : Qn, _t = p.stencil ? ri : Ln); const yt = { colorFormat: e.RGBA8, depthFormat: rt, scaleFactor: s }; d = new XRWebGLBinding(r, e), f = d.createProjectionLayer(yt), r.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), A = new Dn(f.textureWidth, f.textureHeight, { format: Ue, type: Qe, depthTexture: new Uo(f.textureWidth, f.textureHeight, _t, void 0, void 0, void 0, void 0, void 0, void 0, tt), stencilBuffer: p.stencil, colorSpace: t.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === !1 }) } A.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), Yt.setContext(r), Yt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (r !== null) return r.environmentBlendMode }, this.getDepthTexture = function () { return M.getDepthTexture() }; function K (W) { for (let tt = 0; tt < W.removed.length; tt++) { const _t = W.removed[tt], rt = E.indexOf(_t); rt >= 0 && (E[rt] = null, T[rt].disconnect(_t)) } for (let tt = 0; tt < W.added.length; tt++) { const _t = W.added[tt]; let rt = E.indexOf(_t); if (rt === -1) { for (let bt = 0; bt < T.length; bt++)if (bt >= E.length) { E.push(_t), rt = bt; break } else if (E[bt] === null) { E[bt] = _t, rt = bt; break } if (rt === -1) break } const yt = T[rt]; yt && yt.connect(_t) } } const X = new N, j = new N; function V (W, tt, _t) { X.setFromMatrixPosition(tt.matrixWorld), j.setFromMatrixPosition(_t.matrixWorld); const rt = X.distanceTo(j), yt = tt.projectionMatrix.elements, bt = _t.projectionMatrix.elements, Ut = yt[14] / (yt[10] - 1), Qt = yt[14] / (yt[10] + 1), Ot = (yt[9] + 1) / yt[5], ie = (yt[9] - 1) / yt[5], D = (yt[8] - 1) / yt[0], Ee = (bt[8] + 1) / bt[0], It = Ut * D, Nt = Ut * Ee, St = rt / (-D + Ee), $t = St * -D; if (tt.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX($t), W.translateZ(St), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), yt[10] === -1) W.projectionMatrix.copy(tt.projectionMatrix), W.projectionMatrixInverse.copy(tt.projectionMatrixInverse); else { const Mt = Ut + St, y = Qt + St, _ = It - $t, I = Nt + (rt - $t), q = Ot * Qt / y * Mt, $ = ie * Qt / y * Mt; W.projectionMatrix.makePerspective(_, I, q, $, Mt, y), W.projectionMatrixInverse.copy(W.projectionMatrix).invert() } } function it (W, tt) { tt === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(tt.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert() } this.updateCamera = function (W) { if (r === null) return; let tt = W.near, _t = W.far; M.texture !== null && (M.depthNear > 0 && (tt = M.depthNear), M.depthFar > 0 && (_t = M.depthFar)), x.near = U.near = b.near = tt, x.far = U.far = b.far = _t, (w !== x.near || k !== x.far) && (r.updateRenderState({ depthNear: x.near, depthFar: x.far }), w = x.near, k = x.far), b.layers.mask = W.layers.mask | 2, U.layers.mask = W.layers.mask | 4, x.layers.mask = b.layers.mask | U.layers.mask; const rt = W.parent, yt = x.cameras; it(x, rt); for (let bt = 0; bt < yt.length; bt++)it(yt[bt], rt); yt.length === 2 ? V(x, b, U) : x.projectionMatrix.copy(b.projectionMatrix), ct(W, x, rt) }; function ct (W, tt, _t) { _t === null ? W.matrix.copy(tt.matrixWorld) : (W.matrix.copy(_t.matrixWorld), W.matrix.invert(), W.matrix.multiply(tt.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(!0), W.projectionMatrix.copy(tt.projectionMatrix), W.projectionMatrixInverse.copy(tt.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = Ai * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1) } this.getCamera = function () { return x }, this.getFoveation = function () { if (!(f === null && m === null)) return l }, this.setFoveation = function (W) { l = W, f !== null && (f.fixedFoveation = W), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W) }, this.hasDepthSensing = function () { return M.texture !== null }, this.getDepthSensingMesh = function () { return M.getMesh(x) }; let xt = null; function Dt (W, tt) { if (u = tt.getViewerPose(c || o), v = tt, u !== null) { const _t = u.views; m !== null && (t.setRenderTargetFramebuffer(A, m.framebuffer), t.setRenderTarget(A)); let rt = !1; _t.length !== x.cameras.length && (x.cameras.length = 0, rt = !0); for (let bt = 0; bt < _t.length; bt++) { const Ut = _t[bt]; let Qt = null; if (m !== null) Qt = m.getViewport(Ut); else { const ie = d.getViewSubImage(f, Ut); Qt = ie.viewport, bt === 0 && (t.setRenderTargetTextures(A, ie.colorTexture, f.ignoreDepthValues ? void 0 : ie.depthStencilTexture), t.setRenderTarget(A)) } let Ot = S[bt]; Ot === void 0 && (Ot = new Le, Ot.layers.enable(bt), Ot.viewport = new ee, S[bt] = Ot), Ot.matrix.fromArray(Ut.transform.matrix), Ot.matrix.decompose(Ot.position, Ot.quaternion, Ot.scale), Ot.projectionMatrix.fromArray(Ut.projectionMatrix), Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(), Ot.viewport.set(Qt.x, Qt.y, Qt.width, Qt.height), bt === 0 && (x.matrix.copy(Ot.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)), rt === !0 && x.cameras.push(Ot) } const yt = r.enabledFeatures; if (yt && yt.includes("depth-sensing")) { const bt = d.getDepthInformation(_t[0]); bt && bt.isValid && bt.texture && M.init(t, bt, r.renderState) } } for (let _t = 0; _t < T.length; _t++) { const rt = E[_t], yt = T[_t]; rt !== null && yt !== void 0 && yt.update(rt, tt, c || o) } xt && xt(W, tt), tt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: tt }), v = null } const Yt = new Do; Yt.setAnimationLoop(Dt), this.setAnimationLoop = function (W) { xt = W }, this.dispose = function () { } } } const Sn = new Se, rp = new ne; function sp (i, t) { function e (p, h) { p.matrixAutoUpdate === !0 && p.updateMatrix(), h.value.copy(p.matrix) } function n (p, h) { h.color.getRGB(p.fogColor.value, Co(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density) } function r (p, h, A, T, E) { h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), d(p, h)) : h.isMeshPhongMaterial ? (s(p, h), u(p, h)) : h.isMeshStandardMaterial ? (s(p, h), f(p, h), h.isMeshPhysicalMaterial && m(p, h, E)) : h.isMeshMatcapMaterial ? (s(p, h), v(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), M(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h)) : h.isPointsMaterial ? l(p, h, A, T) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1) } function s (p, h) { p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, e(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === ge && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, e(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === ge && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, e(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, e(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest); const A = t.get(h), T = A.envMap, E = A.envMapRotation; T && (p.envMap.value = T, Sn.copy(E), Sn.x *= -1, Sn.y *= -1, Sn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (Sn.y *= -1, Sn.z *= -1), p.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Sn)), p.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, p.aoMapTransform)) } function o (p, h) { p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, e(h.map, p.mapTransform)) } function a (p, h) { p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale } function l (p, h, A, T) { p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * A, p.scale.value = T * .5, h.map && (p.map.value = h.map, e(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest) } function c (p, h) { p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, e(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, e(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest) } function u (p, h) { p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4) } function d (p, h) { h.gradientMap && (p.gradientMap.value = h.gradientMap) } function f (p, h) { p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity) } function m (p, h, A) { p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === ge && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = A.texture, p.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, p.specularIntensityMapTransform)) } function v (p, h) { h.matcap && (p.matcap.value = h.matcap) } function M (p, h) { const A = t.get(h).light; p.referencePosition.value.setFromMatrixPosition(A.matrixWorld), p.nearDistance.value = A.shadow.camera.near, p.farDistance.value = A.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: r } } function ap (i, t, e, n) { let r = {}, s = {}, o = []; const a = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS); function l (A, T) { const E = T.program; n.uniformBlockBinding(A, E) } function c (A, T) { let E = r[A.id]; E === void 0 && (v(A), E = u(A), r[A.id] = E, A.addEventListener("dispose", p)); const B = T.program; n.updateUBOMapping(A, B); const C = t.render.frame; s[A.id] !== C && (f(A), s[A.id] = C) } function u (A) { const T = d(); A.__bindingPointIndex = T; const E = i.createBuffer(), B = A.__size, C = A.usage; return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, B, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, E), E } function d () { for (let A = 0; A < a; A++)if (o.indexOf(A) === -1) return o.push(A), A; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function f (A) { const T = r[A.id], E = A.uniforms, B = A.__cache; i.bindBuffer(i.UNIFORM_BUFFER, T); for (let C = 0, b = E.length; C < b; C++) { const U = Array.isArray(E[C]) ? E[C] : [E[C]]; for (let S = 0, x = U.length; S < x; S++) { const w = U[S]; if (m(w, C, S, B) === !0) { const k = w.__offset, z = Array.isArray(w.value) ? w.value : [w.value]; let Z = 0; for (let K = 0; K < z.length; K++) { const X = z[K], j = M(X); typeof X == "number" || typeof X == "boolean" ? (w.__data[0] = X, i.bufferSubData(i.UNIFORM_BUFFER, k + Z, w.__data)) : X.isMatrix3 ? (w.__data[0] = X.elements[0], w.__data[1] = X.elements[1], w.__data[2] = X.elements[2], w.__data[3] = 0, w.__data[4] = X.elements[3], w.__data[5] = X.elements[4], w.__data[6] = X.elements[5], w.__data[7] = 0, w.__data[8] = X.elements[6], w.__data[9] = X.elements[7], w.__data[10] = X.elements[8], w.__data[11] = 0) : (X.toArray(w.__data, Z), Z += j.storage / Float32Array.BYTES_PER_ELEMENT) } i.bufferSubData(i.UNIFORM_BUFFER, k, w.__data) } } } i.bindBuffer(i.UNIFORM_BUFFER, null) } function m (A, T, E, B) { const C = A.value, b = T + "_" + E; if (B[b] === void 0) return typeof C == "number" || typeof C == "boolean" ? B[b] = C : B[b] = C.clone(), !0; { const U = B[b]; if (typeof C == "number" || typeof C == "boolean") { if (U !== C) return B[b] = C, !0 } else if (U.equals(C) === !1) return U.copy(C), !0 } return !1 } function v (A) { const T = A.uniforms; let E = 0; const B = 16; for (let b = 0, U = T.length; b < U; b++) { const S = Array.isArray(T[b]) ? T[b] : [T[b]]; for (let x = 0, w = S.length; x < w; x++) { const k = S[x], z = Array.isArray(k.value) ? k.value : [k.value]; for (let Z = 0, K = z.length; Z < K; Z++) { const X = z[Z], j = M(X), V = E % B, it = V % j.boundary, ct = V + it; E += it, ct !== 0 && B - ct < j.storage && (E += B - ct), k.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = E, E += j.storage } } } const C = E % B; return C > 0 && (E += B - C), A.__size = E, A.__cache = {}, this } function M (A) { const T = { boundary: 0, storage: 0 }; return typeof A == "number" || typeof A == "boolean" ? (T.boundary = 4, T.storage = 4) : A.isVector2 ? (T.boundary = 8, T.storage = 8) : A.isVector3 || A.isColor ? (T.boundary = 16, T.storage = 12) : A.isVector4 ? (T.boundary = 16, T.storage = 16) : A.isMatrix3 ? (T.boundary = 48, T.storage = 48) : A.isMatrix4 ? (T.boundary = 64, T.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), T } function p (A) { const T = A.target; T.removeEventListener("dispose", p); const E = o.indexOf(T.__bindingPointIndex); o.splice(E, 1), i.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id] } function h () { for (const A in r) i.deleteBuffer(r[A]); o = [], r = {}, s = {} } return { bind: l, update: c, dispose: h } } class op { constructor (t = {}) { const { canvas: e = Yl(), context: n = null, depth: r = !0, stencil: s = !1, alpha: o = !1, antialias: a = !1, premultipliedAlpha: l = !0, preserveDrawingBuffer: c = !1, powerPreference: u = "default", failIfMajorPerformanceCaveat: d = !1, reverseDepthBuffer: f = !1 } = t; this.isWebGLRenderer = !0; let m; if (n !== null) { if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163."); m = n.getContextAttributes().alpha } else m = o; const v = new Uint32Array(4), M = new Int32Array(4); let p = null, h = null; const A = [], T = []; this.domElement = e, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Ae, this.toneMapping = hn, this.toneMappingExposure = 1; const E = this; let B = !1, C = 0, b = 0, U = null, S = -1, x = null; const w = new ee, k = new ee; let z = null; const Z = new Vt(0); let K = 0, X = e.width, j = e.height, V = 1, it = null, ct = null; const xt = new ee(0, 0, X, j), Dt = new ee(0, 0, X, j); let Yt = !1; const W = new Vs; let tt = !1, _t = !1; const rt = new ne, yt = new ne, bt = new N, Ut = new ee, Qt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; let Ot = !1; function ie () { return U === null ? V : 1 } let D = n; function Ee (g, P) { return e.getContext(g, P) } try { const g = { alpha: !0, depth: r, stencil: s, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u, failIfMajorPerformanceCaveat: d }; if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ds}`), e.addEventListener("webglcontextlost", Y, !1), e.addEventListener("webglcontextrestored", lt, !1), e.addEventListener("webglcontextcreationerror", at, !1), D === null) { const P = "webgl2"; if (D = Ee(P, g), D === null) throw Ee(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } } catch (g) { throw console.error("THREE.WebGLRenderer: " + g.message), g } let It, Nt, St, $t, Mt, y, _, I, q, $, G, gt, st, ut, Bt, J, ht, Et, Tt, dt, Ft, Pt, Zt, R; function nt () { It = new hd(D), It.init(), Pt = new jf(D, It), Nt = new sd(D, It, t, Pt), St = new Zf(D, It), Nt.reverseDepthBuffer && f && St.buffers.depth.setReversed(!0), $t = new pd(D), Mt = new Uf, y = new $f(D, It, St, Mt, Nt, Pt, $t), _ = new od(E), I = new ud(E), q = new Sc(D), Zt = new id(D, q), $ = new dd(D, q, $t, Zt), G = new _d(D, $, q, $t), Tt = new md(D, Nt, y), J = new ad(Mt), gt = new Df(E, _, I, It, Nt, Zt, J), st = new sp(E, Mt), ut = new Nf, Bt = new Vf(It), Et = new nd(E, _, I, St, G, m, l), ht = new qf(E, G, Nt), R = new ap(D, $t, Nt, St), dt = new rd(D, It, $t), Ft = new fd(D, It, $t), $t.programs = gt.programs, E.capabilities = Nt, E.extensions = It, E.properties = Mt, E.renderLists = ut, E.shadowMap = ht, E.state = St, E.info = $t } nt(); const H = new ip(E, D); this.xr = H, this.getContext = function () { return D }, this.getContextAttributes = function () { return D.getContextAttributes() }, this.forceContextLoss = function () { const g = It.get("WEBGL_lose_context"); g && g.loseContext() }, this.forceContextRestore = function () { const g = It.get("WEBGL_lose_context"); g && g.restoreContext() }, this.getPixelRatio = function () { return V }, this.setPixelRatio = function (g) { g !== void 0 && (V = g, this.setSize(X, j, !1)) }, this.getSize = function (g) { return g.set(X, j) }, this.setSize = function (g, P, F = !0) { if (H.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } X = g, j = P, e.width = Math.floor(g * V), e.height = Math.floor(P * V), F === !0 && (e.style.width = g + "px", e.style.height = P + "px"), this.setViewport(0, 0, g, P) }, this.getDrawingBufferSize = function (g) { return g.set(X * V, j * V).floor() }, this.setDrawingBufferSize = function (g, P, F) { X = g, j = P, V = F, e.width = Math.floor(g * F), e.height = Math.floor(P * F), this.setViewport(0, 0, g, P) }, this.getCurrentViewport = function (g) { return g.copy(w) }, this.getViewport = function (g) { return g.copy(xt) }, this.setViewport = function (g, P, F, O) { g.isVector4 ? xt.set(g.x, g.y, g.z, g.w) : xt.set(g, P, F, O), St.viewport(w.copy(xt).multiplyScalar(V).round()) }, this.getScissor = function (g) { return g.copy(Dt) }, this.setScissor = function (g, P, F, O) { g.isVector4 ? Dt.set(g.x, g.y, g.z, g.w) : Dt.set(g, P, F, O), St.scissor(k.copy(Dt).multiplyScalar(V).round()) }, this.getScissorTest = function () { return Yt }, this.setScissorTest = function (g) { St.setScissorTest(Yt = g) }, this.setOpaqueSort = function (g) { it = g }, this.setTransparentSort = function (g) { ct = g }, this.getClearColor = function (g) { return g.copy(Et.getClearColor()) }, this.setClearColor = function () { Et.setClearColor.apply(Et, arguments) }, this.getClearAlpha = function () { return Et.getClearAlpha() }, this.setClearAlpha = function () { Et.setClearAlpha.apply(Et, arguments) }, this.clear = function (g = !0, P = !0, F = !0) { let O = 0; if (g) { let L = !1; if (U !== null) { const Q = U.texture.format; L = Q === Bs || Q === Os || Q === Fs } if (L) { const Q = U.texture.type, ot = Q === Qe || Q === Ln || Q === Ti || Q === ri || Q === Is || Q === Ns, ft = Et.getClearColor(), pt = Et.getClearAlpha(), At = ft.r, Rt = ft.g, mt = ft.b; ot ? (v[0] = At, v[1] = Rt, v[2] = mt, v[3] = pt, D.clearBufferuiv(D.COLOR, 0, v)) : (M[0] = At, M[1] = Rt, M[2] = mt, M[3] = pt, D.clearBufferiv(D.COLOR, 0, M)) } else O |= D.COLOR_BUFFER_BIT } P && (O |= D.DEPTH_BUFFER_BIT), F && (O |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), D.clear(O) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { e.removeEventListener("webglcontextlost", Y, !1), e.removeEventListener("webglcontextrestored", lt, !1), e.removeEventListener("webglcontextcreationerror", at, !1), ut.dispose(), Bt.dispose(), Mt.dispose(), _.dispose(), I.dispose(), G.dispose(), Zt.dispose(), R.dispose(), gt.dispose(), H.dispose(), H.removeEventListener("sessionstart", Ws), H.removeEventListener("sessionend", Xs), mn.stop() }; function Y (g) { g.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), B = !0 } function lt () { console.log("THREE.WebGLRenderer: Context Restored."), B = !1; const g = $t.autoReset, P = ht.enabled, F = ht.autoUpdate, O = ht.needsUpdate, L = ht.type; nt(), $t.autoReset = g, ht.enabled = P, ht.autoUpdate = F, ht.needsUpdate = O, ht.type = L } function at (g) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", g.statusMessage) } function wt (g) { const P = g.target; P.removeEventListener("dispose", wt), te(P) } function te (g) { ce(g), Mt.remove(g) } function ce (g) { const P = Mt.get(g).programs; P !== void 0 && (P.forEach(function (F) { gt.releaseProgram(F) }), g.isShaderMaterial && gt.releaseShaderCache(g)) } this.renderBufferDirect = function (g, P, F, O, L, Q) { P === null && (P = Qt); const ot = L.isMesh && L.matrixWorld.determinant() < 0, ft = Vo(g, P, F, O, L); St.setMaterial(O, ot); let pt = F.index, At = 1; if (O.wireframe === !0) { if (pt = $.getWireframeAttribute(F), pt === void 0) return; At = 2 } const Rt = F.drawRange, mt = F.attributes.position; let Ht = Rt.start * At, Kt = (Rt.start + Rt.count) * At; Q !== null && (Ht = Math.max(Ht, Q.start * At), Kt = Math.min(Kt, (Q.start + Q.count) * At)), pt !== null ? (Ht = Math.max(Ht, 0), Kt = Math.min(Kt, pt.count)) : mt != null && (Ht = Math.max(Ht, 0), Kt = Math.min(Kt, mt.count)); const jt = Kt - Ht; if (jt < 0 || jt === 1 / 0) return; Zt.setup(L, O, ft, F, pt); let _e, Gt = dt; if (pt !== null && (_e = q.get(pt), Gt = Ft, Gt.setIndex(_e)), L.isMesh) O.wireframe === !0 ? (St.setLineWidth(O.wireframeLinewidth * ie()), Gt.setMode(D.LINES)) : Gt.setMode(D.TRIANGLES); else if (L.isLine) { let vt = O.linewidth; vt === void 0 && (vt = 1), St.setLineWidth(vt * ie()), L.isLineSegments ? Gt.setMode(D.LINES) : L.isLineLoop ? Gt.setMode(D.LINE_LOOP) : Gt.setMode(D.LINE_STRIP) } else L.isPoints ? Gt.setMode(D.POINTS) : L.isSprite && Gt.setMode(D.TRIANGLES); if (L.isBatchedMesh) if (L._multiDrawInstances !== null) Gt.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances); else if (It.get("WEBGL_multi_draw")) Gt.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount); else { const vt = L._multiDrawStarts, Ve = L._multiDrawCounts, kt = L._multiDrawCount, we = pt ? q.get(pt).bytesPerElement : 1, In = Mt.get(O).currentProgram.getUniforms(); for (let ve = 0; ve < kt; ve++)In.setValue(D, "_gl_DrawID", ve), Gt.render(vt[ve] / we, Ve[ve]) } else if (L.isInstancedMesh) Gt.renderInstances(Ht, jt, L.count); else if (F.isInstancedBufferGeometry) { const vt = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, Ve = Math.min(F.instanceCount, vt); Gt.renderInstances(Ht, jt, Ve) } else Gt.render(Ht, jt) }; function Xt (g, P, F) { g.transparent === !0 && g.side === Ke && g.forceSinglePass === !1 ? (g.side = ge, g.needsUpdate = !0, Di(g, P, F), g.side = dn, g.needsUpdate = !0, Di(g, P, F), g.side = Ke) : Di(g, P, F) } this.compile = function (g, P, F = null) { F === null && (F = g), h = Bt.get(F), h.init(P), T.push(h), F.traverseVisible(function (L) { L.isLight && L.layers.test(P.layers) && (h.pushLight(L), L.castShadow && h.pushShadow(L)) }), g !== F && g.traverseVisible(function (L) { L.isLight && L.layers.test(P.layers) && (h.pushLight(L), L.castShadow && h.pushShadow(L)) }), h.setupLights(); const O = new Set; return g.traverse(function (L) { if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite)) return; const Q = L.material; if (Q) if (Array.isArray(Q)) for (let ot = 0; ot < Q.length; ot++) { const ft = Q[ot]; Xt(ft, F, L), O.add(ft) } else Xt(Q, F, L), O.add(Q) }), T.pop(), h = null, O }, this.compileAsync = function (g, P, F = null) { const O = this.compile(g, P, F); return new Promise(L => { function Q () { if (O.forEach(function (ot) { Mt.get(ot).currentProgram.isReady() && O.delete(ot) }), O.size === 0) { L(g); return } setTimeout(Q, 10) } It.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10) }) }; let be = null; function He (g) { be && be(g) } function Ws () { mn.stop() } function Xs () { mn.start() } const mn = new Do; mn.setAnimationLoop(He), typeof self < "u" && mn.setContext(self), this.setAnimationLoop = function (g) { be = g, H.setAnimationLoop(g), g === null ? mn.stop() : mn.start() }, H.addEventListener("sessionstart", Ws), H.addEventListener("sessionend", Xs), this.render = function (g, P) { if (P !== void 0 && P.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (B === !0) return; if (g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), H.enabled === !0 && H.isPresenting === !0 && (H.cameraAutoUpdate === !0 && H.updateCamera(P), P = H.getCamera()), g.isScene === !0 && g.onBeforeRender(E, g, P, U), h = Bt.get(g, T.length), h.init(P), T.push(h), yt.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), W.setFromProjectionMatrix(yt), _t = this.localClippingEnabled, tt = J.init(this.clippingPlanes, _t), p = ut.get(g, A.length), p.init(), A.push(p), H.enabled === !0 && H.isPresenting === !0) { const Q = E.xr.getDepthSensingMesh(); Q !== null && pr(Q, P, -1 / 0, E.sortObjects) } pr(g, P, 0, E.sortObjects), p.finish(), E.sortObjects === !0 && p.sort(it, ct), Ot = H.enabled === !1 || H.isPresenting === !1 || H.hasDepthSensing() === !1, Ot && Et.addToRenderList(p, g), this.info.render.frame++, tt === !0 && J.beginShadows(); const F = h.state.shadowsArray; ht.render(F, g, P), tt === !0 && J.endShadows(), this.info.autoReset === !0 && this.info.reset(); const O = p.opaque, L = p.transmissive; if (h.setupLights(), P.isArrayCamera) { const Q = P.cameras; if (L.length > 0) for (let ot = 0, ft = Q.length; ot < ft; ot++) { const pt = Q[ot]; Ys(O, L, g, pt) } Ot && Et.render(g); for (let ot = 0, ft = Q.length; ot < ft; ot++) { const pt = Q[ot]; qs(p, g, pt, pt.viewport) } } else L.length > 0 && Ys(O, L, g, P), Ot && Et.render(g), qs(p, g, P); U !== null && (y.updateMultisampleRenderTarget(U), y.updateRenderTargetMipmap(U)), g.isScene === !0 && g.onAfterRender(E, g, P), Zt.resetDefaultState(), S = -1, x = null, T.pop(), T.length > 0 ? (h = T[T.length - 1], tt === !0 && J.setGlobalState(E.clippingPlanes, h.state.camera)) : h = null, A.pop(), A.length > 0 ? p = A[A.length - 1] : p = null }; function pr (g, P, F, O) { if (g.visible === !1) return; if (g.layers.test(P.layers)) { if (g.isGroup) F = g.renderOrder; else if (g.isLOD) g.autoUpdate === !0 && g.update(P); else if (g.isLight) h.pushLight(g), g.castShadow && h.pushShadow(g); else if (g.isSprite) { if (!g.frustumCulled || W.intersectsSprite(g)) { O && Ut.setFromMatrixPosition(g.matrixWorld).applyMatrix4(yt); const ot = G.update(g), ft = g.material; ft.visible && p.push(g, ot, ft, F, Ut.z, null) } } else if ((g.isMesh || g.isLine || g.isPoints) && (!g.frustumCulled || W.intersectsObject(g))) { const ot = G.update(g), ft = g.material; if (O && (g.boundingSphere !== void 0 ? (g.boundingSphere === null && g.computeBoundingSphere(), Ut.copy(g.boundingSphere.center)) : (ot.boundingSphere === null && ot.computeBoundingSphere(), Ut.copy(ot.boundingSphere.center)), Ut.applyMatrix4(g.matrixWorld).applyMatrix4(yt)), Array.isArray(ft)) { const pt = ot.groups; for (let At = 0, Rt = pt.length; At < Rt; At++) { const mt = pt[At], Ht = ft[mt.materialIndex]; Ht && Ht.visible && p.push(g, ot, Ht, F, Ut.z, mt) } } else ft.visible && p.push(g, ot, ft, F, Ut.z, null) } } const Q = g.children; for (let ot = 0, ft = Q.length; ot < ft; ot++)pr(Q[ot], P, F, O) } function qs (g, P, F, O) { const L = g.opaque, Q = g.transmissive, ot = g.transparent; h.setupLightsView(F), tt === !0 && J.setGlobalState(E.clippingPlanes, F), O && St.viewport(w.copy(O)), L.length > 0 && Li(L, P, F), Q.length > 0 && Li(Q, P, F), ot.length > 0 && Li(ot, P, F), St.buffers.depth.setTest(!0), St.buffers.depth.setMask(!0), St.buffers.color.setMask(!0), St.setPolygonOffset(!1) } function Ys (g, P, F, O) { if ((F.isScene === !0 ? F.overrideMaterial : null) !== null) return; h.state.transmissionRenderTarget[O.id] === void 0 && (h.state.transmissionRenderTarget[O.id] = new Dn(1, 1, { generateMipmaps: !0, type: It.has("EXT_color_buffer_half_float") || It.has("EXT_color_buffer_float") ? wi : Qe, minFilter: Cn, samples: 4, stencilBuffer: s, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: zt.workingColorSpace })); const Q = h.state.transmissionRenderTarget[O.id], ot = O.viewport || w; Q.setSize(ot.z, ot.w); const ft = E.getRenderTarget(); E.setRenderTarget(Q), E.getClearColor(Z), K = E.getClearAlpha(), K < 1 && E.setClearColor(16777215, .5), E.clear(), Ot && Et.render(F); const pt = E.toneMapping; E.toneMapping = hn; const At = O.viewport; if (O.viewport !== void 0 && (O.viewport = void 0), h.setupLightsView(O), tt === !0 && J.setGlobalState(E.clippingPlanes, O), Li(g, F, O), y.updateMultisampleRenderTarget(Q), y.updateRenderTargetMipmap(Q), It.has("WEBGL_multisampled_render_to_texture") === !1) { let Rt = !1; for (let mt = 0, Ht = P.length; mt < Ht; mt++) { const Kt = P[mt], jt = Kt.object, _e = Kt.geometry, Gt = Kt.material, vt = Kt.group; if (Gt.side === Ke && jt.layers.test(O.layers)) { const Ve = Gt.side; Gt.side = ge, Gt.needsUpdate = !0, Zs(jt, F, O, _e, Gt, vt), Gt.side = Ve, Gt.needsUpdate = !0, Rt = !0 } } Rt === !0 && (y.updateMultisampleRenderTarget(Q), y.updateRenderTargetMipmap(Q)) } E.setRenderTarget(ft), E.setClearColor(Z, K), At !== void 0 && (O.viewport = At), E.toneMapping = pt } function Li (g, P, F) { const O = P.isScene === !0 ? P.overrideMaterial : null; for (let L = 0, Q = g.length; L < Q; L++) { const ot = g[L], ft = ot.object, pt = ot.geometry, At = O === null ? ot.material : O, Rt = ot.group; ft.layers.test(F.layers) && Zs(ft, P, F, pt, At, Rt) } } function Zs (g, P, F, O, L, Q) { g.onBeforeRender(E, P, F, O, L, Q), g.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, g.matrixWorld), g.normalMatrix.getNormalMatrix(g.modelViewMatrix), L.onBeforeRender(E, P, F, O, g, Q), L.transparent === !0 && L.side === Ke && L.forceSinglePass === !1 ? (L.side = ge, L.needsUpdate = !0, E.renderBufferDirect(F, P, O, L, g, Q), L.side = dn, L.needsUpdate = !0, E.renderBufferDirect(F, P, O, L, g, Q), L.side = Ke) : E.renderBufferDirect(F, P, O, L, g, Q), g.onAfterRender(E, P, F, O, L, Q) } function Di (g, P, F) { P.isScene !== !0 && (P = Qt); const O = Mt.get(g), L = h.state.lights, Q = h.state.shadowsArray, ot = L.state.version, ft = gt.getParameters(g, L.state, Q, P, F), pt = gt.getProgramCacheKey(ft); let At = O.programs; O.environment = g.isMeshStandardMaterial ? P.environment : null, O.fog = P.fog, O.envMap = (g.isMeshStandardMaterial ? I : _).get(g.envMap || O.environment), O.envMapRotation = O.environment !== null && g.envMap === null ? P.environmentRotation : g.envMapRotation, At === void 0 && (g.addEventListener("dispose", wt), At = new Map, O.programs = At); let Rt = At.get(pt); if (Rt !== void 0) { if (O.currentProgram === Rt && O.lightsStateVersion === ot) return $s(g, ft), Rt } else ft.uniforms = gt.getUniforms(g), g.onBeforeCompile(ft, E), Rt = gt.acquireProgram(ft, pt), At.set(pt, Rt), O.uniforms = ft.uniforms; const mt = O.uniforms; return (!g.isShaderMaterial && !g.isRawShaderMaterial || g.clipping === !0) && (mt.clippingPlanes = J.uniform), $s(g, ft), O.needsLights = ko(g), O.lightsStateVersion = ot, O.needsLights && (mt.ambientLightColor.value = L.state.ambient, mt.lightProbe.value = L.state.probe, mt.directionalLights.value = L.state.directional, mt.directionalLightShadows.value = L.state.directionalShadow, mt.spotLights.value = L.state.spot, mt.spotLightShadows.value = L.state.spotShadow, mt.rectAreaLights.value = L.state.rectArea, mt.ltc_1.value = L.state.rectAreaLTC1, mt.ltc_2.value = L.state.rectAreaLTC2, mt.pointLights.value = L.state.point, mt.pointLightShadows.value = L.state.pointShadow, mt.hemisphereLights.value = L.state.hemi, mt.directionalShadowMap.value = L.state.directionalShadowMap, mt.directionalShadowMatrix.value = L.state.directionalShadowMatrix, mt.spotShadowMap.value = L.state.spotShadowMap, mt.spotLightMatrix.value = L.state.spotLightMatrix, mt.spotLightMap.value = L.state.spotLightMap, mt.pointShadowMap.value = L.state.pointShadowMap, mt.pointShadowMatrix.value = L.state.pointShadowMatrix), O.currentProgram = Rt, O.uniformsList = null, Rt } function Ks (g) { if (g.uniformsList === null) { const P = g.currentProgram.getUniforms(); g.uniformsList = or.seqWithValue(P.seq, g.uniforms) } return g.uniformsList } function $s (g, P) { const F = Mt.get(g); F.outputColorSpace = P.outputColorSpace, F.batching = P.batching, F.batchingColor = P.batchingColor, F.instancing = P.instancing, F.instancingColor = P.instancingColor, F.instancingMorph = P.instancingMorph, F.skinning = P.skinning, F.morphTargets = P.morphTargets, F.morphNormals = P.morphNormals, F.morphColors = P.morphColors, F.morphTargetsCount = P.morphTargetsCount, F.numClippingPlanes = P.numClippingPlanes, F.numIntersection = P.numClipIntersection, F.vertexAlphas = P.vertexAlphas, F.vertexTangents = P.vertexTangents, F.toneMapping = P.toneMapping } function Vo (g, P, F, O, L) { P.isScene !== !0 && (P = Qt), y.resetTextureUnits(); const Q = P.fog, ot = O.isMeshStandardMaterial ? P.environment : null, ft = U === null ? E.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : oi, pt = (O.isMeshStandardMaterial ? I : _).get(O.envMap || ot), At = O.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, Rt = !!F.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), mt = !!F.morphAttributes.position, Ht = !!F.morphAttributes.normal, Kt = !!F.morphAttributes.color; let jt = hn; O.toneMapped && (U === null || U.isXRRenderTarget === !0) && (jt = E.toneMapping); const _e = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, Gt = _e !== void 0 ? _e.length : 0, vt = Mt.get(O), Ve = h.state.lights; if (tt === !0 && (_t === !0 || g !== x)) { const ye = g === x && O.id === S; J.setState(O, g, ye) } let kt = !1; O.version === vt.__version ? (vt.needsLights && vt.lightsStateVersion !== Ve.state.version || vt.outputColorSpace !== ft || L.isBatchedMesh && vt.batching === !1 || !L.isBatchedMesh && vt.batching === !0 || L.isBatchedMesh && vt.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && vt.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && vt.instancing === !1 || !L.isInstancedMesh && vt.instancing === !0 || L.isSkinnedMesh && vt.skinning === !1 || !L.isSkinnedMesh && vt.skinning === !0 || L.isInstancedMesh && vt.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && vt.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && vt.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && vt.instancingMorph === !1 && L.morphTexture !== null || vt.envMap !== pt || O.fog === !0 && vt.fog !== Q || vt.numClippingPlanes !== void 0 && (vt.numClippingPlanes !== J.numPlanes || vt.numIntersection !== J.numIntersection) || vt.vertexAlphas !== At || vt.vertexTangents !== Rt || vt.morphTargets !== mt || vt.morphNormals !== Ht || vt.morphColors !== Kt || vt.toneMapping !== jt || vt.morphTargetsCount !== Gt) && (kt = !0) : (kt = !0, vt.__version = O.version); let we = vt.currentProgram; kt === !0 && (we = Di(O, P, L)); let In = !1, ve = !1, di = !1; const Jt = we.getUniforms(), Ne = vt.uniforms; if (St.useProgram(we.program) && (In = !0, ve = !0, di = !0), O.id !== S && (S = O.id, ve = !0), In || x !== g) { St.buffers.depth.getReversed() ? (rt.copy(g.projectionMatrix), Kl(rt), $l(rt), Jt.setValue(D, "projectionMatrix", rt)) : Jt.setValue(D, "projectionMatrix", g.projectionMatrix), Jt.setValue(D, "viewMatrix", g.matrixWorldInverse); const tn = Jt.map.cameraPosition; tn !== void 0 && tn.setValue(D, bt.setFromMatrixPosition(g.matrixWorld)), Nt.logarithmicDepthBuffer && Jt.setValue(D, "logDepthBufFC", 2 / (Math.log(g.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && Jt.setValue(D, "isOrthographic", g.isOrthographicCamera === !0), x !== g && (x = g, ve = !0, di = !0) } if (L.isSkinnedMesh) { Jt.setOptional(D, L, "bindMatrix"), Jt.setOptional(D, L, "bindMatrixInverse"); const ye = L.skeleton; ye && (ye.boneTexture === null && ye.computeBoneTexture(), Jt.setValue(D, "boneTexture", ye.boneTexture, y)) } L.isBatchedMesh && (Jt.setOptional(D, L, "batchingTexture"), Jt.setValue(D, "batchingTexture", L._matricesTexture, y), Jt.setOptional(D, L, "batchingIdTexture"), Jt.setValue(D, "batchingIdTexture", L._indirectTexture, y), Jt.setOptional(D, L, "batchingColorTexture"), L._colorsTexture !== null && Jt.setValue(D, "batchingColorTexture", L._colorsTexture, y)); const fi = F.morphAttributes; if ((fi.position !== void 0 || fi.normal !== void 0 || fi.color !== void 0) && Tt.update(L, F, we), (ve || vt.receiveShadow !== L.receiveShadow) && (vt.receiveShadow = L.receiveShadow, Jt.setValue(D, "receiveShadow", L.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Ne.envMap.value = pt, Ne.flipEnvMap.value = pt.isCubeTexture && pt.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && P.environment !== null && (Ne.envMapIntensity.value = P.environmentIntensity), ve && (Jt.setValue(D, "toneMappingExposure", E.toneMappingExposure), vt.needsLights && Go(Ne, di), Q && O.fog === !0 && st.refreshFogUniforms(Ne, Q), st.refreshMaterialUniforms(Ne, O, V, j, h.state.transmissionRenderTarget[g.id]), or.upload(D, Ks(vt), Ne, y)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (or.upload(D, Ks(vt), Ne, y), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && Jt.setValue(D, "center", L.center), Jt.setValue(D, "modelViewMatrix", L.modelViewMatrix), Jt.setValue(D, "normalMatrix", L.normalMatrix), Jt.setValue(D, "modelMatrix", L.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) { const ye = O.uniformsGroups; for (let tn = 0, en = ye.length; tn < en; tn++) { const js = ye[tn]; R.update(js, we), R.bind(js, we) } } return we } function Go (g, P) { g.ambientLightColor.needsUpdate = P, g.lightProbe.needsUpdate = P, g.directionalLights.needsUpdate = P, g.directionalLightShadows.needsUpdate = P, g.pointLights.needsUpdate = P, g.pointLightShadows.needsUpdate = P, g.spotLights.needsUpdate = P, g.spotLightShadows.needsUpdate = P, g.rectAreaLights.needsUpdate = P, g.hemisphereLights.needsUpdate = P } function ko (g) { return g.isMeshLambertMaterial || g.isMeshToonMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isShadowMaterial || g.isShaderMaterial && g.lights === !0 } this.getActiveCubeFace = function () { return C }, this.getActiveMipmapLevel = function () { return b }, this.getRenderTarget = function () { return U }, this.setRenderTargetTextures = function (g, P, F) { Mt.get(g.texture).__webglTexture = P, Mt.get(g.depthTexture).__webglTexture = F; const O = Mt.get(g); O.__hasExternalTextures = !0, O.__autoAllocateDepthBuffer = F === void 0, O.__autoAllocateDepthBuffer || It.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = !1) }, this.setRenderTargetFramebuffer = function (g, P) { const F = Mt.get(g); F.__webglFramebuffer = P, F.__useDefaultFramebuffer = P === void 0 }, this.setRenderTarget = function (g, P = 0, F = 0) { U = g, C = P, b = F; let O = !0, L = null, Q = !1, ot = !1; if (g) { const pt = Mt.get(g); if (pt.__useDefaultFramebuffer !== void 0) St.bindFramebuffer(D.FRAMEBUFFER, null), O = !1; else if (pt.__webglFramebuffer === void 0) y.setupRenderTarget(g); else if (pt.__hasExternalTextures) y.rebindTextures(g, Mt.get(g.texture).__webglTexture, Mt.get(g.depthTexture).__webglTexture); else if (g.depthBuffer) { const mt = g.depthTexture; if (pt.__boundDepthTexture !== mt) { if (mt !== null && Mt.has(mt) && (g.width !== mt.image.width || g.height !== mt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."); y.setupDepthRenderbuffer(g) } } const At = g.texture; (At.isData3DTexture || At.isDataArrayTexture || At.isCompressedArrayTexture) && (ot = !0); const Rt = Mt.get(g).__webglFramebuffer; g.isWebGLCubeRenderTarget ? (Array.isArray(Rt[P]) ? L = Rt[P][F] : L = Rt[P], Q = !0) : g.samples > 0 && y.useMultisampledRTT(g) === !1 ? L = Mt.get(g).__webglMultisampledFramebuffer : Array.isArray(Rt) ? L = Rt[F] : L = Rt, w.copy(g.viewport), k.copy(g.scissor), z = g.scissorTest } else w.copy(xt).multiplyScalar(V).floor(), k.copy(Dt).multiplyScalar(V).floor(), z = Yt; if (St.bindFramebuffer(D.FRAMEBUFFER, L) && O && St.drawBuffers(g, L), St.viewport(w), St.scissor(k), St.setScissorTest(z), Q) { const pt = Mt.get(g.texture); D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + P, pt.__webglTexture, F) } else if (ot) { const pt = Mt.get(g.texture), At = P || 0; D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, pt.__webglTexture, F || 0, At) } S = -1 }, this.readRenderTargetPixels = function (g, P, F, O, L, Q, ot) { if (!(g && g.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let ft = Mt.get(g).__webglFramebuffer; if (g.isWebGLCubeRenderTarget && ot !== void 0 && (ft = ft[ot]), ft) { St.bindFramebuffer(D.FRAMEBUFFER, ft); try { const pt = g.texture, At = pt.format, Rt = pt.type; if (!Nt.textureFormatReadable(At)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } if (!Nt.textureTypeReadable(Rt)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } P >= 0 && P <= g.width - O && F >= 0 && F <= g.height - L && D.readPixels(P, F, O, L, Pt.convert(At), Pt.convert(Rt), Q) } finally { const pt = U !== null ? Mt.get(U).__webglFramebuffer : null; St.bindFramebuffer(D.FRAMEBUFFER, pt) } } }, this.readRenderTargetPixelsAsync = async function (g, P, F, O, L, Q, ot) { if (!(g && g.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let ft = Mt.get(g).__webglFramebuffer; if (g.isWebGLCubeRenderTarget && ot !== void 0 && (ft = ft[ot]), ft) { const pt = g.texture, At = pt.format, Rt = pt.type; if (!Nt.textureFormatReadable(At)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."); if (!Nt.textureTypeReadable(Rt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."); if (P >= 0 && P <= g.width - O && F >= 0 && F <= g.height - L) { St.bindFramebuffer(D.FRAMEBUFFER, ft); const mt = D.createBuffer(); D.bindBuffer(D.PIXEL_PACK_BUFFER, mt), D.bufferData(D.PIXEL_PACK_BUFFER, Q.byteLength, D.STREAM_READ), D.readPixels(P, F, O, L, Pt.convert(At), Pt.convert(Rt), 0); const Ht = U !== null ? Mt.get(U).__webglFramebuffer : null; St.bindFramebuffer(D.FRAMEBUFFER, Ht); const Kt = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0); return D.flush(), await Zl(D, Kt, 4), D.bindBuffer(D.PIXEL_PACK_BUFFER, mt), D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, Q), D.deleteBuffer(mt), D.deleteSync(Kt), Q } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.") } }, this.copyFramebufferToTexture = function (g, P = null, F = 0) { g.isTexture !== !0 && (vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."), P = arguments[0] || null, g = arguments[1]); const O = Math.pow(2, -F), L = Math.floor(g.image.width * O), Q = Math.floor(g.image.height * O), ot = P !== null ? P.x : 0, ft = P !== null ? P.y : 0; y.setTexture2D(g, 0), D.copyTexSubImage2D(D.TEXTURE_2D, F, 0, 0, ot, ft, L, Q), St.unbindTexture() }, this.copyTextureToTexture = function (g, P, F = null, O = null, L = 0) { g.isTexture !== !0 && (vi("WebGLRenderer: copyTextureToTexture function signature has changed."), O = arguments[0] || null, g = arguments[1], P = arguments[2], L = arguments[3] || 0, F = null); let Q, ot, ft, pt, At, Rt, mt, Ht, Kt; const jt = g.isCompressedTexture ? g.mipmaps[L] : g.image; F !== null ? (Q = F.max.x - F.min.x, ot = F.max.y - F.min.y, ft = F.isBox3 ? F.max.z - F.min.z : 1, pt = F.min.x, At = F.min.y, Rt = F.isBox3 ? F.min.z : 0) : (Q = jt.width, ot = jt.height, ft = jt.depth || 1, pt = 0, At = 0, Rt = 0), O !== null ? (mt = O.x, Ht = O.y, Kt = O.z) : (mt = 0, Ht = 0, Kt = 0); const _e = Pt.convert(P.format), Gt = Pt.convert(P.type); let vt; P.isData3DTexture ? (y.setTexture3D(P, 0), vt = D.TEXTURE_3D) : P.isDataArrayTexture || P.isCompressedArrayTexture ? (y.setTexture2DArray(P, 0), vt = D.TEXTURE_2D_ARRAY) : (y.setTexture2D(P, 0), vt = D.TEXTURE_2D), D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, P.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, P.unpackAlignment); const Ve = D.getParameter(D.UNPACK_ROW_LENGTH), kt = D.getParameter(D.UNPACK_IMAGE_HEIGHT), we = D.getParameter(D.UNPACK_SKIP_PIXELS), In = D.getParameter(D.UNPACK_SKIP_ROWS), ve = D.getParameter(D.UNPACK_SKIP_IMAGES); D.pixelStorei(D.UNPACK_ROW_LENGTH, jt.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, jt.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, pt), D.pixelStorei(D.UNPACK_SKIP_ROWS, At), D.pixelStorei(D.UNPACK_SKIP_IMAGES, Rt); const di = g.isDataArrayTexture || g.isData3DTexture, Jt = P.isDataArrayTexture || P.isData3DTexture; if (g.isRenderTargetTexture || g.isDepthTexture) { const Ne = Mt.get(g), fi = Mt.get(P), ye = Mt.get(Ne.__renderTarget), tn = Mt.get(fi.__renderTarget); St.bindFramebuffer(D.READ_FRAMEBUFFER, ye.__webglFramebuffer), St.bindFramebuffer(D.DRAW_FRAMEBUFFER, tn.__webglFramebuffer); for (let en = 0; en < ft; en++)di && D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Mt.get(g).__webglTexture, L, Rt + en), g.isDepthTexture ? (Jt && D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Mt.get(P).__webglTexture, L, Kt + en), D.blitFramebuffer(pt, At, Q, ot, mt, Ht, Q, ot, D.DEPTH_BUFFER_BIT, D.NEAREST)) : Jt ? D.copyTexSubImage3D(vt, L, mt, Ht, Kt + en, pt, At, Q, ot) : D.copyTexSubImage2D(vt, L, mt, Ht, Kt + en, pt, At, Q, ot); St.bindFramebuffer(D.READ_FRAMEBUFFER, null), St.bindFramebuffer(D.DRAW_FRAMEBUFFER, null) } else Jt ? g.isDataTexture || g.isData3DTexture ? D.texSubImage3D(vt, L, mt, Ht, Kt, Q, ot, ft, _e, Gt, jt.data) : P.isCompressedArrayTexture ? D.compressedTexSubImage3D(vt, L, mt, Ht, Kt, Q, ot, ft, _e, jt.data) : D.texSubImage3D(vt, L, mt, Ht, Kt, Q, ot, ft, _e, Gt, jt) : g.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, L, mt, Ht, Q, ot, _e, Gt, jt.data) : g.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, L, mt, Ht, jt.width, jt.height, _e, jt.data) : D.texSubImage2D(D.TEXTURE_2D, L, mt, Ht, Q, ot, _e, Gt, jt); D.pixelStorei(D.UNPACK_ROW_LENGTH, Ve), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, kt), D.pixelStorei(D.UNPACK_SKIP_PIXELS, we), D.pixelStorei(D.UNPACK_SKIP_ROWS, In), D.pixelStorei(D.UNPACK_SKIP_IMAGES, ve), L === 0 && P.generateMipmaps && D.generateMipmap(vt), St.unbindTexture() }, this.copyTextureToTexture3D = function (g, P, F = null, O = null, L = 0) { return g.isTexture !== !0 && (vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."), F = arguments[0] || null, O = arguments[1] || null, g = arguments[2], P = arguments[3], L = arguments[4] || 0), vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(g, P, F, O, L) }, this.initRenderTarget = function (g) { Mt.get(g).__webglFramebuffer === void 0 && y.setupRenderTarget(g) }, this.initTexture = function (g) { g.isCubeTexture ? y.setTextureCube(g, 0) : g.isData3DTexture ? y.setTexture3D(g, 0) : g.isDataArrayTexture || g.isCompressedArrayTexture ? y.setTexture2DArray(g, 0) : y.setTexture2D(g, 0), St.unbindTexture() }, this.resetState = function () { C = 0, b = 0, U = null, St.reset(), Zt.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem () { return je } get outputColorSpace () { return this._outputColorSpace } set outputColorSpace (t) { this._outputColorSpace = t; const e = this.getContext(); e.drawingBufferColorspace = zt._getDrawingBufferColorSpace(t), e.unpackColorSpace = zt._getUnpackColorSpace() } } class lp extends le { constructor () { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Se, this.environmentIntensity = 1, this.environmentRotation = new Se, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy (t, e) { return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this } toJSON (t) { const e = super.toJSON(t); return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e } } class cp extends Ci { static get type () { return "MeshStandardMaterial" } constructor (t) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.color = new Vt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Vt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = xo, this.normalScale = new Wt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Se, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t) } copy (t) { return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this } } const cr = { enabled: !1, files: {}, add: function (i, t) { this.enabled !== !1 && (this.files[i] = t) }, get: function (i) { if (this.enabled !== !1) return this.files[i] }, remove: function (i) { delete this.files[i] }, clear: function () { this.files = {} } }; class up { constructor (t, e, n) { const r = this; let s = !1, o = 0, a = 0, l; const c = []; this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (u) { a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), s = !0 }, this.itemEnd = function (u) { o++, r.onProgress !== void 0 && r.onProgress(u, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad()) }, this.itemError = function (u) { r.onError !== void 0 && r.onError(u) }, this.resolveURL = function (u) { return l ? l(u) : u }, this.setURLModifier = function (u) { return l = u, this }, this.addHandler = function (u, d) { return c.push(u, d), this }, this.removeHandler = function (u) { const d = c.indexOf(u); return d !== -1 && c.splice(d, 2), this }, this.getHandler = function (u) { for (let d = 0, f = c.length; d < f; d += 2) { const m = c[d], v = c[d + 1]; if (m.global && (m.lastIndex = 0), m.test(u)) return v } return null } } } const hp = new up; class Pi { constructor (t) { this.manager = t !== void 0 ? t : hp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load () { } loadAsync (t, e) { const n = this; return new Promise(function (r, s) { n.load(t, r, e, s) }) } parse () { } setCrossOrigin (t) { return this.crossOrigin = t, this } setWithCredentials (t) { return this.withCredentials = t, this } setPath (t) { return this.path = t, this } setResourcePath (t) { return this.resourcePath = t, this } setRequestHeader (t) { return this.requestHeader = t, this } } Pi.DEFAULT_MATERIAL_NAME = "__DEFAULT"; const Ye = {}; class dp extends Error { constructor (t, e) { super(t), this.response = e } } class fp extends Pi { constructor (t) { super(t) } load (t, e, n, r) { t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t); const s = cr.get(t); if (s !== void 0) return this.manager.itemStart(t), setTimeout(() => { e && e(s), this.manager.itemEnd(t) }, 0), s; if (Ye[t] !== void 0) { Ye[t].push({ onLoad: e, onProgress: n, onError: r }); return } Ye[t] = [], Ye[t].push({ onLoad: e, onProgress: n, onError: r }); const o = new Request(t, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, l = this.responseType; fetch(o).then(c => { if (c.status === 200 || c.status === 0) { if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c; const u = Ye[t], d = c.body.getReader(), f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), m = f ? parseInt(f) : 0, v = m !== 0; let M = 0; const p = new ReadableStream({ start (h) { A(); function A () { d.read().then(({ done: T, value: E }) => { if (T) h.close(); else { M += E.byteLength; const B = new ProgressEvent("progress", { lengthComputable: v, loaded: M, total: m }); for (let C = 0, b = u.length; C < b; C++) { const U = u[C]; U.onProgress && U.onProgress(B) } h.enqueue(E), A() } }, T => { h.error(T) }) } } }); return new Response(p) } else throw new dp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c) }).then(c => { switch (l) { case "arraybuffer": return c.arrayBuffer(); case "blob": return c.blob(); case "document": return c.text().then(u => new DOMParser().parseFromString(u, a)); case "json": return c.json(); default: if (a === void 0) return c.text(); { const d = /charset="?([^;"\s]*)"?/i.exec(a), f = d && d[1] ? d[1].toLowerCase() : void 0, m = new TextDecoder(f); return c.arrayBuffer().then(v => m.decode(v)) } } }).then(c => { cr.add(t, c); const u = Ye[t]; delete Ye[t]; for (let d = 0, f = u.length; d < f; d++) { const m = u[d]; m.onLoad && m.onLoad(c) } }).catch(c => { const u = Ye[t]; if (u === void 0) throw this.manager.itemError(t), c; delete Ye[t]; for (let d = 0, f = u.length; d < f; d++) { const m = u[d]; m.onError && m.onError(c) } this.manager.itemError(t) }).finally(() => { this.manager.itemEnd(t) }), this.manager.itemStart(t) } setResponseType (t) { return this.responseType = t, this } setMimeType (t) { return this.mimeType = t, this } } class pp extends Pi { constructor (t) { super(t) } load (t, e, n, r) { this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t); const s = this, o = cr.get(t); if (o !== void 0) return s.manager.itemStart(t), setTimeout(function () { e && e(o), s.manager.itemEnd(t) }, 0), o; const a = bi("img"); function l () { u(), cr.add(t, this), e && e(this), s.manager.itemEnd(t) } function c (d) { u(), r && r(d), s.manager.itemError(t), s.manager.itemEnd(t) } function u () { a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1) } return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(t), a.src = t, a } } class mp extends Pi { constructor (t) { super(t) } load (t, e, n, r) { const s = new me, o = new pp(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function (a) { s.image = a, s.needsUpdate = !0, e !== void 0 && e(s) }, n, r), s } } class Bo extends le { constructor (t, e = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Vt(t), this.intensity = e } dispose () { } copy (t, e) { return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this } toJSON (t) { const e = super.toJSON(t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e } } const kr = new ne, ja = new N, Ja = new N; class _p { constructor (t) { this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Wt(512, 512), this.map = null, this.mapPass = null, this.matrix = new ne, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Vs, this._frameExtents = new Wt(1, 1), this._viewportCount = 1, this._viewports = [new ee(0, 0, 1, 1)] } getViewportCount () { return this._viewportCount } getFrustum () { return this._frustum } updateMatrices (t) { const e = this.camera, n = this.matrix; ja.setFromMatrixPosition(t.matrixWorld), e.position.copy(ja), Ja.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Ja), e.updateMatrixWorld(), kr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(kr), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(kr) } getViewport (t) { return this._viewports[t] } getFrameExtents () { return this._frameExtents } dispose () { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy (t) { return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this } clone () { return new this.constructor().copy(this) } toJSON () { const t = {}; return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t } } class gp extends _p { constructor () { super(new Gs(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } } class vp extends Bo { constructor (t, e) { super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(le.DEFAULT_UP), this.updateMatrix(), this.target = new le, this.shadow = new gp } dispose () { this.shadow.dispose() } copy (t) { return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } } class xp extends Bo { constructor (t, e) { super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight" } } let tr; class zo { static getContext () { return tr === void 0 && (tr = new (window.AudioContext || window.webkitAudioContext)), tr } static setContext (t) { tr = t } } class Mp extends Pi { constructor (t) { super(t) } load (t, e, n, r) { const s = this, o = new fp(this.manager); o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function (l) { try { const c = l.slice(0); zo.getContext().decodeAudioData(c, function (d) { e(d) }).catch(a) } catch (c) { a(c) } }, n, r); function a (l) { r ? r(l) : console.error(l), s.manager.itemError(t) } } } class Ho { constructor (t = !0) { this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 } start () { this.startTime = Qa(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0 } stop () { this.getElapsedTime(), this.running = !1, this.autoStart = !1 } getElapsedTime () { return this.getDelta(), this.elapsedTime } getDelta () { let t = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) { const e = Qa(); t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t } return t } } function Qa () { return performance.now() } const En = new N, to = new fn, Sp = new N, yn = new N; class Ep extends le { constructor () { super(), this.type = "AudioListener", this.context = zo.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Ho } getInput () { return this.gain } removeFilter () { return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this } getFilter () { return this.filter } setFilter (t) { return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this } getMasterVolume () { return this.gain.gain.value } setMasterVolume (t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this } updateMatrixWorld (t) { super.updateMatrixWorld(t); const e = this.context.listener, n = this.up; if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(En, to, Sp), yn.set(0, 0, -1).applyQuaternion(to), e.positionX) { const r = this.context.currentTime + this.timeDelta; e.positionX.linearRampToValueAtTime(En.x, r), e.positionY.linearRampToValueAtTime(En.y, r), e.positionZ.linearRampToValueAtTime(En.z, r), e.forwardX.linearRampToValueAtTime(yn.x, r), e.forwardY.linearRampToValueAtTime(yn.y, r), e.forwardZ.linearRampToValueAtTime(yn.z, r), e.upX.linearRampToValueAtTime(n.x, r), e.upY.linearRampToValueAtTime(n.y, r), e.upZ.linearRampToValueAtTime(n.z, r) } else e.setPosition(En.x, En.y, En.z), e.setOrientation(yn.x, yn.y, yn.z, n.x, n.y, n.z) } } class yp extends le { constructor (t) { super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [] } getOutput () { return this.gain } setNodeSource (t) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this } setMediaElementSource (t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this } setMediaStreamSource (t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this } setBuffer (t) { return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this } play (t = 0) { if (this.isPlaying === !0) { console.warn("THREE.Audio: Audio is already playing."); return } if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } this._startedAt = this.context.currentTime + t; const e = this.context.createBufferSource(); return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect() } pause () { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this } stop (t = 0) { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + t), this.source.onended = null), this.isPlaying = !1, this } connect () { if (this.filters.length > 0) { this.source.connect(this.filters[0]); for (let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].connect(this.filters[t]); this.filters[this.filters.length - 1].connect(this.getOutput()) } else this.source.connect(this.getOutput()); return this._connected = !0, this } disconnect () { if (this._connected !== !1) { if (this.filters.length > 0) { this.source.disconnect(this.filters[0]); for (let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].disconnect(this.filters[t]); this.filters[this.filters.length - 1].disconnect(this.getOutput()) } else this.source.disconnect(this.getOutput()); return this._connected = !1, this } } getFilters () { return this.filters } setFilters (t) { return t || (t = []), this._connected === !0 ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this } setDetune (t) { return this.detune = t, this.isPlaying === !0 && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this } getDetune () { return this.detune } getFilter () { return this.getFilters()[0] } setFilter (t) { return this.setFilters(t ? [t] : []) } setPlaybackRate (t) { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this.playbackRate = t, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this } getPlaybackRate () { return this.playbackRate } onEnded () { this.isPlaying = !1 } getLoop () { return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop } setLoop (t) { if (this.hasPlaybackControl === !1) { console.warn("THREE.Audio: this Audio has no playback control."); return } return this.loop = t, this.isPlaying === !0 && (this.source.loop = this.loop), this } setLoopStart (t) { return this.loopStart = t, this } setLoopEnd (t) { return this.loopEnd = t, this } getVolume () { return this.gain.gain.value } setVolume (t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this } } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ds } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ds); const eo = 1.61803399, Wr = 5, no = 10, io = 45, ro = 45, Tp = 45, Ap = 45, bp = 1.75, wp = 1; let er = 0; const Rp = 1, Cp = .5, Xr = 30; let qr = 8; class Pp { constructor () { this.loadAssets().then(() => { this.initScene(), this.initCamera(), this.initRenderer(), this.initLights(), this.initWorldPivot(), this.addInitialCubes(qr), this.addEventListeners(), this.animate() }) } async loadAssets () { const t = new mp; this.gridTexture = await new Promise(n => { t.load("./Grid.png", n) }), this.gridTexture.wrapS = yi, this.gridTexture.wrapT = yi; const e = new Mp; this.clickSound = await new Promise(n => { e.load("./SFX_Click.mp3", r => { const s = new yp(new Ep); s.setBuffer(r), n(s) }) }) } initScene () { this.scene = new lp, this.clock = new Ho, this.cubes = [], this.currentScale = 1, this.currentLocalCenter = new N(0, 0, 0), this.currentRotation = new fn, this.currentRotation.setFromEuler(new Se(0, 0, 0)) } initWorldPivot () { this.worldPivot = new Mi, this.scene.add(this.worldPivot) } initCamera () { this.sizes = { width: window.innerWidth, height: window.innerHeight }; const t = this.sizes.width / this.sizes.height, e = Wr; this.camera = new Gs(-e * t / 2, e * t / 2, e / 2, -e / 2, 0, 1e3); const n = Fn.degToRad(io), r = Fn.degToRad(ro), s = no; this.camera.position.set(s * Math.sin(n) * Math.cos(r), s * Math.sin(r), s * Math.cos(n) * Math.cos(r)), this.camera.lookAt(new N(0, 0, 0)), this.scene.add(this.camera) } initRenderer () { this.canvas = document.querySelector("canvas.webgl"), this.renderer = new op({ canvas: this.canvas, alpha: !0 }), this.renderer.setSize(this.sizes.width, this.sizes.height), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) } initLights () { const t = new xp(16777215, wp), e = new vp(16777215, bp), n = Fn.degToRad(Tp), r = Fn.degToRad(Ap); e.position.set(Math.sin(n) * Math.cos(r), Math.sin(r), Math.cos(n) * Math.cos(r)).normalize(), this.scene.add(t, e) } addInitialCubes (t) { for (let e = 0; e < t; e++)this.instantiateCube() } scaleWorldPivot () { this.worldPivot.scale.multiplyScalar(eo); const t = this.cubes[this.cubes.length - 1]; this.setCameraTarget(t) } playClickSound () { this.clickSound.isPlaying && this.clickSound.stop(), this.clickSound.play() } instantiateCube () { const t = new ui(1, 1, 1), e = new cp({ color: new Vt().setHSL((er + Xr) % 360 / 360, Rp, Cp), metalness: 0, roughness: 1, map: this.gridTexture }), n = new Be(t, e); n.scale.set(this.currentScale, this.currentScale, this.currentScale), n.position.copy(this.currentLocalCenter), n.quaternion.copy(this.currentRotation), this.worldPivot.add(n), this.cubes.push(n); const r = this.currentScale / eo, s = new N(-this.currentScale / 2 - r / 2, this.currentScale / 2 - r / 2, this.currentScale / 2 - r / 2); s.applyQuaternion(this.currentRotation), this.currentLocalCenter.add(s), this.currentRotation.multiply(new fn().setFromEuler(new Se(0, -Math.PI / 2, 0))), this.currentScale = r, this.scaleWorldPivot(), er = (er + Xr) % 360, console.log(this.cubes.length), this.cubes.length >= 360 / Xr + qr && this.resetSpiral() } resetSpiral () { console.log("Resetting spiral..."), this.worldPivot.scale.set(1, 1, 1), this.cubes.forEach(t => { this.worldPivot.remove(t) }), this.cubes = [], this.currentScale = 1, this.currentLocalCenter.set(0, 0, 0), this.currentRotation.setFromEuler(new Se(0, 0, 0)), er = 0, this.addInitialCubes(qr) } setCameraTarget (t) { const e = new N; t.getWorldPosition(e); const n = no, r = Fn.degToRad(io), s = Fn.degToRad(ro); this.camera.position.set(e.x + n * Math.sin(r) * Math.cos(s), e.y + n * Math.sin(s), e.z + n * Math.cos(r) * Math.cos(s)), this.camera.lookAt(e); const o = this.worldPivot.scale.x, a = Wr * this.currentScale * o; this.camera.left = -a * (this.sizes.width / this.sizes.height), this.camera.right = a * (this.sizes.width / this.sizes.height), this.camera.top = a, this.camera.bottom = -a, this.camera.updateProjectionMatrix() } addEventListeners () { window.addEventListener("resize", () => this.onResize()), window.addEventListener("keydown", t => { t.code === "Space" && (this.playClickSound(), this.instantiateCube()) }) } onResize () { this.sizes.width = window.innerWidth, this.sizes.height = window.innerHeight; const t = this.sizes.width / this.sizes.height, e = this.worldPivot.scale.x, n = Wr * this.currentScale * e; this.camera.left = -n * t, this.camera.right = n * t, this.camera.top = n, this.camera.bottom = -n, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.sizes.width, this.sizes.height), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) } animate () { this.renderer.render(this.scene, this.camera), window.requestAnimationFrame(() => this.animate()) } } new Pp

'use strict'
;(self.webpackChunktoner_react_frontend = self.webpackChunktoner_react_frontend || []).push([
    [1199],
    {
        9386: (e, t, s) => {
            s.d(t, {
                ConfigCtrl: () => O,
                zv: () => v,
                uA: () => y,
                ExplorerCtrl: () => B,
                jb: () => K,
                OptionsCtrl: () => I,
                AV: () => m,
                ThemeCtrl: () => X,
                ToastCtrl: () => Z
            })
            Symbol()
            const o = Symbol()
            const n = Object.getPrototypeOf,
                a = new WeakMap(),
                r = (e) => e && (a.has(e) ? a.get(e) : n(e) === Object.prototype || n(e) === Array.prototype),
                i = function (e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                    a.set(e, t)
                },
                l = (e) => 'object' === typeof e && null !== e,
                c = new WeakMap(),
                d = new WeakSet(),
                p = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.is,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e, t) => new Proxy(e, t),
                        s =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : (e) =>
                                      l(e) &&
                                      !d.has(e) &&
                                      (Array.isArray(e) || !(Symbol.iterator in e)) &&
                                      !(e instanceof WeakMap) &&
                                      !(e instanceof WeakSet) &&
                                      !(e instanceof Error) &&
                                      !(e instanceof Number) &&
                                      !(e instanceof Date) &&
                                      !(e instanceof String) &&
                                      !(e instanceof RegExp) &&
                                      !(e instanceof ArrayBuffer),
                        n =
                            arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : (e) => {
                                      switch (e.status) {
                                          case 'fulfilled':
                                              return e.value
                                          case 'rejected':
                                              throw e.reason
                                          default:
                                              throw e
                                      }
                                  },
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new WeakMap(),
                        p =
                            arguments.length > 5 && void 0 !== arguments[5]
                                ? arguments[5]
                                : function (e, t) {
                                      let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n
                                      const o = a.get(e)
                                      if ((null == o ? void 0 : o[0]) === t) return o[1]
                                      const r = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e))
                                      return (
                                          i(r, !0),
                                          a.set(e, [t, r]),
                                          Reflect.ownKeys(e).forEach((t) => {
                                              if (Object.getOwnPropertyDescriptor(r, t)) return
                                              const o = Reflect.get(e, t),
                                                  n = { value: o, enumerable: !0, configurable: !0 }
                                              if (d.has(o)) i(o, !1)
                                              else if (o instanceof Promise) delete n.value, (n.get = () => s(o))
                                              else if (c.has(o)) {
                                                  const [e, t] = c.get(o)
                                                  n.value = p(e, t(), s)
                                              }
                                              Object.defineProperty(r, t, n)
                                          }),
                                          Object.preventExtensions(r)
                                      )
                                  },
                        u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new WeakMap(),
                        h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [1, 1],
                        g =
                            arguments.length > 8 && void 0 !== arguments[8]
                                ? arguments[8]
                                : (n) => {
                                      if (!l(n)) throw new Error('object required')
                                      const a = u.get(n)
                                      if (a) return a
                                      let i = h[0]
                                      const f = new Set(),
                                          m = function (e) {
                                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ++h[0]
                                              i !== t && ((i = t), f.forEach((s) => s(e, t)))
                                          }
                                      let v = h[1]
                                      const b = (e) => (t, s) => {
                                              const o = [...t]
                                              ;(o[1] = [e, ...o[1]]), m(o, s)
                                          },
                                          y = new Map(),
                                          w = (e) => {
                                              var t
                                              const s = y.get(e)
                                              s && (y.delete(e), null == (t = s[1]) || t.call(s))
                                          },
                                          I = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n)),
                                          C = {
                                              deleteProperty(e, t) {
                                                  const s = Reflect.get(e, t)
                                                  w(t)
                                                  const o = Reflect.deleteProperty(e, t)
                                                  return o && m(['delete', [t], s]), o
                                              },
                                              set(t, n, a, i) {
                                                  const p = Reflect.has(t, n),
                                                      h = Reflect.get(t, n, i)
                                                  if (p && (e(h, a) || (u.has(a) && e(h, u.get(a))))) return !0
                                                  w(n), l(a) && (a = ((e) => (r(e) && e[o]) || null)(a) || a)
                                                  let v = a
                                                  if (a instanceof Promise)
                                                      a.then((e) => {
                                                          ;(a.status = 'fulfilled'), (a.value = e), m(['resolve', [n], e])
                                                      }).catch((e) => {
                                                          ;(a.status = 'rejected'), (a.reason = e), m(['reject', [n], e])
                                                      })
                                                  else {
                                                      !c.has(a) && s(a) && (v = g(a))
                                                      const e = !d.has(v) && c.get(v)
                                                      e &&
                                                          ((e, t) => {
                                                              if (y.has(e)) throw new Error('prop listener already exists')
                                                              if (f.size) {
                                                                  const s = t[3](b(e))
                                                                  y.set(e, [t, s])
                                                              } else y.set(e, [t])
                                                          })(n, e)
                                                  }
                                                  return Reflect.set(t, n, v, i), m(['set', [n], a, h]), !0
                                              }
                                          },
                                          O = t(I, C)
                                      u.set(n, O)
                                      const W = [
                                          I,
                                          function () {
                                              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ++h[1]
                                              return (
                                                  v === e ||
                                                      f.size ||
                                                      ((v = e),
                                                      y.forEach((t) => {
                                                          let [s] = t
                                                          const o = s[1](e)
                                                          o > i && (i = o)
                                                      })),
                                                  i
                                              )
                                          },
                                          p,
                                          (e) => {
                                              f.add(e),
                                                  1 === f.size &&
                                                      y.forEach((e, t) => {
                                                          let [s, o] = e
                                                          if (o) throw new Error('remove already exists')
                                                          const n = s[3](b(t))
                                                          y.set(t, [s, n])
                                                      })
                                              return () => {
                                                  f.delete(e),
                                                      0 === f.size &&
                                                          y.forEach((e, t) => {
                                                              let [s, o] = e
                                                              o && (o(), y.set(t, [s]))
                                                          })
                                              }
                                          }
                                      ]
                                      return (
                                          c.set(O, W),
                                          Reflect.ownKeys(n).forEach((e) => {
                                              const t = Object.getOwnPropertyDescriptor(n, e)
                                              'value' in t && ((O[e] = n[e]), delete t.value, delete t.writable), Object.defineProperty(I, e, t)
                                          }),
                                          O
                                      )
                                  }
                    return [g, c, d, e, t, s, n, a, p, u, h]
                },
                [u] = p()
            function h() {
                return u(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
            }
            function g(e, t, s) {
                const o = c.get(e)
                let n
                o || console.warn('Please use proxy object')
                const a = [],
                    r = o[3]
                let i = !1
                const l = r((e) => {
                    a.push(e),
                        s
                            ? t(a.splice(0))
                            : n ||
                              (n = Promise.resolve().then(() => {
                                  ;(n = void 0), i && t(a.splice(0))
                              }))
                })
                return (
                    (i = !0),
                    () => {
                        ;(i = !1), l()
                    }
                )
            }
            const f = h({ history: ['ConnectWallet'], view: 'ConnectWallet', data: void 0 }),
                m = {
                    state: f,
                    subscribe: (e) => g(f, () => e(f)),
                    push(e, t) {
                        e !== f.view && ((f.view = e), t && (f.data = t), f.history.push(e))
                    },
                    reset(e) {
                        ;(f.view = e), (f.history = [e])
                    },
                    replace(e) {
                        f.history.length > 1 && ((f.history[f.history.length - 1] = e), (f.view = e))
                    },
                    goBack() {
                        if (f.history.length > 1) {
                            f.history.pop()
                            const [e] = f.history.slice(-1)
                            f.view = e
                        }
                    },
                    setData(e) {
                        f.data = e
                    }
                },
                v = {
                    WALLETCONNECT_DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
                    WCM_VERSION: 'WCM_VERSION',
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile: () =>
                        typeof window < 'u' &&
                        Boolean(
                            window.matchMedia('(pointer:coarse)').matches ||
                                /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
                        ),
                    isAndroid: () => v.isMobile() && navigator.userAgent.toLowerCase().includes('android'),
                    isIos() {
                        const e = navigator.userAgent.toLowerCase()
                        return v.isMobile() && (e.includes('iphone') || e.includes('ipad'))
                    },
                    isHttpUrl: (e) => e.startsWith('http://') || e.startsWith('https://'),
                    isArray: (e) => Array.isArray(e) && e.length > 0,
                    formatNativeUrl(e, t, s) {
                        if (v.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s)
                        let o = e
                        o.includes('://') || ((o = e.replaceAll('/', '').replaceAll(':', '')), (o = ''.concat(o, '://'))),
                            o.endsWith('/') || (o = ''.concat(o, '/')),
                            this.setWalletConnectDeepLink(o, s)
                        const n = encodeURIComponent(t)
                        return ''.concat(o, 'wc?uri=').concat(n)
                    },
                    formatUniversalUrl(e, t, s) {
                        if (!v.isHttpUrl(e)) return this.formatNativeUrl(e, t, s)
                        let o = e
                        o.endsWith('/') || (o = ''.concat(o, '/')), this.setWalletConnectDeepLink(o, s)
                        const n = encodeURIComponent(t)
                        return ''.concat(o, 'wc?uri=').concat(n)
                    },
                    wait: async (e) =>
                        new Promise((t) => {
                            setTimeout(t, e)
                        }),
                    openHref(e, t) {
                        window.open(e, t, 'noreferrer noopener')
                    },
                    setWalletConnectDeepLink(e, t) {
                        try {
                            localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }))
                        } catch {
                            console.info('Unable to set WalletConnect deep link')
                        }
                    },
                    setWalletConnectAndroidDeepLink(e) {
                        try {
                            const [t] = e.split('?')
                            localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: 'Android' }))
                        } catch {
                            console.info('Unable to set WalletConnect android deep link')
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(v.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch {
                            console.info('Unable to remove WalletConnect deep link')
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            typeof localStorage < 'u' && localStorage.setItem(v.WCM_VERSION, '2.6.2')
                        } catch {
                            console.info('Unable to set Web3Modal version in storage')
                        }
                    },
                    getWalletRouterData() {
                        var e
                        const t = null == (e = m.state.data) ? void 0 : e.Wallet
                        if (!t) throw new Error('Missing "Wallet" view data')
                        return t
                    }
                },
                b = h({
                    enabled: typeof location < 'u' && (location.hostname.includes('localhost') || location.protocol.includes('https')),
                    userSessionId: '',
                    events: [],
                    connectedWalletId: void 0
                }),
                y = {
                    state: b,
                    subscribe: (e) =>
                        g(b.events, () =>
                            e(
                                (function (e, t) {
                                    const s = c.get(e)
                                    s || console.warn('Please use proxy object')
                                    const [o, n, a] = s
                                    return a(o, n(), t)
                                })(b.events[b.events.length - 1])
                            )
                        ),
                    initialize() {
                        b.enabled && typeof (null == crypto ? void 0 : crypto.randomUUID) < 'u' && (b.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(e) {
                        b.connectedWalletId = e
                    },
                    click(e) {
                        if (b.enabled) {
                            const t = { type: 'CLICK', name: e.name, userSessionId: b.userSessionId, timestamp: Date.now(), data: e }
                            b.events.push(t)
                        }
                    },
                    track(e) {
                        if (b.enabled) {
                            const t = { type: 'TRACK', name: e.name, userSessionId: b.userSessionId, timestamp: Date.now(), data: e }
                            b.events.push(t)
                        }
                    },
                    view(e) {
                        if (b.enabled) {
                            const t = { type: 'VIEW', name: e.name, userSessionId: b.userSessionId, timestamp: Date.now(), data: e }
                            b.events.push(t)
                        }
                    }
                },
                w = h({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                I = {
                    state: w,
                    subscribe: (e) => g(w, () => e(w)),
                    setChains(e) {
                        w.chains = e
                    },
                    setWalletConnectUri(e) {
                        w.walletConnectUri = e
                    },
                    setIsCustomDesktop(e) {
                        w.isCustomDesktop = e
                    },
                    setIsCustomMobile(e) {
                        w.isCustomMobile = e
                    },
                    setIsDataLoaded(e) {
                        w.isDataLoaded = e
                    },
                    setIsUiLoaded(e) {
                        w.isUiLoaded = e
                    },
                    setIsAuth(e) {
                        w.isAuth = e
                    }
                },
                C = h({
                    projectId: '',
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                O = {
                    state: C,
                    subscribe: (e) => g(C, () => e(C)),
                    setConfig(e) {
                        var t, s
                        y.initialize(),
                            I.setChains(e.chains),
                            I.setIsAuth(Boolean(e.enableAuthMode)),
                            I.setIsCustomMobile(Boolean(null == (t = e.mobileWallets) ? void 0 : t.length)),
                            I.setIsCustomDesktop(Boolean(null == (s = e.desktopWallets) ? void 0 : s.length)),
                            v.setModalVersionInStorage(),
                            Object.assign(C, e)
                    }
                }
            var W = Object.defineProperty,
                E = Object.getOwnPropertySymbols,
                j = Object.prototype.hasOwnProperty,
                L = Object.prototype.propertyIsEnumerable,
                A = (e, t, s) => (t in e ? W(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s))
            const k = 'https://explorer-api.walletconnect.com',
                M = 'wcm',
                U = 'js-2.6.2'
            async function D(e, t) {
                const s = ((e, t) => {
                        for (var s in t || (t = {})) j.call(t, s) && A(e, s, t[s])
                        if (E) for (var s of E(t)) L.call(t, s) && A(e, s, t[s])
                        return e
                    })({ sdkType: M, sdkVersion: U }, t),
                    o = new URL(e, k)
                return (
                    o.searchParams.append('projectId', O.state.projectId),
                    Object.entries(s).forEach((e) => {
                        let [t, s] = e
                        s && o.searchParams.append(t, String(s))
                    }),
                    (await fetch(o)).json()
                )
            }
            const P = {
                getDesktopListings: async (e) => D('/w3m/v1/getDesktopListings', e),
                getMobileListings: async (e) => D('/w3m/v1/getMobileListings', e),
                getInjectedListings: async (e) => D('/w3m/v1/getInjectedListings', e),
                getAllListings: async (e) => D('/w3m/v1/getAllListings', e),
                getWalletImageUrl: (e) =>
                    ''
                        .concat(k, '/w3m/v1/getWalletImage/')
                        .concat(e, '?projectId=')
                        .concat(O.state.projectId, '&sdkType=')
                        .concat(M, '&sdkVersion=')
                        .concat(U),
                getAssetImageUrl: (e) =>
                    ''
                        .concat(k, '/w3m/v1/getAssetImage/')
                        .concat(e, '?projectId=')
                        .concat(O.state.projectId, '&sdkType=')
                        .concat(M, '&sdkVersion=')
                        .concat(U)
            }
            var S = Object.defineProperty,
                N = Object.getOwnPropertySymbols,
                T = Object.prototype.hasOwnProperty,
                x = Object.prototype.propertyIsEnumerable,
                R = (e, t, s) => (t in e ? S(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s))
            const _ = v.isMobile(),
                V = h({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }),
                B = {
                    state: V,
                    async getRecomendedWallets() {
                        const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = O.state
                        if ('NONE' === e || ('ALL' === t && !e)) return V.recomendedWallets
                        if (v.isArray(e)) {
                            const t = { recommendedIds: e.join(',') },
                                { listings: s } = await P.getAllListings(t),
                                o = Object.values(s)
                            o.sort((t, s) => e.indexOf(t.id) - e.indexOf(s.id)), (V.recomendedWallets = o)
                        } else {
                            const { chains: e, isAuth: s } = I.state,
                                o = null === e || void 0 === e ? void 0 : e.join(','),
                                n = v.isArray(t),
                                a = {
                                    page: 1,
                                    sdks: s ? 'auth_v1' : void 0,
                                    entries: v.RECOMMENDED_WALLET_AMOUNT,
                                    chains: o,
                                    version: 2,
                                    excludedIds: n ? t.join(',') : void 0
                                },
                                { listings: r } = _ ? await P.getMobileListings(a) : await P.getDesktopListings(a)
                            V.recomendedWallets = Object.values(r)
                        }
                        return V.recomendedWallets
                    },
                    async getWallets(e) {
                        const t = ((e, t) => {
                                for (var s in t || (t = {})) T.call(t, s) && R(e, s, t[s])
                                if (N) for (var s of N(t)) x.call(t, s) && R(e, s, t[s])
                                return e
                            })({}, e),
                            { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: o } = O.state,
                            { recomendedWallets: n } = V
                        if ('ALL' === o) return V.wallets
                        n.length ? (t.excludedIds = n.map((e) => e.id).join(',')) : v.isArray(s) && (t.excludedIds = s.join(',')),
                            v.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(',')),
                            I.state.isAuth && (t.sdks = 'auth_v1')
                        const { page: a, search: r } = e,
                            { listings: i, total: l } = _ ? await P.getMobileListings(t) : await P.getDesktopListings(t),
                            c = Object.values(i),
                            d = r ? 'search' : 'wallets'
                        return (
                            (V[d] = { listings: [...V[d].listings, ...c], total: l, page: null !== a && void 0 !== a ? a : 1 }),
                            { listings: c, total: l }
                        )
                    },
                    getWalletImageUrl: (e) => P.getWalletImageUrl(e),
                    getAssetImageUrl: (e) => P.getAssetImageUrl(e),
                    resetSearch() {
                        V.search = { listings: [], total: 0, page: 1 }
                    }
                },
                H = h({ open: !1 }),
                K = {
                    state: H,
                    subscribe: (e) => g(H, () => e(H)),
                    open: async (e) =>
                        new Promise((t) => {
                            const { isUiLoaded: s, isDataLoaded: o } = I.state
                            if (
                                (v.removeWalletConnectDeepLink(),
                                I.setWalletConnectUri(null === e || void 0 === e ? void 0 : e.uri),
                                I.setChains(null === e || void 0 === e ? void 0 : e.chains),
                                m.reset('ConnectWallet'),
                                s && o)
                            )
                                (H.open = !0), t()
                            else {
                                const e = setInterval(() => {
                                    const s = I.state
                                    s.isUiLoaded && s.isDataLoaded && (clearInterval(e), (H.open = !0), t())
                                }, 200)
                            }
                        }),
                    close() {
                        H.open = !1
                    }
                }
            var z = Object.defineProperty,
                J = Object.getOwnPropertySymbols,
                q = Object.prototype.hasOwnProperty,
                F = Object.prototype.propertyIsEnumerable,
                G = (e, t, s) => (t in e ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s))
            const Q = h({ themeMode: typeof matchMedia < 'u' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' }),
                X = {
                    state: Q,
                    subscribe: (e) => g(Q, () => e(Q)),
                    setThemeConfig(e) {
                        const { themeMode: t, themeVariables: s } = e
                        t && (Q.themeMode = t),
                            s &&
                                (Q.themeVariables = ((e, t) => {
                                    for (var s in t || (t = {})) q.call(t, s) && G(e, s, t[s])
                                    if (J) for (var s of J(t)) F.call(t, s) && G(e, s, t[s])
                                    return e
                                })({}, s))
                    }
                },
                Y = h({ open: !1, message: '', variant: 'success' }),
                Z = {
                    state: Y,
                    subscribe: (e) => g(Y, () => e(Y)),
                    openToast(e, t) {
                        ;(Y.open = !0), (Y.message = e), (Y.variant = t)
                    },
                    closeToast() {
                        Y.open = !1
                    }
                }
        },
        1199: (e, t, s) => {
            s.d(t, { WalletConnectModal: () => n })
            var o = s(9386)
            class n {
                constructor(e) {
                    ;(this.openModal = o.jb.open),
                        (this.closeModal = o.jb.close),
                        (this.subscribeModal = o.jb.subscribe),
                        (this.setTheme = o.ThemeCtrl.setThemeConfig),
                        o.ThemeCtrl.setThemeConfig(e),
                        o.ConfigCtrl.setConfig(e),
                        this.initUi()
                }
                async initUi() {
                    if (typeof window < 'u') {
                        await s.e(6544).then(s.bind(s, 6544))
                        const e = document.createElement('wcm-modal')
                        document.body.insertAdjacentElement('beforeend', e), o.OptionsCtrl.setIsUiLoaded(!0)
                    }
                }
            }
        }
    }
])

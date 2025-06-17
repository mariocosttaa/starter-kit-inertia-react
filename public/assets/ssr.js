import { jsx } from "react/jsx-runtime";
import { mergeWith, cloneDeep, isEqual } from "es-toolkit";
import * as $$1 from "qs";
import Fe from "axios";
import ge$1, { createContext, forwardRef, useState, useRef, useMemo, useEffect, createElement, useContext, useCallback } from "react";
import { set, has, get } from "es-toolkit/compat";
import { createServer } from "http";
import * as c$1 from "process";
import "node:cluster";
import "node:os";
import ReactDOMServer from "react-dom/server";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
function V$1(r5, e2) {
  let t4;
  return function(...i2) {
    clearTimeout(t4), t4 = setTimeout(() => r5.apply(this, i2), e2);
  };
}
function S$1(r5, e2) {
  return document.dispatchEvent(new CustomEvent(`inertia:${r5}`, e2));
}
var Y = (r5) => S$1("before", { cancelable: true, detail: { visit: r5 } }), pe$1 = (r5) => S$1("error", { detail: { errors: r5 } }), de = (r5) => S$1("exception", { cancelable: true, detail: { exception: r5 } }), he$1 = (r5) => S$1("finish", { detail: { visit: r5 } }), me$1 = (r5) => S$1("invalid", { cancelable: true, detail: { response: r5 } }), T$1 = (r5) => S$1("navigate", { detail: { page: r5 } }), fe = (r5) => S$1("progress", { detail: { progress: r5 } }), ge = (r5) => S$1("start", { detail: { visit: r5 } }), ve$1 = (r5) => S$1("success", { detail: { page: r5 } }), be = (r5, e2) => S$1("prefetched", { detail: { fetchedAt: Date.now(), response: r5.data, visit: e2 } }), ye = (r5) => S$1("prefetching", { detail: { visit: r5 } });
var m$1 = class m {
  static set(e2, t4) {
    typeof window < "u" && window.sessionStorage.setItem(e2, JSON.stringify(t4));
  }
  static get(e2) {
    if (typeof window < "u") return JSON.parse(window.sessionStorage.getItem(e2) || "null");
  }
  static merge(e2, t4) {
    let i2 = this.get(e2);
    i2 === null ? this.set(e2, t4) : this.set(e2, { ...i2, ...t4 });
  }
  static remove(e2) {
    typeof window < "u" && window.sessionStorage.removeItem(e2);
  }
  static removeNested(e2, t4) {
    let i2 = this.get(e2);
    i2 !== null && (delete i2[t4], this.set(e2, i2));
  }
  static exists(e2) {
    try {
      return this.get(e2) !== null;
    } catch {
      return false;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
m$1.locationVisitKey = "inertiaLocationVisit";
var Pe = async (r5) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let e2 = Se(), t4 = await Ee(), i2 = await je$1(t4);
  if (!i2) throw new Error("Unable to encrypt history");
  return await $e$1(e2, i2, r5);
}, C = { key: "historyKey", iv: "historyIv" }, we = async (r5) => {
  let e2 = Se(), t4 = await Ee();
  if (!t4) throw new Error("Unable to decrypt history");
  return await Be(e2, t4, r5);
}, $e$1 = async (r5, e2, t4) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(t4);
  let i2 = new TextEncoder(), s2 = JSON.stringify(t4), o2 = new Uint8Array(s2.length * 3), u2 = i2.encodeInto(s2, o2);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: r5 }, e2, o2.subarray(0, u2.written));
}, Be = async (r5, e2, t4) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(t4);
  let i2 = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: r5 }, e2, t4);
  return JSON.parse(new TextDecoder().decode(i2));
}, Se = () => {
  let r5 = m$1.get(C.iv);
  if (r5) return new Uint8Array(r5);
  let e2 = window.crypto.getRandomValues(new Uint8Array(12));
  return m$1.set(C.iv, Array.from(e2)), e2;
}, Ge = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]), Ke = async (r5) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let e2 = await window.crypto.subtle.exportKey("raw", r5);
  m$1.set(C.key, Array.from(new Uint8Array(e2)));
}, je$1 = async (r5) => {
  if (r5) return r5;
  let e2 = await Ge();
  return e2 ? (await Ke(e2), e2) : null;
}, Ee = async () => {
  let r5 = m$1.get(C.key);
  return r5 ? await window.crypto.subtle.importKey("raw", new Uint8Array(r5), { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]) : null;
};
var v$1 = class v {
  static save() {
    a$1.saveScrollPositions(Array.from(this.regions()).map((e2) => ({ top: e2.scrollTop, left: e2.scrollLeft })));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset() {
    typeof window < "u" && window.scrollTo(0, 0), this.regions().forEach((e2) => {
      typeof e2.scrollTo == "function" ? e2.scrollTo(0, 0) : (e2.scrollTop = 0, e2.scrollLeft = 0);
    }), this.save(), window.location.hash && setTimeout(() => {
      var _a;
      return (_a = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : _a.scrollIntoView();
    });
  }
  static restore(e2) {
    this.restoreDocument(), this.regions().forEach((t4, i2) => {
      let s2 = e2[i2];
      s2 && (typeof t4.scrollTo == "function" ? t4.scrollTo(s2.left, s2.top) : (t4.scrollTop = s2.top, t4.scrollLeft = s2.left));
    });
  }
  static restoreDocument() {
    let e2 = a$1.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(e2.left, e2.top);
  }
  static onScroll(e2) {
    let t4 = e2.target;
    typeof t4.hasAttribute == "function" && t4.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    a$1.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function N$1(r5) {
  return r5 instanceof File || r5 instanceof Blob || r5 instanceof FileList && r5.length > 0 || r5 instanceof FormData && Array.from(r5.values()).some((e2) => N$1(e2)) || typeof r5 == "object" && r5 !== null && Object.values(r5).some((e2) => N$1(e2));
}
var Z = (r5) => r5 instanceof FormData;
function ee(r5, e2 = new FormData(), t4 = null) {
  r5 = r5 || {};
  for (let i2 in r5) Object.prototype.hasOwnProperty.call(r5, i2) && Te(e2, Re(t4, i2), r5[i2]);
  return e2;
}
function Re(r5, e2) {
  return r5 ? r5 + "[" + e2 + "]" : e2;
}
function Te(r5, e2, t4) {
  if (Array.isArray(t4)) return Array.from(t4.keys()).forEach((i2) => Te(r5, Re(e2, i2.toString()), t4[i2]));
  if (t4 instanceof Date) return r5.append(e2, t4.toISOString());
  if (t4 instanceof File) return r5.append(e2, t4, t4.name);
  if (t4 instanceof Blob) return r5.append(e2, t4);
  if (typeof t4 == "boolean") return r5.append(e2, t4 ? "1" : "0");
  if (typeof t4 == "string") return r5.append(e2, t4);
  if (typeof t4 == "number") return r5.append(e2, `${t4}`);
  if (t4 == null) return r5.append(e2, "");
  ee(t4, r5, e2);
}
function y$1(r5) {
  return new URL(r5.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var xe = (r5, e2, t4, i2, s2) => {
  let o2 = typeof r5 == "string" ? y$1(r5) : r5;
  if ((N$1(e2) || i2) && !Z(e2) && (e2 = ee(e2)), Z(e2)) return [o2, e2];
  let [u2, d2] = qe(t4, o2, e2, s2);
  return [y$1(u2), d2];
};
function qe(r5, e2, t4, i2 = "brackets") {
  let s2 = /^[a-z][a-z0-9+.-]*:\/\//i.test(e2.toString()), o2 = s2 || e2.toString().startsWith("/"), u2 = !o2 && !e2.toString().startsWith("#") && !e2.toString().startsWith("?"), d2 = e2.toString().includes("?") || r5 === "get" && Object.keys(t4).length, p2 = e2.toString().includes("#"), c2 = new URL(e2.toString(), "http://localhost");
  return r5 === "get" && Object.keys(t4).length && (c2.search = $$1.stringify(mergeWith($$1.parse(c2.search, { ignoreQueryPrefix: true }), t4, (l2, h2, I, w2) => {
    h2 === void 0 && delete w2[I];
  }), { encodeValuesOnly: true, arrayFormat: i2 }), t4 = {}), [[s2 ? `${c2.protocol}//${c2.host}` : "", o2 ? c2.pathname : "", u2 ? c2.pathname.substring(1) : "", d2 ? c2.search : "", p2 ? c2.hash : ""].join(""), t4];
}
function F(r5) {
  return r5 = new URL(r5.href), r5.hash = "", r5;
}
var te = (r5, e2) => {
  r5.hash && !e2.hash && F(r5).href === e2.href && (e2.hash = r5.hash);
}, L = (r5, e2) => F(r5).href === F(e2).href;
var re = class {
  constructor() {
    this.componentId = {};
    this.listeners = [];
    this.isFirstPageLoad = true;
    this.cleared = false;
  }
  init({ initialPage: e2, swapComponent: t4, resolveComponent: i2 }) {
    return this.page = e2, this.swapComponent = t4, this.resolveComponent = i2, this;
  }
  set(e2, { replace: t4 = false, preserveScroll: i2 = false, preserveState: s2 = false } = {}) {
    this.componentId = {};
    let o2 = this.componentId;
    return e2.clearHistory && a$1.clear(), this.resolve(e2.component).then((u2) => {
      if (o2 !== this.componentId) return;
      e2.rememberedState ?? (e2.rememberedState = {});
      let d2 = typeof window < "u" ? window.location : new URL(e2.url);
      return t4 = t4 || L(y$1(e2.url), d2), new Promise((p2) => {
        t4 ? a$1.replaceState(e2, () => p2(null)) : a$1.pushState(e2, () => p2(null));
      }).then(() => {
        let p2 = !this.isTheSame(e2);
        return this.page = e2, this.cleared = false, p2 && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = false, this.swap({ component: u2, page: e2, preserveState: s2 }).then(() => {
          i2 || v$1.reset(), E$1.fireInternalEvent("loadDeferredProps"), t4 || T$1(e2);
        });
      });
    });
  }
  setQuietly(e2, { preserveState: t4 = false } = {}) {
    return this.resolve(e2.component).then((i2) => (this.page = e2, this.cleared = false, a$1.setCurrent(e2), this.swap({ component: i2, page: e2, preserveState: t4 })));
  }
  clear() {
    this.cleared = true;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  merge(e2) {
    this.page = { ...this.page, ...e2 };
  }
  setUrlHash(e2) {
    this.page.url.includes(e2) || (this.page.url += e2);
  }
  remember(e2) {
    this.page.rememberedState = e2;
  }
  swap({ component: e2, page: t4, preserveState: i2 }) {
    return this.swapComponent({ component: e2, page: t4, preserveState: i2 });
  }
  resolve(e2) {
    return Promise.resolve(this.resolveComponent(e2));
  }
  isTheSame(e2) {
    return this.page.component === e2.component;
  }
  on(e2, t4) {
    return this.listeners.push({ event: e2, callback: t4 }), () => {
      this.listeners = this.listeners.filter((i2) => i2.event !== e2 && i2.callback !== t4);
    };
  }
  fireEventsFor(e2) {
    this.listeners.filter((t4) => t4.event === e2).forEach((t4) => t4.callback());
  }
}, n$1 = new re();
var A = class {
  constructor() {
    this.items = [];
    this.processingPromise = null;
  }
  add(e2) {
    return this.items.push(e2), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().then(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    let e2 = this.items.shift();
    return e2 ? Promise.resolve(e2()).then(() => this.processNext()) : Promise.resolve();
  }
};
var O$1 = typeof window > "u", k = new A(), Ce = !O$1 && /CriOS/.test(window.navigator.userAgent), ie$1 = class ie {
  constructor() {
    this.rememberedState = "rememberedState";
    this.scrollRegions = "scrollRegions";
    this.preserveUrl = false;
    this.current = {};
    this.initialState = null;
  }
  remember(e2, t4) {
    var _a;
    this.replaceState({ ...n$1.get(), rememberedState: { ...((_a = n$1.get()) == null ? void 0 : _a.rememberedState) ?? {}, [t4]: e2 } });
  }
  restore(e2) {
    var _a, _b;
    if (!O$1) return (_b = (_a = this.initialState) == null ? void 0 : _a[this.rememberedState]) == null ? void 0 : _b[e2];
  }
  pushState(e2, t4 = null) {
    if (!O$1) {
      if (this.preserveUrl) {
        t4 && t4();
        return;
      }
      this.current = e2, k.add(() => this.getPageData(e2).then((i2) => {
        let s2 = () => {
          this.doPushState({ page: i2 }, e2.url), t4 && t4();
        };
        Ce ? setTimeout(s2) : s2();
      }));
    }
  }
  getPageData(e2) {
    return new Promise((t4) => e2.encryptHistory ? Pe(e2).then(t4) : t4(e2));
  }
  processQueue() {
    return k.process();
  }
  decrypt(e2 = null) {
    var _a;
    if (O$1) return Promise.resolve(e2 ?? n$1.get());
    let t4 = e2 ?? ((_a = window.history.state) == null ? void 0 : _a.page);
    return this.decryptPageData(t4).then((i2) => {
      if (!i2) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = i2 ?? void 0 : this.current = i2 ?? {}, i2;
    });
  }
  decryptPageData(e2) {
    return e2 instanceof ArrayBuffer ? we(e2) : Promise.resolve(e2);
  }
  saveScrollPositions(e2) {
    k.add(() => Promise.resolve().then(() => {
      var _a;
      ((_a = window.history.state) == null ? void 0 : _a.page) && this.doReplaceState({ page: window.history.state.page, scrollRegions: e2 });
    }));
  }
  saveDocumentScrollPosition(e2) {
    k.add(() => Promise.resolve().then(() => {
      var _a;
      ((_a = window.history.state) == null ? void 0 : _a.page) && this.doReplaceState({ page: window.history.state.page, documentScrollPosition: e2 });
    }));
  }
  getScrollRegions() {
    var _a;
    return ((_a = window.history.state) == null ? void 0 : _a.scrollRegions) || [];
  }
  getDocumentScrollPosition() {
    var _a;
    return ((_a = window.history.state) == null ? void 0 : _a.documentScrollPosition) || { top: 0, left: 0 };
  }
  replaceState(e2, t4 = null) {
    if (n$1.merge(e2), !O$1) {
      if (this.preserveUrl) {
        t4 && t4();
        return;
      }
      this.current = e2, k.add(() => this.getPageData(e2).then((i2) => {
        let s2 = () => {
          this.doReplaceState({ page: i2 }, e2.url), t4 && t4();
        };
        Ce ? setTimeout(s2) : s2();
      }));
    }
  }
  doReplaceState(e2, t4) {
    var _a, _b;
    window.history.replaceState({ ...e2, scrollRegions: e2.scrollRegions ?? ((_a = window.history.state) == null ? void 0 : _a.scrollRegions), documentScrollPosition: e2.documentScrollPosition ?? ((_b = window.history.state) == null ? void 0 : _b.documentScrollPosition) }, "", t4);
  }
  doPushState(e2, t4) {
    window.history.pushState(e2, "", t4);
  }
  getState(e2, t4) {
    var _a;
    return ((_a = this.current) == null ? void 0 : _a[e2]) ?? t4;
  }
  deleteState(e2) {
    this.current[e2] !== void 0 && (delete this.current[e2], this.replaceState(this.current));
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    m$1.remove(C.key), m$1.remove(C.iv);
  }
  setCurrent(e2) {
    this.current = e2;
  }
  isValidState(e2) {
    return !!e2.page;
  }
  getAllState() {
    return this.current;
  }
};
typeof window < "u" && window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
var a$1 = new ie$1();
var se = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", V$1(v$1.onWindowScroll.bind(v$1), 100), true)), typeof document < "u" && document.addEventListener("scroll", V$1(v$1.onScroll.bind(v$1), 100), true);
  }
  onGlobalEvent(e2, t4) {
    let i2 = (s2) => {
      let o2 = t4(s2);
      s2.cancelable && !s2.defaultPrevented && o2 === false && s2.preventDefault();
    };
    return this.registerListener(`inertia:${e2}`, i2);
  }
  on(e2, t4) {
    return this.internalListeners.push({ event: e2, listener: t4 }), () => {
      this.internalListeners = this.internalListeners.filter((i2) => i2.listener !== t4);
    };
  }
  onMissingHistoryItem() {
    n$1.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(e2) {
    this.internalListeners.filter((t4) => t4.event === e2).forEach((t4) => t4.listener());
  }
  registerListener(e2, t4) {
    return document.addEventListener(e2, t4), () => document.removeEventListener(e2, t4);
  }
  handlePopstateEvent(e2) {
    let t4 = e2.state || null;
    if (t4 === null) {
      let i2 = y$1(n$1.get().url);
      i2.hash = window.location.hash, a$1.replaceState({ ...n$1.get(), url: i2.href }), v$1.reset();
      return;
    }
    if (!a$1.isValidState(t4)) return this.onMissingHistoryItem();
    a$1.decrypt(t4.page).then((i2) => {
      if (n$1.get().version !== i2.version) {
        this.onMissingHistoryItem();
        return;
      }
      n$1.setQuietly(i2, { preserveState: false }).then(() => {
        v$1.restore(a$1.getScrollRegions()), T$1(n$1.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, E$1 = new se();
var ne = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    return typeof window > "u" ? "navigate" : window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
}, B$1 = new ne();
var G = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t4) => t4.bind(this)());
  }
  static clearRememberedStateOnReload() {
    B$1.isReload() && a$1.deleteState(a$1.rememberedState);
  }
  static handleBackForward() {
    if (!B$1.isBackForward() || !a$1.hasAnyState()) return false;
    let e2 = a$1.getScrollRegions();
    return a$1.decrypt().then((t4) => {
      n$1.set(t4, { preserveScroll: true, preserveState: true }).then(() => {
        v$1.restore(e2), T$1(n$1.get());
      });
    }).catch(() => {
      E$1.onMissingHistoryItem();
    }), true;
  }
  static handleLocation() {
    if (!m$1.exists(m$1.locationVisitKey)) return false;
    let e2 = m$1.get(m$1.locationVisitKey) || {};
    return m$1.remove(m$1.locationVisitKey), typeof window < "u" && n$1.setUrlHash(window.location.hash), a$1.decrypt(n$1.get()).then(() => {
      let t4 = a$1.getState(a$1.rememberedState, {}), i2 = a$1.getScrollRegions();
      n$1.remember(t4), n$1.set(n$1.get(), { preserveScroll: e2.preserveScroll, preserveState: true }).then(() => {
        e2.preserveScroll && v$1.restore(i2), T$1(n$1.get());
      });
    }).catch(() => {
      E$1.onMissingHistoryItem();
    }), true;
  }
  static handleDefault() {
    typeof window < "u" && n$1.setUrlHash(window.location.hash), n$1.set(n$1.get(), { preserveScroll: true, preserveState: true }).then(() => {
      B$1.isReload() && v$1.restore(a$1.getScrollRegions()), T$1(n$1.get());
    });
  }
};
var K$1 = class K {
  constructor(e2, t4, i2) {
    this.id = null;
    this.throttle = false;
    this.keepAlive = false;
    this.cbCount = 0;
    this.keepAlive = i2.keepAlive ?? false, this.cb = t4, this.interval = e2, (i2.autoStart ?? true) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(e2) {
    this.throttle = this.keepAlive ? false : e2, this.throttle && (this.cbCount = 0);
  }
};
var oe = class {
  constructor() {
    this.polls = [];
    this.setupVisibilityListener();
  }
  add(e2, t4, i2) {
    let s2 = new K$1(e2, t4, i2);
    return this.polls.push(s2), { stop: () => s2.stop(), start: () => s2.start() };
  }
  clear() {
    this.polls.forEach((e2) => e2.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener("visibilitychange", () => {
      this.polls.forEach((e2) => e2.isInBackground(document.hidden));
    }, false);
  }
}, Ae = new oe();
var ae = (r5, e2, t4) => {
  if (r5 === e2) return true;
  for (let i2 in r5) if (!t4.includes(i2) && r5[i2] !== e2[i2] && !Xe(r5[i2], e2[i2])) return false;
  return true;
}, Xe = (r5, e2) => {
  switch (typeof r5) {
    case "object":
      return ae(r5, e2, []);
    case "function":
      return r5.toString() === e2.toString();
    default:
      return r5 === e2;
  }
};
var Je = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, le = (r5) => {
  if (typeof r5 == "number") return r5;
  for (let [e2, t4] of Object.entries(Je)) if (r5.endsWith(e2)) return parseFloat(r5) * t4;
  return parseInt(r5);
};
var ce$1 = class ce {
  constructor() {
    this.cached = [];
    this.inFlightRequests = [];
    this.removalTimers = [];
    this.currentUseId = null;
  }
  add(e2, t4, { cacheFor: i2 }) {
    if (this.findInFlight(e2)) return Promise.resolve();
    let o2 = this.findCached(e2);
    if (!e2.fresh && o2 && o2.staleTimestamp > Date.now()) return Promise.resolve();
    let [u2, d2] = this.extractStaleValues(i2), p2 = new Promise((c2, l2) => {
      t4({ ...e2, onCancel: () => {
        this.remove(e2), e2.onCancel(), l2();
      }, onError: (h2) => {
        this.remove(e2), e2.onError(h2), l2();
      }, onPrefetching(h2) {
        e2.onPrefetching(h2);
      }, onPrefetched(h2, I) {
        e2.onPrefetched(h2, I);
      }, onPrefetchResponse(h2) {
        c2(h2);
      } });
    }).then((c2) => (this.remove(e2), this.cached.push({ params: { ...e2 }, staleTimestamp: Date.now() + u2, response: p2, singleUse: i2 === 0, timestamp: Date.now(), inFlight: false }), this.scheduleForRemoval(e2, d2), this.inFlightRequests = this.inFlightRequests.filter((l2) => !this.paramsAreEqual(l2.params, e2)), c2.handlePrefetch(), c2));
    return this.inFlightRequests.push({ params: { ...e2 }, response: p2, staleTimestamp: null, inFlight: true }), p2;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e2) => {
      clearTimeout(e2.timer);
    }), this.removalTimers = [];
  }
  remove(e2) {
    this.cached = this.cached.filter((t4) => !this.paramsAreEqual(t4.params, e2)), this.clearTimer(e2);
  }
  extractStaleValues(e2) {
    let [t4, i2] = this.cacheForToStaleAndExpires(e2);
    return [le(t4), le(i2)];
  }
  cacheForToStaleAndExpires(e2) {
    if (!Array.isArray(e2)) return [e2, e2];
    switch (e2.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e2[0], e2[0]];
      default:
        return [e2[0], e2[1]];
    }
  }
  clearTimer(e2) {
    let t4 = this.removalTimers.find((i2) => this.paramsAreEqual(i2.params, e2));
    t4 && (clearTimeout(t4.timer), this.removalTimers = this.removalTimers.filter((i2) => i2 !== t4));
  }
  scheduleForRemoval(e2, t4) {
    if (!(typeof window > "u") && (this.clearTimer(e2), t4 > 0)) {
      let i2 = window.setTimeout(() => this.remove(e2), t4);
      this.removalTimers.push({ params: e2, timer: i2 });
    }
  }
  get(e2) {
    return this.findCached(e2) || this.findInFlight(e2);
  }
  use(e2, t4) {
    let i2 = `${t4.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = i2, e2.response.then((s2) => {
      if (this.currentUseId === i2) return s2.mergeParams({ ...t4, onPrefetched: () => {
      } }), this.removeSingleUseItems(t4), s2.handle();
    });
  }
  removeSingleUseItems(e2) {
    this.cached = this.cached.filter((t4) => this.paramsAreEqual(t4.params, e2) ? !t4.singleUse : true);
  }
  findCached(e2) {
    return this.cached.find((t4) => this.paramsAreEqual(t4.params, e2)) || null;
  }
  findInFlight(e2) {
    return this.inFlightRequests.find((t4) => this.paramsAreEqual(t4.params, e2)) || null;
  }
  paramsAreEqual(e2, t4) {
    return ae(e2, t4, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, x$2 = new ce$1();
var j$1 = class r {
  constructor(e2) {
    this.callbacks = [];
    if (!e2.prefetch) this.params = e2;
    else {
      let t4 = { onBefore: this.wrapCallback(e2, "onBefore"), onStart: this.wrapCallback(e2, "onStart"), onProgress: this.wrapCallback(e2, "onProgress"), onFinish: this.wrapCallback(e2, "onFinish"), onCancel: this.wrapCallback(e2, "onCancel"), onSuccess: this.wrapCallback(e2, "onSuccess"), onError: this.wrapCallback(e2, "onError"), onCancelToken: this.wrapCallback(e2, "onCancelToken"), onPrefetched: this.wrapCallback(e2, "onPrefetched"), onPrefetching: this.wrapCallback(e2, "onPrefetching") };
      this.params = { ...e2, ...t4, onPrefetchResponse: e2.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(e2) {
    return new r(e2);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  onCancelToken(e2) {
    this.params.onCancelToken({ cancel: e2 });
  }
  markAsFinished() {
    this.params.completed = true, this.params.cancelled = false, this.params.interrupted = false;
  }
  markAsCancelled({ cancelled: e2 = true, interrupted: t4 = false }) {
    this.params.onCancel(), this.params.completed = false, this.params.cancelled = e2, this.params.interrupted = t4;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(e2) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(e2);
  }
  all() {
    return this.params;
  }
  headers() {
    let e2 = { ...this.params.headers };
    this.isPartial() && (e2["X-Inertia-Partial-Component"] = n$1.get().component);
    let t4 = this.params.only.concat(this.params.reset);
    return t4.length > 0 && (e2["X-Inertia-Partial-Data"] = t4.join(",")), this.params.except.length > 0 && (e2["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (e2["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (e2["X-Inertia-Error-Bag"] = this.params.errorBag), e2;
  }
  setPreserveOptions(e2) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, e2), this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, e2);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: e2, args: t4 }) => {
      this.params[e2](...t4);
    });
  }
  merge(e2) {
    this.params = { ...this.params, ...e2 };
  }
  wrapCallback(e2, t4) {
    return (...i2) => {
      this.recordCallback(t4, i2), e2[t4](...i2);
    };
  }
  recordCallback(e2, t4) {
    this.callbacks.push({ name: e2, args: t4 });
  }
  resolvePreserveOption(e2, t4) {
    return typeof e2 == "function" ? e2(t4) : e2 === "errors" ? Object.keys(t4.props.errors || {}).length > 0 : e2;
  }
};
var Ve = { modal: null, listener: null, show(r5) {
  typeof r5 == "object" && (r5 = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(r5)}`);
  let e2 = document.createElement("html");
  e2.innerHTML = r5, e2.querySelectorAll("a").forEach((i2) => i2.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let t4 = document.createElement("iframe");
  if (t4.style.backgroundColor = "white", t4.style.borderRadius = "5px", t4.style.width = "100%", t4.style.height = "100%", this.modal.appendChild(t4), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !t4.contentWindow) throw new Error("iframe not yet ready.");
  t4.contentWindow.document.open(), t4.contentWindow.document.write(e2.outerHTML), t4.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(r5) {
  r5.keyCode === 27 && this.hide();
} };
var Qe = new A(), U = class r2 {
  constructor(e2, t4, i2) {
    this.requestParams = e2;
    this.response = t4;
    this.originatingPage = i2;
  }
  static create(e2, t4, i2) {
    return new r2(e2, t4, i2);
  }
  async handlePrefetch() {
    L(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return Qe.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = false, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), be(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await a$1.processQueue(), a$1.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let e2 = n$1.get().props.errors || {};
    if (Object.keys(e2).length > 0) {
      let t4 = this.getScopedErrors(e2);
      return pe$1(t4), this.requestParams.all().onError(t4);
    }
    ve$1(n$1.get()), await this.requestParams.all().onSuccess(n$1.get()), a$1.preserveUrl = false;
  }
  mergeParams(e2) {
    this.requestParams.merge(e2);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let t4 = y$1(this.getHeader("x-inertia-location"));
      return te(this.requestParams.all().url, t4), this.locationVisit(t4);
    }
    let e2 = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (me$1(e2)) return Ve.show(e2.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(e2) {
    return this.response.status === e2;
  }
  getHeader(e2) {
    return this.response.headers[e2];
  }
  hasHeader(e2) {
    return this.getHeader(e2) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  locationVisit(e2) {
    try {
      if (m$1.set(m$1.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === true }), typeof window > "u") return;
      L(window.location, e2) ? window.location.reload() : window.location.href = e2.href;
    } catch {
      return false;
    }
  }
  async setPage() {
    let e2 = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(e2) ? (this.mergeProps(e2), await this.setRememberedState(e2), this.requestParams.setPreserveOptions(e2), e2.url = a$1.preserveUrl ? n$1.get().url : this.pageUrl(e2), n$1.set(e2, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
  }
  getDataFromResponse(e2) {
    if (typeof e2 != "string") return e2;
    try {
      return JSON.parse(e2);
    } catch {
      return e2;
    }
  }
  shouldSetPage(e2) {
    if (!this.requestParams.all().async || this.originatingPage.component !== e2.component) return true;
    if (this.originatingPage.component !== n$1.get().component) return false;
    let t4 = y$1(this.originatingPage.url), i2 = y$1(n$1.get().url);
    return t4.origin === i2.origin && t4.pathname === i2.pathname;
  }
  pageUrl(e2) {
    let t4 = y$1(e2.url);
    return te(this.requestParams.all().url, t4), t4.pathname + t4.search + t4.hash;
  }
  mergeProps(e2) {
    if (!this.requestParams.isPartial() || e2.component !== n$1.get().component) return;
    let t4 = e2.mergeProps || [], i2 = e2.deepMergeProps || [];
    t4.forEach((s2) => {
      let o2 = e2.props[s2];
      Array.isArray(o2) ? e2.props[s2] = [...n$1.get().props[s2] || [], ...o2] : typeof o2 == "object" && o2 !== null && (e2.props[s2] = { ...n$1.get().props[s2] || [], ...o2 });
    }), i2.forEach((s2) => {
      let o2 = e2.props[s2], u2 = n$1.get().props[s2], d2 = (p2, c2) => Array.isArray(c2) ? [...Array.isArray(p2) ? p2 : [], ...c2] : typeof c2 == "object" && c2 !== null ? Object.keys(c2).reduce((l2, h2) => (l2[h2] = d2(p2 ? p2[h2] : void 0, c2[h2]), l2), { ...p2 }) : c2;
      e2.props[s2] = d2(u2, o2);
    }), e2.props = { ...n$1.get().props, ...e2.props };
  }
  async setRememberedState(e2) {
    let t4 = await a$1.getState(a$1.rememberedState, {});
    this.requestParams.all().preserveState && t4 && e2.component === n$1.get().component && (e2.rememberedState = t4);
  }
  getScopedErrors(e2) {
    return this.requestParams.all().errorBag ? e2[this.requestParams.all().errorBag || ""] || {} : e2;
  }
};
var D = class r3 {
  constructor(e2, t4) {
    this.page = t4;
    this.requestHasFinished = false;
    this.requestParams = j$1.create(e2), this.cancelToken = new AbortController();
  }
  static create(e2, t4) {
    return new r3(e2, t4);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: true })), ge(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), ye(this.requestParams.all()));
    let e2 = this.requestParams.all().prefetch;
    return Fe({ method: this.requestParams.all().method, url: F(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((t4) => (this.response = U.create(this.requestParams, t4, this.page), this.response.handle())).catch((t4) => (t4 == null ? void 0 : t4.response) ? (this.response = U.create(this.requestParams, t4.response, this.page), this.response.handle()) : Promise.reject(t4)).catch((t4) => {
      if (!Fe.isCancel(t4) && de(t4)) return Promise.reject(t4);
    }).finally(() => {
      this.finish(), e2 && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = true, he$1(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: e2 = false, interrupted: t4 = false }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: e2, interrupted: t4 }), this.fireFinishEvents());
  }
  onProgress(e2) {
    this.requestParams.data() instanceof FormData && (e2.percentage = e2.progress ? Math.round(e2.progress * 100) : 0, fe(e2), this.requestParams.all().onProgress(e2));
  }
  getHeaders() {
    let e2 = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": true };
    return n$1.get().version && (e2["X-Inertia-Version"] = n$1.get().version), e2;
  }
};
var H = class {
  constructor({ maxConcurrent: e2, interruptible: t4 }) {
    this.requests = [];
    this.maxConcurrent = e2, this.interruptible = t4;
  }
  send(e2) {
    this.requests.push(e2), e2.send().then(() => {
      this.requests = this.requests.filter((t4) => t4 !== e2);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: true }, false);
  }
  cancelInFlight() {
    this.cancel({ cancelled: true }, true);
  }
  cancel({ cancelled: e2 = false, interrupted: t4 = false } = {}, i2) {
    var _a;
    if (!this.shouldCancel(i2)) return;
    (_a = this.requests.shift()) == null ? void 0 : _a.cancel({ interrupted: t4, cancelled: e2 });
  }
  shouldCancel(e2) {
    return e2 ? true : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
};
var W = class {
  constructor() {
    this.syncRequestStream = new H({ maxConcurrent: 1, interruptible: true });
    this.asyncRequestStream = new H({ maxConcurrent: 1 / 0, interruptible: false });
  }
  init({ initialPage: e2, resolveComponent: t4, swapComponent: i2 }) {
    n$1.init({ initialPage: e2, resolveComponent: t4, swapComponent: i2 }), G.handle(), E$1.init(), E$1.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: true, preserveScroll: true, replace: true });
    }), E$1.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(e2, t4 = {}, i2 = {}) {
    return this.visit(e2, { ...i2, method: "get", data: t4 });
  }
  post(e2, t4 = {}, i2 = {}) {
    return this.visit(e2, { preserveState: true, ...i2, method: "post", data: t4 });
  }
  put(e2, t4 = {}, i2 = {}) {
    return this.visit(e2, { preserveState: true, ...i2, method: "put", data: t4 });
  }
  patch(e2, t4 = {}, i2 = {}) {
    return this.visit(e2, { preserveState: true, ...i2, method: "patch", data: t4 });
  }
  delete(e2, t4 = {}) {
    return this.visit(e2, { preserveState: true, ...t4, method: "delete" });
  }
  reload(e2 = {}) {
    if (!(typeof window > "u")) return this.visit(window.location.href, { ...e2, preserveScroll: true, preserveState: true, async: true, headers: { ...e2.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(e2, t4 = "default") {
    a$1.remember(e2, t4);
  }
  restore(e2 = "default") {
    return a$1.restore(e2);
  }
  on(e2, t4) {
    return typeof window > "u" ? () => {
    } : E$1.onGlobalEvent(e2, t4);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e2, t4 = {}, i2 = {}) {
    return Ae.add(e2, () => this.reload(t4), { autoStart: i2.autoStart ?? true, keepAlive: i2.keepAlive ?? false });
  }
  visit(e2, t4 = {}) {
    let i2 = this.getPendingVisit(e2, { ...t4, showProgress: t4.showProgress ?? !t4.async }), s2 = this.getVisitEvents(t4);
    if (s2.onBefore(i2) === false || !Y(i2)) return;
    let o2 = i2.async ? this.asyncRequestStream : this.syncRequestStream;
    o2.interruptInFlight(), !n$1.isCleared() && !i2.preserveUrl && v$1.save();
    let u2 = { ...i2, ...s2 }, d2 = x$2.get(u2);
    d2 ? (X(d2.inFlight), x$2.use(d2, u2)) : (X(true), o2.send(D.create(u2, n$1.get())));
  }
  getCached(e2, t4 = {}) {
    return x$2.findCached(this.getPrefetchParams(e2, t4));
  }
  flush(e2, t4 = {}) {
    x$2.remove(this.getPrefetchParams(e2, t4));
  }
  flushAll() {
    x$2.removeAll();
  }
  getPrefetching(e2, t4 = {}) {
    return x$2.findInFlight(this.getPrefetchParams(e2, t4));
  }
  prefetch(e2, t4 = {}, { cacheFor: i2 = 3e4 }) {
    if (t4.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let s2 = this.getPendingVisit(e2, { ...t4, async: true, showProgress: false, prefetch: true }), o2 = s2.url.origin + s2.url.pathname + s2.url.search, u2 = window.location.origin + window.location.pathname + window.location.search;
    if (o2 === u2) return;
    let d2 = this.getVisitEvents(t4);
    if (d2.onBefore(s2) === false || !Y(s2)) return;
    J(), this.asyncRequestStream.interruptInFlight();
    let p2 = { ...s2, ...d2 };
    new Promise((l2) => {
      let h2 = () => {
        n$1.get() ? l2() : setTimeout(h2, 50);
      };
      h2();
    }).then(() => {
      x$2.add(p2, (l2) => {
        this.asyncRequestStream.send(D.create(l2, n$1.get()));
      }, { cacheFor: i2 });
    });
  }
  clearHistory() {
    a$1.clear();
  }
  decryptHistory() {
    return a$1.decrypt();
  }
  replace(e2) {
    this.clientVisit(e2, { replace: true });
  }
  push(e2) {
    this.clientVisit(e2);
  }
  clientVisit(e2, { replace: t4 = false } = {}) {
    let i2 = n$1.get(), s2 = typeof e2.props == "function" ? e2.props(i2.props) : e2.props ?? i2.props;
    n$1.set({ ...i2, ...e2, props: s2 }, { replace: t4, preserveScroll: e2.preserveScroll, preserveState: e2.preserveState });
  }
  getPrefetchParams(e2, t4) {
    return { ...this.getPendingVisit(e2, { ...t4, async: true, showProgress: false, prefetch: true }), ...this.getVisitEvents(t4) };
  }
  getPendingVisit(e2, t4, i2 = {}) {
    let s2 = { method: "get", data: {}, replace: false, preserveScroll: false, preserveState: false, only: [], except: [], headers: {}, errorBag: "", forceFormData: false, queryStringArrayFormat: "brackets", async: false, showProgress: true, fresh: false, reset: [], preserveUrl: false, prefetch: false, ...t4 }, [o2, u2] = xe(e2, s2.data, s2.method, s2.forceFormData, s2.queryStringArrayFormat);
    return { cancelled: false, completed: false, interrupted: false, ...s2, ...i2, url: o2, data: u2 };
  }
  getVisitEvents(e2) {
    return { onCancelToken: e2.onCancelToken || (() => {
    }), onBefore: e2.onBefore || (() => {
    }), onStart: e2.onStart || (() => {
    }), onProgress: e2.onProgress || (() => {
    }), onFinish: e2.onFinish || (() => {
    }), onCancel: e2.onCancel || (() => {
    }), onSuccess: e2.onSuccess || (() => {
    }), onError: e2.onError || (() => {
    }), onPrefetched: e2.onPrefetched || (() => {
    }), onPrefetching: e2.onPrefetching || (() => {
    }) };
  }
  loadDeferredProps() {
    var _a;
    let e2 = (_a = n$1.get()) == null ? void 0 : _a.deferredProps;
    e2 && Object.entries(e2).forEach(([t4, i2]) => {
      this.reload({ only: i2 });
    });
  }
};
var ze = { buildDOMElement(r5) {
  let e2 = document.createElement("template");
  e2.innerHTML = r5;
  let t4 = e2.content.firstChild;
  if (!r5.startsWith("<script ")) return t4;
  let i2 = document.createElement("script");
  return i2.innerHTML = t4.innerHTML, t4.getAttributeNames().forEach((s2) => {
    i2.setAttribute(s2, t4.getAttribute(s2) || "");
  }), i2;
}, isInertiaManagedElement(r5) {
  return r5.nodeType === Node.ELEMENT_NODE && r5.getAttribute("inertia") !== null;
}, findMatchingElementIndex(r5, e2) {
  let t4 = r5.getAttribute("inertia");
  return t4 !== null ? e2.findIndex((i2) => i2.getAttribute("inertia") === t4) : -1;
}, update: V$1(function(r5) {
  let e2 = r5.map((i2) => this.buildDOMElement(i2));
  Array.from(document.head.childNodes).filter((i2) => this.isInertiaManagedElement(i2)).forEach((i2) => {
    var _a, _b;
    let s2 = this.findMatchingElementIndex(i2, e2);
    if (s2 === -1) {
      (_a = i2 == null ? void 0 : i2.parentNode) == null ? void 0 : _a.removeChild(i2);
      return;
    }
    let o2 = e2.splice(s2, 1)[0];
    o2 && !i2.isEqualNode(o2) && ((_b = i2 == null ? void 0 : i2.parentNode) == null ? void 0 : _b.replaceChild(o2, i2));
  }), e2.forEach((i2) => document.head.appendChild(i2));
}, 1) };
function Ie(r5, e2, t4) {
  let i2 = {}, s2 = 0;
  function o2() {
    let l2 = s2 += 1;
    return i2[l2] = [], l2.toString();
  }
  function u2(l2) {
    l2 === null || Object.keys(i2).indexOf(l2) === -1 || (delete i2[l2], c2());
  }
  function d2(l2, h2 = []) {
    l2 !== null && Object.keys(i2).indexOf(l2) > -1 && (i2[l2] = h2), c2();
  }
  function p2() {
    let l2 = e2(""), h2 = { ...l2 ? { title: `<title inertia="">${l2}</title>` } : {} }, I = Object.values(i2).reduce((w2, R2) => w2.concat(R2), []).reduce((w2, R2) => {
      if (R2.indexOf("<") === -1) return w2;
      if (R2.indexOf("<title ") === 0) {
        let M = R2.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return w2.title = M ? `${M[1]}${e2(M[2])}${M[3]}` : R2, w2;
      }
      let ue = R2.match(/ inertia="[^"]+"/);
      return ue ? w2[ue[0]] = R2 : w2[Object.keys(w2).length] = R2, w2;
    }, h2);
    return Object.values(I);
  }
  function c2() {
    r5 ? t4(p2()) : ze.update(p2());
  }
  return c2(), { forceUpdate: c2, createProvider: function() {
    let l2 = o2();
    return { update: (h2) => d2(l2, h2), disconnect: () => u2(l2) };
  } };
}
var f$1 = "nprogress", P$1, g$2 = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: true, trickleSpeed: 200, showSpinner: true, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: true, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, q$1 = null, _e = (r5) => {
  Object.assign(g$2, r5), g$2.includeCSS && it(g$2.color), P$1 = document.createElement("div"), P$1.id = f$1, P$1.innerHTML = g$2.template;
}, z = (r5) => {
  let e2 = Le();
  r5 = He(r5, g$2.minimum, 1), q$1 = r5 === 1 ? null : r5;
  let t4 = Ze(!e2), i2 = t4.querySelector(g$2.barSelector), s2 = g$2.speed, o2 = g$2.easing;
  t4.offsetWidth, rt((u2) => {
    let d2 = g$2.positionUsing === "translate3d" ? { transition: `all ${s2}ms ${o2}`, transform: `translate3d(${Q(r5)}%,0,0)` } : g$2.positionUsing === "translate" ? { transition: `all ${s2}ms ${o2}`, transform: `translate(${Q(r5)}%,0)` } : { marginLeft: `${Q(r5)}%` };
    for (let p2 in d2) i2.style[p2] = d2[p2];
    if (r5 !== 1) return setTimeout(u2, s2);
    t4.style.transition = "none", t4.style.opacity = "1", t4.offsetWidth, setTimeout(() => {
      t4.style.transition = `all ${s2}ms linear`, t4.style.opacity = "0", setTimeout(() => {
        De(), t4.style.transition = "", t4.style.opacity = "", u2();
      }, s2);
    }, s2);
  });
}, Le = () => typeof q$1 == "number", ke = () => {
  q$1 || z(0);
  let r5 = function() {
    setTimeout(function() {
      q$1 && (Oe(), r5());
    }, g$2.trickleSpeed);
  };
  g$2.trickle && r5();
}, Ye$1 = (r5) => {
  !r5 && !q$1 || (Oe(0.3 + 0.5 * Math.random()), z(1));
}, Oe = (r5) => {
  let e2 = q$1;
  if (e2 === null) return ke();
  if (!(e2 > 1)) return r5 = typeof r5 == "number" ? r5 : (() => {
    let t4 = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let i2 in t4) if (e2 >= t4[i2][0] && e2 < t4[i2][1]) return parseFloat(i2);
    return 0;
  })(), z(He(e2 + r5, 0, 0.994));
}, Ze = (r5) => {
  var _a;
  if (et()) return document.getElementById(f$1);
  document.documentElement.classList.add(`${f$1}-busy`);
  let e2 = P$1.querySelector(g$2.barSelector), t4 = r5 ? "-100" : Q(q$1 || 0), i2 = Ue();
  return e2.style.transition = "all 0 linear", e2.style.transform = `translate3d(${t4}%,0,0)`, g$2.showSpinner || ((_a = P$1.querySelector(g$2.spinnerSelector)) == null ? void 0 : _a.remove()), i2 !== document.body && i2.classList.add(`${f$1}-custom-parent`), i2.appendChild(P$1), P$1;
}, Ue = () => tt(g$2.parent) ? g$2.parent : document.querySelector(g$2.parent), De = () => {
  document.documentElement.classList.remove(`${f$1}-busy`), Ue().classList.remove(`${f$1}-custom-parent`), P$1 == null ? void 0 : P$1.remove();
}, et = () => document.getElementById(f$1) !== null, tt = (r5) => typeof HTMLElement == "object" ? r5 instanceof HTMLElement : r5 && typeof r5 == "object" && r5.nodeType === 1 && typeof r5.nodeName == "string";
function He(r5, e2, t4) {
  return r5 < e2 ? e2 : r5 > t4 ? t4 : r5;
}
var Q = (r5) => (-1 + r5) * 100, rt = /* @__PURE__ */ (() => {
  let r5 = [], e2 = () => {
    let t4 = r5.shift();
    t4 && t4(e2);
  };
  return (t4) => {
    r5.push(t4), r5.length === 1 && e2();
  };
})(), it = (r5) => {
  let e2 = document.createElement("style");
  e2.textContent = `
    #${f$1} {
      pointer-events: none;
    }

    #${f$1} .bar {
      background: ${r5};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${f$1} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${r5}, 0 0 5px ${r5};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${f$1} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${f$1} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${r5};
      border-left-color: ${r5};
      border-radius: 50%;

      animation: ${f$1}-spinner 400ms linear infinite;
    }

    .${f$1}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${f$1}-custom-parent #${f$1} .spinner,
    .${f$1}-custom-parent #${f$1} .bar {
      position: absolute;
    }

    @keyframes ${f$1}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(e2);
}, st = () => {
  P$1 && (P$1.style.display = "");
}, nt = () => {
  P$1 && (P$1.style.display = "none");
}, b$1 = { configure: _e, isStarted: Le, done: Ye$1, set: z, remove: De, start: ke, status: q$1, show: st, hide: nt };
var _$1 = 0, X = (r5 = false) => {
  _$1 = Math.max(0, _$1 - 1), (r5 || _$1 === 0) && b$1.show();
}, J = () => {
  _$1++, b$1.hide();
};
function ot(r5) {
  document.addEventListener("inertia:start", (e2) => at(e2, r5)), document.addEventListener("inertia:progress", lt);
}
function at(r5, e2) {
  r5.detail.visit.showProgress || J();
  let t4 = setTimeout(() => b$1.start(), e2);
  document.addEventListener("inertia:finish", (i2) => ct(i2, t4), { once: true });
}
function lt(r5) {
  var _a;
  b$1.isStarted() && ((_a = r5.detail.progress) == null ? void 0 : _a.percentage) && b$1.set(Math.max(b$1.status, r5.detail.progress.percentage / 100 * 0.9));
}
function ct(r5, e2) {
  clearTimeout(e2), b$1.isStarted() && (r5.detail.visit.completed ? b$1.done() : r5.detail.visit.interrupted ? b$1.set(0) : r5.detail.visit.cancelled && (b$1.done(), b$1.remove()));
}
function Me({ delay: r5 = 250, color: e2 = "#29d", includeCSS: t4 = true, showSpinner: i2 = false } = {}) {
  ot(r5), b$1.configure({ showSpinner: i2, includeCSS: t4, color: e2 });
}
function Ne(r5) {
  let e2 = r5.currentTarget.tagName.toLowerCase() === "a";
  return !(r5.target && (r5 == null ? void 0 : r5.target).isContentEditable || r5.defaultPrevented || e2 && r5.altKey || e2 && r5.ctrlKey || e2 && r5.metaKey || e2 && r5.shiftKey || e2 && "button" in r5 && r5.button !== 0);
}
var Wr = new W();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
var ie2 = createContext(void 0);
ie2.displayName = "InertiaHeadContext";
var K2 = ie2;
var pe = createContext(void 0);
pe.displayName = "InertiaPageContext";
var B = pe;
function _({ children: s2, initialPage: t4, initialComponent: a2, resolveComponent: p2, titleCallback: i2, onHeadUpdate: g2 }) {
  let [u2, f2] = useState({ component: a2 || null, page: t4, key: null }), c2 = useMemo(() => Ie(typeof window > "u", i2 || ((l2) => l2), g2 || (() => {
  })), []);
  if (useEffect(() => {
    Wr.init({ initialPage: t4, resolveComponent: p2, swapComponent: async ({ component: l2, page: e2, preserveState: d2 }) => {
      f2((r5) => ({ component: l2, page: e2, key: d2 ? r5.key : Date.now() }));
    } }), Wr.on("navigate", () => c2.forceUpdate());
  }, []), !u2.component) return createElement(K2.Provider, { value: c2 }, createElement(B.Provider, { value: u2.page }, null));
  let m3 = s2 || (({ Component: l2, props: e2, key: d2 }) => {
    let r5 = createElement(l2, { key: d2, ...e2 });
    return typeof l2.layout == "function" ? l2.layout(r5) : Array.isArray(l2.layout) ? l2.layout.concat(r5).reverse().reduce((h2, F2) => createElement(F2, { children: h2, ...e2 })) : r5;
  });
  return createElement(K2.Provider, { value: c2 }, createElement(B.Provider, { value: u2.page }, m3({ Component: u2.component, key: u2.key, props: u2.page.props })));
}
_.displayName = "Inertia";
async function ce2({ id: s2 = "app", resolve: t4, setup: a2, title: p2, progress: i2 = {}, page: g2, render: u2 }) {
  let f2 = typeof window > "u", c2 = f2 ? null : document.getElementById(s2), m3 = g2 || JSON.parse(c2.dataset.page), l2 = (r5) => Promise.resolve(t4(r5)).then((h2) => h2.default || h2), e2 = [], d2 = await Promise.all([l2(m3.component), Wr.decryptHistory().catch(() => {
  })]).then(([r5]) => a2({ el: c2, App: _, props: { initialPage: m3, initialComponent: r5, resolveComponent: l2, titleCallback: p2, onHeadUpdate: f2 ? (h2) => e2 = h2 : null } }));
  if (!f2 && i2 && Me(i2), f2) {
    let r5 = await u2(createElement("div", { id: s2, "data-page": JSON.stringify(m3) }, d2));
    return { head: e2, body: r5 };
  }
}
function q() {
  let s2 = useContext(B);
  if (!s2) throw new Error("usePage must be used within the Inertia component");
  return s2;
}
var je = function({ children: s2, title: t4 }) {
  let a2 = useContext(K2), p2 = useMemo(() => a2.createProvider(), [a2]);
  useEffect(() => () => {
    p2.disconnect();
  }, [p2]);
  function i2(e2) {
    return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e2.type) > -1;
  }
  function g2(e2) {
    let d2 = Object.keys(e2.props).reduce((r5, h2) => {
      if (["head-key", "children", "dangerouslySetInnerHTML"].includes(h2)) return r5;
      let F2 = e2.props[h2];
      return F2 === "" ? r5 + ` ${h2}` : r5 + ` ${h2}="${F2}"`;
    }, "");
    return `<${e2.type}${d2}>`;
  }
  function u2(e2) {
    return typeof e2.props.children == "string" ? e2.props.children : e2.props.children.reduce((d2, r5) => d2 + f2(r5), "");
  }
  function f2(e2) {
    let d2 = g2(e2);
    return e2.props.children && (d2 += u2(e2)), e2.props.dangerouslySetInnerHTML && (d2 += e2.props.dangerouslySetInnerHTML.__html), i2(e2) || (d2 += `</${e2.type}>`), d2;
  }
  function c2(e2) {
    return ge$1.cloneElement(e2, { inertia: e2.props["head-key"] !== void 0 ? e2.props["head-key"] : "" });
  }
  function m3(e2) {
    return f2(c2(e2));
  }
  function l2(e2) {
    let d2 = ge$1.Children.toArray(e2).filter((r5) => r5).map((r5) => m3(r5));
    return t4 && !d2.find((r5) => r5.startsWith("<title")) && d2.push(`<title inertia>${t4}</title>`), d2;
  }
  return p2.update(l2(s2)), null;
}, $e = je;
var x$1 = () => {
}, he = forwardRef(({ children: s2, as: t4 = "a", data: a2 = {}, href: p2, method: i2 = "get", preserveScroll: g2 = false, preserveState: u2 = null, replace: f2 = false, only: c2 = [], except: m3 = [], headers: l2 = {}, queryStringArrayFormat: e2 = "brackets", async: d2 = false, onClick: r5 = x$1, onCancelToken: h2 = x$1, onBefore: F2 = x$1, onStart: I = x$1, onProgress: E2 = x$1, onFinish: Y2 = x$1, onCancel: N2 = x$1, onSuccess: z2 = x$1, onError: M = x$1, prefetch: v3 = false, cacheFor: b2 = 0, ...G2 }, X2) => {
  let [Z2, j2] = useState(0), L2 = useRef(null);
  t4 = t4.toLowerCase(), i2 = typeof p2 == "object" ? p2.method : i2.toLowerCase();
  let [k2, ee2] = qe(i2, typeof p2 == "object" ? p2.url : p2 || "", a2, e2), A2 = k2;
  a2 = ee2;
  let $2 = { data: a2, method: i2, preserveScroll: g2, preserveState: u2 ?? i2 !== "get", replace: f2, only: c2, except: m3, headers: l2, async: d2 }, W2 = { ...$2, onCancelToken: h2, onBefore: F2, onStart(o2) {
    j2((w2) => w2 + 1), I(o2);
  }, onProgress: E2, onFinish(o2) {
    j2((w2) => w2 - 1), Y2(o2);
  }, onCancel: N2, onSuccess: z2, onError: M }, H2 = () => {
    Wr.prefetch(A2, $2, { cacheFor: te2 });
  }, R2 = useMemo(() => v3 === true ? ["hover"] : v3 === false ? [] : Array.isArray(v3) ? v3 : [v3], Array.isArray(v3) ? v3 : [v3]), te2 = useMemo(() => b2 !== 0 ? b2 : R2.length === 1 && R2[0] === "click" ? 0 : 3e4, [b2, R2]);
  useEffect(() => () => {
    clearTimeout(L2.current);
  }, []), useEffect(() => {
    R2.includes("mount") && setTimeout(() => H2());
  }, R2);
  let n2 = { onClick: (o2) => {
    r5(o2), Ne(o2) && (o2.preventDefault(), Wr.visit(A2, W2));
  } }, y2 = { onMouseEnter: () => {
    L2.current = window.setTimeout(() => {
      H2();
    }, 75);
  }, onMouseLeave: () => {
    clearTimeout(L2.current);
  }, onClick: n2.onClick }, P2 = { onMouseDown: (o2) => {
    Ne(o2) && (o2.preventDefault(), H2());
  }, onMouseUp: (o2) => {
    o2.preventDefault(), Wr.visit(A2, W2);
  }, onClick: (o2) => {
    r5(o2), Ne(o2) && o2.preventDefault();
  } };
  return i2 !== "get" && (t4 = "button"), createElement(t4, { ...G2, ...{ a: { href: A2 }, button: { type: "button" } }[t4] || {}, ref: X2, ...R2.includes("hover") ? y2 : R2.includes("click") ? P2 : n2, "data-loading": Z2 > 0 ? "" : void 0 }, s2);
});
he.displayName = "InertiaLink";
var Ye = he;
function V(s2, t4) {
  let [a2, p2] = useState(() => {
    let i2 = Wr.restore(t4);
    return i2 !== void 0 ? i2 : s2;
  });
  return useEffect(() => {
    Wr.remember(a2, t4);
  }, [a2, t4]), [a2, p2];
}
function ve(s2, t4) {
  let a2 = useRef(null), p2 = typeof s2 == "string" ? s2 : null, [i2, g2] = useState((typeof s2 == "string" ? t4 : s2) || {}), u2 = useRef(null), f2 = useRef(null), [c2, m3] = p2 ? V(i2, `${p2}:data`) : useState(i2), [l2, e2] = p2 ? V({}, `${p2}:errors`) : useState({}), [d2, r5] = useState(false), [h2, F2] = useState(false), [I, E2] = useState(null), [Y2, N2] = useState(false), [z2, M] = useState(false), v3 = useRef((n2) => n2);
  useEffect(() => (a2.current = true, () => {
    a2.current = false;
  }), []);
  let b2 = useCallback((...n2) => {
    let y2 = typeof n2[0] == "object", P2 = y2 ? n2[0].method : n2[0], C2 = y2 ? n2[0].url : n2[1], o2 = (y2 ? n2[1] : n2[2]) ?? {}, w2 = { ...o2, onCancelToken: (S2) => {
      if (u2.current = S2, o2.onCancelToken) return o2.onCancelToken(S2);
    }, onBefore: (S2) => {
      if (N2(false), M(false), clearTimeout(f2.current), o2.onBefore) return o2.onBefore(S2);
    }, onStart: (S2) => {
      if (F2(true), o2.onStart) return o2.onStart(S2);
    }, onProgress: (S2) => {
      if (E2(S2), o2.onProgress) return o2.onProgress(S2);
    }, onSuccess: (S2) => {
      if (a2.current && (F2(false), E2(null), e2({}), r5(false), N2(true), M(true), g2(cloneDeep(c2)), f2.current = setTimeout(() => {
        a2.current && M(false);
      }, 2e3)), o2.onSuccess) return o2.onSuccess(S2);
    }, onError: (S2) => {
      if (a2.current && (F2(false), E2(null), e2(S2), r5(true)), o2.onError) return o2.onError(S2);
    }, onCancel: () => {
      if (a2.current && (F2(false), E2(null)), o2.onCancel) return o2.onCancel();
    }, onFinish: (S2) => {
      if (a2.current && (F2(false), E2(null)), u2.current = null, o2.onFinish) return o2.onFinish(S2);
    } };
    P2 === "delete" ? Wr.delete(C2, { ...w2, data: v3.current(c2) }) : Wr[P2](C2, v3.current(c2), w2);
  }, [c2, e2, v3]), G2 = useCallback((n2, y2) => {
    m3(typeof n2 == "string" ? (P2) => set(cloneDeep(P2), n2, y2) : typeof n2 == "function" ? (P2) => n2(P2) : n2);
  }, [m3]), X2 = useCallback((n2, y2) => {
    g2(typeof n2 > "u" ? () => c2 : (P2) => typeof n2 == "string" ? set(cloneDeep(P2), n2, y2) : Object.assign(cloneDeep(P2), n2));
  }, [c2, g2]), Z2 = useCallback((...n2) => {
    n2.length === 0 ? m3(i2) : m3((y2) => n2.filter((P2) => has(i2, P2)).reduce((P2, C2) => set(P2, C2, get(i2, C2)), { ...y2 }));
  }, [m3, i2]), j2 = useCallback((n2, y2) => {
    e2((P2) => {
      let C2 = { ...P2, ...typeof n2 == "string" ? { [n2]: y2 } : n2 };
      return r5(Object.keys(C2).length > 0), C2;
    });
  }, [e2, r5]), L2 = useCallback((...n2) => {
    e2((y2) => {
      let P2 = Object.keys(y2).reduce((C2, o2) => ({ ...C2, ...n2.length > 0 && !n2.includes(o2) ? { [o2]: y2[o2] } : {} }), {});
      return r5(Object.keys(P2).length > 0), P2;
    });
  }, [e2, r5]), k2 = (n2) => (y2, P2) => {
    b2(n2, y2, P2);
  }, ee2 = useCallback(k2("get"), [b2]), A2 = useCallback(k2("post"), [b2]), $2 = useCallback(k2("put"), [b2]), W2 = useCallback(k2("patch"), [b2]), H2 = useCallback(k2("delete"), [b2]), R2 = useCallback(() => {
    u2.current && u2.current.cancel();
  }, []), te2 = useCallback((n2) => {
    v3.current = n2;
  }, []);
  return { data: c2, setData: G2, isDirty: !isEqual(c2, i2), errors: l2, hasErrors: d2, processing: h2, progress: I, wasSuccessful: Y2, recentlySuccessful: z2, transform: te2, setDefaults: X2, reset: Z2, setError: j2, clearErrors: L2, submit: b2, get: ee2, post: A2, put: $2, patch: W2, delete: H2, cancel: R2 };
}
var me = Wr;
var g$1 = (o2) => new Promise((r5, n2) => {
  let s2 = "";
  o2.on("data", (t4) => s2 += t4), o2.on("end", () => r5(s2)), o2.on("error", (t4) => n2(t4));
}), P = (o2, r5) => {
  let n2 = 13714, t4 = (e2) => {
    console.log(e2);
  };
  let p2 = { "/health": async () => ({ status: "OK", timestamp: Date.now() }), "/shutdown": () => c$1.exit(), "/render": async (e2) => o2(JSON.parse(await g$1(e2))), "/404": async () => ({ status: "NOT_FOUND", timestamp: Date.now() }) };
  createServer(async (e2, i2) => {
    let l2 = p2[e2.url] || p2["/404"];
    try {
      i2.writeHead(200, { "Content-Type": "application/json", Server: "Inertia.js SSR" }), i2.write(JSON.stringify(await l2(e2)));
    } catch (m3) {
      console.error(m3);
    }
    i2.end();
  }).listen(n2, () => t4("Inertia SSR server started.")), t4(`Starting SSR server on port ${n2}...`);
};
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r5 = arguments[e2];
      for (var n2 in r5) ({}).hasOwnProperty.call(r5, n2) && (t4[n2] = r5[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r4 = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r4, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738" }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r5 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r5[n2] = t4[n2]);
  return r5;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r5) {
    return t5[r5] = e2[r5], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r5 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r5.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r5.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r6 = e3.obj[e3.prop];
      if (u(r6)) {
        for (var n3 = [], o3 = 0; o3 < r6.length; ++o3) void 0 !== r6[o3] && n3.push(r6[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r5) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r5) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r5, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r5) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r5 = [], n2 = 0; n2 < t4.length; n2 += 1) r5.push(e2(t4[n2]));
    return r5;
  }
  return e2(t4);
}, merge: function t2(e2, r5, n2) {
  if (!r5) return e2;
  if ("object" != typeof r5) {
    if (u(e2)) e2.push(r5);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r5];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r5)) && (e2[r5] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r5);
  var o2 = e2;
  return u(e2) && !u(r5) && (o2 = s(e2, n2)), u(e2) && u(r5) ? (r5.forEach(function(r6, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r6 && "object" == typeof r6 ? e2[o3] = t2(u2, r6, n2) : e2.push(r6);
    } else e2[o3] = r6;
  }), e2) : Object.keys(r5).reduce(function(e3, o3) {
    var u2 = r5[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v2 = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m2 = function t3(e2, r5, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m3) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r5, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r5, v2.encoder, m3, "key", y2) : r5;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r5 : u2(r5, v2.encoder, m3, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v2.encoder, m3, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v2.encoder, m3, "value", y2))];
    }
    return [g2(r5) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C2 = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C2) {
      var _2 = p(w2) ? "function" == typeof n2 ? n2(r5, k2) : r5 : r5 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C2, _2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m3));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r5, n2) {
  if (t4) {
    var o2 = r5.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r5.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r5.plainObjects && j.call(Object.prototype, a2) && !r5.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r5.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r5.depth; ) {
      if (f2 += 1, !r5.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r5.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r6, n3) {
      for (var o3 = n3 ? e3 : E(e3, r6), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r6.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r6.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r6.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r6.parseArrays && f3 <= r6.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r5, n2);
  }
}, S = function(t4, e2) {
  var r5 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r5.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r6, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r6 = 0; r6 < o3.length; ++r6) 0 === o3[r6].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r6] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r6] && (u3 = "iso-8859-1"), i3 = r6, r6 = o3.length);
    for (r6 = 0; r6 < o3.length; ++r6) if (r6 !== i3) {
      var a3, s3, c2 = o3[r6], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r5) : t4, o2 = r5.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r5, "string" == typeof t4);
    o2 = f.merge(o2, s2, r5);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r5) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r5;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r5 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r6, n3) => {
      var o3;
      const i3 = `(?<${r6}>${(null == (o3 = this.wheres[r6]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r5}/?$`).exec(n2)) ? e2 : new RegExp(`^${r5}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r5, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r5])) throw new Error(`Ziggy error: '${r5}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r5] && !new RegExp(`^${n2 ? `(${this.wheres[r5]})?` : this.wheres[r5]}$`).test(null != (i2 = t4[r5]) ? i2 : "")) throw new Error(`Ziggy error: '${r5}' parameter '${t4[r5]}' does not match required format '${this.wheres[r5]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r5]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r5, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r5);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r5) => t({}, e3, { [r5]: this.u[r5] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r5, n2 = t4, i2 = function(t5) {
        if (!t5) return v2;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v2.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r6 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r6 = t5.format;
        }
        var n3 = o.formatters[r6], i3 = v2.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v2.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v2.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v2.charsetSentinel, delimiter: void 0 === t5.delimiter ? v2.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v2.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v2.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v2.encodeValuesOnly, filter: i3, format: r6, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v2.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v2.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v2.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r5 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r5 || (r5 = Object.keys(n2)), i2.sort && r5.sort(i2.sort);
      for (var s2 = 0; s2 < r5.length; ++s2) {
        var f2 = r5[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m2(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r5 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r5 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r5, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r5 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r5;
  }
  current(e2, r5) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r5) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r5 = this.l(r5, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r5).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r6]) => Array.isArray(r6) && Array.isArray(e3[t5]) ? r6.every((r7) => e3[t5].includes(r7)) : "object" == typeof r6 && "object" == typeof e3[t5] && null !== r6 && null !== e3[t5] ? c2(r6, e3[t5]) : e3[t5] == r6);
    return c2(r5, f2);
  }
  h() {
    var t4, e2, r5, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r5 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r5 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r5 } = this.p();
    return t({}, e2, r5);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r5 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r5.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r6, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r6 } : "object" == typeof r6 ? r6 : { [r6]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r5.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r5), this.j(e2, r5));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r5 }, n2) => t({}, e3, { [r5]: this.t.defaults[r5] }), {});
  }
  j(e2, { bindings: r5, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r5[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r5[o2]}'.`);
        r5[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r5[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r5, n2) {
  const o2 = new N(t4, e2, r5, n2);
  return t4 ? o2.toString() : o2;
}
const enMessages = {};
const Home$3 = "Home";
const About$3 = "About";
const Features$3 = "Features";
const Integrations$3 = "Integrations";
const Pricing$7 = "Pricing";
const Contact$3 = "Contact";
const Blog$3 = "Blog";
const Dashboard$3 = "Dashboard";
const Logout$1 = "Logout";
const Invoices$1 = "Invoices";
const Profile$1 = "Profile";
const Settings$1 = "Settings";
const enMenu = {
  Home: Home$3,
  About: About$3,
  Features: Features$3,
  Integrations: Integrations$3,
  Pricing: Pricing$7,
  Contact: Contact$3,
  "Virtual Airlines": "Virtual Airlines",
  Blog: Blog$3,
  "For Business": "For Business",
  Dashboard: Dashboard$3,
  "Log In": "Log In",
  Logout: Logout$1,
  Invoices: Invoices$1,
  Profile: Profile$1,
  Settings: Settings$1
};
const enErrors = {};
const Welcome$3 = "Welcome";
const Guest$3 = "Guest";
const New$3 = "New";
const Page$3 = "Page";
const Month$3 = "Month";
const Year$3 = "Year";
const Currency$3 = "Currency";
const Select$1 = "Select";
const Login$1 = "Login";
const Register$1 = "Register";
const Website$1 = "Website";
const Airlines$3 = "Airlines";
const or$3 = "ou";
const Email$3 = "Email";
const Password$3 = "Password";
const Pricing$6 = "Pricing";
const Monthly$3 = "Monthly";
const Yearly$3 = "Yearly";
const Popular$3 = "Popular";
const Country$1 = "Country";
const Apply$1 = "Apply";
const Checkout$1 = "Checkout";
const Back$1 = "Back";
const Address$1 = "Address";
const City$1 = "City";
const Continue$1 = "Continue";
const Subtotal$1 = "Subtotal";
const Taxes$1 = "Taxes";
const Included$1 = "Included";
const Name$1 = "Nome";
const Surname$1 = "Último Nome";
const Portal$1 = "Portal";
const Join$1 = "Join";
const enStaticText = {
  Welcome: Welcome$3,
  "Welcome To": "Welcome To",
  "You Are Welcome": "You Are Welcome",
  Guest: Guest$3,
  New: New$3,
  "Sign In": "Sign In",
  "Back to Website": "Back to Website",
  Page: Page$3,
  "Purchase Now": "Purchase Now",
  Month: Month$3,
  Year: Year$3,
  Currency: Currency$3,
  Select: Select$1,
  Login: Login$1,
  Register: Register$1,
  Website: Website$1,
  "Boost Your Virtual Pilots Experience": "Boost Your Virtual Pilots Experience",
  "Most powerful System to": "Most powerful System to",
  "Manage your Virtual Airline": "Manage your Virtual Airline",
  "AVG is a cutting-edge system that allows you to efficiently manage your virtual airline, featuring a modern design and a wide range of tools to help you succeed.": "AVG is a cutting-edge system that allows you to efficiently manage your virtual airline, featuring a modern design and a wide range of tools to help you succeed.",
  "Try Now": "Try Now",
  "Virtual Airlines": "Virtual Airlines",
  "All Rights Reserved by": "All Rights Reserved by",
  "Produced By": "Produced By",
  "Check and Explore all Airlines": "Check and Explore all Airlines",
  Airlines: Airlines$3,
  "Total Airlines": "Total Airlines",
  "Virtual Airline Pilot Hub": "Virtual Airline Pilot Hub",
  "Sign In with": "Sign In with",
  "Sign Up with": "Sign Up with",
  or: or$3,
  "Email Address": "Email Address",
  Email: Email$3,
  Password: Password$3,
  "Confirm Password": "Confirm Password",
  "Remember this Device": "Remember this Device",
  "Forgot Password": "Forgot Password",
  "Not Have Account": "Not Have Account",
  "You Have Account": "You Have Account",
  "Create an account": "Create an account",
  "Choose Your Plan": "Choose Your Plan",
  Pricing: Pricing$6,
  "Trusted by +100 virtual airlines": "Trusted by +100 virtual airlines",
  "Power your virtual airline with our scalable solution": "Power your virtual airline with our scalable solution",
  "Secured payment with": "Secured payment with",
  Monthly: Monthly$3,
  Yearly: Yearly$3,
  "Create Now your Virtual Airline with us": "Create Now your Virtual Airline with us",
  "Pilot Login": "Pilot Login",
  "Create Company": "Create Company",
  "Start your virtual airline today": "Start your virtual airline today",
  "no hidden fees": "no hidden fees",
  Popular: Popular$3,
  Country: Country$1,
  Apply: Apply$1,
  Checkout: Checkout$1,
  Back: Back$1,
  "Billing Address": "Billing Address",
  "First Name": "First Name",
  "Last Name": "Last Name",
  "Phone Number": "Phone Number",
  "Country of Residence": "Country of Residence",
  Address: Address$1,
  City: City$1,
  "State/Province": "State/Province",
  "Postal Code": "Postal Code",
  Continue: Continue$1,
  "Order Summary": "Order Summary",
  "48-month plan": "48-month plan",
  "Daily Backup": "Daily Backup",
  "3 Extra Months": "3 Extra Months",
  "Domain Name": "Domain Name",
  "WHOIS Domain Privacy Protection": "WHOIS Domain Privacy Protection",
  Subtotal: Subtotal$1,
  "Discount - {{percentage}}%": "Discount - {{percentage}}%",
  Taxes: Taxes$1,
  "(Calculated after billing information)": "(Calculated after billing information)",
  "Estimated Total": "Estimated Total",
  "Have a coupon?": "Have a coupon?",
  "Monthly Recurring": "Monthly Recurring",
  "Yearly Recurring": "Yearly Recurring",
  Included: Included$1,
  "Coupon Code": "Coupon Code",
  "Undefined Address": "Undefined Address",
  "Create new address": "Create new address",
  Name: Name$1,
  Surname: Surname$1,
  Portal: Portal$1,
  "My Virtual Airlines": "My Virtual Airlines",
  "List of virtual airlines you are a member of": "List of virtual airlines you are a member of",
  "You are not a member of any virtual airline yet": "You are not a member of any virtual airline yet",
  "Online Pilots": "Online Pilots",
  "Last Flight": "Last Flight",
  Join: Join$1,
  "New Company": "New Company"
};
const ptMessages = {};
const Home$2 = "Inicio";
const About$2 = "Sobre";
const Features$2 = "Funcionalidades";
const Integrations$2 = "Integracões";
const Pricing$5 = "Preços";
const Contact$2 = "Contacto";
const Blog$2 = "Blog";
const Dashboard$2 = "Dashboard";
const Logout = "Sair";
const Invoices = "Faturas";
const Profile = "Perfil";
const Settings = "Configurações";
const ptMenu = {
  Home: Home$2,
  About: About$2,
  Features: Features$2,
  Integrations: Integrations$2,
  Pricing: Pricing$5,
  Contact: Contact$2,
  "Virtual Airlines": "Companhias Virtuais",
  Blog: Blog$2,
  "For Business": "Para Empresas",
  Dashboard: Dashboard$2,
  "Log In": "Iniciar Sessão",
  Logout,
  Invoices,
  Profile,
  Settings
};
const ptErrors = {};
const Checkout = "Finalizar Compra";
const Back = "Voltar";
const Address = "Morada";
const City = "Cidade";
const Continue = "Continuar";
const Subtotal = "Subtotal";
const Taxes = "Impostos";
const Welcome$2 = "Bem-vindo";
const Guest$2 = "Visitante";
const New$2 = "Novo";
const Page$2 = "Pagina";
const Month$2 = "Mês";
const Year$2 = "Ano";
const Currency$2 = "Moeda";
const Select = "Selecionar";
const Login = "Entrar";
const Register = "Criar Conta";
const Website = "Site";
const Airlines$2 = "Companhias";
const or$2 = "ou";
const Email$2 = "Email";
const Password$2 = "Senha";
const Pricing$4 = "Preços";
const Monthly$2 = "Mensal";
const Yearly$2 = "Anual";
const Popular$2 = "Popular";
const Country = "País";
const Apply = "Aplicar";
const Included = "Incluído";
const Name = "Nome";
const Surname = "Último Nome";
const Portal = "Portal";
const Join = "Entrar";
const ptStaticText = {
  Checkout,
  Back,
  "Billing Address": "Endereço de Faturação",
  "First Name": "Nome Próprio",
  "Last Name": "Apelido",
  "Phone Number": "Número de Telefone",
  "Country of Residence": "País de Residência",
  Address,
  City,
  "State/Province": "Região/Província",
  "Postal Code": "Código Postal",
  Continue,
  "Order Summary": "Resumo do Pedido",
  "48-month plan": "Plano de 48 meses",
  "Daily Backup": "Backup Diário",
  "3 Extra Months": "3 Meses Extra",
  "Domain Name": "Nome do Domínio",
  "WHOIS Domain Privacy Protection": "Proteção de Privacidade de Domínio WHOIS",
  Subtotal,
  "Discount - {{percentage}}%": "Desconto - {{percentage}}%",
  Taxes,
  "(Calculated after billing information)": "(Calculado após informação de faturação)",
  "Estimated Total": "Total Estimado",
  "Have a coupon?": "Tem um cupão?",
  Welcome: Welcome$2,
  "Welcome To": "Bem-vindo a",
  "You Are Welcome": "Seja Bem-vindo",
  Guest: Guest$2,
  New: New$2,
  "Sign In": "Entrar",
  "Back to Website": "Voltar para o Site",
  Page: Page$2,
  "Purchase Now": "Continuar",
  Month: Month$2,
  Year: Year$2,
  Currency: Currency$2,
  Select,
  Login,
  Register,
  Website,
  "Boost Your Virtual Pilots Experience": "Melhore a Experiência dos seus Pilotos Virtuais",
  "Most powerful System to": "O sistema mais Completo para",
  "Manage your Virtual Airline": "Gerenciar a sua Virtual Airline",
  "AVG is a cutting-edge system that allows you to efficiently manage your virtual airline, featuring a modern design and a wide range of tools to help you succeed.": "AVG é um sistema de ponta que permite gerenciar a sua companhia aerea virtual de forma eficiente, com um design moderno e uma ampla gama de ferramentas para ajudar você a alcançar o sucesso",
  "Try Now": "Experimentar",
  "Virtual Airlines": "Companhias Virtuais",
  "All Rights Reserved by": "Todos os Direitos Reservados por",
  "Produced By": "Desenvolvido por",
  "Check and Explore all Airlines": "Explore Todas as Companhias",
  Airlines: Airlines$2,
  "Total Airlines": "Total de Companhias",
  "Virtual Airline Pilot Hub": "Hub de Pilotos Virtuais",
  "Sign In with": "Entrar com",
  "Sign Up with": "Registar com",
  or: or$2,
  "Email Address": "Endereço de Email",
  Email: Email$2,
  Password: Password$2,
  "Confirm Password": "Confirmar Senha",
  "Remember this Device": "Lembrar este Dispositivo",
  "Forgot Password": "Esqueceu a Senha",
  "Not Have Account": "Não tem uma conta",
  "You Have Account": "Tem uma conta",
  "Create an account": "Criar uma conta",
  "Choose Your Plan": "Escolha seu plano",
  Pricing: Pricing$4,
  "Trusted by +100 virtual airlines": "Acreditado por +100 companhias virtuais",
  "Power your virtual airline with our scalable solution": "Potencialize sua companhia Virtual com nossa solução",
  "Secured payment with": "Pagamento Seguro com",
  Monthly: Monthly$2,
  Yearly: Yearly$2,
  "Create Now your Virtual Airline with us": "Crie Agora sua companhia Virtual connosco",
  "Pilot Login": "Entrar como Piloto",
  "Create Company": "Criar Companhia",
  "Start your virtual airline today": "Comece sua companhia virtual hoje",
  "no hidden fees": "sem taxas escondidas",
  Popular: Popular$2,
  Country,
  Apply,
  "Monthly Recurring": "Recorrencia Mensal",
  "Yearly Recurring": "Recorrencia Anual",
  Included,
  "Coupon Code": "Código de Desconto",
  "Undefined Address": "Endereço Indefinido",
  "Create new address": "Criar novo endereço",
  Name,
  Surname,
  Portal,
  "My Virtual Airlines": "Minhas Companhias Virtuais",
  "List of virtual airlines you are a member of": "Lista de companhias virtuais das quais você é membro",
  "You are not a member of any virtual airline yet": "Você ainda não é membro de nenhuma companhia virtual",
  "Online Pilots": "Pilotos Online",
  "Last Flight": "Último Voo",
  Join,
  "New Company": "Nova Companhia"
};
const esMessages = {};
const Home$1 = "Inicio";
const About$1 = "Acerca de";
const Features$1 = "Características";
const Integrations$1 = "Integraciones";
const Contact$1 = "Contacto";
const Blog$1 = "Blog";
const Dashboard$1 = "Tablero";
const Pricing$3 = "Precios";
const esMenu = {
  Home: Home$1,
  About: About$1,
  Features: Features$1,
  Integrations: Integrations$1,
  Contact: Contact$1,
  Blog: Blog$1,
  "For Business": "Para empresas",
  Dashboard: Dashboard$1,
  "Log In": "Iniciar sesión",
  Pricing: Pricing$3
};
const esErrors = {};
const Welcome$1 = "Bienvenido";
const Guest$1 = "Invitado";
const New$1 = "Nuevo";
const Page$1 = "Página";
const Month$1 = "Mes";
const Year$1 = "Año";
const Currency$1 = "Moneda";
const Airlines$1 = "Aerolíneas";
const or$1 = "o";
const Email$1 = "Correo electrónico";
const Password$1 = "Contraseña";
const Pricing$2 = "Precios";
const Monthly$1 = "Mensual";
const Yearly$1 = "Anual";
const Popular$1 = "Popular";
const esStaticText = {
  Welcome: Welcome$1,
  "Welcome To": "Bienvenido a",
  "You Are Welcome": "Eres bienvenido",
  Guest: Guest$1,
  New: New$1,
  "Sign In": "Iniciar sesión",
  "Back to Website": "Volver al sitio web",
  Page: Page$1,
  "Purchase Now": "Comprar ahora",
  Month: Month$1,
  Year: Year$1,
  Currency: Currency$1,
  "Boost Your Virtual Pilots Experience": "Mejora tu experiencia de pilotos virtuales",
  "Most powerful System to": "El sistema más potente para",
  "Manage your Virtual Airline": "Gestionar tu aerolínea virtual",
  "AVG is a cutting-edge system that allows you to efficiently manage your virtual airline, featuring a modern design and a wide range of tools to help you succeed.": "AVG es un sistema de vanguardia que te permite gestionar eficientemente tu aerolínea virtual, con un diseño moderno y una amplia gama de herramientas para ayudarte a tener éxito.",
  "Try Now": "Prueba ahora",
  "Virtual Airlines": "Aerolíneas virtuales",
  "All Rights Reserved by": "Todos los derechos reservados por",
  "Produced By": "Producido por",
  "Check and Explore all Airlines": "Consulta y explora todas las aerolíneas",
  Airlines: Airlines$1,
  "Total Airlines": "Total de aerolíneas",
  "Virtual Airline Pilot Hub": "Centro de pilotos de aerolíneas virtuales",
  "Sign In with": "Iniciar sesión con",
  or: or$1,
  "Email Address": "Dirección de correo electrónico",
  Email: Email$1,
  Password: Password$1,
  "Remember this Device": "Recordar este dispositivo",
  "Forgot Password": "Olvidé mi contraseña",
  "Not Have Account": "No tienes cuenta",
  "Create an account": "Crear una cuenta",
  "Choose Your Plan": "Elige tu plan",
  Pricing: Pricing$2,
  "Trusted by +100 virtual airlines": "Confiado por más de 100 aerolíneas virtuales",
  "Power your virtual airline with our scalable solution": "Potencia tu aerolínea virtual con nuestra solución escalable",
  "Secured payment with": "Pago seguro con",
  Monthly: Monthly$1,
  Yearly: Yearly$1,
  "Create Now your Virtual Airline with us": "Crea ahora tu aerolínea virtual con nosotros",
  "Pilot Login": "Inicio de sesión de piloto",
  "Create Company": "Crear empresa",
  "Start your virtual airline today": "Comienza tu aerolínea virtual hoy",
  "no hidden fees": "sin costos ocultos",
  Popular: Popular$1
};
const frMessages = {};
const Home = "Accueil";
const About = "À propos";
const Features = "Fonctionnalités";
const Integrations = "Intégrations";
const Contact = "Contact";
const Blog = "Blog";
const Dashboard = "Tableau de bord";
const Pricing$1 = "Tarification";
const frMenu = {
  Home,
  About,
  Features,
  Integrations,
  Contact,
  Blog,
  "For Business": "Pour les entreprises",
  Dashboard,
  "Log In": "Se connecter",
  Pricing: Pricing$1
};
const frErrors = {};
const Welcome = "Bienvenue";
const Guest = "Invité";
const New = "Nouveau";
const Page = "Page";
const Month = "Mois";
const Year = "Année";
const Currency = "Devise";
const Airlines = "Compagnies aériennes";
const or = "ou";
const Email = "E-mail";
const Password = "Mot de passe";
const Pricing = "Tarification";
const Monthly = "Mensuel";
const Yearly = "Annuel";
const Popular = "Populaire";
const frStaticText = {
  Welcome,
  "Welcome To": "Bienvenue à",
  "You Are Welcome": "Vous êtes les bienvenus",
  Guest,
  New,
  "Sign In": "Se connecter",
  "Back to Website": "Retour au site web",
  Page,
  "Purchase Now": "Acheter maintenant",
  Month,
  Year,
  Currency,
  "Boost Your Virtual Pilots Experience": "Améliorez votre expérience de pilotes virtuels",
  "Most powerful System to": "Système le plus puissant pour",
  "Manage your Virtual Airline": "Gérer votre compagnie aérienne virtuelle",
  "AVG is a cutting-edge system that allows you to efficiently manage your virtual airline, featuring a modern design and a wide range of tools to help you succeed.": "AVG est un système de pointe qui vous permet de gérer efficacement votre compagnie aérienne virtuelle, avec un design moderne et une large gamme d'outils pour vous aider à réussir.",
  "Try Now": "Essayez maintenant",
  "Virtual Airlines": "Compagnies aériennes virtuelles",
  "All Rights Reserved by": "Tous droits réservés par",
  "Produced By": "Produit par",
  "Check and Explore all Airlines": "Découvrez et explorez toutes les compagnies aériennes",
  Airlines,
  "Total Airlines": "Total des compagnies aériennes",
  "Virtual Airline Pilot Hub": "Hub des pilotes de compagnies aériennes virtuelles",
  "Sign In with": "Se connecter avec",
  or,
  "Email Address": "Adresse e-mail",
  Email,
  Password,
  "Remember this Device": "Se souvenir de cet appareil",
  "Forgot Password": "Mot de passe oublié",
  "Not Have Account": "Vous n'avez pas de compte",
  "Create an account": "Créer un compte",
  "Choose Your Plan": "Choisissez votre plan",
  Pricing,
  "Trusted by +100 virtual airlines": "Approuvé par plus de 100 compagnies aériennes virtuelles",
  "Power your virtual airline with our scalable solution": "Propulsez votre compagnie aérienne virtuelle avec notre solution évolutive",
  "Secured payment with": "Paiement sécurisé avec",
  Monthly,
  Yearly,
  "Create Now your Virtual Airline with us": "Créez maintenant votre compagnie aérienne virtuelle avec nous",
  "Pilot Login": "Connexion pilote",
  "Create Company": "Créer une entreprise",
  "Start your virtual airline today": "Démarrez votre compagnie aérienne virtuelle aujourd'hui",
  "no hidden fees": "aucun frais caché",
  Popular
};
i18n.use(Backend).use(initReactI18next).use(LanguageDetector).init({
  detection: {
    order: ["path", "htmlTag"]
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  debug: false,
  supportedLngs: ["en", "pt", "es", "fr"],
  ns: ["static-text", "messages", "menu", "errors"],
  // Definir namespaces
  defaultNS: "messages",
  // Namespace padrão
  resources: {
    en: {
      "static-text": enStaticText,
      messages: enMessages,
      menu: enMenu,
      errors: enErrors
    },
    pt: {
      "static-text": ptStaticText,
      messages: ptMessages,
      menu: ptMenu,
      errors: ptErrors
    },
    es: {
      "static-text": esStaticText,
      messages: esMessages,
      menu: esMenu,
      errors: esErrors
    },
    fr: {
      "static-text": frStaticText,
      messages: frMessages,
      menu: frMenu,
      errors: frErrors
    }
  }
});
const setCurrencyCookie = (currencyCode) => {
  Cookies.set("currency", currencyCode, { path: "/" });
};
const getCurrencyCookie = () => {
  return Cookies.get("currency") || null;
};
const CurrencyContext = createContext(void 0);
function CurrencyProvider$2({ children }) {
  let defaultCurrency = "";
  try {
    const pageProps = q().props;
    defaultCurrency = pageProps.default_currency;
  } catch (error) {
    console.warn("CurrencyProvider: Could not access page props, falling back to cookies");
  }
  const [currentCurrencyCode, setCurrentCurrencyCode] = useState(
    getCurrencyCookie() || defaultCurrency
  );
  useEffect(() => {
    if (!getCurrencyCookie()) {
      setCurrencyCookie(currentCurrencyCode);
    }
  }, [currentCurrencyCode]);
  const updateCurrency = (code) => {
    setCurrentCurrencyCode(code);
    setCurrencyCookie(code);
  };
  return /* @__PURE__ */ jsx(CurrencyContext.Provider, { value: { currentCurrencyCode, updateCurrency }, children });
}
const CurrencyContext$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CurrencyContext,
  CurrencyProvider: CurrencyProvider$2
}, Symbol.toStringTag, { value: "Module" }));
function CurrencyProvider({ children }) {
  const [currentCurrencyCode, setCurrentCurrencyCode] = useState(getCurrencyCookie());
  const updateCurrency = (code) => {
    setCurrencyCookie(code);
    setCurrentCurrencyCode(code);
  };
  return /* @__PURE__ */ jsx(CurrencyContext.Provider, { value: {
    currentCurrencyCode: currentCurrencyCode || "",
    updateCurrency
  }, children });
}
const CurrencyProvider$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CurrencyProvider
}, Symbol.toStringTag, { value: "Module" }));
const cssConfig = {
  "public": [
    "/assets/css/template-public-default/styles.css"
  ],
  "private": [
    "/assets/css/template-private-default/styles.css"
  ],
  "portal": [
    "/assets/css/tailwind.css",
    "/assets/css/template-portal-default/styles.css"
  ],
  "landing": [
    "/assets/css/template-landing-page-default/styles.css",
    "/assets/css/template-landing-page-default/aos.css"
  ]
};
function useFrontend(url) {
  const { url: inertiaUrl } = q();
  const [frontend, setFrontend] = useState("public");
  useEffect(() => {
    let pathSegments;
    try {
      pathSegments = new URL(url || inertiaUrl).pathname.split("/");
    } catch (error) {
      pathSegments = (url || inertiaUrl).split("/");
    }
    if (pathSegments[2] === "portal") {
      setFrontend("portal");
    } else if (pathSegments[2] === "business") {
      setFrontend("landing");
    } else if (pathSegments[2] === "dashboard") {
      setFrontend("private");
    } else {
      setFrontend("public");
    }
  }, [url, inertiaUrl]);
  return frontend;
}
function determineCSSByUrl(url) {
  const frontend = useFrontend(url);
  return cssConfig[frontend] || [];
}
const appName = "Laravel";
P(async (page) => {
  const urlPath = page.props.ziggy.location;
  const pathSegments = new URL(urlPath).pathname.split("/");
  const locale = pathSegments[1] || "en";
  await i18n.init({
    lng: locale
    // Set the language based on URL path
  });
  if (page.props.ziggy) {
    const Ziggy2 = {
      ...page.props.ziggy,
      location: new URL(page.props.ziggy.location)
    };
    global.Ziggy = Ziggy2;
    global.route = (name, params, absolute) => T(name, params, absolute, Ziggy2);
  }
  const cssFiles = determineCSSByUrl(page.props.ziggy.location);
  const cssLinks = cssFiles.map(
    (css) => `<link rel="stylesheet" href="${css}">`
  ).join("\n");
  return ce2({
    page,
    render: (vnode) => {
      const html = ReactDOMServer.renderToString(vnode);
      return `${cssLinks}
${html}`;
    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Test.tsx": () => import("./assets/Test-DGKCmlvu.js"), "./app.tsx": () => import("./assets/app-CDjo9yLZ.js"), "./frontend-landing-page/template-default/components/form/Button.tsx": () => import("./assets/Button-D6TiQOvZ.js"), "./frontend-landing-page/template-default/components/form/Input.tsx": () => import("./assets/Input-PD2J1uiJ.js"), "./frontend-landing-page/template-default/components/form/InputError.tsx": () => import("./assets/InputError-CTfaneU7.js"), "./frontend-landing-page/template-default/layout/LandingPageLayout.tsx": () => import("./assets/LandingPageLayout-Cs_JPAnZ.js"), "./frontend-landing-page/template-default/layout/parts/LandingFooter.tsx": () => import("./assets/LandingFooter-D-xnuXAk.js"), "./frontend-landing-page/template-default/layout/parts/LandingNavbar.tsx": () => import("./assets/LandingNavbar-AH_i4HqG.js"), "./frontend-landing-page/template-default/layout/parts/LandingTittleSection.tsx": () => import("./assets/LandingTittleSection-B-EtpfVD.js"), "./frontend-landing-page/template-default/pages/About/LandingAbout.tsx": () => import("./assets/LandingAbout-D66FShiI.js"), "./frontend-landing-page/template-default/pages/Authenticate/LandingAuthenticateLogin.tsx": () => import("./assets/LandingAuthenticateLogin-_CvYKVEE.js"), "./frontend-landing-page/template-default/pages/Authenticate/LandingAuthenticateRegister.tsx": () => import("./assets/LandingAuthenticateRegister-Dh-EF7Yg.js"), "./frontend-landing-page/template-default/pages/Contact/LandingContact.tsx": () => import("./assets/LandingContact-zLraThVD.js"), "./frontend-landing-page/template-default/pages/Features/LandingFeatures.tsx": () => import("./assets/LandingFeatures-BYJfXSDj.js"), "./frontend-landing-page/template-default/pages/Home/LandingHome.tsx": () => import("./assets/LandingHome-BEf6cL67.js"), "./frontend-landing-page/template-default/pages/Integrations/LandingIntegrations.tsx": () => import("./assets/LandingIntegrations-CqZhRBqK.js"), "./frontend-landing-page/template-default/pages/Pricing/LandingPricing.tsx": () => import("./assets/LandingPricing--SowD8M8.js"), "./frontend-landing-page/template-default/pages/Subscribe/LandingSubscribe.tsx": () => import("./assets/LandingSubscribe-CdpcUQwM.js"), "./frontend-landing-page/template-default/pages/Subscribe/LandingSubscribePay.tsx": () => import("./assets/LandingSubscribePay-w7NrEQ_r.js"), "./frontend-portal/template-default/components/Button.tsx": () => import("./assets/Button-BYx2FSd4.js"), "./frontend-portal/template-default/components/Card.tsx": () => import("./assets/Card-DCFzm0x5.js"), "./frontend-portal/template-default/components/ChangeTheme.tsx": () => import("./assets/ChangeTheme-Bn5DuTPc.js"), "./frontend-portal/template-default/components/Div.tsx": () => import("./assets/Div-aCINAKI_.js"), "./frontend-portal/template-default/components/DropDown.tsx": () => import("./assets/DropDown-Dw9Zgntk.js"), "./frontend-portal/template-default/components/LanguageSwitcher.tsx": () => import("./assets/LanguageSwitcher-BmM1ZeYM.js"), "./frontend-portal/template-default/components/P.tsx": () => import("./assets/P--Khfw00L.js"), "./frontend-portal/template-default/components/Row.tsx": () => import("./assets/Row-CpYE0W9h.js"), "./frontend-portal/template-default/components/form/Input.tsx": () => import("./assets/Input-BLYT2enS.js"), "./frontend-portal/template-default/components/form/Label.tsx": () => import("./assets/Label-CO2rAZZX.js"), "./frontend-portal/template-default/layout/PortalLayout.tsx": () => import("./assets/PortalLayout-BQ8BOgTm.js"), "./frontend-portal/template-default/layout/parts/PortalFooter.tsx": () => import("./assets/PortalFooter-DBhnE7VI.js"), "./frontend-portal/template-default/layout/parts/PortalNavbar.tsx": () => import("./assets/PortalNavbar-DOgq6HvS.js"), "./frontend-portal/template-default/layout/parts/TittleAndBreadcrumb.tsx": () => import("./assets/TittleAndBreadcrumb-B04ioebb.js"), "./frontend-portal/template-default/pages/Invoices/PortalInvoices.tsx": () => import("./assets/PortalInvoices-HfmsVJ0C.js"), "./frontend-portal/template-default/pages/Profile/Parts/PortalProfileSidebar.tsx": () => import("./assets/PortalProfileSidebar-QYfD6VVc.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileConnectAccounts.tsx": () => import("./assets/PortalProfileConnectAccounts-zzQK0SO3.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileUpdateDetails.tsx": () => import("./assets/PortalProfileUpdateDetails-C2_IiNB7.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileUpdateNetworks.tsx": () => import("./assets/PortalProfileUpdateNetworks-ODFmw1GB.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileUpdatePassword.tsx": () => import("./assets/PortalProfileUpdatePassword-mypRTi6g.js"), "./frontend-portal/template-default/pages/Settings/PortalSettings.tsx": () => import("./assets/PortalSettings-BElgBdQq.js"), "./frontend-portal/template-default/pages/VirtualAirlines/PortalVirtualAirlines.tsx": () => import("./assets/PortalVirtualAirlines-B5C7QBmF.js"), "./frontend-private/default-template/hooks/useTemplateSettings.tsx": () => import("./assets/useTemplateSettings-B6Ycpyl0.js"), "./frontend-private/default-template/layout/DashbaordPrivateLayout.tsx": () => import("./assets/DashbaordPrivateLayout-Rnmiwitv.js"), "./frontend-private/default-template/layout/DefaultLayout.tsx": () => import("./assets/DefaultLayout-Dg5rNnne.js"), "./frontend-private/default-template/layout/parts/Footer.tsx": () => import("./assets/Footer-5Le6GkAo.js"), "./frontend-private/default-template/layout/parts/Navbar.tsx": () => import("./assets/Navbar-BON2O-IC.js"), "./frontend-private/default-template/layout/parts/Sidebar.tsx": () => import("./assets/Sidebar-Bg7GBzwR.js"), "./frontend-private/default-template/layout/settings/TemplateSettings.tsx": () => import("./assets/TemplateSettings-B4lfXDH4.js"), "./frontend-private/default-template/pages/Dashboard/PrivateDashboard.tsx": () => import("./assets/PrivateDashboard-qR2MVC5T.js"), "./frontend-public/template-default/components/form/Button.tsx": () => import("./assets/Button-DJ5lx1RR.js"), "./frontend-public/template-default/components/form/Input.tsx": () => import("./assets/Input-BZxr3GwB.js"), "./frontend-public/template-default/components/form/InputError.tsx": () => import("./assets/InputError-Db5CZtVp.js"), "./frontend-public/template-default/layout/DefaultLayout.tsx": () => import("./assets/DefaultLayout-CskabVQs.js"), "./frontend-public/template-default/layout/PublicPageLayout.tsx": () => import("./assets/PublicPageLayout-DEz7MXDA.js"), "./frontend-public/template-default/layout/parts/PublicFooter.tsx": () => import("./assets/PublicFooter-Cs7C5yJb.js"), "./frontend-public/template-default/layout/parts/PublicNavbar.tsx": () => import("./assets/PublicNavbar-8lfJSopR.js"), "./frontend-public/template-default/layout/settings/TemplateSettings.tsx": () => import("./assets/TemplateSettings-egI0i6DB.js"), "./frontend-public/template-default/pages/Auth/Login.tsx": () => import("./assets/Login-ueYBZGED.js"), "./frontend-public/template-default/pages/Blog/PublicBlog.tsx": () => import("./assets/PublicBlog-CkciLupG.js"), "./frontend-public/template-default/pages/Home/PublicHome.tsx": () => import("./assets/PublicHome-DhfYh-be.js"), "./shared/components/CurrencySwitcher.tsx": () => import("./assets/CurrencySwitcher-Difcr0O7.js"), "./shared/components/LanguageSwitcher.tsx": () => import("./assets/LanguageSwitcher-CVv6azVH.js"), "./shared/components/LoadingOverlay.tsx": () => import("./assets/LoadingOverlay-DZnlEpZi.js"), "./shared/components/ToastManager.tsx": () => import("./assets/ToastManager-BSVcj1SV.js"), "./shared/components/ToastProvider.tsx": () => import("./assets/ToastProvider-C8U_5wYq.js"), "./shared/components/form/Button.tsx": () => import("./assets/Button-BtO3Wh-T.js"), "./shared/components/form/Input.tsx": () => import("./assets/Input-w5O8D7Jb.js"), "./shared/components/form/InputError.tsx": () => import("./assets/InputError-DGdIO6wN.js"), "./shared/components/form/RequiredAsteristic.tsx": () => import("./assets/RequiredAsteristic-Cm1U2gpX.js"), "./shared/components/form/Select.tsx": () => import("./assets/Select-V4bBbPbC.js"), "./shared/components/paymentGateway/StripeForm.tsx": () => import("./assets/StripeForm-DzE279Eg.js"), "./shared/context/CurrencyContext.tsx": () => Promise.resolve().then(() => CurrencyContext$1), "./shared/hooks/useCurrency.tsx": () => import("./assets/useCurrency-CWqNCApD.js"), "./shared/hooks/useDarkMode.tsx": () => import("./assets/useDarkMode-DW9zJM-O.js"), "./shared/hooks/useDeviceDetect.tsx": () => import("./assets/useDeviceDetect-BMZuEs7G.js"), "./shared/hooks/useLocalTime.tsx": () => import("./assets/useLocalTime-Dp6N5xXj.js"), "./shared/provider/CurrencyProvider.tsx": () => Promise.resolve().then(() => CurrencyProvider$1), "./shared/provider/StripeProvicer.tsx": () => import("./assets/StripeProvicer-BI7cO2rR.js") });
      return resolvePageComponent(`./${name}.tsx`, pages);
    },
    setup: ({ App, props }) => {
      global.i18n = i18n;
      return /* @__PURE__ */ jsx(CurrencyProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) });
    }
  });
});
const ssr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  $e as $,
  CurrencyProvider$2 as C,
  T,
  Ye as Y,
  cssConfig as a,
  CurrencyContext as b,
  ce2 as c,
  CurrencyContext$1 as d,
  CurrencyProvider$1 as e,
  me as m,
  q,
  resolvePageComponent as r,
  ssr as s,
  useFrontend as u,
  ve as v
};

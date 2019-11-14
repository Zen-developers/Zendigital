(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([[38], {
    1187: function(e, t, n) {
        "use strict";
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        ;
        var a = n(0)
          , s = n(7);
        function i(e, t) {
            var n = function(e) {
                return "changedTouches"in e ? {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                } : {
                    x: e.clientX,
                    y: e.clientY
                }
            }(e)
              , o = n.x
              , a = n.y
              , s = t.x - o
              , i = t.y - a
              , r = Math.abs(s)
              , l = Math.abs(i)
              , p = Date.now() - t.start;
            return {
                deltaX: s,
                deltaY: i,
                absX: r,
                absY: l,
                velocity: Math.sqrt(r * r + l * l) / p
            }
        }
        var r = function(e) {
            function t(n, o) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, e.call(this, n, o));
                return a.eventStart = a.eventStart.bind(a),
                a.eventMove = a.eventMove.bind(a),
                a.eventEnd = a.eventEnd.bind(a),
                a.mouseDown = a.mouseDown.bind(a),
                a.mouseMove = a.mouseMove.bind(a),
                a.mouseUp = a.mouseUp.bind(a),
                a.cleanupMouseListeners = a.cleanupMouseListeners.bind(a),
                a.setupMouseListeners = a.setupMouseListeners.bind(a),
                a
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            t.prototype.componentWillMount = function() {
                this.swipeable = {
                    x: null,
                    y: null,
                    swiping: !1,
                    start: 0
                }
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                e.disabled !== this.props.disabled && (this.cleanupMouseListeners(),
                this.swipeable = {
                    x: null,
                    y: null,
                    swiping: !1,
                    start: 0
                })
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.cleanupMouseListeners()
            }
            ,
            t.prototype.setupMouseListeners = function() {
                document.addEventListener("mousemove", this.mouseMove),
                document.addEventListener("mouseup", this.mouseUp)
            }
            ,
            t.prototype.cleanupMouseListeners = function() {
                document.removeEventListener("mousemove", this.mouseMove),
                document.removeEventListener("mouseup", this.mouseUp)
            }
            ,
            t.prototype.mouseDown = function(e) {
                this.props.trackMouse && "mousedown" === e.type && ("function" == typeof this.props.onMouseDown && this.props.onMouseDown(e),
                this.setupMouseListeners(),
                this.eventStart(e))
            }
            ,
            t.prototype.mouseMove = function(e) {
                this.eventMove(e)
            }
            ,
            t.prototype.mouseUp = function(e) {
                this.cleanupMouseListeners(),
                this.eventEnd(e)
            }
            ,
            t.prototype.eventStart = function(e) {
                if (!(e.touches && e.touches.length > 1)) {
                    var t = function(e) {
                        return "touches"in e ? {
                            x: e.touches[0].clientX,
                            y: e.touches[0].clientY
                        } : {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }(e)
                      , n = t.x
                      , o = t.y;
                    this.props.stopPropagation && e.stopPropagation(),
                    this.swipeable = {
                        start: Date.now(),
                        x: n,
                        y: o,
                        swiping: !1
                    }
                }
            }
            ,
            t.prototype.eventMove = function(e) {
                var t = this.props
                  , n = t.stopPropagation
                  , o = t.delta
                  , a = t.onSwiping
                  , s = t.onSwipingLeft
                  , r = t.onSwipedLeft
                  , l = t.onSwipingRight
                  , p = t.onSwipedRight
                  , c = t.onSwipingUp
                  , d = t.onSwipedUp
                  , u = t.onSwipingDown
                  , b = t.onSwipedDown
                  , m = t.preventDefaultTouchmoveEvent;
                if (this.swipeable.x && this.swipeable.y && !(e.touches && e.touches.length > 1)) {
                    var f = i(e, this.swipeable);
                    if (!(f.absX < o && f.absY < o) || this.swipeable.swiping) {
                        n && e.stopPropagation(),
                        a && a(e, f.deltaX, f.deltaY, f.absX, f.absY, f.velocity);
                        var h = !1;
                        f.absX > f.absY ? f.deltaX > 0 ? (s || r) && (s && s(e, f.absX),
                        h = !0) : (l || p) && (l && l(e, f.absX),
                        h = !0) : f.deltaY > 0 ? (c || d) && (c && c(e, f.absY),
                        h = !0) : (u || b) && (u && u(e, f.absY),
                        h = !0),
                        this.swipeable.swiping = !0,
                        h && m && e.preventDefault()
                    }
                }
            }
            ,
            t.prototype.eventEnd = function(e) {
                var t = this.props
                  , n = t.stopPropagation
                  , o = t.flickThreshold
                  , a = t.onSwiped
                  , s = t.onSwipedLeft
                  , r = t.onSwipedRight
                  , l = t.onSwipedUp
                  , p = t.onSwipedDown
                  , c = t.onTap;
                if (this.swipeable.swiping) {
                    var d = i(e, this.swipeable);
                    n && e.stopPropagation();
                    var u = d.velocity > o;
                    a && a(e, d.deltaX, d.deltaY, u, d.velocity),
                    d.absX > d.absY ? d.deltaX > 0 ? s && s(e, d.deltaX, u) : r && r(e, d.deltaX, u) : d.deltaY > 0 ? l && l(e, d.deltaY, u) : p && p(e, d.deltaY, u)
                } else
                    c && c(e);
                this.swipeable = {
                    x: null,
                    y: null,
                    swiping: !1,
                    start: 0
                }
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.disabled
                  , n = e.innerRef
                  , s = o({}, this.props);
                return t || (s.onTouchStart = this.eventStart,
                s.onTouchMove = this.eventMove,
                s.onTouchEnd = this.eventEnd,
                s.onMouseDown = this.mouseDown),
                n && (s.ref = n),
                delete s.onSwiped,
                delete s.onSwiping,
                delete s.onSwipingUp,
                delete s.onSwipingRight,
                delete s.onSwipingDown,
                delete s.onSwipingLeft,
                delete s.onSwipedUp,
                delete s.onSwipedRight,
                delete s.onSwipedDown,
                delete s.onSwipedLeft,
                delete s.onTap,
                delete s.flickThreshold,
                delete s.delta,
                delete s.preventDefaultTouchmoveEvent,
                delete s.stopPropagation,
                delete s.nodeName,
                delete s.children,
                delete s.trackMouse,
                delete s.disabled,
                delete s.innerRef,
                a.createElement(this.props.nodeName, s, this.props.children)
            }
            ,
            t
        }(a.Component);
        r.propTypes = {
            onSwiped: s.func,
            onSwiping: s.func,
            onSwipingUp: s.func,
            onSwipingRight: s.func,
            onSwipingDown: s.func,
            onSwipingLeft: s.func,
            onSwipedUp: s.func,
            onSwipedRight: s.func,
            onSwipedDown: s.func,
            onSwipedLeft: s.func,
            onTap: s.func,
            flickThreshold: s.number,
            delta: s.number,
            preventDefaultTouchmoveEvent: s.bool,
            stopPropagation: s.bool,
            nodeName: s.string,
            trackMouse: s.bool,
            disabled: s.bool,
            innerRef: s.func,
            children: s.node
        },
        r.defaultProps = {
            flickThreshold: .6,
            delta: 10,
            preventDefaultTouchmoveEvent: !1,
            stopPropagation: !1,
            nodeName: "div",
            disabled: !1
        },
        e.exports = r
    },
    1188: function(e, t, n) {
        "use strict";
        var o = n(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Styles = void 0;
        var a = o(n(13))
          , s = o(n(0));
        const i = ({styles: e})=>s.default.createElement(a.default, {
            styleId: "3938416393",
            css: [".navbar--open,.navbar{width:100%;}", `@media only screen and (min-width:650px){.navbar--open,.navbar{width:${e("componentSettings.navbarDesktopWidth")};}}`, `.navbar{position:fixed;top:0;left:0;z-index:250;background-color:${e("colors.black")};-webkit-transition:-webkit-transform 275ms cubic-bezier(0.5,0.08,0,1);-moz-transition:-moz-transform 275ms cubic-bezier(0.5,0.08,0,1);-o-transition:-o-transform 275ms cubic-bezier(0.5,0.08,0,1);-ms-transition:-ms-transform 275ms cubic-bezier(0.5,0.08,0,1);-webkit-transition:-webkit-transform 275ms cubic-bezier(0.5,0.08,0,1);-webkit-transition:transform 275ms cubic-bezier(0.5,0.08,0,1);transition:transform 275ms cubic-bezier(0.5,0.08,0,1);}`, ".navbar:lang(ar){right:0;left:auto;}", ".navbar .navbar__body--wrap{width:100%;height:100vh;min-height:100vh;overflow:scroll;-webkit-overflow-scrolling:touch;}", `@media only screen and (min-width:650px){.navbar .navbar__body--wrap{width:${e("componentSettings.navbarDesktopWidth")};}}`, ".navbar .navbar__body--wrap::-webkit-scrollbar{width:0;height:0;}", ".navbar .navbar__body--wrap::-webkit-scrollbar-thumb{background:transparent;border-radius:0;}", ".navbar .navbar__body--wrap::-webkit-scrollbar-track{background:transparent;}", ".navbar .navbar__body--wrap body{-webkit-scrollbar-face-color:transparent;-moz-scrollbar-face-color:transparent;-ms-scrollbar-face-color:transparent;scrollbar-face-color:transparent;-webkit-scrollbar-track-color:transparent;-moz-scrollbar-track-color:transparent;-ms-scrollbar-track-color:transparent;scrollbar-track-color:transparent;}", `.navbar__body{background-color:${e("colors.white")};}`, `.navbar__body__header{height:${e("componentSettings.headerHeight")};background-color:${e("colors.white")};}`, ".navbar__body__header .icon-close__wrapper{cursor:pointer;}", ".navbar a{-webkit-text-decoration:none;text-decoration:none;display:block;}", ".navbar--open{-webkit-transform:translate(0);-moz-transform:translate(0);-o-transform:translate(0);-ms-transform:translate(0);-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);}", ".navbar--closed{-webkit-transform:translate(-100%,0);-moz-transform:translate(-100%,0);-o-transform:translate(-100%,0);-ms-transform:translate(-100%,0);-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0);}", ".navbar--closed:lang(ar){-webkit-transform:translate(100%,0);-moz-transform:translate(100%,0);-o-transform:translate(100%,0);-ms-transform:translate(100%,0);-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}", ".navbar .icon.icon-close{width:16px;}", `.overlay{position:fixed;top:0;left:0;bottom:0;right:0;background-color:${e("colors.black")};opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";-webkit-filter:alpha(opacity=0);filter:alpha(opacity=0);visibility:hidden;cursor:pointer;-webkit-transition:opacity 200ms ease,visibility 0ms linear 200ms;-moz-transition:opacity 200ms ease,visibility 0ms linear 200ms;-o-transition:opacity 200ms ease,visibility 0ms linear 200ms;-ms-transition:opacity 200ms ease,visibility 0ms linear 200ms;-webkit-transition:opacity 200ms ease,visibility 0ms linear 200ms;transition:opacity 200ms ease,visibility 0ms linear 200ms;z-index:200;}`, `@media only screen and (min-width:650px){.overlay-show{visibility:visible;opacity:0.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";-webkit-filter:alpha(opacity=20);filter:alpha(opacity=20);background-color:${e("colors.black")};-webkit-transition-delay:0ms;-moz-transition-delay:0ms;-o-transition-delay:0ms;-ms-transition-delay:0ms;-webkit-transition-delay:0ms;transition-delay:0ms;}}`, ".mobile-nav-hotspot{position:fixed;top:0;left:0;z-index:300;width:15px;height:100vh;}", "@media only screen and (min-width:650px){.mobile-nav-hotspot{display:none;}}"],
            dynamic: [e("componentSettings.navbarDesktopWidth"), e("colors.black"), e("componentSettings.navbarDesktopWidth"), e("colors.white"), e("componentSettings.headerHeight"), e("colors.white"), e("colors.black"), e("colors.black")]
        });
        t.Styles = i;
        var r = i;
        t.default = r
    },
    268: function(e, t, n) {
        "use strict";
        var o = n(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = o(n(0))
          , s = o(n(1187))
          , i = o(n(6))
          , r = o(n(237))
          , l = o(n(53))
          , p = n(31)
          , c = n(257)
          , d = o(n(1188));
        const {closeSvg: u, closeBtnWhiteSvg: b} = l.default.Icons;
        var m = class extends a.default.Component {
            constructor() {
                super(...arguments),
                this.closeNav = ()=>{
                    const {setNavClose: e} = this.props;
                    (0,
                    p.trackEvent)({
                        action: p.EVENT_ACTIONS.CLICK,
                        category: "NavCloseMenuButton"
                    }),
                    e()
                }
                ,
                this.handleSwipe = e=>this.closeNav()
            }
            static get defaultProps() {
                return {
                    filteredTier2SiteLinks: [],
                    navOpen: !1,
                    isMobileDevice: !1
                }
            }
            shouldComponentUpdate(e, t) {
                const {state: n, props: o} = this;
                return !(0,
                r.default)(n, t) || !(0,
                r.default)(o, e)
            }
            navClasses() {
                const {props: {navOpen: e}} = this;
                return (0,
                i.default)({
                    navbar: !0,
                    "navbar--open": e,
                    "navbar--closed": !e
                })
            }
            componentWillReceiveProps(e) {
                const {props: {navOpen: t}} = this;
                t !== e.navOpen && (e.navOpen ? (0,
                c.stopScroll)() : (0,
                c.startScroll)())
            }
            render() {
                const {props: {navOpen: e, styles: t, error: n, children: o, footer: r, isMobileDevice: l, currentSite: {name: p}}, handleSwipe: c, closeNav: m} = this;
                if (n)
                    return a.default.createElement("div", null);
                const f = a.default.createElement("nav", {
                    className: (0,
                    i.default)(["navbar__body--wrap", "p-b-4-xs", "p-b-5-m"]),
                    ref: e=>{
                        this.navRef = e
                    }
                }, a.default.createElement("div", {
                    className: "mobile-nav-hotspot"
                }), a.default.createElement("div", {
                    className: (0,
                    i.default)(["navbar__body__header", "dsp-flex-xs", "p-l-4-xs", "p-l-5-m"])
                }, a.default.createElement("div", {
                    className: (0,
                    i.default)(["icon-close__wrapper", "m-b-aut-xs", "m-t-aut-xs", !e && "dsp-none-xs"]),
                    onClick: m
                }, a.default.createElement("img", {
                    className: (0,
                    i.default)(["icon", "icon-close", "dsp-block-xs"]),
                    src: "video" === p ? b : u
                }))), o, r);
                return a.default.createElement("div", {
                    className: this.navClasses()
                }, l ? a.default.createElement(s.default, {
                    onSwipedLeft: c
                }, f) : f, a.default.createElement(d.default, {
                    styles: t
                }))
            }
        }
        ;
        t.default = m
    }
}]);

/*
 dhtmlxScheduler v.4.3.0 Professional Evaluation

 This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
Scheduler.plugin(function (e) {
    !function () {
        var t = e.dhtmlXTooltip = e.tooltip = {};
        t.config = {
            className: "dhtmlXTooltip tooltip",
            timeout_to_display: 50,
            timeout_to_hide: 50,
            delta_x: 15,
            delta_y: -20
        }, t.tooltip = document.createElement("div"), t.tooltip.className = t.config.className, t.show = function (a, n) {
            if (!e.config.touch || e.config.touch_tooltip) {
                var i = t, r = this.tooltip, s = r.style;
                i.tooltip.className = i.config.className;
                var d = this.position(a), _ = a.target || a.srcElement;
                if (!this.isTooltip(_)) {
                    var o = d.x + (i.config.delta_x || 0), l = d.y - (i.config.delta_y || 0);
                    s.visibility = "hidden", s.removeAttribute ? (s.removeAttribute("right"), s.removeAttribute("bottom")) : (s.removeProperty("right"), s.removeProperty("bottom")), s.left = "0", s.top = "0", this.tooltip.innerHTML = n, document.body.appendChild(this.tooltip);
                    var c = this.tooltip.offsetWidth, h = this.tooltip.offsetHeight;
                    document.body.offsetWidth - o - c < 0 ? (s.removeAttribute ? s.removeAttribute("left") : s.removeProperty("left"), s.right = document.body.offsetWidth - o + 2 * (i.config.delta_x || 0) + "px") : s.left = 0 > o ? d.x + Math.abs(i.config.delta_x || 0) + "px" : o + "px", document.body.offsetHeight - l - h < 0 ? (s.removeAttribute ? s.removeAttribute("top") : s.removeProperty("top"), s.bottom = document.body.offsetHeight - l - 2 * (i.config.delta_y || 0) + "px") : s.top = 0 > l ? d.y + Math.abs(i.config.delta_y || 0) + "px" : l + "px", s.visibility = "visible", this.tooltip.onmouseleave = function (t) {
                        t = t || window.event;
                        for (var a = e.dhtmlXTooltip, n = t.relatedTarget; n != e._obj && n;)n = n.parentNode;
                        n != e._obj && a.delay(a.hide, a, [], a.config.timeout_to_hide)
                    }, e.callEvent("onTooltipDisplayed", [this.tooltip, this.tooltip.event_id])
                }
            }
        }, t._clearTimeout = function () {
            this.tooltip._timeout_id && window.clearTimeout(this.tooltip._timeout_id)
        }, t.hide = function () {
            if (this.tooltip.parentNode) {
                var t = this.tooltip.event_id;
                this.tooltip.event_id = null, this.tooltip.onmouseleave = null, this.tooltip.parentNode.removeChild(this.tooltip), e.callEvent("onAfterTooltip", [t])
            }
            this._clearTimeout()
        }, t.delay = function (e, t, a, n) {
            this._clearTimeout(), this.tooltip._timeout_id = setTimeout(function () {
                var n = e.apply(t, a);
                return e = t = a = null, n
            }, n || this.config.timeout_to_display)
        }, t.isTooltip = function (e) {
            var t = !1;
            for ("dhtmlXTooltip" == e.className.split(" ")[0]; e && !t;)t = e.className == this.tooltip.className, e = e.parentNode;
            return t
        }, t.position = function (e) {
            if (e = e || window.event, e.pageX || e.pageY)return {x: e.pageX, y: e.pageY};
            var t = window._isIE && "BackCompat" != document.compatMode ? document.documentElement : document.body;
            return {x: e.clientX + t.scrollLeft - t.clientLeft, y: e.clientY + t.scrollTop - t.clientTop}
        }, e.attachEvent("onMouseMove", function (a, n) {
            var i = window.event || n, r = i.target || i.srcElement, s = t, d = s.isTooltip(r), _ = s.isTooltipTarget && s.isTooltipTarget(r);
            if (a || d || _) {
                var o;
                if (a || s.tooltip.event_id) {
                    var l = e.getEvent(a) || e.getEvent(s.tooltip.event_id);
                    if (!l)return;
                    if (s.tooltip.event_id = l.id, o = e.templates.tooltip_text(l.start_date, l.end_date, l), !o)return s.hide()
                }
                _ && (o = "");
                var c;
                if (_isIE) {
                    c = {
                        pageX: void 0,
                        pageY: void 0,
                        clientX: void 0,
                        clientY: void 0,
                        target: void 0,
                        srcElement: void 0
                    };
                    for (var h in c)c[h] = i[h]
                }
                if (!e.callEvent("onBeforeTooltip", [a]) || !o)return;
                s.delay(s.show, s, [c || i, o])
            } else s.delay(s.hide, s, [], s.config.timeout_to_hide)
        }), e.attachEvent("onBeforeDrag", function () {
            return t.hide(), !0
        }), e.attachEvent("onEventDeleted", function () {
            return t.hide(), !0
        }), e.templates.tooltip_date_format = e.date.date_to_str("%Y-%m-%d %H:%i"), e.templates.tooltip_text = function (t, a, n) {
            return "<img src='src/images/masterFoto.png'>" + "<br>" +
                "<span>Женская стрижка</span>" +
                "<h3>10:20</h3>" +
                "<h3>10:55</h3>" +
                "<span>Клиент:<br>Наталья Самойлова</span>"
        }
    }()
});
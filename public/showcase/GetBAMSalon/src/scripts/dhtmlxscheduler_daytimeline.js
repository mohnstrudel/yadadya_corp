/*
 dhtmlxScheduler v.4.3.0 Professional

 This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
!function () {
    var e = scheduler.createTimelineView;
    scheduler.createTimelineView = function (t) {
        function i() {
            var e = new Date(scheduler.getState().date), i = scheduler.date[h + "_start"](e);
            i = scheduler.date.date_part(i);
            var a = [], s = scheduler.matrix[h];
            s.y_unit = a, s.order = {};
            for (var n = 0; n < t.days; n++)a.push({
                key: +i,
                label: i
            }), s.order[s.y_unit[n].key] = n, i = scheduler.date.add(i, 1, "day")
        }

        function a(e) {
            var t = {};
            for (var i in e)t[i] = e[i];
            return t
        }

        function s(e, t) {
            t.setFullYear(e.getFullYear()), t.setMonth(e.getMonth()), t.setDate(e.getDate())
        }

        function n(e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var a = d(e[i]);
                if (scheduler.isOneDayEvent(a))o(a), t.push(a); else {
                    for (var s = new Date(Math.min(+a.end_date, +scheduler._max_date)), n = new Date(Math.max(+a.start_date, +scheduler._min_date)), l = []; +s > +n;) {
                        var h = d(a);
                        h.start_date = n, h.end_date = new Date(Math.min(+_(h.start_date), +s)), n = _(n), o(h), t.push(h), l.push(h)
                    }
                    r(l, a)
                }
            }
            return t
        }

        function r(e, t) {
            for (var i = !1, a = !1, s = 0, n = e.length; n > s; s++) {
                var r = e[s];
                i = +r._w_start_date == +t.start_date, a = +r._w_end_date == +t.end_date, r._no_resize_start = r._no_resize_end = !0, i && (r._no_resize_start = !1), a && (r._no_resize_end = !1)
            }
        }

        function d(e) {
            var t = scheduler.getEvent(e.event_pid);
            return t && t.isPrototypeOf(e) ? (e = scheduler._copy_event(e), delete e.event_length, delete e.event_pid, delete e.rec_pattern, delete e.rec_type) : e = scheduler._lame_clone(e), e
        }

        function o(e) {
            if (!e._w_start_date || !e._w_end_date) {
                var t = scheduler.date, i = e._w_start_date = new Date(e.start_date), a = e._w_end_date = new Date(e.end_date);
                e[c] = +t.date_part(e.start_date), e._count || (e._count = 1), e._sorder || (e._sorder = 0);
                var s = a - i;
                e.start_date = new Date(scheduler._min_date), l(i, e.start_date), e.end_date = new Date(+e.start_date + s)
            }
        }

        function l(e, t) {
            t.setMinutes(e.getMinutes()), t.setHours(e.getHours())
        }

        function _(e) {
            var t = scheduler.date.add(e, 1, "day");
            return t = scheduler.date.date_part(t)
        }

        if ("days" != t.render)return void e.apply(this, arguments);
        var h = t.name, c = t.y_property = "timeline-week" + h;
        t.y_unit = [], t.render = "bar", t.days = t.days || 7, e.call(this, t), scheduler.templates[h + "_scalex_class"] = function () {
        }, scheduler.templates[h + "_scaley_class"] = function () {
        }, scheduler.templates[h + "_scale_label"] = function (e, t) {
            return scheduler.templates.day_date(t)
        }, scheduler.date[h + "_start"] = function (e) {
            return e = scheduler.date.week_start(e), e = scheduler.date.add(e, t.x_step * t.x_start, t.x_unit)
        }, scheduler.date["add_" + h] = function (e, i) {
            return scheduler.date.add(e, i * t.days, "day")
        };
        var u = scheduler._renderMatrix;
        scheduler._renderMatrix = function (e) {
            e && i(), u.apply(this, arguments)
        };
        var v = scheduler.checkCollision;
        scheduler.checkCollision = function (e) {
            if (e[c]) {
                var e = a(e);
                delete e[c]
            }
            return v.apply(scheduler, [e])
        }, scheduler.attachEvent("onBeforeDrag", function (e, t, i) {
            var a = i.target || i.srcElement, s = a.className || "";
            if ("resize" == t)scheduler._w_line_drag_from_start = s.indexOf("dhx_event_resize_end") < 0 ? !0 : !1; else if ("move" == t && s.indexOf("no_drag_move") >= 0)return !1;
            return !0
        });
        var f = scheduler["mouse_" + h];
        scheduler["mouse_" + h] = function (e) {
            var t;
            if (this._drag_event && (t = this._drag_event._move_delta), void 0 === t && "move" == scheduler._drag_mode) {
                var i = scheduler.matrix[this._mode], a = {y: e.y};
                scheduler._resolve_timeline_section(i, a);
                var s = e.x - i.dx, n = new Date(a.section);
                l(scheduler._timeline_drag_date(i, s), n);
                var r = scheduler._drag_event, d = this.getEvent(this._drag_id);
                r._move_delta = (d.start_date - n) / 6e4, this.config.preserve_length && e._ignores && (r._move_delta = this._get_real_event_length(d.start_date, n, i), r._event_length = this._get_real_event_length(d.start_date, d.end_date, i))
            }
            var e = f.apply(scheduler, arguments);
            if (scheduler._drag_mode && "move" != scheduler._drag_mode) {
                var o = null;
                o = new Date(scheduler._drag_event && scheduler._drag_event["timeline-week" + h] ? scheduler._drag_event["timeline-week" + h] : e.section), e.y += Math.round((o - scheduler.date.date_part(new Date(scheduler._min_date))) / (6e4 * this.config.time_step)), "resize" == scheduler._drag_mode && (e.resize_from_start = scheduler._w_line_drag_from_start)
            } else if (scheduler._drag_event) {
                var _ = Math.floor(Math.abs(e.y / (1440 / scheduler.config.time_step)));
                _ *= e.y > 0 ? 1 : -1, e.y = e.y % (1440 / scheduler.config.time_step);
                var c = scheduler.date.date_part(new Date(scheduler._min_date));
                c.valueOf() != new Date(e.section).valueOf() && (e.x = Math.floor((e.section - c) / 864e5), e.x += _)
            }
            return e
        }, scheduler.attachEvent("onEventCreated", function (e) {
            return scheduler._events[e] && delete scheduler._events[e][c], !0
        }), scheduler.attachEvent("onBeforeEventChanged", function (e) {
            return scheduler._events[e.id] && delete scheduler._events[e.id][c], !0
        });
        var g = scheduler.render_view_data;
        scheduler.render_view_data = function (e, t) {
            return this._mode == h && e && (e = n(e)), g.apply(scheduler, [e, t])
        };
        var m = scheduler.get_visible_events;
        scheduler.get_visible_events = function () {
            if (this._mode == h) {
                scheduler._max_date = scheduler.date.date_part(scheduler.date.add(scheduler._min_date, t.days, "day"));
                var e = m.apply(scheduler, arguments);
                return n(e)
            }
            return m.apply(scheduler, arguments)
        };
        var p = scheduler.addEventNow;
        scheduler.addEventNow = function (e) {
            if (scheduler.getState().mode == h)if (e[c]) {
                var t = new Date(e[c]);
                s(t, e.start_date), s(t, e.end_date)
            } else {
                var i = new Date(e.start_date);
                e[c] = +scheduler.date.date_part(i)
            }
            return p.apply(scheduler, arguments)
        };
        var x = scheduler._render_marked_timespan;
        scheduler._render_marked_timespan = function () {
            return scheduler._mode != h ? x.apply(this, arguments) : void 0
        }
    }
}();
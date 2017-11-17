/*
 dhtmlxScheduler v.4.3.0 Professional

 This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

 (c) Dinamenta, UAB.
 */
Scheduler.plugin(function (e) {
    e._temp_matrix_scope = function () {
        function t() {
            for (var t = e.get_visible_events(), a = [], n = 0; n < this.y_unit.length; n++)a[n] = [];
            a[i] || (a[i] = []);
            for (var n = 0; n < t.length; n++) {
                for (var i = this.order[t[n][this.y_property]], r = 0; this._trace_x[r + 1] && t[n].start_date >= this._trace_x[r + 1];)r++;
                for (; this._trace_x[r] && t[n].end_date > this._trace_x[r];)a[i][r] || (a[i][r] = []), a[i][r].push(t[n]), r++
            }
            return a
        }

        function a(t, a, n) {
            var i = 0, r = n._step, s = n.round_position, d = 0, _ = a ? t.end_date : t.start_date;
            _.valueOf() > e._max_date.valueOf() && (_ = e._max_date);
            var o = _ - e._min_date_timeline;
            if (o > 0) {
                var l = e._get_date_index(n, _);
                e._ignores[l] && (s = !0);
                for (var c = 0; l > c; c++)i += e._cols[c];
                var h = e.date.add(e._min_date_timeline, e.matrix[e._mode].x_step * l, e.matrix[e._mode].x_unit);
                s ? +_ > +h && a && (d = e._cols[l]) : (o = _ - h, n.first_hour || n.last_hour ? (o -= n._start_correction, 0 > o && (o = 0), d = Math.round(o / r), d > e._cols[l] && (d = e._cols[l])) : d = Math.round(o / r))
            }
            return i += a ? 0 === o || s ? d - 14 : d - 12 : d + 1
        }

        function n(t, a) {
            var n = e._get_date_index(this, t), i = this._trace_x[n];
            return a && +t != +this._trace_x[n] && (i = this._trace_x[n + 1] ? this._trace_x[n + 1] : e.date.add(this._trace_x[n], this.x_step, this.x_unit)), new Date(i)
        }

        function i(t) {
            var a = "";
            if (t && "cell" != this.render) {
                t.sort(this.sort || function (e, t) {
                    return e.start_date.valueOf() == t.start_date.valueOf() ? e.id > t.id ? 1 : -1 : e.start_date > t.start_date ? 1 : -1
                });
                for (var i = [], r = t.length, s = 0; r > s; s++) {
                    var d = t[s];
                    d._inner = !1;
                    var _ = this.round_position ? n.apply(this, [d.start_date, !1]) : d.start_date;
                    for (this.round_position ? n.apply(this, [d.end_date, !0]) : d.end_date; i.length;) {
                        var o = i[i.length - 1];
                        if (!(o.end_date.valueOf() <= _.valueOf()))break;
                        i.splice(i.length - 1, 1)
                    }
                    for (var l = !1, c = 0; c < i.length; c++) {
                        var h = i[c];
                        if (h.end_date.valueOf() <= _.valueOf()) {
                            l = !0, d._sorder = h._sorder, i.splice(c, 1), d._inner = !0;
                            break
                        }
                    }
                    if (i.length && (i[i.length - 1]._inner = !0), !l)if (i.length)if (i.length <= i[i.length - 1]._sorder) {
                        if (i[i.length - 1]._sorder)for (var u = 0; u < i.length; u++) {
                            for (var v = !1, f = 0; f < i.length; f++)if (i[f]._sorder == u) {
                                v = !0;
                                break
                            }
                            if (!v) {
                                d._sorder = u;
                                break
                            }
                        } else d._sorder = 0;
                        d._inner = !0
                    } else {
                        for (var g = i[0]._sorder, p = 1; p < i.length; p++)i[p]._sorder > g && (g = i[p]._sorder);
                        d._sorder = g + 1, d._inner = !1
                    } else d._sorder = 0;
                    i.push(d), i.length > (i.max_count || 0) ? (i.max_count = i.length, d._count = i.length) : d._count = d._count ? d._count : 1
                }
                for (var m = 0; m < t.length; m++)t[m]._count = i.max_count;
                for (var y = 0; r > y; y++)a += e.render_timeline_event.call(this, t[y], !1)
            }
            return a
        }

        function r(a) {
            var n = "<table style='table-layout:fixed;' cellspacing='0' cellpadding='0'>", r = [];
            if (e._load_mode && e._load(), "cell" == this.render)r = t.call(this); else for (var s = e.get_visible_events(), d = this.order, _ = 0; _ < s.length; _++) {
                var o = s[_], l = o[this.y_property], c = this.order[l];
                if (this.show_unassigned && !l) {
                    for (var h in d)if (d.hasOwnProperty(h)) {
                        c = d[h], r[c] || (r[c] = []);
                        var u = e._lame_copy({}, o);
                        u[this.y_property] = h, r[c].push(u)
                    }
                } else r[c] || (r[c] = []), r[c].push(o)
            }
            for (var v = 0, f = 0; f < e._cols.length; f++)v += e._cols[f];
            var g = new Date, p = e._cols.length - e._ignores_detected;
            g = (e.date.add(g, this.x_step * p, this.x_unit) - g - (this._start_correction + this._end_correction) * p) / v, this._step = g, this._summ = v;
            var m = e._colsS.heights = [], y = [];
            this._events_height = {}, this._section_height = {};
            for (var f = 0; f < this.y_unit.length; f++) {
                var x = this._logic(this.render, this.y_unit[f], this);
                e._merge(x, {height: this.dy}), this.section_autoheight && (this.y_unit.length * x.height < a.offsetHeight && (x.height = Math.max(x.height, Math.floor((a.offsetHeight - 1) / this.y_unit.length))), this._section_height[this.y_unit[f].key] = x.height), x.td_className || (x.td_className = "dhx_matrix_scell" + (e.templates[this.name + "_scaley_class"](this.y_unit[f].key, this.y_unit[f].label, this.y_unit[f]) ? " " + e.templates[this.name + "_scaley_class"](this.y_unit[f].key, this.y_unit[f].label, this.y_unit[f]) : "")), x.td_content || (x.td_content = e.templates[this.name + "_scale_label"](this.y_unit[f].key, this.y_unit[f].label, this.y_unit[f])), e._merge(x, {
                    tr_className: "",
                    style_height: "height:" + x.height + "px;",
                    style_width: "width:" + (this.dx - 1) + "px;",
                    summ_width: "width:" + v + "px;",
                    table_className: ""
                });
                var b = i.call(this, r[f]);
                if (this.fit_events) {
                    var w = this._events_height[this.y_unit[f].key] || 0;
                    x.height = w > x.height ? w : x.height, x.style_height = "height:" + x.height + "px;", this._section_height[this.y_unit[f].key] = x.height
                }
                if (n += "<tr class='" + x.tr_className + "' style='" + x.style_height + "'><td class='" + x.td_className + "' style='" + x.style_width + " height:" + (x.height - 1) + "px;'>" + x.td_content + "</td>", "cell" == this.render)for (var _ = 0; _ < e._cols.length; _++)n += e._ignores[_] ? "<td></td>" : "<td class='dhx_matrix_cell " + e.templates[this.name + "_cell_class"](r[f][_], this._trace_x[_], this.y_unit[f]) + "' style='width:" + (e._cols[_] - 1) + "px'><div style='width:" + (e._cols[_] - 1) + "px'>" + e.templates[this.name + "_cell_value"](r[f][_], this._trace_x[_], this.y_unit[f]) + "</div></td>";
                else {
                    n += "<td><div style='" + x.summ_width + " " + x.style_height + " position:relative;' class='dhx_matrix_line'>", n += b, n += "<table class='" + x.table_className + "' cellpadding='0' cellspacing='0' style='" + x.summ_width + " " + x.style_height + "' >";
                    for (var _ = 0; _ < e._cols.length; _++)n += e._ignores[_] ? "<td></td>" : "<td class='dhx_matrix_cell " + e.templates[this.name + "_cell_class"](r[f], this._trace_x[_], this.y_unit[f]) + "' style='width:" + (e._cols[_] - 1) + "px'><div style='width:" + (e._cols[_] - 1) + "px'></div></td>";
                    n += "</table>", n += "</div></td>"
                }
                n += "</tr>", y.push(x)
            }
            n += "</table>", this._matrix = r, a.innerHTML = n, e._rendered = [];
            for (var k = e._obj.getElementsByTagName("DIV"), f = 0; f < k.length; f++)k[f].getAttribute("event_id") && e._rendered.push(k[f]);
            this._scales = {};
            for (var E = a.firstChild.rows, D = null, f = 0, N = y.length; N > f; f++) {
                D = this.y_unit[f], m.push(y[f].height);
                var M = D.key, C = this._scales[M] = e._isRender("cell") ? E[f] : E[f].childNodes[1].getElementsByTagName("div")[0];
                e.callEvent("onScaleAdd", [C, M])
            }
        }

        function s(t) {
            var a = e._min_date, n = e._max_date;
            e._process_ignores(a, this.x_size, this.x_unit, this.x_step, t);
            for (var i = (this.x_size + (t ? e._ignores_detected : 0), 0), r = 0; +n > +a;)if (this._trace_x[r] = new Date(a), a = e.date.add(a, this.x_step, this.x_unit), e.date[this.x_unit + "_start"] && (a = e.date[this.x_unit + "_start"](a)), e._ignores[r] || i++, r++, t)if (i < this.x_size && !(+n > +a))n = e.date["add_" + this.name + "_private"](n, (this.x_length || this.x_size) * this.x_step); else if (i >= this.x_size) {
                e._max_date = a;
                break
            }
            return {total: r, displayed: i}
        }

        function d(t) {
            var a = e.xy.scale_height, n = this._header_resized || e.xy.scale_height;
            e._cols = [], e._colsS = {height: 0}, this._trace_x = [];
            var i = e._x - this.dx - e.xy.scroll_width, r = [this.dx], d = e._els.dhx_cal_header[0];
            d.style.width = r[0] + i + "px";
            for (var o = e._min_date_timeline = e._min_date, l = e.config.preserve_scale_length, c = s.call(this, l), h = c.displayed, v = c.total, f = 0; v > f; f++)e._ignores[f] ? (e._cols[f] = 0, h++) : e._cols[f] = Math.floor(i / (h - f)), i -= e._cols[f], r[f + 1] = r[f] + e._cols[f];
            if (t.innerHTML = "<div></div>", this.second_scale) {
                for (var g = this.second_scale.x_unit, p = [this._trace_x[0]], m = [], y = [this.dx, this.dx], x = 0, b = 0; b < this._trace_x.length; b++) {
                    var w = this._trace_x[b], k = _(g, w, p[x]);
                    k && (++x, p[x] = w, y[x + 1] = y[x]);
                    var E = x + 1;
                    m[x] = e._cols[b] + (m[x] || 0), y[E] += e._cols[b]
                }
                t.innerHTML = "<div></div><div></div>";
                var D = t.firstChild;
                D.style.height = n + "px";
                var N = t.lastChild;
                N.style.position = "relative";
                for (var M = 0; M < p.length; M++) {
                    var C = p[M], O = e.templates[this.name + "_second_scalex_class"](C), L = document.createElement("DIV");
                    L.className = "dhx_scale_bar dhx_second_scale_bar" + (O ? " " + O : ""), e.set_xy(L, m[M] - 1, n - 3, y[M], 0), L.innerHTML = e.templates[this.name + "_second_scale_date"](C), D.appendChild(L)
                }
            }
            e.xy.scale_height = n, t = t.lastChild;
            for (var T = 0; T < this._trace_x.length; T++)if (!e._ignores[T]) {
                o = this._trace_x[T], e._render_x_header(T, r[T], o, t);
                var S = e.templates[this.name + "_scalex_class"](o);
                S && (t.lastChild.className += " " + S)
            }
            e.xy.scale_height = a;
            var A = this._trace_x;
            t.onclick = function (t) {
                var a = u(t);
                a && e.callEvent("onXScaleClick", [a.x, A[a.x], t || event])
            }, t.ondblclick = function (t) {
                var a = u(t);
                a && e.callEvent("onXScaleDblClick", [a.x, A[a.x], t || event])
            }
        }

        function _(t, a, n) {
            switch (t) {
                case"hour":
                    return a.getHours() != n.getHours() || _("day", a, n);
                case"day":
                    return !(a.getDate() == n.getDate() && a.getMonth() == n.getMonth() && a.getFullYear() == n.getFullYear());
                case"week":
                    return !(e.date.getISOWeek(a) == e.date.getISOWeek(n) && a.getFullYear() == n.getFullYear());
                case"month":
                    return !(a.getMonth() == n.getMonth() && a.getFullYear() == n.getFullYear());
                case"year":
                    return !(a.getFullYear() == n.getFullYear());
                default:
                    return !1
            }
        }

        function o(t) {
            if (t) {
                e.set_sizes(), e._init_matrix_tooltip();
                var a = e._min_date;
                d.call(this, e._els.dhx_cal_header[0]), r.call(this, e._els.dhx_cal_data[0]), e._min_date = a, e._els.dhx_cal_date[0].innerHTML = e.templates[this.name + "_date"](e._min_date, e._max_date), e._mark_now && e._mark_now()
            }
            l()
        }

        function l() {
            e._tooltip && (e._tooltip.style.display = "none", e._tooltip.date = "")
        }

        function c(t, a, n) {
            if ("cell" == t.render) {
                var i = a.x + "_" + a.y, r = t._matrix[a.y][a.x];
                if (!r)return l();
                if (r.sort(function (e, t) {
                        return e.start_date > t.start_date ? 1 : -1
                    }), e._tooltip) {
                    if (e._tooltip.date == i)return;
                    e._tooltip.innerHTML = ""
                } else {
                    var s = e._tooltip = document.createElement("DIV");
                    s.className = "dhx_year_tooltip", document.body.appendChild(s), s.onclick = e._click.dhx_cal_data
                }
                for (var d = "", _ = 0; _ < r.length; _++) {
                    var o = r[_].color ? "background-color:" + r[_].color + ";" : "", c = r[_].textColor ? "color:" + r[_].textColor + ";" : "";
                    d += "<div class='dhx_tooltip_line' event_id='" + r[_].id + "' style='" + o + c + "'>", d += "<div class='dhx_tooltip_date'>" + (r[_]._timed ? e.templates.event_date(r[_].start_date) : "") + "</div>", d += "<div class='dhx_event_icon icon_details'>&nbsp;</div>", d += e.templates[t.name + "_tooltip"](r[_].start_date, r[_].end_date, r[_]) + "</div>"
                }
                e._tooltip.style.display = "", e._tooltip.style.top = "0px", e._tooltip.style.left = document.body.offsetWidth - n.left - e._tooltip.offsetWidth < 0 ? n.left - e._tooltip.offsetWidth + "px" : n.left + a.src.offsetWidth + "px", e._tooltip.date = i, e._tooltip.innerHTML = d, e._tooltip.style.top = document.body.offsetHeight - n.top - e._tooltip.offsetHeight < 0 ? n.top - e._tooltip.offsetHeight + a.src.offsetHeight + "px" : n.top + "px"
            }
        }

        function h(e) {
            for (var t = e.parentNode.childNodes, a = 0; a < t.length; a++)if (t[a] == e)return a;
            return -1
        }

        function u(e) {
            e = e || event;
            for (var t = e.target ? e.target : e.srcElement; t && "DIV" != t.tagName;)t = t.parentNode;
            if (t && "DIV" == t.tagName) {
                var a = t.className.split(" ")[0];
                if ("dhx_scale_bar" == a)return {x: h(t), y: -1, src: t, scale: !0}
            }
        }

        e.matrix = {}, e._merge = function (e, t) {
            for (var a in t)"undefined" == typeof e[a] && (e[a] = t[a])
        }, e.createTimelineView = function (t) {
            e._skin_init(), e._merge(t, {
                section_autoheight: !0,
                name: "matrix",
                x: "time",
                y: "time",
                x_step: 1,
                x_unit: "hour",
                y_unit: "day",
                y_step: 1,
                x_start: 0,
                x_size: 24,
                y_start: 0,
                y_size: 7,
                render: "cell",
                dx: 200,
                dy: 50,
                event_dy: e.xy.bar_height - 5,
                event_min_dy: e.xy.bar_height - 5,
                resize_events: !0,
                fit_events: !0,
                show_unassigned: !1,
                second_scale: !1,
                round_position: !1,
                _logic: function (t, a, n) {
                    var i = {};
                    return e.checkEvent("onBeforeSectionRender") && (i = e.callEvent("onBeforeSectionRender", [t, a, n])), i
                }
            }), t._original_x_start = t.x_start, "day" != t.x_unit && (t.first_hour = t.last_hour = 0), t._start_correction = t.first_hour ? 60 * t.first_hour * 60 * 1e3 : 0, t._end_correction = t.last_hour ? 60 * (24 - t.last_hour) * 60 * 1e3 : 0, e.checkEvent("onTimelineCreated") && e.callEvent("onTimelineCreated", [t]);
            var a = e.render_data;
            e.render_data = function (n, i) {
                if (this._mode != t.name)return a.apply(this, arguments);
                if (i && !t.show_unassigned && "cell" != t.render)for (var r = 0; r < n.length; r++)this.clear_event(n[r]), this.render_timeline_event.call(this.matrix[this._mode], n[r], !0);
                else e._renderMatrix.call(t, !0, !0)
            }, e.matrix[t.name] = t, e.templates[t.name + "_cell_value"] = function (e) {
                return e ? e.length : ""
            }, e.templates[t.name + "_cell_class"] = function () {
                return ""
            }, e.templates[t.name + "_scalex_class"] = function () {
                return ""
            }, e.templates[t.name + "_second_scalex_class"] = function () {
                return ""
            }, e.templates[t.name + "_scaley_class"] = function () {
                return ""
            }, e.templates[t.name + "_scale_label"] = function (e, t) {
                return t
            }, e.templates[t.name + "_tooltip"] = function (e, t, a) {
                return a.text
            }, e.templates[t.name + "_date"] = function (t, a) {
                return t.getDay() == a.getDay() && 864e5 > a - t || +t == +e.date.date_part(new Date(a)) || +e.date.add(t, 1, "day") == +a && 0 === a.getHours() && 0 === a.getMinutes() ? e.templates.day_date(t) : t.getDay() != a.getDay() && 864e5 > a - t ? e.templates.day_date(t) + " &ndash; " + e.templates.day_date(a) : e.templates.week_date(t, a)
            }, e.templates[t.name + "_scale_date"] = e.date.date_to_str(t.x_date || e.config.hour_date), e.templates[t.name + "_second_scale_date"] = e.date.date_to_str(t.second_scale && t.second_scale.x_date ? t.second_scale.x_date : e.config.hour_date), e.date["add_" + t.name + "_private"] = function (a, n) {
                var i = n, r = t.x_unit;
                if ("minute" == t.x_unit || "hour" == t.x_unit) {
                    var s = i;
                    "hour" == t.x_unit && (s *= 60), s % 1440 || (i = s / 1440, r = "day")
                }
                return e.date.add(a, i, r)
            }, e.date["add_" + t.name] = function (a, n) {
                var i = e.date["add_" + t.name + "_private"](a, (t.x_length || t.x_size) * t.x_step * n);
                if ("minute" == t.x_unit || "hour" == t.x_unit) {
                    var r = t.x_length || t.x_size, s = "hour" == t.x_unit ? 60 * t.x_step : t.x_step;
                    if (s * r % 1440)if (+e.date.date_part(new Date(a)) == +e.date.date_part(new Date(i)))t.x_start += n * r; else {
                        var d = 1440 / (r * s) - 1, _ = Math.round(d * r);
                        t.x_start = n > 0 ? t.x_start - _ : _ + t.x_start
                    }
                }
                return i
            }, e.date[t.name + "_start"] = function (a) {
                var n = e.date[t.x_unit + "_start"] || e.date.day_start, i = n.call(e.date, a);
                return i = e.date.add(i, t.x_step * t.x_start, t.x_unit)
            }, e.callEvent("onOptionsLoad", [t]), e[t.name + "_view"] = function (a) {
                a ? e._set_timeline_dates(t) : e._renderMatrix.apply(t, arguments)
            };
            {
                var i = new Date;
                e.date.add(i, t.x_step, t.x_unit).valueOf() - i.valueOf()
            }
            e["mouse_" + t.name] = function (a) {
                var i = this._drag_event;
                this._drag_id && (i = this.getEvent(this._drag_id), this._drag_event._dhx_changed = !0), a.x -= t.dx;
                var r = e._timeline_drag_date(t, a.x);
                if (a.x = 0, a.force_redraw = !0, a.custom = !0, "move" == this._drag_mode && this._drag_id && this._drag_event) {
                    var i = this.getEvent(this._drag_id), s = this._drag_event;
                    if (a._ignores = this._ignores_detected || t._start_correction || t._end_correction, void 0 === s._move_delta && (s._move_delta = (i.start_date - r) / 6e4, this.config.preserve_length && a._ignores && (s._move_delta = this._get_real_event_length(i.start_date, r, t), s._event_length = this._get_real_event_length(i.start_date, i.end_date, t))), this.config.preserve_length && a._ignores) {
                        var d = (s._event_length, this._get_fictional_event_length(r, s._move_delta, t, !0));
                        r = new Date(r - d)
                    } else r = e.date.add(r, s._move_delta, "minute")
                }
                if ("resize" == this._drag_mode && i && (this._drag_from_start && +r > +i.end_date ? this._drag_from_start = !1 : !this._drag_from_start && +r < +i.start_date && (this._drag_from_start = !0), a.resize_from_start = this._drag_from_start), t.round_position)switch (this._drag_mode) {
                    case"move":
                        this.config.preserve_length || (r = n.call(t, r, !1), "day" == t.x_unit && (a.custom = !1));
                        break;
                    case"resize":
                        this._drag_event && ((null === this._drag_event._resize_from_start || void 0 === this._drag_event._resize_from_start) && (this._drag_event._resize_from_start = a.resize_from_start), a.resize_from_start = this._drag_event._resize_from_start, r = n.call(t, r, !this._drag_event._resize_from_start))
                }
                return this._resolve_timeline_section(t, a), a.section && this._update_timeline_section({
                    pos: a,
                    event: this.getEvent(this._drag_id),
                    view: t
                }), a.y = Math.round((this._correct_shift(r, 1) - this._min_date) / (6e4 * this.config.time_step)), a.shift = this.config.time_step, a
            }
        }, e._get_timeline_event_height = function (e, t) {
            var a = e[t.y_property], n = t.event_dy;
            return "full" == t.event_dy && (n = t.section_autoheight ? t._section_height[a] - 6 : t.dy - 3), t.resize_events && (n = Math.max(Math.floor(n / e._count), t.event_min_dy)), n
        }, e._get_timeline_event_y = function (t, a) {
            var n = t, i = 2 + n * a + (n ? 2 * n : 0);
            return e.config.cascade_event_display && (i = 2 + n * e.config.cascade_event_margin + (n ? 2 * n : 0)), i
        }, e.render_timeline_event = function (t, n) {
            var i = t[this.y_property];
            if (!i)return "";
            var r = t._sorder, s = a(t, !1, this), d = a(t, !0, this), _ = e._get_timeline_event_height(t, this), o = _ - 2;
            t._inner || "full" != this.event_dy || (o = (o + 2) * (t._count - r) - 2);
            var l = e._get_timeline_event_y(t._sorder, _), c = _ + l + 2;
            (!this._events_height[i] || this._events_height[i] < c) && (this._events_height[i] = c);
            var h = e.templates.event_class(t.start_date, t.end_date, t);
            h = "dhx_cal_event_line " + (h || ""), t._no_drag_move && (h += " no_drag_move");
            var u = t.color ? "background:" + t.color + ";" : "", v = t.textColor ? "color:" + t.textColor + ";" : "", f = e.templates.event_bar_text(t.start_date, t.end_date, t), g = '<div event_id="' + t.id + '" class="' + h + '" style="' + u + v + "position:absolute; top:" + l + "px; height: " + o + "px; left:" + s + "px; width:" + Math.max(0, d - s) + "px;" + (t._text_style || "") + '">';
            if (e.config.drag_resize && !e.config.readonly) {
                var p = "dhx_event_resize", m = "<div class='" + p + " " + p + "_start' style='height: " + o + "px;'></div>", y = "<div class='" + p + " " + p + "_end' style='height: " + o + "px;'></div>";
                g += (t._no_resize_start ? "" : m) + (t._no_resize_end ? "" : y)
            }
            if (g += f + "</div>", !n)return g;
            var x = document.createElement("DIV");
            x.innerHTML = g;
            var b = this.order[i], w = e._els.dhx_cal_data[0].firstChild.rows[b].cells[1].firstChild;
            e._rendered.push(x.firstChild), w.appendChild(x.firstChild)
        }, e._matrix_tooltip_handler = function (t) {
            var a = e.matrix[e._mode];
            if (a && "cell" == a.render) {
                if (a) {
                    {
                        var n = e._locate_cell_timeline(t), t = t || event;
                        t.target || t.srcElement
                    }
                    if (n)return c(a, n, getOffset(n.src))
                }
                l()
            }
        }, e._init_matrix_tooltip = function () {
            e._detachDomEvent(e._els.dhx_cal_data[0], "mouseover", e._matrix_tooltip_handler), dhtmlxEvent(e._els.dhx_cal_data[0], "mouseover", e._matrix_tooltip_handler)
        }, e._set_timeline_dates = function (t) {
            e._min_date = e.date[t.name + "_start"](e._date), e._max_date = e.date["add_" + t.name + "_private"](e._min_date, t.x_size * t.x_step), e._table_view = !0
        }, e._renderMatrix = function (t, a) {
            if (a || (e._els.dhx_cal_data[0].scrollTop = 0), e._set_timeline_dates(this), this.second_scale && (t && !this._header_resized && (this._header_resized = e.xy.scale_height, e.xy.scale_height *= 2, e._els.dhx_cal_header[0].className += " dhx_second_cal_header"), !t && this._header_resized)) {
                e.xy.scale_height /= 2, this._header_resized = !1;
                var n = e._els.dhx_cal_header[0];
                n.className = n.className.replace(/ dhx_second_cal_header/gi, "")
            }
            o.call(this, t)
        }, e._locate_cell_timeline = function (t) {
            t = t || event;
            for (var a = t.target ? t.target : t.srcElement, n = {}, i = e.matrix[e._mode], r = e.getActionData(t), s = 0; s < i._trace_x.length - 1 && !(+r.date < i._trace_x[s + 1]); s++);
            n.x = s, n.y = i.order[r.section];
            var d = e._isRender("cell") ? 1 : 0;
            n.src = i._scales[r.section] ? i._scales[r.section].getElementsByTagName("td")[s + d] : null;
            for (var _ = !1; 0 === n.x && "dhx_cal_data" != a.className && a.parentNode;) {
                if ("dhx_matrix_scell" == a.className.split(" ")[0]) {
                    _ = !0;
                    break
                }
                a = a.parentNode
            }
            return _ && (n.x = -1, n.src = a, n.scale = !0), n
        };
        var v = e._click.dhx_cal_data;
        e._click.dhx_marked_timespan = e._click.dhx_cal_data = function (t) {
            var a = v.apply(this, arguments), n = e.matrix[e._mode];
            if (n) {
                var i = e._locate_cell_timeline(t);
                i && (i.scale ? e.callEvent("onYScaleClick", [i.y, n.y_unit[i.y], t || event]) : e.callEvent("onCellClick", [i.x, i.y, n._trace_x[i.x], (n._matrix[i.y] || {})[i.x] || [], t || event]))
            }
            return a
        }, e.dblclick_dhx_matrix_cell = function (t) {
            var a = e.matrix[e._mode];
            if (a) {
                var n = e._locate_cell_timeline(t);
                n && (n.scale ? e.callEvent("onYScaleDblClick", [n.y, a.y_unit[n.y], t || event]) : e.callEvent("onCellDblClick", [n.x, n.y, a._trace_x[n.x], (a._matrix[n.y] || {})[n.x] || [], t || event]))
            }
        };
        var f = e.dblclick_dhx_marked_timespan || function () {
            };
        e.dblclick_dhx_marked_timespan = function (t) {
            var a = e.matrix[e._mode];
            return a ? e.dblclick_dhx_matrix_cell(t) : f.apply(this, arguments)
        }, e.dblclick_dhx_matrix_scell = function (t) {
            return e.dblclick_dhx_matrix_cell(t)
        }, e._isRender = function (t) {
            return e.matrix[e._mode] && e.matrix[e._mode].render == t
        }, e.attachEvent("onCellDblClick", function (t, a, n, i, r) {
            if (!this.config.readonly && ("dblclick" != r.type || this.config.dblclick_create)) {
                var s = e.matrix[e._mode], d = {};
                d.start_date = s._trace_x[t], d.end_date = s._trace_x[t + 1] ? s._trace_x[t + 1] : e.date.add(s._trace_x[t], s.x_step, s.x_unit), s._start_correction && (d.start_date = new Date(1 * d.start_date + s._start_correction)), s._end_correction && (d.end_date = new Date(d.end_date - s._end_correction)), d[s.y_property] = s.y_unit[a].key, e.addEventNow(d, null, r)
            }
        }), e.attachEvent("onBeforeDrag", function () {
            return !e._isRender("cell")
        }), e.attachEvent("onEventChanged", function (e, t) {
            t._timed = this.isOneDayEvent(t)
        }), e.attachEvent("onBeforeEventChanged", function (t) {
            return e._events[t.id] && (t._move_delta = void 0), !0
        }), e._is_column_visible = function (t) {
            var a = e.matrix[e._mode], n = e._get_date_index(a, t);
            return !e._ignores[n]
        };
        var g = e._render_marked_timespan;
        e._render_marked_timespan = function (t, n, i, r, s) {
            if (!e.config.display_marked_timespans)return [];
            if (e.matrix && e.matrix[e._mode]) {
                if (e._isRender("cell"))return;
                var d = e._lame_copy({}, e.matrix[e._mode]);
                d.round_position = !1;
                var _ = [], o = [], l = [], c = t.sections ? t.sections.units || t.sections.timeline : null;
                if (i)l = [n], o = [i]; else {
                    var h = d.order;
                    if (c)h.hasOwnProperty(c) && (o.push(c), l.push(d._scales[c])); else for (var u in h)h.hasOwnProperty(u) && (o.push(u), l.push(d._scales[u]))
                }
                var r = r ? new Date(r) : e._min_date, s = s ? new Date(s) : e._max_date;
                r.valueOf() < e._min_date.valueOf() && (r = new Date(e._min_date)), s.valueOf() > e._max_date.valueOf() && (s = new Date(e._max_date));
                for (var v = 0; v < d._trace_x.length && !e._is_column_visible(d._trace_x[v]); v++);
                if (v == d._trace_x.length)return;
                var f = [];
                if (t.days > 6) {
                    var p = new Date(t.days);
                    e.date.date_part(new Date(r)) <= +p && +s >= +p && f.push(p)
                } else f.push.apply(f, e._get_dates_by_index(t.days));
                for (var m = t.zones, y = e._get_css_classes_by_config(t), x = 0; x < o.length; x++) {
                    n = l[x], i = o[x];
                    for (var v = 0; v < f.length; v++)for (var b = f[v], w = 0; w < m.length; w += 2) {
                        var k = m[w], E = m[w + 1], D = new Date(+b + 60 * k * 1e3), N = new Date(+b + 60 * E * 1e3);
                        if (N > r && s > D) {
                            var M = e._get_block_by_config(t);
                            M.className = y;
                            var C = a({start_date: D}, !1, d) - 1, O = a({start_date: N}, !1, d) - 1, L = Math.max(1, O - C - 1), T = d._section_height[i] - 1;
                            M.style.cssText = "height: " + T + "px; left: " + C + "px; width: " + L + "px; top: 0;", n.insertBefore(M, n.firstChild), _.push(M)
                        }
                    }
                }
                return _
            }
            return g.apply(e, [t, n, i])
        };
        var p = e._append_mark_now;
        e._append_mark_now = function (t, a) {
            if (e.matrix && e.matrix[e._mode]) {
                var n = e._currentDate(), i = e._get_zone_minutes(n), r = {
                    days: +e.date.date_part(n),
                    zones: [i, i + 1],
                    css: "dhx_matrix_now_time",
                    type: "dhx_now_time"
                };
                return e._render_marked_timespan(r)
            }
            return p.apply(e, [t, a])
        }, e.attachEvent("onScaleAdd", function (t, a) {
            var n = e._marked_timespans;
            if (n && e.matrix && e.matrix[e._mode])for (var i = e._mode, r = e._min_date, s = e._max_date, d = n.global, _ = e.date.date_part(new Date(r)); s > _; _ = e.date.add(_, 1, "day")) {
                var o = +_, l = _.getDay(), c = [], h = d[o] || d[l];
                if (c.push.apply(c, e._get_configs_to_render(h)), n[i] && n[i][a]) {
                    var u = [], v = e._get_types_to_render(n[i][a][l], n[i][a][o]);
                    u.push.apply(u, e._get_configs_to_render(v)), u.length && (c = u)
                }
                for (var f = 0; f < c.length; f++) {
                    var g = c[f], p = g.days;
                    7 > p ? (p = o, e._render_marked_timespan(g, t, a, _, e.date.add(_, 1, "day")), p = l) : e._render_marked_timespan(g, t, a, _, e.date.add(_, 1, "day"))
                }
            }
        }), e._resolve_timeline_section = function (e, t) {
            var a = 0, n = 0;
            for (a; a < this._colsS.heights.length && (n += this._colsS.heights[a], !(n > t.y)); a++);
            e.y_unit[a] || (a = e.y_unit.length - 1), this._drag_event && !this._drag_event._orig_section && (this._drag_event._orig_section = e.y_unit[a].key), t.fields = {}, a >= 0 && e.y_unit[a] && (t.section = t.fields[e.y_property] = e.y_unit[a].key)
        }, e._update_timeline_section = function (e) {
            var t = e.view, a = e.event, n = e.pos;
            if (a) {
                if (a[t.y_property] != n.section) {
                    var i = this._get_timeline_event_height(a, t);
                    a._sorder = this._get_dnd_order(a._sorder, i, t._section_height[n.section])
                }
                a[t.y_property] = n.section
            }
        }, e._get_date_index = function (e, t) {
            for (var a = 0, n = e._trace_x; a < n.length - 1 && +t >= +n[a + 1];)a++;
            return a
        }, e._timeline_drag_date = function (t, a) {
            var n, i, r = t, s = {x: a}, d = 0, _ = 0;
            for (_; _ <= this._cols.length - 1; _++)if (i = this._cols[_], d += i, d > s.x) {
                n = (s.x - (d - i)) / i, n = 0 > n ? 0 : n;
                break
            }
            if (r.round_position) {
                var o = 1;
                e.getState().drag_mode && "move" != e.getState().drag_mode && (o = .5), n >= o && _++, n = 0
            }
            if (0 === _ && this._ignores[0])for (_ = 1, n = 0; this._ignores[_];)_++;
            else if (_ == this._cols.length && this._ignores[_ - 1]) {
                for (_ = this._cols.length - 1, n = 0; this._ignores[_];)_--;
                _++
            }
            var l;
            if (_ >= r._trace_x.length)l = e.date.add(r._trace_x[r._trace_x.length - 1], r.x_step, r.x_unit), r._end_correction && (l = new Date(l - r._end_correction)); else {
                var c = n * i * r._step + r._start_correction;
                l = new Date(+r._trace_x[_] + c)
            }
            return l
        }, e.attachEvent("onBeforeTodayDisplayed", function () {
            for (var t in e.matrix) {
                var a = e.matrix[t];
                a.x_start = a._original_x_start
            }
            return !0
        }), e.attachEvent("onOptionsLoad", function () {
            for (var t in e.matrix) {
                var a = e.matrix[t];
                a.order = {}, e.callEvent("onOptionsLoadStart", []);
                for (var t = 0; t < a.y_unit.length; t++)a.order[a.y_unit[t].key] = t;
                e.callEvent("onOptionsLoadFinal", []), e._date && a.name == e._mode && e.setCurrentView(e._date, e._mode)
            }
        }), e.attachEvent("onSchedulerResize", function () {
            if (e.matrix[this._mode]) {
                var t = e.matrix[this._mode];
                return e._renderMatrix.call(t, !0, !0), !1
            }
            return !0
        }), e.attachEvent("onBeforeDrag", function (t, a, n) {
            if ("resize" == a) {
                var i = n.target || n.srcElement;
                e._drag_from_start = (i.className || "").indexOf("dhx_event_resize_end") < 0 ? !0 : !1
            }
            return !0
        })
    }, e._temp_matrix_scope()
});
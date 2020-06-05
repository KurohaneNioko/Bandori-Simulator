"21d2": function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                }]
            }, [-1 !== t.type ? i("div", {
                staticClass: "columns is-mobile is-gapless"
            }, [i("div", {
                staticClass: "column is-narrow"
            }, [i("a", {
                staticClass: "button",
                class: {
                    "is-focused": t.showSettings
                },
                on: {
                    click: function(e) {
                        t.showSettings = !t.showSettings
                    }
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-cog"
                    }
                }
            })], 1)]), i("div", {
                staticClass: "column"
            }), i("div", {
                staticClass: "column is-narrow"
            }, [i("a", {
                staticClass: "button",
                on: {
                    click: t.onExpand
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-expand"
                    }
                }
            })], 1)])]) : t._e(), t.showSettings ? i("div", {
                staticClass: "m-b-l"
            }, [0 === t.type ? [i("my-field", {
                attrs: {
                    title: t.$t("fldLaneDesign")
                }
            }, [i("my-icon-select-single", {
                attrs: {
                    options: [{
                        text: "1"
                    }, {
                        text: "2"
                    }, {
                        text: "3"
                    }, {
                        text: "4"
                    }, {
                        text: "5"
                    }]
                },
                model: {
                    value: t.styleLaneType,
                    callback: function(e) {
                        t.styleLaneType = e
                    },
                    expression: "styleLaneType"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldNoteType")
                }
            }, [i("my-icon-select-single", {
                attrs: {
                    options: [{
                        text: "1"
                    }, {
                        text: "2"
                    }, {
                        text: "3"
                    }, {
                        text: "4"
                    }, {
                        text: "5"
                    }]
                },
                model: {
                    value: t.styleNoteType,
                    callback: function(e) {
                        t.styleNoteType = e
                    },
                    expression: "styleNoteType"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldNoteSize")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: .1,
                    max: 2,
                    small: .1,
                    large: .5,
                    display: "percent"
                },
                model: {
                    value: t.styleNoteSize,
                    callback: function(e) {
                        t.styleNoteSize = e
                    },
                    expression: "styleNoteSize"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldLongTransparency")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: .1,
                    max: 1,
                    small: .1,
                    large: .2,
                    display: "percent"
                },
                model: {
                    value: t.styleLongAlpha,
                    callback: function(e) {
                        t.styleLongAlpha = e
                    },
                    expression: "styleLongAlpha"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldMirror")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.styleMirror,
                    callback: function(e) {
                        t.styleMirror = e
                    },
                    expression: "styleMirror"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldDualLine")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.styleDualLine,
                    callback: function(e) {
                        t.styleDualLine = e
                    },
                    expression: "styleDualLine"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldOffBeat")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.styleOffBeat,
                    callback: function(e) {
                        t.styleOffBeat = e
                    },
                    expression: "styleOffBeat"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldComboMarker")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.chartCombo,
                    callback: function(e) {
                        t.chartCombo = e
                    },
                    expression: "chartCombo"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldFeverMarker")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.chartFever,
                    callback: function(e) {
                        t.chartFever = e
                    },
                    expression: "chartFever"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldBPMMarker")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.chartBPM,
                    callback: function(e) {
                        t.chartBPM = e
                    },
                    expression: "chartBPM"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldTimeMarker")
                }
            }, [i("my-text-select-single", {
                attrs: {
                    options: t.$root.toArray(t.$t("optTimeMarker"))
                },
                model: {
                    value: t.chartTime,
                    callback: function(e) {
                        t.chartTime = e
                    },
                    expression: "chartTime"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldBeatMarker")
                }
            }, [i("my-text-select-single", {
                attrs: {
                    options: t.$root.toArray(t.$t("optBeatMarker"))
                },
                model: {
                    value: t.chartBeat,
                    callback: function(e) {
                        t.chartBeat = e
                    },
                    expression: "chartBeat"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldSkillMarker")
                }
            }, [i("my-text-select-single", {
                attrs: {
                    options: t.$root.toArray(t.$t("optSkillMarker"))
                },
                model: {
                    value: t.chartSkill,
                    callback: function(e) {
                        t.chartSkill = e
                    },
                    expression: "chartSkill"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldVerticalScale")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: .5,
                    max: 2,
                    small: .1,
                    large: .5,
                    display: "percent"
                },
                model: {
                    value: t.chartVertical,
                    callback: function(e) {
                        t.chartVertical = e
                    },
                    expression: "chartVertical"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldZoom")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: .5,
                    max: 3,
                    small: .1,
                    large: .5,
                    display: "percent"
                },
                model: {
                    value: t.chartZoom,
                    callback: function(e) {
                        t.chartZoom = e
                    },
                    expression: "chartZoom"
                }
            })], 1)] : t._e(), 1 === t.type ? [i("my-field", {
                attrs: {
                    title: t.$t("fldLaneDesign")
                }
            }, [i("my-icon-select-single", {
                attrs: {
                    options: [{
                        text: "1"
                    }, {
                        text: "2"
                    }, {
                        text: "3"
                    }, {
                        text: "4"
                    }, {
                        text: "5"
                    }]
                },
                model: {
                    value: t.styleLaneType,
                    callback: function(e) {
                        t.styleLaneType = e
                    },
                    expression: "styleLaneType"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldNoteType")
                }
            }, [i("my-icon-select-single", {
                attrs: {
                    options: [{
                        text: "1"
                    }, {
                        text: "2"
                    }, {
                        text: "3"
                    }, {
                        text: "4"
                    }, {
                        text: "5"
                    }]
                },
                model: {
                    value: t.styleNoteType,
                    callback: function(e) {
                        t.styleNoteType = e
                    },
                    expression: "styleNoteType"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldNoteSize")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: .1,
                    max: 2,
                    small: .1,
                    large: .5,
                    display: "percent"
                },
                model: {
                    value: t.styleNoteSize,
                    callback: function(e) {
                        t.styleNoteSize = e
                    },
                    expression: "styleNoteSize"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldLongTransparency")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: .1,
                    max: 1,
                    small: .1,
                    large: .2,
                    display: "percent"
                },
                model: {
                    value: t.styleLongAlpha,
                    callback: function(e) {
                        t.styleLongAlpha = e
                    },
                    expression: "styleLongAlpha"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldMirror")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.styleMirror,
                    callback: function(e) {
                        t.styleMirror = e
                    },
                    expression: "styleMirror"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldDualLine")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.styleDualLine,
                    callback: function(e) {
                        t.styleDualLine = e
                    },
                    expression: "styleDualLine"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldOffBeat")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.styleOffBeat,
                    callback: function(e) {
                        t.styleOffBeat = e
                    },
                    expression: "styleOffBeat"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldTapEffect")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.simTapEffect,
                    callback: function(e) {
                        t.simTapEffect = e
                    },
                    expression: "simTapEffect"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldLaneEffect")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.simLaneEffect,
                    callback: function(e) {
                        t.simLaneEffect = e
                    },
                    expression: "simLaneEffect"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldBackground")
                }
            }, [i("my-yes-no-select-single", {
                model: {
                    value: t.simBackground,
                    callback: function(e) {
                        t.simBackground = e
                    },
                    expression: "simBackground"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldNoteSE")
                }
            }, [i("my-icon-select-single", {
                attrs: {
                    options: [{
                        text: "1"
                    }, {
                        text: "2"
                    }, {
                        text: "3"
                    }, {
                        text: "4"
                    }]
                },
                model: {
                    value: t.simNoteSE,
                    callback: function(e) {
                        t.simNoteSE = e
                    },
                    expression: "simNoteSE"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldNoteSEVolume")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: 0,
                    max: 1,
                    small: .05,
                    large: .2,
                    display: "percent"
                },
                model: {
                    value: t.simNoteSEVolume,
                    callback: function(e) {
                        t.simNoteSEVolume = e
                    },
                    expression: "simNoteSEVolume"
                }
            })], 1), i("my-field", {
                attrs: {
                    title: t.$t("fldNoteSpeed")
                }
            }, [i("my-numeric-input", {
                attrs: {
                    min: 1,
                    max: 11,
                    small: .1,
                    large: .5,
                    display: "1"
                },
                model: {
                    value: t.simNoteSpeed,
                    callback: function(e) {
                        t.simNoteSpeed = e
                    },
                    expression: "simNoteSpeed"
                }
            })], 1)] : t._e()], 2) : t._e(), i("my-song-chart", {
                ref: "chart",
                attrs: {
                    show: t.show && 0 === t.type,
                    songData: t.songData
                }
            }), i("my-song-simulator", {
                ref: "simulator",
                attrs: {
                    show: t.show && 1 === t.type,
                    songData: t.songData
                },
                on: {
                    tChange: function(e) {
                        return t.$emit("tChange", e)
                    }
                }
            }), t.$root.PIXI && t.$root.PIXIResourcesChartSimulator || -1 === t.type ? t._e() : i("my-loading-display", {
                staticClass: "is-centered"
            })], 1)
        }
          , s = []
          , n = i("cebc")
          , o = (i("c5f6"), i("db7d"))
          , r = i("8994")
          , l = i("f716")
          , c = i("d308")
          , h = i("bc55")
          , u = i("a364")
          , d = i("6a5a")
          , p = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.vshow,
                    expression: "vshow"
                }],
                ref: "container",
                staticClass: "container",
                class: {
                    fullscreen: t.fullscreenCustom,
                    normal: !t.fullscreenCustom
                },
                on: {
                    scroll: t.onScroll
                }
            }, [i("div", {
                staticClass: "placeholder is-block",
                style: {
                    width: t.maxWidth + "px",
                    height: "100%"
                }
            }, [i("canvas", {
                ref: "canvas",
                staticClass: "is-block",
                on: {
                    mousemove: t.onMouseMove,
                    mouseleave: function(e) {
                        t.hover = null
                    }
                }
            })]), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.fullscreen && !t.scrolling,
                    expression: "fullscreen && !scrolling"
                }],
                staticClass: "button",
                on: {
                    click: t.closeFullscreen
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-compress"
                    }
                }
            })], 1)])
        }
          , m = []
          , f = (i("6b54"), i("8449"), i("ac6a"), i("2f62"))
          , g = {
            name: "MySongChart",
            components: {
                MyIcon: l["a"]
            },
            props: {
                show: Boolean,
                songData: Object
            },
            data: function() {
                return {
                    app: null,
                    height: null,
                    width: null,
                    fullscreen: !1,
                    fullscreenCustom: !1,
                    scrollX: 0,
                    scrollXPrev: 0,
                    scrolling: !1,
                    hover: null,
                    graphicsLane: null,
                    graphicsLine: null,
                    graphicsNoteBG: null,
                    layerLine: null,
                    layerNoteBG: null,
                    layerNote: null,
                    layerNoteFG: null,
                    layerHover: null,
                    spriteNotes: [],
                    spriteTexts: [],
                    spriteHover: [],
                    apiGraphics: null
                }
            },
            computed: Object(n["a"])({}, Object(o["a"])({
                chartZoom: {
                    name: "tool/chartsimulator/chartZoom",
                    defvalue: 1,
                    type: "number"
                },
                chartVertical: {
                    name: "tool/chartsimulator/chartVertical",
                    defvalue: 1,
                    type: "number"
                },
                chartCombo: {
                    name: "tool/chartsimulator/chartCombo",
                    defvalue: 0,
                    type: "number"
                },
                chartFever: {
                    name: "tool/chartsimulator/chartFever",
                    defvalue: 0,
                    type: "number"
                },
                chartBPM: {
                    name: "tool/chartsimulator/chartBPM",
                    defvalue: 0,
                    type: "number"
                },
                chartTime: {
                    name: "tool/chartsimulator/chartTime",
                    defvalue: 3,
                    type: "number"
                },
                chartBeat: {
                    name: "tool/chartsimulator/chartBeat",
                    defvalue: 1,
                    type: "number"
                },
                chartSkill: {
                    name: "tool/chartsimulator/chartSkill",
                    defvalue: 4,
                    type: "number"
                },
                styleNoteSize: {
                    name: "tool/chartsimulator/styleNoteSize",
                    defvalue: 1,
                    type: "number"
                },
                styleLongAlpha: {
                    name: "tool/chartsimulator/styleLongAlpha",
                    defvalue: .8,
                    type: "number"
                },
                styleDualLine: {
                    name: "tool/chartsimulator/styleDualLine",
                    defvalue: 0,
                    type: "number"
                },
                styleOffBeat: {
                    name: "tool/chartsimulator/styleOffBeat",
                    defvalue: 0,
                    type: "number"
                },
                styleMirror: {
                    name: "tool/chartsimulator/styleMirror",
                    defvalue: 1,
                    type: "number"
                },
                styleLaneType: {
                    name: "tool/chartsimulator/styleLaneType",
                    defvalue: 0,
                    type: "number"
                },
                styleNoteType: {
                    name: "tool/chartsimulator/styleNoteType",
                    defvalue: 0,
                    type: "number"
                }
            }), {
                PIXI: function() {
                    return this.$root.PIXI
                },
                resources: function() {
                    return this.$root.PIXIResourcesChartSimulator
                },
                vshow: function() {
                    return this.show && this.PIXI && this.resources && this.songData
                },
                noteWidth: function() {
                    return 10 * this.chartZoom
                },
                panelWidth: function() {
                    return 13 * this.noteWidth
                },
                heightPerSecond: function() {
                    return 150 * this.chartVertical * this.chartZoom
                },
                panels: function() {
                    return this.app && this.apiGraphics && this.height ? Math.ceil(this.apiGraphics[this.apiGraphics.length - 1].time * this.heightPerSecond / this.height) : 0
                },
                minPanel: function() {
                    return Math.floor(this.scrollX / this.panelWidth)
                },
                maxPanel: function() {
                    return Math.floor((this.scrollX + this.width) / this.panelWidth)
                },
                mapNotes: function() {
                    var t = this;
                    if (this.apiGraphics && this.height) {
                        var e = [];
                        return this.apiGraphics.forEach(function(i, a) {
                            switch (i.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Flick":
                            case "Skill":
                            case "Tick":
                            case "Sim":
                                for (var s = t.timeToPos(i.time), n = 0; n <= s.p; n++)
                                    void 0 === e[n] && (e[n] = a);
                                break
                            }
                        }),
                        e
                    }
                    return null
                },
                mapBars: function() {
                    var t = this;
                    if (this.apiGraphics && this.height) {
                        var e = [];
                        return this.apiGraphics.forEach(function(i, a) {
                            if ("Bar" === i.type)
                                for (var s = t.timeToPos(i.time[1]), n = 0; n <= s.p; n++)
                                    void 0 === e[n] && (e[n] = a)
                        }),
                        e
                    }
                    return null
                },
                maxWidth: function() {
                    return this.panels * this.panelWidth
                },
                size: function() {
                    return {
                        width: this.width,
                        height: this.height,
                        maxWidth: this.maxWidth
                    }
                },
                barColor: function() {
                    return [4973425, 7398219, 60108, 2087251, 60053][this.styleNoteType]
                },
                apiGraphicsSkill: function() {
                    return this.apiGraphics ? this.apiGraphics.filter(function(t) {
                        return "Skill" === t.type
                    }) : null
                },
                timeFever: function() {
                    var t, e;
                    if (this.apiGraphics && (this.apiGraphics.forEach(function(i) {
                        switch (i.type) {
                        case "FeverStart":
                            t = i.time;
                            break;
                        case "FeverEnd":
                            e = i.time;
                            break
                        }
                    }),
                    t && e))
                        return [t, e];
                    return null
                },
                timeCombo: function() {
                    if (this.apiGraphics) {
                        var t = []
                          , e = 0;
                        return this.apiGraphics.forEach(function(i) {
                            switch (i.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Flick":
                            case "Skill":
                            case "Tick":
                                e++,
                                e % 50 === 0 && t.push(i.time);
                                break
                            }
                        }),
                        t
                    }
                    return null
                },
                bpms: function() {
                    var t = this;
                    if (this.apiGraphics) {
                        var e, i = [];
                        return this.apiGraphics.forEach(function(a, s) {
                            "BPM" !== a.type && s !== t.apiGraphics.length - 1 || (e && (e.timeEnd = a.time,
                            i.push(e)),
                            e = {
                                bpm: a.bpm,
                                timeStart: a.time
                            })
                        }),
                        i
                    }
                    return null
                }
            }),
            watch: {
                songData: {
                    immediate: !0,
                    handler: function() {
                        var t = this;
                        if (this.apiGraphics = null,
                        this.songData)
                            switch (this.songData.type) {
                            case "original":
                                this.api({
                                    url: "songs/chart/graphics/chart/" + this.songData.id + "." + ["easy", "normal", "hard", "expert", "special"][this.songData.diff]
                                }).then(function(e) {
                                    t.apiGraphics = e
                                });
                                break;
                            default:
                                this.apiGraphics = this.songData.graphicsChart
                            }
                    }
                },
                vshow: function() {
                    var t = this;
                    this.initPIXI(),
                    this.$nextTick(function() {
                        t.updateSize()
                    })
                },
                "$root.windowWidth": "updateSize",
                "$root.windowHeight": "updateSize",
                maxWidth: function() {
                    var t = this;
                    this.$refs.container.scrollLeft = 0,
                    this.$nextTick(function() {
                        t.updateSize()
                    })
                },
                size: function() {
                    this.resizeApp(),
                    this.drawLane(),
                    this.drawLine(),
                    this.drawBars(),
                    this.positionNotes(),
                    this.render()
                },
                app: function() {
                    this.createNotes(),
                    this.resizeNotes(),
                    this.drawLane(),
                    this.drawLine(),
                    this.drawBars(),
                    this.positionNotes(),
                    this.render(),
                    this.updateSize()
                },
                apiGraphics: function() {
                    this.createNotes(),
                    this.resizeNotes(),
                    this.drawLane(),
                    this.drawLine(),
                    this.drawBars(),
                    this.positionNotes(),
                    this.render(),
                    this.updateSize()
                },
                styleLaneType: function() {
                    this.drawLane(),
                    this.drawLine(),
                    this.render()
                },
                styleNoteType: function() {
                    this.drawBars(),
                    this.createNotes(),
                    this.resizeNotes(),
                    this.positionNotes(),
                    this.render()
                },
                styleNoteSize: function() {
                    this.drawBars(),
                    this.resizeNotes(),
                    this.render()
                },
                styleLongAlpha: function() {
                    this.drawBars(),
                    this.render()
                },
                styleMirror: function() {
                    this.drawBars(),
                    this.positionNotes(),
                    this.render()
                },
                styleDualLine: function() {
                    this.changeSimLine(),
                    this.render()
                },
                styleOffBeat: function() {
                    this.changeOffBeatNotes(),
                    this.resizeNotes(),
                    this.positionNotes(),
                    this.render()
                },
                chartZoom: function() {
                    this.drawLane(),
                    this.drawLine(),
                    this.drawBars(),
                    this.resizeNotes(),
                    this.positionNotes(),
                    this.render()
                },
                chartVertical: function() {
                    this.drawLane(),
                    this.drawLine(),
                    this.drawBars(),
                    this.positionNotes(),
                    this.render()
                },
                chartTime: function() {
                    this.drawLine(),
                    this.render()
                },
                chartCombo: function() {
                    this.drawLine(),
                    this.render()
                },
                chartFever: function() {
                    this.drawLine(),
                    this.render()
                },
                chartBPM: function() {
                    this.drawLine(),
                    this.render()
                },
                chartBeat: function() {
                    this.drawLine(),
                    this.render()
                },
                chartSkill: function() {
                    this.drawLine(),
                    this.render()
                },
                hover: function() {
                    this.drawHover(),
                    this.render()
                },
                "$root.tickerFrame": function() {
                    this.scrollXPrev !== this.scrollX ? (this.scrollXPrev = this.scrollX,
                    this.drawLane(),
                    this.drawLine(),
                    this.drawBars(),
                    this.positionNotes(),
                    this.drawHover(),
                    this.render()) : this.scrolling = !1
                }
            },
            methods: Object(n["a"])({}, Object(f["b"])("api", {
                api: "get"
            }), {
                updateSize: function() {
                    if (this.vshow && this.$refs.container) {
                        var t = this.$refs.container.clientHeight
                          , e = this.$refs.container.clientWidth;
                        t * e && (this.height = t - 2,
                        this.width = e)
                    }
                },
                resizeApp: function() {
                    this.app && this.app.renderer.resize(this.width, this.height)
                },
                initPIXI: function() {
                    this.vshow && !this.app && (this.app = new this.PIXI.Application({
                        view: this.$refs.canvas,
                        autoStart: !1,
                        backgroundColor: 0,
                        preserveDrawingBuffer: !0,
                        antialias: !0,
                        autoDensity: !0,
                        resolution: window.devicePixelRatio
                    }),
                    this.app.renderer.plugins.interaction.autoPreventDefault = !1,
                    this.app.renderer.view.style.touchAction = "auto",
                    this.graphicsLine = new this.PIXI.Graphics,
                    this.graphicsHover = new this.PIXI.Graphics,
                    this.graphicsLane = new this.PIXI.Graphics,
                    this.layerLine = new this.PIXI.Container,
                    this.graphicsNoteBG = new this.PIXI.Graphics,
                    this.layerNoteBG = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.layerNote = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.layerNoteFG = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.layerHover = new this.PIXI.Container,
                    this.layerLine.addChild(this.graphicsLine),
                    this.layerHover.addChild(this.graphicsHover),
                    this.app.stage.addChild(this.graphicsLane),
                    this.app.stage.addChild(this.layerLine),
                    this.app.stage.addChild(this.graphicsNoteBG),
                    this.app.stage.addChild(this.layerNoteBG),
                    this.app.stage.addChild(this.layerNote),
                    this.app.stage.addChild(this.layerNoteFG),
                    this.app.stage.addChild(this.layerHover))
                },
                timeToPos: function(t, e) {
                    void 0 === e && (e = Math.floor(t * this.heightPerSecond / this.height));
                    var i = e * this.panelWidth
                      , a = this.height - (t * this.heightPerSecond - e * this.height);
                    return {
                        x: i,
                        y: a,
                        p: e
                    }
                },
                drawLane: function() {
                    if (this.app && this.apiGraphics) {
                        var t, e, i, a, s;
                        this.graphicsLane.clear();
                        var n, o, r, l, c, h, u = this.noteWidth / 10, d = [.1, .1, .2], p = .5, m = .25;
                        switch (this.styleLaneType) {
                        case 0:
                            n = 8454143,
                            o = 65535,
                            r = 65535,
                            l = .3,
                            c = [25, 25],
                            h = [.39, .39];
                            break;
                        case 1:
                            n = 16755455,
                            o = 16755455,
                            r = 16755455,
                            l = .36,
                            c = [1446476, 1446476],
                            h = [.39, .39];
                            break;
                        case 2:
                            n = 0,
                            o = 0,
                            r = 0,
                            l = 0,
                            m = 0,
                            c = [25, 25],
                            h = [.56, .39];
                            break;
                        case 3:
                            n = 3228796,
                            d = [.5, .25, .5],
                            o = 3228796,
                            p = 1,
                            r = 2379912,
                            l = .21,
                            c = [32, 32],
                            h = [.39, .39];
                            break;
                        case 4:
                            n = 3892883,
                            d = [.25, .1, .2],
                            o = 11255779,
                            p = 1,
                            r = 673699,
                            l = .24,
                            c = [25, 25],
                            h = [.37, .37];
                            break
                        }
                        for (t = this.minPanel; t <= this.maxPanel; t++) {
                            for (e = 0; e < 2; e++)
                                i = t * this.panelWidth + (3 + 7 * e) * this.noteWidth - this.scrollX,
                                a = this.height,
                                s = this.noteWidth * m * (2 * e - 1),
                                this.graphicsLane.lineStyle(u, o, p),
                                this.graphicsLane.moveTo(i, 0),
                                this.graphicsLane.lineTo(i, a),
                                this.graphicsLane.lineStyle(0, 0, 0),
                                this.graphicsLane.beginFill(r, l),
                                this.graphicsLane.drawRect(i, 0, s, a),
                                this.graphicsLane.endFill();
                            for (this.graphicsLane.lineStyle(u, n, d[0]),
                            e = 0; e < 6; e++)
                                i = t * this.panelWidth + (e + 4) * this.noteWidth - this.scrollX,
                                a = this.height,
                                this.graphicsLane.moveTo(i, 0),
                                this.graphicsLane.lineTo(i, a);
                            for (s = this.noteWidth,
                            e = 0; e < 7; e++)
                                i = t * this.panelWidth + (e + 3) * this.noteWidth - this.scrollX,
                                a = this.height,
                                this.graphicsLane.beginFill(c[e % 2], h[e % 2]),
                                this.graphicsLane.drawRect(i, 0, s, a),
                                this.graphicsLane.endFill()
                        }
                    }
                },
                drawLine: function() {
                    var t = this;
                    if (this.app && this.apiGraphics) {
                        var e, i, a, s;
                        this.graphicsLine.clear(),
                        this.spriteTexts.forEach(function(t) {
                            t.destroy()
                        }),
                        this.spriteTexts = [];
                        var n = this.noteWidth
                          , o = function(e, i, a, s, n, o) {
                            var r = new t.PIXI.BitmapText(e,{
                                font: "Font"
                            })
                              , l = a / 32;
                            r.scale.set(l, l),
                            r.tint = i,
                            r.position.set(n, o),
                            r.anchor.x = s,
                            r.anchor.y = o + a / 2 > t.height ? 1 : .5,
                            t.layerLine.addChild(r),
                            t.spriteTexts.push(r)
                        }
                          , r = function(e, i, a) {
                            var s = t.timeToPos(e)
                              , n = t.timeToPos(i);
                            if (s.p <= t.maxPanel && n.p >= t.minPanel) {
                                for (var o = s.p; o <= n.p; o++) {
                                    var r = t.timeToPos(e, o)
                                      , l = t.timeToPos(i, o);
                                    t.graphicsLine.moveTo(r.x + a * t.noteWidth - t.scrollX, r.y),
                                    t.graphicsLine.lineTo(l.x + a * t.noteWidth - t.scrollX, l.y)
                                }
                                t.graphicsLine.moveTo(s.x + 3 * t.noteWidth - t.scrollX, s.y),
                                t.graphicsLine.lineTo(s.x + a * t.noteWidth - t.scrollX, s.y),
                                t.graphicsLine.moveTo(n.x + 3 * t.noteWidth - t.scrollX, n.y),
                                t.graphicsLine.lineTo(n.x + a * t.noteWidth - t.scrollX, n.y)
                            }
                        };
                        if (0 !== this.chartTime) {
                            e = 0,
                            a = this.minPanel * this.height / this.heightPerSecond,
                            s = (this.maxPanel + 1) * this.height / this.heightPerSecond;
                            while (e < s)
                                e >= a && (i = this.timeToPos(e),
                                o(this.$options.filters.time(e, !0), 8421504, n, 1, i.x + 2.5 * this.noteWidth - this.scrollX, i.y)),
                                e += [1, 2, 5, 10][this.chartTime - 1]
                        }
                        if (0 === this.chartCombo && this.timeCombo && this.timeCombo.forEach(function(e, a) {
                            i = t.timeToPos(e),
                            i.p >= t.minPanel && i.p <= t.maxPanel && o((50 * (a + 1)).toString(), 8421504, n, 0, i.x + 10.5 * t.noteWidth - t.scrollX, i.y)
                        }),
                        this.chartBeat && this.bpms && (this.graphicsLine.lineStyle(this.noteWidth / 10, [8454143, 16755455, 8454143, 3228796, 3892883][this.styleLaneType], [.1, .1, .1, .25, .1][this.styleLaneType]),
                        a = this.minPanel * this.height / this.heightPerSecond,
                        s = (this.maxPanel + 1) * this.height / this.heightPerSecond,
                        this.bpms.forEach(function(n) {
                            if (n.timeStart <= s && n.timeEnd >= a) {
                                e = n.timeStart;
                                while (e < n.timeEnd)
                                    e >= a && e <= s && (i = t.timeToPos(e),
                                    t.graphicsLine.moveTo(i.x + 3 * t.noteWidth - t.scrollX, i.y),
                                    t.graphicsLine.lineTo(i.x + 10 * t.noteWidth - t.scrollX, i.y)),
                                    e += 60 / n.bpm * [.5, 1, 2][t.chartBeat - 1]
                            }
                        })),
                        0 === this.chartBPM && this.bpms && (this.graphicsLine.lineStyle(this.noteWidth / 10, 16711935, .5),
                        this.bpms.forEach(function(a) {
                            e = a.timeStart,
                            i = t.timeToPos(e),
                            i.p >= t.minPanel && i.p <= t.maxPanel && (t.graphicsLine.moveTo(i.x + 3 * t.noteWidth - t.scrollX, i.y),
                            t.graphicsLine.lineTo(i.x + 10 * t.noteWidth - t.scrollX, i.y),
                            o(a.bpm.toString(), 16711935, n, 0, i.x + 10.5 * t.noteWidth - t.scrollX, i.y))
                        })),
                        0 !== this.chartSkill) {
                            var l = 0;
                            this.apiGraphicsSkill.forEach(function(e) {
                                l++;
                                var a = e.time;
                                i = t.timeToPos(a),
                                i.p >= t.minPanel && i.p <= t.maxPanel && o("#" + l, 16776960, n, 0, i.x + 11.5 * t.noteWidth - t.scrollX, i.y),
                                t.graphicsLine.lineStyle(t.noteWidth / 10, 16776960, .5),
                                r(a, a + [5, 7, 8, 8][t.chartSkill - 1], 11),
                                4 === t.chartSkill && [5, 7].forEach(function(e) {
                                    var i = t.timeToPos(a + e);
                                    if (i.p >= t.minPanel && i.p <= t.maxPanel)
                                        for (var s = 0; s < 8; s++)
                                            t.graphicsLine.moveTo(i.x + (3 + s) * t.noteWidth - t.scrollX, i.y),
                                            t.graphicsLine.lineTo(i.x + (3.5 + s) * t.noteWidth - t.scrollX, i.y)
                                })
                            })
                        }
                        0 === this.chartFever && this.timeFever && (this.graphicsLine.lineStyle(this.noteWidth / 10, 16711680, .5),
                        r(this.timeFever[0], this.timeFever[1], 0 === this.chartSkill ? 11 : 12))
                    }
                },
                drawBars: function() {
                    var t = this;
                    if (this.app && this.apiGraphics && this.mapBars) {
                        var e = this.noteWidth * this.styleNoteSize / 2
                          , i = function(i, a) {
                            var s = t.timeToPos(i.time[0], a)
                              , n = t.timeToPos(i.time[1], a)
                              , o = s.x + (2.5 + (0 === t.styleMirror ? 8 - i.lane[0] : i.lane[0])) * t.noteWidth - t.scrollX
                              , r = n.x + (2.5 + (0 === t.styleMirror ? 8 - i.lane[1] : i.lane[1])) * t.noteWidth - t.scrollX
                              , l = s.y
                              , c = n.y;
                            t.graphicsNoteBG.beginFill(t.barColor, .5 * t.styleLongAlpha),
                            t.graphicsNoteBG.drawPolygon([o - e, l, o + e, l, r + e, c, r - e, c]),
                            t.graphicsNoteBG.endFill()
                        };
                        this.graphicsNoteBG.clear();
                        for (var a = this.apiGraphics.length, s = !1, n = this.mapBars[this.minPanel]; n < a; n++) {
                            var o = this.apiGraphics[n];
                            if ("Bar" === o.type) {
                                var r = this.timeToPos(o.time[0])
                                  , l = this.timeToPos(o.time[1]);
                                if (r.p <= this.maxPanel) {
                                    if (l.p >= this.minPanel)
                                        for (var c = r.p; c <= l.p; c++)
                                            i(o, c)
                                } else
                                    s = !0
                            }
                            if (s)
                                break
                        }
                    }
                },
                createNotes: function() {
                    var t = this;
                    if (this.app && this.apiGraphics) {
                        this.spriteNotes.forEach(function(t) {
                            t.forEach(function(t) {
                                t.destroy()
                            })
                        });
                        var e = this.resources["/atlas/note " + this.styleNoteType + ".json"].textures
                          , i = [];
                        this.apiGraphics.forEach(function(a) {
                            var s, n, o = [];
                            switch (a.type) {
                            case "Single":
                                n = ["note_normal_3"];
                                break;
                            case "SingleOff":
                                n = 0 === t.styleOffBeat ? ["note_normal_gray_3"] : ["note_normal_3"];
                                break;
                            case "Long":
                                n = ["note_long_3"];
                                break;
                            case "Flick":
                                n = ["note_flick_3", "note_flick_top"];
                                break;
                            case "Skill":
                                n = ["note_skill_3"];
                                break;
                            case "Tick":
                                n = ["note_slide_among"];
                                break;
                            case "Sim":
                                n = ["simultaneous_line"]
                            }
                            n && n.forEach(function(i) {
                                s = new t.PIXI.Sprite(e[i + ".png"]),
                                o.push(s)
                            }),
                            i.push(o)
                        }),
                        this.spriteNotes = i
                    }
                },
                resizeNotes: function() {
                    var t = this;
                    if (this.app && this.apiGraphics) {
                        var e = this.noteWidth / 154 * .64 * this.styleNoteSize;
                        this.apiGraphics.forEach(function(i, a) {
                            switch (i.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Flick":
                            case "Skill":
                            case "Tick":
                                t.spriteNotes[a].forEach(function(t) {
                                    t.scale.set(e, e)
                                });
                                break;
                            case "Sim":
                                t.spriteNotes[a].forEach(function(e) {
                                    e.height = t.noteWidth / 5,
                                    e.width = t.noteWidth * (i.lane[1] - i.lane[0])
                                });
                                break
                            }
                        })
                    }
                },
                positionNotes: function() {
                    var t = this;
                    if (this.app && this.apiGraphics && this.spriteNotes.length && this.mapNotes) {
                        this.layerNoteBG.removeChildren(),
                        this.layerNote.removeChildren(),
                        this.layerNoteFG.removeChildren();
                        for (var e = this.apiGraphics.length, i = !1, a = this.mapNotes[this.minPanel]; a < e; a++) {
                            if (this.spriteNotes[a]) {
                                var s, n = this.apiGraphics[a];
                                switch (n.type) {
                                case "Single":
                                case "SingleOff":
                                case "Long":
                                case "Flick":
                                case "Skill":
                                case "Tick":
                                    s = this.timeToPos(n.time),
                                    s.p >= this.minPanel && (s.p <= this.maxPanel ? this.spriteNotes[a].forEach(function(e, i) {
                                        e.position.set(s.x + (2.5 + (0 === t.styleMirror ? 8 - n.lane : n.lane)) * t.noteWidth - t.scrollX, s.y),
                                        0 === i ? t.layerNote.addChild(e) : t.layerNoteFG.addChild(e)
                                    }) : i = !0);
                                    break;
                                case "Sim":
                                    0 === this.styleDualLine && (s = this.timeToPos(n.time),
                                    s.p >= this.minPanel && (s.p <= this.maxPanel ? this.spriteNotes[a].forEach(function(e) {
                                        e.position.set(s.x + (2.5 + (0 === t.styleMirror ? 8 - n.lane[1] : n.lane[0])) * t.noteWidth - t.scrollX, s.y),
                                        t.layerNoteBG.addChild(e)
                                    }) : i = !0));
                                    break
                                }
                            }
                            if (i)
                                break
                        }
                    }
                },
                changeOffBeatNotes: function() {
                    var t = this;
                    if (this.app && this.apiGraphics) {
                        var e = this.resources["/atlas/note " + this.styleNoteType + ".json"].textures;
                        this.apiGraphics.forEach(function(i, a) {
                            if ("SingleOff" === i.type) {
                                t.spriteNotes[a].forEach(function(t) {
                                    t.destroy()
                                });
                                var s = new t.PIXI.Sprite(e["note_" + (0 === t.styleOffBeat ? "normal_gray_3" : "normal_3") + ".png"]);
                                t.layerNote.addChild(s),
                                t.spriteNotes[a] = [s]
                            }
                        })
                    }
                },
                changeSimLine: function() {
                    var t = this;
                    this.app && this.apiGraphics && (0 === this.styleDualLine ? this.positionNotes() : this.apiGraphics.forEach(function(e, i) {
                        "Sim" === e.type && t.spriteNotes[i].forEach(function(e) {
                            t.layerNoteBG.removeChild(e)
                        })
                    }))
                },
                drawHover: function() {
                    var t = this;
                    if (this.app && this.apiGraphics && (this.layerHover.visible = !!this.hover,
                    this.graphicsHover.clear(),
                    this.spriteHover.forEach(function(t) {
                        t.destroy()
                    }),
                    this.spriteHover = [],
                    this.hover)) {
                        var e = Math.floor((this.hover.x + this.scrollX) / this.panelWidth);
                        if (e >= this.minPanel && e <= this.maxPanel) {
                            var i = e * this.panelWidth
                              , a = this.hover.y;
                            this.graphicsHover.lineStyle(this.noteWidth / 10, 16777215, 1),
                            this.graphicsHover.moveTo(i + 3 * this.noteWidth - this.scrollX, a),
                            this.graphicsHover.lineTo(i + 10 * this.noteWidth - this.scrollX, a);
                            for (var s = (e * this.height + this.height - a) / this.heightPerSecond, n = 0, o = 0; o < this.apiGraphics.length; o++) {
                                if (this.apiGraphics[o].time > s)
                                    break;
                                switch (this.apiGraphics[o].type) {
                                case "Single":
                                case "SingleOff":
                                case "Long":
                                case "Flick":
                                case "Skill":
                                case "Tick":
                                    n++;
                                    break
                                }
                            }
                            var r = function(e, i, a, s) {
                                var n = new t.PIXI.BitmapText(e,{
                                    font: "Font"
                                })
                                  , o = t.noteWidth / 32;
                                n.scale.set(o, o),
                                n.position.set(a, s),
                                n.anchor.x = i,
                                n.anchor.y = s + t.noteWidth / 2 > t.height ? 1 : .5,
                                t.layerHover.addChild(n),
                                t.spriteHover.push(n)
                            };
                            r(this.$options.filters.time(Math.floor(s), !0), 1, i + 2.5 * this.noteWidth - this.scrollX, a),
                            r(n.toString(), 0, i + 10.5 * this.noteWidth - this.scrollX, a)
                        }
                    }
                },
                render: function() {
                    this.app && this.app.renderer.render(this.app.stage)
                },
                onMouseMove: function(t) {
                    var e = this.$refs.canvas.getBoundingClientRect()
                      , i = t.clientX - e.left
                      , a = t.clientY - e.top;
                    this.hover = {
                        x: i,
                        y: a
                    }
                },
                onScroll: function(t) {
                    this.hover = null,
                    this.scrollX = t.target.scrollLeft,
                    this.scrolling = !0
                },
                onFullscreenChange: function() {
                    var t = this;
                    this.fullscreen = !!document.fullscreenElement,
                    this.fullscreen || (this.fullscreenCustom = !1),
                    this.$nextTick(function() {
                        t.updateSize()
                    })
                },
                openFullscreen: function() {
                    var t = this;
                    this.$refs.container.requestFullscreen ? this.$refs.container.requestFullscreen() : this.$refs.container.mozRequestFullScreen ? this.$refs.container.mozRequestFullScreen() : this.$refs.container.webkitRequestFullScreen ? this.$refs.container.webkitRequestFullscreen() : this.$refs.container.msRequestFullscreen ? this.$refs.container.msRequestFullscreen() : (this.fullscreen = !0,
                    this.fullscreenCustom = !0,
                    this.$nextTick(function() {
                        t.updateSize()
                    }))
                },
                closeFullscreen: function() {
                    var t = this;
                    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : (this.fullscreen = !1,
                    this.fullscreenCustom = !1,
                    this.$nextTick(function() {
                        t.updateSize()
                    }))
                }
            }),
            mounted: function() {
                this.$refs.container.addEventListener("fullscreenchange", this.onFullscreenChange)
            },
            beforeDestroy: function() {
                this.$refs.container.removeEventListener("fullscreenchange", this.onFullscreenChange),
                this.app && this.app.destroy()
            }
        }
          , y = g
          , v = (i("c8cb"),i("2877"))
          , b = Object(v["a"])(y, p, m, !1, null, "e5593030", null)
          , C = b.exports
          , S = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.vshow,
                    expression: "vshow"
                }],
                ref: "container",
                class: {
                    fullscreen: t.fullscreenCustom,
                    normal: !t.fullscreenCustom
                }
            }, [i("div", {
                class: {
                    "fullscreen-control": t.fullscreen,
                    "m-lr-s": !t.fullscreen,
                    "m-b-s": !t.fullscreen,
                    fade: t.fullscreen && !t.fullscreenMouseOver
                },
                on: {
                    mouseover: function(e) {
                        t.fullscreenMouseOver = !0
                    },
                    mouseleave: function(e) {
                        t.fullscreenMouseOver = !1
                    }
                }
            }, [i("div", {
                staticClass: "buttons has-addons max-width-30 m-lr-auto"
            }, [i("a", {
                staticClass: "button is-small is-rounded round",
                attrs: {
                    disabled: !t.howlLoaded
                },
                on: {
                    click: t.onProgressPlay
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: t.howlPlaying ? "fas fa-pause" : "fas fa-play"
                    }
                }
            })], 1), i("a", {
                staticClass: "button is-small is-rounded round is-static",
                class: {
                    "time-display": t.howlLoaded,
                    "is-loading": !t.howlLoaded
                },
                attrs: {
                    disabled: !t.howlLoaded
                }
            }, [t.howlLoaded ? [t._v("\n                    " + t._s(t._f("time")(Math.floor(t.howlSeek), !0)) + " /\n                    " + t._s(t._f("time")(Math.floor(t.howlDuration), !0)) + "\n                ")] : [i("span", {
                staticClass: "icon"
            })]], 2), i("a", {
                staticClass: "button is-small is-rounded round is-expanded progress-container",
                attrs: {
                    disabled: !t.howlLoaded
                },
                on: {
                    mousemove: t.onProgressMove,
                    mousedown: t.onProgressDown
                }
            }, [t.howlLoaded ? [i("span", {
                ref: "progress",
                staticClass: "progress-background"
            }), i("span", {
                staticClass: "progress-bar",
                style: {
                    width: "calc((100% - 1.5em) * " + t.howlSeek / t.howlDuration + ")"
                }
            })] : [t._v("\n                    " + t._s(t._f("t")("txtLoading")) + "\n                ")]], 2), t.fullscreen ? t._e() : i("a", {
                staticClass: "button is-small is-rounded round",
                on: {
                    click: function(e) {
                        t.showPlayerExtension = !t.showPlayerExtension
                    }
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: t.showPlayerExtension ? "fas fa-angle-up" : "fas fa-angle-down"
                    }
                }
            })], 1), t.fullscreen ? i("a", {
                staticClass: "button is-small is-rounded round",
                on: {
                    click: t.closeFullscreen
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-compress"
                    }
                }
            })], 1) : t._e()]), !t.fullscreen && t.showPlayerExtension ? i("div", {
                staticClass: "player-extension has-text-centered"
            }, [i("div", {
                staticClass: "field is-grouped is-grouped-multiline is-grouped-centered"
            }, [i("div", {
                staticClass: "control"
            }, [i("div", {
                staticClass: "buttons has-addons"
            }, [i("a", {
                staticClass: "button is-small is-rounded round",
                attrs: {
                    disabled: !t.howlLoaded || t.volume <= 0
                },
                on: {
                    click: function(e) {
                        return t.onProgressVolume(!1)
                    }
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-volume-down"
                    }
                }
            })], 1), i("a", {
                staticClass: "button is-small is-rounded round is-static",
                attrs: {
                    disabled: !t.howlLoaded
                }
            }, [t._v("\n                            " + t._s((100 * t.volume).toFixed(0)) + "\n                        ")]), i("a", {
                staticClass: "button is-small is-rounded round",
                attrs: {
                    disabled: !t.howlLoaded || t.volume >= 1
                },
                on: {
                    click: function(e) {
                        return t.onProgressVolume(!0)
                    }
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-volume-up"
                    }
                }
            })], 1)])]), i("div", {
                staticClass: "control"
            }, [i("div", {
                staticClass: "buttons has-addons"
            }, [i("a", {
                staticClass: "button is-small is-rounded round",
                attrs: {
                    disabled: !t.howlLoaded || t.howlSpeed <= 0
                },
                on: {
                    click: function(e) {
                        return t.onProgressSpeed(!1)
                    }
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-backward"
                    }
                }
            })], 1), i("a", {
                staticClass: "button is-small is-rounded round is-static",
                attrs: {
                    disabled: !t.howlLoaded
                }
            }, [t._v("\n                            " + t._s(t.howlRate) + "x\n                        ")]), i("a", {
                staticClass: "button is-small is-rounded round",
                attrs: {
                    disabled: !t.howlLoaded || t.howlSpeed >= 4
                },
                on: {
                    click: function(e) {
                        return t.onProgressSpeed(!0)
                    }
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-forward"
                    }
                }
            })], 1)])]), i("div", {
                staticClass: "control"
            }, [i("a", {
                class: ["button is-small is-rounded round-single", {
                    "is-focused": t.loop
                }],
                attrs: {
                    disabled: !t.howlLoaded
                },
                on: {
                    click: function(e) {
                        t.loop = !t.loop
                    }
                }
            }, [i("my-icon", {
                attrs: {
                    icon: {
                        fa: "fas fa-redo-alt"
                    }
                }
            })], 1)])])]) : t._e()]), i("canvas", {
                ref: "canvas",
                staticClass: "is-block"
            })])
        }
          , k = []
          , x = i("e814")
          , M = i.n(x)
          , L = i("59ad")
          , _ = i.n(L)
          , w = (i("cadf"),
        i("551c"),
        i("f751"),
        i("097d"),
        i("9033"))
          , N = {
            name: "MySongSimulator",
            components: {
                MyIcon: l["a"]
            },
            props: {
                show: Boolean,
                songData: Object
            },
            mixins: [w["a"]],
            data: function() {
                return {
                    urlSongMP3: null,
                    howl: null,
                    howlSE: [],
                    howlSpeed: 2,
                    howlLoaded: !1,
                    howlPlaying: !1,
                    howlSeek: 0,
                    howlSeekPrev: 0,
                    howlDuration: 0,
                    showPlayerExtension: !1,
                    app: null,
                    width: null,
                    height: null,
                    needRender: !1,
                    fullscreen: !1,
                    fullscreenCustom: !1,
                    fullscreenMouseOver: !1,
                    layerBG: null,
                    layerLaneEffect: null,
                    graphicsNoteBar: null,
                    layerParticles: null,
                    layerParticlesLong: null,
                    layerNoteBG: null,
                    layerLine: null,
                    layerNote: null,
                    layerNoteFG: null,
                    layerFG: null,
                    spriteLiveBG: null,
                    spriteLiveLane: null,
                    spriteLiveLine: null,
                    spriteCombo: null,
                    spriteLaneEffects: [],
                    spriteNotes: [],
                    spriteParticles: [],
                    spriteNumbers: [],
                    apiSongs: null,
                    apiGraphics: null
                }
            },
            computed: Object(n["a"])({}, Object(f["d"])("player", {
                playerHowl: "howl",
                playerIsHowlLoaded: "isHowlLoaded",
                playerIsHowlPlaying: "isHowlPlaying",
                volume: "volume"
            }), Object(o["a"])({
                simNoteSE: {
                    name: "tool/chartsimulator/simNoteSE",
                    defvalue: 0,
                    type: "number"
                },
                simNoteSEVolume: {
                    name: "tool/chartsimulator/simNoteSEVolume",
                    defvalue: 1,
                    type: "number"
                },
                simNoteSpeed: {
                    name: "tool/chartsimulator/simNoteSpeed",
                    defvalue: 5,
                    type: "number"
                },
                simTapEffect: {
                    name: "tool/chartsimulator/simTapEffect",
                    defvalue: 0,
                    type: "number"
                },
                simLaneEffect: {
                    name: "tool/chartsimulator/simLaneEffect",
                    defvalue: 0,
                    type: "number"
                },
                simBackground: {
                    name: "tool/chartsimulator/simBackground",
                    defvalue: 0,
                    type: "number"
                },
                styleNoteSize: {
                    name: "tool/chartsimulator/styleNoteSize",
                    defvalue: 1,
                    type: "number"
                },
                styleLongAlpha: {
                    name: "tool/chartsimulator/styleLongAlpha",
                    defvalue: .8,
                    type: "number"
                },
                styleDualLine: {
                    name: "tool/chartsimulator/styleDualLine",
                    defvalue: 0,
                    type: "number"
                },
                styleOffBeat: {
                    name: "tool/chartsimulator/styleOffBeat",
                    defvalue: 0,
                    type: "number"
                },
                styleMirror: {
                    name: "tool/chartsimulator/styleMirror",
                    defvalue: 1,
                    type: "number"
                },
                styleLaneType: {
                    name: "tool/chartsimulator/styleLaneType",
                    defvalue: 0,
                    type: "number"
                },
                styleNoteType: {
                    name: "tool/chartsimulator/styleNoteType",
                    defvalue: 0,
                    type: "number"
                },
                loop: {
                    name: "tool/radio/loop",
                    defvalue: !1,
                    type: "boolean"
                }
            }), {
                PIXI: function() {
                    return this.$root.PIXI
                },
                resources: function() {
                    return this.$root.PIXIResourcesChartSimulator
                },
                vshow: function() {
                    return this.show && this.PIXI && this.resources && this.songData
                },
                howlRate: function() {
                    return [.5, .75, 1, 1.5, 2][this.howlSpeed]
                },
                size: function() {
                    return {
                        width: this.width,
                        height: this.height
                    }
                },
                laneWidth: function() {
                    return .8 * this.width
                },
                laneHeight: function() {
                    return this.laneWidth / 2 / .875
                },
                lineOffset: function() {
                    return 1.225 * this.laneHeight * (.5 - .225 / 1.225)
                },
                noteScreenTime: function() {
                    return 5.5 - (this.simNoteSpeed - 1) / 2
                },
                noteWidth: function() {
                    return this.laneWidth / 7 * this.styleNoteSize
                },
                barColor: function() {
                    return [4973425, 7398219, 60108, 2087251, 60053][this.styleNoteType]
                },
                mapNotes: function() {
                    if (this.apiGraphics) {
                        var t = []
                          , e = -1;
                        return this.apiGraphics.forEach(function(i, a) {
                            switch (i.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Flick":
                            case "Skill":
                            case "Tick":
                            case "Sim":
                                for (var s = Math.floor(i.time), n = e + 1; n <= s; n++)
                                    void 0 === t[n] && (t[n] = a);
                                e = s;
                                break
                            }
                        }),
                        t
                    }
                    return null
                },
                mapBars: function() {
                    if (this.apiGraphics) {
                        var t = []
                          , e = -1;
                        return this.apiGraphics.forEach(function(i, a) {
                            switch (i.type) {
                            case "Bar":
                                for (var s = Math.floor(i.time[1]), n = e + 1; n <= s; n++)
                                    void 0 === t[n] && (t[n] = a);
                                e = s;
                                break
                            }
                        }),
                        t
                    }
                    return null
                },
                mapCombo: function() {
                    if (this.apiGraphics) {
                        var t = []
                          , e = 0;
                        return this.apiGraphics.forEach(function(i) {
                            switch (i.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Flick":
                            case "Skill":
                            case "Tick":
                                e++;
                                break
                            }
                            t.push(e)
                        }),
                        t
                    }
                    return null
                },
                noteSEVolume: function() {
                    return this.simNoteSEVolume * this.volume
                }
            }),
            watch: {
                "$root.tickerFrame": "onFrame",
                "$root.windowWidth": "updateSize",
                "$root.windowHeight": "updateSize",
                songData: {
                    immediate: !0,
                    handler: function() {
                        var t = this;
                        if (this.apiGraphics = null,
                        this.urlSongMP3 = null,
                        this.resolveSongMP3(this.songData).then(function(e) {
                            return t.urlSongMP3 = e
                        }),
                        this.songData)
                            switch (this.songData.type) {
                            case "original":
                                this.api({
                                    url: "songs/chart/graphics/simulator/" + this.songData.id + "." + ["easy", "normal", "hard", "expert", "special"][this.songData.diff]
                                }).then(function(e) {
                                    t.apiGraphics = e
                                });
                                break;
                            default:
                                this.apiGraphics = this.songData.graphicsSimulator
                            }
                    }
                },
                vshow: function() {
                    var t = this;
                    this.vshow || this.howl && this.howlLoaded && this.howlPlaying && this.howl.pause(),
                    this.apiSongs || this.api({
                        url: "songs/all.player"
                    }).then(function(e) {
                        t.apiSongs = e
                    }),
                    0 === this.howlSE.length && this.initHowlSE(),
                    this.initPIXI(),
                    this.$nextTick(function() {
                        t.updateSize()
                    })
                },
                urlSongMP3: function() {
                    var t = this;
                    this.unloadHowl(),
                    this.urlSongMP3 && i.e("howler").then(i.t.bind(null, "1e5c", 7)).then(function(e) {
                        var i = e.default;
                        t.howl = new i.Howl({
                            src: [t.urlSongMP3],
                            format: ["mp3"],
                            html5: !0,
                            volume: t.volume,
                            rate: t.howlRate,
                            loop: t.loop,
                            onload: t.onHowlLoad,
                            onloaderror: function() {
                                t.apiError(t.urlSongMP3)
                            }
                        })
                    })
                },
                howlRate: function() {
                    this.howl && this.howl.rate(this.howlRate)
                },
                volume: function() {
                    this.howl && this.howl.volume(this.volume)
                },
                loop: function() {
                    this.howl && this.howl.loop(this.loop)
                },
                size: function() {
                    this.resizeApp(),
                    this.updateBG(),
                    this.updateLane(),
                    this.updateParticles(),
                    this.updateLaneEffects(),
                    this.positionCombo(),
                    this.needRender = !0
                },
                app: function() {
                    this.createNotes(),
                    this.createParticles(),
                    this.resizeNotes(),
                    this.updateParticles(),
                    this.needRender = !0
                },
                apiGraphics: function() {
                    this.createNotes(),
                    this.createParticles(),
                    this.resizeNotes(),
                    this.updateParticles(),
                    this.needRender = !0
                },
                styleLaneType: function() {
                    this.createLane(),
                    this.updateLane(),
                    this.needRender = !0
                },
                styleNoteType: function() {
                    this.createNotes(),
                    this.resizeNotes(),
                    this.needRender = !0
                },
                noteWidth: function() {
                    this.resizeNotes(),
                    this.updateParticles(),
                    this.needRender = !0
                },
                styleLongAlpha: function() {
                    this.needRender = !0
                },
                styleMirror: function() {
                    this.createNotes(),
                    this.resizeNotes(),
                    this.updateParticles(),
                    this.needRender = !0
                },
                styleDualLine: function() {
                    this.needRender = !0
                },
                styleOffBeat: function() {
                    this.createNotes(),
                    this.resizeNotes(),
                    this.needRender = !0
                },
                simNoteSpeed: function() {
                    this.needRender = !0
                },
                simNoteSE: function() {
                    this.initHowlSE()
                },
                noteSEVolume: function() {
                    this.updateHowlSEVolume()
                },
                simTapEffect: function() {
                    this.needRender = !0
                },
                simLaneEffect: function() {
                    this.needRender = !0
                },
                simBackground: function() {
                    this.updateBG(),
                    this.needRender = !0
                }
            },
            methods: Object(n["a"])({}, Object(f["b"])("api", {
                api: "get",
                apiError: "error"
            }), Object(f["b"])("player", {
                playerPause: "pause",
                setVolume: "setVolume"
            }), {
                initHowlSE: function() {
                    var t = this;
                    this.howlSE.forEach(function(t) {
                        t.unload()
                    }),
                    this.howlSE = [],
                    i.e("howler").then(i.t.bind(null, "1e5c", 7)).then(function(e) {
                        var i = e.default;
                        t.howlSE.push(new i.Howl({
                            src: ["/se/note_normal_" + t.simNoteSE + ".wav"],
                            volume: t.noteSEVolume
                        })),
                        t.howlSE.push(new i.Howl({
                            src: ["/se/note_flick_" + t.simNoteSE + ".wav"],
                            volume: t.noteSEVolume
                        })),
                        t.howlSE.push(new i.Howl({
                            src: ["/se/note_skill.wav"],
                            volume: t.noteSEVolume
                        }))
                    })
                },
                updateHowlSEVolume: function() {
                    var t = this;
                    this.howlSE.forEach(function(e) {
                        e.volume(t.noteSEVolume)
                    })
                },
                onHowlLoad: function() {
                    if (this.howlLoaded = !0,
                    this.howlDuration = this.howl.duration(),
                    this.$route.query.t) {
                        var t = Math.max(0, Math.min(this.howlDuration, _()(this.$route.query.t)));
                        isNaN(t) || this.howl.seek(t)
                    }
                },
                unloadHowl: function() {
                    this.howl && (this.howl.unload(),
                    this.howl = null),
                    this.howlLoaded = !1,
                    this.howlPlaying = !1
                },
                emitTChange: function(t) {
                    this.$emit("tChange", Math.floor(10 * t) / 10)
                },
                onProgressPlay: function() {
                    this.howl && this.howlLoaded && (this.howlPlaying ? (this.howl.pause(),
                    this.emitTChange(this.howlSeek)) : (this.playerHowl && this.playerIsHowlLoaded && this.playerIsHowlPlaying && this.playerPause(),
                    this.howl.play()))
                },
                onProgressMove: function(t) {
                    1 === t.buttons && this.onProgressGoto(t.clientX)
                },
                onProgressDown: function(t) {
                    void 0 !== t.buttons && 0 !== t.buttons && 1 !== t.buttons || this.onProgressGoto(t.clientX)
                },
                onProgressGoto: function(t) {
                    if (this.howl && this.howlLoaded) {
                        var e = this.$refs.progress.getBoundingClientRect()
                          , i = Math.max(0, Math.min(1, (t - e.left) / e.width));
                        this.howl.seek(i * this.howlDuration),
                        this.emitTChange(i * this.howlDuration)
                    }
                },
                onProgressVolume: function(t) {
                    this.setVolume(this.volume + .1 * (t ? 1 : -1))
                },
                onProgressSpeed: function(t) {
                    this.howlSpeed = Math.max(0, Math.min(4, this.howlSpeed + (t ? 1 : -1)))
                },
                onFrame: function() {
                    this.onFrameHowl(),
                    this.onFramePIXI()
                },
                onFrameHowl: function() {
                    if (this.howl && this.howlLoaded) {
                        this.howlPlaying = this.howl.playing();
                        var t = this.howl.seek();
                        "number" === typeof t && (this.howlSeek = t)
                    }
                },
                onFramePIXI: function() {
                    var t = this;
                    if (this.app && this.apiGraphics && this.spriteNotes.length && (this.howlSeekPrev !== this.howlSeek || this.needRender)) {
                        var e, i, a, s, n, o, r, l, c, h;
                        this.layerParticles.removeChildren(),
                        this.layerParticlesLong.removeChildren(),
                        this.layerNoteBG.removeChildren(),
                        this.layerNote.removeChildren(),
                        this.layerNoteFG.removeChildren(),
                        this.layerFG.removeChildren();
                        var u = this.apiGraphics.length;
                        for (e = !1,
                        a = Math.floor(this.howlSeek),
                        i = this.mapNotes[a]; i < u; i++) {
                            if (this.spriteNotes[i])
                                switch (s = this.apiGraphics[i],
                                n = s.time - this.howlSeek,
                                s.type) {
                                case "Single":
                                case "SingleOff":
                                case "Long":
                                case "Flick":
                                case "Skill":
                                case "Tick":
                                    c = n >= 0 && n <= this.noteScreenTime,
                                    c && (r = this.timeToPos(n, 0 === this.styleMirror ? 8 - s.lane : s.lane),
                                    h = r.scale * this.noteWidth / 154 * .64,
                                    this.spriteNotes[i].forEach(function(e, i) {
                                        e.position.set(t.width / 2 + r.x, t.height / 2 + t.lineOffset + r.y),
                                        e.scale.set(h, h),
                                        0 === i ? t.layerNote.addChild(e) : t.layerNoteFG.addChild(e)
                                    })),
                                    n > this.noteScreenTime && (e = !0);
                                    break;
                                case "Sim":
                                    c = 0 === this.styleDualLine && n >= 0 && n <= this.noteScreenTime,
                                    c && (r = this.timeToPos(n, 0 === this.styleMirror ? 8 - s.lane[1] : s.lane[0]),
                                    l = this.timeToPos(n, 0 === this.styleMirror ? 8 - s.lane[0] : s.lane[1]),
                                    h = r.scale * this.noteWidth / 154 * .64,
                                    this.spriteNotes[i].forEach(function(e) {
                                        e.position.set(t.width / 2 + r.x, t.height / 2 + t.lineOffset + r.y),
                                        e.width = l.x - r.x,
                                        e.height = e.texture.height * h,
                                        t.layerNoteBG.addChild(e)
                                    })),
                                    n > this.noteScreenTime && (e = !0);
                                    break
                                }
                            if (e)
                                break
                        }
                        for (this.graphicsNoteBar.visible = !1,
                        i = this.mapBars[a]; i < u; i++)
                            if (s = this.apiGraphics[i],
                            "Bar" === s.type) {
                                if (n = s.time[0] - this.howlSeek, // bar的时间是一个长度为2的list
                                o = s.time[1] - this.howlSeek,
                                c = n >= 0 || o >= 0,	// 用n算的是bar出现时间 o算的是结束时间
                                c && (r = this.timeToPos(n, 0 === this.styleMirror ? 8 - s.lane[0] : s.lane[0]),
                                r.visible)) {	//r是出现时间相关 l是结束时间相关
                                    if (l = this.timeToPos(o, 0 === this.styleMirror ? 8 - s.lane[1] : s.lane[1]),
                                    n < 0) {	//n < 0意味着bar的最初的部分已经过了判定了
                                        h = -l.y / (r.y - l.y);
                                        var d = s.lane[0] + (s.lane[1] - s.lane[0]) * n / (n - o);
                                        r = this.timeToPos(0, 0 === this.styleMirror ? 8 - d : d),
                                        this.spriteNotes[i] && this.spriteNotes[i].forEach(function(e) {
                                            e.position.set(t.width / 2 + r.x, t.height / 2 + t.lineOffset),
                                            t.layerNote.addChild(e)
                                        }),	
                                        0 === this.simTapEffect && this.spriteParticles[i] && this.spriteParticles[i].forEach(function(e, i) {
                                            e.position.set(t.width / 2 + r.x, t.height / 2 + t.lineOffset),
                                            0 === i ? t.layerParticles.addChild(e) : (e.children[0].rotation = 2 * n * Math.PI,
                                            e.children[1].rotation = -2 * n * Math.PI,
                                            t.layerParticlesLong.addChild(e))
                                        })
                                    }
                                    var p, m, f;
                                    h = r.scale * this.noteWidth / 154 * .64; // useless?
                                    var g = [];
                                    p = this.width / 2 + r.x,
                                    m = this.height / 2 + this.lineOffset + r.y,
                                    f = this.noteWidth / 2 * r.scale,
                                    g.push(p - f),
                                    g.push(m),
                                    g.push(p + f),
                                    g.push(m),
                                    p = this.width / 2 + l.x,
                                    m = this.height / 2 + this.lineOffset + l.y,
                                    f = this.noteWidth / 2 * l.scale,
                                    g.push(p + f),
                                    g.push(m),
                                    g.push(p - f),
                                    g.push(m),
                                    this.graphicsNoteBar.visible || (this.graphicsNoteBar.clear(),
                                    this.graphicsNoteBar.visible = !0),
                                    this.graphicsNoteBar.beginFill(this.barColor, .5 * this.styleLongAlpha),
                                    this.graphicsNoteBar.drawPolygon(g),	
									//绘制多边形 8个数字 估计是4个二维坐标 前两个和后两个 纵坐标各自相同
                                    this.graphicsNoteBar.endFill()
                                }
                                if (n > this.noteScreenTime)
                                    break
                            }
                        if (this.noteSEVolume && this.howlSeek > this.howlSeekPrev && this.howlSeek - this.howlSeekPrev <= .2 && this.howlSE.length)
                            for (e = !1,
                            a = Math.floor(this.howlSeekPrev),
                            i = this.mapNotes[a]; i < u; i++)
                                if (s = this.apiGraphics[i],
                                s.time > this.howlSeekPrev)
                                    if (s.time <= this.howlSeek)
                                        switch (s.type) {
                                        case "Single":
                                        case "SingleOff":
                                        case "Long":
                                        case "Tick":
                                            this.howlSE[0].play();
                                            break;
                                        case "Flick":
                                            this.howlSE[1].play();
                                            break;
                                        case "Skill":
                                            this.howlSE[2].play();
                                            break
                                        }
                                    else
                                        e = !0;
                        e = !1,
                        a = Math.max(0, Math.floor(this.howlSeek - .8));
                        var y = -1 / 0
                          , v = [-1 / 0, -1 / 0, -1 / 0, -1 / 0, -1 / 0, -1 / 0, -1 / 0]
                          , b = null;
                        for (i = this.mapNotes[a]; i < u; i++) {
                            var C = this.spriteParticles[i];
                            if (C)
                                switch (s = this.apiGraphics[i],
                                n = s.time - this.howlSeek,
                                s.type) {
                                case "Single":
                                case "SingleOff":
                                case "Long":
                                case "Flick":
                                case "Skill":
                                case "Tick":
                                    n <= 0 ? (b = i,
                                    y = Math.max(n, y),
                                    0 === this.simLaneEffect && (v[s.lane - 1] = Math.max(n, v[s.lane - 1])),
                                    n > -.8 && 0 === this.simTapEffect && (C[0].alpha = n > -.2 ? 1 : (n + .8) / .6,
                                    C[4] && (C[4].alpha = n > -.2 ? .5 : n < -.4 ? 0 : .5 * (n + .4) / .2),
                                    h = 2.5 * this.noteWidth * (n > -.5 ? 4 * (-n * n - n) : 1),
                                    "Flick" === s.type ? (C[3].width = n > -.2 ? 1.5 * this.noteWidth * (n + .2) / .2 : 0,
                                    C[3].height = n > -.2 ? 2 * this.noteWidth * (2 - n / .2) : 0) : (C[3].width = h,
                                    C[3].height = .7 * h),
                                    h += .5 * this.noteWidth,
                                    C[2].width = h,
                                    C[2].height = .7 * h,
                                    C[1].width = h,
                                    C[1].height = .7 * h,
                                    h = n > -.3 ? .5 : n < -.5 ? 0 : .5 * (n + .5) / .2,
                                    "Flick" === s.type ? C[3].alpha = n > -.2 ? .5 : 0 : C[3].alpha = h,
                                    C[2].alpha = h,
                                    C[1].alpha = n > -.3 ? .5 : n < -.6 ? 0 : .5 * (n + .6) / .3,
                                    C.forEach(function(e) {
                                        t.layerParticles.addChild(e)
                                    }))) : e = !0;
                                    break
                                }
                            if (e)
                                break
                        }
                        null === b && (b = this.mapNotes[a] - 1);
                        var S = b < 0 ? 0 : this.mapCombo[b];
                        if (S) {
                            var k = S.toString()
                              , x = y < -.2 ? 1 : y < -.1 ? y + .2 + 1 : 1.1 - 3 * (y + .1);
                            h = x * this.width / 10 / this.spriteCombo.texture.width,
                            this.spriteCombo.scale.set(h, h),
                            this.layerFG.addChild(this.spriteCombo);
                            var L = .83 * this.width
                              , _ = (k.length - 1) / 2
                              , w = this.height / 2 - .02 * this.width
                              , N = x * this.width * .05;
                            h = N / 82;
                            for (var P = 0; P < k.length; P++) {
                                var I = this.spriteNumbers[P][M()(k.charAt(P))];
                                I.position.set(L + (P - _) * N * .85, w),
                                I.scale.set(h, h),
                                this.layerFG.addChild(I)
                            }
                        }
                        for (P = 0; P < 7; P++)
                            n = v[0 === this.styleMirror ? 6 - P : P],
                            this.spriteLaneEffects[P].alpha = n > -.2 ? (n + .2) / .2 : 0;
                        this.howlSeekPrev = this.howlSeek,
                        this.needRender = !1,
                        this.render()
                    }
                },
                timeToPos: function(t, e) {
                    var i = t <= this.noteScreenTime
                      , a = -.94 * this.laneHeight;
                    a *= 1 - Math.pow(1.1, -t / this.noteScreenTime * 50);
                    var s = (a + this.laneHeight) / this.laneHeight;
                    return {
                        visible: i,
                        x: (e - 4) * this.laneWidth / 7 * s,
                        y: a,
                        scale: s
                    }
                },
                updateSize: function() {
                    if (this.vshow && this.$refs.container) {
                        var t = this.$refs.container.clientWidth
                          , e = this.$refs.container.clientHeight;
                        t * e && (this.width = t,
                        this.fullscreen ? this.height = e : this.height = .56 * this.width)
                    }
                },
                resizeApp: function() {
                    this.app && this.app.renderer.resize(this.width, this.height)
                },
                initPIXI: function() {
                    this.vshow && !this.app && (this.app = new this.PIXI.Application({
                        view: this.$refs.canvas,
                        autoStart: !1,
                        backgroundColor: 0,
                        preserveDrawingBuffer: !0,
                        antialias: !0,
                        autoDensity: !0,
                        resolution: window.devicePixelRatio
                    }),
                    this.layerBG = new this.PIXI.Container,
                    this.layerLaneEffect = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0,
                        tint: !0
                    }),
                    this.graphicsNoteBar = new this.PIXI.Graphics,
                    this.layerParticles = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0,
                        tint: !0
                    }),
                    this.layerParticlesLong = new this.PIXI.Container,
                    this.layerNoteBG = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.layerLine = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.layerNote = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.layerNoteFG = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.layerFG = new this.PIXI.ParticleContainer(1500,{
                        vertices: !0
                    }),
                    this.app.stage.addChild(this.layerBG),
                    this.app.stage.addChild(this.layerLaneEffect),
                    this.app.stage.addChild(this.graphicsNoteBar),
                    this.app.stage.addChild(this.layerParticles),
                    this.app.stage.addChild(this.layerParticlesLong),
                    this.app.stage.addChild(this.layerNoteBG),
                    this.app.stage.addChild(this.layerLine),
                    this.app.stage.addChild(this.layerNote),
                    this.app.stage.addChild(this.layerNoteFG),
                    this.app.stage.addChild(this.layerFG),
                    this.createBG(),
                    this.createLane(),
                    this.createCombo(),
                    this.createLaneEffects())
                },
                createBG: function() {
                    this.spriteLiveBG && this.spriteLiveBG.destroy(),
                    this.spriteLiveBG = new this.PIXI.Sprite(this.resources["/atlas/bgs.json"].textures["liveBG_normal.png"]),
                    this.spriteLiveBG.alpha = .8,
                    this.layerBG.addChild(this.spriteLiveBG)
                },
                createLane: function() {
                    this.spriteLiveLane && this.spriteLiveLane.destroy(),
                    this.spriteLiveLine && this.spriteLiveLine.destroy(),
                    this.spriteLiveLane = new this.PIXI.Sprite(this.resources["/atlas/lane " + this.styleLaneType + ".json"].textures["bg_line_rhythm.png"]),
                    this.spriteLiveLine = new this.PIXI.Sprite(this.resources["/atlas/lane " + this.styleLaneType + ".json"].textures["game_play_line.png"]),
                    this.layerBG.addChild(this.spriteLiveLane),
                    this.layerLine.addChild(this.spriteLiveLine)
                },
                createCombo: function() {
                    this.spriteCombo && this.spriteCombo.destroy(),
                    this.spriteNumbers.forEach(function(t) {
                        t.forEach(function(t) {
                            t.destroy
                        })
                    }),
                    this.spriteCombo = new this.PIXI.Sprite(this.resources["/atlas/common.json"].textures["combo.png"]),
                    this.spriteNumbers = [];
                    for (var t = 0; t < 4; t++) {
                        for (var e = [], i = 0; i < 10; i++)
                            e.push(new this.PIXI.Sprite(this.resources["/atlas/common.json"].textures[i + ".png"]));
                        this.spriteNumbers.push(e)
                    }
                },
                createNotes: function() {
                    var t = this;
                    if (this.app && this.apiGraphics) {
                        this.spriteNotes.forEach(function(t) {
                            t.forEach(function(t) {
                                t.destroy()
                            })
                        });
                        var e = this.resources["/atlas/note " + this.styleNoteType + ".json"].textures
                          , i = [];
                        this.apiGraphics.forEach(function(a) {
                            var s, n, o = [], r = 0 === t.styleMirror ? 7 - a.lane : a.lane - 1;
                            switch (a.type) {
                            case "Single":
                                n = ["note_normal_" + r];
                                break;
                            case "SingleOff":
                                n = 0 === t.styleOffBeat ? ["note_normal_gray_" + r] : ["note_normal_" + r];
                                break;
                            case "Long":
                                n = ["note_long_" + r];
                                break;
                            case "Flick":
                                n = ["note_flick_" + r, "note_flick_top"];
                                break;
                            case "Skill":
                                n = ["note_skill_" + r];
                                break;
                            case "Tick":
                                n = ["note_slide_among"];
                                break;
                            case "Sim":
                                n = ["simultaneous_line"];
                                break;
                            case "Bar":
                                n = ["note_long_" + (0 === t.styleMirror ? 7 - a.lane[0] : a.lane[0] - 1)];
                                break
                            }
                            n && n.forEach(function(i) {
                                s = new t.PIXI.Sprite(e[i + ".png"]),
                                o.push(s)
                            }),
                            i.push(o)
                        }),
                        this.spriteNotes = i
                    }
                },
                createParticles: function() {
                    var t = this;
                    if (this.app && this.apiGraphics) {
                        this.spriteParticles.forEach(function(t) {
                            t.forEach(function(t) {
                                t.destroy()
                            })
                        });
                        var e = this.resources["/atlas/particles.json"].textures
                          , i = [];
                        this.apiGraphics.forEach(function(a) {
                            var s = [];
                            switch (a.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Tick":
                            case "Skill":
                            case "Flick":
                                s.push(new t.PIXI.Sprite(e["light_base.png"])),
                                s.push(new t.PIXI.Sprite(e["circle.png"])),
                                s.push(new t.PIXI.Sprite(e["ring.png"]));
                                break;
                            case "Bar":
                                s.push(new t.PIXI.Sprite(e["ring_long.png"])),
                                s.push(new t.PIXI.Container),
                                s[1].addChild(new t.PIXI.Sprite(e["spin.png"])),
                                s[1].addChild(new t.PIXI.Sprite(e["spin.png"])),
                                s[1].children[0].tint = 65535,
                                s[1].children[1].tint = 65535;
                                break
                            }
                            switch (a.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Tick":
                                s.push(new t.PIXI.Sprite(e["ring.png"])),
                                s.push(new t.PIXI.Sprite(e["light_normal.png"])),
                                s[0].tint = 8454143,
                                s[1].tint = 12648447,
                                s[4].tint = 8454143;
                                break;
                            case "Skill":
                                s.push(new t.PIXI.Sprite(e["star.png"])),
                                s.push(new t.PIXI.Sprite(e["light_skill.png"])),
                                s[0].tint = 16777088,
                                s[1].tint = 16777152,
                                s[3].tint = 16777088,
                                s[4].tint = 16777088;
                                break;
                            case "Flick":
                                s.push(new t.PIXI.Sprite(e["circle.png"])),
                                s[0].tint = 16744703,
                                s[1].tint = 16761087,
                                s[3].tint = 16769279;
                                break
                            }
                            i.push(s)
                        }),
                        this.spriteParticles = i
                    }
                },
                createLaneEffects: function() {
                    this.spriteLaneEffects.forEach(function(t) {
                        t.destroy
                    }),
                    this.spriteLaneEffects = [];
                    for (var t = 0; t < 7; t++) {
                        var e = new this.PIXI.Sprite(this.resources["/atlas/common.json"].textures["lane_effect_" + (t < 4 ? t : 6 - t) + ".png"]);
                        this.spriteLaneEffects.push(e),
                        this.layerLaneEffect.addChild(e)
                    }
                },
                resizeNotes: function() {
                    var t = this;
                    if (this.app && this.apiGraphics) {
                        var e = this.noteWidth / 154 * .64;
                        this.apiGraphics.forEach(function(i, a) {
                            var s = t.spriteNotes[a];
                            if (s)
                                switch (i.type) {
                                case "Bar":
                                    s.forEach(function(t) {
                                        t.scale.set(e, e)
                                    });
                                    break
                                }
                        })
                    }
                },
                updateBG: function() {
                    this.app && (this.spriteLiveBG.width = 4 * this.width / 3,
                    this.spriteLiveBG.height = .75 * this.spriteLiveBG.width,
                    this.spriteLiveBG.position.set(this.width / 2, this.height / 2),
                    this.spriteLiveBG.visible = 0 === this.simBackground)
                },
                updateLane: function() {
                    var t;
                    this.app && (t = this.spriteLiveLane.texture.height / this.spriteLiveLane.texture.width,
                    this.spriteLiveLane.width = 1160 * this.laneWidth / 1080,
                    this.spriteLiveLane.height = t * this.spriteLiveLane.width,
                    this.spriteLiveLane.position.set(this.width / 2, this.height / 2 + this.lineOffset),
                    t = this.spriteLiveLine.texture.height / this.spriteLiveLine.texture.width,
                    this.spriteLiveLine.width = this.laneWidth / .6,
                    this.spriteLiveLine.height = t * this.spriteLiveLine.width,
                    this.spriteLiveLine.position.set(this.width / 2, this.height / 2 + this.lineOffset))
                },
                updateParticles: function() {
                    var t, e = this;
                    this.app && this.apiGraphics && this.apiGraphics.forEach(function(i, a) {
                        var s = e.spriteParticles[a];
                        if (s)
                            switch (i.type) {
                            case "Single":
                            case "SingleOff":
                            case "Long":
                            case "Flick":
                            case "Skill":
                            case "Tick":
                                s.forEach(function(t) {
                                    t.position.set(e.width / 2 + ((0 === e.styleMirror ? 8 - i.lane : i.lane) - 4) * e.laneWidth / 7, e.height / 2 + e.lineOffset)
                                }),
                                t = e.noteWidth / s[0].texture.width,
                                s[0].scale.set(t, t),
                                s[4] && (t = 4 * e.noteWidth / 3 / s[4].texture.width,
                                s[4].scale.set(t, t));
                                break;
                            case "Bar":
                                t = 2 * e.noteWidth,
                                s[0].width = t,
                                s[0].height = .7 * t,
                                s[1].scale.set(1, .7),
                                t *= 162.75 / 194,
                                s[1].children[0].width = t,
                                s[1].children[0].height = t,
                                t *= 1.125 / .875,
                                s[1].children[1].width = t,
                                s[1].children[1].height = t;
                                break
                            }
                    })
                },
                updateLaneEffects: function() {
                    for (var t = this.laneWidth / 7 / 154, e = 0; e < 7; e++)
                        e < 4 ? (this.spriteLaneEffects[e].scale.set(t, t),
                        this.spriteLaneEffects[e].position.set(this.width / 2 + this.laneWidth / 7 * (e - 3.5), this.height / 2 + this.lineOffset)) : (this.spriteLaneEffects[e].scale.set(-t, t),
                        this.spriteLaneEffects[e].position.set(this.width / 2 + this.laneWidth / 7 * (e - 2.5), this.height / 2 + this.lineOffset))
                },
                positionCombo: function() {
                    this.spriteCombo.position.set(.83 * this.width, this.height / 2 - .02 * this.width)
                },
                render: function() {
                    this.app && this.app.renderer.render(this.app.stage)
                },
                onFullscreenChange: function() {
                    var t = this;
                    this.fullscreen = !!document.fullscreenElement,
                    this.fullscreen || (this.fullscreenCustom = !1),
                    this.$nextTick(function() {
                        t.updateSize()
                    })
                },
                openFullscreen: function() {
                    var t = this;
                    this.$refs.container.requestFullscreen ? this.$refs.container.requestFullscreen() : this.$refs.container.mozRequestFullScreen ? this.$refs.container.mozRequestFullScreen() : this.$refs.container.webkitRequestFullScreen ? this.$refs.container.webkitRequestFullscreen() : this.$refs.container.msRequestFullscreen ? this.$refs.container.msRequestFullscreen() : (this.fullscreen = !0,
                    this.fullscreenCustom = !0,
                    this.$nextTick(function() {
                        t.updateSize()
                    }))
                },
                closeFullscreen: function() {
                    var t = this;
                    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : (this.fullscreen = !1,
                    this.fullscreenCustom = !1,
                    this.$nextTick(function() {
                        t.updateSize()
                    }))
                }
            }),
            mounted: function() {
                this.$refs.container.addEventListener("fullscreenchange", this.onFullscreenChange)
            },
            beforeDestroy: function() {
                this.$refs.container.removeEventListener("fullscreenchange", this.onFullscreenChange),
                this.unloadHowl(),
                this.app && this.app.destroy()
            }
        }
          , P = N
          , I = (i("7e4d"),Object(v["a"])(P, S, k, !1, null, "e114f88a", null))
          , T = I.exports
          , E = i("c992")
          , $ = {
            name: "MyChartSimulatorDisplay",
            components: {
                MyField: r["a"],
                MyIcon: l["a"],
                MyIconSelectSingle: c["a"],
                MyYesNoSelectSingle: h["a"],
                MyTextSelectSingle: u["a"],
                MyNumericInput: d["a"],
                MySongChart: C,
                MySongSimulator: T,
                MyLoadingDisplay: E["a"]
            },
            i18n: {
                messages: i("cfbc")
            },
            props: {
                show: Boolean,
                type: Number,
                songData: Object
            },
            data: function() {
                return {
                    showSettings: !1
                }
            },
            computed: Object(n["a"])({}, Object(o["a"])({
                chartZoom: {
                    name: "tool/chartsimulator/chartZoom",
                    defvalue: 1,
                    type: "number"
                },
                chartVertical: {
                    name: "tool/chartsimulator/chartVertical",
                    defvalue: 1,
                    type: "number"
                },
                chartCombo: {
                    name: "tool/chartsimulator/chartCombo",
                    defvalue: 0,
                    type: "number"
                },
                chartFever: {
                    name: "tool/chartsimulator/chartFever",
                    defvalue: 0,
                    type: "number"
                },
                chartBPM: {
                    name: "tool/chartsimulator/chartBPM",
                    defvalue: 0,
                    type: "number"
                },
                chartTime: {
                    name: "tool/chartsimulator/chartTime",
                    defvalue: 3,
                    type: "number"
                },
                chartBeat: {
                    name: "tool/chartsimulator/chartBeat",
                    defvalue: 1,
                    type: "number"
                },
                chartSkill: {
                    name: "tool/chartsimulator/chartSkill",
                    defvalue: 4,
                    type: "number"
                },
                simTapEffect: {
                    name: "tool/chartsimulator/simTapEffect",
                    defvalue: 0,
                    type: "number"
                },
                simLaneEffect: {
                    name: "tool/chartsimulator/simLaneEffect",
                    defvalue: 0,
                    type: "number"
                },
                simBackground: {
                    name: "tool/chartsimulator/simBackground",
                    defvalue: 0,
                    type: "number"
                },
                simNoteSE: {
                    name: "tool/chartsimulator/simNoteSE",
                    defvalue: 0,
                    type: "number"
                },
                simNoteSEVolume: {
                    name: "tool/chartsimulator/simNoteSEVolume",
                    defvalue: 1,
                    type: "number"
                },
                simNoteSpeed: {
                    name: "tool/chartsimulator/simNoteSpeed",
                    defvalue: 5,
                    type: "number"
                },
                styleNoteSize: {
                    name: "tool/chartsimulator/styleNoteSize",
                    defvalue: 1,
                    type: "number"
                },
                styleLongAlpha: {
                    name: "tool/chartsimulator/styleLongAlpha",
                    defvalue: .8,
                    type: "number"
                },
                styleDualLine: {
                    name: "tool/chartsimulator/styleDualLine",
                    defvalue: 0,
                    type: "number"
                },
                styleOffBeat: {
                    name: "tool/chartsimulator/styleOffBeat",
                    defvalue: 0,
                    type: "number"
                },
                styleMirror: {
                    name: "tool/chartsimulator/styleMirror",
                    defvalue: 1,
                    type: "number"
                },
                styleLaneType: {
                    name: "tool/chartsimulator/styleLaneType",
                    defvalue: 0,
                    type: "number"
                },
                styleNoteType: {
                    name: "tool/chartsimulator/styleNoteType",
                    defvalue: 0,
                    type: "number"
                }
            })),
            methods: {
                onExpand: function() {
                    switch (this.type) {
                    case 0:
                        this.$refs.chart && this.$refs.chart.openFullscreen();
                        break;
                    case 1:
                        this.$refs.simulator && this.$refs.simulator.openFullscreen();
                        break
                    }
                }
            }
        }
          , O = $
          , B = Object(v["a"])(O, a, s, !1, null, null, null);
        e["a"] = B.exports
    },
    
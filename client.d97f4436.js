webpackJsonp([1],{113:function(t,e,i){t.exports=i(114)},114:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(115),n=i(119);i(293);s.a.config.productionTip=!1,e.default=new s.a({el:"#app",render:function(t){return t(n.a)}})},119:function(t,e,i){"use strict";function s(t){i(120)}var n=i(121),a=i(292),r=i(4),o=s,u=r(n.a,a.a,!1,o,null,null);e.a=u.exports},120:function(t,e){},121:function(t,e,i){"use strict";var s=i(122),n=i.n(s),a=i(55),r=i.n(a),o=i(125),u=(i.n(o),i(22)),c=i(13),l=i(129),f=i(278),h=i(281),d=i(289);e.a={name:"root",components:{Carousel:o.Carousel,Slide:o.Slide,Controls:f.a,Settings:h.a,Timer:l.a,Tabs:d.a},filters:{json:function(t){return JSON.stringify(t,null,2)}},data:function(){return{visible:!0,focus:u.d.load(),activeTab:0}},mounted:function(){var t=this;this.focus.start(),this.focus.on("finish",function(t){var e=t.type,i=t.duration;Object(c.f)("pomodoro."+e,{duration:r()(i)})}),this.focus.on("daily",function(){var e=t.focus.statistics();Object(c.f)("daily",Object.assign({},e,{time:r()(e.time)}))}),this.$watch("focus.state",function(){return t.focus.save()},{deep:!0}),n.a.change(function(e,i){t.visible="visible"===i,t.activeTab=0})},computed:{classes:function(){var t=this.focus,e=t.isShort,i=t.isLong;return{root:{"b-application--break":e||i,"b-application--short":e,"b-application--long":i}}}},methods:{handlePageChange:function(t){this.activeTab=t}}}},127:function(t,e,i){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",function(){return r});var n=i(56),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,t),this.state=Object(n.a)(t.state,e),this.time=Date.now(),this.tick()}return a(t,null,[{key:"state",get:function(){return{createdAt:Date.now(),duration:0,skipped:!1,type:null,pauses:[]}}}]),a(t,[{key:"tick",value:function(){this.finished||(this.time=Date.now())}},{key:"pause",value:function(){var t=this.state.pauses,e=t[t.length-1];void 0!==e&&null===e.end||t.push({start:this.time,end:null})}},{key:"unpause",value:function(){var t=this.state.pauses,e=t[t.length-1];if(void 0!==e&&null===e.end){var i=this.time;e.start===i?t.pop():e.end=i}}},{key:"pauses",get:function(){var t=this;return this.state.pauses.reduce(function(e,i){var s=new Date(i.start);return e+((null!==i.end?i.end:t.time)-s)},0)}},{key:"paused",get:function(){var t=this.state.pauses,e=t[t.length-1];return void 0!==e&&null===e.end}},{key:"createdAt",get:function(){return this.state.createdAt}},{key:"type",get:function(){return this.state.type}},{key:"duration",get:function(){return this.state.duration}},{key:"skipped",get:function(){return this.state.skipped}},{key:"interval",get:function(){return this.skipped?this.duration+1:this.time-(this.createdAt+this.pauses)}},{key:"elapsed",get:function(){var t=this.duration-this.interval;return t>0?t:0}},{key:"finished",get:function(){return this.skipped||this.elapsed<=0}}]),t}()},128:function(t,e,i){"use strict";var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return new(Function.prototype.bind.apply(Notification,[null].concat(e)))},n=null;try{navigator.serviceWorker.register("sw.js"),navigator.serviceWorker.ready.then(function(t){n=function(){return t.showNotification.apply(t,arguments)}})}catch(t){}e.a=function(){n?n.apply(void 0,arguments):s.apply(void 0,arguments)}},129:function(t,e,i){"use strict";var s=i(130),n=i(277),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},13:function(t,e,i){"use strict";function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}i.d(e,"e",function(){return a}),i.d(e,"a",function(){return r}),i.d(e,"h",function(){return o}),i.d(e,"b",function(){return u}),i.d(e,"g",function(){return c}),i.d(e,"d",function(){return f}),i.d(e,"c",function(){return d}),i.d(e,"f",function(){return p});var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=function(t,e){var i={};return Object.keys(t).slice(0,e).forEach(function(e){i[e]=t[e]}),i},r=function(t){return[].concat(s(Array(t)))},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return("0".repeat(e-1)+t).slice(-e)},u=function(t){t=new Date(t);var e=n[t.getMonth()];return t.getDate()+" "+e},c=function(){return u(new Date)},l=function(t){return 1e3*t},f=function(t){return t*l(60)},h=function(t){return t*f(60)},d=function(t){return t*h(24)},p=function(){if(window.yaCounter){var t;(t=window.yaCounter).reachGoal.apply(t,arguments)}}},130:function(t,e,i){"use strict";var s=i(22),n=i(131),a=i(134),r=i(207),o=i(210);e.a={name:"timer",components:{Process:a.a,Target:r.a,Clock:n.a,Heatmap:o.a},props:{focus:{type:s.d,required:!0}},data:function(){return{stats:[]}},mounted:function(){this.setStats(),this.focus.on("update",this.setStats)},methods:{setStats:function(){this.stats=JSON.parse(localStorage.getItem("statistics"))}}}},131:function(t,e,i){"use strict";var s=i(132),n=i(133),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},132:function(t,e,i){"use strict";var s=i(13);e.a={props:{elapsed:{type:Number,default:0},pauses:{type:Number,default:0},paused:{type:Boolean,default:!1}},filters:{zeroify:s.h},computed:{clock:function(){var t=Math.floor(this.elapsed/1e3),e=t%60;return{seconds:e,minutes:(t-e)/60}},pause:function(){var t=Math.floor(this.pauses/1e3),e=t%60;return{seconds:e,minutes:(t-e)/60}},pauseClock:function(){var t=this.pause.minutes,e=Object(s.h)(this.pause.seconds);return 0===t?e:t+":"+e},classes:function(){return{clock:{"b-clock":!0,"b-clock--paused":this.paused},minutes:{"b-clock__minutes":!0},seconds:{"b-clock__seconds":!0},pauses:{"b-clock__pauses":!0,"b-clock__pauses--hidden":0===this.pauses,"b-clock__pauses--small":0!==this.pause.minutes}}}}}},133:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classes.clock},[i("div",{class:t.classes.minutes},[t._v(t._s(t._f("zeroify")(t.clock.minutes)))]),t._v(" "),i("div",{class:t.classes.seconds},[t._v(t._s(t._f("zeroify")(t.clock.seconds)))]),t._v(" "),i("div",{class:t.classes.pauses},[t._v(t._s(t.pauseClock))])])},n=[],a={render:s,staticRenderFns:n};e.a=a},134:function(t,e,i){"use strict";var s=i(135),n=i(206),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},135:function(t,e,i){"use strict";var s=i(57),n=i.n(s),a=i(1),r=i(5),o=i(71);e.a={name:"process",props:{value:{type:Number,required:!0},max:{type:Number,required:!0}},data:function(){return{width:500,height:500,weight:4}},created:function(){this.update=n()(this.update.bind(this),500)},mounted:function(){var t=this;this.arcTween=function(e){var i=Object(r.a)(this.$angle,e);return this.$angle=i(0),function(e){return t.arc(i(e))}},this.svg=Object(a.c)(this.$el),this.root=this.svg.append("g").attr("transform","translate("+this.width/2+", "+this.height/2+")"),this.pie=Object(o.b)().sort(null).value(function(t){return t}),this.arc=Object(o.a)().outerRadius(this.radius).innerRadius(this.radius-this.weight).padAngle(.03).cornerRadius(this.weight),this.root.selectAll("path").data(this.pie(this.values)).enter().append("path").attr("d",this.arc).classed("b-process__value",function(t){return 0===t.index}).classed("b-process__bar",function(t){return 0!==t.index}).each(function(t){this.$angle=t}),document.addEventListener("visibilitychange",this.update)},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height},radius:function(){return Math.min(this.width,this.height)/2},values:function(){return[this.value,this.max-this.value||1]}},watch:{values:function(){this.update()}},methods:{update:function(){this.root.selectAll("path").data(this.pie(this.values)).transition().duration(200).attrTween("d",this.arcTween).style("fill",function(t){return t.data.color})}}}},206:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{staticClass:"b-process",attrs:{viewBox:t.viewBox}})},n=[],a={render:s,staticRenderFns:n};e.a=a},207:function(t,e,i){"use strict";var s=i(208),n=i(209),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},208:function(t,e,i){"use strict";var s=i(57),n=i.n(s),a=i(1),r=i(5),o=i(71);e.a={name:"target",props:{goal:{type:Number,required:!0},completed:{type:Array,default:function(){return[]}}},data:function(){return{width:500,height:500,weight:4}},created:function(){this.update=n()(this.update.bind(this),500)},mounted:function(){var t=this;this.svg=Object(a.c)(this.$el),this.pie=Object(o.b)().sort(null).value(function(t){return t.value}),this.arcTween=function(e){var i=Object(r.a)(this.$angle,e);return this.$angle=i(0),function(e){return t.arc(i(e))}},this.root=this.svg.append("g").attr("transform","translate("+this.width/2+", "+this.height/2+")"),this.arc=Object(o.a)().outerRadius(this.radius).innerRadius(this.radius-this.weight).padAngle(.03).cornerRadius(this.weight),this.root.selectAll("path").data(this.pie(this.values)).enter().append("path").attr("d",this.arc).classed("b-target__item",!0).classed("b-target__item--finished",function(t){return t.data.finished}).classed("b-target__item--extra",function(t){return t.data.extra}).classed("b-target__item--skipped",function(t){return t.data.skipped}).each(function(t){this.$angle=t}),document.addEventListener("visibilitychange",this.update)},computed:{amount:function(){return this.completed.length},viewBox:function(){return"0 0 "+this.width+" "+this.height},radius:function(){return Math.min(this.width,this.height)/2},values:function(){var t=this,e=this.amount,i=this.completed,s=e>=this.goal?e+1:this.goal;return new Array(s).fill().map(function(s,n){var a=n<e;return{value:1,finished:a,extra:a&&n>=t.goal,skipped:!!i[n]&&i[n].skipped}})}},watch:{values:function(){this.update()}},methods:{update:function(){var t=this.root.selectAll("path").data(this.pie(this.values)).classed("b-target__item",!0).classed("b-target__item--finished",function(t){return t.data.finished}).classed("b-target__item--extra",function(t){return t.data.extra}).classed("b-target__item--skipped",function(t){return t.data.skipped}),e=t.enter().append("path").classed("b-target__item",!0).each(function(t){this.$angle=t});t.transition().duration(200).attrTween("d",this.arcTween),t.exit().remove(),e.transition().delay(200).duration(400).attrTween("d",this.arcTween)}}}},209:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{staticClass:"b-target",attrs:{viewBox:t.viewBox}})},n=[],a={render:s,staticRenderFns:n};e.a=a},210:function(t,e,i){"use strict";var s=i(211),n=i(276),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},211:function(t,e,i){"use strict";function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var n=i(1),a=i(212),r=i(55),o=i.n(r),u=i(13);e.a={name:"heatmap",props:{stats:{required:!0,default:function(){return{}}}},computed:{values:function(){var t=Date.now(),e=Object(u.a)(30).map(function(t,e){return e}),i=this.stats||{};return e.map(function(e){var s=Object(u.b)(t-Object(u.c)(e)),n=i[s]||{completed:0,time:0,target:0};return Object.assign({day:s},n)})},completedMax:function(){var t=this.values.map(function(t){return t.completed});return Math.max.apply(Math,s(t))},color:function(){return Object(a.a)().range(["#4c525f","#97ce28"]).domain([0,this.completedMax])}},mounted:function(){var t=this;this.heatmap=Object(n.c)(this.$el),this.heatmap.selectAll(".b-heatmap__box").data(this.values).enter().append("div").classed("b-heatmap__box",!0).style("background-color",function(e){return t.color(e.completed)}).append("div").classed("b-heatmap__title",!0).html(this.title)},watch:{values:function(){this.update()}},methods:{title:function(t){var e='\n        <div class="b-heatmap__day">'+t.day+"</div>\n      ";return 0!==t.completed&&(e+='\n          <div class="b-heatmap__pomodoros"><b>'+t.completed+"</b>/"+t.target+" pomidorus</div>\n        "),0!==t.time&&(e+='\n          <div class="b-heatmap__time">'+o()(t.time)+"</div>\n        "),e},update:function(){var t=this;this.heatmap.selectAll(".b-heatmap__box").data(this.values).style("background-color",function(e){return t.color(e.completed)}),this.heatmap.selectAll(".b-heatmap__title").data(this.values).html(this.title)}}}},22:function(t,e,i){"use strict";function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",function(){return d}),i.d(e,"c",function(){return p}),i.d(e,"b",function(){return v}),i.d(e,"d",function(){return m});var r=i(56),o=i(126),u=i.n(o),c=i(13),l=i(127),f=i(128),h=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),d="DEFAULT",p="SHORT",v="LONG",m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t);var i=new u.a;this.state=Object(r.a)(t.state,e),this.pending=null,this.touched=!1,this.on=i.on,this.emit=i.emit,this.isEmpty||(this.state.items=this.items.map(function(t){return new l.a(t)}))}return h(t,null,[{key:"load",value:function(){return new this(JSON.parse(localStorage.getItem("state"))||{})}},{key:"state",get:function(){var t;return{items:[],options:{auto:!1,notifications:!1,target:10,longAfter:4,durations:(t={},n(t,d,Object(c.d)(25)),n(t,p,Object(c.d)(5)),n(t,v,Object(c.d)(15)),t)}}}}]),h(t,[{key:"start",value:function(){setInterval(this.tick.bind(this),1e3),this.touched=this.isActive}},{key:"tick",value:function(){if(this.items.forEach(function(t){return t.tick()}),this.isActive)return void this.emit("tick");this.isFinished&&this.touched&&null==this.pending&&(this.current.skipped||(this.emit("finish",this.current),this.notify()),this.pending=this.current,this.options.auto&&this.play())}},{key:"play",value:function(){if(!0!==this.isActive){var t=void 0,e=void 0;(this.isEmpty||this.isShort||this.isLong)&&(t=d,e=this.durations[d]),this.isWork&&(t=this.isTimeToLong?v:p,e=this.durations[t]),this.touched=!0,this.pending=null;var i=new l.a({type:t,duration:e});this.state.items=[].concat(s(this.state.items),[i])}}},{key:"pause",value:function(){this.current&&this.current.pause()}},{key:"unpause",value:function(){this.current&&this.current.unpause()}},{key:"stop",value:function(){this.isActive&&this.items.pop()}},{key:"reset",value:function(){this.state.items=[]}},{key:"skip",value:function(){this.isActive&&(this.current.state.skipped=!0)}},{key:"toJson",value:function(){var t=Object.assign({},this.state);return 0!==t.items.length&&(t.items=t.items.map(function(t){return Object.assign({},t.state)})),t}},{key:"statistics",value:function(){return{completed:this.completed.length,target:this.target,time:this.time}}},{key:"save",value:function(){var t=Object(c.g)(),e=this.toJson(),i=JSON.parse(localStorage.getItem("statistics"));i&&!i[t]?(this.emit("daily"),this.reset(),this.play()):i=Object.assign({},i),i[t]=Object(c.e)(this.statistics(),100),localStorage.setItem("state",JSON.stringify(e)),localStorage.setItem("statistics",JSON.stringify(i)),this.emit("update")}},{key:"notify",value:function(){if(this.options.notifications){var t=this.current.type,e="It's time to work";return t===d&&(e=this.isTimeToLong?"It's time to long break":"It's time to break"),Object(f.a)(e,{icon:"android-chrome-192x192.png"})}}},{key:"items",get:function(){return this.state.items}},{key:"options",get:function(){return this.state.options}},{key:"target",get:function(){return this.options.target}},{key:"completed",get:function(){return this.items.filter(function(t){return t.type===d&&t.finished})}},{key:"time",get:function(){return this.completed.reduce(function(t,e){return t+e.duration},0)}},{key:"durations",get:function(){return this.options.durations}},{key:"longAfter",get:function(){return this.options.longAfter}},{key:"isTimeToLong",get:function(){return this.completed.length%this.longAfter==0}},{key:"elapsed",get:function(){return this.current?this.current.elapsed:0}},{key:"pauses",get:function(){return this.current?this.current.pauses:0}},{key:"interval",get:function(){return this.current?this.current.interval:0}},{key:"duration",get:function(){return this.current?this.current.duration:0}},{key:"current",get:function(){return this.items[this.items.length-1]}},{key:"isWork",get:function(){return this.current&&this.current.type===d}},{key:"isShort",get:function(){return this.current&&this.current.type===p}},{key:"isLong",get:function(){return this.current&&this.current.type===v}},{key:"isEmpty",get:function(){return 0===this.items.length}},{key:"isActive",get:function(){return this.current&&!this.current.finished}},{key:"isFinished",get:function(){return this.current&&this.current.finished}},{key:"isPaused",get:function(){return void 0!==this.current&&this.current.paused}}]),t}()},276:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"b-heatmap"})},n=[],a={render:s,staticRenderFns:n};e.a=a},277:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"b-timer"},[i("clock",{attrs:{elapsed:t.focus.elapsed,paused:t.focus.isPaused,pauses:t.focus.pauses}}),t._v(" "),i("process",{attrs:{value:t.focus.interval,max:t.focus.duration,"is-break":t.focus.isLong||t.focus.isShort}}),t._v(" "),i("heatmap",{attrs:{stats:t.stats}}),t._v(" "),i("target",{attrs:{goal:t.focus.target,completed:t.focus.completed}})],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},278:function(t,e,i){"use strict";var s=i(279),n=i(280),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},279:function(t,e,i){"use strict";var s=i(22);e.a={props:{focus:{type:s.d,required:!0}},computed:{buttonText:function(){return this.focus.isActive&&!this.focus.isPaused?"Pause":this.focus.isPaused?"Resume":"Start"}},created:function(){this.hotkeys=this.hotkeys.bind(this)},mounted:function(){window.addEventListener("keyup",this.hotkeys)},destroyed:function(){window.removeEventListener("keyup",this.hotkeys)},methods:{buttonAction:function(){return this.focus.isActive&&!this.focus.isPaused?void this.focus.pause():this.focus.isPaused?void this.focus.unpause():void this.focus.play()},hotkeys:function(t){32===t.keyCode&&this.buttonAction()},stop:function(){confirm("Current timer will be stopped.")&&this.focus.stop()},skip:function(){confirm("Current timer will be skipped.")&&this.focus.skip()}}}},280:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"b-controls"},[i("div",{staticClass:"b-controls__body"},[i("a",{staticClass:"b-controls__action",on:{click:function(e){e.preventDefault(),t.skip(e)}}},[t._v("Skip")]),t._v(" "),i("button",{staticClass:"b-controls__button",on:{click:function(e){e.preventDefault(),t.buttonAction(e)}}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")]),t._v(" "),i("a",{staticClass:"b-controls__action",on:{click:function(e){e.preventDefault(),t.stop(e)}}},[t._v("Stop")])])])},n=[],a={render:s,staticRenderFns:n};e.a=a},281:function(t,e,i){"use strict";var s=i(282),n=i(288),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},282:function(t,e,i){"use strict";var s=i(283),n=i(287),a=i.n(n),r=i(22),o=i(13);e.a={name:"settings",components:{Toggle:s.a,Slider:a.a},props:{focus:{type:r.d,required:!0}},data:function(){return{DEFAULT_TYPE:r.a,LONG_TYPE:r.b,SHORT_TYPE:r.c,notifications:{pending:!1,status:null}}},mounted:function(){document.addEventListener("transitionend",this.refresh,{passive:!0}),this.$watch("focus.options.notifications",this.notificationPerms),this.notifications.status=Notification.permission},destroyed:function(){document.removeEventListener("transitionend",this.refresh)},methods:{minutes:o.d,refresh:function(){this.$el.querySelectorAll(".vue-slider-component").forEach(function(t){t.__vue__&&t.__vue__.refresh()})},notificationPerms:function(t){var e=this;if(t&&!this.pending){this.notifications.pending=!0;var i=Notification.requestPermission();i.then(function(t){e.notifications.pending=!1,e.notifications.status=t}),i.catch(function(){alert(1)})}},restoreDefault:function(){confirm("Reset settings to default values?")&&(this.focus.state.options=r.d.state.options)},resetSession:function(){confirm("Today's completed pomodoros will be reset.")&&this.focus.reset()}}}},288:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"b-settings"},[i("div",{staticClass:"b-settings__field"},[i("div",{staticClass:"b-settings__label"},[t._v("Daily target")]),t._v(" "),i("div",{staticClass:"b-settings__control"},[i("slider",{attrs:{min:0,max:50,interval:1,formatter:function(t){return t+" pomirorus"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.target,callback:function(e){t.$set(t.focus.options,"target",e)},expression:"focus.options.target"}})],1)]),t._v(" "),i("div",{staticClass:"b-settings__field"},[i("div",{staticClass:"b-settings__label"},[t._v("Work interval")]),t._v(" "),i("div",{staticClass:"b-settings__control"},[i("slider",{attrs:{min:t.minutes(1),max:t.minutes(60),interval:t.minutes(1),formatter:function(t){return t/1e3/60+" minutes"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.durations[t.DEFAULT_TYPE],callback:function(e){t.$set(t.focus.options.durations,t.DEFAULT_TYPE,e)},expression:"focus.options.durations[DEFAULT_TYPE]"}})],1)]),t._v(" "),i("div",{staticClass:"b-settings__field"},[i("div",{staticClass:"b-settings__label"},[t._v("Short break")]),t._v(" "),i("div",{staticClass:"b-settings__control"},[i("slider",{attrs:{min:t.minutes(1),max:t.minutes(60),interval:t.minutes(1),formatter:function(t){return t/1e3/60+" minutes"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.durations[t.SHORT_TYPE],callback:function(e){t.$set(t.focus.options.durations,t.SHORT_TYPE,e)},expression:"focus.options.durations[SHORT_TYPE]"}})],1)]),t._v(" "),i("div",{staticClass:"b-settings__field"},[i("div",{staticClass:"b-settings__label"},[t._v("Long break")]),t._v(" "),i("div",{staticClass:"b-settings__control"},[i("slider",{attrs:{min:t.minutes(1),max:t.minutes(60),interval:t.minutes(1),formatter:function(t){return t/1e3/60+" minutes"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.durations[t.LONG_TYPE],callback:function(e){t.$set(t.focus.options.durations,t.LONG_TYPE,e)},expression:"focus.options.durations[LONG_TYPE]"}})],1)]),t._v(" "),i("div",{staticClass:"b-settings__field"},[i("div",{staticClass:"b-settings__label"},[t._v("Long break after")]),t._v(" "),i("div",{staticClass:"b-settings__control"},[i("slider",{attrs:{min:0,max:50,interval:1,formatter:function(t){return t+" pomirorus"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.longAfter,callback:function(e){t.$set(t.focus.options,"longAfter",e)},expression:"focus.options.longAfter"}})],1)]),t._v(" "),i("div",{staticClass:"b-settings__field"},[i("div",{staticClass:"b-settings__label"},[t._v("Auto-start timer")]),t._v(" "),i("div",{staticClass:"b-settings__control"},[i("toggle",{attrs:{height:20,width:45,"css-colors":!0,sync:!0},model:{value:t.focus.options.auto,callback:function(e){t.$set(t.focus.options,"auto",e)},expression:"focus.options.auto"}})],1)]),t._v(" "),i("div",{staticClass:"b-settings__field"},[i("div",{staticClass:"b-settings__label"},[t._v("Notifications")]),t._v(" "),i("div",{staticClass:"b-settings__control"},[i("toggle",{attrs:{height:20,width:45,"css-colors":!0,sync:!0},model:{value:t.focus.options.notifications,callback:function(e){t.$set(t.focus.options,"notifications",e)},expression:"focus.options.notifications"}}),t._v(" "),"denied"===t.notifications.status?i("span",{staticClass:"b-settings__warning"},[t._v("\n        Permissions denied\n      ")]):"granted"!==t.notifications.status?i("span",{staticClass:"b-settings__warning"},[t._v("\n        Requires user permissions\n      ")]):t._e()],1)]),t._v(" "),i("div",{staticClass:"b-settings__buttons"},[i("button",{staticClass:"b-settings__button",on:{click:t.restoreDefault}},[t._v("Restore defaults")]),t._v(" "),i("button",{staticClass:"b-settings__button",on:{click:t.resetSession}},[t._v("Reset current session")])])])},n=[],a={render:s,staticRenderFns:n};e.a=a},289:function(t,e,i){"use strict";var s=i(290),n=i(291),a=i(4),r=a(s.a,n.a,!1,null,null,null);e.a=r.exports},290:function(t,e,i){"use strict";e.a={name:"Tabs",props:["current"],methods:{active:function(t){return this.current===t?{"b-tabs__item--active":!0}:{}},goTo:function(t){this.$emit("go-to",t)}}}},291:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"b-tabs"},[i("li",{staticClass:"b-tabs__item",class:t.active(0),on:{click:function(e){t.goTo(0)}}},[t._v("Timer")]),t._v(" "),i("li",{staticClass:"b-tabs__item",class:t.active(1),on:{click:function(e){t.goTo(1)}}},[t._v("Settings")])])},n=[],a={render:s,staticRenderFns:n};e.a=a},292:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"b-application",class:t.classes.root},[i("div",{staticClass:"b-application__middle"},[i("div",{staticClass:"b-application__header"},[i("tabs",{attrs:{current:t.activeTab},on:{"go-to":function(e){return t.$refs.carousel.goToPage(e)}}})],1),t._v(" "),i("div",{staticClass:"b-application__body"},[i("carousel",{ref:"carousel",staticClass:"b-application__sections",attrs:{perPage:1,paginationEnabled:!1,easing:"cubic-bezier(0.165, 0.84, 0.44, 1)"},on:{pageChange:t.handlePageChange}},[i("slide",{staticClass:"b-application__section"},[i("div",{staticClass:"b-application__wrapper b-application__wrapper--timer"},[t.visible?i("timer",{attrs:{focus:t.focus}}):t._e(),t._v(" "),t.visible?i("controls",{attrs:{focus:t.focus}}):t._e()],1)]),t._v(" "),i("slide",{staticClass:"b-application__section"},[i("div",{staticClass:"b-application__wrapper b-application__wrapper--settings"},[i("settings",{ref:"settings",attrs:{focus:t.focus}})],1)])],1)],1)])])},n=[],a={render:s,staticRenderFns:n};e.a=a}},[113]);
(function(n){function a(a){for(var t,i,m=a[0],u=a[1],l=a[2],v=0,s=[];v<m.length;v++)i=m[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);c&&c(a);while(s.length)s.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var n,a=0;a<o.length;a++){for(var e=o[a],t=!0,m=1;m<e.length;m++){var u=e[m];0!==r[u]&&(t=!1)}t&&(o.splice(a--,1),n=i(i.s=e[0]))}return n}var t={},r={app:0},o=[];function i(a){if(t[a])return t[a].exports;var e=t[a]={i:a,l:!1,exports:{}};return n[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=t,i.d=function(n,a,e){i.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:e})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,a){if(1&a&&(n=i(n)),8&a)return n;if(4&a&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var t in n)i.d(e,t,function(a){return n[a]}.bind(null,t));return e},i.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(a,"a",a),a},i.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},i.p="";var m=window["webpackJsonp"]=window["webpackJsonp"]||[],u=m.push.bind(m);m.push=a,m=m.slice();for(var l=0;l<m.length;l++)a(m[l]);var c=u;o.push([0,"chunk-vendors"]),e()})({0:function(n,a,e){n.exports=e("56d7")},"034f":function(n,a,e){"use strict";var t=e("85ec"),r=e.n(t);r.a},"56d7":function(n,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var t=e("2b0e"),r=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},o=[],i=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",[n._v(" HelloWorld "),t("br"),t("button",{on:{click:n.play}},[n._v("展开录音波形图")]),t("br"),t("audio",{ref:"audio",attrs:{src:e("dc3e"),crossOrigin:"anonymous"}}),t("br"),n._v(" 当前音符为"+n._s(n.note.inter)+" "),t("v-chart",{attrs:{options:n.echartOptions}})],1)},m=[],u=(e("a630"),e("c975"),e("d3b7"),e("3ca3"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("2909")),l=(e("94b1"),[{inter:"A0",man:"A1",woman:"A2",value:27.5},{inter:"Bb0",man:"#A1",woman:"#A2",value:29.14},{inter:"B0",man:"B1",woman:"B2",value:30.87},{inter:"C1",man:"C",woman:"C1",value:32.7},{inter:"Db1",man:"#C",woman:"#C1",value:34.65},{inter:"D1",man:"D",woman:"D1",value:36.71},{inter:"Eb1",man:"#D",woman:"#D1",value:38.89},{inter:"E1",man:"E",woman:"E1",value:41.2},{inter:"F1",man:"F",woman:"F1",value:43.65},{inter:"Gb1",man:"#F",woman:"#F1",value:46.25},{inter:"G1",man:"G",woman:"G1",value:49},{inter:"Ab1",man:"#G",woman:"#G1",value:51.91},{inter:"A1",man:"A",woman:"A1",value:55},{inter:"Bb1",man:"#A",woman:"#A1",value:58.27},{inter:"B1",man:"B",woman:"B1",value:61.74},{inter:"C2",man:"c",woman:"C",value:65.41},{inter:"Db2",man:"#c",woman:"#C",value:69.3},{inter:"D2",man:"d",woman:"D",value:73.42},{inter:"Eb2",man:"#d",woman:"#D",value:77.78},{inter:"E2",man:"e",woman:"E",value:82.41},{inter:"F2",man:"f",woman:"#F",value:87.31},{inter:"Gb2",man:"#f",woman:"F",value:92.5},{inter:"G2",man:"g",woman:"G",value:98},{inter:"Ab2",man:"#g",woman:"#G",value:103.83},{inter:"A2",man:"a",woman:"A",value:110},{inter:"Bb2",man:"#a",woman:"#A",value:116.54},{inter:"B2",man:"b",woman:"B",value:123.47},{inter:"C3",man:"c1",woman:"c",value:130.81},{inter:"Db3",man:"#c1",woman:"#c",value:138.59},{inter:"D3",man:"d1",woman:"d",value:146.83},{inter:"Eb3",man:"#d1",woman:"#d",value:155.56},{inter:"E3",man:"e1",woman:"e",value:164.81},{inter:"F3",man:"f1",woman:"f",value:174.61},{inter:"Gb3",man:"#f1",woman:"#f",value:185},{inter:"G3",man:"g1",woman:"g",value:196},{inter:"Ab3",man:"#g1",woman:"#g",value:207.65},{inter:"A3",man:"a1",woman:"a",value:220},{inter:"Bb3",man:"#a1",woman:"#a",value:233.08},{inter:"B3",man:"b1",woman:"b",value:246.94},{inter:"C4",man:"c2",woman:"c1",value:261.63},{inter:"Db4",man:"#c2",woman:"#c1",value:277.18},{inter:"D4",man:"d2",woman:"d1",value:293.66},{inter:"Eb4",man:"#d2",woman:"#d1",value:311.13},{inter:"E4",man:"e2",woman:"e1",value:329.63},{inter:"F4",man:"f2",woman:"f1",value:349.23},{inter:"Gb4",man:"#f2",woman:"#f1",value:369.99},{inter:"G4",man:"g2",woman:"g1",value:392},{inter:"Ab4",man:"#g2",woman:"#g1",value:415.3},{inter:"A4",man:"a2",woman:"a1",value:440},{inter:"Bb4",man:"#a2",woman:"#a1",value:466.16},{inter:"B4",man:"b2",woman:"b1",value:493.88},{inter:"C5",man:"c3",woman:"c2",value:523.25},{inter:"Db5",man:"#c3",woman:"#c2",value:554.37},{inter:"D5",man:"d3",woman:"d2",value:587.33},{inter:"Eb5",man:"#d3",woman:"#d2",value:622.25},{inter:"E5",man:"e3",woman:"e2",value:659.26},{inter:"F5",man:"f3",woman:"f2",value:698.46},{inter:"Gb5",man:"#f3",woman:"#f2",value:739.99},{inter:"G5",man:"g3",woman:"g2",value:783.99},{inter:"Ab5",man:"#g3",woman:"#g2",value:830.61},{inter:"A5",man:"a3",woman:"a2",value:880},{inter:"Bb5",man:"#a3",woman:"#a2",value:932.33},{inter:"B5",man:"b3",woman:"b2",value:987.77},{inter:"C6",man:"c4",woman:"c3",value:1046.5},{inter:"Db6",man:"#c4",woman:"#c3",value:1108.73},{inter:"D6",man:"d4",woman:"d3",value:1174.66},{inter:"Eb6",man:"#d4",woman:"#d3",value:1244.51},{inter:"E6",man:"e4",woman:"e3",value:1318.51},{inter:"F6",man:"f4",woman:"f3",value:1396.91},{inter:"Gb6",man:"#f4",woman:"#f3",value:1479.98},{inter:"G6",man:"g4",woman:"g3",value:1567.98},{inter:"Ab6",man:"#g4",woman:"#g3",value:1661.22},{inter:"A6",man:"a4",woman:"a3",value:1760},{inter:"Bb6",man:"#a4",woman:"#a3",value:1864.66},{inter:"B6",man:"b4",woman:"b3",value:1975.53},{inter:"C7",man:"c5",woman:"c4",value:2093},{inter:"Db7",man:"#c5",woman:"#c4",value:2217.46},{inter:"D7",man:"d5",woman:"d4",value:2349.32},{inter:"Eb7",man:"#d5",woman:"#d4",value:2489.02},{inter:"E7",man:"e5",woman:"e4",value:2637.02},{inter:"F7",man:"f5",woman:"f4",value:2793.83},{inter:"Gb7",man:"#f5",woman:"#f4",value:2959.96},{inter:"G7",man:"g5",woman:"g4",value:3135.96},{inter:"Ab7",man:"#g5",woman:"#g4",value:3322.44},{inter:"A7",man:"a5",woman:"a4",value:3520},{inter:"Bb7",man:"#a5",woman:"#a4",value:3729.31},{inter:"B7",man:"b5",woman:"b4",value:3951.07},{inter:"C8",man:"c6",woman:"c5",value:4186.01}]);function c(n){var a,e,t=0,r=l.length-1;if(n>l[r].value)return l[r];while(t<=r)if(a=(t+r)/2|0,e=l[a],e.value<n)t=a+1;else{if(!(a<r))return a>0&&Math.abs(l[a].value-n)>Math.abs(l[a-1].value-n)?l[a-1]:e;r=a}return l[0]}var v={name:"HelloWorld",data:function(){return{audioContext:null,source:null,analyser:null,note:{},echartOptions:{animation:!1,title:{text:"柱状图动画延迟"},legend:{data:["bar"]},tooltip:{},xAxis:{data:[]},yAxis:{max:256,min:0},series:[{name:"bar",type:"bar",data:[]}]}}},mounted:function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.handleSuccess)},methods:{handleSuccess:function(n){var a=window.AudioContext||window.webkitAudioContext;this.audioContext=new a,console.log(this.$refs.audio),this.source=this.audioContext.createMediaStreamSource(n),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=32,this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination);for(var e=0;e<this.analyser.frequencyBinCount;e++)this.echartOptions.xAxis.data.push(e*(22205/this.analyser.frequencyBinCount))},draw:function(){var n=new Uint8Array(this.analyser.frequencyBinCount);this.analyser.getByteFrequencyData(n),this.note=c(44410*n.indexOf(Math.max.apply(Math,Object(u["a"])(n)))/2/this.analyser.frequencyBinCount),this.echartOptions.series[0].data=Array.from(n)},play:function(){this.audioContext.resume(),setInterval(this.draw,100)}}},s=v,w=e("2877"),d=Object(w["a"])(s,i,m,!1,null,"469dd552",null),f=d.exports,b={name:"App",components:{HelloWorld:f}},p=b,h=(e("034f"),Object(w["a"])(p,r,o,!1,null,null,null)),y=h.exports,g=e("9ca8");t["a"].config.productionTip=!1,t["a"].component("v-chart",g["a"]),new t["a"]({render:function(n){return n(y)}}).$mount("#app")},"85ec":function(n,a,e){},dc3e:function(n,a,e){n.exports=e.p+"media/test.a67118b8.mp3"}});
//# sourceMappingURL=app.02411cff.js.map
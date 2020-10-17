<template>
  <div>
    HelloWorld
    <br />
    <button @click="play">展开录音波形图</button>
    <br />
    <audio
      src="@/assets/test.mp3"
      crossOrigin="anonymous"
      ref="audio"
    ></audio>
    <br />
    当前音符为{{ note.inter }}


    <v-chart :options="echartOptions" />
  </div>
</template>

<script>
import "echarts/lib/chart/bar";
var PITCH_DATA = [
  {
    inter: "A0",
    man: "A1",
    woman: "A2",
    value: 27.5,
  },
  {
    inter: "Bb0",
    man: "#A1",
    woman: "#A2",
    value: 29.14,
  },
  {
    inter: "B0",
    man: "B1",
    woman: "B2",
    value: 30.87,
  },
  {
    inter: "C1",
    man: "C",
    woman: "C1",
    value: 32.7,
  },
  {
    inter: "Db1",
    man: "#C",
    woman: "#C1",
    value: 34.65,
  },
  {
    inter: "D1",
    man: "D",
    woman: "D1",
    value: 36.71,
  },
  {
    inter: "Eb1",
    man: "#D",
    woman: "#D1",
    value: 38.89,
  },
  {
    inter: "E1",
    man: "E",
    woman: "E1",
    value: 41.2,
  },
  {
    inter: "F1",
    man: "F",
    woman: "F1",
    value: 43.65,
  },
  {
    inter: "Gb1",
    man: "#F",
    woman: "#F1",
    value: 46.25,
  },
  {
    inter: "G1",
    man: "G",
    woman: "G1",
    value: 49,
  },
  {
    inter: "Ab1",
    man: "#G",
    woman: "#G1",
    value: 51.91,
  },
  {
    inter: "A1",
    man: "A",
    woman: "A1",
    value: 55,
  },
  {
    inter: "Bb1",
    man: "#A",
    woman: "#A1",
    value: 58.27,
  },
  {
    inter: "B1",
    man: "B",
    woman: "B1",
    value: 61.74,
  },
  {
    inter: "C2",
    man: "c",
    woman: "C",
    value: 65.41,
  },
  {
    inter: "Db2",
    man: "#c",
    woman: "#C",
    value: 69.3,
  },
  {
    inter: "D2",
    man: "d",
    woman: "D",
    value: 73.42,
  },
  {
    inter: "Eb2",
    man: "#d",
    woman: "#D",
    value: 77.78,
  },
  {
    inter: "E2",
    man: "e",
    woman: "E",
    value: 82.41,
  },
  {
    inter: "F2",
    man: "f",
    woman: "#F",
    value: 87.31,
  },
  {
    inter: "Gb2",
    man: "#f",
    woman: "F",
    value: 92.5,
  },
  {
    inter: "G2",
    man: "g",
    woman: "G",
    value: 98,
  },
  {
    inter: "Ab2",
    man: "#g",
    woman: "#G",
    value: 103.83,
  },
  {
    inter: "A2",
    man: "a",
    woman: "A",
    value: 110,
  },
  {
    inter: "Bb2",
    man: "#a",
    woman: "#A",
    value: 116.54,
  },
  {
    inter: "B2",
    man: "b",
    woman: "B",
    value: 123.47,
  },
  {
    inter: "C3",
    man: "c1",
    woman: "c",
    value: 130.81,
  },
  {
    inter: "Db3",
    man: "#c1",
    woman: "#c",
    value: 138.59,
  },
  {
    inter: "D3",
    man: "d1",
    woman: "d",
    value: 146.83,
  },
  {
    inter: "Eb3",
    man: "#d1",
    woman: "#d",
    value: 155.56,
  },
  {
    inter: "E3",
    man: "e1",
    woman: "e",
    value: 164.81,
  },
  {
    inter: "F3",
    man: "f1",
    woman: "f",
    value: 174.61,
  },
  {
    inter: "Gb3",
    man: "#f1",
    woman: "#f",
    value: 185,
  },
  {
    inter: "G3",
    man: "g1",
    woman: "g",
    value: 196,
  },
  {
    inter: "Ab3",
    man: "#g1",
    woman: "#g",
    value: 207.65,
  },
  {
    inter: "A3",
    man: "a1",
    woman: "a",
    value: 220,
  },
  {
    inter: "Bb3",
    man: "#a1",
    woman: "#a",
    value: 233.08,
  },
  {
    inter: "B3",
    man: "b1",
    woman: "b",
    value: 246.94,
  },
  {
    inter: "C4",
    man: "c2",
    woman: "c1",
    value: 261.63,
  },
  {
    inter: "Db4",
    man: "#c2",
    woman: "#c1",
    value: 277.18,
  },
  {
    inter: "D4",
    man: "d2",
    woman: "d1",
    value: 293.66,
  },
  {
    inter: "Eb4",
    man: "#d2",
    woman: "#d1",
    value: 311.13,
  },
  {
    inter: "E4",
    man: "e2",
    woman: "e1",
    value: 329.63,
  },
  {
    inter: "F4",
    man: "f2",
    woman: "f1",
    value: 349.23,
  },
  {
    inter: "Gb4",
    man: "#f2",
    woman: "#f1",
    value: 369.99,
  },
  {
    inter: "G4",
    man: "g2",
    woman: "g1",
    value: 392,
  },
  {
    inter: "Ab4",
    man: "#g2",
    woman: "#g1",
    value: 415.3,
  },
  {
    inter: "A4",
    man: "a2",
    woman: "a1",
    value: 440,
  },
  {
    inter: "Bb4",
    man: "#a2",
    woman: "#a1",
    value: 466.16,
  },
  {
    inter: "B4",
    man: "b2",
    woman: "b1",
    value: 493.88,
  },
  {
    inter: "C5",
    man: "c3",
    woman: "c2",
    value: 523.25,
  },
  {
    inter: "Db5",
    man: "#c3",
    woman: "#c2",
    value: 554.37,
  },
  {
    inter: "D5",
    man: "d3",
    woman: "d2",
    value: 587.33,
  },
  {
    inter: "Eb5",
    man: "#d3",
    woman: "#d2",
    value: 622.25,
  },
  {
    inter: "E5",
    man: "e3",
    woman: "e2",
    value: 659.26,
  },
  {
    inter: "F5",
    man: "f3",
    woman: "f2",
    value: 698.46,
  },
  {
    inter: "Gb5",
    man: "#f3",
    woman: "#f2",
    value: 739.99,
  },
  {
    inter: "G5",
    man: "g3",
    woman: "g2",
    value: 783.99,
  },
  {
    inter: "Ab5",
    man: "#g3",
    woman: "#g2",
    value: 830.61,
  },
  {
    inter: "A5",
    man: "a3",
    woman: "a2",
    value: 880,
  },
  {
    inter: "Bb5",
    man: "#a3",
    woman: "#a2",
    value: 932.33,
  },
  {
    inter: "B5",
    man: "b3",
    woman: "b2",
    value: 987.77,
  },
  {
    inter: "C6",
    man: "c4",
    woman: "c3",
    value: 1046.5,
  },
  {
    inter: "Db6",
    man: "#c4",
    woman: "#c3",
    value: 1108.73,
  },
  {
    inter: "D6",
    man: "d4",
    woman: "d3",
    value: 1174.66,
  },
  {
    inter: "Eb6",
    man: "#d4",
    woman: "#d3",
    value: 1244.51,
  },
  {
    inter: "E6",
    man: "e4",
    woman: "e3",
    value: 1318.51,
  },
  {
    inter: "F6",
    man: "f4",
    woman: "f3",
    value: 1396.91,
  },
  {
    inter: "Gb6",
    man: "#f4",
    woman: "#f3",
    value: 1479.98,
  },
  {
    inter: "G6",
    man: "g4",
    woman: "g3",
    value: 1567.98,
  },
  {
    inter: "Ab6",
    man: "#g4",
    woman: "#g3",
    value: 1661.22,
  },
  {
    inter: "A6",
    man: "a4",
    woman: "a3",
    value: 1760,
  },
  {
    inter: "Bb6",
    man: "#a4",
    woman: "#a3",
    value: 1864.66,
  },
  {
    inter: "B6",
    man: "b4",
    woman: "b3",
    value: 1975.53,
  },
  {
    inter: "C7",
    man: "c5",
    woman: "c4",
    value: 2093,
  },
  {
    inter: "Db7",
    man: "#c5",
    woman: "#c4",
    value: 2217.46,
  },
  {
    inter: "D7",
    man: "d5",
    woman: "d4",
    value: 2349.32,
  },
  {
    inter: "Eb7",
    man: "#d5",
    woman: "#d4",
    value: 2489.02,
  },
  {
    inter: "E7",
    man: "e5",
    woman: "e4",
    value: 2637.02,
  },
  {
    inter: "F7",
    man: "f5",
    woman: "f4",
    value: 2793.83,
  },
  {
    inter: "Gb7",
    man: "#f5",
    woman: "#f4",
    value: 2959.96,
  },
  {
    inter: "G7",
    man: "g5",
    woman: "g4",
    value: 3135.96,
  },
  {
    inter: "Ab7",
    man: "#g5",
    woman: "#g4",
    value: 3322.44,
  },
  {
    inter: "A7",
    man: "a5",
    woman: "a4",
    value: 3520,
  },
  {
    inter: "Bb7",
    man: "#a5",
    woman: "#a4",
    value: 3729.31,
  },
  {
    inter: "B7",
    man: "b5",
    woman: "b4",
    value: 3951.07,
  },
  {
    inter: "C8",
    man: "c6",
    woman: "c5",
    value: 4186.01,
  },
];

function getPitch(freq) {
  "use strict";

  var minIndex = 0;
  var maxIndex = PITCH_DATA.length - 1;
  var currentIndex;
  var currentElement;
  if (freq > PITCH_DATA[maxIndex].value) return PITCH_DATA[maxIndex];

  while (minIndex <= maxIndex) {
    currentIndex = ((minIndex + maxIndex) / 2) | 0;
    currentElement = PITCH_DATA[currentIndex];

    if (currentElement.value < freq) {
      minIndex = currentIndex + 1;
    } else if (currentIndex < maxIndex) {
      maxIndex = currentIndex;
    } else {
      if (
        currentIndex > 0 &&
        Math.abs(PITCH_DATA[currentIndex].value - freq) >
          Math.abs(PITCH_DATA[currentIndex - 1].value - freq)
      ) {
        return PITCH_DATA[currentIndex - 1];
      }
      return currentElement;
    }
  }

  return PITCH_DATA[0];
}

export default {
  name: "HelloWorld",
  data() {
    return {
      audioContext: null,
      source: null,
      analyser: null,
      note: {},
      echartOptions: {
        animation: false,
        title: {
          text: "柱状图动画延迟",
        },
        legend: {
          data: ["bar"],
        },
        tooltip: {},
        xAxis: {
          data: [],
          // splitLine: {
          //   show: false,
          // },
        },
        yAxis: {
          max: 256,
          min: 0,
        },
        series: [
          {
            name: "bar",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    // this.initAudoContext();
      navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(this.handleSuccess)
  },
  methods: {
    handleSuccess(stream) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();
      console.log(this.$refs.audio);
      this.source = this.audioContext.createMediaStreamSource(
        stream
      );
      this.analyser = this.audioContext.createAnalyser();
      this.source.connect(this.analyser);
      // this.analyser.connect(this.audioContext.destination);
      for (let i = 0; i < this.analyser.frequencyBinCount; i++) {
        this.echartOptions.xAxis.data.push(
          i * (44410 / 2 / this.analyser.frequencyBinCount)
        );
      }
    },
    // initAudoContext() {
    //   const AudioContext = window.AudioContext || window.webkitAudioContext;
    //   this.audioContext = new AudioContext();
    //   console.log(this.$refs.audio);
    //   this.source = this.audioContext.createMediaElementSource(
    //     this.$refs.audio
    //   );
    //   this.analyser = this.audioContext.createAnalyser();
    //   this.analyser.fftSize = 4096
    //   this.source.connect(this.analyser);
    //   this.analyser.connect(this.audioContext.destination);
    //   for (let i = 0; i < this.analyser.frequencyBinCount; i++) {
    //     this.echartOptions.xAxis.data.push(
    //       i * (44410 / 2 / this.analyser.frequencyBinCount)
    //     );
    //   }
    // },
    draw() {
      const voiceHeight = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(voiceHeight);
      this.note = getPitch(
        (
          (voiceHeight.indexOf(Math.max(...voiceHeight)) * 44410) /
          2 /
          this.analyser.frequencyBinCount
        )
      );
      this.echartOptions.series[0].data = Array.from(voiceHeight);
    },
    play() {
      this.audioContext.resume();
      // this.$refs.audio.play();
      setInterval(this.draw, 100);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

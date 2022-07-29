<template>
  <div>
    <canvas id="pressureChart" width="680" height="180"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  components: {},
  data() {
    return {
      pressureStats: null,
    };
  },
  mounted() {
    this.emitter.on("forecast", (forecast) => {
      let one = forecast.data.list[0].main.pressure;
      let three = forecast.data.list[2].main.pressure;
      let five = forecast.data.list[4].main.pressure;
      let seven = forecast.data.list[6].main.pressure;
      let nine = forecast.data.list[8].main.pressure;
      let ten = forecast.data.list[9].main.pressure;
      const arr = [one, three, five, seven, nine, ten];
      console.log("PRESSURE", arr);
      this.pressureStats = arr;
      const stats = this.pressureStats;
      this.initCharts(stats);
    });
    if (this.pressureStats) {
      const stats = this.pressureStats;
      this.initCharts(stats);
    }
  },
  methods: {
    initCharts(stats) {
      const ctx = document.getElementById("pressureChart");

      const myChart2 = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "7/27 03:00",
            "7/27 06:00",
            "7/27 09:00",
            "7/27 00:00",
            "7/28 06:00",
            "7/28 12:00",
          ],
          datasets: [
            {
              label: "Pressure: ",
              data: stats,
              borderColor: "#60A54F",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      myChart2;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
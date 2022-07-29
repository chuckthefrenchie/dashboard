<template>
  <div>
    <canvas id="humidityChart" width="680" height="180"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  components: {},
  data() {
    return {
      humidityStats: null,
    };
  },
  mounted() {
    this.emitter.on("forecast", (forecast) => {
      let one = forecast.data.list[0].main.humidity;
      let three = forecast.data.list[2].main.humidity;
      let five = forecast.data.list[4].main.humidity;
      let seven = forecast.data.list[6].main.humidity;
      let nine = forecast.data.list[8].main.humidity;
      let ten = forecast.data.list[9].main.humidity;
      const arr = [one, three, five, seven, nine, ten];
      console.log("HUMIDITY", arr);
      this.humidityStats = arr;
      const stats = this.humidityStats;
      this.initCharts(stats);
    });
    if (this.humidityStats) {
      const stats = this.humidityStats;
      this.initCharts(stats);
    }
  },
  methods: {
    initCharts(stats) {
      const ctx = document.getElementById("humidityChart");

      const myChart3 = new Chart(ctx, {
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
              label: "Humidity: ",
              data: stats,
              borderColor: "rgb(75, 192, 192)",
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
      myChart3;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
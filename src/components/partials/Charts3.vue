<template>
    <div>
     <canvas id="chart3" width="680" height="180"></canvas> 
    </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const ctx = document.getElementById("chart3");

      const myChart = new Chart(ctx, {
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
              data: [30, 28, 25, 19, 27, 32], //add temparature here
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
      myChart;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>